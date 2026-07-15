export const metadata = {
  title: "Moraira eller Jávea | Vilken plats passar bättre för svenska köpare?",
  description:
    "Jämför Moraira och Jávea när du vill köpa bostad på Costa Blanca Nord. Upptäck skillnaderna i livsstil, villor, lägenheter, familjer, pensionärer, stränder, service och internationella gemenskaper.",
};

export default function MorairaVsJaveaPage() {
  const quickComparison = [
    {
      label: "Allmän atmosfär",
      moraira: "Lugnt, stilfullt, bostadsorienterat och välskött",
      javea: "Större, livligare, mer internationellt och mer varierat",
    },
    {
      label: "Passar bäst för",
      moraira:
        "Villaköpare, pensionärer, köpare som söker integritet och köpare av en stilfull fritidsbostad",
      javea:
        "Familjer, aktiva köpare, permanent boende och personer som söker mycket variation",
    },
    {
      label: "Bostadstyp",
      moraira:
        "Fristående villor, bostäder med havsutsikt och lugna lågbebyggda områden",
      javea:
        "Villor, lägenheter, radhus och boende nära Arenal, hamnen eller gamla stan",
    },
    {
      label: "Livsstil",
      moraira:
        "Lugna kustrestauranger, vikar, marina och avslappnat villaliv",
      javea:
        "Stränder, sport, service, restauranger och ett mer aktivt socialt liv",
    },
    {
      label: "Liv året runt",
      moraira:
        "Trivsamt, men tydligt lugnare utanför högsäsong",
      javea:
        "Generellt fler aktiviteter och mer service under hela året",
    },
    {
      label: "Köpartyp",
      moraira:
        "Köpare som söker lugn, integritet och en exklusiv boendemiljö",
      javea:
        "Köpare som söker mer valfrihet, livlighet och en större internationell gemenskap",
    },
  ];

  const morairaStrengths = [
    "Stilfull kustatmosfär med lugn och bostadsorienterad känsla",
    "Mycket attraktivt för villaköpare och ägare av fritidsbostad",
    "Vackra stränder och vikar, bland annat El Portet, L’Ampolla och Les Platgetes",
    "Passar köpare som söker integritet, komfort och en välskött miljö",
    "Populärt bland internationella köpare som föredrar låg bebyggelse och lugnt kustboende",
    "Ett attraktivt val för pensionärer och köpare som inte behöver en stor och livlig ort",
  ];

  const javeaStrengths = [
    "Större och mer varierat än Moraira, med flera olika boende- och livsstilsområden",
    "Passar familjer, aktiva pensionärer, distansarbetare och sociala köpare",
    "Många strandmöjligheter med Arenal, Portitxol, Granadella och andra vikar i närheten",
    "Direkt koppling till naturparken Montgó och många möjligheter till utomhusaktiviteter",
    "Fler restauranger, servicefunktioner, klubbar och vardagsaktiviteter än i mindre kustorter",
    "Ofta mer praktiskt för köpare som söker liv året runt och en internationell gemenskap",
  ];

  const buyerSituations = [
    {
      title: "För familjer",
      text:
        "Jávea är ofta den mest praktiska utgångspunkten för familjer. Orten erbjuder fler olika boendeområden, fler aktiviteter under året och en större internationell gemenskap. Moraira kan också passa en familj mycket bra när lugn, integritet och villaliv är viktigare. Jávea ger vanligtvis mer praktisk flexibilitet.",
    },
    {
      title: "För pensionärer",
      text:
        "Moraira är ofta idealiskt för pensionärer som söker lugn, integritet, restauranger, kustpromenader och en välskött miljö. Jávea passar bättre för pensionärer som vill ha fler aktiviteter, sociala kontakter, restauranger och livlighet under hela året.",
    },
    {
      title: "För villaköpare",
      text:
        "Både Moraira och Jávea är attraktiva för villaköpare. Moraira känns vanligtvis mer exklusivt, mer välskött och lugnare. Jávea erbjuder fler val mellan olika villaområden, från stilla bostadsområden till lägen närmare stränder, restauranger och vardagsservice.",
    },
    {
      title: "För lägenhetsköpare",
      text:
        "Jávea erbjuder vanligtvis fler möjligheter för lägenhetsköpare. Runt Arenal, hamnen och centrum är utbudet mer varierat. Moraira är mer inriktat på villor och passar därför sämre för köpare som framför allt vill ha stort lägenhetsutbud eller en livligare strandmiljö.",
    },
    {
      title: "För permanent boende",
      text:
        "Jávea har oftast en fördel för permanent boende eftersom orten är större och mer aktiv under hela året. Moraira är mycket attraktivt, men lugnare utanför högsäsong. Det bästa valet beror på om du främst söker lugn eller mer livlighet.",
    },
    {
      title: "För köpare som söker integritet",
      text:
        "Moraira passar ofta bättre för köpare som söker integritet, lugna villaområden och en välskött boendemiljö. Även Jávea erbjuder lugna och privata bostäder, men atmosfär, trafik och livlighet skiljer sig mer mellan olika områden.",
    },
  ];

  const commonMistakes = [
    {
      title: "Att välja bara utifrån havsutsikt",
      text:
        "Havsutsikt är attraktivt, men säger inte om ett läge passar ditt dagliga liv. Kontrollera alltid tillgänglighet, trafik, ljud, service, solläge, regler i ägarföreningen, underhållskostnader och områdets känsla utanför sommarsäsongen.",
    },
    {
      title: "Att tro att Moraira och Jávea erbjuder samma livsstil",
      text:
        "Orterna ligger nära varandra, men känns inte likadana. Moraira är mindre, lugnare och mer bostadsorienterat. Jávea är större, livligare och mer varierat. Den skillnaden är viktig när du väljer var du vill bo.",
    },
    {
      title: "Att bara besöka orterna på sommaren",
      text:
        "Båda orterna känns annorlunda i augusti än i januari eller februari. Om du vill bo permanent eller vistas längre perioder i Spanien bör du också uppleva rytmen utanför högsäsong.",
    },
    {
      title: "Att underskatta vardagslivet",
      text:
        "Restauranger, vikar och utsikt är bara en del av beslutet. Jämför också stormarknader, läkare, skolor, tillgänglighet, trafik, parkering, service, regler i ägarföreningen och hur enkelt vardagslivet faktiskt blir.",
    },
    {
      title: "Att börja med bostäder och välja platsen senare",
      text:
        "Detta är ett av de vanligaste misstagen. Även den vackraste bostaden kan bli ett felköp om omgivningen inte passar dig. Välj därför först orten och bestäm därefter vilken typ av bostad du söker.",
    },
  ];

  const faqs = [
    {
      question: "Är Moraira bättre än Jávea?",
      answer:
        "Moraira är vanligtvis bättre när du söker en lugn, stilfull och villafokuserad miljö. Jávea är ofta bättre när du vill ha mer livlighet, variation, service och en större internationell gemenskap.",
    },
    {
      question: "Är Jávea bättre för familjer?",
      answer:
        "För många svenska och internationella familjer är Jávea ett mer praktiskt val eftersom det finns mer service, fler aktiviteter och fler olika boendeområden. Moraira kan passa bra för familjer som främst söker en lugn och bostadsorienterad livsstil.",
    },
    {
      question: "Är Moraira mer exklusivt än Jávea?",
      answer:
        "Moraira känns ofta mer exklusivt eftersom det är mindre, lugnare och mer inriktat på villor. Jávea har också exklusiva områden, men som helhet är orten större och mer varierad.",
    },
    {
      question: "Vilken plats är bättre för pensionärer?",
      answer:
        "Moraira är ofta attraktivt för pensionärer som söker lugn, integritet och en välskött miljö. Jávea passar vanligtvis bättre för personer som vill ha fler sociala aktiviteter, restauranger, klubbar och livlighet under hela året.",
    },
    {
      question: "Vilken plats är bättre för att köpa villa?",
      answer:
        "Båda orterna är starka när det gäller villor. Moraira är mer inriktat på lugnt och bostadsorienterat villaliv. Jávea erbjuder större variation mellan villaområden, inklusive lägen nära stränder, centrum, hamnen och naturområden.",
    },
    {
      question: "Bör jag besöka båda platserna innan jag köper?",
      answer:
        "Ja. På kartan ser Moraira och Jávea ut att ligga nära varandra, men i vardagen känns de mycket olika. Att besöka båda orterna är ett viktigt steg innan du köper bostad på Costa Blanca Nord.",
    },
  ];

  const officialSources = [
    {
      label: "Turism Teulada-Moraira — stränder",
      href: "https://www.turismoteuladamoraira.com/ttm/Web_php/index.php?contenido=showPois&id=1&idNivel=544&lang=4",
    },
    {
      label: "Turism Teulada-Moraira — Blå Flagg-utmärkelse",
      href: "https://www.turismoteuladamoraira.com/ttm/web_php/index.php?contenido=noticia_desc_coconut&id=470&lang=4&title=teulada-moraira-recibe-el-reconocimiento-bandera-azul-a-sus-playa-y-al-club-nutico",
    },
    {
      label: "Turism Xàbia — officiell turistwebbplats",
      href: "https://en.xabia.org/",
    },
    {
      label: "Turism Xàbia — naturparken Montgó",
      href: "https://en.xabia.org/ver/1497/Parque-Natural-del-Montg%C3%B3.html",
    },
    {
      label: "Comunitat Valenciana — Granadella-viken",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/xabia-javea/beaches/granadella-cove",
    },
    {
      label: "Turism Xàbia — Arenal-stranden",
      href: "https://en.xabia.org/ver/1567/Playa-del-Arenal.html",
    },
    {
      label: "Turism Xàbia — hamnen i Xàbia",
      href: "https://en.xabia.org/ver/8950/The-X%EF%BF%BDbia-Port.html",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Jämförelse mellan Moraira och Jávea för svenska bostadsköpare"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Jämförelseguide Costa Blanca Nord
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Moraira eller Jávea: vilken plats passar bättre för svenska köpare?
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              En utförlig jämförelse av två av de mest omtyckta platserna på
              Costa Blanca Nord, så att du lättare kan avgöra var du vill köpa
              bostad i Spanien.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/sv/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Be om din personliga Area Match
              </a>

              <a
                href="/sv/services/discovery-trips"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Upptäck Buyer Discovery Trip
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
                Jämförelse av miljö och vardag
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Moraira och Jávea ligger nära varandra, men erbjuder mycket
                olika livsstilar.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Moraira och Jávea är två av de mest populära platserna för
                svenska och internationella köpare som söker bostad på Costa
                Blanca Nord. Båda erbjuder medelhavsmiljö, stränder, villor,
                restauranger och internationella gemenskaper. Ändå känns de
                olika i vardagen.
              </p>

              <p className="mt-6">
                Moraira är vanligtvis lugnare, mindre, mer bostadsorienterat och
                mer inriktat på villor. Jávea är större, livligare och mer
                varierat, med områden som gamla stan, hamnen, Arenal och
                omgivande villaområden.
              </p>

              <p className="mt-6">
                Rätt val beror på hur du vill leva. Ett pensionerat par som
                söker lugn och integritet kan göra ett annat val än en familj som
                behöver skolor och aktiviteter, eller en distansarbetare som
                värdesätter kaféer, sport och ett större socialt nätverk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KORT ANTWOORD */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Kort svar
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Välj Moraira för lugnt villaliv. Välj Jávea för mer livlighet,
            variation och aktiviteter året runt.
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-[#f6f1ea] p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Moraira passar oftast bättre när du söker:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• En lugn och stilfull kustmiljö</li>
                <li>• En bostadsorienterad livsstil med starkt fokus på villor</li>
                <li>• Integritet, komfort och en välskött miljö för en fritidsbostad</li>
                <li>• En lugn bas för pensionering eller deltidsboende</li>
                <li>• En mindre ort med restauranger, vikar och marina</li>
              </ul>

              <a
                href="/sv/regions/moraira"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Upptäck Moraira →
              </a>
            </div>

            <div className="rounded-[32px] bg-[#1e2a3a] p-9 text-white">
              <h3 className="font-serif text-4xl">
                Jávea passar oftast bättre när du söker:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-white/75">
                <li>• Fler aktiviteter och mer service under hela året</li>
                <li>• En större internationell gemenskap</li>
                <li>• Mer val mellan stränder, centrum, hamn och Arenal</li>
                <li>• En miljö som passar familjer och aktiva köpare</li>
                <li>• Restauranger, sport, klubbar, vikar och ett varierat socialt liv</li>
              </ul>

              <a
                href="/sv/regions/javea"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Upptäck Jávea →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VERGELIJKINGSTABEL */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              I korthet
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Jämförelse mellan Moraira och Jávea.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Den här jämförelsen ger en praktisk översikt innan du besöker
              båda orterna. Det handlar inte om vilken plats som objektivt är
              bättre, utan vilken som bäst passar din livsstil, budget,
              bostadsönskemål och framtidsplaner.
            </p>
          </div>

          <div className="overflow-hidden rounded-[36px] bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-[#1e2a3a] text-white">
              <div className="p-6 text-sm uppercase tracking-[0.25em]">
                Del
              </div>

              <div className="p-6 text-sm uppercase tracking-[0.25em]">
                Moraira
              </div>

              <div className="p-6 text-sm uppercase tracking-[0.25em]">
                Jávea
              </div>
            </div>

            {quickComparison.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-3 border-t border-stone-200"
              >
                <div className="bg-[#f6f1ea] p-6 font-medium text-[#1e2a3a]">
                  {row.label}
                </div>

                <div className="p-6 leading-relaxed text-stone-600">
                  {row.moraira}
                </div>

                <div className="p-6 leading-relaxed text-stone-600">
                  {row.javea}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MORAIRA UITGEBREID */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Moraira
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Moraira passar köpare som söker lugn, integritet och en stilfull
            boendemiljö vid kusten.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-700">
              <p>
                Moraira är en del av kommunen Teulada-Moraira i Marina Alta.
                Orten har utvecklats från fiskeby till ett av de mest
                eftertraktade bostadsområdena på Costa Blanca Nord, särskilt för
                internationella köpare som söker en lugn och välskött miljö.
              </p>

              <p className="mt-6">
                Den officiella turistinformationen från Teulada-Moraira lyfter
                fram stränder och vikar som El Portet, L’Ampolla och Les
                Platgetes. Dessa platser bidrar starkt till Morairas identitet:
                attraktivt, vackert och kustnära, men med mer låg bebyggelse och
                fler bostadsområden än många livligare badorter.
              </p>

              <p className="mt-6">
                Moraira passar särskilt bra för köpare som söker villa,
                integritet, havsutsikt, bra restauranger, vikar och en lugn bas.
                Orten är populär bland pensionärer, ägare av fritidsbostäder och
                köpare som inte behöver en stor stadsmiljö.
              </p>

              <p className="mt-6">
                Nackdelen är att Moraira kan kännas lugnare utanför högsäsong.
                För vissa köpare är det just den största fördelen. För familjer
                eller personer som söker mer vardagsaktivitet kan det kännas för
                stillsamt.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/70 p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Morairas styrkor
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                {morairaStrengths.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* JÁVEA UITGEBREID */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Jávea / Xàbia
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Jávea passar köpare som söker variation, livlighet och en starkare
            rytm under hela året.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-white/75">
              <p>
                Jávea, officiellt Xàbia/Jávea, är större och mer varierat än
                Moraira. Det är inte en enda homogen boendemiljö. Köpare jämför
                vanligtvis flera områden: gamla stan, hamnen, Arenal,
                bostadsområden vid Montgó och villaområden nära vikar som
                Portitxol och Granadella.
              </p>

              <p className="mt-6">
                Den officiella turistorganisationen för Xàbia lyfter fram
                stränder, vikar, kultur, hamn, Arenal och skyddade naturområden.
                Montgó ligger ovanför Xàbia, Dénia och Ondara och når 753 meter,
                vilket ger området en tydlig naturlig identitet.
              </p>

              <p className="mt-6">
                Jávea har dessutom några av de mest kända kustlandskapen på
                Costa Blanca Nord. Granadella är känt för sitt klara turkosa
                vatten, sin naturliga miljö och möjligheter till bad och
                dykning.
              </p>

              <p className="mt-6">
                För bostadsköpare erbjuder Jávea ofta mer valfrihet. Orten kan
                passa familjer, aktiva pensionärer, distansarbetare,
                entreprenörer, fritidsbostadsköpare och personer som söker fler
                restauranger, sport, service och internationella kontakter.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h3 className="font-serif text-3xl text-white">
                Jáveas styrkor
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-white/75">
                {javeaStrengths.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VERGELIJKING LEVENSSTIJL */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Skillnad i livsstil
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Den viktigaste skillnaden är inte avståndet, utan vardagslivet.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Avståndet mellan Moraira och Jávea är inte stort. Därför tror
              många köpare att livsstilen kommer att vara liknande. I praktiken
              kan upplevelsen vara ganska annorlunda.
            </p>

            <p className="mt-6">
              Moraira känns mer kompakt och överskådligt. Det är attraktivt om
              du söker restauranger, vikar, marina, stränder och villaområden
              utan trängseln från en större ort. Många köpare beskriver Moraira
              som lugnt, stilfullt och bekvämt.
            </p>

            <p className="mt-6">
              Jávea består av flera lager. Gamla stan har historia och lokal
              service, hamnen har maritim karaktär och Arenal erbjuder strand,
              restauranger och mer livlighet. De omgivande bostadsområdena
              erbjuder villor, utsikt och närhet till natur. Den variationen är
              attraktiv, men betyder också att du måste välja rätt del av Jávea
              noggrant.
            </p>

            <p className="mt-6">
              Söker du lugn och integritet kan Moraira passa bättre. Vill du ha
              fler möjligheter och mer liv under hela året kan Jávea vara ett
              bättre val.
            </p>
          </div>
        </div>
      </section>

      {/* TYPE WONINGEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Bostadsutbud
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Moraira är mer inriktat på villor. Jávea erbjuder vanligtvis mer
            variation i bostadstyper.
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-[#f6f1ea] p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Att köpa bostad i Moraira
              </h3>

              <p className="mt-6 leading-relaxed text-stone-600">
                Moraira förknippas ofta med fristående villor, bostäder med
                havsutsikt, bostadsorienterade tomter och låg bebyggelse. Köpare
                söker här vanligtvis integritet, komfort, utomhusyta och en
                exklusiv kustmiljö.
              </p>

              <p className="mt-6 leading-relaxed text-stone-600">
                Det finns också lägenheter, men Moraira är oftast inte den första
                ort vi rekommenderar om du främst söker ett stort
                lägenhetsutbud, modern högre bebyggelse eller en mer urban
                strandmiljö.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Att köpa bostad i Jávea
              </h3>

              <p className="mt-6 leading-relaxed text-stone-600">
                Jávea erbjuder mer variation. Du kan jämföra villor, lägenheter,
                radhus, bostäder vid Arenal, hus nära hamnen, bostäder runt
                gamla stan och villaområden vid Montgó eller vikarna.
              </p>

              <p className="mt-6 leading-relaxed text-stone-600">
                Den variationen är attraktiv men gör också sökningen mer komplex.
                Två bostäder i Jávea kan erbjuda helt olika livsstilar beroende
                på om de ligger vid Arenal, hamnen, gamla stan eller i ett lugnt
                villaområde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SITUATIES PER TYPE KOPER */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vilken plats passar dig?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Moraira eller Jávea per köpartyp.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Rätt val beror mindre på vad som ser vackrast ut online och mer
              på hur du vill använda bostaden. En familj som flyttar permanent,
              ett pensionerat par och en fritidsbostadsköpare har olika behov.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {buyerSituations.map((item) => (
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

      {/* BESLISHULP */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Praktisk beslutsstöd
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Ställ dig dessa frågor innan du väljer mellan Moraira och Jávea.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Vill du ha en lugn boendemiljö eller en livligare plats med mer aktivitet?",
              "Ska du bo där permanent, vistas delar av året eller bara använda bostaden under semestrar?",
              "Behöver du skolor, klubbar, sportmöjligheter, vård och daglig service i närheten?",
              "Söker du främst villa eller vill du också ha många alternativ bland lägenheter och radhus?",
              "Vill du kunna promenera till restauranger och butiker, eller är det okej att ta bilen överallt?",
              "Söker du främst lugn och integritet eller ett mer aktivt socialt och internationellt liv?",
              "Föredrar du lugna vikar och marina eller fler olika stränder och bostadsområden?",
              "Har du besökt båda platserna även utanför den hektiska sommarsäsongen?",
            ].map((question) => (
              <div key={question} className="rounded-2xl bg-white/75 p-6">
                <p className="leading-relaxed text-stone-700">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEELGEMAAKTE FOUTEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vanliga misstag
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Misstag köpare gör när de jämför Moraira och Jávea.
            </h2>
          </div>

          <div className="grid gap-8">
            {commonMistakes.map((item) => (
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

      {/* SLOTADVIES */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Slutråd
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Moraira är inte bättre än Jávea. Jávea är inte bättre än Moraira.
              En av dem passar bättre för dig.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Om ditt idealiska liv i Spanien är lugnt, stilfullt, privat och
              starkt villafokuserat kan Moraira vara rätt val. Om du vill ha mer
              aktivitet, service, olika boendeområden och en större
              internationell gemenskap kan Jávea passa bättre.
            </p>

            <p className="mt-6">
              Den klokaste vägen är inte att välja utifrån onlineannonser eller
              en enda vacker visning. Börja med din önskade livsstil, jämför
              sedan orterna och starta först därefter bostadssökningen.
            </p>

            <p className="mt-6">
              Därför börjar Nordic Move Spain med Area Match. Vi hjälper svenska
              och internationella köpare att först förstå vilken miljö som passar
              deras liv innan de binder sig till en ort, bostadssökning eller
              visningsresa.
            </p>
          </div>
        </div>
      </section>

      {/* VEELGESTELDE VRAGEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vanliga frågor
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Vanliga frågor om Moraira och Jávea.
          </h2>

          <div className="mt-12 grid gap-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-t border-stone-200 pt-8"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {faq.question}
                </h3>

                <p className="mt-4 max-w-5xl leading-relaxed text-stone-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPROEP */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Personlig Area Match
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Tvekar du fortfarande mellan Moraira och Jávea?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Vi hjälper svenska och internationella köpare att jämföra platser på
            Costa Blanca Nord utifrån livsstil, budget, familjesituation,
            bostadstyp, service, framtidsplaner och förväntningar på vardagen.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
            Be om din Area Match innan du börjar bostadssökningen. Då fokuserar
            du bara på de platser som verkligen passar ditt framtida liv i
            Spanien.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/sv/services/area-match"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Be om din personliga Area Match
            </a>

            <a
              href="/sv/services/discovery-trips"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Upptäck Buyer Discovery Trip
            </a>
          </div>
        </div>
      </section>

      {/* OFFICIËLE BRONNEN */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Använda officiella källor
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Där det är möjligt har officiella turistiska och institutionella
            källor använts för den här guiden. Lokal service, bostadsmarknader
            och säsongsbundna aktiviteter kan förändras. Kontrollera därför
            alltid praktisk information innan du fattar ett köpbeslut.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
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
