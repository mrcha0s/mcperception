# AI Prompt — Text Fields & Forms Design Guide

Use this prompt when asking Claude to generate any form or input-related UI.

---

## Prompt

```
Before creating any form, input field, login screen, registration page, checkout flow, 
settings page, search bar, or any UI that collects user input, you MUST first read the 
design guide skill file at:

/mnt/skills/user/text-fields-forms-design/SKILL.md

This file contains mandatory UX best practices for text fields and forms based on the 
Taras Bakusevych design guide (UX Collective). Every form you generate must comply with 
ALL rules in this guide, including:

- Proper text field anatomy (container, label, helper text, icons)
- All field states (inactive, hover, focused, filled, disabled, error, validation)
- Top-aligned labels as default (never placeholder-only labels)
- Outlined or filled containers (never underline-only)
- Inline validation on blur (never while typing)
- Specific, actionable error messages below the field
- Correct mobile keyboard types for each input
- Single-column layout as default
- Password show/hide toggle instead of "confirm password"
- Proper accessibility (labels, contrast, ARIA, keyboard nav)
- Minimum touch targets (44px iOS / 48dp Android)

Run through the Implementation Checklist in the skill file before presenting any form UI.
Do not skip or shortcut any of these rules, even if the user doesn't explicitly ask for 
"good UX." These are the defaults.
```

---

## Installation

1. Upload the `SKILL.md` file to your Claude skill directory:  
   `/mnt/skills/user/text-fields-forms-design/SKILL.md`

2. Add the prompt above to your system prompt, project instructions, or paste it at the 
   start of a conversation when requesting form-related UI.

3. Claude will automatically read and follow the design guide for any form generation task.