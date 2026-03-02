---
name: navigation-design
description: >
  Design guide for navigation systems — top bars, sidebars, hamburger menus, tab bars, breadcrumbs,
  mega menus, and all navigation patterns for web and mobile. Use this skill whenever the user asks to
  create, design, or build any interface that includes navigation — including app shells, admin panels,
  SaaS layouts, website headers, sidebar menus, mobile tab bars, dashboard frameworks, settings layouts,
  or any screen requiring navigation between sections/pages. Trigger when the user mentions "navigation",
  "sidebar", "top bar", "header", "nav", "menu", "hamburger menu", "tab bar", "bottom navigation",
  "breadcrumbs", "mega menu", "drawer", "app shell", "layout", "left menu", "side menu", "nav rail",
  or when generating any multi-page/multi-section interface. Also trigger when the user asks
  "should I use top or side navigation", "horizontal vs vertical nav", or requests an app/dashboard
  layout structure. This skill ensures all navigation follows proven UX research on scanning patterns,
  space efficiency, scalability, and usability from the Bakusevych navigation design guide (UX Collective)
  and supporting NN/g research. Covers: when to use top vs side navigation, F-pattern scanning,
  space trade-offs, scalability, hierarchy, customization, hamburger menu rules, mobile navigation,
  responsive patterns, desktop app conventions, mega menus, and common pitfalls.
---

# Navigation Design Guide

Based on **"Top Navigation vs Side Navigation — Which One Is Better?"** by Taras Bakusevych (UX Collective), supplemented with Nielsen Norman Group research on vertical navigation and eye-tracking studies.

Reference: https://uxdesign.cc/top-navigation-vs-side-navigation-wich-one-is-better-24aa5d835643

> **Navigation is the backbone of any interface. The choice between top and side navigation has a significant impact on usability, scalability, and user satisfaction.**

---

## 1. The F-Pattern: How Users Scan Interfaces

Eye-tracking research shows users scan web pages in an **F-shaped pattern**:

1. First, a **horizontal movement** across the upper part of the content area (top bar)
2. Then **down the page** slightly, with a second shorter horizontal sweep
3. Finally, a **vertical scan** down the left side of the page

### Implications for Navigation
- Both **top** and **left-side** navigation are well-positioned for the F-pattern
- Left-side (vertical) navigation dramatically **improves scanning speed** for navigation items
- Users look at the **left half of the screen 80% of the time** (NN/g eye-tracking research)
- Vertical lists are more efficient for visual search than horizontal lists (psycholinguistics research)
- Place the most important navigation items at the **top of the list** (whether horizontal or vertical)

---

## 2. Top Navigation (Horizontal Header)

### When to Use Top Navigation
| Criteria | Details |
|----------|---------|
| **Few items** | 5 or fewer primary navigation items |
| **Content-focused products** | Blogs, marketing sites, portfolios, media — where immersive content is the priority |
| **Minimal hierarchy** | Flat information architecture with no deep nesting |
| **Space efficiency** | When maximizing vertical content area is critical |
| **Brand presence** | When the header should prominently display logo, search, and user actions |
| **Tablet portrait** | When all nav links must be visible on tablet portrait views |

### Advantages
- Takes only **~6-6.5% of screen space** (thin horizontal bar)
- Familiar — approximately **90% of websites** use top navigation
- Leaves full page width for content
- Can become invisible while scrolling (auto-hide) for immersive experiences
- Supports **mega menus** for large hierarchies (hover-activated dropdowns)
- Works well as the primary navigation for consumer/marketing websites

### Disadvantages
- Limited horizontal space — can only fit **5-7 items** before crowding
- Adding items requires redesign (font size reduction, abbreviations, dropdowns)
- Doesn't support deep hierarchies natively
- On small screens, items get pushed into a hamburger menu anyway
- Mega menus on hover can be tricky on touch devices

### Top Navigation Layout
```
┌──────────────────────────────────────────────────────────┐
│ [Logo]   Home   Products   Pricing   Blog   Contact  [🔍] [👤] │
├──────────────────────────────────────────────────────────┤
│                                                          │
│                    Content Area                          │
│                    (Full width)                          │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 3. Side Navigation (Vertical Sidebar)

### When to Use Side Navigation
| Criteria | Details |
|----------|---------|
| **Many items** | 5+ primary navigation items, especially 8-15+ |
| **Tool/app-focused products** | SaaS apps, admin panels, dashboards, enterprise tools |
| **Deep hierarchy** | Multi-level information architecture with categories/subcategories |
| **Growing architecture** | Products where navigation items will increase over time |
| **Frequent switching** | Users frequently switch between sections during complex tasks |
| **Customizable nav** | Users should be able to organize/customize their navigation |
| **Desktop applications** | Native macOS/Windows apps conventionally use sidebars |

### Advantages
- **Scalable** — can display double the number of items above the fold compared to top nav
- Supports **hierarchical/nested menus** naturally (expandable tree structure)
- Easier to scan vertically (aligns with natural reading patterns)
- Adding new items doesn't require redesign — just add to the list
- Supports **user customization** — drag-and-drop reordering, favorites, pinning (Slack, Outlook, Drive, Confluence)
- **Consistent with desktop apps** — feels natural and native on macOS/Windows
- Translates naturally to mobile (already vertical; collapses to hamburger)
- Always visible — navigation is persistent and discoverable

### Disadvantages
- Takes **~20-25% of screen space** — significantly reduces content area
- Hover-activated flyout submenus are **difficult to use** (diagonal cursor movement)
- May block other vertical panes on screen
- Can feel heavy for simple products with few sections
- Users accustomed to top navigation may resist change (the Jira lesson — see below)

### Side Navigation Layout
```
┌───────────┬──────────────────────────────────────────┐
│ [Logo]    │                                          │
│           │                                          │
│ Dashboard │            Content Area                  │
│ Accounts  │            (~75-80% width)               │
│ Reports   │                                          │
│ Settings  │                                          │
│ ...       │                                          │
│           │                                          │
│ [👤 User] │                                          │
└───────────┴──────────────────────────────────────────┘
  (~20-25%)
```

---

## 4. Decision Framework: Choosing Top vs Side

### By Number of Items
| # of Items | Recommendation |
|-----------|----------------|
| **< 5 items** | **Top navigation** — all items fit comfortably in a horizontal bar |
| **5-10 items** | **Either** — depends on product type and hierarchy depth (see below) |
| **> 10 items** | **Side navigation** — too many items to fit horizontally without compromising |

### By Product Type
| Product Type | Recommendation | Why |
|-------------|----------------|-----|
| **Marketing/portfolio site** | Top nav | Content-focused, few items, immersive experience |
| **Blog/media site** | Top nav | Reading experience priority, content-first |
| **E-commerce** | Top nav + mega menu | Need broad category access without losing product space |
| **SaaS application** | Side nav | Complex, many sections, frequent switching, growing IA |
| **Admin panel** | Side nav | Tool-focused, deep hierarchy, many sections |
| **Dashboard** | Side nav | Persistent navigation needed alongside data views |
| **Enterprise tool** | Side nav | Complex workflows, customization needs, deep hierarchy |
| **Desktop application** | Side nav | Native convention on macOS/Windows |
| **Mobile app** | Bottom tab bar | Thumb-reachable, always visible (see mobile section) |
| **Simple web app** | Top nav | Few features, clean layout priority |
| **Documentation site** | Side nav | Deep hierarchy, many pages, navigation-heavy browsing |

### By Future Growth
- If your navigation will **grow over time** → **Side navigation**
- If your navigation is **fixed and stable** → **Top navigation** is fine
- Side nav lets you add items without redesigning the entire navigation UI

---

## 5. The Hamburger Menu: Rules and Warnings

### The Critical Rule
> **Visible navigation is ALWAYS better than hidden navigation — on both mobile and desktop.**

### Desktop Rules
- ❌ **NEVER hide primary navigation behind a hamburger menu on desktop** — there is enough screen space to show it
- When navigation is hidden, users simply **forget to check it**
- On desktop, a hamburger icon has such a small footprint relative to the page that it's easily ignored
- ❌ **NEVER use BOTH** a visible menu bar AND a hamburger menu with the same items — this duplication is confusing and unnecessary

### Mobile Rules
- On mobile, hamburger menus are sometimes **necessary** due to limited screen space
- But even on mobile, **bottom tab bars are preferred** for primary navigation (always visible, thumb-reachable)
- Use hamburger menus only for **secondary navigation** or when there are too many items for a tab bar
- The hamburger icon is now widely recognized, but discoverability remains lower than visible nav

### Collapsible Sidebar Rules
- For side navigation, you may offer a **collapsed icon-only mode** as an option
- ❌ **Don't default to icon-only** — users must hover or click to see labels, which adds cognitive load
- Icon-only sidebars work ONLY for apps used **daily** where users learn the icons over time
- For websites or infrequent-use products, **always show text labels** by default

---

## 6. Mobile Navigation Patterns

### Bottom Tab Bar (Recommended for Primary Nav)
```
┌──────────────────────────────┐
│                              │
│        Content Area          │
│                              │
├──────────────────────────────┤
│ 🏠Home  📊Stats  ➕  👤Profile  ⚙️ │
└──────────────────────────────┘
```

- **Maximum 5 items** in a bottom tab bar
- Always visible, always accessible, within thumb zone
- Highlight the active tab clearly
- Use icon + label (not icon-only) for clarity

### Hamburger/Drawer (For Secondary or Extended Nav)
- Use for items that don't fit in the bottom tab bar
- Slides in from the left (or right)
- Contains full navigation tree, settings, account options

### Tab Bar + Hamburger Combination
- Bottom tab bar for **primary navigation** (3-5 most important destinations)
- Hamburger/drawer for **secondary navigation** (settings, help, less frequent sections)
- This is the standard pattern for most mobile apps today

### Mobile Navigation Rules
- Touch targets minimum **48×48px** (Material Design) or **44×44px** (Apple HIG)
- Primary actions within **thumb zone** (bottom 1/3 of screen)
- Use swipe gestures for tab switching where appropriate
- Avoid deep nesting on mobile — flatten the hierarchy

---

## 7. Responsive Navigation Strategy

### Desktop → Tablet → Mobile Progression

| Screen Size | Navigation Pattern |
|------------|-------------------|
| **Desktop (>1024px)** | Full side nav OR full top nav bar |
| **Tablet landscape (768-1024px)** | Collapsed side nav (icon-only) OR full top nav |
| **Tablet portrait (600-768px)** | Hamburger menu OR collapsed side nav |
| **Mobile (<600px)** | Bottom tab bar + hamburger for overflow |

### Key Responsive Rules
- Side navigation translates **naturally to mobile** — it's already vertical, just needs to collapse to a drawer
- Top navigation must be **completely redesigned** for mobile (transformed into vertical dropdown or hamburger)
- If you use **side navigation on desktop**, you get more **design consistency** across breakpoints
- Collapsible sidebar should transition: full sidebar → icon-only rail → hamburger drawer

---

## 8. Hierarchy, Sub-Navigation, and Mega Menus

### Side Nav Hierarchy
```
├── Dashboard
├── Projects                    ← Parent
│   ├── Active Projects         ← Child
│   ├── Archived Projects       ← Child
│   └── Templates               ← Child
├── Team
│   ├── Members
│   └── Roles
├── Reports
└── Settings
    ├── General
    ├── Billing
    └── Integrations
```
- Side navigation excels at showing **tree-structure hierarchies**
- Use expand/collapse controls (chevrons) for parent items
- Indent child items to show nesting visually
- Limit nesting to **2-3 levels** maximum — deeper = use a separate page

### Top Nav Mega Menus
- Hover-activated panels showing multiple columns of links
- Excellent for **e-commerce** (categories → subcategories → featured items)
- Include images/icons to improve scannability
- ❌ Tricky on touch devices — consider click-activated on tablets
- Show **no more than 3 levels** in a mega menu

### Sub-Navigation Patterns
| Primary Nav | Sub-Nav | When |
|-------------|---------|------|
| Top bar | Horizontal sub-tabs below header | Few subcategories per section |
| Top bar | Left sidebar for sub-pages | Many subcategories, deep content |
| Side bar | Nested expandable tree | Hierarchical structure |
| Side bar | Content-area tabs | Section-specific views |

---

## 9. Navigation Element Anatomy

### Sidebar Navigation Item
```
┌──────────────────────┐
│ [Icon]  Label    [▸] │  ← Icon (optional), text label (required), expand indicator
└──────────────────────┘
```
- **Icon** (optional but recommended): aids recognition, must be accompanied by text label
- **Text label** (required): clear, concise, descriptive
- **Active state**: distinct background, color, or left border highlight
- **Hover state**: subtle background change
- **Expand indicator**: chevron for items with children
- **Badge/counter**: notification dots or counts (e.g., "Inbox (3)")
- Minimum height: **40-48px** per item for comfortable clicking

### Top Navigation Item
```
│  Label  │  Label  │  [Active]  │  Label  │
```
- Text-based, optionally with small icons
- Active state: underline, background change, or bold text
- Hover state: subtle color change
- Consistent horizontal spacing between items
- Don't crowd items — maintain **24-32px minimum** gap between items

---

## 10. The Jira Lesson: Changing Navigation Is Risky

Jira Cloud attempted to transition from top navigation to a side menu. The result: **over 95% of early testers preferred the old top navigation**. Jira ultimately reverted the change.

### Lessons
- Users are **creatures of habit** — even small navigation changes cause frustration
- When changing navigation patterns, use **gradual transitions**, not sudden switches
- Allow users to **opt in** to new navigation or provide a toggle during transition
- Always **test with real users** before committing to a navigation overhaul
- If your product already has established navigation, change it only with **very strong justification**

---

## 11. Navigation Best Practices (Universal)

### Always Do
- ✅ **Keep primary navigation visible** — don't hide it behind icons or menus on desktop
- ✅ **Highlight the active/current section** clearly (color, background, border, bold)
- ✅ **Use clear, descriptive labels** — no jargon, no abbreviations without context
- ✅ **Maintain consistent navigation** across all pages/sections
- ✅ **Include breadcrumbs** for deep hierarchies (especially with side nav)
- ✅ **Group related navigation items** together with visual separators or section headers
- ✅ **Place user/account actions** consistently (top-right for top nav, bottom of sidebar for side nav)
- ✅ **Test on multiple screen sizes** — navigation must work across all breakpoints
- ✅ **Support keyboard navigation** — Tab/Arrow keys, Enter to select

### Never Do
- ❌ Don't hide primary desktop navigation in a hamburger menu
- ❌ Don't use icon-only navigation as default for infrequent-use products
- ❌ Don't duplicate the same navigation in two different UI elements
- ❌ Don't use more than 3 levels of nesting in navigation
- ❌ Don't change established navigation patterns without testing
- ❌ Don't use hover-activated flyout menus that require diagonal cursor movement
- ❌ Don't place navigation in unexpected locations (bottom of page, right side)
- ❌ Don't exceed 5 items in a mobile bottom tab bar
- ❌ Don't use vague labels like "More" or "Misc" as primary navigation items

---

## Implementation Checklist

When generating any UI with navigation, verify:

- [ ] Navigation type (top vs side) matches product type, item count, and hierarchy depth
- [ ] Top nav: ≤7 items visible, no crowding, clear active state
- [ ] Side nav: text labels visible by default, expand indicators for parents, ≤3 nesting levels
- [ ] Primary navigation is **visible by default** on desktop — never hidden behind hamburger
- [ ] Active section is clearly highlighted (color, background, or indicator)
- [ ] Labels are clear, descriptive, and jargon-free
- [ ] Navigation is consistent across all pages and breakpoints
- [ ] Responsive: collapses gracefully from desktop → tablet → mobile
- [ ] Mobile: bottom tab bar (≤5 items) for primary, hamburger/drawer for secondary
- [ ] Touch targets are minimum 44-48px
- [ ] Keyboard navigation is supported (Tab, Arrow keys, Enter)
- [ ] Breadcrumbs are present for deep hierarchies
- [ ] User/account actions in expected position (top-right or sidebar bottom)
- [ ] No duplicate navigation elements
- [ ] Grouping and section headers organize related items
- [ ] Icons accompany text labels (not icon-only for primary nav)

---

## Quick Reference: Common Mistakes to AVOID

| ❌ Don't | ✅ Do Instead |
|----------|--------------|
| Hide desktop nav behind a hamburger menu | Show full navigation visibly on desktop |
| Use icon-only sidebar as default | Always show text labels (icon-only as optional collapse) |
| Cram 12 items into a top nav bar | Switch to side navigation for 8+ items |
| Use identical hamburger + top bar (duplicate) | Choose ONE primary navigation pattern |
| Use top nav for complex SaaS/enterprise apps | Use side navigation for tool-focused products |
| Use side nav for a simple marketing site | Use top navigation for content-focused sites |
| Nest navigation 4+ levels deep | Limit to 2-3 levels; use separate pages for deeper content |
| Use vague labels ("Stuff", "More", "Other") | Use clear, specific, descriptive navigation labels |
| Put more than 5 items in mobile tab bar | 5 max in tab bar; overflow goes to hamburger drawer |
| Change established navigation suddenly | Test with users, transition gradually, offer toggle |
| Ignore responsive behavior | Plan navigation collapse strategy for all breakpoints |
| Place user/account in unexpected location | Top-right corner (top nav) or sidebar bottom (side nav) |
| Use hover flyout menus requiring diagonal movement | Use click-to-expand or dropdown instead |