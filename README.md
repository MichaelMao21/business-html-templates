# Business HTML Templates

Reusable HTML templates for formal Chinese business presentations, reports, planning documents, and data-heavy browser decks.

This library is designed for scenarios where a plain slide deck is too static, but a full web app is unnecessary: KPI dashboards, BLM strategy planning, industry research, business plans, OKR calendars, and executive-facing one-page reports.

## Preview

Open [gallery.html](gallery.html) in a browser to compare all templates visually.

## Templates

| Scenario | Template | Best For |
| --- | --- | --- |
| Data dashboard | [`data-dashboard-infographic`](data-dashboard-infographic/template.html) | KPI reviews, financial summaries, operating dashboards, growth dashboards |
| Business plan | [`business-plan-brief`](business-plan-brief/template.html) | Startup pitches, internal proposals, investment-style business cases |
| Strategy planning | [`strategy-planning-brief`](strategy-planning-brief/template.html) | BLM strategy planning, gap analysis, market insight, strategic intent, strategy decoding |
| Industry research | [`industry-research-report`](industry-research-report/template.html) | Market sizing, industry chain, trend analysis, competition matrix, conclusions |
| Goals and agenda | [`goals-calendar-agenda`](goals-calendar-agenda/template.html) | OKR planning, monthly calendars, weekly agendas, project cadence |

## How To Use

1. Open `gallery.html` and choose the closest template.
2. Start from `template.html` for a blank version, or from a complete file in `examples/`.
3. Edit text directly in the browser where editable controls are available.
4. Update SVG chart values in the HTML when the data changes.
5. Export or save the final HTML as a standalone deliverable.

## Repository Structure

```text
.
  README.md
  SKILL.md
  index.json
  SPEC.md
  CONTRIBUTING.md
  gallery.html
  validate-index.js
  validate-render.js
  _shared/
  data-dashboard-infographic/
  business-plan-brief/
  strategy-planning-brief/
  industry-research-report/
  goals-calendar-agenda/
```

## Validation

Install dependencies:

```bash
npm install
```

Run all checks:

```bash
npm run validate
```

Or run checks separately:

```bash
node validate-index.js
node validate-render.js
```

The validators check template metadata, required files, complete examples, broken images, desktop/mobile horizontal overflow, and editable controls.

## Codex Skill

`SKILL.md` turns this repository into a reusable Codex skill. It tells Codex when to use the library, how to choose a template, and what quality checks to run before delivering HTML.

## Contributing

Read [SPEC.md](SPEC.md) and [CONTRIBUTING.md](CONTRIBUTING.md) before adding templates. A useful template should include a real example, reusable layout fragments, screenshots, metadata, design notes, and validation coverage.
