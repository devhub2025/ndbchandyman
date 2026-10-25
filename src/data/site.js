import siteYaml from '../content/site.yaml?raw';
import { load } from 'js-yaml';

const site = load(siteYaml);
export default site;
