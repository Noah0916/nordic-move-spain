export const metadata = {
  title: "Costa Blanca Nord regioner | Moraira, Jávea, Altea, Benissa, Calpe & Dénia",
  description:
    "Utforska de mest attraktiva regionerna på Costa Blanca Nord innan du köper bostad i Spanien. Jämför Moraira, Jávea, Altea, Benissa, Calpe och Dénia utifrån livsstil, bostadstyp och köparprofil.",
  alternates: {
    canonical: "/sv/regions",
    languages: {
      en: "/regions",
      nl: "/nl/regions",
      de: "/de/regions",
      sv: "/sv/regions",
    },
  },
};

export default function RegionsPage() {
  const regions = [
    {
      href: "/sv/regions/moraira",
      image: "/images/discover-card.png",
      label: "Lugnt · Elegant · Bostadsorienterat",
      title: "Moraira",
      text1:
        "Moraira är en av de mest förfinade och fridfulla kustorterna på Costa Blanca Nord, populär bland tyska, nederländska, skandinaviska och internationella köpare som söker havsutsikt, integritet och en lugnare medelhavslivsstil.",
      text2:
        "Området är känt för exklusiva villor, boutique-känsla, vackra vikar och eleganta bostadsområden som El Portet, Pla del Mar och Benimeit.",
    },
    {
      href: "/sv/regions/javea",
      image: "/images/discovery2.png",
      label: "Livligt · Internationellt · Livsstil",
      title: "Jávea",
      text1:
        "Jávea erbjuder en mer livlig och aktiv medelhavslivsstil med stränder, restauranger, sportklubbar, beach clubs och stark internationell energi året runt.",
      text2:
        "Populärt bland internationella familjer, entreprenörer, distansarbetare och aktiva pensionärer som söker en yngre och mer social atmosfär än i lugnare kustorter.",
    },
    {
      href: "/sv/regions/altea",
      image: "/images/area-match.png",
      label: "Konstnärligt · Elegant · Fridfullt",
      title: "Altea",
      text1:
        "Altea är känt för sin vitkalkade gamla stad, konstnärliga atmosfär, havsutsikt och förfinade medelhavscharm.",
      text2:
        "Orten lockar köpare som söker skönhet, kultur, restauranger, integritet och en mer elegant kustlivsstil.",
    },
    {
      href: "/sv/regions/benissa",
      image: "/images/legal.png",
      label: "Autentiskt · Lantligt · Kustvikar",
      title: "Benissa",
      text1:
        "Benissa kombinerar autentisk spansk karaktär med lantligt boende, traditionella byar och vackra dolda vikar mellan Moraira och Calpe.",
      text2:
        "Det passar köpare som söker utrymme, integritet, charm och en lugnare livsstil samtidigt som de vill ha nära till kusten.",
    },
    {
      href: "/sv/regions/calpe",
      image: "/images/community-home.png",
      label: "Strandnära · Modernt · Aktivt",
      title: "Calpe",
      text1:
        "Calpe erbjuder en livlig kustlivsstil med stränder, restauranger, marinaliv, moderna lägenheter och utsikt över Peñón de Ifach.",
      text2:
        "Populärt bland köpare som vill ha bekvämlighet, nyare bostadsprojekt, havsutsikt och en mer aktiv strandfokuserad atmosfär.",
    },
    {
      href: "/sv/regions/denia",
      image: "/images/soft-landing-card.png",
      label: "Hamn · Gastronomi · Liv året runt",
      title: "Dénia",
      text1:
        "Dénia är en livlig hamnstad med stränder, restauranger, daglig service, historiskt centrum och starkt lokalt liv under hela året.",
      text2:
        "Ett starkt val för köpare som söker bekvämlighet, kultur, bra infrastruktur och autentiskt kustboende.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f6f1ea] text-stone-900">
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Nord
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-tight text-[#1e2a3a]">
              Utforska regionerna som passar din livsstil.
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Vi hjälper internationella köpare att förstå skillnaderna mellan
              de mest attraktiva områdena på Costa Blanca Nord innan de
              fokuserar på själva bostaden.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {regions.map((region) => (
              <a
                key={region.href}
                href={region.href}
                className="overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-80 w-full overflow-hidden bg-[#e9dfd2]">
                  <img
                    src={region.image}
                    alt={`${region.title} Costa Blanca Nord`}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

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

                  <span className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#1e2a3a]">
                    Utforska {region.title} →
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
