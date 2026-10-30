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

const primaryCity = selectedNap.addressLocality || 'Leesburg';
const primaryRegion = selectedNap.addressRegion || 'VA';
const primaryCityState = `${primaryCity}, ${primaryRegion}`;
const primaryCounty = selectedNap.county || 'Loudoun County';
const regionLabel = selectedNap.regionLabel || `${primaryCity} & Northern Virginia`;

const serviceAreas = [...(rawSite.serviceAreas || [])];
if (primaryCity && !serviceAreas.includes(primaryCity)) {
  serviceAreas.unshift(primaryCity);
}

const site = {
  ...rawSite,
  activeAddressProfile: activeProfileKey,
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
