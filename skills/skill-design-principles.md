---
name: design-principles
description: >
  Ten foundational design principles that guide appropriate design decisions across all product work.
  Use this skill whenever the user asks to create, evaluate, critique, or improve any product design,
  UX decision, interaction design, or when making trade-off decisions about features, complexity,
  aesthetics, or user flows. Trigger when the user mentions "design principles", "UX principles",
  "usability", "flexibility vs usability", "aesthetic usability", "forgiveness", "error prevention",
  "scarcity", "progressive disclosure", "80/20 rule", "Pareto", "signal to noise ratio",
  "cost-benefit", "recognition vs recall", "constraints", "affordance", or when discussing
  design trade-offs, feature prioritization, or interaction patterns. Also apply when reviewing
  designs for usability issues, when simplifying complex interfaces, or when persuasion/engagement
  patterns are relevant. This skill provides the theoretical foundation behind good design decisions
  and pairs with all other UI/UX skills as the "why" behind the "what". Based on the Bakusevych
  design principles guide (UX Collective).
---

# 10 Design Principles Every Designer Should Know

Based on **"10 Design Principles Every Designer Should Know"** by Taras Bakusevych (UX Collective).

Reference: https://uxdesign.cc/10-design-principles-every-designer-should-know-a03e12f8deca

> **Design Principles are an assortment of considerations that form the foundation of any good product design. Simple rules guide you towards appropriate design decisions and help you make a more compelling case for decision-makers.**

---

## Principle 1: Flexibility-Usability Tradeoff

> As the flexibility of a system increases, its usability decreases.

Flexible designs support more functions and satisfy a wider set of requirements, but they perform those functions **less efficiently** than specialized tools.

### Key Rules
- When user needs are **well understood** → design a specialized, focused tool (higher usability)
- When user needs are **uncertain or evolving** → allow more flexibility (accept lower usability)
- Every new feature contributes to complexity — **prioritize and reduce scope**
- Focus on the key product value proposition
- With every release, try to **improve existing features**, not only add new ones
- Limit the number of alternative approaches that support the same need

### Product Examples
- **Adobe Photoshop**: Maximum flexibility, expanding feature set for all use cases → complex UI, steep learning curve
- **Figma**: Purposefully built for UI design, lean feature set → minimalistic interface, quick adoption

### Application
- ✅ Provide **smart defaults** and out-of-the-box solutions even in flexible products
- ✅ Design a more **prescriptive** interface when you can
- ❌ Don't add flexibility "just in case" — every option increases cognitive load

---

## Principle 2: Aesthetic-Usability Effect

> Users have a tendency to perceive aesthetically pleasing designs as more usable.

Beautiful interfaces create positive emotional responses that make users more **tolerant of minor usability issues** and more likely to find workarounds.

### Key Rules
- Invest in visual polish — it directly affects perceived usability
- Use principles like **Attractiveness Bias**, **Golden Ratio**, **Contour Bias**, and **Rule of Thirds**
- Aesthetics are not superficial — they are a core usability factor
- First impressions are disproportionately influenced by visual design

### Application
- ✅ Make interfaces visually appealing as a **usability investment**, not decoration
- ✅ Use rounded contours (perceived as more approachable than sharp corners)
- ✅ Apply golden ratio proportions for natural visual balance
- ❌ Don't treat aesthetics as a lower priority than functionality — they are intertwined

---

## Principle 3: Forgiveness

> Good design should help users avoid errors and minimize the negative consequences of errors when they do occur.

Humans make all sorts of mistakes: **Slips** (unexpected results from inattention), **Mistakes** (gaps in knowledge), and **Lapses** (memory/concentration failures).

### Key Rules
- Create designs with good **affordance** — physical/visual characteristics that influence correct use
- Support **reversibility** of actions (undo, back)
- Build "**safety nets**" — processes that prevent catastrophic errors
- Demand confirmations for **important and irreversible actions only** (not routine ones)
- Use autocorrect, auto-suggest, and spell-check to help recover from slips

### Product Examples
- **Amazon Search**: Detects typos and presents results for the corrected term
- **Gmail**: Artificial delay on "Send" to allow undo; reminds about forgotten attachments when "attachment" is mentioned
- **Airbnb**: Guided publishing process with quality requirements, references, word count limits, and previews

### Application
- ✅ Enable **previews and confirmations** for critical actions
- ✅ Design **constraints** to prevent invalid input (date pickers vs free text, dropdowns vs typing)
- ✅ Provide clear, actionable error messages — not just "Something went wrong"
- ❌ Don't block users with confirmation dialogs for every action — only irreversible ones

---

## Principle 4: Scarcity

> Products, services, and opportunities become more desirable when perceived to be in short supply.

### Key Rules
- **FOMO** (Fear of Missing Out) — apprehension of missing information, events, or experiences
- **Veblen Goods** — demand increases as price increases due to exclusivity and status
- Scarcity cues drive urgency and action

### Product Examples
- **Booking.com / KAYAK**: "Only 2 rooms left at this price"
- **Limited edition products**: "Limited to 5 pieces" — may sell better at 2-3x cost
- **Flash sales**: Countdown timers, limited-time offers

### Application (Use Ethically)
- ✅ Show genuine stock/availability information
- ✅ Use time-limited offers when they're real
- ❌ Don't fabricate false scarcity — it destroys trust when discovered
- ❌ Don't use dark patterns that pressure users into unwanted purchases

---

## Principle 5: 80/20 Rule (Pareto Principle)

> Approximately 80% of a product's usage involves 20% of its features.

### Key Rules
- Identify the **20% of features** that deliver 80% of user value
- Optimize design, research, and testing efforts around that critical 20%
- Don't give equal visual weight to all features — prioritize the most-used ones
- Hide or de-emphasize rarely used features without removing them

### Product Examples
- **iOS Calculator**: Key features in default portrait mode; advanced scientific functions appear only in landscape mode
- Leverage **product analytics** to identify which features correspond to the majority of usage

### Application
- ✅ Make the most-used features the **most prominent and accessible**
- ✅ Use progressive disclosure for the remaining 80% of features
- ✅ Consider ROI of time spent on research, design, and testing for each feature
- ❌ Don't give every feature equal screen real estate

---

## Principle 6: Progressive Disclosure

> Show only what is necessary at each step.

Strategically defer advanced or rarely used features to secondary screens, making applications **easier to learn** and less error-prone.

### Key Rules
- Show essential information and controls first
- Reveal additional complexity **only when the user requests it** or progresses deeper
- Reduces cognitive load — users can focus on immediate tasks
- Improves learnability for new users without limiting power users

### Application
- ✅ Use expandable sections, "Show more" links, and advanced settings panels
- ✅ Start forms with essential fields; show optional ones on request
- ✅ Use tabs, accordions, and drawers to layer information
- ❌ Don't hide critical functionality — only defer supplementary options

---

## Principle 7: Recognition Over Recall

> Design so users can recognize options rather than having to recall them from memory.

### Key Rules
- Make objects, actions, and options **visible**
- Show recent items, suggestions, and history
- Minimize the need for users to remember information between screens
- Use consistent patterns so learned behavior transfers

### Application
- ✅ Show recently used items, recent searches, and history
- ✅ Use visual cues (icons + labels) instead of text-only navigation
- ✅ Pre-fill fields with previous or suggested values
- ✅ Use breadcrumbs to show the user's path
- ❌ Don't expect users to remember codes, IDs, or previous entries

---

## Principle 8: Signal-to-Noise Ratio

> Maximize the ratio of relevant information (signal) to irrelevant information (noise).

### Key Rules
- Every element on the screen should serve the user's current goal
- Remove decorative elements that don't convey information
- Minimize visual noise: unnecessary borders, shadows, gradients, icons
- High signal-to-noise ratio = cleaner, more focused interfaces

### Application
- ✅ Audit every element: "Does this help the user accomplish their task?"
- ✅ Remove redundant labels, decorative dividers, and unnecessary icons
- ✅ Use whitespace instead of lines/borders to separate sections
- ❌ Don't add visual complexity for aesthetic reasons alone

---

## Principle 9: Cost-Benefit Analysis

> Activity will be pursued only if its benefits are equal to or greater than its costs.

Users constantly evaluate whether the effort (time, clicks, learning) is worth the value they receive.

### Key Rules
- Reduce the **cost** of every interaction: fewer clicks, less typing, less waiting, less learning
- Increase the **perceived benefit**: clear value proposition, immediate feedback, tangible results
- If cost exceeds benefit at any point, users abandon

### Application
- ✅ Minimize required fields in forms
- ✅ Provide immediate value before asking for effort (free tier, preview, trial)
- ✅ Make the value of each step clear before asking the user to do it
- ❌ Don't front-load cost (long sign-ups, extensive onboarding) before showing value

---

## Principle 10: Constraints

> Use affordances and constraints to guide correct behavior and prevent errors.

Constraints limit the actions that can be performed, directing users toward correct outcomes.

### Key Rules
- **Physical constraints**: Limit movement, input, and selection to valid options
- **Logical constraints**: Gray out unavailable options, disable invalid paths
- **Cultural constraints**: Leverage learned behavior and conventions
- Good constraints **reduce errors** without feeling restrictive

### Product Examples
- **Airbnb listing creation**: Guided process with image quality requirements, word count limits, and previews
- **Date pickers**: Constrain input to valid dates (vs free-text entry)
- **Dropdowns**: Constrain selection to valid options

### Application
- ✅ Use appropriate input types (date pickers, dropdowns, sliders) instead of free text
- ✅ Gray out or hide unavailable actions
- ✅ Provide previews of the result before committing
- ✅ Set sensible limits (character counts, file size limits) with clear feedback
- ❌ Don't leave users free to make impossible or invalid choices when preventable

---

## Principle Application Matrix

| When You Need To... | Apply These Principles |
|---------------------|----------------------|
| Decide feature scope | Flexibility-Usability Tradeoff + 80/20 Rule |
| Improve perceived quality | Aesthetic-Usability Effect |
| Reduce user errors | Forgiveness + Constraints |
| Simplify complex interfaces | Progressive Disclosure + 80/20 Rule + Signal-to-Noise |
| Drive conversion/action | Scarcity + Cost-Benefit |
| Improve learnability | Recognition Over Recall + Progressive Disclosure |
| Optimize existing features | 80/20 Rule + Cost-Benefit |
| Guide user behavior | Constraints + Forgiveness |
| Clean up cluttered UI | Signal-to-Noise + Essentialism (Rule 11-16 from 58 Rules) |

---

## Implementation Checklist

When making design decisions, verify:

- [ ] **Flexibility**: Is the scope appropriate? Not too flexible (complex), not too rigid (limited)?
- [ ] **Aesthetics**: Is the design visually polished? Does it pass the "is this pleasant?" test?
- [ ] **Forgiveness**: Can users undo mistakes? Are destructive actions confirmed? Are errors prevented?
- [ ] **Scarcity**: If used, is it genuine and ethical? No dark patterns?
- [ ] **80/20**: Are the most-used features the most prominent? Is rare functionality de-emphasized?
- [ ] **Progressive Disclosure**: Is complexity hidden until needed? Is the initial view clean?
- [ ] **Recognition**: Can users recognize options rather than recall them? Are recent items visible?
- [ ] **Signal-to-Noise**: Does every element serve the user's goal? Is visual noise minimized?
- [ ] **Cost-Benefit**: Is the effort justified by the value? Is value shown before effort is required?
- [ ] **Constraints**: Are errors prevented through input constraints? Are invalid states impossible?