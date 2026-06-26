# SVG Chart Components

Reusable dependency-free SVG components for business HTML templates.

## Components

| Component | Best For | Avoid For |
| --- | --- | --- |
| KPI card | Single headline metric, status, change, owner | Long explanations or multi-row tables |
| Multi-series line chart | 2-3 comparable metrics on the same time axis | Unrelated KPIs with different meanings |
| Radar chart | Capability, maturity, competitiveness, fit-gap analysis | Time-series data |
| Gauge chart | Single progress, completion, risk, readiness score | Comparing multiple categories |
| Quadrant matrix | Strategic choices, prioritization, market position | Precise numeric analysis requiring many data points |
| Path roadmap | Strategy decoding, milestone path, phased execution | Dense schedules or task trackers |

## Chart Selection Rules

- Use line charts only for comparable metrics on the same time axis.
- Prefer 2-3 line series. Do not exceed 3.
- If metrics have different units, index them first, such as `first period = 100`.
- Always include legends, axis labels, units, and tooltip text where useful.
- Use radar charts when each axis is a dimension of the same object.
- Use gauges for one number only.
- Use quadrant matrices only when both axes represent meaningful strategic dimensions.
- Use path roadmaps when the order and story matter more than exact dates.
- Keep components dependency-free so exported HTML remains portable.

## Data Rules

- Every chart must state or imply its unit.
- Do not invent precision. Round business estimates where appropriate.
- If the data source is uncertain, label it as an estimate.
- If the chart is decorative rather than explanatory, remove it.

## Interaction Rules

- Tooltips should clarify the value and period.
- Toggle buttons should hide or dim one series, not remove context.
- Gauge buttons should represent scenarios or stages.
- Interactive states must still be readable in a static screenshot.

## Files

- `demo.html`: component demo.
- `svg-components.css`: shared styles.
- `svg-components.js`: tooltip, gauge, and series toggle runtime.
