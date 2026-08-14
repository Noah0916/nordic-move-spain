import type { Metadata } from "next";
import type { ReactNode } from "react";

const PAGE_URL = "/guides/denia-vs-calpe";
const GUIDES_URL = "/guides";
const AREA_MATCH_URL = "/services/area-match";
const DISCOVERY_URL = "/services/discovery-trips";
const PURCHASE_SAFETY_URL = "/services/purchase-safety-report";
const CONTACT_URL = "/contact";

const SOURCES = {
  ine:
    "https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177010&idp=1254735572981",
  populationComparison:
    "https://lamarinaalta.com/los-pueblos-de-la-marina-alta-que-mas-crecen-y-los-nueve-que-pierden-habitantes-en-el-ultimo-ano/",
  deniaPopulation:
    "https://en.denia.com/censo-de-poblacion-habitante-nacionalidad/",
  calpePopulation:
    "https://noticias.calp.es/en/noticia/calpes-population-increases-27616-inhabitants-according-ine",
  calpeInternational:
    "https://noticias.calp.es/en/noticia/calpe-town-council-will-request-itinerant-nie-issuance-service-reaches-municipality",
  deniaBeaches:
    "https://denia.net/en/discover/beaches/",
  calpeBeaches:
    "https://www.calpe.es/en/beaches",
  deniaGastronomy:
    "https://denia.net/en/discover/enogastronomy/",
  deniaRestaurants:
    "https://denia.net/en/discover/enogastronomy/where-to-eat-and-drink/",
  calpeGastronomy:
    "https://www.calpe.es/en/discover-calpe/gastronomy",
  michelin2026:
    "https://guide.michelin.com/gb/en/article/michelin-guide-ceremony/all-michelin-star-restaurants-in-spain-2026-the-full-list",
  deniaMarket:
    "https://denia.net/en/gastronomia/municipal-market/",
  deniaMarinas:
    "https://denia.net/en/naturaleza/nautical-facilities/",
  deniaAccess:
    "https://denia.net/en/plan/how-to-get-there/",
  calpeAccess:
    "https://calpe.es/en/discover-calpe/general-information/how-to-arrive",
  calpeIfach:
    "https://www.calpe.es/en/discover-calpe/natural-areas/pe%C3%B1on-de-ifach",
  calpeSaltFlats:
    "https://www.calpe.es/en/discover-calpe/natural-areas/salt-flats",
  calpeCulture:
    "https://calpe.es/en/discover-calpe/cultural-tourism",
  deniaCastle:
    "https://denia.net/en/que-visitar/denia-castle/",
  deniaPrices:
    "https://www.idealista.com/valoracion-de-inmuebles/denia-alicante",
  calpePrices:
    "https://www.idealista.com/valoracion-de-inmuebles/calpe-alicante",
  calpeHealth:
    "https://www.calpe.es/en/services-and-restaurants-guide/services/centro-de-salud",
  calpeFossaClinic:
    "https://www.calpe.es/en/news/article/medical-clinic-fossa-de-calp-begins-permanent-operation-serve-1300-patients-area",
};

export const metadata: Metadata = {
  title: "Dénia vs Calpe: Where to Buy on the Costa Blanca? (2026)",
  description:
    "Dénia vs Calpe compared for property buyers: population, beaches, restaurants, lifestyle, transport, property prices, international community and year-round living.",
  keywords: [
    "Denia vs Calpe",
    "Dénia vs Calpe",
    "Calpe vs Denia",
    "where to buy Costa Blanca",
    "buy property Denia or Calpe",
    "living in Denia",
    "living in Calpe",
    "Denia property",
    "Calpe property",
    "Costa Blanca North property",
    "best place to live Costa Blanca",
    "retire Denia or Calpe",
    "Denia property prices 2026",
    "Calpe property prices 2026",
    "Costa Blanca North comparison",
  ],
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    locale: "en_GB",
    url: PAGE_URL,
    siteName: "Nordic Move Spain",
    title: "Dénia vs Calpe: Which Costa Blanca Town Fits You Best?",
    description:
      "A fact-based 2026 comparison of Dénia and Calpe for international property buyers, covering daily life, population, beaches, food, transport and property prices.",
    publishedTime: "2026-08-08T00:00:00.000Z",
    modifiedTime: "2026-08-08T00:00:00.000Z",
    authors: ["Nordic Move Spain"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dénia vs Calpe: Property Buyer Comparison 2026",
    description:
      "Which is better for you: Dénia or Calpe? Compare population, beaches, gastronomy, access, property prices and year-round lifestyle.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const quickComparison = [
  {
    factor: "Population",
    denia: "47,568",
    calpe: "27,440",
    note: "INE-linked 2025 annual population figures published for 1 January 2025.",
  },
  {
    factor: "Coastline",
    denia: "20+ km",
    calpe: "13 km",
    note: "Dénia has long sandy and rocky stretches; Calpe lists 14 beaches and coves.",
  },
  {
    factor: "Food identity",
    denia: "UNESCO Creative City of Gastronomy",
    calpe: "Strong seafood + international restaurant scene",
    note: "Both have serious gastronomy, but the profile is different.",
  },
  {
    factor: "July 2026 asking-price indicator",
    denia: "€3,407/m²",
    calpe: "€3,587/m²",
    note: "Idealista valuation/asking-market indicator; not completed-sale prices.",
  },
  {
    factor: "Alicante Airport",
    denia: "about 100 km",
    calpe: "about 70 km",
    note: "Published by the official tourism sites.",
  },
  {
    factor: "Valencia Airport",
    denia: "about 113 km",
    calpe: "about 125 km",
    note: "Published by the official tourism sites.",
  },
  {
    factor: "Rail",
    denia: "TRAM Line 9 terminus",
    calpe: "TRAM Line 9 stop",
    note: "Both connect towards Benidorm; Alicante requires onward connection.",
  },
  {
    factor: "Sea connection",
    denia: "Direct Balearic ferries",
    calpe: "Fishing / leisure port",
    note: "Dénia is the stronger transport-and-marina hub.",
  },
];

const buyerProfiles = [
  {
    profile: "You want a larger year-round town",
    winner: "Dénia",
    reason:
      "Its permanent population is substantially larger, and the centre functions more like a regional town with a broad mix of shops, markets, services, restaurants and administration.",
  },
  {
    profile: "You want compact beachfront living",
    winner: "Calpe",
    reason:
      "Arenal-Bol and La Fossa put large sandy beaches, promenades, restaurants and apartments into a concentrated coastal setting.",
  },
  {
    profile: "Food is a major part of your lifestyle",
    winner: "Dénia",
    reason:
      "Dénia has UNESCO Creative City of Gastronomy status, a strong municipal market culture and an unusually deep culinary identity.",
  },
  {
    profile: "You want a highly international resident environment",
    winner: "Calpe",
    reason:
      "Calpe Town Council has described foreigners as roughly 62% of its census population, making the international presence particularly visible in everyday life.",
  },
  {
    profile: "You want long, varied beaches",
    winner: "Dénia",
    reason:
      "The municipality has more than 20 km of coastline, from the long sandy Les Marines side to the rocky coves of Les Rotes.",
  },
  {
    profile: "You fly frequently through Alicante",
    winner: "Calpe",
    reason:
      "Calpe's official tourism information places Alicante-Elche Airport at about 70 km, versus about 100 km from Dénia.",
  },
  {
    profile: "You want ferry access to Ibiza / Formentera",
    winner: "Dénia",
    reason:
      "Dénia has direct passenger ferry links to the Balearic Islands and a much larger nautical infrastructure.",
  },
  {
    profile: "You love a dramatic beach-resort skyline",
    winner: "Calpe",
    reason:
      "The Peñón de Ifach, the salt flats and the beachfront apartment skyline give Calpe a more visually concentrated resort identity.",
  },
];

const faqItems = [
  {
    question: "Is Dénia or Calpe bigger?",
    answer:
      "Dénia is considerably larger by permanent population. The 2025 annual population figures cited in this guide are 47,568 for Dénia and 27,440 for Calp. Both municipalities grow much busier in summer.",
  },
  {
    question: "Is Dénia or Calpe better for year-round living?",
    answer:
      "For buyers who want a larger town with a broader everyday service base, traditional market life, a major port and a more extensive urban centre, Dénia often has the advantage. Calpe can be excellent year-round too, especially for buyers who prefer a compact, highly international beach town.",
  },
  {
    question: "Which has better beaches, Dénia or Calpe?",
    answer:
      "It depends on the beach style you prefer. Dénia has more than 20 km of coastline, including long sandy beaches in Les Marines and rocky coves around Les Rotes. Calpe has 13 km of coastline and 14 beaches and coves, with Arenal-Bol and La Fossa as its two major urban sandy beaches.",
  },
  {
    question: "Which has better restaurants, Dénia or Calpe?",
    answer:
      "Dénia has the stronger destination-wide gastronomic identity because it is a UNESCO Creative City of Gastronomy and has a deep market, seafood and fine-dining culture. Calpe also has a strong restaurant scene, particularly seafood and international cuisine, and its tourism authority highlights multiple Michelin-starred restaurants.",
  },
  {
    question: "Is property more expensive in Dénia or Calpe?",
    answer:
      "In Idealista's July 2026 valuation data, the overall asking-market indicator was about €3,407/m² in Dénia and €3,587/m² in Calpe. This does not mean every Calpe property is more expensive: location, view, property type, condition and micro-area matter far more than a municipal average.",
  },
  {
    question: "Which is better for British, Dutch, German or Scandinavian buyers?",
    answer:
      "Both have established international communities. Calpe has an especially high foreign-resident share, while Dénia combines a large international population with a bigger Spanish year-round urban base. The better fit depends on whether you prefer a more international resort-town feel or a larger mixed local-and-international town.",
  },
  {
    question: "Can I live in Dénia or Calpe without a car?",
    answer:
      "Central locations in both towns can work well without a car. However, Dénia's coastline is very long and many properties along Les Marines, Les Rotes or Montgó are easier with a car or bus. In Calpe, the main beach areas are compact, but hillside urbanisations and the TRAM station can still make a car useful.",
  },
  {
    question: "Which town is better for retirement?",
    answer:
      "Dénia can suit retirees who value a larger town, market culture, long promenades, a wider service base and a less resort-concentrated daily rhythm. Calpe can suit retirees who prioritise easy beach access, a compact centre, a highly international community and shorter access to Alicante Airport.",
  },
];

function SourceLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[#173252] underline decoration-[#c8a063] underline-offset-4 transition hover:text-[#9b743d]"
    >
      {children}
    </a>
  );
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function DeniaVsCalpePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Dénia vs Calpe: Which Costa Blanca Town Is Better for Property Buyers?",
    description:
      "A fact-based comparison of Dénia and Calpe covering population, beaches, gastronomy, property prices, transport, international residents, daily life and property-buying fit.",
    inLanguage: "en-GB",
    datePublished: "2026-08-08",
    dateModified: "2026-08-08",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    author: {
      "@type": "Organization",
      name: "Nordic Move Spain",
      url: "/",
    },
    publisher: {
      "@type": "Organization",
      name: "Nordic Move Spain",
      url: "/",
    },
    about: [
      { "@type": "Place", name: "Dénia, Alicante, Spain" },
      { "@type": "Place", name: "Calp, Alicante, Spain" },
      "Costa Blanca North property",
      "Living in Dénia",
      "Living in Calpe",
    ],
    citation: Object.values(SOURCES),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: GUIDES_URL,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dénia vs Calpe",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
        {/* HERO */}
        <article>
          <header className="relative overflow-hidden px-6 pb-20 pt-12 md:px-8 md:pb-28 md:pt-16">
            <div
              aria-hidden="true"
              className="absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-[#c8a063]/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 text-sm text-stone-500"
              >
                <a className="transition hover:text-[#173252]" href="/">
                  Home
                </a>
                <span aria-hidden="true">/</span>
                <a
                  className="transition hover:text-[#173252]"
                  href={GUIDES_URL}
                >
                  Guides
                </a>
                <span aria-hidden="true">/</span>
                <span className="text-[#173252]">Dénia vs Calpe</span>
              </nav>

              <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#b18445]">
                    COSTA BLANCA NORTH · BUYER COMPARISON 2026
                  </p>

                  <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.04] text-[#173252] md:text-7xl">
                    Dénia vs Calpe:
                    <br />
                    which place fits your life better?
                  </h1>

                  <p className="mt-8 max-w-3xl text-xl leading-relaxed text-stone-600">
                    Both are established Costa Blanca towns with beaches, international
                    residents and strong property markets. But they do not offer the
                    same daily life. Dénia is larger, more spread out and more
                    city-like. Calpe is smaller, more compact, more resort-oriented and
                    exceptionally international.
                  </p>

                  <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-600">
                    This guide compares the details that actually matter when choosing
                    where to buy: population, restaurants, beaches, town structure,
                    transport, airport access, property prices, markets, natural areas,
                    year-round atmosphere and the type of buyer each town tends to suit.
                  </p>

                  <div className="mt-9 flex flex-wrap gap-4">
                    <a
                      href="#comparison"
                      className="rounded-full bg-[#173252] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                    >
                      Compare Dénia and Calpe
                    </a>
                    <a
                      href={AREA_MATCH_URL}
                      className="rounded-full border border-[#173252] px-7 py-4 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
                    >
                      Start with Area Match
                    </a>
                  </div>

                  <p className="mt-7 text-xs leading-relaxed text-stone-500">
                    Updated 8 August 2026 · Population, tourism, transport and
                    property-market data are linked to their underlying sources.
                  </p>
                </div>

                <aside className="rounded-[36px] bg-[#173252] p-8 text-white shadow-xl shadow-[#173252]/10 md:p-10">
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#d1a866]">
                    THE SHORT ANSWER
                  </p>

                  <h2 className="mt-5 font-serif text-4xl leading-tight">
                    Dénia feels more like a real city by the sea. Calpe feels more
                    like a compact international beach town.
                  </h2>

                  <div className="mt-8 space-y-5 border-t border-white/15 pt-7">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#d1a866]">
                        Choose Dénia if you value
                      </p>
                      <p className="mt-2 leading-relaxed text-white/80">
                        a larger year-round centre, long coastline, food culture,
                        traditional markets, a major port and more variation between
                        urban, beach and hillside living.
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#d1a866]">
                        Choose Calpe if you value
                      </p>
                      <p className="mt-2 leading-relaxed text-white/80">
                        compact beach access, a highly international environment,
                        iconic scenery, apartment living near the promenade and faster
                        access to Alicante Airport.
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </header>

          {/* QUICK COMPARISON */}
          <section id="comparison" className="bg-[#e9dfd2] px-6 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-4xl">
                <p className="text-sm uppercase tracking-[0.32em] text-[#8a6635]">
                  DÉNIA VS CALPE AT A GLANCE
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#173252]">
                  The measurable differences first.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  Municipal averages never tell the whole story, but they provide a
                  useful starting point before you compare individual neighbourhoods
                  and properties.
                </p>
              </div>

              <div className="mt-12 overflow-hidden rounded-[32px] bg-white shadow-sm">
                <div className="hidden grid-cols-[0.9fr_1fr_1fr] border-b border-stone-200 bg-[#173252] px-7 py-5 text-sm font-medium text-white md:grid">
                  <div>Factor</div>
                  <div>Dénia</div>
                  <div>Calpe</div>
                </div>

                {quickComparison.map((row) => (
                  <div
                    key={row.factor}
                    className="grid gap-4 border-b border-stone-200 px-7 py-6 last:border-b-0 md:grid-cols-[0.9fr_1fr_1fr]"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#9b743d]">
                        {row.factor}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-stone-500 md:pr-8">
                        {row.note}
                      </p>
                    </div>
                    <div>
                      <span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-stone-400 md:hidden">
                        Dénia
                      </span>
                      <strong className="font-serif text-2xl font-normal text-[#173252]">
                        {row.denia}
                      </strong>
                    </div>
                    <div>
                      <span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-stone-400 md:hidden">
                        Calpe
                      </span>
                      <strong className="font-serif text-2xl font-normal text-[#173252]">
                        {row.calpe}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 max-w-5xl text-sm leading-relaxed text-stone-600">
                Population note: the INE&apos;s 2025 Nomenclátor was published on
                28 January 2026. The comparison figures above are from the 2025 annual
                census series reported for the Marina Alta. Check the{" "}
                <SourceLink href={SOURCES.ine}>INE population dataset</SourceLink>{" "}
                and the{" "}
                <SourceLink href={SOURCES.populationComparison}>
                  published Marina Alta municipality comparison
                </SourceLink>
                .
              </p>
            </div>
          </section>

          {/* MAIN ARTICLE LAYOUT */}
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-8 lg:grid-cols-[260px_minmax(0,880px)] lg:justify-center lg:gap-24 lg:py-32">
            {/* CONTENT NAV */}
            <aside className="self-start lg:sticky lg:top-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#9b743d]">
                IN THIS GUIDE
              </p>

              <ol className="mt-6 list-none border-b border-stone-300 p-0 text-sm">
                {[
                  ["#size", "Population & town feel"],
                  ["#international", "International community"],
                  ["#food", "Restaurants & food"],
                  ["#beaches", "Beaches & coastline"],
                  ["#nature", "Nature & scenery"],
                  ["#daily-life", "Daily life & shopping"],
                  ["#transport", "Transport & airports"],
                  ["#property", "Property & prices"],
                  ["#seasonality", "Summer vs winter"],
                  ["#who-suits-where", "Which buyer suits where?"],
                  ["#viewings", "How to compare properly"],
                  ["#faq", "FAQ"],
                  ["#sources", "Sources"],
                ].map(([href, label], index) => (
                  <li key={href} className="border-t border-stone-300">
                    <a
                      href={href}
                      className="grid grid-cols-[28px_1fr] gap-2 py-3 leading-relaxed text-stone-600 no-underline transition hover:text-[#173252]"
                    >
                      <span className="text-xs font-semibold text-[#9b743d]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-2xl bg-[#173252] p-6 text-white">
                <p className="text-sm leading-relaxed text-white/80">
                  Unsure which town fits your lifestyle rather than just your holiday
                  preferences?
                </p>
                <a
                  href={AREA_MATCH_URL}
                  className="mt-4 inline-block text-sm font-medium text-white underline decoration-[#c8a063] underline-offset-4"
                >
                  Compare locations with Area Match
                </a>
              </div>
            </aside>

            <div className="min-w-0">
              {/* SIZE */}
              <section id="size" className="scroll-mt-8 border-b border-stone-300 pb-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  01 · POPULATION AND URBAN SCALE
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#173252]">
                  Dénia is the larger town — and you feel that difference every day.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  The 2025 annual population series puts Dénia at approximately{" "}
                  <strong>47,568 residents</strong> and Calp at approximately{" "}
                  <strong>27,440</strong>. Dénia therefore has roughly 20,000 more
                  permanent residents in the comparable dataset.{" "}
                  <SourceLink href={SOURCES.ine}>INE</SourceLink>{" "}
                  publishes the underlying annual population data.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  That size difference matters more than the number itself. Dénia has
                  a larger and more layered urban centre: the historic core, Marqués
                  de Campo, the municipal market, Baix la Mar, the port, residential
                  districts, Les Marines, Les Rotes and the Montgó side each create
                  a different living environment.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Calpe is smaller and more concentrated. Its identity is strongly
                  organised around the old town, Arenal-Bol, La Fossa, the Peñón de
                  Ifach, the fishing port and the apartment corridors near the two
                  main beaches. In practical terms, the centre and beach lifestyle
                  can feel more immediately connected.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="rounded-[28px] bg-white p-7 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9b743d]">
                      DÉNIA FEELS LIKE
                    </p>
                    <p className="mt-4 font-serif text-3xl leading-tight text-[#173252]">
                      A regional Mediterranean town that also happens to have excellent beaches.
                    </p>
                  </div>

                  <div className="rounded-[28px] bg-white p-7 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9b743d]">
                      CALPE FEELS LIKE
                    </p>
                    <p className="mt-4 font-serif text-3xl leading-tight text-[#173252]">
                      A compact international beach town built around an iconic coastal landscape.
                    </p>
                  </div>
                </div>
              </section>

              {/* INTERNATIONAL */}
              <section id="international" className="scroll-mt-8 border-b border-stone-300 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  02 · INTERNATIONAL COMMUNITY
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#173252]">
                  Both are international. Calpe is international on a different scale.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  International residents are a major part of both towns. In Dénia,
                  municipal-register data reported for the end of 2024 showed{" "}
                  <strong>16,113 foreign residents out of 49,959</strong> — just over
                  32% of the municipal-register population. British and German residents
                  were among the larger foreign groups, alongside a rapidly growing
                  Colombian community.{" "}
                  <SourceLink href={SOURCES.deniaPopulation}>
                    See the Dénia population breakdown
                  </SourceLink>
                  .
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Calpe Town Council stated in 2024 that approximately{" "}
                  <strong>62% of its census population was foreign</strong>. That is an
                  unusually high proportion and explains why multilingual services,
                  international food, foreign-resident associations and cross-border
                  administration are especially visible in Calpe.{" "}
                  <SourceLink href={SOURCES.calpeInternational}>
                    See the Calpe Town Council source
                  </SourceLink>
                  .
                </p>

                <div className="mt-8 border-l-4 border-[#c8a063] bg-[#eee6dc] p-7">
                  <p className="m-0 font-serif text-2xl leading-relaxed text-[#173252]">
                    Buyer implication: Calpe can feel more immediately international.
                    Dénia tends to offer a stronger blend of Spanish year-round city life
                    and international resident life.
                  </p>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-stone-500">
                  The percentages above come from different municipal reporting series
                  and dates, so they should be read as an indicator of community profile,
                  not as a strict like-for-like statistical comparison.
                </p>
              </section>

              {/* FOOD */}
              <section id="food" className="scroll-mt-8 border-b border-stone-300 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  03 · RESTAURANTS, MARKETS AND FOOD CULTURE
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#173252]">
                  Dénia wins on gastronomic identity. Calpe is stronger than many buyers expect.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  A fixed number of “restaurants in town” is not a reliable comparison:
                  businesses open and close, directories use different boundaries and
                  some listings include cafés, bars or nearby municipalities. The more
                  useful question is what kind of restaurant ecosystem you have access to.
                </p>

                <h3 className="mt-10 font-serif text-3xl text-[#173252]">
                  Dénia: food is part of the city&apos;s identity
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Dénia has been a{" "}
                  <strong>UNESCO Creative City of Gastronomy since 2015</strong>.
                  Its official tourism strategy links gastronomy to the fishing fleet,
                  local agriculture, the municipal market, rice dishes, the famous red
                  prawn and producers across the Marina Alta.{" "}
                  <SourceLink href={SOURCES.deniaGastronomy}>
                    Dénia Tourism: gastronomy
                  </SourceLink>
                  .
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  The restaurant scene runs from inexpensive tapas and rice restaurants
                  to destination fine dining. The 2026 MICHELIN Guide includes{" "}
                  <strong>Quique Dacosta in Dénia with three stars</strong>, while
                  Peix &amp; Brases is also Michelin-starred.{" "}
                  <SourceLink href={SOURCES.michelin2026}>
                    MICHELIN Guide Spain 2026
                  </SourceLink>
                  .
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  For everyday living, the{" "}
                  <SourceLink href={SOURCES.deniaMarket}>
                    Dénia Municipal Market
                  </SourceLink>{" "}
                  is a real advantage: it is open Monday to Saturday mornings and sells
                  fresh fish and seafood, produce, meat, bakery goods and gourmet
                  products, with bars and cafés inside.
                </p>

                <h3 className="mt-10 font-serif text-3xl text-[#173252]">
                  Calpe: seafood, international choice and serious fine dining
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Calpe&apos;s traditional food is strongly connected to the fishing
                  port and local fish. The official tourism site highlights dishes such
                  as <em>llauna de Calp</em> and <em>arròs del senyoret</em>, alongside
                  a broad international restaurant offer covering German, British,
                  Italian, Asian, Indian, Belgian, Greek and other cuisines.{" "}
                  <SourceLink href={SOURCES.calpeGastronomy}>
                    Calpe Tourism: gastronomy
                  </SourceLink>
                  .
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Calpe is not just casual resort dining. Its tourism authority also
                  highlights multiple Michelin-starred restaurants, and the 2026
                  MICHELIN selection confirms Calp as an important fine-dining
                  destination on the Costa Blanca.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="rounded-[28px] bg-[#173252] p-7 text-white">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#d1a866]">
                      FOOD VERDICT · DÉNIA
                    </p>
                    <p className="mt-4 font-serif text-3xl leading-tight">
                      Better if food, markets and local culinary culture are part of
                      how you want to live every week.
                    </p>
                  </div>

                  <div className="rounded-[28px] bg-white p-7 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                      FOOD VERDICT · CALPE
                    </p>
                    <p className="mt-4 font-serif text-3xl leading-tight text-[#173252]">
                      Better if you want beachside dining, international choice and
                      high-end options in a compact area.
                    </p>
                  </div>
                </div>
              </section>

              {/* BEACHES */}
              <section id="beaches" className="scroll-mt-8 border-b border-stone-300 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  04 · BEACHES AND COASTLINE
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#173252]">
                  Dénia gives you more coastline. Calpe gives you a more concentrated beach lifestyle.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Dénia&apos;s official tourism site describes{" "}
                  <strong>more than 20 km of coastline</strong>. The north side,
                  Les Marines, is dominated by long sandy beaches. South of the town,
                  Les Rotes changes character into rocky coves, clear water and the
                  marine-reserve landscape towards Cabo de San Antonio.{" "}
                  <SourceLink href={SOURCES.deniaBeaches}>
                    Dénia Tourism: beaches
                  </SourceLink>
                  .
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Calpe lists <strong>13 km of coastline and 14 beaches and coves</strong>.
                  Arenal-Bol and La Fossa are the two major urban sandy beaches, with
                  promenades and a high concentration of restaurants and services.
                  Smaller coves sit around the Peñón, Les Bassetes and the Toix side.{" "}
                  <SourceLink href={SOURCES.calpeBeaches}>
                    Calpe Tourism: beaches
                  </SourceLink>
                  .
                </p>

                <div className="mt-10 overflow-hidden rounded-[30px] bg-white shadow-sm">
                  {[
                    [
                      "Long sandy walks",
                      "Dénia",
                      "Les Marines gives you a much longer continuous sandy-coast experience.",
                    ],
                    [
                      "Urban beach convenience",
                      "Calpe",
                      "Arenal-Bol and La Fossa combine sand, promenades, apartments and restaurants in a compact setting.",
                    ],
                    [
                      "Rocky swimming / snorkelling",
                      "Tie",
                      "Les Rotes in Dénia and Calpe's smaller coves both provide strong rocky-water options.",
                    ],
                    [
                      "Visual drama",
                      "Calpe",
                      "The 332-metre Peñón de Ifach dominates the coastline in a way few Costa Blanca towns can match.",
                    ],
                  ].map(([factor, winner, why]) => (
                    <div
                      key={factor}
                      className="grid gap-4 border-b border-stone-200 p-6 last:border-b-0 md:grid-cols-[0.8fr_0.35fr_1.4fr]"
                    >
                      <strong className="text-[#173252]">{factor}</strong>
                      <span className="font-medium text-[#9b743d]">{winner}</span>
                      <span className="text-sm leading-relaxed text-stone-600">
                        {why}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* NATURE */}
              <section id="nature" className="scroll-mt-8 border-b border-stone-300 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  05 · NATURE, WALKING AND SCENERY
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#173252]">
                  The landscapes are different enough to change the feel of your home.
                </h2>

                <h3 className="mt-9 font-serif text-3xl text-[#173252]">
                  Dénia: Montgó, marine reserve and a wide horizon
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Dénia sits beneath the Montgó massif and opens onto a long,
                  relatively low-rise coastline. From the castle you look across the
                  city, sea and Montgó, while the southern coastline transitions into
                  the Cabo de San Antonio marine-reserve environment.{" "}
                  <SourceLink href={SOURCES.deniaCastle}>
                    Dénia Castle and landscape
                  </SourceLink>
                  .
                </p>

                <h3 className="mt-9 font-serif text-3xl text-[#173252]">
                  Calpe: Peñón de Ifach and the salt flats
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Calpe&apos;s landscape is more theatrical. The{" "}
                  <SourceLink href={SOURCES.calpeIfach}>
                    Peñón de Ifach
                  </SourceLink>{" "}
                  rises 332 metres above the sea and forms the visual centre of the
                  town. Immediately behind the coastal strip, the{" "}
                  <SourceLink href={SOURCES.calpeSaltFlats}>
                    Salinas de Calp
                  </SourceLink>{" "}
                  create a wetland habitat where flamingos and other birdlife can be seen.
                </p>

                <div className="mt-8 rounded-[28px] bg-[#eee6dc] p-7">
                  <p className="font-serif text-2xl leading-relaxed text-[#173252]">
                    If you want open coastline, long routes and distinct beach zones,
                    Dénia is compelling. If you want an iconic mountain-and-sea view
                    built into the town itself, Calpe is hard to beat.
                  </p>
                </div>
              </section>

              {/* DAILY LIFE */}
              <section id="daily-life" className="scroll-mt-8 border-b border-stone-300 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  06 · SHOPPING, SERVICES AND ORDINARY TUESDAYS
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#173252]">
                  The best place to buy is the place that works on an ordinary winter weekday.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  This is where buyers often discover the biggest difference. Holiday
                  atmosphere is easy to compare. Grocery shopping, appointments,
                  parking, walking routes, school runs, medical visits and meeting
                  friends in January are more important for long-term satisfaction.
                </p>

                <h3 className="mt-9 font-serif text-3xl text-[#173252]">
                  Why Dénia feels more self-contained
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Dénia&apos;s centre combines its municipal market, local shops,
                  boutiques, cafés, restaurants, administration and several weekly
                  markets. The official shopping guide identifies Marqués de Campo,
                  Diana, Magallanes, La Mar and surrounding streets as a major commercial
                  core. The market itself operates Monday to Saturday mornings.{" "}
                  <SourceLink href={SOURCES.deniaMarket}>
                    Municipal Market details
                  </SourceLink>
                  .
                </p>

                <h3 className="mt-9 font-serif text-3xl text-[#173252]">
                  Why Calpe can be easier for a beach-first routine
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  In Calpe, a well-located apartment can put the beach, promenade,
                  supermarket, restaurants and town centre within a relatively compact
                  radius. The trade-off is that the experience can become more
                  tourism-oriented around the principal beach zones, particularly in
                  high season.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Calpe has a main health centre in Calle San Fermín, and its La Fossa
                  medical clinic became a permanent weekday facility serving its
                  assigned local population.{" "}
                  <SourceLink href={SOURCES.calpeHealth}>
                    Calpe Health Centre
                  </SourceLink>{" "}
                  ·{" "}
                  <SourceLink href={SOURCES.calpeFossaClinic}>
                    La Fossa clinic update
                  </SourceLink>
                  .
                </p>
              </section>

              {/* TRANSPORT */}
              <section id="transport" className="scroll-mt-8 border-b border-stone-300 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  07 · TRANSPORT, AIRPORTS AND GETTING AROUND
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#173252]">
                  Calpe is better positioned for Alicante Airport. Dénia is the stronger transport hub overall.
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  <div className="rounded-[30px] bg-white p-8 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9b743d]">
                      DÉNIA
                    </p>
                    <ul className="mt-5 space-y-4 text-sm leading-relaxed text-stone-700">
                      <li>• Alicante-Elche Airport: about 100 km.</li>
                      <li>• Valencia Airport: about 113 km.</li>
                      <li>• TRAM Line 9 connects Dénia, Calpe, Altea and Benidorm.</li>
                      <li>• Official tourism information gives Dénia–Benidorm at about 82 minutes by Line 9.</li>
                      <li>• Direct Baleària ferry links to Ibiza, Formentera and Mallorca.</li>
                      <li>• Four marinas plus additional mooring area, with 2,000+ berths.</li>
                    </ul>
                    <p className="mt-6 text-sm">
                      <SourceLink href={SOURCES.deniaAccess}>
                        Dénia official transport information
                      </SourceLink>
                    </p>
                  </div>

                  <div className="rounded-[30px] bg-white p-8 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9b743d]">
                      CALPE
                    </p>
                    <ul className="mt-5 space-y-4 text-sm leading-relaxed text-stone-700">
                      <li>• Alicante-Elche Airport: about 70 km.</li>
                      <li>• Valencia Airport: about 125 km.</li>
                      <li>• TRAM Line 9 stops in Calpe.</li>
                      <li>• The station is inland; the official tourism site points travellers to local L1/L2 buses for the beach areas.</li>
                      <li>• Regular bus links connect Calpe with Alicante, Valencia and other cities.</li>
                      <li>• No comparable direct Balearic ferry hub.</li>
                    </ul>
                    <p className="mt-6 text-sm">
                      <SourceLink href={SOURCES.calpeAccess}>
                        Calpe official access information
                      </SourceLink>
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  One practical point: a central apartment in either town can reduce
                  car use. A property on Montgó, at the far end of Les Marines, in
                  Les Rotes or in a hillside urbanisation around Calpe changes that
                  calculation completely. Compare the actual address, not just the town.
                </p>

                <p className="mt-6 text-sm leading-relaxed text-stone-500">
                  Dénia&apos;s nautical capacity source:{" "}
                  <SourceLink href={SOURCES.deniaMarinas}>
                    Dénia Tourism — four marinas and 2,000+ berths
                  </SourceLink>
                  .
                </p>
              </section>

              {/* PROPERTY */}
              <section id="property" className="scroll-mt-8 border-b border-stone-300 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  08 · PROPERTY TYPES AND MARKET PRICES
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#173252]">
                  The municipal price averages are close. The type of home you buy is not.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Idealista&apos;s July 2026 valuation data gives an overall market
                  indicator of approximately <strong>€3,407/m² in Dénia</strong> and{" "}
                  <strong>€3,587/m² in Calpe</strong>. At municipal level, Calpe therefore
                  sits around 5% higher in this particular asking-market dataset.{" "}
                  <SourceLink href={SOURCES.deniaPrices}>
                    Dénia price data
                  </SourceLink>{" "}
                  ·{" "}
                  <SourceLink href={SOURCES.calpePrices}>
                    Calpe price data
                  </SourceLink>
                  .
                </p>

                <div className="mt-10 overflow-hidden rounded-[30px] bg-white shadow-sm">
                  {[
                    ["All homes", "€3,407/m²", "€3,587/m²"],
                    ["Flats / apartments", "€3,551/m²", "€3,950/m²"],
                    ["Houses / villas", "€3,255/m²", "€3,222/m²"],
                  ].map(([type, denia, calpe]) => (
                    <div
                      key={type}
                      className="grid gap-4 border-b border-stone-200 p-6 last:border-b-0 md:grid-cols-3"
                    >
                      <strong className="text-[#173252]">{type}</strong>
                      <div>
                        <span className="block text-[10px] uppercase tracking-[0.18em] text-stone-400">
                          Dénia
                        </span>
                        <span className="font-serif text-2xl text-[#173252]">{denia}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-[0.18em] text-stone-400">
                          Calpe
                        </span>
                        <span className="font-serif text-2xl text-[#173252]">{calpe}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-stone-500">
                  These are portal valuation / asking-market indicators, not notarised
                  transaction prices. They can move monthly and should never be used to
                  value an individual property without analysing its exact location,
                  condition, view, plot, floor, orientation, legal status and comparable
                  sales.
                </p>

                <h3 className="mt-12 font-serif text-3xl text-[#173252]">
                  What you are actually comparing in Dénia
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  The Dénia market is highly varied: urban apartments, town-centre
                  homes, beach apartments along Les Marines, lower-density property
                  around Les Rotes, villas on the Montgó side and properties further
                  north towards Les Deveses. Two homes both labelled “Dénia” can offer
                  completely different daily lives.
                </p>

                <h3 className="mt-10 font-serif text-3xl text-[#173252]">
                  What you are actually comparing in Calpe
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Calpe has a stronger concentration of apartment living close to
                  Arenal-Bol and La Fossa, including sea-view and higher-floor stock.
                  The municipality also has villas and lower-density urbanisations away
                  from the immediate beachfront. The average price can therefore be
                  heavily influenced by the type of stock buyers are comparing.
                </p>

                <div className="mt-8 rounded-[28px] bg-[#173252] p-7 text-white">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#d1a866]">
                    BUYER RULE
                  </p>
                  <p className="mt-4 font-serif text-2xl leading-relaxed">
                    Never choose Dénia over Calpe — or Calpe over Dénia — because of a
                    municipal €/m² average. First choose the lifestyle zone. Then compare
                    the property and legal reality inside that zone.
                  </p>
                </div>
              </section>

              {/* SEASONALITY */}
              <section id="seasonality" className="scroll-mt-8 border-b border-stone-300 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  09 · SUMMER, WINTER AND TOURISM PRESSURE
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#173252]">
                  Both change dramatically in summer. Calpe concentrates that pressure more visibly around the beach.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Neither town should be judged from an August viewing alone. Traffic,
                  parking, restaurant availability, beach density and noise can change
                  sharply between high season and winter.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Dénia&apos;s larger resident base and broader urban footprint mean that
                  local life remains visible outside the tourist strip, although the town
                  also experiences major seasonal population pressure. Calpe&apos;s smaller
                  permanent population combined with dense urban beaches can make the
                  summer transformation feel more concentrated.
                </p>

                <div className="mt-8 border-l-4 border-[#c8a063] bg-[#eee6dc] p-7">
                  <p className="m-0 font-serif text-2xl leading-relaxed text-[#173252]">
                    Serious buyers should visit twice: once in the season they love, and
                    once in the season they expect to live there most.
                  </p>
                </div>
              </section>

              {/* WHO SUITS WHERE */}
              <section id="who-suits-where" className="scroll-mt-8 border-b border-stone-300 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  10 · WHO SHOULD CHOOSE WHICH TOWN?
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#173252]">
                  The winner changes with the life you are trying to build.
                </h2>

                <div className="mt-10 space-y-4">
                  {buyerProfiles.map((item) => (
                    <div
                      key={item.profile}
                      className="grid gap-5 rounded-[26px] bg-white p-7 shadow-sm md:grid-cols-[1fr_120px_1.5fr]"
                    >
                      <h3 className="font-serif text-2xl leading-tight text-[#173252]">
                        {item.profile}
                      </h3>
                      <div>
                        <span className="rounded-full bg-[#eee6dc] px-4 py-2 text-sm font-semibold text-[#8a6635]">
                          {item.winner}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-stone-600">
                        {item.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* VIEWINGS */}
              <section id="viewings" className="scroll-mt-8 border-b border-stone-300 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  11 · HOW TO COMPARE DÉNIA AND CALPE PROPERLY
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#173252]">
                  Do not compare listings first. Compare daily-life routes.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  A beautiful sea view can make two properties look comparable online
                  even when the everyday experience is completely different. Before
                  making a shortlist, define what you want to be able to do within
                  5, 15 and 30 minutes from home.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  {[
                    [
                      "5 minutes",
                      "Can you walk to coffee, groceries, the beach or a pleasant daily route?",
                    ],
                    [
                      "15 minutes",
                      "Can you reach the town centre, medical care, sports, restaurants and the services you actually use?",
                    ],
                    [
                      "30 minutes",
                      "How much of the wider Costa Blanca North, schools, hospitals, golf, hiking and marinas becomes accessible?",
                    ],
                    [
                      "January test",
                      "Would you still choose the street, building and neighbourhood when the beach holiday atmosphere disappears?",
                    ],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-[28px] bg-white p-7 shadow-sm">
                      <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9b743d]">
                        {title}
                      </p>
                      <p className="mt-4 leading-relaxed text-stone-600">{text}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-10 text-lg leading-relaxed text-stone-600">
                  Nordic Move&apos;s{" "}
                  <a
                    href={AREA_MATCH_URL}
                    className="font-medium text-[#173252] underline decoration-[#c8a063] underline-offset-4"
                  >
                    Area Match
                  </a>{" "}
                  is designed around this exact problem: choosing the right location
                  before spending weeks comparing properties in an area that may not
                  suit your real life.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href={DISCOVERY_URL}
                    className="rounded-full bg-[#173252] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                  >
                    Explore Buyer Discovery
                  </a>
                  <a
                    href={PURCHASE_SAFETY_URL}
                    className="rounded-full border border-[#173252] px-7 py-4 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
                  >
                    Explore Purchase Safety
                  </a>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-8 border-b border-stone-300 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  12 · FREQUENTLY ASKED QUESTIONS
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#173252]">
                  Dénia vs Calpe: practical buyer questions.
                </h2>

                <div className="mt-10 space-y-4">
                  {faqItems.map((item) => (
                    <details
                      key={item.question}
                      className="rounded-[24px] bg-white p-6 shadow-sm"
                    >
                      <summary className="cursor-pointer font-serif text-2xl text-[#173252]">
                        {item.question}
                      </summary>
                      <p className="mt-5 leading-relaxed text-stone-600">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* SOURCES */}
              <section id="sources" className="scroll-mt-8 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  13 · SOURCES AND METHODOLOGY
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#173252]">
                  Facts first, lifestyle judgement second.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  This comparison uses official tourism and municipal information where
                  available, the Spanish National Statistics Institute for population
                  methodology, the MICHELIN Guide for current high-end restaurant
                  recognition and Idealista for a time-stamped asking-market price
                  indicator. Lifestyle conclusions are Nordic Move&apos;s interpretation
                  of those facts and the practical differences between the two towns.
                </p>

                <div className="mt-10 grid gap-4">
                  {[
                    ["INE — Nomenclátor / annual population data", SOURCES.ine],
                    ["2025 Marina Alta population comparison based on INE data", SOURCES.populationComparison],
                    ["Dénia Tourism — beaches", SOURCES.deniaBeaches],
                    ["Calpe Tourism — beaches", SOURCES.calpeBeaches],
                    ["Dénia Tourism — gastronomy", SOURCES.deniaGastronomy],
                    ["Calpe Tourism — gastronomy", SOURCES.calpeGastronomy],
                    ["MICHELIN Guide Spain 2026", SOURCES.michelin2026],
                    ["Dénia Tourism — access and transport", SOURCES.deniaAccess],
                    ["Calpe Tourism — access and transport", SOURCES.calpeAccess],
                    ["Dénia Tourism — nautical facilities", SOURCES.deniaMarinas],
                    ["Dénia Municipal Market", SOURCES.deniaMarket],
                    ["Calpe Tourism — Peñón de Ifach", SOURCES.calpeIfach],
                    ["Calpe Tourism — salt flats", SOURCES.calpeSaltFlats],
                    ["Idealista — Dénia July 2026 valuation data", SOURCES.deniaPrices],
                    ["Idealista — Calpe July 2026 valuation data", SOURCES.calpePrices],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-6 rounded-[22px] bg-white p-5 text-sm text-[#173252] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <span>{label}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>

                <div className="mt-10 rounded-[28px] bg-[#eee6dc] p-7">
                  <p className="text-sm leading-relaxed text-stone-700">
                    <strong className="text-[#173252]">Property-market note:</strong>{" "}
                    portal asking-price indicators are useful for market direction but
                    are not a substitute for a property-specific valuation. Population
                    sources can also differ between municipal registers and INE census
                    series because of methodology and foreign-resident registration
                    requirements.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </article>

        {/* RELATED GUIDES */}
        <section className="bg-[#e9dfd2] px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
              CONTINUE YOUR RESEARCH
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
              Compare the town first. Then compare the property.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  href: "/guides/where-to-buy-property-costa-blanca-north",
                  title: "Where should you buy on the Costa Blanca North?",
                  text: "Compare the wider region before narrowing your search to one municipality.",
                },
                {
                  href: "/guides/costs-rentals-real-life-checks-before-buying",
                  title: "Costs, rentals and real-life checks before buying",
                  text: "Look beyond the listing photos and test the practical side of ownership.",
                },
                {
                  href: "/guides/buying-property-spain",
                  title: "Buying property in Spain",
                  text: "Understand the legal checks, purchase process and key decisions before signing.",
                },
              ].map((guide) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  className="rounded-[30px] bg-[#f6f1ea] p-8 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <h3 className="font-serif text-3xl leading-tight text-[#173252]">
                    {guide.title}
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone-600">{guide.text}</p>
                  <span className="mt-7 inline-block text-sm font-medium text-[#173252]">
                    Read guide →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 py-28 md:px-8">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#173252] p-10 text-white shadow-sm md:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d1a866]">
              DÉNIA OR CALPE?
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-tight">
              The right answer depends on how you want to live — not which listing looks best today.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/80">
              Start with the locations, neighbourhoods and daily-life profile that
              match your plans. Then build the property search around that decision.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={AREA_MATCH_URL}
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Start your Area Match
              </a>

              <a
                href={DISCOVERY_URL}
                className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#173252]"
              >
                Explore Buyer Discovery
              </a>

              <a
                href={CONTACT_URL}
                className="rounded-full border border-white/50 px-8 py-4 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-[#173252]"
              >
                Discuss your property search
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}