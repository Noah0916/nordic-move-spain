import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pagePath = "/de";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

function absoluteUrl(path: string) {
  return siteUrl ? `${siteUrl}${path}` : path;
}

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Private Käuferbegleitung an der Costa Blanca | Nordic Move Spain",
  description:
    "Persönliche Käuferbegleitung für internationale Kunden an der Costa Blanca: Area Match, private Discovery Route, koordinierte Kaufprüfung, sicheres Kundenportal und Move-In-Ready Support.",
  alternates: {
    canonical: pagePath,
    languages: {
      "de-DE": "/de",
      "nl-NL": "/nl",
      "en-GB": "/",
      "sv-SE": "/sv",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Die richtige Lage. Die richtige Immobilie. Eine fundierte Kaufentscheidung.",
    description:
      "Diskrete und klar koordinierte Käuferbegleitung an der Costa Blanca — von der Regionswahl bis zur Vorbereitung des neuen Zuhauses.",
    type: "website",
    locale: "de_DE",
    alternateLocale: ["nl_NL", "en_GB", "sv_SE"],
    url: absoluteUrl(pagePath),
    siteName: "Nordic Move Spain",
    images: [
      {
        url: "/images/laatste-homepage.png",
        width: 1600,
        height: 900,
        alt: "Mediterrane Villa an der Costa Blanca mit Meerblick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Käuferbegleitung an der Costa Blanca | Nordic Move Spain",
    description:
      "Persönliche Regionswahl, gezielte Objektselektion, koordinierte Prüfungen und ein vorbereitetes Ankommen.",
    images: ["/images/laatste-homepage.png"],
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

const navigation = [
  { href: "/de", label: "Startseite" },
  { href: "/de/regions", label: "Regionen" },
  { href: "/de/services", label: "Leistungen" },
  { href: "/de/guides", label: "Ratgeber" },
  { href: "/de/about-us", label: "Über uns" },
  { href: "/de/contact", label: "Kontakt" },
];

const journey = [
  {
    number: "01",
    eyebrow: "Orientierung vor Objektsuche",
    title: "Area Match Briefing",
    text:
      "Ihre Anforderungen an Alltag, Erreichbarkeit, Privatsphäre, Infrastruktur, Budget und langfristige Nutzung werden mit lokalen Fakten zusammengeführt. Das Ergebnis ist keine allgemeine Empfehlung, sondern eine begründete Auswahl passender Teilregionen und klarer Ausschlusskriterien.",
    href: "/de/services/area-match",
    cta: "Area Match ansehen",
    image: "/images/area-match.png",
    alt: "Persönliches Area Match Briefing für die Costa Blanca",
  },
  {
    number: "02",
    eyebrow: "Die Region persönlich prüfen",
    title: "Private Discovery Route",
    text:
      "Sie erleben gezielt die Orte, Wohnlagen, Infrastruktur und ausgewählten Immobilien, die zu Ihrem Profil passen. Weniger Besichtigungen, mehr Vergleichbarkeit und genügend Zeit, um Unterschiede im Alltag wirklich zu verstehen.",
    href: "/de/services/discovery-trips",
    cta: "Discovery Route entdecken",
    image: "/images/discover-card.png",
    alt: "Internationale Käufer während einer privaten Discovery Route an der Costa Blanca",
  },
  {
    number: "03",
    eyebrow: "Prüfung vor Bindung",
    title: "Purchase Safety Coordination",
    text:
      "Wenn eine Immobilie ernsthaft infrage kommt, koordinieren wir die relevanten rechtlichen und technischen Fachleute. Rollen, offene Punkte, verfügbare Unterlagen und empfohlene nächste Schritte werden nachvollziehbar zusammengeführt.",
    href: "/de/services/purchase-safety-report",
    cta: "Kaufprüfung verstehen",
    image: "/images/legal.png",
    alt: "Dokumente und technische Prüfung vor einem Immobilienkauf in Spanien",
  },
  {
    number: "04",
    eyebrow: "Vorbereitet ankommen",
    title: "Move-In Ready Support",
    text:
      "Nach dem Kauf entwickeln wir mit Ihnen eine klare Interior Direction und koordinieren Einrichtung, Styling und praktische Vorbereitung mit ausgewählten lokalen Partnern — abgestimmt auf Immobilie, Zeitplan und Budget.",
    href: "/de/services/move-in-ready",
    cta: "Move-In Ready ansehen",
    image: "/images/move-in-ready-ibiza.png",
    alt: "Mediterranes Interior-Konzept für Move-In-Ready Support",
  },
];

const standards = [
  {
    title: "Schriftlicher Leistungsumfang",
    text:
      "Vor Beginn wird festgehalten, welche Aufgaben Nordic Move übernimmt, welche Entscheidungen bei Ihnen bleiben und welche externen Spezialisten benötigt werden.",
  },
  {
    title: "Klare Rollenverteilung",
    text:
      "Nordic Move koordiniert den Käuferprozess. Rechtliche, steuerliche, technische oder bewertungsbezogene Fachberatung bleibt bei den dafür qualifizierten Spezialisten.",
  },
  {
    title: "Transparente Vergütung",
    text:
      "Honorare, mögliche Vermittlungsbeziehungen und externe Kosten werden vor dem jeweiligen Auftrag schriftlich erläutert, damit Interessen und Zuständigkeiten nachvollziehbar bleiben.",
  },
  {
    title: "Dokumentierte Entscheidungspunkte",
    text:
      "Offene Fragen, Risiken und nächste Schritte werden gebündelt. So können Sie bewusst fortfahren, Bedingungen stellen, neu verhandeln oder Abstand nehmen.",
  },
];

const guideCards = [
  {
    href: "/de/guides/buying-property-spain",
    label: "Kaufen in Spanien",
    title: "Immobilienkauf in Spanien für deutsche Käufer",
    text:
      "Ein strukturierter Überblick über Ablauf, Zuständigkeiten, Kaufnebenkosten, Dokumente und wichtige Prüfungen vor der Unterschrift.",
  },
  {
    href: "/de/guides/moraira-vs-javea",
    label: "Regionen vergleichen",
    title: "Moraira oder Jávea: Welche Wohnlage passt besser?",
    text:
      "Ein praktischer Vergleich von Atmosphäre, Erreichbarkeit, Infrastruktur, Wohnlagen und langfristiger Nutzung an der Costa Blanca Nord.",
  },
  {
    href: "/de/guides/best-areas-costa-blanca-north-retirees",
    label: "Ruhestand & Alltag",
    title: "Die besten Orte für einen langfristigen Aufenthalt",
    text:
      "Vergleichen Sie Dénia, Jávea, Moraira, Benissa und Altea nach Versorgung, Mobilität, Gemeinschaft, Ruhe und Alltagstauglichkeit.",
  },
];

const faqs = [
  {
    question: "Muss ich die gesamte Buyer Journey nutzen?",
    answer:
      "Nein. Sie können mit dem Area Match beginnen, eine private Discovery Route buchen oder erst bei einer konkreten Immobilie Unterstützung für Prüfung und Koordination anfragen.",
  },
  {
    question: "Wer prüft rechtliche und technische Risiken?",
    answer:
      "Die jeweiligen Prüfungen werden von dafür qualifizierten externen Fachleuten durchgeführt. Nordic Move koordiniert Informationen und nächste Schritte, ersetzt jedoch keine anwaltliche, steuerliche, technische oder bewertungsbezogene Fachberatung.",
  },
  {
    question: "Wie werden Vergütung und mögliche Vermittlungsbeziehungen erklärt?",
    answer:
      "Vor dem jeweiligen Auftrag erhalten Sie eine schriftliche Erläuterung des Leistungsumfangs, der Kosten und möglicher Vergütungs- oder Vermittlungsbeziehungen.",
  },
  {
    question: "Wie werden vertrauliche Unterlagen behandelt?",
    answer:
      "Relevante Dokumente können in einer kontrollierten Kundenumgebung gebündelt werden. Zugriff erhalten nur die für den jeweiligen Schritt erforderlichen Personen.",
  },
];

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nordic Move Spain",
  url: absoluteUrl(pagePath),
  description:
    "Persönliche Käuferbegleitung für internationale Immobilienkäufer an der Costa Blanca.",
  areaServed: {
    "@type": "Place",
    name: "Costa Blanca, Spanien",
  },
  availableLanguage: ["Deutsch", "Niederländisch", "Englisch", "Schwedisch"],
};

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nordic Move Spain Buyer Journey",
  itemListElement: journey.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: item.title,
      description: item.text,
      url: absoluteUrl(item.href),
      provider: {
        "@type": "Organization",
        name: "Nordic Move Spain",
      },
      areaServed: {
        "@type": "Place",
        name: "Costa Blanca, Spanien",
      },
    },
  })),
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function GermanHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <a
        href="#main-content"
        className="sr-only z-[100] rounded bg-white px-4 py-3 text-[#173252] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Zum Inhalt springen
      </a>

      <header className="sticky top-0 z-50 border-b border-[#173252]/10 bg-[#f6f1ea]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
          <Link
            href="/de"
            aria-label="Nordic Move Spain Startseite"
            className="shrink-0 text-[#173252]"
          >
            <span className="block font-serif text-xl tracking-[0.22em] md:text-2xl">
              NORDIC MOVE
            </span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.48em] text-[#b88948]">
              Spain
            </span>
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-sm text-[#173252]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-[#b88948]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-1" aria-label="Sprache wählen">
              {[
                ["EN", "/"],
                ["NL", "/nl"],
                ["DE", "/de"],
                ["SV", "/sv"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  aria-current={label === "DE" ? "page" : undefined}
                  className={
                    label === "DE"
                      ? "rounded-full bg-[#173252] px-3 py-2 text-[11px] font-medium tracking-[0.18em] text-white"
                      : "rounded-full px-3 py-2 text-[11px] font-medium tracking-[0.18em] text-[#173252] transition hover:bg-white"
                  }
                >
                  {label}
                </Link>
              ))}
            </div>

            <Link
              href="/de/contact"
              className="rounded-full bg-[#b88948] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#9d743d]"
            >
              Vertrauliches Erstgespräch
            </Link>
          </div>

          <details className="group relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-[#173252]/25 px-4 py-2 text-sm font-medium text-[#173252] marker:content-none">
              Menü
            </summary>
            <div className="absolute right-0 top-12 w-[min(88vw,360px)] border border-[#173252]/10 bg-[#f6f1ea] p-6 shadow-2xl">
              <nav aria-label="Mobile Navigation">
                <ul className="space-y-4">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block font-serif text-2xl text-[#173252]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 flex gap-2 border-t border-[#173252]/10 pt-5">
                {[
                  ["EN", "/"],
                  ["NL", "/nl"],
                  ["DE", "/de"],
                  ["SV", "/sv"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className={
                      label === "DE"
                        ? "rounded-full bg-[#173252] px-3 py-2 text-xs text-white"
                        : "rounded-full border border-[#173252]/20 px-3 py-2 text-xs text-[#173252]"
                    }
                  >
                    {label}
                  </Link>
                ))}
              </div>

              <Link
                href="/de/contact"
                className="mt-6 block rounded-full bg-[#b88948] px-5 py-3 text-center text-sm font-medium text-white"
              >
                Erstgespräch anfragen
              </Link>
            </div>
          </details>
        </div>
      </header>

      <main id="main-content" className="overflow-hidden bg-[#f6f1ea] text-stone-900">
        {/* HERO */}
        <section className="relative isolate min-h-[760px] overflow-hidden md:min-h-[820px]">
          <Image
            src="/images/laatste-homepage.png"
            alt="Mediterrane Villa mit Meerblick an der Costa Blanca"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1d31]/88 via-[#0d1d31]/55 to-[#0d1d31]/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d31]/45 via-transparent to-transparent" />

          <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-20 md:min-h-[820px] md:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#e0b878] md:text-sm">
                Private Käuferbegleitung an der Costa Blanca
              </p>

              <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.98] text-white md:text-7xl lg:text-[5.4rem]">
                Die richtige Lage. Die richtige Immobilie. Eine fundierte
                Kaufentscheidung.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
                Nordic Move Spain begleitet internationale Käufer, die
                Diskretion, lokale Einordnung und einen klar koordinierten
                Prozess erwarten — von der Regionswahl bis zur Vorbereitung des
                neuen Zuhauses.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                Wir beginnen nicht mit einer möglichst langen Objektliste. Wir
                beginnen mit Ihren Anforderungen an Alltag, Erreichbarkeit,
                Privatsphäre, Infrastruktur und langfristige Nutzung.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/de/contact"
                  className="rounded-full bg-[#c79b58] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#ae8144]"
                >
                  Vertrauliches Erstgespräch anfragen
                </Link>
                <Link
                  href="/de/relocation-assessment"
                  className="rounded-full border border-white/70 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur transition hover:bg-white hover:text-[#173252]"
                >
                  Persönliches Area Briefing erhalten
                </Link>
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.22em] text-white/60">
                Regionswahl · Gezielte Selektion · Koordinierte Prüfung ·
                Dokumentenübersicht · Move-In Support
              </p>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="border-b border-[#173252]/10 bg-white">
          <div className="mx-auto grid max-w-7xl gap-px bg-[#173252]/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Vier Sprachversionen", "Deutsch, Niederländisch, Englisch und Schwedisch"],
              ["Fester Ansprechpartner", "Persönliche Begleitung statt anonymem Portal"],
              ["Klare Zuständigkeiten", "Koordination und Fachberatung sauber getrennt"],
              ["Geschützte Dokumente", "Relevante Unterlagen gebündelt und nachvollziehbar"],
            ].map(([title, text]) => (
              <div key={title} className="bg-white px-6 py-7 md:px-8">
                <p className="font-serif text-xl text-[#173252]">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* POSITIONING */}
        <section className="px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#b88948]">
                Nicht mehr Objekte. Bessere Entscheidungen.
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-[#173252] md:text-6xl">
                Viele Käufer beginnen mit Immobilienanzeigen. Wir beginnen mit
                der Frage, wie Sie wirklich leben möchten.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-stone-600">
              <p>
                Eine Villa kann online überzeugend wirken und dennoch nicht zu
                Ihrem Alltag, Ihrer Nutzung oder Ihren Zukunftsplänen passen.
                Ebenso können rechtliche, technische oder praktische Fragen zu
                spät sichtbar werden, wenn die emotionale Entscheidung bereits
                gefallen ist.
              </p>
              <p>
                Deshalb strukturieren wir den Prozess anders: zuerst
                Anforderungen und Teilregionen verstehen, dann gezielt
                auswählen, anschließend fachlich prüfen und erst danach eine
                belastbare Kaufentscheidung treffen.
              </p>
              <p>
                Unser Wert liegt nicht darin, Ihnen möglichst viele Häuser zu
                zeigen. Unser Wert liegt darin, die Qualität Ihrer Entscheidung
                zu erhöhen und unnötige Besichtigungen, blinde Flecken und
                unklare Zuständigkeiten zu reduzieren.
              </p>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="border-y border-[#173252]/10 bg-[#efe7dc] px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#b88948]">
                Die Nordic Move Buyer Journey
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-[#173252] md:text-6xl">
                Vier klar definierte Schritte — einzeln nutzbar oder als
                zusammenhängender Prozess.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-600">
                Sie steigen dort ein, wo Sie Unterstützung benötigen. Umfang,
                Rollen und nächste Entscheidungspunkte werden vorab erläutert.
              </p>
            </div>

            <div className="mt-16 divide-y divide-[#173252]/12 border-y border-[#173252]/12">
              {journey.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-8 py-10 md:grid-cols-[100px_1fr_300px] md:items-center md:gap-12 md:py-12"
                >
                  <div className="font-serif text-5xl text-[#c7aa7b] md:text-6xl">
                    {item.number}
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#b88948]">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-4 font-serif text-3xl leading-tight text-[#173252] md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-600 md:text-lg">
                      {item.text}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-6 inline-flex items-center border-b border-[#b88948] pb-1 text-xs font-medium uppercase tracking-[0.2em] text-[#173252] transition hover:text-[#b88948]"
                    >
                      {item.cta} →
                    </Link>
                  </div>

                  <div className="relative h-52 overflow-hidden md:h-44">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, 300px"
                      className="object-cover transition duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSPARENCY */}
        <section className="px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#b88948]">
                  Vertrauen entsteht durch Klarheit
                </p>
                <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-[#173252] md:text-6xl">
                  Sie sollten vor dem Start wissen, wer welche Rolle übernimmt
                  und wie Interessen offengelegt werden.
                </h2>
                <p className="mt-7 text-lg leading-relaxed text-stone-600">
                  Hochwertige Käuferbegleitung beginnt nicht mit großen
                  Versprechen, sondern mit einem nachvollziehbaren Mandat,
                  dokumentierten Zuständigkeiten und klarer Kommunikation.
                </p>
              </div>

              <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
                {standards.map((standard, index) => (
                  <article
                    key={standard.title}
                    className="border-t border-[#173252]/20 pt-5"
                  >
                    <p className="text-xs font-medium tracking-[0.22em] text-[#b88948]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl leading-tight text-[#173252]">
                      {standard.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-stone-600 md:text-base">
                      {standard.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER SECTION */}
        <section className="bg-[#173252] px-6 py-20 text-white md:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
            <div className="relative min-h-[460px] overflow-hidden bg-[#e6d7c4] md:min-h-[620px]">
              <Image
                src="/images/founder.png"
                alt="Die Gründer von Nordic Move Spain"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#ddb36f]">
                Persönlich geführt
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-[1.08] md:text-6xl">
                Kein anonymes Immobilienportal. Ein persönlicher Prozess mit
                einem festen Ansprechpartner.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-white/80">
                Nordic Move Spain wurde für internationale Käufer entwickelt,
                die nicht nur Immobilienangebote, sondern lokale Einordnung,
                strukturierte Entscheidungen und verlässliche Koordination
                suchen.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Wir verbinden Ihre Anforderungen mit regionalem Wissen,
                ausgewählten Immobilien und den jeweils benötigten Fachleuten.
                Dabei bleiben Kommunikation, offene Punkte und nächste Schritte
                für Sie nachvollziehbar.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/de/about-us"
                  className="rounded-full bg-[#c79b58] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#ae8144]"
                >
                  Mehr über Nordic Move
                </Link>
                <Link
                  href="/de/contact"
                  className="rounded-full border border-white/55 px-7 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#173252]"
                >
                  Persönlich kennenlernen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MOVE-IN & COMMUNITY */}
        <section className="px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
              <article>
                <div className="relative h-[420px] overflow-hidden md:h-[520px]">
                  <Image
                    src="/images/move-in-ready-kitchen.png"
                    alt="Helle mediterrane Küche als Interior-Konzept"
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-8 text-xs font-medium uppercase tracking-[0.3em] text-[#b88948]">
                  Move-In Ready
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                  Ankommen, ohne monatelang aus der Ferne koordinieren zu müssen.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Interior Direction, Möbelauswahl, Beleuchtung, Styling und
                  praktische Vorbereitung werden mit geeigneten lokalen Partnern
                  abgestimmt. Konzept, Budget, Timing und Ausführung werden vorab
                  getrennt beschrieben.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone-500">
                  Gezeigte Innenräume können Konzeptvisualisierungen sein. Die
                  endgültige Ausführung hängt von Immobilie, Budget,
                  Verfügbarkeit und schriftlicher Beauftragung ab.
                </p>
                <Link
                  href="/de/services/move-in-ready"
                  className="mt-7 inline-flex border-b border-[#b88948] pb-1 text-xs font-medium uppercase tracking-[0.2em] text-[#173252]"
                >
                  Move-In Ready Support →
                </Link>
              </article>

              <article className="lg:pt-20">
                <div className="relative h-[420px] overflow-hidden md:h-[520px]">
                  <Image
                    src="/images/community-home.png"
                    alt="Internationale Bewohner bei einem Treffen an der Costa Blanca"
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <p className="mt-8 text-xs font-medium uppercase tracking-[0.3em] text-[#b88948]">
                  Nordic Circle
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                  Eine Immobilie funktioniert erst, wenn auch der Alltag zur
                  Person passt.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Während der Discovery Phase betrachten wir nicht nur
                  Wohnlagen, sondern auch Versorgung, Mobilität, Interessen und
                  soziale Anschlussmöglichkeiten. Ziel ist keine inszenierte
                  Community, sondern ein realistischer Eindruck davon, ob eine
                  Region langfristig zu Ihnen passt.
                </p>
                <Link
                  href="/de/services/nordic-circle-community"
                  className="mt-7 inline-flex border-b border-[#b88948] pb-1 text-xs font-medium uppercase tracking-[0.2em] text-[#173252]"
                >
                  Nordic Circle entdecken →
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* GUIDES */}
        <section className="border-y border-[#173252]/10 bg-white px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#b88948]">
                  Käuferwissen
                </p>
                <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-[#173252] md:text-6xl">
                  Orientierung, die konkrete Entscheidungen unterstützt.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Unsere Ratgeber sollen nicht zum schnellen Kauf drängen. Sie
                  helfen, Regionen, Zuständigkeiten, Kosten und Risiken vor einer
                  Entscheidung besser einzuordnen.
                </p>
                <Link
                  href="/de/guides"
                  className="mt-8 inline-flex rounded-full border border-[#173252] px-6 py-3 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
                >
                  Alle Ratgeber ansehen
                </Link>
              </div>

              <div className="divide-y divide-[#173252]/12 border-y border-[#173252]/12">
                {guideCards.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="group grid gap-4 py-8 transition md:grid-cols-[170px_1fr_40px] md:items-start"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#b88948]">
                      {guide.label}
                    </p>
                    <div>
                      <h3 className="font-serif text-2xl leading-tight text-[#173252] transition group-hover:text-[#b88948] md:text-3xl">
                        {guide.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone-600 md:text-base">
                        {guide.text}
                      </p>
                    </div>
                    <span className="text-2xl text-[#173252] transition group-hover:translate-x-1 group-hover:text-[#b88948]">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#b88948]">
                Häufige Fragen
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-[#173252] md:text-5xl">
                Klare Antworten vor dem ersten Auftrag.
              </h2>
            </div>

            <div className="divide-y divide-[#173252]/15 border-y border-[#173252]/15">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-2xl leading-tight text-[#173252] marker:content-none">
                    {faq.question}
                    <span className="mt-1 text-xl transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-5 max-w-3xl pr-10 text-base leading-relaxed text-stone-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl border border-[#173252]/10 bg-[#e9dfd2] px-7 py-16 text-center md:px-16 md:py-24">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#b88948]">
              Mit Klarheit beginnen
            </p>
            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-[1.08] text-[#173252] md:text-6xl">
              Besprechen Sie Ihre Pläne vertraulich, bevor die Objektsuche Ihre
              Entscheidung bestimmt.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-stone-600">
              In einem ersten Gespräch klären wir Nutzung, Zeitplan, bevorzugte
              Regionen, Budgetrahmen und die Form der Unterstützung, die für Sie
              sinnvoll ist.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/de/contact"
                className="rounded-full bg-[#173252] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Vertrauliches Erstgespräch anfragen
              </Link>
              <Link
                href="/de/relocation-assessment"
                className="rounded-full border border-[#173252] px-7 py-4 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
              >
                Area Briefing starten
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#173252]/10 bg-[#f6f1ea] px-6 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-xl tracking-[0.2em] text-[#173252]">
              NORDIC MOVE
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.45em] text-[#b88948]">
              Spain
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-500">
              Persönliche Käuferbegleitung für internationale Kunden an der
              Costa Blanca. Fachliche Prüfungen werden durch die jeweils
              qualifizierten externen Spezialisten durchgeführt.
            </p>
          </div>

          <nav aria-label="Rechtliche Navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#173252]">
              <li>
                <Link href="/de/contact" className="hover:text-[#b88948]">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/de/impressum" className="hover:text-[#b88948]">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/de/datenschutz" className="hover:text-[#b88948]">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}