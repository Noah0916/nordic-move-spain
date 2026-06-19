import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Komplette Kaufakte für eine Immobilie in Spanien | Nordic Move Spain",
  description:
    "Alle rechtlichen, finanziellen, technischen und notariellen Dokumente für Ihren Immobilienkauf in Spanien sicher und übersichtlich in einer digitalen Kaufakte organisieren.",
  alternates: {
    canonical: "/de/services/complete-purchase-file",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ihre komplette Kaufakte für eine Immobilie in Spanien",
    description:
      "Eine geschützte und übersichtliche Kaufakte für Dokumente, Prüfungen, Fristen und endgültig genehmigte Versionen während des gesamten Immobilienkaufs.",
    type: "website",
    locale: "de_DE",
    siteName: "Nordic Move Spain",
  },
};

const fileSections = [
  {
    number: "01",
    title: "Rechtliche Dokumente",
    text:
      "Vertragsentwürfe, Reservierungsvereinbarungen, private Kaufverträge, Vollmachten, Eigentumsinformationen und Unterlagen Ihres unabhängigen Anwalts werden in einer klaren Struktur zusammengeführt.",
  },
  {
    number: "02",
    title: "Hypothek und Finanzierung",
    text:
      "Bankanträge, Finanzierungsangebote, Bewertungsberichte, Kreditbedingungen, Zahlungsnachweise und wichtige Fristen bleiben an einem zentralen Ort verfügbar.",
  },
  {
    number: "03",
    title: "Steuern und Kaufnebenkosten",
    text:
      "Übersichten über Steuern, Notarkosten, Grundbuchkosten und Beratungskosten helfen Ihnen zu verstehen, welche Beträge bereits bezahlt wurden und welche Zahlungen noch ausstehen.",
  },
  {
    number: "04",
    title: "Technische Prüfungen",
    text:
      "Bauzustandsberichte, Inspektionen, Genehmigungen, registrierte Flächen, Umbauten, Informationen zum Swimmingpool und weitere technische Punkte können in die Kaufakte aufgenommen werden.",
  },
  {
    number: "05",
    title: "Versicherungen und Versorgungsverträge",
    text:
      "Dokumente zu Gebäudeversicherung, Haftpflichtschutz, Strom, Wasser, Internet und weiteren Versorgungsleistungen bleiben auch nach der Schlüsselübergabe leicht auffindbar.",
  },
  {
    number: "06",
    title: "Notar und Eigentumsübertragung",
    text:
      "Die endgültige notarielle Kaufurkunde, Zahlungsnachweise, Registrierungsinformationen, Übergabeunterlagen und wichtige Dokumente nach dem Kauf bleiben als Teil Ihrer vollständigen Kaufhistorie erhalten.",
  },
];

const benefits = [
  {
    title: "Ein zentraler Speicherort",
    text:
      "Sie müssen nicht länger in einzelnen E-Mails, WhatsApp-Nachrichten, Downloads und verschiedenen Cloud-Ordnern nach wichtigen Dokumenten suchen.",
  },
  {
    title: "Klare Dokumentversionen",
    text:
      "Entwürfe und endgültig genehmigte Dokumente können deutlich voneinander getrennt werden. So sinkt das Risiko, versehentlich mit einer veralteten Version zu arbeiten.",
  },
  {
    title: "Besserer Überblick über Fristen",
    text:
      "Wichtige Termine wie Zahlungen, rechtliche Prüfungen und der Notartermin können mit den dazugehörigen Dokumenten und Aufgaben verbunden werden.",
  },
  {
    title: "Zugriff entsprechend der jeweiligen Rolle",
    text:
      "Abhängig von der gewählten Einrichtung kann der Zugriff für Käufer, Anwalt, Hypothekenberater, Versicherung oder andere beteiligte Fachpersonen angepasst werden.",
  },
  {
    title: "Mehr Ruhe während des Kaufprozesses",
    text:
      "Eine gut organisierte Kaufakte reduziert unnötigen Stress und macht leichter sichtbar, welche Schritte abgeschlossen sind und was noch Aufmerksamkeit benötigt.",
  },
  {
    title: "Auch nach dem Kauf nützlich",
    text:
      "Die Kaufakte bleibt wertvoll bei Versicherungsfragen, Renovierungen, Steuerangelegenheiten, einem späteren Verkauf und beim Auffinden ursprünglicher Kaufunterlagen.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Ihre Kaufakte wird angelegt",
    text:
      "Zu Beginn Ihrer Kaufbegleitung wird eine persönliche Akte mit einer klaren Grundstruktur für Dokumente, Zuständigkeiten und wichtige Phasen eingerichtet.",
  },
  {
    number: "02",
    title: "Dokumente werden gesammelt",
    text:
      "Relevante Unterlagen von Käufer, Verkäufer, Anwalt, Bank, Notar und weiteren Beteiligten werden in den passenden Bereichen gespeichert.",
  },
  {
    number: "03",
    title: "Versionen werden organisiert",
    text:
      "Entwürfe, überarbeitete Versionen und endgültig genehmigte Dokumente werden logisch benannt und getrennt abgelegt.",
  },
  {
    number: "04",
    title: "Offene Aufgaben werden verfolgt",
    text:
      "Fehlende Dokumente, offene Fragen, Zahlungstermine und näherkommende Fristen bleiben sichtbar, damit wichtige Schritte nicht übersehen werden.",
  },
  {
    number: "05",
    title: "Der Abschluss wird dokumentiert",
    text:
      "Nach dem Notartermin werden die endgültigen Dokumente, Zahlungsbestätigungen und Übergabeinformationen in die Kaufakte aufgenommen.",
  },
  {
    number: "06",
    title: "Die Kaufakte bleibt verfügbar",
    text:
      "Auch nach dem Kauf verfügen Sie weiterhin über eine übersichtliche Sammlung der wichtigen Dokumente zu Ihrer Immobilie in Spanien.",
  },
];

const possibleDocuments = [
  "Reisepass und Identitätsdokumente",
  "NIE-Dokumentation",
  "Reservierungsvereinbarung",
  "Privater Kaufvertrag oder Arras-Vertrag",
  "Nota Simple und Grundbuchinformationen",
  "Katasterinformationen",
  "Bau- und Nutzungsdokumente",
  "Unterlagen der Eigentümergemeinschaft",
  "Technische Inspektionen und Berichte",
  "Bewertungsbericht für die Hypothek",
  "Hypothekenangebot und Bankbedingungen",
  "Übersicht über Kaufkosten und Steuern",
  "Zahlungsbelege und Bankbestätigungen",
  "Vollmachten und rechtliche Korrespondenz",
  "Energieausweis",
  "Versicherungsunterlagen",
  "Notarielle Kaufurkunde",
  "Dokumente zur Eintragung im Grundbuch",
  "Unterlagen zur Umschreibung von Wasser und Strom",
  "Wichtige Kontaktdaten der beteiligten Fachpersonen",
];

const suitableFor = [
  {
    title: "Käufer, die aus der Ferne kaufen",
    text:
      "Für Käufer, die nicht dauerhaft in Spanien sind und Dokumente aus Deutschland, den Niederlanden, Belgien, der Schweiz, Großbritannien oder einem anderen Land verfolgen müssen.",
  },
  {
    title: "Käufer mit Hypothek",
    text:
      "Für Kaufprozesse mit Bankbedingungen, Immobilienbewertungen, Einkommensnachweisen und mehreren wichtigen finanziellen Fristen.",
  },
  {
    title: "Gemeinsame Käufer",
    text:
      "Für Partner oder Familienmitglieder, die gemeinsam kaufen und Zugriff auf dieselben aktuellen Informationen und Unterlagen benötigen.",
  },
  {
    title: "Komplexere Immobilienkäufe",
    text:
      "Für Immobilien mit Umbauten, Gemeinschaftsanlagen, Vermietungsplänen, technischen Fragen oder zusätzlichen rechtlichen Prüfungen.",
  },
];

const faqItems = [
  {
    question: "Ersetzt die komplette Kaufakte einen Anwalt?",
    answer:
      "Nein. Die Kaufakte organisiert Informationen und Dokumente, ersetzt aber keine unabhängige rechtliche, steuerliche, technische oder finanzielle Beratung. Ein spezialisierter Anwalt bleibt für rechtliche Prüfungen und Beratung verantwortlich.",
  },
  {
    question: "Welche Dokumente werden aufgenommen?",
    answer:
      "Der genaue Inhalt hängt von Ihrem Kauf ab. Üblicherweise gehören rechtliche Dokumente, Eigentumsinformationen, Hypothekenunterlagen, Steuerübersichten, technische Berichte, Versicherungen, Zahlungsbestätigungen und endgültige notarielle Dokumente dazu.",
  },
  {
    question: "Kann ich selbst Dokumente hinzufügen?",
    answer:
      "Die genauen Möglichkeiten hängen von der verwendeten technischen Plattform ab. Das Ziel ist, relevante Dokumente einfach im passenden Bereich der Kaufakte speichern zu können.",
  },
  {
    question: "Wer kann meine Dokumente sehen?",
    answer:
      "Zugriff sollte nur Personen gewährt werden, die eine relevante Aufgabe in Ihrem Kaufprozess haben. Abhängig vom verwendeten System können Berechtigungen pro Person oder beruflicher Rolle eingestellt werden.",
  },
  {
    question: "Werden alte Dokumentversionen gelöscht?",
    answer:
      "Ältere Versionen können wichtig sein, um Änderungen nachvollziehen zu können. Es ist daher sinnvoll, Entwürfe aufzubewahren und sie klar von der endgültig genehmigten Version zu unterscheiden.",
  },
  {
    question: "Ist die Kaufakte nach dem Kauf noch nützlich?",
    answer:
      "Ja. Ursprüngliche Dokumente können bei Versicherungsfragen, Renovierungen, Steuerangelegenheiten, administrativen Änderungen und einem späteren Verkauf wichtig sein.",
  },
  {
    question: "Ist die Kaufakte vollständig sicher?",
    answer:
      "Die Sicherheit hängt von der verwendeten Plattform, den Zugriffsrechten, den Kontoeinstellungen und dem Verhalten der Nutzer ab. Starke Passwörter, eingeschränkte Zugänge und Mehrfaktor-Authentifizierung sind wichtige Bestandteile einer sicheren Einrichtung.",
  },
];

export default function KompletteKaufaktePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden px-8 py-32">
        <img
          src="/images/legal.png"
          alt="Komplette digitale Kaufakte für eine Immobilie in Spanien"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl text-white">
          <nav
            aria-label="Brotkrümelnavigation"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/70"
          >
            <a href="/de" className="transition hover:text-white">
              Startseite
            </a>

            <span aria-hidden="true">/</span>

            <a
              href="/de/services"
              className="transition hover:text-white"
            >
              Leistungen
            </a>

            <span aria-hidden="true">/</span>

            <span>Komplette Kaufakte</span>
          </nav>

          <p className="text-sm uppercase tracking-[0.35em] text-[#d7b47a]">
            Alles sicher und übersichtlich an einem Ort
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Ihre komplette Kaufakte für eine Immobilie in Spanien.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            Ein übersichtlicher Ort für alle rechtlichen, finanziellen,
            technischen, steuerlichen und notariellen Dokumente Ihres gesamten
            Immobilienkaufs.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/de/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Ihre Kaufakte besprechen
            </a>

            <a
              href="/de/services"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Alle Leistungen ansehen
            </a>
          </div>
        </div>
      </section>

      {/* EINLEITUNG */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Mehr Klarheit und weniger verstreute Informationen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Ein Immobilienkauf besteht aus weit mehr als einem einzigen
              Vertrag.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-relaxed text-stone-700">
              Während eines Immobilienkaufs in Spanien erhalten Sie
              möglicherweise Dokumente von Maklern, Anwälten, Banken,
              Hypothekenberatern, Versicherungen, technischen Fachleuten,
              Notaren und Behörden.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Ohne eine klare Struktur können wichtige Informationen über
              E-Mails, WhatsApp, Downloads und persönliche Ordner verteilt
              sein. Dadurch kann unklar werden, welche Version endgültig ist,
              welche Dokumente noch fehlen und welche Fristen näherkommen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Die komplette Kaufakte bringt die wichtigsten Informationen in
              einer logisch organisierten Übersicht zusammen. Dadurch lässt
              sich der Kaufprozess leichter verfolgen und die wertvolle
              Dokumentation bleibt auch nach der Eigentumsübertragung
              verfügbar.
            </p>
          </div>
        </div>
      </section>

      {/* INHALT DER KAUFAKTE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Inhalt der Kaufakte
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Die wichtigen Bestandteile Ihres Immobilienkaufs übersichtlich
              organisiert.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {fileSections.map((section) => (
              <article
                key={section.number}
                className="rounded-[34px] bg-white p-9 shadow-sm"
              >
                <p className="text-sm tracking-[0.3em] text-[#c8a063]">
                  {section.number}
                </p>

                <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {section.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VORTEILE */}
      <section className="bg-[#e9dfd2] px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
                Warum eine zentrale Kaufakte?
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Mehr Kontrolle über Dokumente, Versionen und wichtige Schritte.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-700">
                Eine gut organisierte Kaufakte beseitigt nicht jedes Risiko,
                hilft Ihnen aber, Informationen besser zu verwalten und
                Entscheidungen auf Grundlage der richtigen Unterlagen zu
                treffen.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-[30px] bg-white p-8 shadow-sm"
                >
                  <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                    {benefit.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    {benefit.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SICHERHEIT */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <img
            src="/images/aftercare.png"
            alt="Geschützter Zugriff auf Dokumente eines Immobilienkaufs"
            className="h-[620px] w-full rounded-[38px] object-cover shadow-xl"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Sorgfältiger Umgang mit sensiblen Informationen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Wichtige Dokumente sollten nicht über einzelne Nachrichten
              verteilt sein.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Eine Kaufakte kann persönliche Identitätsdaten, finanzielle
              Informationen, Bankunterlagen, Verträge und Eigentumsnachweise
              enthalten. Der Zugriff muss daher sorgfältig verwaltet werden.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Abhängig von der verwendeten Plattform kann die Kaufakte durch
              individuelle Benutzerkonten, eingeschränkte Berechtigungen,
              starke Passwörter und Mehrfaktor-Authentifizierung geschützt
              werden. Nur Personen mit einer klaren Aufgabe im Kaufprozess
              sollten Zugriff auf relevante Dokumente erhalten.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Eine digitale Kaufakte ist nicht automatisch vollständig sicher.
              Die technische Plattform, ihre Einstellungen, Zugriffsrechte und
              das Verhalten der Nutzer bleiben wichtige Faktoren für den
              Schutz der Informationen.
            </p>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="bg-white/45 px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            So funktioniert es
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Von den ersten Dokumenten bis zur vollständigen Kaufakte nach der
            Schlüsselübergabe.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="border-l border-[#c8a063]/40 pl-7"
              >
                <p className="text-sm tracking-[0.3em] text-[#c8a063]">
                  {step.number}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {step.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOKUMENTENLISTE */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Mögliche Dokumente
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Welche Informationen können in die Kaufakte aufgenommen werden?
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-stone-600">
              Der genaue Inhalt hängt von der Immobilie, der Gemeinde, der
              Finanzierung und Ihren persönlichen Umständen ab. Nicht jedes
              Dokument ist bei jedem Immobilienkauf erforderlich.
            </p>
          </div>

          <div className="rounded-[38px] bg-[#1e2a3a] p-10 text-white md:p-12">
            <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
              {possibleDocuments.map((document) => (
                <div
                  key={document}
                  className="flex gap-4 border-b border-white/10 pb-5"
                >
                  <span
                    aria-hidden="true"
                    className="text-xl text-[#d7b47a]"
                  >
                    ✓
                  </span>

                  <span className="leading-relaxed text-white/85">
                    {document}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FÜR WEN */}
      <section className="bg-[#e9dfd2] px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
            Für wen ist die Kaufakte geeignet?
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Besonders wertvoll, wenn mehrere Dokumente, Beteiligte und Fristen
            zusammenkommen.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {suitableFor.map((profile) => (
              <article
                key={profile.title}
                className="rounded-[32px] bg-white p-8 shadow-sm"
              >
                <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {profile.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {profile.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WICHTIGER UNTERSCHIED */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Organisation ist keine rechtliche Genehmigung
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Eine vollständige Kaufakte ersetzt keine unabhängige fachliche
            Prüfung.
          </h2>

          <div className="mt-10 grid gap-10 text-lg leading-relaxed text-stone-600 lg:grid-cols-2">
            <div>
              <p>
                Die Tatsache, dass ein Dokument in der Kaufakte gespeichert
                ist, bedeutet nicht automatisch, dass es rechtlich, technisch
                oder finanziell genehmigt wurde. Die Informationen müssen
                weiterhin von der zuständigen unabhängigen Fachperson geprüft
                werden.
              </p>

              <p className="mt-6">
                Ihr Anwalt kann Eigentum, Verträge, Schulden und Genehmigungen
                kontrollieren. Ein technischer Spezialist beurteilt den Zustand
                der Immobilie. Ein Steuerberater behandelt persönliche
                steuerliche Fragen.
              </p>
            </div>

            <div>
              <p>
                Die Kaufakte unterstützt diese Zusammenarbeit, indem sie
                Informationen übersichtlich verfügbar macht. Sie zeigt
                deutlicher, welche Dokumente vorhanden sind, welche Version
                aktuell ist und welche Fragen noch offen sind.
              </p>

              <p className="mt-6">
                Nordic Move Spain koordiniert und organisiert, wo dies
                vereinbart wurde, übernimmt jedoch nicht automatisch die
                rechtliche Verantwortung unabhängiger Anwälte, Notare, Banken
                oder anderer Fachberater.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Häufig gestellte Fragen
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Fragen zur kompletten Kaufakte.
          </h2>

          <div className="mt-12 space-y-5">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[28px] bg-white p-7 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-serif text-2xl leading-tight text-[#1e2a3a]">
                  <span className="flex items-center justify-between gap-6">
                    {item.question}

                    <span className="text-[#c8a063] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>

                <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-12 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d7b47a]">
            Mehr Übersicht während Ihres Immobilienkaufs
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl font-serif text-5xl leading-tight">
            Möchten Sie Ihren Immobilienkauf in Spanien besser organisiert
            beginnen?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Besprechen Sie mit Nordic Move Spain, wie eine persönliche Kaufakte
            Teil Ihrer Immobilienbegleitung werden kann.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/de/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Kennenlerngespräch vereinbaren
            </a>

            <a
              href="/de/services"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Zurück zu allen Leistungen
            </a>
          </div>
        </div>
      </section>

      {/* HINWEIS */}
      <section className="px-8 pb-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm leading-relaxed text-stone-500">
            Diese Seite enthält allgemeine Informationen zur Organisation einer
            Immobilien-Kaufakte und stellt keine Garantie für vollständige
            digitale Sicherheit dar. Der Schutz der Dokumente hängt von der
            verwendeten technischen Plattform, ihren Einstellungen, den
            Zugriffsrechten und der Nutzung ab. Die Dienstleistung ersetzt keine
            unabhängige rechtliche, steuerliche, technische oder finanzielle
            Beratung.
          </p>
        </div>
      </section>
    </main>
  );
}