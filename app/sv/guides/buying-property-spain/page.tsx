export const metadata = {
  title: "Komplett guide till att köpa bostad i Spanien | Costa Blanca Nord",
  description:
    "Utförlig köpguide för internationella köpare på Costa Blanca Nord och i Alicante-provinsen: juridiska kontroller, lokala regler, ITP/IVA, turistuthyrning, ägarförening, energicertifikat, tekniska kontroller och köprisker.",
  openGraph: {
    title: "Komplett guide till att köpa bostad i Spanien | Nordic Move Spain",
    description:
      "Vad internationella köpare bör kontrollera före köp på Costa Blanca Nord: dokument, lokala regler, juridiska risker, byggtekniska punkter, kostnader och uthyrningsregler.",
    type: "website",
  },
};

export default function BuyingProcessPage() {
  const topChecks = [
    {
      title: "Juridiskt ägande",
      text:
        "Kontrollera vem som är juridisk ägare, om det finns bolån, utmätningar, skulder, servitut eller andra belastningar på bostaden och om säljaren verkligen har rätt att sälja.",
    },
    {
      title: "Stadsplanemässig legalitet",
      text:
        "Kontrollera med kommunen om bostaden, poolen, terrasser, tillbyggnader, gästhus, pergolor och andra arbeten är lagligt byggda och korrekt registrerade.",
    },
    {
      title: "Lokala regler per kommun",
      text:
        "Regler kan skilja sig mellan Jávea, Dénia, Moraira, Benissa, Altea, Calpe och andra orter. Tänk på turistuthyrning, renoveringar, detaljplaner, skyddade zoner och parkeringsregler.",
    },
    {
      title: "Tekniskt skick",
      text:
        "Låt inte bara utseendet bedömas, utan även fukt, sprickor, tak, installationer, el, rör, pool, septiktank, stödmurar, lutning och underhållsrisker.",
    },
    {
      title: "Ägarförening och uthyrning",
      text:
        "Kontrollera stadgar, regler, protokoll, obetalda avgifter, gemensamma kostnader och eventuella begränsningar för turistuthyrning eller renoveringar.",
    },
    {
      title: "Verkliga kostnader",
      text:
        "Beräkna utöver köpeskillingen även skatter, notarie, register, advokat, bolån, försäkringar, IBI, sophämtningsavgift, underhåll, ägarförening och icke-residentskatt.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Bestäm först rätt region",
      text:
        "Börja inte bara med att titta på bostäder. Jämför först orter, områden, vardagsliv, tillgänglighet, vinteraktivitet, vård, skolor, community, integritet och långsiktigt värde.",
    },
    {
      number: "02",
      title: "Kontrollera budget och finansiering",
      text:
        "Gör en realistisk beräkning inklusive köpeskilling, köpkostnader, skatter, renovering, möbler, underhåll, bolånevillkor och årliga ägandekostnader.",
    },
    {
      number: "03",
      title: "Låt reservation eller arras kontrolleras",
      text:
        "Skriv inte under ett reservationsavtal eller arras-kontrakt utan granskning av en oberoende advokat. Var uppmärksam på villkor, deadlines, betalningstidpunkter och återbetalning.",
    },
    {
      number: "04",
      title: "Juridisk due diligence",
      text:
        "Kontrollera Nota Simple, ägande, belastningar, skulder, bolån, fastighetsregister, tillstånd, ägarförening, avtal, säljarens behörighet och möjliga begränsningar.",
    },
    {
      number: "05",
      title: "Kommunala och tekniska kontroller",
      text:
        "Låt kommunen kontrollera om byggnation och användning är tillåtna. Kombinera detta med en teknisk besiktning av bostaden, installationerna och tomten.",
    },
    {
      number: "06",
      title: "Notarie, betalning och överlåtelse",
      text:
        "Överlåtelsen sker hos notarien. Därefter följer betalning av skatter, inskrivning i fastighetsregistret, abonnemang, försäkringar och lokal administration.",
    },
  ];

  const legalChecks = [
    "Nota Simple: ägare, belastningar, bolån, utmätningar, servitut och grunduppgifter om bostaden.",
    "Registro de la Propiedad: kontrollera att den juridiska beskrivningen stämmer med det du köper.",
    "Catastro: jämför fastighetsdata, tomt, byggd yta och referens med verkligheten.",
    "Säljare: kontrollera identitet, behörighet, fullmakter, äktenskapsförhållanden eller bolagsstruktur.",
    "Skulder: kontrollera utestående bolån, IBI, ägarförening, abonnemang och eventuella lokala avgifter.",
    "Avtal: kontrollera reservationsavtal, arras, köpvillkor, böter, deadlines och villkor för frånträde.",
    "Tillstånd: kontrollera om bostad, pool, terrasser, tillbyggnader och gästhus är lagliga.",
    "Användning: kontrollera om den tänkta användningen passar detaljplan, ägarförening och lokala regler.",
    "Överlämning: kontrollera nycklar, abonnemang, garantier, inventarier, möbler och eventuella löpande avtal.",
    "Inskrivning: efter överlåtelsen ska ägandet registreras korrekt i Registro de la Propiedad.",
  ];

  const localAlicanteChecks = [
    {
      title: "Kommunala byggregler",
      text:
        "På Costa Blanca Nord skiljer sig byggregler mellan kommuner. I Jávea, Dénia, Benissa, Teulada-Moraira, Calpe och Altea kan regler kring utbyggnader, höjder, tomtgränser, pool, terrasser, parkeringsplatser och renoveringar få olika konsekvenser.",
    },
    {
      title: "Suelo urbano eller suelo no urbanizable",
      text:
        "En bostad på landsbygd kan ha andra begränsningar än en bostad i stadsmiljö. Vid rustika eller lantligt belägna bostäder ska du alltid kontrollera om utbyggnad, uthyrning, renovering, tillgång, vatten, el och septiktank är korrekt ordnade.",
    },
    {
      title: "Kustzon och Ley de Costas",
      text:
        "Bostäder nära havet kan påverkas av kustskyddsregler. Avstånd till kustlinjen, befintlig bebyggelse, renoveringsplaner och möjligheter till utbyggnad måste kontrolleras noggrant.",
    },
    {
      title: "Skyddad natur och landskap",
      text:
        "I eller nära områden som Montgó, Serra Gelada, Peñón de Ifach eller andra skyddade zoner kan extra begränsningar gälla för byggnation, utbyggnad, belysning, tillgång, vegetation eller användning.",
    },
    {
      title: "Turistuthyrning",
      text:
        "Comunitat Valenciana har särskilda regler för viviendas de uso turístico. Utöver regional registrering kan även lokala stadsplaneregler och regler från ägarföreningen vara avgörande.",
    },
    {
      title: "Översvämning, brand och lutning",
      text:
        "Kontrollera vid dalar, barrancos, sluttningar, skogsområden och kustzoner risker som vattenavrinning, översvämning, brand, stödmurar, erosion och möjlighet att försäkra bostaden.",
    },
  ];

  const financialItems = [
    {
      title: "Begagnad bostad: ITP",
      text:
        "Vid köp av en befintlig bostad betalar köparen vanligtvis överlåtelseskatt, Impuesto sobre Transmisiones Patrimoniales. I Comunitat Valenciana räknar man ofta med cirka 10 %, men aktuella nivåer och undantag måste alltid kontrolleras.",
    },
    {
      title: "Nyproduktion: IVA och AJD",
      text:
        "Vid nyproduktion direkt från byggherren gäller normalt IVA i stället för ITP. Dessutom kan AJD, den spanska stämpelskatten, bli aktuell.",
    },
    {
      title: "Notarie och register",
      text:
        "Den notariebaserade överlåtelsen, inskrivning i fastighetsregistret och administrativ hantering medför extra kostnader. Dessa beror på pris, dokument och finansiering.",
    },
    {
      title: "Advokat och teknisk kontroll",
      text:
        "En oberoende advokat och teknisk specialist kostar pengar, men kan förebygga betydligt större risker. Särskilt vid villor, äldre bostäder och ombyggnationer är detta viktigt.",
    },
    {
      title: "Bolån och bankkostnader",
      text:
        "Vid finansiering spelar värdering, bankvillkor, ränta, obligatoriska försäkringar, amorteringsform, kostnader för förtidslösen och valutarisker roll.",
    },
    {
      title: "Årliga kostnader",
      text:
        "Tänk på IBI, sophämtningsavgift, ägarförening, försäkring, underhåll, pool, trädgård, abonnemang, larmsystem, internet, property management och icke-residentskatt.",
    },
  ];

  const communityChecks = [
    "Be om stadgar och interna regler från Comunidad de Propietarios.",
    "Kontrollera protokoll från de senaste mötena.",
    "Kontrollera om planerade arbeten eller extra avgifter är på väg.",
    "Kontrollera säljarens eventuella skulder till ägarföreningen.",
    "Kontrollera om turistuthyrning är tillåten eller begränsad.",
    "Kontrollera regler kring husdjur, grill, luftkonditionering, markiser, fasadändringar och parkering.",
    "Fråga om reservfond, underhållsskick, hissar, pool, trädgård, säkerhet och gemensamma installationer.",
    "Kontrollera att bostaden har korrekt kvot/andel i ägarföreningen.",
  ];

  const technicalChecks = [
    {
      title: "Fukt och ventilation",
      text:
        "Fuktproblem är vanliga i äldre kustbostäder, dåligt ventilerade lägenheter, källare och bostäder som står tomma länge.",
    },
    {
      title: "Tak, fasad och terrasser",
      text:
        "Kontrollera tätskikt, sprickor, avrinning, räcken, takbeläggning och eventuella läckage kring terrasser eller platta tak.",
    },
    {
      title: "El och VVS",
      text:
        "Äldre installationer uppfyller inte alltid moderna krav. Kontrollera kapacitet, säkerhet, rör, tryck, varmvatten och underhållshistorik.",
    },
    {
      title: "Pool och installationer",
      text:
        "Kontrollera pump, filter, rör, läckage, tillstånd, teknikrum och framtida underhållskostnader.",
    },
    {
      title: "Septiktank och avlopp",
      text:
        "Vid lantliga bostäder eller äldre villor är det viktigt att kontrollera om avlopp, septiktank, vattenlagring och dränering är lagliga, säkra och möjliga att underhålla.",
    },
    {
      title: "Tomt och stödmurar",
      text:
        "Vid sluttande tomter bör extra uppmärksamhet läggas på stödmurar, markstabilitet, vattenavrinning, tillgång, trappor, uppfart och underhåll.",
    },
  ];

  const rentalChecks = [
    {
      title: "Regional registrering",
      text:
        "För turistuthyrning i Comunitat Valenciana gäller regionala registrerings- och informationskrav. Annonsen ska bland annat innehålla korrekta uppgifter och registreringsnummer när uthyrning är tillåten.",
    },
    {
      title: "Lokal kompatibilitet",
      text:
        "Kommuner kan ställa ytterligare stadsplanemässiga villkor. En bostad som verkar attraktiv för uthyrning är inte automatiskt lämplig eller tillåten för turistbruk.",
    },
    {
      title: "Ägarförening",
      text:
        "Vid lägenheter och urbanisationer måste det kontrolleras om föreningen tillåter, begränsar eller kan stoppa turistuthyrning enligt gällande regler.",
    },
    {
      title: "Finansiell verklighet",
      text:
        "Uthyrningspotential måste beräknas realistiskt, inklusive beläggning, förvaltning, städning, skatter, licenser, säsongstryck och slitage.",
    },
  ];

  const afterPurchase = [
    "Kontrollera inskrivning i Registro de la Propiedad.",
    "Se till att skatter och kostnader efter överlåtelsen hanteras korrekt.",
    "Sätt IBI, basura och lokala avgifter i rätt namn.",
    "Ordna vatten, el, internet, larm och försäkringar.",
    "Informera ägarföreningen och ställ in autogiro för månadsavgifter.",
    "Planera icke-residentskatt eller andra skattemässiga skyldigheter.",
    "Samla nycklar, larmkoder, garantier, manualer och underhållsavtal.",
    "Förvara tekniska rapporter, Nota Simple, köpehandling och försäkringar säkert.",
  ];

  const faqs = [
    {
      question: "Kan en utlänning köpa bostad i Spanien utan problem?",
      answer:
        "Ja, utlänningar kan köpa fastighet i Spanien. Däremot behövs vanligtvis ett NIE-nummer, korrekt identifiering, juridisk kontroll, skattemässig planering och ofta ett spanskt bankkonto.",
    },
    {
      question: "Är advokat obligatorisk vid köp i Spanien?",
      answer:
        "En advokat är inte alltid lagstadgat obligatorisk, men är starkt rekommenderad för internationella köpare. Advokaten kontrollerar bland annat ägande, belastningar, avtal, tillstånd och risker.",
    },
    {
      question: "Vad är skillnaden mellan Registro och Catastro?",
      answer:
        "Registro de la Propiedad ger juridisk information om ägande och rättigheter. Catastro innehåller administrativa och fastighetsrelaterade uppgifter som yta, användning och referens. Skillnader mellan dem måste förstås före köp.",
    },
    {
      question: "Får jag hyra ut min bostad turistiskt utan vidare?",
      answer:
        "Nej. Turistuthyrning beror på regionala regler, kommunala villkor, bostadstyp, läge och eventuella regler från ägarföreningen.",
    },
    {
      question: "Bör jag låta göra en teknisk besiktning?",
      answer:
        "Vid villor, äldre bostäder, bostäder med pool, sluttande tomter eller ombyggnationer är teknisk kontroll mycket klokt. Många risker syns inte vid en vanlig visning.",
    },
    {
      question: "Vilka lokala regler är viktiga på Costa Blanca Nord?",
      answer:
        "Framför allt stadsplaneregler, turistuthyrning, kustregler, skyddade zoner, ägarförening, parkeringsregler, septiktankar, tillgång, lutning, vattenavrinning samt brand- eller översvämningsrisker.",
    },
  ];

  const officialSources = [
    {
      label: "Agencia Tributaria: IVA eller ITP vid bostadsköp",
      href: "https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
    },
    {
      label: "Agencia Tributaria: Modelo 210 icke-residentskatt",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/todas-gestiones/impuestos-tasas/impuesto-sobre-renta-no-residentes/modelo-210-irnr______a-no-residentes-permanente_/instrucciones.html",
    },
    {
      label: "Registradores de España: fastighetsregister",
      href: "https://sede.registradores.org/site/propiedad?lang=en_EN",
    },
    {
      label: "Notariado: köpa bostad i Spanien",
      href: "https://www.notariado.org/comprar-una-vivienda/",
    },
    {
      label: "Administración.gob.es: notarie och fastighetsregister",
      href: "https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/compraventa-bienes-inmuebles/notarias-registros-propiedad.html",
    },
    {
      label: "Generalitat Valenciana: turistbostäder",
      href: "https://sede.gva.es/es/detall-tramit?id_proc=19207",
    },
    {
      label: "MITECO: energicertifikat för byggnader",
      href: "https://www.miteco.gob.es/es/energia/eficiencia/certificacion-energetica/real-decreto-390-2021.html",
    },
    {
      label: "BOE: Ley de Costas",
      href: "https://www.boe.es/buscar/act.php?id=BOE-A-1988-18762",
    },
    {
      label: "Catastro: referencia catastral",
      href: "https://www.catastro.hacienda.gob.es/es-ES/referencia_catastral.html",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative flex min-h-[82vh] items-center overflow-hidden px-8 py-32">
        <img
          src="https://multimedia.comunitatvalenciana.com/682E658C47A64EC3B22D304139F66CBD/img/D799BA15C2B64079BB4ADACA590DBF80/Dionis_Boutique.jpg?responsive"
          alt="Att köpa bostad i Spanien på Costa Blanca Nord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 mx-auto max-w-6xl text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Komplett köpguide
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Att köpa bostad i Spanien: regler, risker och lokala kontroller på Costa Blanca Nord.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            En utförlig guide för internationella köpare som vill se längre än
            utsikt och pris: från Nota Simple, tillstånd och Catastro till
            turistuthyrning, ägarförening, tekniska risker och lokala regler i
            Alicante.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/sv/services/purchase-safety-report"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Se Purchase Safety Report
            </a>

            <a
              href="/sv/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Boka ett introduktionssamtal
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTIE */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Inte bara att skriva under hos notarien
            </p>

            <h2 className="font-serif text-5xl leading-tight text-[#1e2a3a]">
              Den verkliga köpkontrollen börjar innan du blir förälskad i en bostad.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Att köpa bostad i Spanien skiljer sig från att köpa i Sverige,
              Nederländerna, Tyskland, Belgien eller andra delar av Skandinavien.
              Den juridiska strukturen, kommunala regler, byggregistrering,
              beskattning, turistuthyrning och ägarföreningar fungerar annorlunda.
            </p>

            <p className="mt-6">
              Särskilt på Costa Blanca Nord är lokal kontroll viktig. En villa i
              Jávea, en lägenhet i Calpe, en finca i Benissa, en bostad i Altea
              Hills eller ett hus nära kusten kan alla ha olika kontrollpunkter.
            </p>

            <p className="mt-6">
              Den här guiden ger en praktisk men bred checklista. Den ersätter
              inte rådgivning från advokat, notarie, gestor, skatterådgivare
              eller teknisk specialist, men hjälper dig att bättre förstå vilka
              frågor du bör ställa före köp.
            </p>
          </div>
        </div>
      </section>

      {/* TOP CHECKS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vad ska du vara uppmärksam på?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Sex kontroller som nästan varje köpare på Costa Blanca Nord behöver.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {topChecks.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white p-9 shadow-sm">
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

      {/* PROCESS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Köpprocess
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Från första orientering till överlåtelse hos notarien.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.number} className="border-l border-[#c8a063]/30 pl-6">
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {step.number}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
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

      {/* LEGAL CHECKS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Juridisk granskning
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Vad måste kontrolleras innan du skriver under?
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-white/80">
            Nota Simple är viktig, men inte tillräcklig. Ett tryggt köp kräver
            en kombination av registerinformation, kommunal kontroll, teknisk
            besiktning, avtalsgranskning och förståelse för ägarföreningen.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {legalChecks.map((check) => (
              <div key={check} className="rounded-2xl bg-white/8 p-5">
                <p className="leading-relaxed text-white/80">• {check}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL ALICANTE CHECKS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Lokala regler i Alicante
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Samma typ av bostad kan ha olika risker beroende på kommun.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Costa Blanca Nord ligger i Alicante-provinsen, men många praktiska
              regler påverkas lokalt av kommunen, detaljplaner, urbanisationer,
              kustskydd och ägarföreningar. Kontrollera därför alltid den
              specifika platsen, inte bara bostaden.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {localAlicanteChecks.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white p-9 shadow-sm">
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

      {/* COSTS */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Ekonomiska skyldigheter
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Förstå de verkliga kostnaderna för att köpa och äga.
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
              <p>
                Köpeskillingen är bara en del. Vid köp i Spanien behöver du även
                räkna med skatter, notarie, register, advokat, bolån, tekniska
                kontroller och administrativa kostnader.
              </p>

              <p>
                Därefter finns årliga kostnader: IBI, basura, försäkringar,
                ägarförening, underhåll, abonnemang, icke-residentskatt och
                eventuellt property management.
              </p>

              <p>
                Vid bostäder i högre prisklasser, flera fastigheter,
                uthyrningsplaner eller internationella skattefrågor är rådgivning
                från en skatterådgivare viktig.
              </p>
            </div>
          </div>

          <img
            src="https://orangevillas.com/media/images/properties/thumbnails/105635_xl.jpg"
            alt="Ekonomisk vägledning vid bostadsköp i Spanien"
            className="h-[560px] w-full rounded-[32px] object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {financialItems.map((item) => (
            <div key={item.title} className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                {item.title}
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-[#efe7dc] p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Comunidad de Propietarios
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            En vacker bostad kan ändå vara fel om ägarföreningen inte passar.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-700">
            Vid lägenheter, penthouses, townhouses och urbanisationer bestämmer
            ägarföreningen ofta mer än köpare förväntar sig. Det kan gälla
            månadsavgifter, regler, underhåll, uthyrning, husdjur, renoveringar,
            parkering och gemensamma faciliteter.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {communityChecks.map((check) => (
              <div key={check} className="rounded-2xl bg-white/70 p-5">
                <p className="leading-relaxed text-stone-700">• {check}</p>
              </div>
            ))}
          </div>

          <a
            href="/sv/guides/homeowners-association-spain"
            className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
          >
            Läs mer om ägarföreningar
          </a>
        </div>
      </section>

      {/* TOURIST RENTAL */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Turistuthyrning
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Uthyrningspotential är inte en garanti för att uthyrning är tillåten.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Många internationella köpare räknar med uthyrningsintäkter i sin
              ekonomiska planering. Det kan vara möjligt, men turistuthyrning
              måste kontrolleras före köp. Regionala regler, kommunal
              kompatibilitet och ägarföreningen kan alla påverka.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {rentalChecks.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white p-8 shadow-sm">
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

      {/* TECHNICAL CHECKS */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <img
            src="/images/legal.png"
            alt="Teknisk kontroll vid köp av bostad i Spanien"
            className="h-[560px] w-full rounded-[32px] object-cover shadow-xl"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Teknisk kontroll
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Många köprisker syns inte under en vanlig visning.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              En solig terrass, fina möbler och havsutsikt säger lite om det
              tekniska skicket. Särskilt vid äldre villor, ombyggda bostäder,
              bostäder med pool, sluttande tomter eller lantligt läge är teknisk
              kontroll klokt.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Kombinera den tekniska kontrollen med juridisk och kommunal due
              diligence. Ett tekniskt bra hus kan ha juridiska problem, och en
              juridiskt korrekt bostad kan bli tekniskt dyr.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technicalChecks.map((item) => (
            <div key={item.title} className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                {item.title}
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ENERGY */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-white p-12 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Energicertifikat och framtida renoveringar
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Energiprestanda blir allt viktigare vid försäljning, uthyrning och finansiering.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
            <p>
              Spanien har ett obligatoriskt energicertifikat för befintliga
              byggnader eller delar av byggnader som säljs eller hyrs ut till en
              ny hyresgäst. Även turistbostäder omfattas av dessa regler när de
              hyrs ut.
            </p>

            <p>
              För köpare betyder detta att äldre bostäder kräver extra
              uppmärksamhet. Dålig isolering, gamla fönster, äldre luftkonditionering,
              bristande ventilation eller låg energiklass kan senare leda till
              investeringar.
            </p>

            <p>
              Fråga därför inte bara om certifikatet finns, utan också vad
              resultatet betyder för komfort, renoveringsbudget och framtida
              försäljningsbarhet.
            </p>
          </div>
        </div>
      </section>

      {/* AFTER PURCHASE */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Efter köpet
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Köpet slutar inte vid nyckelöverlämningen.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-white/80">
            Efter notarien måste dokument, registreringar, betalningar, skatter,
            försäkringar, abonnemang och underhåll organiseras korrekt. Just
            därför arbetar Nordic Move Spain med en säker kundportal där viktiga
            dokument och nästa steg samlas överskådligt.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {afterPurchase.map((item) => (
              <div key={item} className="rounded-2xl bg-white/8 p-5">
                <p className="leading-relaxed text-white/80">• {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Nordic Move Spain
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Vi ersätter inte advokat eller teknisk specialist. Vi ser till att rätt frågor kommer upp.
            </h2>
          </div>

          <div className="rounded-[36px] bg-white p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-stone-600">
              Nordic Move Spain hjälper internationella köpare att strukturera
              sin köpresa. Vi hjälper först till med rätt region och bostadsmiljö,
              därefter med överblick över dokument, risker, specialister och
              nästa steg.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              För juridisk, skattemässig, teknisk och bolånerelaterad bedömning
              arbetar vi med oberoende lokala specialister. Deras roll är att
              bedöma; vår roll är att göra processen överskådlig, begriplig och
              välorganiserad.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/sv/services/purchase-safety-report"
                className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Se Purchase Safety Report
              </a>

              <a
                href="/sv/services/secure-client-portal"
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Säker kundportal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vanliga frågor
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Frågor som köpare ofta ställer för sent.
          </h2>

          <div className="mt-10 grid gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[28px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {faq.question}
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICIAL SOURCES */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Officiella källor
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Den här guiden bygger på allmän köppraxis och officiella spanska
            källor. Regler ändras och kan skilja sig mellan kommuner. Låt alltid
            din personliga situation och den specifika bostaden kontrolleras av
            oberoende advokat, skatterådgivare, gestor och teknisk specialist.
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

      {/* FINAL CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-stone-900 p-14 text-center text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">
            Köp med förtroende
          </p>

          <h2 className="font-serif text-5xl leading-tight">
            Överväger du en bostad på Costa Blanca Nord?
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-white/80">
            Vi hjälper dig först att välja rätt miljö, därefter att granska
            bostaden kritiskt och sedan att gå igenom köpprocessen med mer
            överblick, struktur och trygghet.
          </p>

          <a
            href="/sv/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-stone-900"
          >
            Boka en personlig introduktion
          </a>
        </div>
      </section>
    </main>
  );
}
