export const metadata = {
  title:
    "4-Day Buyer Discovery Trip Costa Blanca North | Buy Property in Spain",
  description:
    "A 4-day Buyer Discovery Trip on the Costa Blanca North for serious buyers who want to buy property in Spain. With a private chauffeur, 5-star accommodation, Area Match Report, selected individual property viewings, area tours, lifestyle experiences and safe buying guidance.",
  keywords: [
    "4-day Buyer Discovery Trip Costa Blanca North",
    "Buyer Discovery Trip Spain",
    "buy property in Spain",
    "buy a house in Spain",
    "buy a home in Spain",
    "buy property Costa Blanca North",
    "buy house Costa Blanca North",
    "buy villa Costa Blanca North",
    "property viewing trip Spain",
    "property viewings Spain",
    "individual property viewings Spain",
    "property viewings Costa Blanca North",
    "selected property viewings Spain",
    "Area Match Report Spain",
    "property buying guidance Spain",
    "safe property purchase Spain",
    "buy holiday home Spain",
    "relocate to Spain",
    "buy house Moraira",
    "buy villa Moraira",
    "buy house Jávea",
    "buy villa Jávea",
    "buy property Altea",
    "buy house Benissa",
    "buy apartment Calpe",
    "buy property Dénia",
    "safely buy a house in Spain",
  ],
  alternates: {
    canonical: "/en/buyer-discovery-trip-costa-blanca-north",
  },
  openGraph: {
    title:
      "4-Day Buyer Discovery Trip Costa Blanca North | Buy Property in Spain",
    description:
      "Discover in 4 days where you should buy property on the Costa Blanca North. With a private chauffeur, 5-star accommodation, Area Match Report, selected property viewings, experts, area tours and like-minded buyers.",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/discover-card.png",
        width: 1200,
        height: 630,
        alt: "4-day Buyer Discovery Trip Costa Blanca North for buying property in Spain",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const buyerDiscoveryTripStructuredData = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "4-Day Buyer Discovery Trip Costa Blanca North",
  description:
    "A fully organised 4-day property and lifestyle trip for international buyers who want to buy a house, villa, apartment or holiday home on the Costa Blanca North in Spain, including intake, Area Match Report and selected individual property viewings.",
  touristType: [
    "International buyers",
    "British buyers",
    "Scandinavian buyers",
    "European buyers",
    "Holiday home buyers",
    "Buyers planning to relocate to Spain",
  ],
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Day 1: Arrival, private transfer, intake and welcome moment",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Day 2: Area tour through Moraira, Benissa and Calpe with selected property viewings and lifestyle experiences",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Day 3: Jávea and Dénia with individual property viewings, lunch and local activities",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Day 4: Altea, expert meetings, buying process and next steps",
      },
    ],
  },
  areaServed: [
    "Costa Blanca North",
    "Costa Blanca Norte",
    "Moraira",
    "Jávea",
    "Javea",
    "Altea",
    "Benissa",
    "Calpe",
    "Dénia",
    "Denia",
  ],
};

export default function BuyerDiscoveryTripPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buyerDiscoveryTripStructuredData),
        }}
      />

      <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
        {/* HERO */}
        <section className="relative min-h-[90vh] overflow-hidden">
          <img
            src="/images/discover-card.png"
            alt="4-day Buyer Discovery Trip Costa Blanca North for buyers who want to buy property in Spain"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                4-Day Buyer Discovery Trip Costa Blanca North
              </p>

              <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
                Buying property in Spain? Discover in 4 days where you truly
                want to live on the Costa Blanca North.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                A fully organised property and lifestyle trip with a private
                chauffeur, carefully matched like-minded buyers, 5-star
                accommodation, Area Match Report, area tours, selected
                individual property viewings and meetings with the specialists
                who make a safe property purchase in Spain possible.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Apply for Your 4-Day Buyer Discovery Trip
                </a>

                <a
                  href="/regions"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
                >
                  Explore the regions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Clarity before you buy
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Buying property in Spain should not start with random
                  viewings. It should start with finding the right area.
                </h2>
              </div>

              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  If you want to buy a house on the Costa Blanca North, you need
                  to look beyond beautiful photos, estate agent descriptions and
                  individual property listings. You need to feel the right area,
                  but you also need to see homes that genuinely match your
                  budget, family situation, wishes, Area Match Report and the
                  lifestyle you want to create in Spain.
                </p>

                <p className="mt-6">
                  Our Buyer Discovery Trip is a carefully curated 4-day property
                  and lifestyle experience on the Costa Blanca North. It has
                  been created for British, European, Scandinavian and other
                  international buyers who want to buy a house, villa, apartment,
                  new-build property or holiday home in Spain with more clarity,
                  better information and less risk.
                </p>

                <p className="mt-6">
                  This is not a standard viewing trip where you are driven from
                  one property to the next without a clear strategy. It is a
                  fully organised group experience with like-minded people, a
                  private chauffeur, individual moments of privacy, selected
                  property viewings, local lifestyle experiences and direct
                  meetings with the experts you need to buy property in Spain in
                  a safe and informed way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO QUICK VALUE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              For serious property buyers
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              The 4-day discovery trip for anyone who wants to buy property on
              the Costa Blanca North.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Buy property in Spain",
                "Buy property Costa Blanca North",
                "Holiday home in Spain",
                "Buy property with guidance",
                "Selected property viewings",
                "Area Match Report for buyers",
                "Buy a villa in Moraira or Jávea",
                "Buy an apartment in Calpe or Dénia",
                "Understand the buying process in Spain",
                "Meet like-minded buyers",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              You receive a realistic understanding of the area and of homes
              that are carefully pre-selected based on your intake, budget, Area
              Match Report, property wishes and lifestyle. You do not simply see
              houses. You see homes that fit the place where you may actually
              want to live.
            </p>
          </div>
        </section>

        {/* FIRST WE GET TO KNOW YOU */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              First, we get to know you
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Your trip starts with your lifestyle, not with property listings.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Before arrival, we begin with your complimentary Area Match
                  Report and a personal intake call. We go through your goals,
                  budget, family situation, daily routines, interests, desired
                  lifestyle, relocation plans, safety concerns and long-term
                  priorities.
                </p>

                <p className="mt-6">
                  Only when we understand your profile do we create your
                  programme. This allows us to focus on the areas and properties
                  that genuinely fit your life, instead of spending time on
                  places that look attractive online but do not work in practice.
                </p>

                <p className="mt-6">
                  The intake also helps us decide which local experts,
                  international residents, entrepreneurs or other buyers may be
                  relevant for you. Where useful, we prepare these introductions
                  in advance, so every meeting has a clear purpose.
                </p>
              </div>

              <div className="rounded-[32px] bg-[#f6f1ea] p-8">
                <p className="text-lg leading-relaxed text-stone-700">
                  Are you looking for a quiet villa near Moraira? A more social
                  life in Jávea? An elegant setting near Altea? More space and
                  authenticity around Benissa? Seafront apartments and new-build
                  properties in Calpe? Or a lively year-round town with services
                  such as Dénia?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED PROPERTY VIEWINGS */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Selected individual property viewings
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                View properties that match your intake, your area and the
                lifestyle you want.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                During the four days, you do not only experience the regions. You
                also have the opportunity to view a carefully selected number of
                properties that fit your personal profile. These viewings are not
                chosen at random. They are selected based on your intake, Area
                Match Report, budget, family situation, preferred surroundings,
                property type and lifestyle.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                This may include a villa in Moraira, a sea-view home in Jávea, an
                elegant property near Altea, a finca or spacious home in Benissa,
                an apartment or new-build property in Calpe, or a home in Dénia
                for buyers who prefer more year-round town life and services.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                The goal is not to show as many properties as possible. The goal
                is to show the right properties. You should be able to compare
                feeling, location, build quality, accessibility, future value,
                practical risks and daily life around the home before taking the
                next step.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Properties matched with your intake",
                  "Selection based on the Area Match Report",
                  "Viewings linked to the right area",
                  "Focus on budget and long-term suitability",
                  "Comparison of property types and locations",
                  "Honest guidance about risks and opportunities",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                This helps you move from simply searching online to understanding
                which homes genuinely fit you. It makes the buying journey safer,
                more efficient and far more realistic.
              </p>
            </div>
          </div>
        </section>

        {/* LIKE-MINDED PEOPLE */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Travel with like-minded people
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Meet people who are in the same stage of the journey as you.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                The Buyer Discovery Trip is organised as a carefully curated
                small-group experience. You travel with people who match your
                interests, stage of life and plans for Spain.
              </p>

              <p className="mt-6">
                We bring you together with buyers who have similar goals, pace,
                lifestyle and expectations. Some groups are more international.
                Other groups bring together British, Scandinavian, Northern
                European or English-speaking buyers who value cultural and
                language familiarity.
              </p>

              <p className="mt-6">
                We support British, Irish, Dutch, Belgian, German, Swiss,
                Scandinavian and other international buyers who are exploring a
                future on the Costa Blanca North.
              </p>

              <p className="mt-6">
                For many clients, the connections with other participants become
                one of the most valuable parts of the trip. A shared lunch, a
                local activity or an honest conversation can become the start of
                new friendships, useful contacts and a stronger sense of safety
                before you have even moved to Spain.
              </p>
            </div>
          </div>
        </section>

        {/* ARRIVAL */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              From arrival, everything is arranged
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight">
              You arrive, we take care of the details.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-serif text-3xl">Private airport transfer</h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  You arrive at Alicante Airport, where your private transfer
                  takes you comfortably to your hotel, resort or finca.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl">
                  Your own 5-star accommodation
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  You stay in a carefully selected 5-star hotel, luxury suite,
                  boutique resort or finca. When you want peace and privacy, you
                  can retreat to your own private environment.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl">Personal welcome</h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  During a relaxed welcome moment, we go through your goals,
                  answer your first questions and explain the programme for the
                  next four days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REAL REGIONS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Discover the real Costa Blanca North
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                We show you more than the best-known tourist areas.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                During the Buyer Discovery Trip, you experience the regions from
                a real-life perspective. We visit places that matter for your
                future lifestyle, not only the places that look good in a
                brochure.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Moraira</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Calm and elegant coastal living with villas, coves and an
                  exclusive yet relaxed residential atmosphere.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Jávea</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  A lively international lifestyle with beaches, restaurants,
                  sport, schools and year-round activity.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Altea</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Culture, beauty, sea views and Mediterranean character in a
                  more artistic and sophisticated setting.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Benissa</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Space, privacy, authenticity, countryside living and hidden
                  coves along the coast.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Calpe</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Beachfront living, marina life, apartments, new developments
                  and a more active atmosphere.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Dénia</h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Gastronomy, harbour life, daily services and a lively town that
                  works very well all year round.
                </p>
              </div>
            </div>

            <p className="mt-12 max-w-4xl text-lg leading-relaxed text-stone-600">
              We help you understand the differences between the areas:
              atmosphere, property types, schools, healthcare, driving
              distances, international community, restaurants, sports
              facilities, daily services, rental potential, build quality and
              long-term practical suitability.
            </p>
          </div>
        </section>

        {/* EXPERTS */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Meet the experts you need before buying
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Get answers before you make big decisions.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                During your Buyer Discovery Trip, we introduce you to trusted
                independent specialists and local contacts who help you
                understand the practical, legal and financial steps before you
                buy property in Spain.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Independent property lawyer",
                  "Spanish notary",
                  "Mortgage specialist",
                  "Banking contact",
                  "Insurance specialist",
                  "Building surveyor or technical advisor",
                  "Local property expert",
                  "Relocation support where relevant",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                These meetings are designed to give you greater certainty around
                the legal process, mortgage options, banking requirements,
                insurance, purchase costs, annual ownership costs,
                documentation, building checks and common mistakes international
                buyers should avoid.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                You can ask your questions directly, understand who is
                responsible for what and leave the trip with a much clearer view
                of how a safe property purchase in Spain actually works.
              </p>
            </div>
          </div>
        </section>

        {/* SAFETY */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              More confidence at every step
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              For international buyers, buying in Spain is not only about
              emotion. It is also about safety, control and the right advice.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Clearer understanding of legal steps",
                "Insight into taxes and purchase costs",
                "Introduction to an independent lawyer",
                "Opportunity to discuss building questions",
                "Information about finance and bank requirements",
                "Better control over risks before buying",
                "Honest guidance about areas and property types",
                "Support for the next step after the trip",
                "A safer decision before moving forward",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/80 p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              We do not promise that every property is right. On the contrary,
              we help you see what fits, what does not fit and which questions
              must be checked before you make an offer. That is exactly where
              confidence begins.
            </p>
          </div>
        </section>

        {/* LIFESTYLE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Experience the lifestyle, not only the property market
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              A home is only one part of the decision.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              You also need to understand how your life could feel here. That is
              why the Buyer Discovery Trip includes lifestyle experiences that
              match your interests and the area you are exploring.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Local lunches and fine dining",
                "Wine tastings",
                "Golf clubs and golf tour",
                "Beach clubs",
                "Marinas and yacht clubs",
                "Wellness and spa",
                "Hiking and nature routes",
                "Cultural visits",
                "Cooking workshop or pasta making",
                "Business or networking introductions",
                "Local gatherings",
                "Activities with like-minded future residents",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium text-[#1e2a3a]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              Do you want to join shared lunches, explore neighbourhoods and
              feel what life is really like? Then you join the group. Do you want
              a quiet moment and privacy? Then you can retreat to your own
              5-star hotel, suite or finca without losing the structure of the
              trip.
            </p>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                What we do for you
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                We guide, coordinate and help you make a better decision.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                We coordinate the entire experience, guide you through the
                different areas, select relevant property viewings and introduce
                you to trusted independent specialists. This allows you to make
                better-informed decisions before buying property in Spain.
              </p>

              <p className="mt-6">
                We help you compare areas, understand practical differences, ask
                the right questions, assess properties more calmly and avoid
                common mistakes.
              </p>

              <p className="mt-6">
                Our role is not to pressure you into buying. Our role is to help
                you choose the right area, the right property type and the right
                next step.
              </p>

              <p className="mt-6">
                If an area does not fit your profile, we will say so. If a
                property or property type may create legal, practical, technical
                or lifestyle concerns, we help you understand that before you
                commit.
              </p>
            </div>
          </div>
        </section>

        {/* INCLUDED */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              What is included
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Your 4-day Buyer Discovery Trip includes what you need for a
              clearer and safer first decision.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Complimentary personal intake call before arrival",
                "Personal lifestyle and area profile",
                "Area Match Report for Costa Blanca North",
                "Fully organised 4-day programme",
                "Private chauffeur and transfer from Alicante",
                "Accommodation in a selected 5-star hotel, resort, suite or finca",
                "Guided area visits across Costa Blanca North",
                "Selected individual property viewings",
                "Properties matched with budget, area and lifestyle",
                "Introductions to legal, banking, mortgage and insurance contacts",
                "Meeting with a building surveyor or technical advisor where relevant",
                "Lifestyle experiences tailored to your interests",
                "Carefully matched small group with like-minded buyers",
                "Time for personal questions and decision support",
                "Clear next steps after the trip",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/80 p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AFTER THE TRIP */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                What you know after the trip
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                You do not leave with vague impressions. You leave with clarity.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Which areas on the Costa Blanca North fit your lifestyle",
                "Which areas are less suitable for you",
                "Which property type fits your budget and goals",
                "Which properties feel realistic after real viewings",
                "How the buying process in Spain works",
                "Which legal and financial questions need to be checked",
                "What daily life after purchase could look like",
                "Which experts can support you",
                "What type of community you could become part of",
                "Whether you are ready for the next step",
              ].map((item) => (
                <div key={item} className="rounded-[28px] bg-white p-7 shadow-sm">
                  <p className="text-lg leading-relaxed text-stone-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Is this trip right for you?
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Perfect for serious buyers who want to understand the Costa Blanca
              North before choosing a property.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "British, European and international buyers exploring Costa Blanca North",
                "International buyers who want to buy property in Spain",
                "Families considering a move to Spain",
                "Retirees planning a new lifestyle",
                "Entrepreneurs and remote workers",
                "Holiday home and second-home buyers",
                "Buyers comparing Moraira, Jávea, Altea, Benissa, Calpe and Dénia",
                "Clients who want safe guidance before serious viewings begin",
                "People who want to meet like-minded future residents before moving",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO TEXT */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Buy a house, villa or apartment in Spain
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              A safer route for buyers who want to purchase property on the
              Costa Blanca North.
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
              <p>
                Many international buyers start by searching for "buy property
                in Spain", "villa for sale Moraira", "apartment Calpe",
                "property Jávea" or "holiday home Costa Blanca". That is a
                natural starting point, but it rarely gives enough clarity for a
                safe buying decision.
              </p>

              <p>
                Our 4-day Buyer Discovery Trip helps you move from online
                searches and dream images to a concrete understanding of areas,
                properties, legal steps, finance, daily life and risks. You see
                selected properties, experience the areas and speak with
                specialists before deciding how you want to move forward.
              </p>

              <p>
                The trip is especially relevant if you are considering buying a
                house in Moraira, a villa in Jávea, a property in Altea, a finca
                in Benissa, an apartment in Calpe or a home in Dénia. Each place
                has its own atmosphere, practical advantages and limitations. We
                help you see the difference before you buy.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Frequently asked questions
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Questions about buying property in Spain and our Buyer Discovery
                Trip.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question:
                    "Is the Buyer Discovery Trip a standard property viewing trip in Spain?",
                  answer:
                    "No. It is a 4-day property and lifestyle trip where you experience the areas, meet relevant experts and view carefully selected properties that match your intake, Area Match Report, budget and lifestyle.",
                },
                {
                  question: "Will I view properties during the trip?",
                  answer:
                    "Yes. You will see a selective number of properties that match your needs, preferred area, budget and future lifestyle. The focus is on quality and relevance, not on showing as many properties as possible.",
                },
                {
                  question: "Is the trip private or in a group?",
                  answer:
                    "The trip is organised as a carefully curated small-group experience with like-minded buyers. You have your own privacy, your own accommodation and individual breaks, but the experience itself is built around a matched group.",
                },
                {
                  question: "Which areas do we visit on the Costa Blanca North?",
                  answer:
                    "Depending on your profile, the programme may include Moraira, Jávea, Altea, Benissa, Calpe, Dénia and relevant surrounding areas.",
                },
                {
                  question: "Is the trip suitable for international buyers?",
                  answer:
                    "Yes. The trip is highly relevant for British, European, Scandinavian and other international buyers who want to buy property in Spain but first want to understand the area, process, safety, costs and risks.",
                },
                {
                  question: "Do you also help with legal and financial questions?",
                  answer:
                    "We introduce you to an independent lawyer, mortgage specialist, banking contact, insurance specialist and, where relevant, a building surveyor or technical advisor, so you can ask the right questions before buying.",
                },
              ].map((item) => (
                <div key={item.question} className="rounded-[28px] bg-white p-8 shadow-sm">
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    {item.question}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 pb-32">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Apply for your Buyer Discovery Trip
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
              When you are seriously considering buying property in Spain, the
              most important decision is not only the house.
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
              It is about the right area, the right lifestyle, the right property
              and the right safety around you.
            </p>

            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
              Apply for your 4-day Buyer Discovery Trip and discover whether the
              Costa Blanca North truly fits your future in Spain.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Apply for Your 4-Day Buyer Discovery Trip
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
