export default function RegionsPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">

      {/* HERO */}
      <section className="relative flex h-[55vh] items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
          alt="Costa Blanca North"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-4xl px-8 text-center text-white">

          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Costa Blanca North
          </p>

          <h1 className="mt-6 font-serif text-6xl leading-tight md:text-7xl">
            Explore different lifestyles and regions
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-white/90">
            Every region on Costa Blanca North offers a completely different atmosphere, lifestyle and property experience.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="px-8 py-24">

        <div className="mx-auto max-w-5xl text-center">

          <h2 className="font-serif text-5xl leading-tight">
            Choosing the right region is choosing your future lifestyle.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Some buyers are searching for peace, privacy and sea views. Others prefer beach clubs, restaurants, walkability or a stronger international community. Costa Blanca North offers very different lifestyles depending on the area you choose.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Our role is not simply helping clients purchase property, but helping them better understand which region truly fits their future lifestyle, priorities and long-term plans in Spain.
          </p>

        </div>

      </section>

      {/* REGION CARDS */}
      <section className="px-8 pb-28">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

          {/* MORAIRA */}
          <a
            href="/regions/moraira"
            className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="overflow-hidden">

              <img
                src="https://www.pocketwanderings.com/wp-content/uploads/2023/06/Moraira-Spanish-Beach-Town.jpg"
                alt="Moraira"
                className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <div className="p-10">

              <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
                Calm • Elegant • Residential
              </p>

              <h3 className="mt-4 font-serif text-5xl">
                Moraira
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Moraira is one of the most refined and peaceful coastal towns on Costa Blanca North, popular among German, Dutch, Scandinavian and international buyers seeking sea views, privacy and a calmer Mediterranean lifestyle.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                The area is known for luxury villas, boutique atmosphere, beautiful coves and elegant residential urbanisations including El Portet, Pla del Mar and Benimeit.
              </p>

              <div className="mt-8 inline-flex items-center text-sm tracking-[0.2em] text-stone-900">
                EXPLORE MORAIRA →
              </div>

            </div>

          </a>

          {/* JAVEA */}
          <a
            href="/regions/javea"
            className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
                alt="Jávea"
                className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <div className="p-10">

              <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
                Vibrant • International • Lifestyle
              </p>

              <h3 className="mt-4 font-serif text-5xl">
                Jávea
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Jávea offers a more vibrant and active Mediterranean lifestyle with beaches, restaurants, sports clubs, beach clubs and strong year-round international energy.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Popular among international families, entrepreneurs, remote workers and active retirees looking for a younger and more social atmosphere compared to quieter coastal towns.
              </p>

              <div className="mt-8 inline-flex items-center text-sm tracking-[0.2em] text-stone-900">
                EXPLORE JÁVEA →
              </div>

            </div>

          </a>

          {/* ALTEA */}
          <a
            href="/regions/altea"
            className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="overflow-hidden">

              <img
                src="/images/altea.jpg"
                alt="Altea"
                className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <div className="p-10">

              <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
                Artistic • Elegant • Boutique
              </p>

              <h3 className="mt-4 font-serif text-5xl">
                Altea
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Altea offers a more refined and artistic Mediterranean lifestyle with elegant sea views, marina atmosphere, boutique restaurants and beautiful whitewashed architecture.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Especially popular among international buyers seeking sophistication, calm living, culture and premium gated communities such as Altea Hills.
              </p>

              <div className="mt-8 inline-flex items-center text-sm tracking-[0.2em] text-stone-900">
                EXPLORE ALTEA →
              </div>

            </div>

          </a>

        </div>

      </section>

    </main>
  );
}