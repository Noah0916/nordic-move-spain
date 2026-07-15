export const metadata = {
  title:
    "Vanliga misstag när du köper bostad i Spanien | Costa Blanca Nord",
  description:
    "En fördjupad svensk guide om vanliga misstag vid bostadsköp i Spanien. Läs om portaler, köpkostnader, advokat, Nota Simple, Catastro, ägarförening, turistuthyrning, bolån, Euribor, årliga kostnader, platsval och återförsäljningsvärde på Costa Blanca Nord.",
  keywords: [
    "vanliga misstag köpa bostad Spanien",
    "köpa bostad Costa Blanca Nord",
    "köpa hus Spanien risker",
    "köpa lägenhet Spanien misstag",
    "Nota Simple Spanien",
    "Catastro Spanien",
    "Comunidad de Propietarios Spanien",
    "turistuthyrning Valencia regler",
    "bolån Spanien icke resident",
    "Costa Blanca North property mistakes",
    "Nordic Move Spain",
  ],
  alternates: {
    canonical: "/sv/guides/common-mistakes-buying-property-spain",
    languages: {
      en: "/guides/common-mistakes-buying-property-spain",
      nl: "/nl/guides/common-mistakes-buying-property-spain",
      de: "/de/guides/common-mistakes-buying-property-spain",
      sv: "/sv/guides/common-mistakes-buying-property-spain",
    },
  },
  openGraph: {
    title:
      "Vanliga misstag när du köper bostad i Spanien | Nordic Move Spain",
    description:
      "Fördjupad svensk guide för internationella köpare på Costa Blanca Nord: portaler, kostnader, juridik, ägarförening, uthyrning, bolån, Euribor, årliga kostnader och tryggare köp.",
    type: "article",
    locale: "sv_SE",
    images: [
      {
        url: "/images/practical-guidance.png",
        width: 1200,
        height: 630,
        alt: "Vanliga misstag när du köper bostad i Spanien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanliga misstag när du köper bostad i Spanien",
    description:
      "Vad svenska och internationella köpare bör kontrollera före köp på Costa Blanca Nord.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startsida",
      item: "https://www.nordicmovespain.com/sv",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guider",
      item: "https://www.nordicmovespain.com/sv/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Vanliga misstag när du köper bostad i Spanien",
      item:
        "https://www.nordicmovespain.com/sv/guides/common-mistakes-buying-property-spain",
    },
  ],
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vanliga misstag när du köper bostad i Spanien",
  description:
    "En svensk guide om de vanligaste misstagen internationella köpare gör före bostadsköp på Costa Blanca Nord.",
  inLanguage: "sv-SE",
  author: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "https://www.nordicmovespain.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "https://www.nordicmovespain.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.nordicmovespain.com/sv/guides/common-mistakes-buying-property-spain",
  },
  about: [
    "köpa bostad i Spanien",
    "Costa Blanca Nord",
    "Nota Simple",
    "Catastro",
    "Comunidad de Propietarios",
    "turistuthyrning",
    "spanska bolån",
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vilket är det vanligaste misstaget vid bostadsköp i Spanien?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ett av de vanligaste misstagen är att börja med bostadsannonser i stället för att först välja rätt område, kontrollera budgeten, förstå köpprocessen och låta juridiska och tekniska kontroller göras innan man binder sig.",
      },
    },
    {
      "@type": "Question",
      name: "Behöver jag en oberoende advokat när jag köper bostad i Spanien?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ja, för internationella köpare är en oberoende advokat starkt rekommenderad. Advokaten bör kontrollera ägande, skulder, bolån, bygglegalitet, licenser, köpeavtal, betalningsvillkor och juridiska risker.",
      },
    },
    {
      "@type": "Question",
      name: "Får jag alltid hyra ut min spanska bostad som semesterbostad?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Nej. Turistuthyrning beror på regionala regler, kommunala regler, bostadstyp, registrering och eventuella begränsningar från ägarföreningen. Om uthyrning är viktig för kalkylen bör detta kontrolleras före köp.",
      },
    },
    {
      "@type": "Question",
      name: "Vilka kostnader glömmer köpare ofta?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Köpare glömmer ofta skatter, notarie, fastighetsregister, advokat, bankkostnader, värdering, försäkring, IBI, sophämtning, ägarförening, pool, trädgård, reparationer, förvaltning och icke-residentskatt.",
      },
    },
    {
      "@type": "Question",
      name: "Vad bör kontrolleras före första budet?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Före ett seriöst bud bör köparen kontrollera budget, område, Nota Simple, Catastro, juridisk status, eventuella skulder, bygglegalitet, community-regler, uthyrningsmöjligheter, tekniskt skick och årliga kostnader.",
      },
    },
  ],
};

export default function CommonMistakesBuyingPropertySpainPage() {
  const quickFacts = [
    {
      title: "Portaler visar inte allt",
      text:
        "Idealista, Fotocasa och andra portaler är användbara, men de visar inte alltid aktuell status, dubbla annonser, reserverade objekt, lokala risker eller verklig efterfrågan.",
    },
    {
      title: "Köpkostnader kommer ovanpå priset",
      text:
        "Utöver köpeskillingen behöver köpare räkna med skatter, notarie, register, juridisk hjälp, bankkostnader och ibland bolåne- och värderingskostnader.",
    },
    {
      title: "Turistuthyrning är inte automatisk",
      text:
        "Korttidsuthyrning kan påverkas av regionala regler, kommunala villkor, ägarföreningen och nationella registreringskrav.",
    },
    {
      title: "Rätt område är avgörande",
      text:
        "Moraira, Jávea, Altea, Dénia, Benissa och Calpe erbjuder olika vardagsliv. Fel område kan göra även en vacker bostad svår att trivas i.",
    },
  ];

  const mistakes = [
    {
      number: "01",
      title: "Att bara lita på bostadsportaler.",
      body: [
        "Många internationella köpare börjar sin sökning på plattformar som Idealista eller Fotocasa. Dessa portaler är användbara, men de visar inte alltid hela marknadsbilden.",
        "Vissa annonser kan redan vara sålda, reserverade, föråldrade eller duplicerade via flera mäklare. I vissa fall används attraktiva annonser främst för att skapa nya förfrågningar.",
        "Portaler är en bra startpunkt, men de bör aldrig ersätta lokal verifiering, oberoende rådgivning och noggrann due diligence.",
      ],
      checks: [
        "Kontrollera om objektet verkligen är tillgängligt.",
        "Jämför priset med liknande bostäder i samma område.",
        "Fråga hur länge objektet har funnits på marknaden.",
        "Besök området vid olika tider på dagen.",
      ],
    },
    {
      number: "02",
      title: "Att underskatta de verkliga köpkostnaderna.",
      body: [
        "Ett vanligt misstag är att beräkna budgeten enbart utifrån köpeskillingen. I Spanien måste köpare även ta hänsyn till skatter, juridiska kostnader, notarie, fastighetsregister, översättningar, bankkostnader och ibland bolånerelaterade utgifter.",
        "Vid begagnade bostäder i Valenciaregionen bör köpare normalt räkna med en betydande extra summa ovanpå priset. Vid nyproduktion gäller normalt moms och stämpelskatt i stället för överlåtelseskatt.",
        "Exakta belopp beror på bostadstyp, köpeskilling, region och personlig situation, så siffror bör alltid kontrolleras innan något undertecknas.",
      ],
      checks: [
        "Räkna på total investering, inte bara priset i annonsen.",
        "Separera engångskostnader från årliga ägandekostnader.",
        "Be advokat eller skatterådgivare kontrollera aktuell skatt.",
        "Spara marginal för oförutsedda utgifter efter tillträde.",
      ],
    },
    {
      number: "03",
      title: "Att inte använda en oberoende advokat.",
      body: [
        "En oberoende advokat är en av de viktigaste personerna i den spanska köpprocessen.",
        "Advokaten bör kontrollera ägande, skulder, bolån, bygglegalitet, licenser, köpeavtal, betalningsvillkor och möjliga juridiska risker.",
        "Köpare bör undvika att enbart förlita sig på information från säljaren, mäklaren eller byggherren. Oberoende juridisk verifiering skyddar köparens intressen.",
      ],
      checks: [
        "Välj en advokat som arbetar för dig, inte för säljaren.",
        "Skriv inte under reservations- eller arrasavtal utan granskning.",
        "Kontrollera att advokaten kan förklara riskerna tydligt.",
        "Be om en skriftlig sammanfattning före större betalningar.",
      ],
    },
    {
      number: "04",
      title: "Att hoppa över ordentlig due diligence.",
      body: [
        "Innan du skriver under eller för över pengar bör du förstå exakt vad du köper.",
        "Viktiga kontroller omfattar Nota Simple, ägandestatus, skulder, bolån, licens för användning, kadastral information, byggregistrering och eventuella planbestämmelser.",
        "Pooler, terrasser, gästhus, tillbyggnader och renoveringar bör kontrolleras noggrant. Äldre bostäder kan ibland innehålla oregistrerade eller oregelbundna byggdelar.",
      ],
      checks: [
        "Är säljaren registrerad ägare?",
        "Finns skulder eller bolån kopplade till bostaden?",
        "Är alla byggnader och tillbyggnader lagligt registrerade?",
        "Finns giltig användnings- eller inflyttningslicens där det krävs?",
        "Finns planfrågor, skyddade zoner eller begränsningar?",
      ],
    },
    {
      number: "05",
      title: "Att underskatta ägarföreningen.",
      body: [
        "Många lägenheter, radhus, urbanisationer och även vissa villor tillhör en ägarförening, i Spanien kallad Comunidad de Propietarios.",
        "Föreningen kan påverka vardagslivet, uthyrningsmöjligheter, renoveringsregler, husdjur, parkering, poolanvändning, bullerregler och framtida underhållskostnader.",
        "En bostad kan verka perfekt under visningen, medan mötesprotokoll visar kommande kostnader, konflikter eller begränsningar som påverkar köpet väsentligt.",
      ],
      checks: [
        "Begär stadgar och interna regler.",
        "Begär senaste mötesprotokoll.",
        "Kontrollera årsbudget och månadsavgift.",
        "Fråga om planerade renoveringar eller extra avgifter.",
        "Kontrollera säljarens eventuella skulder till föreningen.",
      ],
    },
    {
      number: "06",
      title: "Att anta att semesteruthyrning alltid är tillåten.",
      body: [
        "Många köpare planerar att hyra ut bostaden när de inte använder den själva. Det kan vara möjligt, men bör aldrig tas för givet.",
        "Regler för turistuthyrning kan bero på regionala regler, kommunala villkor, ägarföreningens begränsningar och bostadstyp.",
        "Vissa ägarföreningar begränsar eller stoppar korttidsuthyrning. I andra fall krävs särskild registrering, dokumentation eller uppfyllda krav.",
        "Om uthyrningsintäkter ingår i din ekonomiska plan måste detta kontrolleras före köp.",
      ],
      checks: [
        "Kontrollera regionala regler i Valenciaregionen.",
        "Kontrollera kommunala villkor och stadsplanestatus.",
        "Kontrollera ägarföreningens stadgar och beslut.",
        "Räkna på nettointäkt efter skatt, provision, städning och underhåll.",
      ],
    },
    {
      number: "07",
      title: "Att kontrollera bolånemöjligheter för sent.",
      body: [
        "Bolånevillkor i Spanien skiljer sig ofta mellan residenta och icke-residenta köpare.",
        "Många internationella icke-residenta köpare kan få lägre belåningsgrad än de förväntar sig. Banker granskar inkomst, skulder, nationalitet, bostadstyp och värdering noggrant.",
        "Yngre köpare kan höra om statligt stödda bolånegarantier i Spanien. De kan vara värdefulla för berättigade förstagångsköpare, men gäller normalt under strikta villkor och är ofta inriktade på residenta köpare av permanent bostad.",
        "Köpare bör inte anta att 95 % eller 100 % finansiering är tillgänglig. En bolånerådgivare bör kontrollera möjligheterna innan ett seriöst bud lämnas.",
      ],
      checks: [
        "Få en preliminär bankbedömning tidigt.",
        "Räkna med värderingsrisk.",
        "Kontrollera valutaeffekt om inkomsten är i annan valuta.",
        "Jämför fast och rörlig ränta.",
      ],
    },
    {
      number: "08",
      title: "Att ignorera Euribor och ränterisk.",
      body: [
        "Spanska bolåneräntor påverkas av Euribor, inflation, Europeiska centralbankens politik och bredare ekonomiska utveckling.",
        "Rörliga räntor kan bli dyrare om marknadsräntor stiger. Fasta räntor kan ge mer förutsägbarhet, men villkor skiljer sig mellan banker och låntagare.",
        "En bostad som känns prisvärd vid en räntenivå kan kännas helt annorlunda om månadsbetalningen ökar. Köpare bör räkna på flera scenarier innan de binder sig.",
      ],
      checks: [
        "Räkna på högre ränta än dagens erbjudande.",
        "Jämför månadskostnad med och utan amortering.",
        "Kontrollera avgifter för förtidslösen.",
        "Förstå om räntan är fast, rörlig eller blandad.",
      ],
    },
    {
      number: "09",
      title: "Att glömma årliga ägandekostnader.",
      body: [
        "Kostnaden för att äga bostad i Spanien slutar inte hos notarien.",
        "Ägare bör budgetera för IBI, försäkring, el, vatten, sophämtning, underhåll, trädgård, poolservice, ägarförening och möjliga reparationer.",
        "Större villor, äldre bostäder eller bostäder med pool och trädgård kan kräva flera tusen euro per år i löpande kostnader.",
      ],
      checks: [
        "Begär senaste IBI-kvitto.",
        "Begär historiska el- och vattenkostnader där möjligt.",
        "Räkna separat på pool, trädgård och security.",
        "Lägg budget för oförutsedda reparationer.",
      ],
    },
    {
      number: "10",
      title: "Att välja fel plats.",
      body: [
        "Costa Blanca Nord är inte en enda livsstil. Moraira, Jávea, Altea, Dénia, Benissa Costa och omgivande byar erbjuder mycket olika rytm, gemenskap och bostadsmarknad.",
        "Vissa områden passar bättre för familjer, andra för pensionärer, golfare, entreprenörer, distansarbetare, uthyrningsinvesterare eller personer som söker lugn och integritet.",
        "Köpare fokuserar ofta på bostaden och underskattar vardagen runt den: skolor, vård, restauranger, socialt liv, tillgänglighet, aktivitet året runt och lokal service.",
      ],
      checks: [
        "Besök orten utanför högsäsong.",
        "Kontrollera vård, apotek, matbutiker och vardagsservice.",
        "Kör rutten till flygplats, strand och centrum.",
        "Jämför området dagtid, kvällstid och helg.",
      ],
    },
    {
      number: "11",
      title: "Att inte tänka på återförsäljningsvärde.",
      body: [
        "Även köpare som planerar att behålla bostaden länge bör tänka på framtida säljbarhet.",
        "Viktiga faktorer är läge, tillgång, utsikt, juridisk status, energiprestanda, underhållsskick, uthyrningsmöjlighet, parkering och efterfrågan från framtida internationella köpare.",
        "En vacker bostad kan ändå bli svårsåld om den har juridiska komplikationer, dålig tillgång, höga ägarföreningsavgifter eller tydliga lägesnackdelar.",
      ],
      checks: [
        "Fråga vem nästa troliga köpare skulle vara.",
        "Kontrollera parkering och tillgänglighet.",
        "Bedöm energiprestanda och renoveringsbehov.",
        "Undvik problem som är svåra att ändra: buller, lutning och läge.",
      ],
    },
    {
      number: "12",
      title: "Att tro att Spanien fungerar exakt som hemma.",
      body: [
        "Spanien har sin egen takt, kultur, administration och affärspraxis.",
        "Dokument kan ta längre tid. Möten kan kräva tålamod. Lokala yrkespersoner, kommuner, banker och register kan följa andra processer än köpare är vana vid.",
        "Det betyder inte att processen inte kan vara smidig. Det betyder att köpare behöver realistiska förväntningar, pålitliga lokala kontakter och tydlig vägledning.",
      ],
      checks: [
        "Planera mer tid än du tror.",
        "Samla dokument tidigt.",
        "Be om skriftliga sammanfattningar.",
        "Arbeta med lokala specialister som kan förklara processen tydligt.",
      ],
    },
  ];

  const extraRiskBlocks = [
    {
      title: "Skillnader mellan Registro och Catastro",
      text:
        "Fastighetsregistret visar juridiskt ägande och belastningar, medan Catastro innehåller fysisk och skattemässig information. Om ytor, tomtgränser eller byggnader inte stämmer mellan källorna behöver skillnaden förstås innan köp.",
    },
    {
      title: "Bygglov, pool och tillbyggnader",
      text:
        "Pool, gästhus, pergola, förråd, garage, terrass eller extra våning kan se färdiga ut men ändå sakna korrekt registrering. Detta är särskilt viktigt vid äldre villor och renoverade bostäder.",
    },
    {
      title: "Energicertifikat och framtida kostnader",
      text:
        "Energiprestanda påverkar komfort, driftkostnader och framtida försäljningsbarhet. Äldre bostäder kan behöva bättre fönster, isolering, ventilation eller effektivare klimatanläggning.",
    },
    {
      title: "Kustregler och skyddade zoner",
      text:
        "Bostäder nära havet, barrancos, naturparker eller skyddade områden kan omfattas av extra begränsningar för renovering, utbyggnad, användning, belysning eller tillgång.",
    },
  ];

  const annualCostExample = [
    "IBI fastighetsskatt: cirka €800 – €1 500 per år",
    "Försäkring: cirka €500 – €1 500 per år",
    "Poolunderhåll: cirka €1 000 – €3 000 per år",
    "Trädgårdsskötsel: cirka €1 000 – €4 000 per år",
    "Allmänt underhåll: cirka €2 000 – €10 000+ per år",
    "Ägarförening: varierar kraftigt beroende på område, service och planerade arbeten",
    "Property management: särskilt relevant om du inte bor i Spanien året runt",
  ];

  const relatedGuides = [
    {
      href: "/sv/guides/buying-property-spain",
      title: "Buying Property in Spain",
      text:
        "En bredare köpguide om process, dokument, skatter, kontroller och praktiska steg.",
    },
    {
      href: "/sv/guides/honest-guide-buying-property-costa-blanca-north",
      title: "Honest Guide to Buying Property on the Costa Blanca North",
      text:
        "Läs mer om dolda kostnader, uthyrning, buller, elmaster, community-regler och praktiska risker.",
    },
    {
      href: "/sv/guides/where-to-buy-property-costa-blanca-north",
      title: "Where to Buy Property on Costa Blanca North",
      text:
        "Jämför Moraira, Jávea, Altea, Dénia, Benissa och Calpe innan du väljer område.",
    },
    {
      href: "/sv/services/purchase-safety-report",
      title: "Purchase Safety Report",
      text:
        "När en bostad blir konkret hjälper rapporten dig att förstå juridiska, tekniska och praktiska risker före köp.",
    },
  ];

  const faqs = [
    {
      question: "Är det säkert att köpa bostad i Spanien?",
      answer:
        "Ja, det kan vara säkert när processen görs korrekt. Riskerna uppstår ofta när köpare skriver under för tidigt, inte använder oberoende advokat, underskattar kostnader eller inte kontrollerar bygglegalitet, ägarförening och uthyrningsregler.",
    },
    {
      question: "Hur mycket bör jag räkna med i extra köpkostnader?",
      answer:
        "Det beror på om bostaden är ny eller begagnad, region, pris och finansiering. Köpare bör räkna med en betydande extra budget ovanpå köpeskillingen och låta advokat eller skatterådgivare kontrollera exakta belopp.",
    },
    {
      question: "Kan jag lita på mäklarens information?",
      answer:
        "Mäklare kan ge värdefull information, men köparens intressen bör skyddas genom oberoende juridisk och teknisk kontroll. Viktiga uppgifter bör verifieras i dokument, register och hos relevanta myndigheter.",
    },
    {
      question: "Är semesteruthyrning en bra investering?",
      answer:
        "Det kan vara det, men endast om juridiska regler, ägarförening, registrering, skatter, säsong, kostnader och verklig nettointäkt är realistiska. Bruttointäkter säger inte tillräckligt.",
    },
    {
      question: "När bör jag kontakta advokat?",
      answer:
        "Helst innan du skriver under reservationsavtal eller betalar handpenning. Advokaten bör granska villkor, dokument och risker innan köpet blir bindande.",
    },
  ];

  const officialSources = [
    {
      label: "Spanska skatteverket — moms eller ITP vid bostadsköp",
      href:
        "https://sede.agenciatributaria.gob.es/Sede/en_gb/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
    },
    {
      label:
        "Turisme Comunitat Valenciana — Decreto-ley 9/2024 om turistbostäder",
      href:
        "https://www.turisme.gva.es/opencms/opencms/turisme/es/contents/home/noticia/noticia_1725542158000.html",
    },
    {
      label:
        "Spanska bostadsministeriet — ägarföreningar och nya turistlägenheter",
      href:
        "https://www.mivau.gob.es/el-ministerio/sala-de-prensa/noticias/mar-01042025-1647",
    },
    {
      label: "Registradores de España — information för internationella köpare",
      href: "https://sede.registradores.org/contenido/buyingahouse/",
    },
    {
      label: "Spanska fastighetsregistret — Land Registry",
      href: "https://sede.registradores.org/site/propiedad?lang=en_EN",
    },
    {
      label: "Spanska skatteverket — fastigheter och icke-residenter",
      href:
        "https://sede.agenciatributaria.gob.es/Sede/en_gb/vivienda-otros-inmuebles.html",
    },
    {
      label: "MIVAU — korttidsuthyrning och digitalt register",
      href:
        "https://www.mivau.gob.es/vivienda/alquiler-de-alojamientos-de-corta-duracion",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
        {/* HERO */}
        <section className="relative flex min-h-[75vh] items-center overflow-hidden px-8 py-32">
          <img
            src="/images/practical-guidance.png"
            alt="Vanliga misstag när du köper bostad i Spanien"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 mx-auto max-w-6xl text-white">
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/75"
            >
              <a href="/sv" className="transition hover:text-white">
                Startsida
              </a>
              <span aria-hidden="true">/</span>
              <a href="/sv/guides" className="transition hover:text-white">
                Guider
              </a>
              <span aria-hidden="true">/</span>
              <span>Vanliga misstag</span>
            </nav>

            <p className="text-sm uppercase tracking-[0.35em] text-white/80">
              Costa Blanca Nord
            </p>

            <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
              Vanliga misstag när du köper bostad i Spanien
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              De viktigaste riskerna som svenska och internationella köpare bör
              förstå innan de köper bostad på Costa Blanca Nord.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/sv/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Be om Area Match
              </a>

              <a
                href="/sv/services/purchase-safety-report"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Se Purchase Safety Report
              </a>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-8 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-serif text-5xl leading-tight text-[#1e2a3a]">
              Många bostadsmisstag sker innan den första visningen.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Att köpa bostad i Spanien kan vara ett fantastiskt beslut, men
              processen fungerar annorlunda än i Sverige, Nederländerna,
              Tyskland, Belgien, Skandinavien eller Storbritannien.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Internationella köpare underskattar ofta lokala regler,
              köpkostnader, juridiska dokument, bolånevillkor, ägarföreningar
              och den praktiska verkligheten i att äga bostad utomlands.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              På Costa Blanca Nord är de mest framgångsrika köparna inte alltid
              de snabbaste. Det är de som tar sig tid att förstå hela bilden
              innan de binder sig.
            </p>
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Snabba fakta
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Fyra saker att förstå innan du börjar buda.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {quickFacts.map((fact) => (
                <div
                  key={fact.title}
                  className="rounded-[28px] bg-white p-7 shadow-sm"
                >
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {fact.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-stone-600">
                    {fact.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COST EXAMPLE */}
        <section className="px-8 pb-24">
          <div className="mx-auto max-w-6xl rounded-[36px] bg-[#efe7dc] p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Praktiskt exempel
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Vad kan en bostad på €700 000 faktiskt kosta?
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone-700">
              <p>
                Bostadspris: <strong>€700 000</strong>
              </p>
              <p>
                Överlåtelseskatt eller motsvarande köpskatt:{" "}
                <strong>kan vara omkring €63 000 – €70 000</strong>
              </p>
              <p>
                Juridiska kostnader: <strong>kan vara omkring €7 000</strong>
              </p>
              <p>
                Notarie och fastighetsregister:{" "}
                <strong>kan vara omkring €2 500 – €4 000</strong>
              </p>
              <p>
                Administration, översättningar och andra kostnader:{" "}
                <strong>kan vara omkring €1 500 – €3 000</strong>
              </p>

              <div className="mt-8 border-t border-stone-300 pt-6">
                <p className="text-2xl font-semibold">
                  Möjlig total investering: cirka €775 000 – €785 000
                </p>
              </div>

              <p className="text-sm leading-relaxed text-stone-500">
                Detta är ett pedagogiskt exempel, inte personlig skatte- eller
                juridisk rådgivning. Exakta belopp måste kontrolleras för den
                specifika bostaden och köparen.
              </p>
            </div>
          </div>
        </section>

        {/* MISTAKES */}
        {mistakes.map((mistake, index) => (
          <section key={mistake.number} className="px-8 pb-24">
            <div
              className={`mx-auto max-w-6xl rounded-[36px] p-12 ${
                index % 2 === 0 ? "bg-white shadow-sm" : "bg-[#efe7dc]"
              }`}
            >
              <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
                Misstag {mistake.number}
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                {mistake.title}
              </h2>

              <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
                {mistake.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <div className="mt-10 rounded-[28px] bg-[#f6f1ea] p-8">
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                    Kontrollera detta
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {mistake.checks.map((check) => (
                      <li key={check}>• {check}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ANNUAL COSTS */}
        <section className="px-8 pb-24">
          <div className="mx-auto max-w-6xl rounded-[36px] bg-white p-12 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Exempel på årliga villakostnader
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              En villa kan vara vacker och samtidigt dyr att äga.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {annualCostExample.map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="leading-relaxed text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXTRA FACTS */}
        <section className="px-8 pb-24">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Extra fakta som köpare ofta missar
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
              De svåraste problemen är ofta de som inte syns på bilderna.
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {extraRiskBlocks.map((item) => (
                <div key={item.title} className="rounded-[30px] bg-white/10 p-8">
                  <h3 className="font-serif text-3xl text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-white/75">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED GUIDES */}
        <section className="px-8 pb-24">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Fortsätt läsa
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Guider och tjänster som hjälper dig undvika felköp.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {relatedGuides.map((guide) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  className="rounded-[28px] bg-[#f6f1ea] p-7 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    {guide.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-stone-600">
                    {guide.text}
                  </p>

                  <span className="mt-6 inline-block text-sm uppercase tracking-[0.22em] text-[#c8a063]">
                    Läs mer →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-8 pb-24">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vanliga frågor
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Frågor om risker vid bostadsköp i Spanien.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-[28px] bg-[#f6f1ea] p-8">
                  <h3 className="font-serif text-2xl leading-tight text-[#1e2a3a]">
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

        {/* TRUST BLOCK */}
        <section className="px-8 pb-24">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Förtroende & vägledning
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Skrivet av Nordic Move Spain.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  Nordic Move Spain hjälper internationella köpare att förstå
                  Costa Blanca Nord, undvika vanliga misstag och fatta tryggare
                  bostadsbeslut i Spanien. Vårt arbetssätt börjar med område,
                  livsstil och risker innan bostadssökningen blir konkret.
                </p>

                <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-[#1e2a3a]">
                  Senast uppdaterad: juli 2026
                </p>
              </div>

              <div className="rounded-[32px] bg-white/80 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Viktig information
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  Den här guiden ersätter inte personlig fackrådgivning.
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  Informationen är allmän vägledning för internationella köpare.
                  Den ersätter inte juridisk, skattemässig, finansiell, teknisk
                  eller medicinsk rådgivning. Kontrollera alltid din personliga
                  situation med kvalificerade specialister innan du köper, hyr
                  ut, säljer eller flyttar till Spanien.
                </p>
              </div>
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
              Den här guiden använder officiella spanska och valencianska källor
              där det är möjligt. Regler kan ändras och den exakta situationen
              beror alltid på bostaden, kommunen, ägarföreningen och köparens
              personliga omständigheter.
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
              Köp med tydlighet
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Planerar du att köpa bostad på Costa Blanca Nord?
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-white/80">
              Nordic Move Spain hjälper internationella köpare att förstå
              regionen, undvika vanliga misstag och fatta tryggare
              bostadsbeslut i Spanien.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/sv/contact"
                className="rounded-full bg-white px-8 py-4 text-sm font-medium text-stone-900"
              >
                Boka ett introduktionssamtal
              </a>

              <a
                href="/sv/services/area-match"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Be om Area Match
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
