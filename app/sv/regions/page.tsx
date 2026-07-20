export const metadata = {
  title: "Norra Costa Blanca: kusten eller Vall de Pop | Nordic Move Spain",
  description:
    "Upptäck bostadsområdena på norra Costa Blanca. Jämför Altea, Calpe, Moraira, Benissa, Jávea och Dénia vid kusten med Xaló, Alcalalí och Llíber i Vall de Pop.",
  keywords: [
    "regioner norra Costa Blanca",
    "bo på norra Costa Blanca",
    "köpa bostad norra Costa Blanca",
    "bo på Costa Blanca",
    "köpa bostad Vall de Pop",
    "köpa bostad Xaló",
    "köpa bostad Jalón",
    "köpa bostad Alcalalí",
    "köpa bostad Llíber",
    "köpa bostad Moraira",
    "köpa bostad Benissa",
    "köpa bostad Jávea",
    "köpa bostad Dénia",
    "köpa bostad Calpe",
    "köpa bostad Altea",
    "köpa finca Costa Blanca",
    "bo i Alicantes inland",
  ],
  alternates: {
    canonical: "/sv/regions",
    languages: {
      "sv-SE": "/sv/regions",
      en: "/regions",
      "nl-NL": "/nl/regions",
      "de-DE": "/de/regions",
      "x-default": "/regions",
    },
  },
  openGraph: {
    title: "Norra Costa Blanca: kusten och Vall de Pop",
    description:
      "Från havsutsikt och småbåtshamnar till vingårdar, fincor och genuina byar. Upptäck vilken region som passar livet du vill skapa.",
    type: "website",
    locale: "sv_SE",
    images: [
      {
        url: "/images/pop valley.png",
        width: 1200,
        height: 630,
        alt: "Kusten på norra Costa Blanca och det genuina inlandet Vall de Pop",
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
    price: "3 640 € per m²",
    href: "/sv/regions/altea",
    label: "Konst, historia och medelhavselegans",
    text: "Altea förenar en vitkalkad historisk stadskärna, konstgallerier, vidsträckta vyer över bukten och en lugn, sofistikerad atmosfär. Kusten är främst känd för klapperstensstränder och små vikar. Området lockar människor som uppskattar skönhet, kultur, gastronomi och en elegant boendemiljö.",
  },
  {
    name: "Calpe",
    image: "/images/calpe.png",
    price: "3 567 € per m²",
    href: "/sv/regions/calpe",
    label: "Stränder, service och Peñón de Ifach",
    text: "Calpe är lättillgängligt, praktiskt och internationellt. Här finns breda sandstränder, en aktiv fiskehamn, ett stort utbud av lägenheter och god vardagsservice. Peñón de Ifach dominerar silhuetten och ger staden dess omisskännliga identitet.",
  },
  {
    name: "Moraira",
    image: "/images/moraira.jpg",
    price: "4 673 € per m²",
    href: "/sv/regions/moraira",
    label: "Småskaligt, bostadsinriktat och exklusivt",
    text: "Moraira växte fram ur en fiskeby och har till stor del bevarat sin småskaliga karaktär. Småbåtshamnen, El Portet, skyddade vikar och villaområden lockar köpare som söker lugn och komfort utan att bo långt från restauranger och service.",
  },
  {
    name: "Benissa",
    image: "/images/benissa.jpg",
    price: "Varierar kraftigt mellan kust, by och landsbygd",
    href: "/sv/regions/benissa",
    label: "Historisk stad, dramatisk kust och lantlig rymd",
    text: "Benissa förenar en genuin historisk stadskärna med en grön kustlinje av små vikar och ett vidsträckt lantligt inland. Här finns traditionella byhus, fincor och villor med mer avskildhet. Området passar köpare som söker utrymme, karaktär och ett lugnare vardagsliv men ändå vill ha nära till Moraira, Calpe och havet.",
  },
  {
    name: "Jávea / Xàbia",
    image: "/images/javea.jpg",
    price: "4 118 € per m²",
    href: "/sv/regions/javea",
    label: "Tre tydliga livsstilar i en och samma stad",
    text: "Jávea samlar en historisk stadskärna, ett hamnkvarter och livliga Arenal. Runt omkring finns villaområden, avskilda vikar och Montgós natur. Orten passar aktiva familjer, vattensportentusiaster och internationella invånare som vill ha service året runt.",
  },
  {
    name: "Dénia",
    image: "/images/Denia.jpg",
    price: "3 417 € per m²",
    href: "/sv/regions/denia",
    label: "En levande stad med hamnliv och förstklassig gastronomi",
    text: "Dénia erbjuder en borg, en historisk stadskärna, långa stränder, en aktiv hamn och färjeförbindelser till Balearerna. Staden lever året runt och har varit en UNESCO Creative City of Gastronomy sedan 2015. Den passar köpare som söker mer än semesterkänsla och värdesätter ett komplett vardagsliv i en riktig stad.",
  },
];

const valleyPlaces = [
  {
    name: "Xaló / Jalón",
    image: "/images/xalo.png",
    price: "2 271 € per m²",
    href: "https://valldepop.es/xalo/",
    label: "Vin, mistela och dalens praktiska centrum",
    text: "Xaló ligger bland vingårdar och har ett livligt bycentrum med butiker, restauranger, vinproducenter och sin välkända lördagsmarknad. Arkeologiska fynd sträcker sig tillbaka till förhistorisk tid, medan det gamla gatunätet visar islamiska influenser. Den lokala gastronomin präglas av vin, mistela, hantverksmässigt charkuterihantverk och traditionella sötsaker.",
  },
  {
    name: "Alcalalí",
    image: "/images/alcalali.png",
    price: "2 694 € per m²",
    href: "https://alcalali.es/es/turismo/",
    label: "Byliv, bergsutsikt och jordbrukstraditioner",
    text: "Alcalalí ligger mellan bergen i Vall de Pop. Byn har förhistoriska spår, erövrades av Jaume I år 1245 och har kvar ett medeltida försvarstorn från slutet av 1300-talet eller början av 1400-talet. Mandlar, vin, oliver, citrusfrukter och det förnyade intresset för johannesbrödsträdet är alla en del av den lokala identiteten.",
  },
  {
    name: "Llíber",
    image: "/images/lliber.png",
    price: "Liten marknad · mycket beroende av bostadstyp",
    href: "https://valldepop.es/lliber/",
    label: "Riuraus, vingårdar och en kompakt historisk by",
    text: "Llíber är litet, fridfullt och nära förbundet med det omgivande vinlandskapet. Efter fördrivningen av moriskerna återbefolkades området delvis av nybyggare från Mallorca. Byns riuraus påminner om den traditionella russinproduktionen och l’Escaldà, processen där druvor skållades och torkades. Llíber passar köpare som värdesätter avskildhet och autenticitet mer än liv och rörelse.",
  },
];

const priceComparison = [
  ["Alicante stad", "2 575 € per m²"],
  ["Dénia", "3 417 € per m²"],
  ["Calpe", "3 567 € per m²"],
  ["Altea", "3 640 € per m²"],
  ["Jávea / Xàbia", "4 118 € per m²"],
  ["Moraira", "4 673 € per m²"],
  ["Xaló / Jalón", "2 271 € per m²"],
  ["Alcalalí", "2 694 € per m²"],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Bostadsregioner på norra Costa Blanca: kusten och Vall de Pop",
  description:
    "En jämförelse mellan att bo vid kusten på norra Costa Blanca och i Vall de Pop, med regional karaktär, ortsinformation och indikativa bostadspriser.",
  inLanguage: "sv-SE",
  about: [
    {
      "@type": "Place",
      name: "Norra Costa Blanca",
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
            alt="Vall de Pop med vingårdar, berg och genuina byar på norra Costa Blanca"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/38 to-black/10" />

          <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-8 py-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Bo på norra Costa Blanca
              </p>
              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] text-white md:text-7xl">
                Från havsutsikt vid kusten till lugn bland vingårdarna.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                Upptäck två helt olika sätt att leva: den livliga,
                internationella kusten och det genuina inlandet Vall de Pop. De
                ligger nära varandra men känns som två olika världar.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#kusten"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Upptäck kusten
                </a>
                <a
                  href="#vall-de-pop"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
                >
                  Upptäck Vall de Pop
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PERSONLIG INTRODUKTION */}
        <section className="px-8 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Två regioner som fångade våra hjärtan
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Vi kom för kusten. Dalarna i inlandet fick oss att bli
                  förälskade på nytt.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Som många andra drogs vi först till ljuset över
                  Medelhavet, vikarna, småbåtshamnarna och enkelheten i att bo
                  nära stränder, restauranger och internationell service. Från
                  Altea till Dénia har varje kustort sin egen rytm: konstnärlig,
                  familjevänlig, exklusiv, aktiv eller urban och levande året runt.
                </p>
                <p>
                  Först när vi reste längre inåt landet upptäckte vi ett
                  andra Costa Blanca. I Vall de Pop ligger genuina byar,
                  traditionella fincor, vingårdar och terrasser med oliv- och
                  mandelträd mellan bergen. Tempot är lugnare, de spanska och
                  valencianska traditionerna syns tydligare och budgeten räcker
                  ofta till mer utrymme och avskildhet.
                </p>
                <p>
                  Frågan är därför inte vilken region som objektivt är
                  vackrast. Det viktiga är var vardagen passar dig bäst. Vill du
                  kunna promenera till strandpromenaden, hamnen och restauranger?
                  Eller skulle en finca med bergsutsikt, ett bytorg och stilla
                  kvällar göra dig lyckligare? Nedan förklarar vi skillnaderna
                  och presenterar de viktigaste orterna.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KUSTEN */}
        <section id="kusten" className="scroll-mt-24 px-8 pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="bg-[#1e2a3a] p-10 text-white md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Region 1 · Kusten
                </p>
                <h2 className="mt-6 font-serif text-5xl leading-tight">
                  Havsutsikt, vikar, gastronomi och en internationell
                  livsstil.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-white/82">
                  Kusten på norra Costa Blanca är särskilt vacker där
                  bergen möter Medelhavet. Klippiga uddar, skyddade calas,
                  sandstränder och småbåtshamnar ligger intill historiska centrum
                  och moderna bostadsområden. Alicante flygplats gör regionen
                  lättillgänglig, medan Altea, Calpe, Moraira, Jávea och Dénia
                  alla har sin egen tydliga karaktär.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white/82">
                  Här möter du en internationell blandning av spanska
                  invånare, familjer, företagare, aktiva pensionärer,
                  distansarbetare och fritidshusägare. I de större orterna är
                  restauranger, butiker, skolor, idrottsföreningar och sjukvård
                  aktiva även utanför sommarsäsongen.
                </p>
                <div className="mt-8 rounded-[28px] border border-white/15 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                    Hur smakar kusten?
                  </p>
                  <p className="mt-3 leading-relaxed text-white/75">
                    Färsk fisk, skaldjur, arroz a banda, arròs del
                    senyoret, cocas, saltad fisk, lokal Moscatel och ett mycket
                    bra utbud av modern medelhavsgastronomi. Dénia har varit en
                    UNESCO Creative City of Gastronomy sedan 2015 och förenar
                    lokala fiskare, odlare, marknader och restauranger i en stark
                    kulinarisk identitet.
                  </p>
                </div>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Vem passar kusten för?
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  För människor som vill bo nära vattnet men samtidigt
                  vara en del av ett levande vardagsliv.
                </h3>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Stränder, vattensport och småbåtshamnar i närheten",
                    "Internationell service och sociala nätverk",
                    "Restauranger och butiker öppna året runt",
                    "Enkelt för familj och gäster att resa hit",
                    "Lägenheter, moderna villor och bostäder med havsutsikt",
                    "Högre efterfrågan och vanligtvis högre priser i topplägen",
                  ].map((item) => (
                    <div key={item} className="rounded-[22px] bg-[#f6f1ea] p-5">
                      <p className="leading-relaxed text-stone-700">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-sm leading-relaxed text-stone-500">
                  Priserna varierar kraftigt beroende på område,
                  bostadstyp, skick, tomt, avstånd till havet och utsikt. En
                  lägenhet i centrum kan inte jämföras direkt med en villa på en
                  exklusiv sluttning eller vid en skyddad vik.
                </p>
              </div>
            </div>

            <div className="border-t border-stone-200 p-8 md:p-12 lg:p-16">
              <div className="mb-10 max-w-4xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Orter vid kusten
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Från konstnärliga Altea och genuina Benissa till
                  gastronomiska Dénia.
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
                        alt={`${place.name} på norra Costa Blanca`}
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
                        Indikativt annonserat pris juni 2026 · {place.price}
                      </p>
                      <p className="mt-4 leading-relaxed text-stone-600">
                        {place.text}
                      </p>
                      <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-[#1e2a3a]">
                        Upptäck {place.name} →
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
                  alt="Vall de Pop med vingårdar, berg och traditionella byar"
                  className="h-full min-h-[420px] w-full rounded-[30px] object-cover"
                />
                <img
                  src="/images/alcalali.png"
                  alt="Alcalalí i Vall de Pop"
                  className="h-full min-h-[420px] w-full rounded-[30px] object-cover"
                />
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Region 2 · Vall de Pop
                </p>
                <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Fincor, vingårdar och genuint byliv mellan bergen.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-700">
                  Vall de Pop ligger i Marina Alta kring floden Xaló,
                  även kallad Gorgos. Bergskedjor omger ett landskap av byar,
                  jordbruksterrasser, vingårdar, oliv- och citrusträd samt
                  traditionella stenbyggnader. Havet finns fortfarande inom
                  räckhåll, men vardagen är märkbart lugnare och mer lokal än
                  vid kusten.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  Här hittar du byhus, fincor, lantliga bostäder och
                  villor med större tomter och mer avskildhet. Det internationella
                  samhället är mindre och mer integrerat i det lokala livet.
                  Byfester, familjeföretag, marknader, jordbrukstraditioner,
                  vandring och cykling präglar atmosfären mer än strandpromenader
                  och säsongsbetonad trängsel.
                </p>
                <div className="mt-8 rounded-[28px] bg-white/70 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                    Hur smakar dalen?
                  </p>
                  <p className="mt-3 leading-relaxed text-stone-700">
                    Lokalt vin och mistela, olivolja, mandlar,
                    johannesbröd, russin, hantverksmässigt charkuterihantverk,
                    cocas, långkok och traditionella sötsaker. Maten är mer
                    rustik och nära knuten till årstiderna, familjeproducenterna
                    och råvarorna från landskapet runt omkring.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-black/5 p-8 md:p-12 lg:p-16">
              <div className="mb-10 max-w-4xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Tre byar att upptäcka
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Småskaligt boende med en stark egen identitet.
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
                        alt={`${place.name} i Vall de Pop`}
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
                        Upptäck {place.name} →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRISJÄMFÖRELSE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-white p-10 shadow-sm md:p-14 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Förstå prisskillnaden
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Vid kusten betalar du för knapphet och havsutsikt. I
                  dalen räcker budgeten ofta till mer utrymme.
                </h2>
                <p className="mt-6 leading-relaxed text-stone-600">
                  Beloppen nedan är genomsnittliga annonserade
                  utgångspriser från idealista för juni 2026. De är inte
                  faktiska försäljningspriser och ska inte ses som en värdering
                  av en enskild bostad.
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

        {/* REGIONJÄMFÖRELSE */}
        <section className="px-8 pb-28">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-[#1e2a3a] p-10 text-white md:p-14 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vilken region passar dig?
            </p>
            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
              Den bästa platsen för dig är inte automatiskt den mest kända.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-[30px] border border-white/15 bg-white/5 p-8">
                <h3 className="font-serif text-3xl">Välj kusten om du…</h3>
                <p className="mt-5 leading-relaxed text-white/75">
                  vill bo nära havet, hamnen, restauranger och
                  internationell service; uppskattar ett mer aktivt socialt liv;
                  värdesätter god tillgänglighet; eller söker en bostad som passar
                  familjebesök och säsongsboende.
                </p>
              </div>
              <div className="rounded-[30px] border border-white/15 bg-white/5 p-8">
                <h3 className="font-serif text-3xl">
                  Välj Vall de Pop om du…
                </h3>
                <p className="mt-5 leading-relaxed text-white/75">
                  söker lugn, avskildhet, natur och en starkare
                  bykänsla; drömmer om en finca eller större tomt; uppskattar
                  vandring, cykling och lokal gastronomi; och hellre investerar
                  i utrymme än betalar extra för omedelbar närhet till havet.
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-4xl text-xl leading-relaxed text-white/85">
              Nordic Move använder en personlig Area Match för att
              omsätta dina boendeönskemål, din budget, dina intressen och
              framtidsplaner till de regioner som verkligen passar livet du vill
              skapa.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/sv/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Starta din Area Match
              </a>
              <a
                href="/sv/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
              >
                Prata med oss om dina planer
              </a>
            </div>
          </div>
        </section>

        {/* KÄLLOR */}
        <section className="px-8 pb-20">
          <div className="mx-auto max-w-7xl border-t border-stone-300 pt-8 text-sm leading-relaxed text-stone-500">
            <p>
              Regioninformationen bygger på officiella turist- och
              kommunala källor. Prisuppgifterna baseras på idealista-data för
              juni 2026 och bör uppdateras regelbundet. Mindre byar kan visa
              större prisvariationer eftersom utbudet och typen av bostäder kan
              vara begränsade.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante-alacant/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Aktuella bostadsprisrapporter
              </a>
              <a
                href="https://valldepop.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Officiell information om Vall de Pop
              </a>
              <a
                href="https://www.costablanca.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Costa Blancas turistorganisation
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
