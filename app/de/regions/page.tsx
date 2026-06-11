export const metadata = {
  title: "Regionen | Nordic Move Spain",
  description:
    "Vergleichen Sie die wichtigsten Regionen an der nördlichen Costa Blanca: Moraira, Jávea, Dénia, Benissa, Calpe und Altea.",
};

export default function GermanRegionsPage() {
  const regions = [
    {
      title: "Moraira",
      href: "/de/regions/moraira",
      text: "Ruhiger Küstenlebensstil mit Villen, Meerblick und internationaler Gemeinschaft.",
    },
    {
      title: "Jávea",
      href: "/de/regions/javea",
      text: "Vielfältiger Lebensstil mit Altstadt, Hafen, Arenal, Buchten und Restaurants.",
    },
    {
      title: "Dénia",
      href: "/de/regions/denia",
      text: "Lebendige Hafenstadt mit Stränden, Gastronomie und ganzjährigem Leben.",
    },
    {
      title: "Benissa",
      href: "/de/regions/benissa",
      text: "Authentische Gegend mit Villen, Natur, Buchten und mehr Privatsphäre.",
    },
    {
      title: "Calpe",
      href: "/de/regions/calpe",
      text: "Strandleben, Apartments, Promenade und Blick auf den Peñón de Ifach.",
    },
    {
      title: "Altea",
      href: "/de/regions/altea",
      text: "Künstlerisch, elegant und bekannt für Altstadt, Meerblick und Boutique-Lifestyle.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1ea] px-8 py-28 text-stone-900">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
          Costa Blanca Nord
        </p>

        <h1 className="mt-6 max-w-4xl font-serif text-6xl leading-tight text-[#1e2a3a]">
          Regionen entdecken
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-600">
          Vergleichen Sie die wichtigsten Orte an der nördlichen Costa Blanca
          und finden Sie heraus, welche Region am besten zu Ihrem Lebensstil,
          Budget und Ihren langfristigen Plänen passt.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => (
            <a
              key={region.href}
              href={region.href}
              className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="font-serif text-4xl text-[#1e2a3a]">
                {region.title}
              </h2>

              <p className="mt-5 leading-relaxed text-stone-600">
                {region.text}
              </p>

              <p className="mt-8 text-sm font-medium text-[#c8a063]">
                Region ansehen →
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}