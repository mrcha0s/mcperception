---
name: text-fields-forms-design
description: >
  Design guide for text fields, input forms, and form-based UI components. Use this skill whenever the user asks to create,
  design, or build any form, input field, login screen, registration page, checkout flow, settings page, search bar,
  contact form, sign-up form, text input, textarea, password field, dropdown, date picker, or any UI that collects user input.
  Also trigger when the user mentions "form UX", "input design", "field validation", "form layout", or asks to improve
  an existing form. This skill ensures all generated form UI follows proven UX best practices from the Taras Bakusevych
  design guide (UX Collective). Apply this even if the user doesn't explicitly ask for "good UX" — always default to
  these patterns. Covers: text field anatomy, states, label placement, validation, accessibility, mobile keyboards,
  password fields, form structure, progressive disclosure, and touch targets.
---

# Text Fields & Forms Design Guide

Based on **"Text fields & Forms design — UI components series"** by Taras Bakusevych (UX Collective).

Reference: https://uxdesign.cc/text-fields-forms-design-ui-components-series-2b32b2beebd0

---

## 1. Text Field Anatomy

Every text field MUST include these elements where applicable:

| # | Element              | Required | Description |
|---|----------------------|----------|-------------|
| 1 | **Container**        | ✅ Yes   | The interactable input area. Must have a visible boundary (outlined or filled). |
| 2 | **Input text**       | ✅ Yes   | The text entered by the user. |
| 3 | **Label text**       | ✅ Yes   | Tells users what information belongs in the field. NEVER rely on placeholder alone. |
| 4 | **Placeholder text** | ⚠️ Optional | Example or description of required input. Disappears on focus — never use as label. |
| 5 | **Helper/Validation text** | ⚠️ Optional | Provides additional context or validation feedback below the field. |
| 6 | **Leading icon**     | ⚠️ Optional | Describes the type of input (e.g., email icon, phone icon). |
| 7 | **Trailing icon**    | ⚠️ Optional | Additional control — clear button, show/hide password toggle, etc. |

### Container Styles (choose ONE, be consistent)

- **Outlined** (RECOMMENDED): Clear rectangular border. Best discoverability. Use this as default.
- **Filled**: Subtle background fill with bottom border. Good for dense forms.
- **Underline-only**: ❌ AVOID. Studies (Material Design Evolution study) showed poor discoverability and usability. These were revised in Material Design updates.

> **Rule: Never mix container styles within the same form.**

---

## 2. Text Field States

Every text field MUST support and visually differentiate ALL of these states:

| State        | Visual Treatment |
|--------------|-----------------|
| **Inactive** | Default resting state. Subtle border/fill, muted label color. |
| **Hover**    | Slightly darker border or background change on mouse hover. |
| **Focused**  | Prominent border color (primary/brand color), elevated shadow optional. Label animates to top if using floating label pattern. |
| **Filled/Complete** | Shows entered text. Border returns to subtle state. Checkmark icon optional for validated fields. |
| **Disabled** | Reduced opacity (≈40-50%). Non-interactive. Cursor changes to not-allowed. |
| **Error**    | Red/danger border color. Error icon (trailing). Helper text replaced with error message in red. |
| **Validation/Success** | Green/success border. Checkmark trailing icon. Helper text confirms valid input. |

### State Rules
- All states must be **clearly differentiated** from one another
- States must be **consistent** throughout the entire form and application
- Follow established patterns — don't challenge user mental models
- Avoid **premature validation** — don't mark a field as invalid before the user has finished typing
- Consider **positive validation** — showing success states adds delight and a sense of progression

---

## 3. Label Placement

### Top-Aligned Labels (✅ RECOMMENDED DEFAULT)
- Labels placed directly above the input field
- **Fastest completion time** — fewest eye fixations needed
- Works for all form lengths
- Best for mobile (vertical space is less constrained than horizontal)
- Supports responsive/adaptive layouts naturally

### Left-Aligned Labels
- Labels to the left of fields, left-justified
- Conserves vertical space
- **Slower completion** — Z-shaped reading pattern
- Connection between label and field can be hard to see
- Only use for very long forms or when vertical space is critically limited

### Right-Aligned Labels
- Labels to the left of fields, right-justified
- Better label-to-field association than left-aligned
- Harder to scan the labels as a group
- Use sparingly

### Floating Labels
- Label starts as placeholder, animates to top on focus
- Saves vertical space
- Acceptable pattern (used by Material Design)
- Must still have the label clearly visible in all states

> **Rule: Place labels ABOVE fields as the default. Only deviate with a documented reason.**

---

## 4. Placeholder Text Rules

- ❌ **NEVER use placeholder text as the only label** — it disappears on input, leaving users confused
- ✅ Use placeholder as a supplementary hint or example (e.g., "e.g., john@example.com")
- Keep placeholder text short and useful
- Placeholder color must be visually distinct from actual input text (lighter/muted)
- If a field needs explanation, use **helper text** below the field instead

---

## 5. Input Types & Variants

Use the correct input type for the data being collected:

| Data Type | Input Component | Notes |
|-----------|----------------|-------|
| Short text (name, email) | Single-line text field | Auto-scrolls if text exceeds width |
| Long text (message, bio) | Textarea (multiline) | Fixed height, vertical scroll. Allow resize where appropriate. |
| Password | Password field | Include show/hide toggle (trailing icon). Show requirements. Use strength meter. |
| Date | Date picker | Use platform-native pickers where possible. Ensure correct format guidance. |
| Selection (few options) | Radio buttons / Segmented control | Use when 2-5 options, all visible at once |
| Selection (many options) | Dropdown / Select | Use search for long lists (countries, states) |
| Yes/No | Checkbox / Toggle | Checkbox for agreement, toggle for settings |
| Numeric | Number input | Show numeric keyboard on mobile |
| Phone | Phone input | Show phone keyboard on mobile |
| Email | Email input | Show email keyboard on mobile (with @ key) |
| Credit card | Masked input | Auto-format with spaces. Show card type icon. |

> **Rule: Don't break naturally combined fields into multiple inputs.** Keep "Full Name" as one field, not "First" + "Last" (unless backend requires it). Same for dates — prefer a date picker over 3 separate fields.

---

## 6. Mobile & Touch Considerations

### Keyboard Types
Always set the appropriate keyboard type for the input:
- `type="email"` → email keyboard (with @)
- `type="tel"` → numeric phone pad
- `type="number"` → numeric keyboard
- `type="url"` → URL keyboard (with .com)
- `type="search"` → search keyboard (with search button)

### Touch Targets
- Minimum touch target: **44×44px** (iOS) / **48×48dp** (Android/Material)
- Ensure adequate spacing between fields (minimum 16px)
- Position text fields in the **upper area** of the screen to avoid keyboard overlap

### Autofill & Autocomplete
- Enable browser autofill with proper `autocomplete` attributes
- Support auto-capitalization where appropriate
- Provide suggestions/autocomplete for known value sets

---

## 7. Password Field Design

- ✅ Allow users to **unmask/show password** with a toggle icon — eliminates need for "confirm password" field
- ✅ Display password requirements **at all times**, not just on error
- ✅ Show **real-time progress** toward meeting requirements (checkmarks as criteria are met)
- ✅ Use **strength meters** to encourage stronger passwords
- ✅ Simplify requirements for the user as much as possible
- ❌ Avoid requiring the user to type the password twice when a show/hide toggle is available

---

## 8. Validation & Error Handling

### Inline Validation (PREFERRED)
- Validate on **blur** (when field loses focus) — not while user is still typing
- For critical fields, validate in **real-time** after initial blur
- Especially important on mobile where screen space is limited

### Error Messages Must Communicate:
1. **That** an error has occurred (red border, error icon)
2. **Where** the error is (highlight the specific field)
3. **How to fix it** (specific, actionable helper text)

### Error Display Rules
- Show error text **below the field** in red/danger color
- Replace helper text with error text (don't show both)
- Use a trailing error icon inside the field
- For form-level validation, also show a **summary at the top** of the form
- Keep error messages **specific and helpful**: "Email must include @" not "Invalid input"

### Positive Validation
- Show green border / checkmark when a field is valid
- Adds a sense of progress and delight
- Particularly useful for complex inputs (passwords, usernames)

---

## 9. Form Structure & Layout

### Single Column Layout (✅ DEFAULT)
- Stack fields in a **single vertical column**
- Fastest completion — users scan straight down
- Exception: very short, related fields (City + State + ZIP) can share a row

### Form Length
- **Minimize fields** — only ask for what is absolutely necessary
- Mark optional fields explicitly with "(optional)" text — don't rely on asterisks alone
- If the form is unavoidably long, break it into logical sections/steps

### Grouping & Sections
- Group related fields together using **Gestalt principles**: proximity, similarity, enclosure
- Use section headings to label groups
- Add subtle visual separators (spacing, lines, or cards) between groups

### Progressive Disclosure
- Only show fields that are relevant based on prior answers
- Use **conditional logic** to show/hide fields dynamically
- Reduces visual complexity and makes the form feel personalized and conversational

### Multi-Step Forms
- Break very long forms into steps with a clear progress indicator
- Show which step the user is on and how many remain
- Allow going back to previous steps
- ❌ Avoid multi-step forms inside small pop-ups/modals

---

## 10. Required vs Optional Fields

- Mark **optional** fields with "(optional)" text next to the label
- If most fields are required, only mark the optional ones
- If most fields are optional, mark the required ones with an asterisk `*` AND include a legend
- Never leave users guessing which fields are required
- Every required field must provide clear validation if left empty

---

## 11. Call-to-Action (Submit) Buttons

- **Left-align** the primary submit button with the form fields (for left-to-right languages)
- Only ONE primary/prominent CTA button per form
- Use clear, specific action labels: "Create Account" not "Submit"
- Secondary actions (Cancel, Back) should be visually less prominent
- Disable the submit button until all required validation passes (optional — some prefer showing errors on submit)

---

## 12. Accessibility Requirements

- Every field MUST have a **programmatic label** (`<label>` element or `aria-label`)
- Don't rely on placeholder text for accessibility — screen readers may not announce it consistently
- Ensure **color is not the only indicator** of state (error, success) — use icons and text too
- Maintain minimum **4.5:1 contrast ratio** for text, **3:1** for interactive boundaries
- Support **keyboard navigation** (Tab, Shift+Tab, Enter)
- Error messages must be announced to screen readers (use `aria-live="polite"` or `role="alert"`)
- Allow page zoom without breaking layout

---

## 13. Implementation Checklist

When generating any form UI, verify:

- [ ] Every field has a visible label (not just placeholder)
- [ ] Container style is outlined or filled (not underline-only)
- [ ] All 6+ states are visually distinct (inactive, hover, focused, filled, disabled, error)
- [ ] Proper input types are used (`email`, `tel`, `number`, `password`, etc.)
- [ ] Mobile keyboards match input type
- [ ] Touch targets meet minimum 44px/48dp
- [ ] Inline validation on blur (not while typing)
- [ ] Error messages are specific and below the field
- [ ] Password fields have show/hide toggle
- [ ] Form is single-column layout (unless justified exception)
- [ ] Required/optional fields are clearly indicated
- [ ] CTA button has specific action label
- [ ] Proper `autocomplete` attributes are set
- [ ] Accessibility: labels, contrast, keyboard nav, ARIA attributes
- [ ] Fields are grouped logically with clear visual hierarchy

---

## Quick Reference: Common Mistakes to AVOID

| ❌ Don't | ✅ Do Instead |
|----------|--------------|
| Use placeholder as label | Use a real label above the field |
| Use underline-only inputs | Use outlined or filled containers |
| Validate while user is typing | Validate on blur (loss of focus) |
| Show vague errors ("Invalid") | Show specific errors ("Must be at least 8 characters") |
| Use multi-column form layout | Use single-column layout |
| Break full name into 2 fields | Use one "Full Name" field (when possible) |
| Hide password requirements | Show requirements at all times |
| Require typing password twice | Provide show/hide password toggle |
| Mix input container styles | Be consistent across the form |
| Skip disabled/hover states | Implement ALL field states |
| Use tiny touch targets | Minimum 44×44px / 48×48dp |
| Nest multi-step forms in modals | Use full-page multi-step with progress bar |