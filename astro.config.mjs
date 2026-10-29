import { defineConfig } from 'astro/config';

const siteUrl = process.env.PUBLIC_SITE_URL || 'https://devhub2025.github.io';
const basePath = process.env.PUBLIC_BASE_PATH || '/ndbchandyman';

export default defineConfig({
  site: siteUrl,
  base: basePath,
  trailingSlash: 'always',
  output: 'static',
});
