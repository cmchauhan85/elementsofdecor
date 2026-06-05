/* ATELIER — Editorial / Field Note long-form article */

function AtelierEditorial() {
  return (
    <BrowserChrome url="elementsofdecor.in/stories/moradabad">
      <div style={{ background: A_PAPER, color: A_INK, fontFamily: 'Manrope, sans-serif' }}>
        <AtelierNav />

        {/* HERO */}
        <div style={{ position: 'relative', height: 740, background: `url(${R('assets/products/real/candle-3tier-2.jpg')}) center/cover no-repeat` }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,.6) 100%)' }} />
          <div style={{ position: 'absolute', top: 60, left: 60, ...aCaps, color: 'rgba(245,239,228,.7)', fontSize: 10 }}>
            Stories &nbsp;/&nbsp; <span style={{ color: '#fff' }}>Field Note · No. 07</span>
          </div>
          <div style={{ position: 'absolute', left: 60, right: 60, bottom: 80, color: '#f5efe4', maxWidth: 1000 }}>
            <div style={{ ...aCaps, color: '#e8c89a', marginBottom: 26 }}>Field Note &nbsp;·&nbsp; Moradabad &nbsp;·&nbsp; April 2026</div>
            <div style={{ ...aDisp, fontSize: 84, lineHeight: 1, marginBottom: 20 }}>
              Where the brass <em style={{ fontStyle: 'italic', color: '#e8c89a' }}>is folded by hand.</em>
            </div>
            <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 22, color: 'rgba(245,239,228,.78)', maxWidth: 700, lineHeight: 1.5 }}>
              A morning in the back-lanes of Moradabad, with the family of
              craftsmen who make our Lotus Tealight and the Flowering Stand.
            </div>
          </div>
        </div>

        {/* META */}
        <div style={{ padding: '40px 60px', borderBottom: `1px solid ${A_INK}10`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 36, fontSize: 12, color: A_MUTED, letterSpacing: '.05em' }}>
            <span><b style={{ color: A_INK, fontWeight: 600 }}>Words</b> &nbsp; Bunty Singh</span>
            <span><b style={{ color: A_INK, fontWeight: 600 }}>Photographs</b> &nbsp; Aman R.</span>
            <span><b style={{ color: A_INK, fontWeight: 600 }}>Read</b> &nbsp; 6 min</span>
            <span><b style={{ color: A_INK, fontWeight: 600 }}>Element</b> &nbsp; Metal</span>
          </div>
          <div style={{ display: 'flex', gap: 18, ...aCaps, color: A_MUTED, fontSize: 10 }}>
            <span>Share</span><span>Save</span>
          </div>
        </div>

        {/* BODY */}
        <div style={{ padding: '96px 60px 40px', display: 'grid', gridTemplateColumns: '200px 760px 1fr', gap: 60, justifyContent: 'center' }}>
          {/* sticky-ish left rail */}
          <div>
            <div style={{ ...aCaps, color: A_MUTED, marginBottom: 14, fontSize: 9 }}>In this note</div>
            {['I · The lane', 'II · The fold', 'III · The brass', 'IV · The pieces'].map(c => (
              <div key={c} style={{ ...aDisp, fontStyle: 'italic', fontSize: 14, color: A_MUTED, marginBottom: 8, paddingLeft: c.startsWith('I ') ? 0 : 0 }}>{c}</div>
            ))}
          </div>

          <div>
            {/* Drop cap intro */}
            <div style={{ ...aDisp, fontSize: 24, lineHeight: 1.65, marginBottom: 40 }}>
              <span style={{ ...aDisp, fontSize: 96, float: 'left', lineHeight: .8, marginRight: 16, marginTop: 6, color: A_OCHRE }}>M</span>
              oradabad is a city of foundries. You can smell it before you
              see it — the low, mineral warmth of brass being worked, the
              faint ammonia of the polish. We came here to find one family.
              We found a whole street.
            </div>

            <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 12 }}>I &nbsp;·&nbsp; The lane</div>
            <div style={{ ...aDisp, fontSize: 32, lineHeight: 1.15, marginBottom: 28 }}>
              The workshop is a doorway, not a building.
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: A_INK, marginBottom: 22 }}>
              You enter from the lane. Two steps down, your eyes adjust, and
              there it is — a courtyard the size of a parking spot, with four
              men sitting around a low fire, each one folding a sheet of
              brass over a wooden form.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: A_INK, marginBottom: 38 }}>
              The form is the shape of a lotus petal. The brass is the
              thickness of a fingernail. The man on the left, Raju, has been
              doing this for thirty-one years. He doesn't measure anything.
            </p>

            {/* Pull quote */}
            <div style={{ padding: '40px 0', borderTop: `1px solid ${A_INK}20`, borderBottom: `1px solid ${A_INK}20`, margin: '40px 0', textAlign: 'center' }}>
              <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 38, lineHeight: 1.3, color: A_INK, marginBottom: 18 }}>
                "The hand remembers what the eye forgets."
              </div>
              <div style={{ ...aCaps, color: A_MUTED, fontSize: 10 }}>— Raju, on measuring without measuring</div>
            </div>

            {/* Image cluster */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, margin: '40px 0' }}>
              <div style={{ aspectRatio: '4/3', background: `url(${R('assets/products/real/candle-3tier-2.jpg')}) center/cover no-repeat ${A_DUST}` }} />
              <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 16 }}>
                <div style={{ background: `url(${R('assets/products/real/aurum-1.jpg')}) center/cover no-repeat ${A_DUST}` }} />
                <div style={{ background: `url(${R('assets/products/real/aurum-2.jpg')}) center/cover no-repeat ${A_DUST}` }} />
              </div>
            </div>
            <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 13, color: A_MUTED, marginBottom: 40, textAlign: 'center' }}>
              ↑ Raju at the form. The wooden block, hand-cut. The lotus, finished.
            </div>

            <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 12 }}>II &nbsp;·&nbsp; The fold</div>
            <div style={{ ...aDisp, fontSize: 32, lineHeight: 1.15, marginBottom: 28 }}>
              You hear the work before you understand it.
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: A_INK, marginBottom: 22 }}>
              The sound of a brass sheet being folded over wood is a
              specific sound. Not a clang. Not a chime. A soft, decisive
              thump — followed by a slide. Thump, slide. Thump, slide. Four
              men, slightly out of phase, making something like a quiet song.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: A_INK, marginBottom: 22 }}>
              Each petal takes about ninety seconds. A finished Lotus
              Tealight is twelve petals. So: roughly twenty minutes of
              folding for what arrives at your door.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: A_INK, marginBottom: 40 }}>
              That doesn't include the polish, or the powder-coat in white,
              or the final inspection. But the folding — the part that
              actually makes the object — is twenty minutes of one man's
              attention.
            </p>
          </div>

          <div /> {/* right gutter */}
        </div>

        {/* SHOP THE STORY — inline products */}
        <div style={{ background: A_DUST, padding: '96px 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
            <div>
              <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>Shop the story</div>
              <div style={{ ...aDisp, fontSize: 44, lineHeight: 1.05 }}>From this lane, to your room.</div>
            </div>
            <div style={{ ...aCaps, color: A_INK, fontSize: 10, borderBottom: `1px solid ${A_INK}`, paddingBottom: 4 }}>All metal pieces →</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {ALL_PRODUCTS.filter(p => p.el === 'Metal').slice(0, 3).map(p => <ProductCard key={p.n} p={p} />)}
          </div>
        </div>

        {/* MORE FIELD NOTES */}
        <div style={{ padding: '96px 60px 80px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}>
            <div style={{ ...aDisp, fontSize: 48, lineHeight: 1.05 }}>More from the field.</div>
            <div style={{ ...aCaps, color: A_INK, fontSize: 10, borderBottom: `1px solid ${A_INK}`, paddingBottom: 4 }}>All stories →</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
            <JournalCard tag="Field note · Jaipur" title="One block, one bowl" meta="8 min read" img="assets/products/real/ruffle-3.jpg" />
            <JournalCard tag="At home with" title="Sneh's apartment, Bandra" meta="A photo essay" img="assets/products/real/lotus-1.jpg" />
            <JournalCard tag="On light" title="The case for one candle" meta="3 min read" img="assets/products/real/oria-1.jpg" />
          </div>
        </div>

        <AtelierFooter />
      </div>
    </BrowserChrome>
  );
}

/* ──────────────────────── MOBILE EDITORIAL ──────────────────────── */
function AtelierEditorialMobile() {
  return (
    <MobileFrame height={2800} bg={A_PAPER}>
      <div style={{ height: '100%', overflow: 'hidden', color: A_INK, fontFamily: 'Manrope, sans-serif', fontSize: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px' }}>
          <span style={{ fontSize: 18 }}>←</span>
          <div style={{ ...aCaps, fontSize: 9, color: A_MUTED }}>STORIES / FIELD NOTE</div>
          <span style={{ fontSize: 14 }}>⌕</span>
        </div>

        {/* Hero */}
        <div style={{ position: 'relative', height: 520, background: `url(${R('assets/products/real/candle-3tier-2.jpg')}) center/cover no-repeat` }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,.7) 100%)' }} />
          <div style={{ position: 'absolute', left: 22, bottom: 26, color: '#f5efe4' }}>
            <div style={{ ...aCaps, color: '#e8c89a', marginBottom: 14, fontSize: 9 }}>Field Note · Moradabad · April 2026</div>
            <div style={{ ...aDisp, fontSize: 40, lineHeight: 1, marginBottom: 10 }}>Where the brass</div>
            <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 40, lineHeight: 1, color: '#e8c89a' }}>is folded by hand.</div>
          </div>
        </div>

        {/* Meta */}
        <div style={{ padding: '20px 22px', borderBottom: `1px solid ${A_INK}10`, fontSize: 11, color: A_MUTED, letterSpacing: '.04em' }}>
          Bunty Singh &nbsp;·&nbsp; 6 min &nbsp;·&nbsp; <span style={{ color: A_OCHRE }}>Metal</span>
        </div>

        {/* Body */}
        <div style={{ padding: '32px 22px' }}>
          <div style={{ ...aDisp, fontSize: 19, lineHeight: 1.6, marginBottom: 28 }}>
            <span style={{ ...aDisp, fontSize: 64, float: 'left', lineHeight: .8, marginRight: 12, marginTop: 4, color: A_OCHRE }}>M</span>
            oradabad is a city of foundries. You can smell it before you
            see it — the low, mineral warmth of brass being worked.
          </div>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 8, fontSize: 9 }}>I · The lane</div>
          <div style={{ ...aDisp, fontSize: 24, lineHeight: 1.2, marginBottom: 18 }}>The workshop is a doorway, not a building.</div>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: A_INK, marginBottom: 18 }}>
            You enter from the lane. Two steps down, your eyes adjust, and there it is —
            a courtyard the size of a parking spot, with four men sitting around a low fire,
            each one folding a sheet of brass over a wooden form.
          </p>

          {/* Pull quote */}
          <div style={{ padding: '24px 0', borderTop: `1px solid ${A_INK}20`, borderBottom: `1px solid ${A_INK}20`, margin: '24px 0', textAlign: 'center' }}>
            <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 22, lineHeight: 1.35 }}>
              "The hand remembers what the eye forgets."
            </div>
            <div style={{ ...aCaps, color: A_MUTED, fontSize: 8, marginTop: 10 }}>— Raju</div>
          </div>

          {/* Image */}
          <div style={{ aspectRatio: '4/3', background: `url(${R('assets/products/real/candle-3tier-2.jpg')}) center/cover no-repeat ${A_DUST}`, margin: '24px 0 8px' }} />
          <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 11, color: A_MUTED, textAlign: 'center', marginBottom: 28 }}>↑ Raju at the form.</div>

          <p style={{ fontSize: 14, lineHeight: 1.75, color: A_INK }}>
            Each petal takes about ninety seconds. A finished Lotus Tealight is twelve
            petals. Twenty minutes of folding for what arrives at your door.
          </p>
        </div>

        {/* Shop the story */}
        <div style={{ background: A_DUST, padding: '36px 22px' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 10, fontSize: 9 }}>Shop the story</div>
          <div style={{ ...aDisp, fontSize: 22, lineHeight: 1.1, marginBottom: 18 }}>From this lane, to your room.</div>
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {ALL_PRODUCTS.filter(p => p.el === 'Metal').slice(0, 4).map(p => (
              <div key={p.n} style={{ flex: '0 0 150px' }}>
                <div style={{ aspectRatio: '4/5', background: `url(${R(p.img)}) center/cover no-repeat`, marginBottom: 8 }} />
                <div style={{ ...aDisp, fontSize: 14, lineHeight: 1.1 }}>{p.title}</div>
                <div style={{ fontSize: 10, color: A_MUTED }}>{p.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* More */}
        <div style={{ padding: '36px 22px' }}>
          <div style={{ ...aDisp, fontSize: 24, marginBottom: 18 }}>More from the field.</div>
          <JournalCard tag="Field note · Jaipur" title="One block, one bowl" meta="8 min read" img="assets/products/real/ruffle-3.jpg" />
        </div>
      </div>
    </MobileFrame>
  );
}

window.AtelierEditorial = AtelierEditorial;
window.AtelierEditorialMobile = AtelierEditorialMobile;
