/**
 * Converts colour/finish pill buttons into coloured circular swatches.
 *
 * Resolution order:
 *  1. variant.metafields.atelier.swatch_color  (exact override)
 *  2. First colour keyword found in the option value name  (e.g. "Black & Gold" → black)
 *  3. Canvas extraction via fetch + blob URL  (avoids CORS tainting)
 *  4. Neutral fallback
 */
(function () {
  var COLOR_OPTION_RE = /colou?r|finish|shade|tone/i;
  var FALLBACK = '#C4B49A';

  /* ── Named colour map ─────────────────────────────────────────────────── */
  var NAMED = {
    black: '#1B1916', ebony: '#2A1F1A', charcoal: '#3C3A36', dark: '#3A3530',
    gold: '#C8A850', golden: '#C8A850', brass: '#B5943C', bronze: '#8B6B35',
    copper: '#B06A2A', amber: '#C47A2A',
    almond: '#E8C9A0', ivory: '#F0EAD6', cream: '#F0E8D0', white: '#F5F0E8',
    natural: '#D4C5A0', stone: '#A09080', beige: '#D4C4A8',
    grey: '#888078', gray: '#888078', silver: '#B0A898', pewter: '#8E8880',
    brown: '#7A5C40', walnut: '#5E3D25', teak: '#8B5E3C',
    oak: '#C4934A', pine: '#D4A460', wood: '#A07040',
    terracotta: '#C26845', rust: '#B0462A', clay: '#B87858',
    sage: '#8A9878', olive: '#7A7845', green: '#6A8060',
    blue: '#5870A0', navy: '#2A3A5C', indigo: '#3C4870',
    blush: '#D4948A', rose: '#C07878', red: '#A03838', burgundy: '#7A2838',
    pink: '#D4A0A0', peach: '#E8A878', coral: '#D0705A',
    yellow: '#D4B040', mustard: '#C09030', ochre: '#C4A55A',
  };

  /** Split option value on delimiters, return hex for the first recognised word */
  function colorFromName(val) {
    var tokens = val.toLowerCase().split(/[\s&\/,()_-]+/).filter(Boolean);
    for (var i = 0; i < tokens.length; i++) {
      if (NAMED[tokens[i]]) return NAMED[tokens[i]];
    }
    return null;
  }

  /* ── Init ─────────────────────────────────────────────────────────────── */
  function init(infoEl) {
    var dataEl = infoEl.querySelector('[id^="AtelierVariantImages-"]');
    if (!dataEl) return;
    var variantImages;
    try { variantImages = JSON.parse(dataEl.textContent); } catch (e) { return; }

    infoEl.querySelectorAll('.product-form__input--pill').forEach(function (fs) {
      var legend = fs.querySelector('legend');
      if (!legend || !COLOR_OPTION_RE.test(legend.textContent)) return;
      convertFieldset(fs, variantImages);
    });
  }

  function convertFieldset(fs, variantImages) {
    fs.querySelectorAll('input[type="radio"]').forEach(function (input) {
      var label = fs.querySelector('label[for="' + input.id + '"]');
      if (!label) return;
      var title = input.value; /* input.value is always the clean option string; label.textContent picks up Dawn's hidden sold-out span */

      /* Locate variant data by matching option value against variant title keys */
      var imgSrc = null, manualColor = null;
      Object.keys(variantImages).forEach(function (vtitle) {
        if (vtitle.toLowerCase().indexOf(input.value.toLowerCase()) !== -1) {
          var d = variantImages[vtitle];
          if (!imgSrc && d.src) imgSrc = d.src;
          if (!manualColor && d.color) manualColor = d.color;
        }
      });

      /* Resolution order */
      if (manualColor) {
        applyDot(label, manualColor, title);
      } else {
        var named = colorFromName(input.value);
        if (named) {
          applyDot(label, named, title);
        } else if (imgSrc) {
          fetchAndExtract(imgSrc, function (color) { applyDot(label, color, title); });
        } else {
          applyDot(label, FALLBACK, title);
        }
      }
    });
  }

  function applyDot(label, color, title) {
    /* Strip trailing SKU in parens: "Black & Gold (EDTLCS001)" → "Black & Gold" */
    var displayName = title.replace(/\s*\([^)]*\)\s*$/, '').trim() || title;
    label.setAttribute('title', title);
    label.innerHTML =
      '<span class="atelier-swatch-dot__circle" aria-hidden="true"></span>' +
      '<span style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);">' + title + '</span>' +
      '<span class="atelier-swatch-dot__name" aria-hidden="true">' + displayName + '</span>';
    label.classList.add('atelier-swatch-dot');
    label.style.setProperty('--dot-color', color);
  }

  /* ── Canvas extraction (fallback for unknown colour names) ────────────── */
  function fetchAndExtract(src, cb) {
    var url = src.indexOf('//') === 0 ? 'https:' + src : src;
    url += (url.indexOf('?') !== -1 ? '&' : '?') + 'width=80';
    fetch(url)
      .then(function (r) { return r.blob(); })
      .then(function (blob) {
        var blobUrl = URL.createObjectURL(blob);
        var img = new Image();
        img.onload = function () {
          var color = sampleColor(img);
          URL.revokeObjectURL(blobUrl);
          cb(color);
        };
        img.onerror = function () { URL.revokeObjectURL(blobUrl); cb(FALLBACK); };
        img.src = blobUrl;
      })
      .catch(function () { cb(FALLBACK); });
  }

  function sampleColor(img) {
    try {
      var SIZE = 80, c = document.createElement('canvas');
      c.width = c.height = SIZE;
      var ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0, SIZE, SIZE);
      var px = ctx.getImageData(0, 0, SIZE, SIZE).data;
      var r = 0, g = 0, b = 0, n = 0;
      for (var i = 0; i < px.length; i += 4) {
        if (px[i + 3] < 100) continue;
        var lum = (px[i] + px[i + 1] + px[i + 2]) / 3;
        if (lum > 240) continue;
        var max = Math.max(px[i], px[i + 1], px[i + 2]);
        var min = Math.min(px[i], px[i + 1], px[i + 2]);
        var sat = max > 0 ? (max - min) / max : 0;
        var w = 0.1 + sat * 4;
        r += px[i] * w; g += px[i + 1] * w; b += px[i + 2] * w; n += w;
      }
      return n > 0
        ? 'rgb(' + Math.round(r / n) + ',' + Math.round(g / n) + ',' + Math.round(b / n) + ')'
        : FALLBACK;
    } catch (e) { return FALLBACK; }
  }

  function run() {
    document.querySelectorAll('product-info').forEach(init);
    /* Re-run after two animation frames so we apply after Dawn's custom
       elements finish initialising and may have modified the selected label */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.querySelectorAll('product-info').forEach(init);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else { run(); }
})();
