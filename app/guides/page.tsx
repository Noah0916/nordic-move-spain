export const metadata = {
  title: "Property Guides Spain | Nordic Move Spain",
  description:
    "Practical English-language property guides for Spain, organised by region, legal topics, buying costs, taxes, financing and everyday life.",
};

const mainGuides = [
  {
    href: "/guides/best-areas-costa-blanca-north-retirees",
    label: "Retirement guide",
    title: "Best places on the Costa Blanca North for retirees",
    text:
      "A practical guide for British, Irish, Dutch, German, Scandinavian, Swiss and other international buyers comparing Dénia, Moraira, Jávea, Altea, Benissa and Calpe.",
    details:
      "Compare healthcare access, year-round amenities, mobility, tranquillity, maintenance, community life, tourist pressure and long-term everyday practicality.",
    bestFor:
      "Ideal for older buyers who want to understand which part of the Costa Blanca North best fits their retirement plans before buying.",
    cta: "Read the retirement guide →",
  },
  {
    href: "/guides/where-to-buy-property-costa-blanca-north",
    label: "Area guide",
    title: "Where should you buy property on the Costa Blanca North?",
    text:
      "Choosing the right area is often more important than choosing the first beautiful property. This guide compares the key locations on the Costa Blanca North before you start arranging viewings.",
    details:
      "Compare Moraira, Jávea, Altea, Benissa, Calpe and Dénia by lifestyle, property type, everyday amenities, atmosphere outside the high season and typical buyer profile.",
    bestFor:
      "Ideal for buyers who are still deciding which town or stretch of coast genuinely fits their future life in Spain.",
    cta: "Read the area guide →",
  },
  {
    href: "/guides/costs-rentals-real-life-checks-before-buying",
    label: "Practical buyer guide",
    title: "Costs, rentals and real-life checks before buying",
    text:
      "Even a beautiful property can be the wrong purchase when practical details are overlooked. This guide explains what buyers often discover too late.",
    details:
      "Learn about hidden costs, holiday-rental rules, electricity pylons, traffic noise, summer pressure, community rules, ongoing ownership costs and the checks worth making before an offer.",
    bestFor:
      "Ideal for international buyers who want a realistic overall picture before making a binding property decision in Spain.",
    cta: "Read the buyer guide →",
  },
];

const guideCategories = [
  {
    id: "region-and-location",
    label: "Region and location",
    title: "Choose the setting that fits your everyday life first.",
    description:
      "Compare coastal towns, inland areas and different living profiles before committing to a particular property or municipality.",
    guides: [
      {
        href: "/guides/moraira-vs-javea",
        label: "Area comparison",
        title: "Moraira vs. Jávea",
        text:
          "A practical comparison for buyers choosing between two of the most sought-after locations on the Costa Blanca North.",
        useful:
          "Useful if you are deciding between the quieter villa lifestyle of Moraira and the more varied, international everyday life of Jávea.",
      },
      {
        href: "/guides/denia-vs-calpe",
        label: "Area comparison",
        title: "Dénia vs. Calpe",
        text:
          "A comparison for buyers weighing Dénia against Calpe and looking at atmosphere, infrastructure, beaches, accessibility, property types, tourist pressure and life outside the main season.",
        useful:
          "Useful if you are choosing between Dénia's more urban, Spanish character and Calpe's more compact coastal lifestyle.",
      },
      {
        href: "/guides/coast-vs-inland-more-house-for-your-money",
        label: "Coast or inland",
        title: "Coast or inland: where do you get more house for your money?",
        text:
          "Compare popular coastal towns with inland areas including the Jalón Valley and Vall de Pop. See how the same budget can affect floor area, plot size, privacy, views and access to everyday amenities.",
        useful:
          "Useful if you are balancing proximity to the sea against more space, privacy and property value inland.",
      },
    ],
  },
  {
    id: "legal-and-buying-process",
    label: "Legal and buying process",
    title: "Understand the Spanish rules before you sign.",
    description:
      "From the purchase process and legal due diligence to owners' communities and the ways the Spanish system can differ from what international buyers are used to.",
    guides: [
      {
        href: "/guides/buying-property-spain",
        label: "Buying property in Spain",
        title: "Buying a property in Spain",
        text:
          "A practical explanation of the Spanish buying process, including legal checks, deposits, the notary appointment, financing, purchase costs and the documents international buyers should prepare before signing.",
        useful:
          "Useful if you are at the beginning of your property search and want to understand the entire process from first viewing to completion.",
      },
      {
        href: "/guides/how-long-does-it-take-to-buy-a-house-in-spain",
        label: "Buying timeline",
        title: "How long does it take to buy a house in Spain?",
        text:
          "A clear timeline from initial property selection and reservation through legal due diligence, the arras contract and possible mortgage approval to the notary appointment and key handover.",
        useful:
          "Useful if you want to know how many weeks or months to allow and which checks, documents or financing steps can cause delays.",
      },
      {
        href: "/guides/spanish-property-rules-international-buyers-should-know",
        label: "Spanish property rules",
        title: "Spanish property rules international buyers should understand",
        text:
          "A practical guide to aspects of the Spanish system that can differ from common expectations abroad, including the notary's role, Registro de la Propiedad, Catastro, community rules, holiday rentals, alterations and taxes.",
        useful:
          "Useful if you want to avoid making a Spanish property decision based on assumptions from your home country.",
      },
      {
        href: "/guides/homeowners-associations-spain",
        label: "Community rules",
        title: "Homeowners' associations in Spain",
        text:
          "Understand the comunidad de propietarios, community fees, meeting minutes, rental restrictions, communal maintenance, owner obligations and why these checks matter before buying.",
        useful:
          "Useful if you are considering an apartment, townhouse or property within an urbanisation.",
      },
      {
        href: "/guides/common-mistakes-buying-property-spain",
        label: "Buyer mistakes",
        title: "Common mistakes when buying property in Spain",
        text:
          "Learn which mistakes buyers commonly make in Spain, from choosing the wrong area to overlooking community rules, legal checks, ongoing ownership costs and practical everyday considerations.",
        useful:
          "Useful if you want to reduce emotional decision-making and avoid expensive surprises after completion.",
      },
    ],
  },
  {
    id: "costs-taxes-financing",
    label: "Costs, taxes and financing",
    title: "Calculate what buying and owning really cost.",
    description:
      "Get clarity on purchase taxes, total acquisition costs, mortgages, ongoing expenses and cross-border tax considerations for international owners.",
    guides: [
      {
        href: "/guides/total-cost-buying-property-spain",
        label: "Total purchase costs",
        title: "Total cost of buying a property in Spain",
        text:
          "A complete overview of the costs on top of the purchase price, including purchase tax, lawyer, notary, Land Registry, gestoría, valuation and possible financing costs.",
        useful:
          "Useful if you want to calculate how much cash you may actually need before reserving a property or signing a purchase contract.",
      },
      {
        href: "/guides/itp-iva-ajd-explained",
        label: "Purchase taxes",
        title: "ITP, IVA and AJD explained",
        text:
          "A clear explanation of the main Spanish taxes involved in a property purchase. Learn when ITP applies, when IVA and AJD apply and why resale and new-build properties are taxed differently.",
        useful:
          "Useful if you want to understand which purchase tax applies to your property and how much additional capital to allow beyond the purchase price.",
      },
      {
        href: "/guides/mortgage-costs-new-rules-spain",
        label: "Mortgage and costs",
        title: "Mortgage costs and current rules in Spain",
        text:
          "An up-to-date guide to Spanish mortgages, property valuations, energy certificates, the allocation of mortgage costs and the documents banks review before issuing final approval.",
        useful:
          "Useful if you plan to finance a property in Spain and want to reduce delays, valuation shortfalls or unexpected mortgage-related costs.",
      },
      {
        href: "/guides/tax-rules-second-home-spain",
        label: "Second-home tax",
        title: "Tax rules for a second home in Spain",
        text:
          "A practical overview of Spanish taxes for second-home owners, rental income and the cross-border tax questions that can arise depending on your country of tax residence.",
        useful:
          "Useful if you want to understand the Spanish tax side of ownership and identify which questions also need advice in your home country.",
      },
      {
        href: "/guides/cost-of-living-spain",
        label: "Living in Spain",
        title: "Cost of living in Spain",
        text:
          "A practical overview of spending on groceries, energy, transport, healthcare, insurance, restaurants, internet and other fixed and variable living costs.",
        useful:
          "Useful if you want to build a realistic monthly budget for relocation, a second home, retirement or a longer stay in Spain.",
      },
    ],
  },
  {
    id: "practical-life",
    label: "Practical life in Spain",
    title: "Plan everyday life after the key handover too.",
    description:
      "Practical guides on residency, taxes, healthcare, groceries, pets and daily life for people who plan to live, winter or spend extended periods in Spain.",
    guides: [
      {
        href: "/guides/living-in-spain-after-buying-a-house",
        label: "Living after purchase",
        title:
          "Living in Spain after buying a house: residency, taxes and healthcare explained",
        text:
          "A comprehensive guide for international owners who plan to live in Spain permanently, for most of the year or for part of the year. Understand residence registration, padrón, tax residency, healthcare and the home-country obligations that may need attention.",
        useful:
          "Useful if you are not only buying a property but also deciding which administrative, tax and healthcare steps fit your length of stay and personal situation.",
      },
      {
        href: "/guides/supermarket-prices-spain",
        label: "Groceries in Spain",
        title: "Supermarket prices in Spain",
        text:
          "An up-to-date comparison of everyday groceries at major Spanish supermarket chains, with example prices for milk, eggs, rice, pasta, olive oil and other frequently purchased products.",
        useful:
          "Useful if you want to estimate everyday spending in Spain and compare supermarkets by price, range and convenience.",
      },
      {
        href: "/guides/pets-in-spain",
        label: "Living with pets",
        title: "Pets in Spain: what owners need to know",
        text:
          "A practical guide for international buyers and owners covering travel with dogs or cats, community rules, vets, insurance, beaches, rental properties and everyday life on the Costa Blanca.",
        useful:
          "Useful if your dog or cat is moving to Spain with you or you want to understand the rules that can apply in apartments, urbanisations and public spaces.",
      },
    ],
  },
];

export default function EnglishPropertyGuidesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="bg-[#1e2a3a] px-8 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Buying property in Spain
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Practical guidance before you buy a property in Spain.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Clear, practical and region-focused guides for British, Irish,
            Dutch, German, Scandinavian, Swiss and other international buyers
            considering the Costa Blanca North.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Start your Area Match
            </a>

            <a
              href="/buyer-discovery-trip"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Explore the Buyer Discovery Trip
            </a>

            <a
              href="#guides"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-[#1e2a3a]"
            >
              Research before buying
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
              A good property decision starts with clear information.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              Buying a property in Spain is exciting, but it should not begin
              with random viewings or beautiful photos alone.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Before deciding, it helps to understand the area, legal checks,
              ongoing ownership costs, rental rules, community restrictions and
              practical details that affect everyday life.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              These guides help you compare the Costa Blanca North more clearly
              before committing to a town, a property search or a buying trip.
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
                Our key guides for serious property buyers.
              </h2>
            </div>

            <a
              href="/contact"
              className="rounded-full border border-[#1e2a3a] px-7 py-3 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Prefer personal guidance?
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

      {/* GUIDES BY TOPIC */}
      <section className="bg-[#e9dfd2] px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              Guides by topic
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Find the information that matches your stage of the buying process.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-stone-700">
              The articles are organised by region and location, legal topics,
              costs and financing, and practical life in Spain.
            </p>

            <nav
              aria-label="Property guide categories"
              className="mt-9 flex flex-wrap gap-3"
            >
              {guideCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="rounded-full border border-[#9b743d]/40 bg-[#f6f1ea] px-5 py-3 text-sm font-medium text-[#1e2a3a] transition hover:border-[#1e2a3a] hover:bg-white"
                >
                  {category.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-20">
            {guideCategories.map((category, categoryIndex) => (
              <section
                id={category.id}
                key={category.id}
                className={
                  categoryIndex === 0
                    ? "scroll-mt-24"
                    : "mt-24 scroll-mt-24 border-t border-[#9b743d]/25 pt-20"
                }
              >
                <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
                  <header>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                      {category.label}
                    </p>

                    <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                      {category.title}
                    </h3>

                    <p className="mt-6 leading-relaxed text-stone-700">
                      {category.description}
                    </p>
                  </header>

                  <div className="grid gap-8 md:grid-cols-2">
                    {category.guides.map((guide) => (
                      <a
                        key={guide.href}
                        href={guide.href}
                        className="group flex h-full flex-col rounded-[30px] bg-[#f6f1ea] p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                      >
                        <p className="text-sm uppercase tracking-[0.25em] text-[#9b743d]">
                          {guide.label}
                        </p>

                        <h4 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                          {guide.title}
                        </h4>

                        <p className="mt-5 leading-relaxed text-stone-700">
                          {guide.text}
                        </p>

                        <p className="mt-5 leading-relaxed text-stone-700">
                          {guide.useful}
                        </p>

                        <span className="mt-auto inline-block pt-8 text-sm uppercase tracking-[0.2em] text-[#1e2a3a]">
                          Read guide →
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-12 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Prefer personal guidance?
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight">
            Still deciding which area or property type fits your future life in
            Spain?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Our Area Match Assessment helps you compare places on the Costa
            Blanca North by lifestyle, budget, infrastructure, long-term plans
            and practical requirements.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Start your Area Match
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Book an introductory call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}