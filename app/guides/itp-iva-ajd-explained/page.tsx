import type { Metadata } from "next";
import type { ReactNode } from "react";

/**
 * Place this file at:
 * app/en/guides/itp-iva-ajd-spain/page.tsx
 *
 * Verify the internal routes below before publishing.
 */
const PAGE_URL = "/en/guides/itp-iva-ajd-spain";
const CONTACT_URL = "/en/contact";
const SERVICES_URL = "/en/services";
const GUIDES_URL = "/en/guides";
const BUYING_GUIDE_URL = "/en/guides/buying-a-house-in-spain";
const COSTS_GUIDE_URL = "/en/guides/costs-buying-a-house-in-spain";

export const metadata: Metadata = {
  title: "ITP, IVA and AJD in Spain Explained (2026) | Nordic Move Spain",
  description:
    "ITP, IVA and AJD when buying a home in Spain: current 2026 rates for the Costa Blanca and Valencia, worked examples, exceptions and key considerations.",
  keywords: [
    "ITP Spain 2026",
    "IVA buying a house Spain",
    "AJD Spain 2026",
    "property purchase tax Spain",
    "buying costs Spain",
    "property transfer tax Spain",
    "new build tax Spain",
    "ITP Valencia 2026",
    "ITP Costa Blanca",
    "AJD Valencia 2026",
    "Costa Blanca property purchase tax",
    "Nordic Move Spain",
  ],
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    locale: "en_GB",
    url: PAGE_URL,
    siteName: "Nordic Move Spain",
    title: "ITP, IVA and AJD when buying a home in Spain — 2026 guide",
    description:
      "Which purchase tax applies to resale and new-build property? Includes current rates in the Valencian Community from 1 June 2026.",
    publishedTime: "2026-07-23T00:00:00.000Z",
    modifiedTime: "2026-07-23T00:00:00.000Z",
    authors: ["Nordic Move Spain"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITP, IVA and AJD in Spain Explained (2026)",
    description:
      "Current tax rates, clear examples and practical points for property buyers on the Costa Blanca.",
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

const officialSources = {
  valencianPropertyTax:
    "https://atv.gva.es/es/he-comprat-un-inmoble",
  valencianLaw:
    "https://www.boe.es/buscar/act.php?id=BOE-A-1998-8202",
  spanishTaxAgency:
    "https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
  referenceValue:
    "https://atv.gva.es/es/valor-de-referencia",
  model600:
    "https://atv.gva.es/es/tributos-servicios-sin-c-confeccion600",
  mortgageAjd:
    "https://www.boe.es/buscar/doc.php?id=BOE-A-2018-15344",
};

const faqItems = [
  {
    question: "Do I pay both ITP and IVA when I buy a property in Spain?",
    answer:
      "Normally, no. When buying a resale property, the buyer generally pays ITP. On the first supply of a new-build property by the developer, the buyer generally pays IVA and, in addition, AJD on the notarised purchase deed. The legal classification of the transaction is decisive.",
  },
  {
    question: "How much is ITP in the Valencian Community in 2026?",
    answer:
      "For taxable transactions from 1 June 2026, the general ITP rate in the Valencian Community is, in principle, 9%. If the value of the transferred property exceeds €1,000,000, the rate is generally 11%. Reduced rates are available for certain buyers and properties, subject to strict conditions.",
  },
  {
    question: "How much IVA do I pay on a new-build property in Spain?",
    answer:
      "The first supply of a standard new-build home by a developer is generally subject to 10% IVA. A 4% rate may apply to certain types of social housing. The residential rate may also cover up to two parking spaces and one annex when they are supplied together with the home and are located in the same building or complex.",
  },
  {
    question: "How much is AJD in Valencia in 2026?",
    answer:
      "In the Valencian Community, a general AJD rate of 1.4% applies to many notarised property deeds from 1 June 2026. A rate of 0.1% may apply to a deed documenting the purchase of a qualifying main residence. Other specific situations may be subject to a 2% rate.",
  },
  {
    question: "Is ITP calculated on the purchase price or the valor de referencia?",
    answer:
      "For property, the cadastral valor de referencia is important. If the agreed purchase price or declared value is higher, the highest relevant value is generally used as the taxable base. If no applicable reference value exists, other statutory valuation rules apply.",
  },
  {
    question: "When must Modelo 600 be filed?",
    answer:
      "In the Valencian Community, the general filing period for these transactions is one month from the date on which the taxable act or agreement takes place. Where there are several buyers, a separate return may be required for each taxpayer.",
  },
  {
    question: "Does the buyer pay AJD on the mortgage?",
    answer:
      "For a mortgage deed, the lender has been the taxpayer liable for AJD on the mortgage since the 2018 legislative change. This is separate from any AJD the buyer may owe on the purchase deed when buying a new-build property.",
  },
  {
    question: "Are ITP, IVA and AJD all of the additional purchase costs?",
    answer:
      "No. In addition to taxes, there may be notary, land registry, registration, legal, technical, banking and translation costs. Renovation, utility connections, insurance and municipal charges may also be relevant. Obtain a complete cost estimate before signing.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ITP, IVA and AJD in Spain explained: property purchase taxes in 2026",
  description:
    "A detailed guide to ITP, IVA and AJD when buying property in Spain, including current 2026 rates for the Valencian Community.",
  inLanguage: "en-GB",
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  author: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "/en",
  },
  publisher: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "/en",
  },
  about: [
    "Impuesto sobre Transmisiones Patrimoniales",
    "Impuesto sobre el Valor Añadido",
    "Actos Jurídicos Documentados",
    "Buying property in Spain",
    "Valencian Community",
    "Costa Blanca",
  ],
  citation: Object.values(officialSources),
};

const faqSchema = {
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "/en",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: GUIDES_URL,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ITP, IVA and AJD explained",
      item: PAGE_URL,
    },
  ],
};

const summaryCards = [
  {
    abbreviation: "ITP",
    title: "Resale property",
    rate: "9%",
    text: "General rate in the Valencian Community from 1 June 2026. Above €1 million, an 11% rate generally applies.",
  },
  {
    abbreviation: "IVA",
    title: "Standard new build",
    rate: "10%",
    text: "Generally applies to the first supply of a home by the property developer.",
  },
  {
    abbreviation: "AJD",
    title: "Notarised deed",
    rate: "1.4%",
    text: "General rate in Valencia from 1 June 2026. A 0.1% rate may apply to a qualifying main residence.",
  },
];

const usedHomeExamples = [
  {
    price: "€250,000",
    rate: "9%",
    tax: "€22,500",
    note: "General ITP rate",
  },
  {
    price: "€400,000",
    rate: "9%",
    tax: "€36,000",
    note: "General ITP rate",
  },
  {
    price: "€750,000",
    rate: "9%",
    tax: "€67,500",
    note: "General ITP rate",
  },
  {
    price: "€1,200,000",
    rate: "11%",
    tax: "€132,000",
    note: "Value above €1 million",
  },
];

const newBuildExamples = [
  {
    price: "€250,000",
    iva: "€25,000",
    ajdSecondHome: "€3,500",
    totalSecondHome: "€28,500",
    ajdMainHome: "€250",
  },
  {
    price: "€400,000",
    iva: "€40,000",
    ajdSecondHome: "€5,600",
    totalSecondHome: "€45,600",
    ajdMainHome: "€400",
  },
  {
    price: "€600,000",
    iva: "€60,000",
    ajdSecondHome: "€8,400",
    totalSecondHome: "€68,400",
    ajdMainHome: "€600",
  },
];

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

function SourceLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <main className="tax-page">
        <article>
          <header className="hero">
            <div className="hero-inner">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <a href="/en">Home</a>
                <span aria-hidden="true">/</span>
                <a href={GUIDES_URL}>Guides</a>
                <span aria-hidden="true">/</span>
                <span>ITP, IVA and AJD</span>
              </nav>

              <div className="hero-grid">
                <div className="hero-copy">
                  <p className="eyebrow">
                    TAXES WHEN BUYING A PROPERTY IN SPAIN
                  </p>
                  <h1>ITP, IVA and AJD explained: what do you pay in 2026?</h1>
                  <p className="lead">
                    When you buy a property in Spain, the type of transaction
                    determines which tax you pay. A resale property is usually
                    subject to ITP. A standard new-build purchase is generally
                    subject to IVA plus AJD. In this guide, Nordic Move Spain
                    explains the differences, current Valencian rates, the tax
                    base and the most important pitfalls.
                  </p>

                  <div className="author-row">
                    <div className="author-mark" aria-hidden="true">
                      N
                    </div>
                    <div>
                      <strong>Nordic Move Spain</strong>
                      <span>
                        Costa Blanca buying assistance · Updated 23 July 2026
                      </span>
                    </div>
                  </div>
                </div>

                <aside className="hero-card" aria-label="Property taxes at a glance">
                  <p className="mini-label">AT A GLANCE</p>
                  <h2>Which tax applies to which type of purchase?</h2>
                  <div className="decision-list">
                    <div>
                      <span>01</span>
                      <p>
                        <strong>Resale property</strong>
                        Usually ITP, with no IVA on the purchase price.
                      </p>
                    </div>
                    <div>
                      <span>02</span>
                      <p>
                        <strong>New build from a developer</strong>
                        Usually 10% IVA plus AJD on the notarised purchase deed.
                      </p>
                    </div>
                    <div>
                      <span>03</span>
                      <p>
                        <strong>Mortgage deed</strong>
                        AJD on the mortgage is generally borne by the lender.
                      </p>
                    </div>
                  </div>
                  <a className="text-link" href="#worked-examples">
                    View the worked examples →
                  </a>
                </aside>
              </div>
            </div>
          </header>

          <section className="quick-summary" aria-label="Current 2026 tax rates">
            <div className="section-width card-grid">
              {summaryCards.map((card) => (
                <div className="summary-card" key={card.abbreviation}>
                  <div className="summary-top">
                    <span>{card.abbreviation}</span>
                    <strong>{card.rate}</strong>
                  </div>
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="article-layout section-width">
            <aside className="toc">
              <p className="toc-title">CONTENTS</p>
              <ol>
                <li>
                  <a href="#difference">ITP, IVA and AJD: the difference</a>
                </li>
                <li>
                  <a href="#itp">ITP on resale property</a>
                </li>
                <li>
                  <a href="#tax-base">Purchase price and valor de referencia</a>
                </li>
                <li>
                  <a href="#iva">IVA on new-build property</a>
                </li>
                <li>
                  <a href="#ajd">AJD on the purchase deed</a>
                </li>
                <li>
                  <a href="#worked-examples">Worked examples</a>
                </li>
                <li>
                  <a href="#reduced-rates">Reduced rates</a>
                </li>
                <li>
                  <a href="#filing">Filing and payment</a>
                </li>
                <li>
                  <a href="#pitfalls">Common mistakes</a>
                </li>
                <li>
                  <a href="#faq">Frequently asked questions</a>
                </li>
              </ol>

              <div className="toc-contact">
                <p>
                  Would you like to know which taxes and total purchase costs
                  apply to your case before you sign?
                </p>
                <a href={CONTACT_URL}>Schedule an introduction</a>
              </div>
            </aside>

            <div className="article-content">
              <section id="difference" className="content-section first-section">
                <p className="section-kicker">THE BASICS</p>
                <h2>ITP, IVA and AJD are three different taxes</h2>
                <p>
                  These abbreviations are often used interchangeably when
                  discussing a Spanish property purchase, but they serve
                  different purposes. The key question is whether you are buying
                  a resale property or a property that is treated for tax
                  purposes as a first supply by a business or property developer.
                </p>

                <div className="definition-grid">
                  <div>
                    <span>ITP</span>
                    <h3>Impuesto sobre Transmisiones Patrimoniales</h3>
                    <p>
                      Property transfer tax generally paid by the buyer when
                      purchasing a resale property. The rate is largely
                      determined by the autonomous community.
                    </p>
                  </div>
                  <div>
                    <span>IVA</span>
                    <h3>Impuesto sobre el Valor Añadido</h3>
                    <p>
                      Spanish VAT. The first supply of a standard new-build home
                      by the developer is generally subject to 10% IVA.
                    </p>
                  </div>
                  <div>
                    <span>AJD</span>
                    <h3>Actos Jurídicos Documentados</h3>
                    <p>
                      Tax on certain notarised documents. For a new-build
                      purchase, AJD is generally charged alongside IVA on the
                      notarised purchase deed.
                    </p>
                  </div>
                </div>

                <div className="key-answer">
                  <strong>Practical rule of thumb</strong>
                  <p>
                    Resale property: usually ITP. Standard new build from the
                    developer: usually IVA plus AJD. The specific deed, seller,
                    previous use and legal structure ultimately determine the
                    tax treatment.
                  </p>
                </div>
              </section>

              <section id="itp" className="content-section">
                <p className="section-kicker">RESALE PROPERTY</p>
                <h2>ITP in the Valencian Community from 1 June 2026</h2>
                <p>
                  For properties on the Costa Blanca — including property in the
                  provinces of Alicante and Valencia — Valencian legislation is
                  relevant. For taxable events from <strong>1 June 2026</strong>,
                  the general ITP rate on property is <strong>9%</strong>.
                </p>
                <p>
                  If the value of the transferred property or right exceeds{" "}
                  <strong>€1,000,000</strong>, a rate of <strong>11%</strong>
                  generally applies. This is not a stepped rate where only the
                  portion above one million euros is taxed at 11%: the applicable
                  legal classification must be assessed for the transaction as a
                  whole.
                </p>

                <div className="rate-banner">
                  <div>
                    <span>GENERAL RATE</span>
                    <strong>9%</strong>
                    <small>from 1 June 2026</small>
                  </div>
                  <div>
                    <span>VALUE ABOVE</span>
                    <strong>€1m</strong>
                    <small>generally 11% ITP</small>
                  </div>
                </div>

                <p>
                  The date of the taxable event matters. When legislation
                  changes, a deed executed before or after the effective date may
                  fall under a different rate. Have not only the reservation
                  contract but also the planned completion date checked from a
                  tax perspective.
                </p>

                <p className="source-note">
                  Official source:{" "}
                  <SourceLink href={officialSources.valencianPropertyTax}>
                    Agencia Tributaria Valenciana — property purchase
                  </SourceLink>
                  .
                </p>
              </section>

              <section id="tax-base" className="content-section">
                <p className="section-kicker">TAX BASE</p>
                <h2>
                  ITP is not always calculated simply on the agreed purchase
                  price
                </h2>
                <p>
                  When buying a resale property, the tax authority does not look
                  only at the amount stated in the purchase deed. The Spanish
                  cadastral <em>valor de referencia</em> may operate as a minimum
                  tax base.
                </p>

                <div className="formula">
                  <span>SIMPLIFIED RULE OF THUMB</span>
                  <strong>
                    ITP tax base = the highest relevant value among the purchase
                    price, declared value and valor de referencia
                  </strong>
                </div>

                <p>
                  If a property is stated in the deed at €300,000 but the
                  applicable reference value is €335,000, ITP may generally be
                  calculated on €335,000. If the purchase price is higher than
                  the reference value, the higher purchase price will generally
                  be relevant.
                </p>
                <p>
                  If the property does not have a certified reference value,
                  statutory alternatives apply, including the declared value,
                  agreed price and market value. A low purchase price therefore
                  does not automatically mean an equally low tax base.
                </p>

                <div className="warning">
                  <div aria-hidden="true">!</div>
                  <p>
                    <strong>Check the valor de referencia before buying.</strong>
                    A difference between the asking price, purchase price and tax
                    reference value can materially change your budget. Also have
                    it assessed whether the reference value can be challenged in
                    cases involving unusual condition, unauthorised extensions or
                    a special location.
                  </p>
                </div>

                <p className="source-note">
                  Background:{" "}
                  <SourceLink href={officialSources.referenceValue}>
                    Agencia Tributaria Valenciana — valor de referencia
                  </SourceLink>
                  .
                </p>
              </section>

              <section id="iva" className="content-section">
                <p className="section-kicker">NEW BUILD</p>
                <h2>When do you pay 10% IVA on a property?</h2>
                <p>
                  For VAT purposes, a property is not considered “new” solely
                  because of its construction year. The key concept is the tax
                  treatment of the <strong>first supply</strong>. The sale of a
                  completed property by the developer is generally subject to IVA
                  when it qualifies as that first supply.
                </p>
                <p>
                  For a standard residential property, the rate in 2026 is
                  generally <strong>10% IVA</strong>. A rate of <strong>4%</strong>{" "}
                  may apply to certain officially protected homes under a special
                  regime or public promotion.
                </p>

                <div className="fact-cards">
                  <div>
                    <span>10%</span>
                    <h3>Standard residential property</h3>
                    <p>
                      The usual rate for the first supply of a home by the
                      property developer.
                    </p>
                  </div>
                  <div>
                    <span>4%</span>
                    <h3>Certain social housing</h3>
                    <p>
                      Only for legally defined protected housing; not for
                      standard commercial new-build property.
                    </p>
                  </div>
                  <div>
                    <span>2 + 1</span>
                    <h3>Parking spaces and annex</h3>
                    <p>
                      The residential rate may include up to two parking spaces
                      and one jointly supplied annex when the applicable
                      conditions are met.
                    </p>
                  </div>
                </div>

                <h3>When is a property no longer “new” for tax purposes?</h3>
                <p>
                  The Spanish Tax Agency describes, among other cases, a
                  situation where a developer has continuously rented a completed
                  property to other people for two years or more. A later sale to
                  a different buyer may then qualify as a second supply, which can
                  shift the treatment from IVA to ITP. If the property is instead
                  purchased by the sitting tenant, the outcome may be different.
                </p>
                <p>
                  For turnkey projects, resales by a company, off-plan purchases
                  and long-term rented new builds, make sure the reason for
                  applying IVA or ITP is explicitly documented.
                </p>

                <p className="source-note">
                  Official guidance:{" "}
                  <SourceLink href={officialSources.spanishTaxAgency}>
                    Agencia Tributaria — IVA or ITP when buying a property
                  </SourceLink>
                  .
                </p>
              </section>

              <section id="ajd" className="content-section">
                <p className="section-kicker">NOTARISED DEED</p>
                <h2>AJD: the tax that often applies alongside IVA on new builds</h2>
                <p>
                  AJD is not a second VAT charge. It is a tax on certain
                  notarised documents that record a transaction with an
                  assessable value and can be entered in a public register. This
                  is why AJD often applies on top of IVA when buying a new-build
                  property.
                </p>

                <div className="ajd-grid">
                  <div className="ajd-main">
                    <p>General AJD rate from 1 June 2026</p>
                    <strong>1.4%</strong>
                    <span>
                      for example, on a second home or holiday property where no
                      special rate applies
                    </span>
                  </div>
                  <div>
                    <p>Qualifying main residence</p>
                    <strong>0.1%</strong>
                    <span>
                      on first copies of deeds documenting the purchase of the
                      buyer's own qualifying main residence
                    </span>
                  </div>
                  <div>
                    <p>Special cases</p>
                    <strong>2%</strong>
                    <span>
                      including certain property transactions where an IVA
                      exemption is waived
                    </span>
                  </div>
                </div>

                <p>
                  The reduced 0.1% rate does not automatically apply simply
                  because you intend to live in the property yourself. The
                  Spanish tax concept of <em>vivienda habitual</em> is subject to
                  conditions relating to actual occupation and permanence. A
                  holiday home or second residence will not normally qualify.
                </p>

                <h3>AJD on the mortgage is a separate issue</h3>
                <p>
                  Since the national legislative change in 2018, the lender is
                  the taxpayer liable for AJD on a mortgage deed. This does not
                  mean that all AJD disappears for the buyer. When buying a new
                  build, the buyer may still owe AJD on the separate purchase
                  deed.
                </p>

                <p className="source-note">
                  Rates:{" "}
                  <SourceLink href={officialSources.valencianLaw}>
                    consolidated Valencian tax law, Articles 13 and 14
                  </SourceLink>
                  . Mortgage deed:{" "}
                  <SourceLink href={officialSources.mortgageAjd}>
                    Real Decreto-ley 17/2018
                  </SourceLink>
                  .
                </p>
              </section>

              <section id="worked-examples" className="content-section">
                <p className="section-kicker">WORKED EXAMPLES</p>
                <h2>What do these rates mean for your budget in practice?</h2>
                <p>
                  The figures below are simplified examples for property in the
                  Valencian Community with a deed executed from 1 June 2026. They
                  assume that the stated purchase price is also the relevant tax
                  base and that no reduction, exemption or other special regime
                  applies.
                </p>

                <h3>Example 1: resale property at the general ITP rate</h3>
                <div className="table-wrap" tabIndex={0}>
                  <table>
                    <caption>
                      Indicative ITP on resale property in Valencia
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Tax base</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Indicative ITP</th>
                        <th scope="col">Explanation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usedHomeExamples.map((row) => (
                        <tr key={row.price}>
                          <th scope="row">{row.price}</th>
                          <td>{row.rate}</td>
                          <td>
                            <strong>{row.tax}</strong>
                          </td>
                          <td>{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3>
                  Example 2: standard new build as a second home or holiday
                  property
                </h3>
                <p>
                  In this example, we use 10% IVA and the general Valencian AJD
                  rate of 1.4%.
                </p>
                <div className="table-wrap" tabIndex={0}>
                  <table>
                    <caption>
                      Indicative IVA and AJD on a standard new-build purchase
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Purchase price</th>
                        <th scope="col">10% IVA</th>
                        <th scope="col">1.4% AJD</th>
                        <th scope="col">Total IVA + AJD</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newBuildExamples.map((row) => (
                        <tr key={row.price}>
                          <th scope="row">{row.price}</th>
                          <td>{row.iva}</td>
                          <td>{row.ajdSecondHome}</td>
                          <td>
                            <strong>{row.totalSecondHome}</strong>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3>Example 3: new build qualifying as a main residence</h3>
                <p>
                  If the purchase deed genuinely qualifies for the 0.1% rate for
                  a qualifying main residence, AJD in the same examples is €250
                  on a tax base of €250,000, €400 on €400,000 and €600 on
                  €600,000. The 10% IVA remains payable in this simplified
                  example.
                </p>

                <div className="comparison">
                  <div>
                    <span>Resale property €400,000</span>
                    <strong>€36,000 ITP</strong>
                    <small>at 9% on a €400,000 tax base</small>
                  </div>
                  <div>
                    <span>New build €400,000, second home</span>
                    <strong>€45,600 IVA + AJD</strong>
                    <small>10% IVA plus 1.4% AJD</small>
                  </div>
                </div>

                <div className="notice">
                  <strong>Not included:</strong> notary fees, land registration,
                  lawyer's fees, technical inspections, bank charges, valuation,
                  translations, powers of attorney, utility connection costs,
                  insurance, renovation and any buyer-assistance fees.
                </div>
              </section>

              <section id="reduced-rates" className="content-section">
                <p className="section-kicker">EXCEPTIONS</p>
                <h2>When can a reduced ITP rate apply?</h2>
                <p>
                  The Valencian Community has several reduced ITP rates. These
                  schemes are aimed at specific buyers, property types and uses.
                  They are not automatically available to every buyer who is
                  young, has a family or is moving permanently to Spain.
                </p>

                <div className="reduced-list">
                  <div>
                    <span>6% / 8%</span>
                    <div>
                      <h3>Buyers under 35</h3>
                      <p>
                        For a first qualifying main residence, a 6% rate may
                        apply where the value is up to and including €180,000,
                        and an 8% rate above €180,000, provided the statutory
                        income and documentation requirements are also met.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>6% / 8%</span>
                    <div>
                      <h3>Certain protected housing</h3>
                      <p>
                        Similar thresholds and additional requirements may apply
                        to officially protected housing under the general regime,
                        including use as a first main residence.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>3% / 4%</span>
                    <div>
                      <h3>Specific social circumstances</h3>
                      <p>
                        Rates of 3% or 4% may apply to certain protected housing,
                        large families or single-parent families, qualifying
                        disabilities and victims of gender-based violence,
                        depending on factors including property value, income,
                        ownership share and supporting evidence.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  The €180,000 threshold, the definition of a first main
                  residence, income limits, age on the relevant date and the
                  ownership share acquired must all be checked carefully.
                  Applying a reduction incorrectly can lead to an additional tax
                  assessment and interest.
                </p>

                <div className="expert-note">
                  <p className="mini-label">PRACTICAL ADVICE FROM NORDIC MOVE SPAIN</p>
                  <p>
                    Before signing a reservation or purchase contract, ask in
                    writing which tax treatment your adviser is applying, which
                    legal provision it is based on and which documents are
                    required. Do not leave this until the day of the notary.
                  </p>
                </div>
              </section>

              <section id="filing" className="content-section">
                <p className="section-kicker">FILING AND PAYMENT</p>
                <h2>Who pays the tax, and when?</h2>

                <div className="timeline">
                  <div>
                    <span>1</span>
                    <div>
                      <h3>Before signing</h3>
                      <p>
                        Check the property type, seller, first or subsequent
                        supply, valor de referencia, intended use and any
                        potentially reduced rates.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>2</span>
                    <div>
                      <h3>At purchase</h3>
                      <p>
                        On new builds, IVA is generally paid to the seller or
                        developer. On resale property, the buyer's ITP liability
                        arises.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>3</span>
                    <div>
                      <h3>Within one month</h3>
                      <p>
                        In the Valencian Community, the relevant documents or
                        tax returns generally need to be filed within one month.
                        Modelo 600 is commonly used for ITP and AJD.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>4</span>
                    <div>
                      <h3>Registration and records</h3>
                      <p>
                        Keep the tax return, proof of payment, deed, reference
                        value, invoices and evidence supporting any reduction in
                        your purchase file.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  The Valencian online application processes one taxpayer per
                  form. Where there are several buyers, a separate return may
                  therefore be required for each ownership share. Make sure the
                  ownership proportions in the deed, tax return and payment all
                  match.
                </p>

                <p className="source-note">
                  Filing information:{" "}
                  <SourceLink href={officialSources.model600}>
                    Agencia Tributaria Valenciana — Modelo 600
                  </SourceLink>
                  .
                </p>
              </section>

              <section id="pitfalls" className="content-section">
                <p className="section-kicker">AVOIDING RISK</p>
                <h2>Seven common mistakes involving ITP, IVA and AJD</h2>

                <ol className="mistake-list">
                  <li>
                    <strong>Calculating only from the purchase price.</strong>
                    The valor de referencia can result in a higher ITP tax base.
                  </li>
                  <li>
                    <strong>Calling a property “new” without a tax check.</strong>
                    Construction year, first supply and previous rental use are
                    not the same thing.
                  </li>
                  <li>
                    <strong>Forgetting AJD on a new build.</strong>
                    A budget may include 10% IVA but still omit a possible 1.4%
                    AJD charge.
                  </li>
                  <li>
                    <strong>Automatically applying the 0.1% AJD rate.</strong>
                    A second home or holiday property does not automatically
                    qualify as a main residence for tax purposes.
                  </li>
                  <li>
                    <strong>
                      Assuming a reduced ITP rate based on a single factor.
                    </strong>
                    Age, property value, income, use, documentation and ownership
                    share may all be relevant.
                  </li>
                  <li>
                    <strong>Ignoring the date of the deed.</strong>
                    Valencian rates changed on 1 June 2026.
                  </li>
                  <li>
                    <strong>Confusing taxes with total buying costs.</strong>
                    Legal, technical, notarial and registration costs are in
                    addition to the taxes.
                  </li>
                </ol>
              </section>

              <section className="content-section">
                <p className="section-kicker">BUYER ASSISTANCE</p>
                <h2>From a tax estimate to a secure purchase file</h2>
                <p>
                  A correct tax calculation is one part of a secure property
                  purchase. Nordic Move Spain brings the practical steps
                  together: from choosing the region and property to coordinating
                  with independent legal and technical professionals, the notary,
                  translators, contractors and other parties involved.
                </p>
                <p>
                  This means that before signing, you can see not only the asking
                  price but also the likely tax base, taxes, additional costs,
                  legal considerations and technical risks.
                </p>

                <div className="cta">
                  <div>
                    <p className="mini-label">PERSONAL BUYER ASSISTANCE</p>
                    <h2>More certainty. One trusted point of contact.</h2>
                    <p>
                      Discuss your property, budget and timeline before making a
                      legal or financial commitment.
                    </p>
                  </div>
                  <div className="cta-actions">
                    <a className="button button-light" href={CONTACT_URL}>
                      Schedule an introduction
                    </a>
                    <a className="cta-link" href={SERVICES_URL}>
                      View our services →
                    </a>
                  </div>
                </div>

                <div className="related">
                  <h3>Read also</h3>
                  <div>
                    <a href={BUYING_GUIDE_URL}>
                      Buying a house in Spain: step-by-step guide
                    </a>
                    <a href={COSTS_GUIDE_URL}>
                      All costs when buying property in Spain
                    </a>
                    <a href={GUIDES_URL}>View all guides</a>
                  </div>
                </div>
              </section>

              <section id="faq" className="content-section">
                <p className="section-kicker">FREQUENTLY ASKED QUESTIONS</p>
                <h2>FAQ about ITP, IVA and AJD in Spain</h2>

                <div className="faq-list">
                  {faqItems.map((item) => (
                    <details key={item.question}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section className="sources">
                <p className="section-kicker">SOURCES AND CURRENCY</p>
                <h2>Official sources used for this guide</h2>
                <p>
                  The tax information was updated on 23 July 2026 and focuses on
                  property purchases in the Valencian Community. Different ITP
                  and AJD rates may apply to property in another autonomous
                  community.
                </p>
                <ul>
                  <li>
                    <SourceLink href={officialSources.valencianLaw}>
                      BOE — consolidated Law 13/1997 of the Valencian Community
                    </SourceLink>
                  </li>
                  <li>
                    <SourceLink href={officialSources.valencianPropertyTax}>
                      Agencia Tributaria Valenciana — property purchase
                    </SourceLink>
                  </li>
                  <li>
                    <SourceLink href={officialSources.spanishTaxAgency}>
                      Agencia Tributaria — IVA or ITP when buying a property
                    </SourceLink>
                  </li>
                  <li>
                    <SourceLink href={officialSources.referenceValue}>
                      Agencia Tributaria Valenciana — valor de referencia
                    </SourceLink>
                  </li>
                  <li>
                    <SourceLink href={officialSources.model600}>
                      Agencia Tributaria Valenciana — Modelo 600
                    </SourceLink>
                  </li>
                  <li>
                    <SourceLink href={officialSources.mortgageAjd}>
                      BOE — AJD on mortgage loans
                    </SourceLink>
                  </li>
                </ul>
                <p className="disclaimer">
                  This guide provides general information and does not constitute
                  legal, tax, financial or notarial advice. Rates, conditions and
                  interpretations may change. Have your specific transaction
                  reviewed by a qualified independent professional before signing.
                </p>
              </section>
            </div>
          </section>
        </article>
      </main>

      <style>{`
        :root {
          --nms-cream: #f6f1ea;
          --nms-cream-deep: #eee6dc;
          --nms-taupe: #d1cdc7;
          --nms-navy: #1e2a3a;
          --nms-navy-soft: #344052;
          --nms-gold: #c8a063;
          --nms-gold-dark: #9b743a;
          --nms-text: #494242;
          --nms-muted: #746b65;
          --nms-white: #ffffff;
          --nms-line: #ddd4ca;
          --nms-shadow: 0 18px 50px rgba(30, 42, 58, 0.08);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--nms-cream);
          color: var(--nms-text);
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          line-height: 1.72;
        }

        a {
          color: var(--nms-navy);
          text-decoration-color: rgba(200, 160, 99, 0.8);
          text-decoration-thickness: 1px;
          text-underline-offset: 0.22em;
        }

        a:hover {
          color: var(--nms-gold-dark);
        }

        .tax-page {
          min-height: 100vh;
          overflow: hidden;
          background: var(--nms-cream);
        }

        .section-width,
        .hero-inner {
          width: min(100% - 40px, 1280px);
          margin-inline: auto;
        }

        .hero {
          padding: clamp(38px, 6vw, 86px) 0 clamp(72px, 9vw, 120px);
          background:
            radial-gradient(
              circle at 86% 20%,
              rgba(200, 160, 99, 0.16),
              transparent 27%
            ),
            var(--nms-cream);
        }

        .breadcrumbs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: clamp(42px, 6vw, 74px);
          color: var(--nms-muted);
          font-size: 0.88rem;
        }

        .breadcrumbs a {
          color: inherit;
          text-decoration: none;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.32fr) minmax(350px, 0.68fr);
          gap: clamp(42px, 8vw, 110px);
          align-items: center;
        }

        .eyebrow,
        .section-kicker,
        .mini-label,
        .toc-title {
          margin: 0 0 15px;
          color: var(--nms-gold-dark);
          font-size: 0.77rem;
          font-weight: 750;
          letter-spacing: 0.28em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3 {
          color: var(--nms-navy);
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 500;
          line-height: 1.14;
          text-wrap: balance;
        }

        h1 {
          max-width: 850px;
          margin: 0;
          font-size: clamp(2.55rem, 5.3vw, 5.2rem);
          letter-spacing: -0.045em;
        }

        h2 {
          margin: 0 0 23px;
          font-size: clamp(1.9rem, 3.5vw, 3.25rem);
          letter-spacing: -0.035em;
        }

        h3 {
          margin: 34px 0 13px;
          font-size: clamp(1.28rem, 2vw, 1.58rem);
        }

        p {
          margin: 0 0 23px;
        }

        .lead {
          max-width: 800px;
          margin-top: 30px;
          color: var(--nms-navy-soft);
          font-size: clamp(1.05rem, 1.7vw, 1.23rem);
        }

        .author-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 36px;
        }

        .author-mark {
          display: grid;
          width: 44px;
          height: 44px;
          place-items: center;
          border: 1px solid rgba(30, 42, 58, 0.28);
          background: var(--nms-navy);
          color: var(--nms-white);
          border-radius: 50%;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.1rem;
        }

        .author-row strong,
        .author-row span {
          display: block;
        }

        .author-row strong {
          color: var(--nms-navy);
        }

        .author-row span {
          margin-top: 2px;
          color: var(--nms-muted);
          font-size: 0.87rem;
        }

        .hero-card {
          padding: clamp(28px, 4vw, 46px);
          border: 10px solid #e9dfd1;
          outline: 2px solid var(--nms-white);
          background: var(--nms-white);
          border-radius: 28px;
          box-shadow: var(--nms-shadow);
        }

        .hero-card h2 {
          font-size: clamp(1.7rem, 2.8vw, 2.45rem);
        }

        .decision-list {
          margin: 26px 0;
        }

        .decision-list > div {
          display: grid;
          grid-template-columns: 38px 1fr;
          gap: 13px;
          padding: 17px 0;
          border-top: 1px solid var(--nms-line);
        }

        .decision-list > div:last-child {
          border-bottom: 1px solid var(--nms-line);
        }

        .decision-list span {
          display: grid;
          width: 32px;
          height: 32px;
          place-items: center;
          background: var(--nms-gold);
          color: var(--nms-white);
          border-radius: 50%;
          font-size: 0.72rem;
          font-weight: 800;
        }

        .decision-list p {
          margin: 0;
          color: var(--nms-muted);
          font-size: 0.93rem;
        }

        .decision-list strong {
          display: block;
          margin-bottom: 2px;
          color: var(--nms-navy);
        }

        .text-link {
          font-weight: 750;
        }

        .quick-summary {
          padding-bottom: clamp(68px, 8vw, 108px);
          background:
            linear-gradient(
              to bottom,
              var(--nms-cream) 0,
              var(--nms-cream) 38%,
              var(--nms-taupe) 38%,
              var(--nms-taupe) 100%
            );
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .summary-card {
          min-height: 270px;
          padding: 29px;
          background: var(--nms-white);
          border-radius: 18px;
          box-shadow: var(--nms-shadow);
        }

        .summary-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
        }

        .summary-top span {
          color: var(--nms-gold-dark);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .summary-top strong {
          color: var(--nms-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 2.9rem;
          font-weight: 500;
          line-height: 0.9;
        }

        .summary-card h2 {
          margin-top: 36px;
          font-size: 1.6rem;
        }

        .summary-card p {
          margin: 0;
          color: var(--nms-muted);
          font-size: 0.95rem;
        }

        .article-layout {
          display: grid;
          grid-template-columns: 250px minmax(0, 850px);
          gap: clamp(48px, 8vw, 110px);
          align-items: start;
          justify-content: center;
          padding-block: clamp(70px, 9vw, 120px);
        }

        .toc {
          position: sticky;
          top: 26px;
          padding: 28px 0;
        }

        .toc ol {
          margin: 0;
          padding: 0;
          list-style: none;
          counter-reset: toc;
        }

        .toc li {
          counter-increment: toc;
          border-top: 1px solid var(--nms-line);
        }

        .toc li:last-child {
          border-bottom: 1px solid var(--nms-line);
        }

        .toc li a {
          display: grid;
          grid-template-columns: 27px 1fr;
          gap: 6px;
          padding: 11px 0;
          color: var(--nms-muted);
          font-size: 0.84rem;
          line-height: 1.45;
          text-decoration: none;
        }

        .toc li a::before {
          content: counter(toc, decimal-leading-zero);
          color: var(--nms-gold-dark);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.05em;
        }

        .toc li a:hover {
          color: var(--nms-navy);
        }

        .toc-contact {
          margin-top: 26px;
          padding: 20px;
          background: var(--nms-navy);
          color: var(--nms-white);
          border-radius: 13px;
        }

        .toc-contact p {
          margin-bottom: 13px;
          font-size: 0.84rem;
        }

        .toc-contact a {
          color: var(--nms-white);
          font-size: 0.83rem;
          font-weight: 800;
        }

        .article-content {
          min-width: 0;
        }

        .content-section {
          padding: clamp(55px, 7vw, 90px) 0;
          border-bottom: 1px solid var(--nms-line);
          scroll-margin-top: 30px;
        }

        .first-section {
          padding-top: 0;
        }

        .content-section > p {
          max-width: 790px;
        }

        .definition-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
          margin: 37px 0;
        }

        .definition-grid > div {
          padding: 24px;
          background: var(--nms-white);
          border: 1px solid var(--nms-line);
          border-radius: 15px;
        }

        .definition-grid span {
          color: var(--nms-gold-dark);
          font-size: 0.76rem;
          font-weight: 850;
          letter-spacing: 0.14em;
        }

        .definition-grid h3 {
          margin: 17px 0 11px;
          font-size: 1.23rem;
        }

        .definition-grid p {
          margin: 0;
          color: var(--nms-muted);
          font-size: 0.91rem;
        }

        .key-answer {
          margin-top: 34px;
          padding: 26px 28px;
          border-left: 4px solid var(--nms-gold);
          background: var(--nms-cream-deep);
        }

        .key-answer strong {
          display: block;
          margin-bottom: 7px;
          color: var(--nms-navy);
        }

        .key-answer p {
          margin: 0;
        }

        .rate-banner {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1px;
          margin: 38px 0;
          overflow: hidden;
          background: var(--nms-gold);
          border: 1px solid var(--nms-gold);
          border-radius: 17px;
        }

        .rate-banner > div {
          padding: 29px;
          background: var(--nms-navy);
          color: var(--nms-white);
        }

        .rate-banner span,
        .rate-banner strong,
        .rate-banner small {
          display: block;
        }

        .rate-banner span {
          color: #d9bd91;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .rate-banner strong {
          margin: 9px 0 4px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 500;
          line-height: 1;
        }

        .rate-banner small {
          color: #e7e1d8;
        }

        .source-note {
          margin-top: 28px;
          color: var(--nms-muted);
          font-size: 0.83rem;
        }

        .formula {
          margin: 34px 0;
          padding: 31px;
          background: var(--nms-navy);
          color: var(--nms-white);
          border-radius: 17px;
        }

        .formula span,
        .formula strong {
          display: block;
        }

        .formula span {
          margin-bottom: 12px;
          color: #d9bd91;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .formula strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.35rem, 2.7vw, 2rem);
          font-weight: 500;
          line-height: 1.4;
        }

        .warning {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 18px;
          margin: 34px 0;
          padding: 25px;
          border: 1px solid #ddc39b;
          background: #fbf4e8;
          border-radius: 15px;
        }

        .warning > div {
          display: grid;
          width: 39px;
          height: 39px;
          place-items: center;
          background: var(--nms-gold);
          color: var(--nms-white);
          border-radius: 50%;
          font-weight: 850;
        }

        .warning p {
          margin: 0;
        }

        .fact-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
          margin: 37px 0;
        }

        .fact-cards > div {
          padding: 25px;
          background: var(--nms-white);
          border-radius: 15px;
        }

        .fact-cards span {
          display: block;
          color: var(--nms-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 2.5rem;
          line-height: 1;
        }

        .fact-cards h3 {
          margin: 20px 0 10px;
          font-size: 1.24rem;
        }

        .fact-cards p {
          margin: 0;
          color: var(--nms-muted);
          font-size: 0.9rem;
        }

        .ajd-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 14px;
          margin: 36px 0;
        }

        .ajd-grid > div {
          padding: 26px;
          background: var(--nms-white);
          border: 1px solid var(--nms-line);
          border-radius: 16px;
        }

        .ajd-grid .ajd-main {
          background: var(--nms-navy);
          color: var(--nms-white);
          border-color: var(--nms-navy);
        }

        .ajd-grid p {
          margin: 0;
          color: var(--nms-muted);
          font-size: 0.83rem;
          font-weight: 750;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .ajd-grid .ajd-main p,
        .ajd-grid .ajd-main span {
          color: #e5ddd3;
        }

        .ajd-grid strong,
        .ajd-grid span {
          display: block;
        }

        .ajd-grid strong {
          margin: 15px 0 13px;
          color: var(--nms-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 3rem;
          font-weight: 500;
          line-height: 1;
        }

        .ajd-grid span {
          color: var(--nms-muted);
          font-size: 0.86rem;
        }

        .table-wrap {
          margin: 30px 0 44px;
          overflow-x: auto;
          border: 1px solid var(--nms-line);
          background: var(--nms-white);
          border-radius: 15px;
        }

        table {
          width: 100%;
          min-width: 690px;
          border-collapse: collapse;
        }

        caption {
          padding: 15px 18px;
          color: var(--nms-muted);
          font-size: 0.82rem;
          text-align: left;
        }

        th,
        td {
          padding: 15px 18px;
          border-top: 1px solid var(--nms-line);
          text-align: left;
          vertical-align: top;
        }

        thead th {
          background: var(--nms-navy);
          color: var(--nms-white);
          border-top: 0;
          font-size: 0.76rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        tbody th {
          color: var(--nms-navy);
        }

        tbody tr:nth-child(even) {
          background: #faf7f2;
        }

        .comparison {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
          margin: 37px 0;
        }

        .comparison > div {
          padding: 26px;
          border: 1px solid var(--nms-line);
          background: var(--nms-white);
          border-radius: 15px;
        }

        .comparison span,
        .comparison strong,
        .comparison small {
          display: block;
        }

        .comparison span {
          color: var(--nms-muted);
          font-size: 0.82rem;
          font-weight: 750;
          text-transform: uppercase;
        }

        .comparison strong {
          margin: 12px 0 6px;
          color: var(--nms-navy);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.8rem;
          font-weight: 500;
        }

        .comparison small {
          color: var(--nms-muted);
        }

        .notice {
          padding: 21px 23px;
          background: var(--nms-cream-deep);
          border-radius: 13px;
        }

        .reduced-list {
          margin: 36px 0;
          border-top: 1px solid var(--nms-line);
        }

        .reduced-list > div {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 24px;
          padding: 27px 0;
          border-bottom: 1px solid var(--nms-line);
        }

        .reduced-list > div > span {
          color: var(--nms-gold-dark);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.75rem;
        }

        .reduced-list h3 {
          margin: 0 0 8px;
        }

        .reduced-list p {
          margin: 0;
        }

        .expert-note {
          margin-top: 38px;
          padding: 30px;
          background: var(--nms-white);
          border: 1px solid var(--nms-line);
          border-radius: 15px;
          box-shadow: var(--nms-shadow);
        }

        .expert-note p:last-child {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.22rem;
          line-height: 1.55;
        }

        .timeline {
          margin: 38px 0;
        }

        .timeline > div {
          display: grid;
          grid-template-columns: 46px 1fr;
          gap: 18px;
          padding: 0 0 27px;
          position: relative;
        }

        .timeline > div:not(:last-child)::after {
          content: "";
          position: absolute;
          left: 21px;
          top: 45px;
          bottom: 0;
          width: 1px;
          background: var(--nms-gold);
        }

        .timeline > div > span {
          display: grid;
          width: 43px;
          height: 43px;
          place-items: center;
          background: var(--nms-gold);
          color: var(--nms-white);
          border-radius: 50%;
          font-weight: 850;
          position: relative;
          z-index: 1;
        }

        .timeline h3 {
          margin: 4px 0 7px;
        }

        .timeline p {
          margin: 0;
        }

        .mistake-list {
          margin: 35px 0 0;
          padding: 0;
          list-style: none;
          counter-reset: mistakes;
        }

        .mistake-list li {
          counter-increment: mistakes;
          display: grid;
          grid-template-columns: 43px 1fr;
          gap: 17px;
          padding: 20px 0;
          border-top: 1px solid var(--nms-line);
        }

        .mistake-list li:last-child {
          border-bottom: 1px solid var(--nms-line);
        }

        .mistake-list li::before {
          content: counter(mistakes, decimal-leading-zero);
          color: var(--nms-gold-dark);
          font-size: 0.8rem;
          font-weight: 850;
          letter-spacing: 0.07em;
        }

        .mistake-list strong {
          color: var(--nms-navy);
        }

        .cta {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(190px, 0.55fr);
          gap: 40px;
          align-items: center;
          margin-top: 42px;
          padding: clamp(30px, 5vw, 52px);
          background: var(--nms-navy);
          color: var(--nms-white);
          border-radius: 20px;
        }

        .cta h2 {
          color: var(--nms-white);
          font-size: clamp(1.8rem, 3.2vw, 2.9rem);
        }

        .cta p {
          color: #e5ddd3;
        }

        .cta .mini-label {
          color: #d9bd91;
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
        }

        .button {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          padding: 12px 19px;
          border-radius: 999px;
          font-weight: 800;
          text-decoration: none;
        }

        .button-light {
          background: var(--nms-gold);
          color: var(--nms-white);
        }

        .button-light:hover {
          background: #b98b49;
          color: var(--nms-white);
        }

        .cta-link {
          color: var(--nms-white);
          font-weight: 750;
        }

        .related {
          margin-top: 43px;
        }

        .related h3 {
          margin-bottom: 16px;
        }

        .related > div {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .related a {
          padding: 18px;
          background: var(--nms-white);
          border: 1px solid var(--nms-line);
          border-radius: 12px;
          font-size: 0.92rem;
          font-weight: 750;
          text-decoration: none;
        }

        .faq-list {
          margin-top: 31px;
        }

        details {
          border-top: 1px solid var(--nms-line);
        }

        details:last-child {
          border-bottom: 1px solid var(--nms-line);
        }

        summary {
          padding: 21px 34px 21px 0;
          cursor: pointer;
          color: var(--nms-navy);
          font-weight: 780;
          list-style-position: outside;
        }

        details p {
          max-width: 760px;
          padding: 0 0 24px;
          color: var(--nms-muted);
        }

        .sources {
          padding: clamp(55px, 7vw, 85px) 0 0;
        }

        .sources h2 {
          font-size: clamp(1.7rem, 3vw, 2.4rem);
        }

        .sources ul {
          columns: 2;
          gap: 40px;
          margin: 30px 0;
          padding-left: 18px;
        }

        .sources li {
          margin-bottom: 9px;
          break-inside: avoid;
        }

        .disclaimer {
          padding: 22px;
          color: var(--nms-muted);
          background: var(--nms-cream-deep);
          border-radius: 12px;
          font-size: 0.85rem;
        }

        @media (max-width: 1020px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-card {
            max-width: 720px;
          }

          .article-layout {
            grid-template-columns: 1fr;
          }

          .toc {
            position: static;
            padding: 0 0 48px;
          }

          .toc ol {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 30px;
          }

          .toc-contact {
            max-width: 470px;
          }
        }

        @media (max-width: 760px) {
          .section-width,
          .hero-inner {
            width: min(100% - 26px, 1280px);
          }

          .card-grid,
          .definition-grid,
          .fact-cards,
          .ajd-grid,
          .comparison,
          .related > div {
            grid-template-columns: 1fr;
          }

          .summary-card {
            min-height: 0;
          }

          .toc ol {
            grid-template-columns: 1fr;
          }

          .rate-banner {
            grid-template-columns: 1fr;
          }

          .reduced-list > div {
            grid-template-columns: 1fr;
            gap: 7px;
          }

          .cta {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .sources ul {
            columns: 1;
          }

          h1 {
            font-size: clamp(2.35rem, 12vw, 4.2rem);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </>
  );
}