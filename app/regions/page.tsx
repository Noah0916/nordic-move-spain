export const metadata = {
  title: "Costa Blanca North: Coast or Vall de Pop | Nordic Move Spain",
  description:
    "Explore the residential regions of Costa Blanca North. Compare coastal Altea, Calpe, Moraira, Benissa, Jávea and Dénia with Xaló, Alcalalí and Llíber in the Vall de Pop.",
  keywords: [
    "Costa Blanca North regions",
    "living in Costa Blanca North",
    "buy property Costa Blanca North",
    "living on the Costa Blanca",
    "buy property Vall de Pop",
    "buy property Xaló",
    "buy property Jalón",
    "buy property Alcalalí",
    "buy property Llíber",
    "buy property Moraira",
    "buy property Benissa",
    "buy property Jávea",
    "buy property Dénia",
    "buy property Calpe",
    "buy property Altea",
    "buy a finca Costa Blanca",
    "living inland Alicante",
  ],
  alternates: {
    canonical: "/regions",
    languages: {
      en: "/regions",
      "nl-NL": "/nl/regions",
      "de-DE": "/de/regions",
      "sv-SE": "/sv/regions",
      "x-default": "/regions",
    },
  },
  openGraph: {
    title: "Costa Blanca North: the Coast and the Vall de Pop",
    description:
      "From sea views and marinas to vineyards, fincas and authentic villages. Discover which region truly suits the life you want to build.",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/pop valley.png",
        width: 1200,
        height: 630,
        alt: "The coast of Costa Blanca North and the authentic inland Vall de Pop",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const coastPlaces = [
  {
    name: "Altea",
    image: "/images/altea.jpg",
    price: "€3,640 per m²",
    href: "/regions/altea",
    label: "Art, history and Mediterranean elegance",
    text: "Altea combines a whitewashed historic old town, art galleries, sweeping bay views and a calm, refined atmosphere. Its shoreline is known mainly for pebble beaches and small coves. The area attracts people who value beauty, culture, gastronomy and an elegant residential setting.",
  },
  {
    name: "Calpe",
    image: "/images/calpe.png",
    price: "€3,567 per m²",
    href: "/regions/calpe",
    label: "Beaches, amenities and the Peñón de Ifach",
    text: "Calpe is accessible, practical and international. It offers broad sandy beaches, a working fishing harbour, a wide choice of apartments and strong everyday amenities. The Peñón de Ifach dominates the skyline and gives the town its unmistakable identity.",
  },
  {
    name: "Moraira",
    image: "/images/moraira.jpg",
    price: "€4,673 per m²",
    href: "/regions/moraira",
    label: "Intimate, residential and exclusive",
    text: "Moraira grew from a fishing village and has largely preserved its intimate character. Its marina, El Portet, sheltered coves and residential villa areas appeal to buyers seeking peace and comfort without living far from restaurants and amenities.",
  },
  {
    name: "Benissa",
    image: "/images/benissa.jpg",
    price: "Varies strongly by coastal, village or rural location",
    href: "/regions/benissa",
    label: "Historic town, rugged coast and rural space",
    text: "Benissa combines an authentic historic centre with a green coastline of small coves and an extensive rural hinterland. You will find traditional townhouses, fincas and villas offering greater privacy. It suits buyers who want space, character and a quieter daily rhythm while remaining close to Moraira, Calpe and the sea.",
  },
  {
    name: "Jávea / Xàbia",
    image: "/images/javea.jpg",
    price: "€4,118 per m²",
    href: "/regions/javea",
    label: "Three distinct lifestyles in one town",
    text: "Jávea brings together a historic old town, a port district and the lively Arenal. Around them are villa neighbourhoods, secluded coves and the natural landscape of the Montgó. It is well suited to active families, watersports enthusiasts and international residents who want year-round amenities.",
  },
  {
    name: "Dénia",
    image: "/images/Denia.jpg",
    price: "€3,417 per m²",
    href: "/regions/denia",
    label: "A real town with harbour life and outstanding gastronomy",
    text: "Dénia offers a castle, a historic centre, long beaches, an active port and ferry connections to the Balearic Islands. The town remains lively throughout the year and has been a UNESCO Creative City of Gastronomy since 2015. It appeals to buyers who want more than a holiday atmosphere and value a complete everyday town life.",
  },
];

const valleyPlaces = [
  {
    name: "Xaló / Jalón",
    image: "/images/xalo.png",
    price: "€2,271 per m²",
    href: "https://valldepop.es/xalo/",
    label: "Wine, mistela and the practical heart of the valley",
    text: "Xaló sits among vineyards and has a lively village centre with shops, restaurants, wine producers and its well-known Saturday market. Archaeological remains reach back to prehistoric times, while the old street pattern reflects Islamic influences. Local gastronomy is shaped by wine, mistela, artisan cured meats and traditional sweets.",
  },
  {
    name: "Alcalalí",
    image: "/images/alcalali.png",
    price: "€2,694 per m²",
    href: "https://alcalali.es/es/turismo/",
    label: "Village life, mountain views and agricultural traditions",
    text: "Alcalalí lies between the mountains of the Vall de Pop. The village contains prehistoric traces, was conquered by Jaume I in 1245 and retains a medieval defensive tower dating from the late fourteenth or early fifteenth century. Almonds, wine, olives, citrus fruit and the renewed appreciation of the carob tree all form part of its local identity.",
  },
  {
    name: "Llíber",
    image: "/images/lliber.png",
    price: "Small market · highly dependent on property type",
    href: "https://valldepop.es/lliber/",
    label: "Riuraus, vineyards and a compact historic village",
    text: "Llíber is small, peaceful and closely connected to the surrounding wine country. After the expulsion of the Moriscos, the area was repopulated in part by settlers from Mallorca. Its riuraus recall the traditional raisin industry and l’Escaldà, the process of scalding and drying grapes. The village suits buyers who value privacy and authenticity over bustle.",
  },
];

const priceComparison = [
  ["Alicante city", "€2,575 per m²"],
  ["Dénia", "€3,417 per m²"],
  ["Calpe", "€3,567 per m²"],
  ["Altea", "€3,640 per m²"],
  ["Jávea / Xàbia", "€4,118 per m²"],
  ["Moraira", "€4,673 per m²"],
  ["Xaló / Jalón", "€2,271 per m²"],
  ["Alcalalí", "€2,694 per m²"],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Residential regions of Costa Blanca North: coast and Vall de Pop",
  description:
    "A comparison of living on the coast of Costa Blanca North and in the Vall de Pop, including regional character, town information and indicative property prices.",
  inLanguage: "en-GB",
  about: [
    {
      "@type": "Place",
      name: "Costa Blanca North",
    },
    {
      "@type": "Place",
      name: "Vall de Pop",
    },
  ],
};

export default function RegionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="overflow-hidden bg-[#f6f1ea] text-stone-900">
        {/* HERO */}
        <section className="relative min-h-[82vh] overflow-hidden">
          <img
            src="/images/pop valley.png"
            alt="The Vall de Pop with vineyards, mountains and authentic villages in Costa Blanca North"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/38 to-black/10" />

          <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-8 py-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Living in Costa Blanca North
              </p>
              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] text-white md:text-7xl">
                From sea views on the coast to peace among the vineyards.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                Discover two very different ways of living: the vibrant,
                international coast and the authentic inland Vall de Pop. They
                are close together, yet feel like entirely different worlds.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#coast"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Explore the coast
                </a>
                <a
                  href="#vall-de-pop"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
                >
                  Explore the Vall de Pop
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PERSONAL INTRO */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Two regions that captured our hearts
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  We came for the coast. The inland valleys made us fall in
                  love all over again.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Like many people, we were first drawn to the light over the
                  Mediterranean, the coves, the marinas and the ease of living
                  close to beaches, restaurants and international amenities.
                  From Altea to Dénia, every coastal town has its own rhythm:
                  artistic, family-friendly, exclusive, active or urban and
                  lively throughout the year.
                </p>
                <p>
                  Only when we travelled farther inland did we discover a
                  second Costa Blanca. In the Vall de Pop, authentic villages,
                  traditional fincas, vineyards and terraces of olive and almond
                  trees sit between the mountains. Life moves at a gentler pace,
                  local Spanish and Valencian traditions are more visible and
                  your budget will often buy more space and privacy.
                </p>
                <p>
                  The question is not which region is objectively the most
                  beautiful. What matters is where everyday life fits you best.
                  Would you like to walk to the promenade, marina and restaurants?
                  Or would a finca with mountain views, a village square and quiet
                  evenings make you happier? Below, we explain the differences
                  and introduce the key places.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COAST */}
        <section id="coast" className="scroll-mt-24 px-8 pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="bg-[#1e2a3a] p-10 text-white md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Region 1 · The coast
                </p>
                <h2 className="mt-6 font-serif text-5xl leading-tight">
                  Sea views, coves, gastronomy and an international
                  lifestyle.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-white/82">
                  The coast of Costa Blanca North is especially striking
                  because mountains meet the Mediterranean. Rocky headlands,
                  sheltered calas, sandy beaches and marinas sit beside historic
                  centres and modern residential areas. Alicante Airport makes
                  the region easy to reach, while Altea, Calpe, Moraira, Jávea
                  and Dénia each have a distinct character.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white/82">
                  You will find an international mix of Spanish residents,
                  families, entrepreneurs, active retirees, remote workers and
                  second-home owners. In the larger towns, restaurants, shops,
                  schools, sports clubs and healthcare remain active beyond the
                  summer season.
                </p>
                <div className="mt-8 rounded-[28px] border border-white/15 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                    What does the coast taste like?
                  </p>
                  <p className="mt-3 leading-relaxed text-white/75">
                    Fresh fish, seafood, arroz a banda, arròs del senyoret,
                    cocas, salted fish, local Moscatel and an excellent choice of
                    modern Mediterranean fine dining. Dénia has been a UNESCO
                    Creative City of Gastronomy since 2015, bringing together
                    local fishers, farmers, markets and restaurants in a strong
                    culinary identity.
                  </p>
                </div>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Who is the coast for?
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  For people who want to live close to the water while
                  remaining connected to everyday life.
                </h3>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Beaches, watersports and marinas close by",
                    "International amenities and social networks",
                    "Restaurants and shops open throughout the year",
                    "Easy access for family and guests",
                    "Apartments, modern villas and sea-view homes",
                    "Higher demand and generally higher prices in prime locations",
                  ].map((item) => (
                    <div key={item} className="rounded-[22px] bg-[#f6f1ea] p-5">
                      <p className="leading-relaxed text-stone-700">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-sm leading-relaxed text-stone-500">
                  Prices vary considerably by neighbourhood, property type,
                  condition, plot, distance from the sea and views. A town-centre
                  apartment cannot be compared directly with a villa on an
                  exclusive hillside or beside a sheltered cove.
                </p>
              </div>
            </div>

            <div className="border-t border-stone-200 p-8 md:p-12 lg:p-16">
              <div className="mb-10 max-w-4xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Coastal places
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  From artistic Altea and authentic Benissa to culinary Dénia.
                </h3>
              </div>

              <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                {coastPlaces.map((place) => (
                  <a
                    key={place.name}
                    href={place.href}
                    className="group overflow-hidden rounded-[30px] border border-stone-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={place.image}
                        alt={`${place.name} in Costa Blanca North`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-7">
                      <p className="text-xs uppercase tracking-[0.22em] text-[#c8a063]">
                        {place.label}
                      </p>
                      <h4 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                        {place.name}
                      </h4>
                      <p className="mt-2 text-sm font-medium text-[#b47f3b]">
                        Indicative asking price June 2026 · {place.price}
                      </p>
                      <p className="mt-4 leading-relaxed text-stone-600">
                        {place.text}
                      </p>
                      <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-[#1e2a3a]">
                        Explore {place.name} →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VALL DE POP */}
        <section id="vall-de-pop" className="scroll-mt-24 px-8 pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#e9dfd2] shadow-sm">
            <div className="grid items-stretch lg:grid-cols-[1.02fr_0.98fr]">
              <div className="grid gap-5 p-6 md:grid-cols-2 md:p-8 lg:p-10">
                <img
                  src="/images/pop valley.png"
                  alt="Vall de Pop with vineyards, mountains and traditional villages"
                  className="h-full min-h-[420px] w-full rounded-[30px] object-cover"
                />
                <img
                  src="/images/alcalali.png"
                  alt="Alcalalí in the Vall de Pop"
                  className="h-full min-h-[420px] w-full rounded-[30px] object-cover"
                />
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Region 2 · The Vall de Pop
                </p>
                <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Fincas, vineyards and authentic village life between the
                  mountains.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-700">
                  The Vall de Pop lies in the Marina Alta around the Xaló
                  River, also known as the Gorgos. Mountain ranges surround a
                  landscape of villages, agricultural terraces, vineyards, olive
                  and citrus trees and traditional stone buildings. The sea
                  remains within reach, yet daily life feels noticeably quieter
                  and more local than on the coast.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  Here you will find village houses, fincas, country homes
                  and villas with larger plots and greater privacy. The
                  international community is smaller and more closely woven into
                  local life. Village fiestas, family businesses, markets,
                  agricultural traditions, hiking and cycling shape the
                  atmosphere more than promenades and seasonal crowds.
                </p>
                <div className="mt-8 rounded-[28px] bg-white/70 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                    What does the valley taste like?
                  </p>
                  <p className="mt-3 leading-relaxed text-stone-700">
                    Local wine and mistela, olive oil, almonds, carob,
                    raisins, artisan cured meats, cocas, slow-cooked dishes and
                    traditional sweets. The food is more rustic and closely tied
                    to the seasons, family producers and ingredients from the
                    surrounding land.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-black/5 p-8 md:p-12 lg:p-16">
              <div className="mb-10 max-w-4xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Three villages to discover
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Small-scale living with a strong identity of its own.
                </h3>
              </div>

              <div className="grid gap-7 lg:grid-cols-3">
                {valleyPlaces.map((place) => (
                  <a
                    key={place.name}
                    href={place.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group overflow-hidden rounded-[30px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={place.image}
                        alt={`${place.name} in the Vall de Pop`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <p className="text-xs uppercase tracking-[0.22em] text-[#c8a063]">
                        {place.label}
                      </p>
                      <h4 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                        {place.name}
                      </h4>
                      <p className="mt-2 text-sm font-medium text-[#b47f3b]">
                        {place.price}
                      </p>
                      <p className="mt-5 leading-relaxed text-stone-600">
                        {place.text}
                      </p>
                      <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-[#1e2a3a]">
                        Explore {place.name} →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICE COMPARISON */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-white p-10 shadow-sm md:p-14 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Understanding the price difference
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  On the coast, you pay for scarcity and sea views. In the
                  valley, your budget will often buy more space.
                </h2>
                <p className="mt-6 leading-relaxed text-stone-600">
                  The figures below are average advertised asking prices
                  reported by idealista for June 2026. They are not achieved sale
                  prices and should not be treated as a valuation of any specific
                  property.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {priceComparison.map(([place, price]) => (
                  <div key={place} className="rounded-[24px] bg-[#f6f1ea] p-6">
                    <p className="font-serif text-2xl text-[#1e2a3a]">{place}</p>
                    <p className="mt-2 font-medium text-[#b47f3b]">{price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REGION COMPARISON */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-[#1e2a3a] p-10 text-white md:p-14 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Which region suits you?
            </p>
            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
              The best place for you is not automatically the best-known.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-[30px] border border-white/15 bg-white/5 p-8">
                <h3 className="font-serif text-3xl">Choose the coast if you…</h3>
                <p className="mt-5 leading-relaxed text-white/75">
                  want to live close to the sea, marina, restaurants and
                  international amenities; enjoy a more active social setting;
                  value easy access; or are looking for a home suited to family
                  visits and seasonal use.
                </p>
              </div>
              <div className="rounded-[30px] border border-white/15 bg-white/5 p-8">
                <h3 className="font-serif text-3xl">
                  Choose the Vall de Pop if you…
                </h3>
                <p className="mt-5 leading-relaxed text-white/75">
                  seek peace, privacy, nature and a stronger village
                  atmosphere; dream of a finca or a larger plot; value hiking,
                  cycling and local gastronomy; and would rather invest in space
                  than pay a premium for immediate proximity to the sea.
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-4xl text-xl leading-relaxed text-white/85">
              Nordic Move uses a personal Area Match to translate your
              housing preferences, budget, interests and future plans into the
              regions that genuinely fit the life you want to build.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Start your Area Match
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
              >
                Discuss your plans with us
              </a>
            </div>
          </div>
        </section>

        {/* SOURCES */}
        <section className="px-8 pb-20">
          <div className="mx-auto max-w-7xl border-t border-stone-300 pt-8 text-sm leading-relaxed text-stone-500">
            <p>
              Regional information is based on official tourism and
              municipal sources. Price figures are based on idealista data for
              June 2026 and should be updated regularly. Smaller villages can
              show greater price fluctuations because the number and type of
              properties available may be limited.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante-alacant/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Current property price reports
              </a>
              <a
                href="https://valldepop.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Official Vall de Pop information
              </a>
              <a
                href="https://www.costablanca.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Costa Blanca Tourism Board
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}