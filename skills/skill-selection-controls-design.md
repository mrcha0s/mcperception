---
name: selection-controls-design
description: >
  Design guide for selection controls: checkboxes, radio buttons, toggle switches, segmented controls, and chips.
  Use this skill whenever the user asks to create, design, or build any UI that involves user choices or selections —
  including settings pages, filter panels, preference forms, survey forms, multi-select lists, boolean toggles,
  option groups, consent checkboxes, terms-and-conditions acceptance, theme switchers, notification settings,
  or any screen where the user picks from predefined options. Also trigger when the user mentions "checkbox",
  "radio button", "toggle", "switch", "selector", "multi-select", "single-select", "segmented control", "chip",
  or asks which selection control to use. This skill ensures all generated selection UI follows proven UX best practices
  from the Taras Bakusevych design guide (UX Collective). Apply this even if the user doesn't explicitly ask for
  "good UX" — always default to these patterns.
---

# Selection Controls Design Guide

Based on **"Selection controls — UI component series"** by Taras Bakusevych (UX Collective).

Reference: https://uxdesign.cc/selection-controls-ui-component-series-3badc0bdb546

---

## 1. The Three Core Selection Controls

### Checkboxes
- Used when there are **one or many independent options**
- Users may select **any number of choices**: none, one, or several
- Each checkbox operates independently of others
- Has three visual states: **unselected, selected, indeterminate**

### Radio Buttons
- Used when there is a list of **two or more mutually exclusive options**
- Users must select **exactly one** option
- Selecting one automatically deselects the previously selected one
- Has two visual states: **unselected, selected**
- Originated from car radio preset buttons — pressing one pops out the others

### Toggle Switches
- Used when there are **two mutually exclusive options** (On/Off)
- Always have a **default value** (one state is always active)
- Any effect triggered by the toggle **must take effect immediately**
- If the action cannot take effect immediately, **use a checkbox instead**
- Has two visual states: **Off, On**
- Originated from physical light switches

> **Decision Rule: If the change takes effect immediately → Toggle. If it requires a Save/Submit action → Checkbox.**

---

## 2. When to Use Which Control

| Scenario | Control | Why |
|----------|---------|-----|
| Multiple options, pick any number | **Checkbox** | Independent, non-exclusive selections |
| Multiple options, pick exactly one | **Radio Button** | Mutually exclusive, single selection |
| Binary on/off with immediate effect | **Toggle Switch** | Instant state change, no submit needed |
| Binary yes/no requiring confirmation | **Checkbox** | Needs explicit submit/save action |
| 2-5 options, single select, all visible | **Radio Button** | All options scannable at once |
| 2-5 options, pick multiple, all visible | **Checkbox** | Independent multi-select |
| Many options (6+), pick one | **Dropdown/Select** | Saves space, searchable |
| Many options (6+), pick multiple | **Checkbox list or Multi-select** | Allow scanning + multi-pick |
| Agree to terms / single confirmation | **Single Checkbox** | Clear opt-in action |
| System settings (enable/disable feature) | **Toggle Switch** | Immediate effect expected |
| Parent-child grouped options | **Checkbox with indeterminate** | Supports partial selection |
| Segmented view/mode switching | **Segmented Control** | Visible, mutually exclusive, compact |
| Filterable tags / categories | **Chips** | Compact, removable, multi-select |

### Controls to AVOID Misusing

| ❌ Don't | ✅ Do Instead |
|----------|--------------|
| Use checkboxes for mutually exclusive single selection | Use radio buttons |
| Use radio buttons when zero selections should be possible | Use checkboxes |
| Use toggle for actions that require a Save button | Use checkbox |
| Use dropdown for 2-3 options | Use radio buttons (all visible) |
| Use toggle hierarchies (parent-child toggles) | Use checkbox hierarchies with indeterminate state |

---

## 3. States — All Controls

Every selection control MUST support and visually differentiate ALL of these states:

### Checkboxes & Radio Buttons

| State | Visual Treatment |
|-------|-----------------|
| **Unselected + Enabled** | Default resting state. Empty container, visible border. |
| **Selected + Enabled** | Filled/checked. Checkmark (✓) for checkbox, filled dot for radio. Brand/primary color. |
| **Indeterminate** (Checkbox only) | Dash/minus icon. Used when parent has partially selected children. |
| **Hover** | Subtle background highlight or border emphasis on hover over control + label area. |
| **Focused** | Visible focus ring/outline for keyboard navigation. Must be clearly distinct from hover. |
| **Pressed/Active** | Momentary state during click/tap. Slight scale or color shift. |
| **Disabled + Unselected** | Reduced opacity (~40-50%). Non-interactive. Cursor: not-allowed. |
| **Disabled + Selected** | Reduced opacity. Shows selection but cannot be changed. |
| **Error** | Red/danger border or highlight. Error message below the group. |

### Toggle Switches

| State | Visual Treatment |
|-------|-----------------|
| **Off + Enabled** | Track in muted/gray color. Thumb/knob on the left (LTR). |
| **On + Enabled** | Track in brand/primary color. Thumb/knob on the right (LTR). |
| **Hover** | Subtle emphasis on track or thumb. |
| **Focused** | Visible focus ring around the toggle for keyboard navigation. |
| **Pressed/Active** | Thumb slightly enlarged or color-shifted during interaction. |
| **Disabled + Off** | Reduced opacity. Non-interactive. |
| **Disabled + On** | Reduced opacity. Shows "On" state but cannot be changed. |

### State Rules
- All states must be **clearly differentiated** from one another
- States must be **consistent** across all selection controls in the application
- Follow established patterns — don't challenge formed user mental models
- "It looks like a lot, but it's good to create all those states for reliable interaction"

---

## 4. The Indeterminate State (Checkboxes Only)

The indeterminate state represents a checkbox that is **neither fully checked nor fully unchecked**.

### When to Use
- A **parent checkbox** controls a group of child checkboxes
- **Some** children are selected, **some** are not
- The parent shows the indeterminate state (usually a dash `—` or minus icon)

### Behavior Rules
- Checking the **parent** → selects ALL children
- Unchecking the **parent** → deselects ALL children
- Selecting **some** children → parent becomes indeterminate
- Selecting **ALL** children → parent becomes checked
- Deselecting **ALL** children → parent becomes unchecked

### Visual
- Use a **dash/minus icon** (not a faded checkmark) to clearly indicate the partial state
- The indeterminate state must be visually distinct from both checked and unchecked

> **Rule: NEVER use toggle switches for parent-child hierarchies.** Toggles are visually distracting in hierarchies and create a false impression that all child options are On/Off. Use checkboxes with indeterminate state instead.

---

## 5. Touch Targets & Fitts's Law

The size of the interactive target plays a critical role in usability (Fitts's Law). Checkboxes and radio buttons are inherently small and can be difficult to click or tap, especially on mobile.

### Rules
- **Include BOTH the control AND its label in the clickable/tappable area**
- The entire row (control + label + padding) should be interactive
- Minimum touch target: **44×44px** (iOS HIG) / **48×48dp** (Material Design)
- Adequate spacing between options: minimum **8px** between items, **16px** recommended
- On mobile, make the full row tappable, not just the tiny checkbox/radio circle

### Implementation
```html
<!-- ✅ CORRECT: Label wraps or is associated with input -->
<label>
  <input type="checkbox" /> Subscribe to newsletter
</label>

<!-- ❌ WRONG: Only the small checkbox is clickable -->
<input type="checkbox" /> <span>Subscribe to newsletter</span>
```

---

## 6. Label Placement & Text

### Position
- Labels should be placed **to the right** of the checkbox/radio/toggle (for LTR languages)
- Labels should be **vertically centered** with the control
- For toggle switches, the label can be to the left or right — but be **consistent**

### List Orientation
- ✅ **Vertical lists** (RECOMMENDED): Display options stacked vertically
- ❌ **Horizontal lists**: Harder to scan and associate labels with controls — avoid unless space is extremely constrained and there are very few short options

### Label Content
- Keep labels **short and clear** (1-5 words ideal)
- Use **sentence case** (capitalize first word only)
- Labels must **describe the positive/active state** — what selecting this option means
- For toggles: label should describe what happens when ON (e.g., "Dark mode" not "Toggle dark mode on/off")
- Never truncate labels — if text is too long, the layout needs adjustment

### Group Labels
- Groups of related checkboxes or radio buttons should have a **group label/heading**
- The group label describes the category (e.g., "Notification preferences")
- Group labels should be visually distinct (bolder, larger) from individual option labels

---

## 7. Toggle Switch Specific Rules

Toggle switches have unique UX considerations beyond basic checkboxes:

### Immediate Effect
- The toggle MUST produce an **immediate, visible result**
- No "Save" or "Apply" button should be needed
- If the action requires confirmation → use a checkbox + submit button instead

### Visual Clarity
- The current state (On/Off) must be **unambiguous**
- Use **color change** on the track (gray → brand color) to indicate state
- Optionally add **text labels** ("On"/"Off") inside or beside the toggle for clarity
- The **thumb/knob position** (left = off, right = on for LTR) reinforces the state

### Don't Use Toggles When:
- The action requires a form submission / save step
- You need parent-child hierarchy grouping
- There are more than 2 options to choose from
- The setting doesn't have a clear on/off semantic

---

## 8. Custom & Enhanced Selection Controls

Beyond the three core controls, consider these alternatives for specific scenarios:

### Segmented Controls
- Used for **2-5 mutually exclusive options** displayed as connected buttons
- All options visible simultaneously
- Good for view switching, filter modes, tabs
- Only one option active at a time
- Provide clear active/inactive visual states

### Chips / Tags
- Used for **filtering, categorization, or multi-select** from a visible set
- Can be single-select or multi-select
- Compact, removable, and can include icons
- Good for representing applied filters

### Card Selectors / Image-Based Selection
- Use when options are better represented **visually** (e.g., choosing a theme, plan, template)
- Each card acts as a radio button or checkbox
- Must have clear selected/unselected visual states (border, checkmark overlay, elevation change)
- Include text label alongside the visual

### "Select All" Pattern
- Place a **"Select All" checkbox** at the top of a checkbox list
- Syncs with individual checkboxes:
  - All selected → "Select All" is checked
  - Some selected → "Select All" is indeterminate
  - None selected → "Select All" is unchecked
- Checking "Select All" → checks all items
- Unchecking "Select All" → unchecks all items

---

## 9. Accessibility Requirements

### Keyboard Navigation
- All controls must be **focusable** via Tab key
- Checkboxes: toggle with **Space** key
- Radio buttons: navigate group with **Arrow keys**, select with **Space**
- Toggles: toggle with **Space** or **Enter** key
- Focus state must be **clearly visible** (focus ring)

### ARIA & Semantics
- Use native HTML elements (`<input type="checkbox">`, `<input type="radio">`) whenever possible
- For custom controls, use proper ARIA roles:
  - `role="checkbox"` with `aria-checked="true|false|mixed"`
  - `role="radio"` within `role="radiogroup"`
  - `role="switch"` with `aria-checked="true|false"`
- Every control MUST have an associated label (`<label>`, `aria-label`, or `aria-labelledby`)
- Radio groups need a group label (`<fieldset>` + `<legend>` or `aria-labelledby`)

### Visual Accessibility
- **Color must not be the only indicator** of state — use shape changes (checkmark, dot, position) alongside color
- Maintain minimum **3:1 contrast ratio** for control boundaries against background
- Maintain minimum **4.5:1 contrast ratio** for label text
- Disabled states should still be visually recognizable as controls
- Error states need **icon + text** in addition to color

### Screen Reader Announcements
- State changes must be announced to assistive technology
- Error messages associated with a group should use `aria-describedby` or `aria-live`

---

## 10. Spacing & Layout Guidelines

### Within a Group
- Minimum vertical spacing between options: **8px** (tight), **12-16px** (comfortable/recommended)
- Each option row height should meet touch target minimums
- Align all controls (checkboxes/radios) on the same vertical axis

### Between Groups
- Separate groups of selection controls with **24-32px** spacing or visual dividers
- Each group should have its own group label

### Form Integration
- Selection control groups follow the same **single-column layout** principles as text fields
- Place the group label above the options
- If selection controls appear alongside text fields in a form, maintain consistent vertical rhythm

---

## 11. Implementation Checklist

When generating any UI with selection controls, verify:

- [ ] Correct control type chosen (checkbox vs radio vs toggle) for the use case
- [ ] Checkbox for multi-select, radio for single exclusive, toggle for immediate on/off
- [ ] Toggle effects take place immediately (no save button needed)
- [ ] All states implemented: enabled, disabled, hover, focused, pressed, error
- [ ] Indeterminate state handled for parent-child checkbox hierarchies
- [ ] No toggle switches used in parent-child hierarchies
- [ ] Both control AND label are within the clickable/tappable area
- [ ] Touch targets meet minimum 44px / 48dp
- [ ] Options listed vertically (not horizontally)
- [ ] Labels are to the right of controls (LTR), short and clear
- [ ] Group labels present for related option sets
- [ ] Color is NOT the only state indicator (shape, position, icons used too)
- [ ] Keyboard navigation works (Tab, Space, Arrow keys)
- [ ] Proper semantic HTML or ARIA roles applied
- [ ] Every control has an associated label for screen readers
- [ ] Contrast ratios meet accessibility minimums (3:1 boundaries, 4.5:1 text)
- [ ] Consistent styling across all selection controls in the UI

---

## Quick Reference: Common Mistakes to AVOID

| ❌ Don't | ✅ Do Instead |
|----------|--------------|
| Use checkbox for single exclusive choice | Use radio buttons |
| Use radio when user can pick zero or many | Use checkboxes |
| Use toggle that requires a "Save" button | Use checkbox + submit |
| Use toggle hierarchies (parent/child) | Use checkboxes with indeterminate state |
| Make only the tiny control clickable | Make the entire label + control row clickable |
| List options horizontally | List options vertically |
| Use dropdown for 2-3 visible options | Use radio buttons |
| Rely on color alone for state changes | Use color + shape + position |
| Skip hover/focus/disabled states | Implement ALL interaction states |
| Use vague labels ("Option 1") | Use clear, descriptive labels ("Enable notifications") |
| Truncate or wrap labels awkwardly | Keep labels concise; adjust layout if needed |
| Mix styled controls inconsistently | Maintain uniform styling across the entire UI |
| Skip group labels for related options | Always include a descriptive group heading |
| Forget keyboard/screen reader support | Test Tab, Space, Arrow keys; add ARIA roles |