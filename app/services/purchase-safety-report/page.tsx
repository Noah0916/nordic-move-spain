export const metadata = {
  title: "Purchase Safety Report | Buy Property Safely on the Costa Blanca North",
  description:
    "An independent purchase safety report for buyers who want legal, technical and practical clarity before buying a property on the Costa Blanca North.",
  openGraph: {
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Do not buy on feeling alone. Have a property on the Costa Blanca North reviewed by independent professionals before you buy.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "A clear purchase report with independent legal, technical and practical checks before you buy in Spain.",
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
            Schedule a consultation
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
              Buy safely in Spain
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[1] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-7xl">
              Purchase Safety Report
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white">
              An independent purchase safety report for buyers who do not want
              to buy a property on the Costa Blanca North based on feeling alone,
              but with clear legal, technical and practical insight.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Request a private consultation
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
              Check first, decide later
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
              extension that is not correctly registered, unclear plot boundaries,
              technical defects, damp, septic tanks, community rules or
              unexpected costs.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              The Purchase Safety Report helps you bring these points into focus
              before buying. We coordinate the purchase review with independent
              professionals and bring their findings together in a clear overview.
              This helps you decide whether to proceed with confidence, renegotiate
              or step away from the property.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Our role is not to replace legal, tax or technical advice. Our role
              is to bring the right specialists to the table, structure the
              process and make the most important points understandable for
              international buyers.
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
              Expert checks for one clear purchase picture.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Depending on the property and the situation, we work with an
              independent lawyer, notary, gestor and technical building specialist.
              Each professional looks at the property and the purchase process
              from their own area of expertise.
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
                The lawyer reviews the legal side of the purchase. This can
                include ownership, the Nota Simple, possible charges, outstanding
                debts, purchase contracts, permits, registered details and legal
                risks that should be clear before signing.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                The lawyer works independently and is responsible for their own
                legal assessment. This helps you understand which legal points
                need to be resolved or investigated further before moving ahead.
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
                The notary plays an important role in the formal property
                transfer. The notary checks the identity of the parties, oversees
                the signing of the title deed and ensures that the transfer is
                recorded according to the correct procedure.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                A gestor or administrative specialist can also help with practical
                and administrative checks, such as cadastral data, plot
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
                condition of the property. This can include damp, cracks, roof,
                installations, pipes, electrics, swimming pool, septic tank,
                maintenance risks and possible renovation points.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                This review helps estimate hidden costs more clearly and prevents
                you from discovering only after purchase that important technical
                elements need attention or investment.
              </p>
            </div>
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
            From documents to the septic tank: the points buyers often discover too late.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Ownership, Nota Simple and possible charges",
              "Purchase contracts, conditions and legal points",
              "Cadastral data, plot boundaries and registered surface areas",
              "Extensions, outbuildings, terraces and possible permits",
              "Damp, cracks, roof, swimming pool and visible maintenance risks",
              "Septic tank, pipes, electrics and practical infrastructure",
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
              Proceed, renegotiate or walk away.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/80">
              The goal of the Purchase Safety Report is not to make a purchase
              more complicated. The goal is to give you clarity and peace of mind
              before making a major financial decision.
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
                <h3 className="font-serif text-2xl text-white">Orange</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  There are points of attention. Buy only under conditions, after
                  additional checks or with adjusted negotiation.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Red</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  There are serious risks where walking away from the property may
                  be the sensible decision.
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
              When buying in Spain, sensitive documents are often shared:
              passports, ownership information, contracts, bank details, tax
              documents, technical reports and legal documents. We believe this
              information should be handled carefully.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              That is why, where possible, we work with a secure digital
              environment where documents, reports, responsibilities and next
              steps are collected in an organised way.
            </p>

            <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-700">
              <li>• Controlled access per client and advisor</li>
              <li>• Two-step authentication for extra security</li>
              <li>• Fewer loose emails, screenshots and WhatsApp messages</li>
              <li>• One central place for important purchase documents</li>
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
                Part of your buying journey
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Combine the report with the Buyer Discovery Trip.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                During our Buyer Discovery Trip, you experience not only the
                regions, towns and properties on the Costa Blanca North. You also
                meet the professionals who can help you make a well-informed
                purchase decision.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                This can include a lawyer, gestor, technical specialist, mortgage
                or banking contact, insurance partner, property manager and other
                trusted local contacts.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                We can also introduce you to like-minded buyers and international
                residents who are in a similar life stage. This gives you insight
                not only into the property, but also into daily life, the
                community and the practical reality of living in Spain.
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
            advisor, technical specialist or building engineer. Each professional
            is responsible for their own assessment, reporting and advice. We
            coordinate the process, collect the findings and help you understand
            the most important points clearly.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            The Purchase Safety Report is designed to better inform buyers before
            purchase. It is not an absolute guarantee that a property is entirely
            free from risks or hidden defects. It does help you decide in a more
            structured, critical and confident way.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Buy with more confidence
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Are you considering a property on the Costa Blanca North?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Request a private consultation and discover how the Purchase Safety
            Report can help you better understand legal, technical and practical
            risks before buying.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Schedule a consultation
            </a>

            <a
              href="/"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Back to website
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
