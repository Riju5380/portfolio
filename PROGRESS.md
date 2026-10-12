# PROGRESS.md

Tracks build progress of the portfolio. See [`CLAUDE.md`](./CLAUDE.md) for project rules.

## Milestones

### 0. Docs & repo
- [x] CLAUDE.md
- [x] PROGRESS.md
- [x] git init + .gitignore + first commit

### 1. Scaffold
- [x] Vite + React 19 + TS
- [x] Tailwind v4, motion, lucide-react, simple-icons, self-hosted fonts (Space Grotesk / Inter / JetBrains Mono)
- [x] `BASE_PATH`-aware `vite.config.ts`

### 2. Design system & layout
- [x] Theme tokens, grid + noise background, ambient glow
- [x] Config files (`site.ts`, `projects.ts`)
- [x] Shared components (Reveal, MaskedLines, Button, SectionLabel, StatusDot, PhoneFrame)
- [x] Navigation (scroll backdrop, active section, mobile menu, Esc, focus trap)
- [x] Custom cursor (desktop fine-pointer only, off for reduced motion)

### 3. Sections
- [x] Hero + phone centerpiece (real dashboard screen, orbits, pointer parallax)
- [x] 01 / About (facts + animated Dart code panel)
- [x] 02 / Selected Work — StockLearn case study + 5-screen strip
- [x] More projects / "More experiments coming soon" tile
- [x] 03 / Toolkit (5 technologies, brand logos, no percentages)
- [x] AI-assisted development + IDEA → SHIP stepper
- [x] 04 / Let's Connect + copy email (with feedback + fallback)
- [x] Footer + back-to-top

### 4. Polish
- [x] Reduced-motion + small-device fallbacks
- [x] Focus states, skip link, semantic landmarks
- [x] SEO + Open Graph (`og-image.png`) + favicon + robots.txt
- [x] Real screenshots (status bar cropped, WebP ~35 KB each)

### 5. Deploy & docs
- [x] GitHub Pages workflow
- [x] README (setup, run, build, deploy, things to replace)

### 6. Verification
- [x] `npm run build` + lint clean
- [x] Visual check desktop 1440 / tablet 768 / mobile 390
- [x] Console clean, links correct, keyboard nav + mobile menu work
- [x] Sub-path build (`BASE_PATH=/portfolio/`) works
- [ ] Test on a real phone after first deploy
- [ ] Push to GitHub + enable Pages (Settings → Pages → GitHub Actions)

## Assets / info to replace later
- `VITE_SITE_URL` in `.env` if the repo isn't `Riju5380/portfolio`
- StockLearn screenshots in `src/assets/stocklearn/` when the app UI changes
- `public/og-image.png` if you want a different social card
- Add future projects in `src/config/projects.ts`

## Ideas / possible next steps
- Code-split `motion` with `LazyMotion` to trim JS (~130 KB gzip now)
- Add a real photo / photography section if desired (none fabricated)

## Log
- 2026-10-12 — Plan approved (GitHub Pages, git with commits). Wrote CLAUDE.md and PROGRESS.md.
- 2026-10-12 — User supplied real StockLearn screenshots → cropped, converted to WebP, used instead of a coded mockup.
- 2026-10-12 — Built all sections. Fixed: masked headlines not revealing, mobile horizontal overflow (code panel), mobile menu collapsed by header backdrop-filter, tablet scroll-cue overlap. Verified at 3 breakpoints, reduced motion, sub-path build. Added Pages workflow + README.
