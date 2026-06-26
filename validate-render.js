const fs = require("fs");
const path = require("path");

function loadPlaywright() {
  try {
    return require("playwright");
  } catch {
    throw new Error("Playwright is not available. Run `npm install` before `npm run validate`.");
  }
}

const { chromium } = loadPlaywright();
const root = __dirname;
const index = JSON.parse(fs.readFileSync(path.join(root, "index.json"), "utf8"));

function fileUrl(relPath) {
  return `file://${path.join(root, relPath)}`;
}

async function inspectPage(browser, relPath) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 }, deviceScaleFactor: 1 });
  await page.goto(fileUrl(relPath));
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(250);
  const desktop = await page.evaluate(() => ({
    title: document.title,
    scrollWidth: document.documentElement.scrollWidth,
    viewport: window.innerWidth,
    editable: Boolean(
      document.querySelector(".template-edit-toolbar") ||
      document.querySelector("[data-edit-toggle], [data-save-html], [data-export-html]")
    ),
    brokenImages: [...document.images].filter((img) => !img.complete || img.naturalWidth === 0).length
  }));
  await page.close();

  const mobile = await browser.newPage({ viewport: { width: 390, height: 900 }, deviceScaleFactor: 2 });
  await mobile.goto(fileUrl(relPath));
  await mobile.waitForLoadState("domcontentloaded");
  await mobile.waitForTimeout(250);
  const mobileResult = await mobile.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    viewport: window.innerWidth
  }));
  await mobile.close();

  return { desktop, mobile: mobileResult };
}

(async () => {
  const executablePath = fs.existsSync("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")
    ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    : undefined;
  const browser = await chromium.launch({ headless: true, executablePath });
  const checked = [];
  const failures = [];
  const pages = ["gallery.html"];

  for (const entry of index.templates) {
    pages.push(entry.template_file);
    for (const example of entry.example_files || []) pages.push(example);
  }

  for (const relPath of pages) {
    const result = await inspectPage(browser, relPath);
    checked.push({ path: relPath, ...result });
    if (result.desktop.brokenImages > 0) failures.push(`${relPath}: broken images`);
    if (result.desktop.scrollWidth > result.desktop.viewport) failures.push(`${relPath}: desktop horizontal overflow`);
    if (result.mobile.scrollWidth > result.mobile.viewport) failures.push(`${relPath}: mobile horizontal overflow`);
    if (relPath !== "gallery.html" && !result.desktop.editable) failures.push(`${relPath}: missing editable controls`);
  }

  await browser.close();

  if (failures.length) {
    console.error(JSON.stringify({ ok: false, failures, checked }, null, 2));
    process.exit(1);
  }

  console.log(JSON.stringify({
    ok: true,
    checked: checked.length,
    pages: checked.map((item) => item.path)
  }, null, 2));
})();
