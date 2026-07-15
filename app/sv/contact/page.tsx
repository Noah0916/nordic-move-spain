import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | Nordic Move Spain",
  description:
    "Kontakta Nordic Move Spain för personlig vägledning vid bostadsköp, val av rätt område och praktiskt stöd på norra Costa Blanca.",
  alternates: {
    canonical: "/sv/contact",
    languages: {
      sv: "/sv/contact",
      de: "/de/contact",
      nl: "/nl/contact",
      en: "/contact",
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
          alt="Kontakt med Nordic Move Spain"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        <div className="relative z-10 mx-auto w-full max-w-7xl text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d7b47a]">
            Personlig kontakt
          </p>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Låt oss prata om dina planer i Spanien.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            Berätta vilket område, vilken bostad eller vilken livsstil du söker
            på norra Costa Blanca. Vi hjälper dig att planera nästa steg med
            mer klarhet och trygghet.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Boka ett första samtal
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Börja med ett personligt och förutsättningslöst samtal.
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-stone-600">
              Under ett första samtal går vi igenom dina önskemål, din budget,
              vilka områden du överväger och dina långsiktiga planer i Spanien.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Du får en tydligare bild av möjliga nästa steg och vilka delar av
              vår vägledning som passar din situation bäst.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Personlig orientering innan bostadssökningen",
                "Jämförelse av områden på norra Costa Blanca",
                "Buyer Discovery Experience eller individuella visningar",
                "Vägledning under köpprocessen",
                "Strukturerade köpdokument i en säker kundportal",
                "Praktiskt stöd efter bostadsköpet",
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
              Din förfrågan
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
              Hur kan vi hjälpa dig?
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
            Trygghet börjar med ett bra första samtal.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-white/80">
            Vi hjälper dig att förstå områden, möjligheter och nästa steg på ett
            realistiskt och personligt sätt.
          </p>

          <a
            href="/sv"
            className="mt-10 inline-block rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
          >
            Tillbaka till startsidan
          </a>
        </div>
      </section>
    </main>
  );
}