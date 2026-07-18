# drawDB documentation

The drawDB documentation site is built with [Fumadocs](https://www.fumadocs.dev/), Next.js, Tailwind CSS, and a static Orama search index.

## Requirements

- Node.js 22.12 or newer
- npm 10 or newer

If you use nvm, run:

```bash
nvm use
```

## Local setup

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Local development uses no URL prefix, so pages appear at routes such as `/create-diagram`.

## Checks and production build

```bash
npm run check
npm run build
npm run start
```

`npm run build` writes the fully static site to `out/`. The production preview command serves that directory locally.

## Environment variables

| Variable | Purpose | Local default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical public URL used by metadata, sitemap, robots, and social cards. | `https://drawdb-io.github.io/docs` |
| `NEXT_PUBLIC_BASE_PATH` | Path where the static site is mounted. Use an empty value for a root domain. | Empty |

For this repository's GitHub Pages deployment, the workflow builds with:

```text
NEXT_PUBLIC_SITE_URL=https://drawdb-io.github.io/docs
NEXT_PUBLIC_BASE_PATH=/docs
```

For a custom domain such as `https://docs.drawdb.app`, set `NEXT_PUBLIC_SITE_URL` to that origin and leave `NEXT_PUBLIC_BASE_PATH` empty.

## Content

- Documentation pages live in `docs/**/*.mdx`.
- Sidebar order is controlled by the root and nested `meta.json` files.
- Pro product guides live in `docs/pro/`; add new Pro pages to `docs/pro/meta.json`.
- Light and dark screenshots live in `docs/img/light` and `docs/img/dark`.
- Every page should have a unique `title` and `description` in its frontmatter.
- JSX-enabled content must use the `.mdx` extension.

Fumadocs provides `Cards`, `Card`, and `Callout` automatically. This project also registers `Accordion`, `Accordions`, and `ThemedImage` as global MDX components.

## Search

Search uses a static Orama index generated during the build. It requires no hosted search service or API key. The index is exported at `/api/search` and the UI supports the standard search button and Command/Ctrl + K.

## SEO files

The build generates:

- Unique page titles, descriptions, canonical URLs, Open Graph, and X metadata
- `sitemap.xml`
- `robots.txt`
- `manifest.webmanifest`
- Breadcrumb structured data
- `llms.txt` and `llms-full.txt`

Update `NEXT_PUBLIC_SITE_URL` before deploying to a different domain so these URLs remain canonical.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys on pushes to `main`.

In the GitHub repository:

1. Open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push to `main` or run the workflow manually.

The workflow uses Node.js 22, installs from `package-lock.json`, builds with the `/docs` base path, and publishes `out/`.
