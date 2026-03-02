# AI Prompt — Loading & Progress Indicators Design Guide

Use this prompt when asking Claude to generate any interface that involves loading, processing, uploading, downloading, or any asynchronous operation.

---

## Prompt

```
Before creating any UI that involves loading states, waiting, processing, uploading, downloading,
form submission, data fetching, or any asynchronous operation — you MUST first read the loading
& progress indicators design guide at:

/mnt/skills/user/loading-progress-indicators/SKILL.md

This file contains mandatory loading UX rules from the Bakusevych guide (UX Collective) and
supporting research on perceived performance. Every loading/waiting state must comply with ALL
rules, including:

Wait Time Decision Matrix (CRITICAL):
- < 1 second → NO loading indicator (instant response only)
- 1-3 seconds → Spinner or skeleton screen (indeterminate, simple)
- 3-10 seconds → Determinate progress bar or percentage with label
- 10+ seconds → Progress bar + time estimate + non-blocking interaction

Key Rules:
1. ALWAYS communicate system status — visibility of system status is heuristic #1
2. Skeleton screens must match the actual content layout structure
3. Progress bars must ALWAYS move forward — never stall or freeze
4. Loading labels must describe WHAT is happening, not just "Loading..."
5. Use a SINGLE global indicator for multiple items loading simultaneously
6. Long tasks must be NON-BLOCKING — let users continue working
7. Buttons: show spinner, disable during loading, show success/error feedback after
8. Place indicators where users expect them (near the triggering element)
9. No full-page blocking spinners for individual component loading
10. Include error states with retry option if loading fails
11. Accessibility: aria-busy, role="progressbar", text alternatives, reduced motion
12. Never show unnecessary animations without clear loading feedback

Run through the Implementation Checklist before presenting any UI with loading states.
Apply these rules automatically — every async operation needs proper loading UX.
```

---

## Installation

1. Upload the `SKILL.md` file to your Claude skill directory:
   `/mnt/skills/user/loading-progress-indicators/SKILL.md`

2. Add the prompt above to your system prompt, project instructions, or paste it at the
   start of a conversation when requesting UI work involving loading states.

3. Claude will automatically read and follow the loading/progress guide for any UI generation task.

---

## Companion Skills

This skill pairs with the complete Bakusevych UI design system:
- **text-fields-forms-design** — for text fields, form layouts, and validation
- **selection-controls-design** — for checkboxes, radio buttons, and toggles
- **button-design** — for buttons, CTAs, FABs, and action hierarchy
- **data-tables-design** — for grids, tables, and tabular data display
- **dashboard-design** — for dashboards, analytics, KPIs, and charts
- **simplify-design** — universal simplification principles (meta-skill, always apply)
- **financial-ux-design** — banking, fintech, wealth management domain
- **navigation-design** — top vs side nav, mobile, responsive, hamburger rules

Together, the nine skills cover: forms, selections, buttons, data tables, dashboards,
navigation, loading states, design simplification, and financial domain UX.