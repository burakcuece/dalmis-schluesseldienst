/**
 * Bausteine für strukturierte Daten (schema.org, JSON-LD).
 * Jede Seite bekommt das Unternehmen plus seitenspezifische Einträge.
 */
import { business } from '../data/site';
import type { FaqEntry } from '../data/faq';
import { absoluteUrl } from './url';

type SchemaNode = Record<string, unknown>;

export interface Crumb {
  label: string;
  path: string;
}

export const businessId = absoluteUrl('#business');

export function businessSchema(): SchemaNode {
  return {
    '@type': ['Locksmith', 'LocalBusiness'],
    '@id': businessId,
    name: business.name,
    description: `Mobiler Schlüsseldienst und Sicherheitstechnik aus ${business.city} mit persönlichem Vor-Ort-Service.`,
    url: absoluteUrl(),
    telephone: business.phone.international,
    email: business.email,
    image: absoluteUrl('assets/og-dalmis-2026.png'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.city,
      addressCountry: 'DE',
    },
    areaServed: business.places.map((name) => ({ '@type': 'City', name })),
    // Durch den Notdienst rund um die Uhr erreichbar
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    founder: { '@type': 'Person', name: business.owner },
    slogan: business.slogan,
  };
}

export function serviceSchema(name: string, description: string, path: string): SchemaNode {
  return {
    '@type': 'Service',
    '@id': absoluteUrl(`${path}#service`),
    name,
    description,
    url: absoluteUrl(path),
    provider: { '@id': businessId },
    areaServed: { '@type': 'AdministrativeArea', name: `${business.city} und Umgebung` },
  };
}

export function faqSchema(entries: FaqEntry[], path: string): SchemaNode {
  return {
    '@type': 'FAQPage',
    '@id': absoluteUrl(`${path}#faq`),
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: { '@type': 'Answer', text: entry.answer.join(' ') },
    })),
  };
}

export function breadcrumbSchema(crumbs: Crumb[]): SchemaNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.path),
    })),
  };
}
