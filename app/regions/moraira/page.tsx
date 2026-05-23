export default function MorairaPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">

      {/* HERO */}
      <section className="relative flex h-[65vh] items-center justify-center overflow-hidden">

        <img
          src="https://www.pocketwanderings.com/wp-content/uploads/2023/06/Moraira-Spanish-Beach-Town.jpg"
          alt="Moraira Costa Blanca North"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-4xl px-8 text-center text-white">

          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Costa Blanca North
          </p>

          <h1 className="mt-6 font-serif text-6xl leading-tight md:text-7xl">
            Living in Moraira
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-white/90">
            Elegant coastal living, peaceful coves and a refined international lifestyle for buyers seeking privacy, quality and calm.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="px-8 py-24">

        <div className="mx-auto max-w-5xl">

          <h2 className="font-serif text-5xl leading-tight">
            Is Moraira the right place for you?
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Moraira is one of the most desirable areas on Costa Blanca North for international buyers who want a quieter, more elegant Mediterranean lifestyle. Unlike larger towns such as Calpe or Alicante, Moraira feels smaller, calmer and more residential.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            The area is especially popular with German, Dutch, Belgian, Scandinavian and British buyers looking for villas, sea views, privacy and a relaxed year-round lifestyle.
          </p>

        </div>

      </section>

      {/* LIFESTYLE BLOCKS */}
      <section className="px-8 pb-24">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">

          {[
            {
              title: "Best for",
              text: "Retirees, second-home buyers, lifestyle investors and international families who value peace, sea views and quality restaurants.",
            },

            {
              title: "Lifestyle",
              text: "Quiet, refined and coastal. Moraira is ideal for people who want Mediterranean life without the heavy crowds of larger tourist towns.",
            },

            {
              title: "Property types",
              text: "Mostly villas, hillside homes, sea-view properties and selected apartments closer to the town centre or marina.",
            },

            {
              title: "Beach or hillside",
              text: "Some homes are close to beaches and town, while many luxury villas sit on hillsides with sea views and require a car.",
            },

            {
              title: "Community",
              text: "Strong international community with many Northern European residents, especially retirees and second-home owners.",
            },

            {
              title: "Atmosphere",
              text: "Boutique, calm and elegant. Moraira feels more exclusive than busy coastal towns and less urban than Denia or Alicante.",
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
            Daily life in Moraira
          </p>

          <h2 className="mt-4 font-serif text-5xl leading-tight">
            What is daily life really like in Moraira?
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">

            <div>

              <h3 className="font-serif text-3xl">
                International lifestyle
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Moraira attracts a strong international community including German, Dutch, Belgian, Scandinavian and British residents. Many people live here permanently, while others use their property as a second home during the winter months.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Compared to the South Costa Blanca, the international community in Moraira is generally quieter, more established and more lifestyle-focused rather than purely tourism focused.
              </p>

            </div>

            <div>

              <h3 className="font-serif text-3xl">
                Healthcare & international doctors
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                The region offers good access to private clinics, multilingual doctors and international healthcare support. Many clinics and hospitals on Costa Blanca North work with English, German and Dutch-speaking staff.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Nearby areas such as Teulada, Calpe, Altea and Benidorm offer international medical centres, private hospitals, rehabilitation clinics and specialists frequently used by expats and retirees.
              </p>

            </div>

            <div>

              <h3 className="font-serif text-3xl">
                Cost of living
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Daily living costs are generally lower than in Northern Europe, especially for dining, local produce and services. However, Moraira itself is considered one of the more premium areas on Costa Blanca North, especially for luxury villas and sea-view properties.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                International supermarkets, organic shops, restaurants, gyms and boutique services are widely available throughout the region.
              </p>

            </div>

            <div>

              <h3 className="font-serif text-3xl">
                Different neighborhoods & lifestyles
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Some areas close to the town centre and marina are ideal for buyers who prefer walkability, restaurants and easier daily access without depending heavily on a car.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Hillside urbanisations and villa areas offer more privacy, larger plots and sea views, but daily life is usually more car-dependent. Areas such as El Portet and Pla del Mar are among the most desirable and premium locations in Moraira.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* AREAS OF MORAIRA */}
      <section className="px-8 py-24">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Areas of Moraira & Benissa Costa
          </p>

          <h2 className="mt-4 font-serif text-5xl leading-tight">
            Different areas offer completely different lifestyles.
          </h2>

          <div className="mt-16 space-y-10">

            {/* EL PORTET */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                El Portet
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                El Portet is one of the most exclusive and desirable areas in Moraira. The area is known for its beautiful bay, turquoise water, luxury villas and calm atmosphere. Many properties offer sea views and walking access to the beach.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                The area attracts high-end international buyers seeking privacy, lifestyle and premium real estate. Restaurants and the marina are relatively close, although some hillside villas still require a car.
              </p>

            </div>

            {/* PLA DEL MAR */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                Pla del Mar
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Pla del Mar is one of the closest villa areas to Moraira town centre and marina. This prestigious residential area offers privacy while still allowing easy walking access to restaurants, shops and beaches.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                The area is especially attractive for buyers who want luxury living without feeling isolated. Many international owners use properties here as second homes because of the convenient location and secure residential atmosphere.
              </p>

            </div>

            {/* SAN JAIME */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                San Jaime
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                San Jaime is a greener and quieter residential area located near the golf course between Moraira and Benissa Costa. The area is popular among retirees, golfers and buyers seeking tranquility and larger villas.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Daily facilities and restaurants are accessible by car within a few minutes. The atmosphere feels residential, peaceful and established.
              </p>

            </div>

            {/* BENIMEIT */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                Benimeit
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Benimeit is known for elevated sea views, modern villas and more contemporary architecture. Many luxury properties are built on hillsides offering panoramic views across the Mediterranean.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Buyers choosing Benimeit usually prioritize privacy, views and newer homes over walkability. A car is essential for daily life in this area.
              </p>

            </div>

            {/* MORAVIT */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                Moravit
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Moravit is popular among international residents who want easier daily living with supermarkets, restaurants and services relatively close by. Some areas also offer walking access to small coves and beaches.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Compared to hillside villa areas, Moravit can feel more practical and connected for year-round living.
              </p>

            </div>

            {/* BENISSA COSTA */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                Benissa Costa
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Benissa Costa is located between Moraira and Calpe and offers a quieter, greener and more nature-oriented lifestyle. The area is known for beautiful coves, villa urbanisations and more space between properties.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Many Dutch, Belgian and German buyers prefer Benissa Costa because of the calmer environment and lower density compared to busier coastal towns. Daily life is more car-dependent, but ideal for buyers prioritizing peace and privacy.
              </p>

            </div>

            {/* GATED COMMUNITIES */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                Security & gated communities
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Some residential areas and urbanisations around Moraira and Benissa Costa offer gated or more secure community environments with additional privacy, maintenance and controlled access.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                These communities are especially attractive for second-home owners and international buyers who want a safer “lock-up-and-leave” lifestyle while spending part of the year abroad.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHO SHOULD CHOOSE MORAIRA */}
      <section className="pb-28 px-8">

        <div className="mx-auto max-w-5xl">

          <h2 className="font-serif text-5xl leading-tight">
            Who should choose Moraira?
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Moraira is best suited for buyers who want calm, quality and a softer lifestyle. It is less suitable for people who want a busy city feeling, nightlife or full urban convenience.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            For many international buyers, Moraira is not just a property choice. It is a lifestyle choice: privacy, sea air, restaurants, slower mornings and a safer feeling before starting a new phase in Spain.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-stone-900 px-8 py-4 text-white"
          >
            Discuss Moraira with us
          </a>

        </div>

      </section>

    </main>
  );
}