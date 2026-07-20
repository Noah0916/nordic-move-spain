export const metadata = {
  title:
    "Area Match & tryggt bostadsköp på norra Costa Blanca | Kostnadsfri personlig rapport | Nordic Move Spain",
  description:
    "Ta först reda på vilket område och vilken bostad som passar dig. Starta det omfattande Area Match-formuläret och få kostnadsfritt en personlig rapport med riktad information om att bo och köpa bostad på norra Costa Blanca.",
  keywords: [
    "Area Match norra Costa Blanca",
    "kostnadsfri Area Match-rapport",
    "köparrådgivning vid bostadsköp i Spanien",
    "köpa hus på norra Costa Blanca",
    "Buyer Discovery Tour Spanien",
    "köpa bostad tryggt i Spanien",
    "köparrådgivning Spanien",
    "Nordic Move Spain",
  ],
  alternates: {
    canonical: "/sv/services/area-match",
    languages: {
      en: "/services/area-match",
      nl: "/nl/services/area-match",
      de: "/de/services/area-match",
      sv: "/sv/services/area-match",
    },
  },
  openGraph: {
    title: "Area Match & tryggt bostadsköp på norra Costa Blanca",
    description:
      "Fyll i det omfattande Area Match-formuläret och få kostnadsfritt en personlig rapport om området, livsstilen och bostaden som passar dig.",
    type: "website",
    locale: "sv_SE",
    images: [
      {
        url: "/images/area-match.png",
        width: 1200,
        height: 630,
        alt: "Area Match och tryggt bostadsköp på norra Costa Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Area Match & tryggt bostadsköp på norra Costa Blanca",
    description:
      "En kostnadsfri personlig Area Match-rapport, ett riktat bostadsurval och köparrådgivning för internationella köpare på norra Costa Blanca.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const questionnaireUrl = "/sv/relocation-assessment";
const contactUrl = "/sv/contact";

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Kontakt",
      item: "https://www.nordicmovespain.com/sv/contact",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Relocation Assessment",
      item: "https://www.nordicmovespain.com/sv/relocation-assessment",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Area Match & tryggt bostadsköp",
      item: "https://www.nordicmovespain.com/sv/relocation-assessment",
    },
  ],
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Area Match & tryggt bostadsköp på norra Costa Blanca",
  serviceType:
    "Personlig områdesanalys, bostadsurval och köparrådgivning",
  description:
    "En kostnadsfri personlig Area Match-rapport baserad på ett omfattande frågeformulär, följd av ett personligt samtal, ett riktat bostadsurval och valfri hjälp vid visningar.",
  provider: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "https://www.nordicmovespain.com",
  },
  areaServed: [
    "norra Costa Blanca",
    "Dénia",
    "Jávea",
    "Moraira",
    "Benissa",
    "Calpe",
    "Altea",
  ],
  audience: {
    "@type": "Audience",
    audienceType:
      "Internationella köpare, köpare av fritidsbostäder, familjer, pensionärer och investerare",
  },
  offers: {
    "@type": "Offer",
    name: "Kostnadsfri personlig Area Match-rapport",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://www.nordicmovespain.com/sv/relocation-assessment",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vad är Area Match?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Area Match är en omfattande personlig analys av dina önskemål, behov, din livsstil och dina framtidsplaner. Utifrån detta får du kostnadsfritt en rapport om området och den bostadstyp som sannolikt passar dig bäst.",
      },
    },
    {
      "@type": "Question",
      name: "Var kan jag fylla i frågeformuläret?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Det svenskspråkiga frågeformuläret finns på https://www.nordicmovespain.com/sv/relocation-assessment. Alla knappar på den här sidan som hänvisar till frågeformuläret leder dit.",
      },
    },
    {
      "@type": "Question",
      name: "Är Area Match-rapporten verkligen kostnadsfri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Den personliga Area Match-rapporten är kostnadsfri och innebär inget köptvång.",
      },
    },
    {
      "@type": "Question",
      name: "Vad händer efter rapporten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "När du har fått rapporten bokar vi ett personligt uppföljningssamtal. Därefter söker vi tillsammans med mäklare i vårt nätverk efter bostäder som motsvarar dina sökkriterier, önskemål och behov.",
      },
    },
    {
      "@type": "Question",
      name: "Vad är Buyer Discovery Tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Buyer Discovery Tour får du lära känna lämpliga områden, bostäder och lokal service. När det är relevant sätter vi dig också i kontakt med likasinnade internationella köpare eller boende med liknande intressen och bakgrund.",
      },
    },
  ],
};

export default function AreaMatchPage() {
  const quickFacts = [
    {
      title: "Omfattande frågeformulär",
      text: "Vi kartlägger noggrant dina boendeönskemål, din livsstil, dina praktiska behov, din budget, dina funderingar och dina framtidsplaner.",
    },
    {
      title: "Kostnadsfri rapport",
      text: "Du får en personlig rapport om området och den bostadstyp som sannolikt passar dig, utan någon köpplikt.",
    },
    {
      title: "Riktat bostadsurval",
      text: "Utifrån din profil söker vi tillsammans med mäklare i vårt nätverk efter bostäder som motsvarar dina kriterier.",
    },
    {
      title: "Personlig vägledning",
      text: "Välj privata visningar eller vår guidade Buyer Discovery Tour med särskilt fokus på område, livsstil och nätverk.",
    },
  ];

  const reportItems = [
    "Personlig matchning med orter och bostadsområden",
    "Bostadstyp, planlösning, avskildhet och utomhusmiljö",
    "Livsstil, vardagsmiljö och sociala önskemål",
    "Lugn, liv och rörelse, säsongsbelastning och möjlig bullerstörning",
    "Trygghet och praktiska frågor i närområdet",
    "Läkare, sjukhus, apotek och tillgång till vård",
    "Internationella och lokala skolor",
    "Restauranger, lokal mat, marknader och kultur",
    "Invånare, befolkningssammansättning och internationellt samhälle",
    "Sport, golf, wellness, natur och fritid",
    "Tillgänglighet, flygplats, kollektivtrafik och daglig service",
    "Möjliga uppmärksamhetspunkter som branta tillfartsvägar, hårt trafikerade vägar eller avskilt läge",
  ];

  const questionnaireThemes = [
    {
      title: "Livsstil",
      text: "Lugn eller liv och rörelse, strand eller centrum, natur, gastronomi, sport, kultur och den vardagsrytm som passar dig.",
    },
    {
      title: "Praktiskt boende",
      text: "Tillgänglighet, butiker, vård, skolor, mobilitet, underhåll och lämplighet för permanent eller tillfälligt boende.",
    },
    {
      title: "Personlig situation",
      text: "Familj, pension, fritidsbostad, husdjur, sociala kontakter, mobilitet och långsiktiga planer.",
    },
    {
      title: "Bostad och budget",
      text: "Bostadstyp, sovrum, avskildhet, utsikt, utomhusytor, uthyrningsönskemål, löpande kostnader, underhåll och ekonomiska gränser.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Fyll i det omfattande frågeformuläret",
      text: "I vårt svenskspråkiga Area Match-formulär delar du dina boendeönskemål, behov, preferenser, funderingar och framtidsplaner med oss.",
    },
    {
      number: "02",
      title: "Få din personliga rapport",
      text: "Vi kombinerar dina svar med marknadsundersökning, lokal kunskap, relevanta data och praktisk erfarenhet av internationella köpare.",
    },
    {
      number: "03",
      title: "Gå igenom resultaten personligen",
      text: "I ett uppföljningssamtal går vi djupare in på dina önskemål, tveksamheter, prioriteringar och sådant du absolut vill undvika.",
    },
    {
      number: "04",
      title: "Få ett passande bostadsurval",
      text: "Vi involverar vårt mäklarnätverk och sammanställer bostäder som så långt som möjligt motsvarar dina sökkriterier, önskemål och behov.",
    },
    {
      number: "05",
      title: "Välj hur du vill gå på visningar",
      text: "Du kan välja privata visningar, där du själv ordnar resan och vi planerar tiderna, eller välja den guidade Buyer Discovery Tour.",
    },
    {
      number: "06",
      title: "Gå målmedvetet vidare mot köp",
      text: "När en bostad blir ett seriöst alternativ ordnar vi en teknisk besiktning av en oberoende besiktningsman och juridisk due diligence av en lämplig oberoende advokat.",
    },
  ];

  const privateViewingItems = [
    "Du ordnar själv flyg, boende och transport",
    "Vi planerar bostadsvisningarna",
    "Urvalet baseras på din Area Match-profil",
    "Passar köpare som vill resa på egen hand",
  ];

  const discoveryTourItems = [
    "Besök lämpliga orter, bostadsområden och bostäder",
    "Få en känsla för vardagsmiljön",
    "Upptäck service, vård, skolor, gastronomi och lokal kultur",
    "Träffa när det är möjligt likasinnade internationella köpare eller boende",
    "Få vägledning och ett personligt utformat program",
  ];

  const professionals = [
    {
      title: "Teknisk besiktning av en oberoende besiktningsman",
      text: "Besiktningsmannen bedömer bostadens synliga och åtkomliga tekniska skick. Bland annat granskas byggfel, fukt och vatteninträngning, installationer, pool, uthus och tomt. Bostaden mäts upp och nödvändiga reparationer eller fortsatta undersökningar dokumenteras.",
    },
    {
      title: "Jämförelse med dokument och register",
      text: "Besiktningsmannen jämför den faktiska bostaden och de uppmätta ytorna med tillgänglig information, såsom Nota Simple, fastighetsregistret, mäklaruppgifter, energideklarationen, ITE samt inlämnade planerings-, intygs- och tillståndshandlingar. Möjliga avvikelser kring ytor, tillbyggnader, garage, pooler, registreringar eller tillstånd kan därmed upptäckas tidigt.",
    },
    {
      title: "Juridisk due diligence av en oberoende advokat",
      text: "Vi förmedlar och samordnar en oberoende advokat som passar ditt språk, din situation och dina behov och som har erfarenhet av spansk fastighetsrätt. Advokaten granskar bland annat äganderätt, Nota Simple, belastningar, skulder, tillstånd, avtal, juridiska risker och villkoren för överlåtelsen före undertecknandet.",
    },
    {
      title: "En tydlig köprekommendation",
      text: "Vi organiserar båda granskningsspåren, följer upp information som saknas och sammanför de viktigaste resultaten. Utifrån den tekniska besiktningen och den juridiska due diligence-processen rekommenderar vi: gå vidare, ompröva eller avstå från köp.",
    },
  ];

  const buyerGuidancePrinciples = [
    {
      number: "01",
      title: "Skriftlig uppdragsbeskrivning",
      text: "Före start dokumenteras vilka uppgifter Nordic Move ansvarar för, vilka beslut som ligger hos dig och vilka externa specialister som behövs.",
    },
    {
      number: "02",
      title: "Tydlig rollfördelning",
      text: "Nordic Move samordnar köpprocessen. Juridisk, skattemässig, teknisk eller värderingsrelaterad rådgivning lämnas av specialister med rätt kompetens.",
    },
    {
      number: "03",
      title: "Transparent ersättning",
      text: "Arvoden, möjliga förmedlingsrelationer och externa kostnader förklaras skriftligt före respektive uppdrag, så att intressen och ansvarsområden förblir tydliga.",
    },
    {
      number: "04",
      title: "Dokumenterade beslutspunkter",
      text: "Öppna frågor, risker och nästa steg samlas på ett ställe. Därmed kan du medvetet gå vidare, ställa villkor, omförhandla eller avstå.",
    },
  ];

  const faqs = [
    {
      question: "Vad är Area Match?",
      answer:
        "Area Match är en omfattande analys som kartlägger dina önskemål och behov för en bostad i Spanien. Frågorna har utvecklats utifrån samtal med köpare före och efter deras flytt och kompletterats med marknadsundersökning, lokal kunskap och relevanta data.",
    },
    {
      question: "Vad får jag efter att jag har fyllt i formuläret?",
      answer:
        "Du får kostnadsfritt en personlig rapport om området och den bostadstyp som passar dig. Beroende på din profil kan den innehålla information om invånare, lokal mat, befolkningssammansättning, läkare, sjukhus, skolor, service, tillgänglighet, livsstil och möjliga uppmärksamhetspunkter.",
    },
    {
      question: "Var hittar jag det svenskspråkiga frågeformuläret?",
      answer:
        "Frågeformuläret finns på /sv/relocation-assessment. Alla relevanta knappar på den här sidan leder direkt till den svenskspråkiga versionen.",
    },
    {
      question: "Vad händer efter det personliga samtalet?",
      answer:
        "Utifrån all insamlad information söker vi tillsammans med mäklare i vårt nätverk efter bostäder som motsvarar dina kriterier, önskemål och behov.",
    },
    {
      question: "Kan jag få hjälp enbart med visningar?",
      answer:
        "Ja. Vid privata visningar ordnar du själv resa, boende och transport. Vi stämmer av bostadsurvalet och planerar visningarna åt dig.",
    },
    {
      question: "Återbetalas Buyer Discovery Tour vid köp?",
      answer:
        "Vid köp av en bostad genom oss kan, beroende på köpesumman och gällande villkor, halva eller hela kostnaden för turen återbetalas. De aktuella villkoren gäller alltid.",
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
          __html: JSON.stringify(serviceStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
        <section className="px-8 py-28">
          <div className="mx-auto max-w-6xl">
            <nav
              aria-label="Brödsmulor"
              className="mb-10 flex flex-wrap items-center gap-2 text-sm text-stone-500"
            >
              <a href={contactUrl} className="transition hover:text-[#1e2a3a]">
                Kontakt
              </a>
              <span aria-hidden="true">/</span>
              <a
                href={questionnaireUrl}
                className="transition hover:text-[#1e2a3a]"
              >
                Relocation Assessment
              </a>
              <span aria-hidden="true">/</span>
              <span className="text-stone-700">
                Area Match &amp; tryggt bostadsköp
              </span>
            </nav>

            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Personlig Area Match
            </p>

            <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
              Ta först reda på var och hur du vill bo. Sök därefter efter rätt bostad.
            </h1>

            <p className="mt-10 max-w-5xl text-xl leading-relaxed text-stone-600">
              Vår Area Match är ett omfattande frågeformulär som noggrant kartlägger dina önskemål och behov för en bostad i Spanien. Formuläret bygger på intervjuer med köpare som vi före och efter deras flytt frågade vad de hade velat veta tidigare och inom vilka områden de hade behövt mer information.
            </p>

            <p className="mt-6 max-w-5xl text-xl leading-relaxed text-stone-600">
              Utifrån dina svar, vår marknadsundersökning, lokala kunskap och relevanta data
              får du en omfattande och kostnadsfri rapport om området och den bostadstyp
              som passar dig. Rapporten kan bland annat behandla närområde, invånare,
              lokal mat, befolkningssammansättning, läkare, sjukhus, skolor, service,
              tillgänglighet och livsstil.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={questionnaireUrl}
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Starta det svenskspråkiga frågeformuläret
              </a>

              <a
                href={contactUrl}
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Boka personlig rådgivning
              </a>
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {quickFacts.map((fact) => (
                <div
                  key={fact.title}
                  className="rounded-[28px] bg-white p-7 shadow-sm"
                >
                  <h2 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {fact.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {fact.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-10 text-white shadow-sm md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ett frågeformulär som går på djupet
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
              Inte bara fråga vad du tycker om, utan förstå vad som fungerar för dig i praktiken.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-white/80">
              Många köpare börjar med bilder, ortsnamn och bostadsportaler. Vi vänder på ordningen. Först kartlägger vi din vardag, dina preferenser, gränser och framtidsplaner. Därefter avgör vi vilka områden och bostäder som verkligen är relevanta.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {questionnaireThemes.map((theme) => (
                <div
                  key={theme.title}
                  className="rounded-[28px] bg-white/10 p-7"
                >
                  <h3 className="font-serif text-2xl leading-tight text-white">
                    {theme.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    {theme.text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={questionnaireUrl}
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Fyll i frågeformuläret
            </a>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Din personliga rapport
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Information om boende, vardagsliv och bostadsköp som passar din personliga situation.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
              Du får inte en allmän översikt som ser likadan ut för alla. Vi omvandlar dina svar till en personlig utgångspunkt för rätt orter, bostadsområden och bostadstyper.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {reportItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#f6f1ea] p-5 leading-relaxed text-stone-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-600">
              När du har fått rapporten bokar vi ett personligt uppföljningssamtal. Där fördjupar vi dina önskemål, besvarar frågor och avgör tillsammans vilket nästa steg som passar dig bäst.
            </p>
          </div>
        </section>

        <section id="arbetssatt" className="scroll-mt-24 px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Från Area Match till rätt bostad
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                En tydlig väg från personlig analys till riktade visningar.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-600">
                Alla steg bygger på samma information. Därför söker vi inte bredare, utan smartare och mer målinriktat.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[32px] bg-white p-8 shadow-sm md:p-9"
                >
                  <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                    {step.number}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {step.title}
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#e9dfd2] p-10 shadow-sm md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Transparent köparrådgivning
            </p>

            <h2 className="mt-6 max-w-5xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Innan processen börjar bör du veta vem som ansvarar för vad och hur intressen redovisas.
            </h2>

            <div className="mt-8 max-w-5xl space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                Köparrådgivning av hög kvalitet börjar inte med stora löften, utan med ett tydligt uppdrag, dokumenterade ansvarsområden och klar kommunikation.
              </p>
              <p>
                En villa kan se övertygande ut på nätet men ändå inte passa din vardag, hur du vill använda bostaden eller dina framtidsplaner. Juridiska, tekniska eller praktiska frågor kan också upptäckas för sent när det känslomässiga beslutet redan är fattat.
              </p>
              <p>
                Därför strukturerar vi processen annorlunda: först förstå krav och delområden, sedan göra ett riktat urval, därefter låta specialister granska och först då fatta ett välgrundat köpbeslut.
              </p>
              <p>
                Vårt värde ligger inte i att visa dig så många hus som möjligt. Vårt värde ligger i att höja kvaliteten på ditt beslut och minska onödiga visningar, blinda fläckar och otydliga ansvarsområden.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {buyerGuidancePrinciples.map((item) => (
                <div
                  key={item.number}
                  className="rounded-[28px] bg-white/80 p-8 shadow-sm"
                >
                  <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                    {item.number}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {item.title}
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={contactUrl}
                className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#15202d]"
              >
                Kontakta oss
              </a>
              <a
                href={questionnaireUrl}
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Starta Relocation Assessment
              </a>
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Två sätt att gå på bostadsvisningar
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Res på egen hand eller upptäck området med full vägledning.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[36px] bg-white p-9 shadow-sm md:p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Privata visningar
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Du ordnar resan, vi ordnar bostäderna.
                </h3>
                <p className="mt-6 leading-relaxed text-stone-600">
                  Det här alternativet passar köpare som vill resa på egen hand och framför allt önskar hjälp med bostadsurvalet och planeringen av visningarna.
                </p>
                <div className="mt-8 grid gap-3">
                  {privateViewingItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-[#f6f1ea] p-4 text-stone-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[36px] bg-[#1e2a3a] text-white shadow-sm">
                <div className="relative min-h-[280px]">
                  <img
                    src="/images/discover-card.png"
                    alt="Buyer Discovery Tour på norra Costa Blanca"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="p-9 md:p-10">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                    Buyer Discovery Tour
                  </p>
                  <h3 className="mt-5 font-serif text-4xl leading-tight">
                    Upplev inte bara bostaden, utan också livet runt omkring.
                  </h3>
                  <p className="mt-6 leading-relaxed text-white/80">
                    Under den guidade turen lär du känna lämpliga områden, service och bostäder. När det är relevant sätter vi dig också i kontakt med likasinnade internationella köpare eller boende med liknande intressen och bakgrund.
                  </p>

                  <div className="mt-8 grid gap-3">
                    {discoveryTourItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-white/10 p-4 text-white/85"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <p className="mt-8 text-sm leading-relaxed text-white/65">
                    Vid köp av en bostad genom oss kan, beroende på köpesumman och gällande villkor, halva eller hela kostnaden för turen återbetalas. De aktuella villkoren gäller.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[420px]">
                <img
                  src="/images/legal.png"
                  alt="Oberoende granskningar vid bostadsköp i Spanien"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Tryggt vidare mot köp
                </p>
                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                  När en bostad blir ett seriöst alternativ börjar den verkliga granskningen.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-white/85">
                  Area Match och bostadsurvalet hjälper dig först att söka målinriktat. När det gäller en konkret bostad är det klokt att låta granska juridiska, tekniska och administrativa risker före köpet.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  Det omfattar bland annat äganderätt, tillstånd, tillbyggnader, tomtgränser, synliga fel, fukt, installationer, samfällighetsregler, årliga kostnader och möjliga begränsningar för användning eller uthyrning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Oberoende specialister
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Två oberoende granskningar, sammanförda i en tydlig rekommendation.
              </h2>
              <p className="mt-8 text-xl leading-relaxed text-stone-600">
                Hos Nordic Move får du inte bara en allmän bedömning, utan två separata rapporter från oberoende specialister: en teknisk besiktning av en besiktningsman och juridisk due diligence av en lämplig oberoende advokat. Vi organiserar båda processerna, följer upp information som saknas och sammanför de viktigaste resultaten i en tydlig köprekommendation.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {professionals.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[32px] bg-white p-8 shadow-sm"
                >
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
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

        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Mer än ett bostadssökande
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Rätt område är minst lika viktigt som själva bostaden.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                En bostad kan se perfekt ut på bilder samtidigt som vardagen inte motsvarar dina förväntningar. Området kanske är för lugnt på vintern, vården ligger för långt bort, tillfarten är för brant eller omgivningen är livligare än du trodde.
              </p>
              <p className="mt-6">
                Därför ser vi till kombinationen av bostad, område, tillgänglighet, service, sociala möjligheter, årstider och praktisk lämplighet för de kommande åren.
              </p>
              <p className="mt-6">
                På så sätt undviker du att bara förälska dig i ett hus och först senare upptäcka att läget inte passar ditt liv.
              </p>
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#e9dfd2] p-10 md:p-14 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Förtroende &amp; vägledning
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Nordic Move Spain
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  Vi hjälper internationella köpare att hitta rätt område, få ett riktat
                  bostadsurval och genomföra ett bättre förberett köp på norra Costa Blanca.
                </p>
                <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-[#1e2a3a]">
                  Senast uppdaterad: juli 2026
                </p>
              </div>

              <div className="rounded-[32px] bg-white/80 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Köprekommendation
                </p>
                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  Gå vidare, ompröva eller avstå från köp.
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  Den oberoende besiktningsmannen bedömer det tekniska skicket och den oberoende advokaten genomför juridisk due diligence. Vi samordnar båda processerna, identifierar information som saknas och omvandlar de samlade resultaten till en tydlig köprekommendation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Vanliga frågor
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Frågor om Area Match och vårt arbetssätt.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[28px] bg-white p-8 shadow-sm"
                >
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

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 text-center shadow-sm md:p-14 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Börja kostnadsfritt och utan förpliktelser
            </p>
            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Upptäck vilket område, vilken bostad och vilket nästa steg som passar bäst för din framtid i Spanien.
            </h2>
            <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              Fyll i det svenskspråkiga Area Match-formuläret och få din personliga rapport. Därefter bokar vi ett uppföljningssamtal där vi tillsammans går igenom resultaten och det bästa nästa steget.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={questionnaireUrl}
                className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#15202d]"
              >
                Starta det svenskspråkiga frågeformuläret
              </a>

              <a
                href={contactUrl}
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Kontakta oss
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}