.PHONY: format lint build dev deploy help

# ── Local dev ─────────────────────────────────────────────────────────────────

format-code:
	npm run format
	npm run lint:fix

lint:
	npm run lint

build:
	npm run build

dev:
	npm run dev

preview:
	npm run preview

# ── Deploy ────────────────────────────────────────────────────────────────────
# Deployment is handled automatically by GitHub Actions on push to main.
# Use this target only for a manual one-off deploy from your local machine.
deploy:
	npm run build
	npx gh-pages -d dist

# ── Help ──────────────────────────────────────────────────────────────────────
help:
	@echo ""
	@echo "  make dev       – Start Vite dev server (http://localhost:5173)"
	@echo "  make build     – Type-check + production build → dist/"
	@echo "  make preview   – Preview the production build locally"
	@echo "  make lint      – Run ESLint"
	@echo "  make format    – Prettier + ESLint auto-fix"
	@echo "  make deploy    – Manual deploy to GitHub Pages (CI does this automatically)"
	@echo ""