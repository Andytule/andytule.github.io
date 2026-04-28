# andytule.github.io — Personal Portfolio

> Portfolio for **Andy Le**, Software Engineer. Deployed at **[andytule.github.io](https://andytule.github.io)**.

---

## Changelog

### Navbar (`layout/Navbar/index.tsx`)

- Nav link text is **`rgba(235,235,245,0.28)` at rest**, brightening to `rgba(235,235,245,0.92)` on hover — Apple's restrained dark-surface typographic hierarchy.
- Explicit `rgba` values used (not Tailwind opacity modifiers) to guarantee Tailwind v4 JIT compatibility.
- Accent-blue underline animates in via `scale-x-0 → scale-x-100` on hover using pure CSS `group-hover:`.
- `useState` removed from `NavLink` — colour transitions handled by inline `onMouseEnter/Leave`.

### Shared `Pill` Component (`shared/Pill.tsx`)

Single source of truth for every badge and label across the app. Replaces all raw `.pill` / `.pill-green` / `.pill-accent` CSS class strings.

**Variants:** `default` · `accent` (blue) · `green` · `purple`

**Apple design rationale:**

- Fill opacity **10%** — reads as a tinted label, not a filled chip.
- Border opacity **~22%** — slightly more visible than the fill for edge definition.
- `w-fit` on the base element prevents pills from stretching inside flex columns.
- `pulse` prop renders an animated dot for live/active status indicators.
- `hoverClassName` prop accepts `group-hover:` overrides for cards that flip colour on hover — explicit `rgba()` values used (not shorthand opacity modifiers) for reliable Tailwind v4 JIT generation.

**Used in:** `IdentityCard`, `JobCard`, `FeaturedCard`, `Timeline`, `Projects`.

### `JobCard` (`Hero/JobCard/index.tsx`)

"Currently At" employer card (previously `DotmaticsCard`).

- `cardBase` inline styles removed — all card styles are now Tailwind classes, allowing `hover:bg-[#1a7fe8]` and `hover:border-transparent` to override correctly.
- "Currently At" status uses `<Pill variant="green" pulse>` with explicit `rgba()` hover overrides matching the Live pill in `FeaturedCard`.
- Layout: logo + role → tenure → "Currently At" pill anchored at the bottom.

### `FeaturedCard` (`Hero/FeaturedCard/index.tsx`)

Featured project bento card (previously `ChordShiftCard`).

- All hover states via CSS `group` — zero `useState`.
- **"Featured Project"** badge → `<Pill variant="accent">`.
- **GitHub** action → `<Pill variant="purple">`.
- **Live ↗** action → `<Pill variant="green">` — consistent with all green pills site-wide.
- Screenshot panel scales `1.03×` on hover via `group-hover:scale-[1.03]`.
- `onClick` scrolls to `#projects`.

### `IdentityCard` (`Hero/IdentityCard/index.tsx`)

- **"Software Engineer"** label → `<Pill variant="accent">`.
- **"Open to opportunities"** label → `<Pill variant="green" pulse>`.
- Avatar container `left` offset uses `clamp()` so the figure retreats proportionally as the card narrows — never clips text, never snaps at a breakpoint.
  - Desktop: `clamp(42%, 28%, 52%)` · Mobile: `clamp(48%, 30%, 55%)`

### `SocialTile` (`Hero/SocialTile/index.tsx`)

- Still uses `useState` for hover — required because icon `color` is passed as a prop to the SVG/Lucide component and cannot be driven by CSS `currentColor` through `group-hover:` alone.

### `Timeline` & `Projects`

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
| Pill border opacity | **~22%**  | Slightly stronger than fill  |

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
│   │   │   ├── FeaturedCard/       # "Featured Project" bento card
│   │   │   ├── JobCard/            # "Currently At" employer card
│   │   │   ├── IdentityCard/       # Name/status card — clamp() avatar sizing
│   │   │   ├── HeroGrid/           # Desktop CSS grid layout
│   │   │   ├── MobileLayout/       # Mobile flex layout
│   │   │   ├── ResumeCard/         # Resume icon card
│   │   │   ├── SocialTile/         # Square social link tiles
│   │   │   ├── HoverCard/          # Generic card wrapper + cardBase token
│   │   │   └── index.tsx
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

## Section Order

1. Hero (bento grid)
2. Skills
3. Experience (Timeline)
4. Projects
5. Contact
6. **Resume** ← standalone PDF viewer at the bottom

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview
```

## Updating Content

All content lives in `src/data/index.ts` — edit skills, timeline, projects, and links there without touching any component.
