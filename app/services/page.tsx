import type { Metadata } from "next";

const pagePath = "/en/services/area-match";

export const metadata: Metadata = {
  title:
    "Area Match, Discovery Trip & Safer Property Buying | Nordic Move Spain",
  description:
    "Start with a complimentary Area Match Portfolio, explore suitable locations during a Buyer Discovery Trip, and buy with greater clarity through an independent Purchase Safety Report, secure client portal and Interior Design support.",
  keywords: [
    "Area Match Costa Blanca",
    "buy property Costa Blanca",
    "Buyer Discovery Trip Spain",
    "property buying guidance Spain",
    "Purchase Safety Report Spain",
    "safe property purchase Spain",
    "compare Costa Blanca areas",
    "buy villa Costa Blanca",
    "Interior Design Costa Blanca",
    "Nordic Move Spain",
  ],
  alternates: {
    canonical: pagePath,
    languages: {
      "en-GB": pagePath,
      "nl-NL": "/nl/services/area-match",
      "de-DE": "/de/services/area-match",
      "sv-SE": "/sv/services/area-match",
    },
  },
  openGraph: {
    title:
      "Area Match, Discovery Trip & Safer Property Buying | Nordic Move Spain",
    description:
      "Find the right area first, experience the Costa Blanca in person and buy with independent checks, a secure client portal and clear buyer-side guidance.",
    type: "website",
    locale: "en_GB",
    url: pagePath,
    images: [
      {
        url: "/images/brochure2-en.png",
        alt: "Nordic Move Spain services for a safer property purchase on the Costa Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Area Match, Discovery Trip & Safer Property Buying | Nordic Move Spain",
    description:
      "Complimentary Area Match Portfolio, Buyer Discovery Trip, independent Purchase Safety Report, secure client portal and Interior Design.",
    images: ["/images/brochure2-en.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    number: "01",
    eyebrow: "Complimentary orientation",
    title: "Area Match Portfolio",
    text:
      "You receive a complimentary, detailed and personal portfolio showing which regions, towns and property types best match your lifestyle, budget and long-term plans.",
    bullets: [
      "Personal lifestyle and location matching",
      "Information about suitable towns and residential areas",
      "Insight into amenities, healthcare, accessibility and daily life",
      "Greater clarity about the type of property that truly suits you",
      "A focused foundation for the next stage of your search",
    ],
    href: "/en/relocation-assessment",
    cta: "Request your complimentary Area Match Portfolio",
  },
  {
    number: "02",
    eyebrow: "Experience the area",
    title: "Buyer Discovery Trip",
    text:
      "During a carefully curated Discovery Trip, you explore the locations, properties and local lifestyle that fit your Area Match Portfolio. You do not simply see what is for sale. You experience where you could genuinely feel at home.",
    bullets: [
      "A personal route through suitable areas",
      "Selected property viewings based on your profile",
      "Local lifestyle experiences and relevant introductions",
      "Practical guidance about living and buying in Spain",
      "Support from arrival through to the next steps",
    ],
    href: "/en/services/discovery-trips",
    cta: "Explore the Buyer Discovery Trip",
    note:
      "When a villa is ultimately purchased through Nordic Move Spain, either half or the full trip cost is reimbursed depending on the purchase price. The exact reimbursement and applicable conditions are confirmed in writing in advance.",
  },
  {
    number: "03",
    eyebrow: "Independent purchase review",
    title: "Purchase Safety Report",
    text:
      "When a property becomes a serious option, independent specialists review the key legal, technical and practical risks. You receive one clear overview before making your final decision.",
    bullets: [
      "Legal points and ownership information",
      "Technical review of visible defects and maintenance concerns",
      "Insight into permits, extensions and possible liabilities",
      "Clear findings, open questions and recommended next steps",
      "Documents, reports, photographs and questions in a secure client portal",
    ],
    href: "/en/services/purchase-safety-report",
    cta: "View the Purchase Safety Report",
    note:
      "When a villa is ultimately purchased through Nordic Move Spain, the independent safety report is included in the purchase guidance. The precise scope of the review depends on the property, the available documentation and the availability of the appropriate specialists.",
  },
  {
    number: "04",
    eyebrow: "Move-in ready",
    title: "Interior Design",
    text:
      "After the purchase, we help transform the property into a complete and personal home. We develop the interior direction, select suitable materials and furniture, and coordinate delivery with trusted local partners.",
    bullets: [
      "Personal interior direction",
      "Furniture, material and colour selection",
      "Styling, lighting and practical furnishing",
      "Coordination with local suppliers and partners",
      "A calm and fully prepared arrival",
    ],
    href: "/en/services/move-in-ready",
    cta: "Explore Interior Design",
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

function absoluteUrl(path: string) {
  return siteUrl ? `${siteUrl}${path}` : path;
}

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/en"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: absoluteUrl("/en/services"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Area Match & Buyer Journey",
      item: absoluteUrl(pagePath),
    },
  ],
};

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nordic Move Spain Buyer Journey",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.text,
      url: absoluteUrl(service.href),
      areaServed: {
        "@type": "Place",
        name: "Costa Blanca, Spain",
      },
      provider: {
        "@type": "Organization",
        name: "Nordic Move Spain",
      },
    },
  })),
};

export default function AreaMatchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
        {/* BREADCRUMBS */}
        <div className="px-6 pt-8 md:px-8">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
              <li>
                <a href="/en" className="transition hover:text-[#173252]">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a
                  href="/en/services"
                  className="transition hover:text-[#173252]"
                >
                  Services
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#173252]">
                Area Match &amp; Buyer Journey
              </li>
            </ol>
          </nav>
        </div>

        {/* HERO */}
        <section className="px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Nordic Move Buyer Journey
              </p>

              <h1 className="mt-6 font-serif text-5xl leading-[1.03] text-[#173252] md:text-7xl">
                First discover where you want to live. Then find the right
                property.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl">
                Our guidance consists of four clear services. You begin with a
                complimentary personal Area Match Portfolio, experience the
                region during a Buyer Discovery Trip, buy with greater confidence
                through an independent safety report and complete your home with
                Interior Design.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/en/relocation-assessment"
                  className="rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                >
                  Receive your complimentary portfolio
                </a>

                <a
                  href="/en/contact"
                  className="rounded-full border border-[#173252] px-8 py-4 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
                >
                  Schedule a personal consultation
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)] sm:translate-y-10">
                <img
                  src="/images/brochure1-en.png"
                  alt="Nordic Move Spain brochure about the Buyer Discovery Trip and Interior Design"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)]">
                <img
                  src="/images/brochure2-en.png"
                  alt="Nordic Move Spain brochure about safer property buying and the Purchase Safety Report"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE OVERVIEW */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Four services, one clear journey
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                From the first orientation to a home that is ready to live in.
              </h2>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="flex h-full flex-col rounded-[36px] bg-white p-8 shadow-sm md:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[#b88948]">
                        {service.eyebrow}
                      </p>

                      <h3 className="mt-4 font-serif text-3xl leading-tight text-[#173252] md:text-4xl">
                        {service.title}
                      </h3>
                    </div>

                    <span className="font-serif text-5xl text-[#d7bd94]">
                      {service.number}
                    </span>
                  </div>

                  <p className="mt-6 text-base leading-relaxed text-stone-600">
                    {service.text}
                  </p>

                  <ul className="mt-7 space-y-3 text-sm leading-relaxed text-stone-700">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b88948]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {service.note ? (
                    <p className="mt-7 text-xs leading-relaxed text-stone-500">
                      * {service.note}
                    </p>
                  ) : null}

                  <a
                    href={service.href}
                    className="mt-8 inline-flex w-fit items-center border-b border-[#b88948] pb-1 text-xs font-medium uppercase tracking-[0.22em] text-[#173252] transition hover:text-[#b88948]"
                  >
                    {service.cta} →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AREA MATCH */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#173252] p-10 text-white md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#d1a866]">
                  Service 01 · Area Match
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
                  A complimentary portfolio that gives your search direction.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/80">
                  The Area Match Portfolio is not a short result or a generic
                  recommendation. You receive a detailed personal document that
                  helps you understand which environment, town and property type
                  fit the way you want to live in Spain.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  The portfolio does more than tell you where you could search.
                  It also creates clarity about what you are actually looking
                  for. This prevents months of browsing properties that may look
                  attractive but do not suit your daily life.
                </p>

                <a
                  href="/en/relocation-assessment"
                  className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Request your complimentary Area Match Portfolio
                </a>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  What you receive
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "A personal profile of your lifestyle and residential preferences",
                    "A selection of suitable regions and towns",
                    "Information about atmosphere, accessibility and daily life",
                    "Insight into healthcare, amenities and international communities",
                    "Guidance on suitable property types and residential settings",
                    "A focused foundation for viewings and next steps",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-sm leading-relaxed text-stone-500">
                  The Area Match Portfolio is complimentary and without
                  obligation. Its content is tailored to your personal
                  situation, plans and preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DISCOVERY TRIP */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[40px] bg-white p-3 shadow-sm">
              <img
                src="/images/brochure1-en.png"
                alt="Nordic Move Spain brochure about the Buyer Discovery Trip and Nordic Circle"
                className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Service 02 · Buyer Discovery Trip
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Experience what life in the right area truly feels like.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Your Area Match Portfolio forms the foundation for a personal
                Discovery Trip. We create a route through the areas, properties
                and amenities that match your profile.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                You have time to experience the differences, ask focused
                questions and discover which environment suits you beyond the
                holiday season. The trip combines selected viewings with local
                knowledge and relevant lifestyle experiences.
              </p>

              <a
                href="/en/services/discovery-trips"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                View the Buyer Discovery Trip
              </a>

              <p className="mt-6 text-xs leading-relaxed text-stone-500">
                * When a villa is ultimately purchased through Nordic Move
                Spain, either half or the full trip cost is reimbursed depending
                on the purchase price. The exact reimbursement and applicable
                conditions are confirmed in writing in advance.
              </p>
            </div>
          </div>
        </section>

        {/* PURCHASE SAFETY */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="order-2 lg:order-1">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Service 03 · Purchase Safety
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Independent review before you make the final purchase.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                A beautiful presentation does not tell the full story. When a
                property becomes a serious option, we therefore arrange for the
                key legal, technical and practical points to be reviewed by
                independent specialists.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                The findings are brought together in one clear safety report.
                This helps you decide whether to proceed, add conditions,
                renegotiate or step away from the property.
              </p>

              <a
                href="/en/services/purchase-safety-report"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                View Purchase Safety
              </a>

              <p className="mt-6 text-xs leading-relaxed text-stone-500">
                * When a villa is ultimately purchased through Nordic Move
                Spain, the independent safety report is included in the purchase
                guidance. The exact scope of the review depends on the property,
                the available documentation and the availability of the
                appropriate specialists.
              </p>
            </div>

            <div className="order-1 overflow-hidden rounded-[40px] bg-white p-3 shadow-sm lg:order-2">
              <img
                src="/images/brochure2-en.png"
                alt="Nordic Move Spain Purchase Safety Report brochure"
                className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* SECURE CLIENT PORTAL */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-white p-10 shadow-sm md:p-14 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Secure client portal
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                  All important documents in one protected place.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  A property purchase involves documents, reports, photographs,
                  questions and open points. Instead of spreading this
                  information across emails and messages, relevant information
                  is organised in a secure client portal.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  This gives you a clearer overview of the current status,
                  important documentation and the next steps in your purchase
                  process.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "Purchase documents",
                    "Important documents and available ownership information collected in one clear environment.",
                  ],
                  [
                    "Reports and photographs",
                    "Technical and legal reports, together with relevant images, remain centrally accessible.",
                  ],
                  [
                    "Questions and open points",
                    "Outstanding matters and recommended next steps remain easy to follow.",
                  ],
                  [
                    "Protected access",
                    "Documents are shared through a controlled client environment instead of being scattered across multiple channels.",
                  ],
                ].map(([title, text]) => (
                  <article
                    key={title}
                    className="rounded-[26px] bg-[#f6f1ea] p-6"
                  >
                    <h3 className="font-serif text-2xl text-[#173252]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTERIOR DESIGN */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#e9dfd2]">
            <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                  Service 04 · Interior Design
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                  Arrive in a home that already feels like your own.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-stone-700">
                  After the purchase, we develop a clear interior direction with
                  you that suits the property, the surroundings and the way you
                  want to live.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  We guide the selection of furniture, materials, lighting and
                  styling and coordinate the practical delivery with trusted
                  local partners. This means you do not have to manage
                  everything remotely for months and can arrive in a fully
                  prepared home.
                </p>

                <a
                  href="/en/services/move-in-ready"
                  className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                >
                  Explore Interior Design
                </a>

                <p className="mt-6 text-xs leading-relaxed text-stone-500">
                  Design, budget, timing and delivery are tailored to the
                  property, your wishes and the availability of selected local
                  partners.
                </p>
              </div>

              <div className="min-h-[520px]">
                <img
                  src="/images/interior-design.png"
                  alt="Warm Mediterranean Interior Design for a villa on the Costa Blanca"
                  className="h-full min-h-[520px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-[#173252] px-8 py-16 text-center text-white md:px-14 md:py-20">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d1a866]">
              Begin with clarity
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
              First discover what truly suits you.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/75">
              Request your complimentary Area Match Portfolio and receive a
              clear, personal foundation for your property search on the Costa
              Blanca.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/en/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Receive your complimentary portfolio
              </a>

              <a
                href="/en/contact"
                className="rounded-full border border-white/70 px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#173252]"
              >
                Schedule an introductory call
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}