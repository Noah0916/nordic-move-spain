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
    id: "area_match_priorities",
    section: "Ihr Area Match",
    title: "Was ist Ihnen bei einer Region am wichtigsten?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie bis zu 4 Punkte. Damit erhalten wir die erste Richtung für Ihr persönliches Area Match.",
    options: [
      "Strand und Meer",
      "Fußläufiges Ortsleben mit Restaurants und Cafés",
      "Ruhe, Privatsphäre und viel Platz",
      "Familienleben und Schulen",
      "Golf, Padel, Sport und Freizeit",
      "Natur und ein Leben im Inland oder Tal",
      "Ganzjährig geöffnete Angebote und gute Alltagsversorgung",
      "Gute langfristige Wertentwicklung",
      "Ich bin noch unsicher — bitte helfen Sie mir bei der Auswahl",
    ],
    exclusiveOptions: [
      "Ich bin noch unsicher — bitte helfen Sie mir bei der Auswahl",
    ],
  },
  {
    id: "area_familiarity",
    section: "Ihr Area Match",
    title: "Wie gut kennen Sie die Costa Blanca Nord bereits?",
    type: "single",
    options: [
      "Ich kenne die Region noch nicht",
      "Ich war einmal im Urlaub hier",
      "Ich kenne einige Orte aus mehreren Aufenthalten",
      "Ich habe bereits konkrete Orte im Blick",
      "Ich kenne die Region gut und möchte genauer vergleichen",
    ],
  },
  {
    id: "areas_considered",
    section: "Ihr Area Match",
    title: "Welche Orte oder Regionen ziehen Sie bereits in Betracht?",
    type: "multiple",
    maxSelections: 8,
    helper: "Wählen Sie die Orte aus, die Sie bereits interessieren. Küste und Inland sind beide berücksichtigt.",
    options: [
      "Dénia",
      "Jávea / Xàbia",
      "Moraira",
      "Benissa",
      "Calpe",
      "Altea",
      "Benitachell / Cumbre del Sol",
      "Jalón / Xaló / Llíber / Vall de Pop",
      "Orba / Täler im Inland",
      "Ich bin offen für Empfehlungen",
      "Ich bin noch unsicher",
    ],
  },
  {
    id: "preferred_setting",
    section: "Lage und Umgebung",
    title: "Welche Wohnlagen sprechen Sie besonders an?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie bis zu 4 Optionen.",
    options: [
      "Direkt am Meer",
      "Fußläufig zum Strand",
      "Wohngebiet mit Meerblick",
      "Stadt- oder Ortszentrum",
      "Historische Altstadt",
      "Ruhige Wohnurbanisation",
      "Golfumgebung",
      "Marina oder Hafen",
      "Landesinnere / ländliche Umgebung",
      "Berg- oder Naturumgebung",
      "Exklusive Wohnlage",
    ],
  },
  {
    id: "area_feeling",
    section: "Lage und Umgebung",
    title: "Welche Atmosphäre soll Ihr Wohnort haben?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie bis zu 4 Optionen.",
    options: [
      "Authentisch spanisch",
      "International und gut organisiert",
      "Ruhig und hochwertig",
      "Lebendig mit Restaurants und Cafés",
      "Entspanntes Küstengefühl",
      "Exklusiv und privat",
      "Familienfreundlich",
      "Natürlich und ländlich",
      "Modern und komfortabel",
    ],
  },
  {
    id: "town_size_preference",
    section: "Alltag und Ortscharakter",
    title: "Welche Größe eines Ortes oder einer Gemeinde passt zu Ihnen?",
    type: "single",
    options: [
      "Kleines Dorf — unter etwa 5.000 Einwohnern",
      "Kleinstadt — etwa 5.000 bis 20.000 Einwohner",
      "Mittelgroßer Ort — etwa 20.000 bis 50.000 Einwohner",
      "Größere Stadt — mehr als 50.000 Einwohner",
      "Ich möchte außerhalb wohnen, aber Dienstleistungen in 10 bis 15 Minuten erreichen",
      "Ich möchte verschiedene Größen vergleichen",
      "Keine Präferenz",
    ],
  },
  {
    id: "town_character",
    section: "Alltag und Ortscharakter",
    title: "Welche Art von Ortszentrum würden Sie besonders genießen?",
    type: "multiple",
    maxSelections: 3,
    helper: "Wählen Sie bis zu 3 Optionen.",
    options: [
      "Historische Altstadt mit engen Gassen, Plätzen und traditionellen Gebäuden",
      "Eleganter Küstenort mit Promenade und Meerblick",
      "Marina- oder Hafenatmosphäre",
      "Kleines Dorf im Inland mit lokalem Charakter",
      "Moderner Ort mit großer Auswahl an Dienstleistungen",
      "Ruhige Wohnlage außerhalb des Zentrums",
      "Lebendiges Zentrum, das ganzjährig aktiv ist",
      "Keine Präferenz",
    ],
    exclusiveOptions: ["Keine Präferenz"],
  },
  {
    id: "restaurant_preferences",
    section: "Alltag und Ortscharakter",
    title: "Welche Art von Restaurants möchten Sie gerne in der Nähe haben?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie bis zu 4 Optionen.",
    options: [
      "Authentische spanische Restaurants und Tapas-Bars",
      "Gute lokale Fisch- und Meeresfrüchterestaurants",
      "Eine gute Mischung aus spanischen und internationalen Restaurants",
      "Gehobene Gastronomie und Fine Dining",
      "Italienische, asiatische und andere internationale Küche",
      "Gesunde, vegetarische oder moderne Gastronomie",
      "Restaurants, die ganzjährig geöffnet sind",
      "Restaurantangebot ist für mich nicht wichtig",
    ],
    exclusiveOptions: ["Restaurantangebot ist für mich nicht wichtig"],
  },
  {
    id: "cafe_lunch_culture",
    section: "Alltag und Ortscharakter",
    title: "Wie wichtig sind Ihnen Cafés, Lunch-Spots und Terrassen im Alltag?",
    type: "single",
    options: [
      "Sehr wichtig — ich möchte regelmäßig zu Fuß Kaffee trinken, essen oder etwas trinken gehen",
      "Wichtig — mehrere gute Cafés und Lunch-Lokale in der Nähe wären ideal",
      "Schön, wenn sie mit kurzer Autofahrt erreichbar sind",
      "Gelegentlich praktisch, aber kein entscheidender Faktor",
      "Nicht wichtig",
    ],
  },
  {
    id: "shopping_preferences",
    section: "Alltag und Ortscharakter",
    title: "Welche Einkaufsmöglichkeiten möchten Sie gut erreichen können?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie bis zu 4 Optionen.",
    options: [
      "Traditionelle lokale Geschäfte, Bäckerei und Wochenmarkt",
      "Gute Supermärkte und alltägliche Dienstleistungen",
      "Unabhängige Boutiquen und hochwertige Modegeschäfte",
      "Möbel-, Interior- und Einrichtungsgeschäfte",
      "Größeres Einkaufszentrum innerhalb von etwa 20 bis 30 Minuten",
      "Luxus- oder Designer-Shopping in angemessener Fahrdistanz",
      "Shopping ist für mich nicht wichtig",
    ],
    exclusiveOptions: ["Shopping ist für mich nicht wichtig"],
  },
  {
    id: "market_gastronomy",
    section: "Lifestyle und lokale Kultur",
    title: "Wie wichtig sind Ihnen lokale Lebensmittel und Marktkultur?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie bis zu 4 Optionen.",
    options: [
      "Wöchentliche lokale Märkte",
      "Frischer Fisch und Meeresfrüchte",
      "Lokale Metzger, Bäckereien und Feinkostläden",
      "Hofläden und regionale Produkte",
      "Weinbars und gute Weinhandlungen",
      "Food-Festivals und gastronomische Veranstaltungen",
      "Bequemlichkeit ist mir wichtiger als lokale Esskultur",
      "Nicht wichtig",
    ],
    exclusiveOptions: ["Nicht wichtig"],
  },
  {
    id: "evening_atmosphere",
    section: "Alltag und Ortscharakter",
    title: "Welche Abendatmosphäre passt am besten zu Ihnen?",
    type: "single",
    options: [
      "Sehr ruhig — abends ist mir Ruhe besonders wichtig",
      "Einige gute Restaurants und Terrassen, aber wenig Nachtleben",
      "Lebendiges Zentrum mit Restaurants und Bars",
      "Saisonale Sommeratmosphäre ist in Ordnung, wenn der Winter ruhiger ist",
      "Ich mag Nachtleben und ein aktives gesellschaftliches Angebot",
      "Keine Präferenz",
    ],
  },
  {
    id: "wine_inland_lifestyle",
    section: "Lifestyle und lokale Kultur",
    title: "Würde Sie ein Wein-, Dorf- und Naturleben im Inland ansprechen?",
    type: "multiple",
    maxSelections: 5,
    helper: "Damit können wir Küstenorte mit Regionen wie Jalón, Llíber und dem Vall de Pop vergleichen.",
    options: [
      "Weinberge und Weinrouten in der Nähe",
      "Weinproben und Besuche bei Bodegas",
      "Traditionelle Dörfer im Inland mit schönen Plätzen",
      "Wandern und Bergtouren",
      "Rennrad- oder E-Bike-Routen",
      "Mehr Grundstück, Privatsphäre und Landschaftsblick",
      "Finca- oder Landhausumgebung",
      "Reiten oder andere ländliche Aktivitäten",
      "Ich bevorzuge klar die Küste und würde nicht im Inland wohnen",
      "Ich bin neugierig und möchte Inland und Küste vergleichen",
    ],
    exclusiveOptions: [
      "Ich bevorzuge klar die Küste und würde nicht im Inland wohnen",
    ],
  },
  {
    id: "water_lifestyle",
    section: "Lifestyle und lokale Kultur",
    title: "Wie wichtig ist Ihnen ein Leben am oder auf dem Wasser?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie bis zu 5 Optionen.",
    options: [
      "Segeln",
      "Motorboot",
      "Yachtclub oder Marina-Gemeinschaft",
      "Fester oder saisonaler Liegeplatz",
      "Kajak oder Stand-up-Paddling",
      "Tauchen oder Schnorcheln",
      "Open-Water-Schwimmen",
      "Beachclubs und Restaurants am Wasser",
      "Die Nähe zum Meer reicht mir — Bootseinrichtungen brauche ich nicht",
      "Wassersport ist für mich nicht wichtig",
    ],
    exclusiveOptions: ["Wassersport ist für mich nicht wichtig"],
  },
  {
    id: "culture_social_life",
    section: "Lifestyle und lokale Kultur",
    title: "Welche kulturellen und gesellschaftlichen Angebote hätten Sie gerne in der Nähe?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie bis zu 5 Optionen.",
    options: [
      "Live-Musik und Konzerte",
      "Kunstgalerien und Ausstellungen",
      "Lokale Feste und traditionelle Fiestas",
      "Theater oder Kino",
      "Wein-, Food- und Kulturveranstaltungen",
      "Sprachkurse oder kulturelle Kurse",
      "Wohltätigkeits- oder Freiwilligenorganisationen",
      "Internationale gesellschaftliche Veranstaltungen",
      "Ich bevorzuge einen ruhigeren, eher privaten Lebensstil",
    ],
  },
  {
    id: "decision_style",
    section: "Ihre Pläne",
    title: "Wie möchten Sie Ihre Entscheidung am liebsten treffen?",
    type: "single",
    options: [
      "Ich möchte zuerst verstehen, welche Region zu mir passt",
      "Ich möchte Regionen und Immobilien gleichzeitig vergleichen",
      "Ich habe bereits eine bevorzugte Region und möchte passende Immobilien sehen",
      "Ich brauche vor allem Klarheit über Risiken und praktische Unterschiede",
      "Ich stehe noch ganz am Anfang meiner Recherche",
    ],
  },
  {
    id: "purchase_goal",
    section: "Ihre Pläne",
    title: "Was ist Ihr Hauptgrund für einen Immobilienkauf in Spanien?",
    type: "single",
    options: [
      "Dauerhafter Umzug nach Spanien",
      "Zweitwohnsitz oder Ferienhaus",
      "Teilzeit in Spanien leben, später eventuell dauerhaft umziehen",
      "Investition",
      "Eine Kombination aus Lebensqualität und Investition",
      "Ich orientiere mich noch",
    ],
  },
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
      "Haushalt mit erwachsenen Kindern oder mehreren Generationen",
      "Haushalt im Ruhestand oder Teilruhestand",
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
      "Ganzjährig oder fast ganzjährig",
      "Ich bin noch unsicher",
    ],
  },
  {
    id: "season_of_use",
    section: "Ihre Pläne",
    title: "Zu welchen Jahreszeiten möchten Sie die Immobilie hauptsächlich nutzen?",
    type: "multiple",
    maxSelections: 3,
    helper: "Wählen Sie bis zu 3 Optionen.",
    options: [
      "Vor allem im Sommer",
      "Vor allem im Winter",
      "Im Frühling und Herbst",
      "Während der Schulferien",
      "Mehrere längere Aufenthalte pro Jahr",
      "Ganzjährig",
      "Ich bin noch unsicher",
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
    title: "Wie möchten Sie den Kauf voraussichtlich finanzieren?",
    type: "single",
    options: [
      "Kauf aus Eigenmitteln",
      "Hypothek in Spanien",
      "Hypothek oder Finanzierung in einem anderen Land",
      "Kombination aus Eigenmitteln und Finanzierung",
      "Ich bin noch unsicher",
    ],
  },
  {
    id: "budget",
    section: "Ihre Pläne",
    title: "Wie hoch ist ungefähr Ihr Immobilienbudget?",
    type: "single",
    options: [
      "Unter €300.000",
      "€300.000 - €500.000",
      "€500.000 - €750.000",
      "€750.000 - €1.000.000",
      "€1.000.000 - €2.000.000",
      "€2.000.000 - €5.000.000",
      "€5.000.000+",
    ],
  },
  {
    id: "budget_scope",
    section: "Ihre Pläne",
    title: "Was soll dieses Budget abdecken?",
    type: "single",
    options: [
      "Immobilienpreis, Steuern, Rechtskosten und sämtliche Kaufnebenkosten",
      "Immobilienpreis und Kaufnebenkosten, aber keine Renovierung",
      "Nur den Immobilienpreis",
      "Ich habe ein separates Renovierungsbudget",
      "Ich bin noch unsicher",
    ],
  },
  {
    id: "monthly_running_costs",
    section: "Ihre Pläne",
    title: "Welche monatlichen laufenden Kosten fühlen sich für Sie angenehm an?",
    type: "single",
    options: [
      "So niedrig wie möglich",
      "Bis etwa €300 pro Monat",
      "€300 bis €600 pro Monat",
      "€600 bis €1.000 pro Monat",
      "Mehr als €1.000 pro Monat ist in Ordnung, wenn die Immobilie passt",
      "Ich bin noch unsicher",
    ],
  },
  {
    id: "property_type",
    section: "Ihre Immobilie",
    title: "Welche Immobilientypen kommen für Sie ernsthaft infrage?",
    type: "multiple",
    maxSelections: 3,
    helper: "Wählen Sie bis zu 3 Optionen.",
    options: [
      "Freistehende Villa",
      "Luxusvilla",
      "Apartment",
      "Penthouse",
      "Reihenhaus oder Stadthaus",
      "Finca oder Landhaus",
      "Neubauprojekt",
      "Immobilie in Golfresort oder Golfumgebung",
    ],
  },
  {
    id: "property_style",
    section: "Ihre Immobilie",
    title: "Welcher Immobilienstil spricht Sie am meisten an?",
    type: "multiple",
    maxSelections: 3,
    helper: "Wählen Sie bis zu 3 Optionen.",
    options: [
      "Modern und minimalistisch",
      "Mediterran und traditionell",
      "Renoviert mit Charakter",
      "Luxuriös und hochwertig",
      "Hell, ruhig und pflegeleicht",
      "Rustikal oder Finca-Stil",
      "Neubau mit klaren Linien",
      "Ich bin für verschiedene Stile offen",
    ],
  },
  {
    id: "condition",
    section: "Ihre Immobilie",
    title: "Welcher Zustand der Immobilie kommt für Sie infrage?",
    type: "multiple",
    maxSelections: 3,
    helper: "Wählen Sie bis zu 3 Optionen.",
    options: [
      "Neubau",
      "Kürzlich renoviert",
      "Sofort bezugsfertig",
      "Kleine Renovierungen sind in Ordnung",
      "Umfangreiche Renovierung ist möglich",
    ],
  },
  {
    id: "renovation_management",
    section: "Ihre Immobilie",
    title: "Wie möchten Sie mit Renovierungen oder Verbesserungen umgehen?",
    type: "single",
    options: [
      "Ich möchte keine Renovierungs- oder Bauarbeiten organisieren",
      "Kleine Verbesserungen sind in Ordnung",
      "Ich bin für Renovierung offen, wenn lokale Unterstützung verfügbar ist",
      "Ich habe Renovierungserfahrung und treffe solche Entscheidungen gerne selbst",
      "Ich suche ausdrücklich ein Objekt mit Renovierungspotenzial",
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
    id: "bathrooms",
    section: "Ihre Immobilie",
    title: "Wie viele Badezimmer hätten Sie idealerweise gerne?",
    type: "single",
    options: [
      "1 Badezimmer reicht aus",
      "Mindestens 2 Badezimmer",
      "Mindestens 3 Badezimmer",
      "Mindestens 4 Badezimmer",
      "5 oder mehr Badezimmer",
      "Wichtiger ist mir, dass mehrere Schlafzimmer ein eigenes Bad haben",
      "Ich bin flexibel",
    ],
  },
  {
    id: "guest_usage",
    section: "Ihre Immobilie",
    title: "Wie häufig erwarten Sie Besuch von Familie oder Freunden?",
    type: "single",
    options: [
      "Selten",
      "Einige Male pro Jahr",
      "Regelmäßig während der Ferienzeiten",
      "Oft für längere Aufenthalte",
      "Die Immobilie soll auch gut für Familie oder mehrere Generationen funktionieren",
    ],
  },
  {
    id: "guest_privacy",
    section: "Ihre Immobilie",
    title: "Welche Art von Gästeunterkunft wäre für Sie ideal?",
    type: "single",
    options: [
      "Ein separates Gästehaus, eine Casita oder eine eigenständige Wohnung wäre ideal",
      "Eine separate Gästeetage oder ein Anbau mit guter Privatsphäre",
      "Ein Gästezimmer mit eigenem Bad reicht aus",
      "Ein normales Gästezimmer im Haupthaus ist ausreichend",
      "Gäste spielen für uns keine große Rolle",
    ],
  },
  {
    id: "garden_size",
    section: "Ihre Immobilie",
    title: "Wie viel privaten Außenbereich wünschen Sie sich?",
    type: "single",
    options: [
      "Terrasse oder sehr kleiner pflegeleichter Garten reicht aus",
      "Kompakter Privatgarten bis etwa 300 m²",
      "Guter Familiengarten von etwa 300 bis 700 m²",
      "Großer Garten von etwa 700 bis 1.500 m²",
      "Sehr großes Grundstück ab etwa 1.500 m²",
      "Mehrere tausend Quadratmeter oder Finca-Umgebung",
      "Ich bin noch unsicher",
    ],
  },
  {
    id: "home_features",
    section: "Ihre Immobilie",
    title: "Welche Eigenschaften der Immobilie sind Ihnen besonders wichtig?",
    type: "multiple",
    maxSelections: 8,
    helper: "Wählen Sie bis zu 8 Optionen.",
    options: [
      "Privater Swimmingpool",
      "Gemeinschaftspool",
      "Großer Garten",
      "Pflegeleichter Außenbereich",
      "Meerblick",
      "Panoramischer Meerblick",
      "Gästeunterkunft",
      "Außenküche oder Bereich zum Bewirten",
      "Ebenerdiges oder stufenarmes Wohnen",
      "Aufzug",
      "Geschlossene Wohnanlage",
      "Private Garage oder sicherer Parkplatz",
      "Lademöglichkeit für Elektroauto",
      "Homeoffice",
      "Viel Wintersonne oder Südausrichtung",
      "Schutz vor starkem Wind",
    ],
  },
  {
    id: "climate_comfort",
    section: "Ihre Immobilie",
    title: "Wie wichtig sind Ihnen Sonne, Schatten und ganzjähriger Klimakomfort?",
    type: "multiple",
    maxSelections: 6,
    helper: "Wählen Sie bis zu 6 Punkte.",
    options: [
      "Schatten auf Terrassen und im Garten",
      "Warme Wintersonne",
      "Sonniger, möglichst südlich ausgerichteter Garten oder Terrasse",
      "Sonne am Pool während eines großen Teils des Tages",
      "Schutz vor starkem Wind",
      "Gute natürliche Belüftung",
      "Angenehme Innentemperatur im Sommer",
      "Angenehme Innentemperatur im Winter",
      "Kühle Sitzplätze im Freien",
      "Eine Immobilie, die sich ganzjährig komfortabel anfühlt",
    ],
  },
  {
    id: "outdoor_living",
    section: "Ihre Immobilie",
    title: "Wie möchten Sie Ihren Außenbereich nutzen?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie bis zu 5 Optionen.",
    options: [
      "Ruhig draußen frühstücken oder Kaffee trinken",
      "Sonnenbaden",
      "Schattige und kühle Sitzbereiche",
      "Mit Familie oder Gästen draußen essen",
      "Grill oder Außenküche",
      "Gärtnern",
      "Privater Pool mit ausreichender Privatsphäre",
      "Sicherer Bereich für Kinder oder Haustiere",
    ],
  },
  {
    id: "maintenance",
    section: "Ihre Immobilie",
    title: "Wie viel Pflege und Instandhaltung möchten Sie selbst organisieren?",
    type: "single",
    options: [
      "Sehr wenig — ich bevorzuge eine unkomplizierte Lock-up-and-leave-Immobilie",
      "Ein moderater Pflegeaufwand ist in Ordnung",
      "Garten- und Poolpflege sind in Ordnung",
      "Ich kann auch ein großes Grundstück und Außenanlagen betreuen lassen",
      "Ich würde professionelle Haus- oder Property-Management-Dienste nutzen",
    ],
  },
  {
    id: "property_management",
    section: "Ihre Immobilie",
    title: "Wie soll die Immobilie betreut werden, wenn Sie nicht in Spanien sind?",
    type: "single",
    options: [
      "Sie soll möglichst wenig Betreuung benötigen",
      "Ich möchte Schlüsselverwaltung und regelmäßige Kontrollen",
      "Ich brauche Garten- und Poolpflege",
      "Ich möchte ein vollständiges Property Management",
      "Familie, Freunde oder Bekannte werden sich darum kümmern",
      "Ich bin noch unsicher",
    ],
  },
  {
    id: "build_quality_comfort",
    section: "Ihre Immobilie",
    title: "Welche technischen Punkte sollen bei einer Immobilienprüfung besonders beachtet werden?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie bis zu 5 Punkte, die Ihnen besonders wichtig sind.",
    options: [
      "Dämmung und Qualität der Fenster",
      "Heiz- und Kühlsysteme",
      "Elektroinstallation und Sanitärleitungen",
      "Energieeffizienz",
      "Dach, Terrassen und Entwässerung",
      "Allgemeine Bauqualität",
      "Pool, Bewässerung oder technische Anlagen",
      "Ich brauche dazu Beratung",
    ],
  },
  {
    id: "view_vs_convenience",
    section: "Lage und Umgebung",
    title: "Was ist Ihnen wichtiger: Aussicht oder Alltagstauglichkeit?",
    type: "single",
    options: [
      "Die Aussicht ist wichtiger, auch wenn die Lage steiler oder stärker vom Auto abhängig ist",
      "Eine gute Balance zwischen Aussicht und Alltagstauglichkeit",
      "Fußläufigkeit und einfacher Zugang sind wichtiger als Aussicht",
      "Ich bin noch unsicher",
    ],
  },
  {
    id: "preferred_view",
    section: "Lage und Umgebung",
    title: "Welche Aussicht würde Ihren Alltag am meisten bereichern?",
    type: "multiple",
    maxSelections: 3,
    helper: "Wählen Sie bis zu 3 Optionen.",
    options: [
      "Panoramischer Meerblick",
      "Teilweiser oder weiter Meerblick",
      "Bergblick",
      "Tal- oder Landschaftsblick",
      "Offene grüne Umgebung",
      "Stadt- oder Marinablick",
      "Aussicht ist weniger wichtig als Privatsphäre und Bequemlichkeit",
    ],
  },
  {
    id: "areas_to_avoid",
    section: "Lage und Umgebung",
    title: "Gibt es Orte, Regionen oder Umgebungen, die Sie lieber vermeiden möchten?",
    type: "text",
    optional: true,
    helper: "Optional. Nennen Sie Orte oder Umgebungen, die für Sie nicht passend wirken.",
  },
  {
    id: "daily_mobility",
    section: "Lage und Umgebung",
    title: "Wie möchten Sie alltägliche Dienstleistungen am liebsten erreichen?",
    type: "single",
    options: [
      "Überwiegend zu Fuß",
      "Mit Fahrrad oder E-Bike",
      "Eine kurze Autofahrt ist in Ordnung",
      "Tägliche Autofahrten sind völlig in Ordnung",
      "Das ist für mich nicht wichtig",
    ],
  },
  {
    id: "amenity_distance",
    section: "Lage und Umgebung",
    title: "Welche Entfernung zu alltäglichen Einrichtungen fühlt sich für Sie angenehm an?",
    type: "single",
    options: [
      "Supermarkt, Café und Apotheke möglichst in 5 bis 10 Minuten zu Fuß",
      "Wichtige Einrichtungen in 15 bis 20 Minuten zu Fuß",
      "Kurze Autofahrt bis 10 Minuten ist in Ordnung",
      "Bis zu 20 Minuten mit dem Auto ist akzeptabel",
      "Entfernung ist weniger wichtig als Ruhe, Aussicht oder Grundstück",
    ],
  },
  {
    id: "car_parking_needs",
    section: "Lage und Umgebung",
    title: "Welche Anforderungen haben Sie an Autos und Parkmöglichkeiten?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie bis zu 5 Optionen.",
    options: [
      "Ein privater Stellplatz reicht aus",
      "Zwei private Stellplätze sind wichtig",
      "Drei oder mehr private Stellplätze sind wichtig",
      "Eine private Garage ist wichtig",
      "Einfaches Parken für Gäste ist wichtig",
      "Ich plane ein Elektroauto und möchte zu Hause laden können",
      "Ich möchte möglichst wenig Auto fahren",
      "Parken ist kein entscheidender Faktor",
    ],
  },
  {
    id: "access_terrain",
    section: "Lage und Umgebung",
    title: "Welche Straßen-, Gelände- und Treppenverhältnisse wären für Sie akzeptabel?",
    type: "multiple",
    maxSelections: 6,
    helper: "Wählen Sie alle Bedingungen, die für Sie akzeptabel wären.",
    options: [
      "Nur flache und einfache Zufahrt",
      "Leichte Hügel sind in Ordnung",
      "Steile Straßen sind in Ordnung",
      "Schmale Wohnstraßen sind in Ordnung",
      "Ländliche oder teilweise unbefestigte Zufahrt ist in Ordnung",
      "Außentreppen sind in Ordnung",
      "Innentreppen sind in Ordnung",
      "Ich bevorzuge ebenerdiges Wohnen oder einen Aufzug",
    ],
  },
  {
    id: "airport_access",
    section: "Lage und Umgebung",
    title: "Welche maximale Fahrzeit zu einem Flughafen ist für Sie akzeptabel?",
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
    section: "Lage und Umgebung",
    title: "Spielt ein Boot oder Liegeplatz bei Ihrer Standortwahl eine Rolle?",
    type: "single",
    options: [
      "Nein, das ist nicht relevant",
      "Ich habe bereits ein Boot und benötige einen Liegeplatz",
      "Ich plane, in Spanien ein Boot zu kaufen",
      "Ich möchte in der Nähe einer Marina wohnen, auch ohne eigenes Boot",
      "Ich interessiere mich für Segeln oder Wassersport, brauche aber keinen Liegeplatz",
      "Ich bin noch unsicher",
    ],
  },
  {
    id: "boat_details",
    section: "Lage und Umgebung",
    title: "Welche Anforderungen sind für Ihr Boot oder Ihren Liegeplatz wichtig?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie bis zu 5 Optionen.",
    options: [
      "Liegeplatz für kleines Motorboot",
      "Liegeplatz für größeres Motorboot",
      "Liegeplatz für Segelboot",
      "Marina innerhalb von 10 Minuten",
      "Marina innerhalb von 20 Minuten",
      "Gute Zufahrt und Parkmöglichkeiten an der Marina",
      "Wartung, Winterlager oder Bootsservice in der Nähe",
      "Restaurants und Clubleben rund um die Marina",
      "Ich brauche dazu Beratung",
    ],
    showIf: (answers) =>
      answers.boat_needs &&
      answers.boat_needs !== "Nein, das ist nicht relevant" &&
      answers.boat_needs !==
        "Ich interessiere mich für Segeln oder Wassersport, brauche aber keinen Liegeplatz",
  },
  {
    id: "school_needs",
    section: "Lage und Umgebung",
    title: "Welche Schulangebote sind für Ihre Familie relevant?",
    type: "multiple",
    maxSelections: 3,
    helper: "Wählen Sie bis zu 3 Optionen.",
    options: [
      "Spanische öffentliche Schule",
      "Spanische Privatschule",
      "Bilinguale Schule",
      "Internationale Schule",
      "Online- oder häuslicher Unterricht",
      "Ich bin noch unsicher",
    ],
    showIf: (answers) =>
      answers.household_profile === "Familie mit kleinen Kindern" ||
      answers.household_profile === "Familie mit schulpflichtigen Kindern",
  },
  {
    id: "healthcare_access",
    section: "Lage und Umgebung",
    title: "Welche Erreichbarkeit medizinischer Versorgung würde Ihnen Sicherheit geben?",
    type: "single",
    options: [
      "Krankenhaus und deutsch- oder englischsprachige Versorgung innerhalb von etwa 15 Minuten",
      "Krankenhaus und internationale medizinische Versorgung innerhalb von etwa 30 Minuten",
      "Lokale Klinik und Apotheke in der Nähe reichen aus",
      "Zugang zu privater Medizin ist mir wichtiger als die Entfernung",
      "Medizinische Versorgung ist kein entscheidender Standortfaktor",
    ],
  },
  {
    id: "accessibility",
    section: "Lage und Umgebung",
    title: "Wie wichtig ist Ihnen langfristige Barrierearmut?",
    type: "single",
    options: [
      "Unverzichtbar — möglichst keine Stufen und einfacher Zugang",
      "Sehr wichtig im Hinblick auf die Zukunft",
      "Wünschenswert, aber nicht zwingend",
      "Nicht wichtig",
    ],
  },
  {
    id: "employment_relevance",
    section: "Arbeit und praktischer Alltag",
    title: "Beeinflussen Arbeitsplätze, Unternehmen oder berufliche Möglichkeiten Ihre Standortwahl?",
    type: "single",
    options: [
      "Ja — ich benötige Arbeitsmöglichkeiten in der Nähe",
      "Ja — ich führe ein Unternehmen und möchte Zugang zu einer aktiven lokalen Wirtschaft",
      "Ich arbeite remote, aber berufliches Networking ist wichtig",
      "Ich arbeite remote und kann fast überall wohnen",
      "Ich könnte in Spanien ein Unternehmen gründen oder übernehmen",
      "Arbeit ist für meinen Umzug nicht relevant",
      "Ich bin noch unsicher",
    ],
  },
  {
    id: "work_environment",
    section: "Arbeit und praktischer Alltag",
    title: "Welches wirtschaftliche oder berufliche Umfeld wäre für Sie besonders hilfreich?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie bis zu 4 Optionen.",
    options: [
      "Tourismus, Hotellerie oder Gastronomie",
      "Immobilien, Bau oder Interior Design",
      "Gesundheitswesen oder Pflege",
      "Bildung oder internationale Schulen",
      "Professionelle und internationale Dienstleistungen",
      "Einzelhandel oder lokales Gewerbe",
      "Technologie, Remote Work oder digitales Business",
      "Unternehmerisches und internationales Networking",
      "Der lokale Arbeitsmarkt ist nicht wichtig",
    ],
    showIf: (answers) =>
      answers.employment_relevance &&
      answers.employment_relevance !== "Arbeit ist für meinen Umzug nicht relevant",
  },
  {
    id: "remote_work_facilities",
    section: "Arbeit und praktischer Alltag",
    title: "Falls Sie aus Spanien arbeiten: Was würde Ihren Arbeitsalltag erleichtern?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie bis zu 4 Optionen.",
    options: [
      "Sehr zuverlässiges Glasfaserinternet",
      "Separates Homeoffice",
      "Coworking-Spaces in der Nähe",
      "Ruhige Umgebung während der Arbeitszeit",
      "Gute Flughafenanbindung für häufige Geschäftsreisen",
      "Networking mit anderen internationalen Fachleuten",
      "Gute Cafés oder Hotellounges, in denen man gelegentlich arbeiten kann",
      "Das ist für mich nicht relevant",
    ],
    exclusiveOptions: ["Das ist für mich nicht relevant"],
  },
  {
    id: "internet",
    section: "Lage und Umgebung",
    title: "Wie wichtig ist zuverlässiges Highspeed-Internet an der Immobilie?",
    type: "single",
    options: [
      "Unverzichtbar für Remote Work oder Geschäft",
      "Sehr wichtig",
      "Nützlich, aber nicht unverzichtbar",
      "Nicht wichtig",
    ],
  },
  {
    id: "community_mix",
    section: "Gemeinschaft und Alltag",
    title: "Welche Bevölkerungsmischung würde Ihnen das beste Zuhausegefühl geben?",
    type: "multiple",
    maxSelections: 3,
    helper: "Wählen Sie bis zu 3 Optionen. So können wir den sozialen Charakter verschiedener Orte besser vergleichen.",
    options: [
      "Überwiegend lokale spanische Einwohner",
      "Vor allem Spanier mit einigen internationalen Einwohnern",
      "Ausgewogene Mischung aus spanischen und internationalen Einwohnern",
      "Starke britische Gemeinschaft",
      "Starke deutschsprachige Gemeinschaft",
      "Starke niederländische oder belgische Gemeinschaft",
      "Spürbare skandinavische Gemeinschaft",
      "Breite internationale Mischung",
      "Wohngebiet, das ganzjährig bewohnt ist",
      "Keine Präferenz",
    ],
    exclusiveOptions: ["Keine Präferenz"],
  },
  {
    id: "community_networks",
    section: "Gemeinschaft und Alltag",
    title: "Wäre der Zugang zu sozialen, internationalen oder kirchlichen Gemeinschaften für Sie hilfreich?",
    type: "multiple",
    maxSelections: 5,
    optional: true,
    helper: "Optional — wählen Sie nur aus, was für Ihren Lebensstil relevant ist.",
    options: [
      "Lokale spanische Vereine und Gemeinschaftsgruppen",
      "Britische oder englischsprachige Social Clubs",
      "Deutschsprachige Social Clubs oder Frauenvereine",
      "Niederländische oder belgische Social Clubs",
      "Skandinavische Social Clubs",
      "Amerikanische oder internationale Frauennetzwerke",
      "Internationale Business- oder Berufsnetzwerke",
      "Katholische Kirche in der Nähe",
      "Protestantische oder evangelische Kirche in der Nähe",
      "Anglikanische oder englischsprachige Kirche in der Nähe",
      "Internationale christliche Gemeinschaft",
      "Wohltätigkeits- oder Freiwilligenorganisationen",
      "Nichts davon ist für mich wichtig",
    ],
    exclusiveOptions: ["Nichts davon ist für mich wichtig"],
  },
  {
    id: "language_integration",
    section: "Gemeinschaft und Alltag",
    title: "Wie stark möchten Sie sich in das spanische lokale Leben integrieren?",
    type: "single",
    options: [
      "Sehr stark — ich möchte Spanisch lernen und aktiv am lokalen Leben teilnehmen",
      "Ich wünsche mir eine gute Balance zwischen spanischem und internationalem Leben",
      "Ich bevorzuge ein internationales Umfeld, möchte aber trotzdem lokalen Kontakt",
      "Ich möchte vor allem deutsch- oder englischsprachige Dienstleistungen und ein einfaches internationales Netzwerk",
      "Ich bin noch unsicher",
    ],
  },
  {
    id: "language_comfort",
    section: "Gemeinschaft und Alltag",
    title: "Wie wichtig ist Ihnen ein deutsch-, englisch- oder international orientiertes Umfeld?",
    type: "single",
    options: [
      "Sehr wichtig — ich möchte viele internationale Kontakte oder Dienstleistungen",
      "Internationale Dienstleistungen reichen aus",
      "Eine internationale Mischung ist ideal",
      "Ich möchte bewusst mehr spanischen Alltag erleben",
      "Sprache ist kein entscheidender Faktor",
    ],
  },
  {
    id: "neighbour_contact",
    section: "Gemeinschaft und Alltag",
    title: "Wie viel Kontakt wünschen Sie sich idealerweise zu Ihren Nachbarn?",
    type: "single",
    options: [
      "Aktive und soziale Nachbarschaft",
      "Freundlicher regelmäßiger Kontakt bei guter Privatsphäre",
      "Nur gelegentlicher Kontakt",
      "Maximale Privatsphäre mit sehr wenig Nachbarschaftskontakt",
      "Keine Präferenz",
    ],
  },
  {
    id: "security_feeling",
    section: "Gemeinschaft und Alltag",
    title: "Was würde Ihnen in Spanien ein gutes Sicherheitsgefühl geben?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie bis zu 4 Optionen.",
    options: [
      "Nachbarn in der Nähe",
      "Ganzjährig bewohntes Gebiet",
      "Geschlossene Wohnanlage",
      "Alarmanlage oder Sicherheitsdienst",
      "Private Zufahrt oder sicherer Parkplatz",
      "Gute Straßenbeleuchtung",
      "Ruhige Lage ohne viel Durchgangsverkehr",
      "Sicherheit ist für mich kein wichtiger Faktor",
    ],
    exclusiveOptions: ["Sicherheit ist für mich kein wichtiger Faktor"],
  },
  {
    id: "privacy_level",
    section: "Gemeinschaft und Alltag",
    title: "Wie viel Abstand und Privatsphäre wünschen Sie sich zu Nachbargrundstücken?",
    type: "single",
    options: [
      "Maximale Privatsphäre ohne nahe Nachbarn",
      "Freistehende Immobilie mit angenehmem Abstand zu Nachbarn",
      "Wohngebiet mit Nachbarn in der Nähe ist in Ordnung",
      "Apartment oder urbanes Umfeld ist in Ordnung",
      "Keine Präferenz",
    ],
  },
  {
    id: "seasonal_tourism",
    section: "Gemeinschaft und Alltag",
    title: "Wie empfinden Sie saisonalen Tourismus und volle Sommermonate?",
    type: "single",
    options: [
      "Ich möchte ganzjährig eine ruhige Wohnlage",
      "Etwas saisonale Aktivität ist in Ordnung",
      "Ich mag eine lebendige Sommeratmosphäre",
      "Ich bevorzuge ein aktives touristisches Umfeld",
      "Keine Präferenz",
    ],
  },
  {
    id: "year_round_environment",
    section: "Gemeinschaft und Alltag",
    title: "Welche Angebote sollen auch im Winter verfügbar bleiben?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie bis zu 5 Optionen.",
    options: [
      "Restaurants und Cafés",
      "Geschäfte und Supermärkte",
      "Medizinische Versorgung",
      "Sport- und Fitnesseinrichtungen",
      "Gesellschaftliche Aktivitäten",
      "Internationale Gemeinschaft",
      "Kulturveranstaltungen",
      "Lebendiges Ortszentrum",
      "Das ist nicht wichtig",
    ],
    exclusiveOptions: ["Das ist nicht wichtig"],
  },
  {
    id: "lifestyle",
    section: "Gemeinschaft und Alltag",
    title: "Welche Aktivitäten und Lifestyle-Elemente sind Ihnen besonders wichtig?",
    type: "multiple",
    maxSelections: 6,
    helper: "Wählen Sie bis zu 6 Optionen.",
    options: [
      "Strände und Schwimmen",
      "Spazieren und Wandern",
      "Radfahren",
      "Golf",
      "Tennis oder Padel",
      "Segeln, Bootfahren oder Wassersport",
      "Fitness, Yoga oder Wellness",
      "Lokale spanische Küche und Märkte",
      "Fine Dining und Wein",
      "Kunst und Kultur",
      "Business oder berufliches Networking",
      "Familienaktivitäten",
      "Ruhiges Leben zu Hause",
    ],
  },
  {
    id: "sports_proximity",
    section: "Gemeinschaft und Alltag",
    title: "Wie nah möchten Sie an Golf, Padel oder anderen Sportanlagen wohnen?",
    type: "single",
    options: [
      "Innerhalb von etwa 10 Minuten ist wichtig",
      "Innerhalb von etwa 20 Minuten wäre ideal",
      "Innerhalb von etwa 30 Minuten ist in Ordnung",
      "Ich möchte ausdrücklich in oder direkt an einer Golfumgebung wohnen",
      "Sportanlagen sind schön, aber kein entscheidender Faktor",
      "Das ist für mich nicht wichtig",
    ],
  },
  {
    id: "daily_routine",
    section: "Gemeinschaft und Alltag",
    title: "Wie würde Ihr idealer Alltag in Spanien aussehen?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie bis zu 5 Optionen.",
    options: [
      "Morgens zu Fuß einen Kaffee trinken gehen",
      "Täglich am Meer oder Strand spazieren",
      "Viel Zeit zu Hause und auf der Terrasse verbringen",
      "Regelmäßig Restaurants und Cafés besuchen",
      "Nahe Sport-, Fitness- oder Padelanlagen nutzen",
      "Märkte und lokale Geschäfte besuchen",
      "Ruhig arbeiten oder im Homeoffice sein",
      "Familie und Freunde empfangen",
      "Mit möglichst wenig Organisation ankommen und leben",
    ],
  },
  {
    id: "pets",
    section: "Gemeinschaft und Alltag",
    title: "Werden Haustiere Teil Ihres Lebens in Spanien sein?",
    type: "single",
    options: [
      "Keine Haustiere",
      "Hund oder Hunde",
      "Katze oder Katzen",
      "Andere oder mehrere Haustiere",
    ],
  },
  {
    id: "pet_needs",
    section: "Gemeinschaft und Alltag",
    title: "Welche haustierbezogenen Eigenschaften sind wichtig?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie bis zu 4 Optionen.",
    options: [
      "Sicher eingezäunter Privatgarten",
      "Spazierwege in der Nähe",
      "Hundefreundlicher Strandzugang",
      "Tierarzt in der Nähe",
      "Ruhige Umgebung",
      "Haustierfreundliche Gemeinschaftsregeln",
    ],
    showIf: (answers) => answers.pets && answers.pets !== "Keine Haustiere",
  },
  {
    id: "noise_tolerance",
    section: "Mögliche Bedenken",
    title: "Wie ruhig soll Ihre ideale Lage sein?",
    type: "single",
    options: [
      "Extrem ruhig — minimale Hintergrundgeräusche sind unverzichtbar",
      "Sehr ruhig, nur gelegentliche lokale Aktivität",
      "Etwas alltägliche Hintergrundgeräusche sind in Ordnung",
      "Eine lebendige Umgebung ist in Ordnung",
      "Lärm ist für mich kein wichtiger Faktor",
    ],
  },
  {
    id: "unacceptable_noise",
    section: "Mögliche Bedenken",
    title: "Welche Lärmquellen würden Ihre Entscheidung deutlich beeinflussen?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie bis zu 5 Optionen.",
    options: [
      "Stark befahrene Straßen oder Autobahnlärm",
      "Bars, Restaurants oder Nachtleben",
      "Ferienvermietungen und häufig wechselnde Gäste",
      "Starker Sommertourismus",
      "Baulärm",
      "Fluglärm",
      "Hunde oder regelmäßiger Nachbarschaftslärm",
      "Schulen, Sportanlagen oder Spielplätze",
      "Kirchenglocken, Feste oder lokale Feierlichkeiten",
      "Nichts davon wäre ein großes Problem",
    ],
    exclusiveOptions: ["Nichts davon wäre ein großes Problem"],
  },
  {
    id: "infrastructure_dealbreakers",
    section: "Mögliche Bedenken",
    title: "Welche sichtbare Infrastruktur würde Sie bei einer Immobilie stören?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie bis zu 5 Optionen.",
    options: [
      "Hochspannungsmasten",
      "Oberirdische Stromleitungen oder Strommasten direkt an der Immobilie",
      "Mobilfunk- oder Kommunikationstürme",
      "Stark befahrene Straßen im Sichtfeld",
      "Große Apartmentblöcke in der Nähe",
      "Industrie- oder Gewerbebauten",
      "Aktive Baustellen oder unbebaute Grundstücke",
      "Direkte Einsicht durch Nachbargrundstücke",
      "Nichts davon wäre ein großes Problem",
    ],
    exclusiveOptions: ["Nichts davon wäre ein großes Problem"],
  },
  {
    id: "environmental_concerns",
    section: "Mögliche Bedenken",
    title: "Welche Umwelt- oder Grundstücksrisiken würden Sie besonders beschäftigen?",
    type: "multiple",
    maxSelections: 5,
    helper: "Wählen Sie bis zu 5 Optionen.",
    options: [
      "Überschwemmungsgefährdete Gebiete",
      "Waldbrandrisiko",
      "Steile Grundstücke oder große Stützmauern",
      "Starke Windexposition",
      "Hohe Luftfeuchtigkeit oder Feuchtigkeitsrisiko",
      "Küstenerosion oder extreme Meeresexposition",
      "Ländliche Versorgung wie Septiktank oder Wasserspeicher",
      "Nichts davon wäre ein großes Problem",
    ],
    exclusiveOptions: ["Nichts davon wäre ein großes Problem"],
  },
  {
    id: "legal_technical_risk_tolerance",
    section: "Mögliche Bedenken",
    title: "Wie viel rechtliche oder technische Komplexität wäre für Sie akzeptabel?",
    type: "single",
    options: [
      "So wenig wie möglich — ich möchte eine rechtlich und technisch möglichst unkomplizierte Immobilie",
      "Kleinere Probleme sind in Ordnung, wenn sie vor dem Kauf gelöst werden können",
      "Ich bin auch für komplexere Immobilien offen, wenn Preis und Lage stimmen",
      "Ich bin noch unsicher und brauche dazu Beratung",
    ],
  },
  {
    id: "rental_intent",
    section: "Vermietung und letzte Prioritäten",
    title: "Möchten Sie die Immobilie voraussichtlich vermieten?",
    type: "single",
    options: [
      "Nein",
      "Gelegentlich an Familie oder Freunde",
      "Gelegentliche Kurzzeitvermietung",
      "Regelmäßige Ferienvermietung",
      "Langzeitvermietung",
      "Mieteinnahmen sind ein wichtiger Teil meines Plans",
      "Ich bin noch unsicher",
    ],
  },
  {
    id: "rental_priorities",
    section: "Vermietung und letzte Prioritäten",
    title: "Welche Vermietungsfaktoren sind Ihnen besonders wichtig?",
    type: "multiple",
    maxSelections: 4,
    helper: "Wählen Sie bis zu 4 Optionen.",
    options: [
      "Lage mit guter Vermietungsnachfrage",
      "Möglichkeit einer touristischen Vermietung oder Lizenz",
      "Gemeinschaftsregeln, die Vermietung erlauben",
      "Professionelle Vermietungsverwaltung",
      "Einfacher Flughafen- und Strandzugang für Gäste",
      "Gute Balance zwischen Rendite und eigener Nutzung",
    ],
    showIf: (answers) =>
      answers.rental_intent &&
      answers.rental_intent !== "Nein" &&
      answers.rental_intent !== "Gelegentlich an Familie oder Freunde",
  },
  {
    id: "resale_importance",
    section: "Vermietung und letzte Prioritäten",
    title: "Wie wichtig ist Ihnen die spätere Wiederverkaufbarkeit?",
    type: "single",
    options: [
      "Sehr wichtig — die Immobilie soll langfristig gut verkäuflich bleiben",
      "Wichtig, aber Lebensqualität ist mir wichtiger",
      "Nicht entscheidend, wenn die Immobilie perfekt zu uns passt",
      "Darüber habe ich noch nicht nachgedacht",
    ],
  },
  {
    id: "top_priorities",
    section: "Vermietung und letzte Prioritäten",
    title: "Welche Faktoren haben für Sie die höchste Priorität?",
    type: "multiple",
    maxSelections: 6,
    helper: "Wählen Sie Ihre 6 wichtigsten Prioritäten.",
    options: [
      "Ruhige Umgebung",
      "Privatsphäre",
      "Sicherheit",
      "Fußläufigkeit",
      "Strandzugang",
      "Meerblick",
      "Internationale Gemeinschaft",
      "Authentische spanische Atmosphäre",
      "Soziales Nachbarschaftsleben",
      "Medizinische Versorgung",
      "Flughafenzugang",
      "Ganzjährige Dienstleistungen",
      "Highspeed-Internet",
      "Einfache Zugänglichkeit",
      "Geringer Pflegeaufwand",
      "Großer Garten",
      "Golf",
      "Marina-Zugang",
      "Eignung für Familie und Schule",
      "Langfristige Wertentwicklung",
      "Vermietungspotenzial",
    ],
  },
  {
    id: "absolute_dealbreakers",
    section: "Vermietung und letzte Prioritäten",
    title: "Welche Faktoren würden eine Region oder Immobilie für Sie sofort ausschließen?",
    type: "multiple",
    maxSelections: 6,
    helper: "Wählen Sie bis zu 6 absolute Ausschlusskriterien.",
    options: [
      "Verkehrs- oder Autobahnlärm",
      "Nachtleben oder Restaurantlärm",
      "Hochspannungsmasten oder oberirdische Stromleitungen",
      "Starke Einsicht durch Nachbarn",
      "Sehr nahe Nachbargrundstücke",
      "Steile oder schwierige Zufahrt",
      "Kein privater Parkplatz",
      "Starker Sommertourismus",
      "Isolierte Lage",
      "Hohe Gemeinschaftskosten",
      "Umfangreiche Renovierung",
      "Kein zuverlässiges Highspeed-Internet",
      "Wenig geöffnete Angebote im Winter",
      "Große Entfernung zu medizinischer Versorgung",
      "Überschwemmungs- oder Waldbrandrisiko",
      "Keine passende Marina- oder Liegeplatzlösung in der Nähe",
      "Nichts davon ist ein absolutes Ausschlusskriterium",
    ],
    exclusiveOptions: [
      "Nichts davon ist ein absolutes Ausschlusskriterium",
    ],
  },
  {
    id: "biggest_uncertainty",
    section: "Vermietung und letzte Prioritäten",
    title: "Was ist Ihre größte Unsicherheit beim Immobilienkauf in Spanien?",
    type: "multiple",
    maxSelections: 3,
    helper: "Wählen Sie bis zu 3 Optionen.",
    options: [
      "Die richtige Region auswählen",
      "Einen fairen Marktwert verstehen",
      "Rechtliche Risiken verstehen",
      "Versteckte Kosten vermeiden",
      "Renovierungsbedarf oder Zustand richtig einschätzen",
      "Steuern und laufende Kosten verstehen",
      "Vermietungsregeln verstehen",
      "Alles aus dem Ausland organisieren",
      "Ich bin noch unsicher",
    ],
  },
  {
    id: "additional_notes",
    section: "Vermietung und letzte Prioritäten",
    title: "Gibt es noch etwas, das eine Region oder Immobilie für Sie besonders passend — oder völlig unpassend — machen würde?",
    type: "text",
    optional: true,
    helper: "Optional. Ergänzen Sie alles, was bisher noch nicht angesprochen wurde.",
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
        "Bitte bestätigen Sie, dass wir Ihre Antworten zur Erstellung Ihres persönlichen Reports verwenden und Sie zu Ihrer Anfrage kontaktieren dürfen."
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
        version: "5.0-DE",
      },
    };

    const answersForEmail: Record<string, unknown> = Object.fromEntries(
      visibleQuestions
        .filter((question) =>
          Object.prototype.hasOwnProperty.call(filteredAnswers, question.id)
        )
        .map((question) => [question.title, filteredAnswers[question.id]])
    );

    answersForEmail["Language"] = "German";
    answersForEmail["Assessment version"] = "5.0-DE";

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
            "Meldung: " +
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
          "Das Assessment wurde gespeichert, aber die E-Mail-Benachrichtigung konnte nicht gesendet werden:",
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
            Thank you, {contact.name}. We have received your Costa Blanca Area Match
            Assessment and will use your answers to prepare your personal
            report.
          </p>

          <p style={styles.highlight}>{contact.email}</p>

          {contact.phone.trim() && (
            <p style={styles.text}>
              Falls wir eine Ihrer Antworten klären müssen, können wir Sie unter
              {contact.phone}.
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
          <p style={styles.sectionLabel}>Ihr persönlicher Report</p>

          <h1 style={styles.title}>
            Erhalten Sie Ihren persönlichen Area Match Report
          </h1>

          <p style={styles.text}>
            Enter your contact details below. We will use your answers to prepare your
            personal Costa Blanca Area Match Report and send it to your email
            address.
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
                I agree that Nordic Move Spain may use my answers to prepare
                my personal Area Match Report and contact me about this
                request.
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
                  : "Meinen Report anfordern"}
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
          Schritt {step + 1} · {progress}% abgeschlossen
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
            Back
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