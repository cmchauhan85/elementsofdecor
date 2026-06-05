/* ATELIER — PLP / The Shop
   Interactive Element/Object switcher promoted to primary IA. */

const ALL_PRODUCTS = [
  { n: '01', el: 'Stone', cat: 'Urlis & Bowls', title: 'Ruffle Urli', sub: 'Indian marble · 9″', img: 'assets/products/real/ruffle-1.jpg', price: '₹ 6,800', tag: 'New' },
  { n: '02', el: 'Stone', cat: 'Urlis & Bowls', title: 'Lotus Urli', sub: 'Indian marble · 8″', img: 'assets/products/real/lotus-1.jpg', price: '₹ 7,200', tag: 'New' },
  { n: '03', el: 'Metal', cat: 'Lighting', title: '3-Tier Candle Stand', sub: 'Powder-coated iron · Cream', img: 'assets/products/real/candle-3tier-2.jpg', price: '₹ 4,200' },
  { n: '04', el: 'Metal', cat: 'Vases & Vessels', title: 'Aurum Vase', sub: 'Etched antique brass · 10″', img: 'assets/products/real/aurum-1.jpg', price: '₹ 3,800' },
  { n: '05', el: 'Stone', cat: 'Urlis & Bowls', title: 'Flower Urli', sub: 'Indian marble · 10″', img: 'assets/products/real/flower-1.jpg', price: '₹ 5,400' },
  { n: '06', el: 'Metal', cat: 'Vases & Vessels', title: 'Elio Vase, set of 2', sub: 'Steel blue & gold · Lacquered brass', img: 'assets/products/real/elio-2.jpg', price: '₹ 5,600', tag: 'Limited' },
  { n: '07', el: 'Metal', cat: 'Vases & Vessels', title: 'Oria Vase, set of 2', sub: 'Hammered silver finish', img: 'assets/products/real/oria-1.jpg', price: '₹ 4,900' },
  { n: '08', el: 'Stone', cat: 'Urlis & Bowls', title: 'Pebble Urli', sub: 'Indian marble · 6″', img: 'assets/products/real/ruffle-4.jpg', price: '₹ 4,200' },
  { n: '09', el: 'Metal', cat: 'Vases & Vessels', title: 'Aurum Bud Vase', sub: 'Etched brass · 6″', img: 'assets/products/real/aurum-2.jpg', price: '₹ 2,400' },
  { n: '10', el: 'Stone', cat: 'Urlis & Bowls', title: 'Lotus Mini, set of 2', sub: 'Marble · 5″ each', img: 'assets/products/real/lotus-3.jpg', price: '₹ 3,800' },
  { n: '11', el: 'Stone', cat: 'Urlis & Bowls', title: 'Footed Urli', sub: 'Black marble · 7″', img: 'assets/products/real/ruffle-3.jpg', price: '₹ 5,400' },
  { n: '12', el: 'Stone', cat: 'Urlis & Bowls', title: 'Lotus Urli, large', sub: 'Indian marble · 12″', img: 'assets/products/real/lotus-2.jpg', price: '₹ 9,400' },
];

/* Per-mode category chips. First chip is "All". `soon` styles a disabled chip. */
const MODE_CHIPS = {
  element: [
    { k: 'all', label: 'All', count: 11 },
    { k: 'stone', label: 'Stone', count: 7 },
    { k: 'metal', label: 'Metal', count: 4 },
    { k: 'ceramic', label: 'Ceramic', count: '—', soon: true },
    { k: 'wood', label: 'Wood', count: '—', soon: true },
    { k: 'fabric', label: 'Fabric', count: '—', soon: true },
  ],
  object: [
    { k: 'all', label: 'All', count: 11 },
    { k: 'urlis', label: 'Urlis & Bowls', count: 6 },
    { k: 'vases', label: 'Vases & Vessels', count: 4 },
    { k: 'lighting', label: 'Lighting', count: 1 },
    { k: 'trays', label: 'Trays & Stands', count: '—', soon: true },
    { k: 'wall', label: 'Wall & Tabletop', count: '—', soon: true },
  ],
};

/* ──────────────────────── Big switch ──────────────────────── */
function ShopBySwitch({ mode, setMode, size = 'lg' }) {
  const big = size === 'lg';
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: big ? 18 : 12,
      background: A_PAPER, border: `1px solid ${A_INK}15`,
      padding: big ? '8px 10px' : '6px 8px',
      borderRadius: 999, position: 'relative',
    }}>
      <span style={{ ...aCaps, color: A_MUTED, fontSize: big ? 10 : 9, padding: '0 8px 0 14px' }}>
        Shop by
      </span>
      {[['element', 'Element'], ['object', 'Object']].map(([k, label]) => {
        const active = mode === k;
        return (
          <button key={k} onClick={() => setMode(k)} style={{
            ...aDisp, fontSize: big ? 22 : 16, fontWeight: 400,
            fontStyle: active ? 'normal' : 'italic',
            background: active ? A_INK : 'transparent',
            color: active ? A_PAPER : A_MUTED,
            border: 'none', cursor: 'pointer',
            padding: big ? '10px 24px' : '8px 18px',
            borderRadius: 999, letterSpacing: '-0.005em',
            transition: 'all .25s',
            fontFamily: 'Newsreader, serif',
          }}>{label}</button>
        );
      })}
    </div>
  );
}

/* ──────────────────────── Chip rail ──────────────────────── */
function ModeChips({ mode, active, setActive, size = 'lg' }) {
  const big = size === 'lg';
  return (
    <div style={{
      display: 'flex', gap: big ? 8 : 6, flexWrap: big ? 'wrap' : 'nowrap',
      overflowX: big ? 'visible' : 'auto', scrollbarWidth: 'none',
    }}>
      {MODE_CHIPS[mode].map(c => {
        const isActive = active === c.k;
        return (
          <button key={c.k} onClick={() => !c.soon && setActive(c.k)} style={{
            padding: big ? '11px 18px' : '8px 14px', borderRadius: 999,
            border: `1px solid ${isActive ? A_INK : A_INK + '20'}`,
            background: isActive ? A_INK : 'transparent',
            color: isActive ? A_PAPER : (c.soon ? A_MUTED : A_INK),
            ...aCaps, fontSize: big ? 10 : 9,
            cursor: c.soon ? 'default' : 'pointer',
            opacity: c.soon ? .55 : 1, whiteSpace: 'nowrap',
            display: 'inline-flex', alignItems: 'center', gap: 8,
            transition: 'all .2s',
          }}>
            <span>{c.label}</span>
            <span style={{ opacity: .7 }}>· {c.count}{c.soon && ' soon'}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ──────────────────────── DESKTOP PLP ──────────────────────── */
function AtelierPLP() {
  const [mode, setMode] = React.useState('element');
  const [active, setActive] = React.useState('stone');

  // When mode flips, reset to "all" of the new mode
  const onSetMode = (m) => { setMode(m); setActive('all'); };

  // Sidebar shows "the other axis" as secondary filter
  const secondary = mode === 'element' ? 'Category' : 'Element';
  const secondaryItems = mode === 'element'
    ? [['urlis', 'Urlis & Bowls', 14], ['lighting', 'Lighting', 22], ['vases', 'Vases & Vessels', 11], ['trays', 'Trays & Stands', 9], ['wall', 'Wall & Tabletop', 7]]
    : [['stone', 'Stone', 12], ['metal', 'Metal', 18], ['ceramic', 'Ceramic', 9], ['wood', 'Wood', 6, true], ['fabric', 'Fabric', 4, true]];

  const activeChip = MODE_CHIPS[mode].find(c => c.k === active) || MODE_CHIPS[mode][0];

  return (
    <BrowserChrome url="elementsofdecor.in/shop">
      <div style={{ background: A_PAPER, color: A_INK, fontFamily: 'Manrope, sans-serif' }}>
        <AtelierNav />

        {/* Breadcrumb */}
        <div style={{ padding: '20px 60px', borderBottom: `1px solid ${A_INK}10`, ...aCaps, color: A_MUTED, fontSize: 10 }}>
          Home &nbsp;/&nbsp; <span style={{ color: A_INK }}>The Shop</span>
        </div>

        {/* Page head */}
        <div style={{ padding: '48px 60px 24px' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>The Shop</div>
          <div style={{ ...aDisp, fontSize: 64, lineHeight: 1, maxWidth: 980 }}>
            Stone and Metal. <em style={{ fontStyle: 'italic' }}>Eleven pieces, in the room now.</em>
          </div>
        </div>

        {/* Shop By — promoted band */}
        <div style={{
          padding: '24px 60px 28px',
          borderTop: `1px solid ${A_INK}10`, borderBottom: `1px solid ${A_INK}10`,
          background: A_DUST,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <ShopBySwitch mode={mode} setMode={onSetMode} />
            <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 16, color: A_MUTED, lineHeight: 1.4, maxWidth: 320 }}>
              {mode === 'element'
                ? 'By material — the way we make them.'
                : 'By what it is — the familiar way to shop.'}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, ...aCaps, color: A_MUTED, fontSize: 10 }}>
            <span style={{ width: 28, height: 1, background: A_OCHRE }} />
            <span>{mode === 'element' ? 'Five materials' : 'Five categories'}</span>
          </div>
        </div>

        {/* Chip rail */}
        <div style={{ padding: '20px 60px', borderBottom: `1px solid ${A_INK}10`, display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <ModeChips mode={mode} active={active} setActive={setActive} />
          </div>
          <span style={{ ...aCaps, fontSize: 10, color: A_INK, cursor: 'pointer', borderBottom: `1px solid ${A_INK}`, paddingBottom: 2 }}>
            Sort: Newly added ▾
          </span>
        </div>

        {/* Sidebar + Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 60, padding: '48px 60px' }}>
          {/* Filter sidebar */}
          <div>
            <div style={{ ...aCaps, color: A_MUTED, marginBottom: 18, fontSize: 9 }}>Refine</div>

            {/* Secondary axis filter */}
            <div style={{ marginBottom: 36, paddingBottom: 28, borderBottom: `1px solid ${A_INK}10` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
                <div style={{ ...aCaps, color: A_INK, fontSize: 10 }}>{secondary}</div>
                <div style={{ fontSize: 16, color: A_MUTED }}>−</div>
              </div>
              {secondaryItems.map(([k, label, count, soon]) => (
                <label key={k} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, cursor: soon ? 'default' : 'pointer', fontSize: 13, opacity: soon ? .5 : 1 }}>
                  <span style={{ width: 14, height: 14, border: `1px solid ${A_INK}30` }} />
                  <span style={{ flex: 1, color: A_MUTED }}>{label}</span>
                  <span style={{ fontSize: 11, color: A_MUTED }}>{soon ? 'soon' : count}</span>
                </label>
              ))}
            </div>

            {[
              { h: 'Availability', items: [['ready', 'Ready to ship', 28], ['preorder', 'Made to order', 8]] },
              { h: 'Price', items: [['u2', 'Under ₹ 2,000', 12], ['25', '₹ 2,000 – 5,000', 16], ['o5', 'Over ₹ 5,000', 8]] },
            ].map(g => (
              <div key={g.h} style={{ marginBottom: 36, paddingBottom: 28, borderBottom: `1px solid ${A_INK}10` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
                  <div style={{ ...aCaps, color: A_INK, fontSize: 10 }}>{g.h}</div>
                  <div style={{ fontSize: 16, color: A_MUTED }}>−</div>
                </div>
                {g.items.map(([k, label, count]) => (
                  <label key={k} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, cursor: 'pointer', fontSize: 13 }}>
                    <span style={{ width: 14, height: 14, border: `1px solid ${A_INK}30` }} />
                    <span style={{ flex: 1, color: A_MUTED }}>{label}</span>
                    <span style={{ fontSize: 11, color: A_MUTED }}>{count}</span>
                  </label>
                ))}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}>
              <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 24, color: A_INK }}>
                {activeChip.label === 'All'
                  ? (mode === 'element' ? 'All five elements.' : 'All five categories.')
                  : `${activeChip.label}.`}
              </div>
              <div style={{ fontSize: 12, color: A_MUTED }}>Showing 12 of {activeChip.count}</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, rowGap: 56 }}>
              {ALL_PRODUCTS.slice(0, 6).map(p => <ProductCard key={p.n} p={p} />)}

              {/* Editorial slot */}
              <div style={{ gridColumn: 'span 2', background: A_DUST, padding: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'center' }}>
                <div>
                  <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>Field Note</div>
                  <div style={{ ...aDisp, fontSize: 28, lineHeight: 1.15, marginBottom: 14 }}>
                    Where the brass is folded by hand.
                  </div>
                  <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 14, color: A_MUTED, marginBottom: 18 }}>
                    A morning in Moradabad with the craftsmen who make our Lotus and Flowering stands.
                  </div>
                  <div style={{ ...aCaps, color: A_INK, fontSize: 10, borderBottom: `1px solid ${A_INK}`, paddingBottom: 4, display: 'inline-block' }}>
                    Read the note →
                  </div>
                </div>
                <div style={{ aspectRatio: '4/5', background: `url(${R('assets/products/real/candle-3tier-2.jpg')}) center/cover no-repeat` }} />
              </div>
              <div />

              {ALL_PRODUCTS.slice(6).map(p => <ProductCard key={p.n} p={p} />)}
            </div>

            <div style={{ marginTop: 80, paddingTop: 40, borderTop: `1px solid ${A_INK}10`, textAlign: 'center' }}>
              <div style={{ ...aCaps, color: A_MUTED, marginBottom: 16, fontSize: 10 }}>You've seen 12 of {activeChip.count}</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, padding: '14px 30px', background: A_INK, color: A_PAPER, ...aCaps, fontSize: 11, cursor: 'pointer' }}>
                <span>Show the next twelve</span>
                <span>↓</span>
              </div>
            </div>
          </div>
        </div>

        <AtelierFooter />
      </div>
    </BrowserChrome>
  );
}

function ProductCard({ p }) {
  return (
    <div style={{ cursor: 'pointer' }}>
      <div style={{ position: 'relative', aspectRatio: '4/5', background: A_DUST, marginBottom: 18 }}>
        <img src={R(p.img)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 14, left: 14, ...aCaps, color: '#fff', fontSize: 9, mixBlendMode: 'difference' }}>{p.n}</div>
        <div style={{ position: 'absolute', top: 14, right: 14, ...aCaps, color: '#fff', fontSize: 9, mixBlendMode: 'difference' }}>{p.el}</div>
        {p.tag && (
          <div style={{ position: 'absolute', bottom: 14, left: 14, padding: '4px 10px', background: A_PAPER, color: A_INK, ...aCaps, fontSize: 9 }}>{p.tag}</div>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <div style={{ ...aDisp, fontSize: 22, marginBottom: 4 }}>{p.title}</div>
          <div style={{ fontSize: 11, color: A_MUTED, letterSpacing: '.04em' }}>{p.cat} · {p.sub}</div>
        </div>
        <div style={{ fontSize: 13, color: A_INK }}>{p.price}</div>
      </div>
    </div>
  );
}

/* ──────────────────────── MOBILE PLP ──────────────────────── */
function AtelierPLPMobile() {
  const [mode, setMode] = React.useState('element');
  const [active, setActive] = React.useState('all');

  return (
    <MobileFrame height={2500} bg={A_PAPER}>
      <div style={{ height: '100%', overflow: 'hidden', color: A_INK, fontFamily: 'Manrope, sans-serif', fontSize: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px', borderBottom: `1px solid ${A_INK}10` }}>
          <span style={{ fontSize: 18 }}>←</span>
          <div style={{ ...aDisp, fontSize: 17 }}>The Shop</div>
          <span style={{ fontSize: 14 }}>⌕</span>
        </div>

        <div style={{ padding: '22px 22px 16px' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 8, fontSize: 9 }}>The Shop</div>
          <div style={{ ...aDisp, fontSize: 30, lineHeight: 1.04 }}>
            Stone and Metal.<br/><em style={{ fontStyle: 'italic' }}>Eleven pieces, in the room now.</em>
          </div>
        </div>

        {/* Shop By band — full width */}
        <div style={{ padding: '14px 22px 14px', background: A_DUST, borderTop: `1px solid ${A_INK}10`, borderBottom: `1px solid ${A_INK}10` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ ...aCaps, color: A_MUTED, fontSize: 8, paddingRight: 4 }}>Shop by</span>
            {[['element', 'Element'], ['object', 'Object']].map(([k, label]) => {
              const a = mode === k;
              return (
                <button key={k} onClick={() => { setMode(k); setActive('all'); }} style={{
                  ...aDisp, fontSize: 17, fontStyle: a ? 'normal' : 'italic',
                  background: a ? A_INK : 'transparent', color: a ? A_PAPER : A_MUTED,
                  border: 'none', padding: '6px 14px', borderRadius: 999, cursor: 'pointer',
                  fontFamily: 'Newsreader, serif',
                }}>{label}</button>
              );
            })}
          </div>
          <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 12, color: A_MUTED }}>
            {mode === 'element' ? 'By material — the way we make them.' : 'By what it is — the familiar way.'}
          </div>
        </div>

        {/* Chip rail */}
        <div style={{ padding: '12px 22px 12px', borderBottom: `1px solid ${A_INK}10`, overflowX: 'auto', scrollbarWidth: 'none' }}>
          <ModeChips mode={mode} active={active} setActive={setActive} size="sm" />
        </div>

        {/* Filter / Sort row */}
        <div style={{ padding: '10px 22px', display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${A_INK}10`, ...aCaps, fontSize: 10 }}>
          <span>≡ &nbsp; Refine</span>
          <span>↑↓ &nbsp; Sort: New</span>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, padding: '20px 22px' }}>
          {ALL_PRODUCTS.slice(0, 6).map(p => (
            <div key={p.n}>
              <div style={{ position: 'relative', aspectRatio: '4/5', background: A_DUST, marginBottom: 10 }}>
                <img src={R(p.img)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 8, right: 8, ...aCaps, color: '#fff', fontSize: 7, mixBlendMode: 'difference' }}>{p.el}</div>
                {p.tag && <div style={{ position: 'absolute', bottom: 8, left: 8, padding: '3px 7px', background: A_PAPER, ...aCaps, fontSize: 7 }}>{p.tag}</div>}
              </div>
              <div style={{ ...aDisp, fontSize: 15, lineHeight: 1.1, marginBottom: 2 }}>{p.title}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: A_MUTED }}>
                <span>{mode === 'element' ? p.el : p.cat}</span>
                <span style={{ color: A_INK }}>{p.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: A_DUST, padding: '24px 22px', margin: '16px 0' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 10, fontSize: 9 }}>Field Note</div>
          <div style={{ ...aDisp, fontSize: 22, lineHeight: 1.15, marginBottom: 12 }}>Where the brass is folded by hand.</div>
          <div style={{ aspectRatio: '16/9', background: `url(${R('assets/products/real/candle-3tier-2.jpg')}) center/cover no-repeat`, marginBottom: 14 }} />
          <div style={{ ...aCaps, color: A_INK, fontSize: 9, borderBottom: `1px solid ${A_INK}`, paddingBottom: 4, display: 'inline-block' }}>Read the note →</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, padding: '8px 22px 24px' }}>
          {ALL_PRODUCTS.slice(6, 10).map(p => (
            <div key={p.n}>
              <div style={{ position: 'relative', aspectRatio: '4/5', background: A_DUST, marginBottom: 10 }}>
                <img src={R(p.img)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 8, right: 8, ...aCaps, color: '#fff', fontSize: 7, mixBlendMode: 'difference' }}>{p.el}</div>
              </div>
              <div style={{ ...aDisp, fontSize: 15, lineHeight: 1.1 }}>{p.title}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: A_MUTED }}>
                <span>{mode === 'element' ? p.el : p.cat}</span>
                <span style={{ color: A_INK }}>{p.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: '24px 22px 56px', textAlign: 'center', borderTop: `1px solid ${A_INK}10` }}>
          <div style={{ ...aCaps, color: A_MUTED, marginBottom: 12, fontSize: 9 }}>That's the full shop — for now</div>
          <div style={{ display: 'inline-flex', gap: 10, padding: '12px 22px', background: A_INK, color: A_PAPER, ...aCaps, fontSize: 10 }}>
            <span>Show the next twelve</span><span>↓</span>
          </div>
        </div>

      </div>
    </MobileFrame>
  );
}

window.AtelierPLP = AtelierPLP;
window.AtelierPLPMobile = AtelierPLPMobile;
window.ALL_PRODUCTS = ALL_PRODUCTS;
window.ProductCard = ProductCard;
window.ShopBySwitch = ShopBySwitch;
window.ModeChips = ModeChips;
window.MODE_CHIPS = MODE_CHIPS;
