export const metadata = {
  title: "Calpe | Nordic Move Spain",
  description:
    "Discover Calpe on Costa Blanca North: beachfront living, apartments, new developments, schools, lifestyle and property guidance for international buyers.",
};

export default function CalpePage() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Calpe Costa Blanca North"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca North
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Calpe
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/90">
              Beachfront living, modern apartments, marina life and iconic views of the Peñón de Ifach.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Discuss Calpe with us
              </a>

              <a
                href="/regions"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Back to regions
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
                Beachfront · Active · Modern
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Calpe is for buyers who want convenience, sea views and a more active coastal lifestyle.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Calpe is one of the most recognisable towns on Costa Blanca North, known for the Peñón de Ifach, long beaches, marina life, restaurants and a more urban Mediterranean atmosphere.
              </p>

              <p className="mt-6">
                Compared with Moraira, Benissa or Altea, Calpe feels more energetic and practical. It has more apartment living, more high-rise buildings, more beachfront options and a wider choice of modern developments.
              </p>

              <p className="mt-6">
                This makes Calpe attractive for buyers who want easy access to the beach, restaurants, shops, services and rental-friendly areas, without depending too much on a car for daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Population
            </p>

            <h3 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
              Around 27,600
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Calpe is larger and busier than several nearby towns, with a more international and urban coastal feel.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Known for
            </p>

            <h3 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
              Peñón de Ifach
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              The iconic rock rises above the town and gives Calpe one of the most recognisable skylines on the Costa Blanca.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Property style
            </p>

            <h3 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
              Apartments & new builds
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Calpe offers more apartments, modern buildings and beachfront property options than many quieter neighbouring towns.
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT FITS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Who Calpe fits
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Calpe suits people who want an easy, social and beach-focused lifestyle.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Active buyers
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                People who want restaurants, beaches, walking routes, sports, marina life and daily activity close by.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Younger families
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Families who want practical services, schools, beach access and a more lively environment than smaller villages.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Apartment buyers
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Buyers looking for modern apartments, lock-up-and-leave homes, sea views or newer developments near the coast.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Rental-minded owners
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Owners who care about visibility, beach proximity, tourist demand and a location that is easy for guests to understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              How Calpe is different
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Calpe is more urban, more visible and more apartment-led than many neighbouring areas.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Compared with Moraira
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Moraira feels calmer, smaller and more villa-oriented. Calpe is busier, more urban and offers more apartments, high-rise buildings and beachfront activity.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Compared with Jávea
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Jávea has several distinct lifestyle zones and a strong international community. Calpe feels more compact around the beach, promenade, town centre and Peñón.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Compared with Benissa
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Benissa is quieter, more rural and more spacious. Calpe is more convenient, more developed and better suited to buyers who want life close to the beach and services.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Compared with Altea
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Altea feels more artistic and refined. Calpe feels more practical, beach-focused and energetic, with a broader mix of tourists, residents and apartment owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOLS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Schools & family life
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              A practical town for families who want schools, services and coastal life close together.
            </h2>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-stone-600">
              Calpe has several local Spanish education options, including infant, primary and secondary schools. For international families, nearby towns on Costa Blanca North also offer private and international school choices within driving distance.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Local schools
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  Local options include CEIP Azorín, CEIP Gabriel Miró, CEIP Mediterrani, CEIP Oltà, IES Ifach and IES Les Salines.
                </p>
              </div>

              <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  International options
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  Families often compare international schools around Benitachell, Jávea, Moraira, Altea and the wider Costa Blanca North area.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-stone-500">
              Before choosing a property, families should check school routes, admissions timing, language support and whether daily life in Calpe matches the child’s rhythm.
            </p>
          </div>
        </div>
      </section>

      {/* PROPERTY */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Property in Calpe
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight">
            Calpe is a strong option when beach access, apartments and convenience matter most.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-3xl">
                Beachfront apartments
              </h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Suitable for buyers who want sea views, promenade access, easy maintenance and strong holiday appeal.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                New developments
              </h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Calpe often attracts buyers who prefer modern layouts, lifts, terraces, pools, parking and low-maintenance living.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Villas & hillside homes
              </h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Outside the busiest beach zones, buyers can also find villas and hillside homes with views towards the sea and Peñón.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="mt-12 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Ask if Calpe fits your profile
          </a>
        </div>
      </section>
    </main>
  );
}