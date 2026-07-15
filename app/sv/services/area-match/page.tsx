export const metadata = {
  title:
    "Area Match & Tryggt Köp Costa Blanca Nord | Kostnadsfri rapport | Nordic Move Spain",
  description:
    "Välj först rätt område och köp sedan tryggare. Be om din kostnadsfria Area Match-rapport via 34 noggrant utvalda frågor och upptäck hur Nordic Move Spain hjälper med område, risker, Purchase Safety Report och trygg köprådgivning.",
  keywords: [
    "Area Match Costa Blanca Nord",
    "kostnadsfri Area Match rapport",
    "tryggt köpa bostad Spanien",
    "köpa bostad Costa Blanca Nord rådgivning",
    "Purchase Safety Report Spanien",
    "var köpa bostad Costa Blanca Nord",
    "bästa platsen Costa Blanca Nord",
    "köprådgivning Spanien",
    "köpa hus Spanien risker",
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
    title:
      "Area Match & Tryggt Köp Costa Blanca Nord | Nordic Move Spain",
    description:
      "Börja med en kostnadsfri Area Match-rapport baserad på 34 noggrant utvalda frågor. Välj först rätt område och köp sedan med mer överblick och trygghet.",
    type: "website",
    locale: "sv_SE",
    images: [
      {
        url: "/images/area-match.png",
        width: 1200,
        height: 630,
        alt: "Area Match och tryggt bostadsköp på Costa Blanca Nord",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Area Match & Tryggt Köp Costa Blanca Nord | Nordic Move Spain",
    description:
      "Kostnadsfri Area Match-rapport, Purchase Safety Report och trygg köprådgivning för internationella köpare på Costa Blanca Nord.",
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
      name: "Tjänster",
      item: "https://www.nordicmovespain.com/sv/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Area Match & Tryggt Köp",
      item: "https://www.nordicmovespain.com/sv/services/area-match",
    },
  ],
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Area Match & Tryggt Köp Costa Blanca Nord",
  serviceType: "Property buying guidance, area matching and purchase risk review",
  description:
    "En kostnadsfri Area Match-rapport baserad på 34 noggrant utvalda frågor, kombinerad med ett tryggare köpsätt för internationella köpare på Costa Blanca Nord.",
  provider: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "https://www.nordicmovespain.com",
  },
  areaServed: [
    "Costa Blanca Nord",
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
      "Internationella köpare, fritidshusköpare, pensionärer, familjer och investerare",
  },
  offers: {
    "@type": "Offer",
    name: "Kostnadsfri Area Match-rapport",
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
      name: "Vad är Area Match-rapporten?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Area Match-rapporten är en kostnadsfri personlig rapport som hjälper till att avgöra vilka orter, bostadsområden och livsmiljöer på Costa Blanca Nord som passar bäst för din livsstil, budget, familjesituation, vårdbehov, sociala önskemål och långsiktiga planer.",
      },
    },
    {
      "@type": "Question",
      name: "Var finns de 34 frågorna?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "De 34 noggrant utvalda frågorna finns i Nordic Move Spains befintliga Relocation Assessment-formulär. Knapparna på denna sida leder till det formuläret.",
      },
    },
    {
      "@type": "Question",
      name: "Är Area Match-rapporten kostnadsfri?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ja. Area Match-rapporten är kostnadsfri och utan köpkrav. Den hjälper köpare att först förstå rätt region och boendemiljö innan de lägger månader på att söka eller planera visningar.",
      },
    },
    {
      "@type": "Question",
      name: "Vad är skillnaden mellan Area Match och Purchase Safety Report?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Area Match hjälper först till att avgöra vilken miljö som passar dig. Purchase Safety Report blir relevant när du seriöst överväger en specifik bostad och vill få juridiska, tekniska och praktiska risker granskade före köp.",
      },
    },
    {
      "@type": "Question",
      name: "Ersätter Nordic Move Spain en advokat eller teknisk specialist?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Nej. Nordic Move Spain ersätter inte advokat, notarie, gestor, skatterådgivare eller teknisk byggnadsspecialist. Vi strukturerar processen, samlar rätt specialister och hjälper dig att förstå resultaten tydligt.",
      },
    },
  ],
};

export default function AreaMatchPage() {
  const quickFacts = [
    {
      title: "34 frågor",
      text:
        "Det befintliga Relocation Assessment-formuläret innehåller 34 noggrant utvalda frågor om ditt liv, dina önskemål, din budget och dina framtidsplaner.",
    },
    {
      title: "Kostnadsfri rapport",
      text:
        "Area Match-rapporten är kostnadsfri och utan köpkrav. Du kan först orientera dig i lugn och ro innan du tar nästa steg.",
    },
    {
      title: "Sparar månader av sökande",
      text:
        "I stället för att samla lös information på egen hand får du en strukturerad startpunkt för rätt orter och bostadsområden.",
    },
    {
      title: "Tryggare köp",
      text:
        "När en bostad blir konkret kan Purchase Safety Report hjälpa till att synliggöra risker före köp.",
    },
  ];

  const safetySteps = [
    {
      number: "01",
      title: "Välj rätt område",
      text:
        "Innan du tittar på bostäder kartlägger vi vilka orter, bostadsområden och livsmiljöer som verkligen passar din vardag. Det minskar risken att du förälskar dig i en bostad i ett område som inte fungerar långsiktigt.",
    },
    {
      number: "02",
      title: "Upptäck risker tidigare",
      text:
        "Vi tittar inte bara på känsla och skönhet, utan också på praktiska faktorer som tillgänglighet, ljudnivå, säsongsvariationer, branta lägen, service, sjukvård, community-regler och möjliga begränsningar.",
    },
    {
      number: "03",
      title: "Gå vidare tryggare med Purchase Safety Report",
      text:
        "När du seriöst överväger en bostad följer en djupare köpkontroll. Med oberoende specialister synliggörs juridiska, tekniska och administrativa frågor före köp.",
    },
  ];

  const reportItems = [
    "Personlig matchning med orter och bostadsområden",
    "Livsstil och daglig boendemiljö",
    "Lugn, integritet, sommartryck och möjliga ljudrisker",
    "Säkerhet, lokala uppmärksamhetspunkter och synliga miljörisker",
    "Läkare, sjukhus och tillgång till vård",
    "Wellness, golf, sport och fritidsmöjligheter",
    "Restauranger, beach clubs och lokal kultur",
    "Internationella skolor och lämplighet för familjer",
    "Internationella gemenskaper och socialt nätverk",
    "Tillgänglighet, service och investeringsmöjligheter",
    "Risker som trafikerade vägar, kraftledningar, brant tillfart eller avskilt läge",
    "Första uppmärksamhetspunkter för uthyrning, community-regler och helårsbruk",
  ];

  const questionThemes = [
    {
      title: "Livsstil",
      text:
        "Lugn eller livlighet, strand eller centrum, restauranger, natur, golf, wellness, kultur och den vardagsrytm du söker.",
    },
    {
      title: "Praktisk boendekvalitet",
      text:
        "Tillgänglighet, bilberoende, butiker, vård, flygplats, vinterliv, underhåll och lämplighet för boende året runt.",
    },
    {
      title: "Personlig situation",
      text:
        "Familj, pension, fritidsbostad, husdjur, mobilitet, sociala kontakter, internationell gemenskap och långsiktiga planer.",
    },
    {
      title: "Bostad och köprisk",
      text:
        "Bostadstyp, integritet, utsikt, uthyrningstankar, community-regler, årliga kostnader, underhåll och köpsäkerhet.",
    },
  ];

  const professionals = [
    {
      title: "Oberoende advokat",
      text:
        "Advokaten granskar bland annat ägande, Nota Simple, möjliga belastningar, obetalda skulder, köpeavtal, tillstånd och juridiska risker som bör vara tydliga före underskrift.",
    },
    {
      title: "Notarie och gestor",
      text:
        "Notarien hanterar den formella överlåtelsen och undertecknandet av lagfartsdokumentet. En gestor kan hjälpa till med administrativa kontroller, registreringar, skatter, fastighetsuppgifter och praktisk uppföljning.",
    },
    {
      title: "Teknisk byggnadsspecialist",
      text:
        "Den tekniska specialisten tittar på synliga byggnadstekniska risker som fukt, sprickor, tak, installationer, el, pool, septiktank, underhållsrisker och möjliga renoveringskostnader.",
    },
  ];

  const secureItems = [
    "Kontrollerad åtkomst per kund och rådgivare",
    "Tvåfaktorsautentisering för extra säkerhet",
    "Färre lösa e-postmeddelanden, skärmbilder och WhatsApp-dokument",
    "En central plats för rapporter, dokument och nästa steg",
    "Tydliga versioner, deadlines och ansvar",
    "Mer överblick i en köpprocess med flera inblandade parter",
  ];

  const journeySteps = [
    {
      number: "01",
      title: "Fyll i det kostnadsfria 34-frågeformuläret",
      text:
        "Via det befintliga Relocation Assessment-formuläret svarar du på 34 noggrant utvalda frågor om din personliga situation, boendeönskemål, livsstil, budget, intressen, oro och långsiktiga planer.",
    },
    {
      number: "02",
      title: "Få din personliga Area Match-rapport",
      text:
        "Vi kombinerar dina svar med lokal kunskap, strukturerad analys och praktisk erfarenhet av internationella köpare. Du får en personlig översikt över orter, bostadsområden och gemenskaper som sannolikt passar dig bäst.",
    },
    {
      number: "03",
      title: "Planera ett kostnadsfritt personligt introduktionssamtal",
      text:
        "Under samtalet går vi djupare in på resultaten, dina tveksamheter, önskemål och risker. Vi vill inte bara förstå var du vill bo, utan också vad du absolut vill undvika.",
    },
    {
      number: "04",
      title: "Upplev områdena under Buyer Discovery Trip",
      text:
        "Du besöker utvalda orter och bostadsområden, träffar relevanta lokala specialister och upplever hur vardagen faktiskt känns innan du binder dig vid en bostad.",
    },
    {
      number: "05",
      title: "Låt en bostad granskas med Purchase Safety Report",
      text:
        "När du seriöst överväger en bostad koordinerar vi oberoende juridiska, tekniska och administrativa kontroller. Resultaten sammanställs tydligt innan du beslutar.",
    },
    {
      number: "06",
      title: "Besluta med överblick och säkra dokument",
      text:
        "Viktiga dokument, rapporter och nästa steg samlas där det är möjligt i en säker digital miljö med kontrollerad åtkomst och tvåfaktorsautentisering.",
    },
  ];

  const relatedGuides = [
    {
      title: "Where to Buy Property on the Costa Blanca North",
      text:
        "Jämför Moraira, Jávea, Altea, Benissa, Calpe och Dénia utifrån livsstil, tillgänglighet och vardagsboende.",
      href: "/sv/guides/where-to-buy-property-costa-blanca-north",
    },
    {
      title: "Honest Guide to Buying Property on the Costa Blanca North",
      text:
        "Läs om dolda kostnader, uthyrningsregler, ljud, community-regler och praktiska kontroller före köp.",
      href: "/sv/guides/honest-guide-buying-property-costa-blanca-north",
    },
    {
      title: "Moraira vs Jávea",
      text:
        "En praktisk jämförelse mellan två populära orter för internationella köpare på Costa Blanca Nord.",
      href: "/sv/guides/moraira-vs-javea",
    },
    {
      title: "Common Mistakes When Buying Property in Spain",
      text:
        "Undvik att upptäcka för sent att dokument, läge, kostnader eller tekniska risker inte stämmer.",
      href: "/sv/guides/common-mistakes-buying-property-spain",
    },
  ];

  const faqs = [
    {
      question: "Vad är Area Match-rapporten?",
      answer:
        "Area Match-rapporten är en kostnadsfri personlig rapport som hjälper till att avgöra vilka orter, bostadsområden och livsmiljöer på Costa Blanca Nord som passar bäst för din livsstil, budget, familjesituation, vårdbehov, sociala önskemål och långsiktiga planer.",
    },
    {
      question: "Var finns de 34 frågorna?",
      answer:
        "De 34 noggrant utvalda frågorna finns i det befintliga Relocation Assessment-formuläret. Den här sidan förklarar varför frågorna är viktiga, och alla viktiga knappar leder till formuläret.",
    },
    {
      question: "Är rapporten verkligen kostnadsfri?",
      answer:
        "Ja. Area Match-rapporten är kostnadsfri och utan köpkrav. Den ska ge dig en bättre startpunkt innan du lägger månader på att söka, jämföra och boka visningar.",
    },
    {
      question: "Vad är skillnaden mellan Area Match och Purchase Safety Report?",
      answer:
        "Area Match hjälper först till att avgöra vilken miljö som passar dig. Purchase Safety Report blir relevant när du seriöst överväger en specifik bostad och vill få juridiska, tekniska och praktiska risker granskade före köp.",
    },
    {
      question: "Är Nordic Move Spain en mäklare?",
      answer:
        "Nordic Move Spain börjar inte med att sälja en specifik bostad. Vi börjar med orientering, områdesval och köpsäkerhet så att du kan köpa mer fokuserat och bättre förberett.",
    },
    {
      question: "Ersätter detta juridisk eller teknisk rådgivning?",
      answer:
        "Nej. Vi ersätter inte advokat, notarie, gestor, skatterådgivare eller teknisk byggnadsspecialist. Vi strukturerar processen och koordinerar vid behov med oberoende specialister.",
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
        {/* HERO */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-6xl">
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex flex-wrap items-center gap-2 text-sm text-stone-500"
            >
              <a href="/sv" className="transition hover:text-[#1e2a3a]">
                Startsida
              </a>

              <span aria-hidden="true">/</span>

              <a
                href="/sv/services"
                className="transition hover:text-[#1e2a3a]"
              >
                Tjänster
              </a>

              <span aria-hidden="true">/</span>

              <span className="text-stone-700">
                Area Match &amp; Tryggt Köp
              </span>
            </nav>

            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Area Match &amp; Tryggt Köp
            </p>

            <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
              Välj först rätt område. Köp sedan med större trygghet.
            </h1>

            <p className="mt-10 max-w-5xl text-xl leading-relaxed text-stone-600">
              Att köpa bostad på Costa Blanca Nord börjar inte med den första
              visningen. Det börjar med frågan om området, vardagen och den
              praktiska verkligheten verkligen passar dig. En vacker bostad kan
              ändå bli fel val om läget är för bullrigt, för avskilt, för tomt
              på vintern eller innehåller dolda risker som du först upptäcker
              efter köpet.
            </p>

            <p className="mt-6 max-w-5xl text-xl leading-relaxed text-stone-600">
              Därför kombinerar vi vår kostnadsfria Area Match &amp; Lifestyle
              Intelligence Report med ett tydligt säkerhetsperspektiv. Du börjar
              med det befintliga Relocation Assessment-formuläret med 34
              noggrant utvalda frågor. Därefter kartlägger vi vilka orter och
              bostadsområden som passar din livsstil och vägleder dig mot en mer
              strukturerad köpprocess.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/sv/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Starta det kostnadsfria 34-frågeformuläret
              </a>

              <a
                href="/sv/services/purchase-safety-report"
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Se Purchase Safety Report
              </a>
            </div>
          </div>
        </section>

        {/* QUICK FACTS */}
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

        {/* SÄKERHETSANSATS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Vår säkerhetsansats
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Inte bara leta efter det som är vackert, utan kontrollera det
                som är viktigt.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-600">
                Många köpare tittar först på foton, utsikt och pris. Vi vänder
                på processen. Först tittar vi på livsstil, tillgänglighet,
                risker, område och praktisk lämplighet. Först därefter blir
                bostadssökandet fokuserat och meningsfullt.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {safetySteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[32px] bg-white p-8 shadow-sm"
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

        {/* 34 FRÅGOR BLOCK */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-10 text-white shadow-sm md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Baserat på 34 noggrant utvalda frågor
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
              Det befintliga formuläret hjälper oss snabbare förstå vilken
              miljö som verkligen passar dig.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-white/80">
              Många köpare söker i månader utifrån ortsnamn, bostadsfoton,
              portaler och andras råd. Area Match vänder på ordningen. Först
              kartlägger vi ditt liv, dina önskemål, gränser och framtidsplaner.
              Därefter jämför vi vilka områden som passar.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {questionThemes.map((theme) => (
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
              href="/sv/relocation-assessment"
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Till det kostnadsfria formuläret
            </a>
          </div>
        </section>

        {/* INNEHÅLL I RAPPORTEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vad din personliga rapport kan innehålla
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Från livsstil och sjukvård till ljud, tillgänglighet och risker.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
              I stället för att själv samla lös information i månader får du en
              tydlig och strukturerad översikt över de områden som passar din
              profil bäst. Vi tittar på mer än bostadspriser, avstånd till
              stranden eller kända ortsnamn.
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
              Rapporten kombinerar en personlig livsstilsmatch med praktisk
              lokal information. Du får därför inte bara en bild av var du kan
              köpa bostad, utan framför allt i vilken miljö du sannolikt kommer
              att känna dig trygg, bekväm och hemma på lång sikt.
            </p>
          </div>
        </section>

        {/* PURCHASE SAFETY REPORT */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[420px]">
                <img
                  src="/images/legal.png"
                  alt="Purchase Safety Report för ett tryggare bostadsköp på Costa Blanca Nord"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/25"></div>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Purchase Safety Report
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                  När en bostad blir konkret börjar den verkliga kontrollen.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/85">
                  Area Match-rapporten hjälper dig först att välja rätt område.
                  När du därefter seriöst överväger en specifik bostad hjälper
                  Purchase Safety Report till att tydliggöra de viktigaste
                  juridiska, tekniska och praktiska riskerna före köp.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  Det kan handla om ägarinformation, Nota Simple, tillstånd,
                  tillbyggnader, tomtgränser, synliga brister, fukt, pool,
                  septiktank, community-regler, årliga kostnader och möjliga
                  begränsningar för användning eller uthyrning.
                </p>

                <a
                  href="/sv/services/purchase-safety-report"
                  className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Upptäck Purchase Safety Report
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OBEROENDE SPECIALISTER */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Oberoende specialister
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Vi koordinerar rätt experter. De bedömer sitt eget område.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-600">
                Nordic Move Spain ersätter inte advokat, notarie, gestor,
                skatterådgivare eller teknisk byggnadsspecialist. Vi samlar rätt
                experter, strukturerar processen och hjälper dig att förstå
                resultaten tydligt.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
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

        {/* SÄKER KÖPMILJÖ */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Säker köpmiljö
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Inga lösa dokument via WhatsApp eller osäker e-post.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
              Vid bostadsköp i Spanien delas ofta känsliga dokument:
              passkopior, köpeavtal, bankuppgifter, skattedokument,
              ägarinformation, tekniska rapporter och juridiska handlingar. Vi
              anser att sådan information bör hanteras noggrant och överskådligt.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {secureItems.map((item) => (
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

        {/* ROUTE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Från kostnadsfri rapport till kontrollerat köp
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                En tydlig väg från orientering till trygghet.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-600">
                Area Match-rapporten är startpunkten. Därefter bygger vi vidare
                steg för steg: personligt samtal, Buyer Discovery Trip, riktat
                bostadssökande, Purchase Safety Report och en säker
                dokumentmiljö.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {journeySteps.map((step) => (
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

        {/* BUYER DISCOVERY */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[420px]">
                <img
                  src="/images/discover-card.png"
                  alt="Personlig Buyer Discovery Trip på Costa Blanca Nord"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Personlig Buyer Discovery Trip
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                  Inte bara besöka områden, utan också förstå risker och träffa
                  rätt människor.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/85">
                  Under resan upplever du hur vardagen i de utvalda orterna
                  faktiskt känns. Du besöker bostadsområden, service och platser
                  som passar din personliga profil, i stället för att följa en
                  allmän standardrutt.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  Baserat på din rapport och ditt introduktionssamtal kan vi
                  förbereda relevanta möten. Det kan vara pålitliga lokala
                  specialister, internationella boende, entreprenörer, framtida
                  köpare eller personer med gemensamma intressen.
                </p>

                <a
                  href="/sv/services/discovery-trips"
                  className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Upptäck Buyer Discovery Trip
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* VARFÖR DETTA ÄR VIKTIGT */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Mer än ett bostadssökande
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Rätt område och ett kontrollerat köp avgör om Spanien verkligen
                kan kännas som hemma.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                En bostad kan se perfekt ut på bilder, medan läget eller den
                juridiska och tekniska verkligheten senare visar sig inte passa
                dina förväntningar. Kanske ligger service för långt bort,
                området är för stilla på vintern, det finns oväntade
                community-regler eller en del av bostaden är inte korrekt
                registrerad.
              </p>

              <p className="mt-6">
                Därför tittar vi inte bara på bostaden i sig. Vi bedömer också
                området, tillgängligheten, livsstilen, lokal service, sociala
                möjligheter och praktisk lämplighet för de kommande åren. När en
                specifik bostad blir seriös går vi vidare till oberoende
                kontroller.
              </p>

              <p className="mt-6">
                Vår vägledning hjälper dig först att få klarhet i rätt plats och
                livsstil, och därefter närma dig köpet med mer lugn, överblick
                och trygghet.
              </p>
            </div>
          </div>
        </section>

        {/* INTERNA LÄNKAR */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-14 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Fortsätt orientera dig
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Läs vidare innan du väljer område eller bostad.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {relatedGuides.map((guide) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  className="rounded-[28px] bg-[#f6f1ea] p-7 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {guide.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-stone-600">
                    {guide.text}
                  </p>

                  <span className="mt-6 inline-block text-sm uppercase tracking-[0.22em] text-[#1e2a3a]">
                    Läs guide →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST BLOCK */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#e9dfd2] p-10 md:p-14 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Förtroende & vägledning
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Skrivet av Nordic Move Spain.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  Nordic Move Spain vägleder internationella köpare mot tryggare
                  och bättre förberedda bostadsbeslut på Costa Blanca. Vårt
                  arbetssätt kombinerar Area Match, oberoende köprådgivning,
                  juridiska och tekniska kontrollpartners, en säker kundportal
                  och praktiskt stöd efter köpet.
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
                  Vår vägledning ersätter inte personlig fackrådgivning.
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  Area Match och Purchase Safety hjälper dig att orientera dig
                  bättre och förstå risker mer strukturerat. Detta ersätter inte
                  juridisk, skattemässig, finansiell, medicinsk eller teknisk
                  rådgivning. För personliga beslut bör du alltid anlita
                  kvalificerade specialister.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Vanliga frågor
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Frågor om Area Match och tryggt köp.
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

        {/* SLOT CTA */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 text-center shadow-sm md:p-14 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Börja kostnadsfritt och utan förpliktelser
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Upptäck vilken ort, vilket bostadsområde och vilken köprutt som
              passar bäst för din framtid i Spanien.
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              Fyll i det befintliga 34-frågeformuläret och få din personliga
              Area Match &amp; Lifestyle Intelligence Report. Därefter kan du
              använda ett kostnadsfritt introduktionssamtal där vi går igenom
              resultaten och tillsammans ser vilket nästa steg som passar dig.
            </p>

            <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-stone-500">
              Om du senare seriöst överväger en bostad kan Purchase Safety
              Report hjälpa dig att bättre förstå juridiska, tekniska och
              praktiska risker före köpet.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/sv/relocation-assessment"
                className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#15202d]"
              >
                Starta det kostnadsfria 34-frågeformuläret
              </a>

              <a
                href="/sv/services/purchase-safety-report"
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Läs mer om tryggt köp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
