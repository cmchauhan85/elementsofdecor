/*
 * Mobile sticky Add-to-bag bar for the product page.
 * Shows once the real Add-to-bag button scrolls out of view, mirrors its
 * price/availability on variant change (via the existing variantChange
 * pubsub event from product-info.js), and submits the same product form
 * via its native `form` attribute — no add-to-cart logic duplicated here.
 */
(function () {
  function bind(bar) {
    if (bar.dataset.stickyBound) return;
    bar.dataset.stickyBound = 'true';

    const sectionId = bar.dataset.section;
    const trigger = document.getElementById(`ProductSubmitButton-${sectionId}`);
    const priceDestination = bar.querySelector('.atelier-pdp-sticky__price');
    const submitButton = bar.querySelector('.atelier-pdp-sticky__submit');

    if (trigger && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const showing = !entry.isIntersecting;
            bar.classList.toggle('is-visible', showing);
            document.body.classList.toggle('has-sticky-add-to-bag', showing);
          });
        },
        { rootMargin: '0px' }
      );
      observer.observe(trigger);
    }

    const priceSource = document.getElementById(`price-${sectionId}`);
    if (priceDestination && priceSource) {
      priceDestination.innerHTML = priceSource.innerHTML;
    }
    if (submitButton && trigger) {
      submitButton.toggleAttribute('disabled', trigger.hasAttribute('disabled'));
    }

    if (typeof subscribe === 'function' && window.PUB_SUB_EVENTS) {
      subscribe(PUB_SUB_EVENTS.variantChange, (event) => {
        if (!event || !event.data || event.data.sectionId !== sectionId) return;

        const source = event.data.html.getElementById(`price-${sectionId}`);
        if (source && priceDestination) {
          priceDestination.innerHTML = source.innerHTML;
        }

        const updatedTrigger = event.data.html.getElementById(`ProductSubmitButton-${sectionId}`);
        if (updatedTrigger && submitButton) {
          submitButton.toggleAttribute('disabled', updatedTrigger.hasAttribute('disabled'));
        }
      });
    }
  }

  function init(root) {
    (root || document).querySelectorAll('.atelier-pdp-sticky').forEach(bind);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init());
  } else {
    init();
  }

  document.addEventListener('shopify:section:load', (event) => init(event.target));
})();
