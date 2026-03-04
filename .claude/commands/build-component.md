---
hooks:
  stop:
    - type: agent
      prompt: >
        Verify the Perception Bootstrap component at src/components/$ARGUMENTS/.
        Check: (1) Grep all hex values in .tsx/.css/.html files — every one must exist in
        .claude/skills/perception-bootstrap/references/foundation/skill-palette.md.
        (2) A .demo.html file exists and contains sections for all 5 surface modes
        (search for strings 'Mode 1' through 'Mode 5').
        (3) A README.md file exists with at least a Props table.
        (4) A .test.ts file exists.
        If ALL checks pass, respond ok:true.
        If ANY check fails, respond ok:false and list exactly what's missing.
      timeout: 120
---

Build a single Perception Bootstrap component: $ARGUMENTS

## Phase 0: Reference Analysis & Feature Scoping (MANDATORY)

### If $ARGUMENTS contains a URL (http:// or https://):

1. **Screenshot the reference:** Use Chrome DevTools MCP (`navigate_page` + `take_screenshot`) to capture the reference design.
   Scroll and take multiple screenshots if needed to see the full component.
   If MCP is not connected, ask the user to describe the component or paste a screenshot.

2. **Analyze the visual design** from the screenshot:
   - Component anatomy: parts/sections (header, body, footer, icons, badges, etc.)
   - Variants: visual variants shown (filled, outlined, ghost, etc.)
   - Interactive states: hover, focus, disabled, active, selected, etc.
   - Layout: horizontal, vertical, stacked, grid, inline, etc.
   - Special features: animations, collapse, drag, sort, dismiss, etc.

3. **Ask the user** which features to include and which to skip.
   Present identified parts as a multiSelect checklist via AskUserQuestion.
   Do NOT proceed to coding without user confirmation on the feature set.

### If $ARGUMENTS has NO URL:

1. Read the component skill file if it exists (Phase 1, step 5 below).
2. **Ask the user** about which features/parts to include based on the component type.
   Present common parts/features as a multiSelect checklist.
3. If the user says "all" or "everything", include the full feature set.

Do NOT start writing code until the feature set is agreed upon.

---

## Phase 1: Read Skills (MANDATORY — do this first)

Read these files before writing any code:

1. `.claude/skills/perception-bootstrap/references/foundation/skill-palette.md`
2. `.claude/skills/perception-bootstrap/references/foundation/skill-surface-mode.md`
3. `.claude/skills/perception-bootstrap/references/foundation/skill-depth-tokens.md`
4. `.claude/skills/perception-bootstrap/references/foundation/skill-perception-ui-system.md`
5. `.claude/skills/perception-bootstrap/references/components/skill-$ARGUMENTS-design.md`
   (if this file doesn't exist, proceed with foundation rules only)

## Phase 2: Build

Create all files in `src/components/$ARGUMENTS/`:

**{Name}.tsx** — React component
- Props: hue (7 values), mode (1-5), size (6 values), variant, + component-specific
- Modes 1/3/5: resolve colors per skill-surface-mode.md
- Modes 2/4: apply dark depth rules from skill-depth-tokens.md (flat surfaces, 1px borders, no shadows, radius ≤ 3px, buttons weight 400 sentence case)
- All states: default, hover, pressed, focus, disabled
- Keyboard accessible, ARIA attributes

**{Name}.test.ts** — WCAG contrast verification
- Test all 35 hue×mode combinations
- Assert: text ≥ 4.5:1, accent ≥ 4.5:1, btn-text/btn-bg ≥ 4.5:1, divider ≥ 3.0:1
- ZERO failures

**{Name}.demo.html** — Self-contained showcase
- No build tools needed, opens directly in browser
- Section per surface mode (M1 through M5) with correct background
- Within each mode: all 7 hues
- Within each hue: all 6 sizes
- All component variants
- All interactive states
- Code snippets for each variant

**index.ts** — Barrel export
**README.md** — Props table, usage examples per mode, accessibility notes

## Phase 3: Verify

Before finishing, run and report these checks:
- PALETTE: Every hex from skill-palette.md only? Black = #0A0A0A?
- WCAG: All 35/35 hue×mode pairs pass?
- VARIANTS: 7 hues × 5 modes × 6 sizes × all variants present?
- DARK DEPTH: M2/M4 — no gradients, no shadows, 1px borders, radius ≤ 3px?
- DEMO: Self-contained HTML with ALL variations?
- README: Props table, 5 mode examples, accessibility notes?

## Rules
- ONLY palette colors. Zero hardcoded hex. Black = #0A0A0A not #000000.
- All text ≥ 4.5:1, all UI ≥ 3.0:1.
- M2/M4: flat surfaces, 1px borders, radius ≤ 3px, buttons weight 400, sentence case.
- Do NOT finish until ALL deliverables are complete and verified.

NOTE: An embedded stop hook will verify your work. You cannot finish this task until
the demo HTML exists with all 5 modes and all hex values are valid palette colors.