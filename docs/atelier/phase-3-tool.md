# Atelier redesign — Phase 3: "Complete the Look" tool

The Phase-2 product feature: sell a multi-product "look" in one transaction.
Assign a store page to the **`page.complete-the-look`** template.

## Files
- `sections/atelier-tool.liquid` — emits the look catalogue + reward tiers as JSON,
  renders the shell, browse-by toggle, and how-it-works blocks.
- `assets/atelier-tool.js` — `<atelier-tool>` custom element. Ports the JSX `useLook`
  logic: `sel[]` (chosen option per slot), `inc[]` (included flags); `full` = Σ included
  prices, `bundle = round(full × (1 − bundle_pct))`, `saving = full − bundle`. Recolours
  scene pins, drives the swap drawer, and adds all included variants to the cart in one
  `/cart/add.js` call (tagged with a `_atelier_look` line-item attribute).
- `assets/section-atelier-tool.css` — styling.

## Data model — the `look` metaobject (create in Shopify admin)
| Field | Key | Type |
|---|---|---|
| Kind | `kind` | Single line (`surface` / `room`) |
| Surface name | `surface` | Single line |
| Mood | `mood` | Single line |
| Hero image | `hero` | File (image) |
| Blurb | `blurb` | Multi-line |
| Slots | `slots` | List of `look_slot` metaobject references |

`look_slot` metaobject:
| Field | Key | Type |
|---|---|---|
| Label | `label` | Single line (e.g. "The centrepiece") |
| Products | `products` | List of product references (the swap options) |

The first product in each slot is the default; the rest are swap alternatives. Each
option's price/title/image come from the product (variant
`selected_or_first_available_variant`); the sub-line comes from `product.metafields.atelier.descriptor`.

The browse-by Surface/Room toggle only appears when looks of **both** kinds exist.

## Reward tiers — shared with the cart
The bundle card's milestone tie-in reads the **same `reward_tier` metaobject** as the
cart's milestone ribbon (single source of truth). Thresholds in major units.

## Bundle discount — IMPORTANT
The bundle price shown is **informational**. The theme cannot create discounts. Enforce
the actual set saving with a **Shopify automatic discount or Discount Function** in the
admin (e.g. "buy these products together → 10% off"), or a discount code applied at
checkout. The `_atelier_look` line-item attribute is added so a Function can target it.

## Verification (Phase 3)
- `shopify theme check` — zero offenses in Atelier files.
- Live (needs `look` + `look_slot` + `reward_tier` metaobjects with sample products):
  toggle Surface/Room, switch scenes, include/exclude slots and swap options — pins,
  bundle price and milestone line update; "Add the look" lands all included items in the
  cart. With no looks configured, the section shows its onboarding empty state.
- Honours `prefers-reduced-motion`.
