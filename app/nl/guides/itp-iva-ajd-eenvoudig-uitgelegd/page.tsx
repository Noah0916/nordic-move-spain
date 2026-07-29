import type { Metadata } from "next";
import type { ReactNode } from "react";

/**
 * Plaats dit bestand als:
 * app/nl/gidsen/itp-iva-ajd-spanje/page.tsx
 *
 * Controleer de onderstaande interne routes voordat je publiceert.
 */
const PAGE_URL = "/nl/gidsen/itp-iva-ajd-spanje";
const CONTACT_URL = "/nl/contact";
const SERVICES_URL = "/nl/services";
const GUIDES_URL = "/nl/guides";
const BUYING_GUIDE_URL = "/nl/guides/huis-kopen-in-spanje";
const COSTS_GUIDE_URL = "/nl/guides/kosten-huis-kopen-spanje";

export const metadata: Metadata = {
  title: "ITP, IVA en AJD in Spanje uitgelegd (2026) | Nordic Move Spain",
  description:
    "ITP, IVA en AJD bij een huis kopen in Spanje: actuele tarieven voor de Costa Blanca en Valencia in 2026, rekenvoorbeelden, uitzonderingen en aandachtspunten.",
  keywords: [
    "ITP Spanje 2026",
    "IVA huis kopen Spanje",
    "AJD Spanje 2026",
    "belasting huis kopen Spanje",
    "kosten koper Spanje",
    "overdrachtsbelasting Spanje",
    "nieuwbouw belasting Spanje",
    "ITP Valencia 2026",
    "ITP Costa Blanca",
    "AJD Valencia 2026",
    "huis kopen Costa Blanca belasting",
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
    locale: "nl_NL",
    url: PAGE_URL,
    siteName: "Nordic Move Spain",
    title: "ITP, IVA en AJD bij een huis kopen in Spanje — uitleg 2026",
    description:
      "Welke aankoopbelasting betaalt u bij bestaande bouw en nieuwbouw? Inclusief actuele tarieven in de Comunitat Valenciana vanaf 1 juni 2026.",
    publishedTime: "2026-07-23T00:00:00.000Z",
    modifiedTime: "2026-07-23T00:00:00.000Z",
    authors: ["Nordic Move Spain"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITP, IVA en AJD in Spanje uitgelegd (2026)",
    description:
      "Actuele belastingtarieven, heldere voorbeelden en praktische aandachtspunten voor woningkopers aan de Costa Blanca.",
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
    question: "Betaal ik ITP én IVA wanneer ik een woning in Spanje koop?",
    answer:
      "Normaal gesproken niet. Bij een bestaande woning betaalt de koper doorgaans ITP. Bij een eerste levering van een nieuwbouwwoning door de projectontwikkelaar betaalt de koper doorgaans IVA en daarnaast AJD over de notariële koopakte. De juridische kwalificatie van de transactie is leidend.",
  },
  {
    question: "Hoe hoog is de ITP in de Comunitat Valenciana in 2026?",
    answer:
      "Voor belastbare transacties vanaf 1 juni 2026 geldt in de Comunitat Valenciana in beginsel een algemeen ITP-tarief van 9%. Is de waarde van het overgedragen vastgoed hoger dan €1.000.000, dan geldt in beginsel 11%. Voor bepaalde kopers en woningen bestaan verlaagde tarieven met strikte voorwaarden.",
  },
  {
    question: "Hoeveel IVA betaal ik over een nieuwbouwwoning in Spanje?",
    answer:
      "De eerste levering van een reguliere nieuwbouwwoning door de ontwikkelaar valt doorgaans onder 10% IVA. Voor bepaalde sociale woningen kan 4% gelden. Het woningtarief kan ook gelden voor maximaal twee parkeerplaatsen en een bijgebouw wanneer deze gezamenlijk met de woning en in hetzelfde gebouw of complex worden geleverd.",
  },
  {
    question: "Hoe hoog is AJD in Valencia in 2026?",
    answer:
      "In de Comunitat Valenciana geldt voor veel notariële vastgoedakten vanaf 1 juni 2026 een algemeen AJD-tarief van 1,4%. Voor een akte die de aankoop van een fiscale hoofdwoning documenteert, kan 0,1% gelden. Andere bijzondere situaties kunnen onder een tarief van 2% vallen.",
  },
  {
    question: "Wordt ITP berekend over de koopprijs of de valor de referencia?",
    answer:
      "Bij vastgoed is de kadastrale valor de referencia belangrijk. Is de overeengekomen prijs of de aangegeven waarde hoger, dan wordt in beginsel de hoogste relevante waarde als belastinggrondslag gebruikt. Bestaat geen toepasbare referentiewaarde, dan gelden andere wettelijke waarderingsregels.",
  },
  {
    question: "Wanneer moet Modelo 600 worden ingediend?",
    answer:
      "In de Comunitat Valenciana bedraagt de algemene aangiftetermijn voor deze transacties één maand vanaf de datum waarop de belastbare handeling of overeenkomst tot stand komt. Bij meerdere kopers kan per belastingplichtige een afzonderlijke aangifte nodig zijn.",
  },
  {
    question: "Betaalt de koper AJD over de hypotheek?",
    answer:
      "Bij een hypotheekakte is de kredietverstrekker sinds de wetswijziging van 2018 de belastingplichtige voor de AJD op de hypotheek. Dat staat los van eventuele AJD die de koper bij de aankoop van een nieuwbouwwoning over de koopakte verschuldigd kan zijn.",
  },
  {
    question: "Zijn ITP, IVA en AJD alle bijkomende aankoopkosten?",
    answer:
      "Nee. Naast belastingen kunnen onder meer notaris-, kadaster-, registratie-, juridische, technische, bank- en vertaalkosten ontstaan. Ook renovatie, aansluitingen, verzekeringen en gemeentelijke lasten kunnen relevant zijn. Laat daarom vóór ondertekening een volledige kostenraming maken.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ITP, IVA en AJD in Spanje uitgelegd: belastingen bij aankoop in 2026",
  description:
    "Uitgebreide uitleg over ITP, IVA en AJD bij de aankoop van vastgoed in Spanje, met actuele tarieven voor de Comunitat Valenciana in 2026.",
  inLanguage: "nl-NL",
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
  author: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "/nl",
  },
  publisher: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "/nl",
  },
  about: [
    "Impuesto sobre Transmisiones Patrimoniales",
    "Impuesto sobre el Valor Añadido",
    "Actos Jurídicos Documentados",
    "Vastgoed kopen in Spanje",
    "Comunitat Valenciana",
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
      item: "/nl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Gidsen",
      item: GUIDES_URL,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ITP, IVA en AJD uitgelegd",
      item: PAGE_URL,
    },
  ],
};

const summaryCards = [
  {
    abbreviation: "ITP",
    title: "Bestaande woning",
    rate: "9%",
    text: "Algemeen tarief in de Comunitat Valenciana vanaf 1 juni 2026. Boven €1 miljoen geldt in beginsel 11%.",
  },
  {
    abbreviation: "IVA",
    title: "Reguliere nieuwbouw",
    rate: "10%",
    text: "Doorgaans over de eerste levering van een woning door de projectontwikkelaar.",
  },
  {
    abbreviation: "AJD",
    title: "Notariële akte",
    rate: "1,4%",
    text: "Algemeen tarief in Valencia vanaf 1 juni 2026. Voor een fiscale hoofdwoning kan 0,1% gelden.",
  },
];

const usedHomeExamples = [
  {
    price: "€250.000",
    rate: "9%",
    tax: "€22.500",
    note: "Algemeen ITP-tarief",
  },
  {
    price: "€400.000",
    rate: "9%",
    tax: "€36.000",
    note: "Algemeen ITP-tarief",
  },
  {
    price: "€750.000",
    rate: "9%",
    tax: "€67.500",
    note: "Algemeen ITP-tarief",
  },
  {
    price: "€1.200.000",
    rate: "11%",
    tax: "€132.000",
    note: "Waarde boven €1 miljoen",
  },
];

const newBuildExamples = [
  {
    price: "€250.000",
    iva: "€25.000",
    ajdSecondHome: "€3.500",
    totalSecondHome: "€28.500",
    ajdMainHome: "€250",
  },
  {
    price: "€400.000",
    iva: "€40.000",
    ajdSecondHome: "€5.600",
    totalSecondHome: "€45.600",
    ajdMainHome: "€400",
  },
  {
    price: "€600.000",
    iva: "€60.000",
    ajdSecondHome: "€8.400",
    totalSecondHome: "€68.400",
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
              <nav className="breadcrumbs" aria-label="Broodkruimel">
                <a href="/nl">Home</a>
                <span aria-hidden="true">/</span>
                <a href={GUIDES_URL}>Gidsen</a>
                <span aria-hidden="true">/</span>
                <span>ITP, IVA en AJD</span>
              </nav>

              <div className="hero-grid">
                <div className="hero-copy">
                  <p className="eyebrow">
                    BELASTINGEN BIJ EEN WONING KOPEN IN SPANJE
                  </p>
                  <h1>ITP, IVA en AJD uitgelegd: wat betaalt u in 2026?</h1>
                  <p className="lead">
                    Bij de aankoop van een woning in Spanje bepaalt het type
                    transactie welke belasting u betaalt. Voor een bestaande
                    woning is dat meestal ITP. Bij reguliere nieuwbouw gaat het
                    doorgaans om IVA plus AJD. In deze gids legt Nordic Move
                    Spain de verschillen, actuele Valenciaanse tarieven,
                    belastinggrondslag en belangrijkste valkuilen helder uit.
                  </p>

                  <div className="author-row">
                    <div className="author-mark" aria-hidden="true">
                      N
                    </div>
                    <div>
                      <strong>Nordic Move Spain</strong>
                      <span>
                        Aankoopbegeleiding Costa Blanca · Bijgewerkt 23 juli
                        2026
                      </span>
                    </div>
                  </div>
                </div>

                <aside className="hero-card" aria-label="Belasting in één oogopslag">
                  <p className="mini-label">IN ÉÉN OOGOPSLAG</p>
                  <h2>Welke belasting hoort bij welke aankoop?</h2>
                  <div className="decision-list">
                    <div>
                      <span>01</span>
                      <p>
                        <strong>Bestaande woning</strong>
                        Meestal ITP, zonder IVA over de koopprijs.
                      </p>
                    </div>
                    <div>
                      <span>02</span>
                      <p>
                        <strong>Nieuwbouw van de promotor</strong>
                        Meestal 10% IVA plus AJD over de notariële koopakte.
                      </p>
                    </div>
                    <div>
                      <span>03</span>
                      <p>
                        <strong>Hypotheekakte</strong>
                        De AJD over de hypotheek wordt in beginsel door de
                        kredietverstrekker gedragen.
                      </p>
                    </div>
                  </div>
                  <a className="text-link" href="#rekenvoorbeelden">
                    Bekijk de rekenvoorbeelden →
                  </a>
                </aside>
              </div>
            </div>
          </header>

          <section className="quick-summary" aria-label="Actuele tarieven 2026">
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
              <p className="toc-title">INHOUD</p>
              <ol>
                <li>
                  <a href="#verschil">ITP, IVA en AJD: het verschil</a>
                </li>
                <li>
                  <a href="#itp">ITP bij bestaande bouw</a>
                </li>
                <li>
                  <a href="#grondslag">Koopprijs en valor de referencia</a>
                </li>
                <li>
                  <a href="#iva">IVA bij nieuwbouw</a>
                </li>
                <li>
                  <a href="#ajd">AJD over de koopakte</a>
                </li>
                <li>
                  <a href="#rekenvoorbeelden">Rekenvoorbeelden</a>
                </li>
                <li>
                  <a href="#verlaagde-tarieven">Verlaagde tarieven</a>
                </li>
                <li>
                  <a href="#aangifte">Aangifte en betaling</a>
                </li>
                <li>
                  <a href="#valkuilen">Veelgemaakte fouten</a>
                </li>
                <li>
                  <a href="#faq">Veelgestelde vragen</a>
                </li>
              </ol>

              <div className="toc-contact">
                <p>
                  Wilt u vóór ondertekening weten welke belasting en totale
                  aankoopkosten bij uw dossier horen?
                </p>
                <a href={CONTACT_URL}>Plan een kennismaking</a>
              </div>
            </aside>

            <div className="article-content">
              <section id="verschil" className="content-section first-section">
                <p className="section-kicker">DE BASIS</p>
                <h2>ITP, IVA en AJD zijn drie verschillende belastingen</h2>
                <p>
                  De afkortingen worden bij een Spaanse woningaankoop vaak door
                  elkaar gebruikt. Toch hebben ze een andere functie. De
                  belangrijkste vraag is of u een bestaande woning koopt of een
                  woning die fiscaal als eerste levering door een ondernemer of
                  projectontwikkelaar wordt aangemerkt.
                </p>

                <div className="definition-grid">
                  <div>
                    <span>ITP</span>
                    <h3>Impuesto sobre Transmisiones Patrimoniales</h3>
                    <p>
                      Overdrachtsbelasting die de koper doorgaans betaalt bij
                      de aankoop van een bestaande woning. Het tarief wordt
                      grotendeels door de autonome regio bepaald.
                    </p>
                  </div>
                  <div>
                    <span>IVA</span>
                    <h3>Impuesto sobre el Valor Añadido</h3>
                    <p>
                      Spaanse btw. Bij de eerste levering van een reguliere
                      nieuwbouwwoning door de promotor is doorgaans 10% IVA
                      verschuldigd.
                    </p>
                  </div>
                  <div>
                    <span>AJD</span>
                    <h3>Actos Jurídicos Documentados</h3>
                    <p>
                      Belasting op bepaalde notariële documenten. Bij
                      nieuwbouw wordt AJD doorgaans naast IVA geheven over de
                      notariële koopakte.
                    </p>
                  </div>
                </div>

                <div className="key-answer">
                  <strong>Praktische hoofdregel</strong>
                  <p>
                    Bestaande woning: meestal ITP. Reguliere nieuwbouw van de
                    ontwikkelaar: meestal IVA plus AJD. De concrete akte,
                    verkoper, eerdere ingebruikname en juridische structuur
                    bepalen uiteindelijk de fiscale behandeling.
                  </p>
                </div>
              </section>

              <section id="itp" className="content-section">
                <p className="section-kicker">BESTAANDE BOUW</p>
                <h2>ITP in de Comunitat Valenciana vanaf 1 juni 2026</h2>
                <p>
                  Voor woningen aan de Costa Blanca — waaronder vastgoed in de
                  provincies Alicante en Valencia — is de Valenciaanse
                  regelgeving relevant. Voor belastbare gebeurtenissen vanaf{" "}
                  <strong>1 juni 2026</strong> bedraagt het algemene ITP-tarief
                  voor vastgoed <strong>9%</strong>.
                </p>
                <p>
                  Is de waarde van het overgedragen vastgoed of recht hoger dan{" "}
                  <strong>€1.000.000</strong>, dan geldt in beginsel een tarief
                  van <strong>11%</strong>. Dit is geen staffel waarbij alleen
                  het deel boven één miljoen tegen 11% wordt belast: de
                  toepasselijke wettelijke kwalificatie moet voor de volledige
                  transactie worden beoordeeld.
                </p>

                <div className="rate-banner">
                  <div>
                    <span>ALGEMEEN TARIEF</span>
                    <strong>9%</strong>
                    <small>vanaf 1 juni 2026</small>
                  </div>
                  <div>
                    <span>WAARDE BOVEN</span>
                    <strong>€1 mln</strong>
                    <small>in beginsel 11% ITP</small>
                  </div>
                </div>

                <p>
                  De datum van de belastbare handeling is belangrijk. Bij
                  wetswijzigingen kan een akte die vóór of na de ingangsdatum
                  wordt verleden onder een ander tarief vallen. Laat daarom
                  niet alleen het reserveringscontract, maar ook de geplande
                  passeerdatum fiscaal controleren.
                </p>

                <p className="source-note">
                  Officiële bron:{" "}
                  <SourceLink href={officialSources.valencianPropertyTax}>
                    Agencia Tributaria Valenciana — aankoop van vastgoed
                  </SourceLink>
                  .
                </p>
              </section>

              <section id="grondslag" className="content-section">
                <p className="section-kicker">BELASTINGGRONDSLAG</p>
                <h2>
                  ITP wordt niet altijd simpelweg over de afgesproken koopprijs
                  berekend
                </h2>
                <p>
                  Bij een bestaande woning kijkt de belastingdienst niet alleen
                  naar het bedrag in de koopakte. De{" "}
                  <em>valor de referencia</em> van het Spaanse kadaster kan als
                  fiscale minimumgrondslag functioneren.
                </p>

                <div className="formula">
                  <span>VEREENVOUDIGDE HOOFDREGEL</span>
                  <strong>
                    ITP-grondslag = de hoogste relevante waarde van koopprijs,
                    aangegeven waarde en valor de referencia
                  </strong>
                </div>

                <p>
                  Staat een woning voor €300.000 in de akte, maar bedraagt de
                  toepasselijke referentiewaarde €335.000, dan kan de ITP in
                  beginsel over €335.000 worden berekend. Is de koopprijs hoger
                  dan de referentiewaarde, dan is doorgaans de hogere koopprijs
                  relevant.
                </p>
                <p>
                  Bestaat voor het vastgoed geen gecertificeerde
                  referentiewaarde, dan gelden de wettelijke alternatieven,
                  waaronder de aangegeven waarde, overeengekomen prijs en
                  marktwaarde. Een lage koopsom betekent dus niet automatisch
                  een even lage belastinggrondslag.
                </p>

                <div className="warning">
                  <div aria-hidden="true">!</div>
                  <p>
                    <strong>Controleer de valor de referencia vóór aankoop.</strong>
                    Een verschil tussen vraagprijs, koopprijs en fiscale
                    referentiewaarde kan uw begroting aanzienlijk veranderen.
                    Laat ook beoordelen of de referentiewaarde bij een
                    afwijkende staat, illegale uitbreiding of bijzondere
                    ligging betwistbaar is.
                  </p>
                </div>

                <p className="source-note">
                  Achtergrond:{" "}
                  <SourceLink href={officialSources.referenceValue}>
                    Agencia Tributaria Valenciana — valor de referencia
                  </SourceLink>
                  .
                </p>
              </section>

              <section id="iva" className="content-section">
                <p className="section-kicker">NIEUWBOUW</p>
                <h2>Wanneer betaalt u 10% IVA over een woning?</h2>
                <p>
                  Een woning wordt voor de btw niet alleen op basis van haar
                  bouwjaar als “nieuw” gezien. Het gaat om de fiscale{" "}
                  <strong>eerste levering</strong>. De verkoop van een
                  voltooide woning door de projectontwikkelaar valt doorgaans
                  onder IVA wanneer het om die eerste levering gaat.
                </p>
                <p>
                  Voor een reguliere woning geldt in 2026 doorgaans{" "}
                  <strong>10% IVA</strong>. Voor bepaalde officieel beschermde
                  woningen van speciaal regime of publieke promotie kan{" "}
                  <strong>4%</strong> gelden.
                </p>

                <div className="fact-cards">
                  <div>
                    <span>10%</span>
                    <h3>Reguliere woning</h3>
                    <p>
                      Gebruikelijk tarief voor de eerste levering van een
                      woning door de projectontwikkelaar.
                    </p>
                  </div>
                  <div>
                    <span>4%</span>
                    <h3>Bepaalde sociale woningbouw</h3>
                    <p>
                      Alleen bij de wettelijk omschreven beschermde woningen;
                      niet bij reguliere commerciële nieuwbouw.
                    </p>
                  </div>
                  <div>
                    <span>2 + 1</span>
                    <h3>Garages en bijgebouw</h3>
                    <p>
                      Het woningtarief kan maximaal twee garages en een
                      gezamenlijk geleverd bijgebouw omvatten wanneer aan de
                      voorwaarden is voldaan.
                    </p>
                  </div>
                </div>

                <h3>Wanneer is een woning fiscaal toch niet meer “nieuw”?</h3>
                <p>
                  De Spaanse belastingdienst beschrijft onder meer de situatie
                  waarin een ontwikkelaar een voltooide woning gedurende twee
                  jaar of langer onafgebroken aan anderen heeft verhuurd. Bij
                  latere verkoop aan een andere koper kan dan sprake zijn van
                  een tweede levering, waardoor de behandeling kan verschuiven
                  van IVA naar ITP. Wordt de woning juist door de zittende
                  huurder gekocht, dan kan de uitkomst anders zijn.
                </p>
                <p>
                  Laat bij sleutelklare projecten, wederverkoop door een
                  vennootschap, koop op plan en langdurig verhuurde nieuwbouw
                  expliciet vastleggen waarom IVA of ITP wordt toegepast.
                </p>

                <p className="source-note">
                  Officiële uitleg:{" "}
                  <SourceLink href={officialSources.spanishTaxAgency}>
                    Agencia Tributaria — IVA of ITP bij woningaankoop
                  </SourceLink>
                  .
                </p>
              </section>

              <section id="ajd" className="content-section">
                <p className="section-kicker">NOTARIËLE AKTE</p>
                <h2>AJD: de belasting die bij nieuwbouw vaak naast IVA komt</h2>
                <p>
                  AJD is geen tweede btw, maar een belasting op bepaalde
                  notariële documenten die een waardeerbare handeling
                  vastleggen en in een openbaar register kunnen worden
                  ingeschreven. Daardoor komt AJD bij een nieuwbouwaankoop vaak
                  boven op de IVA.
                </p>

                <div className="ajd-grid">
                  <div className="ajd-main">
                    <p>Algemeen AJD-tarief vanaf 1 juni 2026</p>
                    <strong>1,4%</strong>
                    <span>
                      bijvoorbeeld bij een tweede woning of vakantiewoning,
                      voor zover geen bijzonder tarief geldt
                    </span>
                  </div>
                  <div>
                    <p>Fiscale hoofdwoning</p>
                    <strong>0,1%</strong>
                    <span>
                      bij eerste afschriften van akten die de aankoop van de
                      eigen hoofdwoning documenteren
                    </span>
                  </div>
                  <div>
                    <p>Bijzondere gevallen</p>
                    <strong>2%</strong>
                    <span>
                      onder meer bij bepaalde vastgoedtransacties waarbij van
                      een IVA-vrijstelling wordt afgezien
                    </span>
                  </div>
                </div>

                <p>
                  Het verlaagde tarief van 0,1% is niet automatisch van
                  toepassing omdat u zelf in de woning wilt verblijven. Het
                  Spaanse fiscale begrip <em>vivienda habitual</em> kent
                  voorwaarden rond daadwerkelijke bewoning en duurzaamheid.
                  Een vakantiewoning of tweede verblijf valt daar normaal
                  gesproken niet onder.
                </p>

                <h3>AJD over de hypotheek is iets anders</h3>
                <p>
                  Bij een hypotheekakte is sinds de nationale wetswijziging van
                  2018 de kredietverstrekker de belastingplichtige voor de AJD
                  op de hypotheek. Dit betekent niet dat alle AJD voor de koper
                  verdwijnt. Bij nieuwbouw kan de koper nog steeds AJD over de
                  afzonderlijke koopakte verschuldigd zijn.
                </p>

                <p className="source-note">
                  Tarieven:{" "}
                  <SourceLink href={officialSources.valencianLaw}>
                    geconsolideerde Valenciaanse belastingwet, artikelen 13 en
                    14
                  </SourceLink>
                  . Hypotheekakte:{" "}
                  <SourceLink href={officialSources.mortgageAjd}>
                    Real Decreto-ley 17/2018
                  </SourceLink>
                  .
                </p>
              </section>

              <section id="rekenvoorbeelden" className="content-section">
                <p className="section-kicker">REKENVOORBEELDEN</p>
                <h2>Wat betekenen de tarieven concreet voor uw budget?</h2>
                <p>
                  Onderstaande bedragen zijn vereenvoudigde voorbeelden voor
                  vastgoed in de Comunitat Valenciana bij een akte vanaf 1 juni
                  2026. Ze veronderstellen dat de genoemde koopsom ook de
                  relevante belastinggrondslag is en dat geen korting,
                  vrijstelling of andere bijzondere regeling geldt.
                </p>

                <h3>Voorbeeld 1: bestaande woning met algemeen ITP-tarief</h3>
                <div className="table-wrap" tabIndex={0}>
                  <table>
                    <caption>
                      Indicatieve ITP bij bestaande bouw in Valencia
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Belastinggrondslag</th>
                        <th scope="col">Tarief</th>
                        <th scope="col">Indicatieve ITP</th>
                        <th scope="col">Toelichting</th>
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
                  Voorbeeld 2: reguliere nieuwbouw als tweede woning of
                  vakantieverblijf
                </h3>
                <p>
                  In dit voorbeeld rekenen we met 10% IVA en het algemene
                  Valenciaanse AJD-tarief van 1,4%.
                </p>
                <div className="table-wrap" tabIndex={0}>
                  <table>
                    <caption>
                      Indicatieve IVA en AJD bij reguliere nieuwbouw
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Koopprijs</th>
                        <th scope="col">10% IVA</th>
                        <th scope="col">1,4% AJD</th>
                        <th scope="col">Totaal IVA + AJD</th>
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

                <h3>Voorbeeld 3: nieuwbouw die kwalificeert als hoofdwoning</h3>
                <p>
                  Wanneer de aankoopakte daadwerkelijk onder het 0,1%-tarief
                  voor de fiscale hoofdwoning valt, bedraagt AJD in dezelfde
                  voorbeelden €250 bij een grondslag van €250.000, €400 bij
                  €400.000 en €600 bij €600.000. De 10% IVA blijft in dit
                  vereenvoudigde voorbeeld wel verschuldigd.
                </p>

                <div className="comparison">
                  <div>
                    <span>Bestaande woning €400.000</span>
                    <strong>€36.000 ITP</strong>
                    <small>bij 9% en grondslag €400.000</small>
                  </div>
                  <div>
                    <span>Nieuwbouw €400.000, tweede woning</span>
                    <strong>€45.600 IVA + AJD</strong>
                    <small>10% IVA plus 1,4% AJD</small>
                  </div>
                </div>

                <div className="notice">
                  <strong>Niet inbegrepen:</strong> notaris, registratie,
                  advocaat, technische keuring, bankkosten, taxatie,
                  vertalingen, volmachten, aansluitkosten, verzekering,
                  renovatie en eventuele aankoopbegeleiding.
                </div>
              </section>

              <section id="verlaagde-tarieven" className="content-section">
                <p className="section-kicker">UITZONDERINGEN</p>
                <h2>Wanneer kan een verlaagd ITP-tarief gelden?</h2>
                <p>
                  De Comunitat Valenciana kent meerdere verlaagde ITP-tarieven.
                  Deze regelingen zijn gericht op specifieke kopers,
                  woningtypen en gebruiksdoelen. Ze zijn niet automatisch
                  beschikbaar voor iedere koper die jong is, een gezin heeft
                  of permanent naar Spanje verhuist.
                </p>

                <div className="reduced-list">
                  <div>
                    <span>6% / 8%</span>
                    <div>
                      <h3>Jongeren onder 35 jaar</h3>
                      <p>
                        Voor de eerste fiscale hoofdwoning kan bij een waarde
                        tot en met €180.000 een tarief van 6% gelden en boven
                        €180.000 een tarief van 8%, voor zover ook aan de
                        wettelijke inkomens- en documentatievoorwaarden wordt
                        voldaan.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>6% / 8%</span>
                    <div>
                      <h3>Bepaalde beschermde woningen</h3>
                      <p>
                        Voor officieel beschermde woningen van algemeen regime
                        kunnen vergelijkbare grenzen en aanvullende eisen
                        gelden, waaronder gebruik als eerste hoofdwoning.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>3% / 4%</span>
                    <div>
                      <h3>Bijzondere sociale situaties</h3>
                      <p>
                        Voor bepaalde beschermde woningen, grote of
                        eenoudergezinnen, kwalificerende beperkingen en
                        slachtoffers van gendergeweld kunnen tarieven van 3% of
                        4% gelden, afhankelijk van onder meer woningwaarde,
                        inkomen, aandeel en bewijsstukken.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  De grens van €180.000, het begrip eerste hoofdwoning,
                  inkomensgrenzen, leeftijd op de relevante datum en het
                  gekochte eigendomsaandeel moeten nauwkeurig worden
                  gecontroleerd. Een korting ten onrechte toepassen kan leiden
                  tot naheffing en rente.
                </p>

                <div className="expert-note">
                  <p className="mini-label">PRAKTIJKADVIES VAN NORDIC MOVE SPAIN</p>
                  <p>
                    Vraag vóór het ondertekenen van een reservering of
                    koopcontract schriftelijk welke belastingregeling de
                    adviseur toepast, op welke wettelijke bepaling die rust en
                    welke documenten nodig zijn. Wacht niet tot de dag van de
                    notaris.
                  </p>
                </div>
              </section>

              <section id="aangifte" className="content-section">
                <p className="section-kicker">AANGIFTE EN BETALING</p>
                <h2>Wie betaalt de belasting en wanneer?</h2>

                <div className="timeline">
                  <div>
                    <span>1</span>
                    <div>
                      <h3>Voor ondertekening</h3>
                      <p>
                        Controleer woningtype, verkoper, eerste of latere
                        levering, valor de referencia, beoogd gebruik en
                        mogelijke verlaagde tarieven.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>2</span>
                    <div>
                      <h3>Bij de aankoop</h3>
                      <p>
                        IVA wordt bij nieuwbouw doorgaans aan de verkoper of
                        promotor betaald. Bij bestaande bouw ontstaat de
                        ITP-verplichting voor de koper.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>3</span>
                    <div>
                      <h3>Binnen één maand</h3>
                      <p>
                        In de Comunitat Valenciana moeten de relevante
                        documenten of aangiften in beginsel binnen één maand
                        worden ingediend. Voor ITP en AJD wordt doorgaans
                        Modelo 600 gebruikt.
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>4</span>
                    <div>
                      <h3>Registratie en dossier</h3>
                      <p>
                        Bewaar aangifte, betalingsbewijs, akte,
                        referentiewaarde, facturen en onderbouwing van eventuele
                        korting bij het aankoopdossier.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  De Valenciaanse online toepassing verwerkt per model één
                  belastingplichtige. Bij meerdere kopers kan daarom voor ieder
                  aandeel een afzonderlijke aangifte nodig zijn. Laat de
                  eigendomsverhouding in akte, aangifte en betaling op elkaar
                  aansluiten.
                </p>

                <p className="source-note">
                  Aangifte-informatie:{" "}
                  <SourceLink href={officialSources.model600}>
                    Agencia Tributaria Valenciana — Modelo 600
                  </SourceLink>
                  .
                </p>
              </section>

              <section id="valkuilen" className="content-section">
                <p className="section-kicker">RISICO'S VOORKOMEN</p>
                <h2>Zeven veelgemaakte fouten rond ITP, IVA en AJD</h2>

                <ol className="mistake-list">
                  <li>
                    <strong>Alleen met de koopprijs rekenen.</strong>
                    De valor de referencia kan tot een hogere ITP-grondslag
                    leiden.
                  </li>
                  <li>
                    <strong>Een woning “nieuw” noemen zonder fiscale controle.</strong>
                    Bouwjaar, eerste levering en eerdere verhuur zijn niet
                    hetzelfde.
                  </li>
                  <li>
                    <strong>AJD vergeten bij nieuwbouw.</strong>
                    De begroting bevat dan wel 10% IVA, maar mist mogelijk
                    1,4% AJD.
                  </li>
                  <li>
                    <strong>Automatisch 0,1% AJD toepassen.</strong>
                    Een tweede woning of vakantieverblijf is niet zonder meer
                    een fiscale hoofdwoning.
                  </li>
                  <li>
                    <strong>Een verlaagd ITP-tarief aannemen op basis van één
                    kenmerk.</strong>
                    Leeftijd, woningwaarde, inkomen, gebruik, documentatie en
                    aandeel kunnen allemaal relevant zijn.
                  </li>
                  <li>
                    <strong>De datum van de akte negeren.</strong>
                    In 2026 veranderden Valenciaanse tarieven per 1 juni.
                  </li>
                  <li>
                    <strong>Belasting verwarren met totale kosten koper.</strong>
                    Juridische, technische, notariële en registratieve kosten
                    komen daar nog bij.
                  </li>
                </ol>
              </section>

              <section className="content-section">
                <p className="section-kicker">AANKOOPBEGELEIDING</p>
                <h2>Van belastinginschatting naar een veilig aankoopdossier</h2>
                <p>
                  Een correcte belastingberekening is één onderdeel van een
                  veilige aankoop. Nordic Move Spain brengt de praktische
                  stappen samen: van regio- en woningselectie tot afstemming
                  met onafhankelijke juridische en technische professionals,
                  notaris, vertalers, aannemers en andere betrokken partijen.
                </p>
                <p>
                  Zo ziet u vóór ondertekening niet alleen de vraagprijs, maar
                  ook de vermoedelijke belastinggrondslag, belastingen,
                  bijkomende kosten, juridische aandachtspunten en technische
                  risico’s.
                </p>

                <div className="cta">
                  <div>
                    <p className="mini-label">PERSOONLIJKE AANKOOPBEGELEIDING</p>
                    <h2>Meer zekerheid. Eén vertrouwd aanspreekpunt.</h2>
                    <p>
                      Bespreek uw woning, budget en planning voordat u zich
                      juridisch of financieel vastlegt.
                    </p>
                  </div>
                  <div className="cta-actions">
                    <a className="button button-light" href={CONTACT_URL}>
                      Plan een kennismaking
                    </a>
                    <a className="cta-link" href={SERVICES_URL}>
                      Bekijk onze diensten →
                    </a>
                  </div>
                </div>

                <div className="related">
                  <h3>Lees ook</h3>
                  <div>
                    <a href={BUYING_GUIDE_URL}>
                      Huis kopen in Spanje: stappenplan
                    </a>
                    <a href={COSTS_GUIDE_URL}>
                      Alle kosten bij een Spaanse woningaankoop
                    </a>
                    <a href={GUIDES_URL}>Bekijk alle gidsen</a>
                  </div>
                </div>
              </section>

              <section id="faq" className="content-section">
                <p className="section-kicker">VEELGESTELDE VRAGEN</p>
                <h2>FAQ over ITP, IVA en AJD in Spanje</h2>

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
                <p className="section-kicker">BRONNEN EN ACTUALITEIT</p>
                <h2>Officiële bronnen gebruikt voor deze gids</h2>
                <p>
                  De fiscale informatie is bijgewerkt op 23 juli 2026 en
                  gericht op woningaankopen in de Comunitat Valenciana. Voor
                  vastgoed in een andere autonome regio gelden mogelijk andere
                  ITP- en AJD-tarieven.
                </p>
                <ul>
                  <li>
                    <SourceLink href={officialSources.valencianLaw}>
                      BOE — geconsolideerde Wet 13/1997 van de Comunitat
                      Valenciana
                    </SourceLink>
                  </li>
                  <li>
                    <SourceLink href={officialSources.valencianPropertyTax}>
                      Agencia Tributaria Valenciana — aankoop van vastgoed
                    </SourceLink>
                  </li>
                  <li>
                    <SourceLink href={officialSources.spanishTaxAgency}>
                      Agencia Tributaria — IVA of ITP bij een woningaankoop
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
                      BOE — AJD en hypothecaire leningen
                    </SourceLink>
                  </li>
                </ul>
                <p className="disclaimer">
                  Deze gids is algemene informatie en vormt geen juridisch,
                  fiscaal, financieel of notarieel advies. Tarieven,
                  voorwaarden en interpretaties kunnen wijzigen. Laat uw
                  concrete transactie vóór ondertekening controleren door een
                  bevoegde onafhankelijke professional.
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