# Template Library Spec

This file defines the minimum contract for every template in this library.

## Required Directory Structure

Each template must live under `<slug>/` and include:

- `template.html`: the main reusable HTML artifact.
- `template.json`: machine-readable metadata.
- `design.md`: visual system, layout rules, and chart rules.
- `layouts/`: reusable page or component snippets.
- `examples/`: at least one filled example.
- `screenshots/`: at least one PNG preview.

Optional but recommended:

- `README.md`: user-facing usage guide for complex templates.
- `themes.css`: theme variants when the template supports visual themes.

## Required Metadata Fields

Every `template.json` must include:

- `schema_version`
- `slug`
- `name`
- `tagline`
- `language_support`
- `mood`
- `occasion`
- `tone`
- `formality`
- `density`
- `scheme`
- `chart_readiness`
- `image_dependency`
- `animation_level`
- `export_targets`
- `best_for`
- `avoid_for`
- `layout_types`
- `layout_files`
- `recommended_size`

Recommended fields:

- `example_files`
- `docs_file`
- `theme_file`
- `shared_components`

## Screenshot Rules

- Every template needs `screenshots/cover.png`.
- Complex templates should include screenshots for important states or pages.
- Screenshots should be generated from the actual HTML, not manually mocked.
- Desktop screenshot viewport: `1440 x 1200`.
- Mobile verification viewport: `390 x 900`.

## Example Rules

- Every template needs at least one filled example in `examples/`.
- Examples must use a plausible business scenario, not lorem ipsum.
- Examples must preserve the same visual system as the template.
- Indexed examples must be complete HTML files, not redirect wrappers.

## Layout Rules

- Layout files should be small, copyable snippets.
- Name layout files by purpose, such as `market-sizing.html`, `roadmap.html`, or `strategic-intent.html`.
- Layout snippets may depend on CSS from `template.html`, but should not contain unrelated global CSS.

## Interaction Rules

- Interactive templates should work without a build step.
- Shared interaction code should live under `_shared/`.
- If text editing is supported, it should use the shared editable runtime.
- Exported HTML must remain portable and openable from the filesystem.

## Quality Gates

Before adding a template to `index.json`, run:

```bash
npm run validate
```

The validator checks:

- Metadata schema basics.
- Required files.
- Index path integrity.
- Complete indexed examples.
- HTML loadability.
- Editable controls.
- Broken images.
- Mobile horizontal overflow.
