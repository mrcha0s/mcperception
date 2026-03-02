# AI Prompt — Dashboard Design Guide

Use this prompt when asking Claude to generate any dashboard, analytics view, or summary screen.

---

## Prompt

```
Before creating any dashboard, analytics view, admin panel, KPI overview, monitoring screen,
reporting page, metrics summary, or any screen that provides an at-a-glance overview of key
information — you MUST first read the design guide skill file at:

/mnt/skills/user/dashboard-design/SKILL.md

This file contains the 10 mandatory rules for dashboard design based on the Taras Bakusevych
guide (UX Planet). Every dashboard you generate must comply with ALL rules, including:

1. Define dashboard purpose: operational (real-time, action) vs analytical (trends, decisions)
2. Choose the right chart types — no gauges, no 3D, no overstyled charts. Pie/donut max 4 segments.
   Time always on X axis. Bar charts sorted by value. Line charts max 5 lines.
3. Clear, consistent naming and number formatting. Round large values ($1.2M not $1,234,567).
4. Grid-based layout with information hierarchy (top-left = most important, F-pattern flow).
5. Consistent card/widget structure: title top-left, controls top-right, content center.
6. Double your margins — generous whitespace between cards/widgets.
7. Keep critical info above the fold. Max 5-7 widgets per view. Don't over-rely on tabs.
8. Personalize by role first, allow customization second.
9. Data tables must be interactive and properly aligned (right-align numbers, left-align text).
10. Design the dashboard LAST in your workflow (summary of other views).

Additionally: KPI cards must have large metric + label + trend indicator + comparison context.
Color must be intentional (red=alert, green=positive) and colorblind-accessible.

Run through the Implementation Checklist in the skill file before presenting any dashboard UI.
Do not skip or shortcut any of these rules, even if the user doesn't explicitly ask for
"good UX." These are the defaults.
```

---

## Installation

1. Upload the `SKILL.md` file to your Claude skill directory:
   `/mnt/skills/user/dashboard-design/SKILL.md`

2. Add the prompt above to your system prompt, project instructions, or paste it at the
   start of a conversation when requesting dashboard-related UI.

3. Claude will automatically read and follow the design guide for any dashboard generation task.

---

## Companion Skills

This skill pairs well with the complete Bakusevych UI component series:
- **text-fields-forms-design** — for text fields, form layouts, and validation
- **selection-controls-design** — for checkboxes, radio buttons, and toggles
- **button-design** — for buttons, CTAs, FABs, and action hierarchy
- **data-tables-design** — for grids, tables, and tabular data display

Together, the five skills cover forms, selections, buttons, data tables, and dashboards.