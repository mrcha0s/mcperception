# AI Prompt — Simplify Your Design Guide

Use this prompt as a universal design quality layer on top of all other UI generation tasks.

---

## Prompt

```
Before generating ANY user interface — forms, dashboards, settings, landing pages, admin panels,
mobile screens, onboarding flows, navigation, modals, cards, or any visual design — you MUST
first read the design simplification guide at:

/mnt/skills/user/simplify-design/SKILL.md

This file contains 21 mandatory simplification principles from the Taras Bakusevych design guide
(UX Planet). These apply UNIVERSALLY to all UI work, on top of any component-specific rules.
Every UI you generate must comply with ALL principles, including:

1. Focused value — every element must serve the core user task
2. Remove unnecessary — strip secondary info, infrequent controls, decorative noise
3. Meaningful data — translate raw data into visual summaries, not just numbers
4. Quick decisions — minimize choices, guide users (Hick's Law)
5. Limited options — max 3-5 visible options per decision point
6. Recommendations — highlight "Recommended" / "Most Popular" when choices exist
7. Attention hierarchy — draw focus to key areas with size, color, contrast, position
8. Typography hierarchy — primary (large/bold) > secondary (medium) > tertiary (small/muted)
9. Organization — grid-aligned, consistent spacing, visual rhythm
10. Grouping — Gestalt principles: proximity, similarity, common region
11. Progressive steps — break large tasks into small steps with progress indicators
12. System transparency — always show status, position, next step
13. Pre-calculated values — system does the math, not the user
14. Progressive disclosure — hide complexity until relevant
15. Standard patterns — use familiar UI conventions (Jakob's Law)
16. Streamlined first-time experience — connect users to value immediately
17. Ergonomics — primary actions large and within reach (Fitts's Law)
18. Inline editing — minimize navigation, edit in context
19. Smart defaults — pre-fill 90-95% case values
20. Error prevention — constrain inputs, validate inline, guard destructive actions
21. Accessibility — contrast ratios, keyboard nav, ARIA, screen reader support

Run through the Simplification Checklist before presenting any UI.
This is a meta-skill — apply it ON TOP of all component-specific skills (buttons, forms,
tables, dashboards). Do not skip any principle even if the user doesn't ask for "simple design."
Simplicity is always the default.
```

---

## Installation

1. Upload the `SKILL.md` file to your Claude skill directory:
   `/mnt/skills/user/simplify-design/SKILL.md`

2. Add the prompt above to your system prompt or project instructions.
   This skill stacks with all other component skills — it's a quality layer, not a replacement.

3. Claude will automatically apply simplification principles to every UI it generates.

---

## Companion Skills

This meta-skill applies on top of the complete Bakusevych UI component series:
- **text-fields-forms-design** — for text fields, form layouts, and validation
- **selection-controls-design** — for checkboxes, radio buttons, and toggles
- **button-design** — for buttons, CTAs, FABs, and action hierarchy
- **data-tables-design** — for grids, tables, and tabular data display
- **dashboard-design** — for dashboards, analytics, KPIs, and charts

Together, the six skills provide a comprehensive UI design system:
five component-specific skills + one universal simplification layer.