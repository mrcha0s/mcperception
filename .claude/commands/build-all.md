Build ALL Perception Bootstrap components.

## Components to Build

1. button
2. input
3. selection
4. navigation
5. table
6. loading
7. card
8. alert
9. badge
10. modal

## How to Build

For EACH component, delegate to the `component-builder` agent in parallel.

Each agent must:
1. Read all 4 foundation skills (palette, surface-mode, depth-tokens, perception-ui-system)
2. Read its matching component skill from references/components/ (if exists)
3. Generate: {Name}.tsx, {Name}.test.ts, {Name}.demo.html, index.ts, README.md
4. Verify: palette compliance, WCAG for 35 pairs, all 210 variants, dark surface rules

## After All Builders Finish

Run the `validator` agent on EACH component directory.
Compile results into a master compliance table:

```
╔═══════════╦═════════╦══════╦══════════╦════════════╦══════╦═════════╗
║ Component ║ Palette ║ WCAG ║ Variants ║ Dark Rules ║ Demo ║ Overall ║
╠═══════════╬═════════╬══════╬══════════╬════════════╬══════╬═════════╣
║ button    ║ ✅      ║ ✅   ║ ✅       ║ ✅         ║ ✅   ║ ✅      ║
║ input     ║ ✅      ║ ❌   ║ ✅       ║ ✅         ║ ✅   ║ ❌      ║
║ ...       ║         ║      ║          ║            ║      ║         ║
╚═══════════╩═════════╩══════╩══════════╩════════════╩══════╩═════════╝
```

## Rules

- ALL 10 components must pass ALL checks before this task is complete
- Any component with ❌ must be fixed and re-validated
- Final deliverable: master table showing 10/10 ✅ OVERALL

## Token Cost Warning

Building 10 components in parallel uses significant tokens.
If running sequentially is preferred, build one at a time with:
  /build-component button
  /build-component input
  etc.