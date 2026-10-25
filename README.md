# NDBC Handyman Services — Astro Site

Public preview: https://devhub2025.github.io/ndbchandyman/

Astro static site for NDBC Handyman Services (Leesburg, VA).

## Project structure

```text
/
├── public/                 # Static assets (logo, favicon)
├── src/
│   ├── content/site.yaml   # Business facts, NAP, services, hours
│   ├── data/site.js        # YAML loader used by pages
│   ├── layouts/            # Page shell
│   ├── pages/              # Routes
│   └── styles/             # Global CSS
└── package.json
```

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview the build locally                        |

## Deploy

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`,
which builds the site and deploys it to GitHub Pages.

## Content notes

- NAP, hours and services are defined in `src/content/site.yaml`.
- The address currently matches the old site (`Leesburg, VA`). Confirm with the owner
  before final publication, because the BBB listing shows Winchester.
