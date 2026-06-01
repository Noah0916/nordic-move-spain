export default function AboutUsPage() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900">

      {/* HERO */}
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Nordic Move Spain"
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
              lifestyle understanding and trusted guidance — not property portals.
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
            alt="Willeke van Olst"
            className="h-[620px] w-full rounded-[32px] object-cover shadow-xl"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Founder
            </p>

            <h2 className="mt-5 font-serif text-6xl leading-tight text-[#1e2a3a]">
              Willeke van Olst
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-700">
              For many people, buying property abroad starts with finding the
              right house. In reality, the legal, practical and lifestyle
              decisions surrounding the purchase often determine whether the
              move becomes a long-term success.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Over the past decade, Willeke has worked extensively with
              international clients navigating complex relocation and property
              decisions. As founder of a successful expat relocation service in
              the Netherlands, she personally guided hundreds of international
              families through housing, schools, healthcare, legal procedures,
              registrations and long-term integration.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Alongside her practical experience, Willeke holds a Master's
              degree in Business Administration and specialised in strategy and
              organisational research. Her background enables her to identify
              risks, ask the right questions and recognise potential issues
              before they become costly mistakes.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Having personally managed renovation and construction projects,
              she also understands the realities behind property purchases,
              renovations and contractor selection. Today she combines
              relocation expertise, strategic thinking and local insight to help
              buyers make informed decisions with confidence.
            </p>

            <blockquote className="mt-10 border-l-4 border-[#c8a063] pl-6 text-2xl font-serif italic text-[#1e2a3a]">
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
              With more than a decade of experience leading large-scale
              transformation programs, operational improvements and
              international service delivery projects, Santiago brings a highly
              structured and analytical approach to every client journey.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Throughout his career he has managed international projects across
              Europe, Latin America and Asia, coordinating complex stakeholder
              environments and implementing systems that improve transparency,
              efficiency and decision-making.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              His expertise lies in simplifying complexity, identifying risks
              and creating clear pathways through challenging situations.
              Whether evaluating processes, coordinating professionals or
              supporting buyers through unfamiliar procedures, Santiago helps
              clients move forward with clarity and confidence.
            </p>

            <blockquote className="mt-10 border-l-4 border-[#c8a063] pl-6 text-2xl font-serif italic text-[#1e2a3a]">
              "Turning complexity into clarity."
            </blockquote>
          </div>

          <img
            src="/images/santiago.png"
            alt="Santiago"
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
            clarity before commitment. Through our Area Match Assessments,
            Buyer Excursions, Property Acquisition Guidance and Soft Landing
            Program, we help clients understand not only where to buy, but how
            to build a meaningful life in Spain.
          </p>

          <p className="mx-auto mt-10 max-w-4xl font-serif text-3xl text-[#1e2a3a]">
            Confidence. Clarity. Community.
          </p>
        </div>
      </section>

    </main>
  );
}