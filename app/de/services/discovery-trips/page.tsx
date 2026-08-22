export const metadata = {
  title:
    "Buyer Discovery Trips & Private Besichtigungstouren Costa Blanca Nord | Nordic Move Spain",
  description:
    "Starten Sie mit Ihrem persönlichen Area Match, einem persönlichen Beratungsgespräch und einer gezielten Auswahl von bis zu 10 Immobilien. Wir suchen maklerübergreifend und über unser lokales Netzwerk – einschließlich exklusiver, Off-Market- und Pre-Market-Angebote – bevor Sie sich für eine private Buyer Tour oder einen sorgfältig zusammengestellten Discovery Trip in kleiner Gruppe an der Costa Blanca Nord entscheiden.",
  keywords: [
    "Buyer Discovery Trip Costa Blanca Nord",
    "private Immobilienbesichtigung Costa Blanca",
    "private Buyer Tour Spanien",
    "Immobiliensuche Reise Spanien",
    "Immobilien Besichtigungsreise Spanien",
    "Immobilie kaufen Costa Blanca Nord",
    "Luxusvilla kaufen Costa Blanca Nord",
    "Villa kaufen Moraira",
    "Villa kaufen Jávea",
    "Immobilie kaufen Altea",
    "Immobilie kaufen Benissa",
    "Area Match Report Spanien",
    "unabhängige Käufervertretung Spanien",
    "Käufermakler Costa Blanca",
    "Immobilien Due Diligence Spanien",
    "sicher Immobilien kaufen Spanien",
    "Umzug Costa Blanca",
    "Off Market Immobilien Costa Blanca",
    "exklusive Immobilien Costa Blanca",
    "Pre Market Immobilien Costa Blanca",
  ],
  alternates: {
    canonical: "/de/buyer-discovery-trip-costa-blanca-north",
  },
  openGraph: {
    title:
      "Buyer Discovery Trips & Private Besichtigungstouren Costa Blanca Nord | Nordic Move Spain",
    description:
      "Vom Area Match und einer gezielten Immobilienauswahl über einen breiteren Marktzugang und private Besichtigungen bis zu Discovery Trips in kleinen Gruppen, unabhängigen Experten und einer sichereren Käuferbegleitung an der Costa Blanca Nord.",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/discover-card.png",
        width: 1200,
        height: 630,
        alt: "Buyer Discovery Trip und private Immobilienbesichtigung an der Costa Blanca Nord",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const buyerDiscoveryStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Buyer Discovery Trips und Private Buyer Tours Costa Blanca Nord",
  description:
    "Käuferseitiger Immobilienservice für internationale Käufer an der Costa Blanca Nord mit Area Match, persönlicher Beratung, einer gezielten Auswahl von bis zu 10 Immobilien, maklerübergreifender Suche und lokalem Netzwerk, privaten oder kleinen Gruppen-Besichtigungsreisen, Expertenkontakten und Kaufbegleitung.",
  provider: {
    "@type": "Organization",
    name: "Nordic Move Spain",
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
  audience: {
    "@type": "Audience",
    audienceType:
      "Internationale Immobilienkäufer, Käufer von Zweitwohnsitzen, Familien mit Umzugsplänen und Käufer von Luxusvillen",
  },
};

export default function BuyerDiscoveryTripPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buyerDiscoveryStructuredData),
        }}
      />

      <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
        {/* HERO */}
        <section className="relative min-h-[90vh] overflow-hidden">
          <img
            src="/images/discover-card.png"
            alt="Private Buyer Tour und Buyer Discovery Trip an der Costa Blanca Nord"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Private Buyer Tours & Discovery Trips in kleinen Gruppen
              </p>

              <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
                Finden Sie zuerst die richtige Region. Besichtigen Sie danach nur die Immobilien,
                die wirklich zu Ihrem Leben in Spanien passen.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                Starten Sie mit Ihrem persönlichen Area Match Report und einem individuellen
                Beratungsgespräch. Anschließend reduzieren wir den Markt auf eine gezielte Auswahl
                von bis zu 10 passenden Immobilien, häufig ergänzt durch Videotouren,
                bevor Sie sich für eine private Buyer Tour oder einen sorgfältig zusammengestellten
                Discovery Trip in kleiner Gruppe an der Costa Blanca Nord entscheiden.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/de/contact"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Besprechen Sie Ihren Kaufplan mit uns
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

        {/* EINLEITUNG */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Klarheit vor den Besichtigungen
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Ein Immobilienkauf in Spanien sollte nicht mit zufälligen Inseraten beginnen.
                </h2>
              </div>

              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Schöne Fotos und Maklerbeschreibungen können nahezu jede Immobilie attraktiv
                  wirken lassen. Doch ein Zuhause passt nur dann wirklich, wenn auch
                  Lage, Alltag, praktische Anforderungen, Budget und langfristige Pläne stimmen.
                </p>

                <p className="mt-6">
                  Deshalb beginnt Nordic Move Spain bei Ihnen – nicht bei einem Verkaufsinserat.
                  Zuerst klären wir, welche Regionen an der Costa Blanca Nord zu Ihrem Leben passen.
                  Erst danach grenzen wir den Immobilienmarkt auf Häuser und Villen ein,
                  die für Ihr persönliches Profil wirklich sinnvoll sind.
                </p>

                <p className="mt-6">
                  Das Ergebnis ist ein gezielterer Kaufprozess: weniger irrelevante Besichtigungen,
                  klarere Vergleiche, bessere Fragen und mehr Raum für unabhängige rechtliche
                  und technische Prüfungen, bevor Sie sich festlegen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABLAUF */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ihr Weg zum Immobilienkauf
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Vom Area Match über eine gezielte Auswahl bis zur passenden
              Besichtigungsform.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Persönliches Area Match",
                  text: "Wir ermitteln die Regionen an der Costa Blanca Nord, die am besten zu Ihrem Lebensstil, Ihren praktischen Anforderungen, Prioritäten und Plänen passen.",
                },
                {
                  number: "02",
                  title: "Persönliches Beratungsgespräch",
                  text: "Wir besprechen Ihren Bericht ausführlich und konkretisieren Budget, Immobilienwünsche, Familiensituation, Zeitplan und langfristige Ziele.",
                },
                {
                  number: "03",
                  title: "Auswahl von bis zu 10 Immobilien",
                  text: "Wir recherchieren eine gezielte Auswahl von Immobilien, die eng zu Ihrem Area Match und Ihrem persönlichen Suchprofil passen – häufig mit Videotouren, sofern verfügbar.",
                },
                {
                  number: "04",
                  title: "Wählen Sie Ihre Besichtigungsform",
                  text: "Entscheiden Sie sich für eine private Buyer Tour oder einen sorgfältig zusammengestellten Discovery Trip in kleiner Gruppe mit Besichtigungen, Expertengesprächen und lokalen Erlebnissen.",
                },
              ].map((step) => (
                <div key={step.number} className="rounded-[28px] bg-[#f6f1ea] p-7">
                  <p className="text-sm font-medium tracking-[0.2em] text-[#c8a063]">
                    {step.number}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                    {step.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AREA MATCH + AUSWAHL */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Zuerst das Area Match
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Zuerst finden wir heraus, wo Sie leben sollten. Danach konzentrieren wir uns auf die
                Immobilien, die wirklich passen.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                Ihr Weg beginnt mit Ihrem kostenlosen persönlichen Area Match Report.
                Anschließend vereinbaren wir ein individuelles Gespräch, in dem wir den Bericht
                gemeinsam durchgehen und Ihr Suchprofil weiter schärfen: Budget,
                bevorzugter Immobilientyp, Familiensituation, Tagesablauf,
                Erreichbarkeit, Schulen oder Gesundheitsversorgung, soziales Leben, Privatsphäre,
                Umzugspläne und langfristige Prioritäten.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Auf Basis dieses Gesprächs und Ihres Area-Match-Profils recherchieren
                und erstellen wir eine gezielte Auswahl von bis zu 10 Immobilien,
                die Ihren Prioritäten möglichst genau entsprechen. Sofern verfügbar, nutzen wir außerdem
                Videotouren oder zusätzliches Videomaterial, damit Sie Immobilien bereits einschätzen können,
                bevor Sie nach Spanien reisen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Unser Ziel ist nicht, Ihnen endlose Listen mit Inseraten zu schicken. Wir reduzieren
                Hunderte Möglichkeiten auf eine kleine Zahl realistischer Immobilien,
                die sowohl zu Ihren Wohnwünschen als auch zu der im Area Match Report
                ermittelten Lage und Lebensweise passen.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Bis zu 10 gezielt ausgewählte Immobilien",
                  "Auswahl auf Basis Ihres Area Match",
                  "Persönliche Besprechung Ihrer Wünsche und Ihres Reports",
                  "Videotouren, sofern verfügbar",
                  "Budget und langfristige Eignung berücksichtigt",
                  "Kein Druck, unpassende Immobilien zu besichtigen",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRIVAT VS GRUPPE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Wählen Sie die Besichtigungsform, die zu Ihnen passt
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Entdecken Sie die Region privat oder gemeinsam mit sorgfältig ausgewählten
                Gleichgesinnten.
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[40px] bg-white p-10 shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  Private Buyer Tour
                </p>
                <h3 className="mt-4 font-serif text-4xl text-[#1e2a3a]">
                  Eine vollständig persönliche Immobilien- und Regionstour, die auf Ihrer
                  individuellen Auswahl basiert.
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Route, Besichtigungen und Zeitplan werden auf Ihr persönliches Suchprofil
                  abgestimmt. Wir können lokalen Transport, Transfers und eine passende Unterkunft
                  koordinieren, damit Sie Ihre Zeit in Spanien auf die Orte und Immobilien
                  konzentrieren können, die für Sie wirklich relevant sind.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Je nachdem, wie weit Sie im Kaufprozess sind, können wir außerdem
                  Treffen mit relevanten unabhängigen Fachleuten organisieren – zum Beispiel
                  mit einem Immobilienanwalt, Hypothekenspezialisten und Bausachverständigen
                  oder technischen Berater.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Eine private Tour ist ideal, wenn Sie maximale Flexibilität,
                  Privatsphäre und ein Programm wünschen, das vollständig auf Ihre eigenen
                  Kaufkriterien und Ihr Tempo abgestimmt ist.
                </p>
              </div>

              <div className="rounded-[40px] bg-[#1e2a3a] p-10 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  Discovery Trip in kleiner Gruppe
                </p>
                <h3 className="mt-4 font-serif text-4xl">
                  Entdecken Sie Immobilien und Lebensstil gemeinsam mit Käufern,
                  die sich in einer ähnlichen Phase befinden.
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Unsere Gruppenreisen bringen sorgfältig ausgewählte Käufer mit ähnlichen
                  Plänen, Erwartungen oder Interessen zusammen. Sie besichtigen weiterhin
                  relevante Immobilien und haben Zeit für persönliche Fragen, teilen aber auch
                  ausgewählte Regionsbesuche, gemeinsame Mahlzeiten und Erlebnisse mit Menschen,
                  die eine ähnliche Zukunft in Spanien planen.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-white/80">
                  Die Lifestyle-Erlebnisse werden im Voraus besprochen und an die Interessen
                  der Teilnehmer angepasst. Je nach Gruppe kann dies beispielsweise eine Yacht-Tour,
                  die Herstellung von lokalem Olivenöl, Gastronomie, Natur, Golf, Wellness,
                  kulturelle Besuche oder ein anderes lokales Erlebnis umfassen,
                  das Ihnen die Region jenseits des Immobilienmarktes näherbringt.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-white/80">
                  Es geht nicht um Unterhaltung um ihrer selbst willen. Ziel ist,
                  dass Sie ein Gefühl dafür bekommen, wie Alltag, Gemeinschaft und Freizeit
                  tatsächlich aussehen könnten, bevor Sie entscheiden, wo Sie kaufen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KÄUFERSEITE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Auf der Seite des Käufers
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Unsere Aufgabe ist es, Ihnen bei der richtigen Entscheidung zu helfen – nicht,
              Ihnen eine bestimmte Immobilie zu verkaufen.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Nordic Move Spain arbeitet auf der Seite des Käufers. Wir sind nicht darauf angewiesen,
                  dass ein Verkäufer uns eine Verkaufsprovision zahlt, damit wir Sie zu einer
                  bestimmten Immobilie lenken. Dadurch können wir uns darauf konzentrieren, ob eine
                  Immobilie wirklich zu Ihnen passt und ob wichtige Risiken ausreichend geprüft
                  wurden, bevor Sie fortfahren.
                </p>

                <p>
                  Wenn eine Region nicht zu Ihrem Profil passt, sagen wir das offen. Wenn eine
                  Immobilie praktische, technische, rechtliche oder Lifestyle-bezogene
                  Bedenken aufwirft, kann der richtige Schritt sein, weiter zu prüfen,
                  neu zu verhandeln oder vom Kauf Abstand zu nehmen.
                </p>

                <p>
                  Wenn Sie ernsthaftes Interesse an einer Immobilie haben, werden die formellen
                  rechtlichen und technischen Prüfungen von unabhängigen Fachleuten durchgeführt,
                  zum Beispiel von Ihrem Immobilienanwalt und einem Bausachverständigen.
                  Jeder Fachmann bleibt für seine eigene Beratung, Prüfung und Berichterstattung verantwortlich.
                </p>

                <p>
                  Wir helfen dabei, diesen Prozess zu koordinieren, bringen die relevanten Personen
                  zusammen und erläutern Ihnen die nächsten Schritte. Durch unsere
                  Unabhängigkeit haben wir keinen verkäuferseitigen Anreiz,
                  Bedenken herunterzuspielen, nur damit ein Verkauf zustande kommt.
                </p>
              </div>

              <div className="rounded-[32px] bg-white/80 p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Was das in der Praxis bedeutet
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Kein Druck, eine bestimmte Immobilie zu kaufen",
                    "Unabhängiger Anwalt für die rechtliche Due Diligence",
                    "Unabhängiger Bausachverständiger oder technischer Berater für Gebäudeprüfungen",
                    "Klare Trennung zwischen Verkauf und fachlichen Prüfungen",
                    "Zeit und Raum, Bedenken vor einer Bindung zu prüfen",
                    "Unterstützung beim Fortfahren, Nachverhandeln oder Abstandnehmen",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-white p-5">
                      <p className="font-medium text-[#1e2a3a]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* BREITERER MARKTZUGANG */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Breiterer Zugang zum Immobilienmarkt
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Wir vertreten den Käufer, nicht die Immobilie.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Da Nordic Move Spain nicht vom Verkäufer oder verkaufenden Makler bezahlt wird,
                  um eine bestimmte Immobilie zu vermarkten, sind wir nicht an einen Makler,
                  ein Portfolio oder einen Bauträger gebunden. Wir beginnen mit Ihrem Suchprofil
                  und suchen die Immobilie, die zu Ihnen passt – statt mit einer Immobilie zu beginnen,
                  die jemand verkaufen muss.
                </p>

                <p>
                  Nach Ihrem Area Match Report und dem persönlichen Beratungsgespräch können wir
                  in Ihrem Namen Makler, Bauträger und Immobilienfachleute an der gesamten
                  Costa Blanca Nord ansprechen. Dadurch erhalten wir einen breiteren Marktüberblick
                  und können Angebote verschiedener Anbieter vergleichen, anstatt Ihre Suche auf
                  das Portfolio eines einzelnen Maklers zu beschränken.
                </p>

                <p>
                  Über unser lokales Netzwerk erhalten wir außerdem Zugang zu exklusiven Angeboten,
                  Off-Market-Gelegenheiten und Immobilien, die uns teilweise bereits mitgeteilt werden,
                  bevor sie öffentlich inseriert werden. Makler und lokale Kontakte können uns
                  direkt ansprechen, wenn sie wissen, dass wir einen ernsthaften Käufer
                  mit einem klaren Suchprofil vertreten.
                </p>

                <p>
                  Das bedeutet nicht, dass jede passende Immobilie off-market oder exklusiv ist.
                  Es bedeutet, dass wir breiter suchen, den Markt aktiv ansprechen
                  und öffentliche Inserate mit Chancen aus unserem Netzwerk
                  zu einer gezielten Suche für Sie zusammenführen können.
                </p>
              </div>

              <div className="rounded-[32px] bg-[#f6f1ea] p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Was dieser breitere Marktzugang für Sie bedeuten kann
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    "Suche über mehrere Makler hinweg",
                    "Exklusive Angebote über unser Netzwerk",
                    "Off-Market- und Pre-Market-Möglichkeiten",
                    "Direkter Kontakt, wenn passende Immobilien verfügbar werden",
                    "Ein klares Käuferprofil für die Suche im gesamten Markt",
                    "Keine Abhängigkeit vom Portfolio eines einzelnen Verkaufsmaklers",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-white p-5">
                      <p className="font-medium text-[#1e2a3a]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REGIONEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Entdecken Sie die echte Costa Blanca Nord
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Vergleichen Sie, wie sich die Regionen im Alltag tatsächlich anfühlen.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Eine Immobilie kann verändert werden. Ihre Lage nicht. Wir helfen Ihnen,
                Atmosphäre, Erreichbarkeit, Schulen, Gesundheitsversorgung, tägliche
                Dienstleistungen, soziales Leben, Restaurants, Sportangebote, internationale
                Gemeinschaft, Immobilientypen, Fahrzeiten und langfristige praktische
                Eignung zu vergleichen.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Moraira",
                  text: "Ruhiges und elegantes Leben an der Küste mit Villen, Buchten und einer exklusiven, zugleich entspannten Wohnatmosphäre.",
                },
                {
                  name: "Jávea",
                  text: "Ein lebendiger internationaler Lebensstil mit Stränden, Restaurants, Sport, Schulen und ganzjährigem Leben.",
                },
                {
                  name: "Altea",
                  text: "Kultur, Schönheit, Meerblick und mediterraner Charakter in einem künstlerischen und anspruchsvollen Umfeld.",
                },
                {
                  name: "Benissa",
                  text: "Platz, Privatsphäre, Authentizität, ländliches Wohnen und versteckte Buchten entlang der Küste.",
                },
                {
                  name: "Calpe",
                  text: "Leben direkt am Strand, Marina-Flair, Apartments, Neubauprojekte und eine lebendigere Atmosphäre.",
                },
                {
                  name: "Dénia",
                  text: "Gastronomie, Hafenleben, tägliche Versorgung und eine lebendige Stadt, die das ganze Jahr über sehr gut funktioniert.",
                },
              ].map((region) => (
                <div key={region.name} className="rounded-[32px] bg-white p-8 shadow-sm">
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    {region.name}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {region.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Lernen Sie die Fachleute kennen, die Sie benötigen können
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Verstehen Sie die rechtlichen, technischen und finanziellen Schritte,
                bevor Sie eine weitreichende Entscheidung treffen.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                Während einer privaten Buyer Tour oder eines Discovery Trips in der Gruppe können wir
                Kontakte zu relevanten unabhängigen Fachleuten und lokalen Ansprechpartnern
                organisieren. Welche Gespräche sinnvoll sind, hängt von Ihren Plänen und davon ab,
                wie weit Sie im Kaufprozess sind.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Unabhängiger Immobilienanwalt",
                  "Bausachverständiger oder technischer Berater",
                  "Hypothekenspezialist",
                  "Bankkontakt",
                  "Versicherungsspezialist",
                  "Notar oder Begleitung des notariellen Ablaufs, sofern relevant",
                  "Relocation-Ansprechpartner",
                  "Weitere für die Immobilie relevante Fachleute",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Diese Fachleute bleiben unabhängig und sind für ihre eigene Beratung und Berichte
                verantwortlich. Nordic Move Spain koordiniert und begleitet den Kaufprozess;
                wir ersetzen weder Rechtsberatung noch ein formelles Gutachten,
                eine Bewertung, Hypothekenberatung oder andere regulierte professionelle Leistungen.
              </p>
            </div>
          </div>
        </section>

        {/* LIFESTYLE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Erleben Sie den Lebensstil – nicht nur den Immobilienmarkt
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Das richtige Zuhause sollte auch zu dem Leben passen, das Sie darum herum führen möchten.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              Bei Gruppenreisen werden lokale Erlebnisse im Voraus mit den Teilnehmern
              besprochen und nach den Interessen der Gruppe ausgewählt. Bei einer
              privaten Tour können wir das Programm an Ihren persönlichen Interessen
              und den Regionen ausrichten, die Sie intensiver kennenlernen möchten.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Yacht- oder Marina-Erlebnis",
                "Olivenöl selbst herstellen oder Besuch bei einem lokalen Produzenten",
                "Lokale Mittagessen und Gastronomie",
                "Wein- oder Lebensmittelverkostung",
                "Golf- und Sportclubs",
                "Wellness und Spa",
                "Wandern und Natur",
                "Kulturelle und lokale Erlebnisse",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium text-[#1e2a3a]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              Diese Erlebnisse sind nicht bei jeder Reise gleich. Sie werden
              im Voraus auf Basis der Wünsche der Teilnehmer, der praktischen Planung
              und danach ausgewählt, was Ihnen am besten hilft, den Charakter der Region zu verstehen.
            </p>
          </div>
        </section>

        {/* WAS WIR KOORDINIEREN KÖNNEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Eine koordinierte Kaufbegleitung
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
              Wir verbinden die praktischen Bausteine, damit Sie sich auf die
              Entscheidung konzentrieren können.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Persönlicher Area Match Report",
                "Persönliches Beratungsgespräch",
                "Gezielte Auswahl von bis zu 10 Immobilien",
                "Videotouren, sofern verfügbar",
                "Individueller Ablauf für private Immobilienbesichtigungen",
                "Buyer Discovery Trip in kleiner Gruppe",
                "Unterstützung bei der Koordination von Transport und Transfers",
                "Unterstützung bei der Auswahl einer passenden Unterkunft",
                "Besuche von Regionen und Wohnvierteln",
                "Kontakt zu einem unabhängigen Anwalt",
                "Kontakte zu Hypotheken- und Bankexperten",
                "Kontakt zu Bausachverständigem oder technischem Berater",
                "Lifestyle-Erlebnisse passend zu Ihren Interessen",
                "Unterstützung beim Vergleich von Immobilien und Lagen",
                "Klare nächste Schritte nach Ihrem Besuch",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm font-medium leading-relaxed text-white/90">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NACH DER TOUR */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Nach Ihrer Tour
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Sie sollen mit Klarheit abreisen – nicht mit noch mehr Fragen.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Welche Regionen der Costa Blanca Nord wirklich zu Ihrem Lebensstil passen",
                "Welche Regionen oder Immobilientypen weniger zu Ihnen passen",
                "Welche Immobilien aus Ihrer Auswahl nach den Besichtigungen weiterhin realistisch sind",
                "Welche praktischen, rechtlichen oder technischen Fragen noch geprüft werden müssen",
                "Wer die nächsten fachlichen Prüfungen durchführen sollte",
                "Wie der weitere Kaufprozess und die nächsten Schritte aussehen",
                "Ob Sie bereit sind fortzufahren, weiterzusuchen oder neu zu bewerten",
                "Wie Nordic Move Spain Sie nach Ihrer Entscheidung bei Kauf, Relocation und Einzug unterstützen kann",
              ].map((item) => (
                <div key={item} className="rounded-[28px] bg-white p-7 shadow-sm">
                  <p className="text-lg leading-relaxed text-stone-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FÜR WEN ES GEEIGNET IST */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ist dieses Angebot das Richtige für Sie?
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Für ernsthafte internationale Käufer, die mehr Klarheit wünschen,
              bevor sie sich für eine Immobilie in Spanien entscheiden.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Käufer von Luxusvillen und Zweitwohnsitzen",
                "Familien, die einen Umzug nach Spanien planen",
                "Ruheständler, die einen neuen Lebensstil planen",
                "Unternehmer und ortsunabhängig arbeitende Professionals",
                "Käufer, die Moraira, Jávea, Altea, Benissa, Calpe und Dénia vergleichen",
                "Käufer, die vor einem Angebot unabhängige Begleitung wünschen",
                "Menschen, die eine private und gezielte Besichtigungserfahrung schätzen",
                "Menschen, die eine Region gerne mit gleichgesinnten zukünftigen Bewohnern entdecken",
                "Internationale Käufer, für die rechtliche und technische Prüfungen ernst genommen werden müssen",
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

        {/* FAQ */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Häufig gestellte Fragen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Fragen zu privaten Buyer Tours, Discovery Trips in der Gruppe und
                zum Immobilienkauf an der Costa Blanca Nord.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question: "Beginne ich direkt mit Immobilieninseraten?",
                  answer:
                    "Nein. Wir beginnen mit Ihrem persönlichen Area Match Report und einem individuellen Beratungsgespräch. Erst danach recherchieren wir eine gezielte Auswahl von bis zu 10 Immobilien, die zu Ihrer Region, Ihrem Budget, Ihren Immobilienwünschen und Ihrem Lebensstil passen.",
                },
                {
                  question: "Bieten Sie Videotouren an, bevor ich nach Spanien reise?",
                  answer:
                    "Wenn geeignetes Videomaterial verfügbar ist, nutzen wir es, damit Sie die vorausgewählten Immobilien bereits vor Ihrer Reise besser einschätzen können. Ziel ist es, unnötige Besichtigungen zu vermeiden und Ihren Aufenthalt gezielter zu gestalten.",
                },
                {
                  question: "Kann ich eine private Tour statt einer Gruppenreise wählen?",
                  answer:
                    "Ja. Sie können eine private Buyer Tour wählen, die sich an Ihrer eigenen Immobilienauswahl und Ihrem Zeitplan orientiert, oder an einem sorgfältig zusammengestellten Discovery Trip in kleiner Gruppe mit gemeinsamen Regionsbesuchen und Lifestyle-Erlebnissen teilnehmen.",
                },
                {
                  question: "Was passiert bei einem Discovery Trip in kleiner Gruppe?",
                  answer:
                    "Sie verbinden relevante Immobilienbesichtigungen und das Kennenlernen der Region mit ausgewählten Expertengesprächen und lokalen Erlebnissen. Die Aktivitäten werden im Voraus besprochen und passend zu den Interessen der Teilnehmer ausgewählt.",
                },
                {
                  question: "Können Sie bei Transport und Unterkunft helfen?",
                  answer:
                    "Ja. Je nach Tour können wir lokalen Transport, Transfers und eine geeignete Unterkunft koordinieren, damit die praktische Organisation optimal zum Besichtigungsprogramm passt.",
                },
                {
                  question: "Erhalten Sie eine Provision vom Verkäufer?",
                  answer:
                    "Nordic Move Spain arbeitet auf der Seite des Käufers und ist nicht darauf angewiesen, dass ein Verkäufer uns eine Verkaufsprovision zahlt, damit wir Sie zu einer bestimmten Immobilie lenken. Unsere Aufgabe ist es, mit Ihnen zu beurteilen, was passt, und bei Bedarf die nächsten unabhängigen Prüfungen zu koordinieren.",
                },
                {
                  question: "Sind Sie auf die Angebote eines einzelnen Maklers beschränkt?",
                  answer:
                    "Nein. Da unsere Suche vom Käufer ausgeht und nicht an das Portfolio eines Verkäufers gebunden ist, können wir mehrere Makler, Bauträger und lokale Kontakte ansprechen. Über unser Netzwerk erhalten wir zudem Zugang zu exklusiven Angeboten, Off-Market-Chancen und Immobilien, die bereits vor der öffentlichen Vermarktung geteilt werden. Welche Möglichkeiten verfügbar sind, hängt jedoch immer vom aktuellen Markt ab.",
                },
                {
                  question: "Wer führt die rechtlichen und technischen Prüfungen durch?",
                  answer:
                    "Die formelle rechtliche Due Diligence wird von einem unabhängigen Immobilienanwalt durchgeführt. Gebäudeprüfungen oder technische Untersuchungen übernimmt ein unabhängiger Bausachverständiger oder technischer Fachmann. Jeder Spezialist ist für seine eigene Beratung und seinen eigenen Bericht verantwortlich.",
                },
                {
                  question: "Was passiert, wenn eine Immobilie die Prüfungen nicht besteht?",
                  answer:
                    "Ziel der unabhängigen Prüfungen ist es, Risiken zu verstehen, bevor Sie sich festlegen. Je nach Ergebnis kann der richtige nächste Schritt eine weitere Untersuchung, eine Nachverhandlung oder die Entscheidung sein, den Kauf nicht fortzusetzen.",
                },
              ].map((item) => (
                <div key={item.question} className="rounded-[28px] bg-white p-8 shadow-sm">
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
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
              Starten Sie mit Ihrem Area Match
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
              Die beste Immobiliensuche beginnt mit der Frage, wo Ihr Leben in
              Spanien wirklich funktionieren soll.
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
              Beginnen Sie mit Ihrem persönlichen Area Match Report. Danach schärfen wir
              Ihr Suchprofil, erstellen eine gezielte Auswahl und helfen Ihnen, die private
              oder gemeinsame Besichtigungsform zu wählen, die am besten zu Ihnen passt.
            </p>

            <a
              href="/de/contact"
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Besprechen Sie Ihren Kaufplan mit uns
            </a>
          </div>
        </section>
      </main>
    </>
  );
}