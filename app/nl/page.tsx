import { villas } from "../villas/villasData";

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
  title: "Zekerder kopen en verhuizen naar de Costa Blanca | Nordic Move Spain",
  description:
    "Aankoopbegeleiding en volledige relocation aan de Costa Blanca: van regio- en woningkeuze tot onafhankelijke controles, aankoop, administratie, renovatie, verhuizing en styling.",
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
    title: "Zekerder kopen en volledig begeleid verhuizen | Nordic Move Spain",
    description:
      "Van regio- en woningkeuze tot onafhankelijke controles, aankoop, administratie, renovatie, verhuizing en styling aan de Costa Blanca.",
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
    title: "Zekerder kopen en verhuizen naar de Costa Blanca | Nordic Move Spain",
    description:
      "Aankoopbegeleiding en volledige relocation: van Area Match en onafhankelijke controles tot aankoop, renovatie, verhuizing en styling.",
    ...(siteUrl ? { images: ["/images/laatste-homepage.png"] } : {}),
  },
};

export default function DutchHomePage() {
  const featuredVillaIds = [
    "20-4066",
    "70-397",
    "20-3358e",
    "20-4070c",
    "c02-36026",
    "c11-95246",
    "avs-56875",
    "avs-52785",
  ];

  const featuredVillas = featuredVillaIds
    .map((id) => villas.find((villa) => villa.id === id))
    .filter((villa): villa is (typeof villas)[number] => Boolean(villa));

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
          "Aankoop- en relocationbegeleiding voor internationale kopers die zekerder een woning willen kopen en hun verhuizing naar de Costa Blanca zorgvuldig willen organiseren.",
      },
      {
        "@type": "WebPage",
        "@id": "#webpage",
        name: "Woning kopen aan de Costa Blanca | Nordic Move Spain",
        description:
          "Aankoopbegeleiding en volledige relocation met Area Match, gerichte woningselectie, onafhankelijke technische en juridische controles en ondersteuning tot na aankomst.",
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
          "Home Setup en nutsvoorzieningen",
          "Renovation & Interior",
          "Family Relocation",
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
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/15 px-4 py-4 backdrop-blur-md md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* MOBILE BRAND / DESKTOP SPACER */}
          <a
            href="/nl"
            className="text-sm font-medium tracking-wide text-white md:hidden"
          >
            Nordic Move Spain
          </a>

          <div className="hidden w-[180px] md:block"></div>

          {/* DESKTOP MENU */}
          <div className="hidden gap-7 text-sm text-white md:flex">
            <a href="/nl" className="border-b border-[#c8a063] pb-1">
              Home
            </a>

            <a href="/nl/regions" className="transition hover:text-white/70">
              Regio&apos;s
            </a>

            <a href="/nl/villas" className="transition hover:text-white/70">
              Woningen
            </a>

            <a href="/nl/services" className="transition hover:text-white/70">
              Diensten
            </a>

            <a href="/nl/guides" className="transition hover:text-white/70">
              Gidsen
            </a>

            <a href="/nl/about-us" className="transition hover:text-white/70">
              Over ons
            </a>

            <a href="/nl/contact" className="transition hover:text-white/70">
              Contact
            </a>
          </div>

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden items-center gap-3 md:flex">
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

          {/* MOBILE HAMBURGER MENU */}
          <details className="relative md:hidden">
            <summary
              aria-label="Menu openen"
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/40 text-2xl text-white [&::-webkit-details-marker]:hidden"
            >
              ☰
            </summary>

            <div className="absolute right-0 mt-3 w-[280px] rounded-2xl bg-[#1e2a3a] p-6 text-white shadow-2xl">
              <div className="flex flex-col gap-5 text-base">
                <a href="/nl">Home</a>
                <a href="/nl/regions">Regio&apos;s</a>
                <a href="/nl/villas">Woningen</a>
                <a href="/nl/services">Diensten</a>
                <a href="/nl/guides">Gidsen</a>
                <a href="/nl/about-us">Over ons</a>
                <a href="/nl/contact">Contact</a>
              </div>

              <div className="my-6 border-t border-white/20"></div>

              <div className="flex flex-wrap gap-2">
                <a href="/" className="rounded-full border border-white/40 px-3 py-2 text-xs">
                  EN
                </a>
                <a href="/nl" className="rounded-full bg-[#c8a063] px-3 py-2 text-xs">
                  NL
                </a>
                <a href="/de" className="rounded-full border border-white/40 px-3 py-2 text-xs">
                  DE
                </a>
                <a href="/sv" className="rounded-full border border-white/40 px-3 py-2 text-xs">
                  SE
                </a>
              </div>

              <a
                href="/nl/contact"
                className="mt-6 block rounded-full bg-[#c8a063] px-5 py-3 text-center text-sm font-medium text-white"
              >
                Plan een kennismaking
              </a>
            </div>
          </details>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Zekerder een woning kopen en volledig begeleid verhuizen naar de Costa Blanca met Nordic Move Spain"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/28 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca
            </p>

            <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.02] text-[#f3ede3] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-5xl">
              Veilig kopen aan de Costa Blanca.
              <span className="mt-2 block text-[0.78em] leading-tight text-[#f3ede3]/95">
                Met meer zekerheid en transparantie.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#f7f2ea] drop-shadow-[0_2px_12px_rgba(0,0,0,0.38)] md:text-xl">
              Nordic Move Spain begeleidt internationale kopers van de juiste regio en
              woning tot onafhankelijke technische en juridische controles, aankoop en
              volledige relocation.
            </p>

            <p className="mt-7 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              Dubbele aankoopcontrole · Volledige relocation · Eén vertrouwd aanspreekpunt
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/nl/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Ontvang uw gratis persoonlijke Area Match Report
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

      {/* FEATURED PROPERTY SELECTION */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Woningselectie
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Geselecteerde woningen uit ons bredere netwerk.
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-600">
                Nordic Move Spain is niet gebonden aan één makelaar of één portefeuille.
                We werken met meerdere vastgoedprofessionals aan de Costa Blanca Noord en
                zoeken de bredere markt namens onze kopers.
              </p>
            </div>

            <a
              href="/nl/villas"
              className="inline-flex w-fit rounded-full border border-[#1e2a3a] px-7 py-3 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Bekijk alle 54 villa&apos;s
            </a>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {featuredVillas.map((villa) => (
              <a
                key={villa.id}
                href={`/nl/villas/${villa.id}`}
                className="group overflow-hidden rounded-[30px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={villa.images[0]}
                    alt={`Villa in ${villa.location}`}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                    {villa.location}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl text-[#1e2a3a]">
                    €{villa.price.toLocaleString("nl-NL")}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-stone-600">
                    {villa.beds} slaapkamers · {villa.baths} badkamers
                    {villa.built ? ` · ${villa.built} m² woonoppervlak` : ""}
                  </p>

                  <span className="mt-6 inline-block text-sm font-medium text-[#1e2a3a]">
                    Bekijk woning en foto&apos;s →
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-[30px] bg-[#e9dfd2] p-7 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h3 className="font-serif text-2xl text-[#1e2a3a]">
                Staat de juiste woning er niet tussen?
              </h3>

              <p className="mt-3 max-w-3xl leading-relaxed text-stone-600">
                Vertel ons wat u zoekt. Wij kunnen namens u zoeken bij verschillende
                makelaars, binnen ons professionele netwerk en naar aanvullende
                marktmogelijkheden.
              </p>
            </div>

            <a
              href="/nl/contact"
              className="mt-6 inline-flex shrink-0 rounded-full bg-[#1e2a3a] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2b3a4d] md:mt-0"
            >
              Vertel ons wat u zoekt
            </a>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-stone-400">
            Woningen worden aangeboden via samenwerkende vastgoedpartners. Nordic Move Spain
            vertegenwoordigt en adviseert de koper.
          </p>
        </div>
      </section>

      {/* COMPLETE BUYING & RELOCATION SUPPORT */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr] xl:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Aankoopbegeleiding &amp; relocation
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Meer zekerheid vóór u beslist.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-600">
                Een woning in Spanje kan er prachtig uitzien, terwijl technische of
                juridische risico’s tijdens een bezichtiging niet zichtbaar zijn.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Daarom laten wij een serieuze aankoop vóór uw definitieve beslissing{" "}
                <strong className="font-medium text-[#1e2a3a]">
                  onafhankelijk bouwkundig én juridisch controleren
                </strong>
                . De belangrijkste bevindingen worden samengebracht, zodat u beter weet
                wat u koopt. Zijn de risico’s te groot, dan adviseren we u om niet te kopen.
              </p>

              <h3 className="mt-10 max-w-2xl font-serif text-3xl leading-tight text-[#1e2a3a]">
                Veilig kopen begint met weten waar u moet zoeken.
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Voordat u woningen gaat bekijken, brengen we uw wensen, budget,
                levensstijl en toekomstplannen uitgebreid in kaart.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Na een gedetailleerde vragenlijst ontvangt u een{" "}
                <strong className="font-medium text-[#1e2a3a]">
                  gratis persoonlijk Area Match Report
                </strong>{" "}
                met de regio’s die het beste bij u passen — inclusief relevante
                informatie over veiligheid, gezondheidszorg, voorzieningen,
                bereikbaarheid, prijsniveau, lifestyle en geschikte zoekzones.
              </p>

              <p className="mt-7 max-w-2xl text-xl font-medium leading-relaxed text-[#1e2a3a]">
                Eerst de juiste regio. Daarna de juiste woning. Vervolgens controleren
                we zorgvuldig wat u koopt.
              </p>

              <div className="mt-8">
                <a
                  href="/nl/relocation-assessment"
                  className="inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Ontvang uw gratis persoonlijke Area Match Report
                </a>
              </div>

              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-stone-600">
                Onze begeleiding stopt niet bij de sleuteloverdracht. Van Buyer Discovery
                en woningselectie tot aankoop, verhuizing, renovatie, interieur en
                praktische relocation: Nordic Move coördineert het traject vanuit één
                vertrouwd aanspreekpunt.
              </p>

              <p className="mt-7 text-sm font-medium uppercase tracking-[0.2em] text-[#c8a063]">
                Dubbele aankoopcontrole · Volledige relocation · Eén vertrouwd aanspreekpunt
              </p>

              <div className="mt-9">
                <a
                  href="/nl/contact"
                  className="inline-block rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
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

      {/* NORDIC MOVE BUYER JOURNEY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              De Nordic Move Buyer Journey
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
              Kies de begeleiding die bij uw situatie past.
            </h2>

            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-lg font-medium leading-relaxed text-[#1e2a3a]">
                U hoeft niet het volledige traject te volgen.
              </p>

              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Kies alleen de ondersteuning die u nodig heeft — van het vinden van de
                juiste regio en een persoonlijke Buyer Discovery tot onafhankelijke
                aankoopcontroles en een woning die klaar is voor uw aankomst.
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
                alt="Persoonlijk Area Match Report voor internationale woningkopers aan de Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Oriëntatie
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Area Match Report
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Ontdek welke regio&apos;s, plaatsen en levensstijlen het beste passen bij
                  uw prioriteiten, budget en langetermijnplannen. Uw persoonlijke
                  rapport bevat lokale informatie over zorg, scholen, voorzieningen,
                  bereikbaarheid en community-fit.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Vraag uw gratis Area Match aan →
                </div>
              </div>
            </a>

            <a
              href="/nl/services/discovery-trips"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/discover-card.png"
                alt="Private en kleinschalige Buyer Discovery Experience aan de Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Beperkte edities · Optioneel
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Buyer Discovery Experience
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Ervaar geselecteerde woningen, woonwijken en het dagelijkse leven
                  tijdens een private discovery of een zorgvuldig samengestelde
                  kleinschalige editie. Beschikbaar op geselecteerde data en op basis
                  van beschikbaarheid.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Ontdek Buyer Discovery →
                </div>
              </div>
            </a>

            <a
              href="/nl/services/purchase-safety-report"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/legal.png"
                alt="Onafhankelijke technische en juridische controles vóór aankoop aan de Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Checks vóór aankoop
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Purchase Safety
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Heeft u al een woning gevonden? Wij coördineren een onafhankelijke
                  technische inspectie en regelen een passende onafhankelijke advocaat
                  voor de juridische due diligence voordat u zich definitief vastlegt.
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
                alt="Move-In Ready renovatie, relocation en interieurbegeleiding aan de Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Na de aankoop
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Move-In Ready Support
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Van nutsvoorzieningen en verhuisbegeleiding tot renovatie,
                  interieurdesign, inrichting en de laatste voorbereiding. Wij
                  coördineren de praktische stappen rond uw woning, planning en budget.
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
                Meer zekerheid voordat u beslist.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Een onafhankelijke, gekwalificeerde Building Surveyor en Chartered
                Construction Manager (CIOB), tevens <em>Arquitecto Técnico</em> in Spanje,
                inspecteert en meet de woning en vergelijkt de feitelijke situatie met de
                beschikbare documenten en registraties. Zo worden gebreken, afwijkingen
                en mogelijke herstelpunten vroeg zichtbaar.
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
                    De risico’s zijn te groot. Koop niet, tenzij deze vóór uw
                    definitieve commitment volledig en aantoonbaar zijn opgelost.
                  </p>
                </article>
              </div>

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
                Ontdek niet alleen waar u wilt wonen, maar ook met wie u zich thuis kunt voelen.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Een nieuw leven aan de Costa Blanca draait om meer dan een mooie woning.
                Het gaat ook om de mensen om u heen, de plekken waar u graag komt en het
                gevoel dat u ergens kunt aansluiten.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Tijdens een Buyer Discovery Experience ontdekt u daarom niet alleen
                geselecteerde regio’s en woningen. We laten u ook kennismaken met het
                dagelijkse leven eromheen — van lokale clubs en restaurants tot golf,
                padel en andere activiteiten die bij uw interesses passen.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Misschien ontmoet u iemand met wie u later regelmatig luncht, een
                golfmaatje of een buurvrouw die net zo graag padelt als u. U kunt kiezen
                voor een private ervaring of, wanneer dat bij u past, voor een klein en
                zorgvuldig samengesteld gezelschap van mensen met vergelijkbare interesses
                en levensfase.
              </p>

              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-[#c8a063]">
                Niet alleen een woning vinden. Ook ontdekken waar u zich werkelijk thuis kunt voelen.
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

      {/* EXPANDED MOVE-IN READY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#e9dfd2] shadow-sm">
          <div className="grid items-stretch lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center p-10 md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Na aankoop · Move-In Ready
              </p>

              <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-6xl">
                Van sleuteloverdracht naar een woning die klaar is voor uw aankomst.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-700">
                Na de aankoop moeten vaak nog tientallen praktische keuzes worden gemaakt.
                Nordic Move brengt deze stappen samen in drie flexibele modules: Home Setup,
                Renovation &amp; Interior en Family Relocation.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
                U kiest alleen de ondersteuning die past bij uw woning, gezin, planning
                en budget. Wij coördineren de afgesproken partijen en vervolgstappen, terwijl
                iedere externe specialist verantwoordelijk blijft voor het eigen advies en
                de uitvoering.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/nl/services/move-in-ready"
                  className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
                >
                  Ontdek Move-In Ready
                </a>

                <a
                  href="/nl/contact"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Plan een kennismaking
                </a>

                <a
                  href="https://wa.me/31683848239?text=Hallo%20Nordic%20Move%20Spain%2C%20ik%20wil%20graag%20mijn%20Move-In%20Ready-plan%20bespreken."
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Bespreek uw Move-In Ready-plan via WhatsApp"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1e2a3a] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c8a063] text-white">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M16.04 3C8.87 3 3.05 8.78 3.05 15.91c0 2.28.6 4.51 1.75 6.47L3 29l6.82-1.77a13.03 13.03 0 0 0 6.22 1.58h.01C23.21 28.81 29 23.03 29 15.9 29 8.78 23.21 3 16.04 3Zm0 23.62h-.01a10.83 10.83 0 0 1-5.52-1.51l-.4-.24-4.05 1.05 1.08-3.93-.26-.4a10.7 10.7 0 0 1-1.65-5.68c0-5.92 4.85-10.74 10.82-10.74 5.96 0 10.81 4.82 10.81 10.74 0 5.92-4.85 10.71-10.82 10.71Zm5.94-8.02c-.33-.16-1.92-.94-2.22-1.05-.3-.11-.52-.16-.74.16-.22.33-.85 1.05-1.04 1.27-.19.22-.38.24-.71.08-.33-.16-1.38-.5-2.63-1.61a9.8 9.8 0 0 1-1.82-2.25c-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.7 0 1.59 1.17 3.13 1.33 3.35.16.22 2.3 3.48 5.57 4.88.78.33 1.38.53 1.86.68.78.25 1.49.21 2.05.13.63-.09 1.92-.78 2.19-1.54.27-.76.27-1.4.19-1.54-.08-.14-.3-.22-.63-.38Z" />
                    </svg>
                  </span>
                  Bespreek via WhatsApp
                </a>
              </div>
            </div>

            <div className="relative min-h-[480px] p-6 md:p-8 lg:min-h-[650px] lg:p-10">
              <img
                src="/images/move-in-ready-mediterranean-warmth.png"
                alt="Mediterrane Move-In Ready woning met terras en buitenkeuken aan de Costa Blanca"
                className="h-full min-h-[440px] w-full rounded-[32px] object-cover lg:min-h-[570px]"
                loading="lazy"
              />

              <div className="absolute bottom-10 left-10 right-10 rounded-[26px] bg-white/90 p-6 shadow-lg backdrop-blur md:bottom-12 md:left-12 md:right-auto md:max-w-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  Eén afgestemd traject
                </p>
                <p className="mt-3 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  Praktische voorbereiding, renovatie en inrichting in samenhang.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1e2a3a]/10 px-8 py-10 md:px-12 md:py-12 lg:px-16">
            <div className="grid gap-6 lg:grid-cols-3">
              <a
                href="/nl/services/move-in-ready#home-setup"
                className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                  Module 01
                </p>
                <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  Home Setup
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Nutsvoorzieningen, internet, verzekeringen, beveiliging, schoonmaak,
                  onderhoud en kleine werkzaamheden vóór uw aankomst.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-[#1e2a3a]">
                  Bekijk Home Setup →
                </span>
              </a>

              <a
                href="/nl/services/move-in-ready#renovation-interior"
                className="rounded-[30px] bg-[#1e2a3a] p-8 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                  Module 02
                </p>
                <h3 className="mt-4 font-serif text-3xl">
                  Renovation &amp; Interior
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Renovatiecoördinatie, aannemer en specialisten, interieurconcept,
                  materialen, meubels, verlichting, installatie en styling.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-white">
                  Bekijk Renovation &amp; Interior →
                </span>
              </a>

              <a
                href="/nl/services/move-in-ready#family-relocation"
                className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                  Module 03
                </p>
                <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  Family Relocation
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Verhuisbedrijf, scholen, zorg, verzekeringen, administratie, lokale
                  voorzieningen en aansluiting bij clubs en community.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-[#1e2a3a]">
                  Bekijk Family Relocation →
                </span>
              </a>
            </div>

            <p className="mt-8 max-w-5xl text-sm leading-relaxed text-stone-500">
              De modules kunnen afzonderlijk of gecombineerd worden afgenomen. Scope,
              planning, kosten en verantwoordelijkheden worden vooraf per onderdeel
              vastgelegd. Externe professionals blijven verantwoordelijk voor hun eigen
              advies, offertes en uitvoering.
            </p>
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
              Eerlijke begeleiding voordat u een woning koopt aan de Costa Blanca.
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
            Persoonlijke begeleiding vanaf uw startpunt
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Klaar om uw aankoop zorgvuldig voor te bereiden?
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/80">
            Begin met een gratis Area Match wanneer u nog zoekt naar de juiste
            regio, of plan een persoonlijk gesprek wanneer u al een woning heeft
            gevonden of volledige begeleiding wilt bespreken.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/nl/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Vraag uw gratis Area Match aan
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