export default function AlteaPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">

      {/* HERO */}
      <section className="relative flex h-[65vh] items-center justify-center overflow-hidden">

        <img
          src="/images/altea.jpg"
          alt="Altea Costa Blanca Nord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-4xl px-8 text-center text-white">

          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Costa Blanca Nord
          </p>

          <h1 className="mt-6 font-serif text-6xl leading-tight md:text-7xl">
            Leben in Altea
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-white/90">
            Künstlerisches mediterranes Wohnen mit Boutique-Atmosphäre, Meerblick und einem eleganteren, kulturelleren Lebensstil.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="px-8 py-24">

        <div className="mx-auto max-w-5xl">

          <h2 className="font-serif text-5xl leading-tight">
            Ist Altea der richtige Ort für Sie?
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Altea ist eine der visuell schönsten und charmantesten Städte an der nördlichen Costa Blanca. Bekannt für seine weiß getünchte Altstadt, künstlerische Atmosphäre und elegante Küstenlinie zieht Altea Käufer an, die Authentizität, Kultur und mediterranen Lebensstil suchen statt Massentourismus.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Im Vergleich zu Jávea wirkt Altea ruhiger, exklusiver und anspruchsvoller. Im Vergleich zu Moraira bietet es eine etwas kulturellere und kreativere Atmosphäre mit Galerien, Restaurants, Cafés und Marina-Lifestyle.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Die Gegend zieht internationale Ruheständler, Zweitwohnsitzbesitzer, Künstler, Unternehmer und lifestyle-orientierte Käufer an, die Ästhetik, Meerblick und einen langsameren mediterranen Rhythmus schätzen.
          </p>

        </div>

      </section>

      {/* LIFESTYLE BLOCKS */}
      <section className="px-8 pb-24">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">

          {[
            {
              title: "Am besten für",
              text: "Lifestyle-Käufer, Ruheständler, Kreative, Unternehmer und internationale Käufer, die Schönheit, Kultur und entspanntes mediterranes Wohnen suchen.",
            },

            {
              title: "Lebensstil",
              text: "Boutique-artig, künstlerisch und elegant mit Cafés, Galerien, Marina-Leben und schönen Restaurants mit Meerblick.",
            },

            {
              title: "Immobilientypen",
              text: "Luxusvillen, Häuser am Hang mit Meerblick, moderne Apartments, Penthouses und exklusive geschlossene Wohnanlagen.",
            },

            {
              title: "Strand oder Hanglage",
              text: "Einige Käufer bevorzugen fußläufigen Zugang zur Promenade und Marina, während andere erhöht gelegene Villen mit Meerblick in den Hügeln priorisieren.",
            },

            {
              title: "Gemeinschaft",
              text: "Starke internationale Gemeinschaft mit niederländischen, deutschen, belgischen, skandinavischen und spanischen Bewohnern.",
            },

            {
              title: "Atmosphäre",
              text: "Elegant, ruhig und anspruchsvoller als viele größere Küstenorte an der Costa Blanca.",
            },

          ].map((item) => (

            <div
              key={item.title}
              className="rounded-[28px] bg-white p-10 shadow-sm"
            >

              <h3 className="font-serif text-3xl">
                {item.title}
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-stone-600">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* DAILY LIFE */}
      <section className="bg-white px-8 py-24">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Alltag in Altea
          </p>

          <h2 className="mt-4 font-serif text-5xl leading-tight">
            Wie sieht der Alltag in Altea wirklich aus?
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">

            <div>

              <h3 className="font-serif text-3xl">
                Internationaler Lebensstil
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Altea zieht eine etablierte internationale Gemeinschaft an, darunter deutsche, niederländische, belgische, skandinavische und spanische Bewohner. Die Atmosphäre wirkt ruhiger und eleganter als in belebteren Touristenzielen.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Viele Bewohner wählen Altea wegen seiner Ästhetik, Kultur, Architektur und seines langsameren mediterranen Rhythmus.
              </p>

            </div>

            <div>

              <h3 className="font-serif text-3xl">
                Restaurants & Marina-Lifestyle
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Altea bietet stilvolle Restaurants, Boutique-Cafés, Dachterrassen und elegante Marina-Bereiche. Im Vergleich zu Moraira wirkt die Restaurantszene etwas künstlerischer und anspruchsvoller.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Die Promenade und der Marina-Bereich sind besonders beliebt bei Käufern, die Lifestyle, Gastronomie und fußläufige Erreichbarkeit suchen.
              </p>

            </div>

            <div>

              <h3 className="font-serif text-3xl">
                Gesundheitsversorgung & praktisches Leben
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Die Region bietet ausgezeichnete praktische Lebensbedingungen mit nahegelegenen internationalen Kliniken, Supermärkten, Fitnessstudios und mehrsprachigen Gesundheitsdienstleistern.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Altea ist attraktiv für dauerhafte Bewohner ebenso wie für Zweitwohnsitzbesitzer, die Komfort mit mediterranem Charme verbinden möchten.
              </p>

            </div>

            <div>

              <h3 className="font-serif text-3xl">
                Lebenshaltungskosten
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Die alltäglichen Lebenshaltungskosten bleiben niedriger als in den meisten nordeuropäischen Ländern, obwohl Premium-Immobilien mit Meerblick und Luxuslagen teuer sein können.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Käufer entscheiden sich in der Regel eher wegen der Lebensqualität und Atmosphäre für Altea als wegen niedrigerer Preise.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* AREAS OF ALTEA */}
      <section className="px-8 py-24">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Gegenden von Altea
          </p>

          <h2 className="mt-4 font-serif text-5xl leading-tight">
            Unterschiedliche Stadtteile schaffen sehr unterschiedliche Lebensstile.
          </h2>

          <div className="mt-16 space-y-10">

            {/* OLD TOWN */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                Altstadt von Altea
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Die historische Altstadt ist das künstlerische Herz von Altea mit weiß getünchten Straßen, Galerien, Boutique-Cafés und mediterraner Architektur. Käufer, die diese Gegend wählen, legen meist Wert auf Atmosphäre, Schönheit und authentischen spanischen Charme.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Fußgängerstraßen, Restaurants und Meerblick machen dies zu einer der ikonischsten Gegenden an der nördlichen Costa Blanca.
              </p>

            </div>

            {/* ALTEA HILLS */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                Altea Hills
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Altea Hills ist eine der prestigeträchtigsten geschlossenen Wohnanlagen an der nördlichen Costa Blanca. Die Gegend bietet Luxusvillen, Sicherheit, panoramischen Meerblick und starke Privatsphäre.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Besonders beliebt bei internationalen Zweitwohnsitzbesitzern, die sicheres „Lock-up-and-leave“-Wohnen mit einem hochwertigen mediterranen Lebensstil suchen.
              </p>

            </div>

            {/* MASCARAT */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                Mascarat & Marina-Gebiet
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Das Mascarat-Gebiet verbindet moderne Apartments, Marina-Lifestyle und Wohnen mit Meerblick in der Nähe von Restaurants und Yachtanlagen.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Ideal für Käufer, die Luxusapartments, fußläufige Erreichbarkeit und eine elegante Küstenatmosphäre suchen.
              </p>

            </div>

            {/* SIERRA */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                Sierra de Altea
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Sierra de Altea bietet erhöht gelegene Luxusvillen mit panoramischem Mittelmeerblick, größeren Grundstücken und einer ruhigeren Wohnatmosphäre.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Käufer hier priorisieren Privatsphäre, Ausblicke und hochwertige Architektur gegenüber fußläufiger Erreichbarkeit.
              </p>

            </div>

            {/* PROMENADE */}
            <div className="rounded-[32px] bg-white p-12 shadow-sm">

              <h3 className="font-serif text-4xl">
                Promenade & Wohnen direkt am Strand
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Apartments direkt am Strand und Wohnen an der Promenade sind ideal für Käufer, die Restaurants, Cafés und mediterrane Atmosphäre direkt vor der Haustür genießen möchten.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                Diese Gegenden sind beliebt bei Ruheständlern und Zweitwohnsitzbesitzern, die einen einfacheren Alltag wünschen, ohne stark auf ein Auto angewiesen zu sein.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHO SHOULD CHOOSE ALTEA */}
      <section className="pb-28 px-8">

        <div className="mx-auto max-w-5xl">

          <h2 className="font-serif text-5xl leading-tight">
            Für wen ist Altea geeignet?
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Altea ist ideal für Käufer, die Schönheit, Eleganz und einen ruhigeren mediterranen Lebensstil mit Kultur, Architektur und anspruchsvoller Küstenatmosphäre suchen.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Im Vergleich zu Jávea wirkt Altea raffinierter und künstlerischer. Im Vergleich zu Moraira bietet es etwas mehr Kultur, Marina-Lifestyle und architektonischen Charme. Es ist besonders attraktiv für Ruheständler, Zweitwohnsitzkäufer und internationale Bewohner mit Fokus auf Lebensstil.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-stone-900 px-8 py-4 text-white"
          >
            Altea mit uns besprechen
          </a>

        </div>

      </section>

    </main>
  );
}