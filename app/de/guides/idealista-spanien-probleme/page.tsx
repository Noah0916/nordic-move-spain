import type { Metadata } from "next";

const pagePath = "/de/guides/idealista-spanien-probleme";

const pageTitle =
  "Idealista Spanien: Probleme und veraltete Immobilienanzeigen";

const pageDescription =
  "Idealista Spanien richtig nutzen: Erfahren Sie, warum Inserate veraltet, doppelt oder unvollständig sein können und wie Sie Immobilien an der Costa Blanca sicher prüfen.";

const publishedDate = "2026-06-13";
const modifiedDate = "2026-06-13";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

function absoluteUrl(path: string) {
  return siteUrl ? `${siteUrl}${path}` : path;
}

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),

  title: pageTitle,
  description: pageDescription,

  authors: [
    {
      name: "Nordic Move Spain",
    },
  ],

  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Immobilienratgeber Spanien",

  alternates: {
    canonical: pagePath,
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

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    locale: "de_DE",
    siteName: "Nordic Move Spain",
    publishedTime: publishedDate,
    modifiedTime: modifiedDate,
    section: "Immobilienratgeber",

    ...(siteUrl
      ? {
          url: absoluteUrl(pagePath),
          images: [
            {
              url: absoluteUrl("/images/aftercare.png"),
              width: 1200,
              height: 630,
              alt: "Immobiliensuche auf Idealista Spanien und an der Costa Blanca Nord",
            },
          ],
        }
      : {}),
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,

    ...(siteUrl
      ? {
          images: [absoluteUrl("/images/aftercare.png")],
        }
      : {}),
  },
};

const portalProblems = [
  {
    number: "01",
    title: "Veraltete Immobilienanzeigen",
    text:
      "Ein Inserat kann weiterhin online sichtbar sein, obwohl die Immobilie bereits reserviert, verkauft oder vorübergehend vom Markt genommen wurde. Deshalb sollte die Verfügbarkeit immer aktuell bestätigt werden.",
  },
  {
    number: "02",
    title: "Doppelte Inserate",
    text:
      "Dieselbe Immobilie kann von mehreren Maklern angeboten werden. Bilder, Beschreibungen, Preise und Flächenangaben können sich dabei zwischen den Anzeigen unterscheiden.",
  },
  {
    number: "03",
    title: "Ungenaue Standortangaben",
    text:
      "Aus Datenschutz- oder Vertriebsgründen wird häufig nur eine ungefähre Lage angezeigt. Eine Immobilie unter dem Namen Moraira kann beispielsweise außerhalb des Ortszentrums oder in einer angrenzenden Gemeinde liegen.",
  },
  {
    number: "04",
    title: "Unvollständige Objektinformationen",
    text:
      "Ein Portalinserat zeigt normalerweise nicht, ob alle Anbauten registriert sind, welche Belastungen bestehen, ob eine Vermietung erlaubt ist oder welche Gemeinschaftsregeln gelten.",
  },
  {
    number: "05",
    title: "Preisänderungen und abweichende Angaben",
    text:
      "Der Angebotspreis kann zwischen Portalen oder Maklern abweichen. Auch Angaben zu Grundstücksfläche, Wohnfläche, Schlafzimmern oder Baujahr sollten anhand offizieller Unterlagen überprüft werden.",
  },
  {
    number: "06",
    title: "Anfragen führen zu anderen Angeboten",
    text:
      "Manchmal ist das angefragte Objekt nicht mehr verfügbar und es werden Alternativen vorgeschlagen. Das muss nicht automatisch problematisch sein, sollte aber transparent erklärt werden.",
  },
];

const listingChecklist = [
  {
    title: "Ist die Immobilie heute noch verfügbar?",
    text:
      "Bitten Sie um eine ausdrückliche Bestätigung, dass das Objekt weder verkauft noch reserviert ist und Besichtigungen weiterhin möglich sind.",
  },
  {
    title: "Wie lautet die genaue Lage?",
    text:
      "Fragen Sie nach Urbanisation, Straße oder Katasterreferenz. Prüfen Sie Fahrtzeiten, Hanglage, Zufahrt, Straßenlärm und die Entfernung zu wichtigen Einrichtungen.",
  },
  {
    title: "Wer ist der tatsächliche Anbieter?",
    text:
      "Klären Sie, ob der Makler direkt vom Eigentümer beauftragt wurde oder über eine andere Agentur arbeitet.",
  },
  {
    title: "Stimmen Preis und Beschreibung überein?",
    text:
      "Vergleichen Sie verschiedene Inserate desselben Objekts und lassen Sie abweichende Preis-, Flächen- oder Ausstattungsangaben erklären.",
  },
  {
    title: "Sind Anbauten und Pool registriert?",
    text:
      "Terrassen, Gästehäuser, Garagen, Sommerküchen, Pools oder Erweiterungen können gebaut worden sein, ohne vollständig in den Unterlagen zu erscheinen.",
  },
  {
    title: "Bestehen Schulden oder Belastungen?",
    text:
      "Ein unabhängiger Anwalt sollte unter anderem Grundbuchdaten, Hypotheken, Pfändungen, offene Gemeinschaftsbeiträge und kommunale Forderungen prüfen.",
  },
  {
    title: "Ist Ferienvermietung möglich?",
    text:
      "Prüfen Sie regionale und kommunale Vorschriften, mögliche Genehmigungen und die Regeln der Eigentümergemeinschaft, bevor Sie mit Mieteinnahmen rechnen.",
  },
  {
    title: "Welche laufenden Kosten entstehen?",
    text:
      "Fragen Sie nach Immobiliensteuer, Müllgebühren, Gemeinschaftskosten, Versicherung, Pool-, Garten- und Gebäudeunterhalt.",
  },
];

const redFlags = [
  "Der Anbieter möchte keine genaue Lage oder keine aktuellen Informationen geben.",
  "Sie werden zu einer schnellen Reservierungszahlung gedrängt, bevor Unterlagen geprüft wurden.",
  "Preis, Wohnfläche oder Anzahl der Schlafzimmer unterscheiden sich zwischen mehreren Anzeigen.",
  "Es gibt keine klare Antwort auf Fragen zu Eigentümer, Grundbuch oder Baugenehmigungen.",
  "Eine garantierte Ferienvermietung oder außergewöhnlich hohe Rendite wird ohne Nachweise versprochen.",
  "Eine unabhängige rechtliche Prüfung wird als unnötig oder störend dargestellt.",
];

const processSteps = [
  {
    number: "01",
    title: "Suchprofil festlegen",
    text:
      "Definieren Sie Budget, gewünschte Nutzung, Immobilientyp, Orte, Fahrtzeiten, Muss-Kriterien und klare Ausschlusskriterien.",
  },
  {
    number: "02",
    title: "Portale zur Marktbeobachtung nutzen",
    text:
      "Vergleichen Sie Angebotspreise, Wohnlagen und Immobilientypen. Betrachten Sie die Anzeigen zunächst als Orientierung und nicht als vollständig geprüfte Datenbank.",
  },
  {
    number: "03",
    title: "Verfügbarkeit bestätigen",
    text:
      "Lassen Sie interessante Objekte vor Reise- oder Flugbuchungen noch einmal schriftlich bestätigen und bitten Sie um aktuelle Informationen.",
  },
  {
    number: "04",
    title: "Standort realistisch prüfen",
    text:
      "Bewerten Sie Zufahrt, Steigung, Lärm, Sonne, Aussicht, Nachbarschaft, Infrastruktur und Fahrzeiten nicht nur auf einer Karte, sondern auch vor Ort.",
  },
  {
    number: "05",
    title: "Unterlagen unabhängig kontrollieren",
    text:
      "Lassen Sie Eigentumsverhältnisse, Belastungen, Genehmigungen, Katasterangaben, Gemeinschaftsregeln und Verträge von unabhängigen Fachleuten prüfen.",
  },
  {
    number: "06",
    title: "Erst danach reservieren",
    text:
      "Verstehen Sie Reservierungsbedingungen, Rückzahlungsregeln und Fristen, bevor Sie Geld überweisen oder ein Dokument unterschreiben.",
  },
];

const faqItems = [
  {
    question: "Ist Idealista in Spanien zuverlässig?",
    answer:
      "Idealista ist ein nützliches und bekanntes Suchportal, das einen breiten Überblick über den Immobilienmarkt bietet. Die Angaben in den Anzeigen stammen jedoch normalerweise von Maklern, Projektentwicklern oder privaten Anbietern. Deshalb sollten Verfügbarkeit, Preis, Lage, Flächen und rechtliche Informationen unabhängig bestätigt werden.",
  },
  {
    question: "Warum sind manche Immobilien auf Idealista nicht mehr verfügbar?",
    answer:
      "Eine Immobilie kann bereits reserviert oder verkauft sein, während die Anzeige noch online staat. Aktualisierungen erfolgen nicht bei jedem Anbieter sofort. Manchmal wird ein Objekt auch von mehreren Maklern angeboten, die nicht gleichzeitig über eine Statusänderung informiert werden.",
  },
  {
    question: "Warum wird dieselbe Immobilie mehrfach angezeigt?",
    answer:
      "In Spanien arbeiten Eigentümer teilweise mit mehreren Maklern gleichzeitig. Dadurch kann dieselbe Immobilie mit unterschiedlichen Fotos, Texten, Preisen oder Standortangaben auf einem oder mehreren Portalen erscheinen.",
  },
  {
    question: "Sind günstige Immobilienanzeigen auf Idealista immer echt?",
    answer:
      "Ein niedriger Preis bedeutet nicht automatisch, dass eine Anzeige falsch ist. Er kann aber auf Renovierungsbedarf, eine schwierige Lage, rechtliche Besonderheiten, fehlende Genehmigungen oder einen veralteten Preis zurückzuführen sein. Verfügbarkeit und Unterlagen sollten vor einer Reise bestätigt werden.",
  },
  {
    question: "Kann ich eine Immobilie direkt über Idealista kaufen?",
    answer:
      "Idealista brengt Käufer und Anbieter zusammen, führt aber normalerweise nicht selbst die rechtliche oder technische Kaufprüfung durch. Der eigentliche Kaufprozess findet mit dem Verkäufer, dem Makler, einem unabhängigen Anwalt, dem Notar und gegebenenfalls einer Bank statt.",
  },
  {
    question: "Was sollte ich vor einer Besichtigung anfordern?",
    answer:
      "Fragen Sie nach aktueller Verfügbarkeit, genauer Lage, Grundriss, Gesamtfläche, Gemeinschaftskosten, Immobiliensteuer, Baujahr, Renovierungen, Energieausweis und bekannten rechtlichen oder baulichen Besonderheiten.",
  },
  {
    question: "Sollte ich vor einer Besichtigungsreise eine Reservierung zahlen?",
    answer:
      "Eine Zahlung vor der Besichtigung sollte nur nach sorgfältiger Prüfung der Bedingungen erfolgen. Klären Sie schriftlich, wann die Zahlung zurückgezahlt wird, wer das Geld erhält und welche Verpflichtungen dadurch entstehen.",
  },
  {
    question: "Brauche ich einen unabhängigen Anwalt in Spanien?",
    answer:
      "Eine unabhängige rechtliche Prüfung ist sehr wichtig. Der Anwalt sollte ausschließlich Ihre Interessen vertreten und unter anderem Eigentum, Belastungen, Genehmigungen, Verträge, Gemeinschaftskosten und mögliche Schulden kontrollieren.",
  },
  {
    question: "Sind Fotocasa und andere spanische Portale zuverlässiger?",
    answer:
      "Auch andere Immobilienportale sind überwiegend Plattformen für Anzeigen verschiedener Anbieter. Unterschiede bestehen beim Angebot und bei der Benutzeroberfläche, aber Verfügbarkeit und Objektinformationen sollten unabhängig vom verwendeten Portal überprüft werden.",
  },
  {
    question:
      "Wie finde ich tatsächlich verfügbare Immobilien an der Costa Blanca Nord?",
    answer:
      "Arbeiten Sie mit einem klaren Suchprofil, lassen Sie Angebote vor Besichtigungen bestätigen und vermeiden Sie lange Listen unkontrollierter Portalinserate. Eine regional fokussierte Suche kann helfen, passende und aktuell verfügbare Objekte gezielter zu identifizieren.",
  },
];

const relatedGuides = [
  {
    href: "/de/guides/buying-process",
    label: "Kaufprozess",
    title: "Immobilienkauf in Spanien: Ablauf und wichtige Schritte",
    text:
      "Von der NIE-Nummer und Finanzierung bis zur rechtlichen Prüfung, Reservierung und Unterzeichnung beim Notar.",
  },
  {
    href: "/de/guides/common-mistakes-buying-property-spain",
    label: "Häufige Fehler",
    title: "Fehler beim Immobilienkauf in Spanien vermeiden",
    text:
      "Welche Entscheidungen internationale Käufer häufig zu früh treffen und wie Sie unangenehme Überraschungen vermeiden.",
  },
  {
    href: "/de/guides/honest-guide-buying-property-costa-blanca-north",
    label: "Ehrlicher Käufer-Ratgeber",
    title: "Kosten, Vermietung und praktische Risiken verstehen",
    text:
      "Ein realistischer Blick auf laufende Kosten, Wohnlagen, Lärm, Gemeinschaftsregeln und Ferienvermietung.",
  },
];

export default function IdealistaSpanienProblemePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    description: pageDescription,
    inLanguage: "de-DE",
    datePublished: publishedDate,
    dateModified: modifiedDate,
    articleSection: "Immobilienratgeber Spanien",
    keywords:
      "Idealista Spanien Probleme, Idealista Immobilien Spanien, veraltete Immobilienanzeigen Spanien, Haus kaufen Costa Blanca, Immobilienportale Spanien, Idealista nicht aktuell",

    author: {
      "@type": "Organization",
      name: "Nordic Move Spain",
      url: absoluteUrl("/de"),
    },

    publisher: {
      "@type": "Organization",
      name: "Nordic Move Spain",
      url: absoluteUrl("/de"),
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(pagePath),
    },

    url: absoluteUrl(pagePath),

    image: [
      absoluteUrl("/images/aftercare.png"),
      absoluteUrl("/images/legal.png"),
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: absoluteUrl("/de"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ratgeber",
        item: absoluteUrl("/de/guides"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Idealista Spanien: Probleme und veraltete Anzeigen",
        item: absoluteUrl(pagePath),
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article>
        {/* HERO */}
        <header className="relative flex min-h-[78vh] items-center overflow-hidden px-8 py-32">
          <img
            src="/images/aftercare.png"
            alt="Immobiliensuche mit Idealista Spanien an der Costa Blanca Nord"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 mx-auto w-full max-w-6xl text-white">
            <nav
              aria-label="Brotkrümelnavigation"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/75"
            >
              <a href="/de" className="transition hover:text-white">
                Startseite
              </a>

              <span aria-hidden="true">/</span>

              <a
                href="/de/guides"
                className="transition hover:text-white"
              >
                Ratgeber
              </a>

              <span aria-hidden="true">/</span>

              <span>Idealista Spanien</span>
            </nav>

            <p className="text-sm uppercase tracking-[0.35em] text-[#d7b47a]">
              Immobilienportale in Spanien
            </p>

            <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
              Idealista Spanien: Probleme, veraltete Inserate und wichtige
              Prüfschritte.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              Warum Immobilienanzeigen auf Idealista, Fotocasa und anderen
              spanischen Portalen nicht immer aktuell oder vollständig sind und
              wie Käufer an der Costa Blanca Enttäuschungen vermeiden.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              <span>Nordic Move Spain</span>

              <span aria-hidden="true">·</span>

              <time dateTime={modifiedDate}>
                Aktualisiert am 13. Juni 2026
              </time>

              <span aria-hidden="true">·</span>

              <span>Ca. 12 Minuten Lesezeit</span>
            </div>
          </div>
        </header>

        {/* SCHNELLE ANTWORT */}
        <section className="px-8 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[36px] border border-[#c8a063]/25 bg-white p-10 shadow-sm md:p-14">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Kurz erklärt
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Ist Idealista in Spanien zuverlässig?
              </h2>

              <p className="mt-7 text-xl leading-relaxed text-stone-700">
                Idealista ist ein hilfreiches Portal zur Orientierung auf dem
                spanischen Immobilienmarkt. Käufer sollten ein Inserat jedoch
                nicht automatisch als aktuelle, vollständige oder rechtlich
                geprüfte Objektakte betrachten.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Die Informationen werden normalerweise von Maklern,
                Projektentwicklern oder privaten Verkäufern eingegeben.
                Verfügbarkeit, Preis, genaue Lage, Wohnfläche, Genehmigungen und
                mögliche Belastungen sollten deshalb vor einer Besichtigung
                oder Reservierung separat bestätigt werden.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-8 pb-24">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Idealista Immobilien in Spanien
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Immobilienportale sind ein guter Ausgangspunkt, aber keine
                vollständige Kaufprüfung.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Viele deutsche, niederländische, schweizerische und
                skandinavische Käufer beginnen ihre Suche nach einem Haus oder
                einer Wohnung in Spanien auf Idealista. Das Portal eignet sich
                gut, um Orte, Angebotspreise und verschiedene Immobilientypen
                kennenzulernen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Probleme entstehen vor allem dann, wenn Käufer davon ausgehen,
                dass jedes sichtbare Inserat aktuell verfügbar ist und alle
                Angaben bereits kontrolliert wurden. Der spanische
                Immobilienmarkt ist häufig dezentral organisiert. Ein
                Eigentümer kann mit mehreren Vermittlern arbeiten und dieselbe
                Immobilie kann mehrfach online erscheinen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Das bedeutet nicht, dass Immobilienportale grundsätzlich
                unzuverlässig sind. Es bedeutet, dass Käufer zwischen einer
                Online-Anzeige und einer bestätigten, dokumentierten und
                rechtlich geprüften Immobilie unterscheiden müssen.
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEME */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Häufige Probleme bei Idealista Spanien
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Warum ein interessantes Inserat nicht immer der aktuellen
                Realität entspricht.
              </h2>

              <p className="mt-7 max-w-4xl text-lg leading-relaxed text-stone-600">
                Die folgenden Situationen können bei Idealista, Fotocasa und
                anderen Immobilienportalen auftreten. Sie sind ein Grund zur
                Überprüfung, aber nicht automatisch ein Beweis für
                Unzuverlässigkeit oder Täuschung.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {portalProblems.map((problem) => (
                <article
                  key={problem.number}
                  className="rounded-[32px] bg-white p-9 shadow-sm"
                >
                  <p className="text-sm tracking-[0.3em] text-[#c8a063]">
                    {problem.number}
                  </p>

                  <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {problem.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    {problem.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WARUM */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Der spanische Immobilienmarkt
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Warum dieselbe Immobilie mehrfach und mit unterschiedlichen
              Informationen erscheinen kann.
            </h2>

            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  In einigen Regionen Spaniens arbeitet ein Eigentümer nicht
                  ausschließlich mit einem einzigen Makler. Mehrere Agenturen
                  können dasselbe Objekt gleichzeitig vermarkten.
                </p>

                <p>
                  Jede Agentur kann eigene Fotos, Übersetzungen und
                  Beschreibungen verwenden. Wird der Preis geändert oder das
                  Objekt reserviert, erreicht diese Information nicht
                  zwangsläufig jeden Anbieter zur gleichen Zeit.
                </p>

                <p>
                  Dadurch können Anzeigen entstehen, die äußerlich
                  unterschiedlich aussehen, obwohl es sich um dieselbe
                  Immobilie handelt.
                </p>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Zusätzlich wird die genaue Lage häufig absichtlich nicht
                  veröffentlicht. Das schützt die Privatsphäre des Eigentümers
                  und verhindert direkte Kontaktaufnahme, erschwert Käufern
                  aber die Beurteilung der Umgebung.
                </p>

                <p>
                  Ein Portal zeigt außerdem normalerweise nicht die
                  vollständige rechtliche Situation. Ob alle Gebäudeteile
                  registriert sind, Schulden bestehen oder bestimmte
                  Nutzungen erlaubt sind, ergibt sich erst aus offiziellen
                  Unterlagen und fachlicher Prüfung.
                </p>

                <p>
                  Deshalb sollte eine Online-Anzeige als Einladung zur weiteren
                  Untersuchung verstanden werden und nicht als abschließende
                  Entscheidungsgrundlage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VERGLEICH */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Portalangabe und Kaufprüfung
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Was ein Immobilienportal zeigt und was zusätzlich geprüft
                werden muss.
              </h2>
            </div>

            <div className="mt-12 overflow-x-auto rounded-[32px] bg-white shadow-sm">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead className="bg-[#1e2a3a] text-white">
                  <tr>
                    <th className="p-6 font-medium">
                      Information
                    </th>

                    <th className="p-6 font-medium">
                      Im Portal sichtbar
                    </th>

                    <th className="p-6 font-medium">
                      Zusätzlich kontrollieren
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="p-6 font-medium text-[#1e2a3a]">
                      Angebotspreis
                    </td>

                    <td className="p-6 text-stone-600">
                      Der veröffentlichte Preis
                    </td>

                    <td className="p-6 text-stone-600">
                      Aktueller Preis, enthaltene Ausstattung und mögliche
                      Zusatzkosten
                    </td>
                  </tr>

                  <tr>
                    <td className="p-6 font-medium text-[#1e2a3a]">
                      Standort
                    </td>

                    <td className="p-6 text-stone-600">
                      Ort oder ungefähres Kartenfeld
                    </td>

                    <td className="p-6 text-stone-600">
                      Genaue Lage, Zufahrt, Steigung, Lärm, Sonne und
                      Infrastruktur
                    </td>
                  </tr>

                  <tr>
                    <td className="p-6 font-medium text-[#1e2a3a]">
                      Wohnfläche
                    </td>

                    <td className="p-6 text-stone-600">
                      Vom Anbieter eingetragene Fläche
                    </td>

                    <td className="p-6 text-stone-600">
                      Grundbuch, Kataster, Bauunterlagen und registrierte
                      Flächen
                    </td>
                  </tr>

                  <tr>
                    <td className="p-6 font-medium text-[#1e2a3a]">
                      Verfügbarkeit
                    </td>

                    <td className="p-6 text-stone-600">
                      Anzeige erscheint online
                    </td>

                    <td className="p-6 text-stone-600">
                      Aktueller Verkaufs- oder Reservierungsstatus
                    </td>
                  </tr>

                  <tr>
                    <td className="p-6 font-medium text-[#1e2a3a]">
                      Rechtliche Situation
                    </td>

                    <td className="p-6 text-stone-600">
                      Meist nur begrenzte Angaben
                    </td>

                    <td className="p-6 text-stone-600">
                      Eigentum, Belastungen, Genehmigungen, Schulden und
                      Gemeinschaftsregeln
                    </td>
                  </tr>

                  <tr>
                    <td className="p-6 font-medium text-[#1e2a3a]">
                      Ferienvermietung
                    </td>

                    <td className="p-6 text-stone-600">
                      Manchmal als Möglichkeit erwähnt
                    </td>

                    <td className="p-6 text-stone-600">
                      Lizenz, kommunale Regeln und Beschlüsse der
                      Eigentümergemeinschaft
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CHECKLIST */}
        <section className="bg-[#e9dfd2] px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
                  Checkliste für Käufer
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Diese Fragen sollten Sie bei jedem Idealista-Inserat stellen.
                </h2>

                <p className="mt-7 text-lg leading-relaxed text-stone-700">
                  Eine gezielte Vorprüfung spart unnötige Besichtigungen und
                  verhindert, dass Sie sich auf ein Objekt konzentrieren, das
                  nicht verfügbar oder nicht passend ist.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {listingChecklist.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[30px] bg-white p-8 shadow-sm"
                  >
                    <h3 className="font-serif text-2xl leading-tight text-[#1e2a3a]">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-stone-600">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COSTA BLANCA */}
        <section className="px-8 py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Idealista Costa Blanca Nord
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Warum der Ortsname allein nicht genug über die Wohnlage sagt.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Bei einer Suche nach Immobilien in Moraira, Jávea, Altea,
                Benissa, Calpe oder Dénia werden häufig Objekte aus größeren
                Gemeindegebieten oder angrenzenden Urbanisationen angezeigt.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Zwei Immobilien mit demselben Ortsnamen können sich im Alltag
                deutlich unterscheiden. Fahrtzeit zum Zentrum, Steigung,
                Zufahrtsstraße, Wintersonne, Wind, Verkehrslärm und Entfernung
                zum Meer können großen Einfluss auf die Wohnqualität haben.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Prüfen Sie deshalb nicht nur den Ort, sondern das konkrete
                Wohngebiet. Ein günstigeres Objekt kann beispielsweise weiter
                entfernt liegen, eine anspruchsvolle Zufahrt haben oder
                zusätzliche Renovierungs- und Unterhaltskosten verursachen.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/de/regions"
                  className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
                >
                  Orte und Regionen vergleichen
                </a>

                <a
                  href="/de/services/area-match"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Persönliches Area Match
                </a>
              </div>
            </div>

            <img
              src="/images/legal.png"
              alt="Immobilien und Wohnlagen an der Costa Blanca Nord prüfen"
              className="h-[620px] w-full rounded-[36px] object-cover shadow-xl"
            />
          </div>
        </section>

        {/* SCHRITTE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm md:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Sicherer suchen
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Von der Idealista-Suche zur tatsächlich geprüften Immobilie.
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="border-l border-[#c8a063]/40 pl-6"
                >
                  <p className="text-sm tracking-[0.3em] text-[#c8a063]">
                    {step.number}
                  </p>

                  <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RODE VLAGGEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Warnsignale
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Wann Käufer besonders vorsichtig sein sollten.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-600">
                Ein einzelnes Warnsignal bedeutet nicht automatisch, dass ein
                Objekt ungeeignet ist. Mehrere unklare oder widersprüchliche
                Antworten sollten jedoch Anlass für zusätzliche Prüfung sein.
              </p>
            </div>

            <div className="rounded-[36px] bg-[#1e2a3a] p-10 text-white md:p-12">
              <ul className="space-y-6">
                {redFlags.map((flag) => (
                  <li
                    key={flag}
                    className="flex gap-4 border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 text-xl text-[#d7b47a]"
                    >
                      !
                    </span>

                    <span className="leading-relaxed text-white/85">
                      {flag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* RECHTLICHER HINWEIS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#e9dfd2] p-10 md:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              Rechtliche und technische Prüfung
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Eine schöne Anzeige sagt nichts über die rechtliche Sicherheit
              des Kaufs aus.
            </h2>

            <div className="mt-10 grid gap-10 text-lg leading-relaxed text-stone-700 lg:grid-cols-2">
              <div className="space-y-6">
                <p>
                  Gute Fotos, Meerblick und eine hochwertige Beschreibung
                  ersetzen keine Kontrolle von Grundbuch, Kataster,
                  Baugenehmigungen und möglichen Belastungen.
                </p>

                <p>
                  Lassen Sie die Immobilie durch einen unabhängigen Anwalt
                  prüfen, der ausschließlich Ihre Interessen vertritt. Bei
                  älteren, renovierten oder erweiterten Immobilien kann
                  zusätzlich eine technische Begutachtung sinnvoll sein.
                </p>
              </div>

              <div className="space-y-6">
                <p>
                  Besondere Aufmerksamkeit verdienen nicht registrierte
                  Anbauten, Pools, Terrassenüberdachungen, Gästehäuser oder
                  veränderte Innenaufteilungen.
                </p>

                <p>
                  Auch offene Gemeinschaftskosten, kommunale Verfahren,
                  Küstenschutzbestimmungen oder Einschränkungen bei der
                  Ferienvermietung können die Nutzung und den Wert beeinflussen.
                </p>
              </div>
            </div>

            <p className="mt-10 rounded-[24px] bg-white/70 p-6 text-sm leading-relaxed text-stone-600">
              Hinweis: Diese Seite bietet allgemeine Orientierung und ersetzt
              keine individuelle rechtliche, steuerliche, technische oder
              finanzielle Beratung.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Häufig gestellte Fragen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Fragen zu Idealista, Immobilienportalen und dem Hauskauf in
              Spanien.
            </h2>

            <div className="mt-12 space-y-5">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[28px] bg-white p-7 shadow-sm"
                >
                  <summary className="cursor-pointer list-none font-serif text-2xl leading-tight text-[#1e2a3a]">
                    <span className="flex items-center justify-between gap-6">
                      {item.question}

                      <span className="text-[#c8a063] transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>

                  <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* VERWANTE RATGEBER */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-4xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Weiterführende Informationen
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Weitere Ratgeber zum Immobilienkauf in Spanien.
                </h2>
              </div>

              <a
                href="/de/guides"
                className="w-fit rounded-full border border-[#1e2a3a] px-7 py-3 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Alle Ratgeber ansehen
              </a>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {relatedGuides.map((guide) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                    {guide.label}
                  </p>

                  <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {guide.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    {guide.text}
                  </p>

                  <span className="mt-8 inline-block text-sm uppercase tracking-[0.2em] text-[#1e2a3a]">
                    Ratgeber lesen →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 pb-32">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-12 text-center text-white md:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d7b47a]">
              Persönliche Orientierung
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl font-serif text-5xl leading-tight">
              Suchen Sie eine tatsächlich passende Immobilie an der Costa
              Blanca Nord?
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
              Nordic Move Spain hilft internationalen Käufern, passende Orte zu
              vergleichen, Immobilienangebote gezielter zu prüfen und den
              Kaufprozess mit mehr Klarheit vorzubereiten.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/de/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Persönliches Gespräch vereinbaren
              </a>

              <a
                href="/de/services/area-match"
                className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
              >
                Area Match entdecken
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}