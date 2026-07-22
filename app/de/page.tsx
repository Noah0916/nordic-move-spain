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
  title: "Mit mehr Sicherheit eine Immobilie an der Costa Blanca kaufen | Nordic Move Spain",
  description:
    "Mehr Sicherheit, schnellere Klarheit und ein fester Ansprechpartner beim Immobilienkauf an der Costa Blanca. Mit Area Match, unabhängigen Prüfungen und persönlicher Kaufbegleitung.",
  applicationName: "Nordic Move Spain",
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Immobilien und Relocation",
  keywords: [
    "Immobilie Costa Blanca kaufen",
    "Kaufbegleitung Costa Blanca",
    "Haus in Spanien kaufen",
    "Immobilienmakler Costa Blanca",
    "Käufermakler Costa Blanca",
    "internationale Kaufbegleitung Costa Blanca",
    "Baugutachten Immobilie Spanien",
    "juristische Due Diligence spanische Immobilie",
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
    title: "Mehr Sicherheit beim Immobilienkauf an der Costa Blanca | Nordic Move Spain",
    description:
      "Gezielt suchen mit einem kostenlosen Area Match, unabhängigen technischen und juristischen Prüfungen und einem festen Ansprechpartner von der Orientierung bis zur Ankunft.",
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
    title: "Sicherer und gezielter an der Costa Blanca kaufen | Nordic Move Spain",
    description:
      "Mehr Sicherheit, schnellere Klarheit und ein fester Ansprechpartner. Vom kostenlosen Area Match und der Immobilienauswahl bis zu unabhängigen Prüfungen und Ihrer Ankunft.",
    ...(siteUrl ? { images: ["/images/laatste-homepage.png"] } : {}),
  },
};

export default function GermanHomePage() {
  const guideCards = [
    {
      href: "/de/guides/best-areas-costa-blanca-north-retirees",
      label: "Regionenratgeber für den Ruhestand",
      title: "Die besten Orte an der Costa Blanca für den Ruhestand",
      text:
        "Ein praktischer Ratgeber für internationale Käufer, die die besten Orte für den Ruhestand an der Costa Blanca vergleichen.",
      cta: "Ratgeber zum Ruhestand lesen →",
      featured: true,
    },
    {
      href: "/de/guides/buying-property-spain",
      label: "Immobilienkauf in Spanien",
      title: "Eine Immobilie in Spanien kaufen",
      text:
        "Ein umfassender Ratgeber zu juristischen Prüfungen, Hypotheken, Kaufnebenkosten und dem Kaufprozess für internationale Käufer.",
      cta: "Ratgeber lesen →",
      featured: false,
    },
    {
      href: "/de/guides/spanish-tax-rules-for-dutch-homeowners",
      label: "Steuerratgeber für niederländische Käufer",
      title: "Spanische Steuervorschriften für niederländische Immobilieneigentümer",
      text:
        "Was niederländische Käufer über spanische Immobiliensteuern, die niederländische Steuererklärung, Zweitwohnsitze, Mieteinnahmen, Veräußerungsgewinne und die Vermeidung der Doppelbesteuerung wissen sollten.",
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
          "Persönliche Kaufbegleitung und ein fester Ansprechpartner für internationale Käufer, die eine Immobilie an der Costa Blanca sicherer und gezielter erwerben möchten.",
      },
      {
        "@type": "WebPage",
        "@id": "#webpage",
        name: "Immobilienkauf an der Costa Blanca | Nordic Move Spain",
        description:
          "Kaufbegleitung mit kostenlosem Area Match, gezielter Immobilienauswahl, zwei unabhängigen Prüfungen und einem festen Ansprechpartner bis zu Ihrer Ankunft.",
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
          "Technische Prüfung und Dokumentenabgleich",
          "Koordination der juristischen Due Diligence",
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
              Startseite
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
          alt="Immobilie an der Costa Blanca mit sorgfältiger und unabhängiger Begleitung durch Nordic Move Spain kaufen"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/28 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca
            </p>

            <h1 className="mt-5 max-w-xl font-serif text-4xl leading-[1.02] text-[#f3ede3] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-5xl">
              Mit mehr Sicherheit eine Immobilie kaufen
              <br />
              an der Costa Blanca.
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#f7f2ea] drop-shadow-[0_2px_12px_rgba(0,0,0,0.38)] md:text-xl">
              Für internationale Käufer, die Klarheit und einen festen Ansprechpartner wünschen.
              Nordic Move koordiniert den Weg von der Wahl der richtigen Region und
              Immobilie über unabhängige Prüfungen bis zum Kauf und zur Ankunft.
            </p>

            <p className="mt-7 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              Ein fester Ansprechpartner · Unabhängige Prüfungen · Von der Suche bis zur Ankunft
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/de/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Starten Sie mit Ihrem kostenlosen Area Match
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
          <p>Persönliche Begleitung auf der Seite des Käufers</p>
          <p>Juristische und technische Prüfungen vor dem Kauf</p>
          <p>Begleitung auf Niederländisch, Englisch, Deutsch und Schwedisch</p>
        </div>
      </section>

      {/* COMPLETE BUYER & RELOCATION SUPPORT */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr] xl:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Persönliche Kaufbegleitung
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Mehr Sicherheit. Ein fester Ansprechpartner.
              </h2>

              <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-[#1e2a3a]">
                Von der Wahl der richtigen Region und Immobilie bis zu unabhängigen Kaufprüfungen,
                Relocation, Renovierung und Einrichtung.
              </p>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-600">
                Der Kauf einer Immobilie in Spanien sollte ein schöner Schritt sein. Der Prozess kann
                jedoch schnell unübersichtlich werden, wenn Sie mit Immobilienmaklern,
                privaten Verkäufern, einem Anwalt, einem Bausachverständigen, dem Notar,
                Handwerkern, Umzugsunternehmen und weiteren Dienstleistern kommunizieren müssen —
                häufig in einer anderen Sprache und mit auf mehrere Parteien verteilten Zuständigkeiten.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Nordic Move Spain führt diese einzelnen Schritte zusammen. Wir begleiten
                Sie bei der Suche und beim Kauf der passenden Immobilie an der Costa Blanca und
                können auch praktische Aufgaben vor und nach dem Kauf koordinieren. Von Ihrem
                persönlichen Area Match und der gezielten Immobilienauswahl bis zu Relocation,
                Versorgungsanschlüssen, Renovierung und Interior Styling.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Sie haben einen festen Ansprechpartner, der Ihre Prioritäten kennt, die
                beteiligten Parteien koordiniert und Vereinbarungen, Zuständigkeiten und nächste Schritte klar hält.
                Wir sprechen Spanisch, kennen die lokalen Abläufe und arbeiten mit sorgfältig
                ausgewählten unabhängigen Fachleuten und Dienstleistern.
              </p>

              <h3 className="mt-10 max-w-2xl font-serif text-3xl leading-tight text-[#1e2a3a]">
                Erst Sicherheit, dann Kauf
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Aus Erfahrung wissen wir, wie schnell Probleme entstehen können, wenn lokale
                Kenntnisse fehlen oder Fachleute nicht ausreichend zusammenarbeiten. Verdeckte
                Mängel, Abweichungen in Registrierungen und juristische Probleme werden mitunter erst
                nach dem Kauf sichtbar.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Deshalb begleiten wir keinen Kauf ohne unabhängige technische und
                juristische Prüfungen. Ein qualifizierter Bausachverständiger untersucht
                und vermisst die Immobilie und vergleicht den tatsächlichen Zustand mit den verfügbaren
                Dokumenten und Registrierungen. Ein unabhängiger spanischer Immobilienanwalt
                prüft unter anderem Eigentum, Belastungen, Schulden, Genehmigungen und
                Verträge.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                So erhalten Sie vor Ihrer endgültigen Entscheidung mehr Einblick in den technischen
                Zustand, die juristische Situation und mögliche Risiken der Immobilie.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Sie wählen entweder die vollständige Buyer Journey oder nur die Leistungen,
                die Sie benötigen.
              </p>

              <p className="mt-7 text-xl font-medium leading-relaxed text-stone-700">
                Gezielt suchen. Mit mehr Sicherheit kaufen. Entspannt ankommen.
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
              Wo stehen Sie im Kaufprozess?
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
              Beginnen Sie genau dort, wo Sie unsere Begleitung benötigen.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                href: "/de/services/area-match",
                label: "Ich orientiere mich noch",
                title: "Finden Sie zuerst die Region, die zu Ihnen passt",
                text: "Starten Sie mit einem persönlichen Area Match und gewinnen Sie Orientierung, bevor Sie Immobilien vergleichen.",
                cta: "Area Match entdecken →",
              },
              {
                href: "/de/services/purchase-safety-report",
                label: "Ich habe eine Immobilie gefunden",
                title: "Lassen Sie den Kauf unabhängig prüfen",
                text: "Kombinieren Sie die juristische Due Diligence mit einer technischen Immobilienprüfung, bevor Sie endgültig entscheiden.",
                cta: "Purchase Safety entdecken →",
              },
              {
                href: "/de/services/move-in-ready",
                label: "Ich möchte kaufen und entspannt ankommen",
                title: "Lassen Sie auch die praktische Umsetzung koordinieren",
                text: "Von Relocation und Versorgungsanschlüssen bis zu Renovierung, Einrichtung und einer reibungslosen Ankunft.",
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
                Sie müssen nicht den gesamten Weg durchlaufen.
              </p>

              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Wählen Sie nur die Unterstützung, die Sie benötigen — von der Suche nach der
                richtigen Region und einer persönlichen Buyer Discovery bis zu unabhängigen
                Kaufprüfungen und einem Zuhause, das für Ihre Ankunft vorbereitet ist.
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
                  Entdecken Sie, welche Regionen, Orte und Lebensstile am besten zu
                  Ihren Prioritäten, Ihrem Budget und Ihren langfristigen Plänen passen. Ihr persönlicher
                  Bericht enthält lokale Informationen zu Gesundheitsversorgung, Schulen, Infrastruktur,
                  Erreichbarkeit und Community-Fit.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Kostenloses Area Match anfordern →
                </div>
              </div>
            </a>

            <a
              href="/de/services/discovery-trips"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/discover-card.png"
                alt="Private und kleinschalige Buyer Discovery Experience an der Costa Blanca"
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
                  Erleben Sie ausgewählte Immobilien, Wohngebiete und den Alltag
                  während einer privaten Discovery oder in einer sorgfältig zusammengestellten
                  Kleingruppe. Verfügbar an ausgewählten Terminen und vorbehaltlich
                  Verfügbarkeit.
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
                alt="Unabhängige technische und juristische Prüfungen vor dem Immobilienkauf an der Costa Blanca"
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
                  Haben Sie bereits eine Immobilie gefunden? Wir koordinieren eine unabhängige
                  technische Prüfung und vermitteln einen passenden unabhängigen Anwalt
                  für die juristische Due Diligence, bevor Sie sich verbindlich festlegen.
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
                alt="Move-In Ready Begleitung für Renovierung, Relocation und Interior an der Costa Blanca"
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
                  Von Versorgungsanschlüssen und Relocation-Begleitung bis zu Renovierung,
                  Interior Design, Einrichtung und den letzten Vorbereitungen. Wir
                  koordinieren die praktischen Schritte rund um Ihre Immobilie, Ihren Zeitplan und Ihr Budget.
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
                Ein unabhängiger Bausachverständiger untersucht und vermisst die Immobilie und
                vergleicht sie mit den verfügbaren Dokumenten. So werden Mängel,
                Abweichungen und mögliche Instandsetzungsarbeiten frühzeitig sichtbar.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Ein unabhängiger Anwalt prüft Eigentum, Belastungen, Schulden,
                Genehmigungen, Verträge und Übergabebedingungen.
              </p>

              <p className="mt-6 text-base font-medium leading-relaxed text-[#c8a063]">
                Wir führen beide Berichte in einer klaren Empfehlung zusammen:
                weitermachen, neu bewerten oder nicht kaufen.
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
                  Immobilienprüfung anfragen
                </a>
              </div>
            </div>

            <div className="p-10 md:p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Zwei unabhängige Bewertungen. Eine klare Entscheidung.
              </p>

              <h3 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-[#1e2a3a]">
                Weitermachen, neu bewerten oder nicht kaufen.
              </h3>

              <div className="mt-10 grid gap-6">
                <article className="rounded-[28px] border border-emerald-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">
                    Grün · Weitermachen
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Die Prüfungen bieten ausreichend Sicherheit, um fortzufahren —
                    unter den genannten Bedingungen.
                  </p>
                </article>

                <article className="rounded-[28px] border border-amber-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
                    Orange · Neu bewerten
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Es bestehen Fragen oder Risiken. Zunächst sind weitere Untersuchungen,
                    Instandsetzungen, Nachverhandlungen oder zusätzliche Bedingungen erforderlich.
                  </p>
                </article>

                <article className="rounded-[28px] border border-red-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-800">
                    Rot · Nicht kaufen
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Die Risiken sind zu groß. Kaufen Sie nicht, solange diese nicht vollständig und nachweisbar
                    geklärt sind, bevor Sie sich verbindlich festlegen.
                  </p>
                </article>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                Die Dokumentenprüfung durch den unabhängigen Bausachverständigen ist ein erster
                Abgleich und ersetzt weder die juristische Due Diligence noch eine formelle
                Bestätigung durch die zuständigen Behörden. Die technischen und juristischen
                Prüfungen werden von unabhängigen Fachleuten durchgeführt,
                die jeweils für ihren eigenen Bericht verantwortlich sind. Zusätzliche
                Fachuntersuchungen können erforderlich sein. Keine Prüfung kann
                absolute Sicherheit bieten.
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
                Wählen Sie eine private Buyer Discovery Experience oder erkunden Sie die Region
                in einer kleinen, sorgfältig zusammengestellten Gruppe gleichgesinnter Käufer, deren Interessen,
                Lebensphase und Pläne zueinander passen. Sie erleben ausgewählte Immobilien, Wohngebiete,
                lokale Einrichtungen und den Alltag — mit persönlicher Begleitung und ausreichend Privatsphäre.
                Die Teilnahme an einer Gruppe ist immer optional und vom eigentlichen Kaufbegleitungsprozess getrennt.
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
                Von der Schlüsselübergabe bis zu einem Zuhause, das für Ihre Ankunft bereit ist.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-700">
                Nach dem Kauf müssen häufig noch zahlreiche praktische Entscheidungen getroffen werden.
                Nordic Move bündelt diese Schritte in drei flexiblen Modulen: Home Setup,
                Renovation &amp; Interior und Family Relocation.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
                Sie wählen nur die Unterstützung, die zu Ihrer Immobilie, Ihrer Familie, Ihrem Zeitplan
                und Ihrem Budget passt. Wir koordinieren die vereinbarten Parteien und nächsten Schritte, während
                jeder externe Spezialist für die eigene Beratung und
                Ausführung verantwortlich bleibt.
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
                  href="https://wa.me/31683848239?text=Hallo%20Nordic%20Move%20Spain%2C%20ich%20m%C3%B6chte%20gerne%20meinen%20Move-In%20Ready%20Plan%20besprechen."
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Besprechen Sie Ihren Move-In Ready Plan über WhatsApp"
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
                alt="Mediterranes Move-In Ready Zuhause mit Terrasse und Außenküche an der Costa Blanca"
                className="h-full min-h-[440px] w-full rounded-[32px] object-cover lg:min-h-[570px]"
                loading="lazy"
              />

              <div className="absolute bottom-10 left-10 right-10 rounded-[26px] bg-white/90 p-6 shadow-lg backdrop-blur md:bottom-12 md:left-12 md:right-auto md:max-w-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  Ein abgestimmter Prozess
                </p>
                <p className="mt-3 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  Praktische Vorbereitung, Renovierung und Einrichtung in einem abgestimmten Plan.
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
                  Home Setup entdecken →
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
                  Renovierungskoordination, Handwerker und Spezialisten, Interior-Konzept,
                  Materialien, Möbel, Beleuchtung, Montage und Styling.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-white">
                  Renovation &amp; Interior entdecken →
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
                  Umzugsunternehmen, Schulen, Gesundheitsversorgung, Versicherungen, Verwaltung, lokale
                  Einrichtungen sowie Kontakte zu Vereinen und der örtlichen Community.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-[#1e2a3a]">
                  Family Relocation entdecken →
                </span>
              </a>
            </div>

            <p className="mt-8 max-w-5xl text-sm leading-relaxed text-stone-500">
              Die Module können einzeln oder kombiniert gebucht werden. Umfang,
              Zeitplan, Kosten und Zuständigkeiten werden für jede Leistung vorab festgelegt.
              Externe Fachleute bleiben für ihre eigene
              Beratung, ihre Angebote und die Ausführung verantwortlich.
            </p>
          </div>
        </div>
      </section>

      {/* GUIDES AND INSIGHTS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ratgeber für Käufer
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Klare Orientierung, bevor Sie eine Immobilie an der Costa Blanca kaufen.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Eine ausgewählte Sammlung praktischer Ratgeber für internationale Käufer,
              die Regionen für den Ruhestand, den spanischen Kaufprozess und niederländische
              Steuerfragen verstehen möchten, bevor sie entscheiden.
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
              Alle Ratgeber für Käufer ansehen
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
            Möchten Sie Ihren Kauf sorgfältig vorbereiten?
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/80">
            Starten Sie mit einem kostenlosen Area Match, wenn Sie noch nach der richtigen
            Region suchen. Vereinbaren Sie ein persönliches Gespräch, wenn Sie bereits eine Immobilie gefunden haben
            oder die vollständige Kaufbegleitung besprechen möchten.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/de/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Kostenloses Area Match anfordern
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