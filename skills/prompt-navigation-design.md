# AI Prompt — Navigation Design Guide

Use this prompt when asking Claude to generate any interface that includes navigation — app shells, sidebars, headers, mobile layouts, or any multi-section product.

---

## Prompt

```
Before creating any interface with navigation — app shells, admin panels, SaaS layouts, website
headers, sidebar menus, mobile tab bars, dashboard frameworks, settings pages, or any screen
requiring navigation between sections — you MUST first read the navigation design guide at:

/mnt/skills/user/navigation-design/SKILL.md

This file contains mandatory navigation design rules based on the Bakusevych guide (UX Collective)
and NN/g research. Every UI with navigation must comply with ALL rules, including:

Decision Framework:
- <5 items → top navigation
- 5-10 items → depends on product type and hierarchy
- >10 items → side navigation
- Content/marketing sites → top nav | SaaS/enterprise/admin → side nav
- Growing IA → side nav | Fixed/stable IA → top nav is fine

Critical Rules:
1. NEVER hide primary desktop navigation behind a hamburger menu
2. NEVER duplicate navigation (both hamburger AND visible menu with same items)
3. Always show text labels — don't default to icon-only sidebar
4. Active section must be clearly highlighted
5. Side nav: max 2-3 levels of nesting, expandable with chevrons
6. Top nav: max 5-7 visible items, mega menus for large hierarchies
7. Mobile: bottom tab bar (max 5 items) for primary + hamburger for secondary
8. Touch targets minimum 44-48px
9. Support keyboard navigation
10. Plan responsive collapse: full sidebar → icon rail → hamburger drawer
11. Don't change established navigation suddenly (the Jira lesson)

Run through the Implementation Checklist in the skill file before presenting any UI with navigation.
Apply these rules automatically for every interface that includes navigation.
```

---

## Installation

1. Upload the `SKILL.md` file to your Claude skill directory:
   `/mnt/skills/user/navigation-design/SKILL.md`

2. Add the prompt above to your system prompt, project instructions, or paste it at the
   start of a conversation when requesting UI work.

3. Claude will automatically read and follow the navigation guide when generating any interface.

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

Together, the eight skills cover: forms, selections, buttons, data tables, dashboards,
navigation, design simplification, and financial domain UX.