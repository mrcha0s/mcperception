/* Trading Desk — root layout */

function App() {
  const [active, setActive] = React.useState(SYMBOLS[0]);
  const [view, setView] = React.useState('markets');
  return (
    <div className="td-app" data-hue="blue" data-mode="2">
      <Sidebar view={view} setView={setView} />
      <div className="td-main">
        <TopBar active={active} />
        <div className="td-grid">
          <div className="td-area-watch"><Watchlist active={active} setActive={setActive} /></div>
          <div className="td-area-chart"><PriceChart active={active} /></div>
          <div className="td-area-book"><OrderBook active={active} /></div>
          <div className="td-area-ticket"><OrderTicket active={active} /></div>
          <div className="td-area-posit"><Positions /></div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
