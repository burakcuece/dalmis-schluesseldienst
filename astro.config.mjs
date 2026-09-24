// @ts-check
import { defineConfig } from 'astro/config';

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
});
