# Perception

Perception is a WCAG AA-compliant UI design system and component library, similar to Bootstrap but with a strict color palette and 5 surface mode architecture.

## Design System Rules (MANDATORY)

1. **Surface Modes**: Every UI element must work on all 5 surface modes (White, Black, Light Hue, Dark Hue, Mid Hue).
2. **Hues**: 7 hue families — neutral, red, green, blue, yellow, magenta, teal. Every component supports all 7.
3. **Sizes**: 6 size tiers — xs, sm, md, lg, xl, xxl. Every component supports all 6.
4. **WCAG AA**: All text ≥ 4.5:1 contrast. All non-text UI ≥ 3.0:1. No exceptions.

## Tech Stack
- **CSS Framework**: Tailwind CSS
- **Showcase**: Storybook with hue/mode/size toolbar selectors

## Skills
The `.claude/skills/perception-bootstrap/` skill contains the full design system specification. It auto-triggers on any UI-related request. For details, read its SKILL.md.
