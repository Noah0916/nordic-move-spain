"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { supabase } from "../lib/supabase";

type Question = {
  id: string;
  title: string;
  type: "single" | "multiple" | "scale";
  options?: string[];
};

const questions: Question[] = [
  {
    id: "age",
    title: "Wat is uw leeftijd?",
    type: "single",
    options: ["Onder 45", "45-55", "55-65", "65+"],
  },
  {
    id: "family",
    title: "Wat is uw gezinssituatie?",
    type: "single",
    options: [
      "Alleenstaand",
      "Stel",
      "Gezin met kinderen",
      "Gepensioneerd stel",
      "Samengesteld gezin",
    ],
  },
  {
    id: "goal",
    title: "Wat is uw doel?",
    type: "single",
    options: [
      "Permanent verhuizen",
      "Tweede woning",
      "Investering",
      "Combinatie",
      "Oriënteren",
    ],
  },
  {
    id: "timeline",
    title: "Wanneer wilt u verhuizen of kopen?",
    type: "single",
    options: [
      "Binnen 6 maanden",
      "Binnen 12 maanden",
      "Binnen 24 maanden",
      "Langer dan 24 maanden",
      "Nog oriënterend",
    ],
  },
  {
    id: "budget",
    title: "Wat is uw totale vastgoedbudget?",
    type: "single",
    options: [
      "€300.000 - €500.000",
      "€500.000 - €750.000",
      "€750.000 - €1.000.000",
      "€1.000.000 - €2.000.000",
      "€2.000.000 - €5.000.000",
      "€5.000.000+",
    ],
  },
  {
    id: "property_type",
    title: "Welk type woning zoekt u?",
    type: "multiple",
    options: [
      "Villa",
      "Luxe villa",
      "Appartement",
      "Penthouse",
      "Finca",
      "Golfresort woning",
    ],
  },
  {
    id: "condition",
    title: "Welke staat van de woning heeft uw voorkeur?",
    type: "multiple",
    options: [
      "Nieuwbouw",
      "Bestaande bouw",
      "Instapklaar",
      "Lichte renovatie mogelijk",
      "Opknapper",
    ],
  },
  {
    id: "bedrooms",
    title: "Hoeveel slaapkamers wenst u minimaal?",
    type: "single",
    options: ["2", "3", "4", "5", "6+"],
  },
  {
    id: "bathrooms",
    title: "Hoeveel badkamers wenst u minimaal?",
    type: "single",
    options: ["2", "3", "4", "5+"],
  },
  {
    id: "home_features",
    title: "Welke woningkenmerken zijn belangrijk?",
    type: "multiple",
    options: [
      "Grote tuin",
      "Zwembad",
      "Zeezicht",
      "Panoramisch zeezicht",
      "Gastenverblijf",
      "Buitenkeuken",
      "Lift",
      "Gelijkvloers",
      "Afgesloten terrein",
      "Smart home",
      "Weinig onderhoud",
    ],
  },
  {
    id: "location",
    title: "Welke locatie spreekt u aan?",
    type: "multiple",
    options: [
      "Direct aan zee",
      "Op loopafstand van zee",
      "Zeezicht",
      "Golfomgeving",
      "Dorpskern",
      "Historisch centrum",
      "Platteland",
      "Bergen",
      "Natuurgebied",
      "Jachthaven",
      "Luxe urbanisatie",
    ],
  },
  {
    id: "mobility",
    title: "Hoe wilt u dagelijkse voorzieningen bereiken?",
    type: "single",
    options: [
      "Lopend",
      "Fietsafstand",
      "Korte autorit",
      "Auto is geen probleem",
      "Niet belangrijk",
    ],
  },
  {
    id: "walking_distance",
    title: "Maximale loopafstand naar voorzieningen?",
    type: "single",
    options: ["5 minuten", "10 minuten", "15 minuten", "Geen voorkeur"],
  },
  {
    id: "car_use",
    title: "Hoe kijkt u naar autogebruik?",
    type: "single",
    options: ["Zo min mogelijk", "Regelmatig", "Dagelijks", "Geen probleem"],
  },
  {
    id: "social_environment",
    title: "Tussen wie woont u het liefst?",
    type: "single",
    options: [
      "Voornamelijk Spanjaarden",
      "Internationale bewoners",
      "Nederlanders/Belgen",
      "Gemengde gemeenschap",
    ],
  },
  {
    id: "expats",
    title: "Hoe belangrijk is een expatgemeenschap?",
    type: "single",
    options: ["Zeer belangrijk", "Belangrijk", "Prettig", "Niet belangrijk"],
  },
  {
    id: "safety",
    title: "Hoe belangrijk is veiligheid?",
    type: "single",
    options: [
      "Absoluut essentieel",
      "Zeer belangrijk",
      "Belangrijk",
      "Niet doorslaggevend",
    ],
  },
  {
    id: "security_features",
    title: "Welke veiligheidskenmerken spreken u aan?",
    type: "multiple",
    options: [
      "Gated community",
      "Camerabewaking",
      "Rustige woonwijk",
      "Exclusieve woonwijk",
      "Beveiliging aanwezig",
      "Geen voorkeur",
    ],
  },
  {
    id: "healthcare",
    title: "Hoe belangrijk is goede gezondheidszorg dichtbij?",
    type: "single",
    options: ["Essentieel", "Zeer belangrijk", "Belangrijk", "Niet belangrijk"],
  },
  {
    id: "hospital_distance",
    title: "Maximale afstand tot ziekenhuis?",
    type: "single",
    options: ["10 minuten", "20 minuten", "30 minuten", "Niet belangrijk"],
  },
  {
    id: "international_doctors",
    title: "Hoe belangrijk zijn internationale of Engelstalige artsen?",
    type: "single",
    options: ["Essentieel", "Belangrijk", "Prettig", "Niet belangrijk"],
  },
  {
    id: "accessibility",
    title: "Zijn toegankelijkheid en weinig trappen belangrijk?",
    type: "single",
    options: ["Ja, essentieel", "Gewenst", "Niet belangrijk"],
  },
  {
    id: "lifestyle",
    title: "Welke levensstijl past het beste bij u?",
    type: "multiple",
    options: [
      "Rustig en privé",
      "Luxe en exclusief",
      "Actief en sociaal",
      "Gezinsgericht",
      "Authentiek Spaans",
      "Golfgericht",
      "Strandgericht",
      "Gastronomie",
      "Kunst & cultuur",
      "Jachthavenleven",
    ],
  },
  {
    id: "restaurants_frequency",
    title: "Hoe vaak gaat u uit eten?",
    type: "single",
    options: [
      "Minder dan 1 keer per week",
      "1-2 keer per week",
      "3-5 keer per week",
      "Vrijwel dagelijks",
    ],
  },
  {
    id: "restaurants_type",
    title: "Welke restaurants hebben uw voorkeur?",
    type: "multiple",
    options: [
      "Traditioneel Spaans",
      "Lokale tapasbars",
      "Internationale restaurants",
      "Fine dining",
      "Michelin restaurants",
      "Beach clubs",
      "Jachthavenrestaurants",
      "Wijnbars",
      "Cocktailbars",
    ],
  },
  {
    id: "golf",
    title: "Speelt u golf?",
    type: "single",
    options: ["Nee", "Af en toe", "Wekelijks", "Fanatiek"],
  },
  {
    id: "golf_distance",
    title: "Maximale reistijd naar een golfbaan?",
    type: "single",
    options: ["5 minuten", "10 minuten", "20 minuten", "Niet belangrijk"],
  },
  {
    id: "recreation",
    title: "Welke activiteiten zijn belangrijk?",
    type: "multiple",
    options: [
      "Tennis",
      "Padel",
      "Fietsen",
      "Wandelen",
      "Hardlopen",
      "Watersport",
      "Zeilen",
      "Wellness",
      "Fitness",
      "Yoga",
    ],
  },
  {
    id: "household_help",
    title: "Heeft u huishoudelijke hulp nodig?",
    type: "single",
    options: ["Nee", "Mogelijk", "Ja"],
  },
  {
    id: "concierge",
    title: "Heeft u behoefte aan concierge-service?",
    type: "single",
    options: ["Nee", "Mogelijk", "Ja"],
  },
  {
    id: "chauffeur",
    title: "Wilt u privéchauffeurdiensten gebruiken?",
    type: "single",
    options: ["Nee", "Af en toe", "Regelmatig"],
  },
  {
    id: "pets",
    title: "Heeft u huisdieren?",
    type: "multiple",
    options: ["Nee", "Hond(en)", "Kat(ten)", "Meerdere huisdieren"],
  },
  {
    id: "pets_needs",
    title: "Wat is belangrijk voor huisdieren?",
    type: "multiple",
    options: [
      "Wandelgebieden",
      "Grote tuin",
      "Strandtoegang",
      "Dierenarts dichtbij",
      "Rustige omgeving",
    ],
  },
  {
    id: "guests",
    title: "Ontvangt u regelmatig gasten of familie?",
    type: "single",
    options: ["Zelden", "Regelmatig", "Zeer regelmatig"],
  },
  {
    id: "guest_rooms",
    title: "Hoeveel extra logeerkamers wenst u?",
    type: "single",
    options: ["Geen", "1", "2", "3+"],
  },
  {
    id: "staff",
    title: "Wilt u personeel kunnen huisvesten?",
    type: "single",
    options: ["Nee", "Mogelijk", "Ja"],
  },
  {
    id: "boat",
    title: "Heeft u een boot of wilt u er één aanschaffen?",
    type: "single",
    options: ["Nee", "Mogelijk", "Ja"],
  },
  {
    id: "marina",
    title: "Wat is belangrijk rondom jachthaven en boot?",
    type: "multiple",
    options: [
      "Ligplaats dichtbij",
      "Exclusieve marina",
      "Loopafstand jachthaven",
      "Jachtservice",
      "Niet belangrijk",
    ],
  },
  {
    id: "electric_car",
    title: "Heeft u een elektrische auto?",
    type: "single",
    options: ["Nee", "Ja", "Van plan"],
  },
  {
    id: "charging",
    title: "Wat is belangrijk voor elektrisch rijden?",
    type: "multiple",
    options: [
      "Eigen laadpunt",
      "Openbare laadpunten",
      "Snelladers nabij",
      "Niet belangrijk",
    ],
  },
  {
    id: "travel_nl_be",
    title: "Hoe vaak reist u naar Nederland of België?",
    type: "single",
    options: [
      "1-3 keer per jaar",
      "4-6 keer per jaar",
      "7-10 keer per jaar",
      "Meer dan 10 keer per jaar",
    ],
  },
  {
    id: "airport",
    title: "Maximale reistijd naar luchthaven?",
    type: "single",
    options: ["20 minuten", "45 minuten", "60 minuten", "Geen voorkeur"],
  },
  {
    id: "winter_life",
    title: "Hoe belangrijk is een levendige omgeving in de winter?",
    type: "single",
    options: ["Zeer belangrijk", "Belangrijk", "Gemiddeld", "Niet belangrijk"],
  },
  {
    id: "winter_needs",
    title: "Wat moet er in de winter beschikbaar zijn?",
    type: "multiple",
    options: [
      "Restaurants open",
      "Golfactiviteiten",
      "Sociale activiteiten",
      "Internationale gemeenschap",
      "Culturele evenementen",
    ],
  },
  {
    id: "rental",
    title: "Wilt u de woning verhuren?",
    type: "single",
    options: ["Nee", "Af en toe", "Regelmatig", "Actief rendement"],
  },
  {
    id: "investment_priority",
    title: "Wat is financieel het belangrijkst?",
    type: "single",
    options: [
      "Levenskwaliteit",
      "Balans rendement en levenskwaliteit",
      "Waardestijging",
      "Verhuurrendement",
    ],
  },
  {
    id: "top_priorities",
    title: "Selecteer uw belangrijkste prioriteiten",
    type: "multiple",
    options: [
      "Veiligheid",
      "Privacy",
      "Golf",
      "Zeezicht",
      "Strand",
      "Wandelbaarheid",
      "Restaurants",
      "Michelin restaurants",
      "Gezondheidszorg",
      "Internationale artsen",
      "Internationale gemeenschap",
      "Authentieke Spaanse sfeer",
      "Luxe",
      "Rust",
      "Investering",
      "Verhuur",
      "Waardestijging",
      "Scholen",
      "Jachthaven",
      "Bereikbaarheid luchthaven",
      "Grote tuin",
      "Nieuwbouw",
      "Instapklaar",
      "Concierge-services",
      "Winteractiviteiten",
      "Natuur",
      "Bergen",
      "Gastronomie",
      "Exclusiviteit",
      "Sociale activiteiten",
    ],
  },
  {
    id: "importance_scores",
    title: "Hoe belangrijk zijn deze onderwerpen voor u?",
    type: "scale",
    options: [
      "Veiligheid",
      "Privacy",
      "Golf",
      "Restaurants",
      "Gastronomie",
      "Strand",
      "Zeezicht",
      "Wandelbaarheid",
      "Gezondheidszorg",
      "Internationale gemeenschap",
      "Rust",
      "Luxe",
      "Investering",
      "Verhuurrendement",
      "Jachthavenleven",
      "Authentiek Spanje",
    ],
  },
];

export default function RelocationAssessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [finished, setFinished] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const current = questions[step];
  const progress = Math.round(((step + 1) / questions.length) * 100);

  function selectSingle(value: string) {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  }

  function toggleMultiple(value: string) {
    const currentAnswers: string[] = answers[current.id] || [];

    setAnswers((prev) => ({
      ...prev,
      [current.id]: currentAnswers.includes(value)
        ? currentAnswers.filter((item) => item !== value)
        : [...currentAnswers, value],
    }));
  }

  function setScaleValue(item: string, value: number) {
    setAnswers((prev) => ({
      ...prev,
      [current.id]: {
        ...(prev[current.id] || {}),
        [item]: value,
      },
    }));
  }

  function nextStep() {
    if (step < questions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  }

  function previousStep() {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  }
  async function submitRequest() {
  if (!contact.name || !contact.email || !contact.phone) {
    alert("Vul alstublieft uw naam, e-mailadres en telefoonnummer in.");
    return;
  }

  setIsSubmitting(true);

  const payload = {
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    answers,
    created_at: new Date().toISOString(),
  };

  const { error } = await supabase
    .from("relocation_leads")
    .insert([payload]);

  setIsSubmitting(false);

  if (error) {
    alert(
      "Opslaan mislukt:\n\n" +
        "Message: " +
        error.message +
        "\n\nDetails: " +
        error.details +
        "\n\nHint: " +
        error.hint +
        "\n\nCode: " +
        error.code
    );
    return;
  }

  alert("Succesvol opgeslagen!");
  setSubmitted(true);
}

if (submitted) {
  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Bedankt voor uw aanvraag</h1>

        <p style={styles.text}>
          Bedankt, {contact.name}. Uw Costa Blanca Lifestyle DNA is ontvangen.
          Wij stellen uw persoonlijke Intelligence Report samen en sturen dit
          naar:
        </p>

        <p style={styles.highlight}>{contact.email}</p>

        <p style={styles.text}>
          Wij kunnen contact opnemen via {contact.phone} als er aanvullende
          vragen zijn.
        </p>
      </div>
    </main>
  );
}

if (finished) {
  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>
          Ontvang uw persoonlijke Intelligence Report
        </h1>

        <p style={styles.text}>
          Vul hieronder uw gegevens in. Wij sturen uw persoonlijke Costa Blanca
          Intelligence Report naar uw e-mailadres.
        </p>

        <div style={styles.form}>
          <input
            placeholder="Naam"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            style={styles.input}
          />

          <input
            placeholder="E-mailadres"
            type="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            style={styles.input}
          />

          <input
            placeholder="Telefoonnummer"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            style={styles.input}
          />

          <p style={styles.privacyText}>
            Door uw gegevens te versturen gaat u ermee akkoord dat wij uw
            antwoorden gebruiken om uw persoonlijke Costa Blanca Intelligence
            Report samen te stellen en hierover contact met u op te nemen.
          </p>

          <div style={styles.navigation}>
            <button
              onClick={() => setFinished(false)}
              style={styles.navButton}
            >
              Terug naar vragen
            </button>

            <button
              onClick={submitRequest}
              style={styles.nextButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Versturen..." : "Rapport aanvragen"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

return (
  <main style={styles.page}>
    <div style={styles.card}>
      <div style={styles.progressWrapper}>
        <div style={{ ...styles.progressBar, width: `${progress}%` }} />
      </div>

      <p style={styles.stepText}>
        Vraag {step + 1} van {questions.length}
      </p>

      <h1 style={styles.title}>{current.title}</h1>

      {current.type === "single" && (
        <div style={styles.options}>
          {current.options?.map((option) => {
            const selected = answers[current.id] === option;

            return (
              <button
                key={option}
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

      {current.type === "scale" && (
        <div style={styles.scaleList}>
          {current.options?.map((item) => (
            <div key={item} style={styles.scaleRow}>
              <strong>{item}</strong>

              <div style={styles.scaleButtons}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                  const selected = answers[current.id]?.[item] === num;

                  return (
                    <button
                      key={num}
                      onClick={() => setScaleValue(item, num)}
                      style={{
                        ...styles.scaleButton,
                        ...(selected ? styles.selected : {}),
                      }}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={styles.navigation}>
        <button
          onClick={previousStep}
          disabled={step === 0}
          style={styles.navButton}
        >
          Terug
        </button>

        <button onClick={nextStep} style={styles.nextButton}>
          {step === questions.length - 1
            ? "Naar contactgegevens"
            : "Volgende"}
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
    maxWidth: 850,
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
  title: {
    fontSize: 34,
    lineHeight: 1.2,
    marginBottom: 30,
    color: "#1f2933",
  },
  text: {
    fontSize: 18,
    lineHeight: 1.6,
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
  },
  optionButton: {
    padding: "18px 20px",
    borderRadius: 16,
    border: "1px solid #ddd",
    background: "#fff",
    fontSize: 18,
    textAlign: "left",
    cursor: "pointer",
  },
  selected: {
    background: "#1f4d3a",
    color: "#fff",
    border: "1px solid #1f4d3a",
  },
  navigation: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 35,
    gap: 16,
  },
  navButton: {
    padding: "14px 24px",
    borderRadius: 12,
    border: "1px solid #ccc",
    background: "#fff",
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
  scaleList: {
    display: "grid",
    gap: 22,
  },
  scaleRow: {
    display: "grid",
    gap: 10,
  },
  scaleButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  scaleButton: {
    width: 42,
    height: 42,
    borderRadius: 999,
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
  },
  form: {
    display: "grid",
    gap: 16,
    marginTop: 30,
  },
  input: {
    padding: "18px 20px",
    borderRadius: 14,
    border: "1px solid #ddd",
    fontSize: 18,
  },
  privacyText: {
    fontSize: 14,
    lineHeight: 1.5,
    color: "#666",
    marginTop: 8,
  },
};