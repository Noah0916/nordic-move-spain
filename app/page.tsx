export const metadata = {
  title: "Nordic Move Spain | Buy Property on Costa Blanca North",
  description:
    "Nordic Move Spain helps Dutch, German, Swiss and international buyers choose the right area, buy safely and settle confidently on Costa Blanca North.",
};

export default function Home() {
  const guideCards = [
    {
      href: "/guides/best-areas-costa-blanca-north-retirees",
      label: "Retiree Area Guide",
      title: "Best Areas on Costa Blanca North for Retirees",
      text:
        "A practical guide for Dutch, German, Swiss and other international buyers comparing the best Costa Blanca North areas for retirement.",
      cta: "Read retiree guide →",
      featured: true,
    },
    {
      href: "/guides/buying-property-spain",
      label: "Buying in Spain",
      title: "Buying Property in Spain",
      text:
        "A complete guide to legal checks, mortgages, purchase costs and the buying process for international buyers.",
      cta: "Read guide →",
      featured: false,
    },
    {
      href: "/guides/where-to-buy-property-costa-blanca-north",
      label: "Area Guide",
      title: "Where to Buy Property on Costa Blanca North",
      text:
        "Compare Moraira, Jávea, Altea, Benissa, Calpe and Dénia by lifestyle, property type, services and buyer profile.",
      cta: "Read area guide →",
      featured: false,
    },
    {
      href: "/guides/moraira-vs-javea",
      label: "Area Comparison",
      title: "Moraira vs Jávea: Which Area Is Better?",
      text:
        "A practical comparison for buyers choosing between two of the most desirable areas on Costa Blanca North.",
      cta: "Read comparison →",
      featured: false,
    },
    {
      href: "/guides/honest-guide-buying-property-costa-blanca-north",
      label: "Honest Buyer Guide",
      title: "Costs, Rentals and Real-Life Checks Before Buying",
      text:
        "An honest guide about hidden costs, tourist rentals, electricity pylons, noise, community rules and things buyers often discover too late.",
      cta: "Read honest guide →",
      featured: false,
    },
    {
      href: "/guides/common-mistakes-buying-property-spain",
      label: "Buyer Mistakes",
      title: "Common Mistakes Buyers Make",
      text:
        "The most common mistakes international buyers make before and during the purchase process in Spain.",
      cta: "Read guide →",
      featured: false,
    },
    {
      href: "/guides/homeowners-association-spain",
      label: "Community Rules",
      title: "Homeowners Associations in Spain",
      text:
        "Understand community fees, rental restrictions, meeting minutes and owner obligations before buying.",
      cta: "Read guide →",
      featured: false,
    },
    {
      href: "/guides/dutch-tax-second-home-spain",
      label: "Dutch Tax Rules",
      title: "Dutch Tax Rules for a Second Home",
      text:
        "What Dutch residents should know about Box 3, Spanish taxes and foreign property ownership.",
      cta: "Read guide →",
      featured: false,
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVBAR */}
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
                href="/nl"
                aria-label="Nederlandse versie"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                NL
              </a>

              <a
                href="/de"
                aria-label="Deutsche Version"
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
          alt="Nordic Move Spain property guidance on Costa Blanca North"
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
              in Spain.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white">
              More than property. Clarity, confidence and a community where you
              truly belong.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90">
              We help international buyers understand where to live, what to
              avoid, how to buy safely and how to build a meaningful life on
              Costa Blanca North.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              English · Dutch · German · Spanish · Swedish
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Request your Area Match
              </a>

              <a
                href="/services/discovery-trips"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Explore the Buyer Discovery Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Clarity before commitment
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Confidence, clarity and connection before you buy.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Purchasing property in Spain is one of life's most significant
                decisions. We help international buyers navigate the lifestyle,
                legal, mortgage, banking, insurance and practical considerations
                that many only discover after relocating.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Through our Area Match Assessment, Lifestyle Intelligence Report
                and Buyer Discovery Trip, clients gain a deeper understanding of
                the regions, communities and daily realities of life on Costa
                Blanca North before making long-term commitments.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Many buyers focus only on the property itself. We focus on the
                complete picture — location, lifestyle fit, legal certainty,
                ownership costs, financing options, local services, community
                rules and long-term quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <a
              href="/services/area-match"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/area-match.png"
                alt="Costa Blanca North Area Match Assessment"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Start with insight
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Area Match & Lifestyle Intelligence Report
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Discover which towns and neighbourhoods best match your
                  lifestyle, family situation, interests, budget and long-term
                  plans.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Your personalised insights can include healthcare access,
                  schools, safety, international communities, golf, restaurants,
                  accessibility, local services and property market dynamics.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Request your match →
                </div>
              </div>
            </a>

            <a
              href="/services/discovery-trips"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/discover-card.png"
                alt="Buyer Discovery Trip on Costa Blanca North"
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
                  A carefully curated three-day property and lifestyle
                  experience on Costa Blanca North, designed around your
                  lifestyle, goals and stage of life.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Explore selected regions in person, meet trusted independent
                  professionals and experience what daily life could truly feel
                  like before making a long-term commitment.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Depending on your preference, the trip can be private or
                  arranged in a carefully matched small group with like-minded
                  buyers.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Discover the Buyer Discovery Trip →
                </div>
              </div>
            </a>

            <a
              href="/services"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/soft-landing-card.png"
                alt="Soft Landing Program after buying property in Spain"
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
                  Explore soft landing →
                </div>
              </div>
            </a>
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

          <div className="mt-14 grid gap-8 md:grid-cols-5">
            {[
              [
                "01",
                "Area Match Assessment",
                "Complete our lifestyle-based assessment so we understand your goals, preferences, budget and relocation priorities.",
              ],
              [
                "02",
                "Lifestyle Intelligence Report",
                "Receive personalised area insights showing which locations best fit your lifestyle and which areas may be less suitable.",
              ],
              [
                "03",
                "Buyer Discovery Trip",
                "Experience selected areas in person, meet trusted professionals and validate your location choice before committing.",
              ],
              [
                "04",
                "Property Search & Purchase Coordination",
                "Once the right area is clear, we help focus the property search around homes that match your profile and coordinate the buying journey with trusted independent professionals.",
              ],
              [
                "05",
                "Soft Landing",
                "After purchase, we support your practical move and introduce you to Nordic Circle Community.",
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

      {/* GUIDES & INSIGHTS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Buyer Guides
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Honest guidance before buying property on Costa Blanca North.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Practical guides for Dutch, German, Swiss and other international
              buyers who want to understand the areas, real-life risks, costs,
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
                For property owners
              </p>

              <h2 className="mt-6 font-serif text-6xl leading-[1] text-[#1e2a3a]">
                Sell your Costa Blanca North property to the right international
                buyer.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-700">
                Most agencies list a property. We help position it for the
                international buyers most likely to understand its lifestyle,
                location and long-term value.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Through our buyer network, Area Match Assessments and Buyer
                Discovery Trips, we understand what Dutch, Belgian, German,
                Swiss, British, Scandinavian and other international buyers are
                looking for before they commit to a home in Spain.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                We help selected homes stand out with the right buyer profile,
                lifestyle story and international positioning.
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
                  Learn more
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[500px]">
              <img
                src="/images/seller-section.png"
                alt="Selling property on Costa Blanca North"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Start with clarity
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Before you choose a property, choose the right area.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Our Area Match Assessment helps you understand which Costa Blanca
            North towns and neighbourhoods fit your lifestyle, budget,
            priorities and long-term plans.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/services/area-match"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Request your Area Match
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Schedule an introduction
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}