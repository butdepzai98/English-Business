const state = {
  lessons: COURSE_DATA.lessons.map(lesson => ({ ...lesson, files: {}, folderName: "" })),
  currentLesson: null,
  view: "home",
  loadToken: 0
};

const COMPLETION_STORAGE_KEY = "business-english-it-meetings.completed-lessons";

const els = {
  homeView: document.getElementById("homeView"),
  homeButton: document.getElementById("homeButton"),
  menuButton: document.getElementById("menuButton"),
  topHomeButton: document.getElementById("topHomeButton"),
  topbarTitle: document.getElementById("topbarTitle"),
  drawerBackdrop: document.getElementById("drawerBackdrop"),
  lessonSearch: document.getElementById("lessonSearch"),
  courseTree: document.getElementById("courseTree"),
  progressText: document.getElementById("progressText"),
  progressPercent: document.getElementById("progressPercent"),
  progressBar: document.getElementById("progressBar"),
  lessonView: document.getElementById("lessonView"),
  lessonTitle: document.getElementById("lessonTitle"),
  lessonMeta: document.getElementById("lessonMeta"),
  lessonBadges: document.getElementById("lessonBadges"),
  lessonPanel: document.getElementById("lessonPanel"),
  audioPanel: document.getElementById("audioPanel"),
  completionButton: document.getElementById("completionButton")
};

document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => switchTab(btn.dataset.tab));
});

els.lessonSearch.addEventListener("input", filterLessons);
els.completionButton.addEventListener("click", toggleCurrentLessonCompletion);
els.homeButton.addEventListener("click", showHome);
els.topHomeButton.addEventListener("click", showHome);
els.menuButton.addEventListener("click", () => setDrawer(!document.body.classList.contains("drawer-open")));
els.drawerBackdrop.addEventListener("click", () => setDrawer(false));
window.addEventListener("keydown", handleKeyboard);
window.addEventListener("load", init);

async function init() {
  restoreCompletionState();
  // The full course tree is available immediately from course-data.js.
  renderTree();
  updateProgress();
  showHome();

  // Lesson folders are siblings of index.html. We only probe predictable URLs;
  // no directory picker or filesystem permission is required.
  await loadAllLessonFilesDirectly();
}

// On narrow screens the sidebar is an off-canvas drawer; on desktop these are no-ops.
function setDrawer(open) {
  document.body.classList.toggle("drawer-open", open);
  els.menuButton.setAttribute("aria-expanded", String(open));
}

function showHome() {
  setDrawer(false);
  els.topbarTitle.textContent = "Today";
  stopTraining();
  state.view = "home";
  state.currentLesson = null;
  els.lessonView.classList.add("hidden");
  els.homeView.classList.remove("hidden");
  els.homeButton.classList.add("active");
  renderTree(els.lessonSearch.value);
  renderHome();
}

async function loadAllLessonFilesDirectly() {
  const jobs = state.lessons.map(lesson => discoverLessonFiles(lesson));
  await Promise.allSettled(jobs);
  renderTree(els.lessonSearch.value);

  if (state.currentLesson) {
    await selectLesson(state.currentLesson.id, { reloadFiles: false });
  }
}
function lessonFolderCandidates(lesson) {
  const n = String(lesson.number).padStart(2, "0");
  const title = lesson.title;
  return [
    `Lesson ${n} — ${title}`,
    `Lesson ${n} — ${title}`,
    `Lesson ${lesson.number} — ${title}`,
    `Lesson ${lesson.number} — ${title}`
  ];
}

function lessonFileCandidates(lesson, folder) {
  const n = String(lesson.number).padStart(2, "0");
  return {
    md: [`${folder}/lesson.md`],
    tts: [`${folder}/script_tts.txt`],
    mp3: [
      `${folder}/Lesson-${n}.mp3`,
      `${folder}/Lesson-${lesson.number}.mp3`,
      `${folder}/lesson-${n}.mp3`,
      `${folder}/lesson.mp3`
    ],
    turns: [`${folder}/turns.json`]
  };
}

async function discoverLessonFiles(lesson) {
  lesson.files = {};
  lesson.folderName = "";

  for (const folder of lessonFolderCandidates(lesson)) {
    const candidates = lessonFileCandidates(lesson, folder);
    const found = {};

    found.md = await firstExistingUrl(candidates.md);
    found.tts = await firstExistingUrl(candidates.tts);
    found.mp3 = await firstExistingUrl(candidates.mp3);
    found.turns = await firstExistingUrl(candidates.turns);

    if (Object.values(found).some(Boolean)) {
      lesson.folderName = folder;
      lesson.files = Object.fromEntries(
        Object.entries(found).filter(([, value]) => Boolean(value))
      );
      break;
    }
  }

  return lesson;
}

async function firstExistingUrl(urls) {
  for (const url of urls) {
    const encodedUrl = encodePath(url);
    try {
      const response = await fetch(encodedUrl, {
        method: "HEAD",
        cache: "no-store"
      });
      if (response.ok) return encodedUrl;

      // Some static servers do not support HEAD.
      if (response.status === 405 || response.status === 501) {
        const getResponse = await fetch(encodedUrl, {
          method: "GET",
          headers: { Range: "bytes=0-0" },
          cache: "no-store"
        });
        if (getResponse.ok || getResponse.status === 206) return encodedUrl;
      }
    } catch (_) {
      // Try the next candidate.
    }
  }
  return null;
}

function encodePath(path) {
  return path.split("/").map(part => encodeURIComponent(part)).join("/");
}

async function selectLesson(id, options = {}) {
  const lesson = state.lessons.find(x => x.id === id);
  if (!lesson) return;

  setDrawer(false);
  stopTraining();
  state.view = "lesson";
  state.currentLesson = lesson;
  els.homeView.classList.add("hidden");
  els.homeButton.classList.remove("active");
  els.lessonView.classList.remove("hidden");
  renderTree(els.lessonSearch.value);

  els.lessonTitle.textContent = `${lesson.id} — ${lesson.title}`;
  els.topbarTitle.textContent = `${lesson.id} — ${lesson.title}`;
  els.lessonMeta.textContent = `Module ${lesson.module} · Level ${lesson.level}`;

  els.lessonBadges.innerHTML = "";
  addBadge(lesson.level ? `Level ${lesson.level}` : `Module ${lesson.module}`);
  if (lesson.completed) addBadge("Đã học", "green");
  if (lesson.files.tts || lesson.files.mp3) addBadge("Audio", "green");
  updateCompletionButton(lesson);

  switchTab("audio");

  // Avoid stale async rendering if the user clicks another lesson quickly.
  const token = ++state.loadToken;
  await renderLesson(lesson, token);
}

function addBadge(text, className = "") {
  const badge = document.createElement("span");
  badge.className = `badge ${className}`.trim();
  badge.textContent = text;
  els.lessonBadges.appendChild(badge);
}

async function renderLesson(lesson, token) {
  els.lessonPanel.innerHTML = `<div class="lesson-content"><p>Đang tải lesson...</p></div>`;
  els.audioPanel.innerHTML = "";

  let markdown = "";
  if (lesson.files.md) {
    try {
      markdown = await fetchText(lesson.files.md);
    } catch (error) {
      console.warn("Không đọc được lesson.md:", error);
    }
  }

  let transcript = "";
  if (lesson.files.tts) {
    try {
      transcript = await fetchText(lesson.files.tts);
    } catch (error) {
      console.warn("Không đọc được script_tts.txt:", error);
    }
  }

  if (token !== state.loadToken) return;

  if (markdown) {
    els.lessonPanel.innerHTML = `<div class="lesson-content">${markdownToHtml(markdown)}</div>`;
  } else {
    els.lessonPanel.innerHTML = `<div class="lesson-content"><p>Lesson này chưa có <code>lesson.md</code>.</p><p class="muted-note">Danh sách lesson được lấy từ <code>course-data.js</code>, nên lesson vẫn hiển thị dù thư mục nội dung chưa tồn tại.</p></div>`;
  }

  await mountTrain(lesson, transcript, token);
}

function restoreCompletionState() {
  try {
    const completedIds = JSON.parse(localStorage.getItem(COMPLETION_STORAGE_KEY) || "[]");
    if (!Array.isArray(completedIds)) return;
    const completed = new Set(completedIds);
    state.lessons.forEach(lesson => {
      lesson.completed = completed.has(lesson.id);
    });
  } catch (_) {
    // Keep the default course state if storage is unavailable or invalid.
  }
}

function toggleCurrentLessonCompletion() {
  const lesson = state.currentLesson;
  if (!lesson) return;

  lesson.completed = !lesson.completed;
  if (lesson.completed) markPracticeDay();
  saveCompletionState();
  updateProgress();
  renderTree(els.lessonSearch.value);
  updateCompletionButton(lesson);

  els.lessonBadges.innerHTML = "";
  addBadge(lesson.level ? `Level ${lesson.level}` : `Module ${lesson.module}`);
  if (lesson.completed) addBadge("Đã học", "green");
  if (lesson.files.tts || lesson.files.mp3) addBadge("Audio", "green");
}

function saveCompletionState() {
  try {
    const completedIds = state.lessons.filter(lesson => lesson.completed).map(lesson => lesson.id);
    localStorage.setItem(COMPLETION_STORAGE_KEY, JSON.stringify(completedIds));
  } catch (_) {
    // The UI still works for this session when storage is unavailable.
  }
}

function updateCompletionButton(lesson) {
  const completed = Boolean(lesson?.completed);
  els.completionButton.textContent = completed ? "✓ Finished" : "Mark As Finish";
  els.completionButton.classList.toggle("is-complete", completed);
  els.completionButton.setAttribute("aria-pressed", String(completed));
}

async function fetchText(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
  return response.text();
}

function renderTree(filter = "") {
  const query = filter.trim().toLowerCase();
  els.courseTree.innerHTML = "";

  for (const module of COURSE_DATA.modules) {
    const moduleLessons = state.lessons.filter(l => l.module === module.number);
    const matching = moduleLessons.filter(lesson =>
      !query ||
      String(lesson.number).includes(query) ||
      lesson.id.toLowerCase().includes(query) ||
      lesson.title.toLowerCase().includes(query)
    );

    if (!matching.length) continue;

    const wrapper = document.createElement("section");
    wrapper.className = "module";

    const title = document.createElement("h2");
    title.className = "module-title";
    title.textContent = `Module ${module.number} — ${module.name}`;
    wrapper.appendChild(title);

    const goal = document.createElement("div");
    goal.className = "module-goal";
    goal.textContent = module.goal;
    wrapper.appendChild(goal);

    matching.forEach(lesson => {
      const button = document.createElement("button");
      button.className = "lesson-item";
      if (lesson.id === state.currentLesson?.id) button.classList.add("active");
      if (lesson.completed) button.classList.add("done");

      const status = document.createElement("span");
      status.className = `status ${lesson.completed ? "done" : "missing"}`;
      status.textContent = lesson.completed ? "✓" : "○";

      const code = document.createElement("span");
      code.className = "lesson-code";
      code.textContent = lesson.id;

      const name = document.createElement("span");
      name.className = "lesson-name";
      name.textContent = lesson.title;

      button.append(status, code, name);

      const reflex = lessonReflexLabel(lesson.id);
      if (reflex) {
        const badge = document.createElement("span");
        badge.className = "lesson-reflex";
        badge.title = "Thời gian phản xạ trung bình lần drill gần nhất (✔ = đã đạt ngưỡng của module)";
        badge.textContent = reflex;
        button.appendChild(badge);
      }

      const hasFiles = Object.keys(lesson.files || {}).length > 0;
      if (!hasFiles) {
        const missing = document.createElement("span");
        missing.className = "lesson-missing";
        missing.textContent = "(not created)";
        button.appendChild(missing);
      }

      button.addEventListener("click", () => selectLesson(lesson.id));
      wrapper.appendChild(button);
    });

    els.courseTree.appendChild(wrapper);
  }

  if (!els.courseTree.children.length) {
    els.courseTree.innerHTML = `<div class="empty-tree"><strong>Không tìm thấy lesson</strong><p>Thử nhập số lesson khác.</p></div>`;
  }
}

function filterLessons() {
  renderTree(els.lessonSearch.value);
}

function parseTranscript(text) {
  const lines = text.split(/\r?\n/).map(x => x.trim()).filter(Boolean);
  const result = [];

  for (const line of lines) {
    const match = line.match(/^([^:]{1,80}):\s*(.+)$/);
    if (match) result.push({ speaker: match[1].trim(), text: match[2].trim() });
    else if (result.length) result[result.length - 1].text += " " + line;
    else result.push({ speaker: "Speaker", text: line });
  }

  return result;
}

function switchTab(tabName) {
  document.querySelectorAll(".tab").forEach(btn =>
    btn.classList.toggle("active", btn.dataset.tab === tabName)
  );
  els.lessonPanel.classList.toggle("hidden", tabName !== "lesson");
  els.audioPanel.classList.toggle("hidden", tabName !== "audio");
}

function updateProgress() {
  const total = COURSE_DATA.totalLessons;
  const done = state.lessons.filter(x => x.completed).length;
  const percent = total ? Math.round(done / total * 100) : 0;

  els.progressText.textContent = `${done} / ${total} lesson`;
  els.progressPercent.textContent = `${percent}%`;
  els.progressBar.style.width = `${percent}%`;
}

function handleKeyboard(event) {
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  if (event.target.closest?.("input, select, textarea")) return;
  if (event.key === "Escape") setDrawer(false);

  if (event.key === "/" && document.activeElement !== els.lessonSearch) {
    event.preventDefault();
    els.lessonSearch.focus();
  }

  // Arrow keys move between lessons only while a lesson is open and no drill is running.
  if (!state.currentLesson || state.view !== "lesson" || train.mode !== "idle") return;
  const index = state.lessons.findIndex(x => x.id === state.currentLesson.id);

  if ((event.key === "ArrowDown" || event.key === "ArrowRight") && index < state.lessons.length - 1) {
    selectLesson(state.lessons[index + 1].id);
  }
  if ((event.key === "ArrowUp" || event.key === "ArrowLeft") && index > 0) {
    selectLesson(state.lessons[index - 1].id);
  }
}

function markdownToHtml(markdown) {
  const prepared = prepareLessonMarkdown(markdown);
  const headings = [];
  const lessonHtml = renderMarkdown(prepared.content, headings);
  const detailsHtml = prepared.details.length
    ? `<details class="lesson-details"><summary>Thông tin lesson</summary><div class="lesson-details-content">${renderMarkdown(prepared.details.join("\n\n"))}</div></details>`
    : "";

  return `<div class="description-layout"><article class="description-body">${lessonHtml}${detailsHtml}</article>${renderTableOfContents(headings)}</div>`;
}

function prepareLessonMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const content = [];
  const details = [];

  for (let index = 0; index < lines.length;) {
    const heading = getMarkdownHeading(lines[index]);

    if (heading && (isTranscriptHeading(heading.text) || isConversationHeading(heading.text) || isExcludedPracticeHeading(heading.text))) {
      index = skipSection(lines, index, heading.level);
      continue;
    }

    if (heading && isSupplementaryHeading(heading.text)) {
      const end = skipSection(lines, index, heading.level);
      details.push(lines.slice(index, end).join("\n").trim());
      index = end;
      continue;
    }

    if (isTechnicalMetadataLine(lines[index])) {
      details.push(lines[index].trim());
    } else {
      content.push(lines[index]);
    }

    index += 1;
  }

  return {
    content: content.join("\n").replace(/\n{3,}/g, "\n\n").trim(),
    details: details.filter(Boolean)
  };
}

function getMarkdownHeading(line) {
  const match = line.match(/^(#{1,6})\s+(.+)$/);
  return match ? { level: match[1].length, text: match[2].trim() } : null;
}

function skipSection(lines, start, level) {
  let index = start + 1;
  while (index < lines.length) {
    const nextHeading = getMarkdownHeading(lines[index]);
    if (nextHeading && nextHeading.level <= level) break;
    index += 1;
  }
  return index;
}

function isTranscriptHeading(text) {
  const normalized = normalizeHeadingTitle(text);
  return /^transcript\b/i.test(normalized);
}

function isConversationHeading(text) {
  return /^(?:realistic )?conversation\b/i.test(normalizeHeadingTitle(text));
}

function isExcludedPracticeHeading(text) {
  return /^(?:quizlet content|ai\s*role-?play)\b/i.test(normalizeHeadingTitle(text));
}

function isSupplementaryHeading(text) {
  return /lesson metadata|audio production|script_tts\.txt/i.test(text);
}

function normalizeHeadingTitle(text) {
  return text.replace(/^[\d.\s—-]+/, "").trim();
}

function isTechnicalMetadataLine(line) {
  return /^\s*(?:-\s*)?\*\*(?:target wpm|turn length|turns|characters|conversation length)\s*:\*\*/i.test(line);
}

function renderMarkdown(markdown, headings = null) {
  const lines = markdown.split("\n");
  let html = "";
  let inCode = false;
  let codeBuffer = [];
  let listType = null;

  const closeList = () => {
    if (listType) {
      html += `</${listType}>`;
      listType = null;
    }
  };

  for (let index = 0; index < lines.length; index += 1) {
    const raw = lines[index];
    const line = raw.trimEnd();

    if (line.startsWith("```")) {
      if (!inCode) {
        closeList();
        inCode = true;
        codeBuffer = [];
      } else {
        html += `<pre><code>${escapeHtml(codeBuffer.join("\n"))}</code></pre>`;
        inCode = false;
      }
      continue;
    }

    if (inCode) {
      codeBuffer.push(line);
      continue;
    }

    if (!line.trim()) {
      closeList();
      continue;
    }

    if (isTableRow(line) && isTableSeparator(lines[index + 1])) {
      closeList();
      const headers = splitTableRow(line);
      const rows = [];
      index += 2;

      while (index < lines.length && isTableRow(lines[index])) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }

      index -= 1;
      html += renderTable(headers, rows);
      continue;
    }

    if (line.trimStart().startsWith(">")) {
      closeList();
      const quoteLines = [];

      while (index < lines.length && lines[index].trimStart().startsWith(">")) {
        quoteLines.push(lines[index].trimStart().replace(/^>\s?/, ""));
        index += 1;
      }

      index -= 1;
      html += `<blockquote>${quoteLines.map(inlineMarkdown).join("<br>")}</blockquote>`;
      continue;
    }

    if (/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      closeList();
      html += "<hr>";
      continue;
    }

    const h = line.match(/^(#{1,6})\s+(.+)$/);
    if (h) {
      closeList();
      const level = h[1].length;
      const text = inlineMarkdown(h[2]);
      const id = slugify(stripHtml(text));
      headings?.push({ text: stripHtml(text), id, level });
      html += `<h${level} id="${id}" class="lesson-section ${getSectionClass(h[2])}">${text}</h${level}>`;
      continue;
    }

    const ul = line.match(/^\s*[-*+]\s+(.+)$/);
    if (ul) {
      if (listType !== "ul") {
        closeList();
        html += "<ul>";
        listType = "ul";
      }
      html += `<li>${inlineMarkdown(ul[1])}</li>`;
      continue;
    }

    const ol = line.match(/^\s*\d+\.\s+(.+)$/);
    if (ol) {
      if (listType !== "ol") {
        closeList();
        html += "<ol>";
        listType = "ol";
      }
      html += `<li>${inlineMarkdown(ol[1])}</li>`;
      continue;
    }

    closeList();
    html += `<p>${inlineMarkdown(line)}</p>`;
  }

  closeList();

  return html;
}

function renderTableOfContents(headings) {
  if (!headings.length) return "";

  const links = headings
    .filter(heading => heading.level === 2 || heading.level === 3)
    .map(heading => `<a class="toc-level-${heading.level}" href="#${heading.id}">${escapeHtml(heading.text)}</a>`)
    .join("");

  return `<aside class="toc" aria-label="Mục lục lesson"><div class="toc-title">Mục lục</div>${links}</aside>`;
}

function isTableRow(line) {
  return /^\s*\|?.+\|.+\|?\s*$/.test(line);
}

function isTableSeparator(line = "") {
  return /^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function splitTableRow(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(cell => cell.trim());
}

function renderTable(headers, rows) {
  const head = headers.map(cell => `<th scope="col">${inlineMarkdown(cell)}</th>`).join("");
  const body = rows.map(row => {
    const cells = headers.map((_, index) => `<td>${inlineMarkdown(row[index] || "")}</td>`).join("");
    return `<tr>${cells}</tr>`;
  }).join("");

  return `<div class="lesson-table-wrap"><table class="lesson-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}

function getSectionClass(title) {
  const text = normalizeHeadingTitle(title).toLowerCase();
  if (/situation|scenario|it context/.test(text)) return "section-context";
  if (/vocabulary|patterns?|expressions?|natural|language breakdown|grammar/.test(text)) return "section-knowledge";
  if (/listening|shadowing|speaking|role-?play|quizlet|practice|checklist|success criteria|personal discovery/.test(text)) return "section-practice";
  return "section-general";
}

function inlineMarkdown(text) {
  let x = escapeHtml(text);
  x = x.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');
  x = x.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  x = x.replace(/`([^`]+)`/g, "<code>$1</code>");
  x = x.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  x = x.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  x = x.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  x = x.replace(/_([^_]+)_/g, "<em>$1</em>");
  return x;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function stripHtml(value) {
  return String(value).replace(/<[^>]*>/g, "");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
