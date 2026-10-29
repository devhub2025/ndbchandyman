const PAGES = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: 'services/', changefreq: 'weekly', priority: '0.9' },
  { path: 'services/deck-restoration/', changefreq: 'weekly', priority: '0.9' },
  { path: 'portfolio/', changefreq: 'monthly', priority: '0.8' },
  { path: 'faq/', changefreq: 'monthly', priority: '0.8' },
  { path: 'tips/', changefreq: 'monthly', priority: '0.7' },
  { path: 'about/', changefreq: 'monthly', priority: '0.8' },
  { path: 'contact/', changefreq: 'monthly', priority: '0.9' },
];

export async function GET({ site }) {
  const siteOrigin = site ? site.origin : 'https://devhub2025.github.io';
  const base = import.meta.env.BASE_URL || '/ndbchandyman';
  const homeUrl = base.endsWith('/') ? base : `${base}/`;
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = PAGES.map(({ path, changefreq, priority }) => {
    const loc = new URL(`${homeUrl}${path}`, siteOrigin).toString();
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n');
  }).join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
