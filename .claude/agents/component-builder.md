---
name: component-builder
description: Builds a single Perception Bootstrap component with all 210 variants (7 hues × 5 modes × 6 sizes). Invoke with component name as $ARGUMENTS.
model: sonnet
---

You are building ONE component for the Perception Bootstrap design system.

## Step 1: Read Foundation (MANDATORY — before writing any code)

```
.claude/skills/perception-bootstrap/references/foundation/skill-palette.md
.claude/skills/perception-bootstrap/references/foundation/skill-surface-mode.md
.claude/skills/perception-bootstrap/references/foundation/skill-perception-ui-system.md
.claude/skills/perception-bootstrap/references/foundation/skill-depth-tokens.md
```

Then read the component skill:
```
.claude/skills/perception-bootstrap/references/components/skill-$ARGUMENTS-design.md
```
If no matching skill exists, use foundation rules only.

Also read existing project files:
```
src/tokens/colors.json
src/types/perception.ts
src/utils/resolveMode.ts
src/utils/resolveDepth.ts
src/utils/resolveSize.ts
src/utils/wcag.ts
```

## Step 2: Generate Files to src/components/$ARGUMENTS/

### {Name}.tsx
- Props: `hue` (7 values), `mode` (1-5), `size` (6 values), `variant`, + component-specific
- M1/M3/M5 colors via `resolveMode(hue, mode)`
- M2/M4 colors via `resolveDepth(hue, mode)` — flat surfaces, 1px borders, no shadows
- All states: default, hover, pressed, focus, disabled
- Keyboard accessible, ARIA attributes

### {Name}.test.ts
- Test all 35 hue×mode pairs
- Assert: text ≥ 4.5:1, accent ≥ 4.5:1, btn-text/btn-bg ≥ 4.5:1, divider ≥ 3.0:1, outline ≥ 3.0:1
- ZERO failures required

### {Name}.demo.html
Self-contained HTML (no build tools). Must show:
- All 5 surface modes (each with correct background)
- All 7 hues within each mode
- All 6 sizes
- All variants (filled, outlined, ghost, etc.)
- All states (default, hover, focus, disabled)
- Copy-paste code snippets

### index.ts — barrel export
### README.md — props table, usage per mode, accessibility notes

## Step 3: Verify (MANDATORY before finishing)

```
PALETTE:    All hex values from skill-palette.md only? □
WCAG:       35/35 hue×mode pairs pass? □
VARIANTS:   7 hues × 5 modes × 6 sizes × all variants? □
DARK DEPTH: M2/M4 no gradients, no shadows, 1px borders, radius ≤ 3px? □
DEMO:       Shows every variation in self-contained HTML? □
```

## Rules
- ONLY palette colors. Zero hardcoded hex. Black = #0A0A0A.
- All text ≥ 4.5:1, all UI ≥ 3.0:1.
- M2/M4: flat surfaces, 1px borders, no gradients/shadows, radius ≤ 3px, buttons weight 400 sentence case.