#!/usr/bin/env python3
"""Split each lesson MP3 into per-turn time ranges and write turns.json next to it.

The MP3 is one continuous conversation, so we cannot tell turn boundaries from
silence alone (pauses between sentences look like pauses between speakers).
Instead we align the silences to the transcript: each boundary between turn i
and i+1 should sit where the cumulative *speech* time matches the cumulative
share of transcript characters. A small DP picks the best N-1 silences.

Usage:  python3 tools/make_turns.py            # all lessons
        python3 tools/make_turns.py 02 16      # only lessons 02 and 16
Requires ffmpeg on PATH.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
# Detection settings tried in order; the first one that aligns well wins, otherwise
# the best of them is kept (quick back-and-forth turns need a shorter silence).
ANCHOR_SIGMA_S = 1.2     # how far a boundary may drift from its transcript-length position
SILENCE_BONUS = 0.8      # reward for choosing longer silences as turn boundaries
DETECTION_SETTINGS = [(-40, 0.15), (-40, 0.10), (-35, 0.10), (-35, 0.07), (-30, 0.07), (-45, 0.07)]
# Alignment is "trusted" when every turn's speaking rate stays within this
# fraction of the lesson average. Lessons above it fall back to browser TTS.
MAX_DEVIATION_S = 0.6  # worst turn's speaking rate vs. the lesson average, as a fraction


def parse_turns(text):
    turns = []
    for line in text.splitlines():
        line = line.strip()
        if not line:
            continue
        m = re.match(r"^([^:]{1,80}):\s*(.+)$", line)
        if m:
            turns.append({"speaker": m.group(1).strip(), "text": m.group(2).strip()})
        elif turns:
            turns[-1]["text"] += " " + line
    return turns


def audio_duration(mp3):
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(mp3)],
        capture_output=True, text=True, check=True,
    ).stdout
    return float(out.strip())


def detect_silences(mp3, noise_db, min_silence):
    proc = subprocess.run(
        ["ffmpeg", "-hide_banner", "-nostats", "-i", str(mp3),
         "-af", f"silencedetect=noise={noise_db}dB:d={min_silence}", "-f", "null", "-"],
        capture_output=True, text=True,
    )
    starts = [float(x) for x in re.findall(r"silence_start: (-?[\d.]+)", proc.stderr)]
    ends = [(float(a), float(b)) for a, b in re.findall(r"silence_end: ([\d.]+) \| silence_duration: ([\d.]+)", proc.stderr)]
    silences = []
    for i, (end, dur) in enumerate(ends):
        start = starts[i] if i < len(starts) else end - dur
        silences.append((max(start, 0.0), end))
    return silences


def align(turns, silences, total):
    """Pick N-1 silences so each turn's length matches its transcript length.

    Expected duration of a turn = chars / rate, where rate is the lesson's
    average speaking rate. Cost = squared z-score of each turn's duration, with
    a small bonus for longer silences (real speaker changes pause longer).
    """
    n = len(turns)
    lead_end = silences[0][1] if silences and silences[0][0] <= 0.05 else 0.0
    trail_start = silences[-1][0] if silences and silences[-1][1] >= total - 0.05 else total
    inner = [s for s in silences if s[0] > lead_end + 0.05 and s[1] < trail_start - 0.05]
    k = len(inner)
    if k < n - 1:
        return None, None, None

    chars = [len(t["text"]) for t in turns]
    speech_total = (trail_start - lead_end) - sum(e - s for s, e in inner)
    rate = sum(chars) / speech_total  # chars per second of actual speech

    def turn_cost(start, end, nchars, n_inner_silence):
        # speech time of the span = span minus internal pauses; approximate the
        # internal pauses by the ones we skipped (passed in as total skipped).
        expected = nchars / rate
        sigma = 0.25 * expected + 0.35
        return ((end - start - n_inner_silence - expected) / sigma) ** 2

    # skipped[j][m] = total silence between inner[j] end and inner[m] start
    prefix = [0.0]
    for s, e in inner:
        prefix.append(prefix[-1] + (e - s))

    def skipped(j, m):  # silences strictly between boundary j and boundary m
        return prefix[m] - prefix[j + 1]

    # Anchor: boundary i should sit near the point where the cumulative share of
    # transcript characters has been spoken. Stops small per-turn errors from
    # accumulating into a shifted alignment (everything off by one turn).
    cum_chars, total_chars = 0, sum(chars)
    anchor = []
    for c in chars[:-1]:
        cum_chars += c
        anchor.append(cum_chars / total_chars * speech_total)
    spoken_before = [(inner[j][0] - lead_end) - prefix[j] for j in range(k)]

    def anchor_cost(i, j):
        return ((spoken_before[j] - anchor[i]) / ANCHOR_SIGMA_S) ** 2

    INF = float("inf")
    # cost[i][j]: first i+1 turns done, boundary i is inner[j]
    cost = [[INF] * k for _ in range(n - 1)]
    back = [[-1] * k for _ in range(n - 1)]
    for j in range(k):
        skip = prefix[j]  # silences before inner[j]
        cost[0][j] = turn_cost(lead_end, inner[j][0], chars[0], skip) + anchor_cost(0, j) - SILENCE_BONUS * (inner[j][1] - inner[j][0])
    for i in range(1, n - 1):
        for j in range(i, k):
            best, best_m = INF, -1
            for m in range(i - 1, j):
                if cost[i - 1][m] == INF:
                    continue
                c = cost[i - 1][m] + turn_cost(inner[m][1], inner[j][0], chars[i], skipped(m, j))
                if c < best:
                    best, best_m = c, m
            if best_m >= 0:
                cost[i][j] = best + anchor_cost(i, j) - SILENCE_BONUS * (inner[j][1] - inner[j][0])
                back[i][j] = best_m
    # close with the last turn
    best, best_j = INF, -1
    for j in range(n - 2, k):
        if cost[n - 2][j] == INF:
            continue
        total_skip = prefix[k] - prefix[j + 1]
        c = cost[n - 2][j] + turn_cost(inner[j][1], trail_start, chars[-1], total_skip)
        if c < best:
            best, best_j = c, j
    if best_j < 0:
        return None, None, None
    chosen = [best_j]
    j = best_j
    for i in range(n - 2, 0, -1):
        j = back[i][j]
        chosen.append(j)
    chosen.reverse()

    bounds = [inner[c] for c in chosen]
    result, start = [], lead_end
    worst = 0.0
    score = 0.0
    for i, t in enumerate(turns):
        end = bounds[i][0] if i < len(bounds) else trail_start
        end = max(end, start + 0.2)
        rate_i = len(t["text"]) / (end - start)
        score += ((rate_i - rate) / rate) ** 2
        if len(t["text"]) >= 25:
            worst = max(worst, abs(rate_i - rate) / rate)
        result.append({**t, "start": round(start, 2), "end": round(end, 2)})
        if i < len(bounds):
            start = bounds[i][1]
    return result, worst, score


def process(folder):
    mp3s = sorted(folder.glob("Lesson-*.mp3"))
    script = folder / "script_tts.txt"
    if not mp3s or not script.exists():
        return None
    mp3 = mp3s[0]
    turns = parse_turns(script.read_text(encoding="utf-8"))
    total = audio_duration(mp3)
    result, deviation, best_score = None, None, None
    for noise_db, min_silence in DETECTION_SETTINGS:
        candidate, dev, score = align(turns, detect_silences(mp3, noise_db, min_silence), total)
        if candidate is not None and (best_score is None or score < best_score):
            result, deviation, best_score = candidate, dev, score
        if deviation is not None and deviation <= MAX_DEVIATION_S and score < 1.0:
            break
    if result is None:
        return {"folder": folder.name, "ok": False, "reason": "not enough silences"}
    ok = deviation <= MAX_DEVIATION_S
    out = {
        "audio": mp3.name,
        "duration": round(total, 2),
        "confidence": "high" if ok else "low",
        "max_rate_deviation": round(deviation, 2),
        "turns": result,
    }
    (folder / "turns.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    return {"folder": folder.name, "ok": ok, "turns": len(turns), "deviation": round(deviation, 2)}


def main():
    wanted = set(sys.argv[1:])
    for folder in sorted(ROOT.glob("Lesson *")):
        m = re.match(r"Lesson (\d+)", folder.name)
        if not m or (wanted and m.group(1) not in wanted):
            continue
        r = process(folder)
        if r:
            status = "OK " if r["ok"] else "LOW"
            print(f"{status} {r['folder']}: {r.get('turns', '-')} turns, worst rate deviation {r.get('deviation', r.get('reason'))}")


if __name__ == "__main__":
    main()
