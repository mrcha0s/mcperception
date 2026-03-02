# AI Prompt — Data Visualization Design Guide

Use this prompt when asking Claude to generate any charts, graphs, or data visualizations.

---

## Prompt

```
Before creating any chart, graph, data visualization, or data display component, you MUST first
read the data visualization design guide at:

/mnt/skills/user/data-visualization-design/SKILL.md

This file contains mandatory data visualization rules from the Bakusevych guide (UX Collective).
Every chart and data visualization must comply with ALL rules, including:

Critical Rules:
1. CHOOSE THE RIGHT CHART TYPE — match it to the user's goal (comparison, trend, composition, distribution)
2. BAR CHARTS: Sort by VALUE (not alphabetically), start at ZERO baseline
3. LINE CHARTS: Use straight lines ONLY (never smoothed), use only for frequent continuous data
4. TIME always on the HORIZONTAL axis, left to right
5. NEVER use DUAL-AXIS charts — use two separate charts instead
6. PIE CHARTS: Max 5 slices, labels OUTSIDE, largest at 12 o'clock, NEVER 3D
7. DONUT CHARTS: Use sparingly — less readable than pie charts
8. DIRECT LABELING on chart elements — minimize legend dependency
9. Maximize DATA-INK RATIO — remove gridlines, borders, decorations that add no value
10. COLORS must encode meaning consistently; design for COLOR-BLIND users
11. Add ANNOTATIONS to highlight key insights
12. NEVER use 3D charts of any kind
13. PROPORTIONS must be accurate — no distortion
14. NEGATIVE values on opposite side of baseline from positive

Run through the Implementation Checklist before presenting any data visualization.
```

---

## Installation

1. Upload `SKILL.md` to: `/mnt/skills/user/data-visualization-design/SKILL.md`
2. Add the prompt above to your system prompt or project instructions.

---

## Companion Skills

Pairs with:
- **dashboard-design** — for complete dashboard layouts with multiple visualizations
- **ui-design-rules** — 58 universal UI rules (master skill)
- **design-principles** — 10 foundational design principles
- **presentation-design** — for data within slide decks