export const metadata = {
  title: "Where to Buy Property on Costa Blanca North | Best Areas",
  description:
    "Discover where to buy property on Costa Blanca North. Compare Moraira, Jávea, Altea, Benissa, Calpe and Dénia by lifestyle, property type, families, retirees and international buyers.",
};

export default function WhereToBuyCostaBlancaNorthPage() {
  const areas = [
    {
      name: "Moraira",
      href: "/regions/moraira",
      bestFor: "Calm coastal living, villas, privacy and a refined international atmosphere",
      summary:
        "Moraira is often a strong fit for buyers who want an elegant, quieter coastal lifestyle with villas, coves, restaurants and a more residential feeling than larger beach towns.",
    },
    {
      name: "Jávea",
      href: "/regions/javea",
      bestFor: "Families, active buyers, beaches, sports and year-round international life",
      summary:
        "Jávea suits buyers who want more energy, a larger international community, beaches, restaurants, sports, schools nearby and several lifestyle zones to compare.",
    },
    {
      name: "Altea",
      href: "/regions/altea",
      bestFor: "Artistic charm, sea views, culture, elegance and a slower Mediterranean rhythm",
      summary:
        "Altea is attractive for buyers who value beauty, old-town atmosphere, restaurants, culture, sea views and a refined Mediterranean setting.",
    },
    {
      name: "Benissa",
      href: "/regions/benissa",
      bestFor: "Space, privacy, countryside living, authentic Spain and hidden coves",
      summary:
        "Benissa works well for buyers who want more land, privacy, rural charm and access to coastal coves without living in a busy resort environment.",
    },
    {
      name: "Calpe",
      href: "/regions/calpe",
      bestFor: "Apartments, beachfront living, new developments, marina life and convenience",
      summary:
        "Calpe is a strong option for buyers who want beaches, sea views, restaurants, apartments, newer buildings and a more active coastal atmosphere.",
    },
    {
      name: "Dénia",
      href: "/regions/denia",
      bestFor: "Year-round town life, gastronomy, harbour, services, beaches and daily convenience",
      summary:
        "Dénia suits buyers who want a real working coastal town with restaurants, local services, beaches, port life, culture and stronger year-round activity.",
    },
  ];

  const buyerTypes = [
    {
      title: "Best for families",
      text:
        "Jávea and Dénia are often practical starting points for families because they offer more year-round services, activities and school options nearby. Moraira and Benissa can also suit families who prioritise calm, space and villa living.",
    },
    {
      title: "Best for retirees",
      text:
        "Moraira, Altea and Dénia are often attractive to retirees, but for different reasons. Moraira feels calm and refined, Altea offers beauty and culture, and Dénia provides stronger daily convenience and year-round town life.",
    },
    {
      title: "Best for apartments and new-build homes",
      text:
        "Calpe is usually one of the clearest choices for buyers looking for apartments, beachfront living, sea views and newer developments. Dénia can also offer practical apartment options close to services and beaches.",
    },
    {
      title: "Best for villas and privacy",
      text:
        "Moraira, Benissa and parts of Jávea are often stronger for buyers looking for detached villas, privacy, views and residential neighbourhoods. Benissa can offer a more rural and spacious feeling.",
    },
  ];

  const officialSources = [
    {
      label: "Teulada-Moraira Tourism",
      href: "https://www.turismoteuladamoraira.com/ttm/Web_php/index.php?contenido=showPois&id=1&idNivel=544&lang=4",
    },
    {
      label: "Xàbia/Jávea - Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/xabia-javea",
    },
    {
      label: "Altea - Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/altea",
    },
    {
      label: "Benissa Coastal Ecological Trail - Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/benissa/natural-landscapes/paseo-ecologico-litoral-de-benissa",
    },
    {
      label: "Calpe Peñón de Ifach - Tourist Info Calpe",
      href: "https://www.calpe.es/en/discover-calpe/natural-areas/pe%C3%B1on-de-ifach",
    },
    {
      label: "Dénia - Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/denia",
    },
    {
      label: "Dénia - UNESCO Creative Cities Network",
      href: "https://www.unesco.org/en/creative-cities/denia",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Where to buy property on Costa Blanca North"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca North Guide
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Where to buy property on Costa Blanca North.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              A detailed guide for international buyers comparing Moraira,
              Jávea, Altea, Benissa, Calpe and Dénia before choosing where to
              buy a home in Spain.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Request your Area Match
              </a>

              <a
                href="/regions"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Compare the regions
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
                Area first, property second
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                The most important decision is not always the property. It is
                the area around it.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Many international buyers start their search by looking at
                villas, apartments and sea views. That feels logical, but it can
                lead to the wrong decision. A beautiful home in the wrong town
                can quickly become frustrating if the lifestyle, services,
                schools, driving distances or community do not fit your daily
                life.
              </p>

              <p className="mt-6">
                Costa Blanca North is not one single lifestyle. Moraira, Jávea,
                Altea, Benissa, Calpe and Dénia each attract a different type of
                buyer. Some areas feel calm and residential. Others are more
                active, urban, social, artistic, rural or family-focused.
              </p>

              <p className="mt-6">
                This guide helps you compare the main areas before buying
                property on Costa Blanca North, so you can understand which
                location may fit your goals, budget, family situation and
                long-term plans.
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

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Best places to buy property on Costa Blanca North.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <a
                key={area.name}
                href={area.href}
                className="rounded-[32px] bg-[#f6f1ea] p-8 transition hover:-translate-y-1 hover:bg-[#efe6d9]"
              >
                <h3 className="font-serif text-4xl text-[#1e2a3a]">
                  {area.name}
                </h3>

                <p className="mt-5 text-sm uppercase tracking-[0.22em] text-[#c8a063]">
                  {area.bestFor}
                </p>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {area.summary}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AREA MATTERS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Buying property in Spain
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Why the right town matters more than the first beautiful home.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              When buyers search online, many properties look attractive:
              sea-view villas, modern apartments, renovated townhouses and
              new-build homes. But online listings rarely explain how a place
              actually feels to live in.
            </p>

            <p className="mt-6">
              The real questions are more practical. Will you need a car every
              day? Is the town active in winter? Are restaurants, doctors,
              schools and services nearby? Does the area feel international or
              more local? Is the property type common in that location? Is the
              neighbourhood suitable for year-round living, holidays, retirement,
              family life or investment?
            </p>

            <p className="mt-6">
              That is why we recommend choosing the area before narrowing the
              property search. Once the right area is clear, the property search
              becomes more focused, more realistic and much less stressful.
            </p>
          </div>
        </div>
      </section>

      {/* MORaira */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            01 · Moraira
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Moraira: calm, elegant and villa-focused.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Moraira is one of the most desirable areas for buyers who want a
                quieter, refined coastal lifestyle. It is part of
                Teulada-Moraira, where the historic inland town of Teulada and
                the coastal area of Moraira create a combination of local
                heritage and Mediterranean living.
              </p>

              <p className="mt-6">
                Official tourism information for Teulada-Moraira highlights
                around 8 kilometres of coastline, with beaches and coves that
                are known for water quality and scenic surroundings. For property
                buyers, this coastline helps explain why Moraira remains popular
                among international buyers looking for villas, privacy and a
                calm residential base.
              </p>

              <p className="mt-6">
                Moraira is usually not the best choice for buyers looking for a
                city feel, nightlife or a large apartment market. It is stronger
                for buyers who value calm, restaurants, sea-view residential
                zones, villa living and an established international community.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Moraira is often best for:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Villa buyers who want privacy and a refined atmosphere</li>
                <li>• Retirees looking for calm coastal living</li>
                <li>• Second-home buyers wanting a polished setting</li>
                <li>• Buyers who prefer low-rise areas over urban density</li>
                <li>• People who want restaurants and coves without a big-city feel</li>
              </ul>

              <a
                href="/regions/moraira"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Explore Moraira →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* JAVEA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            02 · Jávea
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Jávea: vibrant, international and full of lifestyle variety.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-white/75">
              <p>
                Jávea, also known as Xàbia, is one of the strongest lifestyle
                locations on Costa Blanca North. It offers a mix of beach life,
                restaurants, sports, family activity, coves, international
                residents and several different property zones.
              </p>

              <p className="mt-6">
                Comunitat Valenciana highlights Xàbia/Jávea’s coves including
                Sardinera, Granadella, El Tangó, El Ministro and Ambolo, with
                clear waters, cliffs and rocks that make the coastline attractive
                for diving and sea-based activities.
              </p>

              <p className="mt-6">
                Jávea also sits close to the Montgó Natural Park. Spain’s
                official tourism portal describes Montgó as a limestone massif
                located between Dénia and Jávea, rising to 753 metres. This gives
                the area a strong natural identity as well as a coastal one.
              </p>

              <p className="mt-6">
                For buyers, Jávea is often more social and active than Moraira
                or Benissa. It can be a strong fit for families, active retirees,
                remote workers and buyers who want restaurants, clubs, beaches
                and a visible international community.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h3 className="font-serif text-3xl text-white">
                Jávea is often best for:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-white/75">
                <li>• Families wanting schools and activities nearby</li>
                <li>• Buyers who want a year-round international atmosphere</li>
                <li>• People who enjoy beaches, sports and restaurants</li>
                <li>• Remote workers and entrepreneurs</li>
                <li>• Buyers comparing villas, town living and coastal areas</li>
              </ul>

              <a
                href="/regions/javea"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Explore Jávea →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ALTEA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            03 · Altea
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Altea: artistic, scenic and quietly sophisticated.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Altea has a different feeling from many other towns on Costa
                Blanca North. It is known for culture, views, restaurants,
                whitewashed streets and a more artistic Mediterranean
                atmosphere.
              </p>

              <p className="mt-6">
                Comunitat Valenciana describes Altea’s old town route leading
                towards the Plaza de la Iglesia and the Nuestra Señora del
                Consuelo Parish Church, known for its distinctive blue and white
                ceramic-tiled dome. This old-town identity is one of the main
                reasons Altea attracts buyers who value beauty, atmosphere and
                character.
              </p>

              <p className="mt-6">
                Altea can be a good choice for buyers who want something more
                refined than a beach resort, but more cultural and visually
                distinctive than a purely residential villa area.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Altea is often best for:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Buyers who value culture, design and atmosphere</li>
                <li>• People looking for sea views and old-town charm</li>
                <li>• Retirees who want beauty and restaurants nearby</li>
                <li>• Buyers who prefer elegance over resort energy</li>
                <li>• Second-home owners seeking a more artistic setting</li>
              </ul>

              <a
                href="/regions/altea"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Explore Altea →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BENISSA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            04 · Benissa
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Benissa: authentic, spacious and close to hidden coves.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-700">
              <p>
                Benissa is one of the most interesting areas for buyers who want
                more space, privacy and authenticity. It combines an inland
                historic town, rural areas, villa zones and a scenic coastline
                between Moraira and Calpe.
              </p>

              <p className="mt-6">
                The official Comunitat Valenciana tourism page describes the
                Benissa Coastal Ecological Trail as following the town’s 2.5
                miles of coastline, taking in cliffs and quiet coves along a
                marked route. The official Benissa tourism page also highlights
                the coastline, coves and natural environment.
              </p>

              <p className="mt-6">
                Benissa is not usually the first choice for buyers who want to
                walk from an apartment to a busy promenade. It is stronger for
                people who want privacy, land, views, countryside, authenticity
                and good access to neighbouring towns.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/70 p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Benissa is often best for:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Villa buyers who want space and privacy</li>
                <li>• People who prefer rural charm over resort energy</li>
                <li>• Buyers who want access to both Moraira and Calpe</li>
                <li>• Nature lovers and walkers</li>
                <li>• Families or retirees looking for a calmer base</li>
              </ul>

              <a
                href="/regions/benissa"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Explore Benissa →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CALPE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            05 · Calpe
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Calpe: beachfront living, apartments and a more active atmosphere.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Calpe is one of the most recognisable towns on Costa Blanca
                North. It is more urban, more apartment-led and more active than
                quieter areas such as Benissa or Moraira.
              </p>

              <p className="mt-6">
                Calpe’s official tourism information describes the Peñón de
                Ifach as a 50,000 m2 limestone rock rising 332 metres above the
                sea and extending about one kilometre. The Peñón is one of the
                most iconic natural landmarks on the Costa Blanca and strongly
                shapes Calpe’s identity.
              </p>

              <p className="mt-6">
                Calpe also offers beaches, coves, restaurants, a fishing port,
                marina life and a wider choice of apartments and modern
                buildings. For buyers who want sea views, beach access,
                convenience and an easier lock-up-and-leave property, Calpe can
                be a strong fit.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Calpe is often best for:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Apartment buyers and lock-up-and-leave owners</li>
                <li>• Buyers looking for new developments</li>
                <li>• People who want beaches, restaurants and convenience</li>
                <li>• Rental-minded buyers who want recognisable locations</li>
                <li>• Buyers who prefer a more active coastal environment</li>
              </ul>

              <a
                href="/regions/calpe"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Explore Calpe →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DENIA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            06 · Dénia
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Dénia: year-round town life, gastronomy and daily convenience.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-white/75">
              <p>
                Dénia is one of the most complete choices on Costa Blanca North
                for buyers who want a real town, not only a holiday setting. It
                offers beaches, port life, restaurants, services, historic
                streets, local activity and a stronger year-round rhythm.
              </p>

              <p className="mt-6">
                Comunitat Valenciana describes Dénia as a UNESCO City of
                Gastronomy, with cuisine based on fresh fish, local Valencian
                produce and dishes such as arròs a banda, gamba roja and suquet
                de peix. UNESCO also lists Dénia as part of its Creative Cities
                Network for gastronomy.
              </p>

              <p className="mt-6">
                Dénia is often a strong option for buyers who want convenience,
                restaurants, shops, healthcare access, transport links and daily
                life beyond the summer season. It may feel less exclusive than
                Moraira or Altea, but it is often more practical for full-time
                living.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h3 className="font-serif text-3xl text-white">
                Dénia is often best for:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-white/75">
                <li>• Buyers who want year-round town life</li>
                <li>• Food lovers and people who value local restaurants</li>
                <li>• Families who want services and activities nearby</li>
                <li>• Retirees who want convenience and walkability</li>
                <li>• Buyers comparing town-centre and beach-area living</li>
              </ul>

              <a
                href="/regions/denia"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Explore Dénia →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BUYER TYPES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Choose by lifestyle
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Which Costa Blanca North area fits your situation?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              The best area depends on how you plan to live. A family with
              school-age children, a retired couple, a remote worker and a
              second-home buyer may all need different locations, even with the
              same budget.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {buyerTypes.map((item) => (
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

      {/* HOW TO DECIDE */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              How to decide
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Questions to ask before choosing where to buy.
            </h2>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <div className="grid gap-5">
              {[
                "Will you live in Spain full-time, part-time or mainly use the home for holidays?",
                "Do you want a villa, apartment, townhouse, new build or rural property?",
                "Do you need schools, healthcare, daily services or public transport nearby?",
                "Do you prefer a calm residential setting or a more social, active town?",
                "Do you want to be able to walk to restaurants and shops?",
                "Is rental potential important, or is the home mainly for private use?",
                "How important are sea views, privacy, land, beach access or community life?",
                "Do you want to meet like-minded international buyers before relocating?",
              ].map((question) => (
                <div key={question} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="leading-relaxed text-stone-700">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Common buyer mistake
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Do not confuse a beautiful holiday location with the right place to
            live.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-700">
            <p>
              A town can be perfect for a summer week and still be wrong for
              year-round living. Some areas feel lively in August but quiet in
              winter. Some properties look attractive online but are too far
              from services. Some buyers fall in love with a view before
              checking ownership costs, community rules, driving distances,
              access, renovation needs or long-term resale appeal.
            </p>

            <p className="mt-6">
              This is why our approach starts with Area Match. We look at your
              lifestyle first, then compare the areas, then help you focus on
              the type of property that actually supports your future life in
              Spain.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Request your Area Match
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Still unsure where to buy on Costa Blanca North?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            We help international buyers compare Moraira, Jávea, Altea,
            Benissa, Calpe and Dénia based on lifestyle, budget, family
            situation, property goals and long-term plans.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
            Request your Area Match Assessment and discover which areas may fit
            your future life in Spain — and which areas may be less suitable.
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

      {/* OFFICIAL SOURCES */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Official sources used
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            This guide is based on official tourism and institutional sources
            where possible. Local services, property markets and regulations can
            change, so buyers should always verify practical details before
            making a purchase decision.
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