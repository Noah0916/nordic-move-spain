export const metadata = {
  title: "Complete gids woning kopen in Spanje | Costa Blanca Noord",
  description:
    "Uitgebreide aankoopgids voor internationale kopers aan de Costa Blanca Noord en in de provincie Alicante: juridische controles, lokale regels, ITP/IVA, toeristische verhuur, eigenaarsvereniging, energiecertificaat, technische checks en aankooprisico’s.",
  openGraph: {
    title: "Complete gids woning kopen in Spanje | Nordic Move Spain",
    description:
      "Wat internationale kopers moeten controleren vóór aankoop aan de Costa Blanca Noord: documenten, lokale regels, juridische risico’s, bouwkundige aandachtspunten, kosten en verhuurregels.",
    type: "website",
  },
};

export default function BuyingProcessPage() {
  const topChecks = [
    {
      title: "Juridische eigendom",
      text:
        "Controleer wie juridisch eigenaar is, of er hypotheken, beslagen, schulden, erfdienstbaarheden of andere lasten op de woning rusten en of de verkoper daadwerkelijk bevoegd is om te verkopen.",
    },
    {
      title: "Stedenbouwkundige legaliteit",
      text:
        "Controleer bij de gemeente of de woning, het zwembad, terrassen, uitbouwen, gastenverblijven, pergola’s en andere werken legaal zijn gebouwd en correct zijn geregistreerd.",
    },
    {
      title: "Lokale regels per gemeente",
      text:
        "Regels kunnen verschillen tussen Jávea, Dénia, Moraira, Benissa, Altea, Calpe en andere plaatsen. Denk aan toeristische verhuur, renovaties, bestemmingsplannen, beschermde zones en parkeerregels.",
    },
    {
      title: "Technische staat",
      text:
        "Laat niet alleen naar uitstraling kijken, maar ook naar vocht, scheuren, dak, installaties, elektriciteit, leidingen, zwembad, septic tank, keermuren, helling en onderhoudsrisico’s.",
    },
    {
      title: "Gemeenschap en verhuur",
      text:
        "Controleer de statuten, regels, notulen, openstaande bijdragen, gemeenschapskosten en eventuele beperkingen op toeristische verhuur of renovaties.",
    },
    {
      title: "Werkelijke kosten",
      text:
        "Bereken naast de koopprijs ook belastingen, notaris, register, advocaat, hypotheek, verzekeringen, IBI, afvalstoffenheffing, onderhoud, gemeenschap en niet-residentenbelasting.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Bepaal eerst de juiste regio",
      text:
        "Start niet alleen met woningen bekijken. Vergelijk eerst plaatsen, wijken, dagelijks leven, bereikbaarheid, winteractiviteit, zorg, scholen, community, privacy en langetermijnwaarde.",
    },
    {
      number: "02",
      title: "Controleer budget en financiering",
      text:
        "Maak een realistische berekening inclusief koopprijs, aankoopkosten, belastingen, renovatie, meubels, onderhoud, hypotheekvoorwaarden en jaarlijkse eigendomskosten.",
    },
    {
      number: "03",
      title: "Laat reservering of arras controleren",
      text:
        "Onderteken geen reserveringsovereenkomst of arras-contract zonder controle door een onafhankelijke advocaat. Let op ontbindende voorwaarden, deadlines, betalingsmomenten en terugbetaling.",
    },
    {
      number: "04",
      title: "Juridische due diligence",
      text:
        "Controleer Nota Simple, eigendom, lasten, schulden, hypotheek, kadaster, vergunningen, gemeenschap, contracten, bevoegdheden van de verkoper en mogelijke beperkingen.",
    },
    {
      number: "05",
      title: "Gemeentelijke en technische controles",
      text:
        "Laat bij de gemeente controleren of bouwwerken en gebruik toegestaan zijn. Combineer dit met een technische inspectie van de woning, installaties en het perceel.",
    },
    {
      number: "06",
      title: "Notaris, betaling en overdracht",
      text:
        "De overdracht vindt plaats bij de notaris. Daarna volgen betaling van belastingen, inschrijving in het eigendomsregister, nutsvoorzieningen, verzekeringen en lokale administratie.",
    },
  ];

  const legalChecks = [
    "Nota Simple: eigenaar, lasten, hypotheken, beslagen, erfdienstbaarheden en basisgegevens van de woning.",
    "Registro de la Propiedad: controleer of de juridische beschrijving overeenkomt met wat u koopt.",
    "Catastro: vergelijk kadastrale gegevens, perceel, bebouwde oppervlakte en referentie met de werkelijkheid.",
    "Verkoper: controleer identiteit, bevoegdheid, volmachten, huwelijksgoederenregime of vennootschapsstructuur.",
    "Schulden: controleer openstaande hypotheek, IBI, gemeenschap, nutsvoorzieningen en eventuele lokale heffingen.",
    "Contracten: controleer reserveringscontract, arras, koopvoorwaarden, boetes, deadlines en ontbindende voorwaarden.",
    "Vergunningen: controleer of woning, zwembad, terrassen, uitbouwen en gastenverblijven legaal zijn.",
    "Gebruik: controleer of het beoogde gebruik past bij bestemming, gemeenschap en lokale regels.",
    "Oplevering: controleer sleutels, nutsvoorzieningen, garanties, inventaris, meubels en eventuele lopende contracten.",
    "Inschrijving: na overdracht moet de eigendom correct worden ingeschreven bij het Registro de la Propiedad.",
  ];

  const localAlicanteChecks = [
    {
      title: "Gemeentelijke bouwregels",
      text:
        "Aan de Costa Blanca Noord verschillen bouwregels per gemeente. In Jávea, Dénia, Benissa, Teulada-Moraira, Calpe en Altea kunnen regels rond uitbreidingen, hoogtes, perceelgrenzen, zwembad, terrassen, parkeerplaatsen en renovaties anders uitpakken.",
    },
    {
      title: "Suelo urbano of suelo no urbanizable",
      text:
        "Een woning in landelijk gebied kan andere beperkingen hebben dan een woning in stedelijk gebied. Controleer bij rustieke of landelijk gelegen woningen altijd of uitbreiding, verhuur, verbouwing, toegang, water, elektriciteit en septic tank correct geregeld zijn.",
    },
    {
      title: "Kustzone en Ley de Costas",
      text:
        "Woningen dicht bij de zee kunnen te maken krijgen met kustbeschermingsregels. Afstand tot de kustlijn, bestaande bebouwing, renovatieplannen en uitbreidingsmogelijkheden moeten zorgvuldig worden gecontroleerd.",
    },
    {
      title: "Beschermde natuur en landschap",
      text:
        "In of nabij gebieden zoals Montgó, Serra Gelada, Peñón de Ifach of andere beschermde zones kunnen extra beperkingen gelden voor bouw, uitbreiding, licht, toegang, vegetatie of gebruik.",
    },
    {
      title: "Toeristische verhuur",
      text:
        "De Comunitat Valenciana heeft specifieke regels voor viviendas de uso turístico. Naast regionale registratie kunnen ook lokale stedenbouwkundige regels en regels van de eigenaarsvereniging bepalend zijn.",
    },
    {
      title: "Overstroming, brand en helling",
      text:
        "Controleer bij valleien, barrancos, hellingen, bosrijke zones en kustgebieden risico’s zoals waterafvoer, overstroming, brand, keermuren, erosie en verzekerbaarheid.",
    },
  ];

  const financialItems = [
    {
      title: "Bestaande woning: ITP",
      text:
        "Bij een bestaande woning betaalt de koper doorgaans overdrachtsbelasting, Impuesto sobre Transmisiones Patrimoniales. In de Comunitat Valenciana wordt vaak met circa 10% gerekend, maar tarieven en uitzonderingen moeten altijd actueel worden gecontroleerd.",
    },
    {
      title: "Nieuwbouw: IVA en AJD",
      text:
        "Bij nieuwbouw rechtstreeks van de ontwikkelaar geldt meestal IVA in plaats van ITP. Daarnaast kan AJD, de Spaanse zegelbelasting, van toepassing zijn.",
    },
    {
      title: "Notaris en register",
      text:
        "De notariële overdracht, inschrijving in het eigendomsregister en administratieve afhandeling brengen extra kosten met zich mee. Deze kosten hangen af van prijs, documenten en financiering.",
    },
    {
      title: "Advocaat en technische controle",
      text:
        "Een onafhankelijke advocaat en technische specialist kosten geld, maar kunnen veel grotere risico’s voorkomen. Zeker bij villa’s, oudere woningen en verbouwingen is dit essentieel.",
    },
    {
      title: "Hypotheek en bankkosten",
      text:
        "Bij financiering spelen taxatie, bankvoorwaarden, rente, verplichte verzekeringen, aflossingsvorm, kosten voor vervroegde aflossing en wisselkoersrisico’s een rol.",
    },
    {
      title: "Jaarlijkse kosten",
      text:
        "Denk aan IBI, afvalstoffenheffing, gemeenschap, verzekering, onderhoud, zwembad, tuin, nutsvoorzieningen, alarmsysteem, internet, property management en niet-residentenbelasting.",
    },
  ];

  const communityChecks = [
    "Vraag de statuten en interne regels van de Comunidad de Propietarios op.",
    "Controleer de notulen van recente vergaderingen.",
    "Controleer of er geplande werken of speciale bijdragen aankomen.",
    "Controleer openstaande schulden van de verkoper aan de gemeenschap.",
    "Controleer of toeristische verhuur is toegestaan of beperkt.",
    "Controleer regels rond huisdieren, barbecue, airco, zonneschermen, gevelwijzigingen en parkeren.",
    "Vraag naar reservefonds, onderhoudsstaat, liften, zwembad, tuin, beveiliging en gemeenschappelijke installaties.",
    "Controleer of de woning een correcte quota/participatie in de gemeenschap heeft.",
  ];

  const technicalChecks = [
    {
      title: "Vocht en ventilatie",
      text:
        "Vochtproblemen komen vaak voor bij oudere kustwoningen, slecht geventileerde appartementen, kelders en woningen die lang leegstaan.",
    },
    {
      title: "Dak, gevel en terrassen",
      text:
        "Controleer waterdichting, scheuren, afwatering, balustrades, dakbedekking en eventuele lekkages rond terrassen of platte daken.",
    },
    {
      title: "Elektriciteit en loodgieterij",
      text:
        "Oudere installaties voldoen niet altijd aan moderne eisen. Controleer capaciteit, veiligheid, leidingen, druk, warm water en onderhoudshistorie.",
    },
    {
      title: "Zwembad en installaties",
      text:
        "Controleer pomp, filter, leidingen, lekkage, vergunning, technische ruimte en toekomstige onderhoudskosten.",
    },
    {
      title: "Septic tank en afvoer",
      text:
        "Bij landelijke woningen of oudere villa’s is het belangrijk te controleren of riolering, septic tank, wateropslag en afvoer legaal, veilig en onderhoudbaar zijn.",
    },
    {
      title: "Perceel en keermuren",
      text:
        "Bij hellende percelen moet extra worden gekeken naar keermuren, grondstabiliteit, afwatering, toegang, trappen, oprit en onderhoud.",
    },
  ];

  const rentalChecks = [
    {
      title: "Regionale registratie",
      text:
        "Voor toeristische verhuur in de Comunitat Valenciana gelden regionale registratie- en informatieplichten. De advertentie moet onder meer correcte gegevens en het registratienummer bevatten wanneer verhuur is toegestaan.",
    },
    {
      title: "Lokale compatibiliteit",
      text:
        "Gemeenten kunnen aanvullende stedenbouwkundige voorwaarden stellen. Een woning die aantrekkelijk lijkt voor verhuur is niet automatisch geschikt of toegestaan voor toeristisch gebruik.",
    },
    {
      title: "Eigenaarsvereniging",
      text:
        "Bij appartementen en urbanisaties moet worden gecontroleerd of de gemeenschap toeristische verhuur toestaat, beperkt of kan blokkeren volgens geldende regels.",
    },
    {
      title: "Financiële realiteit",
      text:
        "Verhuurpotentieel moet realistisch worden berekend, inclusief bezettingsgraad, beheer, schoonmaak, belastingen, licenties, seizoensdruk en slijtage.",
    },
  ];

  const afterPurchase = [
    "Inschrijving bij het Registro de la Propiedad controleren.",
    "Belastingen en kosten na overdracht correct laten afwikkelen.",
    "IBI, basura en lokale heffingen op naam zetten.",
    "Water, elektriciteit, internet, alarm en verzekeringen regelen.",
    "Gemeenschap informeren en bankmachtiging voor maandelijkse kosten instellen.",
    "Niet-residentenbelasting of fiscale verplichtingen plannen.",
    "Sleutels, alarmcodes, garanties, handleidingen en onderhoudscontracten verzamelen.",
    "Technische rapporten, Nota Simple, koopakte en verzekeringen veilig bewaren.",
  ];

  const faqs = [
    {
      question: "Kan een buitenlander zonder problemen een woning kopen in Spanje?",
      answer:
        "Ja, buitenlanders kunnen in Spanje vastgoed kopen. Wel zijn een NIE-nummer, correcte identificatie, juridische controle, fiscale planning en vaak een Spaanse bankrekening nodig.",
    },
    {
      question: "Is een advocaat verplicht bij aankoop in Spanje?",
      answer:
        "Een advocaat is niet altijd wettelijk verplicht, maar voor internationale kopers sterk aan te raden. De advocaat controleert onder meer eigendom, lasten, contracten, vergunningen en risico’s.",
    },
    {
      question: "Wat is het verschil tussen Registro en Catastro?",
      answer:
        "Het Registro de la Propiedad geeft juridische informatie over eigendom en rechten. Het Catastro bevat administratieve en kadastrale gegevens zoals oppervlakte, gebruik en referentie. Verschillen tussen beide moeten vóór aankoop worden begrepen.",
    },
    {
      question: "Mag ik mijn woning zomaar toeristisch verhuren?",
      answer:
        "Nee. Toeristische verhuur hangt af van regionale regels, gemeentelijke voorwaarden, het type woning, de locatie en eventuele regels van de eigenaarsvereniging.",
    },
    {
      question: "Moet ik de woning technisch laten keuren?",
      answer:
        "Bij villa’s, oudere woningen, woningen met zwembad, hellende percelen of verbouwingen is een technische controle zeer verstandig. Veel risico’s zijn tijdens een gewone bezichtiging niet zichtbaar.",
    },
    {
      question: "Welke lokale regels zijn belangrijk aan de Costa Blanca Noord?",
      answer:
        "Vooral stedenbouwkundige regels, toeristische verhuur, kustregels, beschermde zones, gemeenschap, parkeerregels, septic tanks, toegang, helling, waterafvoer en brand- of overstromingsrisico’s.",
    },
  ];

  const officialSources = [
    {
      label: "Agencia Tributaria: IVA of ITP bij aankoop woning",
      href: "https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
    },
    {
      label: "Agencia Tributaria: Modelo 210 niet-residentenbelasting",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/todas-gestiones/impuestos-tasas/impuesto-sobre-renta-no-residentes/modelo-210-irnr______a-no-residentes-permanente_/instrucciones.html",
    },
    {
      label: "Registradores de España: Land Registry",
      href: "https://sede.registradores.org/site/propiedad?lang=en_EN",
    },
    {
      label: "Notariado: woning kopen in Spanje",
      href: "https://www.notariado.org/comprar-una-vivienda/",
    },
    {
      label: "Administración.gob.es: Notaris en eigendomsregister",
      href: "https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/compraventa-bienes-inmuebles/notarias-registros-propiedad.html",
    },
    {
      label: "Generalitat Valenciana: toeristische woningen",
      href: "https://sede.gva.es/es/detall-tramit?id_proc=19207",
    },
    {
      label: "MITECO: energiecertificaat gebouwen",
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
          alt="Een woning kopen in Spanje aan de Costa Blanca Noord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 mx-auto max-w-6xl text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Complete aankoopgids
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Een woning kopen in Spanje: regels, risico’s en lokale controles aan de Costa Blanca Noord.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            Een uitgebreide gids voor internationale kopers die verder willen
            kijken dan uitzicht en prijs: van Nota Simple, vergunningen en
            Catastro tot toeristische verhuur, gemeenschap, technische risico’s
            en lokale regels in Alicante.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/nl/services/purchase-safety-report"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Purchase Safety Report bekijken
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

      {/* INTRODUCTIE */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Niet alleen tekenen bij de notaris
            </p>

            <h2 className="font-serif text-5xl leading-tight text-[#1e2a3a]">
              De echte aankoopcontrole begint vóórdat u verliefd wordt op een woning.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Een woning kopen in Spanje is anders dan kopen in Nederland,
              Duitsland, België of Scandinavië. De juridische structuur,
              gemeentelijke regels, bouwregistratie, belastingheffing,
              toeristische verhuur en eigenaarsverenigingen werken anders.
            </p>

            <p className="mt-6">
              Zeker aan de Costa Blanca Noord is lokale controle belangrijk. Een
              villa in Jávea, een appartement in Calpe, een finca in Benissa, een
              woning in Altea Hills of een huis dicht bij de kust kunnen ieder
              andere aandachtspunten hebben.
            </p>

            <p className="mt-6">
              Deze gids geeft een praktische maar brede checklist. Hij vervangt
              geen advies van een advocaat, notaris, gestor, fiscalist of
              technisch specialist, maar helpt u beter begrijpen welke vragen u
              vóór aankoop moet stellen.
            </p>
          </div>
        </div>
      </section>

      {/* TOP CHECKS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Waar moet u op letten?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Zes controles die bijna elke koper aan de Costa Blanca Noord nodig heeft.
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
            Aankoopproces
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Van eerste oriëntatie tot overdracht bij de notaris.
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
            Juridisch onderzoek
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Wat moet er worden gecontroleerd voordat u tekent?
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-white/80">
            De Nota Simple is belangrijk, maar niet genoeg. Een veilige aankoop
            vraagt om combinatie van registerinformatie, gemeentelijke controle,
            technische inspectie, contractcontrole en inzicht in de gemeenschap.
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
              Lokale regels in Alicante
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Dezelfde woning kan per gemeente andere risico’s hebben.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              De Costa Blanca Noord valt binnen de provincie Alicante, maar veel
              praktische regels worden lokaal beïnvloed door de gemeente,
              bestemmingsplannen, urbanisaties, kustbescherming en
              eigenaarsverenigingen. Controleer daarom altijd de specifieke
              locatie, niet alleen de woning zelf.
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
              Financiële verplichtingen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Begrijp de werkelijke kosten van kopen én bezitten.
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
              <p>
                De koopprijs is slechts één onderdeel. Bij aankoop in Spanje moet
                u ook rekening houden met belastingen, notaris, register,
                advocaat, hypotheek, technische controles en administratieve
                kosten.
              </p>

              <p>
                Daarna blijven jaarlijkse kosten bestaan: IBI, basura,
                verzekeringen, gemeenschap, onderhoud, nutsvoorzieningen,
                niet-residentenbelasting en eventueel property management.
              </p>

              <p>
                Bij woningen boven een bepaald segment, bij meerdere
                eigendommen, verhuurplannen of internationale fiscale situaties
                is advies van een fiscalist belangrijk.
              </p>
            </div>
          </div>

          <img
            src="https://orangevillas.com/media/images/properties/thumbnails/105635_xl.jpg"
            alt="Financiële begeleiding bij het kopen van een woning in Spanje"
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
            Een mooie woning kan alsnog verkeerd zijn als de gemeenschap niet past.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-700">
            Bij appartementen, penthouses, townhouses en urbanisaties bepaalt de
            eigenaarsvereniging vaak veel meer dan kopers verwachten. Denk aan
            maandelijkse kosten, regels, onderhoud, verhuur, huisdieren,
            renovaties, parkeren en gemeenschappelijke voorzieningen.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {communityChecks.map((check) => (
              <div key={check} className="rounded-2xl bg-white/70 p-5">
                <p className="leading-relaxed text-stone-700">• {check}</p>
              </div>
            ))}
          </div>

          <a
            href="/nl/guides/homeowners-association-spain"
            className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
          >
            Lees meer over eigenaarsverenigingen
          </a>
        </div>
      </section>

      {/* TOURIST RENTAL */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Toeristische verhuur
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Verhuurpotentieel is geen garantie dat verhuur is toegestaan.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Veel internationale kopers nemen verhuuropbrengsten mee in hun
              financiële planning. Dat kan, maar toeristische verhuur moet vóór
              aankoop worden gecontroleerd. Regionale regels, gemeentelijke
              compatibiliteit en de eigenaarsvereniging kunnen allemaal invloed
              hebben.
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
            alt="Technische controle bij aankoop woning in Spanje"
            className="h-[560px] w-full rounded-[32px] object-cover shadow-xl"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Technische controle
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Veel aankooprisico’s zijn tijdens een bezichtiging niet zichtbaar.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Een zonnig terras, mooie meubels en zeezicht zeggen weinig over de
              technische staat. Zeker bij oudere villa’s, verbouwde woningen,
              woningen met zwembad, hellende percelen of landelijke ligging is
              een technische controle verstandig.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Combineer de technische controle met juridische en gemeentelijke
              due diligence. Een technisch goed huis kan juridisch problemen
              hebben, en een juridisch nette woning kan technisch duur worden.
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
            Energiecertificaat en toekomstige renovaties
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Energieprestaties worden steeds belangrijker bij verkoop, verhuur en financiering.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
            <p>
              Spanje kent een verplicht energiecertificaat voor bestaande
              gebouwen of delen van gebouwen die worden verkocht of verhuurd aan
              een nieuwe huurder. Ook toeristische woningen vallen onder deze
              regels wanneer zij worden verhuurd.
            </p>

            <p>
              Voor kopers betekent dit dat oudere woningen extra aandacht vragen.
              Slechte isolatie, oude ramen, verouderde airco, onvoldoende
              ventilatie of een lage energieklasse kunnen later leiden tot
              investeringen.
            </p>

            <p>
              Vraag daarom niet alleen of het certificaat aanwezig is, maar ook
              wat de score betekent voor comfort, renovatiebudget en toekomstige
              verkoopbaarheid.
            </p>
          </div>
        </div>
      </section>

      {/* AFTER PURCHASE */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Na de aankoop
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            De aankoop stopt niet bij de sleuteloverdracht.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-white/80">
            Na de notaris moeten documenten, inschrijvingen, betalingen,
            belastingen, verzekeringen, nutsvoorzieningen en onderhoud goed
            worden georganiseerd. Juist daarom werkt Nordic Move Spain met een
            beveiligd klantenportaal waarin belangrijke documenten en
            vervolgstappen overzichtelijk worden verzameld.
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
              Wij vervangen geen advocaat of technisch specialist. Wij zorgen dat de juiste vragen op tafel komen.
            </h2>
          </div>

          <div className="rounded-[36px] bg-white p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-stone-600">
              Nordic Move Spain begeleidt internationale kopers bij het
              structureren van hun aankooproute. Wij helpen eerst met de juiste
              regio en woningomgeving, daarna met overzicht over documenten,
              risico’s, specialisten en vervolgstappen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Voor juridische, fiscale, technische en hypothecaire beoordeling
              werken wij met onafhankelijke lokale professionals. Hun rol is om
              te beoordelen; onze rol is om het proces overzichtelijk,
              begrijpelijk en goed georganiseerd te maken.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/nl/services/purchase-safety-report"
                className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Purchase Safety Report bekijken
              </a>

              <a
                href="/nl/services/secure-client-portal"
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Beveiligd klantenportaal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Veelgestelde vragen
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Vragen die kopers vaak te laat stellen.
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
            Officiële bronnen
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Deze gids is gebaseerd op algemene aankooppraktijk en officiële
            Spaanse bronnen. Regels veranderen en kunnen per gemeente verschillen.
            Laat uw persoonlijke situatie en de specifieke woning altijd
            controleren door een onafhankelijke advocaat, fiscalist, gestor en
            technisch specialist.
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
            Met vertrouwen kopen
          </p>

          <h2 className="font-serif text-5xl leading-tight">
            Overweegt u een woning aan de Costa Blanca Noord?
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-white/80">
            Wij helpen u eerst de juiste omgeving te kiezen, daarna de woning
            kritisch te beoordelen en vervolgens het aankoopproces met meer
            overzicht, structuur en vertrouwen te doorlopen.
          </p>

          <a
            href="/nl/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-stone-900"
          >
            Plan een persoonlijke kennismaking
          </a>
        </div>
      </section>
    </main>
  );
}
