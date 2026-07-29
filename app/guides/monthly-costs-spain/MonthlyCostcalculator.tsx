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
  single: "1 persoon",
  couple: "2 personen",
  family: "Gezin",
};

const regionLabels: Record<Region, string> = {
  inland: "Binnenland / kleinere plaats",
  coast: "Kustregio",
  city: "Grote stad / toeristische hotspot",
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
    label: "Huur of hypotheek",
    hint: "Vul 0 in bij een volledig afbetaalde woning.",
  },
  {
    key: "groceries",
    label: "Boodschappen",
    hint: "Supermarkt, drogisterij en huishoudelijke producten.",
  },
  {
    key: "electricity",
    label: "Elektriciteit",
    hint: "Denk aan airconditioning, verwarming en zwembadpomp.",
  },
  {
    key: "water",
    label: "Water",
    hint: "Kan hoger zijn bij een tuin of zwembad.",
  },
  {
    key: "internet",
    label: "Internet en mobiel",
    hint: "Vaste verbinding en mobiele abonnementen.",
  },
  {
    key: "transport",
    label: "Vervoer",
    hint: "Brandstof, openbaar vervoer, parkeren en regulier onderhoud.",
  },
  {
    key: "healthcare",
    label: "Zorg en verzekering",
    hint: "Eventuele particuliere verzekering en zorguitgaven.",
  },
  {
    key: "leisure",
    label: "Horeca en vrije tijd",
    hint: "Restaurants, terrassen, sport en uitstapjes.",
  },
  {
    key: "community",
    label: "Comunidad",
    hint: "Maandelijkse bijdrage voor gemeenschappelijke voorzieningen.",
  },
  {
    key: "maintenance",
    label: "Onderhoudsreserve",
    hint: "Voor reparaties, apparatuur, tuin en schilderwerk.",
  },
];

const annualFields: Array<{
  key: AnnualKey;
  label: string;
  hint: string;
}> = [
  {
    key: "ibi",
    label: "IBI en lokale heffingen",
    hint: "Jaarbedrag dat de tool automatisch door twaalf deelt.",
  },
  {
    key: "homeInsurance",
    label: "Woonverzekering",
    hint: "Jaarpremie voor opstal en eventueel inboedel.",
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
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function toSafeNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
}

export default function MonthlyCostCalculator() {
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
          <p className={styles.calculatorEyebrow}>Interactieve rekentool</p>
          <h2 id="calculator-heading">
            Bereken je maandelijkse kosten in Spanje
          </h2>
          <p>
            Kies een huishouden en regio als startpunt. Pas daarna elk bedrag
            aan op jouw eigen situatie.
          </p>
        </div>
        <button
          type="button"
          className={styles.resetButton}
          onClick={resetCalculator}
        >
          Herstel voorbeeldbedragen
        </button>
      </div>

      <div className={styles.presetGrid}>
        <fieldset className={styles.fieldset}>
          <legend>Huishouden</legend>
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
          Regio
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
          <h3>Maandelijkse uitgaven</h3>
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
                    aria-label={`${field.label} per maand`}
                  />
                </span>
              </label>
            ))}
          </div>

          <h3 className={styles.annualHeading}>Jaarlijkse uitgaven</h3>
          <p className={styles.helperText}>
            Deze bedragen worden automatisch omgerekend naar een maandgemiddelde.
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
                    aria-label={`${field.label} per jaar`}
                  />
                </span>
              </label>
            ))}
          </div>
        </div>

        <aside className={styles.resultCard} aria-live="polite">
          <p className={styles.resultLabel}>Geschat maandbudget</p>
          <p className={styles.resultAmount}>
            {formatCurrency(totals.monthly)}
          </p>
          <p className={styles.resultCaption}>per maand</p>

          <dl className={styles.resultList}>
            <div>
              <dt>Per jaar</dt>
              <dd>{formatCurrency(totals.annual)}</dd>
            </div>
            <div>
              <dt>Per dag</dt>
              <dd>{formatCurrency(totals.daily)}</dd>
            </div>
            <div>
              <dt>Aandeel wonen</dt>
              <dd>{totals.housingShare}%</dd>
            </div>
          </dl>

          <div className={styles.resultNote}>
            <strong>Dit is een persoonlijke schatting.</strong>
            <p>
              De voorbeeldbedragen zijn geen prijsgarantie. Vraag bij een
              concrete woning altijd de actuele IBI, comunidad, verzekering en
              energiekosten op.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}