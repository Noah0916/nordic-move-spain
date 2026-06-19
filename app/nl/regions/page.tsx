export default function RegionsPage() {
  const regions = [
    {
      href: "/nl/regions/moraira",
      image: "/images/moraira.png",
      label: "Rustig · Elegant · Residentieel",
      title: "Moraira",
      text1:
        "Moraira is een van de meest verfijnde en rustige kustplaatsen aan de Costa Blanca Noord. De plaats is populair bij Duitse, Nederlandse, Scandinavische en andere internationale kopers die op zoek zijn naar zeezicht, privacy en een ontspannen mediterrane levensstijl.",
      text2:
        "De omgeving staat bekend om luxe villa's, een kleinschalige en stijlvolle sfeer, prachtige baaien en elegante woonwijken zoals El Portet, Pla del Mar en Benimeit.",
    },
    {
      href: "/nl/regions/javea",
      image: "/images/javea.png",
      label: "Levendig · Internationaal · Actief",
      title: "Jávea",
      text1:
        "Jávea biedt een levendigere en actievere mediterrane levensstijl met stranden, restaurants, sportclubs, beachclubs en een sterke internationale gemeenschap die het hele jaar aanwezig is.",
      text2:
        "De plaats is populair bij internationale gezinnen, ondernemers, mensen die op afstand werken en actieve gepensioneerden die een jongere en socialere sfeer zoeken dan in rustigere kustplaatsen.",
    },
    {
      href: "/nl/regions/altea",
      image: "/images/altea.png",
      label: "Artistiek · Elegant · Rustgevend",
      title: "Altea",
      text1:
        "Altea staat bekend om de witgekalkte oude binnenstad, de artistieke sfeer, het zeezicht en de verfijnde mediterrane uitstraling.",
      text2:
        "De plaats trekt kopers aan die waarde hechten aan schoonheid, cultuur, goede restaurants, privacy en een elegante levensstijl aan de kust.",
    },
    {
      href: "/nl/regions/benissa",
      image: "/images/benissa.png",
      label: "Authentiek · Landelijk · Verborgen baaien",
      title: "Benissa",
      text1:
        "Benissa combineert een authentiek Spaans karakter met landelijk wonen, traditionele dorpen en prachtige verborgen baaien tussen Moraira en Calpe.",
      text2:
        "De omgeving past goed bij kopers die ruimte, privacy, charme en een rustigere levensstijl zoeken, terwijl zij toch dicht bij de kust willen blijven.",
    },
    {
      href: "/nl/regions/calpe",
      image: "/images/calpe.png",
      label: "Aan het strand · Modern · Levendig",
      title: "Calpe",
      text1:
        "Calpe biedt een levendige levensstijl aan de kust met stranden, restaurants, een jachthaven, moderne appartementen en uitzicht op de Peñón de Ifach.",
      text2:
        "De plaats is populair bij kopers die gemak, nieuwere bouwprojecten, zeezicht en een actievere, op het strand gerichte omgeving zoeken.",
    },
    {
      href: "/nl/regions/denia",
      image: "/images/denia.png",
      label: "Haven · Gastronomie · Leven het hele jaar",
      title: "Dénia",
      text1:
        "Dénia is een levendige havenstad met stranden, restaurants, dagelijkse voorzieningen, een historisch centrum en een sterk lokaal leven gedurende het hele jaar.",
      text2:
        "De stad past goed bij kopers die gemak, cultuur, goede infrastructuur en een authentieke levensstijl aan de kust belangrijk vinden.",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Noord
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-tight text-[#1e2a3a]">
              Ontdek de regio's die bij uw levensstijl passen.
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Wij helpen internationale kopers de verschillen tussen de meest
              aantrekkelijke gebieden aan de Costa Blanca Noord te begrijpen,
              voordat zij zich op een specifieke woning richten.
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
                  alt={`${region.title} aan de Costa Blanca Noord`}
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
                    Ontdek {region.title} →
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
