import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Immobilie in Spanien kaufen: Ablauf, Kosten und rechtliche Prüfung",
  description:
    "Ausführlicher deutscher Ratgeber zum Immobilienkauf in Spanien: Kaufablauf, Kaufnebenkosten, NIE, Anwalt, Notar, Grundbuch, Finanzierung und Costa Blanca Nord.",
  alternates: { canonical: "/de/guides/immobilienkauf-spanien" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Immobilie in Spanien kaufen: Ablauf, Kosten und rechtliche Prüfung",
    description:
      "Deutscher Ratgeber für einen sicheren Immobilienkauf in Spanien und an der Costa Blanca Nord.",
    type: "article",
    locale: "de_DE",
    siteName: "Nordic Move Spain",
  },
  twitter: {
    card: "summary_large_image",
    title: "Immobilie in Spanien kaufen",
    description:
      "Kaufablauf, Nebenkosten, rechtliche Prüfung und wichtige Hinweise für deutsche Käufer.",
  },
};
const quickFacts = [
  {
    title: "Immobilienkauf als Ausländer",
    text: "Deutsche und andere internationale Käufer können grundsätzlich Immobilien in Spanien erwerben. Für steuerliche, notarielle und administrative Vorgänge wird normalerweise eine spanische NIE-Nummer benötigt.",
  },
  {
    title: "Bestandsimmobilie oder Neubau",
    text: "Steuern, Verträge und Prüfschritte unterscheiden sich danach, ob Sie eine bestehende Immobilie oder einen Neubau direkt vom Projektentwickler kaufen.",
  },
  {
    title: "Unabhängige rechtliche Prüfung",
    text: "Grundbuch, Eigentümer, Belastungen, Baugenehmigungen, Schulden, Gemeinschaftskosten und Verträge sollten vor einer verbindlichen Zahlung unabhängig geprüft werden.",
  },
  {
    title: "Notar und Grundbuch",
    text: "Der Kauf wird normalerweise in einer notariellen Urkunde festgehalten. Anschließend wird die Eigentumsübertragung beim spanischen Grundbuch eingereicht.",
  },
  {
    title: "Finanzierung in Spanien",
    text: "Spanische Banken können auch Nichtresidenten finanzieren. Einkommen, Eigenkapital, Alter, Objektwert und bestehende Verpflichtungen beeinflussen die Konditionen.",
  },
  {
    title: "Vollständiges Kaufbudget",
    text: "Neben dem Kaufpreis sollten Steuern, Notar, Grundbuch, Rechtsberatung, Finanzierung, Renovierung, Einrichtung und laufende Eigentumskosten eingeplant werden.",
  },
];
const processSteps = [
  {
    number: "01",
    title: "Kaufziel und Budget bestimmen",
    text: "Klären Sie, ob die Immobilie als Ferienhaus, Zweitwohnsitz, dauerhafter Wohnsitz, Ruhestandswohnsitz oder Kapitalanlage genutzt werden soll. Berechnen Sie ein Gesamtbudget einschließlich Nebenkosten, Renovierungen und Einrichtung.",
  },
  {
    number: "02",
    title: "Die passende Region auswählen",
    text: "Vergleichen Sie nicht nur Orte, sondern konkrete Wohngebiete. Prüfen Sie Fahrtzeiten, Hanglage, Zufahrt, Wintersonne, Infrastruktur, Gesundheitsversorgung, Schulen, Lärm und Entfernung zum Meer.",
  },
  {
    number: "03",
    title: "NIE und Finanzierung vorbereiten",
    text: "Beantragen Sie Ihre NIE-Nummer rechtzeitig. Wer eine Hypothek benötigt, sollte vor intensiven Besichtigungen eine Finanzierungseinschätzung und einen Nachweis über verfügbares Eigenkapital vorbereiten.",
  },
  {
    number: "04",
    title: "Immobilien gezielt besichtigen",
    text: "Bewerten Sie neben Aussicht und Ausstattung auch Bausubstanz, Feuchtigkeit, Sonneneinstrahlung, Zufahrt, Nachbarschaft, laufende Kosten und die tatsächliche Entfernung zu wichtigen Einrichtungen.",
  },
  {
    number: "05",
    title: "Verfügbarkeit und Verkäufer bestätigen",
    text: "Lassen Sie bestätigen, dass die Immobilie tatsächlich verfügbar ist, wer der rechtmäßige Eigentümer ist und ob mehrere Makler oder Vermittler beteiligt sind.",
  },
  {
    number: "06",
    title: "Rechtliche und technische Prüfung",
    text: "Vor einer endgültigen Verpflichtung sollten Grundbuch, Kataster, Genehmigungen, Anbauten, Pools, Schulden und Verträge geprüft werden. Bei älteren oder umgebauten Häusern kann zusätzlich eine technische Begutachtung sinnvoll sein.",
  },
  {
    number: "07",
    title: "Reservierung und Vorvertrag prüfen",
    text: "Unterschreiben Sie Reservierungs- oder Anzahlungsvereinbarungen erst, wenn Sie Rückzahlungsbedingungen, Fristen und rechtliche Folgen verstehen. Lassen Sie auch einen Arras-Vertrag vorab prüfen.",
  },
  {
    number: "08",
    title: "Notartermin und Kaufpreiszahlung",
    text: "Beim Notartermin wird die notarielle Kaufurkunde unterzeichnet. Identität, Zahlungsweg, Kaufpreis und bestimmte Unterlagen werden dokumentiert. Anschließend erfolgt normalerweise die Schlüsselübergabe.",
  },
  {
    number: "09",
    title: "Steuern, Grundbuch und Verträge",
    text: "Nach der Unterzeichnung werden Steuern abgewickelt und die Urkunde beim Grundbuch eingereicht. Danach folgen Versicherungen, Strom, Wasser, Gemeinschaft und weitere Versorgungsverträge.",
  },
];
const legalChecks = [
  {
    title: "Nota Simple und Eigentümer",
    text: "Der Grundbuchauszug sollte zeigen, wer als Eigentümer eingetragen ist und ob Hypotheken, Pfändungen, Dienstbarkeiten oder andere Belastungen bestehen.",
  },
  {
    title: "Kataster und Grundbuch",
    text: "Flächen, Grundstücksgrenzen und Gebäudeteile können zwischen Kataster, Grundbuch und tatsächlicher Situation voneinander abweichen. Unterschiede sollten erklärt und bewertet werden.",
  },
  {
    title: "Baugenehmigungen und Anbauten",
    text: "Pools, Garagen, Gästehäuser, Terrassenüberdachungen, Sommerküchen und spätere Erweiterungen sollten rechtlich und bautechnisch kontrolliert werden.",
  },
  {
    title: "Bewohnbarkeit und Nutzung",
    text: "Abhängig von Immobilie, Gemeinde und Situation sollten erforderliche Bewohnbarkeits-, Erstbezugs- oder Nutzungsunterlagen kontrolliert werden.",
  },
  {
    title: "Eigentümergemeinschaft",
    text: "Bei Apartments und Immobilien in einer Gemeinschaft sollten Satzung, Protokolle, laufende Beiträge, Rückstände und geplante Sonderumlagen geprüft werden.",
  },
  {
    title: "Kommunale Zahlungen",
    text: "Es sollte geprüft werden, ob lokale Immobiliensteuer, Müllgebühren und weitere kommunale Forderungen ordnungsgemäß bezahlt wurden.",
  },
  {
    title: "Energieausweis",
    text: "Der Verkäufer sollte den erforderlichen Energieausweis bereitstellen. Er informiert über die energetische Bewertung der Immobilie.",
  },
  {
    title: "Mietverträge und Nutzung",
    text: "Kontrollieren Sie, ob die Immobilie vermietet, bewohnt oder anderweitig genutzt wird und wann eine freie Übergabe garantiert werden kann.",
  },
];
const costItems = [
  {
    title: "Steuern bei Bestandsimmobilien",
    text: "Beim Erwerb einer Bestandsimmobilie fällt normalerweise eine regionale Grunderwerbsteuer an. Bemessungsgrundlage und Steuersatz müssen für den konkreten Kauf geprüft werden.",
  },
  {
    title: "Steuern bei Neubauten",
    text: "Beim erstmaligen Erwerb eines Neubaus vom Projektentwickler fallen üblicherweise Mehrwertsteuer und gegebenenfalls Stempelsteuer beziehungsweise AJD an.",
  },
  {
    title: "Notar und Grundbuch",
    text: "Notar- und Grundbuchkosten hängen unter anderem vom Kaufpreis, Umfang der Urkunde, Finanzierung und den einzutragenden Rechten ab.",
  },
  {
    title: "Anwalt und fachliche Prüfung",
    text: "Planen Sie Kosten für unabhängige Rechtsberatung, Übersetzungen, Vollmachten und bei Bedarf eine technische Gebäudeprüfung ein.",
  },
  {
    title: "Hypothekenkosten",
    text: "Bei einer Finanzierung können Bewertung, Bankprodukte, Versicherungen und weitere vertragliche Kosten entstehen. Vergleichen Sie nicht nur den Zinssatz, sondern die Gesamtkosten.",
  },
  {
    title: "Renovierung und Einrichtung",
    text: "Bei älteren Immobilien sollten Renovierung, technische Anlagen, Klimatisierung, Pool, Garten, Möbel und mögliche energetische Verbesserungen realistisch kalkuliert werden.",
  },
];
const runningCosts = [
  "Lokale Immobiliensteuer und kommunale Gebühren",
  "Eigentümergemeinschaft und mögliche Sonderumlagen",
  "Gebäude-, Hausrat- und Haftpflichtversicherung",
  "Strom, Wasser, Internet und gegebenenfalls Gas",
  "Pool-, Garten- und Gebäudeunterhalt",
  "Sicherheitsdienst, Alarmanlage oder Hausverwaltung",
  "Regelmäßige Instandhaltung und Reparaturen",
  "Steuerliche Verpflichtungen für Residenten oder Nichtresidenten",
];
const locations = [
  {
    title: "Moraira",
    text: "Moraira ist beliebt wegen seiner kompakten Ortsstruktur, internationalen Atmosphäre, Strände und Villengebiete. Prüfen Sie besonders die Entfernung zum Zentrum, Hanglage und Zufahrt.",
  },
  {
    title: "Jávea",
    text: "Jávea bietet Altstadt, Hafen, Sandstrand, Buchten und viele unterschiedliche Wohngebiete. Die Fahrzeiten innerhalb der Gemeinde können deutlich variieren.",
  },
  {
    title: "Altea",
    text: "Altea ist bekannt für Altstadt, Kultur, Meerblick und unterschiedliche Wohnlagen. Bei Häusern in Hanglage sind Zufahrt, Sonne und tägliche Wege besonders wichtig.",
  },
  {
    title: "Benissa",
    text: "Benissa verbindet historisches Zentrum, ländliche Gebiete und Küstenurbanisationen. Lage und Entfernungen unterscheiden sich innerhalb der Gemeinde stark.",
  },
  {
    title: "Calpe",
    text: "Calpe bietet eine große Auswahl an Apartments, Neubauten und Villen sowie eine umfangreiche Infrastruktur. Prüfen Sie Saisonbetrieb, Verkehr und Gemeinschaftskosten.",
  },
  {
    title: "Dénia",
    text: "Dénia ist eine größere Stadt mit Hafen, Gastronomie, Stränden und Ganzjahresangebot. Montgó, Las Rotas und Las Marinas bieten sehr unterschiedliche Lebensstile.",
  },
];
const commonMistakes = [
  {
    title: "Nur nach der Immobilie entscheiden",
    text: "Eine schöne Immobilie kann unpraktisch sein, wenn Einkauf, Gesundheitsversorgung, Schule, Strand oder soziale Kontakte nur schwer erreichbar sind.",
  },
  {
    title: "Zu früh reservieren",
    text: "Zeitdruck und Angst, eine Immobilie zu verlieren, führen manchmal zu Zahlungen, bevor Dokumente und Rückzahlungsbedingungen geprüft wurden.",
  },
  {
    title: "Nebenkosten unterschätzen",
    text: "Käufer konzentrieren sich häufig auf den Kaufpreis und vergessen Steuern, Renovierung, Möblierung, Unterhalt und mögliche Gemeinschaftskosten.",
  },
  {
    title: "Ohne unabhängige Prüfung kaufen",
    text: "Makler, Verkäufer, Bank, Notar und Käufer haben unterschiedliche Rollen. Der Käufer sollte eine Person beauftragen, die ausschließlich seine Interessen vertritt.",
  },
  {
    title: "Mit sicheren Mieteinnahmen rechnen",
    text: "Ferienvermietung hängt von Vorschriften, Registrierung, Gemeinde, Gemeinschaftsregeln, Lage, Saison und tatsächlicher Nachfrage ab.",
  },
  {
    title: "Offizielle Flächen nicht vergleichen",
    text: "Die Fläche in einem Immobilieninserat kann von Kataster, Grundbuch oder Genehmigungsunterlagen abweichen. Diese Unterschiede können rechtlich und finanziell relevant sein.",
  },
];
const faqItems = [
  {
    question: "Kann ich als Deutscher eine Immobilie in Spanien kaufen?",
    answer:
      "Ja. Deutsche und andere internationale Käufer können grundsätzlich Immobilien in Spanien erwerben. Für steuerliche und administrative Schritte wird normalerweise eine NIE-Nummer benötigt.",
  },
  {
    question: "Was ist eine NIE-Nummer?",
    answer:
      "Die NIE ist eine persönliche Identifikationsnummer für Ausländer in Spanien. Sie wird unter anderem für steuerliche, notarielle, bankbezogene und administrative Vorgänge verwendet.",
  },
  {
    question: "Wie hoch sind die Kaufnebenkosten in Spanien?",
    answer:
      "Die Gesamtkosten hängen von Region, Objektart, Kaufpreis, Finanzierung und persönlichen Umständen ab. Bestandsimmobilien und Neubauten werden unterschiedlich besteuert.",
  },
  {
    question: "Was ist der Unterschied zwischen Neubau und Bestand?",
    answer:
      "Bei einem Neubau kaufen Sie normalerweise direkt vom Projektentwickler. Es gelten andere Steuer- und Vertragsregelungen als bei einer bestehenden Immobilie.",
  },
  {
    question: "Brauche ich einen unabhängigen Anwalt?",
    answer:
      "Eine unabhängige rechtliche Begleitung ist sehr empfehlenswert. Der Anwalt kann Eigentum, Belastungen, Genehmigungen, Verträge und mögliche Schulden prüfen.",
  },
  {
    question: "Welche Aufgabe hat der spanische Notar?",
    answer:
      "Der Notar beurkundet den Kauf, identifiziert die Beteiligten und dokumentiert Zahlungen. Er ersetzt jedoch nicht automatisch eine umfassende Prüfung ausschließlich im Interesse des Käufers.",
  },
  {
    question: "Was ist eine Nota Simple?",
    answer:
      "Eine Nota Simple ist ein Grundbuchauszug mit grundlegenden Informationen zur Immobilie, zum eingetragenen Eigentümer und zu registrierten Belastungen.",
  },
  {
    question: "Kann ich als Nichtresident eine Hypothek erhalten?",
    answer:
      "Spanische Banken finanzieren auch Nichtresidenten, prüfen aber Einkommen, Eigenkapital, Alter, bestehende Schulden und Objektwert.",
  },
  {
    question: "Kann ich die Immobilie als Ferienhaus vermieten?",
    answer:
      "Das hängt von regionalen und kommunalen Vorschriften, der Registrierung, der Immobilie und den Regeln einer möglichen Eigentümergemeinschaft ab.",
  },
  {
    question: "Welche Unterlagen sollte ich vor dem Kauf sehen?",
    answer:
      "Dazu können Grundbuchauszug, Katasterdaten, Eigentumsurkunde, Steuerbelege, Gemeinschaftsbescheinigung, Protokolle, Energieausweis und Bauunterlagen gehören.",
  },
];
const relatedGuides = [
  {
    href: "/de/guides/fehler-immobilienkauf-spanien",
    label: "Häufige Fehler",
    title: "Fehler beim Immobilienkauf in Spanien vermeiden",
    text: "Welche rechtlichen, finanziellen und praktischen Fehler internationale Käufer häufig machen.",
  },
  {
    href: "/de/guides/eigentuemergemeinschaft-spanien",
    label: "Eigentümergemeinschaft",
    title: "Eigentümergemeinschaften in Spanien verstehen",
    text: "Gemeinschaftskosten, Protokolle, Sonderumlagen und Vermietungsregeln vor dem Kauf prüfen.",
  },
  {
    href: "/de/guides/idealista-spanien-probleme",
    label: "Immobilienportale",
    title: "Idealista Spanien: Probleme und veraltete Anzeigen",
    text: "Warum Online-Inserate nicht immer aktuell oder vollständig sind und wie Käufer sie besser kontrollieren.",
  },
];
export default function ImmobilienkaufSpanienPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      {" "}
      <article>
        {" "}
        {/* HERO */}{" "}
        <header className="relative flex min-h-[76vh] items-center overflow-hidden px-8 py-32">
          {" "}
          <img
            src="/images/legal.png"
            alt="Immobilie in Spanien kaufen und rechtlich prüfen"
            className="absolute inset-0 h-full w-full object-cover"
          />{" "}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20"></div>{" "}
          <div className="relative z-10 mx-auto w-full max-w-6xl text-white">
            {" "}
            <nav
              aria-label="Brotkrümelnavigation"
              className="mb-9 flex flex-wrap items-center gap-2 text-sm text-white/70"
            >
              {" "}
              <a href="/de" className="transition hover:text-white">
                {" "}
                Startseite{" "}
              </a>{" "}
              <span>/</span>{" "}
              <a href="/de/guides" className="transition hover:text-white">
                {" "}
                Ratgeber{" "}
              </a>{" "}
              <span>/</span> <span>Immobilie in Spanien kaufen</span>{" "}
            </nav>{" "}
            <p className="text-sm uppercase tracking-[0.35em] text-[#d7b47a]">
              {" "}
              Deutscher Immobilienratgeber Spanien{" "}
            </p>{" "}
            <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
              {" "}
              Immobilie in Spanien kaufen: Ablauf, Kosten und rechtliche
              Prüfung.{" "}
            </h1>{" "}
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              {" "}
              Ein ausführlicher Leitfaden für deutsche und internationale
              Käufer, die ein Haus oder eine Wohnung an der Costa Blanca Nord
              sicher und gut vorbereitet kaufen möchten.{" "}
            </p>{" "}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/65">
              {" "}
              <span>Nordic Move Spain</span> <span>·</span>{" "}
              <span>Ausführlicher Käufer-Ratgeber</span>{" "}
            </div>{" "}
          </div>{" "}
        </header>{" "}
        {/* KURZE ANTWORT */}{" "}
        <section className="px-8 py-24">
          {" "}
          <div className="mx-auto max-w-5xl">
            {" "}
            <div className="rounded-[38px] border border-[#c8a063]/25 bg-white p-10 shadow-sm md:p-14">
              {" "}
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                {" "}
                Kurz erklärt{" "}
              </p>{" "}
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                {" "}
                Kann man als Deutscher eine Immobilie in Spanien kaufen?{" "}
              </h2>{" "}
              <p className="mt-7 text-xl leading-relaxed text-stone-700">
                {" "}
                Ja. Deutsche und andere internationale Käufer können
                grundsätzlich ein Haus oder eine Wohnung in Spanien erwerben.
                Entscheidend ist neben der passenden Immobilie eine sorgfältige
                finanzielle, rechtliche, technische und regionale
                Vorbereitung.{" "}
              </p>{" "}
              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                {" "}
                Vor einer verbindlichen Reservierung sollten Budget,
                Kaufnebenkosten, Finanzierung, NIE-Nummer, Grundbuch,
                Genehmigungen, mögliche Schulden und der konkrete Standort
                geklärt werden.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* FAKTEN */}{" "}
        <section className="px-8 pb-28">
          {" "}
          <div className="mx-auto max-w-7xl">
            {" "}
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              {" "}
              Immobilienkauf in Spanien{" "}
            </p>{" "}
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              {" "}
              Die wichtigsten Punkte auf einen Blick.{" "}
            </h2>{" "}
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {" "}
              {quickFacts.map((fact) => (
                <article
                  key={fact.title}
                  className="rounded-[32px] bg-white p-9 shadow-sm"
                >
                  {" "}
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {" "}
                    {fact.title}{" "}
                  </h3>{" "}
                  <p className="mt-5 leading-relaxed text-stone-600">
                    {" "}
                    {fact.text}{" "}
                  </p>{" "}
                </article>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* PROZESS */}{" "}
        <section className="bg-white/45 px-8 py-28">
          {" "}
          <div className="mx-auto max-w-7xl">
            {" "}
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              {" "}
              Schritt für Schritt{" "}
            </p>{" "}
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              {" "}
              So läuft der Immobilienkauf in Spanien normalerweise ab.{" "}
            </h2>{" "}
            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-stone-600">
              {" "}
              Der genaue Ablauf kann je nach Immobilie, Verkäufer, Finanzierung
              und Vertragsgestaltung abweichen. Die folgenden Schritte geben
              eine praktische Orientierung.{" "}
            </p>{" "}
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {" "}
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[32px] bg-white p-9 shadow-sm"
                >
                  {" "}
                  <p className="text-sm tracking-[0.3em] text-[#c8a063]">
                    {" "}
                    {step.number}{" "}
                  </p>{" "}
                  <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {" "}
                    {step.title}{" "}
                  </h3>{" "}
                  <p className="mt-5 leading-relaxed text-stone-600">
                    {" "}
                    {step.text}{" "}
                  </p>{" "}
                </article>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* RECHTLICHE PRÜFUNG */}{" "}
        <section className="px-8 py-28">
          {" "}
          <div className="mx-auto max-w-7xl">
            {" "}
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {" "}
              <div>
                {" "}
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  {" "}
                  Rechtlich sicher kaufen{" "}
                </p>{" "}
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  {" "}
                  Was vor einer Unterschrift geprüft werden sollte.{" "}
                </h2>{" "}
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  {" "}
                  Eine ansprechende Anzeige, eine erfolgreiche Besichtigung und
                  ein Notartermin ersetzen keine vollständige Prüfung der
                  Immobilie.{" "}
                </p>{" "}
                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  {" "}
                  Beauftragen Sie eine unabhängige Fachperson, die
                  ausschließlich Ihre Interessen vertritt und Dokumente,
                  Belastungen, Genehmigungen und Verträge verständlich
                  erklärt.{" "}
                </p>{" "}
              </div>{" "}
              <img
                src="/images/aftercare.png"
                alt="Rechtliche Prüfung beim Immobilienkauf in Spanien"
                className="h-[580px] w-full rounded-[36px] object-cover shadow-xl"
              />{" "}
            </div>{" "}
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {" "}
              {legalChecks.map((check) => (
                <article
                  key={check.title}
                  className="rounded-[30px] bg-white p-8 shadow-sm"
                >
                  {" "}
                  <h3 className="font-serif text-2xl leading-tight text-[#1e2a3a]">
                    {" "}
                    {check.title}{" "}
                  </h3>{" "}
                  <p className="mt-5 leading-relaxed text-stone-600">
                    {" "}
                    {check.text}{" "}
                  </p>{" "}
                </article>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* KOSTEN */}{" "}
        <section className="bg-[#e9dfd2] px-8 py-28">
          {" "}
          <div className="mx-auto max-w-7xl">
            {" "}
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              {" "}
              Kaufnebenkosten in Spanien{" "}
            </p>{" "}
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              {" "}
              Welche zusätzlichen Kosten beim Immobilienkauf entstehen.{" "}
            </h2>{" "}
            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-stone-700">
              {" "}
              Steuern und weitere Kosten hängen von Objektart, Region,
              Kaufpreis, Finanzierung und persönlicher Situation ab.{" "}
            </p>{" "}
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {" "}
              {costItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[30px] bg-white p-9 shadow-sm"
                >
                  {" "}
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {" "}
                    {item.title}{" "}
                  </h3>{" "}
                  <p className="mt-5 leading-relaxed text-stone-600">
                    {" "}
                    {item.text}{" "}
                  </p>{" "}
                </article>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* LAUFENDE KOSTEN */}{" "}
        <section className="px-8 py-28">
          {" "}
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            {" "}
            <div>
              {" "}
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                {" "}
                Nach dem Kauf{" "}
              </p>{" "}
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                {" "}
                Laufende Kosten einer Immobilie in Spanien.{" "}
              </h2>{" "}
              <p className="mt-7 text-lg leading-relaxed text-stone-600">
                {" "}
                Ein niedriger Kaufpreis bedeutet nicht automatisch niedrige
                Gesamtkosten. Kalkulieren Sie den jährlichen Unterhalt bereits
                vor Ihrer Kaufentscheidung.{" "}
              </p>{" "}
            </div>{" "}
            <div className="rounded-[36px] bg-[#1e2a3a] p-10 text-white md:p-12">
              {" "}
              <ul className="space-y-5">
                {" "}
                {runningCosts.map((cost) => (
                  <li
                    key={cost}
                    className="flex gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                  >
                    {" "}
                    <span className="text-xl text-[#d7b47a]">✓</span>{" "}
                    <span className="leading-relaxed text-white/85">
                      {" "}
                      {cost}{" "}
                    </span>{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* REGIONEN */}{" "}
        <section className="bg-white/45 px-8 py-28">
          {" "}
          <div className="mx-auto max-w-7xl">
            {" "}
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              {" "}
              Costa Blanca Nord{" "}
            </p>{" "}
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              {" "}
              Wo sollte man an der Costa Blanca Nord kaufen?{" "}
            </h2>{" "}
            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-stone-600">
              {" "}
              Der beste Ort hängt von Ihrem Alltag ab. Auch innerhalb einer
              Gemeinde können Küste, Zentrum, Landgebiet und Urbanisation völlig
              unterschiedliche Erfahrungen bieten.{" "}
            </p>{" "}
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {" "}
              {locations.map((location) => (
                <article
                  key={location.title}
                  className="rounded-[32px] bg-white p-9 shadow-sm"
                >
                  {" "}
                  <h3 className="font-serif text-4xl text-[#1e2a3a]">
                    {" "}
                    {location.title}{" "}
                  </h3>{" "}
                  <p className="mt-5 leading-relaxed text-stone-600">
                    {" "}
                    {location.text}{" "}
                  </p>{" "}
                </article>
              ))}{" "}
            </div>{" "}
            <a
              href="/de/regions"
              className="mt-12 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white"
            >
              {" "}
              Regionen ausführlich vergleichen{" "}
            </a>{" "}
          </div>{" "}
        </section>{" "}
        {/* FINANZIERUNG */}{" "}
        <section className="px-8 py-28">
          {" "}
          <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-16">
            {" "}
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              {" "}
              Hypothek in Spanien{" "}
            </p>{" "}
            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              {" "}
              Finanzierung vor der Reservierung realistisch prüfen.{" "}
            </h2>{" "}
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              {" "}
              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                {" "}
                <p>
                  {" "}
                  Spanische Banken prüfen unter anderem Einkommen, Alter,
                  Eigenkapital, bestehende Verpflichtungen, Wohnsitzstatus und
                  den Wert der Immobilie.{" "}
                </p>{" "}
                <p>
                  {" "}
                  Der Kaufpreis und der von der Bank ermittelte Bewertungswert
                  können voneinander abweichen.{" "}
                </p>{" "}
              </div>{" "}
              <div className="space-y-6 text-lg leading-relaxed text-stone-600">
                {" "}
                <p>
                  {" "}
                  Vergleichen Sie Gesamtkosten, Zinsbindung, Laufzeit,
                  Versicherungen und mögliche Gebühren bei vorzeitiger
                  Rückzahlung.{" "}
                </p>{" "}
                <p>
                  {" "}
                  Zahlen Sie keine nicht erstattungsfähige Reservierung in der
                  Annahme, dass eine Hypothek garantiert genehmigt wird.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* VERMIETUNG */}{" "}
        <section className="px-8 pb-28">
          {" "}
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#e9dfd2] p-10 md:p-16">
            {" "}
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              {" "}
              Ferienvermietung{" "}
            </p>{" "}
            <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
              {" "}
              Kaufen Sie nicht auf Grundlage ungeprüfter Mieteinnahmen.{" "}
            </h2>{" "}
            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
              {" "}
              Ferienvermietung an der Costa Blanca unterliegt regionalen,
              kommunalen und gemeinschaftlichen Regeln.{" "}
            </p>{" "}
            <p className="mt-6 max-w-5xl text-lg leading-relaxed text-stone-700">
              {" "}
              Prüfen Sie Registrierung, kommunale Vereinbarkeit,
              Gemeinschaftsregeln, Versicherungen und steuerliche Pflichten vor
              dem Kauf.{" "}
            </p>{" "}
          </div>{" "}
        </section>{" "}
        {/* FEHLER */}{" "}
        <section className="px-8 pb-28">
          {" "}
          <div className="mx-auto max-w-7xl">
            {" "}
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              {" "}
              Häufige Käuferfehler{" "}
            </p>{" "}
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              {" "}
              Diese Fehler lassen sich mit guter Vorbereitung vermeiden.{" "}
            </h2>{" "}
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {" "}
              {commonMistakes.map((mistake) => (
                <article
                  key={mistake.title}
                  className="rounded-[32px] bg-white p-9 shadow-sm"
                >
                  {" "}
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {" "}
                    {mistake.title}{" "}
                  </h3>{" "}
                  <p className="mt-5 leading-relaxed text-stone-600">
                    {" "}
                    {mistake.text}{" "}
                  </p>{" "}
                </article>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* FAQ */}{" "}
        <section className="px-8 py-28">
          {" "}
          <div className="mx-auto max-w-5xl">
            {" "}
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              {" "}
              Häufig gestellte Fragen{" "}
            </p>{" "}
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              {" "}
              Fragen zum Kauf einer Immobilie in Spanien.{" "}
            </h2>{" "}
            <div className="mt-12 space-y-5">
              {" "}
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[28px] bg-white p-7 shadow-sm"
                >
                  {" "}
                  <summary className="cursor-pointer list-none font-serif text-2xl leading-tight text-[#1e2a3a]">
                    {" "}
                    <span className="flex items-center justify-between gap-6">
                      {" "}
                      {item.question}{" "}
                      <span className="text-[#c8a063]">+</span>{" "}
                    </span>{" "}
                  </summary>{" "}
                  <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
                    {" "}
                    {item.answer}{" "}
                  </p>{" "}
                </details>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* VERWANTE RATGEBER */}{" "}
        <section className="px-8 pb-28">
          {" "}
          <div className="mx-auto max-w-7xl">
            {" "}
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              {" "}
              <div>
                {" "}
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  {" "}
                  Weitere Informationen{" "}
                </p>{" "}
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  {" "}
                  Weitere deutsche Immobilienratgeber.{" "}
                </h2>{" "}
              </div>{" "}
              <a
                href="/de/guides"
                className="w-fit rounded-full border border-[#1e2a3a] px-7 py-3 text-sm font-medium text-[#1e2a3a]"
              >
                {" "}
                Alle Ratgeber ansehen{" "}
              </a>{" "}
            </div>{" "}
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {" "}
              {relatedGuides.map((guide) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {" "}
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                    {" "}
                    {guide.label}{" "}
                  </p>{" "}
                  <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {" "}
                    {guide.title}{" "}
                  </h3>{" "}
                  <p className="mt-5 leading-relaxed text-stone-600">
                    {" "}
                    {guide.text}{" "}
                  </p>{" "}
                  <span className="mt-8 inline-block text-sm uppercase tracking-[0.2em] text-[#1e2a3a]">
                    {" "}
                    Ratgeber lesen →{" "}
                  </span>{" "}
                </a>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* CTA */}{" "}
        <section className="px-8 pb-32">
          {" "}
          <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-12 text-center text-white md:p-16">
            {" "}
            <p className="text-sm uppercase tracking-[0.35em] text-[#d7b47a]">
              {" "}
              Persönliche Orientierung{" "}
            </p>{" "}
            <h2 className="mx-auto mt-5 max-w-4xl font-serif text-5xl leading-tight">
              {" "}
              Planen Sie den Kauf einer Immobilie an der Costa Blanca Nord?{" "}
            </h2>{" "}
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
              {" "}
              Nordic Move Spain hilft Ihnen, Regionen zu vergleichen, Ihre Suche
              vorzubereiten und wichtige rechtliche, finanzielle und praktische
              Fragen frühzeitig zu erkennen.{" "}
            </p>{" "}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {" "}
              <a
                href="/de/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white"
              >
                {" "}
                Persönliches Gespräch vereinbaren{" "}
              </a>{" "}
              <a
                href="/de/services/area-match"
                className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white"
              >
                {" "}
                Persönliches Area Match{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* HINWEIS */}{" "}
        <section className="px-8 pb-20">
          {" "}
          <div className="mx-auto max-w-5xl">
            {" "}
            <p className="text-sm leading-relaxed text-stone-500">
              {" "}
              Dieser Ratgeber enthält allgemeine Informationen und ersetzt keine
              individuelle rechtliche, steuerliche, technische oder finanzielle
              Beratung. Vorschriften, Steuern und Verfahren können sich ändern
              und sollten vor jeder Kaufentscheidung aktuell geprüft
              werden.{" "}
            </p>{" "}
          </div>{" "}
        </section>{" "}
      </article>{" "}
    </main>
  );
}
