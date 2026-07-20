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
  title: "Safer property buying on the Costa Blanca | Nordic Move Spain",
  description:
    "More certainty, faster clarity and one dedicated point of contact when buying a property on the Costa Blanca. With Area Match, independent checks and personal buying guidance.",
  applicationName: "Nordic Move Spain",
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Real estate and relocation",
  keywords: [
    "buying property Costa Blanca",
    "property buying guidance Costa Blanca",
    "buying a house in Spain",
    "estate agent Costa Blanca",
    "buyer’s agent Costa Blanca",
    "international buyer’s agent Costa Blanca",
    "technical property inspection Spain",
    "legal due diligence Spanish property",
    "moving to Costa Blanca",
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
    title: "More certainty when buying on the Costa Blanca | Nordic Move Spain",
    description:
      "Search with focus using a free Area Match, independent technical and legal assessments, and one dedicated point of contact from orientation to arrival.",
    type: "website",
    locale: "en_GB",
    siteName: "Nordic Move Spain",
    ...(siteUrl
      ? {
          url: "/",
          images: [
            {
              url: "/images/laatste-homepage.png",
              alt: "Nordic Move Spain supports international buyers purchasing a property on the Costa Blanca",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy more safely and with greater focus on the Costa Blanca | Nordic Move Spain",
    description:
      "More certainty, faster clarity and one dedicated point of contact. From a free Area Match and property selection to independent checks and arrival.",
    ...(siteUrl ? { images: ["/images/laatste-homepage.png"] } : {}),
  },
};

export default function HomePage() {
  const guideCards = [
    {
      href: "/guides/best-areas-costa-blanca-north-retirees",
      label: "Retirement area guide",
      title: "Best places on the Costa Blanca for retirement",
      text:
        "A practical guide for international buyers comparing the best places on the Costa Blanca for retirement.",
      cta: "Read the retirement guide →",
      featured: true,
    },
    {
      href: "/guides/buying-property-spain",
      label: "Buying in Spain",
      title: "Buying a property in Spain",
      text:
        "A complete guide to legal checks, mortgages, purchase costs and the buying process for international buyers.",
      cta: "Read the guide →",
      featured: false,
    },
    {
      href: "/guides/spanish-tax-rules-netherlands",
      label: "Tax guide for Dutch buyers",
      title: "Spanish tax rules for Dutch property owners",
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
          "Personal buyer’s agent and dedicated point of contact for international buyers who want to purchase a property on the Costa Blanca more safely and with greater focus.",
      },
      {
        "@type": "WebPage",
        "@id": "#webpage",
        name: "Buying property on the Costa Blanca | Nordic Move Spain",
        description:
          "Property buying guidance with a free Area Match, focused property selection, two independent assessments and one dedicated point of contact through to arrival.",
        inLanguage: "en",
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
        name: "Property buying guidance and relocation on the Costa Blanca",
        serviceType: [
          "Area Match",
          "Property selection and viewings",
          "Technical inspection and document screening",
          "Coordination of legal due diligence",
          "Relocation coordination",
          "Styling and furnishing",
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
            <a href="/" className="border-b border-[#c8a063] pb-1">
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
              Book an introductory call
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Buy a property on the Costa Blanca safely and carefully with Nordic Move Spain"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/28 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca
            </p>

            <h1 className="mt-5 max-w-xl font-serif text-4xl leading-[1.02] text-[#f3ede3] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-5xl">
              Buy a property more safely
              <br />
              on the Costa Blanca.
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#f7f2ea] drop-shadow-[0_2px_12px_rgba(0,0,0,0.38)] md:text-xl">
              For international buyers who want certainty and one dedicated point of contact.
              Nordic Move coordinates the journey from finding the right area and
              property through independent checks, purchase and arrival.
            </p>

            <p className="mt-7 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              One dedicated point of contact · Independent checks · From search to arrival
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Start your free Area Match
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Book an introductory call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PROOF BAR */}
      <section className="border-b border-stone-200/70 bg-white/75 px-8 py-5 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-4 text-center text-sm font-medium text-[#1e2a3a] md:grid-cols-3">
          <p>Personal guidance on the buyer’s side</p>
          <p>Legal and technical checks before purchase</p>
          <p>Support in Dutch, English, German and Swedish</p>
        </div>
      </section>

      {/* COMPLETE BUYING & RELOCATION SUPPORT */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr] xl:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                More than an estate agent
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Personal buying guidance with independent checks and
                one dedicated point of contact
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-600">
                Buying a property abroad should be an exciting step.
                Yet experience has shown us how quickly uncertainty can arise
                when local knowledge is missing, responsibilities are unclear
                or professionals do not work together effectively.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                We have also seen things go wrong close to home: leaks,
                hidden defects and legal problems that only came to light after
                the purchase.
              </p>

              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-[#1e2a3a]">
                That was when we knew: this can and must be done differently.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                That is why we carefully built a team that includes an
                independent Spanish property lawyer, a registered
                building surveyor and a trusted construction and renovation partner.
                The architects and technical architects involved are registered
                with their Spanish professional bodies and hold the required
                qualifications and professional indemnity insurance.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Before purchase, we arrange two independent checks.
                The property lawyer examines ownership, charges,
                debts, permits and contracts. The building surveyor
                inspects and measures the property and compares the actual situation
                with the available plans and records. This gives you greater
                clarity about potential risks before you decide.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                With one dedicated point of contact, we guide and coordinate the journey
                from Area Match to purchase and settling in. After the purchase, we can also
                help with moving, schools, utilities, renovation,
                interior design and styling.
              </p>

              <p className="mt-7 text-xl font-medium leading-relaxed text-stone-700">
                Search with purpose. Buy more safely. Arrive with peace of mind.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/relocation-assessment"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Request your free Area Match
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Book an introductory call
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
              Start exactly where you need our guidance.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                href: "/services/area-match",
                label: "I am still exploring",
                title: "Find the right area first",
                text: "Start with a personal Area Match and gain direction before you compare properties.",
                cta: "Explore Area Match →",
              },
              {
                href: "/services/purchase-safety-report",
                label: "I have found a property",
                title: "Have the purchase checked independently",
                text: "Combine legal due diligence with a technical inspection before making your final decision.",
                cta: "Explore Purchase Safety →",
              },
              {
                href: "/services/move-in-ready",
                label: "I want to buy and arrive without the stress",
                title: "Let us coordinate the practical arrangements too",
                text: "From moving and utilities to renovation, furnishing and a smooth arrival.",
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
              Four clear steps, with one dedicated point of contact wherever you need it.
            </h2>

            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-lg font-medium leading-relaxed text-[#1e2a3a]">
                You do not have to use every step.
              </p>

              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Follow the full journey or choose only the elements that suit
                your situation: Area Match, Buyer Discovery, Purchase Safety or
                Move-In Ready.
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
                alt="Area Match Report for international property buyers on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Step 1 · Orientation
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Area Match Report
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  A detailed personal profile, supported by local facts:
                  healthcare, schools, golf, community profile, amenities,
                  infrastructure and lifestyle fit.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Request your free report →
                </div>
              </div>
            </a>

            <a
              href="/services/discovery-trips"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/discover-card.png"
                alt="International buyers during a Buyer Discovery Experience on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Step 2 · Your route
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Buyer Discovery Experience
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  View selected properties and experience the area during a
                  private experience or in a small, carefully matched
                  group with similar interests.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Explore the Discovery Experience →
                </div>
              </div>
            </a>

            <a
              href="/services/purchase-safety-report"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/legal.png"
                alt="Technical and legal property checks before purchase on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Step 3 · Pre-purchase checks
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Purchase Safety
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  An independent surveyor assesses the technical condition and
                  compares the property with available records and
                  documents. We also arrange a suitable independent
                  lawyer for the legal due diligence. Based on both
                  reports, you receive our green-amber-red purchase recommendation.
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
                alt="Move-In Ready support after purchasing a property on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Step 4 · Smooth arrival
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Move-In Ready Support
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Together, we define the interior direction and
                  coordinate styling, furnishing, local specialists and, where
                  requested, arrangements with a reliable removal company.
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
                Two independent checks. One clear purchase recommendation.
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                More certainty before you decide.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                An independent surveyor inspects and measures the property and
                compares it with the available documents. This brings defects,
                discrepancies and potential repair points to light early.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/85">
                An independent lawyer checks ownership, charges, debts,
                permits, contracts and transfer conditions.
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
                  See how Purchase Safety works
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
                >
                  Ask about a property check
                </a>
              </div>
            </div>

            <div className="p-10 md:p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Two independent assessments. One clear decision.
              </p>

              <h3 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-[#1e2a3a]">
                Proceed, reconsider or do not buy.
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
                    repairs, renegotiation or additional conditions are needed first.
                  </p>
                </article>

                <article className="rounded-[28px] border border-red-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-800">
                    Red · Do not buy
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    The risks are too great. Do not buy unless they are fully
                    and demonstrably resolved before you commit.
                  </p>
                </article>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                The independent surveyor’s document check is an initial
                comparison and does not replace legal due diligence or formal
                confirmation by the competent authorities. The technical and legal
                checks are carried out by independent professionals,
                each responsible for their own report. Additional
                specialist investigation may be required. No check provides
                absolute certainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONAL BUYER DISCOVERY */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#1e2a3a] text-white shadow-sm">
          <div className="grid items-center lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-4 md:p-5 lg:p-6">
              <img
                src="/images/community-home.png"
                alt="Buyer Discovery Experience and local community on the Costa Blanca"
                className="h-[360px] w-full rounded-[28px] object-cover md:h-[440px] lg:h-[500px]"
                loading="lazy"
              />
            </div>

            <div className="p-9 md:p-12 lg:p-14">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Optional · Buyer Discovery
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">
                Experience not only the property, but also the life around it.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Choose a private Buyer Discovery Experience or explore the area
                in a small, carefully matched group. Experience
                the amenities, atmosphere and daily life, without group participation being a required part of your buying journey.
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

      {/* COMPACT MOVE-IN READY */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#e9dfd2] shadow-sm">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            <div className="p-10 md:p-12 lg:p-14">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Step 4 · Move-In Ready
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                From key handover to truly feeling at home.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                After the purchase, we can coordinate moving, utilities, local
                specialists, renovation, interior design and furnishing.
                You keep one point of contact while the work is tailored to
                your property, schedule and budget.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-stone-500">
                Services are delivered by selected external specialists.
                Scope, schedule and costs are agreed in advance for each element.
              </p>

              <a
                href="/services/move-in-ready"
                className="mt-8 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Explore Move-In Ready
              </a>
            </div>

            <div className="p-6 md:p-8 lg:p-10">
              <img
                src="/images/move-in-ready-ibiza.png"
                alt="Move-in-ready Mediterranean interior as inspiration for Move-In Ready support"
                className="h-[420px] w-full rounded-[30px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES AND INSIGHTS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Buyer guides
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Honest guidance before you buy a property on the Costa Blanca.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              A small selection of practical guides for international buyers
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
              View all buyer guides
            </a>
          </div>
        </div>
      </section>


      {/* FINAL GENERAL CTA */}
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] px-10 py-14 text-white shadow-sm md:px-16 md:py-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Personal guidance from your starting point
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Ready to prepare your purchase carefully?
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/80">
            Start with a free Area Match if you are still looking for the right
            area, or book a personal call if you have already found a property
            or would like to discuss full guidance.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Request your free Area Match
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Book an introductory call
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}