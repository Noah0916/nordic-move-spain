export const metadata = {
  title: "Immobilienratgeber Spanien | Nordic Move Spain",
  description:
    "Praktische deutschsprachige Immobilienratgeber für Spanien, übersichtlich gegliedert nach Regionen, rechtlichen Themen, Kaufnebenkosten, Steuern, Finanzierung und Alltag.",
};

const mainGuides = [
  {
    href: "/de/guides/beste-orte-costa-blanca-nord-rentner",
    label: "Ratgeber für Ruheständler",
    title: "Die besten Orte an der Costa Blanca Nord für Ruheständler",
    text:
      "Ein praktischer Ratgeber für deutsche, schweizerische, österreichische und andere internationale Käufer, die Dénia, Moraira, Jávea, Altea, Benissa und Calpe miteinander vergleichen.",
    details:
      "Vergleichen Sie medizinische Versorgung, ganzjährig geöffnete Einrichtungen, Mobilität, Ruhe, Unterhalt, Gemeinschaftsleben, touristische Auslastung und die langfristige Alltagstauglichkeit.",
    bestFor:
      "Ideal für ältere Käufer, die vor dem Immobilienkauf verstehen möchten, welcher Ort an der Costa Blanca Nord zu ihrem Ruhestand passt.",
    cta: "Ratgeber für Ruheständler lesen →",
  },
  {
    href: "/de/guides/wo-immobilie-costa-blanca-nord-kaufen",
    label: "Regionaler Ratgeber",
    title: "Wo sollte man an der Costa Blanca Nord eine Immobilie kaufen?",
    text:
      "Die richtige Region ist häufig wichtiger als die erste schöne Immobilie. Dieser Ratgeber vergleicht die wichtigsten Orte an der Costa Blanca Nord, bevor Sie Besichtigungstermine planen.",
    details:
      "Vergleichen Sie Moraira, Jávea, Altea, Benissa, Calpe und Dénia nach Lebensstil, Immobilientyp, täglicher Infrastruktur, Atmosphäre außerhalb der Saison und typischem Käuferprofil.",
    bestFor:
      "Ideal für Käufer, die noch entscheiden, welcher Ort oder Küstenabschnitt wirklich zu ihrem zukünftigen Leben in Spanien passt.",
    cta: "Regionalen Ratgeber lesen →",
  },
  {
    href: "/de/guides/kosten-vermietung-praktische-pruefungen-vor-kauf",
    label: "Ehrlicher Kaufratgeber",
    title: "Kosten, Vermietung und praktische Prüfungen vor dem Kauf",
    text:
      "Auch eine wunderschöne Immobilie kann die falsche Entscheidung sein, wenn praktische Details übersehen werden. Dieser Ratgeber erklärt, was Käufer häufig erst zu spät feststellen.",
    details:
      "Erfahren Sie mehr über versteckte Kosten, Regeln für Ferienvermietung, Strommasten, Verkehrslärm, Sommerandrang, Gemeinschaftsregeln, laufende Eigentümerkosten und wichtige Prüfungen vor einem Angebot.",
    bestFor:
      "Ideal für deutsche, schweizerische, österreichische und andere internationale Käufer, die vor einer verbindlichen Entscheidung ein realistisches Gesamtbild wünschen.",
    cta: "Ehrlichen Kaufratgeber lesen →",
  },
];

const guideCategories = [
  {
    id: "region-und-lage",
    label: "Region und Lage",
    title: "Wählen Sie zuerst das Umfeld, das zu Ihrem Alltag passt.",
    description:
      "Vergleichen Sie Küstenorte, das Hinterland und unterschiedliche Wohnprofile, bevor Sie sich auf eine Immobilie oder Gemeinde festlegen.",
    guides: [
      {
        href: "/de/guides/moraira-vs-javea",
        label: "Ortsvergleich",
        title: "Moraira vs. Jávea",
        text:
          "Ein praktischer Vergleich für Käufer, die zwischen zwei der gefragtesten Orte an der Costa Blanca Nord wählen.",
        useful:
          "Hilfreich, wenn Sie zwischen ruhigem Villenleben in Moraira und einem lebendigeren internationalen Alltag in Jávea schwanken.",
      },
      {
        href: "/de/guides/denia-vs-calpe",
        label: "Ortsvergleich",
        title: "Dénia vs. Calpe",
        text:
          "Ein Vergleich für Käufer, die zwischen Dénia und Calpe wählen und Atmosphäre, Infrastruktur, Strände, Erreichbarkeit, Immobilientypen, touristische Auslastung und das Leben außerhalb der Hauptsaison berücksichtigen möchten.",
        useful:
          "Hilfreich, wenn Sie zwischen dem urbaneren, spanisch geprägten Charakter Dénias und dem kompakteren Küstenleben in Calpe wählen möchten.",
      },
      {
        href: "/de/guides/kueste-oder-hinterland-mehr-haus-fuers-geld",
        label: "Küste oder Hinterland",
        title: "Küste oder Hinterland: Wo bekommen Sie mehr Haus für Ihr Geld?",
        text:
          "Vergleichen Sie beliebte Küstenorte mit dem spanischen Hinterland, darunter das Jalón-Tal und die Vall de Pop. Erfahren Sie, was dasselbe Budget bei Wohnfläche, Grundstück, Ruhe, Aussicht und täglicher Infrastruktur bewirken kann.",
        useful:
          "Hilfreich, wenn Sie zwischen Meeresnähe und mehr Platz, Privatsphäre sowie Immobilienwert im Hinterland abwägen.",
      },
    ],
  },
  {
    id: "recht-und-kaufprozess",
    label: "Recht und Kaufprozess",
    title: "Verstehen Sie die spanischen Regeln, bevor Sie unterschreiben.",
    description:
      "Vom Kaufablauf und der rechtlichen Prüfung bis zur Eigentümergemeinschaft und den Unterschieden zum deutschen System.",
    guides: [
      {
        href: "/de/guides/immobilie-in-spanien-kaufen",
        label: "Immobilienkauf in Spanien",
        title: "Eine Immobilie in Spanien kaufen",
        text:
          "Eine praktische Erklärung des spanischen Kaufprozesses, einschließlich rechtlicher Prüfung, Anzahlungen, Notartermin, Finanzierung, Kaufnebenkosten und der Unterlagen, die internationale Käufer vor der Unterzeichnung vorbereiten sollten.",
        useful:
          "Hilfreich, wenn Sie am Anfang Ihrer Immobiliensuche stehen und den gesamten Ablauf verstehen möchten.",
      },
      {
        href: "/de/guides/wie-lange-dauert-hauskauf-spanien",
        label: "Dauer des Kaufprozesses",
        title: "Wie lange dauert ein Hauskauf in Spanien?",
        text:
          "Eine übersichtliche Zeitleiste von der ersten Immobilienauswahl und Reservierung über die rechtliche Prüfung, den Arras-Vertrag und eine mögliche Finanzierungszusage bis zum Notartermin und zur Schlüsselübergabe.",
        useful:
          "Hilfreich, wenn Sie wissen möchten, wie viele Wochen oder Monate Sie realistisch einplanen sollten und welche Prüfungen, Unterlagen oder Finanzierungsschritte Verzögerungen verursachen können.",
      },
      {
        href: "/de/guides/spanische-regeln-unterschiede-deutschland",
        label: "Spanische Regeln",
        title: "Spanische Immobilienregeln, die anders funktionieren als in Deutschland",
        text:
          "Ein praktischer Ratgeber für deutsche Käufer über die Unterschiede zwischen dem deutschen und spanischen System, darunter die Rolle des Notars, Registro de la Propiedad, Catastro, Gemeinschaftsregeln, Ferienvermietung, Umbauten und Steuern.",
        useful:
          "Hilfreich, wenn Sie vermeiden möchten, in Spanien auf Grundlage deutscher Annahmen zu kaufen.",
      },
      {
        href: "/de/guides/eigentuemergemeinschaft-spanien",
        label: "Gemeinschaftsregeln",
        title: "Eigentümergemeinschaften in Spanien",
        text:
          "Verstehen Sie die Regeln der comunidad de propietarios, Gemeinschaftskosten, Versammlungsprotokolle, Vermietungsbeschränkungen, gemeinschaftlichen Unterhalt, Eigentümerpflichten und die Bedeutung dieser Prüfungen vor dem Kauf.",
        useful:
          "Hilfreich, wenn Sie eine Wohnung, ein Reihenhaus oder eine Immobilie in einer Urbanisation in Betracht ziehen.",
      },
      {
        href: "/de/guides/haeufige-fehler-immobilienkauf-spanien",
        label: "Käuferfehler",
        title: "Häufige Fehler beim Immobilienkauf in Spanien",
        text:
          "Erfahren Sie, welche Fehler Käufer in Spanien häufig machen – von der falschen Region bis zum Übersehen von Gemeinschaftsregeln, rechtlicher Prüfung, laufenden Eigentümerkosten und praktischen Alltagsthemen.",
        useful:
          "Hilfreich, wenn Sie emotionale Fehlentscheidungen und teure Überraschungen vermeiden möchten.",
      },
    ],
  },
  {
    id: "kosten-steuern-finanzierung",
    label: "Kosten, Steuern und Finanzierung",
    title: "Berechnen Sie, was Kauf und Eigentum wirklich kosten.",
    description:
      "Verschaffen Sie sich Klarheit über Kaufsteuern, Gesamtkosten, Hypotheken, monatliche Belastungen und steuerliche Themen für deutsche Käufer.",
    guides: [
      {
        href: "/de/guides/gesamtkosten-immobilienkauf-spanien",
        label: "Gesamte Kaufnebenkosten",
        title: "Gesamtkosten beim Immobilienkauf in Spanien",
        text:
          "Ein vollständiger Überblick über die Kosten zusätzlich zum Kaufpreis, darunter Kaufsteuer, Anwalt, Notar, Grundbuch, Gestoría, Bewertung und mögliche Finanzierungskosten.",
        useful:
          "Hilfreich, wenn Sie berechnen möchten, wie viel Eigenkapital Sie tatsächlich benötigen, bevor Sie reservieren oder einen Kaufvertrag unterschreiben.",
      },
      {
        href: "/de/guides/itp-iva-ajd-einfach-erklaert",
        label: "Steuern beim Kauf",
        title: "ITP, IVA und AJD einfach erklärt",
        text:
          "Eine verständliche Erklärung der wichtigsten spanischen Steuern beim Immobilienkauf. Erfahren Sie, wann ITP anfällt, wann IVA und AJD gelten und warum Bestandsimmobilien und Neubauten steuerlich unterschiedlich behandelt werden.",
        useful:
          "Hilfreich, wenn Sie vorab genau verstehen möchten, welche Kaufsteuer für Ihre Immobilie gilt und wie viel Eigenkapital Sie zusätzlich zum Kaufpreis benötigen.",
      },
      {
        href: "/de/guides/kosten-neue-hypothekenregeln-spanien",
        label: "Hypothek und Kosten",
        title: "Kosten und neue Hypothekenregeln in Spanien",
        text:
          "Ein aktueller Ratgeber zu spanischen Hypotheken, Immobilienbewertungen, Energieausweisen, Kostenverteilung und den Unterlagen, die Banken vor einer endgültigen Kreditzusage prüfen.",
        useful:
          "Hilfreich, wenn Sie eine Immobilie in Spanien finanzieren möchten und Verzögerungen, eine zu niedrige Bewertung oder unerwartete Hypothekenkosten vermeiden wollen.",
      },
      {
        href: "/de/guides/deutsche-steuerregeln-zweitwohnung-spanien",
        label: "Deutsche Steuerregeln",
        title: "Deutsche Steuerregeln für eine Zweitwohnung in Spanien",
        text:
          "Ein Ratgeber für in Deutschland steuerpflichtige Käufer einer Zweitwohnung in Spanien, einschließlich deutscher und spanischer Besteuerung, Mieteinnahmen sowie grenzüberschreitender Eigentumsfragen.",
        useful:
          "Hilfreich für deutsche Käufer, die steuerliche Themen verstehen möchten, bevor sie eine Immobilie im Ausland erwerben.",
      },
      {
        href: "/de/guides/lebenshaltungskosten-spanien",
        label: "Leben in Spanien",
        title: "Lebenshaltungskosten in Spanien",
        text:
          "Ein praktischer Überblick über die Kosten für Lebensmittel, Energie, Mobilität, Gesundheitsversorgung, Versicherungen, Restaurantbesuche, Internet und weitere feste sowie variable Ausgaben.",
        useful:
          "Hilfreich, wenn Sie ein realistisches Monatsbudget für Auswanderung, Zweitwohnsitz, Ruhestand oder einen längeren Aufenthalt in Spanien erstellen möchten.",
      },
    ],
  },
  {
    id: "praktisches-leben",
    label: "Praktisches Leben in Spanien",
    title: "Planen Sie auch den Alltag nach der Schlüsselübergabe.",
    description:
      "Praktische Ratgeber zu residencia, Steuern, Gesundheitsversorgung, Lebensmitteln, Haustieren und dem täglichen Leben für Menschen, die in Spanien wohnen, überwintern oder längere Zeit bleiben möchten.",
    guides: [
      {
        href: "/de/guides/leben-in-spanien-nach-hauskauf",
        label: "Leben nach dem Kauf",
        title:
          "Leben in Spanien nach dem Hauskauf: Residencia, Steuern und Gesundheitsversorgung erklärt",
        text:
          "Ein umfassender Ratgeber für Deutsche, die nach dem Kauf dauerhaft, überwiegend oder einen Teil des Jahres in Spanien leben möchten. Erfahren Sie, was residencia, padrón, steuerliche Ansässigkeit, Krankenversicherung und die Abmeldung in Deutschland praktisch bedeuten.",
        useful:
          "Hilfreich, wenn Sie nicht nur eine Immobilie kaufen, sondern auch klären möchten, welche administrativen, steuerlichen und gesundheitlichen Schritte zu Ihrer Aufenthaltsdauer und persönlichen Situation passen.",
      },
      {
        href: "/de/guides/supermarktpreise-spanien",
        label: "Lebensmittel in Spanien",
        title: "Supermarktpreise in Spanien",
        text:
          "Ein aktueller Vergleich alltäglicher Lebensmittel bei vier großen spanischen Supermarktketten, mit Beispielpreisen für Milch, Eier, Reis, Pasta, Olivenöl und andere häufig gekaufte Produkte.",
        useful:
          "Hilfreich, wenn Sie Ihre täglichen Ausgaben in Spanien einschätzen und wissen möchten, welcher Supermarkt bei Preis, Sortiment und Komfort am besten zu Ihnen passt.",
      },
      {
        href: "/de/guides/haustiere-in-spanien",
        label: "Leben mit Haustieren",
        title: "Haustiere in Spanien: alle wichtigen Informationen",
        text:
          "Ein Ratgeber für deutsche Käufer und Eigentümer über Haustiere in Spanien, darunter Reisen mit Hund oder Katze, Regeln in Eigentümergemeinschaften, Tierärzte, Versicherungen, Strände, Mietwohnungen und das tägliche Leben an der Costa Blanca.",
        useful:
          "Hilfreich, wenn Ihr Hund oder Ihre Katze mit nach Spanien zieht oder Sie wissen möchten, welche Regeln in Wohnungen, Urbanisationen und öffentlichen Bereichen gelten.",
      },
    ],
  },
];

export default function DeutscheImmobilienRatgeberPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="bg-[#1e2a3a] px-8 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Immobilienkauf in Spanien
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Praktische Orientierung, bevor Sie eine Immobilie in Spanien kaufen.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Ehrliche, praktische und regional ausgerichtete Ratgeber für deutsche,
            schweizerische, österreichische und andere internationale Käufer, die
            die Costa Blanca Nord in Betracht ziehen.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/de/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Area Match anfragen
            </a>

            <a
              href="#ratgeber"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-[#1e2a3a]"
            >
              Vor dem Kauf informieren
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Mit den richtigen Informationen beginnen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Eine gute Immobilienentscheidung beginnt mit klaren Informationen.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              Der Kauf einer Immobilie in Spanien ist spannend, sollte aber nicht
              mit zufälligen Besichtigungen oder ausschließlich schönen Fotos
              beginnen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Vor einer Entscheidung sollten Sie die Region, rechtliche Prüfungen,
              laufende Eigentümerkosten, Vermietungsregeln,
              Gemeinschaftsbeschränkungen und praktische Alltagsdetails verstehen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Diese Ratgeber helfen Ihnen, die Costa Blanca Nord klarer zu
              vergleichen, bevor Sie sich auf einen Ort festlegen oder konkrete
              Besichtigungen planen.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN GUIDES */}
      <section id="ratgeber" className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Hier beginnen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Unsere wichtigsten Ratgeber für ernsthafte Käufer.
              </h2>
            </div>

            <a
              href="/de/contact"
              className="rounded-full border border-[#1e2a3a] px-7 py-3 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Persönliche Beratung gewünscht?
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {mainGuides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="group rounded-[34px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  {guide.label}
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  {guide.title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  {guide.text}
                </p>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {guide.details}
                </p>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {guide.bestFor}
                </p>

                <span className="mt-9 inline-block text-sm uppercase tracking-[0.2em] text-[#1e2a3a]">
                  {guide.cta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* RATGEBER NACH THEMA */}
      <section className="bg-[#e9dfd2] px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              Ratgeber nach Thema
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Finden Sie schneller die Informationen, die zu Ihrer Kaufphase passen.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-stone-700">
              Die Artikel sind übersichtlich nach Region und Lage, rechtlichen
              Themen, Kosten und Finanzierung sowie dem praktischen Alltag in
              Spanien gegliedert.
            </p>

            <nav
              aria-label="Kategorien der Immobilienratgeber"
              className="mt-9 flex flex-wrap gap-3"
            >
              {guideCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="rounded-full border border-[#9b743d]/40 bg-[#f6f1ea] px-5 py-3 text-sm font-medium text-[#1e2a3a] transition hover:border-[#1e2a3a] hover:bg-white"
                >
                  {category.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-20">
            {guideCategories.map((category, categoryIndex) => (
              <section
                id={category.id}
                key={category.id}
                className={
                  categoryIndex === 0
                    ? "scroll-mt-24"
                    : "mt-24 scroll-mt-24 border-t border-[#9b743d]/25 pt-20"
                }
              >
                <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
                  <header>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                      {category.label}
                    </p>

                    <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                      {category.title}
                    </h3>

                    <p className="mt-6 leading-relaxed text-stone-700">
                      {category.description}
                    </p>
                  </header>

                  <div className="grid gap-8 md:grid-cols-2">
                    {category.guides.map((guide) => (
                      <a
                        key={guide.href}
                        href={guide.href}
                        className="group flex h-full flex-col rounded-[30px] bg-[#f6f1ea] p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                      >
                        <p className="text-sm uppercase tracking-[0.25em] text-[#9b743d]">
                          {guide.label}
                        </p>

                        <h4 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                          {guide.title}
                        </h4>

                        <p className="mt-5 leading-relaxed text-stone-700">
                          {guide.text}
                        </p>

                        <p className="mt-5 leading-relaxed text-stone-700">
                          {guide.useful}
                        </p>

                        <span className="mt-auto inline-block pt-8 text-sm uppercase tracking-[0.2em] text-[#1e2a3a]">
                          Ratgeber lesen →
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-12 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Persönliche Begleitung gewünscht?
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight">
            Sie wissen noch nicht, welche Region oder welcher Immobilientyp zu
            Ihrem zukünftigen Leben in Spanien passt?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Unser Area Match Assessment hilft Ihnen, Orte an der Costa Blanca
            Nord anhand von Lebensstil, Budget, Infrastruktur, langfristigen
            Plänen und praktischen Anforderungen zu vergleichen.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/de/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Area Match anfragen
            </a>

            <a
              href="/de/contact"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Kennenlerngespräch vereinbaren
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}