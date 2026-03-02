---
name: data-visualization-design
description: >
  Design guide for creating accurate, clear, and effective data visualizations, charts, and graphs.
  Use this skill whenever the user asks to create, design, review, or improve any chart, graph,
  data visualization, infographic, or data display. Trigger when the user mentions "chart", "graph",
  "data visualization", "bar chart", "line chart", "pie chart", "donut chart", "scatter plot",
  "area chart", "histogram", "sparkline", "heatmap", "treemap", "data viz", "metrics display",
  "KPI visualization", "recharts", "d3", "Chart.js", "Plotly", or when generating any React/HTML
  component that displays data visually. Also apply when the user asks to display numbers, trends,
  comparisons, distributions, or compositions in a visual format. This skill prevents common
  data misrepresentation mistakes and ensures charts follow the Bakusevych data visualization
  guide (UX Collective) and data-ink ratio best practices.
---

# Data Visualization Design Guide

Based on **"20 Ideas for Better Data Visualization"** by Taras Bakusevych (UX Collective).

Reference: https://uxdesign.cc/20-ideas-for-better-data-visualization-73f7e3c2782d

> **Applications we design are becoming increasingly data-driven. The need for quality data visualization is high as ever. Confusing and misleading graphics are all around us, but we can change this by following these simple rules.**

---

## 1. Choose the Right Chart Type

> Choosing the wrong chart type, or defaulting to the most common type, could confuse users or lead to data misinterpretation.

- The same data set can be represented in many ways — it depends on **what users want to see**
- Always start with a **review of your data set** and user interview
- Ask: What is the user trying to understand? Comparison? Trend? Composition? Distribution? Relationship?

### Chart Selection Matrix

| User Goal | Best Chart Types | Avoid |
|-----------|-----------------|-------|
| **Comparison** (among items) | Bar chart (horizontal or vertical), grouped bar | Pie chart, area chart |
| **Trend over time** | Line chart, area chart | Pie chart, bar chart (if many time points) |
| **Composition** (parts of a whole) | Stacked bar, pie (≤5 slices), treemap | Line chart, scatter |
| **Distribution** | Histogram, box plot, scatter | Pie chart, line chart |
| **Relationship** (correlation) | Scatter plot, bubble chart | Bar chart, pie chart |
| **Single value/KPI** | Big number with trend indicator, sparkline | Full chart (overkill) |

---

## 2. Bar Charts: Sort by Value, Not Alphabetically

> Place the largest values on top (horizontal bars) or left (vertical bars) to ensure the most important values take the most prominent space, reducing eye movements and time to read.

- ✅ Sort bars by **value** (descending) — largest first
- ❌ Do NOT default to alphabetical sorting
- Exception: time-based categories should stay in chronological order

---

## 3. Bar Charts: Start at Zero Baseline

> Truncation leads to misrepresentation. A value that appears 3x greater than another may actually differ only marginally.

- ✅ For bar/column charts: **always start the y-axis at zero**
- Truncated axes make small differences appear enormous
- Users scan bar heights quickly — distorted proportions create false conclusions

---

## 4. Bar Charts: Negative vs Positive Values

- For horizontal bars: plot **negative values on the left**, positive on the **right** of a baseline
- ❌ Do NOT plot negative and positive values on the same side of the baseline
- Use color coding: one color for positive, another for negative

---

## 5. Line Charts: Use Carefully with Infrequent Data

> When data updates infrequently, line charts may cause confusion. Users may assume the lines connecting markers represent actual values when in reality the true values at those specific times are unknown.

- Line charts work well with **short, frequent time intervals** (daily, hourly)
- For infrequent data (yearly values updated monthly): use a **vertical bar chart** instead
- The line between markers implies continuous interpolation — misleading if data is discrete

---

## 6. Line Charts: Never Smooth Lines

> Smoothed line charts may be visually pleasing but they misrepresent the actual data behind them.

- ✅ Use straight lines connecting actual data points (markers)
- ❌ Never use smoothed/curved interpolation — it fabricates data between points
- ❌ Avoid excessively thick lines — they obscure the real marker positions

---

## 7. Line Charts: Adapt the Y-Axis Scale

> For line charts, always limiting the y-axis to start at zero may render the chart almost flat.

- Unlike bar charts, line charts **can** have a non-zero y-axis baseline
- The main goal of a line chart is to represent the **trend**
- Keep the line occupying **two-thirds of the y-axis range** for optimal readability
- Adapt the scale based on the data set for the given period

---

## 8. Time Axis: Always Horizontal, Left to Right

- When using time in charts, set it on the **horizontal axis** (x-axis)
- Time should run **left to right**
- Do not skip time periods, even if there are no values — show gaps honestly

---

## 9. Avoid Dual-Axis Charts

> Not only are dual-axis charts hard to read, they represent a comparison between 2 data series in a completely misleading way.

- Most users will **not pay close attention** to the different scales
- Users just scan the chart and draw wrong conclusions
- ✅ Instead: use **two separate charts** side by side, or normalize the data to a common scale

---

## 10. Pie Chart Rules (Use Sparingly)

> A pie chart is one of the most popular and often misused charts. In most cases, a bar chart is a much better option.

### If You Must Use a Pie Chart:

| Rule | Detail |
|------|--------|
| **Max 5-7 slices** | Keep it simple; group smallest into "Other" |
| **Slice ordering** | Largest at 12 o'clock, second largest clockwise, third at 11 o'clock, remaining descending clockwise |
| **Labels outside** | Put labels **outside** with clear links to each segment — NOT on top of slices |
| **No 3D** | Never use 3D pie charts — they distort proportions |
| **Sum to 100%** | If showing percentages, ensure they add to exactly 100% |

### When to Use a Pie Chart
- Only when showing **parts of a whole** that sum to 100%
- Only when there's a **clearly dominant slice** to highlight
- Only with **≤5 segments** (ideally 2-3)

### When NOT to Use a Pie Chart
- When comparing values across different categories
- When slices are similar in size (hard to distinguish)
- When there are more than 5-7 segments

---

## 11. Donut Charts: Use with Caution

> When we take the middle out and create a donut chart, we free up space for additional information but sacrifice clarity. Taken to extremes, it renders the chart useless.

- Donut charts are **less readable** than pie charts (which are already hard to read)
- Only use if the center space provides valuable summary info (e.g., total value)
- Keep thin donut rings to a minimum — they become unreadable

---

## 12. Direct Labeling on Charts

> Without proper labeling, no matter how nice your graph — it won't make sense.

- ✅ Label data **directly on the chart** (on bars, next to lines, beside points)
- ❌ Don't rely solely on legends that force eye movement back and forth
- Direct labels reduce cognitive load and speed up comprehension
- Remove the legend entirely if direct labels are present and clear

---

## 13. Data-Ink Ratio: Remove Chart Junk

> Remove any excess information, lines, colors, and text from a chart that does not add value.

Following Edward Tufte's data-ink ratio principle:
- ✅ Remove unnecessary gridlines (keep subtle reference lines if needed)
- ✅ Remove chart borders and boxes
- ✅ Remove redundant labels and legends
- ✅ Minimize axis tick marks
- ✅ Use color purposefully — not decoratively
- Every pixel of ink should represent data

---

## 14. Color Usage in Charts

### Rules
- Use color to **encode meaning**, not decoration
- Be consistent: same color = same category across all charts
- Use **sequential** palettes for continuous data (light → dark)
- Use **diverging** palettes for data with a meaningful midpoint (red ← neutral → green)
- Use **categorical** palettes for distinct groups (max 5-7 distinct colors)

### Accessibility
- ✅ Design for **color-blind users** — don't rely on color alone
- ✅ Add patterns, labels, or shapes as secondary encoding
- ✅ Test with color-blindness simulators
- ❌ Never use red/green as the only differentiator

---

## 15. Annotations and Callouts

- Add **annotations** to highlight key insights, events, or anomalies
- Example: "Sales spike due to holiday promotion" with an arrow pointing to the relevant data point
- Annotations transform raw data into a **story**
- Keep annotations concise — 1 line maximum

---

## 16. Avoid 3D Charts

- ❌ **Never use 3D** for bar charts, pie charts, line charts, or area charts
- 3D adds no information — it only distorts proportions
- Perspective and foreshortening make values appear larger/smaller than reality
- 3D bars occlude data behind them

---

## 17. Proportional Values

- Numbers displayed as bars, areas, bubbles, or other visual elements must be **directly proportional** to the numerical quantities they represent
- ❌ Never distort proportions for visual effect
- Bubble sizes should scale by **area**, not radius

---

## 18. Legend Best Practices

- You **don't need a legend** if you have only one data category
- Use **direct labels** on lines/bars whenever possible (eliminating the need for a legend)
- If a legend is necessary, place it **near the relevant data**, not in a distant corner
- Legend order should match the visual order of data series

---

## 19. Axis and Grid Best Practices

- Keep axis labels **readable** — rotate or abbreviate if needed
- Use subtle, light-colored gridlines — not bold black lines
- Remove unnecessary axis lines (right and top borders)
- Show units clearly (%, $, K, M)

---

## 20. Stacked Charts: Use with Care

- Stacked bar charts work for showing **composition** (parts of a whole over time)
- ❌ Do not use too many composition items — max 3-4 stacked segments
- ✅ Ensure composing parts are relatively similar in size
- Only the bottom segment has a fixed baseline — all others are hard to compare accurately

---

## Implementation Checklist

When generating any data visualization, verify:

- [ ] Chart type matches the user's goal (comparison, trend, composition, distribution, relationship)
- [ ] Bar charts start at **zero baseline** (no truncation)
- [ ] Bars are sorted by **value** (not alphabetically), unless time-based
- [ ] Line charts use **straight lines** (not smoothed curves)
- [ ] Line charts are used only for **frequent, continuous data** (not sparse yearly data)
- [ ] Time is always on the **horizontal axis**, left to right
- [ ] No dual-axis charts — use separate charts instead
- [ ] Pie charts have **≤5 slices**, labels outside, largest at 12 o'clock
- [ ] No 3D charts of any kind
- [ ] Data is **directly labeled** on the chart (minimize legend dependency)
- [ ] Chart junk is removed (unnecessary gridlines, borders, decorations)
- [ ] Colors encode meaning consistently across all charts
- [ ] Color-blind accessible (patterns/labels as secondary encoding)
- [ ] Annotations highlight key insights
- [ ] Proportions are accurate (no distortion)
- [ ] Negative values are on the opposite side of the baseline from positive
- [ ] Y-axis scale is appropriate (zero-based for bars, adapted for lines)

---

## Quick Reference: Common Mistakes

| ❌ Don't | ✅ Do Instead |
|----------|--------------|
| Alphabetically sorted bar chart | Sort by value — largest first |
| Truncated y-axis on bar chart | Always start bar charts at zero |
| Smoothed/curved line chart | Straight lines connecting actual data points |
| Dual-axis chart | Two separate charts side by side |
| Pie chart with 8+ slices | Bar chart, or pie with ≤5 slices + "Other" |
| 3D bar/pie/line chart | Always use 2D — 3D adds distortion, zero information |
| Legend in distant corner | Direct labels on chart elements |
| Heavy gridlines and borders | Subtle gridlines, remove borders (maximize data-ink ratio) |
| Red/green as only differentiator | Add labels, patterns, or shapes for color-blind accessibility |
| Sparse data shown as line chart | Use bar chart for infrequent data points |
| Labels on top of thin pie slices | Labels outside with clear connecting lines |
| Decorative colors with no meaning | Every color encodes a specific data category consistently |