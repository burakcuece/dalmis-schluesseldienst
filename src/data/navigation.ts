import { services, servicePath } from './services';

export interface NavItem {
  label: string;
  /** Pfad relativ zur Basis-URL, z. B. `preise/` */
  path: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Leistungen',
    path: 'leistungen/',
    children: services.map((service) => ({ label: service.title, path: servicePath(service.slug) })),
  },
  { label: 'Preise', path: 'preise/' },
  { label: 'Einsatzgebiet', path: 'einsatzgebiet/' },
  { label: 'Über uns', path: 'ueber-uns/' },
  { label: 'FAQ', path: 'faq/' },
  { label: 'Kontakt', path: 'kontakt/' },
];

export const legalNavigation: NavItem[] = [
  { label: 'Impressum', path: 'impressum/' },
  { label: 'Datenschutz', path: 'datenschutz/' },
];
