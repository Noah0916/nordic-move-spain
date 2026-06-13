export const metadata = {
  title: "Über Nordic Move Spain | Strategische Immobilienbegleitung Costa Blanca Nord",
  description:
    "Lernen Sie Nordic Move Spain kennen. Strategische Immobilienbegleitung für niederländische, deutsche, schweizerische und internationale Käufer, die Klarheit, Sicherheit und vertrauensvolle Unterstützung vor dem Kauf an der nördlichen Costa Blanca wünschen.",
};

export default function AboutUsPage() {
  const differences = [
    {
      title: "Gebietsverständnis vor der Immobiliensuche",
      text:
        "Wir helfen Käufern zu verstehen, welche Orte, Wohnlagen und Lebensstile zu ihren langfristigen Zielen passen, bevor sie sich auf einzelne Immobilien konzentrieren.",
    },
    {
      title: "Strategische Entscheidungsbegleitung",
      text:
        "Unser Hintergrund in Strategie, Organisationsanalyse, operativer Exzellenz und Relocation ermöglicht es uns, Kunden mit Struktur und Klarheit durch komplexe Entscheidungen zu begleiten.",
    },
    {
      title: "Diskrete internationale Begleitung",
      text:
        "Wir unterstützen niederländische, deutsche, schweizerische, britische, skandinavische und andere internationale Käufer, die einen ruhigen, durchdachten und gut vorbereiteten Kaufprozess schätzen.",
    },
    {
      title: "Ein vollständiger Blick auf das Leben in Spanien",
      text:
        "Wir schauen über Quadratmeter und Meerblick hinaus. Lebensstil, Dienstleistungen, Zugang zur Gesundheitsversorgung, Eigentumskosten, Gemeinschaftsregeln und langfristige Alltagstauglichkeit sind alle wichtig.",
    },
  ];

  const confidenceSteps = [
    "Ihren Lebensstil, Ihre Prioritäten und langfristigen Pläne verstehen",
    "Die Regionen der nördlichen Costa Blanca vergleichen, bevor die Immobiliensuche beginnt",
    "Klare Fragen für rechtliche, finanzielle und praktische Prüfungen vorbereiten",
    "Buyer Discovery Trips rund um den echten Lebensstil-Fit organisieren",
    "Den Kaufprozess mit vertrauenswürdigen unabhängigen Fachleuten koordinieren",
    "Den Übergang in den Alltag nach dem Kauf unterstützen",
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Nordic Move Spain strategische Immobilienbegleitung an der Costa Blanca Nord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Über Nordic Move Spain
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[1] text-white md:text-7xl">
              Wir helfen internationalen Käufern, bessere Entscheidungen in
              Spanien zu treffen.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/90">
              Wir glauben, dass der Immobilienkauf im Ausland mit Klarheit,
              Verständnis für den Lebensstil und vertrauensvoller Begleitung
              beginnen sollte — nicht mit Immobilienportalen.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Unsere Mission
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Mehr als eine Immobilie finden.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
            Nordic Move Spain wurde für internationale Käufer gegründet, die
            Sicherheit, Klarheit und lokale Einblicke wünschen, bevor sie eine
            der wichtigsten Investitionen ihres Lebens tätigen.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
            Wir helfen Kunden, Regionen, Gemeinschaften, rechtliche Prozesse,
            praktische Realitäten und langfristige Lebensstilfragen zu
            verstehen, bevor sie sich für den Kauf einer Immobilie in Spanien
            entscheiden.
          </p>
        </div>
      </section>

      {/* WILLEKE */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[420px_1fr]">
          <img
            src="/images/willeke.png"
            alt="Willeke van Olst Gründerin von Nordic Move Spain"
            className="h-[620px] w-full rounded-[32px] object-cover shadow-xl"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Gründerin
            </p>

            <h2 className="mt-5 font-serif text-6xl leading-tight text-[#1e2a3a]">
              Willeke
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-700">
              Für viele Menschen beginnt der Immobilienkauf im Ausland mit der
              Suche nach dem richtigen Haus. In Wirklichkeit bestimmen jedoch
              oft die rechtlichen, praktischen und lifestylebezogenen
              Entscheidungen rund um den Kauf, ob ein Umzug langfristig
              erfolgreich wird.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Willeke verbindet praktische Relocation-Erfahrung mit einem
              akademischen Hintergrund in Marketing, Strategie und
              Organisationsanalyse. Sie hat einen Masterabschluss mit
              Spezialisierung in Marketing und Strategie und arbeitete zuvor
              als Hochschuldozentin, wo sie Studierende bei ihren
              Abschlussforschungsprojekten betreute und ihnen half, komplexe
              organisatorische und strategische Herausforderungen zu
              analysieren.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Durch die Arbeit mit Studierenden und Organisationen aus
              verschiedenen Branchen, darunter Bauwesen, Finanzdienstleistungen
              und professionelle Dienstleistungsunternehmen, entwickelte sie
              eine starke Fähigkeit, zugrunde liegende Probleme zu erkennen, die
              richtigen Fragen zu stellen und Klarheit in komplexe Situationen
              zu bringen. Dieser analytische Ansatz bildet bis heute den Kern
              ihrer Kundenbegleitung.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Neben ihrer akademischen Laufbahn gründete und leitete Willeke in
              den Niederlanden einen internationalen Relocation-Service, der
              Expats und internationale Fachkräfte bei Wohnungssuche,
              Administration, Bildung, Gesundheitsversorgung und den praktischen
              Realitäten des Ankommens in einem neuen Land unterstützte.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Da sie selbst auch an Renovierungs- und Immobilienprojekten
              beteiligt war, versteht sie, dass erfolgreicher Immobilienbesitz
              weit über die Transaktion hinausgeht. Heute verbindet sie
              strategisches Denken, Relocation-Expertise und lokale Einblicke,
              um Kunden zu helfen, informierte Entscheidungen mit Sicherheit zu
              treffen.
            </p>

            <blockquote className="mt-10 border-l-4 border-[#c8a063] pl-6 font-serif text-2xl italic text-[#1e2a3a]">
              "Meine Aufgabe ist es nicht, Immobilien zu verkaufen. Meine
              Aufgabe ist es, Ihnen zu helfen, bessere Entscheidungen zu
              treffen."
            </blockquote>
          </div>
        </div>
      </section>

      {/* SANTIAGO */}
      <section className="bg-white px-8 py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Mitgründer
            </p>

            <h2 className="mt-5 font-serif text-6xl leading-tight text-[#1e2a3a]">
              Santiago
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-700">
              Der Immobilienkauf im Ausland bedeutet weit mehr, als das
              richtige Zuhause zu finden. Er erfordert, unbekannte Systeme zu
              verstehen, komplexe Prozesse zu durchlaufen und Herausforderungen
              frühzeitig zu erkennen, bevor sie zu teuren Fehlern werden.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Santiago bringt umfassende Erfahrung in operativer Exzellenz,
              Geschäftstransformation und internationalem Projektmanagement
              mit. Im Laufe seiner Karriere arbeitete er mit Organisationen in
              Europa, Lateinamerika und Asien zusammen und half Teams, Prozesse
              zu verbessern, Transparenz zu erhöhen und bessere Ergebnisse zu
              erzielen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Sein Hintergrund umfasst die Leitung komplexer Projekte mit
              mehreren Beteiligten, die Koordination internationaler Teams und
              die Umsetzung praktischer Lösungen in dynamischen Umgebungen.
              Diese Erfahrung ermöglicht es ihm, Herausforderungen mit Struktur,
              Klarheit und starkem Fokus auf Umsetzung anzugehen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Ob bei der Bewertung von Abläufen, der Koordination von
              Fachleuten oder der Unterstützung von Kunden in unbekannten
              Systemen: Santiago konzentriert sich darauf, Komplexität zu
              vereinfachen und klare Wege nach vorne zu schaffen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Heute verbindet er operative Expertise, Projektleitung und lokales
              Wissen, um Kunden während einer der wichtigsten Entscheidungen
              ihres Lebens mit Sicherheit voranzubringen.
            </p>

            <blockquote className="mt-10 border-l-4 border-[#c8a063] pl-6 font-serif text-2xl italic text-[#1e2a3a]">
              "Komplexität in Klarheit verwandeln."
            </blockquote>
          </div>

          <img
            src="/images/santiago.png"
            alt="Santiago Mitgründer von Nordic Move Spain"
            className="h-[620px] w-full rounded-[32px] object-cover shadow-xl"
          />
        </div>
      </section>

      {/* WHY WE CREATED NORDIC MOVE SPAIN */}
      <section className="px-8 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Warum wir Nordic Move Spain gegründet haben
          </p>

          <h2 className="mt-6 font-serif text-6xl leading-tight text-[#1e2a3a]">
            Weil der Kauf im Ausland sich sicherer anfühlen sollte.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
            Zu viele Käufer beginnen mit Immobilienportalen und entdecken die
            wichtigen Fragen erst später. Welcher Ort passt wirklich zu Ihrem
            Lebensstil? Wie stark ist das Gesundheitssystem? Welche versteckten
            Kosten gibt es? Welche rechtlichen Risiken sollten vermieden werden?
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
            Nordic Move Spain wurde aufgebaut, um internationalen Käufern vor
            einer Entscheidung Klarheit zu geben. Durch unsere Area Match
            Assessments, Buyer Discovery Trips, Property Search & Purchase
            Coordination und unser Soft Landing Program helfen wir Kunden nicht
            nur zu verstehen, wo sie kaufen sollten, sondern auch, wie sie ein
            sinnvolles Leben in Spanien aufbauen können.
          </p>

          <p className="mx-auto mt-10 max-w-4xl font-serif text-3xl text-[#1e2a3a]">
            Sicherheit. Klarheit. Gemeinschaft.
          </p>
        </div>
      </section>

      {/* OUR DIFFERENCE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Der Unterschied von Nordic Move Spain
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Strategische Begleitung für Käufer, die eine ruhige, informierte
            und sichere Entscheidung treffen möchten.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {differences.map((item) => (
              <div key={item.title} className="rounded-[30px] bg-[#f6f1ea] p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
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

      {/* HOW WE CREATE CONFIDENCE */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Wie wir Sicherheit schaffen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Ein strukturierter Weg von der ersten Orientierung bis zum
              Zuhause-Gefühl.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Ernsthafte Käufer brauchen mehr als eine Liste verfügbarer
              Immobilien. Sie brauchen einen klaren Prozess, die richtigen
              Fragen, vertrauenswürdige lokale Einblicke und einen ruhigen Weg
              zu einer Entscheidung, die zu ihrem zukünftigen Leben passt.
            </p>
          </div>

          <div className="rounded-[40px] bg-[#1e2a3a] p-10 text-white shadow-sm">
            <div className="grid gap-5">
              {confidenceSteps.map((item, index) => (
                <div key={item} className="flex gap-5 rounded-2xl bg-white/10 p-5">
                  <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="leading-relaxed text-white/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISCERNING BUYERS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Für anspruchsvolle internationale Käufer
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Unsere Kunden schätzen Diskretion, Vorbereitung und ein tieferes
            Verständnis für das Leben in Spanien.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-700">
            <p>
              Viele unserer Kunden suchen nicht einfach nur eine Immobilie. Sie
              denken über einen zukünftigen Lebensstil, ein zweites Zuhause, den
              Ruhestand, eine Familienentscheidung oder eine langfristige
              Verbindung zu Spanien nach.
            </p>

            <p className="mt-6">
              Sie möchten verstehen, welche Gegend zu ihnen passt, welche
              Fragen vor Besichtigungen gestellt werden sollten, welche
              praktischen Details wichtig sind und wie sie mit Sicherheit
              vorangehen können.
            </p>

            <p className="mt-6">
              Genau hier wird unser strategischer und relocationbezogener
              Hintergrund wertvoll. Wir bringen Struktur in eine Entscheidung,
              die oft emotional, komplex und sehr persönlich ist.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Mit Klarheit beginnen
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Bevor Sie eine Immobilie wählen, verstehen Sie, welche Gegend
            wirklich zu Ihrem zukünftigen Leben passt.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Unser Area Match Assessment hilft Ihnen, Orte an der nördlichen
            Costa Blanca anhand von Lebensstil, Budget, Dienstleistungen,
            langfristigen Plänen und praktischen Prioritäten zu vergleichen.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/de/services/area-match"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Ihren Area Match anfragen
            </a>

            <a
              href="/de/guides"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Unsere Käufer-Ratgeber lesen
            </a>

            <a
              href="/de/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Einführungsgespräch planen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}