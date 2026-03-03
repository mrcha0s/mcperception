#!/usr/bin/env node
/**
 * SessionStart Hook: Project Status Injector
 *
 * Scans src/components/ and reports which components exist
 * and which deliverables are present (.tsx, .test.ts, .demo.html, README.md).
 * Claude sees this as additionalContext before the user types anything.
 */

const fs = require('fs');
const path = require('path');

function main() {
  const componentsDir = path.resolve('src/components');
  const rows = [];

  try {
    if (fs.existsSync(componentsDir)) {
      const dirs = fs.readdirSync(componentsDir).filter(d =>
        fs.statSync(path.join(componentsDir, d)).isDirectory()
      );

      for (const dir of dirs) {
        const files = fs.readdirSync(path.join(componentsDir, dir));
        rows.push({
          name: dir,
          tsx: files.some(f => f.endsWith('.tsx')) ? '✅' : '❌',
          test: files.some(f => f.includes('.test.')) ? '✅' : '❌',
          demo: files.some(f => f.includes('.demo.')) ? '✅' : '❌',
          readme: files.includes('README.md') ? '✅' : '❌',
        });
      }
    }
  } catch (e) {
    // Silently fail — don't block session start
  }

  let ctx = '## Perception Bootstrap — Component Status\n\n';

  if (rows.length === 0) {
    ctx += 'No components built yet.\n';
    ctx += 'Start with: `/build-component button`\n';
    ctx += 'Or build all: `/build-all`\n';
  } else {
    ctx += `${rows.length} component(s) found:\n\n`;
    ctx += '| Component | .tsx | .test | .demo | README |\n';
    ctx += '|-----------|------|-------|-------|--------|\n';
    for (const r of rows) {
      ctx += `| ${r.name} | ${r.tsx} | ${r.test} | ${r.demo} | ${r.readme} |\n`;
    }

    const complete = rows.filter(r =>
      r.tsx === '✅' && r.test === '✅' && r.demo === '✅' && r.readme === '✅'
    ).length;
    const incomplete = rows.length - complete;

    ctx += `\n${complete} complete, ${incomplete} incomplete.\n`;
    if (incomplete > 0) {
      ctx += 'Run `/verify-component {name}` on incomplete components.\n';
    }
  }

  // Output as additionalContext
  process.stdout.write(JSON.stringify({ additionalContext: ctx }));
}

main();