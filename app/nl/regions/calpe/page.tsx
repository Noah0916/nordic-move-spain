export const metadata = {
  title: "Wonen in Calpe | Huis kopen in Calpe Costa Blanca Noord",
  description:
    "Ontdek of Calpe de juiste plek is om een huis te kopen aan de Costa Blanca Noord. Een gids voor Nederlandse, Duitse, Zwitserse en internationale kopers over appartementen, stranden, voorzieningen, zeezicht, restaurants, pensioen en langetermijngeschiktheid.",
  alternates: {
    canonical: "/nl/regions/calpe",
    languages: {
      en: "/regions/calpe",
      nl: "/nl/regions/calpe",
      "x-default": "/regions/calpe",
    },
  },
};

export default function CalpeNlPage() {
  const lifestylePoints = [
    "Sterk voor strand, voorzieningen, restaurants en dagelijks gemak",
    "Meer stedelijk en praktischer dan Moraira of Benissa",
    "Veel appartementen, zeezichtwoningen en lock-up-and-leave opties",
    "Herkenbaar door de Peñón de Ifach en lange strandpromenades",
    "Geschikt voor kopers die voorzieningen graag dichtbij hebben",
    "Minder geschikt voor kopers die maximale rust en exclusiviteit zoeken",
  ];

  const buyerProfiles = [
    {
      title: "Kopers die gemak willen",
      text:
        "Calpe past goed bij kopers die supermarkten, restaurants, stranden, winkels, medische voorzieningen en dagelijks gemak graag dichtbij willen hebben.",
    },
    {
      title: "Appartementkopers",
      text:
        "Calpe is sterk voor appartementen, penthouses en woningen met zeezicht. Dit kan aantrekkelijk zijn voor kopers die minder onderhoud willen dan bij een villa.",
    },
    {
      title: "Tweedehuiskopers",
      text:
        "Voor tweedehuiskopers kan Calpe praktisch zijn door de strandpromenades, voorzieningen, restaurants en eenvoudige lock-up-and-leave mogelijkheden.",
    },
    {
      title: "Gepensioneerden die voorzieningen zoeken",
      text:
        "Calpe kan interessant zijn voor gepensioneerden die minder afhankelijk willen zijn van een villaomgeving en liever meer voorzieningen, wandelmogelijkheden en strand dichtbij hebben.",
    },
  ];

  const zones = [
    {
      title: "Arenal-Bol",
      text:
        "Arenal-Bol is een van de bekendste strandzones van Calpe, met een lange zandstrandpromenade, restaurants, winkels en veel voorzieningen. Dit past bij kopers die graag dichtbij strand en dagelijks gemak wonen.",
    },
    {
      title: "La Fossa / Levante",
      text:
        "La Fossa, ook bekend als Levante, ligt aan de noordzijde van de Peñón de Ifach en biedt strand, promenade, restaurants en appartementen met uitzicht. Dit gebied is praktisch en populair bij kopers die strandcomfort zoeken.",
    },
    {
      title: "Haven en Peñón de Ifach",
      text:
        "Het gebied rond de haven en de Peñón de Ifach heeft een duidelijke identiteit, met restaurants, visserssfeer, zeezicht en toegang tot natuur. Het is aantrekkelijk voor kopers die Calpe’s herkenbare kustbeeld waarderen.",
    },
    {
      title: "Oude centrum van Calpe",
      text:
        "Het oude centrum biedt meer historische sfeer, lokale winkels, pleinen en een ander ritme dan de strandzones. Het kan passen bij kopers die iets meer Spaans dagelijks leven willen.",
    },
    {
      title: "Maryvilla",
      text:
        "Maryvilla is een heuvelachtig residential gebied met villa’s, uitzichten en meer privacy. Kopers moeten hier goed letten op toegangswegen, hellingen, onderhoud en dagelijkse rijafstanden.",
    },
    {
      title: "Canuta en Puerto Blanco",
      text:
        "Deze gebieden liggen richting de westzijde van Calpe en kunnen aantrekkelijk zijn voor kopers die villa’s, zeezicht, rustiger wonen en toegang richting Altea zoeken.",
    },
  ];

  const propertyTypes = [
    {
      title: "Appartementen aan zee",
      text:
        "Een van de sterkste woningtypes in Calpe. Appartementen aan of nabij Arenal-Bol en La Fossa kunnen aantrekkelijk zijn voor kopers die strand, uitzicht en weinig onderhoud zoeken.",
    },
    {
      title: "Penthouses met zeezicht",
      text:
        "Calpe biedt goede mogelijkheden voor kopers die zeezicht willen zonder de verantwoordelijkheid van een grote villa. Let goed op gebouwkwaliteit, community fees, liften en oriëntatie.",
    },
    {
      title: "Villa’s in heuvelgebieden",
      text:
        "In gebieden zoals Maryvilla en Canuta zijn villa’s met uitzicht mogelijk. Deze kunnen veel privacy bieden, maar vragen meer aandacht voor toegang, onderhoud en praktische leefbaarheid.",
    },
    {
      title: "Woningen dicht bij voorzieningen",
      text:
        "Voor kopers die gemak belangrijk vinden, kunnen woningen dicht bij winkels, restaurants, strandpromenades en medische voorzieningen sterker zijn dan afgelegen villa’s.",
    },
  ];

  const restaurants = [
    {
      title: "Puerto Blanco",
      label: "Fine dining bij de kust",
      text:
        "Puerto Blanco is een meer verfijnde restaurantoptie in Calpe, geschikt voor kopers die houden van gastronomie, een verzorgde setting en een speciale avond uit.",
      bestFor:
        "Het beste voor fine dining, speciale gelegenheden en een meer verfijnde Calpe-ervaring.",
    },
    {
      title: "Baydal",
      label: "Klassieke Calpe-viskeuken",
      text:
        "Baydal is een bekende naam bij de haven en past bij Calpe’s vissersidentiteit. Het is nuttig voor kopers die de traditionele kant van Calpe’s gastronomie willen begrijpen.",
      bestFor:
        "Het beste voor vis, rijstgerechten, havengevoel en een klassieke Calpe-sfeer.",
    },
    {
      title: "Beat Restaurant",
      label: "Gastronomie",
      text:
        "Beat laat de meer gastronomische kant van Calpe zien. Voor kopers toont dit dat Calpe niet alleen een strand- en appartementenplaats is, maar ook een serieuze eetscene heeft.",
      bestFor:
        "Het beste voor gastronomie, bijzondere diners en kopers die kwaliteit belangrijk vinden.",
    },
    {
      title: "Restaurants aan Arenal-Bol en La Fossa",
      label: "Strandpromenade dining",
      text:
        "Langs de strandpromenades van Arenal-Bol en La Fossa vind je veel restaurants, cafés en terrassen. Dit is onderdeel van Calpe’s praktische en toegankelijke lifestyle.",
      bestFor:
        "Het beste voor dagelijkse lunches, stranddagen, gemak en informele avonden uit.",
    },
  ];

  const activities = [
    {
      title: "Arenal-Bol strand",
      text:
        "Arenal-Bol is een van Calpe’s belangrijkste stranden, met een lange promenade, restaurants, winkels en veel voorzieningen. Voor kopers laat dit de praktische strandzijde van Calpe zien.",
    },
    {
      title: "La Fossa / Levante strand",
      text:
        "La Fossa is een populaire strandzone aan de noordzijde van de Peñón de Ifach. Het biedt strand, uitzicht, restaurants en veel appartementen in de buurt.",
    },
    {
      title: "Peñón de Ifach",
      text:
        "De Peñón de Ifach is het iconische herkenningspunt van Calpe. Voor kopers geeft dit de plaats een sterke identiteit en een dramatische kustsetting.",
    },
    {
      title: "Haven en visrestaurants",
      text:
        "De haven geeft Calpe een meer lokale en maritieme laag, met visserssfeer, restaurants en toegang tot het gebied rond de Peñón.",
    },
    {
      title: "Oude centrum",
      text:
        "Het oude centrum biedt een andere kant van Calpe: lokale straten, pleinen, kleur, historie en meer Spaanse sfeer dan de strandpromenades.",
    },
    {
      title: "Las Salinas",
      text:
        "Las Salinas voegt natuur en open ruimte toe binnen de stedelijke structuur van Calpe. Het is een nuttig contrast met strand, hoogbouw en promenades.",
    },
  ];
    const confidenceChecks = [
    {
      title: "Appartement of villa",
      text:
        "Calpe biedt veel appartementen en penthouses, maar ook villa’s in heuvelachtige gebieden. De dagelijkse leefbaarheid verschilt sterk per woningtype en locatie.",
    },
    {
      title: "Drukte in de zomer",
      text:
        "Calpe kan in de zomer drukker aanvoelen dan Moraira of Benissa. Dit kan aantrekkelijk zijn voor kopers die levendigheid willen, maar minder passend voor wie maximale rust zoekt.",
    },
    {
      title: "Gebouwkwaliteit en community fees",
      text:
        "Bij appartementen zijn gebouwkwaliteit, liften, onderhoud, gemeenschappelijke kosten, regels en reservefondsen belangrijk om goed te controleren vóór aankoop.",
    },
    {
      title: "Parkeren en toegang",
      text:
        "In drukke zones rond stranden en promenades kan parkeren belangrijk zijn. Bij heuvelgebieden moeten kopers letten op toegangswegen, hellingen en dagelijkse rijroutes.",
    },
    {
      title: "Uitzicht versus praktisch gemak",
      text:
        "Zeezicht is aantrekkelijk, maar dagelijkse voorzieningen, liften, trappen, oriëntatie en afstand tot winkels zijn minstens zo belangrijk voor langdurig comfort.",
    },
    {
      title: "Lifestyle fit",
      text:
        "Calpe is praktischer en stedelijker dan kleinere plaatsen. Voor sommige kopers is dat ideaal. Anderen voelen zich beter in Moraira, Benissa of Altea.",
    },
  ];

  const relatedGuides = [
    {
      href: "/nl/guides/beste-gebieden-costa-blanca-noord-gepensioneerden",
      title: "Beste gebieden aan de Costa Blanca Noord voor gepensioneerden",
      text:
        "Vergelijk Calpe met Moraira, Jávea, Dénia, Altea en Benissa vanuit het perspectief van gepensioneerden.",
    },
    {
      href: "/nl/guides/waar-huis-kopen-costa-blanca-noord",
      title: "Waar een huis kopen aan de Costa Blanca Noord",
      text:
        "Vergelijk de belangrijkste plaatsen aan de Costa Blanca Noord voordat je kiest waar je wilt kopen.",
    },
    {
      href: "/nl/regions/moraira",
      title: "Moraira gebiedsgids",
      text:
        "Vergelijk Calpe’s praktische strand- en appartementenleven met Moraira’s rustigere villalevensstijl.",
    },
  ];

  const officialSources = [
    {
      label: "Calpe Tourism",
      href: "https://www.calpe.es/en",
    },
    {
      label: "Arenal-Bol Beach — Calpe",
      href: "https://www.calpe.es/en/beaches/arenal-bol-beach",
    },
    {
      label: "La Fossa / Levante Beach — Calpe",
      href: "https://www.calpe.es/en/beaches/fossa-beach",
    },
    {
      label: "Peñón de Ifach Natural Park",
      href: "https://parquesnaturales.gva.es/en/web/pn-penyal-d-ifac",
    },
    {
      label: "Calpe beaches",
      href: "https://www.calpe.es/en/beaches",
    },
    {
      label: "Puerto Blanco",
      href: "https://puertoblanco.eu/",
    },
    {
      label: "Restaurante Baydal",
      href: "https://www.restaurantebaydal.com/",
    },
    {
      label: "Beat Restaurant",
      href: "https://www.beatrestaurant.com/",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVBAR */}
      <nav className="absolute left-0 top-0 z-50 w-full px-8 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/nl"
            className="text-sm font-medium uppercase tracking-[0.28em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
          >
            Nordic Move Spain
          </a>

          <div className="hidden gap-8 text-sm md:flex">
            <a
              href="/nl"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Home
            </a>

            <a
              href="/nl/regions"
              className="border-b border-[#c8a063] pb-1 text-white drop-shadow"
            >
              Regio’s
            </a>

            <a
              href="/nl/services"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Diensten
            </a>

            <a
              href="/nl/guides"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Gidsen
            </a>

            <a
              href="/nl/about-us"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Over ons
            </a>

            <a
              href="/nl/contact"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-32">
        <img
          src="/images/calpe.jpg"
          alt="Calpe Costa Blanca Noord gebiedsgids voor kopers"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Noord Gebiedsgids
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-7xl">
              Wonen in Calpe.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Een praktische kustplaats met brede stranden, appartementen,
              zeezicht, voorzieningen, restaurants en de iconische Peñón de
              Ifach.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/nl/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Vraag je Area Match aan
              </a>

              <a
                href="/nl/regions/moraira"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Vergelijk met Moraira
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
              Past Calpe bij jou?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Calpe is voor kopers die strand, uitzicht en dagelijks gemak
              belangrijk vinden.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Calpe is een van de meest herkenbare kustplaatsen aan de Costa
              Blanca Noord, dankzij de Peñón de Ifach, lange stranden,
              strandpromenades, restaurants en een groot aanbod aan
              appartementen met zeezicht.
            </p>

            <p className="mt-6">
              Vergeleken met Moraira en Benissa voelt Calpe stedelijker,
              praktischer en drukker. Dat is niet per se een nadeel. Voor kopers
              die voorzieningen dichtbij willen, minder onderhoud zoeken en graag
              aan of nabij het strand wonen, kan Calpe juist heel logisch zijn.
            </p>

            <p className="mt-6">
              De belangrijkste vraag is of je houdt van Calpe’s mix van strand,
              hoogbouw, voorzieningen, toerisme en praktische leefbaarheid. Voor
              sommige kopers is dit ideaal. Voor anderen voelt een kleinere of
              rustigere plaats beter.
            </p>
          </div>
        </div>
      </section>

      {/* KORT ANTWOORD */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Kort antwoord
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Calpe past het best bij kopers die strand, voorzieningen,
            appartementen en praktisch gemak zoeken.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Calpe is niet de meest rustige of meest exclusieve optie aan de
            Costa Blanca Noord. De kracht ligt in dagelijkse bruikbaarheid:
            stranden, winkels, restaurants, wandelpromenades, zeezicht en een
            brede keuze aan appartementen.
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
              Restaurants en dineren
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Calpe combineert strandrestaurants, visrestaurants en gastronomie.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Voor kopers is Calpe praktisch omdat restaurants, cafés en
              terrassen vaak dicht bij stranden, promenades en appartementen
              liggen. Dat maakt het dagelijks leven eenvoudiger dan in meer
              verspreide villa-gebieden.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-stone-500">
              Namen van restaurants, openingstijden en eigenaren kunnen
              veranderen. Controleer altijd actuele openingstijden,
              reserveringen en seizoensschema’s voordat je een bezoek plant.
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

      {/* ACTIVITEITEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Activiteiten en dagelijks leven
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Calpe past bij kopers die strand, promenades, restaurants en gemak
            dicht bij huis willen.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Calpe is compacter en praktischer dan veel kopers verwachten. Het
            dagelijks leven draait sterk om stranden, promenades, winkels,
            restaurants, de haven, de Peñón de Ifach en de voorzieningen rondom
            het centrum.
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

      {/* KOPERS PROFIEL */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Kopersprofiel
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Voor wie Calpe het beste past.
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
            Wijken en zones
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Het juiste deel van Calpe bepaalt hoe praktisch je dagelijks leven
            wordt.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Calpe is niet één levensstijl. Een appartement bij Arenal-Bol, een
            woning bij La Fossa, een villa in Maryvilla of een huis dichter bij
            het oude centrum geeft telkens een andere ervaring.
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

      {/* WONINGTYPES */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Woningtypes
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Calpe is sterk voor appartementen, zeezicht en praktische
              lock-up-and-leave woningen.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Kopers kiezen Calpe vaak omdat ze minder onderhoud willen en meer
              gemak dichtbij huis zoeken. Toch blijft de exacte locatie
              belangrijk: strandzones, centrum, havengebied en heuvelgebieden
              voelen heel verschillend.
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

      {/* GESCHIKT VOOR GEPENSIONEERDEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Geschikt voor gepensioneerden
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Calpe kan praktisch zijn voor gepensioneerden die voorzieningen,
            strand en minder onderhoud zoeken.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-white/80">
            <p>
              Voor gepensioneerden kan Calpe interessant zijn omdat veel
              voorzieningen relatief dichtbij liggen. Stranden, promenades,
              winkels, restaurants en medische voorzieningen zijn voor veel
              kopers makkelijker bereikbaar dan in meer verspreide
              villagebieden.
            </p>

            <p className="mt-6">
              De praktische vraag is wel waar je precies koopt. Een appartement
              met lift en voorzieningen dichtbij kan heel comfortabel zijn. Een
              villa op een heuvel kan prachtig uitzicht bieden, maar ook meer
              rijden, trappen en onderhoud vragen.
            </p>

            <p className="mt-6">
              Calpe past vooral bij gepensioneerden die een levendiger,
              praktischer kustleven willen. Wie maximale rust, privacy en een
              meer exclusieve villawijk zoekt, voelt zich mogelijk beter in
              Moraira, Benissa of Altea.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/nl/guides/beste-gebieden-costa-blanca-noord-gepensioneerden"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Lees de gids voor gepensioneerden
            </a>

            <a
              href="/nl/services/area-match"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Vraag je Area Match aan
            </a>
          </div>
        </div>
      </section>

      {/* CHECKS VOOR ZEKERHEID */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Checks voor zekerheid
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Wat je moet begrijpen voordat je in Calpe koopt.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Deze checks zijn geen redenen om Calpe te vermijden. Ze helpen je
              bepalen of Calpe echt past bij je manier van leven.
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

      {/* VERGELIJKING */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <a
            href="/nl/regions/moraira"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Vergelijk rust
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Calpe of Moraira?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Moraira voelt rustiger, verfijnder en meer villagericht. Calpe is
              praktischer, drukker en sterker voor appartementen en strandgemak.
            </p>
          </a>

          <a
            href="/nl/regions/benissa"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Vergelijk privacy
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Calpe of Benissa?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Benissa biedt meer ruimte, natuur en privacy. Calpe biedt meer
              voorzieningen, strandinfrastructuur en dagelijks gemak.
            </p>
          </a>

          <a
            href="/nl/regions/altea"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Vergelijk sfeer
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Calpe of Altea?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Altea voelt artistieker en rustiger. Calpe is directer,
              praktischer en sterker voor strand, appartementen en voorzieningen.
            </p>
          </a>
        </div>
      </section>

      {/* GERELATEERDE GIDSEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Gerelateerde gidsen
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Ga verder met je onderzoek naar Calpe.
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

      {/* LAATSTE CTA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Twijfel je of Calpe bij je past?
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Vergelijk Calpe met je levensstijl voordat je een woning kiest.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Onze Area Match Assessment helpt je begrijpen of Calpe, Moraira,
            Jávea, Dénia, Altea of Benissa het beste past bij je prioriteiten,
            budget, levensstijl en plannen op lange termijn.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/nl/services/area-match"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Vraag je Area Match aan
            </a>

            <a
              href="/nl/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Plan een kennismaking
            </a>
          </div>
        </div>
      </section>

      {/* OFFICIËLE BRONNEN */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Officiële bronnen
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Deze gebiedsgids gebruikt waar mogelijk officiële toeristische en
            restaurantbronnen. Kopers moeten praktische, juridische,
            restaurant- en woningdetails altijd controleren voordat ze
            beslissingen nemen.
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