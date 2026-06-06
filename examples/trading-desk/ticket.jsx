/* Order ticket — place a (simulated) order */

function OrderTicket({ active }) {
  const [side, setSide] = React.useState('buy');
  const [type, setType] = React.useState('limit');
  const [qty, setQty] = React.useState('0.50');
  const [price, setPrice] = React.useState(active.last.toFixed(2));
  const [lev, setLev] = React.useState('3');
  const [reduce, setReduce] = React.useState(false);
  const [toast, setToast] = React.useState(null);

  React.useEffect(() => { setPrice(active.last.toFixed(2)); }, [active.sym]);

  const notional = (parseFloat(qty || 0) * parseFloat(price || 0)) || 0;
  const buy = side === 'buy';

  const submit = () => {
    setToast({ side, qty, sym: active.sym });
    setTimeout(() => setToast(null), 2600);
  };

  return (
    <div className="mc-panel td-fill td-ticket" data-hue={buy ? 'green' : 'red'}>
      <div className="td-ticket-side">
        <button className={'td-side-btn buy' + (buy ? ' on' : '')} onClick={() => setSide('buy')}>Buy / Long</button>
        <button className={'td-side-btn sell' + (!buy ? ' on' : '')} onClick={() => setSide('sell')}>Sell / Short</button>
      </div>

      <div className="td-field">
        <span className="mc-label">Order type</span>
        <select className="mc-select mc-select-sm" data-hue="neutral" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="market">Market</option>
          <option value="limit">Limit</option>
          <option value="stop">Stop</option>
        </select>
      </div>

      <div className="td-field-row">
        <div className="td-field">
          <span className="mc-label">Quantity</span>
          <input className="mc-input mc-input-sm mc-input-mono" data-hue="neutral" value={qty} onChange={(e) => setQty(e.target.value)} />
        </div>
        <div className="td-field">
          <span className="mc-label">Limit price</span>
          <input className="mc-input mc-input-sm mc-input-mono" data-hue="neutral" value={price}
            disabled={type === 'market'} onChange={(e) => setPrice(e.target.value)} />
        </div>
      </div>

      <div className="td-field">
        <span className="mc-label">Leverage · {lev}×</span>
        <div className="mc-button-group">
          {['1','2','3','5','10'].map((l) => (
            <button key={l} className={'mc-button mc-button-sm ' + (l === lev ? 'mc-button-filled' : 'mc-button-outline')}
              data-hue="neutral" onClick={() => setLev(l)}>{l}×</button>
          ))}
        </div>
      </div>

      <label className="td-reduce">
        <input type="checkbox" className="mc-checkbox mc-checkbox-sm" data-hue="neutral"
          checked={reduce} onChange={(e) => setReduce(e.target.checked)} />
        Reduce-only order
      </label>

      <div className="td-summary">
        <div className="td-summary-row"><span>Order value</span><span className="td-mono">${fmt(notional)}</span></div>
        <div className="td-summary-row"><span>Est. margin</span><span className="td-mono">${fmt(notional / parseFloat(lev))}</span></div>
        <div className="td-summary-row"><span>Fees (0.04%)</span><span className="td-mono">${fmt(notional * 0.0004)}</span></div>
      </div>

      <button className={'mc-button ' + (buy ? '' : '') + ' td-submit'} data-hue={buy ? 'green' : 'red'} onClick={submit}
        style={{ background: buy ? 'var(--color-p-green-500)' : 'var(--color-p-red-500)', color: '#fff', borderColor: buy ? 'var(--color-p-green-500)' : 'var(--color-p-red-500)' }}>
        {buy ? 'Buy' : 'Sell'} {qty} {active.sym.split('-')[0]}
      </button>

      {toast ? (
        <div className="mc-alert td-toast" data-hue={toast.side === 'buy' ? 'green' : 'red'} role="status">
          <div className="mc-alert-content">
            <div className="mc-alert-heading">Order submitted</div>
            {toast.side === 'buy' ? 'Bought' : 'Sold'} {toast.qty} {toast.sym} — routed to exchange.
          </div>
        </div>
      ) : null}
    </div>
  );
}

Object.assign(window, { OrderTicket });
