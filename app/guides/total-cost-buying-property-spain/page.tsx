const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
        alternates: {
          canonical: "/guides/total-cost-buying-property-spain",
          languages: {
            en: "/guides/total-cost-buying-property-spain",
            "x-default": "/guides/total-cost-buying-property-spain",
          },
        },
      }
    : {}),
  title:
    "Total Cost of Buying Property in Spain from the UK (2026) | Nordic Move Spain",
  description:
    "Expert 2026 guide for UK buyers: Spanish property purchase taxes, lawyer, notary, Land Registry, mortgage valuation and UK-specific considerations. Includes Costa Blanca examples and official sources.",
  applicationName: "Nordic Move Spain",
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Buying property in Spain",
  keywords: [
    "total cost buying property Spain from UK",
    "cost of buying property in Spain UK buyer",
    "Spain property buying costs 2026",
    "Costa Blanca property purchase costs",
    "ITP Valencia 2026",
    "Spanish property tax British buyer",
    "buying a house in Spain from UK costs",
    "Spanish property lawyer fees",
    "notary fees Spain property",
    "Land Registry fees Spain",
    "non resident mortgage Spain UK",
    "VAT AJD new build Spain 2026",
    "Costa Blanca buying costs",
    "British buying property in Spain",
  ],
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
  openGraph: {
    title:
      "Total Cost of Buying Property in Spain from the UK — 2026 Guide",
    description:
      "A source-checked breakdown of Spanish purchase taxes, lawyer, notary, registry and mortgage costs for UK buyers — including the Costa Blanca.",
    type: "article",
    locale: "en_GB",
    siteName: "Nordic Move Spain",
    ...(siteUrl
      ? {
          url: "/guides/total-cost-buying-property-spain",
          images: [
            {
              url: "/images/laatste-homepage.png",
              alt: "Total cost of buying a property in Spain from the UK",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Total Cost of Buying Property in Spain from the UK (2026)",
    description:
      "ITP, VAT, AJD, lawyer, notary, registry and mortgage costs explained for British buyers.",
    ...(siteUrl ? { images: ["/images/laatste-homepage.png"] } : {}),
  },
};

const reviewedDate = "29 July 2026";

const costItems = [
  {
    label: "Resale property · Costa Blanca",
    title: "ITP transfer tax",
    amount: "9% general rate",
    text:
      "For taxable transactions from 1 June 2026, the general ITP rate in the Comunitat Valenciana is 9%. Where the statutory value of the property or right transferred exceeds €1 million, the general rate is 11%, unless a specific reduced rate applies.",
    official: true,
  },
  {
    label: "New-build residential property",
    title: "VAT and AJD",
    amount: "10% VAT + generally 1.4% AJD",
    text:
      "The first delivery of a new residential property by a developer is generally subject to 10% Spanish VAT. In the Comunitat Valenciana, the general AJD rate is 1.4% for taxable events from 1 June 2026, subject to specific reliefs and exceptions.",
    official: true,
  },
  {
    label: "Independent legal work",
    title: "Spanish property lawyer",
    amount: "Allow roughly €1,500–€3,000",
    text:
      "Legal fees are not fixed by the tax authorities and vary with value, complexity and scope. For planning purposes, this guide uses a broad allowance of approximately €1,500–€3,000 for a straightforward purchase. Complex, corporate, rural or high-value transactions can cost more. Always obtain a written quote.",
    official: false,
  },
  {
    label: "Completion",
    title: "Notary",
    amount: "Allow roughly €600–€1,200",
    text:
      "Spanish notarial fees are regulated, but the final amount depends on the deed, property value, number of pages, copies and transaction structure. The range here is a planning allowance, not a tariff quote.",
    official: false,
  },
  {
    label: "After completion",
    title: "Land Registry",
    amount: "Allow roughly €400–€800",
    text:
      "Registration costs depend on the deed and transaction value. The buyer should budget for registration of title in the Registro de la Propiedad after completion.",
    official: false,
  },
  {
    label: "Administration",
    title: "Gestoría, if used",
    amount: "Allow roughly €300–€600",
    text:
      "A gestoría can coordinate tax filing, deed processing and registration. Whether it is needed, and what it charges, depends on how the purchase is organised.",
    official: false,
  },
  {
    label: "Mortgage only",
    title: "Bank valuation",
    amount: "Allow roughly €300–€600",
    text:
      "If you finance the purchase with a Spanish mortgage, the borrower normally pays the valuation. Under Spain's mortgage-credit rules, the lender generally bears the mortgage-deed notary, registry, tax and gestoría costs.",
    official: false,
  },
  {
    label: "Nordic Move Spain",
    title: "Buyer guidance fee",
    amount: "€0",
    text:
      "Nordic Move Spain does not charge the buyer a purchase-guidance fee. The independent professionals involved in the purchase — such as the lawyer, notary and other external specialists — remain separate and may charge their own fees.",
    official: false,
  },
  {
    label: "Nordic Move Spain",
    title: "Purchase Safety Report",
    amount: "€0",
    text:
      "The Nordic Move Spain Purchase Safety Report itself is provided without a separate fee. Where independent third-party legal or technical professionals are instructed, their own professional charges remain separate.",
    official: false,
  },
];

const ukSpecificPoints = [
  {
    title: "No UK SDLT on the Spanish purchase",
    text:
      "Stamp Duty Land Tax is a UK land transaction tax. Buying a home in Spain does not create SDLT on the Spanish purchase; the acquisition is taxed under Spanish rules instead.",
  },
  {
    title: "Your Spanish home can matter for a later UK purchase",
    text:
      "HMRC's additional-dwelling test can take account of residential property owned anywhere in the world. If you later buy a residential property in England or Northern Ireland while still owning the Spanish home, the higher SDLT rates may therefore become relevant, depending on the facts and main-residence replacement rules.",
  },
  {
    title: "GBP to EUR is a cash-planning issue, not a new Spanish tax",
    text:
      "If your savings are in sterling, the euro amount needed for completion can move with the exchange rate. Banks or currency providers may also charge transfer or conversion costs. Treat this as part of funding the same Spanish purchase — not as a separate Spanish property tax.",
  },
  {
    title: "UK tax after purchase is a separate question",
    text:
      "A UK tax resident may have UK reporting or tax consequences if the Spanish property is rented or later sold. Those are ownership and disposal issues, not additional acquisition taxes, and they should not be mixed into the purchase-cost percentage.",
  },
];

const faqItems = [
  {
    question:
      "How much should a UK buyer budget on top of the purchase price in Spain?",
    answer:
      "It depends mainly on whether the property is resale or new build, the autonomous region and the property's value. On the Costa Blanca, many resale purchases in the Comunitat Valenciana are subject to 9% ITP from 1 June 2026, or generally 11% where the statutory value exceeds €1 million. Add the buyer's external lawyer, notary, Land Registry and any gestoría or mortgage valuation. Nordic Move Spain's purchase-guidance fee is €0 and its Purchase Safety Report is €0.",
  },
  {
    question:
      "What tax does a British buyer pay on a resale property on the Costa Blanca in 2026?",
    answer:
      "For taxable events from 1 June 2026, the general ITP rate in the Comunitat Valenciana is 9%. Where the relevant value exceeds €1 million, the general rate is 11%, unless a specific reduced rate applies. The taxable base also needs to be checked against Spain's valuation rules, including the cadastral reference value where applicable.",
  },
  {
    question:
      "What tax does a UK buyer pay on a new-build home in Spain?",
    answer:
      "A first delivery of a new residential property by the developer is generally subject to 10% VAT. In the Comunitat Valenciana, the general AJD rate is 1.4% from 1 June 2026, subject to specific exceptions or reduced treatment.",
  },
  {
    question:
      "Do I pay Stamp Duty Land Tax in the UK when buying in Spain?",
    answer:
      "No SDLT is charged on the Spanish property purchase itself because SDLT applies to land transactions within its UK territorial scope. Spanish acquisition taxes apply instead. However, owning the Spanish property can affect the higher-rate SDLT test if you later buy another home in England or Northern Ireland.",
  },
  {
    question:
      "Does Nordic Move Spain charge a buyer's fee for the purchase?",
    answer:
      "No. Nordic Move Spain's purchase-guidance fee is €0. External independent professionals such as the Spanish lawyer, notary, Land Registry, gestoría and any separately instructed specialist remain third-party costs.",
  },
  {
    question:
      "Is the Nordic Move Spain Purchase Safety Report free?",
    answer:
      "Yes. The Nordic Move Spain Purchase Safety Report itself is €0. Any external independent legal or technical professional instructed in connection with the purchase may charge separately for their professional work.",
  },
  {
    question:
      "Who pays the mortgage notary, registry and gestoría costs in Spain?",
    answer:
      "For Spanish mortgage formalisation under the current mortgage-credit framework, Banco de España states that the borrower pays the valuation, while the bank bears the mortgage notary, registry, taxes and gestoría costs. This should not be confused with costs attached to the property purchase deed itself.",
  },
  {
    question:
      "Should a UK buyer add a special Brexit purchase tax?",
    answer:
      "There is no general extra Spanish property transfer tax simply because the buyer is British. The core acquisition taxes are determined by the property type, region, value and any applicable relief. British buyers do, however, need to plan for cross-border administration and sterling-to-euro funding where relevant.",
  },
];

const sources = [
  {
    tag: "Comunitat Valenciana · 2026",
    title:
      "BOE — Ley 5/2025: general ITP 9%, 11% above €1m and AJD 1.4% from 1 June 2026",
    href: "https://www.boe.es/buscar/doc.php?id=BOE-A-2025-11959",
  },
  {
    tag: "Spain · new build",
    title:
      "Agencia Tributaria — VAT or ITP when buying a home; general new-home VAT rate 10%",
    href:
      "https://sede.agenciatributaria.gob.es/Sede/en_gb/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
  },
  {
    tag: "Spain · mortgage",
    title:
      "Banco de España — mortgage costs: borrower pays valuation; lender bears mortgage notary, registry, tax and gestoría",
    href:
      "https://clientebancario.bde.es/pcb/es/menu-horizontal/productosservici/financiacion/hipotecas/guia-textual/primerospasoscon/Gastos_asociados_a_la_hipoteca.html",
  },
  {
    tag: "UK buyers · Spain",
    title:
      "GOV.UK — Spain: buying and renting property; recommendation to use an independent lawyer",
    href: "https://www.gov.uk/guidance/how-to-buy-property-in-spain",
  },
  {
    tag: "Buying abroad",
    title:
      "GOV.UK — Guidance for buying property abroad, including international transfer and power-of-attorney considerations",
    href:
      "https://www.gov.uk/guidance/guidance-for-buying-property-abroad",
  },
  {
    tag: "UK · future property purchase",
    title:
      "HMRC — higher SDLT rates can take account of another dwelling owned anywhere in the world",
    href:
      "https://www.gov.uk/hmrc-internal-manuals/stamp-duty-land-tax-manual/sdltm09780",
  },
];

export default function TotalCostBuyingPropertySpainPage() {
  const articleUrl = siteUrl
    ? `${siteUrl}/guides/total-cost-buying-property-spain`
    : undefined;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": articleUrl ? `${articleUrl}#article` : "#article",
        headline:
          "Total Cost of Buying Property in Spain from the UK: 2026 Guide",
        description:
          "Expert guide for UK buyers covering Spanish purchase tax, legal, notary, registry and mortgage costs, with Costa Blanca examples and UK-specific considerations.",
        inLanguage: "en-GB",
        datePublished: "2026-07-29",
        dateModified: "2026-07-29",
        author: {
          "@type": "Organization",
          name: "Nordic Move Spain",
        },
        publisher: {
          "@type": "Organization",
          name: "Nordic Move Spain",
        },
        ...(articleUrl ? { mainEntityOfPage: articleUrl } : {}),
        about: [
          "Buying property in Spain",
          "Costa Blanca property costs",
          "UK buyers",
          "ITP",
          "VAT",
          "AJD",
          "Spanish property lawyer",
          "Spanish notary",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            ...(siteUrl ? { item: siteUrl } : {}),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Guides",
            ...(siteUrl ? { item: `${siteUrl}/guides` } : {}),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Total cost of buying property in Spain",
            ...(articleUrl ? { item: articleUrl } : {}),
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="bg-[#1e2a3a] px-6 py-24 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/65"
          >
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <span aria-hidden="true">/</span>
            <a href="/guides" className="transition hover:text-white">
              Guides
            </a>
            <span aria-hidden="true">/</span>
            <span>Total cost of buying property in Spain</span>
          </nav>

          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            UK buyer cost guide · Reviewed {reviewedDate}
          </p>

          <h1 className="mt-6 max-w-6xl font-serif text-5xl leading-tight md:text-7xl">
            Total cost of buying a property in Spain from the UK in 2026.
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/80">
            A detailed cost breakdown for British buyers on the Costa Blanca:
            purchase tax, lawyer, notary, Land Registry, mortgage costs and the
            few UK-specific points that genuinely affect your budget.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#cost-breakdown"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              See the full cost breakdown
            </a>

            <a
              href="/relocation-assessment"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Start your free Area Match
            </a>
          </div>
        </div>
      </section>

      {/* TRUST / METHODOLOGY */}
      <section className="border-b border-stone-200 bg-white/80 px-6 py-8 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9b743d]">
              Official tax sources
            </p>
            <p className="mt-2 leading-relaxed text-stone-700">
              Purchase-tax rates are checked against Spanish Tax Agency and BOE
              legislation current at the review date.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9b743d]">
              UK-specific, not UK-inflated
            </p>
            <p className="mt-2 leading-relaxed text-stone-700">
              The core Spanish purchase costs are the same cost categories we
              use for other international buyers. We only add UK points where
              they genuinely change planning.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9b743d]">
              Professional estimates
            </p>
            <p className="mt-2 leading-relaxed text-stone-700">
              Lawyer, notary, registry and administration ranges are budgeting
              allowances, not statutory tariffs or guaranteed quotes.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Start with the real number
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              The asking price is not your acquisition budget.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              British buyers often ask for a single percentage to add to the
              Spanish asking price. That is useful as a rough first filter, but
              it is not accurate enough for a serious purchase decision.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              The largest additional cost is usually the Spanish acquisition
              tax. After that come the independent lawyer, notary, Land
              Registry and any administration or mortgage-related items. The
              exact total depends mainly on whether you buy a resale or new
              property, the autonomous region, the taxable value and whether
              you use finance.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              For Costa Blanca buyers, the important 2026 change is that the
              general resale-property ITP rate in the Comunitat Valenciana fell
              to 9% from 1 June 2026. Properties above the statutory €1 million
              threshold are generally taxed at 11%, unless another rate applies.
            </p>
          </div>
        </div>
      </section>

      {/* NORDIC MOVE FREE */}
      <section className="px-6 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[#1e2a3a] p-10 text-white md:p-12">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Nordic Move Spain
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight">
                Two lines in your buying budget are €0.
              </h2>
            </div>

            <div className="grid gap-6 p-8 md:grid-cols-2 md:p-12">
              <article>
                <p className="font-serif text-4xl text-[#1e2a3a]">€0</p>
                <h3 className="mt-3 text-lg font-medium text-[#1e2a3a]">
                  Purchase-guidance fee
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Nordic Move Spain does not charge the buyer a fee for our
                  purchase guidance.
                </p>
              </article>

              <article>
                <p className="font-serif text-4xl text-[#1e2a3a]">€0</p>
                <h3 className="mt-3 text-lg font-medium text-[#1e2a3a]">
                  Nordic Move Purchase Safety Report
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Our report itself is free. Independent external professionals
                  such as a lawyer or separately instructed technical specialist
                  remain responsible for, and may charge for, their own work.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* COST BREAKDOWN */}
      <section id="cost-breakdown" className="bg-[#e9dfd2] px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              2026 cost breakdown
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              What to budget above the purchase price.
            </h2>

            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-stone-700">
              These are the same core purchase-cost categories that apply to
              other international buyers. Being from the UK does not create a
              separate Spanish “Brexit purchase tax”.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {costItems.map((item) => (
              <article
                key={`${item.label}-${item.title}`}
                className="rounded-[30px] bg-[#f6f1ea] p-8 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                  {item.label}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-4 text-lg font-medium text-[#1e2a3a]">
                  {item.amount}
                </p>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {item.text}
                </p>

                {item.official ? (
                  <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#9b743d]">
                    Statutory / official-source figure
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESALE EXAMPLES */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Worked examples · resale property
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              What the numbers can look like on the Costa Blanca.
            </h2>

            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-stone-600">
              These examples use the 2026 general ITP rates and the same
              professional-cost planning ranges shown above. They are budgeting
              illustrations, not quotes.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="rounded-[34px] bg-white p-9 shadow-sm md:p-11">
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                Example 1
              </p>

              <h3 className="mt-4 font-serif text-4xl text-[#1e2a3a]">
                €500,000 resale property
              </h3>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between gap-5 border-b border-stone-200 pb-4">
                  <span className="text-stone-600">Purchase price</span>
                  <strong className="font-medium text-[#1e2a3a]">
                    €500,000
                  </strong>
                </div>
                <div className="flex justify-between gap-5 border-b border-stone-200 pb-4">
                  <span className="text-stone-600">ITP at 9%</span>
                  <strong className="font-medium text-[#1e2a3a]">
                    €45,000
                  </strong>
                </div>
                <div className="flex justify-between gap-5 border-b border-stone-200 pb-4">
                  <span className="text-stone-600">
                    Lawyer planning allowance
                  </span>
                  <strong className="font-medium text-[#1e2a3a]">
                    €1,500–€3,000
                  </strong>
                </div>
                <div className="flex justify-between gap-5 border-b border-stone-200 pb-4">
                  <span className="text-stone-600">Notary</span>
                  <strong className="font-medium text-[#1e2a3a]">
                    €600–€1,200
                  </strong>
                </div>
                <div className="flex justify-between gap-5 border-b border-stone-200 pb-4">
                  <span className="text-stone-600">Land Registry</span>
                  <strong className="font-medium text-[#1e2a3a]">
                    €400–€800
                  </strong>
                </div>
                <div className="flex justify-between gap-5 border-b border-stone-200 pb-4">
                  <span className="text-stone-600">Gestoría, if used</span>
                  <strong className="font-medium text-[#1e2a3a]">
                    €300–€600
                  </strong>
                </div>
                <div className="flex justify-between gap-5 border-b border-stone-200 pb-4">
                  <span className="text-stone-600">
                    Nordic Move buyer fee + report
                  </span>
                  <strong className="font-medium text-[#1e2a3a]">€0</strong>
                </div>
              </div>

              <div className="mt-8 rounded-[24px] bg-[#f6f1ea] p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">
                  Planning total
                </p>
                <p className="mt-2 font-serif text-3xl text-[#1e2a3a]">
                  approx. €547,800–€550,600
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">
                  Before any mortgage valuation, optional external specialist
                  work, renovation or GBP/EUR conversion cost.
                </p>
              </div>
            </article>

            <article className="rounded-[34px] bg-[#1e2a3a] p-9 text-white shadow-sm md:p-11">
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                Example 2
              </p>

              <h3 className="mt-4 font-serif text-4xl">
                €3,000,000 resale property
              </h3>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between gap-5 border-b border-white/15 pb-4">
                  <span className="text-white/70">Purchase price</span>
                  <strong className="font-medium">€3,000,000</strong>
                </div>
                <div className="flex justify-between gap-5 border-b border-white/15 pb-4">
                  <span className="text-white/70">ITP at 11%</span>
                  <strong className="font-medium">€330,000</strong>
                </div>
                <div className="flex justify-between gap-5 border-b border-white/15 pb-4">
                  <span className="text-white/70">
                    Lawyer, notary and registry
                  </span>
                  <strong className="max-w-[230px] text-right font-medium">
                    Obtain transaction-specific quotes
                  </strong>
                </div>
                <div className="flex justify-between gap-5 border-b border-white/15 pb-4">
                  <span className="text-white/70">
                    Nordic Move buyer fee + report
                  </span>
                  <strong className="font-medium">€0</strong>
                </div>
              </div>

              <div className="mt-8 rounded-[24px] border border-white/15 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-[#c8a063]">
                  Why no artificial fixed total?
                </p>
                <p className="mt-3 leading-relaxed text-white/75">
                  At this value, the tax is easy to calculate but professional
                  work may be materially more complex. A responsible budget
                  should use written legal, notarial and registration estimates
                  for the actual structure instead of multiplying a generic fee
                  percentage by €3 million.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* NEW BUILD */}
      <section className="bg-white px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                New build
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Do not apply the resale-property percentage to a new build.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                A first delivery of a new residential property by the developer
                is generally subject to 10% Spanish VAT instead of ITP. On the
                Costa Blanca, you should then consider AJD as well. The general
                AJD rate in the Comunitat Valenciana is 1.4% for taxable events
                from 1 June 2026, unless a specific rule or relief applies.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                You still need to budget for the buyer-side lawyer, notary and
                title registration. Off-plan purchases also require careful
                checking of the developer, planning status, stage payments and
                legally required guarantees.
              </p>

              <a
                href="/guides/itp-iva-ajd-explained"
                className="mt-7 inline-block text-sm font-medium text-[#1e2a3a] underline underline-offset-4"
              >
                Read our guide to ITP, VAT and AJD →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* UK SPECIFIC */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              What is genuinely different for UK buyers?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Mostly funding and future UK tax interaction — not a second set
              of Spanish purchase costs.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ukSpecificPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] bg-white p-8 shadow-sm"
              >
                <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {item.title}
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[30px] bg-[#e9dfd2] p-8 md:p-10">
            <h3 className="font-serif text-3xl text-[#1e2a3a]">
              There is no general “Brexit surcharge” on the Spanish purchase.
            </h3>
            <p className="mt-5 max-w-5xl leading-relaxed text-stone-700">
              British nationality by itself does not create an extra ITP, VAT
              or AJD percentage on a normal Costa Blanca purchase. The relevant
              Spanish acquisition tax depends on the property, location, value
              and applicable reliefs. UK buyers may have additional practical
              cross-border administration, but it should not be presented as a
              different purchase-tax system.
            </p>
          </div>
        </div>
      </section>

      {/* MORTGAGE */}
      <section className="bg-[#1e2a3a] px-6 py-28 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Financing
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight">
                Do not double-count the mortgage-deed costs.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-white/80">
                Banco de España states that under the current mortgage-credit
                cost allocation, the borrower pays the valuation, while the
                bank bears the notary, registry, tax and gestoría costs of
                formalising the mortgage.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/80">
                That does not make the property purchase itself free of notary
                or registration costs. It means you should distinguish the
                <strong className="font-medium text-white">
                  {" "}
                  purchase deed
                </strong>{" "}
                from the
                <strong className="font-medium text-white">
                  {" "}
                  mortgage deed
                </strong>{" "}
                when preparing your budget.
              </p>

              <a
                href="/guides/mortgage-costs-new-rules-spain"
                className="mt-7 inline-block text-sm font-medium text-white underline underline-offset-4"
              >
                Read the mortgage cost guide →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT NOT INCLUDED */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[34px] bg-white p-9 shadow-sm md:p-11">
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                Included in the acquisition budget
              </p>
              <h2 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
                Keep the purchase calculation disciplined.
              </h2>
              <ul className="mt-7 space-y-4 leading-relaxed text-stone-600">
                <li>Purchase price</li>
                <li>ITP or VAT + AJD</li>
                <li>Independent Spanish property lawyer</li>
                <li>Purchase-deed notary cost</li>
                <li>Land Registry</li>
                <li>Gestoría if used</li>
                <li>Mortgage valuation if financing</li>
              </ul>
            </div>

            <div className="rounded-[34px] bg-[#e9dfd2] p-9 md:p-11">
              <p className="text-sm uppercase tracking-[0.25em] text-[#9b743d]">
                Keep separate
              </p>
              <h2 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
                Do not inflate the purchase percentage with future lifestyle
                costs.
              </h2>
              <p className="mt-6 leading-relaxed text-stone-700">
                Furniture, renovation, removals, ongoing insurance, annual IBI,
                community fees, utilities and future UK or Spanish tax on rental
                income are important, but they are not all acquisition costs.
                Keep them in a separate post-completion or ownership budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-28 md:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Frequently asked questions
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Purchase costs for British buyers.
          </h2>

          <div className="mt-12 space-y-5">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-[28px] bg-[#f6f1ea] p-7"
              >
                <summary className="cursor-pointer list-none font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {item.question}
                </summary>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section id="sources" className="bg-[#e9dfd2] px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              Official sources and review basis
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              The tax facts are linked to primary or government sources.
            </h2>

            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-stone-700">
              Tax rules can change and professional fees vary by transaction.
              Use the statutory figures as the starting point, then ask your
              independent Spanish lawyer to confirm the exact tax base, rate and
              completion costs for the property you intend to buy.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {sources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[26px] bg-[#f6f1ea] p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                  {source.tag}
                </p>
                <p className="mt-3 font-medium leading-relaxed text-[#1e2a3a]">
                  {source.title} ↗
                </p>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] bg-white/70 p-7 text-sm leading-relaxed text-stone-600">
            <strong className="font-medium text-[#1e2a3a]">
              Editorial note:
            </strong>{" "}
            This guide is designed to help buyers create a realistic budget. It
            is not individual legal, tax, mortgage or foreign-exchange advice.
            Reduced tax rates, special ownership structures, unusual title
            issues and high-value transactions require property-specific review.
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Continue your research
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a]">
            Understand the tax, legal and financing pieces before reserving.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/guides/itp-iva-ajd-explained",
                title: "ITP, VAT and AJD explained",
              },
              {
                href: "/guides/mortgage-costs-new-rules-spain",
                title: "Mortgage costs and current rules in Spain",
              },
              {
                href: "/guides/buying-property-spain",
                title: "Buying a property in Spain",
              },
              {
                href: "/guides/common-mistakes-buying-property-spain",
                title: "Common mistakes when buying property in Spain",
              },
              {
                href: "/guides/homeowners-associations-spain",
                title: "Homeowners' associations in Spain",
              },
              {
                href: "/guides/costs-rentals-real-life-checks-before-buying",
                title: "Costs, rentals and real-life checks before buying",
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[28px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {item.title}
                </h3>

                <span className="mt-5 inline-block text-sm font-medium text-[#9b743d]">
                  Read guide →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32 pt-8 md:px-8">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-10 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Plan before you commit
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight">
            Know the region, property and purchase costs before making a binding
            decision.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Nordic Move Spain helps international buyers move from area and
            property selection to independent purchase checks and completion.
            Our buyer purchase-guidance fee is €0 and our Nordic Move Purchase
            Safety Report is €0; independent external professionals remain
            separate.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Start your free Area Match
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Plan an introductory call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}