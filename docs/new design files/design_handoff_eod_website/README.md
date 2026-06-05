# Handoff: Elements of Decor — Website Redesign ("Atelier" direction)

## Overview
A full redesign of the Elements of Decor (EoD) e‑commerce website, replacing the
current Shopify "Dawn" theme. EoD is a small Bombay studio making hand‑crafted
homeware (marble urlis, brass vases, candle stands) for modern Indian homes.

The redesign is built around one idea — **"Home is not styled. It is felt."** — and
a single information architecture: the **Five Elements** (Stone, Metal, Wood,
Ceramic, Fabric). At launch only **Stone and Metal are live**; Wood, Ceramic and
Fabric are shown as "Coming soon".

The design language is called **"Atelier"**: a quiet, premium, editorial register
(reference points: Aesop, Loewe Home). Paper + ink + a single ochre accent, large
serif display type, generous whitespace, museum‑style captions.

The package covers **7 pages, each in desktop + mobile** (14 frames total):
1. Home  2. The Shop (PLP)  3. Product (PDP)  4. The Studio (About)
5. Field Note (Editorial)  6. The Bag (Cart)  7. Complete the Look (Phase‑2 tool)

## About the Design Files
The files in this bundle are **design references created in HTML/React (via inline
Babel JSX)** — prototypes showing the intended look and behaviour. **They are not
production code to copy directly.** Each "page" is rendered as a fixed‑width
artboard (desktop 1440px, mobile 414px) inside a presentation canvas; the browser
chrome and phone bezel are presentation scaffolding, **not** part of the site.

The task is to **recreate these designs in the target codebase's environment.**
EoD currently runs on **Shopify (Dawn theme)**, so the most likely target is a
Shopify theme (Liquid + CSS, or a Hydrogen/React storefront). Use the platform's
established patterns — these JSX files are a visual + behavioural spec, not a
component library to import.

## Fidelity
**High‑fidelity.** Final colours, typography, spacing, copy and interactions are
all intended as shown. Recreate the UI faithfully. The only deliberately
"placeholder" parts are: product imagery (final photography to be supplied by EoD)
and the Phase‑2 tool's pin positions on the styled scenes (hard‑coded percentages).

---

## Design Tokens

### Colour
| Token | Hex | Use |
|---|---|---|
| Paper | `#faf7f1` | Primary background |
| Dust | `#ebe5d9` | Secondary background (alternating sections, cards) |
| Stone | `#d4ccbe` | Tertiary / image placeholders |
| Ink | `#1b1916` | Primary text, dark sections, primary buttons |
| Ochre | `#b88a3a` | THE accent — eyebrows, rules, active states, prices-on-dark |
| Ochre light | `#e8c89a` | Ochre on dark backgrounds (emphasis text) |
| Muted | `#7a766e` | Secondary text, captions |

Rules of use: exactly **one** accent (ochre). Dark sections use Ink bg with
ochre‑light emphasis. Never introduce new hues; derive tints with opacity suffixes
(e.g. `#1b191610` = ink at ~6% for hairline borders).

### Typography
Two families, loaded from Google Fonts:
- **Newsreader** (serif) — all display/headings. Weight **300**, letter‑spacing
  `-0.015em`. Italics are used heavily for emphasis (`font-style: italic`, same
  weight). This is the brand voice.
- **Manrope** (sans) — all UI/body/labels. Weights 400–600.

Type roles (desktop):
| Role | Family | Size / line-height | Notes |
|---|---|---|---|
| Hero display | Newsreader 300 | 84–104px / ~1.0 | italic for the felt half of the line |
| Section title | Newsreader 300 | 44–64px / 1.05 | |
| Card title | Newsreader 300 | 22–30px / 1.1 | |
| Italic caption | Newsreader 300 italic | 14–22px | the "voice" text |
| Eyebrow / label ("aCaps") | Manrope 600 | 10px, `letter-spacing:.32em`, UPPERCASE | ochre or muted |
| Body | Manrope 400 | 14–16px / 1.7–1.85 | |
| Price | Newsreader 300 or Manrope | 13–40px | |

Mobile scales these down ~35–45% (hero ~44px, section titles ~30–38px). Per the
brand system, body text never below ~11px on mobile, ~13px on desktop.

### Spacing
Section vertical padding desktop: **96–120px**; horizontal **60px**.
Mobile: vertical **48–54px**, horizontal **22px**.
Grid gaps: product grids **14–32px**; card internal padding **20–40px**.
Hairline borders: `1px solid` ink/ochre at 10–25% opacity.

### Radius & shadow
- The aesthetic is **largely square**. Cards, images, product tiles = **no radius**.
- Radius is reserved for **pills**: the Shop‑By switch, filter chips, the round
  number pins, and stepper buttons use `border-radius: 999px` or `50%`.
- Shadows are minimal — only the floating phone frame and a few overlay cards
  (`0 16px 56px rgba(27,25,22,.08)`). On‑page sections do not use drop shadows.

### Iconography / motif
A thin concentric‑circle / radial "mandala" SVG (ochre, low opacity) appears in
dark sections and the bundle/summary cards. Stroke `1px`, no fill. Arrows are plain
text glyphs (`→ ← ↓ ×`). No icon library required.

---

## Screens / Views

> Component cross‑reference: each screen lists the source JSX file. Desktop and
> mobile for one page often live in the same file (mobile fns are suffixed
> `…Mobile`); Home is split into `atelier.jsx` (desktop) + `atelier-mobile.jsx`.

### 1. Home — `redesign/atelier.jsx` (`AtelierDesktopHome`), `redesign/atelier-mobile.jsx` (`AtelierMobileHome`)
Section order (identical desktop & mobile):
1. **Top nav** — left: Shop + element links (Stone ochre‑active, Metal, Ceramic,
   Wood, Fabric); centre: wordmark "Elements of Decor" + "EST · BOMBAY · 2024";
   right: Studio / Stories / Search / Bag (0). 76px tall, hairline bottom border.
2. **Hero** — full‑bleed lifestyle photo, 740px tall, bottom gradient scrim.
   Eyebrow "Manifesto · No. 01"; headline **"Home is not styled."** + italic
   ochre‑light **"It is felt."** (104px). Bottom‑right: "Read the manifesto" + round
   arrow button.
3. **Shop By band** (`AtelierBrowse`) — promoted full‑width band on Dust bg. A
   **pill segmented control**: `Shop by  [ Element | Object ]` (active = Ink fill,
   white text; inactive = italic muted). Italic caption beside it changes with
   mode. Right side: ochre rule + "Two of five live · three coming soon".
   Below: a **5‑card grid** that swaps data on toggle:
   - *Element mode*: Stone (7 pieces), Metal (4) live; Ceramic, Wood, Fabric
     grayscaled with "Coming soon" pill.
   - *Object mode*: Urlis & Bowls (6), Vases & Vessels (4), Lighting (1) live;
     Trays & Stands, Wall & Tabletop coming soon. Object cards also show the
     element they're made of, bottom‑right.
   Cards: 4:5 image, number top‑left, name (eyebrow), italic descriptor, ochre
   "N pieces →".
4. **Philosophy** — dark (Ink) section, faint mandala arcs. Eyebrow "Our
   Philosophy"; large Newsreader quote (64px) with ochre‑light quote marks; ochre
   rule; attribution "— The Elements of Decor family".
5. **This Season** (`AtelierThisSeason`) — eyebrow + "Considered, *not collected.*"
   Then a **2‑row horizontal‑scroll rail** (`grid-auto-flow: column`,
   `grid-template-rows: 1fr 1fr`, `gridAutoColumns: 320px`, `scroll-snap-type: x
   mandatory`, scrollbar hidden) of 10 product cards, ending in a full‑height dark
   **"The full shop"** tile linking to the master shop page. Header has ← → circle
   buttons as a scroll affordance.
6. **Design Your Space teaser** (`AtelierToolTeaser`) — Dust bg, "Phase Two ·
   Spring 2026", headline "Design your space, *element by element.*", surface chips
   (Console, Side table, Corner, Sofa side, Dehleez…), and a schematic mock of the
   tool. "Notify me" Ink button.
7. **Notes from the Atelier** — 3 editorial cards (Field note / At home with / On
   light), 4:5 image, ochre tag, serif title, meta. (Mobile: horizontal scroll.)
8. **Gratitude** — Dust bg, centred card echoing EoD's physical thank‑you card:
   left Ink panel with "EoD" + the five element names; right "Thank you." + italic
   note "A beautiful space is never accidental…".
9. **Footer** — Ink bg, wordmark + studio blurb, link columns (Stone, Metal,
   Studio, Service), legal row.

### 2. The Shop / PLP — `redesign/atelier-plp.jsx` (`AtelierPLP`, `AtelierPLPMobile`)
- Breadcrumb; page head "Stone and Metal. *Eleven pieces, in the room now.*"
- **Promoted Shop By band** (same pill control as Home) on Dust bg + caption +
  status. `ShopBySwitch` component is the canonical control; reused on Home.
- **Chip rail** (`ModeChips`): "All", then per‑mode category chips with counts;
  "coming soon" chips are dimmed and non‑clickable. Sort link on the right.
- **Two‑column body**: left **filter sidebar** (the *secondary* axis — Category
  when in Element mode, Element when in Object mode — plus Availability, Price,
  each a checkbox group); right **3‑col product grid** with an inline **editorial
  slot** (spans 2 cols) mid‑grid, then a **"Show the next twelve" / "That's the
  full shop — for now"** load‑more rail.
- Mobile: full‑width Shop By band, horizontally scrolling chips, Filters/Sort row,
  2‑col grid, inline field note, load‑more.
- **`ProductCard`** (shared, exported from this file): 4:5 image; number top‑left &
  element top‑right (`mix-blend-mode: difference` over photo); optional tag pill
  bottom‑left ("New"/"Limited"); title (serif), "category · sub", price.

### 3. Product / PDP — `redesign/atelier-pdp.jsx` (`AtelierPDP`, `AtelierPDPMobile`)
- Breadcrumb. **Two columns**: left gallery (main 4:5 image + carousel arrows + row
  of 5 thumbnails, first active with ochre border); right info column:
  - Eyebrow "Stone · Urlis & Bowls", title "Ruffle Urli", italic descriptor.
  - Price (28px) + ochre "· In stock".
  - **Size selector** (3 tiles 7"/9"/12", active = ochre border + Dust bg, each
    showing its price). **Finish selector** (3 colour swatch circles, active = ochre
    ring + label).
  - CTAs: full‑width Ink **"Add to the bag · ₹6,800"** + outlined wishlist ♡.
  - Made‑to‑order note. **Accordion** (The Story open by default, Specifications,
    Care, Shipping & Returns) — chevron `− / +`.
- **The Story** — Dust full‑bleed editorial (image + "Marble *remembers.*" + origin/
  craft/lead‑time stats + "Read the field note").
- **Specifications** — 4‑col table of label/value pairs ("openly told").
- **Pairs with** — 4 `ProductCard`s.
- Mobile: stacked; image carousel with dots; sticky bottom **Add to bag** bar.

### 4. The Studio / About — `redesign/atelier-about.jsx` (`AtelierAbout`, `AtelierAboutMobile`)
- Hero photo "A small studio, *doing one thing well.*"
- **Manifesto** — the full EoD philosophy paragraph + attribution.
- **Five things we believe** — 5‑col numbered list (signature moment): Material
  before metaphor / Small batches, openly told / One hand per piece / The room
  comes first / Quiet over clever.
- **How we make** — 3 steps (Sourced / Made / Sent) with images.
- **The studios we work with** — dark mandala section, 5 columns (Stone‑Jaipur,
  Metal‑Moradabad, Wood‑Saharanpur [soon], Ceramic‑Khurja, Fabric‑Kutch [soon]).
- **Visit us** — Bombay address, hours, "Book a visit".
- Gratitude + Footer reused.

### 5. Field Note / Editorial — `redesign/atelier-editorial.jsx` (`AtelierEditorial`, `AtelierEditorialMobile`)
- Long‑form article. Hero with kicker/title/standfirst. Meta row (Words /
  Photographs / Read time / Element). Body with **drop cap**, section eyebrows
  (I/II/…), **pull quote** (centred, rules top & bottom), **image clusters** with
  captions. **"Shop the story"** inline product row (filtered to the article's
  element). **"More from the field"** cards. Footer.

### 6. The Bag / Cart — `redesign/atelier-cart.jsx` (`AtelierCart`, `AtelierCartMobile`)
- Page head "Your *quiet collection.*" + 30‑minute hold note.
- **Milestone Rewards Ribbon** (`MilestoneRibbon`, full width, Dust bg) — the
  conversion centrepiece. A horizontal progress rail with dots at three tiers,
  ochre fill to current subtotal, ✓ on earned tiers, and 3 description cards below
  (earned / next‑with‑remaining / locked). Tiers (`MILESTONES`):
  - ₹10,000 → Hand‑tied muslin wrap
  - ₹15,000 → A ceramic dish, our gift
  - ₹25,000 → White‑glove installation
  Framed as **thank‑yous, not discounts**.
- **Two columns**: left line items (160px image, element eyebrow, title, sub,
  optional stock urgency "● 4 left at this size", qty stepper, Save/Remove) + a
  **gift‑note** tile ("We'll write a card by hand… no prices on the packing slip");
  right **sticky summary** (dark, mandala): applied **coupon** chip
  ("FIRSTROOM — 10% off", with "+ Have another code? Apply"), line items
  (Subtotal, Promo −, Shipping Free, Tax), **Total** + ochre‑light + "EMI from
  ₹X/mo", **estimated delivery** note ("Dispatch by 14 Jun, with you by 22 Jun"),
  paper **"Proceed to checkout"** button, **payment‑method** chips (UPI/VISA/MC/
  AMEX/EMI), then a **trust card** (lead time / returns / secure).
- **Continue collecting** — 4 product cards.
- Mobile: stacked, compact milestone rail, coupon field, summary, sticky checkout.

### 7. Complete the Look / "Design Your Space" tool — `redesign/atelier-tool.jsx` (`AtelierTool`, `AtelierToolMobile`)
**Phase‑2 feature. Objective: sell a multi‑product "look" in one transaction.**
- Header "Buy the whole look, *not just the object.*" + a **Browse by [Surface |
  Room]** pill toggle (same control language).
- **Scene picker** — row of styled looks for the chosen mode (Surface: The Console,
  The Centre Table; Room: The Pooja Corner, The Entryway). Active = ochre border.
- **Main split**: left a large **styled scene photo** with **numbered round pins**
  (ochre when the matching slot is included, dimmed when excluded); right **the look
  panel** listing each slot (e.g. "The centrepiece", "The stem", "The light"):
  - An **include toggle** (ochre check‑circle) to keep/drop that slot.
  - Product thumbnail, slot label, title, sub, price.
  - **Swap** button → opens a drawer of alternative products for that slot; picking
    one updates the line, the price and the pins.
- **Bundle card** (dark): "Set saving 10%", bundle price (ochre‑light) with
  strikethrough full price, rupee saving, and a **milestone tie‑in** reading from
  the same `MILESTONES` tiers ("This look is ₹X from the muslin wrap"). Buttons:
  **"Add the look · ₹X"** + "Save look ♡".
- **How it works** — 3 steps (Pick a scene / Make it yours / Buy the look).
- Mobile: toggle, horizontally scrolling scene picker, scene with pins, look list
  with swap drawers, bundle card, sticky "Add the look" bar.

**Data model (`LOOKS` array):** each look = `{ id, kind:'surface'|'room', surface,
mood, hero, blurb, slots:[ { label, options:[ {id,title,sub,price,img} ] } ] }`.
`BUNDLE_PCT = 0.10`. Future upgrade path: when transparent‑background product
PNGs exist, the same data model supports a drag‑to‑arrange builder.

---

## Interactions & Behavior
- **Shop By switch** (`element` ⇄ `object`): swaps the card grid dataset on Home;
  on PLP also flips which filter group is primary in the sidebar and swaps the chip
  rail + grid sub‑label. State: a single `mode` string. Selecting a new mode resets
  the active chip to "all".
- **Filter chips** (PLP): `active` key; "soon" chips inert.
- **PDP**: size & finish are single‑select; accordion sections expand/collapse;
  thumbnails set the main image.
- **Cart milestone**: progress = `min(100, subtotal/maxTier*100)`; tiers flip to
  "earned" at/above their threshold; the copy names the next tier and the remaining
  amount. Quantity steppers adjust line totals; coupon shows an applied/removable
  state (10%).
- **Tool**: `useLook(look)` hook holds `sel[]` (chosen option index per slot) and
  `inc[]` (included booleans). `full` = sum of included option prices; `bundle` =
  `round(full * 0.9)`; `saving = full − bundle`. Toggling include or swapping
  recalculates all of it and re‑colours the scene pins. Browse‑by reset picks the
  first look of the new kind.
- **Transitions**: pill/active changes use `transition: all .2–.25s`. No heavy
  animation; the brand is calm. Honour `prefers-reduced-motion`.
- **Responsive**: two discrete layouts (desktop ≥ ~1024, mobile ≤ ~480). The
  prototypes show fixed 1440 / 414 widths; build fluid between using the same
  structure (desktop multi‑column → mobile single column + horizontal scroll rails).

## State Management
Local UI state only — no backend in the prototype. Variables: `mode`
(element/object, surface/room), filter `active`, PDP size/finish/accordion,
cart quantities + applied coupon, tool `sel[]` / `inc[]` / `activeId` / `swapOpen`.
Real implementation needs: product catalogue + inventory (drives "N pieces",
"coming soon", stock urgency), cart/checkout (Shopify), coupon validation, and a
"looks" data source for the tool.

## Assets
- **Product photography**: `assets/products/real/` — both high‑res source **PNG**s
  (1254–1548px) and web‑optimised **JPG**s (≤1400px longest edge, q82). The code
  references the **.jpg** variants. Products shown: Ruffle / Lotus / Flower urlis
  (marble), 3‑Tier candle stand, Aurum / Elio / Oria vases (metal). **These are the
  current shoot; EoD will supply final/clean photography** (e.g. the Elio image has
  marketing text baked in — replace). For the Phase‑2 tool's future drag‑builder,
  transparent‑background cut‑out PNGs per product will be needed.
- **Fonts**: Newsreader + Manrope (Google Fonts). A `Noto Sans Devanagari` fallback
  is declared for any Hindi glyphs.
- **Icons/motif**: inline SVG mandala arcs only; no icon library.
- The `R()` helper in the HTML is a bundler shim for offline export — **ignore it**
  in a real build; treat image paths as plain URLs.

## Files
In this bundle (`design_handoff_eod_website/`):
- `website-rethink.html` — the entry file; mounts all pages as artboards. Open this
  to see everything. Loads the `redesign/*.jsx` files via inline Babel.
- `Elements of Decor — Website Rethink (standalone).html` — a single self‑contained
  file (all JS + images inlined) that runs offline with no server. Easiest way for
  the dev team to review the designs.
- `redesign/shared.jsx` — `BrowserChrome`, `MobileFrame` presentation wrappers
  (NOT part of the site — they draw the browser/phone bezel) + small helpers.
- `redesign/atelier.jsx` — Home desktop + shared tokens (`A_PAPER`, `A_INK`,
  `A_OCHRE`, `A_DUST`, `A_MUTED`, `aDisp`, `aCaps`) + `AtelierNav`, `AtelierFooter`,
  `AtelierGratitude`, `AtelierBrowse`, `AtelierThisSeason`, `AtelierToolTeaser`.
- `redesign/atelier-mobile.jsx` — Home mobile.
- `redesign/atelier-plp.jsx` — Shop desktop+mobile, `ShopBySwitch`, `ModeChips`,
  `ProductCard`, `ALL_PRODUCTS`, `MODE_CHIPS`.
- `redesign/atelier-pdp.jsx` — Product desktop+mobile.
- `redesign/atelier-about.jsx` — Studio desktop+mobile.
- `redesign/atelier-editorial.jsx` — Field Note desktop+mobile.
- `redesign/atelier-cart.jsx` — Cart desktop+mobile, `MilestoneRibbon`, `MILESTONES`.
- `redesign/atelier-tool.jsx` — Complete‑the‑Look tool desktop+mobile, `LOOKS`,
  `useLook`, `BUNDLE_PCT`.
- `assets/products/real/` — product imagery (PNG sources + JPG web versions).
- `screenshots/` — full‑page renders of all 7 pages × desktop + mobile (14 PNGs),
  named `NN-<page>-<desktop|mobile>.png`. Visual reference of the intended result.

### Notes for the build
- Target EoD's existing **Shopify** environment (Liquid theme, or Hydrogen/React).
  Recreate these layouts with the platform's templating + your CSS system; don't
  ship the prototype JSX.
- Honour the **"two of five elements live"** state — Wood/Ceramic/Fabric are
  "Coming soon" everywhere until stock exists.
- The **`ShopBySwitch`** (Element/Object) is a core, reused IA control — build it
  once as a shared component.
- The **cart milestones** and the **tool's bundle discount** should read the same
  reward configuration so they never disagree.
