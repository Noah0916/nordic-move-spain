export const metadata = {
  title: "Deutsche Immobilienratgeber Spanien | Nordic Move Spain",
  description:
    "Deutsche Ratgeber zum Immobilienkauf in Spanien: Kaufprozess, rechtliche Prüfung, häufige Fehler, Eigentümergemeinschaften, Idealista und Costa Blanca Nord.",
};

const guides = [
  {
    href: "/de/guides/immobilienkauf-spanien",
    label: "Immobilienkauf in Spanien",
    title: "Immobilie in Spanien kaufen",
    text:
      "Ein ausführlicher deutscher Ratgeber über Kaufnebenkosten, NIE-Nummer, rechtliche Prüfung, Finanzierung, Reservierung und den spanischen Notartermin.",
  },
  {
    href: "/de/guides/buying-property-spain",
    label: "Kaufprozess",
    title: "Der Kaufprozess einer Immobilie in Spanien",
    text:
      "Erfahren Sie Schritt für Schritt, wie eine Immobiliensuche, Besichtigung, Reservierung, rechtliche Kontrolle und Eigentumsübertragung in Spanien abläuft.",
  },
  {
    href: "/de/guides/eigentuemergemeinschaft-spanien",
    label: "Eigentümergemeinschaften",
    title: "Eigentümergemeinschaften in Spanien verstehen",
    text:
      "Was Käufer über Gemeinschaftskosten, Hausordnungen, Protokolle, Sonderumlagen, Renovierungen und Vermietungsregeln wissen sollten.",
  },
  {
    href: "/de/guides/fehler-immobilienkauf-spanien",
    label: "Häufige Käuferfehler",
    title: "Fehler beim Immobilienkauf in Spanien vermeiden",
    text:
      "Die häufigsten rechtlichen, finanziellen und praktischen Fehler internationaler Käufer und wie Sie unnötige Risiken frühzeitig erkennen.",
  },
  {
    href: "/de/guides/idealista-spanien-probleme",
    label: "Immobilienportale",
    title: "Idealista Spanien: Probleme und veraltete Anzeigen",
    text:
      "Warum Immobilienanzeigen veraltet, doppelt oder unvollständig sein können und wie Sie interessante Angebote vor einer Besichtigung richtig prüfen.",
  },
];

export default function DeutscheRatgeberPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="bg-[#1e2a3a] px-8 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Brotkrümelnavigation"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/65"
          >
            <a href="/de" className="transition hover:text-white">
              Startseite
            </a>

            <span aria-hidden="true">/</span>

            <span>Ratgeber</span>
          </nav>

          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Immobilienratgeber Spanien
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Deutsche Ratgeber für den Immobilienkauf in Spanien.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Praktische Informationen für deutsche und internationale Käufer,
            die ein Haus oder eine Wohnung an der Costa Blanca Nord kaufen
            möchten.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Gut vorbereitet kaufen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Wichtige Informationen vor Ihrer Immobilienentscheidung.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              Der Kauf einer Immobilie in Spanien unterscheidet sich in vielen
              Punkten vom Immobilienkauf in Deutschland. Rechtliche Prüfungen,
              Kaufnebenkosten, Gemeinschaftsregeln, Vermietungsvorschriften und
              regionale Unterschiede sollten früh berücksichtigt werden.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Unsere deutschen Immobilienratgeber helfen Ihnen, den spanischen
              Immobilienmarkt besser zu verstehen und wichtige Entscheidungen
              nicht ausschließlich auf Grundlage eines Portalinserats oder
              einer einzelnen Besichtigung zu treffen.
            </p>
          </div>
        </div>
      </section>

      {/* RATGEBERKAARTEN */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {guides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="group rounded-[34px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-11"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  {guide.label}
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  {guide.title}
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  {guide.text}
                </p>

                <span className="mt-9 inline-block text-sm uppercase tracking-[0.2em] text-[#1e2a3a]">
                  Ratgeber lesen →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WICHTIGE THEMEN */}
      <section className="bg-[#e9dfd2] px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              Immobilienkauf Costa Blanca Nord
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Worauf Käufer vor dem Kauf achten sollten.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <article>
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                Rechtliche Sicherheit
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                Unterlagen unabhängig prüfen
              </h3>

              <p className="mt-5 leading-relaxed text-stone-700">
                Eigentumsverhältnisse, Belastungen, Genehmigungen, Anbauten,
                Pools und offene Schulden sollten vor einer Unterschrift
                unabhängig kontrolliert werden.
              </p>
            </article>

            <article>
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                Kosten verstehen
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                Nicht nur den Kaufpreis betrachten
              </h3>

              <p className="mt-5 leading-relaxed text-stone-700">
                Berücksichtigen Sie Steuern, Notar, Grundbuch, rechtliche
                Beratung, Finanzierung, Gemeinschaftskosten, Versicherungen und
                laufenden Unterhalt.
              </p>
            </article>

            <article>
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                Die richtige Region
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                Alltag statt Urlaubsgefühl
              </h3>

              <p className="mt-5 leading-relaxed text-stone-700">
                Vergleichen Sie nicht nur Häuser, sondern auch Wohngebiete,
                Infrastruktur, Fahrtzeiten, Wintersonne, Lärm, Zufahrt und
                Erreichbarkeit.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-12 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Persönliche Orientierung
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight">
            Möchten Sie eine Immobilie an der Costa Blanca Nord kaufen?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Wir helfen Ihnen, geeignete Orte zu vergleichen, wichtige Risiken
            zu erkennen und den Immobilienkauf in Spanien besser vorzubereiten.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/de/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Persönliches Gespräch vereinbaren
            </a>

            <a
              href="/de"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Zurück zur Startseite
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}