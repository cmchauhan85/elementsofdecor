/* ATELIER — Cart / The Bag */

/* ──────────────────────── MILESTONE RIBBON ──────────────────────── */
const MILESTONES = [
  { at: 10000, label: 'Hand-tied muslin wrap', hint: 'On the box, tied with twine.' },
  { at: 15000, label: 'A ceramic dish, our gift', hint: 'Cream stoneware, 4″ — a small thank-you.' },
  { at: 25000, label: 'White-glove installation', hint: 'In Bombay. We come, we place, we leave.' },
];

function MilestoneRibbon({ subtotal }) {
  const max = MILESTONES[MILESTONES.length - 1].at;
  const pct = Math.min(100, (subtotal / max) * 100);
  const earned = MILESTONES.filter(m => subtotal >= m.at);
  const next = MILESTONES.find(m => subtotal < m.at);
  const remaining = next ? next.at - subtotal : 0;

  return (
    <div style={{
      padding: '40px 60px 44px', background: A_DUST,
      borderTop: `1px solid ${A_INK}10`, borderBottom: `1px solid ${A_INK}10`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}>
        <div>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 6 }}>You've earned</div>
          <div style={{ ...aDisp, fontSize: 26, lineHeight: 1.2 }}>
            {earned.length === 0
              ? <>Just one piece more, <em style={{ fontStyle: 'italic' }}>for the muslin wrap.</em></>
              : next
                ? <><em style={{ fontStyle: 'italic' }}>{earned[earned.length - 1].label}</em> &nbsp; — &nbsp; {remaining.toLocaleString('en-IN')} from the {next.label.toLowerCase()}.</>
                : <em style={{ fontStyle: 'italic' }}>All three thank-yous earned.</em>}
          </div>
        </div>
        <div style={{ ...aDisp, fontSize: 30, color: A_INK }}>
          ₹ {subtotal.toLocaleString('en-IN')}
          <span style={{ ...aCaps, color: A_MUTED, fontSize: 10, marginLeft: 12, fontFamily: 'Manrope' }}>of ₹ {max.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* The rail */}
      <div style={{ position: 'relative', height: 56, marginBottom: 24 }}>
        {/* track */}
        <div style={{ position: 'absolute', top: 22, left: 0, right: 0, height: 2, background: A_INK + '15' }} />
        {/* fill */}
        <div style={{
          position: 'absolute', top: 22, left: 0, width: `${pct}%`, height: 2,
          background: A_OCHRE, transition: 'width .3s ease',
        }} />
        {/* start dot */}
        <div style={{
          position: 'absolute', top: 16, left: 0, width: 14, height: 14, borderRadius: '50%',
          background: A_OCHRE, border: `3px solid ${A_DUST}`, boxSizing: 'content-box',
          transform: 'translateX(-7px)',
        }} />

        {/* milestone dots */}
        {MILESTONES.map(m => {
          const x = (m.at / max) * 100;
          const isEarned = subtotal >= m.at;
          return (
            <React.Fragment key={m.at}>
              <div style={{
                position: 'absolute', top: 16, left: `${x}%`, width: 14, height: 14, borderRadius: '50%',
                background: isEarned ? A_OCHRE : A_PAPER,
                border: `2px solid ${isEarned ? A_OCHRE : A_INK + '40'}`,
                transform: 'translateX(-7px)', display: 'grid', placeItems: 'center',
              }}>
                {isEarned && <span style={{ fontSize: 7, color: A_INK, fontWeight: 700 }}>✓</span>}
              </div>
              <div style={{
                position: 'absolute', top: 46, left: `${x}%`, transform: 'translateX(-50%)',
                ...aCaps, fontSize: 9, color: A_MUTED, whiteSpace: 'nowrap',
              }}>
                ₹ {m.at.toLocaleString('en-IN')}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* milestone descriptions */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 36 }}>
        {MILESTONES.map(m => {
          const isEarned = subtotal >= m.at;
          const isNext = !isEarned && next && next.at === m.at;
          return (
            <div key={m.at} style={{
              padding: '20px 22px',
              background: isEarned ? A_PAPER : 'transparent',
              border: isNext ? `1px solid ${A_OCHRE}` : `1px solid ${A_INK}15`,
              opacity: !isEarned && !isNext ? .55 : 1,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <div style={{ ...aCaps, fontSize: 9, color: isEarned ? A_OCHRE : A_MUTED }}>
                  {isEarned ? '✓ Earned' : isNext ? `₹ ${remaining.toLocaleString('en-IN')} to go` : 'Locked'}
                </div>
                <div style={{ ...aCaps, fontSize: 9, color: A_MUTED }}>₹ {m.at.toLocaleString('en-IN')}</div>
              </div>
              <div style={{ ...aDisp, fontSize: 19, lineHeight: 1.2, marginBottom: 6, color: A_INK }}>
                {m.label}
              </div>
              <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 13, color: A_MUTED }}>{m.hint}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AtelierCart() {
  const items = [
    { n: '01', el: 'Stone', title: 'Ruffle Urli', sub: '9″ · Cream marble', img: 'assets/products/real/ruffle-1.jpg', price: 6800, qty: 1, stock: '4 left at this size' },
    { n: '02', el: 'Metal', title: 'Lotus Tealight', sub: 'White powder-coat · Set of 2', img: 'assets/products/real/aurum-1.jpg', price: 1450, qty: 2 },
    { n: '03', el: 'Metal', title: 'Flowering Stand', sub: 'Antique brass · 14″', img: 'assets/products/real/candle-3tier-2.jpg', price: 3200, qty: 1 },
  ];
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const promoCode = 'FIRSTROOM';
  const promoDiscount = Math.round(subtotal * 0.10);
  const total = subtotal - promoDiscount;

  return (
    <BrowserChrome url="elementsofdecor.in/bag">
      <div style={{ background: A_PAPER, color: A_INK, fontFamily: 'Manrope, sans-serif' }}>
        <AtelierNav />

        <div style={{ padding: '40px 60px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end' }}>
          <div>
            <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>The Bag &nbsp;·&nbsp; {items.length} pieces</div>
            <div style={{ ...aDisp, fontSize: 72, lineHeight: 1 }}>
              Your <em style={{ fontStyle: 'italic' }}>quiet collection.</em>
            </div>
          </div>
          <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 18, color: A_MUTED, lineHeight: 1.5, paddingBottom: 12 }}>
            Everything in your bag is held for 30 minutes. We don't oversell —
            small batches mean small windows.
          </div>
        </div>

        {/* MILESTONE RIBBON — promoted, full width */}
        <MilestoneRibbon subtotal={subtotal} />

        {/* Items + summary */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 80, padding: '48px 60px 96px' }}>
          {/* Items */}
          <div>
            {items.map(i => (
              <div key={i.n} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr auto', gap: 28,
                padding: '32px 0', borderTop: `1px solid ${A_INK}15`,
              }}>
                <div style={{
                  aspectRatio: '4/5', background: `url(${R(i.img)}) center/cover no-repeat ${A_DUST}`,
                  position: 'relative',
                }}>
                  <div style={{ position: 'absolute', top: 10, left: 10, ...aCaps, color: '#fff', fontSize: 8, mixBlendMode: 'difference' }}>{i.n}</div>
                </div>
                <div style={{ paddingTop: 6 }}>
                  <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 8, fontSize: 9 }}>{i.el}</div>
                  <div style={{ ...aDisp, fontSize: 30, lineHeight: 1.1, marginBottom: 8 }}>{i.title}</div>
                  <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 14, color: A_MUTED, marginBottom: 12 }}>{i.sub}</div>
                  {i.stock && (
                    <div style={{ ...aCaps, color: A_OCHRE, fontSize: 9, marginBottom: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: A_OCHRE }} />
                      {i.stock}
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginTop: i.stock ? 0 : 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${A_INK}25` }}>
                      <span style={{ width: 32, height: 32, display: 'grid', placeItems: 'center', cursor: 'pointer', color: A_MUTED }}>−</span>
                      <span style={{ width: 36, textAlign: 'center', fontSize: 14, color: A_INK }}>{i.qty}</span>
                      <span style={{ width: 32, height: 32, display: 'grid', placeItems: 'center', cursor: 'pointer', color: A_INK }}>+</span>
                    </div>
                    <span style={{ ...aCaps, color: A_MUTED, fontSize: 10, borderBottom: `1px solid ${A_MUTED}`, paddingBottom: 2, cursor: 'pointer' }}>Save for later</span>
                    <span style={{ ...aCaps, color: A_MUTED, fontSize: 10, cursor: 'pointer' }}>Remove</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right', paddingTop: 6 }}>
                  <div style={{ ...aDisp, fontSize: 22 }}>₹ {(i.price * i.qty).toLocaleString('en-IN')}</div>
                  {i.qty > 1 && <div style={{ fontSize: 11, color: A_MUTED, marginTop: 4 }}>₹ {i.price.toLocaleString('en-IN')} each</div>}
                </div>
              </div>
            ))}

            {/* Gift note */}
            <div style={{ marginTop: 40, padding: '28px', background: A_DUST, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 24 }}>
              <div style={{ width: 56, height: 56, border: `1px solid ${A_OCHRE}`, display: 'grid', placeItems: 'center', ...aDisp, fontSize: 22, color: A_OCHRE, fontStyle: 'italic' }}>♥</div>
              <div>
                <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 8, fontSize: 10 }}>Sending this as a gift?</div>
                <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 17, color: A_INK, marginBottom: 10 }}>
                  We'll write a card by hand, in your words. No prices on the
                  packing slip.
                </div>
                <div style={{ ...aCaps, color: A_INK, fontSize: 10, borderBottom: `1px solid ${A_INK}`, paddingBottom: 3, display: 'inline-block', cursor: 'pointer' }}>
                  Add a note &nbsp; →
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div style={{ position: 'sticky', top: 20, alignSelf: 'start' }}>
            <div style={{ background: A_INK, color: A_PAPER, padding: '40px 32px', position: 'relative', overflow: 'hidden' }}>
              <svg viewBox="0 0 300 300" style={{ position: 'absolute', right: -60, top: -60, width: 240, height: 240, opacity: .2 }}>
                <g fill="none" stroke={A_OCHRE} strokeWidth="1">
                  <circle cx="150" cy="150" r="140" />
                  <circle cx="150" cy="150" r="100" />
                  <circle cx="150" cy="150" r="60" />
                </g>
              </svg>
              <div style={{ position: 'relative' }}>
                <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>Summary</div>
                <div style={{ ...aDisp, fontSize: 32, lineHeight: 1, marginBottom: 24 }}>
                  Three pieces, <em style={{ fontStyle: 'italic', color: '#e8c89a' }}>one bag.</em>
                </div>

                {/* Promo code — applied state */}
                <div style={{ padding: '14px 16px', background: 'rgba(184,138,58,.15)', border: `1px dashed ${A_OCHRE}80`, display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: A_OCHRE, color: A_INK, display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700 }}>✓</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ ...aCaps, color: '#e8c89a', fontSize: 9, marginBottom: 2 }}>Code applied</div>
                    <div style={{ fontSize: 13, color: A_PAPER, fontFamily: 'Newsreader, serif', letterSpacing: '.06em' }}>{promoCode} — first room, 10% off</div>
                  </div>
                  <span style={{ ...aCaps, color: 'rgba(250,247,241,.5)', fontSize: 9, cursor: 'pointer' }}>×</span>
                </div>
                {/* Add another code */}
                <div style={{ marginBottom: 22, ...aCaps, color: 'rgba(250,247,241,.55)', fontSize: 9, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 14 }}>+</span>
                  <span>Have another code? Apply</span>
                </div>

                {/* Line items */}
                <div style={{ paddingTop: 18, borderTop: `1px solid ${A_OCHRE}40` }}>
                  {[
                    ['Subtotal', `₹ ${subtotal.toLocaleString('en-IN')}`],
                    [`Promo · ${promoCode}`, `− ₹ ${promoDiscount.toLocaleString('en-IN')}`, true],
                    ['Shipping', 'Complimentary'],
                    ['Tax', 'Calculated at checkout'],
                  ].map(([k, v, accent], i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontSize: 13, color: 'rgba(250,247,241,.75)' }}>
                      <span>{k}</span><span style={{ color: accent ? '#e8c89a' : A_PAPER }}>{v}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: 18, marginTop: 12, borderTop: `1px solid ${A_OCHRE}40` }}>
                  <span style={{ ...aDisp, fontSize: 22 }}>Total</span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ ...aDisp, fontSize: 30, color: '#e8c89a' }}>₹ {total.toLocaleString('en-IN')}</div>
                    <div style={{ fontSize: 10, color: 'rgba(250,247,241,.5)', marginTop: 4 }}>or EMI from ₹ {Math.round(total / 6).toLocaleString('en-IN')}/mo</div>
                  </div>
                </div>

                {/* Estimated delivery */}
                <div style={{ marginTop: 22, padding: '14px 16px', background: 'rgba(250,247,241,.06)', borderLeft: `2px solid ${A_OCHRE}` }}>
                  <div style={{ ...aCaps, color: '#e8c89a', fontSize: 9, marginBottom: 4 }}>Estimated</div>
                  <div style={{ fontSize: 13, color: A_PAPER, fontFamily: 'Newsreader, serif', lineHeight: 1.5 }}>
                    Ready to dispatch by <b style={{ fontWeight: 500 }}>14 Jun</b>.
                    In your hands by <b style={{ fontWeight: 500 }}>22 Jun</b>.
                  </div>
                </div>

                {/* CTA */}
                <div style={{ marginTop: 28, padding: '18px 24px', background: A_PAPER, color: A_INK, textAlign: 'center', ...aCaps, fontSize: 11, cursor: 'pointer' }}>
                  Proceed to checkout &nbsp; →
                </div>

                {/* Payment methods */}
                <div style={{ marginTop: 18, padding: '14px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
                  <span style={{ ...aCaps, color: 'rgba(250,247,241,.5)', fontSize: 9 }}>Pay with</span>
                  {[
                    { l: 'UPI', font: 'Newsreader, serif', size: 14 },
                    { l: 'VISA', size: 11, weight: 800, ls: '.05em' },
                    { l: 'mc', size: 18, font: 'Newsreader, serif', italic: true },
                    { l: 'AMEX', size: 10, weight: 700, ls: '.06em' },
                    { l: 'EMI', size: 10, weight: 600, ls: '.08em' },
                  ].map(p => (
                    <span key={p.l} style={{
                      padding: '6px 10px', background: 'rgba(250,247,241,.08)',
                      color: 'rgba(250,247,241,.85)', borderRadius: 3,
                      fontFamily: p.font || 'Manrope, sans-serif',
                      fontSize: p.size, fontWeight: p.weight || 500,
                      letterSpacing: p.ls || 0, fontStyle: p.italic ? 'italic' : 'normal',
                    }}>{p.l}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust card */}
            <div style={{ marginTop: 24, padding: '24px', border: `1px solid ${A_OCHRE}40`, background: A_PAPER }}>
              <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 10, fontSize: 10 }}>What happens next</div>
              <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 15, color: A_INK, lineHeight: 1.55, marginBottom: 14 }}>
                Order confirmed. We email you. Six weeks to make. We ship
                white-glove, with a hand-signed card.
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: A_MUTED, letterSpacing: '.05em' }}>
                <span><b style={{ color: A_INK, fontWeight: 600 }}>Lead time</b> &nbsp; 6 wks</span>
                <span><b style={{ color: A_INK, fontWeight: 600 }}>Returns</b> &nbsp; 14 days</span>
                <span><b style={{ color: A_INK, fontWeight: 600 }}>Secure</b> &nbsp; SSL</span>
              </div>
            </div>
          </div>
        </div>

        {/* CONTINUE COLLECTING */}
        <div style={{ background: A_DUST, padding: '96px 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}>
            <div>
              <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>While you're here</div>
              <div style={{ ...aDisp, fontSize: 44, lineHeight: 1.05 }}>Continue collecting.</div>
            </div>
            <div style={{ ...aCaps, color: A_INK, fontSize: 10, borderBottom: `1px solid ${A_INK}`, paddingBottom: 4 }}>The full shop →</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {ALL_PRODUCTS.slice(5, 9).map(p => <ProductCard key={p.n} p={p} />)}
          </div>
        </div>

        <AtelierFooter />
      </div>
    </BrowserChrome>
  );
}

/* ──────────────────────── MOBILE CART ──────────────────────── */
function AtelierCartMobile() {
  const items = [
    { n: '01', el: 'Stone', title: 'Ruffle Urli', sub: '9″ · Cream', img: 'assets/products/real/ruffle-1.jpg', price: 6800, qty: 1, stock: '4 left' },
    { n: '02', el: 'Metal', title: 'Lotus Tealight', sub: 'White · Set of 2', img: 'assets/products/real/aurum-1.jpg', price: 1450, qty: 2 },
  ];
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const promoDiscount = Math.round(subtotal * 0.10);
  const total = subtotal - promoDiscount;
  const next = MILESTONES.find(m => subtotal < m.at);
  const remaining = next ? next.at - subtotal : 0;
  const earned = MILESTONES.filter(m => subtotal >= m.at);
  const max = MILESTONES[MILESTONES.length - 1].at;
  const pct = Math.min(100, (subtotal / max) * 100);

  return (
    <MobileFrame height={2700} bg={A_PAPER}>
      <div style={{ height: '100%', overflow: 'hidden', color: A_INK, fontFamily: 'Manrope, sans-serif', fontSize: 14, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px' }}>
          <span style={{ fontSize: 18 }}>←</span>
          <div style={{ ...aCaps, fontSize: 9 }}>THE BAG · {items.length}</div>
          <span style={{ fontSize: 14 }}>⌕</span>
        </div>

        <div style={{ padding: '20px 22px 22px' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 8, fontSize: 9 }}>The Bag · {items.length} pieces</div>
          <div style={{ ...aDisp, fontSize: 32, lineHeight: 1 }}>Your <em style={{ fontStyle: 'italic' }}>quiet collection.</em></div>
        </div>

        {/* Compact milestone */}
        <div style={{ padding: '18px 22px', background: A_DUST, borderTop: `1px solid ${A_INK}10`, borderBottom: `1px solid ${A_INK}10` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
            <div style={{ ...aCaps, color: A_OCHRE, fontSize: 9 }}>You've earned</div>
            <div style={{ ...aCaps, color: A_MUTED, fontSize: 9 }}>{earned.length}/{MILESTONES.length}</div>
          </div>
          <div style={{ ...aDisp, fontSize: 17, lineHeight: 1.25, marginBottom: 14 }}>
            {next
              ? <><em style={{ fontStyle: 'italic' }}>₹ {remaining.toLocaleString('en-IN')}</em> from a {next.label.toLowerCase()}.</>
              : <em style={{ fontStyle: 'italic' }}>All three thank-yous earned.</em>}
          </div>
          {/* Progress rail */}
          <div style={{ position: 'relative', height: 30, marginBottom: 6 }}>
            <div style={{ position: 'absolute', top: 13, left: 0, right: 0, height: 2, background: A_INK + '15' }} />
            <div style={{ position: 'absolute', top: 13, left: 0, width: `${pct}%`, height: 2, background: A_OCHRE }} />
            <div style={{ position: 'absolute', top: 8, left: 0, width: 12, height: 12, borderRadius: '50%', background: A_OCHRE, border: `2px solid ${A_DUST}`, boxSizing: 'content-box', transform: 'translateX(-6px)' }} />
            {MILESTONES.map(m => {
              const x = (m.at / max) * 100;
              const isEarned = subtotal >= m.at;
              return (
                <div key={m.at} style={{
                  position: 'absolute', top: 8, left: `${x}%`, width: 12, height: 12, borderRadius: '50%',
                  background: isEarned ? A_OCHRE : A_DUST,
                  border: `2px solid ${isEarned ? A_OCHRE : A_INK + '40'}`,
                  transform: 'translateX(-6px)',
                }} />
              );
            })}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', ...aCaps, fontSize: 8, color: A_MUTED }}>
            <span>₹0</span>
            {MILESTONES.map(m => <span key={m.at}>₹{(m.at / 1000)}k</span>)}
          </div>
          <div style={{ marginTop: 12, ...aCaps, fontSize: 8, color: A_OCHRE, cursor: 'pointer', borderBottom: `1px solid ${A_OCHRE}40`, paddingBottom: 2, display: 'inline-block' }}>
            See the three thank-yous →
          </div>
        </div>

        {/* Items */}
        <div style={{ padding: '8px 22px' }}>
          {items.map(i => (
            <div key={i.n} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 18, padding: '18px 0', borderTop: `1px solid ${A_INK}15` }}>
              <div style={{ aspectRatio: '4/5', background: `url(${R(i.img)}) center/cover no-repeat ${A_DUST}` }} />
              <div>
                <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 4, fontSize: 8 }}>{i.el}</div>
                <div style={{ ...aDisp, fontSize: 20, lineHeight: 1.1, marginBottom: 4 }}>{i.title}</div>
                <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 12, color: A_MUTED, marginBottom: 6 }}>{i.sub}</div>
                {i.stock && (
                  <div style={{ ...aCaps, color: A_OCHRE, fontSize: 8, marginBottom: 10, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: A_OCHRE }} />{i.stock}
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${A_INK}25` }}>
                    <span style={{ width: 24, height: 24, display: 'grid', placeItems: 'center', fontSize: 12 }}>−</span>
                    <span style={{ width: 28, textAlign: 'center', fontSize: 12 }}>{i.qty}</span>
                    <span style={{ width: 24, height: 24, display: 'grid', placeItems: 'center', fontSize: 12 }}>+</span>
                  </div>
                  <span style={{ flex: 1, textAlign: 'right', ...aDisp, fontSize: 16 }}>₹ {(i.price * i.qty).toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coupon code field */}
        <div style={{ padding: '14px 22px 4px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', padding: '12px 14px',
            background: 'rgba(184,138,58,.08)', border: `1px dashed ${A_OCHRE}80`,
          }}>
            <span style={{ width: 20, height: 20, borderRadius: '50%', background: A_OCHRE, color: A_INK, display: 'grid', placeItems: 'center', fontSize: 10, fontWeight: 700, marginRight: 10 }}>✓</span>
            <div style={{ flex: 1 }}>
              <div style={{ ...aCaps, color: A_OCHRE, fontSize: 8 }}>Applied</div>
              <div style={{ fontSize: 12, color: A_INK, fontFamily: 'Newsreader, serif', letterSpacing: '.06em' }}>FIRSTROOM — 10% off</div>
            </div>
            <span style={{ ...aCaps, color: A_MUTED, fontSize: 8, cursor: 'pointer' }}>×</span>
          </div>
          <div style={{ marginTop: 10, ...aCaps, fontSize: 9, color: A_MUTED, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 12 }}>+</span><span>Have another code? Apply</span>
          </div>
        </div>

        {/* Gift */}
        <div style={{ margin: '20px 22px', padding: 18, background: A_DUST }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 6, fontSize: 9 }}>Sending as a gift?</div>
          <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 14, color: A_INK, lineHeight: 1.5, marginBottom: 8 }}>
            We'll write a card by hand. No prices.
          </div>
          <div style={{ ...aCaps, color: A_INK, fontSize: 9, borderBottom: `1px solid ${A_INK}`, paddingBottom: 2, display: 'inline-block' }}>Add a note →</div>
        </div>

        {/* Summary */}
        <div style={{ margin: '20px 22px', padding: 22, background: A_INK, color: A_PAPER, position: 'relative', overflow: 'hidden' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14, fontSize: 9 }}>Summary</div>
          {[
            ['Subtotal', `₹ ${subtotal.toLocaleString('en-IN')}`],
            [`Promo · FIRSTROOM`, `− ₹ ${promoDiscount.toLocaleString('en-IN')}`, true],
            ['Shipping', 'Free'],
          ].map(([k, v, accent], i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 12, color: 'rgba(250,247,241,.75)' }}>
              <span>{k}</span><span style={{ color: accent ? '#e8c89a' : A_PAPER }}>{v}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: 12, marginTop: 10, borderTop: `1px solid ${A_OCHRE}40` }}>
            <span style={{ ...aDisp, fontSize: 18 }}>Total</span>
            <div style={{ textAlign: 'right' }}>
              <span style={{ ...aDisp, fontSize: 22, color: '#e8c89a' }}>₹ {total.toLocaleString('en-IN')}</span>
              <div style={{ fontSize: 9, color: 'rgba(250,247,241,.5)', marginTop: 2 }}>EMI from ₹ {Math.round(total / 6).toLocaleString('en-IN')}/mo</div>
            </div>
          </div>

          {/* Estimated delivery */}
          <div style={{ marginTop: 14, padding: '10px 12px', background: 'rgba(250,247,241,.06)', borderLeft: `2px solid ${A_OCHRE}` }}>
            <div style={{ ...aCaps, color: '#e8c89a', fontSize: 8, marginBottom: 2 }}>Estimated</div>
            <div style={{ fontSize: 11, color: A_PAPER, fontFamily: 'Newsreader, serif', lineHeight: 1.5 }}>
              Dispatch by <b style={{ fontWeight: 500 }}>14 Jun</b>. With you by <b style={{ fontWeight: 500 }}>22 Jun</b>.
            </div>
          </div>

          {/* Payment row */}
          <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ ...aCaps, color: 'rgba(250,247,241,.5)', fontSize: 8 }}>Pay with</span>
            {['UPI', 'VISA', 'mc', 'EMI'].map(l => (
              <span key={l} style={{ padding: '4px 8px', background: 'rgba(250,247,241,.08)', color: 'rgba(250,247,241,.85)', fontSize: 9, borderRadius: 3, letterSpacing: '.05em' }}>{l}</span>
            ))}
          </div>
        </div>

        {/* Continue collecting */}
        <div style={{ padding: '24px 22px 100px', background: A_DUST, marginTop: 12 }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 8, fontSize: 9 }}>Continue collecting</div>
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {ALL_PRODUCTS.slice(5, 9).map(p => (
              <div key={p.n} style={{ flex: '0 0 130px' }}>
                <div style={{ aspectRatio: '4/5', background: `url(${R(p.img)}) center/cover no-repeat`, marginBottom: 6 }} />
                <div style={{ ...aDisp, fontSize: 13, lineHeight: 1.1 }}>{p.title}</div>
                <div style={{ fontSize: 10, color: A_MUTED }}>{p.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky checkout */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 22px',
          background: 'rgba(250,247,241,.97)', backdropFilter: 'blur(8px)',
          borderTop: `1px solid ${A_INK}15`,
        }}>
          <div style={{ padding: '14px 18px', background: A_INK, color: A_PAPER, textAlign: 'center', ...aCaps, fontSize: 10 }}>
            Proceed to checkout · ₹ {total.toLocaleString('en-IN')}
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}

window.AtelierCart = AtelierCart;
window.AtelierCartMobile = AtelierCartMobile;
