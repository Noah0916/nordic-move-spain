"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { supabase } from "../lib/supabase";

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
    section: "Your plans",
    title: "Which description best matches your household?",
    type: "single",
    options: [
      "Single buyer",
      "Couple",
      "Family with young children",
      "Family with school-age children",
      "Adult or multigenerational household",
      "Retired or semi-retired household",
    ],
  },
  {
    id: "purchase_goal",
    section: "Your plans",
    title: "What is your main reason for buying in Spain?",
    type: "single",
    options: [
      "Permanent relocation",
      "Second home",
      "Part-time living now, possible relocation later",
      "Investment",
      "A combination of lifestyle and investment",
      "I am still exploring",
    ],
  },
  {
    id: "timeline",
    section: "Your plans",
    title: "When would you ideally like to buy?",
    type: "single",
    options: [
      "Within 6 months",
      "Within 12 months",
      "Within 24 months",
      "More than 24 months from now",
      "I am still exploring",
    ],
  },
  {
    id: "financing",
    section: "Your plans",
    title: "How do you expect to finance the purchase?",
    type: "single",
    options: [
      "Cash purchase",
      "Mortgage in Spain",
      "Mortgage or financing in another country",
      "A combination of cash and financing",
      "I am not sure yet",
    ],
  },
  {
    id: "budget",
    section: "Your plans",
    title: "What is your approximate property budget?",
    type: "single",
    options: [
      "Below €300,000",
      "€300,000 - €500,000",
      "€500,000 - €750,000",
      "€750,000 - €1,000,000",
      "€1,000,000 - €2,000,000",
      "€2,000,000 - €5,000,000",
      "€5,000,000+",
    ],
  },
  {
    id: "budget_scope",
    section: "Your plans",
    title: "What does this budget include?",
    type: "single",
    options: [
      "The property price, taxes, legal fees and all purchase costs",
      "The property price and purchase costs, but not renovation",
      "The property price only",
      "I have a separate renovation budget",
      "I am not sure yet",
    ],
  },
  {
    id: "property_type",
    section: "Your property",
    title: "Which property types would you seriously consider?",
    type: "multiple",
    maxSelections: 3,
    helper: "Select up to 3 options.",
    options: [
      "Detached villa",
      "Luxury villa",
      "Apartment",
      "Penthouse",
      "Townhouse",
      "Finca or country house",
      "New-build development",
      "Golf-resort property",
    ],
  },
  {
    id: "condition",
    section: "Your property",
    title: "Which property condition would you consider?",
    type: "multiple",
    maxSelections: 3,
    helper: "Select up to 3 options.",
    options: [
      "New build",
      "Recently renovated",
      "Move-in ready",
      "Light renovation is acceptable",
      "Major renovation is acceptable",
    ],
  },
  {
    id: "bedrooms",
    section: "Your property",
    title: "How many bedrooms do you need at minimum?",
    type: "single",
    options: ["1", "2", "3", "4", "5", "6+"],
  },
  {
    id: "home_features",
    section: "Your property",
    title: "Which property features matter most to you?",
    type: "multiple",
    maxSelections: 8,
    helper: "Select up to 8 options.",
    options: [
      "Private swimming pool",
      "Communal swimming pool",
      "Large garden",
      "Low-maintenance outdoor space",
      "Sea view",
      "Panoramic sea view",
      "Guest accommodation",
      "Outdoor kitchen or entertaining area",
      "Single-level or step-free living",
      "Lift",
      "Gated community",
      "Private garage or secure parking",
      "EV charging",
      "Home office",
      "Strong winter sun or south-facing orientation",
      "Shelter from strong wind",
    ],
  },
  {
    id: "maintenance",
    section: "Your property",
    title: "How much property maintenance are you comfortable managing?",
    type: "single",
    options: [
      "Very little — I prefer a lock-up-and-leave property",
      "Moderate maintenance is acceptable",
      "Garden and pool maintenance are acceptable",
      "I am comfortable managing a large property and grounds",
      "I would use professional property-management services",
    ],
  },
  {
    id: "preferred_setting",
    section: "Location and access",
    title: "Which settings appeal to you most?",
    type: "multiple",
    maxSelections: 4,
    helper: "Select up to 4 options.",
    options: [
      "Directly by the sea",
      "Within walking distance of the beach",
      "Residential area with sea views",
      "Town or village centre",
      "Historic centre",
      "Quiet residential urbanisation",
      "Golf environment",
      "Marina or harbour area",
      "Countryside",
      "Mountain or natural setting",
      "Exclusive residential area",
    ],
  },
  {
    id: "daily_mobility",
    section: "Location and access",
    title: "How would you prefer to reach daily services?",
    type: "single",
    options: [
      "Mostly on foot",
      "By bicycle or e-bike",
      "A short drive is acceptable",
      "Daily car use is completely fine",
      "This is not important",
    ],
  },
  {
    id: "access_terrain",
    section: "Location and access",
    title: "Which access conditions would be acceptable to you?",
    type: "multiple",
    maxSelections: 4,
    helper: "Select all conditions you would accept.",
    options: [
      "Flat and easy access only",
      "Gentle hills are acceptable",
      "Steep roads are acceptable",
      "Narrow residential roads are acceptable",
      "Rural or partly unpaved access is acceptable",
      "Steps inside or outside the property are acceptable",
      "Easy access for reduced mobility is essential",
    ],
  },
  {
    id: "airport_access",
    section: "Location and access",
    title: "What is the maximum acceptable driving time to an airport?",
    type: "single",
    options: [
      "Up to 30 minutes",
      "Up to 45 minutes",
      "Up to 60 minutes",
      "Up to 90 minutes",
      "No preference",
    ],
  },
  {
    id: "school_needs",
    section: "Location and access",
    title: "Which schooling options are relevant to your family?",
    type: "multiple",
    maxSelections: 3,
    helper: "Select up to 3 options.",
    options: [
      "Spanish public school",
      "Spanish private school",
      "Bilingual school",
      "International school",
      "Online or home-based education",
      "I am not sure yet",
    ],
    showIf: (answers) =>
      answers.household_profile === "Family with young children" ||
      answers.household_profile === "Family with school-age children",
  },
  {
    id: "healthcare_access",
    section: "Location and access",
    title: "What level of healthcare access would make you comfortable?",
    type: "single",
    options: [
      "Hospital and English-speaking care within about 15 minutes",
      "Hospital and English-speaking care within about 30 minutes",
      "A local clinic and pharmacy nearby are sufficient",
      "Private healthcare access is more important than distance",
      "Healthcare access is not a major location factor",
    ],
  },
  {
    id: "accessibility",
    section: "Location and access",
    title: "How important is long-term accessibility?",
    type: "single",
    options: [
      "Essential — minimal steps and easy access are required",
      "Very important for future-proofing",
      "Preferred, but not essential",
      "Not important",
    ],
  },
  {
    id: "internet",
    section: "Location and access",
    title: "How important is reliable high-speed internet at the property?",
    type: "single",
    options: [
      "Essential for remote work or business",
      "Very important",
      "Useful, but not essential",
      "Not important",
    ],
  },
  {
    id: "community_mix",
    section: "Community and daily life",
    title: "Which community mix would make you feel most at home?",
    type: "single",
    options: [
      "Mainly local Spanish residents",
      "A balanced mix of Spanish and international residents",
      "Mainly international residents",
      "A strong community from my own language background",
      "I have no preference",
    ],
  },
  {
    id: "neighbour_contact",
    section: "Community and daily life",
    title:
      "How much contact would you ideally like to have with your neighbours?",
    type: "single",
    options: [
      "An active and social neighbourhood",
      "Friendly regular contact while keeping personal privacy",
      "Occasional contact only",
      "Maximum privacy with very little neighbour contact",
      "I have no preference",
    ],
  },
  {
    id: "privacy_level",
    section: "Community and daily life",
    title:
      "How much distance and privacy would you like from neighbouring properties?",
    type: "single",
    options: [
      "Maximum privacy with no close neighbours",
      "A detached property with neighbours at a comfortable distance",
      "A residential community with nearby neighbours is fine",
      "An apartment or urban environment is fine",
      "I have no preference",
    ],
  },
  {
    id: "seasonal_tourism",
    section: "Community and daily life",
    title: "How do you feel about seasonal tourism and summer crowds?",
    type: "single",
    options: [
      "I want a quiet residential area throughout the year",
      "Some seasonal activity is acceptable",
      "I enjoy a lively summer atmosphere",
      "I prefer an active tourist environment",
      "I have no preference",
    ],
  },
  {
    id: "year_round_environment",
    section: "Community and daily life",
    title: "What should remain available during winter?",
    type: "multiple",
    maxSelections: 5,
    helper: "Select up to 5 options.",
    options: [
      "Restaurants and cafés",
      "Shops and supermarkets",
      "Healthcare services",
      "Sports and fitness facilities",
      "Social activities",
      "International community life",
      "Cultural events",
      "A lively town centre",
      "This is not important",
    ],
    exclusiveOptions: ["This is not important"],
  },
  {
    id: "lifestyle",
    section: "Community and daily life",
    title: "Which activities and lifestyle elements matter most to you?",
    type: "multiple",
    maxSelections: 6,
    helper: "Select up to 6 options.",
    options: [
      "Beaches and swimming",
      "Walking and hiking",
      "Cycling",
      "Golf",
      "Tennis or padel",
      "Sailing or watersports",
      "Marina life",
      "Fitness, yoga or wellness",
      "Local Spanish food and markets",
      "Fine dining and wine",
      "Arts and culture",
      "Business or professional networking",
      "Family activities",
      "Quiet home-based living",
    ],
  },
  {
    id: "pets",
    section: "Community and daily life",
    title: "Will pets be part of your life in Spain?",
    type: "single",
    options: [
      "No pets",
      "Dog or dogs",
      "Cat or cats",
      "Other or multiple pets",
    ],
  },
  {
    id: "pet_needs",
    section: "Community and daily life",
    title: "Which pet-related features are important?",
    type: "multiple",
    maxSelections: 4,
    helper: "Select up to 4 options.",
    options: [
      "Secure private garden",
      "Walking routes nearby",
      "Dog-friendly beach access",
      "Veterinary care nearby",
      "A quiet environment",
      "Pet-friendly community rules",
    ],
    showIf: (answers) => answers.pets && answers.pets !== "No pets",
  },
  {
    id: "noise_tolerance",
    section: "Potential concerns",
    title: "How quiet does your ideal location need to be?",
    type: "single",
    options: [
      "Extremely quiet — minimal background noise is essential",
      "Very quiet, with only occasional local activity",
      "Some everyday background noise is acceptable",
      "A lively environment is acceptable",
      "Noise is not an important factor",
    ],
  },
  {
    id: "unacceptable_noise",
    section: "Potential concerns",
    title: "Which noise sources would seriously affect your decision?",
    type: "multiple",
    maxSelections: 5,
    helper: "Select up to 5 options.",
    options: [
      "Busy roads or motorway noise",
      "Bars, restaurants or nightlife",
      "Holiday rentals and frequent guest turnover",
      "Heavy summer tourist activity",
      "Construction noise",
      "Aircraft noise",
      "Dogs or regular neighbourhood noise",
      "Schools, sports facilities or playgrounds",
      "Church bells, festivals or local celebrations",
      "None of these would be a major concern",
    ],
    exclusiveOptions: ["None of these would be a major concern"],
  },
  {
    id: "infrastructure_dealbreakers",
    section: "Potential concerns",
    title:
      "Which visible infrastructure features would negatively affect your decision?",
    type: "multiple",
    maxSelections: 5,
    helper: "Select up to 5 options.",
    options: [
      "High-voltage electricity pylons",
      "Overhead electricity cables or poles beside the property",
      "Mobile phone or communication masts",
      "Busy roads visible from the property",
      "Large apartment blocks nearby",
      "Industrial or commercial buildings",
      "Active construction sites or undeveloped plots",
      "Being directly overlooked by neighbouring properties",
      "None of these would be a major concern",
    ],
    exclusiveOptions: ["None of these would be a major concern"],
  },
  {
    id: "environmental_concerns",
    section: "Potential concerns",
    title:
      "Which environmental or land-related risks would concern you most?",
    type: "multiple",
    maxSelections: 5,
    helper: "Select up to 5 options.",
    options: [
      "Flood-prone areas",
      "Wildfire exposure",
      "Steep plots or large retaining walls",
      "Strong wind exposure",
      "High humidity or damp risk",
      "Coastal erosion or extreme sea exposure",
      "Rural utilities such as septic tanks or water storage",
      "None of these would be a major concern",
    ],
    exclusiveOptions: ["None of these would be a major concern"],
  },
  {
    id: "rental_intent",
    section: "Rental and final priorities",
    title: "Do you expect to rent out the property?",
    type: "single",
    options: [
      "No",
      "Occasionally to family or friends",
      "Occasional short-term rental",
      "Regular holiday rental",
      "Long-term rental",
      "Rental income is a major part of the plan",
      "I am not sure yet",
    ],
  },
  {
    id: "rental_priorities",
    section: "Rental and final priorities",
    title: "Which rental factors matter most to you?",
    type: "multiple",
    maxSelections: 4,
    helper: "Select up to 4 options.",
    options: [
      "A location with strong rental demand",
      "Tourist-rental permission or licence potential",
      "Community rules that permit rental activity",
      "Professional rental-management services",
      "Easy airport and beach access for guests",
      "A balance between rental return and personal enjoyment",
    ],
    showIf: (answers) =>
      answers.rental_intent &&
      answers.rental_intent !== "No" &&
      answers.rental_intent !== "Occasionally to family or friends",
  },
  {
    id: "top_priorities",
    section: "Rental and final priorities",
    title: "Which factors are your highest priorities?",
    type: "multiple",
    maxSelections: 6,
    helper: "Select your 6 most important priorities.",
    options: [
      "Quiet surroundings",
      "Privacy",
      "Safety",
      "Walkability",
      "Beach access",
      "Sea views",
      "International community",
      "Authentic Spanish atmosphere",
      "Neighbourhood social life",
      "Healthcare access",
      "Airport access",
      "Year-round services",
      "High-speed internet",
      "Easy accessibility",
      "Low maintenance",
      "Large garden",
      "Golf",
      "Marina access",
      "Family and school suitability",
      "Long-term value growth",
      "Rental potential",
    ],
  },
  {
    id: "absolute_dealbreakers",
    section: "Rental and final priorities",
    title: "Which factors would immediately rule out an area or property?",
    type: "multiple",
    maxSelections: 6,
    helper: "Select up to 6 absolute dealbreakers.",
    options: [
      "Traffic or motorway noise",
      "Nightlife or restaurant noise",
      "High-voltage pylons or overhead power lines",
      "Being overlooked by neighbours",
      "Very close neighbouring properties",
      "Steep or difficult road access",
      "No private parking",
      "Heavy summer tourism",
      "An isolated location",
      "High community fees",
      "Major renovation work",
      "No reliable high-speed internet",
      "Limited services during winter",
      "Long distance from healthcare",
      "Flood or wildfire exposure",
      "None of these are absolute dealbreakers",
    ],
    exclusiveOptions: ["None of these are absolute dealbreakers"],
  },
  {
    id: "additional_notes",
    section: "Rental and final priorities",
    title:
      "Is there anything else that would make an area or property feel particularly right — or completely wrong — for you?",
    type: "text",
    optional: true,
    helper:
      "Optional. Add any detail that has not been covered above.",
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
      alert(`Please select up to ${current.maxSelections} options.`);
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
      alert("Please select or enter an answer before continuing.");
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
      alert("Please enter your name and email address.");
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!consent) {
      alert(
        "Please confirm that we may use your answers to prepare your personal report and contact you about your request."
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
        language: "en",
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

      setSubmitted(true);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "An unknown error occurred.";

      alert("We could not save your request.\n\n" + message);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main style={styles.page}>
        <div style={styles.card}>
          <p style={styles.sectionLabel}>Request received</p>

          <h1 style={styles.title}>Thank you for your request</h1>

          <p style={styles.text}>
            Thank you, {contact.name}. We have received your Costa Blanca Area
            Match Assessment and will use your answers to prepare your personal
            report.
          </p>

          <p style={styles.highlight}>{contact.email}</p>

          {contact.phone.trim() && (
            <p style={styles.text}>
              We may contact you on {contact.phone} if we need to clarify any
              of your answers.
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
          <p style={styles.sectionLabel}>Your personal report</p>

          <h1 style={styles.title}>
            Receive your personal Area Match Report
          </h1>

          <p style={styles.text}>
            Enter your details below. We will use your answers to prepare your
            personal Costa Blanca Area Match Report and send it to your email
            address.
          </p>

          <div style={styles.form}>
            <label style={styles.fieldLabel}>
              Name

              <input
                placeholder="Your name"
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
              Email address

              <input
                placeholder="Your email address"
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
              Phone number{" "}
              <span style={styles.optionalText}>(optional)</span>

              <input
                placeholder="Your phone number"
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
                onChange={(event) =>
                  setConsent(event.target.checked)
                }
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
                Back to questions
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
                  ? "Sending..."
                  : "Request my report"}
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
          Question {step + 1} of {visibleQuestions.length}
        </p>

        <p style={styles.sectionLabel}>{current.section}</p>

        <h1 style={styles.title}>{current.title}</h1>

        {current.helper && (
          <p style={styles.helperText}>{current.helper}</p>
        )}

        {current.type === "single" && (
          <div style={styles.options}>
            {current.options?.map((option) => {
              const selected =
                answers[current.id] === option;

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
              const selected = (
                answers[current.id] || []
              ).includes(option);

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
            onChange={(event) =>
              setTextValue(event.target.value)
            }
            placeholder="Add any additional preferences, concerns or dealbreakers here."
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
              ...(step === 0
                ? styles.buttonDisabled
                : {}),
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
              ? "Continue to contact details"
              : "Next"}
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