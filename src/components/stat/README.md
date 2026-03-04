# Stat

Data metric display blocks with title, value, description, optional figure (icon/avatar), and action buttons. Supports stat groups with dividers in horizontal or vertical layouts. 7 hues, 5 surface modes, 6 sizes, and full WCAG AA compliance.

## Props — Stat

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Label above the value (e.g., "Total Revenue") |
| `value` | `string` | *required* | Primary metric (e.g., "$45,231") |
| `desc` | `string` | — | Supporting description text |
| `figure` | `ReactNode` | — | Icon or avatar element (positioned right) |
| `actions` | `ReactNode` | — | Action buttons below the stat |
| `hue` | `'neutral' \| 'red' \| 'green' \| 'blue' \| 'yellow' \| 'magenta' \| 'teal'` | `'neutral'` | Color hue theme |
| `mode` | `1 \| 2 \| 3 \| 4 \| 5` | inherited | Surface mode |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | `'md'` | Size tier |
| `centered` | `boolean` | `false` | Center-align content |
| `className` | `string` | — | Additional CSS classes |

## Props — StatGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `vertical` | `boolean` | `false` | Stack stats vertically instead of horizontally |
| `hue` | `Hue` | `'neutral'` | Color hue theme for borders/dividers |
| `mode` | `Mode` | inherited | Surface mode |
| `children` | `ReactNode` | *required* | Stat components |
| `className` | `string` | — | Additional CSS classes |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.mc-stat` | Individual stat block |
| `.mc-stats` | Group container (horizontal default) |
| `.mc-stats-vertical` | Vertical layout group |
| `.mc-stat-title` | Small label text |
| `.mc-stat-value` | Large metric number |
| `.mc-stat-desc` | Supporting description |
| `.mc-stat-figure` | Icon/avatar area |
| `.mc-stat-actions` | Button area |
| `.mc-stat-centered` | Center-aligned variant |
| `.mc-stat-xs` | Extra small size |
| `.mc-stat-sm` | Small size |
| *(default)* | Medium size |
| `.mc-stat-lg` | Large size |
| `.mc-stat-xl` | Extra large size |
| `.mc-stat-xxl` | Extra extra large size |

## Usage Examples

### Mode 1 — White Surface

```html
<div data-mode="1" style="background: #FFFFFF;">
  <div class="mc-stats" data-hue="blue">
    <div class="mc-stat">
      <div class="mc-stat-title">Total Revenue</div>
      <div class="mc-stat-value">$45,231</div>
      <div class="mc-stat-desc">+20.1% from last month</div>
    </div>
    <div class="mc-stat">
      <div class="mc-stat-title">Active Users</div>
      <div class="mc-stat-value">2,350</div>
      <div class="mc-stat-desc">+180 this week</div>
    </div>
  </div>
</div>
```

### Mode 2 — Black Surface

```html
<div data-mode="2" style="background: #0A0A0A;">
  <div class="mc-stats" data-hue="green">
    <div class="mc-stat">
      <div class="mc-stat-title">Downloads</div>
      <div class="mc-stat-value">31K</div>
      <div class="mc-stat-desc">Jan 1st - Feb 1st</div>
    </div>
    <div class="mc-stat">
      <div class="mc-stat-title">New Users</div>
      <div class="mc-stat-value">4,200</div>
      <div class="mc-stat-desc">+400 (22%)</div>
    </div>
  </div>
</div>
```

### Mode 3 — Light Hue Surface

```html
<div data-mode="3" style="background: #dedeff;">
  <div class="mc-stats" data-hue="blue">
    <div class="mc-stat">
      <div class="mc-stat-title">Conversions</div>
      <div class="mc-stat-value">1,024</div>
      <div class="mc-stat-desc">+12% this quarter</div>
    </div>
  </div>
</div>
```

### Mode 4 — Dark Hue Surface

```html
<div data-mode="4" style="background: #000081;">
  <div class="mc-stats" data-hue="blue">
    <div class="mc-stat">
      <div class="mc-stat-title">API Calls</div>
      <div class="mc-stat-value">2.4M</div>
      <div class="mc-stat-desc">99.9% uptime</div>
    </div>
  </div>
</div>
```

### Mode 5 — Mid Hue Surface

```html
<div data-mode="5" style="background: #5252ff;">
  <div class="mc-stats" data-hue="blue">
    <div class="mc-stat">
      <div class="mc-stat-title">Score</div>
      <div class="mc-stat-value">98%</div>
      <div class="mc-stat-desc">Excellent rating</div>
    </div>
  </div>
</div>
```

### With Figure (Icon)

```html
<div class="mc-stat" data-hue="red">
  <div class="mc-stat-figure">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  </div>
  <div class="mc-stat-title">Total Likes</div>
  <div class="mc-stat-value">25.6K</div>
  <div class="mc-stat-desc">21% more than last month</div>
</div>
```

### Vertical Layout

```html
<div class="mc-stats mc-stats-vertical" data-hue="neutral">
  <div class="mc-stat">
    <div class="mc-stat-title">Downloads</div>
    <div class="mc-stat-value">31K</div>
  </div>
  <div class="mc-stat">
    <div class="mc-stat-title">New Users</div>
    <div class="mc-stat-value">4,200</div>
  </div>
</div>
```

### Size Comparison

| Size | Value Font | Title/Desc Font | Description |
|------|-----------|----------------|-------------|
| `xs` | 1.25rem | 0.625rem | Very compact — dashboard widgets |
| `sm` | 1.5rem | 0.6875rem | Compact — sidebar metrics |
| `md` | 1.75rem | 0.75rem | Standard — cards and panels |
| `lg` | 2.125rem | 0.875rem | Comfortable — featured metrics |
| `xl` | 2.5rem | 0.9375rem | Large — hero stats |
| `xxl` | 3rem | 1rem | Extra large — landing pages |

## Accessibility

- Stat blocks use semantic HTML with clear text hierarchy
- All text/background combinations meet WCAG AA contrast thresholds (>= 4.5:1 for text, >= 3.0:1 for UI elements)
- Figure icons use `currentColor` and inherit the correct contrast color per mode
- Stat groups use CSS borders for dividers (not decorative pseudo-elements)
- Action buttons within stats maintain full keyboard accessibility
- Screen readers can parse the title-value-description hierarchy naturally
