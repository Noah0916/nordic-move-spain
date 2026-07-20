export const metadata = {
  title:
    "Area Match & sicher kaufen an der Costa Blanca Nord | Kostenloser persönlicher Bericht | Nordic Move Spain",
  description:
    "Finden Sie zuerst heraus, welche Umgebung und welche Immobilie zu Ihnen passen. Starten Sie den ausführlichen Area-Match-Fragebogen und erhalten Sie kostenlos einen persönlichen Bericht mit gezielten Informationen zum Wohnen und Kaufen an der Costa Blanca Nord.",
  keywords: [
    "Area Match Costa Blanca Nord",
    "kostenloser Area-Match-Bericht",
    "Begleitung beim Immobilienkauf in Spanien",
    "Haus kaufen Costa Blanca Nord",
    "Buyer Discovery Tour Spanien",
    "Immobilie in Spanien sicher kaufen",
    "Käuferbegleitung Spanien",
    "Nordic Move Spain",
  ],
  alternates: {
    canonical: "/de/services/area-match",
    languages: {
      en: "/services/area-match",
      nl: "/nl/services/area-match",
      de: "/de/services/area-match",
      sv: "/sv/services/area-match",
    },
  },
  openGraph: {
    title: "Area Match & sicher kaufen an der Costa Blanca Nord",
    description:
      "Füllen Sie den ausführlichen Area-Match-Fragebogen aus und erhalten Sie kostenlos einen persönlichen Bericht über die Umgebung, den Lebensstil und die Immobilie, die zu Ihnen passen.",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/area-match.png",
        width: 1200,
        height: 630,
        alt: "Area Match und sicher eine Immobilie an der Costa Blanca Nord kaufen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Area Match & sicher kaufen an der Costa Blanca Nord",
    description:
      "Ein kostenloser persönlicher Area-Match-Bericht, eine gezielte Immobilienauswahl und Begleitung für internationale Käufer an der Costa Blanca Nord.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const questionnaireUrl = "/de/relocation-assessment";
const contactUrl = "/de/contact";

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Kontakt",
      item: "https://www.nordicmovespain.com/de/contact",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Relocation Assessment",
      item: "https://www.nordicmovespain.com/de/relocation-assessment",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Area Match & sicher kaufen",
      item: "https://www.nordicmovespain.com/de/relocation-assessment",
    },
  ],
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Area Match & sicher kaufen an der Costa Blanca Nord",
  serviceType:
    "Persönliche Standortanalyse, Immobilienauswahl und Käuferbegleitung",
  description:
    "Ein kostenloser persönlicher Area-Match-Bericht auf Grundlage eines ausführlichen Fragebogens, gefolgt von einem persönlichen Gespräch, einer gezielten Immobilienauswahl und optionaler Begleitung bei Besichtigungen.",
  provider: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "https://www.nordicmovespain.com",
  },
  areaServed: [
    "Costa Blanca Nord",
    "Dénia",
    "Jávea",
    "Moraira",
    "Benissa",
    "Calpe",
    "Altea",
  ],
  audience: {
    "@type": "Audience",
    audienceType:
      "Internationale Käufer, Zweitwohnungskäufer, Familien, Ruheständler und Investoren",
  },
  offers: {
    "@type": "Offer",
    name: "Kostenloser persönlicher Area-Match-Bericht",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://www.nordicmovespain.com/de/relocation-assessment",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist die Area Match?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Area Match ist eine umfassende persönliche Analyse Ihrer Wünsche, Bedürfnisse, Ihres Lebensstils und Ihrer Zukunftspläne. Auf dieser Grundlage erhalten Sie kostenlos einen Bericht über die Umgebung und den Immobilientyp, der voraussichtlich am besten zu Ihnen passt.",
      },
    },
    {
      "@type": "Question",
      name: "Wo kann ich den Fragebogen ausfüllen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Den deutschsprachigen Fragebogen finden Sie unter https://www.nordicmovespain.com/de/relocation-assessment. Alle Schaltflächen auf dieser Seite, die auf den Fragebogen verweisen, führen dorthin.",
      },
    },
    {
      "@type": "Question",
      name: "Ist der Area-Match-Bericht wirklich kostenlos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Der persönliche Area-Match-Bericht ist kostenlos und mit keiner Kaufverpflichtung verbunden.",
      },
    },
    {
      "@type": "Question",
      name: "Was geschieht nach dem Bericht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach Erhalt des Berichts vereinbaren wir ein persönliches Folgegespräch. Anschließend suchen wir gemeinsam mit Maklern aus unserem Netzwerk nach Immobilien, die Ihren Suchkriterien, Wünschen und Bedürfnissen entsprechen.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist die Buyer Discovery Tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Während der Buyer Discovery Tour lernen Sie passende Regionen, Immobilien und lokale Einrichtungen kennen. Wo es sinnvoll ist, bringen wir Sie auch mit gleichgesinnten internationalen Käufern oder Bewohnern mit ähnlichen Interessen und Hintergründen in Kontakt.",
      },
    },
  ],
};

export default function AreaMatchPage() {
  const quickFacts = [
    {
      title: "Ausführlicher Fragebogen",
      text: "Wir erfassen Ihre Wohnwünsche, Ihren Lebensstil, Ihre praktischen Bedürfnisse, Ihr Budget, Ihre Bedenken und Ihre Zukunftspläne sorgfältig.",
    },
    {
      title: "Kostenloser Bericht",
      text: "Sie erhalten ohne Kaufverpflichtung einen persönlichen Bericht über die Umgebung und den Immobilientyp, der voraussichtlich zu Ihnen passt.",
    },
    {
      title: "Gezielte Immobilienauswahl",
      text: "Auf Grundlage Ihres Profils suchen wir gemeinsam mit Maklern aus unserem Netzwerk nach Immobilien, die Ihren Kriterien entsprechen.",
    },
    {
      title: "Persönliche Begleitung",
      text: "Wählen Sie private Besichtigungen oder unsere begleitete Buyer Discovery Tour mit besonderem Augenmerk auf Umgebung, Lebensstil und Netzwerk.",
    },
  ];

  const reportItems = [
    "Persönliche Übereinstimmung mit Orten und Wohnlagen",
    "Immobilientyp, Raumaufteilung, Privatsphäre und Außenbereich",
    "Lebensstil, tägliches Wohnumfeld und soziale Wünsche",
    "Ruhe, Lebendigkeit, saisonale Auslastung und mögliche Lärmbelastung",
    "Sicherheit und praktische Aspekte in der Umgebung",
    "Ärzte, Krankenhäuser, Apotheken und Zugang zur Gesundheitsversorgung",
    "Internationale und lokale Schulen",
    "Restaurants, lokale Küche, Märkte und Kultur",
    "Einwohner, Bevölkerungsstruktur und internationale Gemeinschaft",
    "Sport, Golf, Wellness, Natur und Freizeit",
    "Erreichbarkeit, Flughafen, öffentlicher Verkehr und tägliche Versorgung",
    "Mögliche Aspekte wie steile Zufahrten, stark befahrene Straßen oder eine abgelegene Lage",
  ];

  const questionnaireThemes = [
    {
      title: "Lebensstil",
      text: "Ruhe oder Lebendigkeit, Strand oder Zentrum, Natur, Gastronomie, Sport, Kultur und der Tagesrhythmus, der zu Ihnen passt.",
    },
    {
      title: "Praktisches Wohnen",
      text: "Erreichbarkeit, Einkaufsmöglichkeiten, Gesundheitsversorgung, Schulen, Mobilität, Instandhaltung und Eignung für dauerhaftes oder zeitweises Wohnen.",
    },
    {
      title: "Persönliche Situation",
      text: "Familie, Ruhestand, Zweitwohnsitz, Haustiere, soziale Kontakte, Mobilität und langfristige Pläne.",
    },
    {
      title: "Immobilie und Budget",
      text: "Immobilientyp, Schlafzimmer, Privatsphäre, Aussicht, Außenbereich, Vermietungswünsche, laufende Kosten, Instandhaltung und finanzielle Grenzen.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Füllen Sie den ausführlichen Fragebogen aus",
      text: "Über unseren deutschsprachigen Area-Match-Fragebogen teilen Sie uns Ihre Wohnwünsche, Bedürfnisse, Präferenzen, Bedenken und Zukunftspläne mit.",
    },
    {
      number: "02",
      title: "Erhalten Sie Ihren persönlichen Bericht",
      text: "Wir verbinden Ihre Antworten mit Marktforschung, lokalem Wissen, relevanten Daten und praktischer Erfahrung mit internationalen Käufern.",
    },
    {
      number: "03",
      title: "Besprechen Sie die Ergebnisse persönlich",
      text: "In einem Folgegespräch gehen wir ausführlicher auf Ihre Wünsche, Zweifel, Prioritäten und Punkte ein, die Sie unbedingt vermeiden möchten.",
    },
    {
      number: "04",
      title: "Erhalten Sie eine passende Immobilienauswahl",
      text: "Wir beziehen unser Maklernetzwerk ein und stellen Immobilien zusammen, die Ihren Suchkriterien, Wünschen und Bedürfnissen möglichst genau entsprechen.",
    },
    {
      number: "05",
      title: "Wählen Sie Ihre Art der Besichtigung",
      text: "Sie können private Besichtigungen wählen, bei denen Sie Ihre Reise selbst organisieren und wir die Termine planen, oder sich für die begleitete Buyer Discovery Tour entscheiden.",
    },
    {
      number: "06",
      title: "Gehen Sie gezielt in Richtung Kauf weiter",
      text: "Sobald eine Immobilie ernsthaft infrage kommt, organisieren wir eine technische Prüfung durch einen unabhängigen Bausachverständigen und eine rechtliche Due Diligence durch einen geeigneten unabhängigen Rechtsanwalt.",
    },
  ];

  const privateViewingItems = [
    "Sie organisieren Flug, Unterkunft und Transport selbst",
    "Wir planen die Immobilienbesichtigungen",
    "Die Auswahl basiert auf Ihrem Area-Match-Profil",
    "Geeignet für Käufer, die selbstständig reisen möchten",
  ];

  const discoveryTourItems = [
    "Besuchen Sie passende Orte, Wohnlagen und Immobilien",
    "Gewinnen Sie ein Gefühl für das tägliche Lebensumfeld",
    "Entdecken Sie Versorgung, Gesundheitsangebote, Schulen, Gastronomie und lokale Kultur",
    "Treffen Sie nach Möglichkeit gleichgesinnte internationale Käufer oder Bewohner",
    "Profitieren Sie von Begleitung und einem persönlich zusammengestellten Programm",
  ];

  const professionals = [
    {
      title: "Technische Prüfung durch einen unabhängigen Bausachverständigen",
      text: "Der Bausachverständige beurteilt den sichtbaren und zugänglichen technischen Zustand der Immobilie. Dabei werden unter anderem Baumängel, Feuchtigkeit und Wassereintritt, Installationen, Pool, Nebengebäude und Grundstück geprüft. Die Immobilie wird vermessen, und notwendige Reparaturen oder weiterführende Untersuchungen werden dokumentiert.",
    },
    {
      title: "Abgleich mit Dokumenten und Registern",
      text: "Der Bausachverständige vergleicht die tatsächliche Immobilie und die gemessenen Flächen mit den verfügbaren Informationen, etwa der Nota Simple, dem Kataster, Maklerangaben, dem Energieausweis, der ITE sowie vorgelegten Planungs-, Bescheinigungs- und Genehmigungsunterlagen. Mögliche Abweichungen bei Flächen, Anbauten, Garagen, Pools, Eintragungen oder Genehmigungen werden so frühzeitig erkannt.",
    },
    {
      title: "Rechtliche Due Diligence durch einen unabhängigen Rechtsanwalt",
      text: "Wir vermitteln und koordinieren einen unabhängigen Rechtsanwalt, der zu Ihrer Sprache, Situation und Ihren Bedürfnissen passt und über Erfahrung im spanischen Immobilienrecht verfügt. Der Rechtsanwalt prüft unter anderem Eigentum, Nota Simple, Belastungen, Schulden, Genehmigungen, Verträge, rechtliche Risiken und die Bedingungen der Übertragung vor der Unterzeichnung.",
    },
    {
      title: "Eine klare Kaufempfehlung",
      text: "Wir organisieren beide Prüfungswege, verfolgen fehlende Informationen und führen die wichtigsten Erkenntnisse zusammen. Auf Grundlage der technischen Prüfung und der rechtlichen Due Diligence empfehlen wir: fortfahren, neu bewerten oder nicht kaufen.",
    },
  ];

  const buyerGuidancePrinciples = [
    {
      number: "01",
      title: "Schriftlicher Leistungsumfang",
      text: "Vor Beginn wird festgehalten, welche Aufgaben Nordic Move übernimmt, welche Entscheidungen bei Ihnen bleiben und welche externen Spezialisten benötigt werden.",
    },
    {
      number: "02",
      title: "Klare Rollenverteilung",
      text: "Nordic Move koordiniert den Käuferprozess. Rechtliche, steuerliche, technische oder bewertungsbezogene Fachberatung bleibt bei den dafür qualifizierten Spezialisten.",
    },
    {
      number: "03",
      title: "Transparente Vergütung",
      text: "Honorare, mögliche Vermittlungsbeziehungen und externe Kosten werden vor dem jeweiligen Auftrag schriftlich erläutert, damit Interessen und Zuständigkeiten nachvollziehbar bleiben.",
    },
    {
      number: "04",
      title: "Dokumentierte Entscheidungspunkte",
      text: "Offene Fragen, Risiken und nächste Schritte werden gebündelt. So können Sie bewusst fortfahren, Bedingungen stellen, neu verhandeln oder Abstand nehmen.",
    },
  ];

  const faqs = [
    {
      question: "Was ist die Area Match?",
      answer:
        "Die Area Match ist eine umfassende Analyse, die Ihre Wünsche und Bedürfnisse für eine Immobilie in Spanien erfasst. Die Fragen wurden auf Grundlage von Gesprächen mit Käufern vor und nach ihrem Umzug entwickelt und durch Marktforschung, lokales Wissen und relevante Daten ergänzt.",
    },
    {
      question: "Was erhalte ich nach dem Ausfüllen?",
      answer:
        "Sie erhalten kostenlos einen persönlichen Bericht über die Umgebung und den Immobilientyp, der zu Ihnen passt. Abhängig von Ihrem Profil kann er Informationen über Einwohner, lokale Küche, Bevölkerungsstruktur, Ärzte, Krankenhäuser, Schulen, Versorgung, Erreichbarkeit, Lebensstil und mögliche Aspekte enthalten.",
    },
    {
      question: "Wo finde ich den deutschsprachigen Fragebogen?",
      answer:
        "Der Fragebogen befindet sich unter /de/relocation-assessment. Alle relevanten Schaltflächen auf dieser Seite führen direkt zu dieser deutschsprachigen Version.",
    },
    {
      question: "Was geschieht nach dem persönlichen Gespräch?",
      answer:
        "Auf Grundlage aller gesammelten Informationen suchen wir gemeinsam mit Maklern aus unserem Netzwerk nach Immobilien, die Ihren Kriterien, Wünschen und Bedürfnissen entsprechen.",
    },
    {
      question: "Kann ich nur Besichtigungen organisieren lassen?",
      answer:
        "Ja. Bei privaten Besichtigungen organisieren Sie Reise, Unterkunft und Transport selbst. Wir stimmen die Immobilienauswahl ab und planen die Besichtigungen für Sie.",
    },
    {
      question: "Wird die Buyer Discovery Tour beim Kauf erstattet?",
      answer:
        "Beim Kauf einer Immobilie über uns kann abhängig vom Kaufpreis und den geltenden Bedingungen die Hälfte oder die gesamte Tour erstattet werden. Maßgeblich sind stets die aktuellen Bedingungen.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
        <section className="px-8 py-28">
          <div className="mx-auto max-w-6xl">
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex flex-wrap items-center gap-2 text-sm text-stone-500"
            >
              <a href={contactUrl} className="transition hover:text-[#1e2a3a]">
                Kontakt
              </a>
              <span aria-hidden="true">/</span>
              <a
                href={questionnaireUrl}
                className="transition hover:text-[#1e2a3a]"
              >
                Relocation Assessment
              </a>
              <span aria-hidden="true">/</span>
              <span className="text-stone-700">
                Area Match &amp; sicher kaufen
              </span>
            </nav>

            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Persönliche Area Match
            </p>

            <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
              Finden Sie zuerst heraus, wo und wie Sie wohnen möchten. Suchen Sie erst
              danach nach der richtigen Immobilie.
            </h1>

            <p className="mt-10 max-w-5xl text-xl leading-relaxed text-stone-600">
              Unsere Area Match ist ein ausführlicher Fragebogen, der Ihre Wünsche und
              Bedürfnisse für eine Immobilie in Spanien sorgfältig erfasst. Der
              Fragebogen basiert auf Interviews mit Käufern, die wir vor und nach
              ihrem Umzug gefragt haben, was sie gern früher gewusst hätten und zu
              welchen Themen sie mehr Informationen benötigt hätten.
            </p>

            <p className="mt-6 max-w-5xl text-xl leading-relaxed text-stone-600">
              Auf Grundlage Ihrer Antworten, unserer Marktforschung, lokalem Wissen und
              relevanter Daten erhalten Sie einen ausführlichen und kostenlosen Bericht
              über die Umgebung und den Immobilientyp, der zu Ihnen passt. Der Bericht
              kann unter anderem Umgebung, Einwohner, lokale Küche, Bevölkerungsstruktur,
              Ärzte, Krankenhäuser, Schulen, Versorgung, Erreichbarkeit und Lebensstil behandeln.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={questionnaireUrl}
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Deutschsprachigen Fragebogen starten
              </a>

              <a
                href={contactUrl}
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Persönliche Beratung anfragen
              </a>
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {quickFacts.map((fact) => (
                <div
                  key={fact.title}
                  className="rounded-[28px] bg-white p-7 shadow-sm"
                >
                  <h2 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {fact.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {fact.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-10 text-white shadow-sm md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ein Fragebogen, der weiterdenkt
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
              Nicht nur fragen, was Ihnen gefällt, sondern verstehen, was in der Praxis
              zu Ihnen passt.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-white/80">
              Viele Käufer beginnen mit Fotos, Ortsnamen und Immobilienportalen. Wir
              drehen diese Reihenfolge um. Zuerst erfassen wir Ihren Alltag, Ihre
              Präferenzen, Grenzen und Zukunftspläne. Danach bestimmen wir, welche
              Regionen und Immobilien wirklich infrage kommen.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {questionnaireThemes.map((theme) => (
                <div
                  key={theme.title}
                  className="rounded-[28px] bg-white/10 p-7"
                >
                  <h3 className="font-serif text-2xl leading-tight text-white">
                    {theme.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    {theme.text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={questionnaireUrl}
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Fragebogen ausfüllen
            </a>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ihr persönlicher Bericht
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Informationen zum Wohnen, Leben und Kaufen, die zu Ihrer persönlichen
              Situation passen.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
              Sie erhalten keine allgemeine Übersicht, die für alle gleich ist. Wir
              übertragen Ihre Antworten in einen persönlichen Ausgangspunkt für die
              richtigen Orte, Wohnlagen und Immobilientypen.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {reportItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#f6f1ea] p-5 leading-relaxed text-stone-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-600">
              Nach Erhalt des Berichts vereinbaren wir ein persönliches Folgegespräch.
              Darin vertiefen wir Ihre Wünsche, beantworten Fragen und bestimmen
              gemeinsam, welcher nächste Schritt am besten zu Ihnen passt.
            </p>
          </div>
        </section>

        <section id="arbeitsweise" className="scroll-mt-24 px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Von der Area Match zur passenden Immobilie
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Ein klarer Weg von der persönlichen Analyse zu gezielten
                Besichtigungen.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-600">
                Alle Schritte bauen auf denselben Informationen auf. Dadurch suchen wir
                nicht breiter, sondern intelligenter und gezielter.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[32px] bg-white p-8 shadow-sm md:p-9"
                >
                  <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                    {step.number}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {step.title}
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#e9dfd2] p-10 shadow-sm md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Nachvollziehbare Käuferbegleitung
            </p>

            <h2 className="mt-6 max-w-5xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Sie sollten vor dem Start wissen, wer welche Rolle übernimmt und wie
              Interessen offengelegt werden.
            </h2>

            <div className="mt-8 max-w-5xl space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                Hochwertige Käuferbegleitung beginnt nicht mit großen Versprechen,
                sondern mit einem nachvollziehbaren Mandat, dokumentierten
                Zuständigkeiten und klarer Kommunikation.
              </p>
              <p>
                Eine Villa kann online überzeugend wirken und dennoch nicht zu Ihrem
                Alltag, Ihrer Nutzung oder Ihren Zukunftsplänen passen. Ebenso können
                rechtliche, technische oder praktische Fragen zu spät sichtbar werden,
                wenn die emotionale Entscheidung bereits gefallen ist.
              </p>
              <p>
                Deshalb strukturieren wir den Prozess anders: zuerst Anforderungen und
                Teilregionen verstehen, dann gezielt auswählen, anschließend fachlich
                prüfen und erst danach eine belastbare Kaufentscheidung treffen.
              </p>
              <p>
                Unser Wert liegt nicht darin, Ihnen möglichst viele Häuser zu zeigen.
                Unser Wert liegt darin, die Qualität Ihrer Entscheidung zu erhöhen und
                unnötige Besichtigungen, blinde Flecken und unklare Zuständigkeiten zu
                reduzieren.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {buyerGuidancePrinciples.map((item) => (
                <div
                  key={item.number}
                  className="rounded-[28px] bg-white/80 p-8 shadow-sm"
                >
                  <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                    {item.number}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {item.title}
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={contactUrl}
                className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#15202d]"
              >
                Kontakt aufnehmen
              </a>
              <a
                href={questionnaireUrl}
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Relocation Assessment starten
              </a>
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Zwei Wege, Immobilien zu besichtigen
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Selbstständig reisen oder vollständig begleitet entdecken.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[36px] bg-white p-9 shadow-sm md:p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Private Besichtigungen
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Sie organisieren die Reise, wir organisieren die Immobilien.
                </h3>
                <p className="mt-6 leading-relaxed text-stone-600">
                  Diese Option passt zu Käufern, die selbstständig reisen möchten und vor
                  allem Unterstützung bei der Immobilienauswahl und der Planung der
                  Besichtigungen wünschen.
                </p>
                <div className="mt-8 grid gap-3">
                  {privateViewingItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-[#f6f1ea] p-4 text-stone-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[36px] bg-[#1e2a3a] text-white shadow-sm">
                <div className="relative min-h-[280px]">
                  <img
                    src="/images/discover-card.png"
                    alt="Buyer Discovery Tour an der Costa Blanca Nord"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="p-9 md:p-10">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                    Buyer Discovery Tour
                  </p>
                  <h3 className="mt-5 font-serif text-4xl leading-tight">
                    Erleben Sie nicht nur die Immobilie, sondern auch das Leben rundherum.
                  </h3>
                  <p className="mt-6 leading-relaxed text-white/80">
                    Während dieser begleiteten Tour lernen Sie passende Regionen,
                    Einrichtungen und Immobilien kennen. Wo es sinnvoll ist, bringen
                    wir Sie auch mit gleichgesinnten internationalen Käufern oder
                    Bewohnern mit ähnlichen Interessen und Hintergründen in Kontakt.
                  </p>

                  <div className="mt-8 grid gap-3">
                    {discoveryTourItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-white/10 p-4 text-white/85"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <p className="mt-8 text-sm leading-relaxed text-white/65">
                    Beim Kauf einer Immobilie über uns kann abhängig vom Kaufpreis und den
                    geltenden Bedingungen die Hälfte oder die gesamte Tour erstattet
                    werden. Maßgeblich sind die jeweils aktuellen Bedingungen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[420px]">
                <img
                  src="/images/legal.png"
                  alt="Unabhängige Prüfungen beim Kauf einer Immobilie in Spanien"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Sicher weiter in Richtung Kauf
                </p>
                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                  Sobald eine Immobilie ernsthaft infrage kommt, beginnt die eigentliche Prüfung.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-white/85">
                  Die Area Match und die Immobilienauswahl helfen Ihnen zunächst, gezielt zu
                  suchen. Bei einer konkreten Immobilie ist es sinnvoll, rechtliche,
                  technische und administrative Risiken vor dem Kauf prüfen zu lassen.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  Dazu gehören Eigentum, Genehmigungen, Erweiterungen, Grundstücksgrenzen,
                  sichtbare Mängel, Feuchtigkeit, Installationen, Gemeinschaftsregeln,
                  jährliche Kosten und mögliche Einschränkungen für Nutzung oder Vermietung.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Unabhängige Spezialisten
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Zwei unabhängige Prüfungen, zusammengeführt in einer klaren Empfehlung.
              </h2>
              <p className="mt-8 text-xl leading-relaxed text-stone-600">
                Bei Nordic Move erhalten Sie nicht nur eine allgemeine Einschätzung, sondern
                zwei getrennte Berichte unabhängiger Fachleute: eine technische Prüfung
                durch einen Bausachverständigen und eine rechtliche Due Diligence durch
                einen geeigneten unabhängigen Rechtsanwalt. Wir organisieren beide Wege,
                verfolgen fehlende Informationen und führen die wichtigsten Ergebnisse
                zu einer klaren Kaufempfehlung zusammen.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {professionals.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[32px] bg-white p-8 shadow-sm"
                >
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {item.title}
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Mehr als eine Immobiliensuche
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Die richtige Umgebung ist mindestens so wichtig wie die Immobilie selbst.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Eine Immobilie kann auf Fotos perfekt wirken, während der Alltag nicht
                Ihren Erwartungen entspricht. Vielleicht ist die Region im Winter zu
                ruhig, die Gesundheitsversorgung zu weit entfernt, die Zufahrt zu steil
                oder die Umgebung belebter als gedacht.
              </p>
              <p className="mt-6">
                Deshalb betrachten wir die Kombination aus Immobilie, Umgebung,
                Erreichbarkeit, Versorgung, sozialen Möglichkeiten, Jahreszeiten und
                praktischer Eignung für die kommenden Jahre.
              </p>
              <p className="mt-6">
                So vermeiden Sie, sich nur in ein Haus zu verlieben und erst später
                festzustellen, dass die Lage nicht zu Ihrem Leben passt.
              </p>
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#e9dfd2] p-10 md:p-14 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Vertrauen &amp; Begleitung
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Nordic Move Spain
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  Wir begleiten internationale Käufer dabei, eine passende Umgebung, eine
                  gezielte Immobilienauswahl und einen besser vorbereiteten Kauf an der
                  Costa Blanca Nord zu realisieren.
                </p>
                <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-[#1e2a3a]">
                  Zuletzt aktualisiert: Juli 2026
                </p>
              </div>

              <div className="rounded-[32px] bg-white/80 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Kaufempfehlung
                </p>
                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  Fortfahren, neu bewerten oder nicht kaufen.
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  Der unabhängige Bausachverständige beurteilt den technischen Zustand, und
                  der unabhängige Rechtsanwalt führt die rechtliche Due Diligence durch.
                  Wir koordinieren beide Wege, erkennen fehlende Informationen und
                  übersetzen die gemeinsamen Erkenntnisse in eine klare Kaufempfehlung.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Häufig gestellte Fragen
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Fragen zur Area Match und zu unserer Arbeitsweise.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[28px] bg-white p-8 shadow-sm"
                >
                  <h3 className="font-serif text-2xl leading-tight text-[#1e2a3a]">
                    {faq.question}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 text-center shadow-sm md:p-14 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Kostenlos und unverbindlich beginnen
            </p>
            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Entdecken Sie, welche Umgebung, Immobilie und welcher nächste Schritt am
              besten zu Ihrer Zukunft in Spanien passen.
            </h2>
            <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              Füllen Sie den deutschsprachigen Area-Match-Fragebogen aus und erhalten Sie
              Ihren persönlichen Bericht. Anschließend vereinbaren wir ein Folgegespräch,
              in dem wir die Ergebnisse und den besten nächsten Schritt gemeinsam besprechen.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={questionnaireUrl}
                className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#15202d]"
              >
                Deutschsprachigen Fragebogen starten
              </a>

              <a
                href={contactUrl}
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}