export const metadata = {
  title: "Moraira vs. Jávea | Welche Region ist besser für Käufer?",
  description:
    "Vergleichen Sie Moraira und Jávea beim Immobilienkauf an der Costa Blanca Nord. Entdecken Sie Unterschiede bei Lebensstil, Villen, Familien, Ruhestand, Stränden, Services und internationalen Communities.",
};

export default function MorairaVsJaveaPage() {
  const quickComparison = [
    {
      label: "Gesamteindruck",
      moraira: "Ruhig, elegant, wohnlich und gepflegt",
      javea: "Größer, aktiver, internationaler und vielseitiger",
    },
    {
      label: "Am besten geeignet für",
      moraira: "Villen Käufer, Ruheständler, Privatsphäre, hochwertige Zweitwohnsitze",
      javea: "Familien, aktive Käufer, ganzjähriges Leben, mehr Lifestyle-Vielfalt",
    },
    {
      label: "Immobilienstil",
      moraira: "Freistehende Villen, Häuser mit Meerblick, ruhige Wohngebiete mit niedriger Bebauung",
      javea: "Villen, Apartments, Stadthäuser sowie Wohnen am Arenal, Hafen oder in der Altstadt",
    },
    {
      label: "Lebensstil",
      moraira: "Ruhige Küstenrestaurants, Buchten, Marina und entspanntes Villenleben",
      javea: "Strände, Sport, Schulen in der Nähe, Restaurants und mehr soziale Energie",
    },
    {
      label: "Ganzjährige Aktivität",
      moraira: "Angenehm, aber außerhalb der Hauptsaison deutlich ruhiger",
      javea: "In der Regel mehr ganzjährige Aktivität, Services und Alltagsleben",
    },
    {
      label: "Käuferprofil",
      moraira: "Käufer, die Ruhe, Privatsphäre und ein hochwertiges Wohngefühl suchen",
      javea: "Käufer, die mehr Auswahl, Aktivität und internationale Community wünschen",
    },
  ];

  const morairaStrengths = [
    "Elegante Küstenatmosphäre mit ruhigem Wohncharakter",
    "Sehr attraktiv für Villenkäufer und Zweitwohnsitzbesitzer",
    "Schöne Strände und Buchten wie El Portet, L’Ampolla und Les Platgetes",
    "Gute Wahl für Käufer, die Privatsphäre, Komfort und ein gepflegtes Umfeld suchen",
    "Beliebt bei internationalen Käufern, die niedrig bebaute Küstenlagen bevorzugen",
    "Eine stilvolle Option für Ruheständler und Käufer, die keine größere Stadtumgebung benötigen",
  ];

  const javeaStrengths = [
    "Größer und vielseitiger als Moraira, mit mehreren klar unterscheidbaren Lifestyle-Zonen",
    "Gute Wahl für Familien, aktive Ruheständler, Remote Worker und soziale Käufer",
    "Starker Strand-Lifestyle mit Arenal, Buchten, Portitxol und Granadella in der Nähe",
    "Enge Verbindung zum Naturpark Montgó und zu einem aktiveren Outdoor-Lebensstil",
    "Mehr Restaurants, Services, Clubs und Alltagsmöglichkeiten als kleinere Küstenorte",
    "Oft einfacher für Käufer, die ganzjährige Aktivität und internationale Community suchen",
  ];

  const buyerSituations = [
    {
      title: "Für Familien",
      text:
        "Jávea ist für viele Familien oft der stärkere Ausgangspunkt, weil es mehr Lifestyle-Zonen, mehr ganzjährige Aktivität, mehr Freizeitmöglichkeiten und eine größere internationale Community bietet. Moraira kann für Familien ebenfalls sehr gut funktionieren, wenn ein ruhigeres Villenleben im Vordergrund steht. Jávea bietet Familien jedoch meist mehr praktische Flexibilität.",
    },
    {
      title: "Für Ruheständler",
      text:
        "Moraira ist oft ideal für Ruheständler, die Ruhe, Privatsphäre, Restaurants, Küstenspaziergänge und eine gepflegte Atmosphäre suchen. Jávea passt besser zu Ruheständlern, die mehr Aktivität, mehr soziale Möglichkeiten, mehr Restaurants und ein stärkeres ganzjähriges Stadtleben wünschen.",
    },
    {
      title: "Für Villenkäufer",
      text:
        "Sowohl Moraira als auch Jávea können für Villenkäufer sehr gut geeignet sein. Moraira wirkt häufig exklusiver, gepflegter und stärker wohnorientiert. Jávea bietet eine größere Auswahl an Zonen, von ruhigen Wohnlagen bis zu aktiveren Bereichen in der Nähe von Stränden, Restaurants und Services.",
    },
    {
      title: "Für Apartmentkäufer",
      text:
        "Jávea ist für Apartmentkäufer meist stärker als Moraira, weil es rund um Arenal, Hafen und Ortszentrum mehr Auswahl gibt. Moraira ist stärker auf Villen ausgerichtet und in der Regel weniger geeignet für Käufer, die vor allem Apartmentauswahl oder ein urbaneres Strandumfeld suchen.",
    },
    {
      title: "Für ganzjähriges Wohnen",
      text:
        "Jávea hat beim ganzjährigen Wohnen meist Vorteile, weil der Ort größer und aktiver ist. Moraira ist sehr attraktiv, aber ruhiger, besonders außerhalb der Hauptsaison. Die richtige Wahl hängt davon ab, ob Sie eher Ruhe oder Aktivität bevorzugen.",
    },
    {
      title: "Für Käufer, die Privatsphäre suchen",
      text:
        "Moraira ist oft emotional die bessere Wahl für Käufer, die Privatsphäre, ruhige Wohnlagen und eine kontrolliertere, elegante Atmosphäre suchen. Jávea kann ebenfalls Privatsphäre bieten, hat aber je nach Zone mehr Bewegung, Verkehr und Lifestyle-Unterschiede.",
    },
  ];

  const commonMistakes = [
    {
      title: "Nur nach Meerblick entscheiden",
      text:
        "Ein Meerblick ist attraktiv, sagt aber nicht aus, ob die Lage zu Ihrem Alltag passt. Prüfen Sie immer Fahrzeiten, Zugang, Geräuschkulisse, Services, Sonnenausrichtung, Community-Regeln, Wartungsaufwand und das Gefühl der Nachbarschaft außerhalb der Sommersaison.",
    },
    {
      title: "Moraira und Jávea als gleichen Lebensstil betrachten",
      text:
        "Die Orte liegen nahe beieinander, sind aber nicht gleich. Moraira fühlt sich kleiner, ruhiger und wohnlicher an. Jávea ist größer, aktiver und vielseitiger. Dieser Unterschied ist wichtig, wenn Sie entscheiden, wo Sie kaufen möchten.",
    },
    {
      title: "Nur im Sommer besichtigen",
      text:
        "Beide Orte fühlen sich im August anders an als im Januar oder Februar. Wenn Sie dauerhaft in Spanien leben oder längere Zeit dort verbringen möchten, sollten Sie den ganzjährigen Rhythmus verstehen, bevor Sie kaufen.",
    },
    {
      title: "Den praktischen Alltag ignorieren",
      text:
        "Restaurants, Buchten und Ausblicke sind nur ein Teil der Entscheidung. Käufer sollten auch Supermärkte, Ärzte, Schulen, Erreichbarkeit, Verkehr, Parken, Dienstleistungen, Community-Regeln und die praktische Leichtigkeit des Alltags vergleichen.",
    },
    {
      title: "Mit Immobilien starten, bevor die Region klar ist",
      text:
        "Das ist einer der häufigsten Fehler. Die beste Immobilie in der falschen Gegend kann immer noch der falsche Kauf sein. Beginnen Sie mit der Region und definieren Sie danach die Immobiliensuche.",
    },
  ];

  const faqs = [
    {
      question: "Ist Moraira besser als Jávea?",
      answer:
        "Moraira ist besser, wenn Sie eine ruhigere, gepflegtere und stärker auf Villen ausgerichtete Umgebung suchen. Jávea ist besser, wenn Sie mehr Aktivität, mehr Vielfalt, stärkeres ganzjähriges Leben und eine größere internationale Community wünschen.",
    },
    {
      question: "Ist Jávea besser für Familien?",
      answer:
        "Für viele internationale Familien ist Jávea oft der praktischere Ausgangspunkt, weil es mehr Services, Aktivitäten und Lifestyle-Zonen bietet. Moraira kann jedoch gut zu Familien passen, die ein ruhigeres Wohnumfeld mit Villencharakter bevorzugen.",
    },
    {
      question: "Ist Moraira exklusiver als Jávea?",
      answer:
        "Moraira wirkt oft exklusiver, weil es kleiner, ruhiger und stärker auf Villen ausgerichtet ist. Jávea hat ebenfalls Premium-Lagen, ist insgesamt aber größer und vielseitiger.",
    },
    {
      question: "Welche Region ist besser für Ruheständler?",
      answer:
        "Moraira ist oft hervorragend für Ruheständler, die Ruhe, Privatsphäre und ein gepflegtes Umfeld suchen. Jávea ist oft besser für Ruheständler, die mehr soziale Aktivität, Restaurants, Clubs und ganzjährige Energie möchten.",
    },
    {
      question: "Welche Region ist besser für den Kauf einer Villa?",
      answer:
        "Beide Regionen sind stark für Villen. Moraira ist meist stärker auf ruhiges, wohnliches Villenleben ausgerichtet, während Jávea eine größere Vielfalt an Villenzonen bietet, einschließlich Lagen näher an Stränden, Altstadt und Services.",
    },
    {
      question: "Sollte ich beide Regionen vor dem Kauf besuchen?",
      answer:
        "Ja. Moraira und Jávea können auf der Karte ähnlich wirken, fühlen sich im Alltag aber unterschiedlich an. Ein gründlicher Regionsvergleich ist einer der klügsten Schritte vor dem Immobilienkauf an der Costa Blanca Nord.",
    },
  ];

  const officialSources = [
    {
      label: "Teulada-Moraira Tourismus — Strände",
      href: "https://www.turismoteuladamoraira.com/ttm/Web_php/index.php?contenido=showPois&id=1&idNivel=544&lang=4",
    },
    {
      label: "Teulada-Moraira Tourismus — Blaue Flagge",
      href: "https://www.turismoteuladamoraira.com/ttm/web_php/index.php?contenido=noticia_desc_coconut&id=470&lang=4&title=teulada-moraira-recibe-el-reconocimiento-bandera-azul-a-sus-playa-y-al-club-nutico",
    },
    {
      label: "Xàbia Tourismus — Offizielle Tourismus-Website",
      href: "https://en.xabia.org/",
    },
    {
      label: "Xàbia Tourismus — Naturpark Montgó",
      href: "https://en.xabia.org/ver/1497/Parque-Natural-del-Montg%C3%B3.html",
    },
    {
      label: "Comunitat Valenciana — Bucht Granadella",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/xabia-javea/beaches/granadella-cove",
    },
    {
      label: "Xàbia Tourismus — Arenal",
      href: "https://en.xabia.org/ver/1567/Playa-del-Arenal.html",
    },
    {
      label: "Xàbia Tourismus — Hafen von Xàbia",
      href: "https://en.xabia.org/ver/8950/The-X%EF%BF%BDbia-Port.html",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Moraira vs. Jávea beim Immobilienkauf an der Costa Blanca Nord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vergleich Costa Blanca Nord
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Moraira vs. Jávea: Welche Region ist besser für internationale Käufer?
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              Ein ausführlicher Vergleich für Käufer, die zwischen zwei der
              begehrtesten Regionen an der Costa Blanca Nord wählen, bevor sie
              eine Immobilie in Spanien kaufen.
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
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Regionsvergleich
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Moraira und Jávea liegen nah beieinander, bieten aber sehr
                unterschiedliche Lebensstile.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Moraira und Jávea gehören zu den meistgesuchten Orten für
                internationale Käufer, die eine Immobilie an der Costa Blanca
                Nord kaufen möchten. Beide bieten mediterrane Landschaft,
                Strände, Villen, Restaurants und internationale Communities. Im
                Alltag fühlen sie sich jedoch nicht gleich an.
              </p>

              <p className="mt-6">
                Moraira ist meist ruhiger, kleiner, wohnlicher und stärker auf
                Villen ausgerichtet. Jávea ist größer, aktiver und vielseitiger,
                mit mehreren unterschiedlichen Lifestyle-Zonen wie Altstadt,
                Hafen, Arenal und umliegenden Wohngebieten.
              </p>

              <p className="mt-6">
                Die richtige Wahl hängt davon ab, wie Sie leben möchten. Ein
                Paar im Ruhestand, das Ruhe und Privatsphäre sucht, entscheidet
                anders als eine Familie, die Schulen und Aktivitäten benötigt,
                oder ein Remote Worker, der Cafés, Sport und ein größeres
                internationales Netzwerk sucht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Kurze Antwort
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Wählen Sie Moraira für ruhiges Villenleben. Wählen Sie Jávea für
            mehr Energie, Vielfalt und ganzjährige Aktivität.
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-[#f6f1ea] p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Moraira ist meist besser, wenn Sie Folgendes suchen:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Eine ruhigere und gepflegte Küstenatmosphäre</li>
                <li>• Einen auf Villen ausgerichteten Wohn-Lifestyle</li>
                <li>• Privatsphäre, Komfort und einen hochwertigen Zweitwohnsitz</li>
                <li>• Eine ruhigere Basis für Ruhestand oder Teilzeitwohnen</li>
                <li>• Kleinstadtgefühl mit Restaurants, Buchten und Marina-Leben</li>
              </ul>

              <a
                href="/de/regions/moraira"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Moraira entdecken →
              </a>
            </div>

            <div className="rounded-[32px] bg-[#1e2a3a] p-9 text-white">
              <h3 className="font-serif text-4xl">
                Jávea ist meist besser, wenn Sie Folgendes suchen:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-white/75">
                <li>• Mehr ganzjährige Aktivität und Services</li>
                <li>• Eine größere internationale Community</li>
                <li>• Mehr Auswahl zwischen Stränden, Stadtleben, Hafen und Arenal</li>
                <li>• Eine stärkere Passung für Familien und aktive Käufer</li>
                <li>• Restaurants, Sport, Clubs, Buchten und soziale Vielfalt</li>
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

      {/* COMPARISON TABLE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Auf einen Blick
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Moraira vs. Jávea im Vergleich.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Dieser Vergleich gibt Ihnen einen praktischen Überblick, bevor Sie
              die Regionen persönlich besuchen. Es geht nicht darum, welcher Ort
              objektiv besser ist. Es geht darum, welcher Ort zu Ihrem
              Lebensstil, Budget, Immobilientyp und langfristigen Plan passt.
            </p>
          </div>

          <div className="overflow-hidden rounded-[36px] bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-[#1e2a3a] text-white">
              <div className="p-6 text-sm uppercase tracking-[0.25em]">
                Faktor
              </div>
              <div className="p-6 text-sm uppercase tracking-[0.25em]">
                Moraira
              </div>
              <div className="p-6 text-sm uppercase tracking-[0.25em]">
                Jávea
              </div>
            </div>

            {quickComparison.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-3 border-t border-stone-200"
              >
                <div className="bg-[#f6f1ea] p-6 font-medium text-[#1e2a3a]">
                  {row.label}
                </div>
                <div className="p-6 leading-relaxed text-stone-600">
                  {row.moraira}
                </div>
                <div className="p-6 leading-relaxed text-stone-600">
                  {row.javea}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MORAIRA DEEP DIVE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Moraira
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Moraira ist für Käufer geeignet, die Ruhe, Privatsphäre und ein
            gepflegtes Küstenumfeld suchen.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-700">
              <p>
                Moraira gehört zu Teulada-Moraira, einer Gemeinde in der Marina
                Alta. Aus einem ehemaligen Fischerdorf ist eine der begehrtesten
                Wohnlagen an der Costa Blanca Nord geworden, besonders für
                internationale Käufer, die ein ruhigeres und gepflegteres Umfeld
                suchen.
              </p>

              <p className="mt-6">
                Die offiziellen Tourismusinformationen von Teulada-Moraira
                heben die Strände und Buchten hervor, darunter El Portet,
                L’Ampolla und Les Platgetes. Diese Strände prägen die Identität
                von Moraira: küstennah, landschaftlich reizvoll und attraktiv,
                aber weiterhin niedriger bebaut und wohnlicher als viele
                lebhaftere Ferienorte.
              </p>

              <p className="mt-6">
                Moraira passt besonders gut zu Käufern, die Villenleben,
                Privatsphäre, Meerblick, Restaurants, Buchten und eine ruhigere
                Basis suchen. Der Ort wird häufig von Ruheständlern,
                Zweitwohnsitzbesitzern und Käufern gewählt, die keine größere
                Stadtatmosphäre möchten.
              </p>

              <p className="mt-6">
                Der Kompromiss ist, dass Moraira außerhalb der Hauptsaison
                ruhiger wirken kann. Für manche Käufer ist genau das der Reiz.
                Für andere, vor allem Familien oder Menschen, die mehr tägliche
                Aktivität wünschen, kann es zu ruhig sein.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/70 p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Stärken von Moraira
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                {morairaStrengths.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* JAVEA DEEP DIVE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Jávea / Xàbia
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Jávea ist für Käufer geeignet, die Vielfalt, Aktivität und einen
            stärkeren ganzjährigen Rhythmus suchen.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-white/75">
              <p>
                Jávea, offiziell Xàbia/Jávea, ist größer und vielseitiger als
                Moraira. Es handelt sich nicht um nur einen einzigen Lebensstil.
                Käufer vergleichen hier meist mehrere Zonen: Altstadt, Hafen,
                Arenal, Wohnlagen am Montgó und Küstenvillenbereiche in der Nähe
                von Buchten wie Portitxol und Granadella.
              </p>

              <p className="mt-6">
                Die offiziellen Tourismusinformationen von Xàbia heben Strände,
                Buchten, Kultur, Hafen, Arenal und geschützte Naturbereiche
                hervor. Der Montgó erhebt sich über Xàbia, Dénia und Ondara und
                erreicht 753 Meter über dem Meeresspiegel, wodurch die Region
                eine markante natürliche Kulisse erhält.
              </p>

              <p className="mt-6">
                Jávea verfügt außerdem über einige der bekanntesten
                Küstenlandschaften der Costa Blanca Nord. Comunitat Valenciana
                beschreibt die Granadella-Bucht als schönen Strand mit klarem,
                türkisfarbenem Wasser, ideal zum Tauchen, und als wilden
                Küstenabschnitt, der Einheimische und Besucher anzieht.
              </p>

              <p className="mt-6">
                Für Immobilienkäufer bietet Jávea oft mehr Auswahl. Der Ort kann
                zu Familien, aktiven Ruheständlern, Remote Workern,
                Unternehmern, Zweitwohnsitzkäufern und Menschen passen, die mehr
                Restaurants, Sport, Services und internationale Community suchen.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h3 className="font-serif text-3xl text-white">
                Stärken von Jávea
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-white/75">
                {javeaStrengths.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE COMPARISON */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Lifestyle-Unterschied
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Der wichtigste Unterschied ist nicht die Entfernung. Es ist der
              Alltag.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Die Entfernung zwischen Moraira und Jávea ist nicht groß. Deshalb
              gehen viele Käufer davon aus, dass der Lebensstil ähnlich ist. In
              der Praxis kann sich das Gefühl jedoch deutlich unterscheiden.
            </p>

            <p className="mt-6">
              Moraira wirkt kompakter und kontrollierter. Es ist attraktiv, wenn
              Sie Restaurants, Buchten, eine Marina, Strände und Villengebiete
              möchten, ohne das Gefühl einer größeren Stadt. Viele Käufer
              beschreiben Moraira als ruhig, geschmackvoll und komfortabel.
            </p>

            <p className="mt-6">
              Jávea ist vielschichtiger. Die Altstadt bietet Geschichte und ein
              lokales Zentrum, der Hafen hat Fischer- und Marina-Charakter, der
              Arenal bringt Strandaktivität und Restaurants, während die
              umliegenden Wohngebiete Villen, Ausblicke und Zugang zur Natur
              bieten. Diese Vielfalt ist wertvoll, bedeutet aber auch, dass
              Käufer den richtigen Teil von Jávea sorgfältig wählen sollten.
            </p>

            <p className="mt-6">
              Wenn Sie Ruhe und Privatsphäre suchen, kann Moraira besser passen.
              Wenn Sie mehr Optionen und ganzjährige Energie möchten, kann Jávea
              die stärkere Wahl sein.
            </p>
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Immobiliensuche
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Moraira ist stärker auf Villen ausgerichtet. Jávea bietet meist mehr
            Immobilienvielfalt.
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-[#f6f1ea] p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Immobilienkauf in Moraira
              </h3>

              <p className="mt-6 leading-relaxed text-stone-600">
                Moraira wird häufig mit freistehenden Villen, Häusern mit
                Meerblick, Wohnbaugrundstücken und niedrig bebautem Wohnen
                verbunden. Käufer suchen meist Privatsphäre, Komfort,
                Außenflächen und ein hochwertiges Küstenumfeld.
              </p>

              <p className="mt-6 leading-relaxed text-stone-600">
                Apartments gibt es ebenfalls, aber Moraira ist normalerweise
                nicht die erste Empfehlung für Käufer, die vor allem einen
                breiten Apartmentmarkt, moderne Strandhochhäuser oder ein
                urbaneres Strandumfeld suchen.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Immobilienkauf in Jávea
              </h3>

              <p className="mt-6 leading-relaxed text-stone-600">
                Jávea bietet mehr Vielfalt. Käufer können Villen, Apartments,
                Stadthäuser, Immobilien in der Nähe des Arenal, Wohnlagen am
                Hafen, Häuser rund um die Altstadt und Villenzonen am Montgó
                oder in Richtung Buchten vergleichen.
              </p>

              <p className="mt-6 leading-relaxed text-stone-600">
                Diese Vielfalt ist hilfreich, macht die Entscheidung aber auch
                komplexer. Zwei Immobilien in Jávea können völlig
                unterschiedliche Lebensstile bieten, je nachdem, ob sie nahe
                Arenal, Hafen, Altstadt oder in einer ruhigeren Wohnlage liegen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUYER SITUATIONS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Was passt besser zu Ihnen?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Moraira vs. Jávea nach Käufertyp.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Die richtige Wahl hängt weniger davon ab, was online am schönsten
              aussieht, sondern davon, wie Sie die Immobilie nutzen möchten. Eine
              Familie, ein Paar im Ruhestand und ein Ferienhauskäufer benötigen
              oft unterschiedliche Standorte.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {buyerSituations.map((item) => (
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

      {/* DECISION GUIDE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Praktischer Entscheidungsleitfaden
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Stellen Sie diese Fragen, bevor Sie zwischen Moraira und Jávea
            entscheiden.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Möchten Sie eine ruhige Wohnbasis oder eine aktivere Stadtatmosphäre?",
              "Werden Sie dauerhaft, teilweise oder nur im Urlaub dort wohnen?",
              "Benötigen Sie Schulen, Clubs, Sport, Gesundheitsversorgung und Alltagsservices in der Nähe?",
              "Bevorzugen Sie eine Villenregion oder mehr Auswahl zwischen Villen und Apartments?",
              "Ist es wichtig, Restaurants und Geschäfte zu Fuß zu erreichen, oder fahren Sie gern?",
              "Wünschen Sie Privatsphäre und Ruhe oder mehr soziales Leben und internationale Aktivität?",
              "Bevorzugen Sie Buchten und Marina-Leben oder vielseitigere Strände und Lifestyle-Zonen?",
              "Haben Sie beide Regionen außerhalb der Hochsaison besucht?",
            ].map((question) => (
              <div key={question} className="rounded-2xl bg-white/75 p-6">
                <p className="leading-relaxed text-stone-700">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Häufige Fehler
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Fehler, die Käufer beim Vergleich von Moraira und Jávea machen.
            </h2>
          </div>

          <div className="grid gap-8">
            {commonMistakes.map((item) => (
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

      {/* FINAL ADVICE */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Abschließender Rat
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Moraira ist nicht besser als Jávea. Jávea ist nicht besser als
              Moraira. Einer der Orte ist besser für Sie.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Wenn Ihr ideales Leben in Spanien ruhig, elegant, privat und
              villenorientiert ist, kann Moraira die richtige Wahl sein. Wenn Sie
              mehr Aktivität, mehr Services, mehr Lifestyle-Zonen und eine
              größere internationale Community suchen, passt Jávea möglicherweise
              besser zu Ihnen.
            </p>

            <p className="mt-6">
              Der klügste Ansatz ist, nicht anhand von Online-Inseraten oder
              einer einzigen schönen Besichtigung zu entscheiden. Beginnen Sie
              mit Ihrem Lebensstil, vergleichen Sie dann die Region und suchen
              Sie danach die Immobilie.
            </p>

            <p className="mt-6">
              Genau deshalb beginnt Nordic Move Spain mit dem Area Match. Wir
              helfen internationalen Käufern, den Lifestyle-Fit zu verstehen,
              bevor sie sich auf einen Standort, eine Immobiliensuche oder eine
              Besichtigungsreise festlegen.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            FAQ
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Häufig gestellte Fragen zu Moraira vs. Jávea.
          </h2>

          <div className="mt-12 grid gap-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-t border-stone-200 pt-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {faq.question}
                </h3>

                <p className="mt-4 max-w-5xl leading-relaxed text-stone-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Area Match Assessment
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Noch unsicher, ob Moraira oder Jávea besser zu Ihnen passt?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Wir helfen internationalen Käufern, Regionen an der Costa Blanca
            Nord anhand von Lebensstil, Budget, Familiensituation,
            Immobilientyp, Services, langfristigen Plänen und Erwartungen an den
            Alltag zu vergleichen.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
            Fordern Sie Ihr Area Match Assessment an, bevor Sie mit der
            Immobiliensuche beginnen. So können Sie sich auf die Regionen
            konzentrieren, die wirklich zu Ihrem zukünftigen Leben in Spanien
            passen.
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
            Dieser Guide nutzt, wo möglich, offizielle Tourismus- und
            institutionelle Quellen. Lokale Services, Immobilienmärkte und
            saisonale Aktivität können sich verändern. Käufer sollten praktische
            Details daher immer prüfen, bevor sie eine Kaufentscheidung treffen.
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
