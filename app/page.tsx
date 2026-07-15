export const metadata = {
  title: "Safe Property Buying on the Costa Blanca | Nordic Move Spain",
  description:
    "A premium buying journey for international buyers on the Costa Blanca: Area Match, Buyer Discovery Experience, included technical buyer review, secure client portal and Move-In Ready interior support.",
  openGraph: {
    title: "Safe Property Buying on the Costa Blanca | Nordic Move Spain",
    description:
      "Choose the right area, experience the region, receive an included technical buyer review before purchase, keep documents secure and arrive in a move-in ready home.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safe Property Buying on the Costa Blanca | Nordic Move Spain",
    description:
      "Area Match, Buyer Discovery Experience, included technical buyer review, secure client portal and Move-In Ready interior support for serious international buyers.",
  },
};

export default function EnglishHomePage() {
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
      href: "/guides/uk-tax-second-home-spain",
      label: "UK tax rules",
      title: "UK tax rules for a second home in Spain",
      text:
        "What UK tax residents should understand about Spanish property taxes, Modelo 210, rental income, capital gains, double taxation relief and owning a second home abroad.",
      cta: "Read the UK tax guide →",
      featured: false,
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
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
              Schedule a consultation
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Nordic Move Spain guidance for buying a property on the Costa Blanca"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/18 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[0.98] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-6xl">
              A safer way
              <br />
              to buy property
              <br />
              on the Costa Blanca.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
              We guide international buyers from A to Z: from the right
              area and Buyer Discovery Experience to independent risk checks,
              secure document control and, after purchase, a move-in ready
              landing.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
              The goal is not to see as many homes as possible. The goal is
              to find the right fit, reduce risk and move forward only when the
              area, property, documents and next steps are clear.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              Area Match · Buyer Discovery · Independent Safety Report · Secure Portal · Move-In Ready
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Start with your Area Match Report
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Schedule a consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Turn the process around
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Most buyers start with listings. We start with how you want to live.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Many buyers begin on large property portals, save dozens of
                homes and fall in love with a property before they truly
                understand the area around it.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                But a home can look beautiful and still be the wrong decision:
                the location may not fit your daily rhythm, the area may not
                suit your future plans, or the property may hide technical,
                legal or practical risks.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                That is why we turn the process around. First, we map how you
                want to live, what matters to you, what you want to avoid and
                which regions fit your wishes, budget and long-term plans.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Only then do we search with focus. You do not receive an endless
                list of properties, but a small, carefully selected shortlist
                that fits your profile — sometimes move-in ready, sometimes a
                hidden gem with potential through our local network of Spanish
                partners.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                When a property becomes seriously interesting, the Purchase
                Safety Report helps clarify the key risks. This means you do not
                decide on emotion alone, but with insight, control and honest
                buyer-side advice.
              </p>
            </div>
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

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
              First the right area. Then the right property. Then a secure purchase and a soft landing.
            </h2>

            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-lg font-medium leading-relaxed text-[#1e2a3a]">
                You do not need every step.
              </p>

              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Use the full journey, or step in where you need us: Area Match,
                Buyer Discovery, Purchase Safety or Move-In Ready.
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
                alt="Area Match Assessment for the Costa Blanca"
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
                  A 34-question profile supported by local facts: healthcare,
                  schools, golf, community profile, services, infrastructure
                  and lifestyle fit.
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
                  Explore the right areas, selected homes and relevant local
                  professionals through a private or carefully matched group
                  experience.
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
                alt="Purchase Safety Report and secure client portal for buyers on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Step 3 · Pre-purchase checks
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Safety Report &amp; Portal
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Every purchase through Nordic Move Spain includes a technical
                  buyer review by an independent buyer-side technician before
                  you commit.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Explore purchase safety →
                </div>
              </div>
            </a>

            <a
              href="/services/move-in-ready"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/move-in-ready-ibiza.png"
                alt="Move-In Ready support for buyers on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Step 4 · Safe landing
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Move-In Ready Support
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  We shape the interior direction ourselves and coordinate
                  furnishing, styling and practical preparation with trusted
                  local furniture partners.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Explore Move-In Ready →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* MOVE-IN READY INTERIOR PREVIEW */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#e9dfd2]">
          <div className="grid items-center gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Soft Landing &amp; Move-In Ready
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
                Arrive in a home that already feels like yours.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-700">
                After purchase, you should not have to spend months arranging
                furniture, contractors, lighting, curtains and deliveries from
                abroad.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Nordic Move Spain shapes the interior direction with you and
                coordinates furnishing, styling and practical preparation through
                trusted local furniture partners — so you can land softly instead
                of arriving in an unfinished project.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-stone-500">
                The images shown here are interior concept visuals for
                inspiration only. Final design, timing and execution depend on
                the property, budget, availability and selected local partners.
              </p>

              <a
                href="/services/move-in-ready"
                className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Explore Move-In Ready support
              </a>
            </div>

            <div className="grid gap-6 p-8 md:grid-cols-2 lg:p-12">
              {[
                [
                  "/images/move-in-ready-ibiza.png",
                  "Ibiza Soho Lounge",
                  "Warm Mediterranean living with soft whites, natural textures, subtle colour accents and a relaxed indoor-outdoor feeling.",
                  "Ibiza Soho interior concept for Move-In Ready support on the Costa Blanca",
                ],
                [
                  "/images/move-in-ready-kitchen.png",
                  "Contemporary Coastal Kitchen",
                  "A brighter and more architectural direction with large windows, pale woods, refined finishes and calm coastal elegance.",
                  "Contemporary coastal kitchen concept for Move-In Ready support on the Costa Blanca",
                ],
              ].map(([image, title, text, alt]) => (
                <article
                  key={title}
                  className="overflow-hidden rounded-[32px] bg-white/85 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-[360px] overflow-hidden">
                    <img
                      src={image}
                      alt={alt}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1e2a3a] backdrop-blur">
                      Concept visual
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                      Interior direction
                    </p>

                    <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-stone-600">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NORDIC CIRCLE CONNECTIONS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative flex min-h-[520px] items-start justify-center bg-[#eadcca] p-8 md:p-10">
              <img
                src="/images/community-home.png"
                alt="Nordic Circle Connections for buyers and future residents on the Costa Blanca"
                className="w-full max-w-[620px] rounded-[24px] object-contain"
              />
            </div>

            <div className="p-10 md:p-12 lg:p-14">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Belonging matters
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                A property is not enough if you do not feel connected.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Through our own experience with expat support, we have seen that
                people often return home earlier than expected because they never
                build a local circle, miss meaningful friendships or feel
                disconnected from daily life.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
                Nordic Circle helps reduce that risk. During the Buyer Discovery
                Experience, we create natural moments to meet people with a
                similar background, life stage or interests — never forced
                networking, but a better sense of whether the area can become a
                real home.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  [
                    "Social fit",
                    "Introductions can be shaped around language, background, life stage and interests.",
                  ],
                  [
                    "Shared moments",
                    "Lunches, dinners, golf, wellness or gastronomy help people connect naturally.",
                  ],
                  [
                    "Better landing",
                    "The aim is to reduce the risk of feeling isolated after buying and moving.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[24px] border border-white/15 bg-white/5 p-5 backdrop-blur"
                  >
                    <h3 className="font-serif text-xl leading-tight text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-white/65 md:text-sm">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/services/nordic-circle-community"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Discover Nordic Circle
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
                >
                  Schedule a personal consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PURCHASE SAFETY REPORT */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[#1e2a3a] p-12 text-white lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Purchase safety
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                Reduce risk before you buy.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/80">
                When you are seriously interested in a property, we look beyond
                the presentation. Through the Purchase Safety Report,
                independent specialists can review legal and technical risks
                before you commit.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/80">
                This can include permits, extensions, ownership documents,
                possible debts or charges, damp, leaks, mould, visible defects
                and the general condition of the property.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/80">
                The result is a clearer decision: proceed, renegotiate, add
                further conditions or step away before you are too far into the
                process.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/55">
                A technical buyer review is included when you purchase a
                property through Nordic Move Spain, subject to property access,
                timing and professional availability.
              </p>
            </div>

            <div className="p-10 md:p-12 lg:p-16">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  [
                    "Legal risks",
                    "Permits, extensions, ownership documents and possible debts or charges can be reviewed.",
                  ],
                  [
                    "Technical risks",
                    "Damp, leaks, mould, cracks, drainage and visible defects can be flagged early.",
                  ],
                  [
                    "Independent report",
                    "Findings are brought together so you can understand the risks before moving forward.",
                  ],
                  [
                    "Clear decision",
                    "Proceed, renegotiate, add conditions or walk away with more confidence.",
                  ],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-[28px] bg-[#f6f1ea] p-7">
                    <h3 className="font-serif text-2xl leading-tight text-[#1e2a3a]">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-stone-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                Reports, photos, documents and questions can be kept together in
                your secure client portal, so the decision stays organised. The
                included technical buyer review supports decision-making but
                does not replace formal legal due diligence, valuation or a full
                structural survey unless separately agreed.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/services/purchase-safety-report"
                  className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
                >
                  Explore purchase safety
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Ask about a property check
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="rounded-[40px] bg-white p-5 shadow-sm">
            <img
              src="/images/founder.png"
              alt="The founders of Nordic Move Spain"
              className="h-auto max-h-[620px] w-full rounded-[32px] object-contain object-center"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              About Nordic Move Spain
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
              Built for international buyers who want calm, clarity and local support.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Nordic Move Spain was created for international buyers who want
              a safer, more personal and more organised way to buy property on
              the Costa Blanca — from first orientation to arrival.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              We understand that buying in Spain is not only a property
              decision, but also a choice for a different environment, a
              different daily life and often a new chapter. That is why we
              combine lifestyle insight, local knowledge, selected homes, an
              included technical buyer review, secure document control and
              practical support after purchase.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Our role is to help buyers first understand the right place,
              then assess the property critically, organise the process safely
              and, where desired, shape the interior direction and coordinate
              move-in preparation with trusted local furniture partners.
            </p>

            <a
              href="/about-us"
              className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
            >
              Read more about us
            </a>
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
              who want to understand retirement areas, the Spanish buying
              process and UK tax considerations before making a decision.
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

      {/* FINAL CALL */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Start with clarity
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Buy with clarity, structure and fewer blind spots.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Choose the support you need now, or follow the full journey from
            area clarity to an included technical buyer review and a softer,
            move-in ready landing.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Start with your Area Match Report
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Schedule a consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
