export const metadata = {
  title: "Nordic Circle Community | Buyer Discovery Experience",
  description:
    "Eine kuratierte Buyer Discovery Experience an der Costa Blanca mit ausgewählter Gruppe, privaten Immobilienbesichtigungen, 4- oder 5-Sterne-Hotel oder Finca, privatem Chauffeur, regionalen Aktivitäten und Treffen mit unabhängigen Experten.",
  openGraph: {
    title: "Nordic Circle Community | Nordic Move Spain",
    description:
      "Entdecken Sie die Costa Blanca in einer sorgfältig kuratierten Gruppe: private Besichtigungen, regionale Aktivitäten, komfortable Organisation und Treffen mit unabhängigen Experten.",
    type: "website",
  },
};

export default function NordicCircleCommunityPage() {
  const highlights = [
    "Kuratierte Gruppentour",
    "Deutschsprachig oder international",
    "4- oder 5-Sterne-Hotel oder Finca",
    "Organisation ab Flughafenankunft",
    "Privater Chauffeur",
    "Hochwertige Lunches und Dinner",
    "Regionale Aktivitäten",
    "Offizieller Tourpartner",
    "Treffen mit unabhängigen Experten",
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative flex min-h-[760px] items-center overflow-hidden">
        <img
          src="/images/community-home.png"
          alt="Buyer Discovery Experience an der Costa Blanca"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Nordic Circle Community
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[1] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-7xl">
              Buyer Discovery Experience an der Costa Blanca.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
              Eine sorgfältig kuratierte Reise für Käufer, die die Region,
              passende Immobilien und wichtige Experten in einem sicheren,
              komfortablen Rahmen kennenlernen möchten.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/de/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Persönliches Kennenlernen planen
              </a>

              <a
                href="/de/services"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Unsere Leistungen ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EINLEITUNG */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Private Besichtigungen, mit Raum für Begegnung
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Persönlich besichtigen. Gemeinsam die Region erleben.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Während der Buyer Discovery Experience besichtigen Sie Immobilien
                nicht als anonyme Gruppe. Die Besichtigungen werden individuell
                vorbereitet und auf Ihr persönliches Profil, Ihr Budget, Ihren
                Lebensstil und die für Sie relevanten Gebiete abgestimmt.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Gleichzeitig müssen Sie die Costa Blanca nicht allein entdecken.
                Rund um die Besichtigungen erleben Sie die Region in einer
                ausgewählten kleinen Gruppe — je nach Termin international oder
                deutschsprachig.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                So entsteht eine Reise, die private Orientierung, regionale
                Erlebnisse, Begegnungen mit anderen Käufern und professionelle
                Sicherheit miteinander verbindet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KURATIERTE REISE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Buyer Discovery Experience
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Eine kuratierte Reise, keine individuell geplante Privatreise.
          </h2>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xl leading-relaxed text-stone-700">
                Die Buyer Discovery Experience ist keine individuell frei
                zusammengestellte Privatreise, sondern eine sorgfältig kuratierte
                Tour mit einer ausgewählten kleinen Gruppe.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Das bedeutet: Die Reise folgt einem professionell geplanten
                Programm, bei dem Immobilienbesichtigungen, regionale Erlebnisse,
                persönliche Begegnungen und wichtige Expertengespräche sinnvoll
                miteinander verbunden werden.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Je nach Termin und Zusammensetzung der Gruppe kann die Experience
                international oder deutschsprachig ausgerichtet sein. Ziel ist es,
                Sie mit Menschen zusammenzubringen, die sich in einer ähnlichen
                Lebens- oder Kaufphase befinden und die Costa Blanca als möglichen
                neuen Lebensmittelpunkt kennenlernen möchten.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                Komfortabel ankommen, gut begleitet reisen.
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Je nach Paket und Verfügbarkeit wohnen Sie in einem ausgewählten
                4- oder 5-Sterne-Hotel oder in einer hochwertigen Finca, die zum
                Charakter der Reise und zur Region passt.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Ab Ihrer Ankunft am Flughafen wird der Ablauf für Sie organisiert.
                Dazu gehören der Empfang, die Transfers und die geplanten Fahrten
                während des Programms. Ein privater Chauffeur sorgt dafür, dass
                Sie bequem zu Besichtigungen, regionalen Stationen, Aktivitäten,
                Lunches, Dinnern und Expertenterminen gebracht werden.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Auch kulinarisch ist die Experience hochwertig geplant.
                Gemeinsame Lunches und stilvolle Dinner bieten Raum für Austausch,
                Fragen, Gespräche und echte Begegnung — mit anderen Teilnehmern,
                lokalen Kontakten und unserem Netzwerk vor Ort.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="rounded-[32px] bg-[#1e2a3a] p-8 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                Privat besichtigen
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-tight">
                Persönlich abgestimmte Immobilienbesichtigungen
              </h3>

              <p className="mt-6 leading-relaxed text-white/75">
                Auch wenn die Reise als ausgewählte Gruppentour organisiert wird,
                bleiben die Immobilienbesichtigungen persönlich und zielgerichtet.
                Sie besichtigen nicht wahllos Objekte mit der ganzen Gruppe.
              </p>

              <p className="mt-5 leading-relaxed text-white/75">
                Die Auswahl der Immobilien wird auf Ihr Profil, Ihr Budget, Ihre
                Wünsche, Ihren Lebensstil und die für Sie relevanten Regionen
                abgestimmt.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                Gemeinsam erleben
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                Regionale Aktivitäten mit offiziellem Tourpartner
              </h3>

              <p className="mt-6 leading-relaxed text-stone-600">
                Rundherum erleben Sie die Costa Blanca gemeinsam mit der Gruppe.
                Sie entdecken verschiedene Orte und Wohnlagen, vergleichen
                Küstenregionen, Dörfer, internationale Wohngebiete und alltägliche
                Infrastruktur.
              </p>

              <p className="mt-5 leading-relaxed text-stone-600">
                In Zusammenarbeit mit einem offiziellen, professionellen
                Tourpartner können je nach Programm zum Beispiel gemeinsames
                Kochen, Pasta- oder Paella-Erlebnisse, Golf, eine Segeltour,
                Weinverkostungen, kulturelle Ausflüge, lokale Märkte oder
                entspannte Nachmittage an besonderen Orten geplant werden.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                Sicher entscheiden
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                Treffen mit unabhängigen Experten
              </h3>

              <p className="mt-6 leading-relaxed text-stone-600">
                Der wichtigste Teil der Buyer Discovery Experience ist nicht nur,
                schöne Immobilien zu sehen. Entscheidend ist, dass Sie verstehen,
                was ein Kauf in Spanien rechtlich, technisch, finanziell und
                praktisch bedeutet.
              </p>

              <p className="mt-5 leading-relaxed text-stone-600">
                Deshalb erhalten Sie während der Reise die Möglichkeit, unsere
                unabhängigen und fachkundigen Partner kennenzulernen — darunter
                ein erfahrener Anwalt, technische Bausachverständige,
                Hypothekenberater und weitere spezialisierte lokale Partner.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-[36px] bg-[#1e2a3a] p-10 text-white lg:p-12">
            <h3 className="font-serif text-4xl leading-tight">
              Mehr Sicherheit vor einer großen Entscheidung.
            </h3>

            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-white/80">
              Die Buyer Discovery Experience verbindet private, auf Ihr Profil
              abgestimmte Immobilienbesichtigungen mit einer sorgfältig
              organisierten Gruppenreise, regionalem Einblick, komfortabler
              Betreuung und professioneller Orientierung.
            </p>

            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
              Sie sehen nicht nur Immobilien. Sie erleben Orte, vergleichen
              Lebensstile, treffen relevante Experten und lernen die Region in
              einem sicheren, strukturierten Rahmen kennen.
            </p>

            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
              So entsteht eine bessere Grundlage für Ihre Entscheidung: nicht aus
              Bauchgefühl allein, sondern mit mehr Klarheit, mehr Sicherheit und
              einem realistischen Verständnis davon, ob die Costa Blanca wirklich
              zu Ihnen, Ihrem Alltag und Ihren Zukunftsplänen passt.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-white/15 bg-white/5 p-5"
                >
                  <p className="text-sm leading-relaxed text-white/85">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/de/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Persönliches Kennenlernen planen
              </a>

              <a
                href="/de/services"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
              >
                Weitere Leistungen ansehen
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}