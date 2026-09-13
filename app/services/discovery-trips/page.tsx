export const metadata = {
  title:
    "Buyer Discovery Trips & Private Property Tours Costa Blanca North | Nordic Move Spain",
  description:
    "Private Costa Blanca buyer discovery journeys: compare coastal and inland areas, view shortlisted villas, meet independent experts and experience local life before you buy.",
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
    "relocate to Costa Blanca",
    "Vall de Pop property tour",
    "Jalon Lliber property tour",
    "Costa Blanca relocation trip",
    "Costa Blanca lifestyle tour",
  ],
  alternates: {
    canonical: "/services/discovery-trips",
  },
  openGraph: {
    title:
      "Buyer Discovery Trips & Private Property Tours Costa Blanca North | Nordic Move Spain",
    description:
      "Go beyond villa viewings. Compare coastal and inland lifestyles, stay in different areas, meet independent professionals and experience everyday life before deciding where to buy.",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/discover-card.png",
        width: 1200,
        height: 630,
        alt: "Private Buyer Discovery Journey on the Costa Blanca North",
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
    "Buyer-side discovery journey for international property buyers on the Costa Blanca North, combining Area Match, shortlisted property viewings, contrasting coastal and inland stays, local lifestyle experiences, introductions to independent professionals and coordinated local logistics.",
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
    "Jalón",
    "Xaló",
    "Llíber",
    "Vall de Pop",
  ],
  audience: {
    "@type": "Audience",
    audienceType:
      "International property buyers, second-home buyers, relocating families, entrepreneurs, retirees and luxury villa buyers",
  },
};

const journeySteps = [
  {
    number: "01",
    title: "Start with your Area Match",
    text: "We use your lifestyle, priorities, practical needs, budget and long-term plans to identify the areas that deserve your attention.",
  },
  {
    number: "02",
    title: "Refine your buyer brief",
    text: "In a one-to-one consultation we sharpen your property wishes, family needs, timing, daily routine, social preferences and non-negotiables.",
  },
  {
    number: "03",
    title: "Shortlist the right homes",
    text: "We research a focused selection of up to 10 relevant properties across multiple agencies and our local network, with video material where available.",
  },
  {
    number: "04",
    title: "Build your discovery itinerary",
    text: "Your route combines the areas, homes, accommodation, people and activities most useful for testing how your future life could really feel.",
  },
  {
    number: "05",
    title: "Experience and compare",
    text: "You do more than view villas: you compare coastal and inland living, daily services, local atmosphere, social life, travel times and leisure.",
  },
  {
    number: "06",
    title: "Meet the right professionals",
    text: "Where relevant, we arrange introductions to independent specialists so you understand the legal and technical buying process before making a major commitment.",
  },
];

const lifestyleOptions = [
  "Wine tasting and bodega visits in the Vall de Pop",
  "Golf course or club visit",
  "Padel or tennis introduction",
  "Sailing, marina or yacht experience",
  "Local gastronomy and long lunches",
  "Historic town and village visits",
  "Markets, boutiques and everyday shopping",
  "Hiking, cycling or nature",
  "Wellness, spa or fitness",
  "Schools, healthcare and practical services",
  "Business and professional introductions",
  "Social clubs and local communities",
];

const regions = [
  {
    name: "Moraira",
    text: "Refined coastal living, coves, restaurants and villa neighbourhoods with an international but relaxed atmosphere.",
  },
  {
    name: "Jávea",
    text: "A broad lifestyle mix with beaches, old town, international schools, sport, restaurants and strong year-round activity.",
  },
  {
    name: "Altea",
    text: "Mediterranean character, culture, hillside views, sophisticated restaurants and an artistic old-town atmosphere.",
  },
  {
    name: "Benissa",
    text: "A mix of coastline, countryside, privacy and larger plots, with access to both traditional Spain and the sea.",
  },
  {
    name: "Dénia",
    text: "A genuine year-round town with gastronomy, harbour life, daily services, shopping and strong connections to the wider region.",
  },
  {
    name: "Calpe",
    text: "An active coastal setting with beaches, marina life, new developments, restaurants and a more urban seaside feel.",
  },
  {
    name: "Vall de Pop · Jalón · Llíber",
    text: "Inland valley living with vineyards, mountains, traditional villages, larger plots, peace and a completely different rhythm from the coast.",
  },
];

const professionals = [
  "Independent property lawyer",
  "Independent building surveyor or technical inspector",
  "Mortgage or finance specialist",
  "Banking contact",
  "Insurance specialist",
  "Relocation and residency contacts",
  "Renovation or construction specialist where relevant",
  "Other professionals relevant to your property or plans",
];

const faqItems = [
  {
    question: "Is this just a property viewing trip?",
    answer:
      "No. Property viewings are only one part of the journey. The purpose is to compare areas, lifestyles, practical realities, people and shortlisted homes so you can decide where your life in Spain could genuinely work.",
  },
  {
    question: "Do I start with the Area Match?",
    answer:
      "Yes. Your Area Match and personal consultation give us the information needed to build a useful itinerary instead of sending you on a generic tour.",
  },
  {
    question: "How many properties do you shortlist?",
    answer:
      "We can prepare a focused shortlist of up to 10 relevant homes before you travel. Where suitable video material is available, we use it to reduce unnecessary viewings.",
  },
  {
    question: "Can the journey include both the coast and the inland valleys?",
    answer:
      "Yes. In fact, comparing contrasting areas can be one of the most valuable parts of the experience. Your itinerary may combine coastal towns with inland locations such as the Vall de Pop, depending on your Area Match and priorities.",
  },
  {
    question: "Is accommodation part of the discovery concept?",
    answer:
      "Accommodation can be selected to help you experience different versions of life in the region. Depending on your itinerary and availability, this could include a finca or country stay in the inland valley, a four- or five-star coastal hotel and accommodation in another area you are seriously considering.",
  },
  {
    question: "Can activities be tailored to us?",
    answer:
      "Yes. Activities are chosen for relevance, not entertainment for its own sake. Depending on your interests, that may include wine, golf, padel, sailing, gastronomy, hiking, local culture, schools, business networking or community introductions.",
  },
  {
    question: "Can we meet people who already live in the area?",
    answer:
      "Where suitable connections are available, we can help create relevant introductions to local residents, international communities, social clubs or professional contacts. The aim is to help you understand the social side of living here, not to guarantee a particular friendship or business relationship.",
  },
  {
    question: "Who handles legal and technical checks?",
    answer:
      "Formal legal due diligence is carried out by an independent property lawyer, while building inspections and technical investigations are carried out by an independent surveyor or qualified technical professional. Each specialist remains responsible for their own advice and report.",
  },
  {
    question: "Can transport and local logistics be arranged?",
    answer:
      "Depending on the itinerary, a local destination-management partner can coordinate practical elements such as transfers, private driver services, local guiding, accommodation and selected experiences. Availability and exact inclusions are confirmed before the trip.",
  },
  {
    question: "Can I travel privately instead of joining a group?",
    answer:
      "Yes. A private Buyer Discovery Journey gives you maximum flexibility. Carefully curated small-group editions may also be offered when participants have compatible interests and are at a similar stage of the buying journey.",
  },
];

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

      <main className="overflow-hidden bg-[#f6f1ea] text-stone-900">
        {/* HERO */}
        <section className="relative min-h-[90vh] overflow-hidden">
          <img
            src="/images/discover-card.png"
            alt="Private Buyer Discovery Journey on the Costa Blanca North"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15" />

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Private Buyer Discovery Journeys · Costa Blanca North
              </p>

              <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
                Don&apos;t just view villas.
                <span className="mt-2 block">Experience the life around them.</span>
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                A personalised discovery journey built around your Area Match.
                Compare coastal and inland living, stay in contrasting locations,
                visit carefully selected homes, experience local life and meet the
                independent professionals who can support a well-informed purchase.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75">
                Because choosing a €1 million, €2 million or higher-value home in
                Spain is not only a property decision. It is a decision about where
                your everyday life, relationships, routines and future will work.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Discuss Your Discovery Journey
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

        {/* POSITIONING STRIP */}
        <section className="border-b border-stone-200/70 bg-white/80 px-8 py-6">
          <div className="mx-auto grid max-w-7xl gap-4 text-center text-sm font-medium text-[#1e2a3a] md:grid-cols-3">
            <p>Property, area and lifestyle compared together</p>
            <p>Coastal and inland living experienced in person</p>
            <p>Independent professionals before a major commitment</p>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  More than a house-hunting trip
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Make the move feel smaller before the decision becomes bigger.
                </h2>
              </div>

              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  For many international buyers, especially those travelling from
                  the United States, Germany or Northern Europe, buying in Spain can
                  feel like a major leap. The distance is real, the buying process is
                  unfamiliar and beautiful online listings rarely tell you how a
                  place will actually feel on an ordinary Tuesday morning.
                </p>

                <p className="mt-6">
                  That is why Nordic Move Spain does not treat your visit as a string
                  of property appointments. We use your Area Match, personal brief
                  and shortlisted homes to create a journey that lets you test
                  different versions of life on the Costa Blanca North.
                </p>

                <p className="mt-6 font-medium text-[#1e2a3a]">
                  We are not organising a property viewing trip. We are helping you
                  test whether a place, property and lifestyle truly fit before you
                  make a major decision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Your discovery journey
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Your Area Match becomes a real-world itinerary.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {journeySteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[28px] bg-[#f6f1ea] p-7"
                >
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

        {/* EXAMPLE ITINERARY */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Experience contrasting versions of life
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Do not decide between coast and inland from photographs.
                Experience both.
              </h2>

              <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
                A discovery journey is built around your profile and availability,
                but a four-night programme can deliberately place you in different
                settings so the comparison becomes real.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
              {[
                {
                  label: "Night 1",
                  title: "Vall de Pop finca stay",
                  text: "Wake up to vineyards, mountains, space and a slower inland rhythm around Jalón, Llíber or the wider valley.",
                },
                {
                  label: "Night 2",
                  title: "Four- or five-star coastal hotel",
                  text: "Experience the coastal side: sea, restaurants, marina life, walkability and the energy of a premium Mediterranean setting.",
                },
                {
                  label: "Nights 3–4",
                  title: "Stay in another serious contender",
                  text: "Spend real time in a second area from your Area Match so you can compare how daily life feels after the first impression fades.",
                },
                {
                  label: "Throughout",
                  title: "Selected villas and neighbourhoods",
                  text: "View only the homes and locations that genuinely fit your brief, instead of filling your days with random appointments.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[32px] bg-white p-8 shadow-sm"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                    {item.label}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-4xl text-sm leading-relaxed text-stone-500">
              Accommodation, route and exact inclusions depend on your Area Match,
              chosen dates, availability and the purpose of your trip.
            </p>
          </div>
        </section>

        {/* LIFESTYLE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Your interests shape the experience
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
              See what your life could actually look like between the viewings.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/80">
              A person who dreams of sailing needs to experience the marina
              differently from someone looking for vineyard life, golf, padel,
              international schools, a business network or long lunches in a historic
              town. We use your preferences to make the journey relevant.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {lifestyleOptions.map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm font-medium leading-relaxed text-white/90">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-4xl text-base leading-relaxed text-white/65">
              Activities are selected because they help you understand the area and
              your potential daily life. They are not fixed for every journey and
              remain subject to timing and availability.
            </p>
          </div>
        </section>

        {/* PEOPLE */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[40px] bg-white p-10 shadow-sm lg:p-12">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Meet more than estate agents
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                A new life also needs people around it.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-600">
                Depending on your interests and the connections available, your
                journey can include introductions that help you understand the social
                side of moving: local residents, international communities, social
                clubs, entrepreneurs, professionals or people who share your sports
                and interests.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                For one buyer that may mean meeting a potential business contact.
                For another it may be discovering a golf club, padel community,
                sailing circle or local association where they could genuinely feel
                at home.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-stone-500">
                Introductions depend on relevance and availability and are intended
                to provide local perspective; they do not guarantee a particular
                personal or commercial relationship.
              </p>
            </div>

            <div className="rounded-[40px] bg-[#e9dfd2] p-10 lg:p-12">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Meet the professionals before you need them
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Understand how the purchase can be checked before you commit.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-600">
                When relevant to your stage in the journey, we can arrange
                introductions to independent professionals so you know who may be
                involved, what they check and where their responsibility begins.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {professionals.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/80 p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                Formal legal due diligence and technical inspections are carried out
                by the relevant independent professionals. Nordic Move Spain
                coordinates the journey but does not replace regulated legal,
                technical, financial or valuation advice.
              </p>
            </div>
          </div>
        </section>

        {/* PRIVATE VS GROUP */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Private or carefully curated
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Choose the format that makes you feel most comfortable.
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[40px] bg-white p-10 shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  Private Buyer Discovery Journey
                </p>
                <h3 className="mt-4 font-serif text-4xl text-[#1e2a3a]">
                  Your route, your shortlist, your pace.
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  The programme is shaped entirely around your Area Match, selected
                  properties, practical questions and lifestyle. This is the best fit
                  when privacy, flexibility and personal attention matter most.
                </p>
              </div>

              <div className="rounded-[40px] bg-[#1e2a3a] p-10 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  Curated Small-Group Edition
                </p>
                <h3 className="mt-4 font-serif text-4xl">
                  Discover with buyers in a similar stage of life.
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  On selected dates, we may bring together a small number of buyers
                  with compatible interests or plans. You still have relevant
                  property and area discovery, while some meals, activities and local
                  experiences are shared.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DMC / LOGISTICS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Local logistics, professionally coordinated
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Less time organising. More time understanding whether Spain fits.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Depending on the journey, a local destination-management partner
                  can coordinate accommodation, transfers, a private driver, local
                  guiding and selected experiences around the viewing itinerary.
                </p>

                <p>
                  That means you do not have to spend your limited time in Spain
                  solving logistics between appointments. The practical pieces are
                  brought together around one purpose: helping you compare areas,
                  homes and lifestyles with a clear head.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Airport or local transfers",
                  "Private driver where arranged",
                  "Local guide where useful",
                  "Accommodation coordination",
                  "Property viewing itinerary",
                  "Area and neighbourhood visits",
                  "Lifestyle activities",
                  "Restaurant and local recommendations",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <p className="font-medium text-[#1e2a3a]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BUYER SIDE + MARKET */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Buyer-led from the start
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              We start with your life and your brief, not with one agent&apos;s
              portfolio.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Nordic Move Spain works from the buyer&apos;s perspective. We can
                  approach multiple estate agents, developers and local property
                  professionals across the Costa Blanca North instead of limiting
                  your search to one portfolio.
                </p>

                <p>
                  Our local network can also surface exclusive, off-market or
                  pre-market opportunities when they are available. This does not
                  mean every suitable property will be off-market; it means your
                  search is broader and driven by your criteria rather than by the
                  stock of one selling agent.
                </p>

                <p>
                  If an area does not fit your profile, we will say so. If a property
                  raises practical, technical, legal or lifestyle concerns, the right
                  next step may be to investigate further, renegotiate or walk away.
                </p>
              </div>

              <div className="rounded-[32px] bg-white/80 p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  What this means in practice
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Search across multiple agencies and local contacts",
                    "Focused shortlist linked to your Area Match",
                    "No need to fill your trip with irrelevant listings",
                    "Independent legal and technical specialists where needed",
                    "Space to compare before making an offer",
                    "Clearer grounds to proceed, renegotiate or keep searching",
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
            <div className="mb-12 max-w-5xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Compare how the areas actually feel
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                A beautiful villa cannot compensate for the wrong location.
              </h2>

              <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
                We help you compare the details that rarely come through in property
                listings: atmosphere, winter activity, restaurants, healthcare,
                shopping, schools, social life, sport, marina access, road gradient,
                privacy, airport access and how much daily driving you will actually
                do.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="rounded-[32px] bg-white p-8 shadow-sm"
                >
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

        {/* AFTER */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                What you should leave with
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Clarity about the life, not just excitement about a house.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Which coastal or inland areas genuinely fit your lifestyle",
                "Which areas looked attractive online but feel wrong in person",
                "Which shortlisted villas remain realistic after viewing them",
                "How much daily driving, access and practical organisation each area requires",
                "Where you feel socially and professionally most comfortable",
                "Which legal or technical questions still need independent investigation",
                "Whether you are ready to proceed, keep searching or reconsider",
                "Who can support the next stage if you decide to buy and relocate",
              ].map((item) => (
                <div key={item} className="rounded-[28px] bg-white p-7 shadow-sm">
                  <p className="text-lg leading-relaxed text-stone-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO FOR */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Who this is for
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Designed for international buyers who need more than a list of
              properties.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Luxury villa and second-home buyers",
                "US buyers making a major move from abroad",
                "German and Northern European buyers comparing regions",
                "Families considering relocation",
                "Retirees planning a new lifestyle",
                "Entrepreneurs and remote professionals",
                "Buyers unsure whether coast or inland suits them best",
                "People who want independent legal and technical checks taken seriously",
                "Buyers who want to understand the community before committing",
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
                Questions about the Buyer Discovery Journey.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-[28px] bg-white p-8 shadow-sm"
                >
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
              Experience your future before you choose it
            </p>

            <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
              You are not only choosing a villa.
              <span className="mt-2 block">
                You are choosing the life around it.
              </span>
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
              Start with your Area Match, refine the brief and let us shape a
              discovery journey around the areas, homes, people and experiences that
              matter to you.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Discuss Your Discovery Journey
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
