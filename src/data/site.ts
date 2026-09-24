/**
 * Zentrale Unternehmensdaten. Änderungen hier wirken auf allen Seiten,
 * in Links, im Footer und in den strukturierten Daten für Suchmaschinen.
 */
export const business = {
  name: 'DALMIS Mobiler Schlüsseldienst & Sicherheitstechnik',
  shortName: 'DALMIS',
  tagline: 'Schlüsseldienst & Sicherheitstechnik',
  owner: 'Serhat Dalmis',
  slogan: 'Im Revier und garantiert auch bei Ihnen.',
  city: 'Herten',
  radiusKm: 35,
  phone: {
    display: '0177 4275592',
    href: 'tel:+491774275592',
    international: '+49 177 4275592',
  },
  email: 'serhatdalmis91@gmail.com',
  whatsappNumber: '491774275592',
  /** Orte, aus denen Anfragen typischerweise kommen. Verfügbarkeit wird individuell geklärt. */
  places: ['Herten', 'Westerholt', 'Recklinghausen', 'Marl', 'Gelsenkirchen', 'Dorsten'],
} as const;

export const defaultWhatsAppText =
  'Hallo Herr Dalmis, ich benötige Hilfe von Ihrem mobilen Schlüsseldienst. Mein Standort ist …';

export function whatsappUrl(text: string = defaultWhatsAppText): string {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const mailtoUrl = `mailto:${business.email}`;
