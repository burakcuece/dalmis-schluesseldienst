import type { APIRoute } from 'astro';
import { absoluteUrl } from '../lib/url';

// Alle Seiten aus src/pages, ohne Fehlerseite und ohne Seiten mit noindex
const excluded = new Set(['404', 'impressum', 'datenschutz']);

const pages = Object.keys(import.meta.glob('./**/*.astro'))
  .map((file) => file.replace(/^\.\//, '').replace(/\.astro$/, '').replace(/(^|\/)index$/, ''))
  .filter((page) => !excluded.has(page))
  .map((page) => (page ? `${page}/` : ''))
  .sort();

export const GET: APIRoute = () => {
  const urls = pages.map((page) => `  <url><loc>${absoluteUrl(page)}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
