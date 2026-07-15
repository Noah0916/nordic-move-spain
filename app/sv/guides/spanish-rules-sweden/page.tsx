export const metadata = {
  title:
    "Spanska regler vid bostadsköp: advokat, notarie och gestor | Svensk guide",
  description:
    "Svensk guide till spanska regler och roller vid bostadsköp. Lär dig vad advokat, notarie, gestor, Registro de la Propiedad och Catastro gör, vilka lagar som är viktiga och vilka kostnader du bör räkna med.",
  keywords: [
    "köpa bostad Spanien regler",
    "spanska lagar bostadsköp",
    "köpa fastighet Spanien svensk guide",
    "advokat Spanien bostadsköp",
    "gestor Spanien bostadsköp",
    "notarie Spanien köpa hus",
    "NIE köpa bostad Spanien",
    "nota simple Spanien",
    "Registro de la Propiedad",
    "Catastro Spanien",
    "ITP Valencia fastighet",
    "Costa Blanca köpa bostad regler",
  ],
  alternates: {
    canonical: "/sv/guides/spanish-rules-sweden",
  },
  openGraph: {
    title:
      "Spanska regler vid bostadsköp: vad svenska köpare måste förstå",
    description:
      "En tydlig svensk guide om advokat, notarie, gestor, NIE, nota simple, Registro de la Propiedad, Catastro, skatter, kontrakt och juridiska kontroller vid bostadsköp i Spanien.",
    url: "/sv/guides/spanish-rules-sweden",
    siteName: "Nordic Move Spain",
    locale: "sv_SE",
    type: "article",
  },
};

const keyTakeaways = [
  "Den spanska notarien är viktig, men är inte din personliga köparadvokat.",
  "En oberoende advokat bör kontrollera ägande, skulder, bygglov, community-regler, kontrakt och risker innan du skriver under.",
  "En gestor kan hjälpa med administration och skattedeklarationer, men ska inte ersätta juridisk rådgivning.",
  "Registro de la Propiedad och Catastro är två olika system. Båda bör kontrolleras.",
  "Ett reservationsavtal eller arras-avtal kan skapa ekonomiska konsekvenser om du drar dig ur.",
  "Kostnader, skatter och regler varierar mellan nyproduktion, begagnad bostad, region och köparprofil.",
];

const roles = [
  {
    role: "Advokat / abogado",
    what:
      "Din oberoende juridiska rådgivare. Advokaten ska kontrollera dokument, ägande, skulder, bygglov, urbanistisk status, community-regler, kontrakt, skattestruktur och risker före köp.",
    swedishView:
      "Svenska köpare bör se advokaten som sin egen juridiska säkerhetskontroll, inte som en formalitet.",
  },
  {
    role: "Notarie / notario",
    what:
      "En offentlig funktionär som ger offentlig beviskraft åt köpehandlingen, identifierar parterna, formaliserar escritura pública och ser till att köpet kan hanteras korrekt i det offentliga systemet.",
    swedishView:
      "Notarien är neutral och ersätter inte en egen advokat. Notarien arbetar inte som en svensk köparombudsman.",
  },
  {
    role: "Gestor / gestoría",
    what:
      "En administrativ specialist som ofta hjälper med praktiska ärenden efter eller runt köpet: skatteblanketter, registreringar, byten av el och vatten, kommunala kontakter och löpande administration.",
    swedishView:
      "En gestor är användbar, men ska inte användas som ersättning för advokat när juridiska risker behöver bedömas.",
  },
  {
    role: "Fastighetsmäklare / agente inmobiliario",
    what:
      "Den kommersiella mellanpersonen som visar bostäder, förhandlar och förmedlar kontakt mellan köpare och säljare. I Spanien representerar mäklaren ofta säljarsidan eller transaktionen, inte automatiskt köparen ensam.",
    swedishView:
      "Utgå inte från att mäklaren gör samma kontroller som en svensk köpare förväntar sig. Använd egen rådgivare.",
  },
  {
    role: "Registro de la Propiedad",
    what:
      "Fastighetsregistret där äganderätt och rättigheter kopplade till fast egendom registreras. En nota simple används ofta för att kontrollera ägare, inteckningar, belastningar och grundläggande registreringsinformation.",
    swedishView:
      "Detta är en av de viktigaste kontrollerna innan du går vidare med kontrakt och betalning.",
  },
  {
    role: "Catastro",
    what:
      "Ett administrativt och skattemässigt register med fastighetsbeskrivning, referensnummer, yta, användning och kartinformation. Det är inte samma sak som fastighetsregistret.",
    swedishView:
      "Jämför alltid Catastro med Registro, ritningar och verkligheten på plats. Skillnader kan vara viktiga.",
  },
  {
    role: "Arkitekt / teknisk besiktningsman",
    what:
      "En teknisk expert som kan bedöma konstruktion, renoveringar, fukttecken, tak, terrasser, installationer, pool, mark, tillbyggnader och om det som finns på plats verkar stämma med dokumenten.",
    swedishView:
      "Särskilt viktigt vid villor, äldre bostäder, renoverade fastigheter, lantliga hus och bostäder med tomt eller pool.",
  },
];

const purchaseSteps = [
  {
    step: "1. NIE och praktisk förberedelse",
    text:
      "Utländska köpare behöver normalt ett NIE-nummer för juridiska och skattemässiga ärenden i Spanien. Det kan ansökas i Spanien eller via spansk konsulär myndighet i bosättningslandet.",
  },
  {
    step: "2. Första dokumentkontroll",
    text:
      "Innan du betalar större belopp bör du kontrollera nota simple, säljarens behörighet, eventuella inteckningar, fastighetens beskrivning, Catastro, energicertifikat, community-regler och möjliga bygg- eller planrisker.",
  },
  {
    step: "3. Reservationsavtal",
    text:
      "Ett reservationsavtal kan ta bostaden från marknaden under en kort period. Det är vanligt, men bör inte skrivas under slentrianmässigt utan att förstå villkor, återbetalning och tidsfrister.",
  },
  {
    step: "4. Contrato de arras",
    text:
      "Ett arras-avtal är ofta mer bindande än svenska köpare förväntar sig. Det kan innehålla handpenning, villkor, tidsfrister och konsekvenser om köpare eller säljare inte fullföljer.",
  },
  {
    step: "5. Due diligence före notarie",
    text:
      "Advokaten bör kontrollera juridisk status, skulder, bygglov, community, skatter, servitut, uthyrningsmöjligheter, renoveringar, licenser och om bostaden matchar dokumenten.",
  },
  {
    step: "6. Escritura pública hos notarie",
    text:
      "Själva köpet formaliseras normalt genom en offentlig köpehandling, escritura pública, inför notarie. Betalningsmedel, parter och köpvillkor dokumenteras.",
  },
  {
    step: "7. Skatter, registrering och efterarbete",
    text:
      "Efter köpet måste rätt skatt betalas, handlingen registreras i Registro de la Propiedad och praktiska ändringar göras: el, vatten, community, lokal skatt, försäkring och ibland Catastro.",
  },
];

const legalChecks = [
  {
    title: "Ägande och belastningar",
    text:
      "Kontrollera vem som äger bostaden, om det finns inteckningar, servitut, beslag, nyttjanderätter, obetalda avgifter eller andra registrerade belastningar.",
  },
  {
    title: "Registro jämfört med Catastro",
    text:
      "Ytor, gränser, byggnader och användning kan ibland skilja sig mellan Registro, Catastro, ritningar och verkligheten. Skillnaderna bör bedömas innan köp.",
  },
  {
    title: "Bygglov och urbanistisk status",
    text:
      "Särskilt för villor, lantliga hus, tillbyggnader, pooler, terrasser och renoveringar bör advokat och teknisk expert kontrollera om allt är lagligt och korrekt dokumenterat.",
  },
  {
    title: "Community-regler",
    text:
      "Om bostaden ingår i en comunidad de propietarios bör du kontrollera stadgar, protokoll, avgifter, skulder, planerade arbeten, uthyrningsbegränsningar och regler för husdjur eller renovering.",
  },
  {
    title: "Turistuthyrning",
    text:
      "Turistuthyrning kräver mer än att bostaden är attraktiv. Kontrollera regionala regler, kommunala krav, eventuell registrering och community-regler innan du räknar med intäkter.",
  },
  {
    title: "Energicertifikat",
    text:
      "Vid försäljning ska energicertifikat och energimärkning normalt hanteras enligt spanska regler. Det är en del av den dokumentation köpare bör efterfråga.",
  },
];

const costCategories = [
  {
    title: "Begagnad bostad",
    text:
      "Vid köp av begagnad bostad betalas normalt ITP, en regional överlåtelseskatt. På Costa Blanca, i Comunitat Valenciana, är den generella ITP-satsen 9 procent för många bostadsköp från 1 juni 2026, med högre eller reducerade satser i vissa fall.",
  },
  {
    title: "Nyproduktion",
    text:
      "Vid köp av ny bostad gäller normalt IVA i stället för ITP. Den statliga skatteinformationen anger 10 procent IVA som generell nivå för bostäder och 4 procent för vissa skyddade bostäder. AJD kan också tillkomma.",
  },
  {
    title: "Notarie och fastighetsregister",
    text:
      "Notarie- och registreringskostnader beror bland annat på pris, dokumenttyp och transaktionens struktur. De är ofta mindre än skatterna men bör ändå räknas in i totalbudgeten.",
  },
  {
    title: "Advokat",
    text:
      "En oberoende advokat är en kostnad, men bör ses som riskkontroll. Arvodet varierar beroende på komplexitet, bostadstyp, språk, förhandling och omfattning av due diligence.",
  },
  {
    title: "Gestor och administration",
    text:
      "Gestor eller gestoría kan ta betalt för administrativa uppgifter som skatteblanketter, byten av abonnemang, kontakt med myndigheter eller löpande icke-residentärenden.",
  },
  {
    title: "Löpande kostnader",
    text:
      "Räkna även med IBI, basura, community-avgifter, försäkring, el, vatten, internet, pool- och trädgårdsskötsel, underhåll, larm och eventuell deklarationshjälp.",
  },
];

const swedenDifferences = [
  {
    title: "Mäklarens roll känns ofta annorlunda",
    text:
      "I Sverige upplever många köpare att processen är mer standardiserad. I Spanien varierar dokumentation, kontrollnivå och ansvar mer mellan objekt, regioner och aktörer.",
  },
  {
    title: "Notarien är inte din personliga rådgivare",
    text:
      "Svenska köpare kan tro att notarieprocessen innebär full juridisk trygghet. Notarien är central, men din egen advokat behövs för köparens intresse och fördjupad kontroll före signering.",
  },
  {
    title: "Privata kontrakt kan få större konsekvenser",
    text:
      "Reservationsavtal och arras-avtal kan vara viktiga och ekonomiskt kännbara. Skriv inte under bara för att hålla kvar bostaden utan att förstå konsekvenserna.",
  },
  {
    title: "Två register måste förstås",
    text:
      "Registro de la Propiedad och Catastro har olika funktioner. Svenska köpare bör inte anta att ett enda dokument visar hela sanningen.",
  },
  {
    title: "Renoveringar och tillbyggnader kräver extra kontroll",
    text:
      "En pool, gäststudio, terrass, carport eller utbyggnad kan se normal ut men ändå behöva juridisk och teknisk kontroll.",
  },
  {
    title: "Uthyrning är inte automatiskt tillåten",
    text:
      "Svenska köpare som räknar med uthyrning bör kontrollera regionala turistregler, kommunala krav och community-regler före köp.",
  },
];

const redFlags = [
  "Säljaren eller mäklaren vill att du ska skriva under snabbt utan dokumentkontroll.",
  "Det finns ingen uppdaterad nota simple.",
  "Beskrivningen i Catastro stämmer inte med verkligheten.",
  "Tillbyggnader, pool, gästdel eller terrasser saknar tydlig dokumentation.",
  "Communityn har obetalda avgifter, konflikter eller planerade stora arbeten.",
  "Turistuthyrning presenteras som självklar utan att reglerna kontrollerats.",
  "Du får inte se arras-avtalet i god tid.",
  "Rådgivaren arbetar främst för säljaren eller mäklaren.",
];

const checklist = [
  "NIE-nummer eller plan för att skaffa NIE",
  "Pass och civilståndsdokument om relevant",
  "Nota simple från Registro de la Propiedad",
  "Catastro-referens och jämförelse med verkligheten",
  "Kopia av escritura eller tidigare ägarhandling",
  "Kontroll av inteckningar och belastningar",
  "IBI-kvitto och lokal skatteinformation",
  "Community-intyg och senaste protokoll om det finns community",
  "Energicertifikat",
  "Bygglov, licenser och dokument för tillbyggnader",
  "Besiktning eller teknisk kontroll vid villa, äldre bostad eller renovering",
  "Genomgång av reservations- eller arras-avtal före signering",
  "Klarhet om ITP, IVA, AJD och övriga köpkostnader",
  "Plan för el, vatten, försäkring, internet och efterarbete",
];

const faqs = [
  {
    question: "Behöver jag advokat när jag köper bostad i Spanien?",
    answer:
      "Det är starkt rekommenderat. Notarien är neutral och kontrollerar inte allt ur köparens perspektiv. En oberoende advokat hjälper dig att förstå juridiska risker innan du binder dig.",
  },
  {
    question: "Vad gör en gestor vid bostadsköp i Spanien?",
    answer:
      "En gestor hjälper med administration, skatteblanketter, registreringar, abonnemangsbyten och kontakt med myndigheter. En gestor är praktiskt användbar men ersätter inte juridisk rådgivning.",
  },
  {
    question: "Vad är skillnaden mellan notarie och advokat i Spanien?",
    answer:
      "Notarien är en offentlig funktionär som formaliserar och ger offentlig beviskraft åt köpehandlingen. Advokaten är din rådgivare och ska kontrollera risker och dokument för din räkning.",
  },
  {
    question: "Vad är en nota simple?",
    answer:
      "En nota simple är ett informationsutdrag från fastighetsregistret som ofta används för att kontrollera ägare, fastighetens registreringsuppgifter, inteckningar och vissa belastningar.",
  },
  {
    question: "Är Catastro samma sak som fastighetsregistret?",
    answer:
      "Nej. Catastro är ett administrativt och skattemässigt register, medan Registro de la Propiedad hanterar registrering av äganderätt och rättigheter kopplade till fast egendom.",
  },
  {
    question: "Hur mycket kostar det att köpa bostad i Spanien?",
    answer:
      "Det beror på region, bostadstyp, pris och om det är nyproduktion eller begagnad bostad. Räkna med skatter, notarie, register, advokat, eventuell gestor, bankkostnader och löpande kostnader.",
  },
];

const officialSources = [
  {
    title: "BOE — Ley del Notariado",
    description:
      "Spansk lag som reglerar notariernas offentliga roll. Artikel 1 beskriver notarien som offentlig funktionär med befogenhet att ge beviskraft åt avtal och rättshandlingar.",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-1862-4073",
  },
  {
    title: "BOE — Ley Hipotecaria",
    description:
      "Spansk fastighetsregisterlag. Artikel 1 anger att Registro de la Propiedad registrerar handlingar och kontrakt som rör äganderätt och andra rättigheter i fast egendom.",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-1946-2453",
  },
  {
    title: "Registradores de España — Registro de la Propiedad",
    description:
      "Officiell portal för fastighetsregistret, inklusive nota simple, certifikat och registerinformation.",
    href: "https://www.registradores.org/el-colegio/registro-de-la-propiedad",
  },
  {
    title: "Catastro — Referencia catastral",
    description:
      "Officiell information om den spanska cadastral reference, som är den obligatoriska identifieraren för fastigheter i Catastro.",
    href: "https://www.catastro.hacienda.gob.es/es-ES/referencia_catastral.html",
  },
  {
    title: "Ministerio de Asuntos Exteriores — NIE",
    description:
      "Officiell information om hur utlänningar kan ansöka om Número de Identidad de Extranjero, i Spanien eller via konsulat.",
    href: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx?scca=Pasaportes+y+otros+documentos&scco=Pa%C3%ADses+Bajos&scd=9&scs=N%C3%BAmero+de+Identidad+de+Extranjero+%28NIE%29",
  },
  {
    title: "Agencia Tributaria — IVA eller ITP vid bostadsköp",
    description:
      "Statlig information om när IVA eller ITP gäller vid köp av bostad samt generell IVA-nivå för ny bostad.",
    href: "https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
  },
  {
    title: "Agencia Tributaria Valenciana — ITP/AJD",
    description:
      "Regional skatteinformation för Comunitat Valenciana, inklusive ITP- och AJD-satser för bostäder och andra fastighetsöverlåtelser.",
    href: "https://atv.gva.es/es/itpajd",
  },
  {
    title: "BOE — Ley de Propiedad Horizontal",
    description:
      "Spansk lag som reglerar comunidades de propietarios, gemensamma delar, avgifter och ägarnas rättigheter och skyldigheter.",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-1960-10906",
  },
  {
    title: "BOE — Real Decreto 390/2021",
    description:
      "Regler om energicertifikat och energimärkning vid försäljning och uthyrning av byggnader.",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-2021-9176",
  },
  {
    title: "BOE — Decreto Ley 9/2024 Comunitat Valenciana",
    description:
      "Regeländringar i Valenciaregionen för viviendas de uso turístico och turistuthyrning.",
    href: "https://www.boe.es/buscar/doc.php?id=DOGV-r-2024-90168",
  },
];

export default function SpanishRulesSwedenPage() {
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
      "Spanska regler vid bostadsköp: advokat, notarie, gestor och juridiska kontroller",
    description:
      "En svensk guide om spanska regler, roller, dokument, skatter och juridiska kontroller vid köp av bostad i Spanien.",
    author: {
      "@type": "Organization",
      name: "Nordic Move Spain",
    },
    publisher: {
      "@type": "Organization",
      name: "Nordic Move Spain",
    },
    inLanguage: "sv-SE",
    mainEntityOfPage: "/sv/guides/spanish-rules-sweden",
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
            Spanska regler och roller
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Spanska regler vid bostadsköp: advokat, notarie, gestor och vad du
            måste kontrollera.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            För svenska köpare kan den spanska köpprocessen kännas bekant på
            ytan men fungera annorlunda i praktiken. Här får du en tydlig guide
            till rollerna, lagarna, dokumenten, kostnaderna och de vanligaste
            misstagen.
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

      {/* KEY TAKEAWAYS */}
      <section className="px-8 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[34px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Kort sagt
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
              Det här bör svenska köpare förstå direkt.
            </h2>

            <ul className="mt-6 space-y-4">
              {keyTakeaways.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-stone-700">
                  <span className="mt-1 text-[#c8a063]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Spanien är inte Sverige
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Den största risken är inte språket. Det är att tolka Spanien med
              svenska antaganden.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Många svenska köpare är vana vid en relativt strukturerad
              bostadsmarknad, tydliga objektbeskrivningar och en process där
              mycket känns standardiserat. I Spanien behöver köparen ofta vara
              mer aktiv med egna kontroller.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Det betyder inte att Spanien är osäkert. Det betyder att du måste
              förstå rätt roller. Notarien, advokaten, mäklaren, gestorn,
              fastighetsregistret och Catastro har olika funktioner. Om du
              blandar ihop dem kan du missa viktiga risker.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              En trygg köpprocess börjar därför inte med att skriva under ett
              reservationsavtal. Den börjar med att förstå vilka dokument som
              krävs, vem som företräder dig och vilka kontroller som ska göras
              innan pengar riskeras.
            </p>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="bg-white px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Roller i köpprocessen
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Vem gör vad när du köper bostad i Spanien?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {roles.map((item) => (
              <article
                key={item.role}
                className="rounded-[30px] bg-[#f6f1ea] p-8"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.role}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {item.what}
                </p>

                <p className="mt-5 leading-relaxed text-stone-700">
                  <strong>För svenska köpare:</strong> {item.swedishView}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Steg för steg
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Så ser en tryggare spansk köpprocess ut.
          </h2>

          <div className="mt-12 space-y-6">
            {purchaseSteps.map((item) => (
              <article key={item.step} className="rounded-[30px] bg-white p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.step}
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL CHECKS */}
      <section className="bg-[#e9dfd2] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
            Juridiska kontroller
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Det här bör kontrolleras innan du skriver under.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {legalChecks.map((item) => (
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

      {/* COSTS */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Kostnader och skatter
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Räkna inte bara på köpeskillingen. Räkna på hela ägandet.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {costCategories.map((item) => (
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

          <div className="mt-12 rounded-[34px] border border-[#c8a063]/40 bg-[#fffaf3] p-8">
            <h3 className="font-serif text-3xl text-[#1e2a3a]">
              Praktisk budgetregel
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-stone-700">
              För en trygg budget bör du alltid be om en skriftlig
              kostnadskalkyl innan du går vidare. Den bör skilja på skatt,
              notarie, register, advokat, bank, gestor, community, försäkring
              och löpande driftskostnader.
            </p>
          </div>
        </div>
      </section>

      {/* SWEDEN DIFFERENCES */}
      <section className="bg-white px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Skillnader mot Sverige
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Här tänker svenska köpare ofta fel.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {swedenDifferences.map((item) => (
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
      <section className="bg-[#e9dfd2] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
            Checklista
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Dokument och frågor att ha kontroll på före köp.
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

          <div className="mt-12 rounded-[34px] bg-[#1e2a3a] p-8 text-white">
            <h3 className="font-serif text-3xl">
              Nordic Move Spain-råd
            </h3>

            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-white/80">
              En bostad i Spanien ska inte bara vara vacker. Den ska vara
              juridiskt begriplig, tekniskt rimlig, ekonomiskt hållbar och
              praktiskt rätt för ditt framtida liv. Därför bör dokumenten
              kontrolleras innan känslan får avgöra.
            </p>
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
            Frågor svenska köpare ofta ställer om spanska regler.
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
            Lagar och myndighetskällor som är relevanta vid bostadsköp i
            Spanien.
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
            juridisk, skattemässig eller teknisk rådgivning. Regler och
            skattesatser kan ändras. Be alltid en oberoende advokat och relevant
            skatterådgivare kontrollera din specifika situation före köp.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-12 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vill du köpa tryggare?
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight">
            Få hjälp att förstå område, bostadstyp, regler och praktiska risker
            innan du går vidare.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Vår Area Match Assessment hjälper dig att jämföra platser på Costa
            Blanca North utifrån livsstil, budget, service, juridiska
            kontrollpunkter och praktiska behov.
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
