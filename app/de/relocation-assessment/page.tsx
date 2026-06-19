"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { supabase } from "../../lib/supabase";

type Question = {
  id: string;
  section: string;
  title: string;
  type: "single" | "multiple" | "text";
  options?: string[];
  helper?: string;
  optional?: boolean;
  maxSelections?: number;
  exclusiveOptions?: string[];
  showIf?: (answers: Record<string, any>) => boolean;
};

const questions: Question[] = [
  {
    id: "household_profile",
    section: "Ihre PlÃ¤ne",
    title: "Welche Beschreibung passt am besten zu Ihrem Haushalt?",
    type: "single",
    options: [
      "Alleinstehende KÃ¤uferin oder alleinstehender KÃ¤ufer",
      "Paar",
      "Familie mit kleinen Kindern",
      "Familie mit schulpflichtigen Kindern",
      "Mehrgenerationenhaushalt oder Haushalt mit erwachsenen Kindern",
      "Haushalt im Ruhestand oder Teilruhestand",
    ],
  },
  {
    id: "purchase_goal",
    section: "Ihre PlÃ¤ne",
    title: "Was ist Ihr Hauptgrund fÃ¼r einen Immobilienkauf in Spanien?",
    type: "single",
    options: [
      "Dauerhafter Umzug",
      "Zweitwohnsitz",
      "Teilweise in Spanien leben und spÃ¤ter mÃ¶glicherweise umziehen",
      "Investition",
      "Eine Kombination aus LebensqualitÃ¤t und Investition",
      "Ich orientiere mich noch",
    ],
  },
  {
    id: "timeline",
    section: "Ihre PlÃ¤ne",
    title: "Wann mÃ¶chten Sie idealerweise kaufen?",
    type: "single",
    options: [
      "Innerhalb von 6 Monaten",
      "Innerhalb von 12 Monaten",
      "Innerhalb von 24 Monaten",
      "In mehr als 24 Monaten",
      "Ich orientiere mich noch",
    ],
  },
  {
    id: "financing",
    section: "Ihre PlÃ¤ne",
    title: "Wie mÃ¶chten Sie den Immobilienkauf voraussichtlich finanzieren?",
    type: "single",
    options: [
      "Kauf aus Eigenmitteln",
      "Hypothek in Spanien",
      "Hypothek oder Finanzierung in einem anderen Land",
      "Eine Kombination aus Eigenmitteln und Finanzierung",
      "Ich bin noch nicht sicher",
    ],
  },
  {
    id: "budget",
    section: "Ihre PlÃ¤ne",
    title: "Wie hoch ist Ihr ungefÃ¤hres Immobilienbudget?",
    type: "single",
    options: [
      "Unter 300.000 â‚¬",
      "300.000 â‚¬ - 500.000 â‚¬",
      "500.000 â‚¬ - 750.000 â‚¬",
      "750.000 â‚¬ - 1.000.000 â‚¬",
      "1.000.000 â‚¬ - 2.000.000 â‚¬",
      "2.000.000 â‚¬ - 5.000.000 â‚¬",
      "Ãœber 5.000.000 â‚¬",
    ],
  },
  {
    id: "budget_scope",
    section: "Ihre PlÃ¤ne",
    title: "Welche Kosten sind in diesem Budget enthalten?",
    type: "single",
    options: [
      "Kaufpreis, Steuern, Anwaltskosten und alle Kaufnebenkosten",
      "Kaufpreis und Kaufnebenkosten, aber keine Renovierung",
      "Nur der Kaufpreis",
      "Ich habe ein separates Renovierungsbudget",
      "Ich bin noch nicht sicher",
    ],
  },
  {
    id: "property_type",
    section: "Ihre Immobilie",
    title: "Welche Immobilientypen kommen fÃ¼r Sie ernsthaft infrage?",
    type: "multiple",
    maxSelections: 3,
    helper: "WÃ¤hlen Sie hÃ¶chstens 3 Optionen.",
    options: [
      "Freistehende Villa",
      "Luxusvilla",
      "Apartment",
      "Penthouse",
      "Reihenhaus oder DoppelhaushÃ¤lfte",
      "Finca oder Landhaus",
      "Neubauprojekt",
      "Immobilie in einer Golfanlage",
    ],
  },
  {
    id: "condition",
    section: "Ihre Immobilie",
    title: "Welcher Zustand der Immobilie kommt fÃ¼r Sie infrage?",
    type: "multiple",
    maxSelections: 3,
    helper: "WÃ¤hlen Sie hÃ¶chstens 3 Optionen.",
    options: [
      "Neubau",
      "KÃ¼rzlich renoviert",
      "Sofort bezugsfertig",
      "Leichte Renovierung ist akzeptabel",
      "Umfangreiche Renovierung ist akzeptabel",
    ],
  },
  {
    id: "bedrooms",
    section: "Ihre Immobilie",
    title: "Wie viele Schlafzimmer benÃ¶tigen Sie mindestens?",
    type: "single",
    options: ["1", "2", "3", "4", "5", "6+"],
  },
  {
    id: "home_features",
    section: "Ihre Immobilie",
    title: "Welche Merkmale der Immobilie sind Ihnen am wichtigsten?",
    type: "multiple",
    maxSelections: 8,
    helper: "WÃ¤hlen Sie hÃ¶chstens 8 Optionen.",
    options: [
      "Privater Swimmingpool",
      "Gemeinschaftspool",
      "GroÃŸer Garten",
      "Pflegeleichter AuÃŸenbereich",
      "Meerblick",
      "Panoramischer Meerblick",
      "Separater GÃ¤stebereich",
      "AuÃŸenkÃ¼che oder Bereich fÃ¼r GÃ¤ste",
      "Ebenerdiges oder barrierearmes Wohnen",
      "Aufzug",
      "Geschlossene Wohnanlage",
      "Private Garage oder sicherer Parkplatz",
      "LademÃ¶glichkeit fÃ¼r ein Elektroauto",
      "Arbeitszimmer oder Homeoffice",
      "Viel Wintersonne oder SÃ¼dausrichtung",
      "Schutz vor starkem Wind",
    ],
  },
  {
    id: "maintenance",
    section: "Ihre Immobilie",
    title: "Wie viel Instandhaltung mÃ¶chten Sie Ã¼bernehmen?",
    type: "single",
    options: [
      "Sehr wenig â€” ich bevorzuge eine pflegeleichte Immobilie",
      "Ein moderater Pflegeaufwand ist akzeptabel",
      "Garten- und Poolpflege sind akzeptabel",
      "Ich kann eine groÃŸe Immobilie mit GrundstÃ¼ck verwalten",
      "Ich wÃ¼rde eine professionelle Immobilienverwaltung beauftragen",
    ],
  },
  {
    id: "preferred_setting",
    section: "Lage und Erreichbarkeit",
    title: "Welche Lagen sprechen Sie am meisten an?",
    type: "multiple",
    maxSelections: 4,
    helper: "WÃ¤hlen Sie hÃ¶chstens 4 Optionen.",
    options: [
      "Direkt am Meer",
      "Strand in fuÃŸlÃ¤ufiger Entfernung",
      "Wohngebiet mit Meerblick",
      "Stadt- oder Dorfzentrum",
      "Historisches Zentrum",
      "Ruhige Wohnanlage",
      "Golfumgebung",
      "Yachthafen oder Hafengebiet",
      "LÃ¤ndliche Umgebung",
      "Berg- oder Naturgebiet",
      "Exklusive Wohnlage",
    ],
  },
  {
    id: "daily_mobility",
    section: "Lage und Erreichbarkeit",
    title: "Wie mÃ¶chten Sie tÃ¤gliche Einrichtungen erreichen?",
    type: "single",
    options: [
      "Ãœberwiegend zu FuÃŸ",
      "Mit dem Fahrrad oder E-Bike",
      "Eine kurze Autofahrt ist akzeptabel",
      "TÃ¤gliches Autofahren ist kein Problem",
      "Das ist nicht wichtig",
    ],
  },
  {
    id: "access_terrain",
    section: "Lage und Erreichbarkeit",
    title: "Welche Zufahrts- und GelÃ¤ndebedingungen sind fÃ¼r Sie akzeptabel?",
    type: "multiple",
    maxSelections: 4,
    helper: "WÃ¤hlen Sie alle Bedingungen aus, die fÃ¼r Sie akzeptabel sind.",
    options: [
      "Nur flache und leicht zugÃ¤ngliche Lagen",
      "Leichte Hanglagen sind akzeptabel",
      "Steile StraÃŸen sind akzeptabel",
      "Schmale WohnstraÃŸen sind akzeptabel",
      "LÃ¤ndliche oder teilweise unbefestigte Zufahrt ist akzeptabel",
      "Treppen innerhalb oder auÃŸerhalb der Immobilie sind akzeptabel",
      "Barrierearme Erreichbarkeit ist zwingend erforderlich",
    ],
  },
  {
    id: "airport_access",
    section: "Lage und Erreichbarkeit",
    title: "Wie lang darf die maximale Fahrzeit zum Flughafen sein?",
    type: "single",
    options: [
      "Bis zu 30 Minuten",
      "Bis zu 45 Minuten",
      "Bis zu 60 Minuten",
      "Bis zu 90 Minuten",
      "Keine PrÃ¤ferenz",
    ],
  },
  {
    id: "school_needs",
    section: "Lage und Erreichbarkeit",
    title: "Welche Schulangebote sind fÃ¼r Ihre Familie relevant?",
    type: "multiple",
    maxSelections: 3,
    helper: "WÃ¤hlen Sie hÃ¶chstens 3 Optionen.",
    options: [
      "Ã–ffentliche spanische Schule",
      "Private spanische Schule",
      "Zweisprachige Schule",
      "Internationale Schule",
      "Onlineunterricht oder Unterricht zu Hause",
      "Ich bin noch nicht sicher",
    ],
    showIf: (answers) =>
      answers.household_profile === "Familie mit kleinen Kindern" ||
      answers.household_profile === "Familie mit schulpflichtigen Kindern",
  },
  {
    id: "healthcare_access",
    section: "Lage und Erreichbarkeit",
    title:
      "Welche Erreichbarkeit medizinischer Versorgung gibt Ihnen ein gutes GefÃ¼hl?",
    type: "single",
    options: [
      "Krankenhaus und englischsprachige medizinische Versorgung innerhalb von etwa 15 Minuten",
      "Krankenhaus und englischsprachige medizinische Versorgung innerhalb von etwa 30 Minuten",
      "Eine lokale Arztpraxis und Apotheke in der NÃ¤he sind ausreichend",
      "Der Zugang zu privater Gesundheitsversorgung ist wichtiger als die Entfernung",
      "Die medizinische Versorgung ist kein entscheidender Standortfaktor",
    ],
  },
  {
    id: "accessibility",
    section: "Lage und Erreichbarkeit",
    title: "Wie wichtig ist eine langfristig barrierearme Immobilie?",
    type: "single",
    options: [
      "Unverzichtbar â€” wenige Stufen und ein einfacher Zugang sind erforderlich",
      "Sehr wichtig im Hinblick auf die Zukunft",
      "Bevorzugt, aber nicht zwingend erforderlich",
      "Nicht wichtig",
    ],
  },
  {
    id: "internet",
    section: "Lage und Erreichbarkeit",
    title:
      "Wie wichtig ist eine zuverlÃ¤ssige und schnelle Internetverbindung?",
    type: "single",
    options: [
      "Unverzichtbar fÃ¼r Homeoffice oder Unternehmen",
      "Sehr wichtig",
      "Praktisch, aber nicht zwingend erforderlich",
      "Nicht wichtig",
    ],
  },
  {
    id: "community_mix",
    section: "Gemeinschaft und Alltag",
    title:
      "In welcher Zusammensetzung der Nachbarschaft wÃ¼rden Sie sich am wohlsten fÃ¼hlen?",
    type: "single",
    options: [
      "Ãœberwiegend spanische Einheimische",
      "Eine ausgewogene Mischung aus spanischen und internationalen Bewohnern",
      "Ãœberwiegend internationale Bewohner",
      "Eine starke Gemeinschaft mit meiner Sprache oder NationalitÃ¤t",
      "Ich habe keine PrÃ¤ferenz",
    ],
  },
  {
    id: "neighbour_contact",
    section: "Gemeinschaft und Alltag",
    title: "Wie viel Kontakt mÃ¶chten Sie idealerweise mit Ihren Nachbarn haben?",
    type: "single",
    options: [
      "Eine aktive und gesellige Nachbarschaft",
      "RegelmÃ¤ÃŸiger freundlicher Kontakt bei ausreichender PrivatsphÃ¤re",
      "Nur gelegentlicher Kontakt",
      "Maximale PrivatsphÃ¤re und sehr wenig Kontakt zu Nachbarn",
      "Ich habe keine PrÃ¤ferenz",
    ],
  },
  {
    id: "privacy_level",
    section: "Gemeinschaft und Alltag",
    title:
      "Wie viel Abstand und PrivatsphÃ¤re wÃ¼nschen Sie gegenÃ¼ber NachbargrundstÃ¼cken?",
    type: "single",
    options: [
      "Maximale PrivatsphÃ¤re ohne direkte Nachbarn",
      "Freistehende Immobilie mit angenehmem Abstand zu Nachbarn",
      "Eine Wohnanlage mit Nachbarn in der NÃ¤he ist in Ordnung",
      "Ein Apartment oder eine stÃ¤dtische Umgebung ist in Ordnung",
      "Ich habe keine PrÃ¤ferenz",
    ],
  },
  {
    id: "seasonal_tourism",
    section: "Gemeinschaft und Alltag",
    title: "Wie stehen Sie zu saisonalem Tourismus und sommerlicher Betriebsamkeit?",
    type: "single",
    options: [
      "Ich mÃ¶chte ganzjÃ¤hrig in einer ruhigen Wohngegend leben",
      "Etwas saisonale AktivitÃ¤t ist akzeptabel",
      "Ich mag eine lebendige AtmosphÃ¤re im Sommer",
      "Ich bevorzuge eine aktive touristische Umgebung",
      "Ich habe keine PrÃ¤ferenz",
    ],
  },
  {
    id: "year_round_environment",
    section: "Gemeinschaft und Alltag",
    title: "Welche Angebote sollen auch im Winter verfÃ¼gbar sein?",
    type: "multiple",
    maxSelections: 5,
    helper: "WÃ¤hlen Sie hÃ¶chstens 5 Optionen.",
    options: [
      "Restaurants und CafÃ©s",
      "GeschÃ¤fte und SupermÃ¤rkte",
      "Medizinische Versorgung",
      "Sport- und Fitnesseinrichtungen",
      "Soziale AktivitÃ¤ten",
      "Internationales Gemeinschaftsleben",
      "Kulturelle Veranstaltungen",
      "Ein lebendiges Stadtzentrum",
      "Das ist nicht wichtig",
    ],
    exclusiveOptions: ["Das ist nicht wichtig"],
  },
  {
    id: "lifestyle",
    section: "Gemeinschaft und Alltag",
    title:
      "Welche AktivitÃ¤ten und Lebensstilelemente sind Ihnen am wichtigsten?",
    type: "multiple",
    maxSelections: 6,
    helper: "WÃ¤hlen Sie hÃ¶chstens 6 Optionen.",
    options: [
      "Strand und Schwimmen",
      "Spazieren und Wandern",
      "Radfahren",
      "Golf",
      "Tennis oder Padel",
      "Segeln oder Wassersport",
      "Leben rund um den Yachthafen",
      "Fitness, Yoga oder Wellness",
      "Lokale spanische Gastronomie und MÃ¤rkte",
      "Gehobene Gastronomie und Wein",
      "Kunst und Kultur",
      "GeschÃ¤ftliche oder berufliche Kontakte",
      "AktivitÃ¤ten fÃ¼r Familien",
      "Ruhiges Leben zu Hause",
    ],
  },
  {
    id: "pets",
    section: "Gemeinschaft und Alltag",
    title: "Werden Haustiere zu Ihrem Leben in Spanien gehÃ¶ren?",
    type: "single",
    options: [
      "Keine Haustiere",
      "Ein Hund oder mehrere Hunde",
      "Eine Katze oder mehrere Katzen",
      "Andere oder mehrere verschiedene Haustiere",
    ],
  },
  {
    id: "pet_needs",
    section: "Gemeinschaft und Alltag",
    title: "Welche Bedingungen sind fÃ¼r Ihre Haustiere wichtig?",
    type: "multiple",
    maxSelections: 4,
    helper: "WÃ¤hlen Sie hÃ¶chstens 4 Optionen.",
    options: [
      "Sicher eingezÃ¤unter privater Garten",
      "Spazierwege in der NÃ¤he",
      "Zugang zu einem hundefreundlichen Strand",
      "Tierarzt in der NÃ¤he",
      "Ruhige Umgebung",
      "Haustierfreundliche Gemeinschaftsregeln",
    ],
    showIf: (answers) =>
      answers.pets && answers.pets !== "Keine Haustiere",
  },
  {
    id: "noise_tolerance",
    section: "MÃ¶gliche Bedenken",
    title: "Wie ruhig muss Ihre ideale Umgebung sein?",
    type: "single",
    options: [
      "Extrem ruhig â€” minimale HintergrundgerÃ¤usche sind unverzichtbar",
      "Sehr ruhig, mit nur gelegentlicher lokaler AktivitÃ¤t",
      "Etwas alltÃ¤glicher UmgebungslÃ¤rm ist akzeptabel",
      "Eine lebendige Umgebung ist akzeptabel",
      "LÃ¤rm ist fÃ¼r mich kein wichtiger Faktor",
    ],
  },
  {
    id: "unacceptable_noise",
    section: "MÃ¶gliche Bedenken",
    title: "Welche LÃ¤rmquellen wÃ¼rden Ihre Entscheidung stark beeinflussen?",
    type: "multiple",
    maxSelections: 5,
    helper: "WÃ¤hlen Sie hÃ¶chstens 5 Optionen.",
    options: [
      "VerkehrslÃ¤rm von viel befahrenen StraÃŸen oder Autobahnen",
      "LÃ¤rm von Bars, Restaurants oder Nachtleben",
      "Ferienvermietung und hÃ¤ufig wechselnde GÃ¤ste",
      "Starker Tourismus im Sommer",
      "BaulÃ¤rm",
      "FluglÃ¤rm",
      "Hunde oder regelmÃ¤ÃŸiger NachbarschaftslÃ¤rm",
      "Schulen, Sportanlagen oder SpielplÃ¤tze",
      "Kirchenglocken, Feste oder lokale Veranstaltungen",
      "Keine dieser LÃ¤rmquellen wÃ¤re ein groÃŸes Problem",
    ],
    exclusiveOptions: [
      "Keine dieser LÃ¤rmquellen wÃ¤re ein groÃŸes Problem",
    ],
  },
  {
    id: "infrastructure_dealbreakers",
    section: "MÃ¶gliche Bedenken",
    title:
      "Welche sichtbaren Infrastrukturelemente wÃ¼rden Ihre Entscheidung negativ beeinflussen?",
    type: "multiple",
    maxSelections: 5,
    helper: "WÃ¤hlen Sie hÃ¶chstens 5 Optionen.",
    options: [
      "Hochspannungsmasten",
      "Oberirdische Stromleitungen oder Strommasten direkt an der Immobilie",
      "Mobilfunk- oder Kommunikationsmasten",
      "Sichtbare stark befahrene StraÃŸen",
      "GroÃŸe ApartmentgebÃ¤ude in der NÃ¤he",
      "Industrie- oder GewerbegebÃ¤ude",
      "Aktive Baustellen oder unbebaute GrundstÃ¼cke",
      "Direkte Einsicht durch benachbarte Immobilien",
      "Keine dieser Gegebenheiten wÃ¤re ein groÃŸes Problem",
    ],
    exclusiveOptions: [
      "Keine dieser Gegebenheiten wÃ¤re ein groÃŸes Problem",
    ],
  },
  {
    id: "environmental_concerns",
    section: "MÃ¶gliche Bedenken",
    title:
      "Welche Umwelt- oder GrundstÃ¼cksrisiken wÃ¼rden Sie besonders beunruhigen?",
    type: "multiple",
    maxSelections: 5,
    helper: "WÃ¤hlen Sie hÃ¶chstens 5 Optionen.",
    options: [
      "ÃœberschwemmungsgefÃ¤hrdete Gebiete",
      "ErhÃ¶htes Waldbrandrisiko",
      "Steile GrundstÃ¼cke oder groÃŸe StÃ¼tzmauern",
      "Starke Windexposition",
      "Hohe Luftfeuchtigkeit oder Feuchtigkeitsprobleme",
      "KÃ¼stenerosion oder extreme Meeresexposition",
      "LÃ¤ndliche Versorgungssysteme wie KlÃ¤rgruben oder Wassertanks",
      "Keine dieser Gegebenheiten wÃ¤re ein groÃŸes Problem",
    ],
    exclusiveOptions: [
      "Keine dieser Gegebenheiten wÃ¤re ein groÃŸes Problem",
    ],
  },
  {
    id: "rental_intent",
    section: "Vermietung und abschlieÃŸende PrioritÃ¤ten",
    title: "MÃ¶chten Sie die Immobilie vermieten?",
    type: "single",
    options: [
      "Nein",
      "Gelegentlich an Familie oder Freunde",
      "Gelegentliche Ferienvermietung",
      "RegelmÃ¤ÃŸige Ferienvermietung",
      "Langzeitvermietung",
      "Mieteinnahmen sind ein wichtiger Teil meines Plans",
      "Ich bin noch nicht sicher",
    ],
  },
  {
    id: "rental_priorities",
    section: "Vermietung und abschlieÃŸende PrioritÃ¤ten",
    title: "Welche Vermietungsfaktoren sind Ihnen am wichtigsten?",
    type: "multiple",
    maxSelections: 4,
    helper: "WÃ¤hlen Sie hÃ¶chstens 4 Optionen.",
    options: [
      "Eine Lage mit hoher Mietnachfrage",
      "MÃ¶glichkeit einer touristischen Vermietungslizenz",
      "Gemeinschaftsregeln, die Vermietung erlauben",
      "Professionelle Vermietungsverwaltung",
      "Gute Erreichbarkeit von Flughafen und Strand fÃ¼r GÃ¤ste",
      "Ein Gleichgewicht zwischen Mieteinnahmen und eigener Nutzung",
    ],
    showIf: (answers) =>
      answers.rental_intent &&
      answers.rental_intent !== "Nein" &&
      answers.rental_intent !== "Gelegentlich an Familie oder Freunde",
  },
  {
    id: "top_priorities",
    section: "Vermietung und abschlieÃŸende PrioritÃ¤ten",
    title: "Welche Faktoren haben fÃ¼r Sie die hÃ¶chste PrioritÃ¤t?",
    type: "multiple",
    maxSelections: 6,
    helper: "WÃ¤hlen Sie Ihre 6 wichtigsten PrioritÃ¤ten.",
    options: [
      "Ruhige Umgebung",
      "PrivatsphÃ¤re",
      "Sicherheit",
      "FuÃŸlÃ¤ufige Erreichbarkeit",
      "StrandnÃ¤he",
      "Meerblick",
      "Internationale Gemeinschaft",
      "Authentische spanische AtmosphÃ¤re",
      "Soziales Leben in der Nachbarschaft",
      "Medizinische Versorgung",
      "FlughafennÃ¤he",
      "GanzjÃ¤hrig verfÃ¼gbare Dienstleistungen",
      "Schnelles Internet",
      "Barrierearme Erreichbarkeit",
      "Geringer Pflegeaufwand",
      "GroÃŸer Garten",
      "Golf",
      "NÃ¤he zum Yachthafen",
      "Geeignet fÃ¼r Familien und Schulen",
      "Langfristige Wertsteigerung",
      "Vermietungspotenzial",
    ],
  },
  {
    id: "absolute_dealbreakers",
    section: "Vermietung und abschlieÃŸende PrioritÃ¤ten",
    title:
      "Welche Faktoren wÃ¼rden eine Region oder Immobilie fÃ¼r Sie sofort ausschlieÃŸen?",
    type: "multiple",
    maxSelections: 6,
    helper: "WÃ¤hlen Sie hÃ¶chstens 6 absolute Ausschlusskriterien.",
    options: [
      "Verkehrs- oder AutobahnlÃ¤rm",
      "LÃ¤rm von Nachtleben oder Restaurants",
      "Hochspannungsmasten oder oberirdische Stromleitungen",
      "Direkte Einsicht durch Nachbarn",
      "Sehr nahe benachbarte Immobilien",
      "Steile oder schwierige Zufahrt",
      "Kein privater Parkplatz",
      "Starker Tourismus im Sommer",
      "Abgelegene Lage",
      "Hohe Gemeinschaftskosten",
      "Umfangreiche Renovierungsarbeiten",
      "Keine zuverlÃ¤ssige schnelle Internetverbindung",
      "Wenig geÃ¶ffnete Einrichtungen im Winter",
      "GroÃŸe Entfernung zur medizinischen Versorgung",
      "Ãœberschwemmungs- oder Waldbrandrisiko",
      "Keiner dieser Punkte ist ein absolutes Ausschlusskriterium",
    ],
    exclusiveOptions: [
      "Keiner dieser Punkte ist ein absolutes Ausschlusskriterium",
    ],
  },
  {
    id: "additional_notes",
    section: "Vermietung und abschlieÃŸende PrioritÃ¤ten",
    title:
      "Gibt es noch etwas, das dafÃ¼r sorgen wÃ¼rde, dass sich eine Region oder Immobilie fÃ¼r Sie besonders richtig â€” oder vollkommen ungeeignet â€” anfÃ¼hlt?",
    type: "text",
    optional: true,
    helper:
      "Optional. ErgÃ¤nzen Sie hier weitere WÃ¼nsche, Bedenken oder Ausschlusskriterien.",
  },
];

export default function RelocationAssessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [finished, setFinished] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const visibleQuestions = useMemo(
    () =>
      questions.filter(
        (question) => !question.showIf || question.showIf(answers)
      ),
    [answers]
  );

  const current = visibleQuestions[step];

  const progress = visibleQuestions.length
    ? Math.round(((step + 1) / visibleQuestions.length) * 100)
    : 0;

  useEffect(() => {
    if (step > visibleQuestions.length - 1) {
      setStep(Math.max(0, visibleQuestions.length - 1));
    }
  }, [step, visibleQuestions.length]);

  function selectSingle(value: string) {
    if (!current) return;

    setAnswers((previous) => ({
      ...previous,
      [current.id]: value,
    }));
  }

  function toggleMultiple(value: string) {
    if (!current) return;

    const currentAnswers: string[] = answers[current.id] || [];
    const exclusiveOptions = current.exclusiveOptions || [];

    if (currentAnswers.includes(value)) {
      setAnswers((previous) => ({
        ...previous,
        [current.id]: currentAnswers.filter((item) => item !== value),
      }));

      return;
    }

    if (exclusiveOptions.includes(value)) {
      setAnswers((previous) => ({
        ...previous,
        [current.id]: [value],
      }));

      return;
    }

    const answersWithoutExclusiveOptions = currentAnswers.filter(
      (item) => !exclusiveOptions.includes(item)
    );

    if (
      current.maxSelections &&
      answersWithoutExclusiveOptions.length >= current.maxSelections
    ) {
      alert(
        `Bitte wÃ¤hlen Sie hÃ¶chstens ${current.maxSelections} Optionen aus.`
      );
      return;
    }

    setAnswers((previous) => ({
      ...previous,
      [current.id]: [...answersWithoutExclusiveOptions, value],
    }));
  }

  function setTextValue(value: string) {
    if (!current) return;

    setAnswers((previous) => ({
      ...previous,
      [current.id]: value,
    }));
  }

  function questionHasAnswer(question: Question) {
    if (question.optional) return true;

    const answer = answers[question.id];

    if (question.type === "multiple") {
      return Array.isArray(answer) && answer.length > 0;
    }

    if (question.type === "text") {
      return typeof answer === "string" && answer.trim().length > 0;
    }

    return typeof answer === "string" && answer.length > 0;
  }

  function nextStep() {
    if (!current) return;

    if (!questionHasAnswer(current)) {
      alert(
        "Bitte wÃ¤hlen Sie eine Antwort aus oder geben Sie eine Antwort ein, bevor Sie fortfahren."
      );
      return;
    }

    if (step < visibleQuestions.length - 1) {
      setStep((previous) => previous + 1);
    } else {
      setFinished(true);
    }
  }

  function previousStep() {
    if (step > 0) {
      setStep((previous) => previous - 1);
    }
  }

  async function submitRequest() {
    const name = contact.name.trim();
    const email = contact.email.trim();
    const phone = contact.phone.trim();

    if (!name || !email) {
      alert("Bitte geben Sie Ihren Namen und Ihre E-Mail-Adresse ein.");
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      alert("Bitte geben Sie eine gÃ¼ltige E-Mail-Adresse ein.");
      return;
    }

    if (!consent) {
      alert(
        "Bitte bestÃ¤tigen Sie, dass wir Ihre Antworten fÃ¼r Ihren persÃ¶nlichen Bericht verwenden und Sie bezÃ¼glich Ihrer Anfrage kontaktieren dÃ¼rfen."
      );
      return;
    }

    const visibleQuestionIds = new Set(
      visibleQuestions.map((question) => question.id)
    );

    const filteredAnswers = Object.fromEntries(
      Object.entries(answers).filter(([questionId]) =>
        visibleQuestionIds.has(questionId)
      )
    );

    const answersForStorage = {
      ...filteredAnswers,
      assessment_meta: {
        language: "de",
        version: "2.0",
      },
    };

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("relocation_leads")
        .insert([
          {
            name,
            email,
            phone,
            answers: answersForStorage,
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) {
        alert(
          "Ihre Anfrage konnte nicht gespeichert werden.\n\n" +
            "Nachricht: " +
            error.message +
            "\n\nDetails: " +
            (error.details || "Nicht angegeben") +
            "\n\nHinweis: " +
            (error.hint || "Nicht angegeben") +
            "\n\nCode: " +
            error.code
        );

        return;
      }

      setSubmitted(true);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Ein unbekannter Fehler ist aufgetreten.";

      alert(
        "Ihre Anfrage konnte nicht gespeichert werden.\n\n" + message
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main style={styles.page}>
        <div style={styles.card}>
          <p style={styles.sectionLabel}>Anfrage erhalten</p>

          <h1 style={styles.title}>Vielen Dank fÃ¼r Ihre Anfrage</h1>

          <p style={styles.text}>
            Vielen Dank, {contact.name}. Wir haben Ihre Costa Blanca Area Match
            Analyse erhalten und verwenden Ihre Antworten, um Ihren
            persÃ¶nlichen Bericht zu erstellen.
          </p>

          <p style={styles.highlight}>{contact.email}</p>

          {contact.phone.trim() && (
            <p style={styles.text}>
              Falls wir einzelne Antworten mit Ihnen klÃ¤ren mÃ¶chten, kÃ¶nnen wir
              Sie unter {contact.phone} kontaktieren.
            </p>
          )}
        </div>
      </main>
    );
  }

  if (finished) {
    return (
      <main style={styles.page}>
        <div style={styles.card}>
          <p style={styles.sectionLabel}>Ihr persÃ¶nlicher Bericht</p>

          <h1 style={styles.title}>
            Erhalten Sie Ihren persÃ¶nlichen Area Match Report
          </h1>

          <p style={styles.text}>
            Geben Sie unten Ihre Kontaktdaten ein. Wir verwenden Ihre Antworten,
            um Ihren persÃ¶nlichen Costa Blanca Area Match Report zu erstellen
            und an Ihre E-Mail-Adresse zu senden.
          </p>

          <div style={styles.form}>
            <label style={styles.fieldLabel}>
              Name

              <input
                placeholder="Ihr Name"
                value={contact.name}
                onChange={(event) =>
                  setContact({
                    ...contact,
                    name: event.target.value,
                  })
                }
                style={styles.input}
              />
            </label>

            <label style={styles.fieldLabel}>
              E-Mail-Adresse

              <input
                placeholder="Ihre E-Mail-Adresse"
                type="email"
                value={contact.email}
                onChange={(event) =>
                  setContact({
                    ...contact,
                    email: event.target.value,
                  })
                }
                style={styles.input}
              />
            </label>

            <label style={styles.fieldLabel}>
              Telefonnummer{" "}
              <span style={styles.optionalText}>(optional)</span>

              <input
                placeholder="Ihre Telefonnummer"
                type="tel"
                value={contact.phone}
                onChange={(event) =>
                  setContact({
                    ...contact,
                    phone: event.target.value,
                  })
                }
                style={styles.input}
              />
            </label>

            <label style={styles.checkboxRow}>
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                style={styles.checkbox}
              />

              <span style={styles.privacyText}>
                Ich stimme zu, dass Nordic Move Spain meine Antworten verwenden
                darf, um meinen persÃ¶nlichen Area Match Report zu erstellen und
                mich bezÃ¼glich dieser Anfrage zu kontaktieren.
              </span>
            </label>

            <div style={styles.navigation}>
              <button
                type="button"
                onClick={() => setFinished(false)}
                style={styles.navButton}
              >
                ZurÃ¼ck zu den Fragen
              </button>

              <button
                type="button"
                onClick={submitRequest}
                style={{
                  ...styles.nextButton,
                  ...(isSubmitting ? styles.buttonDisabled : {}),
                }}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Wird gesendet..."
                  : "PersÃ¶nlichen Bericht anfordern"}
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!current) {
    return null;
  }

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <div style={styles.progressWrapper}>
          <div
            style={{
              ...styles.progressBar,
              width: `${progress}%`,
            }}
          />
        </div>

        <p style={styles.stepText}>
          Frage {step + 1} von {visibleQuestions.length}
        </p>

        <p style={styles.sectionLabel}>{current.section}</p>

        <h1 style={styles.title}>{current.title}</h1>

        {current.helper && (
          <p style={styles.helperText}>{current.helper}</p>
        )}

        {current.type === "single" && (
          <div style={styles.options}>
            {current.options?.map((option) => {
              const selected = answers[current.id] === option;

              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => selectSingle(option)}
                  style={{
                    ...styles.optionButton,
                    ...(selected ? styles.selected : {}),
                  }}
                >
                  {option}
                </button>
              );
            })}
          </div>
        )}

        {current.type === "multiple" && (
          <div style={styles.options}>
            {current.options?.map((option) => {
              const selected = (answers[current.id] || []).includes(option);

              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggleMultiple(option)}
                  style={{
                    ...styles.optionButton,
                    ...(selected ? styles.selected : {}),
                  }}
                >
                  {selected ? "âœ“ " : ""}
                  {option}
                </button>
              );
            })}
          </div>
        )}

        {current.type === "text" && (
          <textarea
            value={answers[current.id] || ""}
            onChange={(event) => setTextValue(event.target.value)}
            placeholder="ErgÃ¤nzen Sie hier weitere WÃ¼nsche, Bedenken oder Ausschlusskriterien."
            rows={7}
            style={styles.textarea}
          />
        )}

        <div style={styles.navigation}>
          <button
            type="button"
            onClick={previousStep}
            disabled={step === 0}
            style={{
              ...styles.navButton,
              ...(step === 0 ? styles.buttonDisabled : {}),
            }}
          >
            ZurÃ¼ck
          </button>

          <button
            type="button"
            onClick={nextStep}
            style={styles.nextButton}
          >
            {step === visibleQuestions.length - 1
              ? "Weiter zu den Kontaktdaten"
              : "Weiter"}
          </button>
        </div>
      </div>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f5efe7",
    padding: "60px 20px",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    maxWidth: 900,
    margin: "0 auto",
    background: "#ffffff",
    padding: 40,
    borderRadius: 28,
    boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
  },

  progressWrapper: {
    height: 8,
    background: "#eee",
    borderRadius: 99,
    overflow: "hidden",
    marginBottom: 24,
  },

  progressBar: {
    height: "100%",
    background: "#1f4d3a",
    transition: "width 0.3s ease",
  },

  stepText: {
    color: "#777",
    marginBottom: 10,
  },

  sectionLabel: {
    color: "#b48a4f",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    marginBottom: 12,
  },

  title: {
    fontSize: 34,
    lineHeight: 1.2,
    marginBottom: 16,
    color: "#1f2933",
  },

  helperText: {
    color: "#666",
    fontSize: 15,
    lineHeight: 1.5,
    marginBottom: 24,
  },

  text: {
    fontSize: 18,
    lineHeight: 1.6,
    color: "#4b5563",
  },

  highlight: {
    fontSize: 20,
    fontWeight: 700,
    color: "#1f4d3a",
    marginTop: 20,
    marginBottom: 20,
  },

  options: {
    display: "grid",
    gap: 14,
    marginTop: 24,
  },

  optionButton: {
    padding: "18px 20px",
    borderRadius: 16,
    border: "1px solid #ddd",
    background: "#fff",
    color: "#1f2933",
    fontSize: 17,
    lineHeight: 1.4,
    textAlign: "left",
    cursor: "pointer",
  },

  selected: {
    background: "#1f4d3a",
    color: "#fff",
    border: "1px solid #1f4d3a",
  },

  textarea: {
    width: "100%",
    boxSizing: "border-box",
    padding: "18px 20px",
    borderRadius: 16,
    border: "1px solid #ddd",
    fontSize: 17,
    lineHeight: 1.5,
    resize: "vertical",
    marginTop: 24,
    fontFamily: "Arial, sans-serif",
  },

  navigation: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 35,
    gap: 16,
    flexWrap: "wrap",
  },

  navButton: {
    padding: "14px 24px",
    borderRadius: 12,
    border: "1px solid #ccc",
    background: "#fff",
    color: "#1f2933",
    cursor: "pointer",
  },

  nextButton: {
    padding: "14px 28px",
    borderRadius: 12,
    border: "none",
    background: "#1f4d3a",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 700,
  },

  buttonDisabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  form: {
    display: "grid",
    gap: 18,
    marginTop: 30,
  },

  fieldLabel: {
    display: "grid",
    gap: 8,
    color: "#1f2933",
    fontSize: 15,
    fontWeight: 700,
  },

  optionalText: {
    color: "#777",
    fontSize: 13,
    fontWeight: 400,
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "18px 20px",
    borderRadius: 14,
    border: "1px solid #ddd",
    fontSize: 17,
  },

  checkboxRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    marginTop: 6,
  },

  checkbox: {
    width: 18,
    height: 18,
    marginTop: 3,
  },

  privacyText: {
    fontSize: 14,
    lineHeight: 1.5,
    color: "#666",
  },
};
