export const metadata = {
  title: "Costa Blanca Nord: Küste oder Vall de Pop | Nordic Move Spain",
  description:
    "Entdecken Sie die Wohnregionen der nördlichen Costa Blanca. Vergleichen Sie Altea, Calpe, Moraira, Benissa, Jávea und Dénia an der Küste mit Xaló, Alcalalí und Llíber im Vall de Pop.",
  keywords: [
    "Regionen Costa Blanca Nord",
    "Wohnen Costa Blanca Nord",
    "Haus kaufen Costa Blanca Nord",
    "Wohnen an der Costa Blanca",
    "Haus kaufen Vall de Pop",
    "Haus kaufen Xaló",
    "Haus kaufen Jalón",
    "Haus kaufen Alcalalí",
    "Haus kaufen Llíber",
    "Haus kaufen Moraira",
    "Haus kaufen Benissa",
    "Haus kaufen Jávea",
    "Haus kaufen Dénia",
    "Haus kaufen Calpe",
    "Haus kaufen Altea",
    "Finca kaufen Costa Blanca",
    "Wohnen im Hinterland von Alicante",
  ],
  alternates: {
    canonical: "/de/regions",
    languages: {
      "de-DE": "/de/regions",
      "nl-NL": "/nl/regions",
      en: "/regions",
      "sv-SE": "/sv/regions",
      "x-default": "/regions",
    },
  },
  openGraph: {
    title: "Costa Blanca Nord: die Küste und das Vall de Pop",
    description:
      "Von Meerblick und Yachthäfen bis zu Weinbergen, Fincas und authentischen Dörfern. Entdecken Sie, welche Wohnregion wirklich zu Ihrem Leben passt.",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/pop valley.png",
        width: 1200,
        height: 630,
        alt: "Die Küste der nördlichen Costa Blanca und das authentische Hinterland des Vall de Pop",
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
    href: "/de/regions/altea",
    label: "Kunst, Geschichte und mediterrane Eleganz",
    text: "Altea verbindet eine weiße historische Altstadt, Kunstgalerien, Ausblicke über die Bucht und eine ruhige, elegante Atmosphäre. Die Küste besteht vor allem aus Kiesstränden und kleinen Buchten. Die Gegend zieht Menschen an, die Schönheit, Kultur, Gastronomie und ein gepflegtes Wohnumfeld schätzen.",
  },
  {
    name: "Calpe",
    image: "/images/calpe.png",
    price: "€ 3.567 per m²",
    href: "/de/regions/calpe",
    label: "Strände, Infrastruktur und der Peñón de Ifach",
    text: "Calpe ist gut erreichbar, praktisch und international. Sie finden breite Sandstrände, einen Fischerhafen, viele Apartments und eine gute Alltagsinfrastruktur. Der Peñón de Ifach prägt die Aussicht und verleiht dem Ort seine unverwechselbare Identität.",
  },
  {
    name: "Moraira",
    image: "/images/moraira.jpg",
    price: "€ 4.673 per m²",
    href: "/de/regions/moraira",
    label: "Überschaubar, exklusiv und auf Wohnen ausgerichtet",
    text: "Moraira entwickelte sich aus einem Fischerdorf und hat seinen überschaubaren Charakter weitgehend bewahrt. Der Yachthafen, El Portet, geschützte Buchten und Villenviertel machen den Ort attraktiv für Käufer, die Ruhe und Komfort suchen, ohne weit von Restaurants und Einrichtungen entfernt zu wohnen.",
  },
  {
    name: "Benissa",
    image: "/images/benissa.jpg",
    price: "Stark abhängig von Küste, Ortskern oder ländlicher Lage",
    href: "/de/regions/benissa",
    label: "Historischer Ort, wilde Küste und ländliche Weite",
    text: "Benissa verbindet ein authentisches historisches Zentrum mit einer grünen Küstenlinie voller kleiner Buchten und einem weitläufigen Hinterland. Hier finden Sie traditionelle Dorfhäuser, Fincas und Villen mit mehr Privatsphäre. Die Gemeinde passt zu Käufern, die Raum, Charakter und einen ruhigeren Alltag suchen, während Moraira, Calpe und das Meer dennoch nahe bleiben.",
  },
  {
    name: "Jávea / Xàbia",
    image: "/images/javea.jpg",
    price: "€ 4.118 per m²",
    href: "/de/regions/javea",
    label: "Drei Lebenswelten an einem Ort",
    text: "Jávea besteht aus einer historischen Altstadt, einem Hafenviertel und dem lebendigen Arenal. Rundherum liegen Villengebiete, Buchten und das Naturgebiet am Montgó. Der Ort eignet sich gut für aktive Familien, Wassersportler und internationale Bewohner, die ganzjährig Infrastruktur wünschen.",
  },
  {
    name: "Dénia",
    image: "/images/Denia.jpg",
    price: "€ 3.417 per m²",
    href: "/de/regions/denia",
    label: "Eine echte Stadt mit Hafenleben und Spitzengastronomie",
    text: "Dénia bietet eine Burg, eine historische Altstadt, lange Strände, einen aktiven Hafen und Fährverbindungen zu den Balearen. Die Stadt lebt das ganze Jahr und ist seit 2015 UNESCO Creative City of Gastronomy. Das spricht Käufer an, die nicht nur Urlaubsgefühl, sondern auch ein vollwertiges städtisches Alltagsleben suchen.",
  },
];

const valleyPlaces = [
  {
    name: "Xaló / Jalón",
    image: "/images/xalo.png",
    price: "€ 2.271 per m²",
    href: "https://valldepop.es/xalo/",
    label: "Wein, Mistela und das praktische Herz des Tals",
    text: "Xaló liegt zwischen Weinbergen und besitzt ein lebendiges Ortszentrum mit Geschäften, Restaurants, Weinproduzenten und dem bekannten Samstagsmarkt. Archäologische Spuren reichen bis in die Vorgeschichte zurück, und der alte Straßenverlauf zeigt islamische Einflüsse. Die lokale Gastronomie ist unter anderem geprägt von Wein, Mistela, handwerklich hergestellten Wurstwaren und Süßspeisen.",
  },
  {
    name: "Alcalalí",
    image: "/images/alcalali.png",
    price: "€ 2.694 per m²",
    href: "https://alcalali.es/es/turismo/",
    label: "Dorfleben, Bergblick und landwirtschaftliche Traditionen",
    text: "Alcalalí liegt zwischen den Bergen in der Landschaft des Vall de Pop. Der Ort weist prähistorische Spuren auf, wurde 1245 von Jaume I. erobert und besitzt einen mittelalterlichen Wehrturm aus dem späten 14. oder frühen 15. Jahrhundert. Mandeln, Wein, Oliven, Zitrusfrüchte und heute auch die Wiederentdeckung des Johannisbrotbaums gehören zur lokalen Identität.",
  },
  {
    name: "Llíber",
    image: "/images/lliber.png",
    price: "Kleiner Markt · stark abhängig vom Immobilientyp",
    href: "https://valldepop.es/lliber/",
    label: "Riuraus, Weinberge und ein kompakter historischer Ort",
    text: "Llíber ist klein, ruhig und eng mit der Weinlandschaft verbunden. Nach der Vertreibung der Morisken wurde das Gebiet unter anderem von Siedlern aus Mallorca neu besiedelt. Die Riuraus erinnern an die traditionelle Rosinenproduktion und an l’Escaldà, bei der Trauben überbrüht und getrocknet wurden. Der Ort passt zu Käufern, die Privatsphäre und Authentizität dem Trubel vorziehen.",
  },
];

const priceComparison = [
  ["Alicante Stadt", "€ 2.575 per m²"],
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
  name: "Wohnregionen Costa Blanca Nord: Küste und Vall de Pop",
  description:
    "Ein Vergleich zwischen dem Wohnen an der nördlichen Costa Blanca und im Vall de Pop, mit regionalen Merkmalen, Ortsinformationen und indikativen Immobilienpreisen.",
  inLanguage: "de-DE",
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
            alt="Das Vall de Pop mit Weinbergen, Bergen und authentischen Dörfern an der nördlichen Costa Blanca"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/38 to-black/10" />

          <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-8 py-24">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Wohnen an der nördlichen Costa Blanca
              </p>
              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] text-white md:text-7xl">
                Vom Meerblick an der Küste bis zur Ruhe zwischen den Weinbergen.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
                Entdecken Sie zwei ganz unterschiedliche Arten zu wohnen: die lebendige,
                internationale Küste und das authentische Hinterland des Vall de
                Pop. Beide liegen nah beieinander und fühlen sich dennoch wie
                verschiedene Welten an.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#de-kust"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Die Küste entdecken
                </a>
                <a
                  href="#vall-de-pop"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
                >
                  Das Vall de Pop entdecken
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
                  Zwei Regionen, die unser Herz erobert haben
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Wir kamen wegen der Küste. Das Hinterland ließ uns noch einmal
                  neu verlieben.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Wie viele Menschen waren auch wir zuerst vom Licht über dem
                  Mittelmeer, den Buchten, den Yachthäfen und der Leichtigkeit
                  begeistert, nahe an Strand, Restaurants und internationaler
                  Infrastruktur zu leben. Von Altea bis Dénia hat jeder Küstenort
                  seinen eigenen Rhythmus: künstlerisch, familienfreundlich,
                  exklusiv, sportlich oder urban und ganzjährig lebendig.
                </p>
                <p>
                  Erst als wir weiter ins Hinterland fuhren, entdeckten wir eine
                  zweite Costa Blanca. Im Vall de Pop liegen authentische Dörfer,
                  traditionelle Fincas, Weinberge sowie Oliven- und
                  Mandelterrassen zwischen den Bergen. Hier ist das Tempo ruhiger,
                  lokale spanische und valencianische Traditionen sind sichtbarer
                  und für Ihr Budget erhalten Sie häufig mehr Raum und Privatsphäre.
                </p>
                <p>
                  Die Frage ist daher nicht, welche Region objektiv die schönste
                  ist. Entscheidend ist, wo Ihr Alltag am besten zu Ihnen passt.
                  Möchten Sie zu Fuß zur Promenade, zum Hafen und zu Restaurants?
                  Oder macht Sie eine Finca mit Bergblick, ein Dorfplatz und Ruhe
                  am Abend glücklicher? Im Folgenden zeigen wir die Unterschiede
                  und die wichtigsten Orte.
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
                  Region 1 · Die Küste
                </p>
                <h2 className="mt-6 font-serif text-5xl leading-tight">
                  Meerblick, Buchten, Gastronomie und ein internationaler
                  Lebensstil.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-white/82">
                  Die Küste der nördlichen Costa Blanca ist durch die Verbindung
                  von Bergen und Meer besonders eindrucksvoll. Felsige Kaps,
                  geschützte Calas, Sandstrände und Yachthäfen liegen neben
                  historischen Ortskernen und modernen Wohngebieten. Der Flughafen
                  Alicante macht die Region gut erreichbar, während Altea, Calpe,
                  Moraira, Jávea und Dénia jeweils einen klar eigenen Charakter
                  besitzen.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white/82">
                  Sie treffen auf eine internationale Mischung aus spanischen
                  Einwohnern, Familien, Unternehmern, aktiven Ruheständlern,
                  Remote Workern und Zweitwohnungsbesitzern. In den größeren Orten
                  bleiben Restaurants, Geschäfte, Schulen, Sportvereine und die
                  medizinische Versorgung auch außerhalb der Sommersaison aktiv.
                </p>
                <div className="mt-8 rounded-[28px] border border-white/15 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                    Was schmeckt man an der Küste?
                  </p>
                  <p className="mt-3 leading-relaxed text-white/75">
                    Frischer Fisch, Meeresfrüchte, Arroz a banda, Arròs del
                    senyoret, Cocas, gesalzener Fisch, lokaler Moscatel und eine
                    starke Auswahl moderner mediterraner Haute Cuisine. Dénia ist
                    seit 2015 UNESCO Creative City of Gastronomy und verbindet
                    lokale Fischer, Landwirte, Märkte und Restaurants zu einer
                    ausgeprägten kulinarischen Identität.
                  </p>
                </div>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Für wen passt die Küste?
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Für Menschen, die gern nah am Wasser und zugleich mitten im
                  täglichen Leben wohnen.
                </h3>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Strand, Wassersport und Yachthafen in der Nähe",
                    "Internationale Infrastruktur und soziale Netzwerke",
                    "Restaurants und Geschäfte das ganze Jahr über",
                    "Gute Erreichbarkeit für Familie und Gäste",
                    "Apartments, moderne Villen und Immobilien mit Meerblick",
                    "Höhere Nachfrage und meist höhere Preise in Toplagen",
                  ].map((item) => (
                    <div key={item} className="rounded-[22px] bg-[#f6f1ea] p-5">
                      <p className="leading-relaxed text-stone-700">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-sm leading-relaxed text-stone-500">
                  Der Preis unterscheidet sich stark je nach Viertel, Immobilientyp,
                  Zustand, Grundstück, Entfernung zum Meer und Aussicht. Ein
                  Apartment im Stadtzentrum lässt sich nicht direkt mit einer Villa
                  auf einem exklusiven Hügel oder an einer geschützten Bucht
                  vergleichen.
                </p>
              </div>
            </div>

            <div className="border-t border-stone-200 p-8 md:p-12 lg:p-16">
              <div className="mb-10 max-w-4xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Orte an der Küste
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Vom künstlerischen Altea und authentischen Benissa bis zum kulinarischen Dénia.
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
                        alt={`${place.name} an der nördlichen Costa Blanca`}
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
                        Richtwert Juni 2026 · {place.price}
                      </p>
                      <p className="mt-4 leading-relaxed text-stone-600">
                        {place.text}
                      </p>
                      <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-[#1e2a3a]">
                        {place.name} entdecken →
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
                  alt="Vall de Pop mit Weinbergen, Bergen und traditionellen Dörfern"
                  className="h-full min-h-[420px] w-full rounded-[30px] object-cover"
                />
                <img
                  src="/images/alcalali.png"
                  alt="Alcalalí im Vall de Pop"
                  className="h-full min-h-[420px] w-full rounded-[30px] object-cover"
                />
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Region 2 · Das Vall de Pop
                </p>
                <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Fincas, Weinberge und authentisches Dorfleben zwischen den
                  Bergen.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-700">
                  Das Vall de Pop liegt in der Marina Alta rund um den Fluss Xaló,
                  auch Gorgos genannt. Das Tal ist von Gebirgsketten umgeben und
                  geprägt von Dörfern, landwirtschaftlichen Terrassen, Weinbergen,
                  Oliven- und Zitrusbäumen sowie traditionellen Steinbauten. Das Meer
                  bleibt erreichbar, doch der Alltag ist deutlich ruhiger und
                  lokaler als an der Küste.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                  Hier finden Sie Dorfhäuser, Fincas, Landhäuser und Villen mit
                  mehr Grundstück und Privatsphäre. Die internationale Gemeinschaft
                  ist kleiner und stärker mit dem lokalen Leben verflochten.
                  Dorffeste, Familienbetriebe, Märkte, landwirtschaftliche
                  Traditionen, Wandern und Radfahren prägen die Atmosphäre stärker
                  als Strandpromenaden und saisonaler Trubel.
                </p>
                <div className="mt-8 rounded-[28px] bg-white/70 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                    Was schmeckt man im Tal?
                  </p>
                  <p className="mt-3 leading-relaxed text-stone-700">
                    Lokaler Wein und Mistela, Olivenöl, Mandeln, Johannisbrot,
                    Rosinen, handwerklich hergestellte Wurstwaren, Cocas,
                    Schmorgerichte und traditionelle Süßspeisen. Die Küche ist
                    bodenständiger und stärker mit den Jahreszeiten,
                    Familienbetrieben und Produkten aus der Region verbunden.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-black/5 p-8 md:p-12 lg:p-16">
              <div className="mb-10 max-w-4xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Drei Dörfer zum Entdecken
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Überschaubar wohnen – mit einer starken eigenen Identität.
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
                        alt={`${place.name} im Vall de Pop`}
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
                        {place.name} entdecken →
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
                  Preisunterschiede im richtigen Verhältnis
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  An der Küste zahlen Sie für Knappheit und Meerblick. Im Tal
                  erhalten Sie häufiger mehr Raum.
                </h2>
                <p className="mt-6 leading-relaxed text-stone-600">
                  Die folgenden Beträge sind durchschnittliche ausgeschriebene
                  Angebotspreise von idealista für Juni 2026. Es handelt sich weder
                  um tatsächlich erzielte Verkaufspreise noch um die Bewertung
                  einer einzelnen Immobilie.
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
              Welche Region passt zu Ihnen?
            </p>
            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
              Der beste Ort ist nicht automatisch der bekannteste.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-[30px] border border-white/15 bg-white/5 p-8">
                <h3 className="font-serif text-3xl">Wählen Sie die Küste, wenn Sie …</h3>
                <p className="mt-5 leading-relaxed text-white/75">
                  nah am Meer, am Hafen, an Restaurants und internationaler
                  Infrastruktur wohnen möchten; ein lebendigeres soziales Umfeld
                  schätzen; gute Erreichbarkeit wichtig finden; oder eine Immobilie
                  suchen, die sich für Familienbesuche und saisonale Nutzung eignet.
                </p>
              </div>
              <div className="rounded-[30px] border border-white/15 bg-white/5 p-8">
                <h3 className="font-serif text-3xl">
                  Wählen Sie das Vall de Pop, wenn Sie …
                </h3>
                <p className="mt-5 leading-relaxed text-white/75">
                  Ruhe, Privatsphäre, Natur und ein stärkeres Dorfgefühl suchen;
                  von einer Finca oder mehr Grundstück träumen; Wandern, Radfahren
                  und lokale Gastronomie wichtig finden; und lieber in Raum
                  investieren als einen Aufpreis für die unmittelbare Meeresnähe zu
                  zahlen.
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-4xl text-xl leading-relaxed text-white/85">
              Nordic Move hilft Ihnen mit einem persönlichen Area Match, Ihre
              Wohnwünsche, Ihr Budget, Ihre Interessen und Zukunftspläne in die
              Regionen zu übersetzen, die wirklich zu Ihrem Leben passen.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/de/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Starten Sie mit Ihrem Area Match
              </a>
              <a
                href="/de/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
              >
                Besprechen Sie Ihre Wohnpläne
              </a>
            </div>
          </div>
        </section>

        {/* BRONNEN */}
        <section className="px-8 pb-20">
          <div className="mx-auto max-w-7xl border-t border-stone-300 pt-8 text-sm leading-relaxed text-stone-500">
            <p>
              Die regionalen Informationen basieren auf offiziellen touristischen
              und kommunalen Quellen. Die Preisangaben beruhen auf
              idealista-Daten für Juni 2026 und sollten regelmäßig aktualisiert
              werden. Kleine Orte können aufgrund eines begrenzten und sehr
              unterschiedlichen Immobilienangebots stärkere Preisschwankungen
              aufweisen.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante-alacant/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Aktuelle Immobilienpreisberichte
              </a>
              <a
                href="https://valldepop.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Offizielle Informationen zum Vall de Pop
              </a>
              <a
                href="https://www.costablanca.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Tourismusverband Costa Blanca
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}