/* Training layer. The goal is to react in English meetings, not just read subtitles:
   1 blind listen -> 2 check -> 3 shadow -> 4 reflex drill (times how fast you start speaking).
   Also renders the Home dashboard. Progress lives in localStorage; recordings stay in memory. */

const STORE = {
  history: "business-english.reflex-history",
  hard: "business-english.hard-phrases",
  listens: "business-english.listen-counts",
  days: "business-english.practice-days",
  week: "business-english.weekly-habits"
};

const REFLEX_GOOD_MS = 2000;
const REFLEX_OK_MS = 3000;
const REPLY_TIMEOUT_MS = 6000;
const BLIND_LISTEN_TARGET = 3;

const train = {
  lesson: null,
  turns: [],
  audio: null,
  segments: false,   // true when turns.json gives trustworthy per-turn timings
  rate: 1,
  runId: 0,          // bumped to cancel any running shadow / drill loop
  mode: "idle",      // idle | shadow | drill
  busy: false,       // a segment is playing (do not count it as a full listen)
  mic: null,
  waitNext: null
};

const lessonMediaCache = new Map();
let homeAudio = null;
let historyCache = null;

/* ---------- storage ---------- */

function loadJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch (_) {
    return fallback;
  }
}

function saveJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (_) {
    // Storage unavailable: the session still works, progress just is not kept.
  }
}

function getHistory() {
  if (!historyCache) historyCache = loadJson(STORE.history, []);
  return historyCache;
}

function pushHistory(entry) {
  const history = [...getHistory(), entry].slice(-200);
  historyCache = history;
  saveJson(STORE.history, history);
}

function dateKey(date = new Date()) {
  const pad = n => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function mondayOf(date = new Date()) {
  const monday = new Date(date);
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  monday.setHours(0, 0, 0, 0);
  return monday;
}

function markPracticeDay() {
  const days = new Set(loadJson(STORE.days, []));
  days.add(dateKey());
  saveJson(STORE.days, [...days].sort().slice(-400));
}

function practiceStreak() {
  const days = new Set(loadJson(STORE.days, []));
  const cursor = new Date();
  if (!days.has(dateKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (days.has(dateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function lessonReflexLabel(lessonId) {
  const latest = [...getHistory()].reverse().find(x => x.lessonId === lessonId && x.avgMs != null);
  if (!latest) return "";
  return `${lessonPassed(lessonId) ? "✔ " : ""}⚡ ${(latest.avgMs / 1000).toFixed(1)}s`;
}

/* ---------- pacing: one new lesson a night, review what is not yet fast enough ---------- */

const PASS_FAST_RATE = 0.8;   // share of answers that must come within REFLEX_OK_MS

function lastDrill(lessonId) {
  return [...getHistory()].reverse().find(x => x.lessonId === lessonId);
}

function lessonStudied(lessonId) {
  const lesson = state.lessons.find(l => l.id === lessonId);
  return Boolean(lesson?.completed || lastDrill(lessonId));
}

// Passed = the latest drill met the module's reflex target and at least 80% of answers were in time.
// Without a mic there is no timing, so only the self-rated "in time" share counts.
function lessonPassed(lessonId) {
  const lesson = state.lessons.find(l => l.id === lessonId);
  const drill = lastDrill(lessonId);
  if (!lesson || !drill || !drill.total) return false;
  const fastRate = drill.fast / drill.total;
  return fastRate >= PASS_FAST_RATE && (drill.avgMs == null || drill.avgMs <= lesson.targetMs);
}

// Studied lessons that have not passed yet: never-drilled first, then slowest, then longest since last drill.
function reviewQueue() {
  const NEVER = 1e9;
  return state.lessons
    .filter(l => lessonStudied(l.id) && !lessonPassed(l.id))
    .map(lesson => {
      const drill = lastDrill(lesson.id);
      return { lesson, drill, slow: drill?.avgMs ?? NEVER, at: drill?.t ?? 0 };
    })
    .sort((a, b) => (b.slow - a.slow) || (a.at - b.at));
}

function reviewStatsText(item) {
  const target = (item.lesson.targetMs / 1000).toFixed(1);
  if (!item.drill) return `chưa drill — cần ≤ ${target}s và 80% kịp`;
  const rate = item.drill.total ? Math.round(item.drill.fast / item.drill.total * 100) : 0;
  const avg = item.drill.avgMs != null ? `${(item.drill.avgMs / 1000).toFixed(1)}s · ` : "";
  return `${avg}${rate}% kịp — cần ≤ ${target}s và 80%`;
}

/* ---------- media ---------- */

// The MP3 is fetched as a blob so seeking works on any static server
// (python -m http.server does not support Range requests).
function loadLessonMedia(lesson) {
  if (!lessonMediaCache.has(lesson.id)) {
    lessonMediaCache.set(lesson.id, (async () => {
      let url = null;
      let data = null;
      try {
        if (lesson.files.mp3) {
          const response = await fetch(lesson.files.mp3);
          if (response.ok) url = URL.createObjectURL(await response.blob());
        }
      } catch (error) {
        console.warn("Không tải được MP3:", error);
      }
      try {
        if (lesson.files.turns) {
          const response = await fetch(lesson.files.turns, { cache: "no-store" });
          if (response.ok) data = await response.json();
        }
      } catch (error) {
        console.warn("Không đọc được turns.json:", error);
      }
      return { url, data };
    })());
  }
  return lessonMediaCache.get(lesson.id);
}

function whenReady(audio) {
  if (audio.readyState >= 1) return Promise.resolve();
  return new Promise(resolve => audio.addEventListener("loadedmetadata", resolve, { once: true }));
}

function sleep(ms, runId) {
  return new Promise(resolve => setTimeout(() => resolve(train.runId === runId), ms));
}

async function playSegment(audio, start, end, rate, runId) {
  await whenReady(audio);
  return new Promise(resolve => {
    let timer = null;
    const finish = ok => {
      clearInterval(timer);
      audio.pause();
      train.busy = false;
      resolve(ok);
    };
    train.busy = true;
    audio.playbackRate = rate;
    audio.currentTime = Math.max(0, start - 0.05);
    audio.play().then(() => {
      timer = setInterval(() => {
        if (train.runId !== runId) return finish(false);
        if (audio.currentTime >= end || audio.ended) finish(true);
      }, 25);
    }).catch(() => finish(false));
  });
}

// Fallback for lessons whose turns could not be timed reliably (or have no MP3).
function speak(text, rate, runId) {
  return new Promise(resolve => {
    if (!("speechSynthesis" in window)) return resolve(false);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = rate;
    const voice = speechSynthesis.getVoices().find(v => /^en[-_]US/i.test(v.lang));
    if (voice) utterance.voice = voice;
    utterance.onend = () => resolve(train.runId === runId);
    utterance.onerror = () => resolve(false);
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  });
}

function playTurn(turn, rate, runId) {
  if (train.segments && train.audio) return playSegment(train.audio, turn.start, turn.end + 0.05, rate, runId);
  return speak(turn.text, rate, runId);
}

// Spoken length of a turn. The timings in turns.json are sometimes too short (e.g. 0.4s for a
// 7-word sentence), so never trust them below a speaking-rate estimate of ~2.7 words/second.
function turnSeconds(turn) {
  const words = turn.text.trim().split(/\s+/).filter(Boolean).length;
  const estimate = Math.max(1, words / 2.7);
  const timed = turn.end != null ? turn.end - turn.start : 0;
  return Math.max(timed, estimate);
}

// Shadowing: time the learner gets to repeat a sentence. Scales with the sentence length and the
// chosen pace, with a floor so very short sentences are not rushed.
const SHADOW_MIN_MS = 2500;
const SHADOW_PACES = { fast: 1.5, normal: 2, slow: 3 };

function shadowGapMs(turn, pace) {
  const mult = SHADOW_PACES[pace] || SHADOW_PACES.normal;
  return Math.max(SHADOW_MIN_MS, turnSeconds(turn) / train.rate * 1000 * mult + 1000);
}

// Resolves true when the wait ends (timer, or the learner pressing Next / Space), "replay" when
// they ask to hear the sentence again, and false when the run was stopped. ms = null waits for Next.
function shadowWait(ms, id) {
  return new Promise(resolve => {
    let timer = null;
    const done = value => {
      clearTimeout(timer);
      if (train.waitNext === done) train.waitNext = null;
      resolve(train.runId === id ? value : false);
    };
    train.waitNext = done;
    if (ms != null) timer = setTimeout(() => done(true), ms);
  });
}

function stopTraining() {
  train.runId += 1;
  train.mode = "idle";
  train.busy = false;
  setShadowLive(false);
  if (train.audio) train.audio.pause();
  if (homeAudio) homeAudio.pause();
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  if (train.waitNext) {
    const release = train.waitNext;
    train.waitNext = null;
    release(false);
  }
  stopMic();
  keepAwake(false);
}

// Phones dim and lock the screen mid-drill, which cuts the audio; ask to keep it on while training.
let wakeLock = null;
async function keepAwake(on) {
  try {
    if (on) {
      if (!wakeLock && navigator.wakeLock) wakeLock = await navigator.wakeLock.request("screen");
    } else if (wakeLock) {
      const lock = wakeLock;
      wakeLock = null;
      await lock.release();
    }
  } catch (_) {
    wakeLock = null;
  }
}

function stopMic() {
  if (!train.mic) return;
  train.mic.stream.getTracks().forEach(track => track.stop());
  train.mic.ctx.close().catch(() => {});
  train.mic = null;
}

/* ---------- lesson training panel ---------- */

async function mountTrain(lesson, transcript, token) {
  stopTraining();
  const panel = els.audioPanel;

  if (!lesson.files.mp3 && !transcript) {
    panel.innerHTML = `<div class="audio-empty">Lesson này chưa có audio hoặc script để luyện.</div>`;
    return;
  }

  panel.innerHTML = `<div class="audio-empty">Đang tải audio…</div>`;
  const media = await loadLessonMedia(lesson);
  if (token !== state.loadToken) return;

  const turns = media.data?.turns?.length
    ? media.data.turns
    : parseTranscript(transcript);

  train.lesson = lesson;
  train.turns = turns;
  train.segments = Boolean(media.url && media.data?.confidence === "high" && media.data.turns?.length);
  train.rate = 1;

  const listens = loadJson(STORE.listens, {})[lesson.id] || 0;
  const speakers = [...new Set(turns.map(t => t.speaker))];
  const defaultRole = speakers[1] || speakers[0] || "";
  const hardKeys = new Set(loadJson(STORE.hard, []).filter(x => x.lessonId === lesson.id).map(x => x.index));

  panel.innerHTML = trainHtml({ lesson, media, turns, speakers, defaultRole, listens, hardKeys });
  train.audio = panel.querySelector("#trainAudio");
  if (train.audio) {
    train.audio.addEventListener("ended", () => {
      if (train.mode !== "idle" || train.busy) return;
      const counts = loadJson(STORE.listens, {});
      counts[lesson.id] = (counts[lesson.id] || 0) + 1;
      saveJson(STORE.listens, counts);
      updateListenCount(counts[lesson.id]);
    });
  }
  panel.onclick = handleTrainClick;
  panel.onchange = handleTrainChange;
}

function trainHtml({ lesson, media, turns, speakers, defaultRole, listens, hardKeys }) {
  const n = String(lesson.number).padStart(2, "0");
  const audio = media.url
    ? `<audio id="trainAudio" controls preload="auto" src="${escapeHtml(media.url)}"></audio>`
    : `<div class="audio-empty">Lesson này chưa có file MP3 — các bước sẽ dùng giọng máy của trình duyệt.</div>`;

  const rateChips = [0.8, 1, 1.2].map(rate =>
    `<button class="chip ${rate === 1 ? "active" : ""}" data-act="rate" data-rate="${rate}">${rate}×</button>`).join("");

  const timingNote = turns.length && !train.segments
    ? `<p class="step-note warn">Bài này chưa cắt được từng câu chính xác → các nút nghe từng câu dùng giọng máy của trình duyệt.</p>`
    : "";

  const rows = turns.map((turn, i) => `
    <div class="turn-row" data-i="${i}">
      <span class="turn-speaker">${escapeHtml(turn.speaker)}</span>
      <span class="turn-text">${escapeHtml(turn.text)}</span>
      <button class="icon-btn" data-act="play-turn" data-i="${i}" title="Nghe lại câu này">▶</button>
      <button class="icon-btn hard-btn ${hardKeys.has(i) ? "on" : ""}" data-act="mark-hard" data-i="${i}" title="Nghe không ra → lưu vào Cụm khó">✋</button>
    </div>`).join("");

  const roleOptions = speakers.map(s =>
    `<option value="${escapeHtml(s)}" ${s === defaultRole ? "selected" : ""}>${escapeHtml(s)}</option>`).join("");

  const stepsAfterListen = turns.length ? `
    <section class="step-card">
      <div class="step-head"><span class="step-num">2</span><div><h3>Kiểm tra — chỗ nào nghe không ra?</h3>
        <p>Chỉ mở transcript <strong>sau khi</strong> nghe mù. Bấm ✋ vào câu nghe không ra để lưu vào “Cụm khó”.</p></div></div>
      <button class="btn" data-act="toggle-transcript" id="transcriptToggle">Hiện transcript (English)</button>
      <div id="transcriptList" class="turn-list hidden">${rows}</div>
    </section>

    <section class="step-card">
      <div class="step-head"><span class="step-num">3</span><div><h3>Nói theo (shadowing)</h3>
        <p>Nghe từng câu rồi nói lại ngay, không nhìn chữ. Chọn tốc độ ở bước 1.</p></div></div>
      <div class="shadow-settings">
        <label class="field field-wide"><span>Kiểu</span>
          <select id="shadowStyle">
            <option value="echo">Nghe xong rồi nói lại</option>
            <option value="together">Nói đồng thời với audio</option>
          </select>
        </label>
        <label class="field"><span>Số lần lặp</span>
          <select id="shadowReps"><option>1</option><option selected>2</option><option>3</option></select>
        </label>
        <label class="field"><span>Thời gian nói</span>
          <select id="shadowPace">
            <option value="fast" selected>Nhanh (1,5×)</option>
            <option value="normal">Vừa (2×)</option>
            <option value="slow">Chậm (3×)</option>
            <option value="manual">Tự bấm Tiếp</option>
          </select>
        </label>
      </div>
      <div class="shadow-actions">
        <button class="btn btn-primary shadow-start" data-act="shadow-start">▶ Bắt đầu</button>
        <div class="shadow-live">
          <button class="btn" data-act="shadow-replay" disabled>↺ Nghe lại</button>
          <button class="btn" data-act="shadow-next" disabled>Tiếp ▶</button>
          <button class="btn" data-act="shadow-stop" disabled>■ Dừng</button>
        </div>
      </div>
      <div id="shadowStatus" class="status-line shadow-status">Sẵn sàng.</div>
      <p class="step-note">Thời gian nói = độ dài câu × hệ số đã chọn. Phím <kbd>Space</kbd> qua câu sau, <kbd>Esc</kbd> dừng.</p>
    </section>

    <section class="step-card step-reflex">
      <div class="step-head"><span class="step-num">4</span><div><h3>⚡ Reflex drill — trả lời trong ≤ 2 giây</h3>
        <p>Bạn đóng vai một nhân vật. Audio hỏi → bạn nói ngay bằng tiếng Anh. App đo thời gian từ lúc câu hỏi kết thúc đến lúc bạn bắt đầu nói. Câu mẫu chỉ hiện <em>sau</em> khi bạn đã nói.</p></div></div>
      <div class="control-row">
        <label>Tôi đóng vai
          <select id="drillRole">${roleOptions}</select>
        </label>
        <label class="check"><input type="checkbox" id="drillShuffle"> Xáo thứ tự</label>
        <button class="btn btn-primary" data-act="drill-start">⚡ Bắt đầu drill</button>
        <button class="btn" data-act="drill-stop">■ Dừng</button>
      </div>
      <p class="step-note">Nên dùng tai nghe để mic không thu lại tiếng audio. Bản ghi giọng chỉ nằm trong trình duyệt, không gửi đi đâu.</p>
      <div id="drillStage" class="drill-stage"></div>
    </section>` : "";

  return `
    <div class="train">
      <section class="step-card">
        <div class="step-head"><span class="step-num">1</span><div><h3>Nghe mù — không transcript</h3>
          <p>Nghe ${BLIND_LISTEN_TARGET} lần, đừng nhìn chữ. Sau mỗi lần tự hỏi: ai hỏi gì, mình cần trả lời gì?</p></div></div>
        ${audio}
        <div class="control-row">
          <span class="chip-label">Tốc độ</span>${rateChips}
          <span class="listen-count" id="listenCount">Đã nghe: <strong>${listens}</strong> / ${BLIND_LISTEN_TARGET}</span>
        </div>
        ${timingNote}
      </section>
      ${stepsAfterListen}
    </div>`;
}

function updateListenCount(count) {
  const el = document.getElementById("listenCount");
  if (el) el.innerHTML = `Đã nghe: <strong>${count}</strong> / ${BLIND_LISTEN_TARGET}`;
}

function handleTrainChange() {
  // Nothing to react to yet; kept so selects do not bubble into the click handler.
}

function handleTrainClick(event) {
  const target = event.target.closest("[data-act]");
  if (!target) return;
  const index = Number(target.dataset.i);

  switch (target.dataset.act) {
    case "rate": {
      train.rate = Number(target.dataset.rate);
      document.querySelectorAll('[data-act="rate"]').forEach(chip =>
        chip.classList.toggle("active", chip === target));
      if (train.audio && train.mode === "idle") train.audio.playbackRate = train.rate;
      break;
    }
    case "toggle-transcript": {
      const list = document.getElementById("transcriptList");
      const open = list.classList.toggle("hidden") === false;
      target.textContent = open ? "Ẩn transcript" : "Hiện transcript (English)";
      break;
    }
    case "play-turn": {
      stopTraining();
      playTurn(train.turns[index], train.rate, train.runId);
      break;
    }
    case "mark-hard": {
      toggleHardPhrase(index);
      target.classList.toggle("on");
      break;
    }
    case "shadow-start": target.blur(); runShadow(); break;
    case "shadow-next": if (train.mode === "shadow" && train.waitNext) train.waitNext(true); break;
    case "shadow-replay": if (train.mode === "shadow" && train.waitNext) train.waitNext("replay"); break;
    case "shadow-stop": stopTraining(); setShadowStatus("Đã dừng."); break;
    case "drill-start": runReflex(); break;
    case "drill-stop": stopTraining(); renderStage(`<div class="stage-line">Đã dừng.</div>`); break;
    case "drill-next": if (train.waitNext) { const go = train.waitNext; train.waitNext = null; go(true); } break;
    case "drill-model": playModelAnswer(); break;
    case "drill-mine": playMyReply(); break;
    case "self-ok": resolveManual(true); break;
    case "self-freeze": resolveManual(false); break;
    default: break;
  }
}

function toggleHardPhrase(index) {
  const turn = train.turns[index];
  const list = loadJson(STORE.hard, []);
  const at = list.findIndex(x => x.lessonId === train.lesson.id && x.index === index);
  if (at >= 0) list.splice(at, 1);
  else list.push({ lessonId: train.lesson.id, index, speaker: turn.speaker, text: turn.text, ts: Date.now() });
  saveJson(STORE.hard, list);
}

/* ---------- shadowing ---------- */

function setShadowStatus(text) {
  const el = document.getElementById("shadowStatus");
  if (el) el.textContent = text;
}

// Replay / Next / Stop only make sense while a shadowing run is going.
function setShadowLive(on) {
  document.querySelectorAll(".shadow-live .btn").forEach(btn => { btn.disabled = !on; });
  document.getElementById("shadowStatus")?.classList.toggle("is-live", on);
}

async function runShadow() {
  stopTraining();
  const id = train.runId;
  train.mode = "shadow";
  setShadowLive(true);
  keepAwake(true);
  const reps = Number(document.getElementById("shadowReps").value);
  const together = document.getElementById("shadowStyle").value === "together";
  const pace = document.getElementById("shadowPace").value;   // fast | normal | slow | manual

  for (let i = 0; i < train.turns.length; i += 1) {
    const turn = train.turns[i];
    const where = `Câu ${i + 1}/${train.turns.length}`;
    for (let rep = 1; rep <= reps; rep += 1) {
      let again = true;
      while (again) {
        again = false;
        setShadowStatus(`${where} · lần ${rep}/${reps} — 🎧 nghe`);
        if (!await playTurn(turn, train.rate, id)) return;
        if (together) {
          if (!await sleep(250, id)) return;
          continue;
        }
        const manual = pace === "manual";
        const ms = manual ? null : shadowGapMs(turn, pace);
        setShadowStatus(manual
          ? `${where} · lần ${rep}/${reps} — 🗣 nói lại, xong thì bấm Tiếp (Space)`
          : `${where} · lần ${rep}/${reps} — 🗣 nói lại (~${Math.round(ms / 1000)}s) · Space = qua câu sau`);
        const result = await shadowWait(ms, id);
        if (result === false) return;
        again = result === "replay";
      }
    }
  }
  train.mode = "idle";
  setShadowLive(false);
  keepAwake(false);
  setShadowStatus("Xong. Câu nào còn vấp thì bấm ✋ ở bước 2.");
}

/* ---------- reflex drill ---------- */

function renderStage(html) {
  const stage = document.getElementById("drillStage");
  if (!stage) return;
  stage.innerHTML = html;
  // On a phone the stage sits below the fold; keep the current question / answer buttons in view.
  if (matchMedia("(max-width: 900px)").matches) stage.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

// Must be called synchronously from the tap/click: iOS Safari leaves AudioContexts that are
// created after an await in the "suspended" state, and the mic level would read as silence.
function createAudioContext() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  const ctx = new Ctx();
  if (ctx.resume) ctx.resume().catch(() => {});
  return ctx;
}

async function initMic(ctx) {
  if (!ctx || !navigator.mediaDevices?.getUserMedia) return null;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true }
    });
    if (ctx.state === "suspended") await ctx.resume();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 1024;
    ctx.createMediaStreamSource(stream).connect(analyser);
    train.mic = { stream, ctx, analyser, threshold: 0.03 };
    return train.mic;
  } catch (_) {
    ctx.close().catch(() => {});
    return null;
  }
}

function micLevel(mic, buffer) {
  mic.analyser.getByteTimeDomainData(buffer);
  let sum = 0;
  for (const v of buffer) {
    const centered = (v - 128) / 128;
    sum += centered * centered;
  }
  return Math.sqrt(sum / buffer.length);
}

async function calibrateMic(mic, id) {
  const buffer = new Uint8Array(mic.analyser.fftSize);
  let peak = 0;
  const until = performance.now() + 900;
  while (performance.now() < until) {
    peak = Math.max(peak, micLevel(mic, buffer));
    if (!await sleep(30, id)) return false;
  }
  mic.threshold = Math.max(0.02, peak * 2.5 + 0.01);
  return true;
}

function drillPairs(role) {
  const pairs = [];
  train.turns.forEach((turn, i) => {
    const answer = train.turns[i + 1];
    if (turn.speaker !== role && answer && answer.speaker === role) pairs.push({ question: turn, answer, index: i });
  });
  return pairs;
}

function latencyClass(ms) {
  if (ms == null) return "bad";
  if (ms <= REFLEX_GOOD_MS) return "good";
  if (ms <= REFLEX_OK_MS) return "ok";
  return "bad";
}

function latencyLabel(ms) {
  if (ms == null) return "Không trả lời kịp";
  if (ms <= REFLEX_GOOD_MS) return "Rất tốt — phản xạ đạt mục tiêu";
  if (ms <= REFLEX_OK_MS) return "Tạm được — cố rút xuống dưới 2s";
  return "Chậm — nghe lại câu mẫu rồi thử lại";
}

let drillCurrent = null;   // { answer, replyUrl } for the result being shown
let manualResolver = null;

async function runReflex() {
  stopTraining();
  const id = train.runId;
  const audioCtx = createAudioContext();
  const role = document.getElementById("drillRole").value;
  let pairs = drillPairs(role);
  if (!pairs.length) {
    renderStage(`<div class="stage-line">Vai “${escapeHtml(role)}” không có câu trả lời nào theo sau câu hỏi. Chọn vai khác.</div>`);
    return;
  }
  if (document.getElementById("drillShuffle").checked) {
    pairs = pairs.map(p => ({ p, r: Math.random() })).sort((a, b) => a.r - b.r).map(x => x.p);
  }

  train.mode = "drill";
  keepAwake(true);
  renderStage(`<div class="stage-line">Đang xin quyền dùng micro…</div>`);
  const mic = await initMic(audioCtx);
  if (!mic && audioCtx) audioCtx.close().catch(() => {});
  if (train.runId !== id) { stopMic(); return; }

  if (mic) {
    renderStage(`<div class="stage-line">🤫 Giữ yên lặng 1 giây để hiệu chuẩn micro…</div>`);
    if (!await calibrateMic(mic, id)) return;
  }

  const results = [];
  for (let n = 0; n < pairs.length; n += 1) {
    const { question, answer } = pairs[n];
    const header = `Câu ${n + 1}/${pairs.length}`;

    renderStage(`<div class="stage-line">${header} · 🎧 Nghe…</div>`);
    if (!await playTurn(question, 1, id)) {
      if (train.runId === id) renderStage(`<div class="stage-line">Không phát được audio câu hỏi. Kiểm tra loa/tai nghe rồi bấm Bắt đầu lại.</div>`);
      return;
    }

    const reply = mic ? await captureReply(mic, id, header) : await captureManual(id, header);
    if (!reply) return;

    results.push(reply);
    drillCurrent = { answer, replyUrl: reply.url || null };
    const isLast = n === pairs.length - 1;
    renderStage(resultHtml(reply, answer, isLast));
    if (!await new Promise(resolve => { train.waitNext = resolve; })) return;
    if (train.runId !== id) return;
  }

  finishDrill(results, role, Boolean(mic));
}

function captureReply(mic, id, header) {
  return new Promise(resolve => {
    renderStage(`
      <div class="stage-line">${header} · 🎤 <strong>Nói ngay!</strong></div>
      <div class="timer-track"><div id="timerFill" class="timer-fill good"></div></div>
      <div class="stage-hint">Mốc xanh ≤ 2s · vàng ≤ 3s · đỏ là chậm</div>`);

    const chunks = [];
    const recorder = new MediaRecorder(mic.stream);
    recorder.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
    const buffer = new Uint8Array(mic.analyser.fftSize);
    const t0 = performance.now();
    let onsetAt = null;
    let lastVoice = null;
    let loudFrames = 0;
    let verdict = null;

    const finish = result => {
      clearInterval(timer);
      verdict = result;
      recorder.onstop = () => {
        if (verdict === false && train.runId !== id) return resolve(null);
        const url = chunks.length ? URL.createObjectURL(new Blob(chunks, { type: recorder.mimeType })) : null;
        resolve({
          answered: verdict === true,
          ms: verdict === true ? Math.max(0, Math.round(onsetAt - t0)) : null,
          url
        });
      };
      if (recorder.state !== "inactive") recorder.stop();
      else recorder.onstop();
    };

    // Recording is a bonus (replay of your own answer); timing must still work if it cannot start.
    try { recorder.start(); } catch (error) { console.warn("Không ghi âm được:", error); }
    const timer = setInterval(() => {
      if (train.runId !== id) return finish(false);
      const now = performance.now();
      const elapsed = now - t0;
      const level = micLevel(mic, buffer);
      const fill = document.getElementById("timerFill");

      if (onsetAt === null) {
        if (fill) {
          fill.style.width = `${Math.min(100, elapsed / REFLEX_OK_MS * 100)}%`;
          fill.className = `timer-fill ${latencyClass(elapsed)}`;
        }
        if (elapsed > 150) {
          loudFrames = level > mic.threshold ? loudFrames + 1 : 0;
          if (loudFrames >= 3) { onsetAt = now - 75; lastVoice = now; }
        }
        if (elapsed > REPLY_TIMEOUT_MS) finish("timeout");
      } else {
        if (level > mic.threshold) lastVoice = now;
        if (now - lastVoice > 1200 || now - onsetAt > 20000) finish(true);
      }
    }, 25);
  });
}

function captureManual(id, header) {
  renderStage(`
    <div class="stage-line">${header} · 🎤 <strong>Nói ngay bằng tiếng Anh!</strong></div>
    <div class="stage-hint">${window.isSecureContext
        ? "Không dùng được micro (có thể bạn đã từ chối quyền) nên hãy tự đánh giá nhé."
        : "Trình duyệt chặn micro vì trang chưa dùng HTTPS (xem README, mục “Học trên điện thoại”). Tạm thời hãy tự đánh giá nhé."}</div>
    <div class="stage-actions">
      <button class="btn btn-primary" data-act="self-ok">✅ Tôi nói được ngay (≤ 3s)</button>
      <button class="btn" data-act="self-freeze">😶 Tôi bị đứng hình</button>
    </div>`);
  return new Promise(resolve => {
    manualResolver = ok => resolve(train.runId === id ? { answered: ok, ms: null, self: ok ? "ok" : "freeze", url: null } : null);
  });
}

function resolveManual(ok) {
  if (!manualResolver) return;
  const resolve = manualResolver;
  manualResolver = null;
  resolve(ok);
}

function resultHtml(reply, answer, isLast) {
  const big = reply.ms != null ? `${(reply.ms / 1000).toFixed(1)}s` : (reply.self === "ok" ? "✅" : "—");
  const cls = reply.ms != null ? latencyClass(reply.ms) : (reply.self === "ok" ? "good" : "bad");
  const label = reply.ms != null || reply.self == null
    ? latencyLabel(reply.ms)
    : (reply.self === "ok" ? "Bạn tự đánh giá: kịp" : "Đứng hình — nghe câu mẫu rồi thử lại");
  return `
    <div class="result-big ${cls}">${big}</div>
    <div class="stage-line">${label}</div>
    <div class="model-answer"><span class="turn-speaker">${escapeHtml(answer.speaker)}</span> ${escapeHtml(answer.text)}</div>
    <div class="stage-actions">
      <button class="btn" data-act="drill-model">▶ Nghe câu mẫu</button>
      ${reply.url ? `<button class="btn" data-act="drill-mine">▶ Nghe tôi nói</button>` : ""}
      <button class="btn btn-primary" data-act="drill-next">${isLast ? "Xem kết quả" : "Câu tiếp →"}${matchMedia("(hover: none)").matches ? "" : " (Space)"}</button>
    </div>`;
}

function playModelAnswer() {
  if (!drillCurrent) return;
  const id = train.runId;
  // Not stopTraining(): the drill loop must keep waiting for "next".
  if (train.audio) train.audio.pause();
  playTurn(drillCurrent.answer, 1, id);
}

function playMyReply() {
  if (!drillCurrent?.replyUrl) return;
  if (train.audio) train.audio.pause();
  new Audio(drillCurrent.replyUrl).play().catch(() => {});
}

function finishDrill(results, role, usedMic) {
  const measured = results.filter(r => r.ms != null);
  const avgMs = measured.length ? Math.round(measured.reduce((s, r) => s + r.ms, 0) / measured.length) : null;
  const answered = results.filter(r => r.answered).length;
  const fast = results.filter(r => r.answered && (r.ms != null ? r.ms <= REFLEX_OK_MS : r.self === "ok")).length;

  const previous = [...getHistory()].reverse().find(x => x.lessonId === train.lesson.id && x.avgMs != null);
  pushHistory({
    t: Date.now(),
    date: dateKey(),
    lessonId: train.lesson.id,
    role,
    mode: usedMic ? "mic" : "manual",
    total: results.length,
    answered,
    fast,
    avgMs
  });
  markPracticeDay();
  stopMic();
  keepAwake(false);
  train.mode = "idle";

  let trend = "";
  if (avgMs != null && previous) {
    const diff = (avgMs - previous.avgMs) / 1000;
    trend = diff < 0
      ? `<div class="trend good">↓ Nhanh hơn lần trước ${Math.abs(diff).toFixed(1)}s</div>`
      : `<div class="trend bad">↑ Chậm hơn lần trước ${diff.toFixed(1)}s</div>`;
  }
  // Without a mic there is no timing, so the headline number is how many answers came in time.
  const headline = avgMs != null ? `${(avgMs / 1000).toFixed(1)}s` : `${fast}/${results.length}`;
  const headlineClass = avgMs != null ? latencyClass(avgMs) : (fast / Math.max(1, results.length) >= 0.8 ? "good" : "bad");
  const headlineLabel = avgMs != null
    ? "Thời gian phản xạ trung bình · mục tiêu ≤ 2.0s"
    : "Số câu trả lời kịp (không có micro nên không đo được thời gian)";
  renderStage(`
    <div class="summary">
      <div class="result-big ${headlineClass}">${headline}</div>
      <div class="stage-line">${headlineLabel}</div>
      <div class="summary-stats">
        <span><strong>${answered}/${results.length}</strong> câu có trả lời</span>
        <span><strong>${fast}/${results.length}</strong> câu kịp ≤ 3s</span>
      </div>
      ${trend}
      <div class="stage-hint">Đã lưu vào lịch sử. Lần sau thử lại cùng bài để thấy tiến bộ.</div>
    </div>`);
}

/* ---------- home dashboard ---------- */

const WEEKDAY_NAMES = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

function nextNewLesson() {
  return state.lessons.find(l => !lessonStudied(l.id));
}

function drilledToday() {
  const today = dateKey();
  return getHistory().some(x => x.date === today);
}

function moduleProgressNote(lesson) {
  const module = COURSE_DATA.modules.find(m => m.number === lesson.module);
  const studied = state.lessons.filter(l => l.module === module.number && lessonStudied(l.id)).length;
  return `Module ${module.number} — ${module.name} · đã học ${studied}/${COURSE_DATA.lessonsPerModule} bài (mỗi module tối đa ${COURSE_DATA.lessonsPerModule} ngày)`;
}

function overallNote() {
  const studied = state.lessons.filter(l => lessonStudied(l.id)).length;
  const passed = state.lessons.filter(l => lessonPassed(l.id)).length;
  return `Vòng 1: ${studied}/${COURSE_DATA.totalLessons} bài đã học · ${passed} bài đạt ngưỡng phản xạ`;
}

function reviewCtas(items) {
  return items.map(item => ({
    lesson: item.lesson,
    text: `▶ Ôn Lesson ${item.lesson.number} — ${item.lesson.title}${item.drill?.avgMs != null ? ` (${(item.drill.avgMs / 1000).toFixed(1)}s)` : ""}`
  }));
}

function todayPlan() {
  const day = new Date().getDay();
  const queue = reviewQueue();

  // Saturday: a real person.
  if (day === 6) {
    return {
      title: "Thứ 7 · 45 phút mock client call",
      note: overallNote(),
      blocks: [
        ["30′", "Mock call bằng giọng: bạn là dev, Claude là khách. Dùng prompt trong Mock-Client-Call-Prompt.md, chọn 2 tình huống từ Vax"],
        ["10′", "Đọc nhận xét cuối buổi: 3 lỗi quan trọng nhất và 5 câu nói tốt hơn. Nói lại các câu đó thành tiếng"],
        ["5′", "Đưa câu bạn khựng hoặc nghe không ra vào “Cụm khó”"],
        ["", "Mục tiêu mỗi tuần: 1 lần nói tiếng Anh với người thật (đồng nghiệp, PM hoặc nhóm trò chuyện), chủ đề tự do cũng được"]
      ],
      ctas: []
    };
  }

  // Sunday: weekly check — re-drill what is still not fast enough, plus a one-minute recording.
  if (day === 0) {
    const fallback = [...state.lessons].reverse().find(l => lessonStudied(l.id));
    const target = queue[0]?.lesson || fallback;
    return {
      title: "Chủ nhật · 30 phút kiểm tra tuần",
      note: overallNote(),
      blocks: [
        ["15′", queue.length ? "Reflex drill bài chưa đạt ngưỡng (nút bên dưới)" : "Reflex drill một bài cũ để giữ phản xạ"],
        ["10′", "Ghi âm 1 phút update công việc thật bằng tiếng Anh, nghe lại và ghi 1 điều cần sửa"],
        ["5′", "Ôn “Cụm khó” trong tuần"]
      ],
      ctas: target ? reviewCtas([{ lesson: target, drill: lastDrill(target.id) }]) : []
    };
  }

  // Friday: review the weakest one or two lessons instead of learning something new.
  if (day === 5) {
    return {
      title: "Thứ 6 · 25 phút ôn lại",
      note: overallNote(),
      blocks: [
        ["15′", queue.length ? "Reflex drill 1–2 bài yếu nhất (nút bên dưới)" : "Chưa có bài nào cần ôn — drill lại bài khó nhất tuần này"],
        ["5′", "Nghe lại “Cụm khó” bên dưới"],
        ["5′", "Xem số liệu phản xạ, chọn tình huống nói với giáo viên hôm thứ 7"]
      ],
      ctas: reviewCtas(queue.slice(0, 2))
    };
  }

  // Monday to Thursday: exactly one new lesson per night.
  const fresh = nextNewLesson();
  if (drilledToday()) {
    return {
      title: "Hôm nay xong rồi ✓",
      note: fresh ? moduleProgressNote(fresh) : overallNote(),
      blocks: [["", "Mỗi ngày chỉ 1 lesson mới. Muốn luyện thêm thì drill lại bài ở mục “Cần ôn” bên dưới."]],
      ctas: reviewCtas(queue.slice(0, 1))
    };
  }
  if (!fresh) {
    return {
      title: "Đã học hết 24 bài ✓",
      note: overallNote(),
      blocks: [["", queue.length
        ? "Vòng 2: drill lại các bài chưa đạt ngưỡng ở mục “Cần ôn”."
        : "Tất cả bài đạt ngưỡng phản xạ. Chuyển sang họp thật với Vax và khách."]],
      ctas: reviewCtas(queue.slice(0, 1))
    };
  }
  return {
    title: "Tối nay · 22:00–22:25 · 25 phút",
    note: moduleProgressNote(fresh),
    blocks: [
      ["5′", "① Nghe mù bài mới 2–3 lần, không transcript"],
      ["3′", "② Mở transcript, bấm ✋ vào câu nghe không ra"],
      ["7′", "③ Nói theo (shadowing), mỗi câu 2 lần"],
      ["10′", "④ Reflex drill — trả lời trong ≤ 2 giây"]
    ],
    ctas: [{ lesson: fresh, text: `▶ Bắt đầu Lesson ${fresh.number} — ${fresh.title}` }]
  };
}

function weekStripHtml() {
  const days = new Set(loadJson(STORE.days, []));
  const monday = mondayOf();
  const todayStr = dateKey();
  const cells = [];
  for (let i = 0; i < 7; i += 1) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const key = dateKey(d);
    const cls = ["day", days.has(key) ? "done" : "", key === todayStr ? "today" : ""].join(" ");
    cells.push(`<div class="${cls.trim()}"><span>${WEEKDAY_NAMES[d.getDay()]}</span><i>${days.has(key) ? "✓" : ""}</i></div>`);
  }
  return `<div class="week-strip">${cells.join("")}</div>`;
}

function trendHtml() {
  const entries = getHistory().filter(x => x.avgMs != null).slice(-12);
  if (!entries.length) {
    return `<p class="empty-note">Chưa có dữ liệu. Làm <strong>Reflex drill</strong> đầu tiên để biết mức xuất phát (baseline) của bạn.</p>`;
  }
  const max = Math.max(4000, ...entries.map(e => e.avgMs));
  const width = 420;
  const height = 130;
  const bar = width / entries.length;
  const y = ms => height - (ms / max) * (height - 18);
  const bars = entries.map((e, i) => {
    const top = y(e.avgMs);
    const cls = latencyClass(e.avgMs);
    return `<rect class="bar ${cls}" x="${i * bar + 6}" y="${top}" width="${bar - 12}" height="${height - top}" rx="3"/>
            <text x="${i * bar + bar / 2}" y="${height + 14}" text-anchor="middle">${e.lessonId.replace("L", "")}</text>`;
  }).join("");
  const targetY = y(REFLEX_GOOD_MS);
  const latest = entries[entries.length - 1];
  const best = Math.min(...entries.map(e => e.avgMs));
  const fastRate = Math.round(entries.reduce((s, e) => s + e.fast, 0) / Math.max(1, entries.reduce((s, e) => s + e.total, 0)) * 100);
  return `
    <svg class="trend-chart" viewBox="0 0 ${width} ${height + 20}" role="img" aria-label="Thời gian phản xạ trung bình theo từng lần drill">
      <line class="target" x1="0" x2="${width}" y1="${targetY}" y2="${targetY}"/>
      <text class="target-label" x="${width - 2}" y="${targetY - 4}" text-anchor="end">mục tiêu 2.0s</text>
      ${bars}
    </svg>
    <div class="summary-stats">
      <span>Gần nhất <strong>${(latest.avgMs / 1000).toFixed(1)}s</strong></span>
      <span>Tốt nhất <strong>${(best / 1000).toFixed(1)}s</strong></span>
      <span>Kịp ≤ 3s <strong>${fastRate}%</strong></span>
    </div>
    <div class="stage-hint">Mỗi cột là một lần drill (số dưới cột = lesson). Cột càng thấp = phản xạ càng nhanh.</div>`;
}

// The whole weekly rhythm in one place; the row for today is highlighted.
function scheduleHtml() {
  const rows = [
    { days: [1, 2, 3, 4], label: "T2–T5", text: "1 lesson mới (25′): nghe mù → kiểm tra → nói theo → Reflex drill" },
    { days: [5], label: "T6", text: "Ôn 1–2 bài yếu nhất + Cụm khó (25′)" },
    { days: [6], label: "T7", text: "Mock client call với Claude (45′) + nói với người thật" },
    { days: [0], label: "CN", text: "Kiểm tra tuần: drill bài chưa đạt + ghi âm 1 phút (30′)" }
  ];
  const today = new Date().getDay();
  const list = rows.map(row => `
    <li class="${row.days.includes(today) ? "today" : ""}"><span class="plan-min">${row.label}</span><span>${row.text}</span></li>`).join("");
  return `
    <ul class="plan-list schedule">${list}</ul>
    <p class="stage-hint">1 lesson mới mỗi tối · 1 module tối đa ${COURSE_DATA.lessonsPerModule} ngày · 6 module = 6 tuần cho vòng 1. Bài chưa đạt ngưỡng phản xạ sẽ vào mục “Cần ôn”.</p>`;
}

function reviewHtml() {
  const queue = reviewQueue();
  const rules = `<p class="stage-hint">Ngưỡng đạt: Module 1–2 ≤ 3,0s · Module 3–4 ≤ 2,5s · Module 5–6 ≤ 2,0s, và ≥ 80% câu kịp ≤ 3s.</p>`;
  if (!queue.length) {
    const any = state.lessons.some(l => lessonStudied(l.id));
    return `<p class="empty-note">${any ? "Chưa có bài nào cần ôn — các bài đã học đều đạt ngưỡng. 🎉" : "Chưa có bài nào để ôn. Học bài đầu tiên và làm Reflex drill để bắt đầu."}</p>${rules}`;
  }
  const rows = queue.slice(0, 8).map(item => `
    <div class="hard-row">
      <button class="icon-btn" data-act="start-lesson" data-id="${item.lesson.id}" title="Mở bài để drill lại">▶</button>
      <span class="hard-meta">${item.lesson.id}</span>
      <span class="hard-text">${escapeHtml(item.lesson.title)} <span class="review-stats">· ${reviewStatsText(item)}</span></span>
    </div>`).join("");
  const more = queue.length > 8 ? `<p class="stage-hint">… và ${queue.length - 8} bài nữa.</p>` : "";
  return `<div class="hard-list">${rows}</div>${more}${rules}`;
}

function hardPhrasesHtml() {
  const list = loadJson(STORE.hard, []);
  if (!list.length) {
    return `<p class="empty-note">Khi nghe không ra, bấm ✋ ở bước 2 của bài học. Câu đó sẽ vào đây để nghe lại — thay cho Personal Quizlet.</p>`;
  }
  return `<div class="hard-list">${[...list].reverse().slice(0, 30).map(item => `
    <div class="hard-row">
      <button class="icon-btn" data-act="play-hard" data-lesson="${item.lessonId}" data-i="${item.index}" title="Nghe lại">▶</button>
      <span class="hard-meta">${item.lessonId}</span>
      <span class="hard-text">${escapeHtml(item.text)}</span>
      <button class="icon-btn" data-act="del-hard" data-lesson="${item.lessonId}" data-i="${item.index}" title="Bỏ khỏi danh sách">✕</button>
    </div>`).join("")}</div>`;
}

function habitsHtml() {
  const habits = loadJson(STORE.week, {})[dateKey(mondayOf())] || {};
  return `
    <label class="check habit"><input type="checkbox" data-habit="tutor" ${habits.tutor ? "checked" : ""}> Đã làm mock call hoặc nói tiếng Anh với người thật tuần này</label>
    <label class="check habit"><input type="checkbox" data-habit="record" ${habits.record ? "checked" : ""}> Đã ghi âm 1 phút update tuần này</label>`;
}

function renderHome() {
  const plan = todayPlan();
  const streak = practiceStreak();
  const ctas = plan.ctas.map((cta, i) =>
    `<button class="btn ${i === 0 ? "btn-primary" : ""} btn-lg" data-act="start-lesson" data-id="${cta.lesson.id}">${escapeHtml(cta.text)}</button>`).join("");
  const blocks = plan.blocks.map(([minutes, text]) =>
    `<li><span class="plan-min">${minutes}</span><span>${escapeHtml(text)}</span></li>`).join("");

  els.homeView.innerHTML = `
    <div class="home-inner">
      <header class="goal-banner">
        <div class="goal-kicker">MỤC TIÊU 2027</div>
        <h1>Tự trao đổi trực tiếp với khách hàng bằng tiếng Anh — không qua PM</h1>
        <p class="goal-chain">Nghe → Nhận ra → Nghĩ → <strong>Nói trong ≤ 2 giây</strong></p>
      </header>

      <div class="home-grid">
        <section class="card card-wide">
          <h2>${plan.title}</h2>
          <p class="plan-note">${escapeHtml(plan.note)}</p>
          <ul class="plan-list">${blocks}</ul>
          <div class="cta-row">${ctas}</div>
        </section>

        <section class="card card-wide">
          <h2>📅 Nhịp học</h2>
          ${scheduleHtml()}
        </section>

        <section class="card card-wide">
          <h2>🔁 Cần ôn</h2>
          ${reviewHtml()}
        </section>

        <section class="card">
          <h2>Tuần này <span class="streak">🔥 ${streak} ngày liên tiếp</span></h2>
          ${weekStripHtml()}
          <div class="habits">${habitsHtml()}</div>
        </section>

        <section class="card">
          <h2>⚡ Phản xạ nói</h2>
          ${trendHtml()}
        </section>

        <section class="card card-wide">
          <h2>✋ Cụm khó của tôi</h2>
          ${hardPhrasesHtml()}
        </section>
      </div>
    </div>`;

  els.homeView.onclick = handleHomeClick;
  els.homeView.onchange = handleHomeChange;
}

function handleHomeChange(event) {
  const box = event.target.closest("[data-habit]");
  if (!box) return;
  const weeks = loadJson(STORE.week, {});
  const key = dateKey(mondayOf());
  weeks[key] = { ...weeks[key], [box.dataset.habit]: box.checked };
  saveJson(STORE.week, weeks);
}

function handleHomeClick(event) {
  const target = event.target.closest("[data-act]");
  if (!target) return;

  if (target.dataset.act === "start-lesson") selectLesson(target.dataset.id);
  if (target.dataset.act === "play-hard") playHardPhrase(target.dataset.lesson, Number(target.dataset.i));
  if (target.dataset.act === "del-hard") {
    const list = loadJson(STORE.hard, []).filter(x => !(x.lessonId === target.dataset.lesson && x.index === Number(target.dataset.i)));
    saveJson(STORE.hard, list);
    renderHome();
  }
}

async function playHardPhrase(lessonId, index) {
  stopTraining();
  const id = train.runId;
  const lesson = state.lessons.find(l => l.id === lessonId);
  const entry = loadJson(STORE.hard, []).find(x => x.lessonId === lessonId && x.index === index);
  if (!lesson || !entry) return;

  const media = await loadLessonMedia(lesson);
  const turn = media.data?.turns?.[index];
  if (media.url && media.data?.confidence === "high" && turn) {
    homeAudio = homeAudio || new Audio();
    if (homeAudio.dataset.src !== media.url) {
      homeAudio.src = media.url;
      homeAudio.dataset.src = media.url;
    }
    await playSegment(homeAudio, turn.start, turn.end + 0.05, 1, id);
  } else {
    await speak(entry.text, 1, id);
  }
}

window.addEventListener("keydown", event => {
  if (event.key === " " && train.waitNext && !event.target.closest?.("input, select, textarea")) {
    event.preventDefault();
    event.target.blur?.();   // a focused button would otherwise also fire its own click
    const go = train.waitNext;
    train.waitNext = null;
    go(true);
  }
  if (event.key === "Escape" && train.mode !== "idle") {
    stopTraining();
    setShadowStatus("Đã dừng.");
    renderStage(`<div class="stage-line">Đã dừng.</div>`);
  }
});
