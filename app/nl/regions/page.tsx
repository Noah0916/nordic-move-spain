export const metadata = {
  title: "Costa Blanca Noord: kust of Vall de Pop | Nordic Move Spain",
  description:
    "Ontdek de woonregio's van Costa Blanca Noord. Vergelijk Altea, Calpe, Moraira, Benissa, Jávea en Dénia aan de kust met Xaló, Alcalalí en Llíber in de Vall de Pop.",
  keywords: [
    "regio's Costa Blanca Noord",
    "wonen Costa Blanca Noord",
    "huis kopen Costa Blanca Noord",
    "wonen aan de Costa Blanca",
    "Vall de Pop huis kopen",
    "huis kopen Xaló",
    "huis kopen Jalón",
    "huis kopen Alcalalí",
    "huis kopen Llíber",
    "huis kopen Moraira",
    "huis kopen Benissa",
    "huis kopen Jávea",
    "huis kopen Dénia",
    "huis kopen Calpe",
    "huis kopen Altea",
    "finca kopen Costa Blanca",
    "wonen binnenland Alicante",
  ],
  alternates: {
    canonical: "/nl/regions",
  },
  openGraph: {
    title: "Costa Blanca Noord: de kust en de Vall de Pop",
    description:
      "Van zeezicht en jachthavens tot wijngaarden, finca's en authentieke dorpen. Ontdek welke woonregio werkelijk bij uw leven past.",
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: "/images/pop valley.png",
        width: 1200,
        height: 630,
        alt: "De kust van Costa Blanca Noord en het authentieke binnenland van de Vall de Pop",
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
    price: "€ 3.640 per m²",
    href: "/nl/regions/altea",
    label: "Kunst, historie en mediterrane elegantie",
    text: "Altea combineert een wit historisch centrum, kunstgaleries, uitzicht over de baai en een rustige, verfijnde sfeer. De kust bestaat vooral uit kiezelstranden en baaien. Het gebied trekt mensen die schoonheid, cultuur, gastronomie en een verzorgd woonmilieu belangrijk vinden.",
  },
  {
    name: "Calpe",
    image: "/images/calpe.png",
    price: "€ 3.567 per m²",
    href: "/nl/regions/calpe",
    label: "Stranden, voorzieningen en de Peñón de Ifach",
    text: "Calpe is toegankelijk, praktisch en internationaal. U vindt er brede zandstranden, een vissershaven, veel appartementen en dagelijkse voorzieningen. De Peñón de Ifach bepaalt het uitzicht en geeft de plaats een herkenbare identiteit.",
  },
  {
    name: "Moraira",
    image: "/images/moraira.jpg",
    price: "€ 4.673 per m²",
    href: "/nl/regions/moraira",
    label: "Kleinschalig, residentieel en exclusief",
    text: "Moraira groeide vanuit een vissersdorp en heeft zijn kleinschalige karakter grotendeels behouden. De jachthaven, El Portet, beschutte baaien en villa-urbanisaties maken het aantrekkelijk voor kopers die rust en comfort zoeken zonder ver van restaurants en voorzieningen te wonen.",
  },
  {
    name: "Benissa",
    image: "/images/benissa.jpg",
    price: "Sterk afhankelijk van kust, dorp of buitengebied",
    href: "/nl/regions/benissa",
    label: "Historisch dorp, ruige kust en landelijke ruimte",
    text: "Benissa verbindt een authentiek historisch centrum met een groene kuststrook vol kleine baaien en een uitgestrekt achterland. U vindt er traditionele dorpshuizen, finca's en villa's met meer privacy. De gemeente past bij kopers die ruimte, karakter en een rustiger dagelijks ritme zoeken, terwijl Moraira, Calpe en de zee dichtbij blijven.",
  },
  {
    name: "Jávea / Xàbia",
    image: "/images/javea.jpg",
    price: "€ 4.118 per m²",
    href: "/nl/regions/javea",
    label: "Drie leefwerelden in één plaats",
    text: "Jávea bestaat uit een historisch centrum, een havengebied en het levendige Arenal. Daar omheen liggen villa-gebieden, baaien en het natuurgebied rond de Montgó. De plaats past goed bij actieve gezinnen, watersporters en internationale bewoners die het hele jaar voorzieningen willen.",
  },
  {
    name: "Dénia",
    image: "/images/Denia.jpg",
    price: "€ 3.417 per m²",
    href: "/nl/regions/denia",
    label: "Een echte stad met havenleven en topgastronomie",
    text: "Dénia heeft een kasteel, een historisch centrum, lange stranden, een werkende haven en veerverbindingen naar de Balearen. De stad is het hele jaar actief en is sinds 2015 UNESCO Creative City of Gastronomy. Dit spreekt kopers aan die niet alleen een vakantiegevoel, maar ook een volwaardig dagelijks stadsleven zoeken.",
  },
];

const valleyPlaces = [
  {
    name: "Xaló / Jalón",
    image: "/images/xalo.png",
    price: "€ 2.271 per m²",
    href: "https://valldepop.es/xalo/",
    label: "Wijn, mistela en het praktische hart van de vallei",
    text: "Xaló ligt tussen wijngaarden en heeft een levendig dorpscentrum met winkels, restaurants, wijnproducenten en de bekende zaterdagmarkt. Archeologische sporen gaan terug tot de prehistorie en het oude stratenpatroon laat islamitische invloeden zien. De lokale gastronomie draait onder meer om wijn, mistela, ambachtelijke vleeswaren en zoetigheden.",
  },
  {
    name: "Alcalalí",
    image: "/images/alcalali.png",
    price: "€ 2.694 per m²",
    href: "https://alcalali.es/es/turismo/",
    label: "Dorpsleven, bergzicht en agrarische tradities",
    text: "Alcalalí ligt tussen de bergen en het landschap van de Vall de Pop. Het dorp kent prehistorische sporen, werd in 1245 veroverd door Jaume I en heeft een middeleeuwse verdedigingstoren uit de late veertiende of vroege vijftiende eeuw. Amandelen, wijn, olijven, citrus en tegenwoordig ook de herwaardering van de johannesbroodboom horen bij de lokale identiteit.",
  },
  {
    name: "Llíber",
    image: "/images/lliber.png",
    price: "Kleinschalige markt · sterk afhankelijk van woningtype",
    href: "https://valldepop.es/lliber/",
    label: "Riuraus, wijngaarden en een compact historisch dorp",
    text: "Llíber is klein, rustig en sterk verbonden met het wijnlandschap. Na de verdrijving van de Moren werd het gebied mede herbevolkt door kolonisten uit Mallorca. De riuraus herinneren aan de traditionele productie van rozijnen en aan l’Escaldà, waarbij druiven werden gebroeid en gedroogd. Het dorp past bij kopers die privacy en authenticiteit boven drukte verkiezen.",
  },
];

const priceComparison = [
  ["Alicante stad", "€ 2.575 per m²"],
  ["Dénia", "€ 3.417 per m²"],
  ["Calpe", "€ 3.567 per m²"],
  ["Altea", "€ 3.640 per m²"],
  ["Jávea / Xàbia", "€ 4.118 per m²"],
  ["Moraira", "€ 4.673 per m²"],
  ["Xaló / Jalón", "€ 2.271 per m²"],
  ["Alcalalí", "€ 2.694 per m²"],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Woonregio's Costa Blanca Noord: kust en Vall de Pop",
  description:
    "Een vergelijking van wonen aan de kust van Costa Blanca Noord en wonen in de Vall de Pop, met regionale kenmerken, plaatsinformatie en indicatieve woningprijzen.",
  inLanguage: "nl-NL",
  about: [
    {
      "@type": "Place",
      name: "Costa Blanca Noord",
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
            alt="De Vall de Pop met wijngaarden, bergen en authentieke dorpen aan de Costa Blanca Noord"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/38 to-black/10" />

          <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-8 py-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Wonen aan de Costa Blanca Noord
              </p>
              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] text-white md:text-7xl">
                Van zeezicht aan de kust tot rust tussen de wijngaarden.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                Ontdek twee heel verschillende manieren van wonen: de levendige,
                internationale kust en het authentieke binnenland van de Vall de
                Pop. Beide liggen dicht bij elkaar, maar voelen als een andere
                wereld.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#de-kust"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Ontdek de kust
                </a>
                <a
                  href="#vall-de-pop"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
                >
                  Ontdek de Vall de Pop
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PERSOONLIJKE INTRO */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Twee regio&apos;s die ons hart veroverden
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Wij kwamen voor de kust. Het binnenland liet ons opnieuw
                  verliefd worden.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Zoals veel mensen werden wij eerst geraakt door het licht op
                  de Middellandse Zee, de baaien, de jachthavens en het gemak van
                  wonen dicht bij strand, restaurants en internationale
                  voorzieningen. Van Altea tot Dénia heeft iedere kustplaats een
                  eigen ritme: artistiek, familievriendelijk, exclusief, sportief
                  of juist stedelijk en het hele jaar levendig.
                </p>
                <p>
                  Pas toen we verder het binnenland in reden, ontdekten we een
                  tweede Costa Blanca. In de Vall de Pop liggen authentieke
                  dorpen, traditionele finca&apos;s, wijngaarden, olijf- en
                  amandelterrassen tussen de bergen. Hier is het tempo rustiger,
                  zijn lokale Spaanse en Valenciaanse tradities zichtbaarder en
                  krijgt u vaak meer ruimte en privacy voor uw budget.
                </p>
                <p>
                  De vraag is daarom niet welke regio objectief het mooist is.
                  De vraag is waar uw dagelijks leven het beste tot zijn recht
                  komt. Wilt u lopend naar de boulevard, de haven en restaurants?
                  Of wordt u gelukkiger van een finca, bergzicht, een dorpsplein
                  en stilte in de avond? Hieronder laten we de verschillen en de
                  belangrijkste plaatsen zien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KUST */}
        <section id="de-kust" className="scroll-mt-24 px-8 pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="bg-[#1e2a3a] p-10 text-white md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Regio 1 · De kust
                </p>
                <h2 className="mt-6 font-serif text-5xl leading-tight">
                  Zeezicht, baaien, gastronomie en een internationale
                  levensstijl.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-white/82">
                  De kust van Costa Blanca Noord is spectaculair door de
                  combinatie van bergen en zee. Rotsachtige kapen, beschutte
                  calas, zandstranden en jachthavens liggen naast historische
                  centra en moderne woonwijken. De luchthaven van Alicante maakt
                  de regio goed bereikbaar, terwijl plaatsen als Altea, Calpe,
                  Moraira, Jávea en Dénia elk een duidelijk eigen karakter
                  hebben.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white/82">
                  U ontmoet er een internationale mix van Spaanse bewoners,
                  gezinnen, ondernemers, actieve pensionado&apos;s, remote workers
                  en tweede-woningbezitters. In de grotere plaatsen blijven
                  restaurants, winkels, scholen, sportclubs en zorgvoorzieningen
                  ook buiten het zomerseizoen actief.
                </p>
                <div className="mt-8 rounded-[28px] border border-white/15 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                    Wat proeft u aan de kust?
                  </p>
                  <p className="mt-3 leading-relaxed text-white/75">
                    Verse vis, schaal- en schelpdieren, arroz a banda, arròs del
                    senyoret, cocas, gezouten vis, lokale moscatel en een sterk
                    aanbod aan moderne mediterrane haute cuisine. Dénia is sinds
                    2015 UNESCO Creative City of Gastronomy en verbindt lokale
                    vissers, boeren, markten en restaurants met een opvallend
                    culinaire identiteit.
                  </p>
                </div>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Voor wie past de kust?
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Voor wie graag dicht bij het water én het dagelijks leven
                  woont.
                </h3>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Strand, watersport en jachthaven dichtbij",
                    "Internationale voorzieningen en sociale netwerken",
                    "Restaurants en winkels het hele jaar door",
                    "Goede bereikbaarheid voor familie en gasten",
                    "Appartementen, moderne villa's en zeezichtwoningen",
                    "Meer vraag en doorgaans hogere prijzen op toplocaties",
                  ].map((item) => (
                    <div key={item} className="rounded-[22px] bg-[#f6f1ea] p-5">
                      <p className="leading-relaxed text-stone-700">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-sm leading-relaxed text-stone-500">
                  De prijs verschilt sterk per wijk, woningtype, staat, perceel,
                  loopafstand tot zee en uitzicht. Een appartement in een
                  stadscentrum is niet rechtstreeks vergelijkbaar met een villa
                  op een exclusieve heuvel of aan een beschutte baai.
                </p>
              </div>
            </div>

            <div className="border-t border-stone-200 p-8 md:p-12 lg:p-16">
              <div className="mb-10 max-w-4xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Plaatsen aan de kust
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Van artistiek Altea en authentiek Benissa tot culinair Dénia.
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
                        alt={`${place.name} aan de Costa Blanca Noord`}
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
                        Indicatie juni 2026 · {place.price}
                      </p>
                      <p className="mt-4 leading-relaxed text-stone-600">
                        {place.text}
                      </p>
                      <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-[#1e2a3a]">
                        Ontdek {place.name} →
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
                  alt="Vall de Pop met wijngaarden, bergen en traditionele dorpen"
                  className="h-full min-h-[420px] w-full rounded-[30px] object-cover"
                />
                <img
                  src="/images/alcalali.png"
                  alt="Alcalalí in de Vall de Pop"
                  className="h-full min-h-[420px] w-full rounded-[30px] object-cover"
                />
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Regio 2 · De Vall de Pop
                </p>
                <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Finca&apos;s, wijngaarden en authentiek dorpsleven tussen de
                  bergen.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-700">
                  De Vall de Pop ligt in de Marina Alta rond de rivier Xaló,
                  ook Gorgos genoemd. De vallei wordt omringd door bergketens en
                  bestaat uit dorpen, landbouwterrassen, wijngaarden, olijf- en
                  citrusbomen en traditionele stenen bouwwerken. De zee blijft
                  bereikbaar, maar het dagelijkse ritme is duidelijk rustiger en
                  lokaler dan aan de kust.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  Hier vindt u dorpshuizen, finca&apos;s, landhuizen en villa&apos;s met
                  meer grond en privacy. De internationale gemeenschap is kleiner
                  en verweven met het lokale leven. Dorpsfeesten, familiebedrijven,
                  markten, landbouwtradities, wandelen en fietsen bepalen de
                  sfeer sterker dan strandboulevards en seizoensdrukte.
                </p>
                <div className="mt-8 rounded-[28px] bg-white/70 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                    Wat proeft u in de vallei?
                  </p>
                  <p className="mt-3 leading-relaxed text-stone-700">
                    Lokale wijn en mistela, olijfolie, amandelen, johannesbrood,
                    rozijnen, ambachtelijke vleeswaren, cocas, stoofgerechten en
                    traditionele zoetigheden. De keuken is eenvoudiger en meer
                    verbonden met seizoenen, familiebedrijven en producten van
                    het land.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-black/5 p-8 md:p-12 lg:p-16">
              <div className="mb-10 max-w-4xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Drie dorpen om te ontdekken
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Kleinschalig wonen met een grote eigen identiteit.
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
                        alt={`${place.name} in de Vall de Pop`}
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
                        Ontdek {place.name} →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRIJSVERGELIJKING */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-white p-10 shadow-sm md:p-14 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Prijsverschillen in perspectief
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Aan de kust betaalt u voor schaarste en zeezicht. In de vallei
                  koopt u vaker meer ruimte.
                </h2>
                <p className="mt-6 leading-relaxed text-stone-600">
                  De onderstaande bedragen zijn gemiddelde geadverteerde
                  vraagprijzen van idealista voor juni 2026. Het zijn geen
                  gerealiseerde verkoopprijzen en geen waardering van een
                  individuele woning.
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

        {/* VERGELIJKING */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-[#1e2a3a] p-10 text-white md:p-14 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Welke regio past bij u?
            </p>
            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
              De beste plek is niet automatisch de bekendste plek.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-[30px] border border-white/15 bg-white/5 p-8">
                <h3 className="font-serif text-3xl">Kies de kust wanneer u…</h3>
                <p className="mt-5 leading-relaxed text-white/75">
                  dicht bij zee, haven, restaurants en internationale
                  voorzieningen wilt wonen; graag een levendiger sociaal ritme
                  heeft; bereikbaarheid belangrijk vindt; of een woning zoekt die
                  aantrekkelijk is voor familiebezoek en seizoensgebruik.
                </p>
              </div>
              <div className="rounded-[30px] border border-white/15 bg-white/5 p-8">
                <h3 className="font-serif text-3xl">
                  Kies de Vall de Pop wanneer u…
                </h3>
                <p className="mt-5 leading-relaxed text-white/75">
                  rust, privacy, natuur en een sterker dorpsgevoel zoekt; droomt
                  van een finca of meer grond; wandelen, fietsen en lokale
                  gastronomie belangrijk vindt; en liever ruimte koopt dan een
                  premium betaalt voor directe nabijheid van zee.
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-4xl text-xl leading-relaxed text-white/85">
              Nordic Move helpt u met een persoonlijk Area Match om woonwensen,
              budget, interesses en toekomstplannen te vertalen naar de regio&apos;s
              die werkelijk bij uw leven passen.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/nl/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Start met uw Area Match
              </a>
              <a
                href="/nl/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
              >
                Bespreek uw woonplannen
              </a>
            </div>
          </div>
        </section>

        {/* BRONNEN */}
        <section className="px-8 pb-20">
          <div className="mx-auto max-w-7xl border-t border-stone-300 pt-8 text-sm leading-relaxed text-stone-500">
            <p>
              Regionale informatie is gebaseerd op officiële toeristische en
              gemeentelijke bronnen. Prijsindicaties zijn gebaseerd op
              idealista/data voor juni 2026 en moeten periodiek worden
              bijgewerkt. Kleine dorpen kunnen sterkere prijsschommelingen laten
              zien door een beperkt en zeer verschillend woningaanbod.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante-alacant/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Actuele woningprijsrapporten
              </a>
              <a
                href="https://valldepop.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Officiële Vall de Pop-informatie
              </a>
              <a
                href="https://www.costablanca.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Costa Blanca Tourist Board
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}