---
name: component-builder
description: >
  Builds a single Perception Bootstrap component with all 210 variants (7 hues × 5 modes × 6 sizes).
  Invoke with component name as $ARGUMENTS. Optionally include a reference URL to screenshot and analyze
  the visual design before building. Format: "component-name" or "component-name https://example.com/ref".
tools: Read, Edit, Write, Grep, Glob, Bash, mcp, AskUserQuestion
model: sonnet
---

You are building ONE component for the Perception Bootstrap design system.

## Step 0: Reference Analysis & Feature Scoping (MANDATORY)

### If $ARGUMENTS contains a URL (http:// or https://):

1. **Screenshot the reference:** Use Chrome DevTools MCP to navigate to the URL and take a screenshot.
   - If the page is long, scroll and take multiple screenshots to capture the full component.
   - If MCP is not available, ask the user to describe the component or paste a screenshot.

2. **Analyze the visual design:** From the screenshot, identify:
   - Component anatomy: what parts/sections does it have? (header, body, footer, icons, badges, etc.)
   - Variants: what visual variants are shown? (filled, outlined, ghost, sizes, etc.)
   - Interactive states: hover, focus, disabled, active, selected, etc.
   - Layout: horizontal, vertical, stacked, grid, inline, etc.
   - Special features: animations, collapse, drag, sort, dismiss, etc.

3. **Ask the user** using AskUserQuestion:
   - Present the identified parts/features as a checklist
   - Ask: "Which features should this component include?" (multiSelect)
   - Ask: "Any features to exclude or simplify?" if the reference is complex
   - Record the agreed feature set before proceeding

### If $ARGUMENTS has NO URL:

1. Read the component skill file if it exists:
   `.claude/skills/perception-bootstrap/references/components/skill-$ARGUMENTS-design.md`

2. **Ask the user** using AskUserQuestion:
   - Based on the component type and skill file (if found), present common parts/features
   - Ask: "Which features should this component include?" (multiSelect)
   - Ask about any design decisions that aren't clear from the skill file

3. If the user says "all" or "everything", include the full feature set from the skill file.

### Output of Step 0:
A clear feature list that guides all subsequent steps. Do NOT proceed to coding without user confirmation.

---

## Step 1: Read Foundation (MANDATORY — before writing any code)

```
.claude/skills/perception-bootstrap/references/foundation/skill-palette.md
.claude/skills/perception-bootstrap/references/foundation/skill-surface-mode.md
.claude/skills/perception-bootstrap/references/foundation/skill-perception-ui-system.md
.claude/skills/perception-bootstrap/references/foundation/skill-depth-tokens.md
```

Then read the component skill (if not already read in Step 0):
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
- **NO standalone button size classes** — `mc-btn-xs`, `mc-btn-sm`, `mc-btn-lg`, `mc-btn-xl`, `mc-btn-xxl` DO NOT EXIST. Never use them in HTML.
- **Component toggle/button sizing** — if the component contains a toggle or trigger button (e.g., dropdown toggle), the component's size variants MUST cascade sizing to the button via CSS (e.g., `.mc-dropdown-{size} .mc-dropdown-toggle { padding, font-size, min-height }`). Use the SIZE SCALE table values.
- **Verify classes exist** — before using any `mc-*` class in demo HTML, verify it exists in `src/dist/mcperception.css`. Non-existent classes render silently with no styling.