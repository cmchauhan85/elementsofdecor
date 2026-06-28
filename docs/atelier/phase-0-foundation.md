# Atelier redesign — Phase 0: design system foundation

This phase establishes the Atelier look (tokens, fonts, colour, square aesthetic)
and the shared primitives every later section reuses. No page layouts change yet.

## What landed in the theme

| Area | File | Change |
|---|---|---|
| Fonts | `layout/theme.liquid` | `preconnect` + Google Fonts `<link>` for **Newsreader 300 / italic 300** and **Manrope 400/500/600** (`display=swap`). |
| Tokens | `assets/atelier-tokens.css` (new) | Font-family overrides, accent tokens (`--a-ochre`, `--a-ochre-light`, `--a-muted`, `--a-stone`), hairline vars, eyebrow (`.a-eyebrow`), square-aesthetic rules, mandala helper, section spacing utilities (`.a-section`), scroll-rail helper (`.a-rail`), and the shared **Shop By switch** styles. Loaded right after `base.css`. |
| Accent settings | `config/settings_schema.json` | New **"Atelier accent"** group (`atelier_ochre`, `atelier_ochre_light`, `atelier_muted`) so the merchant can tune the single accent. |
| Accent → CSS | `layout/theme.liquid` | Inline `{% style %}` emits the accent settings as `--a-*` vars (overrides the `atelier-tokens.css` fallbacks). |
| Colour schemes | `config/settings_data.json` | Remapped `scheme-1` → **Paper** `#faf7f1`, `scheme-2` → **Dust** `#ebe5d9`, `scheme-3` → **Ink** `#1b1916`, `scheme-4` → **Stone** `#d4ccbe`. Schemes 5 / luxury left untouched. Radii were already `0` (square). |
| Primitives | `snippets/atelier-eyebrow.liquid`, `snippets/atelier-mandala.liquid`, `snippets/atelier-shop-by-switch.liquid` (new) | Reusable eyebrow label, concentric-circle motif, and the canonical Element⇄Object switch (renders as no-JS links; sections may progressively enhance). |

Colour-scheme roles for sections going forward:
- **Paper (scheme-1)** — primary background.
- **Dust (scheme-2)** — alternating sections, cards.
- **Ink (scheme-3)** — dark sections, cart summary, bundle cards (use `atelier-mandala` here).
- **Stone (scheme-4)** — tertiary / image-placeholder surfaces.

## Shopify data model to create (admin → Settings → Custom data, or GraphQL)

These are **not** theme files — create them once in the store. Required before
Phase 1 (counts / coming-soon) and Phase 3 (looks). Cart milestones (Phase 1) and
the tool's bundle tie-in (Phase 3) both read the **same** `reward_tier` metaobject.

### Metaobject: `reward_tier`
Single source of truth for the cart milestone ribbon and the tool bundle tie-in.

| Field | Key | Type |
|---|---|---|
| Threshold (₹, in store currency, minor-unit or major — pick one and be consistent) | `threshold` | Number (integer) |
| Label | `label` | Single line text |
| Hint | `hint` | Single line text |
| Display order | `position` | Number (integer) |

Seed entries (from the handoff `MILESTONES`):
1. `10000` · "Hand-tied muslin wrap" · "On the box, tied with twine."
2. `15000` · "A ceramic dish, our gift" · "Cream stoneware, 4″ — a small thank-you."
3. `25000` · "White-glove installation" · "In Bombay. We come, we place, we leave."

### Metaobject: `look` (needed in Phase 3)
| Field | Key | Type |
|---|---|---|
| Kind | `kind` | Single line (`surface` / `room`) |
| Surface name | `surface` | Single line text |
| Mood | `mood` | Single line text |
| Hero image | `hero` | File (image) |
| Blurb | `blurb` | Multi-line text |
| Slots | `slots` | List of `look_slot` metaobject refs (label + product list) |

### Collection metafields (drive the Shop By grid)
Namespace `atelier`:
- `descriptor` — Single line text (the italic card descriptor).
- `coming_soon` — Boolean (grayscale + "Coming soon" pill; chips become inert).
- `display_order` — Number (card ordering).

Element collections: `stone`, `metal`, `wood`, `ceramic`, `fabric` (Wood/Ceramic/Fabric `coming_soon = true`).
Object collections: `urlis-bowls`, `vases-vessels`, `lighting`, `trays-stands`, `wall-tabletop` (last two `coming_soon = true`).

### Product metafields (Phase 1 PDP)
Namespace `atelier`:
- `element` — Single line / metaobject ref (Stone, Metal…).
- `category` — Single line (Urlis & Bowls…).
- `descriptor` — Single line (the italic sub-line).
- `story_origin`, `story_craft`, `story_leadtime` — the PDP "The Story" stats.
- `spec_table` — JSON or metaobject for the 4-col specification pairs.

### Article metafields (Phase 2 editorial)
Namespace `atelier`: `element`, `words`, `photographs`, `read_time`.

> A ready-to-run `graphql_mutation` for the `reward_tier` definition + seed entries
> can be generated with the Shopify MCP tools when the team is ready to apply it.

## Verification (Phase 0)
- `shopify theme check` is clean for the new/edited files.
- In `shopify theme dev`: headings render in Newsreader, body in Manrope; the
  storefront background is Paper `#faf7f1`; a section set to scheme-3 is Ink with
  paper text; the `atelier-shop-by-switch` snippet renders with the active option
  filled and the inactive option italic/muted.
