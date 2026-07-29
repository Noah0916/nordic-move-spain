import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Was kosten Lebensmittel in Spanien pro Woche?",
  description:
    "Drei konkrete Beispiel-Warenkörbe für Spanien: für eine Person, zwei Personen und eine Familie mit zwei Kindern.",
  keywords: [
    "Lebensmittelkosten Spanien pro Woche",
    "Lebensmittelbudget Spanien",
    "Kosten Essen Spanien pro Monat",
    "Lebensmittel zwei Personen Spanien",
    "Supermarktpreise Spanien",
  ],
  alternates: {
    canonical: "/de/guides/week-boodschappen-spanje",
  },
  openGraph: {
    title: "Was kosten Lebensmittel in Spanien pro Woche?",
    description:
      "Drei praktische Beispiel-Warenkörbe für eine Person, zwei Personen und eine Familie mit zwei Kindern.",
    type: "article",
    locale: "de_DE",
    url: "/de/guides/week-boodschappen-spanje",
  },
};

const overview = [
  {
    household: "Eine Person, sparsam",
    weekly: "€45 – €55",
    monthly: "€195 – €240",
  },
  {
    household: "Zwei Personen, normal",
    weekly: "€95 – €115",
    monthly: "€410 – €500",
  },
  {
    household: "Familie mit zwei Kindern",
    weekly: "€160 – €190",
    monthly: "€695 – €825",
  },
];

const singleBasket = [
  ["Brot", "2 Brote", "€1"],
  ["Milch", "2 Liter", "€2"],
  ["Eier", "12 Stück", "€3"],
  ["Joghurt", "8 Portionen", "€2"],
  ["Reis", "1 Kilo", "€1"],
  ["Nudeln", "1 Kilo", "€2"],
  ["Hähnchen", "Etwa 1 Kilo", "€3"],
  ["Hülsenfrüchte", "4 Packungen", "€3"],
  ["Gemüse", "Für sieben Tage", "€8"],
  ["Obst", "Für sieben Tage", "€5"],
  ["Kartoffeln und Zwiebeln", "Für mehrere Mahlzeiten", "€4"],
  ["Käse und Aufschnitt", "Kleine Packungen", "€5"],
  ["Kaffee, Öl und Gewürze", "Wochenanteil", "€6"],
  ["Snacks und sonstige Produkte", "—", "€5"],
];

const coupleBasket = [
  ["Brot und Frühstück", "Brot, Haferflocken und Frühstücksflocken", "€8"],
  ["Milchprodukte", "Milch, Joghurt und Butter", "€8"],
  ["Eier", "18 bis 24 Stück", "€6"],
  ["Reis, Nudeln und Kartoffeln", "Für mehrere Hauptmahlzeiten", "€8"],
  ["Hähnchen", "Filet, Schenkel oder ganzes Hähnchen", "€10"],
  ["Fleisch und Fisch", "Für einige Mahlzeiten", "€15"],
  ["Hülsenfrüchte", "Bohnen, Linsen und Kichererbsen", "€5"],
  ["Gemüse", "Für Mittag- und Abendessen", "€18"],
  ["Obst", "Für zwei Personen", "€12"],
  ["Käse und Aufschnitt", "Für Brot und zwischendurch", "€8"],
  ["Kaffee, Öl und Gewürze", "Wochenanteil", "€5"],
  ["Haushaltsprodukte", "Papierwaren und Reinigungsmittel", "€5"],
  ["Snacks und Getränke", "—", "€7"],
];

const familyBasket = [
  ["Brot und Wraps", "Frühstück und Mittagessen", "€8"],
  ["Milch", "Etwa 8 Liter", "€7"],
  ["Joghurt und Desserts", "Mehrere Packungen", "€6"],
  ["Eier", "24 Stück", "€6"],
  ["Frühstücksflocken und Haferflocken", "—", "€5"],
  ["Reis, Nudeln und Kartoffeln", "Familienpackungen", "€12"],
  ["Hähnchen", "Etwa 2 bis 3 Kilo", "€15"],
  ["Fleisch und Fisch", "Für mehrere Mahlzeiten", "€28"],
  ["Hülsenfrüchte", "Für Suppen und warme Mahlzeiten", "€6"],
  ["Gemüse", "Für die ganze Familie", "€28"],
  ["Obst", "Obst und Snacks für Schule oder unterwegs", "€22"],
  ["Käse und Aufschnitt", "Brotbelag", "€14"],
  ["Snacks und Kekse", "—", "€12"],
  ["Saft und sonstige Getränke", "—", "€8"],
  ["Öl, Kaffee und Gewürze", "Wochenanteil", "€8"],
  ["Haushaltsprodukte", "Reinigung und Papierwaren", "€8"],
];

const savingTips = [
  "Greifen Sie häufiger zu Eigenmarken.",
  "Kaufen Sie Gemüse und Obst saisonal.",
  "Vergleichen Sie den Preis pro Kilo oder Liter.",
  "Nutzen Sie Bohnen, Linsen und Kichererbsen als günstige Eiweißquelle.",
  "Kochen Sie größere Portionen und frieren Sie einen Teil ein.",
  "Erledigen Sie den großen Wocheneinkauf nicht in einem kleinen Laden in einer touristischen Lage.",
  "Kaufen Sie Angebote nur, wenn Sie das Produkt normalerweise auch verwenden.",
  "Bewahren Sie einen Monat lang alle Kassenbons auf.",
];

const faq = [
  {
    question: "Wie viel kosten Lebensmittel in Spanien für eine Person?",
    answer:
      "Eine preisbewusste Einzelperson kann mit etwa €45 bis €55 pro Woche rechnen. Das entspricht ungefähr €195 bis €240 pro Monat.",
  },
  {
    question: "Was kosten Lebensmittel für zwei Personen in Spanien?",
    answer:
      "Für zwei Erwachsene sind etwa €95 bis €115 pro Woche ein brauchbarer Richtwert. Pro Monat entspricht das ungefähr €410 bis €500.",
  },
  {
    question: "Wie viel gibt eine Familie in Spanien für Lebensmittel aus?",
    answer:
      "Eine Familie mit zwei Erwachsenen und zwei Kindern kann ungefähr €160 bis €190 pro Woche benötigen. Das sind rund €695 bis €825 pro Monat.",
  },
  {
    question: "Sind Restaurantbesuche im Lebensmittelbudget enthalten?",
    answer:
      "Nein. Die Beispielbeträge gelten für Supermarkteinkäufe und einige Haushaltsprodukte. Restaurantbesuche und Essenslieferungen sollten separat eingeplant werden.",
  },
  {
    question: "Wie rechnet man ein Wochenbudget in ein Monatsbudget um?",
    answer:
      "Multiplizieren Sie den Wochenbetrag mit 4,33. Ein Kalendermonat besteht im Durchschnitt aus etwas mehr als vier Wochen.",
  },
];

function BasketTable({
  rows,
  total,
}: {
  rows: string[][];
  total: string;
}) {
  return (
    <div style={styles.tableWrapper}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Produktgruppe</th>
            <th style={styles.th}>Menge oder Beispiele</th>
            <th style={{ ...styles.th, ...styles.priceCell }}>Kosten</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([product, amount, price]) => (
            <tr key={`${product}-${amount}`}>
              <td style={styles.td}>
                <strong>{product}</strong>
              </td>
              <td style={styles.td}>{amount}</td>
              <td style={{ ...styles.td, ...styles.priceCell }}>{price}</td>
            </tr>
          ))}
          <tr>
            <td style={styles.totalCell} colSpan={2}>
              Gesamt
            </td>
            <td style={{ ...styles.totalCell, ...styles.priceCell }}>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Was kosten Lebensmittel in Spanien pro Woche?",
    description:
      "Drei konkrete Beispiel-Warenkörbe für eine Person, zwei Personen und eine Familie mit zwei Kindern.",
    inLanguage: "de-DE",
    mainEntityOfPage: "/de/guides/week-boodschappen-spanje",
    dateModified: "2026-07-23",
  };

  return (
    <main style={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article style={styles.article}>
        <header style={styles.hero}>
          <p style={styles.eyebrow}>Lebensmittel und Lebenshaltungskosten</p>
          <h1 style={styles.title}>
            Was kosten Lebensmittel in Spanien pro Woche?
          </h1>
          <p style={styles.lead}>
            Wer darüber nachdenkt, in Spanien zu leben oder eine Zweitwohnung zu
            kaufen, möchte wissen, wie viel Geld für den täglichen Einkauf
            benötigt wird. Im Folgenden finden Sie drei konkrete
            Beispiel-Warenkörbe: für eine Person, zwei Personen und eine Familie
            mit zwei Kindern.
          </p>
          <p style={styles.updated}>Zuletzt aktualisiert: Juli 2026</p>
        </header>

        <section style={styles.summaryCard}>
          <h2 style={styles.summaryTitle}>Lebensmittelbudget auf einen Blick</h2>
          <div style={styles.overviewGrid}>
            {overview.map((item) => (
              <div style={styles.overviewCard} key={item.household}>
                <h3 style={styles.overviewTitle}>{item.household}</h3>
                <p style={styles.weeklyPrice}>{item.weekly}</p>
                <p style={styles.smallText}>pro Woche</p>
                <div style={styles.divider} />
                <p style={styles.monthlyPrice}>{item.monthly} pro Monat</p>
              </div>
            ))}
          </div>
          <p style={styles.note}>
            Für die Monatsbeträge wurde das Wochenbudget mit 4,33
            multipliziert. Restaurants, Essenslieferungen, Alkohol und spezielle
            Diätprodukte sind nicht eingerechnet.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Sind Lebensmittel in Spanien günstig?</h2>
          <p style={styles.paragraph}>
            Die Kosten für Lebensmittel hängen nicht nur vom Land ab. Auch
            Supermarkt, Marke, Region und Saison spielen eine Rolle. Eigenmarken
            sind meist günstiger als bekannte Marken. Frisches Gemüse und Obst
            kann preiswert sein, wenn Sie saisonale Produkte kaufen.
          </p>
          <p style={styles.paragraph}>
            In touristischen Küstenorten und kleinen Nachbarschaftsläden können
            manche Produkte dagegen teurer sein. Die folgenden Beträge sind
            deshalb als praktische Budgetbeispiele und nicht als feste
            Preisliste gedacht.
          </p>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={styles.numberBadge}>1</span>
            <div>
              <h2 style={styles.heading}>Spar-Warenkorb für eine Person</h2>
              <p style={styles.sectionIntro}>
                Geschätztes Budget: etwa <strong>€48 pro Woche</strong>.
              </p>
            </div>
          </div>

          <p style={styles.paragraph}>
            Eine alleinlebende Person, die überwiegend selbst kocht,
            Eigenmarken kauft und wenig Lebensmittel verschwendet, kann mit
            etwa €45 bis €55 pro Woche auskommen. Das funktioniert besonders
            gut, wenn Mahlzeiten im Voraus geplant und Zutaten für mehrere
            Gerichte verwendet werden.
          </p>

          <BasketTable rows={singleBasket} total="ca. €48" />

          <div style={styles.tipBox}>
            <strong>Beispiel für einen günstigen Wochenplan</strong>
            <p style={styles.tipText}>
              Zum Beispiel Haferflocken oder Brot zum Frühstück, Salat oder
              Reste zum Mittagessen und Gerichte wie Pasta mit Gemüse, Reis mit
              Hähnchen, spanische Tortilla, Linsensuppe und Kichererbsen mit
              Gemüse.
            </p>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={styles.numberBadge}>2</span>
            <div>
              <h2 style={styles.heading}>
                Normales Wochenbudget für zwei Personen
              </h2>
              <p style={styles.sectionIntro}>
                Geschätztes Budget: etwa <strong>€110 pro Woche</strong>.
              </p>
            </div>
          </div>

          <p style={styles.paragraph}>
            Für zwei Erwachsene mit abwechslungsreicher Ernährung können Sie
            mit etwa €95 bis €115 pro Woche rechnen. Das entspricht ungefähr
            €410 bis €500 pro Monat.
          </p>

          <BasketTable rows={coupleBasket} total="ca. €110" />

          <p style={styles.paragraph}>
            Ein Paar, das viel frischen Fisch, Bio-Fleisch, spezielle
            Diätprodukte oder internationale Marken kauft, kann dieses Budget
            leicht überschreiten. Wer viele Eigenmarken nutzt und Reste
            verwertet, kann dagegen auch unter €100 pro Woche bleiben.
          </p>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={styles.numberBadge}>3</span>
            <div>
              <h2 style={styles.heading}>
                Lebensmittel für eine Familie mit zwei Kindern
              </h2>
              <p style={styles.sectionIntro}>
                Geschätztes Budget: etwa <strong>€185 pro Woche</strong>.
              </p>
            </div>
          </div>

          <p style={styles.paragraph}>
            Eine Familie mit zwei Erwachsenen und zwei Kindern benötigt größere
            Mengen. Frühstücksprodukte, Brotbelag, Milchprodukte, Snacks und
            Getränke belasten das Budget deshalb stärker.
          </p>

          <BasketTable rows={familyBasket} total="ca. €185" />

          <p style={styles.paragraph}>
            Das entspricht rund €800 pro Monat. Bei kleinen Kindern kann der
            Betrag niedriger ausfallen. Familien mit Teenagern, vielen
            Sportaktivitäten oder besonderen Ernährungswünschen können mehr
            benötigen.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>
            Was kosten Lebensmittel in Spanien pro Monat?
          </h2>

          <div style={styles.calculationGrid}>
            <div style={styles.calculationCard}>
              <h3 style={styles.calculationTitle}>Eine Person</h3>
              <p style={styles.formula}>€48 × 4,33 = €208</p>
              <p style={styles.smallText}>
                Praktischer Richtwert: €195 bis €240
              </p>
            </div>

            <div style={styles.calculationCard}>
              <h3 style={styles.calculationTitle}>Zwei Personen</h3>
              <p style={styles.formula}>€110 × 4,33 = €476</p>
              <p style={styles.smallText}>
                Praktischer Richtwert: €410 bis €500
              </p>
            </div>

            <div style={styles.calculationCard}>
              <h3 style={styles.calculationTitle}>Familie</h3>
              <p style={styles.formula}>€185 × 4,33 = €801</p>
              <p style={styles.smallText}>
                Praktischer Richtwert: €695 bis €825
              </p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Welche Kosten sind nicht enthalten?</h2>
          <ul style={styles.list}>
            <li>Restaurants und Cafés</li>
            <li>Essenslieferungen</li>
            <li>Alkohol</li>
            <li>Babynahrung und Windeln</li>
            <li>Tiernahrung</li>
            <li>Bio-Premiumprodukte</li>
            <li>Glutenfreie und andere spezielle Diätprodukte</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Welcher Supermarkt ist am günstigsten?</h2>
          <p style={styles.paragraph}>
            In Spanien finden Sie unter anderem Mercadona, Lidl, Aldi,
            Carrefour, Dia, Consum und Alcampo. Welcher Supermarkt am
            günstigsten ist, hängt von den Produkten ab, die Sie kaufen. Ein
            Geschäft kann bei Grundnahrungsmitteln günstiger sein, während ein
            anderes bessere Angebote für Fleisch, Fisch oder Haushaltsartikel
            bietet.
          </p>
          <p style={styles.paragraph}>
            Vergleichen Sie deshalb den Preis pro Kilo oder Liter und nicht nur
            den Packungspreis. Berücksichtigen Sie außerdem Fahrzeit,
            Parkmöglichkeiten, Lieferkosten und die Qualität frischer Produkte.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>
            So sparen Sie beim Lebensmitteleinkauf in Spanien
          </h2>
          <ol style={styles.list}>
            {savingTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ol>
        </section>

        <section style={styles.cta}>
          <div>
            <p style={styles.ctaEyebrow}>Weitere Kosten berechnen</p>
            <h2 style={styles.ctaTitle}>
              Berechnen Sie Ihre gesamten monatlichen Kosten in Spanien
            </h2>
            <p style={styles.ctaText}>
              Kombinieren Sie Lebensmittel mit Wohnen, Energie, Mobilität,
              Versicherungen und Instandhaltung.
            </p>
          </div>
          <Link
            href="/de/guides/maandelijkse-kosten-spanje"
            style={styles.ctaButton}
          >
            Rechner öffnen
          </Link>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Häufig gestellte Fragen</h2>
          <div style={styles.faqList}>
            {faq.map((item) => (
              <details style={styles.faqItem} key={item.question}>
                <summary style={styles.faqQuestion}>{item.question}</summary>
                <p style={styles.faqAnswer}>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={styles.disclaimer}>
          <h2 style={styles.disclaimerTitle}>Wichtiger Hinweis</h2>
          <p style={styles.disclaimerText}>
            Die Beträge auf dieser Seite sind beispielhafte Richtwerte.
            Tatsächliche Preise unterscheiden sich je nach Supermarkt, Region,
            Saison, Angebot und Haushalt. Prüfen Sie aktuelle Preise, bevor Sie
            ein endgültiges Monatsbudget erstellen.
          </p>
        </section>
      </article>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    padding: "64px 20px 96px",
    background:
      "radial-gradient(circle at top right, rgba(242, 181, 91, 0.18), transparent 32rem), #f6f3ed",
    color: "#17231b",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  article: {
    width: "100%",
    maxWidth: 1060,
    margin: "0 auto",
  },
  hero: {
    maxWidth: 830,
    marginBottom: 40,
  },
  eyebrow: {
    margin: "0 0 14px",
    color: "#a44f21",
    fontSize: 13,
    fontWeight: 800,
    letterSpacing: "0.11em",
    textTransform: "uppercase",
  },
  title: {
    margin: 0,
    fontSize: "clamp(42px, 7vw, 78px)",
    lineHeight: 1,
    letterSpacing: "-0.055em",
  },
  lead: {
    maxWidth: 780,
    margin: "24px 0 0",
    color: "#536158",
    fontSize: "clamp(18px, 2vw, 21px)",
    lineHeight: 1.75,
  },
  updated: {
    margin: "18px 0 0",
    color: "#748078",
    fontSize: 14,
  },
  summaryCard: {
    marginBottom: 70,
    padding: "clamp(22px, 4vw, 34px)",
    borderRadius: 25,
    background: "#173d29",
    color: "#ffffff",
    boxShadow: "0 20px 60px rgba(23, 61, 41, 0.18)",
  },
  summaryTitle: {
    margin: "0 0 22px",
    fontSize: 27,
  },
  overviewGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: 14,
  },
  overviewCard: {
    padding: 20,
    borderRadius: 16,
    background: "rgba(255,255,255,0.1)",
  },
  overviewTitle: {
    minHeight: 42,
    margin: 0,
    color: "#d7e3db",
    fontSize: 15,
  },
  weeklyPrice: {
    margin: "14px 0 0",
    fontSize: 31,
    fontWeight: 900,
    letterSpacing: "-0.04em",
  },
  monthlyPrice: {
    margin: 0,
    fontSize: 14,
    fontWeight: 700,
  },
  smallText: {
    margin: "3px 0 0",
    color: "#68756d",
    fontSize: 14,
    lineHeight: 1.55,
  },
  divider: {
    height: 1,
    margin: "17px 0",
    background: "rgba(255,255,255,0.17)",
  },
  note: {
    margin: "22px 0 0",
    color: "#cedbd2",
    fontSize: 14,
    lineHeight: 1.65,
  },
  section: {
    maxWidth: 900,
    margin: "0 auto 66px",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: 15,
    marginBottom: 15,
  },
  numberBadge: {
    display: "inline-flex",
    width: 39,
    height: 39,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    borderRadius: 999,
    background: "#d46d30",
    color: "#ffffff",
    fontWeight: 900,
  },
  heading: {
    margin: "0 0 16px",
    fontSize: "clamp(27px, 4vw, 39px)",
    lineHeight: 1.14,
    letterSpacing: "-0.035em",
  },
  sectionIntro: {
    margin: "8px 0 0",
    color: "#667269",
  },
  paragraph: {
    margin: "0 0 18px",
    color: "#536158",
    fontSize: 17,
    lineHeight: 1.8,
  },
  tableWrapper: {
    width: "100%",
    margin: "28px 0",
    overflowX: "auto",
    border: "1px solid #dfe3df",
    borderRadius: 17,
    background: "#ffffff",
  },
  table: {
    width: "100%",
    minWidth: 620,
    borderCollapse: "collapse",
  },
  th: {
    padding: "15px 17px",
    borderBottom: "1px solid #dfe3df",
    background: "#eef2ef",
    color: "#34433a",
    fontSize: 13,
    textAlign: "left",
    textTransform: "uppercase",
    letterSpacing: "0.045em",
  },
  td: {
    padding: "14px 17px",
    borderBottom: "1px solid #eaedea",
    color: "#58655d",
    fontSize: 15,
    lineHeight: 1.45,
  },
  priceCell: {
    textAlign: "right",
    whiteSpace: "nowrap",
  },
  totalCell: {
    padding: "15px 17px",
    background: "#173d29",
    color: "#ffffff",
    fontWeight: 850,
  },
  tipBox: {
    marginTop: 24,
    padding: 22,
    borderLeft: "4px solid #c9652c",
    borderRadius: "0 15px 15px 0",
    background: "#f1e6d9",
  },
  tipText: {
    margin: "8px 0 0",
    color: "#5b554e",
    lineHeight: 1.7,
  },
  calculationGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
    marginTop: 25,
  },
  calculationCard: {
    padding: 22,
    border: "1px solid #dde1de",
    borderRadius: 16,
    background: "rgba(255,255,255,0.76)",
  },
  calculationTitle: {
    margin: "0 0 12px",
    fontSize: 17,
  },
  formula: {
    margin: 0,
    color: "#18452d",
    fontSize: 24,
    fontWeight: 900,
    letterSpacing: "-0.03em",
  },
  list: {
    display: "grid",
    gap: 12,
    margin: 0,
    paddingLeft: 23,
    color: "#536158",
    fontSize: 17,
    lineHeight: 1.7,
  },
  cta: {
    maxWidth: 900,
    margin: "20px auto 66px",
    padding: "clamp(24px, 5vw, 38px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 30,
    borderRadius: 22,
    background: "#e8ede8",
  },
  ctaEyebrow: {
    margin: "0 0 7px",
    color: "#9b4a20",
    fontSize: 12,
    fontWeight: 850,
    letterSpacing: "0.09em",
    textTransform: "uppercase",
  },
  ctaTitle: {
    margin: 0,
    fontSize: 26,
    lineHeight: 1.2,
  },
  ctaText: {
    maxWidth: 570,
    margin: "11px 0 0",
    color: "#5d6961",
    lineHeight: 1.65,
  },
  ctaButton: {
    display: "inline-flex",
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    padding: "0 18px",
    borderRadius: 11,
    background: "#173d29",
    color: "#ffffff",
    fontSize: 15,
    fontWeight: 800,
    textDecoration: "none",
  },
  faqList: {
    display: "grid",
    gap: 12,
  },
  faqItem: {
    padding: "0 20px",
    border: "1px solid #dce1dd",
    borderRadius: 14,
    background: "#ffffff",
  },
  faqQuestion: {
    padding: "19px 0",
    cursor: "pointer",
    fontSize: 17,
    fontWeight: 800,
  },
  faqAnswer: {
    margin: "0 0 19px",
    color: "#5b685f",
    lineHeight: 1.7,
  },
  disclaimer: {
    maxWidth: 900,
    margin: "70px auto 0",
    padding: 25,
    borderRadius: 18,
    background: "#eee7dc",
  },
  disclaimerTitle: {
    margin: "0 0 9px",
    fontSize: 20,
  },
  disclaimerText: {
    margin: 0,
    color: "#625d55",
    lineHeight: 1.7,
  },
};