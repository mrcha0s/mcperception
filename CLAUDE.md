# Perception Bootstrap

Perception is a WCAG AA-compliant UI design system and component library — like Bootstrap but with a strict 7-hue color palette, 5 surface modes, and 6 size tiers. Every component must produce **210 variants** (7 hues × 5 modes × 6 sizes). C# is the primary backend language.

---

## MANDATORY RULES — READ BEFORE ANY UI WORK

### Rule 1: Only Palette Colors
Use ONLY colors from `.claude/skills/perception-bootstrap/references/foundation/skill-palette.md`. No arbitrary hex, rgb, hsl, or named CSS colors. No opacity tricks. No color-mix(). Pure black is `#0A0A0A`, never `#000000`.

### Rule 2: All 5 Surface Modes
Every component MUST render correctly on all 5 surfaces:
- **Mode 1** — White `#FFFFFF` (light theme)
- **Mode 2** — Black `#0A0A0A` (dark theme)
- **Mode 3** — Light Hue `{hue}.100` (tinted light panels)
- **Mode 4** — Dark Hue `{hue}.800` (dark branded panels)
- **Mode 5** — Mid Hue `{hue}.500` (bold accent panels)

### Rule 3: All 7 Hues
Every component MUST support: `neutral`, `red`, `green`, `blue`, `yellow`, `magenta`, `teal`

### Rule 4: All 6 Sizes
Every component MUST support: `xs` (11px), `sm` (12px), `md` (14px), `lg` (16px), `xl` (18px), `xxl` (20px)

### Rule 5: WCAG AA — Zero Tolerance
Every foreground/background pair must pass:
- Small text (< 18px bold / < 24px regular): **≥ 4.5:1**
- Large text (≥ 18px bold / ≥ 24px regular): **≥ 3.0:1**
- Non-text UI (borders, icons, focus rings, dividers): **≥ 3.0:1**

### Rule 6: Dark Surface Depth (Modes 2 & 4)
Modes 2 and 4 use a Photoshop-inspired flat-layered depth system. No gradients. No box-shadows. No bevels. Depth comes from surface layering + 1px borders only. Border-radius capped at 3px. Buttons use font-weight 400, sentence case. Full spec in `references/foundation/skill-depth-tokens.md`.

### Rule 7: CSS Architecture Audit
After building or modifying any component CSS, run the `css-auditor` agent (or `/audit-css {component}`). This catches subtle issues the standard validator misses: duplicate size variants, inconsistent border-radius across modes, missing panel-aware overrides, opacity/rgba palette violations, `:focus` vs `:focus-visible`, and disabled state color faking. Zero critical findings required. Warnings should be addressed before shipping.

### Rule 8: WCAG Guard + Visual QA — Mandatory After Every Component Change
After editing ANY component CSS, demo HTML, or color token, you MUST spawn BOTH verification agents before reporting completion. This is NOT optional.

1. **`visual-qa` agent** — takes screenshots via Chrome DevTools MCP, verifies all design skills visually (15 checks: palette, modes, pairings, states, depth tokens, sizes, hues, typography, layout, color, accessibility)
2. **`wcag-guard` agent** — source-level analysis: computes contrast ratios for all 35 hue × mode pairs, checks palette compliance, demo completeness, regression baselines

Both agents must return PASS. If either returns FAIL, fix every violation before delivering. Never mark a component task as done until both agents pass.

### Rule 9: Read Foundation Skills Before ANY UI Work
Before writing or editing ANY component CSS, demo HTML, color token, or UI-related code, you MUST read these 4 foundation files FIRST:
1. `references/foundation/skill-palette.md` — exact hex values for all 7 hues × 10 steps
2. `references/foundation/skill-surface-mode.md` — mode pairing rules, interactive states
3. `references/foundation/skill-depth-tokens.md` — M2/M4 dark surface layer system
4. `references/foundation/skill-perception-ui-system.md` — variant matrix, WCAG formula, resolvers

Then read the matching component skill from `references/components/` if one exists.

**NEVER rely on memory for hex values, contrast ratios, or design rules.** Always read the source files. Getting a single hex value wrong cascades into WCAG failures across all 35 hue × mode pairs. This rule applies to every UI task — no exceptions, no shortcuts.

### Rule 10: Demo Pages Follow ALL Rules
Demo HTML pages are NOT exempt from any rule. When creating or editing any file in `src/demo/`:
1. **Read foundation skills first** (Rule 9) — never guess hex values
2. **Only palette colors** (Rule 1) — applies to inline styles, `<style>` blocks, AND JavaScript-generated styles equally. No `rgba()`, no shorthand hex (`#333`), no named colors (`red`), no off-palette hex
3. **#0A0A0A not #000000** — in CSS, JS, and inline styles (prose/educational text explaining the palette is exempt)
4. **Full hex only** — always `#FFFFFF` never `#FFF`, always `#373737` never `#373`
5. **No opacity to fake colors** — never use `opacity` on text, backgrounds, or borders to create muted/faded visual colors. Opacity on a palette color produces a non-palette visual result. Instead, use an explicit lighter/darker palette step (e.g., use `hue.600` for muted text on light bg, `hue.400` for muted text on dark bg). This applies to CSS `opacity:`, inline `style="opacity:"`, and inherited opacity on child elements
6. **Dark surface containers must declare mode** — any `data-mode="2"` or `data-mode="4"` surface must have the attribute on the container element, not just implied by background color
7. **Dark surface depth rules apply to demo chrome** — demo page elements inside or representing M2/M4 surfaces (mode cards, preview containers, example panels) must follow Rule 6: border-radius ≤ 3px, no gradients, no box-shadows. Demo chrome is not exempt from depth token rules
8. **WCAG AA on all demo chrome** — sidebar, scaffolding, tables, labels, borders in the demo page itself must pass contrast. Demo pages are documentation — users will inspect them
9. **After creating or editing a demo page**, scan the entire file for: `rgba(`, `opacity:` (on text/bg/border), `#000000`, 3-char hex, any 6-char hex not in the palette, and `border-radius` > 3px inside M2/M4 containers. Fix all violations before delivering
10. **Intentional "Don't" examples** — elements inside `.dont-card` or clearly labeled as anti-patterns ("WRONG", "Don't") may contain violations for teaching purposes. These are the ONLY exception

---

## SKILL SYSTEM

All design knowledge lives in `.claude/skills/perception-bootstrap/`. Read the orchestrator `SKILL.md` first — it routes to sub-skills.

### Layer 1 — Foundation (ALWAYS read for any UI task)

| File | Purpose |
|------|---------|
| `references/foundation/skill-palette.md` | All 7 hues × 10 steps, exact hex, contrast ratios |
| `references/foundation/skill-surface-mode.md` | 5 modes: pairing tables, interactive states, avoid lists |
| `references/foundation/skill-perception-ui-system.md` | Master rules: variant matrix, WCAG formula, resolvers |
| `references/foundation/skill-depth-tokens.md` | M2/M4 dark surface: 4-layer system, 1px borders, PS-style |

### Layer 2 — Principles (read for full pages / quality work)

| File | Purpose |
|------|---------|
| `references/principles/skill-design-principles.md` | 10 foundational design principles |
| `references/principles/skill-ui-design-rules.md` | 58-rule UI quality checklist |
| `references/principles/skill-simplify-design.md` | 21 simplification rules |

### Layer 3 — Components (read the matching file per task)

| File | Triggers |
|------|----------|
| `references/components/skill-button-design.md` | button, CTA, submit, FAB |
| `references/components/skill-text-fields-forms-design.md` | input, form, search, dropdown |
| `references/components/skill-selection-controls-design.md` | checkbox, radio, toggle, switch |
| `references/components/skill-navigation-design.md` | navbar, sidebar, menu, tabs |
| `references/components/skill-data-tables-design.md` | table, grid, sortable, pagination |
| `references/components/skill-loading-progress-indicators.md` | spinner, skeleton, progress bar |

### Layer 4 — Compositions (read for domain-specific pages)

| File | Triggers |
|------|----------|
| `references/compositions/skill-dashboard-design.md` | dashboard, analytics, admin, KPI |
| `references/compositions/skill-data-visualization-design.md` | chart, graph, recharts, d3 |
| `references/compositions/skill-financial-ux-design.md` | banking, fintech, trading |
| `references/compositions/skill-presentation-design.md` | slides, pitch deck |

---

## COMPONENT BUILD PIPELINE

When asked to build ANY component, follow these phases in order.

### Phase 1: READ SKILLS

Before writing a single line of code:

```
1. Read skill-palette.md                    → exact hex values
2. Read skill-surface-mode.md               → mode pairing rules
3. Read skill-depth-tokens.md               → M2/M4 dark surface rules
4. Read skill-perception-ui-system.md       → variant matrix, WCAG formula
5. Read the matching component skill        → anatomy, states, hierarchy, UX patterns
```

### Phase 2: BUILD

Output this file structure for every component:

```
src/components/{name}/
├── {Name}.tsx              ← Component with hue, mode, size, variant props
├── {Name}.module.css       ← Styles using CSS custom properties
├── {Name}.test.ts          ← WCAG contrast assertions for all 35 hue×mode pairs
├── {Name}.demo.html        ← Standalone demo page showing ALL variations
├── index.ts                ← Barrel export
└── README.md               ← Props API, usage examples, accessibility notes
```

**Component Requirements:**
- Props: `hue`, `mode`, `size`, `variant`, plus component-specific props
- Uses `resolveMode(hue, mode)` for M1/M3/M5 and `resolveDepth(hue, mode)` for M2/M4
- Uses `resolveSize(size)` for all dimensions
- All interactive states: default, hover, pressed, focus, disabled
- Keyboard accessible with proper ARIA attributes
- Zero hardcoded hex values — all colors from token system

### Phase 3: VERIFY

Run this checklist before delivering. Report results as a pass/fail table.

**Palette Check:**
- [ ] Every hex value used exists in skill-palette.md
- [ ] No arbitrary colors, no opacity, no color manipulation
- [ ] Black is #0A0A0A not #000000

**WCAG Check (automated — test all 35 hue×mode combinations):**
- [ ] text on surface ≥ 4.5:1
- [ ] accent on surface ≥ 4.5:1
- [ ] btn-text on btn-bg ≥ 4.5:1
- [ ] icon on surface ≥ 3.0:1
- [ ] divider on surface ≥ 3.0:1
- [ ] outline on surface ≥ 3.0:1
- [ ] Report: "X/Y pairs passed, 0 failures" — zero failures required

**Variant Check:**
- [ ] All 7 hues render correctly
- [ ] All 5 surface modes render correctly
- [ ] All 6 sizes render correctly
- [ ] All component variants included (filled, outlined, ghost, etc.)
- [ ] All interactive states included (hover, pressed, focus, disabled)

**Dark Surface Check (Mode 2 & 4):**
- [ ] No gradients used
- [ ] No box-shadows used (except focus ring: `0 0 0 1.5px`)
- [ ] All backgrounds are flat solid palette colors
- [ ] All borders are 1px solid
- [ ] Border-radius ≤ 3px on controls
- [ ] Buttons: font-weight 400, sentence case (not bold, not uppercase)
- [ ] Inputs: dark inset background (step 900), bordered box (not floating label, not underline)

**CSS Architecture Check (automated — css-auditor agent / `/audit-css`):**
- [ ] No duplicate size variants (all 6 sizes produce distinct dimensions)
- [ ] Border-radius consistent across modes (M2/M4 ≤ 3px)
- [ ] Panel-aware overrides exist for input-like controls
- [ ] No opacity/rgba used to create off-palette colors
- [ ] Disabled state uses explicit palette colors, not opacity
- [ ] `:focus-visible` used instead of bare `:focus` for keyboard ring
- [ ] All interactive states have CSS selectors
- [ ] Wrapper/label styles present for selection controls

**Demo Page Check:**
- [ ] Shows ALL 5 surface modes side by side
- [ ] Shows ALL 7 hues
- [ ] Shows ALL 6 sizes
- [ ] Shows ALL component variants (filled, outlined, ghost, text, icon, etc.)
- [ ] Shows ALL interactive states (default, hover, focus, disabled)
- [ ] Self-contained HTML — opens in browser without build tools
- [ ] Includes copy-paste code snippets for each variant

**Demo Page Palette Compliance (automated — run after every demo edit):**
- [ ] Zero `rgba()` calls (except inside `.dont-card` teaching examples)
- [ ] Zero `#000000` in CSS/JS/inline styles (prose text explaining palette is exempt)
- [ ] Zero 3-char hex shorthand (`#333`, `#FFF`, `#000`, etc.)
- [ ] Zero off-palette 6-char hex — every hex must exist in skill-palette.md
- [ ] Zero `opacity:` on text, backgrounds, or borders (use explicit palette steps for muted colors)
- [ ] Zero `color-mix()`, `lighten()`, `darken()`
- [ ] All `data-mode="2"` and `data-mode="4"` containers have the attribute set
- [ ] All elements inside M2/M4 containers use `border-radius` ≤ 3px (depth token rule)
- [ ] All inline-style text/bg pairs meet WCAG AA (4.5:1 small text, 3.0:1 large/UI)
- [ ] All JS-generated `style=` strings use only palette hex values
- [ ] JS hover/active effects use palette colors or transforms — never opacity fading

### Phase 4: DOCUMENT

README.md must include:
- [ ] Props table with TypeScript types and default values
- [ ] Usage example for each surface mode (M1 through M5)
- [ ] Usage example with semantic hue mapping (success=green, danger=red)
- [ ] Accessibility notes: ARIA attributes, keyboard navigation, screen reader behavior
- [ ] Size comparison table showing all 6 sizes

---

## QUICK REFERENCE — MODE PAIRING TABLE

`{hue}` = the active hue. Example: if hue=blue, then `{hue}.500` = `blue.500` = `#5252ff`.

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

### Dark Surface Layers (M2 & M4 only)

| Layer | M2 Black | M4 Dark Hue | When |
|-------|----------|-------------|------|
| Deep | `#0A0A0A` | `{hue}.900` | Page background |
| Panel | `neutral.800` | `{hue}.800` | Cards, panels, dialogs |
| Raised | `neutral.700` | `{hue}.700` | Hover, active tabs |
| Input | `neutral.900` | `{hue}.900` | Text inputs, dropdowns |

### Dark Surface Borders (M2 & M4 only)

| Tier | M2 Black | M4 Dark Hue | When |
|------|----------|-------------|------|
| Standard | `neutral.600` | `{hue}.600` | Buttons, inputs, checkboxes |
| Subtle | `neutral.700` | `{hue}.700` | Panel edges, dividers |
| Focus | `{hue}.400` | `{hue}.300` | Focus / active state |

---

## SIZE SCALE

| Size | Font | Padding Y×X | Radius (M1/3/5) | Radius (M2/4) | Icon | Min Height |
|------|------|-------------|------------------|----------------|------|------------|
| xs | 11px | 4×8 | 4px | 3px | 12px | 24px |
| sm | 12px | 6×12 | 5px | 3px | 14px | 30px |
| md | 14px | 8×16 | 6px | 3px | 16px | 36px |
| lg | 16px | 10×20 | 7px | 3px | 20px | 44px |
| xl | 18px | 12×24 | 8px | 3px | 24px | 52px |
| xxl | 20px | 14×28 | 10px | 3px | 28px | 60px |

---

## SEMANTIC HUE MAPPING

| Semantic | Hue | Usage |
|----------|-----|-------|
| Primary | blue | Default actions, links, primary buttons |
| Success | green | Confirmations, positive states, completion |
| Danger | red | Errors, destructive actions, alerts |
| Warning | yellow | Caution, attention needed, pending |
| Info | teal | Informational, neutral notifications |
| Premium | magenta | Special features, premium tier, highlights |
| Default | neutral | Chrome, borders, secondary elements |

---

## PROJECT STRUCTURE

```
C:\src\Perception\
├── CLAUDE.md                              ← THIS FILE
├── .claude\
│   ├── skills\perception-bootstrap\       ← 17 design system skill files
│   │   ├── SKILL.md                       ← Orchestrator / router
│   │   └── references\
│   │       ├── foundation\  (4 files)     ← Palette, modes, ui-system, depth-tokens
│   │       ├── principles\  (3 files)     ← Design rules, simplification
│   │       ├── components\  (6 files)     ← Button, input, selection, nav, table, loading
│   │       └── compositions\ (4 files)    ← Dashboard, data-viz, financial, presentation
│   └── agents\
│       └── component-builder.md           ← Subagent for parallel component builds
├── src\
│   ├── tokens\                            ← Design token JSON + generated CSS/TS
│   ├── types\perception.ts                ← Hue, Mode, Size type definitions
│   ├── utils\                             ← resolveMode, resolveDepth, resolveSize, wcag
│   └── components\                        ← Built components (each with demo + tests)
├── demo\                                  ← Full showcase HTML pages
└── package.json
```

---

## CSS BUILD — CRITICAL

The dist CSS is built via `npm run build` from the `src/` directory (Tailwind CLI → PostCSS).

```bash
cd src && npm run build
```

**NEVER rebuild dist with `cat` or manual file concatenation.** The build pipeline resolves `@import` chains, Tailwind utilities, and CSS custom property definitions (`--color-p-*`). Manual concat drops the color palette, breaking every component.

Source files (imported by `src/mcperception.css`):
1. `mcperception-color.css` — `:root` palette variables (ALL components depend on this)
2. `mcperception-font.css` — typography
3. `mcperception-input.css` — buttons, inputs, textareas, selects
4. `mcperception-panel.css` — panel system
5. `mcperception-components.css` — checkboxes, radios, switches, chips, badges

---

## INPUT PSEUDO-ELEMENT RULE

`<input>` elements are void/replaced elements. Do NOT use `transform` on `::before`/`::after` pseudo-elements of inputs — browser support is inconsistent even with `appearance: none`.

**For centering content inside an input's `::after`:**
- **DO:** `position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto;`
- **DON'T:** `top: 50%; left: 50%; transform: translate(-50%, -50%);`

---

## FORBIDDEN — NEVER DO THESE

- Use any color not in skill-palette.md
- Use `#000000` (use `#0A0A0A`)
- Use opacity/rgba to create unlisted colors (in components, demo CSS, demo JS, or inline styles)
- Use CSS color-mix(), lighten(), darken()
- Rebuild dist CSS with `cat` or manual concatenation (use `cd src && npm run build`)
- Use `transform` on `::before`/`::after` pseudo-elements of `<input>` elements
- Ship a component without all 5 surface modes
- Ship a component without all 7 hues
- Ship a component without all 6 sizes
- Ship a component without running the WCAG verification (0 failures required)
- Ship a component without a demo page showing ALL variations
- Use gradients or box-shadows on Mode 2 or Mode 4 (except focus ring)
- Use border-radius > 3px on Mode 2 or Mode 4 controls
- Use bold (600+) font-weight on buttons in Mode 2 or Mode 4
- Use uppercase text-transform on buttons in Mode 2 or Mode 4
- Use floating labels or underline-style inputs on Mode 2 or Mode 4
- Skip the Phase 3 verification checklist
- Deliver a README without usage examples for all 5 modes
- Use `rgba()`, shorthand hex, or off-palette hex in demo page `<style>`, inline styles, or JavaScript
- Use `opacity` to mute text/bg/border colors in demo pages — use explicit palette steps instead
- Use `border-radius` > 3px on demo page elements inside M2/M4 containers (mode cards, preview panels)
- Ship a demo page without scanning it for palette violations (Rule 10)
- Use nonexistent CSS classes in demo pages or components — always verify a class exists in the built `dist/mcperception.css` before using it (see CLASS EXISTENCE REFERENCE below)
- Use `mc-btn-xs`, `mc-btn-sm`, `mc-btn-lg`, `mc-btn-xl`, `mc-btn-xxl` as standalone button size classes — THESE DO NOT EXIST. Button sizes only exist within button groups (`.mc-btn-group-{size} > .mc-btn`). For component-embedded buttons (dropdown toggles, input-group buttons), size the button from the parent wrapper (e.g., `.mc-dropdown-{size} .mc-dropdown-toggle`)

---

## CLASS EXISTENCE REFERENCE — VERIFIED CSS CLASSES

### Rule 12: Verify CSS Classes Exist Before Using Them
Before adding any `mc-*` class to HTML (demo pages, components, examples), verify the class actually exists in the compiled CSS. Non-existent classes render silently with no styling — producing subtle bugs that look like "everything is the same size" or "no style applied".

**How to verify:** Search `src/dist/mcperception.css` for the class name. If zero matches, the class does not exist.

### Button Size Classes — NONE EXIST as Standalone
There are NO standalone button size classes. The following classes DO NOT EXIST:
- `mc-btn-xs` — DOES NOT EXIST
- `mc-btn-sm` — DOES NOT EXIST
- `mc-btn-lg` — DOES NOT EXIST
- `mc-btn-xl` — DOES NOT EXIST
- `mc-btn-xxl` — DOES NOT EXIST

**Button sizing is ONLY available through:**
1. **Button groups:** `.mc-btn-group-{size} > .mc-btn` — the group wrapper sizes its child buttons
2. **Component wrappers:** Each component handles its own toggle/button sizing (e.g., `.mc-dropdown-{size} .mc-dropdown-toggle`)

### Component Toggle/Button Sizing Pattern
When a component contains a button-like element (toggle, trigger, action button), the component's size class MUST cascade sizing to that element via CSS:

```css
/* CORRECT — parent wrapper sizes the toggle */
.mc-dropdown-xs .mc-dropdown-toggle { padding: 4px 8px; font-size: 11px; min-height: 24px; }
.mc-dropdown-sm .mc-dropdown-toggle { padding: 6px 12px; font-size: 12px; min-height: 30px; }
/* md is default on .mc-dropdown-toggle base */
.mc-dropdown-lg .mc-dropdown-toggle { padding: 10px 20px; font-size: 16px; min-height: 44px; }

/* WRONG — nonexistent standalone class, does nothing */
<button class="mc-btn mc-btn-xs mc-dropdown-toggle">  ← mc-btn-xs does not exist!
```

---

## AUTO-PIPELINE — MANDATORY AFTER EVERY CHANGE

### Rule 11: Automatic Build + Visual QA After Every Change

After completing ANY code change (CSS, HTML, component, demo page, color tokens), Claude MUST automatically execute the full pipeline **without being asked**. This is NOT optional. Do NOT wait for the user to request it.

**Pipeline steps (run in order):**

1. **Build CSS:** `cd src && npm run build`
2. **Start dev server** (if not already running): `cd src && npm run serve` (background)
3. **Run Visual QA:** Spawn the `visual-qa` agent on the affected demo page(s) — it takes screenshots via Chrome DevTools MCP and verifies all design skills visually (palette, modes, depth tokens, sizes, hues, typography, layout, accessibility)
4. **Run WCAG Guard:** Spawn the `wcag-guard` agent on the affected component(s) — it performs source-level contrast computation for all 35 hue x mode pairs, palette compliance, and regression checks
5. **Report results** to the user with pass/fail tables from both agents

**Scope rules:**
- Single component changed → Visual QA on that component's demo page only
- `mcperception-color.css` changed → Visual QA on ALL demo pages
- New component built → Visual QA on the new demo page
- Demo page edited → Visual QA on that demo page

**If any check fails:** Fix the issue immediately, rebuild, and re-run Visual QA. Do NOT report completion until all checks pass.

**If Chrome DevTools MCP is not connected:** Skip the screenshot/Visual QA steps, but still run the CSS build. Warn the user that Visual QA was skipped.

---

## VISUAL QA PIPELINE

### Prerequisites

1. **Dev server running:** `cd src && npm run serve` (serves on `http://localhost:3000`)
2. **Chrome DevTools MCP connected:** Configured in `.mcp.json` at project root
3. **Demo pages built:** `cd src && npm run build` must have been run so `dist/mcperception.css` exists

### URL Pattern

All demo pages are at: `http://localhost:3000/demo/{page}.html`

Example: `http://localhost:3000/demo/index.html`

### Visual QA Agent

The `visual-qa` agent (`.claude/agents/visual-qa.md`) is a dedicated sub-agent for screenshot-based verification. It checks 15 visual criteria across all design skills using Chrome DevTools MCP.

**Invoke it with:**
- Component name: `visual-qa button` → checks `http://localhost:3000/demo/button.html`
- All pages: `visual-qa all` → checks every file in `src/demo/`

**What it checks (15 points):**
1. Page loads + CSS applied
2. Palette colors correct per mode
3-7. All 5 surface mode pairings (bg, text, accent, buttons, dividers)
8. Interactive states (hover, focus, disabled)
9. Depth tokens M2/M4 (flat, no shadows, 3px radius, weight 400 buttons)
10. Size scale (6 tiers distinct)
11. Hue differentiation (7 distinct)
12. Typography (hierarchy, readability, M2/M4 rules)
13. Layout & hierarchy (spacing, alignment, organization)
14. Color application (contrast, 60-30-10, semantics)
15. Accessibility (not color-only, focus ring, disabled visible)

### When to Run Visual QA

- **After any CSS change:** Run on the affected component's demo page
- **After building a new component:** Run on the new demo page
- **After modifying `mcperception-color.css`:** Run on ALL demo pages (color changes affect everything)
- **Before delivering a component:** Visual QA is part of Phase 3 verification