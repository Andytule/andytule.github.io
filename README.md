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

## Docker

Build and run the production image locally:

```bash
make docker-up    # builds image + starts container → http://localhost:8080
make docker-down  # stop the container
make docker-logs  # tail container logs
```

Or using plain Docker:

```bash
docker build -t andytule-github-io .
docker run -d --name andytule-github-io -p 8080:80 --rm andytule-github-io
```

## Makefile Commands

| Command            | Description                             |
| ------------------ | --------------------------------------- |
| `make dev`         | Start Vite dev server (localhost:5173)  |
| `make build`       | Type-check + production build → `dist/` |
| `make preview`     | Preview the production build locally    |
| `make lint`        | Run ESLint                              |
| `make format-code` | Prettier + ESLint auto-fix              |
| `make docker-up`   | Build + run container (localhost:8080)  |
| `make docker-down` | Stop the running container              |
| `make docker-logs` | Tail container logs                     |
| `make deploy`      | Manual deploy to GitHub Pages           |

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
