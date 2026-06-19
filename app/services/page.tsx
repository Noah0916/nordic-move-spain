export const metadata = {
  title: "Area Match Report & Safe Buying Costa Blanca North | Nordic Move Spain",
  description:
    "Discover which location and living environment fit you best, and how to buy with more confidence through the Purchase Safety Report, independent checks and a secure purchase environment.",
};

export default function AreaMatchPage() {
  const reportItems = [
    "Personal match with towns and neighbourhoods",
    "Lifestyle and daily living environment",
    "Peace, privacy, summer crowds and noise risks",
    "Safety, local points of attention and visible location risks",
    "Doctors, hospitals and healthcare access",
    "Wellness, golf, sports and leisure options",
    "Restaurants, beach clubs and local culture",
    "International schools and family suitability",
    "International communities and social network",
    "Accessibility, amenities and investment potential",
    "Risks such as busy roads, electricity pylons, steep access or isolated locations",
    "First points of attention for rental, community rules and year-round use",
  ];

  const safetyChecks = [
    {
      label: "01",
      title: "Choosing the right area",
      text:
        "Before looking at properties, we identify which towns, neighbourhoods and living environments genuinely fit your daily life. This helps prevent falling in love with a property in an area that does not work for you long term.",
    },
    {
      label: "02",
      title: "Recognising risks earlier",
      text:
        "We do not only look at atmosphere and beauty, but also at practical points such as accessibility, noise, seasonal crowds, hills, amenities, healthcare, community rules and possible restrictions.",
    },
    {
      label: "03",
      title: "Moving safely forward with the Purchase Safety Report",
      text:
        "When you seriously consider a property, the deeper purchase review begins. With independent professionals, legal, technical and administrative points of attention are made visible before you buy.",
    },
  ];

  const professionalChecks = [
    {
      title: "Independent lawyer",
      text:
        "The lawyer reviews matters such as ownership, the Nota Simple, possible charges, outstanding debts, purchase contracts, permits and legal risks that should be clear before signing.",
    },
    {
      title: "Notary and gestor",
      text:
        "The notary oversees the formal transfer and the signing of the title deed. A gestor can help with administrative checks, registrations, taxes, cadastral data and practical follow-up.",
    },
    {
      title: "Technical building specialist",
      text:
        "The technical specialist reviews visible building risks such as damp, cracks, roof, installations, electrics, swimming pool, septic tank, maintenance risks and possible renovation costs.",
    },
  ];

  const secureItems = [
    "Controlled access per client and advisor",
    "Two-step authentication for extra security",
    "Fewer loose emails, screenshots and WhatsApp documents",
    "One central place for reports, documents and next steps",
    "Clear versions, deadlines and responsibilities",
    "More structure during a purchase process involving many parties",
  ];

  const journeySteps = [
    {
      number: "01",
      title: "Complete the free questionnaire",
      text:
        "Through carefully designed questions, we gain insight into your personal situation, property wishes, lifestyle, budget, interests, concerns and long-term plans.",
    },
    {
      number: "02",
      title: "Receive your personal Area Match Report",
      text:
        "We combine your answers with local knowledge and AI-supported analysis. You receive a personal overview of the towns, neighbourhoods and communities that are most likely to fit you.",
    },
    {
      number: "03",
      title: "Schedule a free personal intake call",
      text:
        "During the intake, we discuss the results, your doubts, wishes and risks in more detail. This helps us understand not only where you want to live, but also what you absolutely want to avoid.",
    },
    {
      number: "04",
      title: "Experience the areas during the Buyer Discovery Trip",
      text:
        "You visit selected towns and neighbourhoods, meet relevant local professionals and experience how daily life really feels before committing to a property.",
    },
    {
      number: "05",
      title: "Review a property with the Purchase Safety Report",
      text:
        "When you seriously consider a property, we coordinate independent legal, technical and administrative checks. The findings are brought together clearly before you decide.",
    },
    {
      number: "06",
      title: "Decide with structure and secure documents",
      text:
        "Important documents, reports and next steps are collected where possible in a secure digital environment with controlled access and two-step authentication.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      {/* INTRODUCTION */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Area Match &amp; Safe Buying
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
            Choose the right area first. Then buy with confidence.
          </h1>

          <p className="mt-10 max-w-5xl text-xl leading-relaxed text-stone-600">
            Buying a property on the Costa Blanca North does not begin with the
            first viewing. It begins with the question of whether the area, daily
            life and practical reality truly fit you. A beautiful property can
            still be the wrong choice if the location is too busy, too isolated,
            too quiet in winter or contains hidden risks you only discover after
            purchase.
          </p>

          <p className="mt-6 max-w-5xl text-xl leading-relaxed text-stone-600">
            That is why we combine our free Area Match &amp; Lifestyle
            Intelligence Report with a clear safety-led approach. First, we map
            out which towns and neighbourhoods match your lifestyle. Then we
            guide you towards a careful purchase process in which legal,
            technical and practical risks are made visible before buying.
          </p>

          <p className="mt-6 max-w-5xl text-xl leading-relaxed text-stone-600">
            Our approach is designed for international buyers who are not only
            looking for a beautiful property, but above all want a safe,
            understandable and well-checked purchase.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Request your free Area Match Report
            </a>

            <a
              href="/services/purchase-safety-report"
              className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              View the Purchase Safety Report
            </a>
          </div>
        </div>
      </section>

      {/* SAFETY AS THE FOUNDATION */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Our safety-led approach
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Not just searching for what looks beautiful, but checking what truly matters.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Many buyers start with photos, views and price. We reverse that
            process. First we look at lifestyle, accessibility, risks, location
            and practical suitability. Only then does the property search become
            focused and meaningful.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {safetyChecks.map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] bg-[#f6f1ea] p-7"
              >
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {item.label}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
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

      {/* REPORT CONTENT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            What your personal report can include
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            From lifestyle and healthcare to noise, accessibility and risks.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Instead of spending months collecting disconnected information
            yourself, you receive a clear and structured overview of the areas
            that best match your profile. We look beyond property prices,
            distance to the beach and well-known place names.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reportItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f6f1ea] p-5 leading-relaxed text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-600">
            The report combines a personal lifestyle match with practical local
            information. This gives you insight not only into where you could
            buy, but especially into where you are most likely to feel safe,
            comfortable and at home long term.
          </p>
        </div>
      </section>

      {/* PURCHASE SAFETY REPORT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[480px]">
              <img
                src="/images/legal.png"
                alt="Purchase Safety Report for buying property safely on the Costa Blanca North"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/25"></div>
            </div>

            <div className="p-10 md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Purchase Safety Report
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                When a property becomes serious, the real checks begin.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                The Area Match Report first helps you choose the right area. Once
                you seriously consider a property, the Purchase Safety Report
                helps make the most important legal, technical and practical
                risks clear before you buy.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                This may include ownership information, Nota Simple, permits,
                extensions, plot boundaries, visible defects, damp, swimming
                pool, septic tank, community rules, annual costs and possible
                restrictions on use or rental.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                The goal is simple: before you sign, you want to know whether you
                can proceed with confidence, renegotiate, add conditions or walk
                away.
              </p>

              <a
                href="/services/purchase-safety-report"
                className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Discover the Purchase Safety Report
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONALS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Independent specialists
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              We coordinate the right professionals. They assess their own area of expertise.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Nordic Move Spain does not replace a lawyer, notary, gestor, tax
              advisor or technical building specialist. We bring the right
              professionals together, structure the process and help you
              understand the findings clearly.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {professionalChecks.map((check) => (
              <div
                key={check.title}
                className="rounded-[32px] bg-white p-8 shadow-sm md:p-9"
              >
                <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {check.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {check.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURE ENVIRONMENT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#e9dfd2] p-10 shadow-sm md:p-14 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Secure purchase environment
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                No loose documents through WhatsApp or unsecured email.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-700">
                During a property purchase in Spain, sensitive documents are
                often shared: passports, purchase contracts, bank details, tax
                documents, ownership information, technical reports and legal
                files. We believe such information should be handled carefully
                and clearly.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                That is why, where possible, we work with a secure digital
                environment where important documents, reports, responsibilities
                and next steps are collected centrally.
              </p>

              <div className="mt-8 grid gap-4">
                {secureItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/70 p-5 leading-relaxed text-stone-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="scroll-mt-24 px-8 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              From free report to controlled purchase
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              A clear route from orientation to confidence.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              The Area Match Report is the starting point. From there, we build
              step by step: personal intake, Buyer Discovery Trip, focused
              property search, Purchase Safety Report and a secure document
              environment. The purchase becomes not faster or more impulsive, but
              calmer, better checked and better supported.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {journeySteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[32px] bg-white p-8 shadow-sm md:p-9"
              >
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {step.number}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {step.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONAL MATCHING DURING THE TRIP */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[420px]">
              <img
                src="/images/discover-card.png"
                alt="Personal Buyer Discovery Trip on the Costa Blanca North"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="p-10 md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Personal Buyer Discovery Trip
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Not just visiting areas, but understanding the risks and meeting the right people.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                During the trip, you experience how daily life in the selected
                areas truly feels. You visit neighbourhoods, amenities and
                locations that match your personal profile, rather than following
                a generic standard route.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Based on your report and intake, we can prepare relevant
                introductions. This may include trusted local professionals,
                international residents, entrepreneurs, future buyers or people
                with shared interests.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                This gives you a better view not only of the property market, but
                also of the social, practical and safety aspects around your
                possible future living environment.
              </p>

              <a
                href="/services/discovery-trips"
                className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Discover the Buyer Discovery Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              More than finding a property
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              The right area and a checked purchase determine whether Spain will truly feel like home.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              A property can look perfect in photos, while the location or legal
              and technical reality ultimately does not match your expectations.
              Perhaps amenities are too far away, the area is too quiet in
              winter, there are unexpected community rules or part of the
              property is not correctly registered.
            </p>

            <p className="mt-6">
              That is why we do not only look at the property itself. We also
              assess the surrounding area, accessibility, lifestyle, local
              amenities, social opportunities and practical suitability for the
              coming years. And once a specific property becomes serious, we move
              into independent checks.
            </p>

            <p className="mt-6">
              Our guidance helps you first gain clarity about the right place and
              lifestyle, and then approach the purchase with more calm, structure
              and security.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 text-center shadow-sm md:p-14 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Start free and without obligation
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Discover which place, neighbourhood and buying route best fit your future in Spain.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
            Complete the questionnaire and receive your personal Area Match &amp;
            Lifestyle Intelligence Report. Afterwards, you can use a free intake
            call in which we discuss the results and look together at the next
            step that suits you.
          </p>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-stone-500">
            When you later seriously consider a property, the Purchase Safety
            Report can help you better understand legal, technical and practical
            risks before buying.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/relocation-assessment"
              className="inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#15202d]"
            >
              Request your free Area Match Report
            </a>

            <a
              href="/services/purchase-safety-report"
              className="inline-block rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Learn more about buying safely
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
