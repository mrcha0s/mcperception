# AI Prompt — Financial UX Design Guide

Use this prompt when asking Claude to generate any financial product UI — banking, wealth management, fintech, payments, investments, or any interface dealing with money and transactions.

---

## Prompt

```
Before creating any financial product UI — banking apps, wealth management dashboards, payment
flows, investment portals, transaction views, loan/deposit calculators, portfolio screens, account
summaries, budgeting tools, expense trackers, onboarding for financial services, or any screen
dealing with money, balances, or financial data — you MUST first read the financial UX design
guide skill file at:

/mnt/skills/user/financial-ux-design/SKILL.md

This file contains the 10 mandatory financial UX rules (plus bonus) from the Taras Bakusevych
guide (UX Planet). Every financial UI you generate must comply with ALL rules, including:

1. Show Don't Tell — visualize financial data with charts/calculators, not raw numbers
2. Tool Not Marketing — core views serve user tasks, not promotions
3. Personalize — tailor content to each user's accounts, assets, interests, risk profile
4. Smooth Onboarding — progressive steps, document scanning, smart defaults
5. Premium Feel — refined typography, whitespace, polished micro-interactions, warmth
6. Security by Design — biometric-first, risk-based challenges, invisible when normal
7. Leverage Technology — camera scanning, voice, chatbots, smart notifications, auto-fill
8. Manage Cognitive Load — progressive disclosure, chunking, summarization, visual hierarchy
9. Transparency & Trust — clear status feedback for EVERY action (pending/processing/done/failed)
10. Plain Language — no jargon, warm human tone, tooltips for necessary terms
Bonus: All numbers must be internally consistent and mathematically correct

Run through the Implementation Checklist in the skill file before presenting any financial UI.
Apply these rules automatically — don't wait for the user to ask for "good financial UX."
These are always the defaults for any financial product.
```

---

## Installation

1. Upload the `SKILL.md` file to your Claude skill directory:
   `/mnt/skills/user/financial-ux-design/SKILL.md`

2. Add the prompt above to your system prompt, project instructions, or paste it at the
   start of a conversation when requesting financial-related UI work.

3. Claude will automatically read and follow the financial UX guide for any fintech generation task.

---

## Companion Skills

This skill pairs with the complete Bakusevych UI design system:
- **text-fields-forms-design** — for text fields, form layouts, and validation
- **selection-controls-design** — for checkboxes, radio buttons, and toggles
- **button-design** — for buttons, CTAs, FABs, and action hierarchy
- **data-tables-design** — for grids, tables, and tabular data display
- **dashboard-design** — for dashboards, analytics, KPIs, and charts
- **simplify-design** — universal simplification principles (meta-skill, always apply)

Together, the seven skills cover: forms, selections, buttons, data tables, dashboards,
design simplification, and financial domain UX.