# andytule.github.io — Personal Portfolio

> Portfolio for **Andy Le**, Software Engineer. Deployed at **[andytule.github.io](https://andytule.github.io)**.

---

## Changelog

### Navbar

- Nav link text is now **`rgba(235,235,245,0.28)` at rest** and brightens to `rgba(235,235,245,0.92)` on hover — matches Apple's restrained typographic hierarchy on dark surfaces (explicit `rgba` used instead of Tailwind opacity modifiers to guarantee Tailwind v4 JIT compatibility).
- Hover state uses inline `onMouseEnter/Leave` for colour only; underline animation remains a pure CSS `group-hover:scale-x-100` transform.
- Dropped `useState` from `NavLink`.

### Shared `Pill` Component (`components/shared/Pill.tsx`)

- **Single source of truth for all badge/label pills** across the entire app.
- Variants: `default` · `accent` (blue) · `green` · `purple` — each maps to Apple-calibrated token values.
- Apple pill design rationale:
  - Backgrounds are **very low opacity (10%)** — the pill reads as a _tinted label_, not a filled chip.
  - Borders sit at ~22% opacity — slightly more visible than the fill for edge definition.
  - Font is 0.6875rem / weight 500 / letter-spacing 0.01em — legible but unobtrusive.
- `pulse` prop adds an animated dot for live/active status (used on "Open to opportunities" and "Currently At").
- `hoverClassName` prop allows card-level `group-hover:` overrides without forking the component.
- Replaces all raw `.pill` / `.pill-green` / `.pill-accent` CSS class strings across: `IdentityCard`, `JobCard`, `FeaturedCard`, `Timeline`, `Projects`.

### JobCard

- Uses `<Pill variant="green" pulse>` — identical token to IdentityCard's "Open to opportunities" pill, perfectly matching visuals.
- Layout unchanged: logo → role → tenure → "Currently At" pill at bottom.

### Featured Project

- "Featured Project" badge → `<Pill variant="accent">`.
- GitHub action → `<Pill variant="purple">`.
- Live action → `<Pill variant="green">` — now visually consistent with all other green pills site-wide.
- All `group-hover:` colour overrides passed via `hoverClassName` prop.

### IdentityCard — Avatar sizing (Apple-style)

- Avatar container `left` offset now uses `clamp()` so the figure **gracefully retreats** as the card narrows, instead of clipping text or jumping at a breakpoint.
- Desktop: `clamp(42%, 28%, 52%)` · Mobile: `clamp(48%, 30%, 55%)`.
- This mirrors how Apple handles layered hero imagery in their product pages — the decorative element scales proportionally within its container rather than snapping.

### Timeline & Projects

- All `.pill` / `.pill-green` / `.pill-accent` raw class strings replaced with `<Pill>` component calls.

---

## Shared Components

| Component       | Location                   | Purpose                                                |
| --------------- | -------------------------- | ------------------------------------------------------ |
| `SectionHeader` | `shared/SectionHeader.tsx` | Eyebrow + heading                                      |
| `Pill`          | `shared/Pill.tsx`          | All badge/label pills (accent, green, purple, default) |

---

## Color Palette (Apple-calibrated)

| Token               | Value     | Usage                        |
| ------------------- | --------- | ---------------------------- |
| `--color-bg`        | `#16161b` | Page background              |
| `--color-surface`   | `#23232c` | Card resting state           |
| `--color-accent`    | `#4da6ff` | Blue accent                  |
| `--color-green`     | `#30d158` | Green status                 |
| Pill fill opacity   | **10%**   | Apple-standard tint strength |
| Pill border opacity | **22%**   | Slightly stronger than fill  |

---

## Tech Stack

| Layer      | Tool                          |
| ---------- | ----------------------------- |
| Framework  | React 19 + TypeScript         |
| Bundler    | Vite 6                        |
| Styling    | Tailwind CSS v4 + shadcn/ui   |
| PDF Viewer | react-pdf + pdfjs-dist        |
| Linting    | ESLint + Prettier             |
| Deployment | GitHub Actions → GitHub Pages |

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar/index.tsx        # Sticky nav — dim at rest, bright on hover
│   │   └── Footer/index.tsx
│   ├── sections/
│   │   ├── Hero/
│   │   │   ├── FeaturedCard/       # "Featured Project" — full Tailwind group hover
│   │   │   ├── JobCard/            # "Currently At" — green pill bottom stamp
│   │   │   ├── IdentityCard/       # Name card — clamp() avatar sizing
│   │   │   ├── HeroGrid/           # Desktop CSS grid
│   │   │   ├── MobileLayout/       # Mobile flex layout
│   │   │   ├── ResumeCard/
│   │   │   ├── SocialTile/
│   │   │   └── HoverCard/
│   │   ├── Skills/
│   │   ├── Timeline/               # Uses shared Pill
│   │   ├── Projects/               # Uses shared Pill
│   │   ├── Contact/
│   │   └── Resume/
│   ├── shared/
│   │   ├── Pill.tsx                # ← Single pill source of truth
│   │   ├── SectionHeader.tsx
│   │   └── index.ts
│   └── ui/                         # shadcn/ui primitives
├── data/index.ts                   # All static content
├── hooks/
├── lib/utils.ts
├── types/index.ts
├── styles/globals.css              # Tailwind v4 + @theme tokens
├── App.tsx
└── main.tsx
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview
```

## Updating Content

All content lives in `src/data/index.ts`.
