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
    .map((group) => `### ${group.category}\n${(group.items || []).map((i) => `- ${i}`).join('\n')}`)
    .join('\n\n');

  const markdown = [
    `# ${siteData.name} — Complete AI Search & Entity Corpus (llms-full.txt)`,
    '',
    `> Canonical Root: ${rootUrl}`,
    `> Summary Endpoint: ${rootUrl}llms.txt`,
    '',
    '## 1. Entity Identity & Verified Facts',
    `- **Legal Name:** ${siteData.legalName}`,
    `- **Brand / Short Name:** ${siteData.name} (${siteData.shortName})`,
    `- **Owner / Operator Profile:** Master Handyman & contractor with 20+ years of residential construction, maintenance, and remodeling experience in Leesburg and Northern Virginia.`,
    `- **Primary Base:** ${addressFormatted}`,
    `- **Primary Coverage Region:** ${siteData.regionLabel}`,
    `- **Phone:** ${siteData.contact.phoneDisplay} (${siteData.contact.phone})`,
    `- **Email:** ${siteData.contact.email}`,
    `- **Regular Hours:** ${siteData.hours.regular}`,
    `- **24/7 Emergency Dispatch:** Available 24/7 for urgent plumbing leaks, pipe thawing, water damage, and electrical faults.`,
    `- **Pricing Policy:** Fixed flat-rate pricing per project or repair list (never billed by the hour).`,
    `- **Workmanship Warranty:** Written 1-year guarantee on maintenance, repair, and remodeling work.`,
    `- **Quote Turnaround:** Online estimates within a few hours; on-site visits receive a same-day written flat-rate quote.`,
    `- **Payment Methods:** Cash, personal or business checks, credit cards, and debit cards.`,
    '',
    '## 2. 6-Step Wooden Deck Restoration Specification (Virginia USBC Compliant)',
    '1. **USBC Structural Inspection:** Inspect posts, joists, ledger boards, stairs, railings, and balusters against the Virginia Uniform Statewide Building Code (USBC) to identify hidden moisture rot or loose framing.',
    '2. **Rotted Wood & Sub-Floor Replacement:** Remove and replace split, soft, or decaying deck boards, stair treads, and sub-framing with matching pressure-treated lumber.',
    '3. **Fastener & Squeak Remediation:** Replace popped nails and re-secure loose boards with exterior-grade deck screws.',
    '4. **Deep Power Washing:** Controlled pressure washing to strip mildew, algae, oxidized gray fibers, and failing coatings.',
    '5. **Sanding & Splinter Removal:** Sand handrails, steps, and high-traffic deck boards smooth for optimal stain penetration.',
    '6. **Commercial-Grade Sealing & Staining:** Apply multi-year weatherproof exterior stain and sealant under proper moisture and temperature conditions.',
    '',
    '## 3. Pre-Remodeling Technical Standards',
    '- **Bathroom Shower Conversions (24-Hour Flood Test):** Every walk-in tiled shower conversion uses a pre-sloped mortar bed for positive weep-hole drainage, followed by a waterproof pan liner that is plugged, filled with water, and flood-tested for a full 24 hours before ceramic or porcelain tile installation.',
    '- **Basement Finishing:** Concrete foundation walls and slabs are inspected and sealed for hairline cracks (preventing groundwater seepage and termites), and older mineral-corroded copper or galvanized steel pipes are replaced before drywall enclosure.',
    '- **Kitchen Remodeling:** All wall and floor supply lines, shut-off valves, dishwasher connections, and garbage disposal fittings are pressure-tested before base cabinets and countertops are installed.',
    '',
    '## 4. Frequently Asked Questions (Direct Q&A)',
    '- **Q: How do I get a free quote?** Online via the Contact page (ready within hours) or on-site by calling (703) 869-4805 (delivered the same day).',
    '- **Q: Do you charge by the hour?** No. Every project is quoted as an upfront flat-rate price before work starts.',
    '- **Q: How long does interior painting take?** Approximately 1 day per 50 square meters (~540 sq ft), depending on wall prep.',
    `- **Q: Are you insured and experienced with Virginia building codes?** ${
      siteData.licenseActive
        ? 'Yes, licensed under the Virginia Department of Professional and Occupational Regulation (DPOR), USBC code-compliant, and covered by general liability insurance.'
        : 'Yes, covered by full business and general liability insurance with 20+ years of Virginia contractor experience performing work in compliance with the Virginia Uniform Statewide Building Code (USBC).'
    }`,
    '',
    '## 5. Complete 13-Category Service Catalog',
    serviceLines,
    '',
    '## 6. Cities & Communities Served in Virginia',
    cleanAreas.join(', '),
    '',
  ].join('\n');

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
