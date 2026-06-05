/* Shared chrome — browser frame and mobile frame */

function BrowserChrome({ url = 'elementsofdecor.in', dark, children, height }) {
  const fg = dark ? '#e8e2d3' : '#5a544a';
  const bg = dark ? '#1f1d1a' : '#e8e2d3';
  return (
    <div style={{
      width: '100%', height: height || 'auto',
      background: bg, display: 'grid', gridTemplateRows: 'auto 1fr',
      fontFamily: 'Manrope, sans-serif',
    }}>
      <div style={{
        height: 44, display: 'flex', alignItems: 'center',
        padding: '0 18px', gap: 14,
        borderBottom: `1px solid ${dark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.06)'}`,
      }}>
        <div style={{ display: 'flex', gap: 7 }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: dark ? '#3a342d' : '#d7cdb8' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: dark ? '#3a342d' : '#d7cdb8' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: dark ? '#3a342d' : '#d7cdb8' }} />
        </div>
        <div style={{
          flex: 1, height: 26, borderRadius: 13, background: dark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.04)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, color: fg, letterSpacing: '.04em',
        }}>
          <span style={{ opacity: .5, marginRight: 6 }}>⌁</span>{url}
        </div>
        <div style={{ width: 60 }} />
      </div>
      <div style={{ overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

function MobileFrame({ children, height = 2400, bg = '#fff' }) {
  return (
    <div style={{
      width: 414, position: 'relative',
      background: '#0a0a0a', padding: 12, borderRadius: 50,
      boxShadow: '0 10px 40px rgba(0,0,0,.15)',
    }}>
      <div style={{
        background: bg, borderRadius: 40, overflow: 'hidden',
        height: height, position: 'relative',
      }}>
        {/* status bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 44,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 28px', fontSize: 14, fontWeight: 600, zIndex: 100,
          color: bg === '#fff' || bg === '#faf7f1' || bg === '#f3ead8' ? '#1b1916' : '#fff',
          fontFamily: 'SF Pro, system-ui, sans-serif',
        }}>
          <span>9:41</span>
          <span style={{
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
            top: 10, width: 110, height: 32, background: '#0a0a0a', borderRadius: 20,
          }} />
          <span style={{ display: 'flex', gap: 5, alignItems: 'center', fontSize: 13 }}>
            <span>􀙇</span><span>􀛨</span><span>􀛩</span>
          </span>
        </div>
        <div style={{ paddingTop: 44, height: '100%', overflow: 'hidden' }}>{children}</div>
      </div>
    </div>
  );
}

/* Tiny utility — render a thin gold/brass divider */
function Divider({ color = '#1b1916', opacity = 0.15 }) {
  return <div style={{ height: 1, background: color, opacity, width: '100%' }} />;
}

/* Render a placeholder image div with bg image */
function Img({ src, h, w = '100%', style = {}, position = 'center' }) {
  return (
    <div style={{
      width: w, height: h,
      background: `url(${src}) ${position}/cover no-repeat #e8e2d3`,
      ...style,
    }} />
  );
}

window.BrowserChrome = BrowserChrome;
window.MobileFrame = MobileFrame;
window.Divider = Divider;
window.Img = Img;
