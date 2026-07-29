import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wat kost een week boodschappen in Spanje?",
  description:
    "Bekijk drie concrete boodschappenmandjes voor Spanje: voor één persoon, twee personen en een gezin met twee kinderen.",
  keywords: [
    "week boodschappen Spanje",
    "boodschappenbudget Spanje",
    "kosten eten per maand Spanje",
    "boodschappen twee personen Spanje",
    "supermarktprijzen Spanje",
  ],
  alternates: {
    canonical: "/nl/guides/week-boodschappen-spanje",
  },
  openGraph: {
    title: "Wat kost een week boodschappen in Spanje?",
    description:
      "Drie praktische voorbeeldmandjes voor één persoon, twee personen en een gezin met twee kinderen.",
    type: "article",
    locale: "nl_NL",
    url: "/nl/guides/week-boodschappen-spanje",
  },
};

const overview = [
  {
    household: "Eén persoon, budget",
    weekly: "€45 – €55",
    monthly: "€195 – €240",
  },
  {
    household: "Twee personen, normaal",
    weekly: "€95 – €115",
    monthly: "€410 – €500",
  },
  {
    household: "Gezin met twee kinderen",
    weekly: "€160 – €190",
    monthly: "€695 – €825",
  },
];

const singleBasket = [
  ["Brood", "2 broden", "€1"],
  ["Melk", "2 liter", "€2"],
  ["Eieren", "12 stuks", "€3"],
  ["Yoghurt", "8 porties", "€2"],
  ["Rijst", "1 kilo", "€1"],
  ["Pasta", "1 kilo", "€2"],
  ["Kip", "Circa 1 kilo", "€3"],
  ["Peulvruchten", "4 verpakkingen", "€3"],
  ["Groente", "Voor zeven dagen", "€8"],
  ["Fruit", "Voor zeven dagen", "€5"],
  ["Aardappelen en uien", "Meerdere maaltijden", "€4"],
  ["Kaas en vleeswaren", "Kleine verpakkingen", "€5"],
  ["Koffie, olie en kruiden", "Weekaandeel", "€6"],
  ["Snacks en overige producten", "—", "€5"],
];

const coupleBasket = [
  ["Brood en ontbijt", "Brood, havermout en ontbijtgranen", "€8"],
  ["Zuivel", "Melk, yoghurt en boter", "€8"],
  ["Eieren", "18 tot 24 stuks", "€6"],
  ["Rijst, pasta en aardappelen", "Meerdere hoofdmaaltijden", "€8"],
  ["Kip", "Filet, bouten of hele kip", "€10"],
  ["Vlees en vis", "Enkele maaltijden", "€15"],
  ["Peulvruchten", "Bonen, linzen en kikkererwten", "€5"],
  ["Groente", "Voor lunch en avondeten", "€18"],
  ["Fruit", "Voor twee personen", "€12"],
  ["Kaas en vleeswaren", "Voor brood en tussendoor", "€8"],
  ["Koffie, olie en kruiden", "Weekaandeel", "€5"],
  ["Huishoudelijke producten", "Papierwaren en schoonmaakmiddelen", "€5"],
  ["Snacks en dranken", "—", "€7"],
];

const familyBasket = [
  ["Brood en wraps", "Ontbijt en lunch", "€8"],
  ["Melk", "Circa 8 liter", "€7"],
  ["Yoghurt en desserts", "Meerdere verpakkingen", "€6"],
  ["Eieren", "24 stuks", "€6"],
  ["Ontbijtgranen en havermout", "—", "€5"],
  ["Rijst, pasta en aardappelen", "Gezinsverpakkingen", "€12"],
  ["Kip", "Circa 2 tot 3 kilo", "€15"],
  ["Vlees en vis", "Meerdere maaltijden", "€28"],
  ["Peulvruchten", "Voor soep en warme maaltijden", "€6"],
  ["Groente", "Voor het hele gezin", "€28"],
  ["Fruit", "Fruit en schooltussendoortjes", "€22"],
  ["Kaas en vleeswaren", "Broodbeleg", "€14"],
  ["Snacks en koek", "—", "€12"],
  ["Sap en overige dranken", "—", "€8"],
  ["Olie, koffie en kruiden", "Weekaandeel", "€8"],
  ["Huishoudelijke producten", "Schoonmaak en papierwaren", "€8"],
];

const savingTips = [
  "Kies vaker voor huismerken.",
  "Koop groente en fruit in het seizoen.",
  "Vergelijk de prijs per kilo of liter.",
  "Gebruik bonen, linzen en kikkererwten als voordelige eiwitbron.",
  "Kook grotere porties en vries een deel in.",
  "Doe de grote weekboodschappen niet in een kleine toeristische buurtwinkel.",
  "Koop aanbiedingen alleen wanneer je het product normaal ook gebruikt.",
  "Houd een maand lang alle kassabonnen bij.",
];

const faq = [
  {
    question: "Hoeveel kosten boodschappen in Spanje voor één persoon?",
    answer:
      "Een budgetbewuste alleenstaande kan rekenen op ongeveer €45 tot €55 per week. Dat is circa €195 tot €240 per maand.",
  },
  {
    question: "Wat kosten boodschappen voor twee personen in Spanje?",
    answer:
      "Voor twee volwassenen is ongeveer €95 tot €115 per week een bruikbare indicatie. Per maand komt dat neer op ongeveer €410 tot €500.",
  },
  {
    question: "Hoeveel geeft een gezin uit aan eten in Spanje?",
    answer:
      "Een gezin met twee volwassenen en twee kinderen kan ongeveer €160 tot €190 per week nodig hebben. Dat is circa €695 tot €825 per maand.",
  },
  {
    question: "Zijn restaurants in het boodschappenbudget opgenomen?",
    answer:
      "Nee. De voorbeeldbedragen gelden voor supermarktboodschappen en enkele huishoudelijke producten. Uit eten gaan en maaltijdbezorging moet je apart begroten.",
  },
  {
    question: "Hoe reken je een weekbudget om naar een maandbudget?",
    answer:
      "Vermenigvuldig het weekbedrag met 4,33. Een kalendermaand bestaat gemiddeld uit iets meer dan vier weken.",
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
            <th style={styles.th}>Productgroep</th>
            <th style={styles.th}>Hoeveelheid of voorbeelden</th>
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
              Totaal
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
    headline: "Wat kost een week boodschappen in Spanje?",
    description:
      "Drie concrete boodschappenmandjes voor één persoon, twee personen en een gezin met twee kinderen.",
    inLanguage: "nl-NL",
    mainEntityOfPage: "/nl/guides/week-boodschappen-spanje",
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
          <p style={styles.eyebrow}>Boodschappen en levensonderhoud</p>
          <h1 style={styles.title}>
            Wat kost een week boodschappen in Spanje?
          </h1>
          <p style={styles.lead}>
            Wie overweegt om in Spanje te wonen of een tweede huis te kopen,
            wil weten hoeveel geld er nodig is voor dagelijkse boodschappen.
            Hieronder vind je drie concrete voorbeeldmandjes: voor één persoon,
            twee personen en een gezin met twee kinderen.
          </p>
          <p style={styles.updated}>Laatst bijgewerkt: juli 2026</p>
        </header>

        <section style={styles.summaryCard}>
          <h2 style={styles.summaryTitle}>Boodschappenbudget in het kort</h2>
          <div style={styles.overviewGrid}>
            {overview.map((item) => (
              <div style={styles.overviewCard} key={item.household}>
                <h3 style={styles.overviewTitle}>{item.household}</h3>
                <p style={styles.weeklyPrice}>{item.weekly}</p>
                <p style={styles.smallText}>per week</p>
                <div style={styles.divider} />
                <p style={styles.monthlyPrice}>{item.monthly} per maand</p>
              </div>
            ))}
          </div>
          <p style={styles.note}>
            Voor de maandbedragen is het weekbudget vermenigvuldigd met 4,33.
            Restaurants, maaltijdbezorging, alcohol en bijzondere dieetproducten
            zijn niet meegerekend.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Zijn boodschappen in Spanje goedkoop?</h2>
          <p style={styles.paragraph}>
            De prijs van boodschappen hangt niet alleen af van het land. Ook de
            supermarkt, het merk, de regio en het seizoen spelen een rol.
            Huismerken zijn meestal goedkoper dan bekende merken. Verse groente
            en fruit kunnen voordelig zijn wanneer je producten van het seizoen
            koopt.
          </p>
          <p style={styles.paragraph}>
            In toeristische kustplaatsen en kleine buurtwinkels kunnen sommige
            producten juist duurder zijn. De bedragen hieronder zijn daarom
            bedoeld als praktische begroting en niet als vaste prijslijst.
          </p>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={styles.numberBadge}>1</span>
            <div>
              <h2 style={styles.heading}>Budgetmandje voor één persoon</h2>
              <p style={styles.sectionIntro}>
                Geschat budget: ongeveer <strong>€48 per week</strong>.
              </p>
            </div>
          </div>

          <p style={styles.paragraph}>
            Een alleenstaande die vooral zelf kookt, huismerken koopt en weinig
            voedsel verspilt, kan met ongeveer €45 tot €55 per week uitkomen.
            Dit werkt vooral wanneer je vooraf maaltijden plant en ingrediënten
            voor meerdere gerechten gebruikt.
          </p>

          <BasketTable rows={singleBasket} total="circa €48" />

          <div style={styles.tipBox}>
            <strong>Voorbeeld van een voordelig weekmenu</strong>
            <p style={styles.tipText}>
              Denk aan havermout of brood als ontbijt, salade of restjes als
              lunch en gerechten zoals pasta met groenten, rijst met kip,
              Spaanse tortilla, linzensoep en kikkererwten met groenten.
            </p>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={styles.numberBadge}>2</span>
            <div>
              <h2 style={styles.heading}>Normaal weekmenu voor twee personen</h2>
              <p style={styles.sectionIntro}>
                Geschat budget: ongeveer <strong>€110 per week</strong>.
              </p>
            </div>
          </div>

          <p style={styles.paragraph}>
            Voor twee volwassenen die gevarieerd eten, kun je uitgaan van
            ongeveer €95 tot €115 per week. Dat komt neer op ongeveer €410 tot
            €500 per maand.
          </p>

          <BasketTable rows={coupleBasket} total="circa €110" />

          <p style={styles.paragraph}>
            Een stel dat veel verse vis, biologisch vlees, speciale
            dieetproducten of internationale merken koopt, kan gemakkelijk
            boven dit bedrag uitkomen. Wie veel huismerken gebruikt en restjes
            verwerkt, kan juist onder €100 per week blijven.
          </p>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={styles.numberBadge}>3</span>
            <div>
              <h2 style={styles.heading}>
                Boodschappen voor een gezin met twee kinderen
              </h2>
              <p style={styles.sectionIntro}>
                Geschat budget: ongeveer <strong>€185 per week</strong>.
              </p>
            </div>
          </div>

          <p style={styles.paragraph}>
            Een gezin met twee volwassenen en twee kinderen heeft grotere
            hoeveelheden nodig. Ontbijtproducten, broodbeleg, zuivel,
            tussendoortjes en dranken drukken daardoor zwaarder op het budget.
          </p>

          <BasketTable rows={familyBasket} total="circa €185" />

          <p style={styles.paragraph}>
            Dat is ongeveer €800 per maand. Bij jonge kinderen kan het bedrag
            lager uitvallen. Gezinnen met tieners, veel sportactiviteiten of
            specifieke voedingswensen kunnen meer nodig hebben.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Wat kost eten in Spanje per maand?</h2>

          <div style={styles.calculationGrid}>
            <div style={styles.calculationCard}>
              <h3 style={styles.calculationTitle}>Eén persoon</h3>
              <p style={styles.formula}>€48 × 4,33 = €208</p>
              <p style={styles.smallText}>Praktische marge: €195 tot €240</p>
            </div>

            <div style={styles.calculationCard}>
              <h3 style={styles.calculationTitle}>Twee personen</h3>
              <p style={styles.formula}>€110 × 4,33 = €476</p>
              <p style={styles.smallText}>Praktische marge: €410 tot €500</p>
            </div>

            <div style={styles.calculationCard}>
              <h3 style={styles.calculationTitle}>Gezin</h3>
              <p style={styles.formula}>€185 × 4,33 = €801</p>
              <p style={styles.smallText}>Praktische marge: €695 tot €825</p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Welke kosten zijn niet meegerekend?</h2>
          <ul style={styles.list}>
            <li>Restaurants en cafés</li>
            <li>Maaltijdbezorging</li>
            <li>Alcohol</li>
            <li>Babyvoeding en luiers</li>
            <li>Voeding voor huisdieren</li>
            <li>Biologische premiumproducten</li>
            <li>Glutenvrije en andere speciale dieetproducten</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Welke supermarkt is het goedkoopst?</h2>
          <p style={styles.paragraph}>
            In Spanje kun je onder meer terecht bij Mercadona, Lidl, Aldi,
            Carrefour, Dia, Consum en Alcampo. Welke supermarkt het goedkoopst
            is, hangt af van de producten die je koopt. De ene winkel kan
            voordeliger zijn voor basisproducten, terwijl een andere betere
            aanbiedingen heeft voor vlees, vis of huishoudelijke artikelen.
          </p>
          <p style={styles.paragraph}>
            Vergelijk daarom de prijs per kilo of liter en niet alleen de prijs
            van de verpakking. Houd ook rekening met reistijd, parkeren,
            bezorgkosten en de kwaliteit van verse producten.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>
            Zo bespaar je op boodschappen in Spanje
          </h2>
          <ol style={styles.list}>
            {savingTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ol>
        </section>

        <section style={styles.cta}>
          <div>
            <p style={styles.ctaEyebrow}>Meer kosten berekenen</p>
            <h2 style={styles.ctaTitle}>
              Bereken je totale maandelijkse kosten in Spanje
            </h2>
            <p style={styles.ctaText}>
              Voeg boodschappen samen met wonen, energie, vervoer,
              verzekeringen en onderhoud.
            </p>
          </div>
          <Link
            href="/nl/guides/maandelijkse-kosten-spanje"
            style={styles.ctaButton}
          >
            Open de rekentool
          </Link>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Veelgestelde vragen</h2>
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
          <h2 style={styles.disclaimerTitle}>Let op</h2>
          <p style={styles.disclaimerText}>
            De bedragen op deze pagina zijn indicatieve voorbeeldbudgetten.
            Werkelijke prijzen verschillen per supermarkt, regio, seizoen,
            aanbieding en huishouden. Controleer actuele prijzen voordat je een
            definitief maandbudget opstelt.
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