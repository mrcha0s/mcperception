/**
 * Stat — WCAG AA Contrast Verification
 *
 * Tests all 7 hues x 5 modes x key contrast pairs.
 * Every pair must meet:
 *   - Small text: >= 4.5:1
 *   - Non-text UI (borders, dividers): >= 3.0:1
 *
 * ZERO failures required.
 */

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

// Stat color roles per mode:
// M2 (base): title=st-50, value=#FFF, desc=st-400, figure=st-400, border=st-400 on #0A0A0A
// M1: title=#0A0A0A, value=st-900, desc=st-500, figure=st-500, border=st-400 on #FFF
// M3: title=#0A0A0A, value=st-900, desc=st-600, figure=st-600, border=st-500 on st-100
// M4: title=st-50, value=#FFF, desc=st-300, figure=st-300, border=st-400 on st-800
// M5: title=st-50, value=#FFF, desc=st-50, figure=st-50, border=#0A0A0A on st-500

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
        { role: 'title on surface', fg: BLACK, bg: WHITE, threshold: 4.5 },
        { role: 'value on surface', fg: P['900'], bg: WHITE, threshold: 4.5 },
        { role: 'desc on surface', fg: P['500'], bg: WHITE, threshold: 4.5 },
        { role: 'figure on surface', fg: P['500'], bg: WHITE, threshold: 3.0 },
        { role: 'border on surface', fg: P['400'], bg: WHITE, threshold: 3.0 },
      ];
    case 2:
      return [
        { role: 'title on surface', fg: P['50'], bg: BLACK, threshold: 4.5 },
        { role: 'value on surface', fg: WHITE, bg: BLACK, threshold: 4.5 },
        { role: 'desc on surface', fg: P['400'], bg: BLACK, threshold: 4.5 },
        { role: 'figure on surface', fg: P['400'], bg: BLACK, threshold: 3.0 },
        { role: 'border on surface', fg: P['400'], bg: BLACK, threshold: 3.0 },
      ];
    case 3:
      return [
        { role: 'title on surface', fg: BLACK, bg: P['100'], threshold: 4.5 },
        { role: 'value on surface', fg: P['900'], bg: P['100'], threshold: 4.5 },
        { role: 'desc on surface', fg: P['600'], bg: P['100'], threshold: 4.5 },
        { role: 'figure on surface', fg: P['600'], bg: P['100'], threshold: 3.0 },
        { role: 'border on surface', fg: P['500'], bg: P['100'], threshold: 3.0 },
      ];
    case 4:
      return [
        { role: 'title on surface', fg: P['50'], bg: P['800'], threshold: 4.5 },
        { role: 'value on surface', fg: WHITE, bg: P['800'], threshold: 4.5 },
        { role: 'desc on surface', fg: P['300'], bg: P['800'], threshold: 4.5 },
        { role: 'figure on surface', fg: P['300'], bg: P['800'], threshold: 3.0 },
        { role: 'border on surface', fg: P['400'], bg: P['800'], threshold: 3.0 },
      ];
    case 5:
      return [
        { role: 'title on surface', fg: P['50'], bg: P['500'], threshold: 4.5 },
        { role: 'value on surface', fg: WHITE, bg: P['500'], threshold: 4.5 },
        { role: 'desc on surface', fg: P['50'], bg: P['500'], threshold: 4.5 },
        { role: 'figure on surface', fg: P['50'], bg: P['500'], threshold: 3.0 },
        { role: 'border on surface', fg: BLACK, bg: P['500'], threshold: 3.0 },
      ];
    default:
      return [];
  }
}

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

console.log(`\nStat WCAG Contrast Results:`);
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
