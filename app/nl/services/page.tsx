import type { Metadata } from "next";

const pagePath = "/nl/services/area-match";

export const metadata: Metadata = {
  title:
    "Area Match, Buyer Discovery & Volledige Aankoopcoördinatie | Nordic Move Spain",
  description:
    "Start met een gratis Area Match Portfolio en ga verder met één persoonlijke makelaar en vast aanspreekpunt voor woningzoektocht, bezichtigingen, Purchase Safety, verhuizing en inrichting aan de Costa Blanca.",
  keywords: [
    "Area Match Costa Blanca",
    "persoonlijke makelaar Costa Blanca",
    "woning kopen Costa Blanca",
    "Buyer Discovery Experience Spanje",
    "aankoopbegeleiding Spanje",
    "Purchase Safety Report Spanje",
    "onafhankelijke woninginspectie Spanje",
    "Spaanse vastgoedadvocaat",
    "verhuisbedrijf coördinatie Spanje",
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
      "Area Match, Buyer Discovery & Volledige Aankoopcoördinatie | Nordic Move Spain",
    description:
      "Vind eerst de juiste regio, werk met één persoonlijke makelaar en laat Nordic Move woningzoektocht, bezichtigingen, onafhankelijke aankoopcontroles, verhuizing en inrichting coördineren.",
    type: "website",
    locale: "nl_NL",
    url: pagePath,
    images: [
      {
        url: "/images/brochure2-en.png",
        alt: "Nordic Move Spain-diensten voor een gecoördineerde woningaankoop aan de Costa Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Area Match, Buyer Discovery & Volledige Aankoopcoördinatie | Nordic Move Spain",
    description:
      "Eén persoonlijke makelaar en vast aanspreekpunt van Area Match en woningzoektocht tot Purchase Safety, verhuizing en inrichting.",
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
      "Je ontvangt een gratis, uitgebreid en persoonlijk portfolio dat laat zien welke regio’s, plaatsen en woningtypes het beste passen bij jouw levensstijl, budget en langetermijnplannen. Zo ontstaat focus voordat je maanden zoekt tussen ongeschikte woningen.",
    bullets: [
      "Persoonlijke matching van levensstijl en locatie",
      "Informatie over geschikte plaatsen en woongebieden",
      "Inzicht in voorzieningen, zorg, bereikbaarheid en dagelijks leven",
      "Meer duidelijkheid over het woningtype dat echt bij je past",
      "Een gerichte basis voor woningzoektocht en bezichtigingen",
    ],
    href: "/nl/relocation-assessment",
    cta: "Vraag je gratis Area Match Portfolio aan",
  },
  {
    number: "02",
    eyebrow: "Persoonlijke woningzoektocht",
    title: "Buyer Discovery Experience",
    text:
      "Na je Area Match treden wij op als jouw persoonlijke makelaar aan de Costa Blanca. We zoeken en selecteren passende woningen, stellen een gerichte route samen en begeleiden je bij bezichtigingen, communicatie, onderhandelingen en aankoop.",
    bullets: [
      "Een persoonlijke route door geschikte regio’s",
      "Gerichte woningzoektocht en selectie",
      "Bezichtigingen afgestemd op jouw profiel en prioriteiten",
      "Communicatie met verkopers en verkoopmakelaars",
      "Begeleiding tijdens onderhandelingen en het aankoopproces",
    ],
    href: "/nl/services/discovery-trips",
    cta: "Ontdek de Buyer Discovery Experience",
    note:
      "Wanneer uiteindelijk via Nordic Move Spain een villa wordt gekocht, wordt afhankelijk van de aankoopprijs de helft of het volledige bedrag van de trip vergoed. De exacte vergoeding en voorwaarden worden vooraf schriftelijk bevestigd.",
  },
  {
    number: "03",
    eyebrow: "Onafhankelijke aankoopbeoordeling",
    title: "Purchase Safety",
    text:
      "Wanneer een woning serieus in beeld komt, coördineren we een onafhankelijke surveyor voor de technische beoordeling en eerste document- en registratiescreening, samen met een onafhankelijke Spaanse advocaat voor de volledige juridische due diligence.",
    bullets: [
      "Zichtbare technische staat, bouwkwaliteit, vocht en installaties",
      "Zwembad, bijgebouwen, reparaties, foto’s en aanbevelingen",
      "Nota Simple, Catastro, IBI, CEE en ITE indien relevant",
      "Beschikbare vergunningen, licenties en vergelijking van officiële en gemeten oppervlaktes",
      "Twee professionele rapporten en één duidelijk Nordic Move-aankoopadvies",
    ],
    href: "/nl/services/purchase-safety-report",
    cta: "Bekijk Purchase Safety",
    note:
      "Wanneer uiteindelijk via Nordic Move Spain een villa wordt gekocht, is de onafhankelijke Purchase Safety-beoordeling inbegrepen in de aankoopbegeleiding. De exacte scope hangt af van de woning, de beschikbare documentatie en de benodigde specialisten.",
  },
  {
    number: "04",
    eyebrow: "Na aankoop",
    title: "Move-In Ready & Verhuiscoördinatie",
    text:
      "Na aankoop blijft Nordic Move jouw vaste aanspreekpunt. Afhankelijk van je behoeften brengen we je in contact met een passende hypotheekadviseur, helpen we bij de selectie en coördinatie van een betrouwbaar verhuisbedrijf en coördineren we persoonlijk styling, inrichting en praktische voorbereiding.",
    bullets: [
      "Introductie bij een passende hypotheekadviseur",
      "Selectie en coördinatie van een betrouwbaar verhuisbedrijf",
      "Persoonlijke interieurrichting en meubelselectie",
      "Coördinatie van leveranciers, leveringen, montage en styling",
      "Laatste praktische voorbereiding voor aankomst",
    ],
    href: "/nl/services/move-in-ready",
    cta: "Ontdek Move-In Ready-ondersteuning",
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
      name: "Area Match & Kopersreis",
      item: absoluteUrl(pagePath),
    },
  ],
};

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nordic Move Spain Kopersreis",
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
                Area Match &amp; Kopersreis
              </li>
            </ol>
          </nav>
        </div>

        {/* HERO */}
        <section className="px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Eén persoonlijke makelaar · Eén vertrouwd aanspreekpunt
              </p>

              <h1 className="mt-6 font-serif text-5xl leading-[1.03] text-[#173252] md:text-7xl">
                Eerst de juiste plek. Dan de juiste woning. Wij coördineren alles wat volgt.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl">
                Onze begeleiding combineert Area Match, persoonlijke
                woningzoektocht, Buyer Discovery, onafhankelijke
                aankoopcontroles, aankoopbegeleiding, verhuizing en inrichting.
                Gedurende het hele traject communiceer je met één vertrouwd
                Nordic Move-aanspreekpunt dat de afgesproken stappen coördineert
                van eerste oriëntatie tot aankomst.
              </p>

              <p className="mt-6 max-w-2xl text-sm font-medium uppercase tracking-[0.22em] text-[#b88948]">
                Volledige coördinatie · Minder partijen zelf aansturen · Meer zekerheid vóór aankoop
              </p>

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
                  alt="Nordic Move Spain-brochure over de Buyer Discovery Experience en Move-In Ready-ondersteuning"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)]">
                <img
                  src="/images/brochure2-en.png"
                  alt="Nordic Move Spain-brochure over onafhankelijke Purchase Safety-controles"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE OVERVIEW */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Vier diensten, één gecoördineerd traject
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Van eerste oriëntatie tot aankoop, verhuizing, inrichting en aankomst.
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
                      <p className="text-xs uppercase tracking-[0.3em] text-[#b88948]">
                        {service.eyebrow}
                      </p>

                      <h3 className="mt-4 font-serif text-3xl leading-tight text-[#173252] md:text-4xl">
                        {service.title}
                      </h3>
                    </div>

                    <span className="font-serif text-5xl text-[#d7bd94]">
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

                  {service.note ? (
                    <p className="mt-7 text-xs leading-relaxed text-stone-500">
                      * {service.note}
                    </p>
                  ) : null}

                  <a
                    href={service.href}
                    className="mt-8 inline-flex w-fit items-center border-b border-[#b88948] pb-1 text-xs font-medium uppercase tracking-[0.22em] text-[#173252] transition hover:text-[#b88948]"
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
                <p className="text-sm uppercase tracking-[0.35em] text-[#d1a866]">
                  Dienst 01 · Area Match
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
                  Een gratis portfolio dat maanden zoeken kan besparen.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/80">
                  Het Area Match Portfolio is geen algemene lijst met plaatsen.
                  Het brengt jouw levensstijl, budget, toekomstplannen en
                  dagelijkse prioriteiten samen in één persoonlijke vergelijking
                  van geschikte regio’s, plaatsen en woonomgevingen.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Zo krijgt je zoektocht richting voordat je honderden woningen
                  gaat bekijken. Het helpt voorkomen dat je maanden zoekt in
                  locaties die online aantrekkelijk lijken, maar niet passen bij
                  hoe je wilt leven.
                </p>

                <a
                  href="/nl/relocation-assessment"
                  className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Vraag je gratis Area Match Portfolio aan
                </a>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Wat je ontvangt
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Een persoonlijk profiel van je levensstijl en woonwensen",
                    "Een vergelijking van geschikte regio’s, plaatsen en woongebieden",
                    "Informatie over sfeer, bereikbaarheid en dagelijks leven",
                    "Inzicht in zorg, voorzieningen en internationale gemeenschappen",
                    "Begeleiding bij passende woningtypes en woonomgevingen",
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
                  Het Area Match Portfolio is gratis en vrijblijvend. De inhoud
                  wordt afgestemd op jouw persoonlijke situatie, plannen en
                  voorkeuren.
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
                alt="Nordic Move Spain-brochure over de Buyer Discovery Experience en Nordic Circle"
                className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Dienst 02 · Persoonlijke woningzoektocht &amp; Buyer Discovery
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Jouw persoonlijke makelaar voor zoektocht, bezichtigingen en aankoop.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Je Area Match Portfolio vormt de basis voor een gerichte
                woningzoektocht. We kijken verder dan het aanbod van één
                makelaar, selecteren passende woningen in de markt en stellen
                een discovery-route samen door de regio’s en woningen die bij
                jouw profiel passen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                We organiseren de bezichtigingen, onderhouden contact met
                verkopers en verkoopmakelaars en begeleiden je bij vragen,
                onderhandelingen en het aankoopproces. Je hoeft je verhaal niet
                telkens opnieuw te vertellen of ieder contact zelf te
                coördineren.
              </p>

              <a
                href="/nl/services/discovery-trips"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Bekijk de Buyer Discovery Experience
              </a>

              <p className="mt-6 text-xs leading-relaxed text-stone-500">
                * Wanneer uiteindelijk via Nordic Move Spain een villa wordt
                gekocht, wordt afhankelijk van de aankoopprijs de helft of het
                volledige bedrag van de trip vergoed. De exacte vergoeding en
                voorwaarden worden vooraf schriftelijk bevestigd.
              </p>
            </div>
          </div>
        </section>

        {/* PURCHASE SAFETY */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="order-2 lg:order-1">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Dienst 03 · Purchase Safety
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Twee onafhankelijke professionele rapporten vóór je definitieve beslissing.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Een onafhankelijke surveyor beoordeelt de zichtbare en
                toegankelijke technische staat, bouwkwaliteit, vocht,
                waterindringing, installaties, zwembad, bijgebouwen en
                noodzakelijke reparaties. De surveyor voert daarnaast een
                eerste document- en registratiescreening uit.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Deze screening kan onder meer de Nota Simple, Catastro, IBI,
                CEE, ITE indien relevant, makelaarsinformatie, beschikbare
                vergunningen en licenties, vergelijking van officiële en
                gemeten oppervlaktes en signalering van mogelijk
                niet-geregistreerde onderdelen omvatten.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Een passende onafhankelijke Spaanse advocaat voert vervolgens
                de volledige juridische due diligence uit en blijft
                verantwoordelijk voor de juridische beoordeling en advisering.
                Op basis van beide rapporten geeft Nordic Move één duidelijk
                advies: doorgaan, heroverwegen of niet kopen.
              </p>

              <a
                href="/nl/services/purchase-safety-report"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Bekijk Purchase Safety
              </a>

              <p className="mt-6 text-xs leading-relaxed text-stone-500">
                * Wanneer uiteindelijk via Nordic Move Spain een villa wordt
                gekocht, is de onafhankelijke Purchase Safety-beoordeling
                inbegrepen in de aankoopbegeleiding. De exacte scope hangt af
                van de woning, de beschikbare documentatie en de benodigde
                specialisten.
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

        {/* ONE TRUSTED POINT OF CONTACT */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-white p-10 shadow-sm md:p-14 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Eén vertrouwd aanspreekpunt
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                  Je hoeft niet zelf vijf verschillende partijen aan te sturen.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Een woning kopen in Spanje betekent vaak tegelijk
                  communiceren met makelaars, verkopers, een surveyor, een
                  advocaat, een hypotheekadviseur, een verhuisbedrijf en
                  interieurspecialisten. Nordic Move blijft gedurende het
                  afgesproken traject jouw vaste aanspreekpunt.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Wij houden bij wie waarvoor verantwoordelijk is, welke
                  informatie ontbreekt, welke vragen nog openstaan, wat de
                  volgende stap is en waar vertraging of risico’s kunnen
                  ontstaan.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "Eén persoonlijke makelaar",
                    "Eén Nordic Move-contact kent jouw wensen, prioriteiten en zorgen gedurende het hele traject.",
                  ],
                  [
                    "Volledige coördinatie",
                    "Wij coördineren de afgesproken specialisten en zorgen dat de afzonderlijke stappen op elkaar aansluiten.",
                  ],
                  [
                    "Duidelijke vervolgstappen",
                    "Open vragen, verantwoordelijkheden, voorwaarden en deadlines worden actief opgevolgd.",
                  ],
                  [
                    "Continuïteit na aankoop",
                    "Wij blijven betrokken voor hypotheekintroducties, verhuiscoördinatie, styling en inrichting.",
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

        {/* MOVE-IN READY & RELOCATION */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#e9dfd2]">
            <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Dienst 04 · Move-In Ready &amp; Verhuiscoördinatie
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                  Van afgeronde aankoop tot een voorbereide aankomst.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-700">
                  Na aankoop blijft Nordic Move jouw vaste aanspreekpunt.
                  Afhankelijk van je behoeften brengen we je in contact met een
                  passende hypotheekadviseur en helpen we bij de selectie en
                  coördinatie van een betrouwbaar verhuisbedrijf.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  We ontwikkelen samen de interieurrichting en coördineren
                  meubels, materialen, verlichting, gordijnen, leveranciers,
                  leveringen, montage en laatste styling met geselecteerde
                  lokale specialisten. Zo hoef je niet maandenlang alles op
                  afstand zelf te regelen.
                </p>

                <a
                  href="/nl/services/move-in-ready"
                  className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                >
                  Ontdek Move-In Ready-ondersteuning
                </a>

                <p className="mt-6 text-xs leading-relaxed text-stone-500">
                  Omvang, budget, planning en uitvoering worden afgestemd op de
                  woning, jouw wensen en de beschikbaarheid van geselecteerde
                  lokale specialisten en dienstverleners.
                </p>
              </div>

              <div className="min-h-[520px]">
                <img
                  src="/images/interior-design.png"
                  alt="Move-In Ready- en verhuiscoördinatie voor een villa aan de Costa Blanca"
                  className="h-full min-h-[520px] w-full object-cover"
                />
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
              Eén persoonlijke makelaar. Eén vertrouwd aanspreekpunt.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/75">
              Start met je gratis Area Match Portfolio en vervolg met één
              gecoördineerd traject voor woningzoektocht, Buyer Discovery,
              aankoopcontroles, verhuizing, inrichting en aankomst.
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