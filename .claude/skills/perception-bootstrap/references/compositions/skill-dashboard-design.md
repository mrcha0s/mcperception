---
name: dashboard-design
description: >
  Design guide for dashboards, analytics views, admin overviews, and summary screens. Use this skill whenever
  the user asks to create, design, or build any dashboard — including analytics dashboards, admin panels,
  KPI overviews, monitoring screens, reporting views, control rooms, executive summaries, metrics pages,
  real-time status boards, or any screen that provides an at-a-glance summary of key information.
  Also trigger when the user mentions "dashboard", "analytics page", "KPI view", "metrics overview",
  "admin panel", "monitoring screen", "data visualization", "charts and graphs", "summary view",
  "overview page", or asks to display aggregated data with charts/widgets. This skill ensures all generated
  dashboard UI follows the 10 proven rules from the Taras Bakusevych design guide (UX Planet).
  Apply this even if the user doesn't explicitly ask for "good UX" — always default to these patterns.
  Covers: dashboard purpose, chart selection, naming conventions, layout & flow, card/widget structure,
  whitespace, information density, personalization, data tables, and design workflow.
---

# Dashboard Design Guide

Based on **"10 Rules for Better Dashboard Design"** by Taras Bakusevych (UX Planet).

Reference: https://uxplanet.org/10-rules-for-better-dashboard-design-ef68189d734c

> **A dashboard is an at-a-glance preview of the most crucial information for the user at the moment they are looking at it, and an easy way to navigate directly to areas of the application that require attention.**

---

## Rule 1: Define the Purpose of the Dashboard

Like any view, a dashboard has a specific purpose. Getting this wrong renders all further design efforts meaningless.

### Two Primary Dashboard Types

#### Operational Dashboard
- Present data deviations to the user **quickly and clearly**
- Show current resources, their status, and support actions
- A "digital control room" — designed to help users be **quick, proactive, and efficient**
- **Time-sensitive** — focused on immediate action
- Key qualities: real-time data, alerts, status indicators, action shortcuts

#### Analytical Dashboard
- Provide at-a-glance information used for **analysis and decision making**
- **Less time-sensitive** — not focused on immediate action
- Help users make the best sense of data, **analyze trends**, and drive decisions
- Key qualities: historical data, trends, comparisons, drill-down capability

### Rules
- The dashboard type must be driven by **user roles and needs**
- A product may have **multiple roles** that each need a unique dashboard
- Lower-tier managers may need operational dashboards; higher management needs analytical
- ❌ **Don't mix types** — don't give action-focused users heavy analytics, or decision-makers a wall of real-time alerts
- Always ask: "What does this user need to **do** when they look at this dashboard?"

---

## Rule 2: Choose the Right Data Representation

Data representation is complex — dashboards typically show multiple types of information (static values, dynamic changes over time, comparisons). Choosing the wrong chart type confuses users or leads to data misinterpretation.

### Chart Selection by Purpose

#### Relationship (How are values connected?)
| Chart Type | Use When |
|-----------|----------|
| **Scatter plot** | Correlation and distribution analysis between two variables |
| **Bubble chart** | Introducing a third dimension (size) to correlation data |
| **Network diagram** | Connections between data points are important |

#### Comparison (How do values differ?)
| Chart Type | Use When |
|-----------|----------|
| **Column/Bar chart** | Comparing discrete categories or time periods |
| **Line chart** | Comparing trends over continuous time |
| **Grouped/Stacked bar** | Comparing composition across categories |

**Comparison rules:**
- When one dimension is **time**, it should ALWAYS be the **X axis** — time flows left to right
- With horizontal/vertical bar charts, **sort by largest value**, not randomly
- Line charts: don't show more than **5 lines**
- Bar charts: don't show more than **7 bars/categories**

#### Composition (What makes up the whole?)
| Chart Type | Use When |
|-----------|----------|
| **Pie chart** | Simple composition with 2-4 segments of significantly different sizes |
| **Donut chart** | Same as pie but with a center metric; max 4-5 segments |
| **Stacked bar/area** | Composition over time or across categories |
| **Treemap** | Hierarchical composition with many segments |

**Pie/Donut warnings:**
- ⚠️ Pie and donut charts have a **bad reputation** for good reason
- Humans are bad at differentiating values via **angles and areas**
- ❌ Don't use when: too many segments, or very similar values
- ✅ Only use for: 2-4 visually distinct proportions

#### Distribution (What is the range/spread?)
| Chart Type | Use When |
|-----------|----------|
| **Histogram** | Distribution of a single variable |
| **Box plot** | Outliers, median, range across groups |
| **Heat map** | Density/intensity across two dimensions |

### Charts to AVOID
| ❌ Avoid | Why |
|---------|-----|
| **Gauge/Speedometer charts** | Replicate physical objects digitally — a bad idea. Waste space for a single value. |
| **3D charts** | Lower readability, distort data perception, distract from information |
| **Overstyled/decorative charts** | Visual noise, harder to read AND harder to develop |

### Decision Questions
Before selecting a chart type, ask:
1. How many **variables** do I want to show in a single chart?
2. Will I display values over a **period of time**, or among **items/groups**?
3. How many **data points** do I need to display for each variable?

---

## Rule 3: Clear & Consistent Naming, Formatting, and Values

Since the dashboard's goal is to communicate **at a glance**, every detail counts.

### Naming Conventions
- Use a **clear, consistent naming framework** — the same metric name everywhere in the product
- "One framework. No questions."
- If a metric is called "Revenue" on the dashboard, it must be "Revenue" (not "Income" or "Earnings") in detail views

### Number Formatting
- **Truncate/round large values**: show "$1.2M" not "$1,234,567.89"
- Use consistent decimal precision across the dashboard
- Use **consistent units** — don't mix formats
- Include **trend indicators** (↑ ↓ or percentage change) next to key values for context

### Date Formatting
- Use a **consistent date format** throughout the dashboard
- Match the format to the user's locale/expectations
- For time-series: use the same granularity across related widgets (don't mix daily and monthly in the same view without clear labeling)

---

## Rule 4: Define the Layout — Grid, Flow, Prioritize

### Grid System
- Use grids to achieve **effective alignment and consistency** with little effort
- Grids create a skeleton/structure for your design
- Invisible lines upon which design elements are placed, tying them into a **cohesive system**
- Critical for dashboards — you need to organize a ton of information seamlessly

### Information Hierarchy — The Reading Flow
- The **top-left corner** naturally gets the most attention (for LTR languages)
- Position **key information from left to right, top to bottom**
- Users scan the first row, then move down to the next

### Layout Priority Order (top-left to bottom-right):
1. **KPI summary cards** — the most critical numbers at a glance (top row)
2. **Primary trend charts** — the main visualization(s) the user needs
3. **Secondary charts/comparisons** — supporting data
4. **Data tables or detail lists** — granular data for users who want to dig deeper
5. **Activity feed / Alerts / Notifications** — recent events, items needing attention

### Flow Rules
- If there are **dependencies** between groups of information (decision A depends on data from B), create a layout where users don't need to go back and forth
- Create a **continuous flow for easy scanning**
- Group related widgets together using proximity

---

## Rule 5: Use Building Blocks with Consistent Structure (Cards/Widgets)

After defining the grid, build with **cards/widgets** that hold info, charts, and controls.

### Why Cards
- Cards are **almost infinitely manipulatable**
- Excellent for responsive design — they act as content containers that easily scale up or down
- Good for developer implementation and future scalability

### Card Internal Layout (MANDATORY)
Every card/widget MUST follow this consistent structure:

```
┌──────────────────────────────────────┐
│ Widget Title          [Controls/▾/⋯] │  ← Top: name left, actions right
│                                      │
│                                      │
│         [Content Area]               │  ← Middle: chart, metric, table, etc.
│                                      │
│                                      │
│ [Footer / secondary info / link]     │  ← Bottom (optional): "View all", legend, etc.
└──────────────────────────────────────┘
```

- **Widget title**: top-left corner, always present
- **View controls or actions**: top-right corner (time range selector, filter dropdown, overflow menu)
- **Content area**: the rest of the card — chart, metric, table, list
- When all cards have this **consistent structure**, users find everything where they expect it

### Responsive Benefits
- As cards get larger or smaller, main components remain **anchored to specific locations**
- Title stays top-left, controls stay top-right, content adapts
- This is also beneficial for developers and long-term design scalability

---

## Rule 6: Double Your Margins (Whitespace)

White space (negative space) is the area between elements. It matters as much as any other design element.

### Rules
- **Double your margins** — if your initial spacing feels right, try doubling it
- Dashboard widgets that are too tightly packed become visually overwhelming and hard to parse
- Generous whitespace between cards makes each widget distinct and scannable
- Whitespace helps users' eyes **rest and reset** between data groups

### Specific Guidance
- Minimum gap between cards/widgets: **16-24px** (aim for 24px+)
- Internal card padding: **16-24px**
- Clear visual separation between sections without heavy borders
- Whitespace IS the separator — you rarely need actual divider lines between cards

> **"In case the white space is not balanced, content will be hard to read."**

---

## Rule 7: Don't Hide Information or Rely on Interactions Too Much

The primary goal of a dashboard is to surface information **at a glance**. Relying on scrolling or heavy interactions dilutes the whole purpose.

### The Scroll Problem
- Designing long **scrollable dashboards** is one of the most frequent mistakes
- Designers try to be "clear" by positioning things one under another — but everything below the fold gets **little attention**
- Only information visible **above the screen fold** gets discovered

### The Solution: Prioritize
- After research and interviews, identify the **core information**
- Work only with **space above the fold** to display it
- **Don't tell the full story — summarize instead**, surface only key info
- Use interactions to fit MORE content without overwhelming (hover tooltips, drill-downs)

### The Tab/Interaction Trap
- ❌ Don't fully rely on interactions (tabs, toggles, accordions) as the main way to work with the dashboard
- Hiding information behind tabs means users must **painfully switch** between views to get the full picture
- Content in hidden tabs is effectively **invisible** — same problem as below-the-fold content

### The Overload Trap
- Humans are bad at keeping track of multiple things simultaneously
- ❌ Don't demand too much from users, don't overwhelm them with data
- ✅ Use a **maximum of 5-7 different widgets** per view
- More than that makes it hard for users to focus and get a clear overview

---

## Rule 8: Personalization Rather Than Customization

### Personalization (done by the system)
- The system identifies users and delivers **content, experience, or functionality matching their role**
- Automatic — users see what's relevant without configuration
- Based on user role, permissions, department, past behavior

### Customization (done by the user)
- Users can configure layout, content, or functionality to meet their needs
- Add/remove widgets, rearrange cards, choose visible metrics, save view presets

### Rules
- **Personalize FIRST, then allow customization**
- Giving users power to customize is good — **as long as the view was already personalized** for their role
- ❌ Designing customization as an excuse to avoid figuring out what each user role truly needs is a mistake
- Don't leave users on their own to build a useful view from scratch
- Provide a **smart, role-based default** that works well out of the box, THEN let users fine-tune

---

## Rule 9: Data Tables in Dashboards Must Be Interactive and Properly Aligned

When integrating data tables or lists into dashboards:

- Data tables are great for showing **detailed information for many items** (client lists, transactions, orders)
- Tables on dashboards should be **interactive** — sortable, filterable, clickable
- Follow the data table alignment rules:
  - **Right-align** numeric columns
  - **Left-align** text columns
  - **Align column headers** to match their content
- Tables on dashboards should show only the **most relevant columns** — keep them compact
- Provide a "View All" or "See Details" link to navigate to the full table view
- Apply all rules from the **data-tables-design** skill when including tables in dashboards

---

## Rule 10: Design the Dashboard Last

This is a workflow/process rule, but critical to include:

- The dashboard is often the **most visually exciting** view — so it's tempting to design it first
- ❌ **Don't design the dashboard first**
- ✅ A dashboard is a **summary view of everything else** — it displays key info from various parts of the application
- It's more practical to design it **at the end**, once other views exist
- Otherwise, you'll constantly go back and update dashboard designs as other pages evolve
- Once most views are designed, you'll have a **library of components** ready for the dashboard

---

## Supplementary: KPI Card Design

KPI cards (the summary numbers at the top) are a core dashboard element. Design them as:

```
┌─────────────────────┐
│ Revenue        ↑12% │  ← Label + trend indicator
│ $1.2M               │  ← Primary metric value (large, bold)
│ vs $1.07M last mo.  │  ← Comparison/context (smaller, muted)
└─────────────────────┘
```

### KPI Card Rules
- **Large, bold metric value** — the number must be instantly readable
- Short, clear **label** describing what the metric is
- **Trend indicator** (up/down arrow, percentage change, color)
- **Comparison context** (vs last period, vs target, vs benchmark)
- Use **color intentionally**: green for positive, red for negative/alerts, neutral for stable
- Round/truncate values: "$1.2M" not "$1,234,567"
- Maximum **4-6 KPI cards** in the summary row

---

## Supplementary: Color in Dashboards

### Color Rules
- Use color **intentionally and consistently** — every color should have meaning
- **Red/Orange**: alerts, negative trends, errors, critical states
- **Green**: positive trends, success, healthy states
- **Blue/Brand color**: primary data, selected states, active elements
- **Gray/Neutral**: secondary data, inactive states, less important info
- Don't use too many colors — limit your **chart palette to 5-7 distinct colors**
- Ensure colors are **distinguishable for colorblind users** (avoid red-green only differentiation)
- Use color + shape/pattern as redundant encoding for accessibility
- Dark themes work well for monitoring/operational dashboards (reduced eye strain, makes colored data pop)
- Light themes work well for analytical dashboards (better readability for dense data)

---

## Implementation Checklist

When generating any dashboard UI, verify:

- [ ] Dashboard purpose is clear: operational (real-time, action-focused) or analytical (trends, decision-making)
- [ ] Chart types are appropriate for the data being shown (relationship, comparison, composition, distribution)
- [ ] No gauges, 3D charts, or overstyled visualizations
- [ ] Pie/donut charts limited to 2-4 distinct segments (or replaced with bar charts)
- [ ] Time is always on X axis in time-series charts
- [ ] Bar charts sorted by value (not random), line charts limited to ≤5 lines
- [ ] Consistent naming conventions across all widgets and the application
- [ ] Numbers rounded/truncated for at-a-glance readability
- [ ] Grid-based layout with clear information hierarchy (top-left = most important)
- [ ] All cards/widgets follow consistent internal structure (title top-left, controls top-right)
- [ ] Generous whitespace between widgets (double your margins)
- [ ] Critical information is above the fold — no long scrollable dashboards
- [ ] Maximum 5-7 widgets per view
- [ ] Not over-relying on tabs/interactions to hide important information
- [ ] Dashboard is personalized by role, with optional user customization
- [ ] Any data tables are interactive, properly aligned, and link to full views
- [ ] KPI cards have: large metric, label, trend indicator, comparison context
- [ ] Color used intentionally with consistent meaning (red=alert, green=positive)
- [ ] Colorblind-accessible palette (not relying on red-green alone)
- [ ] Responsive card layout that scales gracefully

---

## Quick Reference: Common Mistakes to AVOID

| ❌ Don't | ✅ Do Instead |
|----------|--------------|
| Design the dashboard first | Design it last, after other views exist |
| Mix operational and analytical purposes | Choose one type per user role |
| Use gauge/speedometer charts | Use simple number + trend indicator |
| Use 3D or overstyled charts | Use flat, clean, readable 2D charts |
| Use pie charts with 6+ segments | Use bar charts or treemaps for many categories |
| Show raw numbers like $1,234,567.89 | Round to $1.2M for at-a-glance readability |
| Create long scrollable dashboards | Keep critical info above the fold |
| Pack 10+ widgets into one view | Maximum 5-7 widgets per view |
| Hide key info behind tabs | Show core data directly, use tabs only for secondary content |
| Let users build dashboards from scratch | Personalize by role first, then allow customization |
| Use tight margins between cards | Double your margins — generous whitespace |
| Use inconsistent card layouts | Every card: title top-left, controls top-right, content center |
| Use random sort order in bar charts | Sort bars by value (largest to smallest) |
| Put time on Y axis | Time ALWAYS goes on X axis (left to right) |
| Use color without meaning | Every color should communicate something specific |
| Use many colors without accessibility check | Limit palette, test for colorblind users |
| Place low-priority info in top-left | Top-left = most important KPIs/metrics |
| Use different metric names for same value | Consistent naming across entire product |