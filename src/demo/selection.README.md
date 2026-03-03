# Selection Controls — Perception Bootstrap

Surface-mode-aware checkboxes, radio buttons, toggle switches, and chips with 210 variants per control (7 hues x 5 modes x 6 sizes).

## Quick Start

```html
<link rel="stylesheet" href="dist/mcperception.css">

<label class="mc-control">
  <input type="checkbox" class="mc-checkbox" data-hue="green">
  <span class="mc-control-label">Enable feature</span>
</label>
```

---

## Props (HTML Attributes & Classes)

### Checkbox

| Attribute / Class | Type | Values | Default | Description |
|---|---|---|---|---|
| `data-hue` | attribute | `neutral`, `red`, `green`, `blue`, `yellow`, `magenta`, `teal` | (required) | Color hue |
| `data-mode` | attribute (ancestor) | `1`, `2`, `3`, `4`, `5` | `2` (dark) | Surface mode — set on parent |
| **Size** (class) | class | `mc-checkbox-xs`, `mc-checkbox-sm`, _(md default)_, `mc-checkbox-lg`, `mc-checkbox-xl`, `mc-checkbox-xxl` | `md` | Size tier |
| `checked` | attribute | boolean | — | Checked state |
| `disabled` | attribute | boolean | — | Disabled state |
| `mc-checkbox-error` | class | — | — | Error state border |

### Radio Button

| Attribute / Class | Type | Values | Default | Description |
|---|---|---|---|---|
| `data-hue` | attribute | `neutral`, `red`, `green`, `blue`, `yellow`, `magenta`, `teal` | (required) | Color hue |
| `data-mode` | attribute (ancestor) | `1`, `2`, `3`, `4`, `5` | `2` (dark) | Surface mode — set on parent |
| **Size** (class) | class | `mc-radio-xs`, `mc-radio-sm`, _(md default)_, `mc-radio-lg`, `mc-radio-xl`, `mc-radio-xxl` | `md` | Size tier |
| `name` | attribute | string | (required) | Radio group name |
| `checked` | attribute | boolean | — | Selected state |
| `disabled` | attribute | boolean | — | Disabled state |
| `mc-radio-error` | class | — | — | Error state border |

### Toggle Switch

| Attribute / Class | Type | Values | Default | Description |
|---|---|---|---|---|
| `data-hue` | attribute | `neutral`, `red`, `green`, `blue`, `yellow`, `magenta`, `teal` | (required) | Color hue |
| `data-mode` | attribute (ancestor) | `1`, `2`, `3`, `4`, `5` | `2` (dark) | Surface mode — set on parent |
| **Size** (class) | class | `mc-switch-xs`, `mc-switch-sm`, _(md default)_, `mc-switch-lg`, `mc-switch-xl`, `mc-switch-xxl` | `md` | Size tier |
| `checked` | attribute | boolean | — | On state |
| `disabled` | attribute | boolean | — | Disabled state |
| `role="switch"` | attribute | — | — | ARIA role for accessibility |

### Chip

| Attribute / Class | Type | Values | Default | Description |
|---|---|---|---|---|
| `data-hue` | attribute | `neutral`, `red`, `green`, `blue`, `yellow`, `magenta`, `teal` | (required) | Color hue |
| `data-mode` | attribute (ancestor) | `1`, `2`, `3`, `4`, `5` | `2` (dark) | Surface mode — set on parent |
| **Size** (class) | class | `mc-chip-xs`, `mc-chip-sm`, _(md default)_, `mc-chip-lg`, `mc-chip-xl`, `mc-chip-xxl` | `md` | Size tier |
| `active` / `selected` | class | — | — | Active/selected state |
| `aria-pressed` | attribute | `"true"` | — | ARIA pressed state |
| `disabled` | attribute | boolean | — | Disabled state |

---

## Size Scale

### Checkbox

| Size | Class | Dimensions |
|---|---|---|
| xs | `mc-checkbox-xs` | 16x16px |
| sm | `mc-checkbox-sm` | 18x18px |
| md | _(default)_ | 22x22px |
| lg | `mc-checkbox-lg` | 26x26px |
| xl | `mc-checkbox-xl` | 30x30px |
| xxl | `mc-checkbox-xxl` | 34x34px |

### Radio

| Size | Class | Dimensions |
|---|---|---|
| xs | `mc-radio-xs` | 12x12px |
| sm | `mc-radio-sm` | 14x14px |
| md | _(default)_ | 14x14px |
| lg | `mc-radio-lg` | 18x18px |
| xl | `mc-radio-xl` | 22x22px |
| xxl | `mc-radio-xxl` | 26x26px |

### Toggle Switch

| Size | Class | Track Size |
|---|---|---|
| xs | `mc-switch-xs` | 24x12px |
| sm | `mc-switch-sm` | 28x14px |
| md | _(default)_ | 32x16px |
| lg | `mc-switch-lg` | 40x20px |
| xl | `mc-switch-xl` | 48x24px |
| xxl | `mc-switch-xxl` | 56x28px |

### Chip

| Size | Class | Font | Padding |
|---|---|---|---|
| xs | `mc-chip-xs` | 10px | 2px 8px |
| sm | `mc-chip-sm` | 11px | 3px 10px |
| md | _(default)_ | 12px | 4px 12px |
| lg | `mc-chip-lg` | 14px | 6px 16px |
| xl | `mc-chip-xl` | 16px | 8px 20px |
| xxl | `mc-chip-xxl` | 18px | 10px 24px |

---

## Surface Mode Usage

All selection controls inherit `data-mode` from ancestor containers.

### Mode 1 — White Surface (`#FFFFFF`)

```html
<div data-mode="1" style="background:#FFFFFF; padding:1rem;">
  <label class="mc-control">
    <input type="checkbox" class="mc-checkbox" data-hue="green" checked>
    <span class="mc-control-label">Enabled</span>
  </label>
</div>
```

- Checkbox fill: `hue.500` (both checked and unchecked)
- Checked: white checkmark appears
- Border: `hue.600`
- Border-radius: 5px
- Focus ring: `hue.500` (keyboard only via `:focus-visible`)
- Label text: `#0A0A0A`

### Mode 2 — Black Surface (`#0A0A0A`)

```html
<div data-mode="2" style="background:#0A0A0A; padding:1rem;">
  <label class="mc-control">
    <input type="checkbox" class="mc-checkbox" data-hue="blue" checked>
    <span class="mc-control-label">Active</span>
  </label>
</div>
```

- Checkbox fill: `hue.50` (both checked and unchecked — light on dark, matches btn fill)
- Checked: `#0A0A0A` checkmark appears
- Border: `hue.300`
- Border-radius: 3px (M2 cap)
- Focus ring: `hue.400` (keyboard only via `:focus-visible`)
- Label text: `neutral.100`

### Mode 3 — Light Hue Surface (`hue.100`)

```html
<div data-mode="3" style="background:var(--color-p-green-100); padding:1rem;">
  <label class="mc-control">
    <input type="checkbox" class="mc-checkbox" data-hue="green" checked>
    <span class="mc-control-label">Confirmed</span>
  </label>
</div>
```

- Checkbox fill: `hue.600` (both checked and unchecked)
- Checked: white checkmark appears
- Border: `hue.700`
- Border-radius: 5px
- Focus ring: `hue.600` (keyboard only via `:focus-visible`)
- Label text: `#0A0A0A`

### Mode 4 — Dark Hue Surface (`hue.800`)

```html
<div data-mode="4" style="background:var(--color-p-red-800); padding:1rem;">
  <label class="mc-control">
    <input type="checkbox" class="mc-checkbox" data-hue="red" checked>
    <span class="mc-control-label">Critical</span>
  </label>
</div>
```

- Checkbox fill: `hue.50` (both checked and unchecked — light on dark, matches btn fill)
- Checked: `#0A0A0A` checkmark appears
- Border: `hue.300`
- Border-radius: 3px (M4 cap)
- Focus ring: `hue.300` (keyboard only via `:focus-visible`)
- Label text: `neutral.100`

### Mode 5 — Mid Hue Surface (`hue.500`)

```html
<div data-mode="5" style="background:var(--color-p-magenta-500); padding:1rem;">
  <label class="mc-control">
    <input type="checkbox" class="mc-checkbox" data-hue="magenta" checked>
    <span class="mc-control-label">Premium</span>
  </label>
</div>
```

- Checkbox fill: `hue.50` (both checked and unchecked — light on mid, matches btn fill)
- Checked: `#0A0A0A` checkmark appears
- Border: `#0A0A0A` (~3.77:1 vs hue.500)
- Border-radius: 5px
- Focus ring: `#FFFFFF` (keyboard only via `:focus-visible`)
- Label text: `#FFFFFF`

---

## Semantic Hue Mapping

| Semantic | Hue | Example |
|---|---|---|
| Success | `green` | `data-hue="green"` — Enabled, Active, Confirmed |
| Danger | `red` | `data-hue="red"` — Delete, Remove, Critical |
| Warning | `yellow` | `data-hue="yellow"` — Review, Pending |
| Info | `blue` | `data-hue="blue"` — Subscribed, Active, Selected |
| Premium | `magenta` | `data-hue="magenta"` — Pro features, Special |
| Secondary | `teal` | `data-hue="teal"` — Filters, Tags |
| Default | `neutral` | `data-hue="neutral"` — General settings |

---

## Control Wrapper

Use `.mc-control` to pair controls with clickable labels.

```html
<label class="mc-control">
  <input type="checkbox" class="mc-checkbox" data-hue="blue">
  <span class="mc-control-label">Accept terms</span>
</label>
```

### Control Group

```html
<div class="mc-control-group">
  <div class="mc-control-group-label">Notification preferences</div>
  <label class="mc-control">
    <input type="checkbox" class="mc-checkbox" data-hue="blue" checked>
    <span class="mc-control-label">Email</span>
  </label>
  <label class="mc-control">
    <input type="checkbox" class="mc-checkbox" data-hue="blue">
    <span class="mc-control-label">SMS</span>
  </label>
</div>
```

### Inline Group

```html
<div class="mc-control-group-inline">
  <label class="mc-control">
    <input type="radio" name="plan" class="mc-radio" data-hue="blue" checked>
    <span class="mc-control-label">Monthly</span>
  </label>
  <label class="mc-control">
    <input type="radio" name="plan" class="mc-radio" data-hue="blue">
    <span class="mc-control-label">Yearly</span>
  </label>
</div>
```

---

## Chip Usage

### Chip Group (Filter tags)

```html
<div class="mc-chip-group">
  <span class="mc-chip active" data-hue="blue">React</span>
  <span class="mc-chip" data-hue="blue">Vue</span>
  <span class="mc-chip" data-hue="blue">Angular</span>
</div>
```

### Dismissible Chip

```html
<span class="mc-chip active mc-chip-dismissible" data-hue="blue">
  Filter <span class="mc-chip-close"></span>
</span>
```

---

## Accessibility

### ARIA Usage

- Use native `<input type="checkbox">` and `<input type="radio">` elements
- Toggle switches: add `role="switch"` to the checkbox input
- Every control must be inside a `<label>` or have `aria-label`
- Radio groups: wrap in `<fieldset>` + `<legend>` or use `aria-labelledby`
- Chips: use `aria-pressed="true|false"` for toggle behavior

### Keyboard Navigation

| Key | Checkbox | Radio | Switch | Chip |
|---|---|---|---|---|
| `Tab` | Focus control | Focus group | Focus control | Focus chip |
| `Space` | Toggle check | Select option | Toggle on/off | Toggle selection |
| `Arrow keys` | — | Navigate group | — | — |
| `Enter` | — | — | Toggle on/off | Toggle selection |

### Screen Reader Behavior

- Checkbox announces "checked" / "unchecked" state on toggle
- Radio announces "selected" + label text
- Switch announces "on" / "off" via `role="switch"`
- Indeterminate checkbox announces "mixed" state
- Disabled controls announced as "dimmed" or "disabled"

### WCAG AA Compliance

All 231 checks (7 hues x 5 modes x 4 controls x multiple tests) pass WCAG AA:

- **Control border**: ≥ 3.0:1 for unchecked borders on surface
- **Check/dot icon**: ≥ 3.0:1 for non-text indicator on fill
- **Track contrast**: ≥ 3.0:1 for switch track on surface
- **Chip text**: ≥ 4.5:1 for chip label text on surface
- **Chip border**: ≥ 3.0:1 for chip outline on surface
- **231/231 pass, 0 failures**

---

## Dark Surface Depth Rules (Modes 2 & 4)

Per `skill-depth-tokens.md`, selection controls on dark surfaces use flat-layered aesthetics:

| Property | Value | Reason |
|---|---|---|
| Checkbox `border-radius` | `3px` (M2/M4) | Capped per depth tokens |
| Radio `border-radius` | `2px` (M2/M4) | Flat, tool-palette feel |
| Chip `border-radius` | `3px` (M2/M4) | Square chips on dark surfaces |
| Checkbox fill (M2) | `hue.50` | Button-like filled style, light on dark |
| Checkbox fill (M4) | `hue.50` | Button-like filled style, light on dark |
| Checkbox border (M2) | `hue.300` | ≥7.5:1 contrast vs black |
| Checkbox border (M4) | `hue.300` | ≥6.0:1 contrast vs hue.800 |
| Checkbox checkmark (M2/M4) | `#0A0A0A` | Dark mark on light fill |
| Focus ring | `box-shadow: 0 0 0 2px` | Only permitted box-shadow, `:focus-visible` only |
| Disabled | Palette `hue.200` bg | No opacity — uses explicit palette colors |

---

## File Structure

| File | Purpose |
|---|---|
| `src/mcperception-components.css` | Selection control CSS within `@layer components` |
| `src/demo/selection.html` | Self-contained demo showing all 210+ variants |
| `src/demo/selection.README.md` | This documentation file |
| `src/demo/selection-wcag-verify.js` | WCAG AA verification script (231 checks) |
