# Form & Input Controls — Perception Bootstrap

Surface-mode-aware text inputs, textareas, and selects with 210 variants per control (7 hues x 5 modes x 6 sizes).

## Quick Start

```html
<link rel="stylesheet" href="dist/mcperception.css">

<div class="mc-form-group">
  <label class="mc-label mc-required">Email</label>
  <input type="email" class="mc-input" data-hue="blue" placeholder="you@example.com">
  <div class="mc-help-text">We'll never share your email.</div>
</div>
```

---

## Props (HTML Attributes & Classes)

### Text Input

| Attribute / Class | Type | Values | Default | Description |
|---|---|---|---|---|
| `data-hue` | attribute | `neutral`, `red`, `green`, `blue`, `yellow`, `magenta`, `teal` | (required) | Color hue |
| `data-mode` | attribute (ancestor) | `1`, `2`, `3`, `4`, `5` | `2` (dark) | Surface mode — set on parent |
| **Size** (class) | class | `mc-input-xs`, `mc-input-sm`, _(md default)_, `mc-input-lg`, `mc-input-xl`, `mc-input-xxl` | `md` | Size tier |
| `disabled` | attribute | boolean | — | Disabled state |
| `readonly` | attribute | boolean | — | Read-only state |
| `mc-input-error` | class | — | — | Error state border |
| `mc-input-success` | class | — | — | Success state border |
| `mc-input-warning` | class | — | — | Warning state border |
| `mc-input-mono` | class | — | — | Monospace font variant |

### Textarea

| Attribute / Class | Type | Values | Default | Description |
|---|---|---|---|---|
| `data-hue` | attribute | `neutral`, `red`, `green`, `blue`, `yellow`, `magenta`, `teal` | (required) | Color hue |
| `data-mode` | attribute (ancestor) | `1`, `2`, `3`, `4`, `5` | `2` (dark) | Surface mode — set on parent |
| `mc-textarea-error` | class | — | — | Error state border |
| `mc-textarea-success` | class | — | — | Success state border |
| `mc-textarea-warning` | class | — | — | Warning state border |

### Select

| Attribute / Class | Type | Values | Default | Description |
|---|---|---|---|---|
| `data-hue` | attribute | `neutral`, `red`, `green`, `blue`, `yellow`, `magenta`, `teal` | (required) | Color hue |
| `data-mode` | attribute (ancestor) | `1`, `2`, `3`, `4`, `5` | `2` (dark) | Surface mode — set on parent |
| **Size** (class) | class | `mc-select-xs`, `mc-select-sm`, _(md default)_, `mc-select-lg`, `mc-select-xl`, `mc-select-xxl` | `md` | Size tier |
| `disabled` | attribute | boolean | — | Disabled state |
| `mc-select-error` | class | — | — | Error state border |
| `mc-select-success` | class | — | — | Success state border |
| `mc-select-warning` | class | — | — | Warning state border |

### Supporting Elements

| Class | Description |
|---|---|
| `mc-label` | Form label — mode-aware text color |
| `mc-required` | Appends red asterisk to label |
| `mc-help-text` | Helper text below input — mode-aware |
| `mc-error-text` | Error message text — red, mode-aware |
| `mc-success-text` | Success message text — green, mode-aware |
| `mc-warning-text` | Warning message text — yellow, mode-aware |
| `mc-form-group` | Vertical grouping container |
| `mc-input-group` | Horizontal group for input + addons |
| `mc-input-addon` | Prefix/suffix addon in input group |
| `mc-input-icon-wrapper` | Wrapper for input with icon |
| `mc-input-icon-left` | Left-positioned icon |
| `mc-input-icon-right` | Right-positioned icon |
| `mc-input-has-icon-left` | Adds left padding for icon |
| `mc-input-has-icon-right` | Adds right padding for icon |
| `mc-char-count` | Character count display |

---

## Size Scale

### Input / Select

| Size | Class | Font | Padding | Min Height |
|---|---|---|---|---|
| xs | `mc-input-xs` / `mc-select-xs` | 11px | 4px 8px | 24px |
| sm | `mc-input-sm` / `mc-select-sm` | 12px | 6px 12px | 30px |
| md | _(default)_ | 14px | 8px 16px | 36px |
| lg | `mc-input-lg` / `mc-select-lg` | 16px | 10px 20px | 44px |
| xl | `mc-input-xl` / `mc-select-xl` | 18px | 12px 24px | 52px |
| xxl | `mc-input-xxl` / `mc-select-xxl` | 20px | 14px 28px | 60px |

### Border Radius per Mode

| Size | M1/M3/M5 | M2/M4 (Depth) |
|---|---|---|
| xs | 4px | 2px |
| sm | 5px | 2px |
| md | 6px | 2px |
| lg | 7px | 2px |
| xl | 8px | 2px |
| xxl | 10px | 2px |

---

## Surface Mode Usage

All form controls inherit `data-mode` from ancestor containers.

### Mode 1 — White Surface (`#FFFFFF`)

```html
<div data-mode="1" style="background:#FFFFFF; padding:1rem;">
  <div class="mc-form-group">
    <label class="mc-label mc-required">Name</label>
    <input type="text" class="mc-input" data-hue="blue" placeholder="Enter name">
    <div class="mc-help-text">Your full legal name.</div>
  </div>
</div>
```

- Input bg: `#FFFFFF`, border: `hue.400`, text: `#0A0A0A`
- Focus ring: `hue.500`
- Label: `neutral.600`, Help: `neutral.500`
- Placeholder: `neutral.300`

### Mode 2 — Black Surface (`#0A0A0A`)

```html
<div data-mode="2" style="background:#0A0A0A; padding:1rem;">
  <div class="mc-form-group">
    <label class="mc-label">API Key</label>
    <input type="text" class="mc-input mc-input-mono" data-hue="neutral" placeholder="sk_live_...">
  </div>
</div>
```

- Input bg: `neutral.900`, border: `neutral.500` (3.77:1 vs black), text: `neutral.100`
- Focus ring: `hue.400`
- Label: `neutral.300`, Help: `neutral.400`
- **Depth tokens**: border-radius 2px, flat 1px borders

### Mode 3 — Light Hue Surface (`hue.100`)

```html
<div data-mode="3" style="background:var(--color-p-green-100); padding:1rem;">
  <label class="mc-label">Amount</label>
  <input type="text" class="mc-input" data-hue="green" placeholder="0.00">
</div>
```

- Input bg: `#FFFFFF`, border: `hue.500`, text: `#0A0A0A`
- Focus ring: `hue.600`
- Label: `neutral.700`, Help: `neutral.600`

### Mode 4 — Dark Hue Surface (`hue.800`)

```html
<div data-mode="4" style="background:var(--color-p-red-800); padding:1rem;">
  <label class="mc-label">Threshold</label>
  <input type="text" class="mc-input" data-hue="red" placeholder="Enter value">
</div>
```

- Input bg: `hue.900`, border: `hue.400` (≥3.0:1 vs hue.800), text: `neutral.100`
- Focus ring: `hue.300`
- Label: `neutral.300`, Help: `neutral.300`
- **Depth tokens**: border-radius 2px, flat 1px borders

### Mode 5 — Mid Hue Surface (`hue.500`)

```html
<div data-mode="5" style="background:var(--color-p-magenta-500); padding:1rem;">
  <label class="mc-label">Search</label>
  <input type="text" class="mc-input" data-hue="magenta" placeholder="Search...">
</div>
```

- Input bg: `hue.600`, border: `hue.50`, text: `#FFFFFF`
- Focus ring: `#FFFFFF`
- Label: `neutral.50`, Help: `neutral.50`

---

## Validation States

Each validation state adapts per surface mode:

| State | M1 (White) | M2 (Black) | M3 (Light) | M4 (Dark) | M5 (Mid) |
|---|---|---|---|---|---|
| Error border | `red.500` | `red.400` | `red.600` | `red.300` | `#FFFFFF` |
| Error text | `red.500` | `red.400` | `red.600` | `red.300` | `#FFFFFF` |
| Success border | `green.500` | `green.400` | `green.600` | `green.300` | `#FFFFFF` |
| Success text | `green.500` | `green.400` | `green.600` | `green.300` | `#FFFFFF` |
| Warning border | `yellow.500` | `yellow.400` | `yellow.600` | `yellow.300` | `#FFFFFF` |
| Warning text | `yellow.500` | `yellow.400` | `yellow.600` | `yellow.300` | `#FFFFFF` |

```html
<!-- Error -->
<input type="text" class="mc-input mc-input-error" data-hue="blue" value="bad input">
<div class="mc-error-text">Please fix this field</div>

<!-- Success -->
<input type="text" class="mc-input mc-input-success" data-hue="green" value="valid">
<div class="mc-success-text">Looks good!</div>

<!-- Warning -->
<input type="text" class="mc-input mc-input-warning" data-hue="yellow" value="caution">
<div class="mc-warning-text">Consider changing this</div>
```

---

## Semantic Hue Mapping

| Semantic | Hue | Example |
|---|---|---|
| Primary | `blue` | `data-hue="blue"` — Default form fields |
| Success | `green` | `data-hue="green"` — Confirmed, valid inputs |
| Danger | `red` | `data-hue="red"` — Critical fields, deletion |
| Warning | `yellow` | `data-hue="yellow"` — Review needed |
| Premium | `magenta` | `data-hue="magenta"` — Pro features |
| Secondary | `teal` | `data-hue="teal"` — Filters, search |
| Default | `neutral` | `data-hue="neutral"` — General settings |

---

## Form Patterns

### Form Group

```html
<div class="mc-form-group">
  <label class="mc-label mc-required">Field name</label>
  <input type="text" class="mc-input" data-hue="blue" placeholder="...">
  <div class="mc-help-text">Optional helper text</div>
</div>
```

### Input Group with Addon

```html
<div class="mc-input-group">
  <span class="mc-input-addon">https://</span>
  <input type="text" class="mc-input" data-hue="blue" placeholder="example.com">
</div>
```

### Input with Icons

```html
<div class="mc-input-icon-wrapper">
  <span class="mc-input-icon-left">🔍</span>
  <input type="text" class="mc-input mc-input-has-icon-left" data-hue="blue" placeholder="Search...">
</div>
```

### Textarea with Character Count

```html
<textarea class="mc-textarea" data-hue="blue" placeholder="Write..." maxlength="200"></textarea>
<div class="mc-char-count">0 / 200</div>
```

---

## Accessibility

### ARIA Usage

- Use native `<input>`, `<textarea>`, and `<select>` elements
- Every input must have a `<label>` or `aria-label`
- Required fields: use `mc-required` class on label AND `required` attribute on input
- Validation: associate error messages with `aria-describedby`
- Disabled inputs: use native `disabled` attribute

### Keyboard Navigation

| Key | Behavior |
|---|---|
| `Tab` | Move focus to next input |
| `Shift+Tab` | Move focus to previous input |
| `Space` | Open select dropdown |
| `Arrow keys` | Navigate select options |
| `Enter` | Submit form (when focused) |

### Screen Reader Behavior

- Labels are announced on focus
- Required fields announce "required"
- Disabled fields announce "dimmed" or "disabled"
- Error/success/warning text announced via `aria-describedby`

### WCAG AA Compliance

All 322 checks (7 hues x 5 modes x multiple tests per mode) pass WCAG AA:

- **Input text**: ≥ 4.5:1 text on input background
- **Input border**: ≥ 3.0:1 non-text border on surface
- **Focus ring**: ≥ 3.0:1 on surface
- **Label text**: ≥ 4.5:1 on surface
- **Help text**: ≥ 4.5:1 on surface
- **Validation text**: ≥ 4.5:1 error/success/warning on surface
- **322/322 pass, 0 failures**

---

## Dark Surface Depth Rules (Modes 2 & 4)

Per `skill-depth-tokens.md`, form controls on dark surfaces use flat-layered aesthetics:

| Property | Value | Reason |
|---|---|---|
| Input `border-radius` | `2px` | Flat, tool-palette feel |
| Input bg (M2) | `neutral.900` | Inset field per depth layers |
| Input bg (M4) | `hue.900` | Inset field per depth layers |
| Border (M2) | `neutral.500` | ≥3.0:1 contrast vs black |
| Border (M4) | `hue.400` | ≥3.0:1 contrast vs hue.800 |
| Focus ring | `box-shadow: 0 0 0 1.5px` | Only permitted box-shadow |

---

## File Structure

| File | Purpose |
|---|---|
| `src/mcperception-input.css` | Form control CSS within `@layer components` |
| `src/demo/input.html` | Self-contained demo showing all 210+ variants |
| `src/demo/input.README.md` | This documentation file |
| `src/demo/input-wcag-verify.js` | WCAG AA verification script (322 checks) |
