export default function DutchBuyerGuidesPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900 overflow-hidden">

      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden px-8 py-32">
        <img
          src="/images/practical-guidance.png"
          alt="Nederlandse Buyer Guides"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 mx-auto max-w-6xl text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Nederlandse Buyer Guides
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Huis kopen in Spanje – praktische gidsen voor Nederlandse kopers.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            Juridische, financiële en praktische informatie voor kopers aan de Costa Blanca Noord.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Gidsen & inzichten
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Lees onze belangrijkste Nederlandse aankoopgidsen.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Deze artikelen helpen u de Spaanse vastgoedmarkt beter te begrijpen en veelgemaakte fouten vóór aankoop te vermijden.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {/* HUIS KOPEN */}
            <a
              href="/nl/huis-kopen-spanje"
              className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                Aankoopproces
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight">
                Huis kopen in Spanje
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Juridische, financiële en praktische aandachtspunten voor internationale kopers.
              </p>

              <div className="mt-8 text-sm uppercase tracking-[0.25em]">
                Artikel lezen
              </div>
            </a>

            {/* FOUTEN */}
            <a
              href="/nl/fouten-huis-kopen-spanje"
              className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                Veelgemaakte fouten
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight">
                5 fouten bij vastgoed kopen in Spanje
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Waar kopers aan de Costa Blanca Noord extra op moeten letten.
              </p>

              <div className="mt-8 text-sm uppercase tracking-[0.25em]">
                Artikel lezen
              </div>
            </a>

            {/* VVE */}
            <a
              href="/nl/vereniging-van-eigenaren-spanje"
              className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                Vereniging van Eigenaren
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight">
                VvE in Spanje
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Waarom regels, kosten en notulen belangrijk zijn vóór aankoop.
              </p>

              <div className="mt-8 text-sm uppercase tracking-[0.25em]">
                Artikel lezen
              </div>
            </a>

            {/* NIE NUMMER */}
            <a
              href="/nl/nie-nummer-spanje"
              className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                Praktische voorbereiding
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight">
                NIE-nummer Spanje
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Waarom een NIE-nummer essentieel is vóór aankoop van vastgoed in Spanje.
              </p>

              <div className="mt-8 text-sm uppercase tracking-[0.25em]">
                Artikel lezen
              </div>
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}