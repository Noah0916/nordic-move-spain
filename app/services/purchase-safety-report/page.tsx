export const metadata = {
  title: "Purchase Safety Report | Buy property safely on the Costa Blanca North",
  description:
    "Purchase Safety for buyers on the Costa Blanca North: an independent technical property inspection, initial document and registration screening, and full legal due diligence by an independent Spanish lawyer.",
  openGraph: {
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "An independent technical property inspection and document screening, combined with full legal due diligence by an independent Spanish lawyer.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Two independent professional assessments and one clear Nordic Move purchase recommendation: proceed, reconsider or walk away.",
  },
};

export default function PurchaseSafetyReportPage() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/15 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/"
            className="text-sm uppercase tracking-[0.25em] text-white"
          >
            Nordic Move Spain
          </a>

          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/" className="hover:text-white/70 transition">
              Home
            </a>

            <a href="/regions" className="hover:text-white/70 transition">
              Regions
            </a>

            <a href="/services" className="border-b border-[#c8a063] pb-1">
              Services
            </a>

            <a href="/guides" className="hover:text-white/70 transition">
              Guides
            </a>

            <a href="/about-us" className="hover:text-white/70 transition">
              About us
            </a>

            <a href="/contact" className="hover:text-white/70 transition">
              Contact
            </a>
          </div>

          <a
            href="/contact"
            className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Schedule an introduction
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img
          src="/images/legal.png"
          alt="Purchase Safety Report for buying property on the Costa Blanca North"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Buying safely in Spain
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[1] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-7xl">
              Purchase Safety Report
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white">
              An independently carried out technical property inspection with
              initial document and registration screening, together with full
              legal due diligence by an independent Spanish lawyer — all
              coordinated by Nordic Move.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Request a personal introduction
              </a>

              <a
                href="/services"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Back to services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Check first, then decide
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              A beautiful property is not automatically a safe purchase.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              Many international buyers focus during a viewing on the view,
              space, atmosphere and location. That is understandable. The real
              risks are often behind the scenes: incomplete documents, an
              extension that is not properly registered, unclear plot
              boundaries, technical defects, moisture, septic tanks, community
              rules or unexpected costs.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Purchase Safety helps make these issues clearer before you buy.
              We coordinate an independent technical property inspection with
              document and registration screening and also work with an
              independent Spanish lawyer for the full legal due diligence.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Based on both professional assessments, we bring together the
              main findings, outstanding questions and conditions and provide a
              clear purchase recommendation: proceed, reconsider or walk away.
              Nordic Move does not replace either the surveyor or the lawyer;
              both remain responsible for their own review and advice.
            </p>
          </div>
        </div>
      </section>

      {/* PROFESSIONALS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Independent professionals
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Two independent assessments for a clearer purchase picture.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              We coordinate an independent surveyor for the technical property
              assessment and initial document and registration screening. We
              also work with an independent Spanish lawyer who carries out the
              full legal due diligence and acts solely in the buyer’s interest.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Full legal due diligence
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Independent Spanish lawyer
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                The independent Spanish lawyer reviews matters including
                ownership, registered charges, possible debts and taxes, legal
                and planning status, permits, community documentation, purchase
                contracts and the conditions of the ownership transfer.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                The lawyer works independently, represents the buyer and remains
                responsible for their own legal review and advice. The
                surveyor’s document screening does not replace this legal due
                diligence.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Document and registration screening
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Initial review of available documents
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                The surveyor reviews and compares the available documents and
                registrations, including the Nota Simple, Catastro, IBI,
                Energy Performance Certificate (CEE), ITE where relevant,
                estate agent information and available permits and licences.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Official and measured floor areas are also compared. Possible
                unregistered parts of the property, extensions, garages or
                pools are flagged. The report may also include observations on
                planning, the owners’ community, Coastal Law and other relevant
                factors.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Technical property assessment
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Independent surveyor
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                The independent surveyor assesses the visible and accessible
                technical condition of the property. This includes construction
                and build quality, moisture, water ingress and visible leaks,
                installations and services at a functional level, as well as
                the pool and outbuildings.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                The report identifies necessary repairs, recommendations and
                further points requiring attention and includes supporting
                photographs. Where additional specialist investigations are
                needed, this is clearly recommended.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CHECKED */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            What can the report include?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            From documents to septic tanks: issues buyers often discover too late.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Visible technical condition, construction and build quality",
              "Moisture, water ingress and visible leaks",
              "Installations and services at a functional level",
              "Pool, outbuildings and necessary repairs",
              "Nota Simple, Catastro, IBI, CEE and ITE where relevant",
              "Estate agent information and available permits and licences",
              "Comparison of official and measured floor areas",
              "Indications of possible unregistered parts of the property",
              "Observations on planning, the owners’ community, Coastal Law and other relevant factors",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#c8a063]/20 bg-[#f6f1ea] p-6"
              >
                <p className="text-base leading-relaxed text-stone-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULT AND COORDINATION */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Clear conclusion
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Proceed, reconsider or walk away.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/80">
              The purpose of Purchase Safety is not to make the purchase more
              complicated. It is to give you greater clarity before a major
              financial decision, based on an independent technical assessment
              and independent legal due diligence.
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Green</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  The property appears suitable to proceed with, provided the
                  normal purchase steps are completed correctly.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Amber</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  There are points requiring attention. Proceed only subject to
                  conditions, further checks or adjusted negotiations.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Red</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  There are serious risks that may make it sensible to walk away
                  from the property.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              One dedicated point of contact
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              You do not have to coordinate all the professionals yourself.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-700">
              When buying property in Spain, buyers often have to communicate
              with estate agents, surveyors, lawyers and other professionals at
              the same time. Nordic Move remains your dedicated point of contact
              and ensures that the agreed steps are coordinated.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              We keep track of who is doing what, which information is missing,
              which questions remain open, what needs to happen next and where
              delays or risks may arise.
            </p>

            <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-700">
              <li>• One dedicated Nordic Move point of contact</li>
              <li>• Coordination of the independent surveyor</li>
              <li>• Selection and coordination of an independent Spanish lawyer</li>
              <li>• Follow-up of open questions, conditions and deadlines</li>
              <li>• A clear purchase recommendation based on both reports</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DISCOVERY TRIP */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid items-center lg:grid-cols-2">
            <div className="relative min-h-[520px]">
              <img
                src="/images/discovery2.png"
                alt="Buyer Discovery Trip on the Costa Blanca North"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Part of your buying journey
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Combine Purchase Safety with the Buyer Discovery Trip.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                During our Buyer Discovery Trip, you experience not only the
                regions, towns and properties of the Costa Blanca North. You
                can also meet professionals who may help you make a
                well-informed purchase decision.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                These may include the independent Spanish lawyer, the technical
                surveyor, a mortgage adviser and other selected local
                professionals. General questions can be discussed during the
                experience; personal or property-specific legal advice is
                provided separately after formal engagement and a conflict-of-
                interest check.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                We can also introduce you to like-minded buyers and
                international residents at a similar stage of life. This gives
                you insight not only into the property, but also into daily
                life, the community and the practical reality of living in
                Spain.
              </p>

              <a
                href="/services/discovery-trips"
                className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Explore the Buyer Discovery Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LIABILITY / ROLE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-[#c8a063]/30 bg-white p-10 shadow-sm lg:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Important to know
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
            We coordinate. The professionals assess.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Nordic Move Spain does not replace either the independent surveyor
            or the independent Spanish lawyer. Both professionals remain
            responsible for their own review, reporting and advice. We
            coordinate the process, follow up outstanding points and help you
            understand the most important findings and conditions.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            The surveyor’s document and registration screening is an initial
            review and risk-identification exercise based on the available
            information. It does not replace full legal due diligence or formal
            confirmation by the relevant authorities. No inspection or review
            can guarantee that a property is completely free from risks or
            hidden defects.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Buy with greater confidence
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Are you considering a property on the Costa Blanca North?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Request a personal introduction and learn how Purchase Safety can
            help you better understand the technical condition, available
            registrations and documents, and legal risks before you buy.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Schedule an introduction
            </a>

            <a
              href="/"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Back to the website
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}