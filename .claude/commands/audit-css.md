Audit CSS architecture for Perception Bootstrap component: $ARGUMENTS

This is a READ-ONLY operation. Do not modify any files.

## What to Check

Delegate to the `css-auditor` agent to perform a deep CSS architecture audit.

Target: `$ARGUMENTS` (component name, file path, or "all")

### Category A — Size Scale Integrity
- [A1] No duplicate size variants (all 6 sizes must produce distinct dimensions)
- [A2] Size scale alignment with CLAUDE.md SIZE SCALE table
- [A3] All 6 sizes present (xs, sm, md, lg, xl, xxl)

### Category B — Mode Consistency
- [B1] Border-radius consistent across modes (M2/M4 ≤ 3px, no unexplained differences)
- [B2] All 5 mode overrides present (base=M2, plus M1, M3, M4, M5)
- [B3] Panel-aware overrides for input-like controls (.mc-panel .mc-{component})

### Category C — Palette & Color Integrity
- [C1] No opacity/rgba/color-mix used to create off-palette colors
- [C2] No hardcoded hex outside var() (only #FFFFFF and #0A0A0A permitted as raw hex)
- [C3] Disabled state uses explicit palette colors, not opacity

### Category D — Interactive States & Accessibility
- [D1] All interactive states have CSS selectors (default, hover, focus, disabled, checked/active)
- [D2] :focus-visible preferred over bare :focus
- [D3] Wrapper/label styles exist for selection controls (.mc-control, .mc-control-label)

## Report Format

```
CATEGORY A:  [A1] ✅/❌  [A2] ✅/⚠️  [A3] ✅/❌
CATEGORY B:  [B1] ✅/⚠️  [B2] ✅/❌  [B3] ✅/⚠️
CATEGORY C:  [C1] ✅/❌  [C2] ✅/⚠️  [C3] ✅/❌
CATEGORY D:  [D1] ✅/⚠️  [D2] ✅/ℹ️  [D3] ✅/⚠️

VERDICT: ✅ CLEAN | ⚠️ HAS WARNINGS | ❌ HAS CRITICAL ISSUES
```

Each finding includes file:line, what's wrong, and suggested fix.
