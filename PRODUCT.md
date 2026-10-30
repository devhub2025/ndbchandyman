# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Homeowners and residential property managers across Leesburg, Loudoun County, Fairfax County, and Northern Virginia (plus Winchester / Shenandoah Valley when dispatched from the owner's residence) who need reliable home repairs, wooden deck restoration, bathroom/kitchen remodeling, or 24/7 emergency plumbing and electrical help.

## Product Purpose
Convert residential visitors and AI search citations into direct flat-rate estimate requests or phone calls by showing what customers actually experience when the owner-operator master handyman knocks on their door.

## Positioning
Unlike hourly handyman franchises that send rotating technicians and bill open-ended hourly rates, NDBC Handyman Services is led by an experienced 20+ year Virginia DPOR-licensed craftsman who inspects the project personally, quotes a fixed flat-rate price before work starts, and backs every job with a written 1-year workmanship guarantee.

## Operating Context
Homeowners evaluate contractors on mobile and desktop while comparing local Google Business Profile listings, AI search summaries (ChatGPT Search, Perplexity, Google AI Overviews), and before/after project proof.

## Capabilities and Constraints
- Static Astro 5 architecture with zero-dependency runtime performance.
- Single-switchable address configuration (`activeAddressProfile` in `src/content/site.yaml`) supporting both the historical Leesburg, VA address (`leesburg`) and the owner's Winchester, VA base (`winchester`).
- Full 2026 SEO and AI Search (GEO/AEO) compliance: unified `@graph` JSON-LD (`HomeAndConstructionBusiness`, `GeneralContractor`, `Person`, `SpeakableSpecification`, `FAQPage`, `Service`, `CollectionPage`, `Article`), `/llms.txt`, `/llms-full.txt`, and `sitemap.xml`.

## Brand Commitments
- Business Name: NDBC Handyman Services (`NDBC`)
- Phone: `(703) 869-4805` (`+17038694805`)
- Pricing: Upfront flat-rate fixed pricing (never hourly)
- Warranty: 1-year workmanship guarantee

## Evidence on Hand
- 12 original client before/after project photographs in `public/images/portfolio/` and `public/images/deck-restore-leesburg-va.jpg`.
- 2 documentary owner-profile photographs (`public/images/handyman-owner-doorstep.jpg` and `public/images/handyman-owner-inspecting.jpg`).

## Product Principles
- Show the master craftsman at the doorstep in the first viewport rather than generic contractor stock icons.
- Lead every major page section with a self-contained factual summary block (`.ai-summary`) and semantic comparison tables for human scannability and AI search citation.
- Keep address/locality references bound to the single `activeAddressProfile` switch in `src/content/site.yaml`.

## Accessibility & Inclusion
WCAG 2.2 AA contrast ratios across all surfaces (≥4.5:1 body text, ≥7:1 hero overlay copy), explicit image dimensions for zero CLS, keyboard-navigable native `<details>` accordions, and 44px+ touch targets.
