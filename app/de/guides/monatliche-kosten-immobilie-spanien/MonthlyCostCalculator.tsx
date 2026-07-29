"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

type Household = "single" | "couple" | "family";
type Region = "inland" | "coast" | "city";

type MonthlyKey =
  | "housing"
  | "groceries"
  | "electricity"
  | "water"
  | "internet"
  | "transport"
  | "healthcare"
  | "leisure"
  | "community"
  | "maintenance";

type AnnualKey = "ibi" | "homeInsurance";

type Costs<T extends string> = Record<T, number>;

const householdLabels: Record<Household, string> = {
  single: "1 Person",
  couple: "2 Personen",
  family: "Familie",
};

const regionLabels: Record<Region, string> = {
  inland: "Binnenland / kleinerer Ort",
  coast: "Küstenregion",
  city: "Großstadt / touristischer Hotspot",
};

const presets: Record<
  Household,
  { monthly: Costs<MonthlyKey>; annual: Costs<AnnualKey> }
> = {
  single: {
    monthly: {
      housing: 750,
      groceries: 280,
      electricity: 90,
      water: 30,
      internet: 45,
      transport: 120,
      healthcare: 90,
      leisure: 180,
      community: 60,
      maintenance: 80,
    },
    annual: {
      ibi: 500,
      homeInsurance: 250,
    },
  },
  couple: {
    monthly: {
      housing: 950,
      groceries: 470,
      electricity: 125,
      water: 40,
      internet: 55,
      transport: 200,
      healthcare: 170,
      leisure: 300,
      community: 85,
      maintenance: 120,
    },
    annual: {
      ibi: 650,
      homeInsurance: 320,
    },
  },
  family: {
    monthly: {
      housing: 1300,
      groceries: 700,
      electricity: 170,
      water: 55,
      internet: 70,
      transport: 300,
      healthcare: 300,
      leisure: 400,
      community: 110,
      maintenance: 180,
    },
    annual: {
      ibi: 800,
      homeInsurance: 400,
    },
  },
};

const regionMultipliers: Record<
  Region,
  Partial<Record<MonthlyKey | AnnualKey, number>>
> = {
  inland: {
    housing: 0.85,
    groceries: 0.95,
    leisure: 0.9,
    ibi: 0.9,
  },
  coast: {
    housing: 1,
    groceries: 1,
    leisure: 1,
    ibi: 1,
  },
  city: {
    housing: 1.2,
    groceries: 1.08,
    transport: 1.1,
    leisure: 1.15,
    ibi: 1.1,
  },
};

const monthlyFields: Array<{
  key: MonthlyKey;
  label: string;
  hint: string;
}> = [
  {
    key: "housing",
    label: "Miete oder Hypothek",
    hint: "Geben Sie 0 ein, wenn die Immobilie vollständig abbezahlt ist.",
  },
  {
    key: "groceries",
    label: "Lebensmittel",
    hint: "Supermarkt, Drogerie und Haushaltsprodukte.",
  },
  {
    key: "electricity",
    label: "Strom",
    hint: "Denken Sie an Klimaanlage, Heizung und Poolpumpe.",
  },
  {
    key: "water",
    label: "Wasser",
    hint: "Kann bei Garten oder Pool höher ausfallen.",
  },
  {
    key: "internet",
    label: "Internet und Mobilfunk",
    hint: "Festnetzanschluss und Mobilfunktarife.",
  },
  {
    key: "transport",
    label: "Transport",
    hint: "Kraftstoff, öffentlicher Verkehr, Parken und regelmäßige Wartung.",
  },
  {
    key: "healthcare",
    label: "Gesundheit und Versicherung",
    hint: "Gegebenenfalls private Krankenversicherung und Gesundheitsausgaben.",
  },
  {
    key: "leisure",
    label: "Gastronomie und Freizeit",
    hint: "Restaurants, Cafés, Sport und Ausflüge.",
  },
  {
    key: "community",
    label: "Eigentümergemeinschaft",
    hint: "Monatlicher Beitrag für gemeinschaftliche Einrichtungen.",
  },
  {
    key: "maintenance",
    label: "Instandhaltungsreserve",
    hint: "Für Reparaturen, Geräte, Garten und Malerarbeiten.",
  },
];

const annualFields: Array<{
  key: AnnualKey;
  label: string;
  hint: string;
}> = [
  {
    key: "ibi",
    label: "IBI und lokale Abgaben",
    hint: "Jahresbetrag, den der Rechner automatisch durch zwölf teilt.",
  },
  {
    key: "homeInsurance",
    label: "Wohngebäude- und Hausratversicherung",
    hint: "Jahresprämie für Gebäude und gegebenenfalls Hausrat.",
  },
];

function roundToFive(value: number) {
  return Math.round(value / 5) * 5;
}

function buildPreset(household: Household, region: Region) {
  const source = presets[household];
  const multipliers = regionMultipliers[region];

  const monthly = Object.fromEntries(
    Object.entries(source.monthly).map(([key, value]) => [
      key,
      roundToFive(value * (multipliers[key as MonthlyKey] ?? 1)),
    ]),
  ) as Costs<MonthlyKey>;

  const annual = Object.fromEntries(
    Object.entries(source.annual).map(([key, value]) => [
      key,
      roundToFive(value * (multipliers[key as AnnualKey] ?? 1)),
    ]),
  ) as Costs<AnnualKey>;

  return { monthly, annual };
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function toSafeNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
}

export default function MonthlyCostCalculatorDE() {
  const [household, setHousehold] = useState<Household>("couple");
  const [region, setRegion] = useState<Region>("coast");
  const initial = buildPreset("couple", "coast");
  const [monthlyCosts, setMonthlyCosts] = useState<Costs<MonthlyKey>>(
    initial.monthly,
  );
  const [annualCosts, setAnnualCosts] = useState<Costs<AnnualKey>>(
    initial.annual,
  );

  const totals = useMemo(() => {
    const monthlyDirect = Object.values(monthlyCosts).reduce(
      (sum, value) => sum + value,
      0,
    );
    const monthlyAnnual = Object.values(annualCosts).reduce(
      (sum, value) => sum + value / 12,
      0,
    );
    const monthly = monthlyDirect + monthlyAnnual;

    return {
      monthly,
      annual: monthly * 12,
      daily: (monthly * 12) / 365,
      housingShare:
        monthly > 0 ? Math.round((monthlyCosts.housing / monthly) * 100) : 0,
    };
  }, [monthlyCosts, annualCosts]);

  function applyPreset(nextHousehold: Household, nextRegion: Region) {
    const next = buildPreset(nextHousehold, nextRegion);
    setMonthlyCosts(next.monthly);
    setAnnualCosts(next.annual);
  }

  function handleHouseholdChange(nextHousehold: Household) {
    setHousehold(nextHousehold);
    applyPreset(nextHousehold, region);
  }

  function handleRegionChange(nextRegion: Region) {
    setRegion(nextRegion);
    applyPreset(household, nextRegion);
  }

  function updateMonthly(key: MonthlyKey, value: string) {
    setMonthlyCosts((current) => ({
      ...current,
      [key]: toSafeNumber(value),
    }));
  }

  function updateAnnual(key: AnnualKey, value: string) {
    setAnnualCosts((current) => ({
      ...current,
      [key]: toSafeNumber(value),
    }));
  }

  function resetCalculator() {
    applyPreset(household, region);
  }

  return (
    <section
      className={styles.calculator}
      aria-labelledby="calculator-heading"
    >
      <div className={styles.calculatorHeader}>
        <div>
          <p className={styles.calculatorEyebrow}>Interaktiver Kostenrechner</p>
          <h2 id="calculator-heading">
            Berechnen Sie Ihre monatlichen Kosten in Spanien
          </h2>
          <p>
            Wählen Sie zunächst Haushaltsgröße und Region. Passen Sie anschließend jeden Betrag
            an Ihre persönliche Situation an.
          </p>
        </div>
        <button
          type="button"
          className={styles.resetButton}
          onClick={resetCalculator}
        >
          Beispielwerte zurücksetzen
        </button>
      </div>

      <div className={styles.presetGrid}>
        <fieldset className={styles.fieldset}>
          <legend>Haushalt</legend>
          <div className={styles.segmented}>
            {(Object.keys(householdLabels) as Household[]).map((option) => (
              <button
                type="button"
                key={option}
                aria-pressed={household === option}
                className={
                  household === option
                    ? styles.segmentActive
                    : styles.segmentButton
                }
                onClick={() => handleHouseholdChange(option)}
              >
                {householdLabels[option]}
              </button>
            ))}
          </div>
        </fieldset>

        <label className={styles.selectLabel}>
          Region
          <select
            value={region}
            onChange={(event) =>
              handleRegionChange(event.target.value as Region)
            }
          >
            {(Object.keys(regionLabels) as Region[]).map((option) => (
              <option key={option} value={option}>
                {regionLabels[option]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.calculatorLayout}>
        <div className={styles.inputsCard}>
          <h3>Monatliche Ausgaben</h3>
          <div className={styles.inputList}>
            {monthlyFields.map((field) => (
              <label className={styles.costInputRow} key={field.key}>
                <span>
                  <strong>{field.label}</strong>
                  <small>{field.hint}</small>
                </span>
                <span className={styles.moneyInput}>
                  <span aria-hidden="true">€</span>
                  <input
                    type="number"
                    min="0"
                    step="5"
                    inputMode="decimal"
                    value={monthlyCosts[field.key]}
                    onChange={(event) =>
                      updateMonthly(field.key, event.target.value)
                    }
                    aria-label={`${field.label} pro Monat`}
                  />
                </span>
              </label>
            ))}
          </div>

          <h3 className={styles.annualHeading}>Jährliche Ausgaben</h3>
          <p className={styles.helperText}>
            Diese Beträge werden automatisch in einen monatlichen Durchschnitt umgerechnet.
          </p>
          <div className={styles.inputList}>
            {annualFields.map((field) => (
              <label className={styles.costInputRow} key={field.key}>
                <span>
                  <strong>{field.label}</strong>
                  <small>{field.hint}</small>
                </span>
                <span className={styles.moneyInput}>
                  <span aria-hidden="true">€</span>
                  <input
                    type="number"
                    min="0"
                    step="10"
                    inputMode="decimal"
                    value={annualCosts[field.key]}
                    onChange={(event) =>
                      updateAnnual(field.key, event.target.value)
                    }
                    aria-label={`${field.label} pro Jahr`}
                  />
                </span>
              </label>
            ))}
          </div>
        </div>

        <aside className={styles.resultCard} aria-live="polite">
          <p className={styles.resultLabel}>Geschätztes Monatsbudget</p>
          <p className={styles.resultAmount}>
            {formatCurrency(totals.monthly)}
          </p>
          <p className={styles.resultCaption}>pro Monat</p>

          <dl className={styles.resultList}>
            <div>
              <dt>Pro Jahr</dt>
              <dd>{formatCurrency(totals.annual)}</dd>
            </div>
            <div>
              <dt>Pro Tag</dt>
              <dd>{formatCurrency(totals.daily)}</dd>
            </div>
            <div>
              <dt>Anteil Wohnen</dt>
              <dd>{totals.housingShare}%</dd>
            </div>
          </dl>

          <div className={styles.resultNote}>
            <strong>Dies ist eine persönliche Schätzung.</strong>
            <p>
              Die Beispielbeträge sind keine Preisgarantie. Fragen Sie bei einer
              konkreten Immobilie immer die aktuellen Kosten für IBI, Eigentümergemeinschaft,
              Versicherung und Energie ab.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}