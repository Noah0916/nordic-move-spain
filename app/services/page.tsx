export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
        <img
          src="/images/website.png"
          alt="Nordic Move Spain"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 px-8 text-center text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Nordic Move Spain
          </p>

          <h1 className="mt-6 font-serif text-6xl leading-tight md:text-7xl">
            Services
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
            A premium guidance journey for international buyers who want clarity,
            confidence and meaningful connections before buying property on Costa
            Blanca North.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b98252]">
            More than property
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
            A calmer, smarter and more personal way to buy in Spain.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Buying a home abroad is not only about choosing a property. It is
            about choosing the right area, understanding the buying process,
            meeting the right professionals and building a life that truly fits
            your goals.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Nordic Move Spain guides international buyers through every stage —
            from the first Area Match & Lifestyle Intelligence Report to a
            personalised 3-day Buyer Experience Tour, purchase guidance,
            aftercare and access to our Nordic Circle Community.
          </p>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* CARD 1 */}
            <div className="rounded-[32px] bg-white p-10 shadow-sm">
              <div className="text-sm tracking-[0.25em] text-[#b98252]">
                01
              </div>

              <h3 className="mt-5 font-serif text-3xl leading-snug text-[#1e2a3a]">
                Area Match & Lifestyle Intelligence Report
              </h3>

              <p className="mt-6 text-sm leading-relaxed text-stone-600">
                Before viewing a single property, we help you understand where
                you truly belong. Most buyers start with homes, while the most
                important decision is often choosing the right town, community
                and lifestyle.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-stone-600">
                Our Area Match & Lifestyle Intelligence Report identifies which
                areas on Costa Blanca North best match your goals, budget,
                family situation, interests and long-term plans.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-stone-600">
                The report can include insights into safety, crime facts,
                healthcare, doctors, schools, international communities, expat
                density, golf, restaurants, accessibility and local property
                market dynamics.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="rounded-[32px] bg-white p-10 shadow-sm">
              <div className="text-sm tracking-[0.25em] text-[#b98252]">
                02
              </div>

              <h3 className="mt-5 font-serif text-3xl leading-snug text-[#1e2a3a]">
                Personal Intake & Buying Strategy
              </h3>

              <p className="mt-6 text-sm leading-relaxed text-stone-600">
                After your Area Match, we schedule a personal intake to better
                understand your wishes, lifestyle, buying timeline and practical
                needs.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-stone-600">
                Together, we refine your preferred regions, property criteria,
                budget, legal questions and relocation priorities. This creates
                a clear roadmap before you spend time travelling, viewing homes
                or making decisions abroad.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-stone-600">
                This step ensures that every introduction, viewing and local
                experience is relevant to your personal situation.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="rounded-[32px] bg-white p-10 shadow-sm">
              <div className="text-sm tracking-[0.25em] text-[#b98252]">
                03
              </div>

              <h3 className="mt-5 font-serif text-3xl leading-snug text-[#1e2a3a]">
                3-Day Buyer Experience Tour
              </h3>

              <p className="mt-6 text-sm leading-relaxed text-stone-600">
                Our 3-day Buyer Experience Tour is a premium, tailor-made
                introduction to Costa Blanca North. It is designed around your
                interests, lifestyle and long-term plans.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-stone-600">
                During the tour, you explore selected towns and neighbourhoods,
                meet trusted independent professionals and experience what daily
                life in different areas could truly feel like.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-stone-600">
                The experience includes premium accommodation, airport pickup,
                carefully selected dining experiences, introductions to
                independent lawyers, notaries and financial specialists, as well
                as opportunities to meet like-minded future residents and members
                of our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUYER EXPERIENCE FEATURE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid items-center lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                The 3-Day Buyer Experience Tour
              </p>

              <h2 className="mt-6 font-serif text-6xl leading-[1]">
                More than a viewing trip.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/80">
                This experience is created for international buyers who want to
                understand the region before making a life-changing decision. We
                combine area exploration, professional insight and meaningful
                local introductions into one carefully curated journey.
              </p>

              <div className="mt-10 grid gap-4 text-sm text-white/85 sm:grid-cols-2">
                {[
                  "Explore selected towns and neighbourhoods",
                  "Meet independent lawyers and notaries",
                  "Understand taxes, mortgages and purchase costs",
                  "Experience local cuisine and lifestyle",
                  "Premium hotel and airport pickup",
                  "Meet like-minded future residents",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 p-5">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[560px]">
              <img
                src="/images/website.png"
                alt="3-day Buyer Experience Tour"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ACQUISITION + AFTERCARE */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b98252]">
              Acquisition Guidance
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Professional support from offer to completion.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Once you decide to move forward, we help coordinate the purchase
              journey with trusted independent professionals. Support may include
              mortgage introductions, legal due diligence, tax guidance, notary
              coordination, contract support and completion planning.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Our role is to make the process structured, transparent and easier
              to understand, so you can make decisions with confidence.
            </p>
          </div>

          <div className="rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b98252]">
              Aftercare & Soft Landing
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Settling into life in Spain with the right support.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-700">
              After purchase, we can help with practical matters such as doctor
              introductions, healthcare orientation, registrations, utilities,
              electricity, concierge services, interior design, renovations and
              trusted local contacts.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              We help turn a successful purchase into a confident new chapter.
            </p>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b98252]">
            Nordic Circle Community
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight text-[#1e2a3a]">
            Finding the right people matters as much as finding the right home.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
            Every client becomes part of our Nordic Circle Community. Through
            private dinners, lunches, golf events, curated gatherings and local
            introductions, members can build meaningful friendships, trusted
            business connections and a genuine sense of belonging.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
            Our goal is to help you feel connected before and after your move —
            not only to the right property, but to the right people, places and
            opportunities.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#15202d]"
          >
            Request Your Area Match Report
          </a>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-stone-500">
            Receive a personalised assessment of the Costa Blanca North areas
            that best match your lifestyle, goals and future plans. No
            obligation. Simply leave your details and we will contact you
            personally.
          </p>
        </div>
      </section>
    </main>
  );
}