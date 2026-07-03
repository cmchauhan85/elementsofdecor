/**
 * Converts colour/finish pill buttons into coloured circular swatches by
 * extracting the dominant hue from each variant's featured image via Canvas.
 * Falls back to a neutral stone tone if the image can't be sampled.
 */
(function () {
  var SECTION_RE = /AtelierVariantImages-(.+)/;
  var COLOR_OPTION_RE = /colou?r|finish|shade|tone/i;
  var FALLBACK = '#C4B49A';

  function init(infoEl) {
    var dataEl = infoEl.querySelector('[id^="AtelierVariantImages-"]');
    if (!dataEl) return;

    var variantImages;
    try { variantImages = JSON.parse(dataEl.textContent); } catch (e) { return; }

    var fieldsets = infoEl.querySelectorAll('.product-form__input--pill');
    fieldsets.forEach(function (fs) {
      var legend = fs.querySelector('legend');
      if (!legend || !COLOR_OPTION_RE.test(legend.textContent)) return;
      convertFieldset(fs, variantImages);
    });
  }

  function convertFieldset(fs, variantImages) {
    var inputs = fs.querySelectorAll('input[type="radio"]');
    inputs.forEach(function (input) {
      var label = fs.querySelector('label[for="' + input.id + '"]');
      if (!label) return;

      var title = label.textContent.trim();

      /* Find an image URL: first match by full variant title, then by option value */
      var imgSrc = null;
      Object.keys(variantImages).forEach(function (vtitle) {
        if (vtitle.toLowerCase().indexOf(input.value.toLowerCase()) !== -1) {
          if (!imgSrc) imgSrc = variantImages[vtitle].src;
        }
      });

      if (imgSrc) {
        extractColor(imgSrc, function (color) {
          applyDot(label, input, color, title);
        });
      } else {
        applyDot(label, input, FALLBACK, title);
      }
    });
  }

  function applyDot(label, input, color, title) {
    /* Style the label as a circle; keep accessible text visually hidden */
    label.setAttribute('title', title);
    label.innerHTML = '<span style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);">' + title + '</span>';
    label.classList.add('atelier-swatch-dot');
    label.style.setProperty('--dot-color', color);
  }

  function extractColor(src, cb) {
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      try {
        var SIZE = 48;
        var c = document.createElement('canvas');
        c.width = c.height = SIZE;
        var ctx = c.getContext('2d');
        ctx.drawImage(img, 0, 0, SIZE, SIZE);
        var px = ctx.getImageData(0, 0, SIZE, SIZE).data;
        var r = 0, g = 0, b = 0, n = 0;
        for (var i = 0; i < px.length; i += 4) {
          if (px[i + 3] < 100) continue;               /* skip transparent */
          var lum = (px[i] + px[i + 1] + px[i + 2]) / 3;
          if (lum > 248) continue;                      /* skip near-white bg */
          r += px[i]; g += px[i + 1]; b += px[i + 2]; n++;
        }
        cb(n > 0
          ? 'rgb(' + Math.round(r/n) + ',' + Math.round(g/n) + ',' + Math.round(b/n) + ')'
          : FALLBACK);
      } catch (e) { cb(FALLBACK); }
    };
    img.onerror = function () { cb(FALLBACK); };
    /* Append width param for a small fast image */
    img.src = src + (src.indexOf('?') !== -1 ? '&' : '?') + 'width=80';
  }

  /* Wait for product-info custom element to be ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  function run() {
    document.querySelectorAll('product-info').forEach(init);
  }
})();
