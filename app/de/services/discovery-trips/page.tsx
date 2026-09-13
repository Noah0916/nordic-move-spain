export const metadata = {
  title:
    "Buyer Discovery Reise & private Immobilientour Costa Blanca Nord | Nordic Move Spain",
  description:
    "Private Buyer Discovery Reise an der Costa Blanca Nord: Küste und Hinterland vergleichen, ausgewählte Villen besichtigen, unabhängige Experten kennenlernen und das lokale Leben vor dem Kauf erleben.",
  keywords: [
    "Buyer Discovery Reise Costa Blanca Nord",
    "private Immobilientour Costa Blanca",
    "private Besichtigungstour Spanien",
    "Immobilienreise Spanien",
    "Hausbesichtigung Spanien",
    "Immobilie kaufen Costa Blanca Nord",
    "Luxusvilla kaufen Costa Blanca Nord",
    "Villa kaufen Moraira",
    "Villa kaufen Jávea",
    "Immobilie kaufen Altea",
    "Immobilie kaufen Benissa",
    "Area Match Spanien",
    "unabhängige Käuferbegleitung Spanien",
    "Käuferberatung Costa Blanca",
    "Due Diligence Immobilie Spanien",
    "Umzug Costa Blanca",
    "Vall de Pop Immobilientour",
    "Jalón Llíber Immobilientour",
    "Costa Blanca Orientierungsreise",
    "Costa Blanca Lifestyle Reise",
  ],
  alternates: {
    canonical: "/de/services/discovery-trips",
  },
  openGraph: {
    title:
      "Buyer Discovery Reise & private Immobilientour Costa Blanca Nord | Nordic Move Spain",
    description:
      "Nicht nur Villen besichtigen: Küste und Hinterland vergleichen, in unterschiedlichen Lagen übernachten, unabhängige Fachleute kennenlernen und den Alltag erleben, bevor Sie entscheiden, wo Sie kaufen.",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/discover-card.png",
        width: 1200,
        height: 630,
        alt: "Private Buyer Discovery Reise an der Costa Blanca Nord",
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
  name: "Buyer Discovery Reisen und private Käufertouren an der Costa Blanca Nord",
  description:
    "Käuferorientierte Discovery Reise für internationale Immobilienkäufer an der Costa Blanca Nord mit Area Match, ausgewählten Immobilienbesichtigungen, kontrastreichen Aufenthalten an Küste und im Hinterland, lokalen Lifestyle-Erlebnissen, Vorstellungen bei unabhängigen Fachleuten und koordinierter lokaler Logistik.",
  provider: {
    "@type": "Organization",
    name: "Nordic Move Spain",
  },
  areaServed: [
    "Costa Blanca North",
    "Moraira",
    "Jávea",
    "Javea",
    "Altea",
    "Benissa",
    "Calpe",
    "Dénia",
    "Denia",
    "Jalón",
    "Xaló",
    "Llíber",
    "Vall de Pop",
  ],
  audience: {
    "@type": "Audience",
    audienceType:
      "Internationale Immobilienkäufer, Zweitwohnsitzkäufer, Familien mit Umzugsplänen, Unternehmer, Ruheständler und Käufer von Luxusvillen",
  },
};

const journeySteps = [
  {
    number: "01",
    title: "Start mit Ihrem Area Match",
    text: "Wir nutzen Ihren Lebensstil, Ihre Prioritäten, praktischen Bedürfnisse, Ihr Budget und Ihre langfristigen Pläne, um die Gebiete zu identifizieren, die für Sie wirklich relevant sind.",
  },
  {
    number: "02",
    title: "Ihr Käuferprofil verfeinern",
    text: "In einem persönlichen Gespräch konkretisieren wir Immobilienwünsche, Familiensituation, Zeitplan, Alltag, soziale Präferenzen und Ihre absoluten Muss-Kriterien.",
  },
  {
    number: "03",
    title: "Die passenden Immobilien auswählen",
    text: "Wir recherchieren eine fokussierte Auswahl von bis zu 10 relevanten Immobilien über mehrere Makler und unser lokales Netzwerk, inklusive Videomaterial, sofern verfügbar.",
  },
  {
    number: "04",
    title: "Ihre Discovery Route zusammenstellen",
    text: "Ihre Route verbindet genau die Orte, Immobilien, Unterkünfte, Menschen und Aktivitäten, die Ihnen helfen, Ihr mögliches zukünftiges Leben realistisch zu prüfen.",
  },
  {
    number: "05",
    title: "Erleben und vergleichen",
    text: "Sie besichtigen nicht nur Villen, sondern vergleichen Küste und Hinterland, Dienstleistungen, Atmosphäre, soziales Leben, Fahrzeiten und Freizeitmöglichkeiten.",
  },
  {
    number: "06",
    title: "Die richtigen Fachleute kennenlernen",
    text: "Wenn es zu Ihrer Kaufphase passt, stellen wir unabhängige Fachleute vor, damit Sie den rechtlichen und technischen Kaufprozess verstehen, bevor Sie eine große Entscheidung treffen.",
  },
];

const lifestyleOptions = [
  "Weinverkostung und Bodega-Besuche im Vall de Pop",
  "Golfplatz- oder Clubbesuch",
  "Padel- oder Tennis-Einführung",
  "Segeln, Marina- oder Yachterlebnis",
  "Lokale Gastronomie und lange Mittagessen",
  "Historische Altstädte und Dörfer",
  "Märkte, Boutiquen und Alltagseinkäufe",
  "Wandern, Radfahren oder Natur",
  "Wellness, Spa oder Fitness",
  "Schulen, Gesundheitsversorgung und praktische Infrastruktur",
  "Geschäftliche und berufliche Kontakte",
  "Soziale Clubs und lokale Gemeinschaften",
];

const regions = [
  {
    name: "Moraira",
    text: "Gehobenes Leben an der Küste mit Buchten, Restaurants und Villenvierteln in einer internationalen, aber entspannten Atmosphäre.",
  },
  {
    name: "Jávea",
    text: "Eine vielseitige Mischung aus Stränden, Altstadt, internationalen Schulen, Sport, Restaurants und ganzjährigem Leben.",
  },
  {
    name: "Altea",
    text: "Mediterraner Charakter, Kultur, Hanglagen mit Meerblick, anspruchsvolle Gastronomie und eine künstlerisch geprägte Altstadt.",
  },
  {
    name: "Benissa",
    text: "Eine Mischung aus Küste, Landschaft, Privatsphäre und größeren Grundstücken mit Zugang sowohl zum traditionellen Spanien als auch zum Meer.",
  },
  {
    name: "Dénia",
    text: "Eine echte Ganzjahresstadt mit Gastronomie, Hafenleben, täglichen Dienstleistungen, Einkaufsmöglichkeiten und guter regionaler Anbindung.",
  },
  {
    name: "Calpe",
    text: "Ein aktiver Küstenort mit Stränden, Marina, Neubauprojekten, Restaurants und einem urbaneren mediterranen Lebensgefühl.",
  },
  {
    name: "Vall de Pop · Jalón · Llíber",
    text: "Leben im Hinterland zwischen Weinbergen, Bergen und traditionellen Dörfern, mit größeren Grundstücken, Ruhe und einem völlig anderen Rhythmus als an der Küste.",
  },
];

const professionals = [
  "Unabhängiger Immobilienanwalt",
  "Unabhängiger Bausachverständiger oder technischer Inspektor",
  "Hypotheken- oder Finanzierungsspezialist",
  "Bankkontakt",
  "Versicherungsspezialist",
  "Kontakte für Umzug und Aufenthaltsfragen",
  "Renovierungs- oder Bauspezialist, falls relevant",
  "Weitere Fachleute passend zu Ihrer Immobilie oder Ihren Plänen",
];

const faqItems = [
  {
    question: "Ist das nur eine Immobilien-Besichtigungsreise?",
    answer:
      "Nein. Immobilienbesichtigungen sind nur ein Teil der Reise. Ziel ist es, Gebiete, Lebensstile, praktische Realitäten, Menschen und ausgewählte Häuser miteinander zu vergleichen, damit Sie beurteilen können, wo Ihr Leben in Spanien wirklich funktionieren könnte.",
  },
  {
    question: "Beginne ich mit dem Area Match?",
    answer:
      "Ja. Ihr Area Match und das persönliche Gespräch liefern uns die Informationen, die wir benötigen, um eine wirklich relevante Route zusammenzustellen statt einer allgemeinen Standardtour.",
  },
  {
    question: "Wie viele Immobilien werden vorausgewählt?",
    answer:
      "Wir können vor Ihrer Reise eine fokussierte Auswahl von bis zu 10 passenden Immobilien vorbereiten. Wenn geeignetes Videomaterial verfügbar ist, nutzen wir es, um unnötige Besichtigungen vor Ort zu reduzieren.",
  },
  {
    question: "Kann die Reise sowohl Küste als auch Hinterland umfassen?",
    answer:
      "Ja. Gerade der Vergleich sehr unterschiedlicher Lagen kann besonders wertvoll sein. Abhängig von Ihrem Area Match und Ihren Prioritäten kann Ihre Route Küstenorte mit dem Vall de Pop oder anderen Inlandlagen verbinden.",
  },
  {
    question: "Ist die Unterkunft Teil des Discovery Konzepts?",
    answer:
      "Die Unterkunft kann bewusst so ausgewählt werden, dass Sie unterschiedliche Versionen des Lebens in der Region erleben. Je nach Route und Verfügbarkeit kann das eine Finca oder Landunterkunft im Inland, ein Vier- oder Fünf-Sterne-Hotel an der Küste und ein Aufenthalt in einem weiteren ernsthaft in Frage kommenden Gebiet umfassen.",
  },
  {
    question: "Können die Aktivitäten auf uns zugeschnitten werden?",
    answer:
      "Ja. Aktivitäten werden nach Relevanz ausgewählt und nicht nur zur Unterhaltung. Je nach Interessen kann das Wein, Golf, Padel, Segeln, Gastronomie, Wandern, lokale Kultur, Schulen, Business-Networking oder Kontakte zu Gemeinschaften umfassen.",
  },
  {
    question: "Können wir Menschen kennenlernen, die bereits dort leben?",
    answer:
      "Wenn passende Kontakte verfügbar sind, können wir relevante Vorstellungen bei lokalen Bewohnern, internationalen Gemeinschaften, sozialen Clubs oder beruflichen Kontakten ermöglichen. Ziel ist es, die soziale Seite des Lebens vor Ort besser zu verstehen; eine bestimmte Freundschaft oder Geschäftsbeziehung kann natürlich nicht garantiert werden.",
  },
  {
    question: "Wer übernimmt die rechtlichen und technischen Prüfungen?",
    answer:
      "Die formelle rechtliche Due Diligence wird von einem unabhängigen Immobilienanwalt durchgeführt. Gebäudeinspektionen und technische Untersuchungen erfolgen durch einen unabhängigen Sachverständigen oder qualifizierten technischen Fachmann. Jeder Spezialist bleibt für seine eigene Beratung und seinen Bericht verantwortlich.",
  },
  {
    question: "Können Transport und lokale Logistik organisiert werden?",
    answer:
      "Je nach Route kann ein lokaler Destination-Management-Partner praktische Elemente wie Transfers, privaten Fahrer, lokale Reisebegleitung, Unterkünfte und ausgewählte Erlebnisse koordinieren. Verfügbarkeit und genaue Leistungen werden vor der Reise bestätigt.",
  },
  {
    question: "Kann ich privat reisen statt an einer Gruppe teilzunehmen?",
    answer:
      "Ja. Eine private Buyer Discovery Journey bietet maximale Flexibilität. Zusätzlich können an ausgewählten Terminen kleine, sorgfältig zusammengestellte Gruppen angeboten werden, wenn Interessen und Phase der Kaufentscheidung gut zueinander passen.",
  },
];

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

      <main className="overflow-hidden bg-[#f6f1ea] text-stone-900">
        {/* HERO */}
        <section className="relative min-h-[90vh] overflow-hidden">
          <img
            src="/images/discover-card.png"
            alt="Private Buyer Discovery Reise an der Costa Blanca Nord"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15" />

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Private Buyer Discovery Journeys · Costa Blanca Nord
              </p>

              <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
                Besichtigen Sie nicht nur Villen.
                <span className="mt-2 block">
                  Erleben Sie das Leben rundherum.
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                Eine persönliche Discovery Reise, aufgebaut auf Ihrem Area Match.
                Vergleichen Sie Küste und Hinterland, wohnen Sie in unterschiedlichen
                Lagen, besichtigen Sie sorgfältig ausgewählte Immobilien, erleben
                Sie den Alltag vor Ort und lernen Sie unabhängige Fachleute kennen,
                die einen fundierten Kaufprozess unterstützen können.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75">
                Denn die Entscheidung für ein Haus im Wert von 1, 2 Millionen Euro
                oder mehr in Spanien ist nicht nur eine Immobilienentscheidung.
                Es geht darum, wo Ihr Alltag, Ihre Beziehungen, Ihre Routinen und
                Ihre Zukunft funktionieren sollen.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/de/contact"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Ihre Discovery Reise besprechen
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

        {/* POSITIONING STRIP */}
        <section className="border-b border-stone-200/70 bg-white/80 px-8 py-6">
          <div className="mx-auto grid max-w-7xl gap-4 text-center text-sm font-medium text-[#1e2a3a] md:grid-cols-3">
            <p>Immobilie, Lage und Lebensstil gemeinsam vergleichen</p>
            <p>Küsten- und Inlandleben persönlich erleben</p>
            <p>Unabhängige Fachleute vor einer großen Entscheidung kennenlernen</p>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Mehr als eine Besichtigungsreise
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Machen Sie den Schritt kleiner, bevor die Entscheidung größer wird.
                </h2>
              </div>

              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Für viele internationale Käufer kann ein Immobilienkauf in Spanien
                  wie ein großer Sprung wirken. Die Entfernung ist real, der
                  Kaufprozess ist ungewohnt und attraktive Online-Inserate zeigen
                  selten, wie sich ein Ort an einem ganz normalen Dienstagmorgen
                  tatsächlich anfühlt.
                </p>

                <p className="mt-6">
                  Deshalb behandelt Nordic Move Spain Ihren Besuch nicht als eine
                  Aneinanderreihung von Immobilienbesichtigungen. Wir nutzen Ihr
                  Area Match, Ihr persönliches Profil und Ihre vorausgewählten
                  Immobilien, um eine Reise zu gestalten, auf der Sie verschiedene
                  Versionen des Lebens an der Costa Blanca Nord wirklich testen können.
                </p>

                <p className="mt-6 font-medium text-[#1e2a3a]">
                  Wir organisieren nicht einfach eine Immobilien-Besichtigungstour.
                  Wir helfen Ihnen zu prüfen, ob Ort, Immobilie und Lebensstil
                  wirklich zusammenpassen, bevor Sie eine große Entscheidung treffen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ihre Discovery Reise
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Ihr Area Match wird zu einer realen Reiseroute.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {journeySteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[28px] bg-[#f6f1ea] p-7"
                >
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

        {/* EXAMPLE ITINERARY */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Unterschiedliche Lebenswelten erleben
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Entscheiden Sie nicht anhand von Fotos zwischen Küste und Hinterland.
                Erleben Sie beides.
              </h2>

              <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
                Jede Discovery Reise wird nach Ihrem Profil und der Verfügbarkeit
                aufgebaut. Ein viertägiger Aufenthalt kann Sie bewusst in
                unterschiedliche Umgebungen führen, damit der Vergleich wirklich
                spürbar wird.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
              {[
                {
                  label: "Nacht 1",
                  title: "Finca-Aufenthalt im Vall de Pop",
                  text: "Wachen Sie zwischen Weinbergen und Bergen auf und erleben Sie Raum, Ruhe und den langsameren Rhythmus rund um Jalón, Llíber oder das weitere Tal.",
                },
                {
                  label: "Nacht 2",
                  title: "Vier- oder Fünf-Sterne-Hotel an der Küste",
                  text: "Erleben Sie die Küstenseite: Meer, Restaurants, Marina, kurze Wege und die Atmosphäre eines hochwertigen mediterranen Standorts.",
                },
                {
                  label: "Nächte 3–4",
                  title: "Aufenthalt in einem weiteren Favoriten",
                  text: "Verbringen Sie echte Zeit in einem zweiten Gebiet aus Ihrem Area Match und vergleichen Sie, wie sich der Alltag anfühlt, wenn der erste Eindruck nachlässt.",
                },
                {
                  label: "Während der Reise",
                  title: "Ausgewählte Villen und Wohnlagen",
                  text: "Besichtigen Sie nur Immobilien und Lagen, die wirklich zu Ihrem Profil passen, statt die Tage mit beliebigen Terminen zu füllen.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[32px] bg-white p-8 shadow-sm"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                    {item.label}
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

            <p className="mt-8 max-w-4xl text-sm leading-relaxed text-stone-500">
              Unterkunft, Route und genaue Leistungen hängen von Ihrem Area Match,
              den Reisedaten, der Verfügbarkeit und dem Ziel Ihrer Reise ab.
            </p>
          </div>
        </section>

        {/* LIFESTYLE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ihre Interessen prägen das Erlebnis
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
              Erleben Sie, wie Ihr Alltag zwischen den Besichtigungen aussehen könnte.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/80">
              Wer vom Segeln träumt, muss eine Marina anders erleben als jemand,
              der Weinberge, Golf, Padel, internationale Schulen, ein berufliches
              Netzwerk oder lange Mittagessen in einer historischen Altstadt sucht.
              Ihre Präferenzen bestimmen, was auf der Reise wirklich relevant ist.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {lifestyleOptions.map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm font-medium leading-relaxed text-white/90">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-base leading-relaxed text-white/65">
              Aktivitäten werden danach ausgewählt, ob sie Ihnen helfen, das Gebiet
              und Ihr mögliches Alltagsleben besser zu verstehen. Sie sind nicht bei
              jeder Reise gleich und bleiben von Zeitplan und Verfügbarkeit abhängig.
            </p>
          </div>
        </section>

        {/* PEOPLE */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[40px] bg-white p-10 shadow-sm lg:p-12">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Lernen Sie mehr als nur Makler kennen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Zu einem neuen Leben gehören auch die richtigen Menschen.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-600">
                Je nach Ihren Interessen und verfügbaren Kontakten kann Ihre Reise
                Begegnungen beinhalten, die Ihnen die soziale Seite eines Umzugs
                näherbringen: lokale Bewohner, internationale Gemeinschaften,
                Vereine, Unternehmer, Fachleute oder Menschen mit ähnlichen
                sportlichen und persönlichen Interessen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Für einen Käufer kann das ein möglicher Geschäftskontakt sein.
                Für einen anderen ein Golfclub, eine Padel-Gruppe, ein Segelnetzwerk
                oder ein lokaler Verein, in dem er sich langfristig zuhause fühlen könnte.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-stone-500">
                Vorstellungen hängen von Relevanz und Verfügbarkeit ab und sollen
                lokale Einblicke vermitteln. Eine bestimmte persönliche oder
                geschäftliche Beziehung kann nicht garantiert werden.
              </p>
            </div>

            <div className="rounded-[40px] bg-[#e9dfd2] p-10 lg:p-12">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Lernen Sie Fachleute kennen, bevor Sie sie brauchen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Verstehen Sie, wie ein Kauf geprüft werden kann, bevor Sie sich festlegen.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-600">
                Wenn es zu Ihrer Phase der Kaufentscheidung passt, können wir
                unabhängige Fachleute vorstellen. So wissen Sie frühzeitig, wer
                beteiligt sein kann, was geprüft wird und wo die jeweilige
                Verantwortung beginnt.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {professionals.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/80 p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                Formelle rechtliche Due Diligence und technische Prüfungen werden
                von den jeweils zuständigen unabhängigen Fachleuten durchgeführt.
                Nordic Move Spain koordiniert die Reise, ersetzt aber keine
                regulierte rechtliche, technische, finanzielle oder
                bewertungsbezogene Beratung.
              </p>
            </div>
          </div>
        </section>

        {/* PRIVATE VS GROUP */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Privat oder sorgfältig zusammengestellt
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Wählen Sie das Format, mit dem Sie sich am wohlsten fühlen.
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[40px] bg-white p-10 shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  Private Buyer Discovery Journey
                </p>
                <h3 className="mt-4 font-serif text-4xl text-[#1e2a3a]">
                  Ihre Route, Ihre Auswahl, Ihr Tempo.
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Das Programm wird vollständig auf Ihr Area Match, die ausgewählten
                  Immobilien, Ihre praktischen Fragen und Ihren gewünschten
                  Lebensstil abgestimmt. Ideal, wenn Privatsphäre, Flexibilität und
                  persönliche Begleitung im Vordergrund stehen.
                </p>
              </div>

              <div className="rounded-[40px] bg-[#1e2a3a] p-10 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  Kuratierte Kleingruppen-Reise
                </p>
                <h3 className="mt-4 font-serif text-4xl">
                  Entdecken Sie die Region mit Käufern in einer ähnlichen Lebensphase.
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  An ausgewählten Terminen können wir eine kleine Anzahl von Käufern
                  mit passenden Interessen oder Plänen zusammenbringen. Immobilien-
                  und Gebietsbesichtigungen bleiben relevant und individuell,
                  während ausgewählte Mahlzeiten, Aktivitäten und lokale Erlebnisse
                  gemeinsam stattfinden können.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DMC / LOGISTICS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Lokale Logistik professionell koordiniert
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Weniger organisieren. Mehr herausfinden, ob Spanien wirklich zu Ihnen passt.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Je nach Reise kann ein lokaler Destination-Management-Partner
                  Unterkunft, Transfers, privaten Fahrer, lokale Begleitung und
                  ausgewählte Erlebnisse rund um Ihren Besichtigungsplan koordinieren.
                </p>

                <p>
                  So müssen Sie Ihre begrenzte Zeit in Spanien nicht mit der
                  Organisation zwischen einzelnen Terminen verbringen. Die
                  praktischen Bausteine werden um ein Ziel herum zusammengeführt:
                  Gebiete, Immobilien und Lebensstile mit klarem Kopf zu vergleichen.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Flughafen- oder lokale Transfers",
                  "Privater Fahrer, sofern vereinbart",
                  "Lokaler Guide, wenn sinnvoll",
                  "Koordination der Unterkünfte",
                  "Immobilien-Besichtigungsplan",
                  "Gebiets- und Viertelbesuche",
                  "Lifestyle-Aktivitäten",
                  "Restaurant- und lokale Empfehlungen",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BUYER SIDE + MARKET */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Von Anfang an käuferorientiert
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Wir beginnen mit Ihrem Leben und Ihrem Suchprofil, nicht mit dem
              Portfolio eines einzelnen Maklers.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Nordic Move Spain arbeitet aus Käufersicht. Wir können mehrere
                  Makler, Projektentwickler und lokale Immobilienkontakte an der
                  Costa Blanca Nord ansprechen, statt Ihre Suche auf ein einzelnes
                  Portfolio zu beschränken.
                </p>

                <p>
                  Über unser lokales Netzwerk können außerdem exklusive,
                  Off-Market- oder Pre-Market-Möglichkeiten auftauchen, wenn sie
                  verfügbar sind. Das bedeutet nicht, dass jede passende Immobilie
                  außerhalb des öffentlichen Marktes liegt. Es bedeutet, dass Ihre
                  Suche breiter und von Ihren Kriterien bestimmt ist.
                </p>

                <p>
                  Wenn ein Gebiet nicht zu Ihrem Profil passt, sagen wir das.
                  Wenn eine Immobilie praktische, technische, rechtliche oder
                  Lifestyle-Fragen aufwirft, kann der richtige nächste Schritt
                  weitere Prüfung, Nachverhandlung oder auch ein Verzicht sein.
                </p>
              </div>

              <div className="rounded-[32px] bg-white/80 p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Was das in der Praxis bedeutet
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Suche über mehrere Makler und lokale Kontakte",
                    "Fokussierte Auswahl auf Basis Ihres Area Match",
                    "Keine Reise voller irrelevanter Besichtigungen",
                    "Unabhängige rechtliche und technische Fachleute, wenn erforderlich",
                    "Zeit zum Vergleichen, bevor Sie ein Angebot machen",
                    "Klare Grundlage zum Weitergehen, Nachverhandeln oder Weitersuchen",
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

        {/* REGIONS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Vergleichen Sie, wie sich die Gebiete wirklich anfühlen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Auch die schönste Villa gleicht die falsche Lage nicht aus.
              </h2>

              <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
                Wir helfen Ihnen, genau die Details zu vergleichen, die in
                Immobilienanzeigen kaum sichtbar werden: Atmosphäre, Winterleben,
                Restaurants, Gesundheitsversorgung, Einkaufsmöglichkeiten, Schulen,
                soziales Leben, Sport, Marina-Zugang, Straßenlage, Privatsphäre,
                Flughafenanbindung und den tatsächlichen Fahrbedarf im Alltag.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="rounded-[32px] bg-white p-8 shadow-sm"
                >
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

        {/* AFTER */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Was Sie am Ende wissen sollten
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Klarheit über das Leben, nicht nur Begeisterung für ein Haus.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Welche Küsten- oder Inlandgebiete wirklich zu Ihrem Lebensstil passen",
                "Welche Orte online attraktiv wirkten, sich vor Ort aber falsch anfühlen",
                "Welche vorausgewählten Villen nach der Besichtigung realistisch bleiben",
                "Wie viel Fahrt, Erreichbarkeit und Organisation der Alltag in jedem Gebiet erfordert",
                "Wo Sie sich sozial und beruflich am wohlsten fühlen",
                "Welche rechtlichen oder technischen Fragen noch unabhängig geprüft werden müssen",
                "Ob Sie bereit sind weiterzugehen, weiterzusuchen oder neu zu überlegen",
                "Wer die nächste Phase unterstützen kann, wenn Sie kaufen und umziehen möchten",
              ].map((item) => (
                <div key={item} className="rounded-[28px] bg-white p-7 shadow-sm">
                  <p className="text-lg leading-relaxed text-stone-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO FOR */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Für wen ist diese Reise gedacht?
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Für internationale Käufer, die mehr brauchen als eine Liste mit Immobilien.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Käufer von Luxusvillen und Zweitwohnsitzen",
                "Deutsche Käufer, die mehrere Regionen vergleichen",
                "Internationale Käufer mit größerer Anreise",
                "Familien, die einen Umzug nach Spanien erwägen",
                "Ruheständler, die einen neuen Lebensstil planen",
                "Unternehmer und Remote Professionals",
                "Käufer, die zwischen Küste und Hinterland schwanken",
                "Menschen, denen unabhängige rechtliche und technische Prüfungen wichtig sind",
                "Käufer, die das soziale Umfeld vor einer Entscheidung verstehen möchten",
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
                Fragen zur Buyer Discovery Journey.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-[28px] bg-white p-8 shadow-sm"
                >
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
              Erleben Sie Ihre mögliche Zukunft, bevor Sie sich entscheiden
            </p>

            <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
              Sie wählen nicht nur eine Villa.
              <span className="mt-2 block">
                Sie wählen das Leben rundherum.
              </span>
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
              Starten Sie mit Ihrem Area Match, verfeinern Sie Ihr Suchprofil und
              lassen Sie uns eine Discovery Reise rund um die Gebiete, Immobilien,
              Menschen und Erlebnisse gestalten, die für Sie wirklich relevant sind.
            </p>

            <a
              href="/de/contact"
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Ihre Discovery Reise besprechen
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
