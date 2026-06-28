/*
  Atelier "Shop By" switch — progressive enhancement.

  The atelier-shop-by-switch snippet renders as real links (?shop_by=…) so it
  works with no JS. This module upgrades it to swap content in place without a
  reload, and keeps every switch + panel on the page in sync.

  Conventions:
    [data-atelier-shop-by]        a switch control; its .a-shopby__opt links carry
                                   data-mode-value="element|object"
    [data-mode-grid="element"]    a content panel shown only in that mode
    [data-mode-when="object"]     an inline element (caption/status) shown only
                                   in that mode
  All are matched document-wide, so multiple switches stay consistent.
*/
(() => {
  if (window.__atelierShopByInit) return;
  window.__atelierShopByInit = true;

  const VALID = ['element', 'object'];

  function currentMode() {
    const param = new URLSearchParams(window.location.search).get('shop_by');
    if (VALID.includes(param)) return param;
    const active = document.querySelector('.a-shopby__opt.is-active');
    return active?.dataset.modeValue || 'element';
  }

  function apply(mode) {
    document.querySelectorAll('[data-atelier-shop-by]').forEach((sw) => {
      sw.dataset.mode = mode;
      sw.querySelectorAll('.a-shopby__opt').forEach((opt) => {
        const on = opt.dataset.modeValue === mode;
        opt.classList.toggle('is-active', on);
        if (on) opt.setAttribute('aria-current', 'true');
        else opt.removeAttribute('aria-current');
      });
    });

    document.querySelectorAll('[data-mode-grid]').forEach((panel) => {
      panel.hidden = panel.dataset.modeGrid !== mode;
    });
    document.querySelectorAll('[data-mode-when]').forEach((el) => {
      el.hidden = el.dataset.modeWhen !== mode;
    });
  }

  function setMode(mode, push) {
    if (!VALID.includes(mode)) return;
    apply(mode);
    if (push) {
      const url = new URL(window.location.href);
      url.searchParams.set('shop_by', mode);
      window.history.replaceState({}, '', url);
    }
  }

  document.addEventListener('click', (e) => {
    const opt = e.target.closest('.a-shopby__opt');
    if (!opt || !opt.dataset.modeValue) return;
    // Only enhance switches we own; let real navigation happen otherwise.
    if (!opt.closest('[data-atelier-shop-by]')) return;
    e.preventDefault();
    setMode(opt.dataset.modeValue, true);
  });

  document.addEventListener('DOMContentLoaded', () => apply(currentMode()));
  // In case the script loads after DOMContentLoaded (module/defer).
  if (document.readyState !== 'loading') apply(currentMode());
})();
