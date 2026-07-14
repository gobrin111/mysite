# Portfolio

A static portfolio website built with React and Vite.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

The site is configured for the repository URL:

```text
https://gobrin111.github.io/mysite/
```

Pushing to `main` runs the GitHub Actions workflow in
`.github/workflows/deploy-pages.yml`. The workflow validates the source, builds
the static site, and deploys the `dist` output to GitHub Pages.

In the GitHub repository, open **Settings → Pages** and set **Source** to
**GitHub Actions**. This is a one-time repository setting.

If the repository is renamed, update the `base` value in `vite.config.js` to
match the new repository name.

## Project structure

```text
src/
├── app/          Application shell
├── components/   Reusable UI and layout components
├── sections/     Homepage sections
└── styles/       Global styles and design tokens
```
