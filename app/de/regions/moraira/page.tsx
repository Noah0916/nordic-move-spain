export const metadata = {
  title: "Leben in Moraira | Immobilie kaufen in Moraira Costa Blanca Nord",
  description:
    "Entdecken Sie, ob Moraira die richtige Gegend ist, um eine Immobilie an der nördlichen Costa Blanca zu kaufen. Ein Leitfaden für niederländische, deutsche, schweizerische und internationale Käufer, die Lebensstil, Villen, Ruhestand, Dienstleistungen, Strände, Restaurants, Aktivitäten, Autoabhängigkeit und langfristige Eignung vergleichen.",
};

export default function MorairaPage() {
  const buyerProfiles = [
    {
      title: "Ruheständler, die Ruhe und Qualität suchen",
      text:
        "Moraira ist oft attraktiv für Ruheständler, die eine ruhigere Küstenlage, gute Restaurants, Meerblick, Privatsphäre und eine elegante internationale Gemeinschaft ohne die Dichte größerer Orte wünschen.",
    },
    {
      title: "Zweitwohnsitzkäufer",
      text:
        "Die Gegend eignet sich gut für Käufer, die eine gepflegte mediterrane Basis für längere Aufenthalte, Familienbesuche und einen langsameren Lebensstil mit Terrassen, Stränden, Restaurants und Leben im Freien suchen.",
    },
    {
      title: "Villenkäufer",
      text:
        "Moraira ist besonders stark bei freistehenden Villen, Häusern am Hang, Immobilien mit Meerblick und Wohngebieten, in denen Privatsphäre und Platz wichtiger sind als urbane Bequemlichkeit.",
    },
    {
      title: "Anspruchsvolle internationale Käufer",
      text:
        "Niederländische, deutsche, schweizerische, belgische, britische und skandinavische Käufer wählen Moraira häufig, weil es ruhig, etabliert und stärker wohnlich wirkt als viele größere Küstenziele.",
    },
  ];

  const zones = [
    {
      title: "El Portet",
      text:
        "Eine der begehrtesten Gegenden Morairas, bekannt für ihre geschützte Bucht, ruhige Atmosphäre und prestigeträchtige Villenlage. Sie kann zu Käufern passen, die Schönheit, Exklusivität und Nähe zum Meer schätzen.",
    },
    {
      title: "Pla del Mar",
      text:
        "Ein gefragtes Wohngebiet nahe dem Stadtzentrum. Es kann zu Käufern passen, die einen Villenlebensstil wünschen, aber leichteren Zugang zu Restaurants, Geschäften und der Marina bevorzugen.",
    },
    {
      title: "Benimeit",
      text:
        "Eine Hanglage, die oft mit Ausblicken, größeren Villen und ruhigem Wohnen verbunden wird. Käufer sollten Zufahrtsstraßen, Ausrichtung, Instandhaltungsbedarf und Fahrzeiten sorgfältig prüfen.",
    },
    {
      title: "San Jaime",
      text:
        "Ein etabliertes Wohngebiet zwischen Moraira und Benissa/Calpe, oft attraktiv für Käufer, die Villen, Golf in der Nähe und guten Zugang zu umliegenden Gegenden wünschen.",
    },
    {
      title: "Moravit und Cap Blanc",
      text:
        "Küstennahe Wohngebiete mit Zugang zu Buchten, Restaurants und der Straße Richtung Calpe. Diese Gegenden können eine gute Balance zwischen Küstenleben und Villenwohnen bieten.",
    },
    {
      title: "Stadtzentrum und Marina-Bereich",
      text:
        "Besser für Käufer, die Restaurants, Geschäfte, Hafenleben und bessere fußläufige Erreichbarkeit wünschen. Das Immobilienangebot kann begrenzter sein, aber die praktische Bequemlichkeit ist stärker.",
    },
  ];

  const propertyTypes = [
    {
      title: "Freistehende Villen",
      text:
        "Die typischste Wahl für internationale Käufer in Moraira. Villen können Privatsphäre, Gärten, Pools und Meerblick bieten, bringen aber auch Verantwortung für Instandhaltung, Sicherheit und Verwaltung mit sich.",
    },
    {
      title: "Häuser am Hang mit Meerblick",
      text:
        "Sehr attraktiv, aber Käufer sollten Zufahrtsstraßen, Treppen, Ausrichtung, Windbelastung, Renovierungsqualität und die langfristige Alltagstauglichkeit des Hauses prüfen.",
    },
    {
      title: "Reihenhäuser und kleinere Häuser",
      text:
        "Eine sinnvolle Option für Käufer, die weniger Instandhaltung als bei einer großen Villa möchten und dennoch einen wohnlichen Lebensstil nahe Moraira genießen wollen.",
    },
    {
      title: "Apartments nahe dem Zentrum",
      text:
        "Weniger dominant als in Calpe oder Dénia, aber praktisch für Käufer, die fußläufige Erreichbarkeit, geringeren Pflegeaufwand und einfacheres Lock-up-and-leave-Eigentum wünschen.",
    },
  ];

  const confidenceChecks = [
    {
      title: "Abhängigkeit vom Auto",
      text:
        "Viele der attraktivsten Villengebiete Morairas erfordern ein Auto. Das ist normal, aber ältere Käufer sollten sorgfältig über tägliches Fahren, Parken, Zufahrtsstraßen und langfristige Mobilität nachdenken.",
    },
    {
      title: "Ganzjähriger Rhythmus",
      text:
        "Moraira ist ruhiger als größere Orte. Für manche Käufer ist das der Hauptreiz. Andere bevorzugen möglicherweise die stärkere ganzjährige Aktivität von Dénia oder Jávea.",
    },
    {
      title: "Instandhaltung von Villen",
      text:
        "Pools, Gärten, Terrassen, Sicherheitssysteme, Außenanstrich und Feuchtigkeitskontrolle brauchen Aufmerksamkeit. Käufer, die zeitweise im Ausland leben, sollten zuverlässige lokale Unterstützung einplanen.",
    },
    {
      title: "Ausrichtung und Sonnenlicht",
      text:
        "Villen am Hang können sich je nach Ausrichtung stark unterscheiden. Wintersonne, Schatten, Wind und Zugang können den Komfort stärker beeinflussen, als Käufer bei einer kurzen Besichtigung merken.",
    },
    {
      title: "Renovierungsqualität",
      text:
        "Einige Häuser wurden im Laufe der Zeit erweitert oder renoviert. Vor dem Kauf sollten unabhängige Prüfungen die Rechtmäßigkeit des Gebäudes, Genehmigungen, Versorgungsanschlüsse und eingetragene Immobiliendetails bestätigen.",
    },
    {
      title: "Gemeinschafts- und Vermietungsregeln",
      text:
        "Wenn sich die Immobilie in einer Urbanisation oder Eigentümergemeinschaft befindet, sollten Käufer Gebühren, Regeln, Vermietungsbeschränkungen, Instandhaltungspflichten und Protokolle der Versammlungen verstehen, bevor sie sich festlegen.",
    },
  ];

  const lifestylePoints = [
    "Ruhiger Küstenlebensstil mit etablierter internationaler Gemeinschaft",
    "Sehr attraktiv für Ruheständler, Zweitwohnsitzbesitzer und Villenkäufer",
    "Restaurants, Buchten, Marina-Leben und elegante mediterrane Atmosphäre",
    "Weniger urban und weniger dicht bebaut als größere Küstenorte",
    "Gute Basis, um Benissa, Jávea, Calpe und die weitere Marina Alta zu erkunden",
    "Am besten geeignet für Käufer, die Privatsphäre, Qualität und Ruhe wichtiger finden als Stadtenergie",
  ];

  const restaurants = [
    {
      title: "Restaurante Club Náutico Moraira",
      label: "Marina-Dining",
      text:
        "Eine elegante Option an der Marina für mediterrane Küche, Reisgerichte und ein klassisches Essen mit Blick aufs Meer. Sie kann gut zu Käufern passen, die Hafenleben, lange Mittagessen und eine gepflegte Küstenlage genießen.",
      bestFor:
        "Am besten für Marina-Blick, mediterranes Essen und ein eleganteres Mittag- oder Abendessen.",
    },
    {
      title: "Algas L’Andragó",
      label: "Tapas und Cocktails direkt am Meer",
      text:
        "Eine entspannte Strandbar und ein Restaurant an der Cala L’Andragó, bekannt für Tapas, Cocktails, Palmen und eine Lage direkt am Meer. Es ist eher locker als formell und besonders attraktiv für Drinks, Mittagessen oder Sonnenuntergangsatmosphäre.",
      bestFor:
        "Am besten für lockeren Meerblick, Tapas, Cocktails und ein entspanntes Küstengefühl.",
    },
    {
      title: "Eleven Moraira",
      label: "Meer- und Burgblick",
      text:
        "Eine stilvolle Option für Käufer, die Essen im Freien, Meerblick und Ausblicke auf die Burg von Moraira genießen. Es ist ein gutes Beispiel für die gepflegte Gastronomie- und Lifestyle-Szene, die viele internationale Käufer nach Moraira zieht.",
      bestFor:
        "Am besten für Abendessen, Ausblicke und einen gehobeneren Abend in Moraira.",
    },
    {
      title: "Al Mar Moraira",
      label: "Moderne mediterrane Küche",
      text:
        "Eine moderne mediterrane Restaurantoption mit Meeresfrüchten, Reisgerichten, Fisch, Fleisch und Hausspezialitäten. Sie ist hilfreich für Käufer, die Morairas zeitgemäßere Restaurantszene verstehen möchten.",
      bestFor:
        "Am besten für Käufer, die moderne mediterrane Küche und ein gepflegtes Restaurant-Erlebnis suchen.",
    },
  ];

  const activities = [
    {
      title: "Strand und Bucht El Portet",
      text:
        "El Portet ist eine der attraktivsten Lifestyle-Gegenden Morairas, mit geschützter Bucht, ruhigem Wasser und eleganter Küstenatmosphäre. Für Käufer zeigt sie die Premium-Seite des Lebens in Moraira.",
    },
    {
      title: "Cap d’Or Spazierweg und Aussichtspunkt",
      text:
        "Das Gebiet Cap d’Or bietet einen der klassischen Spazierwege nahe Moraira, mit Blicken über die Küste und El Portet. Es ist ein gutes Beispiel dafür, wie Natur, Meerblick und tägliches Leben im Freien Teil der Attraktivität Morairas sind.",
    },
    {
      title: "Cala L’Andragó und Cap Blanc",
      text:
        "Diese Küstenseite Morairas ist attraktiv für entspannte Spaziergänge, Drinks direkt am Meer und Sonnenuntergangsmomente. Sie kann zu Käufern passen, die eine ruhigere Küstenroutine statt eines lebhaften Resort-Gefühls suchen.",
    },
    {
      title: "Marina, Burg und Stadtzentrum",
      text:
        "Morairas Marina, kleine Burg, Restaurants und Stadtzentrum schaffen einen kompakten, aber eleganten Alltagsrhythmus. Es ist keine große Stadt, aber genau das mögen viele Käufer daran.",
    },
    {
      title: "Restaurants und lange mediterrane Mittagessen",
      text:
        "Essen ist ein echter Teil des Lebensstils in Moraira. Käufer, die gute Restaurants, Terrassen mit Meerblick, Mittagessen an der Marina und ruhige Abendessen genießen, finden Moraira oft attraktiver als lebhaftere Küstenorte.",
    },
    {
      title: "Umliegende Gegenden erkunden",
      text:
        "Moraira ist auch eine gute Basis, um Benissa, Jávea, Calpe, Dénia und Dörfer im Landesinneren zu erkunden. Das ist wichtig für Käufer, die zu Hause Ruhe wünschen, aber Abwechslung in Fahrdistanz möchten.",
    },
  ];

  const relatedGuides = [
    {
      href: "/guides/best-areas-costa-blanca-north-retirees",
      title: "Beste Gegenden an der nördlichen Costa Blanca für Ruheständler",
      text:
        "Vergleichen Sie Moraira mit Dénia, Jávea, Altea, Benissa und Calpe aus der Perspektive von Ruheständlern.",
    },
    {
      href: "/guides/moraira-vs-javea",
      title: "Moraira vs. Jávea",
      text:
        "Verstehen Sie den Unterschied zwischen Morairas ruhigem Villenlebensstil und Jáveas aktiverem internationalem Rhythmus.",
    },
    {
      href: "/guides/where-to-buy-property-costa-blanca-north",
      title: "Wo man an der nördlichen Costa Blanca eine Immobilie kaufen sollte",
      text:
        "Vergleichen Sie die wichtigsten Orte der nördlichen Costa Blanca, bevor Sie entscheiden, wo Sie kaufen.",
    },
  ];

  const officialSources = [
    {
      label: "Teulada-Moraira — Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/teulada-moraira",
    },
    {
      label: "Moraira — Spain.info",
      href: "https://www.spain.info/en/destination/moraira/",
    },
    {
      label: "Offizieller Tourismus Teulada-Moraira",
      href: "https://www.turismoteuladamoraira.com/ttm/web_php/index.php?lang=4",
    },
    {
      label: "Gastronomie Teulada-Moraira",
      href: "https://www.turismoteuladamoraira.com/ttm/web_php/index.php?contenido=subapartados_coconut&id_boto=570&lang=4",
    },
    {
      label: "Route zum Wachturm Cap d’Or",
      href: "https://www.turismoteuladamoraira.com/ttm/web_php/index.php?contenido=subapartados_coconut&id_boto=648&lang=4",
    },
    {
      label: "Restaurante Club Náutico Moraira",
      href: "https://restauranteclubnauticomoraira.es/en/",
    },
    {
      label: "Algas L’Andragó",
      href: "https://www.algasmoraira.com/",
    },
    {
      label: "Eleven Moraira",
      href: "https://elevenmoraira.nl/",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVBAR */}
      <nav className="absolute left-0 top-0 z-50 w-full px-8 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/"
            className="text-sm font-medium uppercase tracking-[0.28em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
          >
            Nordic Move Spain
          </a>

          <div className="hidden gap-8 text-sm md:flex">
            <a
              href="/"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Startseite
            </a>

            <a
              href="/regions"
              className="border-b border-[#c8a063] pb-1 text-white drop-shadow"
            >
              Regionen
            </a>

            <a
              href="/services"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Leistungen
            </a>

            <a
              href="/guides"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Ratgeber
            </a>

            <a
              href="/about-us"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Über uns
            </a>

            <a
              href="/contact"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-32">
        <img
          src="/images/moraira.jpg"
          alt="Moraira Costa Blanca Nord Immobilien-Gebietsführer"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Nord Gebietsführer
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-7xl">
              Leben in Moraira.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Eine elegante Küstengegend für internationale Käufer, die Ruhe,
              Privatsphäre, Villen, Meerblick und einen gehobeneren
              mediterranen Lebensstil an der nördlichen Costa Blanca suchen.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Ihren Area Match anfragen
              </a>

              <a
                href="/guides/moraira-vs-javea"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Moraira und Jávea vergleichen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ist Moraira das Richtige für Sie?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Moraira wird oft von Käufern gewählt, die Qualität, Ruhe und einen
              privateren Küstenlebensstil suchen.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Moraira ist eine der begehrtesten Gegenden an der nördlichen Costa
              Blanca für internationale Käufer, die einen ruhigeren, eleganteren
              mediterranen Lebensstil wünschen. Im Gegensatz zu größeren
              Küstenorten wirkt Moraira kleiner, ruhiger und stärker wohnlich.
            </p>

            <p className="mt-6">
              Die Gegend ist besonders beliebt bei niederländischen, deutschen,
              schweizerischen, belgischen, skandinavischen und britischen
              Käufern, die Villen, Meerblick, Privatsphäre und einen entspannten
              Lebensstil mit Restaurants, Buchten und einer etablierten
              internationalen Gemeinschaft suchen.
            </p>

            <p className="mt-6">
              Offizielle Tourismusquellen beschreiben Teulada-Moraira mit
              ungefähr 8 Kilometern Küste mit Stränden und Buchten. Für Käufer
              ist diese Küste Teil der Attraktivität Morairas — aber die
              eigentliche Entscheidung ist, ob der ruhige, villenorientierte
              Lebensstil zu Ihren langfristigen Plänen passt.
            </p>
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
            Moraira eignet sich am besten für Käufer, die einen ruhigen,
            villenorientierten und eleganten Küstenlebensstil suchen.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Es ist normalerweise nicht die urbanste oder praktischste Option an
            der nördlichen Costa Blanca. Seine Stärke ist eine andere:
            Privatsphäre, Ruhe, Wohnqualität, elegantes Küstenleben und eine
            starke Eignung für Ruheständler und Zweitwohnsitzbesitzer, die einen
            langsameren Rhythmus schätzen.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {lifestylePoints.map((item) => (
              <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                <p className="leading-relaxed text-stone-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTAURANTS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Restaurants und Essen mit Meerblick
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Morairas Restaurantszene ist Teil seiner Lifestyle-Attraktivität.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Für viele Käufer geht es in Moraira nicht nur um Villen und
              Strände. Es geht auch um lange Mittagessen an der Marina,
              entspannte Drinks am Meer, Terrassen bei Sonnenuntergang und das
              Gefühl, gute Restaurants in der Nähe des eigenen Zuhauses zu
              haben.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-stone-500">
              Restaurantnamen und Öffnungszeiten können sich ändern. Prüfen Sie
              immer aktuelle Öffnungszeiten, Reservierungsregeln und saisonale
              Zeitpläne, bevor Sie einen Besuch planen.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.title}
                className="rounded-[32px] bg-white p-9 shadow-sm"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  {restaurant.label}
                </p>

                <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
                  {restaurant.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {restaurant.text}
                </p>

                <div className="mt-6 rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {restaurant.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Aktivitäten und Alltag
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Moraira passt zu Käufern, die ruhiges Leben im Freien,
            Küstenspaziergänge und Qualitätszeit am Meer genießen.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Moraira ist keine große Stadt und versucht auch nicht, eine zu sein.
            Sein Reiz ist ruhiger: Strände, Buchten, Spazierwege, Restaurants,
            Marina-Leben, Terrassen und Zugang zur weiteren Marina Alta.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="rounded-[30px] bg-white/80 p-8"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {activity.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {activity.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYER PROFILES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Käuferprofil
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Für wen Moraira am besten geeignet ist.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {buyerProfiles.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] bg-white p-9 shadow-sm"
              >
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

      {/* ZONES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Stadtteile und Zonen
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Der richtige Teil von Moraira ist genauso wichtig wie die Immobilie
            selbst.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Moraira ist nicht ein einziger Lebensstil. Eine Villa in El Portet,
            ein Haus nahe Pla del Mar, eine Immobilie am Hang in Benimeit oder
            ein Stadthaus nahe dem Zentrum können sich im Alltag sehr
            unterschiedlich anfühlen.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {zones.map((zone) => (
              <div key={zone.title} className="rounded-[30px] bg-white/80 p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {zone.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {zone.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Immobilientypen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Moraira ist besonders stark bei Villen, Privatsphäre und
              Wohnqualität.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Käufer, die Moraira wählen, suchen oft mehr als nur eine
              Immobilie. Sie wünschen sich eine ruhige mediterrane Basis, Leben
              im Freien, Privatsphäre und langfristigen Komfort.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {propertyTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] bg-white p-8 shadow-sm"
              >
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

      {/* RETIREE SUITABILITY */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Eignung für Ruheständler
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Moraira kann ein ausgezeichnetes Ruhestandsgebiet für Käufer sein,
            die Ruhe, Privatsphäre und Lebensqualität schätzen.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-white/80">
            <p>
              Für Ruheständler ist Morairas Reiz klar: eine ruhige Küstenlage,
              eine elegante internationale Gemeinschaft, gute Restaurants,
              Strände, Buchten und ein langsamerer Rhythmus als in größeren
              Orten.
            </p>

            <p className="mt-6">
              Die entscheidende Frage ist die Praktikabilität. Viele Villen
              erfordern ein Auto, manche Häuser liegen am Hang und größere
              Immobilien benötigen regelmäßige Instandhaltung. Für manche Käufer
              ist das völlig akzeptabel. Für andere bieten Dénia, Jávea oder
              Calpe möglicherweise mehr Alltagstauglichkeit.
            </p>

            <p className="mt-6">
              Deshalb empfehlen wir, Lebensstil und praktische Bedürfnisse zu
              vergleichen, bevor Sie eine Immobilie wählen. Das richtige Haus in
              Moraira kann eine wunderbare langfristige Basis sein, aber die
              genaue Lage ist entscheidend.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/guides/best-areas-costa-blanca-north-retirees"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Ratgeber für Ruheständler lesen
            </a>

            <a
              href="/services/area-match"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Ihren Area Match anfragen
            </a>
          </div>
        </div>
      </section>

      {/* CONFIDENCE CHECKS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Sicherheitschecks
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Was Sie vor dem Kauf in Moraira verstehen sollten.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Diese Prüfungen sind keine Gründe, Moraira zu meiden. Sie sind
              Teil einer gut vorbereiteten Kaufentscheidung.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {confidenceChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] bg-white p-9 shadow-sm"
              >
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

      {/* COMPARISON */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <a
            href="/regions/javea"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Nahegelegene Orte vergleichen
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Moraira oder Jávea?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Jávea bietet normalerweise mehr Aktivität, eine größere
              ganzjährige internationale Gemeinschaft und mehr
              Lebensstilvielfalt.
            </p>
          </a>

          <a
            href="/regions/denia"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Komfort vergleichen
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Moraira oder Dénia?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Dénia kann stärker bei täglichen Dienstleistungen, Stadtleben,
              Zugang zur Gesundheitsversorgung und ganzjähriger Bequemlichkeit
              sein.
            </p>
          </a>

          <a
            href="/regions/benissa"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Privatsphäre vergleichen
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Moraira oder Benissa?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Benissa kann mehr Grundstück, ländlichen Charakter und
              Privatsphäre bieten, während Moraira oft eleganter und
              küstennäher wirkt.
            </p>
          </a>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Verwandte Ratgeber
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Setzen Sie Ihre Moraira-Recherche fort.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {relatedGuides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {guide.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {guide.text}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Nicht sicher, ob Moraira zu Ihnen passt?
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Vergleichen Sie Moraira mit Ihrem Lebensstil, bevor Sie eine
            Immobilie wählen.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Unser Area Match Assessment hilft Ihnen zu verstehen, ob Moraira,
            Jávea, Dénia, Altea, Benissa oder Calpe am besten zu Ihren
            Prioritäten, Ihrem Budget, Ihrem Lebensstil und Ihren langfristigen
            Plänen passt.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/services/area-match"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Ihren Area Match anfragen
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Einführungsgespräch planen
            </a>
          </div>
        </div>
      </section>

      {/* OFFICIAL SOURCES */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Offizielle Quellen
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Dieser Gebietsführer nutzt, wo möglich, offizielle Tourismus- und
            Restaurantquellen. Käufer sollten Immobilien-, Rechts-,
            Restaurant- und praktische Details immer prüfen, bevor sie
            Entscheidungen treffen.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
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