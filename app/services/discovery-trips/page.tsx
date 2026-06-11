export const metadata = {
  title: "Buyer Discovery Trip Costa Blanca North | Buying Property in Spain",
  description:
    "Join a curated Buyer Discovery Trip on Costa Blanca North for Dutch, Belgian, German, Swiss, British, Scandinavian and international buyers. Explore Moraira, Jávea, Altea, Benissa, Calpe and Dénia, meet trusted professionals and discover where to buy in Spain with confidence.",
};

export default function BuyerDiscoveryTripPage() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Buyer Discovery Trip Costa Blanca North"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Buyer Discovery Trip Costa Blanca North
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              A curated property and lifestyle trip before buying a home in Spain.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              Discover the regions, lifestyle, professionals and people that could become part of your future life in Spain — before you make a property decision.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Request Your Buyer Discovery Trip
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

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Clarity before commitment
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Buying property in Spain should never start with random viewings.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Before you choose a home, you need to understand the area, the lifestyle, the legal process, the people, the costs and whether daily life in Spain truly fits you.
              </p>

              <p className="mt-6">
                Our Buyer Discovery Trip is a carefully curated three-day property and lifestyle experience on Costa Blanca North, designed for international buyers who want clarity before making a property decision.
              </p>

              <p className="mt-6">
                This is not a standard viewing trip. It is a personalised introduction to the regions, trusted professionals, lifestyle and community that could become part of your future life in Spain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIRST WE UNDERSTAND YOU */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            First, we understand you
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Your trip starts with your lifestyle, not with property listings.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Before your arrival, we start with a personal intake and lifestyle-based assessment. We look at your goals, budget, family situation, daily routines, interests, preferred lifestyle, relocation plans and long-term priorities.
              </p>

              <p className="mt-6">
                Only after we understand your profile do we create your itinerary. This allows us to focus on the areas that genuinely match your lifestyle instead of wasting time on places that look attractive online but do not fit your real life.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <p className="text-lg leading-relaxed text-stone-700">
                Are you looking for a quiet villa near Moraira? A more social lifestyle in Jávea? An elegant setting near Altea? Space and authenticity around Benissa? Beachfront apartments and new developments in Calpe? Or year-round town life in Dénia?
              </p>
            </div>
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
              Meet people who may be on the same journey as you.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Depending on your preference, your Buyer Discovery Trip can be arranged privately or in a carefully matched small group.
            </p>

            <p className="mt-6">
              When joining a group, we connect you with like-minded buyers who are in a similar stage of life or have similar goals. Some clients prefer an international group. Others prefer to meet buyers from their own country or language background.
            </p>

            <p className="mt-6">
              We regularly support Dutch, Belgian, German, Swiss, British, Scandinavian and other international buyers who are exploring a future on Costa Blanca North.
            </p>

            <p className="mt-6">
              Many clients tell us that these connections become one of the most memorable parts of the trip. A lunch, shared experience or honest conversation can be the beginning of future friendships, useful contacts and a stronger sense of belonging before you even move to Spain.
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
              <h3 className="font-serif text-3xl">
                Airport transfer
              </h3>
              <p className="mt-4 leading-relaxed text-white/75">
                You arrive at Alicante Airport, where your private transfer takes you comfortably to your hotel or resort.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                4- or 5-star stay
              </h3>
              <p className="mt-4 leading-relaxed text-white/75">
                You stay in one of our carefully selected boutique hotels or 4- or 5-star resorts.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Welcome moment
              </h3>
              <p className="mt-4 leading-relaxed text-white/75">
                During a relaxed welcome moment, we discuss your goals, answer your first questions and walk you through the days ahead.
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
              We show you more than the obvious tourist areas.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              During the Buyer Discovery Trip, you experience the regions from a real-life perspective. We visit the places that matter for your future lifestyle, not just the places that look good in a brochure.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Moraira</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Calm, elegant coastal living with villas, coves and a refined residential atmosphere.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Jávea</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                A vibrant international lifestyle with beaches, restaurants, sports and year-round energy.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Altea</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Culture, beauty, sea views and Mediterranean refinement in an artistic setting.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Benissa</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Space, privacy, authenticity, countryside living and hidden coastal coves.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Calpe</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Beachfront living, marina life, apartments, new developments and a more active atmosphere.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Dénia</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Gastronomy, harbour life, daily services and stronger year-round town living.
              </p>
            </div>
          </div>

          <p className="mt-12 max-w-4xl text-lg leading-relaxed text-stone-600">
            We help you understand the differences between each area: atmosphere, property types, schools, healthcare access, driving distances, international community, restaurants, sports, daily services, rental potential and long-term practicality.
          </p>
        </div>
      </section>

      {/* PROFESSIONALS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Meet the professionals you need before buying
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Get answers before you make decisions.
            </h2>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-stone-600">
              During your Buyer Discovery Trip, we introduce you to trusted independent professionals and local contacts who can help you understand the practical steps before making a decision.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Independent property lawyer",
                "Spanish notary",
                "Mortgage specialist",
                "Banking contact",
                "Insurance contact",
                "Local property expert",
                "Relocation support where relevant",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="font-medium text-[#1e2a3a]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              These meetings are designed to give you clarity around the legal process, mortgage options, banking requirements, insurance, purchase costs, annual ownership expenses, paperwork and common mistakes international buyers should avoid.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              You can ask your questions directly, understand who does what, and leave with a clearer picture of how buying property in Spain actually works.
            </p>
          </div>
        </div>
      </section>

      {/* LIFESTYLE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Experience the lifestyle, not just the property market
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            A home is only one part of the decision.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
            You also need to understand how your life could feel here. That is why the Buyer Discovery Trip includes lifestyle experiences that match your interests and the region you are exploring.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Local lunches and fine dining",
              "Wine tastings",
              "Golf clubs",
              "Beach clubs",
              "Marinas and yacht harbours",
              "Wellness and spa experiences",
              "Hiking and nature routes",
              "Cultural visits",
              "Business or networking introductions",
              "Community gatherings",
              "Activities with like-minded future residents",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                <p className="text-sm font-medium text-[#1e2a3a]">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
            We do not show you a generic version of Spain. We show you the version of Costa Blanca North that could realistically fit your life.
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
              We coordinate the full experience, guide you through the regions and introduce you to trusted independent professionals, so you can make informed decisions before buying property in Spain.
            </p>

            <p className="mt-6">
              We help you compare areas, understand practical differences, ask the right questions and avoid common mistakes.
            </p>

            <p className="mt-6">
              Our role is not to push you into a property. Our role is to help you make a better decision.
            </p>

            <p className="mt-6">
              If an area does not fit your profile, we will say so. If a property type may create practical, legal or lifestyle concerns, we help you understand that before you commit.
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
            Your Buyer Discovery Trip can include everything you need for a clear first decision.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Personal intake before arrival",
              "Lifestyle and area profile",
              "Personalised itinerary",
              "Airport transfer from Alicante",
              "Stay in a carefully selected 4- or 5-star hotel or boutique resort",
              "Guided area visits across Costa Blanca North",
              "Introductions to trusted legal, mortgage, banking and insurance contacts",
              "Lifestyle experiences matched to your interests",
              "Private or small-group format depending on your preference",
              "Curated introductions to like-minded buyers and future residents",
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
              What you will know after the trip
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              You will not leave with vague impressions. You will leave with clarity.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Which Costa Blanca North areas fit your lifestyle",
              "Which areas are less suitable for you",
              "What kind of property makes sense for your budget and goals",
              "What the buying process in Spain involves",
              "Which legal and financial questions need attention",
              "What daily life could look like after purchase",
              "Which professionals can support you",
              "What kind of community you could become part of",
              "Whether you are ready to move forward",
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
            Ideal for serious buyers who want to understand Costa Blanca North before choosing a property.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "International buyers exploring Costa Blanca North",
              "Dutch, Belgian, German, Swiss, British, Scandinavian and English-speaking buyers",
              "Families considering relocation to Spain",
              "Retirees planning a lifestyle move",
              "Entrepreneurs and remote workers",
              "Second-home buyers",
              "Buyers comparing Moraira, Jávea, Altea, Benissa, Calpe and Dénia",
              "Clients who want professional guidance before starting serious property viewings",
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

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Request your Buyer Discovery Trip
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            If you are serious about buying property in Spain, the most important decision is not the house.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            It is the area, the lifestyle and the support around you.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
            Request your Buyer Discovery Trip and discover whether Costa Blanca North is truly the right fit for your future.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Request Your Buyer Discovery Trip
          </a>
        </div>
      </section>
    </main>
  );
}