import type { Metadata } from "next";

const PAGE_PATH = "/de/guides/kueste-oder-jalon-tal";
const ASSESSMENT_URL = "/de/relocation-assessment";
const GUIDES_URL = "/de/guides";

export const metadata: Metadata = {
  title: "An der Küste oder im Jalón-Tal leben? | Vergleich 2026",
  description:
    "Vergleichen Sie das Leben an der Costa Blanca mit Jalón/Xaló und der Vall de Pop. Preise, Platz, Lebensstil und was 350.000 € im Juni 2026 ermöglichten.",
  keywords: [
    "an der Küste in Spanien leben",
    "im Jalón Tal leben",
    "Haus kaufen Jalón",
    "Haus kaufen Xaló",
    "Vall de Pop wohnen",
    "Costa Blanca Hinterland",
    "Costa Blanca Immobilienpreise 2026",
    "Jalón oder Dénia",
    "Jalón oder Jávea",
    "Jalón oder Moraira",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: PAGE_PATH,
    title: "An der Küste oder im Jalón-Tal leben?",
    description:
      "Ein ehrlicher Vergleich von Immobilienpreisen, Platzangebot, Infrastruktur und Lebensstil an der Costa Blanca und in der Vall de Pop.",
    siteName: "Nordic Move Spain",
    publishedTime: "2026-07-23T00:00:00.000Z",
    modifiedTime: "2026-07-23T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Küste oder Jalón-Tal: Wo bekommen Sie mehr für Ihr Geld?",
    description:
      "Preisvergleich, Lebensstil, Erreichbarkeit und Kauf-Checkliste für Immobilienkäufer an der Costa Blanca.",
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

const prices = [
  {
    place: "Jalón / Xaló",
    price: 2271,
    area: 154,
    difference: "Referenz",
    source:
      "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante-alacant/jalon/",
  },
  {
    place: "Dénia",
    price: 3417,
    area: 102,
    difference: "ca. 34 % teurer",
    source:
      "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante-alacant/denia/",
  },
  {
    place: "Calpe / Calp",
    price: 3567,
    area: 98,
    difference: "ca. 36 % teurer",
    source:
      "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante-alacant/calpe/",
  },
  {
    place: "Jávea / Xàbia",
    price: 4118,
    area: 85,
    difference: "ca. 45 % teurer",
    source:
      "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante-alacant/javea-xabia/",
  },
  {
    place: "Moraira",
    price: 4673,
    area: 75,
    difference: "ca. 51 % teurer",
    source:
      "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante-alacant/moraira/",
  },
];

const faqs = [
  {
    question: "Ist das Leben in Jalón günstiger als an der Costa Blanca?",
    answer:
      "Auf Basis der durchschnittlichen Angebotspreise von idealista im Juni 2026 lag Jalón/Xaló deutlich unter Dénia, Calpe, Jávea/Xàbia und Moraira. Der Unterschied reichte in diesem Vergleich von etwa 34 % bis 51 %. Der Preis einer einzelnen Immobilie hängt unter anderem von Lage, Zustand, Aussicht, Grundstück und Genehmigungen ab.",
  },
  {
    question: "Wie weit ist Jalón von der Küste entfernt?",
    answer:
      "Jalón liegt im Hinterland der Marina Alta. Die Fahrzeit zu den Küstenorten hängt von Route, Verkehr und Ziel ab. In der Praxis sollten Sie mit einer Autofahrt statt mit einem Spaziergang zum Meer rechnen. Wer täglich am Strand sein möchte, sollte dies bei der Standortwahl berücksichtigen.",
  },
  {
    question: "Welche Orte gehören zur Vall de Pop?",
    answer:
      "Zur touristischen Region Vall de Pop gehören unter anderem Xaló, Llíber, Alcalalí, Parcent, Benigembla, Senija und Murla. Jeder Ort hat seinen eigenen Charakter, ein anderes Immobilienangebot und unterschiedliche Entfernungen zu wichtigen Einrichtungen.",
  },
  {
    question: "Ist eine Immobilie an der Küste besser für die Vermietung geeignet?",
    answer:
      "Eine Küstenlage kann für Ferienvermietung attraktiv sein, aber hohe Nachfrage ist keine Renditegarantie. Prüfen Sie vor dem Kauf die örtlichen Vermietungsregeln, die touristische Genehmigung, mögliche Gemeinschaftsregeln, realistische Auslastung, laufende Kosten und steuerliche Folgen.",
  },
  {
    question: "Was kann ich ungefähr für 350.000 € kaufen?",
    answer:
      "Eine einfache Berechnung auf Basis des durchschnittlichen Angebotspreises pro Quadratmeter im Juni 2026 ergibt ungefähr 154 m² in Jalón, 102 m² in Dénia, 98 m² in Calpe, 85 m² in Jávea und 75 m² in Moraira. Dies ist nur eine Preisindikation: Grundstück, Pool, Renovierungsbedarf, Wohnlage und Immobilientyp beeinflussen das tatsächliche Ergebnis erheblich.",
  },
  {
    question: "Worauf sollte ich rechtlich und technisch achten?",
    answer:
      "Lassen Sie mindestens Eigentumsverhältnisse, Belastungen, Genehmigungen, Bau- und Nutzungsregeln, Katasterdaten, Versorgungsanschlüsse und eventuelle Umbauten prüfen. Eine unabhängige rechtliche Due Diligence und eine technische Gebäudeinspektion reduzieren das Risiko unangenehmer Überraschungen.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "An der Küste oder im Jalón-Tal leben: Was passt zu Ihnen?",
  description:
    "Vergleichen Sie Immobilienpreise, Platzangebot, Lebensstil und praktische Kaufaspekte für das Leben an der Costa Blanca oder in Jalón und der Vall de Pop.",
  inLanguage: "de-DE",
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_PATH,
  },
  author: {
    "@type": "Organization",
    name: "Nordic Move Spain",
  },
  publisher: {
    "@type": "Organization",
    name: "Nordic Move Spain",
  },
  citation: prices.map((item) => item.source),
};

const faqJsonLd = {
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "/de",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ratgeber",
      item: GUIDES_URL,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Küste oder Jalón-Tal",
      item: PAGE_PATH,
    },
  ],
};

function formatEuro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

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

export default function Page() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <main className="page-shell">
        <article>
          <header className="hero">
            <nav aria-label="Breadcrumb" className="breadcrumbs">
              <a href="/de">Home</a>
              <span aria-hidden="true">/</span>
              <a href={GUIDES_URL}>Ratgeber</a>
              <span aria-hidden="true">/</span>
              <span>Küste oder Jalón-Tal</span>
            </nav>

            <p className="eyebrow">Costa Blanca vergleichen</p>
            <h1>An der Küste oder im Jalón-Tal leben: Was passt zu Ihnen?</h1>
            <p className="intro">
              Wer von einer Immobilie in Spanien träumt, denkt oft zuerst an die
              Küste. Doch das Hinterland der Costa Blanca — mit Jalón/Xaló und
              den Orten der Vall de Pop — kann mehr Wohnfläche, Ruhe und einen
              authentischeren Alltag bieten. Dieser Vergleich zeigt, was die
              Unterschiede für Ihr Budget, Ihren Lebensstil und Ihre
              Kaufentscheidung bedeuten.
            </p>

            <div className="hero-answer" role="note">
              <strong>Das Wichtigste:</strong> Wenn Strand, Lebendigkeit und
              kurze Wege zu vielen Einrichtungen Priorität haben, passt die
              Küste häufig besser. Wer für dasselbe Budget mehr Platz und Ruhe
              sucht, sollte das Jalón-Tal ernsthaft in Betracht ziehen.
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href={ASSESSMENT_URL}>
                Relocation Assessment starten
              </a>
              <a className="button button-secondary" href={GUIDES_URL}>
                Alle Ratgeber ansehen
              </a>
            </div>

            <p className="updated">
              Zuletzt aktualisiert: 23. Juli 2026 · Lesezeit: ca. 10 Minuten
            </p>
          </header>

          <aside className="toc" aria-labelledby="inhaltsverzeichnis">
            <h2 id="inhaltsverzeichnis">In diesem Artikel</h2>
            <ol>
              <li>
                <a href="#preisvergleich">Immobilienpreise im Juni 2026</a>
              </li>
              <li>
                <a href="#budget">Was bekommen Sie für 350.000 €?</a>
              </li>
              <li>
                <a href="#kueste">Vor- und Nachteile der Küste</a>
              </li>
              <li>
                <a href="#jalon">Leben in Jalón und der Vall de Pop</a>
              </li>
              <li>
                <a href="#entscheidung">Welche Umgebung passt zu Ihnen?</a>
              </li>
              <li>
                <a href="#kaufcheck">Kauf- und Prüfpunkte</a>
              </li>
              <li>
                <a href="#faq">Häufig gestellte Fragen</a>
              </li>
            </ol>
          </aside>

          <section id="preisvergleich" className="content-section">
            <p className="section-label">Preisniveau</p>
            <h2>Jalón im Vergleich zu Küstenorten: Immobilienpreise im Juni 2026</h2>
            <p>
              Der durchschnittliche Angebotspreis in Jalón/Xaló lag im Juni
              2026 bei <strong>2.271 € pro m²</strong>. Im selben Monat betrug
              der Durchschnitt 3.417 € in Dénia, 3.567 € in Calpe, 4.118 € in
              Jávea/Xàbia und 4.673 € in Moraira. In diesem Vergleich war Jalón
              damit etwa 34 % bis 51 % günstiger als die genannten Küstenorte.
            </p>
            <p>
              Dieser Unterschied ist für Käufer relevant, die nicht nur auf den
              Kaufpreis schauen, sondern auch auf Grundstücksgröße,
              Außenflächen, Privatsphäre und Renovierungsbudget. Ein niedrigerer
              durchschnittlicher Quadratmeterpreis kann Spielraum für ein
              größeres Haus, einen Pool oder finanzielle Reserven für
              Modernisierung und Instandhaltung schaffen.
            </p>

            <div className="table-wrap" tabIndex={0}>
              <table>
                <caption>
                  Durchschnittliche Angebotspreise pro m² laut idealista, Juni 2026
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Ort</th>
                    <th scope="col">Preis pro m²</th>
                    <th scope="col">Unterschied zu Jalón</th>
                    <th scope="col">Indikation bei 350.000 €</th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((item) => (
                    <tr key={item.place}>
                      <th scope="row">{item.place}</th>
                      <td>{formatEuro(item.price)}</td>
                      <td>{item.difference}</td>
                      <td>ca. {item.area} m²</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="notice">
              <strong>Wichtig:</strong> Dies sind durchschnittliche
              Angebotspreise, keine garantierten Verkaufspreise. Die Berechnung
              berücksichtigt weder Grundstück, Pool, Aussicht,
              Instandhaltungszustand, Mikrolage noch Kaufnebenkosten.
            </div>
          </section>

          <section id="budget" className="content-section">
            <p className="section-label">Budgetvergleich</p>
            <h2>Was bekommen Sie ungefähr für 350.000 €?</h2>
            <p>
              Teilt man ein Budget von 350.000 € durch den durchschnittlichen
              Angebotspreis pro Quadratmeter, erhält man eine einfache
              Indikation der möglichen Wohnfläche. In Jalón ergibt die Rechnung
              ungefähr 154 m². In Moraira sind es etwa 75 m². Der Unterschied
              entspricht fast einer zusätzlichen kompletten Wohnetage.
            </p>

            <div className="bars" aria-label="Indikative Wohnfläche">
              {prices.map((item) => (
                <div className="bar-row" key={item.place}>
                  <div className="bar-heading">
                    <span>{item.place}</span>
                    <strong>{item.area} m²</strong>
                  </div>
                  <div className="bar-track" aria-hidden="true">
                    <span
                      className="bar-fill"
                      style={{ width: `${(item.area / 154) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p>
              Verwenden Sie diese Zahlen nicht als Immobilienbewertung. Eine
              freistehende Villa mit großem Grundstück ist nicht direkt mit
              einer Wohnung in Strandnähe vergleichbar. Der Vergleich zeigt
              jedoch deutlich, wie stark die Lage Ihre Kaufkraft beeinflusst.
            </p>
          </section>

          <section id="kueste" className="content-section">
            <p className="section-label">Leben am Meer</p>
            <h2>An der Küste leben: Strand und Infrastruktur in der Nähe</h2>
            <p>
              Dénia, Calpe, Jávea und Moraira ziehen Käufer an, die das
              mediterrane Küstenleben direkt vor der Haustür möchten.
              Restaurants, Geschäfte, Yachthäfen, Promenaden und Strände sind
              häufig in kurzer Fahr- oder Laufdistanz erreichbar. Das ist für
              die Eigennutzung angenehm und kann interessant sein, wenn Sie die
              Immobilie einen Teil des Jahres vermieten möchten.
            </p>

            <div className="split-grid">
              <div className="card">
                <h3>Vorteile der Küste</h3>
                <ul className="check-list">
                  <li>Strand und Meer sind schnell erreichbar.</li>
                  <li>Großes Angebot an Gastronomie, Geschäften und Freizeitmöglichkeiten.</li>
                  <li>Internationale Gemeinschaft und viele Dienstleistungen.</li>
                  <li>Potenzielle Nachfrage nach Ferienvermietung.</li>
                  <li>Mehr Auswahl an pflegeleichten Apartments.</li>
                </ul>
              </div>
              <div className="card">
                <h3>Nachteile der Küste</h3>
                <ul className="cross-list">
                  <li>Höhere durchschnittliche Quadratmeterpreise.</li>
                  <li>Mehr Verkehr und Parkplatzdruck in der Hochsaison.</li>
                  <li>Kleinere Immobilien oder Grundstücke bei gleichem Budget.</li>
                  <li>Salz, Wind und Feuchtigkeit können mehr Instandhaltung erfordern.</li>
                  <li>Touristische Vermietung kann gesetzlichen Vorgaben unterliegen.</li>
                </ul>
              </div>
            </div>

            <h3>Für wen eignet sich die Küste besonders?</h3>
            <p>
              Die Küste passt gut zu Käufern, die regelmäßig zum Strand möchten,
              gern in der Nähe vieler Einrichtungen wohnen und lange Autofahrten
              vermeiden wollen. Auch wer ein kompaktes Apartment für Urlaub oder
              Überwinterung sucht, findet an der Küste häufig ein passenderes
              Angebot.
            </p>
          </section>

          <section id="jalon" className="content-section">
            <p className="section-label">Ruhe und Raum</p>
            <h2>Leben in Jalón/Xaló und der Vall de Pop</h2>
            <p>
              Jalón — auf Valencianisch offiziell Xaló — liegt in der Marina
              Alta zwischen Weinbergen und Berglandschaft. Der Ort ist für
              lokalen Wein und Mistela, den Samstagsmarkt und seine zentrale
              Lage innerhalb der Vall de Pop bekannt. Die Umgebung wirkt
              ländlicher als die Küste, während Orte wie Dénia, Calpe und Jávea
              weiterhin mit dem Auto erreichbar sind.
            </p>
            <p>
              Zur Vall de Pop gehören unter anderem Xaló, Llíber, Alcalalí,
              Parcent, Benigembla, Senija und Murla. Die Orte liegen nah
              beieinander, unterscheiden sich aber in Höhenlage, Atmosphäre,
              Infrastruktur und Immobilienangebot. Deshalb lohnt es sich, nicht
              nur online nach Häusern zu suchen, sondern mehrere Orte zu
              unterschiedlichen Tageszeiten zu besuchen.
            </p>

            <div className="split-grid">
              <div className="card">
                <h3>Vorteile des Jalón-Tals</h3>
                <ul className="check-list">
                  <li>Mehr Wohnfläche für dasselbe Kaufbudget.</li>
                  <li>Größere Chance auf Garten, Grundstück, Aussicht und Privatsphäre.</li>
                  <li>Ruhigerer Alltag außerhalb der Hochsaison.</li>
                  <li>Dorfleben und lokale Märkte in unmittelbarer Nähe.</li>
                  <li>Attraktiv für Wandern, Radfahren und das Leben im Freien.</li>
                </ul>
              </div>
              <div className="card">
                <h3>Nachteile des Jalón-Tals</h3>
                <ul className="cross-list">
                  <li>Für viele alltägliche Wege ist ein Auto praktisch notwendig.</li>
                  <li>Der Strand liegt nicht in Laufdistanz.</li>
                  <li>Kleineres Angebot an Geschäften und Nachtleben.</li>
                  <li>Ländliche Immobilien können mehr Pflege und Wartung erfordern.</li>
                  <li>Internet, Wasser und Erreichbarkeit sollten für jedes Haus einzeln geprüft werden.</li>
                </ul>
              </div>
            </div>

            <h3>Achten Sie auf die Mikrolage, nicht nur auf den Ortsnamen</h3>
            <p>
              Zwei Immobilien innerhalb derselben Gemeinde können sich stark
              unterscheiden. Prüfen Sie die Sonneneinstrahlung im Winter und
              Sommer, die Steigung der Zufahrt, den Abstand zu Nachbarn,
              Lärmquellen, die Erreichbarkeit nach starkem Regen sowie den
              Zustand von Wasser- und Stromanschlüssen. Bei Immobilien außerhalb
              geschlossener Ortschaften ist eine gründliche rechtliche und
              technische Prüfung besonders wichtig.
            </p>
          </section>

          <section id="entscheidung" className="content-section">
            <p className="section-label">Entscheidungshilfe</p>
            <h2>Küste oder Hinterland: Welche Umgebung passt zu Ihren Plänen?</h2>

            <div className="profile-grid">
              <div className="profile">
                <span className="profile-number">01</span>
                <h3>Sie möchten alles in der Nähe haben</h3>
                <p>
                  Entscheiden Sie sich eher für die Küste, wenn Strand,
                  Geschäfte, Restaurants und medizinische Versorgung wichtig
                  sind und Sie möglichst wenig Auto fahren möchten.
                </p>
              </div>
              <div className="profile">
                <span className="profile-number">02</span>
                <h3>Sie möchten möglichst viel Haus für Ihr Geld</h3>
                <p>
                  Schauen Sie sich Jalón und die umliegenden Orte genauer an,
                  wenn Platz, Leben im Freien und Privatsphäre wichtiger sind als
                  eine Wohnlage in Laufdistanz zum Meer.
                </p>
              </div>
              <div className="profile">
                <span className="profile-number">03</span>
                <h3>Sie kaufen zur Vermietung</h3>
                <p>
                  Prüfen Sie nicht nur die Beliebtheit einer Lage, sondern auch
                  Genehmigungen, Saisonalität, Verwaltung, Kosten und
                  realistische Auslastungsquoten.
                </p>
              </div>
              <div className="profile">
                <span className="profile-number">04</span>
                <h3>Sie ziehen dauerhaft um</h3>
                <p>
                  Bewerten Sie Schulen, Gesundheitsversorgung, Internet,
                  Fahrzeiten, soziale Kontakte und tägliche Einkäufe so, als
                  würden Sie bereits dort leben.
                </p>
              </div>
            </div>

            <blockquote>
              Die beste Region ist nicht automatisch der bekannteste oder
              teuerste Ort, sondern der Ort, der zu Ihrem Alltag, Ihrem Budget
              und Ihren Zukunftsplänen passt.
            </blockquote>
          </section>

          <section id="kaufcheck" className="content-section">
            <p className="section-label">Sicher kaufen</p>
            <h2>Das sollten Sie prüfen, bevor Sie eine Immobilie in Spanien kaufen</h2>
            <p>
              Eine schöne Aussicht ersetzt keine Due Diligence. Lassen Sie die
              Immobilie vor dem endgültigen Kauf unabhängig prüfen. Das ist an
              der Küste genauso wichtig wie im Hinterland.
            </p>

            <div className="checklist">
              <div>
                <span>1</span>
                <p>
                  <strong>Eigentum und Belastungen:</strong> Prüfen Sie, wer
                  rechtlich Eigentümer ist und ob Hypotheken, Pfändungen oder
                  offene Belastungen bestehen.
                </p>
              </div>
              <div>
                <span>2</span>
                <p>
                  <strong>Genehmigungen und Legalität:</strong> Vergleichen Sie
                  den tatsächlichen Zustand der Immobilie mit Kataster,
                  Grundbuch und kommunalen Unterlagen.
                </p>
              </div>
              <div>
                <span>3</span>
                <p>
                  <strong>Baulicher Zustand:</strong> Lassen Sie Dach,
                  Feuchtigkeit, Fundament, Installationen, Pool und eventuelle
                  Umbauten technisch untersuchen.
                </p>
              </div>
              <div>
                <span>4</span>
                <p>
                  <strong>Gesamtkosten:</strong> Planen Sie neben dem Kaufpreis
                  auch Budget für Steuern, Notar, Register, Rechtsberatung,
                  Finanzierung und eventuelle Renovierung ein.
                </p>
              </div>
              <div>
                <span>5</span>
                <p>
                  <strong>Nutzungszweck:</strong> Prüfen Sie vorab, ob dauerhafte
                  Nutzung, Umbau oder touristische Vermietung rechtlich und
                  praktisch möglich sind.
                </p>
              </div>
            </div>

            <div className="cta">
              <div>
                <p className="section-label">Persönliches Wohnprofil</p>
                <h2>Sie schwanken zwischen Küste und Hinterland?</h2>
                <p>
                  Mit unserem Relocation Assessment bringen Sie Budget,
                  Wohnwünsche, Fahrzeiten, Infrastruktur und Lebensstil
                  strukturiert zusammen. So wird klarer, welche Regionen
                  tatsächlich zu Ihnen passen. Bei einem konkreten Kauf helfen
                  technische Prüfung und transparente Kaufbegleitung dabei,
                  Risiken frühzeitig zu erkennen.
                </p>
              </div>
              <div className="cta-actions">
                <a className="button button-light" href={ASSESSMENT_URL}>
                  Relocation Assessment starten
                </a>
                <a className="text-link-light" href={GUIDES_URL}>
                  Weitere Ratgeber ansehen →
                </a>
              </div>
            </div>
          </section>

          <section className="content-section">
            <p className="section-label">Fazit</p>
            <h2>Die Küste bietet Komfort; Jalón bietet mehr Raum</h2>
            <p>
              Das Leben an der Küste ist attraktiv, wenn Meer, Infrastruktur
              und Lebendigkeit im Mittelpunkt stehen. Jalón und die Vall de Pop
              sind stärker, wenn Ruhe, Wohnfläche, Außenraum und ein niedrigerer
              durchschnittlicher Einstiegspreis wichtiger sind.
            </p>
            <p>
              Treffen Sie die Entscheidung nicht nur auf Basis der
              Urlaubsatmosphäre. Besuchen Sie beide Regionen außerhalb der
              Hochsaison, fahren Sie Ihre typischen Alltagswege ab und
              vergleichen Sie konkrete Immobilien einschließlich aller Kosten
              und Prüfpunkte. So wählen Sie nicht nur ein schönes Haus, sondern
              eine Umgebung, in der Sie langfristig gern leben.
            </p>

            <div className="inline-actions">
              <a className="button button-primary" href={ASSESSMENT_URL}>
                Relocation Assessment starten
              </a>
              <a className="button button-secondary" href={GUIDES_URL}>
                Alle Ratgeber ansehen
              </a>
            </div>
          </section>

          <section id="faq" className="content-section">
            <p className="section-label">FAQ</p>
            <h2>Häufig gestellte Fragen zum Leben an der Küste oder in Jalón</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="sources" aria-labelledby="quellen">
            <h2 id="quellen">Quellen und Aktualität</h2>
            <p>
              Preisdaten: durchschnittliche Angebotspreise von idealista für
              Juni 2026. Lokale Informationen: offizielle Websites von Xaló und
              Vall de Pop. Prüfen Sie Zahlen und Regelungen erneut kurz vor
              Veröffentlichung oder Kauf.
            </p>
            <ul>
              {prices.map((item) => (
                <li key={item.place}>
                  <a href={item.source} target="_blank" rel="noopener noreferrer">
                    idealista Preisbericht {item.place}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.xalo.org/es/el-ayuntamiento/regidories/turismo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Offizielle touristische Informationen Xaló
                </a>
              </li>
              <li>
                <a
                  href="https://valldepop.es/pueblos/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Offizielle Website Vall de Pop: Orte
                </a>
              </li>
            </ul>
            <p className="disclaimer">
              Dieser Artikel dient der allgemeinen Information und stellt keine
              rechtliche, steuerliche, technische oder finanzielle Beratung dar.
            </p>
          </section>
        </article>
      </main>

      <style>{`
        :root {
          --ink: #17322d;
          --muted: #5f6f6b;
          --surface: #f7f5ef;
          --surface-strong: #ece8dc;
          --white: #ffffff;
          --accent: #b8663d;
          --accent-dark: #874223;
          --green: #2d6b5b;
          --green-dark: #16473d;
          --line: #dcd8cc;
          --shadow: 0 18px 50px rgba(23, 50, 45, 0.1);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--surface);
          color: var(--ink);
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          line-height: 1.75;
        }

        a {
          color: var(--green);
          text-underline-offset: 0.2em;
        }

        a:hover {
          color: var(--accent-dark);
        }

        .page-shell {
          width: min(100% - 32px, 1120px);
          margin: 0 auto;
          padding: 32px 0 80px;
        }

        article {
          background: var(--white);
          border-radius: 28px;
          box-shadow: var(--shadow);
          overflow: hidden;
        }

        .hero {
          padding: clamp(32px, 7vw, 84px);
          background:
            radial-gradient(circle at 82% 18%, rgba(184, 102, 61, 0.2), transparent 28%),
            linear-gradient(135deg, #f4efe3 0%, #edf3ef 100%);
        }

        .breadcrumbs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 56px;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .breadcrumbs a {
          color: inherit;
          text-decoration: none;
        }

        .eyebrow,
        .section-label {
          margin: 0 0 10px;
          color: var(--accent-dark);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3 {
          font-family: Georgia, "Times New Roman", serif;
          line-height: 1.16;
          text-wrap: balance;
        }

        h1 {
          max-width: 850px;
          margin: 0;
          font-size: clamp(2.45rem, 6vw, 5.4rem);
          letter-spacing: -0.045em;
        }

        h2 {
          margin: 0 0 22px;
          font-size: clamp(1.85rem, 4vw, 3.1rem);
          letter-spacing: -0.03em;
        }

        h3 {
          margin: 30px 0 12px;
          font-size: 1.45rem;
        }

        p {
          margin: 0 0 22px;
        }

        .intro {
          max-width: 800px;
          margin-top: 30px;
          color: #344b46;
          font-size: clamp(1.08rem, 2vw, 1.3rem);
        }

        .hero-answer {
          max-width: 850px;
          margin: 36px 0 0;
          padding: 20px 22px;
          border-left: 4px solid var(--accent);
          background: rgba(255, 255, 255, 0.65);
          border-radius: 0 14px 14px 0;
        }

        .hero-actions,
        .inline-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 12px 20px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-weight: 750;
          text-decoration: none;
          transition:
            transform 160ms ease,
            box-shadow 160ms ease,
            background 160ms ease;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .button-primary {
          background: var(--green-dark);
          color: var(--white);
          box-shadow: 0 10px 24px rgba(22, 71, 61, 0.2);
        }

        .button-primary:hover {
          color: var(--white);
          background: #0c392f;
        }

        .button-secondary {
          border-color: var(--green-dark);
          color: var(--green-dark);
          background: transparent;
        }

        .button-secondary:hover {
          color: var(--green-dark);
          background: rgba(255, 255, 255, 0.7);
        }

        .button-light {
          background: var(--white);
          color: var(--green-dark);
        }

        .updated {
          margin: 30px 0 0;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .toc {
          margin: -18px clamp(20px, 7vw, 84px) 0;
          padding: 28px;
          position: relative;
          background: var(--green-dark);
          color: var(--white);
          border-radius: 18px;
          box-shadow: 0 12px 30px rgba(22, 71, 61, 0.2);
        }

        .toc h2 {
          margin-bottom: 12px;
          font-size: 1.35rem;
        }

        .toc ol {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 6px 32px;
          margin: 0;
          padding-left: 22px;
        }

        .toc a {
          color: #f5f7f6;
        }

        .content-section,
        .sources {
          padding: clamp(52px, 8vw, 96px) clamp(24px, 9vw, 120px);
          border-bottom: 1px solid var(--line);
        }

        .content-section > p,
        .sources > p {
          max-width: 820px;
        }

        .table-wrap {
          margin: 32px 0;
          overflow-x: auto;
          border: 1px solid var(--line);
          border-radius: 16px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 740px;
        }

        caption {
          padding: 16px 18px;
          color: var(--muted);
          font-size: 0.88rem;
          text-align: left;
        }

        th,
        td {
          padding: 16px 18px;
          border-top: 1px solid var(--line);
          text-align: left;
        }

        thead th {
          background: var(--green-dark);
          color: var(--white);
          border-top: 0;
          font-size: 0.86rem;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        tbody tr:nth-child(even) {
          background: #faf9f5;
        }

        .notice {
          max-width: 820px;
          margin-top: 28px;
          padding: 20px 22px;
          border: 1px solid #e6cfad;
          background: #fff7e8;
          border-radius: 14px;
        }

        .bars {
          max-width: 820px;
          margin: 36px 0;
          padding: 28px;
          background: var(--surface);
          border-radius: 18px;
        }

        .bar-row + .bar-row {
          margin-top: 18px;
        }

        .bar-heading {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 7px;
          font-size: 0.94rem;
        }

        .bar-track {
          height: 12px;
          overflow: hidden;
          background: #ddd9ce;
          border-radius: 999px;
        }

        .bar-fill {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, var(--green), var(--accent));
          border-radius: inherit;
        }

        .split-grid,
        .profile-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin: 34px 0;
        }

        .card,
        .profile {
          padding: 26px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 18px;
        }

        .card h3,
        .profile h3 {
          margin-top: 0;
        }

        .card ul {
          margin: 0;
          padding-left: 22px;
        }

        .card li + li {
          margin-top: 9px;
        }

        .check-list li::marker {
          color: var(--green);
        }

        .cross-list li::marker {
          color: var(--accent);
        }

        .profile-number {
          display: block;
          margin-bottom: 18px;
          color: var(--accent);
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .profile p {
          margin-bottom: 0;
        }

        blockquote {
          max-width: 820px;
          margin: 44px 0 0;
          padding: 28px 32px;
          border-left: 5px solid var(--accent);
          background: #f6eee8;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.25rem, 2vw, 1.65rem);
          line-height: 1.45;
        }

        .checklist {
          max-width: 850px;
          margin: 36px 0;
        }

        .checklist > div {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 16px;
          padding: 20px 0;
          border-top: 1px solid var(--line);
        }

        .checklist > div:last-child {
          border-bottom: 1px solid var(--line);
        }

        .checklist span {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          background: var(--green-dark);
          color: var(--white);
          border-radius: 50%;
          font-weight: 800;
        }

        .checklist p {
          margin: 3px 0 0;
        }

        .cta {
          display: grid;
          grid-template-columns: 1.5fr 0.5fr;
          gap: 36px;
          align-items: center;
          margin-top: 54px;
          padding: clamp(28px, 5vw, 50px);
          background: var(--green-dark);
          color: var(--white);
          border-radius: 22px;
        }

        .cta h2 {
          font-size: clamp(1.8rem, 3vw, 2.7rem);
        }

        .cta p {
          color: #e4efeb;
        }

        .cta .section-label {
          color: #f0b38f;
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
        }

        .text-link-light {
          color: var(--white);
          font-weight: 700;
        }

        .text-link-light:hover {
          color: #f2c4a8;
        }

        .faq-list {
          max-width: 860px;
          margin-top: 30px;
        }

        details {
          border-top: 1px solid var(--line);
        }

        details:last-child {
          border-bottom: 1px solid var(--line);
        }

        summary {
          padding: 22px 40px 22px 0;
          cursor: pointer;
          font-weight: 800;
          list-style-position: outside;
        }

        details p {
          padding: 0 0 22px;
          color: #40534f;
        }

        .sources {
          background: #f1efe8;
          border-bottom: 0;
        }

        .sources h2 {
          font-size: 1.7rem;
        }

        .sources ul {
          columns: 2;
          max-width: 850px;
          padding-left: 20px;
        }

        .sources li {
          break-inside: avoid;
          margin-bottom: 8px;
        }

        .disclaimer {
          margin-top: 28px;
          color: var(--muted);
          font-size: 0.9rem;
        }

        @media (max-width: 760px) {
          .page-shell {
            width: min(100% - 16px, 1120px);
            padding-top: 8px;
          }

          article {
            border-radius: 18px;
          }

          .breadcrumbs {
            margin-bottom: 38px;
          }

          .toc {
            margin-inline: 12px;
          }

          .toc ol,
          .split-grid,
          .profile-grid,
          .cta {
            grid-template-columns: 1fr;
          }

          .content-section,
          .sources {
            padding-inline: 24px;
          }

          .cta {
            gap: 18px;
          }

          .sources ul {
            columns: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .button {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}