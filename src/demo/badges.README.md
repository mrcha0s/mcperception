# mc-badge — Perception Bootstrap

Surface-mode-aware inline labels, tags, and status indicators with 210 variants (7 hues x 5 modes x 6 sizes).

## Quick Start

```html
<link rel="stylesheet" href="dist/mcperception.css">

<span class="mc-badge mc-badge-filled" data-hue="green">Active</span>
```

---

## Props (HTML Attributes & Classes)

| Attribute / Class | Type | Values | Default | Description |
|---|---|---|---|---|
| `data-hue` | attribute | `neutral`, `red`, `green`, `blue`, `yellow`, `magenta`, `teal` | (required) | Color hue |
| `data-mode` | attribute (ancestor) | `1`, `2`, `3`, `4`, `5` | `2` (dark) | Surface mode — set on a parent container |
| **Variant** (class) | class | `mc-badge-filled`, `mc-badge-tonal`, `mc-badge-outline`, `mc-badge-subtle` | (required) | Visual emphasis level |
| **Size** (class) | class | `mc-badge-xs`, `mc-badge-sm`, _(md default)_, `mc-badge-lg`, `mc-badge-xl`, `mc-badge-xxl` | `md` | Size tier |
| **Shape** (class) | class | `mc-badge-pill`, `mc-badge-square` | default (rounded-sm) | Shape modifier |
| **Dot** (class) | class | `mc-badge-dot`, `mc-badge-dot-only`, `mc-badge-pulse` | — | Status dot indicators |
| **Dismissible** (class) | class | `mc-badge-dismissible` | — | Adds close button padding |
| **Interactive** (class) | class | `mc-badge-interactive` | — | Hover/click feedback |

### Variant Hierarchy

| Variant | Emphasis | Use When |
|---|---|---|
| `mc-badge-filled` | **High** | Primary status, active states, key info |
| `mc-badge-tonal` | **Medium-high** | Secondary status with visual weight |
| `mc-badge-outline` | **Medium** | Tags, labels, secondary classification |
| `mc-badge-subtle` | **Low** | Background metadata, soft categorization |

---

## Size Scale

| Size | Class | Font | Padding | Radius (M1/3/5) | Radius (M2/4) |
|---|---|---|---|---|---|
| xs | `mc-badge-xs` | 10px | 1px 6px | 2px | 2px |
| sm | `mc-badge-sm` | 10px | 2px 6px | 2px | 2px |
| md | _(default)_ | 12px | 2px 8px | 2px | 2px |
| lg | `mc-badge-lg` | 14px | 4px 10px | 3px | 2px |
| xl | `mc-badge-xl` | 16px | 5px 12px | 4px | 2px |
| xxl | `mc-badge-xxl` | 18px | 6px 14px | 5px | 2px |

---

## Surface Mode Usage

Badges inherit `data-mode` from ancestor containers.

### Mode 1 — White Surface (`#FFFFFF`)

```html
<div data-mode="1" style="background:#FFFFFF; padding:1rem;">
  <span class="mc-badge mc-badge-filled" data-hue="green">Active</span>
  <span class="mc-badge mc-badge-outline" data-hue="red">Error</span>
  <span class="mc-badge mc-badge-subtle" data-hue="blue">Info</span>
</div>
```

- Filled: `hue.500` bg, `#FFFFFF` text
- Tonal: `hue.800` bg, `hue.50` text, `hue.600` border
- Outline: `hue.500` border and text
- Subtle: `hue.50` bg, `hue.600` text

### Mode 2 — Black Surface (`#0A0A0A`)

```html
<div data-mode="2" style="background:#0A0A0A; padding:1rem;">
  <span class="mc-badge mc-badge-filled" data-hue="blue">New</span>
  <span class="mc-badge mc-badge-tonal" data-hue="green">Online</span>
  <span class="mc-badge mc-badge-outline" data-hue="red">Alert</span>
</div>
```

- Filled: `hue.50` bg, `#0A0A0A` text (inverted light fill)
- Tonal: `neutral.800` bg, `hue.300` text, `hue.400` border
- Outline: `hue.400` border and text
- Subtle: `hue.900` bg, `hue.300` text
- **Depth tokens**: `border-radius: 2px`, `font-weight: 500`, pill disabled

### Mode 3 — Light Hue Surface (`hue.100`)

```html
<div data-mode="3" style="background:var(--color-p-green-100); padding:1rem;">
  <span class="mc-badge mc-badge-filled" data-hue="green">Confirmed</span>
  <span class="mc-badge mc-badge-outline" data-hue="green">Pending</span>
</div>
```

- Filled: `hue.500` bg, `#FFFFFF` text
- Tonal: `hue.800` bg, `hue.50` text, `hue.600` border
- Outline: `hue.600` border and text
- Subtle: `hue.200` bg, `hue.700` text

### Mode 4 — Dark Hue Surface (`hue.800`)

```html
<div data-mode="4" style="background:var(--color-p-red-800); padding:1rem;">
  <span class="mc-badge mc-badge-filled" data-hue="red">Critical</span>
  <span class="mc-badge mc-badge-outline" data-hue="red">Warning</span>
</div>
```

- Filled: `hue.50` bg, `#0A0A0A` text (inverted light fill)
- Tonal: `hue.700` bg, `#FFFFFF` text, `hue.300` border
- Outline: `hue.300` border and text
- Subtle: `hue.900` bg, `hue.300` text
- **Depth tokens**: `border-radius: 2px`, `font-weight: 500`, pill disabled

### Mode 5 — Mid Hue Surface (`hue.500`)

```html
<div data-mode="5" style="background:var(--color-p-magenta-500); padding:1rem;">
  <span class="mc-badge mc-badge-filled" data-hue="magenta">Premium</span>
  <span class="mc-badge mc-badge-outline" data-hue="magenta">Pro</span>
</div>
```

- Filled: `hue.50` bg, `#0A0A0A` text (inverted)
- Tonal: `hue.50` bg, `#0A0A0A` text, `hue.100` border
- Outline: `hue.50` border and text
- Subtle: `hue.600` bg, `#FFFFFF` text

---

## Semantic Hue Mapping

| Semantic | Hue | Example |
|---|---|---|
| Success | `green` | `data-hue="green"` — Active, Online, Approved |
| Danger | `red` | `data-hue="red"` — Error, Critical, Rejected |
| Warning | `yellow` | `data-hue="yellow"` — Caution, Pending, Review |
| Info | `blue` | `data-hue="blue"` — New, Updated, Beta |
| Premium | `magenta` | `data-hue="magenta"` — Pro, VIP, Featured |
| Secondary | `teal` | `data-hue="teal"` — Tag, Category, Version |
| Default | `neutral` | `data-hue="neutral"` — Draft, Archived, N/A |

---

## Composites

### Status Dot Badge

```html
<span class="mc-badge mc-badge-filled mc-badge-dot" data-hue="green">Online</span>
```

### Dot-Only (no text)

```html
<span class="mc-badge mc-badge-dot-only" data-hue="green"></span>
<span class="mc-badge mc-badge-dot-only mc-badge-pulse" data-hue="red"></span>
```

### Pill Shape

```html
<span class="mc-badge mc-badge-filled mc-badge-pill" data-hue="blue">Beta</span>
```

Note: Pill shape is automatically disabled on M2/M4 (dark depth tokens cap radius at 2px).

### Dismissible

```html
<span class="mc-badge mc-badge-filled mc-badge-dismissible" data-hue="blue">
  Filter <span class="mc-badge-close"></span>
</span>
```

### Badge Group

```html
<div class="mc-badge-group">
  <span class="mc-badge mc-badge-filled" data-hue="blue">React</span>
  <span class="mc-badge mc-badge-filled" data-hue="green">TypeScript</span>
</div>
```

### Counter Overlay

```html
<span class="mc-badge-wrapper">
  <div>...target element...</div>
  <span class="mc-badge mc-badge-counter" data-hue="red">5</span>
</span>
```

---

## Accessibility

### ARIA Usage

- Use `role="status"` for live status badges that update
- Use `aria-label` for dot-only badges: `aria-label="Online"`
- Dismissible close buttons inherit text from `aria-label` on parent or use `aria-label="Remove"`
- Counter badges: use `aria-label="5 notifications"` for screen readers

### Screen Reader Behavior

- Badge text is announced as inline content
- Dot-only badges need explicit `aria-label` (no visible text)
- Pulsing animation is decorative (does not affect announcement)
- Counter badges overlaid on icons should use `aria-label` for full context

### WCAG AA Compliance

All 280 checks (7 hues x 5 modes x 4 variants x 2 tests) pass WCAG AA:

- **Text contrast**: >= 4.5:1 for all badge text on badge background
- **Border contrast**: >= 3.0:1 for all badge borders on surface
- **280/280 pass, 0 failures**

---

## Dark Surface Depth Rules (Modes 2 & 4)

Per `skill-depth-tokens.md`, badges on dark surfaces use flat-layered aesthetics:

| Property | Value | Reason |
|---|---|---|
| `border-radius` | `2px` (max) | Square, tool-palette feel |
| `font-weight` | `500` | Medium weight (depth-tokens badge spec) |
| `letter-spacing` | `0.03em` | Slight tracking for readability |
| Pill shape | Disabled (radius capped at 2px) | No pill badges on dark surfaces |
| Filled bg | `hue.50` with `#0A0A0A` text | Light fill on dark surface |
| Tonal bg (M2) | `neutral.800` panel surface | Depth-tokens layer system |
| Tonal bg (M4) | `hue.700` raised surface | Depth-tokens layer system |

---

## File Structure

| File | Purpose |
|---|---|
| `src/mcperception-components.css` | Badge CSS within `@layer components` |
| `src/demo/badges.html` | Self-contained demo showing all 210+ variants |
| `src/demo/badges.README.md` | This documentation file |
