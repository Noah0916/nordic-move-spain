import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Complete Property Purchase File in Spain | Nordic Move Spain",
  description:
    "Keep all legal, financial, technical and notarial documents for your Spanish property purchase safely organised in one complete digital purchase file.",
  alternates: {
    canonical: "/services/complete-purchase-file",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Your Complete Property Purchase File in Spain",
    description:
      "One protected and clearly organised file for documents, checks, deadlines and approved final versions throughout your property purchase.",
    type: "website",
    locale: "en_GB",
    siteName: "Nordic Move Spain",
  },
};

const fileSections = [
  {
    number: "01",
    title: "Legal documents",
    text:
      "Draft agreements, reservation contracts, private purchase contracts, powers of attorney, property information and documents from your independent lawyer are brought together in a clear structure.",
  },
  {
    number: "02",
    title: "Mortgage and financing",
    text:
      "Bank applications, mortgage proposals, valuation reports, lending conditions, payment confirmations and important deadlines remain available in one central location.",
  },
  {
    number: "03",
    title: "Taxes and purchase costs",
    text:
      "Clear summaries of taxes, notary fees, registration costs and professional fees help you understand what has already been paid and which payments are still outstanding.",
  },
  {
    number: "04",
    title: "Technical checks",
    text:
      "Building reports, inspections, permits, registered areas, alterations, swimming-pool information and other technical points can be included in the purchase file.",
  },
  {
    number: "05",
    title: "Insurance and utilities",
    text:
      "Documents relating to property insurance, liability cover, electricity, water, internet and other services remain easy to find after the keys have been handed over.",
  },
  {
    number: "06",
    title: "Notary and final transfer",
    text:
      "The final title deed, payment records, registration details, handover documents and important post-completion information are retained as part of your complete purchase history.",
  },
];

const benefits = [
  {
    title: "One central location",
    text:
      "You no longer need to search through separate emails, WhatsApp conversations, downloads and different cloud folders.",
  },
  {
    title: "Clear document versions",
    text:
      "Drafts and final approved documents can be clearly separated, reducing the risk of accidentally working with an outdated version.",
  },
  {
    title: "Better deadline visibility",
    text:
      "Important dates, including payments, legal checks and the notary appointment, can be connected to the relevant documents and actions.",
  },
  {
    title: "Access based on each role",
    text:
      "Depending on the chosen setup, access can be adjusted for the buyer, lawyer, mortgage adviser, insurance provider or other professional involved.",
  },
  {
    title: "Greater peace of mind",
    text:
      "A well-organised purchase file reduces unnecessary stress and makes it easier to see which steps have been completed and what still requires attention.",
  },
  {
    title: "Useful after completion",
    text:
      "The file remains valuable for insurance questions, renovations, tax matters, a future sale and locating the original purchase documentation.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Your purchase file is created",
    text:
      "When your purchase support begins, a personal file is created with a clear basic structure for documents, responsibilities and important stages.",
  },
  {
    number: "02",
    title: "Documents are collected",
    text:
      "Relevant documents from the buyer, seller, lawyer, bank, notary and other parties are placed in the correct sections.",
  },
  {
    number: "03",
    title: "Versions are organised",
    text:
      "Drafts, amended versions and final approved documents are named logically and stored separately.",
  },
  {
    number: "04",
    title: "Outstanding actions are tracked",
    text:
      "Missing documents, questions, payment dates and approaching deadlines remain visible so that important actions are less likely to be overlooked.",
  },
  {
    number: "05",
    title: "Completion is recorded",
    text:
      "After the notary appointment, the final documents, payment confirmations and handover information are added to the file.",
  },
  {
    number: "06",
    title: "The file remains available",
    text:
      "After completion, you continue to have an organised collection of the important documents connected to your Spanish property.",
  },
];

const possibleDocuments = [
  "Passport and identification documents",
  "NIE documentation",
  "Reservation agreement",
  "Private purchase contract or arras agreement",
  "Nota Simple and Land Registry information",
  "Cadastral information",
  "Building and occupancy documentation",
  "Owners association documentation",
  "Technical inspections and reports",
  "Mortgage valuation report",
  "Mortgage offer and bank conditions",
  "Purchase-cost and tax overview",
  "Payment receipts and bank confirmations",
  "Powers of attorney and legal correspondence",
  "Energy performance certificate",
  "Insurance documentation",
  "Notarial title deed",
  "Land Registry submission documents",
  "Water and electricity transfer documents",
  "Important contact details for involved professionals",
];

const suitableFor = [
  {
    title: "Buyers purchasing remotely",
    text:
      "For buyers who are not permanently in Spain and need to follow documents from the Netherlands, Belgium, Germany, Switzerland, the United Kingdom or another country.",
  },
  {
    title: "Buyers using a mortgage",
    text:
      "For purchases involving bank conditions, valuations, supporting evidence and several important financial deadlines.",
  },
  {
    title: "Joint buyers",
    text:
      "For partners or family members buying together who need access to the same current information and documentation.",
  },
  {
    title: "More complex purchases",
    text:
      "For properties involving alterations, communal facilities, rental plans, technical questions or additional legal checks.",
  },
];

const faqItems = [
  {
    question: "Does the complete purchase file replace a lawyer?",
    answer:
      "No. The file organises information and documents, but it does not replace independent legal, tax, technical or financial advice. A specialist lawyer remains responsible for legal checks and legal advice.",
  },
  {
    question: "Which documents are included?",
    answer:
      "The exact contents depend on your purchase. They commonly include legal documents, ownership information, mortgage documents, tax summaries, technical reports, insurance documents, payment confirmations and final notarial documents.",
  },
  {
    question: "Can I upload documents myself?",
    answer:
      "The precise options depend on the technical platform used. The aim is to make it easy for relevant documents to be added to the correct section of the purchase file.",
  },
  {
    question: "Who can view my documents?",
    answer:
      "Access should only be given to people who have a relevant role in your purchase. Permissions can be configured per person or professional role, depending on the system used.",
  },
  {
    question: "Are old versions of documents deleted?",
    answer:
      "Older versions can be important for tracking changes. It is therefore sensible to retain drafts while clearly separating them from the final approved version.",
  },
  {
    question: "Is the file still useful after completion?",
    answer:
      "Yes. Original documents are useful for insurance questions, renovations, tax matters, administrative changes and a future sale.",
  },
  {
    question: "Is the file completely secure?",
    answer:
      "Security depends on the platform used, the access permissions, account settings and user behaviour. Strong passwords, restricted access and multi-factor authentication are important parts of a secure setup.",
  },
];

export default function CompletePurchaseFilePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden px-8 py-32">
        <img
          src="/images/legal.png"
          alt="Complete digital purchase file for a property in Spain"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl text-white">
          <nav
            aria-label="Breadcrumb navigation"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/70"
          >
            <a href="/" className="transition hover:text-white">
              Home
            </a>

            <span aria-hidden="true">/</span>

            <a
              href="/services"
              className="transition hover:text-white"
            >
              Services
            </a>

            <span aria-hidden="true">/</span>

            <span>Complete Purchase File</span>
          </nav>

          <p className="text-sm uppercase tracking-[0.35em] text-[#d7b47a]">
            Everything safely organised in one place
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Your complete purchase file for a property in Spain.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            One organised location for the legal, financial, technical, tax and
            notarial documents connected to your entire property purchase.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Discuss your purchase file
            </a>

            <a
              href="/services"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              View all services
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              More clarity and less scattered information
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              A property purchase involves much more than one contract.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-relaxed text-stone-700">
              During a property purchase in Spain, you may receive documents
              from estate agents, lawyers, banks, mortgage advisers, insurance
              providers, technical specialists, notaries and public
              authorities.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Without a clear structure, important information can become
              scattered across email, WhatsApp, downloads and personal folders.
              This can create uncertainty about which version is final, which
              documents are still missing and which deadlines are approaching.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              The complete purchase file brings the most important information
              together in one logically organised overview. This makes the
              purchase easier to follow and keeps valuable documentation
              available after completion.
            </p>
          </div>
        </div>
      </section>

      {/* FILE CONTENTS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Contents of the purchase file
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              The important parts of your property purchase clearly organised.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {fileSections.map((section) => (
              <article
                key={section.number}
                className="rounded-[34px] bg-white p-9 shadow-sm"
              >
                <p className="text-sm tracking-[0.3em] text-[#c8a063]">
                  {section.number}
                </p>

                <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {section.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#e9dfd2] px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
                Why use one central purchase file?
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Greater control over documents, versions and important steps.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-700">
                A well-organised file does not remove every risk, but it helps
                you manage information more effectively and make decisions
                using the correct documents.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-[30px] bg-white p-8 shadow-sm"
                >
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {benefit.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    {benefit.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <img
            src="/images/aftercare.png"
            alt="Protected access to property-purchase documents"
            className="h-[620px] w-full rounded-[38px] object-cover shadow-xl"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Careful handling of sensitive information
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Important documents should not be scattered across separate
              messages.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              A purchase file may contain personal identification, financial
              information, bank documents, contracts and ownership records.
              Access therefore needs to be carefully managed.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Depending on the platform used, the file can be protected with
              individual accounts, restricted permissions, strong passwords
              and multi-factor authentication. Only people with a clear role in
              the purchase should receive access to relevant documents.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              A digital file is not automatically completely secure. The
              technical platform, its settings, access permissions and user
              behaviour all remain important factors in protecting
              information.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white/45 px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            How it works
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            From the first documents to a complete file after key handover.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="border-l border-[#c8a063]/40 pl-7"
              >
                <p className="text-sm tracking-[0.3em] text-[#c8a063]">
                  {step.number}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {step.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENT LIST */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Possible documents
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Which information can be included in the purchase file?
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-stone-600">
              The precise contents vary according to the property, municipality,
              financing arrangements and personal circumstances. Not every
              document applies to every purchase.
            </p>
          </div>

          <div className="rounded-[38px] bg-[#1e2a3a] p-10 text-white md:p-12">
            <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
              {possibleDocuments.map((document) => (
                <div
                  key={document}
                  className="flex gap-4 border-b border-white/10 pb-5"
                >
                  <span
                    aria-hidden="true"
                    className="text-xl text-[#d7b47a]"
                  >
                    ✓
                  </span>

                  <span className="leading-relaxed text-white/85">
                    {document}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="bg-[#e9dfd2] px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
            Who is it suitable for?
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Especially valuable when several documents, parties and deadlines
            come together.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {suitableFor.map((profile) => (
              <article
                key={profile.title}
                className="rounded-[32px] bg-white p-8 shadow-sm"
              >
                <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {profile.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {profile.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT DISTINCTION */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Organisation is not legal approval
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            A complete file does not replace independent professional checks.
          </h2>

          <div className="mt-10 grid gap-10 text-lg leading-relaxed text-stone-600 lg:grid-cols-2">
            <div>
              <p>
                The presence of a document in the file does not automatically
                mean it has been legally, technically or financially approved.
                The information must still be reviewed by the appropriate
                independent professional.
              </p>

              <p className="mt-6">
                Your lawyer may check ownership, contracts, debts and
                permissions. A technical specialist assesses the condition of
                the property. A tax adviser deals with personal tax questions.
              </p>
            </div>

            <div>
              <p>
                The purchase file supports this cooperation by making
                information clearly available. It makes it easier to see which
                documents are present, which version is current and which
                questions remain unresolved.
              </p>

              <p className="mt-6">
                Nordic Move Spain coordinates and organises where appropriate,
                but does not automatically assume the legal responsibility of
                independent lawyers, notaries, banks or other professional
                advisers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Frequently asked questions
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Questions about the complete purchase file.
          </h2>

          <div className="mt-12 space-y-5">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[28px] bg-white p-7 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-serif text-2xl leading-tight text-[#1e2a3a]">
                  <span className="flex items-center justify-between gap-6">
                    {item.question}

                    <span className="text-[#c8a063] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>

                <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-12 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d7b47a]">
            Greater clarity during your purchase
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl font-serif text-5xl leading-tight">
            Would you like to begin your Spanish property purchase in a more
            organised way?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Speak with Nordic Move Spain about how a personal purchase file can
            become part of your property-purchase support.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Arrange an introductory call
            </a>

            <a
              href="/services"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Return to all services
            </a>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="px-8 pb-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm leading-relaxed text-stone-500">
            This page provides general information about organising a property
            purchase file and does not guarantee complete digital security. The
            protection of documents depends on the chosen technical platform,
            its settings, access permissions and how it is used. The service
            does not replace independent legal, tax, technical or financial
            advice.
          </p>
        </div>
      </section>
    </main>
  );
}