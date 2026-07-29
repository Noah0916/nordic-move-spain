import type { Metadata } from "next";
import MonthlyCostCalculator from "./MonthlyCostCalculator";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Was kostet das Leben in Spanien pro Monat? | Rechner",
  description:
    "Berechne deine monatlichen Kosten in Spanien, einschließlich Wohnen, Lebensmittel, Energie, Verkehr, Versicherungen und Instandhaltung.",
};

const costRows = [
  {
    category: "Wohnen",
    explanation:
      "Miete oder Hypothek, Gemeinschaftskosten, Wohngebäudeversicherung und eine Rücklage für Instandhaltung.",
  },
  {
    category: "Lebensmittel",
    explanation:
      "Supermarkt, Drogerie, Haushaltsprodukte und gelegentliche Einkäufe auf dem Wochenmarkt.",
  },
  {
    category: "Nebenkosten",
    explanation:
      "Strom, Wasser, Internet und Mobilfunk. Eine Klimaanlage kann den Stromverbrauch erhöhen.",
  },
  {
    category: "Verkehr",
    explanation:
      "Kraftstoff, Parken, öffentliche Verkehrsmittel, Versicherung und Wartung eines Autos.",
  },
  {
    category: "Gesundheit",
    explanation:
      "Eine mögliche private Krankenversicherung, Medikamente und Zuzahlungen.",
  },
  {
    category: "Freizeit",
    explanation:
      "Restaurants, Cafés und Terrassen, Sport, Ausflüge und andere persönliche Ausgaben.",
  },
];

const savingTips = [
  "Vergleiche Eigenmarken und Wochenangebote bei verschiedenen Supermärkten.",
  "Kaufe saisonales Obst und Gemüse und vergleiche die Preise auf dem Markt mit denen im Supermarkt.",
  "Lege monatlich Geld für IBI, Versicherungen und die Instandhaltung der Immobilie zurück.",
  "Überprüfe deinen Stromtarif und vermeide unnötigen Einsatz der Klimaanlage.",
  "Plane ein separates Budget für Reisen zwischen Deutschland, den Niederlanden oder Belgien und Spanien ein.",
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Leben in Spanien</p>
          <h1>Was kostet das Leben in Spanien pro Monat?</h1>
          <p className={styles.lead}>
            Wer ein Haus in Spanien kaufen möchte, schaut meist zuerst auf den
            Kaufpreis. Doch auch die monatlichen Kosten entscheiden darüber, ob
            eine Immobilie wirklich ins eigene Budget passt. Mit dem Rechner auf
            dieser Seite kannst du schnell eine persönliche Schätzung für
            Wohnen, Lebensmittel, Energie, Verkehr, Versicherungen und Freizeit
            erstellen.
          </p>
          <p className={styles.updated}>Zuletzt aktualisiert: Juli 2026</p>
        </header>

        <section
          className={styles.summaryBox}
          aria-labelledby="zusammenfassung"
        >
          <h2 id="zusammenfassung">Die wichtigsten Kosten auf einen Blick</h2>
          <p>
            Laut der spanischen Haushaltsbudgeterhebung des Instituto Nacional
            de Estadística lagen die durchschnittlichen Ausgaben im Jahr 2025
            bei 35.101 € pro Haushalt. Für Lebensmittel und alkoholfreie
            Getränke wurden davon durchschnittlich 5.626 € pro Jahr
            ausgegeben. Dabei handelt es sich um landesweite Durchschnittswerte
            und nicht um ein persönliches Umzugsbudget: Wohnort, Immobilientyp
            und Lebensstil machen einen großen Unterschied.
          </p>
          <a
            href="https://ine.es/dyngs/Prensa/en/EPF2025.htm"
            target="_blank"
            rel="noreferrer"
          >
            Offizielle INE-Zahlen ansehen
          </a>
        </section>

        <MonthlyCostCalculator />

        <section className={styles.section}>
          <h2>Welche monatlichen Kosten solltest du berücksichtigen?</h2>
          <p>
            Die Kosten für das Leben in Spanien bestehen aus mehr als nur
            Hypothek oder Miete. Eigentümer müssen zusätzlich mit lokalen
            Steuern, Versicherungen, Instandhaltung und teilweise mit
            monatlichen Gemeinschaftskosten rechnen. Wer dauerhaft in Spanien
            lebt, sollte außerdem Verkehr, Gesundheitskosten und alltägliche
            Ausgaben berücksichtigen.
          </p>

          <div className={styles.costGrid}>
            {costRows.map((row) => (
              <div className={styles.costCard} key={row.category}>
                <h3>{row.category}</h3>
                <p>{row.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Was kosten Lebensmittel in Spanien?</h2>
          <p>
            Lebensmittel gehören für viele Haushalte zu den größten variablen
            Ausgaben. Die tatsächlichen Kosten hängen unter anderem von der
            Anzahl der Personen, dem Anteil an Eigenmarken, der Häufigkeit von
            Restaurantbesuchen und davon ab, ob du vor allem in touristischen
            Regionen oder in einem kleineren Ort einkaufst.
          </p>
          <p>
            Für eine brauchbare Haushaltsplanung ist es sinnvoller, mit einem
            persönlichen Monatsbetrag zu rechnen als mit einzelnen Preisen für
            Milch, Brot oder Kaffee. Produktpreise und Angebote ändern sich
            schließlich laufend. Du kannst beispielsweise mit etwa 280 € für
            eine Person, 470 € für zwei Personen oder 700 € für eine Familie
            beginnen und den Betrag im Rechner an dein eigenes Einkaufsverhalten
            anpassen.
          </p>

          <div className={styles.tipBox}>
            <strong>Praktischer Test:</strong>
            <p>
              Bewahre während eines Aufenthalts in Spanien eine Woche lang alle
              Kassenbons auf. Multipliziere die Gesamtsumme mit 4,33 und rechne
              zusätzlich zehn Prozent Puffer hinzu. Das ergibt häufig ein
              realistischeres Monatsbudget als ein allgemeiner Durchschnittswert
              aus dem Internet.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Strom, Wasser und Internet</h2>
          <p>
            Die Stromrechnung kann je nach Jahreszeit stark schwanken. Im Sommer
            kann die Klimaanlage viel Energie verbrauchen, während in schlecht
            isolierten Wohnungen oder Häusern im Winter die Heizkosten deutlich
            steigen können. Eine freistehende Villa mit Pool verursacht
            normalerweise höhere laufende Kosten als eine Wohnung.
          </p>
          <p>
            Wasser ist in der Regel ein kleinerer Kostenfaktor, doch
            Gartenbewässerung und das Nachfüllen eines Pools können den
            Verbrauch erhöhen. Internet- und Mobilfunkverträge lassen sich
            einfacher kalkulieren, da Anbieter meist feste Monatspakete
            anbieten.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Kosten für Eigentümer einer Immobilie in Spanien</h2>
          <p>
            Immobilieneigentümer sollten auch Kosten berücksichtigen, die nicht
            monatlich abgebucht werden. Dazu gehören beispielsweise die
            kommunale Grundsteuer IBI, die Gebäude- oder Hausratversicherung,
            Abfallgebühren und Instandhaltungskosten. Wenn du diese jährlichen
            Beträge durch zwölf teilst, kommen größere Rechnungen weniger
            überraschend.
          </p>
          <p>
            Bei einer Wohnung oder einer Immobilie innerhalb einer Wohnanlage
            zahlst du häufig Gemeinschaftskosten an die Comunidad. Damit werden
            beispielsweise der Gemeinschaftspool, der Aufzug, die Gartenanlage
            und die Reinigung finanziert. Frage vor dem Kauf immer nach der
            aktuellen Höhe dieser Kosten und nach geplanten größeren
            Instandhaltungsmaßnahmen.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Unterschiede nach Region und Lebensstil</h2>
          <p>
            Große Städte und beliebte Küstenorte sind häufig teurer als kleinere
            Orte im Landesinneren. Besonders Wohnkosten, Parkgebühren,
            Gastronomie und bestimmte Dienstleistungen können sich je nach
            Region deutlich unterscheiden. Deshalb enthält der Rechner drei
            einfache Regionalprofile: Landesinneres oder kleinerer Ort,
            Küstenregion sowie Großstadt oder touristischer Hotspot.
          </p>
          <p>
            Betrachte diese Profile als Ausgangspunkt. Trage anschließend die
            Beträge ein, die zu deiner persönlichen Situation passen. Jemand mit
            einer vollständig abbezahlten Immobilie und wenigen Autokilometern
            hat ein völlig anderes Budget als eine Familie, die zur Miete wohnt,
            täglich Auto fährt und regelmäßig nach Deutschland, in die
            Niederlande oder nach Belgien fliegt.
          </p>
        </section>

        <section className={styles.section}>
          <h2>So behältst du deine monatlichen Kosten im Griff</h2>
          <ul className={styles.list}>
            {savingTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className={styles.disclaimer}>
          <h2>Hinweis: Die Berechnung bleibt eine Schätzung</h2>
          <p>
            Der Rechner stellt keine finanzielle, steuerliche oder rechtliche
            Beratung dar. Die tatsächlichen Kosten unterscheiden sich je nach
            Gemeinde, Vertrag, Immobilie, Haushalt und Jahreszeit. Prüfe vor
            einem Kauf die lokalen Steuern, Versicherungen,
            Gemeinschaftskosten und Instandhaltungskosten der jeweiligen
            Immobilie.
          </p>
        </section>
      </article>
    </main>
  );
}