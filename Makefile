.PHONY: format-code lint build dev preview docker-build docker-up docker-down docker-logs deploy help

IMAGE_NAME  := andytule-github-io
CONTAINER   := andytule-github-io
PORT        := 8080

# ── Local dev (no Docker) ─────────────────────────────────────────────────────
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

# ── Docker ────────────────────────────────────────────────────────────────────
# Build the production image
docker-build:
	docker build -t $(IMAGE_NAME) .

# Build and start the container (http://localhost:$(PORT))
docker-up: docker-build
	docker run -d \
		--name $(CONTAINER) \
		-p $(PORT):80 \
		--rm \
		$(IMAGE_NAME)
	@echo "Running at http://localhost:$(PORT)"

# Stop the running container
docker-down:
	docker stop $(CONTAINER)

# Tail container logs
docker-logs:
	docker logs -f $(CONTAINER)

# ── Deploy to GitHub Pages ────────────────────────────────────────────────────
# Deployment is handled automatically by GitHub Actions on push to main.
# Use this target only for a manual one-off deploy from your local machine.
deploy:
	npm run build
	npx gh-pages -d dist

# ── Help ──────────────────────────────────────────────────────────────────────
help:
	@echo ""
	@echo "  make dev           – Start Vite dev server (http://localhost:5173)"
	@echo "  make build         – Type-check + production build → dist/"
	@echo "  make preview       – Preview the production build locally"
	@echo "  make lint          – Run ESLint"
	@echo "  make format-code   – Prettier + ESLint auto-fix"
	@echo ""
	@echo "  make docker-build  – Build the Docker image"
	@echo "  make docker-up     – Build + run the container (http://localhost:$(PORT))"
	@echo "  make docker-down   – Stop the running container"
	@echo "  make docker-logs   – Tail container logs"
	@echo ""
	@echo "  make deploy        – Manual deploy to GitHub Pages (CI does this automatically)"
	@echo ""