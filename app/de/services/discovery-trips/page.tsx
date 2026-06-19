export const metadata = {
  title:
    "Buyer Discovery Trip Costa Blanca Nord | Immobilienkauf in Spanien",
  description:
    "Nehmen Sie an einer sorgfältig zusammengestellten Buyer Discovery Trip an der Costa Blanca Nord teil. Für deutsche, schweizerische, niederländische, belgische, britische, skandinavische und andere internationale Käufer. Entdecken Sie Moraira, Jávea, Altea, Benissa, Calpe und Dénia, treffen Sie vertrauenswürdige Fachleute und finden Sie mit mehr Sicherheit heraus, wo Sie in Spanien kaufen möchten.",
};

export default function BuyerDiscoveryTripPage() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Buyer Discovery Trip an der Costa Blanca Nord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Buyer Discovery Trip Costa Blanca Nord
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Eine sorgfältig zusammengestellte Immobilien- und
              Lebensstilreise, bevor Sie ein Zuhause in Spanien kaufen.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              Entdecken Sie die Regionen, den Lebensstil, die Fachleute und die
              Menschen, die Teil Ihres zukünftigen Lebens in Spanien werden
              könnten — bevor Sie eine Immobilienentscheidung treffen.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/de/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Buyer Discovery Trip anfragen
              </a>

              <a
                href="/de/regions"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Regionen entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EINLEITUNG */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Klarheit vor der Entscheidung
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Der Immobilienkauf in Spanien sollte niemals mit zufälligen
                Besichtigungen beginnen.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Bevor Sie sich für ein Zuhause entscheiden, müssen Sie die
                Region, den Lebensstil, den rechtlichen Ablauf, die Menschen,
                die Kosten und den spanischen Alltag verstehen.
              </p>

              <p className="mt-6">
                Unsere Buyer Discovery Trip ist eine sorgfältig
                zusammengestellte dreitägige Immobilien- und Lebensstilreise an
                der Costa Blanca Nord. Sie richtet sich an internationale
                Käufer, die Klarheit gewinnen möchten, bevor sie eine
                Immobilienentscheidung treffen.
              </p>

              <p className="mt-6">
                Dies ist keine gewöhnliche Besichtigungsreise. Es ist eine
                persönliche Einführung in die Regionen, vertrauenswürdige
                Fachleute, den Lebensstil und die Gemeinschaft, die Teil Ihres
                zukünftigen Lebens in Spanien werden könnten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZUERST LERNEN WIR SIE KENNEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Zuerst lernen wir Sie kennen
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Ihre Reise beginnt mit Ihrem Lebensstil und nicht mit
            Immobilienanzeigen.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Vor Ihrer Ankunft beginnen wir mit einem persönlichen Gespräch
                und einer Analyse Ihres gewünschten Lebensstils. Wir betrachten
                Ihre Ziele, Ihr Budget, Ihre familiäre Situation, Ihre
                täglichen Gewohnheiten, Interessen, Ihren bevorzugten
                Lebensstil, Ihre Umzugspläne und Ihre langfristigen
                Prioritäten.
              </p>

              <p className="mt-6">
                Erst nachdem wir Ihr Profil verstanden haben, erstellen wir
                Ihren persönlichen Reiseplan. So können wir uns auf Regionen
                konzentrieren, die wirklich zu Ihrem Leben passen, anstatt Zeit
                mit Orten zu verlieren, die online attraktiv wirken, aber in
                der Realität nicht zu Ihnen passen.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <p className="text-lg leading-relaxed text-stone-700">
                Suchen Sie eine ruhige Villa in der Nähe von Moraira? Einen
                geselligeren Lebensstil in Jávea? Eine elegante Umgebung bei
                Altea? Mehr Platz und Authentizität rund um Benissa?
                Strandapartments und Neubauprojekte in Calpe? Oder ein
                lebendiges Stadtleben während des ganzen Jahres in Dénia?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GLEICHGESINNTE MENSCHEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Reisen Sie mit gleichgesinnten Menschen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Lernen Sie Menschen kennen, die denselben Weg gehen wie Sie.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Abhängig von Ihren Wünschen kann Ihre Buyer Discovery Trip privat
              oder in einer sorgfältig zusammengestellten kleinen Gruppe
              organisiert werden.
            </p>

            <p className="mt-6">
              Wenn Sie an einer Gruppenreise teilnehmen, bringen wir Sie mit
              gleichgesinnten Käufern zusammen, die sich in einer ähnlichen
              Lebensphase befinden oder vergleichbare Ziele haben. Einige
              Kunden bevorzugen eine internationale Gruppe. Andere möchten
              lieber Käufer aus ihrem eigenen Land oder Sprachraum
              kennenlernen.
            </p>

            <p className="mt-6">
              Wir unterstützen regelmäßig deutsche, schweizerische,
              niederländische, belgische, britische, skandinavische und andere
              internationale Käufer, die eine Zukunft an der Costa Blanca Nord
              in Betracht ziehen.
            </p>

            <p className="mt-6">
              Viele Kunden erzählen uns, dass diese Begegnungen zu den
              wertvollsten Erinnerungen der Reise gehören. Ein gemeinsames
              Mittagessen, eine Aktivität oder ein ehrliches Gespräch kann der
              Beginn zukünftiger Freundschaften, hilfreicher Kontakte und eines
              stärkeren Zugehörigkeitsgefühls sein — noch bevor Sie nach
              Spanien umziehen.
            </p>
          </div>
        </div>
      </section>

      {/* ANKUNFT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Ab Ihrer Ankunft ist alles organisiert
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight">
            Sie kommen an und wir kümmern uns um die Details.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-3xl">Flughafentransfer</h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Sie kommen am Flughafen Alicante an. Ihr privater Transfer
                bringt Sie bequem zu Ihrem Hotel oder Resort.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Aufenthalt in einem 4- oder 5-Sterne-Hotel
              </h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Sie übernachten in einem unserer sorgfältig ausgewählten
                Boutique-Hotels oder 4- beziehungsweise 5-Sterne-Resorts.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">Persönlicher Empfang</h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Bei einem entspannten Empfang besprechen wir Ihre Ziele,
                beantworten Ihre ersten Fragen und erklären Ihnen den Ablauf
                der kommenden Tage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Entdecken Sie die echte Costa Blanca Nord
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Wir zeigen Ihnen mehr als nur die bekannten Touristengebiete.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Während der Buyer Discovery Trip erleben Sie die Regionen aus
              einer realistischen Alltagsperspektive. Wir besuchen die Orte,
              die für Ihren zukünftigen Lebensstil wichtig sind, und nicht nur
              die Orte, die in einer Broschüre gut aussehen.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Moraira</h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Ruhiges und elegantes Leben an der Küste mit Villen,
                versteckten Buchten und einer gehobenen Wohnatmosphäre.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Jávea</h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Ein lebendiger internationaler Lebensstil mit Stränden,
                Restaurants, Sportmöglichkeiten und Energie während des ganzen
                Jahres.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Altea</h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Kultur, Schönheit, Meerblick und mediterrane Eleganz in einer
                künstlerischen Umgebung.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Benissa</h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Platz, Privatsphäre, Authentizität, ländliches Wohnen und
                versteckte Buchten an der Küste.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Calpe</h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Leben direkt am Strand, Yachthafen, Apartments, Neubauprojekte
                und eine lebendigere Atmosphäre.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Dénia</h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Gastronomie, Hafenleben, tägliche Dienstleistungen und ein
                stärker ausgeprägtes Stadtleben während des ganzen Jahres.
              </p>
            </div>
          </div>

          <p className="mt-12 max-w-4xl text-lg leading-relaxed text-stone-600">
            Wir helfen Ihnen, die Unterschiede zwischen den einzelnen Regionen
            zu verstehen: Atmosphäre, Immobilientypen, Schulen,
            Gesundheitsversorgung, Fahrtzeiten, internationale Gemeinschaft,
            Restaurants, Sportmöglichkeiten, tägliche Dienstleistungen,
            Vermietungspotenzial und langfristige Alltagstauglichkeit.
          </p>
        </div>
      </section>

      {/* FACHLEUTE */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Treffen Sie die Fachleute, die Sie vor dem Kauf benötigen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Erhalten Sie Antworten, bevor Sie Entscheidungen treffen.
            </h2>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-stone-600">
              Während Ihrer Buyer Discovery Trip stellen wir Ihnen
              vertrauenswürdige unabhängige Fachleute und lokale Kontakte vor,
              die Ihnen helfen, die praktischen Schritte vor einer Entscheidung
              zu verstehen.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Unabhängiger Immobilienanwalt",
                "Spanischer Notar",
                "Hypothekenspezialist",
                "Bankkontakt",
                "Versicherungskontakt",
                "Lokaler Immobilienexperte",
                "Unterstützung beim Umzug, wenn relevant",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="font-medium text-[#1e2a3a]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Diese Gespräche sollen Ihnen Klarheit über den rechtlichen
              Prozess, Finanzierungsmöglichkeiten, Bankanforderungen,
              Versicherungen, Kaufnebenkosten, jährliche Eigentumskosten,
              Dokumente und häufige Fehler internationaler Käufer geben.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Sie können Ihre Fragen direkt stellen, verstehen, wer für welche
              Aufgabe verantwortlich ist, und erhalten ein klareres Bild davon,
              wie der Immobilienkauf in Spanien tatsächlich funktioniert.
            </p>
          </div>
        </div>
      </section>

      {/* LEBENSSTIL */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Erleben Sie den Lebensstil und nicht nur den Immobilienmarkt
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Eine Immobilie ist nur ein Teil der Entscheidung.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
            Sie müssen auch verstehen, wie sich Ihr Leben hier anfühlen könnte.
            Deshalb umfasst die Buyer Discovery Trip Lebensstilerlebnisse, die
            zu Ihren Interessen und der Region passen, die Sie erkunden.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Lokale Mittagessen und gehobene Gastronomie",
              "Weinverkostungen",
              "Golfclubs",
              "Beachclubs",
              "Yachthäfen und Marinas",
              "Wellness- und Spa-Erlebnisse",
              "Wander- und Naturrouten",
              "Kulturelle Besichtigungen",
              "Geschäftliche Kontakte und Networking",
              "Treffen mit der lokalen Gemeinschaft",
              "Aktivitäten mit gleichgesinnten zukünftigen Bewohnern",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                <p className="text-sm font-medium text-[#1e2a3a]">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
            Wir zeigen Ihnen keine allgemeine oder touristische Version
            Spaniens. Wir zeigen Ihnen die Seite der Costa Blanca Nord, die
            realistisch zu Ihrem Leben passen könnte.
          </p>
        </div>
      </section>

      {/* WAS WIR FÜR SIE TUN */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Was wir für Sie tun
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Wir begleiten, koordinieren und helfen Ihnen, eine bessere
              Entscheidung zu treffen.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Wir koordinieren das gesamte Erlebnis, begleiten Sie durch die
              Regionen und stellen Ihnen vertrauenswürdige unabhängige
              Fachleute vor. So können Sie fundierte Entscheidungen treffen,
              bevor Sie eine Immobilie in Spanien kaufen.
            </p>

            <p className="mt-6">
              Wir helfen Ihnen, Regionen zu vergleichen, praktische
              Unterschiede zu verstehen, die richtigen Fragen zu stellen und
              häufige Fehler zu vermeiden.
            </p>

            <p className="mt-6">
              Unsere Aufgabe besteht nicht darin, Sie zu einem Immobilienkauf
              zu drängen. Unsere Aufgabe ist es, Ihnen zu einer besseren
              Entscheidung zu verhelfen.
            </p>

            <p className="mt-6">
              Wenn eine Region nicht zu Ihrem Profil passt, sagen wir Ihnen das
              offen. Wenn ein Immobilientyp praktische, rechtliche oder
              lebensstilbezogene Risiken mit sich bringen könnte, helfen wir
              Ihnen, diese zu verstehen, bevor Sie sich festlegen.
            </p>
          </div>
        </div>
      </section>

      {/* INKLUSIVE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Was enthalten sein kann
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Ihre Buyer Discovery Trip kann alles umfassen, was Sie für eine
            klare erste Entscheidung benötigen.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Persönliches Gespräch vor Ihrer Ankunft",
              "Persönliches Lebensstil- und Regionenprofil",
              "Individuell zusammengestellter Reiseplan",
              "Flughafentransfer ab Alicante",
              "Aufenthalt in einem sorgfältig ausgewählten 4- oder 5-Sterne-Hotel oder Boutique-Resort",
              "Geführte Besichtigungen verschiedener Regionen an der Costa Blanca Nord",
              "Vorstellung bei vertrauenswürdigen Kontakten aus den Bereichen Recht, Hypotheken, Banken und Versicherungen",
              "Auf Ihre Interessen abgestimmte Lebensstilerlebnisse",
              "Privates oder kleines Gruppenformat entsprechend Ihren Wünschen",
              "Sorgfältig ausgewählte Begegnungen mit gleichgesinnten Käufern und zukünftigen Bewohnern",
              "Zeit für persönliche Fragen und Unterstützung bei Ihrer Entscheidung",
              "Klare nächste Schritte nach der Reise",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white/80 p-5">
                <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NACH DER REISE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Was Sie nach der Reise wissen werden
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Sie reisen nicht mit vagen Eindrücken ab. Sie reisen mit Klarheit
              ab.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Welche Regionen der Costa Blanca Nord zu Ihrem Lebensstil passen",
              "Welche Regionen weniger für Sie geeignet sind",
              "Welche Art von Immobilie zu Ihrem Budget und Ihren Zielen passt",
              "Wie der Kaufprozess in Spanien abläuft",
              "Welche rechtlichen und finanziellen Fragen Aufmerksamkeit benötigen",
              "Wie Ihr Alltag nach dem Kauf aussehen könnte",
              "Welche Fachleute Sie unterstützen können",
              "Teil welcher Gemeinschaft Sie werden könnten",
              "Ob Sie bereit sind, den nächsten Schritt zu gehen",
            ].map((item) => (
              <div key={item} className="rounded-[28px] bg-white p-7 shadow-sm">
                <p className="text-lg leading-relaxed text-stone-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FÜR WEN IST DIE REISE GEEIGNET */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Ist diese Reise für Sie geeignet?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Ideal für ernsthafte Käufer, die die Costa Blanca Nord verstehen
            möchten, bevor sie sich für eine Immobilie entscheiden.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Internationale Käufer, die die Costa Blanca Nord erkunden",
              "Deutsche, schweizerische, niederländische, belgische, britische, skandinavische und englischsprachige Käufer",
              "Familien, die einen Umzug nach Spanien erwägen",
              "Menschen im Ruhestand, die einen neuen Lebensstil planen",
              "Unternehmer und Menschen, die ortsunabhängig arbeiten",
              "Käufer einer Zweitwohnung",
              "Käufer, die Moraira, Jávea, Altea, Benissa, Calpe und Dénia miteinander vergleichen",
              "Kunden, die professionelle Begleitung wünschen, bevor sie mit ernsthaften Immobilienbesichtigungen beginnen",
              "Menschen, die vor ihrem Umzug gleichgesinnte zukünftige Bewohner kennenlernen möchten",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Buyer Discovery Trip anfragen
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Wenn Sie ernsthaft eine Immobilie in Spanien kaufen möchten, ist
            die wichtigste Entscheidung nicht das Haus.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Entscheidend sind die Region, der Lebensstil und die Unterstützung
            um Sie herum.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
            Fragen Sie Ihre Buyer Discovery Trip an und finden Sie heraus, ob
            die Costa Blanca Nord wirklich zu Ihrer Zukunft passt.
          </p>

          <a
            href="/de/contact"
            className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Buyer Discovery Trip anfragen
          </a>
        </div>
      </section>
    </main>
  );
}