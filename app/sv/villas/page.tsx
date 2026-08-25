import { villas } from "../../villas/villasData";

export const metadata = {
  title: "Villor på Costa Blanca | Nordic Move Spain",
  description:
    "Upptäck utvalda villor från vårt bredare partnernätverk på Costa Blanca North. Nordic Move Spain representerar och ger råd till köparen.",
};

export default function SwedishVillasPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <section className="px-5 pb-20 pt-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Bostadsurval
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-6xl">
            Utvalda villor från vårt bredare nätverk.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-stone-600">
            Nordic Move Spain är inte knutet till en enda mäklare eller en enda
            portfölj. Vi samarbetar med flera fastighetsprofessionella på Costa
            Blanca North och söker på den bredare marknaden för våra köpares räkning.
          </p>

          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {villas.map((villa) => (
              <article
                key={villa.id}
                className="overflow-hidden rounded-[30px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <a href={`/sv/villas/${villa.id}`} className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={villa.images[0]}
                      alt={`Villa i ${villa.location}`}
                      className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                      {villa.location}
                    </p>

                    <h2 className="mt-3 font-serif text-3xl text-[#1e2a3a]">
                      €{villa.price.toLocaleString("sv-SE")}
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-stone-600">
                      {villa.beds} sovrum · {villa.baths} badrum
                      {villa.built ? ` · ${villa.built} m² byggyta` : ""}
                      {villa.plot ? ` · ${villa.plot} m² tomt` : ""}
                    </p>

                    <span className="mt-6 inline-flex rounded-full bg-[#1e2a3a] px-6 py-3 text-sm font-medium text-white transition group-hover:bg-[#2b3a4d]">
                      Se villa &amp; bilder
                    </span>

                    <p className="mt-5 border-t border-stone-100 pt-4 text-xs leading-relaxed text-stone-400">
                      Bostaden erbjuds via en av våra samarbetande fastighetspartners.
                      Nordic Move Spain representerar och ger råd till köparen.
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