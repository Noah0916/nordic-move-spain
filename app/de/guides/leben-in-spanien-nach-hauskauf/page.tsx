import type { Metadata } from "next";
import Link from "next/link";

/**
 * Nordic Move Spain — nach dem Hauskauf in Spanien leben (2026)
 *
 * Vorgeschlagener Pfad:
 * app/de/guides/wohnen-in-spanien-nach-hauskauf/page.tsx
 *
 * Inhaltlich für deutsche EU-Bürger angepasst:
 * - Aufenthaltsrecht: spanische Regierung und EU-Recht
 * - Steuerlicher Wohnsitz: Agencia Tributaria, deutsches Steuerrecht und DBA Deutschland–Spanien
 * - Deutsche Abmeldung: Bundesmeldegesetz / Bundesportal
 * - Krankenversicherung und Sozialversicherung: EU-Koordinierung und DVKA
 *
 * Individuelle Fälle sollten immer von qualifizierten Steuer-, Rechts- und
 * Sozialversicherungsexperten geprüft werden.
 */

const SITE_URL = "https://www.nordicmovespain.com";
const PAGE_PATH = "/de/guides/wohnen-in-spanien-nach-hauskauf";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PUBLISHED_AT = "2026-07-24";
const REVIEWED_AT = "2026-07-24";
const REVIEWED_DISPLAY = "24. Juli 2026";

const internalLinks = {
  home: "/de",
  guides: "/de/guides",
  livingCosts: "/de/guides",
  relocationAssessment: "/de/relocation-assessment",
  contact: "/de/contact",
} as const;

const officialSources = {
  shortStaySpain:
    "https://administracion.gob.es/pag_Home/en/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/estancia.html",
  residenceConditions:
    "https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/obtencion-residencia/info-general",
  residenceRegistration:
    "https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/obtencion-residencia/inscribirte-residente",
  permanentResidence:
    "https://administracion.gob.es/pag_Home/es/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/obtencion-residencia/residencia-permanente.html",
  euResidenceRights:
    "https://europa.eu/youreurope/citizens/residence/residence-rights/index_de.htm",
  euPensioners:
    "https://europa.eu/youreurope/citizens/residence/residence-rights/pensioners/index_de.htm",
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
    "https://www.bundesfinanzministerium.de/Content/DE/Standardartikel/Themen/Steuern/Internationales_Steuerrecht/Staatenbezogene_Informationen/Laender_A_Z/Spanien/2025-01-01-Abkommen-Synthetisierter-Text.html",
  germanTaxLiability:
    "https://www.gesetze-im-internet.de/estg/__1.html",
  germanResidenceTax:
    "https://www.gesetze-im-internet.de/ao_1977/BJNR006130976.html",
  germanDeregistration:
    "https://www.gesetze-im-internet.de/bmg/__17.html",
  germanDeregistrationPortal:
    "https://verwaltung.bund.de/leistungsverzeichnis/DE/leistung/99115005070000/herausgeber/TH-354354/region/160000000000",
  healthcareEu:
    "https://europa.eu/youreurope/citizens/health/when-living-abroad/health-insurance-cover/index_de.htm",
  healthcarePensioners:
    "https://www.dvka.de/de/versicherte/rentner/",
  socialSecurityForms:
    "https://europa.eu/youreurope/citizens/work/social-security-and-benefits/social-security-forms/index_de.htm",
  selfEmployedA1:
    "https://www.dvka.de/de/arbeitgeber-erwerbstaetige/antraege-finden/entsendung-ins-ausland/selbststaendige/selbststaendige_detailseiten_neu/spanien_neu.html",
  drivingLicence:
    "https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/vehiculos/permiso-conduccion/renovacion-sustitucion",
  euDirective:
    "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32004L0038",
  spanishRoyalDecree:
    "https://www.boe.es/buscar/act.php?id=BOE-A-2007-4184",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nach dem Hauskauf in Spanien leben: Regeln für Deutsche 2026",
  description:
    "Dürfen Deutsche nach einem Hauskauf dauerhaft in Spanien leben? Aktueller Leitfaden zu Residencia, NIE, Padrón, 183-Tage-Regel, Steuern, Krankenversicherung und Abmeldung in Deutschland.",
  applicationName: "Nordic Move Spain",
  authors: [{ name: "Nordic Move Spain", url: SITE_URL }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Auswandern und Leben in Spanien",
  keywords: [
    "nach Hauskauf in Spanien leben",
    "nach Spanien auswandern",
    "Residencia Spanien Deutsche",
    "NIE Nummer Spanien",
    "Padrón Spanien",
    "183 Tage Regel Spanien",
    "Steuern Spanien deutsche Auswanderer",
    "Krankenversicherung Spanien Deutsche",
    "Abmeldung Deutschland Spanien",
    "Überwintern Spanien Regeln",
    "Haus kaufen Spanien dauerhaft wohnen",
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
    title: "Nach dem Hauskauf in Spanien leben",
    description:
      "Der Unterschied zwischen NIE, Padrón, Residencia und steuerlicher Ansässigkeit – mit Schritt-für-Schritt-Plan für deutsche Immobilieneigentümer in Spanien.",
    publishedTime: PUBLISHED_AT,
    modifiedTime: REVIEWED_AT,
    authors: ["Nordic Move Spain"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nach dem Hauskauf in Spanien leben: Regeln 2026",
    description:
      "Residencia, NIE, 183-Tage-Regel, Krankenversicherung und deutsche Abmeldung verständlich erklärt.",
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
    title: "Arbeitnehmer in Spanien",
    rule:
      "Für einen Aufenthalt von mehr als drei Monaten können Sie sich registrieren, wenn Sie in Spanien abhängig beschäftigt sind.",
    evidence: [
      "Gültiger deutscher Reisepass oder Personalausweis",
      "Arbeitsvertrag, Arbeitgeberbescheinigung oder Nachweis über die Anmeldung im spanischen Sozialversicherungssystem",
      "Nachweis des Wohnsitzes, wenn die zuständige Stelle ihn für das Verfahren verlangt",
    ],
    attention:
      "Arbeiten Sie teilweise für einen deutschen Arbeitgeber, sollten Sie vorab klären, in welchem Staat Sozialversicherungsbeiträge und Lohnsteuer anfallen und ob eine A1-Bescheinigung relevant ist.",
  },
  {
    title: "Selbstständig oder Unternehmer",
    rule:
      "Selbstständige können sich registrieren, wenn sie nachweisen, dass sie in Spanien tatsächlich als Selbstständige tätig sind.",
    evidence: [
      "Anmeldung als autónomo oder ein anderer offizieller Tätigkeitsnachweis",
      "Nachweis der wirtschaftlichen Tätigkeit",
      "Unterlagen zur Sozialversicherung und steuerlichen Registrierung",
    ],
    attention:
      "Eine deutsche GmbH, ein Online-Unternehmen oder eine Geschäftsführertätigkeit kann neben der persönlichen Besteuerung auch Fragen zu Betriebsstätte, Unternehmensleitung und Sozialversicherung auslösen.",
  },
  {
    title: "Rentner oder wirtschaftlich nicht aktiv",
    rule:
      "Sie müssen ausreichende Existenzmittel und einen umfassenden öffentlichen oder privaten Krankenversicherungsschutz für Spanien nachweisen.",
    evidence: [
      "Rentenbescheide, Kontoauszüge oder andere Nachweise ausreichender Mittel",
      "S1-Dokument, wenn Deutschland für Ihre Krankenversicherung zuständig bleibt, oder eine geeignete vollständige Krankenversicherung",
      "Gültiger Identitätsnachweis und die erforderlichen Antragsunterlagen",
    ],
    attention:
      "Es gibt keinen einzigen pauschalen Nettobetrag, der für jeden Haushalt identisch gilt. Die Behörde beurteilt die persönliche Gesamtsituation und den nachgewiesenen Versicherungsschutz.",
  },
  {
    title: "Student",
    rule:
      "Studierende weisen die Einschreibung bei einer anerkannten Bildungseinrichtung, umfassenden Krankenversicherungsschutz und ausreichende Existenzmittel nach.",
    evidence: [
      "Immatrikulations- oder Einschreibungsnachweis",
      "Krankenversicherung, die die erforderlichen Risiken in Spanien abdeckt",
      "Erklärung oder Nachweis ausreichender Existenzmittel",
    ],
    attention:
      "Wenn Sie zusätzlich in Spanien arbeiten, kann sich Ihre sozialversicherungs- und steuerrechtliche Situation verändern.",
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
      "Eine persönliche und eindeutige Identifikationsnummer für Ausländer, die aus wirtschaftlichen, beruflichen, sozialen oder anderen Gründen mit Spanien zu tun haben.",
    provesResidence:
      "Nein. Die Nummer allein beweist weder ein Aufenthaltsrecht noch die steuerliche Ansässigkeit.",
    practicalUse:
      "Immobilienkauf, Steuererklärungen, Bankgeschäfte, Verträge, notarielle Urkunden und Verwaltungsverfahren.",
  },
  {
    term: "Padrón / empadronamiento",
    meaning:
      "Eintragung in das kommunale Melderegister an dem Ort, an dem Sie gewöhnlich wohnen.",
    provesResidence:
      "Die Eintragung kann den tatsächlichen Wohnsitz belegen, bestimmt aber nicht allein Ihre steuerliche Ansässigkeit oder Ihr EU-Aufenthaltsrecht.",
    practicalUse:
      "Lokale Verwaltung, bestimmte Gesundheits- und Aufenthaltsverfahren, kommunale Dienstleistungen und teilweise weitere Behördengänge.",
  },
  {
    term: "Certificado de Registro de Ciudadano de la Unión",
    meaning:
      "Registrierungsbescheinigung für EU-Bürger, die sich länger als drei Monate in Spanien aufhalten und die gesetzlichen Voraussetzungen erfüllen.",
    provesResidence:
      "Ja, als administrative Registrierung eines EU-Bürgers. Sie ist aber nicht dasselbe wie eine steuerliche Ansässigkeitsbescheinigung.",
    practicalUse:
      "Nachweis der Eintragung im Registro Central de Extranjeros; enthält unter anderem NIE, Anschrift und Registrierungsdatum.",
  },
  {
    term: "Steuerliche Ansässigkeit",
    meaning:
      "Der steuerliche Status, der bestimmt, in welchem Staat Sie grundsätzlich als ansässige Person für die Einkommensteuer behandelt werden.",
    provesResidence:
      "Ergibt sich aus den Steuergesetzen und gegebenenfalls dem Doppelbesteuerungsabkommen – nicht aus einem einzelnen Dokument.",
    practicalUse:
      "Besteuerung des Welteinkommens, Anwendung des DBA und Verteilung der Besteuerungsrechte zwischen Deutschland und Spanien.",
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
    title: "Definieren Sie zuerst Ihren tatsächlichen Aufenthaltsplan",
    text:
      "Unterscheiden Sie zwischen Urlaub, Überwintern, einem Aufenthalt von mehr als drei Monaten und einer echten Auswanderung. Halten Sie fest, wie viele Tage Sie pro Kalenderjahr voraussichtlich in Spanien verbringen, wo Partner und Familie leben und aus welchem Land Sie arbeiten oder Rente beziehen.",
  },
  {
    number: "02",
    title: "Sorgen Sie für eine nutzbare Anschrift und klären Sie das Padrón",
    text:
      "Für viele lokale und aufenthaltsrechtliche Verfahren ist die kommunale Anmeldung wichtig. Welche Unterlagen die Gemeinde verlangt, hängt von Ort und Wohnsituation ab.",
    documents: [
      "Kaufurkunde oder Mietvertrag",
      "Gültiger Identitätsnachweis",
      "Je nach Gemeinde Versorgungsrechnung oder Zustimmung des Hauptbewohners",
    ],
  },
  {
    number: "03",
    title: "Sammeln Sie die Nachweise passend zu Ihrer Situation",
    text:
      "Arbeitnehmer, Selbstständige, Rentner und Studierende benötigen nicht dieselben Nachweise. Stellen Sie die Unterlagen daher nach Ihrer tatsächlichen Rechtsgrundlage zusammen.",
  },
  {
    number: "04",
    title: "Beantragen Sie die EU-Registrierung persönlich",
    text:
      "Die Registrierung erfolgt persönlich bei der zuständigen Oficina de Extranjeros oder Policía Nacional. In der Praxis wird regelmäßig das Formular EX-18 verwendet; außerdem ist eine vorherige Terminvereinbarung und die entsprechende Verwaltungsgebühr relevant.",
  },
  {
    number: "05",
    title: "Regeln Sie Krankenversicherung und Sozialversicherung korrekt",
    text:
      "Wer in Spanien arbeitet, fällt häufig unter das spanische System. Rentner, für deren Krankenversicherung Deutschland zuständig bleibt, können je nach Situation über ihre deutsche Krankenkasse ein S1-Dokument erhalten. Andere wirtschaftlich nicht aktive Personen benötigen möglicherweise eine umfassende private Absicherung.",
  },
  {
    number: "06",
    title: "Analysieren Sie Ihre steuerliche Ansässigkeit vor dem Umzug",
    text:
      "Schauen Sie nicht nur auf die Zahl der Tage. Spanien berücksichtigt auch den Mittelpunkt wirtschaftlicher Interessen und kennt ein widerlegbares Familienvermutungskriterium. Gleichzeitig kann eine in Deutschland weiter verfügbare Wohnung nach deutschem Recht steuerlich relevant bleiben. Bei doppelter Ansässigkeit entscheidet das DBA anhand aufeinanderfolgender Kriterien über die abkommensrechtliche Ansässigkeit.",
  },
  {
    number: "07",
    title: "Klären Sie die deutsche Abmeldung anhand Ihrer tatsächlichen Wohnsituation",
    text:
      "Ziehen Sie aus Ihrer deutschen Wohnung aus und beziehen keine neue Wohnung im Inland, müssen Sie sich nach § 17 Bundesmeldegesetz grundsätzlich innerhalb von zwei Wochen nach dem Auszug abmelden. Eine nur vorübergehende Abwesenheit bei fortbestehender Nutzungsmöglichkeit und Nutzungsabsicht ist etwas anderes als ein tatsächlicher Auszug.",
  },
  {
    number: "08",
    title: "Aktualisieren Sie Ihre Verwaltung nach dem Umzug",
    text:
      "Denken Sie an deutsche und spanische Steuerdaten, Bankverbindungen, Versicherungen, Rentenversicherung, Krankenkasse, Führerschein, Fahrzeug, Testament, Vollmachten und die Anschriften bei relevanten Behörden und Vertragspartnern.",
  },
];

type ExampleCase = {
  title: string;
  facts: string;
  residence: string;
  tax: string;
  germanAdministration: string;
  warning: string;
};

const exampleCases: ExampleCase[] = [
  {
    title: "Beispiel A — fünf Monate überwintern",
    facts:
      "Ein deutsches Paar verbringt von November bis März fünf Monate in der eigenen Immobilie an der Costa Blanca, arbeitet nicht in Spanien und behält seine tatsächlich nutzbare Wohnung in Deutschland.",
    residence:
      "Da der Aufenthalt länger als drei Monate dauert, kann die spanische Registrierungspflicht für EU-Bürger greifen. Der Besitz der Immobilie ersetzt diese Registrierung nicht.",
    tax:
      "Fünf Monate bedeuten allein noch nicht automatisch spanische steuerliche Ansässigkeit. Die konkrete Tageszählung, wirtschaftliche Interessen, Familie und eine mögliche steuerliche Ansässigkeit in Deutschland müssen zusammen betrachtet werden.",
    germanAdministration:
      "Eine vorübergehende Abwesenheit löst nicht allein deshalb eine Abmeldung aus, wenn die deutsche Wohnung tatsächlich beibehalten und weiter genutzt werden soll. Melderecht und Steuerrecht sind dennoch getrennt zu prüfen.",
    warning:
      "Behandeln Sie einen fünfmonatigen Aufenthalt nicht so, als würde für deutsche EU-Bürger die britische 90/180-Tage-Regel gelten.",
  },
  {
    title: "Beispiel B — acht bis zehn Monate pro Jahr in Spanien",
    facts:
      "Ein pensioniertes deutsches Paar lebt den größten Teil des Jahres in Spanien und hält zusätzlich eine nutzbare Wohnung in Deutschland.",
    residence:
      "EU-Registrierung, Padrón und eine dauerhaft passende Krankenversicherung gehören zu dieser Situation.",
    tax:
      "Bei mehr als 183 Tagen im Kalenderjahr liegt spanische steuerliche Ansässigkeit regelmäßig nahe. Besteht zugleich ein steuerlicher Wohnsitz in Deutschland, muss das DBA Deutschland–Spanien angewendet werden.",
    germanAdministration:
      "Die melderechtliche Abmeldung hängt nicht an einer festen Achtmonatsgrenze. Entscheidend ist, ob die deutsche Wohnung tatsächlich aufgegeben wird oder als Wohnmöglichkeit bestehen bleibt.",
    warning:
      "Eine deutsche Meldeadresse oder eine Wohnung in Deutschland verhindert nicht automatisch, dass Spanien Sie nach seinen Regeln als steuerlich ansässig behandelt.",
  },
  {
    title: "Beispiel C — vier Monate Remote Work aus Spanien",
    facts:
      "Ein Arbeitnehmer eines deutschen Unternehmens arbeitet vier Monate aus seiner spanischen Immobilie.",
    residence:
      "Der Aufenthalt überschreitet drei Monate. EU-Registrierung und der Nachweis der Beschäftigungssituation sollten geprüft werden.",
    tax:
      "Vier Monate führen nicht automatisch zur spanischen steuerlichen Ansässigkeit. Dennoch können Lohnsteuer, Arbeitgeberpflichten, Betriebsstättenfragen und der tatsächliche Arbeitsort relevant werden.",
    germanAdministration:
      "Die deutsche Anmeldung ist eine eigene melderechtliche Frage. Zusätzlich muss die Sozialversicherung geklärt werden; bei vorübergehender Tätigkeit kann eine A1-Bescheinigung relevant sein.",
    warning:
      "Arbeiten Sie nicht mehrere Monate aus Spanien allein auf Basis einer internen Arbeitgeberfreigabe. Steuer- und Sozialversicherungsthemen sollten vorher geprüft werden.",
  },
];

const commonMistakes = [
  {
    title: "Eine NIE mit Residencia verwechseln",
    text:
      "Die NIE ist eine Identifikationsnummer. Sie können eine NIE besitzen, weil Sie eine Immobilie kaufen, ohne als EU-Bürger registriert oder steuerlich in Spanien ansässig zu sein.",
  },
  {
    title: "Die Drei-Monats-Grenze mit 183 Tagen verwechseln",
    text:
      "Drei Monate betreffen das administrative Aufenthaltsrecht von EU-Bürgern. Mehr als 183 Tage sind ein wichtiges spanisches Steuerkriterium. Es sind unterschiedliche Rechtsfragen.",
  },
  {
    title: "Die 90/180-Tage-Regel auf Deutsche anwenden",
    text:
      "Die bekannte Schengen-Grenze betrifft vor allem Drittstaatsangehörige. Deutsche Staatsbürger genießen als EU-Bürger Freizügigkeitsrechte, müssen bei längerem Aufenthalt aber die Registrierungsbedingungen erfüllen.",
  },
  {
    title: "Für die Steuer nur Tage zählen",
    text:
      "Spanien berücksichtigt neben den Aufenthaltstagen auch den Mittelpunkt wirtschaftlicher Interessen und bestimmte familiäre Umstände. Deutschland wiederum kann bei einem beibehaltenen Wohnsitz weiterhin unbeschränkte Steuerpflicht annehmen.",
  },
  {
    title: "Die EHIC als dauerhafte Krankenversicherung behandeln",
    text:
      "Die Europäische Krankenversicherungskarte dient medizinisch notwendigen Leistungen während eines vorübergehenden Aufenthalts. Sie ersetzt nicht automatisch die dauerhafte Absicherung bei einem echten Umzug.",
  },
  {
    title: "Melderecht und Steuerrecht gleichsetzen",
    text:
      "Eine An- oder Abmeldung beim Einwohnermeldeamt bestimmt nicht allein Ihre steuerliche Ansässigkeit. Entscheidend sind die tatsächlichen Wohnverhältnisse, die Steuergesetze beider Länder und gegebenenfalls das DBA.",
  },
];

const faqItems = [
  {
    question: "Darf ich als Deutscher dauerhaft in Spanien leben, wenn ich dort ein Haus kaufe?",
    answer:
      "Als deutscher Staatsbürger sind Sie EU-Bürger und können aufgrund der europäischen Freizügigkeit in Spanien leben. Dieses Recht entsteht nicht durch den Hauskauf. Für einen Aufenthalt von mehr als drei Monaten müssen Sie sich registrieren und nachweisen, dass Sie Arbeitnehmer, Selbstständiger oder Student sind oder über ausreichende Existenzmittel und umfassenden Krankenversicherungsschutz verfügen.",
  },
  {
    question: "Gilt die 90/180-Tage-Regel für Deutsche mit einer Immobilie in Spanien?",
    answer:
      "Nicht wie für britische oder andere Drittstaatsangehörige. Deutsche Staatsbürger fallen unter die EU-Freizügigkeitsregeln. Für die ersten drei Monate reicht grundsätzlich ein gültiger Personalausweis oder Reisepass; bei längerem Aufenthalt gelten Registrierungs- und Aufenthaltsbedingungen.",
  },
  {
    question: "Ist eine NIE dasselbe wie Residencia?",
    answer:
      "Nein. Die NIE ist Ihre spanische Identifikationsnummer. Das Certificado de Registro de Ciudadano de la Unión bestätigt Ihre administrative Registrierung als EU-Bürger. Die steuerliche Ansässigkeit ist nochmals eine eigene rechtliche Beurteilung.",
  },
  {
    question: "Wann werde ich in Spanien steuerlich ansässig?",
    answer:
      "Spanien kann Sie steuerlich als ansässig behandeln, wenn Sie mehr als 183 Tage im Kalenderjahr in Spanien verbringen oder wenn sich der Schwerpunkt Ihrer Tätigkeiten oder wirtschaftlichen Interessen dort befindet. Daneben gibt es ein widerlegbares Familienvermutungskriterium. Bei möglicher Ansässigkeit in Deutschland und Spanien wird das DBA Deutschland–Spanien angewendet.",
  },
  {
    question: "Muss ich mich in Deutschland abmelden, wenn ich nach Spanien ziehe?",
    answer:
      "Wenn Sie aus Ihrer deutschen Wohnung ausziehen und keine neue Wohnung im Inland beziehen, müssen Sie sich nach § 17 Bundesmeldegesetz grundsätzlich innerhalb von zwei Wochen nach dem Auszug abmelden. Eine nur vorübergehende Abwesenheit bei fortbestehender Nutzungsmöglichkeit und Nutzungsabsicht ist davon zu unterscheiden.",
  },
  {
    question: "Kann ich meine deutsche Krankenversicherung behalten?",
    answer:
      "Das hängt von Ihrer Arbeits-, Renten- und Versicherungssituation ab. Wer in Spanien arbeitet, ist häufig dem spanischen System zugeordnet. Bei Rentnern kann Deutschland je nach Fall für die Krankenversicherung zuständig bleiben; dann kann ein S1-Dokument für die Registrierung der Gesundheitsversorgung in Spanien relevant sein. Lassen Sie dies vor dem Umzug von Ihrer Krankenkasse beziehungsweise der DVKA prüfen.",
  },
  {
    question: "Brauche ich als Deutscher ein Visum, um nach Spanien auszuwandern?",
    answer:
      "Als deutscher EU-Bürger benötigen Sie grundsätzlich kein reguläres Einwanderungsvisum, um in Spanien zu leben. Bei Aufenthalten von mehr als drei Monaten gelten jedoch die spanischen Registrierungs- und Aufenthaltsvoraussetzungen. Für nicht-europäische Familienangehörige können zusätzliche Verfahren gelten.",
  },
  {
    question: "Wann erhalte ich ein dauerhaftes Aufenthaltsrecht in Spanien?",
    answer:
      "EU-Bürger erwerben grundsätzlich nach fünf Jahren ununterbrochenen rechtmäßigen Aufenthalts ein Recht auf Daueraufenthalt. Bestimmte vorübergehende Abwesenheiten unterbrechen die Kontinuität nicht; längere Abwesenheiten können dagegen Auswirkungen haben.",
  },
];

const sourceList = [
  {
    title: "Spanische Regierung — Aufenthalt bis drei Monate",
    href: officialSources.shortStaySpain,
    note: "Für EU-Bürger sind bei kurzen Aufenthalten grundsätzlich ein gültiger Pass oder Personalausweis ausreichend.",
  },
  {
    title: "Spanische Regierung — Aufenthalt länger als drei Monate",
    href: officialSources.residenceConditions,
    note: "Voraussetzungen für Arbeitnehmer, Selbstständige sowie wirtschaftlich nicht aktive EU-Bürger.",
  },
  {
    title: "Spanische Regierung — Registrierung als EU-Resident",
    href: officialSources.residenceRegistration,
    note: "Persönliche Registrierung und Frist von drei Monaten nach Einreise.",
  },
  {
    title: "Ministerio del Interior — NIE",
    href: officialSources.nie,
    note: "Offizielle Definition und Gründe für die Vergabe der Identifikationsnummer.",
  },
  {
    title: "Agencia Tributaria — spanische steuerliche Ansässigkeit",
    href: officialSources.taxResidence,
    note: "183 Tage, wirtschaftliche Interessen und Familienvermutung.",
  },
  {
    title: "Agencia Tributaria — doppelte steuerliche Ansässigkeit",
    href: officialSources.dualResidence,
    note: "Hinweise zu Fällen, in denen zwei Staaten eine Person als ansässig behandeln.",
  },
  {
    title: "Bundesfinanzministerium — DBA Deutschland–Spanien",
    href: officialSources.taxTreaty,
    note: "Aktueller synthetisierter Vertragstext einschließlich BEPS-MLI-Wirkung ab 2025.",
  },
  {
    title: "Bundesmeldegesetz — § 17 An- und Abmeldung",
    href: officialSources.germanDeregistration,
    note: "Abmeldung bei Auszug aus einer deutschen Wohnung ohne Bezug einer neuen Wohnung im Inland.",
  },
  {
    title: "EStG / Abgabenordnung — deutsche steuerliche Ansässigkeit",
    href: officialSources.germanTaxLiability,
    note: "Unbeschränkte Einkommensteuerpflicht bei Wohnsitz oder gewöhnlichem Aufenthalt in Deutschland.",
  },
  {
    title: "DVKA — Krankenversicherung von Rentnern im Ausland",
    href: officialSources.healthcarePensioners,
    note: "Informationen für in Deutschland versicherte Rentner mit Wohnort im Ausland.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Nach dem Hauskauf in Spanien leben: Residencia, NIE und Steuern für Deutsche",
  description:
    "Ausführlicher Leitfaden zu EU-Aufenthaltsrecht, Registrierung, steuerlicher Ansässigkeit, Krankenversicherung und deutscher Abmeldung.",
  inLanguage: "de-DE",
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
    "Leben in Spanien",
    "Auswandern nach Spanien",
    "EU-Aufenthaltsrecht",
    "Steuerliche Ansässigkeit",
    "NIE",
    "Krankenversicherung in Spanien",
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
      name: "Ratgeber",
      item: `${SITE_URL}${internalLinks.guides}`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Nach dem Hauskauf in Spanien leben",
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
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/65"
          >
            <Link href={internalLinks.home} className="transition hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href={internalLinks.guides} className="transition hover:text-white">
              Ratgeber
            </Link>
            <span aria-hidden="true">/</span>
            <span>Leben in Spanien</span>
          </nav>

          <div className="grid items-end gap-14 lg:grid-cols-[1fr_0.52fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#c8a063]">
                Ratgeber für deutsche Immobilieneigentümer · 2026
              </p>

              <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.03] md:text-7xl">
                Nach dem Hauskauf in Spanien leben: Residencia, NIE und Steuern
                verständlich erklärt.
              </h1>

              <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/80">
                Eine Immobilie in Spanien verschafft Ihnen nicht automatisch
                einen neuen administrativen oder steuerlichen Wohnsitz. Als
                Deutscher besitzen Sie jedoch EU-Freizügigkeitsrechte. Entscheidend
                ist, wann Sie sich registrieren müssen, welches
                Sozialversicherungssystem zuständig ist und wann Spanien Sie als
                steuerlich ansässig behandeln kann.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={internalLinks.relocationAssessment}
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#b48a4f]"
                >
                  Relocation Assessment starten
                </Link>
                <a
                  href="#schrittplan"
                  className="rounded-full border border-white/70 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1e2a3a]"
                >
                  Schritt-für-Schritt-Plan ansehen
                </a>
              </div>
            </div>

            <aside className="rounded-[32px] border border-white/15 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                Direkte Antwort
              </p>
              <p className="mt-5 font-serif text-3xl leading-tight">
                Für deutsche EU-Bürger gilt nicht dieselbe 90/180-Tage-Regel wie
                für britische Käufer.
              </p>
              <p className="mt-5 leading-relaxed text-white/75">
                Bis zu drei Monate reicht grundsätzlich ein gültiger Reisepass
                oder Personalausweis. Bleiben Sie länger, müssen Sie sich als
                EU-Bürger registrieren und die gesetzlichen
                Aufenthaltsvoraussetzungen erfüllen.
              </p>
              <div className="mt-8 border-t border-white/15 pt-6 text-sm leading-relaxed text-white/60">
                Nordic Move Spain · Inhalt geprüft am {REVIEWED_DISPLAY}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white px-6 py-10 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-[24px] bg-[#f6f1ea] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">
              Aufenthaltsrecht
            </p>
            <p className="mt-3 font-serif text-2xl text-[#1e2a3a]">3 Monate</p>
            <p className="mt-2 leading-relaxed text-stone-600">
              Danach muss sich ein EU-Bürger, der in Spanien bleibt, grundsätzlich
              registrieren.
            </p>
          </div>

          <div className="rounded-[24px] bg-[#f6f1ea] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">
              Spanische Steueranalyse
            </p>
            <p className="mt-3 font-serif text-2xl text-[#1e2a3a]">183 Tage</p>
            <p className="mt-2 leading-relaxed text-stone-600">
              Ein wichtiges spanisches Kriterium – aber nicht das einzige für die
              steuerliche Ansässigkeit.
            </p>
          </div>

          <div className="rounded-[24px] bg-[#f6f1ea] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">
              Deutsche Abmeldung
            </p>
            <p className="mt-3 font-serif text-2xl text-[#1e2a3a]">
              2 Wochen nach Auszug
            </p>
            <p className="mt-2 leading-relaxed text-stone-600">
              Wenn Sie aus Ihrer deutschen Wohnung ausziehen und keine neue
              Wohnung im Inland beziehen.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.68fr_1.32fr]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
              Inhalt
            </p>
            <nav
              aria-label="Inhaltsverzeichnis"
              className="mt-6 rounded-[28px] bg-white p-7 shadow-sm"
            >
              {[
                ["#kernregel", "1. Gibt ein Haus ein Aufenthaltsrecht?"],
                ["#regeln", "2. Drei Monate, 183 Tage und deutsche Abmeldung"],
                ["#situationen", "3. Voraussetzungen je persönlicher Situation"],
                ["#begriffe", "4. NIE, Padrón und Residencia"],
                ["#schrittplan", "5. Praktischer Schritt-für-Schritt-Plan"],
                ["#steuer", "6. Steuerliche Ansässigkeit"],
                ["#gesundheit", "7. Kranken- und Sozialversicherung"],
                ["#beispiele", "8. Drei Praxisbeispiele"],
                ["#fehler", "9. Häufige Fehler"],
                ["#faq", "10. Häufig gestellte Fragen"],
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
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Die Grundregel
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Eine Immobilie kaufen und in Spanien wohnen dürfen sind zwei
                verschiedene Dinge.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-700">
                Die Kaufurkunde beweist Ihr Eigentum. Sie macht Sie nicht
                automatisch zum administrativen Einwohner, steuerlichen
                Einwohner oder Teilnehmer des spanischen Gesundheitssystems.
                Als deutscher EU-Bürger leitet sich Ihr Recht, nach Spanien
                umzuziehen, aus der europäischen Freizügigkeit ab – nicht aus dem
                Preis oder Wert Ihrer Immobilie.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Deshalb können zwei Eigentümer derselben Art von Immobilie völlig
                unterschiedlich behandelt werden: Einer nutzt sein Ferienhaus
                wenige Monate im Jahr und bleibt in Deutschland ansässig. Ein
                anderer lebt überwiegend in Spanien, registriert sich als
                EU-Bürger und kann dort über sein weltweites Einkommen
                steuerpflichtig werden.
              </p>

              <div className="mt-9 rounded-[30px] border-l-4 border-[#c8a063] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Vier Systeme, die Sie getrennt beurteilen sollten
                </h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Aufenthaltsrecht als EU-Bürger",
                    "Kommunale Anmeldung auf dem Padrón",
                    "Steuerliche Ansässigkeit nach nationalem Recht und DBA",
                    "Krankenversicherung und Sozialversicherung",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-2xl bg-[#f6f1ea] p-4"
                    >
                      <CheckIcon />
                      <p className="leading-relaxed text-stone-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="regeln" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Drei verschiedene Regeln
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Drei Monate, 183 Tage und die deutsche Abmeldung dürfen nicht
                miteinander verwechselt werden.
              </h2>

              <div className="mt-10 space-y-6">
                <div className="rounded-[30px] bg-[#1e2a3a] p-8 text-white md:p-10">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                    1 · EU-Aufenthaltsrecht
                  </p>
                  <h3 className="mt-4 font-serif text-3xl">
                    Bis drei Monate versus länger als drei Monate
                  </h3>
                  <p className="mt-5 leading-relaxed text-white/78">
                    Für einen Aufenthalt von weniger als drei Monaten benötigt
                    ein deutscher EU-Bürger grundsätzlich nur einen gültigen
                    Reisepass oder Personalausweis. Bleiben Sie länger, müssen
                    Sie sich innerhalb von drei Monaten nach der Einreise
                    persönlich in das Registro Central de Extranjeros eintragen
                    lassen und die passende Aufenthaltsgrundlage nachweisen.
                  </p>
                </div>

                <div className="rounded-[30px] bg-white p-8 shadow-sm md:p-10">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#9b743d]">
                    2 · Spanische Steuer
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                    Mehr als 183 Tage sind wichtig – aber nicht alles
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone-700">
                    Spanien kann Sie als steuerlich ansässig behandeln, wenn Sie
                    sich mehr als 183 Tage im Kalenderjahr in Spanien aufhalten.
                    Sporadische Abwesenheiten können mitzählen, sofern keine
                    steuerliche Ansässigkeit in einem anderen Staat
                    nachgewiesen wird. Auch der Mittelpunkt Ihrer Tätigkeiten
                    oder wirtschaftlichen Interessen kann relevant sein.
                  </p>
                </div>

                <div className="rounded-[30px] bg-[#e9dfd2] p-8 md:p-10">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#9b743d]">
                    3 · Deutsches Melderecht
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                    Keine deutsche Achtmonatsregel
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone-700">
                    In Deutschland gilt nicht die niederländische Regel
                    „mehr als acht Monate im Ausland“. Wer aus einer deutschen
                    Wohnung tatsächlich auszieht und keine neue Wohnung im
                    Inland bezieht, muss sich grundsätzlich innerhalb von zwei
                    Wochen nach dem Auszug abmelden. Eine lediglich
                    vorübergehende Abwesenheit bei beibehaltener
                    Nutzungsmöglichkeit ist davon zu unterscheiden.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[28px] border border-amber-300 bg-amber-50 p-7">
                <p className="font-semibold text-amber-950">
                  Wichtig für Überwinterer
                </p>
                <p className="mt-3 leading-relaxed text-amber-900">
                  Fünf Monate in Spanien können eine spanische
                  Aufenthaltsregistrierung erforderlich machen, ohne dass die
                  Zahl der Tage allein automatisch spanische steuerliche
                  Ansässigkeit oder eine deutsche Abmeldepflicht auslöst.
                </p>
              </div>
            </section>

            <section id="situationen" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Welche Aufenthaltsgrundlage haben Sie?
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Die Nachweise für die Residencia hängen von Arbeit, Studium oder
                finanzieller Situation ab.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-700">
                Die spanischen Regeln sehen unterschiedliche Grundlagen für
                Aufenthalte von mehr als drei Monaten vor. Ein
                Immobilieneigentümer muss nicht zwingend in Spanien arbeiten.
                Wer wirtschaftlich nicht aktiv ist, muss aber ausreichende
                Mittel und umfassenden Krankenversicherungsschutz nachweisen.
              </p>

              <div className="mt-10 grid gap-7">
                {residenceSituations.map((situation) => (
                  <article
                    key={situation.title}
                    className="rounded-[30px] bg-white p-8 shadow-sm md:p-10"
                  >
                    <h3 className="font-serif text-3xl text-[#1e2a3a]">
                      {situation.title}
                    </h3>
                    <p className="mt-5 text-lg leading-relaxed text-stone-700">
                      {situation.rule}
                    </p>
                    <div className="mt-6 grid gap-3">
                      {situation.evidence.map((item) => (
                        <div key={item} className="flex gap-3">
                          <CheckIcon />
                          <p className="leading-relaxed text-stone-600">{item}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-7 rounded-2xl bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-700">
                      <strong>Wichtig:</strong> {situation.attention}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section id="begriffe" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Häufig verwechselte Begriffe
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                NIE, Padrón, Residencia und steuerliche Ansässigkeit bedeuten
                nicht dasselbe.
              </h2>

              <div className="mt-10 overflow-x-auto rounded-[30px] bg-white shadow-sm">
                <table className="min-w-[900px] w-full border-collapse text-left">
                  <thead className="bg-[#1e2a3a] text-white">
                    <tr>
                      <th className="px-6 py-5 text-sm uppercase tracking-[0.16em]">
                        Begriff
                      </th>
                      <th className="px-6 py-5 text-sm uppercase tracking-[0.16em]">
                        Was ist das?
                      </th>
                      <th className="px-6 py-5 text-sm uppercase tracking-[0.16em]">
                        Beweist Wohnsitz?
                      </th>
                      <th className="px-6 py-5 text-sm uppercase tracking-[0.16em]">
                        Wofür verwendet?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {definitionRows.map((row) => (
                      <tr
                        key={row.term}
                        className="border-b border-stone-100 align-top last:border-0"
                      >
                        <th className="px-6 py-6 font-serif text-2xl font-normal text-[#1e2a3a]">
                          {row.term}
                        </th>
                        <td className="px-6 py-6 leading-relaxed text-stone-600">
                          {row.meaning}
                        </td>
                        <td className="px-6 py-6 leading-relaxed text-stone-600">
                          {row.provesResidence}
                        </td>
                        <td className="px-6 py-6 leading-relaxed text-stone-600">
                          {row.practicalUse}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-[28px] bg-[#e9dfd2] p-7">
                  <h3 className="font-serif text-2xl text-[#1e2a3a]">
                    Was steht auf dem grünen EU-Zertifikat?
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-700">
                    Die spanische Regierung nennt unter anderem Name,
                    Staatsangehörigkeit, Anschrift, NIE und Registrierungsdatum.
                    Die Bescheinigung wird im Rahmen der Registrierung
                    ausgestellt.
                  </p>
                </div>

                <div className="rounded-[28px] bg-[#1e2a3a] p-7 text-white">
                  <h3 className="font-serif text-2xl">
                    Kein Fotoausweis
                  </h3>
                  <p className="mt-4 leading-relaxed text-white/75">
                    Die EU-Registrierungsbescheinigung ersetzt Ihren deutschen
                    Reisepass oder Personalausweis nicht. Verwenden Sie Ihren
                    gültigen deutschen Identitätsnachweis weiterhin zusammen mit
                    der spanischen Registrierungsbescheinigung.
                  </p>
                </div>
              </div>
            </section>

            <section id="schrittplan" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Vom Plan zur korrekten Registrierung
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Schritt-für-Schritt-Plan für Deutsche, die tatsächlich nach
                Spanien ziehen.
              </h2>

              <div className="mt-12 space-y-6">
                {timelineSteps.map((step) => (
                  <article
                    key={step.number}
                    className="grid gap-5 rounded-[30px] bg-white p-7 shadow-sm md:grid-cols-[100px_1fr] md:p-9"
                  >
                    <div className="font-serif text-5xl text-[#c8a063]">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl text-[#1e2a3a]">
                        {step.title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-stone-700">
                        {step.text}
                      </p>
                      {step.documents ? (
                        <div className="mt-5 grid gap-2 sm:grid-cols-3">
                          {step.documents.map((document) => (
                            <p
                              key={document}
                              className="rounded-2xl bg-[#f6f1ea] p-4 text-sm leading-relaxed text-stone-700"
                            >
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

            <section id="steuer" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Steuerliche Ansässigkeit
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Steuerliche Ansässigkeit folgt aus Fakten, Gesetzen und dem DBA
                – nicht aus Ihrer persönlichen Wahl.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-700">
                Wer in Spanien steuerlich ansässig ist, unterliegt grundsätzlich
                der spanischen Einkommensteuer auf sein Welteinkommen. Das kann
                deutsches Arbeitsentgelt, Renten, Kapitalerträge,
                Unternehmensgewinne und andere ausländische Einkünfte betreffen,
                jeweils unter Berücksichtigung des
                Doppelbesteuerungsabkommens Deutschland–Spanien.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Gleichzeitig gilt in Deutschland: Natürliche Personen mit
                Wohnsitz oder gewöhnlichem Aufenthalt im Inland sind nach § 1
                EStG grundsätzlich unbeschränkt einkommensteuerpflichtig. Ein
                Wohnsitz kann nach § 8 AO bereits bestehen, wenn eine Wohnung
                unter Umständen beibehalten wird, die auf eine weitere Nutzung
                schließen lassen. Ein Umzug muss deshalb immer in beiden
                Rechtsordnungen analysiert werden.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  {
                    number: "01",
                    title: "Ständige Wohnstätte",
                    text:
                      "Bei doppelter Ansässigkeit schaut das DBA zunächst darauf, in welchem Staat Ihnen eine ständige Wohnstätte zur Verfügung steht.",
                  },
                  {
                    number: "02",
                    title: "Mittelpunkt der Lebensinteressen",
                    text:
                      "Steht in beiden Staaten eine Wohnstätte zur Verfügung, wird untersucht, zu welchem Staat die engeren persönlichen und wirtschaftlichen Beziehungen bestehen.",
                  },
                  {
                    number: "03",
                    title: "Gewöhnlicher Aufenthalt und Staatsangehörigkeit",
                    text:
                      "Bleibt die Zuordnung offen, folgen gewöhnlicher Aufenthalt, Staatsangehörigkeit und gegebenenfalls ein Verständigungsverfahren der Behörden.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="rounded-[28px] bg-[#e9dfd2] p-7"
                  >
                    <p className="font-serif text-4xl text-[#9b743d]">
                      {item.number}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl text-[#1e2a3a]">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-stone-700">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[30px] bg-[#1e2a3a] p-8 text-white md:p-10">
                <h3 className="font-serif text-3xl">
                  Spanien behandelt natürliche Personen grundsätzlich für das
                  ganze Kalenderjahr als resident oder nichtresident
                </h3>
                <p className="mt-5 leading-relaxed text-white/78">
                  Ein Umzug mitten im Jahr kann deshalb komplex sein. Prüfen Sie
                  vorab die spanische Jahresposition, eine mögliche deutsche
                  Steuerpflicht und die Anwendung des DBA.
                </p>
              </div>
            </section>

            <section id="gesundheit" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Krankenversicherung und Sozialversicherung
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Welche Krankenversicherung zuständig ist, hängt vor allem von
                Arbeit, Rente und Versicherungsstatus ab.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-700">
                Eine Immobilie, ein Padrón oder eine NIE verschaffen für sich
                genommen keinen automatischen Anspruch auf vollständige
                spanische Gesundheitsversorgung. Maßgeblich sind die
                europäischen Koordinierungsregeln und Ihre persönliche
                Versicherungsposition.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-[30px] bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">
                    Sie arbeiten in Spanien
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                    Häufig spanische Sozialversicherung
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone-700">
                    Arbeitnehmer und Selbstständige, die in Spanien versichert
                    sind, erhalten ihre Gesundheitsansprüche in der Regel über
                    das spanische Sozialversicherungssystem. Bei Entsendung oder
                    Tätigkeit in mehreren Staaten kann eine andere Zuordnung und
                    eine A1-Bescheinigung relevant sein.
                  </p>
                </div>

                <div className="rounded-[30px] bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">
                    Sie beziehen eine deutsche Rente
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                    S1 kann relevant sein
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone-700">
                    Bleibt Deutschland nach den EU-Koordinierungsregeln für Ihre
                    Krankenversicherung zuständig, kann Ihre deutsche
                    Krankenkasse ein S1-Dokument ausstellen, mit dem Sie sich
                    beim zuständigen spanischen Träger registrieren. Bei Renten
                    aus mehreren Staaten kann die Zuständigkeit anders ausfallen.
                  </p>
                </div>

                <div className="rounded-[30px] bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">
                    Sie arbeiten nicht und haben keinen abgeleiteten Anspruch
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                    Umfassende private Deckung kann erforderlich sein
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone-700">
                    Wirtschaftlich nicht aktive EU-Bürger müssen für die
                    Aufenthaltsregistrierung einen umfassenden öffentlichen oder
                    privaten Krankenversicherungsschutz nachweisen. Prüfen Sie
                    Ausschlüsse, Wartezeiten, Selbstbehalte und bestehende
                    Erkrankungen – nicht nur den Monatsbeitrag.
                  </p>
                </div>

                <div className="rounded-[30px] bg-[#e9dfd2] p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#9b743d]">
                    EHIC
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                    Vorübergehender Aufenthalt ist keine Auswanderung
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone-700">
                    Die Europäische Krankenversicherungskarte unterstützt die
                    medizinisch notwendige Versorgung während eines
                    vorübergehenden Aufenthalts. Verwenden Sie sie nicht als
                    alleinige Absicherung für einen dauerhaften Umzug.
                  </p>
                </div>
              </div>

              <p className="mt-8 rounded-[24px] border border-stone-300 bg-white p-6 text-sm leading-relaxed text-stone-600">
                Lassen Sie Ihre konkrete Zuständigkeit vor dem Umzug von Ihrer
                deutschen Krankenkasse und gegebenenfalls der DVKA bestätigen.
                Besonders bei Renten aus mehreren Staaten, Remote Work,
                Entsendung oder Selbstständigkeit kann die Zuordnung vom
                Standardfall abweichen.
              </p>
            </section>

            <section id="beispiele" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Praxisbeispiele
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Drei Beispiele zeigen, warum eine einzige Tagesgrenze nie die
                ganze Antwort liefert.
              </h2>

              <div className="mt-10 space-y-7">
                {exampleCases.map((example) => (
                  <article
                    key={example.title}
                    className="rounded-[32px] bg-white p-8 shadow-sm md:p-10"
                  >
                    <h3 className="font-serif text-3xl text-[#1e2a3a]">
                      {example.title}
                    </h3>
                    <p className="mt-5 text-lg leading-relaxed text-stone-700">
                      {example.facts}
                    </p>
                    <dl className="mt-7 grid gap-5 md:grid-cols-3">
                      <div className="rounded-2xl bg-[#f6f1ea] p-5">
                        <dt className="font-semibold text-[#1e2a3a]">
                          Aufenthalt
                        </dt>
                        <dd className="mt-3 text-sm leading-relaxed text-stone-700">
                          {example.residence}
                        </dd>
                      </div>
                      <div className="rounded-2xl bg-[#f6f1ea] p-5">
                        <dt className="font-semibold text-[#1e2a3a]">
                          Steuern
                        </dt>
                        <dd className="mt-3 text-sm leading-relaxed text-stone-700">
                          {example.tax}
                        </dd>
                      </div>
                      <div className="rounded-2xl bg-[#f6f1ea] p-5">
                        <dt className="font-semibold text-[#1e2a3a]">
                          Deutschland
                        </dt>
                        <dd className="mt-3 text-sm leading-relaxed text-stone-700">
                          {example.germanAdministration}
                        </dd>
                      </div>
                    </dl>
                    <p className="mt-6 border-l-4 border-[#c8a063] pl-5 text-sm leading-relaxed text-stone-700">
                      <strong>Nicht tun:</strong> {example.warning}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section id="fehler" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Korrekturen im Nachhinein vermeiden
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Sechs häufige Fehler beim Leben in Spanien.
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {commonMistakes.map((mistake, index) => (
                  <article
                    key={mistake.title}
                    className="rounded-[28px] bg-white p-7 shadow-sm"
                  >
                    <p className="font-serif text-4xl text-[#c8a063]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl text-[#1e2a3a]">
                      {mistake.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-stone-700">
                      {mistake.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="pt-24">
              <div className="rounded-[38px] bg-[#1e2a3a] p-9 text-white md:p-12">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Nordic Move Spain
                </p>
                <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
                  Beginnen Sie nicht mit Formularen. Beginnen Sie mit einem
                  klaren Wohn- und Lebensplan.
                </h2>

                <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/78">
                  Das Relocation Assessment bringt gewünschte Aufenthaltsdauer,
                  Region, Immobilientyp, Krankenversicherung, Alltag und
                  praktische nächste Schritte zusammen. So passt die
                  Immobilienentscheidung zu der Art, wie Sie tatsächlich in
                  Spanien leben möchten.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    href={internalLinks.relocationAssessment}
                    className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#b48a4f]"
                  >
                    Relocation Assessment starten
                  </Link>
                  <Link
                    href={internalLinks.guides}
                    className="rounded-full border border-white/70 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1e2a3a]"
                  >
                    Weitere Ratgeber ansehen
                  </Link>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-8 pt-24">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Häufig gestellte Fragen
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Fragen zu Residencia, Aufenthaltstagen und Auswanderung.
              </h2>

              <div className="mt-10 space-y-4">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-[24px] bg-white p-6 shadow-sm open:shadow-md"
                  >
                    <summary className="cursor-pointer list-none pr-8 font-serif text-2xl text-[#1e2a3a]">
                      <span className="flex items-start justify-between gap-6">
                        {item.question}
                        <span
                          aria-hidden="true"
                          className="text-[#c8a063] transition group-open:rotate-45"
                        >
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-5 max-w-4xl leading-relaxed text-stone-700">
                      {item.answer}
                    </p>
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
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                Quellen und Methodik
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Auf offiziellen Informationen basiert – nicht auf
                Verkaufsversprechen.
              </h2>
              <p className="mt-6 leading-relaxed text-stone-700">
                Dieser Ratgeber trennt Aufenthaltsrecht, kommunale Anmeldung,
                Steuerrecht und Krankenversicherung bewusst voneinander. Die
                Inhalte wurden am {REVIEWED_DISPLAY} überprüft. Persönliche
                Umstände und spätere Gesetzesänderungen können das Ergebnis
                verändern.
              </p>
              <div className="mt-7">
                <ArrowLink href={internalLinks.relocationAssessment}>
                  Relocation Assessment starten
                </ArrowLink>
              </div>
              <div className="mt-4">
                <ArrowLink href={internalLinks.guides}>
                  Weitere Ratgeber ansehen
                </ArrowLink>
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
                  <p className="font-semibold leading-relaxed text-[#1e2a3a]">
                    {source.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    {source.note}
                  </p>
                  <p className="mt-4 text-sm font-medium text-[#9b743d]">
                    Offizielle Quelle öffnen →
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-[24px] border border-stone-300 bg-white/55 p-6 text-sm leading-relaxed text-stone-600">
            <strong>Hinweis:</strong> Dieser Artikel enthält allgemeine
            Informationen und stellt keine individuelle Rechts-, Steuer-,
            Versicherungs- oder Einwanderungsberatung dar. Lassen Sie vor einer
            Auswanderung Ihre persönliche Wohnsitzsituation, Renten, Einkünfte,
            unternehmerische Aktivitäten, Familiensituation und
            Krankenversicherung von den zuständigen Stellen und qualifizierten
            Beratern prüfen.
          </div>
        </div>
      </section>
    </main>
  );
}