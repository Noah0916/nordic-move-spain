import type { Metadata } from "next";

/**
 * Nordic Move Spain — brongebaseerde kopersgids 2026
 *
 * Controleer vóór publicatie:
 * 1. Of SITE_URL overeenkomt met het live domein.
 * 2. Of de paden in internalLinks werkelijk bestaan.
 * 3. Of de omschrijving van de gratis Nordic Move Spain-diensten exact aansluit
 *    bij jullie actuele dienstverlening en voorwaarden.
 */

const SITE_URL = "https://www.nordicmovespain.com";
const PAGE_PATH = "/nl/kosten-huis-kopen-spanje-2026";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PUBLISHED_AT = "2026-07-23";
const REVIEWED_AT = "2026-07-23";

const internalLinks = {
  home: "/nl",
  guides: "/nl/guides",
  buyingGuide: "/nl/huis-kopen-spanje",
  purchaseGuidance: "/nl/aankoopbegeleiding-spanje",
  newBuild: "/nl/nieuwbouw-spanje",
  mortgage: "/nl/hypotheek-spanje",
  technicalReport: "/nl/technisch-rapport-woning-spanje",
  touristRental: "/nl/vakantieverhuur-spanje",
  costaBlancaNorth: "/nl/costa-blanca-noord",
  areaMatch: "/nl/area-match",
  discoveryTrip: "/nl/buyer-discovery-trip",
  contact: "/nl/contact",
} as const;

const officialSources = {
  valencianTaxLaw:
    "https://www.boe.es/buscar/act.php?id=BOE-A-1998-8202&lang=es&p=&tn=1",
  referenceValue: "https://atv.gva.es/valor-de-referencia",
  vatOrItp:
    "https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
  mortgageCosts:
    "https://clientebancario.bde.es/pcb/es/menu-horizontal/productosservici/financiacion/hipotecas/guia-textual/primerospasoscon/Gastos_asociados_a_la_hipoteca.html",
  notaryBuying: "https://www.notariado.org/comprar-una-vivienda/",
  notaryFees: "https://www.notariado.org/portal/es/qu%C3%A9-cuesta",
  energyCertificate:
    "https://www.miteco.gob.es/es/energia/eficiencia/certificacion-energetica/real-decreto-390-2021.html",
  energyProfessionals2026:
    "https://boe.es/diario_boe/txt.php?id=BOE-A-2025-15230",
  euBuildingsDirective:
    "https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32024L1275",
  valencianTouristHomes:
    "https://www.boe.es/buscar/doc.php?id=DOGV-r-2024-90168",
  valencianTouristRegistration:
    "https://sede.gva.es/es/detall-tramit?id_proc=19207",
  communityApproval:
    "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-21876",
  nonResidentSellerWithholding:
    "https://sede.agenciatributaria.gob.es/Sede/no-residentes/irnr-sin-establecimiento-permanente/retenciones-irnr-sin-establecimiento-permanente/retencion-adquirente-inmueble.html",
  plusvaliaLaw:
    "https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214",
  nonResidentPropertyTax:
    "https://sede.agenciatributaria.gob.es/Sede/no-residentes/irnr-sin-establecimiento-permanente/cuestiones-especificas-sobre-tributacion-inmuebles/renta-imputada-inmueble-urbano-uso-propio.html",
  nonResidentRentalIncome:
    "https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/impuesto-sobre-renta-no-residentes/modelo-210-irnr______a-no-residentes-permanente_/ejemplos-cumplimentacion/rendimientos-derivados-arrendamiento-inmuebles-urbanos.html",
  dutchSecondHome:
    "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/vermogen_en_aanmerkelijk_belang/vermogen/wat_zijn_uw_bezittingen_en_schulden/uw_bezittingen/2e_woning",
  dutchForeignIncome:
    "https://www.belastingdienst.nl/wps/wcm/connect/nl/buitenland/content/wonen-in-nederland-buitenlands-inkomen",
  goldenVisaLaw:
    "https://www.boe.es/buscar/act.php?id=BOE-A-2013-10074&p=20250409&tn=1",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Kosten huis kopen Spanje 2026: compleet overzicht | Nordic Move Spain",
  description:
    "Wat kost een huis kopen in Spanje in 2026? Bekijk ITP, IVA, AJD, advocaat, notaris, register, hypotheek, energie-eisen en voorbeelden van €500.000 en €3 miljoen.",
  applicationName: "Nordic Move Spain",
  authors: [{ name: "Nordic Move Spain", url: SITE_URL }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Vastgoed in Spanje",
  keywords: [
    "kosten huis kopen Spanje 2026",
    "aankoopkosten Spanje",
    "ITP Valencia 2026",
    "huis kopen Costa Blanca",
    "notariskosten Spanje",
    "advocaatkosten Spanje woning",
    "nieuwbouw Spanje IVA AJD",
    "overdrachtsbelasting Comunitat Valenciana",
    "technische keuring woning Spanje",
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
    title: "Wat kost een huis kopen in Spanje in 2026?",
    description:
      "Een brongebaseerd overzicht van belastingen en overige aankoopkosten in de Comunitat Valenciana, met rekenvoorbeelden van €500.000 en €3 miljoen.",
    publishedTime: PUBLISHED_AT,
    modifiedTime: REVIEWED_AT,
    authors: ["Nordic Move Spain"],
  },
  twitter: {
    card: "summary",
    title: "Kosten huis kopen Spanje 2026",
    description:
      "ITP, IVA, AJD, advocaat, notaris, register en rekenvoorbeelden voor bestaande bouw en nieuwbouw.",
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

const euro = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const percent = new Intl.NumberFormat("nl-NL", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 2,
});

type CostLine = {
  label: string;
  amount: number;
  basis: string;
  status: "Wettelijk" | "Rekenaanname" | "Gratis";
};

type CostScenario = {
  id: string;
  eyebrow: string;
  title: string;
  purchasePrice: number;
  lines: CostLine[];
  note: string;
};

/**
 * De professionele kosten hieronder zijn controleerbare rekenaannames en geen
 * wettelijk tarief. Ze maken de voorbeelden reproduceerbaar. Vraag per dossier
 * altijd offertes op.
 */
const costScenarios: CostScenario[] = [
  {
    id: "bestaande-woning-500000",
    eyebrow: "Bestaande bouw · €500.000",
    title: "Voorbeeld 1: bestaande woning van €500.000",
    purchasePrice: 500_000,
    lines: [
      {
        label: "ITP overdrachtsbelasting (9%)",
        amount: 45_000,
        basis: "9% × €500.000",
        status: "Wettelijk",
      },
      {
        label: "Onafhankelijke advocaat (aanname 1% + 21% IVA)",
        amount: 6_050,
        basis: "1,21% × €500.000",
        status: "Rekenaanname",
      },
      {
        label: "Notaris en afschriften koopakte",
        amount: 1_000,
        basis: "Budgetpost; gereguleerd tarief, dossierafhankelijk",
        status: "Rekenaanname",
      },
      {
        label: "Inschrijving Registro de la Propiedad",
        amount: 700,
        basis: "Budgetpost; gereguleerd tarief, dossierafhankelijk",
        status: "Rekenaanname",
      },
      {
        label: "Gestoría / administratieve afhandeling",
        amount: 350,
        basis: "Alleen indien gebruikt",
        status: "Rekenaanname",
      },
      {
        label: "NIE, volmacht en/of beëdigde vertaling",
        amount: 500,
        basis: "Praktische reservering; situatieafhankelijk",
        status: "Rekenaanname",
      },
      {
        label: "Aankoopbegeleidingsfee Nordic Move Spain",
        amount: 0,
        basis: "€0 voor de koper",
        status: "Gratis",
      },
      {
        label: "Technisch aankooprapport Nordic Move Spain",
        amount: 0,
        basis: "€0 binnen de beschreven dienstverlening",
        status: "Gratis",
      },
    ],
    note:
      "Dit voorbeeld veronderstelt dat de fiscale grondslag gelijk is aan €500.000 en dat geen verlaagd ITP-tarief geldt. Hypotheek-, valuta-, renovatie- en inrichtingskosten zijn niet opgenomen.",
  },
  {
    id: "bestaande-woning-3000000",
    eyebrow: "Bestaande bouw · €3.000.000",
    title: "Voorbeeld 2: bestaande woning van €3 miljoen",
    purchasePrice: 3_000_000,
    lines: [
      {
        label: "ITP overdrachtsbelasting (11%)",
        amount: 330_000,
        basis: "11% × €3.000.000",
        status: "Wettelijk",
      },
      {
        label: "Onafhankelijke advocaat (aanname 1% + 21% IVA)",
        amount: 36_300,
        basis: "1,21% × €3.000.000",
        status: "Rekenaanname",
      },
      {
        label: "Notaris en afschriften koopakte",
        amount: 2_000,
        basis: "Budgetpost; gereguleerd tarief, dossierafhankelijk",
        status: "Rekenaanname",
      },
      {
        label: "Inschrijving Registro de la Propiedad",
        amount: 1_300,
        basis: "Budgetpost; gereguleerd tarief, dossierafhankelijk",
        status: "Rekenaanname",
      },
      {
        label: "Gestoría / administratieve afhandeling",
        amount: 500,
        basis: "Alleen indien gebruikt",
        status: "Rekenaanname",
      },
      {
        label: "NIE, volmacht en/of beëdigde vertaling",
        amount: 900,
        basis: "Praktische reservering; situatieafhankelijk",
        status: "Rekenaanname",
      },
      {
        label: "Aankoopbegeleidingsfee Nordic Move Spain",
        amount: 0,
        basis: "€0 voor de koper",
        status: "Gratis",
      },
      {
        label: "Technisch aankooprapport Nordic Move Spain",
        amount: 0,
        basis: "€0 binnen de beschreven dienstverlening",
        status: "Gratis",
      },
    ],
    note:
      "Boven €1 miljoen geldt in de Comunitat Valenciana het algemene ITP-tarief van 11% over de belastbare waarde; het is in deze wettelijke formulering geen schijventarief alleen over het meerdere.",
  },
  {
    id: "nieuwbouw-500000",
    eyebrow: "Nieuwbouw · €500.000",
    title: "Voorbeeld 3: nieuwbouwwoning van €500.000",
    purchasePrice: 500_000,
    lines: [
      {
        label: "IVA op nieuwbouw (10%)",
        amount: 50_000,
        basis: "10% × €500.000",
        status: "Wettelijk",
      },
      {
        label: "AJD algemeen tarief (1,4%)",
        amount: 7_000,
        basis: "1,4% × €500.000, exclusief IVA",
        status: "Wettelijk",
      },
      {
        label: "Onafhankelijke advocaat (aanname 1% + 21% IVA)",
        amount: 6_050,
        basis: "1,21% × €500.000",
        status: "Rekenaanname",
      },
      {
        label: "Notaris en afschriften koopakte",
        amount: 1_000,
        basis: "Budgetpost; gereguleerd tarief, dossierafhankelijk",
        status: "Rekenaanname",
      },
      {
        label: "Inschrijving Registro de la Propiedad",
        amount: 700,
        basis: "Budgetpost; gereguleerd tarief, dossierafhankelijk",
        status: "Rekenaanname",
      },
      {
        label: "Gestoría / administratieve afhandeling",
        amount: 350,
        basis: "Alleen indien gebruikt",
        status: "Rekenaanname",
      },
      {
        label: "NIE, volmacht en/of beëdigde vertaling",
        amount: 500,
        basis: "Praktische reservering; situatieafhankelijk",
        status: "Rekenaanname",
      },
      {
        label: "Aankoopbegeleidingsfee Nordic Move Spain",
        amount: 0,
        basis: "€0 voor de koper",
        status: "Gratis",
      },
      {
        label: "Technisch aankooprapport Nordic Move Spain",
        amount: 0,
        basis: "€0 binnen de beschreven dienstverlening",
        status: "Gratis",
      },
    ],
    note:
      "Bij een kwalificerende eigen hoofdwoning kan voor de aankoopakte een AJD-tarief van 0,1% gelden. In dat scenario daalt AJD bij €500.000 van €7.000 naar €500 en het voorbeeldtotaal met €6.500.",
  },
  {
    id: "nieuwbouw-3000000",
    eyebrow: "Nieuwbouw · €3.000.000",
    title: "Voorbeeld 4: nieuwbouwwoning van €3 miljoen",
    purchasePrice: 3_000_000,
    lines: [
      {
        label: "IVA op nieuwbouw (10%)",
        amount: 300_000,
        basis: "10% × €3.000.000",
        status: "Wettelijk",
      },
      {
        label: "AJD algemeen tarief (1,4%)",
        amount: 42_000,
        basis: "1,4% × €3.000.000, exclusief IVA",
        status: "Wettelijk",
      },
      {
        label: "Onafhankelijke advocaat (aanname 1% + 21% IVA)",
        amount: 36_300,
        basis: "1,21% × €3.000.000",
        status: "Rekenaanname",
      },
      {
        label: "Notaris en afschriften koopakte",
        amount: 2_000,
        basis: "Budgetpost; gereguleerd tarief, dossierafhankelijk",
        status: "Rekenaanname",
      },
      {
        label: "Inschrijving Registro de la Propiedad",
        amount: 1_300,
        basis: "Budgetpost; gereguleerd tarief, dossierafhankelijk",
        status: "Rekenaanname",
      },
      {
        label: "Gestoría / administratieve afhandeling",
        amount: 500,
        basis: "Alleen indien gebruikt",
        status: "Rekenaanname",
      },
      {
        label: "NIE, volmacht en/of beëdigde vertaling",
        amount: 900,
        basis: "Praktische reservering; situatieafhankelijk",
        status: "Rekenaanname",
      },
      {
        label: "Aankoopbegeleidingsfee Nordic Move Spain",
        amount: 0,
        basis: "€0 voor de koper",
        status: "Gratis",
      },
      {
        label: "Technisch aankooprapport Nordic Move Spain",
        amount: 0,
        basis: "€0 binnen de beschreven dienstverlening",
        status: "Gratis",
      },
    ],
    note:
      "Bij luxe nieuwbouw kunnen aanvullende posten ontstaan, zoals contractuele aansluitkosten, upgrades, domotica, landschapswerk of inrichting. Neem zulke posten alleen op wanneer ze uit de reserverings- en koopdocumentatie blijken.",
  },
];

const taxRates = [
  {
    label: "Bestaande woning tot en met €1 miljoen",
    value: "9% ITP",
    explanation:
      "Algemeen tarief in de Comunitat Valenciana voor belastbare verkrijgingen vanaf 1 juni 2026, tenzij een bijzonder tarief geldt.",
  },
  {
    label: "Bestaande woning boven €1 miljoen",
    value: "11% ITP",
    explanation:
      "Het 11%-tarief geldt bij een waarde boven €1 miljoen. Controleer de belastbare grondslag en eventuele samenhangende aankopen.",
  },
  {
    label: "Reguliere nieuwbouwwoning",
    value: "10% IVA",
    explanation:
      "Bij de eerste levering door de ontwikkelaar is doorgaans 10% Spaanse btw verschuldigd in plaats van ITP.",
  },
  {
    label: "Nieuwbouwakte — algemeen",
    value: "1,4% AJD",
    explanation:
      "Algemeen AJD-tarief in de overige gevallen; bij een kwalificerende eigen hoofdwoning kan 0,1% gelden.",
  },
];

const reducedRates = [
  {
    rate: "8% ITP",
    applies:
      "Eerste eigen hoofdwoning voor kopers jonger dan 35 jaar wanneer de waarde hoger is dan €180.000.",
    conditions:
      "Alleen voor het door de jongere verworven aandeel en onder meer afhankelijk van de wettelijke inkomensgrenzen.",
  },
  {
    rate: "6% ITP",
    applies:
      "Eerste eigen hoofdwoning voor kopers jonger dan 35 jaar wanneer de waarde niet hoger is dan €180.000.",
    conditions:
      "Onder meer wettelijke inkomensgrenzen en formalisering in een openbare akte zijn relevant.",
  },
  {
    rate: "4% ITP",
    applies:
      "Bepaalde kwalificerende hoofdwoningen boven €180.000, bijvoorbeeld voor grote of eenoudergezinnen, bepaalde handicaps, slachtoffers van gendergeweld of specifieke beschermde woningen.",
    conditions:
      "De exacte categorie, inkomensgrens, bewijsstukken en het aandeel van de koper moeten vooraf worden getoetst.",
  },
  {
    rate: "3% ITP",
    applies:
      "Dezelfde bijzondere categorieën bij een waarde tot en met €180.000.",
    conditions:
      "Een vakantie- of tweede woning voldoet normaal niet aan de eis van eigen hoofdwoning.",
  },
];

const acquisitionCostItems = [
  {
    title: "1. ITP, of IVA plus AJD",
    text:
      "De grootste bijkomende post is bijna altijd de aankoopbelasting. Bestaande bouw valt doorgaans onder ITP; een eerste levering van nieuwbouw door een ondernemer doorgaans onder IVA en daarnaast AJD. De fiscale kwalificatie van de transactie gaat vóór de marketingterm ‘nieuw’ of ‘gerenoveerd’.",
    source: officialSources.vatOrItp,
    sourceLabel: "Agencia Tributaria: IVA of ITP",
  },
  {
    title: "2. Belastbare waarde en valor de referencia",
    text:
      "Bij ITP is niet automatisch alleen de afgesproken koopprijs beslissend. Wanneer een kadastrale referentiewaarde bestaat, fungeert die in beginsel als minimale fiscale grondslag. Is de koopprijs of aangegeven tegenprestatie hoger, dan wordt de hoogste waarde gebruikt. Controleer dit vóór een bod, niet pas bij de belastingaangifte.",
    source: officialSources.referenceValue,
    sourceLabel: "ATV: valor de referencia",
  },
  {
    title: "3. Onafhankelijke advocaat",
    text:
      "Een advocaat controleert onder meer eigendom, lasten, beslag, schulden, vergunningen, urbanistische status, contracten, community-documenten en fiscale verplichtingen. Er bestaat geen universeel wettelijk advocatentarief voor iedere aankoop. Daarom gebruiken de rekenvoorbeelden transparant 1% plus 21% IVA als begrotingsaanname, niet als vaste marktprijs.",
  },
  {
    title: "4. Notaris en eigendomsregister",
    text:
      "Notariële en registrale tarieven zijn gereguleerd, maar het uiteindelijke bedrag hangt af van prijs, lengte en complexiteit van de akte, afschriften en registrale handelingen. De notaris is onafhankelijk en controleert de akte, maar vervangt niet de persoonlijke due diligence door uw eigen advocaat.",
    source: officialSources.notaryBuying,
    sourceLabel: "Consejo General del Notariado",
  },
  {
    title: "5. Gestoría, NIE, volmacht en vertaling",
    text:
      "Deze posten zijn niet in elk dossier gelijk. Een gestoría kan de belasting- en registrale afhandeling verzorgen. Daarnaast kunnen een NIE-nummer, notariële volmacht, apostille, tolk of beëdigde vertaling nodig zijn. Vraag vooraf wie welke taak uitvoert, om dubbel werk en dubbele facturen te voorkomen.",
  },
  {
    title: "6. Hypotheek- en bankkosten",
    text:
      "Bij een Spaanse hypotheek betaalt de koper doorgaans de taxatie en eventueel een afgesproken openingscommissie. Voor de hypotheekakte draagt de bank volgens de huidige verdeling doorgaans notaris-, register-, belasting- en gestoríakosten. Dat staat los van de kosten van de koopakte zelf.",
    source: officialSources.mortgageCosts,
    sourceLabel: "Banco de España: hypotheekkosten",
  },
  {
    title: "7. Valuta- en betalingskosten",
    text:
      "Wie vermogen in een andere valuta aanhoudt, heeft koersrisico en mogelijk transferkosten. Zelfs een beperkte wisselkoersbeweging kan bij €500.000 of €3 miljoen groter zijn dan de notaris- en registerkosten samen. Leg betaalmoment, koersmarge en banklimieten vroeg vast.",
  },
  {
    title: "8. Renovatie, inrichting en directe reserves",
    text:
      "Renovatie en meubilair zijn geen aankoopbelasting, maar wel onderdeel van het benodigde kapitaal. Reserveer afzonderlijk voor achterstallig onderhoud, zwembad- en tuinwerk, airconditioning, vochtbehandeling, energieverbetering en mogelijke community-bijdragen.",
  },
];

const legalDueDiligence = [
  "Nota simple en eigendomstitel: klopt de verkoper, zijn er hypotheken, beslagen, erfdienstbaarheden of gebruiksrechten?",
  "Registro versus Catastro: komen oppervlaktes, grenzen, bebouwing, zwembad, bijgebouwen en gebruik overeen?",
  "Urbanistische legaliteit: zijn uitbreidingen, terrassen, garages, gastenverblijven en zwembaden vergund of juridisch regulariseerbaar?",
  "Bewoonbaarheid en gebruik: is de benodigde licencia of declaración de ocupación aanwezig en passend bij het beoogde gebruik?",
  "Gemeenschap van eigenaars: statuten, notulen, betalingsbewijs, schulden, procedures en aangekondigde derramas controleren.",
  "Gemeentelijke lasten: recente IBI- en afvalbewijzen, openstaande heffingen en eventuele urbanisatieverplichtingen onderzoeken.",
  "Kust-, landelijk en beschermd gebied: beperkingen uit Ley de Costas, suelo no urbanizable of milieuregels kunnen gebruik en verbouwing beperken.",
  "Contract en waarborgen: reservering, arras, ontbindende voorwaarden, inventaris, opleverdatum, gebreken en verdeling van kosten exact vastleggen.",
];

const technicalChecks = [
  {
    title: "Constructie en scheurvorming",
    text:
      "Beoordeel scheuren op patroon, breedte, locatie en mogelijke beweging. Een visuele aankoopinspectie signaleert risico’s; bij vermoedelijke funderings- of stabiliteitsproblemen hoort aanvullend constructief onderzoek door een bevoegde specialist.",
  },
  {
    title: "Vocht, drainage en kustklimaat",
    text:
      "Let op opstijgend vocht, lekkage, capillaire werking, condensatie, zoutbelasting, terrasafschot, dakdetails en afvoer rond hellingpercelen. Een droge bezichtigingsdag bewijst niet dat een gebouw in regenperioden droog blijft.",
  },
  {
    title: "Installaties en capaciteit",
    text:
      "Controleer zichtbare staat en leeftijd van elektra, water, warm water, airconditioning, zwembadinstallatie, septic tank en zonne-energiesysteem. Testen en specialistische keuringen kunnen nodig zijn wanneer documentatie ontbreekt.",
  },
  {
    title: "Energieprestatie versus technische staat",
    text:
      "Een energiecertificaat berekent energieprestatie; het is geen bouwkundige keuring en geen garantie tegen gebreken. Gebruik beide documenten voor verschillende vragen.",
  },
];

const energyUpdates = [
  {
    title: "Certificaat nodig bij verkoop en verhuur",
    text:
      "Bij verkoop van een bestaande woning moet de verkoper een geldig, geregistreerd energiecertificaat beschikbaar stellen en de energielabelinformatie hoort in verkoop- en verhuurpubliciteit te staan.",
  },
  {
    title: "Geldigheid: meestal 10 jaar, label G 5 jaar",
    text:
      "Sinds 3 juni 2021 geregistreerde certificaten zijn normaal tien jaar geldig; een certificaat met classificatie G vijf jaar. Controleer registratie, adres, kadastrale referentie en vervaldatum.",
  },
  {
    title: "Nieuwe regels voor bevoegde deskundigen op 23 juli 2026",
    text:
      "Real Decreto 659/2025 trad op 23 juli 2026 in werking en wijzigt de eisen en registratie rond bevoegde energiedeskundigen. Vraag wie het certificaat heeft opgesteld en of deze persoon correct bevoegd en geregistreerd is.",
  },
  {
    title: "Geen simplistische ‘verkoopverbod’-claim",
    text:
      "De herziene Europese gebouwenrichtlijn legt renovatie- en reductiedoelen voor de nationale woningvoorraad op. Dat is niet hetzelfde als een automatisch algemeen Spaans verbod om iedere woning met label F of G in 2030 te verkopen. Volg de Spaanse omzettingswetgeving en lokale subsidieregels.",
  },
];

const rentalItems = [
  {
    title: "Maximaal 10 aaneengesloten dagen binnen de Valenciaanse VUT-definitie",
    text:
      "De Valenciaanse regeling definieert een vivienda de uso turístico als een volledige woning die tegen betaling voor toeristische doeleinden maximaal tien aaneengesloten dagen aan dezelfde huurder wordt aangeboden. Kamerverhuur valt niet onder deze categorie en is daarin uitdrukkelijk uitgesloten.",
  },
  {
    title: "Gemeentelijke compatibiliteit is essentieel",
    text:
      "Een gunstig gemeentelijk rapport voor toeristisch gebruik, of een wettelijk equivalent, is een kernvoorwaarde. Gemeenten kunnen daarnaast ruimtelijke beperkingen instellen. Een bestaand registratienummer is dus geen vervanging voor actuele gemeentelijke controle.",
  },
  {
    title: "Registratie geldt vijf jaar en overdracht vraagt herbeoordeling",
    text:
      "De Valenciaanse toeristenregistratie geldt in beginsel vijf jaar. Bij eigendomsoverdracht moet de nieuwe eigenaar aan de dan geldende voorwaarden voldoen en een nieuwe verantwoordelijke verklaring met de vereiste gemeentelijke documentatie indienen.",
  },
  {
    title: "Voor nieuwe toeristische activiteit is community-goedkeuring relevant",
    text:
      "Voor het starten van nieuwe toeristische verhuur sinds 3 april 2025 is bij horizontale eigendom voorafgaande uitdrukkelijke goedkeuring van de comunidad vereist, doorgaans met drie vijfde van eigenaars én quota, naast eventuele strengere statutaire verboden.",
  },
];

const realLifeChecks = [
  "Bezoek de straat op een werkdag, in het weekend, overdag en ’s avonds. Geluid en parkeerdruk zijn tijdsafhankelijk.",
  "Controleer winterzon met oriëntatie, hoogteverschillen en omliggende bebouwing; zeezicht zegt niets over zonuren.",
  "Rijd de route naar woning, zorg, winkels en vliegveld buiten het vakantieseizoen en tijdens spitsuren.",
  "Beoordeel helling, trappen, oprit en toegang voor ouder worden, gasten, onderhoudsbedrijven en hulpdiensten.",
  "Vraag naar waterdruk, internetverbinding, stroomcapaciteit en uitvalhistorie; aannames op basis van postcode zijn onvoldoende.",
  "Onderzoek toekomstige bouwpercelen, urbanisatieplannen en infrastructuur die uitzicht, geluid of waarde kunnen veranderen.",
  "Vergelijk community-begrotingen en reservefondsen met de feitelijke staat van gevel, liften, zwembad, wegen en retaining walls.",
  "Toets de woning aan het echte gebruiksscenario: permanent wonen, overwinteren, familiebezoek, verhuur of latere verkoop.",
];

const ongoingCosts = [
  {
    title: "IBI en gemeentelijke heffingen",
    text:
      "IBI is de jaarlijkse lokale vastgoedbelasting en verschilt per gemeente en kadastrale waarde. Daarnaast kan een afval- of andere gemeentelijke heffing gelden.",
  },
  {
    title: "Community, onderhoud en verzekering",
    text:
      "Begroot reguliere cuotas, mogelijke derramas, opstalverzekering, zwembad, tuin, beveiliging, beheer, nutsvoorzieningen en preventief onderhoud.",
  },
  {
    title: "Spaanse niet-residentenbelasting",
    text:
      "Niet-residente eigenaren kunnen bij eigen gebruik of leegstand Spaanse belasting over toegerekend vastgoedinkomen verschuldigd zijn. Bij verhuur gelden aparte aangifte- en inkomstenregels via Modelo 210.",
  },
  {
    title: "Nederlandse aangifte en dubbele-belastingregels",
    text:
      "Een Spaanse tweede woning moet voor een in Nederland wonende eigenaar in beginsel in Box 3 worden aangegeven. Vervolgens moet worden beoordeeld hoe de verdragsregels en voorkoming van dubbele belasting uitwerken in de persoonlijke situatie.",
  },
];

const pitfalls = [
  {
    title: "3%-inhouding bij een niet-residente verkoper",
    text:
      "Koopt u van een fiscaal niet-residente verkoper, dan moet de koper in beginsel 3% van de overeengekomen tegenprestatie inhouden en via Modelo 211 afdragen. Dit is een voorheffing voor de verkoper en bij correcte verrekening geen extra bedrag boven op de koopsom, maar de koper heeft wel de uitvoeringsplicht.",
    source: officialSources.nonResidentSellerWithholding,
  },
  {
    title: "Plusvalía municipal",
    text:
      "Bij een gewone verkoop is de verkoper doorgaans belastingplichtig voor de gemeentelijke grondwaardestijgingsheffing. Is de verkoper een natuurlijke persoon die niet in Spanje woont, dan kan de koper wettelijk als plaatsvervangend belastingplichtige optreden. Laat de akte en afrekening dit risico afdekken.",
    source: officialSources.plusvaliaLaw,
  },
  {
    title: "Arras is geen automatisch ‘standaardcontract’",
    text:
      "Een aanbetaling van bijvoorbeeld 10% komt vaak voor, maar het juridische gevolg hangt af van het contracttype en de tekst. Neem financiering, documentcontrole, vergunningen en oplevervoorwaarden als passende ontbindende of opschortende voorwaarden op vóór betaling.",
  },
  {
    title: "Vastgoedaankoop levert geen Golden Visa meer op",
    text:
      "De Spaanse investeerdersvisumartikelen voor de vastgoedroute zijn met ingang van 3 april 2025 buiten werking gesteld. Koopmotief, verblijfsrecht en fiscale residentie moeten daarom los van elkaar worden beoordeeld.",
    source: officialSources.goldenVisaLaw,
  },
];

const faqItems = [
  {
    question: "Hoeveel extra kosten moet ik rekenen bij een huis in Spanje?",
    answer:
      "Voor de Comunitat Valenciana kan het totaal sterk verschillen per bestaande bouw of nieuwbouw, prijsniveau, referentiewaarde, advocaat, hypotheek en persoonlijke vrijstelling. In de transparante voorbeelden op deze pagina bedragen de bijkomende posten circa 10,72% bij een bestaande woning van €500.000, circa 12,37% bij bestaande bouw van €3 miljoen, circa 13,12% bij reguliere nieuwbouw van €500.000 en circa 12,77% bij reguliere nieuwbouw van €3 miljoen.",
  },
  {
    question: "Hoeveel ITP betaal ik in de Comunitat Valenciana in 2026?",
    answer:
      "Vanaf 1 juni 2026 geldt algemeen 9% bij vastgoed met een belastbare waarde tot en met €1 miljoen en 11% wanneer de waarde hoger is dan €1 miljoen, tenzij een wettelijk verlaagd tarief van toepassing is.",
  },
  {
    question: "Betaal ik bij nieuwbouw ITP?",
    answer:
      "Bij de eerste levering van een reguliere nieuwbouwwoning door de ontwikkelaar betaalt de koper doorgaans 10% IVA in plaats van ITP. Daarnaast is doorgaans AJD verschuldigd: algemeen 1,4% in de Comunitat Valenciana, met mogelijk 0,1% voor een kwalificerende eigen hoofdwoning.",
  },
  {
    question: "Krijgen kopers onder 35 jaar korting op de overdrachtsbelasting?",
    answer:
      "Mogelijk. Voor de eerste eigen hoofdwoning kan 8% gelden boven €180.000 en 6% tot en met €180.000, voor het verworven aandeel en onder wettelijke inkomens- en documentvoorwaarden. Een tweede of vakantiewoning kwalificeert normaal niet.",
  },
  {
    question: "Is de aankoopbegeleiding van Nordic Move Spain gratis?",
    answer:
      "Op deze pagina is de aankoopbegeleidingsfee voor de koper op €0 gezet. Ook het technisch aankooprapport van Nordic Move Spain staat op €0 binnen de beschreven dienstverlening. Onafhankelijke advocaat, notaris, register, belastingen, hypotheek en eventuele specialistische vervolgonderzoeken zijn afzonderlijke kosten.",
  },
  {
    question: "Is een energiecertificaat hetzelfde als een bouwkundig rapport?",
    answer:
      "Nee. Een energiecertificaat beschrijft de berekende energieprestatie en aanbevelingen. Een technisch aankooprapport beoordeelt zichtbare bouwkundige en installatietechnische risico’s. Bij aanwijzingen voor constructieve of verborgen problemen kan aanvullend specialistisch onderzoek nodig zijn.",
  },
  {
    question: "Is de 3%-inhouding bij een niet-residente verkoper een extra aankoopkost?",
    answer:
      "Niet wanneer die correct op de verkoper wordt ingehouden en met de koopsom wordt verrekend. De koper moet het bedrag wel tijdig via Modelo 211 afdragen en bewijs aan de verkoper verstrekken.",
  },
  {
    question: "Kan ik een gekocht appartement automatisch toeristisch verhuren?",
    answer:
      "Nee. Controleer regionale registratie, gemeentelijke compatibiliteit, lokale ruimtelijke regels, de geldigheid en overdraagbaarheid van bestaande documentatie en de statuten en voorafgaande goedkeuring van de comunidad.",
  },
];

const sourceLinks = [
  {
    title: "BOE — Valenciaanse ITP- en AJD-tarieven (Ley 13/1997)",
    href: officialSources.valencianTaxLaw,
  },
  {
    title: "Agència Tributària Valenciana — valor de referencia",
    href: officialSources.referenceValue,
  },
  {
    title: "Agencia Tributaria — wanneer IVA of ITP geldt",
    href: officialSources.vatOrItp,
  },
  {
    title: "Banco de España — verdeling van hypotheekkosten",
    href: officialSources.mortgageCosts,
  },
  {
    title: "Consejo General del Notariado — woning kopen en notariskosten",
    href: officialSources.notaryBuying,
  },
  {
    title: "MITECO — energiecertificaat volgens Real Decreto 390/2021",
    href: officialSources.energyCertificate,
  },
  {
    title: "BOE — Real Decreto 659/2025, in werking 23 juli 2026",
    href: officialSources.energyProfessionals2026,
  },
  {
    title: "EUR-Lex — herziene Europese richtlijn energieprestatie gebouwen",
    href: officialSources.euBuildingsDirective,
  },
  {
    title: "BOE/DOGV — Valenciaanse regels voor toeristische woningen",
    href: officialSources.valencianTouristHomes,
  },
  {
    title: "Generalitat Valenciana — registratie toeristische woning",
    href: officialSources.valencianTouristRegistration,
  },
  {
    title: "BOE — 3/5-goedkeuring comunidad voor nieuwe toeristische verhuur",
    href: officialSources.communityApproval,
  },
  {
    title: "Agencia Tributaria — 3%-inhouding bij niet-residente verkoper",
    href: officialSources.nonResidentSellerWithholding,
  },
  {
    title: "BOE — wettelijke regeling plusvalía municipal",
    href: officialSources.plusvaliaLaw,
  },
  {
    title: "Agencia Tributaria — Spaans vastgoed bij niet-residenten",
    href: officialSources.nonResidentPropertyTax,
  },
  {
    title: "Belastingdienst — tweede woning in Box 3",
    href: officialSources.dutchSecondHome,
  },
  {
    title: "Belastingdienst — buitenlands inkomen en dubbele belasting",
    href: officialSources.dutchForeignIncome,
  },
];

function sumScenarioCosts(lines: CostLine[]) {
  return lines.reduce((total, line) => total + line.amount, 0);
}

function statusClass(status: CostLine["status"]) {
  if (status === "Wettelijk") {
    return "bg-emerald-50 text-emerald-800 ring-emerald-200";
  }

  if (status === "Gratis") {
    return "bg-[#f4ead9] text-[#7c5826] ring-[#d6b987]";
  }

  return "bg-stone-100 text-stone-700 ring-stone-200";
}

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Nordic Move Spain",
      url: SITE_URL,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Nordic Move Spain",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "nl-NL",
    },
    {
      "@type": ["WebPage", "Article"],
      "@id": `${PAGE_URL}/#article`,
      url: PAGE_URL,
      name: "Kosten huis kopen Spanje 2026: compleet overzicht",
      headline: "Wat kost een huis kopen in Spanje in 2026?",
      description:
        "Brongebaseerde gids over ITP, IVA, AJD, advocaat, notaris, register, hypotheek, energie en verhuur in de Comunitat Valenciana.",
      datePublished: PUBLISHED_AT,
      dateModified: REVIEWED_AT,
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "nl-NL",
      about: [
        "Aankoopkosten vastgoed Spanje",
        "ITP Comunitat Valenciana 2026",
        "Nieuwbouw IVA en AJD",
        "Technische en juridische due diligence",
      ],
      citation: Object.values(officialSources),
      mainEntityOfPage: PAGE_URL,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumbs`,
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
          name: "Kosten huis kopen Spanje 2026",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function CostsRentalsRealLifeChecksBeforeBuyingPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
        {/* HERO */}
        <header className="bg-[#1e2a3a] px-5 py-20 text-white sm:px-8 md:py-28">
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
              <span aria-current="page">Aankoopkosten 2026</span>
            </nav>

            <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b77e]">
                  Brongebaseerde kopersgids · Comunitat Valenciana
                </p>

                <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.03] sm:text-6xl md:text-7xl">
                  Wat kost een huis kopen in Spanje in 2026?
                </h1>

                <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/80">
                  Een uitgebreid en controleerbaar overzicht van ITP, IVA, AJD,
                  advocaat, notaris, register, hypotheek, energie-eisen en
                  verhuurregels — met volledige rekenvoorbeelden voor een woning
                  van €500.000 en €3 miljoen.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/65">
                  <span>Door Nordic Move Spain</span>
                  <span aria-hidden="true">•</span>
                  <span>
                    Juridisch en fiscaal brononderzoek gecontroleerd op{" "}
                    <time dateTime={REVIEWED_AT}>23 juli 2026</time>
                  </span>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#rekenvoorbeelden"
                    className="rounded-full bg-[#c8a063] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#b48a4f]"
                  >
                    Bekijk de rekenvoorbeelden
                  </a>
                  <a
                    href={internalLinks.contact}
                    className="rounded-full border border-white/70 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1e2a3a]"
                  >
                    Bespreek uw aankoopbudget
                  </a>
                </div>
              </div>

              <aside className="rounded-[32px] border border-white/15 bg-white/[0.07] p-7 backdrop-blur-sm md:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d9b77e]">
                  De kern in 30 seconden
                </p>
                <dl className="mt-7 space-y-6">
                  <div className="border-b border-white/10 pb-5">
                    <dt className="text-sm text-white/60">Bestaande bouw</dt>
                    <dd className="mt-1 text-2xl font-semibold">9% of 11% ITP</dd>
                  </div>
                  <div className="border-b border-white/10 pb-5">
                    <dt className="text-sm text-white/60">Reguliere nieuwbouw</dt>
                    <dd className="mt-1 text-2xl font-semibold">10% IVA + 1,4% AJD</dd>
                  </div>
                  <div className="border-b border-white/10 pb-5">
                    <dt className="text-sm text-white/60">Nordic Move Spain fee</dt>
                    <dd className="mt-1 text-2xl font-semibold">€0 voor de koper</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-white/60">Technisch aankooprapport</dt>
                    <dd className="mt-1 text-2xl font-semibold">€0 binnen de service</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </header>

        {/* TRUST / METHOD */}
        <section className="px-5 py-20 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a37a3f]">
                Methodiek en betrouwbaarheid
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Geen losse percentages, maar een reproduceerbare begroting.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                De vraag “wat kost een huis in Spanje?” heeft geen verantwoord
                antwoord zonder onderscheid tussen <strong>wettelijke tarieven</strong>,{" "}
                <strong>objectgegevens</strong> en <strong>professionele offertes</strong>.
                Daarom markeert deze gids elke voorbeeldpost als wettelijk,
                rekenaanname of gratis.
              </p>
              <p>
                De belastingtarieven zijn gebaseerd op officiële wet- en
                overheidsbronnen. De bedragen voor advocaat, notaris, register,
                gestoría en documenten zijn expliciete begrotingsaannames. Ze zijn
                bedoeld om scenario’s vergelijkbaar te maken en mogen niet als
                persoonlijke offerte worden gelezen.
              </p>
              <p>
                De bestaande pagina behandelde al aankoopbelasting, jaarlijkse
                lasten, Box 3, verhuur en praktische controles. Deze uitgebreide
                versie brengt die onderwerpen samen in één hiërarchie en voegt een
                controleerbaar kostenmodel, 2026-wetsupdates, bronstatus en
                diepere juridische en technische due diligence toe.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">
            {[
              {
                label: "Wettelijk",
                title: "Exact tarief uit officiële bron",
                text: "Bijvoorbeeld 9% ITP, 11% ITP, 10% IVA of 1,4% AJD.",
              },
              {
                label: "Objectafhankelijk",
                title: "Eerst woningdata controleren",
                text: "Bijvoorbeeld referentiewaarde, community-schuld, vergunningen en hypotheekvoorwaarden.",
              },
              {
                label: "Rekenaanname",
                title: "Transparant, maar geen offerte",
                text: "Bijvoorbeeld advocaat, notaris, register, gestoría en vertaling in de scenario’s.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-[28px] bg-white p-7 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a37a3f]">
                  {item.label}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-[#1e2a3a]">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-stone-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* TABLE OF CONTENTS */}
        <section className="px-5 pb-20 sm:px-8">
          <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-7 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a37a3f]">
              Inhoudsopgave
            </p>
            <nav aria-label="Inhoudsopgave" className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["#tarieven-2026", "Tarieven in 2026"],
                ["#rekenvoorbeelden", "Voorbeelden €500.000 en €3 miljoen"],
                ["#kortingen", "Jongerenkorting en bijzondere tarieven"],
                ["#alle-kosten", "Alle aankoopkosten uitgelegd"],
                ["#gratis-diensten", "Wat Nordic Move Spain gratis doet"],
                ["#due-diligence", "Juridische en technische controle"],
                ["#energie", "Energiecertificaat en 2026-update"],
                ["#verhuur", "Toeristische verhuur"],
                ["#verborgen-risicos", "3%, plusvalía en arras"],
                ["#jaarlijkse-kosten", "Kosten na aankoop"],
                ["#praktische-checks", "Real-life checks"],
                ["#faq", "Veelgestelde vragen"],
              ].map(([href, label], index) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-3 rounded-2xl bg-[#f6f1ea] px-5 py-4 text-sm font-medium text-[#1e2a3a] transition hover:-translate-y-0.5 hover:bg-[#efe5d8]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1e2a3a] text-xs text-white">
                    {index + 1}
                  </span>
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* 2026 RATES */}
        <section id="tarieven-2026" className="scroll-mt-24 bg-[#e9dfd2] px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b642f]">
                Aankoopbelasting Comunitat Valenciana
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                De belangrijkste belastingtarieven vanaf 1 juni 2026.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Deze percentages gelden niet automatisch in elke Spaanse regio.
                De voorbeelden zijn gericht op de Comunitat Valenciana, waaronder
                de Costa Blanca. Bij andere autonome regio’s moet het regionale
                ITP- en AJD-regime opnieuw worden berekend.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {taxRates.map((item) => (
                <article key={item.label} className="rounded-[30px] bg-[#f6f1ea] p-8">
                  <p className="text-sm font-semibold text-stone-600">{item.label}</p>
                  <p className="mt-3 font-serif text-4xl text-[#1e2a3a]">{item.value}</p>
                  <p className="mt-5 leading-relaxed text-stone-700">{item.explanation}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[30px] border border-[#c9aa78] bg-white p-8 md:p-10">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Kritische nuance: belasting over de hoogste relevante waarde
              </h3>
              <p className="mt-5 max-w-5xl text-lg leading-relaxed text-stone-700">
                Voor ITP kan de <em>valor de referencia</em> de minimale fiscale
                grondslag zijn. Ligt de koopprijs of aangegeven tegenprestatie
                hoger, dan wordt die hogere waarde gebruikt. Een koopprijs van
                €500.000 garandeert dus niet dat exact €45.000 ITP verschuldigd is;
                eerst moet de referentiewaarde op de transactiedatum worden
                gecontroleerd.
              </p>
              <a
                href={officialSources.referenceValue}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex font-semibold text-[#8b642f] underline decoration-[#c9aa78] underline-offset-4"
              >
                Bekijk de officiële uitleg over de referentiewaarde
              </a>
            </div>
          </div>
        </section>

        {/* EXAMPLES */}
        <section id="rekenvoorbeelden" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a37a3f]">
                  Volledige scenario’s
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Wat kost €500.000 of €3 miljoen werkelijk?
                </h2>
              </div>
              <div className="text-lg leading-relaxed text-stone-700">
                <p>
                  Elk voorbeeld telt dezelfde soorten professionele kosten mee,
                  zodat bestaande bouw en nieuwbouw eerlijk te vergelijken zijn.
                  Hypotheekkosten worden apart behandeld omdat ze alleen ontstaan
                  bij financiering. Ook renovatie, meubels en koersrisico zijn
                  persoons- en objectafhankelijk en staan daarom niet in het
                  basistotaal.
                </p>
              </div>
            </div>

            <div className="mt-14 space-y-10">
              {costScenarios.map((scenario) => {
                const additionalCosts = sumScenarioCosts(scenario.lines);
                const total = scenario.purchasePrice + additionalCosts;
                const additionalPercentage =
                  (additionalCosts / scenario.purchasePrice) * 100;

                return (
                  <article
                    key={scenario.id}
                    id={scenario.id}
                    className="scroll-mt-24 overflow-hidden rounded-[34px] bg-white shadow-sm"
                  >
                    <div className="grid gap-5 bg-[#1e2a3a] p-7 text-white md:grid-cols-[1fr_auto] md:items-end md:p-10">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9b77e]">
                          {scenario.eyebrow}
                        </p>
                        <h3 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
                          {scenario.title}
                        </h3>
                      </div>
                      <div className="md:text-right">
                        <p className="text-sm text-white/60">Geschat totaal benodigd</p>
                        <p className="mt-1 text-3xl font-semibold md:text-4xl">{euro.format(total)}</p>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[760px] border-collapse text-left">
                        <thead>
                          <tr className="border-b border-stone-200 bg-[#fbf8f3] text-sm text-stone-600">
                            <th scope="col" className="px-6 py-4 font-semibold md:px-10">
                              Post
                            </th>
                            <th scope="col" className="px-6 py-4 font-semibold">
                              Status
                            </th>
                            <th scope="col" className="px-6 py-4 font-semibold">
                              Berekening / basis
                            </th>
                            <th scope="col" className="px-6 py-4 text-right font-semibold md:px-10">
                              Bedrag
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-stone-100">
                            <th scope="row" className="px-6 py-5 font-semibold text-[#1e2a3a] md:px-10">
                              Koopprijs
                            </th>
                            <td className="px-6 py-5">
                              <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700 ring-1 ring-inset ring-stone-200">
                                Objectgegeven
                              </span>
                            </td>
                            <td className="px-6 py-5 text-sm text-stone-600">Uitgangspunt van het scenario</td>
                            <td className="px-6 py-5 text-right font-semibold md:px-10">
                              {euro.format(scenario.purchasePrice)}
                            </td>
                          </tr>
                          {scenario.lines.map((line) => (
                            <tr key={line.label} className="border-b border-stone-100 last:border-b-0">
                              <th scope="row" className="px-6 py-5 font-medium text-[#1e2a3a] md:px-10">
                                {line.label}
                              </th>
                              <td className="px-6 py-5">
                                <span
                                  className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${statusClass(line.status)}`}
                                >
                                  {line.status}
                                </span>
                              </td>
                              <td className="px-6 py-5 text-sm leading-relaxed text-stone-600">
                                {line.basis}
                              </td>
                              <td className="px-6 py-5 text-right font-medium md:px-10">
                                {euro.format(line.amount)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr className="border-t-2 border-[#1e2a3a] bg-[#f6f1ea]">
                            <th scope="row" colSpan={3} className="px-6 py-5 text-lg font-semibold text-[#1e2a3a] md:px-10">
                              Bijkomende kosten ({percent.format(additionalPercentage)}% van de koopprijs)
                            </th>
                            <td className="px-6 py-5 text-right text-lg font-semibold text-[#1e2a3a] md:px-10">
                              {euro.format(additionalCosts)}
                            </td>
                          </tr>
                          <tr className="bg-[#e9dfd2]">
                            <th scope="row" colSpan={3} className="px-6 py-5 text-xl font-bold text-[#1e2a3a] md:px-10">
                              Koopprijs plus begrote aankoopkosten
                            </th>
                            <td className="px-6 py-5 text-right text-xl font-bold text-[#1e2a3a] md:px-10">
                              {euro.format(total)}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>

                    <div className="border-t border-stone-200 px-7 py-6 text-sm leading-relaxed text-stone-600 md:px-10">
                      <strong className="text-stone-800">Aannames en beperking:</strong>{" "}
                      {scenario.note}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* REDUCED RATES */}
        <section id="kortingen" className="scroll-mt-24 bg-[#1e2a3a] px-5 py-24 text-white sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b77e]">
                  Jongeren en bijzondere situaties
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                  Een lager tarief bestaat, maar is nooit alleen een leeftijdsvraag.
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-relaxed text-white/75">
                <p>
                  De relevante wet kijkt naar een combinatie van leeftijd,
                  eerste eigen hoofdwoning, woningwaarde, het aandeel van de koper,
                  inkomensgrenzen, bewijsstukken en openbare akte. Een Nederlander
                  die een tweede woning voor vakantie koopt, kan de korting dus
                  niet simpelweg claimen omdat hij of zij jonger dan 35 is.
                </p>
                <p>
                  Laat vóór ondertekening berekenen welk tarief verdedigbaar is.
                  Verlies van een belastingvoordeel door het later niet naleven
                  van voorwaarden kan leiden tot naheffing en rente.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {reducedRates.map((item) => (
                <article key={item.rate} className="rounded-[28px] border border-white/15 bg-white/5 p-8">
                  <p className="font-serif text-4xl text-[#e0bd82]">{item.rate}</p>
                  <p className="mt-5 text-lg font-semibold">{item.applies}</p>
                  <p className="mt-4 leading-relaxed text-white/70">{item.conditions}</p>
                </article>
              ))}
            </div>

            <a
              href={officialSources.valencianTaxLaw}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex font-semibold text-[#e0bd82] underline decoration-white/30 underline-offset-4"
            >
              Controleer artikel 13 en 14 in de geconsolideerde wet
            </a>
          </div>
        </section>

        {/* ALL COSTS */}
        <section id="alle-kosten" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a37a3f]">
                Van belasting tot sleuteloverdracht
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Alle belangrijke aankoopkosten systematisch uitgelegd.
              </h2>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-2">
              {acquisitionCostItems.map((item) => (
                <article key={item.title} className="rounded-[32px] bg-white p-8 shadow-sm md:p-10">
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">{item.title}</h3>
                  <p className="mt-5 leading-relaxed text-stone-700">{item.text}</p>
                  {item.source && item.sourceLabel ? (
                    <a
                      href={item.source}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex text-sm font-semibold text-[#8b642f] underline decoration-[#c9aa78] underline-offset-4"
                    >
                      {item.sourceLabel}
                    </a>
                  ) : null}
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[30px] bg-[#e9dfd2] p-8 md:p-10">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Hypotheekvoorbeeld: wat komt mogelijk extra bij?</h3>
              <p className="mt-5 max-w-5xl leading-relaxed text-stone-700">
                Voeg bij financiering in ieder geval de taxatie toe, plus een
                eventuele contractuele openingscommissie, bankrekeningkosten,
                verzekeringen die u bewust kiest en mogelijke vertaal- of
                volmachtkosten. De bank hoort vóór ondertekening duidelijk te
                maken welke producten verplicht zijn voor de aangeboden rente en
                welke alleen korting geven.
              </p>
              <a
                href={internalLinks.mortgage}
                className="mt-6 inline-flex font-semibold text-[#1e2a3a] underline decoration-[#a37a3f] underline-offset-4"
              >
                Lees ook de gids over een hypotheek in Spanje
              </a>
            </div>
          </div>
        </section>

        {/* FREE SERVICES */}
        <section id="gratis-diensten" className="scroll-mt-24 bg-[#e9dfd2] px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[36px] bg-[#1e2a3a] p-8 text-white md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b77e]">
                Nordic Move Spain
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                Twee posten in onze begroting zijn €0 voor de koper.
              </h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-[26px] border border-white/15 bg-white/5 p-6">
                  <p className="text-sm text-white/60">Aankoopbegeleidingsfee</p>
                  <p className="mt-2 text-4xl font-semibold">€0</p>
                </div>
                <div className="rounded-[26px] border border-white/15 bg-white/5 p-6">
                  <p className="text-sm text-white/60">Technisch aankooprapport</p>
                  <p className="mt-2 text-4xl font-semibold">€0</p>
                </div>
              </div>
            </div>

            <div className="self-center">
              <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
                Gratis betekent niet dat andere onafhankelijke kosten verdwijnen.
              </h3>
              <div className="mt-7 space-y-5 leading-relaxed text-stone-700">
                <p>
                  Belastingen, een onafhankelijke advocaat, notaris, register,
                  gestoría, hypotheek, specialistische onderzoeken en eventuele
                  vertalingen blijven afzonderlijke posten. Die scheiding is
                  belangrijk: begeleiding, juridische vertegenwoordiging en
                  technische specialistiek hebben elk een eigen rol.
                </p>
                <p>
                  Een technisch aankooprapport is bovendien geen onbeperkte
                  garantie en vervangt geen destructief onderzoek, geotechnisch
                  onderzoek, installatietest of constructeursrapport wanneer
                  signalen daar aanleiding toe geven. De professionele vervolgstap
                  moet proportioneel zijn aan het geconstateerde risico.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={internalLinks.purchaseGuidance}
                  className="rounded-full bg-[#1e2a3a] px-6 py-3 text-sm font-semibold text-white"
                >
                  Bekijk aankoopbegeleiding
                </a>
                <a
                  href={internalLinks.technicalReport}
                  className="rounded-full border border-[#1e2a3a] px-6 py-3 text-sm font-semibold text-[#1e2a3a]"
                >
                  Lees over het technisch rapport
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DUE DILIGENCE */}
        <section id="due-diligence" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a37a3f]">
                  Juridische due diligence
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Een lage koopprijs is geen voordeel wanneer het object juridisch niet klopt.
                </h2>
                <div className="mt-10 space-y-4">
                  {legalDueDiligence.map((item, index) => (
                    <div key={item} className="flex gap-4 rounded-[22px] bg-white p-6 shadow-sm">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1e2a3a] text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <p className="leading-relaxed text-stone-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a37a3f]">
                  Technische due diligence
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Kijk naar mechanismen en bewijs, niet alleen naar zichtbare afwerking.
                </h2>
                <div className="mt-10 grid gap-6">
                  {technicalChecks.map((item) => (
                    <article key={item.title} className="rounded-[28px] bg-[#e9dfd2] p-7">
                      <h3 className="text-xl font-semibold text-[#1e2a3a]">{item.title}</h3>
                      <p className="mt-4 leading-relaxed text-stone-700">{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENERGY */}
        <section id="energie" className="scroll-mt-24 bg-[#1e2a3a] px-5 py-24 text-white sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b77e]">
                Energieprestatie en nieuwe regels
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                Energie in 2026: controleer het certificaat, maar trek geen verkeerde conclusie.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Energieprestatie beïnvloedt comfort, verbruik, renovatiebudget en
                mogelijk toekomstige marktwaarde. Het juridische document en de
                feitelijke bouwkundige staat moeten echter afzonderlijk worden
                beoordeeld.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {energyUpdates.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-white/15 bg-white/5 p-8">
                  <h3 className="font-serif text-2xl leading-tight text-[#e0bd82]">{item.title}</h3>
                  <p className="mt-5 leading-relaxed text-white/75">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={officialSources.energyCertificate}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-semibold text-white"
              >
                Officiële uitleg energiecertificaat
              </a>
              <a
                href={officialSources.energyProfessionals2026}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white"
              >
                Real Decreto 659/2025
              </a>
            </div>
          </div>
        </section>

        {/* RENTALS */}
        <section id="verhuur" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a37a3f]">
                  Toeristische verhuur 2026
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Verhuurpotentie is pas waardevol wanneer deze juridisch overdraagbaar is.
                </h2>
              </div>
              <div className="text-lg leading-relaxed text-stone-700">
                <p>
                  Beoordeel toeristische verhuur niet op basis van de advertentie,
                  omzet van de verkoper of een oud registratienummer. De aankoop
                  kan een nieuwe eigenaar, nieuwe verklaring, actuele
                  gemeentelijke toets en community-goedkeuring vereisen.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-2">
              {rentalItems.map((item) => (
                <article key={item.title} className="rounded-[32px] bg-white p-8 shadow-sm md:p-10">
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">{item.title}</h3>
                  <p className="mt-5 leading-relaxed text-stone-700">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[30px] bg-[#e9dfd2] p-8 md:p-10">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Minimale documentset vóór u ‘verhuurpotentie’ in de prijs meeneemt
              </h3>
              <p className="mt-5 leading-relaxed text-stone-700">
                Vraag het actuele gemeentelijke compatibiliteitsdocument, de
                toeristenregistratie en vervaldatum, de kadastrale referentie,
                vergunning of bewoningsdocument, community-statuten, recente
                notulen, bewijs van vereiste goedkeuring en een schriftelijke
                analyse van wat bij eigendomsoverdracht opnieuw moet worden
                aangevraagd.
              </p>
              <a
                href={internalLinks.touristRental}
                className="mt-6 inline-flex font-semibold text-[#1e2a3a] underline decoration-[#a37a3f] underline-offset-4"
              >
                Lees de uitgebreide gids over vakantieverhuur
              </a>
            </div>
          </div>
        </section>

        {/* HIDDEN RISKS */}
        <section id="verborgen-risicos" className="scroll-mt-24 bg-[#e9dfd2] px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b642f]">
                Vaak verkeerd begrepen
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Vier regels die uw afrekening of contract wezenlijk kunnen veranderen.
              </h2>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-2">
              {pitfalls.map((item) => (
                <article key={item.title} className="rounded-[30px] bg-[#f6f1ea] p-8">
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">{item.title}</h3>
                  <p className="mt-5 leading-relaxed text-stone-700">{item.text}</p>
                  {item.source ? (
                    <a
                      href={item.source}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex text-sm font-semibold text-[#8b642f] underline decoration-[#c9aa78] underline-offset-4"
                    >
                      Open de officiële bron
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ONGOING COSTS */}
        <section id="jaarlijkse-kosten" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a37a3f]">
                  Na de sleuteloverdracht
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Een betaalbare aankoop moet ook betaalbaar blijven.
                </h2>
              </div>
              <div className="text-lg leading-relaxed text-stone-700">
                <p>
                  Vraag vóór aankoop minstens de laatste IBI, afvalheffing,
                  community-begroting, verzekeringsindicatie, onderhoudshistorie
                  en een realistische energie- en waterinschatting op. Maak een
                  normaal jaar én een onderhoudsjaar met grote uitgaven.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {ongoingCosts.map((item) => (
                <article key={item.title} className="rounded-[28px] bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-semibold leading-tight text-[#1e2a3a]">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-stone-600">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[30px] border border-[#c9aa78] bg-[#fbf8f3] p-8 md:p-10">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Voor Nederlandse eigenaren</h3>
              <p className="mt-5 max-w-5xl leading-relaxed text-stone-700">
                Geef de Spaanse tweede woning in beginsel aan in Box 3 volgens de
                Nederlandse waarderingsregels en laat vervolgens beoordelen hoe
                de voorkoming van dubbele belasting uitwerkt. De Spaanse
                niet-residentenaangifte, Nederlandse aangifte en eventuele
                verhuuradministratie zijn drie verschillende werkstromen.
              </p>
              <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
                <a
                  href={officialSources.dutchSecondHome}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#8b642f] underline decoration-[#c9aa78] underline-offset-4"
                >
                  Belastingdienst: tweede woning
                </a>
                <a
                  href={officialSources.nonResidentPropertyTax}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#8b642f] underline decoration-[#c9aa78] underline-offset-4"
                >
                  Agencia Tributaria: niet-residenten
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* REAL-LIFE CHECKS */}
        <section id="praktische-checks" className="scroll-mt-24 bg-[#1e2a3a] px-5 py-24 text-white sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b77e]">
                Real-life checks
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                Meet wat u kunt meten en observeer wat niet in documenten staat.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Juridische en technische controle zijn noodzakelijk, maar dagelijks
                woongenot hangt ook af van tijd, seizoen, mobiliteit en omgeving.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {realLifeChecks.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-[24px] border border-white/15 bg-white/5 p-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c8a063] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="leading-relaxed text-white/80">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={internalLinks.areaMatch}
                className="rounded-full bg-[#c8a063] px-7 py-4 text-sm font-semibold text-white"
              >
                Vraag uw Area Match aan
              </a>
              <a
                href={internalLinks.discoveryTrip}
                className="rounded-full border border-white/60 px-7 py-4 text-sm font-semibold text-white"
              >
                Bekijk de Buyer Discovery Trip
              </a>
              <a
                href={internalLinks.costaBlancaNorth}
                className="rounded-full border border-white/60 px-7 py-4 text-sm font-semibold text-white"
              >
                Ontdek Costa Blanca Noord
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a37a3f]">
                Veelgestelde vragen
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Antwoorden over de totale aankoopkosten in Spanje.
              </h2>
            </div>

            <div className="mt-14 space-y-5">
              {faqItems.map((item) => (
                <details key={item.question} className="group rounded-[26px] bg-white p-7 shadow-sm open:ring-1 open:ring-[#d4b57e]">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-lg font-semibold text-[#1e2a3a] marker:hidden">
                    <span>{item.question}</span>
                    <span aria-hidden="true" className="mt-0.5 text-2xl font-light transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-5 border-t border-stone-200 pt-5 leading-relaxed text-stone-700">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SOURCES */}
        <section id="bronnen" className="bg-[#e9dfd2] px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b642f]">
                  Bronnen en actualiteit
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Officiële bronnen waarop deze gids is gebouwd.
                </h2>
              </div>
              <div className="space-y-5 leading-relaxed text-stone-700">
                <p>
                  Belasting-, energie-, verhuur- en hypotheekregels kunnen wijzigen.
                  Deze pagina is inhoudelijk gecontroleerd op 23 juli 2026. Bij een
                  concrete aankoop moeten de wet, referentiewaarde, gemeentelijke
                  regels en documentatie op de transactiedatum opnieuw worden
                  gecontroleerd.
                </p>
                <p>
                  De pagina biedt algemene informatie en een begrotingsmodel, geen
                  individueel juridisch, fiscaal, technisch of financieel advies.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {sourceLinks.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[22px] bg-white p-6 text-sm font-semibold leading-relaxed text-[#1e2a3a] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  {source.title}
                  <span aria-hidden="true" className="ml-2 text-[#a37a3f]">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* AUTHOR / E-E-A-T */}
        <section className="px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl rounded-[34px] bg-white p-8 shadow-sm md:p-12">
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1e2a3a] font-serif text-2xl text-white">
                NM
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.23em] text-[#a37a3f]">
                  Over de auteur
                </p>
                <h2 className="mt-3 font-serif text-3xl text-[#1e2a3a]">Nordic Move Spain</h2>
                <p className="mt-4 max-w-4xl leading-relaxed text-stone-700">
                  Nordic Move Spain begeleidt internationale kopers bij hun
                  regio- en woningkeuze aan de Costa Blanca Noord. Deze gids is
                  opgesteld als praktische beslisdocumentatie: officiële regels
                  waar mogelijk, expliciete aannames waar tarieven variëren en een
                  duidelijke scheiding tussen begeleiding, advocaat, notaris en
                  technische specialistiek.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-28 sm:px-8">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-9 text-center text-white md:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b77e]">
              Persoonlijke aankoopbegroting
            </p>
            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
              Laat vóór uw bod berekenen wat de woning werkelijk kost.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/75">
              Vergelijk koopprijs, fiscale grondslag, belastingregime, advocaat,
              notaris, register, hypotheek, technische risico’s, jaarlijkse lasten
              en verhuurvoorwaarden in één dossier.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={internalLinks.areaMatch}
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#b48a4f]"
              >
                Start met de Area Match
              </a>
              <a
                href={internalLinks.contact}
                className="rounded-full border border-white px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1e2a3a]"
              >
                Plan een kennismaking
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}