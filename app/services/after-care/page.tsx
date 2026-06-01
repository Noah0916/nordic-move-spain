export default function AfterCarePage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">
        <img
          src="/images/soft-landing-card.png"
          alt="Soft Landing Program"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 px-8 text-center text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Nordic Move Spain
          </p>

          <h1 className="mt-6 font-serif text-6xl leading-tight md:text-7xl">
            Soft Landing Program
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
            Practical support after purchase — from healthcare and utilities to
            renovations, interiors, concierge support and trusted local contacts.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            After purchase support
          </p>

          <h2 className="mt-6 font-serif text-6xl leading-tight text-[#1e2a3a]">
            Turning a property purchase into a comfortable new chapter in Spain.
          </h2>

          <p className="mt-10 text-xl leading-relaxed text-stone-600">
            Buying the property is only the beginning. Once the keys are in your
            hands, many practical questions begin: which doctor to choose, how to
            arrange electricity and water, who to trust for renovations, how to
            furnish the property and how to feel settled in daily life.
          </p>

          <p className="mt-6 text-xl leading-relaxed text-stone-600">
            Our Soft Landing Program helps international buyers navigate these
            practical steps with confidence. Whether you are moving permanently,
            spending part of the year in Spain or preparing a second home for
            future use, we connect you with trusted local professionals and help
            make the transition smoother.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            What we can help with
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Practical introductions and trusted local support.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Doctor and healthcare introductions",
              "Hospitals and medical orientation",
              "Electricity, water and internet setup",
              "NIE and local registration guidance",
              "Interior design and furnishing",
              "Property renovations and upgrades",
              "Swimming pool construction and renovation",
              "Garden landscaping",
              "Cleaning and maintenance services",
              "Concierge and lifestyle support",
              "Property management introductions",
              "Security and alarm systems",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f6f1ea] p-5 text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg leading-relaxed text-stone-600">
            Depending on your needs, we can introduce you to doctors, healthcare
            providers, lawyers, accountants, architects, interior designers,
            renovation specialists, pool experts, gardeners, cleaners,
            maintenance teams, concierge providers and property managers.
          </p>
        </div>
      </section>

      {/* RENOVATION */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b98252]">
              Property preparation
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a]">
              From renovation to interiors.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-700">
              Many buyers want to adapt their new property before spending time
              there. We can help coordinate introductions for renovation,
              refurbishment, painting, furnishing, interior design, garden work,
              swimming pool construction or upgrades and general property
              improvements.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Our role is to help you find reliable local professionals, avoid
              unnecessary confusion and make the process feel more structured and
              manageable from abroad.
            </p>
          </div>

          <div className="rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b98252]">
              Daily life setup
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a]">
              The details that make life easier.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Settling in also means arranging the practical essentials:
              electricity, water, internet, healthcare, doctors, registrations,
              insurance, maintenance, cleaning and local services.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              We help you understand what needs to be arranged and connect you
              with trusted contacts who can support your new life in Spain.
            </p>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Nordic Circle Community
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight">
            Settling in also means finding the right people.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-white/80">
            Every client can become part of our Nordic Circle Community. Through
            private dinners, lunches, golf events, curated gatherings and local
            introductions, members have the opportunity to build friendships,
            business connections and a genuine sense of belonging.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Because moving to Spain is not only about a beautiful home. It is
            about creating a life, a rhythm and a trusted network around you.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Request Soft Landing Support
          </a>
        </div>
      </section>
    </main>
  );
}