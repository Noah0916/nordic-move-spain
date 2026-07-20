const faqItems = [
  {
    question:
      "Kann ich meinen Hund oder meine Katze aus einem anderen EU-Land mit nach Spanien nehmen?",
    answer:
      "Ja. Hunde, Katzen und Frettchen, die aus einem anderen EU-Land nach Spanien reisen, benötigen normalerweise einen lesbaren Mikrochip, eine gültige Tollwutimpfung und einen EU-Heimtierausweis. Der Mikrochip muss vor oder spätestens gleichzeitig mit der Tollwutimpfung eingesetzt worden sein.",
  },
  {
    question:
      "Wie alt muss ein Welpe oder Kätzchen für die Einreise nach Spanien sein?",
    answer:
      "Spanien akzeptiert keine ungeimpften Hunde, Katzen oder Frettchen. Die erste Tollwutimpfung kann normalerweise ab einem Alter von 12 Wochen erfolgen; anschließend gilt eine Wartezeit von mindestens 21 Tagen. Das übliche Mindestalter für die Einreise beträgt daher 15 Wochen.",
  },
  {
    question:
      "Was benötige ich bei der Einreise aus England, Schottland oder Wales?",
    answer:
      "Beachten Sie das jeweils aktuelle GOV.UK-Verfahren für Reisen mit Haustieren. Ihr Tier muss gechippt und gegen Tollwut geimpft sein. Für die Einreise in die EU benötigen Sie normalerweise ein Animal Health Certificate, das von einem dazu berechtigten Tierarzt ausgestellt wird. Prüfen Sie die offiziellen Vorschriften immer erneut, bevor Sie buchen.",
  },
  {
    question: "Darf mein Haustier in der Flugzeugkabine mitreisen?",
    answer:
      "Möglicherweise. Jede Fluggesellschaft legt eigene Maße für Transportboxen, Gewichtsbeschränkungen, Streckenregeln und Gebühren fest. Die Anzahl der Haustierplätze in der Kabine ist begrenzt. Kontaktieren Sie daher die Airline, bevor Sie ein nicht erstattungsfähiges Ticket kaufen.",
  },
  {
    question: "Muss ich meinen Hund nach dem Umzug nach Spanien registrieren?",
    answer:
      "Nach der Ankunft gelten lokale und regionale Vorschriften. Ein spanischer Tierarzt kann den Mikrochip, die Gesundheitsunterlagen und die örtlichen Registrierungspflichten prüfen. Manche Gemeinden verlangen zusätzlich die Eintragung in ein kommunales Haustierregister. Informieren Sie sich bei der Gemeinde Ihres künftigen Wohnorts.",
  },
  {
    question: "Sind Hunde an spanischen Stränden und in Restaurants erlaubt?",
    answer:
      "Die Regeln unterscheiden sich je nach Gemeinde, Strand, Jahreszeit und Betrieb. Einige Orte haben ausgewiesene Hundestrände oder erlauben den Zugang nur saisonal. Viele Restaurants gestatten Hunde auf Außenterrassen. Prüfen Sie lokale Hinweisschilder und Gemeindevorschriften, statt davon auszugehen, dass der Zugang erlaubt ist.",
  },
  {
    question: "Gelten für bestimmte Hunde zusätzliche Vorschriften?",
    answer:
      "Ja. Für Hunde, die als potenziell gefährlich eingestuft werden, können eine kommunale Genehmigung, Registrierung, Haftpflichtversicherung und besondere Auflagen gelten, etwa Maulkorbpflicht und eine kurze, nicht ausziehbare Leine im öffentlichen Raum. Rasse- und Einstufungsregeln können sich zudem örtlich unterscheiden.",
  },
];

const officialSources = [
  {
    title:
      "Spanisches Landwirtschaftsministerium — Reisen mit Hunden, Katzen und Frettchen",
    href: "https://www.mapa.gob.es/es/ganaderia/temas/comercio-exterior-ganadero/desplazamiento-animales-compania/viajar-perros-gatos-hurones",
  },
  {
    title: "Your Europe — EU-Vorschriften für Reisen mit Haustieren",
    href: "https://europa.eu/youreurope/citizens/travel/carry/pets-and-other-animals/index_de.htm",
  },
  {
    title: "GOV.UK — Mitnahme eines Haustiers in ein EU-Land",
    href: "https://www.gov.uk/taking-your-pet-abroad",
  },
  {
    title: "Aena — Fliegen mit Hunden, Katzen und Frettchen",
    href: "https://www.aena.es/en/passengers/travellers/travelling-with-animals/dogs-cats-ferrets.html",
  },
];

export const metadata = {
  title:
    "Mit Haustieren nach Spanien umziehen: Hunde, Katzen & Einreisebestimmungen",
  description:
    "Praktischer Leitfaden für den Umzug nach Spanien mit Haustieren. Erfahren Sie mehr über Mikrochip, Tollwutimpfung, EU-Heimtierausweis, Animal Health Certificate, Flugreisen, Registrierung und das Leben mit Hund oder Katze an der Costa Blanca.",
  keywords: [
    "mit Haustieren nach Spanien umziehen",
    "Hund nach Spanien mitnehmen",
    "Katze nach Spanien mitnehmen",
    "Einreisebestimmungen Haustiere Spanien",
    "EU-Heimtierausweis Spanien",
    "Animal Health Certificate Spanien",
    "mit Hund an die Costa Blanca ziehen",
    "hundefreundliche Costa Blanca",
    "Umzug nach Spanien mit Haustieren",
    "mit Haustieren nach Spanien fliegen",
  ],
  alternates: {
    canonical: "/de/pets-in-spain",
  },
  openGraph: {
    title: "Mit Haustieren nach Spanien umziehen | Nordic Move Spain",
    description:
      "Alles, was internationale Käufer und zukünftige Bewohner über die Einreise mit Hund, Katze oder Frettchen und das Leben an der Costa Blanca wissen sollten.",
    type: "article",
    locale: "de_DE",
    siteName: "Nordic Move Spain",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mit Haustieren nach Spanien umziehen",
    description:
      "Mikrochip, Tollwutimpfung, Reisedokumente, Flüge, Registrierung und Alltag mit Haustieren in Spanien.",
  },
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
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Mit Haustieren nach Spanien umziehen: Hunde, Katzen und Einreisebestimmungen",
      description:
        "Praktischer Leitfaden zu Reisedokumenten, Einreisebestimmungen und dem Einleben in Spanien mit Hund, Katze oder Frettchen.",
      inLanguage: "de-DE",
      author: {
        "@type": "Organization",
        name: "Nordic Move Spain",
      },
      publisher: {
        "@type": "Organization",
        name: "Nordic Move Spain",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "/de/pets-in-spain",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function HaustiereInSpanienRatgeber() {
  return (
    <main className="overflow-hidden bg-[#f6f1ea] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#1e2a3a] px-8 py-28 text-white md:py-36">
        <div className="absolute inset-0 -z-10 opacity-25">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#c8a063] blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d9ae69]">
            Praktischer Relocation-Ratgeber
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.98] md:text-7xl">
            Mit Ihrem Haustier nach Spanien umziehen.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/85">
            Von Mikrochip und Tollwutimpfung über Flugreisen und lokale
            Tierärzte bis zur haustierfreundlichen Immobilie: Dieser Leitfaden
            erklärt die praktischen Schritte für den Umzug nach Spanien mit
            Hund, Katze oder Frettchen.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#reise-checkliste"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Reise-Checkliste ansehen
            </a>

            <a
              href="/de/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Besprechen Sie Ihren Umzug
            </a>
          </div>
        </div>
      </section>

      {/* EINLEITUNG */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Frühzeitig beginnen
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Die Formalitäten sind gut zu bewältigen, wenn Sie sie in der
              richtigen Reihenfolge vorbereiten.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-stone-600">
            <p>
              Haustiere sind in Spanien willkommen. Die Vorschriften hängen
              jedoch davon ab, aus welchem Land Sie einreisen, um welche Tierart
              es sich handelt, wie alt das Tier ist und ob es sich um einen
              privaten Umzug oder einen gewerblichen Transport handelt. Für
              Hunde, Katzen und Frettchen gelten harmonisierte EU-Vorschriften.
            </p>

            <p>
              Am sichersten ist es, vor der Buchung mit Ihrem Tierarzt zu
              sprechen. Prüfen Sie zuerst die Mikrochipnummer, das Datum der
              Tollwutimpfung und das erforderliche Reisedokument. Kontrollieren
              Sie anschließend separat die Bedingungen der Airline,
              Fährgesellschaft oder Reiseroute.
            </p>

            <p>
              Dieser Leitfaden konzentriert sich auf nicht gewerbliche Reisen
              mit höchstens fünf Hunden, Katzen oder Frettchen. Für Vögel,
              Kaninchen, Reptilien und andere Tierarten gelten abweichende
              Vorschriften, die Sie bei den spanischen Behörden prüfen sollten.
            </p>
          </div>
        </div>
      </section>

      {/* SCHNELLÜBERSICHT */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Aus der EU",
                title: "EU-Heimtierausweis",
                text:
                  "Ihr Haustier benötigt normalerweise einen lesbaren Mikrochip, eine gültige Tollwutimpfung und einen korrekt ausgefüllten EU-Heimtierausweis.",
              },
              {
                label: "Aus Großbritannien",
                title: "Animal Health Certificate",
                text:
                  "Reisende aus England, Schottland und Wales sollten die aktuellen GOV.UK-Vorgaben beachten und normalerweise vor der Einreise in die EU ein Animal Health Certificate beantragen.",
              },
              {
                label: "Aus anderen Nicht-EU-Ländern",
                title: "Länderkategorie prüfen",
                text:
                  "Möglicherweise sind ein amtliches Gesundheitszeugnis und die Einreise über einen zugelassenen Einreiseort erforderlich. Bei einigen Herkunftsländern sind zusätzlich ein Tollwut-Antikörpertest und weitere Wartezeiten vorgeschrieben.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[32px] bg-white p-8 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  {item.label}
                </p>

                <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLISTE */}
      <section id="reise-checkliste" className="px-8 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="bg-[#1e2a3a] p-10 text-white md:p-14">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Vor der Reise
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Ihre wichtigste Checkliste für die Reise mit Haustier.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-white/75">
                Erfüllen Sie die Gesundheits- und Identitätsanforderungen, bevor
                Sie eine nicht erstattungsfähige Reise verbindlich buchen. Die
                Reihenfolge ist wichtig: Der Mikrochip muss registriert sein,
                bevor die erste Tollwutimpfung für die Reise als gültig gilt.
              </p>
            </div>

            <div className="p-10 md:p-14">
              <div className="grid gap-5 md:grid-cols-2">
                {[
                  [
                    "1. Mikrochip prüfen",
                    "Bitten Sie Ihren Tierarzt, den Chip zu scannen, die Nummer zu bestätigen und sicherzustellen, dass in allen Reisedokumenten dieselbe Nummer steht.",
                  ],
                  [
                    "2. Tollwutschutz bestätigen",
                    "Die Impfung muss am Reisetag gültig sein. Nach der ersten Impfung gilt normalerweise eine Wartezeit von mindestens 21 Tagen.",
                  ],
                  [
                    "3. Das richtige Dokument organisieren",
                    "Verwenden Sie für entsprechende Reisen innerhalb der EU einen EU-Heimtierausweis oder bei Einreise aus einem Nicht-EU-Land das vorgeschriebene amtliche Gesundheitszeugnis.",
                  ],
                  [
                    "4. Reiseroute prüfen",
                    "Prüfen Sie den zugelassenen Einreiseort, die Vorgaben von Airline oder Fähre, die Maße der Transportbox, mögliche Temperaturbeschränkungen und die Check-in-Zeit.",
                  ],
                  [
                    "5. Originaldokumente mitführen",
                    "Führen Sie die Originaldokumente, Impfunterlagen, Eigentümerdaten und gegebenenfalls eine schriftliche Vollmacht mit, wenn eine andere Person das Tier begleitet.",
                  ],
                  [
                    "6. Rückreise einplanen",
                    "Für die Rückreise können andere Regeln gelten. Prüfen Sie diese vor der Abreise, besonders bei einer Rückkehr nach Großbritannien oder einer Weiterreise.",
                  ],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-[24px] bg-[#f6f1ea] p-6"
                  >
                    <h3 className="font-serif text-2xl text-[#1e2a3a]">
                      {title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-stone-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EU-REGELN */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Einreise aus der EU
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Mikrochip, Tollwutimpfung und EU-Heimtierausweis.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-stone-600">
            <p>
              Für die Einreise eines Hundes, einer Katze oder eines Frettchens
              aus einem anderen EU-Land sind die wichtigsten Voraussetzungen ein
              Mikrochip, eine gültige Tollwutimpfung und ein von einem
              berechtigten Tierarzt ausgefüllter EU-Heimtierausweis.
            </p>

            <p>
              Spanien sieht keine Ausnahme für ungeimpfte junge Hunde, Katzen
              oder Frettchen vor. Für die erste Tollwutimpfung muss das Tier
              normalerweise mindestens 12 Wochen alt sein. Danach gilt eine
              Wartezeit von mindestens 21 Tagen. Das übliche Mindestalter bei
              der Einreise beträgt daher 15 Wochen.
            </p>

            <p>
              Private Reisen mit Haustieren umfassen normalerweise höchstens fünf
              Tiere und dürfen nicht mit einem Verkauf oder Eigentümerwechsel
              verbunden sein. Der Eigentümer oder eine bevollmächtigte Person
              sollte das Tier begleiten. Bei einer getrennten Reise gelten
              zusätzliche Dokumentations- und Zeitvorgaben.
            </p>
          </div>
        </div>
      </section>

      {/* GROSSBRITANNIEN UND NICHT-EU */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <article className="rounded-[36px] bg-[#e9dfd2] p-10 md:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
              England, Schottland und Wales
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
              Planen Sie ausreichend Zeit für das Animal Health Certificate ein.
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-stone-700">
              Ihr Haustier muss gechippt und gegen Tollwut geimpft sein. Nach
              den aktuellen GOV.UK-Hinweisen sollten Einwohner Großbritanniens
              für Reisen in die EU ein Animal Health Certificate beantragen.
              Das Dokument ist nur begrenzt gültig. Legen Sie den Tierarzttermin
              daher passend zu Ihrem bestätigten Reisedatum.
            </p>

            <p className="mt-5 leading-relaxed text-stone-600">
              Für Nordirland gilt ein anderes Verfahren. Verwenden Sie immer die
              offiziellen Vorgaben für den Ort, von dem aus Sie reisen.
            </p>
          </article>

          <article className="rounded-[36px] bg-white p-10 shadow-sm md:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
              Andere Nicht-EU-Länder
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
              Das Abreiseland bestimmt die zusätzlichen Schritte.
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-stone-700">
              Möglicherweise benötigen Sie ein amtliches Gesundheitszeugnis,
              eine schriftliche Erklärung und die Einreise über einen
              zugelassenen Einreiseort. Ist das Abreiseland nicht in der
              maßgeblichen EU-Liste aufgeführt, kann zusätzlich ein
              Tollwut-Antikörpertest erforderlich sein.
            </p>

            <p className="mt-5 leading-relaxed text-stone-600">
              Wenn ein Tollwut-Antikörpertest erforderlich ist, gelten strenge
              Fristen für Impfung, Blutentnahme und Wartezeit. Beginnen Sie
              mehrere Monate vor dem geplanten Umzug und lassen Sie sich die
              aktuelle Einstufung Ihres Herkunftslandes von den spanischen
              Behörden bestätigen.
            </p>
          </article>
        </div>
      </section>

      {/* TRANSPORT */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Die passende Reiseart wählen
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Mit dem Flugzeug, Auto oder der Fähre nach Spanien.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Mit dem Flugzeug",
                text:
                  "Die Fluggesellschaft entscheidet, ob Haustiere in der Kabine oder im Frachtraum reisen. Gewichtslimits, Boxengrößen, Rassebeschränkungen und saisonale Hitzeregeln unterscheiden sich. Reservieren Sie den Tierplatz, bevor Sie Ihr eigenes Ticket endgültig buchen.",
              },
              {
                title: "Mit dem Auto",
                text:
                  "Planen Sie regelmäßige Wasser- und Ruhepausen, sichern Sie das Tier ordnungsgemäß und lassen Sie es niemals in einem geparkten Fahrzeug zurück. Prüfen Sie die Einreisebestimmungen für Haustiere in jedem Land entlang der Route, nicht nur in Spanien.",
              },
              {
                title: "Mit der Fähre",
                text:
                  "Haustierkabinen, Zwinger und Zugangsregeln zu den Decks unterscheiden sich je nach Schiff. Prüfen Sie, ob Ihr Tier bei Ihnen bleiben darf, welche Ausrüstung erforderlich ist und wo Bewegungspausen erlaubt sind.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] border border-stone-200 bg-white p-8"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NACH DER ANKUNFT */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-10 md:p-14 lg:p-16">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Nach der Ankunft
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Helfen Sie Ihrem Haustier, sich in Spanien einzuleben.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                Vereinbaren Sie kurz nach dem Umzug einen Termin bei einem
                lokalen Tierarzt. Er kann den Mikrochip scannen, Impfungen und
                Parasitenvorsorge prüfen, regionale Registrierungspflichten
                erklären und bei Bedarf die Unterlagen des Tieres übertragen.
              </p>

              <p>
                Die kommunalen Vorschriften unterscheiden sich. Alicante
                verlangt beispielsweise, dass Hunde, die sich mehr als drei
                Monate pro Jahr in der Stadt aufhalten, in das kommunale
                Haustierregister eingetragen werden. Prüfen Sie die Vorschriften
                Ihrer tatsächlichen Wohngemeinde.
              </p>

              <p>
                Gewöhnen Sie Ihr Tier schrittweise an den neuen Alltag. Die
                Sommerhitze verändert geeignete Spazierzeiten, Oberflächen
                können sehr heiß werden und die Zugangsregeln für Strände,
                Parks, Verkehrsmittel und gemeinschaftliche Wohnbereiche
                unterscheiden sich örtlich.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Lokaler Tierarzt",
                "Wählen Sie eine Tierklinik, bevor Sie dringend Hilfe benötigen.",
              ],
              [
                "Mikrochipdaten",
                "Halten Sie Ihre spanische Adresse und Telefonnummer aktuell.",
              ],
              [
                "Haus und Garten",
                "Prüfen Sie Schattenplätze, Einzäunung, Balkone und die Sicherheit im Außenbereich.",
              ],
              [
                "Örtliche Regeln",
                "Prüfen Sie Leinenpflicht, Strände, Parks, Verkehrsmittel und Registrierung.",
              ],
            ].map(([title, description]) => (
              <div key={title} className="rounded-[24px] bg-white/80 p-6">
                <h3 className="font-serif text-2xl text-[#1e2a3a]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HAUSTIERFREUNDLICHE IMMOBILIE */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Eine haustierfreundliche Immobilie finden
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Die richtige Immobilie sollte auch zum Alltag Ihres Haustiers
              passen.
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-stone-600">
              Eine schöne Villa oder Wohnung ist nicht automatisch praktisch
              für einen Hund oder eine Katze. Achten Sie auf die umliegenden
              Straßen, Spazierwege, Grundstücksgrenzen, Treppen, Aufzugzugang,
              Balkonsicherheit, Schatten und die Entfernung zu einer
              Tierarztpraxis.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              Prüfen Sie bei einer Wohnanlage vor dem Kauf oder der Anmietung die
              Gemeinschaftsordnung. Bei einer ländlichen Immobilie sollten Sie
              Einzäunung, Zufahrt, nahegelegenes Vieh und die Erreichbarkeit der
              täglichen Versorgung kontrollieren.
            </p>

            <a
              href="/de/regions"
              className="mt-9 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
            >
              Regionen der Costa Blanca entdecken
            </a>
          </div>

          <div className="rounded-[36px] bg-[#1e2a3a] p-10 text-white md:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
              Ergänzen Sie Ihre Immobilien-Checkliste
            </p>

            <ul className="mt-8 space-y-4 text-lg leading-relaxed text-white/80">
              {[
                "Sichere Grundstücksgrenzen und Tore",
                "Schatten und kühle Innenbereiche",
                "Gut begehbare Umgebung abseits starken Verkehrs",
                "Praktische Böden, Treppen, Aufzüge und Eingänge",
                "Gemeinschaftsregeln für Haustiere in Wohnanlagen",
                "Tierarztpraxis und Notfallversorgung in der Nähe",
                "Zugang zu Parks, Wegen oder erlaubten Hundebereichen",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c8a063]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BESONDERE HUNDEREGELN */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-amber-900/10 bg-amber-50 p-10 md:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-800">
            Wichtig für bestimmte Hundehalter
          </p>

          <h2 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
            Prüfen Sie vor dem Umzug die Vorschriften für potenziell gefährliche
            Hunde.
          </h2>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-stone-700">
            In Spanien gelten zusätzliche Vorschriften für Hunde, die als
            potenziell gefährlich eingestuft werden. Je nach Hund und Gemeinde
            können dazu eine örtliche Genehmigung, Registrierung,
            Haftpflichtversicherung und verpflichtende Maßnahmen im öffentlichen
            Raum gehören. Verlassen Sie sich nicht allein auf die
            Rassebezeichnung: Auch Kreuzungen, körperliche Merkmale und früheres
            Verhalten können relevant sein. Klären Sie die Anforderungen vor der
            Ankunft mit der Gemeinde.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Häufig gestellte Fragen
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Was Menschen vor dem Umzug nach Spanien mit einem Haustier wissen
            möchten.
          </h2>

          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[24px] bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none pr-8 font-serif text-2xl text-[#1e2a3a]">
                  {item.question}
                </summary>

                <p className="mt-4 max-w-4xl leading-relaxed text-stone-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* OFFIZIELLE QUELLEN */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
            Prüfen Sie vor der Reise die offiziellen Vorschriften
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Vorschriften für Reisen mit Haustieren, Listen zugelassener
            Einreiseorte und Bedingungen der Fluggesellschaften können sich
            ändern. Prüfen Sie die offiziellen Quellen kurz vor der Abreise
            erneut und lassen Sie Ihren Tierarzt bestätigen, dass die Unterlagen
            genau zu Ihrer Reise passen.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {officialSources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[20px] border border-stone-200 p-5 text-sm font-medium text-[#1e2a3a] transition hover:border-[#c8a063]"
              >
                {source.title} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Mit mehr Sicherheit umziehen
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Finden Sie ein Zuhause, das zu Ihnen und Ihrem Haustier passt.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/80">
            Nordic Move hilft internationalen Käufern, Regionen zu vergleichen,
            passende Immobilien auszuwählen und den gesamten Weg von der ersten
            Orientierung bis zur Ankunft an der Costa Blanca zu koordinieren.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/de/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Kennenlerngespräch vereinbaren
            </a>

            <a
              href="/de/guides"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Alle Kaufratgeber ansehen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}