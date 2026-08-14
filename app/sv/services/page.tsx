import type { Metadata } from "next";

const pagePath = "/se/services/area-match";

export const metadata: Metadata = {
  title:
    "Oberoende köparrepresentation Costa Blanca | Nordic Move Spain",
  description:
    "Nordic Move Spain representerar köparen oberoende. Vi tar inte emot något försäljningsarvode från säljarparten och guidar dig från Area Match och bostadssökning till köpkontroller, flytt och inredning på Costa Blanca.",
  keywords: [
    "Area Match Costa Blanca",
    "personlig köparrepresentant Costa Blanca",
    "köpa bostad Costa Blanca",
    "Buyer Discovery Experience Spanien",
    "köparrepresentation bostad Spanien",
    "Purchase Safety Report Spanien",
    "oberoende fastighetsbesiktning Spanien",
    "spansk fastighetsadvokat",
    "samordning av flyttföretag Spanien",
    "Move-In Ready Costa Blanca",
    "Nordic Move Spain",
  ],
  alternates: {
    canonical: pagePath,
    languages: {
      "en-GB": "/services/area-match",
      "nl-NL": "/nl/services/area-match",
      "de-DE": "/de/services/area-match",
      "sv-SE": pagePath,
    },
  },
  openGraph: {
    title:
      "Oberoende köparrepresentation Costa Blanca | Nordic Move Spain",
    description:
      "Oberoende vägledning för köpare: från Area Match och bostadssökning till visningar, köpkontroller, flytt och inredning.",
    type: "website",
    locale: "sv_SE",
    url: pagePath,
    images: [
      {
        url: "/images/brochure2-en.png",
        alt: "Nordic Move Spains tjänster för ett samordnat bostadsköp på Costa Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Area Match, Buyer Discovery & full köparrepresentation | Nordic Move Spain",
    description:
      "Oberoende köparrepresentation med en trygg kontaktperson, från Area Match och bostadssökning till Purchase Safety, flytt och inredning.",
    images: ["/images/brochure2-en.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    number: "01",
    eyebrow: "Kostnadsfri orientering",
    title: "Area Match Portfolio",
    text:
      "Du får en kostnadsfri, detaljerad och personlig portfolio som visar vilka regioner, orter och bostadstyper som bäst passar din livsstil, budget och dina långsiktiga planer. Det ger sökandet rätt fokus innan du lägger månader på bostäder som inte passar dig.",
    bullets: [
      "Personlig matchning utifrån livsstil och område",
      "Information om lämpliga orter och bostadsområden",
      "Inblick i service, vård, tillgänglighet och vardagsliv",
      "Tydligare bild av vilken bostadstyp som verkligen passar dig",
      "En tydlig grund för bostadssökning och visningar",
    ],
    href: "/se/relocation-assessment",
    cta: "Begär din kostnadsfria Area Match Portfolio",
  },
  {
    number: "02",
    eyebrow: "Personlig bostadssökning",
    title: "Buyer Discovery Experience",
    text:
      "Efter din Area Match representerar vi dig som köpare. Vi söker brett på marknaden och väljer ut lämpliga bostäder, skapar en fokuserad discovery-rutt och stöttar dig genom visningar, kommunikation, förhandlingar och köp. Vi tar inte emot något försäljningsarvode eller någon försäljningsprovision från säljarparten.",
    bullets: [
      "En personlig rutt genom lämpliga områden",
      "Riktad bostadssökning och urval",
      "Visningar anpassade efter din profil och dina prioriteringar",
      "Kommunikation med säljare och säljarens mäklare",
      "Stöd under förhandlingar och köpprocessen",
    ],
    href: "/se/services/discovery-trips",
    cta: "Läs mer om Buyer Discovery Experience",
  },
  {
    number: "03",
    eyebrow: "Oberoende köpkontroller",
    title: "Purchase Safety",
    text:
      "När en bostad blir ett seriöst alternativ samordnar vi en oberoende byggnadsteknisk expert för den tekniska bedömningen och en första granskning av dokument och registreringar, tillsammans med en oberoende spansk advokat för fullständig juridisk due diligence.",
    bullets: [
      "Synligt tekniskt skick, byggkvalitet, fukt och installationer",
      "Pool, uthus, reparationspunkter, fotografier och rekommendationer",
      "Nota Simple, Catastro, IBI, CEE och ITE där det är relevant",
      "Tillgängliga tillstånd, licenser och jämförelse mellan officiella och uppmätta ytor",
      "Två professionella rapporter och en tydlig köprekommendation från Nordic Move",
    ],
    href: "/se/services/purchase-safety-report",
    cta: "Läs mer om Purchase Safety",
    note:
      "Den exakta omfattningen av Purchase Safety beror på bostaden, den tillgängliga dokumentationen och vilka oberoende specialister som behövs. Omfattningen fastställs tydligt i förväg.",
  },
  {
    number: "04",
    eyebrow: "Efter köpet",
    title: "Move-In Ready & flyttsamordning",
    text:
      "Efter köpet fortsätter Nordic Move att vara din fasta kontaktpunkt. Move-In Ready är uppdelat i tre flexibla paket: Home Setup, Renovation & Interior och Family Relocation. Välj ett paket eller kombinera det stöd som passar din bostad, familj, tidsplan och budget.",
    bullets: [
      "Home Setup för el och vatten, försäkringar, säkerhet, städning och underhåll",
      "Renovation & Interior för entreprenörer, planering, inköp, möblering och styling",
      "Family Relocation för flytt, skolor, vård och förberedelser för vardagslivet",
      "En Nordic Move-kontaktperson för det överenskomna paketet eller kombinationen",
      "Utvalda oberoende specialister ansvarar fortsatt för sina egna råd och sitt eget genomförande",
    ],
    href: "/se/services/move-in-ready",
    cta: "Se alla tre Move-In Ready-paketen",
  },
];

const moveInReadyPackages = [
  {
    number: "01",
    title: "Home Setup",
    subtitle: "Den praktiska grunden för ditt hem",
    text:
      "För ägare som vill ha de viktigaste praktiska frågorna efter tillträdet ordnade före ankomst, utan att behöva en fullständig renovering eller en komplett familjeflytt.",
    result:
      "Bostaden är praktiskt förberedd och information om viktiga leverantörer, bokningar och avtal samlas i en tydlig översikt.",
    items: [
      "Hjälp med att ordna el och vatten",
      "Samordna internet, telefoni och tv",
      "Jämföra boende-, lösöres- och andra relevanta försäkringsalternativ",
      "Undersöka larm-, säkerhets- och åtkomstlösningar",
      "Samordna städning och förberedelser före ankomst",
      "Begära offerter för målning och mindre arbeten",
      "Ordna trädgårds-, pool- och tekniskt underhåll",
      "Samla information om leverantörer, bokningar och avtal",
    ],
  },
  {
    number: "02",
    title: "Renovation & Interior",
    subtitle: "Renovering och inredning i en samordnad process",
    text:
      "För bostäder som behöver renoveras, anpassas eller möbleras komplett innan de kan användas bekvämt.",
    result:
      "Renovering, inredningsval, inköp och genomförande samordnas så att tekniska beslut, planering och den färdiga boendemiljön fungerar bättre tillsammans.",
    items: [
      "Fastställa behov, användning, prioriteringar och budget",
      "Välja och samordna entreprenör och relevanta specialister",
      "Samordna med arkitekt eller teknisk arkitekt vid behov",
      "Strukturera offerter, planering och statusrapportering",
      "Ta fram ett inredningskoncept och en visuell moodboard",
      "Välja material, möbler och belysning",
      "Samordna leverans, montering, installation och styling",
      "Organisera kvarstående åtgärdspunkter och slutkontroller före ankomst",
    ],
  },
  {
    number: "03",
    title: "Family Relocation",
    subtitle: "Förbered vardagen, inte bara själva flytten",
    text:
      "För familjer och internationella yrkesverksamma som vill förbereda inte bara bostaden utan även de praktiska delarna av att bo, arbeta och etablera sig på Costa Blanca.",
    result:
      "Du får en tydligare och bättre förberedd startpunkt för flytten, skolor, vård, lokala tjänster och vardagslivet i Spanien.",
    items: [
      "Jämföra internationella flyttföretag och förvaringsalternativ",
      "Undersöka skolor och barnomsorg i lämpliga områden",
      "Kartlägga vård, försäkringar och praktisk service",
      "Strukturera lokal administration och relevanta nästa steg",
      "Undersöka biltransport och specialiserade transportalternativ",
      "Utforska sportklubbar, golfklubbar och lokala gemenskaper",
      "Välja lokala tjänsteleverantörer och vardagsservice",
      "Skapa en personlig flyttplan",
    ],
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

function absoluteUrl(path: string) {
  return siteUrl ? `${siteUrl}${path}` : path;
}

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Hem",
      item: absoluteUrl("/se"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Tjänster",
      item: absoluteUrl("/se/services"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Area Match & köpresa",
      item: absoluteUrl(pagePath),
    },
  ],
};

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nordic Move Spain köpresa",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.text,
      url: absoluteUrl(service.href),
      areaServed: {
        "@type": "Place",
        name: "Costa Blanca, Spanien",
      },
      provider: {
        "@type": "Organization",
        name: "Nordic Move Spain",
      },
      ...(service.number === "04"
        ? {
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Move-In Ready-paket",
              itemListElement: moveInReadyPackages.map((pkg) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: pkg.title,
                  description: pkg.text,
                },
              })),
            },
          }
        : {}),
    },
  })),
};

export default function AreaMatchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
        {/* BRÖDSMULOR */}
        <div className="px-6 pt-8 md:px-8">
          <nav aria-label="Brödsmulor" className="mx-auto max-w-7xl">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
              <li>
                <a href="/se" className="transition hover:text-[#173252]">
                  Hem
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a
                  href="/se/services"
                  className="transition hover:text-[#173252]"
                >
                  Tjänster
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#173252]">
                Area Match &amp; köpresa
              </li>
            </ol>
          </nav>
        </div>

        {/* HERO */}
        <section className="px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Oberoende köparrepresentation på Costa Blanca
              </p>

              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#173252] md:text-5xl">
                Vi representerar dig som köpare.
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#173252]">
                Därför arbetar vi oberoende och tar inte emot något försäljningsarvode eller någon försäljningsprovision från säljarparten, vilket är vanligt hos många traditionella mäklare. Vår utgångspunkt är ditt intresse som köpare.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
                Utifrån den positionen vägleder vi dig genom Area Match, bostadssökning, visningar, kommunikation, förhandlingar, oberoende köpkontroller och de praktiska stegen efter köpet. Under hela processen har du en trygg Nordic Move-kontaktperson.
              </p>

              <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  "Köparens intresse först",
                  "Inget försäljningsarvode från säljaren",
                  "En fast kontaktperson",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#173252]/10 bg-white/70 px-4 py-3 text-sm leading-relaxed text-stone-700"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/se/relocation-assessment"
                  className="rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                >
                  Få din kostnadsfria portfolio
                </a>

                <a
                  href="/se/contact"
                  className="rounded-full border border-[#173252] px-8 py-4 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
                >
                  Boka ett personligt samtal
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)] sm:translate-y-10">
                <img
                  src="/images/brochure1-en.png"
                  alt="Nordic Move Spain-broschyr om Buyer Discovery Experience och Move-In Ready-stöd"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)]">
                <img
                  src="/images/brochure2-en.png"
                  alt="Nordic Move Spain-broschyr om oberoende Purchase Safety-kontroller"
                  className="h-full w-full rounded-[26px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* VÅR OBEROENDE ROLL */}
        <section className="px-6 pb-20 md:px-8 md:pb-24">
          <div className="mx-auto max-w-7xl rounded-[30px] border border-[#173252]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Vår roll
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#173252] md:text-4xl">
                  Vi står på köparens sida.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  [
                    "Köparens intresse",
                    "Vi representerar dig som köpare och bedömer val utifrån ditt intresse, inte utifrån försäljningsintresset kring en bostad.",
                  ],
                  [
                    "Inget försäljningsarvode",
                    "Vi tar inte emot något försäljningsarvode eller någon försäljningsprovision från säljarparten. Det gör vår position gentemot köparen tydlig.",
                  ],
                  [
                    "Sökning på hela marknaden",
                    "Vi söker lämpliga bostäder på hela marknaden och är inte begränsade till utbudet hos en enda säljande mäklare.",
                  ],
                ].map(([title, text]) => (
                  <article key={title} className="rounded-2xl bg-[#f6f1ea] p-5">
                    <h3 className="font-serif text-xl text-[#173252]">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TJÄNSTEÖVERSIKT */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Din köpresa i fyra tydliga steg
              </p>

              <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                Från första orientering och bostadssökning till köpkontroller och stöd efter tillträdet.
              </h2>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="flex h-full flex-col rounded-[36px] bg-white p-8 shadow-sm md:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-medium tracking-[0.06em] text-[#b88948]">
                        {service.eyebrow}
                      </p>

                      <h3 className="mt-4 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                        {service.title}
                      </h3>
                    </div>

                    <span className="font-serif text-3xl text-[#d7bd94]">
                      {service.number}
                    </span>
                  </div>

                  <p className="mt-6 text-base leading-relaxed text-stone-600">
                    {service.text}
                  </p>

                  <ul className="mt-7 space-y-3 text-sm leading-relaxed text-stone-700">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b88948]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {service.number === "04" ? (
                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {moveInReadyPackages.map((pkg) => (
                        <div
                          key={pkg.title}
                          className="rounded-[20px] bg-[#f6f1ea] p-4"
                        >
                          <p className="text-[11px] font-medium tracking-[0.04em] text-[#b88948]">
                            Paket {pkg.number}
                          </p>
                          <p className="mt-2 font-serif text-lg leading-tight text-[#173252]">
                            {pkg.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {service.note ? (
                    <p className="mt-7 text-xs leading-relaxed text-stone-500">
                      * {service.note}
                    </p>
                  ) : null}

                  <a
                    href={service.href}
                    className="mt-8 inline-flex w-fit items-center border-b border-[#b88948] pb-1 text-xs font-medium tracking-[0.06em] text-[#173252] transition hover:text-[#b88948]"
                  >
                    {service.cta} →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AREA MATCH */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#173252] p-10 text-white md:p-14 lg:p-16">
                <p className="text-sm font-medium tracking-[0.08em] text-[#d1a866]">
                  Tjänst 01 · Area Match
                </p>

                <h2 className="mt-6 font-serif text-3xl leading-tight md:text-5xl">
                  En kostnadsfri portfolio som kan spara dig månader av sökande.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/80">
                  Area Match Portfolio är inte en generell lista över platser. Den samlar din livsstil, budget, framtidsplaner och vardagliga prioriteringar i en personlig jämförelse av lämpliga regioner, orter och boendemiljöer.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Det ger ditt sökande en tydlig riktning innan du börjar titta på hundratals bostäder. Det minskar risken att du lägger månader på områden som ser attraktiva ut online men inte passar det liv du vill leva.
                </p>

                <a
                  href="/se/relocation-assessment"
                  className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Begär din kostnadsfria Area Match Portfolio
                </a>
              </div>

              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Det här får du
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "En personlig profil av din livsstil och dina boendepreferenser",
                    "En jämförelse av lämpliga regioner, orter och bostadsområden",
                    "Information om atmosfär, tillgänglighet och vardagsliv",
                    "Inblick i vård, service och internationella gemenskaper",
                    "Vägledning kring lämpliga bostadstyper och boendemiljöer",
                    "En tydlig grund för bostadssökning, visningar och nästa steg",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-sm leading-relaxed text-stone-500">
                  Area Match Portfolio är kostnadsfri och utan förpliktelser. Innehållet anpassas efter din personliga situation, dina planer och preferenser.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BUYER DISCOVERY */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[40px] bg-white p-3 shadow-sm">
              <img
                src="/images/brochure1-en.png"
                alt="Nordic Move Spain-broschyr om Buyer Discovery Experience och Nordic Circle"
                className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
              />
            </div>

            <div>
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Tjänst 02 · Personlig bostadssökning &amp; Buyer Discovery
              </p>

              <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                Din personliga köparrepresentant för sökandet, visningarna och köpet.
              </h2>

              <p className="mt-7 text-base leading-relaxed text-stone-600 md:text-lg">
                Din Area Match Portfolio är grunden för en riktad bostadssökning. Eftersom vi representerar köparen tittar vi längre än utbudet hos en enda säljande mäklare. Vi väljer ut lämpliga bostäder på hela marknaden och skapar en fokuserad discovery-rutt genom områden och bostäder som passar din profil.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
                Vi organiserar visningarna, sköter kommunikationen med säljare och säljarens mäklare och vägleder dig genom frågor, förhandlingar och köpprocessen. Vi tar inte emot något försäljningsarvode eller någon försäljningsprovision från säljarparten. Det gör vår roll gentemot köparen tydlig.
              </p>

              <a
                href="/se/services/discovery-trips"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Läs mer om Buyer Discovery Experience
              </a>

            </div>
          </div>
        </section>

        {/* PURCHASE SAFETY */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                Tjänst 03 · Purchase Safety
              </p>

              <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                Två oberoende professionella rapporter före ditt slutliga beslut.
              </h2>

              <p className="mt-8 text-base leading-relaxed text-stone-600 md:text-lg">
                En oberoende byggnadsteknisk expert bedömer det synliga och åtkomliga tekniska skicket, byggkvalitet, fukt, vatteninträngning, installationer, pool, uthus och nödvändiga reparationer. Experten gör också en första granskning av dokument och registreringar.
              </p>

              <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                Granskningen kan bland annat omfatta Nota Simple, Catastro, IBI, CEE, ITE där det är relevant, information från mäklaren, tillgängliga tillstånd och licenser, jämförelse mellan officiella och uppmätta ytor samt tecken på delar av bostaden som eventuellt inte är registrerade.
              </p>

              <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                En lämplig oberoende spansk advokat genomför därefter fullständig juridisk due diligence och ansvarar för den juridiska bedömningen och rådgivningen. Utifrån båda rapporterna ger Nordic Move en tydlig rekommendation: gå vidare, ompröva eller avstå från köpet.
              </p>

              <a
                href="/se/services/purchase-safety-report"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Läs mer om Purchase Safety
              </a>

              <p className="mt-5 text-xs leading-relaxed text-stone-500">
                Den exakta omfattningen av Purchase Safety fastställs i förväg utifrån bostaden, den tillgängliga dokumentationen och vilka oberoende specialister som behövs.
              </p>
            </div>

            <div className="order-1 overflow-hidden rounded-[40px] bg-white p-3 shadow-sm lg:order-2">
              <img
                src="/images/brochure2-en.png"
                alt="Nordic Move Spain Purchase Safety-broschyr"
                className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* EN TRYGG KONTAKTPERSON */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-white p-10 shadow-sm md:p-14 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  En trygg kontaktperson
                </p>

                <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                  Du behöver inte själv samordna fem olika parter.
                </h2>

                <p className="mt-8 text-base leading-relaxed text-stone-600 md:text-lg">
                  Att köpa en bostad i Spanien innebär ofta kontakt med mäklare, säljare, en byggnadsteknisk expert, en advokat, en bolånerådgivare, ett flyttföretag och inredningsspecialister. Nordic Move förblir din fasta kontaktpunkt under hela den överenskomna processen.
                </p>

                <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                  Vi håller reda på vem som ansvarar för vad, vilken information som fortfarande saknas, vilka frågor som är öppna, vad nästa steg är och var förseningar eller risker kan uppstå.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "En personlig köparrepresentant",
                    "En Nordic Move-kontaktperson känner till dina behov, prioriteringar och uppmärksamhetspunkter genom hela processen.",
                  ],
                  [
                    "Full samordning",
                    "Vi samordnar de överenskomna specialisterna och ser till att de olika stegen hänger ihop.",
                  ],
                  [
                    "Tydliga nästa steg",
                    "Öppna frågor, ansvar, villkor och tidsfrister följs upp aktivt.",
                  ],
                  [
                    "Kontinuitet efter köpet",
                    "Vi fortsätter att vara involverade i introduktioner till bolån, flyttsamordning, styling och möblering.",
                  ],
                ].map(([title, text]) => (
                  <article
                    key={title}
                    className="rounded-[26px] bg-[#f6f1ea] p-6"
                  >
                    <h3 className="font-serif text-2xl text-[#173252]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MOVE-IN READY & FLYTTSAMORDNING */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#e9dfd2]">
            <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-10 md:p-14 lg:p-16">
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Tjänst 04 · Move-In Ready &amp; flyttsamordning
                </p>

                <h2 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                  Tre flexibla paket från genomfört köp till en förberedd ankomst.
                </h2>

                <p className="mt-8 text-base leading-relaxed text-stone-700 md:text-lg">
                  Efter köpet återstår ofta många praktiska beslut: el och vatten,
                  försäkringar, flytt, renovering, inredning, möbler, skolor och
                  lokala tjänsteleverantörer. Nordic Move samlar dessa steg i tre
                  tydliga Move-In Ready-paket.
                </p>

                <p className="mt-6 text-base leading-relaxed text-stone-700 md:text-lg">
                  Välj Home Setup, Renovation &amp; Interior eller Family Relocation —
                  eller kombinera paketen i en samordnad process. Du behåller en
                  Nordic Move-kontaktperson, medan utvalda oberoende yrkespersoner
                  ansvarar för sin egen specialistrådgivning, sina offerter och sitt
                  genomförande.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="/se/services/move-in-ready"
                    className="inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
                  >
                    Läs mer om Move-In Ready
                  </a>

                  <a
                    href="/se/contact"
                    className="inline-block rounded-full border border-[#173252] px-8 py-4 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
                  >
                    Prata med oss om ditt paket
                  </a>
                </div>
              </div>

              <div className="min-h-[520px]">
                <img
                  src="/images/interior-design.png"
                  alt="Move-In Ready-stöd för Home Setup, Renovation & Interior och Family Relocation på Costa Blanca"
                  className="h-full min-h-[520px] w-full object-cover"
                />
              </div>
            </div>

            <div className="border-t border-[#173252]/10 bg-white/45 p-8 md:p-12 lg:p-14">
              <div className="max-w-4xl">
                <p className="text-sm font-medium tracking-[0.08em] text-[#b88948]">
                  Välj det stöd som passar din situation
                </p>
                <h3 className="mt-5 font-serif text-2xl leading-tight text-[#173252] md:text-3xl">
                  De tre Move-In Ready-paketen.
                </h3>
                <p className="mt-5 text-base leading-relaxed text-stone-700 md:text-lg">
                  Varje paket kan väljas separat. Om din situation omfattar flera områden kan relevanta delar kombineras och samordnas inom en överenskommen omfattning.
                </p>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {moveInReadyPackages.map((pkg, index) => (
                  <article
                    key={pkg.title}
                    className={`flex h-full flex-col rounded-[30px] p-7 shadow-sm md:p-8 ${
                      index === 1
                        ? "bg-[#173252] text-white"
                        : "bg-white text-stone-900"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p
                          className={`text-xs font-medium tracking-[0.06em] ${
                            index === 1 ? "text-[#d1a866]" : "text-[#b88948]"
                          }`}
                        >
                          Paket {pkg.number}
                        </p>
                        <h4
                          className={`mt-3 font-serif text-3xl leading-tight ${
                            index === 1 ? "text-white" : "text-[#173252]"
                          }`}
                        >
                          {pkg.title}
                        </h4>
                      </div>
                      <span
                        className={`font-serif text-3xl ${
                          index === 1 ? "text-white/20" : "text-[#d7bd94]"
                        }`}
                      >
                        {pkg.number}
                      </span>
                    </div>

                    <p
                      className={`mt-5 text-sm font-medium ${
                        index === 1 ? "text-white/90" : "text-[#173252]"
                      }`}
                    >
                      {pkg.subtitle}
                    </p>

                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        index === 1 ? "text-white/75" : "text-stone-600"
                      }`}
                    >
                      {pkg.text}
                    </p>

                    <ul className="mt-6 space-y-3 text-sm leading-relaxed">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span
                            className={`mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full ${
                              index === 1 ? "bg-[#d1a866]" : "bg-[#b88948]"
                            }`}
                          />
                          <span
                            className={
                              index === 1 ? "text-white/80" : "text-stone-700"
                            }
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`mt-7 rounded-[22px] p-5 ${
                        index === 1 ? "bg-white/10" : "bg-[#f6f1ea]"
                      }`}
                    >
                      <p
                        className={`text-[11px] font-medium tracking-[0.04em] ${
                          index === 1 ? "text-[#d1a866]" : "text-[#b88948]"
                        }`}
                      >
                        Avsett resultat
                      </p>
                      <p
                        className={`mt-2 text-sm leading-relaxed ${
                          index === 1 ? "text-white/80" : "text-stone-700"
                        }`}
                      >
                        {pkg.result}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <p className="mt-8 max-w-5xl text-xs leading-relaxed text-stone-500">
                Omfattning, budget, planering och genomförande anpassas efter bostaden, dina behov och tillgängligheten hos utvalda lokala specialister och tjänsteleverantörer. Beslut om skolantagning, administrativa beslut och arbete som utförs av tredje part kan inte garanteras av Nordic Move.
              </p>
            </div>
          </div>
        </section>

        {/* SLUTLIG CTA */}
        <section className="px-6 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-7xl rounded-[42px] bg-[#173252] px-8 py-16 text-center text-white md:px-14 md:py-20">
            <p className="text-sm font-medium tracking-[0.08em] text-[#d1a866]">
              Oberoende vägledning för köpare
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl font-serif text-3xl leading-tight md:text-5xl">
              Ditt intresse som köpare kommer först, med en trygg kontaktperson.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/75">
              Börja med din Area Match Portfolio och fortsätt med en samordnad process för bostadssökning, Buyer Discovery, köpkontroller och praktiskt stöd efter köpet. Vi representerar köparen och tar inte emot något försäljningsarvode från säljarparten.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/se/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Få din kostnadsfria portfolio
              </a>

              <a
                href="/se/contact"
                className="rounded-full border border-white/70 px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#173252]"
              >
                Boka ett första samtal
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}