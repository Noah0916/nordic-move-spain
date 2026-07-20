export const metadata = {
  title:
    "Area Match & veilig kopen aan de Costa Blanca Noord | Gratis persoonlijk rapport | Nordic Move Spain",
  description:
    "Ontdek eerst welke omgeving en woning bij u passen. Start de uitgebreide Area Match-vragenlijst en ontvang kosteloos een persoonlijk rapport met gerichte informatie over wonen en kopen aan de Costa Blanca Noord.",
  keywords: [
    "Area Match Costa Blanca Noord",
    "gratis Area Match rapport",
    "woning kopen Spanje begeleiding",
    "huis kopen Costa Blanca Noord",
    "Buyer Discovery Tour Spanje",
    "veilig woning kopen Spanje",
    "aankoopbegeleiding Spanje",
    "Nordic Move Spain",
  ],
  alternates: {
    canonical: "/nl/services/area-match",
    languages: {
      en: "/services/area-match",
      nl: "/nl/services/area-match",
      de: "/de/services/area-match",
      sv: "/sv/services/area-match",
    },
  },
  openGraph: {
    title: "Area Match & veilig kopen aan de Costa Blanca Noord",
    description:
      "Vul de uitgebreide Area Match-vragenlijst in en ontvang kosteloos een persoonlijk rapport over de omgeving, leefstijl en woning die bij u passen.",
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: "/images/area-match.png",
        width: 1200,
        height: 630,
        alt: "Area Match en veilig een woning kopen aan de Costa Blanca Noord",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Area Match & veilig kopen aan de Costa Blanca Noord",
    description:
      "Een kosteloos persoonlijk Area Match-rapport, gerichte woningselectie en begeleiding voor internationale kopers aan de Costa Blanca Noord.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const questionnaireUrl = "/nl/relocation-assessment";

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.nordicmovespain.com/nl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Diensten",
      item: "https://www.nordicmovespain.com/nl/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Area Match & veilig kopen",
      item: "https://www.nordicmovespain.com/nl/services/area-match",
    },
  ],
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Area Match & veilig kopen aan de Costa Blanca Noord",
  serviceType:
    "Persoonlijke omgevingsanalyse, woningselectie en aankoopbegeleiding",
  description:
    "Een kosteloos persoonlijk Area Match-rapport op basis van een uitgebreide vragenlijst, gevolgd door een persoonlijk gesprek, gerichte woningselectie en optionele begeleiding tijdens bezichtigingen.",
  provider: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "https://www.nordicmovespain.com",
  },
  areaServed: [
    "Costa Blanca Noord",
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
      "Internationale kopers, tweede-woningkopers, gezinnen, gepensioneerden en investeerders",
  },
  offers: {
    "@type": "Offer",
    name: "Kosteloos persoonlijk Area Match-rapport",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://www.nordicmovespain.com/nl/relocation-assessment",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat is de Area Match?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De Area Match is een uitgebreide persoonlijke analyse van uw wensen, behoeften, leefstijl en toekomstplannen. Op basis daarvan ontvangt u kosteloos een rapport over de omgeving en het type woning dat waarschijnlijk het beste bij u past.",
      },
    },
    {
      "@type": "Question",
      name: "Waar kan ik de vragenlijst invullen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "U vindt de Nederlandstalige vragenlijst op https://www.nordicmovespain.com/nl/relocation-assessment. Alle knoppen op deze pagina die naar de vragenlijst verwijzen, leiden naar deze pagina.",
      },
    },
    {
      "@type": "Question",
      name: "Is het Area Match-rapport echt kosteloos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Het persoonlijke Area Match-rapport is kosteloos en zonder aankoopverplichting.",
      },
    },
    {
      "@type": "Question",
      name: "Wat gebeurt er na het rapport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Na ontvangst van het rapport plannen we een persoonlijk vervolggesprek. Daarna zoeken we samen met makelaars uit ons netwerk naar woningen die aansluiten op uw zoekcriteria, wensen en behoeften.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is de Buyer Discovery Tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tijdens de Buyer Discovery Tour ontdekt u passende gebieden, woningen en lokale voorzieningen. Waar passend brengen we u ook in contact met gelijkgestemde internationale kopers of bewoners met vergelijkbare interesses en achtergronden.",
      },
    },
  ],
};

export default function AreaMatchPage() {
  const quickFacts = [
    {
      title: "Uitgebreide vragenlijst",
      text: "We brengen uw woonwensen, leefstijl, praktische behoeften, budget, zorgen en toekomstplannen zorgvuldig in kaart.",
    },
    {
      title: "Kosteloos rapport",
      text: "U ontvangt zonder aankoopverplichting een persoonlijk rapport over de omgeving en het type woning dat waarschijnlijk bij u past.",
    },
    {
      title: "Gerichte woningselectie",
      text: "Op basis van uw profiel zoeken wij met makelaars uit ons netwerk naar woningen die aansluiten op uw criteria.",
    },
    {
      title: "Persoonlijke begeleiding",
      text: "Kies voor privébezichtigingen of voor onze begeleide Buyer Discovery Tour met extra aandacht voor omgeving, leefstijl en netwerk.",
    },
  ];

  const reportItems = [
    "Persoonlijke match met plaatsen en woongebieden",
    "Woningtype, indeling, privacy en buitenruimte",
    "Leefstijl, dagelijkse woonomgeving en sociale wensen",
    "Rust, levendigheid, seizoensdrukte en mogelijke geluidshinder",
    "Veiligheid en praktische aandachtspunten in de omgeving",
    "Artsen, ziekenhuizen, apotheken en toegang tot zorg",
    "Internationale en lokale scholen",
    "Restaurants, lokale keuken, markten en cultuur",
    "Inwoners, bevolkingssamenstelling en internationale gemeenschap",
    "Sport, golf, wellness, natuur en recreatie",
    "Bereikbaarheid, luchthaven, openbaar vervoer en dagelijkse voorzieningen",
    "Mogelijke aandachtspunten zoals steile toegangswegen, drukke wegen of afgelegen ligging",
  ];

  const questionnaireThemes = [
    {
      title: "Leefstijl",
      text: "Rust of levendigheid, strand of centrum, natuur, gastronomie, sport, cultuur en het dagelijkse ritme dat bij u past.",
    },
    {
      title: "Praktisch wonen",
      text: "Bereikbaarheid, winkels, zorg, scholen, mobiliteit, onderhoud en geschiktheid voor permanente of tijdelijke bewoning.",
    },
    {
      title: "Persoonlijke situatie",
      text: "Gezin, pensionering, tweede woning, huisdieren, sociale contacten, mobiliteit en plannen voor de langere termijn.",
    },
    {
      title: "Woning en budget",
      text: "Woningtype, slaapkamers, privacy, uitzicht, buitenruimte, verhuurwensen, vaste lasten, onderhoud en financiële grenzen.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Vul de uitgebreide vragenlijst in",
      text: "Via onze Nederlandstalige Area Match-vragenlijst deelt u uw woonwensen, behoeften, voorkeuren, zorgen en toekomstplannen.",
    },
    {
      number: "02",
      title: "Ontvang uw persoonlijke rapport",
      text: "Wij combineren uw antwoorden met marktonderzoek, lokale kennis, relevante data en praktische ervaring met internationale kopers.",
    },
    {
      number: "03",
      title: "Bespreek de uitkomsten persoonlijk",
      text: "Tijdens een vervolggesprek gaan we dieper in op uw wensen, twijfels, prioriteiten en zaken die u absoluut wilt vermijden.",
    },
    {
      number: "04",
      title: "Ontvang een passende woningselectie",
      text: "Wij schakelen ons netwerk van makelaars in en verzamelen woningen die zo goed mogelijk aansluiten op uw zoekcriteria, wensen en behoeften.",
    },
    {
      number: "05",
      title: "Kies uw manier van bezichtigen",
      text: "U kunt kiezen voor privébezichtigingen waarbij u de reis zelf regelt en wij de afspraken plannen, of voor de begeleide Buyer Discovery Tour.",
    },
    {
      number: "06",
      title: "Ga gericht verder richting aankoop",
      text: "Wanneer een woning serieus wordt, organiseren wij een technische inspectie door een onafhankelijke surveyor en juridische due diligence door een passende onafhankelijke advocaat.",
    },
  ];

  const privateViewingItems = [
    "U regelt zelf vlucht, verblijf en vervoer",
    "Wij plannen de woningbezichtigingen",
    "De selectie is gebaseerd op uw Area Match-profiel",
    "Geschikt voor kopers die zelfstandig willen reizen",
  ];

  const discoveryTourItems = [
    "Bezoek passende plaatsen, woongebieden en woningen",
    "Krijg gevoel bij de dagelijkse leefomgeving",
    "Ontdek voorzieningen, zorg, scholen, horeca en lokale cultuur",
    "Ontmoet waar mogelijk gelijkgestemde internationale kopers of bewoners",
    "Profiteer van begeleiding en een persoonlijk samengesteld programma",
  ];

  const professionals = [
    {
      title: "Technische inspectie door een onafhankelijke surveyor",
      text: "De surveyor beoordeelt de zichtbare en toegankelijke technische staat van de woning. Daarbij worden onder meer bouwkundige gebreken, vocht en waterindringing, installaties, zwembad, bijgebouwen en terrein beoordeeld. De woning wordt gemeten en noodzakelijke reparaties of aanvullend onderzoek worden in kaart gebracht.",
    },
    {
      title: "Vergelijking met documenten en registraties",
      text: "De surveyor vergelijkt de fysieke woning en gemeten oppervlaktes met beschikbare informatie, zoals de Nota Simple, het Catastro, makelaarsinformatie, het energiecertificaat, de ITE en aangeleverde planning-, certificaat- en vergunningstukken. Mogelijke afwijkingen rond oppervlaktes, aanbouwen, garages, zwembaden, registraties of vergunningen worden zo vroegtijdig gesignaleerd.",
    },
    {
      title: "Juridische due diligence door een onafhankelijke advocaat",
      text: "Wij regelen en coördineren een onafhankelijke advocaat die past bij uw taal, situatie en behoeften en expertise heeft in Spaans vastgoedrecht. De advocaat controleert onder meer eigendom, Nota Simple, lasten, schulden, vergunningen, contracten, juridische risico's en de voorwaarden van de overdracht vóór ondertekening.",
    },
    {
      title: "Eén duidelijk aankoopadvies",
      text: "Wij organiseren beide trajecten, bewaken welke informatie ontbreekt en brengen de belangrijkste bevindingen samen. Op basis van de technische inspectie en de juridische due diligence adviseren we: doorgaan, heroverwegen of niet kopen.",
    },
  ];

  const faqs = [
    {
      question: "Wat is een Area Match?",
      answer:
        "De Area Match is een uitgebreide analyse die uw wensen en behoeften voor een woning in Spanje in kaart brengt. De vragen zijn ontwikkeld op basis van gesprekken met kopers vóór en na hun verhuizing, aangevuld met marktonderzoek, lokale kennis en relevante data.",
    },
    {
      question: "Wat ontvang ik na het invullen?",
      answer:
        "U ontvangt kosteloos een persoonlijk rapport over de omgeving en het woningtype dat bij u past. Afhankelijk van uw profiel kan dit informatie bevatten over inwoners, lokale keuken, bevolkingssamenstelling, artsen, ziekenhuizen, scholen, voorzieningen, bereikbaarheid, leefstijl en mogelijke aandachtspunten.",
    },
    {
      question: "Waar staat de Nederlandstalige vragenlijst?",
      answer:
        "De vragenlijst staat op /nl/relocation-assessment. Alle relevante knoppen op deze pagina leiden rechtstreeks naar deze Nederlandstalige versie.",
    },
    {
      question: "Wat gebeurt er na het persoonlijke gesprek?",
      answer:
        "Op basis van alle verzamelde informatie gaan wij samen met makelaars uit ons netwerk op zoek naar woningen die aansluiten op uw criteria, wensen en behoeften.",
    },
    {
      question: "Kan ik alleen bezichtigingen laten regelen?",
      answer:
        "Ja. Bij privébezichtigingen regelt u zelf uw reis, verblijf en vervoer. Wij stemmen de woningselectie af en plannen de bezichtigingen voor u in.",
    },
    {
      question: "Wordt de Buyer Discovery Tour vergoed bij aankoop?",
      answer:
        "Bij aankoop van een woning via ons kan, afhankelijk van de aankoopprijs en de geldende voorwaarden, de helft of de volledige tour worden vergoed. Raadpleeg altijd de actuele voorwaarden voor de precieze toepassing.",
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
              aria-label="Broodkruimel"
              className="mb-10 flex flex-wrap items-center gap-2 text-sm text-stone-500"
            >
              <a href="/nl" className="transition hover:text-[#1e2a3a]">
                Home
              </a>
              <span aria-hidden="true">/</span>
              <a
                href="/nl/services"
                className="transition hover:text-[#1e2a3a]"
              >
                Diensten
              </a>
              <span aria-hidden="true">/</span>
              <span className="text-stone-700">
                Area Match &amp; veilig kopen
              </span>
            </nav>

            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Persoonlijke Area Match
            </p>

            <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
              Ontdek eerst waar en hoe u wilt wonen. Zoek daarna pas naar de juiste
              woning.
            </h1>

            <p className="mt-10 max-w-5xl text-xl leading-relaxed text-stone-600">
              Onze Area Match is een uitgebreide vragenlijst die uw wensen en
              behoeften voor een woning in Spanje zorgvuldig in kaart brengt. De
              vragenlijst is samengesteld op basis van interviews met kopers aan wie
              wij vóór en na hun verhuizing vroegen wat zij eerder hadden willen
              weten en over welke onderwerpen zij meer kennis hadden willen hebben.
            </p>

            <p className="mt-6 max-w-5xl text-xl leading-relaxed text-stone-600">
              Op basis van uw antwoorden, marktonderzoek, lokale kennis en relevante
              data ontvangt u een uitgebreid en kosteloos rapport over de omgeving en
              het type woning dat bij u past. Het rapport kan onder meer ingaan op de
              omgeving, inwoners, lokale keuken, bevolkingssamenstelling, artsen,
              ziekenhuizen, scholen, voorzieningen, bereikbaarheid en leefstijl.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={questionnaireUrl}
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Start de Nederlandstalige vragenlijst
              </a>

              <a
                href="#werkwijze"
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Bekijk onze werkwijze
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
              Een vragenlijst die verder kijkt
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
              Niet alleen vragen wat u mooi vindt, maar begrijpen wat in de praktijk
              bij u past.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-white/80">
              Veel kopers beginnen met foto's, plaatsnamen en woningportalen. Wij
              draaien die volgorde om. Eerst brengen we uw dagelijks leven,
              voorkeuren, grenzen en toekomstplannen in kaart. Daarna bepalen we
              welke gebieden en woningen werkelijk kansrijk zijn.
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
              Vul de vragenlijst in
            </a>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Uw persoonlijke rapport
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Informatie over wonen, leven en kopen die aansluit op uw persoonlijke
              situatie.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
              U krijgt geen algemeen overzicht dat voor iedereen hetzelfde is. Wij
              vertalen uw antwoorden naar een persoonlijk vertrekpunt voor de juiste
              plaatsen, woongebieden en woningtypen.
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
              Na ontvangst van het rapport plannen we een persoonlijk vervolggesprek.
              Daarin verdiepen we uw wensen, beantwoorden we vragen en bepalen we
              samen welke volgende stap het beste bij u past.
            </p>
          </div>
        </section>

        <section id="werkwijze" className="scroll-mt-24 px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Van Area Match naar passende woning
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Een duidelijke route van persoonlijke analyse naar gerichte
                bezichtigingen.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-600">
                Alle stappen bouwen voort op dezelfde informatie. Daardoor zoeken we
                niet breder, maar slimmer en gerichter.
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
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Twee manieren om woningen te bekijken
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Zelfstandig reizen of volledig begeleid ontdekken.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[36px] bg-white p-9 shadow-sm md:p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Privébezichtigingen
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  U regelt de reis, wij regelen de woningen.
                </h3>
                <p className="mt-6 leading-relaxed text-stone-600">
                  Deze optie past bij kopers die zelfstandig willen reizen en vooral
                  ondersteuning wensen bij de woningselectie en planning van de
                  bezichtigingen.
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
                    alt="Buyer Discovery Tour aan de Costa Blanca Noord"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="p-9 md:p-10">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                    Buyer Discovery Tour
                  </p>
                  <h3 className="mt-5 font-serif text-4xl leading-tight">
                    Ervaar niet alleen de woning, maar ook het leven eromheen.
                  </h3>
                  <p className="mt-6 leading-relaxed text-white/80">
                    Tijdens deze begeleide tour ontdekt u passende gebieden,
                    voorzieningen en woningen. Waar relevant brengen wij u ook in
                    contact met gelijkgestemde internationale kopers of bewoners met
                    vergelijkbare interesses en achtergronden.
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
                    Bij aankoop van een woning via ons kan, afhankelijk van de
                    aankoopprijs en de geldende voorwaarden, de helft of de volledige
                    tour worden vergoed. Raadpleeg de actuele voorwaarden voor de
                    precieze toepassing.
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
                  alt="Onafhankelijke controles bij de aankoop van een woning in Spanje"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Veilig verder richting aankoop
                </p>
                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                  Wanneer een woning serieus wordt, begint de echte controle.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-white/85">
                  De Area Match en woningselectie helpen u eerst om gericht te
                  zoeken. Bij een concrete woning is het verstandig om juridische,
                  technische en administratieve risico's vóór aankoop te laten
                  beoordelen.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  Denk aan eigendom, vergunningen, uitbreidingen, perceelgrenzen,
                  zichtbare gebreken, vocht, installaties, gemeenschapsregels,
                  jaarlijkse kosten en mogelijke beperkingen voor gebruik of verhuur.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Onafhankelijke specialisten
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Twee onafhankelijke beoordelingen, samengebracht in één helder advies.
              </h2>
              <p className="mt-8 text-xl leading-relaxed text-stone-600">
                Bij Nordic Move krijgt u niet één algemene beoordeling, maar twee
                afzonderlijke rapportages van onafhankelijke professionals: een
                technische inspectie door een surveyor en juridische due diligence door
                een passende onafhankelijke advocaat. Wij organiseren beide trajecten,
                bewaken welke informatie ontbreekt en brengen de belangrijkste
                bevindingen samen in één duidelijk aankoopadvies.
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
                Meer dan een woningzoekopdracht
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                De juiste omgeving bepaalt minstens zoveel als de woning zelf.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Een woning kan op foto's perfect lijken, terwijl de dagelijkse
                werkelijkheid niet aansluit op uw verwachtingen. Misschien is het
                gebied in de winter te stil, ligt zorg te ver weg, is de toegang te
                steil of blijkt de omgeving drukker dan gedacht.
              </p>
              <p className="mt-6">
                Daarom kijken wij naar de combinatie van woning, omgeving,
                bereikbaarheid, voorzieningen, sociale mogelijkheden, seizoenen en
                praktische geschiktheid voor de komende jaren.
              </p>
              <p className="mt-6">
                Zo voorkomt u dat u alleen verliefd wordt op een huis en pas later
                ontdekt dat de locatie niet bij uw leven past.
              </p>
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#e9dfd2] p-10 md:p-14 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Vertrouwen &amp; begeleiding
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Nordic Move Spain
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  Wij begeleiden internationale kopers bij het vinden van een
                  passende omgeving, een gerichte woningselectie en een beter
                  voorbereide aankoop aan de Costa Blanca Noord.
                </p>
                <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-[#1e2a3a]">
                  Laatst bijgewerkt: juli 2026
                </p>
              </div>

              <div className="rounded-[32px] bg-white/80 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Aankoopadvies
                </p>
                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  Doorgaan, heroverwegen of niet kopen.
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  De onafhankelijke surveyor beoordeelt de technische staat en de
                  onafhankelijke advocaat voert de juridische due diligence uit. Wij
                  coördineren beide trajecten, signaleren ontbrekende informatie en
                  vertalen de gezamenlijke bevindingen naar een duidelijk aankoopadvies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Veelgestelde vragen
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Vragen over de Area Match en onze werkwijze.
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
              Begin kosteloos en zonder verplichtingen
            </p>
            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Ontdek welke omgeving, woning en vervolgstap het beste passen bij uw
              toekomst in Spanje.
            </h2>
            <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              Vul de Nederlandstalige Area Match-vragenlijst in en ontvang uw
              persoonlijke rapport. Daarna plannen we een vervolggesprek waarin we de
              resultaten en de beste volgende stap samen bespreken.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={questionnaireUrl}
                className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#15202d]"
              >
                Start de Nederlandstalige vragenlijst
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}