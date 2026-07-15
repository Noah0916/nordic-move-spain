export const metadata = {
  title: "UK Tax Rules for a Second Home in Spain | Nordic Move Spain",
  description:
    "A practical guide for UK tax residents buying a second home in Spain. Understand Spanish property taxes, Modelo 210, rental income, capital gains, double taxation relief and key planning questions before buying on the Costa Blanca.",
  openGraph: {
    title: "UK Tax Rules for a Second Home in Spain | Nordic Move Spain",
    description:
      "Understand the tax issues British and UK-based buyers should consider before buying a second home, holiday home or investment property in Spain.",
    type: "article",
  },
};

export default function UkTaxSecondHomeSpainPage() {
  const keyPoints = [
    {
      title: "Spain can tax the property",
      text:
        "Because the property is located in Spain, Spanish taxes can apply to purchase costs, annual ownership, rental income, imputed income and capital gains when selling.",
    },
    {
      title: "The UK may still be relevant",
      text:
        "If you are UK tax resident, the UK may also tax foreign income and gains. Spanish rental income or a future sale may need to be reported to HMRC.",
    },
    {
      title: "Modelo 210 matters",
      text:
        "Non-resident property owners in Spain often need to file Modelo 210, even when the property is only used privately and not rented out.",
    },
    {
      title: "Double taxation relief is not automatic paperwork",
      text:
        "The UK-Spain double taxation agreement can help reduce double taxation, but correct reporting, records and professional advice are still essential.",
    },
  ];

  const spanishTaxes = [
    {
      title: "Purchase taxes and buying costs",
      text:
        "When you buy a Spanish property, you normally pay taxes and costs connected to the purchase. These can include transfer tax for resale properties, VAT and stamp duty for certain new-build properties, notary fees, land registry fees, legal fees and sometimes mortgage-related costs.",
    },
    {
      title: "IBI: local property tax",
      text:
        "IBI is the local annual property tax paid to the town hall. It is based on the cadastral value of the property, not necessarily the market value. Buyers should check the current IBI before buying, especially when comparing villas, apartments or larger plots.",
    },
    {
      title: "Community fees",
      text:
        "Community fees are not a tax, but they are an important ongoing cost. If you buy in an apartment building, residential complex or urbanisation with shared facilities, you may pay community fees for pools, gardens, lifts, lighting, maintenance, security, insurance and administration.",
    },
    {
      title: "Modelo 210 for non-resident owners",
      text:
        "If you are not tax resident in Spain but own property there, you may have to file Modelo 210. It can apply to imputed income from private use, rental income and capital gains connected to the sale of Spanish property.",
    },
  ];

  const scenarios = [
    {
      title: "If you use the property only for yourself",
      text:
        "If you are a UK tax resident and use your Spanish property only for private holidays, Spain may still tax you on imputed income through the non-resident income tax system. This is not rent you actually receive. It is a deemed income calculation based on the property and is normally declared through Modelo 210.",
    },
    {
      title: "If you rent out the property",
      text:
        "Spain can tax rental income because the property is located in Spain. If you are UK tax resident, the rental income may also need to be reported to HMRC as overseas property income. Spanish tax paid may be relevant for double taxation relief, depending on the circumstances.",
    },
    {
      title: "If you sell the Spanish property",
      text:
        "Spain may tax the capital gain because the property is located in Spain. If the seller is non-resident in Spain, the buyer generally withholds 3% of the sale price and pays it to the Spanish tax authorities. UK residents may also need to consider UK Capital Gains Tax.",
    },
    {
      title: "If you later become Spanish tax resident",
      text:
        "Some buyers start with a second home and later spend much more time in Spain. If you become Spanish tax resident, Spain may tax your worldwide income and assets under Spanish rules. This should be planned before your time in Spain increases significantly.",
    },
  ];

  const records = [
    "Purchase deed and completion statement",
    "Invoices for buying costs",
    "Notary and land registry costs",
    "Legal fees",
    "Renovation and improvement invoices",
    "Mortgage documents",
    "Rental records",
    "Spanish tax filings",
    "Proof of Spanish tax paid",
    "Community fee records",
    "IBI receipts",
    "Sale documents and estate agent invoices",
  ];

  const mistakes = [
    {
      title: "Thinking Spanish tax is only due when the property is rented",
      text:
        "Many non-resident owners are surprised that private-use property can still create Spanish non-resident tax obligations through imputed income.",
    },
    {
      title: "Forgetting Modelo 210",
      text:
        "Modelo 210 is one of the most commonly missed obligations by foreign owners in Spain. Buyers should ask before completion who will handle the annual Spanish filings.",
    },
    {
      title: "Assuming UK tax does not apply because the property is abroad",
      text:
        "UK tax residents generally need to consider worldwide income and gains. Spanish rental income or a Spanish property sale may still be relevant in the UK.",
    },
    {
      title: "Not checking tourist rental rules before buying",
      text:
        "A property that looks perfect for rental income may not be suitable legally, practically or under community rules. Check licences, local regulations, community statutes and building suitability before you buy.",
    },
    {
      title: "Ignoring capital gains tax until sale",
      text:
        "Capital gains tax is easier to plan when records are kept from day one. Keep all purchase, cost and improvement documents from the start.",
    },
    {
      title: "Not taking advice on ownership structure",
      text:
        "Buying in one name, joint names, through a company or with family money can have different tax and inheritance consequences. This should be considered before signing.",
    },
  ];

  const questions = [
    "Will the property be for private use only, rental income or both?",
    "Will I need to file Modelo 210 in Spain each year?",
    "Who will prepare my Spanish non-resident tax returns?",
    "Do I need to report rental income in the UK?",
    "How will Spanish tax paid be credited or relieved in the UK?",
    "What happens if I sell the property later?",
    "What records should I keep from day one?",
    "What are the local IBI and community fees?",
    "Are tourist rentals permitted in the municipality and community?",
    "Does the property have legal or technical issues that could affect value?",
    "Should I make a Spanish will?",
    "Could my tax residency change if I spend more time in Spain?",
  ];

  const inheritanceQuestions = [
    "Who owns the property?",
    "Is it owned by one person, a couple or family members?",
    "What happens if one owner dies?",
    "Is there a Spanish will?",
    "How does the UK estate position interact with Spanish succession rules?",
    "Could Spanish inheritance tax apply?",
    "How will the property be passed to children or other heirs?",
  ];

  const usefulSources = [
    {
      label: "HMRC: Tax on foreign income",
      href: "https://www.gov.uk/tax-foreign-income",
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
      label: "UK-Spain Double Taxation Convention",
      href: "https://assets.publishing.service.gov.uk/media/5a7f1a77e5274a2e87db3d01/spain-dtc_-_in_force.pdf",
    },
    {
      label: "HMRC: Relief for Foreign Tax Paid",
      href: "https://www.gov.uk/government/publications/calculating-foreign-tax-credit-relief-on-income-hs263-self-assessment-helpsheet/relief-for-foreign-tax-paid-2024-hs263",
    },
    {
      label: "HMRC Property Income Manual: overseas property income",
      href: "https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim4702",
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
              capital gains and double taxation relief before buying on the
              Costa Blanca.
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

      {/* INTRODUCTION */}
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
                the pool, the terrace, the town and the lifestyle. Those things
                matter. But if you are a UK tax resident buying property in
                Spain, the tax position should be understood before you buy, not
                after completion.
              </p>

              <p className="mt-6">
                Owning a Spanish property can create tax obligations in Spain
                and, depending on your residency and use of the property,
                reporting obligations in the UK as well. The right structure,
                paperwork and expectations can save stress later.
              </p>

              <p className="mt-6">
                This guide is general information only and does not replace
                personal tax advice from a qualified UK and Spanish tax adviser.
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
              People often search for “English tax rules for buying in Spain” or
              “English tax second home Spain”. In tax terms, the more accurate
              phrase is usually UK tax resident. UK tax rules may apply if you
              are resident in the United Kingdom, whether you live in England,
              Scotland, Wales or Northern Ireland.
            </p>

            <p className="mt-6">
              This guide therefore refers to UK tax residents and British
              buyers, not only English buyers.
            </p>
          </div>
        </div>
      </section>

      {/* BASIC PRINCIPLE */}
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
              The UK may be relevant because UK tax residents generally need to
              consider worldwide income and gains. The UK-Spain double taxation
              agreement does not usually make tax disappear. It helps determine
              taxing rights and how double taxation may be relieved.
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

      {/* SPANISH TAXES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Spanish taxes
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Spanish taxes connected to owning property.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {spanishTaxes.map((item) => (
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

      {/* DOUBLE TAXATION */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Double taxation relief
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Relief depends on correct reporting and good records.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              The UK and Spain have a double taxation convention. The purpose is
              to reduce the risk of being taxed twice on the same income or
              gain.
            </p>

            <p className="mt-6">
              However, double taxation relief is not automatic in every
              practical sense. You need to report correctly, keep records and
              claim relief in the right way. In some cases, the amount of
              foreign tax paid may not match the exact amount of UK tax credit
              available.
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

      {/* INHERITANCE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Inheritance and estate planning
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            A Spanish property can also create inheritance and estate planning
            questions.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-white/75">
            British owners should not assume that a UK will is enough or that
            Spanish inheritance tax works like UK inheritance tax. Buyers should
            take advice before purchase, especially if buying as a couple, with
            children from previous relationships or with family contributions.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inheritanceQuestions.map((question) => (
              <div key={question} className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <p className="leading-relaxed text-white/80">{question}</p>
              </div>
            ))}
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

      {/* WHY NORDIC MOVE */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Why this matters
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Good buying guidance is about more than the view and the asking
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
              That is why our process starts with Area Match and continues with
              careful checks before purchase. Through the Purchase Safety Report,
              independent specialists can review important legal and technical
              risks. Tax advice should always be handled by qualified tax
              professionals, but we help buyers ask the right questions early and
              keep the process structured.
            </p>

            <p className="mt-6">
              For British buyers, this is especially important because Spain and
              the UK can both be relevant. A second home in Spain can be a
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
            obligations in both Spain and the UK. Spain may tax you because the
            property is located in Spain. The UK may also be relevant because UK
            tax residents generally need to consider foreign income and gains.
          </p>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-white/75">
            The best approach is simple: use qualified advisers in both
            countries, keep good records, understand Modelo 210 and do not treat
            a Spanish property as only a lifestyle purchase. It is also a legal,
            financial and long-term planning decision.
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

      {/* WEBSITE CARD SUGGESTION */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Suggested guide card
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            UK tax rules for a second home in Spain
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-700">
            What UK tax residents should understand about Spanish property
            taxes, Modelo 210, rental income, capital gains, double taxation
            relief and owning a second home abroad.
          </p>

          <a
            href="/guides/uk-tax-second-home-spain"
            className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#1e2a3a]"
          >
            Read the guide →
          </a>
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
            official sources as a starting point and always confirm your position
            with qualified UK and Spanish tax advisers before buying, renting or
            selling.
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
  );
}
