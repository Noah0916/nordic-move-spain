import { notFound } from "next/navigation";
import { villas } from "../../../villas/villasData";

type VillaDetailPageProps = {
  params: Promise<{
    ref: string;
  }>;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function generateStaticParams() {
  return villas.map((villa) => ({
    ref: villa.id,
  }));
}

export async function generateMetadata({ params }: VillaDetailPageProps) {
  const { ref } = await params;
  const villa = villas.find((item) => item.id === ref);

  if (!villa) {
    return {
      title: "Villa niet gevonden | Nordic Move Spain",
    };
  }

  return {
    title: `Villa in ${villa.location} | ${formatPrice(villa.price)} | Nordic Move Spain`,
    description: `${villa.beds} slaapkamer villa in ${villa.location}. Geselecteerd via het bredere vastgoednetwerk van Nordic Move Spain.`,
  };
}

export default async function DutchVillaDetailPage({
  params,
}: VillaDetailPageProps) {
  const { ref } = await params;
  const villa = villas.find((item) => item.id === ref);

  if (!villa) {
    notFound();
  }

  const contactHref = `/nl/contact?property=${encodeURIComponent(villa.ref)}`;

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <nav className="border-b border-stone-200 bg-[#1e2a3a] px-5 py-5 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a href="/nl" className="font-serif text-xl">
            Nordic Move Spain
          </a>

          <div className="flex items-center gap-4 text-sm">
            <a href="/nl/villas" className="transition hover:text-white/70">
              Villa&apos;s
            </a>
            <a
              href="/nl/contact"
              className="rounded-full bg-[#c8a063] px-5 py-2.5 font-medium transition hover:bg-[#b48a4f]"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="px-5 pb-20 pt-10 md:px-8 md:pt-14">
        <div className="mx-auto max-w-7xl">
          <a
            href="/nl/villas"
            className="text-sm font-medium text-[#1e2a3a] transition hover:opacity-60"
          >
            ← Terug naar alle villa&apos;s
          </a>

          <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                Geselecteerde woning · Ref. {villa.ref}
              </p>

              <h1 className="mt-4 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-6xl">
                Villa in {villa.location}
              </h1>

              <p className="mt-4 text-lg text-stone-600">
                {villa.beds} slaapkamers · {villa.baths} badkamers
                {villa.built > 0 ? ` · ${villa.built} m² bebouwd` : ""}
                {villa.plot > 0 ? ` · ${villa.plot} m² perceel` : ""}
              </p>
            </div>

            <p className="font-serif text-3xl text-[#1e2a3a] md:text-4xl">
              {formatPrice(villa.price)}
            </p>
          </div>

          {/* FOTO GALERIJ */}
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-[30px] bg-stone-200 md:row-span-2">
              <img
                src={villa.images[0]}
                alt={`Villa in ${villa.location} - hoofdfoto`}
                className="h-full min-h-[420px] w-full object-cover md:min-h-[720px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {villa.images.slice(1, 5).map((image, index) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-[24px] bg-stone-200"
                >
                  <img
                    src={image}
                    alt={`Villa in ${villa.location} - foto ${index + 2}`}
                    className="h-48 w-full object-cover md:h-[350px]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {villa.images.length > 5 && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {villa.images.slice(5).map((image, index) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-[24px] bg-stone-200"
                >
                  <img
                    src={image}
                    alt={`Villa in ${villa.location} - foto ${index + 6}`}
                    className="h-72 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[34px] bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                Woninggegevens
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <div>
                  <p className="text-sm text-stone-500">Slaapkamers</p>
                  <p className="mt-1 text-2xl font-medium text-[#1e2a3a]">
                    {villa.beds}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-stone-500">Badkamers</p>
                  <p className="mt-1 text-2xl font-medium text-[#1e2a3a]">
                    {villa.baths}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-stone-500">Bebouwd</p>
                  <p className="mt-1 text-2xl font-medium text-[#1e2a3a]">
                    {villa.built > 0 ? `${villa.built} m²` : "Op aanvraag"}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-stone-500">Perceel</p>
                  <p className="mt-1 text-2xl font-medium text-[#1e2a3a]">
                    {villa.plot > 0 ? `${villa.plot} m²` : "Op aanvraag"}
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-stone-200 pt-8">
                <h2 className="font-serif text-3xl text-[#1e2a3a]">
                  Interesse in deze villa?
                </h2>

                <p className="mt-5 max-w-2xl leading-relaxed text-stone-600">
                  Nordic Move Spain vertegenwoordigt en adviseert de koper. Wij
                  kunnen de actuele beschikbaarheid controleren, een privébezichtiging
                  regelen en deze woning opnemen in uw persoonlijke shortlist.
                </p>

                <p className="mt-5 max-w-2xl leading-relaxed text-stone-600">
                  Voor aankoop kunnen wij ook onafhankelijke technische en juridische
                  controles coördineren, zodat u beter weet wat u koopt voordat u
                  definitief beslist.
                </p>
              </div>
            </div>

            <aside className="h-fit rounded-[34px] bg-[#1e2a3a] p-8 text-white shadow-sm md:p-10 lg:sticky lg:top-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                Begeleiding aan koperszijde
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight">
                Vraag een privébezichtiging aan
              </h2>

              <p className="mt-5 leading-relaxed text-white/75">
                Laat ons weten welke woning uw interesse heeft. Wij nemen persoonlijk
                contact met u op over de beschikbaarheid en de volgende stappen.
              </p>

              <a
                href={contactHref}
                className="mt-8 block rounded-full bg-[#c8a063] px-7 py-4 text-center text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Vraag ons naar deze villa
              </a>

              <a
                href="mailto:willeke@nordicmovespain.com"
                className="mt-4 block rounded-full border border-white/40 px-7 py-4 text-center text-sm transition hover:bg-white hover:text-[#1e2a3a]"
              >
                willeke@nordicmovespain.com
              </a>

              <p className="mt-8 text-xs leading-relaxed text-white/50">
                Woning aangeboden via één van onze samenwerkende vastgoedpartners.
                Nordic Move Spain vertegenwoordigt en adviseert de koper.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}