export const metadata = {
  title:
    "Buyer Discovery Trips & Private Property Tours Costa Blanca North | Nordic Move Spain",
  description:
    "Start with a personal Area Match, one-to-one consultation and a focused shortlist of up to 10 properties. We search across multiple agencies and our local network, including exclusive, off-market and pre-market opportunities, before you choose a private Buyer Tour or curated small-group Discovery Trip on the Costa Blanca North.",
  keywords: [
    "Buyer Discovery Trip Costa Blanca North",
    "private property tour Costa Blanca",
    "private buyer tour Spain",
    "house hunting trip Spain",
    "property viewing trip Spain",
    "buy property Costa Blanca North",
    "buy luxury villa Costa Blanca North",
    "buy villa Moraira",
    "buy villa Javea",
    "buy property Altea",
    "buy property Benissa",
    "Area Match Report Spain",
    "independent buyer representation Spain",
    "buyer's agent Costa Blanca",
    "property due diligence Spain",
    "safe property purchase Spain",
    "relocate to Costa Blanca",
    "off market property Costa Blanca",
    "exclusive property Costa Blanca",
    "pre market property Costa Blanca",
  ],
  alternates: {
    canonical: "/en/buyer-discovery-trip-costa-blanca-north",
  },
  openGraph: {
    title:
      "Buyer Discovery Trips & Private Property Tours Costa Blanca North | Nordic Move Spain",
    description:
      "From Area Match and a focused shortlist to broader market access, private viewings, small-group discovery trips, independent experts and safer buyer-side guidance on the Costa Blanca North.",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/discover-card.png",
        width: 1200,
        height: 630,
        alt: "Buyer Discovery Trip and private property tour on the Costa Blanca North",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const buyerDiscoveryStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Buyer Discovery Trips and Private Buyer Tours Costa Blanca North",
  description:
    "Buyer-side property discovery service for international buyers on the Costa Blanca North, including Area Match, personal consultation, a focused shortlist of up to 10 properties, broader market search across multiple agencies and local networks, private or small-group viewing trips, expert introductions and purchase support.",
  provider: {
    "@type": "Organization",
    name: "Nordic Move Spain",
  },
  areaServed: [
    "Costa Blanca North",
    "Moraira",
    "Jávea",
    "Javea",
    "Altea",
    "Benissa",
    "Calpe",
    "Dénia",
    "Denia",
  ],
  audience: {
    "@type": "Audience",
    audienceType:
      "International property buyers, second-home buyers, relocating families and luxury villa buyers",
  },
};

export default function BuyerDiscoveryTripPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buyerDiscoveryStructuredData),
        }}
      />

      <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
        {/* HERO */}
        <section className="relative min-h-[90vh] overflow-hidden">
          <img
            src="/images/discover-card.png"
            alt="Private Buyer Tour and Buyer Discovery Trip on the Costa Blanca North"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Private Buyer Tours & Small-Group Discovery Trips
              </p>

              <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
                Find the right area first. Then view the homes that genuinely
                fit your life in Spain.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                Start with your personal Area Match Report and a one-to-one
                consultation. We then narrow the market to a focused shortlist
                of up to 10 relevant properties, often supported by video tours,
                before you choose a private Buyer Tour or a carefully curated
                small-group Discovery Trip on the Costa Blanca North.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Discuss Your Buyer Journey
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
                  Clarity before viewings
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Buying property in Spain should not begin with random listings.
                </h2>
              </div>

              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Beautiful photos and estate agent descriptions can make almost
                  every property look attractive. But the right home only works
                  when the location, daily lifestyle, practical needs, budget and
                  long-term plans also fit.
                </p>

                <p className="mt-6">
                  That is why Nordic Move Spain starts with you, not with a sales
                  listing. We first help you understand which areas on the Costa
                  Blanca North suit your life. Only after that do we narrow the
                  property market to homes that make sense for your personal
                  profile.
                </p>

                <p className="mt-6">
                  The result is a more focused buyer journey: fewer irrelevant
                  viewings, clearer comparisons, better questions and more room
                  for independent legal and technical checks before you commit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Your buyer journey
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              From Area Match to a focused shortlist, then to the right viewing
              experience.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Personal Area Match",
                  text: "We identify the Costa Blanca North areas that best fit your lifestyle, practical needs, priorities and plans.",
                },
                {
                  number: "02",
                  title: "One-to-one consultation",
                  text: "We discuss your report in detail and refine your budget, property wishes, family situation, timing and long-term goals.",
                },
                {
                  number: "03",
                  title: "Shortlist of up to 10 homes",
                  text: "We research a focused selection of properties that closely match your Area Match and personal brief, often with video tours where available.",
                },
                {
                  number: "04",
                  title: "Choose how you visit",
                  text: "Continue with a private Buyer Tour or join a carefully matched small-group Discovery Trip with viewings, expert meetings and local experiences.",
                },
              ].map((step) => (
                <div key={step.number} className="rounded-[28px] bg-[#f6f1ea] p-7">
                  <p className="text-sm font-medium tracking-[0.2em] text-[#c8a063]">
                    {step.number}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                    {step.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AREA MATCH + SHORTLIST */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Area Match first
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                First we understand where you should live. Then we focus on the
                homes that fit.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                Your journey begins with your complimentary personal Area Match
                Report. We then schedule a one-to-one conversation to go through
                the report together and sharpen the brief around your budget,
                preferred property type, family situation, daily routines,
                accessibility, schools or healthcare, social life, privacy,
                relocation plans and long-term priorities.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Based on that conversation and your Area Match profile, we
                research and prepare a focused shortlist of up to 10 properties
                that closely match your priorities. Where available, we also use
                video tours or additional video material so you can assess homes
                before travelling to Spain.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                The purpose is not to send you endless listings. It is to reduce
                hundreds of possibilities to a small number of realistic homes
                that fit both the property you want and the location and lifestyle
                identified in your Area Match Report.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Up to 10 focused property options",
                  "Selection linked to your Area Match",
                  "Personal review of your wishes and report",
                  "Video tours where available",
                  "Budget and long-term suitability considered",
                  "No pressure to view irrelevant listings",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRIVATE VS GROUP */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Choose the experience that suits you
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Continue privately or discover the area with carefully matched
                like-minded buyers.
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[40px] bg-white p-10 shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  Private Buyer Tour
                </p>
                <h3 className="mt-4 font-serif text-4xl text-[#1e2a3a]">
                  A fully personal property and area visit built around your
                  shortlist.
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Your route, viewings and schedule are organised around your
                  personal brief. We can help coordinate local transport,
                  transfers and suitable accommodation so your time in Spain is
                  focused on the places and properties that matter to you.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Depending on your stage in the buying process, we can also
                  arrange meetings with relevant independent professionals such
                  as a property lawyer, mortgage specialist and building surveyor
                  or technical advisor.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  A private tour is ideal if you want maximum flexibility,
                  privacy and a programme tailored entirely to your own buying
                  criteria and pace.
                </p>
              </div>

              <div className="rounded-[40px] bg-[#1e2a3a] p-10 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  Small-Group Discovery Trip
                </p>
                <h3 className="mt-4 font-serif text-4xl">
                  Explore property and lifestyle with buyers in a similar stage
                  of the journey.
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Our group trips bring together carefully matched buyers with
                  similar plans, expectations or interests. You still see
                  relevant properties and have time for personal questions, but
                  you also share selected area visits, meals and experiences with
                  people who are considering a similar future in Spain.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-white/80">
                  The lifestyle experiences are discussed in advance and shaped
                  around the interests of the participants. Depending on the
                  group, this could include a yacht trip, making local olive oil,
                  gastronomy, nature, golf, wellness, cultural visits or another
                  local experience that helps you understand the area beyond the
                  property market.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-white/80">
                  The aim is not entertainment for its own sake. It is to help
                  you feel what everyday life, community and leisure could really
                  look like before you choose where to buy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BUYER SIDE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              On the buyer&apos;s side
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Our role is to help you make the right decision, not to sell you a
              particular property.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Nordic Move Spain works on the buyer&apos;s side. We do not rely
                  on a seller paying us a sales commission to steer you towards a
                  particular home. That allows our focus to remain on whether a
                  property genuinely suits you and whether the important risks
                  have been properly investigated before you proceed.
                </p>

                <p>
                  If an area does not fit your profile, we will say so. If a
                  property raises practical, technical, legal or lifestyle
                  concerns, the right response may be to investigate further,
                  renegotiate or walk away.
                </p>

                <p>
                  When you become seriously interested in a property, the formal
                  legal and technical investigations are carried out by
                  independent professionals such as your property lawyer and
                  building surveyor. Each professional remains responsible for
                  their own advice, checks and reporting.
                </p>

                <p>
                  We help coordinate that process, make sure the relevant people
                  are connected and help you understand the next steps. Our
                  independence means there is no seller-side incentive for us to
                  minimise concerns simply to get a sale completed.
                </p>
              </div>

              <div className="rounded-[32px] bg-white/80 p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  What this means in practice
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    "No pressure to buy a specific property",
                    "Independent lawyer for legal due diligence",
                    "Independent surveyor or technical advisor for building checks",
                    "Clear separation between sales and professional investigations",
                    "Space to investigate concerns before committing",
                    "Support to proceed, renegotiate or walk away",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-white p-5">
                      <p className="font-medium text-[#1e2a3a]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* BROADER MARKET ACCESS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Broader access to the market
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              We represent the buyer, not the property.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Because Nordic Move Spain is not paid by the seller or selling
                  agent to promote a particular home, we are not tied to one estate
                  agency, one portfolio or one developer. We start with your brief
                  and search for the property that fits you, rather than starting
                  with a property that someone needs to sell.
                </p>

                <p>
                  After your Area Match Report and personal consultation, we can
                  approach estate agents, developers and property professionals
                  across the Costa Blanca North on your behalf. This gives us a
                  broader view of the market and lets us compare opportunities
                  across multiple agencies instead of limiting your search to one
                  agent&apos;s listings.
                </p>

                <p>
                  Our local network also gives us access to exclusive listings,
                  off-market opportunities and properties that may be shared with us
                  before they are advertised publicly. Agents and local contacts can
                  contact us directly when they know we represent a serious buyer
                  with a clear search profile.
                </p>

                <p>
                  This does not mean every suitable property will be off-market or
                  exclusive. It means we can search more widely, ask the market
                  proactively and bring together public listings and opportunities
                  from our network into one focused search for you.
                </p>
              </div>

              <div className="rounded-[32px] bg-[#f6f1ea] p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  What broader access can mean for you
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    "Search across multiple estate agencies",
                    "Exclusive listings through our network",
                    "Off-market and pre-market opportunities",
                    "Direct contact when suitable homes become available",
                    "One buyer brief used across the wider market",
                    "No need to depend on one selling agent's portfolio",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-white p-5">
                      <p className="font-medium text-[#1e2a3a]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REGIONS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Discover the real Costa Blanca North
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Compare how the areas actually feel in daily life.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                A property can be changed. Its location cannot. We help you
                compare atmosphere, accessibility, schools, healthcare, daily
                services, social life, restaurants, sports, international
                community, property types, travel times and long-term practical
                suitability.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Moraira",
                  text: "Calm and elegant coastal living with villas, coves and an exclusive yet relaxed residential atmosphere.",
                },
                {
                  name: "Jávea",
                  text: "A lively international lifestyle with beaches, restaurants, sport, schools and year-round activity.",
                },
                {
                  name: "Altea",
                  text: "Culture, beauty, sea views and Mediterranean character in a more artistic and sophisticated setting.",
                },
                {
                  name: "Benissa",
                  text: "Space, privacy, authenticity, countryside living and hidden coves along the coast.",
                },
                {
                  name: "Calpe",
                  text: "Beachfront living, marina life, apartments, new developments and a more active atmosphere.",
                },
                {
                  name: "Dénia",
                  text: "Gastronomy, harbour life, daily services and a lively town that works very well all year round.",
                },
              ].map((region) => (
                <div key={region.name} className="rounded-[32px] bg-white p-8 shadow-sm">
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    {region.name}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {region.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTS */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Meet the professionals you may need
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Understand the legal, technical and financial process before you
                make a major commitment.
              </h2>
            </div>

            <div className="rounded-[40px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                During a private Buyer Tour or group Discovery Trip, we can
                arrange introductions to relevant independent professionals and
                local contacts. The exact meetings depend on your plans and stage
                in the buying process.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Independent property lawyer",
                  "Building surveyor or technical advisor",
                  "Mortgage specialist",
                  "Banking contact",
                  "Insurance specialist",
                  "Notary or notarial process guidance where relevant",
                  "Relocation contacts",
                  "Other specialists relevant to the property",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                These professionals remain independent and responsible for their
                own advice and reports. Nordic Move Spain coordinates and supports
                the buyer journey; we do not replace legal advice, a formal
                survey, valuation, mortgage advice or other regulated professional
                services.
              </p>
            </div>
          </div>
        </section>

        {/* LIFESTYLE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Experience the lifestyle, not only the property market
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              The right home should also fit the life you want around it.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              On group trips, local experiences are discussed with participants
              in advance and chosen to reflect the interests of the group. On a
              private tour, we can shape the programme around your own interests
              and the areas you want to understand more deeply.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Yacht or marina experience",
                "Olive oil making or local producer visit",
                "Local lunches and gastronomy",
                "Wine or food tasting",
                "Golf and sports clubs",
                "Wellness and spa",
                "Hiking and nature",
                "Cultural and local experiences",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium text-[#1e2a3a]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
              These experiences are not fixed for every trip. They are selected
              in advance based on the participants&apos; wishes, practical timing
              and what will best help you understand the character of the area.
            </p>
          </div>
        </section>

        {/* WHAT WE CAN COORDINATE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              A coordinated buyer experience
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
              We help connect the practical pieces so you can focus on the
              decision.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Personal Area Match Report",
                "One-to-one consultation",
                "Focused shortlist of up to 10 properties",
                "Video tours where available",
                "Private property viewing itinerary",
                "Small-group Buyer Discovery Trip",
                "Help coordinating transport and transfers",
                "Help selecting suitable accommodation",
                "Area and neighbourhood visits",
                "Independent lawyer introduction",
                "Mortgage and banking introduction",
                "Building surveyor or technical advisor introduction",
                "Lifestyle experiences matched to your interests",
                "Support comparing properties and locations",
                "Clear next steps after the visit",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm font-medium leading-relaxed text-white/90">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AFTER VISIT */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                After your tour
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                You should leave with clarity, not with more confusion.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Which Costa Blanca North areas genuinely fit your lifestyle",
                "Which areas or property types are less suitable for you",
                "Which shortlisted homes remain realistic after real viewings",
                "Which practical, legal or technical questions still need investigation",
                "Who should carry out the next professional checks",
                "What the expected buying process and next steps look like",
                "Whether you are ready to proceed, keep searching or reconsider",
                "How Nordic Move Spain can support purchase, relocation and move-in after you decide",
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
              Is this right for you?
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Designed for serious international buyers who want better clarity
              before committing to a property in Spain.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Luxury villa and second-home buyers",
                "Families considering relocation to Spain",
                "Retirees planning a new lifestyle",
                "Entrepreneurs and remote professionals",
                "Buyers comparing Moraira, Jávea, Altea, Benissa, Calpe and Dénia",
                "Buyers who want independent guidance before making an offer",
                "People who value a private, focused viewing experience",
                "People who enjoy discovering an area with like-minded future residents",
                "International buyers who want legal and technical checks taken seriously",
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

        {/* FAQ */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Frequently asked questions
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Questions about private Buyer Tours, group Discovery Trips and
                buying on the Costa Blanca North.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question: "Do I start with property listings?",
                  answer:
                    "No. We start with your personal Area Match Report and a one-to-one consultation. Only then do we research a focused shortlist of up to 10 properties that match your area, budget, property wishes and lifestyle.",
                },
                {
                  question: "Do you provide video tours before I travel?",
                  answer:
                    "Where suitable video material is available, we use it to help you assess shortlisted properties before travelling. The aim is to reduce unnecessary viewings and make your visit more focused.",
                },
                {
                  question: "Can I choose a private tour instead of a group trip?",
                  answer:
                    "Yes. You can choose a private Buyer Tour organised around your own shortlist and schedule, or join a carefully matched small-group Discovery Trip with shared area visits and lifestyle experiences.",
                },
                {
                  question: "What happens on a small-group Discovery Trip?",
                  answer:
                    "You combine relevant property viewings and area discovery with selected expert meetings and local experiences. Activities are discussed in advance and chosen to match the interests of the participants.",
                },
                {
                  question: "Can you help with transport and accommodation?",
                  answer:
                    "Yes. Depending on the tour, we can help coordinate local transport, transfers and suitable accommodation so the practical side of your visit supports the viewing programme.",
                },
                {
                  question: "Do you receive commission from the seller?",
                  answer:
                    "Nordic Move Spain works on the buyer's side and does not rely on a seller paying us a sales commission to steer you towards a particular property. Our role is to help you assess what fits and coordinate the next independent checks where needed.",
                },
                {
                  question: "Are you limited to one estate agent's listings?",
                  answer:
                    "No. Because our search is buyer-led rather than tied to a seller's portfolio, we can approach multiple estate agents, developers and local contacts. Our network can also give us access to exclusive listings, off-market opportunities and properties shared before public launch, although availability always depends on what is on the market at the time.",
                },
                {
                  question: "Who performs the legal and technical checks?",
                  answer:
                    "Formal legal due diligence is carried out by an independent property lawyer, while building inspections or technical investigations are carried out by an independent surveyor or technical professional. Each specialist is responsible for their own advice and report.",
                },
                {
                  question: "What if a property does not pass the checks?",
                  answer:
                    "The purpose of independent checks is to understand risk before you commit. Depending on the findings, the right next step may be further investigation, renegotiation or deciding not to proceed.",
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
              Start with your Area Match
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
              The best property search starts with knowing where your life in
              Spain should actually work.
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
              Begin with your personal Area Match Report. Then we refine your
              brief, create a focused shortlist and help you choose the private
              or group viewing experience that fits you best.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Discuss Your Buyer Journey
            </a>
          </div>
        </section>
      </main>
    </>
  );
}