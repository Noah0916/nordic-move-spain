import type { Metadata } from "next";
import type { ReactNode } from "react";

/**
 * Empfohlener Speicherort:
 * app/de/guides/wie-lange-dauert-hauskauf-spanien/page.tsx
 *
 * Die genannten Zeiträume sind realistische Orientierungswerte und keine Garantien.
 * Vor der Veröffentlichung bitte interne Routen und Veröffentlichungsdatum prüfen.
 */

const PAGE_URL = "/de/guides/wie-lange-dauert-hauskauf-spanien";
const CONTACT_URL = "/de/contact";
const ASSESSMENT_URL = "/de/relocation-assessment";
const GUIDES_URL = "/de/guides";

const OFFICIAL_SOURCES = {
  nie: "https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/ciudadanos-de-la-union-europea/numero-de-Identidad-de-extranjero-nie/",
  foreignDocumentation:
    "https://www.interior.gob.es/opencms/gl/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/regimen-general/documentacion-de-las-personas-extranjeras/",
  mortgageLaw: "https://www.boe.es/buscar/act.php?id=BOE-A-2019-3814",
  mortgageProcess:
    "https://clientebancario.bde.es/pcb/es/menu-horizontal/productosservici/financiacion/hipotecas/guia-textual/primerospasoscon/Contratacion_de_la_hipoteca.html",
  valuation:
    "https://www.bde.es/hnb/es/criterios-buenas-practicas/tasacion-para-la-concesion-de-prestamos-y-creditos-hipotecarios.html",
  propertyRegister:
    "https://www.registradores.org/es/el-colegio/registro-de-la-propiedad",
  mortgageRegisterLaw:
    "https://www.boe.es/buscar/act.php?id=BOE-A-1946-2453",
  notary: "https://www.notariado.org/comprar-una-vivienda/",
  swornTranslators:
    "https://exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Traductores-Interpretes-Jurados.aspx/",
  legalisation:
    "https://exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Legalizacion-y-apostilla.aspx",
};

export const metadata: Metadata = {
  title: "Wie lange dauert ein Hauskauf in Spanien? | Zeitplan 2026",
  description:
    "Wie lange dauert ein Hauskauf in Spanien? Vollständiger Zeitplan für NIE, Hypothek, Übersetzungen, rechtliche Prüfung, Notar und Registrierung.",
  keywords: [
    "wie lange dauert Hauskauf Spanien",
    "Zeitplan Hauskauf Spanien",
    "Hypothek Spanien Dauer",
    "NIE Nummer beantragen Dauer",
    "Immobilie in Spanien kaufen Ablauf",
    "Haus kaufen Costa Blanca Zeitplan",
    "spanische Hypothek beantragen",
    "rechtliche Prüfung Immobilie Spanien",
    "Notar Hauskauf Spanien",
    "Hypothek Dokumente übersetzen Spanien",
    "Nordic Move Spain",
  ],
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "Nordic Move Spain",
    title: "Wie lange dauert es, ein Haus in Spanien zu kaufen?",
    description:
      "Ein vollständiger Zeitplan für Vorbereitung, NIE, Hypothek, Übersetzungen, Due Diligence, Notar und Registrierung.",
    publishedTime: "2026-07-23T00:00:00.000Z",
    modifiedTime: "2026-07-23T00:00:00.000Z",
    authors: ["Nordic Move Spain"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hauskauf in Spanien: kompletter Zeitplan 2026",
    description:
      "Von finanzieller Vorbereitung und NIE bis zu Hypothek, Notar und Schlüsselübergabe.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const overviewTimings = [
  {
    buyer: "Käufer ohne Hypothek",
    timing: "Meist 4–8 Wochen",
    explanation:
      "Vom angenommenen Angebot oder der Reservierung bis zur notariellen Beurkundung, sofern die rechtliche Situation klar und die Unterlagen vollständig sind.",
  },
  {
    buyer: "Käufer mit spanischer Hypothek",
    timing: "Meist 8–14 Wochen",
    explanation:
      "Ab dem angenommenen Angebot, wenn die Finanzunterlagen weitgehend vorbereitet sind. Komplexe Anträge können länger dauern.",
  },
  {
    buyer: "Komplexer Fall",
    timing: "Oft 12–20+ Wochen",
    explanation:
      "Zum Beispiel bei ländlichen Grundstücken, unklaren Genehmigungen, Nachlassfällen, Unternehmereinkommen oder Abweichungen zwischen Grundbuch, Kataster und tatsächlichem Zustand.",
  },
  {
    buyer: "Neubau vom Plan",
    timing: "Monate bis mehrere Jahre",
    explanation:
      "Die Vertragsphase kann schnell abgeschlossen sein, die Übergabe erfolgt jedoch erst nach Bau, Genehmigungen, Fertigstellung und vertraglichen Meilensteinen.",
  },
];

const completeTimeline = [
  {
    phase: "Vorbereitung",
    timing: "2–8 Wochen vor einem Angebot",
    tasks:
      "Budget, Eigenmittel, Kaufnebenkosten, Hypotheken-Vorprüfung, NIE, Dokumentenmappe, Übersetzungen und Auswahl unabhängiger Fachleute.",
  },
  {
    phase: "Suche und Besichtigungen",
    timing: "Tage bis Monate",
    tasks:
      "Regionen vergleichen, Immobilien auswählen und besichtigen, den technischen Eindruck bewerten und eine Angebotsstrategie festlegen.",
  },
  {
    phase: "Angebot und Reservierung",
    timing: "1–5 Werktage",
    tasks:
      "Verhandlung, Reservierungsbedingungen, Zahlungsnachweis, Exklusivität und ein realistischer spätester Kauf- bzw. Beurkundungstermin.",
  },
  {
    phase: "Rechtliche und technische Prüfung",
    timing: "1–3 Wochen",
    tasks:
      "Eigentum, Belastungen, Genehmigungen, Kataster, Schulden, Comunidad, Steuern, Versorgungsanschlüsse und bauliche Risiken prüfen.",
  },
  {
    phase: "Hypothekenprüfung",
    timing: "4–8 Wochen",
    tasks:
      "Dokumentenprüfung, Bonitätsanalyse, Bankkomitee, Bewertung der Immobilie und endgültige Genehmigung. Sonderfälle dauern häufig länger.",
  },
  {
    phase: "FEIN und gesetzliche Vorphase",
    timing: "Mindestens 10 Kalendertage",
    tasks:
      "Die Bank stellt verbindliche Hypothekeninformationen bereit. Danach folgt vor der Hypothekenurkunde die gesetzlich vorgeschriebene notarielle Transparenzprüfung.",
  },
  {
    phase: "Notarielle Beurkundung",
    timing: "1 Tag",
    tasks:
      "Kaufurkunde und gegebenenfalls Hypothekenurkunde unterzeichnen, Restbetrag zahlen, Schlüssel übernehmen und Unterlagen für Steuern und Registrierung einreichen.",
  },
  {
    phase: "Administrative Nachbereitung",
    timing: "2–6 Wochen",
    tasks:
      "Steuererklärungen, Eintragung, Versorgungsverträge, Versicherung, Comunidad, lokale Abgaben und die endgültige Kaufakte abschließen.",
  },
];

const mortgageStages = [
  {
    number: "01",
    title: "Finanzielle Vorprüfung",
    timing: "3–10 Werktage",
    text:
      "Bank oder Finanzierungsberater prüfen Einkommen, Alter, Schulden, Eigenmittel, Wohnsitzland und gewünschten Kreditbetrag. Das ist noch keine endgültige Kreditzusage.",
  },
  {
    number: "02",
    title: "Vollständige Hypothekenunterlagen",
    timing: "1–3 Wochen Vorbereitung",
    text:
      "Einkommensnachweise, Steuererklärungen, Kontoauszüge, Arbeitgeberbestätigung und Nachweise über Eigenmittel werden gesammelt und bei Bedarf übersetzt.",
  },
  {
    number: "03",
    title: "Formelle Kreditprüfung",
    timing: "2–6 Wochen",
    text:
      "Die Bank prüft Tragfähigkeit, Verpflichtungen, Kreditauskünfte und Herkunft der Mittel. Selbstständige und Einkommen aus mehreren Ländern benötigen häufig zusätzliche Bearbeitungszeit.",
  },
  {
    number: "04",
    title: "Bewertung der Immobilie",
    timing: "3–10 Werktage",
    text:
      "Ein anerkannter Gutachter besichtigt die Immobilie und erstellt einen Bewertungsbericht. Zugang, Terminplanung und fehlende Objektunterlagen können verzögern.",
  },
  {
    number: "05",
    title: "Endgültige Genehmigung und FEIN",
    timing: "Einige Tage bis 2 Wochen",
    text:
      "Nach Kredit- und Objektfreigabe erhalten Sie die verbindlichen Hypothekeninformationen. Änderungen bei Kaufpreis, Bewertung oder Einkommen können eine erneute Prüfung auslösen.",
  },
  {
    number: "06",
    title: "Gesetzliche Vorphase und Notar",
    timing: "Mindestens 10 Kalendertage",
    text:
      "FEIN und weitere Unterlagen müssen mindestens zehn Kalendertage vor Abschluss des Darlehens bereitgestellt werden. Der Notar prüft vorab, ob Sie die Bedingungen verstanden haben.",
  },
];

const mortgageDocuments = [
  "Gültiger Reisepass oder Personalausweis jedes Antragstellers.",
  "NIE-Nummer jedes Käufers bzw. Hypothekenantragstellers.",
  "Aktuelle Gehaltsabrechnungen, häufig der letzten drei bis sechs Monate.",
  "Arbeitsvertrag und/oder Arbeitgeberbescheinigung.",
  "Aktuelle Steuererklärungen und Steuerbescheide.",
  "Kontoauszüge, häufig der letzten drei bis sechs Monate.",
  "Übersicht über Darlehen, Kredite, Unterhaltsverpflichtungen und bestehende Hypotheken.",
  "Nachweis der Eigenmittel und Herkunft des Kaufkapitals.",
  "Für Selbstständige: Jahresabschlüsse und steuerliche Unterlagen in der Regel der letzten zwei oder drei Geschäftsjahre.",
  "Reservierungsdokument, Kaufvertrag und verfügbare Objektunterlagen.",
];

const delayFactors = [
  {
    title: "Der NIE-Termin wurde nicht rechtzeitig organisiert",
    text:
      "Die behördliche Bearbeitung kann nach vollständiger Einreichung kurz sein, die Verfügbarkeit von Terminen unterscheidet sich jedoch je nach Ort und Antragsweg.",
  },
  {
    title: "Die Hypothekenunterlagen sind unvollständig",
    text:
      "Jede fehlende Gehaltsabrechnung, Steuererklärung, Bescheinigung oder Übersetzung kann die Bankprüfung stoppen. Reichen Sie ein aktuelles und logisch aufgebautes Dossier ein.",
  },
  {
    title: "Die Bewertung liegt unter dem Kaufpreis",
    text:
      "Die Finanzierung richtet sich auch nach dem Gutachtenwert. Ein niedrigerer Wert kann mehr Eigenkapital oder eine Neuverhandlung erforderlich machen.",
  },
  {
    title: "Grundbuch, Kataster und tatsächlicher Zustand weichen voneinander ab",
    text:
      "Abweichungen bei Fläche, Anbauten, Pool, Nutzung oder Grundstücksgrenzen können zusätzliche Prüfung, Berichtigung oder Legalisierung notwendig machen.",
  },
  {
    title: "Genehmigungen oder Schuldennachweise fehlen",
    text:
      "Der Verkäufer muss mitunter kommunale Unterlagen, Comunidad-Bescheinigungen, Energieausweis oder Steuerbelege nachreichen.",
  },
  {
    title: "Eine ausländische Vollmacht ist nicht verwendbar",
    text:
      "Apostille, Legalisation, offizielle Übersetzung oder zu eng formulierte Befugnisse können erst kurz vor dem Notartermin zum Problem werden.",
  },
  {
    title: "Die vertragliche Frist ist zu ehrgeizig",
    text:
      "Drei oder vier Wochen sind riskant, wenn noch keine NIE, Bankfreigabe, Bewertung oder vollständige rechtliche Prüfung vorliegt.",
  },
];

const faqItems = [
  {
    question: "Wie lange dauert es durchschnittlich, ein Haus in Spanien zu kaufen?",
    answer:
      "Ein gut vorbereiteter Barkauf kann häufig innerhalb von vier bis acht Wochen ab dem angenommenen Angebot abgeschlossen werden. Mit einer spanischen Hypothek sind acht bis vierzehn Wochen realistischer. Ein komplexer Fall kann zwölf bis zwanzig Wochen oder länger dauern.",
  },
  {
    question: "Wie lange dauert es, eine spanische Hypothek zu bekommen?",
    answer:
      "Rechnen Sie ab vollständigem Dossier praktisch mit vier bis acht Wochen für Prüfung und Genehmigung, gefolgt von der vorgeschriebenen Hypotheken-Vorphase. Vom angenommenen Angebot bis zum Notar sind daher acht bis vierzehn Wochen meist sicherer geplant.",
  },
  {
    question: "Kann ich in vier Wochen eine Immobilie in Spanien kaufen?",
    answer:
      "Das kann bei einem Barkauf mit einfacher rechtlicher Situation, vorhandener NIE und schneller Mitarbeit aller Beteiligten möglich sein. Als Standardfrist ist es nicht sinnvoll, wenn Finanzierung, Übersetzungen, Vollmacht oder umfangreiche Prüfungen noch ausstehen.",
  },
  {
    question: "Wie lange dauert ein NIE-Antrag?",
    answer:
      "Die offiziellen Informationen nennen eine maximale Entscheidungsfrist von fünf Tagen, nachdem der Antrag beim zuständigen Register eingegangen ist. Die praktische Wartezeit wird jedoch oft durch verfügbare Termine, den Antragsweg, fehlende Unterlagen und den Versand über ein Konsulat bestimmt.",
  },
  {
    question: "Brauche ich bereits eine NIE, um ein Kaufangebot abzugeben?",
    answer:
      "Ein Angebot kann in der Regel schon vorher abgegeben werden. Für die notarielle Beurkundung und steuerliche Abwicklung benötigt jedoch jeder ausländische Käufer eine NIE. Banken können die Nummer außerdem früh im Hypothekenprozess verlangen.",
  },
  {
    question: "Wie lange dauert die Übersetzung von Hypothekenunterlagen?",
    answer:
      "Eine kleine Auswahl an Einkommensnachweisen kann praktisch innerhalb von zwei bis fünf Werktagen übersetzt werden. Ein umfangreiches Dossier mit Jahresabschlüssen, Steuererklärungen und notariellen Unterlagen dauert eher fünf bis zehn Werktage oder länger. Apostille und Versand können zusätzliche Wochen verursachen.",
  },
  {
    question: "Müssen alle Dokumente beglaubigt übersetzt werden?",
    answer:
      "Nicht immer. Eine Bank kann einfache Übersetzungen oder englischsprachige Dokumente akzeptieren, während ein Notar oder eine Behörde für bestimmte Unterlagen eine offizielle Übersetzung verlangen kann. Klären Sie pro Dokument, was die empfangende Stelle akzeptiert.",
  },
  {
    question: "Wie lange dauert die rechtliche Prüfung einer Immobilie?",
    answer:
      "Für eine normale Wohnung oder eine rechtlich klare Villa sind ein bis drei Wochen ein sinnvoller Richtwert. Ländliche Immobilien, Umbauten, Nachlassfälle und Abweichungen zwischen Grundbuch und Kataster benötigen häufig mehr Zeit.",
  },
  {
    question: "Wann unterschreibe ich den Arras-Vertrag?",
    answer:
      "Unterschreiben Sie erst, wenn Kaufpreis, spätester Termin, Inventar, Folgen eines Rücktritts sowie mögliche rechtliche oder finanzierungsbezogene Bedingungen klar sind. Ein Arras-Vertrag ist bindend und der genaue Wortlaut bestimmt die Folgen.",
  },
  {
    question: "Wie viel Zeit muss zwischen FEIN und Hypothekenurkunde liegen?",
    answer:
      "Das spanische Hypothekengesetz schreibt vor, dass die personalisierten Unterlagen einschließlich FEIN mindestens zehn Kalendertage vor Unterzeichnung des Darlehens bereitgestellt werden.",
  },
  {
    question: "Kann ich kaufen, ohne selbst nach Spanien zu reisen?",
    answer:
      "Das ist häufig mit einer ausreichend umfassenden notariellen Vollmacht möglich. Bei Unterzeichnung außerhalb Spaniens sollte vorab geprüft werden, ob Apostille oder Legalisation und eine offizielle spanische Übersetzung erforderlich sind.",
  },
  {
    question: "Wann bekomme ich die Schlüssel?",
    answer:
      "Bei Bestandsimmobilien werden die Schlüssel normalerweise während oder direkt nach der notariellen Beurkundung übergeben, sobald die vereinbarte Zahlung erfolgt ist. Bei Neubauten gelten die Übergabebedingungen des jeweiligen Projekts.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Wie lange dauert es, ein Haus in Spanien zu kaufen? Kompletter Zeitplan 2026",
  description:
    "Kompletter Zeitplan für Vorbereitung, NIE, Hypothek, Übersetzungen, rechtliche Prüfung, Notar und Registrierung.",
  inLanguage: "de-DE",
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  author: { "@type": "Organization", name: "Nordic Move Spain", url: "/de" },
  publisher: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "/de",
  },
  citation: Object.values(OFFICIAL_SOURCES),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/de" },
    { "@type": "ListItem", position: 2, name: "Ratgeber", item: GUIDES_URL },
    {
      "@type": "ListItem",
      position: 3,
      name: "Wie lange dauert ein Hauskauf in Spanien?",
      item: PAGE_URL,
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Zeitplan für den Kauf einer Immobilie in Spanien",
  description: "Die wichtigsten Phasen von der Vorbereitung bis zur Registrierung.",
  step: completeTimeline.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.phase,
    text: `${step.timing}. ${step.tasks}`,
  })),
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[#1e2a3a] underline decoration-[#c8a063] underline-offset-4 transition hover:text-[#9b743d]"
    >
      {children}
    </a>
  );
}

export default function HowLongToBuyHouseSpainPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-800">
        <article>
          <header className="relative overflow-hidden px-6 pb-24 pt-12 md:px-8 md:pb-32 md:pt-16">
            <div
              aria-hidden="true"
              className="absolute -right-40 top-16 h-[34rem] w-[34rem] rounded-full bg-[#c8a063]/10 blur-3xl"
            />
            <div className="relative mx-auto max-w-7xl">
              <nav
                aria-label="Brotkrümelnavigation"
                className="flex flex-wrap items-center gap-2 text-sm text-stone-500"
              >
                <a className="transition hover:text-[#1e2a3a]" href="/de">
                  Home
                </a>
                <span aria-hidden="true">/</span>
                <a
                  className="transition hover:text-[#1e2a3a]"
                  href={GUIDES_URL}
                >
                  Ratgeber
                </a>
                <span aria-hidden="true">/</span>
                <span>Kompletter Kaufzeitplan</span>
              </nav>

              <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1.28fr_0.72fr] lg:gap-20">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-[#b18445]">
                    IMMOBILIE IN SPANIEN KAUFEN · ZEITPLAN 2026
                  </p>
                  <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.06] text-[#1e2a3a] md:text-7xl">
                    Wie lange dauert es, ein Haus in Spanien zu kaufen?
                  </h1>
                  <p className="mt-8 max-w-3xl text-xl leading-relaxed text-stone-600">
                    Ein Barkauf kann manchmal innerhalb von vier bis acht Wochen
                    abgeschlossen werden. Mit einer spanischen Hypothek sind acht
                    bis vierzehn Wochen meist realistischer. Die tatsächliche Dauer
                    hängt von Vorbereitung, NIE, Hypothekenunterlagen, Übersetzungen,
                    rechtlicher Prüfung und Objektunterlagen ab.
                  </p>
                  <div className="mt-9 flex flex-wrap gap-4">
                    <a
                      href="#kompletter-zeitplan"
                      className="rounded-full bg-[#1e2a3a] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#111b29]"
                    >
                      Komplette Zeitleiste ansehen
                    </a>
                    <a
                      href={ASSESSMENT_URL}
                      className="rounded-full border border-[#1e2a3a] px-7 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                    >
                      Relocation Assessment starten
                    </a>
                  </div>
                  <div className="mt-10 flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#1e2a3a] font-serif text-lg text-white">
                      N
                    </div>
                    <div>
                      <p className="m-0 font-medium text-[#1e2a3a]">
                        Nordic Move Spain
                      </p>
                      <p className="m-0 mt-1 text-sm text-stone-500">
                        Redaktion und Kaufkoordination · Aktualisiert am 23. Juli 2026
                      </p>
                    </div>
                  </div>
                </div>

                <aside className="rounded-[34px] border-[10px] border-[#e9dfd2] bg-white p-7 shadow-xl shadow-[#1e2a3a]/10 outline outline-2 outline-white md:p-10">
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#9b743d]">
                    DIREKTE ANTWORT
                  </p>
                  <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                    Rechnen Sie nicht erst ab dem Moment, in dem Sie ein Angebot abgeben.
                  </h2>
                  <p className="mt-6 leading-relaxed text-stone-600">
                    Wer schnell und zugleich sicher kaufen möchte, beginnt bereits
                    vor der Immobiliensuche mit NIE, Finanzunterlagen, einer
                    Hypotheken-Vorprüfung und der Auswahl eines unabhängigen
                    Rechtsberaters.
                  </p>
                  <div className="mt-7 space-y-4 border-t border-stone-200 pt-7">
                    {[
                      ["Ohne Hypothek", "4–8 Wochen"],
                      ["Mit Hypothek", "8–14 Wochen"],
                      ["Komplexer Fall", "12–20+ Wochen"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-baseline justify-between gap-6"
                      >
                        <span className="text-sm text-stone-500">{label}</span>
                        <strong className="font-serif text-3xl font-normal text-[#c39a5d]">
                          {value}
                        </strong>
                      </div>
                    ))}
                  </div>
                  <p className="mt-7 rounded-2xl bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-600">
                    Praktische Orientierungswerte, keine Garantien. Die Zeit für
                    die Suche nach der passenden Immobilie ist nicht eingerechnet.
                  </p>
                </aside>
              </div>
            </div>
          </header>

          <section className="bg-[#d1cdc7] px-6 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-4xl">
                <p className="text-sm uppercase tracking-[0.32em] text-[#8a6635]">
                  REALISTISCHE DAUER
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Wie schnell können Sie tatsächlich beim Notar sitzen?
                </h2>
              </div>
              <div className="mt-14 grid gap-6 md:grid-cols-2">
                {overviewTimings.map((item) => (
                  <div
                    key={item.buyer}
                    className="rounded-[30px] bg-[#f6f1ea] p-8 shadow-sm md:p-10"
                  >
                    <p className="text-sm uppercase tracking-[0.22em] text-[#9b743d]">
                      {item.buyer}
                    </p>
                    <h3 className="mt-5 font-serif text-4xl font-normal text-[#1e2a3a]">
                      {item.timing}
                    </h3>
                    <p className="mt-5 leading-relaxed text-stone-600">
                      {item.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-8 lg:grid-cols-[260px_minmax(0,860px)] lg:justify-center lg:gap-24 lg:py-32">
            <aside className="self-start lg:sticky lg:top-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#9b743d]">
                INHALT
              </p>
              <ol className="mt-6 list-none border-b border-stone-300 p-0 text-sm">
                {[
                  ["#kompletter-zeitplan", "Kompletter Zeitplan"],
                  ["#vorbereitung", "Vorbereitung vor einem Angebot"],
                  ["#nie", "NIE-Nummer beantragen"],
                  ["#hypothek", "Hypothek und Bearbeitungszeit"],
                  ["#uebersetzungen", "Übersetzungen und Apostille"],
                  ["#angebot", "Angebot, Reservierung und Arras"],
                  ["#pruefung", "Rechtliche Prüfung"],
                  ["#notar", "FEIN, Notar und Beurkundung"],
                  ["#nach-beurkundung", "Nach der Beurkundung"],
                  ["#verzoegerung", "Was verursacht Verzögerungen?"],
                  ["#beispiele", "Beispiel-Zeitpläne"],
                  ["#faq", "Häufig gestellte Fragen"],
                ].map(([href, label], index) => (
                  <li key={href} className="border-t border-stone-300">
                    <a
                      href={href}
                      className="grid grid-cols-[28px_1fr] gap-2 py-3 leading-relaxed text-stone-600 no-underline transition hover:text-[#1e2a3a]"
                    >
                      <span className="text-xs font-semibold text-[#9b743d]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-2xl bg-[#1e2a3a] p-6 text-white">
                <p className="text-sm leading-relaxed text-white/80">
                  Möchten Sie vor einem Angebot wissen, welche Schritte in Ihrer
                  Situation am meisten Zeit benötigen?
                </p>
                <a
                  href={ASSESSMENT_URL}
                  className="mt-4 inline-block text-sm font-medium text-white underline decoration-[#c8a063] underline-offset-4"
                >
                  Relocation Assessment starten
                </a>
              </div>
            </aside>

            <div className="min-w-0">
              <section className="scroll-mt-8 border-b border-stone-300 pb-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  DIE WICHTIGSTE NUANCE
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Der Kauf kann schnell gehen. Eine sichere Vorbereitung dauert meist länger.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Käufer fragen häufig, wie viele Wochen zwischen einem angenommenen
                  Angebot und der Schlüsselübergabe liegen. Idealerweise beginnt der
                  Prozess früher: wenn Sie Budget und Eigenmittel festlegen,
                  Finanzunterlagen sammeln, eine NIE beantragen und die passende
                  Region untersuchen.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Eine Immobilie innerhalb von sechs Wochen zu kaufen kann technisch
                  möglich und trotzdem unvernünftig sein, wenn Prüfungen verkürzt
                  werden oder die Finanzierung noch unsicher ist. Gute Planung macht
                  Geschwindigkeit möglich, ohne Risikokontrolle zu opfern.
                </p>
                <div className="mt-10 border-l-4 border-[#c8a063] bg-[#eee6dc] p-7">
                  <p className="m-0 font-serif text-2xl leading-relaxed text-[#1e2a3a]">
                    Der schnellste sichere Weg ist, NIE, Finanzierung und Unterlagen
                    bereits vorzubereiten, bevor die richtige Immobilie erscheint.
                  </p>
                </div>
              </section>

              <section
                id="kompletter-zeitplan"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  VON DER VORBEREITUNG BIS ZUR REGISTRIERUNG
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Der komplette Zeitplan für einen Hauskauf in Spanien
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Mehrere Phasen können parallel laufen. Während der Anwalt die
                  Immobilie prüft, kann die Bank bereits das Gutachten beauftragen.
                  Das spart Zeit, wenn Fristen und Risiken gut koordiniert werden.
                </p>
                <div className="mt-12">
                  {completeTimeline.map((step, index) => (
                    <div
                      key={step.phase}
                      className="grid gap-5 border-t border-stone-300 py-7 md:grid-cols-[70px_1fr]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c8a063] text-sm font-semibold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                          <h3 className="m-0 font-serif text-3xl font-normal text-[#1e2a3a]">
                            {step.phase}
                          </h3>
                          <span className="rounded-full bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#8a6635]">
                            {step.timing}
                          </span>
                        </div>
                        <p className="mt-4 leading-relaxed text-stone-600">
                          {step.tasks}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="vorbereitung"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  PHASE 0 · VOR DER IMMOBILIENSUCHE
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Beginnen Sie zwei bis acht Wochen, bevor Sie ernsthaft bieten möchten
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Der größte Zeitgewinn entsteht, bevor Sie sich in eine Immobilie
                  verlieben. Klären Sie, wie viel Eigenkapital verfügbar ist, wie
                  viel Reserve für Kaufnebenkosten benötigt wird und ob eine Bank
                  Ihre Einkommenssituation voraussichtlich akzeptiert.
                </p>
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  {[
                    [
                      "Budget und Kaufnebenkosten",
                      "Berechnen Sie nicht nur den Kaufpreis. Berücksichtigen Sie ITP bzw. IVA und AJD, Notar, Register, Rechtsberatung, Bewertung, Finanzierung und unmittelbar anstehende Arbeiten.",
                    ],
                    [
                      "Hypotheken-Vorprüfung",
                      "Lassen Sie vor Besichtigungen prüfen, welche Kredithöhe realistisch ist. Eine erste Indikation ist hilfreich, aber noch keine endgültige Zusage.",
                    ],
                    [
                      "Dokumentenmappe",
                      "Sammeln Sie Reisepass, Einkommensunterlagen, Steuererklärungen, Kontoauszüge, Schuldenübersicht und Eigenmittelnachweise in einem logisch aufgebauten Dossier.",
                    ],
                    [
                      "Unabhängige Begleitung",
                      "Legen Sie vor der Unterschrift fest, wer die rechtliche Prüfung übernimmt und wer den Prozess koordiniert. Der Verkaufsmakler vertritt nicht automatisch Ihre Interessen.",
                    ],
                  ].map(([title, itemText]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-stone-300 bg-white p-7"
                    >
                      <h3 className="m-0 font-serif text-2xl font-normal text-[#1e2a3a]">
                        {title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-stone-600">
                        {itemText}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 rounded-2xl bg-[#1e2a3a] p-8 text-white">
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d6b47d]">
                    NORDIC MOVE SPAIN PRAXISTIPP
                  </p>
                  <p className="mt-5 text-lg leading-relaxed text-white/85">
                    Fragen Sie die Bank frühzeitig, welche Unterlagen sie von
                    Nichtresidenten, Selbstständigen, Rentnern oder Käufern mit
                    Einkommen aus mehreren Ländern benötigt. Die Dokumentenliste
                    bestimmt den Zeitplan oft stärker als das erste Zinsangebot.
                  </p>
                </div>
              </section>

              <section
                id="nie"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  IDENTIFIKATION IN SPANIEN
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Wie lange dauert die Beantragung einer NIE-Nummer?
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Jeder ausländische Käufer benötigt eine Número de Identidad de
                  Extranjero. Die Nummer wird unter anderem in der Kaufurkunde,
                  bei Steuererklärungen und weiteren spanischen Verwaltungsakten
                  verwendet.
                </p>
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                  {[
                    [
                      "OFFIZIELLE ENTSCHEIDUNGSFRIST",
                      "Max. 5 Tage",
                      "Nachdem ein vollständiger Antrag beim zuständigen Register eingegangen ist.",
                    ],
                    [
                      "PRAKTISCHE VORBEREITUNG",
                      "2–8 Wochen",
                      "Je nach Terminverfügbarkeit, Antragsweg und Dokumentenprüfung.",
                    ],
                    [
                      "SICHERER START",
                      "6–10 Wochen",
                      "Vor dem gewünschten Kaufdatum, besonders bei Beantragung über ein Konsulat.",
                    ],
                  ].map(([label, value, itemText]) => (
                    <div key={label} className="rounded-3xl bg-white p-7">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9b743d]">
                        {label}
                      </p>
                      <p className="mt-4 font-serif text-5xl text-[#c39a5d]">
                        {value}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-stone-600">
                        {itemText}
                      </p>
                    </div>
                  ))}
                </div>
                <h3 className="mt-12 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Wo und mit welchen Unterlagen beantragen Sie die NIE?
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  In Spanien kann der Antrag persönlich oder über einen bevollmächtigten
                  Vertreter bei der zuständigen Ausländerbehörde bzw. Polizeidienststelle
                  eingereicht werden. Außerhalb Spaniens erfolgt die Beantragung über
                  die für Ihren Wohnort zuständige spanische konsularische Vertretung.
                </p>
                <ul className="mt-6 space-y-3 pl-5 leading-relaxed text-stone-600">
                  <li>Das offizielle Formular EX-15.</li>
                  <li>Nachweis über die Zahlung der entsprechenden Verwaltungsgebühr.</li>
                  <li>Original und Kopie von Reisepass oder Ausweisdokument.</li>
                  <li>Erläuterung und Nachweis des wirtschaftlichen Grundes für den Antrag.</li>
                  <li>Bei Vertretung: eine ausreichend konkrete Vollmacht.</li>
                </ul>
                <div className="mt-10 rounded-2xl border border-[#d9be96] bg-[#fbf4e8] p-7">
                  <p className="m-0 leading-relaxed text-stone-700">
                    <strong className="text-[#1e2a3a]">Wichtig:</strong> Die fünf
                    Tage beginnen nicht, wenn Sie erstmals nach einem Termin suchen.
                    Wartezeiten für Termine, fehlende Unterlagen und konsularischer
                    Versand kommen zusätzlich hinzu.
                  </p>
                </div>
                <p className="mt-7 text-sm leading-relaxed text-stone-500">
                  Offizielle Informationen: {" "}
                  <SourceLink href={OFFICIAL_SOURCES.nie}>
                    Spanisches Innenministerium — NIE
                  </SourceLink>{" "}
                  und {" "}
                  <SourceLink href={OFFICIAL_SOURCES.foreignDocumentation}>
                    Dokumentation und Bearbeitung
                  </SourceLink>
                  .
                </p>
              </section>

              <section
                id="hypothek"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  FINANZIERUNG
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Wie lange dauert es, eine Hypothek in Spanien abzuschließen?
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Für einen ausländischen Käufer sind {" "}
                  <strong className="text-[#1e2a3a]">vier bis acht Wochen</strong>{" "}
                  ab vollständigem Dossier ein brauchbarer Richtwert für Prüfung,
                  Bewertung und endgültige Genehmigung. Ab einem angenommenen
                  Kaufangebot sind {" "}
                  <strong className="text-[#1e2a3a]">acht bis vierzehn Wochen</strong>{" "}
                  bis zum Notar meist realistischer.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Die Bank prüft nicht nur den Immobilienwert, sondern auch aktuelles
                  und erwartetes Einkommen, Vermögen, laufende Verpflichtungen,
                  Schulden und Tragfähigkeit. Eine allgemeingültige garantierte
                  Bearbeitungsdauer gibt es nicht.
                </p>
                <div className="mt-12">
                  {mortgageStages.map((stage) => (
                    <div
                      key={stage.number}
                      className="grid gap-5 border-t border-stone-300 py-7 md:grid-cols-[68px_1fr]"
                    >
                      <span className="text-sm font-semibold tracking-[0.15em] text-[#9b743d]">
                        {stage.number}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                          <h3 className="m-0 font-serif text-3xl font-normal text-[#1e2a3a]">
                            {stage.title}
                          </h3>
                          <span className="text-sm font-medium text-[#9b743d]">
                            {stage.timing}
                          </span>
                        </div>
                        <p className="mt-4 leading-relaxed text-stone-600">
                          {stage.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="mt-12 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Unterlagen, die Sie im Voraus sammeln können
                </h3>
                <div className="mt-7 grid gap-3 md:grid-cols-2">
                  {mortgageDocuments.map((document) => (
                    <div
                      key={document}
                      className="flex gap-3 rounded-2xl bg-white p-5"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c8a063] text-xs text-white">
                        ✓
                      </span>
                      <p className="m-0 text-sm leading-relaxed text-stone-600">
                        {document}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="mt-12 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Das Gutachten kann Zeitplan und Eigenkapitalbedarf verändern
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  Vor der Kreditvergabe wird die Immobilie von einem anerkannten
                  Bewertungsunternehmen begutachtet. Die Banco de España weist darauf
                  hin, dass ein gültiges Gutachten eines anerkannten Gutachters sechs
                  Monate gültig ist.
                </p>
                <p className="mt-6 leading-relaxed text-stone-600">
                  Liegt die Bewertung unter dem Kaufpreis, kann die Bank weniger
                  finanzieren. Das kann mehr Eigenmittel, eine Neuverhandlung oder
                  eine andere Finanzierungsstruktur erforderlich machen.
                </p>
                <div className="mt-10 rounded-3xl bg-[#1e2a3a] p-8 text-white">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#d7b780]">
                    HYPOTHEKENPLANUNG OHNE UNANGENEHME ÜBERRASCHUNGEN
                  </p>
                  <p className="mt-5 text-lg leading-relaxed text-white/85">
                    Vereinbaren Sie keinen Beurkundungstermin, der nur funktioniert,
                    wenn jeder Bankschritt sofort klappt. Ein Finanzierungsvorbehalt
                    sollte klar definieren, was als Ablehnung gilt und welche Nachweise
                    erforderlich sind.
                  </p>
                </div>
                <p className="mt-7 text-sm leading-relaxed text-stone-500">
                  Offizieller Hintergrund: {" "}
                  <SourceLink href={OFFICIAL_SOURCES.mortgageProcess}>
                    Banco de España — Hypothekenprüfung
                  </SourceLink>
                  , {" "}
                  <SourceLink href={OFFICIAL_SOURCES.valuation}>
                    Bewertung und Gültigkeit
                  </SourceLink>{" "}
                  und {" "}
                  <SourceLink href={OFFICIAL_SOURCES.mortgageLaw}>
                    Ley 5/2019
                  </SourceLink>
                  .
                </p>
              </section>

              <section
                id="uebersetzungen"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  DOKUMENTE IN MEHREREN SPRACHEN
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Wie viel Zeit sollten Sie für Übersetzungen einplanen?
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Nicht jedes Dokument muss von einem vereidigten Übersetzer
                  übersetzt werden. Eine Bank kann englischsprachige oder einfache
                  Übersetzungen akzeptieren, während Notar, Register oder Behörde
                  für einzelne Unterlagen eine offizielle spanische Übersetzung
                  verlangen können.
                </p>
                <div className="mt-10 overflow-x-auto rounded-3xl border border-stone-300 bg-white">
                  <table className="w-full min-w-[720px] border-collapse text-left">
                    <caption className="px-6 py-4 text-left text-sm text-stone-500">
                      Praktische Richtwerte; lassen Sie sich vorher einen konkreten Zeitplan nennen.
                    </caption>
                    <thead className="bg-[#1e2a3a] text-white">
                      <tr>
                        <th className="px-6 py-4 text-xs uppercase tracking-[0.12em]">
                          Art der Arbeit
                        </th>
                        <th className="px-6 py-4 text-xs uppercase tracking-[0.12em]">
                          Üblicher Zeitrahmen
                        </th>
                        <th className="px-6 py-4 text-xs uppercase tracking-[0.12em]">
                          Mögliche Verzögerung
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Kleine Auswahl an Einkommensnachweisen",
                          "2–5 Werktage",
                          "Schlechte Scans, fehlende Seiten oder Fachbegriffe",
                        ],
                        [
                          "Vollständiges Hypothekendossier",
                          "5–10 Werktage",
                          "Jahresabschlüsse, mehrere Antragsteller und verschiedene Länder",
                        ],
                        [
                          "Notarielle Vollmacht oder Urkunde",
                          "2–7 Werktage",
                          "Abstimmung der genauen Befugnisse und Originalunterlagen",
                        ],
                        [
                          "Apostille oder Legalisation",
                          "Tage bis mehrere Wochen",
                          "Land, Behörde, Postversand und erforderliche Originale",
                        ],
                      ].map((row) => (
                        <tr
                          key={row[0]}
                          className="border-t border-stone-200 even:bg-[#faf7f2]"
                        >
                          <th className="px-6 py-5 font-medium text-[#1e2a3a]">
                            {row[0]}
                          </th>
                          <td className="px-6 py-5 text-stone-600">{row[1]}</td>
                          <td className="px-6 py-5 text-stone-600">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-12 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Einfache oder vereidigte Übersetzung?
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  Übersetzungen durch einen in Spanien zugelassenen traductor jurado
                  haben offiziellen Charakter. Verwenden Sie eine vereidigte Übersetzung,
                  wenn die empfangende spanische Stelle dies verlangt; lassen Sie nicht
                  ohne Grund jedes Bankdokument vereidigt übersetzen.
                </p>
                <h3 className="mt-10 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Ausländische Vollmachten: Apostille und Legalisation
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  Ein außerhalb Spaniens ausgestelltes öffentliches Dokument kann
                  für die Verwendung in Spanien eine Apostille oder diplomatische
                  Legalisation benötigen. Ist das Dokument nicht auf Spanisch, kann
                  zusätzlich eine offizielle Übersetzung verlangt werden. Der Weg
                  hängt von Land, Dokumenttyp und anwendbaren Ausnahmen ab.
                </p>
                <div className="mt-10 border-l-4 border-[#c8a063] bg-[#eee6dc] p-7">
                  <p className="m-0 leading-relaxed text-stone-700">
                    Lassen Sie einen Vollmachtsentwurf zuerst vom spanischen Anwalt
                    oder Notar prüfen und unterschreiben Sie anschließend im Ausland.
                    So vermeiden Sie ein korrekt legalisiertes, aber unbrauchbares Dokument.
                  </p>
                </div>
                <p className="mt-7 text-sm leading-relaxed text-stone-500">
                  Offizielle Informationen: {" "}
                  <SourceLink href={OFFICIAL_SOURCES.swornTranslators}>
                    vereidigte Übersetzer
                  </SourceLink>{" "}
                  und {" "}
                  <SourceLink href={OFFICIAL_SOURCES.legalisation}>
                    Legalisation und Apostille
                  </SourceLink>
                  .
                </p>
              </section>

              <section
                id="angebot"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  VON DER BESICHTIGUNG ZUM VERTRAG
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Angebot, Reservierung und Arras: ein bis zehn Werktage
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Nach einer Einigung folgt häufig zunächst ein Reservierungsdokument
                  und später ein ausführlicherer Privatvertrag, meist contrato de arras
                  genannt. Geschwindigkeit darf nicht auf Kosten klarer Bedingungen gehen.
                </p>
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl bg-white p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9b743d]">
                      RESERVIERUNG
                    </p>
                    <h3 className="mt-4 font-serif text-3xl font-normal text-[#1e2a3a]">
                      Oft 1–3 Werktage
                    </h3>
                    <p className="mt-5 leading-relaxed text-stone-600">
                      Halten Sie fest, welche Immobilie reserviert wird, wie lange sie
                      vom Markt genommen wird, wo das Geld verwahrt wird und wann eine
                      Rückzahlung möglich ist.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-white p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9b743d]">
                      ARRAS ODER PRIVATVERTRAG
                    </p>
                    <h3 className="mt-4 font-serif text-3xl font-normal text-[#1e2a3a]">
                      Oft innerhalb von 5–10 Werktagen
                    </h3>
                    <p className="mt-5 leading-relaxed text-stone-600">
                      Enthält Kaufpreis, Zahlungen, spätesten Termin, Inventar,
                      Belastungen, Bedingungen und Folgen, falls eine Partei nicht erfüllt.
                    </p>
                  </div>
                </div>
                <h3 className="mt-12 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Ein Privatvertrag ist bindend
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  Das Wort „Reservierung“ macht ein Dokument nicht automatisch
                  unverbindlich. Auch der Begriff arras sagt ohne den vollständigen
                  Text nicht genug über die Folgen eines Rücktritts aus. Lassen Sie
                  vor jeder Zahlung prüfen, was Sie genau unterschreiben.
                </p>
                <p className="mt-7 text-sm leading-relaxed text-stone-500">
                  Siehe {" "}
                  <SourceLink href={OFFICIAL_SOURCES.notary}>
                    Consejo General del Notariado — Immobilienkauf
                  </SourceLink>
                  .
                </p>
              </section>

              <section
                id="pruefung"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  RECHTLICHE UND TECHNISCHE PRÜFUNG
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Planen Sie ein bis drei Wochen für einen normalen Fall ein
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Ein unabhängiger Fachmann benötigt ausreichend Zeit, um den
                  rechtlichen Status zu prüfen. Bei einer Wohnung mit klaren
                  Unterlagen kann das schnell gehen. Bei einer freistehenden Villa,
                  ländlichem Grundstück oder umgebauten Immobilie ist meist mehr
                  Untersuchung erforderlich.
                </p>
                <div className="mt-10 rounded-[30px] bg-white p-8 md:p-10">
                  <h3 className="m-0 font-serif text-3xl font-normal text-[#1e2a3a]">
                    Wichtige Prüfungen vor dem Notartermin
                  </h3>
                  <div className="mt-8 grid gap-x-8 gap-y-5 md:grid-cols-2">
                    {[
                      "Wer ist im Registro de la Propiedad als Eigentümer eingetragen?",
                      "Gibt es Hypotheken, Pfändungen, Nutzungsrechte oder sonstige Belastungen?",
                      "Entspricht die registrierte Beschreibung dem tatsächlichen Zustand?",
                      "Stimmen Registro, Catastro und kommunale Daten miteinander überein?",
                      "Sind Erweiterungen, Pool und Nebengebäude genehmigt?",
                      "Sind IBI und weitere lokale Abgaben bezahlt?",
                      "Wurden Comunidad-Schulden und Protokolle der Eigentümerversammlung geprüft?",
                      "Sind Vermietung und Umbau nach den lokalen Regeln möglich?",
                      "Sind Wasser, Strom, Kanalisation und Internet verfügbar?",
                      "Ist eine technische Inspektion für Feuchtigkeit, Dach oder Konstruktion sinnvoll?",
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1e2a3a] text-xs text-white">
                          ✓
                        </span>
                        <p className="m-0 text-sm leading-relaxed text-stone-600">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="mt-12 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Die nota simple ist ein Ausgangspunkt, keine vollständige Due Diligence
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  Die nota simple enthält Informationen zur registrierten Immobilie,
                  zum Eigentümer und zu eingetragenen Rechten. Sie zeigt jedoch nicht
                  automatisch jede städtebauliche, technische oder kommunale Fragestellung.
                </p>
                <div className="mt-10 rounded-2xl border border-[#d9be96] bg-[#fbf4e8] p-7">
                  <p className="m-0 leading-relaxed text-stone-700">
                    <strong className="text-[#1e2a3a]">
                      Mehr Prüfung bedeutet nicht, dass der Kauf scheitert.
                    </strong>{" "}
                    Es bedeutet, dass der Zeitplan an die tatsächlichen Risiken angepasst
                    werden muss. Eine Abweichung zu beheben kann Wochen oder Monate dauern;
                    sie zu ignorieren macht den Kauf nicht sicherer.
                  </p>
                </div>
                <p className="mt-7 text-sm leading-relaxed text-stone-500">
                  Hintergrund zum Register: {" "}
                  <SourceLink href={OFFICIAL_SOURCES.propertyRegister}>
                    Colegio de Registradores
                  </SourceLink>
                  .
                </p>
              </section>

              <section
                id="notar"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  LETZTE PHASE VOR DER SCHLÜSSELÜBERGABE
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  FEIN, notarielle Prüfung und Beurkundung
                </h2>
                <h3 className="mt-10 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Mindestens zehn Kalendertage vor der Hypothekenurkunde
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  Die Bank muss personalisierte Informationen, darunter FEIN und FiAE,
                  mindestens zehn Kalendertage vor Unterzeichnung des Darlehens zur
                  Verfügung stellen. Während der vereinbarten Gültigkeitsdauer ist
                  die FEIN das verbindliche Angebot.
                </p>
                <p className="mt-6 leading-relaxed text-stone-600">
                  Der Notar kontrolliert vorab, ob die Unterlagen rechtzeitig bereitgestellt
                  wurden und der Käufer die Bedingungen versteht. Eine verspätete FEIN
                  verschiebt unmittelbar den frühestmöglichen Termin.
                </p>
                <div className="mt-10 grid gap-5 md:grid-cols-[1fr_1.3fr]">
                  <div className="rounded-3xl bg-[#1e2a3a] p-8 text-white">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#d6b47d]">
                      GESETZLICHE MINDESTFRIST
                    </p>
                    <p className="mt-5 font-serif text-6xl">10 Tage</p>
                    <p className="mt-5 leading-relaxed text-white/75">
                      Ab ordnungsgemäßer Bereitstellung der Hypothekenunterlagen.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-white p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#9b743d]">
                      ZUSÄTZLICHEN PUFFER EINPLANEN
                    </p>
                    <p className="mt-5 leading-relaxed text-stone-600">
                      Notartermine, Änderungen an der FEIN, fehlende Informationen,
                      Übersetzungen oder Probleme bei der Transparenzprüfung können
                      zusätzliche Tage verursachen.
                    </p>
                  </div>
                </div>
                <h3 className="mt-12 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Was passiert am Tag der Beurkundung?
                </h3>
                <ol className="mt-6 space-y-5 p-0">
                  {[
                    "Identität und Vertretungsbefugnis der Unterzeichnenden werden geprüft.",
                    "Die Kaufurkunde wird erläutert und unterzeichnet.",
                    "Bei Finanzierung wird auch die Hypothekenurkunde unterzeichnet.",
                    "Restbetrag und Zahlungsweise werden dokumentiert.",
                    "Der Käufer erhält in der Regel die Schlüssel.",
                    "Die Urkunde wird für Steuerabwicklung und Registrierung eingereicht.",
                  ].map((item, index) => (
                    <li
                      key={item}
                      className="grid grid-cols-[42px_1fr] gap-4 border-t border-stone-300 pt-5"
                    >
                      <span className="text-sm font-semibold text-[#9b743d]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed text-stone-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-7 text-sm leading-relaxed text-stone-500">
                  Gesetzliche Grundlage: {" "}
                  <SourceLink href={OFFICIAL_SOURCES.mortgageLaw}>
                    Ley 5/2019, Artikel 14
                  </SourceLink>
                  .
                </p>
              </section>

              <section
                id="nach-beurkundung"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  MIT DEM SCHLÜSSEL IST ES NICHT VORBEI
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Planen Sie weitere zwei bis sechs Wochen für die administrative Nachbereitung
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Nach der notariellen Beurkundung müssen Steuern abgewickelt, die
                  Urkunde registriert und Verträge umgeschrieben werden.
                </p>
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  {[
                    [
                      "Kaufsteuer",
                      "ITP oder IVA und AJD werden nach den jeweils geltenden regionalen und nationalen Regeln erklärt und bezahlt.",
                    ],
                    [
                      "Registrierung",
                      "Nach Einreichung prüft der Registrador die Urkunde. Das Gesetz nennt grundsätzlich fünfzehn Tage, vorbehaltlich unter anderem von Mängeln oder vorrangigen Urkunden.",
                    ],
                    [
                      "Versorgungsanschlüsse",
                      "Wasser, Strom, Gas, Internet und Wartungsverträge werden auf den Käufer umgestellt.",
                    ],
                    [
                      "Comunidad und lokale Abgaben",
                      "Informieren Sie Verwaltung und Gemeinde und prüfen Sie Lastschriftmandate für IBI und weitere Abgaben.",
                    ],
                    [
                      "Versicherung",
                      "Stellen Sie sicher, dass Gebäude- und Hausratsschutz spätestens mit der Beurkundung beginnt. Eine Bank kann bestimmte Deckungen verlangen.",
                    ],
                    [
                      "Endgültiges Dossier",
                      "Bewahren Sie Urkunde, Steuerbelege, Registerinformationen, Inspektionen, Genehmigungen, Schlüssel und Vertragsdaten zusammen auf.",
                    ],
                  ].map(([title, itemText]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-stone-300 bg-white p-7"
                    >
                      <h3 className="m-0 font-serif text-2xl font-normal text-[#1e2a3a]">
                        {title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-stone-600">
                        {itemText}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-7 text-sm leading-relaxed text-stone-500">
                  Registrierungsfrist: {" "}
                  <SourceLink href={OFFICIAL_SOURCES.mortgageRegisterLaw}>
                    Ley Hipotecaria, Artikel 18
                  </SourceLink>
                  .
                </p>
              </section>

              <section
                id="verzoegerung"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  WO STOCKT DER PROZESS?
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Sieben Gründe, warum ein Kauf länger dauert
                </h2>
                <div className="mt-10">
                  {delayFactors.map((factor, index) => (
                    <div
                      key={factor.title}
                      className="grid gap-4 border-t border-stone-300 py-7 md:grid-cols-[54px_1fr]"
                    >
                      <span className="font-serif text-2xl text-[#c39a5d]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="m-0 font-serif text-3xl font-normal text-[#1e2a3a]">
                          {factor.title}
                        </h3>
                        <p className="mt-4 leading-relaxed text-stone-600">
                          {factor.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 rounded-[30px] bg-[#eee6dc] p-8 md:p-10">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9b743d]">
                    DER BESTE WEG, ZEIT ZU GEWINNEN
                  </p>
                  <h3 className="mt-5 font-serif text-4xl font-normal text-[#1e2a3a]">
                    Arbeiten Sie voraus, nicht oberflächlicher.
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone-600">
                    Beantragen Sie die NIE früh, reichen Sie ein vollständiges Dossier
                    ein, lassen Sie vor Zahlungen rechtlich prüfen und führen Sie Bank-
                    und Objektprüfungen parallel durch. Überspringen Sie keine wesentliche
                    Kontrolle, nur um eine künstliche Frist einzuhalten.
                  </p>
                </div>
              </section>

              <section
                id="beispiele"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  DREI PRAKTISCHE SZENARIEN
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Beispiel-Zeitpläne für unterschiedliche Käufer
                </h2>
                <div className="mt-12 space-y-8">
                  <div className="rounded-[30px] bg-white p-8 md:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.23em] text-[#9b743d]">
                          SZENARIO 1
                        </p>
                        <h3 className="mt-3 font-serif text-4xl font-normal text-[#1e2a3a]">
                          Barkauf mit klarer Aktenlage
                        </h3>
                      </div>
                      <span className="rounded-full bg-[#f6f1ea] px-5 py-3 text-sm font-medium text-[#9b743d]">
                        ca. 5–7 Wochen
                      </span>
                    </div>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      {[
                        "Woche 0: Angebot, Reservierung und Unterlagen anfordern.",
                        "Woche 1–2: rechtliche Prüfung und technische Inspektion.",
                        "Woche 2: Arras nach zufriedenstellender erster Prüfung.",
                        "Woche 3–5: Zahlungsplanung und Notartermin vorbereiten.",
                        "Woche 5–7: Beurkundung, Schlüssel und steuerliche Abwicklung.",
                      ].map((item) => (
                        <p
                          key={item}
                          className="m-0 rounded-2xl bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-600"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[30px] bg-white p-8 md:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.23em] text-[#9b743d]">
                          SZENARIO 2
                        </p>
                        <h3 className="mt-3 font-serif text-4xl font-normal text-[#1e2a3a]">
                          Nichtresident mit spanischer Hypothek
                        </h3>
                      </div>
                      <span className="rounded-full bg-[#f6f1ea] px-5 py-3 text-sm font-medium text-[#9b743d]">
                        ca. 9–13 Wochen
                      </span>
                    </div>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      {[
                        "Vor Woche 0: NIE und Finanzunterlagen vorbereitet.",
                        "Woche 0: Angebot und Reservierung mit passenden Bedingungen.",
                        "Woche 1–3: Due Diligence und formeller Hypothekenantrag.",
                        "Woche 2–5: Bewertung, Bankrückfragen und Kreditprüfung.",
                        "Woche 5–8: endgültige Genehmigung und FEIN.",
                        "Woche 8–10+: gesetzliche Frist, Notar und Unterzeichnung.",
                      ].map((item) => (
                        <p
                          key={item}
                          className="m-0 rounded-2xl bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-600"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[30px] bg-[#1e2a3a] p-8 text-white md:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.23em] text-[#d6b47d]">
                          SZENARIO 3
                        </p>
                        <h3 className="mt-3 font-serif text-4xl font-normal text-white">
                          Freistehende Immobilie mit Abweichungen
                        </h3>
                      </div>
                      <span className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-[#e7c898]">
                        12–20 Wochen oder länger
                      </span>
                    </div>
                    <p className="mt-8 leading-relaxed text-white/80">
                      Zusätzliche kommunale Informationen, Genehmigungsprüfung,
                      Abgleich von Grundbuch und Kataster sowie möglicherweise ein
                      Architektenbericht sind erforderlich. Muss der Verkäufer zunächst
                      eine Abweichung beheben oder legalisieren, ist ein fester Termin
                      häufig erst später verlässlich planbar.
                    </p>
                  </div>
                </div>
              </section>

              <section className="border-b border-stone-300 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  FAZIT
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Planen Sie acht bis vierzehn Wochen ein, wenn Sie Finanzierung benötigen
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Ohne Hypothek kann ein rechtlich klarer Kauf häufig innerhalb von
                  vier bis acht Wochen abgeschlossen werden. Mit einer spanischen
                  Hypothek sind acht bis vierzehn Wochen vernünftiger. Starten Sie
                  NIE, finanzielle Vorbereitung und Übersetzungen, bevor Sie einen
                  bindenden Vertrag mit kurzer Frist unterschreiben.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Die richtige Frist ist nicht die kürzeste, die jemand nennt, sondern
                  diejenige, in der Bank, Rechtsberater, Gutachter, Übersetzer und Notar
                  sorgfältig arbeiten können.
                </p>
                <div className="mt-12 grid items-center gap-8 rounded-[34px] bg-[#1e2a3a] p-8 text-white md:grid-cols-[1.35fr_0.65fr] md:p-12">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d6b47d]">
                      PERSÖNLICHE KAUFBEGLEITUNG
                    </p>
                    <h2 className="mt-5 font-serif text-4xl leading-tight text-white md:text-5xl">
                      Mehr Sicherheit. Ein verlässlicher Ansprechpartner.
                    </h2>
                    <p className="mt-6 leading-relaxed text-white/80">
                      Nordic Move Spain hilft dabei, Vorbereitung, Objektauswahl,
                      Dokumentenfluss und die beteiligten unabhängigen Fachleute
                      aufeinander abzustimmen.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <a
                      href={ASSESSMENT_URL}
                      className="rounded-full bg-[#c8a063] px-7 py-4 text-sm font-medium text-white no-underline transition hover:bg-[#b1874c]"
                    >
                      Relocation Assessment starten
                    </a>
                    <a
                      href={GUIDES_URL}
                      className="text-sm font-medium text-white underline decoration-[#c8a063] underline-offset-4"
                    >
                      Alle Ratgeber ansehen →
                    </a>
                  </div>
                </div>
              </section>

              <section className="border-b border-stone-300 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  MEHR ERFAHREN
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Verwandte Ratgeber
                </h2>
                <div className="mt-9 grid gap-4 md:grid-cols-2">
                  {[
                    ["Immobilien in Spanien kaufen", "Der komplette Kaufprozess Schritt für Schritt."],
                    ["Kosten und neue Hypothekenregeln", "Finanzierung, Bewertung und Bankunterlagen."],
                    ["ITP, IVA und AJD erklärt", "Welche Kaufsteuer gilt für Ihre Immobilie?"],
                    ["Gesamtkosten beim Immobilienkauf", "Berechnen Sie, wie viel Eigenkapital tatsächlich benötigt wird."],
                    ["Häufige Fehler beim Immobilienkauf", "Vermeiden Sie Zeitverlust und teure Überraschungen."],
                    ["Spanische Regeln, die anders funktionieren", "Wichtige Unterschiede zu Erwartungen aus Deutschland und Nordeuropa."],
                  ].map(([title, itemText]) => (
                    <a
                      key={title}
                      href={GUIDES_URL}
                      className="group rounded-3xl border border-stone-300 bg-white p-7 no-underline transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <h3 className="m-0 font-serif text-2xl font-normal text-[#1e2a3a]">
                        {title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-stone-600">
                        {itemText}
                      </p>
                      <span className="mt-6 inline-block text-xs font-medium uppercase tracking-[0.18em] text-[#9b743d]">
                        Zu den Ratgebern →
                      </span>
                    </a>
                  ))}
                </div>
              </section>

              <section
                id="faq"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  HÄUFIG GESTELLTE FRAGEN
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  FAQ zur Dauer eines Immobilienkaufs in Spanien
                </h2>
                <div className="mt-10">
                  {faqItems.map((item) => (
                    <details
                      key={item.question}
                      className="group border-t border-stone-300"
                    >
                      <summary className="cursor-pointer list-none py-6 pr-10 font-medium text-[#1e2a3a] marker:hidden">
                        <span className="flex items-center justify-between gap-5">
                          <span>{item.question}</span>
                          <span
                            aria-hidden="true"
                            className="text-2xl font-light text-[#9b743d] transition group-open:rotate-45"
                          >
                            +
                          </span>
                        </span>
                      </summary>
                      <p className="max-w-3xl pb-7 leading-relaxed text-stone-600">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                  <div className="border-t border-stone-300" />
                </div>
              </section>

              <section className="pt-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  QUELLEN UND HINWEISE
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Offizielle Quellen zu gesetzlichen Mindestfristen
                </h2>
                <p className="mt-7 leading-relaxed text-stone-600">
                  Gesetzliche und verfahrensbezogene Angaben wurden anhand offizieller
                  spanischer Quellen geprüft. Die übrigen Zeitangaben sind praktische
                  Richtwerte und unterscheiden sich je nach Bank, Region, Gemeinde,
                  Notar und Einzelfall.
                </p>
                <div className="mt-8 grid gap-3 text-sm md:grid-cols-2">
                  <SourceLink href={OFFICIAL_SOURCES.nie}>
                    Innenministerium — NIE
                  </SourceLink>
                  <SourceLink href={OFFICIAL_SOURCES.mortgageLaw}>
                    BOE — Ley 5/2019 Immobilienkredit
                  </SourceLink>
                  <SourceLink href={OFFICIAL_SOURCES.mortgageProcess}>
                    Banco de España — Hypothekenprozess
                  </SourceLink>
                  <SourceLink href={OFFICIAL_SOURCES.valuation}>
                    Banco de España — Immobilienbewertung
                  </SourceLink>
                  <SourceLink href={OFFICIAL_SOURCES.mortgageRegisterLaw}>
                    BOE — Ley Hipotecaria
                  </SourceLink>
                  <SourceLink href={OFFICIAL_SOURCES.notary}>
                    Consejo General del Notariado
                  </SourceLink>
                  <SourceLink href={OFFICIAL_SOURCES.swornTranslators}>
                    Außenministerium — Übersetzungen
                  </SourceLink>
                  <SourceLink href={OFFICIAL_SOURCES.legalisation}>
                    Außenministerium — Apostille
                  </SourceLink>
                </div>
                <p className="mt-10 rounded-2xl bg-[#eee6dc] p-6 text-sm leading-relaxed text-stone-600">
                  <strong className="text-[#1e2a3a]">Haftungsausschluss:</strong>{" "}
                  Dieser Artikel dient der allgemeinen Information und ist keine
                  Rechts-, Steuer-, Finanz-, Notar- oder Hypothekenberatung. Lassen
                  Sie Immobilie, Verträge, Finanzierung und Unterlagen vor der
                  Unterzeichnung durch qualifizierte unabhängige Fachleute prüfen.
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}