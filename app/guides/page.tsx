export const metadata = {
  title: "Property Guides Spain | Nordic Move Spain",
  description:
    "Practical English-language guides for buying property in Spain, with a focus on Costa Blanca North, costs, regions, rental rules, legal checks, pets and area comparisons.",
};

const mainGuides = [
  {
    href: "/guides/best-areas-costa-blanca-north-retirees",
    label: "Retiree guide",
    title: "Best areas on Costa Blanca North for retirees",
    text:
      "A practical guide for Dutch, German, Swiss and other international buyers comparing Dénia, Moraira, Jávea, Altea, Benissa and Calpe.",
    details:
      "Compare access to healthcare, year-round amenities, mobility, peace and quiet, maintenance, community life, tourist pressure and long-term practical suitability.",
    bestFor:
      "Ideal for older buyers who want to understand which Costa Blanca North area fits their retirement lifestyle before buying.",
    cta: "Read the retiree guide →",
  },
  {
    href: "/guides/where-to-buy-property-costa-blanca-north",
    label: "Area guide",
    title: "Where to buy property on Costa Blanca North",
    text:
      "Choosing the right area is often more important than choosing the first beautiful property. This guide compares the key locations on Costa Blanca North before you start viewing homes.",
    details:
      "Compare Moraira, Jávea, Altea, Benissa, Calpe and Dénia on lifestyle, property type, daily amenities, off-season atmosphere and buyer profile.",
    bestFor:
      "Ideal for buyers who are still deciding which town or coastal area truly fits their future life in Spain.",
    cta: "Read the area guide →",
  },
  {
    href: "/guides/costs-rentals-real-life-checks-before-buying",
    label: "Honest buyer guide",
    title: "Costs, rentals and practical checks before buying",
    text:
      "A beautiful property can still be the wrong purchase if practical details are ignored. This guide explains what buyers often discover too late.",
    details:
      "Learn about hidden costs, tourist rental rules, electricity pylons, road noise, summer crowds, community rules, ownership costs and what to check before making an offer.",
    bestFor:
      "Ideal for Dutch, German and Swiss buyers who want a realistic picture before committing to a property.",
    cta: "Read the honest guide →",
  },
];

const moreGuides = [
  {
    href: "/guides/moraira-vs-javea",
    label: "Area comparison",
    title: "Moraira vs Jávea",
    text:
      "A practical comparison for buyers choosing between two of the most sought-after areas on Costa Blanca North.",
    useful:
      "Useful when you are deciding between peaceful villa living in Moraira and a more active international lifestyle in Jávea.",
  },
  {
    href: "/guides/buying-property-spain",
    label: "Buying in Spain",
    title: "Buying property in Spain",
    text:
      "A practical explanation of the Spanish buying process, including legal checks, deposits, notary steps, mortgages, purchase costs and what international buyers should prepare before signing.",
    useful:
      "Useful when you are at the beginning of your buying journey and want to understand the full process.",
  },
  {
    href: "/guides/common-mistakes-buyers-make",
    label: "Buyer mistakes",
    title: "Common mistakes when buying property",
    text:
      "Learn which mistakes buyers in Spain often make, from choosing the wrong area to overlooking community rules, legal checks, ownership costs and practical daily-life details.",
    useful:
      "Useful when you want to avoid emotional decisions and expensive surprises.",
  },
  {
    href: "/guides/homeowners-associations-spain",
    label: "Community rules",
    title: "Homeowners’ associations in Spain",
    text:
      "Understand the rules of the comunidad de propietarios, community fees, meeting minutes, rental restrictions, shared maintenance, owner obligations and why these checks matter before buying.",
    useful:
      "Useful when you are considering an apartment, townhouse or property in an urbanisation.",
  },
  {
    href: "/guides/uk-tax-second-home-spain",
    label: "UK tax rules",
    title: "UK tax rules for a second home in Spain",
    text:
      "A practical guide for UK residents buying or owning a second home in Spain, including Spanish property taxes, Modelo 210, rental income, capital gains, double taxation and overseas property questions.",
    useful:
      "Useful for British buyers who want to understand UK and Spanish tax considerations before buying a second home in Spain.",
  },
  {
    href: "/guides/spanish-rules-netherlands",
    label: "Spanish rules",
    title: "Spanish rules that work differently from the Netherlands",
    text:
      "A practical guide for Dutch buyers about the differences between the Dutch and Spanish systems, including the notary, Registro de la Propiedad, Catastro, community rules, tourist rentals, renovations and tax.",
    useful:
      "Useful when you want to avoid buying in Spain based on Dutch assumptions.",
  },
  {
    href: "/guides/pets-in-spain",
    label: "Living with pets",
    title: "Pets in Spain: everything you need to know",
    text:
      "A practical guide for buyers and homeowners about pets in Spain, including travelling with a dog or cat, community rules, vets, insurance, beaches, rental homes and daily life on the Costa Blanca.",
    useful:
      "Useful when your dog or cat is moving to Spain with you or when you want to understand the rules in apartments, urbanisations and public spaces.",
  },
  {
    href: "/guides/denia-versus-calpe",
    label: "Area comparison",
    title: "Dénia versus Calpe",
    text:
      "A practical comparison for buyers deciding between Dénia and Calpe, with attention to atmosphere, amenities, beaches, accessibility, property types, tourist pressure and off-season living.",
    useful:
      "Useful when you want to choose between the more urban, Spanish character of Dénia and the more compact coastal lifestyle of Calpe.",
  },
];

export default function PropertyGuidesSpainPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="bg-[#1e2a3a] px-8 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Buying property in Spain
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Practical guidance before you buy property in Spain.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Honest, practical and area-focused guides for Dutch, German, Swiss
            and other international buyers considering Costa Blanca North.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/area-match"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Request Your Area Match
            </a>

            <a
              href="/buyer-discovery-trip"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Discover the Buyer Discovery Trip
            </a>

            <a
              href="#guides"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-[#1e2a3a]"
            >
              Read before you buy
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Start with the right information
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              The right property decision starts with clear insight.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              Buying property in Spain is exciting, but it should not start with
              random viewings or beautiful photos alone.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Before making a decision, it is important to understand the area,
              legal checks, ownership costs, rental rules, community restrictions
              and practical daily-life details.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              These guides help you compare Costa Blanca North with more clarity
              before committing to a location, property search or buying trip.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN GUIDES */}
      <section id="guides" className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Start here
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Our key guides for serious buyers.
              </h2>
            </div>

            <a
              href="/contact"
              className="rounded-full border border-[#1e2a3a] px-7 py-3 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Need personal advice?
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {mainGuides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="group rounded-[34px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  {guide.label}
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  {guide.title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  {guide.text}
                </p>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {guide.details}
                </p>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {guide.bestFor}
                </p>

                <span className="mt-9 inline-block text-sm uppercase tracking-[0.2em] text-[#1e2a3a]">
                  {guide.cta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MORE GUIDES */}
      <section className="bg-[#e9dfd2] px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              More buyer guides
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Legal, financial and practical topics.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {moreGuides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="group rounded-[30px] bg-[#f6f1ea] p-8 transition hover:-translate-y-1 hover:bg-white"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#9b743d]">
                  {guide.label}
                </p>

                <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {guide.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {guide.text}
                </p>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {guide.useful}
                </p>

                <span className="mt-8 inline-block text-sm uppercase tracking-[0.2em] text-[#1e2a3a]">
                  Read the guide →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-12 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Need personal guidance?
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight">
            Not sure which area or property type fits your future life in Spain?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Our Area Match Assessment helps you compare locations on Costa
            Blanca North based on lifestyle, budget, amenities, long-term plans
            and practical needs.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/area-match"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Request Your Area Match
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Schedule an introduction
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
