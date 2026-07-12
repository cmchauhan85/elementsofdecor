/*
 * Cart coupon/discount code apply — both the manual input field and the
 * merchant-curated offer cards. No app, no AJAX cart-discount API (Shopify
 * doesn't expose one) — uses the native `/discount/:code` route, which
 * validates the code server-side and redirects back. We tag the redirect
 * target with a marker param so that if we land back with no discount
 * applied, we know to show the invalid-code message.
 */
(function () {
  var ATTEMPT_PARAM = 'coupon_attempt';

  function applyCode(code) {
    code = (code || '').trim();
    if (!code) return;
    var cartUrl = (window.routes && window.routes.cart_url) || '/cart';
    var redirectTarget = cartUrl + (cartUrl.indexOf('?') !== -1 ? '&' : '?') + ATTEMPT_PARAM + '=1';
    var discountUrl = cartUrl.replace(/\/cart\/?$/, '/discount/') + encodeURIComponent(code)
      + '?redirect=' + encodeURIComponent(redirectTarget);
    window.location.href = discountUrl;
  }

  function bindInput(root) {
    if (root.dataset.bound) return;
    root.dataset.bound = 'true';

    var input = root.querySelector('[data-atelier-coupon-input]');
    var button = root.querySelector('[data-atelier-coupon-submit]');
    if (!input || !button) return;

    function submit() {
      applyCode(input.value);
    }

    button.addEventListener('click', submit);
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        submit();
      }
    });
  }

  function bindOfferButtons(root) {
    (root || document).querySelectorAll('[data-atelier-coupon-offer-apply]').forEach(function (button) {
      if (button.dataset.bound || button.disabled) return;
      button.dataset.bound = 'true';
      button.addEventListener('click', function () {
        applyCode(button.getAttribute('data-atelier-coupon-offer-apply'));
      });
    });
  }

  function checkAttemptResult() {
    var params = new URLSearchParams(window.location.search);
    if (!params.has(ATTEMPT_PARAM)) return;

    params.delete(ATTEMPT_PARAM);
    var newSearch = params.toString();
    var newUrl = window.location.pathname + (newSearch ? '?' + newSearch : '') + window.location.hash;
    window.history.replaceState({}, '', newUrl);

    var hasDiscount = document.querySelector('.atelier-coupon__applied');
    if (!hasDiscount) {
      var errorEl = document.querySelector('[data-atelier-coupon-error]');
      if (errorEl) errorEl.hidden = false;
    }
  }

  function init(root) {
    (root || document).querySelectorAll('[data-atelier-coupon]').forEach(bindInput);
    bindOfferButtons(root);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      init();
      checkAttemptResult();
    });
  } else {
    init();
    checkAttemptResult();
  }
  document.addEventListener('shopify:section:load', (event) => init(event.target));
})();
