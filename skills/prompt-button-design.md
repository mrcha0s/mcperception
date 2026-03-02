# AI Prompt — Button Design Guide

Use this prompt when asking Claude to generate any UI that includes buttons or interactive actions.

---

## Prompt

```
Before creating any UI that includes buttons — including CTAs, form submissions, dialog actions,
navigation actions, toolbars, confirmation modals, card actions, floating action buttons, icon buttons,
or any element that triggers an action — you MUST first read the design guide skill file at:

/mnt/skills/user/button-design/SKILL.md

This file contains mandatory UX best practices for button design based on the Taras Bakusevych
design guide (UX Collective). Every button you generate must comply with ALL rules in this guide,
including:

- Correct button type for emphasis: Contained (primary), Outlined (secondary), Text (tertiary)
- Maximum ONE contained/primary button per logical section
- Side-by-side buttons must use different emphasis levels (never two contained buttons together)
- All 6 states: normal, hover, focus, active/pressed, loading, disabled
- Loading state must prevent double-submission and show a spinner
- Labels must be short, specific action verbs on a single line ("Save Changes" not "Submit")
- Consistent capitalization across all buttons
- Minimum touch targets: 48×48px (Material) / 44×44px (iOS)
- FAB: only ONE per screen, only for the single most important action
- Icon-only buttons MUST have aria-label and tooltip
- Destructive actions use red/danger color + confirmation step
- Contrast ratios: 4.5:1 for text, 3:1 for container against background
- Focus ring visible and distinct for keyboard navigation
- Consistent border radius, sizing, and styling across all buttons

Run through the Implementation Checklist in the skill file before presenting any button UI.
Do not skip or shortcut any of these rules, even if the user doesn't explicitly ask for
"good UX." These are the defaults.
```

---

## Installation

1. Upload the `SKILL.md` file to your Claude skill directory:
   `/mnt/skills/user/button-design/SKILL.md`

2. Add the prompt above to your system prompt, project instructions, or paste it at the
   start of a conversation when requesting button-related UI.

3. Claude will automatically read and follow the design guide for any button generation task.

---

## Companion Skills

This skill pairs well with:
- **text-fields-forms-design** — for text fields, form layouts, and validation
- **selection-controls-design** — for checkboxes, radio buttons, and toggles

Together, the three skills cover the complete form and interaction surface.