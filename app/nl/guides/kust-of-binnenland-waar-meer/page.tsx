import type { Metadata } from "next";

const PAGE_PATH = "/wonen-aan-de-kust-of-in-de-jalon-vallei";
const CONTACT_URL = "/contact";
const AREA_MATCH_URL = "/area-match";
const PROPERTY_URL = "/woningen";

export const metadata: Metadata = {
  title: "Wonen aan de kust of in de Jalón Valley? | Vergelijking 2026",
  description:
    "Vergelijk wonen aan de Costa Blanca met Jalón/Xaló en de Vall de Pop. Bekijk prijzen, ruimte, leefstijl en wat €350.000 je in juni 2026 opleverde.",
  keywords: [
    "wonen aan de kust Spanje",
    "wonen in Jalón Valley",
    "huis kopen Jalón",
    "huis kopen Xaló",
    "Vall de Pop wonen",
    "Costa Blanca binnenland",
    "Costa Blanca woningprijzen 2026",
    "Jalón of Dénia",
    "Jalón of Jávea",
    "Jalón of Moraira",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    type: "article",
    locale: "nl_NL",
    url: PAGE_PATH,
    title: "Wonen aan de kust of in de Jalón Valley?",
    description:
      "Een eerlijke vergelijking van woningprijzen, ruimte, voorzieningen en leefstijl aan de Costa Blanca en in de Vall de Pop.",
    siteName: "Wonen in Spanje",
    publishedTime: "2026-07-23T00:00:00.000Z",
    modifiedTime: "2026-07-23T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kust of Jalón Valley: waar krijg je meer voor je geld?",
    description:
      "Prijsvergelijking, leefstijl, bereikbaarheid en aankoopchecklist voor kopers aan de Costa Blanca.",
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
    difference: "referentie",
    source:
      "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante-alacant/jalon/",
  },
  {
    place: "Dénia",
    price: 3417,
    area: 102,
    difference: "circa 34% duurder",
    source:
      "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante-alacant/denia/",
  },
  {
    place: "Calpe / Calp",
    price: 3567,
    area: 98,
    difference: "circa 36% duurder",
    source:
      "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante-alacant/calpe/",
  },
  {
    place: "Jávea / Xàbia",
    price: 4118,
    area: 85,
    difference: "circa 45% duurder",
    source:
      "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante-alacant/javea-xabia/",
  },
  {
    place: "Moraira",
    price: 4673,
    area: 75,
    difference: "circa 51% duurder",
    source:
      "https://www.idealista.com/sala-de-prensa/informes-precio-vivienda/venta/comunitat-valenciana/alicante-alacant/moraira/",
  },
];

const faqs = [
  {
    question: "Is wonen in Jalón goedkoper dan wonen aan de Costa Blanca?",
    answer:
      "Op basis van de gemiddelde vraagprijzen van idealista in juni 2026 lag Jalón/Xaló duidelijk lager dan Dénia, Calpe, Jávea/Xàbia en Moraira. Het verschil liep in deze vergelijking uiteen van ongeveer 34% tot 51%. De prijs van een individuele woning hangt onder meer af van ligging, staat, uitzicht, perceel en vergunningen.",
  },
  {
    question: "Hoe ver ligt Jalón van de kust?",
    answer:
      "Jalón ligt in het binnenland van de Marina Alta. De rijtijd naar kustplaatsen verschilt per route, verkeersdrukte en bestemming. Reken in de praktijk op een autorit in plaats van een wandeling naar zee. Wie dagelijks op het strand wil zijn, moet dit meenemen in de locatiekeuze.",
  },
  {
    question: "Welke dorpen horen bij de Vall de Pop?",
    answer:
      "De toeristische regio Vall de Pop omvat onder meer Xaló, Llíber, Alcalalí, Parcent, Benigembla, Senija en Murla. Elk dorp heeft een eigen sfeer, woningaanbod en afstand tot voorzieningen.",
  },
  {
    question: "Is een woning aan de kust beter voor verhuur?",
    answer:
      "Een kustlocatie kan aantrekkelijk zijn voor vakantieverhuur, maar een hoge vraag is geen garantie voor rendement. Controleer vóór aankoop de lokale verhuurregels, toeristische vergunning, verenigingsregels, bezettingsverwachting, kosten en fiscale gevolgen.",
  },
  {
    question: "Wat kan ik ongeveer kopen met €350.000?",
    answer:
      "Een eenvoudige rekensom op basis van de gemiddelde vraagprijs per vierkante meter in juni 2026 komt uit op circa 154 m² in Jalón, 102 m² in Dénia, 98 m² in Calpe, 85 m² in Jávea en 75 m² in Moraira. Dit is alleen een prijsindicatie: grond, zwembad, renovatie, wijk en woningtype beïnvloeden de werkelijke uitkomst sterk.",
  },
  {
    question: "Waar moet ik juridisch en technisch op letten?",
    answer:
      "Laat in ieder geval eigendom, schulden, vergunningen, bestemmingsregels, kadastrale gegevens, nutsvoorzieningen en eventuele verbouwingen controleren. Een onafhankelijke juridische controle en een bouwkundige inspectie verkleinen de kans op onaangename verrassingen.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Wonen aan de kust of in de Jalón Valley: wat past bij jou?",
  description:
    "Vergelijk woningprijzen, ruimte, leefstijl en praktische aandachtspunten voor wonen aan de Costa Blanca of in Jalón en de Vall de Pop.",
  inLanguage: "nl-NL",
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_PATH,
  },
  author: {
    "@type": "Organization",
    name: "Wonen in Spanje",
  },
  publisher: {
    "@type": "Organization",
    name: "Wonen in Spanje",
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
      item: "/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Wonen in Spanje",
      item: "/wonen-in-spanje",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Kust of Jalón Valley",
      item: PAGE_PATH,
    },
  ],
};

function formatEuro(value: number) {
  return new Intl.NumberFormat("nl-NL", {
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
            <nav aria-label="Broodkruimel" className="breadcrumbs">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/wonen-in-spanje">Wonen in Spanje</a>
              <span aria-hidden="true">/</span>
              <span>Kust of Jalón Valley</span>
            </nav>

            <p className="eyebrow">Costa Blanca vergelijken</p>
            <h1>Wonen aan de kust of in de Jalón Valley: wat past bij jou?</h1>
            <p className="intro">
              Droom je van een woning in Spanje, dan lijkt de kust vaak de
              vanzelfsprekende keuze. Toch kan het binnenland van de Costa
              Blanca — met Jalón/Xaló en de dorpen van de Vall de Pop — meer
              woonruimte, rust en een authentieker dagelijks leven bieden. In
              deze vergelijking zie je wat de verschillen betekenen voor je
              budget, leefstijl en aankoopbeslissing.
            </p>

            <div className="hero-answer" role="note">
              <strong>De kern:</strong> wil je strand, levendigheid en
              voorzieningen op korte afstand, dan past de kust vaak beter. Zoek
              je meer ruimte en rust voor hetzelfde budget, dan verdient de
              Jalón Valley serieuze aandacht.
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href={AREA_MATCH_URL}>
                Doe de gratis Area Match
              </a>
              <a className="button button-secondary" href="#prijsvergelijking">
                Bekijk de prijsvergelijking
              </a>
            </div>

            <p className="updated">
              Laatst bijgewerkt: 23 juli 2026 · Leestijd: circa 10 minuten
            </p>
          </header>

          <aside className="toc" aria-labelledby="inhoudsopgave">
            <h2 id="inhoudsopgave">In dit artikel</h2>
            <ol>
              <li>
                <a href="#prijsvergelijking">Woningprijzen in juni 2026</a>
              </li>
              <li>
                <a href="#budget">Wat koop je voor €350.000?</a>
              </li>
              <li>
                <a href="#kust">Voor- en nadelen van de kust</a>
              </li>
              <li>
                <a href="#jalon">Wonen in Jalón en de Vall de Pop</a>
              </li>
              <li>
                <a href="#keuzehulp">Welke omgeving past bij jou?</a>
              </li>
              <li>
                <a href="#aankoopcheck">Aankoop- en controlepunten</a>
              </li>
              <li>
                <a href="#faq">Veelgestelde vragen</a>
              </li>
            </ol>
          </aside>

          <section id="prijsvergelijking" className="content-section">
            <p className="section-label">Prijsniveau</p>
            <h2>Jalón versus kustplaatsen: woningprijzen in juni 2026</h2>
            <p>
              De gemiddelde vraagprijs in Jalón/Xaló bedroeg in juni 2026{" "}
              <strong>€2.271 per m²</strong>. In dezelfde maand lag het
              gemiddelde op €3.417 in Dénia, €3.567 in Calpe, €4.118 in
              Jávea/Xàbia en €4.673 in Moraira. In deze vergelijking was Jalón
              daarmee ongeveer 34% tot 51% goedkoper dan de genoemde
              kustplaatsen.
            </p>
            <p>
              Dat verschil is relevant voor kopers die niet alleen naar de
              aanschafprijs kijken, maar ook naar perceelgrootte, buitenruimte,
              privacy en renovatiebudget. Een lagere gemiddelde vierkante
              meterprijs kan ruimte geven voor een groter huis, een zwembad of
              financiële reserve voor verduurzaming en onderhoud.
            </p>

            <div className="table-wrap" tabIndex={0}>
              <table>
                <caption>
                  Gemiddelde vraagprijzen per m² volgens idealista, juni 2026
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Plaats</th>
                    <th scope="col">Prijs per m²</th>
                    <th scope="col">Verschil met Jalón</th>
                    <th scope="col">Indicatie bij €350.000</th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((item) => (
                    <tr key={item.place}>
                      <th scope="row">{item.place}</th>
                      <td>{formatEuro(item.price)}</td>
                      <td>{item.difference}</td>
                      <td>circa {item.area} m²</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="notice">
              <strong>Belangrijk:</strong> dit zijn gemiddelde vraagprijzen,
              geen gegarandeerde verkoopprijzen. De berekening houdt geen
              rekening met perceel, zwembad, uitzicht, staat van onderhoud,
              ligging binnen de gemeente of aankoopkosten.
            </div>
          </section>

          <section id="budget" className="content-section">
            <p className="section-label">Budgetvergelijking</p>
            <h2>Wat koop je ongeveer voor €350.000?</h2>
            <p>
              Deel je een budget van €350.000 door de gemiddelde vraagprijs per
              vierkante meter, dan ontstaat een eenvoudige indicatie van de
              mogelijke woonoppervlakte. In Jalón komt de rekensom uit op circa
              154 m². In Moraira is dat ongeveer 75 m². Het verschil is bijna
              een complete extra woningverdieping.
            </p>

            <div className="bars" aria-label="Indicatieve woonoppervlakte">
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
              Gebruik deze cijfers niet als taxatie. Een vrijstaande villa met
              veel grond is niet rechtstreeks te vergelijken met een
              appartement vlak bij het strand. Wel maakt de vergelijking
              duidelijk hoeveel invloed locatie op je koopkracht heeft.
            </p>
          </section>

          <section id="kust" className="content-section">
            <p className="section-label">Leven aan zee</p>
            <h2>Wonen aan de kust: dichtbij strand en voorzieningen</h2>
            <p>
              Dénia, Calpe, Jávea en Moraira trekken kopers aan die het
              mediterrane kustleven letterlijk voor de deur willen. Restaurants,
              winkels, jachthavens, promenades en stranden liggen vaak binnen
              korte rij- of loopafstand. Dat is prettig voor eigen gebruik en
              kan interessant zijn wanneer je de woning een deel van het jaar
              wilt verhuren.
            </p>

            <div className="split-grid">
              <div className="card">
                <h3>Voordelen van de kust</h3>
                <ul className="check-list">
                  <li>Strand en zee zijn snel bereikbaar.</li>
                  <li>Ruim aanbod van horeca, winkels en recreatie.</li>
                  <li>Internationale gemeenschap en dienstverlening.</li>
                  <li>Potentiële vraag naar vakantieverhuur.</li>
                  <li>Meer keuze uit appartementen met weinig onderhoud.</li>
                </ul>
              </div>
              <div className="card">
                <h3>Nadelen van de kust</h3>
                <ul className="cross-list">
                  <li>Hogere gemiddelde vierkante meterprijzen.</li>
                  <li>Meer drukte en parkeerdruk in het hoogseizoen.</li>
                  <li>Kleinere woningen of percelen bij hetzelfde budget.</li>
                  <li>Zout, wind en vocht kunnen extra onderhoud vragen.</li>
                  <li>Toeristische verhuur kan aan regels gebonden zijn.</li>
                </ul>
              </div>
            </div>

            <h3>Voor wie is de kust meestal geschikt?</h3>
            <p>
              De kust past goed bij kopers die regelmatig naar het strand
              willen, graag tussen voorzieningen wonen en minder afhankelijk
              willen zijn van lange autoritten. Ook wie een compact appartement
              zoekt voor vakanties of overwintering vindt aan de kust vaak meer
              passend aanbod.
            </p>
          </section>

          <section id="jalon" className="content-section">
            <p className="section-label">Rust en ruimte</p>
            <h2>Wonen in Jalón/Xaló en de Vall de Pop</h2>
            <p>
              Jalón — officieel Xaló in het Valenciaans — ligt in de Marina
              Alta, tussen wijngaarden en berglandschap. Het dorp is bekend om
              lokale wijn en mistela, de zaterdagse markt en zijn centrale
              ligging binnen de Vall de Pop. De omgeving voelt landelijker dan
              de kust, terwijl plaatsen als Dénia, Calpe en Jávea per auto
              bereikbaar blijven.
            </p>
            <p>
              De Vall de Pop omvat onder meer Xaló, Llíber, Alcalalí, Parcent,
              Benigembla, Senija en Murla. De dorpen liggen dicht bij elkaar,
              maar verschillen in hoogte, sfeer, voorzieningen en woningaanbod.
              Daardoor loont het om niet alleen online naar huizen te kijken,
              maar meerdere plaatsen op verschillende momenten van de dag te
              bezoeken.
            </p>

            <div className="split-grid">
              <div className="card">
                <h3>Voordelen van de Jalón Valley</h3>
                <ul className="check-list">
                  <li>Meer woonruimte voor hetzelfde aankoopbudget.</li>
                  <li>Grotere kans op tuin, perceel, uitzicht en privacy.</li>
                  <li>Rustiger dagelijks leven buiten het hoogseizoen.</li>
                  <li>Dorpsgevoel en lokale markten binnen handbereik.</li>
                  <li>Aantrekkelijk voor wandelen, fietsen en buitenleven.</li>
                </ul>
              </div>
              <div className="card">
                <h3>Nadelen van de Jalón Valley</h3>
                <ul className="cross-list">
                  <li>Een auto is voor veel dagelijkse ritten praktisch.</li>
                  <li>Het strand ligt niet op loopafstand.</li>
                  <li>Minder groot aanbod van winkels en avondleven.</li>
                  <li>Landelijke woningen vragen soms meer onderhoud.</li>
                  <li>Internet, water en bereikbaarheid moeten per huis worden gecontroleerd.</li>
                </ul>
              </div>
            </div>

            <h3>Let op micro-locatie, niet alleen op de dorpsnaam</h3>
            <p>
              Twee woningen binnen dezelfde gemeente kunnen sterk van elkaar
              verschillen. Controleer de zonligging in winter en zomer, de
              hellingsgraad van de toegangsweg, afstand tot buren, geluid,
              bereikbaarheid na zware regen en de status van water- en
              elektriciteitsaansluitingen. Bij een woning buiten de bebouwde kom
              is een grondige juridische en technische controle extra
              belangrijk.
            </p>
          </section>

          <section id="keuzehulp" className="content-section">
            <p className="section-label">Keuzehulp</p>
            <h2>Kust of binnenland: welke omgeving past bij jouw plannen?</h2>

            <div className="profile-grid">
              <div className="profile">
                <span className="profile-number">01</span>
                <h3>Je wilt alles dichtbij</h3>
                <p>
                  Kies eerder voor de kust wanneer strand, winkels, restaurants
                  en medische voorzieningen zwaar wegen en je weinig wilt
                  autorijden.
                </p>
              </div>
              <div className="profile">
                <span className="profile-number">02</span>
                <h3>Je wilt maximaal huis voor je geld</h3>
                <p>
                  Kijk serieus naar Jalón en omliggende dorpen wanneer ruimte,
                  buitenleven en privacy belangrijker zijn dan wonen op
                  loopafstand van zee.
                </p>
              </div>
              <div className="profile">
                <span className="profile-number">03</span>
                <h3>Je koopt voor verhuur</h3>
                <p>
                  Onderzoek niet alleen populariteit, maar ook vergunningen,
                  seizoensspreiding, beheer, kosten en realistische
                  bezettingsgraden.
                </p>
              </div>
              <div className="profile">
                <span className="profile-number">04</span>
                <h3>Je verhuist permanent</h3>
                <p>
                  Beoordeel scholen, zorg, internet, reistijd, sociale contacten
                  en dagelijkse boodschappen alsof je er al woont.
                </p>
              </div>
            </div>

            <blockquote>
              De beste regio is niet automatisch de bekendste of duurste plek,
              maar de plek die aansluit op jouw dagelijkse leven, budget en
              toekomstplannen.
            </blockquote>
          </section>

          <section id="aankoopcheck" className="content-section">
            <p className="section-label">Veilig kopen</p>
            <h2>Controleer dit voordat je een woning in Spanje koopt</h2>
            <p>
              Een mooi uitzicht is geen vervanging voor due diligence. Laat de
              woning vóór definitieve aankoop onafhankelijk controleren. Dat is
              belangrijk aan de kust én in het binnenland.
            </p>

            <div className="checklist">
              <div>
                <span>1</span>
                <p>
                  <strong>Eigendom en schulden:</strong> controleer wie juridisch
                  eigenaar is en of er hypotheken, beslagen of openstaande
                  lasten zijn.
                </p>
              </div>
              <div>
                <span>2</span>
                <p>
                  <strong>Vergunningen en legaliteit:</strong> vergelijk de
                  werkelijke woning met kadaster, eigendomsregister en
                  gemeentelijke dossiers.
                </p>
              </div>
              <div>
                <span>3</span>
                <p>
                  <strong>Bouwkundige staat:</strong> laat dak, vocht,
                  fundering, installaties, zwembad en eventuele verbouwingen
                  inspecteren.
                </p>
              </div>
              <div>
                <span>4</span>
                <p>
                  <strong>Totale kosten:</strong> reserveer naast de koopprijs
                  budget voor belasting, notaris, register, juridisch advies,
                  financiering en eventuele renovatie.
                </p>
              </div>
              <div>
                <span>5</span>
                <p>
                  <strong>Gebruiksdoel:</strong> controleer vooraf of permanente
                  bewoning, verbouwing of toeristische verhuur juridisch en
                  praktisch mogelijk is.
                </p>
              </div>
            </div>

            <div className="cta">
              <div>
                <p className="section-label">Persoonlijk zoekprofiel</p>
                <h2>Twijfel je tussen kust en binnenland?</h2>
                <p>
                  Met onze gratis Area Match brengen we je budget, woonwensen,
                  reistijd, voorzieningen en leefstijl samen. Daarna weet je
                  welke regio’s echt bij je passen. Bij een concrete aankoop
                  kunnen een bouwkundig rapport en transparante aankoopbegeleiding
                  helpen om risico’s vroeg te herkennen.
                </p>
              </div>
              <div className="cta-actions">
                <a className="button button-light" href={AREA_MATCH_URL}>
                  Start de Area Match
                </a>
                <a className="text-link-light" href={CONTACT_URL}>
                  Bespreek je plannen →
                </a>
              </div>
            </div>
          </section>

          <section className="content-section">
            <p className="section-label">Conclusie</p>
            <h2>De kust biedt gemak; Jalón biedt meer ruimte</h2>
            <p>
              Wonen aan de kust is aantrekkelijk wanneer je zee, voorzieningen
              en levendigheid centraal stelt. Jalón en de Vall de Pop zijn
              sterker wanneer rust, woonoppervlakte, buitenruimte en een lagere
              gemiddelde instapprijs belangrijker zijn.
            </p>
            <p>
              Maak de keuze niet alleen op basis van vakantiesfeer. Bezoek beide
              omgevingen in het laagseizoen, rijd je dagelijkse routes en
              vergelijk concrete woningen inclusief alle kosten en
              controlepunten. Dan kies je niet alleen een mooi huis, maar een
              omgeving waarin je ook werkelijk prettig kunt wonen.
            </p>

            <div className="inline-actions">
              <a className="button button-primary" href={PROPERTY_URL}>
                Bekijk woningen
              </a>
              <a className="button button-secondary" href={CONTACT_URL}>
                Plan een kennismaking
              </a>
            </div>
          </section>

          <section id="faq" className="content-section">
            <p className="section-label">FAQ</p>
            <h2>Veelgestelde vragen over wonen aan de kust of in Jalón</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="sources" aria-labelledby="bronnen">
            <h2 id="bronnen">Bronnen en actualiteit</h2>
            <p>
              Prijsdata: gemiddelde vraagprijzen van idealista voor juni 2026.
              Lokale informatie: officiële websites van Xaló en Vall de Pop.
              Controleer cijfers en regelgeving opnieuw vlak vóór publicatie of
              aankoop.
            </p>
            <ul>
              {prices.map((item) => (
                <li key={item.place}>
                  <a href={item.source} target="_blank" rel="noopener noreferrer">
                    idealista prijsrapport {item.place}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.xalo.org/es/el-ayuntamiento/regidories/turismo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Officiële toeristische informatie Xaló
                </a>
              </li>
              <li>
                <a
                  href="https://valldepop.es/pueblos/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Officiële website Vall de Pop: dorpen
                </a>
              </li>
            </ul>
            <p className="disclaimer">
              Dit artikel is algemene informatie en geen juridisch, fiscaal,
              bouwkundig of financieel advies.
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