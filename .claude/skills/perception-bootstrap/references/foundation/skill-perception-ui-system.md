---
name: perception-ui-system
description: >
  MANDATORY design system skill for ALL UI work. Use this skill whenever the user asks to create, design, style, or modify ANY visual UI element — buttons, cards, inputs, modals, navbars, layouts, pages, dashboards, forms, tables, alerts, badges, tooltips, or any other component. Also trigger when the user mentions colors, themes, surface modes, dark mode, light mode, accessibility, contrast, WCAG, or references their "design system" or "color palette". This skill defines the ONLY permitted colors, the 5 required surface modes, 7 hue families, 6 size tiers, and strict WCAG AA compliance rules. NO UI element may be created without following this skill. If a user asks to "create a button" or "design a card" or "build a dashboard", you MUST read this skill first. Every color decision, every component variant, every surface mode MUST comply with this system. There are NO exceptions.
---

# Perception UI Design System

## CRITICAL RULES — READ FIRST

1. **ONLY palette colors allowed.** You may NEVER use any hex, RGB, HSL, or named color that is not explicitly listed in `references/palette.md`. No grays outside Neutral. No blues outside Blue. No arbitrary colors. EVER.
2. **ALL UI elements require 5 surface mode variants.** Every component MUST work on all 5 surface modes. No exceptions.
3. **ALL text and interactive elements MUST pass WCAG AA.** Text ≥ 4.5:1 (AA small). Large text (≥18px bold / ≥24px) ≥ 3.0:1. Non-text UI (borders, icons, dividers) ≥ 3.0:1 per WCAG 1.4.11.
4. **ALL UI elements require 7 hue variants.** Every component must have a version for each hue family.
5. **ALL UI elements require 6 size variants:** `xs`, `sm`, `md`, `lg`, `xl`, `xxl`.

Before writing ANY code, read `references/palette.md` for exact hex values and `references/surface-modes.md` for pairing rules.

---

## Color Palette Overview

7 hue families, each with 10 luminance steps (50–900). Luminance decreases monotonically from 50 (lightest) to 900 (darkest).

| Hue       | Purpose                                      |
|-----------|----------------------------------------------|
| Neutral   | Default text, backgrounds, borders, chrome    |
| Red       | Error, danger, destructive actions, alerts    |
| Green     | Success, positive, confirmation, growth       |
| Blue      | Primary, informational, links, focus          |
| Yellow    | Warning, caution, attention, highlights       |
| Magenta   | Accent, premium, creative, decorative         |
| Teal      | Secondary, complementary, data visualization  |

### Step Roles (same across all hues)

| Step | Role                  | Luminance Zone | Contrast vs White | Contrast vs Black |
|------|-----------------------|----------------|--------------------|--------------------|
| 50   | Lightest tint / BG    | Very light     | ~1.05:1            | ~19:1              |
| 100  | Light surface         | Light          | ~1.31:1            | ~15:1              |
| 200  | Subtle accent         | Light-mid      | ~1.75:1            | ~11:1              |
| 300  | Mid-light accent      | Mid-light      | ~2.62:1            | ~7.5:1             |
| 400  | Mid-bright transition | Mid            | ~4.0:1             | ~4.9:1             |
| 500  | Mid-dark (AA on white)| Mid-dark       | ~5.2:1             | ~3.8:1             |
| 600  | Strong dark           | Dark           | ~8.0:1             | ~2.5:1             |
| 700  | Deep dark             | Very dark      | ~12:1              | ~1.6:1             |
| 800  | Near-black surface    | Very dark      | ~16:1              | ~1.24:1            |
| 900  | Deepest / near-black  | Darkest        | ~20:1              | ~1.01:1            |

**Key boundary:** Step 500 is the lightest step that passes AA small text (≥4.5:1) on white. Steps 50–400 FAIL AA small text on white.

---

## The 5 Surface Modes

Every UI element MUST be rendered in all 5 modes. See `references/surface-modes.md` for exact pairing tables.

### Mode 1 — White Surface (`#FFFFFF`)
Default light mode. Content pages, forms, dashboards.
- Text: Use steps 800–900 or Black (`#0A0A0A`)
- Accent/Links/Icons: Step 500 (passes AA small ~5.2:1)
- Buttons: Step 500 fill + White text, OR outline with step 500
- Divider: Step 400 (~4.0:1, passes non-text UI ≥3.0)

### Mode 2 — Black Surface (`#0A0A0A`)
Dark mode. Night interfaces, dark themes.
- Text: White (`#FFFFFF`) or step 50
- Accent/Links/Icons: Step 400 (~4.9:1, passes AA small)
- Buttons: Step 50 fill + Black text, OR outline with step 400
- Divider: Step 500 (~3.8:1, passes non-text UI ≥3.0)

### Mode 3 — Light Hue Surface (Step 100)
Tinted light panels. Alerts, banners, cards, callouts.
- Text: Steps 800–900 or Black
- Accent/Links/Icons: Step 600 (~6.0:1)
- Buttons: Step 600 fill + White text
- Divider: Step 400 or 500 (~3.0:1)

### Mode 4 — Dark Hue Surface (Step 800)
Dark branded panels. Headers, hero sections, navigation.
- Text: White or step 50
- Accent/Links/Icons: Step 300 (~6.0:1)
- Buttons: Step 50 fill + Black text, OR outline with step 300
- Divider: Step 500 (~3.0:1)

### Mode 5 — Mid Hue Surface (Step 500)
Bold accent panels. CTAs, badges, hero banners. Use sparingly.
- Text: White (`#FFFFFF`) or step 50 (~5.2:1)
- Accent/Links/Icons: Step 50 or White
- Buttons: White/50 fill + Black text inside
- Divider: Black (~3.8:1)

---

## Component Generation Rules

When asked to create ANY component, you MUST produce:

### Variant Matrix
```
Component × 7 Hues × 5 Modes × 6 Sizes = 210 variants per component
```

### Size Scale

| Size | Font (body) | Padding (Y × X) | Border Radius | Icon Size | Min Height |
|------|-------------|------------------|---------------|-----------|------------|
| xs   | 11px        | 4px × 8px        | 4px           | 12px      | 24px       |
| sm   | 12px        | 6px × 12px       | 5px           | 14px      | 30px       |
| md   | 14px        | 8px × 16px       | 6px           | 16px      | 36px       |
| lg   | 16px        | 10px × 20px      | 7px           | 20px      | 44px       |
| xl   | 18px        | 12px × 24px      | 8px           | 24px      | 52px       |
| xxl  | 20px        | 14px × 28px      | 10px          | 28px      | 60px       |

### Required Output Structure

For every component, generate:

1. **Props/Parameters:**
   - `hue`: `"neutral" | "red" | "green" | "blue" | "yellow" | "magenta" | "teal"`
   - `mode`: `1 | 2 | 3 | 4 | 5` (surface mode)
   - `size`: `"xs" | "sm" | "md" | "lg" | "xl" | "xxl"`

2. **Color Resolution Logic (pseudocode):**
   ```
   Given hue, mode → resolve:
     surface_bg    = getSurfaceBg(hue, mode)
     primary_text  = getTextColor(hue, mode, "primary")
     secondary_text= getTextColor(hue, mode, "secondary")
     accent        = getAccentColor(hue, mode)
     btn_fill      = getBtnFillBg(hue, mode)
     btn_text      = getBtnFillText(hue, mode)
     outline_color = getOutlineColor(hue, mode)
     icon_color    = getIconColor(hue, mode)
     divider_color = getDividerColor(hue, mode)
     focus_ring    = accent (same as accent color)
   ```

3. **WCAG Verification:**
   Every foreground/background pair MUST be checked:
   ```
   assert contrast(primary_text, surface_bg) >= 4.5
   assert contrast(secondary_text, surface_bg) >= 4.5
   assert contrast(accent, surface_bg) >= 4.5
   assert contrast(btn_text, btn_fill) >= 4.5
   assert contrast(outline_color, surface_bg) >= 3.0
   assert contrast(icon_color, surface_bg) >= 3.0
   assert contrast(divider_color, surface_bg) >= 3.0
   ```

---

## WCAG Contrast Calculation

Use this exact formula for every color decision:

```javascript
function sRGBtoLinear(c) {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}
function luminance(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return 0.2126 * sRGBtoLinear(r) + 0.7152 * sRGBtoLinear(g) + 0.0722 * sRGBtoLinear(b);
}
function contrastRatio(fg, bg) {
  const L1 = luminance(fg), L2 = luminance(bg);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}
```

Thresholds:
- **AA small text** (< 18px bold / < 24px regular): ≥ 4.5:1
- **AA large text** (≥ 18px bold / ≥ 24px regular): ≥ 3.0:1
- **Non-text UI** (borders, icons, focus rings, dividers): ≥ 3.0:1

---

## Forbidden Actions

❌ NEVER use a color not in `references/palette.md`
❌ NEVER skip surface modes — all 5 are mandatory
❌ NEVER skip hue variants — all 7 are mandatory
❌ NEVER skip size variants — all 6 are mandatory
❌ NEVER pair foreground/background that fails WCAG AA
❌ NEVER use step 50–400 as text on White surface
❌ NEVER use step 600–900 as text on Black surface
❌ NEVER hardcode colors — always resolve from hue + mode + step
❌ NEVER use `opacity` to create unlisted colors
❌ NEVER use CSS `color-mix()`, `lighten()`, `darken()` or any color manipulation
❌ NEVER assume a component only needs one mode — it always needs 5

---

## Implementation Pattern

### React/JSX Pattern

```jsx
// Color system — import from your design tokens
const PALETTE = { /* see references/palette.md */ };
const W = "#FFFFFF", B = "#0A0A0A";

function resolveMode(hue, mode) {
  const P = PALETTE[hue];
  switch(mode) {
    case 1: return { bg: W,     text: P[900], secondary: B,     accent: P[500], btnBg: P[500], btnText: W,  outline: P[500], icon: P[500], divider: P[400] };
    case 2: return { bg: B,     text: W,      secondary: P[50], accent: P[400], btnBg: P[50],  btnText: B,  outline: P[400], icon: P[400], divider: P[500] };
    case 3: return { bg: P[100],text: P[900], secondary: B,     accent: P[600], btnBg: P[600], btnText: W,  outline: P[600], icon: P[600], divider: P[500] };
    case 4: return { bg: P[800],text: W,      secondary: P[50], accent: P[300], btnBg: P[50],  btnText: B,  outline: P[300], icon: P[300], divider: P[500] };
    case 5: return { bg: P[500],text: W,      secondary: P[50], accent: P[50],  btnBg: P[50],  btnText: B,  outline: P[50],  icon: P[50],  divider: B      };
  }
}

function resolveSize(size) {
  const sizes = {
    xs:  { fontSize: 11, py: 4,  px: 8,  radius: 4,  icon: 12, minH: 24 },
    sm:  { fontSize: 12, py: 6,  px: 12, radius: 5,  icon: 14, minH: 30 },
    md:  { fontSize: 14, py: 8,  px: 16, radius: 6,  icon: 16, minH: 36 },
    lg:  { fontSize: 16, py: 10, px: 20, radius: 7,  icon: 20, minH: 44 },
    xl:  { fontSize: 18, py: 12, px: 24, radius: 8,  icon: 24, minH: 52 },
    xxl: { fontSize: 20, py: 14, px: 28, radius: 10, icon: 28, minH: 60 },
  };
  return sizes[size];
}
```

### CSS Custom Properties Pattern

```css
/* Generated per hue × mode combination */
[data-hue="blue"][data-mode="1"] {
  --surface:     #FFFFFF;
  --text:        #000035;
  --text-secondary: #0A0A0A;
  --accent:      #5252ff;
  --btn-bg:      #5252ff;
  --btn-text:    #FFFFFF;
  --outline:     #5252ff;
  --icon:        #5252ff;
  --divider:     #6d6dff;
}
```

---

## Workflow When User Asks to Create a Component

1. Read `references/palette.md` — load exact hex values
2. Read `references/surface-modes.md` — load pairing rules
3. Build the component with props: `hue`, `mode`, `size`
4. Implement `resolveMode(hue, mode)` using the pairing table
5. Implement `resolveSize(size)` using the size scale
6. For EACH foreground/background pair, compute contrast ratio
7. Assert all pairs pass WCAG AA thresholds
8. Render a preview showing the component across representative combinations
9. If any pair fails WCAG AA — DO NOT ship. Fix the pairing first.

---

## Quick Reference — Mode Pairing Cheat Sheet

| Role           | M1 White  | M2 Black  | M3 Light(100) | M4 Dark(800) | M5 Mid(500) |
|----------------|-----------|-----------|---------------|--------------|-------------|
| Surface BG     | `#FFFFFF` | `#0A0A0A` | step 100      | step 800     | step 500    |
| Primary Text   | step 900  | White     | step 900      | White        | White       |
| Secondary Text | Black     | step 50   | Black         | step 50      | step 50     |
| Accent / Link  | step 500  | step 400  | step 600      | step 300     | step 50     |
| Btn Fill BG    | step 500  | step 50   | step 600      | step 50      | step 50     |
| Btn Fill Text  | White     | Black     | White         | Black        | Black       |
| Outline / Ring | step 500  | step 400  | step 600      | step 300     | step 50     |
| Icons          | step 500  | step 400  | step 600      | step 300     | step 50     |
| Divider        | step 400  | step 500  | step 500      | step 500     | Black       |

> "step N" means the Nth step of the CURRENT hue. E.g., Blue mode 1 accent = Blue-500 = `#5252ff`.