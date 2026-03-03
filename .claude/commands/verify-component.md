Validate an existing Perception Bootstrap component: $ARGUMENTS

This is a READ-ONLY operation. Do not modify any files.

## What to Check

Delegate to the `validator` agent to inspect `src/components/$ARGUMENTS/`:

### 1. Palette Compliance
- Grep every hex literal (#XXXXXX) in the component directory
- Cross-reference each against `.claude/skills/perception-bootstrap/references/foundation/skill-palette.md`
- Report: "X hex values found, Y valid, Z violations" with file:line for each violation

### 2. WCAG Contrast Ratios
- For each of 35 hue×mode combinations (7 hues × 5 modes):
  - Compute text-on-surface, accent-on-surface, btn-text-on-btn-bg, divider-on-surface, outline-on-surface
  - Text thresholds: ≥ 4.5:1. UI thresholds: ≥ 3.0:1.
- Report as a 35-row table with pass/fail per pair

### 3. Variant Completeness
- Check demo HTML for presence of: 5 modes, 7 hues, 6 sizes
- List any missing combinations

### 4. Dark Surface Rules (Mode 2 & 4)
- Grep for forbidden patterns: gradients, box-shadows, border-width > 1px, radius > 3px
- Grep for: bold buttons (font-weight 600+), uppercase buttons
- Report each violation with file:line

### 5. Deliverables Check
- .tsx exists?
- .test.ts exists?
- .demo.html exists?
- README.md exists with props table?

## Report Format

```
PALETTE:     ✅ or ❌ (details)
WCAG:        ✅ or ❌ (X/35 pass)
VARIANTS:    ✅ or ❌ (details)
DARK RULES:  ✅ or ❌ (details)
DELIVERABLES: ✅ or ❌ (what's missing)

OVERALL:     ✅ READY TO SHIP | ❌ NEEDS FIXES
```