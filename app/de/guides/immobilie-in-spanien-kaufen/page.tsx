import type { Metadata } from "next";

/**
 * Nordic Move Spain — quellenbasierter Käuferleitfaden 2026
 *
 * Vor der Veröffentlichung prüfen:
 * 1. Ob SITE_URL mit der Live-Domain übereinstimmt.
 * 2. Ob die Pfade in internalLinks tatsächlich existieren.
 * 3. Ob die Beschreibung der kostenlosen Leistungen von Nordic Move Spain exakt
 *    zu euren aktuellen Leistungen und Bedingungen passt.
 */

const SITE_URL = "https://www.nordicmovespain.com";
const PAGE_PATH = "/de/kosten-hauskauf-spanien-2026";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PUBLISHED_AT = "2026-07-23";
const REVIEWED_AT = "2026-07-23";

const internalLinks = {
  home: "/de",
  guides: "/de/ratgeber",
  buyingGuide: "/de/haus-kaufen-spanien",
  purchaseGuidance: "/de/kaufbegleitung-spanien",
  newBuild: "/de/neubau-spanien",
  mortgage: "/de/hypothek-spanien",
  technicalReport: "/de/technischer-immobilienbericht-spanien",
  touristRental: "/de/ferienvermietung-spanien",
  costaBlancaNorth: "/de/costa-blanca-nord",
  areaMatch: "/de/area-match",
  discoveryTrip: "/de/buyer-discovery-trip",
  contact: "/de/kontakt",
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
    "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024L1275",
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
  title: "Kosten beim Hauskauf in Spanien 2026: vollständiger Überblick | Nordic Move Spain",
  description:
    "Was kostet der Kauf eines Hauses in Spanien im Jahr 2026? Überblick über ITP, IVA, AJD, Rechtsanwalt, Notar, Grundbuch, Hypothek, Energieanforderungen sowie Beispiele für 500.000 € und 3 Millionen €.",
  applicationName: "Nordic Move Spain",
  authors: [{ name: "Nordic Move Spain", url: SITE_URL }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Immobilien in Spanien",
  keywords: [
    "Kosten Hauskauf Spanien 2026",
    "Kaufnebenkosten Spanien",
    "ITP Valencia 2026",
    "Haus kaufen Costa Blanca",
    "Notarkosten Spanien",
    "Anwaltskosten Immobilienkauf Spanien",
    "Neubau Spanien IVA AJD",
    "Grunderwerbsteuer Comunitat Valenciana",
    "technische Immobilienprüfung Spanien",
    "Nordic Move Spain",
  ],
  alternates: {
    canonical: PAGE_PATH,
    languages: {
      "de-DE": PAGE_PATH,
    },
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: PAGE_PATH,
    siteName: "Nordic Move Spain",
    title: "Was kostet der Kauf eines Hauses in Spanien im Jahr 2026?",
    description:
      "Ein quellenbasierter Überblick über Steuern und weitere Kaufnebenkosten in der Comunitat Valenciana, mit Rechenbeispielen für 500.000 € und 3 Millionen €.",
    publishedTime: PUBLISHED_AT,
    modifiedTime: REVIEWED_AT,
    authors: ["Nordic Move Spain"],
  },
  twitter: {
    card: "summary",
    title: "Kosten beim Hauskauf in Spanien 2026",
    description:
      "ITP, IVA, AJD, Rechtsanwalt, Notar, Grundbuch und Rechenbeispiele für Bestandsimmobilien und Neubauten.",
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

const euro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const percent = new Intl.NumberFormat("de-DE", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 2,
});

type CostLine = {
  label: string;
  amount: number;
  basis: string;
  status: "Gesetzlich" | "Rechenannahme" | "Kostenlos";
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
 * Die nachstehenden professionellen Kosten sind nachvollziehbare Rechenannahmen und keine
 * gesetzlichen Tarife. Sie machen die Beispiele reproduzierbar. Holen Sie für jeden Fall
 * stets Angebote ein.
 */
const costScenarios: CostScenario[] = [
  {
    id: "bestandsimmobilie-500000",
    eyebrow: "Bestandsimmobilie · 500.000 €",
    title: "Beispiel 1: Bestandsimmobilie für 500.000 €",
    purchasePrice: 500_000,
    lines: [
      {
        label: "ITP-Grunderwerbsteuer (9 %)",
        amount: 45_000,
        basis: "9 % × 500.000 €",
        status: "Gesetzlich",
      },
      {
        label: "Unabhängiger Rechtsanwalt (Annahme 1 % + 21 % IVA)",
        amount: 6_050,
        basis: "1,21 % × 500.000 €",
        status: "Rechenannahme",
      },
      {
        label: "Notar und Ausfertigungen der Kaufurkunde",
        amount: 1_000,
        basis: "Budgetansatz; regulierter Tarif, fallabhängig",
        status: "Rechenannahme",
      },
      {
        label: "Eintragung in das Registro de la Propiedad",
        amount: 700,
        basis: "Budgetansatz; regulierter Tarif, fallabhängig",
        status: "Rechenannahme",
      },
      {
        label: "Gestoría / administrative Abwicklung",
        amount: 350,
        basis: "Nur falls in Anspruch genommen",
        status: "Rechenannahme",
      },
      {
        label: "NIE, Vollmacht und/oder vereidigte Übersetzung",
        amount: 500,
        basis: "Praktische Rückstellung; situationsabhängig",
        status: "Rechenannahme",
      },
      {
        label: "Kaufbegleitungsgebühr Nordic Move Spain",
        amount: 0,
        basis: "0 € für den Käufer",
        status: "Kostenlos",
      },
      {
        label: "Technischer Kaufprüfbericht Nordic Move Spain",
        amount: 0,
        basis: "0 € im Rahmen der beschriebenen Dienstleistung",
        status: "Kostenlos",
      },
    ],
    note:
      "Dieses Beispiel geht davon aus, dass die steuerliche Bemessungsgrundlage 500.000 € beträgt und kein ermäßigter ITP-Satz gilt. Hypotheken-, Währungs-, Renovierungs- und Einrichtungskosten sind nicht enthalten.",
  },
  {
    id: "bestandsimmobilie-3000000",
    eyebrow: "Bestandsimmobilie · 3.000.000 €",
    title: "Beispiel 2: Bestandsimmobilie für 3 Millionen €",
    purchasePrice: 3_000_000,
    lines: [
      {
        label: "ITP-Grunderwerbsteuer (11 %)",
        amount: 330_000,
        basis: "11 % × 3.000.000 €",
        status: "Gesetzlich",
      },
      {
        label: "Unabhängiger Rechtsanwalt (Annahme 1 % + 21 % IVA)",
        amount: 36_300,
        basis: "1,21 % × 3.000.000 €",
        status: "Rechenannahme",
      },
      {
        label: "Notar und Ausfertigungen der Kaufurkunde",
        amount: 2_000,
        basis: "Budgetansatz; regulierter Tarif, fallabhängig",
        status: "Rechenannahme",
      },
      {
        label: "Eintragung in das Registro de la Propiedad",
        amount: 1_300,
        basis: "Budgetansatz; regulierter Tarif, fallabhängig",
        status: "Rechenannahme",
      },
      {
        label: "Gestoría / administrative Abwicklung",
        amount: 500,
        basis: "Nur falls in Anspruch genommen",
        status: "Rechenannahme",
      },
      {
        label: "NIE, Vollmacht und/oder vereidigte Übersetzung",
        amount: 900,
        basis: "Praktische Rückstellung; situationsabhängig",
        status: "Rechenannahme",
      },
      {
        label: "Kaufbegleitungsgebühr Nordic Move Spain",
        amount: 0,
        basis: "0 € für den Käufer",
        status: "Kostenlos",
      },
      {
        label: "Technischer Kaufprüfbericht Nordic Move Spain",
        amount: 0,
        basis: "0 € im Rahmen der beschriebenen Dienstleistung",
        status: "Kostenlos",
      },
    ],
    note:
      "Über 1 Million € gilt in der Comunitat Valenciana der allgemeine ITP-Satz von 11 % auf den steuerpflichtigen Wert; nach dieser gesetzlichen Formulierung handelt es sich nicht um einen Stufentarif, der nur auf den darüberliegenden Betrag angewendet wird.",
  },
  {
    id: "neubau-500000",
    eyebrow: "Neubau · 500.000 €",
    title: "Beispiel 3: Neubauimmobilie für 500.000 €",
    purchasePrice: 500_000,
    lines: [
      {
        label: "IVA auf Neubauten (10 %)",
        amount: 50_000,
        basis: "10 % × 500.000 €",
        status: "Gesetzlich",
      },
      {
        label: "Allgemeiner AJD-Satz (1,4 %)",
        amount: 7_000,
        basis: "1,4 % × 500.000 €, ohne IVA",
        status: "Gesetzlich",
      },
      {
        label: "Unabhängiger Rechtsanwalt (Annahme 1 % + 21 % IVA)",
        amount: 6_050,
        basis: "1,21 % × 500.000 €",
        status: "Rechenannahme",
      },
      {
        label: "Notar und Ausfertigungen der Kaufurkunde",
        amount: 1_000,
        basis: "Budgetansatz; regulierter Tarif, fallabhängig",
        status: "Rechenannahme",
      },
      {
        label: "Eintragung in das Registro de la Propiedad",
        amount: 700,
        basis: "Budgetansatz; regulierter Tarif, fallabhängig",
        status: "Rechenannahme",
      },
      {
        label: "Gestoría / administrative Abwicklung",
        amount: 350,
        basis: "Nur falls in Anspruch genommen",
        status: "Rechenannahme",
      },
      {
        label: "NIE, Vollmacht und/oder vereidigte Übersetzung",
        amount: 500,
        basis: "Praktische Rückstellung; situationsabhängig",
        status: "Rechenannahme",
      },
      {
        label: "Kaufbegleitungsgebühr Nordic Move Spain",
        amount: 0,
        basis: "0 € für den Käufer",
        status: "Kostenlos",
      },
      {
        label: "Technischer Kaufprüfbericht Nordic Move Spain",
        amount: 0,
        basis: "0 € im Rahmen der beschriebenen Dienstleistung",
        status: "Kostenlos",
      },
    ],
    note:
      "Bei einer qualifizierenden selbstgenutzten Hauptwohnung kann für die Kaufurkunde ein AJD-Satz von 0,1 % gelten. In diesem Szenario sinkt die AJD bei 500.000 € von 7.000 € auf 500 € und die Gesamtsumme des Beispiels um 6.500 €.",
  },
  {
    id: "neubau-3000000",
    eyebrow: "Neubau · 3.000.000 €",
    title: "Beispiel 4: Neubauimmobilie für 3 Millionen €",
    purchasePrice: 3_000_000,
    lines: [
      {
        label: "IVA auf Neubauten (10 %)",
        amount: 300_000,
        basis: "10 % × 3.000.000 €",
        status: "Gesetzlich",
      },
      {
        label: "Allgemeiner AJD-Satz (1,4 %)",
        amount: 42_000,
        basis: "1,4 % × 3.000.000 €, ohne IVA",
        status: "Gesetzlich",
      },
      {
        label: "Unabhängiger Rechtsanwalt (Annahme 1 % + 21 % IVA)",
        amount: 36_300,
        basis: "1,21 % × 3.000.000 €",
        status: "Rechenannahme",
      },
      {
        label: "Notar und Ausfertigungen der Kaufurkunde",
        amount: 2_000,
        basis: "Budgetansatz; regulierter Tarif, fallabhängig",
        status: "Rechenannahme",
      },
      {
        label: "Eintragung in das Registro de la Propiedad",
        amount: 1_300,
        basis: "Budgetansatz; regulierter Tarif, fallabhängig",
        status: "Rechenannahme",
      },
      {
        label: "Gestoría / administrative Abwicklung",
        amount: 500,
        basis: "Nur falls in Anspruch genommen",
        status: "Rechenannahme",
      },
      {
        label: "NIE, Vollmacht und/oder vereidigte Übersetzung",
        amount: 900,
        basis: "Praktische Rückstellung; situationsabhängig",
        status: "Rechenannahme",
      },
      {
        label: "Kaufbegleitungsgebühr Nordic Move Spain",
        amount: 0,
        basis: "0 € für den Käufer",
        status: "Kostenlos",
      },
      {
        label: "Technischer Kaufprüfbericht Nordic Move Spain",
        amount: 0,
        basis: "0 € im Rahmen der beschriebenen Dienstleistung",
        status: "Kostenlos",
      },
    ],
    note:
      "Bei luxuriösen Neubauten können zusätzliche Positionen entstehen, etwa vertragliche Anschlusskosten, Upgrades, Smart-Home-Technik, Landschaftsarbeiten oder Einrichtung. Nehmen Sie solche Positionen nur auf, wenn sie sich aus den Reservierungs- und Kaufunterlagen ergeben.",
  },
];

const taxRates = [
  {
    label: "Bestandsimmobilie bis einschließlich 1 Million €",
    value: "9 % ITP",
    explanation:
      "Allgemeiner Satz in der Comunitat Valenciana für steuerpflichtige Erwerbe ab dem 1. Juni 2026, sofern kein besonderer Satz gilt.",
  },
  {
    label: "Bestandsimmobilie über 1 Million €",
    value: "11 % ITP",
    explanation:
      "Der Satz von 11 % gilt bei einem Wert von über 1 Million €. Prüfen Sie die steuerliche Bemessungsgrundlage und gegebenenfalls zusammenhängende Käufe.",
  },
  {
    label: "Reguläre Neubauimmobilie",
    value: "10 % IVA",
    explanation:
      "Bei der Erstlieferung durch den Bauträger fallen in der Regel 10 % spanische Mehrwertsteuer (IVA) statt ITP an.",
  },
  {
    label: "Neubauurkunde — allgemein",
    value: "1,4 % AJD",
    explanation:
      "Allgemeiner AJD-Satz in den übrigen Fällen; bei einer qualifizierenden selbstgenutzten Hauptwohnung kann 0,1 % gelten.",
  },
];

const reducedRates = [
  {
    rate: "8 % ITP",
    applies:
      "Erste selbstgenutzte Hauptwohnung für Käufer unter 35 Jahren, wenn der Wert über 180.000 € liegt.",
    conditions:
      "Nur für den vom jüngeren Käufer erworbenen Anteil und unter anderem abhängig von den gesetzlichen Einkommensgrenzen.",
  },
  {
    rate: "6 % ITP",
    applies:
      "Erste selbstgenutzte Hauptwohnung für Käufer unter 35 Jahren, wenn der Wert höchstens 180.000 € beträgt.",
    conditions:
      "Unter anderem sind gesetzliche Einkommensgrenzen und die Beurkundung in einer öffentlichen Urkunde relevant.",
  },
  {
    rate: "4 % ITP",
    applies:
      "Bestimmte qualifizierende Hauptwohnungen über 180.000 €, zum Beispiel für kinderreiche Familien oder Alleinerziehende, bestimmte Behinderungen, Opfer geschlechtsspezifischer Gewalt oder bestimmte geförderte Wohnungen.",
    conditions:
      "Die genaue Kategorie, Einkommensgrenze, Nachweise und der Anteil des Käufers müssen vorab geprüft werden.",
  },
  {
    rate: "3 % ITP",
    applies:
      "Dieselben besonderen Kategorien bei einem Wert bis einschließlich 180.000 €.",
    conditions:
      "Eine Ferien- oder Zweitwohnung erfüllt normalerweise nicht die Voraussetzung einer selbstgenutzten Hauptwohnung.",
  },
];

const acquisitionCostItems = [
  {
    title: "1. ITP oder IVA plus AJD",
    text:
      "Der größte Nebenkostenposten ist fast immer die Erwerbssteuer. Bestandsimmobilien unterliegen in der Regel der ITP; die Erstlieferung eines Neubaus durch einen Unternehmer in der Regel der IVA und zusätzlich der AJD. Die steuerliche Einordnung der Transaktion hat Vorrang vor Marketingbegriffen wie „neu“ oder „renoviert“.",
    source: officialSources.vatOrItp,
    sourceLabel: "Agencia Tributaria: IVA oder ITP",
  },
  {
    title: "2. Steuerpflichtiger Wert und valor de referencia",
    text:
      "Bei der ITP ist nicht automatisch allein der vereinbarte Kaufpreis entscheidend. Besteht ein katasterrechtlicher Referenzwert, dient dieser grundsätzlich als Mindestbemessungsgrundlage. Liegt der Kaufpreis oder die angegebene Gegenleistung höher, wird der höhere Wert verwendet. Prüfen Sie dies vor einem Angebot und nicht erst bei der Steuererklärung.",
    source: officialSources.referenceValue,
    sourceLabel: "ATV: valor de referencia",
  },
  {
    title: "3. Unabhängiger Rechtsanwalt",
    text:
      "Ein Rechtsanwalt prüft unter anderem Eigentum, Belastungen, Pfändungen, Schulden, Genehmigungen, planungsrechtlichen Status, Verträge, Unterlagen der Eigentümergemeinschaft und steuerliche Verpflichtungen. Es gibt keinen einheitlichen gesetzlichen Anwaltstarif für jeden Kauf. Deshalb verwenden die Rechenbeispiele transparent 1 % plus 21 % IVA als Budgetannahme und nicht als festen Marktpreis.",
  },
  {
    title: "4. Notar und Grundbuch",
    text:
      "Notar- und Grundbuchgebühren sind reguliert, der endgültige Betrag hängt jedoch von Preis, Umfang und Komplexität der Urkunde, Ausfertigungen und Registerhandlungen ab. Der Notar ist unabhängig und prüft die Urkunde, ersetzt aber nicht die persönliche Due Diligence durch Ihren eigenen Rechtsanwalt.",
    source: officialSources.notaryBuying,
    sourceLabel: "Consejo General del Notariado",
  },
  {
    title: "5. Gestoría, NIE, Vollmacht und Übersetzung",
    text:
      "Diese Positionen sind nicht in jedem Fall gleich. Eine Gestoría kann die steuerliche und grundbuchliche Abwicklung übernehmen. Zusätzlich können eine NIE-Nummer, notarielle Vollmacht, Apostille, Dolmetscher oder vereidigte Übersetzung erforderlich sein. Klären Sie vorab, wer welche Aufgabe übernimmt, um Doppelarbeit und doppelte Rechnungen zu vermeiden.",
  },
  {
    title: "6. Hypotheken- und Bankkosten",
    text:
      "Bei einer spanischen Hypothek zahlt der Käufer in der Regel die Bewertung und gegebenenfalls eine vereinbarte Eröffnungsgebühr. Für die Hypothekenurkunde trägt die Bank nach der derzeitigen Kostenverteilung üblicherweise Notar-, Grundbuch-, Steuer- und Gestoría-Kosten. Das ist von den Kosten der Kaufurkunde selbst zu unterscheiden.",
    source: officialSources.mortgageCosts,
    sourceLabel: "Banco de España: Hypothekenkosten",
  },
  {
    title: "7. Währungs- und Zahlungskosten",
    text:
      "Wer Vermögen in einer anderen Währung hält, trägt Wechselkursrisiken und möglicherweise Überweisungskosten. Schon eine begrenzte Wechselkursbewegung kann bei 500.000 € oder 3 Millionen € größer sein als Notar- und Grundbuchkosten zusammen. Legen Sie Zahlungszeitpunkt, Wechselkursmarge und Banklimits frühzeitig fest.",
  },
  {
    title: "8. Renovierung, Einrichtung und direkte Rücklagen",
    text:
      "Renovierung und Mobiliar sind keine Erwerbssteuer, gehören aber zum benötigten Kapital. Planen Sie gesonderte Rücklagen für aufgeschobene Instandhaltung, Pool- und Gartenarbeiten, Klimaanlage, Feuchtigkeitsbehandlung, energetische Verbesserungen und mögliche Beiträge zur Eigentümergemeinschaft ein.",
  },
];

const legalDueDiligence = [
  "Nota simple und Eigentumstitel: Stimmt der Verkäufer, bestehen Hypotheken, Pfändungen, Dienstbarkeiten oder Nutzungsrechte?",
  "Registro versus Catastro: Stimmen Flächen, Grenzen, Bebauung, Pool, Nebengebäude und Nutzung überein?",
  "Planungsrechtliche Legalität: Sind Erweiterungen, Terrassen, Garagen, Gästeunterkünfte und Pools genehmigt oder rechtlich regularisierbar?",
  "Bewohnbarkeit und Nutzung: Liegt die erforderliche licencia oder declaración de ocupación vor und passt sie zur beabsichtigten Nutzung?",
  "Eigentümergemeinschaft: Satzung, Protokolle, Zahlungsnachweis, Schulden, Verfahren und angekündigte Sonderumlagen (derramas) prüfen.",
  "Kommunale Abgaben: aktuelle IBI- und Abfallbelege, offene Abgaben und mögliche Erschließungsverpflichtungen prüfen.",
  "Küsten-, ländliche und geschützte Gebiete: Einschränkungen nach Ley de Costas, suelo no urbanizable oder Umweltvorschriften können Nutzung und Umbau begrenzen.",
  "Vertrag und Sicherheiten: Reservierung, arras, Rücktrittsbedingungen, Inventar, Übergabedatum, Mängel und Kostenverteilung genau festhalten.",
];

const technicalChecks = [
  {
    title: "Konstruktion und Rissbildung",
    text:
      "Bewerten Sie Risse nach Muster, Breite, Lage und möglicher Bewegung. Eine visuelle Kaufinspektion weist auf Risiken hin; bei vermuteten Fundament- oder Stabilitätsproblemen ist eine zusätzliche statische Untersuchung durch einen qualifizierten Fachmann erforderlich.",
  },
  {
    title: "Feuchtigkeit, Entwässerung und Küstenklima",
    text:
      "Achten Sie auf aufsteigende Feuchtigkeit, Leckagen, Kapillarwirkung, Kondensation, Salzbelastung, Terrassengefälle, Dachdetails und Entwässerung bei Hanggrundstücken. Ein trockener Besichtigungstag beweist nicht, dass ein Gebäude in Regenperioden trocken bleibt.",
  },
  {
    title: "Installationen und Kapazität",
    text:
      "Prüfen Sie den sichtbaren Zustand und das Alter von Elektrik, Wasser, Warmwasser, Klimaanlage, Pooltechnik, Kläranlage und Solaranlage. Tests und Fachprüfungen können erforderlich sein, wenn Unterlagen fehlen.",
  },
  {
    title: "Energieeffizienz versus technischer Zustand",
    text:
      "Ein Energieausweis berechnet die Energieeffizienz; er ist keine bautechnische Prüfung und keine Garantie gegen Mängel. Nutzen Sie beide Dokumente für unterschiedliche Fragestellungen.",
  },
];

const energyUpdates = [
  {
    title: "Energieausweis bei Verkauf und Vermietung erforderlich",
    text:
      "Beim Verkauf einer Bestandsimmobilie muss der Verkäufer einen gültigen, registrierten Energieausweis bereitstellen; die Angaben zur Energieklasse gehören in Verkaufs- und Vermietungsanzeigen.",
  },
  {
    title: "Gültigkeit: meist 10 Jahre, Energieklasse G 5 Jahre",
    text:
      "Seit dem 3. Juni 2021 registrierte Ausweise sind in der Regel zehn Jahre gültig; ein Ausweis mit der Klasse G fünf Jahre. Prüfen Sie Registrierung, Adresse, Katasterreferenz und Ablaufdatum.",
  },
  {
    title: "Neue Regeln für befugte Fachleute ab 23. Juli 2026",
    text:
      "Real Decreto 659/2025 trat am 23. Juli 2026 in Kraft und ändert die Anforderungen und Registrierung für befugte Energieexperten. Fragen Sie, wer den Ausweis erstellt hat und ob diese Person ordnungsgemäß befugt und registriert ist.",
  },
  {
    title: "Keine vereinfachte Behauptung eines „Verkaufsverbots“",
    text:
      "Die überarbeitete europäische Gebäuderichtlinie legt Renovierungs- und Reduktionsziele für den nationalen Gebäudebestand fest. Das ist nicht dasselbe wie ein automatisches allgemeines spanisches Verbot, jede Immobilie mit Energieklasse F oder G ab 2030 zu verkaufen. Verfolgen Sie die spanische Umsetzungsgesetzgebung und lokale Förderregeln.",
  },
];

const rentalItems = [
  {
    title: "Maximal 10 aufeinanderfolgende Tage innerhalb der valencianischen VUT-Definition",
    text:
      "Die valencianische Regelung definiert eine vivienda de uso turístico als eine vollständige Wohnung, die gegen Entgelt zu touristischen Zwecken für höchstens zehn aufeinanderfolgende Tage demselben Mieter angeboten wird. Die Zimmervermietung fällt nicht unter diese Kategorie und ist ausdrücklich ausgeschlossen.",
  },
  {
    title: "Kommunale Kompatibilität ist entscheidend",
    text:
      "Ein positives kommunales Gutachten zur touristischen Nutzung oder ein gesetzliches Äquivalent ist eine zentrale Voraussetzung. Gemeinden können zusätzlich planungsrechtliche Einschränkungen festlegen. Eine bestehende Registrierungsnummer ersetzt daher keine aktuelle kommunale Prüfung.",
  },
  {
    title: "Registrierung gilt fünf Jahre und Eigentumsübertragung erfordert eine erneute Prüfung",
    text:
      "Die valencianische Tourismusregistrierung gilt grundsätzlich fünf Jahre. Bei Eigentumsübertragung muss der neue Eigentümer die dann geltenden Voraussetzungen erfüllen und eine neue verantwortliche Erklärung mit den erforderlichen kommunalen Unterlagen einreichen.",
  },
  {
    title: "Für neue touristische Nutzung ist die Zustimmung der Eigentümergemeinschaft relevant",
    text:
      "Für die Aufnahme neuer touristischer Vermietung seit dem 3. April 2025 ist bei Wohnungseigentum die vorherige ausdrückliche Zustimmung der comunidad erforderlich, in der Regel mit drei Fünfteln der Eigentümer und der Quoten, zusätzlich zu möglichen strengeren satzungsmäßigen Verboten.",
  },
];

const realLifeChecks = [
  "Besuchen Sie die Straße an einem Werktag, am Wochenende, tagsüber und abends. Lärm und Parkdruck hängen von der Tageszeit ab.",
  "Prüfen Sie die Wintersonne anhand von Ausrichtung, Höhenunterschieden und umliegender Bebauung; Meerblick sagt nichts über Sonnenstunden aus.",
  "Fahren Sie die Strecke zur Immobilie, zu medizinischer Versorgung, Geschäften und Flughafen außerhalb der Ferienzeit und zu Stoßzeiten.",
  "Bewerten Sie Hanglage, Treppen, Zufahrt und Zugang im Hinblick auf das Älterwerden, Gäste, Wartungsfirmen und Rettungsdienste.",
  "Fragen Sie nach Wasserdruck, Internetverbindung, Stromkapazität und Ausfallhistorie; Annahmen allein anhand der Postleitzahl reichen nicht aus.",
  "Prüfen Sie künftige Baugrundstücke, Erschließungspläne und Infrastruktur, die Aussicht, Lärm oder Wert verändern können.",
  "Vergleichen Sie Budgets und Rücklagen der Eigentümergemeinschaft mit dem tatsächlichen Zustand von Fassade, Aufzügen, Pool, Straßen und Stützmauern.",
  "Prüfen Sie die Immobilie anhand des tatsächlichen Nutzungsszenarios: dauerhaftes Wohnen, Überwintern, Familienbesuche, Vermietung oder späterer Verkauf.",
];

const ongoingCosts = [
  {
    title: "IBI und kommunale Abgaben",
    text:
      "Die IBI ist die jährliche lokale Immobiliensteuer und variiert je nach Gemeinde und Katasterwert. Zusätzlich kann eine Abfall- oder andere kommunale Abgabe anfallen.",
  },
  {
    title: "Eigentümergemeinschaft, Instandhaltung und Versicherung",
    text:
      "Planen Sie reguläre cuotas, mögliche Sonderumlagen (derramas), Gebäudeversicherung, Pool, Garten, Sicherheit, Verwaltung, Versorgungsleistungen und vorbeugende Instandhaltung ein.",
  },
  {
    title: "Spanische Steuer für Nichtansässige",
    text:
      "Nichtansässige Eigentümer können bei Eigennutzung oder Leerstand spanische Steuer auf zugerechnete Immobilieneinkünfte schulden. Bei Vermietung gelten gesonderte Erklärungs- und Einkommensregeln über Modelo 210.",
  },
  {
    title: "Niederländische Steuererklärung und Regeln zur Vermeidung der Doppelbesteuerung",
    text:
      "Eine spanische Zweitwohnung muss von einem in den Niederlanden wohnenden Eigentümer grundsätzlich in Box 3 angegeben werden. Anschließend ist zu prüfen, wie die Abkommensregeln und die Vermeidung der Doppelbesteuerung in der persönlichen Situation wirken.",
  },
];

const pitfalls = [
  {
    title: "3-%-Einbehalt bei einem nichtansässigen Verkäufer",
    text:
      "Kaufen Sie von einem steuerlich nichtansässigen Verkäufer, muss der Käufer grundsätzlich 3 % der vereinbarten Gegenleistung einbehalten und über Modelo 211 abführen. Dies ist eine Vorauszahlung für den Verkäufer und bei korrekter Verrechnung kein zusätzlicher Betrag oberhalb des Kaufpreises; der Käufer trägt jedoch die Abwicklungspflicht.",
    source: officialSources.nonResidentSellerWithholding,
  },
  {
    title: "Plusvalía municipal",
    text:
      "Bei einem gewöhnlichen Verkauf ist der Verkäufer in der Regel Steuerschuldner der kommunalen Wertzuwachssteuer auf Grund und Boden. Ist der Verkäufer eine natürliche Person, die nicht in Spanien ansässig ist, kann der Käufer gesetzlich als Ersatzsteuerschuldner auftreten. Lassen Sie dieses Risiko in Urkunde und Abrechnung absichern.",
    source: officialSources.plusvaliaLaw,
  },
  {
    title: "Arras ist nicht automatisch ein „Standardvertrag“",
    text:
      "Eine Anzahlung von beispielsweise 10 % ist häufig, die rechtliche Wirkung hängt jedoch von Vertragsart und Wortlaut ab. Nehmen Sie Finanzierung, Dokumentenprüfung, Genehmigungen und Übergabebedingungen als geeignete auflösende oder aufschiebende Bedingungen vor der Zahlung auf.",
  },
  {
    title: "Ein Immobilienkauf führt nicht mehr zu einem Golden Visa",
    text:
      "Die spanischen Bestimmungen zum Investorenvisum über den Immobilienweg wurden mit Wirkung zum 3. April 2025 außer Kraft gesetzt. Kaufmotiv, Aufenthaltsrecht und steuerliche Ansässigkeit müssen daher getrennt beurteilt werden.",
    source: officialSources.goldenVisaLaw,
  },
];

const faqItems = [
  {
    question: "Mit welchen zusätzlichen Kosten muss ich beim Hauskauf in Spanien rechnen?",
    answer:
      "Für die Comunitat Valenciana kann die Gesamtsumme je nach Bestandsimmobilie oder Neubau, Preisniveau, Referenzwert, Rechtsanwalt, Hypothek und persönlicher Steuerermäßigung stark variieren. In den transparenten Beispielen auf dieser Seite betragen die zusätzlichen Positionen etwa 10,72 % bei einer Bestandsimmobilie für 500.000 €, etwa 12,37 % bei einer Bestandsimmobilie für 3 Millionen €, etwa 13,12 % bei einem regulären Neubau für 500.000 € und etwa 12,77 % bei einem regulären Neubau für 3 Millionen €.",
  },
  {
    question: "Wie viel ITP zahle ich in der Comunitat Valenciana im Jahr 2026?",
    answer:
      "Ab dem 1. Juni 2026 gelten allgemein 9 % für Immobilien mit einer steuerpflichtigen Bemessungsgrundlage bis einschließlich 1 Million € und 11 %, wenn der Wert über 1 Million € liegt, sofern kein gesetzlich ermäßigter Satz anwendbar ist.",
  },
  {
    question: "Zahle ich bei einem Neubau ITP?",
    answer:
      "Bei der Erstlieferung einer regulären Neubauimmobilie durch den Bauträger zahlt der Käufer in der Regel 10 % IVA statt ITP. Zusätzlich fällt in der Regel AJD an: allgemein 1,4 % in der Comunitat Valenciana, möglicherweise 0,1 % für eine qualifizierende selbstgenutzte Hauptwohnung.",
  },
  {
    question: "Erhalten Käufer unter 35 Jahren eine Ermäßigung bei der Grunderwerbsteuer?",
    answer:
      "Möglicherweise. Für die erste selbstgenutzte Hauptwohnung können über 180.000 € 8 % und bis einschließlich 180.000 € 6 % gelten, jeweils für den erworbenen Anteil und unter gesetzlichen Einkommens- und Dokumentationsvoraussetzungen. Eine Zweit- oder Ferienwohnung qualifiziert normalerweise nicht.",
  },
  {
    question: "Ist die Kaufbegleitung von Nordic Move Spain kostenlos?",
    answer:
      "Auf dieser Seite ist die Kaufbegleitungsgebühr für den Käufer mit 0 € angesetzt. Auch der technische Kaufprüfbericht von Nordic Move Spain ist im Rahmen der beschriebenen Dienstleistung mit 0 € angesetzt. Unabhängiger Rechtsanwalt, Notar, Grundbuch, Steuern, Hypothek und gegebenenfalls weiterführende Fachprüfungen sind separate Kosten.",
  },
  {
    question: "Ist ein Energieausweis dasselbe wie ein bautechnischer Bericht?",
    answer:
      "Nein. Ein Energieausweis beschreibt die berechnete Energieeffizienz und Empfehlungen. Ein technischer Kaufprüfbericht beurteilt sichtbare bauliche und installationstechnische Risiken. Bei Hinweisen auf konstruktive oder verdeckte Probleme kann eine zusätzliche fachliche Untersuchung erforderlich sein.",
  },
  {
    question: "Ist der 3-%-Einbehalt bei einem nichtansässigen Verkäufer eine zusätzliche Kaufnebenkost?",
    answer:
      "Nicht, wenn er korrekt beim Verkäufer einbehalten und mit dem Kaufpreis verrechnet wird. Der Käufer muss den Betrag jedoch rechtzeitig über Modelo 211 abführen und dem Verkäufer einen Nachweis aushändigen.",
  },
  {
    question: "Kann ich eine gekaufte Wohnung automatisch touristisch vermieten?",
    answer:
      "Nein. Prüfen Sie regionale Registrierung, kommunale Kompatibilität, lokale Planungsregeln, Gültigkeit und Übertragbarkeit bestehender Unterlagen sowie Satzung und vorherige Zustimmung der comunidad.",
  },
];

const sourceLinks = [
  {
    title: "BOE — valencianische ITP- und AJD-Sätze (Ley 13/1997)",
    href: officialSources.valencianTaxLaw,
  },
  {
    title: "Agència Tributària Valenciana — valor de referencia",
    href: officialSources.referenceValue,
  },
  {
    title: "Agencia Tributaria — wann IVA oder ITP gilt",
    href: officialSources.vatOrItp,
  },
  {
    title: "Banco de España — Verteilung der Hypothekenkosten",
    href: officialSources.mortgageCosts,
  },
  {
    title: "Consejo General del Notariado — Immobilienkauf und Notarkosten",
    href: officialSources.notaryBuying,
  },
  {
    title: "MITECO — Energieausweis nach Real Decreto 390/2021",
    href: officialSources.energyCertificate,
  },
  {
    title: "BOE — Real Decreto 659/2025, in Kraft seit 23. Juli 2026",
    href: officialSources.energyProfessionals2026,
  },
  {
    title: "EUR-Lex — herziene Europese richtlijn energieprestatie gebouwen",
    href: officialSources.euBuildingsDirective,
  },
  {
    title: "BOE/DOGV — valencianische Regeln für touristische Wohnungen",
    href: officialSources.valencianTouristHomes,
  },
  {
    title: "Generalitat Valenciana — Registrierung touristischer Wohnungen",
    href: officialSources.valencianTouristRegistration,
  },
  {
    title: "BOE — 3/5-Zustimmung der comunidad für neue touristische Vermietung",
    href: officialSources.communityApproval,
  },
  {
    title: "Agencia Tributaria — 3-%-Einbehalt bei nichtansässigem Verkäufer",
    href: officialSources.nonResidentSellerWithholding,
  },
  {
    title: "BOE — gesetzliche Regelung zur plusvalía municipal",
    href: officialSources.plusvaliaLaw,
  },
  {
    title: "Agencia Tributaria — spanische Immobilien bei Nichtansässigen",
    href: officialSources.nonResidentPropertyTax,
  },
  {
    title: "Belastingdienst — Zweitwohnung in Box 3",
    href: officialSources.dutchSecondHome,
  },
  {
    title: "Belastingdienst — ausländisches Einkommen und Doppelbesteuerung",
    href: officialSources.dutchForeignIncome,
  },
];

function sumScenarioCosts(lines: CostLine[]) {
  return lines.reduce((total, line) => total + line.amount, 0);
}

function statusClass(status: CostLine["status"]) {
  if (status === "Gesetzlich") {
    return "bg-emerald-50 text-emerald-800 ring-emerald-200";
  }

  if (status === "Kostenlos") {
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
      inLanguage: "de-DE",
    },
    {
      "@type": ["WebPage", "Article"],
      "@id": `${PAGE_URL}/#article`,
      url: PAGE_URL,
      name: "Kosten beim Hauskauf in Spanien 2026: vollständiger Überblick",
      headline: "Was kostet der Kauf eines Hauses in Spanien im Jahr 2026?",
      description:
        "Quellenbasierter Leitfaden zu ITP, IVA, AJD, Rechtsanwalt, Notar, Grundbuch, Hypothek, Energie und Vermietung in der Comunitat Valenciana.",
      datePublished: PUBLISHED_AT,
      dateModified: REVIEWED_AT,
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "de-DE",
      about: [
        "Kaufnebenkosten Immobilien Spanien",
        "ITP Comunitat Valenciana 2026",
        "Neubau IVA und AJD",
        "Technische und rechtliche Due Diligence",
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
          name: "Startseite",
          item: `${SITE_URL}${internalLinks.home}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ratgeber",
          item: `${SITE_URL}${internalLinks.guides}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kosten Hauskauf Spanien 2026",
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
              aria-label="Brotkrümelnavigation"
              className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/65"
            >
              <a href={internalLinks.home} className="transition hover:text-white">
                Startseite
              </a>
              <span aria-hidden="true">/</span>
              <a href={internalLinks.guides} className="transition hover:text-white">
                Ratgeber
              </a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Kaufnebenkosten 2026</span>
            </nav>

            <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b77e]">
                  Quellenbasierter Käuferleitfaden · Comunitat Valenciana
                </p>

                <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.03] sm:text-6xl md:text-7xl">
                  Was kostet der Kauf eines Hauses in Spanien im Jahr 2026?
                </h1>

                <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/80">
                  Ein umfassender und nachvollziehbarer Überblick über ITP, IVA, AJD, Rechtsanwalt, Notar, Grundbuch, Hypothek, Energieanforderungen und Vermietungsregeln — mit vollständigen Rechenbeispielen für eine Immobilie für 500.000 € und 3 Millionen €.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/65">
                  <span>Von Nordic Move Spain</span>
                  <span aria-hidden="true">•</span>
                  <span>
                    Rechtliche und steuerliche Quellenprüfung, Stand{" "}
                    <time dateTime={REVIEWED_AT}>23. Juli 2026</time>
                  </span>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#rechenbeispiele"
                    className="rounded-full bg-[#c8a063] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#b48a4f]"
                  >
                    Rechenbeispiele ansehen
                  </a>
                  <a
                    href={internalLinks.contact}
                    className="rounded-full border border-white/70 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1e2a3a]"
                  >
                    Kaufbudget besprechen
                  </a>
                </div>
              </div>

              <aside className="rounded-[32px] border border-white/15 bg-white/[0.07] p-7 backdrop-blur-sm md:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d9b77e]">
                  Das Wichtigste in 30 Sekunden
                </p>
                <dl className="mt-7 space-y-6">
                  <div className="border-b border-white/10 pb-5">
                    <dt className="text-sm text-white/60">Bestandsimmobilie</dt>
                    <dd className="mt-1 text-2xl font-semibold">9 % oder 11 % ITP</dd>
                  </div>
                  <div className="border-b border-white/10 pb-5">
                    <dt className="text-sm text-white/60">Regulärer Neubau</dt>
                    <dd className="mt-1 text-2xl font-semibold">10 % IVA + 1,4 % AJD</dd>
                  </div>
                  <div className="border-b border-white/10 pb-5">
                    <dt className="text-sm text-white/60">Kaufbegleitungsgebühr Nordic Move Spain</dt>
                    <dd className="mt-1 text-2xl font-semibold">0 € für den Käufer</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-white/60">Technischer Kaufprüfbericht</dt>
                    <dd className="mt-1 text-2xl font-semibold">0 € im Rahmen der Dienstleistung</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </header>

        {/* VERTRAUEN / METHODE */}
        <section className="px-5 py-20 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a37a3f]">
                Methodik und Verlässlichkeit
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Keine losen Prozentangaben, sondern eine reproduzierbare Kalkulation.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                Die Frage „Was kostet ein Haus in Spanien?“ lässt sich nicht verantwortungsvoll beantworten, ohne zwischen <strong>gesetzlichen Sätzen</strong>,{" "}
                <strong>Objektdaten</strong> und <strong>professionellen Angeboten</strong>. Deshalb kennzeichnet dieser Leitfaden jede Beispielposition als gesetzlich, Rechenannahme oder kostenlos.
              </p>
              <p>
                Die Steuersätze basieren auf offiziellen Gesetzen und Behördenquellen. Die Beträge für Rechtsanwalt, Notar, Grundbuch, Gestoría und Dokumente sind ausdrücklich Budgetannahmen. Sie dienen dazu, Szenarien vergleichbar zu machen, und dürfen nicht als persönliches Angebot verstanden werden.
              </p>
              <p>
                Die bestehende Seite behandelte bereits Erwerbssteuern, laufende Kosten, Box 3, Vermietung und praktische Kontrollen. Diese erweiterte Version führt diese Themen in einer Struktur zusammen und ergänzt ein nachvollziehbares Kostenmodell, Gesetzesupdates für 2026, Quellenstatus sowie eine vertiefte rechtliche und technische Due Diligence.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">
            {[
              {
                label: "Gesetzlich",
                title: "Exakter Satz aus offizieller Quelle",
                text: "Zum Beispiel 9 % ITP, 11 % ITP, 10 % IVA oder 1,4 % AJD.",
              },
              {
                label: "Objektabhängig",
                title: "Zuerst Objektdaten prüfen",
                text: "Zum Beispiel Referenzwert, Schulden der Eigentümergemeinschaft, Genehmigungen und Hypothekenbedingungen.",
              },
              {
                label: "Rechenannahme",
                title: "Transparent, aber kein Angebot",
                text: "Zum Beispiel Rechtsanwalt, Notar, Grundbuch, Gestoría und Übersetzung in den Szenarien.",
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

        {/* INHALTSVERZEICHNIS */}
        <section className="px-5 pb-20 sm:px-8">
          <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-7 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a37a3f]">
              Inhaltsverzeichnis
            </p>
            <nav aria-label="Inhaltsverzeichnis" className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["#steuersaetze-2026", "Steuersätze 2026"],
                ["#rechenbeispiele", "Beispiele 500.000 € und 3 Millionen €"],
                ["#ermaessigungen", "Ermäßigungen für junge Käufer und besondere Sätze"],
                ["#alle-kosten", "Alle Kaufnebenkosten erklärt"],
                ["#kostenlose-leistungen", "Was Nordic Move Spain kostenlos anbietet"],
                ["#due-diligence", "Rechtliche und technische Prüfung"],
                ["#energie", "Energieausweis und Update 2026"],
                ["#vermietung", "Touristische Vermietung"],
                ["#versteckte-risiken", "3 %, plusvalía und arras"],
                ["#laufende-kosten", "Kosten nach dem Kauf"],
                ["#praxis-checks", "Praxis-Checks"],
                ["#faq", "Häufig gestellte Fragen"],
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

        {/* STEUERSÄTZE 2026 */}
        <section id="steuersaetze-2026" className="scroll-mt-24 bg-[#e9dfd2] px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b642f]">
                Erwerbssteuern in der Comunitat Valenciana
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Die wichtigsten Steuersätze ab dem 1. Juni 2026.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Diese Prozentsätze gelten nicht automatisch in jeder spanischen Region. Die Beispiele beziehen sich auf die Comunitat Valenciana einschließlich der Costa Blanca. In anderen autonomen Regionen müssen die regionalen ITP- und AJD-Regelungen neu berechnet werden.
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
                Wichtige Nuance: Steuer auf den höchsten relevanten Wert
              </h3>
              <p className="mt-5 max-w-5xl text-lg leading-relaxed text-stone-700">
                Bei der ITP kann der <em>valor de referencia</em> die steuerliche Mindestbemessungsgrundlage sein. Liegt der Kaufpreis oder die angegebene Gegenleistung höher, wird dieser höhere Wert verwendet. Ein Kaufpreis von 500.000 € garantiert daher nicht, dass exakt 45.000 € ITP fällig sind; zunächst muss der Referenzwert am Transaktionstag geprüft werden.
              </p>
              <a
                href={officialSources.referenceValue}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex font-semibold text-[#8b642f] underline decoration-[#c9aa78] underline-offset-4"
              >
                Offizielle Erläuterung zum Referenzwert ansehen
              </a>
            </div>
          </div>
        </section>

        {/* BEISPIELE */}
        <section id="rechenbeispiele" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a37a3f]">
                  Vollständige Szenarien
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Was kosten 500.000 € oder 3 Millionen € tatsächlich?
                </h2>
              </div>
              <div className="text-lg leading-relaxed text-stone-700">
                <p>
                  Jedes Beispiel berücksichtigt dieselben Arten professioneller Kosten, damit Bestandsimmobilien und Neubauten fair vergleichbar sind. Hypothekenkosten werden separat behandelt, da sie nur bei Finanzierung entstehen. Renovierung, Möbel und Wechselkursrisiken hängen ebenfalls von Person und Objekt ab und sind deshalb nicht in der Basissumme enthalten.
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
                        <p className="text-sm text-white/60">Geschätzter Gesamtbedarf</p>
                        <p className="mt-1 text-3xl font-semibold md:text-4xl">{euro.format(total)}</p>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[760px] border-collapse text-left">
                        <thead>
                          <tr className="border-b border-stone-200 bg-[#fbf8f3] text-sm text-stone-600">
                            <th scope="col" className="px-6 py-4 font-semibold md:px-10">
                              Position
                            </th>
                            <th scope="col" className="px-6 py-4 font-semibold">
                              Status
                            </th>
                            <th scope="col" className="px-6 py-4 font-semibold">
                              Berechnung / Grundlage
                            </th>
                            <th scope="col" className="px-6 py-4 text-right font-semibold md:px-10">
                              Betrag
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-stone-100">
                            <th scope="row" className="px-6 py-5 font-semibold text-[#1e2a3a] md:px-10">
                              Kaufpreis
                            </th>
                            <td className="px-6 py-5">
                              <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700 ring-1 ring-inset ring-stone-200">
                                Objektdatum
                              </span>
                            </td>
                            <td className="px-6 py-5 text-sm text-stone-600">Ausgangspunkt des Szenarios</td>
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
                              Kaufnebenkosten ({percent.format(additionalPercentage)} % des Kaufpreises)
                            </th>
                            <td className="px-6 py-5 text-right text-lg font-semibold text-[#1e2a3a] md:px-10">
                              {euro.format(additionalCosts)}
                            </td>
                          </tr>
                          <tr className="bg-[#e9dfd2]">
                            <th scope="row" colSpan={3} className="px-6 py-5 text-xl font-bold text-[#1e2a3a] md:px-10">
                              Kaufpreis plus kalkulierte Kaufnebenkosten
                            </th>
                            <td className="px-6 py-5 text-right text-xl font-bold text-[#1e2a3a] md:px-10">
                              {euro.format(total)}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>

                    <div className="border-t border-stone-200 px-7 py-6 text-sm leading-relaxed text-stone-600 md:px-10">
                      <strong className="text-stone-800">Annahmen und Einschränkung:</strong>{" "}
                      {scenario.note}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* REDUCED RATES */}
        <section id="ermaessigungen" className="scroll-mt-24 bg-[#1e2a3a] px-5 py-24 text-white sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b77e]">
                  Junge Käufer und besondere Situationen
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                  Ein niedrigerer Satz ist möglich, hängt aber nie allein vom Alter ab.
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-relaxed text-white/75">
                <p>
                  Das einschlägige Gesetz betrachtet eine Kombination aus Alter, erster selbstgenutzter Hauptwohnung, Immobilienwert, Anteil des Käufers, Einkommensgrenzen, Nachweisen und öffentlicher Urkunde. Ein Niederländer, der eine Zweitwohnung für Ferienzwecke kauft, kann die Ermäßigung daher nicht allein deshalb beanspruchen, weil er oder sie unter 35 Jahre alt ist.
                </p>
                <p>
                  Lassen Sie vor der Unterzeichnung berechnen, welcher Satz vertretbar ist. Der Verlust eines Steuervorteils durch spätere Nichterfüllung der Voraussetzungen kann zu Nachzahlungen und Zinsen führen.
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
              Artikel 13 und 14 im konsolidierten Gesetz prüfen
            </a>
          </div>
        </section>

        {/* ALLE KOSTEN */}
        <section id="alle-kosten" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a37a3f]">
                Von der Steuer bis zur Schlüsselübergabe
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Alle wichtigen Kaufnebenkosten systematisch erklärt.
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
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Hypothekenbeispiel: Was kann zusätzlich hinzukommen?</h3>
              <p className="mt-5 max-w-5xl leading-relaxed text-stone-700">
                Berücksichtigen Sie bei einer Finanzierung mindestens die Immobilienbewertung sowie eine gegebenenfalls vertraglich vereinbarte Eröffnungsgebühr, Kontokosten, bewusst gewählte Versicherungen und mögliche Übersetzungs- oder Vollmachtskosten. Die Bank sollte vor der Unterzeichnung klar darlegen, welche Produkte für den angebotenen Zinssatz verpflichtend sind und welche lediglich einen Rabatt bringen.
              </p>
              <a
                href={internalLinks.mortgage}
                className="mt-6 inline-flex font-semibold text-[#1e2a3a] underline decoration-[#a37a3f] underline-offset-4"
              >
                Lesen Sie auch den Ratgeber zur Hypothek in Spanien
              </a>
            </div>
          </div>
        </section>

        {/* KOSTENLOSE LEISTUNGEN */}
        <section id="kostenlose-leistungen" className="scroll-mt-24 bg-[#e9dfd2] px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[36px] bg-[#1e2a3a] p-8 text-white md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b77e]">
                Nordic Move Spain
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                Zwei Positionen in unserer Kalkulation betragen für den Käufer 0 €.
              </h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-[26px] border border-white/15 bg-white/5 p-6">
                  <p className="text-sm text-white/60">Kaufbegleitungsgebühr</p>
                  <p className="mt-2 text-4xl font-semibold">€0</p>
                </div>
                <div className="rounded-[26px] border border-white/15 bg-white/5 p-6">
                  <p className="text-sm text-white/60">Technischer Kaufprüfbericht</p>
                  <p className="mt-2 text-4xl font-semibold">€0</p>
                </div>
              </div>
            </div>

            <div className="self-center">
              <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
                Kostenlos bedeutet nicht, dass andere unabhängige Kosten entfallen.
              </h3>
              <div className="mt-7 space-y-5 leading-relaxed text-stone-700">
                <p>
                  Steuern, ein unabhängiger Rechtsanwalt, Notar, Grundbuch, Gestoría, Hypothek, Fachuntersuchungen und mögliche Übersetzungen bleiben separate Positionen. Diese Trennung ist wichtig: Kaufbegleitung, rechtliche Vertretung und technische Fachprüfung haben jeweils eine eigene Rolle.
                </p>
                <p>
                  Ein technischer Kaufprüfbericht ist außerdem keine unbegrenzte Garantie und ersetzt keine zerstörende Prüfung, geotechnische Untersuchung, Anlagenprüfung oder statische Begutachtung, wenn Hinweise dies erforderlich machen. Der professionelle nächste Schritt sollte im Verhältnis zum festgestellten Risiko stehen.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={internalLinks.purchaseGuidance}
                  className="rounded-full bg-[#1e2a3a] px-6 py-3 text-sm font-semibold text-white"
                >
                  Kaufbegleitung ansehen
                </a>
                <a
                  href={internalLinks.technicalReport}
                  className="rounded-full border border-[#1e2a3a] px-6 py-3 text-sm font-semibold text-[#1e2a3a]"
                >
                  Mehr zum technischen Bericht
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
                  Rechtliche Due Diligence
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Ein niedriger Kaufpreis ist kein Vorteil, wenn die Immobilie rechtlich nicht in Ordnung ist.
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
                  Technische Due Diligence
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Achten Sie auf Mechanismen und Nachweise, nicht nur auf sichtbare Oberflächen.
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

        {/* ENERGIE */}
        <section id="energie" className="scroll-mt-24 bg-[#1e2a3a] px-5 py-24 text-white sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b77e]">
                Energieeffizienz und neue Regeln
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                Energie 2026: Prüfen Sie den Ausweis, ziehen Sie aber keine falschen Schlüsse.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Die Energieeffizienz beeinflusst Komfort, Verbrauch, Renovierungsbudget und möglicherweise den künftigen Marktwert. Das rechtliche Dokument und der tatsächliche bauliche Zustand müssen jedoch getrennt beurteilt werden.
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
                Offizielle Erläuterung zum Energieausweis
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

        {/* VERMIETUNG */}
        <section id="vermietung" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a37a3f]">
                  Touristische Vermietung 2026
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Vermietungspotenzial ist nur dann wertvoll, wenn es rechtlich übertragbar ist.
                </h2>
              </div>
              <div className="text-lg leading-relaxed text-stone-700">
                <p>
                  Bewerten Sie touristische Vermietung nicht anhand der Anzeige, des Umsatzes des Verkäufers oder einer alten Registrierungsnummer. Der Kauf kann einen neuen Eigentümer, eine neue Erklärung, eine aktuelle kommunale Prüfung und die Zustimmung der Eigentümergemeinschaft erfordern.
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
                Mindestens erforderliche Unterlagen, bevor Sie „Vermietungspotenzial“ in den Preis einrechnen
              </h3>
              <p className="mt-5 leading-relaxed text-stone-700">
                Fordern Sie das aktuelle kommunale Kompatibilitätsdokument, die Tourismusregistrierung samt Ablaufdatum, die Katasterreferenz, Genehmigung oder Bewohnbarkeitsunterlagen, die Satzung der Eigentümergemeinschaft, aktuelle Protokolle, den Nachweis der erforderlichen Zustimmung sowie eine schriftliche Analyse dazu an, was bei Eigentumsübertragung neu beantragt werden muss.
              </p>
              <a
                href={internalLinks.touristRental}
                className="mt-6 inline-flex font-semibold text-[#1e2a3a] underline decoration-[#a37a3f] underline-offset-4"
              >
                Ausführlichen Ratgeber zur Ferienvermietung lesen
              </a>
            </div>
          </div>
        </section>

        {/* VERSTECKTE RISIKEN */}
        <section id="versteckte-risiken" className="scroll-mt-24 bg-[#e9dfd2] px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b642f]">
                Häufig missverstanden
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Vier Regeln, die Ihre Abrechnung oder Ihren Vertrag wesentlich verändern können.
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
                      Offizielle Quelle öffnen
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LAUFENDE KOSTEN */}
        <section id="laufende-kosten" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a37a3f]">
                  Nach der Schlüsselübergabe
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Ein bezahlbarer Kauf muss auch langfristig bezahlbar bleiben.
                </h2>
              </div>
              <div className="text-lg leading-relaxed text-stone-700">
                <p>
                  Fordern Sie vor dem Kauf mindestens den letzten IBI-Bescheid, die Abfallabgabe, das Budget der Eigentümergemeinschaft, eine Versicherungsindikation, die Instandhaltungshistorie sowie eine realistische Schätzung für Energie und Wasser an. Erstellen Sie ein normales Jahresbudget und zusätzlich ein Instandhaltungsjahr mit größeren Ausgaben.
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
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Für niederländische Eigentümer</h3>
              <p className="mt-5 max-w-5xl leading-relaxed text-stone-700">
                Geben Sie die spanische Zweitwohnung grundsätzlich nach den niederländischen Bewertungsregeln in Box 3 an und lassen Sie anschließend prüfen, wie die Vermeidung der Doppelbesteuerung wirkt. Die spanische Nichtresidentenerklärung, die niederländische Steuererklärung und eine mögliche Vermietungsverwaltung sind drei unterschiedliche Arbeitsstränge.
              </p>
              <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
                <a
                  href={officialSources.dutchSecondHome}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#8b642f] underline decoration-[#c9aa78] underline-offset-4"
                >
                  Belastingdienst: Zweitwohnung
                </a>
                <a
                  href={officialSources.nonResidentPropertyTax}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#8b642f] underline decoration-[#c9aa78] underline-offset-4"
                >
                  Agencia Tributaria: Nichtansässige
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PRAXIS-CHECKS */}
        <section id="praxis-checks" className="scroll-mt-24 bg-[#1e2a3a] px-5 py-24 text-white sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b77e]">
                Praxis-Checks
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                Messen Sie, was messbar ist, und beobachten Sie, was nicht in Dokumenten steht.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Rechtliche und technische Prüfung sind notwendig, doch die tägliche Wohnqualität hängt auch von Zeit, Jahreszeit, Mobilität und Umgebung ab.
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
                Area Match anfragen
              </a>
              <a
                href={internalLinks.discoveryTrip}
                className="rounded-full border border-white/60 px-7 py-4 text-sm font-semibold text-white"
              >
                Buyer Discovery Trip ansehen
              </a>
              <a
                href={internalLinks.costaBlancaNorth}
                className="rounded-full border border-white/60 px-7 py-4 text-sm font-semibold text-white"
              >
                Costa Blanca Nord entdecken
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a37a3f]">
                Häufig gestellte Fragen
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Antworten zu den gesamten Kaufnebenkosten in Spanien.
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

        {/* QUELLEN */}
        <section id="quellen" className="bg-[#e9dfd2] px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b642f]">
                  Quellen und Aktualität
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Offizielle Quellen, auf denen dieser Leitfaden basiert.
                </h2>
              </div>
              <div className="space-y-5 leading-relaxed text-stone-700">
                <p>
                  Steuer-, Energie-, Vermietungs- und Hypothekenregeln können sich ändern. Diese Seite wurde inhaltlich am 23. Juli 2026 geprüft. Bei einem konkreten Kauf müssen Gesetzeslage, Referenzwert, kommunale Regeln und Dokumentation am Transaktionstag erneut geprüft werden.
                </p>
                <p>
                  Diese Seite bietet allgemeine Informationen und ein Kalkulationsmodell, jedoch keine individuelle rechtliche, steuerliche, technische oder finanzielle Beratung.
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

        {/* AUTOR / E-E-A-T */}
        <section className="px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl rounded-[34px] bg-white p-8 shadow-sm md:p-12">
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1e2a3a] font-serif text-2xl text-white">
                NM
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.23em] text-[#a37a3f]">
                  Über den Autor
                </p>
                <h2 className="mt-3 font-serif text-3xl text-[#1e2a3a]">Nordic Move Spain</h2>
                <p className="mt-4 max-w-4xl leading-relaxed text-stone-700">
                  Nordic Move Spain begleitet internationale Käufer bei der Wahl von Region und Immobilie an der nördlichen Costa Blanca. Dieser Leitfaden wurde als praktische Entscheidungsgrundlage erstellt: offizielle Regeln, wo möglich, ausdrückliche Annahmen, wo Tarife variieren, und eine klare Trennung zwischen Kaufbegleitung, Rechtsanwalt, Notar und technischer Fachprüfung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-28 sm:px-8">
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-9 text-center text-white md:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9b77e]">
              Persönliche Kaufkalkulation
            </p>
            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
              Lassen Sie vor Ihrem Angebot berechnen, was die Immobilie tatsächlich kostet.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/75">
              Vergleichen Sie Kaufpreis, steuerliche Bemessungsgrundlage, Steuerregime, Rechtsanwalt, Notar, Grundbuch, Hypothek, technische Risiken, laufende Kosten und Vermietungsbedingungen in einem Dossier.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={internalLinks.areaMatch}
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#b48a4f]"
              >
                Mit dem Area Match starten
              </a>
              <a
                href={internalLinks.contact}
                className="rounded-full border border-white px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1e2a3a]"
              >
                Kennenlerngespräch planen
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}