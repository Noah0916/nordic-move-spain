import type { Metadata } from "next";

const pagePath = "/nl/services/area-match";

export const metadata: Metadata = {
  title:
    "Onafhankelijke Aankoopbegeleiding Costa Blanca | Nordic Move Spain",
  description:
    "Nordic Move Spain vertegenwoordigt de kopende partij onafhankelijk. Wij accepteren geen verkoopfee van de verkopende partij en begeleiden u van Area Match en woningzoektocht tot aankoopcontrole, verhuizing en inrichting aan de Costa Blanca.",
  keywords: [
    "Area Match Costa Blanca",
    "persoonlijke aankoopbegeleider Costa Blanca",
    "woning kopen Costa Blanca",
    "Buyer Discovery Experience Spanje",
    "aankoopbegeleiding woning Spanje",
    "Purchase Safety Report Spanje",
    "onafhankelijke bouwkundige keuring Spanje",
    "Spaanse vastgoedadvocaat",
    "coördinatie verhuisbedrijf Spanje",
    "Move-In Ready Costa Blanca",
    "Nordic Move Spain",
  ],
  alternates: {
    canonical: pagePath,
    languages: {
      "en-GB": "/services/area-match",
      "nl-NL": pagePath,
      "de-DE": "/de/services/area-match",
      "sv-SE": "/sv/services/area-match",
    },
  },
  openGraph: {
    title:
      "Onafhankelijke Aankoopbegeleiding Costa Blanca | Nordic Move Spain",
    description:
      "Onafhankelijke begeleiding voor de kopende partij: van Area Match en woningzoektocht tot bezichtigingen, aankoopcontroles, verhuizing en inrichting.",
    type: "website",
    locale: "nl_NL",
    url: pagePath,
    images: [
      {
        url: "/images/brochure2-en.png",
        alt: "Nordic Move Spain diensten voor een gecoördineerde woningaankoop aan de Costa Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Area Match, Buyer Discovery & Volledige Aankoopbegeleiding | Nordic Move Spain",
    description:
      "Onafhankelijke aankoopbegeleiding met één vertrouwd aanspreekpunt vanaf Area Match en woningzoektocht tot Purchase Safety, verhuizing en inrichting.",
    images: ["/images/brochure2-en.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    number: "01",
    eyebrow: "Gratis oriëntatie",
    title: "Area Match Portfolio",
    text:
      "Je ontvangt een gratis, uitgebreid en persoonlijk portfolio dat laat zien welke regio’s, plaatsen en woningtypen het beste passen bij je levensstijl, budget en plannen voor de lange termijn. Zo ontstaat focus voordat je maanden besteedt aan het zoeken naar woningen die niet bij je passen.",
    bullets: [
      "Persoonlijke match op levensstijl en locatie",
      "Informatie over geschikte plaatsen en woongebieden",
      "Inzicht in voorzieningen, zorg, bereikbaarheid en het dagelijks leven",
      "Meer duidelijkheid over het woningtype dat echt bij je past",
      "Een gerichte basis voor je woningzoektocht en bezichtigingen",
    ],
    href: "/nl/relocation-assessment",
    cta: "Vraag je gratis Area Match Portfolio aan",
  },
  {
    number: "02",
    eyebrow: "Persoonlijke woningzoektocht",
    title: "Buyer Discovery Experience",
    text:
      "Na je Area Match vertegenwoordigen wij jou als kopende partij. We zoeken en selecteren geschikte woningen in de markt, stellen een gerichte discovery-route samen en begeleiden je bij bezichtigingen, communicatie, onderhandelingen en aankoop. Wij accepteren geen verkoopfee of verkoopcommissie van de verkopende partij.",
    bullets: [
      "Een persoonlijke route door passende gebieden",
      "Gerichte woningzoektocht en selectie",
      "Bezichtigingen afgestemd op je profiel en prioriteiten",
      "Communicatie met verkopers en verkopende makelaars",
      "Begeleiding tijdens onderhandelingen en het aankoopproces",
    ],
    href: "/nl/services/discovery-trips",
    cta: "Bekijk de Buyer Discovery Experience",
  },
  {
    number: "03",
    eyebrow: "Onafhankelijke aankoopcontrole",
    title: "Purchase Safety",
    text:
      "Wanneer een woning een serieuze optie wordt, coördineren we een onafhankelijke bouwkundige voor de technische beoordeling en eerste controle van documenten en registraties, samen met een onafhankelijke Spaanse advocaat voor de volledige juridische due diligence.",
    bullets: [
      "Zichtbare technische staat, bouwkwaliteit, vocht en installaties",
      "Zwembad, bijgebouwen, herstelpunten, foto’s en aanbevelingen",
      "Nota Simple, Catastro, IBI, CEE en ITE waar relevant",
      "Beschikbare vergunningen, licenties en vergelijking van officiële en gemeten oppervlakten",
      "Twee professionele rapporten en één duidelijk aankoopadvies van Nordic Move",
    ],
    href: "/nl/services/purchase-safety-report",
    cta: "Bekijk Purchase Safety",
    note:
      "De exacte omvang van Purchase Safety hangt af van de woning, de beschikbare documentatie en de benodigde onafhankelijke specialisten. De scope wordt vooraf duidelijk afgestemd.",
  },
  {
    number: "04",
    eyebrow: "Na aankoop",
    title: "Move-In Ready & Verhuiscoördinatie",
    text:
      "Na de aankoop blijft Nordic Move je vaste aanspreekpunt. Move-In Ready is verdeeld in drie flexibele pakketten: Home Setup, Renovatie & Interieur en Gezinsverhuizing. Kies één pakket of combineer de ondersteuning die past bij je woning, gezin, planning en budget.",
    bullets: [
      "Home Setup voor nutsvoorzieningen, verzekeringen, beveiliging, schoonmaak en onderhoud",
      "Renovatie & Interieur voor aannemers, planning, inkoop, inrichting en styling",
      "Gezinsverhuizing voor verhuizing, scholen, zorg en voorbereiding op het dagelijks leven",
      "Eén Nordic Move-aanspreekpunt voor het afgesproken pakket of de combinatie",
      "Geselecteerde onafhankelijke specialisten blijven verantwoordelijk voor hun eigen advies en uitvoering",
    ],
    href: "/nl/services/move-in-ready",
    cta: "Bekijk alle drie Move-In Ready pakketten",
  },
];

const moveInReadyPackages = [
  {
    number: "01",
    title: "Home Setup",
    subtitle: "De praktische basis van je woning",
    text:
      "Voor eigenaren die de belangrijkste praktische zaken na de sleuteloverdracht vóór aankomst duidelijk geregeld willen hebben, zonder dat een volledige renovatie of complete gezinsverhuizing nodig is.",
    result:
      "Je woning is praktisch voorbereid en de belangrijkste leveranciers, afspraken en contractinformatie zijn samengebracht in één duidelijk overzicht.",
    items: [
      "Helpen bij het regelen van elektriciteit en water",
      "Internet, telefoon en televisie coördineren",
      "Woonhuis-, inboedel- en relevante verzekeringsopties vergelijken",
      "Alarm-, beveiligings- en toegangsoplossingen onderzoeken",
      "Schoonmaak en voorbereiding vóór aankomst coördineren",
      "Offertes opvragen voor schilderwerk en kleine werkzaamheden",
      "Tuin-, zwembad- en technisch onderhoud organiseren",
      "Leveranciers-, afspraak- en contractinformatie bundelen",
    ],
  },
  {
    number: "02",
    title: "Renovatie & Interieur",
    subtitle: "Renovatie en inrichting in één gecoördineerd traject",
    text:
      "Voor woningen die renovatie, aanpassing of een complete inrichting nodig hebben voordat je ze comfortabel kunt gebruiken.",
    result:
      "Renovatie, interieurkeuzes, inkoop en uitvoering worden op elkaar afgestemd, zodat technische beslissingen, planning en de uiteindelijke woonomgeving beter op elkaar aansluiten.",
    items: [
      "Wensen, gebruik, prioriteiten en budget bepalen",
      "Aannemer en relevante specialisten selecteren en coördineren",
      "Waar nodig afstemmen met architect of technisch architect",
      "Offertes, planning en voortgangsrapportage structureren",
      "Een interieurconcept en visueel moodboard ontwikkelen",
      "Materialen, meubels en verlichting selecteren",
      "Levering, montage, installatie en styling coördineren",
      "Opleverpunten en eindcontroles vóór aankomst organiseren",
    ],
  },
  {
    number: "03",
    title: "Gezinsverhuizing",
    subtitle: "Bereid het dagelijks leven voor, niet alleen de verhuizing",
    text:
      "Voor gezinnen en internationale professionals die niet alleen de woning, maar ook de praktische kant van wonen, werken en zich vestigen aan de Costa Blanca willen voorbereiden.",
    result:
      "Je krijgt een duidelijker en beter voorbereid startpunt voor de verhuizing, scholen, zorg, lokale diensten en het dagelijks leven in Spanje.",
    items: [
      "Internationale verhuisbedrijven en opslagmogelijkheden vergelijken",
      "Scholen en kinderopvang in geschikte gebieden onderzoeken",
      "Zorg, verzekeringen en praktische voorzieningen in kaart brengen",
      "Lokale administratie en relevante vervolgstappen structureren",
      "Autotransport en gespecialiseerde vervoersopties onderzoeken",
      "Sportclubs, golfclubs en lokale gemeenschappen verkennen",
      "Lokale dienstverleners en dagelijkse voorzieningen selecteren",
      "Een persoonlijk verhuisplan opstellen",
    ],
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
      item: absoluteUrl("/nl/services"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Area Match & Kooptraject",
      item: absoluteUrl(pagePath),
    },
  ],
};

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nordic Move Spain Kooptraject",
  itemListElement: services.map((service, index) => ({
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
      ...(service.number === "04"
        ? {
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Move-In Ready pakketten",
              itemListElement: moveInReadyPackages.map((pkg) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: pkg.title,
                  description: pkg.text,
                },
              })),
            },
          }
        : {}),
    },
  })),
};

export default function AreaMatchPage() {
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
        {/* BROODKRUIMELS */}
        <div className="px-6 pt-8 md:px-8">
          <nav aria-label="Broodkruimel" className="mx-auto max-w-7xl">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
              <li>
                <a href="/nl" className="transition hover:text-[#173252]">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a
                  href="/nl/services"
                  className="transition hover:text-[#173252]"
                >
                  Diensten
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#173252]">
                Area Match &amp; Kooptraject
              </li>
            </ol>
          </nav>
        </div>

        {/* HERO */}
        <section className="px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Onafhankelijke aankoopbegeleiding aan de Costa Blanca
              </p>

              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                Wij vertegenwoordigen u als kopende partij.
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#173252]">
                Daarom werken wij onafhankelijk en accepteren wij geen verkoopfee of
                verkoopcommissie van de verkopende partij, zoals bij veel traditionele
                makelaars wel gebruikelijk is. Ons uitgangspunt is uw aankoopbelang.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
                Vanuit die positie begeleiden we de Area Match, woningzoektocht,
                bezichtigingen, communicatie, onderhandelingen, onafhankelijke
                aankoopcontroles en de praktische stappen na aankoop. Tijdens het hele
                traject heeft u één vertrouwd Nordic Move-aanspreekpunt.
              </p>

              <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  "Belang van de koper voorop",
                  "Geen verkoopfee van de verkoper",
                  "Eén vast aanspreekpunt",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#173252]/10 bg-white/70 px-4 py-3 text-sm leading-relaxed text-stone-700"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/nl/relocation-assessment"
                  className="rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                >
                  Ontvang je gratis portfolio
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
                  alt="Nordic Move Spain brochure over de Buyer Discovery Experience en Move-In Ready ondersteuning"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)]">
                <img
                  src="/images/brochure2-en.png"
                  alt="Nordic Move Spain brochure over onafhankelijke Purchase Safety-controles"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ONZE ONAFHANKELIJKE ROL */}
        <section className="px-6 pb-20 md:px-8 md:pb-24">
          <div className="mx-auto max-w-7xl rounded-[30px] border border-[#173252]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Onze rol
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#173252] md:text-4xl">
                  Wij staan aan de kant van de koper.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  [
                    "Kopersbelang",
                    "Wij vertegenwoordigen u als kopende partij en beoordelen keuzes vanuit uw belang, niet vanuit het verkoopbelang van een woning.",
                  ],
                  [
                    "Geen verkoopfee",
                    "Wij accepteren geen verkoopfee of verkoopcommissie van de verkopende partij. Daardoor blijft onze positie richting de koper duidelijk.",
                  ],
                  [
                    "Breder zoeken",
                    "We kijken naar passende woningen in de markt en zijn niet beperkt tot het aanbod van één verkopende makelaar.",
                  ],
                ].map(([title, text]) => (
                  <article key={title} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <h3 className="font-serif text-xl text-[#173252]">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIENSTENOVERZICHT */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Uw kooptraject in vier duidelijke stappen
              </p>

              <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                Van oriëntatie en woningzoektocht tot aankoopcontrole en ondersteuning na de sleuteloverdracht.
              </h2>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="flex h-full flex-col rounded-[36px] bg-white p-8 shadow-sm md:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-medium tracking-[0.06em] text-[#b88948]">
                        {service.eyebrow}
                      </p>

                      <h3 className="mt-4 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                        {service.title}
                      </h3>
                    </div>

                    <span className="font-serif text-3xl text-[#d7bd94]">
                      {service.number}
                    </span>
                  </div>

                  <p className="mt-6 text-base leading-relaxed text-stone-600">
                    {service.text}
                  </p>

                  <ul className="mt-7 space-y-3 text-sm leading-relaxed text-stone-700">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b88948]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {service.number === "04" ? (
                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {moveInReadyPackages.map((pkg) => (
                        <div
                          key={pkg.title}
                          className="rounded-[20px] bg-[#f6f1ea] p-4"
                        >
                          <p className="text-[11px] font-medium tracking-[0.04em] text-[#b88948]">
                            Pakket {pkg.number}
                          </p>
                          <p className="mt-2 font-serif text-lg leading-tight text-[#173252]">
                            {pkg.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {service.note ? (
                    <p className="mt-7 text-xs leading-relaxed text-stone-500">
                      * {service.note}
                    </p>
                  ) : null}

                  <a
                    href={service.href}
                    className="mt-8 inline-flex w-fit items-center border-b border-[#b88948] pb-1 text-xs font-medium tracking-[0.06em] text-[#173252] transition hover:text-[#b88948]"
                  >
                    {service.cta} →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AREA MATCH */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#173252] p-10 text-white md:p-14 lg:p-16">
                <p className="text-sm font-medium tracking-[0.08em] text-[#d1a866]">
                  Dienst 01 · Area Match
                </p>

                <h2 className="mt-6 font-serif text-3xl leading-tight md:text-5xl">
                  Een gratis portfolio dat je maanden zoeken kan besparen.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/80">
                  Het Area Match Portfolio is geen algemene lijst met plaatsen. Het
                  brengt je levensstijl, budget, toekomstplannen en dagelijkse
                  prioriteiten samen in één persoonlijke vergelijking van passende
                  regio’s, plaatsen en woonomgevingen.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Zo krijgt je zoektocht richting voordat je honderden woningen
                  gaat bekijken. Het helpt voorkomen dat je maanden zoekt
                  in locaties die online aantrekkelijk lijken, maar niet passen
                  bij de manier waarop jij wilt leven.
                </p>

                <a
                  href="/nl/relocation-assessment"
                  className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Vraag je gratis Area Match Portfolio aan
                </a>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Wat je ontvangt
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Een persoonlijk profiel van je levensstijl en woonvoorkeuren",
                    "Een vergelijking van geschikte regio’s, plaatsen en woongebieden",
                    "Informatie over sfeer, bereikbaarheid en het dagelijks leven",
                    "Inzicht in zorg, voorzieningen en internationale gemeenschappen",
                    "Begeleiding bij passende woningtypen en woonomgevingen",
                    "Een gerichte basis voor woningzoektocht, bezichtigingen en vervolgstappen",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-sm leading-relaxed text-stone-500">
                  Het Area Match Portfolio is gratis en vrijblijvend.
                  De inhoud wordt afgestemd op je persoonlijke
                  situatie, plannen en voorkeuren.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BUYER DISCOVERY */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[40px] bg-white p-3 shadow-sm">
              <img
                src="/images/brochure1-en.png"
                alt="Nordic Move Spain brochure over de Buyer Discovery Experience en Nordic Circle"
                className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
              />
            </div>

            <div>
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Dienst 02 · Persoonlijke woningzoektocht &amp; Buyer Discovery
              </p>

              <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                Je persoonlijke aankoopbegeleider voor de zoektocht, bezichtigingen en aankoop.
              </h2>

              <p className="mt-7 text-base leading-relaxed text-stone-600 md:text-lg">
                Je Area Match Portfolio vormt de basis voor een gerichte woningzoektocht.
                Omdat wij de kopende partij vertegenwoordigen, kijken we verder dan het
                aanbod van één verkopende makelaar. We selecteren passende woningen in de
                markt en stellen een gerichte discoveryroute samen langs gebieden en
                woningen die bij je profiel passen.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
                We organiseren de bezichtigingen, verzorgen de communicatie met verkopers
                en verkopende makelaars en begeleiden je bij vragen, onderhandelingen en
                het aankoopproces. Wij accepteren geen verkoopfee of verkoopcommissie van
                de verkopende partij. Zo blijft onze rol richting de koper helder.
              </p>

              <a
                href="/nl/services/discovery-trips"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Bekijk de Buyer Discovery Experience
              </a>

            </div>
          </div>
        </section>

        {/* PURCHASE SAFETY */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Dienst 03 · Purchase Safety
              </p>

              <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                Twee onafhankelijke professionele rapporten vóór je definitieve beslissing.
              </h2>

              <p className="mt-8 text-base leading-relaxed text-stone-600 md:text-lg">
                Een onafhankelijke bouwkundige beoordeelt de zichtbare en toegankelijke
                technische staat, bouwkwaliteit, vocht, waterinslag,
                installaties, het zwembad, bijgebouwen en noodzakelijke
                herstelwerkzaamheden. De bouwkundige voert ook een eerste controle
                uit van documenten en registraties.
              </p>

              <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                Deze controle kan onder meer de Nota Simple, Catastro, IBI, CEE,
                ITE waar relevant, informatie van de makelaar, beschikbare
                vergunningen en licenties, vergelijking van officiële en gemeten
                oppervlakten en aanwijzingen voor mogelijk niet-geregistreerde
                delen van de woning omvatten.
              </p>

              <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                Een geschikte onafhankelijke Spaanse advocaat voert vervolgens de volledige
                juridische due diligence uit en blijft verantwoordelijk voor de
                juridische beoordeling en het advies. Op basis van beide rapporten
                geeft Nordic Move één duidelijk advies: doorgaan, heroverwegen of
                afzien van de aankoop.
              </p>

              <a
                href="/nl/services/purchase-safety-report"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Bekijk Purchase Safety
              </a>

              <p className="mt-5 text-xs leading-relaxed text-stone-500">
                De exacte scope van Purchase Safety wordt vooraf afgestemd op de woning,
                de beschikbare documentatie en de benodigde onafhankelijke specialisten.
              </p>
            </div>

            <div className="order-1 overflow-hidden rounded-[40px] bg-white p-3 shadow-sm lg:order-2">
              <img
                src="/images/brochure2-en.png"
                alt="Nordic Move Spain Purchase Safety-brochure"
                className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* ÉÉN VERTROUWD AANSPREEKPUNT */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-white p-10 shadow-sm md:p-14 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Eén vertrouwd aanspreekpunt
                </p>

                <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                  Je hoeft niet zelf vijf verschillende partijen aan te sturen.
                </h2>

                <p className="mt-8 text-base leading-relaxed text-stone-600 md:text-lg">
                  Een woning kopen in Spanje betekent vaak communiceren met
                  makelaars, verkopers, een bouwkundige, een advocaat, een
                  hypotheekadviseur, een verhuisbedrijf en interieurspecialisten.
                  Nordic Move blijft tijdens het afgesproken traject je vaste
                  aanspreekpunt.
                </p>

                <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                  Wij houden bij wie waarvoor verantwoordelijk is, welke
                  informatie nog ontbreekt, welke vragen openstaan, wat de
                  volgende stap is en waar vertragingen of risico’s kunnen ontstaan.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "Eén persoonlijke aankoopbegeleider",
                    "Eén Nordic Move-contactpersoon kent tijdens het hele traject je wensen, prioriteiten en aandachtspunten.",
                  ],
                  [
                    "Volledige coördinatie",
                    "Wij coördineren de afgesproken specialisten en zorgen dat de afzonderlijke stappen op elkaar aansluiten.",
                  ],
                  [
                    "Duidelijke vervolgstappen",
                    "Openstaande vragen, verantwoordelijkheden, voorwaarden en deadlines worden actief opgevolgd.",
                  ],
                  [
                    "Continuïteit na aankoop",
                    "We blijven betrokken bij hypotheekintroducties, verhuiscoördinatie, styling en inrichting.",
                  ],
                ].map(([title, text]) => (
                  <article
                    key={title}
                    className="rounded-[26px] bg-[#f6f1ea] p-6"
                  >
                    <h3 className="font-serif text-2xl text-[#173252]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MOVE-IN READY & VERHUIZING */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#e9dfd2]">
            <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Dienst 04 · Move-In Ready &amp; Verhuiscoördinatie
                </p>

                <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                  Drie flexibele pakketten van afgeronde aankoop tot een voorbereide aankomst.
                </h2>

                <p className="mt-8 text-base leading-relaxed text-stone-700 md:text-lg">
                  Na de aankoop blijven vaak nog tientallen praktische keuzes over:
                  nutsvoorzieningen, verzekeringen, verhuizing, renovatie, interieur,
                  meubels, scholen en lokale dienstverleners. Nordic Move brengt
                  deze stappen samen in drie duidelijke Move-In Ready pakketten.
                </p>

                <p className="mt-6 text-base leading-relaxed text-stone-700 md:text-lg">
                  Kies Home Setup, Renovatie &amp; Interieur of Gezinsverhuizing —
                  of combineer pakketten tot één gecoördineerd traject. Je houdt één
                  Nordic Move-aanspreekpunt, terwijl geselecteerde onafhankelijke
                  professionals verantwoordelijk blijven voor hun eigen specialistische
                  advies, offertes en uitvoering.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="/nl/services/move-in-ready"
                    className="inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                  >
                    Bekijk Move-In Ready in detail
                  </a>

                  <a
                    href="/nl/contact"
                    className="inline-block rounded-full border border-[#173252] px-8 py-4 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
                  >
                    Bespreek je pakket
                  </a>
                </div>
              </div>

              <div className="min-h-[520px]">
                <img
                  src="/images/interior-design.png"
                  alt="Move-In Ready ondersteuning voor Home Setup, Renovatie & Interieur en Gezinsverhuizing aan de Costa Blanca"
                  className="h-full min-h-[520px] w-full object-cover"
                />
              </div>
            </div>

            <div className="border-t border-[#173252]/10 bg-white/45 p-8 md:p-12 lg:p-14">
              <div className="max-w-4xl">
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Kies de ondersteuning die bij je situatie past
                </p>
                <h3 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                  De drie Move-In Ready pakketten.
                </h3>
                <p className="mt-5 text-base leading-relaxed text-stone-700 md:text-lg">
                  Elk pakket kan op zichzelf worden gekozen. Als je situatie meerdere
                  onderdelen omvat, kunnen de relevante delen worden gecombineerd en
                  gecoördineerd binnen één afgesproken scope.
                </p>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {moveInReadyPackages.map((pkg, index) => (
                  <article
                    key={pkg.title}
                    className={`flex h-full flex-col rounded-[30px] p-7 shadow-sm md:p-8 ${
                      index === 1
                        ? "bg-[#173252] text-white"
                        : "bg-white text-stone-900"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p
                          className={`text-xs font-medium tracking-[0.06em] ${
                            index === 1 ? "text-[#d1a866]" : "text-[#b88948]"
                          }`}
                        >
                          Pakket {pkg.number}
                        </p>
                        <h4
                          className={`mt-3 font-serif text-3xl leading-tight ${
                            index === 1 ? "text-white" : "text-[#173252]"
                          }`}
                        >
                          {pkg.title}
                        </h4>
                      </div>
                      <span
                        className={`font-serif text-3xl ${
                          index === 1 ? "text-white/20" : "text-[#d7bd94]"
                        }`}
                      >
                        {pkg.number}
                      </span>
                    </div>

                    <p
                      className={`mt-5 text-sm font-medium ${
                        index === 1 ? "text-white/90" : "text-[#173252]"
                      }`}
                    >
                      {pkg.subtitle}
                    </p>

                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        index === 1 ? "text-white/75" : "text-stone-600"
                      }`}
                    >
                      {pkg.text}
                    </p>

                    <ul className="mt-6 space-y-3 text-sm leading-relaxed">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span
                            className={`mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full ${
                              index === 1 ? "bg-[#d1a866]" : "bg-[#b88948]"
                            }`}
                          />
                          <span
                            className={
                              index === 1 ? "text-white/80" : "text-stone-700"
                            }
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`mt-7 rounded-[22px] p-5 ${
                        index === 1 ? "bg-white/10" : "bg-[#f6f1ea]"
                      }`}
                    >
                      <p
                        className={`text-[11px] font-medium tracking-[0.04em] ${
                          index === 1 ? "text-[#d1a866]" : "text-[#b88948]"
                        }`}
                      >
                        Beoogd resultaat
                      </p>
                      <p
                        className={`mt-2 text-sm leading-relaxed ${
                          index === 1 ? "text-white/80" : "text-stone-700"
                        }`}
                      >
                        {pkg.result}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <p className="mt-8 max-w-5xl text-xs leading-relaxed text-stone-500">
                Omvang, budget, planning en uitvoering worden afgestemd op de woning,
                je wensen en de beschikbaarheid van geselecteerde lokale specialisten
                en dienstverleners. Toelatingsbesluiten van scholen, administratieve
                beslissingen en werkzaamheden door derden kunnen niet door Nordic Move
                worden gegarandeerd.
              </p>
            </div>
          </div>
        </section>

        {/* SLOT CTA */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-[#173252] px-8 py-16 text-center text-white md:px-14 md:py-20">
            <p className="text-sm font-medium tracking-[0.08em] text-[#d1a866]">
              Onafhankelijke begeleiding voor kopers
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-3xl leading-tight md:text-5xl">
              Uw aankoopbelang voorop, met één vertrouwd aanspreekpunt.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/75">
              Start met je Area Match Portfolio en vervolg met één gecoördineerd
              traject voor woningzoektocht, Buyer Discovery, aankoopcontroles en
              praktische ondersteuning na aankoop. Wij vertegenwoordigen de koper en
              accepteren geen verkoopfee van de verkopende partij.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/nl/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Ontvang je gratis portfolio
              </a>

              <a
                href="/nl/contact"
                className="rounded-full border border-white/70 px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#173252]"
              >
                Plan een kennismakingsgesprek
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}