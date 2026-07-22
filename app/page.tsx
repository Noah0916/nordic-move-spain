const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
        alternates: {
          canonical: "/",
          languages: {
            "nl-NL": "/nl",
            en: "/",
            "de-DE": "/de",
            "sv-SE": "/sv",
            "x-default": "/",
          },
        },
      }
    : {}),
  title: "Buy Property on the Costa Blanca with Greater Confidence | Nordic Move Spain",
  description:
    "Greater confidence, faster clarity and one trusted point of contact when buying property on the Costa Blanca. With Area Match, independent checks and personalised buyer support.",
  applicationName: "Nordic Move Spain",
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Real estate and relocation",
  keywords: [
    "buy property Costa Blanca",
    "buyer support Costa Blanca",
    "buy a house in Spain",
    "estate agent Costa Blanca",
    "buying agent Costa Blanca",
    "international buying agent Costa Blanca",
    "property survey Spain",
    "legal due diligence Spanish property",
    "relocating to the Costa Blanca",
    "relocation Costa Blanca",
    "Costa Blanca North",
  ],
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
  openGraph: {
    title: "Greater Confidence When Buying on the Costa Blanca | Nordic Move Spain",
    description:
      "Search with direction using a complimentary Area Match, independent technical and legal assessments, and one trusted point of contact from orientation to arrival.",
    type: "website",
    locale: "en_GB",
    siteName: "Nordic Move Spain",
    ...(siteUrl
      ? {
          url: "/",
          images: [
            {
              url: "/images/laatste-homepage.png",
              alt: "Nordic Move Spain supports international buyers purchasing property on the Costa Blanca",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy More Safely and with Greater Direction on the Costa Blanca | Nordic Move Spain",
    description:
      "Greater confidence, faster clarity and one trusted point of contact. From a complimentary Area Match and property selection to independent checks and arrival.",
    ...(siteUrl ? { images: ["/images/laatste-homepage.png"] } : {}),
  },
};

export default function HomePage() {
  const guideCards = [
    {
      href: "/guides/best-areas-costa-blanca-north-retirees",
      label: "Retirement area guide",
      title: "Best Places on the Costa Blanca for Retirement",
      text:
        "A practical guide for international buyers comparing the best places to retire on the Costa Blanca.",
      cta: "Read the retirement guide →",
      featured: true,
    },
    {
      href: "/guides/buying-property-spain",
      label: "Buying in Spain",
      title: "Buying Property in Spain",
      text:
        "A complete guide to legal checks, mortgages, purchase costs and the buying process for international buyers.",
      cta: "Read the guide →",
      featured: false,
    },
    {
      href: "/guides/spanish-tax-rules-for-dutch-homeowners",
      label: "Tax guide for Dutch buyers",
      title: "Spanish Tax Rules for Dutch Property Owners",
      text:
        "What Dutch buyers need to know about Spanish property taxes, Dutch tax returns, second homes, rental income, capital gains and avoiding double taxation.",
      cta: "Read the tax guide →",
      featured: false,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "#organization",
        name: "Nordic Move Spain",
        description:
          "Personal buying support and one trusted point of contact for international buyers who want to purchase property on the Costa Blanca with greater confidence and direction.",
      },
      {
        "@type": "WebPage",
        "@id": "#webpage",
        name: "Buying Property on the Costa Blanca | Nordic Move Spain",
        description:
          "Buyer support with a complimentary Area Match, targeted property selection, two independent assessments and one trusted point of contact through to arrival.",
        inLanguage: "en-GB",
        about: {
          "@id": "#buyer-service",
        },
        publisher: {
          "@id": "#organization",
        },
      },
      {
        "@type": "Service",
        "@id": "#buyer-service",
        name: "Buyer Support and Relocation on the Costa Blanca",
        serviceType: [
          "Area Match",
          "Property selection and viewings",
          "Technical survey and document screening",
          "Coordination of legal due diligence",
          "Home Setup and utilities",
          "Renovation & Interior",
          "Family Relocation",
        ],
        areaServed: {
          "@type": "Place",
          name: "Costa Blanca, Spain",
        },
        provider: {
          "@id": "#organization",
        },
        audience: {
          "@type": "Audience",
          audienceType: "International property buyers",
        },
      },
    ],
  };

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/15 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="w-[180px]"></div>

          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/nl" className="border-b border-[#c8a063] pb-1">
              Home
            </a>

            <a href="/regions" className="hover:text-white/70 transition">
              Regions
            </a>

            <a href="/services" className="hover:text-white/70 transition">
              Services
            </a>

            <a href="/guides" className="hover:text-white/70 transition">
              Guides
            </a>

            <a href="/about-us" className="hover:text-white/70 transition">
              About us
            </a>

            <a href="/contact" className="hover:text-white/70 transition">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href="/"
                aria-label="English version"
                className="rounded-full border border-[#c8a063] bg-[#c8a063] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#b48a4f]"
              >
                EN
              </a>

              <a
                href="/nl"
                aria-label="Dutch version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                NL
              </a>

              <a
                href="/de"
                aria-label="German version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                DE
              </a>

              <a
                href="/sv"
                aria-label="Swedish version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                SE
              </a>
            </div>

            <a
              href="/contact"
              className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Schedule an introductory call
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Buy property on the Costa Blanca with careful, independent support from Nordic Move Spain"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/28 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca
            </p>

            <h1 className="mt-5 max-w-xl font-serif text-4xl leading-[1.02] text-[#f3ede3] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-5xl">
              Buy property with greater confidence
              <br />
              on the Costa Blanca.
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#f7f2ea] drop-shadow-[0_2px_12px_rgba(0,0,0,0.38)] md:text-xl">
              For international buyers who want clarity and one trusted point of contact.
              Nordic Move coordinates the journey from choosing the right area and
              property to independent checks, purchase and arrival.
            </p>

            <p className="mt-7 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              One trusted point of contact · Independent checks · From search to arrival
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Start with your complimentary Area Match
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Schedule an introductory call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PROOF BAR */}
      <section className="border-b border-stone-200/70 bg-white/75 px-8 py-5 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-4 text-center text-sm font-medium text-[#1e2a3a] md:grid-cols-3">
          <p>Personal support on the buyer’s side</p>
          <p>Legal and technical checks before purchase</p>
          <p>Support in Dutch, English, German and Swedish</p>
        </div>
      </section>

      {/* COMPLETE BUYER & RELOCATION SUPPORT */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr] xl:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Personal Buyer Support
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Greater confidence. One trusted point of contact.
              </h2>

              <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-[#1e2a3a]">
                From choosing the right area and property to independent purchase checks,
                relocation, renovation and furnishing.
              </p>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-600">
                Buying a property in Spain should be an exciting step. Yet the process can
                quickly become difficult to manage when you need to communicate with
                estate agents, private sellers, a lawyer, a building surveyor, the notary, contractors,
                removal companies and other service providers — often in another language and
                with responsibilities divided between multiple parties.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Nordic Move Spain brings these separate steps together. We support
                you in finding and buying the right property on the Costa Blanca and
                can also coordinate practical matters before and after the purchase. From your
                personal Area Match and targeted property selection to relocation,
                utilities, renovation and interior styling.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                You have one trusted point of contact who understands your priorities, coordinates
                the parties involved and keeps agreements, responsibilities and next steps clear.
                We speak Spanish, understand local procedures and work with carefully
                selected independent professionals and service providers.
              </p>

              <h3 className="mt-10 max-w-2xl font-serif text-3xl leading-tight text-[#1e2a3a]">
                Confidence First, Purchase Second
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                We know from experience how quickly problems can arise when local
                knowledge is missing or professionals do not coordinate effectively. Hidden
                defects, registration discrepancies and legal issues sometimes only become visible
                after completion.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                That is why we do not support a purchase without independent technical and
                legal checks. A qualified building surveyor inspects
                and measures the property and compares the actual situation with the available
                documents and registrations. An independent Spanish property lawyer
                reviews matters including ownership, charges, debts, licences and
                contracts.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Before making your final decision, you therefore gain greater insight into the technical
                condition, legal position and potential risks of the property.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                You can choose the complete Buyer Journey or only the services
                you need.
              </p>

              <p className="mt-7 text-xl font-medium leading-relaxed text-stone-700">
                Search with direction. Buy with greater confidence. Arrive with peace of mind.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/relocation-assessment"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Start with your complimentary personal Area Match Portfolio
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Schedule an introductory call
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[460px] lg:sticky lg:top-28 lg:ml-auto lg:mr-0">
              <div className="absolute -inset-2 rounded-[36px] bg-[#e9dfd2]"></div>

              <div className="relative overflow-hidden rounded-[32px] bg-white p-2 shadow-sm">
                <img
                  src="/images/founder.png"
                  alt="The founders of Nordic Move Spain"
                  className="h-auto max-h-[500px] w-full rounded-[26px] object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR STARTING POINT */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Where are you in the process?
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
              Start exactly where you need our support.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                href: "/services/area-match",
                label: "I am still exploring",
                title: "First find the area that suits you",
                text: "Start with a personal Area Match and gain direction before comparing properties.",
                cta: "Explore Area Match →",
              },
              {
                href: "/services/purchase-safety-report",
                label: "I have found a property",
                title: "Have the purchase independently assessed",
                text: "Combine legal due diligence with a building survey before making your final decision.",
                cta: "Explore Purchase Safety →",
              },
              {
                href: "/services/move-in-ready",
                label: "I want to buy and arrive with peace of mind",
                title: "Have the practical implementation coordinated as well",
                text: "From relocation and utilities to renovation, furnishing and a smooth arrival.",
                cta: "Explore Move-In Ready →",
              },
            ].map((route) => (
              <a
                key={route.href}
                href={route.href}
                className="rounded-[28px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  {route.label}
                </p>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {route.title}
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">{route.text}</p>
                <span className="mt-6 inline-block text-sm font-medium text-[#1e2a3a]">
                  {route.cta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NORDIC MOVE BUYER JOURNEY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              The Nordic Move Buyer Journey
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
              Choose the support that suits your situation.
            </h2>

            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-lg font-medium leading-relaxed text-[#1e2a3a]">
                You do not need to follow the complete journey.
              </p>

              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Choose only the support you need — from finding the
                right area and a personal Buyer Discovery to independent
                purchase checks and a home prepared for your arrival.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            <a
              href="/services/area-match"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/area-match.png"
                alt="Personal Area Match Report for international property buyers on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Orientation
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Area Match Report
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Discover which areas, towns and lifestyles best match
                  your priorities, budget and long-term plans. Your personal
                  report includes local information about healthcare, schools, amenities,
                  accessibility and community fit.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Request your complimentary Area Match →
                </div>
              </div>
            </a>

            <a
              href="/services/discovery-trips"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/discover-card.png"
                alt="Private and small-scale Buyer Discovery Experience on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Limited editions · Optional
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Buyer Discovery Experience
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Experience selected properties, residential areas and everyday life
                  during a private discovery or a carefully curated
                  small-group edition. Available on selected dates and subject
                  to availability.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Explore Buyer Discovery →
                </div>
              </div>
            </a>

            <a
              href="/services/purchase-safety-report"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/legal.png"
                alt="Independent technical and legal checks before purchasing on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Pre-purchase checks
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Purchase Safety
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Have you already found a property? We coordinate an independent
                  technical survey and appoint a suitable independent lawyer
                  for legal due diligence before you make a binding commitment.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Explore Purchase Safety →
                </div>
              </div>
            </a>

            <a
              href="/services/move-in-ready"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/move-in-ready-ibiza.png"
                alt="Move-In Ready renovation, relocation and interior support on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  After purchase
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Move-In Ready Support
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  From utilities and relocation support to renovation,
                  interior design, furnishing and final preparations. We
                  coordinate the practical steps around your property, schedule and budget.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Explore Move-In Ready →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* PURCHASE SAFETY — ONE CLEAR DECISION */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="bg-[#1e2a3a] p-12 text-white lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Two Independent Checks. One Clear Purchase Recommendation.
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                Greater Confidence Before You Decide.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                An independent surveyor inspects and measures the property and
                compares it with the available documents. This helps identify defects,
                discrepancies and potential remedial work at an early stage.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/85">
                An independent lawyer reviews ownership, charges, debts,
                licences, contracts and completion conditions.
              </p>

              <p className="mt-6 text-base font-medium leading-relaxed text-[#c8a063]">
                We bring both reports together in one clear recommendation:
                proceed, reconsider or do not buy.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/services/purchase-safety-report"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  See How Purchase Safety Works
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
                >
                  Request a Property Check
                </a>
              </div>
            </div>

            <div className="p-10 md:p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Two Independent Assessments. One Clear Decision.
              </p>

              <h3 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-[#1e2a3a]">
                Proceed, Reconsider or Do Not Buy.
              </h3>

              <div className="mt-10 grid gap-6">
                <article className="rounded-[28px] border border-emerald-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">
                    Green · Proceed
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    The checks provide sufficient confidence to proceed,
                    subject to the stated conditions.
                  </p>
                </article>

                <article className="rounded-[28px] border border-amber-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
                    Amber · Reconsider
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    There are questions or risks. Further investigation,
                    remedial work, renegotiation or additional conditions are required first.
                  </p>
                </article>

                <article className="rounded-[28px] border border-red-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-800">
                    Red · Do Not Buy
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    The risks are too great. Do not buy unless they are fully and demonstrably
                    resolved before you make a binding commitment.
                  </p>
                </article>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                The independent surveyor’s document review is an initial
                comparison and does not replace legal due diligence or formal
                confirmation from the relevant authorities. The technical and legal
                checks are carried out by independent professionals,
                each responsible for their own report. Additional
                specialist investigation may be required. No check can provide
                absolute certainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONAL BUYER DISCOVERY */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#1e2a3a] text-white shadow-sm">
          <div className="grid items-center lg:grid-cols-[0.8fr_1.2fr]">
            <div className="p-5 md:p-7">
              <img
                src="/images/community-home.png"
                alt="Buyer Discovery Experience and local community on the Costa Blanca"
                className="h-[300px] w-full rounded-[28px] object-cover md:h-[360px]"
                loading="lazy"
              />
            </div>

            <div className="p-9 md:p-12">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Optional · Buyer Discovery
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">
                Experience Not Only the Property, but the Life Around It.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Choose a private Buyer Discovery Experience or explore the area
                with a small, carefully curated group of like-minded buyers whose interests,
                life stage and plans are compatible. You experience selected properties, neighbourhoods,
                local amenities and everyday life, while retaining personal attention and privacy. Group participation is always optional and separate from your purchase support.
              </p>

              <a
                href="/services/discovery-trips"
                className="mt-8 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Explore Buyer Discovery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPANDED MOVE-IN READY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#e9dfd2] shadow-sm">
          <div className="grid items-stretch lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center p-10 md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                After Purchase · Move-In Ready
              </p>

              <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-6xl">
                From Key Handover to a Home Ready for Your Arrival.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-700">
                After the purchase, dozens of practical decisions often still need to be made.
                Nordic Move brings these steps together in three flexible modules: Home Setup,
                Renovation &amp; Interior and Family Relocation.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
                You choose only the support that suits your property, family, schedule
                and budget. We coordinate the agreed parties and next steps, while
                each external specialist remains responsible for their own advice and
                implementation.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/services/move-in-ready"
                  className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
                >
                  Explore Move-In Ready
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Schedule an introductory call
                </a>

                <a
                  href="https://wa.me/31683848239?text=Hello%20Nordic%20Move%20Spain%2C%20I%20would%20like%20to%20discuss%20my%20Move-In%20Ready%20plan."
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Discuss your Move-In Ready plan via WhatsApp"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1e2a3a] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c8a063] text-white">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M16.04 3C8.87 3 3.05 8.78 3.05 15.91c0 2.28.6 4.51 1.75 6.47L3 29l6.82-1.77a13.03 13.03 0 0 0 6.22 1.58h.01C23.21 28.81 29 23.03 29 15.9 29 8.78 23.21 3 16.04 3Zm0 23.62h-.01a10.83 10.83 0 0 1-5.52-1.51l-.4-.24-4.05 1.05 1.08-3.93-.26-.4a10.7 10.7 0 0 1-1.65-5.68c0-5.92 4.85-10.74 10.82-10.74 5.96 0 10.81 4.82 10.81 10.74 0 5.92-4.85 10.71-10.82 10.71Zm5.94-8.02c-.33-.16-1.92-.94-2.22-1.05-.3-.11-.52-.16-.74.16-.22.33-.85 1.05-1.04 1.27-.19.22-.38.24-.71.08-.33-.16-1.38-.5-2.63-1.61a9.8 9.8 0 0 1-1.82-2.25c-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.7 0 1.59 1.17 3.13 1.33 3.35.16.22 2.3 3.48 5.57 4.88.78.33 1.38.53 1.86.68.78.25 1.49.21 2.05.13.63-.09 1.92-.78 2.19-1.54.27-.76.27-1.4.19-1.54-.08-.14-.3-.22-.63-.38Z" />
                    </svg>
                  </span>
                  Discuss via WhatsApp
                </a>
              </div>
            </div>

            <div className="relative min-h-[480px] p-6 md:p-8 lg:min-h-[650px] lg:p-10">
              <img
                src="/images/move-in-ready-mediterranean-warmth.png"
                alt="Mediterranean Move-In Ready home with terrace and outdoor kitchen on the Costa Blanca"
                className="h-full min-h-[440px] w-full rounded-[32px] object-cover lg:min-h-[570px]"
                loading="lazy"
              />

              <div className="absolute bottom-10 left-10 right-10 rounded-[26px] bg-white/90 p-6 shadow-lg backdrop-blur md:bottom-12 md:left-12 md:right-auto md:max-w-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  One Coordinated Journey
                </p>
                <p className="mt-3 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  Practical preparation, renovation and furnishing in one coordinated plan.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1e2a3a]/10 px-8 py-10 md:px-12 md:py-12 lg:px-16">
            <div className="grid gap-6 lg:grid-cols-3">
              <a
                href="/services/move-in-ready#home-setup"
                className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                  Module 01
                </p>
                <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  Home Setup
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Utilities, internet, insurance, security, cleaning,
                  maintenance and minor works before your arrival.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-[#1e2a3a]">
                  Explore Home Setup →
                </span>
              </a>

              <a
                href="/services/move-in-ready#renovation-interior"
                className="rounded-[30px] bg-[#1e2a3a] p-8 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                  Module 02
                </p>
                <h3 className="mt-4 font-serif text-3xl">
                  Renovation &amp; Interior
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Renovation coordination, contractors and specialists, interior concept,
                  materials, furniture, lighting, installation and styling.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-white">
                  Explore Renovation &amp; Interior →
                </span>
              </a>

              <a
                href="/services/move-in-ready#family-relocation"
                className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                  Module 03
                </p>
                <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  Family Relocation
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Removal company, schools, healthcare, insurance, administration, local
                  amenities and connections with clubs and the local community.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-[#1e2a3a]">
                  Explore Family Relocation →
                </span>
              </a>
            </div>

            <p className="mt-8 max-w-5xl text-sm leading-relaxed text-stone-500">
              The modules can be selected individually or combined. Scope,
              schedule, costs and responsibilities are agreed in advance for each service.
              External professionals remain responsible for their own
              advice, quotations and implementation.
            </p>
          </div>
        </div>
      </section>

      {/* GUIDES AND INSIGHTS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Buyer Guides
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Straightforward Guidance Before You Buy Property on the Costa Blanca.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              A selected collection of practical guides for international buyers
              who want to understand retirement areas, the Spanish buying process and Dutch
              tax matters before making a decision.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guideCards.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className={
                  guide.featured
                    ? "rounded-[32px] bg-[#1e2a3a] p-8 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    : "rounded-[32px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                }
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  {guide.label}
                </p>

                <h3
                  className={
                    guide.featured
                      ? "mt-5 font-serif text-3xl leading-tight text-white"
                      : "mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]"
                  }
                >
                  {guide.title}
                </h3>

                <p
                  className={
                    guide.featured
                      ? "mt-5 leading-relaxed text-white/75"
                      : "mt-5 leading-relaxed text-stone-600"
                  }
                >
                  {guide.text}
                </p>

                <span
                  className={
                    guide.featured
                      ? "mt-8 inline-block text-sm uppercase tracking-[0.25em] text-white"
                      : "mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#1e2a3a]"
                  }
                >
                  {guide.cta}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/guides"
              className="inline-block rounded-full border border-[#1e2a3a] px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              View All Buyer Guides
            </a>
          </div>
        </div>
      </section>


      {/* FINAL GENERAL CTA */}
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] px-10 py-14 text-white shadow-sm md:px-16 md:py-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Personal Support from Your Starting Point
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Ready to Prepare Your Purchase Carefully?
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/80">
            Start with a complimentary Area Match when you are still looking for the right
            area, or schedule a personal call when you have already found a property
            or want to discuss complete buyer support.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Request Your Complimentary Area Match
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Schedule an introductory call
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}