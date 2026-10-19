# Konark — Industrial Phosphating Website

Premium static product showcase for industrial black phosphating chemicals. **All development runs through Docker** — Node.js is not required on your host.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Docker Compose)
- Docker engine running (Linux containers on Windows/macOS)

If Docker is not installed, install Docker Desktop first. This project does not support a local Node.js workflow.

### IDE TypeScript (Cursor / VS Code)

The editor needs a project-local `node_modules` folder for types (`next/link`, React JSX, etc.). The dev container keeps its own `node_modules` in a Docker volume, so run this **once** (no local Node required):

```bash
docker compose --profile ide run --rm ide-deps
```

Then in Cursor: **Command Palette → “TypeScript: Select TypeScript Version” → “Use Workspace Version”**, and reload the window if needed.

**Recommended (Docker-first):** **Command Palette → “Dev Containers: Reopen in Container”** so the editor uses the same `node_modules` as the dev container (no host Node required).

## Quick start (development)

From the project root:

```bash
docker compose up --build
```

Open **http://localhost:3000**

- Source is mounted into the container; edits in Cursor hot-reload in the browser.
- `node_modules` lives in a named Docker volume (`konark_node_modules`) so Windows/macOS host paths do not conflict with Linux dependencies inside the container.
- File watching uses polling (`WATCHPACK_POLLING`, `CHOKIDAR_USEPOLLING`) for reliable reload on Docker Desktop.

### Stop

```bash
docker compose down
```

### Rebuild after dependency changes

When `package.json` changes:

```bash
docker compose down
docker compose build --no-cache web
docker compose up
```

Or remove the modules volume once:

```bash
docker compose down -v
docker compose up --build
```

## Production image

Build and run the optimized multi-stage image:

```bash
docker compose --profile production up --build web-prod
```

Site: **http://localhost:3000**

Standalone Next.js output is used in the production stage (`output: "standalone"` in `next.config.ts`).

## Useful commands (all via Docker)

| Task | Command |
|------|---------|
| Start dev | `docker compose up` |
| Start dev (detached) | `docker compose up -d` |
| Build only | `docker compose build` |
| Lint | `docker compose run --rm web npm run lint` |
| Typecheck | `docker compose run --rm web npm run typecheck` |
| Production build test | `docker compose run --rm -e NODE_ENV=production web npm run build` |
| Shell in dev container | `docker compose run --rm web sh` |

## Customizing content

| What | Where |
|------|--------|
| Company name, contact, nav | `src/data/site.ts` |
| Product copy | `src/data/products.ts` |
| Applications grid | `src/data/applications.ts` |
| Process steps | `src/data/process.ts` |
| Benefits | `src/data/benefits.ts` |
| Photography | `public/images/` (keep filenames or update references in data files) |
| Contact form backend | `submitInquiry()` in `src/components/sections/ContactSection.tsx` |
| SEO keywords, regions, schema copy | `src/data/seo.ts` |
| Live domain (canonical, sitemap) | `siteConfig.url` in `src/data/site.ts` |

Replace bracketed `[placeholder]` strings with verified company and product information before go-live.

## Search visibility (SEO)

This site includes titles, descriptions, keywords, `robots.txt`, `sitemap.xml`, and JSON-LD (`Organization` / `WebSite`). **Meta keywords alone cannot guarantee first position** in Google for every country or query. Ranking depends on your real domain, content, backlinks, reviews, speed, and how you show up in Search Console.

After launch:

1. Set **`siteConfig.url`** to your real HTTPS domain (e.g. `https://yourcompany.com`).
2. Edit **`src/data/seo.ts`** — keywords and `regionsServed` must match what you actually supply.
3. Register the site in [Google Search Console](https://search.google.com/search-console) and submit the sitemap (`/sitemap.xml`).
4. Add accurate Google Business Profile / local listings where you have a real address.
5. Build trust: case studies, technical pages, industry directories, and consistent company name + NAP (name, address, phone) across the web.

For country-specific rankings (India, USA, UAE, etc.), plan dedicated landing pages or localized content later—one homepage cannot honestly target every city worldwide without real local relevance.

## Project structure

```
src/
  app/           # Next.js App Router
  components/    # Layout, sections, UI
  data/          # Centralized content
  lib/           # Utilities
public/images/   # Product and application photography
Dockerfile       # development + production stages
docker-compose.yml
```
