# XIFI Command Center

Production SvelteKit foundation for the XIFI AI customer-support operations interface. The current milestone migrates the dashboard shell and overview from the original HTML prototype and configures Konsta UI globally with its iOS theme.

## Stack

- SvelteKit 2 + Svelte 5 runes
- Konsta UI 5 (`theme="ios"`, safe-area support enabled)
- Tailwind CSS 4 with XIFI/Konsta theme tokens
- TypeScript, ESLint, Prettier, Vitest, and Playwright
- `@sveltejs/adapter-node` for a standalone production server

## Local development

Requirements: Node.js 22+ and npm 10+.

```bash
npm install
npm run dev
```

The development server is available at `http://localhost:5173` by default.

## Quality checks

```bash
npm run check
npm run lint
npm run test:unit -- --run
```

Install the browser once before running end-to-end tests:

```bash
npm run test:e2e:install
npm run test:e2e
```

## Production

```bash
npm run build
npm start
```

Copy `.env.example` to `.env` and set `ORIGIN` to the public HTTPS origin. If the process is behind a trusted reverse proxy, configure the forwarded-header variables from the example as well.

Container build:

```bash
docker build -t xifi-command-center .
docker run --rm -p 3000:3000 -e ORIGIN=http://localhost:3000 xifi-command-center
```

Runtime health checks can call `GET /api/health`.

## GitHub Pages

Every push to `main` runs the Pages deployment workflow in `.github/workflows/deploy-pages.yml`.
The workflow validates the project, produces a prerendered static build with the repository base path,
and publishes the `build` directory through GitHub Pages.

Live site: `https://tareqrahman23.github.io/xifi-command-center/`

## Structure

```text
src/lib/components/   reusable command-center UI
src/lib/data/         typed navigation and overview fixtures
src/routes/           SvelteKit pages and API routes
tests/                Playwright browser coverage
```

The overview is the first migrated production screen. All sidebar destinations resolve to valid workspace routes, ready to be implemented feature-by-feature without changing the application shell.
