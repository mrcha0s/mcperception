---
name: data-tables-design
description: >
  Design guide for data tables, grids, and tabular data display. Use this skill whenever the user asks to create,
  design, or build any UI that presents structured data in rows and columns — including data grids, admin panels,
  dashboards with tables, CRM lists, order lists, user management tables, inventory lists, financial tables,
  log viewers, analytics tables, or any screen where multiple items with multiple attributes are displayed.
  Also trigger when the user mentions "data table", "grid", "datagrid", "table UI", "list view with columns",
  "spreadsheet-like", "sortable table", "filterable table", "paginated table", or asks to display tabular data.
  This skill ensures all generated table UI follows proven UX best practices from the Taras Bakusevych design guide.
  Apply this even if the user doesn't explicitly ask for "good UX" — always default to these patterns.
  Covers: when to use tables, column selection, alignment, sizing, typography, visual noise reduction,
  duplication avoidance, and interaction patterns (sorting, filtering, pagination, inline editing,
  row selection, expandable rows, bulk actions).
---

# Data Tables Design Guide

Based on **"Data Tables Design — Basics"** by Taras Bakusevych.

Reference: https://taras-bakusevych.medium.com/data-tables-design-3c705b106a64

---

## 1. When to Use Data Tables

### Use Tables When:
- You need to display **many items with multiple attributes** (e.g., a list of clients with ID, status, contacts, last activity)
- Users need to **scan, compare, sort, filter**, and **act on** structured data
- The data has a **consistent schema** — every item shares the same set of properties
- Users are comfortable with grid-based interaction (most already use Excel/Sheets daily)
- You need great use of space, easy scalability, and straightforward development

### Do NOT Use Tables When:
- The data is better served by **charts or graphs** (e.g., stock price history over time — a line chart is far more effective than a table of numbers)
- You need to show an **overview or summary** — use dashboards, cards, or visualizations instead
- The dataset is very small (1-5 items with 1-2 attributes) — a simple list or card layout may be better
- Each item is primarily visual (images, media) — use a card/grid layout

> **Rule: The decision to use a table must be driven by user needs, not developer convenience.**

---

## 2. What Information to Display

The columns you choose and the order you present them directly affects the **time and effort** required for users to complete their tasks.

### Column Selection Rules
- Selection of data points should be based on **user personas, scenarios, and tasks**
- Study previous application versions and apply logic
- **Don't rush** — spend time thinking about which columns actually matter
- There is **no point adding needless columns** — even empty columns distract user focus from important values
- "Too much of a good thing is bad" — more columns = harder to scan
- Be **strict in your selection** and remove everything unnecessary
- Keep secondary information **hidden** unless the user explicitly requests it (via expandable rows, detail view, or customizable columns)

### Column Ordering — The F-Pattern
- Position **key columns from left to right** (reverse for RTL languages)
- This follows the **F-Layout reading pattern**: users scan the top and left side most, only occasionally glancing right
- The **leftmost columns get the most attention** — place identifiers and critical data there
- Place the **primary identifier** (name, ID, title) in the **first column**
- Place **action columns** (buttons, menus) in the **rightmost column**
- Secondary/supporting data goes in middle columns

### Priority Order (left to right for LTR):
1. Selection checkbox (if applicable)
2. Primary identifier (name, ID, title)
3. Status / most important attribute
4. Key data columns (in order of importance)
5. Secondary data columns
6. Timestamps / dates
7. Actions (edit, delete, more menu)

---

## 3. Text Alignment

Alignment is critical for table readability, mental calculations, and row comparison. Follow these **three simple rules**:

| Data Type | Alignment | Why |
|-----------|-----------|-----|
| **Numeric values** | **Right-aligned** | Aligns decimal points and digit places, making numerical comparison and mental math easy |
| **Text values** | **Left-aligned** | Follows natural reading direction (LTR), easiest to scan |
| **Column headers** | **Same alignment as column content** | Header alignment must match the data below it — right-aligned header for numeric columns, left-aligned for text |

### Additional Alignment Rules
- **Dates**: Left-aligned (they are read as text sequences, not compared numerically)
- **Currency**: Right-aligned (numeric), include currency symbol consistently
- **Status badges/tags**: Left-aligned or centered within their column
- **Checkboxes**: Centered in their column
- **Action buttons/icons**: Right-aligned or centered in the actions column
- Never center-align body text in data columns — it creates a ragged, hard-to-scan visual

---

## 4. Size & Density

The form of the table should be based on **users' needs and abilities**:

### Row Height
- More data = smaller rows to **maximize items above the fold**
- Decreasing row height can sometimes **double the visible items** without scrolling — that's a big deal
- Row height should be thin enough to be space-efficient but still **look clean** — information shouldn't blend into one big mess
- For small datasets (e.g., shopping cart items), use more generous row heights

### Density Tiers
| Density | Row Height | Use Case |
|---------|-----------|----------|
| **Compact** | 32-40px | Large datasets, power users, data-dense enterprise tools |
| **Default** | 44-52px | Most general-purpose tables |
| **Comfortable** | 56-72px | Tables with avatars, multi-line content, or less data |

### Whitespace & Padding
- **Double your whitespace** — even data-heavy tables look clean with decent padding
- Don't cram as much as possible into screen real estate
- Adequate cell padding prevents text from touching borders or adjacent cells
- Horizontal padding: 12-16px per cell minimum
- Vertical padding: 8-12px per cell minimum

> **Rule: Thin rows for density, generous padding for clarity. Find the sweet spot where data is dense but readable.**

---

## 5. Typography

### Rules
- ❌ **Don't use ALL CAPS** — it's hard to read, especially in dense tables
- ❌ **Avoid serif fonts** — they create additional visual noise in data-heavy contexts
- ❌ **Avoid bold and italic** for body data — reserve bold for headers and key identifiers only
- ✅ Use **good quality sans-serif fonts** (Inter, Roboto, SF Pro, Segoe UI, etc.)
- ✅ Use **tabular/monospaced numerals** for numeric columns (ensures digits align vertically)

### Font Sizing
| Element | Size | Weight |
|---------|------|--------|
| **Column headers** | 12-14px | Semi-bold (600) or bold (700) |
| **Body cells** | 13-14px | Regular (400) |
| **Secondary/meta text** | 11-12px | Regular (400), muted color |
| **Aggregation/totals row** | 13-14px | Semi-bold (600) |

### Color
- Column headers: darker or bolder than body text for visual hierarchy
- Body text: standard text color (not too light — maintain contrast)
- Secondary text: muted/gray for less important data within a cell
- Links within cells: brand/primary color, underlined on hover

---

## 6. Visual Noise Reduction

**Less is more.** Users working with large datasets already have high cognitive load — the UI should be as invisible as possible. Your goal is to **make the content shine, not the wrapping around it.**

### Remove:
- ❌ **Unnecessary separators** — reduce or eliminate heavy grid lines between every cell
- ❌ **Zebra-striped backgrounds** — they add visual noise; use subtle hover highlighting instead, or very light stripes only for very large datasets
- ❌ **Shadows, 3D effects, glows** — flat, clean design for tables
- ❌ **Excessive borders** — use spacing and alignment to create visual structure, not heavy borders

### Preferred Approach:
- Use **subtle horizontal dividers** (1px light gray lines between rows) — or none at all for small datasets
- No vertical column dividers (or very faint if truly needed)
- Light **row hover highlight** to help users track across columns
- Alternate row shading ONLY if the table is very wide and users lose their place — and make it **extremely subtle** (near-white tint)

### Row Styling Progression (least to most visual weight):
1. **Free-form** (no lines, no stripes) — best for small, simple datasets
2. **Horizontal lines only** — good default for most tables
3. **Zebra stripes** (very subtle) — only for very large/wide tables where row tracking is difficult
4. **Full grid** (horizontal + vertical lines) — only for spreadsheet-like editing scenarios

---

## 7. Avoid Duplication

Needless duplication has a big impact on readability — it adds items that provide no new value.

### Common Duplication to Eliminate:
- Don't repeat **units** in every cell (e.g., "$" or "kg") — put the unit in the column header instead
- Don't repeat the **column header concept** inside cells (e.g., header "Email" + cell "Email: john@...")
- Don't repeat **common prefixes/suffixes** — extract them to the header or a section label
- Don't show **redundant status indicators** (e.g., both a color badge AND status text AND an icon saying the same thing — pick one or two)
- If a value is the same for all visible rows, consider moving it to a filter/header context rather than repeating it in every row

---

## 8. Interaction Patterns

### 8.1 Sorting
- Users should be able to **sort columns** by clicking the column header
- First click: ascending. Second click: descending. Third click: unsorted (or cycle)
- Show a **sort direction indicator** (chevron/arrow) in the sorted column header
- Sort indicator should NOT interfere with header text alignment
- Only one column sorted at a time (unless advanced multi-sort is specifically needed)
- Sortable columns should have a **hover indicator** showing they're interactive

### 8.2 Filtering
- Provide at minimum a **global search** that filters matching rows
- Column-specific filters are ideal for power users
- Filter controls can appear: in a toolbar above the table, inline within column headers, or in a filter sidebar/panel
- Show **active filter indicators** so users know the data is filtered
- Provide a way to **clear all filters** easily
- Show the **filtered count** (e.g., "Showing 23 of 156 items")

### 8.3 Pagination
- Use pagination when datasets are large — present a set number of rows per page
- Provide **page size options** (10, 25, 50, 100 rows per page)
- Show current page position and total pages/items
- Default to **25-50 rows per page** — good balance of density and performance
- Pagination is preferred over infinite scroll for data tables (users need to reference positions and compare)
- ❌ Infinite scroll is usually **disastrous for data tables** that require prioritization and comparison

### 8.4 Fixed/Sticky Headers
- **Always fix the header row** when the table scrolls vertically — users need column context
- For wide tables with horizontal scroll, consider **fixing the first column** (the identifier column)
- If a toolbar/action bar exists above the table, it should also remain sticky

### 8.5 Row Selection & Bulk Actions
- Provide **checkboxes in the first column** for row selection
- Include a **"Select All" checkbox** in the header (applies to current page if paginated)
- Show a **bulk action toolbar** when rows are selected (delete, export, assign, etc.)
- Display the **count of selected items**
- Selection should be visually clear (highlighted row background)

### 8.6 Row Hover Actions
- Show additional actions **on row hover** to reduce visual clutter
- Common hover actions: edit, delete, view details, quick actions
- Hover actions reduce visual noise but can cause **discoverability issues** — combine with a "..." overflow menu for mobile/keyboard users

### 8.7 Inline Editing
- Allow users to **edit cell values directly** in the table without navigating away
- Clicking an editable cell transforms it into an input field
- Show **save/cancel** controls (or auto-save on blur)
- Indicate which cells are editable (e.g., subtle pencil icon on hover, or text cursor change)
- Add friction (confirmation) for destructive or high-impact edits

### 8.8 Expandable Rows
- Allow rows to **expand inline** to show additional details without leaving the table
- Triggered by clicking the row or an expand chevron icon
- Expanded area can contain: additional fields, related data, sub-tables, notes
- Only one row expanded at a time (or allow multiple, depending on use case)
- Maintains user context — they can still see neighboring rows

### 8.9 Row-to-Detail Navigation
- Clicking a row can navigate to a **detail page/view** for that item
- Alternative: open a **side panel** (sliding drawer) with full details — maintains table context
- Alternative: open a **modal** — more disruptive but simpler to implement
- Side panels are often the best compromise for enterprise applications

### 8.10 Column Customization
- Allow users to **show/hide columns** to focus on what matters to them
- Allow **column reordering** via drag-and-drop
- Allow **column resizing** — users need to see abbreviated data in full
- Optionally allow users to **save column presets** for later use

---

## 9. Responsive & Small Screen Considerations

- Wide tables need **horizontal scrolling** on smaller screens — lock the identifier column
- Consider converting table rows into **stacked card layouts** on mobile
- Collapse non-essential columns into expandable sections on narrow viewports
- Prioritize columns — show only the most critical 2-3 columns on mobile, hide the rest behind expansion
- Always test your table design on **laptop-sized screens** (not just large monitors)

---

## 10. Empty & Loading States

### Empty State
- Never show a blank table — provide a **clear empty state** with:
  - Descriptive message ("No items found" or "No results match your filters")
  - Actionable next step ("Create your first item", "Clear filters", "Try a different search")
  - Optional illustration or icon

### Loading State
- Show **skeleton rows** or a **spinner/progress indicator** while data loads
- Maintain the table header visible during loading so users see the structure
- For partial loading (pagination), show loading indicator in the table body area only

---

## 11. Accessibility Requirements

### Semantic HTML
- Use proper `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` elements
- Column headers must use `<th scope="col">` for screen readers
- Row headers (identifier column) should use `<th scope="row">`

### Keyboard Navigation
- Tables must be navigable via keyboard (Tab between interactive elements, Arrow keys for cells)
- Sorting, filtering, and actions must be keyboard-accessible
- Focus states must be clearly visible

### Screen Readers
- Provide a table `<caption>` or `aria-label` describing the table's purpose
- Sortable columns should announce sort state (`aria-sort="ascending|descending|none"`)
- Row selection state should be announced (`aria-selected`)
- Pagination controls need proper labeling

### Visual Accessibility
- Maintain **minimum 4.5:1 contrast** for table text
- Don't rely on **color alone** for status indicators — combine with text labels, icons, or patterns
- Row hover/selection highlighting must have sufficient contrast
- Ensure the table is usable at **200% zoom** without losing functionality

---

## 12. Implementation Checklist

When generating any data table UI, verify:

- [ ] Table is the right component for this data (not charts, cards, or lists)
- [ ] Only necessary columns are included — no needless data
- [ ] Columns are ordered by importance (left to right for LTR, F-pattern)
- [ ] Primary identifier is in the first column
- [ ] Numeric columns are right-aligned
- [ ] Text columns are left-aligned
- [ ] Column headers match their content alignment
- [ ] Row height is appropriate for the data density
- [ ] Adequate cell padding (horizontal and vertical)
- [ ] Typography: sans-serif, no ALL CAPS, tabular numerals for numbers
- [ ] Visual noise minimized: no heavy borders, no unnecessary stripes/shadows
- [ ] No needless duplication (units in headers, not cells)
- [ ] Sorting is available on relevant columns with direction indicators
- [ ] Filtering is available (at minimum global search)
- [ ] Pagination with page size options (if dataset is large)
- [ ] Header row is sticky on vertical scroll
- [ ] Row hover state is visible
- [ ] Row selection with checkboxes (if bulk actions are needed)
- [ ] Empty state with helpful message and action
- [ ] Loading state with skeleton or spinner
- [ ] Semantic HTML table elements used
- [ ] Keyboard navigable and screen reader accessible
- [ ] Tested on smaller screens / laptop resolution
- [ ] Actions column is in the rightmost position

---

## Quick Reference: Common Mistakes to AVOID

| ❌ Don't | ✅ Do Instead |
|----------|--------------|
| Add every available column "just in case" | Only show columns users actually need for their tasks |
| Left-align numeric data | Right-align numbers for easy comparison |
| Align headers differently than their column content | Match header alignment to column data alignment |
| Use ALL CAPS in table text | Use sentence case or title case |
| Use serif fonts in data tables | Use clean sans-serif fonts |
| Use heavy grid lines, shadows, 3D effects | Use subtle dividers, flat design, ample whitespace |
| Repeat units ($, kg, %) in every cell | Put units in the column header |
| Use infinite scroll for analytical/comparison data | Use pagination with page size options |
| Show a blank table when there's no data | Show an empty state with message + action |
| Make only the header row scrollable with the body | Keep header row sticky/fixed during scroll |
| Use zebra stripes with heavy contrast | Use very subtle alternation or hover highlighting only |
| Rely on color alone for status indicators | Combine color + text label + icon |
| Cram as much data as possible with no padding | Double your whitespace — density with clarity |
| Put identifier/primary data in a middle column | Primary identifier goes in the first (leftmost) column |
| Hide sorting/filtering entirely | Always provide at least basic sort + global search |