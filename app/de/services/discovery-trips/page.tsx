export const metadata = {
  title:
    "Buyer Discovery Trip Costa Blanca Nord | Gezielt eine Immobilie in Spanien kaufen",
  description:
    "Persönlicher 4-tägiger Buyer Discovery Trip an der Costa Blanca Nord mit Area-Match-Bericht, einer Shortlist von 4 bis 8 Immobilien, Privattransfer, Aufenthalt in einem 4- oder 5-Sterne-Hotel, lokalen Erlebnissen, unabhängigen Experten und Kaufbegleitung.",
  keywords: [
    "4-tägiger Buyer Discovery Trip Costa Blanca Nord",
    "Buyer Discovery Trip Spanien",
    "Haus kaufen Spanien",
    "Immobilie kaufen Spanien",
    "Haus kaufen Costa Blanca Nord",
    "Immobilie kaufen Costa Blanca Nord",
    "Immobilien kaufen Spanien",
    "Besichtigungsreise Spanien",
    "Häuser besichtigen Spanien",
    "individuelle Immobilienbesichtigungen Spanien",
    "Immobilienbesichtigungen Costa Blanca Nord",
    "gezielte Besichtigungen Spanien",
    "Area-Match-Bericht Spanien",
    "Kaufbegleitung Spanien",
    "deutschsprachige Kaufbegleitung Spanien",
    "Zweitwohnsitz in Spanien kaufen",
    "nach Spanien auswandern",
    "Haus in Moraira kaufen",
    "Haus in Jávea kaufen",
    "Javea Hauskaufreise",
    "Haus in Altea kaufen",
    "Haus in Benissa kaufen",
    "Wohnung in Calpe kaufen",
    "Haus in Dénia kaufen",
    "Immobilie in Denia kaufen",
    "Immobilie im Vall de Pop kaufen",
    "Vall de Pop Spanien",
    "Villa-Shortlist Costa Blanca",
    "Wildcard-Immobilie Spanien",
    "technische Immobilienprüfung Spanien",
    "unabhängiger Immobilienanwalt Spanien",
    "4-Sterne-Hotel Costa Blanca",
    "5-Sterne-Hotel Costa Blanca",
  ],
  alternates: {
    canonical: "/de/buyer-discovery-trip-costa-blanca-nord",
  },
  openGraph: {
    title:
      "Buyer Discovery Trip Costa Blanca Nord | Gezielt eine Immobilie in Spanien kaufen",
    description:
      "Entdecken Sie in 4 Tagen, welche Region und Immobilie zu Ihnen passen. Mit Area-Match-Bericht, einer Shortlist von 4 bis 8 Immobilien, Privattransfer, Aufenthalt in einem 4- oder 5-Sterne-Hotel, lokalen Erlebnissen, Experten und gleichgesinnten Käufern.",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/discover-card.png",
        width: 1200,
        height: 630,
        alt: "4-tägiger Buyer Discovery Trip an der Costa Blanca Nord für den Immobilienkauf in Spanien",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const buyerDiscoveryTripStructuredData = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "4-tägiger Buyer Discovery Trip Costa Blanca Nord",
  description:
    "Eine individuell zusammengestellte Immobilien- und Lifestyle-Reise für internationale Käufer mit Area-Match-Bericht, einer Shortlist von 4 bis 8 Immobilien, Privattransfer, Aufenthalt in einem 4- oder 5-Sterne-Hotel, lokalen Erlebnissen und Begegnungen mit unabhängigen Kaufexperten.",
  touristType: [
    "Deutsche Käufer",
    "Schweizer und österreichische Käufer",
    "Internationale Käufer",
    "Käufer eines Zweitwohnsitzes",
    "Käufer, die nach Spanien umziehen möchten",
  ],
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Tag 1: Abholung am Flughafen, Check-in, Area Match, Shortlist und persönliche Begrüßung",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tag 2: Regionserlebnis und ausgewählte Immobilienbesichtigungen auf Grundlage der Shortlist",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tag 3: Weitere Besichtigungen, mögliche Wildcard und individuell abgestimmte lokale Aktivität",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Tag 4: Gespräche mit unabhängigen Experten, Kaufprozess und nächste Schritte",
      },
    ],
  },
  areaServed: [
    "Costa Blanca Nord",
    "Moraira",
    "Jávea",
    "Javea",
    "Altea",
    "Benissa",
    "Calpe",
    "Dénia",
    "Denia",
    "Alicante",
    "Vall de Pop",
    "Pop Valley",
    "Jalón",
    "Xaló",
    "Llíber",
  ],
};

export default function BuyerDiscoveryTripPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buyerDiscoveryTripStructuredData),
        }}
      />

      <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
        {/* HERO */}
        <section className="relative min-h-[90vh] overflow-hidden">
          <img
            src="/images/discover-card.png"
            alt="Persönlicher Buyer Discovery Trip an der Costa Blanca Nord mit ausgewählten Immobilienbesichtigungen"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                4-tägiger Buyer Discovery Trip Costa Blanca Nord
              </p>

              <h1 className="mt-6 font-serif text-5xl leading-[0.98] text-white md:text-6xl">
                Immobilie in Spanien kaufen? Entdecken Sie, welche Region,
                Immobilie und welcher Lebensstil wirklich zu Ihnen passen.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                Eine individuell zusammengestellte Immobilien- und
                Lifestyle-Reise mit Privattransfer vom Flughafen, Aufenthalt
                in einem 4- oder 5-Sterne-Hotel, Ihrem Area-Match-Bericht,
                einer Shortlist von 4 bis 8 Immobilien, ausgewählten
                gleichgesinnten Käufern, lokalen Erlebnissen und direktem
                Zugang zu vertrauenswürdigen unabhängigen Experten.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80">
                Unser Team spricht Deutsch, Englisch, Spanisch und Schwedisch.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/de/contact"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Ihren Buyer Discovery Trip anfragen
                </a>

                <a
                  href="/de/regions"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
                >
                  Regionen entdecken
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EINFÜHRUNG */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Vom Area Match zur gezielten Immobilienauswahl
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Keine zufälligen Besichtigungen, sondern ein persönlicher
                  Weg zur Immobilie und Umgebung, die zu Ihrer Zukunft passen.
                </h2>
              </div>

              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Ihr Buyer Discovery Trip beginnt mit dem Area-Match-Bericht
                  und einem persönlichen Erstgespräch. Wir betrachten Ihre
                  Wohnwünsche, Ihr Budget, Ihre Zukunftspläne,
                  Familiensituation, täglichen Gewohnheiten, Hobbys und
                  Interessen. Auf dieser Grundlage suchen wir über unser
                  sorgfältig aufgebautes Netzwerk an der Costa Blanca gezielt
                  nach passenden Möglichkeiten.
                </p>

                <p className="mt-6">
                  Vor der Abreise erhalten Sie eine Shortlist mit in der Regel
                  4 bis 8 Villen, Apartments oder anderen Immobilien, die
                  unserer Einschätzung nach am besten zu Ihrem Profil passen.
                  Sie wählen aus, welche Immobilien Sie während der Reise
                  besichtigen möchten. Wenn Sie offen für eine Überraschung
                  sind, können wir auch eine Wildcard hinzufügen: eine
                  Immobilie, nach der Sie selbst vielleicht nicht gesucht
                  hätten, die aufgrund ihrer Lage, ihres Preises,
                  Platzangebots oder Umfelds jedoch unerwartet interessant
                  sein kann.
                </p>

                <p className="mt-6">
                  Die Reise geht weit über Immobilienbesichtigungen hinaus.
                  Sie werden persönlich am Flughafen abgeholt, übernachten in
                  einem sorgfältig ausgewählten 4- oder 5-Sterne-Hotel und
                  erleben die Region mit einer kleinen Gruppe von Menschen mit
                  ähnlichen Bedürfnissen und Interessen. Gleichzeitig lernen
                  Sie lokale Fachleute kennen und erhalten ausreichend
                  Gelegenheit, ihnen Ihre Fragen direkt zu stellen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO-KURZÜBERSICHT */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Für Käufer, die ernsthaft und gezielt suchen
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Ein persönlicher Buyer Discovery Trip für alle, die ein Haus,
              eine Villa oder einen Zweitwohnsitz an der Costa Blanca Nord
              kaufen möchten.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Kostenloser Area-Match-Bericht",
                "Shortlist mit 4 bis 8 passenden Immobilien",
                "Ihre bevorzugten Besichtigungen selbst auswählen",
                "Optionale Wildcard-Immobilie",
                "Privattransfer vom Flughafen",
                "4- oder 5-Sterne-Hotel in einer passenden Umgebung",
                "Kleine, sorgfältig zusammengestellte Gruppe",
                "Individuell abgestimmte lokale Lifestyle-Erlebnisse",
                "Moraira, Jávea, Dénia, Altea und Alicante",
                "Vall de Pop und das spanische Hinterland",
                "Persönliches Kennenlernen unabhängiger Experten",
                "Persönliche Kaufbegleitung in Spanien",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              Sie besichtigen keine zufällig ausgewählten Immobilien. Jede
              Auswahl basiert auf Ihrem Erstgespräch, Budget,
              Area-Match-Bericht, Ihren Wohnwünschen, Interessen und
              Zukunftsplänen. So nutzen Sie Ihre Zeit in Spanien für
              Immobilien und Gebiete, die tatsächlich zu Ihnen passen.
            </p>
          </div>
        </section>

        {/* ZUERST LERNEN WIR SIE KENNEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Zuerst lernen wir Sie wirklich kennen
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Ihre Reise beginnt mit dem Leben, das Sie in Spanien aufbauen
              möchten – nicht mit einer Liste von Immobilienanzeigen.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Im Erstgespräch befassen wir uns ausführlich mit Ihren
                  Zielen, Ihrem Budget, Ihrer Familiensituation, Ihren
                  Umzugsplänen, Ihrem gewünschten Lebensstil und Ihren
                  langfristigen Prioritäten. Wir fragen außerdem nach Hobbys
                  und Interessen wie Golf, Segeln, Gastronomie, Natur,
                  Wellness, Radfahren, Kultur oder dem internationalen
                  Schulleben.
                </p>

                <p className="mt-6">
                  Auf Grundlage Ihres Area Match arbeiten wir mit unserem
                  zuverlässigen lokalen Netzwerk weiter. Wir vergleichen
                  Regionen, Wohnviertel, Immobilientypen und aktuelle
                  Möglichkeiten und erstellen anschließend eine Shortlist mit
                  etwa 4 bis 8 Immobilien. Sie entscheiden, welche davon Sie
                  während der Discovery Trip sehen möchten.
                </p>

                <p className="mt-6">
                  Zusätzlich können Sie sich für eine Wildcard entscheiden:
                  eine Immobilie außerhalb Ihres ursprünglichen Suchprofils,
                  die aufgrund ihrer Lage, Umgebung, Preisgestaltung oder
                  Aufteilung überraschend gut zu Ihrer Zukunft passen kann. So
                  bleibt die Suche fokussiert, ohne interessante Möglichkeiten
                  zu früh auszuschließen.
                </p>
              </div>

              <div className="rounded-[32px] bg-[#f6f1ea] p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Persönlich bis ins Detail
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  Suchen Sie eine ruhige Villa in Moraira, ein lebendiges
                  Leben in Jávea, Infrastruktur und Gastronomie in Dénia,
                  Eleganz rund um Altea oder vielmehr Ruhe und mehr Platz im
                  Vall de Pop? Wir verbinden Ihre Wohnwünsche mit dem Alltag
                  in jeder Region.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  Ihr Hotel, Ihre Route, Aktivitäten, Begegnungen und
                  Immobilienbesichtigungen werden so weit wie möglich auf Ihr
                  Profil und die Zusammensetzung der kleinen Gruppe
                  abgestimmt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GEZIELTE IMMOBILIENBESICHTIGUNGEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ihre Shortlist vor der Abreise
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Wählen Sie aus 4 bis 8 sorgfältig vorausgewählten Immobilien –
              mit Raum für eine überraschende Wildcard.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="text-lg leading-relaxed text-stone-700">
                <p>
                  Unser Netzwerk aus zuverlässigen lokalen Maklern, Bauträgern
                  und Immobilienkontakten ermöglicht uns, über das Angebot
                  eines einzelnen Anbieters hinauszublicken. Auf Grundlage
                  Ihres Area-Match-Berichts, Budgets, Wohnstils, Ihrer
                  Interessen und Zukunftspläne wählen wir die Immobilien aus,
                  die aus unserer Sicht am besten zu Ihnen passen.
                </p>

                <p className="mt-6">
                  Vor der Reise erhalten Sie die Shortlist mit unserer
                  Erläuterung. Sie wählen aus, welche Immobilien Sie
                  besichtigen möchten. Wir planen die Termine sinnvoll in die
                  Route ein, damit Sie keine unnötigen Wege zurücklegen und
                  genügend Zeit haben, sowohl die Immobilie als auch die
                  Umgebung wirklich kennenzulernen.
                </p>

                <p className="mt-6">
                  Bei jeder Besichtigung blicken wir über Optik und Fotos
                  hinaus. Wir besprechen Lage, Erreichbarkeit, Privatsphäre,
                  Ausrichtung, Instandhaltung, Wohngefühl, Einrichtungen,
                  Vermietungspotenzial und die Frage, ob die Immobilie zu dem
                  Leben passt, das Sie in Spanien aufbauen möchten.
                </p>
              </div>

              <div className="rounded-[32px] bg-white/80 p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Warum eine Wildcard?
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  Manchmal ist die beste Wahl nicht die Immobilie, die Sie
                  online als Erstes anklicken würden. Eine weniger bekannte
                  Lage, ein anderer Grundriss oder ein Gebiet mit mehr
                  Möglichkeiten für Ihr Budget kann sich vor Ort deutlich
                  besser anfühlen.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  Die Wildcard schafft Raum für eine solche unerwartete
                  Möglichkeit, während der Rest Ihres Programms weiterhin
                  vollständig fokussiert bleibt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GRUPPENREISE */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Eine kleine, sorgfältig zusammengestellte Gruppe
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Erleben Sie die Region mit Menschen, die zu Ihren Interessen,
                Ihrer Lebensphase und Ihren Zukunftsplänen passen.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Wir stellen die Teilnehmer sorgfältig zusammen. Die Gruppe
                bleibt klein und persönlich und besteht aus Menschen, die
                ähnliche Regionen erkunden oder einen vergleichbaren
                Lebensstil an der Costa Blanca suchen.
              </p>

              <p className="mt-6">
                Vielleicht lernen Sie während der Reise Ihren zukünftigen
                Golfpartner, eine neue Bekanntschaft für gemeinsame
                Mittagessen, einen Segelpartner oder eine Familie mit Kindern
                in einem ähnlichen Alter kennen. Nichts wird erzwungen, doch
                gemeinsame Erlebnisse erleichtern es, auf natürliche Weise
                wertvolle Kontakte aufzubauen.
              </p>

              <p className="mt-6">
                Sie teilen ausgewählte Mittagessen, Aktivitäten, lokale
                Viertel und Gespräche, behalten jedoch stets Raum für
                Privatsphäre. Sie übernachten in Ihrem eigenen Zimmer oder
                Ihrer eigenen Suite in einem sorgfältig ausgewählten 4- oder
                5-Sterne-Hotel und können sich jederzeit zurückziehen.
              </p>
            </div>
          </div>
        </section>

        {/* ANKUNFT */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Von Ihrer Ankunft an persönlich organisiert
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight">
              Wir holen Sie am Flughafen ab und kümmern uns um Unterkunft,
              Transport, Planung und persönliche Begleitung.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-serif text-3xl">Persönlicher Transfer</h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Sie werden am Flughafen Alicante oder Valencia abgeholt und
                  während der geplanten Programmpunkte komfortabel befördert.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl">Aufenthalt in einem 4- oder 5-Sterne-Hotel</h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Sie übernachten in einem sorgfältig ausgewählten Hotel,
                  Boutique-Resort, einer Luxussuite oder Finca in einer
                  Umgebung, die zu Ihrem Area Match und dem Programm passt.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl">
                  Direkter Zugang zu Experten
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Während der Reise lernen Sie relevante Fachleute kennen und
                  können Ihre Fragen zu Immobilien, Finanzierung, Technik,
                  rechtlichen Prüfungen und den nächsten Schritten direkt
                  stellen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4-TAGE-PROGRAMM */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Ein persönliches 4-Tage-Programm
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Vier Tage, um Immobilien, Regionen, Experten und den Alltag an
                der Costa Blanca Nord wirklich kennenzulernen.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Das genaue Programm wird auf Ihr Area Match, Ihre Shortlist,
                Ihre Interessen, die Gruppe, die Jahreszeit sowie die
                Verfügbarkeit von Immobilien und Fachleuten abgestimmt.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  day: "Tag 1",
                  title: "Ankunft und persönliche Begrüßung",
                  text: "Flughafentransfer, Check-in, Kennenlernen sowie Besprechung Ihres Area Match, Ihrer Shortlist, der ausgewählten Besichtigungen und des Programms.",
                },
                {
                  day: "Tag 2",
                  title: "Regionen und ausgewählte Immobilien",
                  text: "Ausgewählte Regionsbesuche, sorgfältig geplante Immobilienbesichtigungen und lokale Orte, die zu Ihren täglichen Bedürfnissen und Zukunftsplänen passen.",
                },
                {
                  day: "Tag 3",
                  title: "Lifestyle und Wildcard",
                  text: "Weitere Besichtigungen, gegebenenfalls Ihre Wildcard und ein persönliches Erlebnis wie Segeln, Golf, eine Olivenölverkostung, Gastronomie oder eine Kochaktivität.",
                },
                {
                  day: "Tag 4",
                  title: "Experten und nächste Schritte",
                  text: "Gespräche mit relevanten unabhängigen Fachleuten, Antworten auf Ihre Fragen und ein klarer Plan für einen möglichen Kauf und die erforderlichen Prüfungen.",
                },
              ].map((item) => (
                <div
                  key={item.day}
                  className="rounded-[32px] bg-white p-8 shadow-sm"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                    {item.day}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REGIONEN IM ALLTAG */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Regionen an der Costa Blanca Nord
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Von Alicante und Altea bis Moraira, Jávea, Dénia und ins Vall
                de Pop: Entdecken Sie, wo Ihr neues Leben am besten zu Ihnen
                passt.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Wir zeigen Ihnen nicht nur touristische Highlights. Sie
                entdecken Wohnviertel, Einrichtungen des täglichen Bedarfs,
                lokale Gastronomie, Natur, Clubs, Schulen, Fahrtzeiten und
                Orte, die auch Einheimische gerne besuchen. So erleben Sie,
                wie sich der Alltag tatsächlich anfühlen kann.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                [
                  "Moraira und Benissa",
                  "Elegante Küstenorte mit Villen, Buchten, Restaurants, internationaler Gemeinschaft, Ruhe und einem gehobenen Wohnambiente.",
                ],
                [
                  "Jávea und Dénia",
                  "Ein lebendiger Lebensstil mit Stränden, Hafenleben, Gastronomie, Sportclubs, Schulen und ganzjährig verfügbaren Einrichtungen.",
                ],
                [
                  "Altea und Alicante",
                  "Kultur, Architektur, städtische Infrastruktur, Meerblick und mediterrane Eleganz – von stimmungsvollen Altstädten bis zu modernen Wohngebieten.",
                ],
                [
                  "Calpe und die Küstenregion",
                  "Strand, Yachthafen, Apartments, Neubau, Einrichtungen des täglichen Bedarfs und gute Verbindungen entlang der nördlichen Costa Blanca.",
                ],
                [
                  "Vall de Pop",
                  "Das grüne Hinterland mit Dörfern wie Jalón/Xaló und Llíber, umgeben von Bergen, Weinbergen und Mandelbäumen – interessant für alle, die Ruhe, Weite und Authentizität suchen.",
                ],
                [
                  "Orte abseits des Massentourismus",
                  "Lokale Märkte, gehobene Gastronomie, Familienbetriebe, ruhige Dörfer und Orte, die Sie online kaum finden, die den Alltag jedoch besonders machen.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-[32px] bg-white p-8 shadow-sm"
                >
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    {title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-12 max-w-4xl text-lg leading-relaxed text-stone-600">
              Unsere eigene Liebe zum Wasser, zum Leben an der Küste und zum
              Wassersport führte uns in diese Region. Doch auch das weniger
              bekannte Hinterland hat unser Herz erobert. Im Vall de Pop
              finden Sie einen anderen Rhythmus, mehr Ruhe und häufig mehr
              Möglichkeiten für Ihr Budget als in den bekanntesten
              Küstenorten.
            </p>

            <a
              href="/de/regions"
              className="mt-8 inline-block rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Mehr über die Regionen erfahren
            </a>
          </div>
        </section>

        {/* FACHLEUTE */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Unser zuverlässiges Netzwerk in Spanien
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Lernen Sie die Menschen hinter den Kulissen kennen, die Ihnen
                bei der Verwirklichung Ihrer Pläne helfen können.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                Während des Buyer Discovery Trips lernen Sie zuverlässige
                lokale und unabhängige Fachleute kennen, die zu Ihrer
                Situation passen. Dazu können ein Immobilienanwalt,
                Hypothekenberater, technischer Gutachter, Bauunternehmer,
                Architekt, Versicherungsspezialist oder ein anderer lokaler
                Experte gehören.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Unabhängiger Immobilienanwalt",
                  "Hypothekenberater oder Finanzierungsspezialist",
                  "Technischer Gutachter oder Bausachverständiger",
                  "Bauunternehmer, Architekt oder Renovierungsspezialist",
                  "Bank- und Versicherungskontakt",
                  "Lokaler Immobilien- und Regionsexperte",
                  "Steuer- oder Umzugsberater, sofern relevant",
                  "Interior- und lokale Umsetzungspartner",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Während der Reise können Sie direkte Fragen zu Finanzierung,
                rechtlichen Prüfungen, Renovierung, Technik, Kaufnebenkosten,
                Versicherungen und praktischen nächsten Schritten stellen. Je
                nach Ihrem Bedarf finden wir innerhalb unseres Netzwerks den
                passenden Fachmann.
              </p>
            </div>
          </div>
        </section>

        {/* LEBENSSTIL */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Erleben Sie Ihren möglichen neuen Lebensstil
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Nicht nur Immobilien besichtigen, sondern entdecken, wie sich
              Ihr Alltag an der Costa Blanca anfühlen könnte.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              Auf Grundlage Ihres Erstgesprächs und Ihrer Interessen ergänzen
              wir passende Erlebnisse. Wenn Sie über ein Leben im Vall de Pop
              nachdenken, kann dies beispielsweise eine Olivenölverkostung,
              ein lokaler Markt, ein Weingut oder eine Pasta- und
              Kochaktivität sein. Passt das Küstenleben besser zu Ihnen, kann
              ein Segeltörn, der Besuch einer Marina, ein Golferlebnis oder
              ein Mittagessen am Wasser mehr aussagen als eine weitere
              Immobilienanzeige.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Lokale und gehobene Gastronomie",
                "Olivenöl- oder Weinverkostung",
                "Pasta herstellen oder Kochworkshop",
                "Segeltörn oder Besuch einer Marina",
                "Golfclub oder Golferlebnis",
                "Lokale Märkte und Familienbetriebe",
                "Natur, Wandern und das Hinterland",
                "Wohnviertel und Dörfer abseits des Tourismus",
                "Wellness und entspanntes Leben an der Küste",
                "Schulen, Clubs und Gemeinschaft",
                "Begegnungen mit Einheimischen",
                "Eigene Momente für Privatsphäre und Ruhe",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium text-[#1e2a3a]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              Die Aktivitäten sind kein festes touristisches Programm. Wir
              stimmen sie so weit wie möglich auf die Teilnehmer ab, damit Sie
              die Umgebung ausgehend von Ihren eigenen Interessen und Ihrem
              möglichen zukünftigen Leben entdecken.
            </p>
          </div>
        </section>

        {/* PURCHASE SAFETY */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-12 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Verlieben Sie sich in eine Immobilie? Treffen Sie keine
                  vorschnelle Entscheidung.
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight">
                  Zwei unabhängige Prüfungen vor unserer Kaufempfehlung.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/80">
                  Wenn eine Immobilie ernsthaft infrage kommt, koordinieren
                  wir eine technische Kaufinspektion durch einen unabhängigen
                  Gutachter sowie die rechtliche Due Diligence durch einen
                  geeigneten unabhängigen Anwalt. So basiert Ihre Entscheidung
                  nicht nur auf Gefühl, Fotos oder einer Besichtigung.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Beide Fachleute bleiben für ihre eigene Prüfung und
                  Berichterstattung verantwortlich. Nordic Move überwacht die
                  Koordination, führt die wichtigsten Erkenntnisse zusammen
                  und gibt darauf basierend eine klare Empfehlung für die
                  nächsten Schritte: fortfahren, neu bewerten oder nicht
                  kaufen.
                </p>

                <a
                  href="/de/services/purchase-safety-report"
                  className="mt-9 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Purchase Safety entdecken
                </a>
              </div>

              <div className="bg-white p-10 text-stone-900 lg:p-16">
                <h3 className="font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Was wird geprüft?
                </h3>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                    <h4 className="font-serif text-2xl text-[#1e2a3a]">
                      Technische Inspektion
                    </h4>
                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-stone-600">
                      <li>• Sichtbarer und zugänglicher baulicher Zustand</li>
                      <li>• Feuchtigkeit, Wassereintritt und sichtbare Mängel</li>
                      <li>
                        • Dach, Fassaden, Terrassen und Nebengebäude, soweit
                        zugänglich
                      </li>
                      <li>• Sichtbare Installationen, Pool und Grundstück</li>
                      <li>
                        • Hinweise auf Reparaturbedarf und zusätzliche
                        Untersuchungen
                      </li>
                      <li>
                        • Abgleich der Immobilie mit verfügbaren
                        Informationen, soweit möglich
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                    <h4 className="font-serif text-2xl text-[#1e2a3a]">
                      Rechtliche Due Diligence
                    </h4>
                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-stone-600">
                      <li>• Eigentum und Verfügungsberechtigung des Verkäufers</li>
                      <li>• Belastungen, Schulden und relevante Registereinträge</li>
                      <li>
                        • Genehmigungen und rechtlicher Status, soweit
                        anwendbar
                      </li>
                      <li>• Reservierungs-, Kauf- und Übertragungsbedingungen</li>
                      <li>• Rechtliche Risiken und erforderliche Bedingungen</li>
                      <li>
                        • Begleitung auf dem Weg zu einer verantwortungsvollen
                        Eigentumsübertragung
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mt-8 text-sm leading-relaxed text-stone-500">
                  Keine Inspektion kann absolute Sicherheit garantieren.
                  Zusätzliche fachliche Untersuchungen können erforderlich
                  sein und werden gesondert besprochen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WAS WIR TUN */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Ein fester Ansprechpartner
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Wir verbinden Ihr Area Match, die Immobilienauswahl, die
                Reise, Experten und nächsten Schritte zu einem klaren
                Gesamtprozess.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Nordic Move koordiniert das Erstgespräch, den
                Area-Match-Bericht, Ihre Shortlist, die
                Gruppenzusammensetzung, Unterkunft, Transfers, Regionstouren,
                Immobilienbesichtigungen, lokale Erlebnisse und Begegnungen
                mit unabhängigen Fachleuten.
              </p>

              <p className="mt-6">
                Wir helfen Ihnen, Regionen und Immobilien zu vergleichen, die
                richtigen Fragen zu stellen und wichtige technische,
                rechtliche, finanzielle und praktische Themen rechtzeitig
                sichtbar zu machen.
              </p>

              <p className="mt-6">
                Unsere Aufgabe ist nicht, Sie möglichst schnell zum Kauf einer
                Immobilie zu bewegen. Unsere Aufgabe ist, Sie zügig zu einer
                fundierteren Entscheidung zu führen – auch wenn die richtige
                Schlussfolgerung lautet, nicht fortzufahren.
              </p>
            </div>
          </div>
        </section>

        {/* ENTHALTENE LEISTUNGEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Was ist enthalten?
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Alles, was Sie für eine gezielte erste Entscheidung über das
              Leben und den Immobilienkauf an der Costa Blanca Nord benötigen.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Persönliches Erstgespräch vor der Anreise",
                "Kostenloser Area-Match-Bericht",
                "Analyse Ihrer Wünsche, Ihres Budgets, Ihrer Hobbys und Zukunftspläne",
                "Shortlist mit in der Regel 4 bis 8 Immobilien",
                "Ihre Auswahl der gewünschten Besichtigungen",
                "Optionale Wildcard-Immobilie",
                "Kleine, sorgfältig zusammengestellte Gruppe",
                "Vollständig organisiertes 4-Tage-Programm",
                "Persönliche Abholung am Flughafen und geplante Transfers",
                "4- oder 5-Sterne-Hotel, Luxussuite, Resort oder Finca",
                "Regionstouren von der Küste bis ins Vall de Pop",
                "Gezielte individuelle Immobilienbesichtigungen",
                "Individuell abgestimmte Lifestyle-Erlebnisse",
                "Lokale Orte abseits des Massentourismus",
                "Kennenlernen eines Anwalts und Hypothekenberaters",
                "Kennenlernen technischer und ausführender Experten, sofern relevant",
                "Zeit, Ihre Fragen direkt an Experten zu stellen",
                "Klare nächste Schritte nach der Reise",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/80 p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NACH DER REISE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Was Sie nach 4 Tagen wissen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Sie reisen nicht mit vagen Eindrücken ab, sondern mit Klarheit
                über den Immobilienkauf in Spanien.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Welche Gebiete an der Costa Blanca Nord zu Ihrem Lebensstil passen",
                "Welche Gebiete für Sie weniger geeignet sind",
                "Welche besichtigten Immobilien am besten zu Ihrem Budget, Ihrer Familie und Ihren Zielen passen",
                "Welcher Immobilientyp realistisch zu Ihrem Area-Match-Bericht passt",
                "Was der Kaufprozess in Spanien umfasst",
                "Welche rechtlichen, finanziellen und baulichen Themen besondere Aufmerksamkeit erfordern",
                "Wie Ihr Alltag nach dem Kauf aussehen könnte",
                "Welche Fachleute Sie unterstützen können",
                "Welche lokale Gemeinschaft und welche Gleichgesinnten Sie kennenlernen können",
                "Ob Sie bereit für den nächsten Schritt in Richtung Kauf sind",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[28px] bg-white p-7 shadow-sm"
                >
                  <p className="text-lg leading-relaxed text-stone-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FÜR WEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Für wen ist diese Reise geeignet?
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Ideal für ernsthafte Käufer, die die Costa Blanca Nord zunächst
              wirklich verstehen möchten, bevor sie eine Immobilie kaufen.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Deutsche Käufer, die ein Haus in Spanien kaufen möchten",
                "Schweizer, österreichische und internationale Käufer an der Costa Blanca Nord",
                "Familien, die einen Umzug nach Spanien erwägen",
                "Ruheständler, die einen neuen Lebensstil planen",
                "Unternehmer und Remote Worker",
                "Käufer eines Zweitwohnsitzes in Spanien",
                "Menschen, die Moraira, Jávea, Altea, Benissa, Calpe und Dénia vergleichen",
                "Kunden, die professionelle Kaufbegleitung wünschen",
                "Menschen, die gleichgesinnte zukünftige Bewohner kennenlernen möchten",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SEO */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Häufig gestellte Fragen
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Häufig gestellte Fragen zum Buyer Discovery Trip und zum
              Immobilienkauf an der Costa Blanca Nord.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  question:
                    "Wie werden die Immobilien für meine Reise ausgewählt?",
                  answer:
                    "Ihr Area-Match-Bericht, das Erstgespräch, Ihr Budget, Ihre Wohnwünsche, Interessen und Zukunftspläne bilden die Grundlage. Über unser lokales Netzwerk erstellen wir in der Regel eine Shortlist mit 4 bis 8 passenden Immobilien.",
                },
                {
                  question: "Kann ich selbst auswählen, welche Immobilien ich besichtige?",
                  answer:
                    "Ja. Sie erhalten die Shortlist vor der Abreise und wählen aus, welche Immobilien Sie während der Reise besichtigen möchten. Anschließend organisieren wir die Termine und eine sinnvolle Route.",
                },
                {
                  question: "Was ist eine Wildcard-Immobilie?",
                  answer:
                    "Eine Wildcard ist eine Immobilie, die außerhalb Ihres ursprünglichen Suchprofils liegt, aufgrund ihrer Lage, Umgebung, ihres Preises, Platzangebots oder Grundrisses jedoch überraschend gut zu Ihnen passen kann. Sie ist immer optional.",
                },
                {
                  question: "Wo übernachte ich während der Reise?",
                  answer:
                    "Sie übernachten in einem sorgfältig ausgewählten 4- oder 5-Sterne-Hotel, Boutique-Resort, einer Luxussuite oder Finca in einer Umgebung, die zu Ihrem Area Match und dem Programm passt.",
                },
                {
                  question: "Lerne ich während der Reise auch Fachleute kennen?",
                  answer:
                    "Ja. Abhängig von Ihren Bedürfnissen können Sie unter anderem einen unabhängigen Immobilienanwalt, Hypothekenberater, technischen Gutachter, Bauunternehmer, Architekten und weitere lokale Spezialisten kennenlernen. Sie können ihnen Ihre Fragen direkt stellen.",
                },
                {
                  question: "Ist die Reise eine gewöhnliche Gruppenreise?",
                  answer:
                    "Nein. Die Gruppe ist klein und wird sorgfältig anhand ähnlicher Bedürfnisse, Interessen und Lebensphasen zusammengestellt. Das Programm umfasst gemeinsame Momente, bietet jedoch auch ausreichend Privatsphäre und individuelle Immobilienbesichtigungen.",
                },
                {
                  question:
                    "Was passiert, wenn ich mich in eine Immobilie verliebe?",
                  answer:
                    "Wir helfen Ihnen, keine vorschnelle Entscheidung zu treffen. Für eine fundierte Kaufempfehlung koordinieren wir eine unabhängige technische Inspektion und die rechtliche Due Diligence durch einen geeigneten Anwalt.",
                },
                {
                  question: "Welche Regionen kann ich entdecken?",
                  answer:
                    "Abhängig von Ihrem Profil erkunden wir Gebiete von Alicante, Altea, Calpe und Moraira bis Jávea, Dénia, Benissa und das Hinterland des Vall de Pop.",
                },
              ].map((item) => (
                <div
                  key={item.question}
                  className="rounded-[28px] bg-[#f6f1ea] p-7"
                >
                  <h3 className="font-serif text-2xl text-[#1e2a3a]">
                    {item.question}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 pb-32">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ihren persönlichen Buyer Discovery Trip anfragen
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
              Vom Area Match und der Shortlist bis zum Regionserlebnis, zu
              Experten und einer fundierteren Kaufentscheidung.
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
              Entdecken Sie nicht nur, welche Immobilie Ihnen gefällt, sondern
              welche Umgebung, welcher Lebensstil und welche Menschen wirklich
              zu Ihrer Zukunft in Spanien passen.
            </p>

            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
              Sie behalten einen festen Ansprechpartner. Wir koordinieren die
              Reise, die passenden Immobilien, lokale Erlebnisse und die
              Fachleute, die Sie benötigen.
            </p>

            <a
              href="/de/contact"
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Ihren Buyer Discovery Trip anfragen
            </a>
          </div>
        </section>
      </main>
    </>
  );
}