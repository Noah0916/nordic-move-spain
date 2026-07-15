export const metadata = {
  title:
    "4-daagse Buyer Discovery Trip Costa Blanca Noord | Huis kopen Spanje",
  description:
    "4-daagse Buyer Discovery Trip Costa Blanca Noord voor huis kopen in Spanje. Met privéchauffeur, 5-sterrenverblijf, Area Match Rapport, selectieve individuele woningbezichtigingen, regio tours, lifestyle ervaringen en professionele aankoopbegeleiding.",
  keywords: [
    "4-daagse Buyer Discovery Trip Costa Blanca Noord",
    "Buyer Discovery Trip Spanje",
    "huis kopen Spanje",
    "woning kopen Spanje",
    "huis kopen Costa Blanca Noord",
    "woning kopen Costa Blanca Noord",
    "vastgoed kopen Spanje",
    "bezichtigingsreis Spanje",
    "huizen bezichtigen Spanje",
    "individuele woningbezichtigingen Spanje",
    "woningbezichtigingen Costa Blanca Noord",
    "selectieve bezichtigingen Spanje",
    "Area Match Rapport Spanje",
    "aankoopbegeleiding Spanje",
    "Nederlandse aankoopbegeleiding Spanje",
    "tweede woning Spanje kopen",
    "emigreren naar Spanje",
    "Moraira huis kopen",
    "Jávea huis kopen",
    "Javea house buying trip",
    "Altea huis kopen",
    "Benissa huis kopen",
    "Calpe appartement kopen",
    "Dénia huis kopen",
    "Denia woning kopen",
  ],
  alternates: {
    canonical: "/buyer-discovery-trip-costa-blanca-noord",
  },
  openGraph: {
    title:
      "4-daagse Buyer Discovery Trip Costa Blanca Noord | Huis kopen in Spanje",
    description:
      "Ontdek in 4 dagen waar u het beste een huis koopt aan de Costa Blanca Noord. Met privéchauffeur, 5-sterrenverblijf, Area Match Rapport, geselecteerde woningbezichtigingen, experts, regio tours en like-minded kopers.",
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: "/images/discover-card.png",
        width: 1200,
        height: 630,
        alt: "4-daagse Buyer Discovery Trip Costa Blanca Noord voor huis kopen in Spanje",
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
    "Een volledig georganiseerde 4-daagse woning- en levensstijlreis voor internationale kopers die een huis of tweede woning willen kopen aan de Costa Blanca Noord in Spanje, inclusief intake, Area Match Rapport en selectieve individuele woningbezichtigingen.",
  touristType: [
    "Nederlandse kopers",
    "Belgische kopers",
    "Internationale kopers",
    "Tweede woning kopers",
    "Kopers die naar Spanje willen verhuizen",
  ],
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Dag 1: Aankomst, privétransfer, intake en welkom",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dag 2: Regio tour Moraira, Benissa en Calpe met geselecteerde woningbezichtigingen en lifestyle ervaringen",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dag 3: Jávea en Dénia met individuele woningbezichtigingen, lunch en lokale activiteiten",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Dag 4: Altea, professionals, aankoopproces en vervolgstappen",
      },
    ],
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
            alt="4-daagse Buyer Discovery Trip Costa Blanca Noord voor huis kopen in Spanje"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                4-daagse Buyer Discovery Trip Costa Blanca Noord
              </p>

              <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
                Huis kopen in Spanje? Ontdek in 4 dagen waar u aan de Costa
                Blanca Noord echt wilt wonen.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                Een volledig georganiseerde woning- en levensstijlreis met
                privéchauffeur, geselecteerde like-minded kopers,
                5-sterrenverblijf, Area Match Rapport, regio tours, selectieve
                individuele woningbezichtigingen en ontmoetingen met de
                specialisten die uw aankoop in Spanje mogelijk maken.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Vraag uw 4-daagse Buyer Discovery Trip aan
                </a>

                <a
                  href="/regions"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
                >
                  Ontdek de regio's
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTIE */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Duidelijkheid vóór u koopt
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Een woning kopen in Spanje begint niet met willekeurige
                  bezichtigingen, maar met het vinden van de juiste regio.
                </h2>
              </div>

              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Wie een huis wil kopen aan de Costa Blanca Noord, moet verder
                  kijken dan mooie foto's, makelaarsteksten en losse
                  woningbezichtigingen. U wilt de juiste regio voelen, maar ook
                  woningen bekijken die logisch passen bij uw budget,
                  gezinssituatie, wensen, Area Match Rapport en toekomstige
                  levensstijl.
                </p>

                <p className="mt-6">
                  Onze Buyer Discovery Trip is een zorgvuldig samengestelde
                  4-daagse woning- en levensstijlervaring aan de Costa Blanca
                  Noord. De reis is ontwikkeld voor Nederlandse, Belgische en
                  internationale kopers die een huis, villa, appartement,
                  nieuwbouwwoning of tweede woning in Spanje willen kopen met
                  meer zekerheid en minder risico.
                </p>

                <p className="mt-6">
                  Dit is geen standaard bezichtigingsreis waarbij u willekeurig
                  van woning naar woning rijdt. Het is een volledig
                  georganiseerde groepsreis met gelijkgestemde mensen, een
                  privéchauffeur, individuele rustmomenten, geselecteerde
                  woningbezichtigingen, lokale lifestyle ervaringen en directe
                  kennismakingen met de professionals die u nodig heeft voor het
                  aankoopproces in Spanje.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO QUICK VALUE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Voor kopers die serieus zoeken
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              De 4-daagse ontdekkingstrip voor iedereen die een huis wil kopen
              aan de Costa Blanca Noord.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Huis kopen in Spanje",
                "Woning kopen Costa Blanca Noord",
                "Tweede woning in Spanje",
                "Vastgoed kopen met begeleiding",
                "Geselecteerde woningbezichtigingen",
                "Area Match Rapport voor kopers",
                "Villa kopen Moraira of Jávea",
                "Appartement kopen Calpe of Dénia",
                "Aankoopproces Spanje begrijpen",
                "Like-minded kopers ontmoeten",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              U krijgt een realistische indruk van de regio én van woningen die
              zorgvuldig zijn voorgeselecteerd op basis van uw intake, budget,
              Area Match Rapport, woonwensen en levensstijl. Zo bekijkt u niet
              zomaar huizen, maar woningen die passen bij de omgeving waarin u
              later echt wilt wonen.
            </p>
          </div>
        </section>

        {/* EERST LEREN WIJ U KENNEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Eerst leren wij u kennen
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Uw Buyer Discovery Trip begint bij uw levensstijl, niet bij
              woningadvertenties.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Voor uw aankomst starten we met uw gratis Area Match Rapport
                  en een persoonlijk intakegesprek. Daarbij kijken we naar uw
                  doelen, budget, gezinssituatie, dagelijkse gewoonten,
                  interesses, gewenste levensstijl, verhuisplannen,
                  investeringsdoelen en langetermijnprioriteiten.
                </p>

                <p className="mt-6">
                  Daarna stellen wij een 4-daags programma samen dat past bij de
                  groep én bij uw persoonlijke profiel. Op basis van uw Area
                  Match Rapport selecteren we niet alleen de juiste regio's en
                  buurten, maar ook een beperkt aantal woningen die aansluiten
                  bij uw budget, wensen, woonstijl en toekomstplannen.
                </p>

                <p className="mt-6">
                  De intake helpt ons ook om te bepalen welke woningtypen,
                  prijsklassen, woonwijken, professionals, lokale ondernemers,
                  internationale bewoners, sportclubs, restaurants en
                  activiteiten relevant voor u zijn. Zo voelt de reis niet als
                  een algemene tour, maar als een gerichte kennismaking met uw
                  mogelijke nieuwe leven in Spanje.
                </p>
              </div>

              <div className="rounded-[32px] bg-[#f6f1ea] p-8">
                <p className="text-lg leading-relaxed text-stone-700">
                  Zoekt u een rustige villa bij Moraira? Een socialer leven in
                  Jávea? Een elegante omgeving bij Altea? Ruimte en
                  authenticiteit rond Benissa? Appartementen aan zee en
                  nieuwbouw in Calpe? Of juist een levendige stad die het hele
                  jaar actief is, zoals Dénia?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SELECTIEVE WONINGBEZICHTIGINGEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Selectieve individuele woningbezichtigingen
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              U bekijkt geen willekeurige huizen, maar woningen die passen bij
              uw intake, Area Match Rapport, omgeving en levensstijl.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="text-lg leading-relaxed text-stone-700">
                <p>
                  Tijdens de 4-daagse Buyer Discovery Trip plannen wij een
                  beperkt aantal individuele woningbezichtigingen die zorgvuldig
                  zijn voorgeselecteerd. Niet omdat er zoveel mogelijk huizen
                  bekeken moeten worden, maar omdat u de juiste woningen moet
                  zien: woningen die logisch aansluiten bij uw budget,
                  woonwensen, gezinssituatie, gewenste omgeving en dagelijkse
                  levensstijl.
                </p>

                <p className="mt-6">
                  Uw gratis Area Match Rapport en intake vormen de basis. Zo
                  kijken we of u beter past bij een rustige villa in Moraira,
                  een moderne woning bij Jávea, een stijlvolle omgeving rond
                  Altea, een finca of villa in Benissa, een appartement of
                  nieuwbouwproject in Calpe, of een levendige stadswoning in
                  Dénia.
                </p>

                <p className="mt-6">
                  Tijdens deze bezichtigingen kijken we verder dan de woning
                  zelf. We bespreken ligging, bereikbaarheid, privacy,
                  oriëntatie, onderhoud, bouwkundige aandachtspunten,
                  buurtgevoel, voorzieningen, verhuurpotentie en of de woning
                  past bij het leven dat u in Spanje wilt opbouwen.
                </p>
              </div>

              <div className="rounded-[32px] bg-white/80 p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Van online zoeken naar gericht kiezen
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  Veel kopers raken online verdwaald in honderden woningen. Wij
                  brengen focus. U ziet een zorgvuldig gekozen selectie en leert
                  direct waarom een woning, buurt of regio wel of juist niet bij
                  u past.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  Dat maakt de reis waardevoller dan een gewone
                  bezichtigingsreis: u vergelijkt niet alleen huizen, maar ook
                  levensstijlen, regio's en toekomstscenario's.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* GROEPSREIS */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Zorgvuldig geselecteerde groep
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Reis met like-minded mensen die passen bij uw interesses,
                levensfase en levensstijl.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                De Buyer Discovery Trip wordt georganiseerd als een zorgvuldig
                samengestelde groepsreis. Wij brengen u samen met mensen die
                zich in een vergelijkbare fase bevinden, dezelfde regio's
                onderzoeken of een vergelijkbare levensstijl zoeken aan de Costa
                Blanca Noord.
              </p>

              <p className="mt-6">
                Denk aan Nederlandse en Belgische kopers, internationale
                gezinnen, ondernemers, remote workers, tweede-woningkopers,
                actieve pensionado's en mensen die zich oriënteren op een
                toekomst in Spanje. De groep blijft persoonlijk en select, zodat
                er ruimte is voor inhoud, rust, privacy en echte gesprekken.
              </p>

              <p className="mt-6">
                U ervaart gezamenlijke lunches, lokale buurten, activiteiten en
                gesprekken met gelijkgestemde toekomstige bewoners. Tegelijk
                heeft u altijd de mogelijkheid om u terug te trekken in uw
                eigen 5-sterrenhotel, suite of geselecteerde finca wanneer u
                behoefte heeft aan privacy en rust.
              </p>

              <p className="mt-6">
                Juist deze combinatie van gedeelde ervaring en individuele
                vrijheid maakt de reis waardevol: u leert de regio kennen, bouwt
                een eerste netwerk op en behoudt toch uw eigen ruimte.
              </p>
            </div>
          </div>
        </section>

        {/* AANKOMST */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vanaf uw aankomst is alles geregeld
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight">
              U komt aan in Spanje, wij zorgen voor vervoer, verblijf, planning
              en begeleiding.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-serif text-3xl">Privéchauffeur</h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Vanaf Alicante Airport of Valencia Airport wordt u ontvangen
                  en comfortabel vervoerd door een privéchauffeur tijdens de
                  geplande onderdelen van de trip.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl">
                  5-sterrenhotel of finca
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  U verblijft in een zorgvuldig geselecteerd 5-sterrenhotel,
                  luxe suite, boutique resort of finca die past bij de sfeer van
                  de Costa Blanca Noord.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl">Persoonlijk programma</h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Tijdens het welkom bespreken we de groep, uw persoonlijke
                  doelen, uw Area Match Rapport, de geselecteerde regio's,
                  mogelijke woningen en de professionals die u tijdens de 4
                  dagen ontmoet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 DAGEN PROGRAMMA */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Het 4-daagse programma
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Vier dagen om wonen, kopen en leven aan de Costa Blanca Noord
                echt te begrijpen.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Het exacte programma wordt afgestemd op de groep, het seizoen,
                de regio's en de profielen van de deelnemers. De opbouw blijft
                helder: aankomen, ontdekken, ervaren, specialisten ontmoeten en
                met duidelijke vervolgstappen naar huis gaan.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  day: "Dag 1",
                  title: "Aankomst en welkom",
                  text: "Privétransfer, check-in, persoonlijke kennismaking, introductie van de groep, uitleg over het aankoopproces en een ontspannen welkomsdiner.",
                },
                {
                  day: "Dag 2",
                  title: "Moraira, Benissa en Calpe",
                  text: "Regio tour, woonwijken, villa zones, kustgebieden, lokale lunch en selectieve woningbezichtigingen van huizen die passen bij uw intake, budget en levensstijl.",
                },
                {
                  day: "Dag 3",
                  title: "Jávea en Dénia",
                  text: "Buurten, stranden, haven, voorzieningen, internationale gemeenschap, individuele woningbezichtigingen en een lifestyle activiteit zoals zelf pasta maken, wellness of een culinaire tour.",
                },
                {
                  day: "Dag 4",
                  title: "Altea en specialisten",
                  text: "Altea en omgeving, eventueel laatste gerichte bezichtigingen, gesprekken met advocaat, bouwkundig adviseur, hypotheekadviseur en duidelijke vervolgstappen.",
                },
              ].map((item) => (
                <div key={item.day} className="rounded-[32px] bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                    {item.day}
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
          </div>
        </section>

        {/* ECHTE REGIO'S */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Huis kopen Costa Blanca Noord
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Ontdek Moraira, Jávea, Altea, Benissa, Calpe en Dénia vanuit het
                dagelijks leven.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Tijdens de Buyer Discovery Trip ervaart u de regio's vanuit het
                perspectief van wonen, niet alleen vanuit toerisme. We bezoeken
                de plaatsen, buurten en voorzieningen die belangrijk zijn voor
                uw toekomstige levensstijl én plannen individuele
                woningbezichtigingen die aansluiten bij uw persoonlijke profiel.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Moraira huis kopen
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Rustig en elegant wonen aan de kust, met villa's, baaien,
                  restaurants, internationale bewoners en een verfijnde
                  residentiële sfeer.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Jávea woning kopen
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Een levendige internationale levensstijl met stranden,
                  restaurants, sportclubs, scholen, bedrijvigheid en energie
                  gedurende het hele jaar.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Altea vastgoed kopen
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Cultuur, schoonheid, zeezicht, kunst, gastronomie en
                  mediterrane verfijning in een stijlvolle omgeving.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Benissa villa kopen
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Ruimte, privacy, authenticiteit, landelijk wonen, finca's,
                  villa's en verborgen baaien aan de kust.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Calpe appartement of nieuwbouw kopen
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Wonen aan het strand, jachthavenleven, appartementen,
                  nieuwbouwprojecten, voorzieningen en een actievere sfeer.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Dénia huis of appartement kopen
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Gastronomie, havenleven, dagelijkse voorzieningen, ferry naar
                  Ibiza en een levendige stad die het hele jaar actief blijft.
                </p>
              </div>
            </div>

            <p className="mt-12 max-w-4xl text-lg leading-relaxed text-stone-600">
              Wij helpen u de verschillen tussen de gebieden begrijpen: sfeer,
              woningtypen, scholen, gezondheidszorg, reistijden,
              internationale gemeenschap, restaurants, sportmogelijkheden,
              dagelijkse voorzieningen, verhuurmogelijkheden, bereikbaarheid en
              praktische geschiktheid op de lange termijn.
            </p>
          </div>
        </section>

        {/* PROFESSIONALS */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Aankoopbegeleiding Spanje
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Ontmoet de specialisten die uw aankoop in Spanje mogelijk maken.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                Tijdens uw 4-daagse Buyer Discovery Trip introduceren wij u bij
                betrouwbare onafhankelijke professionals en lokale contacten die
                u helpen het aankoopproces in Spanje goed te begrijpen voordat
                u een bod doet of documenten tekent.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Onafhankelijke vastgoedadvocaat",
                  "Bouwkundig adviseur",
                  "Hypotheekadviseur of hypotheekspecialist",
                  "Spaanse notaris waar relevant",
                  "Bankcontact",
                  "Verzekeringsspecialist",
                  "Lokale vastgoedexpert",
                  "Belasting- of verhuisadviseur waar relevant",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Deze gesprekken geven u duidelijkheid over juridische controles,
                bouwkundige aandachtspunten, hypotheekmogelijkheden,
                bankvereisten, verzekeringen, aankoopkosten, jaarlijkse lasten,
                belastingen, documentatie, reserveringscontracten en
                veelvoorkomende fouten van buitenlandse kopers.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                U kunt uw vragen rechtstreeks stellen en vertrekt met een
                duidelijker beeld van wie u nodig heeft, welke stappen volgen en
                hoe u veilig vastgoed in Spanje kunt kopen.
              </p>
            </div>
          </div>
        </section>

        {/* LEVENSSTIJL */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ervaar de levensstijl
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Een woning is slechts één onderdeel van uw beslissing. Uw leven
              eromheen is minstens zo belangrijk.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              Daarom bevat de Buyer Discovery Trip activiteiten die aansluiten
              bij uw interesses en de regio die u onderzoekt. U ervaart buurten,
              lunches, clubs, natuur, gastronomie en lokale ontmoetingen zoals
              u die later ook in uw dagelijks leven zou kunnen ervaren.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Gezamenlijke lokale lunches",
                "Fine dining en gastronomie",
                "Zelf pasta maken of cooking workshop",
                "Golf tour of golfclub bezoek",
                "Wijnproeverijen",
                "Beachclubs en marinas",
                "Wellness en spa ervaringen",
                "Wandel- en natuurroutes",
                "Culturele bezoeken",
                "Netwerkintroducties",
                "Community gatherings",
                "Individuele privacy momenten",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium text-[#1e2a3a]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              Wilt u samen lunchen en de lokale buurten ervaren, dan is daar
              ruimte voor. Wilt u privacy, dan trekt u zich terug in uw eigen
              hotelkamer, suite of finca. De reis is georganiseerd, maar voelt
              niet massaal.
            </p>
          </div>
        </section>

        {/* WAT WIJ DOEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Wat wij voor u doen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Wij begeleiden, coördineren en helpen u een betere
                vastgoedbeslissing in Spanje te nemen.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Wij coördineren de volledige 4-daagse ervaring: intake, Area
                Match Rapport, groepssamenstelling, verblijf, privéchauffeur,
                regio tours, zorgvuldig geselecteerde individuele
                woningbezichtigingen, lunches, lifestyle activiteiten en
                kennismakingen met onafhankelijke professionals.
              </p>

              <p className="mt-6">
                Wij helpen u gebieden te vergelijken, praktische verschillen te
                begrijpen, de juiste vragen te stellen en veelvoorkomende fouten
                te vermijden voordat u serieus vastgoed in Spanje koopt.
              </p>

              <p className="mt-6">
                Onze rol is niet om u een woning op te dringen. Onze rol is om
                u te helpen een betere beslissing te nemen over regio,
                levensstijl, budget, aankoopproces en begeleiding.
              </p>

              <p className="mt-6">
                Wanneer een gebied niet bij uw profiel past, zeggen wij dat. Als
                een bepaald woningtype juridische, praktische, bouwkundige of
                lifestyle aandachtspunten heeft, helpen wij u dat op tijd te
                begrijpen.
              </p>
            </div>
          </div>
        </section>

        {/* INBEGREPEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Wat is inbegrepen
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Uw 4-daagse Buyer Discovery Trip bevat alles voor een heldere
              eerste beslissing over wonen en kopen in Spanje.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Gratis persoonlijk intakegesprek vóór aankomst",
                "Gratis Area Match Rapport",
                "Persoonlijk levensstijl- en gebiedsprofiel",
                "Zorgvuldig geselecteerde groepssamenstelling",
                "Volledig georganiseerd 4-daags programma",
                "Privéchauffeur en geplande transfers",
                "Verblijf in 5-sterrenhotel, luxe suite, resort of finca",
                "Begeleide regio tours aan de Costa Blanca Noord",
                "Selectieve individuele woningbezichtigingen op basis van uw intake",
                "Huizen geselecteerd op budget, regio, behoeften en levensstijl",
                "Kennismaking met advocaat, bouwkundig adviseur en hypotheekadviseur",
                "Kennismaking met bancaire, fiscale en verzekeringscontacten waar relevant",
                "Gezamenlijke lunches en lokale lifestyle ervaringen",
                "Activiteiten zoals cooking workshop, wijnproeverij of golf tour",
                "Privacy en rustmomenten in uw eigen accommodatie",
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

        {/* NA DE REIS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Wat u na 4 dagen weet
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                U vertrekt niet met vage indrukken, maar met duidelijkheid over
                huis kopen in Spanje.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Welke gebieden aan de Costa Blanca Noord bij uw levensstijl passen",
                "Welke gebieden minder geschikt voor u zijn",
                "Welke bekeken woningen het beste bij uw budget, gezin en doelen passen",
                "Welk type woning realistisch aansluit bij uw Area Match Rapport",
                "Wat het aankoopproces in Spanje inhoudt",
                "Welke juridische, financiële en bouwkundige onderwerpen aandacht nodig hebben",
                "Hoe het dagelijkse leven na de aankoop eruit zou kunnen zien",
                "Welke professionals u kunnen ondersteunen",
                "Welke lokale gemeenschap en like-minded mensen u kunt ontmoeten",
                "Of u klaar bent voor de volgende stap richting aankoop",
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
              Voor wie is deze trip?
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Ideaal voor serieuze kopers die Costa Blanca Noord eerst goed
              willen begrijpen voordat zij een woning kopen.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Nederlandse kopers die een huis in Spanje willen kopen",
                "Belgische en internationale kopers aan de Costa Blanca Noord",
                "Gezinnen die een verhuizing naar Spanje overwegen",
                "Gepensioneerden die een nieuwe levensstijl plannen",
                "Ondernemers en remote workers",
                "Kopers van een tweede woning in Spanje",
                "Mensen die Moraira, Jávea, Altea, Benissa, Calpe en Dénia vergelijken",
                "Cliënten die professionele aankoopbegeleiding willen",
                "Mensen die gelijkgestemde toekomstige bewoners willen ontmoeten",
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

        {/* FAQ SEO */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Veelgestelde vragen
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Veelgestelde vragen over huis kopen aan de Costa Blanca Noord.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  question:
                    "Is de Buyer Discovery Trip een standaard bezichtigingsreis?",
                  answer:
                    "Nee. De reis combineert regio tours, lifestyle ervaringen, selectieve individuele woningbezichtigingen, professionele uitleg en ontmoetingen met like-minded kopers.",
                },
                {
                  question:
                    "Is de trip bedoeld voor mensen die nog twijfelen tussen regio's?",
                  answer:
                    "Ja. De reis is juist bedoeld om Moraira, Jávea, Altea, Benissa, Calpe en Dénia beter te vergelijken voordat u een woning kiest.",
                },
                {
                  question:
                    "Bekijk ik ook huizen tijdens de trip?",
                  answer:
                    "Ja. Op basis van uw intake en Area Match Rapport selecteren we een beperkt aantal woningen die passen bij uw budget, gewenste regio, behoeften en levensstijl.",
                },
                {
                  question:
                    "Ontmoet ik ook professionals tijdens de reis?",
                  answer:
                    "Ja. Waar relevant ontmoet u onder meer een advocaat, bouwkundig adviseur, hypotheekadviseur, bankcontact, verzekeringsexpert en lokale vastgoedprofessional.",
                },
                {
                  question:
                    "Heb ik tijdens de groepsreis ook privacy?",
                  answer:
                    "Ja. U reist met een zorgvuldig geselecteerde groep, maar u verblijft in uw eigen kamer, suite, hotel of finca en heeft momenten om u terug te trekken.",
                },
              ].map((item) => (
                <div key={item.question} className="rounded-[28px] bg-[#f6f1ea] p-7">
                  <h3 className="font-serif text-2xl text-[#1e2a3a]">
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
              Vraag uw 4-daagse Buyer Discovery Trip aan
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
              Wanneer u serieus overweegt een huis in Spanje te kopen, is de
              belangrijkste beslissing niet alleen de woning.
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
              Het gaat om de juiste regio, de juiste levensstijl, de juiste
              woningselectie, de juiste begeleiding en de juiste mensen om u
              heen.
            </p>

            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
              Vraag uw 4-daagse Buyer Discovery Trip aan en ontdek welke regio,
              buurt en woning aan de Costa Blanca Noord werkelijk passen bij uw
              toekomst in Spanje.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Vraag uw 4-daagse Buyer Discovery Trip aan
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
