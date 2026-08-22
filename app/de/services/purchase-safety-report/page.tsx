export const metadata = {
  title: "Purchase Safety Report | Sicher Immobilien kaufen an der Costa Blanca Nord",
  description:
    "Purchase Safety für Käufer an der Costa Blanca Nord: gründliche technische Prüfung, Dokumenten- und Registerabgleich sowie vollständige rechtliche Due Diligence durch erfahrene unabhängige Fachleute, die ausschließlich auf der Seite des Käufers arbeiten.",
  openGraph: {
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Gründliche technische und rechtliche Kaufprüfung durch erfahrene unabhängige Fachleute – ohne Verkäuferinteresse und vollständig auf die Interessen des Käufers ausgerichtet.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Zwei unabhängige professionelle Prüfungen und eine klare Nordic-Move-Einschätzung: fortfahren, neu bewerten oder nicht kaufen.",
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
              Home
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
              Contact
            </a>
          </div>

          <a
            href="/de/contact"
            className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Erstgespräch vereinbaren
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img
          src="/images/legal.png"
          alt="Purchase Safety Report für den Immobilienkauf an der Costa Blanca Nord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Sicherer Immobilien kaufen in Spanien
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[1] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-7xl">
              Purchase Safety Report
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white">
              Eine gründliche technische Immobilienprüfung und ein erster
              Dokumenten- und Registerabgleich durch einen erfahrenen unabhängigen
              Bausachverständigen, kombiniert mit einer vollständigen rechtlichen
              Due Diligence durch einen unabhängigen spanischen Immobilienanwalt —
              vollständig von Nordic Move koordiniert und ausschließlich auf die
              Interessen des Käufers ausgerichtet.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/de/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Persönliches Erstgespräch anfragen
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

      {/* EINLEITUNG */}
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
              auf Aussicht, Raumgefühl, Atmosphäre und Lage. Das ist verständlich.
              Die eigentlichen Risiken liegen jedoch häufig im Hintergrund:
              unvollständige Unterlagen, ein nicht korrekt registrierter Anbau,
              unklare Grundstücksgrenzen, technische Mängel,
              Feuchtigkeitsprobleme, Kläranlagen, Regeln der
              Eigentümergemeinschaft oder unerwartete Kosten.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Purchase Safety hilft, solche Punkte vor dem Kauf sichtbar zu machen.
              Wir arbeiten mit erfahrenen, fachkundigen und unabhängigen
              Spezialisten: einem Bausachverständigen für die technische
              Immobilienprüfung und den ersten technischen Dokumentenabgleich
              sowie einem unabhängigen spanischen Immobilienanwalt für die
              vollständige rechtliche Due Diligence.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Bei vielen Immobilientransaktionen in Spanien erhält der
              Verkaufsmakler eine Verkaufsprovision vom Verkäufer oder über die
              Verkaufstransaktion. Das ist ein übliches Verkaufsmodell, kann aber
              bedeuten, dass ein finanzielles Interesse am tatsächlichen Abschluss
              des Verkaufs besteht. Nordic Move Spain arbeitet anders:
              Wir werden weder vom Verkäufer noch vom Verkaufsmakler dafür bezahlt,
              eine bestimmte Immobilie zu verkaufen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Dadurch können wir ausschließlich aus Sicht des Käufers handeln.
              Wenn etwas genauer untersucht werden muss, soll es untersucht
              werden. Wenn die Ergebnisse Anlass geben, neu zu verhandeln,
              weitere Fachleute einzuschalten oder von der Immobilie Abstand zu
              nehmen, soll der Käufer das wissen, bevor er sich bindet.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Auf Grundlage beider professionellen Prüfungen führen wir die
              wichtigsten Erkenntnisse, offenen Fragen und Bedingungen zusammen
              und geben eine klare Einschätzung: fortfahren, neu bewerten oder
              nicht kaufen. Nordic Move ersetzt weder den Bausachverständigen noch
              den Anwalt; beide bleiben unabhängig und für ihre eigene Prüfung,
              Beratung und Berichterstattung verantwortlich.
            </p>
          </div>
        </div>
      </section>

      {/* FACHLEUTE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Unabhängige Fachleute
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Zwei unabhängige Prüfungen für ein klareres Bild vor dem Kauf.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Wir arbeiten mit erfahrenen und unabhängigen Fachleuten, die ihren
              jeweiligen Bereich gründlich prüfen. Der Bausachverständige untersucht
              den technischen Zustand der Immobilie und vergleicht relevante
              technische Unterlagen. Der unabhängige spanische Immobilienanwalt
              führt die vollständige rechtliche Due Diligence durch und vertritt
              ausschließlich den Käufer.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Vollständige rechtliche Due Diligence
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Unabhängiger spanischer Immobilienanwalt
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Der unabhängige spanische Immobilienanwalt prüft unter anderem
                das Eigentum und die registrierte Eigentumssituation,
                Belastungen und Beschränkungen, relevante Schulden und Steuern,
                rechtliche und planungsrechtliche Punkte, verfügbare
                Genehmigungen und Lizenzen, Unterlagen der
                Eigentümergemeinschaft, Kaufverträge sowie die Bedingungen der
                Eigentumsübertragung. Wo erforderlich, wird eine zusätzliche
                Bestätigung bei der zuständigen Behörde oder einem Spezialisten
                eingeholt.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Der Anwalt arbeitet unabhängig, vertritt den Käufer und bleibt für
                seine eigene rechtliche Prüfung und Beratung verantwortlich.
                Der Dokumentenabgleich des Bausachverständigen ersetzt diese
                rechtliche Due Diligence nicht.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Dokumenten- und Registerabgleich
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Erste Prüfung der verfügbaren Unterlagen
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Der unabhängige Bausachverständige prüft und vergleicht die
                technischen Informationen, die zur Immobilie verfügbar sind.
                Dazu können unter anderem Katasterdaten, die registrierte
                Beschreibung der Immobilie, aktuelle IBI-Informationen, der
                registrierte Energieausweis (CEE), der IEEV.CV soweit
                anwendbar, verfügbare Pläne, Baugenehmigungen, Lizenzen und
                Unterlagen gehören, die vom Verkäufer oder Makler bereitgestellt
                wurden.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Soweit möglich, werden registrierte, katastermäßige und gemessene
                Flächen miteinander verglichen. Abweichungen bei Anbauten,
                Garagen, Terrassen, Pools oder anderen Bauwerken, die in den
                verfügbaren Unterlagen nicht übereinstimmend erscheinen, werden
                für eine weitere Prüfung gekennzeichnet.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Der Bausachverständige kann außerdem technische oder
                planungsbezogene Punkte erkennen, die eine zusätzliche
                Überprüfung erfordern. Der rechtliche Status, das Eigentum,
                Belastungen, Angelegenheiten der Eigentümergemeinschaft, die
                planungsrechtliche Zulässigkeit sowie mögliche Auswirkungen des
                spanischen Küstengesetzes werden durch den unabhängigen Anwalt,
                die zuständige Behörde oder einen anderen Spezialisten rechtlich
                geprüft oder bestätigt.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Eine Abweichung bedeutet nicht automatisch, dass eine Immobilie
                illegal oder ungeeignet ist. Sie bedeutet, dass der betreffende
                Punkt vor dem Kauf sorgfältig untersucht, erläutert und bewertet
                werden sollte.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Technische Immobilienprüfung
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Unabhängiger Bausachverständiger
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Der unabhängige Bausachverständige führt eine gründliche Prüfung
                des sichtbaren und zugänglichen technischen Zustands der
                Immobilie durch. Dazu gehören unter anderem Konstruktion und
                Bauqualität, Feuchtigkeit, Wassereintritt und sichtbare
                Leckagen, Installationen und Einrichtungen auf funktionaler
                Ebene sowie Pool, Nebengebäude und weitere relevante bauliche
                Bestandteile.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Der Bericht benennt notwendige Reparaturen, Empfehlungen und weitere
                zu prüfende Punkte und enthält unterstützende Fotos. Wenn
                zusätzliche fachliche Untersuchungen erforderlich sind, wird
                dies klar empfohlen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UNABHÄNGIGKEIT AUF KÄUFERSEITE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Ausschließlich auf der Seite des Käufers
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Wir vertreten den Käufer – nicht die Immobilie und nicht den Verkäufer.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6 text-lg leading-relaxed text-white/80">
              <p>
                In Spanien ist es üblich, dass ein Verkaufsmakler bei erfolgreichem
                Verkauf über den Verkäufer oder die Verkaufstransaktion vergütet
                wird. Dieses Modell muss an sich kein Problem sein, bedeutet aber,
                dass der beteiligte Verkaufsmakler ein finanzielles Interesse am
                Zustandekommen der Transaktion haben kann.
              </p>

              <p>
                Nordic Move Spain lässt sich weder vom Verkäufer noch vom
                Verkaufsmakler dafür bezahlen, eine bestimmte Immobilie zu
                verkaufen. Unser Vergütungsmodell hängt daher nicht vom Abschluss
                dieses konkreten Verkaufs ab. Wir können uns vollständig darauf
                konzentrieren, ob die Immobilie wirklich zum Käufer passt und ob
                die relevanten Risiken ausreichend untersucht wurden.
              </p>

              <p>
                Gerade dadurch können wir Raum für gründliche technische und
                rechtliche Prüfungen schaffen. Unser unabhängiger
                Bausachverständiger und Anwalt müssen einen kritischen Punkt
                nicht relativieren, nur damit ein Verkauf zustande kommt. Sie
                prüfen in eigener professioneller Verantwortung, während wir bei
                Koordination und Entscheidungsfindung ausschließlich die
                Interessen des Käufers vertreten.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Keine Verkäuferprovision, um eine bestimmte Immobilie zu forcieren",
                "Gründliche technische Prüfung durch einen unabhängigen Bausachverständigen",
                "Vollständige rechtliche Due Diligence durch einen unabhängigen Anwalt",
                "Raum für zusätzliche Untersuchungen, wenn etwas nicht stimmig ist",
                "Neu verhandeln, weiter prüfen oder stoppen, wenn die Ergebnisse dies nahelegen",
                "Ein klarer Fokus: die Interessen des Käufers",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/8 p-5"
                >
                  <p className="text-sm font-medium leading-relaxed text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WAS WIRD GEPRÜFT */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Was kann der Bericht enthalten?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Von Unterlagen bis zur Kläranlage: Punkte, die Käufer oft zu spät entdecken.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Sichtbarer technischer Zustand, Konstruktion und Bauqualität",
              "Feuchtigkeit, Wassereintritt und sichtbare Leckagen",
              "Installationen und Einrichtungen auf funktionaler Ebene",
              "Pool, Nebengebäude und notwendige Reparaturen",
              "Kataster, registrierte Beschreibung, IBI, CEE und IEEV.CV soweit relevant",
              "Verfügbare Pläne, Genehmigungen, Lizenzen und technische Dokumentation",
              "Vergleich von registrierten, katastermäßigen und gemessenen Flächen",
              "Erkennung möglicher Abweichungen bei Anbauten, Garagen, Terrassen oder Pools",
              "Rechtliche Prüfung von Eigentum, Belastungen, Eigentümergemeinschaft, Planung und Küstengesetz durch den Anwalt",
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

      {/* ERGEBNIS UND KOORDINATION */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Klare Einschätzung
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Fortfahren, neu bewerten oder nicht kaufen.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/80">
              Ziel von Purchase Safety ist nicht, den Kauf komplizierter zu
              machen. Ziel ist es, Ihnen vor einer großen finanziellen
              Entscheidung mehr Klarheit auf Grundlage einer unabhängigen
              technischen Prüfung und einer unabhängigen rechtlichen Due
              Diligence zu geben.
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Grün</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Die Immobilie erscheint grundsätzlich geeignet, sofern die
                  üblichen Kaufschritte ordnungsgemäß abgeschlossen werden.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Orange</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Es gibt zu prüfende Punkte. Fahren Sie nur unter Bedingungen,
                  nach zusätzlichen Kontrollen oder mit angepassten
                  Verhandlungen fort.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Rot</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Es bestehen erhebliche Risiken, aufgrund derer es sinnvoll sein kann,
                  die Immobilie nicht weiterzuverfolgen.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ein fester Ansprechpartner
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Sie müssen nicht selbst alle beteiligten Fachleute koordinieren.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-700">
              Beim Immobilienkauf in Spanien müssen Käufer häufig gleichzeitig
              mit Maklern, Bausachverständigen, Anwälten und weiteren Fachleuten
              kommunizieren. Nordic Move bleibt Ihr fester Ansprechpartner und
              sorgt dafür, dass die vereinbarten Schritte aufeinander
              abgestimmt sind.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Wir behalten im Blick, wer welche Aufgabe übernimmt, welche
              Informationen fehlen, welche Fragen noch offen sind, was der
              nächste Schritt ist und wo Verzögerungen oder Risiken entstehen
              können. Da wir nicht von der Verkäuferseite dafür bezahlt werden,
              diese konkrete Transaktion abzuschließen, können wir offene Punkte
              weiterverfolgen, bis für den Käufer ausreichend Klarheit besteht.
            </p>

            <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-700">
              <li>• Ein fester Ansprechpartner bei Nordic Move</li>
              <li>• Koordination eines erfahrenen unabhängigen Bausachverständigen</li>
              <li>• Auswahl und Koordination eines erfahrenen unabhängigen spanischen Immobilienanwalts</li>
              <li>• Nachverfolgung offener Fragen, Bedingungen und Fristen</li>
              <li>• Eine klare Einschätzung auf Grundlage beider Berichte</li>
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
                Kombinieren Sie Purchase Safety mit dem Buyer Discovery Trip.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Während unseres Buyer Discovery Trips erleben Sie nicht nur die
                Regionen, Orte und Immobilien an der Costa Blanca Nord. Sie
                können auch Fachleute kennenlernen, die Sie bei einer
                fundierten Kaufentscheidung unterstützen können.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Dazu können der unabhängige spanische Immobilienanwalt, der
                Bausachverständige, ein Hypothekenberater und weitere ausgewählte
                lokale Fachleute gehören. Allgemeine Fragen können während der
                Reise besprochen werden; persönliche oder immobilienspezifische
                Rechtsberatung erfolgt separat, nachdem der Anwalt formell
                beauftragt wurde und eine Interessenkonfliktprüfung durchgeführt
                hat.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Darüber hinaus können wir Sie mit gleichgesinnten Käufern und
                internationalen Bewohnern bekannt machen, die sich in einer
                ähnlichen Lebensphase befinden. So erhalten Sie nicht nur
                Einblick in die Immobilie, sondern auch in den Alltag, die
                Gemeinschaft und die praktische Realität des Lebens in Spanien.
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

      {/* ROLLE / VERANTWORTUNG */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-[#c8a063]/30 bg-white p-10 shadow-sm lg:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Wichtig zu wissen
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
            Wir koordinieren. Die Fachleute prüfen.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Nordic Move Spain ersetzt weder den unabhängigen
            Bausachverständigen noch den unabhängigen spanischen Anwalt. Beide
            Fachleute bleiben für ihre eigene Prüfung, Berichterstattung und
            Beratung verantwortlich. Wir koordinieren den Prozess, verfolgen
            offene Punkte und helfen Ihnen, die wichtigsten Ergebnisse und
            Bedingungen zu verstehen.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Der technische Dokumentenabgleich des Bausachverständigen ist eine
            erste Prüfung und Kennzeichnung auf Grundlage der verfügbaren
            Informationen. Er ersetzt weder die vollständige rechtliche Due
            Diligence noch eine formelle Bestätigung durch die zuständigen
            Behörden. Rechtliche Fragen werden vom unabhängigen Anwalt geprüft
            und, soweit erforderlich, durch die zuständige Behörde oder einen
            Spezialisten bestätigt.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Unsere unabhängige Position bedeutet, dass Nordic Move kein
            Verkäuferinteresse am Abschluss eines bestimmten Verkaufs hat.
            Dadurch können kritische Punkte ernsthaft untersucht werden, und wir
            können den Käufer auf Grundlage der Ergebnisse beim Fortfahren,
            Nachverhandeln, bei weiteren Untersuchungen oder beim Ausstieg
            unterstützen.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Keine Inspektion, rechtliche Prüfung oder professionelle Kontrolle
            kann absolute Sicherheit bieten oder garantieren, dass eine
            Immobilie vollständig frei von Risiken oder verborgenen Mängeln ist.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Kaufen Sie mit mehr Sicherheit
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Planen Sie den Kauf einer Immobilie an der Costa Blanca Nord?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Vereinbaren Sie ein persönliches Erstgespräch und erfahren Sie, wie
            Purchase Safety dabei helfen kann, den technischen Zustand,
            verfügbare Registerinformationen und Unterlagen sowie rechtliche
            Risiken vor dem Kauf besser zu verstehen.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/de/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Erstgespräch vereinbaren
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