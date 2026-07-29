import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How much do groceries cost per week in Spain?",
  description:
    "See three practical grocery baskets for Spain: for one person, two people, and a family with two children.",
  keywords: [
    "weekly groceries Spain",
    "grocery budget Spain",
    "monthly food costs Spain",
    "groceries for two people Spain",
    "supermarket prices Spain",
  ],
  alternates: {
    canonical: "/en/guides/weekly-grocery-cost-spain",
  },
  openGraph: {
    title: "How much do groceries cost per week in Spain?",
    description:
      "Three practical example grocery baskets for one person, two people, and a family with two children.",
    type: "article",
    locale: "en_US",
    url: "/en/guides/weekly-grocery-cost-spain",
  },
};

const overview = [
  {
    household: "One person, budget",
    weekly: "€45 – €55",
    monthly: "€195 – €240",
  },
  {
    household: "Two people, standard",
    weekly: "€95 – €115",
    monthly: "€410 – €500",
  },
  {
    household: "Family with two children",
    weekly: "€160 – €190",
    monthly: "€695 – €825",
  },
];

const singleBasket = [
  ["Bread", "2 loaves", "€1"],
  ["Milk", "2 litres", "€2"],
  ["Eggs", "12 eggs", "€3"],
  ["Yoghurt", "8 servings", "€2"],
  ["Rice", "1 kilo", "€1"],
  ["Pasta", "1 kilo", "€2"],
  ["Chicken", "About 1 kilo", "€3"],
  ["Legumes", "4 packs", "€3"],
  ["Vegetables", "For seven days", "€8"],
  ["Fruit", "For seven days", "€5"],
  ["Potatoes and onions", "Several meals", "€4"],
  ["Cheese and cold cuts", "Small packs", "€5"],
  ["Coffee, oil and spices", "Weekly share", "€6"],
  ["Snacks and other products", "—", "€5"],
];

const coupleBasket = [
  ["Bread and breakfast", "Bread, oats and cereal", "€8"],
  ["Dairy", "Milk, yoghurt and butter", "€8"],
  ["Eggs", "18 to 24 eggs", "€6"],
  ["Rice, pasta and potatoes", "Several main meals", "€8"],
  ["Chicken", "Fillets, thighs or whole chicken", "€10"],
  ["Meat and fish", "Several meals", "€15"],
  ["Legumes", "Beans, lentils and chickpeas", "€5"],
  ["Vegetables", "For lunch and dinner", "€18"],
  ["Fruit", "For two people", "€12"],
  ["Cheese and cold cuts", "For sandwiches and snacks", "€8"],
  ["Coffee, oil and spices", "Weekly share", "€5"],
  ["Household products", "Paper goods and cleaning supplies", "€5"],
  ["Snacks and drinks", "—", "€7"],
];

const familyBasket = [
  ["Bread and wraps", "Breakfast and lunch", "€8"],
  ["Milk", "About 8 litres", "€7"],
  ["Yoghurt and desserts", "Several packs", "€6"],
  ["Eggs", "24 eggs", "€6"],
  ["Cereal and oats", "—", "€5"],
  ["Rice, pasta and potatoes", "Family-size packs", "€12"],
  ["Chicken", "About 2 to 3 kilos", "€15"],
  ["Meat and fish", "Several meals", "€28"],
  ["Legumes", "For soups and hot meals", "€6"],
  ["Vegetables", "For the whole family", "€28"],
  ["Fruit", "Fruit and school snacks", "€22"],
  ["Cheese and cold cuts", "Sandwich fillings", "€14"],
  ["Snacks and biscuits", "—", "€12"],
  ["Juice and other drinks", "—", "€8"],
  ["Oil, coffee and spices", "Weekly share", "€8"],
  ["Household products", "Cleaning supplies and paper goods", "€8"],
];

const savingTips = [
  "Choose own-brand products more often.",
  "Buy seasonal fruit and vegetables.",
  "Compare the price per kilo or litre.",
  "Use beans, lentils and chickpeas as an affordable source of protein.",
  "Cook larger portions and freeze some for later.",
  "Avoid doing your main weekly shop at a small store in a tourist area.",
  "Only buy special offers when you would normally use the product anyway.",
  "Keep all your grocery receipts for one month.",
];

const faq = [
  {
    question: "How much do groceries cost in Spain for one person?",
    answer:
      "A budget-conscious single person can expect to spend about €45 to €55 per week. That is roughly €195 to €240 per month.",
  },
  {
    question: "How much do groceries cost for two people in Spain?",
    answer:
      "For two adults, about €95 to €115 per week is a useful estimate. That works out to roughly €410 to €500 per month.",
  },
  {
    question: "How much does a family spend on food in Spain?",
    answer:
      "A family with two adults and two children may need about €160 to €190 per week. That is roughly €695 to €825 per month.",
  },
  {
    question: "Are restaurants included in the grocery budget?",
    answer:
      "No. The example amounts cover supermarket groceries and some household products. Eating out and food delivery should be budgeted separately.",
  },
  {
    question: "How do you convert a weekly budget into a monthly budget?",
    answer:
      "Multiply the weekly amount by 4.33. On average, a calendar month is slightly longer than four weeks.",
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
            <th style={styles.th}>Product group</th>
            <th style={styles.th}>Quantity or examples</th>
            <th style={{ ...styles.th, ...styles.priceCell }}>Cost</th>
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
              Total
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
    headline: "How much do groceries cost per week in Spain?",
    description:
      "Three practical grocery baskets for one person, two people, and a family with two children.",
    inLanguage: "en-US",
    mainEntityOfPage: "/en/guides/weekly-grocery-cost-spain",
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
          <p style={styles.eyebrow}>Groceries and cost of living</p>
          <h1 style={styles.title}>
            How much do groceries cost per week in Spain?
          </h1>
          <p style={styles.lead}>
            If you are considering living in Spain or buying a second home,
            you will want to know how much money you need for everyday groceries.
            Below are three practical example grocery baskets: for one person,
            two people, and a family with two children.
          </p>
          <p style={styles.updated}>Last updated: July 2026</p>
        </header>

        <section style={styles.summaryCard}>
          <h2 style={styles.summaryTitle}>Grocery budget at a glance</h2>
          <div style={styles.overviewGrid}>
            {overview.map((item) => (
              <div style={styles.overviewCard} key={item.household}>
                <h3 style={styles.overviewTitle}>{item.household}</h3>
                <p style={styles.weeklyPrice}>{item.weekly}</p>
                <p style={styles.smallText}>per week</p>
                <div style={styles.divider} />
                <p style={styles.monthlyPrice}>{item.monthly} per month</p>
              </div>
            ))}
          </div>
          <p style={styles.note}>
            For the monthly amounts, the weekly budget has been multiplied by 4.33.
            Restaurants, food delivery, alcohol and special diet products
            are not included.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Are groceries in Spain cheap?</h2>
          <p style={styles.paragraph}>
            The price of groceries does not depend on the country alone. The
            supermarket, brand, region and season also play a role.
            Own-brand products are usually cheaper than well-known brands. Fresh fruit
            and vegetables can be good value when you buy produce that is in season.
            
          </p>
          <p style={styles.paragraph}>
            In tourist coastal towns and small neighbourhood stores, some
            products can actually be more expensive. The amounts below are therefore
            intended as a practical budget rather than a fixed price list.
          </p>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={styles.numberBadge}>1</span>
            <div>
              <h2 style={styles.heading}>Budget basket for one person</h2>
              <p style={styles.sectionIntro}>
                Estimated budget: about <strong>€48 per week</strong>.
              </p>
            </div>
          </div>

          <p style={styles.paragraph}>
            A single person who mainly cooks at home, buys own-brand products and wastes little
            food can manage on about €45 to €55 per week.
            This works best when you plan meals in advance and use ingredients
            across several dishes.
          </p>

          <BasketTable rows={singleBasket} total="about €48" />

          <div style={styles.tipBox}>
            <strong>Example of an affordable weekly menu</strong>
            <p style={styles.tipText}>
              Think of oats or bread for breakfast, salad or leftovers for
              lunch, and dishes such as pasta with vegetables, rice with chicken,
              Spanish tortilla, lentil soup and chickpeas with vegetables.
            </p>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={styles.numberBadge}>2</span>
            <div>
              <h2 style={styles.heading}>Standard weekly menu for two people</h2>
              <p style={styles.sectionIntro}>
                Estimated budget: about <strong>€110 per week</strong>.
              </p>
            </div>
          </div>

          <p style={styles.paragraph}>
            For two adults who eat a varied diet, you can budget
            about €95 to €115 per week. That works out to roughly €410 to
            €500 per month.
          </p>

          <BasketTable rows={coupleBasket} total="about €110" />

          <p style={styles.paragraph}>
            A couple who buys a lot of fresh fish, organic meat, special
            diet products or international brands can easily
            spend more than this amount. Those who use plenty of own-brand products and make use of leftovers
            may be able to stay below €100 per week.
          </p>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <span style={styles.numberBadge}>3</span>
            <div>
              <h2 style={styles.heading}>
                Groceries for a family with two children
              </h2>
              <p style={styles.sectionIntro}>
                Estimated budget: about <strong>€185 per week</strong>.
              </p>
            </div>
          </div>

          <p style={styles.paragraph}>
            A family with two adults and two children needs larger
            quantities. Breakfast products, sandwich fillings, dairy products,
            snacks and drinks therefore take up a larger share of the budget.
          </p>

          <BasketTable rows={familyBasket} total="about €185" />

          <p style={styles.paragraph}>
            That is about €800 per month. With young children, the amount may
            be lower. Families with teenagers, lots of sports activities or
            specific dietary preferences may need more.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>How much does food cost per month in Spain?</h2>

          <div style={styles.calculationGrid}>
            <div style={styles.calculationCard}>
              <h3 style={styles.calculationTitle}>One person</h3>
              <p style={styles.formula}>€48 × 4.33 = €208</p>
              <p style={styles.smallText}>Practical range: €195 to €240</p>
            </div>

            <div style={styles.calculationCard}>
              <h3 style={styles.calculationTitle}>Two people</h3>
              <p style={styles.formula}>€110 × 4.33 = €476</p>
              <p style={styles.smallText}>Practical range: €410 to €500</p>
            </div>

            <div style={styles.calculationCard}>
              <h3 style={styles.calculationTitle}>Family</h3>
              <p style={styles.formula}>€185 × 4.33 = €801</p>
              <p style={styles.smallText}>Practical range: €695 to €825</p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Which costs are not included?</h2>
          <ul style={styles.list}>
            <li>Restaurants and cafés</li>
            <li>Food delivery</li>
            <li>Alcohol</li>
            <li>Baby food and nappies</li>
            <li>Pet food</li>
            <li>Premium organic products</li>
            <li>Gluten-free and other special diet products</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Which supermarket is the cheapest?</h2>
          <p style={styles.paragraph}>
            In Spain, you can shop at supermarkets such as Mercadona, Lidl, Aldi,
            Carrefour, Dia, Consum and Alcampo. Which supermarket is the cheapest
            depends on the products you buy. One store may
            be cheaper for basic products, while another may have better
            deals on meat, fish or household products.
          </p>
          <p style={styles.paragraph}>
            So compare the price per kilo or litre, not just the price
            of the package. Also take travel time, parking,
            delivery costs and the quality of fresh products into account.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>
            How to save money on groceries in Spain
          </h2>
          <ol style={styles.list}>
            {savingTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ol>
        </section>

        <section style={styles.cta}>
          <div>
            <p style={styles.ctaEyebrow}>Calculate more costs</p>
            <h2 style={styles.ctaTitle}>
              Calculate your total monthly costs in Spain
            </h2>
            <p style={styles.ctaText}>
              Combine groceries with housing, energy, transport,
              insurance and maintenance.
            </p>
          </div>
          <Link
            href="/en/guides/monthly-costs-spain"
            style={styles.ctaButton}
          >
            Open the calculator
          </Link>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Frequently asked questions</h2>
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
          <h2 style={styles.disclaimerTitle}>Please note</h2>
          <p style={styles.disclaimerText}>
            The amounts on this page are indicative example budgets.
            Actual prices vary by supermarket, region, season,
            special offer and household. Check current prices before
            setting your final monthly budget.
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