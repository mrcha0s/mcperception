# MC Perception

MC Perception is a function-first design system and color palette built for high-clarity dashboards, trading interfaces, and internal data-dense tools. It follows the principle of **form follows function**, prioritizing readability, precision, and performance over ornamentation.

Although visually minimal — even intentionally “ugly” by aesthetic standards — every decision is correct, calculated, and optimized for fast comprehension under real-world conditions.

---

## Features

- **Engineered Color Palette**  
  Carefully calculated contrast ratios for maximum readability and accessibility.

- **Tailwind UI Components**  
  Practical, minimal, and predictable building blocks for internal tooling.

- **Data-Dense Design Optimization**  
  Built specifically for dashboards, monitoring tools, analytics panels, and trading UIs.

- **Token-Based Architecture**  
  Scalable colors, typography, spacing, and layout primitives.

- **Form Follows Function**  
  No decoration, no fluff — clarity and correctness above everything.

---


## Philosophy

MC Perception is built around functional clarity. Every color, ratio, and component is intentionally designed to:

- reduce cognitive load  
- increase scan speed  
- emphasize information hierarchy  
- aid high-pressure decision-making  

It rejects aesthetic noise and focuses on correctness and comprehension — especially in trading and monitoring environments where readability matters more than visual branding.

---

## Roadmap

- [ ] Expand Tailwind component catalog  
- [ ] Provide complete design tokens  
- [ ] Documentation site  
- [ ] Example dashboard templates  
- [ ] Theme variations (dark/light/system)  
- [ ] Accessibility presets  

---

## Usage

To use MC Perception in your project, include the CDN stylesheet in your HTML:

```html
<link rel="stylesheet" href="https://mrcha0s.github.io/mcperception/src/dist/mcperception.css">
```

This loads the full MC Perception design system, including:

- Tailwind 4.1 utilities
- MC Perception theme tokens
- Color system
- Typography system
- Fully inlined Roboto / Roboto Condensed / Roboto Mono / Roboto Slab fonts
- All UI resets and base styling

Example usage:

```html
<div class="p-4 rounded bg-surface text-primary font-sans">
  Hello MC Perception
</div>

<h1 class="text-3xl font-slab mt-6">
  Headline Example
</h1>

<code class="font-mono text-accent">
  Code Block Example
</code>
```

No Tailwind installation is required. Everything is precompiled into a single CSS file.


## License

MC Perception is free for personal or commercial use, under a permissive Apache License 2.0.  
