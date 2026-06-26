# Contributing Templates

The goal of this library is to make formal business HTML templates easy to use and easy to extend.

## Add A New Template

1. Create `<slug>/`.
2. Add the required files listed in `SPEC.md`.
3. Fill `template.json` completely.
4. Add at least one complete example.
5. Generate at least `screenshots/cover.png`.
6. Add the template to `index.json`.
7. Run validation:

```bash
npm run validate
```

## Naming

- Slugs use lowercase kebab-case.
- Layout files use purpose names, such as `business-design.html`.
- Example files should describe the scenario, such as `ai-customer-ops-saas-2026-blm.html`.

## Content Standards

- Use realistic business copy.
- Avoid lorem ipsum.
- Use chart types only when they match the data shape.
- Include units, legends, and axis labels for charts.
- Keep Chinese text readable at desktop and mobile sizes.

## Visual Standards

- Prefer restrained business palettes.
- Avoid one-note color systems unless the source brand requires it.
- Keep cards at 8px radius or below.
- Do not nest cards inside cards.
- Use full-width sections or unframed layouts for major page regions.

## Verification

Validation must pass before considering a template ready:

```bash
npm run validate
```

For visual changes, open the affected HTML in a browser and regenerate screenshots.
