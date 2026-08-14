const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
        alternates: {
          canonical: "/sv",
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
  title: "Köp bostad på Costa Blanca med större trygghet | Nordic Move Spain",
  description:
    "Större trygghet, snabbare klarhet och en pålitlig kontaktperson när du köper bostad på Costa Blanca. Med Area Match, oberoende kontroller och personligt köparstöd.",
  applicationName: "Nordic Move Spain",
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Fastigheter och relocation",
  keywords: [
    "köpa bostad Costa Blanca",
    "köparstöd Costa Blanca",
    "köpa hus i Spanien",
    "fastighetsmäklare Costa Blanca",
    "köprådgivare Costa Blanca",
    "internationell köprådgivare Costa Blanca",
    "fastighetsbesiktning Spanien",
    "juridisk due diligence spansk fastighet",
    "flytta till Costa Blanca",
    "relocation Costa Blanca",
    "Costa Blanca North",
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
    title: "Större trygghet när du köper på Costa Blanca | Nordic Move Spain",
    description:
      "Sök med tydlig riktning med en kostnadsfri Area Match, oberoende tekniska och juridiska bedömningar och en pålitlig kontaktperson från orientering till inflyttning.",
    type: "website",
    locale: "sv_SE",
    siteName: "Nordic Move Spain",
    ...(siteUrl
      ? {
          url: "/sv",
          images: [
            {
              url: "/images/laatste-homepage.png",
              alt: "Nordic Move Spain hjälper internationella köpare att köpa bostad på Costa Blanca",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Köp tryggare och med tydligare riktning på Costa Blanca | Nordic Move Spain",
    description:
      "Större trygghet, snabbare klarhet och en pålitlig kontaktperson. Från en kostnadsfri Area Match och bostadsurval till oberoende kontroller och inflyttning.",
    ...(siteUrl ? { images: ["/images/laatste-homepage.png"] } : {}),
  },
};

export default function HemPage() {
  const guideCards = [
    {
      href: "/sv/guides/best-areas-costa-blanca-north-retirees",
      label: "Guide för pensionärsområden",
      title: "Bästa platserna på Costa Blanca för pensionering",
      text:
        "En praktisk guide för internationella köpare som jämför de bästa platserna att pensionera sig på Costa Blanca.",
      cta: "Läs pensionsguiden →",
      featured: true,
    },
    {
      href: "/sv/guides/buying-property-spain",
      label: "Köpa i Spanien",
      title: "Köpa bostad i Spanien",
      text:
        "En komplett guide till juridiska kontroller, bolån, köpkostnader och köpprocessen för internationella köpare.",
      cta: "Läs guiden →",
      featured: false,
    },
    {
      href: "/sv/guides/dutch-tax-second-home-spain",
      label: "Skatteguide för köpare från Storbritannien",
      title: "Spanska skatteregler för brittiska fastighetsägare",
      text:
        "Det brittiska köpare behöver veta om spansk fastighetsskatt, brittiska skattefrågor, fritidsbostäder, hyresintäkter, kapitalvinster och hur dubbelbeskattning undviks.",
      cta: "Läs skatteguiden →",
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
          "Personligt köparstöd och en pålitlig kontaktperson för internationella köpare som vill köpa bostad på Costa Blanca med större trygghet och tydligare riktning.",
      },
      {
        "@type": "WebPage",
        "@id": "#webpage",
        name: "Köpa bostad på Costa Blanca | Nordic Move Spain",
        description:
          "Köparstöd med en kostnadsfri Area Match, riktat bostadsurval, två oberoende bedömningar och en pålitlig kontaktperson hela vägen till inflyttning.",
        inLanguage: "sv-SE",
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
        name: "Köparstöd och relocation på Costa Blanca",
        serviceType: [
          "Area Match",
          "Bostadsurval och visningar",
          "Teknisk besiktning och dokumentgranskning",
          "Samordning av juridisk due diligence",
          "Home Setup och anslutningar",
          "Renovation & Interior",
          "Family Relocation",
        ],
        areaServed: {
          "@type": "Place",
          name: "Costa Blanca, Spanien",
        },
        provider: {
          "@id": "#organization",
        },
        audience: {
          "@type": "Audience",
          audienceType: "Internationella bostadsköpare",
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

      {/* NAVIGERING */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/15 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="w-[180px]"></div>

          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/sv" className="border-b border-[#c8a063] pb-1">
              Hem
            </a>

            <a href="/sv/regions" className="hover:text-white/70 transition">
              Regioner
            </a>

            <a href="/sv/services" className="hover:text-white/70 transition">
              Tjänster
            </a>

            <a href="/sv/guides" className="hover:text-white/70 transition">
              Guider
            </a>

            <a href="/sv/about-us" className="hover:text-white/70 transition">
              Om oss
            </a>

            <a href="/sv/contact" className="hover:text-white/70 transition">
              Kontakt
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href="/"
                aria-label="Engelsk version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                EN
              </a>

              <a
                href="/nl"
                aria-label="Nederländsk version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                NL
              </a>

              <a
                href="/de"
                aria-label="Tysk version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                DE
              </a>

              <a
                href="/sv"
                aria-label="Svensk version"
                className="rounded-full border border-[#c8a063] bg-[#c8a063] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#b48a4f]"
              >
                SE
              </a>
            </div>

            <a
              href="/sv/contact"
              className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Boka ett introduktionssamtal
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Köp bostad på Costa Blanca med noggrant och oberoende stöd från Nordic Move Spain"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/28 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca
            </p>

            <h1 className="mt-5 max-w-xl font-serif text-4xl leading-[1.02] text-[#f3ede3] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-5xl">
              Köp bostad med större trygghet
              <br />
              på Costa Blanca.
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#f7f2ea] drop-shadow-[0_2px_12px_rgba(0,0,0,0.38)] md:text-xl">
              För internationella köpare som vill ha tydlighet och en pålitlig kontaktperson.
              Nordic Move samordnar hela resan från att välja rätt område och
              bostad till oberoende kontroller, köp och inflyttning.
            </p>

            <p className="mt-7 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              En pålitlig kontaktperson · Oberoende kontroller · Från sökning till inflyttning
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/sv/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Börja med din kostnadsfria Area Match
              </a>

              <a
                href="/sv/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Boka ett introduktionssamtal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KÄRNFÖRDELAR */}
      <section className="border-b border-stone-200/70 bg-white/75 px-8 py-5 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-4 text-center text-sm font-medium text-[#1e2a3a] md:grid-cols-3">
          <p>Personligt stöd på köparens sida</p>
          <p>Juridiska och tekniska kontroller före köp</p>
          <p>Stöd på nederländska, engelska, tyska och svenska</p>
        </div>
      </section>

      {/* KOMPLETT KÖPAR- OCH RELOCATIONSTÖD */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr] xl:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Personligt köparstöd
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Större trygghet. En pålitlig kontaktperson.
              </h2>

              <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-[#1e2a3a]">
                Från att välja rätt område och bostad till oberoende köpkontroller,
                relocation, renovering och möblering.
              </p>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-600">
                Att köpa bostad i Spanien ska vara ett spännande steg. Men processen kan
                snabbt bli svår att överblicka när du behöver kommunicera med
                fastighetsmäklare, privata säljare, en jurist, en byggnadsbesiktningsman, notarien och entreprenörer,
                flyttfirmor och andra tjänsteleverantörer — ofta på ett annat språk och
                med ansvaret fördelat mellan flera olika parter.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Nordic Move Spain samlar dessa separata steg. Vi hjälper
                dig att hitta och köpa rätt bostad på Costa Blanca och
                kan även samordna praktiska frågor före och efter köpet. Från din
                personliga Area Match och riktat bostadsurval till relocation,
                anslutningar, renovering och inredning.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Du har en pålitlig kontaktperson som förstår dina prioriteringar, samordnar
                de inblandade parterna och håller avtal, ansvar och nästa steg tydliga.
                Vi talar spanska, förstår lokala processer och arbetar med noggrant
                utvalda oberoende specialister och tjänsteleverantörer.
              </p>

              <h3 className="mt-10 max-w-2xl font-serif text-3xl leading-tight text-[#1e2a3a]">
                Trygghet först, köp därefter
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Av erfarenhet vet vi hur snabbt problem kan uppstå när lokal
                kunskap saknas eller yrkespersoner inte samordnar effektivt. Dolda
                fel, avvikelser i registreringar och juridiska problem blir ibland synliga först
                efter att köpet har slutförts.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Därför medverkar vi inte till ett köp utan oberoende tekniska och
                juridiska kontroller. En kvalificerad byggnadsbesiktningsman inspekterar
                och mäter bostaden och jämför den faktiska situationen med tillgängliga
                dokument och registreringar. En oberoende spansk fastighetsjurist
                granskar bland annat ägande, belastningar, skulder, tillstånd och
                avtal.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Innan du fattar ditt slutliga beslut får du därför bättre insyn i bostadens tekniska
                skick, juridiska läge och möjliga risker.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Du kan välja hela Buyer Journey eller endast de tjänster
                du behöver.
              </p>

              <p className="mt-7 text-xl font-medium leading-relaxed text-stone-700">
                Sök med tydlig riktning. Köp med större trygghet. Flytta in med sinnesro.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/sv/relocation-assessment"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Börja med din kostnadsfria personliga Area Match Portfolio
                </a>

                <a
                  href="/sv/contact"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Boka ett introduktionssamtal
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[460px] lg:sticky lg:top-28 lg:ml-auto lg:mr-0">
              <div className="absolute -inset-2 rounded-[36px] bg-[#e9dfd2]"></div>

              <div className="relative overflow-hidden rounded-[32px] bg-white p-2 shadow-sm">
                <img
                  src="/images/founder.png"
                  alt="Grundarna av Nordic Move Spain"
                  className="h-auto max-h-[500px] w-full rounded-[26px] object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VÄLJ DIN UTGÅNGSPUNKT */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Var befinner du dig i processen?
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
              Börja precis där du behöver vårt stöd.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                href: "/sv/services/area-match",
                label: "Jag utforskar fortfarande",
                title: "Hitta först området som passar dig",
                text: "Börja med en personlig Area Match och få tydlig riktning innan du jämför bostäder.",
                cta: "Utforska Area Match →",
              },
              {
                href: "/sv/services/purchase-safety-report",
                label: "Jag har hittat en bostad",
                title: "Låt köpet bedömas oberoende",
                text: "Kombinera juridisk due diligence med en byggnadsteknisk besiktning innan du fattar ditt slutliga beslut.",
                cta: "Utforska Purchase Safety →",
              },
              {
                href: "/sv/services/move-in-ready",
                label: "Jag vill köpa och komma fram med sinnesro",
                title: "Låt även det praktiska genomförandet samordnas",
                text: "Från relocation och anslutningar till renovering, möblering och en smidig inflyttning.",
                cta: "Utforska Move-In Ready →",
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
              Nordic Move Buyer Journey
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
              Välj det stöd som passar din situation.
            </h2>

            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-lg font-medium leading-relaxed text-[#1e2a3a]">
                Du behöver inte följa hela resan.
              </p>

              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Välj endast det stöd du behöver — från att hitta
                rätt område och en personlig Buyer Discovery till oberoende
                köpkontroller och ett hem som är förberett för din ankomst.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            <a
              href="/sv/services/area-match"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/area-match.png"
                alt="Personlig Area Match-rapport för internationella bostadsköpare på Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Orientering
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Area Match-rapport
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Upptäck vilka områden, orter och livsstilar som bäst matchar
                  dina prioriteringar, din budget och dina långsiktiga planer. Din personliga
                  rapport innehåller lokal information om sjukvård, skolor, service,
                  tillgänglighet och hur väl lokalsamhället passar dig.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Begär din kostnadsfria Area Match →
                </div>
              </div>
            </a>

            <a
              href="/sv/services/discovery-trips"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/discover-card.png"
                alt="Privat och småskalig Buyer Discovery Experience på Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Begränsade upplagor · Valfritt
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Buyer Discovery Experience
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Upplev utvalda bostäder, bostadsområden och vardagslivet
                  under en privat discovery eller en noggrant sammansatt
                  smågruppsupplaga. Tillgänglig på utvalda datum och i mån av
                  tillgänglighet.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Utforska Buyer Discovery →
                </div>
              </div>
            </a>

            <a
              href="/sv/services/purchase-safety-report"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/legal.png"
                alt="Oberoende tekniska och juridiska kontroller före köp på Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Kontroller före köp
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Purchase Safety
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Har du redan hittat en bostad? Vi samordnar en oberoende
                  teknisk besiktning och utser en lämplig oberoende jurist
                  för juridisk due diligence innan du gör ett bindande åtagande.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Utforska Purchase Safety →
                </div>
              </div>
            </a>

            <a
              href="/sv/services/move-in-ready"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/move-in-ready-ibiza.png"
                alt="Move-In Ready-stöd för renovering, relocation och inredning på Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Efter köpet
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Move-In Ready-stöd
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Från anslutningar och relocationstöd till renovering,
                  inredningsdesign, möblering och slutliga förberedelser. Vi
                  samordnar de praktiska stegen kring din bostad, tidsplan och budget.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Utforska Move-In Ready →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* PURCHASE SAFETY — ETT TYDLIGT BESLUT */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="bg-[#1e2a3a] p-12 text-white lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Två oberoende kontroller. En tydlig köprekommendation.
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                Större trygghet innan du bestämmer dig.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                En oberoende besiktningsman inspekterar och mäter bostaden och
                jämför den med tillgängliga dokument. Det hjälper till att upptäcka fel,
                avvikelser och möjliga åtgärdsbehov i ett tidigt skede.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/85">
                En oberoende jurist granskar ägande, belastningar, skulder,
                tillstånd, avtal och villkor för slutförandet.
              </p>

              <p className="mt-6 text-base font-medium leading-relaxed text-[#c8a063]">
                Vi sammanför båda rapporterna i en tydlig rekommendation:
                gå vidare, ompröva eller köp inte.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/sv/services/purchase-safety-report"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Se hur Purchase Safety fungerar
                </a>

                <a
                  href="/sv/contact"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
                >
                  Begär en bostadskontroll
                </a>
              </div>
            </div>

            <div className="p-10 md:p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Två oberoende bedömningar. Ett tydligt beslut.
              </p>

              <h3 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-[#1e2a3a]">
                Gå vidare, ompröva eller köp inte.
              </h3>

              <div className="mt-10 grid gap-6">
                <article className="rounded-[28px] border border-emerald-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">
                    Grön · Gå vidare
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Kontrollerna ger tillräcklig trygghet för att gå vidare,
                    med förbehåll för de angivna villkoren.
                  </p>
                </article>

                <article className="rounded-[28px] border border-amber-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
                    Gul · Ompröva
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Det finns frågor eller risker. Ytterligare utredning,
                    åtgärder, omförhandling eller ytterligare villkor krävs först.
                  </p>
                </article>

                <article className="rounded-[28px] border border-red-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-800">
                    Röd · Köp inte
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Riskerna är för stora. Köp inte om de inte är helt och bevisligen
                    åtgärdade innan du gör ett bindande åtagande.
                  </p>
                </article>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                Den oberoende besiktningsmannens dokumentgranskning är en inledande
                jämförelse och ersätter inte juridisk due diligence eller formell
                bekräftelse från berörda myndigheter. De tekniska och juridiska
                kontrollerna utförs av oberoende yrkespersoner,
                var och en ansvarig för sin egen rapport. Ytterligare
                specialistutredning kan krävas. Ingen kontroll kan ge
                absolut säkerhet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALFRI BUYER DISCOVERY */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#1e2a3a] text-white shadow-sm">
          <div className="grid items-center lg:grid-cols-[0.8fr_1.2fr]">
            <div className="p-5 md:p-7">
              <img
                src="/images/community-home.png"
                alt="Buyer Discovery Experience och lokalsamhället på Costa Blanca"
                className="h-[300px] w-full rounded-[28px] object-cover md:h-[360px]"
                loading="lazy"
              />
            </div>

            <div className="p-9 md:p-12">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Valfritt · Buyer Discovery
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight md:text-4xl">
                Upplev inte bara bostaden, utan också livet omkring den.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Välj en privat Buyer Discovery Experience eller utforska området
                med en liten, noggrant sammansatt grupp likasinnade köpare vars intressen,
                livssituation och planer passar ihop. Du upplever utvalda bostäder, områden,
                lokal service och vardagslivet, samtidigt som du behåller personlig uppmärksamhet och integritet. Gruppdeltagande är alltid valfritt och separat från ditt köparstöd.
              </p>

              <a
                href="/sv/services/discovery-trips"
                className="mt-8 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Utforska Buyer Discovery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* UTÖKAD MOVE-IN READY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#e9dfd2] shadow-sm">
          <div className="grid items-stretch lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center p-10 md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Efter köpet · Move-In Ready
              </p>

              <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-6xl">
                Från nyckelöverlämning till ett hem som är redo för din ankomst.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-700">
                Efter köpet återstår ofta många praktiska beslut.
                Nordic Move samlar dessa steg i tre flexibla moduler: Home Setup,
                Renovation &amp; Interior och Family Relocation.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700">
                Du väljer endast det stöd som passar din bostad, familj och tidsplan
                och budget. Vi samordnar överenskomna parter och nästa steg, medan
                varje extern specialist förblir ansvarig för sina egna råd och
                genomförande.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/sv/services/move-in-ready"
                  className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
                >
                  Utforska Move-In Ready
                </a>

                <a
                  href="/sv/contact"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Boka ett introduktionssamtal
                </a>

                <a
                  href="https://wa.me/31683848239?text=Hej%20Nordic%20Move%20Spain%2C%20jag%20skulle%20vilja%20diskutera%20min%20Move-In%20Ready-plan."
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Diskutera din Move-In Ready-plan via WhatsApp"
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
                  Diskutera via WhatsApp
                </a>
              </div>
            </div>

            <div className="relative min-h-[480px] p-6 md:p-8 lg:min-h-[650px] lg:p-10">
              <img
                src="/images/move-in-ready-mediterranean-warmth.png"
                alt="Medelhavsinspirerat Move-In Ready-hem med terrass och utekök på Costa Blanca"
                className="h-full min-h-[440px] w-full rounded-[32px] object-cover lg:min-h-[570px]"
                loading="lazy"
              />

              <div className="absolute bottom-10 left-10 right-10 rounded-[26px] bg-white/90 p-6 shadow-lg backdrop-blur md:bottom-12 md:left-12 md:right-auto md:max-w-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  En samordnad resa
                </p>
                <p className="mt-3 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  Praktiska förberedelser, renovering och möblering i en samordnad plan.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1e2a3a]/10 px-8 py-10 md:px-12 md:py-12 lg:px-16">
            <div className="grid gap-6 lg:grid-cols-3">
              <a
                href="/sv/services/move-in-ready#home-setup"
                className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                  Modul 01
                </p>
                <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  Home Setup
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Anslutningar, internet, försäkring, säkerhet, städning,
                  underhåll och mindre arbeten före din ankomst.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-[#1e2a3a]">
                  Utforska Home Setup →
                </span>
              </a>

              <a
                href="/sv/services/move-in-ready#renovation-interior"
                className="rounded-[30px] bg-[#1e2a3a] p-8 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                  Modul 02
                </p>
                <h3 className="mt-4 font-serif text-3xl">
                  Renovation &amp; Interior
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  Samordning av renovering, entreprenörer och specialister, inredningskoncept,
                  material, möbler, belysning, installation och styling.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-white">
                  Utforska Renovation &amp; Interior →
                </span>
              </a>

              <a
                href="/sv/services/move-in-ready#family-relocation"
                className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                  Modul 03
                </p>
                <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  Family Relocation
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Flyttfirma, skolor, sjukvård, försäkring, administration, lokal
                  service och kontakter med föreningar och lokalsamhället.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-[#1e2a3a]">
                  Utforska Family Relocation →
                </span>
              </a>
            </div>

            <p className="mt-8 max-w-5xl text-sm leading-relaxed text-stone-500">
              Modulerna kan väljas individuellt eller kombineras. Omfattning,
              tidsplan, kostnader och ansvar avtalas i förväg för varje tjänst.
              Externa yrkespersoner förblir ansvariga för sina egna
              råd, offerter och genomförande.
            </p>
          </div>
        </div>
      </section>

      {/* GUIDER OCH INSIKTER */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Köparguider
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Tydlig vägledning innan du köper bostad på Costa Blanca.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Ett urval av praktiska guider för internationella köpare
              som vill förstå pensionsområden, den spanska köpprocessen och brittiska
              skattefrågor innan de fattar ett beslut.
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
              href="/sv/guides"
              className="inline-block rounded-full border border-[#1e2a3a] px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Visa alla köparguider
            </a>
          </div>
        </div>
      </section>


      {/* SLUTLIG ALLMÄN CTA */}
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] px-10 py-14 text-white shadow-sm md:px-16 md:py-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Personligt stöd från din utgångspunkt
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Redo att förbereda ditt köp noggrant?
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/80">
            Börja med en kostnadsfri Area Match när du fortfarande letar efter rätt
            område, eller boka ett personligt samtal när du redan har hittat en bostad
            eller vill diskutera komplett köparstöd.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/sv/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Begär din kostnadsfria Area Match
            </a>

            <a
              href="/sv/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Boka ett introduktionssamtal
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}