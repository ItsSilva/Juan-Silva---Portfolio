# Juan Silva Portfolio — Full Build

## Context

The user (Juan Silva, Interactive Media Designer) wants his single-page portfolio built as a
fully functional, deployment-ready (Vercel) site with micro-interactions and 100% responsiveness.

Two sources drive the build:

1. **The Figma design** (`design_context.tsx`, downloaded to `/tmp/figma-design-context/portfolio/`)
   — a 1440px brutalist layout defining the storytelling and visual style the user asks us to respect.
2. **The user's own carousel prototype** (`src/imports/App.tsx` + `src/imports/index.css`) — a
   polished, responsive, keyboard/click-driven carousel wired to his real project images. This is
   the intended implementation of the design's "A bit of my work" section and must be reused, not rebuilt.

Currently `src/App.tsx` is an empty placeholder. The design's storytelling (top → bottom) is:
Hero → About/Intro → "A bit of my work" (carousel) → "Left wanting more?" CTA → "Let's get in touch" footer.

The user explicitly grants freedom to rearrange elements, resize, and reflow **as long as the
storytelling and visual style are preserved**. So we translate the design's absolute positioning
into responsive, section-based layout rather than copying pixel coordinates.

## Approach

Rebuild `src/App.tsx` as a composition of section components, converting the design's absolute
positioning into semantic, responsive sections (Tailwind v4 utilities for layout + targeted custom
CSS in `src/index.css` for the bespoke display typography and the carousel). Reuse the user's
carousel prototype verbatim as the work section.

### Assets & fonts
- Copy design assets from `/tmp/figma-design-context/portfolio/assets/` into `public/assets/`
  (only the ones actually used — see below). Reference via `/assets/<file>`. No `/tmp` or Figma
  remote URLs may remain.
- Keep the user's carousel images in `src/imports/` (imported by the carousel component).
- **Fonts** (Lexend Regular/SemiBold, Tilt Warp Regular — from `<figma_imported_fonts>`): resolve
  locally for Vercel independence via `figma fonts resolve --input fonts.json --out-dir public/fonts`,
  then declare `@font-face` under the exact `cssFamily` values (`"Lexend:Regular"`,
  `"Lexend:SemiBold"`, `"Tilt Warp:Regular"`) in `src/index.css`. Replace the current
  `src/imports/index.css` figma-static-URL `@font-face` rules with the local ones. Preserve every
  text node's exact family/size/weight and `fontVariationSettings: "XROT" 0, "YROT" 0` on Tilt Warp.
  (If any row is blocked, fall back to a Google load of the same family and note it.)

### Files
- `src/App.tsx` — compose the page: `<Hero/> <About/> <Work/> <MoreProjects/> <Contact/>`.
- `src/components/Hero.tsx` — pixelated "PORTFOLIO" bitmap (`38196.png`, slight rotation), "2026"
  label. The red "X" reads as part of the hero composition; keep the bitmap asset as-is.
- `src/components/About.tsx` — left: "JUAN / SILVA" (Tilt Warp, red "SILVA") + "Interactive Media
  Designer"; center: portrait (`9265c.png`) layered over the two unsplash images (`f483a.png`,
  `8f7ff.png`) with red square outlines; right: "HI!" + two bio paragraphs + social-icon row
  (SVGs `71578/b1c72/86eef/8398a/85dd8/ccd18/7b28a/ab051/eff1b/fe86a/92a9c`). Reflow to a single
  column on mobile.
- `src/components/Work.tsx` — "A BIT OF MY WORK" header (red "WORK") + decorative red square/X marks,
  rendering `<WorkCarousel/>`.
- `src/components/WorkCarousel.tsx` — the user's `src/imports/App.tsx` carousel logic moved here
  (state, keyboard nav, click hit-areas, indicators, animated copy) unchanged in behavior.
- `src/components/MoreProjects.tsx` — "LEFT WANTING MORE?" heading + paragraph + red "MORE OF MY
  PROJECTS!" button (links to Behance), `_MG_1943` image (`0f1c4.png`) on the white rotated panel,
  red arrow vectors as accents.
- `src/components/Contact.tsx` — "LET'S GET IN TOUCH!" on the white panel; email / LinkedIn /
  Behance rows with icons (`d5b1b/1c746/5c7b0.svg`), each a working link (`mailto:` + external).
- `src/index.css` — `@import "tailwindcss"` first; then local `@font-face`, `:root`/body tokens
  (bg `#0d0b0c`, text `#fefefe`, accent `#ff0103`), the carousel CSS from the prototype (moved from
  `src/imports/index.css`), and section-level custom rules. No unlayered `*` reset.

### Micro-interactions
Carousel already has slide + copy animations and keyboard/click nav. Add: hover lift/underline on
links & the CTA/project buttons, hover scale on social icons, subtle entrance reveals on sections
(IntersectionObserver or CSS), and honor `prefers-reduced-motion` (already partly handled).

### Responsiveness
Every section flows/stacks: About → single column; big Tilt Warp headings use `clamp()`; decorative
red squares/arrows/X-marks scale down or hide on small screens; carousel already responsive. Verify
at ~360px, ~768px, ~1440px.

### Vercel readiness
Vite is auto-detected by Vercel; confirm `pnpm build` succeeds. Optionally add a minimal
`vercel.json` (SPA/static). Ensure all asset & font paths are root-relative and self-contained.

## Verification
1. `pnpm build` completes with no TypeScript/Vite errors.
2. Load the preview: all five sections render top-to-bottom matching the design's storytelling;
   fonts load locally (no network to figma static); no missing images (check `public/assets`).
3. Carousel: click left/right zones, indicator buttons, and arrow keys all switch projects with
   animation; "View project" and CTA links open correct Behance URLs; contact links work.
4. Resize to mobile/tablet/desktop — no overflow, clipping, or broken layout.
5. Grep the built output / source to confirm no `/tmp` paths or `static.figma.com` references remain.
