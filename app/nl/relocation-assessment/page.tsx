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
    section: "Uw plannen",
    title: "Welke omschrijving past het beste bij uw huishouden?",
    type: "single",
    options: [
      "Alleenstaande koper",
      "Paar",
      "Gezin met jonge kinderen",
      "Gezin met schoolgaande kinderen",
      "Meer-generatie huishouden of huishouden met volwassen kinderen",
      "Gepensioneerd of deels gepensioneerd huishouden",
    ],
  },
  {
    id: "purchase_goal",
    section: "Uw plannen",
    title: "Wat is uw belangrijkste reden om vastgoed in Spanje te kopen?",
    type: "single",
    options: [
      "Permanent verhuizen",
      "Tweede woning",
      "Deels in Spanje wonen en later mogelijk verhuizen",
      "Investering",
      "Een combinatie van levenskwaliteit en investering",
      "Ik ben mij nog aan het oriënteren",
    ],
  },
  {
    id: "decision_style",
    section: "Uw plannen",
    title: "Hoe wilt u uw beslissing nemen?",
    type: "single",
    options: [
      "Ik wil eerst de juiste regio begrijpen",
      "Ik wil regio’s en woningen tegelijk vergelijken",
      "Ik heb al een voorkeursregio en wil passende woningen zien",
      "Ik heb vooral duidelijkheid nodig over risico’s en praktische verschillen",
      "Ik sta nog helemaal aan het begin van mijn oriëntatie",
    ],
  },
  {
    id: "time_in_spain",
    section: "Uw plannen",
    title: "Hoeveel tijd verwacht u per jaar in Spanje door te brengen?",
    type: "single",
    options: [
      "Minder dan 1 maand per jaar",
      "1 tot 3 maanden per jaar",
      "3 tot 6 maanden per jaar",
      "Meer dan 6 maanden per jaar",
      "Het hele jaar of bijna het hele jaar",
      "Ik weet het nog niet zeker",
    ],
  },
  {
    id: "season_of_use",
    section: "Uw plannen",
    title: "Wanneer verwacht u de woning het meest te gebruiken?",
    type: "multiple",
    maxSelections: 3,
    helper: "Kies maximaal 3 opties.",
    options: [
      "Vooral in de zomer",
      "Vooral in de winter",
      "Voorjaar en najaar",
      "Schoolvakanties",
      "Meerdere langere verblijven per jaar",
      "Het hele jaar",
      "Ik weet het nog niet zeker",
    ],
  },
  {
    id: "area_familiarity",
    section: "Uw plannen",
    title: "Hoe goed kent u de Costa Blanca Noord al?",
    type: "single",
    options: [
      "Ik ken de regio nog helemaal niet",
      "Ik ben er één keer op vakantie geweest",
      "Ik ken enkele plaatsen door meerdere bezoeken",
      "Ik heb al specifieke plaatsen in gedachten",
      "Ik ken de regio goed en wil gericht vergelijken",
    ],
  },
  {
    id: "timeline",
    section: "Uw plannen",
    title: "Wanneer zou u idealiter willen kopen?",
    type: "single",
    options: [
      "Binnen 6 maanden",
      "Binnen 12 maanden",
      "Binnen 24 maanden",
      "Over meer dan 24 maanden",
      "Ik ben mij nog aan het oriënteren",
    ],
  },
  {
    id: "financing",
    section: "Uw plannen",
    title: "Hoe verwacht u de aankoop te financieren?",
    type: "single",
    options: [
      "Aankoop uit eigen middelen",
      "Hypotheek in Spanje",
      "Hypotheek of financiering in een ander land",
      "Een combinatie van eigen middelen en financiering",
      "Ik weet het nog niet zeker",
    ],
  },
  {
    id: "budget",
    section: "Uw plannen",
    title: "Wat is uw geschatte vastgoedbudget?",
    type: "single",
    options: [
      "Onder €300.000",
      "€300.000 - €500.000",
      "€500.000 - €750.000",
      "€750.000 - €1.000.000",
      "€1.000.000 - €2.000.000",
      "€2.000.000 - €5.000.000",
      "Meer dan €5.000.000",
    ],
  },
  {
    id: "budget_scope",
    section: "Uw plannen",
    title: "Welke kosten zijn inbegrepen in dit budget?",
    type: "single",
    options: [
      "Koopprijs, belastingen, advocaatkosten en alle aankoopkosten",
      "Koopprijs en aankoopkosten, maar geen renovatie",
      "Alleen de koopprijs",
      "Ik heb een apart renovatiebudget",
      "Ik weet het nog niet zeker",
    ],
  },
  {
    id: "monthly_running_costs",
    section: "Uw plannen",
    title: "Welk niveau aan maandelijkse vaste lasten voelt comfortabel voor u?",
    type: "single",
    options: [
      "Zo laag mogelijk",
      "Tot ongeveer €300 per maand",
      "€300 tot €600 per maand",
      "€600 tot €1.000 per maand",
      "Meer dan €1.000 per maand is acceptabel als de woning klopt",
      "Ik weet het nog niet zeker",
    ],
  },
  {
    id: "property_type",
    section: "Uw woning",
    title: "Welke woningtypes overweegt u serieus?",
    type: "multiple",
    maxSelections: 3,
    helper: "Kies maximaal 3 opties.",
    options: [
      "Vrijstaande villa",
      "Luxe villa",
      "Appartement",
      "Penthouse",
      "Geschakelde woning of twee-onder-een-kap",
      "Finca of landhuis",
      "Nieuwbouwproject",
      "Woning in een golfresort",
    ],
  },
  {
    id: "property_style",
    section: "Uw woning",
    title: "Welke woonstijl spreekt u het meest aan?",
    type: "multiple",
    maxSelections: 3,
    helper: "Kies maximaal 3 opties.",
    options: [
      "Modern en minimalistisch",
      "Mediterraan en traditioneel",
      "Gerenoveerd met karakter",
      "Luxe en hoogwaardig",
      "Licht, rustig en onderhoudsarm",
      "Rustiek of finca-stijl",
      "Nieuwbouw met strakke lijnen",
      "Ik sta open voor verschillende stijlen",
    ],
  },
  {
    id: "condition",
    section: "Uw woning",
    title: "Welke staat van de woning komt voor u in aanmerking?",
    type: "multiple",
    maxSelections: 3,
    helper: "Kies maximaal 3 opties.",
    options: [
      "Nieuwbouw",
      "Recent gerenoveerd",
      "Direct instapklaar",
      "Lichte renovatie is acceptabel",
      "Grote renovatie is acceptabel",
    ],
  },
  {
    id: "renovation_management",
    section: "Uw woning",
    title: "Hoe wilt u omgaan met renovaties of verbeteringen?",
    type: "single",
    options: [
      "Ik wil geen renovatie of werkzaamheden organiseren",
      "Kleine verbeteringen zijn prima",
      "Ik sta open voor renovatie als er lokale begeleiding beschikbaar is",
      "Ik heb renovatie-ervaring en kan goed beslissingen nemen",
      "Ik zoek juist een project met renovatiepotentieel",
    ],
  },
  {
    id: "build_quality_comfort",
    section: "Uw woning",
    title: "Welke technische punten moeten extra aandacht krijgen tijdens de woningcontrole?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 punten die voor u extra belangrijk zijn.",
    options: [
      "Isolatie en kwaliteit van ramen",
      "Verwarming en koelsystemen",
      "Elektrische installatie en sanitair",
      "Energiezuinigheid",
      "Dak, terrassen en waterafvoer",
      "Algemene bouwkwaliteit",
      "Zwembad, irrigatie of technische installaties",
      "Ik heb hierover advies nodig",
    ],
  },
  {
    id: "bedrooms",
    section: "Uw woning",
    title: "Hoeveel slaapkamers heeft u minimaal nodig?",
    type: "single",
    options: ["1", "2", "3", "4", "5", "6+"],
  },
  {
    id: "guest_usage",
    section: "Uw woning",
    title: "Hoe vaak verwacht u bezoek van familie of vrienden?",
    type: "single",
    options: [
      "Zelden",
      "Een paar keer per jaar",
      "Regelmatig tijdens vakantieperiodes",
      "Vaak voor langere verblijven",
      "De woning moet ook goed werken voor familie of meerdere generaties",
    ],
  },
  {
    id: "guest_privacy",
    section: "Uw woning",
    title: "Hoe belangrijk is privacy voor gasten of familie in de woning?",
    type: "single",
    options: [
      "Zeer belangrijk — gasten moeten zo zelfstandig mogelijk kunnen verblijven",
      "Een aparte logeerkamer of gastenbadkamer is voldoende",
      "Samen wonen en ruimtes delen is helemaal prima",
      "Gasten spelen nauwelijks een rol",
    ],
  },
  {
    id: "home_features",
    section: "Uw woning",
    title: "Welke woningkenmerken zijn voor u het belangrijkst?",
    type: "multiple",
    maxSelections: 8,
    helper: "Kies maximaal 8 opties.",
    options: [
      "Privézwembad",
      "Gemeenschappelijk zwembad",
      "Grote tuin",
      "Onderhoudsarme buitenruimte",
      "Zeezicht",
      "Panoramisch zeezicht",
      "Aparte gastenruimte",
      "Buitenkeuken of ruimte om gasten te ontvangen",
      "Gelijkvloers of drempelarm wonen",
      "Lift",
      "Afgesloten wooncomplex",
      "Privégarage of veilige parkeerplaats",
      "Mogelijkheid voor elektrische laadpaal",
      "Werkkamer of homeoffice",
      "Veel winterzon of zuidoriëntatie",
      "Bescherming tegen sterke wind",
    ],
  },
  {
    id: "climate_comfort",
    section: "Uw woning",
    title: "Welke klimaatcomfortfactoren zijn het belangrijkst in het dagelijks leven?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Schaduw op terrassen en in de tuin",
      "Warme winterzon",
      "Bescherming tegen sterke wind",
      "Goede natuurlijke ventilatie",
      "Comfortabele binnentemperatuur in de zomer",
      "Comfortabele binnentemperatuur in de winter",
      "Koele zitplekken buiten",
      "Een woning die het hele jaar comfortabel aanvoelt",
    ],
  },
  {
    id: "outdoor_living",
    section: "Uw woning",
    title: "Hoe wilt u de buitenruimte gebruiken?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Rustig buiten ontbijten of koffie drinken",
      "Zonnen",
      "Schaduw en koele zitplekken",
      "Eten met familie of gasten",
      "Barbecue of buitenkeuken",
      "Tuinieren",
      "Privézwembad met voldoende privacy",
      "Veilige ruimte voor kinderen of huisdieren",
    ],
  },
  {
    id: "maintenance",
    section: "Uw woning",
    title: "Hoeveel onderhoud wilt u op u nemen?",
    type: "single",
    options: [
      "Heel weinig — ik geef de voorkeur aan een onderhoudsarme woning",
      "Een gemiddeld onderhoudsniveau is acceptabel",
      "Tuin- en zwembadonderhoud zijn acceptabel",
      "Ik kan een grote woning met grond beheren",
      "Ik zou professioneel woningbeheer inschakelen",
    ],
  },
  {
    id: "property_management",
    section: "Uw woning",
    title: "Hoe moet de woning worden beheerd wanneer u niet in Spanje bent?",
    type: "single",
    options: [
      "Ik wil dat de woning zo weinig mogelijk beheer nodig heeft",
      "Ik wil sleutelbeheer en regelmatige controles",
      "Ik heb tuin- en zwembadonderhoud nodig",
      "Ik wil volledig woningbeheer",
      "Familie, vrienden of bekenden zullen ervoor zorgen",
      "Ik weet het nog niet zeker",
    ],
  },
  {
    id: "preferred_setting",
    section: "Ligging en bereikbaarheid",
    title: "Welke liggingen spreken u het meest aan?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Direct aan zee",
      "Strand op loopafstand",
      "Woonwijk met zeezicht",
      "Stads- of dorpscentrum",
      "Historisch centrum",
      "Rustige woonwijk",
      "Golfomgeving",
      "Jachthaven of havengebied",
      "Landelijke omgeving",
      "Berg- of natuurgebied",
      "Exclusieve woonomgeving",
    ],
  },
  {
    id: "area_feeling",
    section: "Ligging en bereikbaarheid",
    title: "Welke sfeer moet uw woonomgeving hebben?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Authentiek Spaans",
      "Internationaal en goed georganiseerd",
      "Rustig en hoogwaardig",
      "Levendig met restaurants en cafés",
      "Kustgericht en ontspannen",
      "Exclusief en privé",
      "Gezinsvriendelijk",
      "Natuurlijk en landelijk",
      "Modern en comfortabel",
    ],
  },
  {
    id: "view_vs_convenience",
    section: "Ligging en bereikbaarheid",
    title: "Wat is belangrijker voor u: uitzicht of dagelijks gemak?",
    type: "single",
    options: [
      "Uitzicht is belangrijker, ook als de ligging steiler of auto-afhankelijker is",
      "Een goede balans tussen uitzicht en dagelijkse praktische bruikbaarheid",
      "Loopbaarheid en eenvoudige bereikbaarheid zijn belangrijker dan uitzicht",
      "Ik weet het nog niet zeker",
    ],
  },
  {
    id: "areas_considered",
    section: "Ligging en bereikbaarheid",
    title: "Welke plaatsen of regio’s overweegt u al?",
    type: "multiple",
    maxSelections: 6,
    helper: "Kies alle plaatsen of gebieden die u al interesseren.",
    options: [
      "Dénia",
      "Jávea",
      "Moraira",
      "Benissa",
      "Calpe",
      "Altea",
      "Benitachell / Cumbre del Sol",
      "Orba / Jalón / Binnenland",
      "Ik sta open voor aanbevelingen",
      "Ik weet het nog niet zeker",
    ],
  },
  {
    id: "areas_to_avoid",
    section: "Ligging en bereikbaarheid",
    title: "Zijn er plaatsen, gebieden of omgevingen die u liever vermijdt?",
    type: "text",
    optional: true,
    helper:
      "Optioneel. Noem plaatsen, omgevingen of indrukken die niet goed bij u voelen.",
  },
  {
    id: "daily_mobility",
    section: "Ligging en bereikbaarheid",
    title: "Hoe wilt u dagelijkse voorzieningen bereiken?",
    type: "single",
    options: [
      "Voornamelijk te voet",
      "Met de fiets of e-bike",
      "Een korte autorit is acceptabel",
      "Dagelijks autorijden is geen probleem",
      "Dit is niet belangrijk",
    ],
  },
  {
    id: "amenity_distance",
    section: "Ligging en bereikbaarheid",
    title: "Welke afstand tot dagelijkse voorzieningen voelt prettig voor u?",
    type: "single",
    options: [
      "Supermarkt, café en apotheek liefst binnen 5 tot 10 minuten lopen",
      "Belangrijke voorzieningen binnen 15 tot 20 minuten lopen",
      "Een korte autorit tot 10 minuten is prima",
      "Tot 20 minuten met de auto is acceptabel",
      "Afstand is minder belangrijk dan rust, uitzicht of grond",
    ],
  },
  {
    id: "car_parking_needs",
    section: "Ligging en bereikbaarheid",
    title: "Welke wensen heeft u rond auto’s en parkeren?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Eén privéparkeerplaats is voldoende",
      "Twee of meer parkeerplaatsen zijn belangrijk",
      "Een garage is belangrijk",
      "Makkelijk parkeren voor gasten is belangrijk",
      "Ik wil zo weinig mogelijk autorijden",
      "Ik ben van plan een elektrische auto te gebruiken",
      "Parkeren is geen doorslaggevende factor",
    ],
  },
  {
    id: "access_terrain",
    section: "Ligging en bereikbaarheid",
    title: "Welke toegangs- en terreinomstandigheden zijn voor u acceptabel?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies alle omstandigheden die voor u acceptabel zijn.",
    options: [
      "Alleen vlakke en makkelijk toegankelijke locaties",
      "Lichte hellingen zijn acceptabel",
      "Steile wegen zijn acceptabel",
      "Smalle woonstraten zijn acceptabel",
      "Landelijke of deels onverharde toegang is acceptabel",
      "Trappen binnen of buiten de woning zijn acceptabel",
    ],
  },
  {
    id: "airport_access",
    section: "Ligging en bereikbaarheid",
    title: "Wat is de maximale reistijd naar de luchthaven die u accepteert?",
    type: "single",
    options: [
      "Tot 30 minuten",
      "Tot 45 minuten",
      "Tot 60 minuten",
      "Tot 90 minuten",
      "Geen voorkeur",
    ],
  },
  {
    id: "boat_needs",
    section: "Ligging en bereikbaarheid",
    title: "Speelt een boot of ligplaats een rol bij uw locatiekeuze?",
    type: "single",
    options: [
      "Nee, dit is niet relevant",
      "Ik heb al een boot en heb een ligplaats nodig",
      "Ik ben van plan in Spanje een boot te kopen",
      "Ik wil graag in de buurt van een jachthaven wonen, ook zonder eigen boot",
      "Ik ben geïnteresseerd in zeilen of watersport, maar een ligplaats is niet nodig",
      "Ik weet het nog niet zeker",
    ],
  },
  {
    id: "boat_details",
    section: "Ligging en bereikbaarheid",
    title: "Welke eisen zijn belangrijk voor uw boot of ligplaats?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Ligplaats voor een kleine motorboot",
      "Ligplaats voor een grotere motorboot",
      "Ligplaats voor een zeilboot",
      "Jachthaven binnen 10 minuten",
      "Jachthaven binnen 20 minuten",
      "Goede toegang en parkeermogelijkheden bij de haven",
      "Onderhoud, winterstalling of bootservice in de buurt",
      "Restaurant- en clubleven rond de jachthaven",
      "Ik heb hierover advies nodig",
    ],
    showIf: (answers) =>
      answers.boat_needs &&
      answers.boat_needs !== "Nee, dit is niet relevant" &&
      answers.boat_needs !==
        "Ik ben geïnteresseerd in zeilen of watersport, maar een ligplaats is niet nodig",
  },
  {
    id: "school_needs",
    section: "Ligging en bereikbaarheid",
    title: "Welke schoolopties zijn relevant voor uw gezin?",
    type: "multiple",
    maxSelections: 3,
    helper: "Kies maximaal 3 opties.",
    options: [
      "Openbare Spaanse school",
      "Private Spaanse school",
      "Tweetalige school",
      "Internationale school",
      "Online onderwijs of thuisonderwijs",
      "Ik weet het nog niet zeker",
    ],
    showIf: (answers) =>
      answers.household_profile === "Gezin met jonge kinderen" ||
      answers.household_profile === "Gezin met schoolgaande kinderen",
  },
  {
    id: "healthcare_access",
    section: "Ligging en bereikbaarheid",
    title:
      "Welke bereikbaarheid van medische zorg geeft u een goed gevoel?",
    type: "single",
    options: [
      "Ziekenhuis en Engelstalige medische zorg binnen ongeveer 15 minuten",
      "Ziekenhuis en Engelstalige medische zorg binnen ongeveer 30 minuten",
      "Een lokale huisartspraktijk en apotheek in de buurt zijn voldoende",
      "Toegang tot private zorg is belangrijker dan afstand",
      "Medische zorg is geen doorslaggevende locatiefactor",
    ],
  },
  {
    id: "accessibility",
    section: "Ligging en bereikbaarheid",
    title: "Hoe belangrijk is een langdurig drempelarme woning?",
    type: "single",
    options: [
      "Essentieel — weinig trappen en eenvoudige toegang zijn noodzakelijk",
      "Zeer belangrijk met het oog op de toekomst",
      "Gewenst, maar niet absoluut noodzakelijk",
      "Niet belangrijk",
    ],
  },
  {
    id: "internet",
    section: "Ligging en bereikbaarheid",
    title:
      "Hoe belangrijk is een betrouwbare en snelle internetverbinding?",
    type: "single",
    options: [
      "Essentieel voor homeoffice of bedrijf",
      "Zeer belangrijk",
      "Handig, maar niet absoluut noodzakelijk",
      "Niet belangrijk",
    ],
  },
  {
    id: "community_mix",
    section: "Gemeenschap en dagelijks leven",
    title:
      "In welke samenstelling van de buurt zou u zich het meest op uw gemak voelen?",
    type: "single",
    options: [
      "Voornamelijk Spaanse vaste bewoners",
      "Een evenwichtige mix van Spaanse en internationale bewoners",
      "Voornamelijk internationale bewoners",
      "Voornamelijk tweedehuiseigenaren",
      "Een woonwijk die het hele jaar bewoond is",
      "Ik heb geen voorkeur",
    ],
  },
  {
    id: "language_comfort",
    section: "Gemeenschap en dagelijks leven",
    title: "Hoe belangrijk is een Nederlands-, Engels- of internationaal gerichte omgeving?",
    type: "single",
    options: [
      "Zeer belangrijk — ik wil veel Nederlandstalige of Engelstalige contacten of diensten",
      "Engelstalige diensten zijn voldoende",
      "Een internationale mix is ideaal",
      "Ik wil bewust meer Spaans dagelijks leven",
      "Taal is geen doorslaggevende factor",
    ],
  },
  {
    id: "neighbour_contact",
    section: "Gemeenschap en dagelijks leven",
    title: "Hoeveel contact wilt u idealiter met uw buren?",
    type: "single",
    options: [
      "Een actieve en sociale buurt",
      "Regelmatig vriendelijk contact met voldoende privacy",
      "Alleen af en toe contact",
      "Maximale privacy en heel weinig contact met buren",
      "Ik heb geen voorkeur",
    ],
  },
  {
    id: "security_feeling",
    section: "Gemeenschap en dagelijks leven",
    title: "Wat geeft u in Spanje een goed gevoel van veiligheid?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Buren in de buurt",
      "Omgeving die het hele jaar bewoond is",
      "Afgesloten wooncomplex",
      "Alarmsysteem of veiligheidsdienst",
      "Privé-oprit of afgesloten parkeerplaats",
      "Goede straatverlichting",
      "Rustige ligging zonder veel doorgaand verkeer",
      "Veiligheid is voor mij geen belangrijke factor",
    ],
    exclusiveOptions: ["Veiligheid is voor mij geen belangrijke factor"],
  },
  {
    id: "privacy_level",
    section: "Gemeenschap en dagelijks leven",
    title:
      "Hoeveel afstand en privacy wenst u ten opzichte van aangrenzende woningen?",
    type: "single",
    options: [
      "Maximale privacy zonder directe buren",
      "Vrijstaande woning met prettige afstand tot buren",
      "Een wooncomplex met buren dichtbij is prima",
      "Een appartement of stedelijke omgeving is prima",
      "Ik heb geen voorkeur",
    ],
  },
  {
    id: "seasonal_tourism",
    section: "Gemeenschap en dagelijks leven",
    title: "Hoe kijkt u naar seizoensgebonden toerisme en zomerdrukte?",
    type: "single",
    options: [
      "Ik wil het hele jaar in een rustige woonomgeving leven",
      "Enige seizoensactiviteit is acceptabel",
      "Ik houd van een levendige sfeer in de zomer",
      "Ik geef de voorkeur aan een actieve toeristische omgeving",
      "Ik heb geen voorkeur",
    ],
  },
  {
    id: "year_round_environment",
    section: "Gemeenschap en dagelijks leven",
    title: "Welke voorzieningen moeten ook in de winter beschikbaar zijn?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Restaurants en cafés",
      "Winkels en supermarkten",
      "Medische zorg",
      "Sport- en fitnessvoorzieningen",
      "Sociale activiteiten",
      "Internationaal gemeenschapsleven",
      "Culturele evenementen",
      "Een levendig centrum",
      "Dit is niet belangrijk",
    ],
    exclusiveOptions: ["Dit is niet belangrijk"],
  },
  {
    id: "lifestyle",
    section: "Gemeenschap en dagelijks leven",
    title:
      "Welke activiteiten en lifestyle-elementen zijn het belangrijkst voor u?",
    type: "multiple",
    maxSelections: 6,
    helper: "Kies maximaal 6 opties.",
    options: [
      "Strand en zwemmen",
      "Wandelen en hiken",
      "Fietsen",
      "Golf",
      "Tennis of padel",
      "Zeilen, varen of watersport",
      "Fitness, yoga of wellness",
      "Lokale Spaanse gastronomie en markten",
      "Fine dining en wijn",
      "Kunst en cultuur",
      "Zakelijke of professionele contacten",
      "Activiteiten voor gezinnen",
      "Rustig leven thuis",
    ],
  },
  {
    id: "daily_routine",
    section: "Gemeenschap en dagelijks leven",
    title: "Hoe ziet uw ideale dagelijkse leven in Spanje eruit?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "’s Ochtends lopend koffie drinken",
      "Dagelijks wandelen aan zee of op het strand",
      "Veel tijd thuis en op het terras doorbrengen",
      "Regelmatig restaurants en cafés bezoeken",
      "Sport, fitness of padel in de buurt gebruiken",
      "Markten en lokale winkels bezoeken",
      "Rustig werken of homeoffice doen",
      "Familie en vrienden ontvangen",
      "Zo makkelijk mogelijk aankomen met weinig organisatie",
    ],
  },
  {
    id: "pets",
    section: "Gemeenschap en dagelijks leven",
    title: "Zullen huisdieren deel uitmaken van uw leven in Spanje?",
    type: "single",
    options: [
      "Geen huisdieren",
      "Eén hond of meerdere honden",
      "Eén kat of meerdere katten",
      "Andere huisdieren of meerdere verschillende huisdieren",
    ],
  },
  {
    id: "pet_needs",
    section: "Gemeenschap en dagelijks leven",
    title: "Welke omstandigheden zijn belangrijk voor uw huisdieren?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Veilig omheinde privétuin",
      "Wandelroutes in de buurt",
      "Toegang tot een hondvriendelijk strand",
      "Dierenarts in de buurt",
      "Rustige omgeving",
      "Huisdiervriendelijke gemeenschapsregels",
    ],
    showIf: (answers) =>
      answers.pets && answers.pets !== "Geen huisdieren",
  },
  {
    id: "noise_tolerance",
    section: "Mogelijke zorgen",
    title: "Hoe rustig moet uw ideale omgeving zijn?",
    type: "single",
    options: [
      "Extreem rustig — minimale achtergrondgeluiden zijn essentieel",
      "Zeer rustig, met alleen af en toe lokale activiteit",
      "Enig dagelijks omgevingsgeluid is acceptabel",
      "Een levendige omgeving is acceptabel",
      "Geluid is voor mij geen belangrijke factor",
    ],
  },
  {
    id: "unacceptable_noise",
    section: "Mogelijke zorgen",
    title: "Welke geluidsbronnen zouden uw beslissing sterk beïnvloeden?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Verkeerslawaai van drukke wegen of snelwegen",
      "Geluid van bars, restaurants of nachtleven",
      "Vakantieverhuur en vaak wisselende gasten",
      "Sterk zomertoerisme",
      "Bouwlawaai",
      "Vliegtuiglawaai",
      "Honden of regelmatig buurtgeluid",
      "Scholen, sportvelden of speeltuinen",
      "Kerkklokken, feesten of lokale evenementen",
      "Geen van deze geluidsbronnen zou een groot probleem zijn",
    ],
    exclusiveOptions: [
      "Geen van deze geluidsbronnen zou een groot probleem zijn",
    ],
  },
  {
    id: "infrastructure_dealbreakers",
    section: "Mogelijke zorgen",
    title:
      "Welke zichtbare infrastructuur zou uw beslissing negatief beïnvloeden?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Hoogspanningsmasten",
      "Bovengrondse stroomkabels of stroommasten direct bij de woning",
      "Mobiele telefoon- of communicatiemasten",
      "Zichtbare drukke wegen",
      "Grote appartementengebouwen in de buurt",
      "Industrie- of commerciële gebouwen",
      "Actieve bouwplaatsen of onbebouwde percelen",
      "Directe inkijk door aangrenzende woningen",
      "Geen van deze omstandigheden zou een groot probleem zijn",
    ],
    exclusiveOptions: [
      "Geen van deze omstandigheden zou een groot probleem zijn",
    ],
  },
  {
    id: "environmental_concerns",
    section: "Mogelijke zorgen",
    title:
      "Welke milieu- of perceelrisico’s zouden u het meest zorgen baren?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Overstromingsgevoelige gebieden",
      "Verhoogd risico op bosbrand",
      "Steile percelen of grote keermuren",
      "Sterke blootstelling aan wind",
      "Hoge luchtvochtigheid of vochtproblemen",
      "Kusterosie of extreme blootstelling aan zee",
      "Landelijke voorzieningen zoals septic tanks of watertanks",
      "Geen van deze omstandigheden zou een groot probleem zijn",
    ],
    exclusiveOptions: [
      "Geen van deze omstandigheden zou een groot probleem zijn",
    ],
  },
  {
    id: "legal_technical_risk_tolerance",
    section: "Mogelijke zorgen",
    title: "Hoeveel juridische of technische complexiteit is voor u acceptabel?",
    type: "single",
    options: [
      "Zo weinig mogelijk — ik wil een juridisch en technisch duidelijke woning",
      "Kleine punten zijn acceptabel als ze vóór aankoop opgelost kunnen worden",
      "Ik sta open voor complexere woningen als prijs en ligging kloppen",
      "Ik weet het nog niet zeker en heb hierover advies nodig",
    ],
  },
  {
    id: "rental_intent",
    section: "Verhuur en eindprioriteiten",
    title: "Wilt u de woning verhuren?",
    type: "single",
    options: [
      "Nee",
      "Af en toe aan familie of vrienden",
      "Incidentele vakantieverhuur",
      "Regelmatige vakantieverhuur",
      "Langetermijnverhuur",
      "Huurinkomsten zijn een belangrijk onderdeel van mijn plan",
      "Ik weet het nog niet zeker",
    ],
  },
  {
    id: "rental_priorities",
    section: "Verhuur en eindprioriteiten",
    title: "Welke verhuurfactoren zijn voor u het belangrijkst?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Een locatie met sterke verhuurvraag",
      "Mogelijkheid voor een toeristische verhuurlicentie",
      "Gemeenschapsregels die verhuur toestaan",
      "Professioneel verhuurbeheer",
      "Goede bereikbaarheid van luchthaven en strand voor gasten",
      "Een balans tussen huurinkomsten en eigen gebruik",
    ],
    showIf: (answers) =>
      answers.rental_intent &&
      answers.rental_intent !== "Nee" &&
      answers.rental_intent !== "Af en toe aan familie of vrienden",
  },
  {
    id: "resale_importance",
    section: "Verhuur en eindprioriteiten",
    title: "Hoe belangrijk is toekomstige verkoopbaarheid voor u?",
    type: "single",
    options: [
      "Zeer belangrijk — de woning moet op lange termijn goed verkoopbaar blijven",
      "Belangrijk, maar levenskwaliteit is belangrijker",
      "Niet doorslaggevend als de woning perfect bij ons past",
      "Ik heb hier nog niet over nagedacht",
    ],
  },
  {
    id: "top_priorities",
    section: "Verhuur en eindprioriteiten",
    title: "Welke factoren hebben voor u de hoogste prioriteit?",
    type: "multiple",
    maxSelections: 6,
    helper: "Kies uw 6 belangrijkste prioriteiten.",
    options: [
      "Rustige omgeving",
      "Privacy",
      "Veiligheid",
      "Loopbaarheid",
      "Strandnabijheid",
      "Zeezicht",
      "Internationale gemeenschap",
      "Authentieke Spaanse sfeer",
      "Sociaal leven in de buurt",
      "Medische zorg",
      "Luchthavennabijheid",
      "Voorzieningen het hele jaar door",
      "Snel internet",
      "Drempelarme bereikbaarheid",
      "Laag onderhoud",
      "Grote tuin",
      "Golf",
      "Nabijheid van jachthaven of ligplaats",
      "Geschikt voor gezinnen en scholen",
      "Sterke verkoopbaarheid op lange termijn",
      "Verhuurpotentieel",
    ],
  },
  {
    id: "absolute_dealbreakers",
    section: "Verhuur en eindprioriteiten",
    title:
      "Welke factoren zouden een regio of woning direct uitsluiten voor u?",
    type: "multiple",
    maxSelections: 6,
    helper: "Kies maximaal 6 absolute uitsluitingscriteria.",
    options: [
      "Verkeers- of snelweglawaai",
      "Geluid van nachtleven of restaurants",
      "Hoogspanningsmasten of bovengrondse stroomkabels",
      "Directe inkijk door buren",
      "Zeer dichtbijgelegen aangrenzende woningen",
      "Steile of moeilijke toegang",
      "Geen privéparkeerplaats",
      "Sterk zomertoerisme",
      "Afgelegen ligging",
      "Hoge gemeenschapskosten",
      "Grote renovatiewerkzaamheden",
      "Geen betrouwbare snelle internetverbinding",
      "Weinig voorzieningen open in de winter",
      "Grote afstand tot medische zorg",
      "Overstromings- of bosbrandrisico",
      "Geen passende haven- of ligplaatsoplossing in de buurt",
      "Geen van deze punten is een absoluut uitsluitingscriterium",
    ],
    exclusiveOptions: [
      "Geen van deze punten is een absoluut uitsluitingscriterium",
    ],
  },
  {
    id: "biggest_uncertainty",
    section: "Verhuur en eindprioriteiten",
    title: "Wat is uw grootste onzekerheid bij het kopen in Spanje?",
    type: "multiple",
    maxSelections: 3,
    helper: "Kies maximaal 3 opties.",
    options: [
      "De juiste regio kiezen",
      "De eerlijke marktwaarde begrijpen",
      "Juridische risico’s begrijpen",
      "Verborgen kosten vermijden",
      "Renovatie of staat van de woning beoordelen",
      "Belastingen en vaste lasten begrijpen",
      "Verhuurregels begrijpen",
      "Alles vanuit het buitenland organiseren",
      "Ik weet het nog niet zeker",
    ],
  },
  {
    id: "additional_notes",
    section: "Verhuur en eindprioriteiten",
    title:
      "Is er nog iets waardoor een regio of woning voor u bijzonder goed — of juist volledig ongeschikt — zou aanvoelen?",
    type: "text",
    optional: true,
    helper:
      "Optioneel. Voeg hier extra wensen, zorgen of uitsluitingscriteria toe.",
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
        `Kies maximaal ${current.maxSelections} opties.`
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
        "Kies een antwoord of vul een antwoord in voordat u verdergaat."
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
      alert("Vul uw naam en e-mailadres in.");
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      alert("Vul een geldig e-mailadres in.");
      return;
    }

    if (!consent) {
      alert(
        "Bevestig dat wij uw antwoorden mogen gebruiken om uw persoonlijke rapport op te stellen en contact met u mogen opnemen over uw aanvraag."
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
        language: "nl",
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

    answersForEmail["Taal"] = "Nederlands";
    answersForEmail["Assessment-versie"] = "3.0";

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
          "Uw aanvraag kon niet worden opgeslagen.\n\n" +
            "Bericht: " +
            error.message +
            "\n\nDetails: " +
            (error.details || "Niet opgegeven") +
            "\n\nHint: " +
            (error.hint || "Niet opgegeven") +
            "\n\nCode: " +
            error.code
        );

        return;
      }

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
          "Assessment is opgeslagen, maar de e-mail kon niet worden verzonden:",
          emailResult
        );

        alert(
          "Uw antwoorden zijn opgeslagen, maar de e-mailnotificatie kon niet worden verzonden. Neem contact op met Nordic Move Spain als u geen reactie ontvangt."
        );
      }

      setSubmitted(true);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Er is een onbekende fout opgetreden.";

      alert(
        "Uw aanvraag kon niet worden opgeslagen.\n\n" + message
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main style={styles.page}>
        <div style={styles.card}>
          <p style={styles.sectionLabel}>Aanvraag ontvangen</p>

          <h1 style={styles.title}>Bedankt voor uw aanvraag</h1>

          <p style={styles.text}>
            Bedankt, {contact.name}. We hebben uw Costa Blanca Area Match
            analyse ontvangen en gebruiken uw antwoorden om uw persoonlijke
            rapport op te stellen.
          </p>

          <p style={styles.highlight}>{contact.email}</p>

          {contact.phone.trim() && (
            <p style={styles.text}>
              Als we enkele antwoorden met u willen verduidelijken, kunnen we
              contact met u opnemen via {contact.phone}.
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
          <p style={styles.sectionLabel}>Uw persoonlijke rapport</p>

          <h1 style={styles.title}>
            Ontvang uw persoonlijke Area Match Report
          </h1>

          <p style={styles.text}>
            Vul hieronder uw contactgegevens in. We gebruiken uw antwoorden om
            uw persoonlijke Costa Blanca Area Match Report op te stellen en naar
            uw e-mailadres te sturen.
          </p>

          <div style={styles.form}>
            <label style={styles.fieldLabel}>
              Naam

              <input
                placeholder="Uw naam"
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
              E-mailadres

              <input
                placeholder="Uw e-mailadres"
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
              Telefoonnummer{" "}
              <span style={styles.optionalText}>(optioneel)</span>

              <input
                placeholder="Uw telefoonnummer"
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
                Ik ga ermee akkoord dat Nordic Move Spain mijn antwoorden mag
                gebruiken om mijn persoonlijke Area Match Report op te stellen
                en contact met mij mag opnemen over deze aanvraag.
              </span>
            </label>

            <div style={styles.navigation}>
              <button
                type="button"
                onClick={() => setFinished(false)}
                style={styles.navButton}
              >
                Terug naar de vragen
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
                  ? "Wordt verzonden..."
                  : "Persoonlijk rapport aanvragen"}
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
          Vraag {step + 1} van {visibleQuestions.length}
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
            placeholder="Voeg hier extra wensen, zorgen of uitsluitingscriteria toe."
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
            Terug
          </button>

          <button
            type="button"
            onClick={nextStep}
            style={styles.nextButton}
          >
            {step === visibleQuestions.length - 1
              ? "Verder naar contactgegevens"
              : "Verder"}
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