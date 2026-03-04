# CodeMockup

Terminal-style code and command display blocks with prefix columns, status line highlights, and filled variants. Supports all 7 hues, 5 surface modes, 6 size tiers, and full WCAG AA compliance.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `lines` | `CodeMockupLine[]` | *required* | Array of lines to display |
| `hue` | `'neutral' \| 'red' \| 'green' \| 'blue' \| 'yellow' \| 'magenta' \| 'teal'` | `'neutral'` | Color hue theme |
| `mode` | `1 \| 2 \| 3 \| 4 \| 5` | inherited | Surface mode (typically inherited from parent `data-mode`) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | `'md'` | Size tier |
| `filled` | `boolean` | `false` | Use filled variant (hue.800 background) |
| `className` | `string` | — | Additional CSS class names |
| `aria-label` | `string` | `'Code block'` | Accessible label |

### CodeMockupLine

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `text` | `string` | Yes | Line content |
| `prefix` | `string` | No | Gutter prefix (e.g., `$`, `>`, `~`, line number) |
| `highlight` | `'warning' \| 'success' \| 'error'` | No | Semantic line highlight |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.mc-code-mockup` | Base component |
| `.mc-code-mockup-filled` | Filled variant with hue.800 background |
| `.mc-code-mockup-xs` | Extra small size (11px) |
| `.mc-code-mockup-sm` | Small size (12px) |
| *(default)* | Medium size (14px) |
| `.mc-code-mockup-lg` | Large size (16px) |
| `.mc-code-mockup-xl` | Extra large size (18px) |
| `.mc-code-mockup-xxl` | Extra extra large size (20px) |
| `.mc-code-mockup-line-warning` | Yellow highlight on `<pre>` |
| `.mc-code-mockup-line-success` | Green highlight on `<pre>` |
| `.mc-code-mockup-line-error` | Red highlight on `<pre>` |

## Usage Examples

### Mode 1 — White Surface

```html
<div data-mode="1">
  <div class="mc-code-mockup" data-hue="blue">
    <pre data-prefix="$"><code>npm install perception-bootstrap</code></pre>
    <pre data-prefix=">"><code>installing...</code></pre>
    <pre data-prefix=">" class="mc-code-mockup-line-success"><code>done!</code></pre>
  </div>
</div>
```

### Mode 2 — Black Surface

```html
<div data-mode="2" style="background: #0A0A0A;">
  <div class="mc-code-mockup" data-hue="green">
    <pre data-prefix="$"><code>git status</code></pre>
    <pre data-prefix=">"><code>On branch main</code></pre>
  </div>
</div>
```

### Mode 3 — Light Hue Surface

```html
<div data-mode="3" style="background: #dedeff;">
  <div class="mc-code-mockup" data-hue="blue">
    <pre data-prefix="1"><code>const app = express();</code></pre>
    <pre data-prefix="2"><code>app.listen(3000);</code></pre>
  </div>
</div>
```

### Mode 4 — Dark Hue Surface

```html
<div data-mode="4" style="background: #000081;">
  <div class="mc-code-mockup" data-hue="blue">
    <pre data-prefix="~"><code>cd ~/projects</code></pre>
    <pre data-prefix="~"><code>ls -la</code></pre>
  </div>
</div>
```

### Mode 5 — Mid Hue Surface

```html
<div data-mode="5" style="background: #5252ff;">
  <div class="mc-code-mockup" data-hue="blue">
    <pre data-prefix="$"><code>perception build --production</code></pre>
    <pre class="mc-code-mockup-line-success" data-prefix=">"><code>Build complete!</code></pre>
  </div>
</div>
```

### Filled Variant

```html
<div class="mc-code-mockup mc-code-mockup-filled" data-hue="red">
  <pre data-prefix="!"><code>Error: Connection refused</code></pre>
  <pre data-prefix="!" class="mc-code-mockup-line-error"><code>Retrying in 5s...</code></pre>
</div>
```

### Line Highlights

```html
<div class="mc-code-mockup" data-hue="neutral">
  <pre data-prefix="1"><code>function deploy() {</code></pre>
  <pre data-prefix="2" class="mc-code-mockup-line-warning"><code>  // TODO: add validation</code></pre>
  <pre data-prefix="3" class="mc-code-mockup-line-success"><code>  return build();</code></pre>
  <pre data-prefix="4" class="mc-code-mockup-line-error"><code>  throw new Error('fail');</code></pre>
  <pre data-prefix="5"><code>}</code></pre>
</div>
```

### Size Comparison

| Size | Font | Gutter Width | Description |
|------|------|-------------|-------------|
| `xs` | 11px | 2rem | Very compact — dense terminals |
| `sm` | 12px | 2.5rem | Compact — inline code snippets |
| `md` | 14px | 3rem | Standard — documentation |
| `lg` | 16px | 3.5rem | Comfortable — tutorials |
| `xl` | 18px | 4rem | Large — presentations |
| `xxl` | 20px | 4.5rem | Extra large — hero displays |

## Accessibility

- The component uses `role="region"` with `aria-label` for screen reader context
- Code content is wrapped in semantic `<pre><code>` elements
- Line prefixes are generated via CSS `::before` pseudo-elements (decorative, not read by screen readers)
- All text/background combinations meet WCAG AA contrast thresholds:
  - Code text: >= 4.5:1 on all surface modes
  - Prefix text: >= 3.0:1 on dark modes, >= 4.5:1 on light modes
  - Line highlights: >= 4.5:1 for all semantic colors on all modes
  - Borders: >= 3.0:1 on surface backgrounds
- Highlighted lines use both color and semantic class names (not color-only indication)
- Monospace font ensures consistent character alignment for code readability
