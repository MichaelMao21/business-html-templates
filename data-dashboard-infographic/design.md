# Data Dashboard Infographic Design Guide

## Purpose

Use this template for a single-page business data infographic: quarterly growth updates, campaign recaps, executive KPI dashboards, operational reviews, and investor-facing metric summaries.

The design should feel clear, structured, and report-ready. It is not a decorative presentation cover and should not rely on illustration or photography.

## Canvas

- Fixed working canvas: `1440 x 1800`.
- Primary layout: top executive summary, KPI cards, chart grid, ranked breakdowns, action notes.
- Keep the page scannable from top to bottom. Do not turn it into a slide deck.

## Typography

- Font stack: `Inter`, `PingFang SC`, `Microsoft YaHei`, `Noto Sans CJK SC`, `Arial`, `sans-serif`.
- Chinese text should use strong weight contrast, not tiny decorative type.
- Title: 54-64 px, 800-900 weight.
- Section heading: 22-28 px, 800 weight.
- KPI value: 42-58 px, 850-900 weight.
- Body text: 18-24 px, 400-600 weight.
- Captions: 15-17 px, 500 weight.

## Color

Theme variables live in `themes.css`. Switch the palette by changing the class on the dashboard root:

```html
<main class="dashboard theme-blue-black">
```

Available themes:

- `theme-default`: teal, magenta, and warm gold for general business dashboards.
- `theme-blue-black`: navy, orange, and cool teal for formal executive reports.
- `theme-green-gold`: forest green, antique gold, and terracotta for strategy and industry research.
- `theme-dark-neon`: technology analytics dashboard.

Default color role definitions:

- Background: warm off-white `#f7f4ee`.
- Ink: charcoal `#20242a`.
- Muted text: `#67707c`.
- Main blue: `#2f80ed`.
- Main red: `#dc3f5f`.
- Yellow accent: `#f4c542`.
- Green positive: `#18a06a`.
- Panel background: `#ffffff`.
- Stroke: `#d9dee7`.

Use color as data encoding. Avoid random decorative colors.

## Grid

- Outer margin: 52 px.
- Gap: 24 px.
- Use a 12-column mental grid.
- Cards should align to shared edges. Charts should not float freely.
- Prefer dense but regular spacing over large hero-style whitespace.

## Components

Reusable component snippets live in `layouts/`. They are HTML fragments, not standalone pages. Copy them into a page that already includes the CSS from `template.html`.

### Header

The header contains report title, period, source label, and a short executive conclusion. The conclusion should include 2-4 highlighted numbers.

### KPI Cards

Each KPI card contains:

1. Short label.
2. Large numeric value.
3. Delta chip.
4. One-line interpretation.

Use no more than 4 KPI cards in the top row.

### Charts

Charts are built from editable HTML/CSS blocks in the template. Replace labels and values directly in markup or CSS variables.

- Bar charts: use when comparing channels, regions, products, or cohorts.
- Donut charts: use for composition.
- Trend charts: use only for comparable metrics moving across the same time axis. Prefer 2-3 lines so the chart carries enough information, but do not exceed 3 lines.
- Ranked lists: use for qualitative or mixed metric comparison.

Trend charts must include:

- A legend naming every line.
- Y-axis ticks with units or an explicit normalized-index note.
- X-axis labels for every plotted point.
- Color mappings that match the rest of the page.
- A defensible time-series metric. If the source data is cross-sectional, use bars, tables, or ranked cards instead.
- If metrics use different units, convert them to a shared index such as `first period = 100` before drawing multiple lines.

### Action Notes

End with 3 concrete action notes. Each should have an owner or operational implication when possible.

## Data Rules

- Every big number needs a label and a time range.
- Use the same unit for comparable values.
- Avoid more than two percentage formats in the same chart.
- If a metric is estimated, mark it in the caption.
- Highlight key values inline with `.mark`, not with extra decorative badges.

## Adaptation Rules

- Preserve the canvas size, card rhythm, border system, and chart grammar.
- Replace sample text, labels, numbers, chart values, and date range.
- Do not add photos unless the report topic absolutely requires them.
- Do not introduce gradients or shadows beyond the existing subtle card shadow.
- Keep Chinese line length comfortable; split long clauses across paragraphs or cards.

## Browser Editing

The HTML page includes a lightweight editing toolbar in the top-right corner.

- Use the theme buttons to switch palette.
- Click `编辑关` to enter edit mode. It changes to `编辑开`.
- In edit mode, click text directly on the dashboard and type to modify it.
- Click `保存` to store the current dashboard content and selected theme in browser local storage.
- Click `导出HTML` to download a new HTML file containing the current content and theme.

The save action does not overwrite the source file on disk. It is browser-local. Use export when you need a new shareable HTML file.

## Good Fit

- Marketing campaign performance recap.
- E-commerce operating dashboard.
- Social media growth report.
- Sales funnel summary.
- Product usage analytics.
- Investor metric snapshot.

## Poor Fit

- Brand mood boards.
- Personal portfolios.
- Emotional storytelling decks.
- Photo-led event recaps.
