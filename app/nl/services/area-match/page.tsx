export const metadata = {
  title:
    "Area Match & Veilig Kopen Costa Blanca Noord | Gratis Rapport | Nordic Move Spain",
  description:
    "Kies eerst de juiste omgeving en koop daarna veiliger. Vraag gratis uw Area Match Rapport aan via een persoonlijke vragenlijst die helpt om een zeer goed beeld te krijgen van uw wensen, behoeften en toekomstplannen. Ontdek hoe Nordic Move Spain helpt met omgeving, risico’s, Purchase Safety Report en veilige aankoopbegeleiding.",
  keywords: [
    "Area Match Costa Blanca Noord",
    "gratis Area Match Rapport",
    "veilig woning kopen Spanje",
    "woning kopen Costa Blanca Noord begeleiding",
    "Purchase Safety Report Spanje",
    "waar woning kopen Costa Blanca Noord",
    "beste plaats Costa Blanca Noord",
    "koopbegeleiding Spanje",
    "huis kopen Spanje risico's",
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
    title:
      "Area Match & Veilig Kopen Costa Blanca Noord | Nordic Move Spain",
    description:
      "Begin met een gratis Area Match Rapport op basis van een persoonlijke vragenlijst die helpt om uw wensen, behoeften en toekomstplannen goed in beeld te brengen. Kies eerst de juiste omgeving en koop daarna met meer overzicht en veiligheid.",
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: "/images/area-match.png",
        width: 1200,
        height: 630,
        alt: "Area Match en veilig kopen aan de Costa Blanca Noord",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Area Match & Veilig Kopen Costa Blanca Noord | Nordic Move Spain",
    description:
      "Gratis Area Match Rapport, Purchase Safety Report en veilige aankoopbegeleiding voor internationale kopers aan de Costa Blanca Noord.",
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
      name: "Area Match & Veilig Kopen",
      item: "https://www.nordicmovespain.com/nl/services/area-match",
    },
  ],
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Area Match & Veilig Kopen Costa Blanca Noord",
  serviceType: "Property buying guidance, area matching and purchase risk review",
  description:
    "Een gratis Area Match Rapport op basis van een persoonlijke vragenlijst die helpt om een zeer goed beeld te krijgen van uw wensen, behoeften en toekomstplannen, gecombineerd met een veilige aankoopaanpak voor internationale kopers aan de Costa Blanca Noord.",
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
      "Internationale kopers, tweede-woningkopers, pensionado's, gezinnen en investeerders",
  },
  offers: {
    "@type": "Offer",
    name: "Gratis Area Match Rapport",
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
      name: "Wat is het Area Match Rapport?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Het Area Match Rapport is een gratis persoonlijk rapport dat helpt bepalen welke plaatsen, buurten en leefomgevingen aan de Costa Blanca Noord het beste passen bij uw levensstijl, budget, gezinssituatie, zorgbehoefte, sociale wensen en langetermijnplannen.",
      },
    },
    {
      "@type": "Question",
      name: "Waar vind ik de vragenlijst?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "De persoonlijke vragenlijst staat in de bestaande Relocation Assessment van Nordic Move Spain. De vragen helpen ons om een zeer goed beeld te krijgen van uw wensen, behoeften, levensstijl en toekomstplannen. De knoppen op deze pagina linken naar die vragenlijst.",
      },
    },
    {
      "@type": "Question",
      name: "Is het Area Match Rapport gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ja. Het Area Match Rapport is gratis en zonder aankoopverplichting. Het helpt kopers om eerst de juiste regio en woonomgeving te begrijpen voordat zij maanden zoeken of bezichtigingen plannen.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is het verschil tussen Area Match en het Purchase Safety Report?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Area Match helpt eerst bepalen welke omgeving bij u past. Het Purchase Safety Report wordt relevant wanneer u een specifieke woning serieus overweegt en juridische, technische en praktische risico’s vóór aankoop wilt laten controleren.",
      },
    },
    {
      "@type": "Question",
      name: "Vervangt Nordic Move Spain een advocaat of technisch specialist?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Nee. Nordic Move Spain vervangt geen advocaat, notaris, gestor, fiscalist of technisch bouwkundig specialist. Wij structureren het proces, brengen de juiste professionals samen en helpen u bevindingen duidelijk te begrijpen.",
      },
    },
  ],
};

export default function AreaMatchPage() {
  const quickFacts = [
    {
      title: "Persoonlijke vragenlijst",
      text:
        "De bestaande Relocation Assessment vragenlijst helpt ons om een zeer goed beeld te krijgen van uw leven, wensen, behoeften, budget en toekomstplannen.",
    },
    {
      title: "Gratis rapport",
      text:
        "Het Area Match Rapport is gratis en zonder aankoopverplichting. U kunt eerst rustig oriënteren voordat u verdere stappen zet.",
    },
    {
      title: "Bespaart maanden zoeken",
      text:
        "In plaats van eindeloos losse informatie te verzamelen, krijgt u een gestructureerd startpunt voor de juiste plaatsen en buurten.",
    },
    {
      title: "Veiliger kopen",
      text:
        "Wanneer een woning serieus wordt, kan het Purchase Safety Report helpen om risico’s vóór aankoop zichtbaar te maken.",
    },
  ];

  const safetySteps = [
    {
      number: "01",
      title: "De juiste omgeving kiezen",
      text:
        "Voordat u naar woningen kijkt, brengen wij in kaart welke plaatsen, buurten en leefomgevingen werkelijk bij uw dagelijks leven passen. Zo voorkomt u dat u verliefd wordt op een woning in een omgeving die op lange termijn niet klopt.",
    },
    {
      number: "02",
      title: "Risico’s eerder herkennen",
      text:
        "We letten niet alleen op sfeer en schoonheid, maar ook op praktische aandachtspunten zoals bereikbaarheid, geluid, seizoensdrukte, hellingen, voorzieningen, gezondheidszorg, community-regels en mogelijke beperkingen.",
    },
    {
      number: "03",
      title: "Veilig verder met het Purchase Safety Report",
      text:
        "Wanneer u een woning serieus overweegt, volgt de verdiepende aankoopcontrole. Met onafhankelijke professionals worden juridische, technische en administratieve aandachtspunten vóór aankoop zichtbaar gemaakt.",
    },
  ];

  const reportItems = [
    "Persoonlijke match met plaatsen en woonwijken",
    "Levensstijl en dagelijkse woonomgeving",
    "Rust, privacy, zomerdrukte en geluidsrisico’s",
    "Veiligheid, lokale aandachtspunten en zichtbare omgevingsrisico’s",
    "Artsen, ziekenhuizen en toegang tot gezondheidszorg",
    "Wellness, golf, sport en recreatiemogelijkheden",
    "Restaurants, beachclubs en lokale cultuur",
    "Internationale scholen en geschiktheid voor gezinnen",
    "Internationale gemeenschappen en sociaal netwerk",
    "Bereikbaarheid, voorzieningen en investeringsmogelijkheden",
    "Risico’s zoals drukke wegen, hoogspanningsmasten, steile toegang of afgelegen ligging",
    "Eerste aandachtspunten voor verhuur, community-regels en jaarlijks gebruik",
  ];

  const questionThemes = [
    {
      title: "Levensstijl",
      text:
        "Rust of levendigheid, strand of centrum, restaurants, natuur, golf, wellness, cultuur en het dagelijkse ritme dat u zoekt.",
    },
    {
      title: "Praktische woonkwaliteit",
      text:
        "Bereikbaarheid, autorijden, winkels, zorg, luchthaven, winterleven, onderhoud en geschiktheid voor het hele jaar.",
    },
    {
      title: "Persoonlijke situatie",
      text:
        "Gezin, pensioen, tweede woning, huisdieren, mobiliteit, sociale contacten, internationale gemeenschap en langetermijnplannen.",
    },
    {
      title: "Woning en aankooprisico",
      text:
        "Woningtype, privacy, uitzicht, verhuurgedachten, community-regels, jaarlijkse kosten, onderhoud en aankoopzekerheid.",
    },
  ];

  const professionals = [
    {
      title: "Onafhankelijke advocaat",
      text:
        "De advocaat beoordeelt onder meer eigendom, Nota Simple, mogelijke lasten, openstaande schulden, koopcontracten, vergunningen en juridische risico’s die vóór ondertekening duidelijk moeten zijn.",
    },
    {
      title: "Notaris en gestor",
      text:
        "De notaris begeleidt de formele overdracht en de ondertekening van de eigendomsakte. Een gestor kan helpen met administratieve controles, registraties, belastingen, kadastergegevens en praktische opvolging.",
    },
    {
      title: "Technisch bouwkundig specialist",
      text:
        "De technisch specialist kijkt naar zichtbare bouwkundige risico’s zoals vocht, scheuren, dak, installaties, elektriciteit, zwembad, septic tank, onderhoudsrisico’s en mogelijke renovatiekosten.",
    },
  ];

  const secureItems = [
    "Gecontroleerde toegang per klant en adviseur",
    "Two-step authentication voor extra beveiliging",
    "Minder losse e-mails, screenshots en WhatsApp-documenten",
    "Eén centrale plek voor rapporten, documenten en vervolgstappen",
    "Duidelijke versies, deadlines en verantwoordelijkheden",
    "Meer overzicht tijdens een aankoopproces waarin veel partijen betrokken zijn",
  ];

  const journeySteps = [
    {
      number: "01",
      title: "Vul de gratis vragenlijst in",
      text:
        "Via de bestaande Relocation Assessment vragenlijst deelt u informatie over uw persoonlijke situatie, woonwensen, levensstijl, budget, interesses, zorgen en langetermijnplannen. Zo krijgen wij een zeer goed beeld van wat u werkelijk zoekt en nodig heeft.",
    },
    {
      number: "02",
      title: "Ontvang uw persoonlijke Area Match Rapport",
      text:
        "Wij combineren uw antwoorden met lokale kennis, gestructureerde analyse en praktische ervaring met internationale kopers. U ontvangt een persoonlijk overzicht van plaatsen, buurten en gemeenschappen die waarschijnlijk het beste bij u passen.",
    },
    {
      number: "03",
      title: "Plan een gratis persoonlijk intakegesprek",
      text:
        "Tijdens de intake bespreken we de uitkomsten, uw twijfels, wensen en risico’s uitgebreider. Zo begrijpen we niet alleen waar u wilt wonen, maar ook wat u absoluut wilt vermijden.",
    },
    {
      number: "04",
      title: "Ervaar de gebieden tijdens de Buyer Discovery Trip",
      text:
        "U bezoekt geselecteerde plaatsen en buurten, ontmoet relevante lokale professionals en ervaart hoe het dagelijks leven werkelijk voelt voordat u zich aan een woning verbindt.",
    },
    {
      number: "05",
      title: "Laat een woning controleren met het Purchase Safety Report",
      text:
        "Wanneer u een woning serieus overweegt, coördineren wij onafhankelijke juridische, technische en administratieve controles. De bevindingen worden helder samengebracht voordat u beslist.",
    },
    {
      number: "06",
      title: "Beslis met overzicht en veilige documenten",
      text:
        "Belangrijke documenten, rapporten en vervolgstappen worden waar mogelijk verzameld in een beveiligde digitale omgeving met gecontroleerde toegang en two-step authentication.",
    },
  ];

  const relatedGuides = [
    {
      title: "Where to Buy Property on the Costa Blanca North",
      text:
        "Vergelijk Moraira, Jávea, Altea, Benissa, Calpe en Dénia op levensstijl, bereikbaarheid en dagelijks wonen.",
      href: "/nl/guides/where-to-buy-property-costa-blanca-north",
    },
    {
      title: "Honest Guide to Buying Property on the Costa Blanca North",
      text:
        "Lees over verborgen kosten, verhuurregels, geluid, community-regels en praktische controles vóór aankoop.",
      href: "/nl/guides/honest-guide-buying-property-costa-blanca-north",
    },
    {
      title: "Moraira vs Jávea",
      text:
        "Een praktische vergelijking tussen twee populaire plaatsen voor internationale kopers aan de Costa Blanca Noord.",
      href: "/nl/guides/moraira-vs-javea",
    },
    {
      title: "Common Mistakes When Buying Property in Spain",
      text:
        "Voorkom dat u te laat ontdekt dat documenten, locatie, kosten of technische risico’s niet kloppen.",
      href: "/nl/guides/common-mistakes-buying-property-spain",
    },
  ];

  const faqs = [
    {
      question: "Wat is het Area Match Rapport?",
      answer:
        "Het Area Match Rapport is een gratis persoonlijk rapport dat helpt bepalen welke plaatsen, buurten en leefomgevingen aan de Costa Blanca Noord het beste passen bij uw levensstijl, budget, gezinssituatie, zorgbehoefte, sociale wensen en langetermijnplannen.",
    },
    {
      question: "Waar vind ik de vragenlijst?",
      answer:
        "De persoonlijke vragenlijst staat in de bestaande Relocation Assessment. De vragen helpen ons om uw wensen, behoeften, levensstijl en toekomstplannen goed te begrijpen. Deze pagina legt uit waarom dat belangrijk is en alle belangrijke knoppen linken naar de vragenlijst.",
    },
    {
      question: "Is het rapport echt gratis?",
      answer:
        "Ja. Het Area Match Rapport is gratis en zonder aankoopverplichting. Het is bedoeld om u een beter startpunt te geven voordat u maanden besteedt aan zoeken, vergelijken en bezichtigen.",
    },
    {
      question: "Wat is het verschil tussen Area Match en Purchase Safety Report?",
      answer:
        "Area Match helpt eerst bepalen welke omgeving bij u past. Het Purchase Safety Report wordt relevant wanneer u een specifieke woning serieus overweegt en juridische, technische en praktische risico’s vóór aankoop wilt laten controleren.",
    },
    {
      question: "Is Nordic Move Spain een makelaar?",
      answer:
        "Nordic Move Spain begint niet bij het verkopen van één specifieke woning. Wij starten met oriëntatie, gebiedskeuze en aankoopveiligheid, zodat u gerichter en beter voorbereid kunt kopen.",
    },
    {
      question: "Vervangt dit juridisch of technisch advies?",
      answer:
        "Nee. Wij vervangen geen advocaat, notaris, gestor, fiscalist of technisch bouwkundig specialist. Wij structureren het proces en coördineren waar nodig met onafhankelijke professionals.",
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

              <span className="text-stone-700">Area Match &amp; Veilig Kopen</span>
            </nav>

            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Area Match &amp; Veilig Kopen
            </p>

            <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
              Kies eerst de juiste omgeving. Koop daarna pas met zekerheid.
            </h1>

            <p className="mt-10 max-w-5xl text-xl leading-relaxed text-stone-600">
              Een woning kopen aan de Costa Blanca Noord begint niet bij de
              eerste bezichtiging. Het begint bij de vraag of de omgeving, het
              dagelijks leven en de praktische realiteit werkelijk bij u passen.
              Een prachtige woning kan alsnog een verkeerde keuze zijn wanneer
              de locatie te druk is, te afgelegen ligt, in de winter stilvalt of
              verborgen risico’s bevat die u pas na aankoop ontdekt.
            </p>

            <p className="mt-6 max-w-5xl text-xl leading-relaxed text-stone-600">
              Daarom combineren wij ons gratis Area Match &amp; Lifestyle
              Intelligence Report met een duidelijke veiligheidsaanpak. U start
              met de bestaande persoonlijke Relocation Assessment vragenlijst. Deze helpt
              ons om een zeer goed beeld te krijgen van uw wensen, behoeften,
              levensstijl en toekomstplannen. Daarna brengen wij in kaart welke plaatsen en
              buurten aansluiten bij uw levensstijl en begeleiden wij u richting
              een zorgvuldiger aankoopproces.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/nl/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Start de gratis vragenlijst
              </a>

              <a
                href="/nl/services/purchase-safety-report"
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Bekijk het Purchase Safety Report
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

        {/* VEILIGHEIDSAANPAK */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Onze veiligheidsaanpak
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Niet alleen zoeken naar wat mooi is, maar controleren wat
                belangrijk is.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-600">
                Veel kopers kijken eerst naar foto’s, uitzicht en prijs. Wij
                draaien dat proces om. Eerst kijken wij naar levensstijl,
                bereikbaarheid, risico’s, omgeving en praktische geschiktheid.
                Daarna pas wordt de zoektocht naar woningen gericht en zinvol.
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

        {/* VRAGENLIJST BLOK */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-10 text-white shadow-sm md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Gebaseerd op een persoonlijke vragenlijst
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
              De bestaande vragenlijst helpt ons sneller begrijpen welke
              omgeving echt bij u past.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-white/80">
              Veel kopers zoeken maandenlang op basis van losse plaatsnamen,
              woningfoto’s, portalen en adviezen van anderen. Area Match draait
              die volgorde om. Eerst brengen we uw leven, wensen, grenzen en
              toekomstplannen in kaart. Daarna pas vergelijken we welke gebieden
              daarbij passen.
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
              href="/nl/relocation-assessment"
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Naar de gratis vragenlijst
            </a>
          </div>
        </section>

        {/* INHOUD VAN HET RAPPORT */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Wat uw persoonlijke rapport kan bevatten
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Van levensstijl en gezondheidszorg tot geluid, bereikbaarheid en
              risico’s.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
              In plaats van maandenlang zelf losse informatie te verzamelen,
              ontvangt u een helder en gestructureerd overzicht van de gebieden
              die het beste bij uw profiel passen. Daarbij kijken wij verder dan
              woningprijzen, strandafstand of bekende plaatsnamen.
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
              Het rapport combineert een persoonlijke levensstijlmatch met
              praktische lokale informatie. Zo krijgt u niet alleen inzicht in
              waar u een woning zou kunnen kopen, maar vooral in welke omgeving u
              zich op lange termijn waarschijnlijk veilig, comfortabel en thuis
              zult voelen.
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
                  alt="Purchase Safety Report voor het veilig kopen van een woning aan de Costa Blanca Noord"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/25"></div>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Purchase Safety Report
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                  Wanneer een woning serieus wordt, begint de echte controle.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/85">
                  Het Area Match Rapport helpt u eerst de juiste omgeving te
                  kiezen. Zodra u daarna een woning serieus overweegt, helpt het
                  Purchase Safety Report om de belangrijkste juridische,
                  technische en praktische risico’s vóór aankoop helder te
                  krijgen.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  Denk aan eigendomsinformatie, Nota Simple, vergunningen,
                  uitbouwen, perceelgrenzen, zichtbare gebreken, vocht, zwembad,
                  septic tank, community-regels, jaarlijkse kosten en mogelijke
                  beperkingen voor gebruik of verhuur.
                </p>

                <a
                  href="/nl/services/purchase-safety-report"
                  className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Ontdek het Purchase Safety Report
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ONAFHANKELIJKE SPECIALISTEN */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Onafhankelijke specialisten
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Wij coördineren de juiste professionals. Zij beoordelen hun eigen
                vakgebied.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-600">
                Nordic Move Spain vervangt geen advocaat, notaris, gestor,
                fiscalist of technisch bouwkundig specialist. Wij brengen de
                juiste professionals samen, structureren het proces en helpen u
                de bevindingen duidelijk te begrijpen.
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

        {/* BEVEILIGDE AANKOOPOPMGEVING */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Beveiligde aankoopomgeving
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Geen losse documenten via WhatsApp of onveilige e-mail.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
              Tijdens een aankoop in Spanje worden vaak gevoelige documenten
              gedeeld: paspoorten, koopcontracten, bankgegevens,
              belastingdocumenten, eigendomsinformatie, technische rapporten en
              juridische stukken. Wij vinden dat zulke informatie zorgvuldig en
              overzichtelijk moet worden behandeld.
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
                Van gratis rapport naar gecontroleerde aankoop
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Een heldere route van oriëntatie naar zekerheid.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-600">
                Het Area Match Rapport is het beginpunt. Daarna bouwen wij stap
                voor stap verder: persoonlijke intake, Buyer Discovery Trip,
                gerichte woningzoektocht, Purchase Safety Report en een veilige
                documentomgeving.
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
                  alt="Persoonlijke Buyer Discovery Trip aan de Costa Blanca Noord"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Persoonlijke Buyer Discovery Trip
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                  Niet alleen gebieden bezoeken, maar ook de risico’s en de
                  juiste mensen leren kennen.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/85">
                  Tijdens de trip ervaart u hoe het dagelijkse leven in de
                  geselecteerde plaatsen werkelijk aanvoelt. U bezoekt buurten,
                  voorzieningen en locaties die aansluiten bij uw persoonlijke
                  profiel, in plaats van een algemene standaardroute te volgen.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  Op basis van uw rapport en intake kunnen wij relevante
                  kennismakingen voorbereiden. Denk aan betrouwbare lokale
                  professionals, internationale bewoners, ondernemers,
                  toekomstige kopers of mensen met gedeelde interesses.
                </p>

                <a
                  href="/nl/services/discovery-trips"
                  className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Ontdek de Buyer Discovery Trip
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WAAROM DIT BELANGRIJK IS */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Meer dan een woning zoeken
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                De juiste omgeving en een gecontroleerde aankoop bepalen of
                Spanje werkelijk als thuis gaat voelen.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Een woning kan er op foto&apos;s perfect uitzien, terwijl de
                ligging of juridische en technische werkelijkheid uiteindelijk
                niet aansluit bij uw verwachtingen. Misschien zijn voorzieningen
                te ver weg, is de omgeving in de winter te rustig, zijn er
                onverwachte community-regels of blijkt een onderdeel van de
                woning niet goed geregistreerd.
              </p>

              <p className="mt-6">
                Daarom kijken wij niet alleen naar de woning zelf. Wij beoordelen
                ook de omgeving, bereikbaarheid, levensstijl, lokale
                voorzieningen, sociale mogelijkheden en praktische geschiktheid
                voor de komende jaren. En zodra een specifieke woning serieus
                wordt, schakelen we door naar onafhankelijke controles.
              </p>

              <p className="mt-6">
                Onze begeleiding helpt u om eerst duidelijkheid te krijgen over
                de juiste plaats en levensstijl, en daarna de aankoop met meer
                rust, overzicht en veiligheid te benaderen.
              </p>
            </div>
          </div>
        </section>

        {/* INTERNE LINKS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-14 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Verder oriënteren
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Lees verder voordat u een gebied of woning kiest.
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
                    Lees gids →
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
                  Vertrouwen & begeleiding
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Geschreven door Nordic Move Spain.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  Nordic Move Spain begeleidt internationale kopers bij veilige
                  en beter voorbereide vastgoedbeslissingen aan de Costa Blanca.
                  Onze aanpak combineert Area Match, onafhankelijke
                  aankoopbegeleiding, juridische en technische controlepartners,
                  een veilig klantenportaal en praktische ondersteuning na
                  aankoop.
                </p>

                <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-[#1e2a3a]">
                  Laatst bijgewerkt: juli 2026
                </p>
              </div>

              <div className="rounded-[32px] bg-white/80 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Belangrijke opmerking
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  Onze begeleiding vervangt geen persoonlijke vakadviezen.
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  Area Match en Purchase Safety helpen u beter oriënteren en
                  risico’s gestructureerd begrijpen. Dit vervangt geen juridisch,
                  fiscaal, financieel, medisch of technisch advies. Voor
                  persoonlijke beslissingen moet u altijd gekwalificeerde
                  specialisten raadplegen.
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
                Veelgestelde vragen
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Vragen over Area Match en veilig kopen.
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
              Begin gratis en zonder verplichtingen
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Ontdek welke plaats, buurt en aankooproute het beste bij uw
              toekomst in Spanje passen.
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              Vul de bestaande persoonlijke vragenlijst in en ontvang uw persoonlijke Area
              Match &amp; Lifestyle Intelligence Report. Daarna kunt u
              gebruikmaken van een gratis intakegesprek waarin we de resultaten
              bespreken en samen bekijken welke volgende stap bij u past.
            </p>

            <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-stone-500">
              Wanneer u later een woning serieus overweegt, kan het Purchase
              Safety Report helpen om juridische, technische en praktische
              risico’s vóór aankoop beter te begrijpen.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/nl/relocation-assessment"
                className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#15202d]"
              >
                Start de gratis vragenlijst
              </a>

              <a
                href="/nl/services/purchase-safety-report"
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Lees meer over veilig kopen
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}