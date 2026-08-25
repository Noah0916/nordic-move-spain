import { notFound } from "next/navigation";
import { villas } from "../villasData";

type VillaDetailPageProps = {
  params: Promise<{
    ref: string;
  }>;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-GB", {
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
      title: "Villa not found | Nordic Move Spain",
    };
  }

  return {
    title: `${villa.location} villa | ${formatPrice(villa.price)} | Nordic Move Spain`,
    description: `${villa.beds} bedroom villa in ${villa.location}. Selected through the Nordic Move Spain property network.`,
  };
}

export default async function VillaDetailPage({
  params,
}: VillaDetailPageProps) {
  const { ref } = await params;
  const villa = villas.find((item) => item.id === ref);

  if (!villa) {
    notFound();
  }

  const contactHref = `/contact?property=${encodeURIComponent(villa.ref)}`;

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <nav className="border-b border-stone-200 bg-[#1e2a3a] px-5 py-5 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a href="/" className="font-serif text-xl">
            Nordic Move Spain
          </a>

          <div className="flex items-center gap-4 text-sm">
            <a href="/villas" className="transition hover:text-white/70">
              Villas
            </a>
            <a
              href="/contact"
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
            href="/villas"
            className="text-sm font-medium text-[#1e2a3a] transition hover:opacity-60"
          >
            ← Back to all villas
          </a>

          <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                Selected property · Ref. {villa.ref}
              </p>

              <h1 className="mt-4 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-6xl">
                Villa in {villa.location}
              </h1>

              <p className="mt-4 text-lg text-stone-600">
                {villa.beds} bedrooms · {villa.baths} bathrooms
                {villa.built > 0 ? ` · ${villa.built} m² built` : ""}
                {villa.plot > 0 ? ` · ${villa.plot} m² plot` : ""}
              </p>
            </div>

            <p className="font-serif text-3xl text-[#1e2a3a] md:text-4xl">
              {formatPrice(villa.price)}
            </p>
          </div>

          {/* PHOTO GALLERY */}
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-[30px] bg-stone-200 md:row-span-2">
              <img
                src={villa.images[0]}
                alt={`Villa in ${villa.location} - main image`}
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
                    alt={`Villa in ${villa.location} - image ${index + 2}`}
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
                    alt={`Villa in ${villa.location} - image ${index + 6}`}
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
                Property details
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <div>
                  <p className="text-sm text-stone-500">Bedrooms</p>
                  <p className="mt-1 text-2xl font-medium text-[#1e2a3a]">
                    {villa.beds}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-stone-500">Bathrooms</p>
                  <p className="mt-1 text-2xl font-medium text-[#1e2a3a]">
                    {villa.baths}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-stone-500">Built</p>
                  <p className="mt-1 text-2xl font-medium text-[#1e2a3a]">
                    {villa.built > 0 ? `${villa.built} m²` : "On request"}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-stone-500">Plot</p>
                  <p className="mt-1 text-2xl font-medium text-[#1e2a3a]">
                    {villa.plot > 0 ? `${villa.plot} m²` : "On request"}
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-stone-200 pt-8">
                <h2 className="font-serif text-3xl text-[#1e2a3a]">
                  Interested in this villa?
                </h2>

                <p className="mt-5 max-w-2xl leading-relaxed text-stone-600">
                  Nordic Move Spain represents and advises the buyer. We can
                  check current availability, arrange a private viewing and
                  include this property in your personal shortlist.
                </p>

                <p className="mt-5 max-w-2xl leading-relaxed text-stone-600">
                  Before purchase, we can also coordinate independent technical
                  and legal checks so you have a clearer understanding of what
                  you are buying.
                </p>
              </div>
            </div>

            <aside className="h-fit rounded-[34px] bg-[#1e2a3a] p-8 text-white shadow-sm md:p-10 lg:sticky lg:top-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                Buyer-side support
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight">
                Request a private viewing
              </h2>

              <p className="mt-5 leading-relaxed text-white/75">
                Tell us which property you are interested in and we will contact
                you personally about availability and the next steps.
              </p>

              <a
                href={contactHref}
                className="mt-8 block rounded-full bg-[#c8a063] px-7 py-4 text-center text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Ask us about this villa
              </a>

              <a
                href="mailto:willeke@nordicmovespain.com"
                className="mt-4 block rounded-full border border-white/40 px-7 py-4 text-center text-sm transition hover:bg-white hover:text-[#1e2a3a]"
              >
                willeke@nordicmovespain.com
              </a>

              <p className="mt-8 text-xs leading-relaxed text-white/50">
                Property offered through one of our collaborating property
                partners. Nordic Move Spain represents and advises the buyer.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}