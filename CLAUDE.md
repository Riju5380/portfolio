# CLAUDE.md — Srijit Santra Portfolio

Single-page personal portfolio for **Srijit Santra** (App Developer at Astfast Infotech — Flutter / cross-platform).
Visual direction: **"Digital After Dark"** — dark, editorial, fine grid + noise, restrained violet/cyan neon.
Featured project: **StockLearn** (Flutter virtual stock market simulator). Source lives in `../StockLearn`.

Progress is tracked in [`PROGRESS.md`](./PROGRESS.md). **Update it after every milestone** (tick items, add a dated log line).

## Stack
- Vite + React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`, tokens in `src/index.css` `@theme`)
- `motion` (Framer Motion) for animation
- `lucide-react` for UI icons; brand/tech logos from `simple-icons` (LinkedIn inlined) in `src/components/iconData.ts`
- Fonts self-hosted with `@fontsource-variable/*` (no external font requests)

Do not add dependencies without a clear reason.

## Commands
```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build to dist/
npm run preview    # serve dist/ locally
npm run lint       # oxlint
BASE_PATH=/portfolio/ npm run build   # build for a GitHub Pages project sub-path
```

## Gotchas learned while building
- `MaskedLines`: the in-view trigger must sit on the heading, not the clipped inner lines (they never intersect).
- Grid children containing wide content (code panel) need `min-w-0`, or mobile gets horizontal overflow.
- Elements with `backdrop-filter` become the containing block for `position: fixed` children —
  the mobile menu is therefore rendered as a sibling of `<header>`.

## Structure
```
src/
  config/site.ts       # ALL personal info, links, nav items, stack, workflow steps — edit here
  config/projects.ts   # Project[] — StockLearn is featured; add future projects here
  components/          # reusable UI (Nav, Cursor, Reveal/MaskedLines, Button, PhoneFrame, Icons, ...)
  sections/            # page sections in order: Hero, About, Work, Toolkit, AIWorkflow, Contact, Footer
  hooks/               # useActiveSection, useMediaQuery/useFinePointer
  assets/stocklearn/   # real StockLearn screenshots (WebP)
public/                # favicon.svg, og-image, robots.txt
.github/workflows/     # GitHub Pages deployment
```

## Design tokens
| Token | Value |
|---|---|
| bg | `#09090B` |
| bg-2 | `#111116` |
| violet (primary) | `#8B5CF6` |
| cyan (secondary) | `#22D3EE` |
| text | `#F4F4F5` |
| muted | `#A1A1AA` |
| line | `rgba(255,255,255,0.08)` |

StockLearn mockup uses the real app palette from `../StockLearn/lib/utils/theme.dart`
(bg `#0B0F19`, card `#151D30`, blue `#2563EB`, green `#10B981`, red `#EF4444`, gold `#F59E0B`).

## Screenshots
Real StockLearn screenshots (provided by the user, originals in the git-ignored `screenshorts/` folder) live in
`src/assets/stocklearn/` as 728×1520 WebP with the phone status bar cropped off (it showed personal
notification/network icons). They are imported in `src/config/projects.ts` (`stockLearnScreens`).
`PhoneFrame` draws a neutral device frame + status bar around them. The in-app figures are simulated —
the stage is labelled "Real app screens · simulated data".

## Content & honesty rules (must follow)
- Never invent employers, qualifications, clients, testimonials, download counts, achievements, or years of experience.
- No skill percentages / proficiency bars.
- Do not invent extra projects. Only StockLearn is confirmed; others go in `projects.ts` when the user supplies them.
- StockLearn mockup data is illustrative — never present it as real market data. Keep the "learning/demo, not real trading" disclaimer.
- AI copy: AI assists the workflow; it does not replace engineering judgment.
- No fake functionality: no contact form unless wired to a real service; every button must work.

## Accessibility & motion rules
- Respect `prefers-reduced-motion` (use `useReducedMotion` from `motion/react`; CSS fallback in `index.css`).
- Custom cursor only on fine pointers + wide screens, never hides the native cursor.
- No scroll-jacking; native smooth anchor scroll only.
- Every control keyboard accessible with visible `:focus-visible` styles. Mobile menu closes on Esc.
- Maintain contrast (muted text never below `#A1A1AA` on `#09090B`).
- Heavy effects (parallax, ambient motion) disabled on small screens / coarse pointers.

## Deployment
GitHub Pages via `.github/workflows/deploy.yml` (push to `main`). The workflow passes the Pages base path as
`BASE_PATH`; `vite.config.ts` reads it (`/` for a `Riju5380.github.io` repo, `/<repo>/` otherwise).
In repo Settings → Pages, set Source to **GitHub Actions**.

## Git
Commit at milestones with clear messages. Don't push unless the user asks.
