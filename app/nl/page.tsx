const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
        alternates: {
          canonical: "/nl",
          languages: {
            "nl-NL": "/nl",
            en: "/",
            "de-DE": "/de",
            "sv-SE": "/sv",
            "x-default": "/",
          },
        },
      }
    : {}),
  title: "Veiliger een woning kopen aan de Costa Blanca | Nordic Move Spain",
  description:
    "Meer zekerheid, sneller duidelijkheid en één vast aanspreekpunt bij het kopen van een woning aan de Costa Blanca. Met Area Match, onafhankelijke controles en persoonlijke aankoopbegeleiding.",
  applicationName: "Nordic Move Spain",
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Vastgoed en relocation",
  keywords: [
    "woning kopen Costa Blanca",
    "aankoopbegeleiding Costa Blanca",
    "huis kopen in Spanje",
    "makelaar Costa Blanca",
    "aankoopmakelaar Costa Blanca",
    "Nederlandse aankoopmakelaar Costa Blanca",
    "technische inspectie woning Spanje",
    "juridische due diligence Spaans vastgoed",
    "verhuizen naar Costa Blanca",
    "relocation Costa Blanca",
    "Costa Blanca Noord",
  ],
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
  openGraph: {
    title: "Meer zekerheid bij het kopen aan de Costa Blanca | Nordic Move Spain",
    description:
      "Gericht zoeken met een gratis Area Match, onafhankelijke technische en juridische beoordelingen en één vast aanspreekpunt van oriëntatie tot aankomst.",
    type: "website",
    locale: "nl_NL",
    siteName: "Nordic Move Spain",
    ...(siteUrl
      ? {
          url: "/nl",
          images: [
            {
              url: "/images/laatste-homepage.png",
              alt: "Nordic Move Spain begeleidt internationale kopers bij een woning aan de Costa Blanca",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Veiliger en gerichter kopen aan de Costa Blanca | Nordic Move Spain",
    description:
      "Meer zekerheid, sneller duidelijkheid en één vast aanspreekpunt. Van gratis Area Match en woningselectie tot onafhankelijke controles en aankomst.",
    ...(siteUrl ? { images: ["/images/laatste-homepage.png"] } : {}),
  },
};

export default function DutchHomePage() {
  const guideCards = [
    {
      href: "/nl/guides/best-areas-costa-blanca-north-retirees",
      label: "Regiogids voor pensioen",
      title: "Beste plaatsen aan de Costa Blanca voor pensioen",
      text:
        "Een praktische gids voor internationale kopers die de beste plaatsen aan de Costa Blanca voor pensioen vergelijken.",
      cta: "Lees de pensioengids →",
      featured: true,
    },
    {
      href: "/nl/guides/buying-property-spain",
      label: "Kopen in Spanje",
      title: "Een woning kopen in Spanje",
      text:
        "Een complete gids over juridische controles, hypotheken, aankoopkosten en het aankoopproces voor internationale kopers.",
      cta: "Lees de gids →",
      featured: false,
    },
    {
      href: "/nl/guides/spaanse-regels-nederland",
      label: "Belastinggids voor Nederlanders",
      title: "Spaanse belastingregels voor Nederlandse huiseigenaren",
      text:
        "Wat Nederlandse kopers moeten weten over Spaanse vastgoedbelastingen, de Nederlandse aangifte, een tweede woning, verhuurinkomsten, vermogenswinst en het voorkomen van dubbele belasting.",
      cta: "Lees de belastinggids →",
      featured: false,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "#organization",
        name: "Nordic Move Spain",
        description:
          "Persoonlijke aankoopmakelaar en vast aanspreekpunt voor internationale kopers die veiliger en gerichter een woning willen kopen aan de Costa Blanca.",
      },
      {
        "@type": "WebPage",
        "@id": "#webpage",
        name: "Woning kopen aan de Costa Blanca | Nordic Move Spain",
        description:
          "Aankoopbegeleiding met gratis Area Match, gerichte woningselectie, twee onafhankelijke beoordelingen en één vast aanspreekpunt tot aankomst.",
        inLanguage: "nl-NL",
        about: {
          "@id": "#buyer-service",
        },
        publisher: {
          "@id": "#organization",
        },
      },
      {
        "@type": "Service",
        "@id": "#buyer-service",
        name: "Aankoopbegeleiding en relocation aan de Costa Blanca",
        serviceType: [
          "Area Match",
          "Woningselectie en bezichtigingen",
          "Technische inspectie en documentenscreening",
          "Coördinatie van juridische due diligence",
          "Verhuiscoördinatie",
          "Styling en inrichting",
        ],
        areaServed: {
          "@type": "Place",
          name: "Costa Blanca, Spanje",
        },
        provider: {
          "@id": "#organization",
        },
        audience: {
          "@type": "Audience",
          audienceType: "Internationale woningkopers",
        },
      },
    ],
  };

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/15 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="w-[180px]"></div>

          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/nl" className="border-b border-[#c8a063] pb-1">
              Home
            </a>

            <a href="/nl/regions" className="hover:text-white/70 transition">
              Regions
            </a>

            <a href="/nl/services" className="hover:text-white/70 transition">
              Services
            </a>

            <a href="/nl/guides" className="hover:text-white/70 transition">
              Guides
            </a>

            <a href="/nl/about-us" className="hover:text-white/70 transition">
              About us
            </a>

            <a href="/nl/contact" className="hover:text-white/70 transition">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href="/"
                aria-label="English version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                EN
              </a>

              <a
                href="/nl"
                aria-label="Dutch version"
                className="rounded-full border border-[#c8a063] bg-[#c8a063] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#b48a4f]"
              >
                NL
              </a>

              <a
                href="/de"
                aria-label="German version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                DE
              </a>

              <a
                href="/sv"
                aria-label="Swedish version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                SE
              </a>
            </div>

            <a
              href="/nl/contact"
              className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Plan een kennismaking
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Veilig en zorgvuldig een woning kopen aan de Costa Blanca met Nordic Move Spain"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/28 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca
            </p>

            <h1 className="mt-5 max-w-xl font-serif text-4xl leading-[1.02] text-[#f3ede3] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-5xl">
              Veiliger een woning kopen
              <br />
              aan de Costa Blanca.
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#f7f2ea] drop-shadow-[0_2px_12px_rgba(0,0,0,0.38)] md:text-xl">
              Voor internationale kopers die zekerheid en één vast aanspreekpunt
              willen. Nordic Move coördineert het traject van de juiste regio en
              woning tot onafhankelijke controles, aankoop en aankomst.
            </p>

            <p className="mt-7 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              Eén vast aanspreekpunt · Onafhankelijke controles · Van zoeken tot aankomst
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/nl/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Start met je gratis Area Match
              </a>

              <a
                href="/nl/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Plan een kennismaking
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PROOF BAR */}
      <section className="border-b border-stone-200/70 bg-white/75 px-8 py-5 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-4 text-center text-sm font-medium text-[#1e2a3a] md:grid-cols-3">
          <p>Persoonlijke begeleiding aan de kant van de koper</p>
          <p>Juridische én technische controle vóór aankoop</p>
          <p>Begeleiding in Nederlands, Engels, Duits en Zweeds</p>
        </div>
      </section>

      {/* COMPLETE BUYING & RELOCATION SUPPORT */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr] xl:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Meer dan een makelaar
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Persoonlijke aankoopbegeleiding met onafhankelijke controles en
                één vast aanspreekpunt
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-600">
                Een woning kopen in het buitenland hoort een mooie stap te zijn.
                Toch weten wij uit ervaring hoe snel onzekerheid kan ontstaan
                wanneer lokale kennis ontbreekt, verantwoordelijkheden onduidelijk
                zijn of professionals niet goed samenwerken.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Ook in onze directe omgeving zagen wij het misgaan: lekkages,
                verborgen gebreken en juridische problemen die pas na de aankoop
                aan het licht kwamen.
              </p>

              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-[#1e2a3a]">
                Toen wisten we: dit kan en moet anders.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Daarom hebben we zorgvuldig een team opgebouwd met onder meer een
                onafhankelijke Spaanse vastgoedadvocaat, een geregistreerd
                bouwkundig technicus en een betrouwbare bouw- en renovatiepartner.
                De betrokken architecten en architecten-technici zijn aangesloten
                bij hun Spaanse beroepsorganisaties en beschikken over de vereiste
                kwalificaties en beroepsaansprakelijkheidsverzekering.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Vóór de aankoop laten wij twee onafhankelijke controles uitvoeren.
                De vastgoedadvocaat onderzoekt onder meer eigendom, lasten,
                schulden, vergunningen en contracten. De bouwkundig technicus
                inspecteert en meet de woning en vergelijkt de feitelijke situatie
                met de beschikbare plannen en registraties. Zo krijg je meer
                duidelijkheid over mogelijke risico’s voordat je beslist.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Met één vast aanspreekpunt begeleiden en coördineren we het traject
                van Area Match tot aankoop en thuiskomen. Ook na de aankoop kunnen
                we helpen met verhuizing, scholen, nutsvoorzieningen, verbouwing,
                interieurdesign en styling.
              </p>

              <p className="mt-7 text-xl font-medium leading-relaxed text-stone-700">
                Gericht zoeken. Veiliger kopen. Zorgeloos aankomen.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/nl/relocation-assessment"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Vraag je gratis Area Match aan
                </a>

                <a
                  href="/nl/contact"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Plan een kennismaking
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[460px] lg:sticky lg:top-28 lg:ml-auto lg:mr-0">
              <div className="absolute -inset-2 rounded-[36px] bg-[#e9dfd2]"></div>

              <div className="relative overflow-hidden rounded-[32px] bg-white p-2 shadow-sm">
                <img
                  src="/images/founder.png"
                  alt="De oprichters van Nordic Move Spain"
                  className="h-auto max-h-[500px] w-full rounded-[26px] object-contain object-center"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CHOOSE YOUR STARTING POINT */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Waar sta jij in het proces?
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
              Start precies waar je onze begeleiding nodig hebt.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                href: "/nl/services/area-match",
                label: "Ik oriënteer mij nog",
                title: "Vind eerst de regio die bij je past",
                text: "Begin met een persoonlijke Area Match en krijg richting voordat je woningen gaat vergelijken.",
                cta: "Ontdek Area Match →",
              },
              {
                href: "/nl/services/purchase-safety-report",
                label: "Ik heb een woning gevonden",
                title: "Laat de aankoop onafhankelijk controleren",
                text: "Combineer juridische due diligence met een bouwkundige inspectie voordat je definitief beslist.",
                cta: "Ontdek Purchase Safety →",
              },
              {
                href: "/nl/services/move-in-ready",
                label: "Ik wil kopen én zorgeloos aankomen",
                title: "Laat ook de praktische uitvoering coördineren",
                text: "Van verhuizing en nutsvoorzieningen tot renovatie, inrichting en een zachte landing.",
                cta: "Ontdek Move-In Ready →",
              },
            ].map((route) => (
              <a
                key={route.href}
                href={route.href}
                className="rounded-[28px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  {route.label}
                </p>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {route.title}
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">{route.text}</p>
                <span className="mt-6 inline-block text-sm font-medium text-[#1e2a3a]">
                  {route.cta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NORDIC MOVE BUYER JOURNEY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              De Nordic Move Buyer Journey
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
              Vier duidelijke stappen, met één vast aanspreekpunt waar jij dat nodig hebt.
            </h2>

            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-lg font-medium leading-relaxed text-[#1e2a3a]">
                Je hoeft niet elke stap te gebruiken.
              </p>

              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Volg het volledige traject of kies alleen de onderdelen die passen bij
                jouw situatie: Area Match, Buyer Discovery, Purchase Safety of
                Move-In Ready.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            <a
              href="/nl/services/area-match"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/area-match.png"
                alt="Area Match Report voor internationale woningkopers aan de Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Stap 1 · Oriëntatie
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Area Match Report
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Een uitgebreid persoonlijk profiel, ondersteund door lokale feiten:
                  zorg, scholen, golf, community-profiel, voorzieningen,
                  infrastructuur en lifestyle-fit.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Vraag je gratis report aan →
                </div>
              </div>
            </a>

            <a
              href="/nl/services/discovery-trips"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/discover-card.png"
                alt="Internationale kopers tijdens een Buyer Discovery Experience aan de Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Stap 2 · Jouw route
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Buyer Discovery Experience
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Bekijk geselecteerde woningen en beleef de regio tijdens een
                  private experience of in een klein, zorgvuldig samengesteld
                  gezelschap met vergelijkbare interesses.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Ontdek de Discovery Experience →
                </div>
              </div>
            </a>

            <a
              href="/nl/services/purchase-safety-report"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/legal.png"
                alt="Technische en juridische woningcontrole vóór aankoop aan de Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Stap 3 · Checks vóór aankoop
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Purchase Safety
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Een onafhankelijke surveyor beoordeelt de technische staat en
                  vergelijkt de woning met beschikbare registraties en
                  documenten. Daarnaast regelen we een passende onafhankelijke
                  advocaat voor de juridische due diligence. Op basis van beide
                  rapportages ontvang je ons groen-oranje-rood aankoopadvies.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Ontdek Purchase Safety →
                </div>
              </div>
            </a>

            <a
              href="/nl/services/move-in-ready"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/move-in-ready-ibiza.png"
                alt="Move-In Ready begeleiding na aankoop van een woning aan de Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Stap 4 · Zachte landing
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Move-In Ready Support
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Wij bepalen samen met jou de interior direction en
                  coördineren styling, inrichting, lokale specialisten en waar
                  gewenst de afstemming met een betrouwbaar verhuisbedrijf.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Ontdek Move-In Ready →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* PURCHASE SAFETY — ONE CLEAR DECISION */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="bg-[#1e2a3a] p-12 text-white lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Twee onafhankelijke controles. Eén helder aankoopadvies.
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                Meer zekerheid voordat je beslist.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Een onafhankelijke surveyor inspecteert en meet de woning en
                vergelijkt deze met de beschikbare documenten. Zo worden gebreken,
                afwijkingen en mogelijke herstelpunten vroeg zichtbaar.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Een onafhankelijke advocaat controleert eigendom, lasten, schulden,
                vergunningen, contracten en overdrachtsvoorwaarden.
              </p>

              <p className="mt-6 text-base font-medium leading-relaxed text-[#c8a063]">
                Wij brengen beide rapportages samen in één duidelijk advies:
                doorgaan, heroverwegen of niet kopen.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/nl/services/purchase-safety-report"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Bekijk hoe Purchase Safety werkt
                </a>

                <a
                  href="/nl/contact"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
                >
                  Vraag naar een woningcheck
                </a>
              </div>
            </div>

            <div className="p-10 md:p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Twee onafhankelijke beoordelingen. Eén duidelijke beslissing.
              </p>

              <h3 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-[#1e2a3a]">
                Doorgaan, heroverwegen of niet kopen.
              </h3>

              <div className="mt-10 grid gap-6">
                <article className="rounded-[28px] border border-emerald-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">
                    Groen · Doorgaan
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    De controles geven voldoende vertrouwen om door te gaan,
                    binnen de genoemde voorwaarden.
                  </p>
                </article>

                <article className="rounded-[28px] border border-amber-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
                    Oranje · Heroverwegen
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Er zijn vragen of risico’s. Eerst is extra onderzoek,
                    herstel, heronderhandeling of aanvullende voorwaarden nodig.
                  </p>
                </article>

                <article className="rounded-[28px] border border-red-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-800">
                    Rood · Niet kopen
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    De risico’s zijn te groot. Koop niet, tenzij deze vóór je
                    commitment volledig en aantoonbaar zijn opgelost.
                  </p>
                </article>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                De documentcontrole door de onafhankelijke surveyor is een eerste
                vergelijking en vervangt geen juridische due diligence of formele
                bevestiging door bevoegde instanties. De technische en juridische
                controles worden uitgevoerd door onafhankelijke professionals,
                ieder verantwoordelijk voor de eigen rapportage. Extra
                specialistisch onderzoek kan nodig zijn. Geen controle biedt
                absolute zekerheid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONAL BUYER DISCOVERY */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#1e2a3a] text-white shadow-sm">
          <div className="grid items-center lg:grid-cols-[0.8fr_1.2fr]">
            <div className="p-5 md:p-7">
              <img
                src="/images/community-home.png"
                alt="Buyer Discovery Experience en lokale community aan de Costa Blanca"
                className="h-[300px] w-full rounded-[28px] object-cover md:h-[360px]"
                loading="lazy"
              />
            </div>

            <div className="p-9 md:p-12">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Optioneel · Buyer Discovery
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">
                Ervaar niet alleen de woning, maar ook het leven eromheen.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Kies voor een private Buyer Discovery Experience of ontdek de regio
                in een klein, zorgvuldig samengesteld gezelschap. Je beleeft
                voorzieningen, sfeer en dagelijks leven zonder dat deelname aan een
                groep onderdeel hoeft te zijn van je aankooptraject.
              </p>

              <a
                href="/nl/services/discovery-trips"
                className="mt-8 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Ontdek Buyer Discovery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMPACT MOVE-IN READY */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#e9dfd2] shadow-sm">
          <div className="grid items-center lg:grid-cols-[1fr_1fr]">
            <div className="p-10 md:p-12 lg:p-14">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Stap 4 · Move-In Ready
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Van sleuteloverdracht naar werkelijk thuiskomen.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Na de aankoop kunnen we de verhuizing, nutsvoorzieningen, lokale
                specialisten, renovatie, interieurdesign en inrichting coördineren.
                Je houdt één aanspreekpunt, terwijl de uitvoering wordt afgestemd op
                jouw woning, planning en budget.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-stone-500">
                Diensten worden uitgevoerd door geselecteerde externe specialisten.
                Scope, planning en kosten worden vooraf per onderdeel vastgelegd.
              </p>

              <a
                href="/nl/services/move-in-ready"
                className="mt-8 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Ontdek Move-In Ready
              </a>
            </div>

            <div className="p-6 md:p-8 lg:p-10">
              <img
                src="/images/move-in-ready-ibiza.png"
                alt="Woonklaar mediterraan interieur als inspiratie voor Move-In Ready begeleiding"
                className="h-[420px] w-full rounded-[30px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BUYER JOURNEY VISUAL SUMMARY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Het traject in één oogopslag
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
              Van eerste oriëntatie tot een woning die klaar is voor jouw aankomst.
            </h2>
            <p className="mt-5 leading-relaxed text-stone-600">
              Je kunt de volledige Buyer Journey volgen of alleen instappen bij de
              onderdelen die voor jouw situatie relevant zijn.
            </p>
          </div>

          <div className="overflow-hidden rounded-[36px] bg-white p-3 shadow-sm md:p-5">
            <img
              src="/images/buyer-journey.png"
              alt="Overzicht van de Nordic Move Buyer Journey van Area Match tot Move-In Support"
              className="h-auto w-full rounded-[28px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* GUIDES AND INSIGHTS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Kopersgidsen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Eerlijke begeleiding voordat je een woning koopt aan de Costa Blanca.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Een kleine selectie praktische gidsen voor internationale kopers
              die pensioenregio’s, het Spaanse aankoopproces en Nederlandse
              belastingzaken willen begrijpen voordat zij beslissen.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guideCards.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className={
                  guide.featured
                    ? "rounded-[32px] bg-[#1e2a3a] p-8 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    : "rounded-[32px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                }
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  {guide.label}
                </p>

                <h3
                  className={
                    guide.featured
                      ? "mt-5 font-serif text-3xl leading-tight text-white"
                      : "mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]"
                  }
                >
                  {guide.title}
                </h3>

                <p
                  className={
                    guide.featured
                      ? "mt-5 leading-relaxed text-white/75"
                      : "mt-5 leading-relaxed text-stone-600"
                  }
                >
                  {guide.text}
                </p>

                <span
                  className={
                    guide.featured
                      ? "mt-8 inline-block text-sm uppercase tracking-[0.25em] text-white"
                      : "mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#1e2a3a]"
                  }
                >
                  {guide.cta}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/nl/guides"
              className="inline-block rounded-full border border-[#1e2a3a] px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Bekijk alle kopersgidsen
            </a>
          </div>
        </div>
      </section>


      {/* FINAL GENERAL CTA */}
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] px-10 py-14 text-white shadow-sm md:px-16 md:py-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Persoonlijke begeleiding vanaf jouw startpunt
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Klaar om je aankoop zorgvuldig voor te bereiden?
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/80">
            Begin met een gratis Area Match wanneer je nog zoekt naar de juiste
            regio, of plan een persoonlijk gesprek wanneer je al een woning hebt
            gevonden of volledige begeleiding wilt bespreken.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/nl/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Vraag je gratis Area Match aan
            </a>

            <a
              href="/nl/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Plan een kennismaking
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}