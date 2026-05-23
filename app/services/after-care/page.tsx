export default function AfterCarePage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900 overflow-hidden">
      <section className="relative flex min-h-[75vh] items-center overflow-hidden px-8 py-32">
        <img
          src="/images/aftercare.png"
          alt="90 Days After Care"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 mx-auto max-w-6xl text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Optional Support Package
          </p>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            90 Days After Care after buying your home in Spain.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            Practical support after completion so you can settle into daily life with less stress and more confidence.
          </p>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-5xl leading-tight">
            Enjoy your new life in Spain instead of spending months navigating bureaucracy.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Moving to Spain often involves practical arrangements that take longer than many international buyers are used to in Northern Europe. Administration, appointments, registrations, insurance, utilities and local services can feel confusing, especially when English is not always commonly spoken.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Our optional 90 Days After Care package is designed to support clients during the first months after completion, so daily practical matters are handled with more clarity, structure and peace of mind.
          </p>
        </div>
      </section>
    </main>
  );
}