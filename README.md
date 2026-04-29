# andytule.github.io — Personal Portfolio

> Portfolio for **Andy Le**, Software Engineer. Deployed at **[andytule.github.io](https://andytule.github.io)**.

---

## Changelog

### Refactor — Tailwind-first, extracted sub-components

#### New hook: `hooks/useHover.ts`

`useHover()` returns `[hovered, { onMouseEnter, onMouseLeave }]`. Replaces the repeated `useState(false)` + inline handler pattern that previously lived inside `SocialTile`, `ResumeCard`, and `HoverCard`. Any component that needs JS-driven hover state (e.g. passing `color` as a prop to a Lucide icon) should use this hook.

#### `HoverCard` (`Hero/HoverCard/index.tsx`)

- `cardBase: React.CSSProperties` object removed. Replaced by `cardBaseClass: string` — the same values expressed as a Tailwind class string. Child components that previously spread `{ ...cardBase }` into an inline `style` prop now compose this string into their `className`.
- `HoverCard` and `StatefulBlueCard` both converted to use `useHover` and Tailwind for hover state — no more inline style merging at runtime.

#### `SocialTile` (`Hero/SocialTile/`)

- Icon components (`CalIcon`, `MailIcon`, `GHIcon`, `LIIcon`) extracted into `SocialTile/icons.tsx`. The tile itself only handles layout and interaction.
- Still uses `useHover` (not CSS `group-hover:`) because icon `color` must be driven by JS state — Lucide components don't respond to CSS `currentColor` when `color` is passed as a prop.

#### `ResumeCard` & `IdentityCard`

- Both now use `cardBaseClass` + `useHover` instead of spreading `cardBase` and managing their own hover state.

#### `SectionHeader` (`shared/SectionHeader.tsx`)

- Removed dependency on the `.section-eyebrow` CSS class. The eyebrow styles are now expressed as inline Tailwind utilities — `text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-accent)]`.

#### `globals.css`

- `.pill`, `.pill-accent`, `.pill-green`, and `.section-eyebrow` class definitions removed. All were dead code — every callsite had already been migrated to the `Pill` component or Tailwind utilities.

#### Extracted sub-components

Every section that rendered its repeating unit inline now delegates to a dedicated component:

| New component                               | Extracted from       | Purpose                                 |
| ------------------------------------------- | -------------------- | --------------------------------------- |
| `layout/AmbientBackground/index.tsx`        | `App.tsx`            | Fixed layered ambient light orbs        |
| `sections/Contact/ContactCard.tsx`          | `Contact/index.tsx`  | Individual contact method card          |
| `sections/Projects/FeaturedProjectCard.tsx` | `Projects/index.tsx` | Full-width hero project card            |
| `sections/Projects/ProjectCard.tsx`         | `Projects/index.tsx` | Grid card for non-featured projects     |
| `sections/Timeline/TimelineEntry.tsx`       | `Timeline/index.tsx` | Single experience entry + dot indicator |

---

### Skills Section (`sections/Skills/`)

Replaced text-pill skill badges with interactive technology icons.

#### New files

| File                               | Purpose                                                                                                                                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sections/Skills/skillIconMeta.ts` | Data-only lookup table: maps every skill name to its Simple Icons CDN slug and official website URL. Add new technologies here without touching any component.                                |
| `sections/Skills/SkillIcon.tsx`    | Single icon tile — CSS `group`-hover tooltip (zero JS state), accessible `<a>` wrapper that opens the official site in a new tab, graceful `<img>` error fallback to two-letter abbreviation. |

#### `Skills/index.tsx`

- Skill badges (text `<span>`) replaced with `<SkillIcon>` tiles.
- Repeating card markup extracted into a named `SkillCategoryCard` component (satisfies `react/display-name`; allows React's reconciler to diff correctly).
- Card hover uses CSS `group` + design tokens (`--color-border-strong`, `--ease-apple`, `--radius-2xl`) — zero inline style overrides.

#### Icon rendering

- Source: `cdn.simpleicons.org/<slug>` — no npm dependency, no build-time import.
- All icons rendered white via `filter: brightness(0) invert(1)` — consistent dark-surface treatment regardless of each icon's original brand colour.
- Opacity `50% → 90%` on hover via CSS transition; tile lifts `0.5px` with a shadow for tactile depth.
- Tooltip: pure CSS (`opacity-0 + translate-y-1` → `opacity-100 + translate-y-0` on `group-hover`), `pointer-events-none`, arrow notch via border trick.

---

### Navbar (`layout/Navbar/index.tsx`)

- Nav link text is **`rgba(235,235,245,0.28)` at rest**, brightening to `rgba(235,235,245,0.92)` on hover — Apple's restrained dark-surface typographic hierarchy.
- Explicit `rgba` values used (not Tailwind opacity modifiers) to guarantee Tailwind v4 JIT compatibility.
- Accent-blue underline animates in via `scale-x-0 → scale-x-100` on hover using pure CSS `group-hover:`.
- `useState` removed from `NavLink` — colour transitions handled by inline `onMouseEnter/Leave`.

### Shared `Pill` Component (`shared/Pill.tsx`)

Single source of truth for every badge and label across the app.

**Variants:** `default` · `accent` (blue) · `green` · `purple`

**Apple design rationale:**

- Fill opacity **10%** — reads as a tinted label, not a filled chip.
- Border opacity **~22%** — slightly more visible than the fill for edge definition.
- `w-fit` on the base element prevents pills from stretching inside flex columns.
- `pulse` prop renders an animated dot for live/active status indicators.
- `hoverClassName` prop accepts `group-hover:` overrides for cards that flip colour on hover — explicit `rgba()` values used for reliable Tailwind v4 JIT generation.

**Used in:** `IdentityCard`, `JobCard`, `FeaturedCard`, `Timeline`, `Projects`.

### `JobCard` (`Hero/JobCard/index.tsx`)

- All card styles are Tailwind classes, allowing `hover:bg-[#1a7fe8]` and `hover:border-transparent` to override correctly.
- "Currently At" status uses `<Pill variant="green" pulse>` with explicit `rgba()` hover overrides matching the Live pill in `FeaturedCard`.
- Layout: logo + role → tenure → "Currently At" pill anchored at the bottom.

### `FeaturedCard` (`Hero/FeaturedCard/index.tsx`)

- All hover states via CSS `group` — zero `useState`.
- **"Featured Project"** badge → `<Pill variant="accent">`.
- **GitHub** action → `<Pill variant="purple">`.
- **Live ↗** action → `<Pill variant="green">`.
- Screenshot panel scales `1.03×` on hover via `group-hover:scale-[1.03]`.
- `onClick` scrolls to `#projects`.

### `IdentityCard` (`Hero/IdentityCard/index.tsx`)

- **"Software Engineer"** label → `<Pill variant="accent">`.
- **"Open to opportunities"** label → `<Pill variant="green" pulse>`.
- Avatar container `left` offset uses `clamp()` so the figure retreats proportionally as the card narrows.
  - Desktop: `clamp(42%, 28%, 52%)` · Mobile: `clamp(48%, 30%, 55%)`

---

## Shared Components

| Component       | Location                   | Purpose                                                |
| --------------- | -------------------------- | ------------------------------------------------------ |
| `SectionHeader` | `shared/SectionHeader.tsx` | Eyebrow + heading (fully Tailwind, no CSS class dep)   |
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
│   │   ├── AmbientBackground/index.tsx  # Fixed layered ambient light orbs
│   │   ├── Navbar/index.tsx             # Sticky nav — dim at rest, bright on hover
│   │   └── Footer/index.tsx
│   ├── sections/
│   │   ├── Hero/
│   │   │   ├── FeaturedCard/            # "Featured Project" bento card
│   │   │   ├── HeroGrid/                # Desktop CSS grid layout
│   │   │   ├── HoverCard/               # cardBaseClass token + HoverCard/StatefulBlueCard
│   │   │   ├── IdentityCard/            # Name/status card — clamp() avatar sizing
│   │   │   ├── JobCard/                 # "Currently At" employer card
│   │   │   ├── MobileLayout/            # Mobile flex layout
│   │   │   ├── ResumeCard/              # Resume icon card
│   │   │   ├── SocialTile/
│   │   │   │   ├── icons.tsx            # CalIcon, MailIcon, GHIcon, LIIcon
│   │   │   │   └── index.tsx            # Tile layout + useHover
│   │   │   └── index.tsx
│   │   ├── Contact/
│   │   │   ├── ContactCard.tsx          # Individual contact method card
│   │   │   └── index.tsx
│   │   ├── Projects/
│   │   │   ├── FeaturedProjectCard.tsx  # Full-width hero project card
│   │   │   ├── ProjectCard.tsx          # Grid card for non-featured projects
│   │   │   └── index.tsx
│   │   ├── Timeline/
│   │   │   ├── TimelineEntry.tsx        # Single experience entry + dot indicator
│   │   │   └── index.tsx
│   │   ├── Skills/
│   │   │   ├── skillIconMeta.ts     # Slug + URL lookup for every skill (data only)
│   │   │   ├── SkillIcon.tsx        # Icon tile: CSS tooltip, link, img fallback
│   │   │   └── index.tsx            # Section + SkillCategoryCard
│   │   ├── Resume/
│   │   └── index.ts
│   ├── shared/
│   │   ├── Pill.tsx                     # ← Single pill source of truth
│   │   ├── SectionHeader.tsx            # Eyebrow + heading (Tailwind-only)
│   │   └── index.ts
│   └── ui/                              # shadcn/ui primitives
├── data/index.ts                        # All static content
├── hooks/
│   ├── useHover.ts                      # ← Shared JS hover state
│   ├── useScrollReveal.ts
│   ├── useActiveSection.ts
│   └── index.ts
├── lib/utils.ts
├── types/index.ts
├── styles/globals.css                   # Tailwind v4 + @theme tokens (no pill/eyebrow classes)
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
