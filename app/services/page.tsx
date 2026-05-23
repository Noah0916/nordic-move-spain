export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">

      {/* HERO */}
      <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">

        <img
          src="/images/website.png"
          alt="Nordic Move Spain"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 px-8 text-center text-white">

          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Nordic Move Spain
          </p>

          <h1 className="mt-6 font-serif text-6xl leading-tight md:text-7xl">
            Services
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Personal guidance, trusted local expertise and relocation support designed for international buyers moving to Costa Blanca North.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="px-8 py-24">

        <div className="mx-auto max-w-5xl text-center">

          <h2 className="font-serif text-5xl leading-tight">
            A calm and transparent approach to buying property in Spain.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Nordic Move Spain supports expats, retirees, entrepreneurs and second-home buyers from countries including the Netherlands, Germany, Sweden, Norway and Belgium who want personal guidance before making an important investment abroad.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Our services focus on clarity, trust and local expertise — helping clients better understand regions, legal obligations, property opportunities and lifestyle possibilities throughout Costa Blanca North.
          </p>

        </div>

      </section>

      {/* SERVICES */}
      <section className="px-8 pb-28">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">

          {/* SERVICE 1 */}
          <div className="rounded-[32px] bg-white p-10 shadow-sm">

            <div className="text-sm tracking-[0.25em] text-[#b98252]">
              01
            </div>

            <h3 className="mt-5 font-serif text-3xl leading-snug">
              Property purchase & legal guidance
            </h3>

            <p className="mt-6 text-sm leading-relaxed text-stone-600">
              Buying property abroad can feel overwhelming when navigating unfamiliar legal systems, taxes and regulations. Nordic Move Spain works together with trusted independent lawyers and notaries specialized in international buyers and Spanish property transactions.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-stone-600">
              We help clients understand contracts, legal procedures, taxes, permits and additional purchase costs before making an important financial decision. Our goal is to create clarity, reduce uncertainty and provide a calm and transparent buying experience.
            </p>

          </div>

          {/* SERVICE 2 */}
          <div className="rounded-[32px] bg-white p-10 shadow-sm">

            <div className="text-sm tracking-[0.25em] text-[#b98252]">
              02
            </div>

            <h3 className="mt-5 font-serif text-3xl leading-snug">
              4-day discovery trips
            </h3>

            <p className="mt-6 text-sm leading-relaxed text-stone-600">
              Our exclusive discovery trips are designed for buyers who want to truly experience Costa Blanca North before purchasing property in Spain. Together with experienced local guidance, clients explore different towns, beaches, neighborhoods and lifestyle areas.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-stone-600">
              During the experience, clients can discover restaurants, golf areas and local hotspots while meeting trusted independent lawyers and notaries. Flights, airport pick-up, hotel accommodation and local dining experiences can be included.
            </p>

          </div>

          {/* SERVICE 3 */}
          <div className="rounded-[32px] bg-white p-10 shadow-sm">

            <div className="text-sm tracking-[0.25em] text-[#b98252]">
              03
            </div>

            <h3 className="mt-5 font-serif text-3xl leading-snug">
              Property search & relocation guidance
            </h3>

            <p className="mt-6 text-sm leading-relaxed text-stone-600">
              Every client has different priorities, goals and lifestyle preferences. Some seek peaceful luxury living near beaches and golf courses, while others prefer vibrant international communities or family-friendly environments.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-stone-600">
              We help clients navigate the Spanish property market by carefully selecting regions and homes that match their lifestyle and long-term goals. Support can also include relocation guidance, residency information, healthcare orientation and settling into life in Spain.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}