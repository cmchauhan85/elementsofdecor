/* ATELIER — About / The Studio */

function AtelierAbout() {
  return (
    <BrowserChrome url="elementsofdecor.in/studio">
      <div style={{ background: A_PAPER, color: A_INK, fontFamily: 'Manrope, sans-serif' }}>
        <AtelierNav />

        {/* HERO */}
        <div style={{ position: 'relative', height: 720, background: `url(${R('assets/products/real/lotus-1.jpg')}) center/cover no-repeat` }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,.55) 100%)' }} />
          <div style={{ position: 'absolute', left: 60, bottom: 60, color: '#f5efe4', maxWidth: 720 }}>
            <div style={{ ...aCaps, color: 'rgba(245,239,228,.6)', marginBottom: 22 }}>The Studio &nbsp;·&nbsp; About</div>
            <div style={{ ...aDisp, fontSize: 96, lineHeight: 1, marginBottom: 12 }}>A small studio,</div>
            <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 96, lineHeight: 1, color: '#e8c89a' }}>doing one thing well.</div>
          </div>
        </div>

        {/* MANIFESTO — full quote */}
        <div style={{ padding: '120px 60px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <div>
            <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 16 }}>The Manifesto</div>
            <div style={{ ...aDisp, fontSize: 36, lineHeight: 1.1 }}>
              Home is not<br/>styled.<br/>
              <em style={{ fontStyle: 'italic' }}>It is felt.</em>
            </div>
          </div>
          <div>
            <div style={{ ...aDisp, fontSize: 30, lineHeight: 1.5, color: A_INK, marginBottom: 24 }}>
              At Elements of Decor, every material we choose — from the
              strength of stone to the warmth of wood, the elegance of clay
              to the softness of cloth — is thoughtfully curated to bring
              balance and natural beauty into your space.
            </div>
            <div style={{ ...aDisp, fontSize: 22, lineHeight: 1.6, color: A_MUTED, marginBottom: 24 }}>
              We don't believe homes are styled into being. They are felt
              into being — slowly, one object at a time, by people who pay
              attention to what they touch and what they keep.
            </div>
            <div style={{ ...aDisp, fontSize: 22, lineHeight: 1.6, color: A_MUTED }}>
              We make things to support that. Quiet, considered, well-made.
            </div>
            <div style={{ width: 60, height: 1, background: A_OCHRE, margin: '40px 0 18px' }} />
            <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 16, color: A_MUTED }}>
              — Bunty &amp; the Elements of Decor family
            </div>
          </div>
        </div>

        {/* FIVE THINGS WE BELIEVE */}
        <div style={{ background: A_DUST, padding: '120px 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 56 }}>
            <div>
              <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>Five things we believe</div>
              <div style={{ ...aDisp, fontSize: 56, lineHeight: 1.05 }}>The rules of the room.</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }}>
            {[
              ['01', 'Material before metaphor.', 'We start with what something is made of, never what it would look good next to.'],
              ['02', 'Small batches, openly told.', 'We list quantities. Eight in stock, four to make. No mystery.'],
              ['03', 'One hand per piece.', 'Every object is finished by one artisan. The variation is the proof.'],
              ['04', 'The room comes first.', 'If a piece doesn\'t earn its corner, we don\'t make it.'],
              ['05', 'Quiet over clever.', 'No tricks. No trends. Just things we wanted to live with.'],
            ].map(([n, t, body]) => (
              <div key={n} style={{ paddingTop: 24, borderTop: `1px solid ${A_INK}20` }}>
                <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 18, fontSize: 11 }}>{n}</div>
                <div style={{ ...aDisp, fontSize: 22, lineHeight: 1.15, marginBottom: 14 }}>{t}</div>
                <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 15, lineHeight: 1.5, color: A_MUTED }}>{body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* HOW WE MAKE — 3 step */}
        <div style={{ padding: '120px 60px' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>How we make</div>
          <div style={{ ...aDisp, fontSize: 56, lineHeight: 1.05, marginBottom: 56 }}>
            From a block of stone, <em style={{ fontStyle: 'italic' }}>to a bowl on your table.</em>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
            {[
              { n: 'I', t: 'Sourced', body: 'We visit the quarry, the foundry, the kiln. We choose the lot ourselves.', img: 'assets/products/real/flower-1.jpg' },
              { n: 'II', t: 'Made', body: 'One artisan per piece. No assembly line. The hand-print is the watermark.', img: 'assets/products/real/candle-3tier-2.jpg' },
              { n: 'III', t: 'Sent', body: 'Wrapped in cotton, packed in pine, sent with a hand-signed card.', img: 'assets/products/real/ruffle-1.jpg' },
            ].map(s => (
              <div key={s.n}>
                <div style={{ aspectRatio: '4/5', background: `url(${R(s.img)}) center/cover no-repeat ${A_DUST}`, marginBottom: 22 }} />
                <div style={{ display: 'flex', gap: 14, alignItems: 'baseline', marginBottom: 12 }}>
                  <div style={{ ...aDisp, fontSize: 32, color: A_OCHRE }}>{s.n}</div>
                  <div style={{ ...aDisp, fontSize: 30 }}>{s.t}</div>
                </div>
                <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 16, lineHeight: 1.55, color: A_MUTED }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* THE STUDIOS WE WORK WITH */}
        <div style={{ background: A_INK, color: A_PAPER, padding: '120px 60px', position: 'relative', overflow: 'hidden' }}>
          <svg viewBox="0 0 800 800" style={{ position: 'absolute', right: -240, top: -160, width: 920, height: 920, opacity: .12 }}>
            <g fill="none" stroke={A_OCHRE} strokeWidth="1">
              <circle cx="400" cy="400" r="380" />
              <circle cx="400" cy="400" r="280" />
              <circle cx="400" cy="400" r="180" />
            </g>
          </svg>
          <div style={{ position: 'relative' }}>
            <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>The studios we work with</div>
            <div style={{ ...aDisp, fontSize: 56, lineHeight: 1.05, marginBottom: 56 }}>
              Five elements, <em style={{ fontStyle: 'italic', color: '#e8c89a' }}>five small ateliers.</em>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 32 }}>
              {[
                ['Stone', 'Jaipur', 'Marble carvers · 12 craftsmen', '4 yrs'],
                ['Metal', 'Moradabad', 'Brass &amp; iron · 18 craftsmen', '3 yrs'],
                ['Wood', 'Saharanpur', 'Joiners · Coming spring', 'New'],
                ['Ceramic', 'Khurja', 'Wheel &amp; mould · 9 craftsmen', '2 yrs'],
                ['Fabric', 'Kutch', 'Hand-block · Coming spring', 'New'],
              ].map(([el, place, sub, yrs]) => (
                <div key={el} style={{ paddingTop: 24, borderTop: `1px solid ${A_OCHRE}50` }}>
                  <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 12, fontSize: 10 }}>{el}</div>
                  <div style={{ ...aDisp, fontSize: 30, marginBottom: 8 }}>{place}</div>
                  <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 14, color: 'rgba(250,247,241,.6)', marginBottom: 18 }} dangerouslySetInnerHTML={{ __html: sub }} />
                  <div style={{ ...aCaps, color: 'rgba(250,247,241,.4)', fontSize: 9 }}>Partner since · {yrs}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VISIT US */}
        <div style={{ padding: '120px 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>The Studio &nbsp;·&nbsp; Visit Us</div>
              <div style={{ ...aDisp, fontSize: 56, lineHeight: 1.05, marginBottom: 24 }}>
                By appointment,<br/>
                <em style={{ fontStyle: 'italic' }}>in Bombay.</em>
              </div>
              <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 18, color: A_INK, lineHeight: 1.7, marginBottom: 32 }}>
                A small showroom of the current collection, open on
                weekdays. Tea is on us.
              </div>
              <div style={{ paddingTop: 20, borderTop: `1px solid ${A_INK}15`, fontSize: 13, lineHeight: 1.9, color: A_MUTED }}>
                <div><b style={{ color: A_INK, fontWeight: 600 }}>14 Forbes Street, Fort</b></div>
                <div>Bombay 400001 · India</div>
                <div>Mon — Fri, 11am – 6pm</div>
                <div style={{ marginTop: 14 }}>+91 22 4000 6800 &nbsp; · &nbsp; studio@elementsofdecor.in</div>
              </div>
              <div style={{ marginTop: 36, display: 'inline-flex', gap: 14, padding: '14px 28px', background: A_INK, color: A_PAPER, ...aCaps, fontSize: 11 }}>
                <span>Book a visit</span><span>→</span>
              </div>
            </div>
            <div style={{ aspectRatio: '5/6', background: `url(${R('assets/products/real/oria-1.jpg')}) center/cover no-repeat ${A_DUST}` }} />
          </div>
        </div>

        <AtelierGratitude />
        <AtelierFooter />
      </div>
    </BrowserChrome>
  );
}

/* ──────────────────────── MOBILE ABOUT ──────────────────────── */
function AtelierAboutMobile() {
  return (
    <MobileFrame height={2700} bg={A_PAPER}>
      <div style={{ height: '100%', overflow: 'hidden', color: A_INK, fontFamily: 'Manrope, sans-serif', fontSize: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px' }}>
          <span style={{ fontSize: 18 }}>←</span>
          <div style={{ ...aCaps, fontSize: 9 }}>THE STUDIO</div>
          <span style={{ fontSize: 14 }}>⌕</span>
        </div>

        {/* Hero */}
        <div style={{ position: 'relative', height: 500, background: `url(${R('assets/products/real/lotus-1.jpg')}) center/cover no-repeat` }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,.6) 100%)' }} />
          <div style={{ position: 'absolute', left: 22, bottom: 28, color: '#f5efe4' }}>
            <div style={{ ...aCaps, color: 'rgba(245,239,228,.6)', marginBottom: 14, fontSize: 9 }}>About</div>
            <div style={{ ...aDisp, fontSize: 44, lineHeight: 1 }}>A small studio,</div>
            <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 44, lineHeight: 1, color: '#e8c89a' }}>doing one thing well.</div>
          </div>
        </div>

        {/* Manifesto */}
        <div style={{ padding: '40px 22px' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14, fontSize: 9 }}>The Manifesto</div>
          <div style={{ ...aDisp, fontSize: 26, lineHeight: 1.3, marginBottom: 18 }}>
            At Elements of Decor, every material we choose — from the strength of stone to the
            softness of cloth — is thoughtfully curated to bring balance and natural beauty
            into your space.
          </div>
          <div style={{ width: 40, height: 1, background: A_OCHRE, margin: '20px 0 14px' }} />
          <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 13, color: A_MUTED }}>
            — Bunty &amp; the Elements of Decor family
          </div>
        </div>

        {/* Five things */}
        <div style={{ background: A_DUST, padding: '40px 22px' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 10, fontSize: 9 }}>Five things we believe</div>
          <div style={{ ...aDisp, fontSize: 28, lineHeight: 1.05, marginBottom: 24 }}>The rules of the room.</div>
          {[
            ['01', 'Material before metaphor.'],
            ['02', 'Small batches, openly told.'],
            ['03', 'One hand per piece.'],
            ['04', 'The room comes first.'],
            ['05', 'Quiet over clever.'],
          ].map(([n, t]) => (
            <div key={n} style={{ display: 'flex', gap: 16, padding: '14px 0', borderTop: `1px solid ${A_INK}15` }}>
              <div style={{ ...aCaps, color: A_OCHRE, fontSize: 10, paddingTop: 4 }}>{n}</div>
              <div style={{ ...aDisp, fontSize: 18, lineHeight: 1.2, flex: 1 }}>{t}</div>
            </div>
          ))}
        </div>

        {/* Studios */}
        <div style={{ background: A_INK, color: A_PAPER, padding: '48px 22px' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 10, fontSize: 9 }}>Studios we work with</div>
          <div style={{ ...aDisp, fontSize: 28, lineHeight: 1.05, marginBottom: 24 }}>Five elements, <em style={{ fontStyle: 'italic', color: '#e8c89a' }}>five ateliers.</em></div>
          {[['Stone', 'Jaipur'], ['Metal', 'Moradabad'], ['Ceramic', 'Khurja']].map(([el, place]) => (
            <div key={el} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '14px 0', borderTop: `1px solid rgba(250,247,241,.15)` }}>
              <div>
                <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 4, fontSize: 9 }}>{el}</div>
                <div style={{ ...aDisp, fontSize: 22 }}>{place}</div>
              </div>
              <div style={{ ...aCaps, fontSize: 8, color: 'rgba(250,247,241,.4)' }}>2–4 yrs</div>
            </div>
          ))}
        </div>

        {/* Visit */}
        <div style={{ padding: '40px 22px' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 10, fontSize: 9 }}>Visit Us</div>
          <div style={{ ...aDisp, fontSize: 32, lineHeight: 1.05, marginBottom: 14 }}>By appointment, <em style={{ fontStyle: 'italic' }}>in Bombay.</em></div>
          <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 14, color: A_INK, marginBottom: 20 }}>
            A small showroom of the current collection, open weekdays. Tea is on us.
          </div>
          <div style={{ paddingTop: 16, borderTop: `1px solid ${A_INK}15`, fontSize: 12, lineHeight: 1.9, color: A_MUTED }}>
            <div><b style={{ color: A_INK }}>14 Forbes Street, Fort</b></div>
            <div>Bombay 400001 · India</div>
            <div>Mon — Fri · 11am – 6pm</div>
          </div>
          <div style={{ marginTop: 22, display: 'inline-flex', gap: 10, padding: '12px 22px', background: A_INK, color: A_PAPER, ...aCaps, fontSize: 10 }}>
            <span>Book a visit</span><span>→</span>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}

window.AtelierAbout = AtelierAbout;
window.AtelierAboutMobile = AtelierAboutMobile;
