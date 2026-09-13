export const metadata = {
  title:
    "Buyer Discovery Trips & Private Property Tours Costa Blanca Noord | Nordic Move Spain",
  description:
    "Private Buyer Discovery Journey aan de Costa Blanca Noord: vergelijk kust en binnenland, bekijk geselecteerde villa's, ontmoet onafhankelijke experts en ervaar het lokale leven voordat u koopt.",
  keywords: [
    "Buyer Discovery Trip Costa Blanca Noord",
    "private property tour Costa Blanca",
    "private buyer tour Spanje",
    "bezichtigingsreis Spanje",
    "woning bezichtigen Spanje",
    "huis kopen Costa Blanca Noord",
    "luxe villa kopen Costa Blanca Noord",
    "villa kopen Moraira",
    "villa kopen Javea",
    "huis kopen Altea",
    "huis kopen Benissa",
    "Area Match Spanje",
    "onafhankelijke aankoopbegeleiding Spanje",
    "aankoopmakelaar Costa Blanca",
    "due diligence woning Spanje",
    "verhuizen naar Costa Blanca",
    "Vall de Pop property tour",
    "Jalón Llíber woning zoeken",
    "Costa Blanca oriëntatiereis",
    "Costa Blanca lifestyle trip",
  ],
  alternates: {
    canonical: "/nl/services/discovery-trips",
  },
  openGraph: {
    title:
      "Buyer Discovery Trips & Private Property Tours Costa Blanca Noord | Nordic Move Spain",
    description:
      "Niet alleen villa's bekijken. Vergelijk kust en binnenland, verblijf in verschillende gebieden, ontmoet onafhankelijke professionals en ervaar het dagelijks leven voordat u beslist waar u wilt kopen.",
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: "/images/discover-card.png",
        width: 1200,
        height: 630,
        alt: "Private Buyer Discovery Journey aan de Costa Blanca Noord",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const buyerDiscoveryStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Buyer Discovery Trips en private Buyer Tours aan de Costa Blanca Noord",
  description:
    "Kopersgerichte discovery journey voor internationale woningkopers aan de Costa Blanca Noord, met Area Match, geselecteerde woningbezichtigingen, contrasterende verblijven aan kust en in het binnenland, lokale lifestyle-ervaringen, kennismaking met onafhankelijke professionals en gecoördineerde lokale logistiek.",
  provider: {
    "@type": "Organization",
    name: "Nordic Move Spain",
  },
  areaServed: [
    "Costa Blanca North",
    "Moraira",
    "Jávea",
    "Javea",
    "Altea",
    "Benissa",
    "Calpe",
    "Dénia",
    "Denia",
    "Jalón",
    "Xaló",
    "Llíber",
    "Vall de Pop",
  ],
  audience: {
    "@type": "Audience",
    audienceType:
      "Internationale woningkopers, tweedehuiskopers, gezinnen die willen verhuizen, ondernemers, gepensioneerden en kopers van luxe villa's",
  },
};

const journeySteps = [
  {
    number: "01",
    title: "Start met uw Area Match",
    text: "We gebruiken uw leefstijl, prioriteiten, praktische wensen, budget en langetermijnplannen om te bepalen welke gebieden echt uw aandacht verdienen.",
  },
  {
    number: "02",
    title: "Verfijn uw aankoopprofiel",
    text: "In een persoonlijk gesprek scherpen we uw woonwensen, gezinssituatie, planning, dagelijks leven, sociale voorkeuren en absolute voorwaarden verder aan.",
  },
  {
    number: "03",
    title: "Selecteer de juiste woningen",
    text: "We onderzoeken een gerichte selectie van maximaal 10 relevante woningen via meerdere makelaars en ons lokale netwerk, met videomateriaal waar beschikbaar.",
  },
  {
    number: "04",
    title: "Bouw uw Discovery-route",
    text: "Uw route combineert precies de gebieden, woningen, accommodaties, mensen en activiteiten die helpen om uw mogelijke toekomstige leven echt te testen.",
  },
  {
    number: "05",
    title: "Ervaar en vergelijk",
    text: "U bekijkt niet alleen villa's, maar vergelijkt kust en binnenland, dagelijkse voorzieningen, sfeer, sociaal leven, reistijden en vrijetijdsmogelijkheden.",
  },
  {
    number: "06",
    title: "Ontmoet de juiste professionals",
    text: "Wanneer dat past bij uw fase in het aankoopproces, brengen we u in contact met onafhankelijke professionals zodat u het juridische en technische proces begrijpt vóór u een grote beslissing neemt.",
  },
];

const lifestyleOptions = [
  "Wijnproeverij en bodega-bezoek in de Vall de Pop",
  "Golfbaan of golfclub bezoeken",
  "Kennismaking met padel of tennis",
  "Zeilen, marina- of jachtervaring",
  "Lokale gastronomie en lange lunches",
  "Historische stadjes en dorpen",
  "Markten, boetieks en dagelijkse boodschappen",
  "Wandelen, fietsen of natuur",
  "Wellness, spa of fitness",
  "Scholen, gezondheidszorg en praktische voorzieningen",
  "Zakelijke en professionele introducties",
  "Sociale clubs en lokale communities",
];

const regions = [
  {
    name: "Moraira",
    text: "Verfijnd wonen aan de kust met baaien, restaurants en villawijken in een internationale maar ontspannen sfeer.",
  },
  {
    name: "Jávea",
    text: "Een brede lifestylemix met stranden, oude stad, internationale scholen, sport, restaurants en veel leven het hele jaar door.",
  },
  {
    name: "Altea",
    text: "Mediterrane charme, cultuur, uitzichten vanaf de heuvels, verfijnde restaurants en een artistieke oude stad.",
  },
  {
    name: "Benissa",
    text: "Een combinatie van kust, platteland, privacy en grotere percelen, met toegang tot zowel traditioneel Spanje als de zee.",
  },
  {
    name: "Dénia",
    text: "Een echte stad voor het hele jaar met gastronomie, havenleven, dagelijkse voorzieningen, winkels en goede verbindingen met de regio.",
  },
  {
    name: "Calpe",
    text: "Een actieve kustplaats met stranden, marina, nieuwbouw, restaurants en een wat stedelijker mediterrane sfeer.",
  },
  {
    name: "Vall de Pop · Jalón · Llíber",
    text: "Wonen in het binnenland tussen wijngaarden, bergen en traditionele dorpen, met grotere percelen, rust en een volledig ander ritme dan aan de kust.",
  },
];

const professionals = [
  "Onafhankelijke vastgoedadvocaat",
  "Onafhankelijke bouwkundig inspecteur of technisch specialist",
  "Hypotheek- of financieringsspecialist",
  "Bankcontact",
  "Verzekeringsspecialist",
  "Contacten voor verhuizing en verblijf",
  "Renovatie- of bouwspecialist waar relevant",
  "Andere professionals passend bij uw woning of plannen",
];

const faqItems = [
  {
    question: "Is dit alleen een woningbezichtigingsreis?",
    answer:
      "Nee. Woningbezichtigingen zijn slechts één onderdeel. Het doel is om gebieden, leefstijlen, praktische realiteit, mensen en geselecteerde woningen met elkaar te vergelijken, zodat u kunt bepalen waar uw leven in Spanje echt zou kunnen werken.",
  },
  {
    question: "Begin ik met de Area Match?",
    answer:
      "Ja. Uw Area Match en het persoonlijke gesprek geven ons de informatie die nodig is om een relevante route samen te stellen in plaats van een algemene standaardtour.",
  },
  {
    question: "Hoeveel woningen worden vooraf geselecteerd?",
    answer:
      "We kunnen vóór uw reis een gerichte selectie van maximaal 10 passende woningen voorbereiden. Waar geschikt videomateriaal beschikbaar is, gebruiken we dit om onnodige bezichtigingen ter plaatse te beperken.",
  },
  {
    question: "Kan de reis zowel de kust als het binnenland omvatten?",
    answer:
      "Ja. Juist het vergelijken van sterk verschillende gebieden kan bijzonder waardevol zijn. Afhankelijk van uw Area Match en prioriteiten kan uw route kustplaatsen combineren met de Vall de Pop of andere locaties in het binnenland.",
  },
  {
    question: "Is accommodatie onderdeel van het Discovery-concept?",
    answer:
      "Accommodatie kan bewust worden gekozen zodat u verschillende versies van het leven in de regio ervaart. Afhankelijk van route en beschikbaarheid kan dat bijvoorbeeld een finca of landelijke accommodatie in het binnenland zijn, een vier- of vijfsterrenhotel aan de kust en een verblijf in een ander gebied dat u serieus overweegt.",
  },
  {
    question: "Kunnen de activiteiten op ons worden afgestemd?",
    answer:
      "Ja. Activiteiten worden gekozen omdat ze relevant zijn, niet alleen ter ontspanning. Afhankelijk van uw interesses kan dit gaan om wijn, golf, padel, zeilen, gastronomie, wandelen, lokale cultuur, scholen, business-netwerken of kennismaking met lokale communities.",
  },
  {
    question: "Kunnen we mensen ontmoeten die al in het gebied wonen?",
    answer:
      "Waar geschikte contacten beschikbaar zijn, kunnen we relevante introducties helpen organiseren met lokale bewoners, internationale communities, sociale clubs of professionele contacten. Het doel is om de sociale kant van het leven daar beter te begrijpen; een bepaalde vriendschap of zakelijke relatie kan uiteraard niet worden gegarandeerd.",
  },
  {
    question: "Wie voert de juridische en technische controles uit?",
    answer:
      "De formele juridische due diligence wordt uitgevoerd door een onafhankelijke vastgoedadvocaat. Bouwkundige inspecties en technische onderzoeken worden uitgevoerd door een onafhankelijke inspecteur of gekwalificeerde technisch specialist. Iedere professional blijft verantwoordelijk voor het eigen advies en rapport.",
  },
  {
    question: "Kunnen vervoer en lokale logistiek worden geregeld?",
    answer:
      "Afhankelijk van de route kan een lokale destination-managementpartner praktische onderdelen coördineren, zoals transfers, een privéchauffeur, lokale begeleiding, accommodaties en geselecteerde ervaringen. Beschikbaarheid en exacte inclusies worden vooraf bevestigd.",
  },
  {
    question: "Kan ik privé reizen in plaats van met een groep?",
    answer:
      "Ja. Een private Buyer Discovery Journey biedt maximale flexibiliteit. Daarnaast kunnen op geselecteerde data kleine, zorgvuldig samengestelde groepen worden aangeboden wanneer interesses en fase van de aankoopreis goed bij elkaar passen.",
  },
];

export default function BuyerDiscoveryTripPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buyerDiscoveryStructuredData),
        }}
      />

      <main className="overflow-hidden bg-[#f6f1ea] text-stone-900">
        {/* HERO */}
        <section className="relative min-h-[90vh] overflow-hidden">
          <img
            src="/images/discover-card.png"
            alt="Private Buyer Discovery Journey aan de Costa Blanca Noord"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15" />

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Private Buyer Discovery Journeys · Costa Blanca Noord
              </p>

              <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
                Bekijk niet alleen villa&apos;s.
                <span className="mt-2 block">
                  Ervaar het leven eromheen.
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                Een persoonlijke Discovery Journey opgebouwd rond uw Area Match.
                Vergelijk wonen aan de kust en in het binnenland, verblijf in
                verschillende omgevingen, bekijk zorgvuldig geselecteerde woningen,
                ervaar het lokale leven en ontmoet onafhankelijke professionals die
                u kunnen ondersteunen bij een weloverwogen aankoop.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75">
                Want kiezen voor een woning van €1 miljoen, €2 miljoen of meer in
                Spanje is niet alleen een vastgoedbeslissing. Het gaat ook om de plek
                waar uw dagelijkse leven, relaties, routines en toekomst moeten werken.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/nl/contact"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Bespreek uw Discovery Journey
                </a>

                <a
                  href="/nl/regions"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
                >
                  Ontdek de regio&apos;s
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* POSITIONING STRIP */}
        <section className="border-b border-stone-200/70 bg-white/80 px-8 py-6">
          <div className="mx-auto grid max-w-7xl gap-4 text-center text-sm font-medium text-[#1e2a3a] md:grid-cols-3">
            <p>Woning, omgeving en leefstijl samen vergelijken</p>
            <p>Kust en binnenland persoonlijk ervaren</p>
            <p>Onafhankelijke professionals vóór een grote beslissing</p>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Meer dan een bezichtigingsreis
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Maak de stap kleiner voordat de beslissing groter wordt.
                </h2>
              </div>

              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Voor veel internationale kopers voelt een woning kopen in Spanje
                  als een grote stap. De afstand is echt, het aankoopproces is
                  onbekend en mooie online advertenties laten zelden zien hoe een
                  plek op een gewone dinsdagochtend werkelijk aanvoelt.
                </p>

                <p className="mt-6">
                  Daarom behandelt Nordic Move Spain uw bezoek niet als een reeks
                  losse bezichtigingen. We gebruiken uw Area Match, persoonlijke
                  profiel en geselecteerde woningen om een reis samen te stellen
                  waarmee u verschillende versies van het leven aan de Costa Blanca
                  Noord werkelijk kunt ervaren.
                </p>

                <p className="mt-6 font-medium text-[#1e2a3a]">
                  We organiseren niet alleen een woningbezichtigingsreis. We helpen
                  u te testen of een gebied, woning en leefstijl echt bij u passen
                  voordat u een grote beslissing neemt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Uw Discovery Journey
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Uw Area Match wordt een echte route.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {journeySteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[28px] bg-[#f6f1ea] p-7"
                >
                  <p className="text-sm font-medium tracking-[0.2em] text-[#c8a063]">
                    {step.number}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                    {step.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXAMPLE ITINERARY */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Ervaar verschillende versies van het leven
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Beslis niet vanaf foto&apos;s tussen kust en binnenland.
                Ervaar beide.
              </h2>

              <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
                Iedere Discovery Journey wordt opgebouwd rond uw profiel en de
                beschikbaarheid. Een programma van vier nachten kan u bewust in
                verschillende omgevingen laten verblijven, zodat het verschil echt
                voelbaar wordt.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
              {[
                {
                  label: "Nacht 1",
                  title: "Finca-verblijf in de Vall de Pop",
                  text: "Word wakker tussen wijngaarden en bergen en ervaar ruimte, rust en het tragere ritme rond Jalón, Llíber of de bredere vallei.",
                },
                {
                  label: "Nacht 2",
                  title: "Vier- of vijfsterrenhotel aan de kust",
                  text: "Ervaar de kustkant: zee, restaurants, marina, loopbaarheid en de sfeer van een hoogwaardige mediterrane omgeving.",
                },
                {
                  label: "Nachten 3–4",
                  title: "Verblijf in een ander serieus alternatief",
                  text: "Breng echte tijd door in een tweede gebied uit uw Area Match en vergelijk hoe het dagelijkse leven voelt nadat de eerste indruk is weggeëbd.",
                },
                {
                  label: "Tijdens de reis",
                  title: "Geselecteerde villa&apos;s en buurten",
                  text: "Bekijk alleen woningen en locaties die werkelijk bij uw profiel passen, in plaats van uw dagen te vullen met willekeurige afspraken.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[32px] bg-white p-8 shadow-sm"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                    {item.label}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-4xl text-sm leading-relaxed text-stone-500">
              Accommodatie, route en exacte inclusies zijn afhankelijk van uw Area
              Match, gekozen data, beschikbaarheid en het doel van uw reis.
            </p>
          </div>
        </section>

        {/* LIFESTYLE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Uw interesses vormen de ervaring
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
              Ervaar hoe uw leven eruit zou kunnen zien tussen de bezichtigingen door.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/80">
              Iemand die droomt van zeilen moet een marina anders ervaren dan iemand
              die op zoek is naar wijngaarden, golf, padel, internationale scholen,
              een zakelijk netwerk of lange lunches in een historische stad.
              Uw voorkeuren bepalen wat tijdens de reis echt relevant is.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {lifestyleOptions.map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm font-medium leading-relaxed text-white/90">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-base leading-relaxed text-white/65">
              Activiteiten worden gekozen omdat ze u helpen het gebied en uw
              mogelijke dagelijkse leven beter te begrijpen. Ze zijn niet voor elke
              reis hetzelfde en blijven afhankelijk van timing en beschikbaarheid.
            </p>
          </div>
        </section>

        {/* PEOPLE */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[40px] bg-white p-10 shadow-sm lg:p-12">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Ontmoet meer dan alleen makelaars
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Bij een nieuw leven horen ook de juiste mensen.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-600">
                Afhankelijk van uw interesses en beschikbare contacten kan uw reis
                ontmoetingen bevatten die u helpen de sociale kant van een verhuizing
                te begrijpen: lokale bewoners, internationale communities, clubs,
                ondernemers, professionals of mensen met vergelijkbare sportieve en
                persoonlijke interesses.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Voor de ene koper kan dat een mogelijke businesscontact zijn.
                Voor de andere een golfclub, padelgroep, zeilnetwerk of lokale
                vereniging waar men zich op termijn thuis zou kunnen voelen.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-stone-500">
                Introducties zijn afhankelijk van relevantie en beschikbaarheid en
                zijn bedoeld om lokaal inzicht te geven. Een specifieke persoonlijke
                of zakelijke relatie kan niet worden gegarandeerd.
              </p>
            </div>

            <div className="rounded-[40px] bg-[#e9dfd2] p-10 lg:p-12">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Ontmoet professionals voordat u ze nodig heeft
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Begrijp hoe een aankoop gecontroleerd kan worden voordat u zich vastlegt.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-600">
                Wanneer dat past bij uw fase in het aankoopproces, kunnen we u
                voorstellen aan onafhankelijke professionals. Zo weet u vooraf wie
                mogelijk betrokken wordt, wat zij controleren en waar hun eigen
                verantwoordelijkheid begint.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {professionals.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/80 p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                Formele juridische due diligence en technische inspecties worden
                uitgevoerd door de daarvoor verantwoordelijke onafhankelijke
                professionals. Nordic Move Spain coördineert de reis, maar vervangt
                geen gereguleerd juridisch, technisch, financieel of taxatieadvies.
              </p>
            </div>
          </div>
        </section>

        {/* PRIVATE VS GROUP */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Privé of zorgvuldig samengesteld
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Kies de vorm waarbij u zich het prettigst voelt.
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[40px] bg-white p-10 shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  Private Buyer Discovery Journey
                </p>
                <h3 className="mt-4 font-serif text-4xl text-[#1e2a3a]">
                  Uw route, uw selectie, uw tempo.
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Het programma wordt volledig afgestemd op uw Area Match,
                  geselecteerde woningen, praktische vragen en gewenste leefstijl.
                  Dit past het best wanneer privacy, flexibiliteit en persoonlijke
                  aandacht belangrijk zijn.
                </p>
              </div>

              <div className="rounded-[40px] bg-[#1e2a3a] p-10 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  Zorgvuldig samengestelde kleine groep
                </p>
                <h3 className="mt-4 font-serif text-4xl">
                  Ontdek de regio met kopers in een vergelijkbare fase van hun leven.
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Op geselecteerde data kunnen we een klein aantal kopers met
                  passende interesses of plannen samenbrengen. De woning- en
                  gebiedsbezoeken blijven relevant en persoonlijk, terwijl enkele
                  maaltijden, activiteiten en lokale ervaringen gezamenlijk kunnen
                  plaatsvinden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DMC / LOGISTICS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Lokale logistiek professioneel gecoördineerd
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Minder organiseren. Meer ontdekken of Spanje echt bij u past.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Afhankelijk van de reis kan een lokale destination-managementpartner
                  accommodatie, transfers, een privéchauffeur, lokale begeleiding en
                  geselecteerde ervaringen rond het bezichtigingsprogramma coördineren.
                </p>

                <p>
                  Daardoor hoeft u uw beperkte tijd in Spanje niet te besteden aan
                  logistiek tussen afspraken. De praktische onderdelen worden rond
                  één doel georganiseerd: gebieden, woningen en leefstijlen met een
                  helder hoofd vergelijken.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Luchthaven- of lokale transfers",
                  "Privéchauffeur waar afgesproken",
                  "Lokale gids waar relevant",
                  "Coördinatie van accommodaties",
                  "Woningbezichtigingsprogramma",
                  "Gebieds- en buurtbezoeken",
                  "Lifestyle-activiteiten",
                  "Restaurant- en lokale aanbevelingen",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BUYER SIDE + MARKET */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vanaf het begin vanuit de koper gedacht
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              We beginnen bij uw leven en uw zoekprofiel, niet bij de portefeuille
              van één makelaar.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Nordic Move Spain werkt vanuit het perspectief van de koper.
                  We kunnen meerdere makelaars, projectontwikkelaars en lokale
                  vastgoedprofessionals aan de Costa Blanca Noord benaderen in plaats
                  van uw zoekopdracht te beperken tot één portefeuille.
                </p>

                <p>
                  Via ons lokale netwerk kunnen ook exclusieve, off-market- of
                  pre-marketmogelijkheden beschikbaar komen. Dat betekent niet dat
                  iedere passende woning buiten de openbare markt ligt. Het betekent
                  dat uw zoektocht breder is en wordt gestuurd door uw criteria.
                </p>

                <p>
                  Als een gebied niet bij uw profiel past, zeggen we dat.
                  Als een woning praktische, technische, juridische of
                  lifestylevragen oproept, kan de juiste vervolgstap nader onderzoek,
                  heronderhandeling of simpelweg verder zoeken zijn.
                </p>
              </div>

              <div className="rounded-[32px] bg-white/80 p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Wat dit in de praktijk betekent
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Zoeken via meerdere makelaars en lokale contacten",
                    "Gerichte selectie gekoppeld aan uw Area Match",
                    "Geen reis vol irrelevante bezichtigingen",
                    "Onafhankelijke juridische en technische professionals waar nodig",
                    "Ruimte om te vergelijken vóór u een bod doet",
                    "Een duidelijkere basis om door te gaan, te heronderhandelen of verder te zoeken",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-white p-5">
                      <p className="font-medium text-[#1e2a3a]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REGIONS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Vergelijk hoe gebieden werkelijk aanvoelen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Zelfs de mooiste villa maakt de verkeerde locatie niet goed.
              </h2>

              <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
                We helpen u juist die details vergelijken die nauwelijks uit een
                woningadvertentie blijken: sfeer, leven in de winter, restaurants,
                zorg, winkels, scholen, sociaal leven, sport, marina-toegang,
                hellende wegen, privacy, bereikbaarheid vanaf de luchthaven en hoeveel
                u in het dagelijks leven werkelijk moet rijden.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="rounded-[32px] bg-white p-8 shadow-sm"
                >
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    {region.name}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {region.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AFTER */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Wat u aan het einde zou moeten weten
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Duidelijkheid over het leven, niet alleen enthousiasme over een huis.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Welke kust- of binnenlandgebieden echt bij uw leefstijl passen",
                "Welke plekken online aantrekkelijk leken maar in werkelijkheid niet goed voelen",
                "Welke geselecteerde villa's na de bezichtiging nog realistisch zijn",
                "Hoeveel autorijden, bereikbaarheid en praktische organisatie ieder gebied vraagt",
                "Waar u zich sociaal en professioneel het meest thuis voelt",
                "Welke juridische of technische vragen nog onafhankelijk onderzocht moeten worden",
                "Of u klaar bent om door te gaan, verder te zoeken of opnieuw te overwegen",
                "Wie u in de volgende fase kan ondersteunen als u besluit te kopen en te verhuizen",
              ].map((item) => (
                <div key={item} className="rounded-[28px] bg-white p-7 shadow-sm">
                  <p className="text-lg leading-relaxed text-stone-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO FOR */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Voor wie is dit bedoeld?
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Voor internationale kopers die meer nodig hebben dan een lijst met woningen.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Kopers van luxe villa's en tweede woningen",
                "Nederlandse en Belgische kopers die meerdere regio's vergelijken",
                "Internationale kopers met een grotere reisafstand",
                "Gezinnen die een verhuizing naar Spanje overwegen",
                "Gepensioneerden die een nieuwe leefstijl plannen",
                "Ondernemers en remote professionals",
                "Kopers die twijfelen tussen kust en binnenland",
                "Mensen die onafhankelijke juridische en technische controles belangrijk vinden",
                "Kopers die de community willen begrijpen vóór ze beslissen",
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

        {/* FAQ */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Veelgestelde vragen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Vragen over de Buyer Discovery Journey.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-[28px] bg-white p-8 shadow-sm"
                >
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
              Ervaar uw mogelijke toekomst voordat u kiest
            </p>

            <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
              U kiest niet alleen een villa.
              <span className="mt-2 block">
                U kiest het leven eromheen.
              </span>
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
              Start met uw Area Match, verfijn uw zoekprofiel en laat ons een
              Discovery Journey opbouwen rond de gebieden, woningen, mensen en
              ervaringen die voor u werkelijk belangrijk zijn.
            </p>

            <a
              href="/nl/contact"
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Bespreek uw Discovery Journey
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
