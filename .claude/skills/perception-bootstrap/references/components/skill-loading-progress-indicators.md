---
name: loading-progress-indicators
description: >
  Design guide for loading states, progress indicators, spinners, skeleton screens, progress bars,
  and all waiting-experience UI. Use this skill whenever the user asks to create, design, or build
  any interface that involves loading, waiting, processing, uploading, downloading, submitting,
  or any asynchronous operation. Trigger when the user mentions "loading", "spinner", "progress bar",
  "skeleton screen", "skeleton loader", "loading state", "progress indicator", "upload progress",
  "download progress", "processing", "waiting", "async", "loading animation", "shimmer effect",
  "content placeholder", "indeterminate", "determinate", "progress circle", "loading message",
  or when generating any UI that includes API calls, form submissions, file operations, data fetching,
  page transitions, or any operation that takes more than 1 second. Also apply when building
  empty states, error states after loading, or optimistic UI patterns. This skill ensures all
  loading/waiting experiences follow the Bakusevych loading & progress indicators guide (UX Collective)
  and supporting research on perceived performance and the psychology of waiting.
---

# Loading & Progress Indicators Design Guide

Based on **"Loading & Progress Indicators — UI Components Series"** by Taras Bakusevych (UX Collective).

Reference: https://uxdesign.cc/loading-progress-indicators-ui-components-series-f4b1fc35339a

> **Loading and progress indicators are essential elements of UX/UI design that help users stay informed and engaged during waiting periods. The primary focus should be on improving system speed and responsiveness, but when that is not feasible, designing the right user experience becomes crucial.**

> Among Jakob Nielsen's ten heuristics, **visibility of system status** takes precedence as the foremost and essential principle. Communicating the current state allows users to feel in control, take appropriate actions, and ultimately trust the brand.

---

## 1. The Psychology of Waiting

Users' perception of waiting is shaped by psychological factors, not just actual duration:

| Factor | Impact |
|--------|--------|
| **Feedback** | Users with a progress bar wait **2.5x longer** before abandoning than users with no indicator (22.6s vs 9s — Fiona Nah research) |
| **Uncertainty** | Unknown wait times feel longer than known ones |
| **Sense of control** | Users who can see progress feel more in control and less anxious |
| **Occupied time** | Occupied waiting feels shorter than unoccupied waiting |
| **Anxiety** | Anxiety makes waits seem longer — financial/medical contexts amplify this |
| **Unexplained waits** | Waits without explanation feel longer than explained ones |
| **Unfair waits** | Waits that seem unfair feel longer |
| **Value of result** | Users wait longer for things they value more |

### The Restaurant Analogy
- **Blank screen** = sitting at a table with no waiter, no menu, no acknowledgment → user leaves
- **Spinner** = waiter says "I'll be right back" → user feels acknowledged, willing to wait
- **Progress bar** = waiter says "Your food will be ready in 15 minutes" → user has expectations set
- **Skeleton screen** = waiter brings water, silverware, menu immediately → process has begun, user is engaged

---

## 2. Types of Progress Indicators

### Indeterminate Indicators
Used when the system **cannot predict** the duration or measure progress.

| Indicator | Description | When to Use |
|-----------|-------------|-------------|
| **Spinner** | Simple circular looping animation | Short unknown-duration tasks (searching, connecting) |
| **Indeterminate progress bar** | Horizontal bar with looping animation (no fill percentage) | Unknown duration, but want to show a bar-style indicator |
| **Skeleton screen / Content placeholder** | Gray placeholder shapes mimicking the layout of incoming content | Loading dashboards, tables, cards, feeds, content-heavy areas |
| **Animated icon** | Creative motion icon (hourglass, cloud sync, etc.) | Branding purposes, engagement during non-critical waits |
| **Loading message** | Text like "Loading…" or "Preparing your dashboard…" | When users need extra context about what's happening |
| **Shimmer effect** | Gradient animation sweeping across skeleton placeholders | Enhanced skeleton screens, modern polish |

### Determinate Indicators
Used when the system **can measure** progress and estimate completion.

| Indicator | Description | When to Use |
|-----------|-------------|-------------|
| **Progress bar (linear)** | Horizontal bar filling from 0% to 100% | File uploads, downloads, data exports, installations |
| **Progress circle** | Circular graphic filling proportionally | Compact spaces, file syncing, upload progress |
| **Percentage indicator** | Numeric display ("75% complete") | When precise progress information is crucial |
| **Step indicator** | "Step 2 of 5: Processing" | Multi-step processes, batch operations |
| **Time estimate** | "Approximately 2 minutes remaining" | Long waits where time can be estimated |
| **Hybrid** | Combination (bar + percentage + label) | Complex/critical tasks needing maximum clarity |

---

## 3. Choosing the Right Indicator by Wait Duration

This is the **most critical decision** — the indicator type must match the expected wait time.

### Wait Time Decision Matrix

| Duration | Indicator | Rules |
|----------|-----------|-------|
| **< 1 second** | **None** | ❌ Do NOT show any loading indicator. Adding one creates a glitch-like visual experience that confuses users. Let the action complete instantly. |
| **1-3 seconds** | **Spinner** or **Skeleton screen** | Use simple indeterminate indicators. No complex animations — there isn't enough time for them to be meaningful. Skeleton screens are preferred for content-loading scenarios. |
| **3-10 seconds** | **Determinate progress bar** or **Percentage counter** | Users start questioning responsiveness at this duration. Show active, measurable progress. Include a brief label explaining what's happening. |
| **10+ seconds** | **Progress bar + Time estimate + Engaging content** | Provide clear progress, allow continued interaction, minimize anxiety. Combine progress feedback with tips, storytelling, or background task notifications. Show estimated time remaining. |

### Duration Rules
- **< 1 second**: No indicator. Instant feedback only (button state change, optimistic UI).
- **1-3 seconds**: Acknowledge the wait. Spinner or skeleton. Don't block interaction if possible.
- **3-10 seconds**: Show progress. Determinate bar or percentage. Label what's happening.
- **10-30 seconds**: Show progress + time estimate. Allow user to continue other tasks.
- **30+ seconds**: Progress + time estimate + background processing. Don't trap the user on a loading screen. Let them work elsewhere and notify when complete.

---

## 4. Skeleton Screens (Content Placeholders)

Skeleton screens are the **preferred loading pattern for content-heavy UIs** (dashboards, feeds, tables, cards).

### What They Are
- Gray placeholder shapes that mimic the **layout structure** of incoming content
- Show users what's coming next before it arrives
- Reduce cognitive load — users understand the page structure immediately

### Rules
- ✅ Match the skeleton layout to the **actual content structure** (same positions, proportions)
- ✅ Use subtle animation (shimmer/pulse) to indicate loading is active
- ✅ Replace skeleton elements **progressively** as content arrives (don't wait for everything)
- ✅ Use for: pages, cards, lists, tables, dashboards, feeds
- ❌ Don't use skeleton screens for actions (button clicks, form submissions) — use spinners or progress bars
- ❌ Don't make skeleton animations too flashy — they should be subtle, not distracting

### Skeleton Screen Layout Example
```
┌──────────────────────────────┐
│ ███████████   ░░░░░ ░░░░░░  │  ← Header skeleton
├──────────────────────────────┤
│ ┌─────────┐ ┌─────────┐     │
│ │ ██████  │ │ ██████  │     │  ← Card skeletons
│ │ ░░░░░░  │ │ ░░░░░░  │     │
│ │ ░░░░    │ │ ░░░░    │     │
│ └─────────┘ └─────────┘     │
│ ┌────────────────────────┐  │
│ │ ██░░░░░░░░░░░░░░░░░░░  │  │  ← List/table skeleton
│ │ ██░░░░░░░░░░░░░░░░░░░  │  │
│ │ ██░░░░░░░░░░░░░░░░░░░  │  │
│ └────────────────────────┘  │
└──────────────────────────────┘
```

---

## 5. Spinner Rules

### When to Use Spinners
- Short, indeterminate waits (1-3 seconds)
- Simple actions: searching, connecting, refreshing
- Inline loading: a specific component is loading, not the whole page

### Rules
- ✅ Keep spinners **small and unobtrusive** — proportional to the area they represent
- ✅ Place the spinner **where the content will appear** (not centered on the whole page for a single widget)
- ✅ Pair with a brief label if the wait might exceed 2 seconds ("Loading…", "Searching…")
- ❌ Don't use full-page spinners for individual component loading
- ❌ Don't use spinners for determinate processes (file uploads) — use progress bars instead
- ❌ Don't show a spinner for actions that take < 1 second

---

## 6. Progress Bar Rules

### When to Use Progress Bars
- Determinate processes: file upload/download, data export, installation, batch processing
- Any task where the system can estimate completion percentage
- Waits of 3+ seconds where users need to see measurable progress

### Rules
- ✅ A good progress bar **always moves forward** — users hate a bar that stalls (especially at 90%!)
- ✅ Show percentage AND/OR time estimate alongside the bar
- ✅ Label what's happening: "Uploading 5 of 10 files…", "Processing data…"
- ✅ Make progress **realistic** — don't jump to 90% quickly then stall. Reflect actual progress.
- ✅ For multi-step processes, show step count: "Step 2 of 5: Validating"
- ❌ Don't use a progress bar for unknown-duration tasks — use indeterminate indicators
- ❌ Don't let the bar freeze or appear stuck — add micro-animation to show the system is alive

### Progress Bar Anatomy
```
Processing data... 67%
[████████████████████░░░░░░░░░░] 
Approximately 45 seconds remaining
```

Components: Label (what's happening) + Bar (visual progress) + Percentage + Time estimate (optional)

---

## 7. Global vs Local Indicators

### The Rule
> When loading **multiple items** (e.g., several cards on a dashboard), use a **single global progress indicator** instead of multiple individual indicators per card.

### Why
- Multiple spinners/bars overwhelm users visually
- A single global indicator communicates the overall process clearly
- Users can understand total advancement without cognitive overload

### Exceptions
- File upload of multiple files: show individual progress PER file (each is a distinct user-initiated action)
- Independent API calls for unrelated widgets: each can show its own skeleton/spinner

---

## 8. Non-Blocking Loading (Don't Trap Users)

### Rules
- ❌ Don't use **full-screen blocking loaders** for long tasks — users can't do anything else
- ✅ Show progress in a **small, non-blocking area** (corner notification, inline bar, toast)
- ✅ Allow users to **continue interacting** with other parts of the app during long operations
- ✅ For very long tasks (30+ seconds): move to **background processing** with a notification when complete
- ✅ Use **optimistic UI** where safe: show the expected result immediately, sync in the background

### Non-Blocking Patterns
| Pattern | How It Works |
|---------|-------------|
| **Inline progress** | Small bar or spinner within the component that triggered the action |
| **Toast notification** | "Uploading file… 45%" in a small corner toast |
| **Background task + notification** | "Your report is being generated. We'll notify you when it's ready." |
| **Optimistic UI** | Show the result immediately (e.g., "Message sent" ✓) and sync in background |

---

## 9. Loading Messages and Engagement

### Short Waits (1-5s)
- Simple label: "Loading…", "Searching…", "Saving changes…"
- Keep it brief — the wait is too short for more

### Medium Waits (5-15s)
- Descriptive label: "Loading your dashboard data…", "Processing 1,247 records…"
- Show what the system is doing: "Validating → Uploading → Finalizing"

### Long Waits (15s+)
- Progress bar + time estimate: "Approximately 2 minutes remaining"
- Step-by-step: "Step 3 of 5: Analyzing data…"
- Engaging content: tips, fun facts, hints (games use this extensively — e.g., Hearthstone loading screens)
- Allow background processing: "We'll email you when your report is ready"

---

## 10. Strategic Indicator Placement

### Rules
- Place indicators **where users expect them** based on the interaction that triggered them
- **Pull-to-refresh**: indicator at the **top** of the content area
- **Scroll to load more**: indicator at the **bottom** of the list
- **Button action**: indicator **on/near the button** (replace label with spinner, or inline adjacent)
- **Page load**: skeleton screen across the **entire content area**
- **Widget/card load**: skeleton or spinner **within that specific card**
- ❌ Don't use a centered full-page spinner for a single widget loading

---

## 11. Integration with Other UI Components

### Button Loading States
```
[Submit]  →  [⟳ Submitting...]  →  [✓ Done!]
 Normal       Loading (disabled)     Success
```
- Replace button label with spinner + loading text
- Disable the button during loading (prevent double-submission)
- Show success/error state after completion
- Return to normal state after a brief delay

### Form Submission
- Disable form fields during submission
- Show inline spinner near the submit button
- Display success message or validation errors after

### Content Loading in Cards/Widgets
- Show skeleton placeholder matching the card's layout
- Replace with real content as it arrives
- Show error state with retry option if loading fails

---

## 12. Accessibility for Loading States

### Rules
- ✅ Use `aria-busy="true"` on the loading container
- ✅ Use `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax` for determinate bars
- ✅ Provide **text alternatives** for all visual indicators: "Loading, 50% complete"
- ✅ Support **screen readers**: announce loading start, progress updates, and completion
- ✅ Support **high contrast mode** — indicators must be visible
- ✅ Support **reduced motion** preferences — replace animations with static indicators
- ❌ Don't rely solely on animation to communicate loading — always include text

---

## Implementation Checklist

When generating any UI with loading/waiting states, verify:

- [ ] **< 1 second**: No loading indicator shown — instant response
- [ ] **1-3 seconds**: Spinner or skeleton screen (indeterminate, simple)
- [ ] **3-10 seconds**: Determinate progress bar or percentage with label
- [ ] **10+ seconds**: Progress bar + time estimate + option for background processing
- [ ] Skeleton screens match the actual content layout structure
- [ ] Spinners are sized and placed proportional to the loading area
- [ ] Progress bars always move forward (no stalling, no freezing)
- [ ] Loading labels describe what's happening ("Loading dashboard…" not just "Loading…")
- [ ] Single global indicator for multiple items loading simultaneously
- [ ] Long tasks use **non-blocking** patterns (user can continue working)
- [ ] Button loading states: spinner replaces label, button disabled, success/error feedback after
- [ ] Indicators placed where the user expects them (near the triggering element)
- [ ] No full-page blocking spinners for individual component loading
- [ ] Error states with retry option if loading fails
- [ ] Accessibility: `aria-busy`, `role="progressbar"`, text alternatives, reduced motion support
- [ ] Animations are subtle and don't distract from the task
- [ ] No unnecessary animations without clear loading feedback

---

## Quick Reference: Common Mistakes to AVOID

| ❌ Don't | ✅ Do Instead |
|----------|--------------|
| Show a spinner for actions under 1 second | Let instant actions complete without any loading indicator |
| Use a spinner for a 30-second file upload | Use a determinate progress bar with percentage and time estimate |
| Show multiple spinners for each card on a dashboard | Use a single global progress indicator or skeleton for the whole area |
| Block the entire UI with a full-screen spinner | Use non-blocking inline indicators; let users work elsewhere |
| Show a progress bar that jumps to 90% then stalls | Reflect realistic progress — gradual, honest advancement |
| Use complex flashy animations for a 2-second wait | Keep animations subtle and functional |
| Show "Loading…" with no context | Label what's happening: "Loading your report data…" |
| Use indeterminate spinner for file upload (measurable) | Use determinate progress bar for any measurable process |
| Forget loading states entirely (blank screen) | Always communicate system status — visibility of system status is #1 heuristic |
| Leave button enabled during submission | Disable the button, show spinner, prevent double-submission |
| Skip error handling after loading fails | Show clear error state with retry action |
| Use animations without reduced-motion support | Respect `prefers-reduced-motion` — provide static alternatives |
| Use icon-only indicators without text | Always pair visual indicators with descriptive text for accessibility |
| Show a frozen/stuck progress indicator | Always show movement — even slow movement communicates "alive" |