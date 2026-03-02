---
name: simplify-design
description: >
  Design simplification guide — 21 universal principles for reducing complexity in any UI. Use this skill
  whenever you are generating ANY user interface — it applies universally to all UI work including dashboards,
  forms, settings pages, landing pages, admin panels, mobile screens, onboarding flows, navigation, modals,
  cards, lists, or any visual design. This is a meta-skill that should be applied ON TOP of all other
  component-specific skills (buttons, forms, tables, dashboards, etc.). Trigger when the user mentions
  "simplify", "clean design", "too complex", "cluttered", "overwhelming", "reduce noise", "minimal",
  "streamline", "make it simpler", "less is more", or when reviewing/improving any existing UI. Also apply
  proactively when generating any UI that risks becoming complex — multi-step flows, data-heavy screens,
  forms with many fields, or pages with many actions. Covers: focused value, removing the unnecessary,
  meaningful data, decision support, choice reduction, recommendations, visual hierarchy, organization,
  grouping, progressive disclosure, patterns, first-time experience, ergonomics, inline editing, smart defaults,
  error prevention, and accessibility.
---

# How to Simplify Your Design

Based on **"How to Simplify Your Design — 20+ easy to follow illustrated examples"** by Taras Bakusevych (UX Planet).

Reference: https://uxplanet.org/how-to-simplify-your-design-69d97fde11b9

> **Simplicity = easily understood or done, presenting no difficulty.**
> Simplicity is subjective. We judge simplicity in three stages: can I understand it, can I predict what to do, and can I do it easily. Removing difficulties on the way to users' goals moves you toward simplicity.

---

## What Creates Complexity (AVOID these)

Before the principles, recognize the factors that complicate even simple tasks:

- **Too many choices** — decision paralysis
- **Too much information at once** — cognitive overload
- **Unfamiliar patterns** — forces users to learn new mental models
- **Hidden or unclear status** — uncertainty breeds anxiety
- **Forced manual work** — calculations, data entry, repeated steps
- **Errors without recovery** — stress and lost progress
- **Inconsistency** — breaks expectations, forces re-learning

---

## The 21 Simplification Principles

### 1. Build Products with Focused Value

- Define a **core value** and identify **who** the product is really for
- Not every product should try to be a Swiss Army Knife
- If you want simplicity, you need focus — one job done excellently
- When generating UI: before adding a feature/section, ask "Is this core to the product's value?"

### 2. Remove Everything Unnecessary

The simplest way to achieve simplicity is through **thoughtful reduction**.

- When in doubt, **just remove** — secondary information, infrequent controls, distracting styles
- Remove decorative elements that don't serve the user's task
- Remove redundant labels, duplicate information, unnecessary borders and dividers
- Be careful: remove clutter, not essential functionality

> **"Simplicity is not the absence of clutter, that's a consequence of simplicity. Simplicity is somehow essentially describing the purpose and place of an object."** — Jonathan Ive

### 3. Translate Data into Meaningful Formats

- When users need trends and changes, provide **visual representation** (charts, sparklines, progress bars) rather than raw numbers
- Show additional detail on demand, not upfront
- Extract what's meaningful from raw data and put it in front of the user
- Transform raw tables into summarized insights wherever possible

### 4. Support Quick Decision Making (Hick's Law)

- The time to make a decision **increases with the number of options** (Hick's Law)
- **Eliminate the need to choose** when not required
- Guide and handhold the user through processes
- Pre-select the most common option, highlight recommended paths
- Reduce cognitive load at every decision point

### 5. Too Many Choices Scare Off Users

- Paradox of choice: customers presented with **fewer choices** are up to 10x more likely to act
- Having too many options inhibits action (the Jam Experiment)
- Limit visible options to what's essential
- Use progressive disclosure to reveal more options only when needed
- When generating UI: default to showing **3-5 options max** per decision point

### 6. Provide Recommendations When Multiple Choices Exist

- When choices can't be avoided, **limit them** and **provide a recommendation**
- Highlight a "Recommended" or "Most Popular" option
- Clearly communicate the **key differences** between options
- Share statistics of what others chose ("80% of users pick this plan")
- Used extensively on pricing pages, plan selectors, configuration wizards

### 7. Draw User Attention to the Right Areas

- At every stage of the user journey, some elements are **more relevant** to progressing toward the goal
- Identify those key areas and **draw attention** to them using:
  - Size (larger = more important)
  - Color (brand/primary color for key actions)
  - Contrast (high contrast for priority, low for secondary)
  - Position (top-left gets most attention for LTR)
  - Whitespace (isolation draws the eye)
- De-emphasize everything else

### 8. Use Color and Typography for Content Hierarchy

- Users are selective about what they read — they scan, not read
- Use typography properties to create hierarchy: **typeface, size, weight, color, spacing**
- Primary content: large, bold, dark
- Secondary content: smaller, regular weight, muted color
- Tertiary content: smallest, lightest
- Color reinforces brand and makes content instantly recognizable
- With proper hierarchy, users can quickly find what matters without reading everything

### 9. Organization Makes Many Look Fewer (Structure Reduces Cognitive Load)

- Organized elements are **dramatically easier** to count, scan, remember, and navigate
- An organized grid of items is processed visually as groups; unorganized items must be scanned individually
- Organization **improves recognition AND memorability**
- Always impose structure: grids, alignment, consistent spacing, predictable patterns
- When generating UI: align elements to a grid, use consistent sizes, create visual rhythm

### 10. Group Related Content (Gestalt Principles)

- Grouping components means users deal with **a few groups** rather than many unrelated items
- Use Gestalt principles to create grouping:
  - **Proximity**: items close together feel related
  - **Similarity**: items that look alike feel related
  - **Continuity**: elements arranged in a line/curve feel related
  - **Closure**: incomplete shapes perceived as complete
  - **Common Region**: borders/backgrounds create groups
- Adding borders or background regions around groups is an easy way to create visual separation
- When generating UI: always group related fields, actions, and information into clear visual clusters

### 11. Break Huge Tasks into Smaller Steps (Progressive Steps + Single Column)

- Large forms/tasks are **demotivating** — users may abandon them
- Break huge tasks into a **series of smaller sub-tasks** (multi-step wizards)
- Completing each step gives users a sense of **progress and satisfaction** (endorphin boost)
- Show a **progress indicator** (stepper, progress bar) so users know where they are
- Use **single-column layout** for forms — much easier to fill out than multi-column
- Single column: users move straight down, no confusion about what to fill next

### 12. Be Transparent — Communicate Process and System Status

- Uncertainty makes users anxious — avoid it
- Users should always know: **where they are, where they came from, and what's coming next**
- Show **progress indicators** in multi-step processes
- Keep a **summary of previously provided information** visible — reduces memory load
- Provide clear feedback for every user action (loading states, confirmations, success/error messages)
- Never leave users wondering "Did that work?" or "What happens now?"

### 13. Do the Calculations for Your Users

- The human brain is bad at arithmetic — we're optimized for object recognition, not math
- **Let the system perform all calculations** instead of the user
- Show totals, subtotals, differences, percentages automatically
- Pre-calculate comparison values ("You save $120/year" vs making users subtract)
- Format numbers for readability (thousand separators, currency symbols, rounding)
- When generating UI: never present raw numbers that require the user to do mental math

### 14. Hide Complexity with Progressive Disclosure

- Progressive disclosure = sequencing information and actions across screens to **not overwhelm**
- Hide irrelevant information until it **becomes relevant**
- Move from **abstract to specific** — overview first, details on demand
- Examples: collapsible sections, "Show more" links, nested drill-down navigation, expanding panels
- iOS nested-doll navigation is a good example
- When generating UI: show essentials first, reveal advanced options progressively

### 15. Rely on Commonly Accepted Patterns and Interactions

- Users spend most of their time on **other products** — they expect yours to work the same way
- Use **standard UI patterns**: navigation placement, button styles, form layouts, icons, gestures
- Departing from established patterns forces users to change their mental model
- This doesn't mean stop innovating — but evaluate whether departures are **worth the learning cost**
- When generating UI: use conventional placements (logo top-left, navigation top/left, CTA prominent, etc.)
- Jakob's Law: users prefer your site to work like all the other sites they know

### 16. Design a Streamlined First-Time Experience

- The primary goal: connect users to the product's value **as soon as possible**
- Anything between a user and operating the system is a **barrier** (unless functionally necessary)
- First impressions form fast — users walk away immediately if unsatisfied
- ❌ Don't use manuals or upfront learning material
- ✅ Provide **contextual help** — assistance when and where users need it
- ✅ Design for **empty states** — what does the user see when there's no data yet? Guide them.
- Keep onboarding minimal: name, most essential config, then let them use the product

### 17. Consider Ergonomics and Usage Context

- Simplicity depends on how easily the product can be **physically operated**
- **Fitts's Law**: time to reach a target depends on distance and size — make common elements large and close
- Consider the device: mobile thumb zones, desktop mouse precision, tablet touch targets
- Position primary actions within **easy reach** (bottom of screen on mobile, prominent position on desktop)
- Consider the environment: bright sunlight (contrast), noisy (don't rely on audio), one-handed use
- When generating UI: primary actions should be large and within natural reach zones

### 18. Support Inline Editing and Autosuggest

- Remove all unnecessary interactions, views, and steps
- There is an optimal speed for operating a system — the **"flow state"**
- ❌ Don't break flow with unnecessary popups or navigation to separate edit views
- ✅ Support **inline editing** — click to edit directly in context
- ✅ **Autosuggest values** when many possibilities exist (search, dropdowns, addresses)
- ✅ Auto-complete where possible (email domains, known patterns)
- When generating UI: minimize the number of clicks/taps to accomplish any action

### 19. Use Smart Defaults to Reduce Cognitive Load

- Smart defaults = pre-filled answers based on user data, context, or common choices
- Reduces form completion time and cognitive effort
- Set defaults to what **90-95% of users** would choose
- Use historical data and usage patterns to determine defaults
- Examples: default country based on IP/locale, default date to today, default sort to most relevant
- When generating UI: pre-fill every field that can reasonably be predicted

### 20. Prevent Errors

- Error messages cause **stress** and make users feel they've failed
- ❌ Don't let errors happen in the first place
- ✅ **Auto-check entered data** and provide real-time alerts for invalid input
- ✅ Use **input constraints** (date pickers instead of text fields, dropdowns instead of free text)
- ✅ Present **confirmation dialogs** for destructive/irreversible actions
- ✅ Use **undo** instead of confirmation where possible (less friction)
- Guard destructive actions with **forcing functions** (type "DELETE" to confirm, etc.)
- When generating UI: constrain inputs, validate inline, confirm destructive actions

### 21. Design for Accessibility

- Over 1 billion people worldwide have a disability
- Accessibility is not a niche concern — it **improves the experience for everyone**
- ❌ Don't use color as the only visual means of conveying information
- ✅ Ensure **sufficient contrast** between text and background (WCAG 4.5:1 for text, 3:1 for UI elements)
- ✅ Support **keyboard navigation** for all interactive elements
- ✅ Provide proper **labels, ARIA attributes**, and semantic HTML
- ✅ Design for screen readers, magnification, voice control
- When generating UI: always test against WCAG accessibility requirements

---

## Simplification Checklist

Apply to EVERY UI you generate:

- [ ] **Focused**: Does every element serve the core user task? Remove what doesn't.
- [ ] **Reduced**: Have I removed all unnecessary information, controls, and decoration?
- [ ] **Meaningful data**: Is raw data translated into visual/summarized formats?
- [ ] **Quick decisions**: Are choices minimized? Is a recommendation provided?
- [ ] **Limited options**: Max 3-5 visible options per decision point?
- [ ] **Hierarchy**: Does typography/color clearly communicate primary > secondary > tertiary?
- [ ] **Organized**: Are elements aligned to a grid with consistent spacing?
- [ ] **Grouped**: Are related items visually clustered (proximity, borders, backgrounds)?
- [ ] **Stepped**: Are large tasks broken into smaller steps with progress indicators?
- [ ] **Transparent**: Does the user always know their status, position, and next step?
- [ ] **Calculated**: Does the system do all math/calculations for the user?
- [ ] **Progressive**: Is complexity hidden until relevant (progressive disclosure)?
- [ ] **Familiar**: Does the UI use standard, commonly accepted patterns?
- [ ] **Streamlined**: Is the first-time experience minimal and value-focused?
- [ ] **Ergonomic**: Are primary actions large, close, and within natural reach?
- [ ] **Inline**: Can values be edited in-place without navigating away?
- [ ] **Defaulted**: Are smart defaults pre-filling predictable values?
- [ ] **Error-proof**: Are inputs constrained, validated inline, destructive actions guarded?
- [ ] **Accessible**: Contrast ratios met, keyboard navigable, screen-reader-friendly?

---

## Quick Reference: Common Mistakes to AVOID

| ❌ Don't | ✅ Do Instead |
|----------|--------------|
| Show every feature at once | Focus on core value, reveal advanced features progressively |
| Display raw data tables for trends | Use charts, sparklines, or visual summaries |
| Present 10+ options with no guidance | Limit to 3-5 options, highlight the recommended one |
| Use unfamiliar navigation patterns | Stick to established conventions (Jakob's Law) |
| Force users to do mental arithmetic | Pre-calculate totals, differences, savings |
| Use multi-column form layouts | Use single-column layout — straight line down |
| Leave users guessing their progress | Show progress indicators, status feedback |
| Open separate pages for simple edits | Support inline editing in context |
| Leave all fields blank for users to fill | Pre-fill with smart defaults (90-95% case) |
| Let errors happen, then show error messages | Prevent errors with constraints, validation, and confirmations |
| Use color as the only state indicator | Combine color + text + icon for all states |
| Dump the user into an empty screen with no guidance | Design helpful empty states with next-step actions |
| Add decorative elements that don't serve the task | Remove all visual noise — every pixel earns its place |
| Require upfront learning / manuals | Provide contextual help exactly when needed |
| Place critical actions in hard-to-reach areas | Position primary actions within natural reach zones (Fitts's Law) |