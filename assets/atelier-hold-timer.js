/**
 * Hold-timer (c2) — 30-minute reservation countdown on cart + cart drawer.
 * Resets whenever a cart update fires. Persists across page navigations via
 * localStorage so the countdown continues when the user browses back.
 */
(() => {
  const KEY = 'atelier_hold_expires';
  const DEFAULT_MS = 30 * 60 * 1000;

  // ── Helpers ─────────────────────────────────────────────────────────────
  function getDuration() {
    const el = document.querySelector('[data-hold-duration]');
    if (el) {
      const min = parseInt(el.dataset.holdDuration, 10);
      if (min > 0) return min * 60 * 1000;
    }
    return DEFAULT_MS;
  }

  function getExpiredText() {
    const el = document.querySelector('[data-hold-expired]');
    return el ? el.dataset.holdExpired : 'Reservation expired.';
  }

  function getExpiry() {
    return parseInt(localStorage.getItem(KEY) || '0', 10);
  }

  function resetTimer() {
    localStorage.setItem(KEY, Date.now() + getDuration());
  }

  function fmt(ms) {
    const s = Math.max(0, Math.floor(ms / 1000));
    const m = Math.floor(s / 60);
    return `${m}:${String(s % 60).padStart(2, '0')}`;
  }

  // ── Render ───────────────────────────────────────────────────────────────
  function render() {
    const els = document.querySelectorAll('.atelier-hold');
    if (!els.length) return false;

    const remaining = getExpiry() - Date.now();

    els.forEach(wrap => {
      const timeEl = wrap.querySelector('.atelier-hold__time');
      const labelEl = wrap.querySelector('.atelier-hold__label');
      if (!timeEl) return;

      if (remaining <= 0) {
        wrap.classList.add('atelier-hold--expired');
        if (labelEl) labelEl.textContent = getExpiredText();
        timeEl.textContent = '';
      } else {
        wrap.classList.remove('atelier-hold--expired');
        if (labelEl) labelEl.textContent = wrap.dataset.holdLabel || 'Items reserved for';
        timeEl.textContent = fmt(remaining);
      }
    });
    return remaining > 0;
  }

  // ── Tick loop ─────────────────────────────────────────────────────────────
  let tickId;
  function tick() {
    clearTimeout(tickId);
    const alive = render();
    if (alive) tickId = setTimeout(tick, 1000);
  }

  // ── Init ──────────────────────────────────────────────────────────────────
  function init() {
    if (!document.querySelector('.atelier-hold')) return;
    if (!getExpiry() || getExpiry() < Date.now()) resetTimer();
    tick();
  }

  // ── Cart update hooks ─────────────────────────────────────────────────────
  // Dawn's pub/sub (available after global.js defers)
  window.addEventListener('load', () => {
    try {
      if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
        subscribe(PUB_SUB_EVENTS.cartUpdate, () => { resetTimer(); tick(); });
      }
    } catch (e) {}
  });

  // Fallback: custom event dispatched by product-form after a successful add
  document.addEventListener('cart:refresh', () => { resetTimer(); tick(); });

  // Re-tick after cart drawer re-renders (the element may have been replaced)
  document.addEventListener('cart-drawer:open', tick);

  // ── Boot ──────────────────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
