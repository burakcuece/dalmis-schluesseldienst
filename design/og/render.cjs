// Vorschaubild für WhatsApp, Facebook & Co. (Open Graph, 1200 x 630) neu erzeugen.
// Voraussetzung: `npm run build` (Schriften liegen dann in dist/_astro/fonts) und Playwright (`npm i -D playwright`).
// Ändern sich die Schriften in astro.config.mjs, fonts.css aus dist/index.html neu übernehmen.
// Aufruf: node design/og/render.cjs  → schreibt public/assets/og-dalmis-2026.png
const path = require('node:path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto('file://' + path.join(__dirname, 'og.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(__dirname, '../../public/assets/og-dalmis-2026.png') });
  await browser.close();
})();
