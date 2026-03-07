# MC Perception CSS — Usage Guide for AI Assistants

> **What is this?** A self-contained instruction file for any AI coding assistant (Claude Code, Cursor, etc.) building UI in projects that use the MC Perception design system. Download this file into your project root as `CLAUDE.md` or reference it in your AI assistant's context.

> **CSS file:** Get `mcperception.css` from the [Perception repository](https://github.com/mrcha0s/mcperception) `src/dist/mcperception.css`. Link it in your HTML/Blazor/React app. All `mc-*` classes come from this single CSS file.

---

## MANDATORY RULES — READ BEFORE ANY UI WORK

### Rule 1: Only Use `mc-*` CSS Classes
Every UI element MUST use Perception CSS classes. Do NOT use Bootstrap (`btn`, `card`, `form-control`), Tailwind (`bg-blue-500`, `p-4`), or any other framework classes. Do NOT write custom CSS for things `mc-*` classes already provide.

### Rule 2: Only Palette Colors
If you write ANY inline style or custom CSS, use ONLY hex colors from the palette below. No arbitrary hex, rgb, hsl, or named CSS colors. No `rgba()`. No `opacity` tricks on colors. No `color-mix()`. Pure black is `#0A0A0A`, never `#000000`.

### Rule 3: All 5 Surface Modes
Every page/component must support rendering on all 5 surface backgrounds:
- **Mode 1** — White `#FFFFFF`
- **Mode 2** — Black `#0A0A0A`
- **Mode 3** — Light Hue `{hue}.100`
- **Mode 4** — Dark Hue `{hue}.800`
- **Mode 5** — Mid Hue `{hue}.500`

### Rule 4: All 7 Hues
Supported hues: `neutral`, `red`, `green`, `blue`, `yellow`, `magenta`, `teal`

### Rule 5: WCAG AA — Zero Tolerance
- Small text (< 18px bold / < 24px regular): **>= 4.5:1** contrast ratio
- Large text (>= 18px bold / >= 24px regular): **>= 3.0:1**
- Non-text UI (borders, icons, focus rings): **>= 3.0:1**

### Rule 6: Dark Surface Depth (Modes 2 & 4)
No gradients. No box-shadows. No bevels. Depth comes from surface layering + 1px borders only. `border-radius` capped at 3px. Buttons use `font-weight: 400`, sentence case (not bold, not uppercase).

---

## COMPLETE COLOR PALETTE

These are the ONLY permitted colors. Every hex value in your code must appear in this list.

### Special
| Name | Hex |
|------|-----|
| White | `#FFFFFF` |
| Black | `#0A0A0A` |

> `#000000` is NEVER used. Always use `#0A0A0A`.

### Neutral
| Step | Hex | vs White | vs Black |
|------|-----|----------|----------|
| 50 | `#FAFAFA` | 1.04:1 | 18.97:1 |
| 100 | `#E1E1E1` | 1.31:1 | 15.14:1 |
| 200 | `#C3C3C3` | 1.76:1 | 11.23:1 |
| 300 | `#A0A0A0` | 2.61:1 | 7.57:1 |
| 400 | `#7F7F7F` | 4.00:1 | 4.94:1 |
| 500 | `#6C6C6C` | 5.25:1 | 3.77:1 |
| 600 | `#515151` | 7.94:1 | 2.49:1 |
| 700 | `#373737` | 11.90:1 | 1.66:1 |
| 800 | `#222222` | 15.91:1 | 1.24:1 |
| 900 | `#090909` | 19.91:1 | 1.01:1 |

### Red
| Step | Hex | vs White | vs Black |
|------|-----|----------|----------|
| 50 | `#FFFAFA` | 1.03:1 | 19.14:1 |
| 100 | `#FFD8D8` | 1.31:1 | 15.15:1 |
| 200 | `#FFAFAF` | 1.75:1 | 11.32:1 |
| 300 | `#FF7474` | 2.62:1 | 7.54:1 |
| 400 | `#FF0000` | 4.00:1 | 4.95:1 |
| 500 | `#DA0000` | 5.27:1 | 3.75:1 |
| 600 | `#A70000` | 7.95:1 | 2.49:1 |
| 700 | `#740000` | 12.05:1 | 1.64:1 |
| 800 | `#4D0000` | 15.96:1 | 1.24:1 |
| 900 | `#1C0000` | 20.01:1 | 1.01:1 |

### Green
| Step | Hex | vs White | vs Black |
|------|-----|----------|----------|
| 50 | `#EBFFEB` | 1.05:1 | 18.89:1 |
| 100 | `#62FF62` | 1.31:1 | 15.08:1 |
| 200 | `#00E400` | 1.74:1 | 11.41:1 |
| 300 | `#00BA00` | 2.62:1 | 7.56:1 |
| 400 | `#009400` | 4.01:1 | 4.94:1 |
| 500 | `#007F00` | 5.20:1 | 3.80:1 |
| 600 | `#005F00` | 7.96:1 | 2.49:1 |
| 700 | `#004000` | 12.12:1 | 1.63:1 |
| 800 | `#002900` | 15.94:1 | 1.24:1 |
| 900 | `#000C00` | 19.95:1 | 1.01:1 |

### Blue
| Step | Hex | vs White | vs Black |
|------|-----|----------|----------|
| 50 | `#F8F8FF` | 1.06:1 | 18.73:1 |
| 100 | `#DEDEFF` | 1.31:1 | 15.08:1 |
| 200 | `#BEBEFF` | 1.75:1 | 11.31:1 |
| 300 | `#9494FF` | 2.65:1 | 7.48:1 |
| 400 | `#6D6DFF` | 3.98:1 | 4.98:1 |
| 500 | `#5252FF` | 5.24:1 | 3.78:1 |
| 600 | `#1919FF` | 8.00:1 | 2.47:1 |
| 700 | `#0000BF` | 11.98:1 | 1.65:1 |
| 800 | `#000081` | 15.95:1 | 1.24:1 |
| 900 | `#000035` | 19.97:1 | 1.01:1 |

### Yellow
| Step | Hex | vs White | vs Black |
|------|-----|----------|----------|
| 50 | `#FFFF97` | 1.05:1 | 18.86:1 |
| 100 | `#E8E800` | 1.31:1 | 15.06:1 |
| 200 | `#CACA00` | 1.76:1 | 11.28:1 |
| 300 | `#A6A600` | 2.60:1 | 7.61:1 |
| 400 | `#838300` | 4.03:1 | 4.91:1 |
| 500 | `#6F6F00` | 5.32:1 | 3.72:1 |
| 600 | `#545400` | 7.94:1 | 2.49:1 |
| 700 | `#383800` | 12.11:1 | 1.63:1 |
| 800 | `#242400` | 15.82:1 | 1.25:1 |
| 900 | `#090900` | 19.99:1 | 1.01:1 |

### Magenta
| Step | Hex | vs White | vs Black |
|------|-----|----------|----------|
| 50 | `#FFF7FF` | 1.05:1 | 18.86:1 |
| 100 | `#FFD2FF` | 1.32:1 | 15.00:1 |
| 200 | `#FFA4FF` | 1.75:1 | 11.32:1 |
| 300 | `#FF55FF` | 2.63:1 | 7.54:1 |
| 400 | `#E000E0` | 4.00:1 | 4.95:1 |
| 500 | `#C000C0` | 5.25:1 | 3.77:1 |
| 600 | `#910091` | 8.04:1 | 2.46:1 |
| 700 | `#660066` | 11.95:1 | 1.66:1 |
| 800 | `#420042` | 16.03:1 | 1.24:1 |
| 900 | `#170017` | 20.02:1 | 1.01:1 |

### Teal
| Step | Hex | vs White | vs Black |
|------|-----|----------|----------|
| 50 | `#E3FFFF` | 1.05:1 | 18.87:1 |
| 100 | `#00F9F9` | 1.32:1 | 15.01:1 |
| 200 | `#00DADA` | 1.74:1 | 11.35:1 |
| 300 | `#00B2B2` | 2.62:1 | 7.55:1 |
| 400 | `#008E8E` | 3.99:1 | 4.96:1 |
| 500 | `#007979` | 5.24:1 | 3.78:1 |
| 600 | `#005A5A` | 8.05:1 | 2.46:1 |
| 700 | `#003D3D` | 12.10:1 | 1.64:1 |
| 800 | `#002727` | 15.92:1 | 1.24:1 |
| 900 | `#000B0B` | 19.95:1 | 1.01:1 |

### Palette as JSON (for programmatic use)
```json
{
  "white": "#FFFFFF",
  "black": "#0A0A0A",
  "neutral": { "50":"#FAFAFA","100":"#E1E1E1","200":"#C3C3C3","300":"#A0A0A0","400":"#7F7F7F","500":"#6C6C6C","600":"#515151","700":"#373737","800":"#222222","900":"#090909" },
  "red":     { "50":"#FFFAFA","100":"#FFD8D8","200":"#FFAFAF","300":"#FF7474","400":"#FF0000","500":"#DA0000","600":"#A70000","700":"#740000","800":"#4D0000","900":"#1C0000" },
  "green":   { "50":"#EBFFEB","100":"#62FF62","200":"#00E400","300":"#00BA00","400":"#009400","500":"#007F00","600":"#005F00","700":"#004000","800":"#002900","900":"#000C00" },
  "blue":    { "50":"#F8F8FF","100":"#DEDEFF","200":"#BEBEFF","300":"#9494FF","400":"#6D6DFF","500":"#5252FF","600":"#1919FF","700":"#0000BF","800":"#000081","900":"#000035" },
  "yellow":  { "50":"#FFFF97","100":"#E8E800","200":"#CACA00","300":"#A6A600","400":"#838300","500":"#6F6F00","600":"#545400","700":"#383800","800":"#242400","900":"#090900" },
  "magenta": { "50":"#FFF7FF","100":"#FFD2FF","200":"#FFA4FF","300":"#FF55FF","400":"#E000E0","500":"#C000C0","600":"#910091","700":"#660066","800":"#420042","900":"#170017" },
  "teal":    { "50":"#E3FFFF","100":"#00F9F9","200":"#00DADA","300":"#00B2B2","400":"#008E8E","500":"#007979","600":"#005A5A","700":"#003D3D","800":"#002727","900":"#000B0B" }
}
```

---

## SEMANTIC HUE MAPPING

| Semantic Role | Hue | data-hue | Usage |
|---------------|-----|----------|-------|
| Primary | blue | `"blue"` | Default actions, links, primary buttons |
| Success | green | `"green"` | Confirmations, positive states, completion |
| Danger | red | `"red"` | Errors, destructive actions, alerts |
| Warning | yellow | `"yellow"` | Caution, attention needed, pending |
| Info | teal | `"teal"` | Informational, neutral notifications |
| Premium | magenta | `"magenta"` | Special features, premium tier, highlights |
| Default | neutral | `"neutral"` | Chrome, borders, secondary elements |

---

## MODE PAIRING TABLE

`{hue}` = the active hue. When hue=blue, `{hue}.500` = `#5252FF`.

| Role | M1 White | M2 Black | M3 Light(100) | M4 Dark(800) | M5 Mid(500) |
|------|----------|----------|---------------|--------------|-------------|
| Surface BG | `#FFFFFF` | `#0A0A0A` | `{hue}.100` | `{hue}.800` | `{hue}.500` |
| Primary Text | `{hue}.900` | `#FFFFFF` | `{hue}.900` | `#FFFFFF` | `#FFFFFF` |
| Secondary Text | `#0A0A0A` | `{hue}.50` | `#0A0A0A` | `{hue}.50` | `{hue}.50` |
| Accent / Link | `{hue}.500` | `{hue}.400` | `{hue}.600` | `{hue}.300` | `{hue}.50` |
| Btn Fill BG | `{hue}.500` | `{hue}.50` | `{hue}.600` | `{hue}.50` | `{hue}.50` |
| Btn Fill Text | `#FFFFFF` | `#0A0A0A` | `#FFFFFF` | `#0A0A0A` | `#0A0A0A` |
| Outline / Ring | `{hue}.500` | `{hue}.400` | `{hue}.600` | `{hue}.300` | `{hue}.50` |
| Icons | `{hue}.500` | `{hue}.400` | `{hue}.600` | `{hue}.300` | `{hue}.50` |
| Divider | `{hue}.400` | `{hue}.500` | `{hue}.500` | `{hue}.500` | `#0A0A0A` |

### Interactive States per Mode

| State | M1 | M2 | M3 | M4 | M5 |
|-------|----|----|----|----|-----|
| Default | step 500 | step 400 | step 600 | step 300 | step 50 |
| Hover | step 600 | step 300 | step 700 | step 200 | White |
| Pressed | step 700 | step 200 | step 800 | step 100 | White |
| Focus | step 500 ring | step 400 ring | step 600 ring | step 300 ring | White ring |
| Disabled | step 300 @lg | step 500 @lg | step 400 @lg | step 500 @lg | step 300 @lg |

---

## DARK SURFACE DEPTH SYSTEM (Modes 2 & 4 Only)

### Surface Layers

| Layer | M2 Black | M4 Dark Hue | When |
|-------|----------|-------------|------|
| Deep | `#0A0A0A` | `{hue}.900` | Page background |
| Panel | `neutral.800` (`#222222`) | `{hue}.800` | Cards, panels, dialogs |
| Raised | `neutral.700` (`#373737`) | `{hue}.700` | Hover, active tabs |
| Input | `neutral.900` (`#090909`) | `{hue}.900` | Text inputs, dropdowns |

### Border Tiers

| Tier | M2 Black | M4 Dark Hue | When |
|------|----------|-------------|------|
| Standard | `neutral.600` (`#515151`) | `{hue}.600` | Buttons, inputs, checkboxes |
| Subtle | `neutral.700` (`#373737`) | `{hue}.700` | Panel edges, dividers |
| Focus | `{hue}.400` | `{hue}.300` | Focus / active state |

### Text on Dark Surfaces

| Role | M2 Value | M4 Value | Usage |
|------|----------|----------|-------|
| Primary | `neutral.100` (`#E1E1E1`) | `neutral.100` (`#E1E1E1`) | Headings, body, input values |
| Secondary | `neutral.300` (`#A0A0A0`) | `neutral.300` (`#A0A0A0`) | Labels, captions, helper |
| Muted | `neutral.500` (`#6C6C6C`) | `{hue}.500` | Placeholder, disabled (non-text only) |
| Accent | `{hue}.400` | `{hue}.300` | Links, active items |

### Dark Surface Rules
- All backgrounds: flat solid palette colors only
- All borders: 1px solid (exceptions: 2px tab underline, 2px card accent left border)
- `border-radius`: max 3px on controls (exception: circles for toggles/radios)
- Buttons: `font-weight: 400`, sentence case, `border-radius: 3px`
- Inputs: dark inset background (Input layer), bordered box (no floating labels, no underline style)
- Only permitted `box-shadow`: `0 0 0 1.5px {focus-color}` for focus rings
- NO gradients, NO drop shadows, NO `backdrop-filter`, NO `text-shadow`

---

## SIZE SCALE

| Size | Font | Padding Y x X | Radius (M1/3/5) | Radius (M2/4) | Icon | Min Height |
|------|------|---------------|------------------|----------------|------|------------|
| xs | 11px | 4 x 8 | 4px | 3px | 12px | 24px |
| sm | 12px | 6 x 12 | 5px | 3px | 14px | 30px |
| md | 14px | 8 x 16 | 6px | 3px | 16px | 36px |
| lg | 16px | 10 x 20 | 7px | 3px | 20px | 44px |
| xl | 18px | 12 x 24 | 8px | 3px | 24px | 52px |
| xxl | 20px | 14 x 28 | 10px | 3px | 28px | 60px |

---

## DATA ATTRIBUTES

### `data-hue`
Set on any container to apply a hue color. All `mc-*` children inherit the hue.
```html
<div data-hue="blue"> ... </div>
```
Values: `neutral`, `red`, `green`, `blue`, `yellow`, `magenta`, `teal`

### `data-mode`
Set on a container to declare which surface mode it sits on. Required for correct color pairing.
```html
<div data-mode="2" style="background-color: #0A0A0A;"> ... </div>
```
Values: `1`, `2`, `3`, `4`, `5`

---

## COMPLETE CSS CLASS REFERENCE

### Layout & Containers
- `mc-container`, `mc-container-fluid`
- `mc-page`

### Panels
- `mc-panel`, `mc-panel-xs` to `mc-panel-xxl`
- `mc-panel-header`, `mc-panel-title`, `mc-panel-subtitle`, `mc-panel-label`
- `mc-panel-bevel`, `mc-panel-emboss`

### Dividers
- `mc-divider`, `mc-hr`, `mc-hr-thick`

### Buttons
- `mc-btn` — base button (used in groups)
- `mc-button` — standalone button base
- `mc-button-filled`, `mc-button-outline`, `mc-button-ghost`, `mc-button-tonal` — variants
- `mc-button-xs` to `mc-button-xxl` — sizes
- `mc-button-icon-only`, `mc-button-icon-left`, `mc-button-icon-right`
- `mc-button-loading`, `mc-button-toggle`

**IMPORTANT — Button Size Classes That DO NOT EXIST:**
`mc-btn-xs`, `mc-btn-sm`, `mc-btn-lg`, `mc-btn-xl`, `mc-btn-xxl` — NONE of these exist as standalone classes. They silently do nothing. Size buttons through:
- Button groups: `mc-btn-group-{size}` wrapping `mc-btn` children
- Or use `mc-button-{size}` for standalone buttons

### Button Groups
- `mc-btn-group`, `mc-btn-group-xs` to `mc-btn-group-xxl`
- `mc-btn-group-vertical`, `mc-btn-toolbar`
- `mc-button-group`

### Forms & Inputs
- `mc-input`, `mc-input-xs` to `mc-input-xxl`
- `mc-input-group`, `mc-input-addon`
- `mc-input-icon-wrapper`, `mc-input-icon-left`, `mc-input-icon-right`, `mc-input-has-icon-left`, `mc-input-has-icon-right`
- `mc-input-icon-action`
- `mc-input-mono`
- `mc-input-error`, `mc-input-success`, `mc-input-warning`
- `mc-select`, `mc-select-xs` to `mc-select-xxl`
- `mc-select-error`, `mc-select-success`, `mc-select-warning`
- `mc-textarea`, `mc-textarea-error`, `mc-textarea-success`, `mc-textarea-warning`
- `mc-label`, `mc-legend`, `mc-fieldset`, `mc-form-group`
- `mc-help-text`, `mc-error-text`, `mc-success-text`, `mc-warning-text`
- `mc-required`, `mc-char-count`

### Selection Controls
- `mc-checkbox`, `mc-checkbox-xs` to `mc-checkbox-xxl`, `mc-checkbox-error`
- `mc-radio`, `mc-radio-xs` to `mc-radio-xxl`, `mc-radio-error`
- `mc-switch`, `mc-switch-xs` to `mc-switch-xxl`
- `mc-control`, `mc-control-xs` to `mc-control-xxl`
- `mc-control-label`, `mc-control-description`
- `mc-control-group`, `mc-control-group-inline`, `mc-control-group-label`
- `mc-range`, `mc-range-xs` to `mc-range-xxl`
- `mc-range-wrap`, `mc-range-wrap-xs` to `mc-range-wrap-xxl`
- `mc-range-labels`, `mc-range-ticks`, `mc-range-tooltip`

### Chips
- `mc-chip`, `mc-chip-xs` to `mc-chip-xxl`
- `mc-chip-close`, `mc-chip-dismissible`, `mc-chip-group`

### Badges
- `mc-badge`, `mc-badge-xs` to `mc-badge-xxl`
- `mc-badge-filled`, `mc-badge-outline`, `mc-badge-subtle`, `mc-badge-tonal`
- `mc-badge-pill`, `mc-badge-square`
- `mc-badge-dot`, `mc-badge-dot-only`, `mc-badge-counter`, `mc-badge-counter-sm`, `mc-badge-counter-lg`
- `mc-badge-pulse`, `mc-badge-interactive`, `mc-badge-dismissible`
- `mc-badge-close`, `mc-badge-icon`, `mc-badge-wrapper`, `mc-badge-group`

### Alerts
- `mc-alert`, `mc-alert-xs` to `mc-alert-xxl`
- `mc-alert-filled`, `mc-alert-outline`, `mc-alert-dismissible`
- `mc-alert-heading`, `mc-alert-content`, `mc-alert-icon`, `mc-alert-link`, `mc-alert-close`

### Cards
- `mc-card`, `mc-card-xs` to `mc-card-xxl`
- `mc-card-header`, `mc-card-body`, `mc-card-footer`, `mc-card-group`
- `mc-card-title`, `mc-card-subtitle`, `mc-card-text`, `mc-card-link`
- `mc-card-img-top`, `mc-card-img-bottom`, `mc-card-img-overlay`

### Navigation — Navs & Tabs
- `mc-nav`, `mc-nav-xs` to `mc-nav-xxl`
- `mc-nav-tabs`, `mc-nav-pills`, `mc-nav-underline`
- `mc-nav-fill`, `mc-nav-justified`, `mc-nav-vertical`
- `mc-nav-item`, `mc-nav-link`
- `mc-tab-content`, `mc-tab-pane`

### Navigation — Navbar
- `mc-navbar`, `mc-navbar-xs` to `mc-navbar-xxl`
- `mc-navbar-brand`, `mc-navbar-nav`, `mc-navbar-collapse`, `mc-navbar-text`
- `mc-navbar-toggler`, `mc-navbar-toggler-icon`
- `mc-navbar-expand`, `mc-navbar-expand-sm` to `mc-navbar-expand-xxl`
- `mc-navbar-fixed-top`, `mc-navbar-fixed-bottom`, `mc-navbar-sticky-top`

### Navigation — Breadcrumb
- `mc-breadcrumb`, `mc-breadcrumb-xs` to `mc-breadcrumb-xxl`
- `mc-breadcrumb-item`, `mc-breadcrumb-separator`

### Dropdowns
- `mc-dropdown`, `mc-dropdown-xs` to `mc-dropdown-xxl`
- `mc-dropdown-toggle`, `mc-dropdown-toggle-split`
- `mc-dropdown-menu`, `mc-dropdown-menu-end`
- `mc-dropdown-item`, `mc-dropdown-item-text`
- `mc-dropdown-header`, `mc-dropdown-divider`
- `mc-dropdown-center`
- `mc-dropup`, `mc-dropend`, `mc-dropstart`

### Tables
- `mc-table`, `mc-table-xs` to `mc-table-xxl`
- `mc-table-striped`, `mc-table-striped-columns`, `mc-table-hover`
- `mc-table-bordered`, `mc-table-borderless`, `mc-table-compact`
- `mc-table-sortable`, `mc-table-sort-asc`, `mc-table-sort-desc`
- `mc-table-responsive`, `mc-table-active`, `mc-table-caption-top`, `mc-table-group-divider`
- `mc-table-row-neutral`, `mc-table-row-red`, `mc-table-row-green`, `mc-table-row-blue`, `mc-table-row-yellow`, `mc-table-row-magenta`, `mc-table-row-teal`

### List Groups
- `mc-list-group`, `mc-list-group-xs` to `mc-list-group-xxl`
- `mc-list-group-item`, `mc-list-group-item-action`, `mc-list-item`
- `mc-list-group-flush`, `mc-list-group-numbered`
- `mc-list-group-horizontal`, `mc-list-group-horizontal-sm` to `mc-list-group-horizontal-xxl`

### Progress
- `mc-progress`, `mc-progress-xs` to `mc-progress-xxl`
- `mc-progress-bar`, `mc-progress-striped`, `mc-progress-animated`, `mc-progress-stacked`

### Spinners
- `mc-spinner-border`, `mc-spinner-grow`, `mc-spinner-ring`, `mc-spinner-dual`
- `mc-spinner-dots`, `mc-spinner-bars`, `mc-spinner-chase`
- `mc-spinner-cube`, `mc-spinner-orbit`, `mc-spinner-ripple`
- `mc-spinner-blocks`, `mc-spinner-slide`
- `mc-spinner-xs` to `mc-spinner-xxl`

### Skeleton Loaders
- `mc-skeleton`, `mc-skeleton-text`, `mc-skeleton-circle`

### Pagination
- `mc-pagination`, `mc-pagination-xs` to `mc-pagination-xxl`
- `mc-page-item`, `mc-page-link`

### Stats
- `mc-stat`, `mc-stat-xs` to `mc-stat-xxl`
- `mc-stat-title`, `mc-stat-value`, `mc-stat-desc`, `mc-stat-figure`, `mc-stat-actions`
- `mc-stats`, `mc-stats-vertical`, `mc-stat-centered`

### Code & Typography
- `mc-code`, `mc-code-inline`, `mc-kbd`
- `mc-code-mockup`, `mc-code-mockup-filled`, `mc-code-mockup-xs` to `mc-code-mockup-xxl`
- `mc-code-mockup-line-error`, `mc-code-mockup-line-success`, `mc-code-mockup-line-warning`
- `mc-blockquote`
- `mc-text-h1`, `mc-text-h2`, `mc-text-h3`
- `mc-text-n1`, `mc-text-n2`, `mc-text-n3`
- `mc-text-label`, `mc-text-muted`
- `mc-text-positive`, `mc-text-negative`

### Misc
- `mc-avatar`, `mc-avatar-sm`, `mc-avatar-lg`, `mc-avatar-xl`
- `mc-close`, `mc-close-sm`, `mc-close-lg`
- `mc-tooltip`, `mc-tooltip-content`

---

## USAGE EXAMPLES

### HTML — Basic Page Setup
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/mcperception.css">
    <title>My App</title>
</head>
<body>
    <!-- Mode 1 (light) with blue hue -->
    <div data-hue="blue" data-mode="1" style="background-color: #FFFFFF; min-height: 100vh;">
        <nav class="mc-navbar">
            <span class="mc-navbar-brand">My App</span>
        </nav>
        <main class="mc-container">
            <h1 class="mc-text-h1">Welcome</h1>
            <button class="mc-button mc-button-filled">Get Started</button>
        </main>
    </div>
</body>
</html>
```

### HTML — Dark Mode Page
```html
<div data-hue="blue" data-mode="2" style="background-color: #0A0A0A; min-height: 100vh;">
    <nav class="mc-navbar">
        <span class="mc-navbar-brand">My App</span>
    </nav>
    <main class="mc-container">
        <div class="mc-card">
            <div class="mc-card-header">
                <h5 class="mc-card-title">Dashboard</h5>
            </div>
            <div class="mc-card-body">
                <p class="mc-card-text">Content here</p>
            </div>
        </div>
    </main>
</div>
```

### HTML — Form
```html
<div data-hue="blue" data-mode="1">
    <div class="mc-form-group">
        <label class="mc-label">Email <span class="mc-required">*</span></label>
        <input type="email" class="mc-input" placeholder="Enter email">
        <span class="mc-help-text">We'll never share your email.</span>
    </div>
    <div class="mc-form-group">
        <label class="mc-label">Password</label>
        <input type="password" class="mc-input">
    </div>
    <button class="mc-button mc-button-filled">Submit</button>
</div>
```

### HTML — Alert with Semantic Color
```html
<!-- Success alert -->
<div data-hue="green">
    <div class="mc-alert mc-alert-filled">
        <div class="mc-alert-content">
            <strong class="mc-alert-heading">Success!</strong>
            <p>Your changes have been saved.</p>
        </div>
    </div>
</div>

<!-- Error alert -->
<div data-hue="red">
    <div class="mc-alert mc-alert-filled">
        <div class="mc-alert-content">
            <strong class="mc-alert-heading">Error</strong>
            <p>Something went wrong. Please try again.</p>
        </div>
    </div>
</div>
```

### HTML — Table
```html
<div data-hue="blue" data-mode="1">
    <div class="mc-table-responsive">
        <table class="mc-table mc-table-striped mc-table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Doe</td>
                    <td><span class="mc-badge mc-badge-filled" data-hue="green">Active</span></td>
                    <td>$1,200</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
```

### Blazor / Razor — Component with Hue & Mode
```razor
@* PerceptionCard.razor *@
<div class="mc-card mc-card-@Size" data-hue="@Hue" data-mode="@Mode">
    <div class="mc-card-header">
        <h5 class="mc-card-title">@Title</h5>
    </div>
    <div class="mc-card-body">
        @ChildContent
    </div>
    @if (Footer != null)
    {
        <div class="mc-card-footer">@Footer</div>
    }
</div>

@code {
    [Parameter] public string Hue { get; set; } = "neutral";
    [Parameter] public string Mode { get; set; } = "1";
    [Parameter] public string Size { get; set; } = "md";
    [Parameter] public string Title { get; set; } = "";
    [Parameter] public RenderFragment ChildContent { get; set; }
    [Parameter] public RenderFragment Footer { get; set; }
}
```

### Blazor — Dark Mode Layout
```razor
@* MainLayout.razor *@
<div data-mode="@CurrentMode" data-hue="@CurrentHue"
     style="background-color: @(CurrentMode == "2" ? "#0A0A0A" : "#FFFFFF"); min-height: 100vh;">
    <nav class="mc-navbar">
        <span class="mc-navbar-brand">My App</span>
        <div class="mc-navbar-nav">
            <a class="mc-nav-link" href="/">Home</a>
            <a class="mc-nav-link" href="/dashboard">Dashboard</a>
        </div>
    </nav>
    <main class="mc-container">
        @Body
    </main>
</div>

@code {
    private string CurrentMode { get; set; } = "1";
    private string CurrentHue { get; set; } = "blue";
}
```

### Blazor — Form with Validation
```razor
<EditForm Model="@model" OnValidSubmit="HandleSubmit">
    <DataAnnotationsValidator />
    <div class="mc-form-group" data-hue="blue">
        <label class="mc-label">Name <span class="mc-required">*</span></label>
        <InputText class="@InputClass(nameof(model.Name))" @bind-Value="model.Name" />
        <ValidationMessage For="@(() => model.Name)" />
    </div>
    <button type="submit" class="mc-button mc-button-filled">Save</button>
</EditForm>

@code {
    private string InputClass(string field)
    {
        var hasError = EditContext?.GetValidationMessages(
            EditContext.Field(field)).Any() ?? false;
        return hasError ? "mc-input mc-input-error" : "mc-input";
    }
}
```

### Blazor — Semantic Alert Component
```razor
@* PerceptionAlert.razor *@
<div data-hue="@HueForType">
    <div class="mc-alert @VariantClass @(Dismissible ? "mc-alert-dismissible" : "")">
        @if (Icon != null)
        {
            <span class="mc-alert-icon">@Icon</span>
        }
        <div class="mc-alert-content">
            @if (!string.IsNullOrEmpty(Heading))
            {
                <strong class="mc-alert-heading">@Heading</strong>
            }
            @ChildContent
        </div>
        @if (Dismissible)
        {
            <button class="mc-alert-close" @onclick="Dismiss">&times;</button>
        }
    </div>
</div>

@code {
    [Parameter] public AlertType Type { get; set; } = AlertType.Info;
    [Parameter] public string Variant { get; set; } = "filled";
    [Parameter] public string Heading { get; set; }
    [Parameter] public bool Dismissible { get; set; }
    [Parameter] public RenderFragment ChildContent { get; set; }
    [Parameter] public RenderFragment Icon { get; set; }
    [Parameter] public EventCallback OnDismiss { get; set; }

    private string HueForType => Type switch
    {
        AlertType.Success => "green",
        AlertType.Danger => "red",
        AlertType.Warning => "yellow",
        AlertType.Info => "teal",
        AlertType.Premium => "magenta",
        _ => "neutral"
    };

    private string VariantClass => Variant switch
    {
        "filled" => "mc-alert-filled",
        "outline" => "mc-alert-outline",
        _ => ""
    };

    private async Task Dismiss() => await OnDismiss.InvokeAsync();

    public enum AlertType { Info, Success, Danger, Warning, Premium, Default }
}
```

---

## FORBIDDEN — NEVER DO THESE

- Use Bootstrap classes (`btn`, `btn-primary`, `card`, `form-control`, `container`, `row`, `col`, etc.)
- Use Tailwind classes (`bg-*`, `text-*`, `p-*`, `flex`, `grid`, etc.)
- Use any hex color not listed in the palette above
- Use `#000000` — always use `#0A0A0A`
- Use `rgba()`, `hsla()`, or `opacity` to create non-palette visual colors
- Use `color-mix()`, `lighten()`, `darken()`
- Use 3-char hex shorthand (`#FFF`, `#333`, `#000`)
- Use named CSS colors (`red`, `white`, `black`, `gray`)
- Use `mc-btn-xs`, `mc-btn-sm`, `mc-btn-lg`, `mc-btn-xl`, `mc-btn-xxl` — THESE DO NOT EXIST
- Write custom CSS for styling already handled by `mc-*` classes
- Use gradients or box-shadows on Mode 2 / Mode 4 surfaces
- Use `border-radius` > 3px on Mode 2 / Mode 4 controls
- Use `font-weight: 600+` on buttons in Mode 2 / Mode 4
- Use `text-transform: uppercase` on buttons in Mode 2 / Mode 4
- Use floating labels or underline-style inputs on Mode 2 / Mode 4
- Build a page that only works on one surface mode — always support all 5
- Guess hex values from memory — always look them up in the palette table above
