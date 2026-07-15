export const metadata = {
  title: "UK Tax Rules for a Second Home in Spain | Beckham Law & Spanish Property Tax",
  description:
    "A practical guide for UK buyers considering a second home, rental property or relocation to Spain. Understand UK tax residence, Spanish rental income, HMRC reporting, Foreign Tax Credit Relief, Capital Gains Tax, Modelo 210, the Beckham Law and key records to keep.",
  keywords: [
    "UK tax rules second home Spain",
    "UK tax on Spanish property",
    "Spanish property rental income UK tax",
    "Modelo 210 Spain property",
    "UK capital gains tax overseas property",
    "Foreign Tax Credit Relief Spain UK",
    "Beckham Law Spain UK buyers",
    "buying second home in Spain tax",
    "UK residents buying property in Spain",
    "Nordic Move Spain UK tax Spain",
  ],
  alternates: {
    canonical: "/guides/uk-tax-second-home-spain",
    languages: {
      en: "/guides/uk-tax-second-home-spain",
      nl: "/nl/guides/uk-tax-second-home-spain",
      de: "/de/guides/uk-tax-second-home-spain",
      sv: "/sv/guides/uk-tax-second-home-spain",
    },
  },
  openGraph: {
    title: "UK Tax Rules for a Second Home in Spain | Nordic Move Spain",
    description:
      "UK tax residence, Spanish rental income, double taxation relief, Capital Gains Tax, Modelo 210 and the Beckham Law explained for UK buyers considering Spanish property.",
    type: "article",
    locale: "en_GB",
    images: [
      {
        url: "/images/practical-guidance.png",
        width: 1200,
        height: 630,
        alt: "UK tax rules for buying a second home in Spain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Tax Rules for a Second Home in Spain",
    description:
      "A practical tax guide for UK buyers considering a Spanish second home, rental property or relocation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.nordicmovespain.com",
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

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "UK Tax Rules for a Second Home in Spain",
  description:
    "A practical guide for UK buyers about UK tax residence, Spanish rental income, HMRC reporting, Foreign Tax Credit Relief, Capital Gains Tax, Modelo 210 and the Beckham Law.",
  inLanguage: "en-GB",
  author: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "https://www.nordicmovespain.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "https://www.nordicmovespain.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.nordicmovespain.com/guides/uk-tax-second-home-spain",
  },
  about: [
    "UK tax residence",
    "Spanish property tax",
    "second home in Spain",
    "Foreign Tax Credit Relief",
    "Modelo 210",
    "Beckham Law",
    "Spanish rental income",
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do UK residents pay UK tax on Spanish rental income?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "UK residents normally pay UK tax on foreign income, including overseas property rental income. Spanish tax may also apply, and Foreign Tax Credit Relief may be available depending on the rules and the amount of tax paid abroad.",
      },
    },
    {
      "@type": "Question",
      name: "Does the UK tax the sale of a Spanish property?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "UK residents can be liable to UK Capital Gains Tax when disposing of overseas property. Spain may also tax the gain, so double taxation relief and proper record keeping are important.",
      },
    },
    {
      "@type": "Question",
      name: "What is Modelo 210?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Modelo 210 is used in Spain for Non-Resident Income Tax declarations, including certain rental income, capital gains and imputed income from Spanish real estate for non-resident taxpayers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Beckham Law in Spain?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The Beckham Law is the common name for Spain's special inbound worker regime under article 93 of the Spanish Personal Income Tax Law. Eligible taxpayers who move to Spain may be taxed under a special regime and use forms 149 and 151. It is not automatic and requires specialist advice.",
      },
    },
    {
      "@type": "Question",
      name: "Should UK buyers get tax advice before buying in Spain?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. UK and Spanish tax rules interact. UK buyers should speak to a qualified UK tax adviser, Spanish tax adviser and independent lawyer before buying, renting, selling or relocating.",
      },
    },
  ],
};

export default function UKTaxSecondHomeSpainPage() {
  const quickFacts = [
    {
      title: "UK residence matters",
      text:
        "If you are UK tax resident, you will normally need to consider UK tax on foreign income and gains, including Spanish rental income and a future sale.",
    },
    {
      title: "Spain may tax the property too",
      text:
        "Spanish real estate can create Spanish tax obligations, including rental income, imputed income for non-residents, local property taxes and sale-related taxes.",
    },
    {
      title: "Double tax relief is not automatic cash back",
      text:
        "Foreign Tax Credit Relief may reduce UK tax when the same income or gain is taxed twice, but the amount depends on the rules and limits that apply.",
    },
    {
      title: "Beckham Law is for relocation cases",
      text:
        "Spain's special inbound worker regime can be relevant for some UK movers, but it is not a general second-home tax discount.",
    },
  ];

  const sections = [
    {
      title: "UK tax residence is the starting point",
      text: [
        "The first question for UK buyers is whether they are UK tax resident. UK tax residence affects whether foreign income and foreign gains may need to be reported to HMRC.",
        "A UK tax resident is normally taxable in the UK on worldwide income and gains. This can include rental income from a Spanish property and a capital gain when a Spanish property is sold.",
        "Owning property in Spain does not automatically remove UK tax obligations. The correct treatment depends on residence status, how the property is used, whether it is rented out, and whether the owner later sells or changes tax residence.",
      ],
    },
    {
      title: "Spanish rental income and UK tax",
      text: [
        "If a UK resident rents out a Spanish property, the rental income may need to be reported to HMRC. HMRC treats overseas property rental income as foreign income for UK tax purposes.",
        "Spain may also tax rental income from Spanish property. In practice, UK-resident owners may need to deal with both Spanish tax compliance and UK Self Assessment reporting.",
        "The UK tax return normally uses the foreign section to report overseas income or gains. If the Spanish rental income has already been taxed in Spain, the owner may be able to claim Foreign Tax Credit Relief in the UK, subject to the rules and limits that apply.",
      ],
    },
    {
      title: "Foreign Tax Credit Relief and double taxation",
      text: [
        "The UK and Spain have double taxation rules designed to reduce the risk of being taxed twice on the same income or gain.",
        "Double taxation relief does not always mean that the full amount of foreign tax is refunded or credited. The amount of relief depends on the UK rules, the double taxation agreement and the UK tax that would otherwise be due.",
        "This is why buyers should calculate rental profit carefully after Spanish tax, UK tax, management fees, cleaning, repairs, insurance, platform fees, utilities, community fees and empty weeks.",
      ],
    },
    {
      title: "Capital Gains Tax when selling a Spanish property",
      text: [
        "If a UK resident sells a Spanish property, UK Capital Gains Tax may be relevant. Spain may also tax a gain on the sale of Spanish real estate.",
        "Where the same gain is taxed in both countries, double taxation relief may be available, but the calculation can be technical.",
        "Owners should keep clear purchase and sale records, including the purchase deed, completion statement, legal fees, notary and registry costs, renovation invoices and selling costs.",
      ],
    },
    {
      title: "Modelo 210 and Spanish non-resident tax",
      text: [
        "A UK buyer who is not Spanish tax resident can still have Spanish tax obligations because the property is located in Spain.",
        "Modelo 210 is used for Non-Resident Income Tax declarations in Spain, including certain real estate income, imputed income and capital gains for non-resident taxpayers.",
        "Even if a Spanish property is not rented out, non-resident owners should check whether imputed income tax applies. If the property is rented, Spanish rental income reporting may also be required.",
      ],
    },
    {
      title: "What changes if the buyer moves to Spain?",
      text: [
        "Moving to Spain can change the tax picture completely. A person who becomes Spanish tax resident may have Spanish tax obligations on worldwide income and assets.",
        "At the same time, some UK income can remain taxable in the UK depending on its type and the treaty position.",
        "UK pensions, rental income, investments, capital gains, inheritance planning and currency movements can all become relevant when someone relocates.",
      ],
    },
  ];

  const beckhamPoints = [
    {
      title: "It is a relocation regime, not a holiday-home regime",
      text:
        "The Beckham Law is relevant where someone moves to Spain and qualifies under Spain's special inbound worker regime. It is not designed simply to reduce tax on a second home.",
    },
    {
      title: "Form 149 is used to opt in",
      text:
        "Spain's Tax Agency explains that Form 149 is used to communicate the option, resignation, exclusion or end of the special regime.",
    },
    {
      title: "Form 151 is used for the special tax return",
      text:
        "Taxpayers who opt for the special regime submit a special Personal Income Tax return using Form 151.",
    },
    {
      title: "Spanish-source taxation is central",
      text:
        "Under the regime, taxpayers are not considered residents for double tax treaty purposes because they are subject to tax only on income obtained from Spanish sources, with special rules for employment and certain economic activities.",
    },
    {
      title: "Employment withholding can be 24%",
      text:
        "The Spanish Tax Agency states that employment income withholding under the regime is 24%, with a higher withholding percentage applying to remuneration from the same payer above €600,000.",
    },
    {
      title: "Specialist advice is essential",
      text:
        "Eligibility, timing, employment structure, family members, assets and future property sales should be reviewed before relying on the regime.",
    },
  ];

  const recordItems = [
    "Spanish purchase deed",
    "Nota Simple and property registry documents",
    "Completion statement",
    "Legal, notary and land registry invoices",
    "Spanish tax payment confirmations",
    "Mortgage documents",
    "Community fee statements",
    "Rental income records",
    "Cleaning, repairs and management invoices",
    "Insurance documents",
    "Renovation invoices",
    "Sale documents if the property is later sold",
    "Currency exchange records where relevant",
  ];

  const mistakes = [
    {
      title: "Assuming Spanish tax is the only tax that matters",
      text:
        "UK residents may still need to report Spanish rental income and gains to HMRC.",
    },
    {
      title: "Treating gross rent as profit",
      text:
        "The real figure is what remains after tax, fees, cleaning, maintenance, management, empty weeks and replacement costs.",
    },
    {
      title: "Checking tourist rental rules too late",
      text:
        "Rental permissions, regional rules, local restrictions and homeowners association rules should be checked before relying on rental income.",
    },
    {
      title: "Ignoring future relocation plans",
      text:
        "A second home can later become a retirement base or main residence. That can change UK and Spanish tax consequences.",
    },
    {
      title: "Thinking Beckham Law applies automatically",
      text:
        "The Beckham Law is a specific Spanish relocation regime. It requires eligibility, documentation and specialist advice.",
    },
  ];

  const officialSources = [
    {
      label: "GOV.UK — Tax on foreign income",
      href: "https://www.gov.uk/tax-foreign-income",
    },
    {
      label: "GOV.UK — Reporting foreign income",
      href: "https://www.gov.uk/tax-foreign-income/paying-tax",
    },
    {
      label: "GOV.UK — If you are taxed twice",
      href: "https://www.gov.uk/tax-foreign-income/taxed-twice",
    },
    {
      label: "GOV.UK — Selling overseas property",
      href: "https://www.gov.uk/tax-sell-property/selling-overseas-property",
    },
    {
      label: "Agencia Tributaria — Form 210 Non-Resident Income Tax",
      href:
        "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/irnr-sin-establecimiento-permanente/declaracion-irnr-sin-establecimiento-permanente/modelo-plazo-declaracion.html",
    },
    {
      label: "Agencia Tributaria — Form 210 instructions",
      href:
        "https://sede.agenciatributaria.gob.es/Sede/en_gb/todas-gestiones/impuestos-tasas/impuesto-sobre-renta-no-residentes/modelo-210-irnr______a-no-residentes-permanente_/instrucciones.html",
    },
    {
      label: "Agencia Tributaria — Special inbound worker regime",
      href:
        "https://sede.agenciatributaria.gob.es/Sede/en_gb/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/regimenes-opcionales/regimen-especial-impatriados.html",
    },
    {
      label: "Agencia Tributaria — Form 149 Beckham Law option",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/procedimientoini/G606.shtml",
    },
    {
      label: "Agencia Tributaria — Form 151 special regime return",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/procedimientoini/G615.shtml",
    },
  ];

  const relatedGuides = [
    {
      href: "/guides/buying-property-spain",
      title: "Buying Property in Spain",
      text:
        "Understand the full buying process, legal checks, taxes, contracts and practical decisions before purchase.",
    },
    {
      href: "/guides/honest-guide-buying-property-costa-blanca-north",
      title: "Honest Guide to Buying Property on the Costa Blanca North",
      text:
        "Read about hidden costs, rental assumptions, community rules and practical risks that buyers often miss.",
    },
    {
      href: "/services/purchase-safety-report",
      title: "Purchase Safety Report",
      text:
        "When a property becomes serious, use structured checks to understand legal, technical and practical risks.",
    },
  ];

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
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
        {/* HERO */}
        <section className="relative flex min-h-[78vh] items-center overflow-hidden px-8 py-32">
          <img
            src="/images/practical-guidance.png"
            alt="UK tax rules for a second home in Spain"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15"></div>

          <div className="relative z-10 mx-auto max-w-6xl text-white">
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/75"
            >
              <a href="/" className="transition hover:text-white">
                Home
              </a>
              <span aria-hidden="true">/</span>
              <a href="/guides" className="transition hover:text-white">
                Buyer Guides
              </a>
              <span aria-hidden="true">/</span>
              <span>UK tax rules</span>
            </nav>

            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              UK buyers in Spain
            </p>

            <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
              UK tax rules for a second home in Spain.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              A practical guide to UK tax residence, Spanish rental income,
              HMRC reporting, Foreign Tax Credit Relief, Capital Gains Tax,
              Modelo 210 and the Beckham Law for UK buyers.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Request your Area Match
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Book an introduction
              </a>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-8 py-24">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Before you buy
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                A Spanish property can create UK and Spanish tax consequences.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Buying a home in Spain is not only a Spanish legal and property
                decision. For UK buyers, it can also create UK tax reporting
                obligations, especially if the buyer remains UK tax resident,
                rents out the property, sells the property later, or moves
                between the UK and Spain.
              </p>

              <p className="mt-6">
                This guide gives a practical overview for UK buyers considering a
                second home, holiday home, rental property or future retirement
                base in Spain. It is written for planning and research, not as
                personal tax advice.
              </p>

              <p className="mt-6">
                The safest approach is to connect the property decision with tax
                residence, rental plans, future relocation, ownership structure,
                inheritance planning and long-term exit strategy before you sign
                or transfer money.
              </p>
            </div>
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Quick facts
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Four tax points UK buyers should understand early.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {quickFacts.map((fact) => (
                <div
                  key={fact.title}
                  className="rounded-[28px] bg-white p-7 shadow-sm"
                >
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {fact.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-stone-600">
                    {fact.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE SECTIONS */}
        <section className="px-8 pb-24">
          <div className="mx-auto max-w-7xl space-y-8">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className={`rounded-[36px] p-12 ${
                  index % 2 === 0 ? "bg-white shadow-sm" : "bg-[#efe7dc]"
                }`}
              >
                <h2 className="font-serif text-5xl leading-tight text-[#1e2a3a]">
                  {section.title}
                </h2>

                <div className="mt-8 space-y-6 text-lg leading-relaxed text-stone-600">
                  {section.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BECKHAM LAW */}
        <section className="px-8 pb-24">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Beckham Law / Beckham regime
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
              The Beckham Law can matter for UK movers, but it is not a general
              second-home tax rule.
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-white/80">
              The “Beckham Law” is the common name for Spain’s special inbound
              worker regime under article 93 of the Spanish Personal Income Tax
              Law. It can be relevant when someone relocates to Spain for work,
              professional activity, entrepreneurship or certain qualifying
              situations. It is not automatic and should not be assumed to apply
              simply because a UK buyer purchases a Spanish property.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {beckhamPoints.map((item) => (
                <div key={item.title} className="rounded-[30px] bg-white/10 p-8">
                  <h3 className="font-serif text-3xl text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-white/75">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-[32px] bg-white/10 p-8">
              <h3 className="font-serif text-3xl text-white">
                Why this matters for UK property buyers
              </h3>

              <p className="mt-5 leading-relaxed text-white/75">
                A UK buyer who buys a holiday home in Spain is usually dealing
                with property ownership, rental income, Modelo 210, UK reporting
                and potential Capital Gains Tax. A UK buyer who moves to Spain
                for work may also need to check whether the Beckham Law could
                apply. These are different planning questions. A property
                purchase should never be structured around the Beckham regime
                without specialist Spanish and UK tax advice.
              </p>
            </div>
          </div>
        </section>

        {/* RECORDS */}
        <section className="px-8 pb-24">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Records to keep
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Good records make UK and Spanish reporting much easier.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {recordItems.map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="leading-relaxed text-stone-700">• {item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMON MISTAKES */}
        <section className="px-8 pb-24">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-[#efe7dc] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Common mistakes
            </p>

            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Tax mistakes UK buyers often make when buying in Spain.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {mistakes.map((item) => (
                <div key={item.title} className="rounded-[30px] bg-white/80 p-8">
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
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

        {/* HOW WE HELP */}
        <section className="px-8 pb-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Nordic Move Spain
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                We do not replace tax advisers. We help you ask the right
                questions early.
              </h2>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-lg leading-relaxed text-stone-600">
                Nordic Move Spain does not provide UK or Spanish tax advice. Our
                role is to help international buyers connect the property
                decision with area choice, rental assumptions, legal checks,
                practical risks and long-term ownership planning.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                For UK buyers, this means thinking beyond the viewing. A Spanish
                property can be a second home, a retirement base, an investment,
                a rental property or a future relocation step. Each use has
                different tax, legal and practical consequences.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/services/area-match"
                  className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
                >
                  Request Area Match
                </a>

                <a
                  href="/services/purchase-safety-report"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Purchase Safety Report
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED GUIDES */}
        <section className="px-8 pb-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Related guidance
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              Continue your research before you buy.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {relatedGuides.map((guide) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    {guide.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    {guide.text}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="px-8 pb-24">
          <div className="mx-auto max-w-7xl rounded-[36px] bg-white p-10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Important note
            </p>

            <p className="mt-5 leading-relaxed text-stone-600">
              This guide contains general information for international property
              buyers. It is not legal, tax, financial or investment advice. UK
              and Spanish tax rules can change, and the correct treatment depends
              on personal circumstances. Buyers should always speak to a
              qualified UK tax adviser, Spanish tax adviser and independent
              lawyer before buying, renting, selling or relocating.
            </p>
          </div>
        </section>

        {/* OFFICIAL SOURCES */}
        <section className="px-8 pb-32">
          <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Official sources
            </p>

            <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
              This guide uses official UK and Spanish tax sources where possible.
              Always check the current position for your personal circumstances
              with qualified advisers.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {officialSources.map((source) => (
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
