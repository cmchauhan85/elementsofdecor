/* ATELIER — "Complete the Look" tool (Phase-2, Direction A)
   Picture-first curated sets. Pick a styled scene → swap any piece →
   buy the whole look as a discounted bundle tied to the cart milestones. */

/* ---- Look catalogue. Each look = a styled hero + 3 buyable slots,
        each slot offering a few interchangeable pieces. ---- */
const LOOKS = [
  {
    id: 'console', kind: 'surface', surface: 'The Console', mood: 'Quiet & sculptural',
    hero: 'assets/products/real/ruffle-1.jpg',
    blurb: 'A low marble urli, one tall stem, a quiet light. The console that greets you.',
    slots: [
      { label: 'The centrepiece', options: [
        { id: 'ruffle1', title: 'Ruffle Urli', sub: 'Marble · 9″', price: 6800, img: 'assets/products/real/ruffle-1.jpg' },
        { id: 'lotus1', title: 'Lotus Urli', sub: 'Marble · 8″', price: 7200, img: 'assets/products/real/lotus-1.jpg' },
        { id: 'flower1', title: 'Flower Urli', sub: 'Marble · 10″', price: 5400, img: 'assets/products/real/flower-1.jpg' },
      ]},
      { label: 'The stem', options: [
        { id: 'aurum1', title: 'Aurum Vase', sub: 'Brass · 10″', price: 3800, img: 'assets/products/real/aurum-1.jpg' },
        { id: 'oria1', title: 'Oria Vase', sub: 'Silver finish', price: 4900, img: 'assets/products/real/oria-1.jpg' },
        { id: 'elio2', title: 'Elio Vase', sub: 'Set of 2', price: 5600, img: 'assets/products/real/elio-2.jpg' },
      ]},
      { label: 'The light', options: [
        { id: 'candle2', title: '3-Tier Stand', sub: 'Iron · Cream', price: 4200, img: 'assets/products/real/candle-3tier-2.jpg' },
        { id: 'aurum2', title: 'Aurum Bud Vase', sub: 'Brass · 6″', price: 2400, img: 'assets/products/real/aurum-2.jpg' },
      ]},
    ],
  },
  {
    id: 'centre', kind: 'surface', surface: 'The Centre Table', mood: 'Warm & festive',
    hero: 'assets/products/real/lotus-1.jpg',
    blurb: 'A generous bowl at the heart of the room, flanked by a pair of vases.',
    slots: [
      { label: 'The bowl', options: [
        { id: 'lotus2', title: 'Lotus Urli, large', sub: 'Marble · 12″', price: 9400, img: 'assets/products/real/lotus-2.jpg' },
        { id: 'ruffle1', title: 'Ruffle Urli', sub: 'Marble · 9″', price: 6800, img: 'assets/products/real/ruffle-1.jpg' },
        { id: 'flower1', title: 'Flower Urli', sub: 'Marble · 10″', price: 5400, img: 'assets/products/real/flower-1.jpg' },
      ]},
      { label: 'A pair of vases', options: [
        { id: 'elio2', title: 'Elio Vase', sub: 'Set of 2', price: 5600, img: 'assets/products/real/elio-2.jpg' },
        { id: 'oria1', title: 'Oria Vase', sub: 'Set of 2', price: 4900, img: 'assets/products/real/oria-1.jpg' },
      ]},
      { label: 'The accent', options: [
        { id: 'aurum2', title: 'Aurum Bud Vase', sub: 'Brass · 6″', price: 2400, img: 'assets/products/real/aurum-2.jpg' },
        { id: 'candle2', title: '3-Tier Stand', sub: 'Iron · Cream', price: 4200, img: 'assets/products/real/candle-3tier-2.jpg' },
      ]},
    ],
  },
  {
    id: 'pooja', kind: 'room', surface: 'The Pooja Corner', mood: 'Sacred & still',
    hero: 'assets/products/real/flower-1.jpg',
    blurb: 'Where the day begins and ends. A flowering urli, a steady light.',
    slots: [
      { label: 'The urli', options: [
        { id: 'flower1', title: 'Flower Urli', sub: 'Marble · 10″', price: 5400, img: 'assets/products/real/flower-1.jpg' },
        { id: 'lotus3', title: 'Lotus Mini', sub: 'Set of 2 · 5″', price: 3800, img: 'assets/products/real/lotus-3.jpg' },
        { id: 'ruffle4', title: 'Pebble Urli', sub: 'Marble · 6″', price: 4200, img: 'assets/products/real/ruffle-4.jpg' },
      ]},
      { label: 'The light', options: [
        { id: 'candle2', title: '3-Tier Stand', sub: 'Iron · Cream', price: 4200, img: 'assets/products/real/candle-3tier-2.jpg' },
        { id: 'aurum2', title: 'Aurum Bud Vase', sub: 'Brass · 6″', price: 2400, img: 'assets/products/real/aurum-2.jpg' },
      ]},
      { label: 'The stem', options: [
        { id: 'oria1', title: 'Oria Vase', sub: 'Silver finish', price: 4900, img: 'assets/products/real/oria-1.jpg' },
        { id: 'aurum1', title: 'Aurum Vase', sub: 'Brass · 10″', price: 3800, img: 'assets/products/real/aurum-1.jpg' },
      ]},
    ],
  },
  {
    id: 'entry', kind: 'room', surface: 'The Entryway', mood: 'A first impression',
    hero: 'assets/products/real/ruffle-3.jpg',
    blurb: 'The first surface a guest sees. One statement bowl, one stem, done.',
    slots: [
      { label: 'The statement', options: [
        { id: 'ruffle3', title: 'Footed Urli', sub: 'Black marble · 7″', price: 5400, img: 'assets/products/real/ruffle-3.jpg' },
        { id: 'ruffle1', title: 'Ruffle Urli', sub: 'Marble · 9″', price: 6800, img: 'assets/products/real/ruffle-1.jpg' },
        { id: 'lotus1', title: 'Lotus Urli', sub: 'Marble · 8″', price: 7200, img: 'assets/products/real/lotus-1.jpg' },
      ]},
      { label: 'The stem', options: [
        { id: 'aurum1', title: 'Aurum Vase', sub: 'Brass · 10″', price: 3800, img: 'assets/products/real/aurum-1.jpg' },
        { id: 'elio2', title: 'Elio Vase', sub: 'Set of 2', price: 5600, img: 'assets/products/real/elio-2.jpg' },
      ]},
      { label: 'The accent', options: [
        { id: 'lotus3', title: 'Lotus Mini', sub: 'Set of 2 · 5″', price: 3800, img: 'assets/products/real/lotus-3.jpg' },
        { id: 'aurum2', title: 'Aurum Bud Vase', sub: 'Brass · 6″', price: 2400, img: 'assets/products/real/aurum-2.jpg' },
      ]},
    ],
  },
];

const BUNDLE_PCT = 0.10; // the "buy the look" set discount
const inr = n => '₹ ' + n.toLocaleString('en-IN');

/* Shared hook: per-look slot selection + include toggles */
function useLook(look) {
  const [sel, setSel] = React.useState(() => look.slots.map(() => 0));
  const [inc, setInc] = React.useState(() => look.slots.map(() => true));
  React.useEffect(() => { setSel(look.slots.map(() => 0)); setInc(look.slots.map(() => true)); }, [look.id]);
  const chosen = look.slots.map((s, i) => ({ slot: s, opt: s.options[sel[i]], included: inc[i] }));
  const full = chosen.reduce((t, c) => t + (c.included ? c.opt.price : 0), 0);
  const bundle = Math.round(full * (1 - BUNDLE_PCT));
  const saving = full - bundle;
  const count = inc.filter(Boolean).length;
  return { sel, setSel, inc, setInc, chosen, full, bundle, saving, count };
}

/* ──────────────────────── DESKTOP ──────────────────────── */
function AtelierTool() {
  const [mode, setMode] = React.useState('surface');
  const looks = LOOKS.filter(l => l.kind === mode);
  const [activeId, setActiveId] = React.useState(looks[0].id);
  const active = LOOKS.find(l => l.id === activeId);
  const L = useLook(active);
  const [swapOpen, setSwapOpen] = React.useState(null);

  const onMode = (m) => {
    setMode(m);
    const first = LOOKS.find(l => l.kind === m);
    setActiveId(first.id); setSwapOpen(null);
  };

  // next milestone tie-in
  const MS = (typeof MILESTONES !== 'undefined') ? MILESTONES : [
    { at: 10000, label: 'Hand-tied muslin wrap' },
    { at: 15000, label: 'A ceramic dish, our gift' },
    { at: 25000, label: 'White-glove installation' },
  ];
  const next = MS.find(m => L.bundle < m.at);
  const earned = MS.filter(m => L.bundle >= m.at);

  return (
    <BrowserChrome url="elementsofdecor.in/design-your-space">
      <div style={{ background: A_PAPER, color: A_INK, fontFamily: 'Manrope, sans-serif' }}>
        <AtelierNav />

        {/* Header band */}
        <div style={{
          padding: '40px 60px 28px', display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', gap: 60, borderBottom: `1px solid ${A_INK}10`,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <span style={{ ...aCaps, color: A_OCHRE }}>Design Your Space</span>
              <span style={{ width: 28, height: 1, background: A_OCHRE }} />
              <span style={{ ...aCaps, color: A_MUTED }}>Complete the look</span>
            </div>
            <div style={{ ...aDisp, fontSize: 60, lineHeight: 1.0, maxWidth: 820 }}>
              Buy the whole look, <em style={{ fontStyle: 'italic' }}>not just the object.</em>
            </div>
          </div>
          {/* Surface / Room toggle — same pill language */}
          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: A_DUST, border: `1px solid ${A_INK}15`, padding: '8px 10px', borderRadius: 999,
            }}>
              <span style={{ ...aCaps, color: A_MUTED, fontSize: 10, padding: '0 8px 0 12px' }}>Browse by</span>
              {[['surface', 'Surface'], ['room', 'Room']].map(([k, label]) => {
                const a = mode === k;
                return (
                  <button key={k} onClick={() => onMode(k)} style={{
                    ...aDisp, fontSize: 20, fontStyle: a ? 'normal' : 'italic',
                    background: a ? A_INK : 'transparent', color: a ? A_PAPER : A_MUTED,
                    border: 'none', cursor: 'pointer', padding: '8px 22px', borderRadius: 999,
                    fontFamily: 'Newsreader, serif',
                  }}>{label}</button>
                );
              })}
            </div>
            <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 14, color: A_MUTED }}>
              {mode === 'surface' ? 'A spot in the room — console, centre table.' : 'A whole corner — pooja, entryway.'}
            </div>
          </div>
        </div>

        {/* Scene picker */}
        <div style={{ padding: '24px 60px', display: 'flex', gap: 16, borderBottom: `1px solid ${A_INK}10`, background: A_DUST }}>
          {looks.map(l => {
            const on = l.id === activeId;
            return (
              <button key={l.id} onClick={() => { setActiveId(l.id); setSwapOpen(null); }} style={{
                flex: 1, textAlign: 'left', cursor: 'pointer',
                background: on ? A_PAPER : 'transparent',
                border: on ? `1px solid ${A_OCHRE}` : `1px solid ${A_INK}15`,
                padding: 12, display: 'flex', gap: 14, alignItems: 'center',
              }}>
                <div style={{ width: 64, height: 64, background: `url(${R(l.hero)}) center/cover no-repeat ${A_DUST}`, flexShrink: 0 }} />
                <div>
                  <div style={{ ...aDisp, fontSize: 22, lineHeight: 1.05 }}>{l.surface}</div>
                  <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 13, color: A_MUTED }}>{l.mood}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main — styled scene + the look */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 0 }}>
          {/* Scene */}
          <div style={{ position: 'relative', minHeight: 720, background: `url(${R(active.hero)}) center/cover no-repeat ${A_DUST}` }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,.35) 100%)' }} />
            <div style={{ position: 'absolute', top: 32, left: 32, ...aCaps, color: '#fff', fontSize: 10, opacity: .85 }}>
              {active.kind === 'surface' ? 'Surface' : 'Room'} · As styled
            </div>
            {/* numbered pins */}
            {L.chosen.map((c, i) => {
              const pos = [{ l: '24%', t: '62%' }, { l: '52%', t: '40%' }, { l: '74%', t: '66%' }][i] || { l: '50%', t: '50%' };
              return (
                <div key={i} style={{
                  position: 'absolute', left: pos.l, top: pos.t, transform: 'translate(-50%,-50%)',
                  width: 34, height: 34, borderRadius: '50%',
                  background: c.included ? A_OCHRE : 'rgba(0,0,0,.35)',
                  color: c.included ? A_INK : '#fff',
                  border: '2px solid rgba(255,255,255,.85)',
                  display: 'grid', placeItems: 'center', ...aDisp, fontSize: 16,
                  opacity: c.included ? 1 : .5,
                }}>{i + 1}</div>
              );
            })}
            <div style={{ position: 'absolute', left: 32, bottom: 32, color: '#f5efe4', maxWidth: 440 }}>
              <div style={{ ...aDisp, fontSize: 36, lineHeight: 1.0, marginBottom: 8 }}>{active.surface}.</div>
              <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 16, color: 'rgba(245,239,228,.85)', lineHeight: 1.4 }}>{active.blurb}</div>
            </div>
          </div>

          {/* The look list */}
          <div style={{ padding: '40px 48px', background: A_PAPER }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
              <div style={{ ...aCaps, color: A_OCHRE }}>The look · {L.count} pieces</div>
              <div style={{ ...aCaps, color: A_MUTED }}>Swap any piece</div>
            </div>
            <div style={{ ...aDisp, fontSize: 30, lineHeight: 1.1, marginBottom: 24 }}>
              Made yours, <em style={{ fontStyle: 'italic' }}>not off a shelf.</em>
            </div>

            {/* slots */}
            {L.chosen.map((c, i) => (
              <div key={i} style={{ borderTop: `1px solid ${A_INK}12`, padding: '18px 0' }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  {/* include toggle */}
                  <button onClick={() => L.setInc(p => p.map((v, j) => j === i ? !v : v))} style={{
                    width: 22, height: 22, flexShrink: 0, borderRadius: '50%', cursor: 'pointer',
                    border: `1.5px solid ${c.included ? A_OCHRE : A_INK + '30'}`,
                    background: c.included ? A_OCHRE : 'transparent',
                    color: A_INK, display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700,
                  }}>{c.included ? '✓' : ''}</button>

                  <div style={{ width: 64, height: 64, flexShrink: 0, background: `url(${R(c.opt.img)}) center/cover no-repeat ${A_DUST}`, opacity: c.included ? 1 : .45 }} />

                  <div style={{ flex: 1, opacity: c.included ? 1 : .5 }}>
                    <div style={{ ...aCaps, color: A_MUTED, fontSize: 9, marginBottom: 3 }}>{i + 1} · {c.slot.label}</div>
                    <div style={{ ...aDisp, fontSize: 22, lineHeight: 1 }}>{c.opt.title}</div>
                    <div style={{ fontSize: 11, color: A_MUTED }}>{c.opt.sub}</div>
                  </div>

                  <div style={{ textAlign: 'right', opacity: c.included ? 1 : .5 }}>
                    <div style={{ ...aDisp, fontSize: 18 }}>{inr(c.opt.price)}</div>
                    {c.slot.options.length > 1 && (
                      <button onClick={() => setSwapOpen(swapOpen === i ? null : i)} style={{
                        ...aCaps, fontSize: 9, color: A_OCHRE, background: 'none', border: 'none',
                        cursor: 'pointer', marginTop: 4, padding: 0, borderBottom: `1px solid ${A_OCHRE}60`,
                      }}>{swapOpen === i ? 'Close' : `Swap · ${c.slot.options.length}`}</button>
                    )}
                  </div>
                </div>

                {/* swap drawer */}
                {swapOpen === i && (
                  <div style={{ display: 'flex', gap: 10, marginTop: 14, paddingLeft: 38 }}>
                    {c.slot.options.map((o, oi) => {
                      const on = L.sel[i] === oi;
                      return (
                        <button key={o.id} onClick={() => { L.setSel(p => p.map((v, j) => j === i ? oi : v)); }} style={{
                          flex: 1, cursor: 'pointer', textAlign: 'center', padding: 8,
                          background: on ? A_DUST : 'transparent',
                          border: on ? `1px solid ${A_OCHRE}` : `1px solid ${A_INK}15`,
                        }}>
                          <div style={{ aspectRatio: '1', background: `url(${R(o.img)}) center/cover no-repeat ${A_DUST}`, marginBottom: 6 }} />
                          <div style={{ ...aDisp, fontSize: 13, lineHeight: 1 }}>{o.title}</div>
                          <div style={{ fontSize: 10, color: A_MUTED, marginTop: 2 }}>{inr(o.price)}</div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {/* Bundle card */}
            <div style={{ marginTop: 24, background: A_INK, color: A_PAPER, padding: '28px 28px', position: 'relative', overflow: 'hidden' }}>
              <svg viewBox="0 0 200 200" style={{ position: 'absolute', right: -40, top: -40, width: 180, height: 180, opacity: .2 }}>
                <g fill="none" stroke={A_OCHRE} strokeWidth="1"><circle cx="100" cy="100" r="90"/><circle cx="100" cy="100" r="60"/><circle cx="100" cy="100" r="30"/></g>
              </svg>
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                  <div style={{ ...aCaps, color: A_OCHRE }}>The whole look</div>
                  <div style={{ ...aCaps, color: '#e8c89a' }}>Set saving {Math.round(BUNDLE_PCT * 100)}%</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 4 }}>
                  <div style={{ ...aDisp, fontSize: 40, color: '#e8c89a' }}>{inr(L.bundle)}</div>
                  <div style={{ ...aDisp, fontSize: 20, color: 'rgba(250,247,241,.45)', textDecoration: 'line-through' }}>{inr(L.full)}</div>
                </div>
                <div style={{ fontSize: 12, color: 'rgba(250,247,241,.6)', marginBottom: 18 }}>
                  You save {inr(L.saving)} buying these {L.count} as a set.
                </div>

                {/* milestone tie-in */}
                <div style={{ padding: '12px 14px', background: 'rgba(184,138,58,.16)', borderLeft: `2px solid ${A_OCHRE}`, marginBottom: 18 }}>
                  <div style={{ fontSize: 12.5, color: A_PAPER, fontFamily: 'Newsreader, serif', lineHeight: 1.5 }}>
                    {next
                      ? <>This look is <b style={{ color: '#e8c89a' }}>{inr(next.at - L.bundle)}</b> from the <em style={{ fontStyle: 'italic' }}>{next.label.toLowerCase()}</em>.</>
                      : <><b style={{ color: '#e8c89a' }}>All three thank-yous</b> unlocked with this look.</>}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 10 }}>
                  <div style={{ flex: 1, padding: '15px 20px', background: A_PAPER, color: A_INK, textAlign: 'center', ...aCaps, fontSize: 11, cursor: 'pointer' }}>
                    Add the look · {inr(L.bundle)}
                  </div>
                  <div style={{ padding: '15px 18px', border: `1px solid rgba(250,247,241,.4)`, color: A_PAPER, ...aCaps, fontSize: 11, cursor: 'pointer' }}>
                    Save look ♡
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div style={{ padding: '96px 60px', background: A_DUST }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>How it works</div>
          <div style={{ ...aDisp, fontSize: 44, lineHeight: 1.05, marginBottom: 48 }}>Three taps to a finished surface.</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {[
              ['I', 'Pick a scene', 'Start from a surface or a room we\u2019ve already styled for you.'],
              ['II', 'Make it yours', 'Swap any piece for an alternative, or leave a slot out entirely.'],
              ['III', 'Buy the look', 'Add all of it in one go — as a set, at a set price, in one delivery.'],
            ].map(([n, t, b]) => (
              <div key={n} style={{ paddingTop: 22, borderTop: `1px solid ${A_INK}20` }}>
                <div style={{ ...aDisp, fontSize: 30, color: A_OCHRE, marginBottom: 10 }}>{n}</div>
                <div style={{ ...aDisp, fontSize: 26, marginBottom: 10 }}>{t}</div>
                <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 15, color: A_MUTED, lineHeight: 1.5 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>

        <AtelierFooter />
      </div>
    </BrowserChrome>
  );
}

/* ──────────────────────── MOBILE ──────────────────────── */
function AtelierToolMobile() {
  const [mode, setMode] = React.useState('surface');
  const looks = LOOKS.filter(l => l.kind === mode);
  const [activeId, setActiveId] = React.useState(looks[0].id);
  const active = LOOKS.find(l => l.id === activeId);
  const L = useLook(active);
  const [swapOpen, setSwapOpen] = React.useState(null);
  const onMode = (m) => { setMode(m); setActiveId(LOOKS.find(l => l.kind === m).id); setSwapOpen(null); };

  return (
    <MobileFrame height={3200} bg={A_PAPER}>
      <div style={{ height: '100%', overflow: 'hidden', color: A_INK, fontFamily: 'Manrope, sans-serif', fontSize: 14, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px', borderBottom: `1px solid ${A_INK}10` }}>
          <span style={{ fontSize: 18 }}>←</span>
          <div style={{ ...aCaps, fontSize: 9 }}>DESIGN YOUR SPACE</div>
          <span style={{ fontSize: 14 }}>⌕</span>
        </div>

        {/* Head + toggle */}
        <div style={{ padding: '22px 22px 16px' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 10, fontSize: 9 }}>Complete the look</div>
          <div style={{ ...aDisp, fontSize: 30, lineHeight: 1.02, marginBottom: 18 }}>
            Buy the whole look, <em style={{ fontStyle: 'italic' }}>not just the object.</em>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: A_DUST, border: `1px solid ${A_INK}15`, padding: '6px 8px', borderRadius: 999 }}>
            <span style={{ ...aCaps, color: A_MUTED, fontSize: 9, padding: '0 6px 0 12px' }}>Browse by</span>
            {[['surface', 'Surface'], ['room', 'Room']].map(([k, label]) => {
              const a = mode === k;
              return (
                <button key={k} onClick={() => onMode(k)} style={{
                  ...aDisp, fontSize: 16, fontStyle: a ? 'normal' : 'italic',
                  background: a ? A_INK : 'transparent', color: a ? A_PAPER : A_MUTED,
                  border: 'none', cursor: 'pointer', padding: '7px 16px', borderRadius: 999, fontFamily: 'Newsreader, serif',
                }}>{label}</button>
              );
            })}
          </div>
        </div>

        {/* Scene picker */}
        <div style={{ display: 'flex', gap: 10, padding: '4px 22px 16px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {looks.map(l => {
            const on = l.id === activeId;
            return (
              <button key={l.id} onClick={() => { setActiveId(l.id); setSwapOpen(null); }} style={{
                flex: '0 0 150px', textAlign: 'left', cursor: 'pointer', padding: 8,
                background: on ? A_DUST : 'transparent',
                border: on ? `1px solid ${A_OCHRE}` : `1px solid ${A_INK}15`,
              }}>
                <div style={{ aspectRatio: '16/10', background: `url(${R(l.hero)}) center/cover no-repeat ${A_DUST}`, marginBottom: 8 }} />
                <div style={{ ...aDisp, fontSize: 16, lineHeight: 1 }}>{l.surface}</div>
                <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 11, color: A_MUTED }}>{l.mood}</div>
              </button>
            );
          })}
        </div>

        {/* Scene hero */}
        <div style={{ position: 'relative', height: 320, background: `url(${R(active.hero)}) center/cover no-repeat ${A_DUST}` }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,.5) 100%)' }} />
          {L.chosen.map((c, i) => {
            const pos = [{ l: '26%', t: '60%' }, { l: '52%', t: '42%' }, { l: '72%', t: '64%' }][i] || { l: '50%', t: '50%' };
            return (
              <div key={i} style={{
                position: 'absolute', left: pos.l, top: pos.t, transform: 'translate(-50%,-50%)',
                width: 26, height: 26, borderRadius: '50%',
                background: c.included ? A_OCHRE : 'rgba(0,0,0,.4)', color: c.included ? A_INK : '#fff',
                border: '2px solid rgba(255,255,255,.85)', display: 'grid', placeItems: 'center', ...aDisp, fontSize: 13,
              }}>{i + 1}</div>
            );
          })}
          <div style={{ position: 'absolute', left: 22, bottom: 18, color: '#f5efe4' }}>
            <div style={{ ...aDisp, fontSize: 26, lineHeight: 1 }}>{active.surface}.</div>
          </div>
        </div>

        {/* The look list */}
        <div style={{ padding: '20px 22px 0' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 10, fontSize: 9 }}>The look · {L.count} pieces · swap any</div>
          {L.chosen.map((c, i) => (
            <div key={i} style={{ borderTop: `1px solid ${A_INK}12`, padding: '14px 0' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <button onClick={() => L.setInc(p => p.map((v, j) => j === i ? !v : v))} style={{
                  width: 20, height: 20, flexShrink: 0, borderRadius: '50%', cursor: 'pointer',
                  border: `1.5px solid ${c.included ? A_OCHRE : A_INK + '30'}`,
                  background: c.included ? A_OCHRE : 'transparent', color: A_INK, display: 'grid', placeItems: 'center', fontSize: 10, fontWeight: 700,
                }}>{c.included ? '✓' : ''}</button>
                <div style={{ width: 52, height: 52, flexShrink: 0, background: `url(${R(c.opt.img)}) center/cover no-repeat ${A_DUST}`, opacity: c.included ? 1 : .45 }} />
                <div style={{ flex: 1, opacity: c.included ? 1 : .5 }}>
                  <div style={{ ...aCaps, color: A_MUTED, fontSize: 8 }}>{i + 1} · {c.slot.label}</div>
                  <div style={{ ...aDisp, fontSize: 18, lineHeight: 1.05 }}>{c.opt.title}</div>
                  <div style={{ fontSize: 10, color: A_MUTED }}>{inr(c.opt.price)}</div>
                </div>
                {c.slot.options.length > 1 && (
                  <button onClick={() => setSwapOpen(swapOpen === i ? null : i)} style={{
                    ...aCaps, fontSize: 8, color: A_OCHRE, background: 'none', border: `1px solid ${A_OCHRE}60`,
                    cursor: 'pointer', padding: '6px 10px',
                  }}>{swapOpen === i ? 'Close' : 'Swap'}</button>
                )}
              </div>
              {swapOpen === i && (
                <div style={{ display: 'flex', gap: 8, marginTop: 12, paddingLeft: 32, overflowX: 'auto', scrollbarWidth: 'none' }}>
                  {c.slot.options.map((o, oi) => {
                    const on = L.sel[i] === oi;
                    return (
                      <button key={o.id} onClick={() => L.setSel(p => p.map((v, j) => j === i ? oi : v))} style={{
                        flex: '0 0 96px', cursor: 'pointer', textAlign: 'center', padding: 6,
                        background: on ? A_DUST : 'transparent', border: on ? `1px solid ${A_OCHRE}` : `1px solid ${A_INK}15`,
                      }}>
                        <div style={{ aspectRatio: '1', background: `url(${R(o.img)}) center/cover no-repeat ${A_DUST}`, marginBottom: 5 }} />
                        <div style={{ ...aDisp, fontSize: 11, lineHeight: 1 }}>{o.title}</div>
                        <div style={{ fontSize: 9, color: A_MUTED }}>{inr(o.price)}</div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bundle card */}
        <div style={{ margin: '20px 22px 110px', background: A_INK, color: A_PAPER, padding: '22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
            <div style={{ ...aCaps, color: A_OCHRE, fontSize: 9 }}>The whole look</div>
            <div style={{ ...aCaps, color: '#e8c89a', fontSize: 9 }}>Set saving {Math.round(BUNDLE_PCT * 100)}%</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <div style={{ ...aDisp, fontSize: 30, color: '#e8c89a' }}>{inr(L.bundle)}</div>
            <div style={{ ...aDisp, fontSize: 16, color: 'rgba(250,247,241,.45)', textDecoration: 'line-through' }}>{inr(L.full)}</div>
          </div>
          <div style={{ fontSize: 11, color: 'rgba(250,247,241,.6)', marginTop: 4 }}>You save {inr(L.saving)} buying these {L.count} as a set.</div>
        </div>

        {/* Sticky CTA */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 22px', background: 'rgba(250,247,241,.97)', backdropFilter: 'blur(8px)', borderTop: `1px solid ${A_INK}15`, display: 'flex', gap: 10 }}>
          <div style={{ flex: 1, padding: '14px 16px', background: A_INK, color: A_PAPER, textAlign: 'center', ...aCaps, fontSize: 10 }}>
            Add the look · {inr(L.bundle)}
          </div>
          <div style={{ padding: '14px 16px', border: `1px solid ${A_INK}`, fontSize: 15 }}>♡</div>
        </div>
      </div>
    </MobileFrame>
  );
}

window.AtelierTool = AtelierTool;
window.AtelierToolMobile = AtelierToolMobile;
