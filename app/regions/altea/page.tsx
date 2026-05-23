export default function AlteaPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">

      {/* HERO */}
      <section className="relative flex h-[65vh] items-center justify-center overflow-hidden">

        <img
          src="/images/altea.jpg"
          alt="Altea Costa Blanca North"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-4xl px-8 text-center text-white">

          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Costa Blanca North
          </p>

          <h1 className="mt-6 font-serif text-6xl leading-tight md:text-7xl">
            Living in Altea
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-white/90">
            Artistic Mediterranean living with boutique atmosphere, sea views and a more refined and cultural lifestyle.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="px-8 py-24">

        <div className="mx-auto max-w-5xl">

          <h2 className="font-serif text-5xl leading-tight">
            Is Altea the right place for you?
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Altea is one of the most visually beautiful and charming towns on Costa Blanca North. Known for its whitewashed old town, artistic atmosphere and elegant coastline, Altea attracts buyers seeking authenticity, culture and Mediterranean lifestyle rather than mass tourism.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Compared to Jávea, Altea feels calmer, more boutique and more sophisticated. Compared to Moraira, it offers a slightly more cultural and creative atmosphere with galleries, restaurants, cafés and marina lifestyle.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            The area attracts international retirees, second-home owners, artists, entrepreneurs and lifestyle-focused buyers who value aesthetics, sea views and a slower Mediterranean rhythm.
          </p>

        </div>

      </section>

      {/* LIFESTYLE BLOCKS */}
      <section className="px-8 pb-24">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">

          {[
            {
              title: "Best for",
              text: "Lifestyle buyers, retirees, creatives, entrepreneurs and international buyers seeking beauty, culture and relaxed Mediterranean living.",
            },

            {
              title: "Lifestyle",
              text: "Boutique, artistic and elegant with cafés, galleries, marina life and beautiful sea-view restaurants.",
            },

            {
              title: "Property types",
              text: "Luxury villas, hillside sea-view homes, modern apartments, penthouses and exclusive gated communities.",
            },

            {
              title: "Beach or hillside",
              text: "Some buyers prefer walking access to the promenade and marina while others prioritize elevated sea-view villas in the hills.",
            },

            {
              title: "Community",
              text: "Strong international community with Dutch, German, Belgian, Scandinavian and Spanish residents.",
            },

            {
              title: "Atmosphere",
              text: "Elegant, calm and more sophisticated than many larger coastal towns on Costa Blanca.",
            },

          ].map((item) => (

            <div
              key={item.title}
              className="rounded-[28px] bg-white p-10 shadow-sm"
            >

              <h3 className="font-serif text-3xl">
                {item.title}
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-stone-600">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* DAILY LIFE */}
      <section className="bg-white px-8 py-24">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Daily life in Altea
          </p>

          <h2 className="mt-4 font-serif text-5xl leading-tight">
            What is daily life really like in Altea?
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">

            <div>

              <h3 className="font-serif text-3xl">
                International lifestyle
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Altea attracts a well-established international community including German, Dutch, Belgian, Scandinavian and Spanish residents. The atmosphere feels calmer and more refined compared to busier tourist destinations.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Many residents choose Altea because of its aesthetics, culture, architecture and slower Mediterranean rhythm.
              </p>

            </div>

            <div>

              <h3 className="font-serif text-3xl">
                Restaurants & marina lifestyle
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Altea offers stylish restaurants, boutique cafés, rooftop terraces and elegant marina areas. Compared to Moraira, the restaurant scene feels slightly more artistic and sophisticated.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                The promenade and marina area are especially popular among buyers seeking lifestyle, dining and walkability.
              </p>

            </div>

            <div>

              <h3 className="font-serif text-3xl">
                Healthcare & practical living
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                The region offers excellent practical living with nearby international clinics, supermarkets, gyms and multilingual healthcare providers.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Altea is attractive for both permanent residents and second-home owners seeking comfort combined with Mediterranean charm.
              </p>

            </div>

            <div>

              <h3 className="font-serif text-3xl">
                Cost of living
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Daily living costs remain lower than most Northern European countries, although premium sea-view properties and luxury areas can be expensive.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Buyers generally choose Altea more for quality of life and atmosphere rather than lower pricing.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* AREAS OF ALTEA */}
      <section className="px-8 py-24">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Areas of Altea
          </p>

          <h2 className="mt-4 font-serif text-5xl leading-tight">
            Different neighborhoods create very different lifestyles.
          </h2>

          <div className="mt-16 space-y-10">

            {/* OLD TOWN */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                Altea Old Town
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                The historic old town is the artistic heart of Altea with whitewashed streets, galleries, boutique cafés and Mediterranean architecture. Buyers choosing this area usually prioritize atmosphere, beauty and authentic Spanish charm.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Walking streets, restaurants and sea views make this one of the most iconic areas on Costa Blanca North.
              </p>

            </div>

            {/* ALTEA HILLS */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                Altea Hills
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Altea Hills is one of the most prestigious gated communities on Costa Blanca North. The area offers luxury villas, security, panoramic sea views and strong privacy.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Especially popular among international second-home owners seeking secure “lock-up-and-leave” living with premium Mediterranean lifestyle.
              </p>

            </div>

            {/* MASCARAT */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                Mascarat & marina area
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                The Mascarat area combines modern apartments, marina lifestyle and sea-view living close to restaurants and yacht facilities.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Ideal for buyers seeking luxury apartments, walkability and elegant coastal atmosphere.
              </p>

            </div>

            {/* SIERRA */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                Sierra de Altea
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Sierra de Altea offers elevated luxury villas with panoramic Mediterranean views, larger plots and quieter residential atmosphere.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Buyers here prioritize privacy, views and premium architecture over walkability.
              </p>

            </div>

            {/* PROMENADE */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                Promenade & beachfront living
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Beachfront apartments and promenade living are ideal for buyers who enjoy restaurants, cafés and Mediterranean atmosphere directly outside their home.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                These areas are popular among retirees and second-home owners wanting easier daily living without depending heavily on a car.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHO SHOULD CHOOSE ALTEA */}
      <section className="pb-28 px-8">

        <div className="mx-auto max-w-5xl">

          <h2 className="font-serif text-5xl leading-tight">
            Who should choose Altea?
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Altea is ideal for buyers seeking beauty, elegance and a calmer Mediterranean lifestyle with culture, architecture and sophisticated coastal atmosphere.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Compared to Jávea, Altea feels more refined and artistic. Compared to Moraira, it offers slightly more culture, marina lifestyle and architectural charm. It is especially attractive for retirees, second-home buyers and international lifestyle-focused residents.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-stone-900 px-8 py-4 text-white"
          >
            Discuss Altea with us
          </a>

        </div>

      </section>

    </main>
  );
}