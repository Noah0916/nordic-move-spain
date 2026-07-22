import type { Metadata } from "next";

const pagePath = "/nl/services/move-in-ready";

export const metadata: Metadata = {
  title:
    "Move-In Ready, renovatie, interieur en relocation Costa Blanca | Nordic Move Spain",
  description:
    "Move-In Ready ondersteuning aan de Costa Blanca met drie flexibele modules: Home Setup, Renovation & Interior en Family Relocation. Eén vast aanspreekpunt voor nutsvoorzieningen, renovatie, interieur, verhuizing, scholen en voorbereiding op uw aankomst.",
  keywords: [
    "Move-In Ready Costa Blanca",
    "renovatiebegeleiding Costa Blanca",
    "interieurdesign Costa Blanca",
    "interieur inrichting Spanje",
    "Home Setup Spanje",
    "relocation Costa Blanca",
    "verhuizen naar Spanje",
    "scholen Costa Blanca",
    "aannemer Costa Blanca",
    "woning inrichten Spanje",
    "Nordic Move Spain",
  ],
  alternates: {
    canonical: pagePath,
    languages: {
      "en-GB": "/services/move-in-ready",
      "nl-NL": pagePath,
      "de-DE": "/de/services/move-in-ready",
      "sv-SE": "/sv/services/move-in-ready",
    },
  },
  openGraph: {
    title:
      "Move-In Ready aan de Costa Blanca | Renovatie, interieur en relocation",
    description:
      "Kies Home Setup, Renovation & Interior, Family Relocation of een combinatie op maat. Nordic Move coördineert de praktische stappen van sleuteloverdracht tot aankomst.",
    type: "website",
    locale: "nl_NL",
    url: pagePath,
    images: [
      {
        url: "/images/interior-design.png",
        alt: "Move-In Ready renovatie, interieur en relocation aan de Costa Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Move-In Ready ondersteuning | Nordic Move Spain",
    description:
      "Home Setup, Renovation & Interior en Family Relocation voor internationale woningeigenaren aan de Costa Blanca.",
    images: ["/images/interior-design.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const serviceModules = [
  {
    id: "home-setup",
    eyebrow: "Module 01",
    title: "Home Setup",
    text:
      "Voor eigenaren die na de sleuteloverdracht snel de basis van de woning goed willen laten organiseren.",
    result:
      "Uw woning is praktisch voorbereid en de belangrijkste leveranciers en afspraken zijn overzichtelijk vastgelegd.",
    items: [
      "Elektriciteit en water helpen organiseren",
      "Internet, telefonie en televisie afstemmen",
      "Woning-, inboedel- en relevante verzekeringen vergelijken",
      "Alarm, beveiliging en toegangsoplossingen onderzoeken",
      "Schoonmaak en voorbereiding vóór aankomst coördineren",
      "Schilderwerk en kleine werkzaamheden laten offreren",
      "Tuin-, zwembad- en technisch onderhoud organiseren",
      "Leveranciers, afspraken en contractinformatie bundelen",
    ],
  },
  {
    id: "renovation-interior",
    eyebrow: "Module 02",
    title: "Renovation & Interior",
    text:
      "Voor woningen die moeten worden gerenoveerd, aangepast of volledig ingericht voordat u er comfortabel gebruik van kunt maken.",
    result:
      "Renovatie, interieurkeuzes, sourcing en uitvoering sluiten beter op elkaar aan binnen één gecoördineerd traject.",
    items: [
      "Inventarisatie van wensen, gebruik en budget",
      "Selectie en coördinatie van aannemer en specialisten",
      "Afstemming met architect of technical architect waar nodig",
      "Planning, offertes en voortgangsrapportages structureren",
      "Interieurconcept en visueel moodboard ontwikkelen",
      "Materialen, meubels en verlichting selecteren",
      "Levering, montage, installatie en styling coördineren",
      "Opleverpunten en eindcontrole vóór aankomst organiseren",
    ],
  },
  {
    id: "family-relocation",
    eyebrow: "Module 03",
    title: "Family Relocation",
    text:
      "Voor gezinnen en internationale professionals die niet alleen een woning, maar ook hun dagelijkse leven in Spanje willen voorbereiden.",
    result:
      "U krijgt een duidelijker en beter voorbereid vertrekpunt voor wonen, werken en leven aan de Costa Blanca.",
    items: [
      "Internationale verhuisbedrijven en opslagmogelijkheden vergelijken",
      "Scholen en kinderopvang in passende regio’s onderzoeken",
      "Zorg, verzekeringen en praktische voorzieningen in kaart brengen",
      "Lokale administratie en relevante vervolgstappen structureren",
      "Autotransport en gespecialiseerd vervoer onderzoeken",
      "Sportclubs, golfclubs en lokale communitymogelijkheden verkennen",
      "Lokale dienstverleners en dagelijkse voorzieningen selecteren",
      "Een persoonlijke relocationplanning samenstellen",
    ],
  },
];

const images = [
  {
    src: "/images/move-in-ready-costal.png",
    title: "Coastal Calm",
    text:
      "Een zachte, elegante kuststijl met natuurlijke materialen, rustige tinten, ontspannen comfort en ingetogen luxe.",
    alt: "Coastal Calm interieurstijl voor een woning aan de Costa Blanca",
  },
  {
    src: "/images/move-in-ready-ibiza.png",
    title: "Ibiza Soho Lounge",
    text:
      "Een warme en sociale mediterrane stijl met zachte wittinten, rustiek hout, geweven texturen en een verfijnd binnen-buitengevoel.",
    alt: "Ibiza Soho Lounge interieurstijl voor Move-In Ready ondersteuning",
  },
  {
    src: "/images/move-in-ready-kitchen.png",
    title: "Contemporary Coastal Kitchen",
    text:
      "Een lichte, architectonische stijl met strakke lijnen, grote ramen, lichte houtsoorten en een rustige kustsfeer.",
    alt: "Contemporary Coastal Kitchen interieur aan de Costa Blanca",
  },
  {
    src: "/images/move-in-ready-mediterranean-warmth.png",
    title: "Mediterranean Warmth",
    text:
      "Een ontspannen mediterrane leefstijl rondom terrassen, daglicht, buiten eten en comfortabel dagelijks wonen.",
    alt: "Mediterranean Warmth stijlrichting voor binnen- en buitenleven",
  },
];

const renovationInteriorSteps = [
  {
    title: "Wensen, gebruik en budget",
    text:
      "We bespreken hoe u de woning wilt gebruiken, welke onderdelen prioriteit hebben, welke sfeer u zoekt en welk budget en tijdspad realistisch zijn.",
  },
  {
    title: "Technische haalbaarheid",
    text:
      "Wanneer bouwkundige aanpassingen, installaties of vergunningen nodig zijn, worden de juiste gekwalificeerde professionals vroeg betrokken.",
  },
  {
    title: "Aannemer en specialisten",
    text:
      "We helpen een passende aannemer en relevante specialisten te selecteren en spreken vooraf af wie waarvoor verantwoordelijk is.",
  },
  {
    title: "Offertes en planning",
    text:
      "Werkzaamheden, offertes, materialen, beslismomenten en planning worden overzichtelijk gestructureerd voordat de uitvoering start.",
  },
  {
    title: "Interieurconcept en moodboard",
    text:
      "We ontwikkelen een duidelijke richting voor kleuren, materialen, texturen, meubels, verlichting en het binnen-buitenleven.",
  },
  {
    title: "Materialen en meubelsourcing",
    text:
      "Passende materialen, meubels, verlichting, raamdecoratie en accessoires worden gezocht binnen de gekozen stijl, planning en budgetkaders.",
  },
  {
    title: "Voortgang en besluitvorming",
    text:
      "Openstaande vragen, wijzigingen, budgetimpact en belangrijke beslissingen worden bijgehouden en met de betrokken partijen afgestemd.",
  },
  {
    title: "Levering, installatie en styling",
    text:
      "Binnen de afgesproken scope coördineren we levering, montage, installatie en de laatste stylinglaag van de woning.",
  },
  {
    title: "Opleverpunten",
    text:
      "Voor aankomst worden afgesproken opleverpunten, praktische benodigdheden en resterende acties overzichtelijk samengebracht.",
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

function absoluteUrl(path: string) {
  return siteUrl ? `${siteUrl}${path}` : path;
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Move-In Ready ondersteuning aan de Costa Blanca",
  description:
    "Flexibele ondersteuning na aankoop van een woning aan de Costa Blanca, verdeeld in Home Setup, Renovation & Interior en Family Relocation.",
  url: absoluteUrl(pagePath),
  areaServed: {
    "@type": "Place",
    name: "Costa Blanca, Spanje",
  },
  provider: {
    "@type": "Organization",
    name: "Nordic Move Spain",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Move-In Ready modules",
    itemListElement: serviceModules.map((module) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: module.title,
        description: module.text,
      },
    })),
  },
};

export default function MoveInReadyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="bg-[#f6f1ea] px-6 py-24 text-stone-900 md:px-8 md:py-28">
        <section className="mx-auto max-w-7xl">
          {/* HERO */}
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Na aankoop · Move-In Ready
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
            Van sleuteloverdracht naar een woning en dagelijks leven die klaar zijn voor uw aankomst.
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
            Na de aankoop moeten vaak nog tientallen praktische keuzes worden gemaakt.
            Denk aan nutsvoorzieningen, verzekeringen, verhuizing, renovatie,
            interieur, meubels, scholen en lokale dienstverleners. Vanuit het buitenland
            kan dat snel onoverzichtelijk worden.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
            Nordic Move Spain brengt deze stappen samen in drie flexibele modules:
            Home Setup, Renovation &amp; Interior en Family Relocation. U kiest alleen
            de ondersteuning die bij uw woning, gezin, planning en budget past.
          </p>

          <p className="mt-6 max-w-4xl text-lg font-medium leading-relaxed text-[#1e2a3a]">
            U houdt één vast aanspreekpunt, terwijl onafhankelijke en geselecteerde
            professionals verantwoordelijk blijven voor hun eigen advies en uitvoering.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/nl/contact"
              className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
            >
              Bespreek uw Move-In Ready-plan
            </a>
            <a
              href="https://wa.me/31683848239?text=Hallo%20Nordic%20Move%20Spain%2C%20ik%20wil%20graag%20mijn%20Move-In%20Ready-plan%20bespreken."
              target="_blank"
              rel="noreferrer"
              aria-label="Start een WhatsApp-gesprek met Nordic Move Spain over Move-In Ready"
              className="rounded-full border border-[#c8a063] px-8 py-4 text-sm font-medium text-[#9b6f35] transition hover:bg-[#c8a063] hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href="/nl/services"
              className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Bekijk alle diensten
            </a>
          </div>
          {/* MODULE NAVIGATION */}
          <section className="mt-16 rounded-[36px] bg-white p-7 shadow-sm md:p-9">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Drie flexibele modules
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Ga direct naar de ondersteuning die bij uw situatie past.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                De modules worden hieronder volledig uitgelegd. U kunt één module kiezen
                of meerdere onderdelen combineren binnen één afgestemd traject.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <a
                href="#home-setup"
                className="rounded-[24px] bg-[#f6f1ea] p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  Module 01
                </p>
                <h3 className="mt-3 font-serif text-2xl text-[#1e2a3a]">Home Setup</h3>
                <span className="mt-5 inline-block text-sm font-medium text-[#1e2a3a]">
                  Bekijk deze module →
                </span>
              </a>

              <a
                href="#renovation-interior"
                className="rounded-[24px] bg-[#1e2a3a] p-6 text-white transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  Module 02
                </p>
                <h3 className="mt-3 font-serif text-2xl">Renovation &amp; Interior</h3>
                <span className="mt-5 inline-block text-sm font-medium text-white">
                  Bekijk deze module →
                </span>
              </a>

              <a
                href="#family-relocation"
                className="rounded-[24px] bg-[#f6f1ea] p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  Module 03
                </p>
                <h3 className="mt-3 font-serif text-2xl text-[#1e2a3a]">Family Relocation</h3>
                <span className="mt-5 inline-block text-sm font-medium text-[#1e2a3a]">
                  Bekijk deze module →
                </span>
              </a>
            </div>
          </section>


          {/* RENOVATION & INTERIOR INTRO */}
          <section
            id="renovation-interior"
            className="mt-20 scroll-mt-28 overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white shadow-sm"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-9 md:p-12 lg:p-14">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Renovation &amp; Interior
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                  Renovatie en interieur moeten vanaf het begin op elkaar aansluiten.
                </h2>
                <p className="mt-7 text-lg leading-relaxed text-white/80">
                  Een renovatie wordt duurder en ingewikkelder wanneer technische keuzes,
                  indeling, verlichting, materialen en meubels pas laat op elkaar worden
                  afgestemd. Daarom combineren we de praktische renovatiecoördinatie met
                  een duidelijke interieur- en leefstijlrichting.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Waar nodig werken aannemer, architect, technical architect, leveranciers
                  en interieurspecialisten ieder vanuit hun eigen professionele rol. Nordic
                  Move bewaakt binnen de afgesproken scope de samenhang, openstaande vragen,
                  planning en vervolgstappen.
                </p>
              </div>

              <div className="bg-white p-9 text-stone-900 md:p-12 lg:p-14">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Geschikt voor onder meer
                </h3>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    "Volledige woningrenovatie",
                    "Keuken- of badkamerrenovatie",
                    "Schilderwerk en afwerking",
                    "Nieuwe verlichting en installaties",
                    "Interieurconcept en meubelplan",
                    "Tweede woning volledig inrichten",
                    "Terras en binnen-buitenleven",
                    "Oplevering vóór uw aankomst",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 px-9 pb-10 pt-8 md:px-12 lg:px-14">
              <div className="flex flex-wrap gap-4">
                <a
                  href="/nl/contact"
                  className="rounded-full bg-[#c8a063] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Bespreek Renovation &amp; Interior
                </a>
                <a
                  href="https://wa.me/31683848239?text=Hallo%20Nordic%20Move%20Spain%2C%20ik%20wil%20graag%20Renovation%20%26%20Interior%20bespreken."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/60 px-7 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* DESIGN DIRECTIONS */}
          <section className="mt-20">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Nordic Move Design
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Vier stijlrichtingen als vertrekpunt voor uw eigen woning.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Uw woning, smaak en dagelijks gebruik blijven leidend. Deze richtingen
                helpen om sfeer, materialen en binnen-buitenleven vroeg in het traject
                duidelijk te maken.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
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
                      Stijlrichting
                    </p>
                    <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                      {image.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-stone-600">
                      {image.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 max-w-4xl text-sm leading-relaxed text-stone-500">
              De getoonde beelden zijn stijlrichtingen ter inspiratie en geen afgeronde
              klantprojecten of woningadvertenties. Het definitieve ontwerp, de producten,
              planning en uitvoering worden afgestemd op de woning, technische
              haalbaarheid, het budget en de beschikbaarheid van gekozen partners.
            </p>
          </section>

          {/* RENOVATION & INTERIOR PROCESS */}
          <section className="mt-20 rounded-[40px] bg-white p-8 shadow-sm md:p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Renovation &amp; Interior-proces
            </p>
            <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Van eerste briefing tot een woning die praktisch en visueel samenhangt.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {renovationInteriorSteps.map((step, index) => (
                <article
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
                </article>
              ))}
            </div>
          </section>

          {/* HOME SETUP DETAIL */}
          <section
            id="home-setup"
            className="mt-20 scroll-mt-28 rounded-[40px] bg-[#e9dfd2] p-8 md:p-12 lg:p-14"
          >
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Home Setup
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  De praktische basis van uw woning geregeld vóór uw aankomst.
                </h2>
                <p className="mt-7 text-lg leading-relaxed text-stone-700">
                  Home Setup is bedoeld voor klanten die geen volledige renovatie of
                  gezinsverhuizing nodig hebben, maar wel betrouwbare ondersteuning zoeken
                  bij de eerste praktische stappen na de overdracht.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {serviceModules[0].items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] bg-white/80 p-5 text-sm leading-relaxed text-stone-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="px-8 pb-10 md:px-12 lg:px-14">
              <a
                href="/nl/contact"
                className="inline-flex rounded-full bg-[#1e2a3a] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Bespreek Home Setup
              </a>
            </div>
          </section>

          {/* FAMILY RELOCATION DETAIL */}
          <section
            id="family-relocation"
            className="mt-20 scroll-mt-28 overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-9 md:p-12 lg:p-14">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Family Relocation
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                  Niet alleen verhuizen, maar het dagelijkse leven goed voorbereiden.
                </h2>
                <p className="mt-7 text-lg leading-relaxed text-white/80">
                  Voor gezinnen en professionals gaat een succesvolle verhuizing verder
                  dan een verhuiswagen en een sleutel. Scholen, zorg, verzekeringen,
                  bereikbaarheid, sport, lokale voorzieningen en sociale aansluiting
                  bepalen mede of een nieuwe omgeving op lange termijn past.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-white/60">
                  Nordic Move kan informatie verzamelen, mogelijkheden vergelijken en
                  afspraken coördineren. Toelating tot scholen, administratieve besluiten
                  en dienstverlening door externe partijen kunnen niet worden gegarandeerd.
                </p>
              </div>

              <div className="bg-white p-9 text-stone-900 md:p-12 lg:p-14">
                <div className="grid gap-4 sm:grid-cols-2">
                  {serviceModules[2].items.map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 px-9 pb-10 pt-8 md:px-12 lg:px-14">
              <a
                href="/nl/contact"
                className="inline-flex rounded-full bg-[#c8a063] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Bespreek Family Relocation
              </a>
            </div>
          </section>

          {/* TRANSPARENCY */}
          <section className="mt-20 rounded-[40px] bg-white p-8 shadow-sm md:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                  Transparante samenwerking
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                  Eén coördinator, met duidelijke verantwoordelijkheden per specialist.
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-relaxed text-stone-600">
                <p>
                  Aannemers, architecten, technical architects, elektriciens,
                  verhuisbedrijven, verzekeraars, scholen, leveranciers en andere
                  professionals voeren hun eigen werkzaamheden zelfstandig uit en blijven
                  verantwoordelijk voor hun eigen advies, offertes en uitvoering.
                </p>
                <p>
                  Nordic Move selecteert, introduceert en coördineert de afgesproken
                  partijen. Welke diensten in onze opdracht zijn opgenomen, welke u
                  rechtstreeks afneemt en wie u afzonderlijk factureert, wordt vooraf
                  schriftelijk vastgelegd.
                </p>
                <p>
                  U blijft vrij om eigen professionals of leveranciers te kiezen. In dat
                  geval spreken we vooraf af welke coördinerende rol Nordic Move binnen het
                  traject kan vervullen.
                </p>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="mt-20 rounded-[40px] bg-[#1e2a3a] p-10 text-white md:p-14">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Kies wat u nodig heeft
            </p>
            <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
              Home Setup, Renovation &amp; Interior, Family Relocation — of een combinatie op maat.
            </h2>
            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
              Vertel ons wat er na de aankoop nog moet gebeuren. Samen bepalen we welke
              module past, welke professionals nodig zijn en hoe de planning en
              verantwoordelijkheden helder kunnen worden vastgelegd.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-[0.7fr_1.3fr]">
              <a
                href="/nl/contact"
                className="inline-flex min-h-[112px] items-center justify-center rounded-[28px] border border-white/35 px-8 py-6 text-center text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-[#1e2a3a]"
              >
                Gebruik het contactformulier
              </a>

              <a
                href="https://wa.me/31683848239?text=Hallo%20Nordic%20Move%20Spain%2C%20ik%20wil%20graag%20mijn%20Move-In%20Ready-plan%20bespreken%20voor%20Home%20Setup%2C%20Renovation%20%26%20Interior%20of%20Family%20Relocation."
                target="_blank"
                rel="noreferrer"
                aria-label="Start direct een WhatsApp-gesprek met Nordic Move Spain over Move-In Ready"
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
                    Direct via WhatsApp
                  </span>
                  <span className="mt-1 block font-serif text-2xl leading-tight">
                    Bespreek uw Move-In Ready-plan
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
          </section>
        </section>
      </main>
    </>
  );
}