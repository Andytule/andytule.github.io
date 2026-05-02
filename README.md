# andytule.github.io

Personal portfolio for **Andy Le**, Software Engineer — deployed at [andytule.github.io](https://andytule.github.io).

## Tech Stack

| Layer      | Tool                          |
| ---------- | ----------------------------- |
| Framework  | React 19 + TypeScript         |
| Bundler    | Vite 6                        |
| Styling    | Tailwind CSS v4 + shadcn/ui   |
| PDF Viewer | react-pdf + pdfjs-dist        |
| Linting    | ESLint + Prettier             |
| Deployment | GitHub Actions → GitHub Pages |

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview
```

## Updating Content

All content lives in `src/data/` — no component files need to be touched.

| File              | What to edit                                       |
| ----------------- | -------------------------------------------------- |
| `skillCatalog.ts` | Add/edit skills — name, URL, and icon strategy     |
| `skills.ts`       | Change which skills appear and how they're grouped |
| `projects.ts`     | Add/edit portfolio projects                        |
| `timeline.ts`     | Add/edit experience entries                        |
| `social.ts`       | Update contact/social links                        |

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, AmbientBackground
│   ├── sections/        # Hero, Skills, WorkExperience, Projects, Contact, Resume
│   ├── shared/          # Pill, SectionHeader
│   └── ui/              # shadcn/ui primitives
├── data/                # All static content (skills, projects, timeline, social)
├── hooks/               # useHover, useScrollReveal, useActiveSection
├── styles/globals.css   # Tailwind v4 + design tokens
└── types/index.ts
```
