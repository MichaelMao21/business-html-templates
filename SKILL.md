# Business HTML Templates

Use this skill when the user wants a formal Chinese-friendly HTML presentation, business report, strategy deck, planning artifact, or data-rich one-page dashboard from reusable local templates.

## Template Library

Start from `index.json`. It is the source of truth for available templates, examples, screenshots, metadata, and layout files.

- `data-dashboard-infographic`: KPI reviews, financial summaries, operating dashboards, growth dashboards.
- `business-plan-brief`: business plans, internal proposals, pitch-style investment memos.
- `strategy-planning-brief`: BLM-inspired strategy planning, gap analysis, market insight, strategic intent, strategy decoding.
- `industry-research-report`: market sizing, industry chain, trend and competition research.
- `goals-calendar-agenda`: OKR planning, calendar agenda, meeting cadence, goal tracking.

Open `gallery.html` when the user needs visual comparison before choosing.

## Workflow

1. Match the user's scenario to one template in `index.json`.
2. Prefer a complete file in `examples/` when the task resembles an existing case.
3. Use `template.html` when creating a fresh document.
4. Read the template's `README.md` or `design.md` before editing visual structure.
5. Keep the original visual grammar: grid density, typography, color role, chart style, and interaction pattern.
6. Use `_shared/svg-chart-components/README.md` when adding or changing SVG charts.
7. Keep editable text support available. Shared templates use `_shared/editable-runtime/`; the dashboard template has native edit/save/export controls.

## Quality Bar

Every complete template should include:

- `template.html`
- `template.json`
- `design.md` or `README.md`
- at least one complete `examples/*.html`
- reusable `layouts/*.html`
- `screenshots/cover.png`

Before saying the work is done, run:

```bash
node validate-index.js
node validate-render.js
```

The render validator checks desktop/mobile overflow, broken images, and editable controls.
