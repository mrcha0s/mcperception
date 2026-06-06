/* Chrome: Sidebar + TopBar */

function Sidebar({ view, setView }) {
  const nav = [
    { id: 'markets',   label: 'Markets',   icon: ICONS.grid },
    { id: 'orderbook', label: 'Order book',icon: ICONS.book },
    { id: 'charts',    label: 'Charts',    icon: ICONS.candles },
    { id: 'portfolio', label: 'Portfolio', icon: ICONS.wallet },
    { id: 'orders',    label: 'Orders',    icon: ICONS.list },
  ];
  return (
    <nav className="td-sidebar">
      <div className="td-brand">
        <div className="td-monogram">MC</div>
        <div className="td-brand-text">
          <div className="td-brand-name">Perception</div>
          <div className="td-brand-sub">Trading Desk</div>
        </div>
      </div>
      <div className="td-nav">
        {nav.map((n) => (
          <button key={n.id}
            className={'td-nav-link' + (view === n.id ? ' is-active' : '')}
            onClick={() => setView(n.id)}>
            <span className="td-nav-icon"><Icon d={n.icon} size={18} /></span>
            {n.label}
          </button>
        ))}
      </div>
      <div className="td-nav td-nav-foot">
        <button className="td-nav-link"><span className="td-nav-icon"><Icon d={ICONS.bell} size={18} /></span>Alerts</button>
        <button className="td-nav-link"><span className="td-nav-icon"><Icon d={ICONS.gear} size={18} /></span>Settings</button>
      </div>
    </nav>
  );
}

function TopBar({ active }) {
  return (
    <header className="td-topbar">
      <div className="td-symbol">
        <div className="td-symbol-name">{active.sym}</div>
        <div className={'td-symbol-last ' + (active.chg >= 0 ? 'pos' : 'neg')}>
          {fmt(active.last)}
        </div>
        <span className={'mc-badge mc-badge-subtle mc-badge-sm'} data-hue={active.chg >= 0 ? 'green' : 'red'}>
          {pct(active.chg)}
        </span>
      </div>

      <div className="td-search">
        <span className="td-search-icon"><Icon d={ICONS.search} size={15} /></span>
        <input className="mc-input mc-input-sm" placeholder="Search symbol…" />
      </div>

      <div className="td-account">
        <div className="td-account-stat">
          <span className="td-account-label">Equity</span>
          <span className="td-account-value">$1,284,910</span>
        </div>
        <div className="td-account-stat">
          <span className="td-account-label">Buying power</span>
          <span className="td-account-value">$312,500</span>
        </div>
        <button className="mc-button mc-button-filled mc-button-sm" data-hue="blue">
          <span style={{display:'inline-flex',marginRight:6}}><Icon d={ICONS.bolt} size={14} /></span>Deposit
        </button>
        <div className="td-avatar">MA</div>
      </div>
    </header>
  );
}

Object.assign(window, { Sidebar, TopBar });
