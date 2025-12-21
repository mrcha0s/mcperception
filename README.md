# MC Perception

MC Perception is a function-first design system and color palette built for high-clarity dashboards, trading interfaces, and internal data-dense tools. It follows the principle of **form follows function**, prioritizing readability, precision, and performance over ornamentation.

Although visually minimal — even intentionally "ugly" by aesthetic standards — every decision is correct, calculated, and optimized for fast comprehension under real-world conditions.

---

## Features

- **Engineered Color Palette**
  Carefully calculated contrast ratios for maximum readability and accessibility.

- **Tailwind UI Components**
  Practical, minimal, and predictable building blocks for internal tooling.

- **Data-Dense Design Optimization**
  Built specifically for dashboards, monitoring tools, analytics panels, and trading UIs.

- **Token-Based Architecture**
  Scalable colors, typography, spacing, and layout primitives.

- **Form Follows Function**
  No decoration, no fluff — clarity and correctness above everything.

---

## Philosophy

MC Perception is built around functional clarity. Every color, ratio, and component is intentionally designed to:

- reduce cognitive load
- increase scan speed
- emphasize information hierarchy
- aid high-pressure decision-making

It rejects aesthetic noise and focuses on correctness and comprehension — especially in trading and monitoring environments where readability matters more than visual branding.

---

## Usage

To use MC Perception in your project, include the CDN stylesheet in your HTML:

```html
<link rel="stylesheet" href="https://mrcha0s.github.io/mcperception/src/dist/mcperception.css">
```

This loads the full MC Perception design system, including:

- Tailwind 4.1 utilities
- MC Perception theme tokens
- Color system
- Typography system
- Fully inlined Roboto / Roboto Condensed / Roboto Mono / Roboto Slab fonts
- All UI resets and base styling

No Tailwind installation is required. Everything is precompiled into a single CSS file.

---

## Color Palette

Strict dark mode palette with maximum contrast:

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-mc-dark-gray-900` | #090909 | Page background |
| `bg-mc-dark-gray-800` | #171717 | Panel background |
| `border-mc-dark-gray-700` | #222222 | Borders |
| `bg-mc-dark-gray-600` | #2c2c2c | Button background |
| `border-mc-dark-gray-500` | #373737 | Button border |
| `bg-black` | #000000 | Input background |

Semantic colors for data visualization:

| Class | Usage |
|-------|-------|
| `text-mc-light-green-500` | Positive values, gains |
| `text-mc-light-red-400` | Negative values, losses |
| `text-mc-dark-gray-100` | Muted/secondary text |
| `text-mc-dark-gray-50` | Labels |

Available color families: `gray`, `red`, `green`, `blue`, `yellow`, `purple`, `cyan`

---

## Components

### Buttons

```html
<button class="mc-button mc-button-md mc-button-dark-gray">Default</button>
<button class="mc-button mc-button-md mc-button-primary">Primary</button>
<button class="mc-button mc-button-md mc-button-success">Success</button>
<button class="mc-button mc-button-md mc-button-danger">Danger</button>
<button class="mc-button mc-button-md mc-button-warning">Warning</button>
```

**Sizes:** `mc-button-xs` | `mc-button-sm` | `mc-button-md` | `mc-button-lg` | `mc-button-xl`

**Colors:** `mc-button-dark-[gray|red|green|blue|yellow|purple|cyan]` | `mc-button-light-[color]`

### Inputs

```html
<input class="mc-input mc-input-md mc-input-dark-gray" placeholder="Text input">
<input class="mc-input mc-input-md mc-input-dark-gray mc-input-mono" value="123,456.78">
```

**Sizes:** `mc-input-xs` | `mc-input-sm` | `mc-input-md` | `mc-input-lg` | `mc-input-xl`

**Colors:** `mc-input-dark-[gray|red|green|blue|yellow|purple|cyan]` | `mc-input-light-[color]`

**Modifiers:** `mc-input-mono` (monospace for numbers)

### Select, Checkbox & Radio

```html
<select class="mc-select">
  <option>Option 1</option>
</select>

<input type="checkbox" class="mc-checkbox">
<input type="radio" name="group" class="mc-radio">
```

### Switch / Toggle

```html
<input type="checkbox" class="mc-switch">
<input type="checkbox" class="mc-switch mc-switch-success">
<input type="checkbox" class="mc-switch mc-switch-danger">
```

### Textarea

```html
<textarea class="mc-textarea" placeholder="Enter text..."></textarea>
<textarea class="mc-textarea mc-textarea-mono"></textarea>
```

### Input Group

```html
<div class="mc-input-group">
  <span class="mc-input-addon">$</span>
  <input class="mc-input mc-input-md mc-input-dark-gray" value="100.00">
  <span class="mc-input-addon">USD</span>
</div>
```

### Panels

```html
<div class="mc-panel">
  <div class="mc-panel-header">
    <span class="mc-panel-title">Title</span>
  </div>
  <div class="mc-panel-body">
    <p class="mc-panel-subtitle">Subtitle</p>
    Content here
  </div>
</div>
```

**Colors:** `mc-panel-dark-[gray|red|green|blue|yellow|purple|cyan]`

**Variants:** `mc-panel-[color]-bevel` | `mc-panel-[color]-emboss`

### Badges

```html
<span class="mc-badge mc-badge-success">Success</span>
<span class="mc-badge mc-badge-danger">Danger</span>
<span class="mc-badge mc-badge-warning">Warning</span>
<span class="mc-badge mc-badge-info">Info</span>
```

### Alerts

```html
<div class="mc-alert mc-alert-success">Success message</div>
<div class="mc-alert mc-alert-danger">Error message</div>
<div class="mc-alert mc-alert-warning">Warning message</div>
<div class="mc-alert mc-alert-info">Info message</div>
```

### Tabs

```html
<div class="mc-tabs">
  <div class="mc-tab active">Tab 1</div>
  <div class="mc-tab">Tab 2</div>
  <div class="mc-tab">Tab 3</div>
</div>
```

### Tables

```html
<table class="mc-table">
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Price</th>
      <th>Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>BTC/USD</td>
      <td>43,250.00</td>
      <td class="mc-text-positive">+2.45%</td>
    </tr>
  </tbody>
</table>
```

### Progress Bars

```html
<div class="mc-progress">
  <div class="mc-progress-bar mc-progress-bar-success" style="width: 75%;"></div>
</div>
```

**Colors:** `mc-progress-bar-success` | `mc-progress-bar-danger` | `mc-progress-bar-warning` | `mc-progress-bar-info`

### Utilities

```html
<div class="mc-divider"></div>
<div class="mc-card">Card content</div>

<div class="mc-button-group">
  <button class="mc-button mc-button-sm mc-button-dark-gray">1D</button>
  <button class="mc-button mc-button-sm mc-button-primary">1W</button>
  <button class="mc-button mc-button-sm mc-button-dark-gray">1M</button>
</div>
```

### Text Utilities

```html
<span class="mc-text-positive">+2.45%</span>
<span class="mc-text-negative">-1.23%</span>
<span class="mc-text-muted">Secondary text</span>
<span class="mc-text-label">LABEL</span>
```

### Breadcrumb

```html
<nav class="mc-breadcrumb">
  <a class="mc-breadcrumb-item" href="#">Home</a>
  <span class="mc-breadcrumb-separator">/</span>
  <a class="mc-breadcrumb-item" href="#">Products</a>
  <span class="mc-breadcrumb-separator">/</span>
  <span class="mc-breadcrumb-item active">Details</span>
</nav>
```

### Pagination

```html
<div class="mc-pagination">
  <div class="mc-page disabled">&lt;</div>
  <div class="mc-page active">1</div>
  <div class="mc-page">2</div>
  <div class="mc-page">3</div>
  <div class="mc-page">&gt;</div>
</div>
```

### Spinner

```html
<div class="mc-spinner"></div>
<div class="mc-spinner mc-spinner-sm"></div>
<div class="mc-spinner mc-spinner-lg mc-spinner-success"></div>
```

**Sizes:** `mc-spinner-sm` | `mc-spinner-lg` | `mc-spinner-xl`

**Colors:** `mc-spinner-success` | `mc-spinner-danger` | `mc-spinner-warning`

### List Group

```html
<div class="mc-list-group">
  <div class="mc-list-item">Item 1</div>
  <div class="mc-list-item active">Item 2 (active)</div>
  <div class="mc-list-item">Item 3</div>
</div>
```

### Avatar

```html
<div class="mc-avatar">JD</div>
<div class="mc-avatar mc-avatar-sm">A</div>
<div class="mc-avatar mc-avatar-lg"><img src="photo.jpg"></div>
```

**Sizes:** `mc-avatar-sm` | `mc-avatar-lg` | `mc-avatar-xl`

### Code & Keyboard

```html
<code class="mc-code-inline">npm install</code>
<pre class="mc-code">const x = 42;</pre>
<kbd class="mc-kbd">Ctrl</kbd> + <kbd class="mc-kbd">C</kbd>
```

### Close Button

```html
<span class="mc-close"></span>
<span class="mc-close mc-close-sm"></span>
<span class="mc-close mc-close-lg"></span>
```

### Form Validation

```html
<input class="mc-input mc-input-md mc-input-dark-gray mc-input-error">
<p class="mc-error-text">This field is required</p>

<input class="mc-input mc-input-md mc-input-dark-gray mc-input-success">
<p class="mc-success-text">Looks good!</p>
```

---

## Typography

| Class | Font Family | Usage |
|-------|-------------|-------|
| `font-sans` | Roboto | Default body text |
| `font-condensed` | Roboto Condensed | Buttons, inputs, compact UI |
| `font-mono` | Roboto Mono | Numbers, code, data |
| `font-slab` | Roboto Slab | Headlines |

---

## Demos

- [Component Library Documentation](src/demo/index.html)
- [Component Showcase](src/demo/components.html)
- [Crypto Trading Cards](src/demo/trading-card.html)
- [Orderbook Demo](src/demo/orderbook.html)
- [Panel Variants](src/demo/panel.html)
- [Color Palette](src/demo/color.html)

---

## Roadmap

- [x] Expand Tailwind component catalog
- [x] Provide complete design tokens
- [ ] Documentation site
- [ ] Example dashboard templates
- [ ] Theme variations (dark/light/system)
- [ ] Accessibility presets

---

## License

MC Perception is free for personal or commercial use, under a permissive Apache License 2.0.  
