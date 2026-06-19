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
    title: "Welke omschrijving past het best bij uw huishouden?",
    type: "single",
    options: [
      "Alleenstaande koper",
      "Stel",
      "Gezin met jonge kinderen",
      "Gezin met schoolgaande kinderen",
      "Meer-generatiehuishouden of huishouden met volwassen kinderen",
      "Huishouden met pensioen of deels met pensioen",
    ],
  },
  {
    id: "purchase_goal",
    section: "Uw plannen",
    title: "Wat is uw belangrijkste reden om een woning in Spanje te kopen?",
    type: "single",
    options: [
      "Permanente verhuizing",
      "Tweede woning",
      "Deels in Spanje wonen en later mogelijk verhuizen",
      "Investering",
      "Een combinatie van levenskwaliteit en investering",
      "Ik ben me nog aan het oriënteren",
    ],
  },
  {
    id: "timeline",
    section: "Uw plannen",
    title: "Wanneer wilt u idealiter kopen?",
    type: "single",
    options: [
      "Binnen 6 maanden",
      "Binnen 12 maanden",
      "Binnen 24 maanden",
      "Over meer dan 24 maanden",
      "Ik ben me nog aan het oriënteren",
    ],
  },
  {
    id: "financing",
    section: "Uw plannen",
    title: "Hoe verwacht u de woningaankoop te financieren?",
    type: "single",
    options: [
      "Aankoop met eigen middelen",
      "Hypotheek in Spanje",
      "Hypotheek of financiering in een ander land",
      "Een combinatie van eigen middelen en financiering",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "budget",
    section: "Uw plannen",
    title: "Wat is uw geschatte woningbudget?",
    type: "single",
    options: [
      "Onder 300.000 €",
      "300.000 € - 500.000 €",
      "500.000 € - 750.000 €",
      "750.000 € - 1.000.000 €",
      "1.000.000 € - 2.000.000 €",
      "2.000.000 € - 5.000.000 €",
      "Meer dan 5.000.000 €",
    ],
  },
  {
    id: "budget_scope",
    section: "Uw plannen",
    title: "Welke kosten zijn in dit budget inbegrepen?",
    type: "single",
    options: [
      "Aankoopprijs, belastingen, advocaatkosten en alle bijkomende aankoopkosten",
      "Aankoopprijs en bijkomende aankoopkosten, maar geen renovatie",
      "Alleen de aankoopprijs",
      "Ik heb een apart renovatiebudget",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "property_type",
    section: "Uw woning",
    title: "Welke woningtypes komen voor u serieus in aanmerking?",
    type: "multiple",
    maxSelections: 3,
    helper: "Selecteer maximaal 3 opties.",
    options: [
      "Vrijstaande villa",
      "Luxe villa",
      "Appartement",
      "Penthouse",
      "Rijtjeshuis of twee-onder-een-kapwoning",
      "Finca of landhuis",
      "Nieuwbouwproject",
      "Woning in een golfcomplex",
    ],
  },
  {
    id: "condition",
    section: "Uw woning",
    title: "Welke staat van de woning komt voor u in aanmerking?",
    type: "multiple",
    maxSelections: 3,
    helper: "Selecteer maximaal 3 opties.",
    options: [
      "Nieuwbouw",
      "Recent gerenoveerd",
      "Direct bewoonbaar",
      "Lichte renovatie is acceptabel",
      "Grondige renovatie is acceptabel",
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
    id: "home_features",
    section: "Uw woning",
    title: "Welke woningkenmerken zijn voor u het belangrijkst?",
    type: "multiple",
    maxSelections: 8,
    helper: "Selecteer maximaal 8 opties.",
    options: [
      "Privézwembad",
      "Gemeenschappelijk zwembad",
      "Grote tuin",
      "Onderhoudsvriendelijke buitenruimte",
      "Zeezicht",
      "Panoramisch zeezicht",
      "Aparte gastenruimte",
      "Buitenkeuken of ruimte voor gasten",
      "Gelijkvloers of drempelarm wonen",
      "Lift",
      "Afgesloten wooncomplex",
      "Privégarage of veilige parkeerplaats",
      "Laadmogelijkheid voor een elektrische auto",
      "Werkkamer of thuiskantoor",
      "Veel winterzon of zuidligging",
      "Beschutting tegen harde wind",
    ],
  },
  {
    id: "maintenance",
    section: "Uw woning",
    title: "Hoeveel onderhoud wilt u op u nemen?",
    type: "single",
    options: [
      "Zeer weinig — ik geef de voorkeur aan een onderhoudsvriendelijke woning",
      "Een matige hoeveelheid onderhoud is acceptabel",
      "Tuin- en zwembadonderhoud zijn acceptabel",
      "Ik kan een grote woning met perceel beheren",
      "Ik zou professioneel woningbeheer inschakelen",
    ],
  },
  {
    id: "preferred_setting",
    section: "Locatie en bereikbaarheid",
    title: "Welke locaties spreken u het meest aan?",
    type: "multiple",
    maxSelections: 4,
    helper: "Selecteer maximaal 4 opties.",
    options: [
      "Direct aan zee",
      "Strand op loopafstand",
      "Woonwijk met zeezicht",
      "Stads- of dorpscentrum",
      "Historisch centrum",
      "Rustig wooncomplex",
      "Golfomgeving",
      "Jachthaven of havengebied",
      "Landelijke omgeving",
      "Berg- of natuurgebied",
      "Exclusieve woonlocatie",
    ],
  },
  {
    id: "daily_mobility",
    section: "Locatie en bereikbaarheid",
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
    id: "access_terrain",
    section: "Locatie en bereikbaarheid",
    title: "Welke toegangs- en terreinomstandigheden zijn voor u acceptabel?",
    type: "multiple",
    maxSelections: 4,
    helper: "Selecteer alle omstandigheden die voor u acceptabel zijn.",
    options: [
      "Alleen vlakke en makkelijk toegankelijke locaties",
      "Lichte hellingen zijn acceptabel",
      "Steile wegen zijn acceptabel",
      "Smalle woonstraten zijn acceptabel",
      "Landelijke of deels onverharde toegang is acceptabel",
      "Trappen binnen of buiten de woning zijn acceptabel",
      "Drempelarme bereikbaarheid is absoluut vereist",
    ],
  },
  {
    id: "airport_access",
    section: "Locatie en bereikbaarheid",
    title: "Wat mag de maximale reistijd naar de luchthaven zijn?",
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
    id: "school_needs",
    section: "Locatie en bereikbaarheid",
    title: "Welke schoolmogelijkheden zijn relevant voor uw gezin?",
    type: "multiple",
    maxSelections: 3,
    helper: "Selecteer maximaal 3 opties.",
    options: [
      "Openbare Spaanse school",
      "Particuliere Spaanse school",
      "Tweetalige school",
      "Internationale school",
      "Onlineonderwijs of thuisonderwijs",
      "Ik weet het nog niet",
    ],
    showIf: (answers) =>
      answers.household_profile === "Gezin met jonge kinderen" ||
      answers.household_profile === "Gezin met schoolgaande kinderen",
  },
  {
    id: "healthcare_access",
    section: "Locatie en bereikbaarheid",
    title:
      "Welke bereikbaarheid van medische zorg geeft u een goed gevoel?",
    type: "single",
    options: [
      "Ziekenhuis en Engelstalige medische zorg binnen ongeveer 15 minuten",
      "Ziekenhuis en Engelstalige medische zorg binnen ongeveer 30 minuten",
      "Een lokale huisartspraktijk en apotheek in de buurt zijn voldoende",
      "Toegang tot particuliere zorg is belangrijker dan afstand",
      "Medische zorg is geen doorslaggevende locatiefactor",
    ],
  },
  {
    id: "accessibility",
    section: "Locatie en bereikbaarheid",
    title: "Hoe belangrijk is een woning die op lange termijn drempelarm is?",
    type: "single",
    options: [
      "Onmisbaar — weinig treden en makkelijke toegang zijn vereist",
      "Zeer belangrijk met het oog op de toekomst",
      "Gewenst, maar niet strikt noodzakelijk",
      "Niet belangrijk",
    ],
  },
  {
    id: "internet",
    section: "Locatie en bereikbaarheid",
    title:
      "Hoe belangrijk is een betrouwbare en snelle internetverbinding?",
    type: "single",
    options: [
      "Onmisbaar voor thuiswerk of bedrijf",
      "Zeer belangrijk",
      "Handig, maar niet strikt noodzakelijk",
      "Niet belangrijk",
    ],
  },
  {
    id: "community_mix",
    section: "Gemeenschap en dagelijks leven",
    title:
      "In welke samenstelling van de buurt zou u zich het prettigst voelen?",
    type: "single",
    options: [
      "Voornamelijk Spaanse locals",
      "Een evenwichtige mix van Spaanse en internationale bewoners",
      "Voornamelijk internationale bewoners",
      "Een sterke gemeenschap met mijn taal of nationaliteit",
      "Ik heb geen voorkeur",
    ],
  },
  {
    id: "neighbour_contact",
    section: "Gemeenschap en dagelijks leven",
    title: "Hoeveel contact wilt u idealiter met uw buren hebben?",
    type: "single",
    options: [
      "Een actieve en gezellige buurt",
      "Regelmatig vriendelijk contact met voldoende privacy",
      "Alleen af en toe contact",
      "Maximale privacy en zeer weinig contact met buren",
      "Ik heb geen voorkeur",
    ],
  },
  {
    id: "privacy_level",
    section: "Gemeenschap en dagelijks leven",
    title:
      "Hoeveel afstand en privacy wenst u ten opzichte van naastgelegen percelen?",
    type: "single",
    options: [
      "Maximale privacy zonder directe buren",
      "Vrijstaande woning met prettige afstand tot buren",
      "Een wooncomplex met buren in de buurt is prima",
      "Een appartement of stedelijke omgeving is prima",
      "Ik heb geen voorkeur",
    ],
  },
  {
    id: "seasonal_tourism",
    section: "Gemeenschap en dagelijks leven",
    title: "Hoe staat u tegenover seizoensgebonden toerisme en zomerse drukte?",
    type: "single",
    options: [
      "Ik wil het hele jaar in een rustige woonwijk wonen",
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
    helper: "Selecteer maximaal 5 opties.",
    options: [
      "Restaurants en cafés",
      "Winkels en supermarkten",
      "Medische zorg",
      "Sport- en fitnessfaciliteiten",
      "Sociale activiteiten",
      "Internationaal gemeenschapsleven",
      "Culturele evenementen",
      "Een levendig stadscentrum",
      "Dit is niet belangrijk",
    ],
    exclusiveOptions: ["Dit is niet belangrijk"],
  },
  {
    id: "lifestyle",
    section: "Gemeenschap en dagelijks leven",
    title:
      "Welke activiteiten en lifestyle-elementen zijn voor u het belangrijkst?",
    type: "multiple",
    maxSelections: 6,
    helper: "Selecteer maximaal 6 opties.",
    options: [
      "Strand en zwemmen",
      "Wandelen",
      "Fietsen",
      "Golf",
      "Tennis of padel",
      "Zeilen of watersport",
      "Leven rond de jachthaven",
      "Fitness, yoga of wellness",
      "Lokale Spaanse gastronomie en markten",
      "Gastronomie op niveau en wijn",
      "Kunst en cultuur",
      "Zakelijke of professionele contacten",
      "Activiteiten voor gezinnen",
      "Rustig thuisleven",
    ],
  },
  {
    id: "pets",
    section: "Gemeenschap en dagelijks leven",
    title: "Zullen huisdieren deel uitmaken van uw leven in Spanje?",
    type: "single",
    options: [
      "Geen huisdieren",
      "Een hond of meerdere honden",
      "Een kat of meerdere katten",
      "Andere of meerdere verschillende huisdieren",
    ],
  },
  {
    id: "pet_needs",
    section: "Gemeenschap en dagelijks leven",
    title: "Welke omstandigheden zijn belangrijk voor uw huisdieren?",
    type: "multiple",
    maxSelections: 4,
    helper: "Selecteer maximaal 4 opties.",
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
      "Extreem rustig — minimale achtergrondgeluiden zijn onmisbaar",
      "Zeer rustig, met slechts af en toe lokale activiteit",
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
    helper: "Selecteer maximaal 5 opties.",
    options: [
      "Verkeersgeluid van drukke wegen of snelwegen",
      "Geluid van bars, restaurants of nachtleven",
      "Vakantieverhuur en vaak wisselende gasten",
      "Sterk toerisme in de zomer",
      "Bouwlawaai",
      "Vliegtuiglawaai",
      "Honden of regelmatig buurtlawaai",
      "Scholen, sportfaciliteiten of speeltuinen",
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
      "Welke zichtbare infrastructurele elementen zouden uw beslissing negatief beïnvloeden?",
    type: "multiple",
    maxSelections: 5,
    helper: "Selecteer maximaal 5 opties.",
    options: [
      "Hoogspanningsmasten",
      "Bovengrondse elektriciteitsleidingen of stroommasten direct bij de woning",
      "Mobiele telefoon- of communicatiemasten",
      "Zichtbare drukke wegen",
      "Grote appartementsgebouwen in de buurt",
      "Industriële of commerciële gebouwen",
      "Actieve bouwplaatsen of onbebouwde percelen",
      "Directe inkijk door naburige woningen",
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
      "Welke milieu- of perceelrisico's zouden u bijzonder zorgen baren?",
    type: "multiple",
    maxSelections: 5,
    helper: "Selecteer maximaal 5 opties.",
    options: [
      "Overstromingsgevoelige gebieden",
      "Verhoogd risico op bosbrand",
      "Steile percelen of grote keerwanden",
      "Sterke blootstelling aan wind",
      "Hoge luchtvochtigheid of vochtproblemen",
      "Kusterosie of extreme blootstelling aan zee",
      "Landelijke voorzieningen zoals septische tanks of watertanks",
      "Geen van deze omstandigheden zou een groot probleem zijn",
    ],
    exclusiveOptions: [
      "Geen van deze omstandigheden zou een groot probleem zijn",
    ],
  },
  {
    id: "rental_intent",
    section: "Verhuur en afsluitende prioriteiten",
    title: "Wilt u de woning verhuren?",
    type: "single",
    options: [
      "Nee",
      "Af en toe aan familie of vrienden",
      "Incidentele vakantieverhuur",
      "Regelmatige vakantieverhuur",
      "Langetermijnverhuur",
      "Huurinkomsten zijn een belangrijk onderdeel van mijn plan",
      "Ik weet het nog niet",
    ],
  },
  {
    id: "rental_priorities",
    section: "Verhuur en afsluitende prioriteiten",
    title: "Welke verhuurfactoren zijn voor u het belangrijkst?",
    type: "multiple",
    maxSelections: 4,
    helper: "Selecteer maximaal 4 opties.",
    options: [
      "Een locatie met veel vraag naar huur",
      "Mogelijkheid voor een toeristische verhuurvergunning",
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
    id: "top_priorities",
    section: "Verhuur en afsluitende prioriteiten",
    title: "Welke factoren hebben voor u de hoogste prioriteit?",
    type: "multiple",
    maxSelections: 6,
    helper: "Selecteer uw 6 belangrijkste prioriteiten.",
    options: [
      "Rustige omgeving",
      "Privacy",
      "Veiligheid",
      "Bereikbaarheid te voet",
      "Strandnabijheid",
      "Zeezicht",
      "Internationale gemeenschap",
      "Authentieke Spaanse sfeer",
      "Sociaal leven in de buurt",
      "Medische zorg",
      "Nabijheid van de luchthaven",
      "Voorzieningen die het hele jaar beschikbaar zijn",
      "Snel internet",
      "Drempelarme bereikbaarheid",
      "Weinig onderhoud",
      "Grote tuin",
      "Golf",
      "Nabijheid van de jachthaven",
      "Geschikt voor gezinnen en scholen",
      "Langetermijnwaardestijging",
      "Verhuurpotentieel",
    ],
  },
  {
    id: "absolute_dealbreakers",
    section: "Verhuur en afsluitende prioriteiten",
    title:
      "Welke factoren zouden een regio of woning voor u direct uitsluiten?",
    type: "multiple",
    maxSelections: 6,
    helper: "Selecteer maximaal 6 absolute uitsluitingscriteria.",
    options: [
      "Verkeers- of snelweglawaai",
      "Geluid van nachtleven of restaurants",
      "Hoogspanningsmasten of bovengrondse elektriciteitsleidingen",
      "Directe inkijk door buren",
      "Zeer nabijgelegen naburige woningen",
      "Steile of moeilijke toegang",
      "Geen privéparkeerplaats",
      "Sterk toerisme in de zomer",
      "Afgelegen locatie",
      "Hoge gemeenschapskosten",
      "Grondige renovatiewerkzaamheden",
      "Geen betrouwbare snelle internetverbinding",
      "Weinig voorzieningen open in de winter",
      "Grote afstand tot medische zorg",
      "Overstromings- of bosbrandrisico",
      "Geen van deze punten is een absoluut uitsluitingscriterium",
    ],
    exclusiveOptions: [
      "Geen van deze punten is een absoluut uitsluitingscriterium",
    ],
  },
  {
    id: "additional_notes",
    section: "Verhuur en afsluitende prioriteiten",
    title:
      "Is er nog iets waardoor een regio of woning voor u bijzonder passend — of juist volledig ongeschikt — zou aanvoelen?",
    type: "text",
    optional: true,
    helper:
      "Optioneel. Vul hier extra wensen, zorgen of uitsluitingscriteria aan.",
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
        `Selecteer maximaal ${current.maxSelections} opties.`
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
        "Selecteer een antwoord of vul een antwoord in voordat u verdergaat."
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
        "Bevestig dat wij uw antwoorden mogen gebruiken voor uw persoonlijke rapport en contact met u mogen opnemen over uw aanvraag."
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
          "Uw aanvraag kon niet worden opgeslagen.\n\n" +
            "Bericht: " +
            error.message +
            "\n\nDetails: " +
            (error.details || "Niet opgegeven") +
            "\n\nTip: " +
            (error.hint || "Niet opgegeven") +
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
            Bedankt, {contact.name}. We hebben uw Costa Blanca Area Match-analyse
            ontvangen en gebruiken uw antwoorden om uw persoonlijke
            rapport op te stellen.
          </p>

          <p style={styles.highlight}>{contact.email}</p>

          {contact.phone.trim() && (
            <p style={styles.text}>
              Als we bepaalde antwoorden met u willen verduidelijken, kunnen we
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
            Ontvang uw persoonlijke Area Match-rapport
          </h1>

          <p style={styles.text}>
            Vul hieronder uw contactgegevens in. We gebruiken uw antwoorden
            om uw persoonlijke Costa Blanca Area Match-rapport op te stellen
            en naar uw e-mailadres te sturen.
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
                Ik ga ermee akkoord dat Nordic Move Spain mijn antwoorden mag gebruiken
                om mijn persoonlijke Area Match-rapport op te stellen en
                contact met mij op te nemen over deze aanvraag.
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
            placeholder="Vul hier extra wensen, zorgen of uitsluitingscriteria aan."
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
