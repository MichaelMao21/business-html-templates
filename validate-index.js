const fs = require("fs");
const path = require("path");

const root = __dirname;
const indexPath = path.join(root, "index.json");
const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));

const requiredEntryFields = [
  "slug",
  "name",
  "category",
  "tagline",
  "best_for",
  "avoid_for",
  "template_file",
  "metadata_file",
  "docs_file"
];

const missing = [];
const invalid = [];

function assertFile(relPath, owner) {
  if (!relPath) return;
  const absolute = path.join(root, relPath);
  if (!fs.existsSync(absolute)) {
    missing.push({ owner, path: relPath });
  }
}

if (index.schema_version !== 1) {
  invalid.push("schema_version must be 1");
}

if (!Array.isArray(index.templates)) {
  invalid.push("templates must be an array");
}

for (const file of ["README.md", "SPEC.md", "CONTRIBUTING.md", "gallery.html"]) {
  assertFile(file, "library");
}

assertFile("SKILL.md", "library");

for (const entry of index.templates || []) {
  for (const field of requiredEntryFields) {
    if (!entry[field]) {
      invalid.push(`${entry.slug || "unknown"} missing ${field}`);
    }
  }

  if (!Array.isArray(entry.example_files) || entry.example_files.length < 1) {
    invalid.push(`${entry.slug} must include at least one example file`);
  }

  if (!Array.isArray(entry.layout_files) || entry.layout_files.length < 1) {
    invalid.push(`${entry.slug} must include at least one layout file`);
  }

  if (!Array.isArray(entry.screenshots) || !entry.screenshots.includes(`${entry.slug}/screenshots/cover.png`)) {
    invalid.push(`${entry.slug} must include screenshots/cover.png`);
  }

  assertFile(entry.template_file, entry.slug);
  assertFile(entry.metadata_file, entry.slug);
  assertFile(entry.docs_file, entry.slug);
  assertFile(entry.design_file, entry.slug);

  for (const file of entry.example_files || []) {
    assertFile(file, entry.slug);
    const absolute = path.join(root, file);
    if (fs.existsSync(absolute)) {
      const html = fs.readFileSync(absolute, "utf8");
      if (/http-equiv=["']refresh["']/i.test(html) || /location\.href\s*=|location\.replace\s*\(/i.test(html)) {
        invalid.push(`${file} must be a complete example, not a redirect wrapper`);
      }
    }
  }
  for (const file of entry.layout_files || []) assertFile(file, entry.slug);
  for (const file of entry.screenshots || []) assertFile(file, entry.slug);
}

if (index.count !== index.templates.length) {
  invalid.push(`count ${index.count} does not match templates length ${index.templates.length}`);
}

if (missing.length || invalid.length) {
  console.error(JSON.stringify({ ok: false, invalid, missing }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  ok: true,
  count: index.templates.length,
  slugs: index.templates.map((entry) => entry.slug)
}, null, 2));
