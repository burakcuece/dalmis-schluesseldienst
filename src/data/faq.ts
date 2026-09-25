/**
 * Alle häufigen Fragen an einer Stelle. Seiten wählen per ID aus,
 * welche Fragen sie zeigen. Die gleichen Texte landen automatisch
 * in den strukturierten Daten (FAQPage) der jeweiligen Seite.
 *
 * Hinweis: Nur bestätigte Angaben verwenden. Keine Preise und keine
 * Anfahrtszeiten nennen. Freigegeben sind: Mo-Fr 9-17 Uhr, Notdienst
 * rund um die Uhr, keine Kartenzahlung vor Ort.
 */
export type FaqCategory = 'allgemein' | 'preise' | 'tuer' | 'auto' | 'schloss' | 'sicherheit' | 'gebiet';

export interface FaqEntry {
  id: string;
  category: FaqCategory;
  question: string;
  /** Jeder Eintrag ist ein Absatz */
  answer: string[];
}

export const faqCategories: Record<FaqCategory, string> = {
  allgemein: 'Allgemein & Kontakt',
  preise: 'Preise',
  tuer: 'Türöffnung',
  auto: 'Autoöffnung',
  schloss: 'Schloss & Zylinder',
  sicherheit: 'Sicherheitstechnik',
  gebiet: 'Einsatzgebiet',
};

export const faqs: FaqEntry[] = [
  {
    id: 'orte',
    category: 'gebiet',
    question: 'In welchen Orten ist DALMIS unterwegs?',
    answer: [
      'Der Firmensitz befindet sich in Herten. Je nach Auftrag ist der mobile Service ungefähr 35 Kilometer rund um Herten verfügbar.',
    ],
  },
  {
    id: 'orte-nachbarstaedte',
    category: 'gebiet',
    question: 'Kommt DALMIS auch nach Recklinghausen, Marl oder Gelsenkirchen?',
    answer: [
      'Anfragen aus Recklinghausen, Marl, Gelsenkirchen, Dorsten und weiteren Orten rund um Herten sind möglich. Ob und wann ein Einsatz an Ihrem Standort möglich ist, klären wir direkt mit Ihnen.',
    ],
  },
  {
    id: 'kosten-tuer',
    category: 'preise',
    question: 'Was kostet eine Türöffnung?',
    answer: [
      'Der Preis hängt unter anderem von der Situation, dem Schloss, dem Aufwand und gegebenenfalls der Uhrzeit ab. Die Kosten werden vor Beginn der Arbeiten besprochen.',
    ],
  },
  {
    id: 'preis-wann',
    category: 'preise',
    question: 'Wann erfahre ich, was der Einsatz kostet?',
    answer: [
      'Bevor gearbeitet wird. Schildern Sie am Telefon oder per WhatsApp kurz die Situation. Der voraussichtliche Preis und das Vorgehen werden vor Beginn mit Ihnen abgestimmt. Erst dann entscheiden Sie, ob Sie den Auftrag erteilen.',
    ],
  },
  {
    id: 'serioes',
    category: 'preise',
    question: 'Woran erkenne ich einen seriösen Schlüsseldienst?',
    answer: [
      'Ein seriöser Anbieter nennt Ihnen einen nachvollziehbaren Namen mit Ansprechpartner und Firmensitz und bespricht den Preis vor Beginn der Arbeiten. Lassen Sie sich nicht zu einer Unterschrift unter Zeitdruck drängen und verlangen Sie eine Rechnung mit den ausgeführten Leistungen.',
      'Vorsicht ist bei Anzeigen ohne Adresse, bei Pauschalversprechen ohne Rückfrage zur Situation und bei Preisen geboten, die erst nach der Arbeit genannt werden.',
    ],
  },
  {
    id: 'auto',
    category: 'auto',
    question: 'Bietet DALMIS auch Autoöffnungen an?',
    answer: [
      'Ja. Teilen Sie uns bitte das Fahrzeugmodell, die Situation und Ihren Standort mit. Ob eine Öffnung möglich ist und wie vorgegangen wird, besprechen wir vorab.',
    ],
  },
  {
    id: 'auto-angaben',
    category: 'auto',
    question: 'Welche Angaben braucht es für eine Autoöffnung?',
    answer: [
      'Hilfreich sind Marke, Modell und ungefähres Baujahr des Fahrzeugs, Ihr genauer Standort und eine kurze Beschreibung der Situation, zum Beispiel ob der Schlüssel im Fahrzeug liegt.',
    ],
  },
  {
    id: 'auto-notfall',
    category: 'auto',
    question: 'Ein Kind oder Tier ist im Auto eingeschlossen. Was tun?',
    answer: [
      'Wenn ein Mensch oder Tier im Fahrzeug in Gefahr ist, etwa bei Hitze, rufen Sie bitte sofort den Notruf 112. Rettungsdienst und Feuerwehr haben in solchen Fällen Vorrang.',
    ],
  },
  {
    id: 'angaben',
    category: 'allgemein',
    question: 'Welche Angaben helfen bei der Anfrage?',
    answer: [
      'Nennen Sie Ihren Standort und beschreiben Sie kurz die Situation. Bei einer Autoöffnung ist zusätzlich das Fahrzeugmodell hilfreich. Den Standort können Sie auch per WhatsApp senden.',
    ],
  },
  {
    id: 'ansprechpartner',
    category: 'allgemein',
    question: 'Wie erreiche ich DALMIS am schnellsten?',
    answer: [
      'Am schnellsten telefonisch. Per WhatsApp können Sie uns zusätzlich Ihren Standort und Fotos schicken. Anfragen, die nicht eilen, erreichen uns auch per E-Mail.',
    ],
  },
  {
    id: 'erreichbarkeit',
    category: 'allgemein',
    question: 'Wann ist DALMIS erreichbar?',
    answer: [
      'Regulär von Montag bis Freitag zwischen 9 und 17 Uhr. Außerhalb dieser Zeiten sind wir im Notdienst rund um die Uhr für Sie da, auch nachts und am Wochenende.',
      'Einsätze außerhalb der regulären Zeiten können einen anderen Preis haben. Sie erfahren ihn am Telefon, bevor wir losfahren.',
    ],
  },
  {
    id: 'bezahlung',
    category: 'preise',
    question: 'Kann ich vor Ort mit Karte bezahlen?',
    answer: [
      'Nein, Kartenzahlung vor Ort ist nicht möglich. Wie Sie bezahlen können, besprechen wir mit Ihnen bei der Anfrage, zusammen mit dem Preis.',
    ],
  },
  {
    id: 'whatsapp',
    category: 'allgemein',
    question: 'Kann ich meinen Standort per WhatsApp senden?',
    answer: [
      'Ja. Über die WhatsApp-Schaltflächen auf dieser Website öffnet sich ein Chat mit einer vorbereiteten Nachricht. Ihren Standort können Sie dort über die Standortfunktion von WhatsApp teilen.',
    ],
  },
  {
    id: 'tuer-unterschied',
    category: 'tuer',
    question: 'Was ist der Unterschied zwischen einer zugefallenen und einer abgeschlossenen Tür?',
    answer: [
      'Bei einer zugefallenen Tür ist nur die Falle eingerastet, der Riegel wurde nicht mit dem Schlüssel vorgeschlossen. Bei einer abgeschlossenen Tür ist der Riegel ausgefahren. Das ist für Aufwand und Vorgehen ein wichtiger Unterschied. Sagen Sie deshalb bei der Anfrage, was auf Ihre Tür zutrifft.',
    ],
  },
  {
    id: 'tuer-nachweis',
    category: 'tuer',
    question: 'Muss ich nachweisen, dass ich dort wohne?',
    answer: [
      'Rechnen Sie damit, dass nach einem Nachweis gefragt wird, dass Sie zum Zutritt berechtigt sind, zum Beispiel mit einem Ausweis mit Ihrer Anschrift. Liegt der Ausweis in der Wohnung, kann er in der Regel direkt nach der Öffnung gezeigt werden.',
    ],
  },
  {
    id: 'schloss-wann',
    category: 'schloss',
    question: 'Wann sollte ich Schloss oder Schließzylinder tauschen lassen?',
    answer: [
      'Typische Anlässe sind ein verlorener Schlüssel, ein Umzug in eine neue Wohnung, ein Schloss, das hakt oder schwergängig ist, oder Spuren eines Einbruchsversuchs. Was in Ihrem Fall sinnvoll ist, klären Sie am besten im Gespräch.',
    ],
  },
  {
    id: 'schluessel-abgebrochen',
    category: 'schloss',
    question: 'Der Schlüssel ist im Schloss abgebrochen. Was nun?',
    answer: [
      'Versuchen Sie nicht, das Bruchstück mit Werkzeug herauszuhebeln. Dabei kann der Zylinder weiter beschädigt werden. Melden Sie sich mit einer kurzen Beschreibung, gern mit Foto per WhatsApp.',
    ],
  },
  {
    id: 'sicherheit-passend',
    category: 'sicherheit',
    question: 'Welche Sicherheitstechnik passt zu meiner Tür?',
    answer: [
      'Das hängt von Tür, Rahmen, vorhandenem Schloss und Ihrer Wohnsituation ab. Wir besprechen mit Ihnen, welche Lösungen für Ihre Tür in Frage kommen.',
    ],
  },
];

export function getFaqs(ids: string[]): FaqEntry[] {
  return ids.map((id) => {
    const entry = faqs.find((faq) => faq.id === id);
    if (!entry) throw new Error(`Unbekannte FAQ-ID: ${id}`);
    return entry;
  });
}
