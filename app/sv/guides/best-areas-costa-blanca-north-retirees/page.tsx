export const metadata = {
  title:
    "Guide för pensionärer Costa Blanca Nord | Pension & bostadsköp i Spanien",
  description:
    "Jämför Dénia, Moraira, Jávea, Altea, Benissa och Calpe för pensionen eller köp av ett andra hem i Spanien. Praktisk guide för svenska, norska, tyska, nederländska och internationella köpare.",
  keywords: [
    "pension Costa Blanca Nord",
    "pensionär Spanien Costa Blanca",
    "flytta till Spanien som pensionär",
    "köpa hus i Spanien som pensionär",
    "köpa bostad Costa Blanca Nord",
    "köpa andra hem i Spanien",
    "bästa platserna Costa Blanca Nord pensionärer",
    "Dénia pension",
    "Moraira pension",
    "Jávea pension",
    "Altea pension",
    "Benissa pension",
    "Calpe pension",
    "köpa villa Moraira",
    "köpa lägenhet Calpe",
    "köpa hus Dénia",
    "köpa bostad tryggt i Spanien",
    "Area Match Costa Blanca Nord",
  ],
  alternates: {
    canonical: "/sv/retiree-area-guide-costa-blanca-nord",
  },
  openGraph: {
    title:
      "Guide för pensionärer Costa Blanca Nord | Pension & bostadsköp i Spanien",
    description:
      "Vilket område passar egentligen för din pension i Spanien? Jämför Dénia, Moraira, Jávea, Altea, Benissa och Calpe utifrån vardag, vård, trygghet, mobilitet, gemenskap och bostadstyp.",
    type: "article",
    locale: "sv_SE",
    images: [
      {
        url: "/images/discover-card.png",
        width: 1200,
        height: 630,
        alt: "Guide för pensionärer som vill köpa bostad på Costa Blanca Nord",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const retireeGuideStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "De bästa platserna på Costa Blanca Nord för pensionärer och köpare av ett andra hem",
  description:
    "En praktisk guide för svenska, norska, tyska, nederländska och internationella köpare som vill jämföra Dénia, Moraira, Jávea, Altea, Benissa och Calpe inför pensionen eller ett bostadsköp i Spanien.",
  inLanguage: "sv-SE",
  about: [
    "Pension i Spanien",
    "Köpa bostad Costa Blanca Nord",
    "Andra hem i Spanien",
    "Area Match Costa Blanca Nord",
  ],
  areaServed: [
    "Costa Blanca Nord",
    "Dénia",
    "Moraira",
    "Jávea",
    "Altea",
    "Benissa",
    "Calpe",
  ],
};

const quickAreas = [
  {
    title: "Bästa helhetsvalet för vardagen",
    area: "Dénia",
    text:
      "För pensionärer som söker fungerande service året runt, restauranger, vård, stränder, hamnliv och en riktig stad med ett aktivt vardagsliv.",
    check:
      "Kontrollera noggrant: Läget är avgörande. Strandområden, centrum och bostadsområden känns olika. Parkering, trafik och byggnadsålder varierar mycket.",
  },
  {
    title: "Bäst för lugnt villaliv",
    area: "Moraira",
    text:
      "För köpare som söker lugn, integritet, en elegant kustmiljö, restauranger, vikar och en välskött internationell bostadskänsla.",
    check:
      "Kontrollera noggrant: Utanför högsäsong är Moraira lugnare. Villor innebär ofta mer underhåll, bilberoende och högre löpande kostnader.",
  },
  {
    title: "Bäst för aktiva pensionärer",
    area: "Jávea",
    text:
      "För pensionärer som vill ha internationella kontakter, stränder, restauranger, sport, socialt liv och flera olika livsstilsområden att välja mellan.",
    check:
      "Kontrollera noggrant: Jávea är inte en enda livsstil. Arenal, hamnen, gamla stan, Montgó och villaområdena skiljer sig tydligt från varandra.",
  },
  {
    title: "Bäst för kultur och atmosfär",
    area: "Altea",
    text:
      "För köpare som uppskattar skönhet, kultur, restauranger, charmig gammal stad, havsutsikt och ett långsammare medelhavsrytm.",
    check:
      "Kontrollera noggrant: Gamla stan är vacker, men backar, trappor och begränsad parkering kan bli viktiga i vardagen längre fram.",
  },
  {
    title: "Bäst för integritet och utrymme",
    area: "Benissa",
    text:
      "För pensionärer som vill bo mer lantligt, ha större tomt, integritet, autenticitet och närhet till Moraira och Calpe.",
    check:
      "Kontrollera noggrant: Vissa bostäder ligger avsides. Tillfart, internet, ledningar, akut tillgänglighet och underhåll bör granskas noggrant.",
  },
  {
    title: "Bäst för lägenheter och bekvämlighet",
    area: "Calpe",
    text:
      "För pensionärer som föredrar strandnära läge, lägenhetsboende, havsutsikt, restauranger, butiker, strandpromenad och ett mer urbant kustliv.",
    check:
      "Kontrollera noggrant: Vissa områden är mer säsongsbetonade och livliga. Hissar, föreningsregler, parkering, ljudnivå och byggnadsskötsel är viktiga.",
  },
];

const keyFactors = [
  {
    title: "Vård och hälsa",
    text:
      "För pensionärer bör tillgång till vård vara ett av de första filtren. Kontrollera avstånd till läkare, apotek, akutvård, sjukhus och privata kliniker.",
  },
  {
    title: "Liv året runt",
    text:
      "Vissa kustorter är livliga på sommaren men betydligt lugnare på vintern. Det kan vara perfekt om du söker ro, men en besvikelse om du förväntar dig restauranger, service och socialt liv året runt.",
  },
  {
    title: "Mobilitet och tillgänglighet",
    text:
      "En villa med havsutsikt kan innebära branta vägar, trappor, smala infarter eller svår parkering. Tänk inte bara på idag, utan även på de kommande 5, 10 eller 15 åren.",
  },
  {
    title: "Bilberoende",
    text:
      "Många vackra bostadslägen på Costa Blanca Nord kräver bil. Kontrollera om vardagen fortfarande fungerar om en partner senare inte längre kör.",
  },
  {
    title: "Skötsel och underhåll",
    text:
      "Pool, trädgård, terrasser, fasadmålning, luftkonditionering, fuktkontroll och säkerhetssystem kräver uppmärksamhet. För vissa köpare är en lättskött lägenhet på sikt klokare än en stor villa.",
  },
  {
    title: "Ljud och turisttryck",
    text:
      "En visning i lugna mars känns annorlunda än augusti. Kontrollera semesteruthyrning, barer, strandtrafik, parkeringspress och säsongsbunden ljudnivå.",
  },
  {
    title: "Föreningsregler",
    text:
      "Lägenheter och urbanisationer har ofta regler. De kan påverka uthyrning, husdjur, renoveringar, poolanvändning, ljud, parkering, kostnader och framtida beslut.",
  },
  {
    title: "Social gemenskap",
    text:
      "För många pensionärer är den viktigaste frågan inte bara var de köper, utan var de kan hitta sammanhang. Titta på språk, internationella gemenskaper, klubbar, restauranger och aktiviteter.",
  },
];

const areaDetails = [
  {
    area: "Dénia",
    title: "Dénia — starkt för liv året runt och praktisk närhet",
    text:
      "Dénia är ofta ett av de starkaste alternativen för pensionärer som vill bo permanent eller tillbringa längre perioder i Spanien. Staden erbjuder ett verkligt vardagsliv, restauranger, hamnliv, butiker, stränder, vård och mer aktivitet året runt än många mindre kustorter. Dénia passar särskilt köpare som vill ha läkare, restauranger, butiker och lokalt liv inom räckhåll. Det exakta mikroläget är avgörande: strandområden, centrum och bostadsområden kan kännas helt olika.",
  },
  {
    area: "Moraira",
    title: "Moraira — lugnt, välskött och idealiskt för privat villaliv",
    text:
      "Moraira lockar pensionärer som söker en lugnare, elegant och högkvalitativ kustmiljö. Villor, terrasser, havsutsikt, vackra vikar, bra restauranger och en välskött internationell miljö gör Moraira attraktivt. Kompromissen är att många bostäder kräver bil och att större villor innebär poolskötsel, trädgårdsskötsel, säkerhet, reparationer och förvaltning, särskilt om du inte är på plats året runt.",
  },
  {
    area: "Jávea",
    title: "Jávea — aktivt, internationellt och mångsidigt",
    text:
      "Jávea passar pensionärer som söker mer aktivitet, större valmöjlighet och fler sociala möjligheter. Orten består av olika områden som gamla stan, hamnen, Arenal, Montgó och villaområden. Restauranger, klubbar, stränder, vikar, sportutbud och en tydlig internationell gemenskap gör Jávea intressant. Viktigt är att inte köpa enbart utifrån ortsnamnet. En bostad vid Arenal känns annorlunda än en villa vid Montgó eller ett hem nära gamla stan.",
  },
  {
    area: "Altea",
    title: "Altea — kultur, skönhet och medelhavsatmosfär",
    text:
      "Altea passar köpare som uppskattar atmosfär, kultur, restauranger, havsutsikt och en mer konstnärlig medelhavsstil. Orten känns charmigare och lugnare än klassiska resortlägen. Samtidigt bör äldre köpare bedöma mobiliteten realistiskt: backar, trappor, begränsad parkering och besökstryck kan spela större roll i vardagen än under en kort semester.",
  },
  {
    area: "Benissa",
    title: "Benissa — utrymme, integritet och lantlig karaktär",
    text:
      "Benissa kan vara idealiskt om du söker mer tomt, lugn, autenticitet och integritet. Många lägen erbjuder lantlig karaktär men samtidigt tillgång till Moraira, Calpe och kusten. Den praktiska sidan måste granskas noggrant: vägkvalitet, internet, ledningar, akut tillgänglighet, avstånd till butiker och frågan om vem som sköter bostaden när du reser bort.",
  },
  {
    area: "Calpe",
    title: "Calpe — lägenheter, strandnära läge och enkel användning",
    text:
      "Calpe fungerar bra för pensionärer som vill ha strand, havsutsikt, restauranger, strandpromenad, butiker och en mer urban kuststruktur. Lägenheter kan innebära mindre underhåll och passar ofta bättre för lock-up-and-leave. Kontrollera dock hissar, föreningsregler, planerade arbeten, semesteruthyrning, parkering, ljudnivå och byggnadens skick mycket noggrant.",
  },
];

const profiles = [
  {
    title: "Pensionärspar som söker bekvämlighet",
    text:
      "Börja med Dénia, Calpe och utvalda delar av Jávea. Dessa orter erbjuder oftast mer daglig service, butiker, restauranger och lägenhetsalternativ.",
  },
  {
    title: "Pensionärspar som söker lugn och integritet",
    text:
      "Börja med Moraira, Benissa och utvalda villaområden kring Jávea. Dessa lägen erbjuder lugn, utsikt och integritet, men kräver en ärlig bedömning av skötsel, tillfart och bilberoende.",
  },
  {
    title: "Ensamstående pensionär eller ensam köpare",
    text:
      "Dénia, Jávea eller centrala områden med service i närheten är ofta klokt. Vardag, sociala kontakter, restauranger, klubbar och vård blir då ännu viktigare.",
  },
  {
    title: "Köpare med fokus på kultur och skönhet",
    text:
      "Altea, Dénia och utvalda delar av Jávea erbjuder atmosfär, gammalstadscharm, restauranger och medelhavskaraktär. Mobilitet och parkering bör kontrolleras.",
  },
  {
    title: "Andra hem snarare än heltidsboende",
    text:
      "Moraira, Calpe, Altea och Jávea kan fungera bra. Det bästa valet beror på om du föredrar villa, lägenhet, strandtillgång, uthyrningspotential eller låg skötsel.",
  },
  {
    title: "Köpare med uthyrning i åtanke",
    text:
      "Calpe, Dénia och utvalda delar av Jávea kan vara intressanta, men uthyrningsattraktivitet är inte samma sak som uthyrningstillstånd. Regler, skatter, tillstånd och verklig nettolönsamhet måste kontrolleras.",
  },
];

const mistakes = [
  "Att köpa enbart för havsutsikten och ignorera tillgång, ljud, läkare, service och underhåll.",
  "Att underskatta framtida mobilitet: trappor, branta vägar och svår parkering kan bli ett problem senare.",
  "Att anta att varje kustort är aktiv året runt.",
  "Att underskatta skötselbehovet i en stor villa.",
  "Att inte kontrollera föreningsregler, protokoll och framtida kostnader.",
  "Att se uthyrningsintäkter som garanterade utan att räkna på regler, skatt, säsong, städning, förvaltning och tomma perioder.",
];

const checklist = [
  "Hur långt är det till läkare, apotek och sjukhus?",
  "Kan du leva bekvämt utan att köra bil varje dag?",
  "Fungerar bostaden även vid nedsatt mobilitet?",
  "Är orten tillräckligt aktiv utanför sommarsäsongen?",
  "Är restauranger och butiker öppna året runt?",
  "Finns det trappor, branta vägar eller svåra infarter?",
  "Är bostaden lätt att sköta från utlandet?",
  "Finns det semesteruthyrning eller högljudda barer i närheten?",
  "Är föreningsregler och protokoll acceptabla?",
  "Hur höga är de årliga ägarkostnaderna?",
  "Får bostaden hyras ut lagligt, om det är relevant?",
  "Passar området även om 10 år till ditt liv?",
];

const relatedGuides = [
  {
    title: "Var ska man köpa på Costa Blanca Nord?",
    text: "Jämför de viktigaste orterna innan du väljer bostad.",
    href: "/sv/where-to-buy-property-costa-blanca-nord",
  },
  {
    title: "Kostnader, uthyrning och verkliga köpkontroller",
    text: "Förstå detaljer som köpare ofta upptäcker för sent.",
    href: "/sv/costs-rentals-real-life-checks",
  },
  {
    title: "Moraira vs. Jávea",
    text: "Jämför två av de mest populära orterna för internationella köpare.",
    href: "/sv/moraira-vs-javea",
  },
];

const faqs = [
  {
    question: "Vilken ort på Costa Blanca Nord är bäst för pensionärer?",
    answer:
      "Det finns inte en enda bästa ort. Dénia är ofta starkt för vardag och service, Moraira för lugnt villaliv, Jávea för aktivitet och internationella kontakter, Altea för kultur, Benissa för utrymme och Calpe för lägenheter och strandnära läge.",
  },
  {
    question: "Är Dénia bra för pension i Spanien?",
    answer:
      "Dénia är ofta ett mycket praktiskt val eftersom staden erbjuder mer service året runt, restauranger, butiker, vård, stränder och stadsliv än många mindre kustområden.",
  },
  {
    question: "Är Moraira bättre än Jávea för pensionärer?",
    answer:
      "Moraira passar ofta bättre för köpare som söker lugn, integritet och villaliv. Jávea passar ofta bättre för aktiva pensionärer som vill ha mer utbud, sport, restauranger, sociala kontakter och olika bostadszoner.",
  },
  {
    question: "Vad bör pensionärer särskilt tänka på vid bostadsköp i Spanien?",
    answer:
      "Vård, mobilitet, bilberoende, liv året runt, skötselbehov, föreningsregler, löpande kostnader, trygghet, uthyrningsregler och sociala möjligheter är avgörande.",
  },
  {
    question: "Bör jag välja ort först eller bostad först?",
    answer:
      "Välj rätt ort först. När området passar din vardag, mobilitet, budget och livsplanering blir bostadssökningen mycket mer fokuserad, realistisk och trygg.",
  },
];

export default function RetireeAreaGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(retireeGuideStructuredData),
        }}
      />

      <main className="min-h-screen bg-[#f6f1ea] text-stone-900 overflow-hidden">
        {/* HERO */}
        <section className="relative min-h-[86vh] overflow-hidden">
          <img
            src="/images/discover-card.png"
            alt="De bästa platserna på Costa Blanca Nord för pensionärer"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>

          <div className="relative z-10 mx-auto flex min-h-[86vh] max-w-7xl items-center px-8 pt-24">
            <div className="max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Pensionärsguide Costa Blanca Nord
              </p>

              <h1 className="mt-6 font-serif text-5xl leading-tight text-white md:text-7xl">
                De bästa platserna på Costa Blanca Nord för pensionärer och
                köpare av ett andra hem.
              </h1>

              <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/90">
                En praktisk guide för svenska, norska, tyska, nederländska och
                internationella köpare som jämför Dénia, Moraira, Jávea, Altea,
                Benissa och Calpe innan de går i pension i Spanien eller köper
                en bostad.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/sv/area-match"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Begär Area Match
                </a>

                <a
                  href="/sv/buyer-discovery-trip-costa-blanca-nord"
                  className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-stone-900"
                >
                  Upptäck Buyer Discovery Trip
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Pension i Spanien
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Den bästa platsen är inte automatiskt den vackraste. Det är
                  platsen som fungerar i vardagen.
                </h2>
              </div>

              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Costa Blanca Nord är attraktivt för många pensionärer: milt
                  medelhavsklimat, kustorter, internationella gemenskaper,
                  restauranger, natur, vård och ett långsammare livstempo. Men
                  ett bra köpbeslut kräver mer än sol och havsutsikt.
                </p>

                <p className="mt-6">
                  Äldre köpare bör särskilt jämföra vård, butiker, mobilitet,
                  vinterliv, underhåll, bilberoende, uthyrningsregler,
                  föreningsregler och atmosfären utanför högsäsong.
                </p>

                <p className="mt-6">
                  Den här guiden hjälper dig att jämföra de viktigaste orterna
                  på Costa Blanca Nord realistiskt, så att du inte bara hittar
                  en vacker bostad utan en miljö som passar ditt framtida liv.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ANSWER */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Kort svar
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Dénia är ofta det starkaste helhetsvalet för vardagen. Moraira är
              ofta idealiskt för lugnt villaliv. Jávea passar ofta aktiva
              pensionärer.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
              Det finns ingen ort som är perfekt för alla pensionärer. Ett par
              som vill ha läkare, restauranger och service i närheten väljer
              annorlunda än någon som vill ha en privat villa, ett lugnt
              semesterhem eller en lättskött lägenhet vid stranden.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {quickAreas.map((item) => (
                <div key={item.area} className="rounded-[28px] bg-[#f6f1ea] p-7">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                    {item.title}
                  </p>
                  <h3 className="mt-4 font-serif text-4xl text-[#1e2a3a]">
                    {item.area}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {item.text}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-stone-500">
                    <span className="font-semibold text-[#1e2a3a]">
                      Kontrollera noggrant:
                    </span>{" "}
                    {item.check.replace("Kontrollera noggrant: ", "")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFERENT PRIORITIES */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Andra prioriteringar än semesterköpare
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Pensionärer bör bedöma ett område annorlunda än rena
                semesterköpare.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                En semesterköpare tittar ofta först på strand, utsikt och
                restauranger. En pensionär behöver se djupare: fungerar bostaden
                året runt? Finns service tillräckligt nära? Är området för lugnt
                på vintern? Fungerar vardagen även om bilkörning senare blir
                svårare? Är vården lätt att nå? Finns det en gemenskap där man
                känner sig välkommen?
              </p>

              <p className="mt-6">
                Det betyder inte att pensionärer bara bör köpa i större städer.
                Många köpare trivs bäst i lugnare lägen som Moraira eller
                Benissa. Det viktiga är att känna till kompromisserna innan du
                skriver under.
              </p>

              <p className="mt-6">
                Målet är inte att undvika varje nackdel. Målet är att välja ett
                område vars nackdelar är acceptabla för ditt verkliga liv.
              </p>
            </div>
          </div>
        </section>

        {/* KEY FACTORS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Det som verkligen spelar roll
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
              De viktigaste faktorerna pensionärer bör jämföra innan de köper
              bostad på Costa Blanca Nord.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {keyFactors.map((item) => (
                <div key={item.title} className="rounded-[28px] bg-white/10 p-7">
                  <h3 className="font-serif text-3xl">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-white/75">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AREA BY AREA */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Ort för ort
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Vilket område på Costa Blanca Nord passar vilket
                pensionsprofil?
              </h2>
            </div>

            <div className="grid gap-7">
              {areaDetails.map((item) => (
                <article
                  key={item.area}
                  className="rounded-[32px] bg-white p-8 shadow-sm lg:p-10"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                    {item.area}
                  </p>
                  <h3 className="mt-4 font-serif text-4xl leading-tight text-[#1e2a3a]">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-5xl text-lg leading-relaxed text-stone-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROFILE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Välj efter köparprofil
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              De bästa platserna beror på hur du faktiskt vill leva senare.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {profiles.map((item) => (
                <div key={item.title} className="rounded-[28px] bg-[#f6f1ea] p-7">
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
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

        {/* COMMON MISTAKES */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Vanliga misstag
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Misstag som äldre köpare bör undvika före köpet.
              </h2>
            </div>

            <div className="grid gap-4">
              {mistakes.map((item) => (
                <div key={item} className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="leading-relaxed text-stone-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHECKLIST */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Checklista för pensionärer
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Frågor du bör ställa innan du bestämmer dig för ett område.
            </h2>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {checklist.map((item) => (
                <div key={item} className="rounded-2xl bg-white/80 p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRACTICAL NOTE */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Praktisk notering
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Pension i Spanien innebär också att administration, dokument och
                professionell rådgivning måste tas på allvar.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                För EU-medborgare som bor i Spanien längre än en kort period
                finns administrativa steg. Beroende på situation kan det handla
                om registrering, vård, skattemässig hemvist, pension, körkort,
                försäkring, arv och lokal folkbokföring.
              </p>

              <p className="mt-6">
                Den här artikeln hjälper till att välja rätt område och är inte
                juridisk, skattemässig, finansiell eller medicinsk rådgivning.
                Kontrollera alltid din personliga situation med kvalificerade
                experter innan du köper eller flyttar.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL ADVICE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 text-center shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vårt viktigaste råd
            </p>

            <h2 className="mx-auto mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Det bästa området för pensionen är det som stödjer ditt framtida
              liv, inte bara din semesterkänsla.
            </h2>

            <p className="mx-auto mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
              Dénia, Moraira, Jávea, Altea, Benissa och Calpe kan alla vara bra
              val, men av olika skäl. Rätt val beror på livsstil, hälsa,
              mobilitet, budget, sociala behov, bostadstyp och långsiktiga
              planer.
            </p>

            <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-stone-700">
              Välj rätt område först. Därefter blir sökandet efter rätt bostad
              mer fokuserat, realistiskt och tryggt.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/sv/area-match"
                className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#15202d]"
              >
                Begär Area Match
              </a>

              <a
                href="/sv/buyer-discovery-trip-costa-blanca-nord"
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Upptäck Buyer Discovery Trip
              </a>
            </div>
          </div>
        </section>

        {/* RELATED GUIDES */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Fler guider
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Läs vidare innan du köper.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedGuides.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="rounded-[28px] bg-white p-8 shadow-sm transition hover:-translate-y-1"
                >
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {item.text}
                  </p>
                </a>
              ))}
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
                Frågor om pension och bostadsköp på Costa Blanca Nord.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((item) => (
                <div key={item.question} className="rounded-[28px] bg-white p-8 shadow-sm">
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
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

        {/* IMPORTANT NOTE */}
        <section className="px-8 pb-32">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Viktig information
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
              Den här guiden ersätter inte personlig expertrådgivning.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-white/75">
              Den här artikeln ger allmän information för internationella
              köpare. Den är inte juridisk, skattemässig, finansiell eller
              medicinsk rådgivning. Vård, uppehållsregler, skatter,
              bostadskostnader och lokala regler kan ändras. Kontrollera alltid
              din personliga situation med kvalificerade experter innan du köper
              eller flyttar till Spanien.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Officiella turistkällor Dénia",
                "UNESCO Creative Cities Network",
                "Xàbia/Jávea Tourism",
                "Teulada-Moraira Tourism",
                "Department of Health Dénia",
                "Spansk polis och EU-registrering",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm leading-relaxed text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
