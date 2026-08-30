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
    section: "Jouw Area Match",
    title: "Wat vind je het belangrijkst in een regio?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 punten. Daarmee bepalen we de eerste richting voor jouw persoonlijke Area Match.",
    options: [
      "Strand en zee",
      "Een levendig centrum met restaurants en cafés op loopafstand",
      "Rust, privacy en ruimte",
      "Gezinsleven en scholen",
      "Golf, padel, sport en vrije tijd",
      "Natuur en wonen in het binnenland of een vallei",
      "Goede voorzieningen die het hele jaar open zijn",
      "Goede waardeontwikkeling op lange termijn",
      "Ik weet het nog niet — help mij kiezen",
    ],
    exclusiveOptions: ["Ik weet het nog niet — help mij kiezen"],
  },
  {
    id: "area_familiarity",
    section: "Jouw Area Match",
    title: "Hoe goed ken je Costa Blanca Noord al?",
    type: "single",
    options: [
      "Ik ken de regio nog niet",
      "Ik ben er één keer op vakantie geweest",
      "Ik ken een paar plaatsen van meerdere bezoeken",
      "Ik heb al specifieke plaatsen in gedachten",
      "Ik ken de regio goed en wil nauwkeuriger vergelijken",
    ],
  },
  {
    id: "areas_considered",
    section: "Jouw Area Match",
    title: "Welke plaatsen of regio's overweeg je al?",
    type: "multiple",
    maxSelections: 8,
    helper: "Kies de plaatsen die je al aanspreken. Zowel kust als binnenland zijn meegenomen.",
    options: [
      "Dénia",
      "Jávea / Xàbia",
      "Moraira",
      "Benissa",
      "Calpe",
      "Altea",
      "Benitachell / Cumbre del Sol",
      "Jalón / Xaló / Llíber / Vall de Pop",
      "Orba / valleien in het binnenland",
      "Ik sta open voor aanbevelingen",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "preferred_setting",
    section: "Locatie en bereikbaarheid",
    title: "Welke woonomgevingen spreken je het meest aan?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Direct aan zee",
      "Op loopafstand van het strand",
      "Woonwijk met zeezicht",
      "Stads- of dorpscentrum",
      "Historisch centrum",
      "Rustige woonurbanisatie",
      "Golfomgeving",
      "Jachthaven of haven",
      "Platteland of binnenland",
      "Bergen of natuur",
      "Exclusieve woonwijk",
    ],
  },
  {
    id: "area_feeling",
    section: "Locatie en bereikbaarheid",
    title: "Welke sfeer moet jouw woonomgeving hebben?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Authentiek Spaans",
      "Internationaal en goed georganiseerd",
      "Rustig en van hoge kwaliteit",
      "Levendig met restaurants en cafés",
      "Ontspannen kustsfeer",
      "Exclusief en privé",
      "Gezinsvriendelijk",
      "Natuurlijk en landelijk",
      "Modern en comfortabel",
    ],
  },
  {
    id: "town_size_preference",
    section: "Dagelijks leven en karakter",
    title: "Welke grootte van plaats of gemeenschap past bij jou?",
    type: "single",
    options: [
      "Een klein dorp — minder dan ongeveer 5.000 inwoners",
      "Een kleine plaats — ongeveer 5.000 tot 20.000 inwoners",
      "Een middelgrote plaats — ongeveer 20.000 tot 50.000 inwoners",
      "Een grotere plaats of stad — meer dan 50.000 inwoners",
      "Ik woon liever buiten de plaats, maar wel binnen 10 tot 15 minuten van voorzieningen",
      "Ik wil verschillende groottes vergelijken",
      "Geen voorkeur",
    ],
  },
  {
    id: "town_character",
    section: "Dagelijks leven en karakter",
    title: "Welk type centrum zou je het meest aanspreken?",
    type: "multiple",
    maxSelections: 3,
    helper: "Kies maximaal 3 opties.",
    options: [
      "Historische oude stad met smalle straatjes, pleinen en traditionele gebouwen",
      "Elegante kustplaats met boulevard en zeezicht",
      "Sfeer van een jachthaven of haven",
      "Klein dorp in het binnenland met lokaal karakter",
      "Moderne plaats met veel voorzieningen",
      "Rustige woonomgeving buiten het centrum",
      "Levendig centrum dat het hele jaar actief blijft",
      "Geen voorkeur",
    ],
    exclusiveOptions: ["Geen voorkeur"],
  },
  {
    id: "restaurant_preferences",
    section: "Dagelijks leven en karakter",
    title: "Welke soorten restaurants wil je graag in de buurt hebben?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Authentieke Spaanse restaurants en tapasbars",
      "Goede lokale vis- en seafoodrestaurants",
      "Een goede mix van Spaanse en internationale restaurants",
      "Gastronomie op hoog niveau en fine dining",
      "Italiaanse, Aziatische en andere internationale keukens",
      "Gezonde, vegetarische of moderne restaurants",
      "Restaurants die het hele jaar open zijn",
      "Restaurantaanbod is voor mij niet belangrijk",
    ],
    exclusiveOptions: ["Restaurantaanbod is voor mij niet belangrijk"],
  },
  {
    id: "cafe_lunch_culture",
    section: "Dagelijks leven en karakter",
    title: "Hoe belangrijk zijn cafés, lunchplekken en terrassen in jouw dagelijkse leven?",
    type: "single",
    options: [
      "Heel belangrijk — ik wil regelmatig lopend koffie drinken, lunchen of een drankje doen",
      "Belangrijk — meerdere goede cafés en lunchplekken dichtbij zou ideaal zijn",
      "Leuk om binnen een korte autorit te hebben",
      "Af en toe handig, maar geen doorslaggevende factor",
      "Niet belangrijk",
    ],
  },
  {
    id: "shopping_preferences",
    section: "Dagelijks leven en karakter",
    title: "Welke winkels wil je gemakkelijk kunnen bereiken?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Lokale winkels, bakker en wekelijkse markt",
      "Goede supermarkten en dagelijkse voorzieningen",
      "Boetieks en kwalitatieve kledingwinkels",
      "Interieur-, meubel- en woonwinkels",
      "Een groter winkelcentrum binnen ongeveer 20 tot 30 minuten",
      "Luxe- of designerwinkels binnen redelijke rijafstand",
      "Winkelen is voor mij niet belangrijk",
    ],
    exclusiveOptions: ["Winkelen is voor mij niet belangrijk"],
  },
  {
    id: "market_gastronomy",
    section: "Lifestyle en lokale cultuur",
    title: "Hoe belangrijk zijn lokale producten en markten voor jou?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Wekelijkse lokale markten",
      "Verse vis en zeevruchten",
      "Lokale slagers, bakkers en delicatessenzaken",
      "Boerderijwinkels en lokaal geteelde producten",
      "Wijnbars en goede wijnwinkels",
      "Foodfestivals en gastronomische evenementen",
      "Gemak is voor mij belangrijker dan lokale eetcultuur",
      "Niet belangrijk",
    ],
    exclusiveOptions: ["Niet belangrijk"],
  },
  {
    id: "evening_atmosphere",
    section: "Dagelijks leven en karakter",
    title: "Welke avondsfeer past het beste bij jou?",
    type: "single",
    options: [
      "Heel rustig — 's avonds vind ik rust belangrijk",
      "Een paar goede restaurants en terrassen, maar weinig nachtleven",
      "Een levendig centrum met restaurants en bars",
      "Een levendige zomer is prima als het in de winter rustiger is",
      "Ik houd van nachtleven en een actief sociaal leven",
      "Geen voorkeur",
    ],
  },
  {
    id: "wine_inland_lifestyle",
    section: "Lifestyle en lokale cultuur",
    title: "Spreekt een leven tussen wijn, dorpen en natuur in het binnenland je aan?",
    type: "multiple",
    maxSelections: 5,
    helper: "Hiermee kunnen we kustplaatsen vergelijken met bijvoorbeeld Jalón, Llíber en Vall de Pop.",
    options: [
      "Wijngaarden en wijnroutes in de buurt",
      "Wijnproeverijen en bezoeken aan bodegas",
      "Traditionele dorpen en gezellige pleinen in het binnenland",
      "Wandelen en bergtochten",
      "Wielrennen of e-bike routes",
      "Meer grond, privacy en uitzicht over het landschap",
      "Finca- of landhuisomgeving",
      "Paardrijden of andere landelijke activiteiten",
      "Ik geef duidelijk de voorkeur aan de kust en wil niet in het binnenland wonen",
      "Ik ben nieuwsgierig en wil kust en binnenland vergelijken",
    ],
    exclusiveOptions: [
      "Ik geef duidelijk de voorkeur aan de kust en wil niet in het binnenland wonen",
    ],
  },
  {
    id: "water_lifestyle",
    section: "Lifestyle en lokale cultuur",
    title: "Hoe belangrijk is leven op of rond het water voor jou?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Zeilen",
      "Motorboot varen",
      "Yachtclub of gemeenschap rond een marina",
      "Vaste of seizoensgebonden ligplaats",
      "Kajakken of suppen",
      "Duiken of snorkelen",
      "Openwaterzwemmen",
      "Beachclubs en restaurants aan het water",
      "Dicht bij zee wonen is genoeg — ik heb geen bootfaciliteiten nodig",
      "Watersport is voor mij niet belangrijk",
    ],
    exclusiveOptions: ["Watersport is voor mij niet belangrijk"],
  },
  {
    id: "culture_social_life",
    section: "Lifestyle en lokale cultuur",
    title: "Welke culturele en sociale activiteiten wil je graag in de buurt hebben?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Live muziek en concerten",
      "Kunstgaleries en tentoonstellingen",
      "Lokale feesten en traditionele fiestas",
      "Theater of bioscoop",
      "Wijn-, food- en culturele evenementen",
      "Taal- of cultuurcursussen",
      "Goede doelen of vrijwilligersorganisaties",
      "Internationale sociale evenementen",
      "Ik geef de voorkeur aan een rustiger leven thuis",
    ],
  },
  {
    id: "decision_style",
    section: "Jouw plannen",
    title: "Hoe wil je het liefst tot een beslissing komen?",
    type: "single",
    options: [
      "Ik wil eerst begrijpen welke regio het beste bij mij past",
      "Ik wil regio's en woningen tegelijk vergelijken",
      "Ik heb al een voorkeursregio en wil geschikte woningen zien",
      "Ik wil vooral duidelijkheid over risico's en praktische verschillen",
      "Ik sta nog helemaal aan het begin van mijn zoektocht",
    ],
  },
  {
    id: "purchase_goal",
    section: "Jouw plannen",
    title: "Wat is je belangrijkste reden om in Spanje te kopen?",
    type: "single",
    options: [
      "Permanent naar Spanje verhuizen",
      "Tweede woning of vakantiehuis",
      "Nu gedeeltelijk in Spanje wonen en later mogelijk permanent verhuizen",
      "Investering",
      "Een combinatie van levensstijl en investering",
      "Ik ben mij nog aan het oriënteren",
    ],
  },
  {
    id: "household_profile",
    section: "Jouw plannen",
    title: "Welke omschrijving past het beste bij jouw huishouden?",
    type: "single",
    options: [
      "Alleenstaande koper",
      "Stel",
      "Gezin met jonge kinderen",
      "Gezin met schoolgaande kinderen",
      "Huishouden met volwassen kinderen of meerdere generaties",
      "Gepensioneerd of deels gepensioneerd huishouden",
    ],
  },
  {
    id: "time_in_spain",
    section: "Jouw plannen",
    title: "Hoeveel tijd verwacht je elk jaar in Spanje door te brengen?",
    type: "single",
    options: [
      "Minder dan 1 maand per jaar",
      "1 tot 3 maanden per jaar",
      "3 tot 6 maanden per jaar",
      "Meer dan 6 maanden per jaar",
      "Het hele jaar of bijna het hele jaar",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "season_of_use",
    section: "Jouw plannen",
    title: "Wanneer verwacht je de woning vooral te gebruiken?",
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
      "Ik weet het nog niet",
    ],
  },
  {
    id: "timeline",
    section: "Jouw plannen",
    title: "Wanneer zou je idealiter willen kopen?",
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
    section: "Jouw plannen",
    title: "Hoe verwacht je de aankoop te financieren?",
    type: "single",
    options: [
      "Volledig uit eigen middelen",
      "Hypotheek in Spanje",
      "Hypotheek of financiering in een ander land",
      "Combinatie van eigen geld en financiering",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "budget",
    section: "Jouw plannen",
    title: "Wat is ongeveer je budget voor de woning?",
    type: "single",
    options: [
      "Onder €300.000",
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
    section: "Jouw plannen",
    title: "Wat moet binnen dit budget vallen?",
    type: "single",
    options: [
      "Woningprijs, belastingen, juridische kosten en alle aankoopkosten",
      "Woningprijs en aankoopkosten, maar geen renovatie",
      "Alleen de woningprijs",
      "Ik heb een apart renovatiebudget",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "monthly_running_costs",
    section: "Jouw plannen",
    title: "Welk niveau van maandelijkse vaste lasten voelt comfortabel?",
    type: "single",
    options: [
      "Zo laag mogelijk",
      "Tot ongeveer €300 per maand",
      "€300 tot €600 per maand",
      "€600 tot €1.000 per maand",
      "Meer dan €1.000 per maand is acceptabel als de woning perfect is",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "property_type",
    section: "Jouw woning",
    title: "Welke woningtypes zou je serieus overwegen?",
    type: "multiple",
    maxSelections: 3,
    helper: "Kies maximaal 3 opties.",
    options: [
      "Vrijstaande villa",
      "Luxe villa",
      "Appartement",
      "Penthouse",
      "Geschakelde woning of herenhuis",
      "Finca of landhuis",
      "Nieuwbouwproject",
      "Woning in een golfresort of golfomgeving",
    ],
  },
  {
    id: "property_style",
    section: "Jouw woning",
    title: "Welke woningstijl spreekt je het meest aan?",
    type: "multiple",
    maxSelections: 3,
    helper: "Kies maximaal 3 opties.",
    options: [
      "Modern en minimalistisch",
      "Mediterraan en traditioneel",
      "Gerenoveerd met karakter",
      "Luxueus en high-end",
      "Licht, rustig en onderhoudsarm",
      "Rustiek of finca-stijl",
      "Nieuwbouw met strakke lijnen",
      "Ik sta open voor verschillende stijlen",
    ],
  },
  {
    id: "condition",
    section: "Jouw woning",
    title: "Welke staat van onderhoud zou je overwegen?",
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
    section: "Jouw woning",
    title: "Hoe wil je omgaan met renovatie of verbeteringen?",
    type: "single",
    options: [
      "Ik wil geen renovatie- of bouwwerk organiseren",
      "Kleine verbeteringen zijn prima",
      "Ik sta open voor renovatie als lokale begeleiding beschikbaar is",
      "Ik heb renovatie-ervaring en kan goed zelf beslissingen nemen",
      "Ik zoek bewust een woning met renovatiepotentieel",
    ],
  },
  {
    id: "bedrooms",
    section: "Jouw woning",
    title: "Hoeveel slaapkamers heb je minimaal nodig?",
    type: "single",
    options: ["1", "2", "3", "4", "5", "6+"],
  },
  {
    id: "bathrooms",
    section: "Jouw woning",
    title: "Hoeveel badkamers zou je idealiter willen?",
    type: "single",
    options: [
      "1 badkamer is voldoende",
      "Minimaal 2 badkamers",
      "Minimaal 3 badkamers",
      "Minimaal 4 badkamers",
      "5 of meer badkamers",
      "Belangrijker: meerdere slaapkamers moeten een eigen badkamer hebben",
      "Ik ben flexibel",
    ],
  },
  {
    id: "guest_usage",
    section: "Jouw woning",
    title: "Hoe vaak verwacht je bezoek van familie of vrienden?",
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
    section: "Jouw woning",
    title: "Welke vorm van gastenverblijf zou het beste passen?",
    type: "single",
    options: [
      "Een apart gastenhuis, casita of zelfstandig appartement zou ideaal zijn",
      "Een aparte gastenverdieping of aanbouw met veel privacy",
      "Een gastenslaapkamer met eigen badkamer is voldoende",
      "Een gewone gastenkamer in het hoofdhuis is prima",
      "Gasten zijn voor ons geen belangrijke factor",
    ],
  },
  {
    id: "garden_size",
    section: "Jouw woning",
    title: "Hoeveel privé-buitenruimte voelt goed?",
    type: "single",
    options: [
      "Een terras of zeer kleine onderhoudsarme tuin is voldoende",
      "Compacte privétuin tot ongeveer 300 m²",
      "Goede gezinstuin van ongeveer 300 tot 700 m²",
      "Grote tuin van ongeveer 700 tot 1.500 m²",
      "Zeer groot perceel vanaf ongeveer 1.500 m²",
      "Enkele duizenden vierkante meters of een finca-achtige omgeving",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "home_features",
    section: "Jouw woning",
    title: "Welke eigenschappen van de woning zijn het belangrijkst?",
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
      "Gastenverblijf",
      "Buitenkeuken of entertainmentruimte",
      "Gelijkvloers of vrijwel zonder trappen",
      "Lift",
      "Afgesloten wooncomplex",
      "Privégarage of beveiligde parkeerplaats",
      "Laadpunt voor elektrische auto",
      "Thuiskantoor",
      "Veel winterzon of zuidoriëntatie",
      "Beschutting tegen sterke wind",
    ],
  },
  {
    id: "climate_comfort",
    section: "Jouw woning",
    title: "Hoe belangrijk zijn zon, schaduw en comfort gedurende het hele jaar?",
    type: "multiple",
    maxSelections: 6,
    helper: "Kies maximaal 6 punten.",
    options: [
      "Schaduw op terrassen en in de tuin",
      "Warme winterzon",
      "Zonnige tuin of terras op het zuiden",
      "Een groot deel van de dag zon rond het zwembad",
      "Beschutting tegen sterke wind",
      "Goede natuurlijke ventilatie",
      "Aangename binnentemperatuur in de zomer",
      "Aangename binnentemperatuur in de winter",
      "Koele zitplekken buiten",
      "Een woning die het hele jaar comfortabel aanvoelt",
    ],
  },
  {
    id: "outdoor_living",
    section: "Jouw woning",
    title: "Hoe wil je de buitenruimte gebruiken?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Rustig buiten ontbijten of koffie drinken",
      "Zonnebaden",
      "Schaduwrijke en koele zitplekken",
      "Buiten eten met familie of gasten",
      "Barbecue of buitenkeuken",
      "Tuinieren",
      "Privézwembad met voldoende privacy",
      "Veilige ruimte voor kinderen of huisdieren",
    ],
  },
  {
    id: "maintenance",
    section: "Jouw woning",
    title: "Hoeveel onderhoud wil je aan de woning en het terrein hebben?",
    type: "single",
    options: [
      "Heel weinig — ik wil een eenvoudige lock-up-and-leave woning",
      "Gemiddeld onderhoud is prima",
      "Tuin- en zwembadonderhoud zijn acceptabel",
      "Een groot huis en terrein laten onderhouden is geen probleem",
      "Ik zou professionele property-managementdiensten gebruiken",
    ],
  },
  {
    id: "property_management",
    section: "Jouw woning",
    title: "Hoe moet de woning worden beheerd als je niet in Spanje bent?",
    type: "single",
    options: [
      "De woning moet zo weinig mogelijk beheer nodig hebben",
      "Ik wil sleutelbeheer en regelmatige woningcontroles",
      "Ik heb tuin- en zwembadonderhoud nodig",
      "Ik wil volledig property management",
      "Familie, vrienden of bekenden zorgen ervoor",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "build_quality_comfort",
    section: "Jouw woning",
    title: "Welke technische punten moeten bij een woninginspectie extra aandacht krijgen?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 punten die voor jou extra belangrijk zijn.",
    options: [
      "Isolatie en kwaliteit van ramen",
      "Verwarming en airconditioning",
      "Elektrische installatie en leidingen",
      "Energiezuinigheid",
      "Dak, terrassen en afwatering",
      "Algemene bouwkwaliteit",
      "Zwembad, irrigatie of technische installaties",
      "Ik heb hierbij advies nodig",
    ],
  },
  {
    id: "view_vs_convenience",
    section: "Locatie en bereikbaarheid",
    title: "Wat is belangrijker: uitzicht of dagelijks gemak?",
    type: "single",
    options: [
      "Uitzicht is belangrijker, ook als de locatie steiler is of je vaker de auto nodig hebt",
      "Een goede balans tussen uitzicht en praktisch dagelijks leven",
      "Loopafstand en makkelijke bereikbaarheid zijn belangrijker dan uitzicht",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "preferred_view",
    section: "Locatie en bereikbaarheid",
    title: "Welk uitzicht zou de meeste waarde toevoegen aan je dagelijks leven?",
    type: "multiple",
    maxSelections: 3,
    helper: "Kies maximaal 3 opties.",
    options: [
      "Panoramisch zeezicht",
      "Gedeeltelijk of verder weg gelegen zeezicht",
      "Bergzicht",
      "Uitzicht over vallei of landschap",
      "Open groene omgeving",
      "Uitzicht op stad of marina",
      "Uitzicht is minder belangrijk dan privacy en gemak",
    ],
  },
  {
    id: "areas_to_avoid",
    section: "Locatie en bereikbaarheid",
    title: "Zijn er plaatsen, regio's of omgevingen die je liever wilt vermijden?",
    type: "text",
    optional: true,
    helper: "Optioneel. Noem plaatsen of omgevingen die voor jou niet goed voelen.",
  },
  {
    id: "daily_mobility",
    section: "Locatie en bereikbaarheid",
    title: "Hoe wil je dagelijkse voorzieningen het liefst bereiken?",
    type: "single",
    options: [
      "Vooral te voet",
      "Met fiets of e-bike",
      "Een korte autorit is prima",
      "Dagelijks de auto gebruiken is geen probleem",
      "Dit is niet belangrijk",
    ],
  },
  {
    id: "amenity_distance",
    section: "Locatie en bereikbaarheid",
    title: "Welke afstand tot dagelijkse voorzieningen voelt comfortabel?",
    type: "single",
    options: [
      "Supermarkt, café en apotheek liefst binnen 5 tot 10 minuten lopen",
      "Belangrijke voorzieningen binnen 15 tot 20 minuten lopen",
      "Een autorit tot 10 minuten is prima",
      "Tot 20 minuten met de auto is acceptabel",
      "Afstand is minder belangrijk dan rust, uitzicht of grond",
    ],
  },
  {
    id: "car_parking_needs",
    section: "Locatie en bereikbaarheid",
    title: "Wat zijn je wensen voor auto's en parkeren?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Eén privéparkeerplaats is voldoende",
      "Twee privéparkeerplaatsen zijn belangrijk",
      "Drie of meer privéparkeerplaatsen zijn belangrijk",
      "Een privégarage is belangrijk",
      "Makkelijk parkeren voor gasten is belangrijk",
      "Ik wil een elektrische auto en thuis kunnen laden",
      "Ik wil zo weinig mogelijk auto rijden",
      "Parkeren is geen doorslaggevende factor",
    ],
  },
  {
    id: "access_terrain",
    section: "Locatie en bereikbaarheid",
    title: "Welke wegen, hoogteverschillen en trappen zijn voor jou acceptabel?",
    type: "multiple",
    maxSelections: 6,
    helper: "Kies alle omstandigheden die voor jou acceptabel zijn.",
    options: [
      "Alleen vlakke en eenvoudige toegang",
      "Lichte heuvels zijn prima",
      "Steile wegen zijn acceptabel",
      "Smalle woonwegen zijn acceptabel",
      "Landelijke of deels onverharde toegang is acceptabel",
      "Buitentrappen zijn acceptabel",
      "Trappen binnen zijn acceptabel",
      "Ik geef de voorkeur aan gelijkvloers wonen of een lift",
    ],
  },
  {
    id: "airport_access",
    section: "Locatie en bereikbaarheid",
    title: "Wat is de maximale acceptabele rijtijd naar een luchthaven?",
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
    section: "Locatie en bereikbaarheid",
    title: "Speelt een boot of ligplaats een rol bij je keuze voor een locatie?",
    type: "single",
    options: [
      "Nee, dit is niet relevant",
      "Ik heb al een boot en heb een ligplaats nodig",
      "Ik ben van plan in Spanje een boot te kopen",
      "Ik wil graag dicht bij een marina wonen, ook zonder eigen boot",
      "Ik ben geïnteresseerd in zeilen of watersport maar heb geen ligplaats nodig",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "boat_details",
    section: "Locatie en bereikbaarheid",
    title: "Welke eisen zijn belangrijk voor je boot of ligplaats?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Ligplaats voor een kleine motorboot",
      "Ligplaats voor een grotere motorboot",
      "Ligplaats voor een zeilboot",
      "Marina binnen 10 minuten",
      "Marina binnen 20 minuten",
      "Goede toegang en parkeergelegenheid bij de marina",
      "Onderhoud, winterstalling of bootservices dichtbij",
      "Restaurants en clubleven rond de marina",
      "Ik heb hierbij advies nodig",
    ],
    showIf: (answers) =>
      answers.boat_needs &&
      answers.boat_needs !== "Nee, dit is niet relevant" &&
      answers.boat_needs !==
        "Ik ben geïnteresseerd in zeilen of watersport maar heb geen ligplaats nodig",
  },
  {
    id: "school_needs",
    section: "Locatie en bereikbaarheid",
    title: "Welke soorten scholen zijn relevant voor jouw gezin?",
    type: "multiple",
    maxSelections: 3,
    helper: "Kies maximaal 3 opties.",
    options: [
      "Spaanse openbare school",
      "Spaanse privéschool",
      "Tweetalige school",
      "Internationale school",
      "Online- of thuisonderwijs",
      "Ik weet het nog niet",
    ],
    showIf: (answers) =>
      answers.household_profile === "Gezin met jonge kinderen" ||
      answers.household_profile === "Gezin met schoolgaande kinderen",
  },
  {
    id: "healthcare_access",
    section: "Locatie en bereikbaarheid",
    title: "Welke bereikbaarheid van medische zorg geeft je een prettig gevoel?",
    type: "single",
    options: [
      "Ziekenhuis en Nederlands- of Engelstalige zorg binnen ongeveer 15 minuten",
      "Ziekenhuis en internationale medische zorg binnen ongeveer 30 minuten",
      "Een lokale kliniek en apotheek in de buurt zijn voldoende",
      "Toegang tot particuliere zorg is belangrijker dan afstand",
      "Medische zorg is geen belangrijke locatiefactor",
    ],
  },
  {
    id: "accessibility",
    section: "Locatie en bereikbaarheid",
    title: "Hoe belangrijk is toegankelijkheid op de lange termijn?",
    type: "single",
    options: [
      "Essentieel — zo weinig mogelijk trappen en makkelijke toegang",
      "Heel belangrijk met het oog op de toekomst",
      "Gewenst, maar niet noodzakelijk",
      "Niet belangrijk",
    ],
  },
  {
    id: "employment_relevance",
    section: "Werk en praktisch leven",
    title: "Hebben werk, ondernemerschap of professionele kansen invloed op waar je wilt wonen?",
    type: "single",
    options: [
      "Ja — ik heb lokale werkgelegenheid in de buurt nodig",
      "Ja — ik heb een bedrijf en wil toegang tot een actieve lokale economie",
      "Ik werk op afstand, maar professioneel netwerken is belangrijk",
      "Ik werk op afstand en kan vrijwel overal wonen",
      "Ik overweeg in Spanje een bedrijf te starten of over te nemen",
      "Werk is niet relevant voor mijn verhuizing",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "work_environment",
    section: "Werk en praktisch leven",
    title: "Welke zakelijke of werkgelegenheidsomgeving zou het meest nuttig zijn?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Toerisme, hospitality of horeca",
      "Vastgoed, bouw of interieurdesign",
      "Gezondheidszorg of zorgverlening",
      "Onderwijs of internationale scholen",
      "Professionele en internationale dienstverlening",
      "Retail of lokale handel",
      "Technologie, remote work of digitale bedrijven",
      "Ondernemerschap en internationaal netwerken",
      "De lokale arbeidsmarkt is niet belangrijk",
    ],
    showIf: (answers) =>
      answers.employment_relevance &&
      answers.employment_relevance !== "Werk is niet relevant voor mijn verhuizing",
  },
  {
    id: "remote_work_facilities",
    section: "Werk en praktisch leven",
    title: "Als je vanuit Spanje werkt, wat maakt je werkdag makkelijker?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Zeer betrouwbaar glasvezelinternet",
      "Een aparte thuiswerkplek",
      "Coworkingplekken in de buurt",
      "Rustige omgeving tijdens werktijden",
      "Goede luchthavenverbinding voor zakelijke reizen",
      "Netwerken met andere internationale professionals",
      "Goede cafés of hotellounges waar je af en toe kunt werken",
      "Dit is niet relevant voor mij",
    ],
    exclusiveOptions: ["Dit is niet relevant voor mij"],
  },
  {
    id: "internet",
    section: "Locatie en bereikbaarheid",
    title: "Hoe belangrijk is betrouwbaar snel internet bij de woning?",
    type: "single",
    options: [
      "Essentieel voor werk of onderneming",
      "Heel belangrijk",
      "Handig, maar niet essentieel",
      "Niet belangrijk",
    ],
  },
  {
    id: "community_mix",
    section: "Gemeenschap en dagelijks leven",
    title: "Bij welke mix van bewoners zou je je het meest thuis voelen?",
    type: "multiple",
    maxSelections: 3,
    helper: "Kies maximaal 3 opties. Hiermee vergelijken we het sociale karakter van verschillende plaatsen en wijken.",
    options: [
      "Vooral lokale Spaanse inwoners",
      "Vooral Spanjaarden met enkele internationale inwoners",
      "Een evenwichtige mix van Spaanse en internationale inwoners",
      "Een sterke Britse gemeenschap",
      "Een sterke Duitstalige gemeenschap",
      "Een sterke Nederlandse of Belgische gemeenschap",
      "Een duidelijke Scandinavische gemeenschap",
      "Een brede internationale mix",
      "Een woonomgeving die het hele jaar bewoond is",
      "Geen voorkeur",
    ],
    exclusiveOptions: ["Geen voorkeur"],
  },
  {
    id: "community_networks",
    section: "Gemeenschap en dagelijks leven",
    title: "Zou toegang tot sociale, internationale of kerkelijke gemeenschappen nuttig voor je zijn?",
    type: "multiple",
    maxSelections: 5,
    optional: true,
    helper: "Optioneel — kies alleen wat relevant is voor jouw levensstijl.",
    options: [
      "Lokale Spaanse verenigingen en gemeenschapsgroepen",
      "Britse of Engelstalige sociale clubs",
      "Duitstalige sociale clubs of vrouwenverenigingen",
      "Nederlandse of Belgische sociale clubs",
      "Scandinavische sociale clubs",
      "Amerikaanse of internationale vrouwennetwerken",
      "Internationale zakelijke of professionele netwerken",
      "Katholieke kerk in de buurt",
      "Protestantse of evangelische kerk in de buurt",
      "Anglicaanse of Engelstalige kerk in de buurt",
      "Internationale christelijke gemeenschap",
      "Goede doelen of vrijwilligersorganisaties",
      "Geen van deze is belangrijk voor mij",
    ],
    exclusiveOptions: ["Geen van deze is belangrijk voor mij"],
  },
  {
    id: "language_integration",
    section: "Gemeenschap en dagelijks leven",
    title: "Hoe sterk wil je integreren in het lokale Spaanse leven?",
    type: "single",
    options: [
      "Sterk — ik wil Spaans leren en actief deelnemen aan het lokale leven",
      "Ik wil een goede balans tussen Spaans en internationaal leven",
      "Ik geef de voorkeur aan een internationale omgeving maar wil wel lokaal contact",
      "Ik wil vooral Nederlands- of Engelstalige diensten en een makkelijk internationaal netwerk",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "language_comfort",
    section: "Gemeenschap en dagelijks leven",
    title: "Hoe belangrijk is een Nederlands-, Engels- of internationaal georiënteerde omgeving?",
    type: "single",
    options: [
      "Heel belangrijk — ik wil veel internationale contacten of diensten",
      "Internationale diensten zijn voldoende",
      "Een internationale mix is ideaal",
      "Ik wil juist meer Spaans dagelijks leven",
      "Taal is geen doorslaggevende factor",
    ],
  },
  {
    id: "neighbour_contact",
    section: "Gemeenschap en dagelijks leven",
    title: "Hoeveel contact wil je idealiter met je buren?",
    type: "single",
    options: [
      "Een actieve en sociale buurt",
      "Vriendelijk regelmatig contact met behoud van privacy",
      "Alleen af en toe contact",
      "Maximale privacy met zo weinig mogelijk contact",
      "Geen voorkeur",
    ],
  },
  {
    id: "security_feeling",
    section: "Gemeenschap en dagelijks leven",
    title: "Wat geeft je in Spanje een goed gevoel van veiligheid?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Buren in de buurt",
      "Een gebied dat het hele jaar bewoond is",
      "Afgesloten wooncomplex",
      "Alarmsysteem of beveiligingsdienst",
      "Privé-oprit of beveiligde parkeerplaats",
      "Goede straatverlichting",
      "Rustige locatie zonder veel doorgaand verkeer",
      "Veiligheid is voor mij geen belangrijke factor",
    ],
    exclusiveOptions: ["Veiligheid is voor mij geen belangrijke factor"],
  },
  {
    id: "privacy_level",
    section: "Gemeenschap en dagelijks leven",
    title: "Hoeveel afstand en privacy wil je ten opzichte van buren?",
    type: "single",
    options: [
      "Maximale privacy zonder directe buren dichtbij",
      "Vrijstaande woning met buren op comfortabele afstand",
      "Woonwijk met buren dichtbij is prima",
      "Appartement of stedelijke omgeving is prima",
      "Geen voorkeur",
    ],
  },
  {
    id: "seasonal_tourism",
    section: "Gemeenschap en dagelijks leven",
    title: "Hoe kijk je aan tegen seizoenstoerisme en drukte in de zomer?",
    type: "single",
    options: [
      "Ik wil het hele jaar een rustige woonomgeving",
      "Enige seizoensdrukte is prima",
      "Ik houd van een levendige zomersfeer",
      "Ik geef de voorkeur aan een actief toeristisch gebied",
      "Geen voorkeur",
    ],
  },
  {
    id: "year_round_environment",
    section: "Gemeenschap en dagelijks leven",
    title: "Welke voorzieningen moeten ook in de winter beschikbaar blijven?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Restaurants en cafés",
      "Winkels en supermarkten",
      "Medische zorg",
      "Sport- en fitnessfaciliteiten",
      "Sociale activiteiten",
      "Internationaal gemeenschapsleven",
      "Culturele evenementen",
      "Levendig centrum",
      "Dit is niet belangrijk",
    ],
    exclusiveOptions: ["Dit is niet belangrijk"],
  },
  {
    id: "lifestyle",
    section: "Gemeenschap en dagelijks leven",
    title: "Welke activiteiten en lifestyle-elementen zijn het belangrijkst?",
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
      "Lokale Spaanse gerechten en markten",
      "Fine dining en wijn",
      "Kunst en cultuur",
      "Zakelijk of professioneel netwerken",
      "Gezinsactiviteiten",
      "Rustig leven thuis",
    ],
  },
  {
    id: "sports_proximity",
    section: "Gemeenschap en dagelijks leven",
    title: "Hoe dichtbij wil je golf, padel of andere sportfaciliteiten hebben?",
    type: "single",
    options: [
      "Binnen ongeveer 10 minuten is belangrijk",
      "Binnen ongeveer 20 minuten is ideaal",
      "Binnen ongeveer 30 minuten is prima",
      "Ik wil specifiek in of direct bij een golfomgeving wonen",
      "Sportfaciliteiten zijn leuk, maar geen doorslaggevende factor",
      "Dit is niet belangrijk",
    ],
  },
  {
    id: "daily_routine",
    section: "Gemeenschap en dagelijks leven",
    title: "Hoe ziet jouw ideale dagelijkse leven in Spanje eruit?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "In de ochtend lopend koffie gaan drinken",
      "Dagelijks langs zee of over het strand wandelen",
      "Veel tijd thuis en op het terras doorbrengen",
      "Regelmatig restaurants en cafés bezoeken",
      "Sport-, fitness- of padelfaciliteiten dichtbij gebruiken",
      "Markten en lokale winkels bezoeken",
      "Rustig werken of vanuit huis werken",
      "Familie en vrienden ontvangen",
      "Zo eenvoudig mogelijk aankomen en wonen zonder veel organisatie",
    ],
  },
  {
    id: "pets",
    section: "Gemeenschap en dagelijks leven",
    title: "Zijn huisdieren onderdeel van je leven in Spanje?",
    type: "single",
    options: [
      "Geen huisdieren",
      "Hond of honden",
      "Kat of katten",
      "Andere of meerdere huisdieren",
    ],
  },
  {
    id: "pet_needs",
    section: "Gemeenschap en dagelijks leven",
    title: "Welke voorzieningen voor huisdieren zijn belangrijk?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Veilig afgesloten privétuin",
      "Wandelroutes dichtbij",
      "Hondvriendelijk strand",
      "Dierenarts dichtbij",
      "Rustige omgeving",
      "Huisdiervriendelijke regels in de gemeenschap",
    ],
    showIf: (answers) =>
      answers.pets && answers.pets !== "Geen huisdieren",
  },
  {
    id: "noise_tolerance",
    section: "Mogelijke zorgen",
    title: "Hoe rustig moet jouw ideale locatie zijn?",
    type: "single",
    options: [
      "Extreem rustig — minimale achtergrondgeluiden zijn essentieel",
      "Heel rustig, met slechts af en toe lokale activiteit",
      "Enig dagelijks achtergrondgeluid is acceptabel",
      "Een levendige omgeving is acceptabel",
      "Geluid is voor mij geen belangrijke factor",
    ],
  },
  {
    id: "unacceptable_noise",
    section: "Mogelijke zorgen",
    title: "Welke geluidsbronnen zouden je beslissing sterk beïnvloeden?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Drukke wegen of snelweggeluid",
      "Bars, restaurants of nachtleven",
      "Vakantieverhuur en veel wisselende gasten",
      "Erg druk toerisme in de zomer",
      "Bouwlawaai",
      "Vliegtuiglawaai",
      "Honden of regelmatig buurtgeluid",
      "Scholen, sportfaciliteiten of speeltuinen",
      "Kerkklokken, feesten of lokale vieringen",
      "Geen van deze zou een groot probleem zijn",
    ],
    exclusiveOptions: ["Geen van deze zou een groot probleem zijn"],
  },
  {
    id: "infrastructure_dealbreakers",
    section: "Mogelijke zorgen",
    title: "Welke zichtbare infrastructuur zou je beslissing negatief beïnvloeden?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Hoogspanningsmasten",
      "Bovengrondse elektriciteitskabels of palen naast de woning",
      "Mobiele telefoon- of communicatiemasten",
      "Drukke wegen zichtbaar vanuit de woning",
      "Grote appartementencomplexen dichtbij",
      "Industriële of commerciële gebouwen",
      "Actieve bouwplaatsen of onbebouwde percelen",
      "Directe inkijk door buren",
      "Geen van deze zou een groot probleem zijn",
    ],
    exclusiveOptions: ["Geen van deze zou een groot probleem zijn"],
  },
  {
    id: "environmental_concerns",
    section: "Mogelijke zorgen",
    title: "Welke milieu- of grondrisico's zouden je het meest bezighouden?",
    type: "multiple",
    maxSelections: 5,
    helper: "Kies maximaal 5 opties.",
    options: [
      "Gebieden met overstromingsrisico",
      "Risico op natuur- of bosbranden",
      "Steile percelen of grote keermuren",
      "Sterke wind",
      "Hoge luchtvochtigheid of vochtproblemen",
      "Kusterosie of extreme blootstelling aan zee",
      "Landelijke voorzieningen zoals septic tank of wateropslag",
      "Geen van deze zou een groot probleem zijn",
    ],
    exclusiveOptions: ["Geen van deze zou een groot probleem zijn"],
  },
  {
    id: "legal_technical_risk_tolerance",
    section: "Mogelijke zorgen",
    title: "Hoeveel juridische of technische complexiteit is voor jou acceptabel?",
    type: "single",
    options: [
      "Zo weinig mogelijk — ik wil een juridisch en technisch zo eenvoudig mogelijke woning",
      "Kleine problemen zijn acceptabel als ze vóór aankoop opgelost kunnen worden",
      "Ik sta open voor complexere woningen als prijs en locatie goed zijn",
      "Ik weet het nog niet en heb hierbij advies nodig",
    ],
  },
  {
    id: "rental_intent",
    section: "Verhuur en laatste prioriteiten",
    title: "Verwacht je de woning te gaan verhuren?",
    type: "single",
    options: [
      "Nee",
      "Af en toe aan familie of vrienden",
      "Incidentele korte vakantieverhuur",
      "Regelmatige vakantieverhuur",
      "Langetermijnverhuur",
      "Huurinkomsten zijn een belangrijk onderdeel van het plan",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "rental_priorities",
    section: "Verhuur en laatste prioriteiten",
    title: "Welke verhuurfactoren zijn het belangrijkst?",
    type: "multiple",
    maxSelections: 4,
    helper: "Kies maximaal 4 opties.",
    options: [
      "Locatie met sterke vraag naar verhuur",
      "Mogelijkheid voor toeristische verhuur of vergunning",
      "Gemeenschapsregels die verhuur toestaan",
      "Professioneel verhuurbeheer",
      "Goede luchthaven- en strandbereikbaarheid voor gasten",
      "Balans tussen verhuurrendement en eigen gebruik",
    ],
    showIf: (answers) =>
      answers.rental_intent &&
      answers.rental_intent !== "Nee" &&
      answers.rental_intent !== "Af en toe aan familie of vrienden",
  },
  {
    id: "resale_importance",
    section: "Verhuur en laatste prioriteiten",
    title: "Hoe belangrijk is toekomstige verkoopbaarheid?",
    type: "single",
    options: [
      "Heel belangrijk — de woning moet op lange termijn goed verkoopbaar blijven",
      "Belangrijk, maar levenskwaliteit weegt zwaarder",
      "Niet doorslaggevend als de woning perfect bij ons past",
      "Daar heb ik nog niet over nagedacht",
    ],
  },
  {
    id: "top_priorities",
    section: "Verhuur en laatste prioriteiten",
    title: "Welke factoren hebben voor jou de hoogste prioriteit?",
    type: "multiple",
    maxSelections: 6,
    helper: "Kies je 6 belangrijkste prioriteiten.",
    options: [
      "Rustige omgeving",
      "Privacy",
      "Veiligheid",
      "Loopafstand",
      "Strand dichtbij",
      "Zeezicht",
      "Internationale gemeenschap",
      "Authentiek Spaanse sfeer",
      "Sociaal leven in de buurt",
      "Medische zorg",
      "Luchthavenbereikbaarheid",
      "Voorzieningen die het hele jaar open zijn",
      "Snel internet",
      "Makkelijke toegankelijkheid",
      "Weinig onderhoud",
      "Grote tuin",
      "Golf",
      "Marina dichtbij",
      "Geschikt voor gezin en scholen",
      "Waardeontwikkeling op lange termijn",
      "Verhuurpotentieel",
    ],
  },
  {
    id: "absolute_dealbreakers",
    section: "Verhuur en laatste prioriteiten",
    title: "Welke factoren zouden een regio of woning direct uitsluiten?",
    type: "multiple",
    maxSelections: 6,
    helper: "Kies maximaal 6 absolute dealbreakers.",
    options: [
      "Verkeers- of snelweggeluid",
      "Nachtleven of restaurantgeluid",
      "Hoogspanningsmasten of bovengrondse elektriciteitskabels",
      "Veel inkijk door buren",
      "Buren heel dicht bij de woning",
      "Steile of moeilijke toegangsweg",
      "Geen privéparkeerplaats",
      "Zeer druk toerisme in de zomer",
      "Geïsoleerde ligging",
      "Hoge gemeenschapskosten",
      "Grote renovatie nodig",
      "Geen betrouwbaar snel internet",
      "Weinig voorzieningen open in de winter",
      "Grote afstand tot medische zorg",
      "Overstromings- of natuurbrandrisico",
      "Geen passende marina of ligplaats in de buurt",
      "Geen van deze is een absolute dealbreaker",
    ],
    exclusiveOptions: ["Geen van deze is een absolute dealbreaker"],
  },
  {
    id: "biggest_uncertainty",
    section: "Verhuur en laatste prioriteiten",
    title: "Wat is je grootste onzekerheid bij het kopen in Spanje?",
    type: "multiple",
    maxSelections: 3,
    helper: "Kies maximaal 3 opties.",
    options: [
      "De juiste regio kiezen",
      "Begrijpen wat een eerlijke marktwaarde is",
      "Juridische risico's begrijpen",
      "Verborgen kosten vermijden",
      "Renovatiebehoefte of technische staat beoordelen",
      "Belastingen en vaste lasten begrijpen",
      "Regels voor verhuur begrijpen",
      "Alles vanuit het buitenland organiseren",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "additional_notes",
    section: "Verhuur en laatste prioriteiten",
    title: "Is er nog iets dat een regio of woning voor jou precies goed — of juist helemaal verkeerd — zou maken?",
    type: "text",
    optional: true,
    helper: "Optioneel. Voeg alles toe wat hierboven nog niet aan bod is gekomen.",
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
        "Kies of vul een antwoord in voordat je verdergaat."
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
      alert("Vul je naam en e-mailadres in.");
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      alert("Vul een geldig e-mailadres in.");
      return;
    }

    if (!consent) {
      alert(
        "Bevestig dat we je antwoorden mogen gebruiken om je persoonlijke rapport op te stellen en contact met je op te nemen over je aanvraag."
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
        version: "5.0-NL",
      },
    };

    const answersForEmail: Record<string, unknown> = Object.fromEntries(
      visibleQuestions
        .filter((question) =>
          Object.prototype.hasOwnProperty.call(filteredAnswers, question.id)
        )
        .map((question) => [question.title, filteredAnswers[question.id]])
    );

    answersForEmail["Language"] = "Dutch";
    answersForEmail["Assessment version"] = "5.0-NL";

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
          "We could not save your request.\n\n" +
            "Message: " +
            error.message +
            "\n\nDetails: " +
            (error.details || "Not provided") +
            "\n\nHint: " +
            (error.hint || "Not provided") +
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
        form_language: "nl",
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
          "The assessment was saved, but the email notification could not be sent:",
          emailResult
        );

        alert(
          "Your answers were saved, but the email notification could not be sent. Please contact Nordic Move Spain if you do not receive a response."
        );
      }

      setSubmitted(true);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "An unknown error occurred.";

      alert(
        "We could not save your request.\n\n" + message
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

          <h1 style={styles.title}>Bedankt voor je aanvraag</h1>

          <p style={styles.text}>
            Bedankt, {contact.name}. We hebben jouw Costa Blanca Area Match
            Assessment ontvangen en gebruiken je antwoorden om jouw persoonlijke
            rapport op te stellen.
          </p>

          <p style={styles.highlight}>{contact.email}</p>

          {contact.phone.trim() && (
            <p style={styles.text}>
              Als we een antwoord willen verduidelijken, kunnen we contact met je opnemen via
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
          <p style={styles.sectionLabel}>Jouw persoonlijke rapport</p>

          <h1 style={styles.title}>
            Ontvang jouw persoonlijke Area Match Report
          </h1>

          <p style={styles.text}>
            Vul hieronder je contactgegevens in. We gebruiken je antwoorden om jouw
            persoonlijke Costa Blanca Area Match Report op te stellen en sturen het naar
            je e-mailadres.
          </p>

          <div style={styles.form}>
            <label style={styles.fieldLabel}>
              Naam

              <input
                placeholder="Jouw naam"
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
                placeholder="Jouw e-mailadres"
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
              <span style={styles.optionalText}>(optional)</span>

              <input
                placeholder="Jouw telefoonnummer"
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
                Ik ga ermee akkoord dat Nordic Move Spain mijn antwoorden gebruikt om
                mijn persoonlijke Area Match Report op te stellen en contact met mij
                op te nemen over deze aanvraag.
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
                  : "Vraag mijn rapport aan"}
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
          Stap {step + 1} · {progress}% voltooid
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
            placeholder="Vul hier eventuele extra wensen, zorgen of dealbreakers in."
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