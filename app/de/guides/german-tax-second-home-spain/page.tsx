export const metadata = {
  title:
    "Ferienhaus in Spanien: Steuern in Deutschland & Spanien | Nordic Move Spain",
  description:
    "SEO-Ratgeber für deutsche Käufer einer Zweitimmobilie in Spanien: Modelo 210, Eigennutzung, Vermietung, Verkauf, Doppelbesteuerungsabkommen, steuerlicher Wohnsitz und sichere Kaufvorbereitung.",
  openGraph: {
    title:
      "Deutsche Steuerregeln für eine Zweitimmobilie in Spanien | Nordic Move Spain",
    description:
      "Was deutsche Käufer vor dem Kauf eines Ferienhauses oder Zweitwohnsitzes in Spanien über spanische Steuern, deutsche Steuerpflicht, Modelo 210 und das Doppelbesteuerungsabkommen wissen sollten.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ferienhaus Spanien Steuern Deutschland: klar erklärt für Käufer",
    description:
      "Ein strukturierter Überblick für deutsche Käufer: Eigennutzung, Vermietung, Verkauf, Modelo 210, Doppelbesteuerungsabkommen und sichere Kaufprüfung vor dem Notartermin.",
  },
};

export default function GermanTaxSecondHomeSpainGuide() {
  const keyPoints = [
    {
      title: "Spanien bleibt steuerlich wichtig",
      text:
        "Eine Immobilie in Spanien kann spanische Steuerpflichten auslösen, auch wenn Sie weiterhin in Deutschland wohnen und dort steuerlich ansässig bleiben.",
    },
    {
      title: "Modelo 210 nicht übersehen",
      text:
        "Nichtresidenten nutzen in Spanien in vielen Fällen das Modelo 210, zum Beispiel bei Eigennutzung, Vermietung oder Verkauf einer Immobilie.",
    },
    {
      title: "Deutschland sauber einordnen",
      text:
        "Wer in Deutschland unbeschränkt steuerpflichtig ist, sollte klären lassen, wie ausländische Immobilien, Mieteinnahmen und ein späterer Verkauf in der deutschen Steuererklärung zu behandeln sind.",
    },
    {
      title: "Kaufprüfung vor Steuerplanung",
      text:
        "Steuerliche Planung hilft wenig, wenn Baugenehmigungen, Wohnflächen, Katasterdaten, Vermietbarkeit oder Eigentumsverhältnisse nicht sauber geprüft wurden.",
    },
  ];

  const searchTerms = [
    "Ferienhaus Spanien Steuern Deutschland",
    "Zweitwohnsitz Spanien Steuer Deutschland",
    "Immobilie Spanien Modelo 210",
    "Spanien Ferienwohnung vermieten Steuer",
    "Doppelbesteuerungsabkommen Deutschland Spanien Immobilie",
    "Nichtresidentensteuer Spanien Immobilie",
  ];

  const checklist = [
    "Sind Sie steuerlich in Deutschland, Spanien oder in beiden Ländern relevant?",
    "Wird die Immobilie nur selbst genutzt, teilweise vermietet oder touristisch vermietet?",
    "Liegt ein aktueller Katasterwert vor und stimmen Kataster, Grundbuch und Realität überein?",
    "Gibt es Altlasten, offene Grundsteuern, Community-Schulden oder nicht genehmigte Umbauten?",
    "Sind Vermietung, touristische Lizenz, Gemeinschaftsregeln und lokale Vorschriften vor dem Kauf geklärt?",
    "Ist klar, wer später Modelo 210, deutsche Steuererklärung und laufende Fristen überwacht?",
  ];

  const faq = [
    {
      question:
        "Muss ich als deutscher Eigentümer einer spanischen Ferienimmobilie in Spanien Steuern zahlen?",
      answer:
        "In vielen Fällen ja. Auch bei reiner Eigennutzung kann für Nichtresidenten in Spanien eine Erklärung über fiktive Immobilienerträge relevant sein. Bei Vermietung oder Verkauf kommen weitere spanische Steuerpflichten hinzu.",
    },
    {
      question: "Was ist das Modelo 210?",
      answer:
        "Das Modelo 210 ist die spanische Erklärung für Nichtresidenten ohne Betriebsstätte. Es wird unter anderem für bestimmte Immobilienerträge, fiktive Erträge aus städtischen Immobilien und Kapitalgewinne genutzt.",
    },
    {
      question:
        "Muss ich Mieteinnahmen aus Spanien auch in Deutschland angeben?",
      answer:
        "Deutsche Steuerresidenten sollten spanische Mieteinnahmen immer mit einem deutschen Steuerberater einordnen. Entscheidend sind Wohnsitz, Nutzungsart, das Doppelbesteuerungsabkommen und die konkrete deutsche Steuererklärung.",
    },
    {
      question:
        "Reicht ein Steuerberater aus, oder brauche ich auch eine Kaufprüfung?",
      answer:
        "Beides hat eine andere Aufgabe. Ein Steuerberater prüft die steuerliche Behandlung. Eine Kaufprüfung kontrolliert vor dem Kauf, ob die Immobilie rechtlich, technisch und praktisch sicher genug ist.",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/15 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/de" className="text-sm font-medium tracking-[0.25em] text-white uppercase">
            Nordic Move Spain
          </a>

          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/de" className="hover:text-white/70 transition">
              Startseite
            </a>
            <a href="/de/regions" className="hover:text-white/70 transition">
              Regionen
            </a>
            <a href="/de/services" className="hover:text-white/70 transition">
              Leistungen
            </a>
            <a href="/de/guides" className="border-b border-[#c8a063] pb-1">
              Ratgeber
            </a>
            <a href="/de/contact" className="hover:text-white/70 transition">
              Kontakt
            </a>
          </div>

          <a
            href="/de/contact"
            className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Beratung anfragen
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[760px] items-center overflow-hidden">
        <img
          src="/images/legal.png"
          alt="Deutsche Steuerregeln für eine Zweitimmobilie in Spanien"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Steuern · Spanien · Deutschland
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[0.98] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-7xl">
              Deutsche Steuerregeln für eine Zweitimmobilie in Spanien.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
              Wer als deutscher Käufer ein Ferienhaus, eine Wohnung oder eine
              Villa an der Costa Blanca kauft, sollte nicht nur den Kaufpreis,
              sondern auch die laufenden Steuerpflichten in Spanien und die
              Einordnung in Deutschland verstehen.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
              Dieser Ratgeber erklärt die wichtigsten Suchfragen rund um
              Ferienhaus Spanien Steuern Deutschland, Zweitwohnsitz Spanien
              Steuer, Modelo 210, Eigennutzung, Vermietung und Verkauf — klar,
              praktisch und mit Fokus auf sichere Kaufentscheidungen.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/de/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Kostenlosen Area Match Report anfragen
              </a>
              <a
                href="/de/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Persönliche Kaufbegleitung besprechen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Erst verstehen, dann kaufen
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Eine schöne Immobilie ist noch keine sichere Entscheidung.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-stone-600">
              <p>
                Viele deutsche Käufer suchen nach einer einfachen Antwort:
                Muss ich mein Ferienhaus in Spanien in Deutschland versteuern?
                Die ehrliche Antwort lautet: Es kommt auf Ihren steuerlichen
                Wohnsitz, die Nutzung der Immobilie, mögliche Vermietung, den
                späteren Verkauf und die konkrete Anwendung des
                Doppelbesteuerungsabkommens zwischen Deutschland und Spanien an.
              </p>

              <p>
                Wichtig ist: Der Immobilienkauf selbst ist nur der Anfang. Nach
                dem Notartermin folgen laufende Pflichten. Dazu können spanische
                Nichtresidentensteuer, Erklärungen über Modelo 210, lokale
                Grundsteuer, mögliche Vermietungsbesteuerung, deutsche
                Erklärungspflichten und eine saubere Dokumentation aller Kosten
                gehören.
              </p>

              <p>
                Genau deshalb sollten Steuern nicht erst nach dem Kauf geklärt
                werden. Wer früh weiß, ob er selbst nutzen, saisonal vermieten,
                langfristig halten oder später wieder verkaufen möchte, kann
                Risiken besser einordnen und die passende Immobilie deutlich
                sicherer auswählen.
              </p>

              <p>
                Nordic Move Spain ersetzt keinen Steuerberater. Wir helfen
                Käufern jedoch dabei, die richtigen Fragen rechtzeitig zu
                stellen, kritische Kaufunterlagen zu sammeln und die Immobilie
                vor dem Kauf so zu prüfen, dass Steuerberater, Anwälte und
                technische Spezialisten auf einer geordneten Grundlage arbeiten
                können.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY POINTS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {keyPoints.map((point) => (
              <div key={point.title} className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {point.title}
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="px-8 pb-32">
        <article className="mx-auto max-w-5xl rounded-[40px] bg-white p-10 shadow-sm md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Steuerlicher Überblick
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Ferienhaus in Spanien: Was deutsche Käufer steuerlich wissen sollten.
          </h2>

          <div className="mt-10 space-y-10 text-lg leading-relaxed text-stone-600">
            <section>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                1. Der Ausgangspunkt: Wo liegt die Immobilie, wo sind Sie steuerlich ansässig?
              </h3>
              <p className="mt-5">
                Bei einer Zweitimmobilie in Spanien treffen zwei Ebenen
                aufeinander. Spanien ist das Land, in dem die Immobilie liegt.
                Deutschland kann relevant bleiben, wenn Sie dort wohnen,
                arbeiten, Ihren Lebensmittelpunkt haben oder weiterhin
                unbeschränkt steuerpflichtig sind. Das bedeutet nicht
                automatisch doppelte Besteuerung, aber es bedeutet doppelte
                Aufmerksamkeit.
              </p>
              <p className="mt-5">
                Das Doppelbesteuerungsabkommen zwischen Deutschland und Spanien
                regelt, welchem Staat bei bestimmten Einkünften ein
                Besteuerungsrecht zusteht. Bei unbeweglichem Vermögen ist der
                Belegenheitsstaat, also Spanien, besonders wichtig. Für deutsche
                Käufer heißt das: Eine spanische Immobilie gehört steuerlich nie
                nur in die deutsche Schublade und nie nur in die spanische.
              </p>
            </section>

            <section>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                2. Eigennutzung: Auch ohne Vermietung kann Spanien eine Erklärung erwarten
              </h3>
              <p className="mt-5">
                Viele Käufer denken: Wenn ich nicht vermiete, habe ich keine
                Einnahmen und damit auch keine Steuererklärung. In Spanien ist
                das zu kurz gedacht. Nichtresidenten können auch bei
                Eigennutzung mit einer Erklärung über fiktive Immobilienerträge
                konfrontiert sein. In der Praxis spielt hier das Modelo 210 eine
                zentrale Rolle.
              </p>
              <p className="mt-5">
                Besonders wichtig sind Katasterwert, Eigentumsanteile,
                Nutzungszeitraum und die Frage, ob die Immobilie ganzjährig
                verfügbar war oder teilweise vermietet wurde. Diese Angaben
                sollten nicht erst am Jahresende zusammengesucht werden. Sie
                gehören bereits beim Kauf sauber in die Akte.
              </p>
            </section>

            <section>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                3. Vermietung: Ferienvermietung ist steuerlich und praktisch sensibler
              </h3>
              <p className="mt-5">
                Wer seine Immobilie in Spanien vermietet, sollte zwei Themen
                trennen: Dürfen Sie die Immobilie überhaupt vermieten, und wie
                werden die Einnahmen steuerlich behandelt? Steuerliche
                Meldepflichten ersetzen keine Vermietungserlaubnis. Umgekehrt
                macht eine touristische Lizenz die Steuerpflicht nicht
                automatisch erledigt.
              </p>
              <p className="mt-5">
                Bei Vermietung zählen Mietverträge, Plattformabrechnungen,
                Reinigungskosten, Instandhaltung, Verwaltung, Finanzierung und
                die Frage, welche Kosten in welchem Land berücksichtigt werden
                können. Für deutsche Käufer ist besonders wichtig, die spanische
                und deutsche Behandlung nicht zu vermischen, sondern sauber zu
                dokumentieren und mit einem spezialisierten Steuerberater
                abzustimmen.
              </p>
            </section>

            <section>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                4. Verkauf: Der spätere Exit beginnt schon beim Kauf
              </h3>
              <p className="mt-5">
                Beim Verkauf einer spanischen Immobilie können spanische Steuern
                auf den Veräußerungsgewinn entstehen. Für deutsche Eigentümer
                kann zusätzlich die deutsche steuerliche Einordnung relevant
                werden. Deshalb ist es entscheidend, bereits beim Kauf alle
                Anschaffungskosten, Steuern, Notar- und Registerkosten,
                Renovierungen und rechtlich nachweisbaren Investitionen
                ordentlich zu speichern.
              </p>
              <p className="mt-5">
                Ein häufiger Fehler ist, Rechnungen, technische Unterlagen,
                Genehmigungen oder Zahlungsnachweise erst Jahre später zu
                suchen. Besser ist ein sicheres Dokumentensystem ab dem ersten
                Besichtigungstag. So wird nicht nur der Kauf transparenter,
                sondern auch ein späterer Verkauf besser vorbereitet.
              </p>
            </section>

            <section>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                5. Warum die Steuerfrage auch eine Sicherheitsfrage ist
              </h3>
              <p className="mt-5">
                Gute Steuerplanung beginnt nicht mit Formularen, sondern mit
                zuverlässigen Daten. Stimmen Wohnfläche, Kataster, Grundbuch,
                tatsächliche Nutzung und baulicher Zustand nicht überein, kann
                das später steuerliche, rechtliche und praktische Folgen haben.
              </p>
              <p className="mt-5">
                Deshalb prüfen wir beim Kauf nicht nur, ob eine Immobilie schön
                präsentiert wird. Über den Purchase Safety Report können
                unabhängige Spezialisten zentrale Risiken untersuchen: Eigentum,
                Schulden, Genehmigungen, Umbauten, Feuchtigkeit, bauliche
                Auffälligkeiten, Gemeinschaftsregeln und Dokumente, die für
                Anwälte und Steuerberater wichtig sind.
              </p>
            </section>
          </div>
        </article>
      </section>

      {/* CHECKLIST */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-12 md:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Kauf- und Steuercheck
              </p>
              <h2 className="mt-6 font-serif text-5xl leading-tight">
                Diese Fragen sollten vor dem Kauf geklärt sein.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-white/75">
                Je früher Sie die steuerliche Nutzung und die tatsächliche
                Kaufqualität der Immobilie zusammen betrachten, desto geringer
                ist das Risiko unangenehmer Überraschungen nach der Übergabe.
              </p>
            </div>

            <div className="bg-white/5 p-12 md:p-16">
              <div className="space-y-5">
                {checklist.map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/15 bg-white/5 p-5">
                    <p className="leading-relaxed text-white/85">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO SEARCH TERMS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Häufige Suchfragen
          </p>
          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Wonach deutsche Käufer vor dem Immobilienkauf in Spanien suchen.
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {searchTerms.map((term) => (
              <span
                key={term}
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#1e2a3a] shadow-sm"
              >
                {term}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-700">
            Diese Begriffe sind nicht nur SEO-relevant. Sie zeigen auch, welche
            Unsicherheiten Käufer tatsächlich haben: Muss ich in Spanien
            erklären? Muss ich in Deutschland etwas angeben? Was passiert bei
            Vermietung? Und wer sorgt dafür, dass die Immobilie selbst sauber
            geprüft ist?
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            FAQ
          </p>
          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Häufige Fragen zu Steuern, Ferienhaus und Zweitwohnsitz in Spanien.
          </h2>

          <div className="mt-10 space-y-5">
            {faq.map((item) => (
              <div key={item.question} className="rounded-[28px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {item.question}
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER + CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Wichtiger Hinweis
          </p>
          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Dieser Ratgeber ersetzt keine individuelle Steuerberatung.
          </h2>
          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
            Die steuerliche Behandlung hängt von Ihrem Wohnsitz, Ihrer
            persönlichen Situation, der Nutzung der Immobilie, der Finanzierung,
            den Eigentumsanteilen und den jeweils geltenden Regeln in Spanien
            und Deutschland ab. Lassen Sie Ihre konkrete Situation immer durch
            einen qualifizierten Steuerberater in Deutschland und, falls nötig,
            durch einen spanischen Steuerberater prüfen.
          </p>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
            Unsere Aufgabe ist es, den Kaufprozess sicherer zu organisieren:
            passende Region, passende Immobilie, geordnete Unterlagen,
            unabhängige Kontrollen und klare Entscheidungsgrundlagen, bevor Sie
            sich finanziell und rechtlich binden.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/de/services/purchase-safety-report"
              className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
            >
              Purchase Safety Report entdecken
            </a>
            <a
              href="/de/contact"
              className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Persönliche Kaufbegleitung planen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
