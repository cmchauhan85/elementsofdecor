/* DIRECTION A — ATELIER (luxe e-com, museum register)
   Homepage spine: Hero → Five Elements → Philosophy → Season → Tool → Notes → Gratitude → Footer */

const A_PAPER = '#faf7f1';
const A_INK = '#1b1916';
const A_OCHRE = '#b88a3a';
const A_STONE = '#d4ccbe';
const A_DUST = '#ebe5d9';
const A_MUTED = '#7a766e';

const aDisp = { fontFamily: 'Newsreader, serif', fontWeight: 300, letterSpacing: '-0.015em' };
const aCaps = { fontFamily: 'Manrope, sans-serif', fontSize: 10, letterSpacing: '.32em', textTransform: 'uppercase', fontWeight: 600 };

/* ──────────────────────── DESKTOP HOME ──────────────────────── */

function AtelierDesktopHome() {
  return (
    <BrowserChrome url="elementsofdecor.in">
      <div style={{ background: A_PAPER, color: A_INK, fontFamily: 'Manrope, sans-serif' }}>
        <AtelierNav />

        {/* HERO */}
        <div style={{
          position: 'relative', height: 740,
          background: `url(${R('assets/products/real/ruffle-1.jpg')}) center 35%/cover no-repeat`,
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,.0) 35%, rgba(0,0,0,.5) 100%)',
          }} />
          <div style={{ position: 'absolute', left: 60, bottom: 64, color: '#f5efe4', maxWidth: 780 }}>
            <div style={{ ...aCaps, color: 'rgba(245,239,228,.65)', marginBottom: 22 }}>
              Manifesto &nbsp;·&nbsp; No. 01
            </div>
            <div style={{ ...aDisp, fontSize: 104, lineHeight: .98, marginBottom: 16 }}>
              Home is not styled.<br/>
              <em style={{ fontStyle: 'italic', color: '#e8c89a' }}>It is felt.</em>
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(245,239,228,.78)', maxWidth: 460, marginTop: 22 }}>
              Quiet objects, made by hand, for rooms that aren't trying.
            </div>
          </div>
          <div style={{ position: 'absolute', right: 60, bottom: 64, display: 'flex', alignItems: 'center', gap: 18, color: '#f5efe4' }}>
            <span style={{ ...aCaps, color: 'rgba(245,239,228,.65)' }}>Read the manifesto</span>
            <span style={{
              width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(245,239,228,.4)',
              display: 'grid', placeItems: 'center', fontSize: 16,
            }}>→</span>
          </div>
        </div>

        {/* SHOP BY — Element / Object */}
        <AtelierBrowse />

        {/* PHILOSOPHY — dark moment */}
        <div style={{
          background: A_INK, color: A_PAPER, padding: '120px 60px',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* faint brass arc */}
          <svg viewBox="0 0 800 800" style={{
            position: 'absolute', right: -240, top: -160, width: 920, height: 920, opacity: .15,
          }}>
            <g fill="none" stroke="#b88a3a" strokeWidth="1">
              <circle cx="400" cy="400" r="380" />
              <circle cx="400" cy="400" r="280" />
              <circle cx="400" cy="400" r="180" />
            </g>
          </svg>
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 80, maxWidth: 1240 }}>
            <div style={{ ...aCaps, color: A_OCHRE, paddingTop: 14, writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '.5em' }}>
              Our Philosophy
            </div>
            <div style={{ maxWidth: 880 }}>
              <div style={{ ...aDisp, fontSize: 64, lineHeight: 1.15, marginBottom: 32 }}>
                <em style={{ fontStyle: 'italic', color: '#e8c89a' }}>“</em> Every material we choose — from the strength of stone
                to the warmth of wood, the elegance of clay to the softness of
                cloth — is thoughtfully curated to bring balance and natural
                beauty into your space. <em style={{ fontStyle: 'italic', color: '#e8c89a' }}>”</em>
              </div>
              <div style={{ width: 60, height: 1, background: A_OCHRE, margin: '36px 0' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 13, color: 'rgba(250,247,241,.7)', letterSpacing: '.05em' }}>
                <em style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontSize: 16 }}>— The Elements of Decor family</em>
                <span style={{ flex: 1 }} />
                <span style={{ ...aCaps, color: A_OCHRE, cursor: 'pointer' }}>The full letter →</span>
              </div>
            </div>
          </div>
        </div>

        {/* THIS SEASON */}
        <AtelierThisSeason />

        {/* DESIGN YOUR SPACE — phase 2 tool teaser */}
        <AtelierToolTeaser />

        {/* JOURNAL STRIP */}
        <div style={{ padding: '120px 60px 96px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 56 }}>
            <div style={{ ...aDisp, fontSize: 48, lineHeight: 1.05 }}>Notes from the Atelier</div>
            <div style={{ fontSize: 13, color: A_MUTED }}>All field notes &nbsp; →</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 32 }}>
            <JournalCard tag="Field note · Moradabad" title="Where the brass is folded by hand" meta="6 min read" img="assets/products/real/candle-3tier-2.jpg" />
            <JournalCard tag="At home with" title="Sneh's apartment, Bandra" meta="A photo essay" img="assets/products/real/lotus-1.jpg" />
            <JournalCard tag="On light" title="The case for one candle" meta="3 min read" img="assets/products/real/oria-1.jpg" />
          </div>
        </div>

        {/* GRATITUDE */}
        <AtelierGratitude />

        <AtelierFooter />
      </div>
    </BrowserChrome>
  );
}

/* ──────────────────────── NAV ──────────────────────── */
function AtelierNav() {
  return (
    <div style={{
      height: 76, padding: '0 60px', display: 'grid',
      gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
      borderBottom: `1px solid ${A_INK}10`, background: A_PAPER,
    }}>
      <div style={{ display: 'flex', gap: 32, fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', fontWeight: 500 }}>
        <span>Shop</span>
        <span style={{ color: A_OCHRE }}>Stone</span>
        <span>Metal</span>
        <span>Ceramic</span>
        <span>Wood</span>
        <span>Fabric</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ ...aDisp, fontSize: 24, letterSpacing: '0.04em' }}>Elements of Decor</div>
        <div style={{ fontSize: 8, letterSpacing: '.4em', color: A_MUTED, marginTop: 2 }}>EST · BOMBAY · 2024</div>
      </div>
      <div style={{ display: 'flex', gap: 32, justifyContent: 'flex-end', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', fontWeight: 500 }}>
        <span>Studio</span><span>Stories</span><span>Search</span><span>Bag (0)</span>
      </div>
    </div>
  );
}

/* ──────────────────────── TOOL TEASER ──────────────────────── */
function AtelierToolTeaser() {
  return (
    <div style={{
      background: A_DUST, padding: '120px 60px',
      display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 80, alignItems: 'center',
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <span style={{ ...aCaps, color: A_OCHRE }}>Phase Two</span>
          <span style={{ width: 28, height: 1, background: A_OCHRE }} />
          <span style={{ ...aCaps, color: A_MUTED }}>Coming Spring 2026</span>
        </div>
        <div style={{ ...aDisp, fontSize: 64, lineHeight: 1.04, marginBottom: 24 }}>
          Design your space,<br/>
          <em style={{ fontStyle: 'italic' }}>element by element.</em>
        </div>
        <div style={{ fontSize: 15, lineHeight: 1.75, color: A_INK, maxWidth: 520, marginBottom: 32 }}>
          Pick a surface in your home — a console, a side table, a corner you
          haven't figured out — and layer it with the five elements until it
          feels right. A small studio, on your screen.
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36, maxWidth: 540 }}>
          {['Round table', 'Center table', 'Console', 'Side table', 'The corner', 'Sofa side', 'Entryway', 'Dehleez'].map(s => (
            <span key={s} style={{
              ...aCaps, padding: '10px 16px', border: `1px solid ${A_INK}22`,
              borderRadius: 999, background: A_PAPER, fontSize: 10,
            }}>{s}</span>
          ))}
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, padding: '14px 28px', background: A_INK, color: A_PAPER, ...aCaps, fontSize: 11 }}>
          <span>Notify me</span>
          <span>→</span>
        </div>
      </div>

      {/* schematic mockup */}
      <div style={{
        background: A_PAPER, border: `1px solid ${A_INK}10`,
        borderRadius: 4, padding: 32, position: 'relative', minHeight: 600,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28, paddingBottom: 18, borderBottom: `1px solid ${A_INK}10` }}>
          <div style={{ ...aCaps, color: A_OCHRE }}>Surface · Console</div>
          <div style={{ display: 'flex', gap: 16, ...aCaps, color: A_MUTED }}>
            <span>Reset</span><span style={{ color: A_INK }}>Save look</span>
          </div>
        </div>

        {/* surface schematic */}
        <div style={{ position: 'relative', height: 280, marginBottom: 28 }}>
          {/* console outline */}
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 20, height: 12,
            background: A_INK, opacity: .08,
          }} />
          <div style={{
            position: 'absolute', left: 30, bottom: 0, width: 6, height: 20, background: A_INK, opacity: .12,
          }} />
          <div style={{
            position: 'absolute', right: 30, bottom: 0, width: 6, height: 20, background: A_INK, opacity: .12,
          }} />
          <div style={{
            position: 'absolute', left: 30, right: 30, bottom: 32, height: 1,
            borderTop: `1px dashed ${A_INK}30`,
          }} />

          {/* placed objects */}
          <div style={{
            position: 'absolute', left: '15%', bottom: 32, width: 120, height: 120,
            background: `url(${R('assets/products/real/ruffle-1.jpg')}) center/cover no-repeat`,
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute', left: '38%', bottom: 32, width: 90, height: 180,
            background: `url(${R('assets/products/real/candle-3tier-2.jpg')}) center/contain no-repeat`,
          }} />
          <div style={{
            position: 'absolute', right: '12%', bottom: 32, width: 100, height: 100,
            background: `url(${R('assets/products/real/lotus-1.jpg')}) center/cover no-repeat`,
            borderRadius: 6,
          }} />

          {/* dimension labels */}
          <div style={{ position: 'absolute', bottom: -2, left: '50%', transform: 'translateX(-50%)', ...aCaps, fontSize: 9, color: A_MUTED }}>
            148 cm · solid teak · your dimensions
          </div>
        </div>

        {/* element rail */}
        <div style={{ ...aCaps, color: A_MUTED, marginBottom: 14 }}>Layer with</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, marginBottom: 24 }}>
          {[
            ['Stone', '#d4ccbe', '2'],
            ['Metal', '#b88a3a', '1'],
            ['Wood', '#7a5b3e', '0'],
            ['Ceramic', '#e8e0d3', '1'],
            ['Fabric', '#c9bfae', '0'],
          ].map(([n, c, count]) => (
            <div key={n} style={{
              padding: '14px 12px', background: A_PAPER,
              border: `1px solid ${n === 'Stone' || n === 'Metal' || n === 'Ceramic' ? A_OCHRE : A_INK + '15'}`,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ width: 14, height: 14, background: c, borderRadius: 2 }} />
              <div style={{ flex: 1 }}>
                <div style={{ ...aCaps, color: A_INK, fontSize: 9 }}>{n}</div>
                <div style={{ fontSize: 10, color: A_MUTED }}>{count} placed</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, paddingTop: 18, borderTop: `1px solid ${A_INK}10` }}>
          <div>
            <div style={{ ...aCaps, color: A_MUTED, marginBottom: 6 }}>Mood</div>
            <div style={{ ...aDisp, fontSize: 18, fontStyle: 'italic' }}>Quiet, sculptural</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ ...aCaps, color: A_MUTED, marginBottom: 6 }}>Estimated</div>
            <div style={{ ...aDisp, fontSize: 18 }}>₹ 11,450</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────── JOURNAL CARD ──────────────────────── */
function JournalCard({ tag, title, meta, img }) {
  return (
    <div>
      <div style={{
        aspectRatio: '4/5',
        background: `url(${R(img)}) center/cover no-repeat ${A_DUST}`,
        marginBottom: 22,
      }} />
      <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 10 }}>{tag}</div>
      <div style={{ ...aDisp, fontSize: 26, lineHeight: 1.2, marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 12, color: A_MUTED, letterSpacing: '.04em' }}>{meta}</div>
    </div>
  );
}

/* ──────────────────────── GRATITUDE ──────────────────────── */
function AtelierGratitude() {
  return (
    <div style={{ background: A_DUST, padding: '96px 60px', display: 'grid', placeItems: 'center' }}>
      <div style={{
        background: A_PAPER, maxWidth: 920, width: '100%',
        display: 'grid', gridTemplateColumns: '260px 1fr',
        border: `1px solid ${A_OCHRE}40`,
        boxShadow: '0 16px 56px rgba(27,25,22,.08)',
      }}>
        {/* Left dark panel */}
        <div style={{
          background: A_INK, color: A_PAPER, padding: '40px 28px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          alignItems: 'center', textAlign: 'center', gap: 28,
        }}>
          <div>
            <div style={{ ...aDisp, fontSize: 32, marginBottom: 4 }}>EoD</div>
            <div style={{ fontSize: 9, letterSpacing: '.4em', color: A_OCHRE, fontWeight: 600 }}>ELEMENTS OF DECOR</div>
          </div>
          <div style={{ width: 36, height: 1, background: A_OCHRE }} />
          <div style={{ fontSize: 10, letterSpacing: '.32em', textTransform: 'uppercase', fontWeight: 600, lineHeight: 2.4 }}>
            Stone · Metal<br/>
            Wood · Ceramic<br/>
            Fabric
          </div>
        </div>

        {/* Right note */}
        <div style={{ padding: '48px 44px' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>With gratitude</div>
          <div style={{ ...aDisp, fontSize: 48, lineHeight: 1 }}>Thank you.</div>
          <div style={{ width: 48, height: 1, background: A_OCHRE, margin: '20px 0 28px' }} />
          <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 19, lineHeight: 1.55, color: A_INK, marginBottom: 32 }}>
            A beautiful space is never accidental.<br/>
            Thank you for letting us be a part of yours.
          </div>
          <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 14, color: A_MUTED }}>
            — The Elements of Decor family
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────── FOOTER ──────────────────────── */
function AtelierFooter() {
  return (
    <div style={{ padding: '72px 60px 36px', background: A_INK, color: A_PAPER }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 50, paddingBottom: 56, borderBottom: '1px solid rgba(250,247,241,.1)' }}>
        <div>
          <div style={{ ...aDisp, fontSize: 28, marginBottom: 14 }}>Elements of Decor</div>
          <div style={{ fontSize: 12, color: 'rgba(250,247,241,.5)', lineHeight: 1.7, maxWidth: 260 }}>
            A small studio in Bombay making objects for modern Indian homes.
            Open by appointment.
          </div>
        </div>
        {[
          { h: 'Stone', items: ['Urlis', 'Trays', 'Bookends'] },
          { h: 'Metal', items: ['Lighting', 'Candle stands', 'Wall'] },
          { h: 'Studio', items: ['Manifesto', 'Notes', 'Press'] },
          { h: 'Service', items: ['Care', 'Shipping', 'Returns'] },
        ].map(c => (
          <div key={c.h}>
            <div style={{ ...aCaps, marginBottom: 18, color: A_OCHRE }}>{c.h}</div>
            {c.items.map(i => (
              <div key={i} style={{ fontSize: 13, marginBottom: 10, color: 'rgba(250,247,241,.75)' }}>{i}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 28, fontSize: 11, color: 'rgba(250,247,241,.4)', letterSpacing: '.06em' }}>
        <span>© 2026 Elements of Decor LLP · Bombay · India</span>
        <span>Instagram · Pinterest · WhatsApp</span>
      </div>
    </div>
  );
}

/* ──────────────────────── BROWSE: Element / Object toggle ──────────────────────── */
const ELEMENTS_DATA = [
  { n: '01', name: 'Stone', q: 'the strength of stone.', img: 'assets/products/real/ruffle-1.jpg', count: '7 pieces' },
  { n: '02', name: 'Metal', q: 'the patina of metal.', img: 'assets/products/real/candle-3tier-2.jpg', count: '4 pieces' },
  { n: '03', name: 'Ceramic', q: 'the elegance of clay.', img: 'assets/products/real/lotus-1.jpg', count: 'Coming soon', soon: true },
  { n: '04', name: 'Wood', q: 'the warmth of wood.', img: 'assets/products/real/flower-1.jpg', count: 'Coming soon', soon: true },
  { n: '05', name: 'Fabric', q: 'the softness of cloth.', img: 'assets/products/real/oria-1.jpg', count: 'Coming soon', soon: true },
];

const OBJECTS_DATA = [
  { n: '01', name: 'Urlis & Bowls', q: 'for water, flowers, and light.', img: 'assets/products/real/ruffle-1.jpg', count: '6 pieces', els: 'Stone' },
  { n: '02', name: 'Vases & Vessels', q: 'for the stems you bring home.', img: 'assets/products/real/aurum-1.jpg', count: '4 pieces', els: 'Metal' },
  { n: '03', name: 'Lighting', q: 'candle stands, diyas, tealights.', img: 'assets/products/real/candle-3tier-2.jpg', count: '1 piece', els: 'Metal' },
  { n: '04', name: 'Trays & Stands', q: 'to gather what matters.', img: 'assets/products/real/lotus-1.jpg', count: 'Coming soon', els: 'Wood', soon: true },
  { n: '05', name: 'Wall & Tabletop', q: 'small things, well placed.', img: 'assets/products/real/oria-1.jpg', count: 'Coming soon', els: 'Mixed', soon: true },
];

/* Promoted band-style switch — matches the PLP treatment.
   Sits below the hero as the primary IA control. */
function AtelierBrowse() {
  const [mode, setMode] = React.useState('element');
  const data = mode === 'element' ? ELEMENTS_DATA : OBJECTS_DATA;

  return (
    <>
      {/* Promoted Shop By band */}
      <div style={{
        padding: '32px 60px',
        borderTop: `1px solid ${A_INK}10`, borderBottom: `1px solid ${A_INK}10`,
        background: A_DUST,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <window.ShopBySwitch mode={mode} setMode={setMode} />
          <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 17, color: A_MUTED, lineHeight: 1.4, maxWidth: 360 }}>
            {mode === 'element'
              ? 'By material — the way we make them.'
              : 'By what it is — the familiar way to shop.'}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, ...aCaps, color: A_MUTED, fontSize: 10 }}>
          <span style={{ width: 28, height: 1, background: A_OCHRE }} />
          <span>{mode === 'element' ? 'Two of five live · three coming soon' : 'Three of five live · two coming soon'}</span>
        </div>
      </div>

      {/* Section head + grid */}
      <div style={{ padding: '96px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>The Shop</div>
            <div style={{ ...aDisp, fontSize: 56, lineHeight: 1.04, maxWidth: 520 }}>
              Considered, <em style={{ fontStyle: 'italic' }}>not collected.</em>
            </div>
          </div>
          <div style={{ textAlign: 'right', fontSize: 13, color: A_MUTED, letterSpacing: '.05em' }}>
            {mode === 'element' ? 'Five materials, two available now' : 'Five categories, three available now'}
            <br />
            <span style={{ ...aCaps, color: A_INK, marginTop: 8, display: 'inline-block', borderBottom: `1px solid ${A_INK}`, paddingBottom: 2, cursor: 'pointer' }}>Browse the shop →</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
          {data.map(e => (
            <div key={e.n} style={{ cursor: e.soon ? 'default' : 'pointer', opacity: e.soon ? .65 : 1 }}>
              <div style={{
                aspectRatio: '4/5', background: `url(${R(e.img)}) center/cover no-repeat ${A_DUST}`,
                position: 'relative', marginBottom: 18,
                filter: e.soon ? 'grayscale(.6) brightness(.95)' : 'none',
              }}>
                <div style={{ position: 'absolute', top: 14, left: 14, color: '#fff', ...aCaps, mixBlendMode: 'difference' }}>{e.n}</div>
                {e.soon && (
                  <div style={{
                    position: 'absolute', bottom: 14, left: 14, padding: '5px 10px',
                    background: A_PAPER, color: A_INK, ...aCaps, fontSize: 9,
                  }}>Coming soon</div>
                )}
              </div>
              <div style={{ ...aCaps, color: A_INK, marginBottom: 6 }}>{e.name}</div>
              <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 18, color: A_MUTED, marginBottom: 10 }}>{e.q}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontSize: 11, color: e.soon ? A_MUTED : A_OCHRE, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 600 }}>
                  {e.soon ? e.count : `${e.count} →`}
                </div>
                {mode === 'object' && !e.soon && (
                  <div style={{ fontSize: 10, color: A_MUTED, letterSpacing: '.1em' }}>{e.els}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

window.AtelierBrowse = AtelierBrowse;
window.ELEMENTS_DATA = ELEMENTS_DATA;
window.OBJECTS_DATA = OBJECTS_DATA;
/* ──────────────────────── THIS SEASON ──────────────────────── */
const SEASON_PRODUCTS = [
  { n: '01', el: 'Stone', title: 'Ruffle Urli', sub: 'Indian marble · 9″', img: 'assets/products/real/ruffle-1.jpg', price: '₹ 6,800' },
  { n: '02', el: 'Stone', title: 'Lotus Urli', sub: 'Indian marble · 8″', img: 'assets/products/real/lotus-1.jpg', price: '₹ 7,200' },
  { n: '03', el: 'Metal', title: '3-Tier Candle Stand', sub: 'Powder-coated iron', img: 'assets/products/real/candle-3tier-2.jpg', price: '₹ 4,200' },
  { n: '04', el: 'Metal', title: 'Aurum Vase', sub: 'Etched antique brass · 10″', img: 'assets/products/real/aurum-1.jpg', price: '₹ 3,800' },
  { n: '05', el: 'Stone', title: 'Flower Urli', sub: 'Indian marble · 10″', img: 'assets/products/real/flower-1.jpg', price: '₹ 5,400' },
  { n: '06', el: 'Metal', title: 'Elio Vase, set of 2', sub: 'Steel blue & gold · Lacquered brass', img: 'assets/products/real/elio-2.jpg', price: '₹ 5,600' },
  { n: '07', el: 'Metal', title: 'Oria Vase, set of 2', sub: 'Hammered silver finish', img: 'assets/products/real/oria-1.jpg', price: '₹ 4,900' },
  { n: '08', el: 'Stone', title: 'Pebble Urli', sub: 'Indian marble · 6″', img: 'assets/products/real/ruffle-4.jpg', price: '₹ 4,200' },
  { n: '09', el: 'Metal', title: 'Aurum Bud Vase', sub: 'Etched brass · 6″', img: 'assets/products/real/aurum-2.jpg', price: '₹ 2,400' },
  { n: '10', el: 'Stone', title: 'Lotus Mini, set of 2', sub: 'Marble · 5″ each', img: 'assets/products/real/lotus-3.jpg', price: '₹ 3,800' },
];

function AtelierThisSeason() {
  return (
    <div style={{ padding: '120px 0 96px' }}>
      <div style={{
        padding: '0 60px 56px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      }}>
        <div>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>This Season &nbsp;·&nbsp; Ten new pieces</div>
          <div style={{ ...aDisp, fontSize: 56, lineHeight: 1.05 }}>
            Considered, <em style={{ fontStyle: 'italic' }}>not collected.</em>
          </div>
        </div>
        <div style={{ fontSize: 12, color: A_MUTED, letterSpacing: '.05em', textAlign: 'right' }}>
          Showing {SEASON_PRODUCTS.length} · scroll for more<br/>
          <span style={{ display: 'inline-flex', gap: 10, marginTop: 8, fontSize: 18 }}>
            <span style={{ width: 36, height: 36, border: `1px solid ${A_INK}25`, borderRadius: '50%', display: 'inline-grid', placeItems: 'center', cursor: 'pointer' }}>←</span>
            <span style={{ width: 36, height: 36, border: `1px solid ${A_INK}25`, borderRadius: '50%', display: 'inline-grid', placeItems: 'center', cursor: 'pointer' }}>→</span>
          </span>
        </div>
      </div>

      <div style={{
        display: 'grid', gridTemplateRows: '1fr 1fr', gridAutoFlow: 'column',
        gridAutoColumns: '320px', gap: '40px 24px',
        overflowX: 'auto', scrollSnapType: 'x mandatory',
        padding: '0 60px 12px', scrollbarWidth: 'none',
      }}>
        {SEASON_PRODUCTS.map(p => (
          <div key={p.n} style={{ scrollSnapAlign: 'start', cursor: 'pointer' }}>
            <div style={{ position: 'relative', aspectRatio: '4/5', background: A_DUST, marginBottom: 18 }}>
              <img src={R(p.img)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 14, left: 14, ...aCaps, color: A_INK, opacity: .5, fontSize: 9 }}>{p.n}</div>
              <div style={{ position: 'absolute', top: 14, right: 14, ...aCaps, color: A_INK, opacity: .5, fontSize: 9 }}>{p.el}</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <div style={{ ...aDisp, fontSize: 22, marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 11, color: A_MUTED, letterSpacing: '.04em' }}>{p.sub}</div>
              </div>
              <div style={{ fontSize: 13, color: A_INK }}>{p.price}</div>
            </div>
          </div>
        ))}

        {/* See all tile — spans both rows */}
        <div style={{
          gridRow: 'span 2', scrollSnapAlign: 'end', cursor: 'pointer',
          background: A_INK, color: A_PAPER, padding: '40px 32px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          position: 'relative', overflow: 'hidden', minHeight: 480,
        }}>
          <svg viewBox="0 0 200 200" style={{ position: 'absolute', right: -40, top: -40, width: 200, height: 200, opacity: .25 }}>
            <g fill="none" stroke={A_OCHRE} strokeWidth="1">
              <circle cx="100" cy="100" r="90" />
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="30" />
            </g>
          </svg>
          <div style={{ position: 'relative' }}>
            <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 18 }}>The full shop</div>
            <div style={{ ...aDisp, fontSize: 44, lineHeight: 1.05 }}>
              The full<br/>
              <em style={{ fontStyle: 'italic', color: '#e8c89a' }}>shop.</em>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 12, color: 'rgba(250,247,241,.55)', marginBottom: 24, lineHeight: 1.6 }}>
              Filter by element, by object, by what's in stock —
              the complete shop is one click away.
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              ...aCaps, color: A_PAPER, paddingBottom: 6,
              borderBottom: `1px solid ${A_OCHRE}`,
            }}>
              <span>Visit the shop</span>
              <span style={{ fontSize: 14 }}>→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.AtelierNav = AtelierNav;
window.AtelierFooter = AtelierFooter;
window.AtelierGratitude = AtelierGratitude;
window.JournalCard = JournalCard;
window.AtelierToolTeaser = AtelierToolTeaser;
window.SEASON_PRODUCTS = SEASON_PRODUCTS;
window.AtelierDesktopHome = AtelierDesktopHome;
window.A_PAPER = A_PAPER;
window.A_INK = A_INK;
window.A_OCHRE = A_OCHRE;
window.A_DUST = A_DUST;
window.A_MUTED = A_MUTED;
window.aDisp = aDisp;
window.aCaps = aCaps;
