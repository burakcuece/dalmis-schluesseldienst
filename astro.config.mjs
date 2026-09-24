// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// Veröffentlichung über Vercel. Die Produktions-Domain setzt Vercel beim Build
// automatisch (auch eine später verbundene eigene Domain). Mit SITE_URL lässt
// sie sich bei Bedarf fest vorgeben, z. B. SITE_URL=https://www.beispiel.de
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL ?? (productionHost ? `https://${productionHost}` : 'http://localhost:4321');

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  // Google Fonts werden beim Build heruntergeladen und von der eigenen Domain
  // ausgeliefert. Besucher bauen keine Verbindung zu Google auf (DSGVO).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Barlow Condensed',
      cssVariable: '--font-display',
      weights: [600, 700, 800],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Arial Narrow', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Barlow',
      cssVariable: '--font-body',
      weights: [400, 500, 600, 700, 800, 900],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['sans-serif'],
    },
  ],
});
