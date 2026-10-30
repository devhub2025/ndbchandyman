export async function GET({ site }) {
  const siteOrigin = site ? site.origin : 'https://devhub2025.github.io';
  const base = import.meta.env.BASE_URL || '/ndbchandyman';
  const homeUrl = base.endsWith('/') ? base : `${base}/`;
  const sitemapUrl = new URL(`${homeUrl}sitemap.xml`, siteOrigin).toString();
  const isPreviewHost =
    (siteOrigin.includes('github.io') || siteOrigin.includes('pages.dev')) &&
    import.meta.env.PUBLIC_INDEXABLE !== 'true';

  const body = isPreviewHost
    ? [
        '# Preview build (GitHub Pages) — indexing blocked to prevent duplicate content with production',
        'User-agent: *',
        'Disallow: /',
        `Sitemap: ${sitemapUrl}`,
        '',
      ].join('\n')
    : [
        'User-agent: *',
        'Allow: /',
        '',
        'User-agent: Googlebot',
        'Allow: /',
        '',
        'User-agent: Bingbot',
        'Allow: /',
        '',
        'User-agent: OAI-SearchBot',
        'Allow: /',
        '',
        'User-agent: ChatGPT-User',
        'Allow: /',
        '',
        'User-agent: PerplexityBot',
        'Allow: /',
        '',
        'User-agent: ClaudeBot',
        'Allow: /',
        '',
        'User-agent: Applebot',
        'Allow: /',
        '',
        `Sitemap: ${sitemapUrl}`,
        '',
      ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
