export default function Home() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/15 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="w-[180px]"></div>

          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/de" className="border-b border-[#c8a063] pb-1">Startseite</a>
            <a href="/de/regions" className="hover:text-white/70 transition">Regionen</a>
            <a href="/de/services" className="hover:text-white/70 transition">Leistungen</a>
            <a href="/de/guides/buying-property-spain" className="hover:text-white/70 transition">Ratgeber</a>
            <a href="/de/about-us" className="hover:text-white/70 transition">Über uns</a>
            <a href="/de/contact" className="hover:text-white/70 transition">Kontakt</a>
          </div>

          <a href="/de/contact" className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]">
            Erstgespräch vereinbaren
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img src="/images/laatste-homepage.png" alt="Nordic Move Spain" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/5"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Nord
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[0.98] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-6xl">
              Ein anderer Weg,
              <br />
              Immobilien in
              <br />
              Spanien zu kaufen.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white">
              Mehr als Immobilien. Klarheit, Sicherheit und ein Umfeld, in dem Sie sich wirklich zuhause fühlen.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90">
              Wir helfen internationalen Käufern zu verstehen, wo sie leben möchten, worauf sie achten sollten, wie sie sicher kaufen und wie sie ein erfülltes Leben in Spanien aufbauen können.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              Englisch · Niederländisch · Deutsch · Spanisch · Schwedisch
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a href="/de/services/area-match" className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]">
                Area Match anfragen
              </a>

              <a href="/de/services/discovery-trips" className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900">
                Buyer Excursion entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Klarheit vor der Entscheidung
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Sicherheit, Klarheit und Orientierung, bevor Sie kaufen.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Der Kauf einer Immobilie in Spanien ist eine der wichtigsten Entscheidungen im Leben. Wir helfen internationalen Käufern, rechtliche, finanzielle und persönliche Aspekte zu verstehen, die viele erst nach dem Umzug entdecken.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Durch unser Area Match Assessment, unsere Costa Blanca Intelligence Reports und unsere Buyer Excursions erhalten Kunden ein tieferes Verständnis der Regionen, Gemeinden und praktischen Realität des Lebens an der Costa Blanca Nord, bevor sie langfristige Entscheidungen treffen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Viele Käufer konzentrieren sich nur auf die Immobilie selbst. Wir betrachten das gesamte Bild — Lage, rechtliche Sicherheit, laufende Kosten, Finanzierungsmöglichkeiten, Gemeinschaftsregeln und langfristige Lebensqualität.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                href: "/de/services/area-match",
                image: "/images/area-match.png",
                alt: "Costa Blanca Area Match",
                label: "Mit Einsicht beginnen",
                title: "Area Match & Intelligence Report",
                text: "Entdecken Sie, welche Orte und Wohnlagen am besten zu Ihrem Lebensstil, Ihrer Familie, Ihren Interessen, Ihrem Budget und Ihren langfristigen Plänen passen.",
                subtext: "Optionale Einblicke umfassen Gesundheitsversorgung, Schulen, Kriminalitätsdaten, internationale Gemeinschaften, Golf, Erreichbarkeit und Investitionsaspekte.",
                cta: "Area Match anfragen →",
              },
              {
                href: "/de/services/discovery-trips",
                image: "/images/discover-card.png",
                alt: "Buyer Excursion Costa Blanca",
                label: "Erleben, bevor Sie entscheiden",
                title: "Buyer Excursion",
                text: "Eine sorgfältig zusammengestellte Einführung in die Costa Blanca Nord, abgestimmt auf Ihren Lebensstil, Ihre Ziele und Ihre Lebensphase.",
                subtext: "Erkunden Sie Regionen persönlich, treffen Sie vertrauenswürdige rechtliche und finanzielle Fachleute und erleben Sie die Gemeinden, bevor Sie sich langfristig entscheiden.",
                cta: "Excursion entdecken →",
              },
              {
                href: "/de/services/after-care",
                image: "/images/soft-landing-card.png",
                alt: "Soft Landing Program",
                label: "Unterstützung nach dem Kauf",
                title: "Soft Landing Program",
                text: "Praktische Unterstützung nach dem Kauf — von Anmeldungen und Orientierung im Gesundheitssystem bis zu lokalen Kontakten und dem Ankommen im Alltag in Spanien.",
                subtext: "Kunden im Soft Landing Program können auch Teil der Nordic Circle Community werden, unserem kuratierten Netzwerk für Freundschaften, geschäftliche Kontakte und lokales Ankommen.",
                cta: "Soft Landing entdecken →",
              },
            ].map((item) => (
              <a key={item.href} href={item.href} className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <img src={item.image} alt={item.alt} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="p-10">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">{item.label}</p>
                  <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">{item.title}</h3>
                  <p className="mt-6 text-base leading-relaxed text-stone-600">{item.text}</p>
                  <p className="mt-5 text-base leading-relaxed text-stone-500">{item.subtext}</p>
                  <div className="mt-10 text-sm uppercase tracking-[0.25em]">{item.cta}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            So funktioniert es
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Ein klarer Weg von der ersten Orientierung bis zum Ankommen in Spanien.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-5">
            {[
              ["01", "Area Match", "Wir zeigen auf, welche Regionen der Costa Blanca zu Ihrem Lebensstil und Ihren Prioritäten passen könnten."],
              ["02", "Erstgespräch", "Wir besprechen Ihre Pläne auf Englisch, Niederländisch, Deutsch, Spanisch oder Schwedisch."],
              ["03", "Buyer Excursion", "Sie erleben Regionen, Fachleute und Lebensstil persönlich vor Ort."],
              ["04", "Kaufbegleitung", "Wir begleiten den Kaufprozess gemeinsam mit unabhängigen rechtlichen und finanziellen Fachleuten."],
              ["05", "Soft Landing", "Sie kommen mit Unterstützung an und können Teil der Nordic Circle Community werden."],
            ].map(([number, title, text]) => (
              <div key={number} className="border-l border-[#c8a063]/30 pl-5">
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">{number}</p>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-stone-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDES & INSIGHTS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ratgeber & Einblicke
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Praktische Einblicke vor dem Immobilienkauf in Spanien.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Klare Orientierung für internationale Käufer, die rechtliche, finanzielle, steuerliche und praktische Aspekte verstehen möchten, bevor sie eine Immobilienentscheidung treffen.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Kaufen in Spanien", "Immobilienkauf in Spanien", "Ein umfassender Ratgeber zu rechtlichen Prüfungen, Steuern, Hypotheken und Kaufkosten.", "/de/guides/buying-property-spain"],
              ["Käuferfehler", "Häufige Fehler beim Immobilienkauf", "Die häufigsten Fehler, die internationale Käufer vor und während des Kaufprozesses machen.", "/de/guides/common-mistakes-buying-property-spain"],
              ["Gemeinschaftsregeln", "Eigentümergemeinschaften in Spanien", "Verstehen Sie Gemeinschaftskosten, Vermietungsregeln, Protokolle und Pflichten von Eigentümern.", "/de/guides/homeowners-association-spain"],
              ["Steuerliche Aspekte", "Steuern beim Zweitwohnsitz in Spanien", "Was internationale Käufer über spanische Steuern, ausländisches Eigentum und laufende Verpflichtungen wissen sollten.", "/de/guides/dutch-tax-second-home-spain"],
            ].map(([label, title, text, href]) => (
              <a key={href} href={href} className="rounded-[32px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">{label}</p>
                <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">{title}</h3>
                <p className="mt-5 leading-relaxed text-stone-600">{text}</p>
                <span className="mt-8 inline-block text-sm uppercase tracking-[0.25em]">Ratgeber lesen →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NORDIC CIRCLE COMMUNITY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Nordic Circle Community
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Die richtigen Menschen sind genauso wichtig wie das richtige Zuhause.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Ob Kunden mit unserer Begleitung eine Immobilie kaufen, an einer Buyer Excursion teilnehmen oder unser Soft Landing Program wählen — unsere Leistungen können einzeln gebucht und auf die persönliche Situation abgestimmt werden.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
            Kunden können auch Teil der Nordic Circle Community werden — einem sorgfältig aufgebauten Netzwerk gleichgesinnter internationaler Käufer, Eigentümer, Unternehmer, Familien und zukünftiger Einwohner. Durch gemeinsame Erlebnisse, persönliche Vorstellungen und kuratierte Treffen entstehen wertvolle Kontakte, Freundschaften und ein echtes Gefühl von Zugehörigkeit.
          </p>

          <a href="/de/guides/nordic-cycle-community" className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]">
            Mehr über die Nordic Circle Community erfahren
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[320px_1fr]">
          <img src="/images/founder.png" alt="Founder Nordic Move Spain" className="h-[420px] w-full rounded-[28px] object-cover shadow-xl" />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Über Nordic Move Spain
            </p>

            <h2 className="mt-5 font-serif text-6xl leading-tight text-[#1e2a3a]">
              Persönliche Begleitung auf Basis von Vertrauen, Analyse und internationaler Erfahrung.
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
              Nordic Move Spain wurde für internationale Käufer gegründet, die beim Immobilienkauf und beim Ankommen in Spanien eine ruhigere, persönlichere und sorgfältig begleitete Erfahrung suchen.
            </p>

            <a href="/de/about-us" className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-white transition hover:bg-[#15202d]">
              Mehr über uns erfahren
            </a>
          </div>
        </div>
      </section>

      {/* REGIONS */}
      <section className="px-8 pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px]">
          <img src="/images/discover-card.png" alt="Costa Blanca North" className="h-[850px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10"></div>

          <div className="absolute inset-0 p-16">
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#d2a75f]">
                  Costa Blanca Nord
                </p>

                <h2 className="mt-6 max-w-4xl font-serif text-7xl leading-[1] text-white">
                  Entdecken Sie die begehrtesten Küstenregionen Spaniens.
                </h2>
              </div>

              <a href="/de/regions" className="hidden rounded-full border border-white px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900 md:inline-block">
                Alle Regionen ansehen
              </a>
            </div>

            <div className="absolute bottom-16 left-16 right-16 grid gap-8 md:grid-cols-3">
              {[
                ["Moraira", "Elegantes Küstenleben mit einer ruhigen internationalen Atmosphäre.", "/de/regions/moraira"],
                ["Altea", "Künstlerischer Charme und gehobenes mediterranes Lebensgefühl.", "/de/regions/altea"],
                ["Jávea", "Exklusive Villen, lebendige Atmosphäre und wunderschöne Strände.", "/de/regions/javea"],
              ].map(([title, text, href]) => (
                <a key={href} href={href} className="rounded-[32px] bg-white/95 p-8 backdrop-blur">
                  <h3 className="font-serif text-5xl text-[#1e2a3a]">{title}</h3>
                  <p className="mt-5 text-lg leading-relaxed text-stone-600">{text}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SELL YOUR PROPERTY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#e9dfd2]">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            <div className="p-14 lg:p-20">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Für Eigentümer
              </p>

              <h2 className="mt-6 font-serif text-6xl leading-[1] text-[#1e2a3a]">
                Möchten Sie Ihre Immobilie an nordeuropäische Käufer verkaufen?
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-700">
                Nordic Move Spain verbindet sorgfältig ausgewählte Immobilien an der Costa Blanca Nord mit internationalen Käufern aus den Niederlanden, Deutschland, Skandinavien und anderen nordeuropäischen Ländern.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Wir kombinieren internationales Marketing, vertrauenswürdige lokale Partnerschaften und persönliche Begleitung, um Käufer und Verkäufer effizienter zusammenzubringen.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/de/contact" className="rounded-full bg-[#1e2a3a] px-8 py-4 text-white">
                  Immobilie besprechen
                </a>

                <a href="/de/services" className="rounded-full border border-[#1e2a3a] px-8 py-4 text-[#1e2a3a]">
                  Mehr erfahren
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[500px]">
              <img src="/images/seller-section.png" alt="Immobilie an der Costa Blanca Nord verkaufen" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}