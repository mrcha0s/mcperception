/**
 * WCAG AA Verification for Form & Input Controls
 * Tests all 35 hue×mode combinations (7 hues × 5 modes)
 * for input, textarea, select, label, and validation states.
 *
 * Run: node src/demo/input-wcag-verify.js
 */

const palette = {
  neutral: { 50:"#fafafa",100:"#e1e1e1",200:"#c3c3c3",300:"#a0a0a0",400:"#7f7f7f",500:"#6c6c6c",600:"#515151",700:"#373737",800:"#222222",900:"#090909" },
  red:     { 50:"#fffafa",100:"#ffd8d8",200:"#ffafaf",300:"#ff7474",400:"#ff0000",500:"#da0000",600:"#a70000",700:"#740000",800:"#4d0000",900:"#1c0000" },
  green:   { 50:"#ebffeb",100:"#62ff62",200:"#00e400",300:"#00ba00",400:"#009400",500:"#007f00",600:"#005f00",700:"#004000",800:"#002900",900:"#000c00" },
  blue:    { 50:"#f8f8ff",100:"#dedeff",200:"#bebeff",300:"#9494ff",400:"#6d6dff",500:"#5252ff",600:"#1919ff",700:"#0000bf",800:"#000081",900:"#000035" },
  yellow:  { 50:"#ffff97",100:"#e8e800",200:"#caca00",300:"#a6a600",400:"#838300",500:"#6f6f00",600:"#545400",700:"#383800",800:"#242400",900:"#090900" },
  magenta: { 50:"#fff7ff",100:"#ffd2ff",200:"#ffa4ff",300:"#ff55ff",400:"#e000e0",500:"#c000c0",600:"#910091",700:"#660066",800:"#420042",900:"#170017" },
  teal:    { 50:"#e3ffff",100:"#00f9f9",200:"#00dada",300:"#00b2b2",400:"#008e8e",500:"#007979",600:"#005a5a",700:"#003d3d",800:"#002727",900:"#000b0b" }
};

const WHITE = "#FFFFFF";
const BLACK = "#0A0A0A";

function hexToRGB(hex) {
    hex = hex.replace("#", "");
    return {
        r: parseInt(hex.substring(0, 2), 16) / 255,
        g: parseInt(hex.substring(2, 4), 16) / 255,
        b: parseInt(hex.substring(4, 6), 16) / 255
    };
}

function luminance(hex) {
    const { r, g, b } = hexToRGB(hex);
    const sR = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    const sG = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
    const sB = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
    return 0.2126 * sR + 0.7152 * sG + 0.0722 * sB;
}

function contrastRatio(hex1, hex2) {
    const l1 = luminance(hex1);
    const l2 = luminance(hex2);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
}

const hues = ["neutral", "red", "green", "blue", "yellow", "magenta", "teal"];
let totalChecks = 0;
let passed = 0;
let failed = 0;
const failures = [];

function check(label, fg, bg, threshold) {
    totalChecks++;
    const ratio = contrastRatio(fg, bg);
    if (ratio >= threshold) {
        passed++;
    } else {
        failed++;
        failures.push(`FAIL: ${label} — ${fg} on ${bg} = ${ratio.toFixed(2)}:1 (need ${threshold}:1)`);
    }
}

for (const hue of hues) {
    const h = palette[hue];

    // ── Mode 1 (White surface #FFFFFF) ──
    // Input text: #0A0A0A on white (text ≥4.5)
    check(`${hue} M1 input-text`, BLACK, WHITE, 4.5);
    // Input border: h.400 on white (non-text ≥3.0)
    check(`${hue} M1 input-border`, h[400], WHITE, 3.0);
    // Focus ring: h.500 on white (non-text ≥3.0)
    check(`${hue} M1 focus-ring`, h[500], WHITE, 3.0);
    // Label text: neutral.600 on white (text ≥4.5)
    check(`${hue} M1 label-text`, palette.neutral[600], WHITE, 4.5);
    // Help text: neutral.500 on white (text ≥4.5 — M1 override)
    check(`${hue} M1 help-text`, palette.neutral[500], WHITE, 4.5);
    // Error text: red.500 on white (text ≥4.5)
    check(`${hue} M1 error-text`, palette.red[500], WHITE, 4.5);
    // Success text: green.500 on white (text ≥4.5)
    check(`${hue} M1 success-text`, palette.green[500], WHITE, 4.5);
    // Warning text: yellow.500 on white (text ≥4.5)
    check(`${hue} M1 warning-text`, palette.yellow[500], WHITE, 4.5);
    // Error border: red.500 on white (non-text ≥3.0)
    check(`${hue} M1 error-border`, palette.red[500], WHITE, 3.0);

    // ── Mode 2 (Black surface #0A0A0A) ──
    // Input text: neutral.100 on neutral.900 (text ≥4.5)
    check(`${hue} M2 input-text`, palette.neutral[100], palette.neutral[900], 4.5);
    // Input border: neutral.500 on #0A0A0A (non-text ≥3.0)
    check(`${hue} M2 input-border`, palette.neutral[500], BLACK, 3.0);
    // Focus ring: h.400 on #0A0A0A (non-text ≥3.0)
    check(`${hue} M2 focus-ring`, h[400], BLACK, 3.0);
    // Label text: neutral.300 on #0A0A0A (text ≥4.5)
    check(`${hue} M2 label-text`, palette.neutral[300], BLACK, 4.5);
    // Help text: neutral.400 on #0A0A0A (text ≥4.5 — M2 base)
    check(`${hue} M2 help-text`, palette.neutral[400], BLACK, 4.5);
    // Error text: red.400 on #0A0A0A (text ≥4.5)
    check(`${hue} M2 error-text`, palette.red[400], BLACK, 4.5);
    // Success text: green.400 on #0A0A0A (text ≥4.5)
    check(`${hue} M2 success-text`, palette.green[400], BLACK, 4.5);
    // Warning text: yellow.400 on #0A0A0A (text ≥4.5)
    check(`${hue} M2 warning-text`, palette.yellow[400], BLACK, 4.5);
    // Error border: red.400 on #0A0A0A (non-text ≥3.0)
    check(`${hue} M2 error-border`, palette.red[400], BLACK, 3.0);
    // Select chevron: neutral.300 on neutral.900 (non-text ≥3.0)
    check(`${hue} M2 select-chevron`, palette.neutral[300], palette.neutral[900], 3.0);

    // ── Mode 3 (hue.100 surface) ──
    // Input text: #0A0A0A on white bg (text ≥4.5)
    check(`${hue} M3 input-text`, BLACK, WHITE, 4.5);
    // Input border: h.500 on h.100 (non-text ≥3.0)
    check(`${hue} M3 input-border`, h[500], h[100], 3.0);
    // Focus ring: h.600 on h.100 (non-text ≥3.0)
    check(`${hue} M3 focus-ring`, h[600], h[100], 3.0);
    // Label text: neutral.700 on h.100 (text ≥4.5)
    check(`${hue} M3 label-text`, palette.neutral[700], h[100], 4.5);
    // Help text: neutral.600 on h.100 (text ≥4.5 — M3 override)
    check(`${hue} M3 help-text`, palette.neutral[600], h[100], 4.5);
    // Error text: red.600 on h.100 (text ≥4.5)
    check(`${hue} M3 error-text`, palette.red[600], h[100], 4.5);
    // Success text: green.600 on h.100 (text ≥4.5)
    check(`${hue} M3 success-text`, palette.green[600], h[100], 4.5);
    // Warning text: yellow.600 on h.100 (text ≥4.5)
    check(`${hue} M3 warning-text`, palette.yellow[600], h[100], 4.5);
    // Error border: red.600 on h.100 (non-text ≥3.0)
    check(`${hue} M3 error-border`, palette.red[600], h[100], 3.0);

    // ── Mode 4 (hue.800 surface) ──
    // Input text: neutral.100 on h.900 (text ≥4.5)
    check(`${hue} M4 input-text`, palette.neutral[100], h[900], 4.5);
    // Input border: h.400 on h.800 (non-text ≥3.0)
    check(`${hue} M4 input-border`, h[400], h[800], 3.0);
    // Focus ring: h.300 on h.800 (non-text ≥3.0)
    check(`${hue} M4 focus-ring`, h[300], h[800], 3.0);
    // Label text: neutral.300 on h.800 (text ≥4.5)
    check(`${hue} M4 label-text`, palette.neutral[300], h[800], 4.5);
    // Help text: neutral.300 on h.800 (text ≥4.5 — M4 override)
    check(`${hue} M4 help-text`, palette.neutral[300], h[800], 4.5);
    // Error text: red.300 on h.800 (text ≥4.5)
    check(`${hue} M4 error-text`, palette.red[300], h[800], 4.5);
    // Success text: green.300 on h.800 (text ≥4.5)
    check(`${hue} M4 success-text`, palette.green[300], h[800], 4.5);
    // Warning text: yellow.300 on h.800 (text ≥4.5)
    check(`${hue} M4 warning-text`, palette.yellow[300], h[800], 4.5);
    // Error border: red.300 on h.800 (non-text ≥3.0)
    check(`${hue} M4 error-border`, palette.red[300], h[800], 3.0);

    // ── Mode 5 (hue.500 surface) ──
    // Input text: #FFFFFF on h.600 bg (text ≥4.5)
    check(`${hue} M5 input-text`, WHITE, h[600], 4.5);
    // Input border: h.50 on h.500 (non-text ≥3.0)
    check(`${hue} M5 input-border`, h[50], h[500], 3.0);
    // Focus ring: #FFFFFF on h.500 (non-text ≥3.0)
    check(`${hue} M5 focus-ring`, WHITE, h[500], 3.0);
    // Label text: neutral.50 on h.500 (text ≥4.5)
    check(`${hue} M5 label-text`, palette.neutral[50], h[500], 4.5);
    // Help text: neutral.50 on h.500 (text ≥4.5)
    check(`${hue} M5 help-text`, palette.neutral[50], h[500], 4.5);
    // Error text: #FFFFFF on h.500 (text ≥4.5)
    check(`${hue} M5 error-text`, WHITE, h[500], 4.5);
    // Success text: #FFFFFF on h.500 (text ≥4.5)
    check(`${hue} M5 success-text`, WHITE, h[500], 4.5);
    // Warning text: #FFFFFF on h.500 (text ≥4.5)
    check(`${hue} M5 warning-text`, WHITE, h[500], 4.5);
    // Error border: #FFFFFF on h.500 (non-text ≥3.0)
    check(`${hue} M5 error-border`, WHITE, h[500], 3.0);
}

console.log(`\n═══════════════════════════════════════`);
console.log(`  Form & Input Controls — WCAG AA Results`);
console.log(`═══════════════════════════════════════`);
console.log(`  Total checks: ${totalChecks}`);
console.log(`  Passed:       ${passed}`);
console.log(`  Failed:       ${failed}`);
console.log(`═══════════════════════════════════════\n`);

if (failures.length > 0) {
    console.log("FAILURES:");
    failures.forEach(f => console.log("  " + f));
    console.log("");
}

process.exit(failed > 0 ? 1 : 0);
