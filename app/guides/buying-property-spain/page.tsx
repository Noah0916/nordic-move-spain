export const metadata = {
  title: "Complete Guide to Buying Property in Spain | Costa Blanca North",
  description:
    "An extended buying guide for international buyers on the Costa Blanca North and in the province of Alicante: legal checks, local rules, ITP/IVA, tourist rentals, owners’ communities, energy certificates, technical checks and purchase risks.",
  openGraph: {
    title: "Complete Guide to Buying Property in Spain | Nordic Move Spain",
    description:
      "What international buyers should check before buying on the Costa Blanca North: documents, local rules, legal risks, building issues, costs and rental rules.",
    type: "website",
  },
};

export default function BuyingProcessPage() {
  const topChecks = [
    {
      title: "Legal ownership",
      text:
        "Check who legally owns the property, whether there are mortgages, charges, debts, attachments, easements or other burdens on the property, and whether the seller is actually authorised to sell.",
    },
    {
      title: "Planning and building legality",
      text:
        "Check with the town hall whether the property, swimming pool, terraces, extensions, guest accommodation, pergolas and other works were legally built and correctly registered.",
    },
    {
      title: "Local rules by municipality",
      text:
        "Rules can differ between Jávea, Dénia, Moraira, Benissa, Altea, Calpe and other towns. Think of tourist rentals, renovations, zoning plans, protected areas and parking rules.",
    },
    {
      title: "Technical condition",
      text:
        "Do not only look at appearance. Check moisture, cracks, roof, installations, electricity, pipes, pool, septic tank, retaining walls, slope and maintenance risks.",
    },
    {
      title: "Community and rentals",
      text:
        "Check the statutes, rules, minutes, outstanding community fees, monthly charges and possible restrictions on tourist rentals or renovations.",
    },
    {
      title: "Real cost of ownership",
      text:
        "Calculate not only the purchase price, but also taxes, notary, registry, lawyer, mortgage, insurance, IBI, waste tax, maintenance, community fees and non-resident tax.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Choose the right area first",
      text:
        "Do not start only by viewing properties. First compare towns, neighbourhoods, daily life, access, winter activity, healthcare, schools, community, privacy and long-term value.",
    },
    {
      number: "02",
      title: "Check your budget and financing",
      text:
        "Make a realistic calculation including purchase price, buying costs, taxes, renovation, furniture, maintenance, mortgage conditions and annual ownership costs.",
    },
    {
      number: "03",
      title: "Have the reservation or arras checked",
      text:
        "Do not sign a reservation agreement or arras contract without review by an independent lawyer. Pay attention to conditions, deadlines, payment moments and refund clauses.",
    },
    {
      number: "04",
      title: "Legal due diligence",
      text:
        "Check the Nota Simple, ownership, charges, debts, mortgage, cadastral data, permits, community, contracts, seller authority and possible restrictions.",
    },
    {
      number: "05",
      title: "Municipal and technical checks",
      text:
        "Have the town hall confirm whether structures and use are permitted. Combine this with a technical inspection of the property, installations and plot.",
    },
    {
      number: "06",
      title: "Notary, payment and transfer",
      text:
        "The transfer takes place at the notary. After that come tax payments, registration in the land registry, utilities, insurance and local administration.",
    },
  ];

  const legalChecks = [
    "Nota Simple: owner, charges, mortgages, attachments, easements and basic property details.",
    "Land Registry: check whether the legal description matches what you are buying.",
    "Catastro: compare cadastral data, plot, built area and reference with the actual situation.",
    "Seller: check identity, authority, powers of attorney, marital property regime or company structure.",
    "Debts: check outstanding mortgage, IBI, community fees, utilities and possible local charges.",
    "Contracts: check reservation contract, arras, purchase conditions, penalties, deadlines and cancellation clauses.",
    "Permits: check whether the property, pool, terraces, extensions and guest accommodation were legally built.",
    "Use: check whether the intended use fits zoning, community rules and local regulations.",
    "Completion: check keys, utilities, warranties, inventory, furniture and possible ongoing contracts.",
    "Registration: after completion, ownership must be correctly registered in the Land Registry.",
  ];

  const localAlicanteChecks = [
    {
      title: "Municipal building rules",
      text:
        "On the Costa Blanca North, building rules differ by municipality. In Jávea, Dénia, Benissa, Teulada-Moraira, Calpe and Altea, rules around extensions, heights, plot boundaries, pools, terraces, parking spaces and renovations may differ.",
    },
    {
      title: "Urban or rural land classification",
      text:
        "A property on rural land can have different restrictions from one in an urban area. For rustic or countryside properties, always check whether extension, rental, renovation, access, water, electricity and septic tank arrangements are legal and properly documented.",
    },
    {
      title: "Coastal zone and Ley de Costas",
      text:
        "Properties close to the sea can be affected by coastal protection rules. Distance to the shoreline, existing construction, renovation plans and extension possibilities should be checked carefully.",
    },
    {
      title: "Protected nature and landscape areas",
      text:
        "In or near areas such as Montgó, Serra Gelada, Peñón de Ifach or other protected zones, additional restrictions may apply to building, extensions, lighting, access, vegetation or use.",
    },
    {
      title: "Tourist rental rules",
      text:
        "The Comunitat Valenciana has specific rules for viviendas de uso turístico. In addition to regional registration, local planning rules and owners’ community rules may also determine whether tourist rental is possible.",
    },
    {
      title: "Flood, fire and slope risks",
      text:
        "Check risks such as drainage, flooding, wildfire exposure, retaining walls, erosion and insurability in valleys, barrancos, sloping plots, wooded areas and coastal locations.",
    },
  ];

  const financialItems = [
    {
      title: "Resale property: ITP",
      text:
        "When buying a resale property, the buyer usually pays transfer tax, Impuesto sobre Transmisiones Patrimoniales. In the Comunitat Valenciana, buyers often calculate around 10%, but rates and exceptions should always be checked at the time of purchase.",
    },
    {
      title: "New build: IVA and AJD",
      text:
        "When buying a new-build property directly from the developer, IVA usually applies instead of ITP. AJD, the Spanish stamp duty, may also apply.",
    },
    {
      title: "Notary and registry",
      text:
        "The notarial transfer, registration in the Land Registry and administrative handling involve additional costs. These depend on price, documents and financing.",
    },
    {
      title: "Lawyer and technical inspection",
      text:
        "An independent lawyer and technical specialist cost money, but can prevent far greater risks. This is especially important for villas, older properties and renovated homes.",
    },
    {
      title: "Mortgage and bank costs",
      text:
        "If financing is involved, valuation, bank conditions, interest rate, compulsory insurance, repayment structure, early repayment fees and currency risk may all matter.",
    },
    {
      title: "Annual ownership costs",
      text:
        "Think of IBI, waste tax, community fees, insurance, maintenance, pool, garden, utilities, alarm system, internet, property management and non-resident tax.",
    },
  ];

  const communityChecks = [
    "Request the statutes and internal rules of the Comunidad de Propietarios.",
    "Check the minutes of recent owners’ meetings.",
    "Check whether planned works or special assessments are coming up.",
    "Check whether the seller has outstanding debts to the community.",
    "Check whether tourist rentals are allowed or restricted.",
    "Check rules around pets, barbecues, air conditioning, awnings, facade changes and parking.",
    "Ask about the reserve fund, maintenance condition, lifts, pool, garden, security and shared installations.",
    "Check whether the property has the correct quota or participation share in the community.",
  ];

  const technicalChecks = [
    {
      title: "Moisture and ventilation",
      text:
        "Moisture issues are common in older coastal properties, poorly ventilated apartments, basements and homes that have been empty for long periods.",
    },
    {
      title: "Roof, facade and terraces",
      text:
        "Check waterproofing, cracks, drainage, railings, roof covering and possible leaks around terraces or flat roofs.",
    },
    {
      title: "Electricity and plumbing",
      text:
        "Older installations do not always meet modern expectations. Check capacity, safety, pipework, pressure, hot water and maintenance history.",
    },
    {
      title: "Swimming pool and installations",
      text:
        "Check pump, filter, pipes, leakage, permit, technical room and future maintenance costs.",
    },
    {
      title: "Septic tank and drainage",
      text:
        "For rural properties or older villas, it is important to check whether drainage, septic tank, water storage and waste-water systems are legal, safe and maintainable.",
    },
    {
      title: "Plot and retaining walls",
      text:
        "On sloping plots, extra attention should be paid to retaining walls, ground stability, drainage, access, steps, driveway and maintenance.",
    },
  ];

  const rentalChecks = [
    {
      title: "Regional registration",
      text:
        "For tourist rentals in the Comunitat Valenciana, regional registration and information duties apply. Advertising must include correct details and the registration number where rental is permitted.",
    },
    {
      title: "Local compatibility",
      text:
        "Municipalities may set additional planning requirements. A property that looks attractive for rental is not automatically suitable or permitted for tourist use.",
    },
    {
      title: "Owners’ community",
      text:
        "For apartments and urbanisations, it must be checked whether the community allows, limits or can restrict tourist rental under the applicable rules.",
    },
    {
      title: "Financial reality",
      text:
        "Rental potential should be calculated realistically, including occupancy, management, cleaning, taxes, licences, seasonal pressure and wear and tear.",
    },
  ];

  const afterPurchase = [
    "Check registration at the Land Registry.",
    "Ensure taxes and costs after completion are handled correctly.",
    "Put IBI, waste tax and local charges in the owner’s name.",
    "Arrange water, electricity, internet, alarm and insurance.",
    "Inform the community and set up bank authorisation for monthly fees.",
    "Plan non-resident tax or other fiscal obligations.",
    "Collect keys, alarm codes, warranties, manuals and maintenance contracts.",
    "Store technical reports, Nota Simple, title deed and insurance documents securely.",
  ];

  const faqs = [
    {
      question: "Can a foreigner buy property in Spain?",
      answer:
        "Yes, foreigners can buy real estate in Spain. A NIE number, correct identification, legal review, tax planning and often a Spanish bank account are needed.",
    },
    {
      question: "Is a lawyer required when buying in Spain?",
      answer:
        "A lawyer is not always legally required, but is strongly recommended for international buyers. The lawyer checks ownership, charges, contracts, permits and risks.",
    },
    {
      question: "What is the difference between Registro and Catastro?",
      answer:
        "The Registro de la Propiedad provides legal information about ownership and rights. The Catastro contains administrative and cadastral details such as surface area, use and reference. Differences between the two should be understood before purchase.",
    },
    {
      question: "Can I simply rent out my property as tourist accommodation?",
      answer:
        "No. Tourist rental depends on regional rules, municipal conditions, property type, location and possible rules of the owners’ community.",
    },
    {
      question: "Should I have the property technically inspected?",
      answer:
        "For villas, older properties, homes with pools, sloping plots or renovated properties, a technical inspection is very wise. Many risks are not visible during a normal viewing.",
    },
    {
      question: "Which local rules matter on the Costa Blanca North?",
      answer:
        "Especially planning rules, tourist rental rules, coastal regulations, protected areas, community rules, parking, septic tanks, access, slopes, drainage and fire or flood risks.",
    },
  ];

  const officialSources = [
    {
      label: "Agencia Tributaria: IVA or ITP when buying a home",
      href: "https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
    },
    {
      label: "Agencia Tributaria: Modelo 210 non-resident tax",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/todas-gestiones/impuestos-tasas/impuesto-sobre-renta-no-residentes/modelo-210-irnr______a-no-residentes-permanente_/instrucciones.html",
    },
    {
      label: "Registradores de España: Land Registry",
      href: "https://sede.registradores.org/site/propiedad?lang=en_EN",
    },
    {
      label: "Notariado: buying a home in Spain",
      href: "https://www.notariado.org/comprar-una-vivienda/",
    },
    {
      label: "Administración.gob.es: notaries and Land Registry",
      href: "https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/compraventa-bienes-inmuebles/notarias-registros-propiedad.html",
    },
    {
      label: "Generalitat Valenciana: tourist accommodation",
      href: "https://sede.gva.es/es/detall-tramit?id_proc=19207",
    },
    {
      label: "MITECO: energy certification of buildings",
      href: "https://www.miteco.gob.es/es/energia/eficiencia/certificacion-energetica/real-decreto-390-2021.html",
    },
    {
      label: "BOE: Ley de Costas",
      href: "https://www.boe.es/buscar/act.php?id=BOE-A-1988-18762",
    },
    {
      label: "Catastro: cadastral reference",
      href: "https://www.catastro.hacienda.gob.es/es-ES/referencia_catastral.html",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative flex min-h-[82vh] items-center overflow-hidden px-8 py-32">
        <img
          src="https://multimedia.comunitatvalenciana.com/682E658C47A64EC3B22D304139F66CBD/img/D799BA15C2B64079BB4ADACA590DBF80/Dionis_Boutique.jpg?responsive"
          alt="Buying a property in Spain on the Costa Blanca North"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 mx-auto max-w-6xl text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Complete buying guide
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Buying property in Spain: rules, risks and local checks on the Costa Blanca North.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            An extended guide for international buyers who want to look beyond
            views and price: from Nota Simple, permits and Catastro to tourist
            rentals, owners’ communities, technical risks and local rules in
            Alicante.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/services/purchase-safety-report"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              View the Purchase Safety Report
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Schedule an introduction
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Not just signing at the notary
            </p>

            <h2 className="font-serif text-5xl leading-tight text-[#1e2a3a]">
              The real purchase check starts before you fall in love with a property.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Buying a property in Spain is different from buying in the
              Netherlands, Germany, Belgium or Scandinavia. The legal structure,
              municipal rules, building registration, taxation, tourist rental
              rules and owners’ communities work differently.
            </p>

            <p className="mt-6">
              On the Costa Blanca North in particular, local checks matter. A
              villa in Jávea, an apartment in Calpe, a finca in Benissa, a
              property in Altea Hills or a home close to the coast can each have
              different points of attention.
            </p>

            <p className="mt-6">
              This guide gives a practical but broad checklist. It does not
              replace advice from a lawyer, notary, gestor, tax adviser or
              technical specialist, but it helps you understand which questions
              to ask before purchase.
            </p>
          </div>
        </div>
      </section>

      {/* TOP CHECKS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              What should you check?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Six checks almost every buyer on the Costa Blanca North needs.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {topChecks.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white p-9 shadow-sm">
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

      {/* PROCESS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Buying process
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            From first orientation to completion at the notary.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.number} className="border-l border-[#c8a063]/30 pl-6">
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {step.number}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL CHECKS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Legal due diligence
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            What should be checked before you sign?
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-white/80">
            The Nota Simple is important, but it is not enough. A safer purchase
            requires a combination of registry information, municipal checks,
            technical inspection, contract review and insight into the owners’
            community.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {legalChecks.map((check) => (
              <div key={check} className="rounded-2xl bg-white/8 p-5">
                <p className="leading-relaxed text-white/80">• {check}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL ALICANTE CHECKS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Local rules in Alicante
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              The same type of property can carry different risks in each municipality.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              The Costa Blanca North is within the province of Alicante, but
              many practical rules are influenced locally by the municipality,
              zoning plans, urbanisations, coastal protection and owners’
              communities. Always check the exact location, not only the
              property itself.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {localAlicanteChecks.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white p-9 shadow-sm">
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

      {/* COSTS */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Financial obligations
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Understand the real cost of buying and owning.
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
              <p>
                The purchase price is only one part. When buying in Spain, you
                must also consider taxes, notary, registry, lawyer, mortgage,
                technical checks and administrative costs.
              </p>

              <p>
                After purchase, annual costs remain: IBI, waste tax, insurance,
                community fees, maintenance, utilities, non-resident tax and
                possible property management.
              </p>

              <p>
                For higher-value properties, multiple properties, rental plans or
                international tax situations, advice from a tax specialist is
                important.
              </p>
            </div>
          </div>

          <img
            src="https://orangevillas.com/media/images/properties/thumbnails/105635_xl.jpg"
            alt="Financial guidance when buying a property in Spain"
            className="h-[560px] w-full rounded-[32px] object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {financialItems.map((item) => (
            <div key={item.title} className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                {item.title}
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-[#efe7dc] p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Comunidad de Propietarios
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            A beautiful property can still be wrong if the community does not fit.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-700">
            For apartments, penthouses, townhouses and urbanisations, the owners’
            community often determines far more than buyers expect. Think of
            monthly fees, rules, maintenance, rentals, pets, renovations, parking
            and shared facilities.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {communityChecks.map((check) => (
              <div key={check} className="rounded-2xl bg-white/70 p-5">
                <p className="leading-relaxed text-stone-700">• {check}</p>
              </div>
            ))}
          </div>

          <a
            href="/guides/homeowners-association-spain"
            className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
          >
            Read more about owners’ communities
          </a>
        </div>
      </section>

      {/* TOURIST RENTAL */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Tourist rentals
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Rental potential is not a guarantee that rental is permitted.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Many international buyers include rental income in their financial
              planning. That can work, but tourist rental must be checked before
              purchase. Regional rules, municipal compatibility and the owners’
              community can all have an impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {rentalChecks.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white p-8 shadow-sm">
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

      {/* TECHNICAL CHECKS */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <img
            src="/images/legal.png"
            alt="Technical inspection when buying property in Spain"
            className="h-[560px] w-full rounded-[32px] object-cover shadow-xl"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Technical inspection
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Many purchase risks are not visible during a viewing.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              A sunny terrace, beautiful furniture and sea views say little
              about the technical condition. Especially with older villas,
              renovated properties, properties with pools, sloping plots or
              rural settings, a technical inspection is wise.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Combine the technical check with legal and municipal due diligence.
              A technically sound home can still have legal issues, and a legally
              clean property can become technically expensive.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technicalChecks.map((item) => (
            <div key={item.title} className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                {item.title}
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ENERGY */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-white p-12 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Energy certificate and future renovations
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Energy performance is becoming increasingly important for sale, rental and financing.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
            <p>
              Spain has a mandatory energy certificate for existing buildings or
              parts of buildings that are sold or rented to a new tenant.
              Tourist accommodation also falls under these rules when rented.
            </p>

            <p>
              For buyers, this means older properties require extra attention.
              Poor insulation, old windows, outdated air conditioning,
              insufficient ventilation or a low energy rating can later lead to
              investment needs.
            </p>

            <p>
              Do not only ask whether the certificate exists, but also what the
              rating means for comfort, renovation budget and future resale value.
            </p>
          </div>
        </div>
      </section>

      {/* AFTER PURCHASE */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            After the purchase
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            The purchase does not end at key handover.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-white/80">
            After the notary, documents, registrations, payments, taxes,
            insurance, utilities and maintenance must be organised properly. That
            is why Nordic Move Spain works with a secure client portal where
            important documents and next steps are collected clearly.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {afterPurchase.map((item) => (
              <div key={item} className="rounded-2xl bg-white/8 p-5">
                <p className="leading-relaxed text-white/80">• {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Nordic Move Spain
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              We do not replace your lawyer or technical specialist. We make sure the right questions are on the table.
            </h2>
          </div>

          <div className="rounded-[36px] bg-white p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-stone-600">
              Nordic Move Spain guides international buyers in structuring their
              purchase journey. We first help with the right area and living
              environment, then with clarity around documents, risks, specialists
              and next steps.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              For legal, tax, technical and mortgage assessments, we work with
              independent local professionals. Their role is to assess; our role
              is to make the process clear, understandable and well organised.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/services/purchase-safety-report"
                className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                View the Purchase Safety Report
              </a>

              <a
                href="/services/secure-client-portal"
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Secure client portal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Frequently asked questions
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Questions buyers often ask too late.
          </h2>

          <div className="mt-10 grid gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[28px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {faq.question}
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICIAL SOURCES */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Official sources
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            This guide is based on general buying practice and official Spanish
            sources. Rules change and can differ by municipality. Always have
            your personal situation and the specific property checked by an
            independent lawyer, tax adviser, gestor and technical specialist.
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

      {/* FINAL CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-stone-900 p-14 text-center text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">
            Buy with confidence
          </p>

          <h2 className="font-serif text-5xl leading-tight">
            Are you considering a property on the Costa Blanca North?
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-white/80">
            We help you first choose the right area, then assess the property
            critically and move through the purchase process with more clarity,
            structure and confidence.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-stone-900"
          >
            Schedule a personal introduction
          </a>
        </div>
      </section>
    </main>
  );
}
