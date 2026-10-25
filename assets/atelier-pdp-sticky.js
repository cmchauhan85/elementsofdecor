/*
 * Sticky Add-to-bag bar for the product page (mobile AND desktop).
 * v8: mobile bar also shows price + Add (outlined) + Buy Now (solid) side by side, same as the page buttons.
 * v9 (22 Oct 2026): the price now follows the selected size. The old check `window.PUB_SUB_EVENTS` was always false because PUB_SUB_EVENTS is a top-level const (not a window property), so the bar never subscribed to variantChange.
 */
(function () {
  var dcss = '.atelier-pdp-sticky__title{display:none}' +
    '@media screen and (max-width:749px){' +
    '.atelier-pdp-sticky.is-visible{gap:.8rem;align-items:center}' +
    '.atelier-pdp-sticky .atelier-pdp-sticky__price{flex:0 0 auto}' +
    '.atelier-pdp-sticky .atelier-pdp-sticky__submit,.atelier-pdp-sticky .atelier-pdp-sticky__buy{display:inline-flex;align-items:center;justify-content:center;flex:1 1 0;min-width:0;width:auto;height:40px;min-height:0;padding:0 .6rem;border-radius:0;font-family:var(--font-body-family);font-weight:700;font-size:13px;letter-spacing:.3px;text-transform:none;line-height:1.2;white-space:nowrap;cursor:pointer;box-sizing:border-box}' +
    '.atelier-pdp-sticky .atelier-pdp-sticky__submit{background:#fff;color:#14213d;border:1px solid #14213d}' +
    '.atelier-pdp-sticky .atelier-pdp-sticky__buy{background:var(--a-ochre);color:#fff;border:1px solid var(--a-ochre)}' +
    '.atelier-pdp-sticky .atelier-pdp-sticky__submit[disabled],.atelier-pdp-sticky .atelier-pdp-sticky__buy[disabled]{opacity:.5;cursor:default}' +
    '}' +
    '@media screen and (min-width:750px){' +
    '.atelier-pdp-sticky.is-visible{position:fixed;inset:auto 0 0;z-index:5;display:flex;align-items:center;gap:1.6rem;padding:.7rem max(3rem,calc((100vw - 120rem)/2 + 3rem));background:rgb(var(--color-background,255,255,255));border-top:1px solid #d9d0c3;box-shadow:0 -4px 18px rgba(20,33,61,.07)}' +
    '.atelier-pdp-sticky__title{display:block;margin-right:auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:var(--font-heading-family);font-size:1.7rem;color:#14213d}' +
    '.atelier-pdp-sticky .price{font-size:1.9rem;align-self:center;white-space:nowrap}' +
    '.atelier-pdp-sticky__submit,.atelier-pdp-sticky__buy{flex:0 0 19rem;display:inline-flex;align-items:center;justify-content:center;border-radius:0;font-family:var(--font-body-family);font-weight:var(--font-body-weight-bold);font-size:1.2rem;letter-spacing:.14em;text-transform:uppercase;padding:.9rem 1.2rem;min-height:0;line-height:1.2;cursor:pointer;box-sizing:border-box}' +
    '.atelier-pdp-sticky__submit{background:#fff;color:#14213d;border:1px solid #14213d}' +
    '.atelier-pdp-sticky__buy{background:var(--a-ochre);color:#fff;border:1px solid var(--a-ochre)}' +
    '.atelier-pdp-sticky__submit[disabled],.atelier-pdp-sticky__buy[disabled]{opacity:.5;cursor:default}' +
    'body.has-sticky-add-to-bag a.whatsapp-bubble,body.has-sticky-add-to-bag .whatsapp-bubble{bottom:72px!important}' +
    '}';
  var ds = document.createElement('style'); ds.textContent = dcss; document.head.appendChild(ds);

  function bind(bar) {
    if (bar.dataset.stickyBound) return;
    bar.dataset.stickyBound = 'true';

    var sectionId = bar.dataset.section;
    var priceDestination = bar.querySelector('.atelier-pdp-sticky__price');
    var submitButton = bar.querySelector('.atelier-pdp-sticky__submit');

    var h1 = document.querySelector('.atl-h1') || document.querySelector('product-info h1');
    if (h1 && !bar.querySelector('.atelier-pdp-sticky__title')) {
      var c = h1.cloneNode(true);
      var sub = c.querySelector('.atl-h1__sub'); if (sub) sub.remove();
      var ti = document.createElement('span');
      ti.className = 'atelier-pdp-sticky__title';
      ti.textContent = (c.textContent || '').replace(/\s+/g, ' ').trim();
      bar.insertBefore(ti, bar.firstChild);
    }

    /* Buy Now: forwards the click to the page's real Buy Now button */
    var buyBtn = null;
    if (document.querySelector('[data-buy-now]')) {
      buyBtn = document.createElement('button');
      buyBtn.type = 'button';
      buyBtn.className = 'atelier-pdp-sticky__buy';
      buyBtn.textContent = 'Buy Now';
      buyBtn.addEventListener('click', function () {
        var real = document.querySelector('[data-buy-now]');
        if (real && !real.disabled) real.click();
      });
      bar.appendChild(buyBtn);
    }
    function syncBuy() {
      var real = document.querySelector('[data-buy-now]');
      if (buyBtn) buyBtn.toggleAttribute('disabled', !real || real.disabled);
    }

    function trigger() {
      return document.getElementById('ProductSubmitButton-' + sectionId);
    }

    function update() {
      var t = trigger();
      if (!t) return;
      var r = t.getBoundingClientRect();
      var onScreen = r.height > 0 && r.bottom > 0 && r.top < window.innerHeight;
      bar.classList.toggle('is-visible', !onScreen);
      document.body.classList.toggle('has-sticky-add-to-bag', !onScreen);
      if (submitButton) submitButton.toggleAttribute('disabled', t.hasAttribute('disabled'));
      syncBuy();
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    window.addEventListener('load', update);
    var info = document.querySelector('product-info') || document.body;
    if ('MutationObserver' in window) {
      new MutationObserver(update).observe(info, { childList: true, subtree: true, attributes: true, attributeFilter: ['disabled'] });
    }
    update();
    setTimeout(update, 400);
    setTimeout(update, 1200);

    var priceSource = document.getElementById('price-' + sectionId);
    if (priceDestination && priceSource) {
      priceDestination.innerHTML = priceSource.innerHTML;
    }

    /* PUB_SUB_EVENTS is a top-level const in constants.js, so it is NOT window.PUB_SUB_EVENTS; test it with typeof. */
    if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
      subscribe(PUB_SUB_EVENTS.variantChange, function (event) {
        if (!event || !event.data || event.data.sectionId !== sectionId) return;

        var source = event.data.html.getElementById('price-' + sectionId);
        if (source && priceDestination) {
          priceDestination.innerHTML = source.innerHTML;
        }
        update();
        [150, 600].forEach(function (ms) { setTimeout(update, ms); });
      });
    }
  }

  function init(root) {
    (root || document).querySelectorAll('.atelier-pdp-sticky').forEach(bind);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(); });
  } else {
    init();
  }

  document.addEventListener('shopify:section:load', function (event) { init(event.target); });
})();

/* "Where to place it" pill chips (v6) + friendlier label (v9). */
(function () {
  var s = document.createElement('style');
  s.textContent = '.product .atl-lives{margin:0 0 2.4rem}' +
    '.product .atl-lives ul{display:flex;flex-wrap:wrap;gap:.6rem;margin:.4rem 0 0;padding:0;list-style:none}' +
    '.product .atl-lives li{display:inline-flex;align-items:center;padding:.5rem 1.2rem;border:1px solid #d9d0c3;border-radius:999px;background:#f5f2eb;font-family:var(--font-body-family);font-style:normal;font-size:1.3rem;font-weight:500;line-height:1.3;letter-spacing:.01em;color:#14213d;cursor:default}';
  document.head.appendChild(s);
  /* The label text lives in templates/product.json (block "lives"); swap it here until that block is edited. */
  function relabel() {
    document.querySelectorAll('.atl-lives .atl-eye').forEach(function (e) {
      if (/where it lives/i.test(e.textContent)) e.textContent = 'Where to place it';
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', relabel); else relabel();
})();

/* Buy buttons (v7): Add (outlined) and Buy Now (solid) side by side, equal width. Decided 14 Oct. */
(function () {
  var s = document.createElement('style');
  s.textContent = 'body .product__buy-buttons{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;gap:.8rem!important}' +
    'body .product__buy-buttons>*{margin:0!important;flex:1 1 0!important;min-width:0!important;width:auto!important}';
  document.head.appendChild(s);
})();

/*
 * PDP order (v10, decided 14 Oct, option 2): the size diagram(s) and "Where to place it" sit BELOW the
 * buttons and the trust / dispatch / delivery blocks, so Add + Buy Now come about 1.5 screens down on a phone.
 * A one-line size ("Size 42 × 27.5 × 7.5 cm · 0.41 kg") sits under the price and follows the selected size.
 * v11: round pieces read "Ø 24.1 × 6.6 cm" (diameter × height) instead of repeating the diameter.
 */
(function () {
  var s = document.createElement('style');
  s.textContent = '.pdp-size{margin:.2rem 0 1.2rem;font-size:1.4rem;font-weight:500;color:#14213d}';
  document.head.appendChild(s);

  function run() {
    var info = document.querySelector('.product__info-container');
    if (!info || info.dataset.pdpOrder) return;
    var figs = [].slice.call(info.querySelectorAll('.atl-dims'));
    var lives = info.querySelector('.atl-lives');
    if (!figs.length && !lives) return;
    var tails = ['.atl-trust', '.atelier-pdp-dispatch', '.atelier-delivery-estimate']
      .map(function (q) { return info.querySelector(q); })
      .filter(function (e) { return e; });
    if (!tails.length) return;
    var tail = tails.sort(function (a, b) { return (a.compareDocumentPosition(b) & 4) ? -1 : 1; })[tails.length - 1];
    info.dataset.pdpOrder = '1';

    var ref = tail;
    if (lives) { ref.parentNode.insertBefore(lives, ref.nextSibling); ref = lives; }
    figs.forEach(function (f) { ref.parentNode.insertBefore(f, ref.nextSibling); ref = f; });

    var anchor = info.querySelector('.product__tax') || info.querySelector('.product__price-block');
    if (!anchor || !figs.length) return;
    var line = document.createElement('p');
    line.className = 'pdp-size';
    anchor.parentNode.insertBefore(line, anchor.nextSibling);
    function sync() {
      var f = info.querySelector('.atl-dims.is-on') || figs[0];
      var t = f.textContent || '';
      var nums = (t.match(/[0-9.]+ cm/g) || []).map(function (x) { return x.replace(' cm', ''); });
      var kg = (t.match(/[0-9.]+ kg/) || [''])[0];
      if (nums.length < 2) { line.hidden = true; return; }
      var round = /Ø/.test(t);
      if (nums.length === 3 && nums[0] === nums[2]) { nums = [nums[0], nums[1]]; round = true; }
      if (round) nums[0] = 'Ø ' + nums[0];
      line.hidden = false;
      line.textContent = 'Size ' + nums.join(' × ') + ' cm' + (kg ? ' · ' + kg : '');
    }
    sync();
    document.addEventListener('change', function (e) {
      if (e.target && e.target.matches && e.target.matches('variant-selects input[type=radio]')) setTimeout(sync, 30);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();

/*
 * Natural-materials note (v13). The note is rendered by snippets/atelier-pdp-milestone.liquid from the product
 * metafield atelier.material_note (blank = general placeholder text). This block styles it and moves it under the
 * "Hand-finished" microcopy.
 */
(function () {
  var s = document.createElement('style');
  s.textContent = '.pdp-natnote{margin:1.2rem 0 0;padding:1rem 1.4rem;border-left:2px solid #cf4a25;background:#f5f2eb;font-size:1.3rem;line-height:1.5;color:#14213d}' +
    '.pdp-natnote strong{display:block;margin:0 0 .2rem;font-size:1.3rem;font-weight:700;letter-spacing:.02em}';
  document.head.appendChild(s);
  function run() {
    var info = document.querySelector('.product__info-container');
    var note = info && info.querySelector('.pdp-natnote');
    var micro = info && info.querySelector('.product__microcopy');
    if (note && micro) micro.parentNode.insertBefore(note, micro.nextSibling);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();

/*
 * Sold-out guard + back-in-stock capture (v3).
 */
(function () {
  var css = '.atl-nm{margin:.9rem 0 0;padding:1rem 1.1rem;border:1px solid #d9d0c3;border-radius:.6rem;background:#f5f2eb;color:#14213d;scroll-margin-top:30vh}' +
    '.atl-nm[hidden],.atl-nm [hidden]{display:none}.atl-nm__t{margin:0 0 .15rem;font-weight:700;font-size:1.5rem}' +
    '.atl-nm__s{margin:0 0 .7rem;font-size:1.3rem;opacity:.8}' +
    '.atl-nm__row{display:flex;gap:.6rem}' +
    '.atl-nm__in{flex:1;min-width:0;min-height:44px;padding:0 1rem;border:1px solid #d9d0c3;border-radius:.6rem;background:#fff;font:inherit;font-size:16px;color:#14213d}' +
    '.atl-nm__b{min-height:44px;padding:0 1.4rem;border:0;border-radius:.6rem;background:#14213d;color:#fff;font:inherit;font-weight:700;cursor:pointer}' +
    '.atl-nm__b[disabled]{opacity:.6}.atl-nm__ok{margin:0;font-weight:700;color:#2f6b4f}.atl-nm__err{margin:.5rem 0 0;font-size:1.3rem;color:#a8371a}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var justSent = /[?&]nm=1(&|$)/.test(location.search);
  if (justSent) {
    try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch (e) {}
  }

  function setup(info) {
    if (info.dataset.nmBound) return;
    var box = info.querySelector('[data-nm]');
    var pf = info.querySelector('product-form');
    if (!box || !pf) return;
    info.dataset.nmBound = '1';
    var sid = pf.dataset.sectionId;
    var form = box.querySelector('form');
    var ask = box.querySelector('.atl-nm__ask');
    var ok = box.querySelector('.atl-nm__ok');
    var err = box.querySelector('.atl-nm__err');

    function soldOut() {
      var b = document.getElementById('ProductSubmitButton-' + sid);
      return !!(b && b.hasAttribute('disabled') && /sold out|unavailable/i.test(b.textContent));
    }
    function label() {
      var v = [].map.call(info.querySelectorAll('variant-selects input[type=radio]:checked, variant-radios input:checked'), function (i) { return i.value; });
      return v.join(' / ');
    }
    function variantId() {
      var m = /[?&]variant=(\d+)/.exec(location.search);
      if (m) return m[1];
      var i = info.querySelector('input[name=id]');
      return i ? i.value : '';
    }
    function sync() {
      var so = soldOut();
      if (justSent) { box.hidden = false; ask.hidden = true; ok.hidden = false; }
      else { box.hidden = !so; }
      info.querySelectorAll('[data-notify-me]').forEach(function (n) { n.remove(); });
      var bn = info.querySelector('[data-buy-now]');
      if (bn) bn.toggleAttribute('disabled', so);
    }
    form.addEventListener('submit', function (e) {
      var inp = form.querySelector('input[type=email]');
      var em = (inp.value || '').trim();
      var at = em.indexOf('@');
      if (at < 1 || em.indexOf('.', at) < at + 2 || em.indexOf(' ') > -1 || em.slice(-1) == '.') {
        e.preventDefault(); err.hidden = false; err.textContent = 'Please enter a valid email.'; return;
      }
      var title = (document.querySelector('h1') || {}).textContent || document.title;
      var vid = variantId();
      var url = location.origin + location.pathname + (vid ? '?variant=' + vid : '');
      var msg = 'Notify me when back in stock: ' + title.trim() + (label() ? ' — ' + label() : '') + ' (' + url + ')';
      form.querySelector('[data-nm-product]').value = msg;
      form.querySelector('[data-nm-body]').value = msg;
      var rt = form.querySelector('input[name=return_to]');
      if (!rt) { rt = document.createElement('input'); rt.type = 'hidden'; rt.name = 'return_to'; form.appendChild(rt); }
      rt.value = location.pathname + '?' + (vid ? 'variant=' + vid + '&' : '') + 'nm=1';
      form.querySelector('button').disabled = true;
    });

    sync();
    [200, 800, 1800].forEach(function (ms) { setTimeout(sync, ms); });
    if (justSent) {
      var goto = function () { try { box.scrollIntoView({ block: 'center' }); } catch (e) { box.scrollIntoView(); } };
      goto();
      [150, 500, 1100, 2000].forEach(function (ms) { setTimeout(goto, ms); });
      window.addEventListener('load', goto);
      try { history.replaceState(null, '', location.pathname + (variantId() ? '?variant=' + variantId() : '')); } catch (e) {}
    }
    if ('MutationObserver' in window) new MutationObserver(function () { setTimeout(sync, 0); }).observe(pf, { childList: true, subtree: true, attributes: true, attributeFilter: ['disabled'] });
    if (typeof subscribe === 'function' && window.PUB_SUB_EVENTS) {
      subscribe(PUB_SUB_EVENTS.variantChange, function () { justSent = false; [50, 400].forEach(function (ms) { setTimeout(sync, ms); }); });
    }
  }
  function init() { document.querySelectorAll('product-info').forEach(setup); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  document.addEventListener('shopify:section:load', init);
})();
