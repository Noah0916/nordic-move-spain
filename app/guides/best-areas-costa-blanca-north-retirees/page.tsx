export const metadata = {
  title: "Best Areas on Costa Blanca North for Retirees",
  description:
    "Discover the best areas on Costa Blanca North for retirees buying property in Spain. Compare Dénia, Moraira, Jávea, Altea, Benissa and Calpe by healthcare, services, quiet living, mobility, costs and real-life suitability.",
};

export default function BestAreasCostaBlancaNorthRetireesPage() {
  const areaCards = [
    {
      href: "/regions/denia",
      label: "Best overall for daily life",
      title: "Dénia",
      bestFor:
        "Retirees who want year-round services, restaurants, healthcare access, beaches, harbour life and a real working town.",
      watch:
        "Choose the exact neighbourhood carefully. Some beach zones feel different from the town centre, and parking, traffic and building age vary by area.",
    },
    {
      href: "/regions/moraira",
      label: "Best for calm villa living",
      title: "Moraira",
      bestFor:
        "Retirees who want peace, privacy, an elegant coastal atmosphere, restaurants, coves and a polished residential lifestyle.",
      watch:
        "Moraira can be quieter outside the main season. Villas may also mean more maintenance, car dependency and higher running costs.",
    },
    {
      href: "/regions/javea",
      label: "Best for active retirees",
      title: "Jávea",
      bestFor:
        "Retirees who want a larger international community, beaches, restaurants, sports, social life and several lifestyle zones to choose from.",
      watch:
        "Jávea is not one single lifestyle. The Arenal, Port, Old Town, Montgó and villa zones all feel different, especially in summer.",
    },
    {
      href: "/regions/altea",
      label: "Best for culture and beauty",
      title: "Altea",
      bestFor:
        "Retirees who value atmosphere, culture, restaurants, old-town beauty, sea views and a slower Mediterranean rhythm.",
      watch:
        "The old town is charming but can involve hills, stairs and parking limitations. That matters if mobility becomes important later.",
    },
    {
      href: "/regions/benissa",
      label: "Best for privacy and space",
      title: "Benissa",
      bestFor:
        "Retirees who want countryside living, privacy, larger plots, authentic surroundings and access to nearby Moraira and Calpe.",
      watch:
        "Benissa can be more car-dependent. Some homes are rural or isolated, so check access, services, internet, utilities and emergency practicality.",
    },
    {
      href: "/regions/calpe",
      label: "Best for apartments and convenience",
      title: "Calpe",
      bestFor:
        "Retirees who want beach access, apartment living, sea views, restaurants, shops, promenade life and a more urban coastal setting.",
      watch:
        "Some areas are busier and more seasonal. Check noise, tourist rentals, lifts, community rules, parking and building maintenance.",
    },
  ];

  const decisionFactors = [
    {
      title: "Healthcare access",
      text:
        "For retirees, healthcare access should be one of the first filters. Check the distance to local doctors, pharmacies, emergency care, hospitals and private clinics. Dénia is often practical because it has a wider service base and the Hospital de Dénia is located in the Marina Alta area.",
    },
    {
      title: "Year-round life",
      text:
        "Some coastal areas feel lively in summer and much quieter in winter. That can be perfect if you want calm, but frustrating if you expect restaurants, services and social life all year.",
    },
    {
      title: "Mobility and access",
      text:
        "A villa with sea views may come with steep roads, stairs, narrow access or difficult parking. This matters more as buyers get older. Think about daily life in 5, 10 or 15 years, not only today.",
    },
    {
      title: "Car dependency",
      text:
        "Many beautiful areas on Costa Blanca North require a car. Before buying, check whether you can still live comfortably if one partner stops driving or if you prefer to walk to shops, restaurants and services.",
    },
    {
      title: "Maintenance burden",
      text:
        "Pools, gardens, terraces, exterior painting, air-conditioning, humidity control and security systems all require attention. A low-maintenance apartment may be better for some retirees than a large villa.",
    },
    {
      title: "Noise and tourist pressure",
      text:
        "A quiet March viewing can be very different from August. Check tourist rentals, bars, beach traffic, parking pressure, holiday apartments and seasonal noise before making a final decision.",
    },
    {
      title: "Community rules",
      text:
        "Apartments and urbanisations often have community rules. These can affect rentals, pets, renovations, pool use, noise, parking, maintenance costs and future decisions.",
    },
    {
      title: "Social connection",
      text:
        "For many retirees, the biggest question is not only where to buy, but where they will feel connected. Look at language, international communities, clubs, restaurants, activities and opportunities to meet like-minded people.",
    },
  ];

  const retireeProfiles = [
    {
      title: "Retired couple wanting convenience",
      recommendation:
        "Start with Dénia, Calpe and selected parts of Jávea.",
      reason:
        "These areas usually offer more daily services, shops, restaurants and apartment options. They can be more practical for year-round living and easier lock-up-and-leave ownership.",
    },
    {
      title: "Retired couple wanting peace and privacy",
      recommendation:
        "Start with Moraira, Benissa and selected villa zones near Jávea.",
      reason:
        "These locations can offer calmer residential surroundings, villas, views and privacy, but buyers should check maintenance, access roads and car dependency carefully.",
    },
    {
      title: "Single retiree moving alone",
      recommendation:
        "Start with Dénia, Jávea or central areas with services nearby.",
      reason:
        "A single buyer may benefit from stronger daily convenience, social opportunities, restaurants, clubs, healthcare access and less isolated living.",
    },
    {
      title: "Retirees who want culture and beauty",
      recommendation:
        "Start with Altea, Dénia and selected parts of Jávea.",
      reason:
        "These areas offer atmosphere, old-town charm, restaurants, cultural identity and strong Mediterranean character, but mobility and parking should be checked.",
    },
    {
      title: "Retirees who want a second home, not full-time living",
      recommendation:
        "Start with Moraira, Calpe, Altea and Jávea.",
      reason:
        "These areas can work well for part-time use, but the right choice depends on whether you prefer a villa, apartment, beach access, rental potential or low maintenance.",
    },
    {
      title: "Retirees thinking about rental income",
      recommendation:
        "Start with Calpe, Dénia and selected parts of Jávea, but verify everything first.",
      reason:
        "Rental appeal is not the same as rental permission. Always check tourist rental rules, community approval, tax, management costs and realistic net income before buying.",
    },
  ];

  const mistakes = [
    {
      title: "Buying only for the view",
      text:
        "A sea view is beautiful, but it should not override access, noise, healthcare, services, maintenance and long-term practicality.",
    },
    {
      title: "Ignoring future mobility",
      text:
        "Steep roads, stairs, difficult parking and isolated locations can become a problem later, even if they feel manageable during the first viewing.",
    },
    {
      title: "Assuming every coastal area is active all year",
      text:
        "Some areas are calm outside the summer season. That may be a benefit or a drawback depending on your expectations.",
    },
    {
      title: "Underestimating villa maintenance",
      text:
        "Large villas can be wonderful, but they require pool care, garden care, repairs, security, exterior work and regular checks when you are abroad.",
    },
    {
      title: "Not checking community rules",
      text:
        "Community rules can affect daily life, rental use, pets, renovations, pool use, noise, parking and future costs.",
    },
    {
      title: "Thinking rental income is guaranteed",
      text:
        "Rental income depends on permission, rules, tax, seasonality, management, cleaning, damage, vacancy and running costs.",
    },
  ];

  const checklist = [
    "How far is the nearest doctor, pharmacy and hospital?",
    "Can you live comfortably without driving every day?",
    "Is the property practical if mobility becomes more limited?",
    "Does the area feel active enough outside summer?",
    "Are restaurants and shops open year-round?",
    "Are there stairs, steep roads or difficult access?",
    "Is the home easy to maintain from abroad?",
    "Are there tourist rentals or noisy bars nearby?",
    "Are community rules and meeting minutes acceptable?",
    "What are the annual ownership costs?",
    "Can you rent the property legally if that matters to you?",
    "Would the area still suit you in 10 years?",
  ];

  const officialSources = [
    {
      label: "Dénia official tourism — population, coast, services and UNESCO gastronomy",
      href: "https://denia.net/en/",
    },
    {
      label: "UNESCO Creative Cities Network — Dénia",
      href: "https://www.unesco.org/en/creative-cities/denia",
    },
    {
      label: "Xàbia Tourism — tourism offices and main districts",
      href: "https://en.xabia.org/ver/1646/oficinas-de-turismo.html",
    },
    {
      label: "Xàbia Tourism — Arenal beach and leisure area",
      href: "https://en.xabia.org/ver/1567/Arenal-.html",
    },
    {
      label: "Xàbia Tourism — Montgó Natural Park",
      href: "https://en.xabia.org/ver/1497/Parque-Natural-del-Montg%C3%B3.html",
    },
    {
      label: "Teulada-Moraira Tourism",
      href: "https://www.turismoteuladamoraira.com/ttm/web_php/index.php?lang=4",
    },
    {
      label: "Department of Health Dénia — Generalitat Valenciana",
      href: "https://denia.san.gva.es/ca/",
    },
    {
      label: "Spanish Police — EU Citizen Registration Certificate",
      href: "https://sede.policia.gob.es/portalCiudadano/_en/tramites_extranjeria_tramite_certificadoregistro_ciudadanoue.php",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Best areas on Costa Blanca North for retirees"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Retiree Area Guide
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Best areas on Costa Blanca North for retirees.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              A practical guide for Dutch, German, Swiss and other international
              buyers comparing Dénia, Moraira, Jávea, Altea, Benissa and Calpe
              before retiring or buying a second home in Spain.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Request your Area Match
              </a>

              <a
                href="/guides/honest-guide-buying-property-costa-blanca-north"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Read the honest buyer guide
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
                Retiring in Spain
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                The best area is not the most beautiful one. It is the one that
                still works for your daily life.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Costa Blanca North is attractive for many retirees because it
                offers Mediterranean weather, coastal towns, international
                communities, restaurants, healthcare access, nature and a slower
                rhythm of life.
              </p>

              <p className="mt-6">
                But the right choice depends on more than sunshine and sea
                views. Older buyers should compare healthcare access, shops,
                mobility, winter activity, maintenance, car dependency, rental
                rules, community restrictions and how the area feels outside the
                main holiday season.
              </p>

              <p className="mt-6">
                This guide helps you compare the most relevant Costa Blanca
                North areas for retirees, especially Dutch, German and Swiss
                buyers who want a calm but realistic decision before purchasing
                property in Spain.
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
            Dénia is often the strongest all-round choice for daily life.
            Moraira is often best for calm villa living. Jávea is often best for
            active retirees.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            There is no single best area for every retiree. A couple looking for
            healthcare access and restaurants may choose differently from a
            buyer wanting a private villa, a quiet second home or an apartment
            near the beach.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {areaCards.map((area) => (
              <a
                key={area.href}
                href={area.href}
                className="rounded-[32px] bg-[#f6f1ea] p-8 transition hover:-translate-y-1 hover:bg-[#efe6d9]"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  {area.label}
                </p>

                <h3 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
                  {area.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {area.bestFor}
                </p>

                <div className="mt-6 rounded-2xl bg-white p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    Check carefully: {area.watch}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY RETIREES NEED DIFFERENT FILTERS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Different priorities
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Retirees should judge an area differently from holiday buyers.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              A holiday buyer may focus on beaches, views and restaurants. A
              retiree needs to look deeper. Is the home practical year-round?
              Are services nearby? Is the area too quiet in winter? Will the
              property still work if driving becomes harder? Is healthcare easy
              to reach? Is the community welcoming?
            </p>

            <p className="mt-6">
              This does not mean retirees should only buy in larger towns. Many
              buyers are happiest in quieter areas such as Moraira or Benissa.
              But those choices work best when buyers understand the trade-offs
              before signing.
            </p>

            <p className="mt-6">
              The goal is not to avoid every drawback. The goal is to choose an
              area where the drawbacks are acceptable for your real life.
            </p>
          </div>
        </div>
      </section>

      {/* DECISION FACTORS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              What matters most
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Key factors retirees should compare before buying.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {decisionFactors.map((item) => (
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

      {/* AREA DEEP DIVE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Area by area
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Which Costa Blanca North area fits which type of retiree?
          </h2>

          <div className="mt-12 space-y-10">
            <div className="rounded-[32px] bg-white/70 p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Dénia — best for year-round services and daily convenience
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Dénia is often one of the strongest choices for retirees who
                want practical full-time living. It has a real town rhythm,
                restaurants, port life, shops, beaches, services and a stronger
                year-round atmosphere than many smaller coastal zones.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Official Dénia tourism describes the city as the capital of the
                Marina Alta, with approximately 50,000 inhabitants, more than 20
                kilometres of coastline and recognition as a UNESCO Creative
                City of Gastronomy. For retirees, the important point is not
                only the gastronomy, but the fact that Dénia functions as a real
                service town.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Dénia may suit buyers who want restaurants, doctors, shops,
                beaches and local life close by. The drawback is that you need
                to choose the exact location carefully: beach zones, town-centre
                apartments and residential areas can feel very different.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/70 p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Moraira — best for calm, privacy and refined villa living
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Moraira is often attractive to retirees who want a quieter,
                elegant and more residential coastal lifestyle. It can be ideal
                for buyers who want villas, terraces, sea views, restaurants,
                coves and a polished international atmosphere without the feel
                of a large town.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                The trade-off is that Moraira can be calmer outside peak season
                and many homes require a car. Larger villas also bring more
                maintenance: pool care, garden care, security, exterior repairs
                and property management if you are abroad for part of the year.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Moraira may be excellent if you want peace and privacy. It may
                be less ideal if you want strong walkability, town-centre energy
                or easy access to services without driving.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/70 p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Jávea — best for active retirees and international community
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Jávea is often a strong choice for retirees who want more
                activity, social life and variety. It has several distinct
                zones, including the Historic Centre, the Port and the Arenal
                area. Official Xàbia Tourism lists tourist offices in these main
                districts, showing how the town is structured around different
                lifestyle areas.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Jávea can offer restaurants, clubs, beaches, coves, sports and
                a visible international community. Official Xàbia Tourism also
                describes the Arenal as the town’s main tourist centre and most
                well-known beach area.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                The drawback is that Jávea is not one simple choice. A home near
                the Arenal will not feel the same as a villa near Montgó or a
                property near the Old Town. Buyers should compare exact
                neighbourhoods, not just the town name.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/70 p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Altea — best for culture, atmosphere and beauty
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Altea is often chosen by buyers who value beauty, culture,
                restaurants, views and a more artistic Mediterranean setting.
                It can appeal strongly to retirees who want charm and a slower
                rhythm rather than a larger resort feeling.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                The practical issue is mobility. Beautiful old-town areas often
                come with hills, steps, parking limitations and tourist flow.
                This can be part of the charm, but it should be checked
                carefully by older buyers before making a long-term decision.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/70 p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Benissa — best for space, privacy and countryside living
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Benissa may suit retirees who want more land, privacy and a
                quieter environment. It can offer countryside character, villas,
                views and access to nearby coastal areas without being in the
                middle of a busy tourist town.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                The drawback is practicality. Some homes are rural, isolated or
                more dependent on car access. Buyers should check road quality,
                internet, utilities, emergency access, distance to shops and how
                the property will be maintained if they travel frequently.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/70 p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Calpe — best for apartments, beach access and convenience
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Calpe can work well for retirees who prefer apartment living,
                beach access, restaurants, promenade life and a more urban
                coastal environment. It may be practical for buyers who want
                less villa maintenance and easier lock-up-and-leave ownership.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                The drawback is that some areas can be busy and seasonal.
                Apartment buyers should check lifts, community rules, planned
                works, tourist rentals, parking, noise and building maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RETIREE PROFILES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Choose by profile
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Best areas by retiree lifestyle.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {retireeProfiles.map((profile) => (
              <div key={profile.title} className="rounded-[32px] bg-white p-9 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {profile.title}
                </h3>

                <p className="mt-5 text-sm uppercase tracking-[0.22em] text-[#c8a063]">
                  {profile.recommendation}
                </p>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {profile.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Common retiree mistakes
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Mistakes older buyers should avoid.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mistakes.map((mistake) => (
              <div key={mistake.title} className="rounded-[28px] bg-[#f6f1ea] p-8">
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

      {/* CHECKLIST */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Retiree checklist
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Questions to ask before choosing an area.
            </h2>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              {checklist.map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="leading-relaxed text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENCY NOTE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Practical note
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Retiring in Spain also means thinking about administration.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-700">
            <p>
              For EU citizens, moving to Spain for more than a short stay
              involves administrative steps. The Spanish Police describes the EU
              Citizen Registration Certificate as the document certifying
              registration in the Central Register of Foreigners for EU or EEA
              citizens who will reside in Spain for more than three months.
            </p>

            <p className="mt-6">
              This article focuses on choosing the right area, not legal
              residence advice. Before relocating, retirees should also check
              healthcare access, tax residence, pensions, driving licence rules,
              insurance, inheritance planning and local registration with
              qualified professionals.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL ADVICE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Final advice
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            The best retirement area is the one that supports your future life,
            not only your holiday feeling.
          </h2>

          <p className="mt-8 max-w-5xl text-xl leading-relaxed text-white/85">
            Dénia, Moraira, Jávea, Altea, Benissa and Calpe can all be good
            choices for retirees, but for different reasons. The right decision
            depends on your lifestyle, health needs, mobility, budget, social
            preferences, property type and long-term plans.
          </p>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-white/75">
            Our advice is simple: choose the area before choosing the property.
            Once the right area is clear, the property search becomes more
            focused, realistic and safe.
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
      </section>

      {/* RELATED GUIDES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Related guides
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Continue your research.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <a
              href="/guides/where-to-buy-property-costa-blanca-north"
              className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Where to Buy Property on Costa Blanca North
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                Compare the main towns before choosing where to buy.
              </p>
            </a>

            <a
              href="/guides/honest-guide-buying-property-costa-blanca-north"
              className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Costs, Rentals and Real-Life Checks
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                Understand the details buyers often discover too late.
              </p>
            </a>

            <a
              href="/guides/moraira-vs-javea"
              className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Moraira vs Jávea
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                Compare two of the most popular areas for international buyers.
              </p>
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
            not legal, tax, financial or medical advice. Healthcare access,
            residence rules, tax treatment, property costs and local regulations
            can change. Always verify personal circumstances with qualified
            professionals before buying or relocating.
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
            This guide uses official tourism, health and public administration
            sources where possible. Buyers should always verify current
            practical, legal and healthcare information before making a purchase
            or relocation decision.
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