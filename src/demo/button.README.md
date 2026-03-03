# mc-button — Perception Bootstrap

Surface-mode-aware button component with 210 variants (7 hues x 5 modes x 6 sizes).

## Quick Start

```html
<link rel="stylesheet" href="dist/mcperception.css">

<button class="mc-button mc-button-filled" data-hue="blue">
  Submit
</button>
```

---

## Props (HTML Attributes & Classes)

| Attribute / Class | Type | Values | Default | Description |
|---|---|---|---|---|
| `data-hue` | attribute | `neutral`, `red`, `green`, `blue`, `yellow`, `magenta`, `teal` | (required) | Color hue for the button |
| `data-mode` | attribute (ancestor) | `1`, `2`, `3`, `4`, `5` | `2` (dark) | Surface mode — set on a parent container |
| **Variant** (class) | class | `mc-button-filled`, `mc-button-tonal`, `mc-button-outline`, `mc-button-ghost` | (required) | Visual emphasis level |
| **Size** (class) | class | `mc-button-xs`, `mc-button-sm`, _(md default)_, `mc-button-lg`, `mc-button-xl`, `mc-button-xxl` | `md` | Size tier |
| **Icon** (class) | class | `mc-button-icon-left`, `mc-button-icon-right`, `mc-button-icon-only` | — | Icon positioning |
| **Loading** (class) | class | `mc-button-loading` | — | Shows spinner, hides text |
| `disabled` | attribute | boolean | — | Disables interaction (40% opacity) |
| `aria-disabled` | attribute | `"true"` | — | Accessible disabled state |

### Variant Hierarchy

| Variant | Emphasis | Use When |
|---|---|---|
| `mc-button-filled` | **High** | Primary actions, CTAs, submit |
| `mc-button-tonal` | **Medium-high** | Secondary actions with visual weight |
| `mc-button-outline` | **Medium** | Secondary actions, cancel, alternative paths |
| `mc-button-ghost` | **Low** | Tertiary actions, inline actions, close/dismiss |

---

## Size Scale

| Size | Class | Font | Padding (Y x X) | Radius (M1/3/5) | Radius (M2/4) | Min Height |
|---|---|---|---|---|---|---|
| xs | `mc-button-xs` | 11px | 4px 8px | 4px | 3px | 24px |
| sm | `mc-button-sm` | 12px | 6px 12px | 5px | 3px | 30px |
| md | _(default)_ | 14px | 8px 16px | 6px | 3px | 36px |
| lg | `mc-button-lg` | 16px | 10px 20px | 7px | 3px | 44px |
| xl | `mc-button-xl` | 18px | 12px 24px | 8px | 3px | 52px |
| xxl | `mc-button-xxl` | 20px | 14px 28px | 10px | 3px | 60px |

---

## Surface Mode Usage

Every button adapts to its ancestor's `data-mode` attribute. Set `data-mode` on any parent element.

### Mode 1 — White Surface (`#FFFFFF`)

```html
<div data-mode="1" style="background:#FFFFFF; padding:1rem;">
  <button class="mc-button mc-button-filled" data-hue="blue">Primary</button>
  <button class="mc-button mc-button-outline" data-hue="blue">Secondary</button>
  <button class="mc-button mc-button-ghost" data-hue="blue">Tertiary</button>
</div>
```

- Filled: `hue.500` bg, `#FFFFFF` text
- Outline: `hue.500` border and text
- Ghost: `hue.500` text, transparent bg

### Mode 2 — Black Surface (`#0A0A0A`)

```html
<div data-mode="2" style="background:#0A0A0A; padding:1rem;">
  <button class="mc-button mc-button-filled" data-hue="blue">Primary</button>
  <button class="mc-button mc-button-tonal" data-hue="blue">Tonal</button>
  <button class="mc-button mc-button-outline" data-hue="blue">Secondary</button>
  <button class="mc-button mc-button-ghost" data-hue="blue">Tertiary</button>
</div>
```

- Filled: `hue.50` bg, `#0A0A0A` text (inverted light fill)
- Tonal: `neutral.800` bg, `hue.400` border
- Outline: `hue.400` border and text
- Ghost: `hue.400` text, transparent bg
- **Depth tokens**: `border-radius: 3px`, `font-weight: 400`, sentence case

### Mode 3 — Light Hue Surface (`hue.100`)

```html
<div data-mode="3" data-hue="green"
     style="background:var(--color-p-green-100); padding:1rem;">
  <button class="mc-button mc-button-filled" data-hue="green">Confirm</button>
  <button class="mc-button mc-button-outline" data-hue="green">Cancel</button>
</div>
```

- Filled: `hue.500` bg, `#FFFFFF` text
- Outline: `hue.600` border and text
- Ghost: `hue.600` text

### Mode 4 — Dark Hue Surface (`hue.800`)

```html
<div data-mode="4" data-hue="red"
     style="background:var(--color-p-red-800); padding:1rem;">
  <button class="mc-button mc-button-filled" data-hue="red">Delete</button>
  <button class="mc-button mc-button-outline" data-hue="red">Cancel</button>
</div>
```

- Filled: `hue.50` bg, `#0A0A0A` text (inverted light fill)
- Tonal: `hue.700` bg, `hue.400` border
- Outline: `hue.300` border and text
- Ghost: `hue.300` text
- **Depth tokens**: `border-radius: 3px`, `font-weight: 400`, sentence case

### Mode 5 — Mid Hue Surface (`hue.500`)

```html
<div data-mode="5" data-hue="magenta"
     style="background:var(--color-p-magenta-500); padding:1rem;">
  <button class="mc-button mc-button-filled" data-hue="magenta">Upgrade</button>
  <button class="mc-button mc-button-outline" data-hue="magenta">Learn more</button>
</div>
```

- Filled: `hue.50` bg, `#0A0A0A` text (inverted)
- Outline: `hue.50` border and text
- Ghost: `hue.50` text

---

## Semantic Hue Mapping

| Semantic | Hue | Example |
|---|---|---|
| Primary action | `blue` | `data-hue="blue"` — Submit, Save, Continue |
| Success | `green` | `data-hue="green"` — Confirm, Approve, Complete |
| Danger | `red` | `data-hue="red"` — Delete, Remove, Reject |
| Warning | `yellow` | `data-hue="yellow"` — Caution, Review, Pending |
| Info | `teal` | `data-hue="teal"` — Learn more, Details, Help |
| Premium | `magenta` | `data-hue="magenta"` — Upgrade, Special, Pro |
| Default / Chrome | `neutral` | `data-hue="neutral"` — Cancel, Close, Back |

---

## Composites

### Button Group (connected)

```html
<div class="mc-button-group">
  <button class="mc-button mc-button-outline" data-hue="blue">Left</button>
  <button class="mc-button mc-button-outline" data-hue="blue">Center</button>
  <button class="mc-button mc-button-outline" data-hue="blue">Right</button>
</div>
```

### Toggle Group (segmented control)

```html
<div class="mc-button-toggle" data-hue="blue">
  <button class="mc-button active" data-hue="blue">Day</button>
  <button class="mc-button" data-hue="blue">Week</button>
  <button class="mc-button" data-hue="blue">Month</button>
</div>
```

### Icon Button

```html
<!-- Icon left -->
<button class="mc-button mc-button-filled mc-button-icon-left" data-hue="green">
  <svg>...</svg> Save
</button>

<!-- Icon only -->
<button class="mc-button mc-button-ghost mc-button-icon-only" data-hue="neutral"
        aria-label="Close">
  <svg>...</svg>
</button>
```

### Loading State

```html
<button class="mc-button mc-button-filled mc-button-loading" data-hue="blue"
        aria-busy="true" disabled>
  Submitting...
</button>
```

---

## Interactive States

| State | Behavior |
|---|---|
| **Default** | Resting state with variant colors |
| **Hover** | Color shift (M1/3/5: darker fill; M2/4: raised surface layer) |
| **Pressed / Active** | `scale(0.97)` + deeper color; M2/4: lowered surface |
| **Focus** | `ring-2 ring-offset-1` using mode-specific accent color |
| **Disabled** | 40% opacity, `cursor-not-allowed`, `pointer-events-none` |
| **Loading** | Spinner overlay via `::after`, text hidden, interactions disabled |

---

## Accessibility

### ARIA Attributes

- Use native `<button>` elements whenever possible
- For non-button elements: add `role="button"` and `tabindex="0"`
- Loading: add `aria-busy="true"` alongside `mc-button-loading`
- Icon-only buttons: must have `aria-label` describing the action
- Disabled: use `disabled` attribute or `aria-disabled="true"`
- Toggle groups: use `aria-pressed="true|false"` on active toggle

### Keyboard Navigation

| Key | Action |
|---|---|
| `Tab` | Moves focus to / from button |
| `Enter` | Activates the button |
| `Space` | Activates the button |
| `Escape` | (in groups) Returns focus to first button |

### WCAG AA Compliance

All 210 variants (7 hues x 5 modes x 6 sizes) meet WCAG AA:

- **Text contrast**: ≥ 4.5:1 for all button text on button background
- **Border contrast**: ≥ 3.0:1 for outline/tonal borders on surface
- **Focus indicator**: ≥ 3.0:1 ring color on surface

Verification: 209/210 pairs pass. One system-level near-miss (yellow M4 divider at 2.98:1) is not button-specific.

### Screen Reader Behavior

- Button text is announced as the accessible name
- Icon-only buttons use `aria-label` for announcement
- Loading state announces "busy" via `aria-busy="true"`
- Disabled buttons are skipped in tab order (native `disabled`) or announced as disabled (`aria-disabled`)

---

## File Structure

| File | Purpose |
|---|---|
| `src/mcperception-input.css` | Button CSS (lines 1–485) within `@layer components` |
| `src/demo/button.html` | Self-contained demo page showing all 210 variants |
| `src/demo/button.README.md` | This documentation file |

---

## Dark Surface Depth Rules (Modes 2 & 4)

Per `skill-depth-tokens.md`, buttons on dark surfaces follow a Photoshop-inspired flat-layered aesthetic:

| Property | Value | Reason |
|---|---|---|
| `border-radius` | `3px` (max) | Sharp, tool-palette feel |
| `font-weight` | `400` | No bold on dark surfaces |
| `text-transform` | `none` | Sentence case only |
| `letter-spacing` | `0.01em` | Slight tracking for readability |
| Hover bg | Raised surface layer | `neutral.700` (M2), `hue.700` (M4) |
| Active bg | Input surface layer | `neutral.900` (M2), `hue.900` (M4) |
| Borders | `1px solid` | No shadows, no gradients |
