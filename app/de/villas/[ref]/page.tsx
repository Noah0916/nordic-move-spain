import { notFound } from "next/navigation";
import { villas } from "../../../villas/villasData";

type VillaDetailPageProps = {
  params: Promise<{
    ref: string;
  }>;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

function germanDescription(villa: (typeof villas)[number]) {
  if (villa.id === "c11-33867") {
    return [
      "Diese außergewöhnliche, nach Süden ausgerichtete Finca liegt in der ruhigen Wohnlage Berdica, nur wenige Kilometer vom historischen Zentrum von Benissa entfernt. Auf einem privaten Grundstück von rund 5.500 m² bietet das Anwesen etwa 800 m² bebaute Fläche, sechs Schlafzimmer und sechs Badezimmer sowie großzügige Terrassen, mediterrane Gärten und einen großen privaten Pool.",
      "Das Haupthaus ist um einen lichtdurchfluteten Innenhof organisiert. Zu den Räumen gehören großzügige Wohn- und Essbereiche mit Kamin, eine private Mastersuite mit Terrasse, Gästeunterkünfte, Büro, Weinkeller, Garage und praktische Nebenräume.",
      "Ein großer, separat nutzbarer doppelgeschossiger Anbau schafft zusätzliche Möglichkeiten als Gästehaus, Atelier, Sammlungs- oder Entertainmentbereich. Eine Sommerküche mit Grill und Holzofen, Werkstatt, Gemüsegarten, Obstbäume und umfangreiche Stellplätze ergänzen das Anwesen.",
    ];
  }

  const size =
    villa.built > 0 && villa.plot > 0
      ? `Mit ${villa.built} m² bebauter Fläche auf einem Grundstück von ${villa.plot} m²`
      : villa.built > 0
        ? `Mit ${villa.built} m² bebauter Fläche`
        : villa.plot > 0
          ? `Auf einem Grundstück von ${villa.plot} m²`
          : "Mit großzügigen Proportionen";

  return [
    `Diese ausgewählte Immobilie in ${villa.location} bietet ${villa.beds} Schlafzimmer und ${villa.baths} Badezimmer. ${size} eignet sie sich als mediterraner Wohnsitz, Ferienimmobilie oder als Ausgangspunkt für einen dauerhaften Umzug an die Costa Blanca.`,
    "Nordic Move Spain begleitet Sie auf Käuferseite. Wir prüfen gerne die aktuelle Verfügbarkeit, koordinieren weitere Objektinformationen und organisieren auf Wunsch eine private Besichtigung.",
  ];
}

export function generateStaticParams() {
  return villas.map((villa) => ({
    ref: villa.id,
  }));
}

export async function generateMetadata({ params }: VillaDetailPageProps) {
  const { ref } = await params;
  const villa = villas.find((item) => item.id === ref);

  if (!villa) {
    return {
      title: "Immobilie nicht gefunden | Nordic Move Spain",
    };
  }

  return {
    title: `Villa in ${villa.location} | ${formatPrice(villa.price)} | Nordic Move Spain`,
    description: `${villa.beds} Schlafzimmer, ${villa.baths} Badezimmer in ${villa.location}. Käuferbegleitung durch Nordic Move Spain.`,
  };
}

export default async function GermanVillaDetailPage({
  params,
}: VillaDetailPageProps) {
  const { ref } = await params;
  const villa = villas.find((item) => item.id === ref);

  if (!villa) {
    notFound();
  }

  const paragraphs = germanDescription(villa);
  const contactHref = `/de/contact?property=${encodeURIComponent(villa.ref)}`;

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <nav className="border-b border-stone-200 bg-[#1e2a3a] px-5 py-5 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a href="/de" className="font-serif text-xl">
            Nordic Move Spain
          </a>

          <div className="flex items-center gap-4 text-sm">
            <a href="/de/villas" className="transition hover:text-white/70">
              Villen
            </a>
            <a
              href="/de/contact"
              className="rounded-full bg-[#c8a063] px-5 py-2.5 font-medium transition hover:bg-[#b48a4f]"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      <section className="px-5 pb-20 pt-10 md:px-8 md:pt-14">
        <div className="mx-auto max-w-7xl">
          <a
            href="/de/villas"
            className="text-sm font-medium text-[#1e2a3a] transition hover:opacity-60"
          >
            ← Zurück zu allen Villen
          </a>

          <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                Ausgewählte Immobilie · Ref. {villa.ref}
              </p>

              <h1 className="mt-4 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-6xl">
                Villa in {villa.location}
              </h1>

              <p className="mt-4 text-lg text-stone-600">
                {villa.beds} Schlafzimmer · {villa.baths} Badezimmer
                {villa.built > 0 ? ` · ${villa.built} m² bebaut` : ""}
                {villa.plot > 0 ? ` · ${villa.plot} m² Grundstück` : ""}
              </p>
            </div>

            <p className="font-serif text-3xl text-[#1e2a3a] md:text-4xl">
              {formatPrice(villa.price)}
            </p>
          </div>

          {/* Erste Galerie */}
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-[30px] bg-stone-200 md:row-span-2">
              <img
                src={villa.images[0]}
                alt={`Villa in ${villa.location} - Hauptbild`}
                className="h-full min-h-[420px] w-full object-cover md:min-h-[720px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {villa.images.slice(1, 5).map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="overflow-hidden rounded-[24px] bg-stone-200"
                >
                  <img
                    src={image}
                    alt={`Villa in ${villa.location} - Bild ${index + 2}`}
                    className="h-48 w-full object-cover md:h-[350px]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Text staat bewust vóór de resterende foto's */}
          <section className="mt-16 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                Über diese Immobilie
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
                Die Immobilie im Überblick
              </h2>
            </div>

            <div className="rounded-[34px] bg-white p-8 shadow-sm md:p-10">
              <div className="space-y-5 text-base leading-8 text-stone-600 md:text-lg">
                {paragraphs.map((paragraph, index) => (
                  <p key={`${villa.id}-de-description-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          {villa.images.length > 5 && (
            <section className="mt-16">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                Weitere Fotos
              </p>
              <h2 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                Galerie
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {villa.images.slice(5).map((image, index) => (
                  <div
                    key={`${image}-${index + 5}`}
                    className="overflow-hidden rounded-[24px] bg-stone-200"
                  >
                    <img
                      src={image}
                      alt={`Villa in ${villa.location} - Bild ${index + 6}`}
                      className="h-72 w-full object-cover transition duration-700 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[34px] bg-white p-8 shadow-sm md:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                Objektdetails
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <div>
                  <p className="text-sm text-stone-500">Schlafzimmer</p>
                  <p className="mt-1 text-2xl font-medium text-[#1e2a3a]">{villa.beds}</p>
                </div>
                <div>
                  <p className="text-sm text-stone-500">Badezimmer</p>
                  <p className="mt-1 text-2xl font-medium text-[#1e2a3a]">{villa.baths}</p>
                </div>
                <div>
                  <p className="text-sm text-stone-500">Bebaute Fläche</p>
                  <p className="mt-1 text-2xl font-medium text-[#1e2a3a]">
                    {villa.built > 0 ? `${villa.built} m²` : "Auf Anfrage"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-stone-500">Grundstück</p>
                  <p className="mt-1 text-2xl font-medium text-[#1e2a3a]">
                    {villa.plot > 0 ? `${villa.plot} m²` : "Auf Anfrage"}
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-stone-200 pt-8">
                <h2 className="font-serif text-3xl text-[#1e2a3a]">
                  Interesse an dieser Immobilie?
                </h2>
                <p className="mt-5 max-w-2xl leading-relaxed text-stone-600">
                  Wir prüfen die aktuelle Verfügbarkeit, organisieren eine private Besichtigung
                  und können die Immobilie in Ihre persönliche Auswahl aufnehmen.
                </p>
              </div>
            </div>

            <aside className="h-fit rounded-[34px] bg-[#1e2a3a] p-8 text-white shadow-sm md:p-10 lg:sticky lg:top-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                Unterstützung auf Käuferseite
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight">
                Private Besichtigung anfragen
              </h2>

              <p className="mt-5 leading-relaxed text-white/75">
                Teilen Sie uns mit, für welche Immobilie Sie sich interessieren. Wir melden uns
                persönlich bei Ihnen mit Informationen zur Verfügbarkeit und den nächsten Schritten.
              </p>

              <a
                href={contactHref}
                className="mt-8 block rounded-full bg-[#c8a063] px-7 py-4 text-center text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Diese Immobilie anfragen
              </a>

              <a
                href="mailto:willeke@nordicmovespain.com"
                className="mt-4 block rounded-full border border-white/40 px-7 py-4 text-center text-sm transition hover:bg-white hover:text-[#1e2a3a]"
              >
                willeke@nordicmovespain.com
              </a>

              <p className="mt-8 text-xs leading-relaxed text-white/50">
                Die Immobilie wird über einen unserer kooperierenden Immobilienpartner angeboten.
                Nordic Move Spain begleitet und berät den Käufer.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
