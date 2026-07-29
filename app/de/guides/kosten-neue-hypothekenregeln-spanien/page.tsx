import type { Metadata } from "next";

const PAGE_PATH = "/de/guides/immobilien-spanien-hypothek-energieausweis";
const ASSESSMENT_URL = "/de/relocation-assessment";
const GUIDES_URL = "/de/guides";

export const metadata: Metadata = {
  title: "Immobilie in Spanien mit Hypothek kaufen: neue Regeln & Energieausweis 2026",
  description:
    "Was bedeuten die neuen spanischen Bewertungsregeln, der Energieausweis und die europäische EPBD für deutsche Immobilienkäufer? Aktuelle Erklärung für 2026.",
  keywords: [
    "Immobilie Spanien kaufen",
    "Hypothek Spanien",
    "Energieausweis Spanien",
    "Energiezertifikat Spanien",
    "spanische Hypothekenregeln 2026",
    "Haus in Spanien kaufen",
    "Immobilienbewertung Spanien Hypothek",
    "certificado de eficiencia energética",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    title: "Immobilie in Spanien mit Hypothek kaufen: neue Regeln & Energieausweis 2026",
    description:
      "Die aktuellen Regeln für Hypothekenbewertungen, Energiezertifikate und energieeffiziente Immobilien in Spanien.",
    url: PAGE_PATH,
    publishedTime: "2026-07-23",
    modifiedTime: "2026-07-23",
    siteName: "Nordic Move Spain",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neue Hypotheken- und Energieausweisregeln für Immobilien in Spanien",
    description:
      "Was Käufer 2026 über Bewertung, Finanzierung und den spanischen Energieausweis wissen sollten.",
  },
};

const faqs = [
  {
    question:
      "Bekommt man in Spanien keine Hypothek mehr für eine Immobilie mit Energieklasse E, F oder G?",
    answer:
      "Nein. Es gibt keine allgemeine landesweite Regel, die eine spanische Hypothek allein wegen einer niedrigen Energieklasse automatisch ausschließt. Die Bank bewertet vor allem Ihre Rückzahlungsfähigkeit und den Wert der Immobilie als Sicherheit. Seit dem 12. August 2025 muss das registrierte Energiezertifikat jedoch Bestandteil der Hypothekenbewertung sein, und Energieeffizienz sowie Klimarisiken können den Bewertungswert beeinflussen.",
  },
  {
    question:
      "Ist ein Energiezertifikat beim Verkauf einer Immobilie in Spanien verpflichtend?",
    answer:
      "Ja, vorbehaltlich bestimmter gesetzlicher Ausnahmen. Die Energieklasse muss in der Verkaufsanzeige angegeben werden. Dem Kaufvertrag muss eine Kopie des registrierten Zertifikats zusammen mit dem offiziellen Energielabel beigefügt werden.",
  },
  {
    question:
      "Muss jede spanische Wohnung bis 2030 mindestens Energieklasse C haben?",
    answer:
      "Nein. Die endgültige europäische Richtlinie legt für Wohngebäude Ziele für die durchschnittliche Energieeffizienz des nationalen Gebäudebestands fest. Die häufig genannte individuelle Pflicht zu Klasse C im Jahr 2030 und D im Jahr 2033 ist in der endgültigen Richtlinie keine allgemeine Verkaufsvoraussetzung für jede bestehende Wohnung.",
  },
  {
    question: "Wie lange ist ein spanisches Energiezertifikat gültig?",
    answer:
      "Grundsätzlich höchstens zehn Jahre. Bei Energieklasse G beträgt die maximale Gültigkeit fünf Jahre. Die jeweilige autonome Region kann zusätzliche Vorschriften zur Erneuerung oder Aktualisierung festlegen.",
  },
  {
    question: "Wer bezahlt die Bewertung für eine spanische Hypothek?",
    answer:
      "Nach dem spanischen Hypothekenrecht trägt der Kreditnehmer die Kosten der Bewertung. Bei einer Verbraucherhypothek übernimmt die Bank unter anderem die Kosten der Hypothekenurkunde, Eintragung und gestoría gemäß der gesetzlichen Kostenverteilung.",
  },
];

const sources = [
  {
    label: "BOE — Orden ECM/599/2025: neue Regeln für Immobilienbewertungen",
    href: "https://www.boe.es/buscar/doc.php?id=BOE-A-2025-11815",
  },
  {
    label: "BOE — Real Decreto 390/2021: Energiezertifizierung von Gebäuden",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-2021-9176",
  },
  {
    label:
      "BOE — Real Decreto 659/2025: Qualifikation und Registrierung von Zertifizierern",
    href: "https://www.boe.es/buscar/doc.php?id=BOE-A-2025-15230",
  },
  {
    label: "BOE — Ley 5/2019: spanisches Gesetz über Immobilienkredite",
    href: "https://www.boe.es/buscar/doc.php?id=BOE-A-2019-3814",
  },
  {
    label: "Banco de España — Erklärung zu Hypothekenbewertungen",
    href: "https://clientebancario.bde.es/pcb/es/blog/la-tasacion-no-solo-es-un-mero-tramite.html",
  },
  {
    label:
      "MITECO — neue Energieausweisdokumente ab 30. September 2026",
    href: "https://www.miteco.gob.es/content/dam/miteco/es/energia/files-1/Eficiencia/CertificacionEnergetica/DocumentosReconocidos/documentos-reconocidos/202603_Nota%20informativa%20Documentos%20Reconocidos.pdf",
  },
  {
    label:
      "EU/BOE — Richtlinie (EU) 2024/1275 über die Gesamtenergieeffizienz von Gebäuden",
    href: "https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-80664",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Immobilie in Spanien mit Hypothek kaufen: neue Regeln und Energieausweis 2026",
  description:
    "Aktuelle Erklärung zu spanischen Hypothekenbewertungen, Energiezertifikaten und europäischen Energievorschriften für Immobilienkäufer.",
  inLanguage: "de-DE",
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  author: {
    "@type": "Organization",
    name: "Nordic Move Spain",
  },
  publisher: {
    "@type": "Organization",
    name: "Nordic Move Spain",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_PATH,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="page-shell">
        <article className="article-card">
          <header className="hero">
            <nav aria-label="Breadcrumb" className="breadcrumbs">
              <a href="/de">Home</a>
              <span aria-hidden="true">/</span>
              <a href={GUIDES_URL}>Ratgeber</a>
              <span aria-hidden="true">/</span>
              <span>Hypothek & Energieausweis</span>
            </nav>

            <p className="eyebrow">
              Immobilien Spanien · Hypothek · Energieausweis
            </p>
            <h1>
              Immobilie in Spanien mit Hypothek kaufen: neue Regeln und
              Energieausweis 2026
            </h1>
            <p className="intro">
              Wer in Spanien eine Immobilie finanziert, kommt seit 2025 früher
              im Kaufprozess mit dem Energiezertifikat in Berührung. Es dient
              nicht nur der Information des Käufers: Es muss inzwischen auch
              für die offizielle Bewertung verfügbar sein, die die Bank für
              die Hypothek verwendet. Hier erfahren Sie, was sich tatsächlich
              geändert hat, welche Gerüchte nicht stimmen und worauf Sie vor
              einer Unterschrift achten sollten.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href={ASSESSMENT_URL}>
                Relocation Assessment starten
              </a>
              <a className="button button-secondary" href={GUIDES_URL}>
                Alle Ratgeber ansehen
              </a>
            </div>

            <div className="meta-row">
              <span>Aktualisiert: 23. Juli 2026</span>
              <span>Lesezeit: ca. 9 Minuten</span>
            </div>
          </header>

          <aside
            className="notice notice-important"
            aria-label="Wichtigste Änderung"
          >
            <strong>Die wichtigste neue Regel:</strong> Seit dem 12. August 2025
            muss bei der offiziellen Hypothekenbewertung eines fertiggestellten
            Gebäudes ein gültiges und registriertes spanisches
            Energiezertifikat vorliegen. Der Gutachter muss außerdem, soweit
            relevant und technisch möglich, Nachhaltigkeit sowie Umwelt- und
            Klimarisiken berücksichtigen.
          </aside>

          <nav className="toc" aria-label="Inhaltsverzeichnis">
            <strong>In diesem Artikel</strong>
            <ol>
              <li>
                <a href="#neue-regel">
                  Die neue Bewertungsregel seit August 2025
                </a>
              </li>
              <li>
                <a href="#hypothek">
                  Was dies für die Hypothekenfinanzierung bedeutet
                </a>
              </li>
              <li>
                <a href="#energieausweis">
                  Die bestehenden Regeln für den Energieausweis
                </a>
              </li>
              <li>
                <a href="#aenderungen-2026">Neue Änderungen im Jahr 2026</a>
              </li>
              <li>
                <a href="#eu-regeln">
                  EU-Ziele für 2030 und 2035: Fakten versus Gerüchte
                </a>
              </li>
              <li>
                <a href="#checkliste">Checkliste für Immobilienkäufer</a>
              </li>
            </ol>
          </nav>

          <section id="neue-regel">
            <h2>
              1. Neue Regel: Energiezertifikat bei der Hypothekenbewertung
              erforderlich
            </h2>
            <p>
              Die spanische <em>Orden ECM/599/2025</em> hat die landesweiten
              Bewertungsregeln für finanzielle Zwecke geändert. Seit dem 12.
              August 2025 muss der Gutachter bei einem fertiggestellten Gebäude
              über das registrierte
              <em> certificado de eficiencia energética</em> verfügen. Bei einem
              Gebäude im Bau oder in der Projektphase reichen das Zertifikat und
              eine Kopie des Registrierungsantrags aus, sofern die Angaben
              übereinstimmen.
            </p>
            <p>
              Das ist wichtig, weil die Bewertung in der Regel vor der
              endgültigen Kaufurkunde stattfindet. Früher gelangte das
              Energiezertifikat in der Praxis manchmal erst spät in die Akte.
              Ein fehlendes oder nicht registriertes Zertifikat kann nun die
              Bewertung und damit den Hypothekenantrag verzögern.
            </p>

            <h3>Nachhaltigkeit kann den Bewertungswert beeinflussen</h3>
            <p>
              Dieselbe Regelung führt ein offizielles Nachhaltigkeitsprinzip in
              die Bewertung ein. Wenn der Markt dies nachweislich berücksichtigt
              und die verwendete Bewertungsmethode es zulässt, können unter
              anderem Energieeffizienz, physische Klimarisiken und
              Transitionsrisiken in die Wertermittlung einfließen. Der Effekt
              kann positiv oder negativ sein.
            </p>
            <ul>
              <li>
                Eine energieeffiziente Immobilie kann durch niedrigere
                Betriebskosten attraktiver sein.
              </li>
              <li>
                Eine energetisch schwache Immobilie kann künftige
                Renovierungskosten verursachen.
              </li>
              <li>
                Hochwasser-, Hitze-, Dürre- oder Küstenrisiken unterscheiden
                sich je nach Standort.
              </li>
              <li>
                Der Gutachter vergleicht die Immobilie mit relevanten
                Markttransaktionen und Merkmalen.
              </li>
            </ul>
            <p>
              Eine niedrige Energieklasse senkt den Bewertungswert also nicht
              automatisch. Der Gutachter muss die konkrete Immobilie, den
              Standort, den Markt und verfügbare Vergleichsobjekte bewerten.
            </p>
          </section>

          <section id="hypothek">
            <h2>
              2. Bedeutet eine niedrige Energieklasse, dass Sie keine spanische
              Hypothek bekommen?
            </h2>
            <p>
              Nein. Es gibt kein allgemeines spanisches Gesetz, das Banken die
              Finanzierung einer Immobilie mit Energieklasse E, F oder G
              verbietet. Das Energiezertifikat ist jedoch Teil der
              Bewertungsunterlagen geworden. Ein niedrigerer Bewertungswert oder
              sichtbare Renovierungsrisiken können daher indirekt Einfluss auf
              die maximale Darlehenshöhe oder die interne Risikobewertung der
              Bank haben.
            </p>

            <h3>Die Bank bewertet zwei unterschiedliche Risiken</h3>
            <div className="two-column">
              <div className="info-box">
                <h4>1. Ihre finanzielle Tragfähigkeit</h4>
                <p>
                  Die Bank prüft unter anderem Einkommen, Beschäftigungs- oder
                  Unternehmersituation, Ersparnisse, feste Ausgaben, bestehende
                  Schulden und erwartete Einnahmen während der Laufzeit. Das
                  spanische Gesetz verlangt, dass ein Darlehen nur vergeben
                  wird, wenn eine Rückzahlung voraussichtlich möglich ist.
                </p>
              </div>
              <div className="info-box">
                <h4>2. Den Wert der Immobilie</h4>
                <p>
                  Die Immobilie dient als Sicherheit. Die Hypothekenbewertung
                  muss vor der Darlehensvergabe durch einen unabhängigen,
                  zugelassenen Gutachter oder eine Bewertungsinstitution
                  durchgeführt werden. In der Praxis wird die Finanzierung
                  häufig auf einen Prozentsatz des niedrigeren relevanten Wertes
                  begrenzt; der genaue Prozentsatz ist jedoch Bankpolitik und
                  kein allgemeiner Rechtsanspruch des Käufers.
                </p>
              </div>
            </div>

            <p>
              Die Banco de España nennt als übliche Marktpraxis eine
              Finanzierung von bis zu etwa 80 % des Bewertungswertes. Für
              Nichtresidenten, Zweitwohnungen, Anlageimmobilien oder
              risikoreichere Fälle können Banken strengere interne Grenzen
              anwenden. Lassen Sie deshalb vor der Unterzeichnung eines
              Reservierungs- oder Anzahlungsvertrags eine schriftliche
              finanzielle Vorprüfung durchführen.
            </p>

            <h3>Schützen Sie die Anzahlung mit einem Finanzierungsvorbehalt</h3>
            <p>
              Eine spanische Reservierung oder ein <em>contrato de arras</em>{" "}
              kann erhebliche finanzielle Folgen haben, wenn die Hypothek später
              abgelehnt wird. Lassen Sie deshalb eine klare auflösende Bedingung
              für die Finanzierung und – soweit relevant – einen
              Mindestbewertungswert aufnehmen. Die genaue Formulierung sollte
              von einem unabhängigen spanischen Rechtsanwalt geprüft werden.
            </p>

            <aside className="notice">
              <strong>Achtung:</strong> Eine vorläufige
              Hypothekenindikation ist keine endgültige Genehmigung. Erst nach
              Prüfung Ihrer Unterlagen, der Immobiliendokumente und der Bewertung
              kann die Bank ein verbindliches Angebot abgeben.
            </aside>
          </section>

          <section id="energieausweis">
            <h2>
              3. Welche Energieausweisregeln gelten bereits beim Verkauf von
              Immobilien in Spanien?
            </h2>
            <p>
              Das spanische Energiezertifikat war bereits vor der neuen
              Bewertungsregel bei den meisten Verkäufen und neuen
              Vermietungsvorgängen verpflichtend. Verkäufer beziehungsweise
              Eigentümer sind für Beantragung, Registrierung und Aufbewahrung
              verantwortlich, sofern keine spezielle gesetzliche Ausnahme
              greift.
            </p>

            <h3>Die Energieklasse muss in der Anzeige stehen</h3>
            <p>
              Die Energieinformationen müssen in Angeboten, Werbemitteln und
              Anzeigen für Verkauf oder Vermietung enthalten sein. Diese Pflicht
              gilt auch für Maklerwebsites, Immobilienportale, Broschüren und
              andere Parteien, die die Anzeige veröffentlichen oder
              veröffentlichen lassen.
            </p>

            <h3>
              Das registrierte Zertifikat gehört zum Kaufvertrag
            </h3>
            <p>
              Beim Verkauf einer bestehenden Immobilie muss dem Kaufvertrag eine
              Kopie des registrierten Energiezertifikats zusammen mit dem
              offiziellen Energielabel beigefügt werden. Ein loses, nicht
              registriertes Gutachten hat nicht dieselbe rechtliche Gültigkeit.
            </p>

            <h3>Gültigkeit: zehn Jahre, bei Klasse G fünf Jahre</h3>
            <p>
              Ein spanisches Energiezertifikat ist grundsätzlich höchstens zehn
              Jahre gültig. Für Energieklasse G gelten maximal fünf Jahre. Die
              jeweilige autonome Region kann zusätzliche Verfahren für
              Registrierung, Erneuerung und Aktualisierung vorschreiben.
            </p>

            <h3>Ein Energiezertifikat ist keine technische Gebäudeprüfung</h3>
            <p>
              Das Zertifikat informiert über die berechnete Energieeffizienz und
              enthält Empfehlungen zur Verbesserung. Es beweist nicht, dass die
              Immobilie rechtlich, baulich oder installationstechnisch
              vollständig in Ordnung ist. Kombinieren Sie es daher mit einer
              rechtlichen Due Diligence und – bei älteren oder umgebauten
              Immobilien – einer technischen Gebäudeinspektion.
            </p>
          </section>

          <section id="aenderungen-2026">
            <h2>
              4. Was hat sich 2026 bei der spanischen Energiezertifizierung
              geändert?
            </h2>
            <p>
              Am 23. Juli 2026 trat <em>Real Decreto 659/2025</em> in Kraft.
              Diese Änderung betrifft vor allem die Frage, wer
              Energiezertifikate ausstellen darf und wie qualifizierte
              Fachpersonen registriert und kontrolliert werden.
            </p>
            <ul>
              <li>
                Der Zugang zur Tätigkeit wird an Ausbildung, Kenntnisse und
                Qualifikationen geknüpft.
              </li>
              <li>
                Für bestimmte Ausbildungswege sind zusätzliche Kursmodule
                erforderlich.
              </li>
              <li>
                Die Fachperson muss vorab eine Eigenerklärung bei der zuständigen
                Region einreichen.
              </li>
              <li>
                Es wird ein zentrales Verwaltungsregister qualifizierter
                Zertifizierer geführt.
              </li>
              <li>
                Die autonomen Regionen behalten eine wichtige Rolle bei
                Registrierung und Aufsicht.
              </li>
            </ul>
            <p>
              Für Käufer bedeutet dies vor allem: Prüfen Sie, ob das Zertifikat
              tatsächlich registriert ist und ob der Aussteller dazu befugt ist.
              Die Verpflichtung, beim Kauf ein registriertes Zertifikat und
              Energielabel zu erhalten, bleibt bestehen.
            </p>

            <h3>Neue Modelle ab 30. September 2026</h3>
            <p>
              Nach gemeinsamer Information der spanischen Ministerien werden ab
              dem 30. September 2026 angepasste Modelle und technische Dokumente
              verwendet. Vorgesehen sind separate Labels für Projekt,
              fertiggestellten Neubau und Bestandsgebäude sowie Änderungen am
              Zertifikat und an der elektronischen XML-Datei. Käufer können um
              diesen Zeitpunkt herum daher auf ein neues Layout oder eine
              veränderte Dokumentstruktur treffen.
            </p>
          </section>

          <section id="eu-regeln">
            <h2>
              5. Europäische Energievorschriften für 2030 und 2035: Was stimmt
              und was nicht?
            </h2>
            <p>
              Online wird häufig behauptet, dass jede bestehende Immobilie in
              Spanien ab 2030 mindestens Energieklasse C und ab 2033 Klasse D
              haben müsse, um verkauft oder vermietet werden zu dürfen. Das ist
              keine korrekte Wiedergabe der endgültigen europäischen Richtlinie
              2024/1275.
            </p>

            <h3>Für Wohngebäude gelten Ziele für den nationalen Durchschnitt</h3>
            <p>
              Die Mitgliedstaaten müssen einen nationalen Renovierungspfad für
              den Wohngebäudebestand festlegen. Der durchschnittliche
              Primärenergieverbrauch des gesamten Wohngebäudebestands muss
              gegenüber 2020 bis 2030 um mindestens 16 % und bis 2035 um 20 %
              bis 22 % sinken. Mindestens 55 % dieser Verringerung soll durch die
              Renovierung der 43 % energetisch schlechtesten Wohngebäude
              erreicht werden.
            </p>
            <p>
              Spanien kann dazu unterschiedliche Instrumente einsetzen,
              beispielsweise Förderprogramme, technische Unterstützung,
              Finanzierung und gegebenenfalls nationale Mindeststandards. Die
              europäische Richtlinie selbst enthält jedoch keine allgemeine
              Vorschrift, nach der jede bestehende spanische Wohnung beim Verkauf
              im Jahr 2030 individuell mindestens Klasse C haben muss.
            </p>

            <h3>
              Die verbindlichen Schwellen für 2030 und 2033 betreffen
              Nichtwohngebäude
            </h3>
            <p>
              Für Nichtwohngebäude schreibt die Richtlinie hingegen
              Mindeststandards vor. Die schlechtesten 16 % müssen bis spätestens
              2030 unter einen nationalen Energieverbrauchsgrenzwert kommen, die
              schlechtesten 26 % bis spätestens 2033. Dieses System ist nicht
              dasselbe wie ein fester europäischer Energieklassenbuchstabe für
              jede Wohnung.
            </p>

            <aside className="notice notice-warning">
              <strong>Praktische Schlussfolgerung:</strong> Kaufen Sie eine
              Immobilie mit Klasse E, F oder G nicht mit der Annahme, dass sich
              künftig nichts ändern wird. Derzeit gibt es kein automatisches
              landesweites Hypotheken- oder Verkaufsverbot, doch künftige
              spanische Renovierungsmaßnahmen, Energiekosten und
              Marktpräferenzen können Wert und Finanzierbarkeit beeinflussen.
            </aside>
          </section>

          <section id="checkliste">
            <h2>6. Checkliste für deutsche Immobilienkäufer</h2>
            <ol className="checklist">
              <li>
                <strong>
                  Fordern Sie das vollständige registrierte Energiezertifikat an.
                </strong>{" "}
                Prüfen Sie nicht nur die Energieklasse, sondern auch
                Registrierungsnummer, Gültigkeit, Energieverbrauch,
                CO₂-Emissionen und Verbesserungsvorschläge.
              </li>
              <li>
                <strong>
                  Lassen Sie das Zertifikat vor der Bewertung einreichen.
                </strong>{" "}
                Warten Sie nicht bis zum Notartermin; ein fehlendes Dokument kann
                die Hypothekenplanung verzögern.
              </li>
              <li>
                <strong>
                  Lassen Sie sich von der Bank vorab bestätigen, welcher
                  Gutachter akzeptiert wird.
                </strong>{" "}
                Der Käufer bezahlt in der Regel die Bewertung und kann einen
                zugelassenen Gutachter wählen, praktische
                Akzeptanzbedingungen sollten jedoch vorab geklärt werden.
              </li>
              <li>
                <strong>
                  Erstellen Sie bei einer niedrigen Energieklasse ein
                  Renovierungsbudget.
                </strong>{" "}
                Denken Sie an Dämmung, Verglasung, Sonnenschutz, Wärmepumpe,
                Klimaanlage, Warmwasser, Lüftung und gegebenenfalls Maßnahmen
                der Eigentümergemeinschaft.
              </li>
              <li>
                <strong>Prüfen Sie die Eigentümergemeinschaft.</strong>{" "}
                Fordern Sie Protokolle, Budgets, Rückstände, geplante Fassaden-
                oder Dacharbeiten und mögliche Beschlüsse zu Solaranlagen oder
                gemeinschaftlichen Installationen an.
              </li>
              <li>
                <strong>
                  Prüfen Sie Klima- und Versicherbarkeitsrisiken.
                </strong>{" "}
                Achten Sie auf Hochwasser, Waldbrand, Hitze, Dürre,
                Küstenlage und die Bedingungen der Gebäudeversicherung.
              </li>
              <li>
                <strong>
                  Vereinbaren Sie einen Finanzierungs- und Bewertungsvorbehalt.
                </strong>{" "}
                Lassen Sie dies vor Unterzeichnung einer Reservierung oder eines
                Arras-Vertrags rechtlich festhalten.
              </li>
              <li>
                <strong>Vergleichen Sie die FEIN mehrerer Banken.</strong>{" "}
                Prüfen Sie Zinssatz, effektive Gesamtkosten, verpflichtende oder
                vergünstigende Zusatzprodukte, vorzeitige Rückzahlung und
                Bedingungen bei variabler Verzinsung.
              </li>
            </ol>

            <div className="buyer-cta">
              <div>
                <p className="eyebrow">Persönliche Vorbereitung</p>
                <h2>
                  Möchten Sie wissen, welche Finanzierung und Region zu Ihrem
                  Kaufplan passen?
                </h2>
                <p>
                  Mit unserem Relocation Assessment strukturieren Sie Budget,
                  Finanzierung, Standortwünsche und den geplanten
                  Immobilienkauf, bevor Sie sich vertraglich binden.
                </p>
              </div>
              <div className="buyer-cta-actions">
                <a className="button button-light" href={ASSESSMENT_URL}>
                  Relocation Assessment starten
                </a>
                <a className="text-link-light" href={GUIDES_URL}>
                  Weitere Ratgeber ansehen →
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2>7. Zusammenfassung: Was sollten Käufer jetzt wissen?</h2>
            <div className="summary-grid">
              <div>
                <span className="summary-label">Seit 12. August 2025</span>
                <p>
                  Das registrierte Energiezertifikat ist für die
                  Hypothekenbewertung erforderlich.
                </p>
              </div>
              <div>
                <span className="summary-label">
                  Keine automatische Ablehnung
                </span>
                <p>
                  Eine niedrige Energieklasse ist kein landesweites
                  Hypothekenverbot, kann aber indirekt eine Rolle spielen.
                </p>
              </div>
              <div>
                <span className="summary-label">Seit 23. Juli 2026</span>
                <p>
                  Neue Anforderungen an Ausbildung, Erklärung und Registrierung
                  von Zertifizierern.
                </p>
              </div>
              <div>
                <span className="summary-label">Ab 30. September 2026</span>
                <p>
                  Neue Modelle für Labels, Zertifikate und technische
                  Dokumente.
                </p>
              </div>
            </div>
            <p>
              Der beste Schutz ist einfach: Lassen Sie Finanzierung, Bewertung,
              Energieeffizienz, baulichen Zustand und rechtliche Dokumente als
              ein zusammenhängendes Dossier prüfen, bevor Sie eine
              bedingungslose Anzahlung leisten.
            </p>

            <div className="inline-actions">
              <a className="button button-primary" href={ASSESSMENT_URL}>
                Relocation Assessment starten
              </a>
              <a className="button button-secondary" href={GUIDES_URL}>
                Alle Ratgeber ansehen
              </a>
            </div>
          </section>

          <section className="faq-section" aria-labelledby="faq-heading">
            <h2 id="faq-heading">Häufig gestellte Fragen</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <section className="sources" aria-labelledby="sources-heading">
            <h2 id="sources-heading">Offizielle Quellen</h2>
            <p>
              Die folgenden Quellen wurden für diese Veröffentlichung am 23.
              Juli 2026 geprüft. Regionale Vorschriften und administrative
              Verfahren können je nach autonomer Region unterschiedlich sein.
            </p>
            <ul>
              {sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <footer className="disclaimer">
            <strong>Rechtlicher Hinweis</strong>
            <p>
              Dieser Artikel enthält allgemeine Informationen und stellt keine
              individuelle rechtliche, steuerliche, bauliche oder finanzielle
              Beratung dar. Lassen Sie vor einem Kauf die aktuellen
              landesweiten und regionalen Vorschriften sowie alle
              Immobiliendokumente von einem unabhängigen spanischen
              Rechtsanwalt, einem zugelassenen Gutachter und einem
              Finanzierungsberater prüfen.
            </p>
          </footer>
        </article>
      </main>

      <style>{`
        :root {
          --page-bg: #f4f3ef;
          --paper: #ffffff;
          --ink: #17211b;
          --muted: #5c675f;
          --accent: #9b3f25;
          --accent-dark: #6f2c1a;
          --soft: #f5ebe5;
          --green-soft: #eaf1ec;
          --warning: #fff5dc;
          --line: #dde2dd;
          --shadow: 0 22px 70px rgba(27, 38, 31, 0.09);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: var(--page-bg); color: var(--ink); }

        .page-shell {
          padding: 48px 20px 80px;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
        }

        .article-card {
          width: min(920px, 100%);
          margin: 0 auto;
          padding: clamp(28px, 6vw, 72px);
          background: var(--paper);
          border: 1px solid rgba(23, 33, 27, 0.08);
          border-radius: 24px;
          box-shadow: var(--shadow);
        }

        .breadcrumbs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .breadcrumbs a {
          color: inherit;
          text-decoration: none;
        }

        .hero-actions,
        .inline-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 12px 20px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-weight: 750;
          text-decoration: none;
        }

        .button-primary {
          background: var(--accent-dark);
          color: white;
        }

        .button-secondary {
          border-color: var(--accent-dark);
          color: var(--accent-dark);
          background: transparent;
        }

        .button-light {
          background: white;
          color: var(--accent-dark);
        }

        .buyer-cta {
          display: grid;
          grid-template-columns: 1.4fr 0.6fr;
          gap: 28px;
          align-items: center;
          margin-top: 44px;
          padding: 30px;
          border-radius: 18px;
          background: var(--accent-dark);
          color: white;
        }

        .buyer-cta h2 {
          margin-top: 8px;
          color: white;
        }

        .buyer-cta p {
          color: rgba(255,255,255,0.82);
        }

        .buyer-cta .eyebrow {
          color: #f0c5b6;
        }

        .buyer-cta-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
        }

        .text-link-light {
          color: white;
        }

        .hero {
          padding-bottom: 34px;
          border-bottom: 1px solid var(--line);
        }

        .eyebrow {
          margin: 0 0 14px;
          color: var(--accent);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        h1, h2, h3, h4 {
          font-family: Georgia, "Times New Roman", serif;
          line-height: 1.16;
          text-wrap: balance;
        }

        h1 {
          margin: 0;
          max-width: 850px;
          font-size: clamp(2.25rem, 6vw, 4.35rem);
          letter-spacing: -0.045em;
        }

        h2 {
          margin: 64px 0 18px;
          font-size: clamp(1.65rem, 3.5vw, 2.35rem);
          letter-spacing: -0.025em;
        }

        h3 {
          margin: 34px 0 12px;
          font-size: 1.38rem;
        }

        h4 {
          margin: 0 0 10px;
          font-size: 1.15rem;
        }

        p, li {
          font-size: 1.04rem;
          line-height: 1.78;
        }

        p { margin: 0 0 18px; }
        ul, ol { padding-left: 1.35rem; }
        li + li { margin-top: 9px; }

        a {
          color: var(--accent-dark);
          font-weight: 700;
          text-decoration-thickness: 1px;
          text-underline-offset: 3px;
        }

        a:hover { color: var(--accent); }

        .intro {
          max-width: 790px;
          margin-top: 24px;
          color: #39463e;
          font-size: clamp(1.12rem, 2vw, 1.3rem);
          line-height: 1.68;
        }

        .meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 24px;
          margin-top: 28px;
          color: var(--muted);
          font-size: 0.92rem;
          font-weight: 650;
        }

        .notice {
          margin: 32px 0;
          padding: 22px 24px;
          border-left: 5px solid #526c5a;
          border-radius: 10px;
          background: var(--green-soft);
          line-height: 1.7;
        }

        .notice-important {
          border-left-color: var(--accent);
          background: var(--soft);
        }

        .notice-warning {
          border-left-color: #c28a18;
          background: var(--warning);
        }

        .toc {
          margin: 38px 0 16px;
          padding: 26px 28px;
          border: 1px solid var(--line);
          border-radius: 16px;
          background: #fafbf9;
        }

        .toc strong {
          display: block;
          margin-bottom: 12px;
          font-size: 1.05rem;
        }

        .toc ol { margin: 0; }
        .toc li { font-size: 0.98rem; line-height: 1.55; }

        .two-column,
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 22px 0 28px;
        }

        .info-box,
        .summary-grid > div {
          padding: 24px;
          border: 1px solid var(--line);
          border-radius: 14px;
          background: #fbfcfb;
        }

        .info-box p,
        .summary-grid p { margin: 0; }

        .summary-label {
          display: block;
          margin-bottom: 8px;
          color: var(--accent);
          font-size: 0.8rem;
          font-weight: 850;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .checklist {
          margin-top: 24px;
          padding-left: 0;
          list-style: none;
          counter-reset: buyer-checklist;
        }

        .checklist li {
          position: relative;
          margin: 0;
          padding: 20px 0 20px 56px;
          border-bottom: 1px solid var(--line);
          counter-increment: buyer-checklist;
        }

        .checklist li::before {
          content: counter(buyer-checklist);
          position: absolute;
          top: 20px;
          left: 0;
          display: grid;
          width: 36px;
          height: 36px;
          place-items: center;
          border-radius: 50%;
          background: var(--accent);
          color: white;
          font-weight: 800;
        }

        .faq-section details {
          border-top: 1px solid var(--line);
          padding: 18px 0;
        }

        .faq-section details:last-child { border-bottom: 1px solid var(--line); }

        .faq-section summary {
          cursor: pointer;
          font-size: 1.04rem;
          font-weight: 800;
          line-height: 1.5;
        }

        .faq-section details p {
          margin: 14px 0 0;
          color: #3d4b42;
        }

        .sources {
          margin-top: 64px;
          padding: 28px;
          border-radius: 16px;
          background: #f7f8f6;
        }

        .sources h2 { margin-top: 0; }
        .sources li, .sources p { font-size: 0.94rem; }

        .disclaimer {
          margin-top: 38px;
          padding-top: 24px;
          border-top: 1px solid var(--line);
          color: var(--muted);
        }

        .disclaimer p {
          margin-top: 8px;
          font-size: 0.9rem;
          line-height: 1.65;
        }

        section { scroll-margin-top: 24px; }

        @media (max-width: 720px) {
          .page-shell { padding: 0; }
          .article-card {
            border: 0;
            border-radius: 0;
            box-shadow: none;
          }
          .two-column, .summary-grid, .buyer-cta { grid-template-columns: 1fr; }
          h2 { margin-top: 50px; }
        }

        @media print {
          .page-shell { padding: 0; background: white; }
          .article-card { box-shadow: none; border: 0; padding: 0; }
          a { color: inherit; }
        }
      `}</style>
    </>
  );
}