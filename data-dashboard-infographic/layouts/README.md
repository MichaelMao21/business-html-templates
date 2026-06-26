# Layout Snippets

These snippets are reusable HTML fragments for `data-dashboard-infographic`.

They are not standalone pages. Copy them into `template.html` or another page that already includes the template CSS variables and component classes.

## Files

- `metric-card.html`: KPI cards for revenue, conversion, cost, retention, or other top-line metrics.
- `bar-chart.html`: horizontal comparison chart for channels, products, regions, cohorts, or teams.
- `donut-chart.html`: composition chart for customer mix, revenue mix, traffic source, or budget allocation.
- `trend-line.html`: wide trend chart for time-series movement across one or two metrics.

## Rules

- Keep labels short enough for Chinese text.
- Keep chart colors semantically consistent across the page.
- Update numbers, labels, and captions together.
- Use `metric-card.html` in a four-column `.kpis` grid when possible.
- Use `trend-line.html` as a full-width chart inside `.charts`.
