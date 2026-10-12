# SWIX Website

The SWIX marketing website is built with Eleventy, Nunjucks, Tailwind CSS v4, and small vanilla JavaScript enhancements.

## Commands

- `npm install` — install dependencies.
- `npm run dev` — run the local Eleventy and Tailwind watchers.
- `npm run build` — build the production site into `dist/`.

## Deployment

Pushes to `main` automatically build and deploy the site to GitHub Pages through `.github/workflows/deploy-pages.yml`.

The workflow reads the Pages base path during the build, so navigation and assets work both at the repository URL and with a future custom domain.
