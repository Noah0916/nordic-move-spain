export const metadata = {
  title: "Purchase Safety Report | Sicher eine Immobilie an der Costa Blanca Nord kaufen",
  description:
    "Ein unabhängiger Kauf-Sicherheitsreport für Käufer, die eine Immobilie an der Costa Blanca Nord vor dem Kauf rechtlich, technisch und praktisch prüfen lassen möchten.",
  openGraph: {
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Kaufen Sie nicht nur nach Gefühl. Lassen Sie eine Immobilie an der Costa Blanca Nord vor dem Kauf von unabhängigen Fachleuten beurteilen.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Ein klarer Kaufreport mit unabhängigen rechtlichen, technischen und praktischen Prüfungen, bevor Sie in Spanien kaufen.",
  },
};

export default function PurchaseSafetyReportPage() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/15 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/de"
            className="text-sm uppercase tracking-[0.25em] text-white"
          >
            Nordic Move Spain
          </a>

          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/de" className="hover:text-white/70 transition">
              Startseite
            </a>

            <a href="/de/regions" className="hover:text-white/70 transition">
              Regionen
            </a>

            <a href="/de/services" className="border-b border-[#c8a063] pb-1">
              Leistungen
            </a>

            <a href="/de/guides" className="hover:text-white/70 transition">
              Ratgeber
            </a>

            <a href="/de/about-us" className="hover:text-white/70 transition">
              Über uns
            </a>

            <a href="/de/contact" className="hover:text-white/70 transition">
              Kontakt
            </a>
          </div>

          <a
            href="/de/contact"
            className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Kennenlernen planen
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img
          src="/images/legal.png"
          alt="Purchase Safety Report für den Kauf einer Immobilie an der Costa Blanca Nord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Sicher kaufen in Spanien
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[1] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-7xl">
              Purchase Safety Report
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white">
              Ein unabhängiger Kauf-Sicherheitsreport für Käufer, die eine
              Immobilie an der Costa Blanca Nord nicht nur nach Gefühl kaufen
              möchten, sondern mit klaren rechtlichen, technischen und
              praktischen Einblicken.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/de/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Persönliches Kennenlernen anfragen
              </a>

              <a
                href="/de/services"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Zurück zu den Leistungen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EINFÜHRUNG */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Erst prüfen, dann entscheiden
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Eine schöne Immobilie ist nicht automatisch ein sicherer Kauf.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              Viele internationale Käufer achten bei einer Besichtigung vor allem
              auf Aussicht, Raum, Atmosphäre und Lage. Das ist verständlich. Die
              wirklichen Risiken liegen jedoch oft hinter den Kulissen:
              unvollständige Dokumente, ein nicht korrekt registrierter Anbau,
              abweichende Grundstücksgrenzen, technische Mängel, Feuchtigkeit,
              Klärgruben, Gemeinschaftsregeln oder unerwartete Kosten.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Der Purchase Safety Report hilft Ihnen, diese Punkte vor dem Kauf
              besser sichtbar zu machen. Wir koordinieren die Kaufprüfung mit
              unabhängigen Fachleuten und führen deren Ergebnisse in einer klaren
              Übersicht zusammen. So können Sie entscheiden, ob Sie mit Vertrauen
              weitermachen, neu verhandeln oder besser Abstand von der Immobilie
              nehmen sollten.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Unsere Rolle ist es nicht, rechtliche, steuerliche oder technische
              Beratung zu ersetzen. Unsere Rolle ist es, die richtigen
              Spezialisten an einen Tisch zu bringen, den Prozess zu strukturieren
              und die wichtigsten Punkte für internationale Käufer verständlich
              zu machen.
            </p>
          </div>
        </div>
      </section>

      {/* SPEZIALISTEN */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Unabhängige Fachleute
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Fachkundige Prüfungen für ein klares Kaufbild.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Abhängig von der Immobilie und der Situation arbeiten wir mit einem
              unabhängigen Anwalt, Notar, Gestor und technischen Bauspezialisten.
              Jeder betrachtet die Immobilie und den Kaufprozess aus seiner
              eigenen fachlichen Perspektive.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Rechtliche Prüfung
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Unabhängiger Anwalt
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Der Anwalt beurteilt die rechtliche Seite des Kaufs. Dazu gehören
                Eigentum, Nota Simple, mögliche Belastungen, offene Schulden,
                Kaufverträge, Genehmigungen, registrierte Daten und rechtliche
                Risiken, die vor der Unterzeichnung klar sein sollten.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Der Anwalt arbeitet unabhängig und ist für seine eigene
                rechtliche Beurteilung verantwortlich. So wissen Sie, welche
                rechtlichen Punkte zuerst gelöst oder weiter geprüft werden
                müssen.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Urkunde und Eigentumsübertragung
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Notar und Gestor
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Der Notar spielt eine wichtige Rolle bei der formellen
                Eigentumsübertragung. Der Notar prüft die Identität der Parteien,
                begleitet die Unterzeichnung der Eigentumsurkunde und stellt
                sicher, dass die Übertragung nach dem richtigen Verfahren
                dokumentiert wird.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Ein Gestor oder administrativer Spezialist kann zusätzlich bei
                praktischen und administrativen Prüfungen helfen, zum Beispiel
                bei Katasterdaten, Grundstücksinformationen, Registrierungen,
                Steuern, lokalen Verfahren und der Nachverfolgung nach dem Kauf.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Technische Prüfung
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Bausachverständiger
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Der technische Spezialist oder Bausachverständige betrachtet den
                sichtbaren Zustand der Immobilie. Dazu gehören Feuchtigkeit,
                Risse, Dach, Installationen, Leitungen, Elektrik, Pool,
                Klärgrube, Instandhaltungsrisiken und mögliche Renovierungspunkte.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Diese Prüfung hilft, versteckte Kosten besser einzuschätzen und
                verhindert, dass Sie erst nach dem Kauf entdecken, dass wichtige
                technische Bereiche Aufmerksamkeit oder Investitionen benötigen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAS WIRD GEPRÜFT */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Was kann der Report enthalten?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Von Dokumenten bis zur Klärgrube: Punkte, die Käufer oft zu spät entdecken.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Eigentum, Nota Simple und mögliche Belastungen",
              "Kaufverträge, Bedingungen und rechtliche Punkte",
              "Katasterdaten, Grundstücksgrenzen und registrierte Flächen",
              "Anbauten, Nebengebäude, Terrassen und mögliche Genehmigungen",
              "Feuchtigkeit, Risse, Dach, Pool und sichtbare Instandhaltungsrisiken",
              "Klärgrube, Leitungen, Elektrik und praktische Infrastruktur",
              "Gemeinschaftsregeln, Kosten und mögliche Einschränkungen",
              "Vermietungsmöglichkeiten und lokale Aufmerksamkeitspunkte",
              "Jährliche Eigentümerkosten und praktische nächste Schritte",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#c8a063]/20 bg-[#f6f1ea] p-6"
              >
                <p className="text-base leading-relaxed text-stone-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERGEBNIS UND SICHERHEIT */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Klare Schlussfolgerung
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Weitermachen, neu verhandeln oder Abstand nehmen.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/80">
              Das Ziel des Purchase Safety Reports ist nicht, einen Kauf
              komplizierter zu machen. Das Ziel ist, Ihnen Ruhe und Klarheit zu
              geben, bevor Sie eine große finanzielle Entscheidung treffen.
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Grün</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Die Immobilie scheint geeignet, um weiterzugehen, sofern die
                  normalen Kaufschritte korrekt abgeschlossen werden.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Orange</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Es gibt Aufmerksamkeitspunkte. Kaufen Sie nur unter Bedingungen,
                  nach zusätzlichen Prüfungen oder mit angepasster Verhandlung.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Rot</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Es gibt ernsthafte Risiken, bei denen es sinnvoll sein kann,
                  Abstand von der Immobilie zu nehmen.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Geschützte Umgebung
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Keine losen Dokumente per WhatsApp oder unsicherer E-Mail.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-700">
              Bei einem Kauf in Spanien werden häufig sensible Dokumente geteilt:
              Reisepässe, Eigentumsinformationen, Verträge, Bankdaten,
              Steuerunterlagen, technische Reports und rechtliche Dokumente.
              Wir finden, dass solche Informationen sorgfältig behandelt werden
              müssen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Deshalb arbeiten wir, wo möglich, mit einer geschützten digitalen
              Umgebung, in der Dokumente, Reports, Verantwortlichkeiten und
              nächste Schritte übersichtlich gesammelt werden.
            </p>

            <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-700">
              <li>• Kontrollierter Zugang pro Kunde und Berater</li>
              <li>• Two-step authentication für zusätzliche Sicherheit</li>
              <li>• Weniger lose E-Mails, Screenshots und WhatsApp-Nachrichten</li>
              <li>• Ein zentraler Ort für wichtige Kaufdokumente</li>
              <li>• Klare Fristen, Versionen und nächste Schritte</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DISCOVERY TRIP */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid items-center lg:grid-cols-2">
            <div className="relative min-h-[520px]">
              <img
                src="/images/discovery2.png"
                alt="Buyer Discovery Trip an der Costa Blanca Nord"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Teil Ihrer Kaufreise
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Kombinieren Sie den Report mit dem Buyer Discovery Trip.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Während unseres Buyer Discovery Trips erleben Sie nicht nur die
                Regionen, Orte und Immobilien an der Costa Blanca Nord. Sie
                treffen auch die Fachleute, die Ihnen helfen können, eine
                wohlüberlegte Kaufentscheidung zu treffen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Dazu gehören ein Anwalt, Gestor, technischer Spezialist,
                Hypotheken- oder Bankkontakt, Versicherungspartner, Property
                Manager und andere zuverlässige lokale Ansprechpartner.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Zusätzlich können wir Sie gleichgesinnten Käufern und
                internationalen Bewohnern vorstellen, die sich in einer ähnlichen
                Lebensphase befinden. So gewinnen Sie nicht nur Einblick in die
                Immobilie, sondern auch in das tägliche Leben, die Gemeinschaft
                und die praktische Realität des Wohnens in Spanien.
              </p>

              <a
                href="/de/services/discovery-trips"
                className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Buyer Discovery Trip entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HAFTUNG / ROLLE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-[#c8a063]/30 bg-white p-10 shadow-sm lg:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Wichtig zu wissen
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
            Wir koordinieren. Die Spezialisten beurteilen.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Nordic Move Spain ersetzt keinen Anwalt, Notar, Gestor, Steuerberater,
            technischen Spezialisten oder Bausachverständigen. Jeder Fachmann ist
            für seine eigene Beurteilung, Berichterstattung und Beratung
            verantwortlich. Wir koordinieren den Prozess, sammeln die Ergebnisse
            und helfen Ihnen, die wichtigsten Aufmerksamkeitspunkte klar zu
            verstehen.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Der Purchase Safety Report soll Käufer vor dem Kauf besser
            informieren. Er ist keine absolute Garantie dafür, dass eine
            Immobilie vollständig frei von Risiken oder versteckten Mängeln ist.
            Er hilft Ihnen jedoch, strukturierter, kritischer und mit mehr
            Vertrauen zu entscheiden.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Mit mehr Sicherheit kaufen
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Erwägen Sie eine Immobilie an der Costa Blanca Nord?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Fragen Sie ein persönliches Kennenlernen an und erfahren Sie, wie der
            Purchase Safety Report Ihnen helfen kann, rechtliche, technische und
            praktische Risiken vor dem Kauf besser zu verstehen.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/de/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Kennenlernen planen
            </a>

            <a
              href="/de"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Zurück zur Website
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
