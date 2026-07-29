const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
        alternates: {
          canonical: "/de",
          languages: {
            "nl-NL": "/nl",
            en: "/",
            "de-DE": "/de",
            "sv-SE": "/sv",
            "x-default": "/",
          },
        },
      }
    : {}),
  title: "Mit mehr Sicherheit an der Costa Blanca kaufen und umziehen | Nordic Move Spain",
  description:
    "Kaufbegleitung und umfassende Relocation an der Costa Blanca: von der Wahl der passenden Region und Immobilie über unabhängige Prüfungen bis zu Kauf, Renovierung, Umzug und praktischer Unterstützung nach der Ankunft.",
  applicationName: "Nordic Move Spain",
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Immobilien und Relocation",
  keywords: [
    "Immobilie kaufen Costa Blanca",
    "Kaufbegleitung Costa Blanca",
    "Haus kaufen in Spanien",
    "Immobilienmakler Costa Blanca",
    "Käufermakler Costa Blanca",
    "deutschsprachige Kaufbegleitung Costa Blanca",
    "technische Immobilienprüfung Spanien",
    "rechtliche Due Diligence Immobilien Spanien",
    "Umzug an die Costa Blanca",
    "Relocation Costa Blanca",
    "Costa Blanca Nord",
  ],
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
    title: "Mit mehr Sicherheit kaufen und umfassend begleitet umziehen | Nordic Move Spain",
    description:
      "Von der Wahl der passenden Region und Immobilie über unabhängige Prüfungen, Kauf, Renovierung und Umzug bis zur praktischen Unterstützung für einen entspannten Start in Spanien.",
    type: "website",
    locale: "de_DE",
    siteName: "Nordic Move Spain",
    ...(siteUrl
      ? {
          url: "/de",
          images: [
            {
              url: "/images/laatste-homepage.png",
              alt: "Nordic Move Spain begleitet internationale Käufer beim Immobilienkauf an der Costa Blanca",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Mit mehr Sicherheit an der Costa Blanca kaufen und umziehen | Nordic Move Spain",
    description:
      "Kaufbegleitung und umfassende Relocation: vom Area Match und unabhängigen Prüfungen bis zu Kauf, Renovierung, Umzug und praktischer Unterstützung nach der Ankunft.",
    ...(siteUrl ? { images: ["/images/laatste-homepage.png"] } : {}),
  },
};

export default function GermanHomePage() {
  const guideCards = [
    {
      href: "/de/guides/beste-orte-costa-blanca-nord-rentner",
      label: "Ratgeber für den Ruhestand",
      title: "Die besten Orte an der Costa Blanca für den Ruhestand",
      text:
        "Ein praktischer Ratgeber für internationale Käufer, die die besten Orte an der Costa Blanca für den Ruhestand vergleichen.",
      cta: "Ratgeber zum Ruhestand lesen →",
      featured: true,
    },
    {
      href: "/de/guides/immobilie-in-spanien-kaufen",
      label: "Kaufen in Spanien",
      title: "Eine Immobilie in Spanien kaufen",
      text:
        "Ein umfassender Ratgeber zu rechtlichen Prüfungen, Hypotheken, Kaufnebenkosten und dem Kaufprozess für internationale Käufer.",
      cta: "Ratgeber lesen →",
      featured: false,
    },
    {
      href: "/de/guides/deutsche-steuerregeln-zweitwohnung-spanien",
      label: "Steuerratgeber für Deutsche",
      title: "Steuerregeln für eine Zweitwohnung in Spanien",
      text:
        "Was Käufer aus Deutschland über spanische Immobiliensteuern, eine Zweitwohnung in Spanien, Mieteinnahmen, Veräußerungsgewinne und grenzüberschreitende Steuerfragen wissen sollten.",
      cta: "Steuerratgeber lesen →",
      featured: false,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "#organization",
        name: "Nordic Move Spain",
        description:
          "Kauf- und Relocation-Begleitung für internationale Käufer, die mit mehr Sicherheit eine Immobilie erwerben und ihren Umzug an die Costa Blanca sorgfältig organisieren möchten.",
      },
      {
        "@type": "WebPage",
        "@id": "#webpage",
        name: "Immobilie an der Costa Blanca kaufen | Nordic Move Spain",
        description:
          "Kaufbegleitung und umfassende Relocation mit Area Match, gezielter Immobiliensuche, unabhängigen technischen und rechtlichen Prüfungen sowie Unterstützung über die Ankunft hinaus.",
        inLanguage: "de-DE",
        about: {
          "@id": "#buyer-service",
        },
        publisher: {
          "@id": "#organization",
        },
      },
      {
        "@type": "Service",
        "@id": "#buyer-service",
        name: "Kaufbegleitung und Relocation an der Costa Blanca",
        serviceType: [
          "Area Match",
          "Immobilienauswahl und Besichtigungen",
          "Technische Prüfung und Dokumentenscreening",
          "Koordination der rechtlichen Due Diligence",
          "Home Setup und Versorgungsanschlüsse",
          "Renovation & Interior",
          "Family Relocation",
        ],
        areaServed: {
          "@type": "Place",
          name: "Costa Blanca, Spanien",
        },
        provider: {
          "@id": "#organization",
        },
        audience: {
          "@type": "Audience",
          audienceType: "Internationale Immobilienkäufer",
        },
      },
    ],
  };

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/15 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="w-[180px]"></div>

          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/de" className="border-b border-[#c8a063] pb-1">
              Home
            </a>

            <a href="/de/regions" className="hover:text-white/70 transition">
              Regionen
            </a>

            <a href="/de/services" className="hover:text-white/70 transition">
              Leistungen
            </a>

            <a href="/de/guides" className="hover:text-white/70 transition">
              Ratgeber
            </a>

            <a href="/de/about-us" className="hover:text-white/70 transition">
              Über uns
            </a>

            <a href="/de/contact" className="hover:text-white/70 transition">
              Kontakt
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href="/"
                aria-label="Englische Version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                EN
              </a>

              <a
                href="/nl"
                aria-label="Niederländische Version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                NL
              </a>

              <a
                href="/de"
                aria-label="Deutsche Version"
                className="rounded-full border border-[#c8a063] bg-[#c8a063] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#b48a4f]"
              >
                DE
              </a>

              <a
                href="/sv"
                aria-label="Schwedische Version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                SE
              </a>
            </div>

            <a
              href="/de/contact"
              className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Kennenlerngespräch vereinbaren
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Mit mehr Sicherheit eine Immobilie kaufen und umfassend begleitet an die Costa Blanca umziehen mit Nordic Move Spain"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/28 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca
            </p>

            <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.02] text-[#f3ede3] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-5xl">
              Mit mehr Sicherheit an der Costa Blanca kaufen.
              <span className="mt-2 block text-[0.78em] leading-tight text-[#f3ede3]/95">
                Umfassend begleitet vom Kauf bis zur Ankunft.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#f7f2ea] drop-shadow-[0_2px_12px_rgba(0,0,0,0.38)] md:text-xl">
              Nordic Move Spain begleitet internationale Käufer von der Wahl der passenden
              Region und Immobilie über unabhängige rechtliche und technische Prüfungen bis
              zu Kauf, Renovierung und Umzug. Auch danach bleiben wir an Ihrer Seite – mit
              praktischer Unterstützung bei Verwaltung, Versicherungen und lokalen
              Dienstleistungen für einen entspannten Start in Spanien.
            </p>

            <p className="mt-7 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              Kaufbegleitung · Unabhängige Prüfungen · Umfassende Relocation
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/de/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Kostenloses Area Match starten
              </a>

              <a
                href="/de/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Kennenlerngespräch vereinbaren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PROOF BAR */}
      <section className="border-b border-stone-200/70 bg-white/75 px-8 py-5 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-4 text-center text-sm font-medium text-[#1e2a3a] md:grid-cols-3">
          <p>Persönliche Begleitung auf Käuferseite</p>
          <p>Rechtliche und technische Prüfung vor dem Kauf</p>
          <p>Begleitung auf Deutsch, Englisch, Niederländisch und Schwedisch</p>
        </div>
      </section>

      {/* COMPLETE BUYING & RELOCATION SUPPORT */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr] xl:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Kaufbegleitung &amp; Relocation
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Von der Immobiliensuche bis zum Leben in Spanien.
              </h2>

              <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-[#1e2a3a]">
                Von der passenden Region und Immobilie bis zu unabhängigen Kaufprüfungen,
                Umzug, Renovierung und Einrichtung.
              </p>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-600">
                Eine Immobilie in Spanien zu kaufen ist ein schöner Schritt, doch der
                Prozess kann schnell komplex werden. Sie haben mit Maklern, Anwälten,
                Bausachverständigen, Notaren, Handwerkern, Umzugsunternehmen und weiteren
                Dienstleistern zu tun – jeweils mit eigenen Aufgaben und Verantwortlichkeiten.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Nordic Move Spain führt diese Schritte zusammen und begleitet den Prozess
                von der Orientierung bis zur Ankunft. Das beginnt mit Ihrem persönlichen
                Area Match und einer gezielten Immobilienauswahl und kann Kaufbegleitung,
                administrative Themen, Versorgungsanschlüsse, Renovierung, Umzug und
                Einrichtung umfassen.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Wir sprechen Spanisch, kennen die lokalen Abläufe und arbeiten mit
                sorgfältig ausgewählten unabhängigen Fachleuten.
              </p>

              <h3 className="mt-10 max-w-2xl font-serif text-3xl leading-tight text-[#1e2a3a]">
                Erst prüfen, dann kaufen
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Vor dem Kauf lassen wir die Immobilie unabhängig technisch und rechtlich
                prüfen. Ein qualifizierter Bausachverständiger beurteilt den tatsächlichen
                Zustand und gleicht ihn mit den verfügbaren Unterlagen und Registrierungen
                ab. Ein unabhängiger spanischer Immobilienanwalt prüft unter anderem
                Eigentum, Belastungen, Schulden, Genehmigungen und Verträge.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                So erhalten Sie vor Ihrer endgültigen Entscheidung ein klareres Bild vom
                technischen Zustand, der rechtlichen Situation und möglichen Risiken der
                Immobilie.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Sie entscheiden sich für die vollständige Buyer Journey oder nur für die
                Unterstützung, die Sie tatsächlich benötigen.
              </p>

              <p className="mt-7 text-xl font-medium leading-relaxed text-stone-700">
                Gezielt suchen. Mit mehr Sicherheit kaufen. Gut ankommen.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/de/relocation-assessment"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Starten Sie mit Ihrem kostenlosen persönlichen Area Match Portfolio
                </a>

                <a
                  href="/de/contact"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Kennenlerngespräch vereinbaren
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[460px] lg:sticky lg:top-28 lg:ml-auto lg:mr-0">
              <div className="absolute -inset-2 rounded-[36px] bg-[#e9dfd2]"></div>

              <div className="relative overflow-hidden rounded-[32px] bg-white p-2 shadow-sm">
                <img
                  src="/images/founder.png"
                  alt="Die Gründer von Nordic Move Spain"
                  className="h-auto max-h-[500px] w-full rounded-[26px] object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR STARTING POINT */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Wo stehen Sie im Prozess?
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
              Starten Sie genau dort, wo Sie unsere Unterstützung benötigen.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                href: "/de/services/area-match",
                label: "Ich orientiere mich noch",
                title: "Finden Sie zuerst die Region, die zu Ihnen passt",
                text: "Starten Sie mit einem persönlichen Area Match und gewinnen Sie Klarheit, bevor Sie Immobilien vergleichen.",
                cta: "Area Match entdecken →",
              },
              {
                href: "/de/services/purchase-safety-report",
                label: "Ich habe eine Immobilie gefunden",
                title: "Lassen Sie den Kauf unabhängig prüfen",
                text: "Kombinieren Sie rechtliche Due Diligence mit einer technischen Prüfung, bevor Sie endgültig entscheiden.",
                cta: "Purchase Safety entdecken →",
              },
              {
                href: "/de/services/move-in-ready",
                label: "Ich möchte kaufen und gut ankommen",
                title: "Lassen Sie auch die praktische Umsetzung koordinieren",
                text: "Von Umzug und Versorgungsanschlüssen bis zu Renovierung, Einrichtung und einem entspannten Start.",
                cta: "Move-In Ready entdecken →",
              },
            ].map((route) => (
              <a
                key={route.href}
                href={route.href}
                className="rounded-[28px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  {route.label}
                </p>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {route.title}
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">{route.text}</p>
                <span className="mt-6 inline-block text-sm font-medium text-[#1e2a3a]">
                  {route.cta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NORDIC MOVE BUYER JOURNEY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Die Nordic Move Buyer Journey
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
              Wählen Sie die Begleitung, die zu Ihrer Situation passt.
            </h2>

            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-lg font-medium leading-relaxed text-[#1e2a3a]">
                Sie müssen nicht den gesamten Prozess durchlaufen.
              </p>

              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Wählen Sie nur die Unterstützung, die Sie benötigen – von der passenden
                Region und einer persönlichen Buyer Discovery bis zu unabhängigen
                Kaufprüfungen und einer Immobilie, die für Ihre Ankunft vorbereitet ist.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            <a
              href="/de/services/area-match"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/area-match.png"
                alt="Persönlicher Area Match Report für internationale Immobilienkäufer an der Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Orientierung
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Area Match Report
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Entdecken Sie, welche Regionen, Orte und Lebensstile am besten zu Ihren
                  Prioritäten, Ihrem Budget und Ihren langfristigen Plänen passen. Ihr
                  persönlicher Report enthält lokale Informationen zu Gesundheitsversorgung,
                  Schulen, Infrastruktur, Erreichbarkeit und Community-Fit.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Kostenloses Area Match anfragen →
                </div>
              </div>
            </a>

            <a
              href="/de/services/discovery-trips"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/discover-card.png"
                alt="Private und kleine Buyer Discovery Experience an der Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Limitierte Termine · Optional
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Buyer Discovery Experience
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Erleben Sie ausgewählte Immobilien, Wohnlagen und den Alltag bei einer
                  privaten Discovery oder in einer sorgfältig zusammengestellten kleinen
                  Edition. Verfügbar an ausgewählten Terminen und nach Verfügbarkeit.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Buyer Discovery entdecken →
                </div>
              </div>
            </a>

            <a
              href="/de/services/purchase-safety-report"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/legal.png"
                alt="Unabhängige technische und rechtliche Prüfungen vor dem Kauf an der Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Prüfungen vor dem Kauf
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Purchase Safety
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Haben Sie bereits eine Immobilie gefunden? Wir koordinieren eine
                  unabhängige technische Prüfung und vermitteln einen passenden unabhängigen
                  Anwalt für die rechtliche Due Diligence, bevor Sie sich endgültig festlegen.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Purchase Safety entdecken →
                </div>
              </div>
            </a>

            <a
              href="/de/services/move-in-ready"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/move-in-ready-ibiza.png"
                alt="Move-In Ready: Renovierung, Relocation und Einrichtungsbegleitung an der Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Nach dem Kauf
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Move-In Ready Support
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Von Versorgungsanschlüssen und Umzugsbegleitung bis zu Renovierung,
                  Interior Design, Einrichtung und den letzten Vorbereitungen. Wir
                  koordinieren die praktischen Schritte rund um Ihre Immobilie, Planung und Ihr Budget.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Move-In Ready entdecken →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* PURCHASE SAFETY — ONE CLEAR DECISION */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="bg-[#1e2a3a] p-12 text-white lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Zwei unabhängige Prüfungen. Eine klare Kaufempfehlung.
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                Mehr Sicherheit, bevor Sie entscheiden.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Ein unabhängiger Sachverständiger prüft und vermisst die Immobilie und
                gleicht sie mit den verfügbaren Unterlagen ab. So werden Mängel,
                Abweichungen und mögliche Instandsetzungspunkte frühzeitig sichtbar.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Ein unabhängiger Anwalt prüft Eigentum, Belastungen, Schulden,
                Genehmigungen, Verträge und Übertragungsbedingungen.
              </p>

              <p className="mt-6 text-base font-medium leading-relaxed text-[#c8a063]">
                Wir führen beide Berichte in einer klaren Empfehlung zusammen:
                kaufen, neu bewerten oder nicht kaufen.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/de/services/purchase-safety-report"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  So funktioniert Purchase Safety
                </a>

                <a
                  href="/de/contact"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
                >
                  Immobiliencheck anfragen
                </a>
              </div>
            </div>

            <div className="p-10 md:p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Zwei unabhängige Bewertungen. Eine klare Entscheidung.
              </p>

              <h3 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-[#1e2a3a]">
                Kaufen, neu bewerten oder nicht kaufen.
              </h3>

              <div className="mt-10 grid gap-6">
                <article className="rounded-[28px] border border-emerald-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">
                    Grün · Kaufen
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Die Prüfungen bieten ausreichende Grundlage, um unter den genannten
                    Bedingungen mit dem Kauf fortzufahren.
                  </p>
                </article>

                <article className="rounded-[28px] border border-amber-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
                    Orange · Neu bewerten
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Es bestehen Fragen oder Risiken. Zunächst sind weitere Prüfungen,
                    Nachbesserungen, Neuverhandlungen oder zusätzliche Bedingungen erforderlich.
                  </p>
                </article>

                <article className="rounded-[28px] border border-red-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-800">
                    Rot · Nicht kaufen
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Die Risiken sind zu groß. Kaufen Sie nicht, solange diese vor Ihrer
                    verbindlichen Entscheidung nicht vollständig und nachweisbar geklärt sind.
                  </p>
                </article>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                Die Dokumentenprüfung durch den unabhängigen Sachverständigen ist ein
                erster Abgleich und ersetzt weder die rechtliche Due Diligence noch eine
                formelle Bestätigung durch zuständige Behörden. Die technischen und
                rechtlichen Prüfungen werden von unabhängigen Fachleuten durchgeführt, die
                jeweils für ihre eigene Berichterstattung verantwortlich sind. Zusätzliche
                Fachprüfungen können erforderlich sein. Keine Prüfung bietet absolute Sicherheit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONAL BUYER DISCOVERY */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#1e2a3a] text-white shadow-sm">
          <div className="grid items-center lg:grid-cols-[0.8fr_1.2fr]">
            <div className="p-5 md:p-7">
              <img
                src="/images/community-home.png"
                alt="Buyer Discovery Experience und lokale Community an der Costa Blanca"
                className="h-[300px] w-full rounded-[28px] object-cover md:h-[360px]"
                loading="lazy"
              />
            </div>

            <div className="p-9 md:p-12">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Optional · Buyer Discovery
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">
                Erleben Sie nicht nur die Immobilie, sondern auch das Leben drumherum.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Entscheiden Sie sich für eine private Buyer Discovery Experience oder
                entdecken Sie die Region in einer kleinen, sorgfältig zusammengestellten
                Gruppe. Sie erleben Infrastruktur, Atmosphäre und Alltag, ohne dass die
                Teilnahme an einer Gruppe Teil Ihres Kaufprozesses sein muss.
              </p>

              <a
                href="/de/services/discovery-trips"
                className="mt-8 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Buyer Discovery entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPANDED MOVE-IN READY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#e9dfd2] shadow-sm">
          <div className="grid items-stretch lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center p-10 md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Nach dem Kauf · Move-In Ready
              </p>

              <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-6xl">
                Von der Schlüsselübergabe zu einer Immobilie, die für Ihre Ankunft bereit ist.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-700">
                Nach dem Kauf stehen häufig noch zahlreiche praktische Entscheidungen an.
                Nordic Move bündelt diese Schritte in drei flexiblen Modulen: Home Setup,
                Renovation &amp; Interior und Family Relocation.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
                Sie wählen nur die Unterstützung, die zu Ihrer Immobilie, Familie, Planung
                und Ihrem Budget passt. Wir koordinieren die vereinbarten Beteiligten und
                nächsten Schritte, während jeder externe Spezialist für die eigene Beratung
                und Ausführung verantwortlich bleibt.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/de/services/move-in-ready"
                  className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
                >
                  Move-In Ready entdecken
                </a>

                <a
                  href="/de/contact"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Kennenlerngespräch vereinbaren
                </a>

                <a
                  href="https://wa.me/31683848239?text=Hallo%20Nordic%20Move%20Spain%2C%20ich%20m%C3%B6chte%20gerne%20meinen%20Move-In-Ready-Plan%20besprechen."
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ihren Move-In-Ready-Plan über WhatsApp besprechen"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1e2a3a] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c8a063] text-white">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M16.04 3C8.87 3 3.05 8.78 3.05 15.91c0 2.28.6 4.51 1.75 6.47L3 29l6.82-1.77a13.03 13.03 0 0 0 6.22 1.58h.01C23.21 28.81 29 23.03 29 15.9 29 8.78 23.21 3 16.04 3Zm0 23.62h-.01a10.83 10.83 0 0 1-5.52-1.51l-.4-.24-4.05 1.05 1.08-3.93-.26-.4a10.7 10.7 0 0 1-1.65-5.68c0-5.92 4.85-10.74 10.82-10.74 5.96 0 10.81 4.82 10.81 10.74 0 5.92-4.85 10.71-10.82 10.71Zm5.94-8.02c-.33-.16-1.92-.94-2.22-1.05-.3-.11-.52-.16-.74.16-.22.33-.85 1.05-1.04 1.27-.19.22-.38.24-.71.08-.33-.16-1.38-.5-2.63-1.61a9.8 9.8 0 0 1-1.82-2.25c-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.7 0 1.59 1.17 3.13 1.33 3.35.16.22 2.3 3.48 5.57 4.88.78.33 1.38.53 1.86.68.78.25 1.49.21 2.05.13.63-.09 1.92-.78 2.19-1.54.27-.76.27-1.4.19-1.54-.08-.14-.3-.22-.63-.38Z" />
                    </svg>
                  </span>
                  Über WhatsApp besprechen
                </a>
              </div>
            </div>

            <div className="relative min-h-[480px] p-6 md:p-8 lg:min-h-[650px] lg:p-10">
              <img
                src="/images/move-in-ready-mediterranean-warmth.png"
                alt="Mediterrane Move-In-Ready-Immobilie mit Terrasse und Außenküche an der Costa Blanca"
                className="h-full min-h-[440px] w-full rounded-[32px] object-cover lg:min-h-[570px]"
                loading="lazy"
              />

              <div className="absolute bottom-10 left-10 right-10 rounded-[26px] bg-white/90 p-6 shadow-lg backdrop-blur md:bottom-12 md:left-12 md:right-auto md:max-w-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  Ein abgestimmter Prozess
                </p>
                <p className="mt-3 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  Praktische Vorbereitung, Renovierung und Einrichtung aus einer Hand koordiniert.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1e2a3a]/10 px-8 py-10 md:px-12 md:py-12 lg:px-16">
            <div className="grid gap-6 lg:grid-cols-3">
              <a
                href="/de/services/move-in-ready#home-setup"
                className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                  Modul 01
                </p>
                <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  Home Setup
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Versorgungsanschlüsse, Internet, Versicherungen, Sicherheit, Reinigung,
                  Wartung und kleinere Arbeiten vor Ihrer Ankunft.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-[#1e2a3a]">
                  Home Setup ansehen →
                </span>
              </a>

              <a
                href="/de/services/move-in-ready#renovation-interior"
                className="rounded-[30px] bg-[#1e2a3a] p-8 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                  Modul 02
                </p>
                <h3 className="mt-4 font-serif text-3xl">
                  Renovation &amp; Interior
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Renovierungskoordination, Bauunternehmen und Fachleute, Interior-Konzept,
                  Materialien, Möbel, Beleuchtung, Installation und Styling.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-white">
                  Renovation &amp; Interior ansehen →
                </span>
              </a>

              <a
                href="/de/services/move-in-ready#family-relocation"
                className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                  Modul 03
                </p>
                <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  Family Relocation
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Umzugsunternehmen, Schulen, Gesundheitsversorgung, Versicherungen,
                  Verwaltung, lokale Angebote sowie Anschluss an Clubs und Community.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-[#1e2a3a]">
                  Family Relocation ansehen →
                </span>
              </a>
            </div>

            <p className="mt-8 max-w-5xl text-sm leading-relaxed text-stone-500">
              Die Module können einzeln oder kombiniert gebucht werden. Umfang, Planung,
              Kosten und Verantwortlichkeiten werden für jeden Bereich vorab festgelegt.
              Externe Fachleute bleiben für ihre eigene Beratung, Angebote und Ausführung
              verantwortlich.
            </p>
          </div>
        </div>
      </section>

      {/* GUIDES AND INSIGHTS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Käufer-Ratgeber
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Klare Orientierung, bevor Sie eine Immobilie an der Costa Blanca kaufen.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Eine Auswahl praktischer Ratgeber für internationale Käufer, die
              Ruhestandsregionen, den spanischen Kaufprozess und steuerliche Fragen
              verstehen möchten, bevor sie entscheiden.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guideCards.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className={
                  guide.featured
                    ? "rounded-[32px] bg-[#1e2a3a] p-8 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    : "rounded-[32px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                }
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  {guide.label}
                </p>

                <h3
                  className={
                    guide.featured
                      ? "mt-5 font-serif text-3xl leading-tight text-white"
                      : "mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]"
                  }
                >
                  {guide.title}
                </h3>

                <p
                  className={
                    guide.featured
                      ? "mt-5 leading-relaxed text-white/75"
                      : "mt-5 leading-relaxed text-stone-600"
                  }
                >
                  {guide.text}
                </p>

                <span
                  className={
                    guide.featured
                      ? "mt-8 inline-block text-sm uppercase tracking-[0.25em] text-white"
                      : "mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#1e2a3a]"
                  }
                >
                  {guide.cta}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/de/guides"
              className="inline-block rounded-full border border-[#1e2a3a] px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Alle Käufer-Ratgeber ansehen
            </a>
          </div>
        </div>
      </section>


      {/* FINAL GENERAL CTA */}
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] px-10 py-14 text-white shadow-sm md:px-16 md:py-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Persönliche Begleitung ab Ihrem Ausgangspunkt
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Bereit, Ihren Kauf sorgfältig vorzubereiten?
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/80">
            Starten Sie mit einem kostenlosen Area Match, wenn Sie noch nach der
            passenden Region suchen, oder vereinbaren Sie ein persönliches Gespräch,
            wenn Sie bereits eine Immobilie gefunden haben oder eine umfassende
            Begleitung besprechen möchten.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/de/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Kostenloses Area Match anfragen
            </a>

            <a
              href="/de/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Kennenlerngespräch vereinbaren
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}