export const metadata = {
  title: "Honest Guide to Buying Property on Costa Blanca North",
  description:
    "An honest guide for Dutch, German and Swiss buyers considering property on Costa Blanca North. Learn about hidden costs, rentals, noise, electricity pylons, community rules, legal checks and real-life risks before buying.",
};

export default function HonestGuideBuyingPropertyCostaBlancaNorthPage() {
  const realLifeChecks = [
    {
      title: "Electricity pylons and overhead cables",
      text:
        "A property can look beautiful in photos, but a nearby electricity pylon, overhead cable or transformer can affect the view, the feeling of the home and future resale appeal. Always visit the property from several angles and check the surroundings, not only the terrace view.",
    },
    {
      title: "Road noise and hidden traffic",
      text:
        "Some homes feel peaceful during a viewing but are close to a road that becomes busier during commuting hours, summer months or weekends. Visit at different times of day before making a final decision.",
    },
    {
      title: "Summer noise and tourist pressure",
      text:
        "A calm street in March can feel very different in August. In some coastal areas, holiday rentals, late-night guests, beach traffic and seasonal bars can change the atmosphere dramatically.",
    },
    {
      title: "Steep access and daily practicality",
      text:
        "Many villas on Costa Blanca North have beautiful views because they are built on hills. That can also mean steep roads, stairs, difficult parking, higher maintenance and more dependence on a car.",
    },
    {
      title: "Urbanisation and community rules",
      text:
        "If the property belongs to an urbanisation or apartment community, the rules can affect rentals, renovations, pets, pools, noise, parking, facade changes and costs. Always review the community statutes and recent meeting minutes.",
    },
    {
      title: "Rental expectations",
      text:
        "Many buyers are told that a property can generate rental income. That may be true, but the real net result depends on licence rules, tax, agency fees, cleaning, maintenance, insurance, community rules, seasonality and occupancy.",
    },
  ];

  const hiddenCosts = [
    {
      title: "Purchase taxes and notary costs",
      text:
        "Buying costs are more than the asking price. Depending on whether the property is resale or new build, buyers may face transfer tax or VAT, notary costs, Land Registry costs, legal fees, mortgage costs if financed, bank costs and valuation costs.",
    },
    {
      title: "Legal and due-diligence fees",
      text:
        "A good independent lawyer is not an optional luxury. Your lawyer should check ownership, debts, licences, planning status, community debts, rental restrictions and whether the property matches official records.",
    },
    {
      title: "Community fees",
      text:
        "Apartments and many urbanisations have monthly or quarterly community fees. These can cover pools, gardens, lifts, security, lighting and shared maintenance, but they can also increase if major works are needed.",
    },
    {
      title: "IBI and local taxes",
      text:
        "Owners normally pay annual local property tax. The amount depends on the municipality, cadastral value and property type. Always ask for the latest IBI receipt before buying.",
    },
    {
      title: "Insurance",
      text:
        "Buildings insurance, contents insurance, public liability cover and rental insurance may all be relevant. If the property is rented out, standard private-use insurance may not be enough.",
    },
    {
      title: "Maintenance and repairs",
      text:
        "Pools, gardens, air-conditioning, humidity, terraces, roofs, exterior paint, appliances and security systems require maintenance. Older villas can have beautiful character but higher upkeep.",
    },
    {
      title: "Utilities and standing charges",
      text:
        "Electricity, water, internet, alarm systems, rubbish collection, pool service and gardening may continue even when you are not using the property.",
    },
    {
      title: "Property management",
      text:
        "If you do not live nearby, you may need someone to hold keys, inspect the home, manage guests, organise repairs, check storms, air the property and solve problems while you are abroad.",
    },
  ];

  const rentalCosts = [
    "Tourist rental licence or registration requirements",
    "Possible community approval or community restrictions",
    "Agency or platform commission",
    "Cleaning and laundry after each stay",
    "Repairs caused by guest use",
    "Higher electricity and water usage",
    "Insurance suitable for rental use",
    "Income tax declarations in Spain",
    "Non-resident tax obligations",
    "Vacant weeks outside peak season",
    "Replacement of furniture, linen and appliances",
    "Local rules that may change over time",
  ];

  const legalChecks = [
    {
      title: "Nota Simple from the Land Registry",
      text:
        "This should confirm ownership, registered charges, mortgages and other important registry information. It should be reviewed by an independent lawyer before you sign or transfer money.",
    },
    {
      title: "Cadastral information",
      text:
        "The Cadastre contains physical and fiscal property information. Your lawyer should compare cadastral data with the Land Registry and the real property on site.",
    },
    {
      title: "Building legality",
      text:
        "Extensions, pools, guest houses, covered terraces and garages should be checked. A property can look finished but still have parts that are not fully regularised.",
    },
    {
      title: "Community debts",
      text:
        "For apartments and urbanisations, ask for confirmation that the seller is up to date with community payments. Pending community debts can become a serious issue.",
    },
    {
      title: "Rental permission",
      text:
        "Never assume you can rent a property just because similar homes nearby are advertised online. Check regional rules, municipal rules, tourist registration, community statutes and recent legal changes.",
    },
    {
      title: "Energy, water and utility contracts",
      text:
        "Check whether the property has normal utility contracts, whether supplies are legal and whether upgrades may be needed for comfort, rental use or full-time living.",
    },
  ];

  const areaWarnings = [
    {
      area: "Moraira",
      text:
        "Moraira can be excellent for calm villa living, but buyers should check hill access, car dependence, villa maintenance, summer parking pressure and whether the area feels active enough outside the main season.",
    },
    {
      area: "Jávea",
      text:
        "Jávea offers more year-round life, but the experience differs strongly between Arenal, the Port, Old Town, Montgó and villa zones. Check traffic, noise, tourist areas and exact neighbourhood fit.",
    },
    {
      area: "Altea",
      text:
        "Altea is beautiful and atmospheric, but old-town access, parking, stairs, elevation, renovation restrictions and tourist activity should be checked carefully.",
    },
    {
      area: "Benissa",
      text:
        "Benissa can offer space and privacy, but some homes are more rural or isolated. Check access roads, services, distance to shops, maintenance, utilities and whether the area suits daily life.",
    },
    {
      area: "Calpe",
      text:
        "Calpe can be practical for apartments and beach life, but some areas are busier and more seasonal. Check building quality, community rules, tourist pressure, lifts, parking and noise.",
    },
    {
      area: "Dénia",
      text:
        "Dénia is strong for year-round services, restaurants and daily life, but buyers should compare beach zones, town-centre areas, traffic, parking, building age and seasonal variation.",
    },
  ];

  const questions = [
    "Is the property legal in its current form, including extensions, pool, terraces and outbuildings?",
    "Does the property match the Land Registry and Cadastre information?",
    "Are there electricity pylons, overhead cables, busy roads, bars, building plots or commercial areas nearby?",
    "Have you visited the property in the evening, early morning and weekend?",
    "Does the area feel right outside the summer season?",
    "Are there community rules about holiday rentals, pets, noise, renovations or exterior changes?",
    "Is tourist rental allowed by regional rules, local rules and the community of owners?",
    "What are the real annual costs, including tax, insurance, utilities, maintenance and management?",
    "If renting out, what remains after tax, commission, cleaning, repairs, empty weeks and wear and tear?",
    "Would this home still be practical if you are older, less mobile or living alone?",
    "How far are doctors, pharmacies, supermarkets, banks, restaurants and daily services?",
    "Is the home easy to resell to the next international buyer?",
  ];

  const officialSources = [
    {
      label: "BOE / DOGV — Decreto-ley 9/2024 on tourist housing in the Valencian Community",
      href: "https://www.boe.es/buscar/doc.php?id=DOGV-r-2024-90168",
    },
    {
      label: "Turisme Comunitat Valenciana — tourist housing regulation update",
      href: "https://www.turisme.gva.es/opencms/opencms/turisme/es/contents/home/noticia/noticia_1725542158000.html",
    },
    {
      label: "Spanish Ministry of Housing — community approval for new tourist apartments",
      href: "https://www.mivau.gob.es/el-ministerio/sala-de-prensa/noticias/mar-01042025-1647",
    },
    {
      label: "Spanish Tax Agency — Non-resident income tax for tourist apartment rental",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/vivienda-otros-inmuebles/tributacion-arrendador-viviendas-otros-inmuebles/tributacion-alquiler-apartamentos-turisticos/impuesto-sobre-renta-no-residentes.html",
    },
    {
      label: "Spanish Tax Agency — VAT and tourist apartment rental with hotel-type services",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/iva/iva-operaciones-inmobiliarias/alquilo-apartamento-turistico-tengo-que-iva.html",
    },
    {
      label: "Spanish Tax Agency — VAT or transfer tax when buying property",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
    },
    {
      label: "Spanish Land Registry — information for international property buyers",
      href: "https://sede.registradores.org/contenido/buyingahouse/",
    },
    {
      label: "Spanish Cadastre — official cadastral information",
      href: "https://www.catastro.hacienda.gob.es/ayuda/english_ovc.htm",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Honest guide to buying property on Costa Blanca North"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Honest Buyer Guide
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              The honest guide to buying property on Costa Blanca North.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              Costs, rentals, noise, electricity pylons, community rules and
              real-life checks Dutch, German and Swiss buyers should understand
              before buying a home in Spain.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Request your Area Match
              </a>

              <a
                href="/services/discovery-trips"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Explore the Buyer Discovery Trip
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
                Buy with open eyes
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Buying in Spain can be a beautiful decision. But only if you
                understand the real-life details first.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Many Dutch, German and Swiss buyers fall in love with Costa
                Blanca North for good reasons: the climate, the sea, the
                restaurants, the calm lifestyle, the international community and
                the possibility of spending more time outdoors.
              </p>

              <p className="mt-6">
                But a good purchase is not only about a sea view, a swimming
                pool or a beautiful terrace. The real quality of a property is
                often found in the details buyers do not notice during a first
                viewing: electricity pylons, road noise, community rules, rental
                restrictions, annual costs, maintenance, access roads, legal
                status and the atmosphere outside high season.
              </p>

              <p className="mt-6">
                This guide is not written to make buyers afraid. It is written
                to help you ask better questions before you buy. The goal is
                simple: fewer surprises, better decisions and a property that
                still feels right after the emotion of the viewing has passed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Quick answer
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            The biggest risks are usually not dramatic. They are practical,
            legal and financial details buyers did not check early enough.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {realLifeChecks.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-[#f6f1ea] p-8">
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

      {/* WHY PHOTOS DO NOT SHOW EVERYTHING */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Beyond the photos
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              A listing shows the property. It does not show daily life around
              the property.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Online property listings are designed to create interest. They
              show the swimming pool, the terrace, the renovated kitchen, the sea
              view and the best angles of the home. That is normal. But they do
              not always show what it is like to live there.
            </p>

            <p className="mt-6">
              Buyers should look beyond the property itself. What is behind the
              house? Is there a building plot next door? Are there electricity
              pylons nearby? Is the road quiet or only quiet during the viewing?
              Are there bars, holiday apartments or event venues close by? Is
              the home in a calm residential zone or in an area that changes
              completely in summer?
            </p>

            <p className="mt-6">
              This matters especially for older buyers who are looking for
              peace, predictability and comfort. A beautiful property can become
              stressful if daily access is difficult, maintenance is high, noise
              is seasonal or basic services are too far away.
            </p>
          </div>
        </div>
      </section>

      {/* HIDDEN COSTS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Real costs
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Hidden costs buyers often underestimate.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            The purchase price is only the beginning. Before buying, you should
            understand the full cost of acquisition and the annual cost of
            ownership. Some costs are predictable. Others depend on the property
            type, location, age, community, mortgage structure and whether you
            plan to rent it out.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {hiddenCosts.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white/70 p-8">
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

      {/* RENTALS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Renting out your property
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Can you rent out your property in Spain? Sometimes yes, but never
            assume it is automatic.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-white/75">
              <p>
                Many buyers ask: “Can we rent out the property when we are not
                using it?” The honest answer is: possibly, but it depends on the
                property, the region, the municipality, the community rules, the
                building type and the exact rental model.
              </p>

              <p className="mt-6">
                In the Valencian Community, tourist housing is regulated and the
                rules have changed in recent years. Buyers should check whether
                tourist rental registration is possible, whether the property
                meets the required conditions and whether there are community or
                local restrictions.
              </p>

              <p className="mt-6">
                For apartments and homes in buildings with a comunidad de
                propietarios, community rules are especially important. New
                tourist rentals in buildings may require express approval from
                the community of owners under Spain’s updated horizontal
                property rules. Existing situations and transitional rules should
                be checked by a lawyer.
              </p>

              <p className="mt-6">
                The biggest mistake is buying a property based on expected
                rental income without first confirming whether rental use is
                legally, practically and financially realistic.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h3 className="font-serif text-3xl text-white">
                Rental costs and checks
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-white/75">
                {rentalCosts.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NET RENTAL INCOME */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Net rental reality
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              What do you really keep after renting out your Spanish home?
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Gross rental income can sound attractive. But what matters is not
              the weekly rental price. What matters is the amount you keep after
              tax, commission, cleaning, repairs, utilities, insurance,
              maintenance, empty weeks and management.
            </p>

            <p className="mt-6">
              A simple example: a property may rent well for several weeks in
              summer, but the owner may still have to pay annual community fees,
              IBI, insurance, repairs, platform commission, agency management,
              cleaning, laundry, key handling, air-conditioning costs, pool
              service and income tax.
            </p>

            <p className="mt-6">
              Non-resident owners should also understand Spanish tax
              obligations. The Spanish Tax Agency gives specific information for
              non-resident income tax on rental income from tourist apartments,
              including Form 210 and different tax rates depending on residence
              status. If hotel-type services are provided, VAT treatment may
              also become relevant.
            </p>

            <p className="mt-6">
              For that reason, rental income should be treated as a serious
              calculation, not a promise. Before buying, ask for realistic annual
              numbers and have them checked by an independent tax or legal
              professional.
            </p>
          </div>
        </div>
      </section>

      {/* VILLA VS APARTMENT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Property type
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Villas and apartments have different risks.
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-[#f6f1ea] p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Villa risks
              </h3>

              <p className="mt-6 leading-relaxed text-stone-600">
                Villas offer privacy, space and independence. But they also
                bring more responsibility: pool maintenance, garden care,
                security, roof repairs, humidity checks, exterior painting,
                access roads, retaining walls, drainage and higher utility use.
              </p>

              <p className="mt-6 leading-relaxed text-stone-600">
                Buyers should also check whether all parts of the villa are
                legal, whether extensions were registered and whether the plot,
                pool, guest accommodation and terraces match official records.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Apartment risks
              </h3>

              <p className="mt-6 leading-relaxed text-stone-600">
                Apartments can be easier to maintain and more practical for
                lock-up-and-leave living. But they come with community rules,
                shared costs, possible rental restrictions, neighbour noise,
                lifts, shared pools and decisions made by the community of
                owners.
              </p>

              <p className="mt-6 leading-relaxed text-stone-600">
                Before buying an apartment, always check the community statutes,
                recent meeting minutes, annual accounts, planned works, debts,
                lift condition, parking rights and whether holiday rental use is
                allowed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AREA WARNINGS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Area reality check
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              What to check in each Costa Blanca North area.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              There is no perfect town. Each area has strengths and practical
              points to verify. The goal is not to avoid every drawback. The goal
              is to choose drawbacks you can comfortably live with.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {areaWarnings.map((item) => (
              <div key={item.area} className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-4xl text-[#1e2a3a]">
                  {item.area}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL CHECKS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Legal checks
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Documents and checks buyers should not skip.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Spain has a clear legal purchase process, but that does not mean
            every property is automatically clean, legal or suitable for your
            plans. Independent legal checks are essential before paying a deposit
            or signing a binding agreement.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {legalChecks.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white/70 p-8">
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

      {/* TOURIST RENTAL WARNING */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Important rental warning
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Do not buy first and ask about rental permission later.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Tourist rental rules are becoming more controlled in many parts of
              Spain. In the Valencian Community, tourist housing is regulated at
              regional level, and the 2024 regulatory changes introduced
              stricter controls around tourist housing registration and
              documentation.
            </p>

            <p className="mt-6">
              In buildings with a community of owners, the community can also be
              decisive. Since April 2025, Spain’s updated horizontal property
              rules give communities of owners a stronger role in authorising
              new tourist apartments in their buildings.
            </p>

            <p className="mt-6">
              This means a buyer should never rely only on what an agent,
              neighbour or previous owner says. Ask your lawyer to check the
              exact legal situation before buying, especially if rental income is
              part of your financial plan.
            </p>
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Buyer checklist
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Questions to ask before making an offer.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {questions.map((question) => (
              <div key={question} className="rounded-2xl bg-[#f6f1ea] p-6">
                <p className="leading-relaxed text-stone-700">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL ADVICE */}
      <section className="px-8 pb-28">
        <div className="mx-auto rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20 max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Final advice
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Buy the life, not only the house.
          </h2>

          <p className="mt-8 max-w-5xl text-xl leading-relaxed text-white/85">
            A beautiful property is only a good purchase if the area, legal
            situation, costs, community rules, rental possibilities and daily
            life fit your real needs.
          </p>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-white/75">
            For many Dutch, German and Swiss buyers, the smartest step is not to
            start with property viewings. It is to understand which areas fit
            your lifestyle, what to avoid and what must be checked before you
            fall in love with a home.
          </p>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-white/75">
            That is why Nordic Move Spain starts with Area Match and lifestyle
            intelligence. The right property search begins with the right
            questions.
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
              Schedule an introduction
            </a>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="px-8 pb-20">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Important note
          </p>

          <p className="mt-5 leading-relaxed text-stone-600">
            This article is general information for international buyers and is
            not legal, tax or financial advice. Rental rules, tax rules,
            community rules and local regulations can change. Always use an
            independent lawyer and qualified tax professional before buying,
            renting out or signing contracts.
          </p>
        </div>
      </section>

      {/* OFFICIAL SOURCES */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Official sources used
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            This guide uses official Spanish, Valencian and institutional
            sources where possible. Buyers should always verify the current
            position with an independent lawyer, tax adviser and relevant public
            authority before making a purchase decision.
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
  );
}