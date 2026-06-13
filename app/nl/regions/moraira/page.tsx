export const metadata = {
  title: "Wonen in Moraira | Huis kopen in Moraira Costa Blanca Noord",
  description:
    "Ontdek of Moraira de juiste plek is om een huis te kopen aan de Costa Blanca Noord. Een gids voor Nederlandse, Duitse, Zwitserse en internationale kopers over lifestyle, villa’s, pensioen, voorzieningen, stranden, restaurants, activiteiten, autorijden en langetermijngeschiktheid.",
  alternates: {
    canonical: "/nl/regions/moraira",
    languages: {
      en: "/regions/moraira",
      nl: "/nl/regions/moraira",
      "x-default": "/regions/moraira",
    },
  },
};

export default function MorairaNlPage() {
  const buyerProfiles = [
    {
      title: "Gepensioneerden die rust en kwaliteit zoeken",
      text:
        "Moraira is vaak aantrekkelijk voor gepensioneerden die een rustige kustplaats zoeken, met goede restaurants, zeezicht, privacy en een verfijnde internationale gemeenschap zonder de drukte van grotere plaatsen.",
    },
    {
      title: "Kopers van een tweede woning",
      text:
        "Moraira past goed bij kopers die een stijlvolle mediterrane basis zoeken voor langere verblijven, familiebezoeken en een rustiger leven rond terrassen, stranden, restaurants en buitenleven.",
    },
    {
      title: "Villakopers",
      text:
        "Moraira is vooral sterk voor vrijstaande villa’s, woningen tegen de heuvels, huizen met zeezicht en residentiële zones waar privacy en ruimte belangrijker zijn dan stedelijk gemak.",
    },
    {
      title: "Internationale kopers die discreet willen kopen",
      text:
        "Nederlandse, Duitse, Zwitserse, Belgische, Britse en Scandinavische kopers kiezen vaak voor Moraira omdat het rustig, gevestigd en meer residentieel aanvoelt dan veel grotere kustplaatsen.",
    },
  ];

  const zones = [
    {
      title: "El Portet",
      text:
        "Een van de meest gewilde gebieden van Moraira, bekend om de beschutte baai, rustige sfeer en prestigieuze villaomgeving. Dit gebied past bij kopers die schoonheid, exclusiviteit en nabijheid van zee belangrijk vinden.",
    },
    {
      title: "Pla del Mar",
      text:
        "Een gewilde woonwijk dicht bij het centrum. Dit kan passen bij kopers die een villaleven willen, maar ook graag makkelijker toegang hebben tot restaurants, winkels en de jachthaven.",
    },
    {
      title: "Benimeit",
      text:
        "Een heuvelachtig gebied dat vaak wordt geassocieerd met uitzicht, grotere villa’s en residentiële rust. Kopers moeten goed letten op toegangswegen, oriëntatie, onderhoud en rijafstanden.",
    },
    {
      title: "San Jaime",
      text:
        "Een gevestigde woonzone tussen Moraira en Benissa/Calpe, vaak aantrekkelijk voor kopers die villa’s, golf in de omgeving en goede toegang tot omliggende plaatsen willen.",
    },
    {
      title: "Moravit en Cap Blanc",
      text:
        "Kustgerichte woongebieden met toegang richting baaien, restaurants en de weg naar Calpe. Deze gebieden kunnen een goede balans bieden tussen kustleven en villawonen.",
    },
    {
      title: "Centrum en jachthavengebied",
      text:
        "Beter voor kopers die restaurants, winkels, havenleven en meer beloopbaarheid willen. Het aanbod kan beperkter zijn, maar het dagelijks gemak is sterker.",
    },
  ];

  const propertyTypes = [
    {
      title: "Vrijstaande villa’s",
      text:
        "De meest typische keuze voor internationale kopers in Moraira. Villa’s bieden privacy, tuinen, zwembaden en zeezicht, maar brengen ook onderhoud, beveiliging en beheer met zich mee.",
    },
    {
      title: "Woningen met zeezicht tegen de heuvels",
      text:
        "Zeer aantrekkelijk, maar kopers moeten goed letten op toegangswegen, trappen, oriëntatie, wind, renovatiekwaliteit en of de woning ook op latere leeftijd praktisch blijft.",
    },
    {
      title: "Townhouses en kleinere woningen",
      text:
        "Een nuttige optie voor kopers die minder onderhoud willen dan bij een grote villa, maar toch een residentiële levensstijl in de buurt van Moraira zoeken.",
    },
    {
      title: "Appartementen dicht bij het centrum",
      text:
        "Minder dominant dan in Calpe of Dénia, maar praktisch voor kopers die beloopbaarheid, minder onderhoud en een makkelijkere lock-up-and-leave woning willen.",
    },
  ];

  const confidenceChecks = [
    {
      title: "Afhankelijkheid van de auto",
      text:
        "Veel van de mooiste villagebieden in Moraira vragen om een auto. Dat is normaal, maar oudere kopers moeten goed nadenken over dagelijks rijden, parkeren, toegangswegen en mobiliteit op lange termijn.",
    },
    {
      title: "Ritme buiten het hoogseizoen",
      text:
        "Moraira is rustiger dan grotere plaatsen. Voor sommige kopers is dat precies de aantrekkingskracht. Anderen voelen zich misschien beter in Dénia of Jávea, waar meer jaarrond activiteit is.",
    },
    {
      title: "Onderhoud van villa’s",
      text:
        "Zwembaden, tuinen, terrassen, beveiliging, schilderwerk buiten en vochtbeheersing vragen aandacht. Kopers die deels in het buitenland wonen, hebben betrouwbare lokale ondersteuning nodig.",
    },
    {
      title: "Oriëntatie en zonlicht",
      text:
        "Villa’s op heuvels verschillen sterk in ligging. Winterzon, schaduw, wind en toegang kunnen het comfort veel meer beïnvloeden dan kopers tijdens een korte bezichtiging merken.",
    },
    {
      title: "Renovatiekwaliteit",
      text:
        "Sommige woningen zijn in de loop der jaren uitgebreid of gerenoveerd. Voor aankoop moeten onafhankelijke controles bevestigen dat bouwdetails, vergunningen, nutsvoorzieningen en registratie kloppen.",
    },
    {
      title: "Gemeenschap en verhuurregels",
      text:
        "Als de woning in een urbanisatie of gemeenschap ligt, moeten kopers inzicht hebben in kosten, regels, verhuurbeperkingen, onderhoudsplichten en notulen van vergaderingen.",
    },
  ];

  const lifestylePoints = [
    "Rustige kustlevensstijl met een gevestigde internationale gemeenschap",
    "Sterke aantrekkingskracht voor gepensioneerden, tweedehuiskopers en villakopers",
    "Restaurants, baaien, jachthavenleven en een verfijnde mediterrane sfeer",
    "Minder stedelijk en minder dichtbebouwd dan grotere kustplaatsen",
    "Goede basis om Benissa, Jávea, Calpe en de bredere Marina Alta te ontdekken",
    "Het beste voor kopers die privacy, kwaliteit en rust belangrijker vinden dan stadse energie",
  ];

  const restaurants = [
    {
      title: "Restaurante Club Náutico Moraira",
      label: "Dineren bij de jachthaven",
      text:
        "Een stijlvolle keuze bij de jachthaven voor mediterrane gerechten, rijstgerechten en een klassieke eetervaring met uitzicht richting zee en haven. Dit past bij kopers die houden van havenleven, lange lunches en een verfijnde kustsetting.",
      bestFor:
        "Het beste voor uitzicht op de jachthaven, mediterrane keuken en een elegante lunch of diner.",
    },
    {
      title: "Algas L’Andragó",
      label: "Tapas en cocktails aan zee",
      text:
        "Een ontspannen beachbar en restaurant bij Cala L’Andragó, bekend om tapas, cocktails, palmbomen en een ligging aan zee. Informeler dan formeel, en vooral aantrekkelijk voor drankjes, lunch of zonsondergang.",
      bestFor:
        "Het beste voor casual zeezicht, tapas, cocktails en een ontspannen kustgevoel.",
    },
    {
      title: "Eleven Moraira",
      label: "Zeezicht en uitzicht op het kasteel",
      text:
        "Een stijlvolle optie voor kopers die houden van buiten dineren, zeezicht en uitzicht richting het kasteel van Moraira. Het laat goed zien waarom veel internationale kopers de verfijnde food- en lifestylescene van Moraira waarderen.",
      bestFor:
        "Het beste voor diner, uitzicht en een stijlvolle avond in Moraira.",
    },
    {
      title: "Al Mar Moraira",
      label: "Moderne mediterrane keuken",
      text:
        "Een moderne mediterrane eetgelegenheid met zeevruchten, rijstgerechten, vis, vlees en huisspecialiteiten. Nuttig voor kopers die de meer eigentijdse restaurantscene van Moraira willen begrijpen.",
      bestFor:
        "Het beste voor kopers die moderne mediterrane gerechten en een verzorgde eetervaring zoeken.",
    },
  ];

  const activities = [
    {
      title: "El Portet strand en baai",
      text:
        "El Portet is een van de aantrekkelijkste lifestylegebieden van Moraira, met een beschutte baai, rustig water en een verfijnde kustsfeer. Voor kopers laat dit de premium kant van wonen in Moraira zien.",
    },
    {
      title: "Wandeling en uitzichtpunt Cap d’Or",
      text:
        "Het gebied rond Cap d’Or biedt een klassieke wandeling bij Moraira, met uitzicht over de kustlijn en El Portet. Het laat zien hoe natuur, zeezicht en dagelijks buitenleven onderdeel zijn van Moraira’s aantrekkingskracht.",
    },
    {
      title: "Cala L’Andragó en Cap Blanc",
      text:
        "Deze kustzijde van Moraira is aantrekkelijk voor rustige wandelingen, drankjes aan zee en zonsondergangmomenten. Het past bij kopers die een ontspannen kustroutine zoeken in plaats van een druk resortgevoel.",
    },
    {
      title: "Jachthaven, kasteel en centrum",
      text:
        "De jachthaven, het kleine kasteel, restaurants en het centrum van Moraira creëren een compact maar elegant dagelijks ritme. Moraira is geen grote stad, en precies daarom vinden veel kopers het aantrekkelijk.",
    },
    {
      title: "Restaurants en lange mediterrane lunches",
      text:
        "Uit eten gaan is een belangrijk deel van de levensstijl in Moraira. Kopers die houden van goede restaurants, terrassen met zeezicht, lunches bij de jachthaven en rustige avonden voelen zich hier vaak thuis.",
    },
    {
      title: "Omliggende gebieden ontdekken",
      text:
        "Moraira is ook een goede basis voor Benissa, Jávea, Calpe, Dénia en dorpen in het binnenland. Dit is belangrijk voor kopers die thuis rust willen, maar wel variatie binnen rijafstand zoeken.",
    },
  ];
    const relatedGuides = [
    {
      href: "/nl/guides/beste-gebieden-costa-blanca-noord-gepensioneerden",
      title: "Beste gebieden aan de Costa Blanca Noord voor gepensioneerden",
      text:
        "Vergelijk Moraira met Dénia, Jávea, Altea, Benissa en Calpe vanuit het perspectief van gepensioneerden.",
    },
    {
      href: "/nl/guides/moraira-vs-javea",
      title: "Moraira vs Jávea",
      text:
        "Begrijp het verschil tussen de rustige villalevensstijl van Moraira en het actievere internationale ritme van Jávea.",
    },
    {
      href: "/nl/guides/waar-huis-kopen-costa-blanca-noord",
      title: "Waar een huis kopen aan de Costa Blanca Noord",
      text:
        "Vergelijk de belangrijkste plaatsen aan de Costa Blanca Noord voordat je kiest waar je wilt kopen.",
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
      label: "Officiële toerismewebsite Teulada-Moraira",
      href: "https://www.turismoteuladamoraira.com/ttm/web_php/index.php?lang=4",
    },
    {
      label: "Gastronomie Teulada-Moraira",
      href: "https://www.turismoteuladamoraira.com/ttm/web_php/index.php?contenido=subapartados_coconut&id_boto=570&lang=4",
    },
    {
      label: "Route Cap d’Or",
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
          src="/images/moraira.jpg"
          alt="Moraira Costa Blanca Noord gebiedsgids voor kopers"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Noord Gebiedsgids
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-7xl">
              Wonen in Moraira.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Een verfijnde kustplaats voor internationale kopers die rust,
              privacy, villa’s, zeezicht en een elegante mediterrane levensstijl
              zoeken aan de Costa Blanca Noord.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/nl/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Vraag je Area Match aan
              </a>

              <a
                href="/nl/guides/moraira-vs-javea"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Vergelijk Moraira en Jávea
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
              Past Moraira bij jou?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Moraira wordt vaak gekozen door kopers die kwaliteit, rust en een
              meer private kustlevensstijl zoeken.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Moraira is een van de meest gewilde gebieden aan de Costa Blanca
              Noord voor internationale kopers die een rustige, elegante
              mediterrane levensstijl zoeken. In tegenstelling tot grotere
              kustplaatsen voelt Moraira kleiner, rustiger en residentiëler aan.
            </p>

            <p className="mt-6">
              De omgeving is vooral populair bij Nederlandse, Duitse, Zwitserse,
              Belgische, Scandinavische en Britse kopers die villa’s, zeezicht,
              privacy en een ontspannen levensstijl zoeken met restaurants,
              baaien en een gevestigde internationale gemeenschap.
            </p>

            <p className="mt-6">
              Officiële toeristische bronnen beschrijven Teulada-Moraira als
              een gebied met ongeveer 8 kilometer kustlijn met stranden en
              baaien. Voor kopers is die kustlijn onderdeel van de
              aantrekkingskracht, maar de echte vraag is of de rustige,
              villagerichte levensstijl past bij je plannen op lange termijn.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Kort antwoord
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Moraira past het best bij kopers die een rustige, villagerichte en
            verfijnde kustlevensstijl zoeken.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Moraira is meestal niet de meest stedelijke of meest praktische
            optie aan de Costa Blanca Noord. De kracht ligt ergens anders:
            privacy, rust, woonkwaliteit, elegant kustleven en een sterke match
            voor gepensioneerden en tweedehuiskopers die een langzamer ritme
            waarderen.
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
              De restaurantscene van Moraira is onderdeel van de aantrekkingskracht.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Voor veel kopers draait Moraira niet alleen om villa’s en
              stranden. Het gaat ook om lange lunches bij de jachthaven,
              ontspannen drankjes aan zee, terrassen bij zonsondergang en het
              gevoel dat goede restaurants dicht bij huis zijn.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-stone-500">
              Namen van restaurants en openingstijden kunnen veranderen. Check
              altijd actuele openingstijden, reserveringsregels en seizoensschema’s
              voordat je een bezoek plant.
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
            Moraira past bij kopers die houden van rustig buitenleven,
            kustwandelingen en kwaliteitstijd aan zee.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Moraira is geen grote stad en probeert dat ook niet te zijn. De
            aantrekkingskracht zit juist in stranden, baaien, wandelroutes,
            restaurants, jachthavenleven, terrassen en toegang tot de bredere
            Marina Alta-regio.
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
              Voor wie Moraira het beste past.
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
            Het juiste deel van Moraira is net zo belangrijk als de woning zelf.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Moraira is niet één enkele levensstijl. Een villa in El Portet, een
            woning bij Pla del Mar, een huis tegen de heuvels in Benimeit of een
            townhouse bij het centrum kunnen allemaal heel anders voelen in het
            dagelijks leven.
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
              Moraira is het sterkst voor villa’s, privacy en woonkwaliteit.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Kopers die voor Moraira kiezen, zoeken vaak meer dan alleen een
              woning. Ze zoeken een rustige mediterrane basis, buitenleven,
              privacy en comfort op lange termijn.
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
            Moraira kan een uitstekende plek zijn voor gepensioneerden die rust,
            privacy en levenskwaliteit waarderen.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-white/80">
            <p>
              Voor gepensioneerden is de aantrekkingskracht van Moraira
              duidelijk: een rustige kustsetting, een verfijnde internationale
              gemeenschap, goede restaurants, stranden, baaien en een langzamer
              ritme dan in grotere plaatsen.
            </p>

            <p className="mt-6">
              De belangrijkste vraag is praktische leefbaarheid. Veel villa’s
              vragen om een auto, sommige woningen liggen tegen heuvels en
              grotere huizen vragen regelmatig onderhoud. Voor sommige kopers is
              dat prima. Voor anderen kunnen Dénia, Jávea of Calpe praktischer
              zijn in het dagelijks leven.
            </p>

            <p className="mt-6">
              Daarom adviseren wij om eerst levensstijl en praktische behoeften
              te vergelijken voordat je een woning kiest. De juiste woning in
              Moraira kan een prachtige basis voor de lange termijn zijn, maar
              de exacte locatie maakt veel uit.
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
              Wat je moet begrijpen voordat je in Moraira koopt.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Deze checks zijn geen redenen om Moraira te vermijden. Ze horen
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
            href="/nl/regions/javea"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Vergelijk dichtbij
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Moraira of Jávea?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Jávea biedt meestal meer activiteit, een grotere internationale
              gemeenschap het hele jaar door en meer lifestylevariatie.
            </p>
          </a>

          <a
            href="/nl/regions/denia"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Vergelijk gemak
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Moraira of Dénia?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Dénia kan sterker zijn voor dagelijkse voorzieningen, stadsleven,
              toegang tot zorg en praktisch gemak het hele jaar door.
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
              Moraira of Benissa?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Benissa kan meer grond, landelijk karakter en privacy bieden,
              terwijl Moraira vaak meer verfijnd en kustgericht aanvoelt.
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
            Ga verder met je onderzoek naar Moraira.
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
            Twijfel je of Moraira bij je past?
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Vergelijk Moraira met je levensstijl voordat je een woning kiest.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Onze Area Match Assessment helpt je begrijpen of Moraira, Jávea,
            Dénia, Altea, Benissa of Calpe het beste past bij je prioriteiten,
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
            Deze gebiedsgids gebruikt waar mogelijk officiële toeristische
            bronnen en restaurantbronnen. Kopers moeten praktische,
            juridische, restaurant- en woningdetails altijd controleren voordat
            ze beslissingen nemen.
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