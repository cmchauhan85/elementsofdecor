/**
 * Save for Later (c4) — per-line-item save on the cart page.
 * Removes the item from the cart via /cart/change.js and stores it in
 * localStorage. A "Saved for later" section is rendered below the cart
 * items from that store. "Move to bag" re-adds via /cart/add.js.
 */
(() => {
  const KEY = 'atelier_saved_items';

  // ── Storage ───────────────────────────────────────────────────────────────
  function read() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
    catch { return []; }
  }

  function write(items) {
    try { localStorage.setItem(KEY, JSON.stringify(items)); }
    catch {}
  }

  function saveItem(data) {
    // Replace any existing save for the same variant
    const items = read().filter(i => i.vid !== data.vid);
    items.push(data);
    write(items);
  }

  function removeItem(vid) {
    write(read().filter(i => i.vid !== vid));
  }

  // ── Saved section renderer ────────────────────────────────────────────────
  function render() {
    const wrap = document.getElementById('atelier-saved-section');
    if (!wrap) return;

    const items = read();
    if (!items.length) { wrap.innerHTML = ''; return; }

    const variantLabel = v => (v && v !== 'Default Title') ? v : '';

    wrap.innerHTML = `
      <div class="atelier-saved">
        <div class="atelier-saved__head">
          <h3 class="atelier-saved__title">Saved for later</h3>
          <span class="atelier-saved__count">${items.length}&thinsp;item${items.length !== 1 ? 's' : ''}</span>
        </div>
        <div class="atelier-saved__grid">
          ${items.map(item => `
            <div class="atelier-saved-item" data-vid="${item.vid}">
              ${item.image
                ? `<a href="${item.url}" class="atelier-saved-item__thumb" tabindex="-1" aria-hidden="true">
                     <img src="${item.image}" alt="" loading="lazy" width="80" height="80">
                   </a>`
                : ''}
              <div class="atelier-saved-item__info">
                <a href="${item.url}" class="atelier-saved-item__name">${item.title}</a>
                ${variantLabel(item.variant)
                  ? `<p class="atelier-saved-item__variant">${item.variant}</p>`
                  : ''}
                <p class="atelier-saved-item__price">${item.priceFmt}</p>
              </div>
              <div class="atelier-saved-item__actions">
                <button class="atelier-saved-item__move" data-vid="${item.vid}" data-qty="${item.qty}">Move to bag</button>
                <button class="atelier-saved-item__discard" data-vid="${item.vid}" aria-label="Remove ${item.title} from saved">Remove</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>`;

    wrap.querySelectorAll('.atelier-saved-item__move').forEach(btn => {
      btn.addEventListener('click', () => moveToCart(btn.dataset.vid, parseInt(btn.dataset.qty, 10)));
    });
    wrap.querySelectorAll('.atelier-saved-item__discard').forEach(btn => {
      btn.addEventListener('click', () => { removeItem(btn.dataset.vid); render(); });
    });
  }

  // ── Move saved item back to cart ──────────────────────────────────────────
  async function moveToCart(vid, qty) {
    const btn = document.querySelector(`.atelier-saved-item__move[data-vid="${vid}"]`);
    if (btn) { btn.disabled = true; btn.textContent = 'Adding…'; }

    try {
      const res = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: parseInt(vid, 10), quantity: qty })
      });
      if (!res.ok) throw new Error(await res.text());
      removeItem(vid);
      window.location.reload();
    } catch {
      if (btn) { btn.disabled = false; btn.textContent = 'Move to bag'; }
    }
  }

  // ── Save item from cart ───────────────────────────────────────────────────
  async function saveLater(btn) {
    const label = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Saving…';

    try {
      const res = await fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: btn.dataset.key, quantity: 0 })
      });
      if (!res.ok) throw new Error(await res.text());

      saveItem({
        vid:      btn.dataset.vid,
        qty:      parseInt(btn.dataset.qty, 10),
        title:    btn.dataset.title,
        variant:  btn.dataset.variant,
        priceFmt: btn.dataset.priceFmt,
        image:    btn.dataset.image,
        url:      btn.dataset.url
      });
      window.location.reload();
    } catch {
      btn.disabled = false;
      btn.textContent = label;
    }
  }

  // ── Init ──────────────────────────────────────────────────────────────────
  function init() {
    document.querySelectorAll('.atelier-save-later').forEach(btn => {
      btn.addEventListener('click', () => saveLater(btn));
    });
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
