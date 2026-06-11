export const metadata = {
  title: "Dénia | Nordic Move Spain",
  description:
    "Discover Dénia on Costa Blanca North: harbour life, gastronomy, beaches, schools, property areas and relocation guidance for international buyers.",
};

export default function DeniaPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Dénia Costa Blanca North"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca North
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Dénia
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/90">
              A vibrant harbour town with beaches, restaurants, year-round life
              and strong connections to the Balearic Islands.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Discuss Dénia with us
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
                Harbour · Gastronomy · Year-round life
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Dénia is for buyers who want coastal living with real town
                energy.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Dénia is one of the most complete towns on Costa Blanca North.
                It offers beaches, a historic centre, a working harbour, marina
                life, restaurants, shops, services and a strong local community
                throughout the year.
              </p>

              <p className="mt-6">
                Compared with smaller towns such as Moraira or Benissa, Dénia
                feels more urban, practical and self-sufficient. It is not only
                a holiday destination — it is a real town where people live,
                work, study and build daily routines.
              </p>

              <p className="mt-6">
                For international buyers, Dénia can be a strong choice when
                convenience, gastronomy, healthcare access, schools, beach life
                and year-round activity matter more than a quiet villa-only
                environment.
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
              Around 50,000
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Dénia is larger and more active than many nearby coastal towns,
              with a strong year-round rhythm.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Known for
            </p>

            <h3 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
              Gastronomy & harbour
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Dénia is known for its food culture, red prawns, restaurants,
              fishing port, marina and ferry connections.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Coastline
            </p>

            <h3 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
              Beaches & Montgó
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              The area combines long sandy beaches, rocky coves, the Montgó
              Natural Park and access to the Cabo San Antonio marine reserve.
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT FITS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Who Dénia fits
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Dénia suits people who want the coast, but do not want to feel
            isolated.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Year-round residents
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Buyers who want shops, restaurants, healthcare, schools and
                services active beyond the summer season.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Food lovers
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                People who value restaurants, markets, local produce, seafood
                and one of the strongest gastronomic identities on the coast.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Active families
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Families who want schools, sports, beaches, nature and a
                larger-town infrastructure around them.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Practical buyers
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Buyers who prefer convenience, walkability, services and a real
                town centre over a purely quiet residential zone.
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
              How Dénia is different
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Dénia feels more like a real coastal city than a small resort
              village.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Compared with Moraira
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Moraira is smaller, quieter and more villa-focused. Dénia is
                larger, more practical and offers stronger year-round town life.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Compared with Jávea
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Jávea has a strong international lifestyle and several separate
                zones. Dénia feels more like one complete working town with a
                harbour, centre and long beach areas.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Compared with Benissa
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Benissa is quieter, more rural and more spacious. Dénia is
                busier, more connected and better suited to buyers who want
                daily convenience close by.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Compared with Calpe
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Calpe is more beach-resort and apartment-led. Dénia has a
                broader year-round identity, with gastronomy, port life,
                historic streets and stronger local infrastructure.
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
              Dénia is one of the more practical choices for families who want
              services close by.
            </h2>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-stone-600">
              Dénia offers a wider local education ecosystem than many smaller
              coastal towns, including public, private and concerted school
              options. For international families, this makes Dénia worth
              considering when daily school logistics and year-round family life
              are important.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Local schools
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  Local options include schools such as CEIP Pou de la
                  Muntanya, CEIP Les Vessanes, CEIP Cervantes, Scientia Dénia
                  and San Juan Bautista.
                </p>
              </div>

              <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Secondary & wider options
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  Families can also compare secondary education in Dénia and
                  international options in the wider Marina Alta and Costa
                  Blanca North area.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-stone-500">
              Before choosing a home, families should check commute times,
              catchment areas, language support, admissions deadlines and
              whether the town’s rhythm fits the child’s age and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* PROPERTY */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Property in Dénia
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight">
            Dénia works well when lifestyle, infrastructure and year-round
            living matter as much as the property.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-3xl">Town centre living</h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Good for buyers who want restaurants, shops, markets, services
                and daily life within walking distance.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">Beach areas</h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Dénia offers long sandy beach zones that appeal to families,
                second-home buyers and rental-minded owners.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">Montgó & hillside homes</h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Hillside areas can suit buyers who want views, privacy and
                nature while staying close to the town and coast.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="mt-12 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Ask if Dénia fits your profile
          </a>
        </div>
      </section>
    </main>
  );
}