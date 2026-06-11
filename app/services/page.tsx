export const metadata = {
  title: "Services | Nordic Move Spain | Buying Property in Spain",
  description:
    "Premium guidance for Dutch, Belgian, German, Swiss, British, Scandinavian and international buyers before buying property on Costa Blanca North. Area Match, Buyer Discovery Trip, purchase coordination and soft landing support.",
};

export default function ServicesPage() {
  const areaInsights = [
    "Safety and local environment",
    "Healthcare access and doctors",
    "Schools and family facilities",
    "International communities",
    "Expat density",
    "Golf and sports",
    "Restaurants and social life",
    "Accessibility and driving distances",
    "Local services",
    "Property market dynamics",
    "Rental and second-home considerations",
    "Long-term lifestyle fit",
  ];

  const tripIncludes = [
    "Personal intake before arrival",
    "Lifestyle and area profile",
    "Personalised three-day itinerary",
    "Airport transfer from Alicante",
    "Stay in a carefully selected boutique hotel or 4- or 5-star resort",
    "Guided area visits across Costa Blanca North",
    "Meetings with trusted independent professionals",
    "Introductions to a property lawyer, notary, mortgage specialist, banking contact and insurance contact",
    "Lifestyle experiences matched to your interests",
    "Local lunches, dining experiences or wine tastings",
    "Golf, wellness, marina, beach club, hiking or cultural activities where relevant",
    "Private or small-group format depending on your preference",
    "Curated introductions to like-minded future residents",
    "Time for personal questions and decision support",
    "Clear next steps after the trip",
  ];

  const professionals = [
    "Independent property lawyer",
    "Spanish notary",
    "Mortgage specialist",
    "Banking contact",
    "Insurance contact",
    "Local property expert",
    "Relocation support where relevant",
  ];

  const purchaseSupport = [
    "Coordination with your independent property lawyer",
    "Notary coordination",
    "Mortgage introductions",
    "Banking introductions",
    "Insurance introductions",
    "Document and timeline support",
    "Communication with local contacts",
    "Completion planning",
    "Practical guidance around the purchase process",
  ];

  const aftercare = [
    "Healthcare orientation",
    "Doctor introductions",
    "Registrations and local administration guidance",
    "Utilities and electricity support",
    "Banking and insurance coordination",
    "Concierge services",
    "Interior design contacts",
    "Renovation contacts",
    "Trusted local suppliers",
    "Practical introductions for daily life",
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Nordic Move Spain services Costa Blanca North"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Services
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Premium guidance before buying property in Spain.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              A calmer, smarter and more personal journey for international buyers who want clarity, confidence and meaningful connections before buying property on Costa Blanca North.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Request Your Area Match Assessment
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
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                More than property
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                A smarter and more personal way to buy in Spain.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Buying a home in Spain is not only about finding the right property. It is about choosing the right area, understanding the buying process, meeting the right professionals and building a life that truly fits your goals.
              </p>

              <p className="mt-6">
                Nordic Move Spain guides international buyers through a calmer, more personal and better-informed journey on Costa Blanca North — from your first Area Match Assessment to your Buyer Discovery Trip, purchase coordination, soft landing support and meaningful local connections.
              </p>

              <p className="mt-6">
                We regularly support Dutch, Belgian, German, Swiss, British, Scandinavian and other international buyers who want clarity before buying property in Spain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Our approach
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Many buyers start with property listings. We start with your life.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-4">
            <div>
              <p className="text-sm tracking-[0.25em] text-[#c8a063]">01</p>
              <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                First the area
              </h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                We help you understand which towns and communities actually fit your lifestyle.
              </p>
            </div>

            <div>
              <p className="text-sm tracking-[0.25em] text-[#c8a063]">02</p>
              <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                Then the lifestyle fit
              </h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                We look at daily life, schools, healthcare, community, interests, routines and long-term plans.
              </p>
            </div>

            <div>
              <p className="text-sm tracking-[0.25em] text-[#c8a063]">03</p>
              <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                Then the strategy
              </h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                We help you prepare your buying journey before you spend time on random viewings.
              </p>
            </div>

            <div>
              <p className="text-sm tracking-[0.25em] text-[#c8a063]">04</p>
              <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                Then the property
              </h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Once the right area is clear, the property search becomes more focused and intelligent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AREA MATCH */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              01
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Area Match & Lifestyle Intelligence Report
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Before viewing a single property, we help you understand where you truly belong.
            </p>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-stone-600">
              Most buyers focus first on homes, while the most important decision is often choosing the right town, community and daily lifestyle.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Our Area Match & Lifestyle Intelligence Report identifies which areas on Costa Blanca North best match your goals, budget, family situation, interests, lifestyle preferences and long-term plans.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              The goal is simple: to help you understand which areas may suit you — and which areas may not.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {areaInsights.map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTAKE */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              02
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Personal Intake & Buying Strategy
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              After your Area Match, we schedule a personal intake to understand your plans in more detail.
            </p>

            <p className="mt-6">
              We discuss your wishes, lifestyle, buying timeline, practical needs, budget, property preferences and relocation priorities.
            </p>

            <p className="mt-6">
              Together, we refine your preferred regions, property criteria and next steps. This creates a clear roadmap before you spend time travelling, viewing homes or making decisions abroad.
            </p>

            <p className="mt-6">
              This step ensures that every introduction, area visit and local experience is relevant to your personal situation.
            </p>
          </div>
        </div>
      </section>

      {/* BUYER DISCOVERY TRIP */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            03
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Buyer Discovery Trip
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Our Buyer Discovery Trip is a carefully curated three-day property and lifestyle experience on Costa Blanca North.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="text-lg leading-relaxed text-white/75">
              <p>
                It is designed for serious international buyers who want to understand the region before making a life-changing property decision.
              </p>

              <p className="mt-6">
                This is not a standard viewing trip. Before your arrival, we look at your lifestyle, goals, interests and practical needs. Based on your profile, we create a personalised itinerary that helps you experience the areas that could genuinely fit your future life in Spain.
              </p>

              <p className="mt-6">
                During the trip, you can explore selected towns and neighbourhoods such as Moraira, Jávea, Altea, Benissa, Calpe and Dénia.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h3 className="font-serif text-3xl text-white">
                Travel with like-minded people
              </h3>

              <p className="mt-5 leading-relaxed text-white/75">
                Depending on your preference, the trip can be arranged privately or in a carefully matched small group.
              </p>

              <p className="mt-5 leading-relaxed text-white/75">
                When joining a group, we connect you with like-minded buyers who are in a similar stage of life or have similar goals. Some clients prefer an international group. Others prefer to meet people from their own country or language background.
              </p>

              <p className="mt-5 leading-relaxed text-white/75">
                These introductions can become one of the most valuable parts of the experience. A shared lunch, activity or honest conversation can be the beginning of future friendships, useful contacts and a stronger sense of belonging before you even move to Spain.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tripIncludes.map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <p className="text-sm font-medium leading-relaxed text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/services/discovery-trips"
            className="mt-12 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            View the Buyer Discovery Trip
          </a>
        </div>
      </section>

      {/* PROFESSIONALS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Meet the professionals
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Get answers before you make decisions.
            </h2>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-stone-600">
              Buying property in Spain involves more than choosing the right home. During your Buyer Discovery Trip or buying journey, we can introduce you to trusted independent professionals and local contacts who can help you understand the practical steps before making a decision.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {professionals.map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="font-medium text-[#1e2a3a]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              These meetings are designed to give you clarity around the legal process, mortgage options, banking requirements, insurance, purchase costs, annual ownership expenses, paperwork and common mistakes international buyers should avoid.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              You can ask questions directly, understand who does what and leave with a clearer picture of how buying property in Spain actually works.
            </p>
          </div>
        </div>
      </section>

      {/* PURCHASE */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              04
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Purchase Coordination
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Professional coordination from offer to completion.
            </p>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              Once you decide to move forward, we help coordinate the purchase journey with trusted independent professionals.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Our role is to make the process structured, transparent and easier to understand. We can help you stay connected with the right people, understand the next steps and avoid unnecessary confusion during the buying process.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              We do not replace independent legal advice. Instead, we help you understand the process, ask the right questions and move forward with more confidence.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {purchaseSupport.map((item) => (
                <div key={item} className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AFTERCARE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            05
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Aftercare & Soft Landing
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
            Buying the property is only one part of the journey. After purchase, we can support you with practical matters that help you settle into life in Spain more smoothly.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {aftercare.map((item) => (
              <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
            Our goal is to help turn a successful purchase into a confident new chapter.
          </p>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Nordic Circle Community
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Finding the right people matters as much as finding the right home.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-700">
            <p>
              Many international buyers worry about more than the property itself. They wonder whether they will meet the right people, build friendships, feel connected and create a meaningful life in Spain.
            </p>

            <p className="mt-6">
              Through Nordic Circle Community, selected clients can be introduced to like-minded international buyers, homeowners, entrepreneurs, families and future residents.
            </p>

            <p className="mt-6">
              This can include private dinners, lunches, golf events, curated gatherings, business introductions and local community moments.
            </p>

            <p className="mt-6">
              The goal is simple: to help you feel connected before and after your move — not only to the right property, but to the right people, places and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Request Your Area Match Assessment
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            The smartest first step is understanding which area truly fits your lifestyle.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Receive personalised guidance on the Costa Blanca North areas that best match your goals, preferences and future plans.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
            No obligation. Simply leave your details and we will contact you personally.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Request Your Area Match Assessment
          </a>
        </div>
      </section>
    </main>
  );
}