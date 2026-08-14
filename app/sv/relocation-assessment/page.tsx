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
    section: "Dina planer",
    title: "Vilken beskrivning passar bäst in på ditt hushåll?",
    type: "single",
    options: [
      "Ensam köpare",
      "Par",
      "Familj med små barn",
      "Familj med barn i skolålder",
      "Flergenerationshushåll eller hushåll med vuxna barn",
      "Pensionerat eller delvis pensionerat hushåll",
    ],
  },
  {
    id: "purchase_goal",
    section: "Dina planer",
    title: "Vad är din främsta anledning till att köpa bostad i Spanien?",
    type: "single",
    options: [
      "Permanent flytt",
      "Andra bostad",
      "Bo delvis i Spanien och eventuellt flytta senare",
      "Investering",
      "En kombination av livskvalitet och investering",
      "Jag orienterar mig fortfarande",
    ],
  },
  {
    id: "decision_style",
    section: "Dina planer",
    title: "Hur vill du fatta ditt beslut?",
    type: "single",
    options: [
      "Jag vill först förstå vilket område som passar bäst",
      "Jag vill jämföra områden och bostäder samtidigt",
      "Jag har redan ett föredraget område och vill se passande bostäder",
      "Jag behöver främst klarhet kring risker och praktiska skillnader",
      "Jag är fortfarande mycket tidigt i orienteringsfasen",
    ],
  },
  {
    id: "time_in_spain",
    section: "Dina planer",
    title: "Hur mycket tid räknar du med att tillbringa i Spanien varje år?",
    type: "single",
    options: [
      "Mindre än 1 månad per år",
      "1 till 3 månader per år",
      "3 till 6 månader per år",
      "Mer än 6 månader per år",
      "Året runt eller nästan året runt",
      "Jag är inte säker ännu",
    ],
  },
  {
    id: "season_of_use",
    section: "Dina planer",
    title: "När räknar du med att använda bostaden mest?",
    type: "multiple",
    maxSelections: 3,
    helper: "Välj upp till 3 alternativ.",
    options: [
      "Främst på sommaren",
      "Främst på vintern",
      "Vår och höst",
      "Skollov",
      "Flera längre vistelser per år",
      "Året runt",
      "Jag är inte säker ännu",
    ],
  },
  {
    id: "area_familiarity",
    section: "Dina planer",
    title: "Hur väl känner du redan till Costa Blanca North?",
    type: "single",
    options: [
      "Jag känner inte till området ännu",
      "Jag har besökt området en gång på semester",
      "Jag känner till några orter genom flera besök",
      "Jag har redan vissa orter i åtanke",
      "Jag känner området väl och vill jämföra mer exakt",
    ],
  },
  {
    id: "timeline",
    section: "Dina planer",
    title: "När skulle du helst vilja köpa?",
    type: "single",
    options: [
      "Inom 6 månader",
      "Inom 12 månader",
      "Inom 24 månader",
      "Mer än 24 månader från nu",
      "Jag orienterar mig fortfarande",
    ],
  },
  {
    id: "financing",
    section: "Dina planer",
    title: "Hur räknar du med att finansiera köpet?",
    type: "single",
    options: [
      "Kontantköp",
      "Bolån i Spanien",
      "Bolån eller finansiering i ett annat land",
      "En kombination av eget kapital och finansiering",
      "Jag är inte säker ännu",
    ],
  },
  {
    id: "budget",
    section: "Dina planer",
    title: "Vilken ungefärlig bostadsbudget har du?",
    type: "single",
    options: [
      "Under 300 000 €",
      "300 000 € - 500 000 €",
      "500 000 € - 750 000 €",
      "750 000 € - 1 000 000 €",
      "1 000 000 € - 2 000 000 €",
      "2 000 000 € - 5 000 000 €",
      "Över 5 000 000 €",
    ],
  },
  {
    id: "budget_scope",
    section: "Dina planer",
    title: "Vilka kostnader ingår i den här budgeten?",
    type: "single",
    options: [
      "Köpeskilling, skatter, juridiska kostnader och alla köpkostnader",
      "Köpeskilling och köpkostnader, men ingen renovering",
      "Endast köpeskillingen",
      "Jag har en separat renoveringsbudget",
      "Jag är inte säker ännu",
    ],
  },
  {
    id: "monthly_running_costs",
    section: "Dina planer",
    title: "Vilken nivå av månatliga driftskostnader känns bekväm för dig?",
    type: "single",
    options: [
      "Så låga som möjligt",
      "Upp till cirka 300 € per månad",
      "300 € till 600 € per månad",
      "600 € till 1 000 € per månad",
      "Över 1 000 € per månad är acceptabelt om bostaden är rätt",
      "Jag är inte säker ännu",
    ],
  },
  {
    id: "property_type",
    section: "Din bostad",
    title: "Vilka bostadstyper överväger du seriöst?",
    type: "multiple",
    maxSelections: 3,
    helper: "Välj upp till 3 alternativ.",
    options: [
      "Fristående villa",
      "Lyxvilla",
      "Lägenhet",
      "Takvåning",
      "Radhus eller parhus",
      "Finca eller lantligt hus",
      "Nyproduktionsprojekt",
      "Bostad i golfresort",
    ],
  },
  {
    id: "property_style",
    section: "Din bostad",
    title: "Vilken bostadsstil tilltalar dig mest?",
    type: "multiple",
    maxSelections: 3,
    helper: "Välj upp till 3 alternativ.",
    options: [
      "Modern och minimalistisk",
      "Medelhavsstil och traditionell",
      "Renoverad med karaktär",
      "Lyxig och exklusiv",
      "Ljus, lugn och lättskött",
      "Rustik eller finca-stil",
      "Nyproduktion med rena linjer",
      "Jag är öppen för olika stilar",
    ],
  },
  {
    id: "condition",
    section: "Din bostad",
    title: "Vilket skick på bostaden kan du tänka dig?",
    type: "multiple",
    maxSelections: 3,
    helper: "Välj upp till 3 alternativ.",
    options: [
      "Nyproduktion",
      "Nyligen renoverad",
      "Inflyttningsklar",
      "Lätt renovering är acceptabelt",
      "Större renovering är acceptabelt",
    ],
  },
  {
    id: "renovation_management",
    section: "Din bostad",
    title: "Hur vill du hantera renoveringar eller förbättringar?",
    type: "single",
    options: [
      "Jag vill inte organisera någon renovering eller några arbeten",
      "Mindre förbättringar är okej",
      "Jag är öppen för renovering om lokal hjälp finns",
      "Jag har erfarenhet av renovering och kan fatta beslut tryggt",
      "Jag vill uttryckligen ha ett projekt med renoveringspotential",
    ],
  },
  {
    id: "build_quality_comfort",
    section: "Din bostad",
    title: "Vilka tekniska punkter bör få extra uppmärksamhet vid bostadskontrollen?",
    type: "multiple",
    maxSelections: 5,
    helper: "Välj upp till 5 punkter som är särskilt viktiga för dig.",
    options: [
      "Isolering och fönsterkvalitet",
      "Värme- och kylsystem",
      "Elinstallation och VVS",
      "Energieffektivitet",
      "Tak, terrasser och vattenavrinning",
      "Allmän byggkvalitet",
      "Pool, bevattning eller tekniska installationer",
      "Jag behöver rådgivning kring detta",
    ],
  },
  {
    id: "bedrooms",
    section: "Din bostad",
    title: "Hur många sovrum behöver du minst?",
    type: "single",
    options: ["1", "2", "3", "4", "5", "6+"],
  },
  {
    id: "guest_usage",
    section: "Din bostad",
    title: "Hur ofta räknar du med besök från familj eller vänner?",
    type: "single",
    options: [
      "Sällan",
      "Några gånger per år",
      "Regelbundet under semesterperioder",
      "Frekventa längre besök",
      "Bostaden ska också fungera bra för familj eller flera generationer",
    ],
  },
  {
    id: "guest_privacy",
    section: "Din bostad",
    title: "Hur viktig är avskildhet för gäster eller familj i bostaden?",
    type: "single",
    options: [
      "Mycket viktigt — gäster ska kunna bo så självständigt som möjligt",
      "Ett separat gästrum eller gästbadrum räcker",
      "Delat boende och gemensamma ytor är helt okej",
      "Gäster är inte en viktig faktor",
    ],
  },
  {
    id: "home_features",
    section: "Din bostad",
    title: "Vilka bostadsegenskaper är viktigast för dig?",
    type: "multiple",
    maxSelections: 8,
    helper: "Välj upp till 8 alternativ.",
    options: [
      "Privat pool",
      "Gemensam pool",
      "Stor trädgård",
      "Lättskött utomhusyta",
      "Havsutsikt",
      "Panoramisk havsutsikt",
      "Separat gästdel",
      "Utekök eller yta för att ta emot gäster",
      "Boende i ett plan eller med få nivåskillnader",
      "Hiss",
      "Gated community",
      "Privat garage eller säker parkering",
      "Möjlighet till laddning av elbil",
      "Arbetsrum eller hemmakontor",
      "Mycket vintersol eller söderläge",
      "Skydd mot stark vind",
    ],
  },
  {
    id: "climate_comfort",
    section: "Din bostad",
    title: "Vilka klimatkomfortfaktorer är viktigast i vardagen?",
    type: "multiple",
    maxSelections: 5,
    helper: "Välj upp till 5 alternativ.",
    options: [
      "Skugga på terrasser och i trädgården",
      "Varm vintersol",
      "Skydd mot stark vind",
      "God naturlig ventilation",
      "Behaglig inomhustemperatur på sommaren",
      "Behaglig inomhustemperatur på vintern",
      "Svala sittplatser utomhus",
      "En bostad som känns bekväm året runt",
    ],
  },
  {
    id: "outdoor_living",
    section: "Din bostad",
    title: "Hur vill du använda utomhusytan?",
    type: "multiple",
    maxSelections: 5,
    helper: "Välj upp till 5 alternativ.",
    options: [
      "Äta frukost eller dricka kaffe utomhus i lugn och ro",
      "Sola",
      "Skugga och svala sittplatser",
      "Äta med familj eller gäster",
      "Grill eller utekök",
      "Trädgårdsarbete",
      "Privat poolområde",
      "Säker yta för barn eller husdjur",
    ],
  },
  {
    id: "maintenance",
    section: "Din bostad",
    title: "Hur mycket underhåll är du beredd att ta ansvar för?",
    type: "single",
    options: [
      "Mycket lite — jag föredrar en lättskött bostad",
      "En måttlig nivå av underhåll är acceptabel",
      "Trädgårds- och poolskötsel är acceptabelt",
      "Jag kan hantera en stor bostad med mark",
      "Jag skulle anlita professionell bostadsförvaltning",
    ],
  },
  {
    id: "property_management",
    section: "Din bostad",
    title: "Hur ska bostaden tas om hand när du inte är i Spanien?",
    type: "single",
    options: [
      "Jag vill att bostaden ska kräva så lite förvaltning som möjligt",
      "Jag vill ha nyckelservice och regelbundna kontroller",
      "Jag behöver trädgårds- och poolskötsel",
      "Jag vill ha full bostadsförvaltning",
      "Familj, vänner eller bekanta kommer att ta hand om den",
      "Jag är inte säker ännu",
    ],
  },
  {
    id: "preferred_setting",
    section: "Läge och tillgänglighet",
    title: "Vilka lägen tilltalar dig mest?",
    type: "multiple",
    maxSelections: 4,
    helper: "Välj upp till 4 alternativ.",
    options: [
      "Direkt vid havet",
      "Strand inom gångavstånd",
      "Bostadsområde med havsutsikt",
      "Stads- eller bycentrum",
      "Historiskt centrum",
      "Lugnt bostadsområde",
      "Golfmiljö",
      "Marina eller hamnområde",
      "Lantlig miljö",
      "Bergs- eller naturområde",
      "Exklusivt bostadsområde",
    ],
  },
  {
    id: "area_feeling",
    section: "Läge och tillgänglighet",
    title: "Vilken känsla ska ditt bostadsområde ha?",
    type: "multiple",
    maxSelections: 4,
    helper: "Välj upp till 4 alternativ.",
    options: [
      "Autentiskt spanskt",
      "Internationellt och välorganiserat",
      "Lugnt och högkvalitativt",
      "Livligt med restauranger och kaféer",
      "Kustnära och avslappnat",
      "Exklusivt och privat",
      "Familjevänligt",
      "Naturligt och lantligt",
      "Modernt och bekvämt",
    ],
  },
  {
    id: "view_vs_convenience",
    section: "Läge och tillgänglighet",
    title: "Vad är viktigast för dig: utsikt eller vardagsbekvämlighet?",
    type: "single",
    options: [
      "Utsikt är viktigast, även om läget är brantare eller mer bilberoende",
      "En bra balans mellan utsikt och praktisk vardag",
      "Gångavstånd och enkel tillgänglighet är viktigare än utsikt",
      "Jag är inte säker ännu",
    ],
  },
  {
    id: "areas_considered",
    section: "Läge och tillgänglighet",
    title: "Vilka orter eller områden överväger du redan?",
    type: "multiple",
    maxSelections: 6,
    helper: "Välj alla orter eller områden som redan intresserar dig.",
    options: [
      "Dénia",
      "Jávea",
      "Moraira",
      "Benissa",
      "Calpe",
      "Altea",
      "Benitachell / Cumbre del Sol",
      "Orba / Jalón / Inlandet",
      "Jag är öppen för rekommendationer",
      "Jag är inte säker ännu",
    ],
  },
  {
    id: "areas_to_avoid",
    section: "Läge och tillgänglighet",
    title: "Finns det några orter, områden eller miljöer du helst vill undvika?",
    type: "text",
    optional: true,
    helper:
      "Valfritt. Nämn orter, miljöer eller intryck som inte känns rätt för dig.",
  },
  {
    id: "daily_mobility",
    section: "Läge och tillgänglighet",
    title: "Hur vill du nå vardagliga servicefunktioner?",
    type: "single",
    options: [
      "Främst till fots",
      "Med cykel eller elcykel",
      "En kort bilresa är acceptabel",
      "Daglig bilkörning är inget problem",
      "Detta är inte viktigt",
    ],
  },
  {
    id: "amenity_distance",
    section: "Läge och tillgänglighet",
    title: "Vilket avstånd till vardaglig service känns bekvämt för dig?",
    type: "single",
    options: [
      "Mataffär, kafé och apotek helst inom 5 till 10 minuter till fots",
      "Viktig service inom 15 till 20 minuter till fots",
      "En kort bilresa på upp till 10 minuter är okej",
      "Upp till 20 minuter med bil är acceptabelt",
      "Avstånd är mindre viktigt än lugn, utsikt eller mark",
    ],
  },
  {
    id: "car_parking_needs",
    section: "Läge och tillgänglighet",
    title: "Vilka behov har du kring bil och parkering?",
    type: "multiple",
    maxSelections: 4,
    helper: "Välj upp till 4 alternativ.",
    options: [
      "En privat parkeringsplats räcker",
      "Två eller fler parkeringsplatser är viktigt",
      "Garage är viktigt",
      "Enkel gästparkering är viktigt",
      "Jag vill köra så lite bil som möjligt",
      "Jag planerar att ha elbil",
      "Parkering är inte en avgörande faktor",
    ],
  },
  {
    id: "access_terrain",
    section: "Läge och tillgänglighet",
    title: "Vilka åtkomst- och terrängförhållanden är acceptabla för dig?",
    type: "multiple",
    maxSelections: 4,
    helper: "Välj alla förhållanden som är acceptabla för dig.",
    options: [
      "Endast plana och lättillgängliga lägen",
      "Milda sluttningar är acceptabla",
      "Branta vägar är acceptabla",
      "Smala bostadsgator är acceptabla",
      "Lantlig eller delvis oasfalterad åtkomst är acceptabel",
      "Trappor inne i eller utanför bostaden är acceptabla",
    ],
  },
  {
    id: "airport_access",
    section: "Läge och tillgänglighet",
    title: "Vilken är den längsta körtid till flygplatsen som du accepterar?",
    type: "single",
    options: [
      "Upp till 30 minuter",
      "Upp till 45 minuter",
      "Upp till 60 minuter",
      "Upp till 90 minuter",
      "Ingen preferens",
    ],
  },
  {
    id: "boat_needs",
    section: "Läge och tillgänglighet",
    title: "Spelar båt eller båtplats en roll i ditt val av läge?",
    type: "single",
    options: [
      "Nej, detta är inte relevant",
      "Jag har redan en båt och behöver en båtplats",
      "Jag planerar att köpa en båt i Spanien",
      "Jag vill gärna bo nära en marina, även utan egen båt",
      "Jag är intresserad av segling eller vattensport, men behöver ingen båtplats",
      "Jag är inte säker ännu",
    ],
  },
  {
    id: "boat_details",
    section: "Läge och tillgänglighet",
    title: "Vilka krav är viktiga för din båt eller båtplats?",
    type: "multiple",
    maxSelections: 5,
    helper: "Välj upp till 5 alternativ.",
    options: [
      "Båtplats för en mindre motorbåt",
      "Båtplats för en större motorbåt",
      "Båtplats för segelbåt",
      "Marina inom 10 minuter",
      "Marina inom 20 minuter",
      "Bra åtkomst och parkering vid marinan",
      "Underhåll, vinterförvaring eller båtservice i närheten",
      "Restaurang- och klubbliv runt marinan",
      "Jag behöver rådgivning kring detta",
    ],
    showIf: (answers) =>
      answers.boat_needs &&
      answers.boat_needs !== "Nej, detta är inte relevant" &&
      answers.boat_needs !==
        "Jag är intresserad av segling eller vattensport, men behöver ingen båtplats",
  },
  {
    id: "school_needs",
    section: "Läge och tillgänglighet",
    title: "Vilka skolalternativ är relevanta för din familj?",
    type: "multiple",
    maxSelections: 3,
    helper: "Välj upp till 3 alternativ.",
    options: [
      "Spansk offentlig skola",
      "Privat spansk skola",
      "Tvåspråkig skola",
      "Internationell skola",
      "Onlineundervisning eller hemundervisning",
      "Jag är inte säker ännu",
    ],
    showIf: (answers) =>
      answers.household_profile === "Familj med små barn" ||
      answers.household_profile === "Familj med barn i skolålder",
  },
  {
    id: "healthcare_access",
    section: "Läge och tillgänglighet",
    title:
      "Vilken tillgång till sjukvård skulle få dig att känna dig trygg?",
    type: "single",
    options: [
      "Sjukhus och engelskspråkig vård inom cirka 15 minuter",
      "Sjukhus och engelskspråkig vård inom cirka 30 minuter",
      "En lokal läkare och apotek i närheten räcker",
      "Tillgång till privat vård är viktigare än avstånd",
      "Sjukvård är inte en avgörande lägesfaktor",
    ],
  },
  {
    id: "accessibility",
    section: "Läge och tillgänglighet",
    title: "Hur viktigt är långsiktig lättillgänglighet med få nivåskillnader?",
    type: "single",
    options: [
      "Avgörande — få trappor och enkel åtkomst krävs",
      "Mycket viktigt med framtiden i åtanke",
      "Önskvärt, men inte absolut nödvändigt",
      "Inte viktigt",
    ],
  },
  {
    id: "internet",
    section: "Läge och tillgänglighet",
    title:
      "Hur viktig är en pålitlig och snabb internetanslutning?",
    type: "single",
    options: [
      "Avgörande för hemmakontor eller företag",
      "Mycket viktigt",
      "Användbart, men inte absolut nödvändigt",
      "Inte viktigt",
    ],
  },
  {
    id: "community_mix",
    section: "Gemenskap och vardagsliv",
    title:
      "Vilken typ av grannskapsmix skulle få dig att känna dig mest hemma?",
    type: "single",
    options: [
      "Främst spanska heltidsboende",
      "En balanserad mix av spanska och internationella boende",
      "Främst internationella boende",
      "Främst ägare av andra bostäder",
      "Ett bostadsområde som är bebott året runt",
      "Jag har ingen preferens",
    ],
  },
  {
    id: "language_comfort",
    section: "Gemenskap och vardagsliv",
    title: "Hur viktig är en engelsk- eller internationellt inriktad miljö?",
    type: "single",
    options: [
      "Mycket viktigt — jag vill ha många engelskspråkiga kontakter eller tjänster",
      "Internationella tjänster räcker",
      "En internationell mix är idealisk",
      "Jag vill medvetet ha mer spanskt vardagsliv",
      "Språk är inte en avgörande faktor",
    ],
  },
  {
    id: "neighbour_contact",
    section: "Gemenskap och vardagsliv",
    title: "Hur mycket kontakt vill du helst ha med dina grannar?",
    type: "single",
    options: [
      "Ett aktivt och socialt grannskap",
      "Regelbunden vänlig kontakt med tillräcklig avskildhet",
      "Endast tillfällig kontakt",
      "Maximal avskildhet och mycket lite kontakt med grannar",
      "Jag har ingen preferens",
    ],
  },
  {
    id: "security_feeling",
    section: "Gemenskap och vardagsliv",
    title: "Vad ger dig en god känsla av trygghet i Spanien?",
    type: "multiple",
    maxSelections: 4,
    helper: "Välj upp till 4 alternativ.",
    options: [
      "Grannar i närheten",
      "Omgivning som är bebodd året runt",
      "Gated community",
      "Larmsystem eller säkerhetstjänst",
      "Privat infart eller avstängd parkering",
      "Bra gatubelysning",
      "Lugnt läge utan mycket genomfartstrafik",
      "Trygghet är inte en viktig faktor för mig",
    ],
    exclusiveOptions: ["Trygghet är inte en viktig faktor för mig"],
  },
  {
    id: "privacy_level",
    section: "Gemenskap och vardagsliv",
    title:
      "Hur mycket avstånd och avskildhet vill du ha från närliggande bostäder?",
    type: "single",
    options: [
      "Maximal avskildhet utan direkta grannar",
      "Fristående bostad med bekvämt avstånd till grannar",
      "Ett bostadsområde med grannar i närheten är okej",
      "Lägenhet eller stadsmiljö är okej",
      "Jag har ingen preferens",
    ],
  },
  {
    id: "seasonal_tourism",
    section: "Gemenskap och vardagsliv",
    title: "Hur ser du på säsongsturism och aktivitet på sommaren?",
    type: "single",
    options: [
      "Jag vill bo året runt i ett lugnt bostadsområde",
      "Viss säsongsaktivitet är acceptabel",
      "Jag tycker om en livlig atmosfär på sommaren",
      "Jag föredrar en aktiv turistmiljö",
      "Jag har ingen preferens",
    ],
  },
  {
    id: "year_round_environment",
    section: "Gemenskap och vardagsliv",
    title: "Vilken service ska också finnas tillgänglig på vintern?",
    type: "multiple",
    maxSelections: 5,
    helper: "Välj upp till 5 alternativ.",
    options: [
      "Restauranger och kaféer",
      "Butiker och mataffärer",
      "Sjukvård",
      "Sport- och träningsanläggningar",
      "Sociala aktiviteter",
      "Internationellt gemenskapsliv",
      "Kulturella evenemang",
      "Ett levande centrum",
      "Detta är inte viktigt",
    ],
    exclusiveOptions: ["Detta är inte viktigt"],
  },
  {
    id: "lifestyle",
    section: "Gemenskap och vardagsliv",
    title:
      "Vilka aktiviteter och livsstilselement är viktigast för dig?",
    type: "multiple",
    maxSelections: 6,
    helper: "Välj upp till 6 alternativ.",
    options: [
      "Strand och bad",
      "Promenader och vandring",
      "Cykling",
      "Golf",
      "Tennis eller padel",
      "Segling, båtliv eller vattensport",
      "Fitness, yoga eller wellness",
      "Lokal spansk gastronomi och marknader",
      "Fine dining och vin",
      "Konst och kultur",
      "Affärs- eller yrkeskontakter",
      "Familjeaktiviteter",
      "Lugnt liv hemma",
    ],
  },
  {
    id: "daily_routine",
    section: "Gemenskap och vardagsliv",
    title: "Hur ser ditt ideala vardagsliv i Spanien ut?",
    type: "multiple",
    maxSelections: 5,
    helper: "Välj upp till 5 alternativ.",
    options: [
      "Gå ut och dricka kaffe på morgonen",
      "Dagliga promenader vid havet eller stranden",
      "Tillbringa mycket tid hemma och på terrassen",
      "Regelbundet besöka restauranger och kaféer",
      "Använda närliggande sport-, fitness- eller padelanläggningar",
      "Besöka marknader och lokala butiker",
      "Arbeta lugnt eller ha hemmakontor",
      "Ta emot familj och vänner",
      "Kunna anlända enkelt med så lite organisering som möjligt",
    ],
  },
  {
    id: "pets",
    section: "Gemenskap och vardagsliv",
    title: "Kommer husdjur att vara en del av ditt liv i Spanien?",
    type: "single",
    options: [
      "Inga husdjur",
      "En hund eller flera hundar",
      "En katt eller flera katter",
      "Andra husdjur eller flera olika husdjur",
    ],
  },
  {
    id: "pet_needs",
    section: "Gemenskap och vardagsliv",
    title: "Vilka förhållanden är viktiga för dina husdjur?",
    type: "multiple",
    maxSelections: 4,
    helper: "Välj upp till 4 alternativ.",
    options: [
      "Säkert inhägnad privat trädgård",
      "Promenadstråk i närheten",
      "Tillgång till hundvänlig strand",
      "Veterinär i närheten",
      "Lugn omgivning",
      "Husdjursvänliga community-regler",
    ],
    showIf: (answers) =>
      answers.pets && answers.pets !== "Inga husdjur",
  },
  {
    id: "noise_tolerance",
    section: "Möjliga bekymmer",
    title: "Hur lugn behöver din ideala omgivning vara?",
    type: "single",
    options: [
      "Extremt lugn — minimalt bakgrundsljud är avgörande",
      "Mycket lugn, med endast tillfällig lokal aktivitet",
      "Visst vardagligt bakgrundsljud är acceptabelt",
      "En livlig miljö är acceptabel",
      "Ljud är inte en viktig faktor för mig",
    ],
  },
  {
    id: "unacceptable_noise",
    section: "Möjliga bekymmer",
    title: "Vilka ljudkällor skulle påverka ditt beslut starkt?",
    type: "multiple",
    maxSelections: 5,
    helper: "Välj upp till 5 alternativ.",
    options: [
      "Trafikljud från trafikerade vägar eller motorvägar",
      "Ljud från barer, restauranger eller nattliv",
      "Semesteruthyrning och ofta växlande gäster",
      "Kraftig sommarturism",
      "Byggljud",
      "Flygbuller",
      "Hundar eller regelbundet grannljud",
      "Skolor, sportanläggningar eller lekplatser",
      "Kyrkklockor, fester eller lokala evenemang",
      "Ingen av dessa ljudkällor skulle vara ett stort problem",
    ],
    exclusiveOptions: [
      "Ingen av dessa ljudkällor skulle vara ett stort problem",
    ],
  },
  {
    id: "infrastructure_dealbreakers",
    section: "Möjliga bekymmer",
    title:
      "Vilka synliga infrastrukturelement skulle påverka ditt beslut negativt?",
    type: "multiple",
    maxSelections: 5,
    helper: "Välj upp till 5 alternativ.",
    options: [
      "Högspänningsmaster",
      "Luftledningar eller master direkt vid bostaden",
      "Mobil- eller kommunikationsmaster",
      "Synliga trafikerade vägar",
      "Stora flerbostadshus i närheten",
      "Industri- eller kommersiella byggnader",
      "Aktiva byggarbetsplatser eller obebyggda tomter",
      "Direkt insyn från närliggande bostäder",
      "Ingen av dessa förhållanden skulle vara ett stort problem",
    ],
    exclusiveOptions: [
      "Ingen av dessa förhållanden skulle vara ett stort problem",
    ],
  },
  {
    id: "environmental_concerns",
    section: "Möjliga bekymmer",
    title:
      "Vilka miljö- eller tomtrisker skulle bekymra dig mest?",
    type: "multiple",
    maxSelections: 5,
    helper: "Välj upp till 5 alternativ.",
    options: [
      "Översvämningskänsliga områden",
      "Ökad risk för skogsbrand",
      "Branta tomter eller stora stödmurar",
      "Stark vindexponering",
      "Hög luftfuktighet i kust- eller dalområden",
      "Kusterosion eller extrem havsexponering",
      "Lantliga försörjningssystem som septiktank eller vattentankar",
      "Ingen av dessa förhållanden skulle vara ett stort problem",
    ],
    exclusiveOptions: [
      "Ingen av dessa förhållanden skulle vara ett stort problem",
    ],
  },
  {
    id: "legal_technical_risk_tolerance",
    section: "Möjliga bekymmer",
    title: "Hur mycket juridisk eller teknisk komplexitet är acceptabel för dig?",
    type: "single",
    options: [
      "Så lite som möjligt — jag vill ha en juridiskt och tekniskt tydlig bostad",
      "Mindre punkter är acceptabla om de kan lösas före köp",
      "Jag är öppen för mer komplexa bostäder om pris och läge är rätt",
      "Jag är inte säker ännu och behöver rådgivning kring detta",
    ],
  },
  {
    id: "rental_intent",
    section: "Uthyrning och slutliga prioriteringar",
    title: "Vill du hyra ut bostaden?",
    type: "single",
    options: [
      "Nej",
      "Ibland till familj eller vänner",
      "Tillfällig semesteruthyrning",
      "Regelbunden semesteruthyrning",
      "Långtidsuthyrning",
      "Hyresintäkter är en viktig del av min plan",
      "Jag är inte säker ännu",
    ],
  },
  {
    id: "rental_priorities",
    section: "Uthyrning och slutliga prioriteringar",
    title: "Vilka uthyrningsfaktorer är viktigast för dig?",
    type: "multiple",
    maxSelections: 4,
    helper: "Välj upp till 4 alternativ.",
    options: [
      "Ett läge med stark uthyrningsefterfrågan",
      "Möjlighet till turistuthyrningslicens",
      "Community-regler som tillåter uthyrning",
      "Professionell uthyrningsförvaltning",
      "Bra tillgång till flygplats och strand för gäster",
      "Balans mellan hyresintäkter och egen användning",
    ],
    showIf: (answers) =>
      answers.rental_intent &&
      answers.rental_intent !== "Nej" &&
      answers.rental_intent !== "Ibland till familj eller vänner",
  },
  {
    id: "resale_importance",
    section: "Uthyrning och slutliga prioriteringar",
    title: "Hur viktig är framtida försäljningsbarhet för dig?",
    type: "single",
    options: [
      "Mycket viktig — bostaden ska vara lätt att sälja på lång sikt",
      "Viktig, men livskvalitet är viktigare",
      "Inte avgörande om bostaden passar oss perfekt",
      "Jag har inte tänkt på detta ännu",
    ],
  },
  {
    id: "top_priorities",
    section: "Uthyrning och slutliga prioriteringar",
    title: "Vilka faktorer har högst prioritet för dig?",
    type: "multiple",
    maxSelections: 6,
    helper: "Välj dina 6 viktigaste prioriteringar.",
    options: [
      "Lugn omgivning",
      "Avskildhet",
      "Trygghet",
      "Gångavstånd",
      "Nära stranden",
      "Havsutsikt",
      "Internationell gemenskap",
      "Autentisk spansk atmosfär",
      "Socialt liv i grannskapet",
      "Sjukvård",
      "Nära flygplats",
      "Service året runt",
      "Snabbt internet",
      "Lättillgänglighet med få nivåskillnader",
      "Lågt underhåll",
      "Stor trädgård",
      "Golf",
      "Nära marina eller båtplats",
      "Lämpligt för familjer och skolor",
      "Stark försäljningsbarhet på lång sikt",
      "Uthyrningspotential",
    ],
  },
  {
    id: "absolute_dealbreakers",
    section: "Uthyrning och slutliga prioriteringar",
    title:
      "Vilka faktorer skulle omedelbart utesluta ett område eller en bostad för dig?",
    type: "multiple",
    maxSelections: 6,
    helper: "Välj upp till 6 absoluta dealbreakers.",
    options: [
      "Trafik- eller motorvägsbuller",
      "Ljud från nattliv eller restauranger",
      "Högspänningsmaster eller luftledningar",
      "Direkt insyn från grannar",
      "Mycket närliggande grannbostäder",
      "Brant eller svår åtkomst",
      "Ingen privat parkering",
      "Kraftig sommarturism",
      "Avlägset läge",
      "Höga community-avgifter",
      "Stora renoveringsarbeten",
      "Ingen pålitlig snabb internetanslutning",
      "Få faciliteter öppna på vintern",
      "Långt avstånd till sjukvård",
      "Översvämnings- eller skogsbrandsrisk",
      "Ingen passande marina- eller båtplatslösning i närheten",
      "Ingen av dessa punkter är en absolut dealbreaker",
    ],
    exclusiveOptions: [
      "Ingen av dessa punkter är en absolut dealbreaker",
    ],
  },
  {
    id: "biggest_uncertainty",
    section: "Uthyrning och slutliga prioriteringar",
    title: "Vilken är din största osäkerhet kring att köpa i Spanien?",
    type: "multiple",
    maxSelections: 3,
    helper: "Välj upp till 3 alternativ.",
    options: [
      "Att välja rätt område",
      "Att förstå ett rimligt marknadsvärde",
      "Att förstå juridiska risker",
      "Att undvika dolda kostnader",
      "Att bedöma renovering eller skick",
      "Att förstå skatter och löpande kostnader",
      "Att förstå uthyrningsregler",
      "Att organisera allt från utlandet",
      "Jag är inte säker ännu",
    ],
  },
  {
    id: "additional_notes",
    section: "Uthyrning och slutliga prioriteringar",
    title:
      "Finns det något mer som skulle göra att ett område eller en bostad känns särskilt rätt — eller helt olämplig — för dig?",
    type: "text",
    optional: true,
    helper:
      "Valfritt. Lägg till ytterligare önskemål, bekymmer eller dealbreakers här.",
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
        `Välj högst ${current.maxSelections} alternativ.`
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
        "Välj ett svar eller fyll i ett svar innan du går vidare."
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
      alert("Fyll i ditt namn och din e-postadress.");
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      alert("Fyll i en giltig e-postadress.");
      return;
    }

    if (!consent) {
      alert(
        "Bekräfta att vi får använda dina svar för att ta fram din personliga rapport och kontakta dig om din förfrågan."
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
        language: "sv",
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

    answersForEmail["Språk"] = "Svenska";
    answersForEmail["Assessmentversion"] = "3.0";

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
          "Din förfrågan kunde inte sparas.\n\n" +
            "Meddelande: " +
            error.message +
            "\n\nDetaljer: " +
            (error.details || "Ej angivet") +
            "\n\nTips: " +
            (error.hint || "Ej angivet") +
            "\n\nKod: " +
            error.code
        );

        return;
      }

      // Track the lead only after Supabase confirms that the request was saved.
      // No personal data (name, email or phone) is sent to Google.
      pushDataLayerEvent({
        event: "generate_lead",
        form_name: "area_match",
        form_language: "sv",
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
          "Assessmentet sparades, men e-postmeddelandet kunde inte skickas:",
          emailResult
        );

        alert(
          "Dina svar har sparats, men e-postmeddelandet kunde inte skickas. Kontakta Nordic Move Spain om du inte får någon återkoppling."
        );
      }

      setSubmitted(true);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Ett okänt fel uppstod.";

      alert(
        "Din förfrågan kunde inte sparas.\n\n" + message
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main style={styles.page}>
        <div style={styles.card}>
          <p style={styles.sectionLabel}>Förfrågan mottagen</p>

          <h1 style={styles.title}>Tack för din förfrågan</h1>

          <p style={styles.text}>
            Tack, {contact.name}. Vi har mottagit din Costa Blanca Area Match
            analys och kommer att använda dina svar för att ta fram din
            personliga rapport.
          </p>

          <p style={styles.highlight}>{contact.email}</p>

          {contact.phone.trim() && (
            <p style={styles.text}>
              Om vi behöver förtydliga några av dina svar kan vi kontakta dig på{" "}
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
          <p style={styles.sectionLabel}>Din personliga rapport</p>

          <h1 style={styles.title}>
            Få din personliga Area Match Report
          </h1>

          <p style={styles.text}>
            Fyll i dina kontaktuppgifter nedan. Vi använder dina svar för att
            ta fram din personliga Costa Blanca Area Match Report och skicka den
            till din e-postadress.
          </p>

          <div style={styles.form}>
            <label style={styles.fieldLabel}>
              Namn

              <input
                placeholder="Ditt namn"
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
              E-postadress

              <input
                placeholder="Din e-postadress"
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
              <span style={styles.optionalText}>(valfritt)</span>

              <input
                placeholder="Ditt telefonnummer"
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
                Jag godkänner att Nordic Move Spain får använda mina svar för
                att ta fram min personliga Area Match Report och kontakta mig
                angående denna förfrågan.
              </span>
            </label>

            <div style={styles.navigation}>
              <button
                type="button"
                onClick={() => setFinished(false)}
                style={styles.navButton}
              >
                Tillbaka till frågorna
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
                  ? "Skickar..."
                  : "Begär personlig rapport"}
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
          Fråga {step + 1} av {visibleQuestions.length}
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
            placeholder="Lägg till ytterligare önskemål, bekymmer eller dealbreakers här."
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
            Tillbaka
          </button>

          <button
            type="button"
            onClick={nextStep}
            style={styles.nextButton}
          >
            {step === visibleQuestions.length - 1
              ? "Gå vidare till kontaktuppgifter"
              : "Nästa"}
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