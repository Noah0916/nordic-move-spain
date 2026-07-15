import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | Nordic Move Spain",
  description:
    "Kontaktieren Sie Nordic Move Spain für persönliche Begleitung beim Immobilienkauf, bei der Wahl der passenden Region und beim Umzug an die Costa Blanca Nord.",
  alternates: {
    canonical: "/de/contact",
    languages: {
      de: "/de/contact",
      nl: "/nl/contact",
      en: "/contact",
      sv: "/sv/contact",
      "x-default": "/contact",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden px-8 py-32">
        <img
          src="/images/discover-card.png"
          alt="Kontakt mit Nordic Move Spain"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        <div className="relative z-10 mx-auto w-full max-w-7xl text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d7b47a]">
            Persönlicher Kontakt
          </p>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Lassen Sie uns über Ihre Pläne in Spanien sprechen.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            Erzählen Sie uns, welche Region, Immobilie oder Lebensweise Sie an
            der Costa Blanca Nord suchen. Wir helfen Ihnen, die nächsten
            Schritte klar und gut vorbereitet zu planen.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Erstgespräch vereinbaren
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Beginnen Sie mit einem persönlichen und unverbindlichen Gespräch.
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-stone-600">
              Während eines ersten Gesprächs besprechen wir Ihre Wünsche, Ihr
              Budget, Ihre bevorzugten Regionen und Ihre langfristigen Pläne in
              Spanien.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Sie erhalten eine klare Einschätzung der möglichen nächsten
              Schritte und erfahren, welche unserer Leistungen zu Ihrer
              Situation passen.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Persönliche Orientierung vor der Immobiliensuche",
                "Vergleich der Regionen an der Costa Blanca Nord",
                "Buyer Discovery Experience oder individuelle Besichtigungen",
                "Begleitung während des Kaufprozesses",
                "Strukturierte Kaufunterlagen im sicheren Kundenportal",
                "Unterstützung nach dem Immobilienkauf",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <span className="text-[#c8a063]">✓</span>

                  <p className="text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm md:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
              Ihre Anfrage
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
              Wie können wir Ihnen helfen?
            </h2>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d7b47a]">
            Nordic Move Spain
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight">
            Klarheit beginnt mit einem guten ersten Gespräch.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-white/80">
            Wir helfen Ihnen, Regionen, Möglichkeiten und nächste Schritte
            realistisch und persönlich zu besprechen.
          </p>

          <a
            href="/de"
            className="mt-10 inline-block rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
          >
            Zurück zur Startseite
          </a>
        </div>
      </section>
    </main>
  );
}