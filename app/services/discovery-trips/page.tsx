export default function DiscoveryTripsPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900 overflow-hidden">

      {/* HERO */}
      <section className="relative flex min-h-[75vh] items-center overflow-hidden px-8 py-32">

        <img
          src="/images/discovery2.png"
          alt="Discovery trips Costa Blanca"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 mx-auto max-w-6xl text-white">

          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Discovery Trips
          </p>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Explore Costa Blanca North before making a life-changing decision.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            Experience the atmosphere, neighbourhoods, lifestyle and practical realities of living in Spain through our carefully organised small-group discovery trips.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="px-8 py-24">

        <div className="mx-auto max-w-5xl">

          <h2 className="font-serif text-5xl leading-tight">
            A calmer and more personal way to discover Spain.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Relocating to Spain is more than simply buying a property. It is an important lifestyle decision that deserves proper orientation, local insight and trusted guidance before making long-term commitments.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Nordic Move Spain organises carefully curated 3-day discovery trips designed for international buyers who want to explore Costa Blanca North in a more relaxed, structured and informative way.
          </p>

        </div>

      </section>

      {/* WHAT IS INCLUDED */}
      <section className="px-8 pb-24">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <img
            src="https://multimedia.comunitatvalenciana.com/682E658C47A64EC3B22D304139F66CBD/img/D799BA15C2B64079BB4ADACA590DBF80/Dionis_Boutique.jpg?responsive"
            alt="Mediterranean lifestyle Spain"
            className="h-[620px] w-full rounded-[36px] object-cover shadow-2xl"
          />

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              What is included
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              We take care of the practical details so you can focus on the experience.
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">

              <p>
                Our discovery trips are organised in small groups with like-minded international buyers who are also considering a new chapter in Spain.
              </p>

              <p>
                From the moment you arrive, we help make the experience as comfortable and stress-free as possible. We organise airport pick-up, transportation and guidance throughout the trip.
              </p>

              <p>
                During the 3-day experience, we introduce you to different towns, neighbourhoods and residential areas across Costa Blanca North so you can better understand the atmosphere, facilities and lifestyle of each location.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* EXPERIENCES */}
      <section className="px-8 pb-24">

        <div className="mx-auto max-w-6xl rounded-[36px] bg-white p-12 shadow-sm">

          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Local experiences
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Discover more than just property.
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2">

            <ul className="space-y-5 text-lg leading-relaxed text-stone-600">

              <li>
                • Explore different coastal towns, residential areas and local neighbourhoods.
              </li>

              <li>
                • Visit local hotspots, restaurants, cafés and cultural locations.
              </li>

              <li>
                • Experience the atmosphere and rhythm of daily life in Spain.
              </li>

              <li>
                • Learn more about healthcare, facilities, accessibility and infrastructure.
              </li>

            </ul>

            <ul className="space-y-5 text-lg leading-relaxed text-stone-600">

              <li>
                • Meet trusted local lawyers, notaries and specialists.
              </li>

              <li>
                • Receive practical information regarding legal and financial aspects of buying property in Spain.
              </li>

              <li>
                • Gain insight into taxes, mortgages, ownership costs and relocation considerations.
              </li>

              <li>
                • Ask questions in a relaxed and personal environment before making important decisions.
              </li>

            </ul>

          </div>

        </div>

      </section>

      {/* WHY */}
      <section className="px-8 pb-24">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Why discovery trips matter
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              A property may feel right online, but the environment must feel right in real life.
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">

              <p>
                Many international buyers initially focus only on the property itself, while lifestyle, surroundings and practical daily living are equally important.
              </p>

              <p>
                Our discovery trips help clients better understand the differences between locations, communities and lifestyles before committing to a purchase.
              </p>

              <p>
                This creates more clarity, more confidence and often prevents expensive mistakes later in the buying process.
              </p>

            </div>

          </div>

          <img
            src="https://orangevillas.com/media/images/properties/thumbnails/105635_xl.jpg"
            alt="Luxury lifestyle Costa Blanca"
            className="h-[620px] w-full rounded-[36px] object-cover shadow-2xl"
          />

        </div>

      </section>

      {/* FINAL */}
      <section className="px-8 pb-32">

        <div className="mx-auto max-w-5xl rounded-[36px] bg-[#efe7dc] p-14 text-center">

          <h2 className="font-serif text-5xl leading-tight">
            Discover Spain with more clarity, confidence and peace of mind.
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-stone-700">
            Our discovery trips are designed to give international buyers a more realistic, personal and informed understanding of life on Costa Blanca North before making important relocation decisions.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-stone-900 px-8 py-4 text-white"
          >
            Request discovery trip information
          </a>

        </div>

      </section>

    </main>
  );
}