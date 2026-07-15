const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const pagePath = "/de";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sicher Immobilien kaufen an der Costa Blanca | Nordic Move Spain",
  description:
    "Eine strukturierte Buying Journey für internationale Käufer an der Costa Blanca: Area Match, Buyer Discovery Experience, technischer Käufercheck, sichere Dokumentenverwaltung und Move-In-Ready Interior Support.",
  alternates: {
    canonical: pagePath,
    languages: {
      "de-DE": "/de",
      "nl-NL": "/nl",
      "en-GB": "/",
      "sv-SE": "/sv",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Sicher Immobilien kaufen an der Costa Blanca | Nordic Move Spain",
    description:
      "Wählen Sie die richtige Region, erleben Sie die Umgebung, erhalten Sie vor dem Kauf einen technischen Käufercheck, halten Sie Dokumente sicher organisiert und kommen Sie in einem bezugsbereiten Zuhause an.",
    type: "website",
    url: pagePath,
    locale: "de_DE",
    alternateLocale: ["nl_NL", "en_GB", "sv_SE"],
    images: [
      {
        url: "/images/laatste-homepage.png",
        alt: "Nordic Move Spain Käuferbegleitung an der Costa Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sicher Immobilien kaufen an der Costa Blanca | Nordic Move Spain",
    description:
      "Area Match, Buyer Discovery Experience, technischer Käufercheck, sicheres Kundenportal und Move-In-Ready Interior Support für ernsthafte internationale Käufer.",
  },
};

export default function GermanHomePage() {
  const guideCards = [
    {
      href: "/guides/best-areas-costa-blanca-north-retirees",
      label: "Ratgeber Ruhestand",
      title: "Die besten Orte an der Costa Blanca für den Ruhestand",
      text:
        "Ein praktischer Ratgeber für internationale Käufer, die Orte an der Costa Blanca für den Ruhestand vergleichen.",
      cta: "Ratgeber lesen →",
      featured: true,
    },
    {
      href: "/guides/buying-property-spain",
      label: "Kaufen in Spanien",
      title: "Immobilienkauf in Spanien",
      text:
        "Ein vollständiger Ratgeber zu rechtlichen Prüfungen, Hypotheken, Kaufkosten und dem Kaufprozess für internationale Käufer.",
      cta: "Ratgeber lesen →",
      featured: false,
    },
    {
      href: "/guides/uk-tax-second-home-spain",
      label: "UK-Steuerregeln",
      title: "UK-Steuerregeln für ein Zweitwohnsitz in Spanien",
      text:
        "Was in Großbritannien steuerlich ansässige Käufer über spanische Immobiliensteuern, Modelo 210, Mieteinnahmen, Kapitalgewinne, Doppelbesteuerung und Zweitwohnsitze im Ausland wissen sollten.",
      cta: "UK-Steuerratgeber lesen →",
      featured: false,
    },
  ];

  const faqs = [
    {
      question: "Was ist der Area Match Report?",
      answer:
        "Der Area Match Report beginnt mit Ihren Anforderungen an Alltag, Erreichbarkeit, Privatsphäre, Infrastruktur und langfristige Nutzung. Daraus entsteht eine gezieltere Grundlage für die Auswahl passender Regionen und Immobilien.",
    },
    {
      question: "Muss ich die gesamte Buyer Journey nutzen?",
      answer:
        "Nein. Sie können die gesamte Journey nutzen oder bei dem Schritt einsteigen, bei dem Sie Unterstützung benötigen: Area Match, Buyer Discovery, Purchase Safety oder Move-In Ready.",
    },
    {
      question: "Was umfasst die technische und rechtliche Kaufprüfung?",
      answer:
        "Vor dem Kauf wird die Immobilie technisch und rechtlich geprüft. Eine unabhängige Fachperson führt eine bautechnische Untersuchung durch und beurteilt unter anderem sichtbare und zugängliche Mängel, Feuchtigkeit, Leckagen, Risse, Entwässerung, Installationen und den allgemeinen baulichen Zustand. Zusätzlich führt ein unabhängiger Rechtsanwalt die rechtliche Due Diligence durch. Dabei werden unter anderem Eigentumsverhältnisse, Schulden und Belastungen, Genehmigungen, An- und Umbauten, Gemeinschaftsunterlagen und mögliche rechtliche Einschränkungen geprüft.",
    },
    {
      question: "Ersetzt die technische Kaufprüfung die rechtliche Due Diligence?",
      answer:
        "Nein. Die bautechnische Untersuchung und die rechtliche Due Diligence sind zwei eigenständige, sich ergänzende Prüfungen. Die bautechnische Untersuchung wird von einer unabhängigen Fachperson durchgeführt, während ein unabhängiger Rechtsanwalt die rechtlichen Unterlagen und Risiken im Interesse des Käufers prüft.",
    },
    {
      question: "Welche Unterstützung gibt es nach dem Kauf?",
      answer:
        "Mit Move-In Ready Support können Interior Direction, Einrichtung, Styling und praktische Vorbereitung mit ausgewählten lokalen Partnern koordiniert werden.",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/15 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="w-[180px]"></div>

          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/de" className="border-b border-[#c8a063] pb-1">
              Home
            </a>

            <a href="/de/regions" className="hover:text-white/70 transition">
              Regions
            </a>

            <a href="/de/services" className="hover:text-white/70 transition">
              Services
            </a>

            <a href="/de/guides" className="hover:text-white/70 transition">
              Guides
            </a>

            <a href="/de/about-us" className="hover:text-white/70 transition">
              About us
            </a>

            <a href="/de/contact" className="hover:text-white/70 transition">
              Contact
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-2">
              <a
                href="/"
                aria-label="English version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                EN
              </a>

              <a
                href="/nl"
                aria-label="Dutch version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                NL
              </a>

              <a
                href="/de"
                aria-label="German version"
                className="rounded-full border border-[#c8a063] bg-[#c8a063] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#b48a4f]"
              >
                DE
              </a>

              <a
                href="/sv"
                aria-label="Swedish version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                SE
              </a>
            </div>

            <a
              href="/de/contact"
              className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Schedule a consultation
            </a>
          </div>

          <details className="relative md:hidden">
            <summary
              aria-label="Menü öffnen"
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/40 text-white [&::-webkit-details-marker]:hidden"
            >
              <span className="text-2xl leading-none">☰</span>
            </summary>

            <div className="absolute right-0 mt-3 w-72 rounded-[24px] bg-[#1e2a3a] p-6 text-white shadow-2xl">
              <div className="flex flex-col gap-4 text-sm">
                <a href="/de">Home</a>
                <a href="/de/regions">Regions</a>
                <a href="/de/services">Services</a>
                <a href="/de/guides">Guides</a>
                <a href="/de/about-us">About us</a>
                <a href="/de/contact">Contact</a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/15 pt-5">
                <a href="/" className="rounded-full border border-white/40 px-3 py-2 text-xs uppercase tracking-[0.2em]">EN</a>
                <a href="/nl" className="rounded-full border border-white/40 px-3 py-2 text-xs uppercase tracking-[0.2em]">NL</a>
                <a href="/de" className="rounded-full bg-[#c8a063] px-3 py-2 text-xs uppercase tracking-[0.2em]">DE</a>
                <a href="/sv" className="rounded-full border border-white/40 px-3 py-2 text-xs uppercase tracking-[0.2em]">SE</a>
              </div>

              <a
                href="/de/contact"
                className="mt-6 block rounded-full bg-[#c8a063] px-5 py-3 text-center text-sm font-medium text-white"
              >
                Schedule a consultation
              </a>
            </div>
          </details>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Nordic Move Spain guidance for buying a property on the Costa Blanca"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/18 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[0.98] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-6xl">
              Sicherer
              <br />
              Immobilien kaufen
              <br />
              an der Costa Blanca.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
              Wir begleiten internationale Käufer von A bis Z: von der
              passenden Region und Buyer Discovery Experience über unabhängige
              Risikoprüfungen und sichere Dokumentenverwaltung bis hin zu einem
              bezugsbereiten Ankommen nach dem Kauf.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
              Das Ziel ist nicht, möglichst viele Immobilien zu besichtigen.
              Das Ziel ist, die richtige Passung zu finden, Risiken zu reduzieren
              und erst weiterzugehen, wenn Region, Immobilie, Dokumente und
              nächste Schritte klar sind.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              Area Match · Buyer Discovery · Unabhängiger Safety Report · Sicheres Portal · Move-In Ready
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/de/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Starten Sie mit Ihrem Area Match Report
              </a>

              <a
                href="/de/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Beratungsgespräch vereinbaren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Wir drehen den Prozess um
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Die meisten Käufer beginnen mit Immobilienanzeigen. Wir beginnen damit, wie Sie leben möchten.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Viele Käufer beginnen auf großen Immobilienportalen, speichern
                Dutzende Häuser und verlieben sich in eine Immobilie, bevor sie
                die Umgebung wirklich verstanden haben.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Doch eine Immobilie kann wunderschön wirken und trotzdem die
                falsche Entscheidung sein: Die Lage passt vielleicht nicht zu
                Ihrem Alltag, die Region nicht zu Ihren Zukunftsplänen oder die
                Immobilie verbirgt technische, rechtliche oder praktische
                Risiken.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Deshalb drehen wir den Prozess um. Zuerst erfassen wir, wie
                Sie leben möchten, was Ihnen wichtig ist, was Sie vermeiden
                wollen und welche Regionen zu Ihren Wünschen, Ihrem Budget und
                Ihren langfristigen Plänen passen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Erst danach suchen wir gezielt. Sie erhalten keine endlose Liste
                von Immobilien, sondern eine kleine, sorgfältig ausgewählte
                Shortlist, die zu Ihrem Profil passt — manchmal bezugsbereit,
                manchmal ein verstecktes Potenzialobjekt über unser lokales
                Netzwerk spanischer Partner.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Wenn eine Immobilie ernsthaft interessant wird, hilft der
                Purchase Safety Report, die wichtigsten Risiken sichtbar zu
                machen. So entscheiden Sie nicht nur aus dem Bauchgefühl heraus,
                sondern auf Basis von Einblick, Kontrolle und ehrlicher Beratung
                auf Käuferseite.
              </p>
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

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
              Erst die richtige Region. Dann die richtige Immobilie. Danach ein sicherer Kauf und ein sanftes Ankommen.
            </h2>

            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-lg font-medium leading-relaxed text-[#1e2a3a]">
                Sie müssen nicht jeden Schritt nutzen.
              </p>

              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Nutzen Sie die gesamte Journey oder steigen Sie dort ein, wo
                Sie Unterstützung brauchen: Area Match, Buyer Discovery,
                Purchase Safety oder Move-In Ready.
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
                alt="Area Match Assessment for the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Schritt 1 · Orientierung
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Area Match Report
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Ein Profil mit 34 Fragen, ergänzt durch lokale Fakten:
                  Gesundheitsversorgung, Schulen, Golf, Community-Profil,
                  Services, Infrastruktur und Lifestyle-Fit.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Kostenlosen Report anfragen →
                </div>
              </div>
            </a>

            <a
              href="/de/services/discovery-trips"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/discover-card.png"
                alt="International buyers during a Buyer Discovery Experience on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Schritt 2 · Ihre Route
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Buyer Discovery Experience
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Entdecken Sie passende Regionen, ausgewählte Immobilien und
                  relevante lokale Fachleute in einer privaten oder sorgfältig
                  abgestimmten Gruppen-Experience.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Discovery Experience entdecken →
                </div>
              </div>
            </a>

            <a
              href="/de/services/purchase-safety-report"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/legal.png"
                alt="Purchase Safety Report and secure client portal for buyers on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Schritt 3 · Prüfung vor dem Kauf
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Safety Report &amp; Portal
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Jeder Kauf über Nordic Move Spain beinhaltet vor Ihrer
                  Entscheidung einen technischen Käufercheck durch einen
                  unabhängigen Techniker auf Käuferseite.
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
                alt="Move-In Ready support for buyers on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Schritt 4 · Sanftes Ankommen
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Move-In Ready Support
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Wir entwickeln die Interior Direction selbst und koordinieren
                  Einrichtung, Styling und praktische Vorbereitung mit
                  vertrauenswürdigen lokalen Möbelpartnern.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Move-In Ready entdecken →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* MOVE-IN READY INTERIOR PREVIEW */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#e9dfd2]">
          <div className="grid items-center gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Soft Landing &amp; Move-In Ready
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
                Kommen Sie in einem Zuhause an, das sich bereits nach Ihnen anfühlt.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-700">
                Nach dem Kauf sollten Sie nicht monatelang aus dem Ausland
                Möbel, Handwerker, Beleuchtung, Vorhänge und Lieferungen
                organisieren müssen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Nordic Move Spain entwickelt die Interior Direction gemeinsam
                mit Ihnen und koordiniert Einrichtung, Styling und praktische
                Vorbereitung über vertrauenswürdige lokale Möbelpartner — damit
                Sie sanft ankommen, statt in einem unfertigen Projekt zu landen.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-stone-500">
                Die gezeigten Bilder sind Interior-Konzeptvisualisierungen zur
                Inspiration. Finales Design, Timing und Umsetzung hängen von
                Immobilie, Budget, Verfügbarkeit und ausgewählten lokalen
                Partnern ab.
              </p>

              <a
                href="/de/services/move-in-ready"
                className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Move-In Ready Support entdecken
              </a>
            </div>

            <div className="grid gap-6 p-8 md:grid-cols-2 lg:p-12">
              {[
                [
                  "/images/move-in-ready-ibiza.png",
                  "Ibiza Soho Lounge",
                  "Warmes mediterranes Wohnen mit sanften Weißtönen, natürlichen Texturen, dezenten Farbakzenten und entspanntem Indoor-Outdoor-Gefühl.",
                  "Ibiza Soho interior concept for Move-In Ready support on the Costa Blanca",
                ],
                [
                  "/images/move-in-ready-kitchen.png",
                  "Contemporary Coastal Kitchen",
                  "Eine hellere, architektonischere Richtung mit großen Fenstern, hellen Hölzern, feinen Oberflächen und ruhiger Küsteneleganz.",
                  "Contemporary coastal kitchen concept for Move-In Ready support on the Costa Blanca",
                ],
              ].map(([image, title, text, alt]) => (
                <article
                  key={title}
                  className="overflow-hidden rounded-[32px] bg-white/85 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-[360px] overflow-hidden">
                    <img
                      src={image}
                      alt={alt}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1e2a3a] backdrop-blur">
                      Konzeptvisualisierung
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                      Interior Direction
                    </p>

                    <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-stone-600">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NORDIC CIRCLE CONNECTIONS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative flex min-h-[520px] items-start justify-center bg-[#eadcca] p-8 md:p-10">
              <img
                src="/images/community-home.png"
                alt="Nordic Circle Connections for buyers and future residents on the Costa Blanca"
                className="w-full max-w-[620px] rounded-[24px] object-contain"
              />
            </div>

            <div className="p-10 md:p-12 lg:p-14">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Ankommen bedeutet mehr
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Eine Immobilie reicht nicht, wenn Sie sich nicht verbunden fühlen.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Durch unsere eigene Erfahrung mit Expat-Support haben wir
                gesehen, dass Menschen oft früher als erwartet zurückkehren,
                weil sie keinen lokalen Kreis aufbauen, echte Freundschaften
                vermissen oder sich vom Alltag vor Ort getrennt fühlen.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
                Nordic Circle hilft, dieses Risiko zu reduzieren. Während der
                Buyer Discovery Experience schaffen wir natürliche Momente, um
                Menschen mit ähnlichem Hintergrund, Lebensphase oder Interessen
                kennenzulernen — kein erzwungenes Networking, sondern ein
                besseres Gefühl dafür, ob die Region ein echtes Zuhause werden
                kann.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  [
                    "Social Fit",
                    "Vorstellungen können nach Sprache, Hintergrund, Lebensphase und Interessen gestaltet werden.",
                  ],
                  [
                    "Gemeinsame Momente",
                    "Lunches, Dinner, Golf, Wellness oder Gastronomie helfen, Menschen natürlich zusammenzubringen.",
                  ],
                  [
                    "Besseres Ankommen",
                    "Ziel ist es, das Risiko zu verringern, sich nach Kauf und Umzug isoliert zu fühlen.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[24px] border border-white/15 bg-white/5 p-5 backdrop-blur"
                  >
                    <h3 className="font-serif text-xl leading-tight text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-white/65 md:text-sm">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/de/services/nordic-circle-community"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Nordic Circle entdecken
                </a>

                <a
                  href="/de/contact"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
                >
                  Persönliches Beratungsgespräch vereinbaren
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PURCHASE SAFETY REPORT */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[#1e2a3a] p-12 text-white lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Purchase Safety
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                Risiken reduzieren, bevor Sie kaufen.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/80">
                Wenn Sie ernsthaft an einer Immobilie interessiert sind,
                schauen wir über die Präsentation hinaus. Über den Purchase
                Safety Report können unabhängige Spezialisten rechtliche und
                technische Risiken prüfen, bevor Sie sich festlegen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Dazu gehören unter anderem Genehmigungen, Anbauten,
                Eigentumsdokumente, mögliche Schulden oder Belastungen,
                Feuchtigkeit, Leckagen, Schimmel, sichtbare Mängel und der
                allgemeine Erhaltungszustand der Immobilie.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Das Ergebnis ist eine klarere Entscheidung: fortfahren, neu
                verhandeln, zusätzliche Bedingungen stellen oder Abstand nehmen,
                bevor Sie zu weit im Prozess sind.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/55">
                Ein technischer Käufercheck ist beim Kauf einer Immobilie über
                Nordic Move Spain enthalten, vorbehaltlich Zugang zur Immobilie,
                Timing und Verfügbarkeit der passenden Fachperson.
              </p>
            </div>

            <div className="p-10 md:p-12 lg:p-16">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  [
                    "Rechtliche Risiken",
                    "Genehmigungen, Anbauten, Eigentumsdokumente und mögliche Schulden oder Belastungen können geprüft werden.",
                  ],
                  [
                    "Technische Risiken",
                    "Feuchtigkeit, Leckagen, Schimmel, Risse, Entwässerung und sichtbare Mängel können früh erkannt werden.",
                  ],
                  [
                    "Unabhängiger Bericht",
                    "Die Ergebnisse werden zusammengeführt, damit Sie die Risiken verstehen, bevor Sie weitergehen.",
                  ],
                  [
                    "Klare Entscheidung",
                    "Fortfahren, neu verhandeln, Bedingungen stellen oder mit mehr Sicherheit Abstand nehmen.",
                  ],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-[28px] bg-[#f6f1ea] p-7">
                    <h3 className="font-serif text-2xl leading-tight text-[#1e2a3a]">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-stone-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                Berichte, Fotos, Dokumente und Fragen können in Ihrem sicheren
                Kundenportal gebündelt werden, damit die Entscheidung organisiert
                bleibt. Der enthaltene technische Käufercheck unterstützt die
                Entscheidungsfindung, ersetzt jedoch keine formale rechtliche Due
                Diligence, Bewertung oder vollständige bautechnische Untersuchung,
                sofern dies nicht separat vereinbart wurde.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/de/services/purchase-safety-report"
                  className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
                >
                  Purchase Safety entdecken
                </a>

                <a
                  href="/de/contact"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Immobiliencheck anfragen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="rounded-[40px] bg-white p-5 shadow-sm">
            <img
              src="/images/founder.png"
              alt="The founders of Nordic Move Spain"
              className="h-auto max-h-[620px] w-full rounded-[32px] object-contain object-center"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Über Nordic Move Spain
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
              Für internationale Käufer, die Ruhe, Klarheit und lokale Unterstützung suchen.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Nordic Move Spain wurde für internationale Käufer gegründet, die
              einen sichereren, persönlicheren und besser organisierten Weg zum
              Immobilienkauf an der Costa Blanca suchen — von der ersten
              Orientierung bis zum Ankommen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Wir wissen, dass ein Kauf in Spanien nicht nur eine
              Immobilienentscheidung ist, sondern auch die Entscheidung für ein
              anderes Umfeld, einen anderen Alltag und oft ein neues Kapitel.
              Deshalb verbinden wir Lifestyle-Verständnis, lokale Kenntnisse,
              ausgewählte Immobilien, einen enthaltenen technischen Käufercheck,
              sichere Dokumentenverwaltung und praktische Unterstützung nach dem
              Kauf.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Unsere Rolle ist es, Käufern zuerst zu helfen, den richtigen Ort
              zu verstehen, dann die Immobilie kritisch zu prüfen, den Prozess
              sicher zu organisieren und, wenn gewünscht, die Interior Direction
              zu gestalten und die Move-In-Vorbereitung mit vertrauenswürdigen
              lokalen Möbelpartnern zu koordinieren.
            </p>

            <a
              href="/de/about-us"
              className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
            >
              Mehr über uns lesen
            </a>
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
              Ehrliche Orientierung, bevor Sie eine Immobilie an der Costa Blanca kaufen.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Eine kleine Auswahl praktischer Ratgeber für internationale
              Käufer, die Ruhestandsregionen, den spanischen Kaufprozess und
              UK-Steuerfragen verstehen möchten, bevor sie entscheiden.
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

      {/* FAQ */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Häufige Fragen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Antworten auf wichtige Fragen vor dem Immobilienkauf.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[24px] bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-2xl text-[#1e2a3a] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="text-[#c8a063] transition group-open:rotate-45">+</span>
                </summary>

                <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Mit Klarheit starten
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Kaufen Sie mit Klarheit, Struktur und weniger blinden Flecken.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Wählen Sie die Unterstützung, die Sie jetzt brauchen, oder folgen
            Sie der gesamten Journey: von klarer Regionswahl über den enthaltenen
            technischen Käufercheck bis zu einem sanften, bezugsbereiten
            Ankommen.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/de/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Start with your Area Match Report
            </a>

            <a
              href="/de/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Schedule a consultation
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-300/70 px-8 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-stone-500">
          <span>© Nordic Move Spain</span>

          <div className="flex gap-6">
            <a href="/de/impressum" className="transition hover:text-[#1e2a3a]">
              Impressum
            </a>
            <a href="/de/datenschutz" className="transition hover:text-[#1e2a3a]">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}