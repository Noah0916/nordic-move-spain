export const metadata = {
  title:
    "4-tägige Buyer Discovery Trip Costa Blanca Nord | Haus kaufen Spanien",
  description:
    "4-tägige Buyer Discovery Trip an der Costa Blanca Nord für Käufer, die ein Haus oder eine Immobilie in Spanien kaufen möchten. Mit privatem Chauffeur, 5-Sterne-Aufenthalt, Area Match Report, ausgewählten individuellen Immobilienbesichtigungen, Regionstouren, Lifestyle-Erlebnissen und sicherer Kaufbegleitung.",
  keywords: [
    "4-tägige Buyer Discovery Trip Costa Blanca Nord",
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
    "ausgewählte Immobilienbesichtigungen Spanien",
    "Area Match Report Spanien",
    "Kaufbegleitung Spanien",
    "deutsche Kaufbegleitung Spanien",
    "sicher Haus kaufen Spanien",
    "zweite Immobilie Spanien kaufen",
    "Auswandern nach Spanien",
    "Moraira Haus kaufen",
    "Jávea Haus kaufen",
    "Javea house buying trip",
    "Altea Immobilie kaufen",
    "Benissa Villa kaufen",
    "Calpe Wohnung kaufen",
    "Dénia Haus kaufen",
    "Denia Immobilie kaufen",
  ],
  alternates: {
    canonical: "/de/buyer-discovery-trip-costa-blanca-nord",
  },
  openGraph: {
    title:
      "4-tägige Buyer Discovery Trip Costa Blanca Nord | Haus kaufen in Spanien",
    description:
      "Entdecken Sie in 4 Tagen, wo Sie an der Costa Blanca Nord wirklich ein Haus kaufen möchten. Mit privatem Chauffeur, 5-Sterne-Aufenthalt, Area Match Report, ausgewählten Immobilienbesichtigungen, Experten, Regionstouren, mehr Sicherheit und gleichgesinnten Käufern.",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/discover-card.png",
        width: 1200,
        height: 630,
        alt: "4-tägige Buyer Discovery Trip Costa Blanca Nord für Haus kaufen in Spanien",
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
  name: "4-tägige Buyer Discovery Trip Costa Blanca Nord",
  description:
    "Eine vollständig organisierte 4-tägige Immobilien- und Lifestyle-Reise für internationale Käufer, die ein Haus oder eine zweite Immobilie an der Costa Blanca Nord in Spanien kaufen möchten, inklusive Intake, Area Match Report, ausgewählten individuellen Immobilienbesichtigungen und professioneller Begleitung für mehr Sicherheit im Kaufprozess.",
  touristType: [
    "Deutsche Käufer",
    "Schweizer Käufer",
    "Österreichische Käufer",
    "Internationale Käufer",
    "Käufer einer zweiten Immobilie",
    "Käufer, die nach Spanien ziehen möchten",
  ],
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Tag 1: Ankunft, privater Transfer, Intake und Willkommen",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tag 2: Regionstour Moraira, Benissa und Calpe mit ausgewählten Immobilienbesichtigungen und Lifestyle-Erlebnissen",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tag 3: Jávea und Dénia mit individuellen Immobilienbesichtigungen, Lunch und lokalen Aktivitäten",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Tag 4: Altea, Spezialisten, Kaufprozess, Sicherheit und nächste Schritte",
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
            alt="4-tägige Buyer Discovery Trip Costa Blanca Nord für Haus kaufen in Spanien"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                4-tägige Buyer Discovery Trip Costa Blanca Nord
              </p>

              <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
                Haus kaufen in Spanien? Entdecken Sie in 4 Tagen, wo Sie an der
                Costa Blanca Nord wirklich leben möchten.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                Eine vollständig organisierte Immobilien- und Lifestyle-Reise mit
                privatem Chauffeur, ausgewählten gleichgesinnten Käufern,
                5-Sterne-Aufenthalt, Area Match Report, Regionstouren,
                selektiven individuellen Immobilienbesichtigungen und Treffen mit
                den Spezialisten, die Ihren sicheren Immobilienkauf in Spanien
                möglich machen.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  4-tägige Buyer Discovery Trip anfragen
                </a>

                <a
                  href="/regions"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
                >
                  Regionen entdecken
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUKTION */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Klarheit, bevor Sie kaufen
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Eine Immobilie in Spanien zu kaufen beginnt nicht mit
                  zufälligen Besichtigungen, sondern mit der richtigen Region.
                </h2>
              </div>

              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Wer ein Haus an der Costa Blanca Nord kaufen möchte, sollte
                  weiter schauen als schöne Fotos, Maklertexte und einzelne
                  Besichtigungstermine. Sie möchten die richtige Region spüren,
                  aber auch Immobilien sehen, die logisch zu Ihrem Budget, Ihrer
                  Familiensituation, Ihren Wünschen, Ihrem Area Match Report und
                  Ihrem zukünftigen Lebensstil passen.
                </p>

                <p className="mt-6">
                  Unsere Buyer Discovery Trip ist eine sorgfältig
                  zusammengestellte 4-tägige Immobilien- und Lifestyle-Erfahrung
                  an der Costa Blanca Nord. Die Reise wurde für deutsche,
                  schweizerische, österreichische und internationale Käufer
                  entwickelt, die ein Haus, eine Villa, eine Wohnung, einen
                  Neubau oder eine zweite Immobilie in Spanien mit mehr
                  Sicherheit, Klarheit und weniger Risiko kaufen möchten.
                </p>

                <p className="mt-6">
                  Dies ist keine Standard-Besichtigungsreise, bei der Sie
                  wahllos von Immobilie zu Immobilie fahren. Es ist eine
                  vollständig organisierte Gruppenreise mit gleichgesinnten
                  Menschen, privatem Chauffeur, individuellen Ruhe- und
                  Privatsphäre-Momenten, ausgewählten Immobilienbesichtigungen,
                  lokalen Lifestyle-Erlebnissen und direkten Gesprächen mit den
                  Fachleuten, die Sie für einen sicheren Kaufprozess in Spanien
                  benötigen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO QUICK VALUE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Für Käufer, die ernsthaft suchen
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Die 4-tägige Entdeckungsreise für alle, die ein Haus an der Costa
              Blanca Nord kaufen möchten.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Haus kaufen in Spanien",
                "Immobilie kaufen Costa Blanca Nord",
                "Zweite Immobilie in Spanien",
                "Immobilienkauf mit Begleitung",
                "Ausgewählte Immobilienbesichtigungen",
                "Area Match Report für Käufer",
                "Villa kaufen Moraira oder Jávea",
                "Wohnung kaufen Calpe oder Dénia",
                "Kaufprozess Spanien verstehen",
                "Gleichgesinnte Käufer treffen",
                "Sicher Immobilien in Spanien kaufen",
                "Professionelle Kaufbegleitung",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              Sie erhalten einen realistischen Eindruck von der Region und von
              Immobilien, die sorgfältig auf Basis Ihres Intakes, Budgets, Area
              Match Reports, Ihrer Wohnwünsche und Ihres Lebensstils
              vorselektiert werden. So besichtigen Sie nicht einfach Häuser,
              sondern Immobilien, die zu der Umgebung passen, in der Sie später
              wirklich leben möchten.
            </p>
          </div>
        </section>

        {/* ZUERST LERNEN WIR SIE KENNEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Zuerst lernen wir Sie kennen
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Ihre Buyer Discovery Trip beginnt bei Ihrem Lebensstil, nicht bei
              Immobilienanzeigen.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Vor Ihrer Ankunft starten wir mit Ihrem kostenlosen Area Match
                  Report und einem persönlichen Intake-Gespräch. Dabei schauen
                  wir auf Ihre Ziele, Ihr Budget, Ihre Familiensituation, Ihre
                  täglichen Gewohnheiten, Interessen, gewünschte Lebensweise,
                  Umzugspläne, Investitionsziele und langfristigen Prioritäten.
                </p>

                <p className="mt-6">
                  Danach stellen wir ein 4-tägiges Programm zusammen, das zur
                  Gruppe und zu Ihrem persönlichen Profil passt. Auf Basis Ihres
                  Area Match Reports wählen wir nicht nur die richtigen Regionen
                  und Wohnlagen aus, sondern auch eine begrenzte Anzahl an
                  Immobilien, die zu Ihrem Budget, Ihren Wünschen, Ihrem Wohnstil
                  und Ihren Zukunftsplänen passen.
                </p>

                <p className="mt-6">
                  Der Intake hilft uns außerdem zu bestimmen, welche
                  Immobilientypen, Preisklassen, Wohngebiete, Fachleute, lokalen
                  Unternehmer, internationalen Bewohner, Sportclubs, Restaurants
                  und Aktivitäten für Sie relevant sind. So fühlt sich die Reise
                  nicht wie eine allgemeine Tour an, sondern wie eine gezielte
                  Einführung in Ihr mögliches neues Leben in Spanien.
                </p>
              </div>

              <div className="rounded-[32px] bg-[#f6f1ea] p-8">
                <p className="text-lg leading-relaxed text-stone-700">
                  Suchen Sie eine ruhige Villa bei Moraira? Ein sozialeres Leben
                  in Jávea? Eine elegante Umgebung bei Altea? Raum und
                  Authentizität rund um Benissa? Wohnungen am Meer und Neubau in
                  Calpe? Oder eine lebendige Stadt, die das ganze Jahr aktiv ist,
                  wie Dénia?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AUSGEWÄHLTE IMMOBILIENBESICHTIGUNGEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Selektive individuelle Immobilienbesichtigungen
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Sie besichtigen keine zufälligen Häuser, sondern Immobilien, die
              zu Ihrem Intake, Area Match Report, Umfeld und Lebensstil passen.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="text-lg leading-relaxed text-stone-700">
                <p>
                  Während der 4-tägigen Buyer Discovery Trip planen wir eine
                  begrenzte Anzahl individueller Immobilienbesichtigungen, die
                  sorgfältig vorselektiert werden. Nicht, weil Sie möglichst
                  viele Häuser sehen sollen, sondern weil Sie die richtigen
                  Immobilien sehen müssen: Immobilien, die logisch zu Ihrem
                  Budget, Ihren Wohnwünschen, Ihrer Familiensituation, Ihrer
                  gewünschten Umgebung und Ihrem täglichen Lebensstil passen.
                </p>

                <p className="mt-6">
                  Ihr kostenloser Area Match Report und Ihr Intake bilden die
                  Grundlage. So prüfen wir, ob eine ruhige Villa in Moraira,
                  eine moderne Immobilie bei Jávea, eine stilvolle Umgebung rund
                  um Altea, eine Finca oder Villa in Benissa, eine Wohnung oder
                  ein Neubauprojekt in Calpe oder eine lebendige Stadtwohnung in
                  Dénia besser zu Ihnen passt.
                </p>

                <p className="mt-6">
                  Bei diesen Besichtigungen schauen wir weiter als nur auf die
                  Immobilie selbst. Wir besprechen Lage, Erreichbarkeit,
                  Privatsphäre, Ausrichtung, Wartung, bautechnische
                  Aufmerksamkeitspunkte, Nachbarschaftsgefühl, Infrastruktur,
                  Vermietungspotenzial, rechtliche Sicherheit und die Frage, ob
                  die Immobilie zu dem Leben passt, das Sie in Spanien aufbauen
                  möchten.
                </p>
              </div>

              <div className="rounded-[32px] bg-white/80 p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Vom Online-Suchen zum gezielten Entscheiden
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  Viele Käufer verlieren online den Überblick zwischen hunderten
                  Immobilien. Wir bringen Fokus. Sie sehen eine sorgfältig
                  ausgewählte Auswahl und verstehen direkt, warum eine Immobilie,
                  Nachbarschaft oder Region zu Ihnen passt oder eben nicht.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  Das macht die Reise wertvoller als eine gewöhnliche
                  Besichtigungsreise: Sie vergleichen nicht nur Häuser, sondern
                  auch Lebensstile, Regionen, Risiken und Zukunftsszenarien.
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
                Sorgfältig ausgewählte Gruppe
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Reisen Sie mit gleichgesinnten Menschen, die zu Ihren Interessen,
                Ihrer Lebensphase und Ihrem Lebensstil passen.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Die Buyer Discovery Trip wird als sorgfältig zusammengestellte
                Gruppenreise organisiert. Wir bringen Sie mit Menschen zusammen,
                die sich in einer vergleichbaren Lebensphase befinden, ähnliche
                Regionen prüfen oder einen vergleichbaren Lebensstil an der
                Costa Blanca Nord suchen.
              </p>

              <p className="mt-6">
                Denken Sie an deutsche, schweizerische, österreichische,
                niederländische und belgische Käufer, internationale Familien,
                Unternehmer, Remote Worker, Käufer einer zweiten Immobilie,
                aktive Pensionäre und Menschen, die sich auf eine Zukunft in
                Spanien vorbereiten. Die Gruppe bleibt persönlich und selektiv,
                sodass Raum für Inhalt, Ruhe, Privatsphäre und echte Gespräche
                bleibt.
              </p>

              <p className="mt-6">
                Sie erleben gemeinsame Lunches, lokale Wohnviertel, Aktivitäten
                und Gespräche mit gleichgesinnten zukünftigen Bewohnern.
                Gleichzeitig haben Sie jederzeit die Möglichkeit, sich in Ihr
                eigenes 5-Sterne-Hotel, Ihre Suite oder ausgewählte Finca
                zurückzuziehen, wenn Sie Privatsphäre und Ruhe wünschen.
              </p>

              <p className="mt-6">
                Gerade diese Kombination aus gemeinsamer Erfahrung und
                individueller Freiheit macht die Reise wertvoll: Sie lernen die
                Region kennen, bauen ein erstes Netzwerk auf und behalten
                trotzdem Ihren eigenen Raum und ein sicheres Gefühl.
              </p>
            </div>
          </div>
        </section>

        {/* ANKUNFT */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ab Ihrer Ankunft ist alles organisiert
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight">
              Sie kommen in Spanien an, wir kümmern uns um Transport,
              Unterkunft, Planung und Begleitung.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-serif text-3xl">Privater Chauffeur</h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Ab Alicante Airport oder Valencia Airport werden Sie empfangen
                  und während der geplanten Bestandteile der Reise komfortabel
                  von einem privaten Chauffeur gefahren.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl">
                  5-Sterne-Hotel oder Finca
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Sie übernachten in einem sorgfältig ausgewählten
                  5-Sterne-Hotel, einer luxuriösen Suite, einem Boutique Resort
                  oder einer Finca, die zur Atmosphäre der Costa Blanca Nord
                  passt.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl">Persönliches Programm</h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Beim Willkommen besprechen wir die Gruppe, Ihre persönlichen
                  Ziele, Ihren Area Match Report, die ausgewählten Regionen,
                  mögliche Immobilien und die Fachleute, die Sie während der 4
                  Tage kennenlernen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 TAGE PROGRAMM */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Das 4-tägige Programm
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Vier Tage, um Wohnen, Kaufen und Leben an der Costa Blanca Nord
                wirklich zu verstehen.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Das genaue Programm wird auf die Gruppe, die Saison, die Regionen
                und die Profile der Teilnehmer abgestimmt. Der Aufbau bleibt
                klar: ankommen, entdecken, erleben, Spezialisten treffen und mit
                konkreten, sicheren nächsten Schritten nach Hause gehen.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  day: "Tag 1",
                  title: "Ankunft und Willkommen",
                  text: "Privater Transfer, Check-in, persönliches Kennenlernen, Einführung der Gruppe, Erklärung des Kaufprozesses und ein entspanntes Willkommensdinner.",
                },
                {
                  day: "Tag 2",
                  title: "Moraira, Benissa und Calpe",
                  text: "Regionstour, Wohngebiete, Villenzonen, Küstenbereiche, lokaler Lunch und selektive Immobilienbesichtigungen von Häusern, die zu Ihrem Intake, Budget und Lebensstil passen.",
                },
                {
                  day: "Tag 3",
                  title: "Jávea und Dénia",
                  text: "Wohnviertel, Strände, Hafen, Infrastruktur, internationale Gemeinschaft, individuelle Immobilienbesichtigungen und ein Lifestyle-Erlebnis wie Pasta selbst herstellen, Wellness oder eine kulinarische Tour.",
                },
                {
                  day: "Tag 4",
                  title: "Altea und Spezialisten",
                  text: "Altea und Umgebung, wenn sinnvoll letzte gezielte Besichtigungen, Gespräche mit Anwalt, Bausachverständigem, Finanzierungsberater und klare nächste Schritte für einen sicheren Kaufprozess.",
                },
              ].map((item) => (
                <div key={item.day} className="rounded-[32px] bg-white p-8 shadow-sm">
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

        {/* ECHTE REGIONEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Haus kaufen Costa Blanca Nord
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Entdecken Sie Moraira, Jávea, Altea, Benissa, Calpe und Dénia aus
                der Perspektive des täglichen Lebens.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Während der Buyer Discovery Trip erleben Sie die Regionen aus der
                Wohnperspektive, nicht nur aus touristischer Sicht. Wir besuchen
                Orte, Wohnviertel und Einrichtungen, die für Ihren zukünftigen
                Lebensstil wichtig sind, und planen individuelle
                Immobilienbesichtigungen, die zu Ihrem persönlichen Profil
                passen.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Moraira Haus kaufen
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Ruhiges und elegantes Wohnen an der Küste, mit Villen,
                  Buchten, Restaurants, internationalen Bewohnern und einer
                  gepflegten residentialen Atmosphäre.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Jávea Immobilie kaufen
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Ein lebendiger internationaler Lebensstil mit Stränden,
                  Restaurants, Sportclubs, Schulen, Unternehmertum und Energie
                  das ganze Jahr über.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Altea Immobilie kaufen
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Kultur, Schönheit, Meerblick, Kunst, Gastronomie und
                  mediterrane Raffinesse in einer stilvollen Umgebung.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Benissa Villa kaufen
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Raum, Privatsphäre, Authentizität, ländliches Wohnen, Fincas,
                  Villen und versteckte Buchten an der Küste.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Calpe Wohnung oder Neubau kaufen
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Wohnen am Strand, Hafenleben, Wohnungen, Neubauprojekte,
                  Einrichtungen und eine aktivere Atmosphäre.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Dénia Haus oder Wohnung kaufen
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Gastronomie, Hafenleben, tägliche Einrichtungen, Fähre nach
                  Ibiza und eine lebendige Stadt, die das ganze Jahr aktiv
                  bleibt.
                </p>
              </div>
            </div>

            <p className="mt-12 max-w-4xl text-lg leading-relaxed text-stone-600">
              Wir helfen Ihnen, die Unterschiede zwischen den Gebieten zu
              verstehen: Atmosphäre, Immobilientypen, Schulen, Gesundheitswesen,
              Fahrzeiten, internationale Gemeinschaft, Restaurants,
              Sportmöglichkeiten, tägliche Einrichtungen, Vermietungspotenzial,
              Erreichbarkeit und praktische Eignung auf lange Sicht.
            </p>
          </div>
        </section>

        {/* PROFESSIONALS */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Kaufbegleitung Spanien
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Treffen Sie die Spezialisten, die Ihren Immobilienkauf in
                Spanien möglich und sicherer machen.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                Während Ihrer 4-tägigen Buyer Discovery Trip stellen wir Ihnen
                zuverlässige unabhängige Fachleute und lokale Kontakte vor, die
                Ihnen helfen, den Kaufprozess in Spanien gut zu verstehen, bevor
                Sie ein Angebot abgeben oder Dokumente unterschreiben.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Unabhängiger Immobilienanwalt",
                  "Bausachverständiger",
                  "Finanzierungsberater oder Hypothekenspezialist",
                  "Spanischer Notar, wo relevant",
                  "Bankkontakt",
                  "Versicherungsspezialist",
                  "Lokaler Immobilienexperte",
                  "Steuer- oder Umzugsberater, wo relevant",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Diese Gespräche geben Ihnen Klarheit über rechtliche Prüfungen,
                bautechnische Aufmerksamkeitspunkte, Finanzierungsmöglichkeiten,
                Bankanforderungen, Versicherungen, Kaufnebenkosten, jährliche
                Kosten, Steuern, Dokumentation, Reservierungsverträge und häufige
                Fehler ausländischer Käufer.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Sie können Ihre Fragen direkt stellen und reisen mit einem
                klareren Bild nach Hause: wen Sie brauchen, welche Schritte
                folgen und wie Sie Immobilien in Spanien strukturierter,
                kontrollierter und sicherer kaufen können.
              </p>
            </div>
          </div>
        </section>

        {/* LIFESTYLE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Erleben Sie den Lebensstil
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Eine Immobilie ist nur ein Teil Ihrer Entscheidung. Das Leben
              darum herum ist mindestens genauso wichtig.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              Deshalb enthält die Buyer Discovery Trip Aktivitäten, die zu Ihren
              Interessen und der Region passen, die Sie erkunden. Sie erleben
              Wohnviertel, Lunches, Clubs, Natur, Gastronomie und lokale
              Begegnungen so, wie Sie sie später auch in Ihrem täglichen Leben
              erfahren könnten.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Gemeinsame lokale Lunches",
                "Fine Dining und Gastronomie",
                "Pasta selbst machen oder Cooking Workshop",
                "Golf Tour oder Besuch eines Golfclubs",
                "Weinverkostungen",
                "Beachclubs und Marinas",
                "Wellness- und Spa-Erlebnisse",
                "Wander- und Naturrouten",
                "Kulturelle Besuche",
                "Netzwerk-Introductions",
                "Community Gatherings",
                "Individuelle Privatsphäre-Momente",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium text-[#1e2a3a]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              Möchten Sie gemeinsam lunchen und die lokalen Wohnviertel erleben,
              ist dafür Raum. Wünschen Sie Privatsphäre, ziehen Sie sich in Ihr
              eigenes Hotelzimmer, Ihre Suite oder Finca zurück. Die Reise ist
              organisiert, aber sie fühlt sich nicht massenhaft an.
            </p>
          </div>
        </section>

        {/* WAS WIR FÜR SIE TUN */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Was wir für Sie tun
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Wir begleiten, koordinieren und helfen Ihnen, eine bessere und
                sicherere Immobilienentscheidung in Spanien zu treffen.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Wir koordinieren die vollständige 4-tägige Erfahrung: Intake,
                Area Match Report, Gruppenzusammenstellung, Unterkunft, privater
                Chauffeur, Regionstouren, sorgfältig ausgewählte individuelle
                Immobilienbesichtigungen, Lunches, Lifestyle-Aktivitäten und
                Treffen mit unabhängigen Fachleuten.
              </p>

              <p className="mt-6">
                Wir helfen Ihnen, Gebiete zu vergleichen, praktische Unterschiede
                zu verstehen, die richtigen Fragen zu stellen und häufige Fehler
                zu vermeiden, bevor Sie ernsthaft Immobilien in Spanien kaufen.
              </p>

              <p className="mt-6">
                Unsere Rolle ist nicht, Ihnen eine Immobilie aufzudrängen. Unsere
                Rolle ist, Ihnen zu helfen, eine bessere Entscheidung über
                Region, Lebensstil, Budget, Kaufprozess, Risiken und Begleitung
                zu treffen.
              </p>

              <p className="mt-6">
                Wenn ein Gebiet nicht zu Ihrem Profil passt, sagen wir das. Wenn
                ein bestimmter Immobilientyp rechtliche, praktische,
                bautechnische oder Lifestyle-Aufmerksamkeitspunkte hat, helfen
                wir Ihnen, das rechtzeitig zu verstehen.
              </p>
            </div>
          </div>
        </section>

        {/* INBEGRIFFEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Was ist inbegriffen
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Ihre 4-tägige Buyer Discovery Trip enthält alles für eine klare
              erste Entscheidung über Wohnen und Kaufen in Spanien.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Kostenloses persönliches Intake-Gespräch vor Ankunft",
                "Kostenloser Area Match Report",
                "Persönliches Lifestyle- und Gebietsprofil",
                "Sorgfältig ausgewählte Gruppenzusammenstellung",
                "Vollständig organisiertes 4-tägiges Programm",
                "Privater Chauffeur und geplante Transfers",
                "Aufenthalt im 5-Sterne-Hotel, in einer Luxussuite, einem Resort oder einer Finca",
                "Begleitete Regionstouren an der Costa Blanca Nord",
                "Selektive individuelle Immobilienbesichtigungen auf Basis Ihres Intakes",
                "Häuser ausgewählt nach Budget, Region, Bedürfnissen und Lebensstil",
                "Treffen mit Anwalt, Bausachverständigem und Finanzierungsberater",
                "Treffen mit Bank-, Steuer- und Versicherungskontakten, wo relevant",
                "Gemeinsame Lunches und lokale Lifestyle-Erlebnisse",
                "Aktivitäten wie Cooking Workshop, Weinverkostung oder Golf Tour",
                "Privatsphäre und Ruhephasen in Ihrer eigenen Unterkunft",
                "Mehr rechtliche, finanzielle und bautechnische Klarheit vor dem Kauf",
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
                über Haus kaufen in Spanien.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Welche Gebiete an der Costa Blanca Nord zu Ihrem Lebensstil passen",
                "Welche Gebiete weniger geeignet für Sie sind",
                "Welche besichtigten Immobilien am besten zu Budget, Familie und Zielen passen",
                "Welcher Immobilientyp realistisch zu Ihrem Area Match Report passt",
                "Was der Kaufprozess in Spanien beinhaltet",
                "Welche rechtlichen, finanziellen und bautechnischen Themen Aufmerksamkeit brauchen",
                "Wie das tägliche Leben nach dem Kauf aussehen könnte",
                "Welche Fachleute Sie unterstützen können",
                "Welche lokale Gemeinschaft und gleichgesinnten Menschen Sie kennenlernen können",
                "Welche Risiken und nächsten Prüfschritte vor einer Kaufentscheidung wichtig sind",
                "Ob Sie bereit sind für den nächsten Schritt Richtung Kauf",
              ].map((item) => (
                <div key={item} className="rounded-[28px] bg-white p-7 shadow-sm">
                  <p className="text-lg leading-relaxed text-stone-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FÜR WEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Für wen ist diese Reise?
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Ideal für seriöse Käufer, die die Costa Blanca Nord zuerst gut
              verstehen möchten, bevor sie eine Immobilie kaufen.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Deutsche Käufer, die ein Haus in Spanien kaufen möchten",
                "Schweizer, österreichische und internationale Käufer an der Costa Blanca Nord",
                "Familien, die einen Umzug nach Spanien erwägen",
                "Pensionäre, die einen neuen Lebensstil planen",
                "Unternehmer und Remote Worker",
                "Käufer einer zweiten Immobilie in Spanien",
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
              Häufig gestellte Fragen zum Hauskauf an der Costa Blanca Nord.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  question:
                    "Ist die Buyer Discovery Trip eine normale Besichtigungsreise?",
                  answer:
                    "Nein. Die Reise kombiniert Regionstouren, Lifestyle-Erlebnisse, selektive individuelle Immobilienbesichtigungen, professionelle Erklärung, Sicherheitscheckpoints und Begegnungen mit gleichgesinnten Käufern.",
                },
                {
                  question:
                    "Ist die Reise für Menschen gedacht, die noch zwischen Regionen zweifeln?",
                  answer:
                    "Ja. Die Reise ist genau dafür gedacht, Moraira, Jávea, Altea, Benissa, Calpe und Dénia besser zu vergleichen, bevor Sie eine Immobilie wählen.",
                },
                {
                  question:
                    "Besichtige ich während der Reise auch Häuser?",
                  answer:
                    "Ja. Auf Basis Ihres Intakes und Area Match Reports wählen wir eine begrenzte Anzahl an Immobilien aus, die zu Ihrem Budget, Ihrer gewünschten Region, Ihren Bedürfnissen und Ihrem Lebensstil passen.",
                },
                {
                  question:
                    "Treffe ich während der Reise auch Fachleute?",
                  answer:
                    "Ja. Wo relevant treffen Sie unter anderem einen Anwalt, Bausachverständigen, Finanzierungsberater, Bankkontakt, Versicherungsexperten und lokalen Immobilienprofi.",
                },
                {
                  question:
                    "Hilft mir die Reise, sicherer in Spanien zu kaufen?",
                  answer:
                    "Ja. Sie erhalten mehr Klarheit über Region, Immobilienauswahl, rechtliche Prüfung, bautechnische Aufmerksamkeitspunkte, Finanzierung, Kosten, Risiken und die nächsten Schritte vor einer Kaufentscheidung.",
                },
                {
                  question:
                    "Habe ich während der Gruppenreise auch Privatsphäre?",
                  answer:
                    "Ja. Sie reisen mit einer sorgfältig ausgewählten Gruppe, wohnen aber in Ihrem eigenen Zimmer, Ihrer Suite, Ihrem Hotel oder Ihrer Finca und haben Momente, um sich zurückzuziehen.",
                },
              ].map((item) => (
                <div key={item.question} className="rounded-[28px] bg-[#f6f1ea] p-7">
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
              4-tägige Buyer Discovery Trip anfragen
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
              Wenn Sie ernsthaft darüber nachdenken, ein Haus in Spanien zu
              kaufen, ist die wichtigste Entscheidung nicht nur die Immobilie.
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
              Es geht um die richtige Region, den richtigen Lebensstil, die
              richtige Immobilienauswahl, die richtige Begleitung, mehr
              Sicherheit und die richtigen Menschen um Sie herum.
            </p>

            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
              Fragen Sie Ihre 4-tägige Buyer Discovery Trip an und entdecken Sie,
              welche Region, welches Wohnviertel und welche Immobilie an der
              Costa Blanca Nord wirklich zu Ihrer Zukunft in Spanien passen.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              4-tägige Buyer Discovery Trip anfragen
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
