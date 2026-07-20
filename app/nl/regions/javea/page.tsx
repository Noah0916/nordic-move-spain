export const metadata = {
  title: "Wonen in Jávea | Huis kopen in Jávea Costa Blanca Noord",
  description:
    "Ontdek of Jávea de juiste plek is om een huis te kopen aan de Costa Blanca Noord. Een gids voor Nederlandse, Duitse, Zwitserse en internationale kopers over lifestyle, villa’s, oude centrum, haven, Arenal, restaurants, baaien, pensioen en langetermijngeschiktheid.",
  alternates: {
    canonical: "/nl/regions/javea",
    languages: {
      en: "/regions/javea",
      nl: "/nl/regions/javea",
      "x-default": "/regions/javea",
    },
  },
};

export default function JaveaNlPage() {
  const lifestylePoints = [
    "Een van de meest complete lifestyleplaatsen aan de Costa Blanca Noord",
    "Sterk aantrekkelijk voor gepensioneerden, tweedehuiskopers en jaarrond bewoners",
    "Drie duidelijke leefzones: oude centrum, haven en Arenal",
    "Goede mix van restaurants, stranden, baaien, wandelingen en voorzieningen",
    "Actiever en socialer dan Moraira of Benissa",
    "Het beste voor kopers die variatie, gemak en internationale gemeenschap zoeken",
  ];

  const buyerProfiles = [
    {
      title: "Gepensioneerden die activiteit en voorzieningen willen",
      text:
        "Jávea kan goed passen bij gepensioneerden die meer willen dan een rustige villawijk. De plaats biedt restaurants, winkels, toegang tot zorg, wandelgebieden, sociaal leven en een sterker jaarrond ritme dan kleinere plaatsen.",
    },
    {
      title: "Kopers van een tweede woning",
      text:
        "Jávea werkt goed voor kopers die een flexibele basis zoeken met stranden, baaien, restaurants, watersport, familiebezoeken en genoeg variatie om verschillende seizoenen te blijven genieten.",
    },
    {
      title: "Villa- en appartementkopers",
      text:
        "Jávea biedt een brede mix van woningen, van appartementen bij Arenal of de haven tot villa’s in residentiële zones zoals Tosalet, Balcón al Mar, Cap Martí en Montgó.",
    },
    {
      title: "Internationale kopers die gemeenschap zoeken",
      text:
        "Nederlandse, Duitse, Zwitserse, Belgische, Britse, Scandinavische en andere internationale kopers kiezen vaak voor Jávea omdat het gevestigd, sociaal en praktisch voelt voor langdurig wonen.",
    },
  ];

  const zones = [
    {
      title: "Oude centrum van Jávea",
      text:
        "Het historische centrum biedt traditionele straten, lokale voorzieningen, restaurants, markten en een meer Spaans jaarrond ritme. Het past bij kopers die authenticiteit en dagelijks gemak waarderen.",
    },
    {
      title: "Haven van Jávea",
      text:
        "De haven combineert zeezicht, restaurants, winkels, vissershavenleven, appartementen en een ontspannen jaarrond sfeer. Dit past bij kopers die kustgemak willen zonder direct aan het Arenal-strand te wonen.",
    },
    {
      title: "Arenal",
      text:
        "Arenal is de meest voor de hand liggende strand- en restaurantzone van Jávea. Het kan passen bij kopers die beloopbaarheid, appartementen, strandgevoel, restaurants en meer energie zoeken.",
    },
    {
      title: "Montgó",
      text:
        "Het Montgó-gebied is populair bij kopers die ruimte, villa’s, bergzicht en een meer residentiële omgeving willen. Kopers moeten goed letten op oriëntatie, toegangswegen en winterzon.",
    },
    {
      title: "Tosalet en Cap Martí",
      text:
        "Gevestigde residentiële villawijken die goed kunnen passen bij kopers die privacy, tuinen en goede toegang tot Arenal, de haven en omliggende voorzieningen zoeken.",
    },
    {
      title: "Balcón al Mar en Portitxol",
      text:
        "Kustgerichte woongebieden met zeezicht, kliffen, baaien en een dramatischer landschap. Kopers moeten rijafstanden, toegangswegen en onderhoud goed meenemen in hun beslissing.",
    },
  ];

  const propertyTypes = [
    {
      title: "Appartementen bij Arenal of de haven",
      text:
        "Praktisch voor kopers die beloopbaarheid, minder onderhoud, toegang tot strand en een eenvoudige lock-up-and-leave levensstijl willen.",
    },
    {
      title: "Vrijstaande villa’s",
      text:
        "Veelvoorkomend in residentiële gebieden zoals Tosalet, Cap Martí, Montgó en Balcón al Mar. Villa’s bieden privacy en buitenleven, maar vragen onderhoud en lokale ondersteuning.",
    },
    {
      title: "Woningen met zeezicht",
      text:
        "Zeer gewild in gebieden dichter bij de kliffen, baaien en hoger gelegen woonzones. Kopers moeten letten op toegang, oriëntatie, trappen, wind en renovatiekwaliteit.",
    },
    {
      title: "Townhouses en woningen in het oude centrum",
      text:
        "Een andere levensstijl voor kopers die historische straten, lokaal leven, beloopbaarheid en een meer Spaans dagelijks ritme waarderen.",
    },
  ];

  const restaurants = [
    {
      title: "La Siesta Jávea",
      label: "Dineren aan het strand",
      text:
        "Een ontspannen optie aan zee bij de Montañar-kant, populair voor cocktails, lunches, zeezicht en een beachclubachtige sfeer. Dit past bij kopers die houden van een casual kustlevensstijl.",
      bestFor:
        "Het beste voor strandgevoel, cocktails, lunches en ontspannen dineren met uitzicht op zee.",
    },
    {
      title: "La Perla de Jávea",
      label: "Dineren aan Arenal",
      text:
        "Een familierestaurant direct aan het Arenal-strand, bekend om mediterrane gerechten, rijst, vis en gegrild vlees. Het laat goed zien hoe gemakkelijk en toegankelijk het strandgerichte leven in Jávea kan zijn.",
      bestFor:
        "Het beste voor uitzicht op Arenal, rijstgerechten, zeevruchten en klassieke mediterrane keuken.",
    },
    {
      title: "Cala Clémence",
      label: "Restaurant bij een baai",
      text:
        "Een mediterraan restaurant in een ligging aan zee, omringd door natuur en uitzicht. Het laat de meer schilderachtige, baai-gerichte kant van Jávea’s levensstijl zien.",
      bestFor:
        "Het beste voor sfeer bij een baai, mediterrane gerechten en een meer bijzondere kustsetting.",
    },
    {
      title: "Posidonia Jávea",
      label: "Arenal lifestyle dining",
      text:
        "Een verzorgde restaurantoptie bij Arenal, nuttig voor kopers die een eigentijdse restaurantscene willen met strandleven dichtbij.",
      bestFor:
        "Het beste voor modern dineren, Arenal-sfeer en een makkelijke avond uit.",
    },
  ];

  const activities = [
    {
      title: "Arenal-strand en promenade",
      text:
        "Arenal is het meest toegankelijke strand- en lifestylegebied van Jávea, met restaurants, cafés, familieactiviteit en een socialer ritme.",
    },
    {
      title: "Haven van Jávea",
      text:
        "De haven biedt restaurants, winkels, zeezicht, vissershavensfeer en een meer jaarrond kustgevoel dan sommige vakantiegerichte zones.",
    },
    {
      title: "Granadella en Portitxol",
      text:
        "Granadella en Portitxol behoren tot de bekendste baaien van Jávea en zijn aantrekkelijk voor zwemmen, uitzicht, kajakken, snorkelen en dramatische kustlandschappen.",
    },
    {
      title: "Montgó natuurgebied",
      text:
        "Het Montgó-landschap geeft Jávea een sterke natuurlijke identiteit, met bergzicht, wandelroutes en woongebieden die anders aanvoelen dan de strandzones.",
    },
    {
      title: "Markten en lokaal leven in het oude centrum",
      text:
        "Het oude centrum geeft Jávea meer diepte dan alleen een strandbestemming, met lokale voorzieningen, traditionele straten, markten en een meer Spaans dagelijks ritme.",
    },
    {
      title: "Restaurants en internationaal sociaal leven",
      text:
        "Dineren, cafés, beachclubs en internationale groepen zijn onderdeel van waarom veel kopers zich makkelijker thuis voelen in Jávea dan in rustigere villagebieden.",
    },
  ];
    const confidenceChecks = [
    {
      title: "Verschillende zones, verschillende levensstijlen",
      text:
        "Arenal, de haven, het oude centrum, Montgó en Balcón al Mar voelen allemaal anders. Kopers moeten eerst de juiste zone kiezen voordat ze verliefd worden op een woning.",
    },
    {
      title: "Drukte in de zomer",
      text:
        "Jávea kan in de zomer veel drukker zijn, vooral rond Arenal en populaire baaien. Sommige kopers houden van die energie; anderen kiezen liever voor rustigere zones.",
    },
    {
      title: "Afhankelijkheid van de auto",
      text:
        "Sommige delen van Jávea zijn goed beloopbaar, maar veel villagebieden vragen om een auto. Dit is belangrijk voor gepensioneerden, deeltijdbewoners en kopers die vooruitdenken.",
    },
    {
      title: "Onderhoud van villa’s",
      text:
        "Zwembaden, tuinen, terrassen, beveiliging, vocht en buitenonderhoud vragen planning, vooral als de woning maar een deel van het jaar wordt gebruikt.",
    },
    {
      title: "Toegang en terrein",
      text:
        "Sommige aantrekkelijke gebieden hebben heuvels, trappen, smalle wegen of langere rijroutes. Kopers moeten dagelijkse routes testen, niet alleen het uitzicht beoordelen.",
    },
    {
      title: "Verhuur- en gemeenschapsregels",
      text:
        "Appartementen en gemeenschappen kunnen regels hebben over verhuur, onderhoud, kosten en gedeelde faciliteiten. Deze moeten vóór aankoop worden gecontroleerd.",
    },
  ];

  const relatedGuides = [
    {
      href: "/nl/guides/moraira-vs-javea",
      title: "Moraira vs Jávea",
      text:
        "Vergelijk de actieve, gevarieerde levensstijl van Jávea met de rustigere en meer verfijnde villalevensstijl van Moraira.",
    },
    {
      href: "/nl/guides/beste-gebieden-costa-blanca-noord-gepensioneerden",
      title: "Beste gebieden aan de Costa Blanca Noord voor gepensioneerden",
      text:
        "Vergelijk Jávea met Moraira, Dénia, Altea, Benissa en Calpe vanuit het perspectief van gepensioneerden.",
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
      label: "Xàbia Tourism",
      href: "https://en.xabia.org/",
    },
    {
      label: "Stranden en baaien van Xàbia",
      href: "https://en.xabia.org/ver/1004/Beaches-and-coves.html",
    },
    {
      label: "Arenal Beach — Xàbia Tourism",
      href: "https://en.xabia.org/ver/1437/El-Arenal.html",
    },
    {
      label: "Informatie over toegang tot baaien — Xàbia Tourism",
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
          src="/images/javea.png"
          alt="Jávea Costa Blanca Noord gebiedsgids voor kopers"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Noord Gebiedsgids
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-7xl">
              Wonen in Jávea.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Een complete lifestyleplaats aan de Costa Blanca Noord met
              stranden, baaien, restaurants, villawijken, een historisch centrum
              en een gevestigde internationale gemeenschap.
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
              Past Jávea bij jou?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Jávea is voor kopers die variatie, gemak en een sterkere
              internationale levensstijl zoeken.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Jávea, ook bekend als Xàbia, is een van de meest complete
              lifestyleplaatsen aan de Costa Blanca Noord. De plaats biedt een
              zeldzame combinatie van stranden, baaien, restaurants, villawijken,
              een historisch centrum, een werkende haven en een sterke
              internationale gemeenschap.
            </p>

            <p className="mt-6">
              Vergeleken met Moraira voelt Jávea meestal groter, actiever en
              gevarieerder. Vergeleken met Benissa biedt Jávea meer restaurants,
              strandleven en sociale activiteit. Voor veel internationale kopers
              maakt dit Jávea makkelijker om zich jaarrond thuis te voelen.
            </p>

            <p className="mt-6">
              De sleutel is het kiezen van de juiste zone. Wonen bij Arenal, de
              haven, het oude centrum, Montgó of Balcón al Mar creëert telkens
              een heel andere dagelijkse levensstijl.
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
            Jávea past het best bij kopers die strand, restaurants,
            voorzieningen, internationale gemeenschap en lifestylevariatie
            zoeken.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Jávea is niet de rustigste optie aan de Costa Blanca Noord, zeker
            niet in de zomer. Maar voor kopers die meer activiteit, sterker
            jaarrond leven, een bredere woningkeuze en meer sociale
            mogelijkheden zoeken, is dat precies de kracht.
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
              Jávea heeft een van de sterkste restaurantscenes aan de Costa
              Blanca Noord.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Voor veel kopers is de aantrekkingskracht van Jávea sterk
              verbonden met eten, terrassen, strandrestaurants, cafés en sociaal
              leven. De keuze is breder dan in kleinere plaatsen, met opties
              rond Arenal, de haven, Montañar en de baaien.
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
            Jávea past bij kopers die stranden, baaien, restaurants,
            wandelroutes en een actiever dagelijks ritme zoeken.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Jávea is gevarieerder dan veel kleinere plaatsen. Je kunt dicht bij
            strandactiviteit wonen, bij de haven, in het oude centrum, onder de
            Montgó of in een rustigere villazone. Die variatie is aantrekkelijk,
            maar betekent ook dat de juiste gebiedskeuze erg belangrijk is.
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
              Voor wie Jávea het beste past.
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
            Het juiste deel van Jávea is net zo belangrijk als de woning zelf.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Jávea is niet één enkele levensstijl. Een woning bij Arenal, een
            villa in Montgó, een appartement bij de haven of een woning met
            zeezicht rond Balcón al Mar kan allemaal heel anders voelen in het
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
              Jávea biedt een van de breedste woningkeuzes aan de Costa Blanca
              Noord.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Kopers kunnen kiezen tussen appartementen dicht bij het
              strandleven, villa’s in gevestigde woongebieden, woningen in het
              oude centrum en huizen met zeezicht bij de baaien. Het juiste
              woningtype hangt sterk af van hoe je dagelijks wilt leven.
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
            Jávea kan uitstekend zijn voor gepensioneerden die voorzieningen,
            restaurants, sociaal leven en variatie zoeken.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-white/80">
            <p>
              Voor gepensioneerden heeft Jávea duidelijke sterke punten: meer
              jaarrond leven, restaurants, winkels, toegang tot zorg,
              wandelroutes, strandgebieden en een gevestigde internationale
              gemeenschap.
            </p>

            <p className="mt-6">
              De praktische vraag is welke zone het beste past. Sommige delen
              van Jávea zijn beloopbaar en handig, terwijl veel villawijken een
              auto vragen. Heuvels, trappen, parkeren, zomerdrukte en afstand
              tot voorzieningen moeten allemaal zorgvuldig worden meegewogen.
            </p>

            <p className="mt-6">
              Voor gepensioneerden die meer energie willen dan Moraira of
              Benissa, kan Jávea een van de sterkste keuzes aan de Costa Blanca
              Noord zijn. Voor kopers die maximale rust zoeken, kan een kleinere
              plaats beter passen.
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
              Wat je moet begrijpen voordat je in Jávea koopt.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Deze checks zijn geen redenen om Jávea te vermijden. Ze horen bij
              een goed voorbereide aankoopbeslissing.
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
              Jávea of Moraira?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Moraira is rustiger en verfijnder. Jávea is groter, actiever en
              biedt meer variatie in levensstijl.
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
              Jávea of Dénia?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Dénia kan stedelijker en praktischer aanvoelen. Jávea voelt vaak
              meer landschappelijk, kustgericht en lifestylegedreven.
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
              Jávea of Benissa?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Benissa is rustiger en meer ingetogen. Jávea biedt meer
              activiteit, restaurants en internationaal sociaal leven.
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
            Ga verder met je onderzoek naar Jávea.
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
            Twijfel je of Jávea bij je past?
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Vergelijk Jávea met je levensstijl voordat je een woning kiest.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Onze Area Match Assessment helpt je begrijpen of Jávea, Moraira,
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