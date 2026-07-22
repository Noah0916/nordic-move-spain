export const metadata = {
  title: "Move-In Ready Unterstützung | Nordic Move Spain",
  description:
    "Move-In Ready Unterstützung für internationale Käufer an der Costa Blanca: Stilbriefing, visuelles Moodboard, Lifestyle-Konzept, technische Machbarkeit, Möbelauswahl, Beleuchtung, Fensterdekoration, Installation, Styling und Vorbereitung auf Ihre Ankunft.",
};

export default function MoveInReadyPage() {
  const images = [
    {
      src: "/images/move-in-ready-costal.png",
      title: "Coastal Calm",
      text:
        "Ein weicher, eleganter Küstenstil mit natürlichen Materialien, ruhigen Farbtönen, entspanntem Komfort und zurückhaltendem Luxus.",
      alt: "Coastal-Calm-Stilrichtung für Move-In Ready Unterstützung an der Costa Blanca",
    },
    {
      src: "/images/move-in-ready-ibiza.png",
      title: "Ibiza Soho Lounge",
      text:
        "Ein warmer und geselliger mediterraner Stil mit sanften Weißtönen, rustikalem Holz, gewebten Texturen, dezenten Farbakzenten und einem eleganten Indoor-Outdoor-Gefühl.",
      alt: "Ibiza-Soho-Lounge-Stilrichtung für Move-In Ready Unterstützung an der Costa Blanca",
    },
    {
      src: "/images/move-in-ready-kitchen.png",
      title: "Contemporary Coastal Kitchen",
      text:
        "Ein heller, architektonischer Stil mit klaren Linien, großen Fenstern, hellen Hölzern, hochwertigen Oberflächen und einer ruhigen Küstenatmosphäre.",
      alt: "Contemporary-Coastal-Kitchen-Stilrichtung für Move-In Ready Unterstützung an der Costa Blanca",
    },
    {
      src: "/images/move-in-ready-mediterranean-warmth.png",
      title: "Mediterranean Warmth",
      text:
        "Ein entspannter mediterraner Lebensstil rund um Terrassen, Tageslicht, Meerblick, Essen im Freien und komfortables tägliches Wohnen.",
      alt: "Mediterranean-Warmth-Stilrichtung für harmonisches Innen- und Außenleben an der Costa Blanca",
    },
  ];

  const steps = [
    {
      title: "Stilbriefing",
      text:
        "Wir beginnen mit einer persönlichen Stilbriefing, um zu verstehen, wie Sie die Immobilie nutzen möchten. Dabei geht es nicht nur um Geschmack, sondern auch um Ihren Alltag, Familie, Gäste, Privatsphäre, Pflegeaufwand, Komfort und die gewünschte Atmosphäre.",
    },
    {
      title: "Visuelles Moodboard",
      text:
        "Auf Grundlage Ihrer Wünsche erstellen wir ein visuelles Moodboard mit Farben, Materialien, Texturen, Möbelreferenzen, Beleuchtungsideen sowie Inspiration für Innen- und Außenbereiche. So entsteht eine klare Richtung, bevor Entscheidungen getroffen oder Ausgaben getätigt werden.",
    },
    {
      title: "Lifestyle-Konzept",
      text:
        "Wir übersetzen das Moodboard in ein Lifestyle-Konzept für die Immobilie. Es verbindet die Gestaltung des Hauses mit dem tatsächlichen Alltag: Entspannen, Gäste empfangen, aus Spanien arbeiten, im Freien essen, Familienbesuche oder pflegeleichtes Wohnen.",
    },
    {
      title: "Bauunternehmen und technische Machbarkeit",
      text:
        "Wenn Renovierungs-, Installations- oder technische Arbeiten erforderlich sind, beziehen wir frühzeitig das passende lokale Bauunternehmen oder einen Spezialisten ein. So lässt sich prüfen, was für die Immobilie, das Budget, den Zeitplan, Genehmigungen, Materialien und die praktische Umsetzung realistisch ist.",
    },
    {
      title: "Möbelauswahl und Beschaffung",
      text:
        "Sobald die Stilrichtung feststeht, koordinieren wir die Möbelauswahl und Beschaffung über passende Lieferanten und lokale Partner. Ziel ist ein harmonisches Zuhause statt einer Sammlung einzelner, nicht aufeinander abgestimmter Käufe.",
    },
    {
      title: "Beleuchtung",
      text:
        "Beleuchtung hat großen Einfluss auf die Atmosphäre einer Immobilie. Wir denken funktionale Beleuchtung, Stimmungslicht, besondere Leuchten, Außenbeleuchtung und jene Details mit, die das Zuhause warm und vollständig wirken lassen.",
    },
    {
      title: "Vorhänge und Fensterdekoration",
      text:
        "Vorhänge und Fensterdekoration werden häufig erst spät ausgewählt, obwohl sie Privatsphäre, Komfort, Akustik und Atmosphäre stark beeinflussen. Wir helfen, die passende Richtung und bei Bedarf die lokale Umsetzung zu koordinieren.",
    },
    {
      title: "Lieferung und Installation",
      text:
        "Lieferungen, Montage und Installation lassen sich aus dem Ausland nur schwer organisieren. Wir koordinieren diese praktischen Schritte mit zuverlässigen lokalen Partnern, damit der Ablauf strukturierter und weniger fragmentiert verläuft.",
    },
    {
      title: "Styling",
      text:
        "Das abschließende Styling verbindet alles zu einem stimmigen Ganzen: Textilien, ausgewählte Accessoires, Details für den Außenbereich, Bettwäsche, Geschirr, Pflanzen und kleinere Entscheidungen, die das Haus persönlich und vollständig wirken lassen.",
    },
    {
      title: "Vorbereitung auf Ihre Ankunft",
      text:
        "Vor Ihrer Ankunft koordinieren wir die letzten praktischen Punkte, darunter die Grundausstattung, Abschlusskontrollen, wichtige Alltagsgegenstände und Übergabepunkte. So beginnt Ihr Leben an der Costa Blanca ruhiger und reibungsloser.",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] px-8 py-28 text-stone-900">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
          Sanfte Ankunft &amp; Move-In Ready
        </p>

        <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
          Move-In Ready Unterstützung
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
          Nach dem Kauf einer Immobilie an der Costa Blanca möchten viele
          internationale Käufer nicht monatelang aus dem Ausland Bauunternehmen,
          Möbelhäuser, Beleuchtung, Vorhänge, Lieferungen, Installation und Styling
          organisieren.
        </p>

        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
          Unsere Move-In Ready Unterstützung hilft dabei, die Immobilie in ein
          durchdachtes, praktisches und persönliches Zuhause zu verwandeln, das auf
          Ihre Ankunft vorbereitet ist. Wir entwickeln die Stilrichtung, erstellen
          ein visuelles Moodboard und koordinieren geeignete lokale Partner für die
          praktische Umsetzung.
        </p>

        {/* AUCH NACH DER SCHLUESSELUEBERGABE */}
        <section className="mt-16 rounded-[40px] bg-[#1e2a3a] p-8 text-white shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Auch nach der Schlüsselübergabe
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Auch nach dem Kauf bleiben wir an Ihrer Seite.
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-relaxed text-white/80">
            Der Kauf ist häufig erst der Anfang. Danach müssen möglicherweise noch
            Strom, Wasser, Internet und Versicherungen organisiert werden. Vielleicht
            benötigen Sie außerdem ein internationales Umzugsunternehmen, eine
            Zwischenlagerung oder einen Fahrzeugtransport. Auch Garten- und
            Poolpflege, Klimaanlage, Heizung, Solaranlagen, Renovierung und
            Inneneinrichtung erfordern zuverlässige lokale Partner und klare
            Vereinbarungen.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Nordic Move Spain hilft Ihnen, diese Schritte übersichtlich zu
            organisieren. Wir sprechen Spanisch, kennen die lokalen Abläufe und
            finden passende Fachleute für Ihre Situation. Wir holen Angebote ein,
            vergleichen Möglichkeiten, koordinieren Termine und behalten den
            Fortschritt für Sie im Blick.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Sie müssen nicht monatelang selbst nach zuverlässigen Anbietern suchen
            oder Ihre Wünsche immer wieder neu erklären. Sie kommunizieren mit einer
            festen Ansprechperson, während wir dafür sorgen, dass die ausgewählten
            Parteien wissen, was zu tun ist, wann es geschehen soll und wer wofür
            verantwortlich ist.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Für Renovierungen arbeiten wir mit einem ausgewählten, offiziell
            registrierten Bauunternehmen zusammen, das über ein eigenes
            Ausführungsteam verfügt und qualifizierte Architekten sowie technische
            Architekten einbindet. Selbstverständlich können Sie auch Ihr eigenes
            Bauunternehmen oder andere Fachleute beauftragen.
          </p>

          <p className="mt-6 max-w-4xl text-lg font-medium leading-relaxed text-[#d7bd94]">
            Sie können die vollständige Buyer Journey oder nur die Leistungen
            wählen, die Sie benötigen — von der Kaufbegleitung und unabhängigen
            Prüfungen bis zu Umzug, Home Setup, Renovierung und Interior Styling.
          </p>
        </section>

        {/* NORDIC MOVE DESIGN BILDER */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {images.map((image) => (
            <article
              key={image.title}
              className="overflow-hidden rounded-[32px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[380px] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1e2a3a] backdrop-blur">
                  Nordic Move Design
                </div>
              </div>

              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  Stilrichtung
                </p>

                <h2 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  {image.title}
                </h2>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {image.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-relaxed text-stone-500">
          Die gezeigten Nordic Move Designs dienen als inspirierende
          Stilrichtungen. Es handelt sich weder um Immobilienangebote noch um
          abgeschlossene Kundenprojekte. Die endgültige Gestaltung, Planung und
          Umsetzung werden auf die Immobilie, das Budget, die Verfügbarkeit und die
          ausgewählten lokalen Partner abgestimmt.
        </p>

        {/* PROZESS */}
        <section className="mt-20 rounded-[40px] bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Was wir koordinieren
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Der Move-In Ready Prozess
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[28px] bg-[#f6f1ea] p-7"
              >
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm leading-relaxed text-stone-500">
            Die Move-In Ready Unterstützung wird auf jede Immobilie und jeden Kunden
            individuell abgestimmt. Umfang, Zeitplan, Preis und Verfügbarkeit hängen
            von der Immobilie, den erforderlichen Arbeiten, den ausgewählten Partnern,
            den Materialien und dem gewünschten Serviceniveau ab.
          </p>
        </section>

        <div className="mt-16 rounded-[40px] bg-[#1e2a3a] p-10 text-white md:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Persönliche Unterstützung bei jedem Schritt
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Sagen Sie uns, bei welchem Schritt Ihrer Buyer Journey Sie Unterstützung benötigen.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Nehmen Sie Kontakt mit uns auf und teilen Sie uns mit, bei welcher
            Leistung oder welchem Schritt Sie Unterstützung benötigen. Ganz gleich,
            ob Sie noch die passende Region suchen, bereits eine Immobilie gefunden
            haben, unabhängige Kaufprüfungen benötigen oder Hilfe bei Umzug,
            Renovierung und Move-In Ready wünschen — gemeinsam besprechen wir den
            passenden nächsten Schritt.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-[0.7fr_1.3fr]">
            <a
              href="/de/contact"
              className="inline-flex min-h-[112px] items-center justify-center rounded-[28px] border border-white/35 px-8 py-6 text-center text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-[#1e2a3a]"
            >
              Kontaktformular nutzen
            </a>

            <a
              href="https://wa.me/31683848239?text=Hallo%20Nordic%20Move%20Spain%2C%20ich%20m%C3%B6chte%20gerne%20besprechen%2C%20bei%20welcher%20Leistung%20oder%20welchem%20Schritt%20der%20Buyer%20Journey%20ich%20Unterst%C3%BCtzung%20ben%C3%B6tige."
              target="_blank"
              rel="noreferrer"
              aria-label="Direktes WhatsApp-Gespräch mit Nordic Move Spain starten"
              className="group flex min-h-[112px] items-center gap-5 rounded-[28px] bg-white px-6 py-5 text-[#1e2a3a] shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.24)] md:px-8"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#c8a063] text-white">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-7 w-7 fill-current"
                >
                  <path d="M16.04 3C8.87 3 3.05 8.78 3.05 15.91c0 2.28.6 4.51 1.75 6.47L3 29l6.82-1.77a13.03 13.03 0 0 0 6.22 1.58h.01C23.21 28.81 29 23.03 29 15.9 29 8.78 23.21 3 16.04 3Zm0 23.62h-.01a10.83 10.83 0 0 1-5.52-1.51l-.4-.24-4.05 1.05 1.08-3.93-.26-.4a10.7 10.7 0 0 1-1.65-5.68c0-5.92 4.85-10.74 10.82-10.74 5.96 0 10.81 4.82 10.81 10.74 0 5.92-4.85 10.71-10.82 10.71Zm5.94-8.02c-.33-.16-1.92-.94-2.22-1.05-.3-.11-.52-.16-.74.16-.22.33-.85 1.05-1.04 1.27-.19.22-.38.24-.71.08-.33-.16-1.38-.5-2.63-1.61a9.8 9.8 0 0 1-1.82-2.25c-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.7 0 1.59 1.17 3.13 1.33 3.35.16.22 2.3 3.48 5.57 4.88.78.33 1.38.53 1.86.68.78.25 1.49.21 2.05.13.63-.09 1.92-.78 2.19-1.54.27-.76.27-1.4.19-1.54-.08-.14-.3-.22-.63-.38Z" />
                </svg>
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs font-medium uppercase tracking-[0.25em] text-[#b88948]">
                  Direkt über WhatsApp
                </span>
                <span className="mt-1 block font-serif text-2xl leading-tight">
                  Persönliches Gespräch starten
                </span>
                <span className="mt-1 block text-sm text-stone-500">
                  +31 6 83 84 82 39
                </span>
              </span>

              <span
                aria-hidden="true"
                className="text-2xl transition group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}