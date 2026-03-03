---
name: depth-tokens
description: >
  Dark surface depth system for Mode 2 (Black) and Mode 4 (Dark Hue) surfaces.
  MANDATORY when generating ANY UI element rendered on Mode 2 or Mode 4 surfaces — including buttons,
  inputs, dropdowns, checkboxes, radios, toggles, tabs, panels, badges, cards, lists, sliders, progress
  bars, search fields, toolbars, navigation, modals, or any component on a dark background. Also trigger
  when the user mentions "dark mode", "dark theme", "dark surface", "black surface", "Mode 2", "Mode 4",
  "dark hue", "dark panel", or when generating any component that includes all 5 surface modes (because
  Modes 2 and 4 are always included). This skill defines the Photoshop/Figma-inspired flat-layered
  depth treatment for dark surfaces: no gradients, no bevels, no box-shadows, no gloss. Depth is created
  ONLY through layered flat surfaces at different brightness steps and razor-thin 1px borders. This skill
  overrides the base perception-ui-system rules for Mode 2 and Mode 4 ONLY. Modes 1, 3, and 5 are
  NOT affected — they remain flat per the base rules.
---

# Dark Surface Depth System

Inspired by professional creative tool interfaces — Adobe Photoshop, Figma, Blender, VS Code, and
similar dark-themed application UI. These interfaces achieve visual depth and material quality through
**surface layering** and **thin borders only**, never through gradients, drop shadows, or decorative effects.

---

## 1. When This Skill Applies

| Mode | Surface | Use This Skill? |
|------|---------|-----------------|
| Mode 1 — White | `#FFFFFF` | ❌ No — use base perception-ui-system |
| Mode 2 — Black | `#0A0A0A` | ✅ YES — always |
| Mode 3 — Light Hue (step 100) | step 100 | ❌ No — use base perception-ui-system |
| Mode 4 — Dark Hue (step 800) | step 800 | ✅ YES — always |
| Mode 5 — Mid Hue (step 500) | step 500 | ❌ No — use base perception-ui-system |

> **If the user asks for "all 5 modes", read this skill for the M2 and M4 variants.**

---

## 2. Core Philosophy — Three Rules

**Rule 1: Every surface is a flat solid color.** No `linear-gradient()`. No `radial-gradient()`.
No `background-image`. Backgrounds are always one single palette hex value.

**Rule 2: Depth = brightness stacking.** Surfaces closer to the user are one palette step brighter.
Inset surfaces (inputs, pressed states) are one palette step darker. That is the only depth cue.

**Rule 3: Borders are 1px, always.** Never 2px. Never 0 on interactive elements. Every interactive
boundary has a thin border. The border is the primary way users perceive element edges.

---

## 3. Surface Layer System

Depth is created by stacking 4 surface brightness levels. Each is exactly **one palette step** apart.

### Mode 2 — Black Surface

| Layer | Role | Palette Value | When to Use |
|-------|------|---------------|-------------|
| **Deep** | Deepest background | `Black` (#0A0A0A) | Page body, viewport, app background |
| **Panel** | Panel surface | `neutral.800` | Side panels, cards, sections, dialogs, toolbars |
| **Raised** | Raised element | `neutral.700` | Active tabs, hovered rows, pressed toolbar buttons |
| **Input** | Inset field | `neutral.900` | Text inputs, dropdowns, search fields, textarea |

### Mode 4 — Dark Hue Surface

| Layer | Role | Palette Value | When to Use |
|-------|------|---------------|-------------|
| **Deep** | Deepest background | `{hue}.900` | Page body, viewport |
| **Panel** | Panel surface | `{hue}.800` | Side panels, cards, sections, dialogs, toolbars |
| **Raised** | Raised element | `{hue}.700` | Active tabs, hovered rows, pressed toolbar buttons |
| **Input** | Inset field | `{hue}.900` | Text inputs, dropdowns, search fields, textarea |

### How the Layers Stack

```
User's eye (closest)
    ↕
  Raised  (step 700)  — brightest, closest to user
  Panel   (step 800)  — standard working surface
  Deep    (step 900 or Black) — page background, furthest away
  Input   (step 900)  — pushed INTO the surface (darker than panel)
```

> **Key rule:** Raised and Input are on opposite sides of Panel.
> Raised = 1 step lighter than Panel. Input = 1 step darker than Panel.

---

## 4. Border System

All borders are `1px solid`. Three tiers of visibility, from strongest to subtlest.

### Mode 2 — Black Surface

| Tier | Palette Value | Usage |
|------|---------------|-------|
| **Standard** | `neutral.600` | Interactive element borders: buttons, inputs, dropdowns, checkboxes, radios |
| **Subtle** | `neutral.700` | Panel edges, section dividers, separators, non-interactive boundaries |
| **Focus** | `{hue}.400` | Focus ring on active element. Replaces standard border on focus/active. |

### Mode 4 — Dark Hue Surface

| Tier | Palette Value | Usage |
|------|---------------|-------|
| **Standard** | `{hue}.600` | Interactive element borders |
| **Subtle** | `{hue}.700` | Panel edges, dividers, separators |
| **Focus** | `{hue}.300` | Focus ring on active element |

### Border Rules

- Interactive elements (buttons, inputs, dropdowns, checkboxes, radios) always use **standard** border
- Panel boundaries, section dividers, separators use **subtle** border
- On `:focus` or when active, the border changes to **focus** color
- Never use `border-width` greater than 1px for structural borders
- Only two exceptions: **2px underline** on active tabs, and **2px left border** on accent cards
- Focus rings may also be implemented as `outline: 1.5px solid {focus-color}` or `box-shadow: 0 0 0 1.5px {focus-color}` — this is the **only permitted box-shadow** in the entire system

---

## 5. Text Colors on Dark Surfaces

### Mode 2 — Black Surface

| Role | Palette Value | Usage | WCAG vs Panel (neutral.800) |
|------|---------------|-------|-----------------------------|
| **Primary** | `neutral.100` | Headings, body text, input values, button labels | ~10.5:1 ✅ AA |
| **Secondary** | `neutral.300` | Labels, descriptions, captions, helper text | ~4.9:1 ✅ AA |
| **Muted** | `neutral.500` | Placeholder text, disabled text, decorative icons | ~2.6:1 — non-text UI only |
| **Accent** | `{hue}.400` | Links, active items, selected labels, accent text | ~4.9:1 ✅ AA |

### Mode 4 — Dark Hue Surface

| Role | Palette Value | Usage | WCAG vs Panel ({hue}.800) |
|------|---------------|-------|-----------------------------|
| **Primary** | `neutral.100` | Headings, body text, input values | varies by hue, ✅ AA |
| **Secondary** | `neutral.300` | Labels, descriptions, captions | varies by hue, ✅ AA |
| **Muted** | `{hue}.500` | Placeholder text, disabled text, icons | non-text UI only |
| **Accent** | `{hue}.300` | Links, active items, accent text | ~6.0:1 ✅ AA |

### Important: Muted Text

Muted text (`neutral.500` or `{hue}.500`) does NOT pass WCAG AA for small text. It may only be used for:
- Placeholder text (has relaxed WCAG requirements per 1.4.3 exception)
- Disabled states where interaction is not possible
- Decorative icons that are not the only means of conveying information
- Large text (≥18px bold or ≥24px regular) where 3.0:1 threshold applies

---

## 6. Accent Colors on Dark Surfaces

### Mode 2

| Token | Palette Value | Usage |
|-------|---------------|-------|
| **Accent** | `{hue}.400` | Filled checkboxes, toggle on-state, progress bar fill, active tab underline, accent text |
| **Accent background** | `{hue}.800` | Selected list row highlight, active card background (very subtle) |

### Mode 4

| Token | Palette Value | Usage |
|-------|---------------|-------|
| **Accent** | `{hue}.300` | Same roles as Mode 2 accent |
| **Accent background** | `{hue}.700` | Same roles as Mode 2 accent background |

---

## 7. Component Patterns

Every component below uses ONLY the surface layers, border tiers, and text colors defined above.

### Buttons

Two variants on dark surfaces: **outlined** (default secondary) and **primary** (accent-filled).

**Outlined Button (default):**

| Property | Value |
|----------|-------|
| Background | `transparent` |
| Border | 1px solid **standard** border |
| Text color | **primary** text |
| Hover | background changes to **raised** surface |
| Active/pressed | background changes to **input** surface |
| Disabled | opacity 0.4, cursor default |
| Font-weight | **400** (normal — not bold) |
| Text-transform | **none** (sentence case — not uppercase) |
| Border-radius | **3px** (maximum on dark surfaces) |

**Primary Button (accent fill):**

| Property | Value |
|----------|-------|
| Background | **accent** color |
| Border | 1px solid **accent** color |
| Text color | `#FFFFFF` (White) |
| Hover | same, cursor pointer |
| Disabled | opacity 0.4 |

> **No pill buttons on dark surfaces.** All buttons use border-radius 3px maximum.

### Text Inputs

| Property | Value |
|----------|-------|
| Background | **input** surface (darker than panel) |
| Border | 1px solid **subtle** border |
| Text color | **primary** text |
| Placeholder | **muted** text, font-style italic |
| Focus | border changes to **focus** color |
| Border-radius | **2px** |
| Padding | 4px 8px (default), 3px 6px (small) |
| Label | Sits above the input, **secondary** text, font-size 10px |

> **Never use floating labels.** Never use underline-style inputs. Always a bordered box.

### Dropdowns / Select

| Property | Value |
|----------|-------|
| Background | **input** surface |
| Border | 1px solid **subtle** border |
| Text color | **primary** text |
| Hover | border changes to **standard** border |
| Chevron icon | 8×8px SVG, stroke **muted** text color |
| Border-radius | **2px** |

### Checkboxes

**Unchecked:**

| Property | Value |
|----------|-------|
| Background | **input** surface |
| Border | 1px solid **standard** border |
| Size | 14×14px |
| Border-radius | 2px |

**Checked:**

| Property | Value |
|----------|-------|
| Background | **accent** color |
| Border | 1px solid **accent** color |
| Check icon | White (#FFFFFF) SVG checkmark, 9×9px, stroke-width 3.5 |

- Label sits to the right, **primary** text, font-size 12px, gap 6px

### Radio Buttons

**Unselected:**

| Property | Value |
|----------|-------|
| Background | **input** surface |
| Border | 1px solid **standard** border |
| Size | 14×14px |
| Shape | Circle (border-radius 50%) |

**Selected:**

| Property | Value |
|----------|-------|
| Background | **input** surface |
| Border | 1px solid **accent** color |
| Inner dot | 6×6px circle, **accent** color |

### Toggle Switches

**Off:**

| Property | Value |
|----------|-------|
| Track background | **input** surface |
| Track border | 1px solid **standard** border |
| Track size | 32px wide, 16px tall, border-radius 8px |
| Thumb | 12×12px circle, `neutral.200` |

**On:**

| Property | Value |
|----------|-------|
| Track background | **accent** color |
| Track border | 1px solid **accent** color |
| Thumb | Same, positioned right |

### Tabs

| Element | Value |
|---------|-------|
| Container | border-bottom: 1px solid **subtle** border |
| Inactive tab | background transparent, **muted** text, font-weight 400 |
| Active tab | **primary** text, font-weight 600, border-bottom 2px solid **primary** text |
| No background change on active tab — underline only |
| Padding | 6px 14px per tab |

### Panels / Sections

**Panel:**

| Property | Value |
|----------|-------|
| Background | **panel** surface |
| Border | 1px solid **subtle** border |
| Border-radius | 3px |

**Collapsible Section (inside a panel):**

| Property | Value |
|----------|-------|
| Header | padding 7px 10px, cursor pointer |
| Chevron | 8×8px SVG, **muted** text, rotates 90° when open |
| Title | **primary** text, font-size 12px, font-weight 600 |
| Separator | border-bottom 1px solid **subtle** border |
| Content area | padding 4px 10px 10px |

### List Rows / Tree Items

| State | Background | Text Color |
|-------|-----------|------------|
| Default | transparent | **primary** text |
| Hover | **raised** surface | **primary** text |
| Selected | **accent background** | **accent** text |

- Icon left, 12×12px, fill **muted** text
- Border-radius 2px on hover/selected highlight
- Padding 4px 10px

### Badges

| Property | Value |
|----------|-------|
| Background | `{hue}.900` |
| Border | 1px solid `{hue}.700` |
| Text color | `{hue}.300` |
| Border-radius | **2px** (square corners — NOT pill) |
| Padding | 2px 7px |
| Font-size | 10px |
| Font-weight | 500 |
| Status dot | 4×4px circle, `{hue}.400`, left of text |

> **Never use pill-shaped badges on dark surfaces.** Always border-radius 2px.

### Sliders

| Element | Value |
|---------|-------|
| Track | height 2px, background **subtle** border color, border-radius 1px |
| Fill | background **accent** color |
| Thumb | 10×10px circle, `neutral.200`, border 1px solid **standard** border |
| Label | left-aligned, **secondary** text, font-size 10px |
| Value | right-aligned, **secondary** text, font-size 10px |

### Progress Bars

| Element | Value |
|---------|-------|
| Track | height 3px, background **input** surface, border 1px solid **subtle** border, border-radius 1.5px |
| Fill | background **accent** color |
| Label | above, **secondary** text, font-size 10px |
| Percentage | right of label, **muted** text, font-size 10px |

### Search Input

Same as Text Input, with:
- Search icon (11×11px, stroke **muted** text) on the left inside the field
- Placeholder text in italic

### Toolbar Icon Buttons

| State | Background | Icon Color |
|-------|-----------|------------|
| Default | transparent, no border | **muted** text |
| Hover | **raised** surface | **muted** text |
| Active | **raised** surface | **primary** text |

- Size: 26×26px, border-radius 2px

### Cards (KPI / Metric)

| Property | Value |
|----------|-------|
| Background | **panel** surface (or **raised** surface if nested inside a panel) |
| Border | 1px solid **subtle** border |
| Accent | border-left: 2px solid `{semantic-hue}.400` |
| Border-radius | 3px |
| Title | **secondary** text, 10px, uppercase, letter-spacing 0.06em |
| Value | **primary** text, 22px, font-weight 700 |
| Change indicator | `{semantic-hue}.400`, 11px, font-weight 600 |

---

## 8. Typography on Dark Surfaces

| Element | Font Size | Weight | Letter-Spacing | Text Transform |
|---------|-----------|--------|----------------|----------------|
| Panel title / section header | 12px | 600 | 0 | none |
| Body text | 12px | 400 | 0.01em | none |
| Button label | 12px default, 11px small | **400** | 0.01em | **none** |
| Input value | 12px default, 11px small | 400 | 0 | none |
| Label (above input) | 10px | 400 | 0.02em | none |
| Badge text | 10px | 500 | 0.03em | none |
| Section subheader | 10px | 600 | 0.06em | uppercase |
| Meta text / timestamps | 9–10px | 400–600 | 0.04em | uppercase |

Font stack: `'Inter', 'Segoe UI', system-ui, sans-serif`

> **Buttons are NOT bold and NOT uppercase on dark surfaces.** This differs from Modes 1, 3, 5.

---

## 9. Forbidden on Mode 2 and Mode 4

| ❌ Forbidden | Why |
|-------------|-----|
| `linear-gradient()` on backgrounds | Flat surfaces only — depth comes from layering, not gradients |
| `radial-gradient()` | Same reason |
| `box-shadow` for depth | No drop shadows, no inner shadows, no elevation |
| `text-shadow` | Clean text rendering |
| `opacity` on colors | Use a concrete palette step instead |
| `filter: drop-shadow()` | No shadows |
| `backdrop-filter` | No blur effects |
| `border-width` > 1px | Exception: 2px tab underline, 2px card accent border-left |
| `border-radius` > 3px on controls | Exception: circles for toggles, radios, slider thumbs |
| Bold font-weight (600+) on buttons | Use weight 400 (normal) |
| Uppercase text-transform on buttons | Use sentence case |
| Pill-shaped badges (border-radius > 3px) | Use border-radius 2px |
| Floating labels on inputs | Use label above the field |
| Underline-style inputs | Use bordered box style |

---

## 10. Permitted on Mode 2 and Mode 4

| ✅ Permitted | Notes |
|-------------|-------|
| Flat solid background colors from palette | One hex value, no mixing |
| 1px solid borders from palette | Standard, subtle, or focus tier |
| `box-shadow: 0 0 0 1.5px {focus-color}` | ONLY for focus rings — the only permitted box-shadow |
| `border-bottom: 2px solid` | ONLY for active tab underlines |
| `border-left: 2px solid` | ONLY for card semantic accent |
| `transition` on state changes | 0.1s ease recommended |
| `cursor: pointer` on interactive elements | Standard behavior |
| SVG icons with fill or stroke | Must use the text/accent color tokens defined above |
| `outline` for focus states | Alternative to box-shadow focus ring |

---

## 11. Differences from Modes 1, 3, 5

This is important — dark surfaces have a distinctly different visual style.

| Property | Modes 1, 3, 5 (Light/Mid) | Modes 2, 4 (Dark) |
|----------|---------------------------|-------------------|
| Background style | Single flat surface | 4-layer depth system (deep, panel, raised, input) |
| Borders | Optional, accent-colored | Mandatory, thin, structural |
| Border-radius | Up to 10px (per size scale) | Capped at 3px |
| Button font-weight | 600 (semibold) | 400 (normal) |
| Button text-transform | May be uppercase | Always sentence case |
| Badge shape | May be pill (high radius) | Always square (2px radius) |
| Shadows | Permitted for elevation | Completely forbidden |
| Gradients | Permitted for decoration | Completely forbidden |
| Input style | Various (outlined, filled, underline) | Always dark inset box with border |
| Focus indication | Accent color ring | Accent color border replacement |

---

## 12. How to Use This Skill Alongside Other Skills

This skill does NOT replace component skills (button-design, selection-controls-design, etc.).
Those skills define **what** a component is — anatomy, variants, states, hierarchy, UX patterns.
This skill defines **how it looks** on Mode 2 and Mode 4 surfaces specifically.

**Reading order:**
1. Read `skill-palette.md` — get hex values
2. Read `skill-surface-mode.md` — get the 5 mode definitions
3. Read `skill-depth-tokens.md` (this file) — get M2/M4 surface treatment
4. Read the relevant component skill (e.g., `skill-button-design.md`) — get component patterns

**Example — "Create a checkbox":**
- `skill-selection-controls-design.md` tells you: checkbox has 3 states (unchecked, checked, indeterminate), needs a label, 14×14px, etc.
- `skill-depth-tokens.md` (this file) tells you: on M2/M4, unchecked checkbox uses **input** surface background with 1px **standard** border, checked uses **accent** fill

Both are needed. Neither replaces the other.