const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
const site = (import.meta.env.SITE ?? '').replace(/\/$/, '');

/** Interner Link relativ zur Basis-URL, z. B. `url('preise/')` → `/dalmis-schluesseldienst/preise/` */
export function url(path = ''): string {
  return base + path.replace(/^\//, '');
}

/** Pfad zu einer Datei in `public/assets/` */
export function asset(file: string): string {
  return url(`assets/${file}`);
}

/** Vollständige URL inklusive Domain, z. B. für Canonical, Open Graph und Schema.org */
export function absoluteUrl(path = ''): string {
  return site + url(path);
}

/** Vergleicht den aktuellen Pfad mit einem Navigationspfad */
export function isCurrent(currentPathname: string, path: string): boolean {
  const normalize = (value: string) => (value.endsWith('/') ? value : `${value}/`);
  return normalize(currentPathname) === normalize(url(path));
}
