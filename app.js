const STORAGE_KEY = "nsd6_v04";
const LEGACY_KEYS = ["nsd6_v03", "nsd6_v02"];

const ROTATION = [
  {
    code: "PU-H",
    title: "Push",
    axis: "Horizontal",
    display: "Push - Horizontal",
    movements: [
      { title: "Main", detail: "Horizontal Push line\nKeep v0.3 movement title/display as base" }
    ]
  },
  {
    code: "PL-V",
    title: "Pull",
    axis: "Vertical",
    display: "Pull - Vertical",
    movements: [
      { title: "OAP Negative", detail: "Vertical Pull line" }
    ]
  },
  {
    code: "CX-PU",
    title: "Complex",
    axis: "Push",
    display: "Complex Push",
    movements: [
      { title: "Complex Push", detail: "Keep v0.3 movement title/display as base" }
    ]
  },
  {
    code: "CD",
    title: "Conditioning",
    axis: "",
    display: "Conditioning",
    movements: [
      { title: "Negative + A. Pistol", detail: "Negative + A. Pistol 3.3 (3x3) [E1]" },
      { title: "Burpee", detail: "Burpee 40x3 fixed" }
    ]
  },
  {
    code: "PU-V",
    title: "Push",
    axis: "Vertical",
    display: "Push - Vertical",
    movements: [
      { title: "Main", detail: "Vertical Push line\nKeep v0.3 movement title/display as base" }
    ]
  },
  {
    code: "PL-H",
    title: "Pull",
    axis: "Horizontal",
    display: "Pull - Horizontal",
    movements: [
      { title: "OAP Negative", detail: "Horizontal Pull line title corrected where needed" }
    ]
  },
  {
    code: "CX-PL",
    title: "Complex",
    axis: "Pull",
    display: "Complex Pull",
    movements: [
      { title: "Complex Pull", detail: "Keep v0.3 movement title/display as base" }
    ]
  },
  {
    code: "CD",
    title: "Conditioning",
    axis: "",
    display: "Conditioning",
    movements: [
      { title: "Negative + A. Pistol", detail: "Negative + A. Pistol 3.3 (3x3) [E1]" },
      { title: "Burpee", detail: "Burpee 40x3 fixed" }
    ]
  }
];

const defaultState = {
  version: "0.4",
  currentIndex: 0,
  previousLog: "",
  todayPlan: "",
  finalLog: "",
  history: [],
  updatedAt: new Date().toISOString()
};

let state = loadState();

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function loadState() {
  const direct = localStorage.getItem(STORAGE_KEY);
  if (direct) {
    try { return { ...clone(defaultState), ...JSON.parse(direct), version: "0.4" }; }
    catch (e) {}
  }

  for (const key of LEGACY_KEYS) {
    const raw = localStorage.getItem(key);
    if (!raw) continue;
    try {
      const legacy = JSON.parse(raw);
      return {
        ...clone(defaultState),
        ...legacy,
        version: "0.4",
        currentIndex: Number.isInteger(legacy.currentIndex) ? legacy.currentIndex % ROTATION.length : 0
      };
    } catch (e) {}
  }
  return clone(defaultState);
}

function saveState() {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function $(id) {
  return document.getElementById(id);
}

function currentSlot() {
  return ROTATION[state.currentIndex] || ROTATION[0];
}

function render() {
  const slot = currentSlot();

  $("currentSlotTitle").textContent = slot.display;
  $("currentSlotMeta").textContent = `${slot.code} · Slot ${state.currentIndex + 1} of ${ROTATION.length}`;
  $("slotPill").textContent = slot.code;
  $("rotationCounter").textContent = `${state.currentIndex + 1} / ${ROTATION.length}`;
  $("progressFill").style.width = `${((state.currentIndex + 1) / ROTATION.length) * 100}%`;

  renderRotationGrid();
  renderMovements(slot);
  renderHistory();

  $("previousLog").value = state.previousLog || "";
  $("todayPlan").value = state.todayPlan || "";
  $("finalLog").value = state.finalLog || "";
}

function renderRotationGrid() {
  const grid = $("rotationGrid");
  grid.innerHTML = "";
  ROTATION.forEach((slot, idx) => {
    const div = document.createElement("button");
    div.className = `slot ${idx === state.currentIndex ? "active" : ""}`;
    div.type = "button";
    div.innerHTML = `
      <div class="code">${slot.code}</div>
      <div class="name">${slot.title}</div>
      <div class="sub">${slot.axis || "Fixed"}</div>
    `;
    div.addEventListener("click", () => {
      state.currentIndex = idx;
      saveState();
      render();
    });
    grid.appendChild(div);
  });
}

function renderMovements(slot) {
  const list = $("movementList");
  list.innerHTML = "";
  slot.movements.forEach(move => {
    const div = document.createElement("div");
    div.className = "move-item";
    div.innerHTML = `
      <div class="move-title">${escapeHTML(move.title)}</div>
      <div class="move-detail">${escapeHTML(move.detail)}</div>
    `;
    list.appendChild(div);
  });
}

function renderHistory() {
  const list = $("historyList");
  const count = state.history.length;
  $("historyCount").textContent = `${count} log${count === 1 ? "" : "s"}`;
  list.innerHTML = "";

  if (!count) {
    const empty = document.createElement("div");
    empty.className = "history-item";
    empty.innerHTML = `<div class="history-text">No saved logs yet.</div>`;
    list.appendChild(empty);
    return;
  }

  [...state.history].reverse().forEach(item => {
    const div = document.createElement("div");
    div.className = "history-item";
    div.innerHTML = `
      <div class="history-meta">${escapeHTML(item.date)} · ${escapeHTML(item.slot || "")}</div>
      <div class="history-text">${escapeHTML(item.text || "")}</div>
    `;
    list.appendChild(div);
  });
}

function buildPrompt() {
  const slot = currentSlot();
  const movementLines = slot.movements
    .map(m => `- ${m.title}: ${m.detail.replace(/\n/g, " / ")}`)
    .join("\n");

  return [
    "Previous Session Log + Today Plan",
    "",
    `[Current Slot]`,
    `${slot.display} (${slot.code})`,
    "",
    `[Movement Stack]`,
    movementLines,
    "",
    `[Previous Session Log]`,
    state.previousLog || "(none)",
    "",
    `[Today Plan]`,
    state.todayPlan || "(none)",
    "",
    "77TR 기준으로 런타임 판단하고, 최종 로그는 로컬 저장용 포맷으로 정리해줘."
  ].join("\n");
}

function bind() {
  $("prevSlotBtn").addEventListener("click", () => {
    state.currentIndex = (state.currentIndex + ROTATION.length - 1) % ROTATION.length;
    saveState();
    render();
  });

  $("nextSlotBtn").addEventListener("click", () => {
    state.currentIndex = (state.currentIndex + 1) % ROTATION.length;
    saveState();
    render();
  });

  $("previousLog").addEventListener("input", e => {
    state.previousLog = e.target.value;
    saveState();
  });

  $("todayPlan").addEventListener("input", e => {
    state.todayPlan = e.target.value;
    saveState();
  });

  $("finalLog").addEventListener("input", e => {
    state.finalLog = e.target.value;
    saveState();
  });

  $("generatePromptBtn").addEventListener("click", () => {
    const output = buildPrompt();
    $("promptOutput").value = output;
  });

  $("copyPromptBtn").addEventListener("click", async () => {
    const text = $("promptOutput").value || buildPrompt();
    $("promptOutput").value = text;
    try {
      await navigator.clipboard.writeText(text);
      $("copyPromptBtn").textContent = "Copied";
      setTimeout(() => $("copyPromptBtn").textContent = "Copy Prompt", 900);
    } catch (e) {
      $("promptOutput").select();
      document.execCommand("copy");
    }
  });

  $("saveLogBtn").addEventListener("click", () => {
    const text = state.finalLog.trim();
    if (!text) return;
    const slot = currentSlot();
    state.history.push({
      date: new Date().toLocaleString("ko-KR"),
      slot: `${slot.display} (${slot.code})`,
      index: state.currentIndex,
      text
    });
    state.previousLog = text;
    state.finalLog = "";
    state.currentIndex = (state.currentIndex + 1) % ROTATION.length;
    saveState();
    render();
  });

  $("exportBtn").addEventListener("click", () => {
    const payload = {
      app: "NSD-6 STATUS CONTROL",
      version: "0.4",
      exportedAt: new Date().toISOString(),
      state,
      rotation: ROTATION
    };
    downloadJSON(payload, `nsd6-status-v0.4-${dateStamp()}.json`);
  });

  $("importFile").addEventListener("change", async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      const importedState = data.state || data;
      state = { ...clone(defaultState), ...importedState, version: "0.4" };
      if (!Number.isInteger(state.currentIndex)) state.currentIndex = 0;
      state.currentIndex = ((state.currentIndex % ROTATION.length) + ROTATION.length) % ROTATION.length;
      saveState();
      render();
    } catch (err) {
      alert("Import failed. JSON 파일을 확인해줘.");
    } finally {
      e.target.value = "";
    }
  });

  $("clearBtn").addEventListener("click", () => {
    if (!confirm("로컬 데이터를 전부 지울까?")) return;
    state = clone(defaultState);
    saveState();
    render();
  });

  document.querySelectorAll(".bottom-nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.jump;
      const el = $(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

function escapeHTML(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function dateStamp() {
  const d = new Date();
  const p = n => String(n).padStart(2, "0");
  return `${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}`;
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

bind();
render();
