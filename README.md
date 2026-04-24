# andytule.github.io — Personal Portfolio

> Software Engineering portfolio for Andy Tu Le, deployed at **[andytule.github.io](https://andytule.github.io)**.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite 8 |
| Styling | SCSS (BEM methodology) |
| Linting | ESLint + Prettier |
| Deployment | GitHub Actions → GitHub Pages |

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar/
│   │   │   └── index.tsx         # Top navigation bar with active-section tracking
│   │   └── Footer/
│   │       └── index.tsx         # Footer with links
│   ├── sections/
│   │   ├── Hero/
│   │   │   └── index.tsx         # Landing hero with focus card, CV download, booking
│   │   ├── Skills/
│   │   │   └── index.tsx         # Technical skills grid
│   │   ├── Timeline/
│   │   │   └── index.tsx         # Work experience timeline
│   │   ├── Projects/
│   │   │   └── index.tsx         # Selected projects grid
│   │   └── Contact/
│   │       └── index.tsx         # Contact CTA section
│   └── ui/
│       └── Chip/
│           └── index.tsx         # Reusable tag/chip component
├── data/
│   └── index.ts                  # ALL static content (nav, skills, timeline, projects…)
├── hooks/
│   ├── useScrollReveal.ts        # IntersectionObserver fade-in on scroll
│   └── useActiveSection.ts       # Tracks which section is in view for nav highlighting
├── styles/
│   ├── main.scss                 # Root stylesheet entry
│   ├── abstracts/
│   │   ├── _variables.scss       # CSS custom properties / design tokens
│   │   └── _mixins.scss          # Reusable SCSS mixins
│   ├── base/
│   │   ├── _reset.scss           # CSS reset
│   │   └── _typography.scss      # Global type styles
│   ├── components/               # Per-component SCSS partials (BEM)
│   │   ├── _hero.scss
│   │   ├── _navbar.scss
│   │   ├── _skills.scss
│   │   ├── _timeline.scss
│   │   ├── _projects.scss
│   │   ├── _contact.scss
│   │   └── _footer.scss
│   └── layout/
│       └── _app.scss             # App shell / layout grid
├── types/
│   └── index.ts                  # Shared TypeScript interfaces
├── App.tsx                       # Root component — composes all sections
└── main.tsx                      # React entry point
```

### Conventions

- **Every component lives in its own folder** (`ComponentName/index.tsx`). This keeps co-located test files, SCSS modules, and sub-components tidy.
- **All static data lives in `src/data/index.ts`**. To update your job history, skills, or projects, edit only this file — no component changes needed.
- **Path alias `@/`** maps to `src/`. Use it everywhere instead of relative `../..` chains.
- **BEM naming** throughout SCSS: `.block__element--modifier`.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:5173
npm run dev

# Type-check + production build → dist/
npm run build

# Preview the production build locally
npm run preview
```

---

## Deployment (GitHub Pages)

Deployment is fully automated via **GitHub Actions** (`.github/workflows/deploy.yml`).

**How it works:**
1. Push to `main` → workflow triggers automatically.
2. CI runs `npm ci`, `npm run lint`, then `npm run build`.
3. The `dist/` folder is uploaded as a Pages artifact and deployed.
4. Site is live at `https://andytule.github.io` within ~60 seconds.

**One-time repo setup (only needed once):**
1. Go to **Settings → Pages** in your GitHub repo.
2. Set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow handles everything else.

> The `base: '/'` in `vite.config.ts` is correct for a root-domain Pages site (`andytule.github.io`). If you ever move to a sub-path (e.g. `/my-app/`), update `base` to match.

---

## Updating Content

All portfolio content is managed in a single file: **`src/data/index.ts`**.

| Export | What it controls |
|---|---|
| `NAV_ITEMS` | Navigation links |
| `CURRENT_FOCUS` | Hero card — current role & company |
| `SKILLS` | Skills section cards |
| `TIMELINE` | Work experience entries |
| `EDUCATION` | Education entries |
| `PROJECTS` | Project cards (title, description, links, tags) |
| `SOCIAL_LINKS` | GitHub / LinkedIn / Email links |

---

## Adding a New Section

1. Create `src/components/sections/NewSection/index.tsx`.
2. Add its SCSS partial to `src/styles/components/_new-section.scss` and import it in `main.scss`.
3. Import and render `<NewSection />` in `src/App.tsx`.
4. Add any static data to `src/data/index.ts` and types to `src/types/index.ts`.

---

## Linting & Formatting

```bash
npm run lint          # Check for ESLint errors
npm run lint:fix      # Auto-fix ESLint errors
npm run format        # Prettier format all src files
```

ESLint is configured with:
- `@typescript-eslint` for type-aware rules
- `eslint-plugin-import` + `eslint-plugin-simple-import-sort` for clean imports
- `eslint-plugin-react-hooks` for hooks correctness
- `eslint-config-prettier` to disable formatting rules (Prettier owns that)

---

## AI Context (for future Claude sessions)

If you're picking this up in a new Claude chat, here's a quick orientation:

- **Stack**: React 19, TypeScript, Vite 8, SCSS (no CSS Modules, no Tailwind).
- **Styling approach**: Global SCSS with BEM. Each component has a corresponding `_component.scss` partial imported via `src/styles/main.scss`.
- **Data layer**: All content in `src/data/index.ts` — no CMS, no API calls.
- **Path alias**: `@/` → `src/`. Always use this in imports.
- **Component convention**: `ComponentName/index.tsx` folders, never flat `.tsx` files at the section or layout level.
- **Deployment**: GitHub Actions (`deploy.yml`) builds and deploys to GitHub Pages on every push to `main`. No manual deploy commands.
- **No external UI library** — all UI is hand-crafted SCSS.
