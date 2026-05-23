export default function GermanBuyerGuidesPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900 overflow-hidden">
      <section className="relative flex min-h-[70vh] items-center overflow-hidden px-8 py-32">
        <img
          src="/images/practical-guidance.png"
          alt="German Buyer Guides"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 mx-auto max-w-6xl text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            German Buyer Guides
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Immobilien in Spanien kaufen – praktische Ratgeber für deutsche Käufer.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            Rechtliche, finanzielle und praktische Informationen für internationale Käufer an der Costa Blanca Nord.
          </p>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Ratgeber & Einblicke
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Lesen Sie unsere wichtigsten deutschen Käufer-Ratgeber.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Diese Artikel helfen Ihnen, den spanischen Immobilienmarkt besser zu verstehen und typische Risiken vor dem Kauf zu vermeiden.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <a
              href="/de/immobilienkauf-spanien"
              className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                Kaufprozess
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight">
                Haus kaufen in Spanien
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Rechtliche, finanzielle und praktische Hinweise für internationale Käufer an der Costa Blanca Nord.
              </p>

              <div className="mt-8 text-sm uppercase tracking-[0.25em]">
                Artikel lesen
              </div>
            </a>

            <a
              href="/de/fehler-immobilienkauf-spanien"
              className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                Häufige Fehler
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight">
                5 häufige Fehler beim Immobilienkauf
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Worauf Käufer beim Immobilienkauf in Spanien besonders achten sollten.
              </p>

              <div className="mt-8 text-sm uppercase tracking-[0.25em]">
                Artikel lesen
              </div>
            </a>

            <a
              href="/de/eigentuemergemeinschaft-spanien"
              className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                Eigentümergemeinschaft
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight">
                Eigentümergemeinschaften in Spanien
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Warum Gemeinschaftsregeln, Kosten und Protokolle vor dem Kauf wichtig sind.
              </p>

              <div className="mt-8 text-sm uppercase tracking-[0.25em]">
                Artikel lesen
              </div>
            </a>

            <a
              href="/de/idealista-spanien-probleme"
              className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                Immobilienportale
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight">
                Warum Immobilienportale nicht immer zuverlässig sind
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Was Käufer über Idealista, Fotocasa und den spanischen Immobilienmarkt wissen sollten.
              </p>

              <div className="mt-8 text-sm uppercase tracking-[0.25em]">
                Artikel lesen
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}