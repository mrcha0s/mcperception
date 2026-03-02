---
name: financial-ux-design
description: >
  Design guide for financial products — banking apps, wealth management platforms, fintech dashboards,
  investment portals, payment flows, loan/deposit calculators, trading interfaces, insurance UIs, and
  any screen dealing with money, transactions, balances, portfolios, or financial data. Use this skill
  whenever the user asks to create, design, or build any financial or fintech UI — including banking
  dashboards, transaction histories, payment screens, account summaries, portfolio views, onboarding
  for financial services, pricing/plan selectors, loan calculators, credit card management, budgeting
  tools, expense trackers, or wealth management interfaces. Also trigger when you see financial
  domain keywords like "balance", "transaction", "payment", "portfolio", "investment", "deposit",
  "loan", "account", "banking", "fintech", "wealth", "trading", "credit", "debit", "statement",
  "P&L", "revenue", "expenses", or when generating any UI that displays monetary values, financial
  charts, or financial workflows. This skill ensures all generated financial UI follows the 10 proven
  tips from the Taras Bakusevych financial UX design guide (UX Planet). Covers: data visualization
  for finance, tool vs marketing balance, personalized content, client onboarding, premium feel,
  security UX, device capabilities, cognitive load reduction, transparency/trust, and plain language.
---

# Financial UX Design Guide

Based on **"10 Tips for Better Financial UX Design"** by Taras Bakusevych (UX Planet).

Reference: https://uxplanet.org/10-tips-for-better-financial-ux-design-564fd360f8b4

> **Creating smooth user experience for banking, wealth management, and other areas of fintech.**

---

## Tip 1: Show, Don't Tell — Visualize Financial Data

Humans are bad at dealing with numbers. Single calculations are manageable, but comparing strings of numbers or multi-step calculations overwhelm users quickly.

### Rules
- **Translate numbers into visual form** — charts, graphs, sparklines, progress bars, treemaps
- Data visualization is commonly used in reporting/analysis, but also apply it to:
  - Deposits and loans (calculators with interactive sliders)
  - Investment performance (growth charts, allocation donuts)
  - Spending/budgeting (category breakdowns, trend lines)
  - Transaction history (grouped, categorized, with summaries)
- **Deposit/loan calculators** should show users how returns/payments actually look, including complexities like monthly additions, interest compounding, and fees
- Use interactive sliders and inputs that **update results in real-time**
- Always show the **net result** prominently — the final number the user cares about
- When displaying performance: show **both the number AND the visual trend** (e.g., "$12,450 ↑ 8.3%")

### Do / Don't
| ❌ Don't | ✅ Do |
|----------|------|
| Show a raw table of monthly interest calculations | Show an interactive chart with a slider for deposit amount/term |
| Display portfolio allocation as a text list of percentages | Use a donut chart with clear labels and hover details |
| Show transaction history as a flat list of numbers | Group by date, categorize, show daily/weekly summaries with totals |
| Force users to calculate savings themselves | Pre-calculate and display: "You save $1,200/year with this plan" |

---

## Tip 2: Build a Tool, Not a Marketing Channel

Unless the sole purpose is marketing, the product must serve user needs first.

### Rules
- Navigation and core views must display **what the user finds important** — not promotional content
- Marketing messages should be **subtle** and **add value** to the user experience
- ❌ Don't overwhelm users with irrelevant promotional notifications — they'll disable notifications or leave
- Users of financial products have high trust expectations — don't abuse that trust with aggressive selling
- A tool that **empowers users and puts them first** is more effective for retention and sales than aggressive marketing
- If marketing is present, it should be **contextually relevant** (e.g., suggesting a savings account when the user has a large idle balance, not a random credit card ad)

### Do / Don't
| ❌ Don't | ✅ Do |
|----------|------|
| Fill the home screen with promotional banners | Show account summary, recent transactions, and quick actions |
| Send constant push notifications about new products | Notify about relevant events: low balance, large transaction, goal reached |
| Place marketing above account information | Place marketing subtly below core content, contextually relevant |
| Interrupt workflows with pop-up offers | Surface suggestions in natural context (e.g., "Based on your savings pattern...") |

---

## Tip 3: Provide Tailored Content and Personalize

No two users are the same. Financial products have vast amounts of information — the product should act as a digital assistant that extracts what's relevant for each individual.

### Rules
- **Extract the most relevant information** for each user and provide short, digestible summaries
- Users can then **choose whether to explore further** — the summary is the entry point
- Use AI/ML to analyze: client assets, interests, browsing history, spending patterns, and investment preferences
- Generate a **unique, relevant feed** for each user (not a one-size-fits-all dashboard)
- Personalization priorities for financial products:
  - Show performance of **their** investments, not generic market data
  - Highlight changes that affect **their** portfolio/accounts
  - Surface news relevant to **their** holdings or interests
  - Tailor recommendations to **their** risk profile and financial goals

### Do / Don't
| ❌ Don't | ✅ Do |
|----------|------|
| Show the same generic dashboard to all users | Tailor the view to each user's role, assets, and interests |
| Display all available market data at once | Surface only what's relevant to the user's portfolio, with drill-down |
| Show generic news feed | Show news filtered by the user's holdings, watchlist, and interests |
| Require users to manually configure everything | Auto-personalize based on data, then allow customization |

---

## Tip 4: Create a Smooth Client Onboarding Experience

Onboarding is more than initial walkthrough screens — it's a multi-level process to connect users to value as soon as possible.

### Rules
- **Onboarding goal**: connect the user to the product's value as quickly as possible
- Ensure both the financial institution and customer have everything needed to operate
- Onboarding is a **great opportunity** to:
  - Capture client interests and preferences
  - Understand their financial situation and risk tolerance
  - Propose initial investment strategies or product configurations
- Design onboarding as **streamlined, progressive steps** — not a wall of forms
- Use smart defaults, auto-detection (location, currency), and **document scanning** to minimize manual entry
- Financial services have high customer lifetime values — invest in onboarding UX (higher acquisition costs are justified)
- Show progress indicators throughout the process
- Allow users to **skip non-essential steps** and complete them later

### Onboarding Flow Structure
```
1. Welcome + Value proposition (brief)
2. Identity verification (biometrics, document scan)
3. Basic financial profile (income range, goals, risk tolerance)
4. Interests & preferences (investment themes, notification preferences)
5. First meaningful action (first deposit, explore portfolio, set a goal)
```

---

## Tip 5: Make Customers Feel Special — Premium Experience

Exclusivity and premium feel are powerful motivators in financial products.

### Rules
- **Attention to details** creates a perceived feeling of premium service
- Personalized copy: use the client's name, reference their specific accounts/goals
- Add a **touch of personality** — warm, human micro-copy rather than cold corporate language
- Even small UI refinements communicate quality: smooth animations, polished typography, generous whitespace
- Tier-based visual treatment: subtly differentiate premium/VIP clients if applicable
- Make every user feel like the product was built specifically for them
- This doesn't mean deception — it means genuine **personalized care through design**

### Premium Design Signals
- Clean, spacious layouts with ample whitespace
- Refined typography with clear hierarchy
- Subtle, smooth animations and transitions
- Personalized greetings and contextual messages
- High-quality iconography and illustrations
- Dark mode option (often associated with premium feel)
- Attention to micro-interactions (button feedback, loading states)

---

## Tip 6: Don't Leave Security to Users — Streamline It

Security is a top priority, but complex security workflows hurt usability.

### Rules
- ❌ Don't burden users with complex security rituals (code generators, multi-step verification for every action)
- ✅ Use **biometric authentication** (fingerprint, face ID) as the primary access method
- ✅ Implement **risk-based authentication** — challenge only when behavior is unusual, not for routine access
- Finding new ways to detect fraud and track threats in **real-time** should be the focus — not making users jump through hoops
- Security should be **invisible** when things are normal, and **clear and helpful** when a threat is detected
- When a security event occurs, communicate clearly: what happened, what's at risk, what to do
- Support modern security standards: biometrics, hardware tokens, push-based 2FA (not SMS where possible)
- Build user trust by being transparent about security measures without overwhelming with technical details

### Do / Don't
| ❌ Don't | ✅ Do |
|----------|------|
| Require a 6-digit code from a separate device for every login | Use biometric auth (fingerprint/face) for routine access |
| Force password changes every 30 days | Detect compromised credentials and prompt when needed |
| Show complex security warnings with jargon | Communicate security events in plain language with clear actions |
| Make users memorize security questions | Use device-based or biometric verification |

---

## Tip 7: Leverage Device Capabilities and Emerging Technology

Financial products tend to lag behind in adopting latest technology — don't let yours.

### Rules
- Use device **cameras** to scan payment slips, cards, IDs, and documents — saves time and prevents errors
- Support **voice-assisted** operations where appropriate (transfer money, check balance)
- Build **conversational chatbots** for support and simple operations (balance inquiry, transfers, FAQs)
- Leverage **auto-fill** and OS-level integrations (contacts for transfers, calendar for due dates)
- Use **push notifications** intelligently: transaction confirmations, low-balance alerts, goal milestones
- Consider **NFC** for tap-to-pay and device pairing
- Use **OCR** (optical character recognition) to extract data from documents, reducing manual entry

### Technology Integration Priority
1. **Biometric auth** (fingerprint, face ID) — highest impact on daily experience
2. **Camera/OCR scanning** (documents, cards, checks) — reduces onboarding/transaction friction
3. **Smart notifications** — keeps users informed without overwhelming
4. **Chatbot/conversational UI** — scales support, handles routine queries
5. **Voice commands** — convenience for simple operations

---

## Tip 8: Don't Overwhelm Users — Manage Cognitive Load

When information exceeds human processing capacity, memory suffers, concentration drops, and cognitive overload occurs.

### Rules
- **Remove Thoughtfully**: understand the customer journey first, then prioritize. Only remove after understanding what matters.
- **Use Progressive Disclosure**: sequence information and actions across screens. Hide irrelevant information until it becomes relevant.
- **Rely on Common Patterns**: users prefer to interact with your product the same way they interact with familiar products (Jakob's Law).
- Even **slight information overload** or unclear visual hierarchy significantly increases cognitive load in financial UIs
- Financial products are especially vulnerable because they inherently contain dense numerical data

### Cognitive Load Reduction Strategies for Financial UI
| Strategy | How to Apply |
|----------|-------------|
| **Chunking** | Group transactions by date, category, or type rather than showing a flat list |
| **Progressive disclosure** | Show account summary → tap for transactions → tap for transaction detail |
| **Visual hierarchy** | Balance and trend = large/prominent; individual transactions = smaller/secondary |
| **Smart summarization** | "You spent $2,340 this month, 15% more than last month" instead of a raw list |
| **Contextual actions** | Show relevant actions at the right time (e.g., "Pay bill" on a bill, not on every screen) |
| **Whitespace** | Financial UIs need MORE whitespace than typical apps due to number-heavy content |

---

## Tip 9: Be Transparent — Communicate Progress and Build Trust

Uncertainty breeds anxiety, and anxiety is amplified in financial contexts. Transparency is the foundation of trust.

### Rules
- **Visibility of system status** is the first heuristic principle — the system must always keep users informed
- Users must know whether their interaction was **successful** at all times
- Communicating status allows users to: feel in control, take appropriate actions, and build trust in the brand
- **Communication increases trust** — the key element impacting customer retention
- ❌ When the system appears to withhold information or make decisions unilaterally, users lose trust
- Financial transactions require **especially clear feedback**: pending, processing, completed, failed
- Always show: what's happening now, what happened, and what comes next

### Required Financial UI Feedback Points
| User Action | Required Feedback |
|------------|-------------------|
| Initiating a transfer/payment | Confirmation dialog → processing state → success/failure with details |
| Submitting a form/application | Progress indicator → submission confirmation → expected timeline |
| Completing onboarding steps | Step progress bar → completion celebration → what to do next |
| Security event (login, verification) | Clear status: verified ✓, pending, failed with reason |
| Recurring payments/scheduled actions | Upcoming schedule visible, execution confirmation, failure alerts |
| Document upload | Upload progress → processing → verification status |

### Transaction Status Design
```
Pending    → ⏳ Yellow/Amber  + "Processing — usually takes 1-2 business days"
Completed  → ✅ Green         + "Transferred $500 to John — Mar 1 at 2:34 PM"
Failed     → ❌ Red           + "Transfer failed — insufficient funds. [Retry] [Cancel]"
Scheduled  → 📅 Blue/Neutral  + "Scheduled for Mar 5 — [Edit] [Cancel]"
```

---

## Tip 10: Speak Your Customer's Language — No Jargon

Most users can't make sense of industry-specific financial terminology or the meaning of certain data.

### Rules
- **Avoid technical/industry jargon** — use plain language that any user can understand
- Provide **definitions or tooltips** for terms that must be used (APR, AUM, yield, maturity, etc.)
- Match the brand's **tone and voice** to the audience — serious and official isn't always appropriate
- Avoid being overly formal, stiff, or boring — approachable language builds connection
- Even traditional/established institutions are shifting to more accessible messaging
- In retail banking, forced seriousness creates a **barrier** between brand and customer
- Copy should be **warm, clear, and human** — not robotic or legal-sounding

### Do / Don't
| ❌ Don't | ✅ Do |
|----------|------|
| "Your ACH debit has been initiated for settlement" | "We're sending your payment — it'll arrive in 1-2 business days" |
| "Insufficient funds to process transaction" | "You don't have enough in this account. [Add funds] or [Try another account]" |
| "Annual Percentage Yield: 4.25%" (no context) | "You'll earn 4.25% per year — that's about $425 on a $10,000 deposit" |
| "Portfolio rebalancing recommended due to drift" | "Your investments have shifted from your target — [Review changes]" |
| "KYC verification pending" | "We're verifying your identity — this usually takes a few hours" |

---

## Bonus: Make Sure the Numbers Add Up in Your Designs

When creating mockups or generated UI for financial products:

### Rules
- **All numbers must be internally consistent** — totals must match their parts, percentages must add to 100%
- Charts must match the numbers displayed in corresponding text/tables
- Use **realistic data samples** — not random numbers that don't make sense together
- Mistakes in mockup data divert attention from the actual design during reviews
- Double-check: balances, transaction totals, chart labels, percentage breakdowns, currency formatting
- Test edge cases: large numbers, zero values, negative values, multiple currencies

### Data Consistency Checklist
- [ ] Account balance = sum of all transactions
- [ ] Pie/donut chart segments add up to 100%
- [ ] Bar chart heights match their labeled values
- [ ] Monthly summary matches the individual transactions shown
- [ ] Currency symbols and formatting are consistent throughout
- [ ] Dates are in consistent format and chronological order
- [ ] Comparison values are mathematically correct ("↑ 12%" means the actual increase is 12%)

---

## Implementation Checklist

When generating any financial product UI, verify:

- [ ] Financial data is **visualized** (charts, sparklines, progress bars) not just shown as raw numbers
- [ ] Interactive calculators show **real-time results** with sliders/inputs
- [ ] Core views prioritize **user tasks** over marketing/promotional content
- [ ] Content is **personalized** to the user's accounts, holdings, interests, and risk profile
- [ ] Onboarding is **streamlined** — progressive steps, smart defaults, document scanning
- [ ] UI has a **premium feel** — refined typography, whitespace, polished interactions
- [ ] Security is **biometric-first**, with risk-based challenges only for unusual behavior
- [ ] Device capabilities are leveraged — camera scanning, auto-fill, smart notifications
- [ ] Cognitive load is managed — progressive disclosure, chunking, visual hierarchy, summarization
- [ ] Every action has **clear feedback** — pending/processing/success/failure states
- [ ] Language is **plain and human** — no jargon, warm tone, tooltips for necessary terms
- [ ] All numbers in the design are **internally consistent** and mathematically correct
- [ ] Transaction statuses are color-coded and clearly labeled
- [ ] Error states provide **plain-language explanations** with clear recovery actions
- [ ] Accessibility is maintained — contrast, keyboard nav, screen reader support

---

## Quick Reference: Common Mistakes to AVOID

| ❌ Don't | ✅ Do Instead |
|----------|--------------|
| Show raw financial data as text/tables only | Visualize with charts, sparklines, calculators |
| Fill navigation with promotional banners | Lead with user's accounts, balances, actions |
| Show same dashboard to all user types | Personalize by role, assets, interests, risk profile |
| Create lengthy onboarding with manual forms | Streamline with document scanning, smart defaults, progressive steps |
| Require complex security rituals for every access | Use biometrics for routine, challenge only for unusual behavior |
| Overwhelm with all data at once | Use progressive disclosure — summary first, detail on demand |
| Leave users guessing if a payment went through | Show clear status at every step: pending → processing → complete/failed |
| Use financial jargon without explanation | Use plain language, add tooltips for necessary technical terms |
| Use cold, corporate, robotic copy | Write warm, clear, human-friendly messages |
| Show random/inconsistent numbers in mockups | Ensure all data is internally consistent and realistic |
| Force users to do math (calculate savings, compare rates) | Pre-calculate everything: totals, differences, projections |
| Ignore mobile ergonomics | Position key actions within thumb reach, use device capabilities |