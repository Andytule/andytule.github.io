# andytule.github.io — Personal Portfolio

> Portfolio for **Andy Le**, Software Engineer. Deployed at **[andytule.github.io](https://andytule.github.io)**.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite 6 |
| Styling | Tailwind CSS v4 + shadcn/ui |
| PDF Viewer | react-pdf + pdfjs-dist |
| Linting | ESLint + Prettier |
| Deployment | GitHub Actions → GitHub Pages |

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar/index.tsx        # Sticky nav with active-section tracking
│   │   └── Footer/index.tsx        # Footer with links
│   ├── sections/
│   │   ├── Hero/index.tsx          # Bento grid hero
│   │   ├── Skills/index.tsx        # Technical skills card grid
│   │   ├── Timeline/index.tsx      # Work experience timeline
│   │   ├── Projects/index.tsx      # Featured + project bento grid
│   │   ├── Contact/index.tsx       # Contact cards (email, phone, Calendly)
│   │   └── Resume/index.tsx        # Standalone PDF viewer section
│   └── ui/
│       ├── badge.tsx               # shadcn/ui Badge
│       ├── button.tsx              # shadcn/ui Button
│       ├── card.tsx                # shadcn/ui Card
│       ├── separator.tsx           # shadcn/ui Separator
│       └── tooltip.tsx             # shadcn/ui Tooltip
├── data/index.ts                   # ALL static content
├── hooks/
│   ├── useScrollReveal.ts
│   └── useActiveSection.ts
├── lib/utils.ts                    # cn() helper
├── types/index.ts
├── App.tsx
├── main.tsx
└── index.css                       # Tailwind v4 + @theme tokens
```

## Section Order

1. Hero (bento grid)
2. Skills
3. Experience (Timeline)
4. Work (Projects)
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
