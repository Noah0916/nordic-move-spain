import type { Metadata } from "next";
import Link from "next/link";

/**
 * Nordic Move Spain — wonen in Spanje na aankoop van een huis (2026)
 *
 * Voorgestelde plaatsing:
 * app/nl/guides/wonen-in-spanje-na-huis-kopen/page.tsx
 *
 * Onderzoeksopzet:
 * - Verblijfsrecht: officiële informatie van de Spaanse overheid, Ministerio del Interior en Your Europe.
 * - Fiscale woonplaats: Agencia Tributaria en het belastingverdrag Nederland–Spanje.
 * - Nederlandse emigratieformaliteiten en zorg: NederlandWereldwijd, Rijksoverheid en het CAK.
 *
 * Laat individuele dossiers altijd beoordelen door een bevoegde fiscalist, jurist of zorginstantie.
 */

const SITE_URL = "https://www.nordicmovespain.com";
const PAGE_PATH = "/nl/guides/wonen-in-spanje-na-huis-kopen";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PUBLISHED_AT = "2026-07-23";
const REVIEWED_AT = "2026-07-23";
const REVIEWED_DISPLAY = "23 juli 2026";

const internalLinks = {
  home: "/nl",
  guides: "/nl/guides",
  livingCosts: "/nl/guides/kosten-levensonderhoud-in-spanje",
  relocationAssessment: "/nl/relocation-assessment",
  contact: "/nl/contact",
} as const;

const officialSources = {
  shortStaySpain:
    "https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/estancia.html",
  residenceConditions:
    "https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/obtencion-residencia/info-general",
  residenceRegistration:
    "https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/obtencion-residencia/inscribirte-residente",
  permanentResidence:
    "https://administracion.gob.es/pag_Home/es/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/obtencion-residencia/residencia-permanente.html",
  euResidenceRights:
    "https://europa.eu/youreurope/citizens/residence/residence-rights/index_nl.htm",
  euPensioners:
    "https://europa.eu/youreurope/citizens/residence/residence-rights/pensioners/index_nl.htm",
  nie:
    "https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/ciudadanos-de-la-union-europea/numero-de-Identidad-de-extranjero-nie/",
  registrationCertificate:
    "https://interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/ciudadanos-de-la-union-europea/expedicion-y-vigencia-del-certificado-de-registro-y-de-la-tarjeta-de-residencia/",
  taxResidence:
    "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c02-irpf-cuestiones-generales/sujecion-irpf-aspectos-personales/residencia-habitual-territorio-espanol.html",
  dualResidence:
    "https://sede.agenciatributaria.gob.es/Sede/no-residentes/residencia-personas-fisicas-juridicas/residencia-dos-estados.html",
  worldwideIncome:
    "https://sede.agenciatributaria.gob.es/Sede/ciudadanos-familias-personas-discapacidad/residentes-rentas-procedentes-extranjero/obtencion-rentas-extranjeras-reglas-generales.html",
  taxTreaty:
    "https://wetten.overheid.nl/BWBV0003462",
  dutchDeregistration:
    "https://www.nederlandwereldwijd.nl/brp/wanneer-uitschrijven-gemeente",
  dutchMovingChecklist:
    "https://www.nederlandwereldwijd.nl/checklist-verhuizen-buitenland-emigreren",
  healthcareAbroad:
    "https://www.netherlandsworldwide.nl/health-insurance-abroad/arrange-insurance",
  cakHealthcare:
    "https://www.hetcak.nl/zorgverzekering-buitenland/pensioen-uitkering/",
  drivingLicence:
    "https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/vehiculos/permiso-conduccion/renovacion-sustitucion",
  euDirective:
    "https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32004L0038",
  spanishRoyalDecree:
    "https://www.boe.es/buscar/act.php?id=BOE-A-2007-4184",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Wonen in Spanje na huis kopen: regels voor Nederlanders 2026",
  description:
    "Mag u in Spanje wonen als u een huis koopt? Complete gids voor Nederlanders over residencia, NIE, padrón, 183 dagen, belasting, zorgverzekering en uitschrijven uit Nederland.",
  applicationName: "Nordic Move Spain",
  authors: [{ name: "Nordic Move Spain", url: SITE_URL }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Emigreren en wonen in Spanje",
  keywords: [
    "wonen in Spanje na huis kopen",
    "emigreren naar Spanje",
    "residencia Spanje Nederlanders",
    "NIE nummer Spanje",
    "padrón Spanje",
    "183 dagen regel Spanje",
    "belasting wonen Spanje",
    "zorgverzekering Spanje Nederlanders",
    "uitschrijven Nederland emigreren Spanje",
    "overwinteren Spanje regels",
    "huis kopen Spanje permanent wonen",
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
    title: "Wonen in Spanje na het kopen van een huis",
    description:
      "Het verschil tussen een NIE, padrón, residencia en fiscale residentie — met een stappenplan voor Nederlandse huiseigenaren in Spanje.",
    publishedTime: PUBLISHED_AT,
    modifiedTime: REVIEWED_AT,
    authors: ["Nordic Move Spain"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wonen in Spanje na huis kopen: regels 2026",
    description:
      "Residencia, NIE, 183-dagenregel, zorgverzekering en Nederlandse uitschrijving helder uitgelegd.",
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

type ResidenceSituation = {
  title: string;
  rule: string;
  evidence: string[];
  attention: string;
};

const residenceSituations: ResidenceSituation[] = [
  {
    title: "Werknemer in Spanje",
    rule:
      "U kunt zich voor verblijf langer dan drie maanden registreren wanneer u in Spanje in loondienst werkt.",
    evidence: [
      "Geldig Nederlands paspoort of identiteitsbewijs",
      "Arbeidscontract, werkgeversverklaring of bewijs van inschrijving in het Spaanse socialezekerheidsstelsel",
      "Inschrijving op het woonadres wanneer de bevoegde instantie dit vraagt",
    ],
    attention:
      "Werkt u deels voor een Nederlandse werkgever, laat dan vooraf bepalen in welk land sociale premies en loonbelasting verschuldigd zijn.",
  },
  {
    title: "Zelfstandige of ondernemer",
    rule:
      "Zelfstandigen kunnen zich registreren met bewijs dat zij in Spanje werkelijk als zelfstandige actief zijn.",
    evidence: [
      "Inschrijving als autónomo of andere officiële registratie",
      "Bewijs van economische activiteit",
      "Documentatie over sociale zekerheid en belastingregistratie",
    ],
    attention:
      "Een Nederlandse bv, online bedrijf of managementfunctie kan naast persoonlijke belasting ook ondernemings- en vaste-inrichtingsvragen oproepen.",
  },
  {
    title: "Gepensioneerd of economisch niet-actief",
    rule:
      "U moet voldoende bestaansmiddelen én een volledige publieke of private ziektekostendekking voor Spanje aantonen.",
    evidence: [
      "Pensioenoverzichten, bankafschriften of ander bewijs van middelen",
      "S1-document wanneer u via Nederland verdragsgerechtigd bent, of een passende volledige zorgverzekering",
      "Geldig identiteitsbewijs en het vereiste aanvraagformulier",
    ],
    attention:
      "De autoriteiten beoordelen het totaalbeeld. Er bestaat niet één universeel nettobedrag dat voor ieder huishouden en iedere aanvraag identiek werkt.",
  },
  {
    title: "Student",
    rule:
      "Studenten tonen inschrijving bij een erkende onderwijsinstelling, volledige zorgdekking en voldoende middelen aan.",
    evidence: [
      "Bewijs van inschrijving bij de onderwijsinstelling",
      "Zorgverzekering die de vereiste risico’s in Spanje dekt",
      "Verklaring of bewijs van voldoende bestaansmiddelen",
    ],
    attention:
      "Gaat u naast uw studie werken, controleer dan of uw zorg- en socialezekerheidspositie verandert.",
  },
];

type DefinitionRow = {
  term: string;
  meaning: string;
  provesResidence: string;
  practicalUse: string;
};

const definitionRows: DefinitionRow[] = [
  {
    term: "NIE",
    meaning:
      "Een persoonlijk en uniek identificatienummer voor buitenlanders die om economische, professionele, sociale of andere redenen met Spanje te maken hebben.",
    provesResidence: "Nee. Het nummer alleen bewijst geen verblijfsrecht en geen fiscale woonplaats.",
    practicalUse:
      "Aankoop, belastingaangiften, bankzaken, contracten, notariële akten en administratieve procedures.",
  },
  {
    term: "Padrón / empadronamiento",
    meaning:
      "Inschrijving in het gemeentelijke bevolkingsregister op het adres waar u gewoonlijk woont.",
    provesResidence:
      "Het ondersteunt het bewijs van feitelijk wonen, maar bepaalt niet zelfstandig uw fiscale status of EU-verblijfsrecht.",
    practicalUse:
      "Lokale administratie, sommige zorg- en verblijfsprocedures, gemeentelijke diensten en verkiezingsregistratie.",
  },
  {
    term: "Certificado de Registro de Ciudadano de la Unión",
    meaning:
      "Het registratiecertificaat voor EU-burgers die langer dan drie maanden in Spanje verblijven en aan de voorwaarden voldoen.",
    provesResidence:
      "Ja, voor de administratieve registratie als EU-burger. Het is niet hetzelfde als een fiscale woonplaatsverklaring.",
    practicalUse:
      "Bewijs van inschrijving in het Registro Central de Extranjeros; bevat onder meer uw NIE, adres en registratiedatum.",
  },
  {
    term: "Fiscale residentie",
    meaning:
      "De status die bepaalt in welk land u als inwoner voor de inkomstenbelasting wordt behandeld.",
    provesResidence:
      "Wordt bepaald door belastingwetgeving en eventueel het belastingverdrag, niet door één los document.",
    practicalUse:
      "Aangifte van wereldinkomen, toepassing van het belastingverdrag en verdeling van heffingsrechten.",
  },
];

type TimelineStep = {
  number: string;
  title: string;
  text: string;
  documents?: string[];
};

const timelineSteps: TimelineStep[] = [
  {
    number: "01",
    title: "Bepaal eerst uw echte verblijfsplan",
    text:
      "Maak onderscheid tussen vakanties, overwinteren, meer dan drie maanden aaneengesloten verblijven en werkelijk emigreren. Noteer ook hoeveel dagen u per kalenderjaar in Spanje verwacht te zijn, waar uw partner woont en vanuit welk land u werkt of pensioen ontvangt.",
  },
  {
    number: "02",
    title: "Regel een bruikbaar woonadres en schrijf u lokaal in",
    text:
      "Voor registratie als inwoner vraagt de Spaanse overheid om inschrijving bij de gemeente: het padrón. De exacte bewijsstukken verschillen per gemeente en woonsituatie.",
    documents: [
      "Koopakte of huurcontract",
      "Geldig identiteitsbewijs",
      "Eventueel recente nutsrekening of toestemming van de hoofdbewoner",
    ],
  },
  {
    number: "03",
    title: "Verzamel bewijs passend bij uw situatie",
    text:
      "Een werknemer, zelfstandige, pensionado en student tonen niet dezelfde bewijsstukken. Verzamel daarom geen standaardmap zonder eerst te bepalen op welke rechtsgrond u zich registreert.",
  },
  {
    number: "04",
    title: "Vraag persoonlijk de EU-registratie aan",
    text:
      "De aanvraag gebeurt persoonlijk bij de Oficina de Extranjeros of de bevoegde Policía Nacional. U gebruikt doorgaans formulier EX-18, maakt een afspraak en betaalt de toepasselijke tasa via model 790, code 012.",
  },
  {
    number: "05",
    title: "Regel zorgverzekering en sociale zekerheid correct",
    text:
      "Wie in Spanje werkt valt meestal onder het Spaanse systeem. Gepensioneerden met een Nederlandse wettelijke pensioen- of uitkeringssituatie kunnen onder voorwaarden via het CAK en een S1-document worden verzekerd. Andere niet-actieven hebben mogelijk een volledige private verzekering nodig.",
  },
  {
    number: "06",
    title: "Laat uw fiscale woonplaats vóór de verhuizing analyseren",
    text:
      "Kijk verder dan alleen het aantal dagen. Spanje beoordeelt ook het centrum van economische belangen en kent een weerlegbaar gezinsvermoeden. Bij mogelijke dubbele woonplaats bepaalt het belastingverdrag via opeenvolgende criteria welk land verdragsinwoner is.",
  },
  {
    number: "07",
    title: "Regel de Nederlandse uitschrijving wanneer dat moet",
    text:
      "Verblijft u in een periode van één jaar meer dan acht maanden buiten Nederland, dan moet u zich uitschrijven bij uw Nederlandse gemeente. Die acht maanden hoeven niet aaneengesloten te zijn en het aanhouden van een Nederlandse woning verandert de registratieregel niet.",
  },
  {
    number: "08",
    title: "Werk uw administratie na aankomst af",
    text:
      "Denk aan uw buitenlandse adres in de RNI, DigiD en Berichtenbox, Spaanse bank- en belastingregistratie, rijbewijs, auto, testament, verzekeringen en de adressen bij pensioenfondsen en andere instanties.",
  },
];

type ExampleCase = {
  title: string;
  facts: string;
  residence: string;
  tax: string;
  dutchAdministration: string;
  warning: string;
};

const exampleCases: ExampleCase[] = [
  {
    title: "Voorbeeld A — vijf maanden overwinteren",
    facts:
      "Een Nederlands stel verblijft van november tot en met maart in de eigen woning aan de Costa Blanca en werkt niet in Spanje.",
    residence:
      "Omdat het verblijf langer dan drie maanden duurt, kan de Spaanse registratieplicht voor EU-burgers van toepassing zijn. Het bezit van de woning vervangt deze registratie niet.",
    tax:
      "Vijf maanden betekent niet automatisch dat het stel Spaans fiscaal resident is. Wel moeten de dagentelling, sporadische afwezigheden, economische belangen en gezinssituatie worden beoordeeld.",
    dutchAdministration:
      "Als het totale verblijf buiten Nederland in een periode van één jaar niet boven acht maanden uitkomt, ontstaat op basis van die registratieregel niet automatisch een Nederlandse uitschrijfplicht.",
    warning:
      "Een verblijf van vijf maanden mag niet simpelweg worden behandeld alsof de Britse 90/180-dagenregel voor Nederlanders geldt.",
  },
  {
    title: "Voorbeeld B — acht tot tien maanden per jaar in Spanje",
    facts:
      "Een gepensioneerd stel woont het grootste deel van het jaar in Spanje en houdt een appartement in Nederland aan.",
    residence:
      "Registratie als EU-inwoner, padrón en structurele zorgdekking horen bij deze situatie.",
    tax:
      "Bij meer dan 183 dagen in het kalenderjaar ligt Spaanse fiscale residentie voor de hand, maar ook pensioenartikelen in het belastingverdrag moeten worden toegepast.",
    dutchAdministration:
      "Bij meer dan acht maanden buiten Nederland in één jaar moet het stel zich normaal gesproken uitschrijven uit de Nederlandse gemeente, ook als de Nederlandse woning blijft bestaan.",
    warning:
      "Een Nederlandse BRP-inschrijving of Nederlandse woning verhindert niet dat Spanje iemand fiscaal resident kan vinden.",
  },
  {
    title: "Voorbeeld C — vier maanden remote werken vanuit Spanje",
    facts:
      "Een werknemer van een Nederlandse onderneming werkt vier maanden vanuit de Spaanse woning.",
    residence:
      "Het verblijf passeert de grens van drie maanden. De verblijfsregistratie en het bewijs van de arbeidspositie moeten worden bekeken.",
    tax:
      "Vier maanden leidt niet vanzelf tot Spaanse fiscale residentie, maar loonbelasting, werkgeversverplichtingen en de plaats waar het werk feitelijk wordt verricht kunnen wel gevolgen hebben.",
    dutchAdministration:
      "Uitschrijving uit Nederland hangt onder meer af van de totale verblijfsduur buiten Nederland, niet alleen van deze vier maanden.",
    warning:
      "Werk niet structureel vanuit Spanje op basis van alleen toestemming van uw leidinggevende; laat belasting en sociale zekerheid vooraf beoordelen.",
  },
];

const commonMistakes = [
  {
    title: "Een NIE verwarren met residencia",
    text:
      "Een NIE is een identificatienummer. U kunt een NIE hebben omdat u een woning koopt, zonder als inwoner geregistreerd of fiscaal resident te zijn.",
  },
  {
    title: "De drie-maandengrens verwarren met 183 dagen",
    text:
      "Drie maanden gaat over het administratieve verblijfsrecht van EU-burgers. Meer dan 183 dagen is één van de Spaanse fiscale criteria. Het zijn verschillende rechtsgebieden.",
  },
  {
    title: "Denken dat de 90/180-regel voor Nederlanders geldt",
    text:
      "De bekende Schengenlimiet is vooral relevant voor niet-EU-onderdanen. Nederlandse staatsburgers hebben EU-vrijverkeersrechten, maar moeten bij langer verblijf wel aan registratievoorwaarden voldoen.",
  },
  {
    title: "Alleen dagen tellen voor belasting",
    text:
      "Spanje kijkt ook naar het centrum van economische belangen. Bovendien kunnen sporadische afwezigheden in de Spaanse dagentelling meetellen wanneer geen andere fiscale residentie wordt bewezen.",
  },
  {
    title: "Een EHIC gebruiken als permanente zorgverzekering",
    text:
      "De Europese zorgpas is bedoeld voor medisch noodzakelijke zorg tijdens tijdelijk verblijf. Zij is niet automatisch de structurele volledige dekking die voor langdurige vestiging vereist is.",
  },
  {
    title: "In Nederland ingeschreven blijven om belasting te sturen",
    text:
      "Gemeentelijke registratie is belangrijk, maar bepaalt niet zelfstandig uw fiscale woonplaats. Feiten, wetgeving en het belastingverdrag zijn doorslaggevend.",
  },
];

const faqItems = [
  {
    question: "Mag ik als Nederlander permanent in Spanje wonen als ik een huis koop?",
    answer:
      "Als Nederlander bent u EU-burger en kunt u onder het Europese vrij verkeer in Spanje wonen. Uw recht komt niet door de woningkoop. Voor een verblijf langer dan drie maanden moet u zich registreren en aantonen dat u werkt, zelfstandige bent, studeert of voldoende middelen en volledige zorgdekking heeft.",
  },
  {
    question: "Geldt de 90/180-dagenregel voor Nederlanders met een huis in Spanje?",
    answer:
      "Niet op dezelfde manier als voor Britse of andere niet-EU-burgers. Nederlandse staatsburgers vallen onder de EU-vrijverkeersregels. Tot drie maanden volstaat in beginsel een geldig identiteitsbewijs; bij langer verblijf geldt een registratieplicht en moeten de verblijfsvoorwaarden worden aangetoond.",
  },
  {
    question: "Is een NIE hetzelfde als residencia?",
    answer:
      "Nee. Het NIE is uw Spaanse identificatienummer. Het Certificado de Registro de Ciudadano de la Unión bewijst dat u als EU-burger in het centrale vreemdelingenregister bent ingeschreven. Fiscale residentie is weer een aparte beoordeling.",
  },
  {
    question: "Wanneer word ik fiscaal inwoner van Spanje?",
    answer:
      "Spanje kan u fiscaal resident behandelen wanneer u meer dan 183 dagen in het kalenderjaar in Spanje verblijft, of wanneer het belangrijkste centrum van uw activiteiten of economische belangen in Spanje ligt. Er bestaat daarnaast een weerlegbaar vermoeden rond de gewone woonplaats van echtgenoot en minderjarige kinderen. Bij dubbele woonplaats wordt het belastingverdrag Nederland–Spanje toegepast.",
  },
  {
    question: "Moet ik mij uitschrijven uit Nederland als ik in Spanje ga wonen?",
    answer:
      "Verblijft u binnen een periode van één jaar meer dan acht maanden buiten Nederland, dan moet u zich uitschrijven bij uw Nederlandse gemeente. De maanden hoeven niet aaneengesloten te zijn en het maakt niet uit of u een woning in Nederland behoudt.",
  },
  {
    question: "Kan ik mijn Nederlandse zorgverzekering houden?",
    answer:
      "Dat hangt af van uw werk-, pensioen- en uitkeringssituatie. Wie in Spanje werkt valt doorgaans onder het Spaanse stelsel. Sommige Nederlandse gepensioneerden en uitkeringsgerechtigden regelen zorg via het CAK en een S1-document. Laat uw verzekeringspositie vooraf officieel beoordelen.",
  },
  {
    question: "Heb ik een Spaans visum nodig om te emigreren?",
    answer:
      "Een Nederlandse staatsburger heeft als EU-burger geen regulier immigratievisum nodig om in Spanje te wonen. Wel gelden de registratievoorwaarden voor verblijf langer dan drie maanden. Niet-EU-gezinsleden kunnen een afzonderlijke verblijfskaart nodig hebben.",
  },
  {
    question: "Wanneer krijg ik permanent verblijfsrecht in Spanje?",
    answer:
      "EU-burgers verkrijgen in beginsel na vijf jaar onafgebroken legaal verblijf het recht op permanente residentie. Bepaalde tijdelijke afwezigheden doorbreken de continuïteit niet, maar langdurige afwezigheid kan gevolgen hebben.",
  },
];

const sourceList = [
  {
    title: "Spaanse overheid — verblijf tot drie maanden",
    href: officialSources.shortStaySpain,
    note: "Identiteitsdocument en geen meldplicht voor korte verblijven van EU-burgers.",
  },
  {
    title: "Spaanse overheid — voorwaarden verblijf langer dan drie maanden",
    href: officialSources.residenceConditions,
    note: "Werknemer, zelfstandige, voldoende middelen en zorgdekking.",
  },
  {
    title: "Spaanse overheid — inschrijving als EU-resident",
    href: officialSources.residenceRegistration,
    note: "Persoonlijke aanvraag, bevoegde instantie en termijn van drie maanden.",
  },
  {
    title: "Ministerio del Interior — NIE",
    href: officialSources.nie,
    note: "Officiële definitie en aanvraaggronden van het identificatienummer.",
  },
  {
    title: "Agencia Tributaria — Spaanse fiscale residentie",
    href: officialSources.taxResidence,
    note: "183 dagen, economische belangen en gezinsvermoeden.",
  },
  {
    title: "Agencia Tributaria — dubbele fiscale woonplaats",
    href: officialSources.dualResidence,
    note: "Opeenvolgende verdragscriteria bij residentie in twee staten.",
  },
  {
    title: "Belastingverdrag Nederland–Spanje",
    href: officialSources.taxTreaty,
    note: "Geldende overeenkomst over inkomen en vermogen.",
  },
  {
    title: "NederlandWereldwijd — uitschrijven uit de BRP",
    href: officialSources.dutchDeregistration,
    note: "Meer dan acht maanden buiten Nederland in één jaar.",
  },
  {
    title: "NederlandWereldwijd — zorgverzekering in het buitenland",
    href: officialSources.healthcareAbroad,
    note: "Zorgdekking afhankelijk van persoonlijke werk- en inkomenssituatie.",
  },
  {
    title: "CAK — wonen in het buitenland met pensioen of uitkering",
    href: officialSources.cakHealthcare,
    note: "Verdragszorg en het S1-document voor wie aan de voorwaarden voldoet.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Wonen in Spanje na het kopen van een huis: residencia, NIE en belasting voor Nederlanders",
  description:
    "Uitgebreide gids over verblijfsrecht, EU-registratie, fiscale woonplaats, zorgverzekering en Nederlandse emigratieformaliteiten.",
  inLanguage: "nl-NL",
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
    "Wonen in Spanje",
    "Emigreren naar Spanje",
    "EU-verblijfsrecht",
    "Fiscale residentie",
    "NIE",
    "Zorgverzekering in Spanje",
  ],
  citation: sourceList.map((source) => source.href),
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
      name: "Wonen in Spanje na huis kopen",
      item: PAGE_URL,
    },
  ],
};

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c8a063]/15 text-sm font-semibold text-[#9b743d]"
    >
      ✓
    </span>
  );
}

function ArrowLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 font-medium text-[#1e2a3a] underline decoration-[#c8a063] decoration-2 underline-offset-4 transition hover:text-[#9b743d]"
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export default function LivingInSpainAfterBuyingPropertyPage() {
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

      <section className="bg-[#1e2a3a] px-6 py-24 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Broodkruimelnavigatie"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/65"
          >
            <Link href={internalLinks.home} className="transition hover:text-white">
              Startpagina
            </Link>
            <span aria-hidden="true">/</span>
            <Link href={internalLinks.guides} className="transition hover:text-white">
              Gidsen
            </Link>
            <span aria-hidden="true">/</span>
            <span>Wonen in Spanje</span>
          </nav>

          <div className="grid items-end gap-14 lg:grid-cols-[1fr_0.52fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#c8a063]">
                Gids voor Nederlandse huiseigenaren · 2026
              </p>

              <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.03] md:text-7xl">
                Wonen in Spanje na het kopen van een huis: residencia, NIE en belasting uitgelegd.
              </h1>

              <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/80">
                Een Spaanse woning geeft u niet automatisch een nieuwe fiscale of administratieve woonplaats.
                Als Nederlander heeft u wél Europese verblijfsrechten. De kern is weten wanneer u zich moet
                registreren, waar u verzekerd bent en wanneer Spanje u als fiscaal inwoner kan behandelen.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={internalLinks.relocationAssessment}
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#b48a4f]"
                >
                  Start de Relocation Assessment
                </Link>
                <a
                  href="#stappenplan"
                  className="rounded-full border border-white/70 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1e2a3a]"
                >
                  Bekijk het stappenplan
                </a>
              </div>
            </div>

            <aside className="rounded-[32px] border border-white/15 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">Direct antwoord</p>
              <p className="mt-5 font-serif text-3xl leading-tight">
                Voor Nederlanders geldt niet dezelfde 90/180-dagenregel als voor Britse kopers.
              </p>
              <p className="mt-5 leading-relaxed text-white/75">
                Tot drie maanden volstaat in beginsel een geldig paspoort of identiteitsbewijs. Blijft u langer,
                dan moet u zich als EU-burger registreren en aan de verblijfsvoorwaarden voldoen.
              </p>
              <div className="mt-8 border-t border-white/15 pt-6 text-sm leading-relaxed text-white/60">
                Geschreven door Nordic Move Spain · inhoud gecontroleerd op {REVIEWED_DISPLAY}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white px-6 py-10 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-[24px] bg-[#f6f1ea] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">Verblijfsrecht</p>
            <p className="mt-3 font-serif text-2xl text-[#1e2a3a]">3 maanden</p>
            <p className="mt-2 leading-relaxed text-stone-600">
              Daarna moet een EU-burger die in Spanje blijft wonen zich in beginsel registreren.
            </p>
          </div>
          <div className="rounded-[24px] bg-[#f6f1ea] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">Fiscale analyse</p>
            <p className="mt-3 font-serif text-2xl text-[#1e2a3a]">183 dagen</p>
            <p className="mt-2 leading-relaxed text-stone-600">
              Een belangrijk Spaans criterium, maar niet het enige criterium voor fiscale woonplaats.
            </p>
          </div>
          <div className="rounded-[24px] bg-[#f6f1ea] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">Nederlandse BRP</p>
            <p className="mt-3 font-serif text-2xl text-[#1e2a3a]">Meer dan 8 maanden</p>
            <p className="mt-2 leading-relaxed text-stone-600">
              Dan moet u zich binnen een jaarperiode normaal uitschrijven bij uw Nederlandse gemeente.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.68fr_1.32fr]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">Inhoud</p>
            <nav aria-label="Inhoudsopgave" className="mt-6 rounded-[28px] bg-white p-7 shadow-sm">
              {[
                ["#kernregel", "1. Geeft een huis recht om te wonen?"],
                ["#regels", "2. Drie maanden, 183 dagen en acht maanden"],
                ["#situaties", "3. Voorwaarden per persoonlijke situatie"],
                ["#begrippen", "4. NIE, padrón en residencia"],
                ["#stappenplan", "5. Praktisch stappenplan"],
                ["#belasting", "6. Fiscale residentie"],
                ["#zorg", "7. Zorg en sociale zekerheid"],
                ["#voorbeelden", "8. Drie praktijksituaties"],
                ["#fouten", "9. Veelgemaakte fouten"],
                ["#faq", "10. Veelgestelde vragen"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="block border-b border-stone-100 py-3 text-sm leading-relaxed text-stone-600 transition last:border-0 hover:text-[#9b743d]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <article className="min-w-0">
            <section id="kernregel" className="scroll-mt-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">De kernregel</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Een woning kopen en in Spanje mogen wonen zijn twee verschillende zaken.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-stone-700">
                De koopakte bewijst dat u eigenaar bent. Zij maakt u niet automatisch administratief inwoner,
                fiscaal inwoner of deelnemer aan het Spaanse zorgstelsel. Als Nederlander ontleent u uw recht om
                naar Spanje te verhuizen aan het Europese vrije verkeer, niet aan de prijs of waarde van uw woning.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Dat onderscheid is essentieel. Iemand kan een vakantiewoning en een NIE hebben, maar in Nederland
                blijven wonen en in Spanje als niet-resident belastingplichtig zijn. Een ander kan hetzelfde huis
                bezitten, het grootste deel van het jaar in Spanje wonen, zich als EU-burger registreren en in Spanje
                over het wereldinkomen aangifte moeten doen.
              </p>

              <div className="mt-9 rounded-[30px] border-l-4 border-[#c8a063] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">Vier systemen die u apart moet beoordelen</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Verblijfsrecht als EU-burger",
                    "Gemeentelijke inschrijving op het padrón",
                    "Fiscale residentie volgens wet en verdrag",
                    "Zorgverzekering en sociale zekerheid",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl bg-[#f6f1ea] p-4">
                      <CheckIcon />
                      <p className="leading-relaxed text-stone-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="regels" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">Drie verschillende termijnen</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                De drie-maandengrens, 183-dagenregel en Nederlandse achtmaandengrens mogen niet door elkaar lopen.
              </h2>

              <div className="mt-10 space-y-6">
                <div className="rounded-[30px] bg-[#1e2a3a] p-8 text-white md:p-10">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">1 · EU-verblijfsrecht</p>
                  <h3 className="mt-4 font-serif text-3xl">Tot drie maanden versus langer dan drie maanden</h3>
                  <p className="mt-5 leading-relaxed text-white/78">
                    Voor een verblijf korter dan drie maanden is voor een Nederlandse EU-burger in beginsel een
                    geldig paspoort of identiteitsbewijs voldoende. Spanje verlangt voor zo’n kort verblijf geen
                    melding. Blijft u langer, dan moet u zich binnen drie maanden na binnenkomst persoonlijk laten
                    inschrijven in het Registro Central de Extranjeros en aantonen op welke grond u verblijft.
                  </p>
                </div>

                <div className="rounded-[30px] bg-white p-8 shadow-sm md:p-10">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#9b743d]">2 · Spaanse belasting</p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">Meer dan 183 dagen is belangrijk, maar niet alles</h3>
                  <p className="mt-5 leading-relaxed text-stone-700">
                    Spanje kan u als fiscaal resident behandelen wanneer u meer dan 183 dagen tijdens het kalenderjaar
                    in Spanje verblijft. Sporadische afwezigheden kunnen meetellen, tenzij u fiscale residentie in een
                    ander land aantoont. Ook het centrum van uw activiteiten of economische belangen kan Spaanse
                    residentie opleveren. Daarnaast bestaat een weerlegbaar vermoeden wanneer uw niet-gescheiden
                    echtgenoot en afhankelijke minderjarige kinderen gewoonlijk in Spanje wonen.
                  </p>
                </div>

                <div className="rounded-[30px] bg-[#e9dfd2] p-8 md:p-10">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#9b743d]">3 · Nederlandse registratie</p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">Meer dan acht maanden buiten Nederland</h3>
                  <p className="mt-5 leading-relaxed text-stone-700">
                    Verblijft u in een periode van één jaar meer dan acht maanden buiten Nederland, dan moet u zich
                    uitschrijven bij uw Nederlandse gemeente. De acht maanden hoeven niet aaneengesloten te zijn.
                    Ook het aanhouden van uw Nederlandse woning verandert deze BRP-regel niet. Na uitschrijving blijven
                    uw gegevens en BSN via de Registratie Niet-Ingezetenen beschikbaar.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[28px] border border-amber-300 bg-amber-50 p-7">
                <p className="font-semibold text-amber-950">Belangrijk voor overwinteraars</p>
                <p className="mt-3 leading-relaxed text-amber-900">
                  Vijf maanden in Spanje kan een Spaanse verblijfsregistratie vereisen, zonder dat u door het
                  aantal dagen alleen al Spaans fiscaal resident wordt of zich uit Nederland moet uitschrijven.
                  De uitkomst verschilt dus per rechtsgebied.
                </p>
              </div>
            </section>

            <section id="situaties" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">Wie bent u in juridisch opzicht?</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                De bewijsstukken voor residencia hangen af van uw werk-, studie- of inkomenssituatie.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-stone-700">
                De Spaanse overheid erkent meerdere gronden voor verblijf langer dan drie maanden. Een huiseigenaar
                hoeft dus niet per se te werken, maar een economisch niet-actieve eigenaar moet wél voldoende middelen
                en volledige zorgdekking aantonen.
              </p>

              <div className="mt-10 grid gap-7">
                {residenceSituations.map((situation) => (
                  <article key={situation.title} className="rounded-[30px] bg-white p-8 shadow-sm md:p-10">
                    <h3 className="font-serif text-3xl text-[#1e2a3a]">{situation.title}</h3>
                    <p className="mt-5 text-lg leading-relaxed text-stone-700">{situation.rule}</p>
                    <div className="mt-6 grid gap-3">
                      {situation.evidence.map((item) => (
                        <div key={item} className="flex gap-3">
                          <CheckIcon />
                          <p className="leading-relaxed text-stone-600">{item}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-7 rounded-2xl bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-700">
                      <strong>Aandachtspunt:</strong> {situation.attention}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section id="begrippen" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">Begrippen die vaak worden verward</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                NIE, padrón, residencia en fiscale woonplaats betekenen niet hetzelfde.
              </h2>

              <div className="mt-10 overflow-x-auto rounded-[30px] bg-white shadow-sm">
                <table className="min-w-[900px] w-full border-collapse text-left">
                  <thead className="bg-[#1e2a3a] text-white">
                    <tr>
                      <th className="px-6 py-5 text-sm uppercase tracking-[0.16em]">Begrip</th>
                      <th className="px-6 py-5 text-sm uppercase tracking-[0.16em]">Wat is het?</th>
                      <th className="px-6 py-5 text-sm uppercase tracking-[0.16em]">Bewijst woonplaats?</th>
                      <th className="px-6 py-5 text-sm uppercase tracking-[0.16em]">Waarvoor gebruikt?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {definitionRows.map((row) => (
                      <tr key={row.term} className="border-b border-stone-100 align-top last:border-0">
                        <th className="px-6 py-6 font-serif text-2xl font-normal text-[#1e2a3a]">{row.term}</th>
                        <td className="px-6 py-6 leading-relaxed text-stone-600">{row.meaning}</td>
                        <td className="px-6 py-6 leading-relaxed text-stone-600">{row.provesResidence}</td>
                        <td className="px-6 py-6 leading-relaxed text-stone-600">{row.practicalUse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-[28px] bg-[#e9dfd2] p-7">
                  <h3 className="font-serif text-2xl text-[#1e2a3a]">Wat staat op het groene EU-certificaat?</h3>
                  <p className="mt-4 leading-relaxed text-stone-700">
                    De Spaanse overheid vermeldt onder andere naam, nationaliteit, adres, NIE en registratiedatum.
                    Het certificaat wordt volgens de officiële procedure direct bij de registratie afgegeven.
                  </p>
                </div>
                <div className="rounded-[28px] bg-[#1e2a3a] p-7 text-white">
                  <h3 className="font-serif text-2xl">Geen foto-identiteitskaart</h3>
                  <p className="mt-4 leading-relaxed text-white/75">
                    Het EU-registratiecertificaat vervangt uw Nederlandse paspoort of identiteitskaart niet. Bewaar
                    en gebruik uw geldige Nederlandse identiteitsdocument naast het Spaanse registratiebewijs.
                  </p>
                </div>
              </div>
            </section>

            <section id="stappenplan" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">Van plan naar correcte registratie</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Stappenplan voor Nederlanders die werkelijk in Spanje gaan wonen.
              </h2>

              <div className="mt-12 space-y-6">
                {timelineSteps.map((step) => (
                  <article
                    key={step.number}
                    className="grid gap-5 rounded-[30px] bg-white p-7 shadow-sm md:grid-cols-[100px_1fr] md:p-9"
                  >
                    <div className="font-serif text-5xl text-[#c8a063]">{step.number}</div>
                    <div>
                      <h3 className="font-serif text-3xl text-[#1e2a3a]">{step.title}</h3>
                      <p className="mt-4 leading-relaxed text-stone-650 text-stone-700">{step.text}</p>
                      {step.documents ? (
                        <div className="mt-5 grid gap-2 sm:grid-cols-3">
                          {step.documents.map((document) => (
                            <p key={document} className="rounded-2xl bg-[#f6f1ea] p-4 text-sm leading-relaxed text-stone-700">
                              {document}
                            </p>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="belasting" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">Fiscale woonplaats</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Fiscale residentie volgt uit feiten, wetgeving en het belastingverdrag — niet uit uw voorkeur.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-stone-700">
                Wie fiscaal resident is in Spanje, valt in beginsel onder de Spaanse inkomstenbelasting over het
                wereldinkomen. Dat kan Nederlandse pensioenen, loon, rente, beleggingen, ondernemingsinkomen en
                buitenlandse vermogensbestanddelen raken, telkens met toepassing van het belastingverdrag en de
                Spaanse aangifte- en informatieverplichtingen.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  {
                    number: "01",
                    title: "Duurzaam tehuis",
                    text: "Bij dubbele residentie kijkt het verdrag eerst waar u een duurzaam tehuis tot uw beschikking heeft.",
                  },
                  {
                    number: "02",
                    title: "Levensbelangen",
                    text: "Heeft u in beide landen een woning, dan volgt het land waarmee uw persoonlijke en economische relaties het nauwst zijn.",
                  },
                  {
                    number: "03",
                    title: "Gewoonlijk verblijf en nationaliteit",
                    text: "Blijft de uitkomst onduidelijk, dan volgen gewoonlijk verblijf, nationaliteit en uiteindelijk overleg tussen autoriteiten.",
                  },
                ].map((item) => (
                  <div key={item.number} className="rounded-[28px] bg-[#e9dfd2] p-7">
                    <p className="font-serif text-4xl text-[#9b743d]">{item.number}</p>
                    <h3 className="mt-4 font-serif text-2xl text-[#1e2a3a]">{item.title}</h3>
                    <p className="mt-4 leading-relaxed text-stone-700">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[30px] bg-[#1e2a3a] p-8 text-white md:p-10">
                <h3 className="font-serif text-3xl">Een kalenderjaar kent in Spanje geen split-year als hoofdregel</h3>
                <p className="mt-5 leading-relaxed text-white/78">
                  De Spaanse belastingdienst vermeldt dat een natuurlijke persoon voor de Spaanse inkomstenbelasting
                  gedurende het gehele kalenderjaar resident of niet-resident is. Een verhuizing halverwege het jaar
                  vraagt daarom extra aandacht voor de jaarstatus, verdragspositie en aangiften in beide landen.
                </p>
              </div>
            </section>

            <section id="zorg" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">Zorg en sociale zekerheid</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                De juiste zorgverzekering hangt vooral af van waar u werkt en waar uw wettelijke pensioen vandaan komt.
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-stone-700">
                Een huis, padrón of NIE geeft op zichzelf geen recht op volledige Spaanse publieke zorg. De verzekeringsroute
                volgt uit Europese coördinatieregels en uw persoonlijke status. Regel dit vóór de feitelijke verhuizing,
                omdat een verkeerde verzekering kan leiden tot ongedekte zorgkosten of terugwerkende correcties.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-[30px] bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">U werkt in Spanje</p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">Meestal Spaanse sociale zekerheid</h3>
                  <p className="mt-5 leading-relaxed text-stone-700">
                    Werknemers en zelfstandigen die in Spanje verzekerd zijn, verkrijgen zorgrechten doorgaans via
                    het Spaanse socialezekerheidsstelsel. Bij detachering of werk in meerdere landen kan een andere
                    uitkomst gelden en kan een A1-verklaring relevant zijn.
                  </p>
                </div>
                <div className="rounded-[30px] bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">U ontvangt Nederlands pensioen of uitkering</p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">Mogelijk CAK en S1</h3>
                  <p className="mt-5 leading-relaxed text-stone-700">
                    Wie aan de verdragsvoorwaarden voldoet, regelt de zorg via het CAK en ontvangt een S1-document om
                    zich in Spanje voor publieke zorg te registreren. De precieze positie hangt af van alle pensioenen,
                    uitkeringen, werkactiviteiten en de verzekeringsbevoegdheid van Nederland.
                  </p>
                </div>
                <div className="rounded-[30px] bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">U werkt niet en bent niet verdragsgerechtigd</p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">Volledige private dekking kan nodig zijn</h3>
                  <p className="mt-5 leading-relaxed text-stone-700">
                    Voor EU-registratie moet een economisch niet-actieve aanvrager volledige publieke of private
                    ziektekostendekking aantonen. Controleer uitsluitingen, wachttijden, eigen risico, bestaande
                    aandoeningen en geografische dekking — niet alleen de maandpremie.
                  </p>
                </div>
                <div className="rounded-[30px] bg-[#e9dfd2] p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">EHIC</p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">Tijdelijk verblijf is geen emigratie</h3>
                  <p className="mt-5 leading-relaxed text-stone-700">
                    De Europese zorgpas ondersteunt medisch noodzakelijke zorg tijdens een tijdelijk verblijf. Gebruik
                    haar niet als enige onderbouwing voor een structurele verhuizing zonder officiële bevestiging dat
                    uw verzekeringssituatie dat toelaat.
                  </p>
                </div>
              </div>

              <p className="mt-8 rounded-[24px] border border-stone-300 bg-white p-6 text-sm leading-relaxed text-stone-600">
                Actuele signalering: het CAK meldde in juni 2026 dat mogelijke toekomstige regels rond vroegpensioen
                gevolgen kunnen hebben voor sommige nieuwe aanmeldingen. Op de controledatum was volgens het CAK nog
                geen definitief besluit genomen. Controleer daarom altijd de actuele CAK-status vlak vóór emigratie.
              </p>
            </section>

            <section id="voorbeelden" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">Praktijksituaties</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Drie voorbeelden laten zien waarom één dagengrens nooit het volledige antwoord geeft.
              </h2>

              <div className="mt-10 space-y-7">
                {exampleCases.map((example) => (
                  <article key={example.title} className="rounded-[32px] bg-white p-8 shadow-sm md:p-10">
                    <h3 className="font-serif text-3xl text-[#1e2a3a]">{example.title}</h3>
                    <p className="mt-5 text-lg leading-relaxed text-stone-700">{example.facts}</p>
                    <dl className="mt-7 grid gap-5 md:grid-cols-3">
                      <div className="rounded-2xl bg-[#f6f1ea] p-5">
                        <dt className="font-semibold text-[#1e2a3a]">Verblijf</dt>
                        <dd className="mt-3 text-sm leading-relaxed text-stone-700">{example.residence}</dd>
                      </div>
                      <div className="rounded-2xl bg-[#f6f1ea] p-5">
                        <dt className="font-semibold text-[#1e2a3a]">Belasting</dt>
                        <dd className="mt-3 text-sm leading-relaxed text-stone-700">{example.tax}</dd>
                      </div>
                      <div className="rounded-2xl bg-[#f6f1ea] p-5">
                        <dt className="font-semibold text-[#1e2a3a]">Nederland</dt>
                        <dd className="mt-3 text-sm leading-relaxed text-stone-700">{example.dutchAdministration}</dd>
                      </div>
                    </dl>
                    <p className="mt-6 border-l-4 border-[#c8a063] pl-5 text-sm leading-relaxed text-stone-700">
                      <strong>Niet doen:</strong> {example.warning}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section id="fouten" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">Voorkom herstelwerk achteraf</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Zes veelgemaakte fouten bij wonen in Spanje.
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {commonMistakes.map((mistake, index) => (
                  <article key={mistake.title} className="rounded-[28px] bg-white p-7 shadow-sm">
                    <p className="font-serif text-4xl text-[#c8a063]">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-4 font-serif text-2xl text-[#1e2a3a]">{mistake.title}</h3>
                    <p className="mt-4 leading-relaxed text-stone-700">{mistake.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="pt-24">
              <div className="rounded-[38px] bg-[#1e2a3a] p-9 text-white md:p-12">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">Nordic Move Spain</p>
                <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
                  Begin niet met formulieren. Begin met een helder woon- en leefplan.
                </h2>
                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/78">
                  De Relocation Assessment brengt uw beoogde verblijfsduur, woonregio, woningtype, zorgsituatie,
                  dagelijkse behoeften en praktische vervolgstappen samen. Zo voorkomt u dat de woningkeuze los komt
                  te staan van de manier waarop u werkelijk in Spanje wilt leven.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    href={internalLinks.relocationAssessment}
                    className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#b48a4f]"
                  >
                    Start de Relocation Assessment
                  </Link>
                  <Link
                    href={internalLinks.livingCosts}
                    className="rounded-full border border-white/70 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1e2a3a]"
                  >
                    Bekijk de kosten van levensonderhoud
                  </Link>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">Veelgestelde vragen</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Vragen over residencia, dagen tellen en emigreren.
              </h2>

              <div className="mt-10 space-y-4">
                {faqItems.map((item) => (
                  <details key={item.question} className="group rounded-[24px] bg-white p-6 shadow-sm open:shadow-md">
                    <summary className="cursor-pointer list-none pr-8 font-serif text-2xl text-[#1e2a3a]">
                      <span className="flex items-start justify-between gap-6">
                        {item.question}
                        <span aria-hidden="true" className="text-[#c8a063] transition group-open:rotate-45">
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-5 max-w-4xl leading-relaxed text-stone-700">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>
        </div>
      </section>

      <section className="bg-[#e9dfd2] px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">Bronnen en methode</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Gebaseerd op officiële informatie, niet op verkoopclaims.
              </h2>
              <p className="mt-6 leading-relaxed text-stone-700">
                Deze gids scheidt verblijfsrecht, gemeentelijke registratie, belasting en zorg bewust van elkaar.
                De inhoud is gecontroleerd op {REVIEWED_DISPLAY}. Persoonlijke feiten en latere wetswijzigingen kunnen
                de uitkomst veranderen.
              </p>
              <div className="mt-7">
                <ArrowLink href={internalLinks.contact}>Neem contact op met Nordic Move Spain</ArrowLink>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {sourceList.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[24px] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="font-semibold leading-relaxed text-[#1e2a3a]">{source.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{source.note}</p>
                  <p className="mt-4 text-sm font-medium text-[#9b743d]">Open officiële bron →</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-[24px] border border-stone-300 bg-white/55 p-6 text-sm leading-relaxed text-stone-600">
            <strong>Disclaimer:</strong> dit artikel is algemene informatie en geen individueel juridisch, fiscaal,
            verzekerings- of immigratieadvies. Laat vóór emigratie uw persoonlijke woonplaats, pensioen, inkomen,
            onderneming, gezinssituatie en zorgverzekering beoordelen door de bevoegde instanties en adviseurs.
          </div>
        </div>
      </section>
    </main>
  );
}