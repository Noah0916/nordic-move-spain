import type { Metadata } from "next";

const pagePath = "/de/services/area-match";

export const metadata: Metadata = {
  title:
    "Area Match, Buyer Discovery & vollständige Kaufkoordination | Nordic Move Spain",
  description:
    "Starten Sie mit einem kostenlosen Area Match Portfolio und setzen Sie Ihre Immobiliensuche mit einem persönlichen Immobilienmakler und festen Ansprechpartner für Besichtigungen, Purchase Safety, Umzug und Einrichtung an der Costa Blanca fort.",
  keywords: [
    "Area Match Costa Blanca",
    "persönlicher Immobilienmakler Costa Blanca",
    "Immobilie kaufen Costa Blanca",
    "Buyer Discovery Experience Spanien",
    "Kaufbegleitung Spanien",
    "Purchase Safety Report Spanien",
    "unabhängige Immobilienprüfung Spanien",
    "spanischer Immobilienanwalt",
    "Umzugsunternehmen Koordination Spanien",
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
      "Area Match, Buyer Discovery & vollständige Kaufkoordination | Nordic Move Spain",
    description:
      "Finden Sie zuerst die passende Region, arbeiten Sie mit einem persönlichen Immobilienmakler und lassen Sie Nordic Move Immobiliensuche, Besichtigungen, unabhängige Kaufprüfungen, Umzug und Einrichtung koordinieren.",
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
      "Area Match, Buyer Discovery & vollständige Kaufkoordination | Nordic Move Spain",
    description:
      "Ein persönlicher Immobilienmakler und fester Ansprechpartner von Area Match und Immobiliensuche bis Purchase Safety, Umzug und Einrichtung.",
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
      "Sie erhalten ein kostenloses, ausführliches und persönliches Portfolio, das zeigt, welche Regionen, Orte und Immobilientypen am besten zu Ihrem Lebensstil, Budget und Ihren langfristigen Plänen passen. So entsteht Klarheit, bevor Sie monatelang nach ungeeigneten Immobilien suchen.",
    bullets: [
      "Persönlicher Abgleich von Lebensstil und Standort",
      "Informationen zu passenden Orten und Wohngebieten",
      "Einblick in Versorgung, Gesundheitsangebote, Erreichbarkeit und Alltag",
      "Mehr Klarheit über den Immobilientyp, der wirklich zu Ihnen passt",
      "Eine gezielte Grundlage für Immobiliensuche und Besichtigungen",
    ],
    href: "/de/relocation-assessment",
    cta: "Kostenloses Area Match Portfolio anfragen",
  },
  {
    number: "02",
    eyebrow: "Persönliche Immobiliensuche",
    title: "Buyer Discovery Experience",
    text:
      "Nach Ihrem Area Match sind wir Ihr persönlicher Immobilienmakler an der Costa Blanca. Wir suchen und wählen passende Immobilien aus, stellen eine gezielte Route zusammen und begleiten Sie bei Besichtigungen, Kommunikation, Verhandlungen und Kauf.",
    bullets: [
      "Eine persönliche Route durch passende Regionen",
      "Gezielte Immobiliensuche und Auswahl",
      "Besichtigungen passend zu Ihrem Profil und Ihren Prioritäten",
      "Kommunikation mit Verkäufern und anbietenden Maklern",
      "Begleitung bei Verhandlungen und im Kaufprozess",
    ],
    href: "/de/services/discovery-trips",
    cta: "Buyer Discovery Experience entdecken",
    note:
      "Wenn schließlich über Nordic Move Spain eine Villa gekauft wird, werden abhängig vom Kaufpreis entweder die Hälfte oder die gesamten Kosten der Reise erstattet. Die genaue Erstattung und die geltenden Bedingungen werden vorab schriftlich bestätigt.",
  },
  {
    number: "03",
    eyebrow: "Unabhängige Kaufprüfung",
    title: "Purchase Safety",
    text:
      "Wenn eine Immobilie ernsthaft infrage kommt, koordinieren wir einen unabhängigen Bausachverständigen für die technische Beurteilung und erste Dokumenten- und Registerprüfung sowie einen unabhängigen spanischen Rechtsanwalt für die vollständige rechtliche Due Diligence.",
    bullets: [
      "Sichtbarer technischer Zustand, Bauqualität, Feuchtigkeit und Installationen",
      "Pool, Nebengebäude, Reparaturen, Fotos und Empfehlungen",
      "Nota Simple, Kataster, IBI, CEE und ITE soweit relevant",
      "Verfügbare Genehmigungen, Lizenzen und Vergleich offizieller und gemessener Flächen",
      "Zwei professionelle Berichte und eine klare Nordic-Move-Kaufempfehlung",
    ],
    href: "/de/services/purchase-safety-report",
    cta: "Purchase Safety ansehen",
    note:
      "Wenn schließlich über Nordic Move Spain eine Villa gekauft wird, ist die unabhängige Purchase-Safety-Prüfung in der Kaufbegleitung enthalten. Der genaue Umfang hängt von der Immobilie, den verfügbaren Unterlagen und den erforderlichen Spezialisten ab.",
  },
  {
    number: "04",
    eyebrow: "Nach dem Kauf",
    title: "Move-In Ready & Umzugskoordination",
    text:
      "Nach dem Kauf bleibt Nordic Move Ihr fester Ansprechpartner. Je nach Bedarf stellen wir den Kontakt zu einem passenden Hypothekenberater her, unterstützen Sie bei der Auswahl und Koordination eines zuverlässigen Umzugsunternehmens und koordinieren persönlich Styling, Einrichtung und praktische Vorbereitung.",
    bullets: [
      "Vorstellung bei einem passenden Hypothekenberater",
      "Auswahl und Koordination eines zuverlässigen Umzugsunternehmens",
      "Persönliche Einrichtungsrichtung und Möbelauswahl",
      "Koordination von Lieferanten, Lieferungen, Montage und Styling",
      "Letzte praktische Vorbereitung vor Ihrer Ankunft",
    ],
    href: "/de/services/move-in-ready",
    cta: "Move-In-Ready-Unterstützung entdecken",
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
      name: "Startseite",
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
      name: "Area Match & Käuferreise",
      item: absoluteUrl(pagePath),
    },
  ],
};

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nordic Move Spain Käuferreise",
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
          <nav aria-label="Brotkrümelnavigation" className="mx-auto max-w-7xl">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
              <li>
                <a href="/de" className="transition hover:text-[#173252]">
                  Startseite
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
                Area Match &amp; Käuferreise
              </li>
            </ol>
          </nav>
        </div>

        {/* HERO */}
        <section className="px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Ein persönlicher Immobilienmakler · Ein fester Ansprechpartner
              </p>

              <h1 className="mt-6 font-serif text-5xl leading-[1.03] text-[#173252] md:text-7xl">
                Zuerst der richtige Ort. Dann die richtige Immobilie. Wir koordinieren alles, was folgt.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl">
                Unsere Begleitung verbindet Area Match, persönliche
                Immobiliensuche, Buyer Discovery, unabhängige Kaufprüfungen,
                Kaufbegleitung, Umzug und Einrichtung. Während des gesamten
                Prozesses kommunizieren Sie mit einem festen Nordic-Move-
                Ansprechpartner, der die vereinbarten Schritte von der ersten
                Orientierung bis zur Ankunft koordiniert.
              </p>

              <p className="mt-6 max-w-2xl text-sm font-medium uppercase tracking-[0.22em] text-[#b88948]">
                Vollständige Koordination · Weniger Parteien selbst steuern · Mehr Sicherheit vor dem Kauf
              </p>

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
                  alt="Nordic Move Spain Broschüre über die Buyer Discovery Experience und Move-In-Ready-Unterstützung"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)]">
                <img
                  src="/images/brochure2-en.png"
                  alt="Nordic Move Spain Broschüre über unabhängige Purchase-Safety-Prüfungen"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE OVERVIEW */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Vier Leistungen, ein koordinierter Prozess
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Von der ersten Orientierung bis zu Kauf, Umzug, Einrichtung und Ankunft.
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
                      <p className="text-xs uppercase tracking-[0.3em] text-[#b88948]">
                        {service.eyebrow}
                      </p>

                      <h3 className="mt-4 font-serif text-3xl leading-tight text-[#173252] md:text-4xl">
                        {service.title}
                      </h3>
                    </div>

                    <span className="font-serif text-5xl text-[#d7bd94]">
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

                  {service.note ? (
                    <p className="mt-7 text-xs leading-relaxed text-stone-500">
                      * {service.note}
                    </p>
                  ) : null}

                  <a
                    href={service.href}
                    className="mt-8 inline-flex w-fit items-center border-b border-[#b88948] pb-1 text-xs font-medium uppercase tracking-[0.22em] text-[#173252] transition hover:text-[#b88948]"
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
                <p className="text-sm uppercase tracking-[0.35em] text-[#d1a866]">
                  Leistung 01 · Area Match
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
                  Ein kostenloses Portfolio, das Ihnen monatelange Suche ersparen kann.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/80">
                  Das Area Match Portfolio ist keine allgemeine Liste von Orten.
                  Es verbindet Ihren Lebensstil, Ihr Budget, Ihre Zukunftspläne
                  und täglichen Prioritäten in einem persönlichen Vergleich
                  passender Regionen, Orte und Wohnlagen.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  So erhält Ihre Suche eine klare Richtung, bevor Sie Hunderte
                  Immobilien durchsuchen. Dies hilft zu vermeiden, dass Sie
                  monatelang in Lagen suchen, die online attraktiv erscheinen,
                  aber nicht zu Ihrem gewünschten Alltag passen.
                </p>

                <a
                  href="/de/relocation-assessment"
                  className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Kostenloses Area Match Portfolio anfragen
                </a>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Was Sie erhalten
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Ein persönliches Profil Ihres Lebensstils und Ihrer Wohnwünsche",
                    "Ein Vergleich geeigneter Regionen, Orte und Wohngebiete",
                    "Informationen zu Atmosphäre, Erreichbarkeit und Alltag",
                    "Einblick in Gesundheitsversorgung, Angebote und internationale Gemeinschaften",
                    "Orientierung zu passenden Immobilientypen und Wohnlagen",
                    "Eine gezielte Grundlage für Suche, Besichtigungen und nächste Schritte",
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
                  Das Area Match Portfolio ist kostenlos und unverbindlich. Der
                  Inhalt wird auf Ihre persönliche Situation, Ihre Pläne und
                  Wünsche abgestimmt.
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
                alt="Nordic Move Spain Broschüre über die Buyer Discovery Experience und Nordic Circle"
                className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Leistung 02 · Persönliche Immobiliensuche &amp; Buyer Discovery
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Ihr persönlicher Immobilienmakler für Suche, Besichtigungen und Kauf.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Ihr Area Match Portfolio bildet die Grundlage für eine gezielte
                Immobiliensuche. Wir schauen über das Angebot eines einzelnen
                Maklers hinaus, wählen passende Immobilien am Markt aus und
                stellen eine Discovery-Route durch die Regionen und Objekte
                zusammen, die zu Ihrem Profil passen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Wir organisieren die Besichtigungen, übernehmen die Kommunikation
                mit Verkäufern und anbietenden Maklern und begleiten Sie bei
                Fragen, Verhandlungen und im Kaufprozess. Sie müssen Ihre
                Wünsche nicht immer wieder erklären oder jeden Kontakt selbst
                koordinieren.
              </p>

              <a
                href="/de/services/discovery-trips"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Buyer Discovery Experience ansehen
              </a>

              <p className="mt-6 text-xs leading-relaxed text-stone-500">
                * Wenn schließlich über Nordic Move Spain eine Villa gekauft
                wird, werden abhängig vom Kaufpreis entweder die Hälfte oder
                die gesamten Kosten der Reise erstattet. Die genaue Erstattung
                und die Bedingungen werden vorab schriftlich bestätigt.
              </p>
            </div>
          </div>
        </section>

        {/* PURCHASE SAFETY */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="order-2 lg:order-1">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Leistung 03 · Purchase Safety
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Zwei unabhängige professionelle Berichte vor Ihrer endgültigen Entscheidung.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Ein unabhängiger Bausachverständiger beurteilt den sichtbaren
                und zugänglichen technischen Zustand, die Bauqualität,
                Feuchtigkeit, Wassereintritt, Installationen, Pool,
                Nebengebäude und notwendige Reparaturen. Zusätzlich führt er
                eine erste Dokumenten- und Registerprüfung durch.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Diese Prüfung kann unter anderem Nota Simple, Kataster, IBI,
                CEE, ITE soweit relevant, Maklerinformationen, verfügbare
                Genehmigungen und Lizenzen, den Vergleich offizieller und
                gemessener Flächen sowie Hinweise auf möglicherweise nicht
                registrierte Gebäudeteile umfassen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Ein geeigneter unabhängiger spanischer Rechtsanwalt führt
                anschließend die vollständige rechtliche Due Diligence durch
                und bleibt für die rechtliche Prüfung und Beratung
                verantwortlich. Auf Grundlage beider Berichte gibt Nordic Move
                eine klare Empfehlung: weitermachen, neu bewerten oder Abstand
                nehmen.
              </p>

              <a
                href="/de/services/purchase-safety-report"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Purchase Safety ansehen
              </a>

              <p className="mt-6 text-xs leading-relaxed text-stone-500">
                * Wenn schließlich über Nordic Move Spain eine Villa gekauft
                wird, ist die unabhängige Purchase-Safety-Prüfung in der
                Kaufbegleitung enthalten. Der genaue Umfang hängt von der
                Immobilie, den verfügbaren Unterlagen und den erforderlichen
                Spezialisten ab.
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

        {/* ONE TRUSTED POINT OF CONTACT */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-white p-10 shadow-sm md:p-14 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Ein fester Ansprechpartner
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                  Sie müssen nicht fünf verschiedene Parteien selbst steuern.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Ein Immobilienkauf in Spanien bedeutet häufig, gleichzeitig
                  mit Maklern, Verkäufern, einem Bausachverständigen, einem
                  Rechtsanwalt, einem Hypothekenberater, einem
                  Umzugsunternehmen und Einrichtungsspezialisten zu
                  kommunizieren. Nordic Move bleibt während des vereinbarten
                  Prozesses Ihr fester Ansprechpartner.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Wir behalten im Blick, wer wofür verantwortlich ist, welche
                  Informationen fehlen, welche Fragen offen sind, was als
                  Nächstes geschieht und wo Verzögerungen oder Risiken entstehen
                  können.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "Ein persönlicher Immobilienmakler",
                    "Ein Nordic-Move-Ansprechpartner kennt Ihre Wünsche, Prioritäten und Bedenken während des gesamten Prozesses.",
                  ],
                  [
                    "Vollständige Koordination",
                    "Wir koordinieren die vereinbarten Spezialisten und sorgen dafür, dass die einzelnen Schritte aufeinander abgestimmt sind.",
                  ],
                  [
                    "Klare nächste Schritte",
                    "Offene Fragen, Zuständigkeiten, Bedingungen und Fristen werden aktiv nachverfolgt.",
                  ],
                  [
                    "Kontinuität nach dem Kauf",
                    "Wir bleiben für Hypothekenkontakte, Umzugskoordination, Styling und Einrichtung eingebunden.",
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

        {/* MOVE-IN READY & RELOCATION */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#e9dfd2]">
            <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Leistung 04 · Move-In Ready &amp; Umzugskoordination
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                  Vom abgeschlossenen Kauf bis zur vorbereiteten Ankunft.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-700">
                  Nach dem Kauf bleibt Nordic Move Ihr fester Ansprechpartner.
                  Je nach Bedarf stellen wir den Kontakt zu einem passenden
                  Hypothekenberater her und unterstützen Sie bei der Auswahl und
                  Koordination eines zuverlässigen Umzugsunternehmens.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  Gemeinsam entwickeln wir die Einrichtungsrichtung und
                  koordinieren Möbel, Materialien, Beleuchtung, Vorhänge,
                  Lieferanten, Lieferungen, Montage und abschließendes Styling
                  mit ausgewählten lokalen Spezialisten. So müssen Sie nicht
                  monatelang alles aus der Ferne selbst organisieren.
                </p>

                <a
                  href="/de/services/move-in-ready"
                  className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                >
                  Move-In-Ready-Unterstützung entdecken
                </a>

                <p className="mt-6 text-xs leading-relaxed text-stone-500">
                  Umfang, Budget, Zeitplan und Umsetzung werden auf die
                  Immobilie, Ihre Wünsche und die Verfügbarkeit ausgewählter
                  lokaler Spezialisten und Dienstleister abgestimmt.
                </p>
              </div>

              <div className="min-h-[520px]">
                <img
                  src="/images/interior-design.png"
                  alt="Move-In-Ready- und Umzugskoordination für eine Villa an der Costa Blanca"
                  className="h-full min-h-[520px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-[#173252] px-8 py-16 text-center text-white md:px-14 md:py-20">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d1a866]">
              Mit Klarheit beginnen
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
              Ein persönlicher Immobilienmakler. Ein fester Ansprechpartner.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/75">
              Starten Sie mit Ihrem kostenlosen Area Match Portfolio und setzen
              Sie Ihre Reise mit einem koordinierten Prozess für
              Immobiliensuche, Buyer Discovery, Kaufprüfungen, Umzug,
              Einrichtung und Ankunft fort.
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