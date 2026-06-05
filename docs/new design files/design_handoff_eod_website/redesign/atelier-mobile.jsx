/* ATELIER — Mobile Home */

function AtelierMobileHome() {
  return (
    <MobileFrame height={4420} bg={A_PAPER}>
      <div style={{ height: '100%', overflow: 'hidden', color: A_INK, fontFamily: 'Manrope, sans-serif', fontSize: 14 }}>

        {/* Top bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 22px', borderBottom: `1px solid ${A_INK}10`,
        }}>
          <span style={{ fontSize: 18 }}>≡</span>
          <div style={{ textAlign: 'center' }}>
            <div style={{ ...aDisp, fontSize: 17, letterSpacing: '0.04em' }}>Elements of Decor</div>
            <div style={{ fontSize: 7, letterSpacing: '.4em', color: A_MUTED }}>EST · BOMBAY</div>
          </div>
          <span style={{ fontSize: 14 }}>⌕</span>
        </div>

        {/* Hero */}
        <div style={{
          position: 'relative', height: 540,
          background: `url(${R('assets/products/real/ruffle-1.jpg')}) center/cover no-repeat`,
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,.55) 100%)',
          }} />
          <div style={{ position: 'absolute', left: 22, bottom: 28, color: '#f5efe4' }}>
            <div style={{ ...aCaps, color: 'rgba(245,239,228,.65)', marginBottom: 14, fontSize: 9 }}>
              Manifesto · No. 01
            </div>
            <div style={{ ...aDisp, fontSize: 44, lineHeight: .98 }}>
              Home is not styled.<br/>
              <em style={{ fontStyle: 'italic', color: '#e8c89a' }}>It is felt.</em>
            </div>
          </div>
        </div>

        {/* Browse toggle + grid */}
        <AtelierMobileBrowse />

        {/* Philosophy */}
        <div style={{ background: A_INK, color: A_PAPER, padding: '54px 22px', position: 'relative', overflow: 'hidden' }}>
          <svg viewBox="0 0 400 400" style={{ position: 'absolute', right: -120, top: -80, width: 380, height: 380, opacity: .12 }}>
            <g fill="none" stroke={A_OCHRE} strokeWidth="1">
              <circle cx="200" cy="200" r="180" />
              <circle cx="200" cy="200" r="120" />
            </g>
          </svg>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 18, fontSize: 9, position: 'relative' }}>Our Philosophy</div>
          <div style={{ ...aDisp, fontSize: 28, lineHeight: 1.22, position: 'relative' }}>
            <em style={{ fontStyle: 'italic', color: '#e8c89a' }}>“</em> Every material we choose is thoughtfully
            curated to bring balance and natural beauty into your space. <em style={{ fontStyle: 'italic', color: '#e8c89a' }}>”</em>
          </div>
          <div style={{ width: 40, height: 1, background: A_OCHRE, margin: '26px 0', position: 'relative' }} />
          <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 14, color: 'rgba(250,247,241,.7)', position: 'relative' }}>
            — The Elements of Decor family
          </div>
        </div>

        {/* This Season — 2 rows, horizontal scroll */}
        <div style={{ padding: '54px 0 0' }}>
          <div style={{ padding: '0 22px 22px' }}>
            <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 10, fontSize: 9 }}>This Season</div>
            <div style={{ ...aDisp, fontSize: 32, lineHeight: 1.04 }}>
              Considered, <em style={{ fontStyle: 'italic' }}>not collected.</em>
            </div>
          </div>

          <div style={{
            display: 'grid', gridTemplateRows: '1fr 1fr', gridAutoFlow: 'column',
            gridAutoColumns: '180px', gap: '24px 14px',
            overflowX: 'auto', scrollSnapType: 'x mandatory',
            padding: '0 22px 4px', scrollbarWidth: 'none',
          }}>
            {SEASON_PRODUCTS.map(p => (
              <div key={p.n} style={{ scrollSnapAlign: 'start' }}>
                <div style={{ position: 'relative', aspectRatio: '4/5', background: A_DUST, marginBottom: 10 }}>
                  <img src={R(p.img)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 8, right: 8, ...aCaps, color: A_INK, opacity: .55, fontSize: 7 }}>{p.el}</div>
                </div>
                <div style={{ ...aDisp, fontSize: 16, lineHeight: 1.1, marginBottom: 2 }}>{p.title}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontSize: 10, color: A_MUTED }}>{p.sub}</div>
                  <div style={{ fontSize: 11, color: A_INK }}>{p.price}</div>
                </div>
              </div>
            ))}
            {/* See all tile — full height */}
            <div style={{
              gridRow: 'span 2', scrollSnapAlign: 'end',
              background: A_INK, color: A_PAPER, padding: '20px 18px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              minHeight: 0,
            }}>
              <div>
                <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 10, fontSize: 8 }}>The full shop</div>
                <div style={{ ...aDisp, fontSize: 26, lineHeight: 1.05 }}>
                  The full<br/>
                  <em style={{ fontStyle: 'italic', color: '#e8c89a' }}>shop.</em>
                </div>
              </div>
              <div style={{ ...aCaps, color: A_PAPER, fontSize: 9, borderBottom: `1px solid ${A_OCHRE}`, paddingBottom: 4, display: 'inline-block', width: 'fit-content' }}>
                Visit the shop →
              </div>
            </div>
          </div>
        </div>

        {/* Tool teaser compact */}
        <div style={{ padding: '54px 22px', background: A_DUST }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <span style={{ ...aCaps, color: A_OCHRE, fontSize: 9 }}>Phase Two</span>
            <span style={{ width: 20, height: 1, background: A_OCHRE }} />
            <span style={{ ...aCaps, color: A_MUTED, fontSize: 9 }}>Spring 2026</span>
          </div>
          <div style={{ ...aDisp, fontSize: 36, lineHeight: 1.04, marginBottom: 18 }}>
            Design your space,<br/>
            <em style={{ fontStyle: 'italic' }}>element by element.</em>
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.6, color: A_INK, marginBottom: 20 }}>
            Pick a surface — console, side table, corner — and layer it with
            the five elements until it feels right.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
            {['Console', 'Side table', 'Corner', 'Sofa side', 'Dehleez'].map(s => (
              <span key={s} style={{
                ...aCaps, padding: '7px 12px', border: `1px solid ${A_INK}20`,
                borderRadius: 999, background: A_PAPER, fontSize: 8,
              }}>{s}</span>
            ))}
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 22px', background: A_INK, color: A_PAPER, ...aCaps, fontSize: 10 }}>
            <span>Notify me</span><span>→</span>
          </div>
        </div>

        {/* Notes from the Atelier */}
        <div style={{ padding: '54px 0 24px' }}>
          <div style={{ padding: '0 22px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div style={{ ...aDisp, fontSize: 30, lineHeight: 1.04 }}>Notes from<br/>the Atelier.</div>
            <div style={{ ...aCaps, color: A_MUTED, fontSize: 8 }}>All notes →</div>
          </div>
          <div style={{ display: 'flex', gap: 14, padding: '0 22px', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {[
              { tag: 'Field note · Moradabad', title: 'Where the brass is folded by hand', meta: '6 min read', img: 'assets/products/real/candle-3tier-2.jpg' },
              { tag: 'At home with', title: "Sneh's apartment, Bandra", meta: 'A photo essay', img: 'assets/products/real/lotus-1.jpg' },
              { tag: 'On light', title: 'The case for one candle', meta: '3 min read', img: 'assets/products/real/oria-1.jpg' },
            ].map(j => (
              <div key={j.title} style={{ flex: '0 0 220px' }}>
                <div style={{ aspectRatio: '4/5', background: `url(${R(j.img)}) center/cover no-repeat ${A_DUST}`, marginBottom: 12 }} />
                <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 8, fontSize: 8 }}>{j.tag}</div>
                <div style={{ ...aDisp, fontSize: 19, lineHeight: 1.2, marginBottom: 6 }}>{j.title}</div>
                <div style={{ fontSize: 10, color: A_MUTED, letterSpacing: '.04em' }}>{j.meta}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Gratitude — compact */}
        <div style={{ padding: '36px 22px 56px', background: A_DUST }}>
          <div style={{
            background: A_PAPER, border: `1px solid ${A_OCHRE}40`, padding: '28px 24px',
          }}>
            <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 8, fontSize: 9 }}>With gratitude</div>
            <div style={{ ...aDisp, fontSize: 32, lineHeight: 1 }}>Thank you.</div>
            <div style={{ width: 36, height: 1, background: A_OCHRE, margin: '14px 0 18px' }} />
            <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 16, lineHeight: 1.5, marginBottom: 16 }}>
              A beautiful space is never accidental.
              Thank you for letting us be a part of yours.
            </div>
            <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 12, color: A_MUTED }}>
              — The Elements of Decor family
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '44px 22px 40px', background: A_INK, color: A_PAPER }}>
          <div style={{ ...aDisp, fontSize: 24, marginBottom: 8 }}>Elements of Decor</div>
          <div style={{ fontSize: 11, color: 'rgba(250,247,241,.5)', lineHeight: 1.7, marginBottom: 28, maxWidth: 260 }}>
            A small studio in Bombay making objects for modern Indian homes.
            Open by appointment.
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, paddingBottom: 28, borderBottom: '1px solid rgba(250,247,241,.12)' }}>
            {[
              { h: 'Stone', items: ['Urlis', 'Trays', 'Bookends'] },
              { h: 'Metal', items: ['Lighting', 'Candle stands'] },
              { h: 'Studio', items: ['Manifesto', 'Notes', 'Press'] },
              { h: 'Service', items: ['Care', 'Shipping', 'Returns'] },
            ].map(c => (
              <div key={c.h}>
                <div style={{ ...aCaps, marginBottom: 12, color: A_OCHRE, fontSize: 8 }}>{c.h}</div>
                {c.items.map(i => (
                  <div key={i} style={{ fontSize: 12, marginBottom: 8, color: 'rgba(250,247,241,.75)' }}>{i}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 20, fontSize: 9, color: 'rgba(250,247,241,.4)', letterSpacing: '.06em' }}>
            <span>© 2026 Elements of Decor LLP</span>
            <span>Instagram · WhatsApp</span>
          </div>
        </div>

      </div>
    </MobileFrame>
  );
}

function AtelierMobileBrowse() {
  const [mode, setMode] = React.useState('element');
  const data = (mode === 'element' ? ELEMENTS_DATA : OBJECTS_DATA).slice(0, 3);
  return (
    <div>
      <div style={{ padding: '48px 22px 28px', textAlign: 'center' }}>
        <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14, fontSize: 9 }}>The Shop</div>
        <div style={{ ...aDisp, fontSize: 38, lineHeight: 1.04, marginBottom: 26 }}>
          Considered,<br/>
          <em style={{ fontStyle: 'italic' }}>not collected.</em>
        </div>

        {/* Toggle — pill style, matches PLP */}
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: A_PAPER, border: `1px solid ${A_INK}15`,
            padding: '6px 8px', borderRadius: 999,
          }}>
            <span style={{ ...aCaps, color: A_MUTED, fontSize: 9, padding: '0 6px 0 12px' }}>Shop by</span>
            {[['element', 'Element'], ['object', 'Object']].map(([k, label]) => {
              const active = mode === k;
              return (
                <button key={k} onClick={() => setMode(k)} style={{
                  ...aDisp, fontSize: 17, fontWeight: 400,
                  fontStyle: active ? 'normal' : 'italic',
                  background: active ? A_INK : 'transparent',
                  color: active ? A_PAPER : A_MUTED,
                  border: 'none', cursor: 'pointer',
                  padding: '8px 18px', borderRadius: 999,
                  fontFamily: 'Newsreader, serif',
                }}>{label}</button>
              );
            })}
          </div>
          <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 12, color: A_MUTED, lineHeight: 1.4, maxWidth: 280 }}>
            {mode === 'element'
              ? 'By material — the way we make them.'
              : 'By what it is — the familiar way.'}
          </div>
        </div>
      </div>

      <div style={{ paddingBottom: 24 }}>
        {data.map(e => (
          <div key={e.n} style={{
            display: 'grid', gridTemplateColumns: '140px 1fr', gap: 18,
            padding: '14px 22px', borderTop: `1px solid ${A_INK}10`,
          }}>
            <div style={{
              aspectRatio: '4/5', background: `url(${R(e.img)}) center/cover no-repeat ${A_DUST}`,
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 8, left: 8, color: '#fff', ...aCaps, fontSize: 8 }}>{e.n}</div>
            </div>
            <div style={{ paddingTop: 10 }}>
              <div style={{ ...aCaps, marginBottom: 6, fontSize: 9 }}>{e.name}</div>
              <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 19, color: A_MUTED, marginBottom: 14, lineHeight: 1.3 }}>{e.q}</div>
              <div style={{ ...aCaps, color: A_OCHRE, fontSize: 9 }}>
                {e.soon ? 'Coming soon' : (e.count ? `${e.count} pieces →` : 'View →')}
              </div>
            </div>
          </div>
        ))}
        <div style={{ padding: '14px 22px', borderTop: `1px solid ${A_INK}10`, textAlign: 'center' }}>
          <span style={{ ...aCaps, color: A_INK, fontSize: 9 }}>View all {mode === 'element' ? '5 elements' : '5 categories'} →</span>
        </div>
      </div>
    </div>
  );
}

window.AtelierMobileBrowse = AtelierMobileBrowse;
window.AtelierMobileHome = AtelierMobileHome;
