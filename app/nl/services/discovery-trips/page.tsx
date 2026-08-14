export const metadata = {
  title:
    "4-daagse Buyer Discovery Trip Costa Blanca Noord | Woning kopen in Spanje",
  description:
    "Een 4-daagse Buyer Discovery Trip aan de Costa Blanca Noord voor serieuze kopers die een woning in Spanje willen kopen. Met privéchauffeur, verblijf in een 4- of 5-sterrenhotel of luxe finca, Area Match Report, geselecteerde individuele woningbezichtigingen, regiotours, lifestyle-ervaringen en begeleiding voor een veilige aankoop.",
  keywords: [
    "4-daagse Buyer Discovery Trip Costa Blanca Noord",
    "Buyer Discovery Trip Spanje",
    "woning kopen in Spanje",
    "huis kopen in Spanje",
    "woning kopen in Spanje",
    "woning kopen Costa Blanca Noord",
    "huis kopen Costa Blanca Noord",
    "villa kopen Costa Blanca Noord",
    "bezichtigingsreis Spanje",
    "woningbezichtigingen Spanje",
    "individuele woningbezichtigingen Spanje",
    "woningbezichtigingen Costa Blanca Noord",
    "geselecteerde woningbezichtigingen Spanje",
    "Area Match Report Spanje",
    "aankoopbegeleiding woning Spanje",
    "veilig woning kopen Spanje",
    "vakantiewoning kopen Spanje",
    "verhuizen naar Spanje",
    "huis kopen Moraira",
    "villa kopen Moraira",
    "huis kopen Jávea",
    "villa kopen Jávea",
    "woning kopen Altea",
    "huis kopen Benissa",
    "appartement kopen Calpe",
    "woning kopen Dénia",
    "veilig een huis kopen in Spanje",
  ],
  alternates: {
    canonical: "/nl/buyer-discovery-trip-costa-blanca-north",
  },
  openGraph: {
    title:
      "4-daagse Buyer Discovery Trip Costa Blanca Noord | Woning kopen in Spanje",
    description:
      "Ontdek in 4 dagen waar u aan de Costa Blanca Noord een woning wilt kopen. Met privéchauffeur, verblijf in een 4- of 5-sterrenhotel of luxe finca, Area Match Report, geselecteerde bezichtigingen, experts, regiotours en gelijkgestemde kopers.",
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: "/images/discover-card.png",
        width: 1200,
        height: 630,
        alt: "4-daagse Buyer Discovery Trip Costa Blanca Noord voor het kopen van een woning in Spanje",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const buyerDiscoveryTripStructuredData = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "4-daagse Buyer Discovery Trip Costa Blanca Noord",
  description:
    "Een volledig georganiseerde 4-daagse woning- en lifestylereis voor internationale kopers die een huis, villa, appartement of vakantiewoning aan de Costa Blanca Noord in Spanje willen kopen, inclusief intake, Area Match Report en geselecteerde individuele woningbezichtigingen.",
  touristType: [
    "Internationale kopers",
    "Britse kopers",
    "Scandinavische kopers",
    "Europese kopers",
    "Kopers van een vakantiewoning",
    "Kopers die van plan zijn naar Spanje te verhuizen",
  ],
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Dag 1: Aankomst, privétransfer, intake en welkomsmoment",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dag 2: Regiotour door Moraira, Benissa en Calpe met geselecteerde woningbezichtigingen en lifestyle-ervaringen",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dag 3: Jávea en Dénia met individuele woningbezichtigingen, lunch en lokale activiteiten",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Dag 4: Altea, gesprekken met experts, aankoopproces en vervolgstappen",
      },
    ],
  },
  areaServed: [
    "Costa Blanca Noord",
    "Costa Blanca Norte",
    "Moraira",
    "Jávea",
    "Javea",
    "Altea",
    "Benissa",
    "Calpe",
    "Dénia",
    "Denia",
  ],
};

export default function BuyerDiscoveryTripPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buyerDiscoveryTripStructuredData),
        }}
      />

      <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
        {/* HERO */}
        <section className="relative min-h-[90vh] overflow-hidden">
          <img
            src="/images/discover-card.png"
            alt="4-daagse Buyer Discovery Trip Costa Blanca Noord voor kopers die een woning in Spanje willen kopen"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                4-daagse Buyer Discovery Trip Costa Blanca Noord
              </p>

              <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
                Een woning kopen in Spanje? Ontdek in 4 dagen waar u écht wilt wonen aan de Costa Blanca Noord.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                Een volledig georganiseerde woning- en lifestylereis met privéchauffeur, zorgvuldig gematchte gelijkgestemde kopers, verblijf in een 4- of 5-sterrenhotel of luxe finca, Area Match Report, regiotours, geselecteerde individuele woningbezichtigingen en gesprekken met de specialisten die een veilige woningaankoop in Spanje mogelijk maken.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/nl/contact"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Meld u aan voor uw 4-daagse Buyer Discovery Trip
                </a>

                <a
                  href="/nl/regions"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
                >
                  Ontdek de regio's
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Duidelijkheid voordat u koopt
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Een woning kopen in Spanje zou niet moeten beginnen met willekeurige bezichtigingen. Het begint met het vinden van de juiste regio.
                </h2>
              </div>

              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Als u een woning aan de Costa Blanca Noord wilt kopen, moet u verder kijken dan mooie foto’s, makelaarsteksten en losse woningadvertenties. U moet de juiste regio ervaren, maar ook woningen zien die daadwerkelijk passen bij uw budget, gezinssituatie, wensen, Area Match Report en de levensstijl die u in Spanje wilt opbouwen.
                </p>

                <p className="mt-6">
                  Onze Buyer Discovery Trip is een zorgvuldig samengestelde 4-daagse woning- en lifestyle-ervaring aan de Costa Blanca Noord. De reis is ontwikkeld voor Britse en andere internationale kopers die met meer duidelijkheid, betere informatie en minder risico een huis, villa, appartement, nieuwbouwwoning of vakantiewoning in Spanje willen kopen.
                </p>

                <p className="mt-6">
                  Dit is geen standaard bezichtigingsreis waarbij u zonder duidelijke strategie van de ene woning naar de andere wordt gereden. Het is een volledig georganiseerde groepservaring met gelijkgestemden, een privéchauffeur, individuele momenten van privacy, geselecteerde woningbezichtigingen, lokale lifestyle-ervaringen en directe gesprekken met de experts die u nodig heeft om veilig en goed geïnformeerd een woning in Spanje te kopen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO QUICK VALUE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Voor serieuze woningkopers
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              De 4-daagse Buyer Discovery Trip voor iedereen die een woning aan de Costa Blanca Noord wil kopen.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Woning kopen in Spanje",
                "Woning kopen Costa Blanca Noord",
                "Vakantiewoning in Spanje",
                "Woning kopen met begeleiding",
                "Geselecteerde woningbezichtigingen",
                "Area Match Report voor kopers",
                "Villa kopen in Moraira of Jávea",
                "Appartement kopen in Calpe of Dénia",
                "Het aankoopproces in Spanje begrijpen",
                "Ontmoet gelijkgestemde kopers",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              U krijgt een realistisch beeld van de regio en van woningen die zorgvuldig vooraf zijn geselecteerd op basis van uw intake, budget, Area Match Report, woonwensen en levensstijl. U bekijkt niet zomaar huizen. U ziet woningen die passen bij de plek waar u daadwerkelijk zou willen wonen.
            </p>
          </div>
        </section>

        {/* FIRST WE GET TO KNOW YOU */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Eerst leren we u kennen
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Uw reis begint met uw levensstijl, niet met woningadvertenties.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Voor uw aankomst beginnen we met uw kosteloze Area Match Report en een persoonlijk intakegesprek. We bespreken uw doelen, budget, gezinssituatie, dagelijkse routines, interesses, gewenste levensstijl, verhuisplannen, aandachtspunten rond veiligheid en prioriteiten voor de lange termijn.
                </p>

                <p className="mt-6">
                  Pas wanneer we uw profiel goed begrijpen, stellen we uw programma samen. Zo kunnen we ons richten op regio’s en woningen die werkelijk bij uw leven passen, in plaats van tijd te besteden aan plekken die online aantrekkelijk lijken maar in de praktijk niet bij u passen.
                </p>

                <p className="mt-6">
                  De intake helpt ons ook bepalen welke lokale experts, internationale bewoners, ondernemers of andere kopers voor u relevant kunnen zijn. Waar dit waardevol is, bereiden we deze kennismakingen vooraf voor, zodat ieder gesprek een duidelijk doel heeft.
                </p>
              </div>

              <div className="rounded-[32px] bg-[#f6f1ea] p-8">
                <p className="text-lg leading-relaxed text-stone-700">
                  Zoekt u een rustige villa bij Moraira? Een socialer leven in Jávea? Een elegante omgeving bij Altea? Meer ruimte en authenticiteit rond Benissa? Appartementen aan zee en nieuwbouw in Calpe? Of een levendige stad met voorzieningen die het hele jaar door actief is, zoals Dénia?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED PROPERTY VIEWINGS */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Geselecteerde individuele woningbezichtigingen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Bekijk woningen die passen bij uw intake, uw regio en de levensstijl die u voor ogen heeft.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                Tijdens de vier dagen ervaart u niet alleen de regio’s. U krijgt ook de mogelijkheid om een zorgvuldig geselecteerd aantal woningen te bezichtigen dat bij uw persoonlijke profiel past. Deze bezichtigingen worden niet willekeurig gekozen. De selectie is gebaseerd op uw intake, Area Match Report, budget, gezinssituatie, gewenste omgeving, woningtype en levensstijl.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Dat kan bijvoorbeeld een villa in Moraira zijn, een woning met zeezicht in Jávea, een elegante woning bij Altea, een finca of ruime woning in Benissa, een appartement of nieuwbouwwoning in Calpe, of een woning in Dénia voor kopers die de voorkeur geven aan een levendige stad met voorzieningen gedurende het hele jaar.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Het doel is niet om zoveel mogelijk woningen te laten zien. Het doel is om de juiste woningen te laten zien. U moet gevoel, locatie, bouwkwaliteit, bereikbaarheid, toekomstige waarde, praktische risico’s en het dagelijks leven rond de woning kunnen vergelijken voordat u de volgende stap zet.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Woningen afgestemd op uw intake",
                  "Selectie op basis van het Area Match Report",
                  "Bezichtigingen gekoppeld aan de juiste regio",
                  "Focus op budget en geschiktheid op lange termijn",
                  "Vergelijking van woningtypes en locaties",
                  "Eerlijke begeleiding bij risico’s en kansen",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Zo gaat u van online zoeken naar werkelijk begrijpen welke woningen bij u passen. Dat maakt het aankooptraject veiliger, efficiënter en veel realistischer.
              </p>
            </div>
          </div>
        </section>

        {/* LIKE-MINDED PEOPLE */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Reis met gelijkgestemden
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Ontmoet mensen die zich in dezelfde fase van het traject bevinden als u.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                De Buyer Discovery Trip is opgezet als een zorgvuldig samengestelde ervaring in een kleine groep. U reist met mensen die aansluiten bij uw interesses, levensfase en plannen voor Spanje.
              </p>

              <p className="mt-6">
                We brengen u samen met kopers met vergelijkbare doelen, tempo, levensstijl en verwachtingen. Sommige groepen zijn internationaler. Andere groepen bestaan uit Britse, Scandinavische, Noord-Europese of Engelstalige kopers die waarde hechten aan culturele en taalkundige herkenning.
              </p>

              <p className="mt-6">
                Wij begeleiden Britse, Ierse, Nederlandse, Belgische, Duitse, Zwitserse, Scandinavische en andere internationale kopers die een toekomst aan de Costa Blanca Noord verkennen.
              </p>

              <p className="mt-6">
                Voor veel cliënten worden de contacten met andere deelnemers een van de meest waardevolle onderdelen van de reis. Een gezamenlijke lunch, lokale activiteit of open gesprek kan het begin zijn van nieuwe vriendschappen, waardevolle contacten en een sterker gevoel van vertrouwen, nog voordat u naar Spanje bent verhuisd.
              </p>
            </div>
          </div>
        </section>

        {/* ARRIVAL */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vanaf aankomst is alles geregeld
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight">
              U komt aan, wij zorgen voor de details.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-serif text-3xl">Privétransfer vanaf de luchthaven</h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  U komt aan op Alicante Airport, waar uw privétransfer u comfortabel naar uw hotel, resort of finca brengt.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl">
                  Uw eigen 4- of 5-sterrenhotel of luxe finca
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  U verblijft in een zorgvuldig geselecteerd 4- of 5-sterrenhotel, boutique resort of luxe finca. Wanneer u rust en privacy wilt, kunt u zich terugtrekken in uw eigen privéomgeving.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl">Persoonlijk welkom</h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Tijdens een ontspannen welkomsmoment bespreken we uw doelen, beantwoorden we uw eerste vragen en nemen we het programma voor de komende vier dagen met u door.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REAL REGIONS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Ontdek de echte Costa Blanca Noord
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                We laten u meer zien dan alleen de bekendste toeristische gebieden.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Tijdens de Buyer Discovery Trip ervaart u de regio’s vanuit het dagelijks leven. We bezoeken plekken die belangrijk zijn voor uw toekomstige levensstijl, niet alleen de plaatsen die er goed uitzien in een brochure.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Moraira</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Rustig en elegant wonen aan de kust, met villa’s, baaien en een exclusieve maar ontspannen woonomgeving.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Jávea</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Een levendige internationale levensstijl met stranden, restaurants, sport, scholen en het hele jaar door activiteit.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Altea</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Cultuur, schoonheid, zeezicht en mediterraan karakter in een artistiekere en verfijnde omgeving.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Benissa</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Ruimte, privacy, authenticiteit, landelijk wonen en verborgen baaien langs de kust.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Calpe</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Wonen aan het strand, leven rond de jachthaven, appartementen, nieuwbouw en een actievere sfeer.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Dénia</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Gastronomie, havenleven, dagelijkse voorzieningen en een levendige stad die het hele jaar door uitstekend functioneert.
                </p>
              </div>
            </div>

            <p className="mt-12 max-w-4xl text-lg leading-relaxed text-stone-600">
              We helpen u de verschillen tussen de regio’s te begrijpen: sfeer, woningtypes, scholen, gezondheidszorg, rijafstanden, internationale gemeenschap, restaurants, sportvoorzieningen, dagelijkse voorzieningen, verhuurpotentieel, bouwkwaliteit en praktische geschiktheid op lange termijn.
            </p>
          </div>
        </section>

        {/* EXPERTS */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Ontmoet de experts die u nodig heeft vóór de aankoop
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Krijg antwoorden voordat u belangrijke beslissingen neemt.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                Tijdens uw Buyer Discovery Trip brengen we u in contact met vertrouwde onafhankelijke specialisten en lokale contacten die u helpen de praktische, juridische en financiële stappen te begrijpen voordat u een woning in Spanje koopt.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Onafhankelijke vastgoedadvocaat",
                  "Spaanse notaris",
                  "Hypotheekspecialist",
                  "Bankcontact",
                  "Verzekeringsspecialist",
                  "Building surveyor of technisch adviseur",
                  "Lokale vastgoedexpert",
                  "Verhuisbegeleiding waar relevant",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Deze gesprekken zijn bedoeld om u meer zekerheid te geven over het juridische proces, hypotheekmogelijkheden, bankvereisten, verzekeringen, aankoopkosten, jaarlijkse eigenaarskosten, documentatie, bouwkundige controles en veelvoorkomende fouten die internationale kopers beter kunnen vermijden.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                U kunt uw vragen rechtstreeks stellen, begrijpen wie waarvoor verantwoordelijk is en de reis afsluiten met een veel duidelijker beeld van hoe een veilige woningaankoop in Spanje daadwerkelijk werkt.
              </p>
            </div>
          </div>
        </section>

        {/* SAFETY */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Meer zekerheid bij iedere stap
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Voor internationale kopers gaat kopen in Spanje niet alleen om emotie. Het gaat ook om veiligheid, controle en het juiste advies.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Meer duidelijkheid over juridische stappen",
                "Inzicht in belastingen en aankoopkosten",
                "Kennismaking met een onafhankelijke advocaat",
                "Mogelijkheid om bouwkundige vragen te bespreken",
                "Informatie over financiering en bankvereisten",
                "Meer grip op risico’s vóór de aankoop",
                "Eerlijke begeleiding bij regio’s en woningtypes",
                "Begeleiding bij de volgende stap na de reis",
                "Een beter onderbouwde en veiligere beslissing voordat u verdergaat",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/80 p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              Wij beloven niet dat iedere woning de juiste is. Integendeel: we helpen u zien wat past, wat niet past en welke zaken gecontroleerd moeten worden voordat u een bod uitbrengt. Precies daar begint zekerheid.
            </p>
          </div>
        </section>

        {/* LIFESTYLE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ervaar de levensstijl, niet alleen de woningmarkt
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Een woning is slechts één onderdeel van de beslissing.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              U wilt ook begrijpen hoe uw leven hier zou kunnen voelen. Daarom bevat de Buyer Discovery Trip lifestyle-ervaringen die aansluiten bij uw interesses en de regio die u verkent.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Lokale lunches en fine dining",
                "Wijnproeverijen",
                "Golfclubs en golftour",
                "Beachclubs",
                "Jachthavens en jachtclubs",
                "Wellness en spa",
                "Wandel- en natuurroutes",
                "Culturele bezoeken",
                "Kookworkshop of pasta maken",
                "Zakelijke of netwerkintroducties",
                "Lokale bijeenkomsten",
                "Activiteiten met gelijkgestemde toekomstige bewoners",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium text-[#1e2a3a]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              Wilt u deelnemen aan gezamenlijke lunches, buurten verkennen en ervaren hoe het leven hier werkelijk voelt? Dan sluit u aan bij de groep. Wilt u een rustig moment en privacy? Dan kunt u zich terugtrekken in uw eigen 4- of 5-sterrenhotel of luxe finca, zonder de structuur van de reis te verliezen.
            </p>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Wat wij voor u doen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Wij begeleiden, coördineren en helpen u een betere beslissing te nemen.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Wij coördineren de volledige ervaring, begeleiden u door de verschillende regio’s, selecteren relevante woningbezichtigingen en brengen u in contact met vertrouwde onafhankelijke specialisten. Zo kunt u beter geïnformeerde beslissingen nemen voordat u een woning in Spanje koopt.
              </p>

              <p className="mt-6">
                We helpen u regio’s te vergelijken, praktische verschillen te begrijpen, de juiste vragen te stellen, woningen rustiger te beoordelen en veelvoorkomende fouten te vermijden.
              </p>

              <p className="mt-6">
                Onze rol is niet om u onder druk te zetten om te kopen. Onze rol is om u te helpen de juiste regio, het juiste woningtype en de juiste volgende stap te kiezen.
              </p>

              <p className="mt-6">
                Als een regio niet bij uw profiel past, zeggen we dat. Als een woning of woningtype juridische, praktische, technische of lifestyle-aandachtspunten kan hebben, helpen we u die te begrijpen voordat u zich vastlegt.
              </p>
            </div>
          </div>
        </section>

        {/* INCLUDED */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Wat is inbegrepen
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Uw 4-daagse Buyer Discovery Trip bevat wat u nodig heeft voor een duidelijkere en veiligere eerste beslissing.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Kosteloos persoonlijk intakegesprek vóór aankomst",
                "Persoonlijk lifestyle- en regioprofiel",
                "Area Match Report voor Costa Blanca Noord",
                "Volledig georganiseerd 4-daags programma",
                "Privéchauffeur en transfer vanaf Alicante",
                "Verblijf in een geselecteerd 4- of 5-sterrenhotel, boutique resort of luxe finca",
                "Begeleide regiobezoeken aan de Costa Blanca Noord",
                "Geselecteerde individuele woningbezichtigingen",
                "Woningen afgestemd op budget, regio en levensstijl",
                "Kennismaking met juridische, bancaire, hypotheek- en verzekeringscontacten",
                "Gesprek met een building surveyor of technisch adviseur waar relevant",
                "Lifestyle-ervaringen afgestemd op uw interesses",
                "Zorgvuldig samengestelde kleine groep met gelijkgestemde kopers",
                "Tijd voor persoonlijke vragen en ondersteuning bij uw beslissing",
                "Duidelijke vervolgstappen na de reis",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/80 p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AFTER THE TRIP */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Wat u na de reis weet
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                U vertrekt niet met vage indrukken. U vertrekt met duidelijkheid.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Welke regio’s aan de Costa Blanca Noord bij uw levensstijl passen",
                "Welke regio’s minder geschikt voor u zijn",
                "Welk woningtype bij uw budget en doelen past",
                "Welke woningen na echte bezichtigingen realistisch aanvoelen",
                "Hoe het aankoopproces in Spanje werkt",
                "Welke juridische en financiële vragen gecontroleerd moeten worden",
                "Hoe het dagelijks leven na de aankoop eruit kan zien",
                "Welke experts u kunnen ondersteunen",
                "Van welk type gemeenschap u deel zou kunnen worden",
                "Of u klaar bent voor de volgende stap",
              ].map((item) => (
                <div key={item} className="rounded-[28px] bg-white p-7 shadow-sm">
                  <p className="text-lg leading-relaxed text-stone-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Is deze reis geschikt voor u?
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Perfect voor serieuze kopers die de Costa Blanca Noord willen begrijpen voordat zij een woning kiezen.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Britse, Europese en internationale kopers die de Costa Blanca Noord verkennen",
                "Internationale kopers die een woning in Spanje willen kopen",
                "Gezinnen die een verhuizing naar Spanje overwegen",
                "Gepensioneerden die een nieuwe levensstijl plannen",
                "Ondernemers en locatie-onafhankelijke professionals",
                "Kopers van vakantie- en tweede woningen",
                "Kopers die Moraira, Jávea, Altea, Benissa, Calpe en Dénia vergelijken",
                "Cliënten die veilige begeleiding willen voordat serieuze bezichtigingen beginnen",
                "Mensen die vóór hun verhuizing gelijkgestemde toekomstige bewoners willen ontmoeten",
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

        {/* SEO TEXT */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Koop een huis, villa of appartement in Spanje
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Een veiligere route voor kopers die een woning aan de Costa Blanca Noord willen kopen.
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
              <p>
                Veel internationale kopers beginnen met zoekopdrachten als "woning kopen in Spanje", "villa te koop Moraira", "appartement Calpe", "woning Jávea" of "vakantiewoning Costa Blanca". Dat is een logisch startpunt, maar geeft zelden genoeg duidelijkheid voor een veilige aankoopbeslissing.
              </p>

              <p>
                Onze 4-daagse Buyer Discovery Trip helpt u van online zoekopdrachten en droombeelden naar een concreet begrip van regio’s, woningen, juridische stappen, financiering, dagelijks leven en risico’s. U ziet geselecteerde woningen, ervaart de regio’s en spreekt met specialisten voordat u beslist hoe u verder wilt.
              </p>

              <p>
                De reis is vooral relevant als u overweegt een huis in Moraira, een villa in Jávea, een woning in Altea, een finca in Benissa, een appartement in Calpe of een woning in Dénia te kopen. Elke plaats heeft een eigen sfeer, praktische voordelen en beperkingen. Wij helpen u de verschillen te zien voordat u koopt.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Veelgestelde vragen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Vragen over het kopen van een woning in Spanje en onze Buyer Discovery Trip.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question:
                    "Is de Buyer Discovery Trip een standaard bezichtigingsreis in Spanje?",
                  answer:
                    "Nee. Het is een 4-daagse woning- en lifestylereis waarin u de regio’s ervaart, relevante experts ontmoet en zorgvuldig geselecteerde woningen bezichtigt die aansluiten bij uw intake, Area Match Report, budget en levensstijl.",
                },
                {
                  question: "Bezoek ik woningen tijdens de reis?",
                  answer:
                    "Ja. U ziet een selectief aantal woningen dat past bij uw wensen, voorkeursregio, budget en toekomstige levensstijl. De focus ligt op kwaliteit en relevantie, niet op het tonen van zoveel mogelijk woningen.",
                },
                {
                  question: "Is de reis privé of in een groep?",
                  answer:
                    "De reis is georganiseerd als een zorgvuldig samengestelde ervaring in een kleine groep met gelijkgestemde kopers. U heeft uw eigen privacy, eigen accommodatie en individuele rustmomenten, maar de ervaring zelf is opgebouwd rond een zorgvuldig gematchte groep.",
                },
                {
                  question: "Welke regio’s bezoeken we aan de Costa Blanca Noord?",
                  answer:
                    "Afhankelijk van uw profiel kan het programma Moraira, Jávea, Altea, Benissa, Calpe, Dénia en relevante omliggende gebieden omvatten.",
                },
                {
                  question: "Is de reis geschikt voor internationale kopers?",
                  answer:
                    "Ja. De reis is zeer relevant voor Britse en andere internationale kopers die een woning in Spanje willen kopen, maar eerst de regio, het proces, de veiligheid, kosten en risico’s willen begrijpen.",
                },
                {
                  question: "Helpen jullie ook met juridische en financiële vragen?",
                  answer:
                    "We brengen u in contact met een onafhankelijke advocaat, hypotheekspecialist, bankcontact, verzekeringsspecialist en, waar relevant, een building surveyor of technisch adviseur, zodat u vóór de aankoop de juiste vragen kunt stellen.",
                },
              ].map((item) => (
                <div key={item.question} className="rounded-[28px] bg-white p-8 shadow-sm">
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
              Meld u aan voor uw Buyer Discovery Trip
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
              Wanneer u serieus overweegt een woning in Spanje te kopen, gaat de belangrijkste beslissing niet alleen over het huis.
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
              Het gaat om de juiste regio, de juiste levensstijl, de juiste woning en de juiste zekerheid om u heen.
            </p>

            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
              Meld u aan voor uw 4-daagse Buyer Discovery Trip en ontdek of de Costa Blanca Noord werkelijk past bij uw toekomst in Spanje.
            </p>

            <a
              href="/nl/contact"
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Meld u aan voor uw 4-daagse Buyer Discovery Trip
            </a>
          </div>
        </section>
      </main>
    </>
  );
}