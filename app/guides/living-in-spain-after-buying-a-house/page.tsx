import type { Metadata } from "next";
import Link from "next/link";

const PAGE_PATH = "/guides/living-in-spain-after-buying-a-house";
const UPDATED_ISO = "2026-07-29";
const UPDATED_DISPLAY = "29 July 2026";

export const metadata: Metadata = {
  title:
    "Living in Spain After Buying a House: Real Costs in 2026 | Nordic Move Spain",
  description:
    "A detailed 2026 guide to the real cost of living in Spain after buying a home: IBI, community fees, utilities, groceries, restaurants, healthcare, car costs, gym, padel, golf, pool maintenance and realistic monthly budgets.",
  keywords: [
    "living in Spain after buying a house",
    "cost of living Spain after buying property",
    "monthly costs owning property Spain",
    "Costa Blanca living costs 2026",
    "IBI Spain property tax",
    "community fees Spain",
    "utilities Costa Blanca",
    "restaurants Alicante prices",
    "gym membership Spain price",
    "golf Costa Blanca prices",
    "La Sella Golf green fee 2026",
    "private health insurance Spain",
    "British living in Spain costs",
    "retirement costs Costa Blanca",
    "villa running costs Spain",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
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
  openGraph: {
    type: "article",
    locale: "en_GB",
    siteName: "Nordic Move Spain",
    title:
      "Living in Spain After Buying a House: Real Monthly & Annual Costs",
    description:
      "From property tax and electricity to restaurants, sports clubs, golf, healthcare and pool maintenance: a practical 2026 cost guide for life on the Costa Blanca.",
    url: PAGE_PATH,
    publishedTime: UPDATED_ISO,
    modifiedTime: UPDATED_ISO,
    authors: ["Nordic Move Spain"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Living in Spain After Buying a House: 2026 Cost Guide",
    description:
      "Property running costs, utilities, food, restaurants, healthcare, gym, golf and realistic monthly budgets after buying in Spain.",
  },
};

type CostItem = {
  category: string;
  item: string;
  planning: string;
  note: string;
  sourceType?: "market" | "official" | "planning";
};

const propertyCosts: CostItem[] = [
  {
    category: "Local property tax",
    item: "IBI",
    planning: "Property-specific",
    note:
      "IBI is charged by the municipality and calculated from the cadastral value, not simply the market price. Spanish law sets a general urban-property rate framework, while each municipality applies its own rate and local rules.",
    sourceType: "official",
  },
  {
    category: "Municipal charges",
    item: "Waste / rubbish charge",
    planning: "Varies by municipality",
    note:
      "Local waste charges differ by town and can change. Check the latest municipal bill for the actual property rather than using a generic Costa Blanca estimate.",
    sourceType: "official",
  },
  {
    category: "Apartment / urbanisation",
    item: "Community fees",
    planning: "Property-specific",
    note:
      "The comunidad de propietarios can cover lifts, gardens, pools, security, cleaning and shared repairs. Review the latest budget, meeting minutes and any special assessments before buying.",
    sourceType: "planning",
  },
  {
    category: "Protection",
    item: "Home insurance",
    planning: "Obtain an individual quote",
    note:
      "Premiums depend on rebuild value, contents, occupancy, claims history, location, pool and whether the property is left empty for long periods.",
    sourceType: "planning",
  },
  {
    category: "Maintenance reserve",
    item: "Repairs and replacements",
    planning: "Build a separate annual reserve",
    note:
      "Air-conditioning, appliances, awnings, pumps, exterior paint, waterproofing and terraces do not fail on a monthly schedule. A reserve is more realistic than pretending maintenance is zero until something breaks.",
    sourceType: "planning",
  },
];

const everydayCosts: CostItem[] = [
  {
    category: "Utilities",
    item: "Electricity, heating/cooling, water and waste",
    planning: "Alicante reference: about €130/month",
    note:
      "Numbeo's May 2026 Alicante dataset reports €129.94 per month for basic utilities for an 85 m² apartment, with a reported range of roughly €90–€160. Villas, pools and heavy summer air-conditioning can be materially higher.",
    sourceType: "market",
  },
  {
    category: "Internet",
    item: "Home broadband",
    planning: "Alicante reference: about €26/month",
    note:
      "Numbeo reported an average of €26.02 per month for broadband in Alicante in May 2026, with many offers in the €20–€30 range.",
    sourceType: "market",
  },
  {
    category: "Mobile",
    item: "Phone plan",
    planning: "Alicante reference: about €16/month",
    note:
      "Numbeo's Alicante reference for a mobile plan with calls and 10GB+ data was €16.15 per month in May 2026.",
    sourceType: "market",
  },
  {
    category: "Groceries",
    item: "Two adults",
    planning: "Roughly €410–€500/month",
    note:
      "A useful planning range for two adults who cook most meals at home. Brand choice, imported products, alcohol and premium fish or meat can move this substantially.",
    sourceType: "planning",
  },
  {
    category: "Fuel",
    item: "Petrol",
    planning: "Alicante reference: about €1.52/litre",
    note:
      "Numbeo's May 2026 Alicante dataset reported approximately €1.52 per litre. Your real transport budget depends much more on annual kilometres, car type, insurance and parking.",
    sourceType: "market",
  },
];

const lifestyleCosts: CostItem[] = [
  {
    category: "Eating out",
    item: "Inexpensive restaurant meal",
    planning: "Alicante reference: about €15/person",
    note:
      "Numbeo reported €15 for an inexpensive restaurant meal in Alicante in May 2026, with a reported range of €9–€25.",
    sourceType: "market",
  },
  {
    category: "Eating out",
    item: "Mid-range dinner for two",
    planning: "Alicante reference: about €55",
    note:
      "The May 2026 Alicante reference was €55 for a three-course meal for two at a mid-range restaurant, excluding drinks.",
    sourceType: "market",
  },
  {
    category: "Coffee & drinks",
    item: "Cappuccino / draft beer",
    planning: "About €1.89 / €3",
    note:
      "Numbeo's Alicante reference in May 2026 was €1.89 for a cappuccino and €3 for a 0.5-litre domestic draft beer.",
    sourceType: "market",
  },
  {
    category: "Gym",
    item: "Standard fitness membership",
    planning: "About €25–€50/month",
    note:
      "Numbeo's Alicante average was €36.13 per month. Basic-Fit currently advertises its Comfort plan from €24.99 per four weeks after the introductory period.",
    sourceType: "market",
  },
  {
    category: "Racket sports",
    item: "Tennis / padel-style court budget",
    planning: "Around €15–€20/hour as a useful reference",
    note:
      "Numbeo reported €15.57 for one hour of weekend tennis court rental in Alicante. Padel pricing varies by club, time and whether the price is per court or per player.",
    sourceType: "market",
  },
  {
    category: "Cinema",
    item: "International release ticket",
    planning: "Alicante reference: about €8.25",
    note:
      "Numbeo's May 2026 Alicante dataset reported €8.25 per cinema ticket, with a range of roughly €6.90–€12.",
    sourceType: "market",
  },
  {
    category: "Golf",
    item: "18-hole visitor green fee",
    planning: "La Sella 2026 reference: €130",
    note:
      "La Sella Golf's published 2026 tariff lists €130 for an 18-hole visitor green fee. Web offers can be lower and other Costa Blanca courses have different rates.",
    sourceType: "market",
  },
  {
    category: "Golf",
    item: "10-round pack",
    planning: "La Sella 2026 reference: €800",
    note:
      "La Sella's 2026 published tariff lists a ten-green-fee 18-hole pack at €800, valid for six months. Frequent golfers should compare packs and annual membership rather than paying visitor rates every round.",
    sourceType: "market",
  },
  {
    category: "Golf",
    item: "Buggy / practice",
    planning: "€44 buggy · €2 practice token",
    note:
      "La Sella's current visitor pricing lists €44 for an 18-hole buggy and €2 for a driving-range token. Club rental and lessons are extra.",
    sourceType: "market",
  },
];

const homeServiceCosts: CostItem[] = [
  {
    category: "Villa",
    item: "Professional pool maintenance",
    planning: "Local examples from about €70–€95/month",
    note:
      "One Costa Blanca provider currently advertises annual maintenance contracts from €69.95 to €93.95 per month depending on summer visit frequency, including chemicals and IVA. Other providers and larger pools can cost more.",
    sourceType: "market",
  },
  {
    category: "Villa",
    item: "Garden maintenance",
    planning: "Quote by garden size and frequency",
    note:
      "A Mediterranean garden can be inexpensive if simple and drought-tolerant, but lawns, palms, hedges, irrigation and frequent visits change the budget quickly. Ask for an annual service plan, not only an hourly rate.",
    sourceType: "planning",
  },
  {
    category: "Home help",
    item: "Cleaning / keyholding",
    planning: "Optional and property-specific",
    note:
      "Permanent residents may only need occasional cleaning; second-home owners often add keyholding, inspections, storm checks or pre-arrival preparation. Treat this as a separate lifestyle service.",
    sourceType: "planning",
  },
];

const healthCosts: CostItem[] = [
  {
    category: "Private healthcare",
    item: "Younger adults",
    planning: "Indicative market range: €25–€45/month",
    note:
      "ASISA's 2026 guidance gives an indicative range of roughly €25–€45 per month for younger adults. Actual premiums depend on age, province and level of cover.",
    sourceType: "market",
  },
  {
    category: "Private healthcare",
    item: "Age 40–60",
    planning: "Indicative market range: €45–€80/month",
    note:
      "ASISA's 2026 guidance gives €45–€80 per month as an indicative range for middle-aged policyholders, depending on cover and personal factors.",
    sourceType: "market",
  },
  {
    category: "Private healthcare",
    item: "Older residents",
    planning: "Often €90+/month",
    note:
      "Premiums typically rise with age. Sanitas, for example, markets a product for older policyholders from €48.10 per month, but comprehensive no-copay or residency-compatible cover can be more expensive. Always quote for the individual.",
    sourceType: "market",
  },
];

const ukPoints = [
  {
    title: "Buying a house does not itself give a British citizen residency",
    text:
      "If you are British and actually move to Spain, your immigration and residency route must be dealt with separately from the property purchase. GOV.UK's Living in Spain guidance was updated in July 2026 and explains visas, residency, healthcare and driving.",
  },
  {
    title: "Healthcare depends on your status",
    text:
      "Some British residents may access Spanish state healthcare through employment, social-security contributions or an S1 entitlement. Others may need private medical insurance, including for certain residence applications. Do not budget from a generic insurance advert alone.",
  },
  {
    title: "Tax residence is separate from property ownership",
    text:
      "Owning a Spanish home does not automatically make you Spanish tax resident. Equally, becoming resident can change which income and assets Spain taxes. If you remain non-resident, Spanish non-resident tax can still apply to the property even when it is kept for personal use.",
  },
  {
    title: "Plan sterling-to-euro cash flow",
    text:
      "A household paid from UK pensions, investments or salaries in sterling has a currency risk that a euro-paid household does not. A €2,500 monthly lifestyle costs more or less in pounds as the exchange rate moves.",
  },
];

const monthlyBudgets = [
  {
    title: "Couple in an apartment",
    subtitle: "No mortgage · moderate lifestyle · occasional restaurants",
    range: "€1,400–€2,400 / month",
    items: [
      "Community / IBI / insurance reserve",
      "Utilities, internet and two mobile plans",
      "Groceries for two",
      "Restaurants and cafés a few times per month",
      "Local transport or moderate car use",
      "Gym or normal sports membership",
      "Healthcare allowance where needed",
      "General household and maintenance reserve",
    ],
    caveat:
      "Excludes mortgage payments, major travel, expensive renovations and international-school fees.",
  },
  {
    title: "Couple in a villa with pool",
    subtitle: "No mortgage · car · more maintenance · active social life",
    range: "€2,000–€3,500 / month",
    items: [
      "Higher electricity and water use",
      "Pool service and garden allowance",
      "Home insurance and maintenance reserve",
      "Groceries plus regular restaurants",
      "One car and fuel",
      "Private health insurance where required",
      "Gym / sport / social activities",
      "More frequent home repairs and replacements",
    ],
    caveat:
      "A large garden, heated pool, luxury villa, frequent entertaining or multiple cars can push this higher.",
  },
  {
    title: "Villa lifestyle with regular golf",
    subtitle: "No mortgage · frequent dining out · golf several times per month",
    range: "€2,700–€4,500+ / month",
    items: [
      "All normal villa running costs",
      "Restaurants and social spending",
      "Golf green fees or membership",
      "Buggy, lessons or equipment when used",
      "Car and regional travel",
      "Private healthcare allowance",
      "Larger maintenance reserve",
      "Entertainment and discretionary spending",
    ],
    caveat:
      "At a €130 visitor green fee, two golfers playing twice per month would spend €520 on green fees alone before buggies, food or lessons. Membership can therefore materially change the economics.",
  },
];

const sourceLinks = [
  {
    tag: "Alicante · current market prices",
    title:
      "Numbeo — Cost of Living in Alicante, updated May 2026",
    href: "https://www.numbeo.com/cost-of-living/in/Alicante",
  },
  {
    tag: "Fitness · official pricing",
    title: "Basic-Fit Spain — current membership prices",
    href: "https://www.basic-fit.com/es-es/precio",
  },
  {
    tag: "Golf · 2026 official tariff",
    title: "La Sella Golf — 2026 green fees and visitor rates",
    href: "https://lasellagolf.com/d/183177218226166879",
  },
  {
    tag: "Golf · current services",
    title: "La Sella Golf — buggies, club rental and practice facilities",
    href: "https://lasellagolf.com/en/servicios",
  },
  {
    tag: "Pool · local market example",
    title: "The Pool People — Costa Blanca pool-maintenance contracts",
    href: "https://www.thepoolpeople.es/pool-maintenance-contracts/",
  },
  {
    tag: "Healthcare · 2026 pricing guidance",
    title: "ASISA — 2026 health-insurance pricing guidance",
    href: "https://www.asisa.es/preguntas-frecuentes/seguros-asisa/asisa-salud/contratar/como-puedo-calcular-el-precio-de-mi-seguro-de-salud",
  },
  {
    tag: "Healthcare · current market example",
    title: "Sanitas — current private health insurance pricing",
    href: "https://ofertas.segurossalud.sanitas.es/a.html",
  },
  {
    tag: "Property tax · legislation",
    title:
      "BOE — Spanish Local Treasury Law, IBI urban-property rate framework",
    href: "https://boe.es/buscar/act.php?id=BOE-A-2004-4214&p=20260321&tn=1",
  },
  {
    tag: "Non-resident property tax",
    title:
      "Agencia Tributaria — imputed income on Spanish urban property for own use",
    href:
      "https://sede.agenciatributaria.gob.es/Sede/no-residentes/irnr-sin-establecimiento-permanente/cuestiones-especificas-sobre-tributacion-inmuebles/renta-imputada-inmueble-urbano-uso-propio.html",
  },
  {
    tag: "British residents · official guidance",
    title: "GOV.UK — Living in Spain, updated July 2026",
    href: "https://www.gov.uk/guidance/living-in-spain",
  },
];

const faqItems = [
  {
    question: "How much does it cost to live in Spain after buying a house?",
    answer:
      "For a couple with no mortgage, a practical planning range can be around €1,400–€2,400 per month in an apartment and around €2,000–€3,500 in a villa with a pool and car. A more leisure-heavy villa lifestyle with frequent restaurants and golf can exceed €4,000 per month. These are planning scenarios, not official averages.",
  },
  {
    question: "What property costs continue after completion in Spain?",
    answer:
      "Typical ongoing items include IBI, municipal waste charges, community fees where applicable, home insurance, utilities, internet, maintenance and repairs. Villas can add pool, garden, irrigation, exterior and equipment-maintenance costs.",
  },
  {
    question: "How much does eating out cost on the Costa Blanca?",
    answer:
      "Numbeo's May 2026 Alicante dataset reports about €15 for an inexpensive restaurant meal and about €55 for a mid-range three-course meal for two excluding drinks. Tourist seafront locations and higher-end restaurants can be substantially more.",
  },
  {
    question: "How much is a gym membership in Spain?",
    answer:
      "Numbeo's Alicante average was €36.13 per month in May 2026, with a reported range of €25–€50. Basic-Fit currently advertises its Comfort plan from €24.99 per four weeks after the introductory period.",
  },
  {
    question: "How much does golf cost on the Costa Blanca?",
    answer:
      "It varies greatly by course and membership. La Sella Golf's published 2026 tariff lists a visitor 18-hole green fee of €130, a ten-round 18-hole pack at €800 and an 18-hole visitor buggy at €44. Frequent golfers should compare annual membership and resident packages with visitor green fees.",
  },
  {
    question: "How much should I budget for a private pool in Spain?",
    answer:
      "As a current local example, one Costa Blanca provider advertises all-year maintenance from €69.95 to €93.95 per month depending on summer visit frequency, including chemicals and IVA. Electricity, water and equipment replacement remain additional owner costs.",
  },
  {
    question: "Do British owners have to pay Spanish tax if they do not rent the house?",
    answer:
      "A British owner who remains non-resident in Spain can still be subject to Spanish non-resident income tax on imputed income from an urban property kept for personal use or left empty. The exact calculation depends on the cadastral value and current tax rules.",
  },
  {
    question: "Does buying a house in Spain give a British citizen residency?",
    answer:
      "No. Property ownership and immigration status are separate. British citizens moving to Spain need to follow the applicable visa and residency rules. GOV.UK maintains current guidance for British citizens living in Spain.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Living in Spain After Buying a House: Real Monthly and Annual Costs in 2026",
  description:
    "A practical guide to property running costs, utilities, groceries, restaurants, healthcare, sport, golf and lifestyle costs after buying a home in Spain.",
  datePublished: UPDATED_ISO,
  dateModified: UPDATED_ISO,
  inLanguage: "en-GB",
  author: {
    "@type": "Organization",
    name: "Nordic Move Spain",
  },
  publisher: {
    "@type": "Organization",
    name: "Nordic Move Spain",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_PATH,
  },
  about: [
    "Cost of living in Spain",
    "Costa Blanca property ownership",
    "IBI",
    "Restaurants in Alicante",
    "Golf on the Costa Blanca",
    "Healthcare in Spain",
    "British residents in Spain",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
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
      item: "/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: "/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Living in Spain after buying a house",
      item: PAGE_PATH,
    },
  ],
};

function CostTable({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: CostItem[];
}) {
  return (
    <section className="overflow-hidden rounded-[34px] border border-stone-200 bg-white shadow-sm">
      <div className="border-b border-stone-200 bg-[#f6f1ea] px-6 py-7 md:px-8">
        <h3 className="font-serif text-3xl text-[#1e2a3a]">{title}</h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-stone-600">{intro}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-left">
          <thead className="bg-white text-xs uppercase tracking-[0.18em] text-stone-500">
            <tr>
              <th className="px-6 py-4 font-medium md:px-8">Cost</th>
              <th className="px-6 py-4 font-medium">Planning figure</th>
              <th className="px-6 py-4 font-medium md:px-8">What to know</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {items.map((item) => (
              <tr key={`${item.category}-${item.item}`} className="align-top">
                <th className="px-6 py-5 md:px-8">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#9b743d]">
                    {item.category}
                  </p>
                  <p className="mt-2 font-medium text-[#1e2a3a]">{item.item}</p>
                </th>
                <td className="px-6 py-5 font-medium text-[#1e2a3a]">
                  {item.planning}
                </td>
                <td className="px-6 py-5 leading-relaxed text-stone-600 md:px-8">
                  {item.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <header className="bg-[#1e2a3a] px-6 py-24 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/65"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/guides" className="transition hover:text-white">
              Guides
            </Link>
            <span aria-hidden="true">/</span>
            <span>Living in Spain after buying</span>
          </nav>

          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Cost of living · Costa Blanca · Updated {UPDATED_DISPLAY}
          </p>

          <h1 className="mt-6 max-w-6xl font-serif text-5xl leading-[1.05] md:text-7xl">
            Living in Spain after buying a house: what does everyday life
            really cost?
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/80">
            Buying the property is only the beginning of the budget. This guide
            looks at the costs that continue afterwards: IBI, community fees,
            electricity, water, groceries, restaurants, healthcare, cars,
            sports clubs, golf, pool maintenance and the less obvious expenses
            that determine what life on the Costa Blanca actually costs.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#monthly-budgets"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              See realistic monthly budgets
            </a>
            <Link
              href="/relocation-assessment"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Start your Area Match
            </Link>
          </div>
        </div>
      </header>

      {/* METHODOLOGY */}
      <section className="border-b border-stone-200 bg-white/80 px-6 py-8 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#9b743d]">
              Current references
            </p>
            <p className="mt-2 leading-relaxed text-stone-700">
              Restaurant, utility and leisure references use current 2026
              Alicante data where available.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#9b743d]">
              Local examples
            </p>
            <p className="mt-2 leading-relaxed text-stone-700">
              Golf and pool examples use published Costa Blanca prices rather
              than generic national assumptions.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#9b743d]">
              Planning, not promises
            </p>
            <p className="mt-2 leading-relaxed text-stone-700">
              Property-specific charges, insurance and maintenance are shown as
              planning items because no responsible guide can quote them without
              seeing the actual home.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              The mistake to avoid
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              A mortgage-free home is not a cost-free home.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              Once the purchase is complete, the financial picture changes.
              Purchase tax and notary bills disappear, but a new set of
              recurring costs begins: local property tax, utilities, community
              fees, insurance, maintenance, transport and the cost of actually
              enjoying your life in Spain.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              The lifestyle element is often underestimated. A couple who walks
              to the beach, cooks at home and lives in a simple apartment has a
              very different monthly budget from a couple with a villa, pool,
              two cars, regular restaurant meals and golf several times per
              month.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              That is why this article separates
              <strong className="font-medium text-[#1e2a3a]">
                {" "}
                property costs, everyday living costs and optional lifestyle
                costs.
              </strong>{" "}
              The distinction makes a relocation budget far more useful.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK NUMBERS */}
      <section className="px-6 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Alicante · utilities",
                value: "€129.94",
                text:
                  "May 2026 reference for basic monthly utilities in an 85 m² apartment.",
              },
              {
                label: "Alicante · casual restaurant",
                value: "€15",
                text:
                  "Current reference for one meal at an inexpensive restaurant.",
              },
              {
                label: "Alicante · gym",
                value: "€36.13",
                text:
                  "Current average monthly fitness-club reference in Alicante.",
              },
              {
                label: "La Sella · golf",
                value: "€130",
                text:
                  "Published 2026 visitor green fee for 18 holes before extras.",
              },
            ].map((item) => (
              <article
                key={item.label}
                className="rounded-[30px] bg-white p-8 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                  {item.label}
                </p>
                <p className="mt-5 font-serif text-4xl text-[#1e2a3a]">
                  {item.value}
                </p>
                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY COSTS */}
      <section className="bg-[#e9dfd2] px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              1 · Costs attached to the property
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              These continue whether you go out for dinner or stay home all
              month.
            </h2>
          </div>

          <CostTable
            title="Property ownership and fixed running costs"
            intro="Do not estimate these from the purchase price alone. Ask for the actual IBI bill, community budget, insurance quote and recent utility history for the property."
            items={propertyCosts}
          />

          <div className="mt-8 rounded-[30px] bg-[#1e2a3a] p-8 text-white md:p-10">
            <p className="text-sm uppercase tracking-[0.24em] text-[#c8a063]">
              About IBI
            </p>
            <h3 className="mt-4 font-serif text-3xl">
              The cadastral value matters more than the estate-agent asking
              price.
            </h3>
            <p className="mt-5 max-w-5xl leading-relaxed text-white/80">
              Spain's Local Treasury Law sets the general urban IBI rate
              framework at 0.4% to 1.10%, with municipalities setting the
              applicable local rate and certain adjustments. The percentage is
              applied to the cadastral tax base, not simply to what you paid for
              the house. That is why two properties with similar market values
              can have different IBI bills.
            </p>
          </div>
        </div>
      </section>

      {/* UTILITIES + FOOD */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                2 · Everyday living
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Utilities and groceries form the base of the monthly budget.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Alicante's current utility references are useful for an
                apartment, but villas require more caution. Pool pumps,
                irrigation, larger air-conditioning systems and outdoor
                lighting can turn an apparently low Spanish utility budget into
                a much larger summer bill.
              </p>
            </div>
          </div>

          <CostTable
            title="Utilities, communications, food and transport"
            intro="Current Alicante references are useful for orientation. Your property type and lifestyle remain more important than the regional average."
            items={everydayCosts}
          />

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/guides/supermarket-prices-spain"
              className="rounded-full border border-[#1e2a3a] px-6 py-3 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              See supermarket prices →
            </Link>
            <Link
              href="/guides/cost-of-living-spain"
              className="rounded-full border border-[#1e2a3a] px-6 py-3 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Full cost-of-living guide →
            </Link>
          </div>
        </div>
      </section>

      {/* RESTAURANTS & LEISURE */}
      <section className="bg-[#1e2a3a] px-6 py-28 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              3 · Restaurants, sport and social life
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight">
              The cost of living in Spain is also the cost of enjoying Spain.
            </h2>
            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-white/75">
              A budget that only includes electricity and groceries is not a
              lifestyle budget. Coffee on the paseo, lunch with friends, a gym
              membership, padel, cinema and golf can easily become regular
              monthly spending.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[34px] bg-[#f6f1ea] text-stone-900">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse text-left">
                <thead className="bg-white text-xs uppercase tracking-[0.18em] text-stone-500">
                  <tr>
                    <th className="px-6 py-4 font-medium md:px-8">Lifestyle</th>
                    <th className="px-6 py-4 font-medium">Current reference</th>
                    <th className="px-6 py-4 font-medium md:px-8">
                      Budget implication
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {lifestyleCosts.map((item) => (
                    <tr key={`${item.category}-${item.item}`} className="align-top">
                      <th className="px-6 py-5 md:px-8">
                        <p className="text-xs uppercase tracking-[0.18em] text-[#9b743d]">
                          {item.category}
                        </p>
                        <p className="mt-2 font-medium text-[#1e2a3a]">
                          {item.item}
                        </p>
                      </th>
                      <td className="px-6 py-5 font-medium text-[#1e2a3a]">
                        {item.planning}
                      </td>
                      <td className="px-6 py-5 leading-relaxed text-stone-600 md:px-8">
                        {item.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* GOLF */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Golf budget
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Occasional golf and a golf lifestyle are two different budgets.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              La Sella Golf near Dénia provides a useful current Costa Blanca
              reference. Its published 2026 rate is €130 for an 18-hole visitor
              green fee, while a ten-round 18-hole pack is €800. An 18-hole
              visitor buggy is €44.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              That means two people playing twice per month at the standard
              visitor green fee would spend €520 per month on green fees alone.
              Add buggies twice each and the same month's golf spend can rise by
              another €176. Frequent players should therefore compare annual
              membership, resident offers and multi-round packages before using
              pay-as-you-play prices as their long-term budget.
            </p>

            <div className="mt-8 rounded-[28px] bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-[#9b743d]">
                Practical rule
              </p>
              <p className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                If golf is part of your weekly routine, choose the area and club
                before you choose the house.
              </p>
              <p className="mt-4 leading-relaxed text-stone-600">
                A cheaper house 35 minutes from the course can be less useful
                than a slightly more expensive home close to the club you will
                actually use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VILLA MAINTENANCE */}
      <section className="bg-[#e9dfd2] px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              4 · Villa, pool and garden
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Outdoor space creates value — and a maintenance schedule.
            </h2>
          </div>

          <CostTable
            title="Services that are easy to overlook when buying a villa"
            intro="A private pool and Mediterranean garden can be manageable, but they should have their own annual operating budget."
            items={homeServiceCosts}
          />

          <p className="mt-8 max-w-5xl text-sm leading-relaxed text-stone-600">
            Pool-service pricing above is a local market example, not a Costa
            Blanca tariff. Larger pools, salt systems, heating, repairs, water
            top-ups and replacement equipment are separate. Always ask exactly
            what a monthly maintenance contract includes.
          </p>
        </div>
      </section>

      {/* HEALTHCARE */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                5 · Healthcare
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Do not use one online insurance price for a retirement budget.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-stone-600">
              Private medical insurance is highly age- and coverage-sensitive.
              Residency requirements may also require a particular level of
              cover. A promotional entry price is therefore useful only as a
              market reference, not as proof of what your own policy will cost.
            </p>
          </div>

          <CostTable
            title="Private healthcare planning"
            intro="The ranges below are current market orientation. Get an individual written quote based on age, postcode, medical history, copay structure and residency requirements."
            items={healthCosts}
          />
        </div>
      </section>

      {/* UK */}
      <section className="bg-white px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              For British owners
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Property ownership, residency, healthcare and tax are four
              separate questions.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ukPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] bg-[#f6f1ea] p-8"
              >
                <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {item.title}
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[30px] border border-[#c8a063]/30 bg-[#fffaf3] p-8 md:p-10">
            <h3 className="font-serif text-3xl text-[#1e2a3a]">
              A second home can still create Spanish tax even if it is not
              rented.
            </h3>
            <p className="mt-5 max-w-5xl leading-relaxed text-stone-700">
              The Spanish Tax Agency confirms that an individual non-resident
              owner of Spanish urban property used personally or left empty can
              be subject to non-resident income tax on imputed income. If you
              become Spanish tax resident, the analysis changes. Treat tax
              residence as a professional cross-border question, not as a
              by-product of receiving the keys.
            </p>
            <Link
              href="/guides/tax-rules-second-home-spain"
              className="mt-6 inline-block text-sm font-medium text-[#1e2a3a] underline underline-offset-4"
            >
              Read the UK second-home tax guide →
            </Link>
          </div>
        </div>
      </section>

      {/* MONTHLY BUDGETS */}
      <section
        id="monthly-budgets"
        className="bg-[#1e2a3a] px-6 py-28 text-white md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Three realistic planning scenarios
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight">
              What should you budget per month after the house is already paid
              for?
            </h2>
            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-white/75">
              These examples are deliberately broad. They are designed to test
              whether a lifestyle is financially comfortable, not to promise
              what a particular household will spend.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {monthlyBudgets.map((budget) => (
              <article
                key={budget.title}
                className="rounded-[32px] border border-white/12 bg-white/5 p-8"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-[#c8a063]">
                  {budget.subtitle}
                </p>
                <h3 className="mt-4 font-serif text-3xl">{budget.title}</h3>
                <p className="mt-5 font-serif text-4xl text-[#f3ede3]">
                  {budget.range}
                </p>
                <ul className="mt-7 space-y-3 text-white/75">
                  {budget.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#c8a063]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-t border-white/12 pt-5 text-sm leading-relaxed text-white/55">
                  {budget.caveat}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[30px] bg-white p-8 text-stone-900 md:p-10">
            <h3 className="font-serif text-3xl text-[#1e2a3a]">
              The number that matters is not “Spain's average cost of living”.
            </h3>
            <p className="mt-5 max-w-5xl leading-relaxed text-stone-600">
              It is the cost of <strong>your property + your location + your
              habits</strong>. A house that requires two cars, weekly pool and
              garden service and frequent golf can create a higher lifestyle
              budget than a centrally located apartment even when the apartment
              cost more to buy.
            </p>
          </div>
        </div>
      </section>

      {/* FAMILY */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <article className="rounded-[34px] bg-white p-9 shadow-sm md:p-11">
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                Families
              </p>
              <h2 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
                Schooling can dwarf several other living-cost categories.
              </h2>
              <p className="mt-6 leading-relaxed text-stone-600">
                Numbeo's May 2026 Alicante dataset reported an average annual
                international-primary-school tuition figure of approximately
                €8,394 per child, with a very wide reported range. School choice,
                registration fees, meals, transport, uniforms and activities
                need to be checked directly with the school.
              </p>
            </article>

            <article className="rounded-[34px] bg-[#e9dfd2] p-9 md:p-11">
              <p className="text-sm uppercase tracking-[0.25em] text-[#9b743d]">
                Pets and home life
              </p>
              <h2 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
                Small recurring costs become meaningful over a full year.
              </h2>
              <p className="mt-6 leading-relaxed text-stone-700">
                Veterinary care, pet insurance, grooming, cleaning, alarm
                monitoring, subscriptions, occasional tradespeople and home
                security are easy to omit from a spreadsheet. Add a general
                household contingency instead of assuming every month will be
                predictable.
              </p>
              <Link
                href="/guides/pets-in-spain"
                className="mt-7 inline-block text-sm font-medium text-[#1e2a3a] underline underline-offset-4"
              >
                Read the pets-in-Spain guide →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* SOURCE SECTION */}
      <section id="sources" className="bg-[#e9dfd2] px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              Sources and methodology
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Current prices where possible, planning ranges where necessary.
            </h2>
            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-stone-700">
              Market prices move. Property-specific costs move even more. The
              useful approach is to use current public references for everyday
              spending and obtain actual bills or quotes for the house itself.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {sourceLinks.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[26px] bg-[#f6f1ea] p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                  {source.tag}
                </p>
                <p className="mt-3 font-medium leading-relaxed text-[#1e2a3a]">
                  {source.title} ↗
                </p>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] bg-white/70 p-7 text-sm leading-relaxed text-stone-600">
            <strong className="font-medium text-[#1e2a3a]">
              Editorial note:
            </strong>{" "}
            Numbeo is a contributor-based market dataset rather than an official
            tariff. It is used here as a current Alicante price reference and is
            clearly separated from official tax and government sources.
            Lifestyle budgets are Nordic Move Spain planning scenarios, not
            statistical household averages.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Frequently asked questions
          </p>
          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Living costs after buying in Spain.
          </h2>

          <div className="mt-12 space-y-5">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-[28px] bg-white p-7 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {item.question}
                </summary>
                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="bg-white px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Related guides
          </p>
          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a]">
            Build the full picture before you choose the property.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/guides/total-cost-buying-property-spain",
                title: "Total cost of buying a property in Spain",
              },
              {
                href: "/guides/supermarket-prices-spain",
                title: "Supermarket prices in Spain",
              },
              {
                href: "/guides/cost-of-living-spain",
                title: "Cost of living in Spain",
              },
              {
                href: "/guides/tax-rules-second-home-spain",
                title: "UK tax rules for a second home in Spain",
              },
              {
                href: "/guides/where-to-buy-property-costa-blanca-north",
                title: "Where to buy on the Costa Blanca North",
              },
              {
                href: "/guides/common-mistakes-buying-property-spain",
                title: "Common mistakes when buying property in Spain",
              },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-[28px] bg-[#f6f1ea] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {guide.title}
                </h3>
                <span className="mt-5 inline-block text-sm font-medium text-[#9b743d]">
                  Read guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32 pt-10 md:px-8">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-10 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            A softer landing after the purchase
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight">
            Choose a home that fits the life you want — and the monthly budget
            that comes with it.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Nordic Move Spain supports international buyers from area and
            property selection through independent purchase checks, purchase,
            renovation and moving. After arrival, we can also support practical
            setup around administration, insurance and local services for a
            smoother start in Spain.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Start your Area Match
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Plan an introductory call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}