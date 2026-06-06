/* Data panels: Watchlist · PriceChart · OrderBook · Positions */

function Watchlist({ active, setActive }) {
  return (
    <div className="mc-panel td-fill" data-hue="blue">
      <div className="mc-panel-header"><span className="mc-panel-title">Watchlist</span>
        <span className="mc-badge mc-badge-subtle mc-badge-xs" data-hue="neutral">6</span></div>
      <div className="td-watch">
        {SYMBOLS.map((s) => (
          <button key={s.sym}
            className={'td-watch-row' + (s.sym === active.sym ? ' is-active' : '')}
            onClick={() => setActive(s)}>
            <div className="td-watch-id">
              <div className="td-watch-sym">{s.sym}</div>
              <div className="td-watch-name">{s.name}</div>
            </div>
            <div className="td-watch-px">
              <div className="td-watch-last">{fmt(s.last, s.last < 1 ? 4 : 2)}</div>
              <div className={'td-watch-chg ' + (s.chg >= 0 ? 'pos' : 'neg')}>{pct(s.chg)}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function PriceChart({ active }) {
  const W = 560, H = 240, pad = 8;
  const lo = Math.min(...SERIES), hi = Math.max(...SERIES);
  const x = (i) => pad + (i / (SERIES.length - 1)) * (W - pad * 2);
  const y = (v) => pad + (1 - (v - lo) / (hi - lo)) * (H - pad * 2);
  const line = SERIES.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  const area = `${line} L${x(SERIES.length - 1).toFixed(1)} ${H - pad} L${x(0).toFixed(1)} ${H - pad} Z`;
  const up = active.chg >= 0;
  const stroke = up ? 'var(--color-p-green-300)' : 'var(--color-p-red-300)';
  const fill = up ? 'var(--color-p-green-800)' : 'var(--color-p-red-800)';
  const ranges = ['1H','4H','1D','1W','1M'];
  const [r, setR] = React.useState('1D');
  return (
    <div className="mc-panel td-fill" data-hue="blue">
      <div className="mc-panel-header">
        <span className="mc-panel-title">{active.sym} · Price</span>
        <div className="mc-button-toggle">
          {ranges.map((rr) => (
            <button key={rr} className={'mc-button mc-button-sm' + (rr === r ? ' active' : '')}
              data-hue="blue" onClick={() => setR(rr)}>{rr}</button>
          ))}
        </div>
      </div>
      <div className="td-chart">
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="td-chart-svg">
          {[0.25, 0.5, 0.75].map((g) => (
            <line key={g} x1="0" x2={W} y1={pad + g * (H - pad * 2)} y2={pad + g * (H - pad * 2)}
              stroke="var(--color-p-neutral-800)" strokeWidth="1" />
          ))}
          <path d={area} fill={fill} opacity="0.35" />
          <path d={line} fill="none" stroke={stroke} strokeWidth="2"
            vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
        </svg>
        <div className="td-chart-last" style={{ top: 0 }}>
          <span className="mc-badge mc-badge-filled mc-badge-xs" data-hue={up ? 'green' : 'red'}>{fmt(active.last)}</span>
        </div>
      </div>
    </div>
  );
}

function OrderBook({ active }) {
  const maxSz = Math.max(...ASKS.map((a) => a[1]), ...BIDS.map((b) => b[1]));
  const Row = ({ px, sz, side }) => (
    <div className="td-ob-row">
      <div className={'td-ob-depth ' + side} style={{ width: `${(sz / maxSz) * 100}%` }} />
      <span className={'td-ob-px ' + (side === 'ask' ? 'neg' : 'pos')}>{fmt(px)}</span>
      <span className="td-ob-sz">{fmt(sz, 3)}</span>
    </div>
  );
  return (
    <div className="mc-panel td-fill" data-hue="blue">
      <div className="mc-panel-header"><span className="mc-panel-title">Order book</span>
        <span className="mc-badge mc-badge-subtle mc-badge-xs" data-hue="green">Live</span></div>
      <div className="td-ob-head"><span>Price</span><span>Size</span></div>
      <div className="td-ob">
        {ASKS.map((a, i) => <Row key={'a' + i} px={a[0]} sz={a[1]} side="ask" />)}
        <div className="td-ob-spread">
          <span className="pos">{fmt(active.last)}</span>
          <span className="td-ob-spread-tag">spread 0.5</span>
        </div>
        {BIDS.map((b, i) => <Row key={'b' + i} px={b[0]} sz={b[1]} side="bid" />)}
      </div>
    </div>
  );
}

function Positions() {
  return (
    <div className="mc-panel td-fill" data-hue="blue">
      <div className="mc-panel-header"><span className="mc-panel-title">Open positions</span>
        <span className="mc-badge mc-badge-subtle mc-badge-xs" data-hue="neutral">{POSITIONS.length}</span></div>
      <table className="mc-table td-table" data-hue="blue">
        <thead><tr><th>Symbol</th><th>Side</th><th className="r">Size</th><th className="r">Entry</th><th className="r">Mark</th><th className="r">P&amp;L</th></tr></thead>
        <tbody>
          {POSITIONS.map((p) => (
            <tr key={p.sym}>
              <td className="td-mono td-strong">{p.sym}</td>
              <td><span className={'mc-badge mc-badge-subtle mc-badge-xs'} data-hue={p.side === 'long' ? 'green' : 'red'}>{p.side}</span></td>
              <td className="r td-mono">{fmt(p.size, 2)}</td>
              <td className="r td-mono">{fmt(p.entry)}</td>
              <td className="r td-mono">{fmt(p.mark)}</td>
              <td className={'r td-mono ' + (p.pnl >= 0 ? 'pos' : 'neg')}>
                {(p.pnl >= 0 ? '+' : '') + fmt(p.pnl)} <span className="td-dim">({pct(p.pnlPct)})</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Object.assign(window, { Watchlist, PriceChart, OrderBook, Positions });
