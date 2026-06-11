export const metadata = {
  title: "Leben in Jávea | Immobilie kaufen in Jávea Costa Blanca Nord",
  description:
    "Entdecken Sie, ob Jávea die richtige Gegend ist, um eine Immobilie an der nördlichen Costa Blanca zu kaufen. Ein Leitfaden für niederländische, deutsche, schweizerische und internationale Käufer, die Lebensstil, Villen, Altstadt, Hafen, Arenal, Restaurants, Buchten, Ruhestand und langfristige Eignung vergleichen.",
};

export default function JaveaPage() {
  const lifestylePoints = [
    "Eine der vollständigsten Lifestyle-Städte an der nördlichen Costa Blanca",
    "Sehr attraktiv für Ruheständler, Zweitwohnsitzkäufer und ganzjährige Bewohner",
    "Drei unterschiedliche Lebensbereiche: Altstadt, Hafen und Arenal",
    "Ausgezeichnete Mischung aus Restaurants, Stränden, Buchten, Spazierwegen und Dienstleistungen",
    "Aktiver und sozialer als Moraira oder Benissa",
    "Am besten geeignet für Käufer, die Vielfalt, Komfort und internationales Leben suchen",
  ];

  const buyerProfiles = [
    {
      title: "Ruheständler, die Aktivität und Dienstleistungen wünschen",
      text:
        "Jávea kann gut zu Ruheständlern passen, die mehr als eine ruhige Villengegend suchen. Die Stadt bietet Restaurants, Geschäfte, Zugang zur Gesundheitsversorgung, Spazierbereiche, soziales Leben und einen stärkeren ganzjährigen Rhythmus als kleinere Orte.",
    },
    {
      title: "Zweitwohnsitzkäufer",
      text:
        "Die Gegend eignet sich gut für Käufer, die eine flexible Basis mit Stränden, Buchten, Restaurants, Wassersport, Familienbesuchen und genügend Abwechslung für verschiedene Jahreszeiten suchen.",
    },
    {
      title: "Käufer von Villen und Apartments",
      text:
        "Jávea bietet eine breite Immobilienauswahl, von Apartments in der Nähe von Arenal oder dem Hafen bis hin zu Villen in Wohngebieten wie Tosalet, Balcón al Mar, Cap Martí und Montgó.",
    },
    {
      title: "Internationale Käufer, die Gemeinschaft suchen",
      text:
        "Niederländische, deutsche, schweizerische, belgische, britische, skandinavische und andere internationale Käufer wählen Jávea häufig, weil es etabliert, sozial und praktisch für ein langfristiges Leben wirkt.",
    },
  ];

  const zones = [
    {
      title: "Altstadt von Jávea",
      text:
        "Das historische Zentrum bietet traditionelle Straßen, lokale Dienstleistungen, Restaurants, Märkte und einen spanischeren ganzjährigen Rhythmus. Es passt zu Käufern, die Authentizität und tägliche Bequemlichkeit schätzen.",
    },
    {
      title: "Hafen von Jávea",
      text:
        "Das Hafengebiet verbindet Meerblick, Restaurants, Geschäfte, Fischereihafen-Atmosphäre und einen eleganteren Küstenrhythmus. Es kann zu Käufern passen, die fußläufige Erreichbarkeit, maritimes Leben, Apartments und eine entspannte ganzjährige Atmosphäre wünschen. Es eignet sich für Käufer, die Küstenkomfort möchten, ohne direkt am Arenal-Strand zu wohnen.",
    },
    {
      title: "Arenal",
      text:
        "Arenal ist die offensichtlichste Strand- und Restaurantzone in Jávea. Sie kann zu Käufern passen, die fußläufige Erreichbarkeit, Apartments, Strandleben, Restaurants und mehr Energie wünschen.",
    },
    {
      title: "Montgó",
      text:
        "Das Montgó-Gebiet ist beliebt bei Käufern, die Platz, Villen, Bergblick und eine stärker wohnliche Umgebung suchen. Käufer sollten Ausrichtung, Straßenanbindung und Wintersonne prüfen.",
    },
    {
      title: "Tosalet und Cap Martí",
      text:
        "Etablierte Villenwohngebiete, die zu Käufern passen können, die Privatsphäre, Gärten und guten Zugang zu Arenal, dem Hafen und umliegenden Dienstleistungen suchen.",
    },
    {
      title: "Balcón al Mar und Portitxol",
      text:
        "Küstennahe Wohngebiete mit Meerblick, Klippen, Buchten und einer dramatischeren Landschaft. Käufer sollten Fahrzeiten, Zufahrtsstraßen und Instandhaltung sorgfältig berücksichtigen.",
    },
  ];

  const propertyTypes = [
    {
      title: "Apartments in der Nähe von Arenal oder dem Hafen",
      text:
        "Geeignet für Käufer, die fußläufige Erreichbarkeit, geringeren Pflegeaufwand, Strandzugang und einen praktischeren Lock-up-and-leave-Lebensstil wünschen.",
    },
    {
      title: "Freistehende Villen",
      text:
        "Häufig in Wohngebieten wie Tosalet, Cap Martí, Montgó und Balcón al Mar. Villen können Privatsphäre und Leben im Freien bieten, erfordern jedoch Instandhaltung und lokale Unterstützung.",
    },
    {
      title: "Häuser mit Meerblick",
      text:
        "Sehr begehrt in Gebieten näher an Klippen, Buchten und erhöhten Wohnlagen. Käufer sollten Zugang, Ausrichtung, Treppen, Wind und Renovierungsqualität prüfen.",
    },
    {
      title: "Stadthäuser und Häuser in der Altstadt",
      text:
        "Eine andere Lebensstiloption für Käufer, die historische Straßen, lokales Leben, fußläufige Erreichbarkeit und einen spanischeren Alltagsrhythmus schätzen.",
    },
  ];

  const restaurants = [
    {
      title: "La Siesta Jávea",
      label: "Essen direkt am Strand",
      text:
        "Eine entspannte Option direkt am Strand nahe der Montañar-Seite, beliebt für Cocktails, Mittagessen, Meerblick und Beach-Club-Atmosphäre. Sie kann gut zu Käufern passen, die einen lockeren Küstenlebensstil mögen.",
      bestFor:
        "Am besten für Strandatmosphäre, Cocktails, Mittagessen und entspanntes Essen mit Meerblick.",
    },
    {
      title: "La Perla de Jávea",
      label: "Essen am Arenal-Strand",
      text:
        "Ein Familienrestaurant direkt am Arenal-Strand, bekannt für mediterrane Gerichte, Reisgerichte, Fisch und gegrilltes Fleisch. Es ist ein gutes Beispiel für Jáveas unkomplizierten Strandrestaurant-Lebensstil.",
      bestFor:
        "Am besten für Blick auf den Arenal-Strand, Reisgerichte, Meeresfrüchte und klassische mediterrane Küche.",
    },
    {
      title: "Cala Clémence",
      label: "Restaurant an einer Meeresbucht",
      text:
        "Ein mediterranes Restaurant in einer Lage direkt am Meer, umgeben von Meer und Natur. Es spiegelt die landschaftlich reizvollere, buchtenorientierte Seite des Lebensstils in Jávea wider.",
      bestFor:
        "Am besten für Buchtenatmosphäre, mediterranes Essen und eine besonders schöne Küstenlage.",
    },
    {
      title: "Posidonia Jávea",
      label: "Lifestyle-Dining in Arenal",
      text:
        "Eine stilvolle Restaurantoption nahe Arenal, passend für Käufer, die eine zeitgemäßere Restaurantszene mit Strandleben in der Nähe wünschen.",
      bestFor:
        "Am besten für modernes Essen, Arenal-Atmosphäre und einen unkomplizierten Abend außer Haus.",
    },
  ];

  const activities = [
    {
      title: "Arenal-Strand und Promenade",
      text:
        "Arenal ist Jáveas am leichtesten zugänglicher Bereich für Strandleben, mit Restaurants, Cafés, Familienaktivitäten und einem sozialeren Rhythmus.",
    },
    {
      title: "Hafen von Jávea",
      text:
        "Der Hafen bietet Restaurants, Geschäfte, Meerblick, Fischereihafen-Atmosphäre und ein stärker ganzjähriges Küstengefühl als manche stärker urlaubsorientierten Zonen.",
    },
    {
      title: "Buchten Granadella und Portitxol",
      text:
        "Granadella und Portitxol gehören zu den bekanntesten Buchten von Jávea und sind attraktiv zum Schwimmen, für Ausblicke, Kajakfahren, Schnorcheln und dramatische Küstenlandschaften.",
    },
    {
      title: "Naturgebiet Montgó",
      text:
        "Die Montgó-Landschaft verleiht Jávea eine starke natürliche Identität, mit Bergblick, Wanderwegen und Wohngebieten, die sich anders anfühlen als die Strandzonen.",
    },
    {
      title: "Altstadtmärkte und lokales Leben",
      text:
        "Die Altstadt gibt Jávea mehr Tiefe als ein reines Strandziel, mit lokalen Dienstleistungen, traditionellen Straßen, Märkten und einem spanischeren Alltagsrhythmus.",
    },
    {
      title: "Restaurants und internationales soziales Leben",
      text:
        "Restaurants, Cafés, Beach Clubs und internationale Gruppen sind ein Teil davon, warum viele Käufer es einfacher finden, sich in Jávea einzuleben als in ruhigeren Villengebieten.",
    },
  ];

  const confidenceChecks = [
    {
      title: "Unterschiedliche Zonen, unterschiedliche Lebensstile",
      text:
        "Arenal, der Hafen, die Altstadt, Montgó und Balcón al Mar fühlen sich alle unterschiedlich an. Käufer sollten zuerst die Zone wählen, bevor sie sich in eine Immobilie verlieben.",
    },
    {
      title: "Sommeraktivität",
      text:
        "Jávea kann im Sommer deutlich voller werden, besonders rund um Arenal und beliebte Buchten. Manche Käufer genießen diese Energie; andere bevorzugen ruhigere Gegenden.",
    },
    {
      title: "Abhängigkeit vom Auto",
      text:
        "Einige Teile von Jávea sind gut zu Fuß erreichbar, viele Villenzonen erfordern jedoch ein Auto. Das ist wichtig für Ruheständler, Teilzeitbewohner und Käufer, die langfristig denken.",
    },
    {
      title: "Instandhaltung von Villen",
      text:
        "Pools, Gärten, Terrassen, Sicherheit, Feuchtigkeit und Außenpflege müssen alle geplant werden, besonders wenn die Immobilie nur zeitweise genutzt wird.",
    },
    {
      title: "Zugang und Gelände",
      text:
        "Einige attraktive Gebiete haben Hügel, Treppen, schmale Straßen oder längere Fahrwege. Käufer sollten tägliche Wege testen, nicht nur die Aussicht.",
    },
    {
      title: "Vermietungs- und Gemeinschaftsregeln",
      text:
        "Apartments und Eigentümergemeinschaften können Regeln zu Vermietung, Instandhaltung, Gebühren und gemeinschaftlichen Einrichtungen haben. Diese sollten vor dem Kauf geprüft werden.",
    },
  ];

  const relatedGuides = [
    {
      href: "/guides/moraira-vs-javea",
      title: "Moraira vs. Jávea",
      text:
        "Vergleichen Sie Jáveas aktiven, vielfältigen Lebensstil mit Morairas ruhigerem und eleganterem, stärker villenorientiertem Umfeld.",
    },
    {
      href: "/guides/best-areas-costa-blanca-north-retirees",
      title: "Beste Gegenden an der nördlichen Costa Blanca für Ruheständler",
      text:
        "Vergleichen Sie Jávea mit Moraira, Dénia, Altea, Benissa und Calpe aus der Perspektive von Ruheständlern.",
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
      label: "Xàbia Tourismus",
      href: "https://en.xabia.org/",
    },
    {
      label: "Strände und Buchten in Xàbia",
      href: "https://en.xabia.org/ver/1004/Beaches-and-coves.html",
    },
    {
      label: "Strand Arenal — Xàbia Tourismus",
      href: "https://en.xabia.org/ver/1437/El-Arenal.html",
    },
    {
      label: "Informationen zum Zugang zu Buchten — Xàbia Tourismus",
      href: "https://en.xabia.org/ver/7375/PLATGES-SEGURES.html",
    },
    {
      label: "La Siesta Jávea",
      href: "https://siestajavea.com/",
    },
    {
      label: "La Perla de Jávea",
      href: "https://www.laperladejavea.com/en/",
    },
    {
      label: "Cala Clémence",
      href: "https://calaclemence.com/?page_id=625",
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
          src="/images/javea.jpg"
          alt="Jávea Costa Blanca Nord Immobilien-Gebietsführer"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Nord Gebietsführer
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-7xl">
              Leben in Jávea.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Eine vollständige Lifestyle-Stadt an der nördlichen Costa Blanca
              mit Stränden, Buchten, Restaurants, Villengebieten, historischer
              Altstadt und einer etablierten internationalen Gemeinschaft.
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
                Mit Moraira vergleichen
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
              Ist Jávea das Richtige für Sie?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Jávea ist für Käufer geeignet, die Vielfalt, Komfort und einen
              stärkeren internationalen Lebensstil suchen.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Jávea, auch bekannt als Xàbia, ist eine der vollständigsten
              Lifestyle-Städte an der nördlichen Costa Blanca. Sie bietet eine
              seltene Kombination aus Stränden, Buchten, Restaurants,
              Villengebieten, historischer Altstadt, aktivem Hafen und einer
              starken internationalen Gemeinschaft.
            </p>

            <p className="mt-6">
              Im Vergleich zu Moraira wirkt Jávea in der Regel größer, aktiver
              und vielseitiger. Im Vergleich zu Benissa bietet es mehr
              Restaurants, Strandleben und soziale Aktivität. Für viele
              internationale Käufer macht das Jávea einfacher, um sich
              ganzjährig einzuleben.
            </p>

            <p className="mt-6">
              Der Schlüssel liegt darin, die richtige Zone zu wählen. Das Leben
              nahe Arenal, dem Hafen, der Altstadt, Montgó oder Balcón al Mar
              kann sehr unterschiedliche Alltage schaffen.
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
            Jávea eignet sich am besten für Käufer, die Strandleben,
            Restaurants, Dienstleistungen, eine internationale Gemeinschaft und
            Lebensstilvielfalt suchen.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Jávea ist nicht die ruhigste Option an der nördlichen Costa Blanca,
            besonders im Sommer. Aber für Käufer, die mehr Aktivität, ein
            besseres ganzjähriges Leben, eine größere Immobilienauswahl und
            stärkere soziale Möglichkeiten wünschen, ist genau das seine Stärke.
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
              Jávea hat eine der stärksten Restaurantszenen an der nördlichen
              Costa Blanca.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Für viele Käufer ist die Lifestyle-Attraktivität von Jávea stark
              mit Essen, Terrassen, Strandrestaurants, Cafés und sozialem Leben
              verbunden. Die Auswahl ist breiter als in kleineren Orten, mit
              Optionen rund um Arenal, den Hafen, Montañar und die Buchten.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-stone-500">
              Restaurantnamen, Öffnungszeiten und Eigentümer können sich ändern.
              Prüfen Sie immer aktuelle Öffnungszeiten, Reservierungen und
              saisonale Zeitpläne, bevor Sie einen Besuch planen.
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
            Jávea passt zu Käufern, die Strände, Buchten, Restaurants,
            Spazierwege und einen aktiveren Alltagsrhythmus wünschen.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Jávea ist vielseitiger als viele kleinere Orte. Sie können nahe am
            Strandleben, beim Hafen, in der Altstadt, unterhalb des Montgó oder
            in einer ruhigeren Villenzone wohnen. Diese Vielfalt ist attraktiv,
            bedeutet aber auch, dass die Wahl der richtigen Gegend sehr wichtig
            ist.
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
              Für wen Jávea am besten geeignet ist.
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
            Der richtige Teil von Jávea ist genauso wichtig wie die Immobilie
            selbst.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Jávea ist nicht ein einziger Lebensstil. Ein Haus nahe Arenal, eine
            Villa in Montgó, ein Apartment beim Hafen oder eine Immobilie mit
            Meerblick rund um Balcón al Mar können sich im Alltag völlig
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
              Jávea bietet eine der breitesten Immobilienauswahlen an der
              nördlichen Costa Blanca.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Käufer können zwischen Apartments nahe am Strandleben, Villen in
              etablierten Wohngebieten, Häusern in der Altstadt und Immobilien
              mit Meerblick nahe den Buchten wählen. Der richtige Immobilientyp
              hängt stark davon ab, wie Sie im Alltag leben möchten.
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
            Jávea kann ausgezeichnet für Ruheständler sein, die
            Dienstleistungen, Restaurants, soziales Leben und Vielfalt wünschen.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-white/80">
            <p>
              Für Ruheständler hat Jávea klare Stärken: mehr ganzjähriges
              Leben, Restaurants, Geschäfte, Zugang zur Gesundheitsversorgung,
              Spazierwege, Strandbereiche und eine etablierte internationale
              Gemeinschaft.
            </p>

            <p className="mt-6">
              Die praktische Frage ist, die richtige Zone zu wählen. Einige
              Teile von Jávea sind gut zu Fuß erreichbar und bequem, während
              viele Villengebiete ein Auto erfordern. Hügel, Treppen, Parken,
              Sommerandrang und die Entfernung zu Dienstleistungen sollten alle
              sorgfältig berücksichtigt werden.
            </p>

            <p className="mt-6">
              Für Ruheständler, die mehr Energie als in Moraira oder Benissa
              wünschen, kann Jávea eine der stärksten Optionen an der
              nördlichen Costa Blanca sein. Für Käufer, die maximale Ruhe
              suchen, kann eine kleinere Gegend besser geeignet sein.
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
              Was Sie vor dem Kauf in Jávea verstehen sollten.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Diese Prüfungen sind keine Gründe, Jávea zu meiden. Sie sind Teil
              einer gut vorbereiteten Kaufentscheidung.
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
            href="/regions/moraira"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Nahegelegene Orte vergleichen
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Jávea oder Moraira?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Moraira ist ruhiger und eleganter. Jávea ist größer, aktiver und
              bietet mehr Lebensstilvielfalt.
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
              Jávea oder Dénia?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Dénia kann urbaner und praktischer wirken. Jávea fühlt sich oft
              landschaftlicher, küstennaher und stärker lifestyle-orientiert an.
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
              Jávea oder Benissa?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Benissa ist ruhiger und zurückhaltender. Jávea bietet mehr
              Aktivität, Restaurants und internationales soziales Leben.
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
            Setzen Sie Ihre Jávea-Recherche fort.
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
            Nicht sicher, ob Jávea zu Ihnen passt?
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Vergleichen Sie Jávea mit Ihrem Lebensstil, bevor Sie eine
            Immobilie wählen.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Unser Area Match Assessment hilft Ihnen zu verstehen, ob Jávea,
            Moraira, Dénia, Altea, Benissa oder Calpe am besten zu Ihren
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