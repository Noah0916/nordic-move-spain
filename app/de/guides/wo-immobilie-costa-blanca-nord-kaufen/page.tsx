export const metadata = {
  title: "Wo Immobilien an der Costa Blanca Nord kaufen | Beste Gebiete",
  description:
    "Entdecken Sie, wo Sie an der Costa Blanca Nord eine Immobilie kaufen sollten. Vergleichen Sie Moraira, Jávea, Altea, Benissa, Calpe und Dénia nach Lebensstil, Immobilientyp, Familien, Ruheständlern und internationalen Käufern.",
};

export default function WhereToBuyCostaBlancaNorthPage() {
  const areas = [
    {
      name: "Moraira",
      href: "/de/regions/moraira",
      bestFor: "Ruhiges Küstenleben, Villen, Privatsphäre und eine gehobene internationale Atmosphäre",
      summary:
        "Moraira passt oft gut zu Käufern, die einen eleganten, ruhigeren Küstenlebensstil mit Villen, Buchten, Restaurants und einem wohnlicheren Gefühl als in größeren Badeorten suchen.",
    },
    {
      name: "Jávea",
      href: "/de/regions/javea",
      bestFor: "Familien, aktive Käufer, Strände, Sport und ganzjähriges internationales Leben",
      summary:
        "Jávea passt zu Käufern, die mehr Energie, eine größere internationale Gemeinschaft, Strände, Restaurants, Sport, Schulen in der Nähe und mehrere Lebensstilzonen zum Vergleichen wünschen.",
    },
    {
      name: "Altea",
      href: "/de/regions/altea",
      bestFor: "Künstlerischer Charme, Meerblick, Kultur, Eleganz und ein langsamerer mediterraner Rhythmus",
      summary:
        "Altea ist attraktiv für Käufer, die Schönheit, Altstadtatmosphäre, Restaurants, Kultur, Meerblick und ein gehobenes mediterranes Umfeld schätzen.",
    },
    {
      name: "Benissa",
      href: "/de/regions/benissa",
      bestFor: "Raum, Privatsphäre, ländliches Wohnen, authentisches Spanien und versteckte Buchten",
      summary:
        "Benissa eignet sich gut für Käufer, die mehr Grundstück, Privatsphäre, ländlichen Charme und Zugang zu Küstenbuchten wünschen, ohne in einem lebhaften Ferienort zu wohnen.",
    },
    {
      name: "Calpe",
      href: "/de/regions/calpe",
      bestFor: "Apartments, Wohnen direkt am Strand, Neubauprojekte, Yachthafenleben und Komfort",
      summary:
        "Calpe ist eine starke Option für Käufer, die Strände, Meerblick, Restaurants, Apartments, neuere Gebäude und eine aktivere Küstenatmosphäre wünschen.",
    },
    {
      name: "Dénia",
      href: "/de/regions/denia",
      bestFor: "Ganzjähriges Stadtleben, Gastronomie, Hafen, Dienstleistungen, Strände und täglicher Komfort",
      summary:
        "Dénia passt zu Käufern, die eine echte, lebendige Küstenstadt mit Restaurants, lokalen Dienstleistungen, Stränden, Hafenleben, Kultur und stärkerer ganzjähriger Aktivität suchen.",
    },
  ];

  const buyerTypes = [
    {
      title: "Am besten für Familien",
      text:
        "Jávea und Dénia sind für Familien oft praktische Ausgangspunkte, weil sie mehr ganzjährige Dienstleistungen, Aktivitäten und Schulmöglichkeiten in der Nähe bieten. Moraira und Benissa können ebenfalls zu Familien passen, die Ruhe, Raum und Villenleben priorisieren.",
    },
    {
      title: "Am besten für Ruheständler",
      text:
        "Moraira, Altea und Dénia sind für Ruheständler oft attraktiv, aber aus unterschiedlichen Gründen. Moraira wirkt ruhig und gehoben, Altea bietet Schönheit und Kultur, und Dénia bietet mehr täglichen Komfort und ganzjähriges Stadtleben.",
    },
    {
      title: "Am besten für Apartments und Neubauimmobilien",
      text:
        "Calpe ist meist eine der klarsten Optionen für Käufer, die Apartments, Wohnen direkt am Strand, Meerblick und neuere Entwicklungen suchen. Dénia kann ebenfalls praktische Apartmentoptionen in der Nähe von Dienstleistungen und Stränden bieten.",
    },
    {
      title: "Am besten für Villen und Privatsphäre",
      text:
        "Moraira, Benissa und Teile von Jávea sind oft stärker für Käufer, die freistehende Villen, Privatsphäre, Aussicht und Wohnviertel suchen. Benissa kann ein ländlicheres und großzügigeres Gefühl bieten.",
    },
  ];

  const officialSources = [
    {
      label: "Teulada-Moraira Tourismus",
      href: "https://www.turismoteuladamoraira.com/ttm/Web_php/index.php?contenido=showPois&id=1&idNivel=544&lang=4",
    },
    {
      label: "Xàbia/Jávea - Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/xabia-javea",
    },
    {
      label: "Altea - Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/altea",
    },
    {
      label: "Ökologischer Küstenweg Benissa - Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/benissa/natural-landscapes/paseo-ecologico-litoral-de-benissa",
    },
    {
      label: "Calpe Peñón de Ifach - Tourist Info Calpe",
      href: "https://www.calpe.es/en/discover-calpe/natural-areas/pe%C3%B1on-de-ifach",
    },
    {
      label: "Dénia - Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/denia",
    },
    {
      label: "Dénia - UNESCO Creative Cities Network",
      href: "https://www.unesco.org/en/creative-cities/denia",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Wo Immobilien an der Costa Blanca Nord kaufen"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Nord Ratgeber
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Wo Immobilien an der Costa Blanca Nord kaufen.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              Ein ausführlicher Ratgeber für internationale Käufer, die Moraira,
              Jávea, Altea, Benissa, Calpe und Dénia vergleichen, bevor sie
              entscheiden, wo sie in Spanien ein Zuhause kaufen möchten.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/de/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Area Match anfragen
              </a>

              <a
                href="/de/regions"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Regionen vergleichen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Erst die Umgebung, dann die Immobilie
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Die wichtigste Entscheidung ist nicht immer die Immobilie. Es ist
                die Umgebung darum herum.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Viele internationale Käufer beginnen ihre Suche mit Villen,
                Apartments und Meerblick. Das wirkt logisch, kann aber zur
                falschen Entscheidung führen. Ein schönes Zuhause im falschen Ort
                kann schnell frustrierend werden, wenn Lebensstil,
                Dienstleistungen, Schulen, Fahrzeiten oder Gemeinschaft nicht zum
                Alltag passen.
              </p>

              <p className="mt-6">
                Die Costa Blanca Nord ist nicht ein einziger Lebensstil. Moraira,
                Jávea, Altea, Benissa, Calpe und Dénia ziehen jeweils einen
                anderen Käufertyp an. Manche Gebiete wirken ruhig und wohnlich.
                Andere sind aktiver, urbaner, sozialer, künstlerischer,
                ländlicher oder familienorientierter.
              </p>

              <p className="mt-6">
                Dieser Ratgeber hilft Ihnen, die wichtigsten Gebiete zu
                vergleichen, bevor Sie eine Immobilie an der Costa Blanca Nord
                kaufen, damit Sie verstehen, welcher Ort zu Ihren Zielen, Ihrem
                Budget, Ihrer Familiensituation und Ihren langfristigen Plänen
                passen könnte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Kurzantwort
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Die besten Orte zum Immobilienkauf an der Costa Blanca Nord.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <a
                key={area.name}
                href={area.href}
                className="rounded-[32px] bg-[#f6f1ea] p-8 transition hover:-translate-y-1 hover:bg-[#efe6d9]"
              >
                <h3 className="font-serif text-4xl text-[#1e2a3a]">
                  {area.name}
                </h3>

                <p className="mt-5 text-sm uppercase tracking-[0.22em] text-[#c8a063]">
                  {area.bestFor}
                </p>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {area.summary}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AREA MATTERS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Immobilienkauf in Spanien
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Warum der richtige Ort wichtiger ist als das erste schöne Zuhause.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Wenn Käufer online suchen, wirken viele Immobilien attraktiv:
              Villen mit Meerblick, moderne Apartments, renovierte Stadthäuser
              und Neubauimmobilien. Online-Angebote erklären jedoch selten, wie
              es sich tatsächlich anfühlt, an einem Ort zu leben.
            </p>

            <p className="mt-6">
              Die eigentlichen Fragen sind praktischer. Brauchen Sie jeden Tag
              ein Auto? Ist der Ort im Winter aktiv? Sind Restaurants, Ärzte,
              Schulen und Dienstleistungen in der Nähe? Wirkt das Gebiet
              international oder eher lokal? Ist der Immobilientyp an diesem Ort
              üblich? Ist die Umgebung geeignet für ganzjähriges Wohnen, Urlaub,
              Ruhestand, Familienleben oder Investition?
            </p>

            <p className="mt-6">
              Deshalb empfehlen wir, zuerst die Umgebung zu wählen und erst
              danach die Immobiliensuche einzugrenzen. Sobald die richtige
              Umgebung klar ist, wird die Suche fokussierter, realistischer und
              deutlich weniger stressig.
            </p>
          </div>
        </div>
      </section>

      {/* MORaira */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            01 · Moraira
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Moraira: ruhig, elegant und villaorientiert.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Moraira ist eines der begehrtesten Gebiete für Käufer, die einen
                ruhigeren, gehobenen Küstenlebensstil suchen. Es gehört zu
                Teulada-Moraira, wo der historische Ort Teulada im Landesinneren
                und der Küstenbereich Moraira lokale Geschichte und mediterranes
                Wohnen verbinden.
              </p>

              <p className="mt-6">
                Die offiziellen Tourismusinformationen für Teulada-Moraira heben
                rund 8 Kilometer Küstenlinie hervor, mit Stränden und Buchten,
                die für Wasserqualität und landschaftlich schöne Umgebung bekannt
                sind. Für Immobilienkäufer erklärt diese Küste, warum Moraira
                bei internationalen Käufern beliebt bleibt, die Villen,
                Privatsphäre und eine ruhige Wohnbasis suchen.
              </p>

              <p className="mt-6">
                Moraira ist normalerweise nicht die beste Wahl für Käufer, die
                Stadtgefühl, Nachtleben oder einen großen Apartmentmarkt suchen.
                Es ist stärker für Käufer, die Ruhe, Restaurants, Wohnlagen mit
                Meerblick, Villenleben und eine etablierte internationale
                Gemeinschaft schätzen.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Moraira ist oft am besten geeignet für:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Villenkäufer, die Privatsphäre und eine gehobene Atmosphäre wünschen</li>
                <li>• Ruheständler, die ruhiges Küstenleben suchen</li>
                <li>• Zweitwohnungskäufer, die ein gepflegtes Umfeld wünschen</li>
                <li>• Käufer, die niedrige Bebauung urbaner Dichte vorziehen</li>
                <li>• Menschen, die Restaurants und Buchten ohne Großstadtgefühl wünschen</li>
              </ul>

              <a
                href="/de/regions/moraira"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Moraira entdecken →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* JAVEA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            02 · Jávea
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Jávea: lebendig, international und voller Lebensstilvielfalt.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-white/75">
              <p>
                Jávea, auch Xàbia genannt, ist einer der stärksten
                Lebensstilorte an der Costa Blanca Nord. Der Ort bietet eine
                Mischung aus Strandleben, Restaurants, Sport, Familienaktivität,
                Buchten, internationalen Bewohnern und mehreren unterschiedlichen
                Immobilienzonen.
              </p>

              <p className="mt-6">
                Comunitat Valenciana hebt die Buchten von Xàbia/Jávea hervor,
                darunter Sardinera, Granadella, El Tangó, El Ministro und
                Ambolo, mit klarem Wasser, Klippen und Felsen, die die Küste für
                Tauchen und Aktivitäten am Meer attraktiv machen.
              </p>

              <p className="mt-6">
                Jávea liegt außerdem nahe am Naturpark Montgó. Das offizielle
                Tourismusportal Spaniens beschreibt den Montgó als Kalksteinmassiv
                zwischen Dénia und Jávea, das bis auf 753 Meter ansteigt. Das
                gibt der Gegend eine starke natürliche Identität zusätzlich zur
                Küstenidentität.
              </p>

              <p className="mt-6">
                Für Käufer ist Jávea oft sozialer und aktiver als Moraira oder
                Benissa. Es kann gut zu Familien, aktiven Ruheständlern,
                Remote-Workern und Käufern passen, die Restaurants, Clubs,
                Strände und eine sichtbare internationale Gemeinschaft wünschen.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h3 className="font-serif text-3xl text-white">
                Jávea ist oft am besten geeignet für:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-white/75">
                <li>• Familien, die Schulen und Aktivitäten in der Nähe wünschen</li>
                <li>• Käufer, die eine ganzjährige internationale Atmosphäre suchen</li>
                <li>• Menschen, die Strände, Sport und Restaurants genießen</li>
                <li>• Remote-Worker und Unternehmer</li>
                <li>• Käufer, die Villen, Stadtleben und Küstenbereiche vergleichen</li>
              </ul>

              <a
                href="/de/regions/javea"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Jávea entdecken →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ALTEA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            03 · Altea
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Altea: künstlerisch, landschaftlich schön und ruhig anspruchsvoll.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Altea fühlt sich anders an als viele andere Orte an der Costa
                Blanca Nord. Der Ort ist bekannt für Kultur, Ausblicke,
                Restaurants, weiß getünchte Gassen und eine künstlerischere
                mediterrane Atmosphäre.
              </p>

              <p className="mt-6">
                Comunitat Valenciana beschreibt Alteas Altstadtroute in Richtung
                Plaza de la Iglesia und zur Pfarrkirche Nuestra Señora del
                Consuelo, die für ihre markante blau-weiß keramisch gedeckte
                Kuppel bekannt ist. Diese Altstadtidentität ist einer der
                Hauptgründe, warum Altea Käufer anzieht, die Schönheit,
                Atmosphäre und Charakter schätzen.
              </p>

              <p className="mt-6">
                Altea kann eine gute Wahl für Käufer sein, die etwas
                Anspruchsvolleres als einen Badeort suchen, aber mehr Kultur und
                visuelle Besonderheit wünschen als in einem rein wohnlichen
                Villengebiet.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Altea ist oft am besten geeignet für:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Käufer, die Kultur, Design und Atmosphäre schätzen</li>
                <li>• Menschen, die Meerblick und Altstadtcharme suchen</li>
                <li>• Ruheständler, die Schönheit und Restaurants in der Nähe wünschen</li>
                <li>• Käufer, die Eleganz gegenüber Resort-Energie bevorzugen</li>
                <li>• Zweitwohnungsbesitzer, die ein künstlerischeres Umfeld suchen</li>
              </ul>

              <a
                href="/de/regions/altea"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Altea entdecken →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BENISSA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            04 · Benissa
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Benissa: authentisch, großzügig und nah an versteckten Buchten.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-700">
              <p>
                Benissa ist eines der interessantesten Gebiete für Käufer, die
                mehr Raum, Privatsphäre und Authentizität wünschen. Es verbindet
                einen historischen Ort im Landesinneren, ländliche Gebiete,
                Villenzonen und eine landschaftlich schöne Küste zwischen
                Moraira und Calpe.
              </p>

              <p className="mt-6">
                Die offizielle Tourismusseite der Comunitat Valenciana beschreibt
                den ökologischen Küstenweg von Benissa als Route entlang der 2,5
                Meilen langen Küstenlinie des Ortes, vorbei an Klippen und ruhigen
                Buchten. Auch die offizielle Tourismusseite von Benissa hebt die
                Küste, Buchten und natürliche Umgebung hervor.
              </p>

              <p className="mt-6">
                Benissa ist normalerweise nicht die erste Wahl für Käufer, die
                von einem Apartment zu einer belebten Promenade laufen möchten.
                Es ist stärker für Menschen, die Privatsphäre, Grundstück,
                Aussicht, Landschaft, Authentizität und guten Zugang zu
                benachbarten Orten wünschen.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/70 p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Benissa ist oft am besten geeignet für:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Villenkäufer, die Raum und Privatsphäre wünschen</li>
                <li>• Menschen, die ländlichen Charme Resort-Energie vorziehen</li>
                <li>• Käufer, die Zugang zu Moraira und Calpe wünschen</li>
                <li>• Naturliebhaber und Spaziergänger</li>
                <li>• Familien oder Ruheständler, die eine ruhigere Basis suchen</li>
              </ul>

              <a
                href="/de/regions/benissa"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Benissa entdecken →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CALPE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            05 · Calpe
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Calpe: Wohnen direkt am Strand, Apartments und eine aktivere Atmosphäre.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Calpe ist einer der bekanntesten Orte an der Costa Blanca Nord.
                Es ist urbaner, stärker apartmentorientiert und aktiver als
                ruhigere Gebiete wie Benissa oder Moraira.
              </p>

              <p className="mt-6">
                Die offiziellen Tourismusinformationen von Calpe beschreiben den
                Peñón de Ifach als 50.000 m² großen Kalksteinfelsen, der 332
                Meter über dem Meer aufragt und etwa einen Kilometer ins Meer
                hineinragt. Der Peñón ist eines der bekanntesten natürlichen
                Wahrzeichen der Costa Blanca und prägt die Identität Calpes
                stark.
              </p>

              <p className="mt-6">
                Calpe bietet außerdem Strände, Buchten, Restaurants, einen
                Fischerhafen, Yachthafenleben und eine größere Auswahl an
                Apartments und modernen Gebäuden. Für Käufer, die Meerblick,
                Strandzugang, Komfort und eine unkompliziertere
                Lock-up-and-leave-Immobilie wünschen, kann Calpe gut passen.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Calpe ist oft am besten geeignet für:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Apartmentkäufer und Lock-up-and-leave-Eigentümer</li>
                <li>• Käufer, die Neubauprojekte suchen</li>
                <li>• Menschen, die Strände, Restaurants und Komfort wünschen</li>
                <li>• Vermietungsorientierte Käufer, die bekannte Lagen wünschen</li>
                <li>• Käufer, die eine aktivere Küstenumgebung bevorzugen</li>
              </ul>

              <a
                href="/de/regions/calpe"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Calpe entdecken →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DENIA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            06 · Dénia
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Dénia: ganzjähriges Stadtleben, Gastronomie und täglicher Komfort.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-white/75">
              <p>
                Dénia ist eine der vollständigsten Optionen an der Costa Blanca
                Nord für Käufer, die eine echte Stadt wünschen, nicht nur einen
                Urlaubsort. Dénia bietet Strände, Hafenleben, Restaurants,
                Dienstleistungen, historische Straßen, lokale Aktivität und einen
                stärkeren ganzjährigen Rhythmus.
              </p>

              <p className="mt-6">
                Comunitat Valenciana beschreibt Dénia als UNESCO-Stadt der
                Gastronomie, mit einer Küche auf Basis von frischem Fisch,
                lokalen valencianischen Produkten und Gerichten wie arròs a
                banda, gamba roja und suquet de peix. Auch UNESCO führt Dénia in
                seinem Creative Cities Network für Gastronomie.
              </p>

              <p className="mt-6">
                Dénia ist oft eine starke Option für Käufer, die Komfort,
                Restaurants, Geschäfte, Zugang zu Gesundheitsversorgung,
                Verkehrsanbindungen und Alltag jenseits der Sommersaison
                wünschen. Es wirkt vielleicht weniger exklusiv als Moraira oder
                Altea, ist aber oft praktischer für dauerhaftes Wohnen.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h3 className="font-serif text-3xl text-white">
                Dénia ist oft am besten geeignet für:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-white/75">
                <li>• Käufer, die ganzjähriges Stadtleben wünschen</li>
                <li>• Feinschmecker und Menschen, die lokale Restaurants schätzen</li>
                <li>• Familien, die Dienstleistungen und Aktivitäten in der Nähe wünschen</li>
                <li>• Ruheständler, die Komfort und fußläufige Erreichbarkeit wünschen</li>
                <li>• Käufer, die Stadtzentrum und Strandbereiche vergleichen</li>
              </ul>

              <a
                href="/de/regions/denia"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Dénia entdecken →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BUYER TYPES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Nach Lebensstil wählen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Welches Gebiet an der Costa Blanca Nord passt zu Ihrer Situation?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Das beste Gebiet hängt davon ab, wie Sie leben möchten. Eine
              Familie mit schulpflichtigen Kindern, ein pensioniertes Paar, ein
              Remote-Worker und ein Zweitwohnungskäufer können alle
              unterschiedliche Standorte benötigen, selbst bei gleichem Budget.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {buyerTypes.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white p-9 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO DECIDE */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Wie entscheiden?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Fragen, die Sie stellen sollten, bevor Sie entscheiden, wo Sie kaufen.
            </h2>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <div className="grid gap-5">
              {[
                "Werden Sie ganzjährig, teilweise oder hauptsächlich für Urlaube in Spanien wohnen?",
                "Möchten Sie eine Villa, ein Apartment, ein Stadthaus, einen Neubau oder eine ländliche Immobilie?",
                "Benötigen Sie Schulen, Gesundheitsversorgung, tägliche Dienstleistungen oder öffentliche Verkehrsmittel in der Nähe?",
                "Bevorzugen Sie ein ruhiges Wohnumfeld oder einen sozialeren, aktiveren Ort?",
                "Möchten Sie zu Restaurants und Geschäften laufen können?",
                "Ist Vermietungspotenzial wichtig oder ist die Immobilie hauptsächlich für den privaten Gebrauch gedacht?",
                "Wie wichtig sind Meerblick, Privatsphäre, Grundstück, Strandzugang oder Gemeinschaftsleben?",
                "Möchten Sie vor Ihrem Umzug gleichgesinnte internationale Käufer kennenlernen?",
              ].map((question) => (
                <div key={question} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="leading-relaxed text-stone-700">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Häufiger Käuferfehler
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Verwechseln Sie einen schönen Urlaubsort nicht mit dem richtigen Ort
            zum Leben.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-700">
            <p>
              Ein Ort kann perfekt für eine Sommerwoche sein und trotzdem für
              ganzjähriges Wohnen nicht passen. Manche Gebiete wirken im August
              lebendig, sind im Winter aber ruhig. Manche Immobilien sehen online
              attraktiv aus, liegen aber zu weit von Dienstleistungen entfernt.
              Manche Käufer verlieben sich in eine Aussicht, bevor sie
              Eigentumskosten, Gemeinschaftsregeln, Fahrstrecken, Zugang,
              Renovierungsbedarf oder langfristige Wiederverkaufsattraktivität
              prüfen.
            </p>

            <p className="mt-6">
              Deshalb beginnt unser Ansatz mit Area Match. Wir betrachten zuerst
              Ihren Lebensstil, vergleichen dann die Gebiete und helfen Ihnen
              anschließend, sich auf den Immobilientyp zu konzentrieren, der Ihr
              zukünftiges Leben in Spanien tatsächlich unterstützt.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Area Match anfragen
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Noch unsicher, wo Sie an der Costa Blanca Nord kaufen sollten?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Wir helfen internationalen Käufern, Moraira, Jávea, Altea, Benissa,
            Calpe und Dénia nach Lebensstil, Budget, Familiensituation,
            Immobilienzielen und langfristigen Plänen zu vergleichen.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
            Fordern Sie Ihr Area Match Assessment an und entdecken Sie, welche
            Gebiete zu Ihrem zukünftigen Leben in Spanien passen könnten — und
            welche weniger geeignet sein könnten.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
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
      </section>

      {/* OFFICIAL SOURCES */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Verwendete offizielle Quellen
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Dieser Ratgeber basiert soweit möglich auf offiziellen Tourismus- und
            institutionellen Quellen. Lokale Dienstleistungen, Immobilienmärkte
            und Vorschriften können sich ändern, daher sollten Käufer praktische
            Details vor einer Kaufentscheidung immer überprüfen.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {officialSources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#f6f1ea] p-5 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#efe6d9]"
              >
                {source.label} →
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
