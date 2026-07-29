import type { Metadata } from "next";

/**
 * Nordic Move Spain — kosten levensonderhoud Spanje 2026
 *
 * Onderzoeksopzet:
 * 1. Officiële statistiek van INE en Eurostat voor het landelijke prijsniveau.
 * 2. Actuele openbare prijzen van restaurants en golfclubs als lokale observaties.
 * 3. Transparante budgetscenario's voor de Costa Blanca Noord.
 *
 * Controleer vóór publicatie:
 * - of SITE_URL en alle interne routes overeenkomen met de live website;
 * - of de dienstverlening en CTA-teksten van Nordic Move Spain actueel zijn;
 * - of de openbare restaurant- en golftarieven nog gelden.
 */

const SITE_URL = "https://www.nordicmovespain.com";
const PAGE_PATH = "/nl/guides/kosten-levensonderhoud-in-spanje";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PUBLISHED_AT = "2026-07-23";
const REVIEWED_AT = "2026-07-23";

const internalLinks = {
  home: "/nl",
  guides: "/nl/guides",
  costaBlancaNorth: "/nl/costa-blanca-noord",
  buyingCosts: "/nl/kosten-huis-kopen-spanje-2026",
  relocationAssessment: "/nl/relocation-assessment",
  discoveryTrip: "/nl/buyer-discovery-trip",
  contact: "/nl/contact",
} as const;

const sources = {
  ineHouseholdBudget:
    "https://www.ine.es/dyngs/Prensa/EPF2025.htm",
  ineInflationJune2026:
    "https://www.ine.es/dyngs/Prensa/IPC0626.htm",
  eurostatPriceLevels:
    "https://www.ssb.no/en/priser-og-prisindekser/konsumpriser/statistikk/sammenlikning-av-prisniva-i-europa",
  vatRestaurants:
    "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/folleto-actividades-economicas/5-impuesto-sobre-valor-anadido/5_3-regimen-general/5_3_2-que-consiste.html",
  consumerRestaurantPrices:
    "https://portal-cec.consumo.gob.es/es/comunicacion/noticias/2026/cec-espana-ofrece-consejos-para-comprar-en-san-valentin-y-evitar-que-los",
  tradicioMenu: "https://tradiciodenia.es/carta/",
  movidaMenu:
    "https://www.denia.com/asi-es-el-menu-del-dia-y-de-noche-que-esta-conquistando-denia/",
  javeaMembership: "https://clubdegolfjavea.com/hacerse-socio/",
  javeaBuggy: "https://clubdegolfjavea.com/alquiler-de-buggies-carros/",
  laSellaServices: "https://lasellagolf.com/servicios",
  laSellaTournament:
    "https://lasellagolf.com/competiciones/torneo-benefico-cruz-roja-2026",
  vistabellaMemberships: "https://vistabellagolf.com/en/memberships/",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Kosten levensonderhoud Spanje 2026: restaurants, golf en maandbudget | Nordic Move Spain",
  description:
    "Wat kost wonen in Spanje in 2026? Uitgebreide gids over lunch, diner, restaurants, golfclub-lidmaatschap, green fees, boodschappen en realistische maandbudgetten aan de Costa Blanca.",
  applicationName: "Nordic Move Spain",
  authors: [{ name: "Nordic Move Spain", url: SITE_URL }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Wonen en verhuizen naar Spanje",
  keywords: [
    "kosten levensonderhoud Spanje 2026",
    "wat kost wonen in Spanje",
    "restaurant prijzen Spanje",
    "lunch kosten Spanje",
    "diner kosten Spanje",
    "golfclub lidmaatschap Spanje",
    "golf Costa Blanca kosten",
    "leven Costa Blanca Noord",
    "maandbudget Spanje",
    "kosten emigreren Spanje",
    "Nordic Move Spain",
  ],
  alternates: {
    canonical: PAGE_PATH,
    languages: {
      "nl-NL": PAGE_PATH,
    },
  },
  openGraph: {
    type: "article",
    locale: "nl_NL",
    url: PAGE_PATH,
    siteName: "Nordic Move Spain",
    title: "Kosten levensonderhoud in Spanje in 2026",
    description:
      "Brongebaseerde vergelijking van dagelijkse uitgaven, restaurantkosten en golfkosten, met concrete budgetscenario's voor de Costa Blanca Noord.",
    publishedTime: PUBLISHED_AT,
    modifiedTime: REVIEWED_AT,
    authors: ["Nordic Move Spain"],
  },
  twitter: {
    card: "summary",
    title: "Kosten levensonderhoud Spanje 2026",
    description:
      "Lunch, diner, golf, boodschappen en maandbudgetten voor wonen aan de Costa Blanca.",
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

const euroFormatter = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function formatEuro(amount: number) {
  return euroFormatter.format(amount);
}

type PriceLevel = {
  category: string;
  spain: number;
  netherlands: number;
  interpretation: string;
};

const priceLevels: PriceLevel[] = [
  {
    category: "Totale huishoudelijke consumptie",
    spain: 91.6,
    netherlands: 115.6,
    interpretation:
      "Het Spaanse prijsniveau ligt in deze brede vergelijking ongeveer 21% onder het Nederlandse niveau.",
  },
  {
    category: "Voeding en alcoholvrije dranken",
    spain: 95.3,
    netherlands: 99.4,
    interpretation:
      "Boodschappen zijn gemiddeld maar beperkt goedkoper; het verschil is veel kleiner dan bij horeca.",
  },
  {
    category: "Restaurants en accommodatiediensten",
    spain: 85.4,
    netherlands: 119.9,
    interpretation:
      "Deze gecombineerde categorie ligt in Spanje ongeveer 29% lager. Het cijfer omvat naast restaurants ook accommodatie.",
  },
  {
    category: "Wonen, water, elektriciteit, gas en brandstoffen",
    spain: 98.1,
    netherlands: 134.2,
    interpretation:
      "Landelijk ligt deze brede kostencategorie duidelijk lager, maar lokale huur- en woningkosten kunnen sterk afwijken.",
  },
  {
    category: "Transport",
    spain: 88.1,
    netherlands: 112.2,
    interpretation:
      "De Europese prijsniveauvergelijking wijst op een lager gemiddeld Spaans prijsniveau voor transport.",
  },
];

type BudgetLine = {
  label: string;
  amount: number;
  explanation: string;
};

type MonthlyScenario = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  lines: BudgetLine[];
  excludes: string;
};

const monthlyScenarios: MonthlyScenario[] = [
  {
    id: "rustig-leven-eigen-woning",
    eyebrow: "Twee personen · woning zonder hypotheek",
    title: "Scenario 1: comfortabel maar bewust leven",
    description:
      "Voor een stel dat meestal thuis eet, enkele keren per maand uit eten gaat en geen duur golfabonnement heeft.",
    lines: [
      {
        label: "Boodschappen en huishoudelijke artikelen",
        amount: 475,
        explanation:
          "Een praktische aanname rond het landelijke huishoudgemiddelde, aangepast aan een tweepersoonshuishouden.",
      },
      {
        label: "Elektriciteit, water, internet en mobiele telefonie",
        amount: 250,
        explanation:
          "Sterk afhankelijk van airconditioning, zwembad, isolatie, contracten en woninggrootte.",
      },
      {
        label: "Auto en lokaal vervoer",
        amount: 350,
        explanation:
          "Brandstof, verzekering, onderhoud en reservering voor belasting; exclusief aanschaf en afschrijving.",
      },
      {
        label: "Woninglasten en onderhoudsreserve",
        amount: 300,
        explanation:
          "Praktische maandreservering voor IBI, afval, verzekering, community en klein onderhoud.",
      },
      {
        label: "Zorg en aanvullende verzekeringen",
        amount: 225,
        explanation:
          "Aanname voor twee personen; leeftijd, dekking en toegang tot publieke zorg veranderen dit sterk.",
      },
      {
        label: "Restaurants, cafés en lunch buiten de deur",
        amount: 300,
        explanation:
          "Bijvoorbeeld twee lunches en twee informele diners per maand voor twee personen.",
      },
      {
        label: "Sport, cultuur en overige vrije tijd",
        amount: 150,
        explanation: "Zonder volledig golfclub-lidmaatschap.",
      },
      {
        label: "Kleding, persoonlijke verzorging en onvoorzien",
        amount: 275,
        explanation: "Een buffer voorkomt dat het budget te optimistisch wordt.",
      },
    ],
    excludes:
      "Exclusief huur of hypotheek, internationale reizen, Nederlandse vaste lasten, inkomstenbelasting, grote renovaties en schoolkosten.",
  },
  {
    id: "sociaal-leven-een-golfer",
    eyebrow: "Twee personen · regelmatig uit eten · één golfer",
    title: "Scenario 2: sociaal leven aan de Costa Blanca",
    description:
      "Voor een stel dat wekelijks luncht en dineert, regelmatig uitstapjes maakt en waarbij één persoon gemiddeld vier keer per maand golft.",
    lines: [
      {
        label: "Boodschappen en huishoudelijke artikelen",
        amount: 525,
        explanation: "Ruimer budget voor verse producten, wijn en gasten.",
      },
      {
        label: "Elektriciteit, water, internet en mobiele telefonie",
        amount: 285,
        explanation: "Met seizoensruimte voor koeling en verwarming.",
      },
      {
        label: "Auto en lokaal vervoer",
        amount: 425,
        explanation: "Meer recreatieve kilometers en een ruimere onderhoudsbuffer.",
      },
      {
        label: "Woninglasten en onderhoudsreserve",
        amount: 350,
        explanation: "Voor een woning met tuin, zwembad of community kan dit hoger worden.",
      },
      {
        label: "Zorg en aanvullende verzekeringen",
        amount: 250,
        explanation: "Transparante rekenaanname voor twee personen.",
      },
      {
        label: "Restaurants, cafés en wijn",
        amount: 700,
        explanation:
          "Ongeveer vier lunches en vier diners per maand voor twee personen, plus cafés en drankjes.",
      },
      {
        label: "Golf voor één persoon",
        amount: 400,
        explanation:
          "Vier rondes, eventuele buggy of trolley en een kleine reservering voor oefenfaciliteiten.",
      },
      {
        label: "Overige vrije tijd, verzorging en onvoorzien",
        amount: 350,
        explanation: "Buffer voor sociale activiteiten en wisselende maandkosten.",
      },
    ],
    excludes:
      "Exclusief huur of hypotheek, vluchtkosten, clubaandeel of eenmalig inschrijfgeld, belastingen en grote woninguitgaven.",
  },
  {
    id: "frequent-dining-twee-golfers",
    eyebrow: "Twee personen · veel horeca · twee golfers",
    title: "Scenario 3: actief en royaal mediterraan leven",
    description:
      "Voor twee actieve inwoners die meerdere keren per week buiten de deur eten en allebei frequent golfen.",
    lines: [
      {
        label: "Boodschappen en huishoudelijke artikelen",
        amount: 600,
        explanation: "Inclusief premiumproducten en regelmatig bezoek thuis.",
      },
      {
        label: "Elektriciteit, water, internet en mobiele telefonie",
        amount: 325,
        explanation: "Ruimere woning en intensiever gebruik van klimaatregeling.",
      },
      {
        label: "Auto en lokaal vervoer",
        amount: 500,
        explanation: "Meer ritten naar restaurants, golfbanen en activiteiten.",
      },
      {
        label: "Woninglasten en onderhoudsreserve",
        amount: 425,
        explanation: "Voor een villa of hoogwaardig appartement kan meer nodig zijn.",
      },
      {
        label: "Zorg en aanvullende verzekeringen",
        amount: 325,
        explanation: "Rekenaanname; offertes blijven noodzakelijk.",
      },
      {
        label: "Restaurants, cafés en wijn",
        amount: 1_250,
        explanation:
          "Twee lunches en twee diners per week voor twee personen, met een mix van informeel en middenklasse.",
      },
      {
        label: "Golf voor twee personen",
        amount: 900,
        explanation:
          "Regelmatig spelen, extra materiaal, buggy's en incidentele wedstrijden.",
      },
      {
        label: "Overige vrije tijd, verzorging en onvoorzien",
        amount: 500,
        explanation: "Ruimte voor wellness, evenementen en onverwachte kosten.",
      },
    ],
    excludes:
      "Exclusief huur of hypotheek, aankoop van een golfclubaandeel, vakanties, grote zorgkosten, belastingen en vermogensbeheer.",
  },
];

const restaurantObservations = [
  {
    label: "Eenvoudig gerecht of dagschotel",
    range: "vanaf circa €5,90",
    text:
      "Een lokaal voorbeeld uit Dénia vermeldt een gerecht of rijst van de dag vanaf €5,90. Dit is eerder een voordelige ondergrens dan een gemiddelde restaurantlunch.",
    source: sources.tradicioMenu,
  },
  {
    label: "Rijstgerecht of paella",
    range: "circa €14,90–€23,90 p.p.",
    text:
      "In een actuele openbare kaart in Dénia lopen rijstgerechten van paella Valenciana tot rijst met kreeft binnen deze bandbreedte. Bij rijstgerechten geldt vaak een minimum van twee personen.",
    source: sources.tradicioMenu,
  },
  {
    label: "Tapasmenu",
    range: "circa €19,90 lunch / €24,90 diner",
    text:
      "Een gepubliceerd Dénia-voorbeeld toont een vast tapasmenu met een hoger avondtarief; drank is daar niet inbegrepen.",
    source: sources.movidaMenu,
  },
  {
    label: "Uitgebreider vast menu",
    range: "circa €24,90 lunch / €29,90 diner",
    text:
      "Hetzelfde lokale voorbeeld laat zien dat een uitgebreider diner enkele euro's duurder is dan dezelfde formule overdag.",
    source: sources.movidaMenu,
  },
  {
    label: "Informeel à-la-cartediner",
    range: "budgetteer €35–€60 p.p.",
    text:
      "Dit is een transparante planningsbandbreedte voor voorgerecht of gedeelde tapas, hoofdgerecht, dessert of koffie en beperkte drankjes aan de kust.",
    source: null,
  },
  {
    label: "Middenklasse tot gastronomisch diner",
    range: "budgetteer €60–€100+ p.p.",
    text:
      "Locatie, wijn, verse vis per gewicht, bediening aan zee en gastronomisch niveau maken hier het grootste verschil.",
    source: null,
  },
] as const;

const restaurantMonthlyModels = [
  {
    title: "Licht sociaal",
    frequency: "2 lunches + 2 diners per maand voor twee personen",
    low: 220,
    high: 360,
  },
  {
    title: "Regelmatig",
    frequency: "4 lunches + 4 diners per maand voor twee personen",
    low: 440,
    high: 720,
  },
  {
    title: "Frequent",
    frequency: "8 lunches + 8 diners per maand voor twee personen",
    low: 880,
    high: 1_440,
  },
] as const;

const golfObservations = [
  {
    club: "Club de Golf Jávea",
    title: "Proeflidmaatschap",
    price: "€350",
    detail:
      "Maximaal acht rondes in acht weken. Het bedrag kan volgens de club worden verrekend wanneer daarna een aandeel wordt gekocht.",
    source: sources.javeaMembership,
  },
  {
    club: "Club de Golf Jávea",
    title: "Volwaardig lidmaatschap",
    price: "prijs op aanvraag",
    detail:
      "Een volledig lid koopt een verhandelbaar aandeel, betaalt een niet-terugbetaalbare entreevergoeding en vervolgens een jaarlijkse contributie. De openbare pagina noemt geen vast totaalbedrag.",
    source: sources.javeaMembership,
  },
  {
    club: "Club de Golf Jávea",
    title: "Extra's voor bezoekers",
    price: "buggy €30 · clubs €45 · practice €10",
    detail:
      "De practiceprijs omvat op de openbare pagina 90 ballen. Een trolley staat voor €3 vermeld.",
    source: sources.javeaBuggy,
  },
  {
    club: "La Sella Golf",
    title: "Materiaal en vervoer op de baan",
    price: "clubs €35 · buggy €44 · trolley €5",
    detail:
      "Openbare tarieven voor 18 holes. Een elektrische trolley kost €18 en een oefentoken met 20 ballen €2.",
    source: sources.laSellaServices,
  },
  {
    club: "La Sella Golf",
    title: "Voorbeeld wedstrijdtarief 2026",
    price: "lid €20 · bezoeker €80",
    detail:
      "Dit is een concreet toernooitarief en geen algemene green fee. Het illustreert wel hoe sterk leden- en bezoekerstarieven kunnen verschillen.",
    source: sources.laSellaTournament,
  },
  {
    club: "Vistabella Golf",
    title: "Openbaar 2026-lidmaatschapsbenchmark",
    price: "€3.250 voor 1 jaar en 100 green fees",
    detail:
      "Deze baan ligt aan de zuidelijke Costa Blanca en dient alleen als openbare benchmark. Gepubliceerde opties zijn ook €2.700 voor negen maanden en €2.000 voor zes maanden.",
    source: sources.vistabellaMemberships,
  },
] as const;

const golfBudgetModels = [
  {
    title: "Incidenteel spelen",
    text: "Twee rondes per maand, soms met gedeelde buggy",
    range: "circa €150–€225 per golfer per maand",
  },
  {
    title: "Regelmatig pay-and-play",
    text: "Vier rondes per maand met enkele extra's",
    range: "circa €300–€500 per golfer per maand",
  },
  {
    title: "Veel spelen met passend lidmaatschap",
    text: "Acht of meer rondes per maand",
    range:
      "vergelijk de jaarkosten per werkelijk gespeelde ronde, inclusief entree, aandeel, buggy, federatie en wedstrijden",
  },
] as const;

const faqItems = [
  {
    question: "Hoeveel geld heeft een stel per maand nodig om in Spanje te wonen?",
    answer:
      "Zonder huur of hypotheek is voor twee personen aan de Costa Blanca een praktisch leefbudget vaak ongeveer €2.000 tot €3.500 per maand, afhankelijk van horeca, auto, woningtype, zorg en sport. Twee frequente golfers die vaak uit eten gaan kunnen daar duidelijk boven uitkomen. Gebruik altijd een persoonlijk budget per kostenpost.",
  },
  {
    question: "Is uit eten gaan in Spanje veel goedkoper dan in Nederland?",
    answer:
      "Volgens de Europese prijsniveauvergelijking voor 2025 lag de gecombineerde categorie restaurants en accommodatie in Spanje duidelijk lager dan in Nederland. Dat zegt niet dat ieder restaurant goedkoop is. Kustlocatie, seizoen, wijn, verse vis en gastronomisch niveau kunnen de rekening sterk verhogen.",
  },
  {
    question: "Wat kost een lunch in Spanje in 2026?",
    answer:
      "Voor budgettering is €20 tot €30 per persoon een bruikbare bandbreedte voor een volwaardige lunch aan de Costa Blanca Noord. Zeer eenvoudige lokale gerechten kunnen goedkoper zijn. Een lunch aan zee, met wijn of verse vis, kan juist hoger uitvallen.",
  },
  {
    question: "Wat kost een diner voor twee personen aan de Costa Blanca?",
    answer:
      "Voor een informeel tot middenklasse diner is ongeveer €70 tot €120 voor twee personen een bruikbare start, exclusief uitgebreide wijnkeuze. Gastronomische restaurants, vis per gewicht en meerdere gangen kunnen de rekening ruim boven €150 brengen.",
  },
  {
    question: "Is btw inbegrepen in Spaanse restaurantprijzen?",
    answer:
      "Restaurantdiensten vallen in Spanje normaal onder het verlaagde btw-tarief van 10%. Consumentenprijzen en eventuele extra kosten moeten vooraf duidelijk worden gecommuniceerd. Controleer bij dagprijzen, vis per gewicht, broodservice en reserveringsvoorwaarden altijd de kaart.",
  },
  {
    question: "Wat kost een golfclub-lidmaatschap aan de Costa Blanca?",
    answer:
      "Er bestaat geen standaardtarief. Sommige clubs werken met een jaarlijks pakket, andere met een aandeel, entreegeld en contributie. Een openbare 2026-benchmark aan de Costa Blanca bedraagt €3.250 voor een jaarpakket met 100 green fees, terwijl Club de Golf Jávea voor volledig lidmaatschap een aandeel en aanvullende kosten vereist. Vraag altijd een volledige schriftelijke kostenopgave.",
  },
  {
    question: "Wanneer is een golfabonnement voordeliger dan losse green fees?",
    answer:
      "Bereken de totale jaarkosten van het lidmaatschap en deel die door het aantal rondes dat u realistisch speelt. Neem entreegeld, aandeel, federatielicentie, wedstrijden, buggy en perioden waarin u niet in Spanje bent mee. Voor parttime bewoners zijn meerbeurtenkaarten of pay-and-play vaak flexibeler.",
  },
  {
    question: "Zijn de bedragen in dit artikel officiële gemiddelden?",
    answer:
      "De landelijke cijfers komen uit officiële statistiek. De restaurant- en golfprijzen zijn concrete openbare observaties. De maandbudgetten zijn transparante planningsscenario's en geen officiële gemiddelden of offertes.",
  },
] as const;

const officialSourceLinks = [
  {
    title: "INE — Household Budget Survey 2025",
    text: "Landelijke huishoudelijke uitgaven, waaronder voeding en restaurants/accommodatie.",
    href: sources.ineHouseholdBudget,
  },
  {
    title: "INE — consumentenprijsindex juni 2026",
    text: "Actuele Spaanse inflatie en ontwikkeling van restaurant- en accommodatiediensten.",
    href: sources.ineInflationJune2026,
  },
  {
    title: "Eurostat/SSB — Europese prijsniveaus 2025",
    text: "Vergelijkbare prijsniveau-indexen voor Spanje, Nederland en andere Europese landen.",
    href: sources.eurostatPriceLevels,
  },
  {
    title: "Agencia Tributaria — btw-tarieven",
    text: "Bevestiging dat horeca- en restaurantdiensten normaal onder het verlaagde tarief van 10% vallen.",
    href: sources.vatRestaurants,
  },
  {
    title: "Europees Consumenten Centrum Spanje — restaurantprijzen",
    text: "Uitleg over duidelijke, volledige prijzen en vooraf gemelde extra kosten.",
    href: sources.consumerRestaurantPrices,
  },
  {
    title: "Tradició Dénia — openbare kaart",
    text: "Lokale prijsobservaties voor dagschotels, rijstgerechten, tapas en desserts.",
    href: sources.tradicioMenu,
  },
  {
    title: "Dénia.com — gepubliceerd lunch- en dinermenu",
    text: "Voorbeeld van prijsverschillen tussen vaste lunch- en dinerformules.",
    href: sources.movidaMenu,
  },
  {
    title: "Club de Golf Jávea — lidmaatschap",
    text: "Openbare voorwaarden voor proeflidmaatschap, aandeel, entree en jaarlijkse contributie.",
    href: sources.javeaMembership,
  },
  {
    title: "La Sella Golf — actuele services",
    text: "Openbare tarieven voor clubhuur, buggy, trolleys en oefenballen.",
    href: sources.laSellaServices,
  },
  {
    title: "Vistabella Golf — membership prices 2026",
    text: "Openbare 2026-benchmark voor jaar- en seizoenspakketten aan de Costa Blanca.",
    href: sources.vistabellaMemberships,
  },
] as const;

function sumScenario(lines: readonly BudgetLine[]) {
  return lines.reduce((sum, line) => sum + line.amount, 0);
}

function percentageDifference(spain: number, netherlands: number) {
  return Math.round((1 - spain / netherlands) * 100);
}

export default function CostOfLivingSpain2026Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Kosten levensonderhoud Spanje 2026: restaurants, golf en maandbudget",
    description:
      "Brongebaseerde gids over de kosten van wonen in Spanje, met focus op restaurants, lunch, diner en golf aan de Costa Blanca Noord.",
    datePublished: PUBLISHED_AT,
    dateModified: REVIEWED_AT,
    mainEntityOfPage: PAGE_URL,
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
    about: [
      "Kosten levensonderhoud in Spanje",
      "Restaurantprijzen in Spanje",
      "Golfkosten aan de Costa Blanca",
      "Verhuizen naar Spanje",
    ],
    citation: Object.values(sources),
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
        name: "Startpagina",
        item: `${SITE_URL}${internalLinks.home}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gidsen",
        item: `${SITE_URL}${internalLinks.guides}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Kosten levensonderhoud Spanje 2026",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-[#1e2a3a] px-6 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Broodkruimelnavigatie"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/65"
          >
            <a href={internalLinks.home} className="transition hover:text-white">
              Startpagina
            </a>
            <span aria-hidden="true">/</span>
            <a href={internalLinks.guides} className="transition hover:text-white">
              Gidsen
            </a>
            <span aria-hidden="true">/</span>
            <span>Kosten levensonderhoud</span>
          </nav>

          <p className="text-sm uppercase tracking-[0.32em] text-[#c8a063]">
            Brongebaseerde leefkostengids 2026
          </p>

          <h1 className="mt-6 max-w-6xl font-serif text-5xl leading-tight md:text-7xl">
            Wat kost leven in Spanje? Restaurants, golf en een realistisch
            maandbudget.
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/80">
            Een uitgebreid onderzoek voor Nederlanders die aan de Costa Blanca
            Noord willen wonen en vooraf willen weten wat lunch, diner,
            golfclub-lidmaatschap en het dagelijkse leven werkelijk kunnen kosten.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#maandbudgetten"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Bekijk de maandbudgetten
            </a>
            <a
              href={internalLinks.relocationAssessment}
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Start de Relocation Assessment
            </a>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <div className="rounded-[28px] border border-white/15 bg-white/5 p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-[#c8a063]">
                Comfortabel basisleven
              </p>
              <p className="mt-4 font-serif text-4xl">circa €2.325 p.m.</p>
              <p className="mt-3 leading-relaxed text-white/70">
                Twee personen, eigen woning zonder hypotheek, beperkt uit eten en
                zonder volledig golflidmaatschap.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/15 bg-white/5 p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-[#c8a063]">
                Sociaal + één golfer
              </p>
              <p className="mt-4 font-serif text-4xl">circa €3.285 p.m.</p>
              <p className="mt-3 leading-relaxed text-white/70">
                Wekelijkse lunch en diner, vier golfrondes per maand en een ruimere
                leefstijl.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/15 bg-white/5 p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-[#c8a063]">
                Twee golfers + veel horeca
              </p>
              <p className="mt-4 font-serif text-4xl">circa €4.825 p.m.</p>
              <p className="mt-3 leading-relaxed text-white/70">
                Actief leven met meerdere horecamomenten per week en frequente golf.
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-4xl text-sm leading-relaxed text-white/55">
            Alle drie bedragen zijn transparante planningsscenario&apos;s en sluiten
            huur of hypotheek uit. Ze zijn geen officieel gemiddelde en geen
            persoonlijke financiële offerte.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#c8a063]">
              Eerst het eerlijke antwoord
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Spanje is gemiddeld goedkoper, maar uw leefstijl bepaalt het echte
              verschil.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-stone-600">
            <p>
              Het idee dat alles in Spanje goedkoop is, klopt niet. De Europese
              prijsniveauvergelijking laat wel zien dat de totale Spaanse
              huishoudelijke consumptie in 2025 lager lag dan in Nederland. Het
              verschil is vooral duidelijk bij restaurants, accommodatie en
              transport. Voor boodschappen is het verschil veel kleiner.
            </p>
            <p>
              Voor bewoners van de Costa Blanca Noord telt bovendien een tweede
              effect: u woont in een aantrekkelijke internationale kustregio.
              Terrassen aan zee, populaire havens, toeristische zomermaanden,
              verse vis en hoogwaardige golfbanen kunnen lokale prijzen boven het
              landelijke Spaanse gemiddelde tillen.
            </p>
            <p>
              Daarom combineert deze gids officiële statistiek met concrete lokale
              menu- en golftarieven. Waar geen betrouwbaar gemiddelde bestaat,
              gebruiken we duidelijke rekenaannames in plaats van schijnprecisie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.32em] text-[#c8a063]">
              Spanje vergeleken met Nederland
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Wat zeggen de Europese prijsdata werkelijk?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Eurostat vergelijkt een gestandaardiseerd pakket goederen en diensten.
              De EU-27 staat gelijk aan 100. De cijfers hieronder zijn voorlopige
              prijsniveau-indexen over 2025 en meten prijsverschillen, niet inkomen,
              kwaliteit van leven of persoonlijk consumptiegedrag.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[32px] border border-stone-200">
            <div className="hidden grid-cols-[1.1fr_0.45fr_0.45fr_1.6fr] gap-4 bg-[#1e2a3a] px-7 py-5 text-sm font-medium text-white md:grid">
              <span>Categorie</span>
              <span>Spanje</span>
              <span>Nederland</span>
              <span>Interpretatie</span>
            </div>

            {priceLevels.map((item) => (
              <div
                key={item.category}
                className="grid gap-4 border-t border-stone-200 px-7 py-7 first:border-t-0 md:grid-cols-[1.1fr_0.45fr_0.45fr_1.6fr]"
              >
                <div>
                  <p className="font-medium text-[#1e2a3a]">{item.category}</p>
                  <p className="mt-1 text-sm text-stone-500 md:hidden">
                    EU-27 = 100
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-400 md:hidden">
                    Spanje
                  </p>
                  <p className="mt-1 text-xl font-semibold text-[#1e2a3a] md:mt-0">
                    {item.spain}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-400 md:hidden">
                    Nederland
                  </p>
                  <p className="mt-1 text-xl font-semibold text-[#1e2a3a] md:mt-0">
                    {item.netherlands}
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed text-stone-600">
                    {item.interpretation}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#9b743d]">
                    Relatief verschil: circa {percentageDifference(item.spain, item.netherlands)}%
                    lager dan Nederland.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] bg-[#f6f1ea] p-7 text-stone-700">
            <p className="font-medium text-[#1e2a3a]">Belangrijke beperking</p>
            <p className="mt-3 leading-relaxed">
              De categorie &quot;restaurants en accommodatiediensten&quot; combineert
              uit eten gaan met betaalde overnachtingen. Gebruik het verschil van
              ongeveer 29% daarom niet als automatische korting op iedere Spaanse
              restaurantrekening.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e9dfd2] px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#9b743d]">
                Officiële Spaanse huishouddata
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Het gemiddelde Spaanse huishouden gaf €35.101 uit in 2025.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                Volgens het Spaanse statistiekbureau INE bedroegen de gemiddelde
                consumptieve uitgaven in 2025 €35.101 per huishouden en €14.066 per
                persoon. Dat komt neer op ongeveer €2.925 per huishouden per maand.
              </p>
              <p>
                Voeding en alcoholvrije dranken waren gemiddeld €5.626 per jaar per
                huishouden, of ongeveer €469 per maand. Restaurants en
                accommodatiediensten vormden samen gemiddeld €3.282 per jaar, of
                ongeveer €274 per maand.
              </p>
              <p>
                Deze bedragen zijn nuttige ankerpunten, maar niet rechtstreeks het
                budget van een Nederlands stel aan de Costa Blanca. De statistiek
                omvat alle Spaanse huishoudtypen en gebruikt voor eigen woningen ook
                toegerekende woonconsumptie. Het is dus geen zuivere kasstroom voor
                emigranten.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-[#9b743d]">
                Gemiddeld huishouden
              </p>
              <p className="mt-4 font-serif text-4xl text-[#1e2a3a]">€2.925 p.m.</p>
              <p className="mt-4 leading-relaxed text-stone-600">
                Totale consumptieve uitgaven volgens de landelijke steekproef.
              </p>
            </div>
            <div className="rounded-[28px] bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-[#9b743d]">
                Voeding thuis
              </p>
              <p className="mt-4 font-serif text-4xl text-[#1e2a3a]">€469 p.m.</p>
              <p className="mt-4 leading-relaxed text-stone-600">
                Gemiddeld per huishouden, niet per persoon.
              </p>
            </div>
            <div className="rounded-[28px] bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-[#9b743d]">
                Restaurants + accommodatie
              </p>
              <p className="mt-4 font-serif text-4xl text-[#1e2a3a]">€274 p.m.</p>
              <p className="mt-4 leading-relaxed text-stone-600">
                Gecombineerde statistische categorie; hotelkosten zitten erin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="restaurants" className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#c8a063]">
                Lunch en diner
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Wat kost uit eten aan de Costa Blanca Noord?
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Er bestaat geen betrouwbaar universeel gemiddelde voor een lunch of
                diner. Een dagschotel in een woonwijk, een rijstrestaurant in Dénia,
                een terras in Moraira en een gastronomisch menu zijn andere
                producten. De beste methode is daarom werken met prijsniveaus en een
                eigen maandfrequentie.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {restaurantObservations.map((item) => (
              <article
                key={item.label}
                className="rounded-[30px] bg-white p-8 shadow-sm"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-[#c8a063]">
                  {item.label}
                </p>
                <p className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  {item.range}
                </p>
                <p className="mt-5 leading-relaxed text-stone-600">{item.text}</p>
                {item.source ? (
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex text-sm font-medium text-[#9b743d] underline decoration-[#c8a063]/50 underline-offset-4"
                  >
                    Bekijk de prijsbron
                  </a>
                ) : (
                  <p className="mt-6 text-sm font-medium text-stone-400">
                    Planningsbandbreedte, geen officieel gemiddelde
                  </p>
                )}
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[36px] bg-[#1e2a3a] p-8 text-white md:p-12">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.32em] text-[#c8a063]">
                Van rekening naar maandbudget
              </p>
              <h3 className="mt-5 font-serif text-4xl leading-tight">
                De frequentie is belangrijker dan één goedkope lunch.
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-white/75">
                Onderstaande berekening gebruikt €20–€30 per persoon voor lunch en
                €35–€60 per persoon voor diner. Wijn, cocktails en gastronomische
                restaurants kunnen het hoge scenario overschrijden.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {restaurantMonthlyModels.map((model) => (
                <div
                  key={model.title}
                  className="rounded-[26px] border border-white/15 bg-white/5 p-7"
                >
                  <h4 className="font-serif text-2xl">{model.title}</h4>
                  <p className="mt-3 leading-relaxed text-white/70">
                    {model.frequency}
                  </p>
                  <p className="mt-6 text-2xl font-semibold text-[#c8a063]">
                    {formatEuro(model.low)}–{formatEuro(model.high)} p.m.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[30px] border border-stone-200 bg-[#f6f1ea] p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Waarom diner vaak duurder uitvalt
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                Avondmenu&apos;s zijn in lokale voorbeelden duurder dan dezelfde
                lunchformule. Daarnaast komen wijn, cocktails, dessert, broodservice
                en een langere tafelduur eerder voor bij diner. Voor een realistisch
                leefbudget moet u dus niet alleen het goedkoopste menú del día als
                referentie gebruiken.
              </p>
            </div>
            <div className="rounded-[30px] border border-stone-200 bg-[#f6f1ea] p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Controleer de volledige prijs
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                Restaurantdiensten vallen normaal onder 10% Spaanse btw. Volgens de
                consumentenvoorlichting moeten prijzen en extra kosten vooraf
                duidelijk zijn. Vraag bij verse vis, kreeft, rijst per persoon,
                buiten-de-kaartgerechten en reserveringsvoorwaarden expliciet naar
                de totale prijs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="golf" className="bg-[#1e2a3a] px-6 py-24 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#c8a063]">
                Golf als structurele leefkost
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-tight">
                Een golflidmaatschap is meer dan alleen de jaarlijkse contributie.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-white/75">
              <p>
                Golfclubs in Spanje gebruiken verschillende modellen. De ene club
                verkoopt een jaarpakket met een maximumaantal green fees. De andere
                vraagt een aandeel, entreegeld en jaarlijkse contributie. Weer een
                andere club is vooral aantrekkelijk met losse green fees of een
                society.
              </p>
              <p>
                Vergelijk daarom nooit alleen de contributie. Neem ook eenmalige
                toetreding, federatielicentie, wedstrijden, buggy, trolley,
                materiaal, gasten, horeca en het aantal maanden dat u werkelijk in
                Spanje bent mee.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {golfObservations.map((item) => (
              <article
                key={`${item.club}-${item.title}`}
                className="rounded-[30px] border border-white/15 bg-white/5 p-8"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-[#c8a063]">
                  {item.club}
                </p>
                <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 text-2xl font-semibold text-white">
                  {item.price}
                </p>
                <p className="mt-5 leading-relaxed text-white/70">{item.detail}</p>
                <a
                  href={item.source}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex text-sm font-medium text-[#c8a063] underline decoration-white/20 underline-offset-4"
                >
                  Open openbare clubbron
                </a>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {golfBudgetModels.map((model) => (
              <div key={model.title} className="rounded-[28px] bg-white p-8 text-stone-900">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">{model.title}</h3>
                <p className="mt-4 leading-relaxed text-stone-600">{model.text}</p>
                <p className="mt-6 font-medium leading-relaxed text-[#9b743d]">
                  {model.range}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[34px] border border-[#c8a063]/40 bg-[#c8a063]/10 p-8 md:p-10">
            <h3 className="font-serif text-3xl">Bereken de werkelijke prijs per ronde</h3>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-white/75">
              Een pakket van €3.250 voor 100 green fees lijkt theoretisch €32,50 per
              ronde. Speelt u in werkelijkheid slechts 40 rondes, dan is de
              contributiecomponent €81,25 per ronde, nog vóór buggy, wedstrijden,
              materiaal en andere kosten. De juiste deler is dus niet het maximum in
              het pakket, maar uw realistische gebruik.
            </p>
          </div>
        </div>
      </section>

      <section id="maandbudgetten" className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.32em] text-[#c8a063]">
              Drie reproduceerbare scenario&apos;s
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Maandbudgetten voor twee personen aan de Costa Blanca Noord.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              De scenario&apos;s zijn opgebouwd uit afzonderlijke kostenposten. Zo kunt
              u bedragen vervangen door uw eigen offertes, gewoonten en woningtype.
              Huur of hypotheek staat bewust buiten de berekening, omdat die post
              lokaal en per woning te sterk varieert.
            </p>
          </div>

          <div className="mt-14 space-y-10">
            {monthlyScenarios.map((scenario) => {
              const total = sumScenario(scenario.lines);

              return (
                <article
                  key={scenario.id}
                  id={scenario.id}
                  className="overflow-hidden rounded-[36px] bg-white shadow-sm"
                >
                  <div className="grid gap-8 bg-[#e9dfd2] p-8 md:grid-cols-[1fr_auto] md:p-10">
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-[#9b743d]">
                        {scenario.eyebrow}
                      </p>
                      <h3 className="mt-4 font-serif text-4xl text-[#1e2a3a]">
                        {scenario.title}
                      </h3>
                      <p className="mt-4 max-w-3xl leading-relaxed text-stone-700">
                        {scenario.description}
                      </p>
                    </div>
                    <div className="self-center rounded-[24px] bg-white px-7 py-5 text-left md:text-right">
                      <p className="text-sm uppercase tracking-[0.18em] text-stone-400">
                        Totaal per maand
                      </p>
                      <p className="mt-2 font-serif text-4xl text-[#1e2a3a]">
                        {formatEuro(total)}
                      </p>
                    </div>
                  </div>

                  <div className="divide-y divide-stone-200 px-8 md:px-10">
                    {scenario.lines.map((line) => (
                      <div
                        key={line.label}
                        className="grid gap-4 py-6 md:grid-cols-[1fr_0.35fr_1.4fr]"
                      >
                        <p className="font-medium text-[#1e2a3a]">{line.label}</p>
                        <p className="text-xl font-semibold text-[#9b743d]">
                          {formatEuro(line.amount)}
                        </p>
                        <p className="leading-relaxed text-stone-600">
                          {line.explanation}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-stone-200 bg-[#f6f1ea] px-8 py-6 md:px-10">
                    <p className="text-sm leading-relaxed text-stone-600">
                      <strong className="text-[#1e2a3a]">Niet inbegrepen:</strong>{" "}
                      {scenario.excludes}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#e9dfd2] px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#9b743d]">
                Kosten die vaak worden vergeten
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Het maandbudget is pas betrouwbaar wanneer ook de stille kosten zijn
                opgenomen.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Zomer- en winterenergie",
                  text: "Airconditioning, zwembadpomp, ontvochtiging en elektrische verwarming kunnen voor duidelijke seizoenspieken zorgen.",
                },
                {
                  title: "Community en buitengewoon onderhoud",
                  text: "Naast de normale bijdrage kan een urbanisatie extra bijdragen vaststellen voor liften, gevels, zwembaden of infrastructuur.",
                },
                {
                  title: "Auto-afschrijving",
                  text: "Veel maandbudgetten nemen alleen brandstof en verzekering op. Vervanging, banden en waardeverlies blijven echte kosten.",
                },
                {
                  title: "Bezoek uit Nederland",
                  text: "Extra boodschappen, restaurants, transfers en grotere huurauto's maken gastenmaanden structureel duurder.",
                },
                {
                  title: "Golfmateriaal en sociale kosten",
                  text: "Kleding, schoenen, lessen, federatie, wedstrijden, gasten en de negentiende hole staan vaak niet in het basistarief.",
                },
                {
                  title: "Dubbele vaste lasten",
                  text: "Zolang een woning, auto, verzekering of abonnement in Nederland doorloopt, ervaart u niet het volledige Spaanse kostenvoordeel.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-[28px] bg-white p-7">
                  <h3 className="font-serif text-2xl text-[#1e2a3a]">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-stone-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.32em] text-[#c8a063]">
              Onderzoeksmethode
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Zo zijn de bedragen opgebouwd en zo moet u ze lezen.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-[30px] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-[#c8a063]">01</p>
              <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                Officiële macrodata
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                INE geeft landelijke huishoudelijke uitgaven en inflatie. Eurostat
                maakt prijsniveaus tussen landen vergelijkbaar met een
                gestandaardiseerde methode.
              </p>
            </div>
            <div className="rounded-[30px] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-[#c8a063]">02</p>
              <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                Lokale prijsobservaties
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                Openbare restaurantkaarten en officiële golfclubpagina&apos;s tonen wat
                specifieke producten en diensten op de controledatum kostten.
              </p>
            </div>
            <div className="rounded-[30px] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-[#c8a063]">03</p>
              <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                Transparante scenario&apos;s
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                Waar geen statistisch betrouwbaar lokaal gemiddelde bestaat, tonen
                we een reproduceerbare budgetaanname. U kunt elke regel vervangen.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-[32px] border border-stone-200 bg-[#f6f1ea] p-8 md:p-10">
            <h3 className="font-serif text-3xl text-[#1e2a3a]">
              Waarom dit wetenschappelijker is dan één internetgemiddelde
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              Een gemiddelde zonder populatie, meetperiode, productdefinitie en
              geografisch bereik is moeilijk te interpreteren. Daarom onderscheiden
              we landelijk prijsniveau, lokale waarneming en persoonlijke
              budgetaanname. De cijfers worden niet samengevoegd alsof ze dezelfde
              statistische betekenis hebben.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white px-6 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-[#c8a063]">
              Veelgestelde vragen
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Praktische antwoorden over leven, eten en golf in Spanje.
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[24px] border border-stone-200 bg-[#f6f1ea] p-6 open:bg-white"
              >
                <summary className="cursor-pointer list-none font-serif text-2xl text-[#1e2a3a]">
                  <span className="flex items-start justify-between gap-6">
                    {item.question}
                    <span className="mt-1 text-[#c8a063] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-5 pr-8 leading-relaxed text-stone-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="sources" className="bg-[#e9dfd2] px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.32em] text-[#9b743d]">
              Bronnen en actualiteit
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Controleer tarieven opnieuw voordat u een definitieve beslissing neemt.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Restaurantkaarten, energiecontracten en golftarieven kunnen gedurende
              het jaar veranderen. De pagina is inhoudelijk gecontroleerd op 23 juli
              2026. Officiële statistiek heeft bovendien een eigen referentieperiode.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {officialSourceLinks.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[26px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-medium text-[#1e2a3a]">{source.title}</h3>
                <p className="mt-3 leading-relaxed text-stone-600">{source.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[40px] bg-[#1e2a3a] p-10 text-white md:p-14">
            <p className="text-sm uppercase tracking-[0.32em] text-[#c8a063]">
              Nordic Move Spain
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-tight">
              Kies niet alleen een woning. Kies een leefstijl die financieel bij u
              past.
            </h2>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/75">
              De Relocation Assessment vergelijkt regio&apos;s, dagelijks leven,
              voorzieningen, bereikbaarheid en persoonlijke prioriteiten voordat u
              zich vastlegt op een locatie.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={internalLinks.relocationAssessment}
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Start de Relocation Assessment
              </a>
              <a
                href={internalLinks.contact}
                className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
              >
                Plan een kennismaking
              </a>
            </div>
          </div>

          <aside className="rounded-[40px] bg-white p-10 shadow-sm md:p-12">
            <p className="text-sm uppercase tracking-[0.28em] text-[#c8a063]">
              Lees ook
            </p>
            <div className="mt-7 space-y-5">
              <a
                href={internalLinks.buyingCosts}
                className="block rounded-[22px] bg-[#f6f1ea] p-6 transition hover:bg-[#e9dfd2]"
              >
                <p className="font-serif text-2xl text-[#1e2a3a]">
                  Kosten huis kopen in Spanje in 2026
                </p>
                <p className="mt-2 leading-relaxed text-stone-600">
                  Belastingen, advocaat, notaris en volledige rekenvoorbeelden.
                </p>
              </a>
              <a
                href={internalLinks.costaBlancaNorth}
                className="block rounded-[22px] bg-[#f6f1ea] p-6 transition hover:bg-[#e9dfd2]"
              >
                <p className="font-serif text-2xl text-[#1e2a3a]">
                  Wonen aan de Costa Blanca Noord
                </p>
                <p className="mt-2 leading-relaxed text-stone-600">
                  Vergelijk plaatsen, landschap, voorzieningen en dagelijks leven.
                </p>
              </a>
              <a
                href={internalLinks.discoveryTrip}
                className="block rounded-[22px] bg-[#f6f1ea] p-6 transition hover:bg-[#e9dfd2]"
              >
                <p className="font-serif text-2xl text-[#1e2a3a]">
                  Buyer Discovery Trip
                </p>
                <p className="mt-2 leading-relaxed text-stone-600">
                  Ervaar regio&apos;s en leefritme voordat u een aankoopbeslissing neemt.
                </p>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-stone-200 px-6 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm leading-relaxed text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>
            Auteur en inhoudelijke redactie: Nordic Move Spain · Gepubliceerd en
            gecontroleerd op 23 juli 2026.
          </p>
          <p>
            Informatief artikel, geen persoonlijk financieel, fiscaal of juridisch
            advies.
          </p>
        </div>
      </section>
    </main>
  );
}