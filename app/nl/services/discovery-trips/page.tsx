export const metadata = {
  title:
    "Buyer Discovery Trip Costa Blanca Noord | Gericht huis kopen in Spanje",
  description:
    "Persoonlijke 4-daagse Buyer Discovery Trip aan de Costa Blanca Noord met Area Match Rapport, shortlist van 4 tot 8 woningen, privétransfer, 4- of 5-sterrenverblijf, lokale ervaringen, onafhankelijke experts en aankoopbegeleiding.",
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
    "Vall de Pop woning kopen",
    "Pop Valley Spanje",
    "villa shortlist Costa Blanca",
    "wildcard woning Spanje",
    "technische keuring woning Spanje",
    "onafhankelijke advocaat vastgoed Spanje",
    "4 sterren hotel Costa Blanca",
    "5 sterren hotel Costa Blanca",
  ],
  alternates: {
    canonical: "/buyer-discovery-trip-costa-blanca-noord",
  },
  openGraph: {
    title:
      "Buyer Discovery Trip Costa Blanca Noord | Gericht huis kopen in Spanje",
    description:
      "Ontdek in 4 dagen welke regio en woning bij u passen. Met Area Match Rapport, shortlist van 4 tot 8 woningen, privétransfer, 4- of 5-sterrenverblijf, lokale ervaringen, experts en like-minded kopers.",
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
    "Een persoonlijk samengestelde woning- en levensstijlreis voor internationale kopers, met Area Match Rapport, een shortlist van 4 tot 8 woningen, privétransfer, een 4- of 5-sterrenverblijf, lokale ervaringen en ontmoetingen met onafhankelijke aankoopprofessionals.",
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
        name: "Dag 1: Luchthavenpickup, check-in, Area Match, shortlist en persoonlijk welkom",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dag 2: Regio-ervaring en geselecteerde woningbezichtigingen op basis van de shortlist",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dag 3: Aanvullende bezichtigingen, mogelijke wildcard en gepersonaliseerde lokale activiteit",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Dag 4: Gesprekken met onafhankelijke experts, aankoopproces en vervolgstappen",
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
    "Alicante",
    "Vall de Pop",
    "Pop Valley",
    "Jalón",
    "Xaló",
    "Llíber",
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
            alt="Persoonlijke Buyer Discovery Trip aan de Costa Blanca Noord met geselecteerde woningbezichtigingen"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                4-daagse Buyer Discovery Trip Costa Blanca Noord
              </p>

              <h1 className="mt-6 font-serif text-5xl leading-[0.98] text-white md:text-6xl">
                Huis kopen in Spanje? Ontdek welke regio, woning en levensstijl
                werkelijk bij u passen.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                Een persoonlijk samengestelde woning- en levensstijlreis met
                privétransfer vanaf de luchthaven, een 4- of 5-sterrenverblijf,
                uw Area Match Rapport, een shortlist van 4 tot 8 woningen,
                geselecteerde like-minded kopers, lokale ervaringen en directe
                toegang tot betrouwbare onafhankelijke experts.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Vraag uw Buyer Discovery Trip aan
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
                  Van Area Match naar een gerichte woningselectie
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Geen willekeurige bezichtigingen, maar een persoonlijke route
                  naar de woning en omgeving die bij uw toekomst passen.
                </h2>
              </div>

              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Uw Buyer Discovery Trip begint met het Area Match Rapport en
                  een persoonlijke intake. We kijken naar uw woonwensen, budget,
                  toekomstplannen, gezinssituatie, dagelijkse gewoonten, hobby's
                  en interesses. Met die uitkomst gaan we via ons zorgvuldig
                  opgebouwde netwerk aan de Costa Blanca gericht op zoek.
                </p>

                <p className="mt-6">
                  Voor vertrek ontvangt u een shortlist van doorgaans 4 tot 8
                  villa's, appartementen of andere woningen die volgens ons het
                  beste bij uw profiel passen. U kiest welke woningen u tijdens
                  de reis wilt bekijken. Wilt u zich laten verrassen, dan kunnen
                  we ook een wildcard toevoegen: een woning waar u zelf
                  misschien niet op had gezocht, maar die door de ligging,
                  prijs, ruimte of omgeving onverwacht interessant kan zijn.
                </p>

                <p className="mt-6">
                  De reis gaat verder dan huizen bekijken. U wordt persoonlijk
                  opgehaald op de luchthaven, verblijft in een zorgvuldig
                  gekozen 4- of 5-sterrenhotel en beleeft de regio met een
                  kleine groep mensen met vergelijkbare behoeften en interesses.
                  Tegelijk ontmoet u lokale professionals en krijgt u alle
                  ruimte om uw vragen rechtstreeks aan hen te stellen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO QUICK VALUE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Voor kopers die serieus en gericht zoeken
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Een persoonlijke Buyer Discovery Trip voor wie een huis, villa of
              tweede woning aan de Costa Blanca Noord wil kopen.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Complimentary Area Match Rapport",
                "Shortlist van 4 tot 8 passende woningen",
                "Zelf uw favoriete bezichtigingen kiezen",
                "Optionele wildcard woning",
                "Privétransfer vanaf de luchthaven",
                "4- of 5-sterrenhotel in een passende omgeving",
                "Kleine zorgvuldig geselecteerde groep",
                "Lokale lifestyle-ervaringen op maat",
                "Moraira, Jávea, Dénia, Altea en Alicante",
                "Vall de Pop en het Spaanse achterland",
                "Kennismaking met onafhankelijke experts",
                "Persoonlijke aankoopbegeleiding Spanje",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              U bekijkt geen willekeurige huizen. Iedere selectie is gebaseerd
              op uw intake, budget, Area Match Rapport, woonwensen, interesses
              en toekomstplannen. Zo gebruikt u uw tijd in Spanje voor woningen
              en gebieden die daadwerkelijk kansrijk zijn.
            </p>
          </div>
        </section>

        {/* EERST LEREN WIJ U KENNEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Eerst leren wij u echt kennen
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Uw reis begint bij het leven dat u in Spanje wilt opbouwen, niet
              bij een lijst met woningadvertenties.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Tijdens de intake verdiepen we ons in uw doelen, budget,
                  gezinssituatie, verhuisplannen, gewenste levensstijl en
                  langetermijnprioriteiten. We vragen ook door op hobby's en
                  interesses, zoals golf, zeilen, gastronomie, natuur, wellness,
                  fietsen, cultuur of het internationale schoolleven.
                </p>

                <p className="mt-6">
                  Met de uitkomst van uw Area Match werken we via ons
                  betrouwbare lokale netwerk verder. We vergelijken regio's,
                  buurten, woningtypen en actuele mogelijkheden en stellen
                  vervolgens een shortlist van ongeveer 4 tot 8 woningen samen.
                  U bepaalt welke woningen u tijdens de Discovery Trip wilt
                  zien.
                </p>

                <p className="mt-6">
                  Daarnaast kunt u kiezen voor een wildcard: een woning die
                  buiten uw eerste zoekbeeld valt, maar die door de locatie,
                  omgeving, prijsstelling of indeling verrassend goed bij uw
                  toekomst kan passen. Zo houden we de zoektocht gericht, zonder
                  interessante mogelijkheden te vroeg uit te sluiten.
                </p>
              </div>

              <div className="rounded-[32px] bg-[#f6f1ea] p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Persoonlijk tot in de details
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  Zoekt u een rustige villa in Moraira, een levendig leven in
                  Jávea, voorzieningen en gastronomie in Dénia, elegantie rond
                  Altea, of juist rust en meer ruimte in de Vall de Pop? Wij
                  koppelen uw woonwensen aan het dagelijkse leven in iedere
                  regio.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  Uw hotel, route, activiteiten, ontmoetingen en
                  woningbezichtigingen worden zoveel mogelijk afgestemd op uw
                  profiel en op de samenstelling van de kleine groep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SELECTIEVE WONINGBEZICHTIGINGEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Uw shortlist vóór vertrek
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Kies uit 4 tot 8 zorgvuldig voorgeselecteerde woningen — met
              ruimte voor één verrassende wildcard.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="text-lg leading-relaxed text-stone-700">
                <p>
                  Ons netwerk van betrouwbare lokale makelaars, ontwikkelaars en
                  vastgoedcontacten helpt ons om verder te kijken dan één
                  woningaanbod. Op basis van uw Area Match Rapport, budget,
                  woonstijl, interesses en toekomstplannen selecteren we de
                  woningen die volgens ons het meest kansrijk zijn.
                </p>

                <p className="mt-6">
                  Voor de reis ontvangt u de shortlist met onze toelichting. U
                  kiest welke woningen u graag wilt bekijken. Wij plannen de
                  afspraken logisch in de route, zodat u niet onnodig heen en
                  weer rijdt en voldoende tijd houdt om de woning én de omgeving
                  goed te ervaren.
                </p>

                <p className="mt-6">
                  Tijdens iedere bezichtiging kijken we verder dan uitstraling
                  en foto's. We bespreken ligging, bereikbaarheid, privacy,
                  oriëntatie, onderhoud, buurtgevoel, voorzieningen,
                  verhuurpotentie en de vraag of de woning past bij het leven
                  dat u in Spanje wilt opbouwen.
                </p>
              </div>

              <div className="rounded-[32px] bg-white/80 p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Waarom een wildcard?
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  Soms blijkt de beste keuze niet de woning die u online als
                  eerste zou aanklikken. Een minder bekende ligging, een andere
                  indeling of een gebied met meer ruimte voor uw budget kan in
                  werkelijkheid veel beter voelen.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  De wildcard houdt ruimte voor zo'n onverwachte mogelijkheid,
                  terwijl de rest van uw programma volledig gericht blijft.
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
                Een kleine, zorgvuldig geselecteerde groep
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Beleef de regio met mensen die passen bij uw interesses,
                levensfase en toekomstplannen.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Wij koppelen deelnemers zorgvuldig aan elkaar. De groep blijft
                klein en persoonlijk en bestaat uit mensen die vergelijkbare
                regio's onderzoeken of een soortgelijke levensstijl aan de Costa
                Blanca zoeken.
              </p>

              <p className="mt-6">
                Misschien ontmoet u tijdens de reis uw toekomstige golfmaatje,
                lunchvriend, zeilpartner of een gezin met kinderen van ongeveer
                dezelfde leeftijd. Niets wordt geforceerd, maar gezamenlijke
                ervaringen maken het makkelijker om op een natuurlijke manier
                waardevolle contacten op te bouwen.
              </p>

              <p className="mt-6">
                U deelt geselecteerde lunches, activiteiten, lokale buurten en
                gesprekken, maar houdt altijd ruimte voor privacy. U verblijft
                in uw eigen kamer of suite in een zorgvuldig gekozen 4- of
                5-sterrenhotel en kunt zich terugtrekken wanneer u daar behoefte
                aan heeft.
              </p>
            </div>
          </div>
        </section>

        {/* AANKOMST */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vanaf uw aankomst persoonlijk geregeld
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight">
              Wij halen u op bij de luchthaven en zorgen voor verblijf, vervoer,
              planning en persoonlijke begeleiding.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-serif text-3xl">Persoonlijke transfer</h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  U wordt bij Alicante Airport of Valencia Airport opgehaald en
                  comfortabel vervoerd tijdens de geplande onderdelen van de
                  reis.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl">4- of 5-sterrenverblijf</h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  U verblijft in een zorgvuldig geselecteerd hotel, boutique
                  resort, luxe suite of finca in een omgeving die aansluit bij
                  uw Area Match en het programma.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl">
                  Direct toegang tot experts
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Tijdens de reis ontmoet u relevante professionals en kunt u uw
                  vragen rechtstreeks stellen over woningen, financiering,
                  techniek, juridische controles en de volgende stappen.
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
                Een persoonlijk 4-daags programma
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Vier dagen om woningen, regio's, experts en het dagelijks leven
                aan de Costa Blanca Noord echt te leren kennen.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Het exacte programma wordt afgestemd op uw Area Match,
                shortlist, interesses, de groep, het seizoen en de
                beschikbaarheid van woningen en professionals.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  day: "Dag 1",
                  title: "Aankomst en persoonlijk welkom",
                  text: "Luchthaventransfer, check-in, kennismaking, bespreking van uw Area Match, shortlist, gekozen bezichtigingen en het programma.",
                },
                {
                  day: "Dag 2",
                  title: "Regio's en geselecteerde woningen",
                  text: "Gerichte regiobezoeken, zorgvuldig geplande woningbezichtigingen en lokale plekken die passen bij uw dagelijkse wensen en toekomstplannen.",
                },
                {
                  day: "Dag 3",
                  title: "Lifestyle en wildcard",
                  text: "Meer bezichtigingen, eventueel uw wildcard en een persoonlijke ervaring zoals zeilen, golf, olijfolie proeven, gastronomie of een kookactiviteit.",
                },
                {
                  day: "Dag 4",
                  title: "Experts en vervolgstappen",
                  text: "Gesprekken met relevante onafhankelijke professionals, beantwoording van uw vragen en een helder plan voor eventuele aankoop en controles.",
                },
              ].map((item) => (
                <div
                  key={item.day}
                  className="rounded-[32px] bg-white p-8 shadow-sm"
                >
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
                Regio's aan de Costa Blanca Noord
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Van Alicante en Altea tot Moraira, Jávea, Dénia en de Vall de
                Pop: ontdek waar uw nieuwe leven het beste past.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                We laten u niet alleen toeristische highlights zien. U ontdekt
                woonwijken, dagelijkse voorzieningen, lokale gastronomie,
                natuur, clubs, scholen, reistijden en plekken waar bewoners zelf
                graag komen. Zo ervaart u hoe het dagelijkse leven werkelijk kan
                voelen.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                [
                  "Moraira en Benissa",
                  "Elegante kustplaatsen met villa's, baaien, restaurants, internationale bewoners, rust en een verfijnde residentiële sfeer.",
                ],
                [
                  "Jávea en Dénia",
                  "Een levendige levensstijl met stranden, havenleven, gastronomie, sportclubs, scholen en voorzieningen die het hele jaar actief blijven.",
                ],
                [
                  "Altea en Alicante",
                  "Cultuur, architectuur, stadsvoorzieningen, zeezicht en mediterrane verfijning, van sfeervolle oude centra tot moderne woongebieden.",
                ],
                [
                  "Calpe en de kustzone",
                  "Strand, jachthaven, appartementen, nieuwbouw, dagelijkse voorzieningen en goede verbindingen langs de noordelijke Costa Blanca.",
                ],
                [
                  "Vall de Pop",
                  "Het groene achterland met dorpen zoals Jalón/Xaló en Llíber, omringd door bergen, wijngaarden en amandelbomen — interessant voor wie rust, ruimte en authenticiteit zoekt.",
                ],
                [
                  "Niet-toeristische plekken",
                  "Lokale markten, verfijnde gastronomie, familiebedrijven, rustige dorpen en plekken die u online niet snel vindt, maar die het dagelijks leven bijzonder maken.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-[32px] bg-white p-8 shadow-sm"
                >
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    {title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-12 max-w-4xl text-lg leading-relaxed text-stone-600">
              Onze eigen liefde voor water, kustleven en watersport bracht ons
              naar deze regio, maar ook het minder bekende achterland heeft ons
              hart gestolen. In de Vall de Pop vindt u een ander ritme, meer
              rust en vaak meer ruimte voor uw budget dan in de bekendste
              kustplaatsen.
            </p>

            <a
              href="/regions"
              className="mt-8 inline-block rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Lees meer over de regio's
            </a>
          </div>
        </section>

        {/* PROFESSIONALS */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Ons betrouwbare netwerk in Spanje
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Ontmoet de mensen achter de schermen die uw plannen mogelijk
                helpen maken.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                Tijdens de Buyer Discovery Trip maakt u kennis met betrouwbare
                lokale en onafhankelijke professionals die passen bij uw
                situatie. Dat kan een vastgoedadvocaat, hypotheekadviseur,
                technische surveyor, aannemer, architect, verzekeringsspecialist
                of andere lokale expert zijn.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Onafhankelijke vastgoedadvocaat",
                  "Hypotheekadviseur of hypotheekspecialist",
                  "Technische surveyor of bouwkundig inspecteur",
                  "Aannemer, architect of renovatiespecialist",
                  "Bank- en verzekeringscontact",
                  "Lokale vastgoed- en regioprofessional",
                  "Belasting- of verhuisadviseur waar relevant",
                  "Interieur- en lokale uitvoeringspartners",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                U kunt tijdens de reis rechtstreeks vragen stellen over
                financiering, juridische controles, renovatie, techniek,
                aankoopkosten, verzekeringen en praktische vervolgstappen. Waar
                u behoefte aan heeft, daar zoeken wij binnen ons netwerk de
                passende professional bij.
              </p>
            </div>
          </div>
        </section>

        {/* LEVENSSTIJL */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ervaar uw mogelijke nieuwe levensstijl
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Niet alleen woningen bekijken, maar ontdekken hoe uw dagelijks
              leven aan de Costa Blanca kan voelen.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              Op basis van uw intake en interesses voegen we passende ervaringen
              toe. Denkt u aan wonen in de Vall de Pop, dan kan dat bijvoorbeeld
              een olijfolieproeverij, lokale markt, wijngaard of pasta- en
              kookactiviteit zijn. Past het kustleven beter bij u, dan kan een
              zeiltocht, marina-bezoek, golfervaring of lunch aan het water meer
              zeggen dan nog een extra woningadvertentie.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Lokale en verfijnde gastronomie",
                "Olijfolie- of wijnproeverij",
                "Pasta maken of kookworkshop",
                "Zeiltocht of marina-bezoek",
                "Golfclub of golfervaring",
                "Lokale markten en familiebedrijven",
                "Natuur, wandelen en het achterland",
                "Niet-toeristische buurten en dorpen",
                "Wellness en ontspannen kustleven",
                "Scholen, clubs en community",
                "Ontmoetingen met lokale bewoners",
                "Eigen privacy- en rustmomenten",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium text-[#1e2a3a]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              De activiteiten zijn geen vast toeristisch programma. We stemmen
              ze zoveel mogelijk af op de deelnemers, zodat u de omgeving
              ontdekt vanuit uw eigen interesses en mogelijke toekomstige leven.
            </p>
          </div>
        </section>

        {/* PURCHASE SAFETY */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-12 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Wordt u verliefd op een woning? Neem dan niet te snel een
                  besluit.
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight">
                  Twee onafhankelijke beoordelingen vóór ons aankoopadvies.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/80">
                  Wanneer een woning serieus wordt, coördineren we een
                  technische aankoopinspectie door een onafhankelijke surveyor
                  en juridische due diligence door een passende onafhankelijke
                  advocaat. Zo wordt uw beslissing niet alleen gebaseerd op
                  gevoel, foto's of een bezichtiging.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Beide professionals blijven verantwoordelijk voor hun eigen
                  onderzoek en rapportage. Nordic Move bewaakt de coördinatie,
                  brengt de belangrijkste bevindingen samen en geeft op basis
                  daarvan een duidelijk vervolgstappenadvies: doorgaan,
                  heroverwegen of niet kopen.
                </p>

                <a
                  href="/services/purchase-safety-report"
                  className="mt-9 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Ontdek Purchase Safety
                </a>
              </div>

              <div className="bg-white p-10 text-stone-900 lg:p-16">
                <h3 className="font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Wat wordt er beoordeeld?
                </h3>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                    <h4 className="font-serif text-2xl text-[#1e2a3a]">
                      Technische inspectie
                    </h4>
                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-stone-600">
                      <li>• Zichtbare en toegankelijke bouwkundige staat</li>
                      <li>• Vocht, waterindringing en zichtbare gebreken</li>
                      <li>
                        • Dak, gevels, terrassen en bijgebouwen waar
                        toegankelijk
                      </li>
                      <li>• Zichtbare installaties, zwembad en terrein</li>
                      <li>
                        • Indicatie van herstelpunten en aanvullend onderzoek
                      </li>
                      <li>
                        • Vergelijking van de woning met beschikbare informatie
                        waar mogelijk
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                    <h4 className="font-serif text-2xl text-[#1e2a3a]">
                      Juridische due diligence
                    </h4>
                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-stone-600">
                      <li>• Eigendom en bevoegdheid van de verkoper</li>
                      <li>• Lasten, schulden en relevante registraties</li>
                      <li>
                        • Vergunningen en juridische status waar van toepassing
                      </li>
                      <li>• Reserverings-, koop- en overdrachtsvoorwaarden</li>
                      <li>• Juridische risico's en benodigde voorwaarden</li>
                      <li>
                        • Begeleiding richting een verantwoorde overdracht
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mt-8 text-sm leading-relaxed text-stone-500">
                  Geen enkele inspectie kan absolute zekerheid garanderen.
                  Aanvullend specialistisch onderzoek kan nodig zijn en wordt
                  afzonderlijk besproken.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WAT WIJ DOEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Eén vast aanspreekpunt
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Wij verbinden uw Area Match, woningselectie, reis, experts en
                vervolgstappen in één helder traject.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Nordic Move coördineert de intake, het Area Match Rapport, uw
                shortlist, de groepssamenstelling, accommodatie, transfers,
                regio tours, woningbezichtigingen, lokale ervaringen en de
                kennismakingen met onafhankelijke professionals.
              </p>

              <p className="mt-6">
                Wij helpen u regio's en woningen te vergelijken, de juiste
                vragen te stellen en belangrijke technische, juridische,
                financiële en praktische onderwerpen op tijd zichtbaar te maken.
              </p>

              <p className="mt-6">
                Onze rol is niet om u zo snel mogelijk een woning te laten
                kopen. Onze rol is om u snel tot een beter onderbouwde
                beslissing te brengen — ook wanneer de juiste conclusie is om
                niet door te gaan.
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
              Alles wat u nodig heeft voor een gerichte eerste beslissing over
              wonen en kopen aan de Costa Blanca Noord.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Persoonlijk intakegesprek vóór aankomst",
                "Complimentary Area Match Rapport",
                "Analyse van wensen, budget, hobby's en toekomstplannen",
                "Shortlist van doorgaans 4 tot 8 woningen",
                "Uw keuze van de gewenste bezichtigingen",
                "Optionele wildcard woning",
                "Kleine zorgvuldig geselecteerde groepssamenstelling",
                "Volledig georganiseerd 4-daags programma",
                "Persoonlijke luchthavenpickup en geplande transfers",
                "4- of 5-sterrenhotel, luxe suite, resort of finca",
                "Regio tours van de kust tot de Vall de Pop",
                "Gerichte individuele woningbezichtigingen",
                "Gepersonaliseerde lifestyle-ervaringen",
                "Lokale en niet-toeristische plekken",
                "Kennismaking met advocaat en hypotheekadviseur",
                "Kennismaking met technische en uitvoerende experts waar relevant",
                "Tijd om uw vragen rechtstreeks aan experts te stellen",
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
                <div
                  key={item}
                  className="rounded-[28px] bg-white p-7 shadow-sm"
                >
                  <p className="text-lg leading-relaxed text-stone-600">
                    {item}
                  </p>
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
              Veelgestelde vragen over de Buyer Discovery Trip en een huis kopen
              aan de Costa Blanca Noord.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  question:
                    "Hoe worden de woningen voor mijn trip geselecteerd?",
                  answer:
                    "Uw Area Match Rapport, intake, budget, woonwensen, interesses en toekomstplannen vormen de basis. Via ons lokale netwerk maken we doorgaans een shortlist van 4 tot 8 passende woningen.",
                },
                {
                  question: "Mag ik zelf kiezen welke woningen ik bekijk?",
                  answer:
                    "Ja. U ontvangt de shortlist vóór vertrek en kiest welke woningen u tijdens de trip graag wilt zien. Wij organiseren vervolgens de afspraken en een logische route.",
                },
                {
                  question: "Wat is een wildcard woning?",
                  answer:
                    "Een wildcard is een woning die buiten uw eerste zoekbeeld valt, maar door ligging, omgeving, prijs, ruimte of indeling verrassend goed bij uw profiel kan passen. Deze is altijd optioneel.",
                },
                {
                  question: "Waar verblijf ik tijdens de reis?",
                  answer:
                    "U verblijft in een zorgvuldig gekozen 4- of 5-sterrenhotel, boutique resort, luxe suite of finca in een omgeving die aansluit bij uw Area Match en het programma.",
                },
                {
                  question: "Ontmoet ik ook professionals tijdens de reis?",
                  answer:
                    "Ja. Afhankelijk van uw behoeften kunt u kennismaken met onder meer een onafhankelijke vastgoedadvocaat, hypotheekadviseur, technische surveyor, aannemer, architect en andere lokale specialisten. U kunt uw vragen rechtstreeks aan hen stellen.",
                },
                {
                  question: "Is de trip een standaard groepsreis?",
                  answer:
                    "Nee. De groep is klein en zorgvuldig samengesteld rond vergelijkbare behoeften, interesses en levensfasen. Het programma bevat gezamenlijke momenten, maar ook voldoende privacy en individuele woningbezichtigingen.",
                },
                {
                  question:
                    "Wat gebeurt er als ik verliefd word op een woning?",
                  answer:
                    "We helpen u voorkomen dat u te snel beslist. Voor een serieus aankoopadvies coördineren we een onafhankelijke technische inspectie en juridische due diligence door een passende advocaat.",
                },
                {
                  question: "Welke regio's kan ik ontdekken?",
                  answer:
                    "Afhankelijk van uw profiel verkennen we gebieden van Alicante, Altea, Calpe en Moraira tot Jávea, Dénia, Benissa en het achterland van de Vall de Pop.",
                },
              ].map((item) => (
                <div
                  key={item.question}
                  className="rounded-[28px] bg-[#f6f1ea] p-7"
                >
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
              Vraag uw persoonlijke Buyer Discovery Trip aan
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
              Van Area Match en shortlist tot regio-ervaring, experts en een
              beter onderbouwde aankoopbeslissing.
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
              Ontdek niet alleen welke woning u mooi vindt, maar welke omgeving,
              levensstijl en mensen werkelijk bij uw toekomst in Spanje passen.
            </p>

            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
              U houdt één vast aanspreekpunt. Wij coördineren de reis, de juiste
              woningen, lokale ervaringen en de professionals die u nodig heeft.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Vraag uw Buyer Discovery Trip aan
            </a>
          </div>
        </section>
      </main>
    </>
  );
}