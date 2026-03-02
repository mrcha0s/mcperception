# AI Prompt — Data Tables Design Guide

Use this prompt when asking Claude to generate any data table, grid, or tabular data UI.

---

## Prompt

```
Before creating any UI that displays structured data in rows and columns — including data grids,
admin panels, dashboards with tables, CRM lists, order lists, user management tables, inventory
lists, financial tables, log viewers, analytics tables, or any tabular data display — you MUST
first read the design guide skill file at:

/mnt/skills/user/data-tables-design/SKILL.md

This file contains mandatory UX best practices for data table design based on the Taras Bakusevych
design guide. Every table you generate must comply with ALL rules in this guide, including:

- Only include columns users actually need — remove everything unnecessary
- Order columns by importance, left to right (F-pattern), primary identifier first
- Right-align numeric columns, left-align text columns, align headers to match content
- Use appropriate row height density: compact for large datasets, comfortable for small ones
- Sans-serif fonts only, no ALL CAPS, use tabular numerals for numbers
- Minimize visual noise: no heavy borders, shadows, or 3D effects. Subtle dividers only.
- Eliminate duplication: units in headers not cells, no redundant status indicators
- Sorting on relevant columns with direction indicators
- Filtering: at minimum a global search, ideally column-specific filters
- Pagination with page size options (no infinite scroll for data tables)
- Sticky header row on vertical scroll
- Row hover highlighting, selection checkboxes for bulk actions
- Empty state with helpful message and next-step action
- Loading state with skeleton rows or spinner
- Semantic HTML table elements for accessibility
- Keyboard navigation and screen reader support
- Tested on laptop-sized screens, not just large monitors

Run through the Implementation Checklist in the skill file before presenting any table UI.
Do not skip or shortcut any of these rules, even if the user doesn't explicitly ask for
"good UX." These are the defaults.
```

---

## Installation

1. Upload the `SKILL.md` file to your Claude skill directory:
   `/mnt/skills/user/data-tables-design/SKILL.md`

2. Add the prompt above to your system prompt, project instructions, or paste it at the
   start of a conversation when requesting table-related UI.

3. Claude will automatically read and follow the design guide for any data table generation task.

---

## Companion Skills

This skill pairs well with the complete Bakusevych UI component series:
- **text-fields-forms-design** — for text fields, form layouts, and validation
- **selection-controls-design** — for checkboxes, radio buttons, and toggles
- **button-design** — for buttons, CTAs, FABs, and action hierarchy

Together, the four skills cover forms, selections, buttons, and data display.