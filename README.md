# andytule.github.io — Personal Portfolio

> Portfolio for **Andy Le**, Software Engineer. Deployed at **[andytule.github.io](https://andytule.github.io)**.

---

## Changelog

### Color Palette

- Lifted all surface colors further for a warmer, richer dark grey: background `#1e1e24`, cards `#2c2c36`, lowest surface `#22222a`.
- Blue accent updated from `#3b9eff` → `#4da6ff` (brighter, higher saturation for more pop throughout the UI).
- Accent dim increased from `rgba(59,158,255,0.14)` → `rgba(77,166,255,0.18)` for more visible accent surfaces.
- Border opacity increased from `0.09` → `0.11` (resting) and `0.16` → `0.20` (strong) for sharper card definition.
- Text secondary updated from `#8e8e9a` → `#9898a8` and tertiary from `#52525e` → `#606070` for improved legibility.
- Glass-card hover now includes a subtle blue ambient glow (`rgba(77,166,255,0.06)`) in addition to the shadow lift.

### Navbar

- Replaced **Resume download button** with a sleeping cat icon (`/public/sleeping-cat.png`) that scrolls to the Resume section on click.
- Increased navbar height from `h-14` → `h-16`, brand font size from `text-base` → `text-lg`, nav link font size from `0.65rem` → `0.72rem`, and gap between nav items from `gap-8` → `gap-9`.
- Increased sleeping cat icon size from `h-9 w-9` → `h-14 w-14` for better visibility.

### Hero Bento Grid

- Fixed desktop rendering on Windows & Mac by replacing Tailwind `[grid-template-areas]` utility classes (which have cross-browser JIT inconsistencies) with explicit inline `style` props for `gridTemplateColumns`, `gridTemplateRows`, and `gridTemplateAreas`.
- Split the single combined grid into **two separate layouts**: a flex/column mobile layout (`md:hidden`) and an explicit CSS Grid desktop layout (`hidden md:flex`), eliminating area conflicts.
- Desktop grid rows are fixed at `190px` each for consistent rendering across all browsers.
- **Resume card** redesigned: now shows a large `FileText` icon (40px) above bold "Resume" text, centered in the card, replacing the previous label+subtitle layout. Card hovers blue (`#1a7fe8`).
- **Resume card is now visible on mobile** — a dedicated Resume row was added to the mobile layout (previously only existed in the desktop grid).
- **Social tiles (Schedule, Email, GitHub, LinkedIn)** are always a perfect square (`aspectRatio: 1/1`) on both mobile and desktop. On hover: icon turns white, label text darkens. Implemented via a stateful `SocialTile` component using `useState` for reliable color transitions.
- **Social tile icons and labels are larger on mobile**: icons scale from 28px → 36px, labels from `0.5625rem` → `0.6875rem`.
- **GitHub social tile** icon color updated from `text-[#f0f0f2]` (white) to `text-[#3b9eff]` (blue) to match the other social icons.
- **Dotmatics card** is now a clickable `<a>` tag linking to `https://www.dotmatics.com/` (opens in new tab). Hovers blue.
- **Chord-Shift card** (Featured Project) now scrolls to the `#projects` section on click (entire card body). The GitHub/Live buttons use `e.stopPropagation()` so they still open their respective URLs independently. Card has a blue border glow on hover.
- **GitHub & Live buttons** on the Chord-Shift card replaced plain text links with pill-style badge buttons: GitHub uses a subtle ghost style; Live uses a blue-tinted style — both include inline Lucide/SVG icons for visual clarity.
- **Andy Le identity card** background updated to `#1c1c21` to match the refreshed palette.
- Replaced custom inline `GitHubIcon` and `LinkedInIcon` SVG components with stateful icon components for consistent hover color control.

### Projects Section

- **Section eyebrow label** renamed from `"Work"` → `"Projects"` to accurately reflect the content.
- **Featured project card** now hovers with a blue border glow (`rgba(59,158,255,0.4)`) and the entire card is clickable (opens the demo URL in a new tab). Action buttons (`View Live`, `Source`) use `e.stopPropagation()` to remain independently clickable.

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
│   │   ├── Navbar/index.tsx        # Sticky nav with active-section tracking
│   │   ├── Footer/index.tsx        # Footer with links
│   │   └── index.ts                # Barrel exports
│   ├── sections/
│   │   ├── Hero/
│   │   │   ├── ChordShiftCard/index.tsx   # Featured project bento card
│   │   │   ├── DotmaticsCard/index.tsx    # Dotmatics employer card
│   │   │   ├── HeroGrid/index.tsx         # Desktop CSS grid layout
│   │   │   ├── HoverCard/index.tsx        # Generic hoverable card wrapper
│   │   │   ├── IdentityCard/index.tsx     # Andy Le name/title card
│   │   │   ├── MobileLayout/index.tsx     # Mobile flex layout
│   │   │   ├── ResumeCard/index.tsx       # Resume icon card
│   │   │   ├── SocialTile/index.tsx       # Square social link tiles (stateful hover)
│   │   │   └── index.tsx                  # Hero section entry point
│   │   ├── Skills/index.tsx        # Technical skills card grid
│   │   ├── Timeline/index.tsx      # Work experience timeline
│   │   ├── Projects/index.tsx      # Featured + project bento grid
│   │   ├── Contact/index.tsx       # Contact cards (email, phone, Calendly)
│   │   ├── Resume/index.tsx        # Standalone PDF viewer section
│   │   └── index.ts                # Barrel exports
│   ├── shared/
│   │   ├── SectionHeader.tsx       # Reusable section eyebrow + heading
│   │   └── index.ts                # Barrel exports
│   └── ui/
│       ├── badge.tsx               # shadcn/ui Badge
│       ├── button.tsx              # shadcn/ui Button
│       ├── card.tsx                # shadcn/ui Card
│       ├── separator.tsx           # shadcn/ui Separator
│       └── tooltip.tsx             # shadcn/ui Tooltip
├── constants/
│   └── design.ts                   # Shared design tokens / constants
├── data/index.ts                   # ALL static content
├── hooks/
│   ├── useScrollReveal.ts
│   ├── useActiveSection.ts
│   └── index.ts                    # Barrel exports
├── lib/utils.ts                    # cn() helper
├── types/index.ts
├── App.tsx
├── main.tsx
├── vite-env.d.ts
└── styles/globals.css              # Tailwind v4 + @theme tokens
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
