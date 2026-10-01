# Nobel Crest — React

The Nobel Crest website, rebuilt on React (Vite + React Router) from the original static HTML/CSS/JS build in `../site`. The UI, copy, layout and behavior are unchanged — only the tech stack is different.

## Stack
- **Vite** — dev server & build
- **React 19** — components
- **React Router** — client-side routing (`/`, `/about`, `/residential`, `/retail`, `/leasing`, `/offices`, `/commercial`, `/projects`, `/about-us`, `/contact`)

## Structure
```
src/
  components/   Header, Footer, Hero (slider + finder), ProjectCards, ProjectFilters,
                Feat, Cta, PageHero, Reveal (scroll reveal), EnquireModal (enquiry popup)
  pages/        one component per route, matching the original *.html pages
  data/         site.js (nav, projects, segments) and images.js (image URLs)
  hooks/        useReveal (IntersectionObserver), useTitle (per-page <title>/meta)
  style.css     the original assets/style.css, unchanged
```

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build   # outputs to dist/
npm run preview # preview the production build
```

## Notes
- All interactive behavior from the old `assets/main.js` (mobile nav, hero slider, finder tabs, project filters, scroll reveal, enquire modal, form "thank you" states) is reimplemented as React state/hooks — no jQuery-style DOM scripts.
- Content (project names, prices, address, phone, email, map) is still placeholder data pulled from `src/data/site.js`; swap it there before launch, same as with the static version.
- Photos are still hotlinked from Unsplash via `src/data/images.js`; replace with Nobel Crest's own assets before going live.
