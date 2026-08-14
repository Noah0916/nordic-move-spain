import type { Metadata } from "next";

const pagePath = "/de/services/area-match";

export const metadata: Metadata = {
  title:
    "Unabhängige Kaufbegleitung Costa Blanca | Nordic Move Spain",
  description:
    "Nordic Move Spain vertritt Sie unabhängig als Käuferpartei. Wir akzeptieren keine Verkaufsprovision von der Verkäuferseite und begleiten Sie von Area Match und Immobiliensuche bis zu Kaufprüfung, Umzug und Einrichtung an der Costa Blanca.",
  keywords: [
    "Area Match Costa Blanca",
    "persönliche Kaufbegleitung Costa Blanca",
    "Immobilie kaufen Costa Blanca",
    "Buyer Discovery Experience Spanien",
    "Kaufbegleitung Immobilie Spanien",
    "Purchase Safety Report Spanien",
    "unabhängige technische Immobilienprüfung Spanien",
    "spanischer Immobilienanwalt",
    "Koordination Umzugsunternehmen Spanien",
    "Move-In Ready Costa Blanca",
    "Nordic Move Spain",
  ],
  alternates: {
    canonical: pagePath,
    languages: {
      "en-GB": "/services/area-match",
      "nl-NL": "/nl/services/area-match",
      "de-DE": pagePath,
      "sv-SE": "/sv/services/area-match",
    },
  },
  openGraph: {
    title:
      "Unabhängige Kaufbegleitung Costa Blanca | Nordic Move Spain",
    description:
      "Unabhängige Begleitung für die Käuferseite: von Area Match und Immobiliensuche bis zu Besichtigungen, Kaufprüfungen, Umzug und Einrichtung.",
    type: "website",
    locale: "de_DE",
    url: pagePath,
    images: [
      {
        url: "/images/brochure2-en.png",
        alt: "Nordic Move Spain Leistungen für einen koordinierten Immobilienkauf an der Costa Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Area Match, Buyer Discovery & umfassende Kaufbegleitung | Nordic Move Spain",
    description:
      "Unabhängige Kaufbegleitung mit einem festen Ansprechpartner – von Area Match und Immobiliensuche bis zu Purchase Safety, Umzug und Einrichtung.",
    images: ["/images/brochure2-en.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    number: "01",
    eyebrow: "Kostenlose Orientierung",
    title: "Area Match Portfolio",
    text:
      "Sie erhalten ein kostenloses, ausführliches und persönliches Portfolio, das zeigt, welche Regionen, Orte und Immobilientypen am besten zu Ihrem Lebensstil, Budget und Ihren langfristigen Plänen passen. So entsteht Klarheit, bevor Sie monatelang nach Immobilien suchen, die nicht zu Ihnen passen.",
    bullets: [
      "Persönliche Abstimmung auf Lebensstil und Lage",
      "Informationen zu geeigneten Orten und Wohnlagen",
      "Einblick in Infrastruktur, Gesundheitsversorgung, Erreichbarkeit und Alltag",
      "Mehr Klarheit über den Immobilientyp, der wirklich zu Ihnen passt",
      "Eine gezielte Grundlage für Ihre Immobiliensuche und Besichtigungen",
    ],
    href: "/de/relocation-assessment",
    cta: "Kostenloses Area Match Portfolio anfordern",
  },
  {
    number: "02",
    eyebrow: "Persönliche Immobiliensuche",
    title: "Buyer Discovery Experience",
    text:
      "Nach Ihrem Area Match vertreten wir Sie als Käuferpartei. Wir suchen und wählen passende Immobilien am Markt aus, stellen eine gezielte Discovery-Route zusammen und begleiten Sie bei Besichtigungen, Kommunikation, Verhandlungen und Kauf. Wir akzeptieren keine Verkaufsprovision von der Verkäuferseite.",
    bullets: [
      "Eine persönliche Route durch passende Gebiete",
      "Gezielte Immobiliensuche und Auswahl",
      "Besichtigungen abgestimmt auf Ihr Profil und Ihre Prioritäten",
      "Kommunikation mit Verkäufern und Verkäufermaklern",
      "Begleitung bei Verhandlungen und im Kaufprozess",
    ],
    href: "/de/services/discovery-trips",
    cta: "Buyer Discovery Experience ansehen",
  },
  {
    number: "03",
    eyebrow: "Unabhängige Kaufprüfung",
    title: "Purchase Safety",
    text:
      "Wenn eine Immobilie ernsthaft infrage kommt, koordinieren wir einen unabhängigen Bausachverständigen für die technische Prüfung und eine erste Kontrolle von Unterlagen und Registern sowie einen unabhängigen spanischen Anwalt für die vollständige rechtliche Due Diligence.",
    bullets: [
      "Sichtbarer technischer Zustand, Bauqualität, Feuchtigkeit und Installationen",
      "Pool, Nebengebäude, Reparaturpunkte, Fotos und Empfehlungen",
      "Nota Simple, Catastro, IBI, CEE und ITE, soweit relevant",
      "Verfügbare Genehmigungen, Lizenzen und Vergleich offizieller und gemessener Flächen",
      "Zwei professionelle Berichte und eine klare Kaufempfehlung von Nordic Move",
    ],
    href: "/de/services/purchase-safety-report",
    cta: "Purchase Safety ansehen",
    note:
      "Der genaue Umfang von Purchase Safety hängt von der Immobilie, den verfügbaren Unterlagen und den benötigten unabhängigen Fachleuten ab. Der Leistungsumfang wird im Voraus klar abgestimmt.",
  },
  {
    number: "04",
    eyebrow: "Nach dem Kauf",
    title: "Move-In Ready & Umzugskoordination",
    text:
      "Nach dem Kauf bleibt Nordic Move Ihr fester Ansprechpartner. Move-In Ready ist in drei flexible Pakete gegliedert: Home Setup, Renovierung & Interieur und Familienumzug. Wählen Sie ein Paket oder kombinieren Sie die Unterstützung passend zu Ihrer Immobilie, Familie, Planung und Ihrem Budget.",
    bullets: [
      "Home Setup für Versorgungsleistungen, Versicherungen, Sicherheit, Reinigung und Wartung",
      "Renovierung & Interieur für Handwerker, Planung, Einkauf, Einrichtung und Styling",
      "Familienumzug für Umzug, Schulen, Gesundheitsversorgung und Vorbereitung auf den Alltag",
      "Ein Nordic Move-Ansprechpartner für das vereinbarte Paket oder die Kombination",
      "Ausgewählte unabhängige Fachleute bleiben für ihre eigene Beratung und Ausführung verantwortlich",
    ],
    href: "/de/services/move-in-ready",
    cta: "Alle drei Move-In Ready Pakete ansehen",
  },
];

const moveInReadyPackages = [
  {
    number: "01",
    title: "Home Setup",
    subtitle: "Die praktische Basis Ihrer Immobilie",
    text:
      "Für Eigentümer, die die wichtigsten praktischen Themen nach der Schlüsselübergabe und vor der Ankunft klar geregelt haben möchten, ohne dass eine vollständige Renovierung oder ein kompletter Familienumzug nötig ist.",
    result:
      "Ihre Immobilie ist praktisch vorbereitet und die wichtigsten Anbieter, Termine und Vertragsinformationen sind in einer klaren Übersicht zusammengeführt.",
    items: [
      "Unterstützung bei der Organisation von Strom und Wasser",
      "Internet, Telefon und Fernsehen koordinieren",
      "Gebäude-, Hausrat- und relevante Versicherungsoptionen vergleichen",
      "Alarm-, Sicherheits- und Zugangslösungen prüfen",
      "Reinigung und Vorbereitung vor der Ankunft koordinieren",
      "Angebote für Malerarbeiten und kleinere Arbeiten einholen",
      "Garten-, Pool- und technische Wartung organisieren",
      "Anbieter-, Termin- und Vertragsinformationen bündeln",
    ],
  },
  {
    number: "02",
    title: "Renovierung & Interieur",
    subtitle: "Renovierung und Einrichtung in einem koordinierten Ablauf",
    text:
      "Für Immobilien, die eine Renovierung, Anpassung oder vollständige Einrichtung benötigen, bevor Sie sie komfortabel nutzen können.",
    result:
      "Renovierung, Interior-Entscheidungen, Einkauf und Ausführung werden aufeinander abgestimmt, damit technische Entscheidungen, Planung und das spätere Wohnumfeld besser zusammenpassen.",
    items: [
      "Wünsche, Nutzung, Prioritäten und Budget festlegen",
      "Bauunternehmen und relevante Fachleute auswählen und koordinieren",
      "Bei Bedarf mit Architekt oder technischem Architekten abstimmen",
      "Angebote, Planung und Fortschrittsberichte strukturieren",
      "Ein Interior-Konzept und visuelles Moodboard entwickeln",
      "Materialien, Möbel und Beleuchtung auswählen",
      "Lieferung, Montage, Installation und Styling koordinieren",
      "Abnahmepunkte und Endkontrollen vor der Ankunft organisieren",
    ],
  },
  {
    number: "03",
    title: "Familienumzug",
    subtitle: "Bereiten Sie den Alltag vor, nicht nur den Umzug",
    text:
      "Für Familien und internationale Berufstätige, die nicht nur die Immobilie, sondern auch die praktische Seite des Wohnens, Arbeitens und Einlebens an der Costa Blanca vorbereiten möchten.",
    result:
      "Sie erhalten einen klareren und besser vorbereiteten Ausgangspunkt für Umzug, Schulen, Gesundheitsversorgung, lokale Dienstleistungen und den Alltag in Spanien.",
    items: [
      "Internationale Umzugsunternehmen und Lagermöglichkeiten vergleichen",
      "Schulen und Kinderbetreuung in passenden Gebieten recherchieren",
      "Gesundheitsversorgung, Versicherungen und praktische Infrastruktur erfassen",
      "Lokale Verwaltung und relevante Folgeschritte strukturieren",
      "Fahrzeugtransport und spezialisierte Transportoptionen prüfen",
      "Sportclubs, Golfclubs und lokale Gemeinschaften erkunden",
      "Lokale Dienstleister und Einrichtungen des täglichen Bedarfs auswählen",
      "Einen persönlichen Umzugsplan erstellen",
    ],
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

function absoluteUrl(path: string) {
  return siteUrl ? `${siteUrl}${path}` : path;
}

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/de"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Leistungen",
      item: absoluteUrl("/de/services"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Area Match & Kaufprozess",
      item: absoluteUrl(pagePath),
    },
  ],
};

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nordic Move Spain Kaufprozess",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.text,
      url: absoluteUrl(service.href),
      areaServed: {
        "@type": "Place",
        name: "Costa Blanca, Spanien",
      },
      provider: {
        "@type": "Organization",
        name: "Nordic Move Spain",
      },
      ...(service.number === "04"
        ? {
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Move-In Ready Pakete",
              itemListElement: moveInReadyPackages.map((pkg) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: pkg.title,
                  description: pkg.text,
                },
              })),
            },
          }
        : {}),
    },
  })),
};

export default function AreaMatchPage() {
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
          __html: JSON.stringify(servicesStructuredData),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
        {/* BREADCRUMBS */}
        <div className="px-6 pt-8 md:px-8">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
              <li>
                <a href="/de" className="transition hover:text-[#173252]">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a
                  href="/de/services"
                  className="transition hover:text-[#173252]"
                >
                  Leistungen
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#173252]">
                Area Match &amp; Kaufprozess
              </li>
            </ol>
          </nav>
        </div>

        {/* HERO */}
        <section className="px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Unabhängige Kaufbegleitung an der Costa Blanca
              </p>

              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                Wir vertreten Sie als Käuferpartei.
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#173252]">
                Deshalb arbeiten wir unabhängig und akzeptieren keine Verkaufsprovision von der Verkäuferseite, wie sie bei vielen klassischen
                Maklern üblich ist. Unser Ausgangspunkt ist Ihr Kaufinteresse.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
                Aus dieser Position begleiten wir Area Match, Immobiliensuche,
                Besichtigungen, Kommunikation, Verhandlungen, unabhängige
                Kaufprüfungen und die praktischen Schritte nach dem Kauf. Während des
                gesamten Prozesses haben Sie einen festen Nordic Move-Ansprechpartner.
              </p>

              <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  "Ihr Käuferinteresse steht an erster Stelle",
                  "Keine Verkaufsprovision von der Verkäuferseite",
                  "Ein fester Ansprechpartner",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#173252]/10 bg-white/70 px-4 py-3 text-sm leading-relaxed text-stone-700"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/de/relocation-assessment"
                  className="rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                >
                  Kostenloses Portfolio erhalten
                </a>

                <a
                  href="/de/contact"
                  className="rounded-full border border-[#173252] px-8 py-4 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
                >
                  Persönliches Gespräch vereinbaren
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)] sm:translate-y-10">
                <img
                  src="/images/brochure1-en.png"
                  alt="Nordic Move Spain Broschüre zur Buyer Discovery Experience und Move-In Ready Unterstützung"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)]">
                <img
                  src="/images/brochure2-en.png"
                  alt="Nordic Move Spain Broschüre zu unabhängigen Purchase Safety Prüfungen"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* UNSERE UNABHÄNGIGE ROLLE */}
        <section className="px-6 pb-20 md:px-8 md:pb-24">
          <div className="mx-auto max-w-7xl rounded-[30px] border border-[#173252]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Unsere Rolle
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#173252] md:text-4xl">
                  Wir stehen auf der Seite des Käufers.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  [
                    "Käuferinteresse",
                    "Wir vertreten Sie als Käuferpartei und beurteilen Entscheidungen aus Ihrem Interesse heraus – nicht aus dem Verkaufsinteresse an einer Immobilie.",
                  ],
                  [
                    "Keine Verkaufsprovision",
                    "Wir akzeptieren keine Verkaufsprovision von der Verkäuferseite. Dadurch bleibt unsere Position gegenüber dem Käufer eindeutig.",
                  ],
                  [
                    "Breiter suchen",
                    "Wir betrachten passende Immobilien am gesamten Markt und sind nicht auf das Angebot eines einzelnen Verkäufermaklers beschränkt.",
                  ],
                ].map(([title, text]) => (
                  <article key={title} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <h3 className="font-serif text-xl text-[#173252]">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LEISTUNGSÜBERSICHT */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Ihr Kaufprozess in vier klaren Schritten
              </p>

              <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                Von Orientierung und Immobiliensuche bis zur Kaufprüfung und Unterstützung nach der Schlüsselübergabe.
              </h2>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="flex h-full flex-col rounded-[36px] bg-white p-8 shadow-sm md:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-medium tracking-[0.06em] text-[#b88948]">
                        {service.eyebrow}
                      </p>

                      <h3 className="mt-4 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                        {service.title}
                      </h3>
                    </div>

                    <span className="font-serif text-3xl text-[#d7bd94]">
                      {service.number}
                    </span>
                  </div>

                  <p className="mt-6 text-base leading-relaxed text-stone-600">
                    {service.text}
                  </p>

                  <ul className="mt-7 space-y-3 text-sm leading-relaxed text-stone-700">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b88948]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {service.number === "04" ? (
                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {moveInReadyPackages.map((pkg) => (
                        <div
                          key={pkg.title}
                          className="rounded-[20px] bg-[#f6f1ea] p-4"
                        >
                          <p className="text-[11px] font-medium tracking-[0.04em] text-[#b88948]">
                            Paket {pkg.number}
                          </p>
                          <p className="mt-2 font-serif text-lg leading-tight text-[#173252]">
                            {pkg.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {service.note ? (
                    <p className="mt-7 text-xs leading-relaxed text-stone-500">
                      * {service.note}
                    </p>
                  ) : null}

                  <a
                    href={service.href}
                    className="mt-8 inline-flex w-fit items-center border-b border-[#b88948] pb-1 text-xs font-medium tracking-[0.06em] text-[#173252] transition hover:text-[#b88948]"
                  >
                    {service.cta} →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AREA MATCH */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#173252] p-10 text-white md:p-14 lg:p-16">
                <p className="text-sm font-medium tracking-[0.08em] text-[#d1a866]">
                  Leistung 01 · Area Match
                </p>

                <h2 className="mt-6 font-serif text-3xl leading-tight md:text-5xl">
                  Ein kostenloses Portfolio, das Ihnen monatelange Suche ersparen kann.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/80">
                  Das Area Match Portfolio ist keine allgemeine Liste von Orten. Es
                  verbindet Ihren Lebensstil, Ihr Budget, Ihre Zukunftspläne und Ihre
                  täglichen Prioritäten in einem persönlichen Vergleich passender
                  Regionen, Orte und Wohnumfelder.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  So erhält Ihre Suche eine klare Richtung, bevor Sie Hunderte von Immobilien
                  besichtigen. Es hilft zu vermeiden, dass Sie monatelang
                  in Lagen suchen, die online attraktiv wirken, aber nicht zu
                  der Art passen, wie Sie leben möchten.
                </p>

                <a
                  href="/de/relocation-assessment"
                  className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Kostenloses Area Match Portfolio anfordern
                </a>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Was Sie erhalten
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Ein persönliches Profil Ihres Lebensstils und Ihrer Wohnpräferenzen",
                    "Ein Vergleich geeigneter Regionen, Orte und Wohnlagen",
                    "Informationen zu Atmosphäre, Erreichbarkeit und Alltag",
                    "Einblick in Gesundheitsversorgung, Infrastruktur und internationale Gemeinschaften",
                    "Begleitung bei passenden Immobilientypen und Wohnumfeldern",
                    "Eine gezielte Grundlage für Immobiliensuche, Besichtigungen und nächste Schritte",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-sm leading-relaxed text-stone-500">
                  Das Area Match Portfolio ist kostenlos und unverbindlich.
                  Der Inhalt wird auf Ihre persönliche Situation,
                  Ihre Pläne und Präferenzen abgestimmt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BUYER DISCOVERY */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[40px] bg-white p-3 shadow-sm">
              <img
                src="/images/brochure1-en.png"
                alt="Nordic Move Spain Broschüre zur Buyer Discovery Experience und Nordic Circle"
                className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
              />
            </div>

            <div>
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Leistung 02 · Persönliche Immobiliensuche &amp; Buyer Discovery
              </p>

              <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                Ihre persönliche Kaufbegleitung für Suche, Besichtigungen und Kauf.
              </h2>

              <p className="mt-7 text-base leading-relaxed text-stone-600 md:text-lg">
                Ihr Area Match Portfolio bildet die Grundlage für eine gezielte Immobiliensuche.
                Da wir die Käuferseite vertreten, schauen wir über das Angebot eines
                einzelnen Verkäufermaklers hinaus. Wir wählen passende Immobilien am
                Markt aus und stellen eine gezielte Discovery-Route durch Gebiete und
                Immobilien zusammen, die zu Ihrem Profil passen.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
                Wir organisieren die Besichtigungen, übernehmen die Kommunikation mit Verkäufern
                und Verkäufermaklern und begleiten Sie bei Fragen, Verhandlungen und
                im Kaufprozess. Wir akzeptieren keine Verkaufsprovision
                von der Verkäuferseite. So bleibt unsere Rolle gegenüber dem Käufer klar.
              </p>

              <a
                href="/de/services/discovery-trips"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Buyer Discovery Experience ansehen
              </a>

            </div>
          </div>
        </section>

        {/* PURCHASE SAFETY */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Leistung 03 · Purchase Safety
              </p>

              <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                Zwei unabhängige professionelle Berichte vor Ihrer endgültigen Entscheidung.
              </h2>

              <p className="mt-8 text-base leading-relaxed text-stone-600 md:text-lg">
                Ein unabhängiger Bausachverständiger beurteilt den sichtbaren und zugänglichen
                technischen Zustand, die Bauqualität, Feuchtigkeit, Wassereintritt,
                Installationen, den Pool, Nebengebäude und notwendige
                Reparaturarbeiten. Der Sachverständige führt außerdem eine erste Prüfung
                von Unterlagen und Registrierungen durch.
              </p>

              <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                Diese Prüfung kann unter anderem Nota Simple, Catastro, IBI, CEE,
                gegebenenfalls ITE, Informationen des Maklers, verfügbare
                Genehmigungen und Lizenzen, den Vergleich offizieller und gemessener
                Flächen sowie Hinweise auf möglicherweise nicht registrierte
                Teile der Immobilie umfassen.
              </p>

              <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                Ein geeigneter unabhängiger spanischer Anwalt führt anschließend die vollständige
                rechtliche Due Diligence durch und bleibt für die rechtliche
                Prüfung und Beratung verantwortlich. Auf Grundlage beider Berichte
                gibt Nordic Move eine klare Empfehlung: fortfahren, neu bewerten oder
                vom Kauf absehen.
              </p>

              <a
                href="/de/services/purchase-safety-report"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Purchase Safety ansehen
              </a>

              <p className="mt-5 text-xs leading-relaxed text-stone-500">
                Der genaue Umfang von Purchase Safety wird im Voraus auf die Immobilie,
                die verfügbaren Unterlagen und die benötigten unabhängigen Fachleute abgestimmt.
              </p>
            </div>

            <div className="order-1 overflow-hidden rounded-[40px] bg-white p-3 shadow-sm lg:order-2">
              <img
                src="/images/brochure2-en.png"
                alt="Nordic Move Spain Purchase Safety Broschüre"
                className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* EIN FESTER ANSPRECHPARTNER */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-white p-10 shadow-sm md:p-14 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Ein vertrauter Ansprechpartner
                </p>

                <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                  Sie müssen nicht selbst fünf verschiedene Parteien koordinieren.
                </h2>

                <p className="mt-8 text-base leading-relaxed text-stone-600 md:text-lg">
                  Der Kauf einer Immobilie in Spanien bedeutet oft Kommunikation mit
                  Maklern, Verkäufern, einem Bausachverständigen, einem Anwalt,
                  Finanzierungsberatern, einem Umzugsunternehmen und Interior-Spezialisten.
                  Nordic Move bleibt während des vereinbarten Prozesses Ihr fester
                  Ansprechpartner.
                </p>

                <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                  Wir behalten im Blick, wer wofür verantwortlich ist, welche
                  Informationen noch fehlen, welche Fragen offen sind, was der
                  nächste Schritt ist und wo Verzögerungen oder Risiken entstehen können.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "Eine persönliche Kaufbegleitung",
                    "Ein Nordic Move-Ansprechpartner kennt während des gesamten Prozesses Ihre Wünsche, Prioritäten und wichtigen Punkte.",
                  ],
                  [
                    "Umfassende Koordination",
                    "Wir koordinieren die vereinbarten Fachleute und sorgen dafür, dass die einzelnen Schritte aufeinander abgestimmt sind.",
                  ],
                  [
                    "Klare nächste Schritte",
                    "Offene Fragen, Verantwortlichkeiten, Bedingungen und Fristen werden aktiv nachverfolgt.",
                  ],
                  [
                    "Kontinuität nach dem Kauf",
                    "Wir bleiben bei Hypothekenkontakten, Umzugskoordination, Styling und Einrichtung eingebunden.",
                  ],
                ].map(([title, text]) => (
                  <article
                    key={title}
                    className="rounded-[26px] bg-[#f6f1ea] p-6"
                  >
                    <h3 className="font-serif text-2xl text-[#173252]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MOVE-IN READY & UMZUG */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#e9dfd2]">
            <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Leistung 04 · Move-In Ready &amp; Umzugskoordination
                </p>

                <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                  Drei flexible Pakete vom abgeschlossenen Kauf bis zur vorbereiteten Ankunft.
                </h2>

                <p className="mt-8 text-base leading-relaxed text-stone-700 md:text-lg">
                  Nach dem Kauf bleiben oft noch zahlreiche praktische Entscheidungen:
                  Versorgungsleistungen, Versicherungen, Umzug, Renovierung, Interieur,
                  Möbel, Schulen und lokale Dienstleister. Nordic Move bündelt
                  diese Schritte in drei klaren Move-In Ready Paketen.
                </p>

                <p className="mt-6 text-base leading-relaxed text-stone-700 md:text-lg">
                  Wählen Sie Home Setup, Renovierung &amp; Interieur oder Familienumzug —
                  oder kombinieren Sie Pakete zu einem koordinierten Ablauf. Sie behalten
                  einen Nordic Move-Ansprechpartner, während ausgewählte unabhängige
                  Fachleute für ihre eigene fachliche Beratung, Angebote und
                  Ausführung verantwortlich bleiben.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="/de/services/move-in-ready"
                    className="inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                  >
                    Move-In Ready im Detail ansehen
                  </a>

                  <a
                    href="/de/contact"
                    className="inline-block rounded-full border border-[#173252] px-8 py-4 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
                  >
                    Ihr Paket besprechen
                  </a>
                </div>
              </div>

              <div className="min-h-[520px]">
                <img
                  src="/images/interior-design.png"
                  alt="Move-In Ready Unterstützung für Home Setup, Renovierung & Interieur und Familienumzug an der Costa Blanca"
                  className="h-full min-h-[520px] w-full object-cover"
                />
              </div>
            </div>

            <div className="border-t border-[#173252]/10 bg-white/45 p-8 md:p-12 lg:p-14">
              <div className="max-w-4xl">
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Wählen Sie die Unterstützung, die zu Ihrer Situation passt
                </p>
                <h3 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                  Die drei Move-In Ready Pakete.
                </h3>
                <p className="mt-5 text-base leading-relaxed text-stone-700 md:text-lg">
                  Jedes Paket kann einzeln gewählt werden. Wenn Ihre Situation mehrere
                  Bereiche umfasst, können die relevanten Leistungen innerhalb eines
                  vereinbarten Umfangs kombiniert und koordiniert werden.
                </p>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {moveInReadyPackages.map((pkg, index) => (
                  <article
                    key={pkg.title}
                    className={`flex h-full flex-col rounded-[30px] p-7 shadow-sm md:p-8 ${
                      index === 1
                        ? "bg-[#173252] text-white"
                        : "bg-white text-stone-900"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p
                          className={`text-xs font-medium tracking-[0.06em] ${
                            index === 1 ? "text-[#d1a866]" : "text-[#b88948]"
                          }`}
                        >
                          Paket {pkg.number}
                        </p>
                        <h4
                          className={`mt-3 font-serif text-3xl leading-tight ${
                            index === 1 ? "text-white" : "text-[#173252]"
                          }`}
                        >
                          {pkg.title}
                        </h4>
                      </div>
                      <span
                        className={`font-serif text-3xl ${
                          index === 1 ? "text-white/20" : "text-[#d7bd94]"
                        }`}
                      >
                        {pkg.number}
                      </span>
                    </div>

                    <p
                      className={`mt-5 text-sm font-medium ${
                        index === 1 ? "text-white/90" : "text-[#173252]"
                      }`}
                    >
                      {pkg.subtitle}
                    </p>

                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        index === 1 ? "text-white/75" : "text-stone-600"
                      }`}
                    >
                      {pkg.text}
                    </p>

                    <ul className="mt-6 space-y-3 text-sm leading-relaxed">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span
                            className={`mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full ${
                              index === 1 ? "bg-[#d1a866]" : "bg-[#b88948]"
                            }`}
                          />
                          <span
                            className={
                              index === 1 ? "text-white/80" : "text-stone-700"
                            }
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`mt-7 rounded-[22px] p-5 ${
                        index === 1 ? "bg-white/10" : "bg-[#f6f1ea]"
                      }`}
                    >
                      <p
                        className={`text-[11px] font-medium tracking-[0.04em] ${
                          index === 1 ? "text-[#d1a866]" : "text-[#b88948]"
                        }`}
                      >
                        Angestrebtes Ergebnis
                      </p>
                      <p
                        className={`mt-2 text-sm leading-relaxed ${
                          index === 1 ? "text-white/80" : "text-stone-700"
                        }`}
                      >
                        {pkg.result}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <p className="mt-8 max-w-5xl text-xs leading-relaxed text-stone-500">
                Umfang, Budget, Planung und Ausführung werden auf die Immobilie,
                Ihre Wünsche und die Verfügbarkeit ausgewählter lokaler Fachleute
                und Dienstleister abgestimmt. Aufnahmeentscheidungen von Schulen,
                behördliche Entscheidungen und Arbeiten Dritter können von Nordic Move
                nicht garantiert werden.
              </p>
            </div>
          </div>
        </section>

        {/* ABSCHLUSS CTA */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-[#173252] px-8 py-16 text-center text-white md:px-14 md:py-20">
            <p className="text-sm font-medium tracking-[0.08em] text-[#d1a866]">
              Unabhängige Begleitung für Käufer
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-3xl leading-tight md:text-5xl">
              Ihr Kaufinteresse im Mittelpunkt – mit einem festen Ansprechpartner.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/75">
              Starten Sie mit Ihrem Area Match Portfolio und setzen Sie den Weg mit einem
              koordinierten Prozess für Immobiliensuche, Buyer Discovery, Kaufprüfungen und
              praktische Unterstützung nach dem Kauf fort. Wir vertreten die Käuferseite und
              akzeptieren keine Verkaufsprovision von der Verkäuferseite.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/de/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Kostenloses Portfolio erhalten
              </a>

              <a
                href="/de/contact"
                className="rounded-full border border-white/70 px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#173252]"
              >
                Kennenlerngespräch vereinbaren
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}