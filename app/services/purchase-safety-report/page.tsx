export const metadata = {
  title: "Purchase Safety Report | Buy Safely on the Costa Blanca North",
  description:
    "A structured purchase risk overview for buyers who want a property on the Costa Blanca North reviewed legally, technically and practically by independent professionals before purchase.",
  openGraph: {
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Do not buy on feeling alone. Have a property on the Costa Blanca North reviewed by independent professionals before purchase.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "A structured purchase risk overview with findings from independent professionals before you buy in Spain.",
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
          alt="Purchase Safety Report for buying a property on the Costa Blanca North"
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
              A structured purchase risk overview for buyers who do not want to
              buy a property on the Costa Blanca North on feeling alone, but with
              findings from independent professionals and clear legal, technical
              and practical points of attention.
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
              space, atmosphere and location. That is understandable. But the
              real risks are often behind the scenes: incomplete documents, an
              extension that is not properly registered, unclear plot boundaries,
              technical defects, moisture issues, septic tanks, community rules
              or unexpected costs.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              The Purchase Safety Report helps you get a clearer picture of
              these points before purchase. We coordinate the purchase review
              with independent professionals and bring their findings together in
              one clear overview. This helps you decide whether you can move
              forward with confidence, renegotiate or walk away from the
              property.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Our role is not to replace legal, tax or technical advice. Our role
              is to bring the right specialists to the table, structure the
              process and make the most important points of attention easier to
              understand for international buyers.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIALISTS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Independent professionals
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Expert checks for one clear purchase overview.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Depending on the property and the situation, we work with an
              independent lawyer, notary, gestor and technical building
              specialist. Each professional assesses the property and purchase
              process from their own area of expertise.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Legal review
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Independent lawyer
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                The lawyer reviews the legal side of the purchase. This includes
                ownership, the Nota Simple, possible charges, outstanding debts,
                purchase contracts, permits, registered information and legal
                risks that need to be clear before signing.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                The lawyer works independently and is responsible for their own
                legal assessment. This helps you understand which legal points
                must first be resolved or investigated further.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Deed and transfer
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Notary and gestor
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                The notary plays an important role in the formal transfer. The
                notary verifies the identity of the parties, oversees the signing
                of the title deed and ensures that the transfer is recorded
                according to the correct procedure.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                A gestor or administrative specialist can also help with
                practical and administrative checks, such as cadastral data, plot
                information, registrations, taxes, local procedures and follow-up
                after the purchase.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Technical review
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Building engineer
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                The technical specialist or building engineer reviews the visible
                condition of the property. This can include moisture, cracks,
                roofing, installations, pipes, electricity, the swimming pool,
                septic tank, maintenance risks and potential renovation points.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                This review helps estimate hidden costs more clearly and reduces
                the chance of discovering after purchase that important technical
                elements need attention or investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN IT MAKES SENSE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            When is this useful?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Request the Purchase Safety Report before you commit.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            The Purchase Safety Report is especially valuable when you are
            seriously considering a property, but want clarity on legal,
            technical and practical points of attention before signing.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "When you are seriously considering a property",
              "When there are extensions, terraces or outbuildings",
              "When the registered surface area is unclear",
              "When there are moisture issues, cracks, older installations or renovation points",
              "When there is a septic tank, swimming pool or large plot",
              "When the property is part of a community",
              "When you want to rent out the property",
              "When you want more certainty about open points before signing",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#c8a063]/25 bg-white/70 p-6"
              >
                <p className="text-base leading-relaxed text-stone-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CAN BE CHECKED */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            What can the report include?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            From documents to septic tank: the points buyers often discover too late.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Ownership, Nota Simple and possible charges",
              "Purchase contracts, conditions and legal points of attention",
              "Cadastral data, plot boundaries and registered surface areas",
              "Extensions, outbuildings, terraces and possible permits",
              "Moisture, cracks, roof, swimming pool and visible maintenance risks",
              "Septic tank, pipes, electricity and practical infrastructure",
              "Community rules, costs and possible restrictions",
              "Rental possibilities and local points of attention",
              "Annual ownership costs and practical next steps",
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

      {/* OUTCOME AND SECURITY */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Clear conclusion
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Continue, renegotiate or walk away.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/80">
              The purpose of the Purchase Safety Report is not to make a
              purchase more complicated. Its purpose is to give you calm and
              clarity before making a major financial decision.
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Green</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  The property appears suitable to move forward with, provided
                  the normal purchase steps are completed correctly.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Amber</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  There are points of attention. Buy only under conditions, after
                  additional checks or with adjusted negotiation.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Red</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  There are serious risks, which may make walking away from the
                  property the sensible decision.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Secure environment
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              No loose documents via WhatsApp or unsecured email.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-700">
              When buying in Spain, important documents and reports are often
              shared: ownership information, Nota Simple, cadastral data,
              purchase documents, technical reports, legal points of attention,
              community documents, cost overviews and practical next steps.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              That is why we work with a secure digital environment where
              documents, reports, responsibilities, open questions and next steps
              are collected clearly in one place.
            </p>

            <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-700">
              <li>• Controlled access per client and adviser</li>
              <li>• Two-step verification for extra security</li>
              <li>• Fewer separate emails, screenshots and WhatsApp messages</li>
              <li>• One clear place for important purchase documents</li>
              <li>• Clear deadlines, versions and next steps</li>
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
                Part of your purchase journey
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Combine the report with the Buyer Discovery Trip.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                During our Buyer Discovery Trip, you do not only experience the
                regions, towns and properties on the Costa Blanca North. You also
                meet the professionals who can help you make a well-considered
                purchase decision.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Think of a lawyer, gestor, technical specialist, mortgage or
                bank contact, insurance partner, property manager and other
                trusted local parties.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                We can also introduce you to like-minded buyers and international
                residents in a similar life stage. This gives you insight not
                only into the property, but also into daily life, the local
                network and the practical reality of living in Spain.
              </p>

              <a
                href="/services/discovery-trips"
                className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Discover the Buyer Discovery Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER / ROLE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-[#c8a063]/30 bg-white p-10 shadow-sm lg:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Important to know
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
            We coordinate. The specialists assess.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Nordic Move Spain does not replace a lawyer, notary, gestor, tax
            adviser, technical specialist or building engineer. Each professional
            is responsible for their own assessment, report and advice. We
            coordinate the process, collect the findings and help you clearly
            understand the most important points of attention.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            The Purchase Safety Report is designed to better inform buyers before
            purchase. It is not an absolute guarantee that a property is fully
            free of risks or hidden defects. It does help you decide in a more
            structured, critical and confident way.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Buy with more certainty
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Are you considering a property on the Costa Blanca North?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Request a personal introduction and discover how the Purchase Safety
            Report can help you better understand legal, technical and practical
            risks before purchase.
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
