import type { Metadata } from "next";
import Link from "next/link";

const title =
  "Dénia vs Calpe: vilken stad passar bäst för att köpa bostad på Costa Blanca?";
const description =
  "Jämför Dénia och Calpe på Costa Blanca. Läs om livsstil, stränder, service, klimat, tillgänglighet, bostadskänsla och vilken stad som passar bäst för dig som vill köpa bostad i Spanien.";
const canonicalPath = "/sv/guides/denia-vs-calpe";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Dénia vs Calpe",
    "Dénia eller Calpe",
    "köpa bostad i Dénia",
    "köpa bostad i Calpe",
    "köpa bostad på Costa Blanca",
    "Costa Blanca North",
    "bo i Dénia",
    "bo i Calpe",
    "bästa platsen att bo på Costa Blanca",
    "Costa Blanca för pension",
    "fastigheter Dénia",
    "fastigheter Calpe",
    "flytta till Costa Blanca",
    "nordiska köpare Spanien",
    "köpa hus Spanien",
    "Costa Blanca livsstil",
  ],
  alternates: {
    canonical: canonicalPath,
    languages: {
      "sv-SE": canonicalPath,
    },
  },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "sv_SE",
    url: canonicalPath,
    siteName: "Nordic Move Spain",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const deniaHighlights = [
  "Mer stadskänsla",
  "Mer lokal vardag",
  "Stark gastronomi",
  "Större serviceutbud",
  "Mer variation mellan stad, strand och natur",
  "Mer intressant för längre vistelser",
  "Känd för Montgó naturpark och UNESCO-gastronomi",
];

const calpeHighlights = [
  "Mer strand- och semesterkänsla",
  "Mer kompakt kustort",
  "Starkare fokus på havsutsikt och strandnära lägen",
  "Ikonisk natur genom Peñón de Ifach",
  "Lättare att förstå direkt som semesterort",
  "Närmare Alicante flygplats än Dénia",
  "Tydlig Costa Blanca resortkänsla",
];

const deniaHomes = [
  "Lägenheter nära centrum",
  "Bostäder nära hamnen",
  "Villor i lugnare områden",
  "Hus nära Montgó",
  "Strandnära bostäder",
  "Områden med mer lokal känsla",
];

const calpeHomes = [
  "Havsutsikt",
  "Lägenheter nära stranden",
  "Strandpromenader",
  "Utsikt mot Peñón de Ifach",
  "Semesterbostäder",
  "Villor i sluttningar runt staden",
];

const deniaBestFor = [
  "Vill ha en mer levande stad året runt",
  "Uppskattar gastronomi och restauranger",
  "Vill ha mer lokal känsla",
  "Vill ha natur och Montgó nära",
  "Planerar längre vistelser eller permanent boende",
  "Vill ha mer variation mellan olika bostadsområden",
  "Inte vill vara beroende av en ren semesterort",
];

const calpeBestFor = [
  "Vill bo nära stranden",
  "Älskar havsutsikt",
  "Vill ha tydlig semesterkänsla",
  "Vill ha en mer kompakt kustort",
  "Vill ha Peñón de Ifach som ikonisk miljö",
  "Kommer ner för kortare vistelser",
  "Vill ha en bostad som är lätt att förstå och använda",
];

const decisionFactors = [
  "Hur ofta du kommer att vara i Spanien",
  "Om du vill bo permanent eller deltid",
  "Hur viktigt service året runt är",
  "Om du föredrar stadsliv eller strandliv",
  "Hur mycket du vill köra bil",
  "Vilken social miljö du vill ha",
  "Vilken typ av bostad som passar din budget",
];

const differences = [
  {
    number: "01",
    title: "Stadsliv vs semesterkänsla",
    paragraphs: [
      "Den största skillnaden mellan Dénia och Calpe är känslan.",
      "Dénia känns mer som en kuststad där människor lever året runt. Här finns en tydligare vardag, ett större centrum, hamn, butiker, restauranger, marknader och mer lokal energi.",
      "Calpe känns mer som en klassisk Costa Blanca-semesterort. Det är vackert, lättillgängligt och starkt kopplat till strand, promenad, havsutsikt och Peñón de Ifach.",
      "Det betyder inte att Calpe bara är för semester. Det betyder att upplevelsen är mer resortorienterad än i Dénia.",
    ],
    takeaway:
      "Dénia är ofta bättre för köpare som söker året-runt-liv på Costa Blanca, medan Calpe ofta passar köpare som söker strandnära boende och semesterkänsla.",
  },
  {
    number: "02",
    title: "Stränder och natur",
    paragraphs: [
      "Dénia har en längre och mer varierad kustlinje. Här finns bredare sandstränder i norr och mer klippiga, naturnära områden mot Las Rotas och Montgó. För köpare som vill ha variation mellan strand, natur och stad är Dénia starkt.",
      "Calpe har kortare kustlinje, men den är mycket ikonisk. Kombinationen av Peñón de Ifach, stränder, vikar, turkost vatten och strandpromenader gör Calpe visuellt starkt och lätt att älska vid första besöket.",
    ],
    takeaway: "Dénia erbjuder mer variation. Calpe erbjuder mer omedelbar wow-känsla.",
  },
  {
    number: "03",
    title: "Service och praktisk vardag",
    paragraphs: [
      "Dénia har ofta ett bredare serviceutbud tack vare sin storlek och regionala funktion. För köpare som planerar längre vistelser, pension eller permanent flytt kan detta vara en stor fördel.",
      "Calpe har också service, restauranger, butiker och internationell närvaro, men upplevelsen kan vara mer säsongspräglad i vissa områden. Under sommaren är Calpe livligt och internationellt. Utanför högsäsong kan vissa delar kännas lugnare.",
    ],
    takeaway:
      "Dénia är ofta bättre om du vill att vardagen ska fungera året runt. Calpe är ofta bättre om du vill ha enkel tillgång till hav, strand och semesterliv.",
  },
  {
    number: "04",
    title: "Bostadskänsla",
    paragraphs: [
      "I Dénia hittar man ofta större variation, från centrum- och hamnlägen till villor nära Montgó och bostäder vid stranden.",
      "I Calpe är bostadskänslan ofta tydligare kopplad till havsutsikt, strandpromenader, semesterbostäder och utsikt mot Peñón de Ifach.",
    ],
    takeaway:
      "Dénia känns mer blandad och vardaglig. Calpe känns mer visuell, havsnära och semesterdriven.",
    lists: [
      { title: "Vanliga lägen i Dénia", items: deniaHomes },
      { title: "Vanliga lägen i Calpe", items: calpeHomes },
    ],
  },
  {
    number: "05",
    title: "Tillgänglighet",
    paragraphs: [
      "Calpe ligger närmare Alicante flygplats än Dénia. För köpare som ofta kommer ner för kortare vistelser kan det vara en praktisk fördel.",
      "Dénia ligger längre norrut, ungefär mellan Alicante och Valencia. För längre vistelser spelar restiden ofta mindre roll, särskilt om man värderar stadsliv, gastronomi, natur och lokal vardag högre.",
    ],
    takeaway:
      "Calpe kan kännas enklare för korta resor. Dénia kan kännas starkare för längre perioder eller permanent liv.",
  },
  {
    number: "06",
    title: "För pension och längre vistelser",
    paragraphs: [
      "För pension eller längre vistelser är Dénia ofta ett starkt val om du vill ha ett mer komplett vardagsliv. Staden har mer lokal rytm, mer variation, mer service och en starkare känsla av att livet fortsätter även utanför sommarsäsongen.",
      "Calpe kan vara ett mycket bra val för pensionärer som prioriterar havet, promenader, utsikt, enkelhet och ett tydligt semesterklimat. Om du vill ha mer stadsliv och bredare vardagsfunktion kan Dénia däremot kännas mer hållbart över tid.",
    ],
  },
  {
    number: "07",
    title: "För nordiska köpare",
    paragraphs: [
      "Nordiska köpare söker ofta trygghet, tydlighet och en plats som fungerar även när semestern är över.",
      "Dénia kan passa dig som vill ha mer lokal förankring, restaurangliv, natur och vardagskvalitet. Calpe kan passa dig som vill ha en enklare semesterbas, närhet till stranden, vackra vyer och en bostad som är lätt att använda under kortare vistelser.",
      "Det viktiga är att inte välja en stad enbart på bilder. En bostad kan se perfekt ut, men om platsen inte passar din vardag blir köpet ändå fel.",
    ],
  },
];

const faqs = [
  {
    question: "Är Dénia bättre än Calpe för permanent boende?",
    answer:
      "Dénia passar ofta bättre för permanent boende eftersom staden har mer service, mer lokal vardag och en starkare året-runt-känsla. Calpe kan också fungera året runt, men har i många områden en mer tydlig semesterkaraktär.",
  },
  {
    question: "Är Calpe bättre än Dénia för strandliv?",
    answer:
      "Calpe är ofta starkare för köpare som vill ha strandpromenad, havsutsikt och enkel tillgång till stranden. Dénia har längre kust och mer variation, men strandupplevelsen är mer uppdelad mellan olika områden.",
  },
  {
    question: "Vilken stad är bäst för pension på Costa Blanca?",
    answer:
      "Dénia passar ofta pensionärer som vill ha mer stadsliv, gastronomi, natur och service året runt. Calpe passar ofta pensionärer som vill ha hav, promenader, utsikt och en tydligare semesterkänsla.",
  },
  {
    question: "Är Dénia eller Calpe bäst för nordiska köpare?",
    answer:
      "Båda kan passa nordiska köpare. Dénia är ofta starkare för längre vistelser och lokal vardag. Calpe är ofta starkare för kortare vistelser, strandliv och havsnära bostäder.",
  },
  {
    question: "Hur väljer jag mellan Dénia och Calpe?",
    answer:
      "Börja med din livsstil, inte med bostadsbilder. Fundera på hur ofta du är i Spanien, om du vill ha stadsliv eller strandliv, hur viktigt service året runt är och vilken typ av social miljö du söker.",
  },
];

const sources = [
  { label: "Officiell Dénia Tourism", href: "https://denia.net/en/" },
  {
    label: "UNESCO Creative Cities Network — Dénia",
    href: "https://www.unesco.org/en/creative-cities/denia",
  },
  { label: "Calpe Beaches", href: "https://www.calpe.es/en/beaches" },
  {
    label: "Peñón de Ifach — Calpe",
    href: "https://www.calpe.es/en/discover-calpe/natural-areas/pe%C3%B1on-de-ifach",
  },
  {
    label: "Calpe population update",
    href: "https://noticias.calp.es/en/noticia/calpe-increases-its-registered-population-26821-inhabitants",
  },
];

const internalLinks = [
  { label: "Area Match", href: "/sv/services/area-match" },
  { label: "Discovery Trips", href: "/sv/services/discovery-trips" },
  {
    label: "Purchase Safety Report",
    href: "/sv/services/purchase-safety-report",
  },
  { label: "Guide till Dénia", href: "/sv/regions/denia" },
  { label: "Guide till Calpe", href: "/sv/regions/calpe" },
  {
    label: "Bästa områdena på Costa Blanca North för pensionärer",
    href: "/sv/guides/best-areas-costa-blanca-north-retirees",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: title,
      description,
      inLanguage: "sv-SE",
      mainEntityOfPage: canonicalPath,
      author: {
        "@type": "Organization",
        name: "Nordic Move Spain",
      },
      publisher: {
        "@type": "Organization",
        name: "Nordic Move Spain",
      },
      about: [
        { "@type": "Place", name: "Dénia" },
        { "@type": "Place", name: "Calpe" },
        { "@type": "Place", name: "Costa Blanca North" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Hem",
          item: "/sv",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guider",
          item: "/sv/guides",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Dénia vs Calpe",
          item: canonicalPath,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

type ListCardProps = {
  title: string;
  items: readonly string[];
  eyebrow?: string;
};

function ListCard({ title, items, eyebrow }: ListCardProps) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
      {eyebrow ? (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="text-2xl font-semibold tracking-tight text-stone-950">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-stone-700">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DeniaVsCalpePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="bg-stone-50 text-stone-800">
        <header className="border-b border-stone-200 bg-gradient-to-b from-amber-50 to-stone-50">
          <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
            <nav aria-label="Brödsmulor" className="text-sm text-stone-600">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link className="transition hover:text-stone-950" href="/sv">
                    Hem
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    className="transition hover:text-stone-950"
                    href="/sv/guides"
                  >
                    Guider
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-medium text-stone-950">
                  Dénia vs Calpe
                </li>
              </ol>
            </nav>
          </div>

          <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:pb-24 lg:pt-16">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
                Costa Blanca North · Områdesguide
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-stone-950 sm:text-5xl lg:text-6xl">
                Dénia vs Calpe: vilken stad passar bäst för att köpa bostad på
                Costa Blanca?
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-700 sm:text-xl">
                Dénia och Calpe ligger båda på Costa Blanca North, men de
                erbjuder två väldigt olika typer av livsstil. Här jämför vi
                vardag, stränder, service, bostadskänsla och tillgänglighet så
                att du kan välja plats utifrån hur du faktiskt vill leva.
              </p>
            </div>

            <aside className="rounded-3xl border border-amber-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
                Den viktigaste frågan
              </p>
              <p className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-stone-950">
                Vilken plats passar bäst till hur du faktiskt vill leva?
              </p>
            </aside>
          </div>
        </header>

        <article>
          <section aria-labelledby="kort-svar" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
            <div className="rounded-[2rem] bg-stone-950 px-6 py-8 text-white sm:px-10 sm:py-10 lg:px-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                Kort svar
              </p>
              <h2 id="kort-svar" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Dénia för vardagsliv. Calpe för hav och semesterlogik.
              </h2>
              <div className="mt-7 grid gap-6 text-base leading-7 text-stone-200 md:grid-cols-2">
                <p>
                  <strong className="text-white">Välj Dénia</strong> om du vill
                  ha mer stadsliv, gastronomi, lokal vardag, natur, service året
                  runt och en mer autentisk känsla. Dénia passar ofta bättre för
                  längre vistelser eller permanent boende.
                </p>
                <p>
                  <strong className="text-white">Välj Calpe</strong> om du vill
                  ha strandnära boende, havsutsikt, en kompakt kustort, tydlig
                  semesterkänsla och den ikoniska miljön runt Peñón de Ifach.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="snabb-jamforelse" className="border-y border-stone-200 bg-white">
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                  Överblick
                </p>
                <h2 id="snabb-jamforelse" className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                  Snabb jämförelse mellan Dénia och Calpe
                </h2>
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                <ListCard title="Dénia" items={deniaHighlights} eyebrow="Mer vardagsstad" />
                <ListCard title="Calpe" items={calpeHighlights} eyebrow="Mer kustresort" />
              </div>
            </div>
          </section>

          <section aria-labelledby="fakta" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                Bakgrund
              </p>
              <h2 id="fakta" className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                Fakta om Dénia och Calpe
              </h2>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <section className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm sm:p-9">
                <h3 className="text-3xl font-semibold tracking-tight text-stone-950">Dénia</h3>
                <div className="mt-5 space-y-5 leading-7 text-stone-700">
                  <p>
                    Dénia ligger i Marina Alta i provinsen Alicante och är
                    huvudort i regionen. Enligt den officiella turistinformationen
                    har Dénia ungefär 50 000 invånare, en yta på 66,18 km² och mer
                    än 20 kilometer kust med både sandstränder och klippiga vikar.
                  </p>
                  <p>
                    Staden är känd för Montgó naturpark, marina naturreservat vid
                    Cabo de San Antonio och sin starka matkultur. Dénia är utnämnd
                    till UNESCO Creative City of Gastronomy, vilket gör staden
                    särskilt attraktiv för dig som uppskattar restauranger,
                    lokala råvaror och marknader.
                  </p>
                  <p className="font-medium text-stone-950">
                    För en bostadsköpare känns Dénia ofta mer som en riktig stad
                    att leva i, inte bara som en plats för semester.
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/sv/regions/denia"
                    className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-900 transition hover:border-stone-950"
                  >
                    Läs områdesguiden
                  </Link>
                  <a
                    href="https://denia.net/en/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full px-4 py-2 text-sm font-semibold text-amber-800 transition hover:bg-amber-50"
                  >
                    Officiell turistinformation ↗
                  </a>
                </div>
              </section>

              <section className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm sm:p-9">
                <h3 className="text-3xl font-semibold tracking-tight text-stone-950">Calpe</h3>
                <div className="mt-5 space-y-5 leading-7 text-stone-700">
                  <p>
                    Calpe ligger också på Costa Blanca North och är mest känt för
                    Peñón de Ifach, den stora kalkstensklippan som reser sig över
                    havet. Enligt Calpes turistinformation är klippan 332 meter
                    hög, cirka 50 000 m² stor och ungefär en kilometer lång.
                  </p>
                  <p>
                    Calpe har cirka 13 kilometer kust och 14 stränder och vikar.
                    Orten har ett medelhavsklimat med cirka 3 180 soltimmar per år
                    och en genomsnittlig årstemperatur på omkring 18°C, enligt
                    kommunens turistinformation.
                  </p>
                  <p className="font-medium text-stone-950">
                    Calpe är särskilt starkt för dig som vill ha strandliv,
                    havsnära lägenheter, promenadstråk, utsikt och en tydlig
                    kustlivsstil.
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/sv/regions/calpe"
                    className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-900 transition hover:border-stone-950"
                  >
                    Läs områdesguiden
                  </Link>
                  <a
                    href="https://www.calpe.es/en/beaches"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full px-4 py-2 text-sm font-semibold text-amber-800 transition hover:bg-amber-50"
                  >
                    Calpes stränder ↗
                  </a>
                </div>
              </section>
            </div>
          </section>

          <section aria-labelledby="skillnader" className="border-y border-stone-200 bg-white">
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                  Sju avgörande skillnader
                </p>
                <h2 id="skillnader" className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                  Vad skiljer Dénia från Calpe i praktiken?
                </h2>
              </div>

              <div className="mt-12 divide-y divide-stone-200 border-y border-stone-200">
                {differences.map((difference) => (
                  <section key={difference.number} className="grid gap-6 py-10 lg:grid-cols-[100px_minmax(0,1fr)] lg:py-14">
                    <p className="text-3xl font-semibold text-amber-700">{difference.number}</p>
                    <div className="max-w-4xl">
                      <h3 className="text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">
                        {difference.title}
                      </h3>
                      <div className="mt-5 space-y-4 text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
                        {difference.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

                      {difference.lists ? (
                        <div className="mt-7 grid gap-5 md:grid-cols-2">
                          {difference.lists.map((list) => (
                            <div key={list.title} className="rounded-2xl bg-stone-50 p-5">
                              <h4 className="font-semibold text-stone-950">{list.title}</h4>
                              <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-700">
                                {list.items.map((item) => (
                                  <li key={item} className="flex gap-2">
                                    <span aria-hidden="true" className="text-amber-700">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {difference.takeaway ? (
                        <p className="mt-7 border-l-4 border-amber-500 pl-5 font-semibold leading-7 text-stone-950">
                          {difference.takeaway}
                        </p>
                      ) : null}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="vem-passar" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                Personlig matchning
              </p>
              <h2 id="vem-passar" className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                Vilken stad passar bäst för dig?
              </h2>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <ListCard title="Dénia passar bäst om du…" items={deniaBestFor} />
              <ListCard title="Calpe passar bäst om du…" items={calpeBestFor} />
            </div>
          </section>

          <section aria-labelledby="vilken-bast" className="bg-amber-50">
            <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:py-24">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-800">
                  Slutsats
                </p>
                <h2 id="vilken-bast" className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                  Vilken stad är bäst: Dénia eller Calpe?
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-8 text-stone-700">
                  <p>Det finns inget generellt rätt svar.</p>
                  <p>
                    Dénia är ofta bättre för köpare som söker ett mer komplett
                    vardagsliv. Calpe är ofta bättre för köpare som söker strand,
                    utsikt och semesterkänsla.
                  </p>
                  <p>
                    Välj därför inte enbart utifrån den snyggaste bostadsannonsen.
                    Börja med hur du vill använda bostaden och hur vardagen ska
                    fungera när semestern är över.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-8">
                <h3 className="text-xl font-semibold text-stone-950">Låt beslutet utgå från:</h3>
                <ul className="mt-5 space-y-3 text-stone-700">
                  {decisionFactors.map((factor) => (
                    <li key={factor} className="flex gap-3">
                      <span aria-hidden="true" className="mt-0.5 font-bold text-amber-700">✓</span>
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="perspektiv" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                    Nordic Move Spain-perspektivet
                  </p>
                  <h2 id="perspektiv" className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                    Börja inte med bostadsannonser. Börja med livsstilen.
                  </h2>
                  <div className="mt-6 space-y-5 leading-7 text-stone-700 sm:text-lg sm:leading-8">
                    <p>
                      Innan du väljer mellan Dénia och Calpe hjälper vi dig att
                      förstå vilken plats som passar din vardag, dina
                      framtidsplaner och din riskprofil. Därefter kan vi skapa en
                      mer fokuserad shortlist och hjälpa dig att se bortom bilderna.
                    </p>
                    <p>
                      När en bostad blir seriöst intressant kan Purchase Safety,
                      dokumentkontroll och oberoende riskfrågor hjälpa dig att
                      fatta ett tryggare beslut.
                    </p>
                  </div>
                </div>
                <ol className="space-y-3 text-lg font-semibold text-stone-950">
                  <li className="rounded-2xl bg-stone-50 p-5">1. Först rätt område.</li>
                  <li className="rounded-2xl bg-stone-50 p-5">2. Sedan rätt bostad.</li>
                  <li className="rounded-2xl bg-stone-950 p-5 text-white">3. Sedan en tryggare köpprocess.</li>
                </ol>
              </div>
            </div>
          </section>

          <section aria-labelledby="faq" className="border-y border-stone-200 bg-white">
            <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                Vanliga frågor
              </p>
              <h2 id="faq" className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                FAQ om Dénia vs Calpe
              </h2>
              <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-lg font-semibold text-stone-950 marker:content-none">
                      <span>{faq.question}</span>
                      <span aria-hidden="true" className="text-2xl font-light text-amber-700 transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 max-w-3xl pr-8 leading-7 text-stone-700">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="cta" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
            <div className="overflow-hidden rounded-[2rem] bg-stone-950 px-7 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
                    Nästa steg
                  </p>
                  <h2 id="cta" className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                    Osäker på om Dénia, Calpe eller en annan ort på Costa Blanca passar bäst?
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
                    Börja med Nordic Move Spain Area Match Report och få en mer
                    fokuserad bild av vilka områden som passar din vardag och dina
                    framtidsplaner.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link
                    href="/sv/services/area-match"
                    className="rounded-full bg-amber-400 px-6 py-3.5 text-center font-bold text-stone-950 transition hover:bg-amber-300"
                  >
                    Starta ditt Area Match Report
                  </Link>
                  <Link
                    href="/sv/contact"
                    className="rounded-full border border-stone-600 px-6 py-3.5 text-center font-semibold text-white transition hover:border-white"
                  >
                    Boka ett personligt samtal
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="las-vidare" className="border-t border-stone-200 bg-white">
            <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <h2 id="las-vidare" className="text-2xl font-semibold tracking-tight text-stone-950">
                    Läs vidare
                  </h2>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {internalLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-flex font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition hover:text-amber-800 hover:decoration-amber-500"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-stone-950">Källor</h2>
                  <ul className="mt-5 space-y-3">
                    {sources.map((source) => (
                      <li key={source.href}>
                        <a
                          href={source.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition hover:text-amber-800 hover:decoration-amber-500"
                        >
                          {source.label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}