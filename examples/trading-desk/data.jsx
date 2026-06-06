/* Mock market data for the Trading Desk kit (static, illustrative). */
const SYMBOLS = [
  { sym: 'BTC-USD', name: 'Bitcoin',  last: 64182.40, chg: 2.18,  vol: '1.28B' },
  { sym: 'ETH-USD', name: 'Ethereum', last: 3471.92,  chg: 1.04,  vol: '842M' },
  { sym: 'SOL-USD', name: 'Solana',   last: 147.65,   chg: -0.87, vol: '391M' },
  { sym: 'XRP-USD', name: 'Ripple',   last: 0.6231,   chg: -3.42, vol: '210M' },
  { sym: 'AVAX-USD',name: 'Avalanche',last: 38.14,    chg: 4.61,  vol: '96M' },
  { sym: 'LINK-USD',name: 'Chainlink',last: 17.83,    chg: 0.42,  vol: '88M' },
];

const ASKS = [
  [64210.5, 0.842], [64205.0, 1.204], [64200.5, 0.318], [64196.0, 2.051],
  [64191.5, 0.677], [64187.0, 1.430], [64184.5, 0.205],
];
const BIDS = [
  [64180.0, 0.512], [64176.5, 1.880], [64172.0, 0.640], [64168.5, 3.102],
  [64164.0, 0.221], [64159.5, 1.044], [64155.0, 0.733],
];

const POSITIONS = [
  { sym: 'BTC-USD', side: 'long',  size: 0.75,  entry: 61240.0, mark: 64182.4, pnl: 2206.8,  pnlPct: 4.80 },
  { sym: 'ETH-USD', side: 'long',  size: 4.20,  entry: 3510.0,  mark: 3471.9,  pnl: -160.0,  pnlPct: -1.08 },
  { sym: 'SOL-USD', side: 'short', size: 30.0,  entry: 151.20,  mark: 147.65,  pnl: 106.5,   pnlPct: 2.35 },
  { sym: 'AVAX-USD',side: 'long',  size: 120.0, entry: 35.80,   mark: 38.14,   pnl: 280.8,   pnlPct: 6.54 },
];

/* A smooth-ish price series for the chart (close values). */
const SERIES = [
  63100,63240,63180,63420,63380,63610,63520,63780,63700,63950,63880,64120,
  64010,63870,63990,64180,64090,64320,64210,64080,64260,64150,64340,64182,
];

Object.assign(window, { SYMBOLS, ASKS, BIDS, POSITIONS, SERIES });
