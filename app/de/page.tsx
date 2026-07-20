export const metadata = {
  title: "Sicherer eine Immobilie an der Costa Blanca kaufen | Nordic Move Spain",
  description:
    "Ein sichererer Weg zum Immobilienkauf mit Area Match, unabhängiger technischer Prüfung und Dokumentenabgleich, rechtlicher Due Diligence und einer klaren Grün-Gelb-Rot-Kaufempfehlung.",
  openGraph: {
    title: "Ein sichererer Weg zum Immobilienkauf an der Costa Blanca | Nordic Move Spain",
    description:
      "Nordic Move Spain koordiniert einen unabhängigen Sachverständigen und einen passenden Rechtsanwalt mit Fachkenntnis im spanischen Immobilienrecht. Auf Grundlage beider professionellen Beurteilungen erhalten Sie eine klare Empfehlung: fortfahren, neu bewerten oder nicht kaufen.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ein sichererer Weg zum Immobilienkauf an der Costa Blanca",
    description:
      "Vom Area Match und der gezielten Immobiliensuche bis zu unabhängigen Prüfungen, Kaufbegleitung, Umzug und Einrichtung — mit einem festen Nordic-Move-Ansprechpartner.",
  },
};

export default function GermanHomePage() {
  const guideCards = [
    {
      href: "/de/guides/best-areas-costa-blanca-north-retirees",
      label: "Ratgeber für den Ruhestand",
      title: "Die besten Orte an der Costa Blanca für den Ruhestand",
      text:
        "Ein praktischer Ratgeber für internationale Käufer, die die besten Orte an der Costa Blanca für den Ruhestand vergleichen.",
      cta: "Ratgeber zum Ruhestand lesen →",
      featured: true,
    },
    {
      href: "/de/guides/buying-property-spain",
      label: "Kaufen in Spanien",
      title: "Eine Immobilie in Spanien kaufen",
      text:
        "Ein umfassender Ratgeber zu rechtlichen Prüfungen, Hypotheken, Kaufnebenkosten und dem Kaufprozess für internationale Käufer.",
      cta: "Ratgeber lesen →",
      featured: false,
    },
    {
      href: "/de/guides/german-tax-second-home-spain",
      label: "Steuerratgeber für Deutsche",
      title: "Deutsche Steuerregeln für eine Zweitimmobilie in Spanien",
      text:
        "Was deutsche Käufer über spanische Immobiliensteuern, die deutsche Steuererklärung, Vermietungseinkünfte, Veräußerungsgewinne und die Vermeidung einer Doppelbesteuerung wissen sollten.",
      cta: "Steuerratgeber lesen →",
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

          <div className="flex items-center gap-3">
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
                className="rounded-full border border-[#c8a063] bg-[#c8a063] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#b48a4f]"
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
              Beratungsgespräch vereinbaren
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Nordic Move Spain guidance for buying a property on the Costa Blanca"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/28 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[0.98] text-[#f3ede3] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-6xl">
              Ein sichererer Weg,
              <br />
              eine Immobilie zu kaufen
              <br />
              an der Costa Blanca.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#f7f2ea] drop-shadow-[0_2px_12px_rgba(0,0,0,0.38)]">
              Für internationale Käufer, die Wert auf Zeit, Sicherheit und einen
              festen Ansprechpartner legen. Von der passenden Region und
              Immobilie bis zu unabhängigen Prüfungen, Kauf, Umzug und
              Einrichtung: Nordic Move koordiniert den gesamten Prozess von A
              bis Z.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              Ein Ansprechpartner · Vollständige Koordination · Von der ersten Orientierung bis zur Ankunft
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/de/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Mit Ihrem Area Match Report starten
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

      {/* PURCHASE SAFETY — ONE CLEAR DECISION */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="bg-[#1e2a3a] p-12 text-white lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Technische und rechtliche Prüfung vor dem Kauf
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                Von einer schönen Immobilie zu einer verantwortungsvollen Entscheidung.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Der unabhängige Sachverständige beurteilt den sichtbaren und
                zugänglichen technischen Zustand der Immobilie. Dabei werden
                unter anderem Baumängel, Feuchtigkeit und Wassereintritt,
                Installationen, Pool, Nebengebäude und Grundstück geprüft. Die
                Immobilie wird vermessen und notwendige Reparaturen oder
                weiterführende Untersuchungen werden aufgezeigt.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Zusätzlich vergleicht der Sachverständige die tatsächliche
                Immobilie und die gemessenen Flächen mit verfügbaren
                Informationen wie Nota Simple, Catastro, Maklerangaben,
                Energieausweis, ITE sowie eingereichten Planungs-, Zertifikats-
                und Genehmigungsunterlagen. Mögliche Abweichungen bei Flächen,
                Anbauten, Garagen, Pools, Registrierungen oder Genehmigungen
                werden so frühzeitig erkannt.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Zusätzlich wählen und koordinieren wir einen unabhängigen
                Rechtsanwalt, der zu Ihrer Sprache, Situation und Ihren
                Bedürfnissen passt und auf spanisches Immobilienrecht
                spezialisiert ist. Der Rechtsanwalt führt die vollständige
                rechtliche Due Diligence durch, einschließlich der Prüfung von
                Eigentum, Belastungen, Schulden, Genehmigungen, Verträgen und
                den Bedingungen der Eigentumsübertragung.
              </p>

              <p className="mt-6 text-base font-medium leading-relaxed text-[#c8a063]">
                Auf Grundlage beider professionellen Beurteilungen empfehlen wir:
                fortfahren, neu bewerten oder nicht kaufen.
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
                Zwei professionelle Berichte. Eine klare Kaufempfehlung.
              </p>

              <h3 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-[#1e2a3a]">
                Fortfahren, neu bewerten oder nicht kaufen.
              </h3>

              <div className="mt-10 grid gap-6">
                <article className="rounded-[28px] border border-emerald-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">
                    Grün · Fortfahren
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Die technische Prüfung und die rechtliche Due Diligence
                    bieten eine ausreichende Grundlage, um unter den genannten
                    technischen, rechtlichen und vertraglichen Bedingungen
                    fortzufahren.
                  </p>
                </article>

                <article className="rounded-[28px] border border-amber-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
                    Gelb · Neu bewerten
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Risiken, fehlende Informationen oder Unsicherheiten erfordern
                    weitere Untersuchungen, Kostenschätzungen, Nachverhandlungen
                    oder zusätzliche Bedingungen, bevor Sie fortfahren.
                  </p>
                </article>

                <article className="rounded-[28px] border border-red-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-800">
                    Rot · Nicht kaufen
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Die festgestellten technischen, rechtlichen oder praktischen
                    Risiken machen den Kauf nicht empfehlenswert, sofern sie
                    nicht vor Ihrer verbindlichen Entscheidung vollständig und
                    nachweislich gelöst werden.
                  </p>
                </article>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                Der Dokumenten- und Registerabgleich durch den Sachverständigen
                ist eine erste Prüfung und Einordnung; er ersetzt weder die
                rechtliche Due Diligence noch eine formelle Bestätigung durch
                die zuständigen Behörden. Die technische und die rechtliche
                Prüfung werden von unabhängigen externen Fachleuten
                durchgeführt, die jeweils für ihren eigenen Bericht
                verantwortlich bleiben. Zusätzliche Fachuntersuchungen können
                erforderlich sein und werden gesondert besprochen. Keine
                Prüfung kann absolute Sicherheit garantieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS & TRUST */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#e9dfd2] shadow-sm">
          <div className="grid items-center gap-0 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="bg-white p-5 lg:p-7">
              <img
                src="/images/founder.png"
                alt="Die Gründer von Nordic Move Spain"
                className="h-auto max-h-[520px] w-full rounded-[32px] object-contain object-center"
              />
            </div>

            <div className="p-10 md:p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Die Menschen hinter Nordic Move
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Persönliche Begleitung. Unabhängige Expertise.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-700">
                Nordic Move Spain ist aus Erfahrung in internationaler
                Relocation, Forschung, Business und Strategie entstanden. Wir
                sind Ihr fester Ansprechpartner und koordinieren die
                Zusammenarbeit mit dem unabhängigen Sachverständigen, einem
                passenden Rechtsanwalt mit Fachkenntnis im spanischen
                Immobilienrecht und den weiteren ausgewählten Fachleuten
                innerhalb Ihrer Begleitung.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  [
                    "Internationale Begleitung",
                    "Erfahrung mit Relocation und Menschen, die in einem anderen Land ein neues Leben aufbauen.",
                  ],
                  [
                    "Fundierter Ansatz",
                    "Ein Hintergrund in Forschung, Business, Strategie und sorgfältiger Entscheidungsfindung.",
                  ],
                  [
                    "Unabhängige Fachleute",
                    "Die technische Prüfung und der Dokumentenabgleich werden von einem unabhängigen Sachverständigen durchgeführt. Die rechtliche Due Diligence übernimmt ein passender unabhängiger Rechtsanwalt.",
                  ],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-[24px] bg-white/75 p-5 shadow-sm"
                  >
                    <h3 className="font-serif text-xl leading-tight text-[#1e2a3a]">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="/de/about-us"
                className="mt-9 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Nordic Move kennenlernen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AREA MATCH TO SOFT LANDING */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Vom Lebenswunsch zum sanften Ankommen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Zuerst die passende Lebensumgebung. Dann die richtige Immobilie. Und Begleitung, bis sich alles wie Zuhause anfühlt.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Viele internationale Käufer suchen zunächst endlos zwischen
                Hunderten von Immobilien und stellen erst später fest, dass die
                Umgebung nicht zu ihrem Alltag passt. Mit unserem Area Match
                Report erfassen wir zuerst Ihre Wohnwünsche, Ihr Budget, Ihre
                Zukunftspläne und Prioritäten. So vermeiden Sie, monatelang in
                Regionen zu suchen, die am Ende nicht wirklich zu Ihnen passen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Danach sind wir Ihr persönlicher Immobilienmakler an der Costa
                Blanca. Während der Buyer Discovery Experience erleben Sie eine
                gezielte Auswahl passender Regionen und Immobilien. Wir
                organisieren die Besichtigungen, begleiten die Kommunikation mit
                Verkäufern und Maklern und unterstützen Sie bei Verhandlungen
                und Kauf.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Wird eine Immobilie konkret, koordinieren wir eine unabhängige
                technische Prüfung mit Dokumentenabgleich und wählen einen
                passenden unabhängigen Rechtsanwalt für die rechtliche Due
                Diligence. Auf Grundlage beider professionellen Beurteilungen
                empfehlen wir: fortfahren, neu bewerten oder nicht kaufen.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  [
                    "Ein vertrauensvoller Ansprechpartner",
                    "Sie kommunizieren mit einer festen Nordic-Move-Kontaktperson, die Ihre Wünsche, Prioritäten und Sorgen kennt und während des gesamten Prozesses eingebunden bleibt.",
                  ],
                  [
                    "Vollständige Koordination",
                    "Wir behalten im Blick, wer was erledigt, welche Informationen fehlen, welcher Schritt als Nächstes folgt und wo Verzögerungen oder Risiken entstehen.",
                  ],
                  [
                    "Mehr Sicherheit vor dem Kauf",
                    "Unabhängige technische und rechtliche Prüfungen helfen dabei zu beurteilen, ob der Kauf der Immobilie sinnvoll ist.",
                  ],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-[24px] bg-white p-5 shadow-sm"
                  >
                    <h3 className="font-serif text-xl leading-tight text-[#1e2a3a]">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Auch nach dem Kauf bleiben wir Ihr fester Ansprechpartner.
                Abhängig von Ihren Bedürfnissen bringen wir Sie mit einem
                passenden Hypothekenberater in Kontakt, unterstützen Sie bei der
                Auswahl und Koordination eines zuverlässigen
                Umzugsunternehmens und übernehmen selbst die Koordination von
                Styling und Einrichtung mit ausgewählten lokalen Fachleuten.
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
              Von der passenden Region und Immobilie bis zu einem kontrollierten Kauf, Umzug, Einrichtung und sanften Ankommen.
            </h2>

            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-lg font-medium leading-relaxed text-[#1e2a3a]">
                Sie müssen nicht jeden Schritt nutzen.
              </p>

              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Nutzen Sie die gesamte Journey mit einem festen Ansprechpartner
                oder steigen Sie dort ein, wo Sie uns brauchen: Area Match,
                Buyer Discovery, Purchase Safety oder Move-In Ready.
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
                  Ein ausführliches persönliches Profil, ergänzt durch lokale
                  Fakten zu Gesundheitsversorgung, Schulen, Golf,
                  Community-Profil, Einrichtungen, Infrastruktur und
                  Lifestyle-Fit.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Kostenlosen Report anfordern →
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
                alt="Purchase Safety assessment for buyers on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Schritt 3 · Prüfungen vor dem Kauf
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Purchase Safety
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Ein unabhängiger Sachverständiger beurteilt den technischen
                  Zustand und vergleicht die Immobilie mit verfügbaren
                  Registern und Dokumenten. Zusätzlich wählen wir einen
                  passenden unabhängigen Rechtsanwalt für die rechtliche Due
                  Diligence. Auf Grundlage beider Berichte erhalten Sie unsere
                  Kaufempfehlung in Grün, Gelb oder Rot.
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
                  Gemeinsam mit Ihnen bestimmen wir die Interior Direction und
                  koordinieren Styling, Einrichtung, lokale Fachleute und auf
                  Wunsch die Abstimmung mit einem zuverlässigen
                  Umzugsunternehmen.
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
                Kommen Sie in einer Immobilie an, die sich bereits wie Zuhause anfühlt.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-700">
                Nach dem Kauf möchten Sie nicht aus dem Ausland selbst einen
                Hypothekenberater, ein Umzugsunternehmen, Handwerker,
                Möbelpartner, Beleuchtung, Vorhänge und Lieferungen aufeinander
                abstimmen müssen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Nordic Move bleibt Ihr fester Ansprechpartner. Wo erforderlich,
                bringen wir Sie mit einem passenden Hypothekenberater in Kontakt,
                unterstützen bei der Auswahl und Koordination eines
                zuverlässigen Umzugsunternehmens und entwickeln und koordinieren
                selbst Styling und Einrichtung mit ausgewählten lokalen
                Fachleuten — damit Sie entspannt ankommen, statt in einem
                unfertigen Projekt zu landen.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-stone-500">
                Die gezeigten Bilder sind Interior-Konzeptvisualisierungen zur
                Inspiration. Endgültiges Design, Zeitplan und Ausführung hängen
                von der Immobilie, dem Budget, der Verfügbarkeit und den
                ausgewählten lokalen Partnern ab.
              </p>

              <a
                href="/de/services/move-in-ready"
                className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Move-In-Ready-Support entdecken
              </a>
            </div>

            <div className="grid gap-6 p-8 md:grid-cols-2 lg:p-12">
              {[
                [
                  "/images/move-in-ready-ibiza.png",
                  "Ibiza Soho Lounge",
                  "Warmes mediterranes Wohnen mit sanften Weißtönen, natürlichen Texturen, dezenten Farbakzenten und einem entspannten Indoor-Outdoor-Gefühl.",
                  "Ibiza Soho interior concept for Move-In Ready support on the Costa Blanca",
                ],
                [
                  "/images/move-in-ready-kitchen.png",
                  "Contemporary Coastal Kitchen",
                  "Eine hellere und architektonischere Richtung mit großen Fenstern, hellen Holztönen, feinen Oberflächen und ruhiger Küsteneleganz.",
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
                Sich zuhause fühlen zählt
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Eine Immobilie reicht nicht, wenn Sie sich nicht verbunden fühlen.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Aus unserer eigenen Erfahrung im Expat-Support wissen wir,
                dass Menschen manchmal früher als erwartet zurückkehren, weil
                sie kein lokales Netzwerk aufbauen, bedeutungsvolle
                Freundschaften vermissen oder sich vom Alltag vor Ort getrennt
                fühlen.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
                Nordic Circle hilft, dieses Risiko zu verringern. Während der
                Buyer Discovery Experience schaffen wir natürliche Gelegenheiten,
                Menschen mit ähnlichem Hintergrund, Lebensabschnitt oder
                Interessen kennenzulernen — kein erzwungenes Networking,
                sondern ein besseres Gefühl dafür, ob die Region wirklich zu
                einem Zuhause werden kann.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  [
                    "Social Fit",
                    "Vorstellungen können auf Sprache, Hintergrund, Lebensphase und Interessen abgestimmt werden.",
                  ],
                  [
                    "Gemeinsame Momente",
                    "Mittagessen, Dinner, Golf, Wellness oder Gastronomie helfen Menschen, auf natürliche Weise Kontakte zu knüpfen.",
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
                  Persönliches Gespräch vereinbaren
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-10 shadow-sm md:p-14 lg:p-16">
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Über Nordic Move Spain
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
                Entwickelt für internationale Käufer, die Ruhe, Klarheit und lokale Unterstützung wünschen.
              </h2>
            </div>

            <div>
              <p className="text-xl leading-relaxed text-stone-700">
                Nordic Move Spain wurde für internationale Käufer entwickelt,
                die eine persönlichere, besser organisierte und sorgfältiger
                kontrollierte Art suchen, eine Immobilie an der Costa Blanca zu
                kaufen — von der ersten Orientierung bis zur Ankunft.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Wir verstehen, dass ein Kauf in Spanien nicht nur eine
                Immobilienentscheidung ist, sondern auch eine Entscheidung für
                eine andere Umgebung, einen anderen Alltag und oft ein neues
                Kapitel. Deshalb verbinden wir Lifestyle-Verständnis, lokale
                Kenntnisse, gezielte Immobilienauswahl, eine unabhängige
                technische Prüfung mit Dokumentenabgleich, rechtliche Due
                Diligence durch einen passenden unabhängigen Rechtsanwalt, eine
                klare Kaufempfehlung, vollständige Koordination und praktische
                Unterstützung nach dem Kauf.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Unsere Aufgabe ist es, den gesamten Prozess mit einem festen
                Ansprechpartner verständlich und übersichtlich zu machen. Wir
                helfen Ihnen, den passenden Ort und die richtige Immobilie zu
                bestimmen, begleiten Auswahl und Besichtigungen und koordinieren
                die unabhängigen Prüfungen, die Kaufbegleitung und die
                beteiligten Fachleute. Danach unterstützen wir auf Wunsch bei
                der Vermittlung eines passenden Hypothekenberaters, der
                Umzugskoordination sowie bei Styling und Einrichtung mit
                zuverlässigen lokalen Partnern.
              </p>

              <a
                href="/de/about-us"
                className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Mehr über uns erfahren
              </a>
            </div>
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
              deutsche Steuerfragen verstehen möchten, bevor sie entscheiden.
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

      {/* FINAL CALL */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Mit Klarheit beginnen
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Erhalten Sie eine ehrliche Antwort, bevor Sie kaufen.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Vom Area Match und der Immobiliensuche bis zu unabhängigen
            Prüfungen, Kaufbegleitung, Hypothekenberatung über einen passenden
            Fachpartner, Umzugskoordination, Styling und Einrichtung: Sie haben
            einen festen Nordic-Move-Ansprechpartner, der den gesamten Prozess
            von A bis Z organisiert.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/de/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Mit Ihrem Area Match Report starten
            </a>

            <a
              href="/de/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Beratungsgespräch vereinbaren
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}