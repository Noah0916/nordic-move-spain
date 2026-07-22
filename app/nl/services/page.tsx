import type { Metadata } from "next";

const pagePath = "/nl/services";

export const metadata: Metadata = {
  title:
    "Aankoopbegeleiding Costa Blanca | Area Match, Purchase Safety & Move-In Ready",
  description:
    "Persoonlijke aankoopbegeleiding aan de Costa Blanca: Area Match, onafhankelijke technische en juridische aankoopcontroles, Complete Buyer Support, relocation, renovatie en Move-In Ready.",
  keywords: [
    "aankoopbegeleiding Costa Blanca",
    "aankoopmakelaar Costa Blanca",
    "woning kopen Spanje begeleiding",
    "Complete Buyer Support Spanje",
    "Area Match Costa Blanca",
    "Purchase Safety Spanje",
    "bouwkundige keuring woning Spanje",
    "onafhankelijke vastgoedadvocaat Spanje",
    "relocation Costa Blanca",
    "renovatiebegeleiding Costa Blanca",
    "interieurdesign Costa Blanca",
    "Move-In Ready Costa Blanca",
    "Family Relocation Spanje",
    "Nordic Move Spain",
  ],
  alternates: {
    canonical: pagePath,
    languages: {
      "en-GB": "/services",
      "nl-NL": pagePath,
      "de-DE": "/de/services",
      "sv-SE": "/sv/services",
    },
  },
  openGraph: {
    title:
      "Van de juiste regio tot een veilige aankoop en een woning klaar voor aankomst",
    description:
      "Kies de begeleiding die bij uw situatie past: Area Match, Purchase Safety, Complete Buyer Support of Move-In Ready met Home Setup, renovatie, interieur en relocation.",
    type: "website",
    locale: "nl_NL",
    url: pagePath,
    images: [
      {
        url: "/images/brochure2-en.png",
        alt: "Nordic Move Spain aankoopbegeleiding, Purchase Safety en Move-In Ready aan de Costa Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Aankoopbegeleiding en Move-In Ready aan de Costa Blanca | Nordic Move Spain",
    description:
      "Eén vertrouwd aanspreekpunt voor Area Match, woningselectie, onafhankelijke aankoopcontroles, relocation, renovatie en inrichting.",
    images: ["/images/brochure2-en.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const serviceOverview = [
  {
    number: "01",
    eyebrow: "Oriëntatie",
    title: "Area Match",
    text:
      "Ontdek welke plaatsen en regio’s passen bij uw woonwensen, budget, dagelijkse leven en langetermijnplannen. Start met een korte gratis kennismaking of kies voor een uitgebreid persoonlijk rapport.",
    href: "/nl/services/area-match",
    cta: "Bekijk Area Match",
    image: "/images/area-match.png",
    alt: "Persoonlijke Area Match voor internationale woningkopers aan de Costa Blanca",
  },
  {
    number: "02",
    eyebrow: "Woning gevonden",
    title: "Purchase Safety",
    text:
      "Wij coördineren een onafhankelijke bouwkundige inspectie en juridische due diligence, bewaken de belangrijkste vragen en maken de vervolgstappen overzichtelijk.",
    href: "/nl/services/purchase-safety-report",
    cta: "Bekijk Purchase Safety",
    image: "/images/brochure2-en.png",
    alt: "Onafhankelijke technische en juridische aankoopcontrole in Spanje",
  },
  {
    number: "03",
    eyebrow: "Volledige aankoopbegeleiding",
    title: "Complete Buyer Support",
    text:
      "Van Area Match, zoekprofiel en woningselectie tot bezichtigingen, onderhandelingen, onafhankelijke controles en begeleiding richting de overdracht.",
    href: "/nl/services#complete-buyer-support",
    cta: "Bekijk Complete Buyer Support",
    image: "/images/brochure1-en.png",
    alt: "Volledige aankoopbegeleiding voor internationale kopers aan de Costa Blanca",
  },
  {
    number: "04",
    eyebrow: "Na de aankoop",
    title: "Move-In Ready",
    text:
      "Kies alleen wat u nodig heeft: Home Setup, Renovation & Interior of Family Relocation — afgestemd op uw woning, planning en budget.",
    href: "/nl/services/move-in-ready",
    cta: "Bekijk Move-In Ready",
    image: "/images/interior-design.png",
    alt: "Move-In Ready, renovatie, interieur en relocation aan de Costa Blanca",
  },
];

const purchaseSafetyChecks = [
  "Zichtbare en toegankelijke technische staat van de woning",
  "Vocht, lekkage, waterindringing en zichtbare scheurvorming",
  "Dak, gevels, terrassen, ramen, deuren en afwerking",
  "Elektrische installatie, water, warm water, verwarming en airconditioning",
  "Zwembad, technische zwembadinstallaties, garage en bijgebouwen",
  "Noodzakelijke reparaties, onderhoudsrisico’s en aanbevelingen",
  "Gemeten oppervlaktes en vergelijking met beschikbare officiële informatie",
  "Nota Simple, Catastro, IBI, CEE en ITE wanneer relevant en beschikbaar",
  "Vergunningen, licenties en mogelijk niet-geregistreerde onderdelen",
  "Uw eigen specifieke vragen over de woning",
];

const homeSetupServices = [
  "Elektriciteit en water helpen organiseren",
  "Internet en telefonie helpen regelen",
  "Passende verzekeringen vergelijken en coördineren",
  "Alarm en beveiliging helpen organiseren",
  "Schoonmaak vóór aankomst coördineren",
  "Sleuteloverdracht en toegang praktisch afstemmen",
  "Schilderwerk en kleine werkzaamheden laten offreren en plannen",
  "De woning voorbereiden voor uw aankomst",
];

const renovationSteps = [
  "Inventarisatie van wensen, prioriteiten en budget",
  "Selectie en coördinatie van aannemer en relevante specialisten",
  "Planning, besluitmomenten en voortgangsrapportages structureren",
  "Afstemming met architect of technical architect waar nodig",
  "Interieurconcept en visuele stijlrichting ontwikkelen",
  "Materialen, meubels en verlichting selecteren",
  "Levering, installatie en styling coördineren",
  "Eindcontrole en voorbereiding vóór aankomst afstemmen",
];

const familyRelocationServices = [
  "Een passend internationaal verhuisbedrijf zoeken en vergelijken",
  "Scholen en kinderopvang onderzoeken en afspraken helpen plannen",
  "Zorgverleners en verzekeringen helpen vergelijken",
  "Praktische administratie en lokale afspraken structureren",
  "Belangrijke lokale voorzieningen in kaart brengen",
  "Introducties tot clubs, netwerken en community helpen organiseren",
  "Begeleiding bij het opbouwen van het dagelijkse leven in Spanje",
];

/*
 * Gebruik hier de exacte bestandsnamen van de vier bestaande Nordic Move Design-beelden
 * uit uw project wanneer deze anders heten.
 */
const nordicMoveDesigns = [
  {
    title: "Coastal Calm",
    text:
      "Een zachte, elegante kuststijl met natuurlijke materialen, rustige tinten, ontspannen comfort en ingetogen luxe.",
    image: "/images/refined-mediterranean-living.png",
    href: "/nl/services/move-in-ready#coastal-calm",
    alt: "Nordic Move Design Coastal Calm interieur aan de Costa Blanca",
  },
  {
    title: "Ibiza Soho Lounge",
    text:
      "Een warme en sociale mediterrane richting met zachte wittinten, rustiek hout, geweven texturen en een verfijnd binnen-buitengevoel.",
    image: "/images/move-in-ready-ibiza.png",
    href: "/nl/services/move-in-ready#ibiza-soho-lounge",
    alt: "Nordic Move Design Ibiza Soho Lounge interieur",
  },
  {
    title: "Contemporary Coastal",
    text:
      "Een lichte, architectonische stijl met strakke lijnen, bleke houtsoorten, verfijnde afwerkingen en een kalme kustsfeer.",
    image: "/images/contemporary-coastal-kitchen.png",
    href: "/nl/services/move-in-ready#contemporary-coastal",
    alt: "Nordic Move Design Contemporary Coastal interieur",
  },
  {
    title: "Mediterranean Warmth",
    text:
      "Een ontspannen mediterrane leefstijl rondom terrassen, daglicht, buiten eten, warme materialen en comfortabel dagelijks gebruik.",
    image: "/images/move-in-ready-mediterranean-warmth.png",
    href: "/nl/services/move-in-ready#mediterranean-warmth",
    alt: "Nordic Move Design Mediterranean Warmth interieur",
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

function absoluteUrl(path: string) {
  return siteUrl ? `${siteUrl}${path}` : path;
}

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/nl"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Diensten",
      item: absoluteUrl(pagePath),
    },
  ],
};

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nordic Move Spain servicepakketten voor aankoopbegeleiding en relocation",
  itemListElement: serviceOverview.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.text,
      url: absoluteUrl(service.href),
      areaServed: {
        "@type": "Place",
        name: "Costa Blanca, Spanje",
      },
      provider: {
        "@type": "Organization",
        name: "Nordic Move Spain",
      },
    },
  })),
};

export default function ServicesPage() {
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
          __html: JSON.stringify(servicesStructuredData),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
        {/* BREADCRUMBS */}
        <div className="px-6 pt-8 md:px-8">
          <nav aria-label="Broodkruimel" className="mx-auto max-w-7xl">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
              <li>
                <a href="/nl" className="transition hover:text-[#173252]">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#173252]">
                Diensten
              </li>
            </ol>
          </nav>
        </div>

        {/* HERO */}
        <section className="px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Independent Buyer Advisory · Relocation · Move-In Ready
              </p>

              <h1 className="mt-6 font-serif text-5xl leading-[1.03] text-[#173252] md:text-7xl">
                Meer zekerheid. Duidelijke afspraken. Eén vertrouwd aanspreekpunt.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl">
                Wilt u een woning aan de Costa Blanca kopen, maar niet zelf alle
                makelaars, documenten, afspraken en specialisten coördineren?
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Nordic Move Spain biedt vier duidelijke instappakketten. Begin met een
                Area Match wanneer u nog zoekt naar de juiste omgeving, kies Purchase
                Safety wanneer u al een woning heeft gevonden, of laat het volledige
                aankoopproces begeleiden met Complete Buyer Support.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Na de overdracht kunt u Move-In Ready inschakelen voor Home Setup,
                renovatie en interieur of Family Relocation. U kiest alleen de
                ondersteuning die bij uw situatie past.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Wij spreken Spaans, kennen de lokale werkwijze en coördineren zorgvuldig
                geselecteerde onafhankelijke professionals. U houdt één vertrouwd
                aanspreekpunt, terwijl verantwoordelijkheden, openstaande vragen en
                vervolgstappen helder blijven.
              </p>

              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-[#173252]">
                Gericht zoeken. Onafhankelijk laten controleren. Met vertrouwen kopen
                en voorbereid aankomen.
              </p>

              <p className="mt-6 max-w-2xl text-sm font-medium uppercase tracking-[0.2em] text-[#b88948]">
                Vier duidelijke pakketten · Eén vertrouwd aanspreekpunt · Flexibel instappen
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/nl/relocation-assessment"
                  className="rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                >
                  Start met uw gratis Area Match
                </a>

                <a
                  href="/nl/contact"
                  className="rounded-full border border-[#173252] px-8 py-4 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
                >
                  Plan een persoonlijk gesprek
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)] sm:translate-y-10">
                <img
                  src="/images/brochure1-en.png"
                  alt="Nordic Move Spain Complete Buyer Support en relocation"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)]">
                <img
                  src="/images/brochure2-en.png"
                  alt="Nordic Move Spain onafhankelijke aankoopcontroles"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FLEXIBLE SERVICE MODEL */}
        <section className="px-6 pb-20 md:px-8 md:pb-28">
          <div className="mx-auto max-w-7xl rounded-[38px] bg-[#173252] p-9 text-white md:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#d1a866]">
                  Vier pakketten, flexibel te combineren
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                  Kies het pakket dat past bij uw huidige fase.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-[26px] bg-white/10 p-6">
                  <h3 className="font-serif text-2xl">Complete Buyer Support</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    Volledige aankoopbegeleiding van zoekprofiel en woningselectie tot controles, onderhandelingen en overdracht.
                  </p>
                </article>

                <article className="rounded-[26px] bg-white/10 p-6">
                  <h3 className="font-serif text-2xl">Een los instappakket</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    Kies alleen Area Match, Purchase Safety of een Move-In Ready-module wanneer u geen volledig aankooptraject nodig heeft.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>



        {/* PACKAGES IN ONE VIEW */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Wat is inbegrepen?
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Vier pakketten met een duidelijk doel en resultaat.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                U hoeft niet het volledige traject af te nemen. Kies één pakket of
                combineer meerdere onderdelen tot een begeleiding die past bij uw
                woning, planning en toekomst in Spanje.
              </p>
            </div>

            <div className="grid gap-7 lg:grid-cols-2">
              <article
                id="area-match-package"
                className="rounded-[36px] bg-white p-8 shadow-sm md:p-10"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#b88948]">
                  Voor wie nog niet weet waar te zoeken
                </p>
                <h3 className="mt-4 font-serif text-4xl text-[#173252]">Area Match</h3>
                <ul className="mt-7 space-y-3 text-sm leading-relaxed text-stone-700">
                  {[
                    "Persoonlijke intake",
                    "Analyse van woonwensen, budget en toekomstplannen",
                    "Vergelijking van passende plaatsen en regio’s",
                    "Aandacht voor zorg, scholen, bereikbaarheid, voorzieningen en levensstijl",
                    "Persoonlijk Area Match Rapport",
                    "Online adviesgesprek",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b88948]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 rounded-[22px] bg-[#f6f1ea] p-5 text-sm font-medium leading-relaxed text-[#173252]">
                  Resultaat: u weet waar u gericht kunt zoeken en welke gebieden
                  waarschijnlijk minder goed bij uw plannen passen.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-stone-500">
                  Start met een korte gratis Area Match. Voor uitgebreid lokaal
                  onderzoek en een persoonlijk rapport kunt u kiezen voor de betaalde
                  verdiepingsvariant.
                </p>
                <a
                  href="/nl/services/area-match"
                  className="mt-7 inline-flex border-b border-[#b88948] pb-1 text-xs font-medium uppercase tracking-[0.22em] text-[#173252] transition hover:text-[#b88948]"
                >
                  Bekijk Area Match →
                </a>
              </article>

              <article
                id="purchase-safety-package"
                className="rounded-[36px] bg-white p-8 shadow-sm md:p-10"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#b88948]">
                  Voor wie al een woning heeft gevonden
                </p>
                <h3 className="mt-4 font-serif text-4xl text-[#173252]">
                  Purchase Safety
                </h3>
                <ul className="mt-7 space-y-3 text-sm leading-relaxed text-stone-700">
                  {[
                    "Intake over de woning en de voorgenomen aankoop",
                    "Coördinatie van een onafhankelijke vastgoedadvocaat",
                    "Coördinatie van een bouwkundige inspectie door een gekwalificeerde professional",
                    "Verzamelen en bewaken van belangrijke vragen",
                    "Overzicht van technische en juridische aandachtspunten",
                    "Afstemming met verkoopmakelaar en verkoper",
                    "Duidelijk vervolgstappenadvies",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b88948]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 rounded-[22px] bg-[#f6f1ea] p-5 text-sm font-medium leading-relaxed text-[#173252]">
                  Resultaat: u kunt beter onderbouwd beslissen of u doorgaat,
                  heronderhandelt, aanvullende voorwaarden stelt of van de aankoop afziet.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-stone-500">
                  De advocaat en bouwkundige professional blijven verantwoordelijk voor
                  hun eigen onderzoek en rapportage. Nordic Move bewaakt het proces en
                  brengt de informatie overzichtelijk samen.
                </p>
                <a
                  href="/nl/services/purchase-safety-report"
                  className="mt-7 inline-flex border-b border-[#b88948] pb-1 text-xs font-medium uppercase tracking-[0.22em] text-[#173252] transition hover:text-[#b88948]"
                >
                  Bekijk Purchase Safety →
                </a>
              </article>

              <article
                id="complete-buyer-support"
                className="rounded-[36px] bg-[#173252] p-8 text-white shadow-sm md:p-10"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#d1a866]">
                  Voor volledige aankoopbegeleiding
                </p>
                <h3 className="mt-4 font-serif text-4xl">Complete Buyer Support</h3>
                <ul className="mt-7 space-y-3 text-sm leading-relaxed text-white/80">
                  {[
                    "Area Match",
                    "Persoonlijk zoekprofiel en gerichte woningselectie",
                    "Contact en afstemming met lokale makelaars",
                    "Planning en voorbereiding van bezichtigingen",
                    "Begeleiding bij het vergelijken van woningen",
                    "Ondersteuning bij onderhandelingen",
                    "Coördinatie van advocaat en bouwkundige inspectie",
                    "Begeleiding richting de overdracht",
                    "Eén vast aanspreekpunt gedurende het afgesproken traject",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d1a866]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 rounded-[22px] bg-white/10 p-5 text-sm font-medium leading-relaxed text-white">
                  Resultaat: u hoeft niet zelf alle makelaars, documenten, afspraken
                  en professionals te coördineren.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-white/60">
                  Geschikt voor klanten die op afstand kopen, weinig Spaans spreken of
                  één partij willen die overzicht houdt tijdens het aankoopproces.
                </p>
                <a
                  href="/nl/services/discovery-trips"
                  className="mt-7 inline-flex border-b border-[#d1a866] pb-1 text-xs font-medium uppercase tracking-[0.22em] text-white transition hover:text-[#d1a866]"
                >
                  Bespreek Complete Buyer Support →
                </a>
              </article>

              <article
                id="move-in-ready-package"
                className="rounded-[36px] bg-[#e9dfd2] p-8 shadow-sm md:p-10"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#b88948]">
                  Voor ondersteuning na de aankoop
                </p>
                <h3 className="mt-4 font-serif text-4xl text-[#173252]">Move-In Ready</h3>
                <div className="mt-7 grid gap-4">
                  {[
                    [
                      "Home Setup",
                      "Elektriciteit, water, internet, verzekeringen, beveiliging, schoonmaak, sleuteloverdracht en kleine werkzaamheden.",
                    ],
                    [
                      "Renovation & Interior",
                      "Aannemer en specialisten, planning, voortgangsrapportages, interieurconcept, materialen, meubels, installatie en styling.",
                    ],
                    [
                      "Family Relocation",
                      "Verhuisbedrijf, scholen, kinderopvang, zorg, verzekeringen, praktische administratie, voorzieningen en community.",
                    ],
                  ].map(([title, description]) => (
                    <div key={title} className="rounded-[22px] bg-white/70 p-5">
                      <h4 className="font-serif text-2xl text-[#173252]">{title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-stone-700">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-7 rounded-[22px] bg-white/70 p-5 text-sm font-medium leading-relaxed text-[#173252]">
                  Resultaat: de praktische uitvoering wordt afgestemd op uw woning,
                  gezin, planning en budget, zodat uw aankomst beter is voorbereid.
                </p>
                <a
                  href="/nl/services/move-in-ready"
                  className="mt-7 inline-flex border-b border-[#b88948] pb-1 text-xs font-medium uppercase tracking-[0.22em] text-[#173252] transition hover:text-[#b88948]"
                >
                  Bekijk Move-In Ready →
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* AREA MATCH DETAILS */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              <div className="bg-[#173252] p-10 text-white md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#d1a866]">
                  Area Match · Gratis start en betaalde verdieping
                </p>
                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
                  Eerst bepalen waar uw leven in Spanje werkelijk past.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-white/80">
                  We beginnen met een uitgebreide intake over uw levensstijl,
                  gezinssituatie, budget, interesses, praktische behoeften en
                  toekomstplannen. We kijken verder dan slaapkamers en zeezicht.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  U kunt starten met een korte gratis Area Match als kennismaking. Wilt u meer
                  diepgang, dan maken we een uitgebreid persoonlijk Area Match Rapport
                  met passende regio’s, plaatsen en aandachtspunten. Zo krijgt uw
                  zoektocht richting voordat u tijd verliest aan gebieden die niet bij
                  uw plannen passen.
                </p>
                <a
                  href="/nl/relocation-assessment"
                  className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Start met uw gratis Area Match
                </a>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Onderwerpen in de intake
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Levensstijl, dagelijkse routine en gewenste sfeer",
                    "Budget, woningcategorie en onderhoudsniveau",
                    "Permanent wonen, tweede woning of investering",
                    "Bereikbaarheid, luchthaven en vliegverbindingen",
                    "Zorg, scholen en internationale gemeenschap",
                    "Golf, sport, gastronomie en sociale omgeving",
                    "Rust, privacy, veiligheid en afstand tot voorzieningen",
                    "Toekomstbestendigheid en gebruik over vijf of tien jaar",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLETE BUYER SUPPORT — SEARCH PROFILE */}
        <section id="complete-buyer-support-details" className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Complete Buyer Support · Zoekprofiel en woningselectie
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Van uw Area Match naar een gerichte woningselectie.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Na de Area Match plannen we een tweede persoonlijk gesprek. We gaan
                dieper in op de uitkomsten, bespreken waar nog twijfel zit en bepalen
                welke prioriteiten werkelijk doorslaggevend zijn.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Vervolgens selecteren we woningen die aansluiten bij uw wensen,
                behoeften, interesses en toekomst. We kijken niet alleen naar het
                beeld op de advertentie, maar ook naar ligging, praktisch gebruik,
                onderhoud, bereikbaarheid en de manier waarop de woning later moet
                functioneren.
              </p>
            </div>

            <div className="rounded-[38px] bg-white p-8 shadow-sm md:p-10">
              <h3 className="font-serif text-3xl text-[#173252]">
                Wat u van de woningselectie mag verwachten
              </h3>
              <ul className="mt-7 space-y-4 text-sm leading-relaxed text-stone-700">
                {[
                  "Een gerichte selectie in plaats van honderden algemene advertenties",
                  "Woningen beoordeeld vanuit uw persoonlijke Area Match-profiel",
                  "Een heldere vergelijking van sterke punten en aandachtspunten",
                  "Contact en afstemming met verkopers en verkoopmakelaars",
                  "Een shortlist waarmee u gericht kunt besluiten wat u wilt bezichtigen",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b88948]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* COMPLETE BUYER SUPPORT — VIEWINGS */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-[#e9dfd2] p-10 md:p-14 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
              Complete Buyer Support · Bezichtigingen en Buyer Discovery
            </p>
            <h2 className="mt-5 max-w-5xl font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
              Bekijk alleen woningen en omgevingen die werkelijk bij uw profiel passen.
            </h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article className="rounded-[30px] bg-white p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.3em] text-[#b88948]">
                  Optie A
                </p>
                <h3 className="mt-4 font-serif text-3xl text-[#173252]">
                  Privébezichtigingen
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  U regelt zelf uw reis, accommodatie en vervoer. Wij organiseren de
                  woningafspraken, stemmen af met de betrokken verkoopmakelaars en
                  helpen de route en relevante vragen voorbereiden.
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-stone-700">
                  {[
                    "Zelf gekozen reisdata en verblijf",
                    "Gerichte afspraken voor uw shortlist",
                    "Voorbereiding van vragen en aandachtspunten",
                    "Afgesproken ondersteuning bij vervolgstappen",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b88948]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[30px] bg-[#173252] p-8 text-white md:p-10">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d1a866]">
                  Optie B
                </p>
                <h3 className="mt-4 font-serif text-3xl">
                  Buyer Discovery Experience · geselecteerde edities
                </h3>
                <p className="mt-5 leading-relaxed text-white/75">
                  Een persoonlijk programma waarin u niet alleen woningen bekijkt,
                  maar de regio werkelijk ervaart. De exacte inhoud wordt afgestemd
                  op uw profiel, interesses en gekozen serviceniveau.
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/80">
                  {[
                    "Luchthaventransfer en lokaal vervoer binnen het programma",
                    "Vier- of vijfsterrenhotel of geselecteerde finca",
                    "Gerichte woningbezichtigingen en regiobeleving",
                    "Ontmoetingen met relevante onafhankelijke specialisten",
                    "Lokale gastronomie en de regio bekijken door de ogen van een local",
                    "Bezoek aan bijvoorbeeld zorg, scholen, golfclubs of woongebieden",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d1a866]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-stone-600">
              Buyer Discovery is optioneel en uitsluitend beschikbaar op geselecteerde data
              of als private experience. Inhoud, prijs, duur en beschikbaarheid worden
              vooraf schriftelijk bevestigd.
            </p>
          </div>
        </section>

        {/* PURCHASE SAFETY INTRO */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Purchase Safety · Voor u definitief beslist
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Wordt u verliefd op een woning? Koop dan nog niet meteen.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Een overtuigende bezichtiging vertelt niet altijd het hele verhaal.
                Technische gebreken, afwijkende oppervlaktes, ontbrekende documenten
                of juridische beperkingen kunnen pas later zichtbaar worden.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Daarom coördineren wij vóór de definitieve aankoop twee onafhankelijke
                beoordelingen: een technische woninginspectie door een gekwalificeerde
                building surveyor en juridische due diligence door een onafhankelijke
                Spaanse vastgoedadvocaat.
              </p>
              <p className="mt-6 text-lg font-medium leading-relaxed text-[#173252]">
                De onafhankelijke bouwkundige beoordeling is, binnen de vooraf
                afgesproken scope en voorwaarden, onderdeel van onze aankoopservice
                en wordt door Nordic Move Spain betaald. De advocaat wordt rechtstreeks
                door u aangesteld en afzonderlijk door u betaald.
              </p>
            </div>

            <div className="overflow-hidden rounded-[40px] bg-white p-3 shadow-sm">
              <img
                src="/images/brochure2-en.png"
                alt="Nordic Move Spain Purchase Safety met onafhankelijke controles"
                className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* BUILDING SURVEY */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              <div className="bg-[#173252] p-10 text-white md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#d1a866]">
                  Onafhankelijke technische inspectie
                </p>
                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                  Evidence, Cause and Cure.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-white/80">
                  De surveyor zoekt naar aanwijzingen van gebreken, onderzoekt de
                  waarschijnlijke oorzaak en geeft aan welke reparatie, oplossing of
                  aanvullende specialistische controle passend kan zijn.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Het doel is dat u begrijpt welke punten ernstig zijn, welke
                  beheersbaar zijn en welke gevolgen zij kunnen hebben voor uw
                  aankoopbeslissing, onderhandeling en toekomstige onderhoud.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-white/65">
                  De door ons geselecteerde specialistische surveyor woont en werkt
                  in Spanje. De precieze inspectieomvang is afhankelijk van het type
                  woning, de toegankelijkheid, beschikbare documenten en de schriftelijk
                  overeengekomen opdracht.
                </p>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Mogelijke onderdelen van het rapport
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {purchaseSafetyChecks.map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-sm leading-relaxed text-stone-500">
                  Waar de gekozen surveyor met een formeel peer-reviewproces werkt,
                  wordt het rapport volgens diens kwaliteitsprocedure tevens door een
                  tweede gekwalificeerde surveyor beoordeeld.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LEGAL DUE DILIGENCE + DECISION */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-2">
            <article className="rounded-[38px] bg-white p-9 shadow-sm md:p-11">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Onafhankelijke juridische due diligence
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252]">
                De advocaat controleert wat de bouwkundige niet kan beoordelen.
              </h2>
              <p className="mt-7 leading-relaxed text-stone-600">
                Een onafhankelijke Spaanse vastgoedadvocaat beoordeelt onder meer
                juridisch eigendom, lasten, schulden, vergunningen, contracten,
                fiscale aandachtspunten en de voorwaarden van de aankoop.
              </p>
              <p className="mt-5 leading-relaxed text-stone-600">
                De advocaat wordt rechtstreeks door u aangesteld en betaald, zodat
                helder blijft dat deze professional uitsluitend uw juridische
                belangen vertegenwoordigt.
              </p>
            </article>

            <article className="rounded-[38px] bg-[#173252] p-9 text-white md:p-11">
              <p className="text-sm uppercase tracking-[0.35em] text-[#d1a866]">
                Eén duidelijke beslissamenvatting
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight">
                Groen, oranje of rood — met uitleg.
              </h2>
              <div className="mt-7 space-y-5 text-sm leading-relaxed text-white/80">
                <p>
                  <strong className="text-white">Groen:</strong> de beschikbare
                  rapporten signaleren geen blokkerende punten binnen de onderzochte
                  scope.
                </p>
                <p>
                  <strong className="text-white">Oranje:</strong> doorgaan kan alleen
                  verstandig zijn nadat voorwaarden, reparaties, aanvullende controles
                  of heronderhandeling zijn geregeld.
                </p>
                <p>
                  <strong className="text-white">Rood:</strong> de bevindingen geven
                  serieuze redenen om de aankoop te heroverwegen of ervan af te zien.
                </p>
              </div>
              <p className="mt-7 text-xs leading-relaxed text-white/60">
                Nordic Move vertaalt de onafhankelijke bevindingen naar een heldere
                procesaanbeveling. De technische verantwoordelijkheid blijft bij de
                surveyor, de juridische beoordeling bij de advocaat en de definitieve
                aankoopbeslissing bij u.
              </p>
            </article>
          </div>
        </section>

        {/* COMPLETE BUYER SUPPORT — PURCHASE COORDINATION */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-[#e9dfd2] p-10 md:p-14 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Complete Buyer Support · Onderhandeling, aankoop en overdracht
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                  Wanneer alles voldoende duidelijk is, coördineren we wat volgt.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-relaxed text-stone-700">
                  Besluit u door te gaan, dan houden wij samen met uw advocaat en de
                  andere betrokken partijen overzicht op de voorwaarden, openstaande
                  vragen, deadlines en praktische voorbereiding van de overdracht.
                </p>
                <ul className="mt-7 grid gap-4 text-sm leading-relaxed text-stone-700 sm:grid-cols-2">
                  {[
                    "Afstemming met verkoper en verkoopmakelaar",
                    "Opvolging van voorwaarden en openstaande documenten",
                    "Coördinatie met uw onafhankelijke advocaat",
                    "Bewaken van relevante stappen en deadlines",
                    "Praktische afstemming van de notariële afspraak",
                    "Voorbereiding op overdracht en de fase daarna",
                  ].map((item) => (
                    <li key={item} className="rounded-[22px] bg-white/70 p-5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ONE TRUSTED POINT OF CONTACT — KEEP THIS SECTION */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-white p-10 shadow-sm md:p-14 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Eén vertrouwd aanspreekpunt
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                  U hoeft niet zelf vijf verschillende partijen aan te sturen.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Een woning kopen in Spanje betekent vaak tegelijk communiceren met
                  verkoopmakelaars, een surveyor, advocaat, hypotheekadviseur,
                  verhuisbedrijf, aannemer en interieurspecialisten. Nordic Move blijft
                  gedurende de afgesproken onderdelen uw vaste aanspreekpunt.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Wij houden bij wie waarvoor verantwoordelijk is, welke informatie
                  ontbreekt, welke vragen nog openstaan, wat de volgende stap is en
                  waar vertraging of risico kan ontstaan.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "Eén persoonlijk contact",
                    "Eén Nordic Move-contact kent uw wensen, prioriteiten en zorgen gedurende de afgesproken dienstverlening.",
                  ],
                  [
                    "Volledige coördinatie",
                    "Wij coördineren de gekozen specialisten en helpen de afzonderlijke stappen logisch op elkaar aansluiten.",
                  ],
                  [
                    "Duidelijke vervolgstappen",
                    "Open vragen, verantwoordelijkheden, voorwaarden en deadlines worden actief bijgehouden.",
                  ],
                  [
                    "Continuïteit na aankoop",
                    "U kunt ons ook inschakelen voor relocation, Home Setup, renovatie, meubelselectie en styling.",
                  ],
                ].map(([title, text]) => (
                  <article
                    key={title}
                    className="rounded-[26px] bg-[#f6f1ea] p-6"
                  >
                    <h3 className="font-serif text-2xl text-[#173252]">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MOVE-IN READY — COMPACT OVERVIEW */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#e9dfd2] shadow-sm">
            <div className="grid items-center lg:grid-cols-[0.92fr_1.08fr]">
              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Na aankoop · Move-In Ready
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                  Kies alleen de ondersteuning die uw woning en verhuizing nodig hebben.
                </h2>
                <p className="mt-7 text-lg leading-relaxed text-stone-700">
                  De volledige uitwerking van Home Setup, Renovation &amp; Interior en
                  Family Relocation staat op de aparte Move-In Ready-pagina. Daar ziet u
                  per module wat we kunnen coördineren, welk resultaat u mag verwachten
                  en welke verantwoordelijkheden bij externe specialisten blijven.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <a
                    href="/nl/services/move-in-ready#home-setup"
                    className="rounded-[22px] bg-white/75 p-5 transition hover:-translate-y-1 hover:bg-white"
                  >
                    <h3 className="font-serif text-2xl text-[#173252]">Home Setup</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">
                      Nutsvoorzieningen, verzekeringen, beveiliging, onderhoud en voorbereiding vóór aankomst.
                    </p>
                  </a>

                  <a
                    href="/nl/services/move-in-ready#renovation-interior"
                    className="rounded-[22px] bg-white/75 p-5 transition hover:-translate-y-1 hover:bg-white"
                  >
                    <h3 className="font-serif text-2xl text-[#173252]">Renovation &amp; Interior</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">
                      Renovatiecoördinatie, interieurconcept, sourcing, installatie en styling.
                    </p>
                  </a>

                  <a
                    href="/nl/services/move-in-ready#family-relocation"
                    className="rounded-[22px] bg-white/75 p-5 transition hover:-translate-y-1 hover:bg-white"
                  >
                    <h3 className="font-serif text-2xl text-[#173252]">Family Relocation</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">
                      Verhuizing, scholen, zorg, praktische administratie en lokaal dagelijks leven.
                    </p>
                  </a>
                </div>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="/nl/services/move-in-ready"
                    className="rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                  >
                    Bekijk Move-In Ready
                  </a>
                  <a
                    href="/nl/contact"
                    className="rounded-full border border-[#173252] px-8 py-4 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
                  >
                    Bespreek uw situatie
                  </a>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10">
                <img
                  src="/images/move-in-ready-mediterranean-warmth.png"
                  alt="Move-In Ready renovatie, interieur en relocation aan de Costa Blanca"
                  className="h-[520px] w-full rounded-[32px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>


        {/* RESPONSIBILITIES / TRANSPARENCY */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-white p-10 shadow-sm md:p-14 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Transparante samenwerking
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                  Eén coördinator betekent niet dat alle professionals van Nordic Move zijn.
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-relaxed text-stone-600">
                <p>
                  Advocaten, surveyors, architecten, technical architects, aannemers,
                  verhuisbedrijven en andere specialisten voeren hun eigen
                  werkzaamheden zelfstandig uit en blijven verantwoordelijk voor hun
                  eigen advies, rapporten en uitvoering.
                </p>
                <p>
                  Nordic Move selecteert, introduceert en coördineert de afgesproken
                  partijen. Welke diensten zijn inbegrepen, welke u afzonderlijk
                  afneemt en welke professional rechtstreeks aan u factureert, wordt
                  vooraf duidelijk vastgelegd.
                </p>
                <p>
                  U bent vrij om eigen professionals of leveranciers te kiezen. Waar
                  u dat doet, spreken we vooraf af of en hoe Nordic Move binnen die
                  samenwerking nog kan coördineren.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-[#173252] px-8 py-16 text-center text-white md:px-14 md:py-20">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d1a866]">
              Begin met duidelijkheid
            </p>
            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
              Kies het pakket dat past bij uw huidige situatie.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/75">
              Start met een gratis Area Match, laat een gevonden woning onafhankelijk
              controleren, kies voor volledige aankoopbegeleiding of laat uw woning en
              verhuizing voorbereiden met Move-In Ready.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/nl/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Start met uw gratis Area Match
              </a>
              <a
                href="/nl/contact"
                className="rounded-full border border-white/70 px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#173252]"
              >
                Plan een kennismakingsgesprek
              </a>
              <a
                href="https://wa.me/31683848239?text=Hallo%20Nordic%20Move%20Spain%2C%20ik%20wil%20graag%20bespreken%20welk%20servicepakket%20bij%20mijn%20situatie%20past."
                target="_blank"
                rel="noreferrer"
                aria-label="Start een WhatsApp-gesprek met Nordic Move Spain over de servicepakketten"
                className="rounded-full border border-[#c8a063] px-8 py-4 text-sm font-medium text-[#d1a866] transition hover:bg-[#c8a063] hover:text-white"
              >
                Bespreek het via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
 } 