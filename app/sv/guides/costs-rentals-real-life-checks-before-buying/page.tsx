export const metadata = {
  title:
    "Kostnader, uthyrning och kontroller före köp i Spanien | Svensk guide",
  description:
    "Svensk guide för köpare som vill förstå kostnader, uthyrningsregler och praktiska kontroller innan de köper bostad på Costa Blanca North eller i Spanien.",
  keywords: [
    "kostnader köpa bostad Spanien",
    "hyra ut bostad Spanien regler",
    "Costa Blanca köpa bostad kostnader",
    "turistuthyrning Valencia regler",
    "ITP IVA AJD Spanien bostad",
    "köpa hus Spanien kontrollista",
    "community fees Spain",
    "Modelo 210 Spanien bostad",
    "IBI Spanien fastighetsskatt",
    "dolda kostnader bostad Spanien",
    "svensk guide köpa bostad Spanien",
    "real life checks buying property Spain",
  ],
  alternates: {
    canonical: "/sv/guides/costs-rentals-real-life-checks-before-buying",
  },
  openGraph: {
    title:
      "Kostnader, uthyrning och praktiska kontroller före bostadsköp i Spanien",
    description:
      "En tydlig svensk guide om dolda kostnader, uthyrningsregler, community-regler, skatter, buller, infrastruktur och praktiska kontroller innan du köper bostad i Spanien.",
    url: "/sv/guides/costs-rentals-real-life-checks-before-buying",
    siteName: "Nordic Move Spain",
    locale: "sv_SE",
    type: "article",
  },
};

const quickRealityChecks = [
  "En vacker bostad kan fortfarande vara fel om området inte fungerar i vardagen.",
  "Köpkostnader i Spanien kommer utöver köpeskillingen och varierar beroende på bostadstyp, region och skattesats.",
  "Begagnade bostäder beskattas normalt med ITP, medan nyproduktion normalt beskattas med IVA och ofta AJD.",
  "Turistuthyrning kräver kontroll av regionala regler, kommunala krav, community-regler och skatter.",
  "Community-protokoll kan avslöja framtida kostnader, konflikter, uthyrningsbegränsningar och planerat underhåll.",
  "Vägbrus, elledningar, sommartryck, tillgänglighet och vinterservice bör kontrolleras innan bud.",
];

const purchaseCosts = [
  {
    title: "ITP på begagnad bostad",
    text:
      "När en privatperson säljer en begagnad bostad i Spanien betalar köparen normalt överlåtelseskatt, Impuesto sobre Transmisiones Patrimoniales, ITP. Skattesatsen bestäms regionalt och måste kontrolleras för den autonoma regionen där bostaden ligger.",
  },
  {
    title: "IVA på nyproduktion",
    text:
      "Vid köp av ny bostad från byggherre gäller normalt IVA i stället för ITP. Den spanska skattemyndigheten anger 10 procent IVA som generell nivå för bostäder, med 4 procent för vissa skyddade bostäder.",
  },
  {
    title: "AJD vid nyproduktion eller notariedokument",
    text:
      "Actos Jurídicos Documentados, AJD, kan tillkomma vid vissa notariedokument, särskilt vid nyproduktion och vissa juridiska handlingar. Nivån varierar mellan regioner.",
  },
  {
    title: "Notarie och fastighetsregister",
    text:
      "Notarie- och registreringskostnader är normalt lägre än skatterna men ska ändå räknas in. Kostnaden beror på pris, dokumenttyp, sidantal och registreringens omfattning.",
  },
  {
    title: "Advokat och juridisk kontroll",
    text:
      "En oberoende advokat är en viktig köpkostnad. Advokaten bör kontrollera ägande, skulder, bygglov, community, kontrakt, skatter, uthyrningsrisker och om bostaden motsvarar dokumentationen.",
  },
  {
    title: "Teknisk kontroll och besiktning",
    text:
      "Särskilt vid villa, äldre bostad, renoverad bostad, finca, pool eller tillbyggnader bör du överväga teknisk kontroll. Den kan upptäcka problem som inte syns i annonsen.",
  },
];

const runningCosts = [
  {
    title: "IBI",
    text:
      "IBI är en kommunal fastighetsskatt i Spanien. Den baseras normalt på fastighetens cadastral value och varierar mellan kommuner och bostäder.",
  },
  {
    title: "Basura och lokala avgifter",
    text:
      "Många kommuner tar ut avgifter för sophantering eller andra lokala tjänster. Dessa är ofta små jämfört med köpskatterna men återkommer varje år.",
  },
  {
    title: "Community-avgifter",
    text:
      "Om bostaden ingår i en comunidad de propietarios betalar du normalt community-avgifter för gemensamma delar som pool, hiss, trädgård, garage, försäkring, belysning och administration.",
  },
  {
    title: "Modelo 210 för icke-residenter",
    text:
      "En icke-resident ägare kan behöva lämna Modelo 210 i Spanien även om bostaden inte hyrs ut, eftersom Spanien kan beskatta en schablonintäkt för egen användning eller tom urban bostad.",
  },
  {
    title: "Försäkring, el, vatten och internet",
    text:
      "Räkna med årliga och månatliga kostnader för hemförsäkring, el, vatten, internet, larm, poolskötsel, trädgård, underhåll och eventuellt nyckelservice.",
  },
  {
    title: "Underhåll och framtida reparationer",
    text:
      "Terrasser, tak, fasader, pool, markiser, luftkonditionering, fönster, avlopp och trädgård kräver budget. Medelhavsklimat betyder inte underhållsfritt ägande.",
  },
];

const rentalQuestions = [
  {
    title: "Är turistuthyrning juridiskt möjlig?",
    text:
      "Kontrollera regionala regler, kommunala krav, registrering och om bostaden uppfyller tekniska krav. I Valenciaregionen har reglerna för viviendas de uso turístico skärpts och registreringar har tidsbegränsad giltighet.",
  },
  {
    title: "Tillåter communityn uthyrning?",
    text:
      "En bostad kan ligga i ett område där regional registrering är möjlig men där community-regler eller beslut begränsar eller påverkar uthyrning. Läs stadgar och protokoll.",
  },
  {
    title: "Fungerar läget för gäster?",
    text:
      "Uthyrningspotential handlar inte bara om havsutsikt. Gäster värderar parkering, enkel åtkomst, strand, restauranger, luftkonditionering, internet, säkerhet och tydlig incheckning.",
  },
  {
    title: "Hur påverkas egen användning?",
    text:
      "Om du vill använda bostaden under högsäsong kan det minska uthyrningsintäkten. En realistisk kalkyl måste skilja på privat användning, tomma perioder och uthyrda veckor.",
  },
  {
    title: "Vilka skatter och deklarationer krävs?",
    text:
      "Uthyrning kan skapa deklarationsskyldighet i Spanien och, för svenska skatteresidenter, även i Sverige. Spara bokningsunderlag, kostnader, plattformsrapporter och betalningsbevis.",
  },
  {
    title: "Vem hanterar gäster, nycklar och problem?",
    text:
      "Uthyrning kräver praktisk drift: städning, nycklar, gästkontakt, akuta reparationer, linne, skador och recensioner. Ta med management-kostnad i kalkylen.",
  },
];

const realLifeChecks = [
  {
    title: "Vägbrus och trafik",
    text:
      "Besök bostaden vid olika tider. En lugn visning mitt på dagen kan kännas annorlunda under morgontrafik, helger, sommar eller när vinden ligger åt fel håll.",
  },
  {
    title: "Elledningar och master",
    text:
      "Kontrollera synliga högspänningsledningar, mobilmaster, transformatorer och annan infrastruktur. Det påverkar känsla, utsikt och ibland framtida försäljning.",
  },
  {
    title: "Sommartryck",
    text:
      "En ort som känns perfekt i mars kan vara mycket mer intensiv i augusti. Kontrollera parkering, restaurangtryck, strandtryck, buller och tillgänglighet under högsäsong.",
  },
  {
    title: "Vinterliv",
    text:
      "För permanent boende eller längre vintervistelser är det viktigt att kontrollera vilka restauranger, butiker, vårdtjänster, sportanläggningar och sociala aktiviteter som faktiskt är öppna utanför säsong.",
  },
  {
    title: "Tillgänglighet och terräng",
    text:
      "Många bostäder på Costa Blanca North ligger i sluttningar. Kontrollera branta vägar, trappor, parkering, gångbarhet, cykelmöjligheter och hur läget fungerar på lång sikt.",
  },
  {
    title: "Sol, vind och skugga",
    text:
      "Söderläge, skugga, vinterson, vindskydd och terrassens användbarhet är avgörande för hur bostaden känns i vardagen. Titta inte bara på planritning och utsikt.",
  },
  {
    title: "Internet och arbete på distans",
    text:
      "Om du arbetar från Spanien bör du kontrollera faktiskt internet, mobilnät, fiber, backup-lösningar och eventuella begränsningar i urbanisationer eller lantliga lägen.",
  },
  {
    title: "Fukt, ventilation och byggkvalitet",
    text:
      "Ingen vill ha problem med fukt, men poängen är att förstå byggkvalitet, ventilation, dränering, terrasser, tak och installationer innan köp.",
  },
];

const legalChecks = [
  {
    title: "Nota simple",
    text:
      "Be om en aktuell nota simple från Registro de la Propiedad för att kontrollera ägare, registreringsinformation, inteckningar och belastningar.",
  },
  {
    title: "Registro och Catastro",
    text:
      "Jämför fastighetsregistret med Catastro, ritningar och verkligheten. Skillnader i yta, byggnader eller tomtgränser bör utredas innan köp.",
  },
  {
    title: "Community-dokument",
    text:
      "Om bostaden ingår i en community bör du läsa stadgar, regler, senaste protokoll, budget, avgifter, skulder och beslut om kommande arbeten.",
  },
  {
    title: "Bygglov och tillbyggnader",
    text:
      "Pooler, gästdelar, terrasser, förråd, carportar och utbyggnader bör kontrolleras juridiskt och tekniskt. Det som finns på plats är inte automatiskt korrekt registrerat.",
  },
  {
    title: "Energicertifikat",
    text:
      "Vid försäljning och uthyrning av byggnader finns regler om energicertifikat. Be om dokumentet och använd det som en del av helhetsbilden, inte som enda tekniska kontroll.",
  },
  {
    title: "Vatten, avlopp och landsbygdssystem",
    text:
      "På lantligare fastigheter kan vatten, brunnar, septiktank, avlopp, elkapacitet och åtkomst vara viktigare än själva huset. Kontrollera detta innan bud.",
  },
];

const budgetExample = [
  {
    label: "Köpeskilling",
    value: "Det pris du erbjuder och slutligen betalar för bostaden.",
  },
  {
    label: "Köpskatt",
    value:
      "ITP för begagnad bostad eller IVA/AJD för nyproduktion. Detta är ofta den största köpkostnaden utöver priset.",
  },
  {
    label: "Juridik och administration",
    value:
      "Advokat, notarie, register, gestor, översättningar, bank och eventuella fullmakter.",
  },
  {
    label: "Teknisk kontroll",
    value:
      "Besiktning, arkitekt, byggteknisk rådgivning eller kontroll av tillbyggnader och installationer.",
  },
  {
    label: "Efter köp",
    value:
      "Möbler, försäkring, abonnemang, larm, nyckelservice, reparationer, pool, trädgård och löpande underhåll.",
  },
];

const redFlags = [
  "Du får inte se community-protokoll eller senaste budget.",
  "Säljaren eller mäklaren säger att turistuthyrning är tillåten utan att visa regler eller registrering.",
  "Annonsens kvadratmeter stämmer inte med Registro eller Catastro.",
  "Det finns tillbyggnader, pool eller gästdel utan tydlig dokumentation.",
  "Bostaden ligger nära en stor väg, men visningen sker bara under en lugn tid.",
  "Community-avgiften är låg men stora arbeten diskuteras i protokollen.",
  "Bostaden är svår att nå utan bil men marknadsförs som gångavstånd.",
  "Du pressas att betala reservation innan advokaten sett dokumenten.",
];

const checklist = [
  "Aktuell nota simple",
  "Catastro-referens och karta",
  "IBI-kvitto",
  "Community-avgift och skuldfrihetsintyg",
  "Senaste community-protokoll",
  "Stadgar och interna regler",
  "Regler för turistuthyrning",
  "Energicertifikat",
  "Licenser för pool, tillbyggnader och renoveringar",
  "Teknisk kontroll av tak, terrasser och installationer",
  "Kontroll av buller vid olika tider",
  "Kontroll av sommar- och vintermiljö",
  "Internet- och mobiltest",
  "Parkeringskontroll",
  "Kalkyl för köpkostnader och löpande kostnader",
  "Plan för nyckelservice, underhåll och eventuell uthyrning",
];

const faqs = [
  {
    question: "Vilka kostnader tillkommer när man köper bostad i Spanien?",
    answer:
      "Utöver köpeskillingen bör du räkna med köpskatt, notarie, fastighetsregister, advokat, eventuell gestor, bankkostnader, teknisk kontroll och kostnader efter köp som försäkring, abonnemang och underhåll.",
  },
  {
    question: "Betalar man ITP eller IVA när man köper bostad i Spanien?",
    answer:
      "Begagnade bostäder beskattas normalt med ITP. Nyproduktion beskattas normalt med IVA och ofta AJD. Regler och nivåer kan variera, så kontrollera alltid region och bostadstyp.",
  },
  {
    question: "Kan jag alltid hyra ut min bostad i Spanien?",
    answer:
      "Nej. Du måste kontrollera regionala turistregler, kommunala krav, eventuell registrering, community-regler och skatter. Uthyrning ska aldrig antas vara automatiskt tillåten.",
  },
  {
    question: "Varför är community-protokoll viktiga?",
    answer:
      "Protokoll kan visa kommande renoveringar, konflikter, obetalda avgifter, uthyrningsfrågor, bullerproblem, poolregler och andra saker som inte syns vid visningen.",
  },
  {
    question: "Vad ska jag kontrollera innan jag lägger bud?",
    answer:
      "Kontrollera juridiska dokument, kostnader, community-regler, teknisk status, buller, parkering, internet, vinterservice, sommartryck och om bostaden verkligen passar din tänkta användning.",
  },
  {
    question: "Är en låg community-avgift alltid bra?",
    answer:
      "Nej. En låg avgift kan betyda låga löpande kostnader, men också svaga reserver och risk för extra uttaxeringar när större underhåll behövs.",
  },
];

const officialSources = [
  {
    title: "Agencia Tributaria — IVA eller ITP vid bostadsköp",
    description:
      "Spansk skattemyndighet om när bostadsköp beskattas med IVA eller ITP.",
    href: "https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
  },
  {
    title: "Agencia Tributaria Valenciana — ITP/AJD",
    description:
      "Regional information om ITP och AJD i Comunitat Valenciana.",
    href: "https://atv.gva.es/es/itpajd",
  },
  {
    title: "BOE — Decreto Ley 9/2024 Comunitat Valenciana",
    description:
      "Regeländringar för viviendas de uso turístico i Valenciaregionen, inklusive tidsbegränsad registrering.",
    href: "https://www.boe.es/buscar/doc.php?id=DOGV-r-2024-90168",
  },
  {
    title: "BOE — Ley de Propiedad Horizontal",
    description:
      "Spansk huvudlag om comunidades de propietarios, gemensamma delar, avgifter och ägarnas skyldigheter.",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-1960-10906",
  },
  {
    title: "Registradores de España — Registro de la Propiedad",
    description:
      "Officiell information om fastighetsregistret, nota simple och registrerade rättigheter.",
    href: "https://www.registradores.org/el-colegio/registro-de-la-propiedad",
  },
  {
    title: "Catastro — Referencia catastral",
    description:
      "Officiell information om den spanska cadastral reference och fastighetsidentifiering.",
    href: "https://www.catastro.hacienda.gob.es/es-ES/referencia_catastral.html",
  },
  {
    title: "BOE — Real Decreto 390/2021",
    description:
      "Spanska regler om energicertifikat och energimärkning vid försäljning och uthyrning av byggnader.",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-2021-9176",
  },
  {
    title: "Agencia Tributaria — Modelo 210",
    description:
      "Officiell information om Modelo 210 för non-resident income tax.",
    href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/procedimientoini/GF00.shtml",
  },
];

export default function CostsRentalsRealLifeChecksBeforeBuyingSwedishPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Kostnader, uthyrning och praktiska kontroller före bostadsköp i Spanien",
    description:
      "En svensk guide om köpkostnader, uthyrningsregler, community-regler, skatter och real life checks innan köp av bostad i Spanien.",
    author: {
      "@type": "Organization",
      name: "Nordic Move Spain",
    },
    publisher: {
      "@type": "Organization",
      name: "Nordic Move Spain",
    },
    inLanguage: "sv-SE",
    mainEntityOfPage: "/sv/guides/costs-rentals-real-life-checks-before-buying",
  };

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="bg-[#1e2a3a] px-8 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <a
            href="/sv/guides"
            className="text-sm uppercase tracking-[0.25em] text-[#c8a063]"
          >
            ← Tillbaka till guider
          </a>

          <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Ärlig köpguide
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Kostnader, uthyrning och praktiska kontroller före köp i Spanien.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            En vacker bostad kan fortfarande vara fel köp om kostnader,
            uthyrningsregler, community-regler, buller, tillgänglighet och
            vardagslivet inte kontrolleras i förväg.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/sv/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Gör din Area Match
            </a>

            <a
              href="/sv/contact"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Ställ en fråga före köp
            </a>
          </div>
        </div>
      </section>

      {/* QUICK REALITY CHECK */}
      <section className="px-8 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[34px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Snabb verklighetskontroll
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
              Det här bör du veta innan du blir förälskad i bostaden.
            </h2>

            <ul className="mt-6 space-y-4">
              {quickRealityChecks.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-stone-700">
                  <span className="mt-1 text-[#c8a063]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Innan bud
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Rätt köp börjar med rätt frågor, inte med rätt bilder.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Många bostäder i Spanien säljs med starka känslor: havsutsikt,
              sol, pool och semesterkänsla. Men ett bra köp kräver mer än en
              vacker visning. Du behöver förstå den totala ekonomin, hur
              bostaden får användas och hur läget fungerar i vardagen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Det är särskilt viktigt på Costa Blanca North, där skillnaderna
              mellan Dénia, Jávea, Moraira, Benissa, Calpe och Altea kan vara
              stora när det gäller terräng, vinterliv, sommartryck,
              uthyrningsmöjlighet, tillgänglighet och bostadstyper.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Den här guiden hjälper dig att kontrollera kostnader, uthyrning
              och praktiska vardagsrisker innan du skriver under eller betalar
              reservation.
            </p>
          </div>
        </div>
      </section>

      {/* PURCHASE COSTS */}
      <section className="bg-white px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Köpkostnader
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Köpeskillingen är bara en del av budgeten.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {purchaseCosts.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] bg-[#f6f1ea] p-8"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[34px] border border-[#c8a063]/40 bg-[#fffaf3] p-8">
            <h3 className="font-serif text-3xl text-[#1e2a3a]">
              Praktisk budgetregel
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-stone-700">
              Be alltid om en skriftlig kostnadskalkyl som skiljer mellan
              köpeskilling, köpskatt, notarie, register, advokat, bank,
              teknisk kontroll, efterarbete och löpande kostnader. Jämför aldrig
              två bostäder enbart på annonspris.
            </p>
          </div>
        </div>
      </section>

      {/* RUNNING COSTS */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Löpande kostnader
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            En billig bostad kan bli dyr om driften underskattas.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {runningCosts.map((item) => (
              <article key={item.title} className="rounded-[30px] bg-white p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RENTALS */}
      <section className="bg-[#e9dfd2] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
            Uthyrning
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Uthyrningspotential är inte samma sak som uthyrningsrätt.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {rentalQuestions.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] bg-[#f6f1ea] p-8"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[34px] bg-[#1e2a3a] p-8 text-white">
            <h3 className="font-serif text-3xl">
              Nordic Move Spain-råd
            </h3>

            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-white/80">
              Räkna aldrig med uthyrningsintäkter förrän juridik, community,
              kommunala krav, drift, skatt och realistisk säsongsbeläggning är
              kontrollerade. En uthyrningskalkyl ska vara försiktig, inte
              optimistisk.
            </p>
          </div>
        </div>
      </section>

      {/* REAL LIFE CHECKS */}
      <section className="bg-white px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Real life checks
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Kontrollera hur bostaden fungerar i verkligheten.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {realLifeChecks.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] bg-[#f6f1ea] p-8"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL CHECKS */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Dokument och juridik
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Dokumenten berättar ofta mer än visningen.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {legalChecks.map((item) => (
              <article key={item.title} className="rounded-[30px] bg-white p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUDGET EXAMPLE */}
      <section className="bg-[#e9dfd2] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
            Totalbudget
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Så bör du tänka när du jämför två bostäder.
          </h2>

          <div className="mt-12 overflow-hidden rounded-[30px] border border-stone-200 bg-white">
            {budgetExample.map((item) => (
              <div
                key={item.label}
                className="grid border-b border-stone-200 last:border-b-0 md:grid-cols-[0.35fr_0.65fr]"
              >
                <div className="bg-[#1e2a3a] p-6 font-medium text-white">
                  {item.label}
                </div>
                <div className="p-6 leading-relaxed text-stone-700">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RED FLAGS */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Varningssignaler
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Om något av detta händer bör du sakta ner.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {redFlags.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-stone-200 bg-white p-5 leading-relaxed text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-white px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Checklista före köp
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Gå inte vidare innan du kan svara på dessa punkter.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {checklist.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f6f1ea] p-5 leading-relaxed text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vanliga frågor
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Frågor svenska köpare ofta ställer innan de köper.
          </h2>

          <div className="mt-12 space-y-5">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[30px] bg-white p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {faq.question}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section className="bg-[#e9dfd2] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
            Officiella källor
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Källor för skatter, uthyrning, community och juridiska kontroller.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {officialSources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[30px] bg-[#f6f1ea] p-8 transition hover:bg-white"
              >
                <h3 className="font-serif text-2xl text-[#1e2a3a]">
                  {source.title}
                </h3>

                <p className="mt-4 leading-relaxed text-stone-700">
                  {source.description}
                </p>

                <span className="mt-6 inline-block text-sm uppercase tracking-[0.2em] text-[#1e2a3a]">
                  Öppna källa →
                </span>
              </a>
            ))}
          </div>

          <p className="mt-10 max-w-4xl text-sm leading-relaxed text-stone-600">
            Den här guiden är praktisk information för köpare och ersätter inte
            juridisk, skattemässig eller teknisk rådgivning. Regler, skatter och
            lokala krav kan ändras. Kontrollera alltid din specifika situation
            med oberoende advokat och relevant skatterådgivare.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-12 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vill du köpa med större trygghet?
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight">
            Jämför inte bara bostäder. Jämför kostnader, regler, läge och
            vardagsliv.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Vår Area Match Assessment hjälper dig att förstå vilka områden och
            bostadstyper som passar din livsstil, budget, uthyrningsplaner och
            praktiska behov på Costa Blanca North.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/sv/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Gör din Area Match
            </a>

            <a
              href="/sv/contact"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Kontakta oss
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}