export const metadata = {
  title: "Buying Property on the Costa Blanca North | Nordic Move Spain",
  description:
    "Personal guidance for international buyers who want to choose the right area, buy property safely and understand the legal, technical and practical risks before purchase.",
  openGraph: {
    title: "Buying Property on the Costa Blanca North | Nordic Move Spain",
    description:
      "Choose the right area, experience daily life before buying and purchase with more confidence through our Purchase Safety Report.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buying Property on the Costa Blanca North | Nordic Move Spain",
    description:
      "A more personal and secure way to choose the right area, assess a property and feel at home in Spain.",
  },
};

export default function EnglishHomePage() {
  const guideCards = [
    {
      href: "/guides/best-areas-costa-blanca-north-retirees",
      label: "Retirement Area Guide",
      title: "Best places on the Costa Blanca North for retirement",
      text:
        "A practical guide for Dutch, German, Swiss and other international buyers comparing the best places on the Costa Blanca North for retirement.",
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
      href: "/guides/where-to-buy-property-costa-blanca-north",
      label: "Area Guide",
      title: "Where should you buy property on the Costa Blanca North?",
      text:
        "Compare Moraira, Jávea, Altea, Benissa, Calpe and Dénia on lifestyle, property type, amenities and buyer profile.",
      cta: "Read the area guide →",
      featured: false,
    },
    {
      href: "/guides/moraira-vs-javea",
      label: "Area Comparison",
      title: "Moraira or Jávea: which area suits you better?",
      text:
        "A practical comparison for buyers choosing between two of the most sought-after locations on the Costa Blanca North.",
      cta: "Read the comparison →",
      featured: false,
    },
    {
      href: "/guides/honest-guide-buying-property-costa-blanca-north",
      label: "Honest Buyer Guide",
      title: "Costs, rental rules and practical checks before purchase",
      text:
        "An honest guide to hidden costs, tourist rentals, electricity pylons, noise, community rules and issues buyers often discover too late.",
      cta: "Read the honest guide →",
      featured: false,
    },
    {
      href: "/guides/common-mistakes-buying-property-spain",
      label: "Common Mistakes",
      title: "Common mistakes when buying property",
      text:
        "The most common mistakes international buyers make before and during the property purchase process in Spain.",
      cta: "Read the guide →",
      featured: false,
    },
    {
      href: "/guides/homeowners-association-spain",
      label: "Community Rules",
      title: "Homeowners’ associations in Spain",
      text:
        "Understand community fees, rental restrictions, meeting minutes and owner obligations before purchasing.",
      cta: "Read the guide →",
      featured: false,
    },
    {
      href: "/guides/dutch-tax-second-home-spain",
      label: "Dutch Tax Rules",
      title: "Dutch tax rules for a second home in Spain",
      text:
        "What Dutch tax residents should know about Box 3, Spanish taxes and owning foreign property.",
      cta: "Read the guide →",
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
              About
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
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
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
            </div>

            <a
              href="/contact"
              className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Schedule an introduction
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Guidance from Nordic Move Spain when buying property on the Costa Blanca North"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/5"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca North
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[0.98] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-6xl">
              A different way
              <br />
              to buy property
              <br />
              on the Costa Blanca North.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white">
              Not just finding a property, but buying safely and thoughtfully:
              with the right area, independent checks and a community where you
              can feel at home.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90">
              We help international buyers understand the Costa Blanca North,
              experience daily life before purchasing and only consider a
              property seriously once the key legal, technical and practical
              risks are clear.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              English · Dutch · German · Spanish · Swedish
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Request your free Area Match Report
              </a>

              <a
                href="/services/discovery-trips"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Discover the Buyer Discovery Trip
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
                The right property starts with certainty
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Choose the right area, meet the right people and buy with more confidence.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Buying a property on the Costa Blanca North is about more than
                falling in love with sea views, sunshine and space. The real
                question is whether everything behind the scenes is correct.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                We guide international buyers who want not only a beautiful
                property, but also clarity about the location, legal situation,
                technical condition, costs, documents and daily life in Spain.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                With our Area Match Report, you discover which towns and
                neighbourhoods fit your lifestyle. During the Buyer Discovery
                Trip, you experience the region in practice and meet trusted
                local professionals. And when you are seriously considering a
                property, our Purchase Safety Report helps identify the most
                important risks before you buy.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Many buyers only discover problems after signing: an extension
                that is not properly registered, a plot boundary that does not
                match, damp issues, a septic tank that does not work, unexpected
                community rules or missing documents.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                We bring the right people to the table — a technical specialist,
                a gestor and an independent lawyer — so you do not buy on
                feeling alone, but with control, insight and clear next steps.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Our role is to make the process clear, discreet and secure.
                Important documents are not scattered through WhatsApp messages
                or unsafe email chains, but collected where possible in a secure
                environment.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                We help you buy not faster, but better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            <a
              href="/services/area-match"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/area-match.png"
                alt="Area Match Assessment for the Costa Blanca North"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Start with insight
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Area Match &amp; Lifestyle Intelligence Report
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Discover which towns and neighbourhoods best match your
                  lifestyle, family situation, interests, budget and long-term
                  plans.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Your personalised report can include insights into healthcare,
                  schools, safety, international communities, golf, restaurants,
                  accessibility, local services and property market dynamics.
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
                alt="International buyers during a Buyer Discovery Trip on the Costa Blanca North"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Experience before you decide
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Buyer Discovery Trip
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  A carefully curated three-day property and lifestyle programme
                  on the Costa Blanca North, designed around your lifestyle,
                  goals and stage of life.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Explore selected regions in person, meet trusted independent
                  professionals and experience what daily life could truly feel
                  like before making a long-term commitment.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Depending on your preference, the trip can be private or
                  arranged in a carefully matched small group. Personal
                  introductions to like-minded buyers and international residents
                  can help you meet familiar faces and build possible friendships
                  before you move.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Discover the Buyer Discovery Trip →
                </div>
              </div>
            </a>

            <a
              href="/services/purchase-safety-report"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/legal.png"
                alt="Purchase Safety Report for international buyers in Spain"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Buy with confidence
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Purchase Safety Report
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  An independent safety report for buyers who are seriously
                  considering a property on the Costa Blanca North and want
                  clarity before purchase.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Together with a technical specialist, gestor and independent
                  lawyer, we coordinate checks on visible defects, extensions,
                  plot boundaries, registrations, permits, septic tank, ownership
                  information, community rules and potential purchase risks.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  The findings are brought together in a clear report: proceed,
                  buy only under conditions, renegotiate or walk away from the
                  property.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Important documents are collected safely where possible, so
                  sensitive information does not need to be shared through loose
                  emails or WhatsApp screenshots.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Discover the Purchase Safety Report →
                </div>
              </div>
            </a>

            <a
              href="/services"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/soft-landing-card.png"
                alt="Soft Landing Program after buying a property in Spain"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  After purchase support
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Soft Landing Program
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Practical support after purchase — from registrations and
                  healthcare orientation to local introductions and settling into
                  daily life in Spain.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Clients in our Soft Landing Program can also become part of
                  Nordic Circle Community, our curated network for friendships,
                  business connections and local belonging.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Explore Soft Landing →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* NORDIC CIRCLE COMMUNITY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[520px]">
              <img
                src="/images/discovery2.png"
                alt="Personal introductions within the international community on the Costa Blanca North"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-[#1e2a3a]/20"></div>
            </div>

            <div className="p-12 md:p-16 lg:p-20">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                A community before you move
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                Meet people before Spain becomes your home.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-white/85">
                A beautiful property does not automatically create a fulfilling
                life. Nordic Circle Community helps selected clients build
                friendships, trusted local contacts and a genuine sense of
                belonging on the Costa Blanca North.
              </p>

              <p className="mt-6 text-base leading-relaxed text-white/70">
                We take time to understand your interests and preferred way of
                life, whether that includes golf, wellness, gastronomy, outdoor
                living, business networking or a quieter Mediterranean rhythm.
                During the Buyer Discovery Trip and after purchase, carefully
                chosen introductions, small dinners and activities help you meet
                like-minded buyers and established international residents. This
                means your social life can begin before your move is complete.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  [
                    "Personally selected introductions",
                    "Meet international residents, future neighbours and people with shared interests, before or after your move.",
                  ],
                  [
                    "Small-scale gatherings",
                    "Build genuine connections through small dinners and carefully chosen activities, rather than anonymous events.",
                  ],
                  [
                    "Become familiar with the area",
                    "Get to know trusted local contacts and familiar faces, so daily life in Spain feels settled sooner.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[24px] border border-white/15 bg-white/5 p-6 backdrop-blur"
                  >
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/65">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-white/60">
                Nordic Circle Community is available for selected clients of our
                Buyer Discovery Trip and Soft Landing Program. Introductions are
                personal and based on mutual relevance, privacy and shared
                interests.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
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
                  Schedule a personal introduction
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            How it works
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            A clear journey from first orientation to feeling at home in Spain.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {[
              [
                "01",
                "Area Match Assessment",
                "Complete our lifestyle-based questionnaire so we understand your goals, preferences, budget and relocation priorities.",
              ],
              [
                "02",
                "Lifestyle Intelligence Report",
                "Receive personalised insights showing which places best match your lifestyle and which may be less suitable.",
              ],
              [
                "03",
                "Buyer Discovery Trip",
                "Experience selected areas in person, meet trusted professionals and connect with buyers and residents before making a decision.",
              ],
              [
                "04",
                "Property search",
                "Once the right area is clear, we focus the search on properties that match your profile, priorities and long-term plans.",
              ],
              [
                "05",
                "Purchase Safety Report",
                "When you are seriously considering a property, we coordinate independent technical, administrative and legal checks so key risks are clear before purchase.",
              ],
              [
                "06",
                "Soft Landing & Nordic Circle",
                "After purchase, we support your practical move and help first introductions grow into a trusted local and international network.",
              ],
            ].map(([number, title, text]) => (
              <div key={number} className="border-l border-[#c8a063]/30 pl-5">
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {number}
                </p>

                <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {text}
                </p>
              </div>
            ))}
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
              Personal guidance from founders who understand the move to Spain.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Nordic Move Spain was created to offer international buyers a more
              personal, transparent and considered way to buy property on the
              Costa Blanca North.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              As founders, we combine international experience, local knowledge,
              research and trusted professional relationships. We understand
              that buying a property abroad is not only about real estate, but
              also about lifestyle, certainty, connection and feeling at home.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Our role is to help buyers make clearer decisions, avoid
              unnecessary risks and build a future in Spain with more confidence.
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

      {/* REGIONS */}
      <section className="px-8 pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px]">
          <img
            src="/images/discovery2.png"
            alt="Costa Blanca North"
            className="h-[900px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 p-10 md:p-16">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/80">
                  Costa Blanca North
                </p>

                <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[1] text-white md:text-7xl">
                  Discover the places that could become your new home.
                </h2>
              </div>

              <a
                href="/regions"
                className="w-fit rounded-full border border-white px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                View all regions
              </a>
            </div>

            <div className="absolute bottom-10 left-10 right-10 grid gap-6 md:bottom-16 md:left-16 md:right-16 md:grid-cols-3 md:gap-8">
              <a
                href="/regions/moraira"
                className="rounded-[32px] bg-white/95 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-serif text-4xl text-[#1e2a3a] md:text-5xl">
                  Moraira
                </h3>

                <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
                  Stylish coastal living with a calm international atmosphere
                  and beautiful Mediterranean beaches.
                </p>
              </a>

              <a
                href="/regions/altea"
                className="rounded-[32px] bg-white/95 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-serif text-4xl text-[#1e2a3a] md:text-5xl">
                  Altea
                </h3>

                <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
                  Artistic charm, authentic Spanish character and a refined,
                  relaxed lifestyle close to the sea.
                </p>
              </a>

              <a
                href="/regions/javea"
                className="rounded-[32px] bg-white/95 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-serif text-4xl text-[#1e2a3a] md:text-5xl">
                  Jávea
                </h3>

                <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
                  A lively international atmosphere with luxury villas, nature,
                  restaurants and family-friendly beaches.
                </p>
              </a>
            </div>
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
              Honest guidance before you buy property on the Costa Blanca North.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Practical guides for Dutch, German, Swiss and other international
              buyers who want to understand the areas, daily risks, costs,
              rental rules and buying process before making a property decision
              in Spain.
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

      {/* SELL YOUR PROPERTY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#e9dfd2]">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            <div className="p-14 lg:p-20">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                For homeowners
              </p>

              <h2 className="mt-6 font-serif text-6xl leading-[1] text-[#1e2a3a]">
                Sell your property on the Costa Blanca North to the right
                international buyer.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-700">
                Most estate agents place a property online. We help position
                your home for international buyers who truly understand the
                lifestyle, location and long-term value.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Through our buyer network, Area Match Assessments and Buyer
                Discovery Trips, we understand what Dutch, Belgian, German,
                Swiss, British, Scandinavian and other international buyers are
                looking for before they purchase property in Spain.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                We help selected properties stand out with the right buyer
                profile, a compelling lifestyle story and international
                positioning.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#1e2a3a] px-8 py-4 text-white"
                >
                  Discuss your property
                </a>

                <a
                  href="/services/sell-your-property"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-[#1e2a3a]"
                >
                  Read more
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[500px]">
              <img
                src="/images/seller-section.png"
                alt="Selling a property on the Costa Blanca North"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
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
            Understand the area and the risks before you choose a property.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Our Area Match Assessment, Buyer Discovery Trip and Purchase Safety
            Report help you understand where to buy, what to check and how to
            make a more confident property decision on the Costa Blanca North.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Request your free Area Match Report
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Schedule an introduction
            </a>

            <a
              href="/"
              className="rounded-full border border-white/50 px-8 py-4 text-sm text-white/90 transition hover:bg-white/10"
            >
              Back to website
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
