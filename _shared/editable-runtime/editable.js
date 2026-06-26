(function () {
  const script = document.currentScript;
  const rootSelector = script?.dataset.root || "[data-edit-root], main, body";
  const filePrefix = script?.dataset.filename || document.title || "template-export";
  const storageKey = script?.dataset.storage || `editable:${location.pathname}`;
  const editableSelector = script?.dataset.selectors || [
    "h1", "h2", "h3", "h4", "p", "li", "strong", "span", "td", "th",
    ".svg-kpi strong", ".svg-kpi p", ".goal-block", ".goal-dim",
    ".intent-card", ".intent-example", ".design-item", ".decode-stage"
  ].join(",");

  const root = document.querySelector(rootSelector) || document.body;

  function getEditableElements() {
    return [...root.querySelectorAll(editableSelector)]
      .filter((el) => !el.closest(".template-edit-toolbar"))
      .filter((el) => el.children.length === 0 || ["H1", "H2", "H3", "H4", "P", "LI", "STRONG", "SPAN", "TD", "TH"].includes(el.tagName));
  }

  function createToolbar() {
    const toolbar = document.createElement("div");
    toolbar.className = "template-edit-toolbar";
    toolbar.innerHTML = [
      '<button type="button" data-template-edit-toggle aria-pressed="false">编辑关</button>',
      '<button type="button" data-template-edit-save>保存</button>',
      '<button class="primary" type="button" data-template-edit-export>导出HTML</button>',
      '<span data-template-edit-status></span>'
    ].join("");
    document.body.appendChild(toolbar);
    return toolbar;
  }

  const toolbar = document.querySelector(".template-edit-toolbar") || createToolbar();
  const toggle = toolbar.querySelector("[data-template-edit-toggle]");
  const save = toolbar.querySelector("[data-template-edit-save]");
  const exportButton = toolbar.querySelector("[data-template-edit-export]");
  const status = toolbar.querySelector("[data-template-edit-status]");

  function setStatus(text) {
    status.textContent = text;
    if (text) window.setTimeout(() => { if (status.textContent === text) status.textContent = ""; }, 1600);
  }

  function setEditing(enabled) {
    document.body.classList.toggle("template-editing", enabled);
    getEditableElements().forEach((el) => {
      el.setAttribute("contenteditable", String(enabled));
      el.setAttribute("spellcheck", "false");
    });
    toggle.setAttribute("aria-pressed", String(enabled));
    toggle.textContent = enabled ? "编辑开" : "编辑关";
    setStatus(enabled ? "可编辑" : "");
  }

  function saveCurrent() {
    localStorage.setItem(storageKey, root.innerHTML);
    setStatus("已保存");
  }

  function restoreSaved() {
    const saved = localStorage.getItem(storageKey);
    if (saved) root.innerHTML = saved;
  }

  function exportHtml() {
    const clone = document.documentElement.cloneNode(true);
    clone.querySelectorAll("[contenteditable]").forEach((el) => el.setAttribute("contenteditable", "false"));
    clone.querySelectorAll(".template-edit-toolbar").forEach((el) => el.remove());
    clone.querySelectorAll("script[src*='_shared/editable-runtime/editable.js']").forEach((el) => el.remove());
    clone.querySelectorAll("link[href*='_shared/editable-runtime/editable.css']").forEach((el) => el.remove());
    const html = `<!doctype html>\n${clone.outerHTML}`;
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${filePrefix.toLowerCase().replace(/[^a-z0-9\\u4e00-\\u9fa5]+/gi, "-")}-${stamp}.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
    setStatus("已导出");
  }

  toggle.addEventListener("click", () => setEditing(toggle.getAttribute("aria-pressed") !== "true"));
  save.addEventListener("click", saveCurrent);
  exportButton.addEventListener("click", exportHtml);

  restoreSaved();
  setEditing(false);
})();
