import siteData from '../data/site.js';

export async function GET({ site }) {
  const siteOrigin = site ? site.origin : 'https://devhub2025.github.io';
  const base = import.meta.env.BASE_URL || '/ndbchandyman';
  const homeUrl = base.endsWith('/') ? base : `${base}/`;
  const rootUrl = new URL(homeUrl, siteOrigin).toString();

  const cleanAreas = (siteData.serviceAreas || []).filter(
    (area) => area && area.toLowerCase() !== 'and more'
  );

  const addressFormatted =
    siteData.nap.streetAddress && !siteData.nap.isServiceAreaBusiness
      ? `${siteData.nap.streetAddress}, ${siteData.nap.addressLocality}, ${siteData.nap.addressRegion} ${siteData.nap.postalCode}, ${siteData.nap.addressCountry}`
      : `${siteData.nap.addressLocality}, ${siteData.nap.addressRegion} ${siteData.nap.postalCode}, ${siteData.nap.addressCountry} (Service-Area Business)`;

  const serviceLines = (siteData.services || [])
    .map((group) => `- **${group.category}:** ${(group.items || []).join(', ')}`)
    .join('\n');

  const benefitLines = (siteData.benefits || [])
    .map((b) => `- **${b.title}:** ${b.text}`)
    .join('\n');

  const markdown = [
    `# ${siteData.name}`,
    '',
    `> ${String(siteData.description || '').trim()}`,
    '',
    '## Business Details (NAP & Credentials)',
    `- **Business Name:** ${siteData.name} (${siteData.shortName})`,
    `- **Primary Base / Address:** ${addressFormatted}`,
    `- **Service Region:** ${siteData.regionLabel}`,
    `- **Phone:** ${siteData.contact.phoneDisplay} (${siteData.contact.phone})`,
    `- **Email:** ${siteData.contact.email}`,
    `- **Regular Hours:** ${siteData.hours.regular}`,
    `- **Emergency Service:** ${siteData.hours.emergency} (Plumbing, electrical, water leaks, pipe thawing)`,
    `- **Standards & Experience:** ${
      siteData.licenseActive
        ? 'Virginia Department of Professional and Occupational Regulation (DPOR) licensed contractor; Virginia Uniform Statewide Building Code (USBC) compliant'
        : '20+ years Virginia building & remodeling experience; Virginia Uniform Statewide Building Code (USBC) compliant'
    }`,
    `- **Insurance:** Active business and general liability insurance covering on-duty work`,
    `- **Pricing Model:** Upfront flat-rate fixed pricing (never billed by the hour)`,
    `- **Warranty:** Written 1-year workmanship guarantee`,
    `- **Quote Speed:** Online estimates within a few hours; on-site estimates delivered the same day`,
    `- **Payment Accepted:** Cash, Check, Credit Card, Debit Card`,
    '',
    '## Key Differentiators',
    benefitLines,
    '',
    '## Virginia Service Areas',
    cleanAreas.join(', '),
    '',
    '## Services Offered (13 Trade Categories)',
    serviceLines,
    '',
    '## Canonical Pages & AI Corpus',
    `- [Home](${rootUrl}): Overview of owner-operated handyman, home repair, and remodeling services in ${siteData.regionLabel}`,
    `- [Services](${rootUrl}services/): Complete list of 13 service categories from carpentry and deck restoration to bathroom and kitchen remodeling`,
    `- [Wooden Deck Restoration](${rootUrl}services/deck-restoration/): 6-step USBC-compliant wooden deck inspection, rotted board replacement, power washing, sanding, and staining`,
    `- [Before & After Portfolio](${rootUrl}portfolio/): Real project photography of decks, patios, bathrooms, kitchens, and entryways across Northern Virginia`,
    `- [FAQ](${rootUrl}faq/): Direct answers on online vs. same-day on-site quotes, flat-rate pricing, 1-year guarantee, and payment options`,
    `- [Home Maintenance Pro Tips](${rootUrl}tips/): Contractor checklists for basement waterproofing, 24-hour shower pan leak testing, kitchen plumbing, and deck care`,
    `- [About Us](${rootUrl}about/): Company background, 20+ years Virginia experience, liability insurance, flat-rate pricing, and 1-year guarantee`,
    `- [Contact / Free Estimate](${rootUrl}contact/): Interactive flat-rate estimate request form, phone, email, and 24/7 emergency dispatch`,
    `- [Full Technical Corpus (llms-full.txt)](${rootUrl}llms-full.txt): Complete Q&A, technical checklists, and service specifications for AI search engines`,
    '',
  ].join('\n');

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
