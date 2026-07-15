export const metadata = {
  title: "UK Tax Rules for a Second Home in Spain | Nordic Move Spain",
  description:
    "A practical guide for UK tax residents buying a second home in Spain. Understand Spanish non-resident tax, Modelo 210, rental income, capital gains, 3% withholding, double taxation relief and key questions before buying on the Costa Blanca.",
  keywords: [
    "UK tax second home Spain",
    "UK tax resident Spanish property",
    "Modelo 210 Spain property",
    "Spanish non resident tax property",
    "buying property Spain UK resident",
    "UK capital gains tax overseas property",
    "Spanish rental income UK tax",
    "second home Spain tax UK",
    "Costa Blanca property tax UK buyers",
    "double taxation Spain UK property",
  ],
  alternates: {
    canonical: "/guides/uk-tax-second-home-spain",
  },
  openGraph: {
    title: "UK Tax Rules for a Second Home in Spain | Nordic Move Spain",
    description:
      "Understand what British and UK-based buyers should know about Spanish property tax, UK reporting, rental income, capital gains and double taxation before buying in Spain.",
    type: "article",
    locale: "en_GB",
    images: [
      {
        url: "/images/discover-card.png",
        width: 1200,
        height: 630,
        alt: "UK tax rules for buying a second home in Spain",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "UK Tax Rules for a Second Home in Spain",
  description:
    "A practical guide for UK tax residents buying a second home, holiday home or investment property in Spain.",
  inLanguage: "en-GB",
  about: [
    "UK tax resident Spanish property",
    "Modelo 210",
    "Spanish non-resident tax",
    "Capital gains tax overseas property",
    "Double taxation relief Spain UK",
  ],
  areaServed: ["United Kingdom", "Spain", "Costa Blanca", "Costa Blanca North"],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.nordicmovespain.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Buyer Guides",
      item: "https://www.nordicmovespain.com/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "UK Tax Rules for a Second Home in Spain",
      item: "https://www.nordicmovespain.com/guides/uk-tax-second-home-spain",
    },
  ],
};

export default function UkTaxSecondHomeSpainPage() {
  const keyPoints = [
    {
      title: "Spain can tax the property",
      text:
        "Because the property is located in Spain, Spanish tax rules can apply to purchase taxes, local property tax, non-resident income tax, rental income and capital gains when selling.",
    },
    {
      title: "The UK may still be relevant",
      text:
        "If you are UK tax resident, the UK may also be relevant because UK residents normally need to consider foreign income and overseas capital gains.",
    },
    {
      title: "Modelo 210 is important",
      text:
        "Non-resident owners in Spain commonly need to file Modelo 210. This can apply to rental income, capital gains and imputed income from Spanish real estate.",
    },
    {
      title: "Double taxation relief needs paperwork",
      text:
        "The UK-Spain double taxation agreement may help reduce double taxation, but you still need correct reporting, proof of tax paid and proper records.",
    },
  ];

  const spanishTaxItems = [
    {
      title: "Purchase taxes and buying costs",
      text:
        "When buying in Spain, buyers normally need to budget for taxes and costs such as transfer tax on resale property, VAT and stamp duty on certain new-build property, notary fees, land registry fees, legal fees and sometimes mortgage-related costs.",
    },
    {
      title: "IBI: local property tax",
      text:
        "IBI is the annual local property tax paid to the town hall. It is based on the cadastral value of the property, not necessarily the current market value.",
    },
    {
      title: "Community fees",
      text:
        "Community fees are not a tax, but they are a key ongoing cost. They may cover pools, gardens, lifts, lighting, maintenance, security, insurance and administration in apartment buildings or residential communities.",
    },
    {
      title: "Modelo 210",
      text:
        "Modelo 210 is used by non-residents without a permanent establishment to declare certain Spanish-source income, including income, capital gains and imputed real-estate income.",
    },
  ];

  const scenarios = [
    {
      title: "Private use only",
      text:
        "If you use your Spanish property only as a private holiday home and do not rent it out, Spain may still require non-resident tax reporting on imputed income. This is a deemed income calculation, not rent you actually receive.",
    },
    {
      title: "Rental income",
      text:
        "If you rent out the property, Spain can tax the rental income because the property is located in Spain. If you are UK tax resident, the rental income may also need to be considered in your UK tax position.",
    },
    {
      title: "Selling the property",
      text:
        "When a non-resident sells Spanish property, the buyer generally withholds 3% of the agreed price and pays it to the Spanish tax authorities as a payment on account of the seller’s tax liability. UK residents may also need to consider UK Capital Gains Tax on overseas property.",
    },
    {
      title: "Becoming Spanish tax resident",
      text:
        "Some buyers start with a second home and later spend more time in Spain. If your tax residence changes, Spain may become relevant to your worldwide income and assets. This should be reviewed before you increase your time in Spain.",
    },
  ];

  const records = [
    "Purchase deed and completion statement",
    "Legal invoices and notary costs",
    "Land registry and property registration documents",
    "Mortgage documents",
    "Renovation and improvement invoices",
    "IBI receipts",
    "Community fee records",
    "Rental income records",
    "Spanish tax filings",
    "Proof of Spanish tax paid",
    "Sale agreement and estate agent invoices",
    "Currency exchange records where relevant",
  ];

  const mistakes = [
    {
      title: "Thinking Spanish tax only matters if you rent out",
      text:
        "Private-use property can still create Spanish non-resident tax obligations through imputed income.",
    },
    {
      title: "Forgetting Modelo 210",
      text:
        "Modelo 210 is one of the most commonly missed annual obligations by foreign owners in Spain.",
    },
    {
      title: "Assuming UK tax stops at the border",
      text:
        "If you are UK tax resident, overseas rental income and overseas property gains may still need to be considered for UK tax purposes.",
    },
    {
      title: "Not checking rental rules before buying",
      text:
        "Rental potential is not the same as rental permission. Check tourist rental rules, community restrictions, licence requirements, tax and practical management before you buy.",
    },
    {
      title: "Ignoring capital gains until the sale",
      text:
        "Capital gains calculations are much easier when purchase costs, improvement invoices and tax records have been kept from the start.",
    },
    {
      title: "Choosing ownership structure too casually",
      text:
        "Buying alone, jointly, with family money or through a company can have different tax, legal and inheritance consequences.",
    },
  ];

  const questions = [
    "Will the property be used privately, rented out, or both?",
    "Will I need to file Modelo 210 in Spain each year?",
    "Who will handle my Spanish non-resident tax returns?",
    "Do I need to report Spanish rental income to HMRC?",
    "How will Spanish tax paid be treated in the UK?",
    "What happens if I sell the property later?",
    "What documents should I keep from day one?",
    "What are the annual IBI and community fees?",
    "Can the property legally be rented out?",
    "Could the community restrict holiday rentals?",
    "Should I take UK and Spanish tax advice before buying?",
    "Could my tax residence change if I spend more time in Spain?",
  ];

  const usefulSources = [
    {
      label: "HMRC: Tax on foreign income",
      href: "https://www.gov.uk/tax-foreign-income",
    },
    {
      label: "HMRC: UK residence and foreign income",
      href: "https://www.gov.uk/tax-foreign-income/residence",
    },
    {
      label: "HMRC: Reporting foreign income",
      href: "https://www.gov.uk/tax-foreign-income/paying-tax",
    },
    {
      label: "HMRC: Selling overseas property",
      href: "https://www.gov.uk/tax-sell-property/selling-overseas-property",
    },
    {
      label: "HMRC: Capital Gains Tax",
      href: "https://www.gov.uk/capital-gains-tax/what-you-pay-it-on",
    },
    {
      label: "HMRC: Spain tax treaties",
      href: "https://www.gov.uk/government/publications/spain-tax-treaties",
    },
    {
      label: "Spanish Tax Agency: Modelo 210 deadlines",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/irnr-sin-establecimiento-permanente/declaracion-irnr-sin-establecimiento-permanente/modelo-plazo-declaracion.html",
    },
    {
      label: "Spanish Tax Agency: Modelo 210 instructions",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/todas-gestiones/impuestos-tasas/impuesto-sobre-renta-no-residentes/modelo-210-irnr______a-no-residentes-permanente_/instrucciones.html",
    },
    {
      label: "Spanish Tax Agency: 3% withholding for non-resident sellers",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/irnr-sin-establecimiento-permanente/retenciones-irnr-sin-establecimiento-permanente/retencion-adquirente-inmueble.html",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
        {/* HERO */}
        <section className="relative min-h-[90vh] overflow-hidden">
          <img
            src="/images/discover-card.png"
            alt="UK tax rules for buying a second home in Spain"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10"></div>

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                UK buyers · Spanish property tax
              </p>

              <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
                UK tax rules for a second home in Spain.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                A practical guide for British and UK-based buyers who want to
                understand Spanish property taxes, Modelo 210, rental income,
                capital gains, 3% withholding and double taxation before buying
                on the Costa Blanca.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/relocation-assessment"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Request your Area Match Report
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
                >
                  Schedule a consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Before you buy
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  A Spanish second home is a lifestyle decision, but also a tax
                  and planning decision.
                </h2>
              </div>

              <div className="text-lg leading-relaxed text-stone-600">
                <p>
                  Many British buyers focus first on the property: the sea view,
                  the pool, the terrace, the town and the lifestyle. Those
                  things matter. But if you are a UK tax resident buying
                  property in Spain, the tax position should be understood
                  before you buy, not after completion.
                </p>

                <p className="mt-6">
                  Owning a Spanish property can create obligations in Spain and,
                  depending on your residence status and use of the property,
                  reporting obligations in the UK as well. The right structure,
                  records and expectations can save stress later.
                </p>

                <p className="mt-6">
                  This guide is general information only and does not replace
                  personal advice from a qualified UK and Spanish tax adviser.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLARIFICATION */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Important clarification
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              In tax terms, the key question is usually whether you are UK tax
              resident.
            </h2>

            <div className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
              <p>
                People often search for “English tax rules for buying in Spain”
                or “English tax second home Spain”. In tax terms, the more
                accurate phrase is usually UK tax resident. UK tax rules may
                apply if you are resident in the United Kingdom, whether you live
                in England, Scotland, Wales or Northern Ireland.
              </p>

              <p className="mt-6">
                This guide therefore refers to UK tax residents and British
                buyers, not only English buyers.
              </p>
            </div>
          </div>
        </section>

        {/* KEY POINTS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                The basic principle
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Two tax systems may be relevant: Spain and the UK.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Spain may be relevant because the property is located in Spain.
                The UK may be relevant because UK tax residents generally need
                to consider foreign income and overseas gains. The double
                taxation agreement can help, but it does not remove the need for
                correct filings and records.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {keyPoints.map((point) => (
                <div key={point.title} className="rounded-[32px] bg-white p-9 shadow-sm">
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    {point.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPANISH TAX ITEMS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Spanish property taxes
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Spanish taxes and costs connected to owning property.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {spanishTaxItems.map((item) => (
                <div key={item.title} className="rounded-[32px] bg-white/75 p-8">
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-stone-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCENARIOS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Private use, rental and sale
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Your tax position depends on how you use the property.
              </h2>
            </div>

            <div className="grid gap-8">
              {scenarios.map((item) => (
                <div key={item.title} className="rounded-[32px] bg-white p-9 shadow-sm">
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-5xl leading-relaxed text-stone-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RECORDS */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Records and evidence
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Good records make tax reporting and capital gains calculations
                much easier.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Keep your records from day one. They may become important years
                later when calculating capital gains, proving costs, reporting
                rental income or claiming relief for tax already paid in Spain.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {records.map((record) => (
                  <div key={record} className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="leading-relaxed text-stone-700">{record}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMMON MISTAKES */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Common mistakes
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Common tax mistakes British buyers make in Spain.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {mistakes.map((mistake) => (
                <div key={mistake.title} className="rounded-[32px] bg-white p-9 shadow-sm">
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    {mistake.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    {mistake.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUESTIONS */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Before you buy
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Key questions to ask before buying a second home in Spain.
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {questions.map((question) => (
                <div key={question} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="leading-relaxed text-stone-700">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NORDIC MOVE POSITION */}
        <section className="px-8 pb-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Why this matters
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Safe buying guidance is about more than the view and the asking
                price.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                At Nordic Move Spain, we believe buyers should understand more
                than the terrace, the pool and the photos. A good purchase
                decision also includes legal, technical, financial and practical
                clarity.
              </p>

              <p className="mt-6">
                Our process starts with Area Match and continues with careful
                pre-purchase checks. Through the Purchase Safety Report,
                independent specialists can review key legal and technical risks.
                Tax advice should always be handled by qualified tax
                professionals, but we help buyers ask the right questions early
                and keep the process structured.
              </p>

              <p className="mt-6">
                For British buyers, this is especially important because Spain
                and the UK can both be relevant. A second home in Spain can be a
                wonderful lifestyle decision, but it should be bought with clear
                expectations about tax, ownership, rental use, reporting and
                long-term planning.
              </p>
            </div>
          </div>
        </section>

        {/* SUMMARY CTA */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Summary
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
              Understand the tax framework before you buy.
            </h2>

            <p className="mt-8 max-w-5xl text-xl leading-relaxed text-white/85">
              Buying a second home in Spain as a UK tax resident can create tax
              obligations in both Spain and the UK. Spain may tax the property
              because it is located in Spain. The UK may also be relevant because
              UK tax residents generally need to consider foreign income and
              overseas gains.
            </p>

            <p className="mt-6 max-w-5xl text-lg leading-relaxed text-white/75">
              The best approach is simple: use qualified advisers in both
              countries, keep good records, understand Modelo 210 and do not
              treat a Spanish property as only a lifestyle purchase. It is also
              a legal, financial and long-term planning decision.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Request your Area Match Report
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Schedule a consultation
              </a>
            </div>
          </div>
        </section>

        {/* AUTHOR NOTE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Written by Nordic Move Spain
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Independent guidance for international buyers on the Costa Blanca.
            </h2>

            <p className="mt-6 max-w-5xl text-lg leading-relaxed text-stone-700">
              Nordic Move Spain guides international buyers through safer
              property decisions on the Costa Blanca. Our approach combines Area
              Match, independent buying guidance, legal and technical review
              partners, a secure client portal and soft landing support.
            </p>

            <p className="mt-6 max-w-5xl text-lg leading-relaxed text-stone-700">
              Last updated: July 2026. This guide provides general information
              and should be checked with qualified UK and Spanish tax advisers
              before you make financial or legal decisions.
            </p>
          </div>
        </section>

        {/* SOURCES */}
        <section className="px-8 pb-32">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Useful official sources
            </p>

            <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
              Tax rules can change and personal circumstances matter. Use these
              official sources as a starting point and always confirm your
              personal position with qualified UK and Spanish tax advisers before
              buying, renting or selling.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {usefulSources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#f6f1ea] p-5 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#efe6d9]"
                >
                  {source.label} →
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
