export const metadata = {
  title:
    "4-dagars Buyer Discovery Trip Costa Blanca Norra | Köpa hus i Spanien",
  description:
    "4-dagars Buyer Discovery Trip på Costa Blanca Norra för dig som vill köpa hus i Spanien. Med privatchaufför, 5-stjärnigt boende, Area Match-rapport, utvalda individuella bostadsvisningar, områdesturer, livsstilsupplevelser och trygg köprådgivning.",
  keywords: [
    "4-dagars Buyer Discovery Trip Costa Blanca Norra",
    "Buyer Discovery Trip Spanien",
    "köpa hus i Spanien",
    "köpa bostad i Spanien",
    "köpa hus Costa Blanca Norra",
    "köpa bostad Costa Blanca Norra",
    "köpa fastighet Spanien",
    "visningsresa Spanien",
    "bostadsvisningar Spanien",
    "individuella bostadsvisningar Spanien",
    "bostadsvisningar Costa Blanca Norra",
    "utvalda visningar Spanien",
    "Area Match Rapport Spanien",
    "köprådgivning Spanien",
    "svensk köprådgivning Spanien",
    "köpa semesterbostad Spanien",
    "flytta till Spanien",
    "köpa hus Moraira",
    "köpa villa Moraira",
    "köpa hus Jávea",
    "köpa villa Jávea",
    "köpa hus Altea",
    "köpa hus Benissa",
    "köpa lägenhet Calpe",
    "köpa bostad Dénia",
    "tryggt köpa hus i Spanien",
  ],
  alternates: {
    canonical: "/sv/buyer-discovery-trip-costa-blanca-norra",
  },
  openGraph: {
    title:
      "4-dagars Buyer Discovery Trip Costa Blanca Norra | Köpa hus i Spanien",
    description:
      "Upptäck på 4 dagar var du bäst kan köpa bostad på Costa Blanca Norra. Med privatchaufför, 5-stjärnigt boende, Area Match-rapport, utvalda bostadsvisningar, experter, områdesturer och likasinnade köpare.",
    type: "website",
    locale: "sv_SE",
    images: [
      {
        url: "/images/discover-card.png",
        width: 1200,
        height: 630,
        alt: "4-dagars Buyer Discovery Trip Costa Blanca Norra för att köpa hus i Spanien",
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
  name: "4-dagars Buyer Discovery Trip Costa Blanca Norra",
  description:
    "En helt organiserad 4-dagars bostads- och livsstilsresa för internationella köpare som vill köpa hus, villa, lägenhet eller semesterbostad på Costa Blanca Norra i Spanien, inklusive intake, Area Match-rapport och utvalda individuella bostadsvisningar.",
  touristType: [
    "Svenska köpare",
    "Skandinaviska köpare",
    "Internationella köpare",
    "Köpare av semesterbostad",
    "Köpare som vill flytta till Spanien",
  ],
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Dag 1: Ankomst, privat transfer, intake och välkomstmoment",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dag 2: Områdestur Moraira, Benissa och Calpe med utvalda bostadsvisningar och livsstilsupplevelser",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dag 3: Jávea och Dénia med individuella bostadsvisningar, lunch och lokala aktiviteter",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Dag 4: Altea, experter, köpprocess och nästa steg",
      },
    ],
  },
  areaServed: [
    "Costa Blanca Norra",
    "Costa Blanca North",
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
            alt="4-dagars Buyer Discovery Trip Costa Blanca Norra för dig som vill köpa hus i Spanien"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                4-dagars Buyer Discovery Trip Costa Blanca Norra
              </p>

              <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
                Köpa hus i Spanien? Upptäck på 4 dagar var du verkligen vill bo
                på Costa Blanca Norra.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                En helt organiserad bostads- och livsstilsresa med
                privatchaufför, noggrant matchade likasinnade köpare,
                5-stjärnigt boende, Area Match-rapport, områdesturer, utvalda
                individuella bostadsvisningar och möten med de specialister som
                gör ett tryggt köp i Spanien möjligt.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Ansök om din 4-dagars Buyer Discovery Trip
                </a>

                <a
                  href="/regions"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
                >
                  Utforska områdena
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUKTION */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Tydlighet innan du köper
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Att köpa bostad i Spanien börjar inte med slumpmässiga
                  visningar, utan med att hitta rätt område.
                </h2>
              </div>

              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Den som vill köpa hus på Costa Blanca Norra behöver se längre
                  än vackra bilder, mäklartexter och enstaka bostadsvisningar.
                  Du vill känna in rätt område, men också se bostäder som
                  faktiskt passar din budget, familjesituation, dina önskemål,
                  din Area Match-rapport och den livsstil du vill skapa i
                  Spanien.
                </p>

                <p className="mt-6">
                  Vår Buyer Discovery Trip är en noggrant sammansatt 4-dagars
                  bostads- och livsstilsupplevelse på Costa Blanca Norra. Resan
                  är utvecklad för svenska, skandinaviska och internationella
                  köpare som vill köpa hus, villa, lägenhet, nyproduktion eller
                  semesterbostad i Spanien med mer trygghet, bättre information
                  och mindre risk.
                </p>

                <p className="mt-6">
                  Det här är ingen vanlig visningsresa där du körs från bostad
                  till bostad utan tydlig strategi. Det är en helt organiserad
                  gruppresa med likasinnade människor, privatchaufför,
                  individuella pauser, utvalda bostadsvisningar, lokala
                  livsstilsupplevelser och direkta möten med de experter du
                  behöver för att kunna köpa fastighet i Spanien på ett tryggt
                  och genomtänkt sätt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO QUICK VALUE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              För köpare som söker på allvar
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Den 4-dagars upptäcktsresan för dig som vill köpa hus på Costa
              Blanca Norra.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Köpa hus i Spanien",
                "Köpa bostad Costa Blanca Norra",
                "Semesterbostad i Spanien",
                "Köpa fastighet med rådgivning",
                "Utvalda bostadsvisningar",
                "Area Match-rapport för köpare",
                "Köpa villa i Moraira eller Jávea",
                "Köpa lägenhet i Calpe eller Dénia",
                "Förstå köpprocessen i Spanien",
                "Träffa likasinnade köpare",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              Du får en realistisk bild av området och av bostäder som är
              noggrant förvalda utifrån din intake, budget, Area Match-rapport,
              bostadsönskemål och livsstil. Du ser alltså inte bara hus. Du ser
              bostäder som passar den plats där du senare faktiskt vill leva.
            </p>
          </div>
        </section>

        {/* FÖRST LÄR VI KÄNNA DIG */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Först lär vi känna dig
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Resan börjar med din livsstil, inte med bostadsannonser.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Före ankomst börjar vi med din kostnadsfria Area Match-rapport
                  och ett personligt intake-samtal. Vi går igenom dina mål,
                  budget, familjesituation, vardagsrutiner, intressen, önskad
                  livsstil, flyttplaner, trygghetsbehov och långsiktiga
                  prioriteringar.
                </p>

                <p className="mt-6">
                  Först när vi förstår din profil skapar vi ditt program. På så
                  sätt fokuserar vi på de områden och bostäder som verkligen
                  passar ditt liv, i stället för att lägga tid på platser som ser
                  attraktiva ut online men inte fungerar i praktiken.
                </p>

                <p className="mt-6">
                  Intaken hjälper oss också att avgöra vilka lokala experter,
                  internationella boende, entreprenörer eller andra köpare som
                  kan vara relevanta för dig. När det passar förbereder vi dessa
                  introduktioner i förväg, så att varje möte har ett tydligt
                  syfte.
                </p>
              </div>

              <div className="rounded-[32px] bg-[#f6f1ea] p-8">
                <p className="text-lg leading-relaxed text-stone-700">
                  Söker du en lugn villa nära Moraira? Ett mer socialt liv i
                  Jávea? En elegant miljö nära Altea? Mer utrymme och
                  autenticitet runt Benissa? Lägenheter vid havet och
                  nyproduktion i Calpe? Eller en levande stad med service året
                  runt, som Dénia?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* UTVALDA BOSTADSVISNINGAR */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Utvalda individuella bostadsvisningar
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Se bostäder som passar din intake, ditt område och den livsstil
                du vill ha.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                Under de fyra dagarna får du inte bara uppleva områdena. Du får
                också möjlighet att se ett noggrant urval av bostäder som passar
                din personliga profil. Dessa visningar väljs inte slumpmässigt,
                utan utifrån din intake, Area Match-rapport, budget,
                familjesituation, önskad omgivning, bostadstyp och livsstil.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Det kan handla om en villa i Moraira, ett hus med havsutsikt i
                Jávea, ett elegant hem nära Altea, en finca eller rymlig bostad i
                Benissa, en lägenhet eller nyproduktion i Calpe eller en bostad
                i Dénia för dig som vill ha mer stadsliv och service året runt.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Målet är inte att visa så många objekt som möjligt. Målet är att
                visa rätt objekt. Du ska kunna jämföra känsla, läge,
                byggkvalitet, tillgänglighet, framtida värde, praktiska risker
                och vardagslivet runt bostaden innan du tar nästa steg.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Bostäder matchade med din intake",
                  "Urval baserat på Area Match-rapporten",
                  "Visningar kopplade till rätt område",
                  "Fokus på budget och långsiktig lämplighet",
                  "Jämförelse av bostadstyper och lägen",
                  "Ärlig rådgivning om risker och möjligheter",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                På så sätt går du från att bara söka online till att förstå vilka
                bostäder som verkligen passar dig. Det gör köpresan tryggare,
                mer effektiv och mycket mer realistisk.
              </p>
            </div>
          </div>
        </section>

        {/* LIKASINNADE MÄNNISKOR */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Res med likasinnade människor
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Träffa människor som befinner sig i samma fas som du.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Buyer Discovery Trip organiseras som en noggrant sammansatt
                liten gruppresa. Du reser tillsammans med människor som matchar
                dina intressen, din livsfas och dina planer för Spanien.
              </p>

              <p className="mt-6">
                Vi sammanför dig med köpare som har liknande mål, tempo,
                livsstil och förväntningar. Vissa grupper är mer
                internationella. Andra grupper samlar svenska, skandinaviska
                eller nordeuropeiska köpare som vill känna igen sig kulturellt
                och språkligt.
              </p>

              <p className="mt-6">
                Vi hjälper svenska, danska, norska, nederländska, belgiska,
                tyska, schweiziska, brittiska och andra internationella köpare
                som undersöker en framtid på Costa Blanca Norra.
              </p>

              <p className="mt-6">
                För många blir just mötena med andra deltagare en av resans mest
                värdefulla delar. En gemensam lunch, en lokal aktivitet eller
                ett ärligt samtal kan bli början på nya vänskaper, användbara
                kontakter och en starkare känsla av trygghet innan du ens har
                flyttat till Spanien.
              </p>
            </div>
          </div>
        </section>

        {/* ANKOMST */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Från ankomst är allt ordnat
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight">
              Du anländer, vi tar hand om detaljerna.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-serif text-3xl">Privat flygplatstransfer</h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Du anländer till Alicante flygplats, där din privata transfer
                  tar dig bekvämt vidare till ditt hotell, resort eller finca.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl">
                  Eget 5-stjärnigt boende
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Du bor i ett noggrant utvalt 5-stjärnigt hotell, en lyxig
                  suite, boutique resort eller finca. När du vill ha lugn kan du
                  dra dig tillbaka till din egen privata miljö.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl">Personligt välkomnande</h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Under ett avslappnat välkomstmoment går vi igenom dina mål,
                  besvarar dina första frågor och förklarar programmet för de
                  kommande fyra dagarna.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ÄKTA OMRÅDEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Upptäck det verkliga Costa Blanca Norra
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Vi visar mer än de mest kända turistområdena.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Under Buyer Discovery Trip upplever du områdena ur ett
                vardagsperspektiv. Vi besöker platser som spelar roll för din
                framtida livsstil, inte bara de platser som ser bra ut i en
                broschyr.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Moraira</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Lugn och elegant kustlivsstil med villor, vikar och en
                  exklusiv men avslappnad bostadsmiljö.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Jávea</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  En levande internationell livsstil med stränder, restauranger,
                  sport, skolor och aktivitet året runt.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Altea</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Kultur, skönhet, havsutsikt och medelhavskänsla i en mer
                  konstnärlig och sofistikerad miljö.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Benissa</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Utrymme, integritet, autenticitet, lantligt boende och dolda
                  vikar längs kusten.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Calpe</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Strandnära boende, hamnliv, lägenheter, nyproduktion och en
                  mer aktiv atmosfär.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Dénia</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Gastronomi, hamn, daglig service och en livlig stad som
                  fungerar mycket bra året runt.
                </p>
              </div>
            </div>

            <p className="mt-12 max-w-4xl text-lg leading-relaxed text-stone-600">
              Vi hjälper dig att förstå skillnaderna mellan områdena:
              atmosfär, bostadstyper, skolor, vård, köravstånd,
              internationellt community, restauranger, sportmöjligheter,
              daglig service, uthyrningspotential, byggkvalitet och långsiktig
              praktisk lämplighet.
            </p>
          </div>
        </section>

        {/* EXPERTER */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Möt experterna du behöver innan köp
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Få svar innan du fattar stora beslut.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                Under din Buyer Discovery Trip introducerar vi dig till
                betrodda oberoende specialister och lokala kontakter som hjälper
                dig att förstå de praktiska, juridiska och finansiella stegen
                innan du köper bostad i Spanien.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Oberoende fastighetsadvokat",
                  "Spansk notarie",
                  "Hypoteksspecialist",
                  "Bankkontakt",
                  "Försäkringsspecialist",
                  "Byggnadsteknisk rådgivare",
                  "Lokal fastighetsexpert",
                  "Relocation-stöd där det är relevant",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Dessa möten är utformade för att ge dig större säkerhet kring
                den juridiska processen, bolånemöjligheter, bankkrav,
                försäkringar, köpkostnader, årliga ägarkostnader, dokumentation,
                byggtekniska kontroller och vanliga misstag som internationella
                köpare bör undvika.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Du kan ställa dina frågor direkt, förstå vem som ansvarar för
                vad och lämna resan med en mycket tydligare bild av hur ett
                säkert bostadsköp i Spanien faktiskt går till.
              </p>
            </div>
          </div>
        </section>

        {/* SÄKERHET */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Mer trygghet i varje steg
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              För svenska köpare handlar ett köp i Spanien inte bara om känsla,
              utan också om säkerhet, kontroll och rätt rådgivning.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Tydligare bild av juridiska steg",
                "Förståelse för skatter och köpkostnader",
                "Introduktion till oberoende advokat",
                "Möjlighet att diskutera byggtekniska frågor",
                "Information om finansiering och bankkrav",
                "Bättre kontroll över risker innan köp",
                "Ärlig rådgivning om områden och bostadstyper",
                "Stöd inför nästa steg efter resan",
                "Tryggare beslut innan du går vidare",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/80 p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              Vi lovar inte att varje bostad är rätt. Tvärtom hjälper vi dig att
              se vad som passar, vad som inte passar och vilka frågor som måste
              kontrolleras innan du gör ett bud. Det är precis där tryggheten
              uppstår.
            </p>
          </div>
        </section>

        {/* LIVSSTIL */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Upplev livsstilen, inte bara bostadsmarknaden
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              En bostad är bara en del av beslutet.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              Du vill också förstå hur ditt liv kan kännas här. Därför innehåller
              Buyer Discovery Trip livsstilsupplevelser som passar dina
              intressen och det område du utforskar.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Lokala luncher och fine dining",
                "Vinprovningar",
                "Golfklubbar och golf tour",
                "Beach clubs",
                "Marinor och yacht clubs",
                "Wellness och spa",
                "Vandrings- och naturleder",
                "Kulturella besök",
                "Matlagningsworkshop eller pasta making",
                "Affärs- eller nätverksintroduktioner",
                "Lokala möten",
                "Aktiviteter med likasinnade framtida boende",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium text-[#1e2a3a]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              Vill du delta i gemensamma luncher, upptäcka kvarteren och känna
              hur livet faktiskt är? Då följer du med gruppen. Vill du ha en
              stunds lugn och integritet? Då kan du dra dig tillbaka till ditt
              eget 5-stjärniga hotell, din suite eller finca utan att resan
              förlorar sin struktur.
            </p>
          </div>
        </section>

        {/* VAD VI GÖR */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Vad vi gör för dig
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Vi guidar, samordnar och hjälper dig att fatta ett bättre beslut.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Vi samordnar hela upplevelsen, guidar dig genom de olika
                områdena, väljer relevanta bostadsvisningar och introducerar dig
                till betrodda oberoende specialister. På så sätt kan du fatta
                mer genomtänkta beslut innan du köper fastighet i Spanien.
              </p>

              <p className="mt-6">
                Vi hjälper dig att jämföra områden, förstå praktiska skillnader,
                ställa rätt frågor, bedöma bostäder mer nyktert och undvika
                vanliga misstag.
              </p>

              <p className="mt-6">
                Vår roll är inte att pressa dig in i ett köp. Vår roll är att
                hjälpa dig att välja rätt område, rätt bostadstyp och rätt nästa
                steg.
              </p>

              <p className="mt-6">
                Om ett område inte passar din profil säger vi det. Om en bostad
                eller bostadstyp kan skapa juridiska, praktiska, byggtekniska
                eller livsstilsmässiga problem hjälper vi dig att förstå det
                innan du binder dig.
              </p>
            </div>
          </div>
        </section>

        {/* INKLUDERAT */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vad ingår
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Din 4-dagars Buyer Discovery Trip innehåller det du behöver för ett
              tydligare och tryggare första beslut.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Kostnadsfritt personligt intake-samtal före ankomst",
                "Personlig livsstils- och områdesprofil",
                "Area Match-rapport för Costa Blanca Norra",
                "Helt organiserat 4-dagars program",
                "Privatchaufför och transfer från Alicante",
                "Boende i utvalt 5-stjärnigt hotell, resort, suite eller finca",
                "Guidade områdesbesök på Costa Blanca Norra",
                "Utvalda individuella bostadsvisningar",
                "Bostäder matchade med budget, område och livsstil",
                "Introduktioner till juridiska, bank-, bolåne- och försäkringskontakter",
                "Möte med byggnadsteknisk rådgivare där det är relevant",
                "Livsstilsupplevelser anpassade efter dina intressen",
                "Noggrant matchad liten grupp med likasinnade köpare",
                "Tid för personliga frågor och beslutsstöd",
                "Tydliga nästa steg efter resan",
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

        {/* EFTER RESAN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Vad du vet efter resan
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Du lämnar inte med vaga intryck, utan med tydlighet.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Vilka områden på Costa Blanca Norra som passar din livsstil",
                "Vilka områden som är mindre lämpliga för dig",
                "Vilken bostadstyp som passar din budget och dina mål",
                "Vilka bostäder som känns realistiska efter riktiga visningar",
                "Hur köpprocessen i Spanien fungerar",
                "Vilka juridiska och finansiella frågor som behöver kontrolleras",
                "Hur vardagen efter köpet skulle kunna se ut",
                "Vilka experter som kan stötta dig",
                "Vilken typ av community du kan bli en del av",
                "Om du är redo för nästa steg",
              ].map((item) => (
                <div key={item} className="rounded-[28px] bg-white p-7 shadow-sm">
                  <p className="text-lg leading-relaxed text-stone-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FÖR VEM */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Passar den här resan dig?
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Perfekt för seriösa köpare som vill förstå Costa Blanca Norra innan
              de väljer bostad.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Svenska och skandinaviska köpare som undersöker Costa Blanca Norra",
                "Internationella köpare som vill köpa bostad i Spanien",
                "Familjer som överväger att flytta till Spanien",
                "Pensionärer som planerar en ny livsstil",
                "Entreprenörer och personer som arbetar på distans",
                "Köpare av semesterbostad eller andra hem",
                "Köpare som jämför Moraira, Jávea, Altea, Benissa, Calpe och Dénia",
                "Kunder som vill ha trygg rådgivning innan seriösa visningar börjar",
                "Personer som vill träffa likasinnade framtida boende före flytt",
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
              Köpa hus, villa eller lägenhet i Spanien
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              En tryggare väg för dig som vill köpa bostad på Costa Blanca Norra.
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
              <p>
                Många svenska köpare börjar med att söka efter "köpa hus i
                Spanien", "villa till salu Moraira", "lägenhet Calpe", "bostad
                Jávea" eller "semesterbostad Costa Blanca". Det är en naturlig
                start, men det ger sällan tillräcklig klarhet för ett tryggt
                köpbeslut.
              </p>

              <p>
                Vår 4-dagars Buyer Discovery Trip hjälper dig att gå från
                sökningar och drömbilder till en konkret förståelse av områden,
                bostäder, juridik, finansiering, vardagsliv och risker. Du får se
                utvalda bostäder, uppleva områdena och prata med specialister
                innan du bestämmer dig för hur du vill gå vidare.
              </p>

              <p>
                Resan är särskilt relevant för dig som funderar på att köpa hus i
                Moraira, villa i Jávea, bostad i Altea, finca i Benissa,
                lägenhet i Calpe eller hem i Dénia. Varje plats har sin egen
                känsla, sina praktiska fördelar och sina begränsningar. Vi hjälper
                dig att se skillnaden innan du köper.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Vanliga frågor
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Frågor om att köpa bostad i Spanien och vår Buyer Discovery Trip.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question:
                    "Är Buyer Discovery Trip en vanlig visningsresa i Spanien?",
                  answer:
                    "Nej. Det är en 4-dagars bostads- och livsstilsresa där du både upplever områdena, träffar relevanta experter och ser noggrant utvalda bostäder som passar din intake, Area Match-rapport, budget och livsstil.",
                },
                {
                  question: "Får jag se bostäder under resan?",
                  answer:
                    "Ja. Du får se ett selektivt urval av bostäder som matchar dina behov, önskat område, budget och framtida livsstil. Fokus ligger på kvalitet och relevans, inte på att visa så många objekt som möjligt.",
                },
                {
                  question: "Är resan privat eller i grupp?",
                  answer:
                    "Resan organiseras som en noggrant sammansatt liten gruppresa med likasinnade köpare. Du har din egen integritet, ditt eget boende och individuella pauser, men själva upplevelsen är byggd kring en matchad grupp.",
                },
                {
                  question: "Vilka områden besöker vi på Costa Blanca Norra?",
                  answer:
                    "Beroende på din profil kan programmet omfatta Moraira, Jávea, Altea, Benissa, Calpe, Dénia och relevanta omgivande områden.",
                },
                {
                  question: "Är resan lämplig för svenska köpare?",
                  answer:
                    "Ja. Resan är mycket relevant för svenska och skandinaviska köpare som vill köpa bostad i Spanien men först vill förstå område, process, trygghet, kostnader och risker.",
                },
                {
                  question: "Hjälper ni även med juridik och finansiering?",
                  answer:
                    "Vi introducerar dig till oberoende advokat, hypoteksspecialist, bankkontakt, försäkringsspecialist och vid behov byggnadsteknisk rådgivare, så att du kan få rätt frågor besvarade innan köp.",
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
              Ansök om din Buyer Discovery Trip
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
              När du seriöst överväger att köpa bostad i Spanien är det viktigaste
              beslutet inte bara huset.
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
              Det handlar om rätt område, rätt livsstil, rätt bostad och rätt
              trygghet runt dig.
            </p>

            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
              Ansök om din 4-dagars Buyer Discovery Trip och upptäck om Costa
              Blanca Norra verkligen passar din framtid i Spanien.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Ansök om din 4-dagars Buyer Discovery Trip
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
