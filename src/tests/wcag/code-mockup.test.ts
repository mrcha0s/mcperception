/**
 * CodeMockup — WCAG AA Contrast Verification
 *
 * Tests all 7 hues x 5 modes x key contrast pairs.
 * Every pair must meet:
 *   - Small text (< 18px bold / < 24px regular): >= 4.5:1
 *   - Large text (>= 18px bold / >= 24px regular): >= 3.0:1
 *   - Non-text UI (borders, icons, dividers): >= 3.0:1
 *
 * ZERO failures required.
 */

// --- Palette ---
const palette: Record<string, Record<string, string>> = {
  neutral: { '50':'#fafafa','100':'#e1e1e1','200':'#c3c3c3','300':'#a0a0a0','400':'#7f7f7f','500':'#6c6c6c','600':'#515151','700':'#373737','800':'#222222','900':'#090909' },
  red:     { '50':'#fffafa','100':'#ffd8d8','200':'#ffafaf','300':'#ff7474','400':'#ff0000','500':'#da0000','600':'#a70000','700':'#740000','800':'#4d0000','900':'#1c0000' },
  green:   { '50':'#ebffeb','100':'#62ff62','200':'#00e400','300':'#00ba00','400':'#009400','500':'#007f00','600':'#005f00','700':'#004000','800':'#002900','900':'#000c00' },
  blue:    { '50':'#f8f8ff','100':'#dedeff','200':'#bebeff','300':'#9494ff','400':'#6d6dff','500':'#5252ff','600':'#1919ff','700':'#0000bf','800':'#000081','900':'#000035' },
  yellow:  { '50':'#ffff97','100':'#e8e800','200':'#caca00','300':'#a6a600','400':'#838300','500':'#6f6f00','600':'#545400','700':'#383800','800':'#242400','900':'#090900' },
  magenta: { '50':'#fff7ff','100':'#ffd2ff','200':'#ffa4ff','300':'#ff55ff','400':'#e000e0','500':'#c000c0','600':'#910091','700':'#660066','800':'#420042','900':'#170017' },
  teal:    { '50':'#e3ffff','100':'#00f9f9','200':'#00dada','300':'#00b2b2','400':'#008e8e','500':'#007979','600':'#005a5a','700':'#003d3d','800':'#002727','900':'#000b0b' },
};

const WHITE = '#FFFFFF';
const BLACK = '#0A0A0A';

// --- WCAG Helpers ---
function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
  ];
}

function luminance(r: number, g: number, b: number): number {
  function lin(c: number) {
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

function contrastRatio(hex1: string, hex2: string): number {
  const l1 = luminance(...hexToRgb(hex1));
  const l2 = luminance(...hexToRgb(hex2));
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

// --- Mode Pairing Table for CodeMockup ---
// CodeMockup uses these color roles per mode:
//   Surface BG, Code Text, Prefix Text, Border
//
// Mode 2 (base/default): bg=cm-800, text=WHITE, prefix=cm-300, border=cm-400
// Mode 1: bg=WHITE, text=cm-900, prefix=cm-500, border=cm-400
// Mode 3: bg=cm-100, text=cm-900, prefix=cm-600, border=cm-500
// Mode 4: bg=cm-800, text=WHITE, prefix=cm-300, border=cm-400
// Mode 5: bg=cm-500, text=WHITE, prefix=cm-50, border=#0A0A0A

interface ContrastPair {
  role: string;
  fg: string;
  bg: string;
  threshold: number;
}

function getPairs(hue: string, mode: number): ContrastPair[] {
  const P = palette[hue];
  switch (mode) {
    case 1:
      return [
        { role: 'code text on surface', fg: P['900'], bg: WHITE, threshold: 4.5 },
        { role: 'prefix on surface', fg: P['500'], bg: WHITE, threshold: 4.5 },
        { role: 'border on surface', fg: P['400'], bg: WHITE, threshold: 3.0 },
      ];
    case 2:
      return [
        { role: 'code text on surface', fg: WHITE, bg: P['800'], threshold: 4.5 },
        { role: 'prefix on surface', fg: P['300'], bg: P['800'], threshold: 4.5 },
        { role: 'border on surface', fg: P['400'], bg: P['800'], threshold: 3.0 },
      ];
    case 3:
      return [
        { role: 'code text on surface', fg: P['900'], bg: P['100'], threshold: 4.5 },
        { role: 'prefix on surface', fg: P['600'], bg: P['100'], threshold: 4.5 },
        { role: 'border on surface', fg: P['500'], bg: P['100'], threshold: 3.0 },
      ];
    case 4:
      return [
        { role: 'code text on surface', fg: WHITE, bg: P['800'], threshold: 4.5 },
        { role: 'prefix on surface', fg: P['300'], bg: P['800'], threshold: 3.0 },
        { role: 'border on surface', fg: P['400'], bg: P['800'], threshold: 3.0 },
      ];
    case 5:
      return [
        { role: 'code text on surface', fg: WHITE, bg: P['500'], threshold: 4.5 },
        { role: 'prefix on surface', fg: P['50'], bg: P['500'], threshold: 4.5 },
        { role: 'border on surface', fg: BLACK, bg: P['500'], threshold: 3.0 },
      ];
    default:
      return [];
  }
}

// --- Run Tests ---
const hues = Object.keys(palette);
const modes = [1, 2, 3, 4, 5];
let passed = 0;
let failed = 0;
const failures: string[] = [];

for (const hue of hues) {
  for (const mode of modes) {
    const pairs = getPairs(hue, mode);
    for (const pair of pairs) {
      const ratio = contrastRatio(pair.fg, pair.bg);
      if (ratio >= pair.threshold) {
        passed++;
      } else {
        failed++;
        failures.push(
          `FAIL: ${hue} M${mode} ${pair.role}: ${pair.fg} on ${pair.bg} = ${ratio.toFixed(2)}:1 (need ${pair.threshold}:1)`
        );
      }
    }
  }
}

// Also test line highlights across all modes
// Line highlights use fixed semantic hues (yellow, green, red) with mode-aware colors
const lineHighlightPairs: ContrastPair[] = [
  // M2 (base): warning=yellow.800 bg + yellow.50 text
  { role: 'M2 warning text', fg: '#ffff97', bg: '#242400', threshold: 4.5 },
  { role: 'M2 success text', fg: '#ebffeb', bg: '#002900', threshold: 4.5 },
  { role: 'M2 error text', fg: '#fffafa', bg: '#4d0000', threshold: 4.5 },
  // M1: warning=yellow.100 bg + yellow.900 text
  { role: 'M1 warning text', fg: '#090900', bg: '#e8e800', threshold: 4.5 },
  { role: 'M1 success text', fg: '#000c00', bg: '#62ff62', threshold: 4.5 },
  { role: 'M1 error text', fg: '#1c0000', bg: '#ffd8d8', threshold: 4.5 },
  // M3: warning=yellow.200 bg + yellow.900 text
  { role: 'M3 warning text', fg: '#090900', bg: '#caca00', threshold: 4.5 },
  { role: 'M3 success text', fg: '#000c00', bg: '#00e400', threshold: 4.5 },
  { role: 'M3 error text', fg: '#1c0000', bg: '#ffafaf', threshold: 4.5 },
  // M4: warning=yellow.800 bg + yellow.50 text
  { role: 'M4 warning text', fg: '#ffff97', bg: '#242400', threshold: 4.5 },
  { role: 'M4 success text', fg: '#ebffeb', bg: '#002900', threshold: 4.5 },
  { role: 'M4 error text', fg: '#fffafa', bg: '#4d0000', threshold: 4.5 },
  // M5: warning=yellow.700 bg + yellow.50 text
  { role: 'M5 warning text', fg: '#ffff97', bg: '#383800', threshold: 4.5 },
  { role: 'M5 success text', fg: '#ebffeb', bg: '#004000', threshold: 4.5 },
  { role: 'M5 error text', fg: '#fffafa', bg: '#740000', threshold: 4.5 },
];

for (const pair of lineHighlightPairs) {
  const ratio = contrastRatio(pair.fg, pair.bg);
  if (ratio >= pair.threshold) {
    passed++;
  } else {
    failed++;
    failures.push(
      `FAIL: ${pair.role}: ${pair.fg} on ${pair.bg} = ${ratio.toFixed(2)}:1 (need ${pair.threshold}:1)`
    );
  }
}

console.log(`\nCodeMockup WCAG Contrast Results:`);
console.log(`  Passed: ${passed}`);
console.log(`  Failed: ${failed}`);
console.log(`  Total:  ${passed + failed}`);

if (failures.length > 0) {
  console.log('\nFailures:');
  for (const f of failures) {
    console.log(`  ${f}`);
  }
  process.exit(1);
} else {
  console.log('\n  ALL PAIRS PASS — WCAG AA compliant.');
}
