import type { Villa } from "./villasData";

type VillaDetailProps = {
  villa: Villa;
  localePrefix?: "" | "/nl" | "/de" | "/sv";
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

const berdicaImages = [
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-47.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-44.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-66.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-25.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-27.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-19.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-16.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-17.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-39.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-23.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-34.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-20.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-30.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-14.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-21.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-24.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-32.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-28.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-33.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-6.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-15.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-22.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-31.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-58.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-26.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-2.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-5.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-10.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-12.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-8.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-11.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-13.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-40.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-41.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-67.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-64.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-63.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-62.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-48.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-49.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-50.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-65.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-61.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-60.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-57.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-56.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-42.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-55.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-54.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-53.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-52.jpg",
  "https://images.theagencyre-costablancanorth.com/2026/06/Partida-Berdica-51.jpg",
];

function getGalleryImages(villa: Villa) {
  if (villa.id === "c11-33867") {
    return berdicaImages;
  }

  return villa.images;
}

function getEnglishDescription(villa: Villa) {
  // This property is not included with a full original description in the
  // supplied feeds, so keep the more detailed manually prepared copy.
  if (villa.id === "c11-33867") {
    return [
      "A rare south-facing country estate in Berdica, just outside the historic centre of Benissa. Set on approximately 5,500 m² of private landscaped grounds, the finca offers around 800 m² of built space with six bedrooms and six bathrooms, generous terraces, mature Mediterranean gardens and a large private swimming pool.",
      "The main residence is arranged around an internal courtyard and includes spacious living and dining areas, a fireplace, a principal suite with private terrace, guest accommodation, office space, wine cellar, garage and service areas.",
      "A substantial independent double-height annex adds further flexibility for guest accommodation, a studio, collection space or entertainment area. Outdoor living is completed by a summer kitchen, barbecue, wood-fired oven, workshop, vegetable garden and extensive parking.",
    ];
  }

  const description = villa.description?.trim();

  if (description) {
    return description
      .replace(/&#13;/g, "\n")
      .replace(/\r\n/g, "\n")
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);
  }

  // Fallback only if a property has no description at all.
  const sizeSentence =
    villa.built > 0 && villa.plot > 0
      ? `The property offers approximately ${villa.built} m² of built space on a plot of ${villa.plot} m².`
      : villa.built > 0
        ? `The property offers approximately ${villa.built} m² of built space.`
        : villa.plot > 0
          ? `The property is set on a plot of approximately ${villa.plot} m².`
          : "";

  return [
    `This selected property in ${villa.location} offers ${villa.beds} bedrooms and ${villa.baths} bathrooms. ${sizeSentence}`.trim(),
  ];
}

export default function VillaDetail({
  villa,
  localePrefix = "",
}: VillaDetailProps) {
  const galleryImages = getGalleryImages(villa);
  const paragraphs = getEnglishDescription(villa);

  const villasHref = `${localePrefix}/villas` || "/villas";
  const contactHref = `${localePrefix}/contact?property=${encodeURIComponent(villa.ref)}`;

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <nav className="border-b border-stone-200 bg-[#1e2a3a] px-5 py-5 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a href={localePrefix || "/"} className="font-serif text-xl">
            Nordic Move Spain
          </a>

          <div className="flex items-center gap-4 text-sm">
            <a href={villasHref} className="transition hover:text-white/70">
              Villas
            </a>
            <a
              href={`${localePrefix}/contact` || "/contact"}
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
            href={villasHref}
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

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-[30px] bg-stone-200 md:row-span-2">
              <img
                src={galleryImages[0]}
                alt={`Villa in ${villa.location} - main image`}
                className="h-full min-h-[420px] w-full object-cover md:min-h-[720px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(1, 5).map((image, index) => (
                <div
                  key={`${image}-${index}`}
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

          <section className="mt-16 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                About this property
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
                Property overview
              </h2>
            </div>

            <div className="rounded-[34px] bg-white p-8 shadow-sm md:p-10">
              <div className="space-y-5 text-base leading-8 text-stone-600 md:text-lg">
                {paragraphs.map((paragraph, index) => (
                  <p key={`${villa.id}-description-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          {galleryImages.length > 5 && (
            <section className="mt-16">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                More photos
              </p>
              <h2 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                Gallery
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.slice(5).map((image, index) => (
                  <div
                    key={`${image}-${index + 5}`}
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
            </section>
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
