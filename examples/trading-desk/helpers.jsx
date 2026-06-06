/* ═══════════════════════════════════════════════════════════════════
   Trading Desk UI kit — shared icons + helpers
   Inline stroke SVGs (Lucide-style, 1.75 stroke) match MC Perception's
   own iconography approach: the framework ships no icon font/sprite, demos
   draw clean inline SVGs that inherit currentColor. Numbers use Roboto Mono.
   ═══════════════════════════════════════════════════════════════════ */

const Icon = ({ d, size = 18, fill = 'none' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor"
       strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);

const ICONS = {
  grid: ['M3 3h7v7H3z', 'M14 3h7v7h-7z', 'M14 14h7v7h-7z', 'M3 14h7v7H3z'],
  book: ['M4 5h7v14H4z', 'M13 5h7v14h-7z'],
  candles: ['M6 4v4', 'M6 16v4', 'M5 8h2v8H5z', 'M14 6v3', 'M14 17v3', 'M13 9h2v8h-2z'],
  wallet: ['M3 7h18v12H3z', 'M16 12h3', 'M3 7l3-3h12l3 3'],
  list: ['M8 6h13', 'M8 12h13', 'M8 18h13', 'M3 6h.01', 'M3 12h.01', 'M3 18h.01'],
  bell: ['M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9', 'M13.7 21a2 2 0 0 1-3.4 0'],
  gear: ['M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M19 12a7 7 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a7 7 0 0 0-1.7-1l-.3-2.6h-4l-.3 2.6a7 7 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7 7 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 1.7 1l.3 2.6h4l.3-2.6a7 7 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6c.06-.33.1-.66.1-1z'],
  search: ['M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z', 'M21 21l-4.3-4.3'],
  up: ['M12 19V5', 'M5 12l7-7 7 7'],
  down: ['M12 5v14', 'M5 12l7 7 7-7'],
  bolt: ['M13 2L3 14h7l-1 8 10-12h-7l1-8z'],
};

/* Format helpers */
const fmt = (n, dp = 2) =>
  Number(n).toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp });
const pct = (n) => (n >= 0 ? '+' : '') + n.toFixed(2) + '%';

Object.assign(window, { Icon, ICONS, fmt, pct });
