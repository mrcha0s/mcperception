# MC Perception

A WCAG AA-compliant design system and component library built for data-dense interfaces, trading dashboards, and internal tooling. Powered by Tailwind CSS v4 with a strict 7-hue, 5-surface-mode, 6-size architecture.

**Use it standalone** as a drop-in CSS framework, or **pair it with Claude Code** for AI-assisted UI generation that automatically follows every design rule.

---

## Quick Start

### CDN (No Build Required)

```html
<link rel="stylesheet" href="https://mrcha0s.github.io/mcperception/src/dist/mcperception.css">
```

This single file includes Tailwind 4 utilities, all MC Perception components, color tokens, and inlined Roboto font families. No installation needed.

### Local Development

```bash
cd src
npm install
npm run build    # one-time build
npm run dev      # watch mode
```

Build pipeline: Tailwind CLI compiles source CSS, then PostCSS processes the output.

---

## Design Principles

MC Perception follows **form follows function** — every decision is calculated for fast comprehension under real-world conditions.

### 1. Function Over Decoration
No ornamentation, no visual noise. Every pixel serves information delivery. Interfaces should be scannable in milliseconds, not admired.

### 2. Strict Color Discipline
Only 7 engineered hue families with 10 luminance steps each. No ad-hoc colors. Every foreground/background pair is mathematically verified for WCAG AA contrast compliance.

### 3. Universal Surface Adaptation
Every component works on all 5 surface modes without modification. Dark mode, light mode, hue-tinted surfaces — one set of classes handles all of them through CSS variable indirection.

### 4. Accessibility is Non-Negotiable
- Text contrast: **>= 4.5:1** (AA small text)
- Large text contrast: **>= 3.0:1** (AA large text)
- Non-text UI (borders, icons): **>= 3.0:1** (WCAG 1.4.11)
- No exceptions. Every color pairing is audited.

### 5. Predictable API
Components follow a consistent pattern: base class + variant + hue + size. No surprises, no special cases.

```html
<element class="mc-{component} mc-{component}-{variant} mc-{component}-{size}" data-hue="{hue}">
```

### 6. Data-Dense Optimization
Built for dashboards, monitoring tools, trading UIs, and analytics panels where information density matters more than whitespace.

---

## Architecture

### The Variant Matrix

Every component produces up to:

```
7 hues  x  5 surface modes  x  6 sizes  =  210 variants
```

from a single, small set of CSS rules — powered by CSS variable indirection.

### 7 Hues

| Hue | Semantic Role | Step 500 |
|-----|--------------|----------|
| `neutral` | Default, chrome, borders | `#6c6c6c` |
| `red` | Errors, destructive actions | `#da0000` |
| `green` | Success, positive states | `#007f00` |
| `blue` | Primary actions, links | `#5252ff` |
| `yellow` | Warnings, caution | `#6f6f00` |
| `magenta` | Premium, highlights | `#c000c0` |
| `teal` | Informational, neutral alerts | `#007979` |

Hues are applied via the `data-hue` attribute:

```html
<button class="mc-button mc-button-filled" data-hue="blue">Submit</button>
<span class="mc-badge mc-badge-filled" data-hue="red">Error</span>
```

### 5 Surface Modes

Surface modes define the background context. Components automatically adapt their colors.

| Mode | Background | Use Case | Attribute |
|------|-----------|----------|-----------|
| **M1** White | `#FFFFFF` | Light content pages | `data-mode="1"` |
| **M2** Black | `#0A0A0A` | Dark mode (default) | `data-mode="2"` or none |
| **M3** Light Hue | Step 100 | Alerts, banners, cards | `data-mode="3"` |
| **M4** Dark Hue | Step 800 | Headers, hero sections, nav | `data-mode="4"` |
| **M5** Mid Hue | Step 500 | CTAs, badges, accent areas | `data-mode="5"` |

Set the mode on any ancestor container:

```html
<!-- Dark surface (default) -->
<div data-hue="blue" data-mode="2">
    <button class="mc-button mc-button-outline" data-hue="blue">Dark Mode</button>
</div>

<!-- White surface -->
<div data-hue="blue" data-mode="1">
    <button class="mc-button mc-button-outline" data-hue="blue">Light Mode</button>
</div>

<!-- Mid hue surface -->
<div data-hue="blue" data-mode="5" class="p-6" style="background: var(--color-p-blue-500)">
    <button class="mc-button mc-button-filled" data-hue="blue">Inverted</button>
</div>
```

### 6 Sizes

| Size | Font | Padding | Min Height | Class |
|------|------|---------|------------|-------|
| **xs** | 11px | 4px 8px | 24px | `mc-{component}-xs` |
| **sm** | 12px | 6px 12px | 30px | `mc-{component}-sm` |
| **md** | 14px | 8px 16px | 36px | *(default — no class)* |
| **lg** | 16px | 10px 20px | 44px | `mc-{component}-lg` |
| **xl** | 18px | 12px 24px | 52px | `mc-{component}-xl` |
| **xxl** | 20px | 14px 28px | 60px | `mc-{component}-xxl` |

---

## Color Palette

Each hue has 10 steps (50-900) with monotonically decreasing luminance. Two special colors complete the system:

- **White**: `#FFFFFF`
- **Black**: `#0A0A0A` (never pure `#000000`)

### Neutral

| Step | Hex | vs White | vs Black |
|------|-----|----------|----------|
| 50 | `#fafafa` | 1.1:1 | 19.1:1 |
| 100 | `#e1e1e1` | 1.4:1 | 14.1:1 |
| 200 | `#c3c3c3` | 2.1:1 | 9.6:1 |
| 300 | `#a0a0a0` | 3.4:1 | 5.9:1 |
| 400 | `#7f7f7f` | 5.3:1 | 3.8:1 |
| 500 | `#6c6c6c` | 6.6:1 | 3.1:1 |
| 600 | `#515151` | 9.5:1 | 2.1:1 |
| 700 | `#373737` | 13.3:1 | 1.5:1 |
| 800 | `#222222` | 16.6:1 | 1.2:1 |
| 900 | `#090909` | 20.5:1 | 1.0:1 |

All 7 hues follow the same luminance curve. Full hex tables for red, green, blue, yellow, magenta, and teal are documented in [`skills/skill-palette.md`](skills/skill-palette.md).

### Contrast Rules by Surface

| Surface Mode | Pass AA (text) | Accent/Links | Avoid |
|-------------|----------------|-------------|-------|
| **M1** White | Steps 500-900 | Step 500 | Steps 50-300 |
| **M2** Black | Steps 50-400 | Step 400 | Steps 600-900 |
| **M3** Light (100) | Steps 600-900 + Black | Step 600 | Steps 50-300 |
| **M4** Dark (800) | Steps 50-300 + White | Step 300 | Steps 600-900 |
| **M5** Mid (500) | White / Step 50 | White | Steps 300-700 |

---

## Components

### Buttons

4 variants for emphasis hierarchy:

```html
<!-- Filled (high emphasis) -->
<button class="mc-button mc-button-filled" data-hue="blue">Submit</button>

<!-- Tonal (medium-high) -->
<button class="mc-button mc-button-tonal" data-hue="green">Approve</button>

<!-- Outline (medium) -->
<button class="mc-button mc-button-outline" data-hue="red">Cancel</button>

<!-- Ghost (low emphasis) -->
<button class="mc-button mc-button-ghost" data-hue="neutral">More</button>
```

**Sizes:** `mc-button-xs` | `mc-button-sm` | *(md default)* | `mc-button-lg` | `mc-button-xl` | `mc-button-xxl`

**Icons:**

```html
<button class="mc-button mc-button-filled mc-button-icon-left" data-hue="green">
    <svg>...</svg> Download
</button>

<button class="mc-button mc-button-outline mc-button-icon-only" data-hue="neutral" aria-label="Close">
    <svg>...</svg>
</button>
```

**States:** `disabled` attribute | `mc-button-loading` class

**Groups:**

```html
<div class="mc-button-group">
    <button class="mc-button mc-button-filled mc-button-sm" data-hue="blue">1D</button>
    <button class="mc-button mc-button-filled mc-button-sm" data-hue="neutral">1W</button>
    <button class="mc-button mc-button-filled mc-button-sm" data-hue="neutral">1M</button>
</div>
```

### Badges

3 variants with all hues and sizes:

```html
<span class="mc-badge mc-badge-filled" data-hue="red">Error</span>
<span class="mc-badge mc-badge-tonal" data-hue="green">Active</span>
<span class="mc-badge mc-badge-outline" data-hue="blue">Beta</span>
```

**Sizes:** `mc-badge-xs` | `mc-badge-sm` | *(md default)* | `mc-badge-lg` | `mc-badge-xl` | `mc-badge-xxl`

**Shapes:** `mc-badge-pill` | `mc-badge-dot` (status indicator)

### Inputs

```html
<input class="mc-input mc-input-md" placeholder="Text input">
<input class="mc-input mc-input-md mc-input-mono" value="123,456.78">
<textarea class="mc-textarea" placeholder="Enter text..."></textarea>
```

**Sizes:** `mc-input-xs` | `mc-input-sm` | `mc-input-md` | `mc-input-lg` | `mc-input-xl`

### Selection Controls

```html
<select class="mc-select"><option>Option 1</option></select>
<input type="checkbox" class="mc-checkbox">
<input type="radio" name="group" class="mc-radio">
<input type="checkbox" class="mc-switch">
```

### Panels

```html
<div class="mc-panel">
    <div class="mc-panel-header">
        <span class="mc-panel-title">Title</span>
    </div>
    <div class="mc-panel-body">Content</div>
</div>
```

### Sidebar

Fixed vertical navigation panel with collapsible nested submenus:

```html
<nav class="mc-sidebar" data-hue="blue" data-mode="2">
    <div class="mc-sidebar-brand">
        <span class="mc-sidebar-brand-text">App Name</span>
    </div>
    <div class="mc-sidebar-nav">
        <a href="#" class="mc-sidebar-link mc-sidebar-link-active">
            <svg class="mc-sidebar-icon">...</svg> Dashboard
        </a>
        <div class="mc-sidebar-collapse">
            <button class="mc-sidebar-collapse-toggle">
                <svg class="mc-sidebar-icon">...</svg> Settings
                <svg class="mc-sidebar-collapse-chevron">...</svg>
            </button>
            <div class="mc-sidebar-collapse-content">
                <a href="#" class="mc-sidebar-link">General</a>
                <a href="#" class="mc-sidebar-link">Security</a>
            </div>
        </div>
    </div>
</nav>
```

**Sizes:** `mc-sidebar-xs` | `mc-sidebar-sm` | *(md default)* | `mc-sidebar-lg` | `mc-sidebar-xl` | `mc-sidebar-xxl`

### Other Components

Tables (`mc-table`), alerts (`mc-alert`), tabs (`mc-tabs`), progress bars (`mc-progress`), spinners (`mc-spinner`), avatars (`mc-avatar`), breadcrumbs (`mc-breadcrumb`), pagination (`mc-pagination`), code blocks (`mc-code`), kbd (`mc-kbd`), dividers (`mc-divider`), list groups (`mc-list-group`), cards (`mc-card`), dropdowns (`mc-dropdown`), stats (`mc-stat`), code mockups (`mc-code-mockup`), range sliders (`mc-range`).

---

## Typography

| Class | Font Family | Usage |
|-------|-------------|-------|
| `font-sans` | Roboto | Default body text |
| `font-condensed` | Roboto Condensed | Buttons, inputs, compact UI |
| `font-mono` | Roboto Mono | Numbers, code, data |
| `font-slab` | Roboto Slab | Headlines |

All four font families are embedded in the compiled CSS. No external font loading required.

---

## Using MC Perception in Other Projects (AI-Assisted)

If you're building a separate project (Blazor, React, Next.js, etc.) and want your AI coding assistant to use MC Perception classes correctly, use the **`CLAUDE-PerceptionUsage.md`** file.

This is a **self-contained instruction file** that includes everything an AI assistant needs — the full color palette, all CSS classes, mode pairing rules, WCAG requirements, dark surface depth system, and usage examples — in a single file with no external dependencies.

### Setup

1. **Get the CSS** — add to your project:
   ```html
   <!-- CDN -->
   <link rel="stylesheet" href="https://mrcha0s.github.io/mcperception/src/dist/mcperception.css">

   <!-- Or copy locally -->
   <!-- Download src/dist/mcperception.css into your project's static assets -->
   ```

2. **Get the AI instruction file** — download [`CLAUDE-PerceptionUsage.md`](CLAUDE-PerceptionUsage.md) into your project root:
   ```bash
   # Using curl
   curl -o CLAUDE-PerceptionUsage.md https://raw.githubusercontent.com/mrcha0s/mcperception/main/CLAUDE-PerceptionUsage.md
   ```

3. **For Claude Code** — rename it to `CLAUDE.md` in your project root (Claude Code auto-loads this file):
   ```bash
   mv CLAUDE-PerceptionUsage.md CLAUDE.md
   ```
   Or append it to your existing `CLAUDE.md` if you already have one.

4. **For other AI tools** (Cursor, Copilot, ChatGPT, etc.) — paste the file contents into your AI's context/system prompt, or reference it per your tool's instructions.

### What's Inside

| Section | What It Contains |
|---------|-----------------|
| Mandatory Rules | 6 core rules: palette-only colors, 5 modes, 7 hues, WCAG AA, dark depth |
| Complete Palette | All 7 hues x 10 steps with exact hex values and contrast ratios |
| Mode Pairing Table | Which colors to use for text, buttons, accents, icons on each surface |
| Dark Surface Depth | Layer system, border tiers, text colors for Modes 2 & 4 |
| Size Scale | 6 size tiers with font, padding, radius, and min-height values |
| CSS Class Reference | Every `mc-*` class organized by category |
| Usage Examples | HTML and Blazor/Razor code patterns |
| Forbidden List | Common mistakes the AI must avoid |

### Example Workflow

```
You: "Create a user settings page with a form and dark mode toggle"

AI reads CLAUDE-PerceptionUsage.md → uses mc-input, mc-switch, mc-card, mc-button classes
   → applies data-hue="blue" data-mode="1"
   → follows WCAG AA contrast rules
   → uses only palette hex values
```

---

## Using with Claude Code

MC Perception is designed to work with [Claude Code](https://docs.anthropic.com/en/docs/claude-code) for AI-assisted UI generation. When Claude Code is connected to this repository, it automatically loads the design system rules and generates WCAG-compliant UI that follows every convention.

### How It Works

The `.claude/skills/perception-bootstrap/` directory contains the **master orchestrator skill** — a 4-layer architecture that routes Claude to the correct design specifications based on what you're building:

```
Layer 4: COMPOSITIONS  — dashboard, data-viz, financial-ux, presentation
Layer 3: COMPONENTS    — buttons, forms, selection, navigation, tables, loading
Layer 2: PRINCIPLES    — design-principles, ui-design-rules, simplify-design
Layer 1: FOUNDATION    — palette, surface-modes, perception-ui-system
```

When you ask Claude Code to build UI — a button, a form, a dashboard — it reads the relevant skill files and generates code that:

- Uses the correct `data-hue` + `data-mode` attributes
- Follows the variant matrix (7 hues x 5 modes x 6 sizes)
- Passes WCAG AA contrast requirements
- Follows the component API conventions

### Example Prompts in Claude Code

```
> Create a login form with email and password fields

> Build a trading dashboard with a price chart, orderbook, and trade history

> Add a navigation sidebar with blue accent

> Design a settings page with toggle switches and form inputs
```

Claude Code will read the relevant skills (foundation + components + compositions) and generate complete HTML using MC Perception classes.

### Skill Files

The `skills/` directory contains two types of files you can use with any AI tool:

**Skill References** (`skill-*.md`) — Complete design specifications:

| File | What It Defines |
|------|----------------|
| `skill-palette.md` | All 7 hues x 10 steps, exact hex values, contrast ratios |
| `skill-surface-mode.md` | 5 surface modes, pairing tables, interactive states |
| `skill-perception-ui-system.md` | Master rules, variant matrix, WCAG requirements |
| `skill-button-design.md` | Button patterns, hierarchy, states, accessibility |
| `skill-text-fields-forms-design.md` | Forms, inputs, validation, UX patterns |
| `skill-selection-controls-design.md` | Checkboxes, radios, toggles, chips |
| `skill-navigation-design.md` | Navbars, sidebars, menus, tabs |
| `skill-data-tables-design.md` | Tables, grids, sorting, pagination |
| `skill-loading-progress-indicators.md` | Spinners, skeletons, progress bars |
| `skill-dashboard-design.md` | Dashboard layouts, KPI cards, metrics |
| `skill-data-visualization-design.md` | Charts, graphs, data-ink principles |
| `skill-financial-ux-design.md` | Trading, banking, fintech patterns |
| `skill-presentation-design.md` | Slide decks, visual storytelling |
| `skill-design-principles.md` | 10 foundational design principles |
| `skill-ui-design-rules.md` | 58 UI quality rules |
| `skill-simplify-design.md` | 21 simplification and declutter rules |

**Prompt Templates** (`prompt-*.md`) — Ready-to-paste prompts for AI tools:

Each prompt file contains a structured instruction that tells the AI to follow the MC Perception design system rules when generating UI. You can paste these into ChatGPT, Claude.ai, or any LLM interface.

```
skills/
  prompt-button-design.md        # "Generate buttons following these rules..."
  prompt-dashboard-design.md     # "Generate dashboards following these rules..."
  prompt-data-tables-design.md   # "Generate tables following these rules..."
  ...13 prompt files total
```

### Using Skills Without Claude Code

You don't need Claude Code to benefit from the skill files. Use them with any AI:

1. **Copy-paste a skill file** into your AI conversation as context
2. **Ask the AI** to generate UI following those rules
3. **The AI** will produce MC Perception-compatible HTML

For example, paste `skill-button-design.md` into ChatGPT and ask: *"Create a button group for a trading interface with buy/sell actions"* — the AI will generate correct MC Perception markup.

---

## CSS Architecture

### File Structure

```
src/
  mcperception.css              # Entry point — imports all modules
  mcperception-color.css        # Color system: 7 hues x 10 steps + surface mode tokens
  mcperception-font.css         # Embedded Roboto font families
  mcperception-input.css        # Buttons (filled/tonal/outline/ghost) + inputs
  mcperception-panel.css        # Panel component
  mcperception-components.css   # Badges, tables, alerts, tabs, spinners, etc.
  dist/
    mcperception.css            # Compiled output (production)
    mcperception.raw.css        # Pre-PostCSS output
```

### CSS Variable Indirection

Components use a two-layer variable system. The `data-hue` attribute maps hue-specific tokens to generic component variables:

```css
/* Layer 1: Hue maps to generic tokens */
.mc-button[data-hue="blue"] {
    --btn-500: var(--color-p-blue-500);
    --btn-600: var(--color-p-blue-600);
    /* ... */
}

/* Layer 2: Variants reference generic tokens */
.mc-button-filled {
    background-color: var(--btn-500);
    color: #FFFFFF;
}
.mc-button-filled:hover {
    background-color: var(--btn-600);
}

/* Layer 3: Surface modes override tokens */
[data-mode="5"] .mc-button-filled {
    background-color: var(--btn-50);
    color: #0A0A0A;
}
```

This means **one set of variant rules** handles all 7 hues across all 5 surface modes.

---

## Demo Pages

### Getting Started

| Page | Description |
|------|-------------|
| [index.html](src/demo/index.html) | Component library overview |
| [getting-started.html](src/demo/getting-started.html) | Installation and quick start |

### Foundation

| Page | Description |
|------|-------------|
| [color.html](src/demo/color.html) | Full color palette reference — 7 hues x 10 steps |
| [surface-modes.html](src/demo/surface-modes.html) | Interactive WCAG explorer — 7 hues x 5 modes with contrast auditing |
| [typography.html](src/demo/typography.html) | Typography specimens — Roboto family, headings, body, mono |

### Components

| Page | Description |
|------|-------------|
| [alert.html](src/demo/alert.html) | Alert style guide — filled, outline, dismissible |
| [badges.html](src/demo/badges.html) | Badge style guide — filled, tonal, outline, shapes |
| [breadcrumb.html](src/demo/breadcrumb.html) | Breadcrumb — custom dividers, size variants |
| [button.html](src/demo/button.html) | Button style guide — filled, tonal, outline, ghost, icons, groups |
| [button-group.html](src/demo/button-group.html) | Button groups — horizontal, vertical, toolbar layouts |
| [card.html](src/demo/card.html) | Card — header, footer, body, group layout |
| [code-mockup.html](src/demo/code-mockup.html) | Code mockup — terminal-style code blocks |
| [dropdown.html](src/demo/dropdown.html) | Dropdowns — directions, alignment, menu states |
| [input.html](src/demo/input.html) | Form inputs — text, password, search, icons, validation |
| [list-group.html](src/demo/list-group.html) | List group — items, actions, flush, horizontal |
| [navbar.html](src/demo/navbar.html) | Navbar — responsive, collapsible, fixed positions |
| [navs-tabs.html](src/demo/navs-tabs.html) | Navs and tabs — tabs, pills, underline, vertical |
| [pagination.html](src/demo/pagination.html) | Pagination — sizes, alignment, disabled states |
| [panel-system.html](src/demo/panel-system.html) | Panels — surface mode panels with headers and bodies |
| [progress.html](src/demo/progress.html) | Progress bars — striped, animated, stacked |
| [range.html](src/demo/range.html) | Range slider — sizes, labels, ticks, tooltips |
| [selection.html](src/demo/selection.html) | Selection controls — checkboxes, radios, toggles, switches |
| [sidebar.html](src/demo/sidebar.html) | Sidebar — collapsible submenus, letter badges, avatars, all modes |
| [spinner.html](src/demo/spinner.html) | Spinners — 12 animation types, all sizes |
| [stat.html](src/demo/stat.html) | Stat — KPI cards with title, value, description, figures |
| [table.html](src/demo/table.html) | Tables — striped, hover, bordered, sortable, responsive |

### Patterns & Examples

| Page | Description |
|------|-------------|
| [forms.html](src/demo/forms.html) | Form layout patterns and validation |
| [dark-surfaces.html](src/demo/dark-surfaces.html) | Dark surface depth system — M2/M4 layering |
| [trading-card.html](src/demo/trading-card.html) | Crypto trading card compositions |
| [orderbook.html](src/demo/orderbook.html) | Orderbook interface demo |

---

## Project Structure

```
Perception/
  README.md                       # This file
  CLAUDE.md                       # Claude Code project configuration
  skills/                         # AI skill + prompt files (standalone)
    skill-palette.md
    skill-surface-mode.md
    skill-perception-ui-system.md
    skill-button-design.md
    prompt-button-design.md
    ... (30 files total)
  .claude/
    skills/
      perception-bootstrap/       # Claude Code auto-trigger skill
        SKILL.md                  # Master orchestrator
        references/
          foundation/             # Palette, surface modes, UI system rules
          components/             # Button, form, table, nav, loading specs
          compositions/           # Dashboard, data-viz, financial, presentation
          principles/             # Design principles, UI rules, simplification
  src/
    mcperception.css              # CSS entry point
    mcperception-color.css        # Color system
    mcperception-font.css         # Typography
    mcperception-input.css        # Buttons + inputs
    mcperception-panel.css        # Panels
    mcperception-components.css   # All other components
    package.json                  # Build scripts
    dist/                         # Compiled CSS output
    demo/                         # 30 interactive demo pages
```

---

## Roadmap

- [x] Engineered 7-hue color palette with monotonic luminance
- [x] 5 surface mode system with automatic component adaptation
- [x] Button system (filled, tonal, outline, ghost) with WCAG AA audit
- [x] Badge system (filled, tonal, outline) with surface mode support
- [x] Claude Code skill integration (30 skill + prompt files)
- [x] Interactive surface mode explorer with contrast visualization
- [x] Card component with header, footer, body, group layout
- [x] Dropdown component with directions, alignment, menu states
- [x] Breadcrumb component with custom dividers and size variants
- [x] Button group component with horizontal, vertical, toolbar layouts
- [x] Stat component for KPI cards
- [x] Code mockup component for terminal-style blocks
- [x] Range slider component with labels, ticks, tooltips
- [x] Sidebar component with collapsible nested submenus
- [x] 30 demo/style guide pages
- [ ] Modal / dialog component
- [ ] Toast / notification component
- [ ] Tooltip / popover component
- [ ] Stepper / wizard component
- [ ] Documentation site with live playground
- [ ] npm package distribution

---

## License

MC Perception is free for personal or commercial use under the Apache License 2.0.
