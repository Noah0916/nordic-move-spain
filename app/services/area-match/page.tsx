export default function AreaMatchPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <section className="px-8 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Area Match & Lifestyle Intelligence Report
          </p>

          <h1 className="mt-6 font-serif text-6xl leading-tight text-[#1e2a3a]">
            Find the right area before you buy the right property.
          </h1>

          <p className="mt-10 text-xl leading-relaxed text-stone-600">
            Every report is created individually and based on your personal
            situation, priorities and long-term plans. Whether you are relocating
            permanently, purchasing a second home, retiring in Spain or seeking
            investment opportunities, we provide objective local intelligence
            that helps you make informed decisions before committing to a
            specific region.
          </p>

          <p className="mt-6 text-xl leading-relaxed text-stone-600">
            Rather than spending months researching online, you receive a
            structured overview of the areas that best fit your profile,
            including lifestyle compatibility, healthcare access, international
            communities, safety, amenities, accessibility and practical
            considerations that many buyers only discover after moving.
          </p>
        </div>
      </section>

      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            What the report can include
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a]">
            From lifestyle fit to local intelligence.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Area and neighbourhood match",
              "Crime facts and safety insights",
              "Best doctors and healthcare access",
              "Hospitals and medical facilities",
              "Wellness, golf and lifestyle amenities",
              "Restaurants, beach clubs and local culture",
              "International schools and family suitability",
              "Expat density and community profile",
              "Accessibility and investment potential",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f6f1ea] p-5 text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg leading-relaxed text-stone-600">
            The report combines personal lifestyle matching with practical local
            intelligence, helping you understand not only where you could buy,
            but where you are most likely to feel at home.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            The report can be requested independently and also serves as the
            foundation for the next stages of our guidance journey, including
            your personal intake and Buyer Discovery Trip.
          </p>

          <a
            href="/relocation-assessment"
            className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#15202d]"
          >
            Request Your Area Match Report
          </a>
        </div>
      </section>
    </main>
  );
}
