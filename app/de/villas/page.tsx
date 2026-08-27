import { villas } from "../../villas/villasData";

function formatPrice(price: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export const metadata = {
  title: "Villen an der Costa Blanca | Nordic Move Spain",
  description:
    "Ausgewählte Villen und Fincas an der nördlichen Costa Blanca aus unserem Partnernetzwerk.",
};

export default function GermanVillasPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <nav className="border-b border-stone-200 bg-[#1e2a3a] px-5 py-5 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a href="/de" className="font-serif text-xl">
            Nordic Move Spain
          </a>

          <div className="flex items-center gap-4 text-sm">
            <a href="/de/villas" className="text-[#c8a063]">
              Villen
            </a>
            <a
              href="/de/contact"
              className="rounded-full bg-[#c8a063] px-5 py-2.5 font-medium transition hover:bg-[#b48a4f]"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
            Ausgewählte Immobilien
          </p>

          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-6xl">
                Villen und Fincas an der Costa Blanca.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone-600">
                Wir arbeiten mit mehreren Immobilienpartnern zusammen und stellen für unsere Käufer
                eine unabhängige Auswahl aus dem breiteren Markt zusammen.
              </p>
            </div>

            <a
              href="/de/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#1e2a3a] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
            >
              Suchprofil besprechen
            </a>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {villas.map((villa) => (
              <a
                key={villa.id}
                href={`/de/villas/${villa.id}`}
                className="group overflow-hidden rounded-[30px] bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden bg-stone-200">
                  <img
                    src={villa.images[0]}
                    alt={`Immobilie in ${villa.location}`}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                    {villa.location}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl text-[#1e2a3a]">
                    {formatPrice(villa.price)}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-stone-600">
                    {villa.beds} Schlafzimmer · {villa.baths} Badezimmer
                    {villa.built > 0 ? ` · ${villa.built} m²` : ""}
                  </p>
                  <p className="mt-5 text-sm font-medium text-[#1e2a3a]">
                    Immobilie ansehen →
                  </p>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-10 border-t border-stone-300/70 pt-7 text-sm leading-relaxed text-stone-500">
            Die Immobilien werden über unsere kooperierenden Immobilienpartner angeboten.
            Verfügbarkeit, Preise und Objektangaben können sich ändern. Nordic Move Spain
            begleitet und berät den Käufer.
          </p>
        </div>
      </section>
    </main>
  );
}
