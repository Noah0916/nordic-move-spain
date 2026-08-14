import type { Metadata } from "next";

const pagePath = "/services/area-match";

export const metadata: Metadata = {
  title:
    "Independent Buyer Representation Costa Blanca | Nordic Move Spain",
  description:
    "Nordic Move Spain independently represents the buyer. We do not accept a sales fee from the selling party and guide you from Area Match and property search through purchase checks, relocation and furnishing on the Costa Blanca.",
  keywords: [
    "Area Match Costa Blanca",
    "personal buyer representative Costa Blanca",
    "buying property Costa Blanca",
    "Buyer Discovery Experience Spain",
    "property buyer representation Spain",
    "Purchase Safety Report Spain",
    "independent property survey Spain",
    "Spanish property lawyer",
    "relocation company coordination Spain",
    "Move-In Ready Costa Blanca",
    "Nordic Move Spain",
  ],
  alternates: {
    canonical: pagePath,
    languages: {
      "en-GB": pagePath,
      "nl-NL": "/nl/services/area-match",
      "de-DE": "/de/services/area-match",
      "sv-SE": "/sv/services/area-match",
    },
  },
  openGraph: {
    title:
      "Independent Buyer Representation Costa Blanca | Nordic Move Spain",
    description:
      "Independent guidance for buyers: from Area Match and property search to viewings, purchase checks, relocation and furnishing.",
    type: "website",
    locale: "en_GB",
    url: pagePath,
    images: [
      {
        url: "/images/brochure2-en.png",
        alt: "Nordic Move Spain services for a coordinated property purchase on the Costa Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Area Match, Buyer Discovery & Full Buyer Representation | Nordic Move Spain",
    description:
      "Independent buyer representation with one trusted point of contact, from Area Match and property search through Purchase Safety, relocation and furnishing.",
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
    eyebrow: "Free orientation",
    title: "Area Match Portfolio",
    text:
      "You receive a free, detailed and personalised portfolio showing which regions, towns and property types best fit your lifestyle, budget and long-term plans. This gives your search focus before you spend months looking at properties that do not suit you.",
    bullets: [
      "Personalised lifestyle and location match",
      "Information on suitable towns and residential areas",
      "Insight into amenities, healthcare, accessibility and daily life",
      "Greater clarity on the property type that genuinely suits you",
      "A focused basis for your property search and viewings",
    ],
    href: "/relocation-assessment",
    cta: "Request your free Area Match Portfolio",
  },
  {
    number: "02",
    eyebrow: "Personal property search",
    title: "Buyer Discovery Experience",
    text:
      "After your Area Match, we represent you as the buyer. We search the wider market and select suitable properties, create a focused discovery route and support you through viewings, communication, negotiations and the purchase. We do not accept a sales fee or sales commission from the selling party.",
    bullets: [
      "A personalised route through suitable areas",
      "Focused property search and selection",
      "Viewings tailored to your profile and priorities",
      "Communication with sellers and selling agents",
      "Support during negotiations and the purchase process",
    ],
    href: "/services/discovery-trips",
    cta: "Explore the Buyer Discovery Experience",
  },
  {
    number: "03",
    eyebrow: "Independent purchase checks",
    title: "Purchase Safety",
    text:
      "When a property becomes a serious option, we coordinate an independent building surveyor for the technical assessment and initial review of documents and registrations, together with an independent Spanish lawyer for the full legal due diligence.",
    bullets: [
      "Visible technical condition, construction quality, damp and installations",
      "Pool, outbuildings, repair items, photographs and recommendations",
      "Nota Simple, Catastro, IBI, CEE and ITE where relevant",
      "Available permits, licences and comparison of official and measured floor areas",
      "Two professional reports and one clear purchase recommendation from Nordic Move",
    ],
    href: "/services/purchase-safety-report",
    cta: "Explore Purchase Safety",
    note:
      "The exact scope of Purchase Safety depends on the property, the available documentation and the independent specialists required. The scope is clearly agreed in advance.",
  },
  {
    number: "04",
    eyebrow: "After purchase",
    title: "Move-In Ready & Relocation Coordination",
    text:
      "After the purchase, Nordic Move remains your dedicated point of contact. Move-In Ready is divided into three flexible packages: Home Setup, Renovation & Interior and Family Relocation. Choose one package or combine the support that fits your property, family, schedule and budget.",
    bullets: [
      "Home Setup for utilities, insurance, security, cleaning and maintenance",
      "Renovation & Interior for contractors, planning, sourcing, furnishing and styling",
      "Family Relocation for moving, schools, healthcare and preparing for daily life",
      "One Nordic Move point of contact for the agreed package or combination",
      "Selected independent specialists remain responsible for their own advice and execution",
    ],
    href: "/services/move-in-ready",
    cta: "Explore all three Move-In Ready packages",
  },
];

const moveInReadyPackages = [
  {
    number: "01",
    title: "Home Setup",
    subtitle: "The practical foundations of your home",
    text:
      "For owners who want the key practical matters after completion clearly arranged before arrival, without needing a full renovation or complete family relocation.",
    result:
      "Your home is practically prepared and the key suppliers, appointments and contract information are brought together in one clear overview.",
    items: [
      "Help arrange electricity and water",
      "Coordinate internet, telephone and television",
      "Compare building, contents and other relevant insurance options",
      "Research alarm, security and access solutions",
      "Coordinate cleaning and preparation before arrival",
      "Request quotations for painting and minor works",
      "Arrange garden, pool and technical maintenance",
      "Consolidate supplier, appointment and contract information",
    ],
  },
  {
    number: "02",
    title: "Renovation & Interior",
    subtitle: "Renovation and furnishing in one coordinated process",
    text:
      "For properties that need renovation, adaptation or complete furnishing before you can use them comfortably.",
    result:
      "Renovation, interior choices, sourcing and execution are coordinated so that technical decisions, planning and the finished living environment work together more effectively.",
    items: [
      "Define requirements, use, priorities and budget",
      "Select and coordinate the contractor and relevant specialists",
      "Coordinate with an architect or technical architect where required",
      "Structure quotations, planning and progress reporting",
      "Develop an interior concept and visual mood board",
      "Select materials, furniture and lighting",
      "Coordinate delivery, assembly, installation and styling",
      "Organise snagging items and final checks before arrival",
    ],
  },
  {
    number: "03",
    title: "Family Relocation",
    subtitle: "Prepare for daily life, not just the move",
    text:
      "For families and international professionals who want to prepare not only the property, but also the practical side of living, working and settling on the Costa Blanca.",
    result:
      "You get a clearer and better-prepared starting point for the move, schools, healthcare, local services and daily life in Spain.",
    items: [
      "Compare international removal companies and storage options",
      "Research schools and childcare in suitable areas",
      "Map out healthcare, insurance and practical amenities",
      "Structure local administration and relevant next steps",
      "Research vehicle transport and specialist transport options",
      "Explore sports clubs, golf clubs and local communities",
      "Select local service providers and everyday amenities",
      "Create a personalised relocation plan",
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
      item: absoluteUrl("/"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: absoluteUrl("/services"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Area Match & Buying Journey",
      item: absoluteUrl(pagePath),
    },
  ],
};

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nordic Move Spain Buying Journey",
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
        name: "Costa Blanca, Spain",
      },
      provider: {
        "@type": "Organization",
        name: "Nordic Move Spain",
      },
      ...(service.number === "04"
        ? {
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Move-In Ready packages",
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
        {/* BREADCRUMBS */}
        <div className="px-6 pt-8 md:px-8">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
              <li>
                <a href="/" className="transition hover:text-[#173252]">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a
                  href="/services"
                  className="transition hover:text-[#173252]"
                >
                  Services
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#173252]">
                Area Match &amp; Buying Journey
              </li>
            </ol>
          </nav>
        </div>

        {/* HERO */}
        <section className="px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Independent buyer representation on the Costa Blanca
              </p>

              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                We represent you as the buyer.
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#173252]">
                That is why we work independently and do not accept a sales fee or sales commission from the selling party, as is common with many traditional estate agents. Our starting point is your interest as the buyer.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
                From that position, we guide the Area Match, property search, viewings, communication, negotiations, independent purchase checks and the practical steps after purchase. Throughout the process, you have one trusted Nordic Move point of contact.
              </p>

              <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  "Buyer’s interests first",
                  "No sales fee from the seller",
                  "One dedicated point of contact",
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
                  href="/relocation-assessment"
                  className="rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                >
                  Get your free portfolio
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-[#173252] px-8 py-4 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
                >
                  Book a personal consultation
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)] sm:translate-y-10">
                <img
                  src="/images/brochure1-en.png"
                  alt="Nordic Move Spain brochure about the Buyer Discovery Experience and Move-In Ready support"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)]">
                <img
                  src="/images/brochure2-en.png"
                  alt="Nordic Move Spain brochure about independent Purchase Safety checks"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OUR INDEPENDENT ROLE */}
        <section className="px-6 pb-20 md:px-8 md:pb-24">
          <div className="mx-auto max-w-7xl rounded-[30px] border border-[#173252]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Our role
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#173252] md:text-4xl">
                  We are on the buyer’s side.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  [
                    "Buyer’s interests",
                    "We represent you as the buyer and assess choices from your perspective, not from the sales interest attached to a property.",
                  ],
                  [
                    "No sales fee",
                    "We do not accept a sales fee or sales commission from the selling party. This keeps our position towards the buyer clear.",
                  ],
                  [
                    "Search the wider market",
                    "We look for suitable properties across the market and are not limited to the listings of a single selling agent.",
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

        {/* SERVICES OVERVIEW */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Your buying journey in four clear steps
              </p>

              <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                From initial orientation and property search to purchase checks and support after completion.
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
                            Package {pkg.number}
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
                  Service 01 · Area Match
                </p>

                <h2 className="mt-6 font-serif text-3xl leading-tight md:text-5xl">
                  A free portfolio that can save you months of searching.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/80">
                  The Area Match Portfolio is not a generic list of places. It brings your lifestyle, budget, future plans and daily priorities together in one personalised comparison of suitable regions, towns and living environments.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  This gives your search direction before you start viewing hundreds of properties. It helps prevent you from spending months searching in locations that look attractive online but do not fit the way you want to live.
                </p>

                <a
                  href="/relocation-assessment"
                  className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Request your free Area Match Portfolio
                </a>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  What you receive
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "A personalised profile of your lifestyle and housing preferences",
                    "A comparison of suitable regions, towns and residential areas",
                    "Information about atmosphere, accessibility and daily life",
                    "Insight into healthcare, amenities and international communities",
                    "Guidance on suitable property types and living environments",
                    "A focused basis for property search, viewings and next steps",
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
                  The Area Match Portfolio is free and without obligation. Its content is tailored to your personal situation, plans and preferences.
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
                alt="Nordic Move Spain brochure about the Buyer Discovery Experience and Nordic Circle"
                className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
              />
            </div>

            <div>
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Service 02 · Personal Property Search &amp; Buyer Discovery
              </p>

              <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                Your personal buyer representative for the search, viewings and purchase.
              </h2>

              <p className="mt-7 text-base leading-relaxed text-stone-600 md:text-lg">
                Your Area Match Portfolio forms the basis for a focused property search. Because we represent the buyer, we look beyond the listings of a single selling agent. We select suitable properties across the market and create a focused discovery route through areas and properties that fit your profile.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
                We organise the viewings, handle communication with sellers and selling agents, and guide you through questions, negotiations and the purchase process. We do not accept a sales fee or sales commission from the selling party. This keeps our role towards the buyer clear.
              </p>

              <a
                href="/services/discovery-trips"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Explore the Buyer Discovery Experience
              </a>

            </div>
          </div>
        </section>

        {/* PURCHASE SAFETY */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Service 03 · Purchase Safety
              </p>

              <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                Two independent professional reports before your final decision.
              </h2>

              <p className="mt-8 text-base leading-relaxed text-stone-600 md:text-lg">
                An independent building surveyor assesses the visible and accessible technical condition, construction quality, damp, water ingress, installations, the pool, outbuildings and necessary repairs. The surveyor also carries out an initial review of documents and registrations.
              </p>

              <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                This review may include the Nota Simple, Catastro, IBI, CEE, ITE where relevant, information from the estate agent, available permits and licences, comparison of official and measured floor areas, and indications of potentially unregistered parts of the property.
              </p>

              <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                A suitable independent Spanish lawyer then carries out the full legal due diligence and remains responsible for the legal assessment and advice. Based on both reports, Nordic Move gives one clear recommendation: proceed, reconsider or walk away from the purchase.
              </p>

              <a
                href="/services/purchase-safety-report"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Explore Purchase Safety
              </a>

              <p className="mt-5 text-xs leading-relaxed text-stone-500">
                The exact scope of Purchase Safety is agreed in advance based on the property, the available documentation and the independent specialists required.
              </p>
            </div>

            <div className="order-1 overflow-hidden rounded-[40px] bg-white p-3 shadow-sm lg:order-2">
              <img
                src="/images/brochure2-en.png"
                alt="Nordic Move Spain Purchase Safety brochure"
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
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  One trusted point of contact
                </p>

                <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                  You do not have to manage five different parties yourself.
                </h2>

                <p className="mt-8 text-base leading-relaxed text-stone-600 md:text-lg">
                  Buying a property in Spain often means communicating with estate agents, sellers, a building surveyor, a lawyer, a mortgage adviser, a removal company and interior specialists. Nordic Move remains your dedicated point of contact throughout the agreed process.
                </p>

                <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                  We keep track of who is responsible for what, which information is still missing, which questions remain open, what the next step is and where delays or risks may arise.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "One personal buyer representative",
                    "One Nordic Move contact person knows your requirements, priorities and points of attention throughout the process.",
                  ],
                  [
                    "Full coordination",
                    "We coordinate the agreed specialists and make sure the individual steps connect properly.",
                  ],
                  [
                    "Clear next steps",
                    "Open questions, responsibilities, conditions and deadlines are actively followed up.",
                  ],
                  [
                    "Continuity after purchase",
                    "We remain involved with mortgage introductions, relocation coordination, styling and furnishing.",
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
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Service 04 · Move-In Ready &amp; Relocation Coordination
                </p>

                <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                  Three flexible packages from completed purchase to a prepared arrival.
                </h2>

                <p className="mt-8 text-base leading-relaxed text-stone-700 md:text-lg">
                  After the purchase, dozens of practical decisions often remain:
                  utilities, insurance, moving, renovation, interiors, furniture,
                  schools and local service providers. Nordic Move brings these
                  steps together in three clear Move-In Ready packages.
                </p>

                <p className="mt-6 text-base leading-relaxed text-stone-700 md:text-lg">
                  Choose Home Setup, Renovation &amp; Interior or Family Relocation —
                  or combine packages into one coordinated process. You keep one
                  Nordic Move point of contact, while selected independent
                  professionals remain responsible for their own specialist advice,
                  quotations and execution.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="/services/move-in-ready"
                    className="inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                  >
                    Explore Move-In Ready in detail
                  </a>

                  <a
                    href="/contact"
                    className="inline-block rounded-full border border-[#173252] px-8 py-4 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
                  >
                    Discuss your package
                  </a>
                </div>
              </div>

              <div className="min-h-[520px]">
                <img
                  src="/images/interior-design.png"
                  alt="Move-In Ready support for Home Setup, Renovation & Interior and Family Relocation on the Costa Blanca"
                  className="h-full min-h-[520px] w-full object-cover"
                />
              </div>
            </div>

            <div className="border-t border-[#173252]/10 bg-white/45 p-8 md:p-12 lg:p-14">
              <div className="max-w-4xl">
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Choose the support that fits your situation
                </p>
                <h3 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                  The three Move-In Ready packages.
                </h3>
                <p className="mt-5 text-base leading-relaxed text-stone-700 md:text-lg">
                  Each package can be selected on its own. If your situation covers several areas, the relevant elements can be combined and coordinated within one agreed scope.
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
                          Package {pkg.number}
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
                        Intended outcome
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
                Scope, budget, planning and execution are aligned with the property, your requirements and the availability of selected local specialists and service providers. School admission decisions, administrative decisions and work carried out by third parties cannot be guaranteed by Nordic Move.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-[#173252] px-8 py-16 text-center text-white md:px-14 md:py-20">
            <p className="text-sm font-medium tracking-[0.08em] text-[#d1a866]">
              Independent guidance for buyers
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-3xl leading-tight md:text-5xl">
              Your interests as the buyer come first, with one trusted point of contact.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/75">
              Start with your Area Match Portfolio and continue with one coordinated process for property search, Buyer Discovery, purchase checks and practical support after purchase. We represent the buyer and do not accept a sales fee from the selling party.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Get your free portfolio
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/70 px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#173252]"
              >
                Book an introductory call
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}