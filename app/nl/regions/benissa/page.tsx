export const metadata = {
  title: "Wonen in Benissa | Huis kopen in Benissa Costa Blanca Noord",
  description:
    "Ontdek of Benissa de juiste plek is om een huis te kopen aan de Costa Blanca Noord. Een gids voor Nederlandse, Duitse, Zwitserse en internationale kopers over lifestyle, villa’s, platteland, baaien, restaurants, activiteiten, pensioen en langetermijngeschiktheid.",
  alternates: {
    canonical: "/nl/regions/benissa",
    languages: {
      en: "/regions/benissa",
      nl: "/nl/regions/benissa",
      "x-default": "/regions/benissa",
    },
  },
};

export default function BenissaNlPage() {
  const lifestylePoints = [
    "Authentiek Spaans stadje met historische charme en lokaal ritme",
    "Sterke keuze voor kopers die ruimte, privacy en natuur zoeken",
    "Kustbaaien, kliffen en ecologische wandelroutes",
    "Goede basis tussen Moraira, Calpe, Jávea en de binnenlandse valleien",
    "Aantrekkelijk voor villakopers die een rustigere woonomgeving zoeken",
    "Het beste voor kopers die ingetogen kwaliteit belangrijker vinden dan resortenergie",
  ];

  const buyerProfiles = [
    {
      title: "Kopers die privacy zoeken",
      text:
        "Benissa kan goed passen bij kopers die vrijstaande woningen, ruimte om zich heen, open uitzichten en een rustigere woonomgeving willen zonder los te staan van de kust.",
    },
    {
      title: "Gepensioneerden die rust waarderen",
      text:
        "Voor gepensioneerden kan Benissa een rustiger ritme, authentieke omgeving en toegang tot nabijgelegen kustplaatsen bieden, zonder de drukte van grotere resorts.",
    },
    {
      title: "Villa- en plattelandskopers",
      text:
        "Het gebied is aantrekkelijk voor kopers die villa’s, rustieke woningen, huizen tegen de heuvels en residentiële zones met meer grond of privacy zoeken.",
    },
    {
      title: "Internationale kopers die discreet willen kopen",
      text:
        "Nederlandse, Duitse, Zwitserse, Belgische, Britse en Scandinavische kopers kunnen Benissa kiezen wanneer zij toegang tot de Costa Blanca Noord willen met meer authenticiteit en ruimte.",
    },
  ];
    const zones = [
    {
      title: "Benissa Pueblo",
      text:
        "Het historische binnenlandse stadje biedt lokaal leven, traditionele straten, voorzieningen en een authentieker Spaans ritme. Het past bij kopers die gemeenschap, erfgoed en jaarrond dagelijks leven waarderen.",
    },
    {
      title: "Benissa Costa",
      text:
        "De kustzijde van Benissa is waar veel internationale kopers zoeken naar villa’s, zeezicht, baaien en toegang richting Moraira en Calpe.",
    },
    {
      title: "La Fustera",
      text:
        "Een van de bekendste kustgebieden, dicht bij het strand, restaurants en de ecologische wandeling. Dit kan passen bij kopers die kusttoegang willen zonder een groot resortgevoel.",
    },
    {
      title: "Les Bassetes",
      text:
        "Een kleine jachthaven en kustzone tussen Benissa en Calpe, aantrekkelijk voor zeezicht, watersport, restaurants en een meer verzorgde kustlevensstijl.",
    },
    {
      title: "Cala Baladrar en Cala Advocat",
      text:
        "Rustige kustzones met baaien, beachbars en woongebieden in de buurt. Deze gebieden kunnen passen bij kopers die een ontspannen routine aan zee zoeken.",
    },
    {
      title: "Montemar en Buenavista",
      text:
        "Residentiële villawijken die vaak worden overwogen door internationale kopers die ruimte, privacy en toegang richting zowel Moraira als Calpe zoeken.",
    },
  ];

  const propertyTypes = [
    {
      title: "Vrijstaande villa’s",
      text:
        "De meest voorkomende keuze voor internationale kopers in Benissa Costa. Villa’s kunnen privacy, zwembaden, tuinen en uitzichten bieden, maar vragen ook onderhoud en lokale ondersteuning.",
    },
    {
      title: "Woningen met zeezicht",
      text:
        "Zeer aantrekkelijk, vooral rond kust- en heuvelgebieden. Kopers moeten goed letten op oriëntatie, toegangswegen, trappen, wind en winterzon.",
    },
    {
      title: "Landhuizen en fincas",
      text:
        "Nuttig voor kopers die grond, privacy en een meer landelijke mediterrane sfeer willen. Juridische checks, nutsvoorzieningen, toegang en onderhoud zijn hierbij extra belangrijk.",
    },
    {
      title: "Townhouses en dorpswoningen",
      text:
        "Een andere levensstijl voor kopers die authenticiteit, beloopbaarheid en lokaal Spaans leven belangrijker vinden dan een villagerichte kustsetting.",
    },
  ];
    const restaurants = [
    {
      title: "Coral Beach Les Bassetes",
      label: "Dineren bij de jachthaven",
      text:
        "Gelegen bij de jachthaven van Les Bassetes is Coral Beach Les Bassetes een goed voorbeeld van de meer verzorgde kustrestaurants in Benissa, met zeevruchten, rijstgerechten en een mediterrane marina-setting.",
      bestFor:
        "Het beste voor jachthavensfeer, zeevruchten, rijstgerechten en een verzorgde lunch of diner aan de kust.",
    },
    {
      title: "Oceana Club",
      label: "Dineren met zeezicht",
      text:
        "Oceana Club staat bekend om een panoramische mediterrane ligging dicht bij het water. Dit kan aantrekkelijk zijn voor kopers die ontspannen dineren, cocktails en uitzicht waarderen.",
      bestFor:
        "Het beste voor zeezicht, ontspannen dineren, cocktails en een socialere kustsfeer.",
    },
    {
      title: "Casa Bernardi",
      label: "Fine dining",
      text:
        "Casa Bernardi brengt een verfijndere gastronomische optie naar Benissa, omringd door mediterraan landschap. Het laat zien dat Benissa niet alleen landelijk en rustig is, maar ook onderdeel is van de bredere foodscene van de Marina Alta.",
      bestFor:
        "Het beste voor speciale gelegenheden, fine dining en kopers die gastronomie waarderen.",
    },
    {
      title: "Xiringuito Olalà",
      label: "Beachbar-sfeer",
      text:
        "Een meer casual beachbar-achtige optie bij de kust, nuttig voor kopers die houden van ontspannen lunches, drankjes en een eenvoudige routine aan zee in de warmere maanden.",
      bestFor:
        "Het beste voor ontspannen kustdagen, drankjes, tapas en zomerse sfeer.",
    },
  ];

  const activities = [
    {
      title: "Ecologische wandeling van Benissa",
      text:
        "De ecologische wandeling volgt delen van de kust van Benissa en verbindt baaien, kliffen en uitzichtpunten. Dit is een van de sterkste lifestylepunten voor kopers die graag langs zee wandelen.",
    },
    {
      title: "La Fustera strand",
      text:
        "La Fustera is een van de meest toegankelijke stranden van Benissa, met helder water, een ontspannen sfeer en toegang tot het kustpad.",
    },
    {
      title: "Cala Baladrar",
      text:
        "Een rustige baai met helder water en een natuurlijker gevoel. Dit past bij kopers die kleine baaien verkiezen boven lange stedelijke stranden.",
    },
    {
      title: "Les Bassetes jachthaven",
      text:
        "Les Bassetes is aantrekkelijk voor kopers die watersport, jachthavenleven, zeezicht en dineren aan de kust waarderen zonder de intensiteit van een grotere havenplaats.",
    },
    {
      title: "Historisch oude centrum",
      text:
        "Het oude centrum van Benissa heeft een van de beter bewaarde historische centra in de omgeving, met traditionele straten, erfgoedgebouwen en een meer lokale Spaanse sfeer.",
    },
    {
      title: "Sierra de Bèrnia",
      text:
        "Het berggebied van Bèrnia voegt een dramatisch binnenlands landschap toe, met wandelroutes en open uitzichten. Dit maakt Benissa gevarieerder dan een gewone strandbestemming.",
    },
  ];
    const confidenceChecks = [
    {
      title: "Kust of platteland",
      text:
        "Benissa verandert sterk per locatie. Een kustvilla, een landelijke finca en een dorpswoning geven allemaal een heel ander dagelijks leven.",
    },
    {
      title: "Afhankelijkheid van de auto",
      text:
        "De meeste kopers in Benissa hebben een auto nodig. Dit is vooral belangrijk voor gepensioneerden of deeltijdbewoners die makkelijk naar winkels, restaurants en zorg willen.",
    },
    {
      title: "Toegangswegen",
      text:
        "Sommige villa’s en landelijke woningen hebben smalle wegen, hellingen of langere toegangswegen. Dit moet zorgvuldig worden gecontroleerd vóór aankoop.",
    },
    {
      title: "Onderhoud",
      text:
        "Grotere villa’s, zwembaden, tuinen, terrassen en landelijke woningen vragen regelmatig onderhoud. Deeltijdeigenaren moeten betrouwbare lokale ondersteuning regelen.",
    },
    {
      title: "Juridische checks",
      text:
        "Bij villa’s, fincas en gerenoveerde woningen moeten kopers bouwlegaliteit, uitbreidingen, vergunningen, nutsvoorzieningen en geregistreerde gegevens goed controleren.",
    },
    {
      title: "Lifestyle fit",
      text:
        "Benissa is rustiger dan Jávea, Calpe of Dénia. Voor sommige kopers is dit ideaal. Anderen willen liever meer restaurants, winkels en activiteit op loopafstand.",
    },
  ];

  const relatedGuides = [
    {
      href: "/nl/guides/beste-gebieden-costa-blanca-noord-gepensioneerden",
      title: "Beste gebieden aan de Costa Blanca Noord voor gepensioneerden",
      text:
        "Vergelijk Benissa met Moraira, Jávea, Dénia, Altea en Calpe vanuit het perspectief van gepensioneerden.",
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
        "Vergelijk Benissa’s ruimte en authenticiteit met Moraira’s verfijnde villalevensstijl aan de kust.",
    },
  ];

  const officialSources = [
    {
      label: "Benissa Tourism",
      href: "https://www.benissa.es/en/",
    },
    {
      label: "Ecologische wandeling Benissa",
      href: "https://www.benissa.es/en/benissanatursport/paseo-ecologico/",
    },
    {
      label: "Baaien en stranden van Benissa",
      href: "https://www.benissa.es/en/calas-y-playas/",
    },
    {
      label: "La Fustera strand",
      href: "https://www.benissa.es/en/playas/playa-la-fustera/",
    },
    {
      label: "Cala Baladrar",
      href: "https://www.benissa.es/en/playas/cala-baladrar/",
    },
    {
      label: "Historisch centrum Benissa",
      href: "https://www.benissa.es/en/que-hacer/escapate-al-medievo/",
    },
    {
      label: "Benissa op Spain.info",
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
          src="/images/benissa.jpg"
          alt="Benissa Costa Blanca Noord gebiedsgids voor kopers"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Noord Gebiedsgids
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-7xl">
              Wonen in Benissa.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Authentieke Spaanse charme, landelijk wonen, verborgen baaien en
              ruime villazones tussen Moraira en Calpe.
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
              Past Benissa bij jou?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Benissa is voor kopers die ruimte, privacy en een meer lokaal
              Spaans ritme zoeken.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Benissa is een van de interessantste gebieden aan de Costa Blanca
              Noord voor kopers die niet willen kiezen tussen platteland en
              kust. De gemeente loopt van een historisch binnenlands stadje naar
              een mooie kustlijn met baaien, kliffen en mediterrane
              wandelroutes.
            </p>

            <p className="mt-6">
              Vergeleken met bekendere kustplaatsen voelt Benissa rustiger, meer
              residentieel en authentieker. Het draait minder om boulevards en
              nachtleven, en meer om villa’s, privacy, natuur, oude
              stadscharme en praktische toegang tot Moraira, Calpe en Jávea.
            </p>

            <p className="mt-6">
              Voor de juiste koper kan Benissa sterke langetermijnwaarde bieden:
              meer ruimte, een rustiger sfeer en een levensstijl die verbonden
              voelt met echt lokaal leven in plaats van alleen toerisme.
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
            Benissa past het best bij kopers die authenticiteit, privacy,
            kustbaaien en landelijk karakter zoeken.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Benissa is meestal niet de meest voor de hand liggende keuze voor
            eerste kopers, omdat het meer verspreid ligt dan Moraira, Calpe of
            Dénia. Maar voor kopers die ruimte, rust, natuur en ingetogen
            kwaliteit zoeken, is dat precies de kracht.
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
              Restaurants en dineren met zeezicht
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              De restaurantscene van Benissa is rustiger dan die van Moraira,
              maar heeft echte kwaliteit.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Benissa is geen grote restaurantplaats zoals Dénia of Jávea. De
              aantrekkingskracht is subtieler: dineren bij Les Bassetes,
              beachbar-lunches bij de baaien, restaurants in het landschap en
              gastronomie voor speciale momenten.
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
            Benissa past bij kopers die natuur, baaien, erfgoed en een rustiger
            mediterraan ritme waarderen.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Benissa is niet opgebouwd rond één boulevard of één strand. De
            levensstijl is verspreid over het oude centrum, het platteland,
            villawijken, kustbaaien en omliggende plaatsen. Dat maakt Benissa
            gevarieerd, maar ook meer afhankelijk van de auto.
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
              Voor wie Benissa het beste past.
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
            Het juiste deel van Benissa kiezen is essentieel.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Benissa is niet één enkele levensstijl. Een woning in Benissa
            Pueblo, een villa bij La Fustera, een huis rond Les Bassetes of een
            landelijke finca landinwaarts kan een totaal andere dagelijkse
            ervaring geven.
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
              Benissa is sterk voor villa’s, fincas, privacy en wonen tussen
              kust en platteland.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Kopers kiezen Benissa vaak omdat zij meer ruimte en een rustiger
              ritme zoeken. De sleutel is begrijpen of Benissa Costa, het
              binnenland of dorpsleven past bij je dagelijkse behoeften.
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
            Benissa kan passen bij gepensioneerden die rust, ruimte en
            authenticiteit zoeken — maar de exacte locatie maakt veel uit.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-white/80">
            <p>
              Voor gepensioneerden kan Benissa aantrekkelijk zijn door de
              rustigere levensstijl, meer privacy en toegang tot zowel kust als
              platteland. Het kan minder druk en minder toeristisch aanvoelen
              dan grotere plaatsen.
            </p>

            <p className="mt-6">
              De praktische vraag is dagelijks gemak. Sommige woningen vragen
              voor bijna alles een auto. Sommige landelijke of heuvelachtige
              woningen zijn prachtig, maar minder praktisch op latere leeftijd.
              Kopers moeten goed nadenken over rijden, toegang tot zorg,
              trappen, tuinonderhoud en afstand tot voorzieningen.
            </p>

            <p className="mt-6">
              Voor de juiste koper kan Benissa een zeer prettige basis voor de
              lange termijn zijn. Maar het is geen standaard pensioenlocatie
              voor iedereen. Kusttoegang, wegen en dagelijkse routine moeten
              goed worden gecontroleerd voordat je een woning kiest.
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
              Wat je moet begrijpen voordat je in Benissa koopt.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Deze checks zijn geen redenen om Benissa te vermijden. Ze horen
              bij een goed voorbereide aankoopbeslissing.
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
              Vergelijk dichtbij
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Benissa of Moraira?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Moraira voelt meestal verfijnder en meer kustgericht. Benissa kan
              meer ruimte, landelijk karakter en privacy bieden.
            </p>
          </a>

          <a
            href="/nl/regions/calpe"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Vergelijk gemak
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Benissa of Calpe?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Calpe biedt meer strandactiviteit, appartementen en voorzieningen.
              Benissa voelt rustiger, residentiëler en meer verspreid.
            </p>
          </a>

          <a
            href="/nl/regions/javea"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Vergelijk lifestyle
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Benissa of Jávea?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Jávea is groter en socialer. Benissa is rustiger en beter voor
              kopers die privacy, natuur en ingetogenheid zoeken.
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
            Ga verder met je onderzoek naar Benissa.
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
            Twijfel je of Benissa bij je past?
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Vergelijk Benissa met je levensstijl voordat je een woning kiest.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Onze Area Match Assessment helpt je begrijpen of Benissa, Moraira,
            Jávea, Dénia, Altea of Calpe het beste past bij je prioriteiten,
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