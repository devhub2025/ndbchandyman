import siteYaml from '../content/site.yaml?raw';
import { load } from 'js-yaml';

const rawSite = load(siteYaml);

const envProfile =
  typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.PUBLIC_ADDRESS_PROFILE
    ? String(import.meta.env.PUBLIC_ADDRESS_PROFILE).trim().toLowerCase()
    : '';

const activeProfileKey = envProfile || String(rawSite.activeAddressProfile || 'leesburg').trim().toLowerCase();
const selectedNap =
  (rawSite.addresses && rawSite.addresses[activeProfileKey]) ||
  (rawSite.addresses && rawSite.addresses.leesburg) ||
  rawSite.nap;

const envLicense =
  typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.PUBLIC_LICENSE_ACTIVE !== undefined
    ? String(import.meta.env.PUBLIC_LICENSE_ACTIVE).trim().toLowerCase() === 'true'
    : undefined;

const licenseActive = envLicense !== undefined ? envLicense : Boolean(rawSite.licenseActive);

const primaryCity = selectedNap.addressLocality || 'Leesburg';
const primaryRegion = selectedNap.addressRegion || 'VA';
const primaryCityState = `${primaryCity}, ${primaryRegion}`;
const primaryCounty = selectedNap.county || 'Loudoun County';
const regionLabel = selectedNap.regionLabel || `${primaryCity} & Northern Virginia`;

const serviceAreas = [...(rawSite.serviceAreas || [])];
if (primaryCity && !serviceAreas.includes(primaryCity)) {
  serviceAreas.unshift(primaryCity);
}

const slogans = Array.isArray(rawSite.slogans) && rawSite.slogans.length >= 3
  ? rawSite.slogans
  : [
      'A Master Craftsman at Your Door—Never a Franchise Crew',
      'One Call. One Flat Rate. Done Right the First Time.',
      '20+ Years of Virginia Craftsmanship—Guaranteed for a Full Year.',
    ];

const benefits = (rawSite.benefits || []).map((benefit) => {
  if (!licenseActive && benefit.title === 'Licensed') {
    return {
      title: 'USBC Code-Compliant',
      text: 'Over 20 years of Virginia building maintenance, remodeling, and USBC code-compliant home repair experience.',
    };
  }
  return benefit;
});

const credentialBadge = licenseActive
  ? 'Virginia DPOR Licensed & Insured'
  : 'Fully Insured · USBC Code-Compliant';

const credentialShort = licenseActive
  ? 'VA DPOR · USBC Compliant'
  : 'Insured · VA USBC Compliant';

const site = {
  ...rawSite,
  activeAddressProfile: activeProfileKey,
  licenseActive,
  credentialBadge,
  credentialShort,
  slogans,
  benefits,
  nap: selectedNap,
  primaryCity,
  primaryRegion,
  primaryCityState,
  primaryCounty,
  regionLabel,
  tagline: `Handyman Services in ${primaryCity}, ${primaryRegion}`,
  serviceAreas,
};

export default site;
