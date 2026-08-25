import { villas } from "../../villas/villasData";

export const metadata = {
  title: "Villen an der Costa Blanca | Nordic Move Spain",
  description:
    "Entdecken Sie ausgewählte Villen aus unserem erweiterten Partnernetzwerk an der Costa Blanca North. Nordic Move Spain vertritt und berät den Käufer.",
};

export default function GermanVillasPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <section className="px-5 pb-20 pt-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Immobilienauswahl
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-6xl">
            Ausgewählte Villen aus unserem erweiterten Netzwerk.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-stone-600">
            Nordic Move Spain ist weder an eine einzelne Agentur noch an ein einziges
            Portfolio gebunden. Wir arbeiten mit mehreren Immobilienprofis an der
            Costa Blanca North zusammen und durchsuchen für unsere Käufer den breiteren Markt.
          </p>

          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {villas.map((villa) => (
              <article
                key={villa.id}
                className="overflow-hidden rounded-[30px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <a href={`/de/villas/${villa.id}`} className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={villa.images[0]}
                      alt={`Villa in ${villa.location}`}
                      className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                      {villa.location}
                    </p>

                    <h2 className="mt-3 font-serif text-3xl text-[#1e2a3a]">
                      €{villa.price.toLocaleString("de-DE")}
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-stone-600">
                      {villa.beds} Schlafzimmer · {villa.baths} Badezimmer
                      {villa.built ? ` · ${villa.built} m² Wohnfläche` : ""}
                      {villa.plot ? ` · ${villa.plot} m² Grundstück` : ""}
                    </p>

                    <span className="mt-6 inline-flex rounded-full bg-[#1e2a3a] px-6 py-3 text-sm font-medium text-white transition group-hover:bg-[#2b3a4d]">
                      Villa &amp; Fotos ansehen
                    </span>

                    <p className="mt-5 border-t border-stone-100 pt-4 text-xs leading-relaxed text-stone-400">
                      Immobilie angeboten über einen unserer kooperierenden Immobilienpartner.
                      Nordic Move Spain vertritt und berät den Käufer.
                    </p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}