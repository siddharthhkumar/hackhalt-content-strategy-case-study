# HackHalt Content Intelligence

Interactive single-page case study: a strategic content, workflow and measurement review of
HackHalt Academy's social media ecosystem.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 (Next.js will pick the next free port if 3000 is busy).

## Design direction

- Editorial / consulting-report aesthetic — warm off-white paper, restrained ink typography
- One accent colour (deep signal green) used sparingly for emphasis and the target state
- Fraunces (display) + Inter (body) + IBM Plex Mono (labels, section numbers)
- Large section numbers as visual anchors, sticky nav with scroll-spy, thin scroll progress bar
- Interactive, click/keyboard-accessible diagrams for every framework in the source review
- No invented analytics — quantitative claims are explicitly out of scope; content is labelled
  as strategic observation, proposed framework, workflow, or measurement framework
- Two WebGL (react-three-fiber) moments, code-split and desktop-only, both respecting
  `prefers-reduced-motion`:
  - **Hero background** — a grid of points scatters on load, then converges into a structured
    lattice with a handful of "signal" (accent-coloured) nodes — a literal read of "from posting
    content to building a system." Pointer-reactive tilt once settled.
  - **Growth Loop (07)** — the 8-stage loop renders as a drag-to-rotate 3D ring; each stage is a
    real, focusable `<button>` positioned in 3D space (via drei's `Html`), so it stays fully
    keyboard-accessible. Falls back to the flat 2D circular layout below `lg`.

## Content source

All strategy content in `lib/data.ts` is transcribed from *HackHalt Content & Social Growth
Review* (Siddharth Kumar). No reach, engagement, or conversion figures are fabricated anywhere
in the site.

## Structure

- `app/layout.tsx` — fonts, metadata, JSON-LD
- `app/page.tsx` — assembles the page from `components/`
- `components/` — one component per section/diagram (see file names)
- `lib/data.ts` — single source of truth for all copy and framework data

## Next steps

1. Deploy to Vercel.
2. Swap in a real Open Graph image (`app/opengraph-image` convention) once branding is final.
3. If real platform analytics become available, add a clearly-labelled "Observed Performance"
   section — keep it separate from the Measurement Framework section, which stays hypothetical
   until backed by data.
