# Atelier redesign — Phase 2: editorial pages

Adds the Studio/About page and the Field Note (article) editorial layout. No
commerce plumbing involved, so both are built as dedicated Atelier sections.

## Studio / About — `templates/page.about.json`
Assign a store page to the **`page.about`** template (Admin → Pages → Theme template).
Section order: hero → manifesto → beliefs → steps → studios → visit → gratitude.

| Section | File | Notes |
|---|---|---|
| Hero | reuses `atelier-hero` | small height, About copy |
| Manifesto | reuses `atelier-philosophy` | paper scheme, mandala off |
| Five things we believe | `sections/atelier-beliefs.liquid` | 5 numbered belief blocks |
| How we make | `sections/atelier-steps.liquid` | 3 step blocks with images |
| Studios we work with | `sections/atelier-studios.liquid` | dark mandala, 5 studio blocks (Wood/Fabric "Coming spring") |
| Visit us | `sections/atelier-visit.liquid` | address/hours + "Book a visit" |
| Gratitude | reuses `atelier-gratitude` | |

Shared CSS: `assets/section-atelier-about.css`. All copy is block/section settings.

## Field Note / Editorial — `templates/article.json`
Replaces Dawn's `main-article` with `sections/atelier-article.liquid` (no cart
plumbing on articles, so a full custom layout is low-risk), then:
- **Shop the story** → `atelier-product-row` (set its collection to the article's element).
- **More from the field** → `atelier-notes` (related articles).

`atelier-article` renders: full-bleed hero (image + scrim + kicker + title + standfirst),
a meta row, and `article.content`. CSS (`section-atelier-article.css`) provides the
**drop cap** (first paragraph), **section eyebrows** (author uses `h2`/`h3` in the body),
and **pull quotes** (author uses `blockquote`). Images in the body go full measure.

### Article data (metafields, namespace `atelier`)
- `kicker` (e.g. "Field Note · No. 07"), `standfirst`, `words`, `photographs`,
  `read_time`, `element`. The meta row falls back to `article.author` for Words and
  `excerpt_or_content` for the standfirst when metafields are absent.

## Locale keys added (propagated to all storefront locales)
`sections.atelier_article.{words,photographs,read_time,element}`.

## Verification (Phase 2)
- `shopify theme check` — zero offenses in Atelier files.
- Live: assign a page to `page.about` and open a blog article; confirm beliefs/steps/studios
  render, the article drop cap + pull quote (blockquote) + meta row appear, and Shop-the-story
  pulls the right element collection.
