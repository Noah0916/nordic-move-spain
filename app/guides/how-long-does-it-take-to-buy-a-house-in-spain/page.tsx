import type { Metadata } from "next";

const pagePath = "/guides/dutch-tax-second-home-spain";

// SEO note:
// This route is intentionally kept because the existing homepage links to this folder.
// For the strongest long-term SEO, consider moving the page to
// /guides/uk-tax-second-home-spain and adding a permanent redirect from this URL.

export const metadata: Metadata = {
  title: "Spanish Property Tax for UK Owners (2026) | Second Home in Spain",
  description:
    "2026 guide for UK residents who own a Spanish second home: Modelo 210, 24% non-resident tax, rental income, capital gains, wealth tax and the UK-Spain tax treaty.",
  keywords: [
    "Spanish property tax for UK owners",
    "tax on Spanish property for UK residents",
    "Spanish second home tax UK",
    "Modelo 210 UK",
    "non resident property tax Spain UK",
    "rental tax Spain non resident UK",
    "capital gains tax Spain UK property",
    "UK Spain double tax treaty property",
    "wealth tax Spain non resident UK",
    "Costa Blanca property tax UK",
    "Brexit Spanish property tax",
    "Spanish tax rules British property owners",
  ],
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Spanish Property Tax for UK Owners: 2026 Guide",
    description:
      "A practical guide to Spanish non-resident property tax, rental income, Modelo 210, capital gains and UK reporting for UK-resident owners.",
    type: "article",
    locale: "en_GB",
    url: pagePath,
    siteName: "Nordic Move Spain",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spanish Property Tax for UK Owners: 2026 Guide",
    description:
      "What UK-resident owners need to know about Spanish property tax after Brexit, including Modelo 210, rental income and double-tax relief.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const officialSources = [
  {
    title: "Spanish Tax Agency — income from leased Spanish property",
    authority: "Agencia Tributaria (AEAT)",
    href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/irnr-sin-establecimiento-permanente/cuestiones-especificas-sobre-tributacion-inmuebles/rendimientos-inmuebles-arrendados.html",
    note: "Official IRNR rules on rental income, the 19% / 24% distinction and deductible expenses.",
  },
  {
    title: "Spanish Tax Agency — imputed income on property for personal use",
    authority: "Agencia Tributaria (AEAT)",
    href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/irnr-sin-establecimiento-permanente/cuestiones-especificas-sobre-tributacion-inmuebles/renta-imputada-inmueble-urbano-uso-propio.html",
    note: "Official rules for non-resident owners who keep a Spanish property for their own use or leave it vacant.",
  },
  {
    title: "Spanish Tax Agency — capital gains on the sale of Spanish property",
    authority: "Agencia Tributaria (AEAT)",
    href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/irnr-sin-establecimiento-permanente/cuestiones-especificas-sobre-tributacion-inmuebles/ganancia-patrimonial-derivada-transmision.html",
    note: "Official 19% capital-gains rate, 3% buyer withholding and Form 211 procedure.",
  },
  {
    title: "Spanish Tax Agency — Form 210 filing deadlines",
    authority: "Agencia Tributaria (AEAT)",
    href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/capitulo-05-declaracion-rentas-obtenidas-ep/modelo-plazo-presentacion.html",
    note: "Current filing periods, including the changes applying to 2026 income and later.",
  },
  {
    title: "UK-Spain Double Taxation Convention — synthesised text in force",
    authority: "HM Revenue & Customs / GOV.UK",
    href: "https://www.gov.uk/government/publications/spain-tax-treaties/synthesised-text-of-the-multilateral-instrument-and-the-2013-uk-spain-double-taxation-convention-in-force",
    note: "Official treaty text, including Articles 6, 13, 21 and 22 on property, gains, capital and double-tax relief.",
  },
  {
    title: "UK tax on foreign income",
    authority: "HM Revenue & Customs / GOV.UK",
    href: "https://www.gov.uk/tax-foreign-income",
    note: "Official UK guidance on overseas income, including foreign rental income.",
  },
  {
    title: "Foreign Tax Credit Relief",
    authority: "HM Revenue & Customs / GOV.UK",
    href: "https://www.gov.uk/tax-foreign-income/taxed-twice",
    note: "Official UK guidance on relief where foreign income or gains are taxed in more than one country.",
  },
  {
    title: "Spanish Wealth Tax for non-residents",
    authority: "Agencia Tributaria (AEAT)",
    href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/impuesto-sobre-patrimonio/exigibilidad-impuesto-sobre-patrimonio-no-residentes.html",
    note: "Official rules for non-residents holding taxable assets in Spain.",
  },
  {
    title: "Autonomous Community Wealth Tax rules for non-residents",
    authority: "Agencia Tributaria (AEAT)",
    href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/impuesto-sobre-patrimonio/contribuyentes-residentes-estado-miembro-ue-patrimonio.html",
    note: "AEAT confirms that since 11 July 2021 all non-resident taxpayers may apply the relevant Autonomous Community rules.",
  },
  {
    title: "Inheritance Tax — State / Autonomous Community competence",
    authority: "Agencia Tributaria (AEAT)",
    href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/todas-gestiones/impuestos-tasas/impuesto-sobre-sucesiones-donaciones/modelo-650-impue_____iones-autoliquidacion-adquisicion-causa_/cuadro-delimitacion-competencias.html",
    note: "Official table showing the applicable options where the deceased or beneficiary is non-resident.",
  },
];

const faqItems = [
  {
    question: "Do UK residents pay Spanish tax on a second home even if it is not rented?",
    answer:
      "Usually yes. A non-resident individual who owns an urban Spanish property for personal use or leaves it vacant is generally subject to Spanish Non-Resident Income Tax on imputed income calculated from the cadastral value.",
  },
  {
    question: "Is the Spanish non-resident rental tax rate 19% or 24% for UK residents?",
    answer:
      "For a person who is tax resident in the United Kingdom, the current Spanish Tax Agency guidance places them in the category 'rest of taxpayers', for which the general IRNR rate on rental income is 24%. The 19% rate applies to residents of the EU, Iceland, Norway and Liechtenstein under the conditions stated by AEAT.",
  },
  {
    question: "Can a UK-resident landlord deduct expenses from Spanish rental income?",
    answer:
      "Under the current AEAT rules, the general tax base for taxpayers outside the qualifying EU/EEA group is gross rental income without the normal expense deductions available to qualifying EU/EEA residents. This is one of the important practical differences for UK-resident owners after Brexit.",
  },
  {
    question: "Do I also report Spanish rental income in the UK?",
    answer:
      "If you are UK tax resident, foreign rental income is normally within the scope of UK tax and is generally reported through Self Assessment, subject to the UK rules that apply to your circumstances. Spanish tax paid may normally be considered for Foreign Tax Credit Relief under UK law and the UK-Spain treaty.",
  },
  {
    question: "What happens when a UK resident sells a Spanish property?",
    answer:
      "Spain may tax the gain on Spanish real estate. AEAT currently states a 19% tax rate for the non-resident property gain and requires the buyer to withhold 3% of the sale consideration as a payment on account. A UK-resident seller may also have UK Capital Gains Tax reporting or liability, with double-tax relief considered under the treaty and UK rules.",
  },
];

export default function UKSpanishPropertyTaxGuidePage() {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Spanish Property Tax for UK Owners: 2026 Guide to a Second Home in Spain",
    description:
      "Professional guide for UK residents owning Spanish property, covering Non-Resident Income Tax, Modelo 210, rental income, capital gains, Wealth Tax and UK-Spain double-tax relief.",
    inLanguage: "en-GB",
    dateModified: "2026-08-08",
    author: {
      "@type": "Organization",
      name: "Nordic Move Spain",
    },
    publisher: {
      "@type": "Organization",
      name: "Nordic Move Spain",
    },
    mainEntityOfPage: pagePath,
    about: [
      "Spanish Non-Resident Income Tax",
      "Spanish property tax",
      "UK residents owning property in Spain",
      "Modelo 210",
      "UK-Spain Double Taxation Convention",
    ],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
        {/* BREADCRUMBS */}
        <div className="px-6 pt-10 md:px-8">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
              <li>
                <a href="/" className="transition hover:text-[#173252]">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a href="/guides" className="transition hover:text-[#173252]">
                  Guides
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#173252]">
                Spanish Property Tax for UK Owners
              </li>
            </ol>
          </nav>
        </div>

        {/* HERO */}
        <section className="px-6 pb-16 pt-14 md:px-8 md:pb-20 md:pt-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b88948]">
              UK buyer tax guide · Updated August 2026
            </p>

            <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.05] text-[#173252] md:text-7xl">
              Spanish Property Tax for UK Owners
            </h1>

            <p className="mt-6 max-w-4xl font-serif text-2xl leading-relaxed text-[#173252] md:text-3xl">
              A 2026 guide to second-home tax, rental income, Modelo 210, capital gains
              and double-tax relief for UK residents who own property in Spain.
            </p>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
              Buying or owning a property in Spain can create tax obligations in both
              Spain and the United Kingdom. The most important point after Brexit is
              that Spanish tax treatment depends primarily on <strong>tax residence</strong>,
              not simply nationality. A person who is tax resident in the UK is no
              longer resident in an EU or EEA state for these Spanish Non-Resident
              Income Tax rules.
            </p>

            <div className="mt-10 rounded-[30px] border border-[#173252]/10 bg-white p-7 shadow-sm md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88948]">
                The key post-Brexit distinction
              </p>
              <p className="mt-4 text-lg leading-relaxed text-stone-700">
                Under current Spanish Tax Agency guidance, qualifying residents of the
                EU, Iceland, Norway and Liechtenstein are generally subject to a 19%
                IRNR rate and may deduct qualifying expenses from Spanish rental income.
                A UK tax resident generally falls within the <strong>“rest of taxpayers”</strong>
                category: the general rate is <strong>24%</strong>, and rental income is
                generally taxed on the gross amount without the normal expense
                deductions available to the qualifying EU/EEA group.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-500">
                A British passport on its own does not determine the rate. For example,
                a British citizen who is genuinely tax resident in a qualifying EU/EEA
                country may be treated differently from a British citizen who is tax
                resident in the UK.
              </p>
            </div>
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="px-6 pb-20 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["24%", "General Spanish IRNR rate for UK-resident owners on imputed income and rental income."],
                ["19%", "Spanish tax rate currently stated by AEAT for capital gains on the sale of Spanish real estate by a non-resident."],
                ["3%", "Amount the buyer generally withholds from the sale price when purchasing Spanish property from a non-resident seller."],
                ["Modelo 210", "The principal Spanish self-assessment form used for non-resident property income, imputed income and property gains."],
              ].map(([value, text]) => (
                <article key={value} className="rounded-[28px] bg-white p-7 shadow-sm">
                  <p className="font-serif text-4xl text-[#173252]">{value}</p>
                  <p className="mt-4 text-sm leading-relaxed text-stone-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ARTICLE */}
        <article className="px-6 pb-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
              <div className="space-y-16">
                {/* 1 */}
                <section id="own-use">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88948]">
                    01 · Property kept for your own use
                  </p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                    Even an unrented Spanish second home can create an annual tax charge.
                  </h2>

                  <p className="mt-7 text-lg leading-relaxed text-stone-600">
                    Spain applies a concept known as <strong>imputed real-estate income</strong>
                    to certain urban properties owned by non-resident individuals and
                    kept for personal use or left vacant. It is not a tax on actual
                    rental income. Instead, Spanish law calculates a deemed income by
                    reference to the property&apos;s cadastral value.
                  </p>

                  <div className="mt-7 rounded-[28px] bg-white p-7 shadow-sm">
                    <h3 className="font-serif text-2xl text-[#173252]">
                      How the calculation works
                    </h3>
                    <ul className="mt-5 space-y-3 text-base leading-relaxed text-stone-700">
                      <li>• The imputed-income base is generally 2% of the cadastral value.</li>
                      <li>
                        • A 1.1% percentage applies where the cadastral value qualifies
                        under the current revaluation rules.
                      </li>
                      <li>
                        • If no cadastral value has been assigned or notified, special
                        substitute-value rules apply.
                      </li>
                      <li>
                        • The amount is apportioned if you owned the property for only
                        part of the year or rented it for part of the year.
                      </li>
                      <li>
                        • For a UK tax resident in the “rest of taxpayers” category, the
                        current general IRNR rate is 24%.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-7 rounded-[28px] bg-[#173252] p-7 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d1a866]">
                      Example
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-white/85">
                      If the relevant cadastral value is €150,000 and the 1.1% imputation
                      percentage applies, the deemed income is €1,650. At a 24% tax rate,
                      the Spanish tax would be €396 for a full year, before considering
                      ownership percentages or part-year apportionment.
                    </p>
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-stone-500">
                    Official basis: Spanish Non-Resident Income Tax Law (IRNR), including
                    Articles 13, 24, 25 and 26, as applied in the current AEAT guidance.
                  </p>
                </section>

                {/* 2 */}
                <section id="rental-income">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88948]">
                    02 · Renting out the property
                  </p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                    UK residents face a materially different Spanish rental-tax calculation.
                  </h2>

                  <p className="mt-7 text-lg leading-relaxed text-stone-600">
                    Income from Spanish real estate may be taxed in Spain because the
                    property is situated in Spain. This is also consistent with Article 6
                    of the UK-Spain Double Taxation Convention.
                  </p>

                  <p className="mt-6 text-lg leading-relaxed text-stone-600">
                    Under current AEAT guidance, the general tax base for a taxpayer
                    outside the qualifying EU/EEA group is the <strong>gross amount of
                    rental income</strong>. Qualifying EU/EEA residents can, subject to
                    evidence and conditions, deduct expenses with a direct and
                    inseparable economic link to the Spanish rental activity. A UK tax
                    resident generally does not fall within that preferential category.
                  </p>

                  <div className="mt-7 overflow-hidden rounded-[28px] border border-stone-200 bg-white">
                    <div className="grid md:grid-cols-2">
                      <div className="p-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b88948]">
                          UK tax resident
                        </p>
                        <p className="mt-3 font-serif text-3xl text-[#173252]">24%</p>
                        <p className="mt-3 text-sm leading-relaxed text-stone-600">
                          Current general IRNR rate. Gross rental income is generally
                          the starting tax base, without the ordinary expense deductions
                          available to qualifying EU/EEA residents.
                        </p>
                      </div>
                      <div className="border-t border-stone-200 p-7 md:border-l md:border-t-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b88948]">
                          Qualifying EU / EEA resident
                        </p>
                        <p className="mt-3 font-serif text-3xl text-[#173252]">19%</p>
                        <p className="mt-3 text-sm leading-relaxed text-stone-600">
                          Current general rate stated by AEAT, with qualifying direct
                          expenses potentially deductible where the statutory conditions
                          and evidence requirements are met.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-lg leading-relaxed text-stone-600">
                    If a property is rented for only part of the year, the rented period
                    and the personal-use or vacant period are dealt with separately:
                    actual rental income is taxed for the rented days, while imputed
                    income can apply to the remaining days.
                  </p>
                </section>

                {/* 3 */}
                <section id="modelo-210">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88948]">
                    03 · Modelo 210 and 2026 filing changes
                  </p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                    Do not rely on old filing calendars: Spain changed important Modelo 210 deadlines in 2026.
                  </h2>

                  <p className="mt-7 text-lg leading-relaxed text-stone-600">
                    Modelo 210 is used by non-residents to report several categories of
                    Spanish-source income, including rental income, imputed income and
                    gains from Spanish real estate. Order HAC/623/2026 amended the form
                    and certain filing periods.
                  </p>

                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                    <div className="rounded-[28px] bg-white p-7 shadow-sm">
                      <h3 className="font-serif text-2xl text-[#173252]">
                        Imputed income
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-stone-600">
                        For 2025 imputed income, the filing window remains 1 January to
                        31 December 2026. For 2026 and later imputed income, the filing
                        period runs from 1 April to 31 December of the following calendar
                        year.
                      </p>
                    </div>
                    <div className="rounded-[28px] bg-white p-7 shadow-sm">
                      <h3 className="font-serif text-2xl text-[#173252]">
                        Rental income
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-stone-600">
                        For rental income accrued in 2026 and later and grouped annually,
                        the current AEAT timetable is 1 to 20 April of the following year.
                        Transitional rules apply to separately declared income accrued
                        during 2026.
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-stone-500">
                    Because the 2026 order contains transitional rules, owners filing
                    historic or 2026-period returns should check the exact AEAT filing
                    calendar rather than applying a generic annual deadline.
                  </p>
                </section>

                {/* 4 */}
                <section id="sale">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88948]">
                    04 · Selling the Spanish property
                  </p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                    Spain can tax the gain, and the buyer normally withholds 3% of the sale price.
                  </h2>

                  <p className="mt-7 text-lg leading-relaxed text-stone-600">
                    Article 13 of the UK-Spain Double Taxation Convention permits Spain
                    to tax gains arising from Spanish real estate. Under current AEAT
                    guidance, the Spanish tax rate on a non-resident&apos;s taxable
                    property gain is <strong>19%</strong>.
                  </p>

                  <p className="mt-6 text-lg leading-relaxed text-stone-600">
                    The gain is generally calculated from the transfer value less the
                    acquisition value, with the adjustments and qualifying acquisition
                    or disposal costs permitted by Spanish rules. Different or
                    transitional rules can apply to older properties and specific
                    circumstances.
                  </p>

                  <div className="mt-7 rounded-[28px] bg-white p-7 shadow-sm">
                    <h3 className="font-serif text-2xl text-[#173252]">
                      The 3% withholding is not necessarily the final tax
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-stone-600">
                      When a non-resident sells Spanish real estate, the purchaser
                      generally withholds 3% of the agreed sale consideration and pays
                      it to the Spanish Treasury using Form 211. The seller then credits
                      that withholding against the final tax due on the gain. If the
                      withholding exceeds the final liability, a refund may be claimed.
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-stone-500">
                      AEAT states that the purchaser files Form 211 within one month of
                      the transfer. The seller&apos;s Form 210 for the property gain is
                      filed during the three-month period after that initial one-month
                      period has elapsed.
                    </p>
                  </div>
                </section>

                {/* 5 */}
                <section id="uk-tax">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88948]">
                    05 · The UK side of the tax position
                  </p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                    Paying tax in Spain does not automatically remove the UK reporting obligation.
                  </h2>

                  <p className="mt-7 text-lg leading-relaxed text-stone-600">
                    HMRC states that UK residents normally pay UK tax on foreign income,
                    including rental income from overseas property, subject to the UK
                    rules and any reliefs that apply to the individual. Foreign income
                    is normally reported through Self Assessment where a reporting
                    obligation exists.
                  </p>

                  <p className="mt-6 text-lg leading-relaxed text-stone-600">
                    The UK-Spain treaty does not simply make Spanish property income
                    “taxable in Spain only”. Article 6 allows Spain to tax income from
                    Spanish immovable property. The United Kingdom may also tax a UK
                    resident under its domestic rules, with double taxation generally
                    addressed through credit relief.
                  </p>

                  <div className="mt-7 rounded-[28px] bg-[#173252] p-7 text-white">
                    <h3 className="font-serif text-2xl">How double-tax relief works in principle</h3>
                    <p className="mt-4 leading-relaxed text-white/80">
                      Article 22 of the treaty provides, subject to UK law, for Spanish
                      tax properly payable on Spanish-source profits, income or chargeable
                      gains to be credited against UK tax calculated by reference to the
                      same profits, income or gains. HMRC also explains that Foreign Tax
                      Credit Relief is generally claimed when reporting overseas income.
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-white/65">
                      Credit relief is subject to limits. It does not necessarily refund
                      every euro of Spanish tax, and differences in tax bases, deductions,
                      tax years and rates can leave additional UK tax payable.
                    </p>
                  </div>

                  <p className="mt-6 text-lg leading-relaxed text-stone-600">
                    Since 6 April 2025, UK taxation of foreign income and gains also
                    includes the Foreign Income and Gains regime for certain qualifying
                    new UK residents. That regime is fact-specific and should be reviewed
                    separately where relevant.
                  </p>
                </section>

                {/* 6 */}
                <section id="wealth-tax">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88948]">
                    06 · Wealth Tax and high-value property
                  </p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                    Brexit does not mean UK residents are excluded from every regional Spanish tax benefit.
                  </h2>

                  <p className="mt-7 text-lg leading-relaxed text-stone-600">
                    Non-residents can be subject to Spanish Wealth Tax by
                    <strong> real obligation</strong> on qualifying assets and rights
                    located or exercisable in Spain. AEAT currently states a general
                    €700,000 exempt minimum for non-residents under the state rules,
                    while the precise liability can be affected by applicable Autonomous
                    Community legislation and other rules.
                  </p>

                  <p className="mt-6 text-lg leading-relaxed text-stone-600">
                    Importantly, AEAT confirms that <strong>since 11 July 2021 all
                    non-resident taxpayers</strong> may apply the regulations of the
                    Autonomous Community where the highest value of the relevant Spanish
                    assets and rights is located. That means this regional-law option is
                    not restricted only to EU/EEA residents.
                  </p>

                  <p className="mt-6 text-lg leading-relaxed text-stone-600">
                    A Wealth Tax return can be required where tax is payable or, even if
                    no tax is payable, where the gross value of property and rights for
                    filing-threshold purposes exceeds €2 million. Very high net wealth
                    can also bring Spain&apos;s Temporary Solidarity Tax on Large
                    Fortunes into consideration.
                  </p>
                </section>

                {/* 7 */}
                <section id="inheritance">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88948]">
                    07 · Inheritance and succession planning
                  </p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                    A UK-resident family should not assume that only the Spanish state inheritance rules apply.
                  </h2>

                  <p className="mt-7 text-lg leading-relaxed text-stone-600">
                    Spanish Inheritance and Gift Tax is highly dependent on the
                    relationship between the deceased, the beneficiary, residence and
                    the location of the assets. The official AEAT competence table
                    confirms that, in relevant non-resident cases, Autonomous Community
                    rules can be available as an option — including where both the
                    deceased and successor are non-resident and Spanish assets are
                    involved.
                  </p>

                  <p className="mt-6 text-lg leading-relaxed text-stone-600">
                    This is a separate point from the 19% / 24% IRNR distinction.
                    Brexit should therefore not be applied mechanically across every
                    Spanish tax. Inheritance planning should be reviewed before purchase
                    where possible, particularly for joint ownership, usufruct
                    structures, children, remarried families or high-value estates.
                  </p>
                </section>

                {/* 8 */}
                <section id="checklist">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88948]">
                    08 · Practical annual checklist
                  </p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                    What a UK-resident Spanish property owner should review each year.
                  </h2>

                  <div className="mt-7 grid gap-4">
                    {[
                      "Confirm your tax residence for the relevant UK and Spanish tax periods.",
                      "Keep the annual IBI receipt and current cadastral value for the property.",
                      "Identify the number of days the property was rented, vacant or used personally.",
                      "Retain rental contracts, gross rental statements and evidence of Spanish tax paid.",
                      "Check the current Modelo 210 deadline — especially for 2026 income and later.",
                      "Report foreign rental income or gains to HMRC where required and assess Foreign Tax Credit Relief.",
                      "Review Wealth Tax exposure if Spanish assets are significant, including the relevant Autonomous Community rules.",
                      "Review succession planning after major changes in family circumstances, residence or ownership.",
                    ].map((item) => (
                      <div key={item} className="flex gap-4 rounded-[22px] bg-white p-5 shadow-sm">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b88948]" />
                        <p className="text-sm leading-relaxed text-stone-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* DISCLAIMER */}
                <section className="rounded-[32px] border border-[#173252]/10 bg-[#e9dfd2] p-8">
                  <h2 className="font-serif text-3xl text-[#173252]">
                    Important professional note
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-stone-700">
                    This guide is general information, not personal tax, legal or
                    investment advice. Spanish and UK tax outcomes depend on facts such
                    as tax residence, ownership percentages, purchase date, financing,
                    rental activity, family circumstances, property value and whether
                    the owner is an individual, company or trust. Tax legislation and
                    filing procedures can change. Before filing, selling or restructuring
                    ownership, obtain advice from suitably qualified Spanish and UK tax
                    professionals.
                  </p>
                </section>

                {/* OFFICIAL SOURCES */}
                <section id="official-sources">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88948]">
                    Official references
                  </p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                    Primary sources used for this guide.
                  </h2>

                  <div className="mt-8 grid gap-4">
                    {officialSources.map((source) => (
                      <a
                        key={source.href}
                        href={source.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-[24px] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b88948]">
                          {source.authority}
                        </p>
                        <h3 className="mt-2 font-serif text-xl text-[#173252] group-hover:underline">
                          {source.title} ↗
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-stone-600">
                          {source.note}
                        </p>
                      </a>
                    ))}
                  </div>
                </section>

                {/* FAQ */}
                <section id="faq">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88948]">
                    Frequently asked questions
                  </p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                    Spanish property tax questions from UK owners.
                  </h2>

                  <div className="mt-8 space-y-4">
                    {faqItems.map((item) => (
                      <details key={item.question} className="rounded-[24px] bg-white p-6 shadow-sm">
                        <summary className="cursor-pointer font-serif text-xl text-[#173252]">
                          {item.question}
                        </summary>
                        <p className="mt-4 text-sm leading-relaxed text-stone-600">
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              </div>

              {/* STICKY SIDE NAV */}
              <aside className="hidden lg:block">
                <div className="sticky top-8 rounded-[28px] bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b88948]">
                    In this guide
                  </p>
                  <nav className="mt-5 space-y-3 text-sm">
                    {[
                      ["#own-use", "Own-use property"],
                      ["#rental-income", "Rental income"],
                      ["#modelo-210", "Modelo 210"],
                      ["#sale", "Selling the property"],
                      ["#uk-tax", "UK tax & treaty"],
                      ["#wealth-tax", "Wealth Tax"],
                      ["#inheritance", "Inheritance"],
                      ["#checklist", "Annual checklist"],
                      ["#official-sources", "Official sources"],
                      ["#faq", "FAQ"],
                    ].map(([href, label]) => (
                      <a
                        key={href}
                        href={href}
                        className="block border-b border-stone-100 pb-3 text-stone-600 transition hover:text-[#173252]"
                      >
                        {label}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-6xl rounded-[38px] bg-[#173252] px-8 py-14 text-white md:px-12 md:py-16">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d1a866]">
              Buying on the Costa Blanca
            </p>
            <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
              Tax is only one part of a carefully prepared Spanish property purchase.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
              Nordic Move Spain can coordinate the buyer journey around your property
              search, independent technical and legal checks, purchase and arrival.
              Personal tax advice should be provided by the appropriate qualified
              adviser in Spain and the UK.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Explore Area Match
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white/70 px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#173252]"
              >
                Contact Nordic Move Spain
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}