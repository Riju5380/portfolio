# Srijit Santra — Portfolio

Personal portfolio for **Srijit Santra**, App Developer at Astfast Infotech (Flutter · cross-platform).
Dark, editorial "Digital After Dark" design with **StockLearn** as the featured case study.

Built with React 19, TypeScript, Vite, Tailwind CSS v4, Motion (Framer Motion), lucide-react and simple-icons.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build

```bash
npm run build     # type-checks, then outputs static files to dist/
npm run preview   # serves dist/ at http://localhost:4173
npm run lint
```

## Deploy — GitHub Pages

1. Push this folder to a GitHub repository (e.g. `Riju5380/portfolio`) on the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which builds and publishes the site.

The workflow sets the correct base path automatically:
- repo named `Riju5380.github.io` → `https://riju5380.github.io/`
- any other repo name → `https://riju5380.github.io/<repo>/`

`VITE_SITE_URL` (used for canonical / Open Graph URLs) is also set by the workflow. For local builds it
comes from `.env` — update it if you deploy elsewhere.

To test a sub-path build locally:

```bash
BASE_PATH=/portfolio/ npm run build && npx vite preview --base /portfolio/
```

### Other hosts
- **Vercel / Netlify:** import the repo; build command `npm run build`, output directory `dist`.
  No base path needed. Set `VITE_SITE_URL` to your domain in the project's environment variables.

## Editing content

| What | Where |
|---|---|
| Name, role, links, copy for every section, stack, workflow steps | `src/config/site.ts` |
| Projects (StockLearn + future ones) | `src/config/projects.ts` |
| StockLearn screenshots | `src/assets/stocklearn/` |
| Colors, fonts | `src/index.css` (`@theme`) |
| Page title, description, social preview | `index.html`, `public/og-image.png` |
| Favicon | `public/favicon.svg` |

### Adding a project
Add an object to the `projects` array in `src/config/projects.ts` (a commented template is included).
It appears as a tile under **More projects**. Set `featured: true` on one project to give it the large layout.

### Replacing screenshots
Screens are 728×1520 WebP files with the phone status bar cropped off. To swap one, replace the file
with the same name, or add a new file and reference it in `stockLearnScreens` in `projects.ts`.

```bash
# crop the status bar (80px here) and convert to WebP
cwebp -q 80 -crop 0 80 728 1520 input.jpg -o src/assets/stocklearn/01-dashboard.webp
```

## Things you may want to replace later
- `public/og-image.png` — social preview card (currently uses the StockLearn dashboard screen)
- StockLearn screenshots in `src/assets/stocklearn/` when the app UI changes
- Status line "Available for interesting projects" in `site.ts` if your availability changes
- `VITE_SITE_URL` in `.env` once the final URL is known
- Add more projects to `projects.ts` as they're ready
