# Editable Runtime

Shared no-build runtime for editing template text directly in the browser.

## Usage

Add these files to a template:

```html
<link rel="stylesheet" href="../_shared/editable-runtime/editable.css">
<main data-edit-root>
  ...
</main>
<script src="../_shared/editable-runtime/editable.js" data-filename="my-template"></script>
```

For example files one level deeper, use `../../_shared/...`.

## Features

- Floating edit toolbar.
- Toggle text edit mode.
- Save edits to `localStorage`.
- Export a clean standalone HTML file.
- No build step and no external dependency.

