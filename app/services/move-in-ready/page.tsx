import type { Metadata } from "next";

const pagePath = "/services/area-match";

export const metadata: Metadata = {
  title:
    "Area Match, Buyer Discovery & Full Purchase Coordination | Nordic Move Spain",
  description:
    "Start with a complimentary Area Match Portfolio and continue with one personal property agent and trusted point of contact for property search, viewings, Purchase Safety and three flexible Move-In Ready packages on the Costa Blanca.",
  keywords: [
    "Area Match Costa Blanca",
    "personal property agent Costa Blanca",
    "buy property Costa Blanca",
    "Buyer Discovery Experience Spain",
    "property buying guidance Spain",
    "Purchase Safety Report Spain",
    "independent property survey Spain",
    "Spanish property lawyer",
    "moving company coordination Spain",
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
      "Area Match, Buyer Discovery & Full Purchase Coordination | Nordic Move Spain",
    description:
      "Find the right area first, work with one personal property agent and let Nordic Move coordinate property search, viewings, independent purchase checks, moving and furnishing.",
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
      "Area Match, Buyer Discovery & Full Purchase Coordination | Nordic Move Spain",
    description:
      "One personal property agent and trusted point of contact from Area Match and property search to Purchase Safety, moving and furnishing.",
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
    eyebrow: "Complimentary orientation",
    title: "Area Match Portfolio",
    text:
      "You receive a complimentary, detailed and personal portfolio showing which regions, towns and property types best match your lifestyle, budget and long-term plans. This creates focus before you spend months searching through unsuitable properties.",
    bullets: [
      "Personal lifestyle and location matching",
      "Information about suitable towns and residential areas",
      "Insight into amenities, healthcare, accessibility and daily life",
      "Greater clarity about the property type that genuinely suits you",
      "A focused foundation for your property search and viewings",
    ],
    href: "/relocation-assessment",
    cta: "Request your complimentary Area Match Portfolio",
  },
  {
    number: "02",
    eyebrow: "Personal property search",
    title: "Buyer Discovery Experience",
    text:
      "Following your Area Match, we act as your personal property agent on the Costa Blanca. We search for and select suitable properties, create a focused discovery route and guide you through viewings, communication, negotiations and purchase.",
    bullets: [
      "A personal route through suitable areas",
      "Targeted property search and selection",
      "Viewings organised around your profile and priorities",
      "Communication with sellers and listing agents",
      "Support throughout negotiations and the purchase process",
    ],
    href: "/services/discovery-trips",
    cta: "Explore the Buyer Discovery Experience",
    note:
      "When a villa is ultimately purchased through Nordic Move Spain, either half or the full trip cost is reimbursed depending on the purchase price. The exact reimbursement and applicable conditions are confirmed in writing in advance.",
  },
  {
    number: "03",
    eyebrow: "Independent purchase review",
    title: "Purchase Safety",
    text:
      "When a property becomes a serious option, we coordinate an independent surveyor for the technical assessment and initial document and registration screening, together with an independent Spanish lawyer for the full legal due diligence.",
    bullets: [
      "Visible technical condition, construction quality, moisture and installations",
      "Pool, outbuildings, repairs, photographs and recommendations",
      "Nota Simple, Catastro, IBI, CEE and ITE where relevant",
      "Available permits, licences and comparison of official and measured areas",
      "Two professional reports and one clear Nordic Move purchase recommendation",
    ],
    href: "/services/purchase-safety-report",
    cta: "View Purchase Safety",
    note:
      "When a villa is ultimately purchased through Nordic Move Spain, the independent Purchase Safety review is included in the purchase guidance. The exact scope depends on the property, the available documentation and the specialists required.",
  },
  {
    number: "04",
    eyebrow: "After purchase",
    title: "Move-In Ready & Relocation Coordination",
    text:
      "After the purchase, Nordic Move remains your dedicated point of contact. Move-In Ready is divided into three flexible packages: Home Setup, Renovation & Interior and Family Relocation. Choose one package or combine the support that fits your property, family, planning and budget.",
    bullets: [
      "Home Setup for utilities, insurance, security, cleaning and maintenance",
      "Renovation & Interior for contractors, planning, sourcing, furnishing and styling",
      "Family Relocation for moving, schools, healthcare and daily-life preparation",
      "One Nordic Move point of contact across the agreed package or combination",
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
    subtitle: "The practical foundation of your home",
    text:
      "For owners who want the essential practical arrangements after key handover organised clearly before arrival, without needing a full renovation or complete family relocation.",
    result:
      "Your home is practically prepared and the main suppliers, appointments and contract information are brought together in one clear overview.",
    items: [
      "Help organise electricity and water",
      "Coordinate internet, telephone and television",
      "Compare home, contents and relevant insurance options",
      "Research alarm, security and access solutions",
      "Coordinate cleaning and preparation before arrival",
      "Obtain quotes for painting and small works",
      "Organise garden, pool and technical maintenance",
      "Bundle supplier, appointment and contract information",
    ],
  },
  {
    number: "02",
    title: "Renovation & Interior",
    subtitle: "Renovation and furnishing in one coordinated route",
    text:
      "For homes that need renovation, adaptation or complete furnishing before you can use them comfortably.",
    result:
      "Renovation, interior choices, sourcing and execution are coordinated so that technical decisions, planning and the final living environment fit together more clearly.",
    items: [
      "Define wishes, use, priorities and budget",
      "Select and coordinate contractor and relevant specialists",
      "Coordinate with architect or technical architect where needed",
      "Structure quotations, planning and progress reporting",
      "Develop an interior concept and visual moodboard",
      "Select materials, furniture and lighting",
      "Coordinate delivery, assembly, installation and styling",
      "Organise completion points and final checks before arrival",
    ],
  },
  {
    number: "03",
    title: "Family Relocation",
    subtitle: "Prepare daily life, not only the move",
    text:
      "For families and international professionals who want to prepare not only the property, but also the practical side of living, working and settling on the Costa Blanca.",
    result:
      "You receive a clearer and better-prepared starting point for moving, schools, healthcare, local services and everyday life in Spain.",
    items: [
      "Compare international moving companies and storage options",
      "Research schools and childcare in suitable areas",
      "Map healthcare, insurance and practical facilities",
      "Structure local administration and relevant next steps",
      "Research car transport and specialist transport options",
      "Explore sports clubs, golf clubs and local communities",
      "Select local service providers and daily amenities",
      "Create a personal relocation plan",
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
      name: "Area Match & Buyer Journey",
      item: absoluteUrl(pagePath),
    },
  ],
};

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nordic Move Spain Buyer Journey",
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
                Area Match &amp; Buyer Journey
              </li>
            </ol>
          </nav>
        </div>

        {/* HERO */}
        <section className="px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                One personal property agent · One trusted point of contact
              </p>

              <h1 className="mt-6 font-serif text-5xl leading-[1.03] text-[#173252] md:text-7xl">
                First find the right place. Then the right property. We coordinate everything that follows.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl">
                Our guidance combines Area Match, personal property search,
                Buyer Discovery, independent purchase checks, purchase support,
                moving and furnishing. Throughout the journey, you communicate
                with one trusted Nordic Move point of contact who coordinates
                the agreed steps from first orientation to arrival.
              </p>

              <p className="mt-6 max-w-2xl text-sm font-medium uppercase tracking-[0.22em] text-[#b88948]">
                Full coordination · Fewer parties to manage · Greater confidence before purchase
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/relocation-assessment"
                  className="rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                >
                  Receive your complimentary portfolio
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-[#173252] px-8 py-4 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
                >
                  Schedule a personal consultation
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

        {/* SERVICE OVERVIEW */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Four services, one coordinated journey
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                From the first orientation to purchase, moving, furnishing and arrival.
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

                  {service.number === "04" ? (
                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {moveInReadyPackages.map((pkg) => (
                        <div
                          key={pkg.title}
                          className="rounded-[20px] bg-[#f6f1ea] p-4"
                        >
                          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#b88948]">
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
                  Service 01 · Area Match
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
                  A complimentary portfolio that can save months of searching.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/80">
                  The Area Match Portfolio is not a generic list of towns. It
                  brings your lifestyle, budget, future plans and everyday
                  priorities together in one personal comparison of suitable
                  regions, towns and residential settings.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  This gives your search direction before you start browsing
                  hundreds of properties. It helps prevent months of searching
                  in locations that may look attractive online but do not suit
                  the way you want to live.
                </p>

                <a
                  href="/relocation-assessment"
                  className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Request your complimentary Area Match Portfolio
                </a>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  What you receive
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "A personal profile of your lifestyle and residential preferences",
                    "A comparison of suitable regions, towns and residential areas",
                    "Information about atmosphere, accessibility and daily life",
                    "Insight into healthcare, amenities and international communities",
                    "Guidance on suitable property types and residential settings",
                    "A focused foundation for property search, viewings and next steps",
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
                  The Area Match Portfolio is complimentary and without
                  obligation. Its content is tailored to your personal
                  situation, plans and preferences.
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
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Service 02 · Personal property search &amp; Buyer Discovery
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Your personal property agent for the search, viewings and purchase.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Your Area Match Portfolio forms the foundation for a focused
                property search. We look beyond one estate agent’s listings,
                select suitable homes across the market and create a discovery
                route through the areas and properties that fit your profile.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                We organise the viewings, manage communication with sellers and
                listing agents and support you throughout questions,
                negotiations and the purchase process. You do not have to
                repeat your story or coordinate every contact yourself.
              </p>

              <a
                href="/services/discovery-trips"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                View the Buyer Discovery Experience
              </a>

              <p className="mt-6 text-xs leading-relaxed text-stone-500">
                * When a villa is ultimately purchased through Nordic Move
                Spain, either half or the full trip cost is reimbursed depending
                on the purchase price. The exact reimbursement and applicable
                conditions are confirmed in writing in advance.
              </p>
            </div>
          </div>
        </section>

        {/* PURCHASE SAFETY */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="order-2 lg:order-1">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Service 03 · Purchase Safety
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Two independent professional reports before your final decision.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                An independent surveyor assesses the visible and accessible
                technical condition, construction quality, moisture, water
                ingress, installations, pool, outbuildings and necessary
                repairs. The surveyor also carries out an initial document and
                registration screening.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                This screening may include the Nota Simple, Catastro, IBI, CEE,
                ITE where relevant, estate agent information, available permits
                and licences, comparison of official and measured floor areas
                and indications of possible unregistered parts of the property.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                A suitable independent Spanish lawyer then carries out the full
                legal due diligence and remains responsible for the legal review
                and advice. Based on both reports, Nordic Move provides one clear
                recommendation: proceed, reconsider or walk away.
              </p>

              <a
                href="/services/purchase-safety-report"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                View Purchase Safety
              </a>

              <p className="mt-6 text-xs leading-relaxed text-stone-500">
                * When a villa is ultimately purchased through Nordic Move
                Spain, the independent Purchase Safety review is included in the
                purchase guidance. The exact scope depends on the property, the
                available documentation and the specialists required.
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
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  One trusted point of contact
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                  You do not have to manage five different parties yourself.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Buying property in Spain often means communicating with
                  estate agents, sellers, a surveyor, a lawyer, a mortgage
                  adviser, a moving company and interior specialists. Nordic
                  Move remains your dedicated point of contact throughout the
                  agreed journey.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  We keep track of who is responsible for what, which
                  information is missing, which questions remain open, what
                  happens next and where delays or risks may arise.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "One personal property agent",
                    "One Nordic Move contact knows your wishes, priorities and concerns throughout the journey.",
                  ],
                  [
                    "Full coordination",
                    "We coordinate the agreed specialists and make sure the separate steps connect.",
                  ],
                  [
                    "Clear next steps",
                    "Open questions, responsibilities, conditions and deadlines are actively followed up.",
                  ],
                  [
                    "Continuity after purchase",
                    "We remain involved for mortgage introductions, moving coordination, styling and furnishing.",
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
                  Service 04 · Move-In Ready &amp; Relocation Coordination
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                  Three flexible packages from completed purchase to a prepared arrival.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-700">
                  After the purchase, dozens of practical choices can still remain:
                  utilities, insurance, moving, renovation, interiors, furniture,
                  schools and local service providers. Nordic Move brings these
                  steps together in three clear Move-In Ready packages.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  Choose Home Setup, Renovation &amp; Interior or Family Relocation —
                  or combine packages into one coordinated route. You keep one
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
                  alt="Move-In Ready Home Setup, Renovation and Interior, and Family Relocation support on the Costa Blanca"
                  className="h-full min-h-[520px] w-full object-cover"
                />
              </div>
            </div>

            <div className="border-t border-[#173252]/10 bg-white/45 p-8 md:p-12 lg:p-14">
              <div className="max-w-4xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Choose the support that fits your situation
                </p>
                <h3 className="mt-5 font-serif text-3xl leading-tight text-[#173252] md:text-5xl">
                  The three Move-In Ready packages.
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  Each package can stand on its own. If your situation crosses
                  several areas, the relevant parts can be combined and coordinated
                  as one agreed scope.
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
                          className={`text-xs font-medium uppercase tracking-[0.28em] ${
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
                        className={`font-serif text-5xl ${
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
                        className={`text-[10px] font-medium uppercase tracking-[0.24em] ${
                          index === 1 ? "text-[#d1a866]" : "text-[#b88948]"
                        }`}
                      >
                        Intended result
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
                Scope, budget, timing and delivery are tailored to the property,
                your wishes and the availability of selected local specialists and
                service providers. Admission decisions by schools, administrative
                decisions and work performed by third parties cannot be guaranteed
                by Nordic Move.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-[#173252] px-8 py-16 text-center text-white md:px-14 md:py-20">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d1a866]">
              Begin with clarity
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
              One personal property agent. One trusted point of contact.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/75">
              Start with your complimentary Area Match Portfolio and continue
              with one coordinated journey through property search, Buyer
              Discovery, purchase checks, moving, furnishing and arrival.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Receive your complimentary portfolio
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/70 px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#173252]"
              >
                Schedule an introductory call
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}