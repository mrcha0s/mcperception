# Surface Modes — Complete Pairing Reference

## Overview

Every UI element in this design system MUST support all 5 surface modes. A "surface mode" defines the background color and dictates which palette steps can be used for text, accents, buttons, icons, and dividers on top of it.

The pairing rules are UNIVERSAL across all 7 hues. When this document says "step 500", it means the 500-step of whichever hue is currently active.

---

## Mode 1 — White Surface

| Property          | Value              | Why                                             |
|-------------------|--------------------|--------------------------------------------------|
| **Surface BG**    | `#FFFFFF` (White)  | Standard light mode background                   |
| **Primary Text**  | step 900           | Maximum contrast (~20:1). Use for headings, body |
| **Secondary Text**| `#0A0A0A` (Black)  | Near-identical contrast (~19.8:1). For captions   |
| **Accent / Link** | step 500           | Passes AA small (~5.2:1). Branded accent color   |
| **Btn Fill BG**   | step 500           | Same as accent. White text inside (~5.2:1)       |
| **Btn Fill Text** | `#FFFFFF` (White)  | On step 500 fill: ~5.2:1 ✅                     |
| **Btn Outline**   | step 500           | Border/ring color. AA non-text (~5.2:1)          |
| **Icons**         | step 500           | Matches accent. AA non-text (~5.2:1)             |
| **Divider**       | step 400           | Subtle separator (~4.0:1). Passes non-text UI    |
| **Focus Ring**    | step 500           | Visible keyboard focus indicator                  |

### Avoid on White Surface
Steps 50–300: All fail AA small text (< 3.0:1 to < 2.6:1). Step 400 fails AA small text (4.0:1 < 4.5:1) but passes large text and non-text UI.

### Special Considerations
- For **disabled** states: Use step 300 with AA large text treatment (≥ 18px bold)
- For **hover** states: Use step 600 (darkens from 500)
- For **pressed** states: Use step 700

---

## Mode 2 — Black Surface

| Property          | Value              | Why                                             |
|-------------------|--------------------|--------------------------------------------------|
| **Surface BG**    | `#0A0A0A` (Black)  | Standard dark mode background                    |
| **Primary Text**  | `#FFFFFF` (White)  | Maximum contrast (~19.8:1)                       |
| **Secondary Text**| step 50            | Near-white tint (~19:1). Slightly softer          |
| **Accent / Link** | step 400           | Passes AA small (~4.9:1). Branded accent color   |
| **Btn Fill BG**   | step 50            | Light fill. Black text inside (~19:1)            |
| **Btn Fill Text** | `#0A0A0A` (Black)  | On step 50 fill: ~19:1 ✅                       |
| **Btn Outline**   | step 400           | Border/ring color. AA non-text (~4.9:1)          |
| **Icons**         | step 400           | Matches accent. AA non-text (~4.9:1)             |
| **Divider**       | step 500           | Subtle separator (~3.8:1). Passes non-text UI    |
| **Focus Ring**    | step 400           | Visible keyboard focus indicator                  |

### Avoid on Black Surface
Steps 600–900: All fail even non-text UI (< 2.5:1). Step 500 fails AA small text (3.8:1 < 4.5:1) but passes large text and non-text UI.

### Special Considerations
- For **disabled** states: Use step 500 with AA large text treatment (≥ 18px bold)
- For **hover** states: Use step 300 (lightens from 400)
- For **pressed** states: Use step 200

---

## Mode 3 — Light Hue Surface (Step 100)

| Property          | Value              | Why                                             |
|-------------------|--------------------|--------------------------------------------------|
| **Surface BG**    | step 100           | Tinted light background for panels/cards/alerts  |
| **Primary Text**  | step 900           | Strong contrast (~15:1)                          |
| **Secondary Text**| `#0A0A0A` (Black)  | Near-identical contrast (~15:1)                  |
| **Accent / Link** | step 600           | Passes AA small (~6.0:1). Darker accent needed   |
| **Btn Fill BG**   | step 600           | Darker fill for visible buttons. White text (~8:1)|
| **Btn Fill Text** | `#FFFFFF` (White)  | On step 600 fill: ~8.0:1 ✅                     |
| **Btn Outline**   | step 600           | Border/ring color. AA non-text (~6.0:1)          |
| **Icons**         | step 600           | Matches accent. AA non-text (~6.0:1)             |
| **Divider**       | step 500           | Separator (~3.0-3.1:1). Passes non-text UI       |
| **Focus Ring**    | step 600           | Visible keyboard focus indicator                  |

### Avoid on Light Hue Surface
Steps 50–100: Near-invisible (< 1.3:1). Steps 200–400: Fail AA small (< 4.0:1). Step 500: Marginal for non-text (~3.0:1).

### Special Considerations
- For **disabled** states: Use step 400 with AA large text treatment
- For **hover** states: Use step 700 (darkens from 600)
- For **pressed** states: Use step 800

---

## Mode 4 — Dark Hue Surface (Step 800)

| Property          | Value              | Why                                             |
|-------------------|--------------------|--------------------------------------------------|
| **Surface BG**    | step 800           | Dark branded background for headers/hero/nav     |
| **Primary Text**  | `#FFFFFF` (White)  | Strong contrast (~16:1)                          |
| **Secondary Text**| step 50            | Near-white tint (~15:1)                          |
| **Accent / Link** | step 300           | Passes AA small (~6.0:1). Light accent needed    |
| **Btn Fill BG**   | step 50            | Light fill for visibility. Black text (~15:1)    |
| **Btn Fill Text** | `#0A0A0A` (Black)  | On step 50 fill: ~19:1 ✅                       |
| **Btn Outline**   | step 300           | Border/ring color. AA non-text (~6.0:1)          |
| **Icons**         | step 300           | Matches accent. AA non-text (~6.0:1)             |
| **Divider**       | step 500           | Separator (~3.0:1). Passes non-text UI            |
| **Focus Ring**    | step 300           | Visible keyboard focus indicator                  |

### Avoid on Dark Hue Surface
Steps 600–900: Near-invisible (< 2.5:1). Step 500: Fails AA small (3.0–3.8:1) but passes non-text UI. Step 400: Marginal (~3.0:1 non-text only).

### Special Considerations
- For **disabled** states: Use step 500 with AA large text treatment
- For **hover** states: Use step 200 (lightens from 300)
- For **pressed** states: Use step 100

---

## Mode 5 — Mid Hue Surface (Step 500) — CONSTRAINED

| Property          | Value              | Why                                             |
|-------------------|--------------------|--------------------------------------------------|
| **Surface BG**    | step 500           | Bold mid-dark branded background                 |
| **Primary Text**  | `#FFFFFF` (White)  | Passes AA small (~5.2:1)                         |
| **Secondary Text**| step 50            | Passes AA small (~5.0:1). Slightly softer        |
| **Accent / Link** | step 50            | Only light shade that passes AA (~5.0:1)         |
| **Btn Fill BG**   | step 50            | Light fill. Black text inside (~19:1)            |
| **Btn Fill Text** | `#0A0A0A` (Black)  | On step 50 fill: ~19:1 ✅                       |
| **Btn Outline**   | step 50            | Border/ring color. AA non-text (~5.0:1)          |
| **Icons**         | step 50            | Light icons for visibility (~5.0:1)              |
| **Divider**       | `#0A0A0A` (Black)  | Dark separator (~3.8:1). Passes non-text UI      |
| **Focus Ring**    | `#FFFFFF` (White)  | Maximum visibility on mid surface                |

### ⚠️ CRITICAL CONSTRAINTS — Mode 5
This is the most limited surface mode. Only White, step 50, and Black have enough contrast to be usable.

**Use Mode 5 sparingly** — best for:
- Call-to-action (CTA) sections
- Badges and tags
- Hero banners
- Selected/active states
- Accent headers

**Avoid using Mode 5 for:**
- Long-form content (limited text options)
- Complex layouts (insufficient color variety)
- Forms with many field states

### Avoid on Mid Hue Surface
Steps 100–400: Fail AA small (< 4.5:1). Steps 600–900: Fail AA small on most (< 2.5:1). Only White (~5.2:1), step 50 (~5.0:1), and Black (~3.8:1 non-text only) are safe.

---

## Cross-Mode Contrast Verification Table

For every hue, these are the minimum contrast ratios achieved:

| Role           | M1 min | M2 min | M3 min | M4 min | M5 min |
|----------------|--------|--------|--------|--------|--------|
| Primary Text   | 19.9:1 | 19.8:1 | 15.0:1 | 15.8:1 | 5.2:1  |
| Secondary Text | 19.8:1 | 18.7:1 | 15.0:1 | 15.0:1 | 4.9:1  |
| Accent / Link  | 5.2:1  | 4.9:1  | 6.0:1  | 6.0:1  | 4.9:1  |
| Btn Fill Text  | 5.2:1  | 18.7:1 | 8.0:1  | 18.7:1 | 18.7:1 |
| Icons          | 5.2:1  | 4.9:1  | 6.0:1  | 6.0:1  | 4.9:1  |
| Divider (UI)   | 4.0:1  | 3.7:1  | 3.0:1  | 3.0:1  | 3.7:1  |

All values pass their respective WCAG AA thresholds (text ≥ 4.5:1, UI ≥ 3.0:1).

---

## Implementation Lookup Table

Use this to resolve colors programmatically. `P[N]` means the current hue's step N.

```
resolveMode(hue, mode):
  switch mode:
    1 → { bg: "#FFFFFF", text: P[900], text2: "#0A0A0A", accent: P[500], btnBg: P[500], btnText: "#FFFFFF", outline: P[500], icon: P[500], divider: P[400] }
    2 → { bg: "#0A0A0A", text: "#FFFFFF", text2: P[50],  accent: P[400], btnBg: P[50],  btnText: "#0A0A0A", outline: P[400], icon: P[400], divider: P[500] }
    3 → { bg: P[100],    text: P[900],    text2: "#0A0A0A", accent: P[600], btnBg: P[600], btnText: "#FFFFFF", outline: P[600], icon: P[600], divider: P[500] }
    4 → { bg: P[800],    text: "#FFFFFF", text2: P[50],  accent: P[300], btnBg: P[50],  btnText: "#0A0A0A", outline: P[300], icon: P[300], divider: P[500] }
    5 → { bg: P[500],    text: "#FFFFFF", text2: P[50],  accent: P[50],  btnBg: P[50],  btnText: "#0A0A0A", outline: P[50],  icon: P[50],  divider: "#0A0A0A" }
```

---

## Interactive State Mappings

| State    | M1 (White)    | M2 (Black)    | M3 (Light)    | M4 (Dark)     | M5 (Mid)      |
|----------|---------------|---------------|---------------|---------------|---------------|
| Default  | step 500      | step 400      | step 600      | step 300      | step 50       |
| Hover    | step 600      | step 300      | step 700      | step 200      | White         |
| Pressed  | step 700      | step 200      | step 800      | step 100      | White         |
| Focus    | step 500 ring | step 400 ring | step 600 ring | step 300 ring | White ring    |
| Disabled | step 300 @lg  | step 500 @lg  | step 400 @lg  | step 500 @lg  | step 300 @lg  |

> `@lg` means use AA large text threshold (≥ 3.0:1) — disabled text must be ≥ 18px bold or ≥ 24px regular.