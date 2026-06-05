/* ATELIER — PDP / Product Detail
   Ruffle Urli as the worked example. */

function AtelierPDP() {
  return (
    <BrowserChrome url="elementsofdecor.in/stone/ruffle-urli">
      <div style={{ background: A_PAPER, color: A_INK, fontFamily: 'Manrope, sans-serif' }}>
        <AtelierNav />

        {/* Breadcrumb */}
        <div style={{ padding: '20px 60px', borderBottom: `1px solid ${A_INK}10`, ...aCaps, color: A_MUTED, fontSize: 10 }}>
          Shop &nbsp;/&nbsp; Stone &nbsp;/&nbsp; <span style={{ color: A_INK }}>Ruffle Urli</span>
        </div>

        {/* Hero — gallery + info, two columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 480px', gap: 60, padding: '40px 60px 80px' }}>
          {/* Gallery */}
          <div>
            <div style={{
              aspectRatio: '4/5',
              background: `url(${R('assets/products/real/ruffle-1.jpg')}) center/cover no-repeat ${A_DUST}`,
              marginBottom: 14, position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 18, left: 18, ...aCaps, color: '#fff', fontSize: 9, mixBlendMode: 'difference' }}>01</div>
              <div style={{ position: 'absolute', top: 18, right: 18, ...aCaps, color: '#fff', fontSize: 9, mixBlendMode: 'difference' }}>Stone</div>
              {/* Carousel arrows */}
              <div style={{ position: 'absolute', bottom: 18, right: 18, display: 'flex', gap: 8 }}>
                <span style={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,.6)', borderRadius: '50%', display: 'grid', placeItems: 'center', color: '#fff', cursor: 'pointer', background: 'rgba(0,0,0,.2)' }}>←</span>
                <span style={{ width: 36, height: 36, border: '1px solid rgba(255,255,255,.6)', borderRadius: '50%', display: 'grid', placeItems: 'center', color: '#fff', cursor: 'pointer', background: 'rgba(0,0,0,.2)' }}>→</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
              {[
                'assets/products/real/ruffle-1.jpg',
                'assets/products/real/ruffle-2.jpg',
                'assets/products/real/ruffle-3.jpg',
                'assets/products/real/ruffle-4.jpg',
                'assets/products/real/lotus-1.jpg',
              ].map((src, i) => (
                <div key={i} style={{
                  aspectRatio: '1', background: `url(${R(src)}) center/cover no-repeat ${A_DUST}`,
                  border: i === 0 ? `1px solid ${A_OCHRE}` : `1px solid transparent`,
                  cursor: 'pointer',
                }} />
              ))}
            </div>
          </div>

          {/* Info column */}
          <div>
            <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 12 }}>Stone &nbsp;·&nbsp; Urlis &amp; Bowls</div>
            <div style={{ ...aDisp, fontSize: 56, lineHeight: 1.0, marginBottom: 10 }}>Ruffle Urli</div>
            <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 20, color: A_MUTED, marginBottom: 28 }}>
              The strength of stone, gathered around water.
            </div>

            {/* price + availability */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 28 }}>
              <div style={{ ...aDisp, fontSize: 28, color: A_INK }}>₹ 6,800</div>
              <div style={{ fontSize: 11, color: A_OCHRE, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 600 }}>· In stock</div>
            </div>

            {/* size selector */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ ...aCaps, color: A_MUTED, marginBottom: 12, fontSize: 10 }}>Size</div>
              <div style={{ display: 'flex', gap: 10 }}>
                {[['7"', '₹ 4,200'], ['9"', '₹ 6,800', true], ['12"', '₹ 11,200']].map(([s, p, active]) => (
                  <div key={s} style={{
                    flex: 1, padding: '14px 12px', textAlign: 'center',
                    border: active ? `1px solid ${A_OCHRE}` : `1px solid ${A_INK}20`,
                    background: active ? A_DUST : A_PAPER, cursor: 'pointer',
                  }}>
                    <div style={{ ...aDisp, fontSize: 22, marginBottom: 2 }}>{s}</div>
                    <div style={{ fontSize: 11, color: A_MUTED }}>{p}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* finish selector */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ ...aCaps, color: A_MUTED, marginBottom: 12, fontSize: 10 }}>Finish</div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                {[['#ebe5d9', 'Cream', true], ['#3a342d', 'Charcoal'], ['#c4ad8e', 'Pink stone']].map(([c, label, active]) => (
                  <div key={label} style={{ textAlign: 'center', cursor: 'pointer' }}>
                    <div style={{ width: 36, height: 36, background: c, borderRadius: '50%', border: active ? `2px solid ${A_OCHRE}` : `1px solid ${A_INK}20`, marginBottom: 6 }} />
                    <div style={{ fontSize: 10, color: active ? A_INK : A_MUTED, letterSpacing: '.04em' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 36 }}>
              <div style={{ flex: 1, padding: '18px 24px', background: A_INK, color: A_PAPER, textAlign: 'center', ...aCaps, fontSize: 11, cursor: 'pointer' }}>
                Add to the bag &nbsp; · &nbsp; ₹ 6,800
              </div>
              <div style={{ padding: '18px 22px', border: `1px solid ${A_INK}`, color: A_INK, textAlign: 'center', cursor: 'pointer', fontSize: 18 }}>♡</div>
            </div>

            <div style={{ fontSize: 12, color: A_MUTED, lineHeight: 1.6, marginBottom: 28, paddingBottom: 28, borderBottom: `1px solid ${A_INK}10` }}>
              Hand-carved to order. Ships in 6 weeks from Jaipur.
              <br />Complimentary white-glove delivery within India.
            </div>

            {/* Accordion */}
            {[
              { h: 'The Story', body: 'Carved from a single block of Indian white marble in a small studio outside Jaipur.', open: true },
              { h: 'Specifications', body: '9" diameter · 3.5" tall · Approx 2.4 kg · Solid marble · Hand-finished.' },
              { h: 'Care', body: 'Wipe with a soft dry cloth. Use coasters under wet vessels. Never machine-wash.' },
              { h: 'Shipping &amp; Returns', body: 'Made to order. 6 weeks. Free white-glove delivery. 14-day returns on stock items.' },
            ].map(a => (
              <div key={a.h} style={{ borderTop: `1px solid ${A_INK}10`, padding: '20px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <div style={{ ...aDisp, fontSize: 18 }}>{a.h}</div>
                  <div style={{ fontSize: 18, color: A_MUTED }}>{a.open ? '−' : '+'}</div>
                </div>
                {a.open && (
                  <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 15, color: A_MUTED, lineHeight: 1.6, marginTop: 14 }} dangerouslySetInnerHTML={{ __html: a.body }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* THE STORY — full-bleed editorial */}
        <div style={{ background: A_DUST, padding: '120px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div style={{ aspectRatio: '4/5', background: `url(${R('assets/products/real/ruffle-3.jpg')}) center/cover no-repeat ${A_PAPER}` }} />
          <div>
            <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 18 }}>On Material &nbsp;·&nbsp; No. 04</div>
            <div style={{ ...aDisp, fontSize: 56, lineHeight: 1.05, marginBottom: 28 }}>
              Marble<br/>
              <em style={{ fontStyle: 'italic', color: A_MUTED }}>remembers.</em>
            </div>
            <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 18, lineHeight: 1.7, color: A_INK, marginBottom: 28 }}>
              Every Ruffle Urli is hand-carved from a single block of Indian
              white marble. The grain is the geology of the place it came
              from — no two pieces are the same, and they are not meant to be.
            </div>
            <div style={{ display: 'flex', gap: 36, paddingTop: 20, borderTop: `1px solid ${A_INK}20`, fontSize: 12, letterSpacing: '.06em', color: A_MUTED }}>
              <span><b style={{ color: A_INK, fontWeight: 600 }}>Origin</b> &nbsp; Rajasthan</span>
              <span><b style={{ color: A_INK, fontWeight: 600 }}>Craft</b> &nbsp; Hand-carved</span>
              <span><b style={{ color: A_INK, fontWeight: 600 }}>Lead time</b> &nbsp; 6 weeks</span>
            </div>
            <div style={{ marginTop: 40, display: 'inline-flex', alignItems: 'center', gap: 14, paddingBottom: 6, borderBottom: `1px solid ${A_INK}` }}>
              <span style={{ ...aCaps }}>Read the field note</span>
              <span>→</span>
            </div>
          </div>
        </div>

        {/* SPECIFICATIONS */}
        <div style={{ padding: '96px 60px 80px' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>Specifications</div>
          <div style={{ ...aDisp, fontSize: 44, marginBottom: 40 }}>The numbers, openly.</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 32 }}>
            {[
              ['Material', 'Solid Indian white marble'],
              ['Dimensions', '9" diameter · 3.5" tall'],
              ['Weight', '≈ 2.4 kg'],
              ['Finish', 'Hand-polished, semi-matte'],
              ['Origin', 'Jaipur, Rajasthan'],
              ['Craft', 'Hand-carved by one artisan'],
              ['Lead time', '6 weeks from order'],
              ['Quantity in studio', '4 ready · 8 to make'],
            ].map(([k, v]) => (
              <div key={k} style={{ paddingTop: 18, borderTop: `1px solid ${A_INK}15` }}>
                <div style={{ ...aCaps, color: A_MUTED, marginBottom: 8, fontSize: 9 }}>{k}</div>
                <div style={{ ...aDisp, fontSize: 18, lineHeight: 1.3 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PAIRS WITH */}
        <div style={{ padding: '40px 60px 120px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}>
            <div>
              <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 14 }}>Pairs with</div>
              <div style={{ ...aDisp, fontSize: 44, lineHeight: 1.05 }}>For the same surface.</div>
            </div>
            <div style={{ ...aCaps, color: A_INK, fontSize: 10, borderBottom: `1px solid ${A_INK}`, paddingBottom: 4 }}>View more →</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {ALL_PRODUCTS.slice(1, 5).map(p => <ProductCard key={p.n} p={p} />)}
          </div>
        </div>

        <AtelierFooter />
      </div>
    </BrowserChrome>
  );
}

/* ──────────────────────── MOBILE PDP ──────────────────────── */
function AtelierPDPMobile() {
  return (
    <MobileFrame height={2700} bg={A_PAPER}>
      <div style={{ height: '100%', overflow: 'hidden', color: A_INK, fontFamily: 'Manrope, sans-serif', fontSize: 14, position: 'relative' }}>

        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px' }}>
          <span style={{ fontSize: 18 }}>←</span>
          <div style={{ ...aCaps, fontSize: 9, color: A_MUTED }}>STONE / RUFFLE URLI</div>
          <span style={{ fontSize: 14 }}>♡</span>
        </div>

        {/* Image */}
        <div style={{
          aspectRatio: '4/5',
          background: `url(${R('assets/products/real/ruffle-1.jpg')}) center/cover no-repeat ${A_DUST}`,
          position: 'relative', marginBottom: 12,
        }}>
          <div style={{ position: 'absolute', top: 14, right: 14, ...aCaps, color: '#fff', fontSize: 8, mixBlendMode: 'difference' }}>Stone</div>
          {/* dots */}
          <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6 }}>
            {[0, 1, 2, 3, 4].map(i => (
              <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: i === 0 ? '#fff' : 'rgba(255,255,255,.4)' }} />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div style={{ display: 'flex', gap: 6, padding: '0 22px 18px', overflow: 'hidden' }}>
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{
              flex: 1, aspectRatio: '1', background: A_DUST,
              border: i === 1 ? `1px solid ${A_OCHRE}` : 'none',
            }} />
          ))}
        </div>

        {/* Info */}
        <div style={{ padding: '12px 22px 28px' }}>
          <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 8, fontSize: 9 }}>Stone · Urlis &amp; Bowls</div>
          <div style={{ ...aDisp, fontSize: 36, lineHeight: 1, marginBottom: 6 }}>Ruffle Urli</div>
          <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 15, color: A_MUTED, marginBottom: 20 }}>
            The strength of stone, gathered around water.
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 22 }}>
            <div style={{ ...aDisp, fontSize: 22 }}>₹ 6,800</div>
            <div style={{ ...aCaps, color: A_OCHRE, fontSize: 8 }}>· In stock</div>
          </div>

          {/* size */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ ...aCaps, color: A_MUTED, marginBottom: 10, fontSize: 8 }}>Size</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[['7"', false], ['9"', true], ['12"', false]].map(([s, active]) => (
                <div key={s} style={{
                  flex: 1, padding: '10px', textAlign: 'center',
                  border: active ? `1px solid ${A_OCHRE}` : `1px solid ${A_INK}20`,
                  background: active ? A_DUST : 'transparent', ...aDisp, fontSize: 16,
                }}>{s}</div>
              ))}
            </div>
          </div>

          {/* finish */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ ...aCaps, color: A_MUTED, marginBottom: 10, fontSize: 8 }}>Finish · Cream</div>
            <div style={{ display: 'flex', gap: 10 }}>
              {[['#ebe5d9', true], ['#3a342d', false], ['#c4ad8e', false]].map(([c, active], i) => (
                <div key={i} style={{ width: 30, height: 30, background: c, borderRadius: '50%', border: active ? `2px solid ${A_OCHRE}` : `1px solid ${A_INK}20` }} />
              ))}
            </div>
          </div>

          <div style={{ fontSize: 11, color: A_MUTED, lineHeight: 1.55, marginBottom: 22, paddingBottom: 22, borderBottom: `1px solid ${A_INK}10` }}>
            Made to order. Ships in 6 weeks from Jaipur. Free white-glove delivery.
          </div>

          {[
            { h: 'The Story', open: true, body: 'Carved from a single block of Indian white marble in a small studio outside Jaipur.' },
            { h: 'Specifications', body: '9" × 3.5" · ≈ 2.4 kg · Solid marble.' },
            { h: 'Care', body: 'Wipe with a soft dry cloth.' },
            { h: 'Shipping & Returns', body: '6 weeks lead time. 14-day returns on stock.' },
          ].map(a => (
            <div key={a.h} style={{ borderTop: `1px solid ${A_INK}10`, padding: '14px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ ...aDisp, fontSize: 16 }}>{a.h}</div>
                <span style={{ fontSize: 16, color: A_MUTED }}>{a.open ? '−' : '+'}</span>
              </div>
              {a.open && <div style={{ ...aDisp, fontStyle: 'italic', fontSize: 13, color: A_MUTED, lineHeight: 1.6, marginTop: 8 }}>{a.body}</div>}
            </div>
          ))}
        </div>

        {/* Pairs with — horizontal scroll */}
        <div style={{ padding: '32px 0 24px', background: A_DUST }}>
          <div style={{ padding: '0 22px 18px' }}>
            <div style={{ ...aCaps, color: A_OCHRE, marginBottom: 6, fontSize: 9 }}>Pairs with</div>
            <div style={{ ...aDisp, fontSize: 22 }}>For the same surface.</div>
          </div>
          <div style={{ display: 'flex', gap: 12, padding: '0 22px', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {ALL_PRODUCTS.slice(1, 5).map(p => (
              <div key={p.n} style={{ flex: '0 0 160px' }}>
                <div style={{ aspectRatio: '4/5', background: `url(${R(p.img)}) center/cover no-repeat`, marginBottom: 8 }} />
                <div style={{ ...aDisp, fontSize: 14, lineHeight: 1.1 }}>{p.title}</div>
                <div style={{ fontSize: 10, color: A_MUTED }}>{p.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky add to bag — absolute at bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 22px',
          background: 'rgba(250,247,241,.97)', backdropFilter: 'blur(8px)',
          borderTop: `1px solid ${A_INK}15`, display: 'flex', gap: 10,
        }}>
          <div style={{ flex: 1, padding: '14px 18px', background: A_INK, color: A_PAPER, textAlign: 'center', ...aCaps, fontSize: 10 }}>
            Add to the bag · ₹ 6,800
          </div>
          <div style={{ padding: '14px 16px', border: `1px solid ${A_INK}`, fontSize: 16 }}>♡</div>
        </div>

      </div>
    </MobileFrame>
  );
}

window.AtelierPDP = AtelierPDP;
window.AtelierPDPMobile = AtelierPDPMobile;
