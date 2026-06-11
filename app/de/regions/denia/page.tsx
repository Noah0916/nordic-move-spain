export const metadata = {
  title: "Dénia | Nordic Move Spain",
  description:
    "Entdecken Sie Dénia an der nördlichen Costa Blanca: Hafenleben, Gastronomie, Strände, Schulen, Wohnlagen und Umzugsberatung für internationale Käufer.",
};

export default function DeniaPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Dénia Costa Blanca Nord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Nord
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Dénia
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/90">
              Eine lebendige Hafenstadt mit Stränden, Restaurants,
              ganzjährigem Leben und starken Verbindungen zu den Balearen.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Dénia mit uns besprechen
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
                Hafen · Gastronomie · Ganzjähriges Leben
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Dénia ist ideal für Käufer, die das Leben an der Küste mit
                echter Stadtenergie verbinden möchten.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Dénia ist eine der vollständigsten Städte an der nördlichen
                Costa Blanca. Die Stadt bietet Strände, eine historische
                Altstadt, einen aktiven Hafen, Marina-Leben, Restaurants,
                Geschäfte, Dienstleistungen und das ganze Jahr über eine starke
                lokale Gemeinschaft.
              </p>

              <p className="mt-6">
                Im Vergleich zu kleineren Orten wie Moraira oder Benissa wirkt
                Dénia urbaner, praktischer und unabhängiger. Es ist nicht nur
                ein Urlaubsziel — es ist eine echte Stadt, in der Menschen
                leben, arbeiten, lernen und ihren Alltag gestalten.
              </p>

              <p className="mt-6">
                Für internationale Käufer kann Dénia eine starke Wahl sein,
                wenn Komfort, Gastronomie, Zugang zur Gesundheitsversorgung,
                Schulen, Strandleben und ganzjährige Aktivität wichtiger sind
                als eine ruhige Umgebung mit ausschließlich Villen.
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
              Rund 50.000
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Dénia ist größer und aktiver als viele nahegelegene Küstenorte,
              mit einem starken ganzjährigen Rhythmus.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Bekannt für
            </p>

            <h3 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
              Gastronomie & Hafen
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Dénia ist bekannt für seine Esskultur, roten Garnelen,
              Restaurants, den Fischereihafen, die Marina und die
              Fährverbindungen.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Küstenlinie
            </p>

            <h3 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
              Strände & Montgó
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Die Region verbindet lange Sandstrände, felsige Buchten, den
              Naturpark Montgó und den Zugang zum Meeresschutzgebiet Cabo San
              Antonio.
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT FITS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Für wen Dénia geeignet ist
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Dénia passt zu Menschen, die die Küste möchten, sich aber nicht
            isoliert fühlen wollen.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Ganzjährige Bewohner
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Käufer, die Geschäfte, Restaurants, Gesundheitsversorgung,
                Schulen und Dienstleistungen auch außerhalb der Sommersaison
                aktiv vorfinden möchten.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Feinschmecker
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Menschen, die Restaurants, Märkte, lokale Produkte, Meeresfrüchte
                und eine der stärksten gastronomischen Identitäten an der Küste
                schätzen.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Aktive Familien
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Familien, die Schulen, Sport, Strände, Natur und die
                Infrastruktur einer größeren Stadt in ihrer Nähe haben möchten.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Praktisch denkende Käufer
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Käufer, die Komfort, fußläufige Erreichbarkeit,
                Dienstleistungen und ein echtes Stadtzentrum einer rein ruhigen
                Wohnzone vorziehen.
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
              Was Dénia anders macht
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Dénia fühlt sich eher wie eine echte Küstenstadt an als wie ein
              kleines Feriendorf.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Im Vergleich zu Moraira
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Moraira ist kleiner, ruhiger und stärker auf Villen
                ausgerichtet. Dénia ist größer, praktischer und bietet ein
                stärkeres Stadtleben das ganze Jahr über.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Im Vergleich zu Jávea
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Jávea bietet einen starken internationalen Lebensstil und
                mehrere getrennte Zonen. Dénia wirkt eher wie eine vollständige
                funktionierende Stadt mit Hafen, Zentrum und langen
                Strandbereichen.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Im Vergleich zu Benissa
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Benissa ist ruhiger, ländlicher und weitläufiger. Dénia ist
                lebhafter, besser angebunden und besser geeignet für Käufer,
                die tägliche Annehmlichkeiten in der Nähe wünschen.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Im Vergleich zu Calpe
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Calpe ist stärker vom Strandresort- und Apartmentcharakter
                geprägt. Dénia hat eine breitere ganzjährige Identität mit
                Gastronomie, Hafenleben, historischen Straßen und stärkerer
                lokaler Infrastruktur.
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
              Dénia ist eine der praktischeren Optionen für Familien, die
              Dienstleistungen in der Nähe haben möchten.
            </h2>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-stone-600">
              Dénia bietet ein breiteres lokales Bildungsangebot als viele
              kleinere Küstenorte, einschließlich öffentlicher, privater und
              konzertierter Schuloptionen. Für internationale Familien ist
              Dénia daher eine Überlegung wert, wenn tägliche Schulwege und ein
              ganzjähriges Familienleben wichtig sind.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Lokale Schulen
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  Zu den lokalen Optionen gehören Schulen wie CEIP Pou de la
                  Muntanya, CEIP Les Vessanes, CEIP Cervantes, Scientia Dénia
                  und San Juan Bautista.
                </p>
              </div>

              <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Weiterführende & weitere Optionen
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  Familien können außerdem weiterführende Schulen in Dénia und
                  internationale Optionen in der weiteren Marina Alta und an der
                  nördlichen Costa Blanca vergleichen.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-stone-500">
              Vor der Wahl eines Hauses sollten Familien Fahrtzeiten,
              Einzugsbereiche, Sprachunterstützung, Anmeldefristen und prüfen,
              ob der Rhythmus der Stadt zum Alter und Lebensstil des Kindes
              passt.
            </p>
          </div>
        </div>
      </section>

      {/* PROPERTY */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Immobilien in Dénia
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight">
            Dénia funktioniert besonders gut, wenn Lebensstil, Infrastruktur
            und ganzjähriges Wohnen genauso wichtig sind wie die Immobilie.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-3xl">Wohnen im Stadtzentrum</h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Geeignet für Käufer, die Restaurants, Geschäfte, Märkte,
                Dienstleistungen und den Alltag fußläufig erreichen möchten.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">Strandbereiche</h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Dénia bietet lange Sandstrandzonen, die Familien,
                Zweitwohnsitzkäufer und vermietungsorientierte Eigentümer
                ansprechen.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Montgó & Häuser am Hang
              </h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Hanglagen können zu Käufern passen, die Aussicht, Privatsphäre
                und Natur wünschen, aber dennoch nah an Stadt und Küste bleiben
                möchten.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="mt-12 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Fragen Sie, ob Dénia zu Ihrem Profil passt
          </a>
        </div>
      </section>
    </main>
  );
}