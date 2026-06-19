export const metadata = {
  title: "Area Match Report & Sicher Kaufen Costa Blanca Nord | Nordic Move Spain",
  description:
    "Entdecken Sie, welcher Ort und welche Wohnumgebung am besten zu Ihnen passen, und wie Sie danach mit mehr Sicherheit kaufen: mit dem Purchase Safety Report, unabhängigen Prüfungen und einer geschützten Kaufumgebung.",
};

export default function AreaMatchPage() {
  const reportItems = [
    "Persönlicher Match mit Orten und Wohnlagen",
    "Lebensstil und tägliche Wohnumgebung",
    "Ruhe, Privatsphäre, Sommerandrang und Lärmrisiken",
    "Sicherheit, lokale Aufmerksamkeitspunkte und sichtbare Umgebungsrisiken",
    "Ärzte, Krankenhäuser und Zugang zur Gesundheitsversorgung",
    "Wellness, Golf, Sport und Freizeitmöglichkeiten",
    "Restaurants, Beachclubs und lokale Kultur",
    "Internationale Schulen und Eignung für Familien",
    "Internationale Gemeinschaften und soziales Netzwerk",
    "Erreichbarkeit, Infrastruktur und Investitionspotenzial",
    "Risiken wie stark befahrene Straßen, Strommasten, steile Zufahrt oder abgelegene Lage",
    "Erste Aufmerksamkeitspunkte für Vermietung, Gemeinschaftsregeln und ganzjährige Nutzung",
  ];

  const safetyChecks = [
    {
      label: "01",
      title: "Die richtige Umgebung wählen",
      text:
        "Bevor Sie Immobilien besichtigen, prüfen wir, welche Orte, Wohnlagen und Lebensumgebungen wirklich zu Ihrem Alltag passen. So vermeiden Sie, sich in eine Immobilie zu verlieben, deren Umgebung langfristig nicht zu Ihnen passt.",
    },
    {
      label: "02",
      title: "Risiken früher erkennen",
      text:
        "Wir achten nicht nur auf Atmosphäre und Schönheit, sondern auch auf praktische Punkte wie Erreichbarkeit, Lärm, saisonalen Andrang, Hanglage, Infrastruktur, Gesundheitsversorgung, Gemeinschaftsregeln und mögliche Einschränkungen.",
    },
    {
      label: "03",
      title: "Sicher weiter mit dem Purchase Safety Report",
      text:
        "Wenn Sie eine Immobilie ernsthaft in Betracht ziehen, beginnt die vertiefte Kaufprüfung. Mit unabhängigen Fachleuten werden rechtliche, technische und administrative Aufmerksamkeitspunkte vor dem Kauf sichtbar gemacht.",
    },
  ];

  const professionalChecks = [
    {
      title: "Unabhängiger Anwalt",
      text:
        "Der Anwalt prüft unter anderem Eigentum, Nota Simple, mögliche Belastungen, offene Schulden, Kaufverträge, Genehmigungen und rechtliche Risiken, die vor der Unterzeichnung klar sein sollten.",
    },
    {
      title: "Notar und Gestor",
      text:
        "Der Notar begleitet die formelle Eigentumsübertragung und die Unterzeichnung der Eigentumsurkunde. Ein Gestor kann bei administrativen Prüfungen, Registrierungen, Steuern, Katasterdaten und praktischer Nachverfolgung helfen.",
    },
    {
      title: "Technischer Bauspezialist",
      text:
        "Der technische Spezialist prüft sichtbare bauliche Risiken wie Feuchtigkeit, Risse, Dach, Installationen, Elektrik, Pool, Klärgrube, Instandhaltungsrisiken und mögliche Renovierungskosten.",
    },
  ];

  const secureItems = [
    "Kontrollierter Zugang pro Kunde und Berater",
    "Two-step authentication für zusätzliche Sicherheit",
    "Weniger lose E-Mails, Screenshots und WhatsApp-Dokumente",
    "Ein zentraler Ort für Reports, Dokumente und nächste Schritte",
    "Klare Versionen, Fristen und Verantwortlichkeiten",
    "Mehr Übersicht während eines Kaufprozesses mit vielen beteiligten Parteien",
  ];

  const journeySteps = [
    {
      number: "01",
      title: "Füllen Sie den kostenlosen Fragebogen aus",
      text:
        "Durch sorgfältig zusammengestellte Fragen erhalten wir Einblick in Ihre persönliche Situation, Wohnwünsche, Ihren Lebensstil, Ihr Budget, Ihre Interessen, Sorgen und langfristigen Pläne.",
    },
    {
      number: "02",
      title: "Erhalten Sie Ihren persönlichen Area Match Report",
      text:
        "Wir kombinieren Ihre Antworten mit lokaler Kenntnis und KI-gestützter Analyse. Sie erhalten eine persönliche Übersicht über Orte, Wohnlagen und Gemeinschaften, die voraussichtlich am besten zu Ihnen passen.",
    },
    {
      number: "03",
      title: "Planen Sie ein kostenloses persönliches Erstgespräch",
      text:
        "Im Erstgespräch besprechen wir die Ergebnisse, Ihre Zweifel, Wünsche und Risiken ausführlicher. So verstehen wir nicht nur, wo Sie wohnen möchten, sondern auch, was Sie unbedingt vermeiden möchten.",
    },
    {
      number: "04",
      title: "Erleben Sie die Regionen während des Buyer Discovery Trips",
      text:
        "Sie besuchen ausgewählte Orte und Wohnlagen, treffen relevante lokale Fachleute und erleben, wie sich der Alltag wirklich anfühlt, bevor Sie sich auf eine Immobilie festlegen.",
    },
    {
      number: "05",
      title: "Lassen Sie eine Immobilie mit dem Purchase Safety Report prüfen",
      text:
        "Wenn Sie eine Immobilie ernsthaft in Betracht ziehen, koordinieren wir unabhängige rechtliche, technische und administrative Prüfungen. Die Ergebnisse werden klar zusammengeführt, bevor Sie entscheiden.",
    },
    {
      number: "06",
      title: "Entscheiden Sie mit Übersicht und sicheren Dokumenten",
      text:
        "Wichtige Dokumente, Reports und nächste Schritte werden, wo möglich, in einer geschützten digitalen Umgebung mit kontrolliertem Zugang und two-step authentication gesammelt.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      {/* EINFÜHRUNG */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Area Match &amp; Sicher Kaufen
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
            Wählen Sie zuerst die richtige Umgebung. Kaufen Sie danach mit mehr Sicherheit.
          </h1>

          <p className="mt-10 max-w-5xl text-xl leading-relaxed text-stone-600">
            Eine Immobilie an der Costa Blanca Nord zu kaufen beginnt nicht mit
            der ersten Besichtigung. Es beginnt mit der Frage, ob die Umgebung,
            der Alltag und die praktische Realität wirklich zu Ihnen passen. Eine
            wunderschöne Immobilie kann dennoch die falsche Wahl sein, wenn die
            Lage zu belebt, zu abgelegen, im Winter zu ruhig ist oder versteckte
            Risiken enthält, die Sie erst nach dem Kauf entdecken.
          </p>

          <p className="mt-6 max-w-5xl text-xl leading-relaxed text-stone-600">
            Deshalb kombinieren wir unseren kostenlosen Area Match &amp; Lifestyle
            Intelligence Report mit einem klaren Sicherheitsansatz. Zuerst
            erfassen wir, welche Orte und Wohnlagen zu Ihrem Lebensstil passen.
            Danach begleiten wir Sie in einen sorgfältigen Kaufprozess, in dem
            rechtliche, technische und praktische Risiken vor dem Kauf sichtbar
            gemacht werden.
          </p>

          <p className="mt-6 max-w-5xl text-xl leading-relaxed text-stone-600">
            Unser Ansatz ist für internationale Käufer gedacht, die nicht nur
            eine schöne Immobilie suchen, sondern vor allem einen sicheren,
            verständlichen und gut geprüften Kauf tätigen möchten.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Kostenlosen Area Match Report anfragen
            </a>

            <a
              href="/de/services/purchase-safety-report"
              className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Purchase Safety Report ansehen
            </a>
          </div>
        </div>
      </section>

      {/* SICHERHEIT ALS BASIS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Unser Sicherheitsansatz
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Nicht nur suchen, was schön aussieht, sondern prüfen, was wirklich wichtig ist.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Viele Käufer beginnen mit Fotos, Aussicht und Preis. Wir drehen
            diesen Prozess um. Zuerst betrachten wir Lebensstil, Erreichbarkeit,
            Risiken, Umgebung und praktische Eignung. Erst danach wird die
            Immobiliensuche gezielt und sinnvoll.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {safetyChecks.map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] bg-[#f6f1ea] p-7"
              >
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {item.label}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INHALT DES REPORTS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Was Ihr persönlicher Report enthalten kann
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Von Lebensstil und Gesundheitsversorgung bis zu Lärm, Erreichbarkeit und Risiken.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Statt monatelang selbst einzelne Informationen zu sammeln, erhalten
            Sie eine klare und strukturierte Übersicht der Gebiete, die am besten
            zu Ihrem Profil passen. Dabei schauen wir weiter als nur auf
            Immobilienpreise, Strandnähe oder bekannte Ortsnamen.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reportItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f6f1ea] p-5 leading-relaxed text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-600">
            Der Report kombiniert einen persönlichen Lifestyle-Match mit
            praktischer lokaler Information. So erhalten Sie nicht nur Einblick,
            wo Sie eine Immobilie kaufen könnten, sondern vor allem, in welcher
            Umgebung Sie sich langfristig wahrscheinlich sicher, wohl und zuhause
            fühlen werden.
          </p>
        </div>
      </section>

      {/* PURCHASE SAFETY REPORT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[480px]">
              <img
                src="/images/legal.png"
                alt="Purchase Safety Report für den sicheren Kauf einer Immobilie an der Costa Blanca Nord"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/25"></div>
            </div>

            <div className="p-10 md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Purchase Safety Report
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Wenn eine Immobilie ernst wird, beginnt die eigentliche Prüfung.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Der Area Match Report hilft Ihnen zuerst, die richtige Umgebung
                zu wählen. Sobald Sie danach eine Immobilie ernsthaft in Betracht
                ziehen, hilft der Purchase Safety Report dabei, die wichtigsten
                rechtlichen, technischen und praktischen Risiken vor dem Kauf
                klar zu erkennen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Dazu können Eigentumsinformationen, Nota Simple, Genehmigungen,
                Anbauten, Grundstücksgrenzen, sichtbare Mängel, Feuchtigkeit,
                Pool, Klärgrube, Gemeinschaftsregeln, jährliche Kosten und
                mögliche Einschränkungen bei Nutzung oder Vermietung gehören.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Das Ziel ist einfach: Bevor Sie unterschreiben, möchten Sie
                wissen, ob Sie mit Vertrauen weitermachen, neu verhandeln,
                zusätzliche Bedingungen aufnehmen oder Abstand nehmen sollten.
              </p>

              <a
                href="/de/services/purchase-safety-report"
                className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Purchase Safety Report entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FACHLEUTE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Unabhängige Spezialisten
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Wir koordinieren die richtigen Fachleute. Sie beurteilen ihr eigenes Fachgebiet.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Nordic Move Spain ersetzt keinen Anwalt, Notar, Gestor,
              Steuerberater oder technischen Bauspezialisten. Wir bringen die
              richtigen Fachleute zusammen, strukturieren den Prozess und helfen
              Ihnen, die Ergebnisse klar zu verstehen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {professionalChecks.map((check) => (
              <div
                key={check.title}
                className="rounded-[32px] bg-white p-8 shadow-sm md:p-9"
              >
                <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {check.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {check.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GESCHÜTZTE UMGEBUNG */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#e9dfd2] p-10 shadow-sm md:p-14 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Geschützte Kaufumgebung
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Keine losen Dokumente über WhatsApp oder unsichere E-Mail.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-700">
                Bei einem Immobilienkauf in Spanien werden häufig sensible
                Dokumente geteilt: Reisepässe, Kaufverträge, Bankdaten,
                Steuerunterlagen, Eigentumsinformationen, technische Reports und
                rechtliche Dokumente. Wir finden, dass solche Informationen
                sorgfältig und übersichtlich behandelt werden müssen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Deshalb arbeiten wir, wo möglich, mit einer geschützten digitalen
                Umgebung, in der wichtige Dokumente, Reports, Verantwortlichkeiten
                und nächste Schritte zentral gesammelt werden.
              </p>

              <div className="mt-8 grid gap-4">
                {secureItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/70 p-5 leading-relaxed text-stone-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section id="ablauf" className="scroll-mt-24 px-8 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vom kostenlosen Report zum kontrollierten Kauf
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Ein klarer Weg von Orientierung zu Sicherheit.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Der Area Match Report ist der Ausgangspunkt. Danach bauen wir
              Schritt für Schritt weiter: persönliches Erstgespräch, Buyer
              Discovery Trip, gezielte Immobiliensuche, Purchase Safety Report
              und eine geschützte Dokumentenumgebung. So wird der Kauf nicht
              schneller oder impulsiver, sondern ruhiger, besser geprüft und
              besser unterlegt.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {journeySteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[32px] bg-white p-8 shadow-sm md:p-9"
              >
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {step.number}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {step.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSÖNLICHER MATCH WÄHREND DES TRIPS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[420px]">
              <img
                src="/images/discover-card.png"
                alt="Persönlicher Buyer Discovery Trip an der Costa Blanca Nord"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="p-10 md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Persönlicher Buyer Discovery Trip
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Nicht nur Orte besuchen, sondern Risiken verstehen und die richtigen Menschen kennenlernen.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Während des Trips erleben Sie, wie sich der Alltag in den
                ausgewählten Orten wirklich anfühlt. Sie besuchen Wohnlagen,
                Einrichtungen und Orte, die zu Ihrem persönlichen Profil passen,
                statt einer allgemeinen Standardroute zu folgen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Auf Grundlage Ihres Reports und des Erstgesprächs können wir
                relevante Einführungen vorbereiten. Dazu können vertrauenswürdige
                lokale Fachleute, internationale Bewohner, Unternehmer, zukünftige
                Käufer oder Menschen mit gemeinsamen Interessen gehören.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                So erhalten Sie nicht nur ein besseres Bild vom Immobilienmarkt,
                sondern auch von den sozialen, praktischen und sicherheitsrelevanten
                Aspekten rund um Ihre mögliche zukünftige Wohnumgebung.
              </p>

              <a
                href="/de/services/discovery-trips"
                className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Buyer Discovery Trip entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WARUM DAS WICHTIG IST */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Mehr als eine Immobilie suchen
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Die richtige Umgebung und ein geprüfter Kauf entscheiden, ob Spanien sich wirklich wie Zuhause anfühlt.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Eine Immobilie kann auf Fotos perfekt aussehen, während die Lage
              oder die rechtliche und technische Realität am Ende nicht zu Ihren
              Erwartungen passt. Vielleicht sind Einrichtungen zu weit entfernt,
              die Umgebung ist im Winter zu ruhig, es gibt unerwartete
              Gemeinschaftsregeln oder ein Teil der Immobilie ist nicht korrekt
              registriert.
            </p>

            <p className="mt-6">
              Deshalb schauen wir nicht nur auf die Immobilie selbst. Wir
              beurteilen auch die Umgebung, Erreichbarkeit, Lebensstil, lokale
              Infrastruktur, soziale Möglichkeiten und praktische Eignung für die
              kommenden Jahre. Und sobald eine konkrete Immobilie ernst wird,
              gehen wir weiter zu unabhängigen Prüfungen.
            </p>

            <p className="mt-6">
              Unsere Begleitung hilft Ihnen, zuerst Klarheit über den richtigen
              Ort und Lebensstil zu gewinnen und den Kauf danach mit mehr Ruhe,
              Übersicht und Sicherheit anzugehen.
            </p>
          </div>
        </div>
      </section>

      {/* ABSCHLUSS CTA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 text-center shadow-sm md:p-14 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Kostenlos und unverbindlich starten
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Entdecken Sie, welcher Ort, welche Wohnlage und welcher Kaufweg am besten zu Ihrer Zukunft in Spanien passen.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
            Füllen Sie den Fragebogen aus und erhalten Sie Ihren persönlichen
            Area Match &amp; Lifestyle Intelligence Report. Danach können Sie ein
            kostenloses Erstgespräch nutzen, in dem wir die Ergebnisse besprechen
            und gemeinsam prüfen, welcher nächste Schritt zu Ihnen passt.
          </p>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-stone-500">
            Wenn Sie später eine Immobilie ernsthaft in Betracht ziehen, kann der
            Purchase Safety Report helfen, rechtliche, technische und praktische
            Risiken vor dem Kauf besser zu verstehen.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/relocation-assessment"
              className="inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#15202d]"
            >
              Kostenlosen Area Match Report anfragen
            </a>

            <a
              href="/de/services/purchase-safety-report"
              className="inline-block rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Mehr über sicheres Kaufen erfahren
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
