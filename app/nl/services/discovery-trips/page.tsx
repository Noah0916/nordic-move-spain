export const metadata = {
  title:
    "Buyer Discovery Trips & Privé Bezichtigingstours Costa Blanca Noord | Nordic Move Spain",
  description:
    "Start met een persoonlijke Area Match, een één-op-één gesprek en een gerichte selectie van maximaal 10 woningen. We zoeken via meerdere makelaars en ons lokale netwerk, inclusief exclusieve, off-market en pre-market mogelijkheden, voordat je kiest voor een Private Buyer Tour of een zorgvuldig samengestelde Discovery Trip in kleine groep aan de Costa Blanca Noord.",
  keywords: [
    "Buyer Discovery Trip Costa Blanca Noord",
    "privé bezichtigingstour Costa Blanca",
    "private buyer tour Spanje",
    "woningzoekreis Spanje",
    "bezichtigingsreis Spanje",
    "woning kopen Costa Blanca Noord",
    "luxe villa kopen Costa Blanca Noord",
    "villa kopen Moraira",
    "villa kopen Jávea",
    "woning kopen Altea",
    "woning kopen Benissa",
    "Area Match Report Spanje",
    "onafhankelijke aankoopbegeleiding Spanje",
    "aankoopmakelaar Costa Blanca",
    "vastgoed due diligence Spanje",
    "veilig woning kopen Spanje",
    "verhuizen naar Costa Blanca",
    "off market vastgoed Costa Blanca",
    "exclusief vastgoed Costa Blanca",
    "pre market vastgoed Costa Blanca",
  ],
  alternates: {
    canonical: "/nl/buyer-discovery-trip-costa-blanca-north",
  },
  openGraph: {
    title:
      "Buyer Discovery Trips & Privé Bezichtigingstours Costa Blanca Noord | Nordic Move Spain",
    description:
      "Van Area Match en een gerichte selectie tot breder marktbereik, privébezichtigingen, Discovery Trips in kleine groepen, onafhankelijke experts en veilige aankoopbegeleiding aan de Costa Blanca Noord.",
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: "/images/discover-card.png",
        width: 1200,
        height: 630,
        alt: "Buyer Discovery Trip en privé bezichtigingstour aan de Costa Blanca Noord",
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
  name: "Buyer Discovery Trips en Private Buyer Tours Costa Blanca Noord",
  description:
    "Aankoopbegeleiding voor internationale kopers aan de Costa Blanca Noord, inclusief Area Match, persoonlijk gesprek, een gerichte selectie van maximaal 10 woningen, brede marktzoektocht via meerdere makelaars en lokale netwerken, privé- of groepsbezichtigingsreizen, introducties bij experts en aankoopondersteuning.",
  provider: {
    "@type": "Organization",
    name: "Nordic Move Spain",
  },
  areaServed: [
    "Costa Blanca Noord",
    "Moraira",
    "Jávea",
    "Javea",
    "Altea",
    "Benissa",
    "Calpe",
    "Dénia",
    "Denia",
  ],
  audience: {
    "@type": "Audience",
    audienceType:
      "Internationale woningkopers, kopers van een tweede woning, gezinnen die verhuizen en kopers van luxe villa’s",
  },
};

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

      <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
        {/* HERO */}
        <section className="relative min-h-[90vh] overflow-hidden">
          <img
            src="/images/discover-card.png"
            alt="Private Buyer Tour en Buyer Discovery Trip aan de Costa Blanca Noord"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Private Buyer Tours & Discovery Trips in kleine groepen
              </p>

              <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
                Vind eerst de juiste regio. Bekijk daarna alleen woningen die echt
                passen bij jouw leven in Spanje.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                Start met je persoonlijke Area Match Report en een één-op-één gesprek.
                Daarna brengen we de markt terug tot een gerichte selectie
                van maximaal 10 passende woningen, vaak aangevuld met videotours,
                voordat je kiest voor een Private Buyer Tour of een zorgvuldig samengestelde
                Discovery Trip in kleine groep aan de Costa Blanca Noord.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/nl/contact"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Bespreek jouw aankoopplannen
                </a>

                <a
                  href="/nl/regions"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
                >
                  Ontdek de regio’s
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INLEIDING */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Duidelijkheid vóór de bezichtigingen
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Een woning kopen in Spanje moet niet beginnen met willekeurige advertenties.
                </h2>
              </div>

              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Mooie foto’s en makelaarsteksten kunnen bijna elke woning aantrekkelijk
                  laten lijken. Maar een woning past pas echt wanneer ook de locatie,
                  dagelijkse leefstijl, praktische behoeften, het budget en de
                  langetermijnplannen kloppen.
                </p>

                <p className="mt-6">
                  Daarom begint Nordic Move Spain bij jou, niet bij een woning die verkocht
                  moet worden. Eerst helpen we je begrijpen welke gebieden aan de Costa
                  Blanca Noord bij jouw leven passen. Pas daarna brengen we de
                  woningmarkt terug tot woningen die werkelijk aansluiten op jouw persoonlijke
                  profiel.
                </p>

                <p className="mt-6">
                  Het resultaat is een veel gerichtere aankoopreis: minder irrelevante
                  bezichtigingen, duidelijkere vergelijkingen, betere vragen en meer ruimte
                  voor onafhankelijke juridische en technische controles voordat je beslist.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCES */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Jouw aankoopreis
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Van Area Match naar een gerichte selectie en vervolgens naar de juiste
              manier van bezichtigen.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Persoonlijke Area Match",
                  text: "We bepalen welke gebieden aan de Costa Blanca Noord het beste passen bij jouw leefstijl, praktische behoeften, prioriteiten en plannen.",
                },
                {
                  number: "02",
                  title: "Persoonlijk één-op-één gesprek",
                  text: "We bespreken jouw rapport uitgebreid en verfijnen je budget, woonwensen, gezinssituatie, planning en langetermijndoelen.",
                },
                {
                  number: "03",
                  title: "Selectie van maximaal 10 woningen",
                  text: "We onderzoeken een gerichte selectie woningen die nauw aansluiten op jouw Area Match en persoonlijke wensen, vaak met videotours wanneer die beschikbaar zijn.",
                },
                {
                  number: "04",
                  title: "Kies hoe je wilt bezichtigen",
                  text: "Ga verder met een Private Buyer Tour of sluit aan bij een zorgvuldig samengestelde Discovery Trip in kleine groep met bezichtigingen, gesprekken met experts en lokale ervaringen.",
                },
              ].map((step) => (
                <div key={step.number} className="rounded-[28px] bg-[#f6f1ea] p-7">
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

        {/* AREA MATCH + SELECTIE */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Eerst de Area Match
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Eerst bepalen we waar je het beste kunt wonen. Daarna richten we ons op de
                woningen die daarbij passen.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                Jouw traject begint met je gratis persoonlijke Area Match Report.
                Daarna plannen we een één-op-één gesprek waarin we het rapport samen
                doornemen en jouw zoekprofiel verder aanscherpen op basis van budget,
                gewenst woningtype, gezinssituatie, dagelijkse routines,
                bereikbaarheid, scholen of zorg, sociaal leven, privacy,
                verhuisplannen en langetermijnprioriteiten.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Op basis van dat gesprek en jouw Area Match-profiel onderzoeken en
                selecteren we maximaal 10 woningen die nauw aansluiten op jouw
                prioriteiten. Waar beschikbaar gebruiken we ook videotours of aanvullend
                videomateriaal, zodat je woningen al kunt beoordelen voordat je naar
                Spanje reist.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Het doel is niet om je eindeloze lijsten met woningen te sturen. We brengen
                honderden mogelijkheden terug tot een klein aantal realistische woningen
                die zowel passen bij het huis dat je zoekt als bij de locatie en leefstijl
                uit jouw Area Match Report.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Maximaal 10 gericht geselecteerde woningen",
                  "Selectie gekoppeld aan jouw Area Match",
                  "Persoonlijke bespreking van jouw wensen en rapport",
                  "Videotours waar beschikbaar",
                  "Budget en geschiktheid op lange termijn meegenomen",
                  "Geen druk om ongeschikte woningen te bezichtigen",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRIVÉ VS GROEP */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Kies de ervaring die bij jou past
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Ga privé op pad of ontdek de regio samen met zorgvuldig geselecteerde
                gelijkgestemde kopers.
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[40px] bg-white p-10 shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  Private Buyer Tour
                </p>
                <h3 className="mt-4 font-serif text-4xl text-[#1e2a3a]">
                  Een volledig persoonlijke woning- en regiobezoek, opgebouwd rond jouw
                  eigen selectie.
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Je route, bezichtigingen en planning worden afgestemd op jouw persoonlijke
                  zoekprofiel. We kunnen helpen met het coördineren van lokaal vervoer,
                  transfers en passende accommodatie, zodat je tijd in Spanje volledig
                  gericht is op de plaatsen en woningen die voor jou relevant zijn.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Afhankelijk van waar je in het aankoopproces staat, kunnen we ook
                  ontmoetingen regelen met relevante onafhankelijke professionals,
                  zoals een vastgoedadvocaat, hypotheekspecialist en bouwkundig inspecteur
                  of technisch adviseur.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Een privétour is ideaal wanneer je maximale flexibiliteit,
                  privacy en een programma wilt dat volledig is afgestemd op jouw eigen
                  aankoopcriteria en tempo.
                </p>
              </div>

              <div className="rounded-[40px] bg-[#1e2a3a] p-10 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  Discovery Trip in kleine groep
                </p>
                <h3 className="mt-4 font-serif text-4xl">
                  Ontdek woningen en leefstijl samen met kopers die zich in een vergelijkbare
                  fase van hun zoektocht bevinden.
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Onze groepsreizen brengen zorgvuldig geselecteerde kopers samen met
                  vergelijkbare plannen, verwachtingen of interesses. Je bezichtigt nog steeds
                  relevante woningen en hebt tijd voor persoonlijke vragen, maar deelt daarnaast
                  geselecteerde regiobezoeken, maaltijden en ervaringen met mensen die
                  een vergelijkbare toekomst in Spanje overwegen.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-white/80">
                  De lifestyle-activiteiten worden vooraf besproken en afgestemd
                  op de interesses van de deelnemers. Afhankelijk van de groep kan dit bijvoorbeeld
                  een yacht trip zijn, zelf lokale olijfolie maken, gastronomie, natuur,
                  golf, wellness, culturele bezoeken of een andere lokale ervaring
                  waarmee je de regio ook buiten de woningmarkt leert kennen.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-white/80">
                  Het doel is niet zomaar entertainment. Het gaat erom dat je ervaart
                  hoe het dagelijks leven, de gemeenschap en je vrije tijd er werkelijk
                  uit kunnen zien voordat je bepaalt waar je wilt kopen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KOPERSKANT */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Aan de kant van de koper
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Onze taak is jou helpen de juiste beslissing te nemen, niet om je een
              specifieke woning te verkopen.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Nordic Move Spain werkt aan de kant van de koper. We zijn niet afhankelijk
                  van een verkoper die ons een verkoopcommissie betaalt om jou richting
                  een bepaalde woning te sturen. Daardoor kunnen we ons blijven richten op de vraag
                  of een woning echt bij jou past en of belangrijke risico’s goed zijn
                  onderzocht voordat je verdergaat.
                </p>

                <p>
                  Als een gebied niet bij jouw profiel past, zeggen we dat. Als een
                  woning praktische, technische, juridische of leefstijlgerelateerde
                  aandachtspunten heeft, kan de juiste stap zijn om verder onderzoek te doen,
                  opnieuw te onderhandelen of van de aankoop af te zien.
                </p>

                <p>
                  Wanneer je serieus geïnteresseerd raakt in een woning, worden de formele
                  juridische en technische onderzoeken uitgevoerd door
                  onafhankelijke professionals, zoals jouw vastgoedadvocaat en
                  bouwkundig inspecteur. Iedere professional blijft verantwoordelijk voor
                  het eigen advies, de controles en de rapportage.
                </p>

                <p>
                  Wij helpen dit proces te coördineren, zorgen dat de relevante partijen
                  met elkaar verbonden zijn en helpen je de volgende stappen te begrijpen.
                  Door onze onafhankelijkheid hebben wij geen belang aan de verkoperskant
                  om aandachtspunten kleiner te maken alleen om een verkoop door te laten gaan.
                </p>
              </div>

              <div className="rounded-[32px] bg-white/80 p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Wat dit in de praktijk betekent
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Geen druk om een specifieke woning te kopen",
                    "Onafhankelijke advocaat voor juridische due diligence",
                    "Onafhankelijke bouwkundig inspecteur of technisch adviseur voor technische controles",
                    "Duidelijke scheiding tussen verkoop en professionele onderzoeken",
                    "Ruimte om aandachtspunten te onderzoeken vóór je beslist",
                    "Ondersteuning om door te gaan, opnieuw te onderhandelen of af te zien van de koop",
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



        {/* BREED MARKTBEREIK */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Breder toegang tot de woningmarkt
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Wij vertegenwoordigen de koper, niet de woning.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Omdat Nordic Move Spain niet door de verkoper of verkopende
                  makelaar wordt betaald om een bepaalde woning te promoten, zijn we niet gebonden aan één
                  makelaar, één portefeuille of één projectontwikkelaar. We beginnen met jouw zoekprofiel
                  en zoeken de woning die bij jou past, in plaats van te beginnen
                  met een woning die iemand moet verkopen.
                </p>

                <p>
                  Na jouw Area Match Report en persoonlijke gesprek kunnen we
                  namens jou makelaars, projectontwikkelaars en vastgoedprofessionals
                  in de hele Costa Blanca Noord benaderen. Dit geeft ons een
                  breder beeld van de markt en maakt het mogelijk kansen van
                  verschillende makelaars te vergelijken in plaats van jouw zoektocht te beperken tot
                  het aanbod van één makelaar.
                </p>

                <p>
                  Via ons lokale netwerk krijgen we bovendien toegang tot exclusieve listings,
                  off-market mogelijkheden en woningen die soms al met ons worden gedeeld
                  voordat ze openbaar worden aangeboden. Makelaars en lokale contacten kunnen
                  ons rechtstreeks benaderen wanneer zij weten dat wij een serieuze koper
                  met een duidelijk zoekprofiel vertegenwoordigen.
                </p>

                <p>
                  Dit betekent niet dat iedere passende woning off-market of
                  exclusief is. Het betekent dat we breder kunnen zoeken, de markt
                  actief kunnen benaderen en openbare listings en kansen
                  uit ons netwerk kunnen samenbrengen in één gerichte zoektocht voor jou.
                </p>
              </div>

              <div className="rounded-[32px] bg-[#f6f1ea] p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Wat breder marktbereik voor jou kan betekenen
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    "Zoeken via meerdere makelaars",
                    "Exclusieve listings via ons netwerk",
                    "Off-market en pre-market mogelijkheden",
                    "Direct contact wanneer passende woningen beschikbaar komen",
                    "Eén duidelijk zoekprofiel voor de bredere markt",
                    "Niet afhankelijk van het aanbod van één verkopende makelaar",
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

        {/* REGIO'S */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Ontdek de echte Costa Blanca Noord
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Vergelijk hoe de verschillende gebieden in het dagelijks leven werkelijk aanvoelen.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Een woning kun je veranderen. De locatie niet. We helpen je
                sfeer, bereikbaarheid, scholen, gezondheidszorg, dagelijkse
                voorzieningen, sociaal leven, restaurants, sport, internationale
                gemeenschap, woningtypen, reistijden en praktische geschiktheid
                op lange termijn te vergelijken.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Moraira",
                  text: "Rustig en elegant wonen aan de kust met villa’s, baaien en een exclusieve maar ontspannen woonomgeving.",
                },
                {
                  name: "Jávea",
                  text: "Een levendige internationale leefstijl met stranden, restaurants, sport, scholen en het hele jaar door activiteit.",
                },
                {
                  name: "Altea",
                  text: "Cultuur, schoonheid, zeezicht en mediterrane sfeer in een artistieke en verfijnde omgeving.",
                },
                {
                  name: "Benissa",
                  text: "Ruimte, privacy, authenticiteit, landelijk wonen en verborgen baaien langs de kust.",
                },
                {
                  name: "Calpe",
                  text: "Wonen aan het strand, marina-leven, appartementen, nieuwbouw en een actievere sfeer.",
                },
                {
                  name: "Dénia",
                  text: "Gastronomie, havenleven, dagelijkse voorzieningen en een levendige stad die het hele jaar door goed functioneert.",
                },
              ].map((region) => (
                <div key={region.name} className="rounded-[32px] bg-white p-8 shadow-sm">
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

        {/* EXPERTS */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Ontmoet de professionals die je mogelijk nodig hebt
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Begrijp het juridische, technische en financiële proces voordat je
                een grote beslissing neemt.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                Tijdens een Private Buyer Tour of Discovery Trip in een groep kunnen we
                kennismakingen regelen met relevante onafhankelijke professionals en
                lokale contacten. Welke gesprekken het meest relevant zijn, hangt af van jouw plannen
                en van waar je in het aankoopproces staat.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Onafhankelijke vastgoedadvocaat",
                  "Bouwkundig inspecteur of technisch adviseur",
                  "Hypotheekspecialist",
                  "Bankcontact",
                  "Verzekeringsspecialist",
                  "Notaris of begeleiding rond het notariële proces waar relevant",
                  "Relocation-contacten",
                  "Andere specialisten die relevant zijn voor de woning",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Deze professionals blijven onafhankelijk en verantwoordelijk voor hun
                eigen advies en rapportages. Nordic Move Spain coördineert en ondersteunt
                het aankooptraject; wij vervangen geen juridisch advies, formele
                bouwkundige keuring, taxatie, hypotheekadvies of andere gereguleerde professionele
                dienstverlening.
              </p>
            </div>
          </div>
        </section>

        {/* LIFESTYLE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ervaar de leefstijl, niet alleen de woningmarkt
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              De juiste woning moet ook passen bij het leven dat je eromheen wilt leiden.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              Bij groepsreizen worden lokale ervaringen vooraf met de deelnemers
              besproken en gekozen op basis van de interesses van de groep. Bij een
              privétour kunnen we het programma afstemmen op jouw eigen interesses
              en op de gebieden die je beter wilt leren kennen.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Yacht- of marina-ervaring",
                "Zelf olijfolie maken of een lokale producent bezoeken",
                "Lokale lunches en gastronomie",
                "Wijn- of culinaire proeverij",
                "Golf- en sportclubs",
                "Wellness en spa",
                "Wandelen en natuur",
                "Culturele en lokale ervaringen",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium text-[#1e2a3a]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              Deze ervaringen liggen niet voor iedere reis vast. Ze worden
              vooraf gekozen op basis van de wensen van de deelnemers, de praktische planning
              en wat jou het beste helpt om het karakter van de regio te begrijpen.
            </p>
          </div>
        </section>

        {/* WAT WE KUNNEN COÖRDINEREN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Een volledig gecoördineerde aankoopervaring
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
              Wij verbinden alle praktische onderdelen, zodat jij je kunt richten op de
              beslissing.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Persoonlijk Area Match Report",
                "Persoonlijk één-op-één gesprek",
                "Gerichte selectie van maximaal 10 woningen",
                "Videotours waar beschikbaar",
                "Persoonlijk programma voor privébezichtigingen",
                "Buyer Discovery Trip in kleine groep",
                "Hulp bij het coördineren van vervoer en transfers",
                "Hulp bij het kiezen van passende accommodatie",
                "Bezoeken aan gebieden en woonwijken",
                "Kennismaking met een onafhankelijke advocaat",
                "Kennismaking met hypotheek- en bankspecialisten",
                "Kennismaking met bouwkundig inspecteur of technisch adviseur",
                "Lifestyle-ervaringen afgestemd op jouw interesses",
                "Ondersteuning bij het vergelijken van woningen en locaties",
                "Duidelijke vervolgstappen na het bezoek",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm font-medium leading-relaxed text-white/90">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NA DE TOUR */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Na jouw tour
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Je moet vertrekken met duidelijkheid, niet met meer twijfel.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Welke gebieden aan de Costa Blanca Noord werkelijk bij jouw leefstijl passen",
                "Welke gebieden of woningtypen minder geschikt voor je zijn",
                "Welke geselecteerde woningen na de echte bezichtigingen nog steeds realistisch zijn",
                "Welke praktische, juridische of technische vragen nog onderzocht moeten worden",
                "Welke professional de volgende controles moet uitvoeren",
                "Hoe het verdere aankoopproces en de volgende stappen eruitzien",
                "Of je klaar bent om door te gaan, verder te zoeken of opnieuw te overwegen",
                "Hoe Nordic Move Spain je na jouw beslissing kan ondersteunen bij aankoop, relocation en het woonklaar maken",
              ].map((item) => (
                <div key={item} className="rounded-[28px] bg-white p-7 shadow-sm">
                  <p className="text-lg leading-relaxed text-stone-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VOOR WIE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Past dit bij jou?
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Ontwikkeld voor serieuze internationale kopers die meer duidelijkheid willen
              voordat zij zich aan een woning in Spanje verbinden.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Kopers van luxe villa’s en tweede woningen",
                "Gezinnen die een verhuizing naar Spanje overwegen",
                "Gepensioneerden die een nieuwe leefstijl plannen",
                "Ondernemers en professionals die op afstand werken",
                "Kopers die Moraira, Jávea, Altea, Benissa, Calpe en Dénia vergelijken",
                "Kopers die onafhankelijke begeleiding willen voordat zij een bod uitbrengen",
                "Mensen die waarde hechten aan een persoonlijke en gerichte bezichtigingservaring",
                "Mensen die een regio graag ontdekken met gelijkgestemde toekomstige bewoners",
                "Internationale kopers die juridische en technische controles serieus willen laten uitvoeren",
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
                Vragen over Private Buyer Tours, Discovery Trips in groepen en
                het kopen van een woning aan de Costa Blanca Noord.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question: "Begin ik direct met woningadvertenties?",
                  answer:
                    "Nee. We beginnen met jouw persoonlijke Area Match Report en een één-op-één gesprek. Pas daarna onderzoeken we een gerichte selectie van maximaal 10 woningen die passen bij jouw regio, budget, woonwensen en leefstijl.",
                },
                {
                  question: "Bieden jullie videotours voordat ik naar Spanje reis?",
                  answer:
                    "Waar geschikt videomateriaal beschikbaar is, gebruiken we dit om je te helpen geselecteerde woningen al vóór je reis te beoordelen. Het doel is onnodige bezichtigingen te verminderen en jouw bezoek veel gerichter te maken.",
                },
                {
                  question: "Kan ik kiezen voor een privétour in plaats van een groepsreis?",
                  answer:
                    "Ja. Je kunt kiezen voor een Private Buyer Tour die is opgebouwd rond jouw eigen selectie en planning, of deelnemen aan een zorgvuldig samengestelde Discovery Trip in kleine groep met gezamenlijke regiobezoeken en lifestyle-ervaringen.",
                },
                {
                  question: "Wat gebeurt er tijdens een Discovery Trip in kleine groep?",
                  answer:
                    "Je combineert relevante woningbezichtigingen en het ontdekken van de regio met geselecteerde gesprekken met experts en lokale ervaringen. Activiteiten worden vooraf besproken en gekozen op basis van de interesses van de deelnemers.",
                },
                {
                  question: "Kunnen jullie helpen met vervoer en accommodatie?",
                  answer:
                    "Ja. Afhankelijk van de tour kunnen we lokaal vervoer, transfers en passende accommodatie helpen coördineren, zodat de praktische kant van jouw verblijf optimaal aansluit op het bezichtigingsprogramma.",
                },
                {
                  question: "Ontvangen jullie commissie van de verkoper?",
                  answer:
                    "Nordic Move Spain werkt aan de kant van de koper en is niet afhankelijk van een verkoper die ons een verkoopcommissie betaalt om jou naar een specifieke woning te sturen. Onze rol is te helpen beoordelen wat bij jou past en waar nodig de volgende onafhankelijke controles te coördineren.",
                },
                {
                  question: "Zijn jullie beperkt tot het aanbod van één makelaar?",
                  answer:
                    "Nee. Omdat onze zoektocht wordt gestuurd door de koper en niet door het aanbod van een verkoper, kunnen we meerdere makelaars, projectontwikkelaars en lokale contacten benaderen. Via ons netwerk krijgen we ook toegang tot exclusieve listings, off-market kansen en woningen die al vóór publieke lancering met ons worden gedeeld, al hangt de beschikbaarheid altijd af van wat er op dat moment op de markt is.",
                },
                {
                  question: "Wie voert de juridische en technische controles uit?",
                  answer:
                    "Formele juridische due diligence wordt uitgevoerd door een onafhankelijke vastgoedadvocaat. Bouwkundige inspecties of technische onderzoeken worden uitgevoerd door een onafhankelijke bouwkundig inspecteur of technisch specialist. Iedere specialist is verantwoordelijk voor het eigen advies en rapport.",
                },
                {
                  question: "Wat als een woning niet goed uit de controles komt?",
                  answer:
                    "Het doel van onafhankelijke controles is om risico’s te begrijpen voordat je je vastlegt. Afhankelijk van de bevindingen kan de juiste vervolgstap verder onderzoek, opnieuw onderhandelen of besluiten om niet door te gaan zijn.",
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
              Start met jouw Area Match
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
              De beste zoektocht naar een woning begint met weten waar jouw leven in
              Spanje werkelijk moet passen.
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
              Begin met jouw persoonlijke Area Match Report. Daarna verfijnen we jouw
              zoekprofiel, maken we een gerichte selectie en helpen we je kiezen tussen de privé-
              of groepsbezichtigingservaring die het beste bij jou past.
            </p>

            <a
              href="/nl/contact"
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Bespreek jouw aankoopplannen
            </a>
          </div>
        </section>
      </main>
    </>
  );
}