import type { Metadata } from "next";

const pagePath = "/de/services/area-match";

export const metadata: Metadata = {
  title:
    "Area Match, Discovery Trip & sicherer Immobilienkauf | Nordic Move Spain",
  description:
    "Starten Sie mit einem kostenlosen Area Match Portfolio, entdecken Sie passende Regionen auf einer Buyer Discovery Trip und kaufen Sie mit einem unabhängigen Purchase Safety Report, sicherem Kundenportal und Interior Design.",
  keywords: [
    "Area Match Costa Blanca",
    "Immobilie an der Costa Blanca kaufen",
    "Buyer Discovery Trip Spanien",
    "Immobilienkauf Spanien Beratung",
    "Purchase Safety Report Spanien",
    "sicher Immobilien in Spanien kaufen",
    "Costa Blanca Regionen vergleichen",
    "Villa Costa Blanca kaufen",
    "Interior Design Costa Blanca",
    "Nordic Move Spain",
  ],
  alternates: {
    canonical: pagePath,
    languages: {
      "de-DE": pagePath,
      "nl-NL": "/nl/services/area-match",
      "en-GB": "/en/services/area-match",
      "sv-SE": "/sv/services/area-match",
    },
  },
  openGraph: {
    title:
      "Area Match, Discovery Trip & sicherer Immobilienkauf | Nordic Move Spain",
    description:
      "Finden Sie zuerst die passende Region, erleben Sie die Costa Blanca vor Ort und kaufen Sie mit unabhängigen Kontrollen, einem sicheren Kundenportal und klarer Begleitung.",
    type: "website",
    locale: "de_DE",
    url: pagePath,
    images: [
      {
        url: "/images/move-in-ready-costal.png",
        alt: "Nordic Move Spain Leistungen für einen sicheren Immobilienkauf an der Costa Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Area Match, Discovery Trip & sicherer Immobilienkauf | Nordic Move Spain",
    description:
      "Kostenloses Area Match Portfolio, Buyer Discovery Trip, unabhängiger Purchase Safety Report, sicheres Kundenportal und Interior Design.",
    images: ["/images/move-in-ready-costal.png"],
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
      "Sie erhalten kostenlos ein ausführliches und persönliches Portfolio. Es zeigt, welche Regionen, Orte und Immobilientypen am besten zu Ihrem Leben, Ihrem Budget und Ihren Zukunftsplänen passen.",
    bullets: [
      "Persönlicher Lifestyle- und Regionenvergleich",
      "Informationen über passende Orte und Wohngebiete",
      "Einblick in Infrastruktur, Gesundheitsversorgung und Erreichbarkeit",
      "Mehr Klarheit darüber, welche Immobilie wirklich zu Ihnen passt",
      "Eine gezielte Grundlage für Ihre weitere Suche",
    ],
    href: "/de/relocation-assessment",
    cta: "Kostenloses Area Match Portfolio anfordern",
  },
  {
    number: "02",
    eyebrow: "Die Region persönlich erleben",
    title: "Buyer Discovery Trip",
    text:
      "Während einer sorgfältig zusammengestellten Discovery Trip entdecken Sie die Regionen, Immobilien und den lokalen Lebensstil, die zu Ihrem Area Match Portfolio passen. So sehen Sie nicht nur, was zum Verkauf steht, sondern erleben, wo Sie sich wirklich zu Hause fühlen könnten.",
    bullets: [
      "Persönliche Route durch passende Regionen",
      "Ausgewählte Besichtigungen auf Grundlage Ihres Profils",
      "Lokale Lifestyle-Erlebnisse und relevante Begegnungen",
      "Praktische Informationen zum Leben und Kaufen in Spanien",
      "Begleitung von der Ankunft bis zu den nächsten Schritten",
    ],
    href: "/de/services/discovery-trips",
    cta: "Buyer Discovery Trip entdecken",
    note:
      "Beim tatsächlichen Kauf einer Villa über Nordic Move Spain wird abhängig vom Kaufpreis die Hälfte oder der gesamte Reisepreis erstattet. Die genaue Erstattung und die geltenden Bedingungen werden vorab schriftlich bestätigt.",
  },
  {
    number: "03",
    eyebrow: "Unabhängige Kaufprüfung",
    title: "Purchase Safety Report",
    text:
      "Sobald eine Immobilie ernsthaft infrage kommt, prüfen unabhängige Fachleute die wichtigsten rechtlichen, technischen und praktischen Risiken. Sie erhalten vor Ihrer endgültigen Entscheidung eine klare Zusammenfassung.",
    bullets: [
      "Rechtliche Hinweise und Eigentumsinformationen",
      "Technische Prüfung sichtbarer Mängel und Wartungspunkte",
      "Einblick in Genehmigungen, Anbauten und mögliche Belastungen",
      "Klare Ergebnisse, offene Punkte und empfohlene nächste Schritte",
      "Dokumente, Berichte, Fotos und Fragen in einem sicheren Kundenportal",
    ],
    href: "/de/services/purchase-safety-report",
    cta: "Purchase Safety Report ansehen",
    note:
      "Beim tatsächlichen Kauf einer Villa über Nordic Move Spain ist der unabhängige Sicherheitsbericht in der Kaufbegleitung enthalten. Der genaue Umfang der Prüfung hängt von der Immobilie, den verfügbaren Unterlagen und der Verfügbarkeit der geeigneten Fachleute ab.",
  },
  {
    number: "04",
    eyebrow: "Move-in ready",
    title: "Interior Design",
    text:
      "Nach dem Kauf helfen wir Ihnen, aus der Immobilie ein vollständiges und persönliches Zuhause zu machen. Wir entwickeln die gestalterische Richtung, wählen passende Materialien und Möbel aus und koordinieren die Umsetzung mit zuverlässigen lokalen Partnern.",
    bullets: [
      "Persönliche Interior Direction",
      "Auswahl von Möbeln, Materialien und Farben",
      "Styling, Beleuchtung und praktische Einrichtung",
      "Koordination mit lokalen Lieferanten und Partnern",
      "Eine ruhige und vollständig vorbereitete Ankunft",
    ],
    href: "/de/services/move-in-ready",
    cta: "Interior Design entdecken",
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
      name: "Area Match & Buyer Journey",
      item: absoluteUrl(pagePath),
    },
  ],
};

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nordic Move Spain Buyer Journey",
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
          <nav
            aria-label="Brotkrümelnavigation"
            className="mx-auto max-w-7xl"
          >
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
                Area Match &amp; Buyer Journey
              </li>
            </ol>
          </nav>
        </div>

        {/* HERO */}
        <section className="px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Nordic Move Buyer Journey
              </p>

              <h1 className="mt-6 font-serif text-5xl leading-[1.03] text-[#173252] md:text-7xl">
                Zuerst herausfinden, wo Sie leben möchten. Dann die richtige
                Immobilie finden.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl">
                Unsere Begleitung besteht aus vier klaren Leistungen. Sie
                beginnen mit einem kostenlosen persönlichen Area Match
                Portfolio, entdecken die Region auf einer Buyer Discovery Trip,
                kaufen mit mehr Sicherheit durch einen unabhängigen
                Sicherheitsbericht und gestalten Ihr Zuhause anschließend mit
                Interior Design.
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
                  src="/images/brochure-de.png"
                  alt="Nordic Move Spain Broschüre zur Buyer Discovery Trip und zum Interior Design"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)]">
                <img
                  src="/images/move-in-ready-costal.png"
                  alt="Nordic Move Spain Broschüre zum sicheren Immobilienkauf und Purchase Safety Report"
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
                Vier Leistungen, ein klarer Weg
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Von der ersten Orientierung bis zu einem Zuhause, das bereit
                zum Einziehen ist.
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
                  Ein kostenloses Portfolio, das Ihrer Suche eine klare Richtung
                  gibt.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/80">
                  Das Area Match Portfolio ist kein kurzes Ergebnis und keine
                  allgemeine Empfehlung. Sie erhalten ein ausführliches,
                  persönliches Dokument, mit dem Sie besser verstehen, welche
                  Umgebung, welcher Ort und welcher Immobilientyp zu Ihrem
                  gewünschten Leben in Spanien passen.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Das Portfolio zeigt nicht nur, wo Sie suchen könnten. Es schafft
                  auch Klarheit darüber, wonach Sie eigentlich suchen. Dadurch
                  vermeiden Sie eine endlose Suche in Angeboten, die am Ende
                  nicht zu Ihrem Alltag passen.
                </p>

                <a
                  href="/de/relocation-assessment"
                  className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Kostenloses Area Match Portfolio anfordern
                </a>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Was Sie erhalten
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Ein persönliches Profil Ihrer Wohn- und Lifestyle-Wünsche",
                    "Eine Auswahl passender Regionen und Orte",
                    "Informationen zu Atmosphäre, Erreichbarkeit und Alltag",
                    "Einblick in Gesundheitsversorgung, Infrastruktur und internationale Communities",
                    "Orientierung bei passenden Immobilientypen und Wohnlagen",
                    "Eine gezielte Grundlage für Besichtigungen und nächste Schritte",
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
                  Ihre Wünsche abgestimmt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DISCOVERY TRIP */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[40px] bg-white p-3 shadow-sm">
              <img
                src="/images/brochure-de.png"
                alt="Nordic Move Spain Broschüre zur Buyer Discovery Trip und Nordic Circle"
                className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Leistung 02 · Buyer Discovery Trip
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Erleben Sie, wie sich das Leben in der passenden Region wirklich
                anfühlt.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Ihr Area Match Portfolio bildet die Grundlage für eine
                persönliche Discovery Trip. Wir stellen eine Route durch die
                Regionen, Immobilien und Einrichtungen zusammen, die zu Ihrem
                Profil passen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Sie erhalten genügend Zeit, Unterschiede wahrzunehmen, gezielte
                Fragen zu stellen und herauszufinden, welche Umgebung auch
                außerhalb eines Urlaubs zu Ihnen passt. Die Reise verbindet
                ausgewählte Besichtigungen mit lokalem Wissen und passenden
                Lifestyle-Erlebnissen.
              </p>

              <a
                href="/de/services/discovery-trips"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Buyer Discovery Trip ansehen
              </a>

              <p className="mt-6 text-xs leading-relaxed text-stone-500">
                * Beim tatsächlichen Kauf einer Villa über Nordic Move Spain
                wird abhängig vom Kaufpreis die Hälfte oder der gesamte
                Reisepreis erstattet. Die genaue Erstattung und die geltenden
                Bedingungen werden vorab schriftlich bestätigt.
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
                Unabhängige Prüfung, bevor Sie endgültig kaufen.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Eine schöne Präsentation erzählt nicht die ganze Geschichte.
                Deshalb lassen wir bei einem ernsthaften Kauf die wichtigsten
                rechtlichen, technischen und praktischen Punkte durch
                unabhängige Fachleute prüfen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Die Ergebnisse werden in einem übersichtlichen
                Sicherheitsbericht zusammengeführt. So können Sie besser
                einschätzen, ob Sie fortfahren, zusätzliche Bedingungen stellen,
                neu verhandeln oder von der Immobilie Abstand nehmen sollten.
              </p>

              <a
                href="/de/services/purchase-safety-report"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Purchase Safety ansehen
              </a>

              <p className="mt-6 text-xs leading-relaxed text-stone-500">
                * Beim tatsächlichen Kauf einer Villa über Nordic Move Spain ist
                der unabhängige Sicherheitsbericht in der Kaufbegleitung
                enthalten. Der genaue Umfang der Prüfung hängt von der
                Immobilie, den verfügbaren Unterlagen und der Verfügbarkeit der
                geeigneten Fachleute ab.
              </p>
            </div>

            <div className="order-1 overflow-hidden rounded-[40px] bg-white p-3 shadow-sm lg:order-2">
              <img
                src="/images/move-in-ready-costal.png"
                alt="Nordic Move Spain Broschüre zum Purchase Safety Report"
                className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* SECURE CLIENT PORTAL */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-white p-10 shadow-sm md:p-14 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Sicheres Kundenportal
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                  Alle wichtigen Dokumente an einem geschützten Ort.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Bei einem Immobilienkauf entstehen zahlreiche Unterlagen,
                  Berichte, Fotos, Fragen und offene Punkte. Statt diese über
                  verschiedene E-Mails oder Nachrichten zu verteilen, werden
                  relevante Informationen übersichtlich in einem sicheren
                  Kundenportal gesammelt.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Dadurch behalten Sie den Überblick über den aktuellen Stand,
                  wichtige Dokumente und die nächsten Schritte Ihres
                  Kaufprozesses.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "Kaufunterlagen",
                    "Wichtige Dokumente und verfügbare Eigentumsinformationen übersichtlich gebündelt.",
                  ],
                  [
                    "Berichte und Fotos",
                    "Technische und rechtliche Berichte sowie relevante Bilder zentral verfügbar.",
                  ],
                  [
                    "Fragen und offene Punkte",
                    "Noch zu klärende Themen und empfohlene nächste Schritte bleiben nachvollziehbar.",
                  ],
                  [
                    "Geschützter Zugriff",
                    "Dokumente werden in einer kontrollierten Kundenumgebung statt lose über verschiedene Kanäle geteilt.",
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

        {/* INTERIOR DESIGN */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#e9dfd2]">
            <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Leistung 04 · Interior Design
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                  In einem Zuhause ankommen, das sich bereits vertraut anfühlt.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-700">
                  Nach dem Kauf entwickeln wir gemeinsam mit Ihnen eine klare
                  Interior Direction, die zur Immobilie, zur Umgebung und zu
                  Ihrer gewünschten Lebensweise passt.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  Wir begleiten die Auswahl von Möbeln, Materialien,
                  Beleuchtung und Styling und stimmen die praktische Umsetzung
                  mit zuverlässigen lokalen Partnern ab. So müssen Sie nicht
                  monatelang alles aus der Ferne koordinieren und kommen in
                  einem vollständig vorbereiteten Zuhause an.
                </p>

                <a
                  href="/de/services/move-in-ready"
                  className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                >
                  Interior Design entdecken
                </a>

                <p className="mt-6 text-xs leading-relaxed text-stone-500">
                  Entwurf, Budget, Zeitplanung und Ausführung werden auf die
                  Immobilie, Ihre Wünsche und die Verfügbarkeit ausgewählter
                  lokaler Partner abgestimmt.
                </p>
              </div>

              <div className="min-h-[520px]">
                <img
                  src="/images/interior-design.png"
                  alt="Warmes mediterranes Interior Design für eine Villa an der Costa Blanca"
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
              Beginnen Sie mit Klarheit
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
              Finden Sie zuerst heraus, was wirklich zu Ihnen passt.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/75">
              Fordern Sie Ihr kostenloses Area Match Portfolio an und erhalten
              Sie eine klare, persönliche Grundlage für Ihre Immobiliensuche an
              der Costa Blanca.
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
                Erstgespräch vereinbaren
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}