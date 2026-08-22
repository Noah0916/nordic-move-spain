export const metadata = {
  title: "Purchase Safety Report | Buy Property More Safely on the Costa Blanca North",
  description:
    "Purchase Safety for buyers on the Costa Blanca North: a thorough technical inspection, document and registration review, and full legal due diligence by experienced independent professionals working exclusively on the buyer’s side.",
  openGraph: {
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Thorough technical and legal pre-purchase checks by experienced independent professionals, with no seller-side interest and a clear focus on the buyer’s interests.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Two independent professional assessments and one clear Nordic Move purchase recommendation: proceed, reconsider or do not buy.",
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
            Book an introductory call
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
              Buy more safely in Spain
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[1] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-7xl">
              Purchase Safety Report
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white">
              A thorough technical property inspection and initial document and
              registration review by an experienced independent building surveyor,
              combined with full legal due diligence by an independent Spanish
              property lawyer — fully coordinated by Nordic Move and focused
              exclusively on the buyer&apos;s interests.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Request a personal consultation
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
              Many international buyers focus mainly on the view, space,
              atmosphere and location during a viewing. That is understandable.
              The real risks are often less visible: incomplete documents, an
              extension that has not been correctly registered, unclear plot
              boundaries, technical defects, damp problems, septic tanks,
              owners&apos; community rules or unexpected costs.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Purchase Safety helps make these issues clearer before you buy.
              We work with experienced, highly knowledgeable and independent
              professionals: a building surveyor for the technical property
              inspection and initial technical document comparison, and an
              independent Spanish property lawyer for the full legal due
              diligence.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              In many property transactions in Spain, the selling estate agent is
              paid a sales commission by the seller or through the property
              transaction. This is a common sales model, but it can mean that
              there is a financial interest in the sale being completed. Nordic
              Move Spain works differently: we are not paid by the seller or the
              selling estate agent to get a particular property sold.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              This allows us to work exclusively from the buyer&apos;s perspective.
              If something needs further investigation, we want it investigated.
              If the findings give reason to renegotiate, involve an additional
              specialist or walk away from the property, the buyer should know
              that before becoming committed.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Based on both professional assessments, we bring together the key
              findings, open questions and conditions and give one clear purchase
              recommendation: proceed, reconsider or do not buy. Nordic Move
              replaces neither the surveyor nor the lawyer; both remain
              independent and responsible for their own assessment, advice and
              reporting.
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
              Two independent assessments for a clearer view before you buy.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              We work with experienced independent professionals who thoroughly
              assess their own area of expertise. The building surveyor examines
              the technical condition of the property and compares relevant
              technical documentation. The independent Spanish property lawyer
              carries out the full legal due diligence and represents the buyer
              exclusively.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Full legal due diligence
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Independent Spanish property lawyer
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                The independent Spanish property lawyer reviews, among other things,
                ownership and the registered title position, charges and
                restrictions, relevant debts and taxes, legal and planning
                matters, available permits and licences, owners&apos; community
                documentation, purchase contracts and the conditions of the
                property transfer. Where necessary, additional confirmation is
                obtained from the relevant authority or specialist.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                The lawyer works independently, represents the buyer and remains
                responsible for their own legal assessment and advice. The
                surveyor&apos;s document review does not replace this legal due
                diligence.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Document and registration review
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Initial review of available documents
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                The independent building surveyor reviews and compares the technical
                information available for the property. This may include the
                Catastro data, the registered property description, recent IBI
                information, the registered Energy Performance Certificate
                (CEE), the IEEV.CV where applicable, available plans, building
                permits, licences and documentation supplied by the seller or
                estate agent.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Where possible, registered, cadastral and measured floor areas are
                compared. Differences involving extensions, garages, terraces,
                pools or other structures that do not appear consistently across
                the available documentation are flagged for further
                investigation.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                The surveyor may also identify technical or planning-related matters
                that require additional verification. Legal status, title,
                charges, owners&apos; community matters, planning legality and any
                implications under Spain&apos;s Coastal Law are legally reviewed or
                confirmed by the independent lawyer, relevant authority or other
                specialist.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                A discrepancy does not automatically mean that a property is illegal
                or unsuitable. It means that the issue should be properly
                investigated, explained and assessed before the buyer proceeds.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Technical property assessment
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Independent building surveyor
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                The independent building surveyor carries out a thorough assessment
                of the visible and accessible technical condition of the
                property. This includes, among other things, construction and
                build quality, damp, water ingress and visible leaks,
                installations and services at a functional level, as well as the
                pool, outbuildings and other relevant building elements.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                The report identifies necessary repairs, recommendations and further
                points requiring attention and includes supporting photographs.
                Where additional specialist investigations are needed, this is
                clearly recommended.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUYER-SIDE INDEPENDENCE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Exclusively on the buyer&apos;s side
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            We represent the buyer — not the property and not the seller.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6 text-lg leading-relaxed text-white/80">
              <p>
                In Spain, it is common for a selling estate agent to be paid through
                the seller or the property transaction when a property is sold.
                That model is not necessarily a problem in itself, but it does
                mean that the selling agent may have a financial interest in the
                transaction being completed.
              </p>

              <p>
                Nordic Move Spain is not paid by the seller or selling estate agent
                to get a particular property sold. Our fee model is therefore not
                dependent on that specific sale completing. We can focus fully
                on whether the property genuinely suits the buyer and whether
                the relevant risks have been investigated sufficiently.
              </p>

              <p>
                That independence creates room for thorough technical and legal
                checks. Our independent building surveyor and lawyer do not need
                to minimise a concern simply to keep a sale moving. They assess
                matters under their own professional responsibility, while we
                represent only the buyer&apos;s interests in the coordination and
                decision-making process.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "No seller-side commission to push a specific property",
                "Thorough technical inspection by an independent building surveyor",
                "Full legal due diligence by an independent property lawyer",
                "Room for additional investigation when something does not add up",
                "Renegotiate, investigate further or walk away when the findings justify it",
                "One clear focus: the buyer&apos;s interests",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/8 p-5"
                >
                  <p className="text-sm font-medium leading-relaxed text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CHECKED */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            What can the reports cover?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            From documents to septic tanks: issues buyers often discover too late.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Visible technical condition, construction and build quality",
              "Damp, water ingress and visible leaks",
              "Installations and services at a functional level",
              "Pool, outbuildings and necessary repairs",
              "Catastro, registered property description, IBI, CEE and IEEV.CV where relevant",
              "Available plans, permits, licences and technical documentation",
              "Comparison of registered, cadastral and measured floor areas",
              "Flagging possible discrepancies, extensions, garages, terraces or pools",
              "Legal review of title, charges, community matters, planning and Coastal Law by the lawyer",
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
              Proceed, reconsider or do not buy.
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
                  The property appears suitable to proceed with, provided the normal
                  purchase steps are completed correctly.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Amber</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  There are points requiring attention. Proceed only subject to
                  conditions, additional checks or adjusted negotiations.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Red</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  There are serious risks which may make it sensible not to proceed
                  with the property.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              One trusted point of contact
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              You do not have to coordinate all the professionals yourself.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-700">
              When buying property in Spain, buyers often have to communicate with
              estate agents, surveyors, lawyers and other professionals at the
              same time. Nordic Move remains your dedicated point of contact and
              helps ensure that the agreed steps are coordinated.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              We keep track of who is doing what, which information is missing,
              which questions remain open, what the next step is and where delays
              or risks may arise. Because we are not paid by the seller&apos;s side
              to close this particular transaction, we can continue following
              open points until the buyer has sufficient clarity.
            </p>

            <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-700">
              <li>• One dedicated Nordic Move point of contact</li>
              <li>• Coordination of an experienced independent building surveyor</li>
              <li>• Selection and coordination of an experienced independent Spanish property lawyer</li>
              <li>• Follow-up of open questions, conditions and deadlines</li>
              <li>• One clear purchase recommendation based on both reports</li>
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
                Part of your buyer journey
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Combine Purchase Safety with the Buyer Discovery Trip.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                During our Buyer Discovery Trip, you do more than experience the
                regions, towns and properties of the Costa Blanca North. You can
                also meet professionals who can help you make a well-informed
                purchase decision.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                These may include the independent Spanish property lawyer, the
                building surveyor, a mortgage adviser and other selected local
                professionals. General questions can be discussed during the
                experience; personal or property-specific legal advice is given
                separately after the lawyer has been formally engaged and
                completed a conflict-of-interest check.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                We can also introduce you to like-minded buyers and international
                residents who are at a similar stage of life. This gives you
                insight not only into the property, but also into everyday life,
                the community and the practical reality of living in Spain.
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
            Nordic Move Spain replaces neither the independent building surveyor
            nor the independent Spanish property lawyer. Both professionals
            remain responsible for their own assessment, reporting and advice.
            We coordinate the process, follow up outstanding points and help you
            understand the key findings and conditions.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            The surveyor&apos;s technical document comparison is an initial review
            and flagging exercise based on the information available. It does
            not replace full legal due diligence or formal confirmation from the
            competent authorities. Legal matters are assessed by the independent
            lawyer and, where necessary, confirmed by the relevant authority or
            specialist.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Our independent position means Nordic Move has no seller-side
            interest in completing a particular sale. This allows concerns to be
            investigated properly and enables us to support the buyer, based on
            the findings, in proceeding, renegotiating, investigating further or
            walking away.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            No inspection, legal assessment or professional check can provide
            absolute certainty or guarantee that a property is completely free
            from risks or hidden defects.
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
            Considering a property on the Costa Blanca North?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Request a personal consultation and discover how Purchase Safety can
            help you better understand the technical condition, available
            registrations and documentation, and legal risks before you buy.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Book an introductory call
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