export const metadata = {
  title: "About Nordic Move Spain | Strategic Property Guidance Costa Blanca North",
  description:
    "Meet Nordic Move Spain. Strategic property guidance for Dutch, German, Swiss and international buyers who want clarity, confidence and trusted support before buying on Costa Blanca North.",
};

export default function AboutUsPage() {
  const differences = [
    {
      title: "Area intelligence before property search",
      text:
        "We help buyers understand which towns, neighbourhoods and lifestyles fit their long-term goals before they focus on individual properties.",
    },
    {
      title: "Strategic decision support",
      text:
        "Our background in strategy, organisational analysis, operational excellence and relocation allows us to guide clients through complex decisions with structure and clarity.",
    },
    {
      title: "Discreet international guidance",
      text:
        "We support Dutch, German, Swiss, British, Scandinavian and other international buyers who value a calm, thoughtful and well-prepared buying journey.",
    },
    {
      title: "A complete view of life in Spain",
      text:
        "We look beyond square metres and sea views. Lifestyle, services, healthcare access, ownership costs, community rules and long-term practicality all matter.",
    },
  ];

  const confidenceSteps = [
    "Understanding your lifestyle, priorities and long-term plans",
    "Comparing Costa Blanca North areas before the property search begins",
    "Preparing clear questions for legal, financial and practical checks",
    "Organising Buyer Discovery Trips around real lifestyle fit",
    "Coordinating the buying journey with trusted independent professionals",
    "Supporting the transition into daily life after purchase",
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Nordic Move Spain strategic property guidance on Costa Blanca North"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              About Nordic Move Spain
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[1] text-white md:text-7xl">
              Helping international buyers make better decisions in Spain.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/90">
              We believe buying property abroad should start with clarity,
              lifestyle understanding and trusted guidance — not property
              portals.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Our Mission
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a]">
            More than finding a property.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
            Nordic Move Spain was created for international buyers who want
            confidence, clarity and local insight before making one of life's
            most significant investments.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
            We help clients understand regions, communities, legal processes,
            practical realities and long-term lifestyle considerations before
            they commit to purchasing property in Spain.
          </p>
        </div>
      </section>

      {/* WILLEKE */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[420px_1fr]">
          <img
            src="/images/willeke.png"
            alt="Willeke van Olst founder of Nordic Move Spain"
            className="h-[620px] w-full rounded-[32px] object-cover shadow-xl"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Founder
            </p>

            <h2 className="mt-5 font-serif text-6xl leading-tight text-[#1e2a3a]">
              Willeke
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-700">
              For many people, buying property abroad starts with finding the
              right house. In reality, the legal, practical and lifestyle
              decisions surrounding a purchase often determine whether a move
              becomes a successful long-term transition.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Willeke combines practical relocation experience with an academic
              background in marketing, strategy and organisational analysis. She
              holds a Master's degree with a specialisation in Marketing and
              Strategy and previously worked as a university lecturer,
              supervising students during their graduation research projects and
              helping them analyse complex organisational and strategic
              challenges.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Working alongside students and organisations across a variety of
              sectors, including construction, financial services and
              professional service firms, she developed a strong ability to
              identify underlying issues, ask the right questions and bring
              clarity to complex situations. This analytical approach remains at
              the core of how she supports clients today.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Alongside her academic career, Willeke founded and managed an
              international relocation service in the Netherlands, supporting
              expatriates and international professionals as they navigated
              housing, administration, education, healthcare and the practical
              realities of settling into a new country.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Having also been involved in renovation and property projects
              herself, she understands that successful property ownership
              extends far beyond the transaction itself. Today she combines
              strategic thinking, relocation expertise and local insight to help
              clients make informed decisions with confidence.
            </p>

            <blockquote className="mt-10 border-l-4 border-[#c8a063] pl-6 font-serif text-2xl italic text-[#1e2a3a]">
              "My role is not to sell property. My role is to help you make
              better decisions."
            </blockquote>
          </div>
        </div>
      </section>

      {/* SANTIAGO */}
      <section className="bg-white px-8 py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Co-Founder
            </p>

            <h2 className="mt-5 font-serif text-6xl leading-tight text-[#1e2a3a]">
              Santiago
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-700">
              Buying property abroad involves far more than finding the right
              home. It requires navigating unfamiliar systems, understanding
              complex processes and anticipating challenges before they become
              expensive mistakes.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Santiago brings extensive experience in operational excellence,
              business transformation and international project management.
              Throughout his career he has worked with organisations across
              Europe, Latin America and Asia, helping teams improve processes,
              increase transparency and deliver better outcomes.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              His background includes leading complex projects involving
              multiple stakeholders, coordinating international teams and
              implementing practical solutions in dynamic environments. This
              experience allows him to approach challenges with structure,
              clarity and a strong focus on execution.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Whether evaluating procedures, coordinating professionals or
              helping clients navigate unfamiliar systems, Santiago focuses on
              simplifying complexity and creating clear pathways forward.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Today he combines operational expertise, project leadership and
              local knowledge to help clients move forward with confidence
              during one of the most important decisions of their lives.
            </p>

            <blockquote className="mt-10 border-l-4 border-[#c8a063] pl-6 font-serif text-2xl italic text-[#1e2a3a]">
              "Turning complexity into clarity."
            </blockquote>
          </div>

          <img
            src="/images/santiago.png"
            alt="Santiago co-founder of Nordic Move Spain"
            className="h-[620px] w-full rounded-[32px] object-cover shadow-xl"
          />
        </div>
      </section>

      {/* WHY WE CREATED NORDIC MOVE SPAIN */}
      <section className="px-8 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Why we created Nordic Move Spain
          </p>

          <h2 className="mt-6 font-serif text-6xl leading-tight text-[#1e2a3a]">
            Because buying abroad should feel safer.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
            Too many buyers start with property portals and only discover the
            important questions later. Which town actually fits your lifestyle?
            How strong is the healthcare system? What are the hidden costs?
            Which legal risks should be avoided?
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
            Nordic Move Spain was built to help international buyers gain
            clarity before commitment. Through our Area Match Assessments, Buyer
            Discovery Trips, Property Search & Purchase Coordination and Soft
            Landing Program, we help clients understand not only where to buy,
            but how to build a meaningful life in Spain.
          </p>

          <p className="mx-auto mt-10 max-w-4xl font-serif text-3xl text-[#1e2a3a]">
            Confidence. Clarity. Community.
          </p>
        </div>
      </section>

      {/* OUR DIFFERENCE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            The Nordic Move Spain difference
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Strategic guidance for buyers who want to make a calm, informed and
            confident decision.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {differences.map((item) => (
              <div key={item.title} className="rounded-[30px] bg-[#f6f1ea] p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE CREATE CONFIDENCE */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              How we create confidence
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              A structured route from first orientation to feeling at home.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Serious buyers need more than a list of available homes. They need
              a clear process, the right questions, trusted local insight and a
              calm route towards a decision that fits their future life.
            </p>
          </div>

          <div className="rounded-[40px] bg-[#1e2a3a] p-10 text-white shadow-sm">
            <div className="grid gap-5">
              {confidenceSteps.map((item, index) => (
                <div key={item} className="flex gap-5 rounded-2xl bg-white/10 p-5">
                  <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="leading-relaxed text-white/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISCERNING BUYERS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            For discerning international buyers
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Our clients value discretion, preparation and a deeper understanding
            of life in Spain.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-700">
            <p>
              Many of our clients are not simply looking for a property. They
              are considering a future lifestyle, a second home, retirement, a
              family decision or a long-term connection with Spain.
            </p>

            <p className="mt-6">
              They want to understand which area fits them, which questions
              should be asked before viewing, which practical details matter and
              how to move forward with confidence.
            </p>

            <p className="mt-6">
              That is where our strategic and relocation background becomes
              valuable. We bring structure to a decision that is often emotional,
              complex and deeply personal.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Start with clarity
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Before you choose a property, understand which area truly fits your
            future life.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Our Area Match Assessment helps you compare Costa Blanca North
            locations based on lifestyle, budget, services, long-term plans and
            practical priorities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/services/area-match"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Request your Area Match
            </a>

            <a
              href="/guides"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Read our buyer guides
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