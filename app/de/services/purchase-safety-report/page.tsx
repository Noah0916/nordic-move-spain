export const metadata = {
  title: "Purchase Safety Report | Sicher eine Immobilie an der Costa Blanca Nord kaufen",
  description:
    "Purchase Safety für Käufer an der Costa Blanca Nord: unabhängige technische Immobilienprüfung, erste Dokumenten- und Registerprüfung sowie vollständige rechtliche Due Diligence durch einen unabhängigen spanischen Rechtsanwalt.",
  openGraph: {
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Eine unabhängige technische Immobilienprüfung und Dokumentensichtung, ergänzt durch die vollständige rechtliche Due Diligence eines unabhängigen spanischen Rechtsanwalts.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Zwei unabhängige professionelle Beurteilungen und eine klare Nordic-Move-Kaufempfehlung: weitermachen, neu bewerten oder Abstand nehmen.",
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
              Eine unabhängig durchgeführte technische Immobilienprüfung mit
              erster Dokumenten- und Registerscreening sowie eine vollständige
              rechtliche Due Diligence durch einen unabhängigen spanischen
              Rechtsanwalt — koordiniert durch Nordic Move.
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
              Purchase Safety hilft Ihnen, diese Punkte vor dem Kauf besser
              sichtbar zu machen. Wir koordinieren eine unabhängige technische
              Immobilienprüfung mit Dokumenten- und Registerscreening und
              arbeiten zusätzlich mit einem unabhängigen spanischen
              Rechtsanwalt für die vollständige rechtliche Due Diligence.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Auf Grundlage beider professionellen Beurteilungen bringen wir
              die wesentlichen Feststellungen, offenen Fragen und Bedingungen
              zusammen und geben eine klare Kaufempfehlung: weitermachen, neu
              bewerten oder Abstand nehmen. Nordic Move ersetzt weder den
              Sachverständigen noch den Rechtsanwalt; beide bleiben für ihre
              eigene Prüfung und Beratung verantwortlich.
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
              Zwei unabhängige Beurteilungen für ein klareres Kaufbild.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Wir koordinieren einen unabhängigen Bausachverständigen für die
              technische Immobilienbewertung und erste Dokumenten- und
              Registerscreening. Zusätzlich arbeiten wir mit einem unabhängigen
              spanischen Rechtsanwalt, der die vollständige rechtliche Due
              Diligence durchführt und ausschließlich die Interessen des Käufers
              vertritt.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Vollständige rechtliche Due Diligence
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Unabhängiger spanischer Rechtsanwalt
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Der unabhängige spanische Rechtsanwalt prüft unter anderem
                Eigentum, eingetragene Belastungen, mögliche Schulden und
                Steuern, die rechtliche und planungsrechtliche Situation,
                Genehmigungen, Gemeinschaftsunterlagen, Kaufverträge und die
                Bedingungen der Eigentumsübertragung.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Der Rechtsanwalt arbeitet unabhängig, vertritt den Käufer und
                bleibt für seine eigene rechtliche Prüfung und Beratung
                verantwortlich. Die Dokumentensichtung des Sachverständigen
                ersetzt diese rechtliche Due Diligence nicht.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Dokumenten- und Registerscreening
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Erste Prüfung der verfügbaren Unterlagen
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Der Sachverständige prüft und vergleicht die verfügbaren
                Unterlagen und Registrierungen, darunter Nota Simple, Kataster,
                IBI, Energieausweis (CEE), ITE soweit relevant,
                Maklerinformationen sowie verfügbare Genehmigungen und
                Lizenzen.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Außerdem werden offizielle und gemessene Flächen
                miteinander verglichen. Mögliche nicht registrierte
                Gebäudeteile, Anbauten, Garagen oder Pools werden signalisiert.
                Der Bericht kann auch Hinweise zu Planung, Eigentümergemeinschaft,
                Küstengesetz und anderen relevanten Faktoren enthalten.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Technische Immobilienbewertung
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Bausachverständiger
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Der unabhängige Bausachverständige beurteilt die sichtbare und
                zugängliche technische Situation der Immobilie. Dazu gehören
                Konstruktion und Bauqualität, Feuchtigkeit, Wassereintritt und
                sichtbare Leckagen, Installationen und Einrichtungen auf
                funktionaler Ebene sowie Pool und Nebengebäude.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Der Bericht benennt notwendige Reparaturen, Empfehlungen und
                weitere Aufmerksamkeitspunkte und enthält unterstützende Fotos.
                Wenn zusätzliche Fachuntersuchungen erforderlich sind, wird dies
                ausdrücklich empfohlen.
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
              "Sichtbarer technischer Zustand, Konstruktion und Bauqualität",
              "Feuchtigkeit, Wassereintritt und sichtbare Leckagen",
              "Installationen und Einrichtungen auf funktionaler Ebene",
              "Pool, Nebengebäude und notwendige Reparaturen",
              "Nota Simple, Kataster, IBI, CEE und ITE soweit relevant",
              "Maklerinformationen sowie verfügbare Genehmigungen und Lizenzen",
              "Vergleich offizieller und gemessener Flächen",
              "Signale möglicher nicht registrierter Gebäudeteile",
              "Hinweise zu Planung, Eigentümergemeinschaft, Küstengesetz und weiteren relevanten Faktoren",
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
              Ziel von Purchase Safety ist nicht, den Kauf komplizierter zu
              machen. Ziel ist, Ihnen auf Grundlage einer unabhängigen
              technischen Beurteilung und einer unabhängigen rechtlichen Due
              Diligence mehr Klarheit vor einer großen finanziellen Entscheidung
              zu geben.
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
              Ein fester Ansprechpartner
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Sie müssen die beteiligten Fachleute nicht selbst koordinieren.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-700">
              Beim Immobilienkauf in Spanien müssen Käufer häufig gleichzeitig
              mit Maklern, Sachverständigen, Rechtsanwälten und weiteren
              Fachleuten kommunizieren. Nordic Move bleibt Ihr fester
              Ansprechpartner und sorgt dafür, dass die vereinbarten Schritte
              aufeinander abgestimmt sind.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Wir behalten im Blick, wer was erledigt, welche Informationen
              fehlen, welche Fragen offen sind, was als Nächstes passieren muss
              und wo Verzögerungen oder Risiken entstehen können.
            </p>

            <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-700">
              <li>• Ein fester Nordic-Move-Ansprechpartner</li>
              <li>• Koordination des unabhängigen Sachverständigen</li>
              <li>• Auswahl und Koordination eines unabhängigen spanischen Rechtsanwalts</li>
              <li>• Nachverfolgung offener Fragen, Bedingungen und Fristen</li>
              <li>• Eine verständliche Kaufempfehlung auf Grundlage beider Berichte</li>
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
                Dazu können der unabhängige spanische Rechtsanwalt, der
                technische Sachverständige, ein Hypothekenberater und weitere
                ausgewählte lokale Fachleute gehören. Allgemeine Fragen können
                im Rahmen der Experience besprochen werden; persönliche oder
                immobilienspezifische Rechtsberatung erfolgt separat nach
                Mandatierung und Interessenkonfliktprüfung.
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
            Nordic Move Spain ersetzt weder den unabhängigen
            Bausachverständigen noch den unabhängigen spanischen Rechtsanwalt.
            Beide Fachleute sind für ihre eigene Prüfung, Berichterstattung und
            Beratung verantwortlich. Wir koordinieren den Prozess, verfolgen
            offene Punkte und helfen Ihnen, die wichtigsten Feststellungen und
            Bedingungen verständlich einzuordnen.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Die Dokumenten- und Registerscreening des Sachverständigen ist eine
            erste Prüfung und Signalgebung auf Grundlage der verfügbaren
            Unterlagen. Sie ersetzt weder die vollständige rechtliche Due
            Diligence noch eine formelle Bestätigung durch die zuständigen
            Behörden. Keine Prüfung kann garantieren, dass eine Immobilie
            vollständig frei von Risiken oder verborgenen Mängeln ist.
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
            Purchase Safety Ihnen helfen kann, die technische Situation,
            verfügbare Registrierungen und Dokumente sowie rechtliche Risiken vor
            dem Kauf besser zu verstehen.
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