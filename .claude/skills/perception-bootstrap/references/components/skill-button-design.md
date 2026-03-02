---
name: button-design
description: >
  Design guide for buttons: primary, secondary, tertiary, icon buttons, FABs, and destructive actions.
  Use this skill whenever the user asks to create, design, or build any UI that includes buttons — including
  CTAs, form submissions, dialog actions, navigation actions, toolbars, confirmation modals, card actions,
  floating action buttons, icon buttons, toggle buttons, or any interactive element that triggers an action.
  Also trigger when the user mentions "button", "CTA", "call to action", "submit", "action button", "FAB",
  "button hierarchy", "button states", "primary action", "secondary action", or asks about button styling,
  placement, or emphasis. This skill ensures all generated button UI follows proven UX best practices from the
  Taras Bakusevych design guide (UX Collective). Apply this even if the user doesn't explicitly ask for
  "good UX" — always default to these patterns. Covers: button types, anatomy, states, hierarchy/emphasis,
  placement, sizing, labels, icons, accessibility, and destructive actions.
---

# Button Design Guide

Based on **"Button Design — UI component series"** by Taras Bakusevych (UX Collective).

Reference: https://uxdesign.cc/button-design-user-interface-components-series-85243b6736c7

---

## 1. Button Types

### Contained Button (Filled)
- **Highest emphasis** — solid background fill with brand/primary color
- Use for the **primary action** on any screen, form, or dialog
- Has the most visual weight: background color + optional elevation/shadow
- Only **one contained/primary button** per view or logical section

### Outlined Button (Ghost)
- **Medium emphasis** — transparent background with a visible border/stroke
- Use for **secondary actions** placed alongside a primary button
- Examples: "Cancel", "Back", "Learn More" next to a "Submit" or "Save"
- Less visual weight than contained, more than text buttons

### Text Button (Flat)
- **Lowest emphasis** — no background, no border, only colored label text
- Use for **tertiary or low-priority actions**: "Skip", "Dismiss", "Got it", "Learn more"
- Often used inside cards, dialogs, or inline with content
- Must still be distinguishable from plain text (via color, padding, hover effect)

### Floating Action Button (FAB)
- Circular button representing the **single most important action** on a screen
- Usually positioned at the bottom-right (mobile) with elevation/shadow
- **Only ONE FAB per screen** — it must represent the primary action
- Can contain an icon, or icon + text label (extended FAB)
- Do NOT use if no single action clearly dominates the screen

### Icon Button
- Contains **only an icon** (no text label)
- Used for compact, well-understood actions: close, search, share, delete, menu, favorite
- Must use universally recognized icons — if the action isn't obvious from the icon alone, add a text label
- Always include an **accessible label** (`aria-label`) for screen readers
- Must include a **tooltip** on hover for sighted users

### Toggle Button
- Used for **two or more related actions** where one is active at a time
- Examples: bold/italic/underline, grid/list view, dark/light mode
- Active state must be **clearly visually distinct** from inactive
- Behaves like a segmented control for mutually exclusive choices

---

## 2. Button Anatomy

Every button consists of these elements:

| # | Element | Required | Description |
|---|---------|----------|-------------|
| 1 | **Container** | ✅ Yes | The interactive hit area. Has background (filled), border (outlined), or neither (text). |
| 2 | **Label text** | ✅ Yes* | The action text. Must be short, specific, and on a single line. (*Icon buttons are the exception.) |
| 3 | **Leading icon** (optional) | ⚠️ | Icon before the label to reinforce meaning (e.g., download icon + "Download"). |
| 4 | **Trailing icon** (optional) | ⚠️ | Icon after the label (e.g., arrow for "Next →", dropdown chevron). |
| 5 | **Background** | Varies | Solid color for contained buttons. Transparent for outlined/text. Brand color for primary. |
| 6 | **Border** | Varies | Visible stroke for outlined buttons. None for contained/text. |
| 7 | **Border radius** | ✅ Yes | Corner curvature. Be consistent — same radius across all buttons in the system. |
| 8 | **Drop shadow / Elevation** | ⚠️ | Creates depth for contained buttons and FABs. Increases on hover/press. |
| 9 | **Padding** | ✅ Yes | Internal spacing around label/icon. Ensures adequate touch target and visual breathing room. |

### Anatomy Rules
- Labels and icons must be **vertically centered** within the container
- Horizontal padding should be generous enough to prevent the button from feeling cramped
- Icon size should be proportional to label text size (typically 18-24px icons with 14-16px text)
- Maintain **consistent border radius** across all buttons (don't mix sharp and rounded in the same UI)

---

## 3. Button States

Every button MUST support and visually differentiate ALL of these states:

| State | Description | Visual Treatment |
|-------|-------------|-----------------|
| **Normal (Default)** | Component is interactive and enabled, awaiting user action. | Base appearance — full color, visible, ready. |
| **Hover** | User has placed cursor above the button. | Slight darkening/lightening of background, subtle shadow increase, or overlay. |
| **Focus** | User has highlighted the button via keyboard or assistive technology. | Visible **focus ring/outline** around the button. Must be distinct from hover. |
| **Active (Pressed)** | User has clicked/tapped the button. | Deeper color change, ripple effect, slight scale reduction, or shadow decrease to simulate "pressing in". |
| **Loading (Progress)** | Action is processing and not yet complete. | Replace label with a **spinner/loader** or show spinner alongside label. Button must be **non-interactive** during loading. Avoid layout shifts. |
| **Disabled** | Button cannot be interacted with (prerequisite not met). | Reduced opacity (~40-50%). Cursor: not-allowed. No hover/click feedback. |

### State Rules
- All states must be **clearly differentiated** from one another
- States must be **consistent** across all buttons in the application
- Never remove or skip states — even "minor" ones like hover and focus are critical
- Loading state must **prevent double-submission** (disable the button while processing)
- Disabled buttons should still be **visible** to communicate that an action exists but isn't available yet
- Consider showing a **tooltip on disabled buttons** explaining why the action is unavailable

---

## 4. Button Hierarchy & Emphasis

Buttons use visual weight to communicate importance. Every screen should have a clear hierarchy:

### Three Levels of Emphasis

| Level | Button Type | Visual Weight | Usage |
|-------|------------|---------------|-------|
| **High emphasis** | Contained (filled) | Highest — solid background, brand color, optional shadow | Primary/most important action. ONE per view. |
| **Medium emphasis** | Outlined (ghost) | Medium — border + text, no fill | Secondary actions alongside primary. |
| **Low emphasis** | Text (flat) | Lowest — text only, no border/fill | Tertiary, dismissive, or navigational actions. |

### Hierarchy Rules
- **Maximum ONE high-emphasis (primary) button** per logical screen section
- If two buttons are side-by-side, use contained for primary + outlined for secondary
- If three buttons exist, use contained + outlined + text (high → medium → low)
- Never use two contained buttons side-by-side — it creates decision paralysis
- Emphasis through **color**: bright/brand color for primary, muted/neutral for secondary, text-color for tertiary
- Keep hierarchy **consistent** throughout the entire product — same button type = same emphasis level everywhere

### Destructive Actions
- Actions like "Delete", "Remove", "Disconnect" should use a **red/danger color**
- Destructive primary actions: red contained button
- Destructive secondary actions: red outlined or red text button
- Always pair destructive buttons with a **confirmation step** (dialog, undo) for irreversible actions
- Place destructive buttons **away from** (or visually separated from) constructive actions

---

## 5. Button Placement

### General Principles
- Place buttons **in connection to the items they control** — close to the related content
- Maintain consistent placement patterns across all screens

### Forms
- Primary action (Submit/Save) should be **left-aligned** with form fields (for LTR languages)
- Secondary action (Cancel/Reset) placed **to the right of** primary, with visual de-emphasis
- Or secondary action as a text link below/beside the primary button

### Dialogs & Modals
- Action buttons placed at the **bottom-right** of the dialog
- Primary action (Confirm) on the **right**, secondary (Cancel) on the **left**
- For destructive dialogs: destructive button on the right, safe escape on the left
- Dialogs should have at most **2-3 action buttons**

### Side-by-Side Buttons
- Always use **contained + outlined** (or contained + text) — never two contained buttons together
- Maintain consistent spacing between buttons (8-16px gap)
- Buttons should be the **same height** when placed together

### Mobile Considerations
- Full-width buttons work well on mobile for primary actions
- FABs at bottom-right for the single most important action
- Bottom-anchored/sticky buttons for form submission on long scrollable forms
- Ensure buttons are reachable by thumb (bottom half of screen preferred)

---

## 6. Button Sizing & Touch Targets

### Minimum Sizes
- **Minimum touch target**: 48×48px (Material Design) / 44×44px (iOS HIG)
- This applies to the **total interactive area**, not just the visible button
- Icon buttons especially need generous padding to meet minimum tap targets

### Sizing Tiers
- **Small**: Use sparingly — for dense UIs, tables, toolbars. Still must meet minimum touch targets on mobile.
- **Medium (Default)**: Standard size for most use cases. Height ~36-44px, horizontal padding 16-24px.
- **Large**: For prominent CTAs, mobile primary actions, or landing page hero buttons. Height ~48-56px.

### Sizing Rules
- All buttons in a group should be the **same height**
- Width adapts to content (label + padding) — avoid fixed widths unless full-width mobile layout
- Don't make buttons too narrow — minimum width should prevent label cramping
- Maintain consistent sizing across the application for the same button tier

---

## 7. Button Labels

### Content Rules
- Labels must be **short and meaningful** — ideally 1-3 words
- Labels must stay on a **single line** — never wrap button text
- Use **specific action verbs**: "Save Changes", "Create Account", "Download Report" — NOT generic "Submit", "OK", "Click Here"
- Use the correct verb for the context: "Remove" (from a list) vs. "Delete" (permanent destruction) vs. "Cancel" (abort operation)

### Capitalization
- **Sentence case** (only first word capitalized): "Save changes" — better readability, recommended by usability research and helpful for users with dyslexia
- **Title Case** ("Save Changes"): acceptable in some design systems (e.g., iOS)
- **UPPERCASE** ("SAVE CHANGES"): used in Material Design — more distinctive but harder to read
- Be **consistent** — pick one style for the entire product

### Labels with Icons
- When using a leading or trailing icon, the label still takes priority
- Icon should **reinforce**, not replace, the label meaning
- Exception: icon-only buttons for universally understood actions (close ✕, search 🔍, menu ☰)

---

## 8. Button with Icons

### Leading Icons
- Placed **before** (left of, in LTR) the label text
- Reinforce the action: 🗑️ Delete, ⬇️ Download, ➕ Add New
- Don't add icons just for decoration — they must add meaning

### Trailing Icons
- Placed **after** (right of, in LTR) the label text
- Indicate direction or expansion: → Next, ▾ Dropdown, ↗ External Link
- Less common — use sparingly

### Icon-Only Buttons
- Only for **universally recognized** actions: close, search, menu, share, favorite, settings
- MUST include `aria-label` for accessibility
- MUST include **tooltip on hover** to confirm the action for sighted users
- Ensure the icon is clear at the button's rendered size (don't use overly detailed icons)

### Icon Sizing
- Icons should be proportional to the button size: typically 18-24px
- Maintain consistent icon size across all buttons in the same tier
- Adequate spacing between icon and label text (8px typical)

---

## 9. Floating Action Button (FAB) Rules

The FAB is a special button type with strict usage rules:

- **Only ONE FAB per screen** — it represents THE primary action
- Positioned at **bottom-right** (mobile) or bottom-right area of the main content
- Circular shape with **elevation/shadow** to float above content
- Contains a **single icon** (standard FAB) or **icon + label** (extended FAB)
- Must remain **visible and accessible** — don't let content overlap or hide it
- Do NOT use a FAB if no single action is clearly more important than others
- Do NOT use FABs for minor, destructive, or ambiguous actions
- FAB should **not scroll away** — it stays fixed in position

### Extended FAB
- Adds a text label alongside the icon for clarity
- Better accessibility and discoverability than icon-only FAB
- Use when the action needs textual clarity (e.g., "✏️ Compose", "➕ New Item")

---

## 10. Accessibility Requirements

### Keyboard Navigation
- All buttons must be **focusable** via Tab key
- Activation via **Enter** or **Space** key
- Focus state must have a **clearly visible focus ring** distinct from hover
- Focus order must follow logical reading/tab order

### Screen Readers
- Every button must have an **accessible name**:
  - Text buttons: the label provides the name automatically
  - Icon-only buttons: MUST use `aria-label` or `aria-labelledby`
- Loading state should announce "Loading" or equivalent via `aria-live`
- Disabled buttons should communicate their disabled state via `aria-disabled`

### Visual Accessibility
- **Color must not be the only differentiator** between button types/states
- Minimum **4.5:1 contrast ratio** for button label text against button background
- Minimum **3:1 contrast ratio** for button container against page background
- Disabled buttons must still be recognizable as buttons (don't reduce opacity below ~30%)
- Destructive buttons need more than just red color — use icon + label for reinforcement

### Touch Accessibility
- Minimum 48×48px touch target
- Adequate spacing between adjacent buttons (minimum 8px, 16px recommended)
- No overlapping hit areas

---

## 11. Common Button Patterns

### Confirmation Dialogs
```
┌─────────────────────────────────┐
│  Are you sure you want to       │
│  delete this item?              │
│                                 │
│        [Cancel]  [Delete]       │
│        outlined   contained/red │
└─────────────────────────────────┘
```
- Safe action (Cancel) = outlined/text, on the left
- Destructive action (Delete) = contained red, on the right

### Form Actions
```
┌─────────────────────────────────┐
│  [form fields above]            │
│                                 │
│  [Save Changes]  [Cancel]       │
│   contained       text/link     │
└─────────────────────────────────┘
```
- Primary (Save) = contained, left-aligned with fields
- Secondary (Cancel) = text button or link, to the right

### Card Actions
```
┌─────────────────────────────────┐
│  Card content...                │
│                                 │
│  [Learn More]  [Share]          │
│   text button   text button     │
└─────────────────────────────────┘
```
- Card actions are typically text buttons (low emphasis)
- Keep to 1-2 actions per card

### Empty State / CTA
```
┌─────────────────────────────────┐
│  No items yet.                  │
│  Get started by creating one.   │
│                                 │
│       [Create First Item]       │
│        contained / primary      │
└─────────────────────────────────┘
```
- Single prominent CTA, centered

---

## 12. Implementation Checklist

When generating any UI with buttons, verify:

- [ ] Correct button type chosen for emphasis level (contained / outlined / text)
- [ ] Maximum ONE contained (primary) button per logical section
- [ ] Side-by-side buttons use different emphasis levels (never two contained together)
- [ ] All 6 states implemented: normal, hover, focus, active, loading, disabled
- [ ] Loading state prevents double-submission and shows spinner
- [ ] Button labels are short, specific, action-verb-based, and single-line
- [ ] Capitalization is consistent across all buttons
- [ ] Touch targets meet minimum 48×48px / 44×44px
- [ ] Adequate spacing between adjacent buttons (8-16px)
- [ ] Buttons are consistent in style, size, and border radius across the product
- [ ] Destructive actions use red/danger color + confirmation step
- [ ] Icon-only buttons have `aria-label` and tooltip
- [ ] FAB is used only for THE primary action, only one per screen
- [ ] Focus ring is visible and distinct for keyboard navigation
- [ ] Contrast ratios meet minimums (4.5:1 text, 3:1 container)
- [ ] Disabled buttons are visible but non-interactive, with clear visual treatment
- [ ] Button placement follows form/dialog/mobile conventions

---

## Quick Reference: Common Mistakes to AVOID

| ❌ Don't | ✅ Do Instead |
|----------|--------------|
| Use two contained/primary buttons side-by-side | Use contained + outlined (or text) for hierarchy |
| Use generic labels ("Submit", "OK", "Click Here") | Use specific verbs ("Save Changes", "Create Account") |
| Skip hover, focus, or loading states | Implement ALL 6 button states |
| Use a FAB for secondary or destructive actions | Reserve FAB for the single most important action |
| Use multiple FABs on one screen | Only ONE FAB per screen |
| Make icon buttons without accessible labels | Always add `aria-label` and tooltip |
| Use tiny buttons without adequate touch targets | Minimum 48×48px interactive area |
| Let loading buttons remain clickable | Disable button + show spinner during loading |
| Use color alone to differentiate buttons | Combine color + weight + border + position |
| Allow button labels to wrap to 2 lines | Keep labels on one line; shorten if needed |
| Mix capitalization styles (Title Case + UPPERCASE) | Pick one style, use it everywhere |
| Place destructive button next to primary with no visual separation | Separate or use confirmation dialog |
| Mix rounded and sharp border-radius buttons | Use consistent border-radius across all buttons |
| Use icon-only buttons for ambiguous actions | Add a text label if the icon isn't universally understood |