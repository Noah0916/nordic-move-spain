export default function RegionsPage() {
  const regions = [
    {
      href: "/regions/moraira",
      image: "/images/moraira.png",
      label: "Calm · Elegant · Residential",
      title: "Moraira",
      text1:
        "Moraira is one of the most refined and peaceful coastal towns on Costa Blanca North, popular among German, Dutch, Scandinavian and international buyers seeking sea views, privacy and a calmer Mediterranean lifestyle.",
      text2:
        "The area is known for luxury villas, boutique atmosphere, beautiful coves and elegant residential urbanisations including El Portet, Pla del Mar and Benimeit.",
    },
    {
      href: "/regions/javea",
      image: "/images/javea.png",
      label: "Vibrant · International · Lifestyle",
      title: "Jávea",
      text1:
        "Jávea offers a more vibrant and active Mediterranean lifestyle with beaches, restaurants, sports clubs, beach clubs and strong year-round international energy.",
      text2:
        "Popular among international families, entrepreneurs, remote workers and active retirees looking for a younger and more social atmosphere compared to quieter coastal towns.",
    },
    {
      href: "/regions/altea",
      image: "/images/altea.png",
      label: "Artistic · Elegant · Peaceful",
      title: "Altea",
      text1:
        "Altea is known for its whitewashed old town, artistic atmosphere, sea views and refined Mediterranean charm.",
      text2:
        "It attracts buyers looking for beauty, culture, restaurants, privacy and a more elegant coastal lifestyle.",
    },
    {
      href: "/regions/benissa",
      image: "/images/benissa.png",
      label: "Authentic · Countryside · Coastal coves",
      title: "Benissa",
      text1:
        "Benissa combines authentic Spanish character with countryside living, traditional villages and beautiful hidden coves between Moraira and Calpe.",
      text2:
        "It suits buyers looking for space, privacy, charm and a calmer lifestyle while staying close to the coast.",
    },
    {
      href: "/regions/calpe",
      image: "/images/calpe.png",
      label: "Beachfront · Modern · Active",
      title: "Calpe",
      text1:
        "Calpe offers a lively coastal lifestyle with beaches, restaurants, marina life, modern apartments and views of the Peñón de Ifach.",
      text2:
        "Popular with buyers who want convenience, newer developments, sea views and a more active beach-focused atmosphere.",
    },
    {
      href: "/regions/denia",
      image: "/images/denia.png",
      label: "Harbour · Gastronomy · Year-round life",
      title: "Dénia",
      text1:
        "Dénia is a vibrant harbour town with beaches, restaurants, daily services, a historic centre and strong local life throughout the year.",
      text2:
        "A strong fit for buyers who want convenience, culture, good infrastructure and authentic coastal living.",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca North
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-tight text-[#1e2a3a]">
              Explore the regions that fit your lifestyle.
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              We help international buyers understand the differences between the most desirable areas of Costa Blanca North before focusing on the property itself.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {regions.map((region) => (
              <a
                key={region.href}
                href={region.href}
                className="overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={region.image}
                  alt={`${region.title} Costa Blanca North`}
                  className="h-80 w-full object-cover"
                />

                <div className="p-10">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                    {region.label}
                  </p>

                  <h2 className="mt-5 font-serif text-5xl text-[#1e2a3a]">
                    {region.title}
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-stone-600">
                    {region.text1}
                  </p>

                  <p className="mt-6 text-lg leading-relaxed text-stone-600">
                    {region.text2}
                  </p>

                  <span className="mt-8 inline-block text-sm uppercase tracking-[0.25em]">
                    Explore {region.title} →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}