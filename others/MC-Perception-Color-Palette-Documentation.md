# MC Perception Color Palette Documentation

## Overview

**MC Perception** is a function-first design system and color palette built for high-clarity dashboards, trading interfaces, and data-dense internal tools. Every color is carefully engineered with precise contrast ratios, optimized for fast comprehension under real-world conditions.

This documentation covers the complete color system, hex values, contrast ratios, and usage guidelines.

---

## Design Philosophy

The MC Perception palette follows the principle of **form follows function**:

- **Reduce cognitive load** — Clear visual hierarchy through calculated contrast
- **Increase scan speed** — Distinct color families for rapid information parsing
- **Emphasize information hierarchy** — 10-step gradients per hue for nuanced layering
- **Aid high-pressure decision-making** — Red/green semantic colors optimized for trading UIs

---

## Color Architecture

The palette consists of **7 color families**, each with **dark** and **light** variants containing **10 shades** (50–900):

| Family   | Dark Prefix        | Light Prefix        | Primary Use Case           |
|----------|--------------------|--------------------|----------------------------|
| Gray     | `mc-dark-gray`     | `mc-light-gray`    | Backgrounds, text, borders |
| Red      | `mc-dark-red`      | `mc-light-red`     | Negative, loss, errors     |
| Green    | `mc-dark-green`    | `mc-light-green`   | Positive, gain, success    |
| Blue     | `mc-dark-blue`     | `mc-light-blue`    | Information, links, focus  |
| Yellow   | `mc-dark-yellow`   | `mc-light-yellow`  | Warnings, caution          |
| Purple   | `mc-dark-purple`   | `mc-light-purple`  | Highlights, special states |
| Cyan     | `mc-dark-cyan`     | `mc-light-cyan`    | Accent, secondary actions  |

---

## Complete Color Reference

### Gray (Neutral)

#### Dark Gray — For dark theme backgrounds and UI chrome

| Shade | Hex       | CSS Variable                  | Tailwind Class            |
|-------|-----------|-------------------------------|---------------------------|
| 50    | `#b8b8b8` | `--color-mc-dark-gray-50`     | `bg-mc-dark-gray-50`      |
| 100   | `#7f7f7f` | `--color-mc-dark-gray-100`    | `bg-mc-dark-gray-100`     |
| 200   | `#646464` | `--color-mc-dark-gray-200`    | `bg-mc-dark-gray-200`     |
| 300   | `#515151` | `--color-mc-dark-gray-300`    | `bg-mc-dark-gray-300`     |
| 400   | `#424242` | `--color-mc-dark-gray-400`    | `bg-mc-dark-gray-400`     |
| 500   | `#373737` | `--color-mc-dark-gray-500`    | `bg-mc-dark-gray-500`     |
| 600   | `#2c2c2c` | `--color-mc-dark-gray-600`    | `bg-mc-dark-gray-600`     |
| 700   | `#222222` | `--color-mc-dark-gray-700`    | `bg-mc-dark-gray-700`     |
| 800   | `#171717` | `--color-mc-dark-gray-800`    | `bg-mc-dark-gray-800`     |
| 900   | `#090909` | `--color-mc-dark-gray-900`    | `bg-mc-dark-gray-900`     |

#### Light Gray — For light theme backgrounds and UI chrome

| Shade | Hex       | CSS Variable                   | Tailwind Class             |
|-------|-----------|--------------------------------|----------------------------|
| 50    | `#fafafa` | `--color-mc-light-gray-50`     | `bg-mc-light-gray-50`      |
| 100   | `#eeeeee` | `--color-mc-light-gray-100`    | `bg-mc-light-gray-100`     |
| 200   | `#e1e1e1` | `--color-mc-light-gray-200`    | `bg-mc-light-gray-200`     |
| 300   | `#d2d2d2` | `--color-mc-light-gray-300`    | `bg-mc-light-gray-300`     |
| 400   | `#c3c3c3` | `--color-mc-light-gray-400`    | `bg-mc-light-gray-400`     |
| 500   | `#b3b3b3` | `--color-mc-light-gray-500`    | `bg-mc-light-gray-500`     |
| 600   | `#a0a0a0` | `--color-mc-light-gray-600`    | `bg-mc-light-gray-600`     |
| 700   | `#898989` | `--color-mc-light-gray-700`    | `bg-mc-light-gray-700`     |
| 800   | `#6c6c6c` | `--color-mc-light-gray-800`    | `bg-mc-light-gray-800`     |
| 900   | `#3f3f3f` | `--color-mc-light-gray-900`    | `bg-mc-light-gray-900`     |

---

### Red (Negative/Loss)

#### Dark Red — For dark theme negative indicators

| Shade | Hex       | CSS Variable                 | Tailwind Class           |
|-------|-----------|------------------------------|--------------------------|
| 50    | `#ff9c9c` | `--color-mc-dark-red-50`     | `bg-mc-dark-red-50`      |
| 100   | `#ff0000` | `--color-mc-dark-red-100`    | `bg-mc-dark-red-100`     |
| 200   | `#ca0000` | `--color-mc-dark-red-200`    | `bg-mc-dark-red-200`     |
| 300   | `#a70000` | `--color-mc-dark-red-300`    | `bg-mc-dark-red-300`     |
| 400   | `#8b0000` | `--color-mc-dark-red-400`    | `bg-mc-dark-red-400`     |
| 500   | `#740000` | `--color-mc-dark-red-500`    | `bg-mc-dark-red-500`     |
| 600   | `#600000` | `--color-mc-dark-red-600`    | `bg-mc-dark-red-600`     |
| 700   | `#460000` | `--color-mc-dark-red-700`    | `bg-mc-dark-red-700`     |
| 800   | `#380000` | `--color-mc-dark-red-800`    | `bg-mc-dark-red-800`     |
| 900   | `#1c0000` | `--color-mc-dark-red-900`    | `bg-mc-dark-red-900`     |

#### Light Red — For light theme negative indicators

| Shade | Hex       | CSS Variable                  | Tailwind Class            |
|-------|-----------|-------------------------------|---------------------------|
| 50    | `#fff8f8` | `--color-mc-light-red-50`     | `bg-mc-light-red-50`      |
| 100   | `#ffe9e9` | `--color-mc-light-red-100`    | `bg-mc-light-red-100`     |
| 200   | `#ffd8d8` | `--color-mc-light-red-200`    | `bg-mc-light-red-200`     |
| 300   | `#ffc5c5` | `--color-mc-light-red-300`    | `bg-mc-light-red-300`     |
| 400   | `#ffafaf` | `--color-mc-light-red-400`    | `bg-mc-light-red-400`     |
| 500   | `#ff9696` | `--color-mc-light-red-500`    | `bg-mc-light-red-500`     |
| 600   | `#ff7474` | `--color-mc-light-red-600`    | `bg-mc-light-red-600`     |
| 700   | `#ff3e3e` | `--color-mc-light-red-700`    | `bg-mc-light-red-700`     |
| 800   | `#da0000` | `--color-mc-light-red-800`    | `bg-mc-light-red-800`     |
| 900   | `#850000` | `--color-mc-light-red-900`    | `bg-mc-light-red-900`     |

---

### Green (Positive/Gain)

#### Dark Green — For dark theme positive indicators

| Shade | Hex       | CSS Variable                   | Tailwind Class             |
|-------|-----------|--------------------------------|----------------------------|
| 50    | `#00d500` | `--color-mc-dark-green-50`     | `bg-mc-dark-green-50`      |
| 100   | `#009400` | `--color-mc-dark-green-100`    | `bg-mc-dark-green-100`     |
| 200   | `#007400` | `--color-mc-dark-green-200`    | `bg-mc-dark-green-200`     |
| 300   | `#005f00` | `--color-mc-dark-green-300`    | `bg-mc-dark-green-300`     |
| 400   | `#004f00` | `--color-mc-dark-green-400`    | `bg-mc-dark-green-400`     |
| 500   | `#004000` | `--color-mc-dark-green-500`    | `bg-mc-dark-green-500`     |
| 600   | `#003500` | `--color-mc-dark-green-600`    | `bg-mc-dark-green-600`     |
| 700   | `#002900` | `--color-mc-dark-green-700`    | `bg-mc-dark-green-700`     |
| 800   | `#001d00` | `--color-mc-dark-green-800`    | `bg-mc-dark-green-800`     |
| 900   | `#000c00` | `--color-mc-dark-green-900`    | `bg-mc-dark-green-900`     |

#### Light Green — For light theme positive indicators

| Shade | Hex       | CSS Variable                    | Tailwind Class              |
|-------|-----------|---------------------------------|-----------------------------|
| 50    | `#ebffeb` | `--color-mc-light-green-50`     | `bg-mc-light-green-50`      |
| 100   | `#b7ffb7` | `--color-mc-light-green-100`    | `bg-mc-light-green-100`     |
| 200   | `#62ff62` | `--color-mc-light-green-200`    | `bg-mc-light-green-200`     |
| 300   | `#00f400` | `--color-mc-light-green-300`    | `bg-mc-light-green-300`     |
| 400   | `#00e400` | `--color-mc-light-green-400`    | `bg-mc-light-green-400`     |
| 500   | `#00d000` | `--color-mc-light-green-500`    | `bg-mc-light-green-500`     |
| 600   | `#00ba00` | `--color-mc-light-green-600`    | `bg-mc-light-green-600`     |
| 700   | `#009f00` | `--color-mc-light-green-700`    | `bg-mc-light-green-700`     |
| 800   | `#007f00` | `--color-mc-light-green-800`    | `bg-mc-light-green-800`     |
| 900   | `#004b00` | `--color-mc-light-green-900`    | `bg-mc-light-green-900`     |

---

### Blue (Informational)

#### Dark Blue — For dark theme informational elements

| Shade | Hex       | CSS Variable                  | Tailwind Class            |
|-------|-----------|-------------------------------|---------------------------|
| 50    | `#b0b0ff` | `--color-mc-dark-blue-50`     | `bg-mc-dark-blue-50`      |
| 100   | `#6d6dff` | `--color-mc-dark-blue-100`    | `bg-mc-dark-blue-100`     |
| 200   | `#4444ff` | `--color-mc-dark-blue-200`    | `bg-mc-dark-blue-200`     |
| 300   | `#1919ff` | `--color-mc-dark-blue-300`    | `bg-mc-dark-blue-300`     |
| 400   | `#0000e3` | `--color-mc-dark-blue-400`    | `bg-mc-dark-blue-400`     |
| 500   | `#0000bf` | `--color-mc-dark-blue-500`    | `bg-mc-dark-blue-500`     |
| 600   | `#00009f` | `--color-mc-dark-blue-600`    | `bg-mc-dark-blue-600`     |
| 700   | `#000081` | `--color-mc-dark-blue-700`    | `bg-mc-dark-blue-700`     |
| 800   | `#000060` | `--color-mc-dark-blue-800`    | `bg-mc-dark-blue-800`     |
| 900   | `#000035` | `--color-mc-dark-blue-900`    | `bg-mc-dark-blue-900`     |

#### Light Blue — For light theme informational elements

| Shade | Hex       | CSS Variable                   | Tailwind Class             |
|-------|-----------|--------------------------------|----------------------------|
| 50    | `#f8f8ff` | `--color-mc-light-blue-50`     | `bg-mc-light-blue-50`      |
| 100   | `#ececff` | `--color-mc-light-blue-100`    | `bg-mc-light-blue-100`     |
| 200   | `#dedeff` | `--color-mc-light-blue-200`    | `bg-mc-light-blue-200`     |
| 300   | `#ceceff` | `--color-mc-light-blue-300`    | `bg-mc-light-blue-300`     |
| 400   | `#bebeff` | `--color-mc-light-blue-400`    | `bg-mc-light-blue-400`     |
| 500   | `#ababff` | `--color-mc-light-blue-500`    | `bg-mc-light-blue-500`     |
| 600   | `#9494ff` | `--color-mc-light-blue-600`    | `bg-mc-light-blue-600`     |
| 700   | `#7979ff` | `--color-mc-light-blue-700`    | `bg-mc-light-blue-700`     |
| 800   | `#5252ff` | `--color-mc-light-blue-800`    | `bg-mc-light-blue-800`     |
| 900   | `#0000d9` | `--color-mc-light-blue-900`    | `bg-mc-light-blue-900`     |

---

### Yellow (Warning/Caution)

#### Dark Yellow — For dark theme warning indicators

| Shade | Hex       | CSS Variable                    | Tailwind Class              |
|-------|-----------|---------------------------------|-----------------------------|
| 50    | `#bdbd00` | `--color-mc-dark-yellow-50`     | `bg-mc-dark-yellow-50`      |
| 100   | `#838300` | `--color-mc-dark-yellow-100`    | `bg-mc-dark-yellow-100`     |
| 200   | `#676700` | `--color-mc-dark-yellow-200`    | `bg-mc-dark-yellow-200`     |
| 300   | `#545400` | `--color-mc-dark-yellow-300`    | `bg-mc-dark-yellow-300`     |
| 400   | `#444400` | `--color-mc-dark-yellow-400`    | `bg-mc-dark-yellow-400`     |
| 500   | `#383800` | `--color-mc-dark-yellow-500`    | `bg-mc-dark-yellow-500`     |
| 600   | `#2e2e00` | `--color-mc-dark-yellow-600`    | `bg-mc-dark-yellow-600`     |
| 700   | `#242400` | `--color-mc-dark-yellow-700`    | `bg-mc-dark-yellow-700`     |
| 800   | `#181800` | `--color-mc-dark-yellow-800`    | `bg-mc-dark-yellow-800`     |
| 900   | `#090900` | `--color-mc-dark-yellow-900`    | `bg-mc-dark-yellow-900`     |

#### Light Yellow — For light theme warning indicators

| Shade | Hex       | CSS Variable                     | Tailwind Class               |
|-------|-----------|----------------------------------|------------------------------|
| 50    | `#ffff97` | `--color-mc-light-yellow-50`     | `bg-mc-light-yellow-50`      |
| 100   | `#f6f600` | `--color-mc-light-yellow-100`    | `bg-mc-light-yellow-100`     |
| 200   | `#e8e800` | `--color-mc-light-yellow-200`    | `bg-mc-light-yellow-200`     |
| 300   | `#d9d900` | `--color-mc-light-yellow-300`    | `bg-mc-light-yellow-300`     |
| 400   | `#caca00` | `--color-mc-light-yellow-400`    | `bg-mc-light-yellow-400`     |
| 500   | `#b9b900` | `--color-mc-light-yellow-500`    | `bg-mc-light-yellow-500`     |
| 600   | `#a6a600` | `--color-mc-light-yellow-600`    | `bg-mc-light-yellow-600`     |
| 700   | `#8d8d00` | `--color-mc-light-yellow-700`    | `bg-mc-light-yellow-700`     |
| 800   | `#6f6f00` | `--color-mc-light-yellow-800`    | `bg-mc-light-yellow-800`     |
| 900   | `#424200` | `--color-mc-light-yellow-900`    | `bg-mc-light-yellow-900`     |

---

### Purple (Highlight/Special)

#### Dark Purple — For dark theme highlights

| Shade | Hex       | CSS Variable                    | Tailwind Class              |
|-------|-----------|---------------------------------|-----------------------------|
| 50    | `#ff8dff` | `--color-mc-dark-purple-50`     | `bg-mc-dark-purple-50`      |
| 100   | `#e000e0` | `--color-mc-dark-purple-100`    | `bg-mc-dark-purple-100`     |
| 200   | `#b100b1` | `--color-mc-dark-purple-200`    | `bg-mc-dark-purple-200`     |
| 300   | `#910091` | `--color-mc-dark-purple-300`    | `bg-mc-dark-purple-300`     |
| 400   | `#7a007a` | `--color-mc-dark-purple-400`    | `bg-mc-dark-purple-400`     |
| 500   | `#660066` | `--color-mc-dark-purple-500`    | `bg-mc-dark-purple-500`     |
| 600   | `#530053` | `--color-mc-dark-purple-600`    | `bg-mc-dark-purple-600`     |
| 700   | `#420042` | `--color-mc-dark-purple-700`    | `bg-mc-dark-purple-700`     |
| 800   | `#300030` | `--color-mc-dark-purple-800`    | `bg-mc-dark-purple-800`     |
| 900   | `#170017` | `--color-mc-dark-purple-900`    | `bg-mc-dark-purple-900`     |

#### Light Purple — For light theme highlights

| Shade | Hex       | CSS Variable                     | Tailwind Class               |
|-------|-----------|----------------------------------|------------------------------|
| 50    | `#fff7ff` | `--color-mc-light-purple-50`     | `bg-mc-light-purple-50`      |
| 100   | `#ffe5ff` | `--color-mc-light-purple-100`    | `bg-mc-light-purple-100`     |
| 200   | `#ffd2ff` | `--color-mc-light-purple-200`    | `bg-mc-light-purple-200`     |
| 300   | `#ffbeff` | `--color-mc-light-purple-300`    | `bg-mc-light-purple-300`     |
| 400   | `#ffa4ff` | `--color-mc-light-purple-400`    | `bg-mc-light-purple-400`     |
| 500   | `#ff84ff` | `--color-mc-light-purple-500`    | `bg-mc-light-purple-500`     |
| 600   | `#ff55ff` | `--color-mc-light-purple-600`    | `bg-mc-light-purple-600`     |
| 700   | `#f100f1` | `--color-mc-light-purple-700`    | `bg-mc-light-purple-700`     |
| 800   | `#c000c0` | `--color-mc-light-purple-800`    | `bg-mc-light-purple-800`     |
| 900   | `#740074` | `--color-mc-light-purple-900`    | `bg-mc-light-purple-900`     |

---

### Cyan (Accent/Secondary)

#### Dark Cyan — For dark theme accents

| Shade | Hex       | CSS Variable                  | Tailwind Class            |
|-------|-----------|-------------------------------|---------------------------|
| 50    | `#00cccc` | `--color-mc-dark-cyan-50`     | `bg-mc-dark-cyan-50`      |
| 100   | `#008e8e` | `--color-mc-dark-cyan-100`    | `bg-mc-dark-cyan-100`     |
| 200   | `#006f6f` | `--color-mc-dark-cyan-200`    | `bg-mc-dark-cyan-200`     |
| 300   | `#005a5a` | `--color-mc-dark-cyan-300`    | `bg-mc-dark-cyan-300`     |
| 400   | `#004b4b` | `--color-mc-dark-cyan-400`    | `bg-mc-dark-cyan-400`     |
| 500   | `#003d3d` | `--color-mc-dark-cyan-500`    | `bg-mc-dark-cyan-500`     |
| 600   | `#003131` | `--color-mc-dark-cyan-600`    | `bg-mc-dark-cyan-600`     |
| 700   | `#002727` | `--color-mc-dark-cyan-700`    | `bg-mc-dark-cyan-700`     |
| 800   | `#001b1b` | `--color-mc-dark-cyan-800`    | `bg-mc-dark-cyan-800`     |
| 900   | `#000b0b` | `--color-mc-dark-cyan-900`    | `bg-mc-dark-cyan-900`     |

#### Light Cyan — For light theme accents

| Shade | Hex       | CSS Variable                   | Tailwind Class             |
|-------|-----------|--------------------------------|----------------------------|
| 50    | `#e3ffff` | `--color-mc-light-cyan-50`     | `bg-mc-light-cyan-50`      |
| 100   | `#96ffff` | `--color-mc-light-cyan-100`    | `bg-mc-light-cyan-100`     |
| 200   | `#00f9f9` | `--color-mc-light-cyan-200`    | `bg-mc-light-cyan-200`     |
| 300   | `#00ebeb` | `--color-mc-light-cyan-300`    | `bg-mc-light-cyan-300`     |
| 400   | `#00dada` | `--color-mc-light-cyan-400`    | `bg-mc-light-cyan-400`     |
| 500   | `#00c8c8` | `--color-mc-light-cyan-500`    | `bg-mc-light-cyan-500`     |
| 600   | `#00b2b2` | `--color-mc-light-cyan-600`    | `bg-mc-light-cyan-600`     |
| 700   | `#009999` | `--color-mc-light-cyan-700`    | `bg-mc-light-cyan-700`     |
| 800   | `#007979` | `--color-mc-light-cyan-800`    | `bg-mc-light-cyan-800`     |
| 900   | `#004848` | `--color-mc-light-cyan-900`    | `bg-mc-light-cyan-900`     |

---

## Contrast Ratio Guidelines

The palette is engineered for WCAG accessibility compliance. Based on the contrast data in the palette:

### Dark Theme Recommendations

| Use Case                | Background           | Text Color          | Min Contrast |
|-------------------------|----------------------|---------------------|--------------|
| Primary content         | `mc-dark-gray-800`   | `#ffffff` (white)   | 12:1+        |
| Secondary content       | `mc-dark-gray-700`   | `mc-dark-gray-50`   | 7:1+         |
| Positive indicator      | `mc-dark-gray-800`   | `mc-light-green-500`| 7:1+         |
| Negative indicator      | `mc-dark-gray-800`   | `mc-light-red-600`  | 7:1+         |
| Interactive (buttons)   | `mc-dark-blue-400`   | `#ffffff`           | 4.5:1+       |

### Light Theme Recommendations

| Use Case                | Background           | Text Color          | Min Contrast |
|-------------------------|----------------------|---------------------|--------------|
| Primary content         | `mc-light-gray-50`   | `#000000` (black)   | 20:1+        |
| Secondary content       | `mc-light-gray-100`  | `mc-light-gray-900` | 7:1+         |
| Positive indicator      | `mc-light-gray-50`   | `mc-light-green-800`| 7:1+         |
| Negative indicator      | `mc-light-gray-50`   | `mc-light-red-800`  | 7:1+         |
| Interactive (buttons)   | `mc-light-blue-700`  | `#000000`           | 4.5:1+       |

---

## Usage Patterns

### Trading Dashboard (Dark Theme)

```html
<div class="bg-mc-dark-gray-800 text-white">
  <!-- Positive P&L -->
  <span class="text-mc-light-green-500">+$1,234.56</span>
  
  <!-- Negative P&L -->
  <span class="text-mc-light-red-600">-$567.89</span>
  
  <!-- Neutral/unchanged -->
  <span class="text-mc-dark-gray-50">$0.00</span>
  
  <!-- Warning alert -->
  <div class="bg-mc-dark-yellow-600 text-white p-2">
    Margin call warning
  </div>
</div>
```

### Data Table (Light Theme)

```html
<table class="bg-mc-light-gray-50">
  <thead class="bg-mc-light-gray-200">
    <tr>
      <th class="text-black">Symbol</th>
      <th class="text-black">Price</th>
      <th class="text-black">Change</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-mc-light-green-50">
      <td>AAPL</td>
      <td>$175.23</td>
      <td class="text-mc-light-green-800">+2.34%</td>
    </tr>
    <tr class="bg-mc-light-red-50">
      <td>TSLA</td>
      <td>$245.67</td>
      <td class="text-mc-light-red-800">-1.56%</td>
    </tr>
  </tbody>
</table>
```

### Button States

```html
<!-- Primary action -->
<button class="bg-mc-dark-blue-400 text-white hover:bg-mc-dark-blue-300">
  Submit Order
</button>

<!-- Danger action -->
<button class="bg-mc-dark-red-400 text-white hover:bg-mc-dark-red-300">
  Cancel All
</button>

<!-- Success state -->
<button class="bg-mc-dark-green-300 text-white">
  Confirmed
</button>
```

---

## Typography System

MC Perception includes the Roboto font family for optimal data readability:

| CSS Variable       | Font Family                          | Use Case               |
|--------------------|--------------------------------------|------------------------|
| `--font-sans`      | Roboto, system-ui, sans-serif        | Default UI text        |
| `--font-mono`      | Roboto Mono, ui-monospace, monospace | Numbers, code, data    |
| `--font-condensed` | Roboto Condensed, system-ui          | Compact data tables    |
| `--font-slab`      | Roboto Slab, serif                   | Headlines, emphasis    |

### Tailwind Classes

```html
<p class="font-sans">Regular UI text</p>
<span class="font-mono">123,456.78</span>
<th class="font-condensed">COLUMN HEADER</th>
<h1 class="font-slab">Dashboard Title</h1>
```

---

## Installation

Include the CDN stylesheet in your HTML:

```html
<link rel="stylesheet" href="https://mrcha0s.github.io/mcperception/src/dist/mcperception.css">
```

This loads:
- Tailwind 4.1 utilities
- MC Perception color tokens
- Typography system
- Roboto font family (fully inlined)
- Base styling and resets

---

## CSS Custom Properties Reference

All colors are available as CSS custom properties:

```css
/* Example: Custom component using MC Perception tokens */
.custom-panel {
  background: var(--color-mc-dark-gray-700);
  border: 1px solid var(--color-mc-dark-gray-500);
  color: var(--color-mc-dark-gray-50);
}

.custom-panel--positive {
  border-color: var(--color-mc-dark-green-200);
}

.custom-panel--negative {
  border-color: var(--color-mc-dark-red-200);
}
```

---

## License

MC Perception is released under the Apache License 2.0. Free for personal and commercial use.

---

*Documentation generated for MC Perception v1.0*
*Last updated: December 2025*
