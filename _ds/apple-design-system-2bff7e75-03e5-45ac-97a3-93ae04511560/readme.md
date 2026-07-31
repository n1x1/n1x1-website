# Apple Design System

A faithful recreation of Apple's web design language — the visual system behind
apple.com, the Apple Store, product buy pages, and the Environment editorial
surfaces. This system captures **reverent product photography framed by
near-invisible UI**: edge-to-edge product "tiles" that alternate light and dark,
a single quiet blue accent, and confident-but-silent typography.

> **One design language at different volumes.** The homepage, store, configurator,
> accessories index, and environment page all share one type system, one spacing
> rhythm, and one blue accent — only the surface-mode mix and density change.

## Sources analyzed

This system was authored from a detailed written specification describing five
Apple web surfaces: **homepage, environment page, store, iPhone 17 Pro buy page,
and the accessories index.** No codebase or Figma file was provided — the spec is
the source of truth. The color system, type scale, and accent are identical across
all five surfaces; only surface-mode mix and grid density differ.

> ⚠️ **Font substitution.** SF Pro is Apple's proprietary system font and cannot be
> redistributed. On Apple platforms the font stack resolves to the real SF Pro via
> `system-ui` / `-apple-system`. Everywhere else we substitute **Inter** (Google
> Fonts). See `tokens/fonts.css`. If you have licensed SF Pro `.woff2` files, drop
> them in `assets/fonts/` and swap the `@import` for `@font-face` rules.

> ⚠️ **Icon substitution.** Apple uses **SF Symbols** (proprietary). The few web-nav
> glyphs needed (search, bag, chevron, plus, close) are recreated as clean
> thin-stroke SVGs in `assets/icons/`. They approximate SF Symbols' weight, not its
> exact paths.

---

## CONTENT FUNDAMENTALS

Apple's copy is **product-first, declarative, and short**. The product is the
subject; the words just point at it.

- **Voice & person.** Second person ("Buy", "Learn more", "Get yours today") for
  actions; third person for the product itself ("iPhone 17 Pro. The most advanced
  iPhone ever."). Rarely "we"; never "I". The brand speaks *about* the product, not
  about itself.
- **Casing.** Headline is **sentence case with a hard stop** — Apple ends fragments
  with periods for cadence: "Titanium. So strong. So light. So Pro." Nav and button
  labels are sentence case ("Learn more", not "Learn More"). Product names keep
  their exact capitalization (iPhone, AirPods, MacBook Pro).
- **Sentence rhythm.** Short. Often fragments. Periods used as beats, not grammar:
  "Designed to be loved. Built to last." The triple-fragment ("So strong. So light.
  So Pro.") is a signature device.
- **Taglines** are one line, declarative, superlative-but-restrained: "The ultimate
  iPhone." "Hello, speed." "A leap year for iPhone."
- **CTAs** are exactly two words or fewer: "Learn more", "Buy", "Add to Bag",
  "Pre-order". Two pills appear together — the soft "Learn more" then the firm "Buy".
- **Numbers & specs** are stated plainly with the unit, no hype words around them:
  "Up to 40 hours of video playback." "6.9‑inch display."
- **No emoji. No exclamation-spam.** At most one quiet superlative per line. The tone
  is calm confidence — it never shouts because it doesn't have to.
- **Legal/fine-print** is lowercase-dense, set in the smallest type, factual:
  "Available in select markets. Trade-in values vary."

**Examples to emulate:**
- Headline: `Titanium. So strong. So light. So Pro.`
- Tagline: `The ultimate iPhone.`
- Tile pair CTAs: `Learn more` · `Buy`
- Spec line: `Up to 2x faster than the previous generation.`

---

## VISUAL FOUNDATIONS

**Colors.** One blue accent — Action Blue `#0066cc` (`--color-primary`) — carries
*every* interactive element. There is no second brand color. Surfaces are pure white
`#ffffff`, parchment off-white `#f5f5f7`, or near-black tiles (`#272729 / #2a2a2c /
#252527`, micro-stepped for the faintest separation), with true black `#000000`
reserved for the nav bar and video voids. On dark tiles, in-copy links shift to a
brighter Sky Link Blue `#2997ff` so they don't disappear. Text is a single
near-black ink `#1d1d1f` on light, white on dark — never pure black for text.

**Type.** SF Pro Display for headlines (≥19px), SF Pro Text for body/UI. The
signature move is **negative letter-spacing at display sizes** (−0.28 → −0.374px) for
the "Apple tight" cadence. Body runs at **17px, not 16px**, line-height 1.47 — a
deliberate "reading, not scanning" pace. The weight ladder is **300 / 400 / 600 /
700 — 500 is absent.** Headlines are 600 (not 700). Weight 300 is real but rare,
used only on a few large airy reads.

**Spacing.** 8px base unit; structure snaps to 8/12/16/20/24. Each product tile is
~one viewport with **80px vertical padding** and at least 64px of air above its
headline. Whitespace is the product's pedestal — nothing crowds a product render
(40px minimum clearance). The footer is the one deliberately dense region.

**Backgrounds.** Edge-to-edge full-bleed tiles. **The color change between tiles IS
the section divider** — no borders, no rules, no decorative frames. Product imagery
is photographic (PNG/WebP with transparency resting on a tinted surface). The
environment page uses atmospheric photography (a dawn mountain vista) for mood.
**Zero decorative gradients** — Apple is the rare luxury site with no gradient tokens.

**Animation.** Restrained. The system-wide micro-interaction is **`transform:
scale(0.95)` on press** for every button — the only universal motion. Transitions
are short and eased (`cubic-bezier(0.4,0,0.2,1)`). No bounces, no decorative loops.

**Hover & press states.** This system documents **default and pressed only** (Apple's
own convention — never document hover). Press = `scale(0.95)`. Focus = a 2px
`#0071e3` outline on buttons.

**Borders.** Almost none. A 1px hairline `#e0e0e0` on utility/configurator cards;
a soft 3px ring of `#f0f0f0` (reads as a ring, not a line) on Pearl secondary
buttons. Full-bleed tiles have no borders at all.

**Shadows.** **Exactly one drop-shadow exists in the whole system:**
`rgba(0,0,0,0.22) 3px 5px 30px` — applied *only* to product renders resting on a
surface, to give the product physical weight. Never on cards, buttons, or text. UI
elevation comes from (a) surface-color change and (b) backdrop-blur on sticky bars.

**Transparency & blur.** `backdrop-filter: saturate(180%) blur(20px)` on the frosted
sub-nav and the floating buy bar — parchment at 80% opacity floating over content.
Translucent gray chips (`rgba(210,210,215,0.64)`) host circular controls over photos.

**Corner radii.** A strict grammar with no in-between values: `0` (full-bleed tiles) ·
`5px` (rare inline chips) · `8px` (dark utility buttons, inline imagery) · `11px`
(Pearl capsules) · `18px` (utility cards) · `pill 9999px` (the signature CTA, search
input, configurator chips) · `full` (circular control chips).

**Cards.** Utility cards are white, 1px `#e0e0e0` hairline, 18px radius, 24px padding,
**no shadow** (the product render inside carries the one system shadow). Full-bleed
tiles aren't cards at all — they're edge-to-edge color bands.

**Imagery vibe.** Crisp, neutral-to-cool, studio-lit product renders on tinted
surfaces; warm atmospheric photography on the environment page. No grain, no filters
— clarity is the aesthetic.

---

## ICONOGRAPHY

Apple's web UI is **almost icon-free** — the product photography does the
communicating. The handful of glyphs that appear are functional nav controls, not
decoration:

- **System.** Apple uses **SF Symbols** (proprietary, not redistributable). It is a
  thin-stroke, optically-balanced, weight-matched icon set tightly coupled to SF Pro.
- **Web usage is minimal:** a magnifying-glass (search), a shopping bag, chevrons
  (carousel / "more"), plus (expand), and close (×). Most are monochrome, inheriting
  `currentColor`.
- **No emoji. No unicode-glyph icons.** Icons are SVG, rendered at small sizes
  (~14–16px in nav), and always quiet.
- **Substitution:** because SF Symbols can't ship, `assets/icons/` contains clean
  thin-stroke SVG approximations (`search`, `bag`, `chevron-right`, `plus`, `close`)
  matched to SF Symbols' ~1.1px stroke weight. They use `stroke="currentColor"` so
  they tint to ink, white, or blue by context. **Flagged as approximations** — swap in
  real SF Symbols exports if licensed.
- **The Apple logo** (`assets/logo-apple.svg`) is the one true brand mark, centered in
  the global nav. It tints to `currentColor` (white on the black nav).

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (import-only). Consumers link this one file.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest for use in Claude Code.

**`tokens/`** — CSS custom properties (all `@import`ed by `styles.css`)
- `colors.css` · `typography.css` · `spacing.css` · `shape.css` (radius + the single
  shadow + motion) · `fonts.css` (Inter substitute) · `base.css` (resets + `.t-*` type
  helpers).

**`assets/`**
- `logo-apple.svg` — the Apple mark.
- `icons/` — search, bag, chevron-right, plus, close (SF Symbols approximations).

**`components/`** — reusable React primitives (see each `.prompt.md`)
- `buttons/` — `Button` (primary pill, secondary ghost pill, dark utility, pearl
  capsule, store-hero), `IconButton` (circular control chip).
- `cards/` — `ProductTile` (light / parchment / dark variants), `StoreCard`,
  `ConfigChip`.
- `navigation/` — `GlobalNav`, `SubNav` (frosted).
- `forms/` — `SearchInput`.

**`ui_kits/`** — full-screen recreations
- `marketing/` — apple.com homepage: global nav, frosted sub-nav, alternating
  light/dark product tiles, footer.
- `store/` — store + iPhone configurator: utility-card grid, configurator chips,
  floating sticky buy bar.

**Design System tab** — foundation specimen cards live throughout (`*.card.html`),
grouped Type / Colors / Spacing / Brand / Components.
