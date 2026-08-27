import { villas } from "../villas/villasData";

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
  title: "Sicherer an der Costa Blanca kaufen und umziehen | Nordic Move Spain",
  description:
    "Käuferberatung und umfassende Relocation-Unterstützung an der Costa Blanca: von der Auswahl der passenden Region und Immobilie über unabhängige technische und rechtliche Prüfungen bis hin zu Kauf, Organisation, Renovierung, Umzug und Einrichtung.",
  applicationName: "Nordic Move Spain",
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Immobilien und Relocation",
  keywords: [
    "Immobilie Costa Blanca kaufen",
    "Käuferberatung Costa Blanca",
    "Haus in Spanien kaufen",
    "Immobilienmakler Costa Blanca",
    "Käufermakler Costa Blanca",
    "internationaler Käuferberater Costa Blanca",
    "Immobilienprüfung Spanien",
    "rechtliche Due Diligence Immobilie Spanien",
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
    title: "Sicherer kaufen mit umfassender Relocation-Unterstützung | Nordic Move Spain",
    description:
      "Von der Auswahl der passenden Region und Immobilie über unabhängige Prüfungen bis hin zu Kauf, Organisation, Renovierung, Relocation und Einrichtung an der Costa Blanca.",
    type: "website",
    locale: "de_DE",
    siteName: "Nordic Move Spain",
    ...(siteUrl
      ? {
          url: "/de",
          images: [
            {
              url: "/images/laatste-homepage.png",
              alt: "Nordic Move Spain unterstützt internationale Käufer beim Immobilienkauf an der Costa Blanca",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Sicherer an der Costa Blanca kaufen und umziehen | Nordic Move Spain",
    description:
      "Käuferberatung und vollständige Relocation-Unterstützung: vom Area Match und unabhängigen Prüfungen bis zu Kauf, Renovierung, Umzug und Einrichtung.",
    ...(siteUrl ? { images: ["/images/laatste-homepage.png"] } : {}),
  },
};

export default function HomePage() {
  const featuredVillaIds = [
    "c02-62052",
    "c11-26064",
    "c21-17150",
    "20-4073c",
    "c02-23322",
    "20-4019",
    "c11-33867",
    "20-4077",
  ];

  const featuredVillas = featuredVillaIds.flatMap((id) => {
    const villa = villas.find((item) => item.id === id);
    return villa ? [villa] : [];
  });

  const guideCards = [
    {
      href: "/de/guides/best-areas-costa-blanca-north-retirees",
      label: "Regionenführer für den Ruhestand",
      title: "Die besten Orte an der Costa Blanca für den Ruhestand",
      text:
        "Ein praktischer Leitfaden für internationale Käufer, die die besten Orte für den Ruhestand an der Costa Blanca vergleichen möchten.",
      cta: "Ratgeber zum Ruhestand lesen →",
      featured: true,
    },
    {
      href: "/de/guides/buying-property-spain",
      label: "Immobilienkauf in Spanien",
      title: "Immobilienkauf in Spanien",
      text:
        "Ein umfassender Leitfaden zu rechtlichen Prüfungen, Hypotheken, Kaufnebenkosten und dem Kaufprozess für internationale Käufer.",
      cta: "Ratgeber lesen →",
      featured: false,
    },
    {
      href: "/de/guides/uk-tax-second-home-spain",
      label: "Steuerratgeber für Käufer aus dem Vereinigten Königreich",
      title: "Spanische Steuerregeln für britische Immobilieneigentümer",
      text:
        "Was Käufer aus dem Vereinigten Königreich über spanische Immobiliensteuern, britische Steueraspekte, Zweitwohnsitze, Mieteinnahmen, Kapitalgewinne und die Vermeidung von Doppelbesteuerung wissen sollten.",
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
        email: "willeke@nordicmovespain.com",
        description:
          "Käufer- und Relocation-Unterstützung für internationale Käufer, die an der Costa Blanca mit mehr Sicherheit eine Immobilie erwerben und ihren Umzug sorgfältig organisieren möchten.",
      },
      {
        "@type": "WebPage",
        "@id": "#webpage",
        name: "Immobilie an der Costa Blanca kaufen | Nordic Move Spain",
        description:
          "Käuferberatung und umfassende Relocation-Unterstützung mit Area Match, gezielter Immobiliensuche, unabhängigen technischen und rechtlichen Prüfungen und Begleitung bis zur Ankunft.",
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
        name: "Käuferberatung und Relocation an der Costa Blanca",
        serviceType: [
          "Area Match",
          "Immobilienauswahl und Besichtigungen",
          "Technische Prüfung und Dokumentenprüfung",
          "Koordination der rechtlichen Due Diligence",
          "Home Setup und Versorgungsanschlüsse",
          "Renovierung & Interior",
          "Familien-Relocation",
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
      <style>{`
        @keyframes heroHomeMotion {
          0% {
            transform: scale(1.08) translate3d(-2.2%, 0.2%, 0);
          }
          50% {
            transform: scale(1.14) translate3d(1.8%, -1%, 0);
          }
          100% {
            transform: scale(1.10) translate3d(-0.8%, 1%, 0);
          }
        }

        .hero-home-image {
          animation-name: heroHomeMotion;
          animation-duration: 12s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          will-change: transform;
          transform-origin: center center;
          backface-visibility: hidden;
        }
      `}</style>


      {/* NAVIGATION */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/15 px-4 py-4 backdrop-blur-md md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* MOBILE BRAND / DESKTOP SPACER */}
          <a
            href="/de"
            className="text-sm font-medium tracking-wide text-white md:hidden"
          >
            Nordic Move Spain
          </a>

          <div className="hidden w-[180px] md:block"></div>

          {/* DESKTOP MENU */}
          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/de" className="border-b border-[#c8a063] pb-1">
              Startseite
            </a>

            <a href="/de/regions" className="transition hover:text-white/70">
              Regionen
            </a>

            <a href="/de/villas" className="transition hover:text-white/70">
              Villen
            </a>

            <a href="/de/services" className="transition hover:text-white/70">
              Leistungen
            </a>

            <a href="/de/guides" className="transition hover:text-white/70">
              Ratgeber
            </a>

            <a href="/de/about-us" className="transition hover:text-white/70">
              Über uns
            </a>

            <a href="/de/contact" className="transition hover:text-white/70">
              Kontakt
            </a>
          </div>

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden items-center gap-3 md:flex">
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
              Unverbindliches Erstgespräch buchen
            </a>
          </div>

          {/* MOBILE HAMBURGER MENU */}
          <details className="relative md:hidden">
            <summary
              aria-label="Menü öffnen"
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/40 text-2xl text-white [&::-webkit-details-marker]:hidden"
            >
              ☰
            </summary>

            <div className="absolute right-0 mt-3 w-[280px] rounded-2xl bg-[#1e2a3a] p-6 text-white shadow-2xl">
              <div className="flex flex-col gap-5 text-base">
                <a href="/de">Startseite</a>
                <a href="/de/regions">Regionen</a>
                <a href="/de/villas">Villen</a>
                <a href="/de/services">Leistungen</a>
                <a href="/de/guides">Ratgeber</a>
                <a href="/de/about-us">Über uns</a>
                <a href="/de/contact">Kontakt</a>
              </div>

              <div className="my-6 border-t border-white/20"></div>

              <div className="flex flex-wrap gap-2">
                <a
                  href="/"
                  className="rounded-full border border-white/40 px-3 py-2 text-xs"
                >
                  EN
                </a>

                <a
                  href="/nl"
                  className="rounded-full border border-white/40 px-3 py-2 text-xs"
                >
                  NL
                </a>

                <a
                  href="/de"
                  className="rounded-full bg-[#c8a063] px-3 py-2 text-xs"
                >
                  DE
                </a>

                <a
                  href="/sv"
                  className="rounded-full border border-white/40 px-3 py-2 text-xs"
                >
                  SE
                </a>
              </div>

              <a
                href="/de/contact"
                className="mt-6 block rounded-full bg-[#c8a063] px-5 py-3 text-center text-sm font-medium text-white"
              >
                Unverbindliches Erstgespräch buchen
              </a>
            </div>
          </details>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Immobilien an der Costa Blanca sicherer kaufen und mit umfassender Unterstützung umziehen – mit Nordic Move Spain"
          className="hero-home-image absolute inset-0 h-full w-full object-cover"
          style={{ animation: "heroHomeMotion 12s ease-in-out infinite alternate" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/28 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca
            </p>

            <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.02] text-[#f3ede3] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-5xl">
              Sicherer an der Costa Blanca kaufen.
              <span className="mt-2 block text-[0.78em] leading-tight text-[#f3ede3]/95">
                Mit mehr Sicherheit und Transparenz.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#f7f2ea] drop-shadow-[0_2px_12px_rgba(0,0,0,0.38)] md:text-xl">
              Nordic Move Spain begleitet internationale Käufer von der Wahl der passenden Region und Immobilie über unabhängige technische und rechtliche Prüfungen bis zum Kauf und zur vollständigen Relocation.
            </p>

            <p className="mt-7 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              Zwei unabhängige Kaufprüfungen · Vollständige Relocation · Ein verlässlicher Ansprechpartner
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/de/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Kostenlosen persönlichen Area Match Report erhalten
              </a>

              <a
                href="/de/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Unverbindliches Erstgespräch buchen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PROOF BAR */}
      <section className="border-b border-stone-200/70 bg-white/75 px-8 py-5 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-4 text-center text-sm font-medium text-[#1e2a3a] md:grid-cols-3">
          <p>Persönliche Begleitung auf Käuferseite</p>
          <p>Rechtliche und technische Prüfungen vor dem Kauf</p>
          <p>Unterstützung auf Englisch, Niederländisch, Deutsch und Schwedisch</p>
        </div>
      </section>

      {/* SELECTED VILLAS */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Immobilienauswahl
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Ausgewählte Villen aus unserem Partnernetzwerk.
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-600">
                Nordic Move Spain ist weder an eine einzelne Agentur noch an ein bestimmtes Portfolio gebunden. Wir arbeiten mit mehreren Immobilienprofis an der nördlichen Costa Blanca zusammen und durchsuchen den breiteren Markt im Auftrag unserer Käufer.
              </p>
            </div>

            <a
              href="/de/villas"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
            >
              Alle ausgewählten Villen ansehen →
            </a>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {featuredVillas.map((villa) => (
              <a
                key={villa.ref}
                href={`/de/villas/${villa.id}`}
                className="group overflow-hidden rounded-[30px] bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={villa.images[0]}
                    alt={`${villa.location} Villa, ausgewählt von Nordic Move Spain`}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1e2a3a]/20 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-30"></div>
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                    {villa.location}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-[#1e2a3a]">
                    €{villa.price.toLocaleString("en-GB")}
                  </h3>
                  <p className="mt-3 text-sm text-stone-600">
                    {villa.beds} Schlafzimmer · {villa.baths} Bäder
                    {villa.built ? ` · ${villa.built} m² gebaut` : ""}
                  </p>
                  <span className="mt-5 inline-block text-sm font-medium text-[#1e2a3a]">
                    Immobilie ansehen →
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 border-t border-stone-300/70 pt-7 md:flex-row md:items-center md:justify-between">
            <p className="max-w-4xl text-sm leading-relaxed text-stone-500">
              Die Immobilie wird über einen unserer kooperierenden Immobilienpartner angeboten. Nordic Move Spain vertritt und berät die Käuferseite. Verfügbarkeit und Objektdaten können sich ändern.
            </p>
            <a href="/de/contact" className="text-sm font-medium text-[#1e2a3a] underline underline-offset-4">
              Sie suchen etwas anderes? Sagen Sie uns, was Sie benötigen.
            </a>
          </div>
        </div>
      </section>

      {/* COMPLETE BUYING & RELOCATION SUPPORT */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr] xl:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Käuferberatung &amp; Relocation
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Mehr Sicherheit, bevor Sie sich entscheiden.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-600">
                Eine Immobilie in Spanien kann wunderschön aussehen, während technische oder rechtliche Risiken bei einer Besichtigung unsichtbar bleiben.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Deshalb organisieren wir vor Ihrer endgültigen Entscheidung, dass ein ernsthafter Kauf 
                <strong className="font-medium text-[#1e2a3a]">
                  unabhängig aus technischer und rechtlicher Sicht geprüft wird
                </strong>
                . Die wichtigsten Ergebnisse werden zusammengeführt, damit Sie klarer verstehen, was Sie kaufen. Sind die Risiken zu groß, raten wir vom Kauf ab.
              </p>

              <h3 className="mt-10 max-w-2xl font-serif text-3xl leading-tight text-[#1e2a3a]">
                Sicherer kaufen beginnt damit, zu wissen, wo man suchen sollte.
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Bevor Sie Immobilien besichtigen, erfassen wir Ihre Wünsche, Ihr Budget, Ihren Lebensstil und Ihre Zukunftspläne im Detail.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Nach dem Ausfüllen eines ausführlichen Fragebogens erhalten Sie einen 
                <strong className="font-medium text-[#1e2a3a]">
                  kostenlosen persönlichen Area Match Report
                </strong>{" "}
                mit den Regionen, die am besten zu Ihnen passen – einschließlich relevanter Informationen zu Sicherheit, Gesundheitsversorgung, Infrastruktur, Erreichbarkeit, Preisniveau, Lebensstil und geeigneten Suchgebieten.
              </p>

              <p className="mt-7 max-w-2xl text-xl font-medium leading-relaxed text-[#1e2a3a]">
                Zuerst die richtige Region. Dann die richtige Immobilie. Anschließend prüfen wir sorgfältig, was Sie kaufen.
              </p>

              <div className="mt-8">
                <a
                  href="/de/relocation-assessment"
                  className="inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Kostenlosen persönlichen Area Match Report erhalten
                </a>
              </div>

              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-stone-600">
                Unsere Unterstützung endet nicht mit der Schlüsselübergabe. Von Buyer Discovery und Immobilienauswahl über Kauf, Umzug, Renovierung und Interior bis zur praktischen Relocation koordiniert Nordic Move den gesamten Weg über einen verlässlichen Ansprechpartner.
              </p>

              <p className="mt-7 text-sm font-medium uppercase tracking-[0.2em] text-[#c8a063]">
                Zwei unabhängige Kaufprüfungen · Vollständige Relocation · Ein verlässlicher Ansprechpartner
              </p>

              <div className="mt-9">
                <a
                  href="/de/contact"
                  className="inline-block rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Unverbindliches Erstgespräch buchen
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

      {/* NORDIC MOVE BUYER JOURNEY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Die Nordic Move Buyer Journey
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
              Wählen Sie die Unterstützung, die zu Ihrer Situation passt.
            </h2>

            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-lg font-medium leading-relaxed text-[#1e2a3a]">
                Sie müssen nicht den gesamten Weg mit uns gehen.
              </p>

              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Wählen Sie nur die Unterstützung, die Sie benötigen – von der Suche nach der passenden Region und einer persönlichen Buyer Discovery bis zu unabhängigen Kaufprüfungen und einem Zuhause, das für Ihre Ankunft vorbereitet ist.
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
                  Entdecken Sie, welche Regionen, Orte und Lebensstile am besten zu Ihren Prioritäten, Ihrem Budget und Ihren langfristigen Plänen passen. Ihr persönlicher Report enthält lokale Informationen zu Gesundheitsversorgung, Schulen, Infrastruktur, Erreichbarkeit und sozialem Umfeld.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Kostenlosen Area Match anfordern →
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
                  Erleben Sie ausgewählte Immobilien, Wohngegenden und den Alltag bei einer privaten Discovery oder in einer sorgfältig zusammengestellten kleinen Gruppe. Verfügbar an ausgewählten Terminen und nach Verfügbarkeit.
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
                alt="Unabhängige technische und rechtliche Prüfungen vor dem Immobilienkauf an der Costa Blanca"
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
                  Sie haben bereits eine Immobilie gefunden? Wir koordinieren eine unabhängige technische Prüfung und organisieren einen geeigneten unabhängigen Anwalt für die rechtliche Due Diligence, bevor Sie sich verbindlich festlegen.
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
                alt="Move-In Ready Unterstützung für Renovierung, Relocation und Interior an der Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Nach dem Kauf
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Move-In Ready Unterstützung
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Von Versorgungsanschlüssen und Umzugshilfe über Renovierung, Interior Design und Möblierung bis zu den letzten Vorbereitungen. Wir koordinieren die praktischen Schritte rund um Ihr Zuhause, Ihren Zeitplan und Ihr Budget.
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
                Mehr Sicherheit, bevor Sie sich entscheiden.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Ein unabhängiger, qualifizierter Building Surveyor und Chartered Construction Manager (CIOB), zugleich <em>Arquitecto Técnico</em> in Spanien, prüft und vermisst die Immobilie und vergleicht den tatsächlichen Zustand mit den verfügbaren Unterlagen und Registrierungen. So lassen sich Mängel, Abweichungen und möglicher Handlungsbedarf frühzeitig erkennen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Ein unabhängiger Anwalt prüft Eigentumsverhältnisse, Belastungen, Schulden, Genehmigungen, Verträge und Übertragungsbedingungen.
              </p>

              <p className="mt-6 text-base font-medium leading-relaxed text-[#c8a063]">
                Wir führen beide Berichte zu einer klaren Empfehlung zusammen: kaufen, neu bewerten oder nicht kaufen.
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
                Kaufen, neu bewerten oder nicht kaufen.
              </h3>

              <div className="mt-10 grid gap-6">
                <article className="rounded-[28px] border border-emerald-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">
                    Grün · Kaufen
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Die Prüfungen geben ausreichend Sicherheit, um unter den genannten Bedingungen fortzufahren.
                  </p>
                </article>

                <article className="rounded-[28px] border border-amber-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
                    Gelb · Neu bewerten
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Es bestehen Fragen oder Risiken. Zunächst sind weitere Untersuchungen, Nachbesserungen, Neuverhandlungen oder zusätzliche Bedingungen erforderlich.
                  </p>
                </article>

                <article className="rounded-[28px] border border-red-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-800">
                    Rot · Nicht kaufen
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Die Risiken sind zu groß. Kaufen Sie nicht, solange diese nicht vollständig und nachweislich vor Ihrer endgültigen Verpflichtung geklärt wurden.
                  </p>
                </article>
              </div>

              
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
                alt="Buyer Discovery Experience und lokales Umfeld an der Costa Blanca"
                className="h-[300px] w-full rounded-[28px] object-cover md:h-[360px]"
                loading="lazy"
              />
            </div>

            <div className="p-9 md:p-12">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Optional · Buyer Discovery
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">
                Entdecken Sie nicht nur, wo Sie leben möchten, sondern auch, mit wem Sie sich zuhause fühlen können.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Ein neues Leben an der Costa Blanca bedeutet mehr als eine schöne Immobilie. Es geht auch um die Menschen um Sie herum, die Orte, die Sie gerne besuchen, und das Gefühl, Teil von etwas werden zu können.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Während einer Buyer Discovery Experience entdecken Sie mehr als ausgewählte Regionen und Immobilien. Wir zeigen Ihnen auch den Alltag vor Ort – von lokalen Clubs und Restaurants bis zu Golf, Padel und anderen Aktivitäten, die zu Ihren Interessen passen.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Vielleicht lernen Sie jemanden kennen, mit dem Sie später regelmäßig zu Mittag essen, einen Golfpartner oder einen Nachbarn, der Padel genauso gerne spielt wie Sie. Sie können eine private Experience wählen oder – wenn es zu Ihnen passt – eine kleine, sorgfältig zusammengestellte Gruppe mit ähnlichen Interessen und einer vergleichbaren Lebensphase.
              </p>

              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-[#c8a063]">
                Nicht nur eine Immobilie finden. Sondern entdecken, wo Sie sich wirklich zuhause fühlen können.
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
                Nach dem Kauf stehen oft noch Dutzende praktische Entscheidungen an. Nordic Move bündelt diese Schritte in drei flexiblen Modulen: Home Setup, Renovierung &amp; Interior und Familien-Relocation.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
                Sie wählen nur die Unterstützung, die zu Ihrem Zuhause, Ihrer Familie, Ihrem Zeitplan und Ihrem Budget passt. Wir koordinieren die vereinbarten Beteiligten und nächsten Schritte; jeder externe Spezialist bleibt für seine eigene Beratung und Umsetzung verantwortlich.
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
                  Unverbindliches Erstgespräch buchen
                </a>

                <a
                  href="https://wa.me/31683848239?text=Hallo%20Nordic%20Move%20Spain%2C%20ich%20m%C3%B6chte%20meinen%20Move-In-Ready-Plan%20besprechen."
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Move-In Ready Plan über WhatsApp besprechen"
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
                  Ein koordinierter Weg
                </p>
                <p className="mt-3 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  Praktische Vorbereitung, Renovierung und Möblierung in einem koordinierten Plan.
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
                  Versorgungsanschlüsse, Internet, Versicherung, Sicherheit, Reinigung, Wartung und kleinere Arbeiten vor Ihrer Ankunft.
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
                  Koordination der Renovierung, Handwerker und Spezialisten, Interior-Konzept, Materialien, Möbel, Beleuchtung, Installation und Styling.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-white">
                  Renovierung &amp; Interior entdecken →
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
                  Umzugsunternehmen, Schulen, Gesundheitsversorgung, Versicherungen, Verwaltung, lokale Angebote und Kontakte zu Clubs und der lokalen Gemeinschaft.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-[#1e2a3a]">
                  Familien-Relocation entdecken →
                </span>
              </a>
            </div>

            <p className="mt-8 max-w-5xl text-sm leading-relaxed text-stone-500">
              Die Module können einzeln gewählt oder kombiniert werden. Leistungsumfang, Zeitplan, Kosten und Verantwortlichkeiten werden für jede Leistung im Voraus vereinbart. Externe Fachleute bleiben für ihre eigene Beratung, Angebote und Umsetzung verantwortlich.
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
              Eine ausgewählte Sammlung praktischer Ratgeber für internationale Käufer, die Regionen für den Ruhestand, den spanischen Kaufprozess und britische Steuerfragen verstehen möchten, bevor sie eine Entscheidung treffen.
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
            Persönliche Unterstützung ab Ihrem Ausgangspunkt
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Bereit, Ihren Kauf sorgfältig vorzubereiten?
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/80">
            Starten Sie mit einem kostenlosen Area Match, wenn Sie noch nach der passenden Region suchen, oder buchen Sie ein persönliches Gespräch, wenn Sie bereits eine Immobilie gefunden haben oder die vollständige Unterstützung besprechen möchten.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/de/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Kostenlosen Area Match anfordern
            </a>

            <a
              href="/de/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Unverbindliches Erstgespräch buchen
            </a>
          </div>

          <p className="mt-7 text-sm text-white/70">
            Lieber per E-Mail?{" "}
            <a
              href="mailto:willeke@nordicmovespain.com"
              className="font-medium text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
            >
              willeke@nordicmovespain.com
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}