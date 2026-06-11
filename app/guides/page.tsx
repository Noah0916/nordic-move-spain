export const metadata = {
  title: "Buyer Guides | Nordic Move Spain | Buying Property in Spain",
  description:
    "Practical buyer guides for Dutch, German, Swiss and international buyers considering property on Costa Blanca North. Learn about areas, costs, legal checks, rentals, community rules and common mistakes before buying in Spain.",
};

export default function GuidesPage() {
  const mainGuides = [
    {
      href: "/guides/best-areas-costa-blanca-north-retirees",
      label: "Retiree Area Guide",
      title: "Best Areas on Costa Blanca North for Retirees",
      intro:
        "A practical guide for Dutch, German, Swiss and other international retirees comparing Dénia, Moraira, Jávea, Altea, Benissa and Calpe.",
      learn:
        "Compare healthcare access, year-round services, mobility, quiet living, maintenance, community life, tourist pressure and long-term practicality.",
      bestFor:
        "Best for older buyers who want to understand which Costa Blanca North area fits their retirement lifestyle before buying.",
      cta: "Read retiree guide",
    },
    {
      href: "/guides/where-to-buy-property-costa-blanca-north",
      label: "Area Guide",
      title: "Where to Buy Property on Costa Blanca North",
      intro:
        "Choosing the right area is often more important than choosing the first beautiful property. This guide compares the main Costa Blanca North towns before you start viewing homes.",
      learn:
        "Compare Moraira, Jávea, Altea, Benissa, Calpe and Dénia by lifestyle, property type, daily services, year-round atmosphere and buyer profile.",
      bestFor:
        "Best for buyers who are still deciding which town or coastal area truly fits their future life in Spain.",
      cta: "Read area guide",
    },
    {
      href: "/guides/honest-guide-buying-property-costa-blanca-north",
      label: "Honest Buyer Guide",
      title: "Costs, Rentals and Real-Life Checks Before Buying",
      intro:
        "A beautiful home can still be the wrong purchase if the practical details are ignored. This guide explains the things buyers often discover too late.",
      learn:
        "Understand hidden costs, tourist rental rules, electricity pylons, road noise, summer pressure, community rules, ownership costs and what to check before making an offer.",
      bestFor:
        "Best for Dutch, German and Swiss buyers who want a realistic view before committing to a property.",
      cta: "Read honest guide",
    },
  ];

  const moreGuides = [
    {
      href: "/guides/moraira-vs-javea",
      label: "Area Comparison",
      title: "Moraira vs Jávea",
      text:
        "A practical comparison for buyers choosing between two of the most desirable areas on Costa Blanca North.",
      bestFor:
        "Useful if you are deciding between calm villa living in Moraira and a more active international lifestyle in Jávea.",
    },
    {
      href: "/guides/buying-property-spain",
      label: "Buying in Spain",
      title: "Buying Property in Spain",
      text:
        "A practical overview of the Spanish buying process, including legal checks, deposits, notary steps, mortgages, purchase costs and what international buyers should prepare before signing.",
      bestFor:
        "Useful if you are at the beginning of your buying journey and want to understand the full process.",
    },
    {
      href: "/guides/common-mistakes-buying-property-spain",
      label: "Buyer Mistakes",
      title: "Common Mistakes Buyers Make",
      text:
        "Learn the most common mistakes buyers make in Spain, from choosing the wrong area to overlooking community rules, legal checks, ownership costs and practical daily-life issues.",
      bestFor:
        "Useful if you want to avoid emotional decisions and expensive surprises.",
    },
    {
      href: "/guides/homeowners-association-spain",
      label: "Community Rules",
      title: "Homeowners Associations in Spain",
      text:
        "Understand comunidad de propietarios rules, community fees, meeting minutes, rental restrictions, shared maintenance, owner obligations and why these checks matter before buying.",
      bestFor:
        "Useful if you are considering an apartment, townhouse or property in an urbanisation.",
    },
    {
      href: "/guides/dutch-tax-second-home-spain",
      label: "Dutch Tax Rules",
      title: "Dutch Tax Rules for a Second Home",
      text:
        "A guide for Dutch residents buying a second home in Spain, including Box 3 considerations, Spanish property taxes, rental income and cross-border ownership questions.",
      bestFor:
        "Useful for Dutch buyers who want to understand tax topics before purchasing abroad.",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[62vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Buyer guides for buying property on Costa Blanca North"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[62vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Buyer Guides
            </p>

            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1] text-white md:text-6xl">
              Practical guidance before buying property in Spain.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              Honest, practical and area-focused guides for Dutch, German, Swiss
              and other international buyers considering Costa Blanca North.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
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
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Read before you buy
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                The right property decision starts with the right information.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Buying property in Spain is exciting, but it should not start
                with random viewings or beautiful photos alone.
              </p>

              <p className="mt-6">
                Before making a decision, buyers should understand the area,
                legal checks, ownership costs, rental rules, community
                restrictions and real-life details that can affect daily comfort.
              </p>

              <p className="mt-6">
                These guides help you compare Costa Blanca North with more
                clarity before committing to a location, property search or
                buying trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN GUIDES */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Start here
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Our key guides for serious buyers.
              </h2>
            </div>

            <a
              href="/services/area-match"
              className="w-fit rounded-full border border-[#1e2a3a] px-7 py-3 text-sm uppercase tracking-[0.18em] text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Need personal advice?
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {mainGuides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="group flex min-h-[430px] flex-col justify-between rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                    {guide.label}
                  </p>

                  <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {guide.title}
                  </h3>

                  <p className="mt-5 text-base leading-relaxed text-stone-600">
                    {guide.intro}
                  </p>

                  <p className="mt-5 text-base leading-relaxed text-stone-600">
                    {guide.learn}
                  </p>

                  <div className="mt-6 rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                      {guide.bestFor}
                    </p>
                  </div>
                </div>

                <span className="mt-8 inline-block text-xs uppercase tracking-[0.25em] text-[#1e2a3a]">
                  {guide.cta} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MORE GUIDES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              More buyer guides
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Legal, financial and practical topics.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {moreGuides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="group rounded-[28px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                      {guide.label}
                    </p>

                    <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                      {guide.title}
                    </h3>

                    <p className="mt-5 text-base leading-relaxed text-stone-600">
                      {guide.text}
                    </p>

                    <div className="mt-5 rounded-2xl bg-[#f6f1ea] p-5">
                      <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                        {guide.bestFor}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs uppercase tracking-[0.25em] text-[#1e2a3a]">
                    Read guide →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Need personal guidance?
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-tight">
            Not sure which area or property type fits your future life in Spain?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Our Area Match Assessment helps you compare Costa Blanca North
            locations based on lifestyle, budget, services, long-term plans and
            practical needs.
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