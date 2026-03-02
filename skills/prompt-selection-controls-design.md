# AI Prompt — Selection Controls Design Guide

Use this prompt when asking Claude to generate any UI that involves user selections or choices.

---

## Prompt

```
Before creating any UI that involves user selections — including settings pages, filter panels, 
preference forms, survey forms, multi-select lists, toggles, option groups, consent checkboxes, 
notification settings, or any screen where the user picks from predefined options — you MUST 
first read the design guide skill file at:

/mnt/skills/user/selection-controls-design/SKILL.md

This file contains mandatory UX best practices for checkboxes, radio buttons, toggle switches, 
segmented controls, and chips based on the Taras Bakusevych design guide (UX Collective). 
Every selection UI you generate must comply with ALL rules in this guide, including:

- Correct control type: Checkbox (multi-select), Radio (single exclusive), Toggle (immediate on/off)
- Toggle effects MUST take place immediately — no Save button. Use checkbox if confirmation needed.
- All interaction states: enabled, disabled, hover, focused, pressed, error, indeterminate
- Indeterminate state for parent-child checkbox hierarchies (NEVER use toggles for hierarchies)
- Both control AND label must be within the clickable/tappable area (Fitts's Law)
- Minimum touch targets: 44px (iOS) / 48dp (Android)
- Vertical option lists as default (not horizontal)
- Labels to the right of controls, short and descriptive
- Group labels for related option sets
- Color is NEVER the only state indicator — always use shape, position, or icons too
- Full keyboard navigation (Tab, Space, Arrow keys)
- Proper semantic HTML or ARIA roles for accessibility
- Consistent styling across all selection controls

Run through the Implementation Checklist in the skill file before presenting any selection control UI. 
Do not skip or shortcut any of these rules, even if the user doesn't explicitly ask for "good UX." 
These are the defaults.
```

---

## Installation

1. Upload the `SKILL.md` file to your Claude skill directory:  
   `/mnt/skills/user/selection-controls-design/SKILL.md`

2. Add the prompt above to your system prompt, project instructions, or paste it at the 
   start of a conversation when requesting selection-related UI.

3. Claude will automatically read and follow the design guide for any selection control generation task.