import type { Metadata } from "next";

const SITE_URL = "https://www.nordicmovespain.com";
const PAGE_PATH = "/de/guides/lebenshaltungskosten-spanien-pro-monat";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const ASSESSMENT_URL = "/de/relocation-assessment";
const GUIDES_URL = "/de/guides";

const sources = {
  ine:
    "https://www.ine.es/dyngs/Prensa/EPF2025.htm",
  numbeoAlicante:
    "https://www.numbeo.com/cost-of-living/in/Alicante",
  numbeoValencia:
    "https://www.numbeo.com/cost-of-living/in/Valencia",
  waterAlicante:
    "https://www.aguasdealicante.es/en/tarifas",
  irnr:
    "https://sede.agenciatributaria.gob.es/Sede/no-residentes/irnr-sin-establecimiento-permanente/cuestiones-especificas-sobre-tributacion-inmuebles/renta-imputada-inmueble-urbano-uso-propio.html",
  irnrRates:
    "https://sede.agenciatributaria.gob.es/Sede/no-residentes/irnr-sin-establecimiento-permanente/tipos-gravamen-irnr-sin-establecimiento-permanente.html",
  golfOliva:
    "https://www.olivanova.com/sport-and-leisure-golf-rates",
  gymBasicFit:
    "https://www.basic-fit.com/en-es/gyms/price",
  rentMoraira:
    "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/alquiler/comunitat-valenciana/alicante-alacant/moraira/",
  rentJavea:
    "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/alquiler/comunitat-valenciana/alicante-alacant/javea-xabia/",
  rentCalpe:
    "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/alquiler/comunitat-valenciana/alicante-alacant/calpe/",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Lebenshaltungskosten Spanien 2026: Was kostet das Leben pro Monat?",
  description:
    "Was kostet das Leben in Spanien wirklich? Monatliche Kosten an der Costa Blanca für Strom, Wasser, Lebensmittel, Restaurants, Auto, Steuern, Gym, Golf und Wohnen – mit realistischen Budgets für 2026.",
  keywords: [
    "Lebenshaltungskosten Spanien 2026",
    "was kostet leben in Spanien pro Monat",
    "Costa Blanca Lebenshaltungskosten",
    "Auswandern Spanien Kosten",
    "monatliche Kosten Spanien",
    "Stromkosten Spanien",
    "Lebensmittelpreise Spanien",
    "Restaurantpreise Costa Blanca",
    "Golf Kosten Costa Blanca",
    "Fitnessstudio Spanien Kosten",
    "Nebenkosten Haus Spanien",
    "IBI Spanien Kosten",
    "Nichtresidentensteuer Spanien Immobilie",
    "Moraira Lebenshaltungskosten",
    "Jávea Lebenshaltungskosten",
    "Calpe Lebenshaltungskosten",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: PAGE_PATH,
    siteName: "Nordic Move Spain",
    title: "Lebenshaltungskosten Spanien 2026: Was kostet das Leben an der Costa Blanca?",
    description:
      "Strom, Wasser, Lebensmittel, Restaurants, Auto, Steuern, Gym und Golf: ein realistisches Monatsbudget für das Leben an der Costa Blanca.",
    publishedTime: "2026-07-24T00:00:00.000Z",
    modifiedTime: "2026-07-24T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Was kostet das Leben in Spanien pro Monat?",
    description:
      "Realistische Lebenshaltungskosten 2026 für deutsche Käufer und Auswanderer an der Costa Blanca.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const monthlyCosts = [
  {
    category: "Lebensmittel & Haushalt",
    single: "250–350 €",
    couple: "450–600 €",
    note:
      "Supermarkt, Drogerie und normale Haushaltskäufe. Wer viel auf Märkten oder hochwertig einkauft, liegt darüber.",
  },
  {
    category: "Strom, Wasser & Müll",
    single: "100–170 €",
    couple: "160–300 €",
    note:
      "Wohnungsgröße, Klimaanlage, Pool, elektrische Warmwasserbereitung und Tarif machen den größten Unterschied.",
  },
  {
    category: "Internet & Mobilfunk",
    single: "35–50 €",
    couple: "50–75 €",
    note:
      "Alicante liegt bei Marktvergleichsdaten bei rund 26 € für Breitband und rund 16 € je Mobilfunktarif.",
  },
  {
    category: "Restaurants & Cafés",
    single: "120–250 €",
    couple: "250–450 €",
    note:
      "Bei ein bis zwei Restaurantbesuchen pro Woche. Häufiges Essen in touristischen Küstenlagen erhöht das Budget deutlich.",
  },
  {
    category: "Auto & Mobilität",
    single: "150–280 €",
    couple: "220–400 €",
    note:
      "Budgetwert für Kraftstoff, Versicherung, Wartung, Steuer und gelegentliches Parken. Finanzierung oder Leasing nicht enthalten.",
  },
  {
    category: "Gym & Freizeit",
    single: "30–80 €",
    couple: "60–160 €",
    note:
      "Einfache Fitnessstudios starten um etwa 25 € je vier Wochen; Premium-Clubs, Padel und Kurse kosten mehr.",
  },
  {
    category: "Immobilienkosten",
    single: "100–220 €",
    couple: "180–450 €",
    note:
      "Monatlich umgelegtes Budget für IBI, IRNR, Versicherung, Eigentümergemeinschaft und kleinere laufende Kosten – stark objektabhängig.",
  },
  {
    category: "Instandhaltungsrücklage",
    single: "75–150 €",
    couple: "150–300 €",
    note:
      "Für Klimaanlage, Pool, Garten, Geräte, Malerarbeiten und Reparaturen. Bei älteren Villen sollte die Rücklage höher sein.",
  },
  {
    category: "Gesundheit & Versicherung",
    single: "0–150 €",
    couple: "0–300 €",
    note:
      "Hängt stark davon ab, ob Sie über das öffentliche System, S1 oder eine private Krankenversicherung abgesichert sind.",
  },
  {
    category: "Persönliches & Sonstiges",
    single: "100–180 €",
    couple: "150–300 €",
    note:
      "Kleidung, Friseur, kleine Anschaffungen, Streaming, Apotheke und spontane Ausgaben.",
  },
];

const scenarios = [
  {
    title: "1 Person · eigene Wohnung",
    amount: "ca. 1.050–1.650 €",
    subtitle: "pro Monat ohne Hypothek oder Miete",
    text:
      "Realistisch für eine Person, die normal einkauft, ein Auto nutzt, gelegentlich essen geht und keine besonders kostenintensive Freizeit hat.",
  },
  {
    title: "Paar · eigene Wohnung oder Villa",
    amount: "ca. 1.800–3.200 €",
    subtitle: "pro Monat ohne Hypothek oder Miete",
    text:
      "Ein vernünftiges Budget für zwei Personen an der Costa Blanca mit Auto, Restaurants, laufenden Immobilienkosten und einer Rücklage für Wartung.",
  },
  {
    title: "Paar · aktiver Costa-Blanca-Lifestyle",
    amount: "ca. 2.500–4.000+ €",
    subtitle: "pro Monat ohne Hypothek oder Miete",
    text:
      "Mit häufigeren Restaurantbesuchen, Golf, Premium-Fitness, mehr Autofahrten, höherem Energieverbrauch und großzügigerer Freizeitplanung.",
  },
];

const faqs = [
  {
    question: "Wie viel Geld braucht man pro Monat zum Leben in Spanien?",
    answer:
      "Wer an der Costa Blanca in einer eigenen, schuldenfreien Immobilie lebt, sollte für eine Person grob mit 1.050 bis 1.650 Euro pro Monat rechnen. Für ein Paar sind etwa 1.800 bis 3.200 Euro ein realistischer Planungsrahmen. Häufiges Golfen, Restaurantbesuche, große Villen mit Pool und private Krankenversicherung können das Budget deutlich erhöhen.",
  },
  {
    question: "Ist das Leben in Spanien günstiger als in Deutschland?",
    answer:
      "Viele alltägliche Ausgaben wie Restaurantbesuche, Mobilfunk, bestimmte Dienstleistungen und teilweise Lebensmittel können günstiger sein. Küstenimmobilien, internationale Schulen, hochwertige Restaurants, Golf und touristische Lagen sind dagegen nicht automatisch billig. Entscheidend ist vor allem Ihr Wohnort und Lebensstil.",
  },
  {
    question: "Wie hoch sind die Stromkosten in Spanien?",
    answer:
      "Für eine Wohnung kann ein realistischer Planungswert häufig zwischen etwa 60 und 120 Euro Strom pro Monat liegen. Bei einer Villa mit Pool, elektrischer Warmwasserbereitung und intensiver Klimaanlage können Sommermonate deutlich höher ausfallen. Marktvergleichsdaten für Alicante nennen für Strom, Heizung/Kühlung, Wasser und Müll zusammen rund 130 Euro monatlich bei einer 85-m²-Wohnung.",
  },
  {
    question: "Wie viel kosten Lebensmittel an der Costa Blanca?",
    answer:
      "Das spanische Statistikamt meldete für 2025 durchschnittliche Haushaltsausgaben von 5.626 Euro jährlich für Lebensmittel und alkoholfreie Getränke, rund 469 Euro pro Haushalt und Monat. Für eine einzelne Person sind ungefähr 250 bis 350 Euro und für ein Paar etwa 450 bis 600 Euro ein brauchbarer Planungswert.",
  },
  {
    question: "Was kostet Essen im Restaurant in Alicante oder an der Costa Blanca?",
    answer:
      "Aktuelle Marktdaten für Alicante nennen etwa 15 Euro für ein einfaches Restaurantgericht und rund 55 Euro für ein Drei-Gänge-Menü für zwei Personen ohne Getränke. In Moraira, Jávea und anderen touristischen Küstenorten kann das Preisniveau in gefragten Restaurants höher liegen.",
  },
  {
    question: "Was kostet ein Fitnessstudio in Spanien?",
    answer:
      "Einfache Fitnessketten beginnen bei ungefähr 25 Euro je vier Wochen. Der gemeldete Durchschnitt für Alicante liegt bei rund 36 Euro pro Monat. Clubs mit Pool, Spa, Tennis, Padel oder umfangreichen Kursangeboten können deutlich teurer sein.",
  },
  {
    question: "Wie teuer ist Golf an der Costa Blanca?",
    answer:
      "Die Preise hängen stark vom Platz, der Saison und Mitgliedschaften ab. Als konkretes Beispiel verlangt Oliva Nova Golf 2026 für Nichtmitglieder 90 Euro für 18 Loch. Ein 10er-Paket kostet dort 650 Euro, also rechnerisch 65 Euro pro Runde. Wer viermal im Monat spielt, sollte daher grob 260 bis 360 Euro pro Person allein für Greenfees einplanen.",
  },
  {
    question: "Welche Steuern fallen monatlich bei einem eigenen Haus in Spanien an?",
    answer:
      "IBI wird kommunal festgesetzt und normalerweise jährlich gezahlt. Nichtresidente deutsche Eigentümer können zusätzlich IRNR auf eine fiktive Immobilienrente zahlen. Für EU-Ansässige gilt beim IRNR grundsätzlich ein Steuersatz von 19 Prozent. Für ein Monatsbudget sollten jährliche Steuern, Versicherung und gegebenenfalls Community-Gebühren auf zwölf Monate umgelegt werden.",
  },
  {
    question: "Wie teuer ist Mieten in Moraira, Jávea oder Calpe?",
    answer:
      "Idealista meldete für Juni 2026 durchschnittliche Angebotsmieten von 12,6 Euro pro Quadratmeter in Moraira sowie 14,5 Euro pro Quadratmeter in Jávea/Xàbia und Calpe. Eine 80-m²-Wohnung entspräche rechnerisch etwa 1.008 Euro in Moraira beziehungsweise rund 1.160 Euro in Jávea oder Calpe. Einzelne Objekte und saisonale Angebote können stark abweichen.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Lebenshaltungskosten Spanien 2026: Was kostet das Leben an der Costa Blanca pro Monat?",
  description:
    "Monatliche Kosten für Strom, Wasser, Lebensmittel, Restaurants, Auto, Steuern, Gym, Golf und Wohnen an der Costa Blanca.",
  inLanguage: "de-DE",
  datePublished: "2026-07-24",
  dateModified: "2026-07-24",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  author: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: SITE_URL,
  },
  citation: Object.values(sources),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/de`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ratgeber",
      item: `${SITE_URL}${GUIDES_URL}`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Lebenshaltungskosten Spanien",
      item: PAGE_URL,
    },
  ],
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function CostOfLivingSpainPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
        <article>
          <header className="bg-[#1e2a3a] px-6 py-24 text-white md:px-8 md:py-32">
            <div className="mx-auto max-w-7xl">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 text-sm text-white/60"
              >
                <a href="/de" className="transition hover:text-white">
                  Home
                </a>
                <span>/</span>
                <a href={GUIDES_URL} className="transition hover:text-white">
                  Ratgeber
                </a>
                <span>/</span>
                <span>Lebenshaltungskosten</span>
              </nav>

              <div className="mt-16 grid items-end gap-14 lg:grid-cols-[1fr_0.46fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-[#c8a063]">
                    COSTA BLANCA · LEBENSHALTUNGSKOSTEN · 2026
                  </p>

                  <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.04] md:text-7xl">
                    Was kostet das Leben in Spanien pro Monat?
                  </h1>

                  <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/80">
                    Strom, Wasser, Lebensmittel, Restaurants, Auto, Steuern,
                    Fitnessstudio und Golf: Hier sehen Sie, welches Monatsbudget
                    für das Leben an der Costa Blanca wirklich realistisch ist.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href={ASSESSMENT_URL}
                      className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#b48a4f]"
                    >
                      Relocation Assessment starten
                    </a>
                    <a
                      href={GUIDES_URL}
                      className="rounded-full border border-white/60 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1e2a3a]"
                    >
                      Alle Ratgeber
                    </a>
                  </div>
                </div>

                <aside className="rounded-[32px] border border-white/15 bg-white/5 p-8">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                    Schnelle Antwort
                  </p>
                  <p className="mt-5 font-serif text-4xl leading-tight">
                    Für ein Paar mit eigener Immobilie:
                  </p>
                  <p className="mt-5 font-serif text-5xl text-[#d6b47d]">
                    1.800–3.200 €
                  </p>
                  <p className="mt-4 leading-relaxed text-white/70">
                    pro Monat ist ein realistischer Planungsrahmen – ohne
                    Hypothek oder Miete. Golf, große Villa, Pool und häufige
                    Restaurantbesuche erhöhen das Budget.
                  </p>
                </aside>
              </div>
            </div>
          </header>

          <section className="border-b border-stone-200 bg-white px-6 py-12 md:px-8">
            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
              <div className="rounded-[26px] bg-[#f6f1ea] p-7">
                <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                  Spanien gesamt
                </p>
                <p className="mt-3 font-serif text-3xl text-[#1e2a3a]">
                  2.925 € / Monat
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  Durchschnittliche Haushaltsausgaben 2025 laut INE:
                  35.101 € pro Jahr.
                </p>
              </div>

              <div className="rounded-[26px] bg-[#f6f1ea] p-7">
                <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                  Lebensmittel
                </p>
                <p className="mt-3 font-serif text-3xl text-[#1e2a3a]">
                  469 € / Haushalt
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  Spanischer Durchschnitt 2025 für Lebensmittel und
                  alkoholfreie Getränke.
                </p>
              </div>

              <div className="rounded-[26px] bg-[#f6f1ea] p-7">
                <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                  Alicante Nebenkosten
                </p>
                <p className="mt-3 font-serif text-3xl text-[#1e2a3a]">
                  ca. 130 €
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  Marktwert für Strom, Heizung/Kühlung, Wasser und Müll bei
                  einer 85-m²-Wohnung.
                </p>
              </div>
            </div>
          </section>

          <section className="px-6 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                Monatsbudget
              </p>
              <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Drei realistische Budgets für das Leben an der Costa Blanca
              </h2>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {scenarios.map((scenario) => (
                  <article
                    key={scenario.title}
                    className="rounded-[32px] bg-white p-8 shadow-sm"
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">
                      {scenario.title}
                    </p>
                    <p className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                      {scenario.amount}
                    </p>
                    <p className="mt-2 text-sm font-medium text-[#9b743d]">
                      {scenario.subtitle}
                    </p>
                    <p className="mt-6 leading-relaxed text-stone-600">
                      {scenario.text}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-10 rounded-[28px] bg-[#e9dfd2] p-8">
                <p className="leading-relaxed text-stone-700">
                  <strong className="text-[#1e2a3a]">
                    Warum diese Zahlen nicht identisch mit dem spanischen
                    Durchschnitt sind:
                  </strong>{" "}
                  Der INE-Durchschnitt von rund 2.925 € pro Haushalt und Monat
                  umfasst ganz Spanien und auch Wohnkosten. Viele internationale
                  Käufer an der Costa Blanca besitzen ihre Immobilie bereits.
                  Deshalb ist ein Budget ohne Miete oder Hypothek für diese
                  Zielgruppe aussagekräftiger.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#d6d2cc] px-6 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#8a6635]">
                Alle laufenden Kosten
              </p>
              <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Was sollte jeden Monat in Ihrem Budget stehen?
              </h2>

              <div className="mt-12 overflow-x-auto rounded-[30px] bg-white shadow-sm">
                <table className="min-w-[900px] w-full border-collapse text-left">
                  <thead className="bg-[#1e2a3a] text-white">
                    <tr>
                      <th className="px-6 py-5 text-sm uppercase tracking-[0.14em]">
                        Kostenposten
                      </th>
                      <th className="px-6 py-5 text-sm uppercase tracking-[0.14em]">
                        1 Person
                      </th>
                      <th className="px-6 py-5 text-sm uppercase tracking-[0.14em]">
                        Paar
                      </th>
                      <th className="px-6 py-5 text-sm uppercase tracking-[0.14em]">
                        Einordnung
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyCosts.map((cost) => (
                      <tr
                        key={cost.category}
                        className="border-b border-stone-100 align-top last:border-0"
                      >
                        <th className="px-6 py-6 font-serif text-xl font-normal text-[#1e2a3a]">
                          {cost.category}
                        </th>
                        <td className="px-6 py-6 font-semibold text-[#9b743d]">
                          {cost.single}
                        </td>
                        <td className="px-6 py-6 font-semibold text-[#9b743d]">
                          {cost.couple}
                        </td>
                        <td className="max-w-xl px-6 py-6 text-sm leading-relaxed text-stone-600">
                          {cost.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-stone-600">
                Die Spannen sind Planungswerte für die Costa Blanca und keine
                amtlichen Pauschalen. Einzelne Haushalte können deutlich darüber
                oder darunter liegen.
              </p>
            </div>
          </section>

          <section className="px-6 py-24 md:px-8">
            <div className="mx-auto max-w-5xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                Strom & Wasser
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Eine Villa mit Pool ist energetisch eine andere Welt als ein
                Apartment
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-700">
                Für Alicante melden aktuelle Marktvergleichsdaten rund{" "}
                <strong>130 € monatlich</strong> für die grundlegenden
                Nebenkosten einer 85-m²-Wohnung: Strom, Heizung beziehungsweise
                Kühlung, Wasser und Müll zusammen. Das ist ein brauchbarer
                Ausgangspunkt, aber keine Villa-Kalkulation.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-[30px] bg-white p-8 shadow-sm">
                  <h3 className="font-serif text-3xl text-[#1e2a3a]">
                    Apartment
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone-600">
                    Bei normaler Nutzung sind etwa 100–170 € pro Monat für
                    Strom, Wasser und Müll ein sinnvoller Planungsrahmen.
                    Klimaanlage im Hochsommer kann den Stromanteil erhöhen.
                  </p>
                </div>

                <div className="rounded-[30px] bg-[#1e2a3a] p-8 text-white">
                  <h3 className="font-serif text-3xl">Villa mit Pool</h3>
                  <p className="mt-5 leading-relaxed text-white/75">
                    180–350 € und in intensiven Sommermonaten auch mehr sind
                    realistischer, wenn Poolpumpe, Gartenbewässerung,
                    Klimaanlage, Warmwasser und größere Wohnflächen
                    zusammenkommen.
                  </p>
                </div>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                Wasserpreise sind kommunal. Aguas de Alicante bestätigt, dass
                Tarife aus einem festen und verbrauchsabhängigen Teil bestehen
                und je nach Gemeinde variieren.
              </p>
            </div>
          </section>

          <section className="bg-white px-6 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                    Lebensmittel
                  </p>
                  <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                    Supermarkt: rund 450–600 € für ein Paar ist realistisch
                  </h2>
                  <p className="mt-7 leading-relaxed text-stone-700">
                    Das spanische Statistikamt INE meldete für 2025
                    durchschnittlich <strong>5.626 € pro Haushalt</strong> für
                    Lebensmittel und alkoholfreie Getränke. Das entspricht rund
                    469 € pro Monat.
                  </p>
                  <p className="mt-5 leading-relaxed text-stone-700">
                    An der Costa Blanca hängt Ihr tatsächliches Budget davon ab,
                    ob Sie überwiegend bei Mercadona, Lidl, Aldi oder Carrefour
                    einkaufen, lokale Märkte nutzen oder viele internationale
                    Marken und hochwertige Fleisch- und Fischprodukte kaufen.
                  </p>
                </div>

                <div className="rounded-[32px] bg-[#f6f1ea] p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">
                    Aktuelle Alicante-Beispiele
                  </p>
                  <div className="mt-6 space-y-4">
                    {[
                      ["Milch, 1 Liter", "ca. 1,04 €"],
                      ["Einfaches Restaurantgericht", "ca. 15 €"],
                      ["Cappuccino", "ca. 1,89 €"],
                      ["Restaurant für 2, 3 Gänge", "ca. 55 €"],
                      ["Benzin, 1 Liter", "ca. 1,52 €"],
                    ].map(([label, price]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between gap-6 border-b border-stone-300 pb-4"
                      >
                        <span className="text-stone-600">{label}</span>
                        <strong className="text-[#1e2a3a]">{price}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 py-24 md:px-8">
            <div className="mx-auto max-w-6xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                Restaurants & soziales Leben
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Essen gehen ist bezahlbar – bis es Teil des täglichen
                Urlaubsgefühls wird
              </h2>

              <p className="mt-7 max-w-4xl text-lg leading-relaxed text-stone-700">
                In Alicante kostet ein einfaches Restaurantgericht in aktuellen
                Marktdaten etwa 15 €. Für ein Drei-Gänge-Essen für zwei Personen
                in einem Mittelklasse-Restaurant werden rund 55 € genannt. In
                beliebten Lagen in Moraira, Jávea oder direkt am Meer ist ein
                höheres Niveau normal.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Sparsam",
                    value: "100–180 € / Monat",
                    text:
                      "Menú del día, Kaffee und ein gelegentlicher Restaurantbesuch.",
                  },
                  {
                    title: "Regelmäßig",
                    value: "250–450 € / Paar",
                    text:
                      "Etwa ein bis zwei Restaurantbesuche pro Woche plus Cafés und Getränke.",
                  },
                  {
                    title: "Lifestyle",
                    value: "600 €+ / Paar",
                    text:
                      "Häufig essen gehen, Beach Clubs, bessere Weine und touristische Premium-Lagen.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] bg-white p-7 shadow-sm"
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">
                      {item.title}
                    </p>
                    <p className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                      {item.value}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-stone-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#1e2a3a] px-6 py-24 text-white md:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-14 lg:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                    Fitness
                  </p>
                  <h2 className="mt-5 font-serif text-4xl leading-tight">
                    Gym ist günstig – Premium-Sportclubs weniger
                  </h2>
                  <p className="mt-7 leading-relaxed text-white/75">
                    Basic-Fit Spanien listet einfache Mitgliedschaften ab rund
                    24,99 € je vier Wochen. Numbeo nennt für Alicante einen
                    durchschnittlichen Fitnessbeitrag von rund 36 € monatlich.
                  </p>
                  <p className="mt-5 leading-relaxed text-white/75">
                    Rechnen Sie für ein klassisches Gym mit etwa 25–50 € pro
                    Person. Clubs mit Pool, Spa, Tennis, Padel oder umfangreichen
                    Gruppenkursen können 60–120 € oder mehr kosten.
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                    Golf
                  </p>
                  <h2 className="mt-5 font-serif text-4xl leading-tight">
                    Golf kann schnell einer der größten Freizeitposten werden
                  </h2>
                  <p className="mt-7 leading-relaxed text-white/75">
                    Oliva Nova Golf verlangt 2026 als veröffentlichten
                    Nichtmitgliederpreis 90 € für 18 Loch. Das 10er-Paket kostet
                    650 €, also rechnerisch 65 € pro Runde.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-6">
                      <p className="text-sm text-white/60">2 Runden / Monat</p>
                      <p className="mt-2 font-serif text-3xl text-[#d6b47d]">
                        130–180 €
                      </p>
                      <p className="mt-2 text-sm text-white/60">pro Spieler</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-6">
                      <p className="text-sm text-white/60">4 Runden / Monat</p>
                      <p className="mt-2 font-serif text-3xl text-[#d6b47d]">
                        260–360 €
                      </p>
                      <p className="mt-2 text-sm text-white/60">pro Spieler</p>
                    </div>
                  </div>

                  <p className="mt-7 text-sm leading-relaxed text-white/55">
                    Buggy, Equipment, Turniere und Premium-Plätze kommen
                    gegebenenfalls zusätzlich hinzu. Saisonpreise variieren.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 py-24 md:px-8">
            <div className="mx-auto max-w-5xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                Immobiliensteuern & laufende Eigentümerkosten
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Eine schuldenfreie Immobilie bedeutet nicht null Wohnkosten
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-700">
                Eigentümer sollten jährliche Kosten auf zwölf Monate
                herunterbrechen. Dazu gehören insbesondere die kommunale IBI,
                Hausversicherung, gegebenenfalls Community-Gebühren und bei
                nichtresidenten Eigentümern die spanische
                Nichtresidentensteuer IRNR.
              </p>

              <div className="mt-10 rounded-[32px] bg-white p-8 shadow-sm md:p-10">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  IRNR für deutsche Nichtresidenten
                </h3>
                <p className="mt-5 leading-relaxed text-stone-700">
                  Bei einer selbst genutzten oder leerstehenden spanischen
                  Immobilie kann Spanien eine fiktive Immobilienrente
                  versteuern. Für in Deutschland beziehungsweise der EU
                  ansässige Eigentümer gilt grundsätzlich ein IRNR-Satz von{" "}
                  <strong>19 %</strong>. Die steuerliche Bemessungsgrundlage wird
                  je nach Katasterkonstellation typischerweise aus 1,1 % oder
                  2 % des maßgeblichen Wertes abgeleitet.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-stone-500">
                  Die exakte Höhe ist objektspezifisch. Deshalb sollte in einem
                  Monatsbudget nicht einfach ein pauschaler Prozentsatz des
                  Kaufpreises angesetzt werden.
                </p>
              </div>

              <div className="mt-8 rounded-[28px] border border-[#d9be96] bg-[#fbf4e8] p-7">
                <p className="leading-relaxed text-stone-700">
                  <strong className="text-[#1e2a3a]">Praxis-Tipp:</strong>{" "}
                  Addieren Sie IBI, IRNR, Versicherung, Community-Gebühren,
                  Pool-/Gartenpflege und Ihre jährliche Wartungsrücklage.
                  Teilen Sie die Summe durch zwölf. Das ist Ihre echte
                  monatliche Wohnkostenbasis.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#e9dfd2] px-6 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                Falls Sie mieten
              </p>
              <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                An der nördlichen Costa Blanca ist Miete inzwischen ein großer
                Kostenblock
              </h2>

              <p className="mt-7 max-w-4xl text-lg leading-relaxed text-stone-700">
                Idealista meldete im Juni 2026 durchschnittliche Angebotsmieten
                von 12,6 €/m² in Moraira und 14,5 €/m² in Jávea/Xàbia sowie
                Calpe. Das sind Angebotswerte und keine Garantie für einen
                konkreten Mietvertrag.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  ["Moraira", "12,6 €/m²", "80 m² ≈ 1.008 €"],
                  ["Jávea / Xàbia", "14,5 €/m²", "80 m² ≈ 1.160 €"],
                  ["Calpe", "14,5 €/m²", "80 m² ≈ 1.160 €"],
                ].map(([place, sqm, example]) => (
                  <div key={place} className="rounded-[28px] bg-white p-7">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">
                      {place}
                    </p>
                    <p className="mt-4 font-serif text-4xl text-[#1e2a3a]">
                      {sqm}
                    </p>
                    <p className="mt-3 text-stone-600">{example}</p>
                  </div>
                ))}
              </div>

              <p className="mt-7 text-sm leading-relaxed text-stone-600">
                Gerade in Küstenorten is het aanbod van echte
                langetermijnhuur beperkter dan het aantal vakantie- en
                winterverhuuradvertenties. Voor een ruime villa kunnen de
                maandlasten daarom aanzienlijk hoger liggen.
              </p>
            </div>
          </section>

          <section className="px-6 py-24 md:px-8">
            <div className="mx-auto max-w-6xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                Twee voorbeeldbudgetten
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                So kann ein echter Monat aussehen
              </h2>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <article className="rounded-[34px] bg-white p-8 shadow-sm md:p-10">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#9b743d]">
                    Paar · Eigentumswohnung · normaler Alltag
                  </p>
                  <div className="mt-8 space-y-3">
                    {[
                      ["Lebensmittel", "500 €"],
                      ["Strom, Wasser, Müll", "170 €"],
                      ["Internet & Mobilfunk", "60 €"],
                      ["Auto", "300 €"],
                      ["Restaurants & Cafés", "300 €"],
                      ["Gym & Freizeit", "80 €"],
                      ["Steuern, Versicherung, Community", "250 €"],
                      ["Rücklage & Sonstiges", "300 €"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex justify-between gap-6 border-b border-stone-200 py-2"
                      >
                        <span className="text-stone-600">{label}</span>
                        <strong className="text-[#1e2a3a]">{value}</strong>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 flex items-end justify-between gap-6">
                    <span className="font-medium text-[#1e2a3a]">Gesamt</span>
                    <span className="font-serif text-4xl text-[#c39a5d]">
                      1.960 €
                    </span>
                  </div>
                </article>

                <article className="rounded-[34px] bg-[#1e2a3a] p-8 text-white shadow-sm md:p-10">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                    Paar · Villa · Golf & häufiger essen gehen
                  </p>
                  <div className="mt-8 space-y-3">
                    {[
                      ["Lebensmittel", "600 €"],
                      ["Strom, Wasser, Pool", "300 €"],
                      ["Internet & Mobilfunk", "70 €"],
                      ["Auto", "400 €"],
                      ["Restaurants & Cafés", "500 €"],
                      ["Gym", "80 €"],
                      ["Golf für 1 Person", "320 €"],
                      ["Steuern, Versicherung, Wartung", "500 €"],
                      ["Sonstiges", "300 €"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex justify-between gap-6 border-b border-white/15 py-2"
                      >
                        <span className="text-white/70">{label}</span>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 flex items-end justify-between gap-6">
                    <span className="font-medium">Gesamt</span>
                    <span className="font-serif text-4xl text-[#d6b47d]">
                      3.070 €
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="bg-white px-6 py-24 md:px-8">
            <div className="mx-auto max-w-5xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                Fazit
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Spanien kann günstiger sein – aber die Costa Blanca ist kein
                Billigstandort
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-700">
                Wer eine eigene Immobilie ohne Hypothek besitzt und bewusst
                lebt, kann als Paar mit rund 1.800–2.200 € im Monat gut
                auskommen. Mit großer Villa, Pool, häufigen Restaurants,
                mehreren Autos, privater Versicherung und Golf ist ein Budget
                von 3.000–4.000 € oder mehr schnell realistisch.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Der größte Fehler ist deshalb, nur Lebensmittelpreise mit
                Deutschland zu vergleichen. Für Ihre echte Umzugsentscheidung
                zählen die Gesamtkosten: Wohnen, Energie, Auto, Steuern,
                Versicherung, Gesundheit, Freizeit und Instandhaltung.
              </p>

              <div className="mt-10 rounded-[34px] bg-[#1e2a3a] p-9 text-white md:p-12">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Ihr persönliches Spanien-Budget
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight">
                  Passt Ihr gewünschter Lebensstil zu Ihrem Budget?
                </h2>
                <p className="mt-6 max-w-3xl leading-relaxed text-white/75">
                  Im Relocation Assessment verbinden wir Budget, Region,
                  Immobilientyp und Alltag. Damit sehen Sie frühzeitig, ob
                  beispielsweise Moraira, Jávea, Dénia oder das Hinterland
                  finanziell besser zu Ihren Plänen passen.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={ASSESSMENT_URL}
                    className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#b48a4f]"
                  >
                    Relocation Assessment starten
                  </a>
                  <a
                    href={GUIDES_URL}
                    className="rounded-full border border-white/60 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1e2a3a]"
                  >
                    Weitere Ratgeber
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="px-6 py-24 md:px-8">
            <div className="mx-auto max-w-5xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                FAQ
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Häufige Fragen zu den Lebenshaltungskosten in Spanien
              </h2>

              <div className="mt-10 space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-[24px] bg-white p-6 shadow-sm"
                  >
                    <summary className="cursor-pointer list-none font-serif text-2xl text-[#1e2a3a]">
                      <span className="flex items-start justify-between gap-6">
                        {faq.question}
                        <span
                          aria-hidden="true"
                          className="text-[#c8a063] transition group-open:rotate-45"
                        >
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-5 leading-relaxed text-stone-700">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#e9dfd2] px-6 py-20 md:px-8">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                Quellen & Methodik
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Aktuelle Daten, ergänzt um realistische Planungsbudgets
              </h2>
              <p className="mt-6 max-w-4xl leading-relaxed text-stone-700">
                Nationale Durchschnittswerte stammen vom spanischen
                Statistikamt INE. Lokale Preisbeispiele für Alicante stammen
                aus aktuellen Marktvergleichsdaten. Golf- und Gym-Preise wurden
                anhand veröffentlichter Anbieterpreise gegengeprüft.
                Immobiliensteuern basieren auf Informationen der spanischen
                Steuerverwaltung. Die genannten Monatsbudgets sind daraus
                abgeleitete Planungswerte und keine garantierten individuellen
                Kosten.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {[
                  [sources.ine, "INE — Haushaltsbudget 2025, veröffentlicht Juni 2026"],
                  [sources.numbeoAlicante, "Numbeo — aktuelle Preise Alicante"],
                  [sources.waterAlicante, "Aguas de Alicante — Wasser- und Abwassertarife"],
                  [sources.irnr, "Agencia Tributaria — IRNR bei Eigennutzung"],
                  [sources.golfOliva, "Oliva Nova Golf — veröffentlichte Greenfees 2026"],
                  [sources.gymBasicFit, "Basic-Fit Spanien — Mitgliedschaftspreise"],
                  [sources.rentMoraira, "Idealista — Mietpreise Moraira Juni 2026"],
                  [sources.rentJavea, "Idealista — Mietpreise Jávea/Xàbia Juni 2026"],
                  [sources.rentCalpe, "Idealista — Mietpreise Calpe Juni 2026"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-white p-5 text-sm font-medium text-[#1e2a3a] transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {label} →
                  </a>
                ))}
              </div>

              <p className="mt-10 text-sm leading-relaxed text-stone-600">
                Stand: 24. Juli 2026. Preise ändern sich laufend und unterscheiden
                sich nach Gemeinde, Immobilie, Tarif, Saison und persönlichem
                Konsum. Steuerliche Angaben sind allgemeine Informationen und
                keine individuelle Steuerberatung.
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}