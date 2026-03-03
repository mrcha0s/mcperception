# Data Tables — Perception Bootstrap

Surface-mode-aware data tables with 210 variants (7 hues x 5 modes x 6 sizes). Supports striped rows/columns, hover highlights, bordered/borderless styles, sortable headers, semantic row coloring, and responsive overflow.

## Quick Start

```html
<link rel="stylesheet" href="dist/mcperception.css">

<div data-mode="2">
  <table class="mc-table" data-hue="blue">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Status</th>
        <th scope="col">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice Johnson</td>
        <td>Active</td>
        <td>$1,200.00</td>
      </tr>
      <tr>
        <td>Bob Smith</td>
        <td>Pending</td>
        <td>$850.00</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## Props (HTML Attributes & Classes)

### Table Element (`<table>`)

| Attribute / Class | Type | Values | Default | Description |
|---|---|---|---|---|
| `data-hue` | attribute | `neutral`, `red`, `green`, `blue`, `yellow`, `magenta`, `teal` | (required) | Color hue |
| `data-mode` | attribute (ancestor) | `1`, `2`, `3`, `4`, `5` | `2` (dark) | Surface mode — set on parent |
| **Size** (class) | class | `mc-table-xs`, `mc-table-sm`, _(md default)_, `mc-table-lg`, `mc-table-xl`, `mc-table-xxl` | `md` | Size tier |
| `mc-table-striped` | class | — | — | Zebra-striped rows (even rows) |
| `mc-table-striped-columns` | class | — | — | Zebra-striped columns |
| `mc-table-hover` | class | — | — | Highlight rows on hover |
| `mc-table-bordered` | class | — | — | Borders on all sides of cells |
| `mc-table-borderless` | class | — | — | Remove all borders |
| `mc-table-sortable` | class | — | — | Sortable column headers (cursor, indicators) |
| `mc-table-caption-top` | class | — | — | Position caption above table instead of below |

### Row Element (`<tr>`)

| Attribute / Class | Type | Values | Default | Description |
|---|---|---|---|---|
| `mc-table-active` | class | — | — | Selected/active row highlight with left accent border |
| `mc-table-row-neutral` | class | — | — | Neutral semantic row color |
| `mc-table-row-red` | class | — | — | Red semantic row color (danger/error) |
| `mc-table-row-green` | class | — | — | Green semantic row color (success) |
| `mc-table-row-blue` | class | — | — | Blue semantic row color (info/primary) |
| `mc-table-row-yellow` | class | — | — | Yellow semantic row color (warning) |
| `mc-table-row-magenta` | class | — | — | Magenta semantic row color (premium) |
| `mc-table-row-teal` | class | — | — | Teal semantic row color (secondary info) |

### Header Cell (`<th>`)

| Attribute / Class | Type | Values | Default | Description |
|---|---|---|---|---|
| `mc-table-sort-asc` | class | — | — | Ascending sort direction indicator |
| `mc-table-sort-desc` | class | — | — | Descending sort direction indicator |

### Other Elements

| Attribute / Class | Element | Description |
|---|---|---|
| `mc-table-group-divider` | `<tbody>` | Thicker border between `<thead>` and `<tbody>` |
| `mc-table-responsive` | `<div>` (wrapper) | Horizontal scroll on overflow for narrow viewports |

---

## Size Scale

| Size | Class | Font | Cell Padding (Y x X) | Min Row Height |
|---|---|---|---|---|
| xs | `mc-table-xs` | 11px | 4px 8px | 24px |
| sm | `mc-table-sm` | 12px | 6px 12px | 30px |
| md | _(default)_ | 14px | 8px 16px | 36px |
| lg | `mc-table-lg` | 16px | 10px 20px | 44px |
| xl | `mc-table-xl` | 18px | 12px 24px | 52px |
| xxl | `mc-table-xxl` | 20px | 14px 28px | 60px |

---

## Surface Mode Usage

All tables inherit `data-mode` from ancestor containers.

### Mode 1 — White Surface (`#FFFFFF`)

```html
<div data-mode="1" style="background:#FFFFFF; padding:1rem;">
  <table class="mc-table mc-table-striped mc-table-hover" data-hue="blue">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Role</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice Johnson</td>
        <td>Engineer</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Bob Smith</td>
        <td>Designer</td>
        <td>Pending</td>
      </tr>
    </tbody>
  </table>
</div>
```

- Header background: `hue.100`
- Header text: `hue.800`
- Cell text: `#0A0A0A`
- Borders: `hue.400`
- Striped rows: `hue.50`
- Hover row: `hue.50`
- Active row accent: `hue.500` left border

### Mode 2 — Black Surface (`#0A0A0A`)

```html
<div data-mode="2" style="background:#0A0A0A; padding:1rem;">
  <table class="mc-table mc-table-striped mc-table-hover" data-hue="blue">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Role</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice Johnson</td>
        <td>Engineer</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Bob Smith</td>
        <td>Designer</td>
        <td>Pending</td>
      </tr>
    </tbody>
  </table>
</div>
```

- Header background: `hue.800`
- Header text: `hue.300`
- Cell text: `neutral.100` (`#e1e1e1`)
- Header border-bottom: `hue.400`
- Cell borders: `hue.500`
- Striped rows: `hue.900`
- Hover row: `hue.800`
- Active row accent: `hue.400` left border

### Mode 3 — Light Hue Surface (`hue.100`)

```html
<div data-mode="3" style="background:var(--color-p-green-100); padding:1rem;">
  <table class="mc-table mc-table-striped mc-table-hover" data-hue="green">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Role</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice Johnson</td>
        <td>Engineer</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Bob Smith</td>
        <td>Designer</td>
        <td>Pending</td>
      </tr>
    </tbody>
  </table>
</div>
```

- Header background: `hue.200`
- Header text: `hue.800`
- Cell text: `#0A0A0A`
- Borders: `hue.400`
- Striped rows: `hue.50`
- Hover row: `hue.200`
- Active row accent: `hue.600` left border

### Mode 4 — Dark Hue Surface (`hue.800`)

```html
<div data-mode="4" style="background:var(--color-p-red-800); padding:1rem;">
  <table class="mc-table mc-table-striped mc-table-hover" data-hue="red">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Role</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice Johnson</td>
        <td>Engineer</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Bob Smith</td>
        <td>Designer</td>
        <td>Pending</td>
      </tr>
    </tbody>
  </table>
</div>
```

- Header background: `hue.900`
- Header text: `hue.300`
- Cell text: `#FFFFFF`
- Borders: `hue.400`
- Striped rows: `hue.900`
- Hover row: `hue.700`
- Active row accent: `hue.300` left border

### Mode 5 — Mid Hue Surface (`hue.500`)

```html
<div data-mode="5" style="background:var(--color-p-magenta-500); padding:1rem;">
  <table class="mc-table mc-table-striped mc-table-hover" data-hue="magenta">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Role</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice Johnson</td>
        <td>Engineer</td>
        <td>Active</td>
      </tr>
      <tr>
        <td>Bob Smith</td>
        <td>Designer</td>
        <td>Pending</td>
      </tr>
    </tbody>
  </table>
</div>
```

- Header background: `hue.600`
- Header text: `#FFFFFF`
- Cell text: `#FFFFFF`
- Borders: `#0A0A0A`
- Striped rows: `hue.600`
- Hover row: `hue.600`
- Active row accent: `hue.50` left border

---

## Semantic Hue Mapping

| Semantic | Hue | Example |
|---|---|---|
| Primary | `blue` | `data-hue="blue"` — Default data tables, user lists |
| Success | `green` | `data-hue="green"` — Completed transactions, healthy metrics |
| Danger | `red` | `data-hue="red"` — Error logs, alerts, flagged records |
| Warning | `yellow` | `data-hue="yellow"` — Pending reviews, expiring items |
| Info | `teal` | `data-hue="teal"` — Reference data, informational listings |
| Premium | `magenta` | `data-hue="magenta"` — Premium features, special reports |
| Default | `neutral` | `data-hue="neutral"` — General-purpose tables, admin grids |

---

## Modifier Examples

### Striped Rows

```html
<table class="mc-table mc-table-striped" data-hue="blue">
  <!-- Even rows get a subtle alternating background -->
</table>
```

### Striped Columns

```html
<table class="mc-table mc-table-striped-columns" data-hue="blue">
  <!-- Even columns get a subtle alternating background -->
</table>
```

### Hover Rows

```html
<table class="mc-table mc-table-hover" data-hue="blue">
  <!-- Rows highlight on mouse hover -->
</table>
```

### Bordered

```html
<table class="mc-table mc-table-bordered" data-hue="blue">
  <!-- Borders on all cell edges -->
</table>
```

### Borderless

```html
<table class="mc-table mc-table-borderless" data-hue="blue">
  <!-- No borders anywhere -->
</table>
```

### Combined Modifiers

```html
<table class="mc-table mc-table-striped mc-table-hover mc-table-bordered mc-table-sm" data-hue="green">
  <!-- Striped + hover + bordered + small size -->
</table>
```

---

## Sortable Tables

```html
<table class="mc-table mc-table-sortable" data-hue="blue">
  <thead>
    <tr>
      <th scope="col" class="mc-table-sort-asc" aria-sort="ascending">Name</th>
      <th scope="col" aria-sort="none">Role</th>
      <th scope="col" class="mc-table-sort-desc" aria-sort="descending">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice Johnson</td>
      <td>Engineer</td>
      <td>$1,200.00</td>
    </tr>
  </tbody>
</table>
```

- `mc-table-sortable` on `<table>` enables pointer cursor on headers
- `mc-table-sort-asc` on `<th>` shows ascending arrow indicator
- `mc-table-sort-desc` on `<th>` shows descending arrow indicator
- Always pair with `aria-sort` attribute for accessibility

---

## Semantic Row Coloring

```html
<table class="mc-table" data-hue="neutral">
  <thead>
    <tr>
      <th scope="col">Service</th>
      <th scope="col">Status</th>
      <th scope="col">Uptime</th>
    </tr>
  </thead>
  <tbody>
    <tr class="mc-table-row-green">
      <td>API Server</td>
      <td>Healthy</td>
      <td>99.98%</td>
    </tr>
    <tr class="mc-table-row-yellow">
      <td>CDN</td>
      <td>Degraded</td>
      <td>97.50%</td>
    </tr>
    <tr class="mc-table-row-red">
      <td>Database</td>
      <td>Down</td>
      <td>85.20%</td>
    </tr>
    <tr class="mc-table-active">
      <td>Cache</td>
      <td>Selected</td>
      <td>99.99%</td>
    </tr>
  </tbody>
</table>
```

- Row color classes override the table's `data-hue` for that row
- `mc-table-active` adds a left accent border and subtle background highlight
- Semantic row colors adapt to the current surface mode

---

## Responsive Table

```html
<div class="mc-table-responsive">
  <table class="mc-table" data-hue="blue">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Department</th>
        <th scope="col">Location</th>
        <th scope="col">Status</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td>Alice Johnson</td>
        <td>alice@example.com</td>
        <td>Engineering</td>
        <td>New York</td>
        <td>Active</td>
        <td>Edit</td>
      </tr>
    </tbody>
  </table>
</div>
```

- Wrap the table in a `<div class="mc-table-responsive">` container
- Enables horizontal scrolling when the table overflows its container
- Preserves all table styling and interactivity within the scrollable area

---

## Caption

```html
<table class="mc-table" data-hue="blue">
  <caption>Q4 2025 Revenue by Region</caption>
  <thead>
    <tr>
      <th scope="col">Region</th>
      <th scope="col">Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>North America</td>
      <td>$4.2M</td>
    </tr>
  </tbody>
</table>
```

### Caption at Top

```html
<table class="mc-table mc-table-caption-top" data-hue="blue">
  <caption>Q4 2025 Revenue by Region</caption>
  <!-- ... -->
</table>
```

- By default, `<caption>` renders below the table
- Add `mc-table-caption-top` to position the caption above the table

---

## Accessibility

### Semantic HTML

- Always use `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`
- Use `<th scope="col">` for column headers and `<th scope="row">` for row headers
- Include a `<caption>` element describing the table's purpose
- For complex tables, use `headers` attribute on `<td>` to associate with `<th>` ids

### ARIA Usage

- Sortable columns: use `aria-sort="ascending"`, `aria-sort="descending"`, or `aria-sort="none"` on `<th>`
- If the table is inside a scrollable container, add `tabindex="0"` and `role="region"` with `aria-label` on the wrapper
- Active/selected rows: use `aria-selected="true"` on `<tr>`
- For tables used as grids with interactive cells: use `role="grid"` and `role="gridcell"`

### Keyboard Navigation

| Key | Behavior |
|---|---|
| `Tab` | Move focus into / out of the table |
| `Arrow keys` | Navigate between cells (when `role="grid"` is used) |
| `Enter` / `Space` | Activate sort on sortable column headers |
| `Home` / `End` | Jump to first / last cell in row (grid mode) |

### Screen Reader Behavior

- Table caption is announced when the table receives focus
- Column headers are announced when navigating to cells in that column
- Sort direction is announced via `aria-sort` attribute changes
- Semantic row colors should be paired with visible text indicators (not color-only)
- Active rows announced via `aria-selected` state

### WCAG AA Compliance

All 238 hue x mode color pairings pass WCAG AA (verified by `table-wcag-verify.js`):

- **Header text on header bg**: >= 4.5:1 for all 35 hue x mode combinations
- **Cell text on surface**: >= 4.5:1 for all modes
- **Cell text on striped bg**: >= 4.5:1 for all modes
- **Cell text on hover bg**: >= 4.5:1 for all modes
- **Border on surface**: >= 3.0:1 non-text UI for all modes
- **Header border on header bg**: >= 3.0:1 non-text UI for all modes
- **Caption text on surface**: >= 4.5:1 for M1-M3, >= 3.0:1 non-text for M4-M5
- **Sort indicator on header bg**: >= 3.0:1 non-text UI
- **Active row accent on surface**: >= 3.0:1 non-text UI
- **Semantic row text on row bg**: >= 4.5:1 for all modes

**Result: 238/238 pairs passed, 0 failures.**

---

## Dark Surface Depth Rules (Modes 2 & 4)

Per `skill-depth-tokens.md`, tables on dark surfaces use flat-layered aesthetics:

| Property | Value | Reason |
|---|---|---|
| Table `border-radius` | N/A (collapsed borders) | Tables use `border-collapse: collapse` |
| Borders | `1px solid` | No thicker decorative borders |
| Header bg (M2) | `hue.800` | Panel layer — flat, no gradients |
| Header bg (M4) | `hue.900` | Deep layer — flat, no gradients |
| Header border (M2) | `hue.400` | Standard border tier for WCAG compliance |
| Cell border (M2) | `hue.500` | Subtle divider on black surface |
| Striped row bg (M2) | `hue.900` | Input/inset layer |
| Striped row bg (M4) | `hue.900` | Input/inset layer |
| Hover row bg (M2) | `hue.800` | Raised layer |
| Hover row bg (M4) | `hue.700` | Raised layer |
| No gradients | — | Flat surfaces only on M2/M4 |
| No box-shadows | — | Except focus ring: `0 0 0 1.5px` |
| Focus ring | `box-shadow: 0 0 0 1.5px` | Only permitted box-shadow, `:focus-visible` only |

---

## File Structure

| File | Purpose |
|---|---|
| `src/mcperception-components.css` | Table CSS within `@layer components` |
| `src/demo/table.html` | Self-contained demo showing all 210+ variants |
| `src/demo/table.README.md` | This documentation file |
