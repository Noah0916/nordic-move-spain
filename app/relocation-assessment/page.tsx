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
    title: "Which description best fits your household?",
    type: "single",
    options: [
      "Single buyer",
      "Couple",
      "Family with young children",
      "Family with school-age children",
      "Multigenerational household or household with adult children",
      "Retired or semi-retired household",
    ],
  },
  {
    id: "purchase_goal",
    section: "Your plans",
    title: "What is your main reason for buying property in Spain?",
    type: "single",
    options: [
      "Permanent relocation",
      "Second home",
      "Living partly in Spain and possibly relocating later",
      "Investment",
      "A combination of lifestyle and investment",
      "I am still exploring",
    ],
  },
  {
    id: "decision_style",
    section: "Your plans",
    title: "How would you like to make your decision?",
    type: "single",
    options: [
      "I want to understand the right area first",
      "I want to compare areas and properties at the same time",
      "I already have a preferred area and want to see suitable properties",
      "I mainly need clarity about risks and practical differences",
      "I am still very early in the orientation phase",
    ],
  },
  {
    id: "time_in_spain",
    section: "Your plans",
    title: "How much time do you expect to spend in Spain each year?",
    type: "single",
    options: [
      "Less than 1 month per year",
      "1 to 3 months per year",
      "3 to 6 months per year",
      "More than 6 months per year",
      "Year-round or almost year-round",
      "I am not sure yet",
    ],
  },
  {
    id: "season_of_use",
    section: "Your plans",
    title: "When do you expect to use the property most?",
    type: "multiple",
    maxSelections: 3,
    helper: "Choose up to 3 options.",
    options: [
      "Mainly in summer",
      "Mainly in winter",
      "Spring and autumn",
      "School holidays",
      "Several longer stays per year",
      "Year-round",
      "I am not sure yet",
    ],
  },
  {
    id: "area_familiarity",
    section: "Your plans",
    title: "How well do you already know Costa Blanca North?",
    type: "single",
    options: [
      "I do not know the area yet",
      "I have visited once on holiday",
      "I know some towns through several visits",
      "I already have specific towns in mind",
      "I know the area well and want to compare more precisely",
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
      "Under €300,000",
      "€300,000 - €500,000",
      "€500,000 - €750,000",
      "€750,000 - €1,000,000",
      "€1,000,000 - €2,000,000",
      "€2,000,000 - €5,000,000",
      "Over €5,000,000",
    ],
  },
  {
    id: "budget_scope",
    section: "Your plans",
    title: "Which costs are included in this budget?",
    type: "single",
    options: [
      "Purchase price, taxes, legal fees and all purchase costs",
      "Purchase price and purchase costs, but no renovation",
      "Purchase price only",
      "I have a separate renovation budget",
      "I am not sure yet",
    ],
  },
  {
    id: "monthly_running_costs",
    section: "Your plans",
    title: "What level of monthly running costs feels comfortable for you?",
    type: "single",
    options: [
      "As low as possible",
      "Up to around €300 per month",
      "€300 to €600 per month",
      "€600 to €1,000 per month",
      "Over €1,000 per month is acceptable if the property is right",
      "I am not sure yet",
    ],
  },
  {
    id: "property_type",
    section: "Your property",
    title: "Which property types are you seriously considering?",
    type: "multiple",
    maxSelections: 3,
    helper: "Choose up to 3 options.",
    options: [
      "Detached villa",
      "Luxury villa",
      "Apartment",
      "Penthouse",
      "Townhouse or semi-detached house",
      "Finca or country house",
      "New-build project",
      "Property in a golf resort",
    ],
  },
  {
    id: "property_style",
    section: "Your property",
    title: "Which type of home style appeals to you most?",
    type: "multiple",
    maxSelections: 3,
    helper: "Choose up to 3 options.",
    options: [
      "Modern and minimalist",
      "Mediterranean and traditional",
      "Renovated with character",
      "Luxurious and high-end",
      "Bright, calm and low-maintenance",
      "Rustic or finca style",
      "New-build with clean lines",
      "I am open to different styles",
    ],
  },
  {
    id: "condition",
    section: "Your property",
    title: "What property condition would you consider?",
    type: "multiple",
    maxSelections: 3,
    helper: "Choose up to 3 options.",
    options: [
      "New-build",
      "Recently renovated",
      "Move-in ready",
      "Light renovation is acceptable",
      "Major renovation is acceptable",
    ],
  },
  {
    id: "renovation_management",
    section: "Your property",
    title: "How would you like to handle renovations or improvements?",
    type: "single",
    options: [
      "I do not want to organise any renovation or work",
      "Small improvements are fine",
      "I am open to renovation if local support is available",
      "I have renovation experience and can make decisions confidently",
      "I specifically want a project with renovation potential",
    ],
  },
  {
    id: "build_quality_comfort",
    section: "Your property",
    title: "Which technical points should receive extra attention during property checks?",
    type: "multiple",
    maxSelections: 5,
    helper: "Choose up to 5 points that are especially important to you.",
    options: [
      "Insulation and window quality",
      "Heating and cooling systems",
      "Electrical installation and plumbing",
      "Energy efficiency",
      "Roof, terraces and water drainage",
      "Overall construction quality",
      "Pool, irrigation or technical installations",
      "I need guidance on this",
    ],
  },
  {
    id: "bedrooms",
    section: "Your property",
    title: "How many bedrooms do you need as a minimum?",
    type: "single",
    options: ["1", "2", "3", "4", "5", "6+"],
  },
  {
    id: "guest_usage",
    section: "Your property",
    title: "How often do you expect visits from family or friends?",
    type: "single",
    options: [
      "Rarely",
      "A few times per year",
      "Regularly during holiday periods",
      "Frequent longer visits",
      "The property should work well for family or several generations",
    ],
  },
  {
    id: "guest_privacy",
    section: "Your property",
    title: "How important is privacy for guests or family in the home?",
    type: "single",
    options: [
      "Very important — guests should be able to stay as independently as possible",
      "A separate guest bedroom or guest bathroom is enough",
      "Shared living is completely fine",
      "Guests are not an important factor",
    ],
  },
  {
    id: "home_features",
    section: "Your property",
    title: "Which property features matter most to you?",
    type: "multiple",
    maxSelections: 8,
    helper: "Choose up to 8 options.",
    options: [
      "Private swimming pool",
      "Communal pool",
      "Large garden",
      "Low-maintenance outdoor space",
      "Sea view",
      "Panoramic sea view",
      "Separate guest area",
      "Outdoor kitchen or guest entertaining area",
      "Single-level or low-step living",
      "Lift",
      "Gated community",
      "Private garage or secure parking",
      "Electric car charging possibility",
      "Study or home office",
      "Plenty of winter sun or south-facing orientation",
      "Protection from strong wind",
    ],
  },
  {
    id: "climate_comfort",
    section: "Your property",
    title: "Which climate comfort factors matter most in daily life?",
    type: "multiple",
    maxSelections: 5,
    helper: "Choose up to 5 options.",
    options: [
      "Shade on terraces and in the garden",
      "Warm winter sun",
      "Protection from strong wind",
      "Good natural ventilation",
      "Comfortable indoor temperature in summer",
      "Comfortable indoor temperature in winter",
      "Cool outdoor seating areas",
      "A home that feels comfortable throughout the year",
    ],
  },
  {
    id: "outdoor_living",
    section: "Your property",
    title: "How would you like to use the outdoor space?",
    type: "multiple",
    maxSelections: 5,
    helper: "Choose up to 5 options.",
    options: [
      "Quiet breakfast or coffee outside",
      "Sunbathing",
      "Shade and cool seating areas",
      "Dining with family or guests",
      "Barbecue or outdoor kitchen",
      "Gardening",
      "Private pool area",
      "Safe area for children or pets",
    ],
  },
  {
    id: "maintenance",
    section: "Your property",
    title: "How much maintenance are you willing to take on?",
    type: "single",
    options: [
      "Very little — I prefer a low-maintenance property",
      "A moderate amount of maintenance is acceptable",
      "Garden and pool care are acceptable",
      "I can manage a large property with land",
      "I would hire professional property management",
    ],
  },
  {
    id: "property_management",
    section: "Your property",
    title: "How should the property be looked after when you are not in Spain?",
    type: "single",
    options: [
      "I want the property to require as little management as possible",
      "I want keyholding and regular checks",
      "I need garden and pool care",
      "I want full property management",
      "Family, friends or acquaintances will look after it",
      "I am not sure yet",
    ],
  },
  {
    id: "preferred_setting",
    section: "Location and accessibility",
    title: "Which locations appeal to you most?",
    type: "multiple",
    maxSelections: 4,
    helper: "Choose up to 4 options.",
    options: [
      "Directly by the sea",
      "Beach within walking distance",
      "Residential area with sea views",
      "Town or village centre",
      "Historic centre",
      "Quiet residential community",
      "Golf setting",
      "Marina or harbour area",
      "Rural setting",
      "Mountain or nature area",
      "Exclusive residential area",
    ],
  },
  {
    id: "area_feeling",
    section: "Location and accessibility",
    title: "What atmosphere should your residential area have?",
    type: "multiple",
    maxSelections: 4,
    helper: "Choose up to 4 options.",
    options: [
      "Authentically Spanish",
      "International and well-organised",
      "Quiet and high-quality",
      "Lively with restaurants and cafés",
      "Coastal and relaxed",
      "Exclusive and private",
      "Family-friendly",
      "Natural and rural",
      "Modern and comfortable",
    ],
  },
  {
    id: "view_vs_convenience",
    section: "Location and accessibility",
    title: "What matters more to you: views or daily convenience?",
    type: "single",
    options: [
      "Views are more important, even if the location is steeper or more car-dependent",
      "A good balance between views and daily practicality",
      "Walkability and easy access are more important than views",
      "I am not sure yet",
    ],
  },
  {
    id: "areas_considered",
    section: "Location and accessibility",
    title: "Which towns or areas are you already considering?",
    type: "multiple",
    maxSelections: 6,
    helper: "Choose all towns or areas that already interest you.",
    options: [
      "Dénia",
      "Jávea",
      "Moraira",
      "Benissa",
      "Calpe",
      "Altea",
      "Benitachell / Cumbre del Sol",
      "Orba / Jalón / Inland",
      "I am open to recommendations",
      "I am not sure yet",
    ],
  },
  {
    id: "areas_to_avoid",
    section: "Location and accessibility",
    title: "Are there any towns, areas or settings you would rather avoid?",
    type: "text",
    optional: true,
    helper:
      "Optional. Mention any towns, settings or impressions that do not feel right for you.",
  },
  {
    id: "daily_mobility",
    section: "Location and accessibility",
    title: "How would you like to reach daily amenities?",
    type: "single",
    options: [
      "Mostly on foot",
      "By bicycle or e-bike",
      "A short drive is acceptable",
      "Daily driving is not a problem",
      "This is not important",
    ],
  },
  {
    id: "amenity_distance",
    section: "Location and accessibility",
    title: "What distance to daily amenities feels comfortable to you?",
    type: "single",
    options: [
      "Supermarket, café and pharmacy preferably within 5 to 10 minutes on foot",
      "Important amenities within 15 to 20 minutes on foot",
      "A short drive of up to 10 minutes is fine",
      "Up to 20 minutes by car is acceptable",
      "Distance is less important than peace, views or land",
    ],
  },
  {
    id: "car_parking_needs",
    section: "Location and accessibility",
    title: "What are your needs around cars and parking?",
    type: "multiple",
    maxSelections: 4,
    helper: "Choose up to 4 options.",
    options: [
      "One private parking space is enough",
      "Two or more parking spaces are important",
      "A garage is important",
      "Easy guest parking is important",
      "I want to drive as little as possible",
      "I plan to have an electric car",
      "Parking is not a decisive factor",
    ],
  },
  {
    id: "access_terrain",
    section: "Location and accessibility",
    title: "Which access and terrain conditions are acceptable to you?",
    type: "multiple",
    maxSelections: 4,
    helper: "Choose all conditions that are acceptable to you.",
    options: [
      "Only flat and easily accessible locations",
      "Gentle slopes are acceptable",
      "Steep roads are acceptable",
      "Narrow residential streets are acceptable",
      "Rural or partly unpaved access is acceptable",
      "Steps inside or outside the property are acceptable",
    ],
  },
  {
    id: "airport_access",
    section: "Location and accessibility",
    title: "What is the maximum driving time to the airport you would accept?",
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
    id: "boat_needs",
    section: "Location and accessibility",
    title: "Does a boat or marina berth play a role in your location choice?",
    type: "single",
    options: [
      "No, this is not relevant",
      "I already have a boat and need a berth",
      "I plan to buy a boat in Spain",
      "I would like to live near a marina, even without owning a boat",
      "I am interested in sailing or watersports, but a berth is not required",
      "I am not sure yet",
    ],
  },
  {
    id: "boat_details",
    section: "Location and accessibility",
    title: "Which requirements matter for your boat or marina berth?",
    type: "multiple",
    maxSelections: 5,
    helper: "Choose up to 5 options.",
    options: [
      "Berth for a small motorboat",
      "Berth for a larger motorboat",
      "Berth for a sailing boat",
      "Marina within 10 minutes",
      "Marina within 20 minutes",
      "Good access and parking at the marina",
      "Maintenance, winter storage or boat service nearby",
      "Restaurant and club life around the marina",
      "I need guidance on this",
    ],
    showIf: (answers) =>
      answers.boat_needs &&
      answers.boat_needs !== "No, this is not relevant" &&
      answers.boat_needs !==
        "I am interested in sailing or watersports, but a berth is not required",
  },
  {
    id: "school_needs",
    section: "Location and accessibility",
    title: "Which school options are relevant for your family?",
    type: "multiple",
    maxSelections: 3,
    helper: "Choose up to 3 options.",
    options: [
      "Spanish public school",
      "Private Spanish school",
      "Bilingual school",
      "International school",
      "Online schooling or homeschooling",
      "I am not sure yet",
    ],
    showIf: (answers) =>
      answers.household_profile === "Family with young children" ||
      answers.household_profile === "Family with school-age children",
  },
  {
    id: "healthcare_access",
    section: "Location and accessibility",
    title:
      "What level of access to medical care would make you feel comfortable?",
    type: "single",
    options: [
      "Hospital and English-speaking medical care within around 15 minutes",
      "Hospital and English-speaking medical care within around 30 minutes",
      "A local doctor and pharmacy nearby are enough",
      "Access to private healthcare is more important than distance",
      "Medical care is not a decisive location factor",
    ],
  },
  {
    id: "accessibility",
    section: "Location and accessibility",
    title: "How important is long-term low-step accessibility?",
    type: "single",
    options: [
      "Essential — few steps and easy access are required",
      "Very important with the future in mind",
      "Preferred, but not absolutely required",
      "Not important",
    ],
  },
  {
    id: "internet",
    section: "Location and accessibility",
    title:
      "How important is a reliable and fast internet connection?",
    type: "single",
    options: [
      "Essential for home office or business",
      "Very important",
      "Useful, but not absolutely required",
      "Not important",
    ],
  },
  {
    id: "community_mix",
    section: "Community and daily life",
    title:
      "What type of neighbourhood mix would make you feel most comfortable?",
    type: "single",
    options: [
      "Mostly Spanish full-time residents",
      "A balanced mix of Spanish and international residents",
      "Mostly international residents",
      "Mostly second-home owners",
      "A year-round residential neighbourhood",
      "I have no preference",
    ],
  },
  {
    id: "language_comfort",
    section: "Community and daily life",
    title: "How important is an English-speaking or international environment?",
    type: "single",
    options: [
      "Very important — I want many English-speaking contacts or services",
      "International services are enough",
      "An international mix is ideal",
      "I intentionally want more Spanish daily life",
      "Language is not a decisive factor",
    ],
  },
  {
    id: "neighbour_contact",
    section: "Community and daily life",
    title: "How much contact would you ideally like with your neighbours?",
    type: "single",
    options: [
      "An active and sociable neighbourhood",
      "Regular friendly contact with enough privacy",
      "Only occasional contact",
      "Maximum privacy and very little contact with neighbours",
      "I have no preference",
    ],
  },
  {
    id: "security_feeling",
    section: "Community and daily life",
    title: "What gives you a good feeling of security in Spain?",
    type: "multiple",
    maxSelections: 4,
    helper: "Choose up to 4 options.",
    options: [
      "Neighbours nearby",
      "Year-round occupied surroundings",
      "Gated community",
      "Alarm system or security service",
      "Private driveway or enclosed parking",
      "Good street lighting",
      "Quiet location without much through traffic",
      "Security is not an important factor for me",
    ],
    exclusiveOptions: ["Security is not an important factor for me"],
  },
  {
    id: "privacy_level",
    section: "Community and daily life",
    title:
      "How much distance and privacy do you want from neighbouring properties?",
    type: "single",
    options: [
      "Maximum privacy with no direct neighbours",
      "Detached property with comfortable distance from neighbours",
      "A residential community with neighbours nearby is fine",
      "An apartment or urban setting is fine",
      "I have no preference",
    ],
  },
  {
    id: "seasonal_tourism",
    section: "Community and daily life",
    title: "How do you feel about seasonal tourism and summer activity?",
    type: "single",
    options: [
      "I want to live year-round in a quiet residential area",
      "Some seasonal activity is acceptable",
      "I enjoy a lively atmosphere in summer",
      "I prefer an active tourist environment",
      "I have no preference",
    ],
  },
  {
    id: "year_round_environment",
    section: "Community and daily life",
    title: "Which amenities should also be available in winter?",
    type: "multiple",
    maxSelections: 5,
    helper: "Choose up to 5 options.",
    options: [
      "Restaurants and cafés",
      "Shops and supermarkets",
      "Medical care",
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
    title:
      "Which activities and lifestyle elements are most important to you?",
    type: "multiple",
    maxSelections: 6,
    helper: "Choose up to 6 options.",
    options: [
      "Beach and swimming",
      "Walking and hiking",
      "Cycling",
      "Golf",
      "Tennis or padel",
      "Sailing, boating or watersports",
      "Fitness, yoga or wellness",
      "Local Spanish gastronomy and markets",
      "Fine dining and wine",
      "Art and culture",
      "Business or professional contacts",
      "Family activities",
      "Quiet life at home",
    ],
  },
  {
    id: "daily_routine",
    section: "Community and daily life",
    title: "What does your ideal daily life in Spain look like?",
    type: "multiple",
    maxSelections: 5,
    helper: "Choose up to 5 options.",
    options: [
      "Walking out for coffee in the morning",
      "Daily walks by the sea or beach",
      "Spending a lot of time at home and on the terrace",
      "Regularly visiting restaurants and cafés",
      "Using nearby sports, fitness or padel facilities",
      "Visiting markets and local shops",
      "Working quietly or doing home office",
      "Hosting family and friends",
      "Arriving easily with as little organisation as possible",
    ],
  },
  {
    id: "pets",
    section: "Community and daily life",
    title: "Will pets be part of your life in Spain?",
    type: "single",
    options: [
      "No pets",
      "One dog or several dogs",
      "One cat or several cats",
      "Other pets or several different pets",
    ],
  },
  {
    id: "pet_needs",
    section: "Community and daily life",
    title: "Which conditions are important for your pets?",
    type: "multiple",
    maxSelections: 4,
    helper: "Choose up to 4 options.",
    options: [
      "Securely fenced private garden",
      "Walking routes nearby",
      "Access to a dog-friendly beach",
      "Vet nearby",
      "Quiet surroundings",
      "Pet-friendly community rules",
    ],
    showIf: (answers) =>
      answers.pets && answers.pets !== "No pets",
  },
  {
    id: "noise_tolerance",
    section: "Possible concerns",
    title: "How quiet does your ideal environment need to be?",
    type: "single",
    options: [
      "Extremely quiet — minimal background noise is essential",
      "Very quiet, with only occasional local activity",
      "Some everyday background noise is acceptable",
      "A lively environment is acceptable",
      "Noise is not an important factor for me",
    ],
  },
  {
    id: "unacceptable_noise",
    section: "Possible concerns",
    title: "Which noise sources would strongly influence your decision?",
    type: "multiple",
    maxSelections: 5,
    helper: "Choose up to 5 options.",
    options: [
      "Traffic noise from busy roads or motorways",
      "Noise from bars, restaurants or nightlife",
      "Holiday rentals and frequently changing guests",
      "Heavy summer tourism",
      "Construction noise",
      "Aircraft noise",
      "Dogs or regular neighbourhood noise",
      "Schools, sports facilities or playgrounds",
      "Church bells, fiestas or local events",
      "None of these noise sources would be a major problem",
    ],
    exclusiveOptions: [
      "None of these noise sources would be a major problem",
    ],
  },
  {
    id: "infrastructure_dealbreakers",
    section: "Possible concerns",
    title:
      "Which visible infrastructure elements would negatively affect your decision?",
    type: "multiple",
    maxSelections: 5,
    helper: "Choose up to 5 options.",
    options: [
      "High-voltage pylons",
      "Overhead power lines or pylons directly by the property",
      "Mobile phone or communication masts",
      "Visible busy roads",
      "Large apartment buildings nearby",
      "Industrial or commercial buildings",
      "Active construction sites or undeveloped plots",
      "Direct overlooking from neighbouring properties",
      "None of these conditions would be a major problem",
    ],
    exclusiveOptions: [
      "None of these conditions would be a major problem",
    ],
  },
  {
    id: "environmental_concerns",
    section: "Possible concerns",
    title:
      "Which environmental or plot risks would concern you most?",
    type: "multiple",
    maxSelections: 5,
    helper: "Choose up to 5 options.",
    options: [
      "Flood-prone areas",
      "Increased wildfire risk",
      "Steep plots or large retaining walls",
      "Strong wind exposure",
      "High humidity or damp problems",
      "Coastal erosion or extreme sea exposure",
      "Rural supply systems such as septic tanks or water tanks",
      "None of these conditions would be a major problem",
    ],
    exclusiveOptions: [
      "None of these conditions would be a major problem",
    ],
  },
  {
    id: "legal_technical_risk_tolerance",
    section: "Possible concerns",
    title: "How much legal or technical complexity would be acceptable to you?",
    type: "single",
    options: [
      "As little as possible — I want a legally and technically clear property",
      "Small issues are acceptable if they can be resolved before purchase",
      "I am open to more complex properties if the price and location are right",
      "I am not sure yet and need guidance on this",
    ],
  },
  {
    id: "rental_intent",
    section: "Rental and final priorities",
    title: "Would you like to rent out the property?",
    type: "single",
    options: [
      "No",
      "Occasionally to family or friends",
      "Occasional holiday rental",
      "Regular holiday rental",
      "Long-term rental",
      "Rental income is an important part of my plan",
      "I am not sure yet",
    ],
  },
  {
    id: "rental_priorities",
    section: "Rental and final priorities",
    title: "Which rental factors are most important to you?",
    type: "multiple",
    maxSelections: 4,
    helper: "Choose up to 4 options.",
    options: [
      "A location with strong rental demand",
      "Possibility of a tourist rental licence",
      "Community rules that allow rentals",
      "Professional rental management",
      "Good access to airport and beach for guests",
      "A balance between rental income and own use",
    ],
    showIf: (answers) =>
      answers.rental_intent &&
      answers.rental_intent !== "No" &&
      answers.rental_intent !== "Occasionally to family or friends",
  },
  {
    id: "resale_importance",
    section: "Rental and final priorities",
    title: "How important is future resale potential to you?",
    type: "single",
    options: [
      "Very important — the property should remain easy to sell in the long term",
      "Important, but lifestyle is more important",
      "Not decisive if the property fits us perfectly",
      "I have not thought about this yet",
    ],
  },
  {
    id: "top_priorities",
    section: "Rental and final priorities",
    title: "Which factors have the highest priority for you?",
    type: "multiple",
    maxSelections: 6,
    helper: "Choose your 6 most important priorities.",
    options: [
      "Quiet surroundings",
      "Privacy",
      "Security",
      "Walkability",
      "Beach proximity",
      "Sea view",
      "International community",
      "Authentic Spanish atmosphere",
      "Social life in the neighbourhood",
      "Medical care",
      "Airport proximity",
      "Year-round services",
      "Fast internet",
      "Low-step accessibility",
      "Low maintenance",
      "Large garden",
      "Golf",
      "Near a marina or berth",
      "Suitable for families and schools",
      "Strong long-term resale appeal",
      "Rental potential",
    ],
  },
  {
    id: "absolute_dealbreakers",
    section: "Rental and final priorities",
    title:
      "Which factors would immediately rule out an area or property for you?",
    type: "multiple",
    maxSelections: 6,
    helper: "Choose up to 6 absolute dealbreakers.",
    options: [
      "Traffic or motorway noise",
      "Noise from nightlife or restaurants",
      "High-voltage pylons or overhead power lines",
      "Direct overlooking by neighbours",
      "Very close neighbouring properties",
      "Steep or difficult access",
      "No private parking",
      "Heavy summer tourism",
      "Remote location",
      "High community fees",
      "Major renovation work",
      "No reliable fast internet connection",
      "Few facilities open in winter",
      "Long distance to medical care",
      "Flood or wildfire risk",
      "No suitable marina or berth solution nearby",
      "None of these points is an absolute dealbreaker",
    ],
    exclusiveOptions: [
      "None of these points is an absolute dealbreaker",
    ],
  },
  {
    id: "biggest_uncertainty",
    section: "Rental and final priorities",
    title: "What is your biggest uncertainty about buying in Spain?",
    type: "multiple",
    maxSelections: 3,
    helper: "Choose up to 3 options.",
    options: [
      "Choosing the right area",
      "Understanding fair market value",
      "Understanding legal risks",
      "Avoiding hidden costs",
      "Assessing renovation or condition",
      "Understanding taxes and running costs",
      "Understanding rental rules",
      "Organising everything from abroad",
      "I am not sure yet",
    ],
  },
  {
    id: "additional_notes",
    section: "Rental and final priorities",
    title:
      "Is there anything else that would make an area or property feel especially right — or completely unsuitable — for you?",
    type: "text",
    optional: true,
    helper:
      "Optional. Add any further wishes, concerns or dealbreakers here.",
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
        `Please choose no more than ${current.maxSelections} options.`
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
        "Please choose an answer or enter a response before continuing."
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
        version: "3.0",
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
          "Your request could not be saved.\n\n" +
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

      alert(
        "Your request could not be saved.\n\n" + message
      );
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
            Match assessment and will use your answers to prepare your personal
            report.
          </p>

          <p style={styles.highlight}>{contact.email}</p>

          {contact.phone.trim() && (
            <p style={styles.text}>
              If we need to clarify any of your answers, we can contact you on{" "}
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
          <p style={styles.sectionLabel}>Your personal report</p>

          <h1 style={styles.title}>
            Receive your personal Area Match Report
          </h1>

          <p style={styles.text}>
            Enter your contact details below. We will use your answers to
            prepare your personal Costa Blanca Area Match Report and send it to
            your email address.
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
                onChange={(event) => setConsent(event.target.checked)}
                style={styles.checkbox}
              />

              <span style={styles.privacyText}>
                I agree that Nordic Move Spain may use my answers to prepare my
                personal Area Match Report and contact me regarding this request.
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
                  : "Request personal report"}
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
            placeholder="Add any further wishes, concerns or dealbreakers here."
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
