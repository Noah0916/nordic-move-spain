export const metadata = {
  title: "Calpe | Nordic Move Spain",
  description:
    "Entdecken Sie Calpe an der nördlichen Costa Blanca: Leben direkt am Strand, Apartments, Neubauprojekte, Schulen, Lebensstil und Immobilienberatung für internationale Käufer.",
};

export default function CalpePage() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Calpe Costa Blanca Nord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Nord
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Calpe
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/90">
              Leben direkt am Strand, moderne Apartments, Marina-Leben und
              ikonische Ausblicke auf den Peñón de Ifach.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Calpe mit uns besprechen
              </a>

              <a
                href="/regions"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Zurück zu den Regionen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Direkt am Strand · Aktiv · Modern
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Calpe ist für Käufer geeignet, die Komfort, Meerblick und einen
                aktiveren Küstenlebensstil suchen.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Calpe ist eine der bekanntesten Städte an der nördlichen Costa
                Blanca, bekannt für den Peñón de Ifach, lange Strände,
                Marina-Leben, Restaurants und eine urbanere mediterrane
                Atmosphäre.
              </p>

              <p className="mt-6">
                Im Vergleich zu Moraira, Benissa oder Altea wirkt Calpe
                energiegeladener und praktischer. Es gibt mehr Apartmentleben,
                mehr Hochhäuser, mehr Optionen direkt am Strand und eine
                größere Auswahl an modernen Neubauprojekten.
              </p>

              <p className="mt-6">
                Das macht Calpe attraktiv für Käufer, die einfachen Zugang zum
                Strand, zu Restaurants, Geschäften, Dienstleistungen und
                vermietungsfreundlichen Lagen wünschen, ohne im Alltag zu stark
                auf ein Auto angewiesen zu sein.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Einwohnerzahl
            </p>

            <h3 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
              Rund 27.600
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Calpe ist größer und lebhafter als mehrere nahegelegene Orte und
              hat ein internationaleres, urbaneres Küstengefühl.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Bekannt für
            </p>

            <h3 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
              Peñón de Ifach
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Der ikonische Felsen erhebt sich über der Stadt und verleiht
              Calpe eine der markantesten Silhouetten an der Costa Blanca.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Immobilienart
            </p>

            <h3 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
              Apartments & Neubauten
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Calpe bietet mehr Apartments, moderne Gebäude und Immobilienlagen
              direkt am Strand als viele ruhigere Nachbarorte.
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT FITS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Für wen Calpe geeignet ist
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Calpe passt zu Menschen, die einen einfachen, sozialen und
            strandorientierten Lebensstil suchen.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Aktive Käufer
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Menschen, die Restaurants, Strände, Spazierwege, Sport,
                Marina-Leben und tägliche Aktivität in der Nähe haben möchten.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Jüngere Familien
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Familien, die praktische Dienstleistungen, Schulen, Zugang zum
                Strand und ein lebendigeres Umfeld als in kleineren Dörfern
                wünschen.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Apartmentkäufer
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Käufer, die moderne Apartments, pflegeleichte
                Lock-up-and-leave-Immobilien, Meerblick oder neuere
                Entwicklungen nahe der Küste suchen.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Vermietungsorientierte Eigentümer
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Eigentümer, denen Sichtbarkeit, Strandnähe, touristische
                Nachfrage und eine Lage wichtig sind, die für Gäste leicht zu
                verstehen ist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Was Calpe anders macht
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Calpe ist urbaner, sichtbarer und stärker von Apartments geprägt
              als viele Nachbargebiete.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Im Vergleich zu Moraira
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Moraira wirkt ruhiger, kleiner und stärker auf Villen
                ausgerichtet. Calpe ist lebhafter, urbaner und bietet mehr
                Apartments, Hochhäuser und Aktivitäten direkt am Strand.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Im Vergleich zu Jávea
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Jávea hat mehrere unterschiedliche Lebensbereiche und eine
                starke internationale Gemeinschaft. Calpe wirkt kompakter rund
                um Strand, Promenade, Stadtzentrum und Peñón.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Im Vergleich zu Benissa
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Benissa ist ruhiger, ländlicher und weitläufiger. Calpe ist
                praktischer, stärker entwickelt und besser geeignet für Käufer,
                die nah am Strand und an Dienstleistungen leben möchten.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Im Vergleich zu Altea
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Altea wirkt künstlerischer und eleganter. Calpe fühlt sich
                praktischer, strandorientierter und energiegeladener an, mit
                einer breiteren Mischung aus Touristen, Bewohnern und
                Apartmenteigentümern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOLS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Schulen & Familienleben
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Eine praktische Stadt für Familien, die Schulen,
              Dienstleistungen und Küstenleben nah beieinander haben möchten.
            </h2>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-stone-600">
              Calpe verfügt über mehrere lokale spanische Bildungsangebote,
              darunter Kindergärten, Grundschulen und weiterführende Schulen.
              Für internationale Familien bieten nahegelegene Orte an der
              nördlichen Costa Blanca außerdem private und internationale
              Schuloptionen in Fahrdistanz.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Lokale Schulen
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  Zu den lokalen Optionen gehören CEIP Azorín, CEIP Gabriel
                  Miró, CEIP Mediterrani, CEIP Oltà, IES Ifach und IES Les
                  Salines.
                </p>
              </div>

              <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Internationale Optionen
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  Familien vergleichen häufig internationale Schulen rund um
                  Benitachell, Jávea, Moraira, Altea und die weitere nördliche
                  Costa Blanca.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-stone-500">
              Vor der Wahl einer Immobilie sollten Familien Schulwege,
              Anmeldefristen, Sprachunterstützung und prüfen, ob der Alltag in
              Calpe zum Rhythmus des Kindes passt.
            </p>
          </div>
        </div>
      </section>

      {/* PROPERTY */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Immobilien in Calpe
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight">
            Calpe ist eine starke Option, wenn Strandzugang, Apartments und
            Komfort am wichtigsten sind.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-3xl">
                Apartments direkt am Strand
              </h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Geeignet für Käufer, die Meerblick, Zugang zur Promenade,
                einfache Instandhaltung und starke Attraktivität für
                Feriengäste wünschen.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Neubauprojekte
              </h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Calpe zieht häufig Käufer an, die moderne Grundrisse, Aufzüge,
                Terrassen, Pools, Parkplätze und pflegeleichtes Wohnen
                bevorzugen.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Villen & Häuser am Hang
              </h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Außerhalb der lebhaftesten Strandzonen finden Käufer auch
                Villen und Häuser am Hang mit Blick auf das Meer und den Peñón.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="mt-12 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Fragen Sie, ob Calpe zu Ihrem Profil passt
          </a>
        </div>
      </section>
    </main>
  );
}