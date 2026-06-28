# Atelier redesign — Phase 1: core commerce

Recreates the revenue path — Home, Shop/PLP, Product/PDP and Cart — on top of the
Phase 0 design system. New work is built as bespoke `atelier-*` sections + a single
shared product card; Dawn's commerce plumbing (product-form, variant-selects,
media-gallery, facets, cart AJAX, checkout) is preserved and restyled via CSS
overlays only.

## New sections

| Section | File | Used on |
|---|---|---|
| Atelier hero | `sections/atelier-hero.liquid` (+ `assets/section-atelier-hero.css`) | Home |
| Shop By band | `sections/atelier-browse.liquid` (+ `assets/section-atelier-browse.css`) | Home |
| Philosophy | `sections/atelier-philosophy.liquid` (+ css) | Home |
| This Season rail | `sections/atelier-this-season.liquid` (+ css) | Home |
| Tool teaser | `sections/atelier-tool-teaser.liquid` (+ css) | Home |
| Gratitude | `sections/atelier-gratitude.liquid` (+ css) | Home / About |
| Notes (editorial cards) | `sections/atelier-notes.liquid` (+ css) | Home |
| Collection / PLP | `sections/atelier-collection.liquid` (+ css) | Collection |
| PDP story | `sections/atelier-pdp-story.liquid` (+ `section-atelier-pdp-blocks.css`) | Product |
| PDP specifications | `sections/atelier-specs.liquid` | Product |
| Pairs with | `sections/atelier-pairs.liquid` | Product |
| Product row (generic) | `sections/atelier-product-row.liquid` | Cart "Continue collecting" |
| Milestone ribbon | `sections/atelier-milestone-ribbon.liquid` (+ `section-atelier-milestone.css`) | Cart |

## Shared snippets / assets
- `snippets/atelier-product-card.liquid` + `assets/component-atelier-card.css` — the
  single shared product tile (the JSX `ProductCard`). Loaded globally. **We did NOT
  restyle Dawn's `card-product.liquid`** — to avoid regressions to quick-add/variant
  JS, Atelier sections render this card directly instead.
- `snippets/atelier-collection-card.liquid` — collection card for the Shop By grid.
- `snippets/atelier-facet-group.liquid` — one Shopify storefront filter, Atelier-styled.
- `assets/atelier-shop-by.js` — progressively enhances the Shop By switch to swap
  panels (`[data-mode-grid]`) and captions (`[data-mode-when]`) in place; falls back
  to `?shop_by=` links with no JS.

## CSS overlays on Dawn sections (markup/JS untouched)
- `assets/section-atelier-pdp.css` → loaded in `sections/main-product.liquid`.
- `assets/section-atelier-cart.css` → loaded in `main-cart-items.liquid` + `main-cart-footer.liquid`.
- `assets/section-atelier-chrome.css` → loaded globally in `layout/theme.liquid` (header + footer).

## Templates wired
- `templates/index.json` — hero → browse → philosophy → this-season → tool-teaser → notes → gratitude.
- `templates/collection.json` — single `atelier-collection` section.
- `templates/product.json` — `main-product` (gallery_layout `thumbnail`) → story → specs → pairs.
- `templates/cart.json` — milestone → cart-items → cart-footer → continue.
- `sections/footer-group.json` — footer set to **Ink** (scheme-3).

## Data the store must provide (see phase-0-foundation.md for definitions)
- **Collections** for both axes, each with `atelier.descriptor`, `atelier.coming_soon`,
  and (object collections) `atelier.element`. Assign them to the Shop By band blocks on Home.
- **Product metafields** (`atelier`): `element`, `category`, `descriptor`, `tag`,
  `story_origin`/`story_craft`/`story_leadtime`, `pairs_with` (product list), spec values.
- **Storefront filters** on the `element` and `category` product metafields (Shopify
  Search & Discovery). The PLP maps them via the section settings
  `element_filter_key` / `category_filter_key` (defaults `filter.p.m.atelier.element` /
  `…category`). The Shop By switch flips which is the chip rail vs the sidebar axis.
- **`reward_tier` metaobject** — the milestone ribbon reads it when present; otherwise it
  uses the section's tier blocks (seeded with the three handoff tiers). Thresholds are in
  **major** currency units (e.g. `10000` = ₹10,000).

## Known gaps / deferred to Phase 1 polish
These were intentionally scoped out to keep checkout-critical Dawn code low-risk; flagged
for the live-verification pass:
1. **PDP mobile sticky add-to-bag bar** — CSS exists (`.atelier-pdp-sticky`) but the markup/JS
   hook into the existing product form is not wired yet.
2. **Cart two-column dark sticky summary** — current cart uses an Atelier visual overlay on
   Dawn's single-column layout. The full right-rail dark summary (coupon chip, payment-method
   chips, EMI line, estimated-delivery, trust card) needs a `main-cart-footer` restructure.
3. **Per-size price on PDP size tiles** — needs variant-price JS; the active price shows in the
   main price area for now.
4. **Header structural nav** — element links, the "EST · BOMBAY · 2024" tagline and the exact
   3-zone (links / centred wordmark / utilities) layout need header markup changes; currently
   a visual overlay on Dawn's header. Configure element links via the nav menu in admin.

## Verification (Phase 1)
- `shopify theme check` — zero offenses in Atelier files; only pre-existing Dawn baseline
  remains (locale `MatchingTranslations`, `scheme_classes` UndefinedObject in theme.liquid).
- Live in `shopify theme dev` (needs the metafields/collections above + sample products):
  - **Home** — Shop By toggle swaps the element/object grid; This Season rail scrolls; coming-soon cards greyscale.
  - **Collection** — chips + sidebar axis flip with mode; native filtering + load-more work; editorial slot appears after item 6.
  - **Product** — size/finish select, add-to-bag (+ buy-now), accordion, Story stats, spec table, Pairs-with.
  - **Cart** — quantity change recomputes the milestone progress/copy; checkout button reaches real Shopify checkout.
