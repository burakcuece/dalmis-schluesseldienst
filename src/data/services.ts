import type { IconName } from '../lib/icons';

export interface Service {
  slug: 'tueroeffnung' | 'autooeffnung' | 'schloss-zylinder' | 'sicherheitstechnik';
  title: string;
  /** Kurzer Text für Karten auf Übersichtsseiten */
  teaser: string;
  image: string;
  imageAlt: string;
  icon: IconName;
  /** Vorbefüllter WhatsApp-Text für diese Leistung */
  whatsappText: string;
}

export const services: Service[] = [
  {
    slug: 'tueroeffnung',
    title: 'Türöffnung',
    teaser: 'Die Tür ist zugefallen oder abgeschlossen? Schildern Sie kurz die Situation.',
    image: 'service-door-opening.webp',
    imageAlt: 'Hand an einer geöffneten Wohnungstür',
    icon: 'door',
    whatsappText:
      'Hallo Herr Dalmis, ich habe mich ausgesperrt und brauche eine Türöffnung. Die Tür ist (zugefallen / abgeschlossen). Mein Standort ist …',
  },
  {
    slug: 'autooeffnung',
    title: 'Autoöffnung',
    teaser: 'Fahrzeug verschlossen? Nennen Sie Modell und Standort. Die Möglichkeiten klären wir vorab.',
    image: 'car-door.webp',
    imageAlt: 'Autotürgriff eines Fahrzeugs',
    icon: 'car',
    whatsappText:
      'Hallo Herr Dalmis, ich komme nicht mehr in mein Fahrzeug. Marke und Modell: … Baujahr: … Mein Standort ist …',
  },
  {
    slug: 'schloss-zylinder',
    title: 'Schloss & Zylinder',
    teaser: 'Defektes Schloss, Schlosswechsel oder neuer Schließzylinder: Wir klären, was gebraucht wird.',
    image: 'service-lock-replacement.webp',
    imageAlt: 'Arbeit an einem Schließzylinder in einer Holztür',
    icon: 'lock',
    whatsappText:
      'Hallo Herr Dalmis, ich habe eine Anfrage zu einem Schloss bzw. Schließzylinder. Worum es geht: … Mein Standort ist …',
  },
  {
    slug: 'sicherheitstechnik',
    title: 'Sicherheitstechnik',
    teaser: 'Welche Technik passt zu Ihrer Tür? Wir besprechen mögliche Lösungen mit Ihnen.',
    image: 'service-security-hardware.webp',
    imageAlt: 'Sicherheitsbeschlag an einer Eingangstür',
    icon: 'shield',
    whatsappText:
      'Hallo Herr Dalmis, ich interessiere mich für eine Beratung zur Sicherheitstechnik an meiner Tür. Mein Standort ist …',
  },
];

export function getService(slug: Service['slug']): Service {
  const service = services.find((entry) => entry.slug === slug);
  if (!service) throw new Error(`Unbekannte Leistung: ${slug}`);
  return service;
}

export const servicePath = (slug: Service['slug']) => `leistungen/${slug}/`;
