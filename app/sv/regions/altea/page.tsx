export const metadata = {
  title: "Bo i Altea | Köp bostad i Altea Costa Blanca Nord",
  description:
    "Upptäck om Altea är rätt område för att köpa bostad på Costa Blanca Nord. En svensk guide för internationella köpare som jämför gamla stan, havsutsikt, lägenheter, villor, Altea Hills, Mascarat, service, bilberoende, stränder, restauranger och långsiktig lämplighet.",
  keywords: [
    "bo i Altea",
    "köpa bostad i Altea",
    "Altea Costa Blanca Nord",
    "Altea bostadsguide",
    "Altea Hills köpa bostad",
    "Altea gamla stan",
    "Costa Blanca Nord områdesguide",
    "köpa hus Spanien",
    "svenskar köpa bostad Spanien",
    "Nordic Move Spain Altea",
  ],
  alternates: {
    canonical: "/sv/regions/altea",
    languages: {
      en: "/regions/altea",
      nl: "/nl/regions/altea",
      de: "/de/regions/altea",
      sv: "/sv/regions/altea",
    },
  },
  openGraph: {
    title: "Bo i Altea | Köp bostad i Altea Costa Blanca Nord",
    description:
      "En svensk områdesguide till Altea för internationella köpare: gamla stan, havsutsikt, stränder, Altea Hills, Mascarat, service, bilberoende, bostadstyper och långsiktig lämplighet.",
    type: "article",
    locale: "sv_SE",
    images: [
      {
        url: "/images/altea.jpg",
        width: 1200,
        height: 630,
        alt: "Altea Costa Blanca Nord områdesguide för bostadsköpare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bo i Altea | Köp bostad i Altea Costa Blanca Nord",
    description:
      "Svensk guide till Altea för bostadsköpare som jämför livsstil, gamla stan, stränder, Altea Hills, villor, lägenheter och tryggt köp.",
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
      name: "Regioner",
      item: "https://www.nordicmovespain.com/sv/regions",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Altea",
      item: "https://www.nordicmovespain.com/sv/regions/altea",
    },
  ],
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bo i Altea: köpguide för Costa Blanca Nord",
  description:
    "En svensk områdesguide till Altea för internationella köpare som vill förstå livsstil, bostadstyper, områden, stränder, service, bilberoende och köprisker innan de köper bostad.",
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
    "@id": "https://www.nordicmovespain.com/sv/regions/altea",
  },
  about: [
    "Altea",
    "Costa Blanca Nord",
    "köpa bostad i Spanien",
    "Altea Hills",
    "Costa Blanca områdesval",
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Är Altea en bra plats att köpa bostad på?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Altea kan vara ett mycket bra val för köpare som vill ha en mer konstnärlig och sofistikerad kustmiljö, vacker gamla stan, havsutsikt, restauranger, promenadliv och närhet till både Calpe, Benidorm och inlandet. Det passar inte alla, särskilt inte köpare som vill ha sandstränder eller maximal praktisk bekvämlighet utan bil.",
      },
    },
    {
      "@type": "Question",
      name: "Passar Altea pensionärer?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Altea kan passa pensionärer som värdesätter vacker miljö, restauranger, havsutsikt, kultur och en lugnare vardag. Samtidigt bör man kontrollera höjdskillnader, trappor, bilberoende, avstånd till vård, parkering och hur praktisk bostaden är på längre sikt.",
      },
    },
    {
      "@type": "Question",
      name: "Vad är skillnaden mellan Altea och Moraira?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Moraira är ofta mer villafokuserat, lugnt och lågt exploaterat, medan Altea erbjuder mer kultur, gamla stan, promenadliv, restauranger, närhet till Benidorm och fler kontraster mellan stad, kust och exklusiva bostadsområden som Altea Hills.",
      },
    },
    {
      "@type": "Question",
      name: "Behöver man bil i Altea?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Det beror på var man bor. I centrum och nära strandpromenaden kan vardagen vara mer gångbar, men många attraktiva bostadsområden, särskilt Altea Hills, Sierra de Altea och Mascarat, kräver i praktiken bil.",
      },
    },
    {
      "@type": "Question",
      name: "Vilka kontroller är viktiga innan man köper i Altea?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Köpare bör kontrollera bilberoende, lutning, tillgång, orientering, community-avgifter, uthyrningsregler, renoveringskvalitet, juridisk status, registrerade ytor, fukt, buller och långsiktig underhållsnivå.",
      },
    },
  ],
};

export default function AlteaPage() {
  const quickFacts = [
    {
      title: "Känd för gamla stan",
      text:
        "Altea är känt för sin vita gamla stad, kullerstensgator, utsiktsplatser, konstnärliga känsla och den karakteristiska kyrkokupolen.",
    },
    {
      title: "Klapperstensstränder",
      text:
        "Alteas kust erbjuder klapperstensstränder, vikar och havsnära promenader snarare än breda sandstränder.",
    },
    {
      title: "Många livsstilar",
      text:
        "Centrum, gamla stan, La Olla, Mascarat, Cap Negret och Altea Hills kan kännas mycket olika i vardagen.",
    },
    {
      title: "Kontrollera praktiken",
      text:
        "Höjdskillnader, parkering, bilberoende, community-regler och underhåll kan vara avgörande för långsiktig trivsel.",
    },
  ];

  const buyerProfiles = [
    {
      title: "Köpare som söker kultur och karaktär",
      text:
        "Altea passar ofta köpare som inte bara vill ha strand och sol, utan också en mer konstnärlig och visuell miljö med gamla stan, gallerier, restauranger och utsikter över havet.",
    },
    {
      title: "Pensionärer med fokus på livskvalitet",
      text:
        "För pensionärer kan Altea vara attraktivt tack vare restauranger, promenadliv, vacker miljö och närhet till service. Men höjdskillnader, trappor och bilberoende måste bedömas noggrant.",
    },
    {
      title: "Köpare av lägenhet eller town house",
      text:
        "Altea kan fungera för köpare som vill ha mindre underhåll än en stor villa, särskilt nära centrum, strandpromenaden eller gamla stan.",
    },
    {
      title: "Köpare som vill ha exklusivitet och havsutsikt",
      text:
        "Områden som Altea Hills, Sierra de Altea och Mascarat kan passa köpare som prioriterar havsutsikt, säkerhet, integritet och en mer exklusiv bostadsmiljö.",
    },
  ];

  const zones = [
    {
      title: "Altea gamla stan",
      text:
        "Gamla stan är den mest ikoniska delen av Altea, med vitkalkade hus, smala gator, utsiktsplatser, restauranger och en stark visuell identitet. Den passar köpare som älskar charm, men trappor, parkering och tillgänglighet bör kontrolleras.",
    },
    {
      title: "Centrum och strandpromenaden",
      text:
        "Passar köpare som vill ha restauranger, butiker, havet och vardagsservice närmare till hands. Det är ofta mer praktiskt än högt belägna bostadsområden, men kan också kännas mer livligt.",
    },
    {
      title: "Cap Negret",
      text:
        "Ett kustnära område norr om centrum som kan passa köpare som vill ha havsnära boende, promenader och närhet till Altea utan att bo mitt i gamla stan.",
    },
    {
      title: "La Olla",
      text:
        "Ett område med mer avslappnad kustkänsla, utsikt mot havet och närhet till vikar. Det kan passa köpare som vill ha ett lugnare kustliv och samtidigt vara nära Altea.",
    },
    {
      title: "Mascarat",
      text:
        "Mascarat ligger mellan Altea och Calpe och kan passa köpare som söker dramatiska vyer, marinamiljö, klippor och en mer avskild kustkänsla. Bilberoende och tillgång är viktiga att bedöma.",
    },
    {
      title: "Altea Hills och Sierra de Altea",
      text:
        "Exklusiva bostadsområden med havsutsikt, villor, säkerhet och ofta större fastigheter. De passar köpare som vill ha utsikt och integritet, men kräver vanligtvis bil och mer planerat underhåll.",
    },
  ];

  const propertyTypes = [
    {
      title: "Lägenheter nära centrum eller strand",
      text:
        "Ett praktiskt val för köpare som vill ha mindre underhåll, enklare vardag och närhet till restauranger, promenad och service.",
    },
    {
      title: "Townhouses i eller nära gamla stan",
      text:
        "Charmiga men ofta mer komplexa i vardagen. Kontrollera trappor, parkering, tillgång, renoveringskvalitet och om bostaden passar året runt.",
    },
    {
      title: "Villor i Altea Hills och Sierra de Altea",
      text:
        "Attraktiva för havsutsikt, integritet och exklusivitet. Köpare bör kontrollera community-avgifter, underhåll, åtkomst, orientering och tekniskt skick.",
    },
    {
      title: "Kustnära bostäder i La Olla, Cap Negret och Mascarat",
      text:
        "Kan erbjuda en stark havsnära livsstil, men läge, buller, tillgång, parkering, fukt och säsongsrytm bör granskas noggrant.",
    },
  ];

  const confidenceChecks = [
    {
      title: "Höjdskillnader och trappor",
      text:
        "Alteas charm kommer delvis från läget och nivåskillnaderna. Det kan vara vackert men opraktiskt om du har mobilitetsfrågor eller vill bo bekvämt på äldre dagar.",
    },
    {
      title: "Parkering och tillgång",
      text:
        "I gamla stan och vissa centrala delar kan parkering och tillgång vara mer komplicerat. Kontrollera vardagslogistiken, inte bara utsikten.",
    },
    {
      title: "Bilberoende",
      text:
        "Vissa delar av Altea kan fungera ganska gångbart, men Altea Hills, Sierra de Altea, Mascarat och flera villalägen kräver ofta bil.",
    },
    {
      title: "Community-avgifter och regler",
      text:
        "I lägenheter, gated communities och urbanisationer bör du kontrollera avgifter, regler, uthyrningsbegränsningar, protokoll och planerade arbeten före köp.",
    },
    {
      title: "Orientering, sol och vind",
      text:
        "Havsutsikt betyder inte automatiskt bästa komfort. Kontrollera vintersol, skugga, vind, fukt och hur bostaden känns olika tider på året.",
    },
    {
      title: "Juridisk och teknisk kontroll",
      text:
        "Som i övriga Spanien bör registrerade ytor, tillstånd, renoveringar, installationer, fukt, fasad, pool och eventuella skulder kontrolleras av oberoende specialister.",
    },
  ];

  const lifestylePoints = [
    "Vacker gammal stad med vitkalkade hus och stark visuell identitet",
    "Kultur, restauranger, utsiktsplatser och en mer sofistikerad atmosfär",
    "Klapperstensstränder, vikar, marinaområden och kustpromenader",
    "Bra läge mellan Calpe, Benidorm, La Nucía, Alfaz del Pi och inlandet",
    "Större variation än många mindre villaorter på Costa Blanca Nord",
    "Passar bäst för köpare som uppskattar karaktär, utsikt och livsstil framför enkel sandstrandsturism",
  ];

  const restaurants = [
    {
      title: "Oustau de Altea",
      label: "Gamla stan",
      text:
        "Ett välkänt alternativ i Alteas gamla stad som visar den romantiska och mer eleganta sidan av Alteas restaurangliv.",
      bestFor:
        "Bäst för middag i gamla stan, atmosfär och en mer klassisk Altea-kväll.",
    },
    {
      title: "Diferens Altea",
      label: "Modern stadskänsla",
      text:
        "Ett modernt alternativ som passar köpare som vill förstå den mer samtida restaurangscenen i Altea.",
      bestFor:
        "Bäst för modern mat, avslappnad elegans och middag nära stadslivet.",
    },
    {
      title: "Xef Pirata",
      label: "Kreativ tapas",
      text:
        "Ett kreativt och populärt tapasalternativ som visar att Altea inte bara handlar om vyer, utan också om matupplevelser och socialt kvällsliv.",
      bestFor:
        "Bäst för kreativa smårätter, vänner och en mer energisk kväll.",
    },
    {
      title: "Restauranger vid strandpromenaden",
      label: "Havsnära vardag",
      text:
        "Längs strandpromenaden finns flera alternativ för lunch, kaffe, middag och vardagliga havsvyer. För bostadsköpare visar detta hur Altea kan fungera som en daglig livsstil, inte bara som semesterort.",
      bestFor:
        "Bäst för promenader, lunch vid havet och lättillgänglig vardagskänsla.",
    },
  ];

  const activities = [
    {
      title: "Gamla stan och kyrktorget",
      text:
        "Alteas gamla stad är en av de viktigaste anledningarna till att köpare dras hit. Smala gator, vita fasader, utsiktsplatser, restauranger och konstnärlig atmosfär skapar en tydlig identitet.",
    },
    {
      title: "Strandpromenaden",
      text:
        "Promenaden gör Altea praktisk och social i vardagen. Den passar köpare som vill kunna gå, äta lunch, ta en kaffe och känna havsnärheten utan att alltid behöva göra en utflykt.",
    },
    {
      title: "La Olla och ön framför kusten",
      text:
        "La Olla ger en lugnare kustkänsla och är ett exempel på den mer avslappnade sidan av Altea. Det kan passa köpare som vill ha havet nära men inte bo mitt i centrum.",
    },
    {
      title: "Mascarat och marinan",
      text:
        "Mascarat erbjuder klippor, marina, dramatiska vyer och närhet till Calpe. Det är attraktivt, men vardagslogistik och bilberoende bör förstås före köp.",
    },
    {
      title: "Serra Gelada och natur",
      text:
        "Altea har bra tillgång till natur, kustlandskap och närliggande vandringsmöjligheter. Det är viktigt för köpare som vill kombinera kustliv med aktivitet.",
    },
    {
      title: "Utforska närområdet",
      text:
        "Från Altea når du snabbt Calpe, Benidorm, Alfaz del Pi, La Nucía, Guadalest och andra delar av Marina Baixa och Costa Blanca Nord.",
    },
  ];

  const comparisonCards = [
    {
      href: "/sv/regions/moraira",
      label: "Jämför lugn",
      title: "Altea eller Moraira?",
      text:
        "Moraira känns ofta lugnare och mer villafokuserat, medan Altea erbjuder mer kultur, gamla stan, restauranger, kontraster och närhet till större orter.",
    },
    {
      href: "/sv/regions/javea",
      label: "Jämför variation",
      title: "Altea eller Jávea?",
      text:
        "Jávea erbjuder mer internationell vardagsaktivitet och flera livsstilszoner, medan Altea har starkare konstnärlig identitet och en mer kompakt gammal stad.",
    },
    {
      href: "/sv/regions/calpe",
      label: "Jämför bekvämlighet",
      title: "Altea eller Calpe?",
      text:
        "Calpe kan kännas mer praktiskt och strandorienterat, medan Altea ofta känns mer sofistikerat, visuellt och kulturellt.",
    },
  ];

  const relatedGuides = [
    {
      href: "/sv/guides/best-areas-costa-blanca-north-retirees",
      title: "Best Areas on Costa Blanca North for Retirees",
      text:
        "Jämför Altea med Moraira, Jávea, Dénia, Benissa och Calpe ur ett pensionärsperspektiv.",
    },
    {
      href: "/sv/guides/where-to-buy-property-costa-blanca-north",
      title: "Where to Buy Property on Costa Blanca North",
      text:
        "Jämför de viktigaste orterna på Costa Blanca Nord innan du väljer var du ska köpa.",
    },
    {
      href: "/sv/guides/honest-guide-buying-property-costa-blanca-north",
      title: "Honest Guide to Buying Property on the Costa Blanca North",
      text:
        "Läs om kostnader, uthyrningsregler, community-regler och praktiska kontroller innan du köper.",
    },
  ];

  const faqs = [
    {
      question: "Är Altea rätt för pensionärer?",
      answer:
        "Altea kan passa pensionärer som vill ha kultur, restauranger, havsutsikt och en vacker vardagsmiljö. Men nivåskillnader, trappor, parkering, bilberoende och närhet till vård bör kontrolleras noggrant.",
    },
    {
      question: "Är Altea bättre än Moraira?",
      answer:
        "Det beror på din livsstil. Moraira är ofta lugnare och mer villafokuserat. Altea erbjuder mer kultur, gamla stan, restauranger, strandpromenad, kontraster och närhet till större orter.",
    },
    {
      question: "Vilka områden i Altea är mest intressanta för köpare?",
      answer:
        "Gamla stan, centrum, strandpromenaden, Cap Negret, La Olla, Mascarat, Altea Hills och Sierra de Altea kan alla vara relevanta beroende på budget, mobilitet, bilberoende och önskad livsstil.",
    },
    {
      question: "Har Altea sandstränder?",
      answer:
        "Altea är mer känt för klapperstensstränder, vikar, kustpromenad och havsvyer än för breda sandstränder. Köpare som prioriterar sandstrand bör jämföra med andra orter.",
    },
    {
      question: "Är Altea Hills ett bra område?",
      answer:
        "Altea Hills kan vara attraktivt för köpare som vill ha havsutsikt, säkerhet, exklusivitet och villamiljö. Samtidigt bör man kontrollera bilberoende, community-avgifter, underhåll, orientering och åtkomst.",
    },
    {
      question: "Vad bör kontrolleras innan köp i Altea?",
      answer:
        "Kontrollera juridisk status, registrerade ytor, renoveringar, tillstånd, fukt, installationer, community-regler, uthyrningsmöjligheter, avgifter, tillgång, parkering och långsiktig underhållsnivå.",
    },
  ];

  const officialSources = [
    {
      label: "Altea — Spain.info",
      href: "https://www.spain.info/en/destination/altea/",
    },
    {
      label: "Altea — Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/altea",
    },
    {
      label: "Tourist Info Altea — Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/altea/tourist-offices/tourist-info-altea",
    },
    {
      label: "Altea official tourism",
      href: "https://www.visitaltea.es/",
    },
    {
      label: "Costa Blanca route: Calpe, Altea, Jávea and Dénia — Spain.info",
      href: "https://www.spain.info/en/top/calpe-altea-javea-denia-costa-blanca/",
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
        {/* NAVBAR */}
        <nav className="absolute left-0 top-0 z-50 w-full px-8 py-5">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <a
              href="/sv"
              className="text-sm font-medium uppercase tracking-[0.28em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
            >
              Nordic Move Spain
            </a>

            <div className="hidden gap-8 text-sm md:flex">
              <a
                href="/sv"
                className="text-white drop-shadow transition hover:text-white/70"
              >
                Startsida
              </a>

              <a
                href="/sv/regions"
                className="border-b border-[#c8a063] pb-1 text-white drop-shadow"
              >
                Regioner
              </a>

              <a
                href="/sv/services"
                className="text-white drop-shadow transition hover:text-white/70"
              >
                Tjänster
              </a>

              <a
                href="/sv/guides"
                className="text-white drop-shadow transition hover:text-white/70"
              >
                Guider
              </a>

              <a
                href="/sv/about-us"
                className="text-white drop-shadow transition hover:text-white/70"
              >
                Om oss
              </a>

              <a
                href="/sv/contact"
                className="text-white drop-shadow transition hover:text-white/70"
              >
                Kontakt
              </a>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-32">
          <img
            src="/images/altea.jpg"
            alt="Altea Costa Blanca Nord områdesguide för bostadsköpare"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent"></div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
            <div className="max-w-4xl">
              <nav
                aria-label="Breadcrumb"
                className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/75"
              >
                <a href="/sv" className="transition hover:text-white">
                  Startsida
                </a>

                <span aria-hidden="true">/</span>

                <a href="/sv/regions" className="transition hover:text-white">
                  Regioner
                </a>

                <span aria-hidden="true">/</span>

                <span>Altea</span>
              </nav>

              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Områdesguide Costa Blanca Nord
              </p>

              <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-7xl">
                Att bo i Altea.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
                En visuell, konstnärlig och sofistikerad kuststad för köpare
                som söker gamla stan, havsutsikt, restauranger, promenadliv och
                en mer karaktärsfull medelhavslivsstil.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/sv/services/area-match"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Be om din Area Match
                </a>

                <a
                  href="/sv/guides/where-to-buy-property-costa-blanca-north"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
                >
                  Jämför Costa Blanca-områden
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-8 py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Är Altea rätt för dig?
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Altea passar köpare som vill ha skönhet, kultur och kustliv —
                men som också förstår de praktiska kompromisserna.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Altea är en av Costa Blanca Nords mest igenkännbara orter, med
                vit gamla stad, havsutsikt, restauranger, kustpromenad och en mer
                konstnärlig känsla än många andra kuststäder. För vissa köpare är
                detta exakt rätt kombination av livsstil och karaktär.
              </p>

              <p className="mt-6">
                Men Altea är inte en enda bostadsupplevelse. Att bo i gamla stan,
                nära strandpromenaden, i La Olla, i Mascarat eller i Altea Hills
                innebär mycket olika vardag. Därför bör köpare jämföra område,
                mobilitet, service, höjdskillnader, underhåll och långsiktig
                praktisk lämplighet innan de väljer bostad.
              </p>

              <p className="mt-6">
                Officiella turismkällor lyfter Alteas vitkalkade gamla stad,
                konstnärliga miljö, hamn, strandpromenad och kust med stränder,
                vikar och klippor. För bostadsköpare är frågan inte bara om
                Altea är vackert, utan om rätt del av Altea passar livet du vill
                bygga i Spanien.
              </p>
            </div>
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Snabba fakta
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Viktiga saker att förstå innan du köper i Altea.
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

        {/* QUICK ANSWER */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Snabbt svar
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Altea passar bäst för köpare som vill kombinera kustliv, kultur,
              utsikt och visuell karaktär.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
              Altea är inte alltid det enklaste valet om du vill ha breda
              sandstränder, helt platt vardagsliv eller minimal bilberoende
              överallt. Dess styrka ligger i något annat: gamla stan,
              restauranger, havsutsikt, promenadliv, konstnärlig känsla och
              flera olika boendemiljöer inom samma kommun.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {lifestylePoints.map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="leading-relaxed text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESTAURANTS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Restauranger och livsstil
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Restaurangerna är en viktig del av Alteas attraktionskraft.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Altea lockar många köpare som uppskattar mer än bostaden i sig:
                gamla stan, middag med utsikt, lunch vid havet, kreativa tapas,
                promenader och en mer sofistikerad vardagskänsla.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-stone-500">
                Restauranger, öppettider och koncept kan ändras. Kontrollera
                alltid aktuella öppettider, bokningsregler och säsongsscheman
                innan du planerar ett besök.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {restaurants.map((restaurant) => (
                <div
                  key={restaurant.title}
                  className="rounded-[32px] bg-white p-9 shadow-sm"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                    {restaurant.label}
                  </p>

                  <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
                    {restaurant.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    {restaurant.text}
                  </p>

                  <div className="mt-6 rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                      {restaurant.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACTIVITIES */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Aktiviteter och vardagsliv
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Altea passar köpare som vill ha en vardag med promenader,
              restauranger, vyer och kulturell känsla.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
              Altea erbjuder en annan typ av kustliv än många mer rena
              semesterorter. Här handlar vardagen ofta om gamla stan,
              strandpromenaden, vikar, marinaområden, lokala restauranger och
              närheten till både berg, större orter och havet.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {activities.map((activity) => (
                <div
                  key={activity.title}
                  className="rounded-[30px] bg-white/80 p-8"
                >
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    {activity.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-stone-700">
                    {activity.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BUYER PROFILES */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Köparprofil
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Vem Altea passar bäst för.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {buyerProfiles.map((item) => (
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

        {/* ZONES */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Områden och zoner
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Rätt del av Altea är lika viktig som själva bostaden.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
              Altea är inte en enda livsstil. Gamla stan, strandpromenaden,
              Cap Negret, La Olla, Mascarat och Altea Hills kan ge helt olika
              vardag, bilberoende, utsikt, underhåll och social rytm.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {zones.map((zone) => (
                <div key={zone.title} className="rounded-[30px] bg-white/80 p-8">
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    {zone.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-stone-700">
                    {zone.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROPERTY TYPES */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Bostadstyper
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Altea erbjuder mer variation än många mindre kustorter.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Du kan hitta lägenheter nära havet, townhouses med karaktär,
                kustnära bostäder och exklusiva villor med havsutsikt. Den bästa
                typen beror på hur du vill använda bostaden, hur mycket underhåll
                du accepterar och hur praktisk vardagen behöver vara.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {propertyTypes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] bg-white p-8 shadow-sm"
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

        {/* RETIREE SUITABILITY */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Lämplighet för pensionärer
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
              Altea kan vara ett starkt val för pensionärer som vill ha
              skönhet, kultur och havsnära vardag.
            </h2>

            <div className="mt-10 max-w-5xl text-lg leading-relaxed text-white/80">
              <p>
                För pensionärer kan Altea erbjuda mycket: restauranger,
                promenadliv, havsutsikt, kultur, vacker miljö och närhet till
                flera andra orter. Det kan kännas mer levande och varierat än en
                renodlad villaort.
              </p>

              <p className="mt-6">
                Samtidigt kräver Altea praktisk eftertanke. Gamla stan har
                nivåskillnader och trappor, Altea Hills kräver bil, och vissa
                bostäder med fantastisk utsikt kan vara mindre praktiska på
                längre sikt.
              </p>

              <p className="mt-6">
                För många köpare är lösningen att jämföra Altea med Moraira,
                Jávea, Dénia och Calpe innan de bestämmer sig. Rätt område i
                Altea kan vara fantastiskt — fel område kan bli opraktiskt.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/sv/guides/best-areas-costa-blanca-north-retirees"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Läs pensionsområdesguiden
              </a>

              <a
                href="/sv/services/area-match"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Be om din Area Match
              </a>
            </div>
          </div>
        </section>

        {/* CONFIDENCE CHECKS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Kontrollpunkter för trygghet
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Vad du bör förstå innan du köper i Altea.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Dessa punkter är inte skäl att undvika Altea. De hjälper dig att
                välja rätt bostad, rätt område och rätt köpprocess.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {confidenceChecks.map((item) => (
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

        {/* COMPARISON */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
            {comparisonCards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  {card.label}
                </p>

                <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
                  {card.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {card.text}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* RELATED GUIDES */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Relaterade guider
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Fortsätt din research om Altea.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {relatedGuides.map((guide) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    {guide.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    {guide.text}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vanliga frågor
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Frågor om att köpa och bo i Altea.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[28px] bg-[#f6f1ea] p-8"
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

        {/* TRUST BLOCK */}
        <section className="px-8 pb-28">
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
                  Nordic Move Spain vägleder internationella köpare mot tryggare
                  och bättre förberedda bostadsbeslut på Costa Blanca. Våra
                  områdesguider hjälper dig att jämföra livsstil, praktisk
                  vardag, risker och långsiktig lämplighet innan du väljer
                  bostad.
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
                  Denna guide ersätter inte personlig fackrådgivning.
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  Informationen är allmän vägledning för internationella köpare.
                  Den ersätter inte juridisk, skattemässig, finansiell, medicinsk
                  eller teknisk rådgivning. Kontrollera alltid din personliga
                  situation med kvalificerade specialister innan du köper,
                  hyr ut, säljer eller flyttar till Spanien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Osäker på om Altea passar dig?
            </p>

            <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
              Jämför Altea med din livsstil innan du väljer bostad.
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
              Vår Area Match Assessment hjälper dig att förstå om Altea,
              Moraira, Jávea, Dénia, Benissa eller Calpe passar bäst för dina
              prioriteringar, din budget, din livsstil och dina långsiktiga
              planer.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/sv/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Be om din Area Match
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

        {/* OFFICIAL SOURCES */}
        <section className="px-8 pb-32">
          <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Officiella källor
            </p>

            <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
              Den här områdesguiden använder officiella turismkällor där det är
              möjligt. Köpare bör alltid kontrollera bostads-, juridiska,
              tekniska, restaurang- och praktiska uppgifter innan de fattar
              beslut.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
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
    </>
  );
}
