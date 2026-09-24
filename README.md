# DALMIS Mobiler Schlüsseldienst & Sicherheitstechnik

Mehrseitige, statische Website für DALMIS aus Herten, gebaut mit [Astro](https://astro.build) und TypeScript. Das Ergebnis ist reines HTML/CSS mit wenig JavaScript und wird über Vercel veröffentlicht.

## Befehle

| Befehl            | Wirkung                                                        |
| ----------------- | -------------------------------------------------------------- |
| `npm install`     | Abhängigkeiten installieren                                    |
| `npm run dev`     | Entwicklungsserver unter `http://localhost:4321/` |
| `npm run build`   | Typprüfung (`astro check`) und Build nach `dist/`              |
| `npm run preview` | Fertigen Build lokal ansehen                                   |

## Aufbau

```
src/
├── data/            Inhalte an einer Stelle
│   ├── site.ts        Name, Telefon, WhatsApp, E-Mail, Orte
│   ├── services.ts    Die vier Leistungen (Titel, Kurztext, Bild)
│   ├── faq.ts         Alle Fragen & Antworten, Seiten wählen per ID aus
│   └── navigation.ts  Haupt- und Rechtsnavigation
├── components/      Wiederverwendbare Bausteine (Header, Footer, Karten, FAQ …)
├── layouts/
│   ├── BaseLayout.astro     <head>, SEO, strukturierte Daten, Header, Footer
│   ├── ServiceLayout.astro  Rahmen für die Leistungsseiten
│   └── LegalLayout.astro    Rahmen für Impressum, Datenschutz, 404
├── pages/           Jede Datei ist eine Seite
│   ├── index.astro, preise.astro, einsatzgebiet.astro, ueber-uns.astro,
│   │   faq.astro, kontakt.astro, impressum.astro, datenschutz.astro, 404.astro
│   ├── leistungen/  index, tueroeffnung, autooeffnung, schloss-zylinder, sicherheitstechnik
│   └── sitemap.xml.ts  Sitemap, wird automatisch aus den Seiten erzeugt
├── lib/             Hilfsfunktionen (URLs, Icons, schema.org)
├── scripts/main.ts  Menü, FAQ-Akkordeon, Einblenden beim Scrollen
└── styles/global.css
public/              Bilder, Favicon, robots.txt, Manifest (werden unverändert kopiert)
```

**Telefonnummer, E-Mail oder Orte ändern:** nur `src/data/site.ts` anpassen. Alle Seiten, Links und strukturierten Daten übernehmen die Änderung.

**Neue Frage ergänzen:** Eintrag in `src/data/faq.ts` anlegen. Sie erscheint automatisch auf der FAQ-Seite; auf anderen Seiten über ihre ID in `faqIds`.

## Schriften

Barlow Condensed (Überschriften) und Barlow (Text) kommen von Google Fonts, werden aber über die Font-API von Astro (`fonts` in `astro.config.mjs`) beim Build heruntergeladen und unter `/_astro/fonts/` von der eigenen Domain ausgeliefert. Besucher bauen keine Verbindung zu Google auf. Schriften deshalb nie per `<link>` auf `fonts.googleapis.com` einbinden (siehe LG München I, Az. 3 O 17493/20).

## Veröffentlichung

Die Seite läuft auf Vercel. Ist das GitHub-Repository mit dem Vercel-Projekt verbunden, wird jeder Push auf `main` automatisch veröffentlicht, jeder andere Branch bekommt eine Vorschau-URL. Manuell geht es mit `vercel --prod`.

Die Domain (für Canonical-URLs, Sitemap und `robots.txt`) übernimmt der Build automatisch von Vercel, auch eine später verbundene eigene Domain. Fest vorgeben lässt sie sich über die Umgebungsvariable `SITE_URL`.

Weiterleitungen stehen in `vercel.json`: alte Adressen wie `impressum.html` leiten per 301 auf die neuen Pfade weiter.

## Vor der geschäftlichen Nutzung

- **Anschrift fehlt:** Die vollständige ladungsfähige Anschrift muss in Impressum und Datenschutz ergänzt und rechtlich geprüft werden.
- **Keine unbestätigten Aussagen:** 24/7-Erreichbarkeit, feste Anfahrtszeiten, Festpreise, Kartenzahlung, Bewertungen oder Tresoröffnungen werden bewusst nicht als Fakten veröffentlicht. Konkrete Fahrzeugmodelle, Preise und Vorgehensweisen sind vor dem Einsatz abzustimmen.
- **Texte der Unterseiten prüfen lassen:** Die Unterseiten enthalten neben bestätigten Angaben allgemeine Hinweise (z. B. Unterschied zugefallene/abgeschlossene Tür, Berechtigungsnachweis, Verbrauchertipps, Beispiele für Sicherheitstechnik). Diese sollten von Serhat Dalmis gegengelesen werden.
- **Bilder:** Die WebP-Motive in `public/assets/` sind generierte Beispieldarstellungen. Sie zeigen weder Serhat Dalmis noch echte Kundenfahrzeuge oder tatsächliche Ausrüstung. Das ist im Footer und in Bildunterschriften kenntlich gemacht. Vor der finalen Freigabe durch authentische Einsatzfotos ersetzen.
- **Bewertungen** erst nach Freigabe echter Kundendaten ergänzen.
