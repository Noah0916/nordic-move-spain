export const metadata = {
  title: "Living in Benissa | Buy Property in Benissa Costa Blanca North",
  description:
    "Discover whether Benissa is the right area to buy property on Costa Blanca North. A guide for Dutch, German, Swiss and international buyers comparing lifestyle, villas, countryside, coastal coves, restaurants, activities, retirees and long-term suitability.",
};

export default function BenissaPage() {
  const lifestylePoints = [
    "Authentic Spanish town with historic charm and local rhythm",
    "Strong choice for buyers who want space, privacy and nature",
    "Coastal coves, cliffs and ecological walking routes",
    "Good base between Moraira, Calpe, Jávea and the inland valleys",
    "Attractive for villa buyers who prefer a quieter residential setting",
    "Best suited to buyers who value understated quality over resort energy",
  ];

  const buyerProfiles = [
    {
      title: "Privacy seekers",
      text:
        "Benissa can suit buyers who want detached homes, space around them, open views and a quieter residential environment without being disconnected from the coast.",
    },
    {
      title: "Retirees who value calm",
      text:
        "For retirees, Benissa can offer a slower lifestyle, authentic surroundings and access to nearby coastal towns, while avoiding the density of larger resorts.",
    },
    {
      title: "Villa and countryside buyers",
      text:
        "The area is attractive for buyers looking for villas, rustic properties, hillside homes and residential zones with more land or privacy than many coastal towns offer.",
    },
    {
      title: "Discerning international buyers",
      text:
        "Dutch, German, Swiss, Belgian, British and Scandinavian buyers may choose Benissa when they want Costa Blanca North access with more authenticity and space.",
    },
  ];

  const zones = [
    {
      title: "Benissa Pueblo",
      text:
        "The historic inland town offers local life, traditional streets, services and a more authentic Spanish rhythm. It suits buyers who want community, heritage and year-round daily life.",
    },
    {
      title: "Benissa Costa",
      text:
        "The coastal side of Benissa is where many international buyers look for villas, sea views, coves and access towards Moraira and Calpe.",
    },
    {
      title: "La Fustera",
      text:
        "One of the best-known coastal areas, close to the beach, restaurants and the ecological walk. It can suit buyers who want coastal access without a large resort feeling.",
    },
    {
      title: "Les Bassetes",
      text:
        "A small marina and coastal area between Benissa and Calpe, attractive for sea views, water sports, dining and a more polished coastal lifestyle.",
    },
    {
      title: "Cala Baladrar and Cala Advocat",
      text:
        "Quiet coastal zones with coves, beach bars and residential properties nearby. These areas can suit buyers who want a relaxed sea-side routine.",
    },
    {
      title: "Montemar and Buenavista",
      text:
        "Residential villa areas often considered by international buyers looking for space, privacy and access towards both Moraira and Calpe.",
    },
  ];

  const propertyTypes = [
    {
      title: "Detached villas",
      text:
        "The most common choice for international buyers in Benissa Costa. Villas can offer privacy, pools, gardens and views, but also require maintenance and local support.",
    },
    {
      title: "Sea-view homes",
      text:
        "Highly attractive, especially around coastal and hillside areas. Buyers should check orientation, access roads, stairs, wind exposure and winter sunlight.",
    },
    {
      title: "Country houses and fincas",
      text:
        "Useful for buyers who want land, privacy and a more rural Mediterranean atmosphere. Legal checks, utilities, access and maintenance are especially important.",
    },
    {
      title: "Townhouses and village homes",
      text:
        "A different lifestyle option for buyers who prefer authenticity, walkability and local Spanish life over a villa-focused coastal setting.",
    },
  ];

  const restaurants = [
    {
      title: "Coral Beach Les Bassetes",
      label: "Marina dining",
      text:
        "Located at the Les Bassetes marina, Coral Beach Les Bassetes is a strong example of Benissa’s more polished coastal dining, with seafood, rice dishes and a Mediterranean marina setting.",
      bestFor:
        "Best for marina atmosphere, seafood, rice dishes and a refined coastal lunch or dinner.",
    },
    {
      title: "Oceana Club",
      label: "Sea-view dining",
      text:
        "Oceana Club is known for a panoramic Mediterranean setting close to the water. It can appeal to buyers who value relaxed coastal dining, cocktails and views.",
      bestFor:
        "Best for sea views, relaxed dining, cocktails and a more social coastal atmosphere.",
    },
    {
      title: "Casa Bernardi",
      label: "Fine dining",
      text:
        "Casa Bernardi brings a more refined gastronomic option to Benissa, surrounded by Mediterranean landscape. It shows that Benissa is not only rural and quiet, but also part of the wider Marina Alta food scene.",
      bestFor:
        "Best for special occasions, fine dining and buyers who appreciate high-quality gastronomy.",
    },
    {
      title: "Xiringuito Olalà",
      label: "Beach-bar atmosphere",
      text:
        "A more casual beach-bar style option near the coast, useful for buyers who enjoy relaxed lunches, drinks and a simple sea-side rhythm during warmer months.",
      bestFor:
        "Best for casual coastal days, drinks, tapas and summer atmosphere.",
    },
  ];

  const activities = [
    {
      title: "Benissa Ecological Walk",
      text:
        "The ecological walk follows sections of Benissa’s coastline, connecting coves, cliffs and viewpoints. It is one of the strongest lifestyle features for buyers who enjoy walking by the sea.",
    },
    {
      title: "La Fustera Beach",
      text:
        "La Fustera is one of the most accessible beaches in Benissa, with turquoise water, a relaxed atmosphere and access to the coastal path.",
    },
    {
      title: "Cala Baladrar",
      text:
        "A quiet cove with crystal-clear water and a more natural feeling. It suits buyers who prefer small coves over long urban beaches.",
    },
    {
      title: "Les Bassetes marina",
      text:
        "Les Bassetes is useful for buyers who enjoy water sports, marina life, sea views and coastal dining without the intensity of a larger port town.",
    },
    {
      title: "Historic old town",
      text:
        "Benissa’s old town has one of the better-preserved historic centres in the area, with traditional streets, heritage buildings and a more local Spanish atmosphere.",
    },
    {
      title: "Sierra de Bèrnia",
      text:
        "The Bèrnia mountain area adds a dramatic inland landscape, walking routes and open views. It is part of what makes Benissa feel more varied than a simple beach destination.",
    },
  ];
    const confidenceChecks = [
    {
      title: "Coast or countryside",
      text:
        "Benissa changes strongly depending on location. A coastal villa, a countryside finca and a village home offer very different daily lives.",
    },
    {
      title: "Car dependency",
      text:
        "Most Benissa buyers need a car. This is especially important for retirees or part-time residents who want easy access to shops, restaurants and healthcare.",
    },
    {
      title: "Access roads",
      text:
        "Some villas and rural homes have narrow roads, slopes or longer access routes. These should be checked carefully before buying.",
    },
    {
      title: "Maintenance",
      text:
        "Larger villas, pools, gardens, terraces and rural properties need regular maintenance. Part-time owners should plan reliable local support.",
    },
    {
      title: "Legal checks",
      text:
        "For villas, fincas and renovated homes, buyers should verify building legality, extensions, licences, utilities and registered property details.",
    },
    {
      title: "Lifestyle fit",
      text:
        "Benissa is quieter than Jávea, Calpe or Dénia. For some buyers this is ideal. Others may prefer more restaurants, shops and activity within walking distance.",
    },
  ];

  const relatedGuides = [
    {
      href: "/guides/best-areas-costa-blanca-north-retirees",
      title: "Best Areas on Costa Blanca North for Retirees",
      text:
        "Compare Benissa with Moraira, Jávea, Dénia, Altea and Calpe from a retiree perspective.",
    },
    {
      href: "/guides/where-to-buy-property-costa-blanca-north",
      title: "Where to Buy Property on Costa Blanca North",
      text:
        "Compare the main Costa Blanca North towns before choosing where to buy.",
    },
    {
      href: "/regions/moraira",
      title: "Moraira Area Guide",
      text:
        "Compare Benissa’s space and authenticity with Moraira’s polished coastal villa lifestyle.",
    },
  ];

  const officialSources = [
    {
      label: "Benissa Tourism",
      href: "https://www.benissa.es/en/",
    },
    {
      label: "Benissa Ecological Walk",
      href: "https://www.benissa.es/en/benissanatursport/paseo-ecologico/",
    },
    {
      label: "Benissa coves and beaches",
      href: "https://www.benissa.es/en/calas-y-playas/",
    },
    {
      label: "La Fustera Beach",
      href: "https://www.benissa.es/en/playas/playa-la-fustera/",
    },
    {
      label: "Cala Baladrar",
      href: "https://www.benissa.es/en/playas/cala-baladrar/",
    },
    {
      label: "Benissa historic centre",
      href: "https://www.benissa.es/en/que-hacer/escapate-al-medievo/",
    },
    {
      label: "Benissa on Spain.info",
      href: "https://www.spain.info/en/destination/benissa/",
    },
    {
      label: "Coral Beach Les Bassetes",
      href: "https://www.restbassetes.com/",
    },
    {
      label: "Oceana Club",
      href: "https://www.oceanacostablanca.com/",
    },
    {
      label: "Casa Bernardi",
      href: "https://casabernardi.es/en/",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVBAR */}
      <nav className="absolute left-0 top-0 z-50 w-full px-8 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/"
            className="text-sm font-medium uppercase tracking-[0.28em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
          >
            Nordic Move Spain
          </a>

          <div className="hidden gap-8 text-sm md:flex">
            <a
              href="/"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Home
            </a>

            <a
              href="/regions"
              className="border-b border-[#c8a063] pb-1 text-white drop-shadow"
            >
              Regions
            </a>

            <a
              href="/services"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Services
            </a>

            <a
              href="/guides"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Guides
            </a>

            <a
              href="/about-us"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              About
            </a>

            <a
              href="/contact"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-32">
        <img
          src="/images/benissa.jpg"
          alt="Benissa Costa Blanca North property area guide"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca North Area Guide
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-7xl">
              Living in Benissa.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Authentic Spanish charm, countryside living, hidden coastal coves
              and spacious villa areas between Moraira and Calpe.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Request your Area Match
              </a>

              <a
                href="/regions/moraira"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Compare with Moraira
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Is Benissa right for you?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Benissa is for buyers who want space, privacy and a more local
              Spanish rhythm.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Benissa is one of the most interesting areas on Costa Blanca North
              for buyers who do not want to choose between countryside and
              coast. The municipality stretches from a historic inland town
              towards a beautiful coastline with coves, cliffs and Mediterranean
              walking routes.
            </p>

            <p className="mt-6">
              Compared with more famous coastal towns, Benissa feels quieter,
              more residential and more authentic. It is less about beach
              boulevards and nightlife, and more about villas, privacy, nature,
              old-town charm and practical access to nearby Moraira, Calpe and
              Jávea.
            </p>

            <p className="mt-6">
              For the right buyer, Benissa can offer excellent long-term value:
              more space, a calmer atmosphere and a lifestyle that feels
              connected to real local life instead of only tourism.
            </p>
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
            Benissa is best for buyers who want authenticity, privacy, coastal
            coves and countryside character.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Benissa is usually not the most obvious choice for first-time
            buyers, because it is more spread out than Moraira, Calpe or Dénia.
            But for buyers who want space, calm, nature and understated quality,
            that is exactly its strength.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {lifestylePoints.map((item) => (
              <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                <p className="leading-relaxed text-stone-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTAURANTS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Restaurants and sea-view dining
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Benissa’s food scene is quieter than Moraira’s, but it has real
              quality.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Benissa is not a large restaurant town in the same way as Dénia or
              Jávea. Its appeal is more discreet: marina dining at Les Bassetes,
              beach-bar lunches near the coves, countryside restaurants and
              special-occasion gastronomy.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-stone-500">
              Restaurant names, opening times and ownership can change. Always
              check current opening hours, reservations and seasonal schedules
              before planning a visit.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.title}
                className="rounded-[32px] bg-white p-9 shadow-sm"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  {restaurant.label}
                </p>

                <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
                  {restaurant.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {restaurant.text}
                </p>

                <div className="mt-6 rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {restaurant.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* ACTIVITIES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Activities and daily life
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Benissa suits buyers who enjoy nature, coves, heritage and a slower
            Mediterranean rhythm.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Benissa is not built around one promenade or one beach. Its lifestyle
            is spread across the old town, countryside, villa areas, coastal
            coves and nearby towns. That makes it more varied, but also more car
            dependent.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="rounded-[30px] bg-white/80 p-8"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {activity.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {activity.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYER PROFILES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Buyer profile
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Who Benissa suits best.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {buyerProfiles.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] bg-white p-9 shadow-sm"
              >
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

      {/* ZONES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Neighbourhoods and zones
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Choosing the right part of Benissa is essential.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Benissa is not one single lifestyle. A home in Benissa Pueblo, a
            villa near La Fustera, a property around Les Bassetes or a rural
            finca inland can all create a completely different daily experience.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {zones.map((zone) => (
              <div key={zone.title} className="rounded-[30px] bg-white/80 p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {zone.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {zone.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Property types
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Benissa is strongest for villas, fincas, privacy and mixed
              coast-countryside living.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Buyers choosing Benissa often want more space and a calmer rhythm.
              The key is to understand whether coastal Benissa, inland Benissa
              or village life fits your daily needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {propertyTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] bg-white p-8 shadow-sm"
              >
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

      {/* RETIREE SUITABILITY */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Retiree suitability
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Benissa can suit retirees who want calm, space and authenticity —
            but the exact location matters.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-white/80">
            <p>
              For retirees, Benissa can be attractive because it offers a calmer
              lifestyle, more privacy and access to both coast and countryside.
              It can feel less busy and less tourist-driven than larger towns.
            </p>

            <p className="mt-6">
              The practical question is daily convenience. Some homes require a
              car for almost everything. Some rural or hillside properties may be
              beautiful but less practical in later years. Buyers should think
              carefully about driving, healthcare access, stairs, garden
              maintenance and proximity to services.
            </p>

            <p className="mt-6">
              For the right buyer, Benissa can offer a very satisfying long-term
              base. But it is not a one-size-fits-all retiree area. Coastal
              access, road quality and daily routine should be checked before
              choosing a property.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/guides/best-areas-costa-blanca-north-retirees"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Read retiree area guide
            </a>

            <a
              href="/services/area-match"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Request your Area Match
            </a>
          </div>
        </div>
      </section>

      {/* CONFIDENCE CHECKS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Confidence checks
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              What to understand before buying in Benissa.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              These checks are not reasons to avoid Benissa. They are part of a
              well-prepared buying decision.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {confidenceChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] bg-white p-9 shadow-sm"
              >
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

      {/* COMPARISON */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <a
            href="/regions/moraira"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Compare nearby
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Benissa or Moraira?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Moraira usually feels more polished and coastal, while Benissa can
              offer more space, countryside character and privacy.
            </p>
          </a>

          <a
            href="/regions/calpe"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Compare convenience
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Benissa or Calpe?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Calpe offers more beach activity, apartments and services. Benissa
              feels quieter, more residential and more spread out.
            </p>
          </a>

          <a
            href="/regions/javea"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Compare lifestyle
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Benissa or Jávea?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Jávea is larger and more social. Benissa is calmer and better for
              buyers who prefer privacy, nature and understatement.
            </p>
          </a>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Related guides
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Continue your Benissa research.
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

      {/* FINAL CTA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Not sure if Benissa fits you?
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Compare Benissa with your lifestyle before choosing a property.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Our Area Match Assessment helps you understand whether Benissa,
            Moraira, Jávea, Dénia, Altea or Calpe best fits your priorities,
            budget, lifestyle and long-term plans.
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

      {/* OFFICIAL SOURCES */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Official sources
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            This area guide uses official tourism and restaurant sources where
            possible. Buyers should always verify property, legal, restaurant
            and practical details before making decisions.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
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