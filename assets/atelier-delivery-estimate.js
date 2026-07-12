/*
 * Rough delivery-window estimate by PIN code, based on the standard India
 * Post postal-circle prefix (the first digit of any 6-digit Indian PIN).
 * No courier API involved — this is a coarse, honest estimate relative to
 * the store's Gujarat/Maharashtra-border origin, not a serviceability
 * guarantee. See docs/atelier/ for the wider delivery-estimate scope note.
 */
(function () {
  // First digit of the PIN -> approximate India Post postal circle.
  var ZONE_BY_PREFIX = {
    1: { label: 'Delhi, Haryana, Punjab, Himachal, J&K', days: '5–7 business days' },
    2: { label: 'Uttar Pradesh, Uttarakhand', days: '4–6 business days' },
    3: { label: 'Rajasthan, Gujarat, Daman & Diu, DNH', days: '2–4 business days' },
    4: { label: 'Maharashtra, Madhya Pradesh, Chhattisgarh, Goa', days: '2–4 business days' },
    5: { label: 'Andhra Pradesh, Telangana, Karnataka', days: '4–6 business days' },
    6: { label: 'Kerala, Tamil Nadu, Puducherry', days: '5–7 business days' },
    7: { label: 'West Bengal, Odisha, North-East, Andaman & Nicobar', days: '6–9 business days' },
    8: { label: 'Bihar, Jharkhand', days: '5–7 business days' },
    9: { label: 'Army Post Office', days: '7+ business days' },
  };

  function estimate(pin) {
    if (!/^[1-9][0-9]{5}$/.test(pin)) return null;
    return ZONE_BY_PREFIX[pin.charAt(0)] || null;
  }

  function bind(widget) {
    if (widget.dataset.bound) return;
    widget.dataset.bound = 'true';

    var input = widget.querySelector('.atelier-delivery-estimate__input');
    var button = widget.querySelector('.atelier-delivery-estimate__submit');
    var result = widget.querySelector('.atelier-delivery-estimate__result');

    function check() {
      var pin = (input.value || '').trim();
      var zone = estimate(pin);
      if (!zone) {
        result.textContent = 'Enter a valid 6-digit PIN code.';
        result.classList.add('is-error');
        return;
      }
      result.classList.remove('is-error');
      result.textContent = 'Estimated delivery to ' + pin + ': ' + zone.days + ' after dispatch.';
    }

    button.addEventListener('click', check);
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        check();
      }
    });
  }

  function init(root) {
    (root || document).querySelectorAll('.atelier-delivery-estimate').forEach(bind);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init());
  } else {
    init();
  }
  document.addEventListener('shopify:section:load', (event) => init(event.target));
})();
