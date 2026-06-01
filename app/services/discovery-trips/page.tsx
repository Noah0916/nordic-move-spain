export default function DiscoveryTripsPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="relative flex h-[65vh] items-center justify-center overflow-hidden">
        <img
          src="/images/website.png"
          alt="3-day Buyer Experience Tour"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 px-8 text-center text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Nordic Move Spain
          </p>

          <h1 className="mt-6 font-serif text-6xl leading-tight md:text-7xl">
            3-Day Buyer Experience Tour
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
            A private, tailor-made introduction to Costa Blanca North designed
            around your lifestyle, interests and long-term plans.
          </p>
        </div>
      </section>

      {/* BUYER EXPERIENCE DETAILS */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            The Nordic Move Spain Buyer Experience
          </p>

          <h2 className="mt-6 font-serif text-6xl leading-tight text-[#1e2a3a]">
            A private three-day journey designed entirely around you.
          </h2>

          <p className="mt-10 text-xl leading-relaxed text-stone-600">
            The Buyer Experience is far more than a property viewing trip. It is
            a carefully curated introduction to Costa Blanca North, designed
            around your lifestyle, interests, long-term goals and the insights
            gathered during your Area Match Assessment and personal intake.
          </p>

          <p className="mt-6 text-xl leading-relaxed text-stone-600">
            Before your arrival, we create a personalised itinerary tailored
            specifically to your profile. Every destination, meeting, experience
            and area visit is selected to help you gain a deeper understanding
            of what life in Spain could truly look like for you.
          </p>
        </div>
      </section>

      {/* ARRIVAL */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <h3 className="font-serif text-4xl text-[#1e2a3a]">
            From the moment you arrive
          </h3>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Upon arrival at Alicante Airport, you will be welcomed by your
            private driver and transferred comfortably to one of our carefully
            selected boutique hotels or luxury resorts.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            The experience begins with a relaxed welcome lunch where we discuss
            your objectives, answer any questions and provide an overview of the
            days ahead.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            From that moment onward, every detail has been arranged for you. Our
            goal is to remove uncertainty and allow you to focus entirely on
            exploring whether Costa Blanca North is truly the right fit for your
            future.
          </p>
        </div>
      </section>

      {/* EXPLORE */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl">
          <h3 className="font-serif text-5xl text-[#1e2a3a]">
            Explore the regions that match your lifestyle
          </h3>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Rather than visiting random locations, we focus exclusively on areas
            that align with your personal profile and ambitions.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Depending on your preferences, we may explore elegant coastal towns,
            golf communities, vibrant international neighbourhoods,
            family-friendly areas, marinas, wellness destinations, business hubs
            or peaceful Mediterranean villages.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Throughout the experience, we help you understand not only where
            properties are located, but how daily life actually feels in each
            environment.
          </p>
        </div>
      </section>

      {/* PROFESSIONALS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <h3 className="font-serif text-5xl">
            Meet the professionals you can trust
          </h3>

          <p className="mt-8 text-lg leading-relaxed text-white/80">
            Purchasing property abroad involves much more than finding the right
            home. During your Buyer Experience, we introduce you to carefully
            selected independent professionals who can support your journey.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              "Independent property lawyers",
              "Spanish notaries",
              "Mortgage specialists",
              "Tax advisors",
              "Relocation professionals",
              "Local property experts",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/10 p-5 text-white/90"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg leading-relaxed text-white/80">
            These meetings provide clarity around legal procedures, taxes,
            mortgages, purchase costs, ownership structures, annual expenses and
            the practical realities of buying property in Spain.
          </p>
        </div>
      </section>

      {/* LIFESTYLE */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl">
          <h3 className="font-serif text-5xl text-[#1e2a3a]">
            Experience the lifestyle before making a decision
          </h3>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Understanding a region goes beyond property viewings. We believe
            buyers should experience the lifestyle, atmosphere and opportunities
            available before making a long-term commitment.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              "Fine dining experiences",
              "Wine tastings",
              "Golf clubs",
              "Beach clubs",
              "Marinas and yacht harbours",
              "Wellness & spa facilities",
              "Hiking and nature experiences",
              "Cultural highlights",
              "Business networking opportunities",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-6 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <h3 className="font-serif text-5xl text-[#1e2a3a]">
            Meet like-minded future residents
          </h3>

          <p className="mt-8 text-lg leading-relaxed text-stone-700">
            One of the most valuable aspects of the Buyer Experience is the
            opportunity to meet people who are on a similar journey.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-700">
            Through carefully curated introductions, lunches and community
            gatherings, clients often begin building friendships, professional
            connections and a trusted network long before they officially
            relocate.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-700">
            Many participants tell us this becomes one of the most memorable and
            valuable parts of the entire experience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-serif text-6xl leading-tight text-[#1e2a3a]">
            Make your decision with confidence.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-stone-600">
            By the end of your Buyer Experience, you will have gained far more
            than property information. You will understand the regions, the
            lifestyle, the financial implications, the professionals and the
            people who could become part of your future life in Spain.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-10 py-5 text-white transition hover:bg-[#15202d]"
          >
            Request Your Buyer Experience
          </a>
        </div>
      </section>
    </main>
  );
}