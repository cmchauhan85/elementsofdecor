/*
 * Buy Now button for the product page.
 * Adds the currently selected variant + quantity to the cart, then sends the
 * shopper straight to checkout. Scoped to buttons marked with [data-buy-now]
 * inside the custom buy-buttons block in sections/main-product.liquid.
 */
(function () {
  const cartAddUrl = (window.routes && window.routes.cart_add_url) || '/cart/add';
  // Derive the checkout path from the cart-add route so locale/market path
  // prefixes (e.g. /en-gb/cart/add -> /en-gb/checkout) are preserved.
  const checkoutUrl = cartAddUrl.replace(/\/cart\/add(\.js)?$/, '/checkout');

  function handleBuyNow(event) {
    const button = event.currentTarget;
    const form = button.closest('form');
    if (!form || button.hasAttribute('disabled') || button.getAttribute('aria-busy') === 'true') return;

    button.setAttribute('aria-busy', 'true');

    fetch(`${cartAddUrl}.js`, {
      method: 'POST',
      headers: { 'X-Requested-With': 'XMLHttpRequest', Accept: 'application/javascript' },
      body: new FormData(form),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Add to cart failed');
        window.location.href = checkoutUrl;
      })
      .catch((error) => {
        console.error('Buy Now:', error);
        button.removeAttribute('aria-busy');
      });
  }

  function init(root) {
    (root || document).querySelectorAll('[data-buy-now]').forEach((button) => {
      if (button.dataset.buyNowBound) return;
      button.dataset.buyNowBound = 'true';
      button.addEventListener('click', handleBuyNow);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init());
  } else {
    init();
  }

  // Re-bind after section re-renders in the Theme Editor.
  document.addEventListener('shopify:section:load', (event) => init(event.target));
})();
