# andytule.github.io — Personal Portfolio

> Portfolio for **Andy Le**, Software Engineer. Deployed at **[andytule.github.io](https://andytule.github.io)**.

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
│   │   │   └── index.tsx         # Landing hero: intro, Dotmatics job card, CV download, booking
│   │   ├── Skills/
│   │   │   └── index.tsx         # Technical skills grid
│   │   ├── Timeline/
│   │   │   └── index.tsx         # Work experience timeline
│   │   ├── Projects/
│   │   │   └── index.tsx         # Featured (Chord-Shift) + project grid
│   │   └── Contact/
│   │       └── index.tsx         # Contact info cards + Calendly embed + CTA buttons
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
│   │   ├── _variables.scss       # Design tokens — Deep Slate & Electric Blue palette
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

```
public/
├── resume.pdf                    # ← Place your resume PDF here (required for download button)
├── chord-shift-preview.png       # Chord-Shift app screenshot (used in hero bento + projects)
└── dotmatics-logo.png            # Dotmatics company logo (used in hero job card)
```

### Conventions

- **Every component lives in its own folder** (`ComponentName/index.tsx`).
- **All static data lives in `src/data/index.ts`**. To update job history, skills, or projects, edit only this file — no component changes needed.
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

---

## Updating Content

All portfolio content is managed in a single file: **`src/data/index.ts`**.

| Export | What it controls |
|---|---|
| `NAV_ITEMS` | Navigation links |
| `SKILLS` | Skills section cards |
| `TIMELINE` | Work experience entries |
| `EDUCATION` | Education entries |
| `PROJECTS` | Project cards — set `featured: true` to pin a project to the top spotlight card |
| `SOCIAL_LINKS` | GitHub / LinkedIn / Email links |

---

## Key Design Decisions

### Color System
Palette is **Deep Slate & Electric Blue** — defined in `src/styles/abstracts/_variables.scss`.
Primary accent: `#60b4ff` / `#2196f3`. Replace the pink `$primary` vars to retheme.

### Hero Bento Layout
The hero uses an asymmetric CSS grid (`1.6fr 320px` top row, `1.4fr 1fr 1fr` bottom row) for a dynamic bento feel. Bottom-left card shows the Chord-Shift screenshot as a CSS background image pulled from `public/chord-shift-preview.png`.

### Resume Button
The navbar Resume button uses `download="Andy_Le_Resume.pdf"` — place your PDF at `public/resume.pdf` before deploying.

### Contact Section
Includes three info cards (email, phone, Calendly) and a full Calendly inline iframe embed. Update the Calendly URL (`calendly.com/andytule321`) if your username differs.

### Featured Project
The first project with `featured: true` in `src/data/index.ts` is rendered as the large spotlight card in the Projects section with screenshot display.

---

## Linting & Formatting

```bash
npm run lint          # Check for ESLint errors
npm run lint:fix      # Auto-fix ESLint errors
npm run format        # Prettier format all src files
```

---

## AI Context (for future Claude sessions)

- **Stack**: React 19, TypeScript, Vite 8, SCSS (no CSS Modules, no Tailwind).
- **Styling approach**: Global SCSS with BEM. Each component has a corresponding `_component.scss` partial imported via `src/styles/main.scss`.
- **Data layer**: All content in `src/data/index.ts` — no CMS, no API calls.
- **Path alias**: `@/` → `src/`. Always use this in imports.
- **Component convention**: `ComponentName/index.tsx` folders, never flat `.tsx` files.
- **Deployment**: GitHub Actions (`deploy.yml`) builds and deploys to GitHub Pages on every push to `main`.
- **No external UI library** — all UI is hand-crafted SCSS.
- **Color theme**: Electric Blue (`#60b4ff`, `#2196f3`) — replaces original pink accent.
