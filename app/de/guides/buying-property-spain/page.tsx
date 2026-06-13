export const metadata = {
  title: "Nordic Move Spain | Immobilien an der Costa Blanca Nord kaufen",
  description:
    "Nordic Move Spain hilft deutschen, niederländischen, schweizerischen und internationalen Käufern, die richtige Region zu wählen, sicher zu kaufen und sich an der Costa Blanca Nord einzuleben.",
};

export default function Home() {
  const guideCards = [
    {
      href: "/de/guides/best-areas-costa-blanca-north-retirees",
      label: "Ratgeber für den Ruhestand",
      title: "Die besten Orte an der Costa Blanca Nord für Ruheständler",
      text:
        "Ein praktischer Ratgeber für deutsche, niederländische, schweizerische und andere internationale Käufer, die geeignete Orte für ihren Ruhestand vergleichen möchten.",
      cta: "Ratgeber lesen →",
      featured: true,
    },
    {
      href: "/de/guides/buying-property-spain",
      label: "Immobilienkauf in Spanien",
      title: "Eine Immobilie in Spanien kaufen",
      text:
        "Ein vollständiger Ratgeber über rechtliche Prüfungen, Hypotheken, Kaufnebenkosten und den Kaufprozess für internationale Käufer.",
      cta: "Ratgeber lesen →",
      featured: false,
    },
    {
      href: "/de/guides/where-to-buy-property-costa-blanca-north",
      label: "Regionen-Ratgeber",
      title: "Wo sollte man an der Costa Blanca Nord eine Immobilie kaufen?",
      text:
        "Vergleichen Sie Moraira, Jávea, Altea, Benissa, Calpe und Dénia nach Lebensstil, Immobilienart, Einrichtungen und Käuferprofil.",
      cta: "Regionen-Ratgeber lesen →",
      featured: false,
    },
    {
      href: "/de/guides/moraira-vs-javea",
      label: "Ortsvergleich",
      title: "Moraira oder Jávea: Welcher Ort passt besser?",
      text:
        "Ein praktischer Vergleich für Käufer, die zwischen zwei der beliebtesten Orte an der Costa Blanca Nord wählen.",
      cta: "Vergleich lesen →",
      featured: false,
    },
    {
      href: "/de/guides/honest-guide-buying-property-costa-blanca-north",
      label: "Ehrlicher Käufer-Ratgeber",
      title: "Kosten, Vermietung und wichtige Prüfungen vor dem Kauf",
      text:
        "Ein ehrlicher Ratgeber über versteckte Kosten, Ferienvermietung, Strommasten, Lärm, Gemeinschaftsregeln und Dinge, die Käufer häufig zu spät entdecken.",
      cta: "Ratgeber lesen →",
      featured: false,
    },
    {
      href: "/de/guides/common-mistakes-buying-property-spain",
      label: "Häufige Käuferfehler",
      title: "Häufige Fehler beim Immobilienkauf",
      text:
        "Die häufigsten Fehler, die internationale Käufer vor und während des Immobilienkaufs in Spanien machen.",
      cta: "Ratgeber lesen →",
      featured: false,
    },
    {
      href: "/de/guides/homeowners-association-spain",
      label: "Regeln der Eigentümergemeinschaft",
      title: "Eigentümergemeinschaften in Spanien",
      text:
        "Informieren Sie sich vor dem Kauf über Gemeinschaftskosten, Vermietungsbeschränkungen, Versammlungsprotokolle und Pflichten der Eigentümer.",
      cta: "Ratgeber lesen →",
      featured: false,
    },
    {
      href: "/de/guides/dutch-tax-second-home-spain",
      label: "Steuern bei einer Zweitimmobilie",
      title: "Steuerliche Aspekte einer Zweitimmobilie in Spanien",
      text:
        "Was internationale Eigentümer über spanische Steuern und den Besitz einer Immobilie im Ausland wissen sollten.",
      cta: "Ratgeber lesen →",
      featured: false,
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
              Startseite
            </a>

            <a
              href="/de/regions"
              className="hover:text-white/70 transition"
            >
              Regionen
            </a>

            <a
              href="/de/services"
              className="hover:text-white/70 transition"
            >
              Leistungen
            </a>

            <a
              href="/de/guides"
              className="hover:text-white/70 transition"
            >
              Ratgeber
            </a>

            <a
              href="/de/about-us"
              className="hover:text-white/70 transition"
            >
              Über uns
            </a>

            <a
              href="/de/contact"
              className="hover:text-white/70 transition"
            >
              Kontakt
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
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
                className="rounded-full border border-[#c8a063] bg-[#c8a063] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white"
              >
                DE
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
          alt="Immobilienberatung von Nordic Move Spain an der Costa Blanca Nord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/5"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Nord
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[0.98] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-6xl">
              Ein anderer Weg,
              <br />
              eine Immobilie
              <br />
              in Spanien zu kaufen.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white">
              Mehr als eine Immobilie. Klarheit, Sicherheit und eine
              Gemeinschaft, in der Sie sich wirklich zu Hause fühlen.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90">
              Wir helfen internationalen Käufern zu verstehen, wo sie leben
              möchten, was sie vermeiden sollten, wie sie sicher kaufen und wie
              sie sich ein erfülltes Leben an der Costa Blanca Nord aufbauen.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              Englisch · Niederländisch · Deutsch · Spanisch · Schwedisch
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/de/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Area Match anfragen
              </a>

              <a
                href="/de/services/discovery-trips"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Buyer Discovery Trip entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EINFÜHRUNG */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Klarheit vor der Entscheidung
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Sicherheit, Klarheit und persönliche Verbindung vor dem Kauf.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Der Kauf einer Immobilie in Spanien ist eine der bedeutendsten
                Entscheidungen im Leben. Wir helfen internationalen Käufern,
                die Aspekte rund um Lebensstil, Recht, Hypothek, Bank,
                Versicherung und Alltag zu verstehen, die viele erst nach dem
                Umzug entdecken.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Durch unser Area Match Assessment, den Lifestyle Intelligence
                Report und den Buyer Discovery Trip erhalten Kunden ein
                tieferes Verständnis für die Regionen, Gemeinschaften und den
                Alltag an der Costa Blanca Nord, bevor sie langfristige
                Entscheidungen treffen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Viele Käufer konzentrieren sich nur auf die Immobilie. Wir
                betrachten das Gesamtbild — Lage, Lebensstil, rechtliche
                Sicherheit, laufende Kosten, Finanzierungsmöglichkeiten, lokale
                Dienstleistungen, Gemeinschaftsregeln und langfristige
                Lebensqualität.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DREI SÄULEN */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <a
              href="/de/services/area-match"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/area-match.png"
                alt="Area Match für die Costa Blanca Nord"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Beginnen Sie mit Klarheit
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Area Match &amp; Lifestyle Intelligence Report
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Entdecken Sie, welche Orte und Wohngebiete am besten zu Ihrem
                  Lebensstil, Ihrer Familie, Ihren Interessen, Ihrem Budget und
                  Ihren langfristigen Plänen passen.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Ihre persönliche Analyse kann Informationen über
                  Gesundheitsversorgung, Schulen, Sicherheit, internationale
                  Gemeinschaften, Golf, Restaurants, Erreichbarkeit, lokale
                  Dienstleistungen und den Immobilienmarkt enthalten.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Area Match anfragen →
                </div>
              </div>
            </a>

            <a
              href="/de/services/discovery-trips"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/discover-card.png"
                alt="Buyer Discovery Trip an der Costa Blanca Nord"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Erleben, bevor Sie entscheiden
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Buyer Discovery Trip
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Eine sorgfältig zusammengestellte dreitägige Immobilien- und
                  Lifestyle-Reise an der Costa Blanca Nord, abgestimmt auf Ihren
                  Lebensstil, Ihre Ziele und Ihre Lebensphase.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Lernen Sie ausgewählte Regionen persönlich kennen, treffen Sie
                  vertrauenswürdige unabhängige Fachleute und erleben Sie den
                  möglichen Alltag vor einer langfristigen Entscheidung.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Je nach Wunsch kann die Reise privat oder in einer sorgfältig
                  zusammengestellten kleinen Gruppe mit gleichgesinnten Käufern
                  stattfinden.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Buyer Discovery Trip entdecken →
                </div>
              </div>
            </a>

            <a
              href="/de/services"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/soft-landing-card.png"
                alt="Soft Landing Program nach dem Immobilienkauf in Spanien"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Unterstützung nach dem Kauf
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Soft Landing Program
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Praktische Unterstützung nach dem Kauf — von Anmeldungen und
                  Orientierung im Gesundheitssystem bis zu lokalen Kontakten und
                  dem Einleben in den spanischen Alltag.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Kunden unseres Soft Landing Program können auch Teil der
                  Nordic Circle Community werden, unserem persönlichen Netzwerk
                  für Freundschaften, geschäftliche Kontakte und lokale
                  Verbundenheit.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Soft Landing entdecken →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SO FUNKTIONIERT ES */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            So funktioniert es
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Ein klarer Weg von der ersten Orientierung bis zum neuen Zuhause in
            Spanien.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-5">
            {[
              [
                "01",
                "Area Match Assessment",
                "Füllen Sie unsere Lifestyle-Analyse aus, damit wir Ihre Ziele, Wünsche, Ihr Budget und Ihre Prioritäten für den Umzug verstehen.",
              ],
              [
                "02",
                "Lifestyle Intelligence Report",
                "Sie erhalten persönliche Einblicke in die Regionen, die am besten zu Ihrem Lebensstil passen, sowie Hinweise auf weniger geeignete Orte.",
              ],
              [
                "03",
                "Buyer Discovery Trip",
                "Erleben Sie ausgewählte Orte persönlich, treffen Sie vertrauenswürdige Fachleute und überprüfen Sie Ihre Standortwahl.",
              ],
              [
                "04",
                "Immobiliensuche und Kaufbegleitung",
                "Sobald der passende Ort feststeht, konzentrieren wir die Suche auf geeignete Immobilien und koordinieren den Kaufprozess mit unabhängigen Fachleuten.",
              ],
              [
                "05",
                "Soft Landing",
                "Nach dem Kauf unterstützen wir Sie beim praktischen Umzug und stellen Ihnen die Nordic Circle Community vor.",
              ],
            ].map(([number, title, text]) => (
              <div key={number} className="border-l border-[#c8a063]/30 pl-5">
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {number}
                </p>

                <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÜBER UNS */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="rounded-[40px] bg-white p-5 shadow-sm">
            <img
              src="/images/founder.png"
              alt="Die Gründer von Nordic Move Spain"
              className="h-auto max-h-[620px] w-full rounded-[32px] object-contain object-center"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Über Nordic Move Spain
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
              Persönliche Begleitung durch Gründer, die den Umzug nach Spanien
              verstehen.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Nordic Move Spain wurde gegründet, um internationalen Käufern
              einen persönlicheren, transparenteren und sorgfältiger geplanten
              Weg zum Immobilienkauf an der Costa Blanca Nord zu bieten.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Als Gründer verbinden wir internationale Erfahrung, lokale
              Kenntnisse, gründliche Recherche und vertrauenswürdige
              professionelle Kontakte. Wir wissen, dass der Kauf eines Hauses
              im Ausland nicht nur eine Immobilienentscheidung ist, sondern
              auch eine Entscheidung über Lebensstil, Sicherheit, Kontakte und
              Zugehörigkeit.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Unsere Aufgabe ist es, Käufern zu klareren Entscheidungen zu
              verhelfen, unnötige Risiken zu vermeiden und ihre Zukunft in
              Spanien mit größerer Sicherheit aufzubauen.
            </p>

            <a
              href="/de/about-us"
              className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
            >
              Mehr über uns erfahren
            </a>
          </div>
        </div>
      </section>

      {/* ORTE */}
      <section className="px-8 pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px]">
          <img
            src="/images/discovery2.png"
            alt="Costa Blanca Nord"
            className="h-[900px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 p-10 md:p-16">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/80">
                  Costa Blanca Nord
                </p>

                <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[1] text-white md:text-7xl">
                  Entdecken Sie die Orte, die zu Ihrem neuen Zuhause werden
                  könnten.
                </h2>
              </div>

              <a
                href="/de/regions"
                className="w-fit rounded-full border border-white px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                Alle Regionen ansehen
              </a>
            </div>

            <div className="absolute bottom-10 left-10 right-10 grid gap-6 md:bottom-16 md:left-16 md:right-16 md:grid-cols-3 md:gap-8">
              <a
                href="/de/regions/moraira"
                className="rounded-[32px] bg-white/95 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-serif text-4xl text-[#1e2a3a] md:text-5xl">
                  Moraira
                </h3>

                <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
                  Elegantes Leben an der Küste, eine ruhige internationale
                  Atmosphäre und schöne mediterrane Strände.
                </p>
              </a>

              <a
                href="/de/regions/altea"
                className="rounded-[32px] bg-white/95 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-serif text-4xl text-[#1e2a3a] md:text-5xl">
                  Altea
                </h3>

                <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
                  Künstlerischer Charme, authentischer spanischer Charakter und
                  ein stilvoller, entspannter Lebensstil am Meer.
                </p>
              </a>

              <a
                href="/de/regions/javea"
                className="rounded-[32px] bg-white/95 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-serif text-4xl text-[#1e2a3a] md:text-5xl">
                  Jávea
                </h3>

                <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
                  Internationale Atmosphäre mit Villen, Natur, Restaurants und
                  familienfreundlichen Stränden.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RATGEBER UND INFORMATIONEN */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Käufer-Ratgeber
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Ehrliche Orientierung vor dem Immobilienkauf an der Costa Blanca
              Nord.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Praktische Ratgeber für deutsche, niederländische,
              schweizerische und andere internationale Käufer, die Regionen,
              Risiken, Kosten, Vermietungsregeln und den Kaufprozess verstehen
              möchten.
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

      {/* IMMOBILIE VERKAUFEN */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#e9dfd2]">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            <div className="p-14 lg:p-20">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Für Immobilieneigentümer
              </p>

              <h2 className="mt-6 font-serif text-6xl leading-[1] text-[#1e2a3a]">
                Verkaufen Sie Ihre Immobilie an der Costa Blanca Nord an den
                richtigen internationalen Käufer.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-700">
                Viele Makler bieten eine Immobilie lediglich an. Wir
                positionieren sie gezielt für internationale Käufer, die ihren
                Lebensstil, ihre Lage und ihren langfristigen Wert verstehen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Durch unser Käufernetzwerk, die Area Match Assessments und
                unsere Buyer Discovery Trips wissen wir, wonach deutsche,
                niederländische, belgische, schweizerische, britische,
                skandinavische und andere internationale Käufer suchen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Wir helfen ausgewählten Immobilien, mit dem richtigen
                Käuferprofil, einer überzeugenden Lifestyle-Geschichte und
                einer internationalen Positionierung hervorzustechen.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/de/contact"
                  className="rounded-full bg-[#1e2a3a] px-8 py-4 text-white"
                >
                  Immobilie besprechen
                </a>

                <a
                  href="/de/services/sell-your-property"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-[#1e2a3a]"
                >
                  Mehr erfahren
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[500px]">
              <img
                src="/images/seller-section.png"
                alt="Immobilie an der Costa Blanca Nord verkaufen"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABSCHLIESSENDER CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Beginnen Sie mit Klarheit
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Bevor Sie eine Immobilie auswählen, wählen Sie den richtigen Ort.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Unser Area Match Assessment hilft Ihnen zu verstehen, welche Orte
            und Wohngebiete an der Costa Blanca Nord zu Ihrem Lebensstil, Ihrem
            Budget, Ihren Prioritäten und Ihren langfristigen Plänen passen.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/de/services/area-match"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Area Match anfragen
            </a>

            <a
              href="/de/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Kennenlerngespräch vereinbaren
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}