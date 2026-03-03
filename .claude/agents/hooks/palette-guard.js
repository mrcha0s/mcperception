#!/usr/bin/env node
/**
 * PostToolUse Hook: Palette Guard
 * 
 * Runs after every Write/Edit/MultiEdit in Claude Code.
 * Greps the modified file for hex colors (#XXXXXX).
 * If any hex is NOT in the Perception palette, blocks the edit (exit 2).
 * 
 * Only checks files under src/components/ and demo/ to avoid
 * false positives on config files, tokens, etc.
 */

const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════════
// COMPLETE PERCEPTION PALETTE — every permitted hex (uppercase)
// Source: skill-palette.md
// ═══════════════════════════════════════════════════════════════
const PALETTE = new Set([
  // Special
  '#FFFFFF', '#0A0A0A',
  // Neutral
  '#FAFAFA', '#E1E1E1', '#C3C3C3', '#A0A0A0', '#7F7F7F',
  '#6C6C6C', '#515151', '#373737', '#222222', '#090909',
  // Red
  '#FFFAFA', '#FFD8D8', '#FFAFAF', '#FF7474', '#FF0000',
  '#DA0000', '#A70000', '#740000', '#4D0000', '#1C0000',
  // Green
  '#EBFFEB', '#62FF62', '#00E400', '#00BA00', '#009400',
  '#007F00', '#005F00', '#004000', '#002900', '#000C00',
  // Blue
  '#EBEBFF', '#9494FF', '#6D6DFF', '#5252FF', '#1919FF',
  '#0000FF', '#0000BF', '#000080', '#000035', '#000010',
  // Yellow
  '#FFFAEB', '#FFE562', '#FFDA00', '#D4B600', '#AA9200',
  '#917D00', '#6D5E00', '#493F00', '#2B2500', '#0D0B00',
  // Magenta
  '#FFEBFF', '#FF62FF', '#FF00FF', '#D400D4', '#AA00AA',
  '#9100A0', '#6D0078', '#490050', '#2B002E', '#0D000D',
  // Teal
  '#EBFFFF', '#62FFFF', '#00E4E4', '#00BABA', '#009494',
  '#007F7F', '#005F5F', '#004040', '#002929', '#000C0C',
]);

// File extensions to check
const CHECK_EXTENSIONS = new Set(['.tsx', '.ts', '.jsx', '.js', '.css', '.html', '.scss', '.razor']);

// Directories to check (only component and demo files)
const CHECK_PATHS = ['components', 'demo'];

async function main() {
  // Read hook event from stdin
  let input = '';
  for await (const chunk of process.stdin) input += chunk;

  let event;
  try {
    event = JSON.parse(input);
  } catch {
    process.exit(0); // Can't parse, don't block
  }

  // Extract the file path from the tool event
  const filePath =
    event?.tool_result?.filePath ||
    event?.tool_input?.file_path ||
    event?.tool_input?.path ||
    '';

  if (!filePath) process.exit(0);

  // Only check relevant extensions
  const ext = path.extname(filePath).toLowerCase();
  if (!CHECK_EXTENSIONS.has(ext)) process.exit(0);

  // Only check component and demo directories
  const normalizedPath = filePath.replace(/\\/g, '/');
  const inScope = CHECK_PATHS.some(p => normalizedPath.includes(p));
  if (!inScope) process.exit(0);

  // Read the file and check for hex colors
  let content;
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch {
    process.exit(0); // Can't read, don't block
  }

  const hexRegex = /#[0-9a-fA-F]{6}\b/g;
  const violations = [];
  let match;

  while ((match = hexRegex.exec(content)) !== null) {
    const hex = match[0].toUpperCase();
    if (!PALETTE.has(hex)) {
      const lineNum = content.substring(0, match.index).split('\n').length;
      violations.push({ line: lineNum, hex: match[0], hexUpper: hex });
    }
  }

  if (violations.length > 0) {
    const lines = violations.map(v =>
      `  Line ${v.line}: ${v.hex} — NOT in palette`
    );
    const msg = [
      `⛔ PALETTE VIOLATION in ${path.basename(filePath)}`,
      ``,
      ...lines,
      ``,
      `Only colors from skill-palette.md are permitted.`,
      `Use #0A0A0A for black (not #000000).`,
      `Fix these colors and try again.`
    ].join('\n');

    // Output block signal
    process.stdout.write(JSON.stringify({
      result: 'block',
      reason: msg
    }));
    process.exit(2); // Exit 2 = block the tool use
  }

  // All hex values are valid palette colors
  process.exit(0);
}

main().catch(() => process.exit(0));