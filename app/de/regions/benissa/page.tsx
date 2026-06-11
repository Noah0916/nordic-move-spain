export const metadata = {
  title: "Leben in Benissa | Immobilie kaufen in Benissa Costa Blanca Nord",
  description:
    "Entdecken Sie, ob Benissa die richtige Gegend ist, um eine Immobilie an der nördlichen Costa Blanca zu kaufen. Ein Leitfaden für niederländische, deutsche, schweizerische und internationale Käufer, die Lebensstil, Villen, ländliches Wohnen, Küstenbuchten, Restaurants, Aktivitäten, Ruhestand und langfristige Eignung vergleichen.",
};

export default function BenissaPage() {
  const lifestylePoints = [
    "Authentische spanische Stadt mit historischem Charme und lokalem Rhythmus",
    "Starke Wahl für Käufer, die Platz, Privatsphäre und Natur suchen",
    "Küstenbuchten, Klippen und ökologische Spazierwege",
    "Gute Basis zwischen Moraira, Calpe, Jávea und den Tälern im Landesinneren",
    "Attraktiv für Villenkäufer, die eine ruhigere Wohnlage bevorzugen",
    "Am besten geeignet für Käufer, die zurückhaltende Qualität wichtiger finden als Resort-Energie",
  ];

  const buyerProfiles = [
    {
      title: "Käufer, die Privatsphäre suchen",
      text:
        "Benissa kann gut zu Käufern passen, die freistehende Häuser, Raum um sich herum, offene Ausblicke und eine ruhigere Wohnumgebung wünschen, ohne von der Küste abgeschnitten zu sein.",
    },
    {
      title: "Ruheständler, die Ruhe schätzen",
      text:
        "Für Ruheständler kann Benissa einen langsameren Lebensstil, authentische Umgebung und Zugang zu nahegelegenen Küstenorten bieten, während die Dichte größerer Resorts vermieden wird.",
    },
    {
      title: "Käufer von Villen und Landhäusern",
      text:
        "Die Gegend ist attraktiv für Käufer, die Villen, rustikale Immobilien, Häuser am Hang und Wohnlagen mit mehr Grundstück oder Privatsphäre suchen, als viele Küstenorte bieten.",
    },
    {
      title: "Anspruchsvolle internationale Käufer",
      text:
        "Niederländische, deutsche, schweizerische, belgische, britische und skandinavische Käufer wählen Benissa häufig, wenn sie Zugang zur nördlichen Costa Blanca mit mehr Authentizität und Platz suchen.",
    },
  ];

  const zones = [
    {
      title: "Benissa Pueblo",
      text:
        "Die historische Stadt im Landesinneren bietet lokales Leben, traditionelle Straßen, Dienstleistungen und einen authentischeren spanischen Rhythmus. Sie passt zu Käufern, die Gemeinschaft, Geschichte und ganzjähriges Alltagsleben schätzen.",
    },
    {
      title: "Benissa Costa",
      text:
        "Die Küstenseite von Benissa ist der Bereich, in dem viele internationale Käufer nach Villen, Meerblick, Buchten und Zugang Richtung Moraira und Calpe suchen.",
    },
    {
      title: "La Fustera",
      text:
        "Eine der bekanntesten Küstenlagen, nahe am Strand, Restaurants und dem ökologischen Spazierweg. Sie kann zu Käufern passen, die Küstennähe wünschen, ohne ein großes Resort-Gefühl zu haben.",
    },
    {
      title: "Les Bassetes",
      text:
        "Ein kleiner Marina- und Küstenbereich zwischen Benissa und Calpe, attraktiv für Meerblick, Wassersport, Gastronomie und einen eleganteren Küstenlebensstil.",
    },
    {
      title: "Cala Baladrar und Cala Advocat",
      text:
        "Ruhige Küstenzonen mit Buchten, Strandbars und Wohnimmobilien in der Nähe. Diese Bereiche können zu Käufern passen, die eine entspannte Routine am Meer suchen.",
    },
    {
      title: "Montemar und Buenavista",
      text:
        "Wohngebiete mit Villen, die häufig von internationalen Käufern in Betracht gezogen werden, die Platz, Privatsphäre und Zugang sowohl Richtung Moraira als auch Calpe suchen.",
    },
  ];

  const propertyTypes = [
    {
      title: "Freistehende Villen",
      text:
        "Die häufigste Wahl für internationale Käufer in Benissa Costa. Villen können Privatsphäre, Pools, Gärten und Ausblicke bieten, erfordern aber auch Instandhaltung und lokale Unterstützung.",
    },
    {
      title: "Häuser mit Meerblick",
      text:
        "Sehr attraktiv, besonders in Küsten- und Hanglagen. Käufer sollten Ausrichtung, Zufahrtsstraßen, Treppen, Windbelastung und Wintersonne prüfen.",
    },
    {
      title: "Landhäuser und Fincas",
      text:
        "Geeignet für Käufer, die Grundstück, Privatsphäre und eine ländlichere mediterrane Atmosphäre suchen. Rechtliche Prüfungen, Versorgungsanschlüsse, Zugang und Instandhaltung sind hier besonders wichtig.",
    },
    {
      title: "Stadthäuser und Dorfhäuser",
      text:
        "Eine andere Lebensstiloption für Käufer, die Authentizität, fußläufige Erreichbarkeit und lokales spanisches Leben einer villenorientierten Küstenlage vorziehen.",
    },
  ];

  const restaurants = [
    {
      title: "Coral Beach Les Bassetes",
      label: "Marina-Dining",
      text:
        "Direkt an der Marina Les Bassetes gelegen, ist Coral Beach Les Bassetes ein gutes Beispiel für Benissas eleganteres Essen an der Küste, mit Meeresfrüchten, Reisgerichten und mediterraner Marina-Atmosphäre.",
      bestFor:
        "Am besten für Marina-Atmosphäre, Meeresfrüchte, Reisgerichte und ein elegantes Mittag- oder Abendessen an der Küste.",
    },
    {
      title: "Oceana Club",
      label: "Essen mit Meerblick",
      text:
        "Der Oceana Club ist bekannt für seine panoramische mediterrane Lage nahe am Wasser. Er kann Käufer ansprechen, die entspanntes Essen an der Küste, Cocktails und Ausblicke schätzen.",
      bestFor:
        "Am besten für Meerblick, entspanntes Essen, Cocktails und eine geselligere Küstenatmosphäre.",
    },
    {
      title: "Casa Bernardi",
      label: "Fine Dining",
      text:
        "Casa Bernardi bringt eine raffiniertere gastronomische Option nach Benissa, umgeben von mediterraner Landschaft. Es zeigt, dass Benissa nicht nur ländlich und ruhig ist, sondern auch Teil der größeren Gastronomieszene der Marina Alta.",
      bestFor:
        "Am besten für besondere Anlässe, Fine Dining und Käufer, die hochwertige Gastronomie schätzen.",
    },
    {
      title: "Xiringuito Olalà",
      label: "Strandbar-Atmosphäre",
      text:
        "Eine lockerere Option im Strandbar-Stil nahe der Küste, passend für Käufer, die entspannte Mittagessen, Getränke und einen einfachen Rhythmus am Meer in den wärmeren Monaten genießen.",
      bestFor:
        "Am besten für lockere Küstentage, Getränke, Tapas und Sommeratmosphäre.",
    },
  ];

  const activities = [
    {
      title: "Ökologischer Spazierweg von Benissa",
      text:
        "Der ökologische Spazierweg folgt Abschnitten der Küste von Benissa und verbindet Buchten, Klippen und Aussichtspunkte. Er ist eines der stärksten Lifestyle-Merkmale für Käufer, die Spaziergänge am Meer genießen.",
    },
    {
      title: "Strand La Fustera",
      text:
        "La Fustera ist einer der am leichtesten zugänglichen Strände in Benissa, mit türkisfarbenem Wasser, entspannter Atmosphäre und Zugang zum Küstenweg.",
    },
    {
      title: "Cala Baladrar",
      text:
        "Eine ruhige Bucht mit kristallklarem Wasser und einem natürlicheren Gefühl. Sie passt zu Käufern, die kleine Buchten langen urbanen Stränden vorziehen.",
    },
    {
      title: "Marina Les Bassetes",
      text:
        "Les Bassetes ist attraktiv für Käufer, die Wassersport, Marina-Leben, Meerblick und Essen an der Küste genießen, ohne die Intensität eines größeren Hafenorts.",
    },
    {
      title: "Historische Altstadt",
      text:
        "Benissas Altstadt zählt zu den besser erhaltenen historischen Zentren der Gegend, mit traditionellen Straßen, historischen Gebäuden und einer lokaleren spanischen Atmosphäre.",
    },
    {
      title: "Sierra de Bèrnia",
      text:
        "Das Bèrnia-Gebirge sorgt für eine dramatische Landschaft im Landesinneren, Wanderwege und weite Ausblicke. Es ist Teil dessen, was Benissa vielseitiger macht als ein reines Strandziel.",
    },
  ];

  const confidenceChecks = [
    {
      title: "Küste oder Landesinneres",
      text:
        "Benissa verändert sich stark je nach Lage. Eine Villa an der Küste, eine Finca im Landesinneren und ein Dorfhaus bieten sehr unterschiedliche Alltage.",
    },
    {
      title: "Abhängigkeit vom Auto",
      text:
        "Die meisten Käufer in Benissa brauchen ein Auto. Das ist besonders wichtig für Ruheständler oder Teilzeitbewohner, die einfachen Zugang zu Geschäften, Restaurants und Gesundheitsversorgung wünschen.",
    },
    {
      title: "Zufahrtsstraßen",
      text:
        "Einige Villen und ländliche Häuser haben schmale Straßen, Steigungen oder längere Zufahrtswege. Diese sollten vor dem Kauf sorgfältig geprüft werden.",
    },
    {
      title: "Instandhaltung",
      text:
        "Größere Villen, Pools, Gärten, Terrassen und ländliche Immobilien benötigen regelmäßige Pflege. Teilzeit-Eigentümer sollten zuverlässige lokale Unterstützung einplanen.",
    },
    {
      title: "Rechtliche Prüfungen",
      text:
        "Bei Villen, Fincas und renovierten Häusern sollten Käufer die Rechtmäßigkeit des Gebäudes, Erweiterungen, Genehmigungen, Versorgungsanschlüsse und eingetragene Immobiliendetails prüfen.",
    },
    {
      title: "Passender Lebensstil",
      text:
        "Benissa ist ruhiger als Jávea, Calpe oder Dénia. Für manche Käufer ist das ideal. Andere bevorzugen möglicherweise mehr Restaurants, Geschäfte und Aktivität in fußläufiger Entfernung.",
    },
  ];

  const relatedGuides = [
    {
      href: "/guides/best-areas-costa-blanca-north-retirees",
      title: "Beste Gegenden an der nördlichen Costa Blanca für Ruheständler",
      text:
        "Vergleichen Sie Benissa mit Moraira, Jávea, Dénia, Altea und Calpe aus der Perspektive von Ruheständlern.",
    },
    {
      href: "/guides/where-to-buy-property-costa-blanca-north",
      title: "Wo man an der nördlichen Costa Blanca eine Immobilie kaufen sollte",
      text:
        "Vergleichen Sie die wichtigsten Orte der nördlichen Costa Blanca, bevor Sie entscheiden, wo Sie kaufen.",
    },
    {
      href: "/regions/moraira",
      title: "Moraira Gebietsführer",
      text:
        "Vergleichen Sie Benissas Platz und Authentizität mit Morairas eleganterem Villenlebensstil an der Küste.",
    },
  ];

  const officialSources = [
    {
      label: "Benissa Tourismus",
      href: "https://www.benissa.es/en/",
    },
    {
      label: "Ökologischer Spazierweg von Benissa",
      href: "https://www.benissa.es/en/benissanatursport/paseo-ecologico/",
    },
    {
      label: "Buchten und Strände in Benissa",
      href: "https://www.benissa.es/en/calas-y-playas/",
    },
    {
      label: "Strand La Fustera",
      href: "https://www.benissa.es/en/playas/playa-la-fustera/",
    },
    {
      label: "Cala Baladrar",
      href: "https://www.benissa.es/en/playas/cala-baladrar/",
    },
    {
      label: "Historisches Zentrum von Benissa",
      href: "https://www.benissa.es/en/que-hacer/escapate-al-medievo/",
    },
    {
      label: "Benissa auf Spain.info",
      href: "https://www.spain.info/en/destination/benissa/",
    },
    {
      label: "Coral Beach Les Bassetes",
      href: "https://www.restbassetes.com/",
    },
    {
      label: "Oceana Club",
      href: "https://www.oceanacostablanca.com/",
    },
    {
      label: "Casa Bernardi",
      href: "https://casabernardi.es/en/",
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
          src="/images/benissa.jpg"
          alt="Benissa Costa Blanca Nord Immobilien-Gebietsführer"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Nord Gebietsführer
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-7xl">
              Leben in Benissa.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Authentischer spanischer Charme, ländliches Wohnen, versteckte
              Küstenbuchten und großzügige Villengebiete zwischen Moraira und
              Calpe.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Ihren Area Match anfragen
              </a>

              <a
                href="/regions/moraira"
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
              Ist Benissa das Richtige für Sie?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Benissa ist für Käufer geeignet, die Platz, Privatsphäre und
              einen stärker lokalen spanischen Rhythmus suchen.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Benissa ist eine der interessantesten Gegenden an der nördlichen
              Costa Blanca für Käufer, die sich nicht zwischen ländlichem Wohnen
              und Küste entscheiden möchten. Die Gemeinde erstreckt sich von
              einer historischen Stadt im Landesinneren bis zu einer schönen
              Küste mit Buchten, Klippen und mediterranen Spazierwegen.
            </p>

            <p className="mt-6">
              Im Vergleich zu bekannteren Küstenorten wirkt Benissa ruhiger,
              stärker wohnlich und authentischer. Es geht weniger um
              Strandboulevards und Nachtleben, sondern mehr um Villen,
              Privatsphäre, Natur, Altstadtcharme und praktischen Zugang zu
              nahegelegenen Orten wie Moraira, Calpe und Jávea.
            </p>

            <p className="mt-6">
              Für den richtigen Käufer kann Benissa einen ausgezeichneten
              langfristigen Wert bieten: mehr Platz, eine ruhigere Atmosphäre
              und einen Lebensstil, der sich mit echtem lokalem Leben verbunden
              anfühlt statt nur mit Tourismus.
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
            Benissa eignet sich am besten für Käufer, die Authentizität,
            Privatsphäre, Küstenbuchten und ländlichen Charakter suchen.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Benissa ist meist nicht die naheliegendste Wahl für Erstkäufer, da
            es weitläufiger ist als Moraira, Calpe oder Dénia. Aber für Käufer,
            die Platz, Ruhe, Natur und zurückhaltende Qualität suchen, ist genau
            das seine Stärke.
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
              Benissas Restaurantszene ist ruhiger als die von Moraira, bietet
              aber echte Qualität.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Benissa ist keine große Restaurantstadt wie Dénia oder Jávea. Der
              Reiz ist diskreter: Essen an der Marina Les Bassetes,
              Strandbar-Mittagessen nahe den Buchten, Restaurants im
              Landesinneren und Gastronomie für besondere Anlässe.
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
            Benissa passt zu Käufern, die Natur, Buchten, Geschichte und einen
            langsameren mediterranen Rhythmus genießen.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Benissa ist nicht um eine einzige Promenade oder einen einzigen
            Strand gebaut. Der Lebensstil verteilt sich auf die Altstadt, das
            Landesinnere, Villengebiete, Küstenbuchten und nahegelegene Orte.
            Das macht es vielseitiger, aber auch stärker vom Auto abhängig.
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
              Für wen Benissa am besten geeignet ist.
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
            Die Wahl des richtigen Teils von Benissa ist entscheidend.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Benissa ist nicht ein einziger Lebensstil. Ein Haus in Benissa
            Pueblo, eine Villa nahe La Fustera, eine Immobilie rund um Les
            Bassetes oder eine ländliche Finca im Landesinneren können im Alltag
            völlig unterschiedliche Erfahrungen schaffen.
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
              Benissa ist besonders stark bei Villen, Fincas, Privatsphäre und
              einer Mischung aus Küsten- und Landleben.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Käufer, die Benissa wählen, suchen oft mehr Platz und einen
              ruhigeren Rhythmus. Der Schlüssel liegt darin zu verstehen, ob
              Benissa an der Küste, Benissa im Landesinneren oder das Dorfleben
              zu Ihren täglichen Bedürfnissen passt.
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
            Benissa kann zu Ruheständlern passen, die Ruhe, Platz und
            Authentizität suchen — aber die genaue Lage ist entscheidend.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-white/80">
            <p>
              Für Ruheständler kann Benissa attraktiv sein, weil es einen
              ruhigeren Lebensstil, mehr Privatsphäre und Zugang sowohl zur
              Küste als auch zum Landesinneren bietet. Es kann weniger lebhaft
              und weniger touristisch wirken als größere Orte.
            </p>

            <p className="mt-6">
              Die praktische Frage ist die tägliche Bequemlichkeit. Manche
              Häuser erfordern für fast alles ein Auto. Einige ländliche oder
              am Hang gelegene Immobilien können wunderschön sein, aber in
              späteren Jahren weniger praktisch. Käufer sollten sorgfältig über
              Autofahren, Zugang zur Gesundheitsversorgung, Treppen,
              Gartenpflege und Nähe zu Dienstleistungen nachdenken.
            </p>

            <p className="mt-6">
              Für den richtigen Käufer kann Benissa eine sehr zufriedenstellende
              langfristige Basis bieten. Aber es ist keine Ruhestandsgegend, die
              für alle gleichermaßen passt. Zugang zur Küste, Straßenqualität
              und die tägliche Routine sollten geprüft werden, bevor eine
              Immobilie gewählt wird.
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
              Was Sie vor dem Kauf in Benissa verstehen sollten.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Diese Prüfungen sind keine Gründe, Benissa zu meiden. Sie sind
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
            href="/regions/moraira"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Nahegelegene Orte vergleichen
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Benissa oder Moraira?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Moraira wirkt meist eleganter und stärker küstenorientiert,
              während Benissa mehr Platz, ländlichen Charakter und Privatsphäre
              bieten kann.
            </p>
          </a>

          <a
            href="/regions/calpe"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Komfort vergleichen
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Benissa oder Calpe?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Calpe bietet mehr Strandaktivität, Apartments und
              Dienstleistungen. Benissa wirkt ruhiger, wohnlicher und
              weitläufiger.
            </p>
          </a>

          <a
            href="/regions/javea"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Lebensstil vergleichen
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Benissa oder Jávea?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Jávea ist größer und sozialer. Benissa ist ruhiger und besser für
              Käufer geeignet, die Privatsphäre, Natur und Zurückhaltung
              bevorzugen.
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
            Setzen Sie Ihre Benissa-Recherche fort.
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
            Nicht sicher, ob Benissa zu Ihnen passt?
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Vergleichen Sie Benissa mit Ihrem Lebensstil, bevor Sie eine
            Immobilie wählen.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Unser Area Match Assessment hilft Ihnen zu verstehen, ob Benissa,
            Moraira, Jávea, Dénia, Altea oder Calpe am besten zu Ihren
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