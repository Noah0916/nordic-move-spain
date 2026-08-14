"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { supabase } from "../../lib/supabase";


type DataLayerEvent = {
  event: string;
  [key: string]: unknown;
};

function pushDataLayerEvent(payload: DataLayerEvent) {
  if (typeof window === "undefined") return;

  const trackingWindow = window as typeof window & {
    dataLayer?: DataLayerEvent[];
  };

  trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
  trackingWindow.dataLayer.push(payload);
}

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
    section: "Ihre Pläne",
    title: "Welche Beschreibung passt am besten zu Ihrem Haushalt?",
    type: "single",
    options: [
      "Alleinstehende Käuferin oder alleinstehender Käufer",
      "Paar",
      "Familie mit kleinen Kindern",
      "Familie mit schulpflichtigen Kindern",
      "Mehrgenerationenhaushalt oder Haushalt mit erwachsenen Kindern",
      "Haushalt im Ruhestand oder Teilruhestand",
    ],
  },
  {
    id: "purchase_goal",
    section: "Ihre Pläne",
    title: "Was ist Ihr Hauptgrund für einen Immobilienkauf in Spanien?",
    type: "single",
    options: [
      "Dauerhafter Umzug",
      "Zweitwohnsitz",
      "Teilweise in Spanien leben und später möglicherweise umziehen",
      "Investition",
      "Eine Kombination aus Lebensqualität und Investition",
      "Ich orientiere mich noch",
    ],
  },
  {
    id: "decision_style",
    section: "Ihre Pläne",
    title: "Wie möchten Sie Ihre Entscheidung treffen?",
    type: "single",
    options: [
      "Ich möchte zuerst die richtige Region verstehen",
      "Ich möchte Regionen und Immobilien parallel vergleichen",
      "Ich habe bereits eine bevorzugte Region und möchte passende Immobilien sehen",
      "Ich brauche vor allem Klarheit über Risiken und praktische Unterschiede",
      "Ich bin noch sehr früh in der Orientierung",
    ],
  },
  {
    id: "time_in_spain",
    section: "Ihre Pläne",
    title: "Wie viel Zeit möchten Sie voraussichtlich pro Jahr in Spanien verbringen?",
    type: "single",
    options: [
      "Weniger als 1 Monat pro Jahr",
      "1 bis 3 Monate pro Jahr",
      "3 bis 6 Monate pro Jahr",
      "Mehr als 6 Monate pro Jahr",
      "Ganzjährig oder nahezu ganzjährig",
      "Ich bin noch nicht sicher",
    ],
  },
  {
    id: "season_of_use",
    section: "Ihre Pläne",
    title: "Wann werden Sie die Immobilie voraussichtlich am meisten nutzen?",
    type: "multiple",
    maxSelections: 3,
    helper: "Wählen Sie höchstens 3 Optionen.",
    options: [
      "Vor allem im Sommer",
      "Vor allem im Winter",
      "Frühling und Herbst",
      "Schulferien",
      "Mehrere längere Aufenthalte pro Jahr",
      "Ganzjährig",
      "Ich bin noch nicht sicher",
    ],
  },
  {
    id: "area_familiarity",
    section: "Ihre Pläne",
    title: "Wie gut kennen Sie die Costa Blanca Nord bereits?",
    type: "single",
    options: [
      "Ich kenne die Region noch gar nicht",
      "Ich war einmal im Urlaub dort",
      "Ich kenne einige Orte durch mehrere Besuche",
      "Ich habe bereits bestimmte Orte im Blick",
      "Ich kenne die Region gut und möchte gezielt vergleichen",
    ],
  },
  {
    id: "timeline",
    section: "Ihre Pläne",
    title: "Wann möchten Sie idealerweise kaufen?",
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
    section: "Ihre Pläne",
    title: "Wie möchten Sie den Immobilienkauf voraussichtlich finanzieren?",
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
    section: "Ihre Pläne",
    title: "Wie hoch ist Ihr ungefähres Immobilienbudget?",
    type: "single",
    options: [
      "Unter 300.000 €",
      "300.000 € - 500.000 €",
      "500.000 € - 750.000 €",
      "750.000 € - 1.000.000 €",
      "1.000.000 € - 2.000.000 €",
      "2.000.000 € - 5.000.000 €",
      "Über 5.000.000 €",
    ],
  },
  {
    id: "budget_scope",
    section: "Ihre Pläne",
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
    id: "monthly_running_costs",
    section: "Ihre Pläne",
    title: "Welche monatlichen laufenden Kosten fühlen sich für Sie komfortabel an?",
    type: "single",
    options: [
      "So niedrig wie möglich",
      "Bis etwa 300 € pro Monat",
      "300 € bis 600 € pro Monat",
      "600 € bis 1.000 € pro Monat",
      "Über 1.000 € pro Monat ist akzeptabel, wenn die Immobilie passt",
      "Ich bin noch nicht sicher",
    ],
  },
  {
    id: "property_type",
    section: "Ihre Immobilie",
    title: "Welche Immobilientypen kommen für Sie ernsthaft infrage?",
    type: "multiple",
    maxSelections: 3,
    helper: "Wählen Sie höchstens 3 Optionen.",
    options: [
      "Freistehende Villa",
      "Luxusvilla",
      "Apartment",
      "Penthouse",
      "Reihenhaus oder Doppelhaushälfte",
      "Finca oder Landhaus",
      "Neubauprojekt",
      "Immobilie in einer Golfanlage",
    ],
  },
  {
    id: "property_style",
    section: "Ihre Immobilie",
    title: "Welche Art von Wohnstil spricht Sie am meisten an?",
    type: "multiple",
    maxSelections: 3,
    helper: "Wählen Sie höchstens 3 Optionen.",
    options: [
      "Modern und minimalistisch",
      "Mediterran und traditionell",
      "Renoviert mit Charakter",
      "Luxuriös und hochwertig",
      "Hell, ruhig und pflegeleicht",
      "Rustikal oder Finca-Stil",
      "Neubau mit klaren Linien",
      "Ich bin offen für verschiedene Stile",
    ],
  },
  {
    id: "condition",
    section: "Ihre Immobilie",
    title: "Welcher Zustand der Immobilie kommt für Sie infrage?",
    type: "multiple",
    maxSelections: 3,
    helper: "Wählen Sie höchstens 3 Optionen.",
    options: [
      "Neubau",
      "Kürzlich renoviert",
      "Sofort bezugsfertig",
      "Leichte Renovierung ist akzeptabel",
      "Umfangreiche Renovierung ist akzeptabel",
    ],
  },
  {
    id: "renovation_management",
    section: "Ihre Immobilie",
    title: "Wie möchten Sie mit Renovierungen oder Verbesserungen umgehen?",
    type: "single",
    options: [
      "Ich möchte keine Renovierung oder Arbeiten organisieren",
      "Kleine Verbesserungen sind in Ordnung",
      "Ich bin offen für Renovierung, wenn lokale Begleitung möglich ist",
      "Ich habe Erfahrung mit Renovierungen und kann Entscheidungen gut treffen",
      "Ich möchte ausdrücklich ein Projekt mit Renovierungspotenzial",
    ],
  },
  {
    id: "build_quality_comfort",
    section: "Ihre Immobilie",
    title: "Welche technischen Punkte sollen bei der Immobilienprüfung besonders beachtet werden?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie höchstens 5 Punkte, die für Sie besonders wichtig sind.",
    options: [
      "Isolierung und Fensterqualität",
      "Heiz- und Kühlsysteme",
      "Elektrische Installation und Sanitäranlagen",
      "Energieeffizienz",
      "Dach, Terrassen und Wasserableitung",
      "Allgemeine Bauqualität",
      "Pool, Bewässerung oder technische Anlagen",
      "Ich brauche dazu Beratung",
    ],
  },
  {
    id: "bedrooms",
    section: "Ihre Immobilie",
    title: "Wie viele Schlafzimmer benötigen Sie mindestens?",
    type: "single",
    options: ["1", "2", "3", "4", "5", "6+"],
  },
  {
    id: "guest_usage",
    section: "Ihre Immobilie",
    title: "Wie oft erwarten Sie Besuch von Familie oder Freunden?",
    type: "single",
    options: [
      "Selten",
      "Einige Male pro Jahr",
      "Regelmäßig in Ferienzeiten",
      "Häufige längere Besuche",
      "Die Immobilie soll auch für Familie oder mehrere Generationen gut funktionieren",
    ],
  },
  {
    id: "guest_privacy",
    section: "Ihre Immobilie",
    title: "Wie wichtig ist Privatsphäre für Gäste oder Familie im Haus?",
    type: "single",
    options: [
      "Sehr wichtig — Gäste sollten möglichst unabhängig wohnen können",
      "Ein separates Gästezimmer oder Gästebad reicht aus",
      "Gemeinsames Wohnen ist völlig in Ordnung",
      "Gäste spielen kaum eine Rolle",
    ],
  },
  {
    id: "home_features",
    section: "Ihre Immobilie",
    title: "Welche Merkmale der Immobilie sind Ihnen am wichtigsten?",
    type: "multiple",
    maxSelections: 8,
    helper: "Wählen Sie höchstens 8 Optionen.",
    options: [
      "Privater Swimmingpool",
      "Gemeinschaftspool",
      "Großer Garten",
      "Pflegeleichter Außenbereich",
      "Meerblick",
      "Panoramischer Meerblick",
      "Separater Gästebereich",
      "Außenküche oder Bereich für Gäste",
      "Ebenerdiges oder barrierearmes Wohnen",
      "Aufzug",
      "Geschlossene Wohnanlage",
      "Private Garage oder sicherer Parkplatz",
      "Lademöglichkeit für ein Elektroauto",
      "Arbeitszimmer oder Homeoffice",
      "Viel Wintersonne oder Südausrichtung",
      "Schutz vor starkem Wind",
    ],
  },
  {
    id: "climate_comfort",
    section: "Ihre Immobilie",
    title: "Welche Klimakomfort-Faktoren sind im Alltag am wichtigsten?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie höchstens 5 Optionen.",
    options: [
      "Schatten auf Terrassen und im Garten",
      "Warme Wintersonne",
      "Schutz vor starkem Wind",
      "Gute natürliche Belüftung",
      "Angenehme Innentemperatur im Sommer",
      "Angenehme Innentemperatur im Winter",
      "Kühle Sitzbereiche im Außenbereich",
      "Eine Immobilie, die sich das ganze Jahr über komfortabel anfühlt",
    ],
  },
  {
    id: "outdoor_living",
    section: "Ihre Immobilie",
    title: "Wie möchten Sie den Außenbereich nutzen?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie höchstens 5 Optionen.",
    options: [
      "Ruhig frühstücken oder Kaffee trinken",
      "Sonnenbaden",
      "Schatten und kühle Sitzbereiche",
      "Essen mit Familie oder Gästen",
      "Grillen oder Außenküche",
      "Gartenarbeit",
      "Poolbereich mit Privatsphäre",
      "Sicherer Bereich für Kinder oder Haustiere",
    ],
  },
  {
    id: "maintenance",
    section: "Ihre Immobilie",
    title: "Wie viel Instandhaltung möchten Sie übernehmen?",
    type: "single",
    options: [
      "Sehr wenig — ich bevorzuge eine pflegeleichte Immobilie",
      "Ein moderater Pflegeaufwand ist akzeptabel",
      "Garten- und Poolpflege sind akzeptabel",
      "Ich kann eine große Immobilie mit Grundstück verwalten",
      "Ich würde eine professionelle Immobilienverwaltung beauftragen",
    ],
  },
  {
    id: "property_management",
    section: "Ihre Immobilie",
    title: "Wie soll die Immobilie betreut werden, wenn Sie nicht in Spanien sind?",
    type: "single",
    options: [
      "Ich möchte möglichst wenig Betreuung benötigen",
      "Ich möchte Schlüsselservice und regelmäßige Kontrollen",
      "Ich brauche Garten- und Poolpflege",
      "Ich möchte vollständige Immobilienverwaltung",
      "Familie, Freunde oder Bekannte werden sich darum kümmern",
      "Ich bin noch nicht sicher",
    ],
  },
  {
    id: "preferred_setting",
    section: "Lage und Erreichbarkeit",
    title: "Welche Lagen sprechen Sie am meisten an?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie höchstens 4 Optionen.",
    options: [
      "Direkt am Meer",
      "Strand in fußläufiger Entfernung",
      "Wohngebiet mit Meerblick",
      "Stadt- oder Dorfzentrum",
      "Historisches Zentrum",
      "Ruhige Wohnanlage",
      "Golfumgebung",
      "Yachthafen oder Hafengebiet",
      "Ländliche Umgebung",
      "Berg- oder Naturgebiet",
      "Exklusive Wohnlage",
    ],
  },
  {
    id: "area_feeling",
    section: "Lage und Erreichbarkeit",
    title: "Welche Atmosphäre soll Ihr Wohnort haben?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie höchstens 4 Optionen.",
    options: [
      "Authentisch spanisch",
      "International und gut organisiert",
      "Ruhig und hochwertig",
      "Lebendig mit Restaurants und Cafés",
      "Küstennah und entspannt",
      "Exklusiv und privat",
      "Familienfreundlich",
      "Natürlich und ländlich",
      "Modern und komfortabel",
    ],
  },
  {
    id: "view_vs_convenience",
    section: "Lage und Erreichbarkeit",
    title: "Was ist Ihnen wichtiger: Aussicht oder tägliche Bequemlichkeit?",
    type: "single",
    options: [
      "Aussicht ist wichtiger, auch wenn die Lage steiler oder autoabhängiger ist",
      "Ein gutes Gleichgewicht aus Aussicht und Alltagstauglichkeit",
      "Fußläufigkeit und einfache Erreichbarkeit sind wichtiger als Aussicht",
      "Ich bin noch nicht sicher",
    ],
  },
  {
    id: "areas_considered",
    section: "Lage und Erreichbarkeit",
    title: "Welche Orte oder Regionen ziehen Sie bereits in Betracht?",
    type: "multiple",
    maxSelections: 6,
    helper: "Wählen Sie alle Orte aus, die Sie bereits interessieren.",
    options: [
      "Dénia",
      "Jávea",
      "Moraira",
      "Benissa",
      "Calpe",
      "Altea",
      "Benitachell / Cumbre del Sol",
      "Orba / Jalón / Inland",
      "Ich bin offen für Empfehlungen",
      "Ich bin noch nicht sicher",
    ],
  },
  {
    id: "areas_to_avoid",
    section: "Lage und Erreichbarkeit",
    title: "Gibt es Orte oder Umgebungen, die Sie eher vermeiden möchten?",
    type: "text",
    optional: true,
    helper:
      "Optional. Nennen Sie Orte, Umgebungen oder Eindrücke, die nicht zu Ihnen passen.",
  },
  {
    id: "daily_mobility",
    section: "Lage und Erreichbarkeit",
    title: "Wie möchten Sie tägliche Einrichtungen erreichen?",
    type: "single",
    options: [
      "Überwiegend zu Fuß",
      "Mit dem Fahrrad oder E-Bike",
      "Eine kurze Autofahrt ist akzeptabel",
      "Tägliches Autofahren ist kein Problem",
      "Das ist nicht wichtig",
    ],
  },
  {
    id: "amenity_distance",
    section: "Lage und Erreichbarkeit",
    title: "Welche Entfernung zu täglichen Einrichtungen fühlt sich für Sie angenehm an?",
    type: "single",
    options: [
      "Supermarkt, Café und Apotheke möglichst innerhalb von 5 bis 10 Minuten zu Fuß",
      "Wichtige Einrichtungen innerhalb von 15 bis 20 Minuten zu Fuß",
      "Eine kurze Autofahrt bis 10 Minuten ist in Ordnung",
      "Bis zu 20 Minuten Autofahrt sind akzeptabel",
      "Entfernung ist weniger wichtig als Ruhe, Aussicht oder Grundstück",
    ],
  },
  {
    id: "car_parking_needs",
    section: "Lage und Erreichbarkeit",
    title: "Welche Anforderungen haben Sie an Auto und Parken?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie höchstens 4 Optionen.",
    options: [
      "Ein privater Parkplatz reicht aus",
      "Zwei oder mehr Parkplätze sind wichtig",
      "Garage ist wichtig",
      "Einfaches Parken für Gäste ist wichtig",
      "Ich möchte möglichst wenig Auto fahren",
      "Ich plane ein Elektroauto",
      "Parken ist kein entscheidender Faktor",
    ],
  },
  {
    id: "access_terrain",
    section: "Lage und Erreichbarkeit",
    title: "Welche Zufahrts- und Geländebedingungen sind für Sie akzeptabel?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie alle Bedingungen aus, die für Sie akzeptabel sind.",
    options: [
      "Nur flache und leicht zugängliche Lagen",
      "Leichte Hanglagen sind akzeptabel",
      "Steile Straßen sind akzeptabel",
      "Schmale Wohnstraßen sind akzeptabel",
      "Ländliche oder teilweise unbefestigte Zufahrt ist akzeptabel",
      "Treppen innerhalb oder außerhalb der Immobilie sind akzeptabel",
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
      "Keine Präferenz",
    ],
  },
  {
    id: "boat_needs",
    section: "Lage und Erreichbarkeit",
    title: "Spielt ein Boot oder ein Liegeplatz eine Rolle bei Ihrer Standortwahl?",
    type: "single",
    options: [
      "Nein, das ist nicht relevant",
      "Ich habe bereits ein Boot und benötige einen Liegeplatz",
      "Ich plane, in Spanien ein Boot zu kaufen",
      "Ich möchte in der Nähe eines Yachthafens wohnen, auch ohne eigenes Boot",
      "Ich interessiere mich für Segeln oder Wassersport, aber ein Liegeplatz ist nicht erforderlich",
      "Ich bin noch nicht sicher",
    ],
  },
  {
    id: "boat_details",
    section: "Lage und Erreichbarkeit",
    title: "Welche Anforderungen sind für Ihr Boot oder Ihren Liegeplatz wichtig?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie höchstens 5 Optionen.",
    options: [
      "Liegeplatz für ein kleines Motorboot",
      "Liegeplatz für ein größeres Motorboot",
      "Liegeplatz für ein Segelboot",
      "Nähe zu einem Yachthafen innerhalb von 10 Minuten",
      "Nähe zu einem Yachthafen innerhalb von 20 Minuten",
      "Gute Zufahrt und Parkmöglichkeiten am Hafen",
      "Wartung, Winterlager oder Bootsservice in der Nähe",
      "Restaurant- und Clubleben rund um den Hafen",
      "Ich brauche dazu Beratung",
    ],
    showIf: (answers) =>
      answers.boat_needs &&
      answers.boat_needs !== "Nein, das ist nicht relevant" &&
      answers.boat_needs !==
        "Ich interessiere mich für Segeln oder Wassersport, aber ein Liegeplatz ist nicht erforderlich",
  },
  {
    id: "school_needs",
    section: "Lage und Erreichbarkeit",
    title: "Welche Schulangebote sind für Ihre Familie relevant?",
    type: "multiple",
    maxSelections: 3,
    helper: "Wählen Sie höchstens 3 Optionen.",
    options: [
      "Öffentliche spanische Schule",
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
      "Welche Erreichbarkeit medizinischer Versorgung gibt Ihnen ein gutes Gefühl?",
    type: "single",
    options: [
      "Krankenhaus und deutsch- oder englischsprachige medizinische Versorgung innerhalb von etwa 15 Minuten",
      "Krankenhaus und deutsch- oder englischsprachige medizinische Versorgung innerhalb von etwa 30 Minuten",
      "Eine lokale Arztpraxis und Apotheke in der Nähe sind ausreichend",
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
      "Unverzichtbar — wenige Stufen und ein einfacher Zugang sind erforderlich",
      "Sehr wichtig im Hinblick auf die Zukunft",
      "Bevorzugt, aber nicht zwingend erforderlich",
      "Nicht wichtig",
    ],
  },
  {
    id: "internet",
    section: "Lage und Erreichbarkeit",
    title:
      "Wie wichtig ist eine zuverlässige und schnelle Internetverbindung?",
    type: "single",
    options: [
      "Unverzichtbar für Homeoffice oder Unternehmen",
      "Sehr wichtig",
      "Praktisch, aber nicht zwingend erforderlich",
      "Nicht wichtig",
    ],
  },
  {
    id: "community_mix",
    section: "Gemeinschaft und Alltag",
    title:
      "In welcher Zusammensetzung der Nachbarschaft würden Sie sich am wohlsten fühlen?",
    type: "single",
    options: [
      "Überwiegend spanische Dauerbewohner",
      "Eine ausgewogene Mischung aus spanischen und internationalen Bewohnern",
      "Überwiegend internationale Bewohner",
      "Überwiegend Zweitwohnsitz-Eigentümer",
      "Eine ganzjährig bewohnte Wohngegend",
      "Ich habe keine Präferenz",
    ],
  },
  {
    id: "language_comfort",
    section: "Gemeinschaft und Alltag",
    title: "Wie wichtig ist Ihnen eine deutsch- oder englischsprachige Umgebung?",
    type: "single",
    options: [
      "Sehr wichtig — ich möchte viele deutschsprachige Kontakte oder Dienstleistungen",
      "Englischsprachige Dienstleistungen reichen aus",
      "Eine internationale Mischung ist ideal",
      "Ich möchte bewusst mehr spanisches Alltagsleben",
      "Sprache ist kein entscheidender Faktor",
    ],
  },
  {
    id: "neighbour_contact",
    section: "Gemeinschaft und Alltag",
    title: "Wie viel Kontakt möchten Sie idealerweise mit Ihren Nachbarn haben?",
    type: "single",
    options: [
      "Eine aktive und gesellige Nachbarschaft",
      "Regelmäßiger freundlicher Kontakt bei ausreichender Privatsphäre",
      "Nur gelegentlicher Kontakt",
      "Maximale Privatsphäre und sehr wenig Kontakt zu Nachbarn",
      "Ich habe keine Präferenz",
    ],
  },
  {
    id: "security_feeling",
    section: "Gemeinschaft und Alltag",
    title: "Was gibt Ihnen in Spanien ein gutes Sicherheitsgefühl?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie höchstens 4 Optionen.",
    options: [
      "Nachbarn in der Nähe",
      "Ganzjährig bewohnte Umgebung",
      "Geschlossene Wohnanlage",
      "Alarmanlage oder Sicherheitsservice",
      "Private Einfahrt oder abgeschlossener Parkplatz",
      "Gute Straßenbeleuchtung",
      "Ruhige Lage ohne viel Durchgangsverkehr",
      "Sicherheit ist für mich kein wichtiger Faktor",
    ],
    exclusiveOptions: ["Sicherheit ist für mich kein wichtiger Faktor"],
  },
  {
    id: "privacy_level",
    section: "Gemeinschaft und Alltag",
    title:
      "Wie viel Abstand und Privatsphäre wünschen Sie gegenüber Nachbargrundstücken?",
    type: "single",
    options: [
      "Maximale Privatsphäre ohne direkte Nachbarn",
      "Freistehende Immobilie mit angenehmem Abstand zu Nachbarn",
      "Eine Wohnanlage mit Nachbarn in der Nähe ist in Ordnung",
      "Ein Apartment oder eine städtische Umgebung ist in Ordnung",
      "Ich habe keine Präferenz",
    ],
  },
  {
    id: "seasonal_tourism",
    section: "Gemeinschaft und Alltag",
    title: "Wie stehen Sie zu saisonalem Tourismus und sommerlicher Betriebsamkeit?",
    type: "single",
    options: [
      "Ich möchte ganzjährig in einer ruhigen Wohngegend leben",
      "Etwas saisonale Aktivität ist akzeptabel",
      "Ich mag eine lebendige Atmosphäre im Sommer",
      "Ich bevorzuge eine aktive touristische Umgebung",
      "Ich habe keine Präferenz",
    ],
  },
  {
    id: "year_round_environment",
    section: "Gemeinschaft und Alltag",
    title: "Welche Angebote sollen auch im Winter verfügbar sein?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie höchstens 5 Optionen.",
    options: [
      "Restaurants und Cafés",
      "Geschäfte und Supermärkte",
      "Medizinische Versorgung",
      "Sport- und Fitnesseinrichtungen",
      "Soziale Aktivitäten",
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
      "Welche Aktivitäten und Lebensstilelemente sind Ihnen am wichtigsten?",
    type: "multiple",
    maxSelections: 6,
    helper: "Wählen Sie höchstens 6 Optionen.",
    options: [
      "Strand und Schwimmen",
      "Spazieren und Wandern",
      "Radfahren",
      "Golf",
      "Tennis oder Padel",
      "Segeln, Bootfahren oder Wassersport",
      "Fitness, Yoga oder Wellness",
      "Lokale spanische Gastronomie und Märkte",
      "Gehobene Gastronomie und Wein",
      "Kunst und Kultur",
      "Geschäftliche oder berufliche Kontakte",
      "Aktivitäten für Familien",
      "Ruhiges Leben zu Hause",
    ],
  },
  {
    id: "daily_routine",
    section: "Gemeinschaft und Alltag",
    title: "Wie sieht Ihr idealer Alltag in Spanien aus?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie höchstens 5 Optionen.",
    options: [
      "Morgens zu Fuß Kaffee trinken gehen",
      "Täglich am Meer oder Strand spazieren",
      "Viel Zeit zu Hause und auf der Terrasse verbringen",
      "Regelmäßig Restaurants und Cafés besuchen",
      "Sport, Fitness oder Padel in der Nähe nutzen",
      "Märkte und lokale Geschäfte besuchen",
      "Ruhig arbeiten oder Homeoffice machen",
      "Familie und Freunde empfangen",
      "Möglichst wenig organisieren und einfach ankommen",
    ],
  },
  {
    id: "pets",
    section: "Gemeinschaft und Alltag",
    title: "Werden Haustiere zu Ihrem Leben in Spanien gehören?",
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
    title: "Welche Bedingungen sind für Ihre Haustiere wichtig?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie höchstens 4 Optionen.",
    options: [
      "Sicher eingezäunter privater Garten",
      "Spazierwege in der Nähe",
      "Zugang zu einem hundefreundlichen Strand",
      "Tierarzt in der Nähe",
      "Ruhige Umgebung",
      "Haustierfreundliche Gemeinschaftsregeln",
    ],
    showIf: (answers) =>
      answers.pets && answers.pets !== "Keine Haustiere",
  },
  {
    id: "noise_tolerance",
    section: "Mögliche Bedenken",
    title: "Wie ruhig muss Ihre ideale Umgebung sein?",
    type: "single",
    options: [
      "Extrem ruhig — minimale Hintergrundgeräusche sind unverzichtbar",
      "Sehr ruhig, mit nur gelegentlicher lokaler Aktivität",
      "Etwas alltäglicher Umgebungslärm ist akzeptabel",
      "Eine lebendige Umgebung ist akzeptabel",
      "Lärm ist für mich kein wichtiger Faktor",
    ],
  },
  {
    id: "unacceptable_noise",
    section: "Mögliche Bedenken",
    title: "Welche Lärmquellen würden Ihre Entscheidung stark beeinflussen?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie höchstens 5 Optionen.",
    options: [
      "Verkehrslärm von viel befahrenen Straßen oder Autobahnen",
      "Lärm von Bars, Restaurants oder Nachtleben",
      "Ferienvermietung und häufig wechselnde Gäste",
      "Starker Tourismus im Sommer",
      "Baulärm",
      "Fluglärm",
      "Hunde oder regelmäßiger Nachbarschaftslärm",
      "Schulen, Sportanlagen oder Spielplätze",
      "Kirchenglocken, Feste oder lokale Veranstaltungen",
      "Keine dieser Lärmquellen wäre ein großes Problem",
    ],
    exclusiveOptions: [
      "Keine dieser Lärmquellen wäre ein großes Problem",
    ],
  },
  {
    id: "infrastructure_dealbreakers",
    section: "Mögliche Bedenken",
    title:
      "Welche sichtbaren Infrastrukturelemente würden Ihre Entscheidung negativ beeinflussen?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie höchstens 5 Optionen.",
    options: [
      "Hochspannungsmasten",
      "Oberirdische Stromleitungen oder Strommasten direkt an der Immobilie",
      "Mobilfunk- oder Kommunikationsmasten",
      "Sichtbare stark befahrene Straßen",
      "Große Apartmentgebäude in der Nähe",
      "Industrie- oder Gewerbegebäude",
      "Aktive Baustellen oder unbebaute Grundstücke",
      "Direkte Einsicht durch benachbarte Immobilien",
      "Keine dieser Gegebenheiten wäre ein großes Problem",
    ],
    exclusiveOptions: [
      "Keine dieser Gegebenheiten wäre ein großes Problem",
    ],
  },
  {
    id: "environmental_concerns",
    section: "Mögliche Bedenken",
    title:
      "Welche Umwelt- oder Grundstücksrisiken würden Sie besonders beunruhigen?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie höchstens 5 Optionen.",
    options: [
      "Überschwemmungsgefährdete Gebiete",
      "Erhöhtes Waldbrandrisiko",
      "Steile Grundstücke oder große Stützmauern",
      "Starke Windexposition",
      "Hohe Luftfeuchtigkeit in Küsten- oder Tallagen",
      "Küstenerosion oder extreme Meeresexposition",
      "Ländliche Versorgungssysteme wie Klärgruben oder Wassertanks",
      "Keine dieser Gegebenheiten wäre ein großes Problem",
    ],
    exclusiveOptions: [
      "Keine dieser Gegebenheiten wäre ein großes Problem",
    ],
  },
  {
    id: "legal_technical_risk_tolerance",
    section: "Mögliche Bedenken",
    title: "Wie viel rechtliche oder technische Komplexität wäre für Sie akzeptabel?",
    type: "single",
    options: [
      "So wenig wie möglich — ich möchte eine rechtlich und technisch klare Immobilie",
      "Kleine Punkte sind akzeptabel, wenn sie vor dem Kauf gelöst werden können",
      "Ich bin offen für komplexere Immobilien, wenn der Preis und die Lage stimmen",
      "Ich bin noch nicht sicher und brauche dazu Beratung",
    ],
  },
  {
    id: "rental_intent",
    section: "Vermietung und abschließende Prioritäten",
    title: "Möchten Sie die Immobilie vermieten?",
    type: "single",
    options: [
      "Nein",
      "Gelegentlich an Familie oder Freunde",
      "Gelegentliche Ferienvermietung",
      "Regelmäßige Ferienvermietung",
      "Langzeitvermietung",
      "Mieteinnahmen sind ein wichtiger Teil meines Plans",
      "Ich bin noch nicht sicher",
    ],
  },
  {
    id: "rental_priorities",
    section: "Vermietung und abschließende Prioritäten",
    title: "Welche Vermietungsfaktoren sind Ihnen am wichtigsten?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie höchstens 4 Optionen.",
    options: [
      "Eine Lage mit hoher Mietnachfrage",
      "Möglichkeit einer touristischen Vermietungslizenz",
      "Gemeinschaftsregeln, die Vermietung erlauben",
      "Professionelle Vermietungsverwaltung",
      "Gute Erreichbarkeit von Flughafen und Strand für Gäste",
      "Ein Gleichgewicht zwischen Mieteinnahmen und eigener Nutzung",
    ],
    showIf: (answers) =>
      answers.rental_intent &&
      answers.rental_intent !== "Nein" &&
      answers.rental_intent !== "Gelegentlich an Familie oder Freunde",
  },
  {
    id: "resale_importance",
    section: "Vermietung und abschließende Prioritäten",
    title: "Wie wichtig ist Ihnen die spätere Wiederverkäuflichkeit der Immobilie?",
    type: "single",
    options: [
      "Sehr wichtig — die Immobilie soll langfristig gut verkäuflich bleiben",
      "Wichtig, aber Lebensqualität ist wichtiger",
      "Nicht entscheidend, wenn die Immobilie perfekt zu uns passt",
      "Ich habe darüber noch nicht nachgedacht",
    ],
  },
  {
    id: "top_priorities",
    section: "Vermietung und abschließende Prioritäten",
    title: "Welche Faktoren haben für Sie die höchste Priorität?",
    type: "multiple",
    maxSelections: 6,
    helper: "Wählen Sie Ihre 6 wichtigsten Prioritäten.",
    options: [
      "Ruhige Umgebung",
      "Privatsphäre",
      "Sicherheit",
      "Fußläufige Erreichbarkeit",
      "Strandnähe",
      "Meerblick",
      "Internationale Gemeinschaft",
      "Authentische spanische Atmosphäre",
      "Soziales Leben in der Nachbarschaft",
      "Medizinische Versorgung",
      "Flughafennähe",
      "Ganzjährig verfügbare Dienstleistungen",
      "Schnelles Internet",
      "Barrierearme Erreichbarkeit",
      "Geringer Pflegeaufwand",
      "Großer Garten",
      "Golf",
      "Nähe zu einem Yachthafen oder Liegeplatz",
      "Geeignet für Familien und Schulen",
      "Starke langfristige Wiederverkäuflichkeit",
      "Vermietungspotenzial",
    ],
  },
  {
    id: "absolute_dealbreakers",
    section: "Vermietung und abschließende Prioritäten",
    title:
      "Welche Faktoren würden eine Region oder Immobilie für Sie sofort ausschließen?",
    type: "multiple",
    maxSelections: 6,
    helper: "Wählen Sie höchstens 6 absolute Ausschlusskriterien.",
    options: [
      "Verkehrs- oder Autobahnlärm",
      "Lärm von Nachtleben oder Restaurants",
      "Hochspannungsmasten oder oberirdische Stromleitungen",
      "Direkte Einsicht durch Nachbarn",
      "Sehr nahe benachbarte Immobilien",
      "Steile oder schwierige Zufahrt",
      "Kein privater Parkplatz",
      "Starker Tourismus im Sommer",
      "Abgelegene Lage",
      "Hohe Gemeinschaftskosten",
      "Umfangreiche Renovierungsarbeiten",
      "Keine zuverlässige schnelle Internetverbindung",
      "Wenig geöffnete Einrichtungen im Winter",
      "Große Entfernung zur medizinischen Versorgung",
      "Überschwemmungs- oder Waldbrandrisiko",
      "Keine passende Hafen- oder Liegeplatzlösung in der Nähe",
      "Keiner dieser Punkte ist ein absolutes Ausschlusskriterium",
    ],
    exclusiveOptions: [
      "Keiner dieser Punkte ist ein absolutes Ausschlusskriterium",
    ],
  },

  {
    id: "biggest_uncertainty",
    section: "Vermietung und abschließende Prioritäten",
    title: "Was ist Ihre größte Unsicherheit beim Kauf in Spanien?",
    type: "multiple",
    maxSelections: 3,
    helper: "Wählen Sie höchstens 3 Optionen.",
    options: [
      "Die richtige Region wählen",
      "Den fairen Marktwert einschätzen",
      "Rechtliche Risiken verstehen",
      "Versteckte Kosten vermeiden",
      "Renovierung oder Zustand einschätzen",
      "Steuern und laufende Kosten verstehen",
      "Vermietungsregeln verstehen",
      "Aus der Ferne alles organisieren",
      "Ich bin mir noch nicht sicher",
    ],
  },

  {
    id: "additional_notes",
    section: "Vermietung und abschließende Prioritäten",
    title:
      "Gibt es noch etwas, das dafür sorgen würde, dass sich eine Region oder Immobilie für Sie besonders richtig — oder vollkommen ungeeignet — anfühlt?",
    type: "text",
    optional: true,
    helper:
      "Optional. Ergänzen Sie hier weitere Wünsche, Bedenken oder Ausschlusskriterien.",
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
        `Bitte wählen Sie höchstens ${current.maxSelections} Optionen aus.`
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
        "Bitte wählen Sie eine Antwort aus oder geben Sie eine Antwort ein, bevor Sie fortfahren."
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
      alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    if (!consent) {
      alert(
        "Bitte bestätigen Sie, dass wir Ihre Antworten für Ihren persönlichen Bericht verwenden und Sie bezüglich Ihrer Anfrage kontaktieren dürfen."
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
        version: "3.0",
      },
    };

    const answersForEmail: Record<string, unknown> = Object.fromEntries(
      visibleQuestions
        .filter((question) =>
          Object.prototype.hasOwnProperty.call(filteredAnswers, question.id)
        )
        .map((question) => [question.title, filteredAnswers[question.id]])
    );

    answersForEmail["Sprache"] = "Deutsch";
    answersForEmail["Assessment-Version"] = "3.0";

    const submission = {
      name,
      email,
      phone,
      answers: answersForStorage,
      created_at: new Date().toISOString(),
    };

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("relocation_leads")
        .insert([submission]);

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

      // Track the lead only after Supabase confirms that the request was saved.
      // No personal data (name, email or phone) is sent to Google.
      pushDataLayerEvent({
        event: "generate_lead",
        form_name: "area_match",
        form_language: "de",
        lead_type: "area_match_report",
      });

      const emailResponse = await fetch("/api/relocation-assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          answers: answersForEmail,
        }),
      });

      if (!emailResponse.ok) {
        const emailResult = await emailResponse.json().catch(() => null);

        console.error(
          "Assessment wurde gespeichert, aber die E-Mail konnte nicht gesendet werden:",
          emailResult
        );

        alert(
          "Ihre Antworten wurden gespeichert, aber die E-Mail-Benachrichtigung konnte nicht gesendet werden. Bitte kontaktieren Sie Nordic Move Spain, falls Sie keine Rückmeldung erhalten."
        );
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

          <h1 style={styles.title}>Vielen Dank für Ihre Anfrage</h1>

          <p style={styles.text}>
            Vielen Dank, {contact.name}. Wir haben Ihre Costa Blanca Area Match
            Analyse erhalten und verwenden Ihre Antworten, um Ihren
            persönlichen Bericht zu erstellen.
          </p>

          <p style={styles.highlight}>{contact.email}</p>

          {contact.phone.trim() && (
            <p style={styles.text}>
              Falls wir einzelne Antworten mit Ihnen klären möchten, können wir
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
          <p style={styles.sectionLabel}>Ihr persönlicher Bericht</p>

          <h1 style={styles.title}>
            Erhalten Sie Ihren persönlichen Area Match Report
          </h1>

          <p style={styles.text}>
            Geben Sie unten Ihre Kontaktdaten ein. Wir verwenden Ihre Antworten,
            um Ihren persönlichen Costa Blanca Area Match Report zu erstellen
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
                darf, um meinen persönlichen Area Match Report zu erstellen und
                mich bezüglich dieser Anfrage zu kontaktieren.
              </span>
            </label>

            <div style={styles.navigation}>
              <button
                type="button"
                onClick={() => setFinished(false)}
                style={styles.navButton}
              >
                Zurück zu den Fragen
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
                  : "Persönlichen Bericht anfordern"}
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
                  {selected ? "✓ " : ""}
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
            placeholder="Ergänzen Sie hier weitere Wünsche, Bedenken oder Ausschlusskriterien."
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
            Zurück
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