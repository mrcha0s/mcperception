// WCAG Contrast Audit for mc-table component
// Verifies all 7 hues x 5 modes color pairings

function sRGBtoLinear(c) {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}
function luminance(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return 0.2126 * sRGBtoLinear(r) + 0.7152 * sRGBtoLinear(g) + 0.0722 * sRGBtoLinear(b);
}
function contrastRatio(fg, bg) {
  const L1 = luminance(fg), L2 = luminance(bg);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}

const W = '#FFFFFF';
const B = '#0A0A0A';

const PALETTE = {
  neutral: { 50:'#fafafa',100:'#e1e1e1',200:'#c3c3c3',300:'#a0a0a0',400:'#7f7f7f',500:'#6c6c6c',600:'#515151',700:'#373737',800:'#222222',900:'#090909' },
  red:     { 50:'#fffafa',100:'#ffd8d8',200:'#ffafaf',300:'#ff7474',400:'#ff0000',500:'#da0000',600:'#a70000',700:'#740000',800:'#4d0000',900:'#1c0000' },
  green:   { 50:'#ebffeb',100:'#62ff62',200:'#00e400',300:'#00ba00',400:'#009400',500:'#007f00',600:'#005f00',700:'#004000',800:'#002900',900:'#000c00' },
  blue:    { 50:'#f8f8ff',100:'#dedeff',200:'#bebeff',300:'#9494ff',400:'#6d6dff',500:'#5252ff',600:'#1919ff',700:'#0000bf',800:'#000081',900:'#000035' },
  yellow:  { 50:'#ffff97',100:'#e8e800',200:'#caca00',300:'#a6a600',400:'#838300',500:'#6f6f00',600:'#545400',700:'#383800',800:'#242400',900:'#090900' },
  magenta: { 50:'#fff7ff',100:'#ffd2ff',200:'#ffa4ff',300:'#ff55ff',400:'#e000e0',500:'#c000c0',600:'#910091',700:'#660066',800:'#420042',900:'#170017' },
  teal:    { 50:'#e3ffff',100:'#00f9f9',200:'#00dada',300:'#00b2b2',400:'#008e8e',500:'#007979',600:'#005a5a',700:'#003d3d',800:'#002727',900:'#000b0b' }
};

const hueNames = Object.keys(PALETTE);
let issues = [];
let passes = 0;
let total = 0;

function check(label, fg, bg, threshold) {
  const cr = contrastRatio(fg, bg);
  total++;
  if (cr >= threshold) { passes++; }
  else { issues.push(label + ': ' + fg + ' on ' + bg + ' = ' + cr.toFixed(2) + ':1 (need ' + threshold + ':1) FAIL'); }
}

for (const hueName of hueNames) {
  const P = PALETTE[hueName];

  // M2 default (black surface)
  // FIX: th border uses --tbl-400 instead of --tbl-500 for better contrast on hue.800 header bg
  check('M2 '+hueName+' body text', '#e1e1e1', B, 4.5);
  check('M2 '+hueName+' th text/bg', P[300], P[800], 4.5);
  check('M2 '+hueName+' td border', P[500], B, 3.0);
  check('M2 '+hueName+' th border on th', P[400], P[800], 3.0);  // FIXED: was P[500], now P[400]
  check('M2 '+hueName+' text on striped', '#e1e1e1', P[900], 4.5);
  check('M2 '+hueName+' text on hover', '#e1e1e1', P[800], 4.5);
  check('M2 '+hueName+' caption', P[400], B, 4.5);

  // M1 (white surface)
  check('M1 '+hueName+' body text', B, W, 4.5);
  check('M1 '+hueName+' th text/bg', P[800], P[100], 4.5);
  check('M1 '+hueName+' td border', P[400], W, 3.0);
  check('M1 '+hueName+' text on striped', B, P[50], 4.5);
  check('M1 '+hueName+' caption', P[500], W, 4.5);
  check('M1 '+hueName+' bordered', P[500], W, 3.0);

  // M3 (light hue surface)
  check('M3 '+hueName+' body text', B, P[100], 4.5);
  check('M3 '+hueName+' th text/bg', P[800], P[200], 4.5);
  check('M3 '+hueName+' td border', P[400], P[100], 3.0);
  check('M3 '+hueName+' text on striped', B, P[50], 4.5);
  check('M3 '+hueName+' text on hover', B, P[200], 4.5);
  check('M3 '+hueName+' caption', P[600], P[100], 4.5);
  check('M3 '+hueName+' bordered', P[500], P[100], 3.0);

  // M4 (dark hue surface)
  check('M4 '+hueName+' body text', W, P[800], 4.5);
  check('M4 '+hueName+' th text/bg', P[300], P[900], 4.5);
  check('M4 '+hueName+' td border', P[400], P[800], 3.0);
  check('M4 '+hueName+' text on hover', W, P[700], 4.5);
  check('M4 '+hueName+' text on striped', W, P[900], 4.5);
  check('M4 '+hueName+' tfoot border', P[300], P[900], 3.0);
  check('M4 '+hueName+' caption', P[400], P[800], 3.0);
  check('M4 '+hueName+' bordered', P[300], P[800], 3.0);

  // M5 (mid hue surface)
  check('M5 '+hueName+' body text', W, P[500], 4.5);
  check('M5 '+hueName+' th text', W, P[600], 4.5);
  check('M5 '+hueName+' td border', B, P[500], 3.0);
  check('M5 '+hueName+' text on striped', W, P[600], 4.5);
  check('M5 '+hueName+' caption', P[50], P[500], 4.5);
  check('M5 '+hueName+' bordered', B, P[500], 3.0);
}

console.log('=== WCAG Contrast Audit Results (FIXED) ===');
console.log(passes + '/' + total + ' pairs passed');
console.log('');
if (issues.length) {
  console.log('FAILURES (' + issues.length + '):');
  issues.forEach(i => console.log('  - ' + i));
} else {
  console.log('All pairs passed! Zero failures.');
}
