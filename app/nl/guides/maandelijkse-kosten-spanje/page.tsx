import type { Metadata } from "next";
import MonthlyCostCalculator from "./MonthlyCostCalculator";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Wat kost wonen in Spanje per maand? | Rekentool",
  description:
    "Bereken je maandelijkse kosten in Spanje, waaronder wonen, boodschappen, energie, vervoer, verzekeringen en onderhoud.",
};

const costRows = [
  {
    category: "Wonen",
    explanation:
      "Huur of hypotheek, comunidad, woonverzekering en een onderhoudsreserve.",
  },
  {
    category: "Boodschappen",
    explanation:
      "Supermarkt, drogisterij, huishoudelijke producten en incidentele marktinkopen.",
  },
  {
    category: "Nutsvoorzieningen",
    explanation:
      "Elektriciteit, water, internet en mobiele telefonie. Airconditioning kan het stroomverbruik verhogen.",
  },
  {
    category: "Vervoer",
    explanation:
      "Brandstof, parkeren, openbaar vervoer, verzekering en onderhoud van een auto.",
  },
  {
    category: "Zorg",
    explanation:
      "Een eventuele particuliere zorgverzekering, medicijnen en eigen bijdragen.",
  },
  {
    category: "Vrije tijd",
    explanation:
      "Restaurants, terrassen, sport, uitstapjes en andere persoonlijke uitgaven.",
  },
];

const savingTips = [
  "Vergelijk huismerken en weekaanbiedingen bij meerdere supermarkten.",
  "Koop groente en fruit in het seizoen en vergelijk de markt met de supermarkt.",
  "Reserveer maandelijks geld voor IBI, verzekering en woningonderhoud.",
  "Controleer het stroomtarief en beperk onnodig gebruik van airconditioning.",
  "Maak een afzonderlijk budget voor reizen tussen Nederland of België en Spanje.",
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Wonen in Spanje</p>
          <h1>Wat kost wonen in Spanje per maand?</h1>
          <p className={styles.lead}>
            Wie een huis in Spanje wil kopen, kijkt meestal eerst naar de
            aankoopprijs. Maar ook de maandelijkse kosten bepalen of een woning
            echt binnen je budget past. Met de rekentool op deze pagina maak je
            snel een persoonlijke schatting voor wonen, boodschappen, energie,
            vervoer, verzekeringen en vrije tijd.
          </p>
          <p className={styles.updated}>Laatst bijgewerkt: juli 2026</p>
        </header>

        <section className={styles.summaryBox} aria-labelledby="samenvatting">
          <h2 id="samenvatting">De belangrijkste kosten in het kort</h2>
          <p>
            Volgens de Spaanse huishoudbudgetenquête van het Instituto Nacional
            de Estadística bedroegen de gemiddelde uitgaven in 2025 €35.101 per
            huishouden. Voeding en alcoholvrije dranken waren daarvan gemiddeld
            €5.626 per jaar. Dit zijn landelijke gemiddelden en geen persoonlijk
            verhuisbudget: je woonplaats, woningtype en leefstijl maken een groot
            verschil.
          </p>
          <a
            href="https://ine.es/dyngs/Prensa/en/EPF2025.htm"
            target="_blank"
            rel="noreferrer"
          >
            Bekijk de officiële INE-cijfers
          </a>
        </section>

        <MonthlyCostCalculator />

        <section className={styles.section}>
          <h2>Welke maandelijkse kosten moet je meenemen?</h2>
          <p>
            De kosten van wonen in Spanje bestaan uit meer dan alleen de
            hypotheek of huur. Eigenaren krijgen daarnaast te maken met lokale
            belastingen, verzekeringen, onderhoud en soms een maandelijkse
            bijdrage aan de comunidad. Wie permanent in Spanje woont, moet ook
            vervoer, zorg en dagelijkse uitgaven meenemen.
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
          <h2>Wat kosten boodschappen in Spanje?</h2>
          <p>
            Boodschappen vormen voor veel huishoudens een van de grootste
            variabele uitgaven. Het bedrag hangt onder meer af van het aantal
            personen, het aandeel huismerken, hoeveel je buiten de deur eet en
            of je vooral in toeristische gebieden of in een kleinere plaats
            winkelt.
          </p>
          <p>
            Voor een bruikbare begroting kun je beter met een persoonlijk
            maandbedrag werken dan met losse prijzen van melk, brood of koffie.
            Productprijzen en aanbiedingen veranderen namelijk voortdurend.
            Gebruik bijvoorbeeld een startbedrag van ongeveer €280 voor één
            persoon, €470 voor twee personen of €700 voor een gezin en pas dit
            in de calculator aan op je eigen koopgedrag.
          </p>

          <div className={styles.tipBox}>
            <strong>Praktische test:</strong>
            <p>
              Bewaar tijdens een verblijf in Spanje één week alle kassabonnen.
              Vermenigvuldig het totaal met 4,33 en voeg tien procent marge toe.
              Dat geeft vaak een realistischer maandbudget dan een algemeen
              internetgemiddelde.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Elektriciteit, water en internet</h2>
          <p>
            De elektriciteitsrekening kan sterk wisselen per seizoen. In de
            zomer kan airconditioning veel verbruiken, terwijl in woningen
            zonder goede isolatie de verwarmingskosten in de winter kunnen
            oplopen. Een vrijstaande villa met zwembad heeft doorgaans hogere
            vaste lasten dan een appartement.
          </p>
          <p>
            Water is meestal een beperktere kostenpost, maar tuinberegening en
            het bijvullen van een zwembad kunnen het verbruik verhogen.
            Internet- en mobiele abonnementen zijn eenvoudiger te begroten,
            omdat providers doorgaans vaste maandpakketten aanbieden.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Kosten voor eigenaren van een Spaanse woning</h2>
          <p>
            Bezitters van een woning moeten ook rekening houden met kosten die
            niet iedere maand worden afgeschreven. Denk aan de gemeentelijke
            onroerendgoedbelasting IBI, de woonverzekering, afvalheffingen en
            onderhoud. Door deze jaarbedragen door twaalf te delen, voorkom je
            dat een jaarlijkse rekening onverwacht komt.
          </p>
          <p>
            Bij een appartement of woning in een complex betaal je vaak een
            bijdrage aan de comunidad. Daarmee worden bijvoorbeeld het
            gemeenschappelijke zwembad, de lift, de tuin en schoonmaak betaald.
            Vraag vóór aankoop altijd naar de actuele bijdrage en naar geplande
            grote werkzaamheden.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Verschillen per regio en leefstijl</h2>
          <p>
            Grote steden en populaire kustplaatsen zijn vaak duurder dan
            kleinere plaatsen in het binnenland. Vooral woonlasten, parkeren,
            horeca en sommige diensten kunnen per regio flink verschillen.
            Daarom bevat de rekentool drie eenvoudige regioprofielen: binnenland
            of kleinere plaats, kustregio en grote stad of toeristische hotspot.
          </p>
          <p>
            Zie deze profielen als een startpunt. Vul daarna de bedragen in die
            bij jouw situatie passen. Iemand met een afbetaalde woning en weinig
            autokilometers heeft een heel ander budget dan een gezin dat huurt,
            dagelijks rijdt en regelmatig naar Nederland of België vliegt.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Zo houd je de maandelijkse kosten beheersbaar</h2>
          <ul className={styles.list}>
            {savingTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className={styles.disclaimer}>
          <h2>Let op: dit blijft een indicatie</h2>
          <p>
            De calculator geeft geen financieel, fiscaal of juridisch advies.
            Werkelijke kosten verschillen per gemeente, contract, woning,
            huishouden en seizoen. Controleer vóór een aankoop de lokale
            belastingen, verzekeringen, comunidad en onderhoudskosten van de
            specifieke woning.
          </p>
        </section>
      </article>
    </main>
  );
}
