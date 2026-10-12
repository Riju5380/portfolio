# PROGRESS.md

Tracks build progress of the portfolio. See [`CLAUDE.md`](./CLAUDE.md) for project rules.

## Milestones

### 0. Docs & repo
- [x] CLAUDE.md
- [x] PROGRESS.md
- [x] git init + .gitignore + first commit

### 1. Scaffold
- [ ] Vite + React + TS
- [ ] Tailwind v4, motion, lucide-react, self-hosted fonts
- [ ] `BASE_PATH`-aware `vite.config.ts`

### 2. Design system & layout
- [ ] Theme tokens, grid + noise background, ambient glow
- [ ] Config files (`site.ts`, `projects.ts`)
- [ ] Shared components (Reveal, Button, SectionLabel, StatusDot)
- [ ] Navigation (scroll backdrop, active section, mobile menu, keyboard)
- [ ] Custom cursor (desktop only)

### 3. Sections
- [ ] Hero + phone mockup centerpiece
- [ ] 01 / About
- [ ] 02 / Selected Work — StockLearn case study
- [ ] More projects / coming soon
- [ ] 03 / Toolkit
- [ ] AI-assisted development + workflow stepper
- [ ] 04 / Let's Connect + copy email
- [ ] Footer + back-to-top

### 4. Polish
- [ ] Reduced-motion + small-device fallbacks
- [ ] Focus states, skip link, semantic landmarks
- [ ] SEO + Open Graph + favicon + robots.txt
- [ ] Screenshot auto-detection

### 5. Deploy & docs
- [ ] GitHub Pages workflow
- [ ] README (setup, run, build, deploy, things to replace)

### 6. Verification
- [ ] `npm run build` + lint clean
- [ ] Visual check desktop / tablet / mobile
- [ ] Console clean, links correct, keyboard nav works
- [ ] Sub-path build (`BASE_PATH=/portfolio/`) works

## Assets / info to replace later
- StockLearn screenshots → `src/assets/stocklearn/`
- Optional OG image → `public/og-image.png`
- Any copy in `src/config/site.ts`

## Log
- 2026-10-12 — Plan approved (GitHub Pages, git with commits, coded mockup until screenshots are added). Wrote CLAUDE.md and PROGRESS.md.
