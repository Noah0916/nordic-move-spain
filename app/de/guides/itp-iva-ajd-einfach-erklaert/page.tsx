import type { Metadata } from "next";
import type { ReactNode } from "react";

/**
 * Legen Sie diese Datei hier ab:
 * app/de/guides/itp-iva-ajd-eenvoudig-uitgelegd/page.tsx
 *
 * Prüfen Sie die folgenden internen Routen vor der Veröffentlichung.
 */
const PAGE_URL = "/de/guides/itp-iva-ajd-eenvoudig-uitgelegd";
const CONTACT_URL = "/de/contact";
const SERVICES_URL = "/de/services";
const GUIDES_URL = "/de/guides";
const BUYING_GUIDE_URL = "/de/guides/buying-property-spain";
const COSTS_GUIDE_URL = "/de/guides/totale-kosten-aankoop";

export const metadata: Metadata = {
  title: "ITP, IVA und AJD in Spanien erklärt (2026) | Nordic Move Spain",
  description:
    "ITP, IVA und AJD beim Immobilienkauf in Spanien: aktuelle Steuersätze für die Costa Blanca und Valencia im Jahr 2026, Rechenbeispiele, Ausnahmen und wichtige Hinweise.",
  keywords: [
    "ITP Spanien 2026",
    "IVA Hauskauf Spanien",
    "AJD Spanien 2026",
    "Steuern Hauskauf Spanien",
    "Kaufnebenkosten Spanien",
    "Grunderwerbsteuer Spanien",
    "Neubau Steuern Spanien",
    "ITP Valencia 2026",
    "ITP Costa Blanca",
    "AJD Valencia 2026",
    "Haus kaufen Costa Blanca Steuern",
    "Nordic Move Spain",
  ],
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "Nordic Move Spain",
    title: "ITP, IVA und AJD beim Hauskauf in Spanien — Erklärung 2026",
    description:
      "Welche Kaufsteuer zahlen Sie bei Bestandsimmobilien und Neubauten? Einschließlich aktueller Steuersätze in der Comunitat Valenciana ab dem 1. Juni 2026.",
    publishedTime: "2026-07-23T00:00:00.000Z",
    modifiedTime: "2026-07-23T00:00:00.000Z",
    authors: ["Nordic Move Spain"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITP, IVA und AJD in Spanien erklärt (2026)",
    description:
      "Aktuelle Steuersätze, verständliche Beispiele und praktische Hinweise für Immobilienkäufer an der Costa Blanca.",
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

const officialSources = {
  valencianPropertyTax:
    "https://atv.gva.es/es/he-comprat-un-inmoble",
  valencianLaw:
    "https://www.boe.es/buscar/act.php?id=BOE-A-1998-8202",
  spanishTaxAgency:
    "https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
  referenceValue:
    "https://atv.gva.es/es/valor-de-referencia",
  model600:
    "https://atv.gva.es/es/tributos-servicios-sin-c-confeccion600",
  mortgageAjd:
    "https://www.boe.es/buscar/doc.php?id=BOE-A-2018-15344",
};

const faqItems = [
  {
    question: "Zahle ich beim Kauf einer Immobilie in Spanien sowohl ITP als auch IVA?",
    answer:
      "Normalerweise nicht. Bei einer Bestandsimmobilie zahlt der Käufer in der Regel ITP. Bei der Erstlieferung einer Neubauimmobilie durch den Bauträger zahlt der Käufer in der Regel IVA und zusätzlich AJD auf die notarielle Kaufurkunde. Entscheidend ist die rechtliche Einordnung der Transaktion.",
  },
  {
    question: "Wie hoch ist die ITP in der Comunitat Valenciana im Jahr 2026?",
    answer:
      "Für steuerpflichtige Transaktionen ab dem 1. Juni 2026 gilt in der Comunitat Valenciana grundsätzlich ein allgemeiner ITP-Satz von 9%. Liegt der Wert der übertragenen Immobilie über €1.000.000, gelten grundsätzlich 11%. Für bestimmte Käufer und Immobilien gibt es ermäßigte Sätze mit strengen Voraussetzungen.",
  },
  {
    question: "Wie viel IVA zahle ich auf eine Neubauimmobilie in Spanien?",
    answer:
      "Die Erstlieferung einer regulären Neubauimmobilie durch den Bauträger unterliegt in der Regel 10% IVA. Für bestimmte Sozialwohnungen können 4% gelten. Der Wohnungssatz kann auch für höchstens zwei Stellplätze und ein Nebengebäude gelten, wenn diese zusammen mit der Wohnung und im selben Gebäude oder Komplex geliefert werden.",
  },
  {
    question: "Wie hoch ist AJD in Valencia im Jahr 2026?",
    answer:
      "In der Comunitat Valenciana gilt für viele notarielle Immobilienurkunden ab dem 1. Juni 2026 ein allgemeiner AJD-Satz von 1,4%. Für eine Urkunde, die den Kauf eines steuerlich qualifizierenden Hauptwohnsitzes dokumentiert, können 0,1% gelten. Andere besondere Situationen können einem Satz von 2% unterliegen.",
  },
  {
    question: "Wird ITP auf den Kaufpreis oder den valor de referencia berechnet?",
    answer:
      "Bei Immobilien ist der katasterrechtliche valor de referencia wichtig. Liegt der vereinbarte Preis oder der angegebene Wert höher, wird grundsätzlich der höchste relevante Wert als Steuerbemessungsgrundlage verwendet. Gibt es keinen anwendbaren Referenzwert, gelten andere gesetzliche Bewertungsregeln.",
  },
  {
    question: "Wann muss Modelo 600 eingereicht werden?",
    answer:
      "In der Comunitat Valenciana beträgt die allgemeine Erklärungsfrist für diese Transaktionen einen Monat ab dem Datum, an dem der steuerpflichtige Vorgang oder Vertrag zustande kommt. Bei mehreren Käufern kann für jeden Steuerpflichtigen eine separate Erklärung erforderlich sein.",
  },
  {
    question: "Zahlt der Käufer AJD auf die Hypothek?",
    answer:
      "Bei einer Hypothekenurkunde ist seit der Gesetzesänderung von 2018 der Kreditgeber für die AJD auf die Hypothek steuerpflichtig. Davon unabhängig kann der Käufer beim Erwerb einer Neubauimmobilie AJD auf die Kaufurkunde schulden.",
  },
  {
    question: "Sind ITP, IVA und AJD alle zusätzlichen Kaufnebenkosten?",
    answer:
      "Nein. Zusätzlich zu den Steuern können unter anderem Notar-, Kataster-, Grundbuch-, Rechts-, Technik-, Bank- und Übersetzungskosten entstehen. Auch Renovierung, Anschlüsse, Versicherungen und kommunale Abgaben können relevant sein. Lassen Sie deshalb vor der Unterzeichnung eine vollständige Kostenschätzung erstellen.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ITP, IVA und AJD in Spanien erklärt: Steuern beim Immobilienkauf 2026",
  description:
    "Ausführliche Erklärung zu ITP, IVA und AJD beim Immobilienkauf in Spanien mit aktuellen Steuersätzen für die Comunitat Valenciana im Jahr 2026.",
  inLanguage: "de-DE",
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  author: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "/de",
  },
  publisher: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "/de",
  },
  about: [
    "Impuesto sobre Transmisiones Patrimoniales",
    "Impuesto sobre el Valor Añadido",
    "Actos Jurídicos Documentados",
    "Immobilienkauf in Spanien",
    "Comunitat Valenciana",
    "Costa Blanca",
  ],
  citation: Object.values(officialSources),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "/de",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ratgeber",
      item: GUIDES_URL,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ITP, IVA und AJD erklärt",
      item: PAGE_URL,
    },
  ],
};

const summaryCards = [
  {
    abbreviation: "ITP",
    title: "Bestandsimmobilie",
    rate: "9%",
    text: "Allgemeiner Satz in der Comunitat Valenciana ab dem 1. Juni 2026. Über €1 Million gelten grundsätzlich 11%.",
  },
  {
    abbreviation: "IVA",
    title: "Regulärer Neubau",
    rate: "10%",
    text: "In der Regel auf die Erstlieferung einer Immobilie durch den Bauträger.",
  },
  {
    abbreviation: "AJD",
    title: "Notarielle Urkunde",
    rate: "1,4%",
    text: "Allgemeiner Satz in Valencia ab dem 1. Juni 2026. Für einen steuerlich qualifizierenden Hauptwohnsitz können 0,1% gelten.",
  },
];

const usedHomeExamples = [
  {
    price: "€250.000",
    rate: "9%",
    tax: "€22.500",
    note: "Allgemeiner ITP-Satz",
  },
  {
    price: "€400.000",
    rate: "9%",
    tax: "€36.000",
    note: "Allgemeiner ITP-Satz",
  },
  {
    price: "€750.000",
    rate: "9%",
    tax: "€67.500",
    note: "Allgemeiner ITP-Satz",
  },
  {
    price: "€1.200.000",
    rate: "11%",
    tax: "€132.000",
    note: "Wert über €1 Million",
  },
];

const newBuildExamples = [
  {
    price: "€250.000",
    iva: "€25.000",
    ajdSecondHome: "€3.500",
    totalSecondHome: "€28.500",
    ajdMainHome: "€250",
  },
  {
    price: "€400.000",
    iva: "€40.000",
    ajdSecondHome: "€5.600",
    totalSecondHome: "€45.600",
    ajdMainHome: "€400",
  },
  {
    price: "€600.000",
    iva: "€60.000",
    ajdSecondHome: "€8.400",
    totalSecondHome: "€68.400",
    ajdMainHome: "€600",
  },
];

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

function SourceLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <main className="tax-page">
        <article>
          <header className="hero">
            <div className="hero-inner">
              <nav className="breadcrumbs" aria-label="Brotkrümelnavigation">
                <a href="/de">Startseite</a>
                <span aria-hidden="true">/</span>
                <a href={GUIDES_URL}>Ratgeber</a>
                <span aria-hidden="true">/</span>
                <span>ITP, IVA und AJD</span>
              </nav>

              <div className="hero-grid">
                <div className="hero-copy">
                  <p className="eyebrow">
                    STEUERN BEIM IMMOBILIENKAUF IN SPANIEN
                  </p>
                  <h1>ITP, IVA und AJD erklärt: Was zahlen Sie 2026?</h1>
                  <p className="lead">
                    Beim Kauf einer Immobilie in Spanien bestimmt die Art der
                    Transaktion, welche Steuer Sie zahlen. Bei einer
                    Bestandsimmobilie ist das meist ITP. Bei regulären Neubauten
                    handelt es sich in der Regel um IVA plus AJD. In diesem
                    Ratgeber erklärt Nordic Move Spain die Unterschiede, die
                    aktuellen valencianischen Steuersätze, die
                    Bemessungsgrundlage und die wichtigsten Fallstricke verständlich.
                  </p>

                  <div className="author-row">
                    <div className="author-mark" aria-hidden="true">
                      N
                    </div>
                    <div>
                      <strong>Nordic Move Spain</strong>
                      <span>
                        Kaufbegleitung Costa Blanca · Aktualisiert am 23. Juli
                        2026
                      </span>
                    </div>
                  </div>
                </div>

                <aside className="hero-card" aria-label="Steuern auf einen Blick">
                  <p className="mini-label">AUF EINEN BLICK</p>
                  <h2>Welche Steuer gehört zu welchem Kauf?</h2>
                  <div className="decision-list">
                    <div>
                      <span>01</span>
                      <p>
                        <strong>Bestandsimmobilie</strong>
                        Meist ITP, ohne IVA auf den Kaufpreis.
                      </p>
                    </div>
                    <div>
                      <span>02</span>
                      <p>
                        <strong>Neubau vom Bauträger</strong>
                        Meist 10% IVA plus AJD auf die notarielle Kaufurkunde.
                      </p>
                    </div>
                    <div>
                      <span>03</span>
                      <p>
                        <strong>Hypothekenurkunde</strong>
                        Die AJD auf die Hypothek wird grundsätzlich vom
                        Kreditgeber getragen.
                      </p>
                    </div>
                  </div>
                  <a className="text-link" href="#rechenbeispiele">
                    Rechenbeispiele ansehen →
                  </a>
                </aside>
              </div>
            </div>
          </header>

          <section className="quick-summary" aria-label="Aktuelle Steuersätze 2026">
            <div className="section-width card-grid">
              {summaryCards.map((card) => (
                <div className="summary-card" key={card.abbreviation}>
                  <div className="summary-top">
                    <span>{card.abbreviation}</span>
                    <strong>{card.rate}</strong>
                  </div>
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="article-layout section-width">
            <aside className="toc">
              <p className="toc-title">INHALT</p>
              <ol>
                <li>
                  <a href="#unterschied">ITP, IVA und AJD: der Unterschied</a>
                </li>
                <li>
                  <a href="#itp">ITP bei Bestandsimmobilien</a>
                </li>
                <li>
                  <a href="#bemessungsgrundlage">Kaufpreis und valor de referencia</a>
                </li>
                <li>
                  <a href="#iva">IVA bei Neubauten</a>
                </li>
                <li>
                  <a href="#ajd">AJD auf die Kaufurkunde</a>
                </li>
                <li>
                  <a href="#rechenbeispiele">Rechenbeispiele</a>
                </li>
                <li>
                  <a href="#ermaessigte-saetze">Ermäßigte Sätze</a>
                </li>
                <li>
                  <a href="#erklaerung">Erklärung und Zahlung</a>
                </li>
                <li>
                  <a href="#fehler">Häufige Fehler</a>
                </li>
                <li>
                  <a href="#faq">Häufig gestellte Fragen</a>
                </li>
              </ol>

              <div className="toc-contact">
                <p>
                  Möchten Sie vor der Unterzeichnung wissen, welche Steuern und gesamten
                  Kaufnebenkosten zu Ihrem Fall gehören?
                </p>
                <a href={CONTACT_URL}>Kennenlerngespräch vereinbaren</a>
              </div>
            </aside>

            <div className="article-content">
              <section id="unterschied" className="content-section first-section">
                <p className="section-kicker">DIE GRUNDLAGE</p>
                <h2>ITP, IVA und AJD sind drei unterschiedliche Steuern</h2>
                <p>
                  Die Abkürzungen werden beim Immobilienkauf in Spanien häufig
                  miteinander verwechselt. Sie haben jedoch unterschiedliche
                  Funktionen. Entscheidend ist vor allem, ob Sie eine
                  Bestandsimmobilie kaufen oder eine Immobilie, die steuerlich
                  als Erstlieferung durch ein Unternehmen oder einen Bauträger
                  gilt.
                </p>

                <div className="definition-grid">
                  <div>
                    <span>ITP</span>
                    <h3>Impuesto sobre Transmisiones Patrimoniales</h3>
                    <p>
                      Grunderwerbsteuer, die der Käufer in der Regel beim
                      Kauf einer Bestandsimmobilie zahlt. Der Satz wird
                      weitgehend von der autonomen Region festgelegt.
                    </p>
                  </div>
                  <div>
                    <span>IVA</span>
                    <h3>Impuesto sobre el Valor Añadido</h3>
                    <p>
                      Spanische Mehrwertsteuer. Bei der Erstlieferung einer regulären
                      Neubauimmobilie durch den Bauträger fallen in der Regel 10% IVA
                      an.
                    </p>
                  </div>
                  <div>
                    <span>AJD</span>
                    <h3>Actos Jurídicos Documentados</h3>
                    <p>
                      Steuer auf bestimmte notarielle Dokumente. Bei
                      Neubauten wird AJD in der Regel zusätzlich zur IVA auf die
                      notarielle Kaufurkunde erhoben.
                    </p>
                  </div>
                </div>

                <div className="key-answer">
                  <strong>Praktische Grundregel</strong>
                  <p>
                    Bestandsimmobilie: meist ITP. Regulärer Neubau vom
                    Bauträger: meist IVA plus AJD. Die konkrete Urkunde,
                    der Verkäufer, die frühere Nutzung und die rechtliche Struktur
                    bestimmen letztlich die steuerliche Behandlung.
                  </p>
                </div>
              </section>

              <section id="itp" className="content-section">
                <p className="section-kicker">BESTANDSIMMOBILIEN</p>
                <h2>ITP in der Comunitat Valenciana ab dem 1. Juni 2026</h2>
                <p>
                  Für Immobilien an der Costa Blanca — darunter Objekte in den
                  Provinzen Alicante und Valencia — ist die valencianische
                  Regelung maßgeblich. Für steuerpflichtige Vorgänge ab dem{" "}
                  <strong>1. Juni 2026</strong> beträgt der allgemeine ITP-Satz
                  für Immobilien <strong>9%</strong>.
                </p>
                <p>
                  Liegt der Wert der übertragenen Immobilie oder des Rechts über{" "}
                  <strong>€1.000.000</strong>, gilt grundsätzlich ein Satz
                  von <strong>11%</strong>. Dies ist kein Stufentarif, bei dem nur
                  der Anteil über einer Million mit 11% besteuert wird: Die
                  anwendbare gesetzliche Einordnung muss für die gesamte
                  Transaktion beurteilt werden.
                </p>

                <div className="rate-banner">
                  <div>
                    <span>ALLGEMEINER SATZ</span>
                    <strong>9%</strong>
                    <small>ab 1. Juni 2026</small>
                  </div>
                  <div>
                    <span>WERT ÜBER</span>
                    <strong>€1 mln</strong>
                    <small>grundsätzlich 11% ITP</small>
                  </div>
                </div>

                <p>
                  Das Datum des steuerpflichtigen Vorgangs ist wichtig. Bei
                  Gesetzesänderungen kann eine Urkunde, die vor oder nach dem Inkrafttreten
                  beurkundet wird, einem anderen Satz unterliegen. Lassen Sie daher
                  nicht nur den Reservierungsvertrag, sondern auch den geplanten
                  Beurkundungstermin steuerlich prüfen.
                </p>

                <p className="source-note">
                  Offizielle Quelle:{" "}
                  <SourceLink href={officialSources.valencianPropertyTax}>
                    Agencia Tributaria Valenciana — Immobilienkauf
                  </SourceLink>
                  .
                </p>
              </section>

              <section id="bemessungsgrundlage" className="content-section">
                <p className="section-kicker">STEUERBEMESSUNGSGRUNDLAGE</p>
                <h2>
                  ITP wird nicht immer einfach auf den vereinbarten Kaufpreis
                  berechnet
                </h2>
                <p>
                  Bei einer Bestandsimmobilie betrachtet die Steuerbehörde nicht nur
                  den Betrag in der Kaufurkunde. Der{" "}
                  <em>valor de referencia</em> des spanischen Katasters kann als
                  steuerliche Mindestbemessungsgrundlage dienen.
                </p>

                <div className="formula">
                  <span>VEREINFACHTE GRUNDREGEL</span>
                  <strong>
                    ITP-Bemessungsgrundlage = der höchste relevante Wert aus Kaufpreis,
                    angegebenem Wert und valor de referencia
                  </strong>
                </div>

                <p>
                  Steht eine Immobilie mit €300.000 in der Urkunde, beträgt der
                  anwendbare Referenzwert jedoch €335.000, kann die ITP
                  grundsätzlich auf €335.000 berechnet werden. Ist der Kaufpreis höher
                  als der Referenzwert, ist in der Regel der höhere Kaufpreis
                  maßgeblich.
                </p>
                <p>
                  Gibt es für die Immobilie keinen zertifizierten
                  Referenzwert, gelten die gesetzlichen Alternativen,
                  darunter der angegebene Wert, der vereinbarte Preis und
                  der Marktwert. Ein niedriger Kaufpreis bedeutet daher nicht automatisch
                  eine ebenso niedrige Steuerbemessungsgrundlage.
                </p>

                <div className="warning">
                  <div aria-hidden="true">!</div>
                  <p>
                    <strong>Prüfen Sie den valor de referencia vor dem Kauf.</strong>
                    Ein Unterschied zwischen Angebotspreis, Kaufpreis und steuerlichem
                    Referenzwert kann Ihr Budget erheblich verändern.
                    Lassen Sie auch prüfen, ob der Referenzwert bei einem
                    abweichenden Zustand, einer illegalen Erweiterung oder einer besonderen
                    Lage anfechtbar ist.
                  </p>
                </div>

                <p className="source-note">
                  Hintergrund:{" "}
                  <SourceLink href={officialSources.referenceValue}>
                    Agencia Tributaria Valenciana — valor de referencia
                  </SourceLink>
                  .
                </p>
              </section>

              <section id="iva" className="content-section">
                <p className="section-kicker">NEUBAU</p>
                <h2>Wann zahlen Sie 10% IVA auf eine Immobilie?</h2>
                <p>
                  Eine Immobilie gilt umsatzsteuerlich nicht allein aufgrund ihres
                  Baujahrs als „neu“. Entscheidend ist die steuerliche{" "}
                  <strong>Erstlieferung</strong>. Der Verkauf einer
                  fertiggestellten Immobilie durch den Bauträger unterliegt in der Regel
                  IVA, wenn es sich um diese Erstlieferung handelt.
                </p>
                <p>
                  Für eine reguläre Immobilie gelten 2026 in der Regel{" "}
                  <strong>10% IVA</strong>. Für bestimmte offiziell geschützte
                  Immobilien mit Sonderstatus oder öffentlicher Förderung können{" "}
                  <strong>4%</strong> gelten.
                </p>

                <div className="fact-cards">
                  <div>
                    <span>10%</span>
                    <h3>Reguläre Immobilie</h3>
                    <p>
                      Üblicher Satz für die Erstlieferung einer
                      Immobilie durch den Bauträger.
                    </p>
                  </div>
                  <div>
                    <span>4%</span>
                    <h3>Bestimmter sozialer Wohnungsbau</h3>
                    <p>
                      Nur bei den gesetzlich definierten geschützten Immobilien;
                      nicht bei regulären gewerblichen Neubauten.
                    </p>
                  </div>
                  <div>
                    <span>2 + 1</span>
                    <h3>Garagen und Nebengebäude</h3>
                    <p>
                      Der Wohnungssatz kann höchstens zwei Garagen und ein
                      gemeinsam geliefertes Nebengebäude umfassen, wenn die
                      Voraussetzungen erfüllt sind.
                    </p>
                  </div>
                </div>

                <h3>Wann gilt eine Immobilie steuerlich nicht mehr als „neu“?</h3>
                <p>
                  Die spanische Steuerbehörde beschreibt unter anderem die Situation,
                  in der ein Bauträger eine fertiggestellte Immobilie zwei
                  Jahre oder länger ununterbrochen an Dritte vermietet hat. Bei
                  einem späteren Verkauf an einen anderen Käufer kann dann eine
                  zweite Lieferung vorliegen, wodurch sich die Behandlung
                  von IVA zu ITP verschieben kann. Wird die Immobilie dagegen vom bisherigen
                  Mieter gekauft, kann das Ergebnis anders sein.
                </p>
                <p>
                  Lassen Sie bei schlüsselfertigen Projekten, Weiterverkauf durch eine
                  Gesellschaft, Kauf vom Plan und langfristig vermieteten Neubauten
                  ausdrücklich festhalten, warum IVA oder ITP angewendet wird.
                </p>

                <p className="source-note">
                  Offizielle Erläuterung:{" "}
                  <SourceLink href={officialSources.spanishTaxAgency}>
                    Agencia Tributaria — IVA oder ITP beim Immobilienkauf
                  </SourceLink>
                  .
                </p>
              </section>

              <section id="ajd" className="content-section">
                <p className="section-kicker">NOTARIELLE URKUNDE</p>
                <h2>AJD: die Steuer, die bei Neubauten häufig zusätzlich zur IVA anfällt</h2>
                <p>
                  AJD ist keine zweite Mehrwertsteuer, sondern eine Steuer auf bestimmte
                  notarielle Dokumente, die einen bewertbaren Vorgang
                  festhalten und in ein öffentliches Register
                  eingetragen werden können. Deshalb fällt AJD beim Neubaukauf häufig
                  zusätzlich zur IVA an.
                </p>

                <div className="ajd-grid">
                  <div className="ajd-main">
                    <p>Allgemeiner AJD-Satz ab 1. Juni 2026</p>
                    <strong>1,4%</strong>
                    <span>
                      zum Beispiel bei einem Zweitwohnsitz oder einer Ferienimmobilie,
                      sofern kein besonderer Satz gilt
                    </span>
                  </div>
                  <div>
                    <p>Steuerlicher Hauptwohnsitz</p>
                    <strong>0,1%</strong>
                    <span>
                      bei Erstausfertigungen von Urkunden, die den Kauf des
                      eigenen Hauptwohnsitzes dokumentieren
                    </span>
                  </div>
                  <div>
                    <p>Besondere Fälle</p>
                    <strong>2%</strong>
                    <span>
                      unter anderem bei bestimmten Immobilientransaktionen, bei denen auf
                      eine IVA-Befreiung verzichtet wird
                    </span>
                  </div>
                </div>

                <p>
                  Der ermäßigte Satz von 0,1% gilt nicht automatisch,
                  nur weil Sie selbst in der Immobilie wohnen möchten. Der
                  spanische steuerliche Begriff <em>vivienda habitual</em> kent
                  Voraussetzungen hinsichtlich tatsächlicher Nutzung und Dauerhaftigkeit.
                  Eine Ferienimmobilie oder ein Zweitwohnsitz fällt normalerweise
                  nicht darunter.
                </p>

                <h3>AJD auf die Hypothek ist etwas anderes</h3>
                <p>
                  Bei einer Hypothekenurkunde ist seit der nationalen Gesetzesänderung von
                  2018 der Kreditgeber für die AJD
                  auf die Hypothek steuerpflichtig. Das bedeutet nicht, dass alle AJD für den Käufer
                  entfällt. Bei Neubauten kann der Käufer weiterhin AJD auf die
                  separate Kaufurkunde schulden.
                </p>

                <p className="source-note">
                  Steuersätze:{" "}
                  <SourceLink href={officialSources.valencianLaw}>
                    konsolidiertes valencianisches Steuergesetz, Artikel 13 und
                    14
                  </SourceLink>
                  . Hypothekenurkunde:{" "}
                  <SourceLink href={officialSources.mortgageAjd}>
                    Real Decreto-ley 17/2018
                  </SourceLink>
                  .
                </p>
              </section>

              <section id="rechenbeispiele" className="content-section">
                <p className="section-kicker">RECHENBEISPIELE</p>
                <h2>Was bedeuten die Steuersätze konkret für Ihr Budget?</h2>
                <p>
                  Die folgenden Beträge sind vereinfachte Beispiele für
                  Immobilien in der Comunitat Valenciana bei einer Urkunde ab dem 1. Juni
                  2026. Sie gehen davon aus, dass der genannte Kaufpreis auch die
                  relevante Steuerbemessungsgrundlage ist und keine Ermäßigung,
                  Befreiung oder andere Sonderregelung gilt.
                </p>

                <h3>Beispiel 1: Bestandsimmobilie mit allgemeinem ITP-Satz</h3>
                <div className="table-wrap" tabIndex={0}>
                  <table>
                    <caption>
                      Indikative ITP bei Bestandsimmobilien in Valencia
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Steuerbemessungsgrundlage</th>
                        <th scope="col">Satz</th>
                        <th scope="col">Indikative ITP</th>
                        <th scope="col">Erläuterung</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usedHomeExamples.map((row) => (
                        <tr key={row.price}>
                          <th scope="row">{row.price}</th>
                          <td>{row.rate}</td>
                          <td>
                            <strong>{row.tax}</strong>
                          </td>
                          <td>{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3>
                  Beispiel 2: regulärer Neubau als Zweitwohnsitz oder
                  Ferienimmobilie
                </h3>
                <p>
                  In diesem Beispiel rechnen wir mit 10% IVA und dem allgemeinen
                  valencianischen AJD-Satz von 1,4%.
                </p>
                <div className="table-wrap" tabIndex={0}>
                  <table>
                    <caption>
                      Indikative IVA und AJD bei regulären Neubauten
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Kaufpreis</th>
                        <th scope="col">10% IVA</th>
                        <th scope="col">1,4% AJD</th>
                        <th scope="col">Gesamt IVA + AJD</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newBuildExamples.map((row) => (
                        <tr key={row.price}>
                          <th scope="row">{row.price}</th>
                          <td>{row.iva}</td>
                          <td>{row.ajdSecondHome}</td>
                          <td>
                            <strong>{row.totalSecondHome}</strong>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3>Beispiel 3: Neubau, der als Hauptwohnsitz qualifiziert</h3>
                <p>
                  Wenn die Kaufurkunde tatsächlich unter den 0,1%-Satz
                  für den steuerlichen Hauptwohnsitz fällt, beträgt AJD in denselben
                  Beispielen €250 bei einer Bemessungsgrundlage von €250.000, €400 bei
                  €400.000 und €600 bei €600.000. Die 10% IVA bleibt in diesem
                  vereenvoudigde voorbeeld wel an.
                </p>

                <div className="comparison">
                  <div>
                    <span>Bestandsimmobilie €400.000</span>
                    <strong>€36.000 ITP</strong>
                    <small>bei 9% und Bemessungsgrundlage €400.000</small>
                  </div>
                  <div>
                    <span>Neubau €400.000, Zweitwohnsitz</span>
                    <strong>€45.600 IVA + AJD</strong>
                    <small>10% IVA plus 1,4% AJD</small>
                  </div>
                </div>

                <div className="notice">
                  <strong>Nicht enthalten:</strong> Notar, Grundbuch,
                  Rechtsanwalt, technische Prüfung, Bankkosten, Bewertung,
                  Übersetzungen, Vollmachten, Anschlusskosten, Versicherung,
                  Renovierung und eventuelle Kaufbegleitung.
                </div>
              </section>

              <section id="ermaessigte-saetze" className="content-section">
                <p className="section-kicker">AUSNAHMEN</p>
                <h2>Wann kann ein ermäßigter ITP-Satz gelten?</h2>
                <p>
                  Die Comunitat Valenciana kennt mehrere ermäßigte ITP-Sätze.
                  Diese Regelungen richten sich an bestimmte Käufer,
                  Immobilientypen und Nutzungszwecke. Sie stehen nicht automatisch
                  jedem Käufer zur Verfügung, der jung ist, eine Familie hat
                  oder dauerhaft nach Spanien zieht.
                </p>

                <div className="reduced-list">
                  <div>
                    <span>6% / 8%</span>
                    <div>
                      <h3>Käufer unter 35 Jahren</h3>
                      <p>
                        Für den ersten steuerlichen Hauptwohnsitz kann bei einem Wert
                        bis einschließlich €180.000 ein Satz von 6% und über
                        €180.000 ein Satz von 8% gelten, sofern auch die
                        gesetzlichen Einkommens- und Dokumentationsvoraussetzungen
                        erfüllt sind.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>6% / 8%</span>
                    <div>
                      <h3>Bestimmte geschützte Immobilien</h3>
                      <p>
                        Für offiziell geschützte Immobilien des allgemeinen Regimes
                        können vergleichbare Grenzen und zusätzliche Anforderungen
                        gelten, darunter die Nutzung als erster Hauptwohnsitz.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>3% / 4%</span>
                    <div>
                      <h3>Besondere soziale Situationen</h3>
                      <p>
                        Für bestimmte geschützte Immobilien, Groß- oder
                        Alleinerziehendenfamilien, qualifizierende Behinderungen und
                        Opfer geschlechtsspezifischer Gewalt können Sätze von 3% oder
                        4% gelten, abhängig unter anderem vom Immobilienwert,
                        Einkommen, Anteil und Nachweisen.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  Die Grenze von €180.000, der Begriff erster Hauptwohnsitz,
                  Einkommensgrenzen, Alter am relevanten Datum und der
                  erworbene Eigentumsanteil müssen sorgfältig
                  geprüft werden. Eine zu Unrecht angewendete Ermäßigung kann zu
                  Nachzahlung und Zinsen führen.
                </p>

                <div className="expert-note">
                  <p className="mini-label">PRAXISTIPP VON NORDIC MOVE SPAIN</p>
                  <p>
                    Fragen Sie vor der Unterzeichnung einer Reservierung oder
                    eines Kaufvertrags schriftlich, welche Steuerregelung der
                    Berater anwendet, auf welcher gesetzlichen Grundlage sie beruht und
                    welche Dokumente erforderlich sind. Warten Sie nicht bis zum Tag des
                    Notartermins.
                  </p>
                </div>
              </section>

              <section id="erklaerung" className="content-section">
                <p className="section-kicker">ERKLÄRUNG UND ZAHLUNG</p>
                <h2>Wer zahlt die Steuer und wann?</h2>

                <div className="timeline">
                  <div>
                    <span>1</span>
                    <div>
                      <h3>Vor der Unterzeichnung</h3>
                      <p>
                        Prüfen Sie Immobilientyp, Verkäufer, Erst- oder spätere
                        Lieferung, valor de referencia, geplante Nutzung und
                        mögliche ermäßigte Sätze.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>2</span>
                    <div>
                      <h3>Beim Kauf</h3>
                      <p>
                        IVA wird bei Neubauten in der Regel an den Verkäufer oder
                        Bauträger gezahlt. Bei Bestandsimmobilien entsteht die
                        ITP-Pflicht für den Käufer.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>3</span>
                    <div>
                      <h3>Innerhalb eines Monats</h3>
                      <p>
                        In der Comunitat Valenciana müssen die relevanten
                        Dokumente oder Erklärungen grundsätzlich innerhalb eines Monats
                        eingereicht werden. Für ITP und AJD wird in der Regel
                        Modelo 600 verwendet.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>4</span>
                    <div>
                      <h3>Registrierung und Akte</h3>
                      <p>
                        Bewahren Sie Erklärung, Zahlungsnachweis, Urkunde,
                        Referenzwert, Rechnungen und Nachweise für eine eventuelle
                        Ermäßigung in der Kaufakte auf.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  Die valencianische Online-Anwendung verarbeitet pro Formular einen
                  Steuerpflichtigen. Bei mehreren Käufern kann daher für jeden
                  Anteil eine separate Erklärung erforderlich sein. Achten Sie darauf, dass
                  Eigentumsverhältnis in Urkunde, Erklärung und Zahlung
                  übereinstimmen.
                </p>

                <p className="source-note">
                  Informationen zur Steuererklärung:{" "}
                  <SourceLink href={officialSources.model600}>
                    Agencia Tributaria Valenciana — Modelo 600
                  </SourceLink>
                  .
                </p>
              </section>

              <section id="fehler" className="content-section">
                <p className="section-kicker">RISIKEN VERMEIDEN</p>
                <h2>Sieben häufige Fehler bei ITP, IVA und AJD</h2>

                <ol className="mistake-list">
                  <li>
                    <strong>Nur mit dem Kaufpreis rechnen.</strong>
                    Der valor de referencia kann zu einer höheren ITP-Bemessungsgrundlage
                    leiden.
                  </li>
                  <li>
                    <strong>Eine Immobilie ohne steuerliche Prüfung als „neu“ bezeichnen.</strong>
                    Baujahr, Erstlieferung und frühere Vermietung sind nicht
                    dasselbe.
                  </li>
                  <li>
                    <strong>AJD bei Neubauten vergessen.</strong>
                    Das Budget enthält dann zwar 10% IVA, möglicherweise fehlen aber
                    1,4% AJD.
                  </li>
                  <li>
                    <strong>Automatisch 0,1% AJD anwenden.</strong>
                    Ein Zweitwohnsitz oder eine Ferienimmobilie ist nicht automatisch
                    ein steuerlicher Hauptwohnsitz.
                  </li>
                  <li>
                    <strong>Einen ermäßigten ITP-Satz aufgrund nur eines
                    Merkmals annehmen.</strong>
                    Alter, Immobilienwert, Einkommen, Nutzung, Dokumentation und
                    Anteil können alle relevant sein.
                  </li>
                  <li>
                    <strong>Das Datum der Urkunde ignorieren.</strong>
                    Im Jahr 2026 änderten sich die valencianischen Sätze zum 1. Juni.
                  </li>
                  <li>
                    <strong>Steuern mit den gesamten Kaufnebenkosten verwechseln.</strong>
                    Rechtliche, technische, notarielle und Grundbuchkosten
                    kommen zusätzlich hinzu.
                  </li>
                </ol>
              </section>

              <section className="content-section">
                <p className="section-kicker">KAUFBEGLEITUNG</p>
                <h2>Von der Steuerschätzung zu einer sicheren Kaufakte</h2>
                <p>
                  Eine korrekte Steuerberechnung ist ein Bestandteil eines
                  sicheren Kaufs. Nordic Move Spain koordiniert die praktischen
                  Schritte: von der Auswahl von Region und Immobilie bis zur Abstimmung
                  mit unabhängigen Rechts- und Technikfachleuten,
                  Notar, Übersetzern, Handwerkern und anderen Beteiligten.
                </p>
                <p>
                  So sehen Sie vor der Unterzeichnung nicht nur den Angebotspreis, sondern
                  auch die voraussichtliche Steuerbemessungsgrundlage, Steuern,
                  Nebenkosten, rechtliche Punkte und technische
                  Risiken.
                </p>

                <div className="cta">
                  <div>
                    <p className="mini-label">PERSOONLIJKE KAUFBEGLEITUNG</p>
                    <h2>Mehr Sicherheit. Ein vertrauter Ansprechpartner.</h2>
                    <p>
                      Besprechen Sie Immobilie, Budget und Planung, bevor Sie sich
                      rechtlich oder finanziell binden.
                    </p>
                  </div>
                  <div className="cta-actions">
                    <a className="button button-light" href={CONTACT_URL}>
                      Kennenlerngespräch vereinbaren
                    </a>
                    <a className="cta-link" href={SERVICES_URL}>
                      Unsere Leistungen ansehen →
                    </a>
                  </div>
                </div>

                <div className="related">
                  <h3>Lesen Sie auch</h3>
                  <div>
                    <a href={BUYING_GUIDE_URL}>
                      Haus kaufen in Spanien: Schritt-für-Schritt
                    </a>
                    <a href={COSTS_GUIDE_URL}>
                      Alle Kosten beim Immobilienkauf in Spanien
                    </a>
                    <a href={GUIDES_URL}>Alle Ratgeber ansehen</a>
                  </div>
                </div>
              </section>

              <section id="faq" className="content-section">
                <p className="section-kicker">HÄUFIG GESTELLTE FRAGEN</p>
                <h2>FAQ zu ITP, IVA und AJD in Spanien</h2>

                <div className="faq-list">
                  {faqItems.map((item) => (
                    <details key={item.question}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section className="sources">
                <p className="section-kicker">QUELLEN UND AKTUALITÄT</p>
                <h2>Offizielle Quellen für diesen Ratgeber</h2>
                <p>
                  Die steuerlichen Informationen wurden am 23. Juli 2026 aktualisiert und
                  beziehen sich auf Immobilienkäufe in der Comunitat Valenciana. Für
                  Immobilien in einer anderen autonomen Region können andere
                  ITP- und AJD-Sätze gelten.
                </p>
                <ul>
                  <li>
                    <SourceLink href={officialSources.valencianLaw}>
                      BOE — konsolidiertes Gesetz 13/1997 der Comunitat
                      Valenciana
                    </SourceLink>
                  </li>
                  <li>
                    <SourceLink href={officialSources.valencianPropertyTax}>
                      Agencia Tributaria Valenciana — Immobilienkauf
                    </SourceLink>
                  </li>
                  <li>
                    <SourceLink href={officialSources.spanishTaxAgency}>
                      Agencia Tributaria — IVA oder ITP beim Immobilienkauf
                    </SourceLink>
                  </li>
                  <li>
                    <SourceLink href={officialSources.referenceValue}>
                      Agencia Tributaria Valenciana — valor de referencia
                    </SourceLink>
                  </li>
                  <li>
                    <SourceLink href={officialSources.model600}>
                      Agencia Tributaria Valenciana — Modelo 600
                    </SourceLink>
                  </li>
                  <li>
                    <SourceLink href={officialSources.mortgageAjd}>
                      BOE — AJD und Hypothekendarlehen
                    </SourceLink>
                  </li>
                </ul>
                <p className="disclaimer">
                  Dieser Ratgeber enthält allgemeine Informationen und stellt keine Rechts-,
                  Steuer-, Finanz- oder Notarberatung dar. Steuersätze,
                  Voraussetzungen und Auslegungen können sich ändern. Lassen Sie Ihre
                  konkrete Transaktion vor der Unterzeichnung von einem
                  qualifizierten unabhängigen Fachmann prüfen.
                </p>
              </section>
            </div>
          </section>
        </article>
      </main>

      <style>{`
        :root {
          --nms-cream: #f6f1ea;
          --nms-cream-deep: #eee6dc;
          --nms-taupe: #d1cdc7;
          --nms-navy: #1e2a3a;
          --nms-navy-soft: #344052;
          --nms-gold: #c8a063;
          --nms-gold-dark: #9b743a;
          --nms-text: #494242;
          --nms-muted: #746b65;
          --nms-white: #ffffff;
          --nms-line: #ddd4ca;
          --nms-shadow: 0 18px 50px rgba(30, 42, 58, 0.08);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--nms-cream);
          color: var(--nms-text);
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          line-height: 1.72;
        }

        a {
          color: var(--nms-navy);
          text-decoration-color: rgba(200, 160, 99, 0.8);
          text-decoration-thickness: 1px;
          text-underline-offset: 0.22em;
        }

        a:hover {
          color: var(--nms-gold-dark);
        }

        .tax-page {
          min-height: 100vh;
          overflow: hidden;
          background: var(--nms-cream);
        }

        .section-width,
        .hero-inner {
          width: min(100% - 40px, 1280px);
          margin-inline: auto;
        }

        .hero {
          padding: clamp(38px, 6vw, 86px) 0 clamp(72px, 9vw, 120px);
          background:
            radial-gradient(
              circle at 86% 20%,
              rgba(200, 160, 99, 0.16),
              transparent 27%
            ),
            var(--nms-cream);
        }

        .breadcrumbs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: clamp(42px, 6vw, 74px);
          color: var(--nms-muted);
          font-size: 0.88rem;
        }

        .breadcrumbs a {
          color: inherit;
          text-decoration: none;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.32fr) minmax(350px, 0.68fr);
          gap: clamp(42px, 8vw, 110px);
          align-items: center;
        }

        .eyebrow,
        .section-kicker,
        .mini-label,
        .toc-title {
          margin: 0 0 15px;
          color: var(--nms-gold-dark);
          font-size: 0.77rem;
          font-weight: 750;
          letter-spacing: 0.28em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3 {
          color: var(--nms-navy);
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 500;
          line-height: 1.14;
          text-wrap: balance;
        }

        h1 {
          max-width: 850px;
          margin: 0;
          font-size: clamp(2.55rem, 5.3vw, 5.2rem);
          letter-spacing: -0.045em;
        }

        h2 {
          margin: 0 0 23px;
          font-size: clamp(1.9rem, 3.5vw, 3.25rem);
          letter-spacing: -0.035em;
        }

        h3 {
          margin: 34px 0 13px;
          font-size: clamp(1.28rem, 2vw, 1.58rem);
        }

        p {
          margin: 0 0 23px;
        }

        .lead {
          max-width: 800px;
          margin-top: 30px;
          color: var(--nms-navy-soft);
          font-size: clamp(1.05rem, 1.7vw, 1.23rem);
        }

        .author-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 36px;
        }

        .author-mark {
          display: grid;
          width: 44px;
          height: 44px;
          place-items: center;
          border: 1px solid rgba(30, 42, 58, 0.28);
          background: var(--nms-navy);
          color: var(--nms-white);
          border-radius: 50%;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.1rem;
        }

        .author-row strong,
        .author-row span {
          display: block;
        }

        .author-row strong {
          color: var(--nms-navy);
        }

        .author-row span {
          margin-top: 2px;
          color: var(--nms-muted);
          font-size: 0.87rem;
        }

        .hero-card {
          padding: clamp(28px, 4vw, 46px);
          border: 10px solid #e9dfd1;
          outline: 2px solid var(--nms-white);
          background: var(--nms-white);
          border-radius: 28px;
          box-shadow: var(--nms-shadow);
        }

        .hero-card h2 {
          font-size: clamp(1.7rem, 2.8vw, 2.45rem);
        }

        .decision-list {
          margin: 26px 0;
        }

        .decision-list > div {
          display: grid;
          grid-template-columns: 38px 1fr;
          gap: 13px;
          padding: 17px 0;
          border-top: 1px solid var(--nms-line);
        }

        .decision-list > div:last-child {
          border-bottom: 1px solid var(--nms-line);
        }

        .decision-list span {
          display: grid;
          width: 32px;
          height: 32px;
          place-items: center;
          background: var(--nms-gold);
          color: var(--nms-white);
          border-radius: 50%;
          font-size: 0.72rem;
          font-weight: 800;
        }

        .decision-list p {
          margin: 0;
          color: var(--nms-muted);
          font-size: 0.93rem;
        }

        .decision-list strong {
          display: block;
          margin-bottom: 2px;
          color: var(--nms-navy);
        }

        .text-link {
          font-weight: 750;
        }

        .quick-summary {
          padding-bottom: clamp(68px, 8vw, 108px);
          background:
            linear-gradient(
              to bottom,
              var(--nms-cream) 0,
              var(--nms-cream) 38%,
              var(--nms-taupe) 38%,
              var(--nms-taupe) 100%
            );
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .summary-card {
          min-height: 270px;
          padding: 29px;
          background: var(--nms-white);
          border-radius: 18px;
          box-shadow: var(--nms-shadow);
        }

        .summary-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
        }

        .summary-top span {
          color: var(--nms-gold-dark);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .summary-top strong {
          color: var(--nms-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 2.9rem;
          font-weight: 500;
          line-height: 0.9;
        }

        .summary-card h2 {
          margin-top: 36px;
          font-size: 1.6rem;
        }

        .summary-card p {
          margin: 0;
          color: var(--nms-muted);
          font-size: 0.95rem;
        }

        .article-layout {
          display: grid;
          grid-template-columns: 250px minmax(0, 850px);
          gap: clamp(48px, 8vw, 110px);
          align-items: start;
          justify-content: center;
          padding-block: clamp(70px, 9vw, 120px);
        }

        .toc {
          position: sticky;
          top: 26px;
          padding: 28px 0;
        }

        .toc ol {
          margin: 0;
          padding: 0;
          list-style: none;
          counter-reset: toc;
        }

        .toc li {
          counter-increment: toc;
          border-top: 1px solid var(--nms-line);
        }

        .toc li:last-child {
          border-bottom: 1px solid var(--nms-line);
        }

        .toc li a {
          display: grid;
          grid-template-columns: 27px 1fr;
          gap: 6px;
          padding: 11px 0;
          color: var(--nms-muted);
          font-size: 0.84rem;
          line-height: 1.45;
          text-decoration: none;
        }

        .toc li a::before {
          content: counter(toc, decimal-leading-zero);
          color: var(--nms-gold-dark);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.05em;
        }

        .toc li a:hover {
          color: var(--nms-navy);
        }

        .toc-contact {
          margin-top: 26px;
          padding: 20px;
          background: var(--nms-navy);
          color: var(--nms-white);
          border-radius: 13px;
        }

        .toc-contact p {
          margin-bottom: 13px;
          font-size: 0.84rem;
        }

        .toc-contact a {
          color: var(--nms-white);
          font-size: 0.83rem;
          font-weight: 800;
        }

        .article-content {
          min-width: 0;
        }

        .content-section {
          padding: clamp(55px, 7vw, 90px) 0;
          border-bottom: 1px solid var(--nms-line);
          scroll-margin-top: 30px;
        }

        .first-section {
          padding-top: 0;
        }

        .content-section > p {
          max-width: 790px;
        }

        .definition-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
          margin: 37px 0;
        }

        .definition-grid > div {
          padding: 24px;
          background: var(--nms-white);
          border: 1px solid var(--nms-line);
          border-radius: 15px;
        }

        .definition-grid span {
          color: var(--nms-gold-dark);
          font-size: 0.76rem;
          font-weight: 850;
          letter-spacing: 0.14em;
        }

        .definition-grid h3 {
          margin: 17px 0 11px;
          font-size: 1.23rem;
        }

        .definition-grid p {
          margin: 0;
          color: var(--nms-muted);
          font-size: 0.91rem;
        }

        .key-answer {
          margin-top: 34px;
          padding: 26px 28px;
          border-left: 4px solid var(--nms-gold);
          background: var(--nms-cream-deep);
        }

        .key-answer strong {
          display: block;
          margin-bottom: 7px;
          color: var(--nms-navy);
        }

        .key-answer p {
          margin: 0;
        }

        .rate-banner {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1px;
          margin: 38px 0;
          overflow: hidden;
          background: var(--nms-gold);
          border: 1px solid var(--nms-gold);
          border-radius: 17px;
        }

        .rate-banner > div {
          padding: 29px;
          background: var(--nms-navy);
          color: var(--nms-white);
        }

        .rate-banner span,
        .rate-banner strong,
        .rate-banner small {
          display: block;
        }

        .rate-banner span {
          color: #d9bd91;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .rate-banner strong {
          margin: 9px 0 4px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 500;
          line-height: 1;
        }

        .rate-banner small {
          color: #e7e1d8;
        }

        .source-note {
          margin-top: 28px;
          color: var(--nms-muted);
          font-size: 0.83rem;
        }

        .formula {
          margin: 34px 0;
          padding: 31px;
          background: var(--nms-navy);
          color: var(--nms-white);
          border-radius: 17px;
        }

        .formula span,
        .formula strong {
          display: block;
        }

        .formula span {
          margin-bottom: 12px;
          color: #d9bd91;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .formula strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.35rem, 2.7vw, 2rem);
          font-weight: 500;
          line-height: 1.4;
        }

        .warning {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 18px;
          margin: 34px 0;
          padding: 25px;
          border: 1px solid #ddc39b;
          background: #fbf4e8;
          border-radius: 15px;
        }

        .warning > div {
          display: grid;
          width: 39px;
          height: 39px;
          place-items: center;
          background: var(--nms-gold);
          color: var(--nms-white);
          border-radius: 50%;
          font-weight: 850;
        }

        .warning p {
          margin: 0;
        }

        .fact-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
          margin: 37px 0;
        }

        .fact-cards > div {
          padding: 25px;
          background: var(--nms-white);
          border-radius: 15px;
        }

        .fact-cards span {
          display: block;
          color: var(--nms-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 2.5rem;
          line-height: 1;
        }

        .fact-cards h3 {
          margin: 20px 0 10px;
          font-size: 1.24rem;
        }

        .fact-cards p {
          margin: 0;
          color: var(--nms-muted);
          font-size: 0.9rem;
        }

        .ajd-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 14px;
          margin: 36px 0;
        }

        .ajd-grid > div {
          padding: 26px;
          background: var(--nms-white);
          border: 1px solid var(--nms-line);
          border-radius: 16px;
        }

        .ajd-grid .ajd-main {
          background: var(--nms-navy);
          color: var(--nms-white);
          border-color: var(--nms-navy);
        }

        .ajd-grid p {
          margin: 0;
          color: var(--nms-muted);
          font-size: 0.83rem;
          font-weight: 750;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .ajd-grid .ajd-main p,
        .ajd-grid .ajd-main span {
          color: #e5ddd3;
        }

        .ajd-grid strong,
        .ajd-grid span {
          display: block;
        }

        .ajd-grid strong {
          margin: 15px 0 13px;
          color: var(--nms-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 3rem;
          font-weight: 500;
          line-height: 1;
        }

        .ajd-grid span {
          color: var(--nms-muted);
          font-size: 0.86rem;
        }

        .table-wrap {
          margin: 30px 0 44px;
          overflow-x: auto;
          border: 1px solid var(--nms-line);
          background: var(--nms-white);
          border-radius: 15px;
        }

        table {
          width: 100%;
          min-width: 690px;
          border-collapse: collapse;
        }

        caption {
          padding: 15px 18px;
          color: var(--nms-muted);
          font-size: 0.82rem;
          text-align: left;
        }

        th,
        td {
          padding: 15px 18px;
          border-top: 1px solid var(--nms-line);
          text-align: left;
          vertical-align: top;
        }

        thead th {
          background: var(--nms-navy);
          color: var(--nms-white);
          border-top: 0;
          font-size: 0.76rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        tbody th {
          color: var(--nms-navy);
        }

        tbody tr:nth-child(even) {
          background: #faf7f2;
        }

        .comparison {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
          margin: 37px 0;
        }

        .comparison > div {
          padding: 26px;
          border: 1px solid var(--nms-line);
          background: var(--nms-white);
          border-radius: 15px;
        }

        .comparison span,
        .comparison strong,
        .comparison small {
          display: block;
        }

        .comparison span {
          color: var(--nms-muted);
          font-size: 0.82rem;
          font-weight: 750;
          text-transform: uppercase;
        }

        .comparison strong {
          margin: 12px 0 6px;
          color: var(--nms-navy);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.8rem;
          font-weight: 500;
        }

        .comparison small {
          color: var(--nms-muted);
        }

        .notice {
          padding: 21px 23px;
          background: var(--nms-cream-deep);
          border-radius: 13px;
        }

        .reduced-list {
          margin: 36px 0;
          border-top: 1px solid var(--nms-line);
        }

        .reduced-list > div {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 24px;
          padding: 27px 0;
          border-bottom: 1px solid var(--nms-line);
        }

        .reduced-list > div > span {
          color: var(--nms-gold-dark);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.75rem;
        }

        .reduced-list h3 {
          margin: 0 0 8px;
        }

        .reduced-list p {
          margin: 0;
        }

        .expert-note {
          margin-top: 38px;
          padding: 30px;
          background: var(--nms-white);
          border: 1px solid var(--nms-line);
          border-radius: 15px;
          box-shadow: var(--nms-shadow);
        }

        .expert-note p:last-child {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.22rem;
          line-height: 1.55;
        }

        .timeline {
          margin: 38px 0;
        }

        .timeline > div {
          display: grid;
          grid-template-columns: 46px 1fr;
          gap: 18px;
          padding: 0 0 27px;
          position: relative;
        }

        .timeline > div:not(:last-child)::after {
          content: "";
          position: absolute;
          left: 21px;
          top: 45px;
          bottom: 0;
          width: 1px;
          background: var(--nms-gold);
        }

        .timeline > div > span {
          display: grid;
          width: 43px;
          height: 43px;
          place-items: center;
          background: var(--nms-gold);
          color: var(--nms-white);
          border-radius: 50%;
          font-weight: 850;
          position: relative;
          z-index: 1;
        }

        .timeline h3 {
          margin: 4px 0 7px;
        }

        .timeline p {
          margin: 0;
        }

        .mistake-list {
          margin: 35px 0 0;
          padding: 0;
          list-style: none;
          counter-reset: mistakes;
        }

        .mistake-list li {
          counter-increment: mistakes;
          display: grid;
          grid-template-columns: 43px 1fr;
          gap: 17px;
          padding: 20px 0;
          border-top: 1px solid var(--nms-line);
        }

        .mistake-list li:last-child {
          border-bottom: 1px solid var(--nms-line);
        }

        .mistake-list li::before {
          content: counter(mistakes, decimal-leading-zero);
          color: var(--nms-gold-dark);
          font-size: 0.8rem;
          font-weight: 850;
          letter-spacing: 0.07em;
        }

        .mistake-list strong {
          color: var(--nms-navy);
        }

        .cta {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(190px, 0.55fr);
          gap: 40px;
          align-items: center;
          margin-top: 42px;
          padding: clamp(30px, 5vw, 52px);
          background: var(--nms-navy);
          color: var(--nms-white);
          border-radius: 20px;
        }

        .cta h2 {
          color: var(--nms-white);
          font-size: clamp(1.8rem, 3.2vw, 2.9rem);
        }

        .cta p {
          color: #e5ddd3;
        }

        .cta .mini-label {
          color: #d9bd91;
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
        }

        .button {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          padding: 12px 19px;
          border-radius: 999px;
          font-weight: 800;
          text-decoration: none;
        }

        .button-light {
          background: var(--nms-gold);
          color: var(--nms-white);
        }

        .button-light:hover {
          background: #b98b49;
          color: var(--nms-white);
        }

        .cta-link {
          color: var(--nms-white);
          font-weight: 750;
        }

        .related {
          margin-top: 43px;
        }

        .related h3 {
          margin-bottom: 16px;
        }

        .related > div {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .related a {
          padding: 18px;
          background: var(--nms-white);
          border: 1px solid var(--nms-line);
          border-radius: 12px;
          font-size: 0.92rem;
          font-weight: 750;
          text-decoration: none;
        }

        .faq-list {
          margin-top: 31px;
        }

        details {
          border-top: 1px solid var(--nms-line);
        }

        details:last-child {
          border-bottom: 1px solid var(--nms-line);
        }

        summary {
          padding: 21px 34px 21px 0;
          cursor: pointer;
          color: var(--nms-navy);
          font-weight: 780;
          list-style-position: outside;
        }

        details p {
          max-width: 760px;
          padding: 0 0 24px;
          color: var(--nms-muted);
        }

        .sources {
          padding: clamp(55px, 7vw, 85px) 0 0;
        }

        .sources h2 {
          font-size: clamp(1.7rem, 3vw, 2.4rem);
        }

        .sources ul {
          columns: 2;
          gap: 40px;
          margin: 30px 0;
          padding-left: 18px;
        }

        .sources li {
          margin-bottom: 9px;
          break-inside: avoid;
        }

        .disclaimer {
          padding: 22px;
          color: var(--nms-muted);
          background: var(--nms-cream-deep);
          border-radius: 12px;
          font-size: 0.85rem;
        }

        @media (max-width: 1020px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-card {
            max-width: 720px;
          }

          .article-layout {
            grid-template-columns: 1fr;
          }

          .toc {
            position: static;
            padding: 0 0 48px;
          }

          .toc ol {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 30px;
          }

          .toc-contact {
            max-width: 470px;
          }
        }

        @media (max-width: 760px) {
          .section-width,
          .hero-inner {
            width: min(100% - 26px, 1280px);
          }

          .card-grid,
          .definition-grid,
          .fact-cards,
          .ajd-grid,
          .comparison,
          .related > div {
            grid-template-columns: 1fr;
          }

          .summary-card {
            min-height: 0;
          }

          .toc ol {
            grid-template-columns: 1fr;
          }

          .rate-banner {
            grid-template-columns: 1fr;
          }

          .reduced-list > div {
            grid-template-columns: 1fr;
            gap: 7px;
          }

          .cta {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .sources ul {
            columns: 1;
          }

          h1 {
            font-size: clamp(2.35rem, 12vw, 4.2rem);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </>
  );
}