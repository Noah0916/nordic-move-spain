export const metadata = {
  title: "Veilig een woning kopen aan de Costa Blanca | Nordic Move Spain",
  description:
    "Een premium aankooptraject voor internationale kopers aan de Costa Blanca: Area Match, Buyer Discovery Experience, technische aankoopreview, veilige documentcontrole en Move-In Ready interieurbegeleiding.",
  openGraph: {
    title: "Veilig een woning kopen aan de Costa Blanca | Nordic Move Spain",
    description:
      "Kies de juiste regio, ervaar de omgeving, ontvang vóór aankoop een technische aankoopreview, houd documenten veilig georganiseerd en kom aan in een instapklaar thuis.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veilig een woning kopen aan de Costa Blanca | Nordic Move Spain",
    description:
      "Area Match, Buyer Discovery Experience, technische aankoopreview, veilige client portal en Move-In Ready interieurbegeleiding voor serieuze internationale kopers.",
  },
};

export default function DutchHomePage() {
  const guideCards = [
    {
      href: "/guides/best-areas-costa-blanca-north-retirees",
      label: "Regiogids voor pensioen",
      title: "Beste plaatsen aan de Costa Blanca voor pensioen",
      text:
        "Een praktische gids voor internationale kopers die de beste plaatsen aan de Costa Blanca voor pensioen vergelijken.",
      cta: "Lees de pensioengids →",
      featured: true,
    },
    {
      href: "/guides/buying-property-spain",
      label: "Kopen in Spanje",
      title: "Een woning kopen in Spanje",
      text:
        "Een complete gids over juridische controles, hypotheken, aankoopkosten en het aankoopproces voor internationale kopers.",
      cta: "Lees de gids →",
      featured: false,
    },
    {
      href: "/guides/uk-tax-second-home-spain",
      label: "UK-belastingregels",
      title: "UK-belastingregels voor een tweede woning in Spanje",
      text:
        "Wat Britse belastingplichtigen moeten weten over Spaanse vastgoedbelastingen, Modelo 210, huurinkomsten, vermogenswinst, voorkoming van dubbele belasting en een tweede woning in het buitenland.",
      cta: "Lees de UK-belastinggids →",
      featured: false,
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
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
              Schedule a consultation
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Nordic Move Spain guidance for buying a property on the Costa Blanca"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/18 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[0.98] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-6xl">
              Een veiligere manier
              <br />
              om een woning te kopen
              <br />
              aan de Costa Blanca.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
              Wij begeleiden internationale kopers van A tot Z: van de juiste
              regio en Buyer Discovery Experience tot onafhankelijke
              risicocontroles, veilige documentcontrole en, na aankoop, een
              move-in ready landing.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
              Het doel is niet om zoveel mogelijk woningen te bekijken. Het
              doel is om de juiste match te vinden, risico’s te beperken en pas
              verder te gaan wanneer regio, woning, documenten en volgende
              stappen duidelijk zijn.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              Area Match · Buyer Discovery · Onafhankelijk Safety Report · Secure Portal · Move-In Ready
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/nl/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Start met je Area Match Report
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

      {/* INTRODUCTION */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Wij draaien het proces om
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                De meeste kopers beginnen met woningaanbod. Wij beginnen met hoe je wilt leven.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Veel kopers beginnen op grote woningportals, bewaren tientallen
                huizen en worden verliefd op een woning voordat zij de omgeving
                echt begrijpen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Maar een woning kan prachtig lijken en toch de verkeerde
                beslissing zijn: de ligging past misschien niet bij je dagelijkse
                ritme, de regio niet bij je toekomstplannen of de woning verbergt
                technische, juridische of praktische risico’s.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Daarom draaien wij het proces om. Eerst brengen wij in kaart
                hoe je wilt leven, wat belangrijk voor je is, wat je juist wilt
                vermijden en welke regio’s passen bij je wensen, budget en
                toekomstplannen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Pas daarna zoeken wij gericht. Je ontvangt geen eindeloze lijst
                met woningen, maar een kleine, zorgvuldig samengestelde shortlist
                die aansluit op je profiel — soms instapklaar, soms een verborgen
                parel met potentie via ons lokale netwerk van Spaanse partners.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Wanneer een woning serieus interessant wordt, helpt het
                Purchase Safety Report om de belangrijkste risico’s helder te
                krijgen. Zo beslis je niet alleen op gevoel, maar op basis van
                inzicht, controle en eerlijk advies aan de kant van de koper.
              </p>
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

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
              Eerst de juiste regio. Dan de juiste woning. Daarna een veilige aankoop en een zachte landing.
            </h2>

            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-lg font-medium leading-relaxed text-[#1e2a3a]">
                Je hoeft niet elke stap te gebruiken.
              </p>

              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Volg de volledige journey, of stap in waar je ons nodig hebt:
                Area Match, Buyer Discovery, Purchase Safety of Move-In Ready.
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
                alt="Area Match Assessment for the Costa Blanca"
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
                  Een profiel met 34 vragen, ondersteund door lokale feiten:
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
                alt="International buyers during a Buyer Discovery Experience on the Costa Blanca"
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
                  Ontdek passende regio’s, geselecteerde woningen en relevante
                  lokale professionals via een private of zorgvuldig gematchte
                  groepservaring.
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
                alt="Purchase Safety Report and secure client portal for buyers on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Stap 3 · Checks vóór aankoop
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Safety Report &amp; Portal
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Elke aankoop via Nordic Move Spain bevat vóór je commitment
                  een technische aankoopreview door een onafhankelijke technician
                  aan de kant van de koper.
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
                alt="Move-In Ready support for buyers on the Costa Blanca"
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
                  Wij bepalen zelf de interior direction en coördineren
                  furnishing, styling en praktische voorbereiding met betrouwbare
                  lokale meubelpartners.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Ontdek Move-In Ready →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* MOVE-IN READY INTERIOR PREVIEW */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#e9dfd2]">
          <div className="grid items-center gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Soft Landing &amp; Move-In Ready
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
                Kom aan in een woning die al voelt als thuis.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-700">
                Na aankoop wil je niet maandenlang vanuit het buitenland bezig
                zijn met meubels, aannemers, verlichting, gordijnen en
                leveringen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Nordic Move Spain ontwikkelt samen met jou de interior
                direction en coördineert furnishing, styling en praktische
                voorbereiding via betrouwbare lokale meubelpartners — zodat je
                zacht landt in plaats van aankomt in een onafgemaakt project.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-stone-500">
                De beelden zijn interior concept visuals ter inspiratie.
                Definitief ontwerp, timing en uitvoering zijn afhankelijk van de
                woning, het budget, beschikbaarheid en geselecteerde lokale
                partners.
              </p>

              <a
                href="/nl/services/move-in-ready"
                className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Ontdek Move-In Ready support
              </a>
            </div>

            <div className="grid gap-6 p-8 md:grid-cols-2 lg:p-12">
              {[
                [
                  "/images/move-in-ready-ibiza.png",
                  "Ibiza Soho Lounge",
                  "Warm mediterraan wonen met zachte wittinten, natuurlijke texturen, subtiele kleuraccenten en een ontspannen indoor-outdoor gevoel.",
                  "Ibiza Soho interior concept for Move-In Ready support on the Costa Blanca",
                ],
                [
                  "/images/move-in-ready-kitchen.png",
                  "Contemporary Coastal Kitchen",
                  "Een lichtere en architectonischere richting met grote ramen, lichte houttinten, verfijnde afwerking en rustige kust-elegantie.",
                  "Contemporary coastal kitchen concept for Move-In Ready support on the Costa Blanca",
                ],
              ].map(([image, title, text, alt]) => (
                <article
                  key={title}
                  className="overflow-hidden rounded-[32px] bg-white/85 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-[360px] overflow-hidden">
                    <img
                      src={image}
                      alt={alt}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1e2a3a] backdrop-blur">
                      Concept visual
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                      Interior direction
                    </p>

                    <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-stone-600">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NORDIC CIRCLE CONNECTIONS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative flex min-h-[520px] items-start justify-center bg-[#eadcca] p-8 md:p-10">
              <img
                src="/images/community-home.png"
                alt="Nordic Circle Connections for buyers and future residents on the Costa Blanca"
                className="w-full max-w-[620px] rounded-[24px] object-contain"
              />
            </div>

            <div className="p-10 md:p-12 lg:p-14">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Thuis voelen telt
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Een woning is niet genoeg als je je niet verbonden voelt.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Vanuit onze eigen ervaring met expat-support hebben wij gezien
                dat mensen soms eerder terugkeren dan verwacht, omdat zij geen
                lokaal netwerk opbouwen, betekenisvolle vriendschappen missen of
                zich los voelen van het dagelijkse leven.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
                Nordic Circle helpt dat risico te verkleinen. Tijdens de Buyer
                Discovery Experience creëren we natuurlijke momenten om mensen
                te ontmoeten met een vergelijkbare achtergrond, levensfase of
                interesses — geen geforceerd netwerken, maar een beter gevoel of
                de regio echt thuis kan worden.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  [
                    "Social fit",
                    "Introducties kunnen worden afgestemd op taal, achtergrond, levensfase en interesses.",
                  ],
                  [
                    "Gedeelde momenten",
                    "Lunches, diners, golf, wellness of gastronomie helpen mensen op een natuurlijke manier verbinden.",
                  ],
                  [
                    "Betere landing",
                    "Het doel is om het risico te verkleinen dat je je na aankoop en verhuizing geïsoleerd voelt.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[24px] border border-white/15 bg-white/5 p-5 backdrop-blur"
                  >
                    <h3 className="font-serif text-xl leading-tight text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-white/65 md:text-sm">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/nl/services/nordic-circle-community"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Ontdek Nordic Circle
                </a>

                <a
                  href="/nl/contact"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
                >
                  Plan een persoonlijk gesprek
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PURCHASE SAFETY REPORT */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[#1e2a3a] p-12 text-white lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Purchase Safety
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                Beperk risico’s voordat je koopt.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/80">
                Wanneer je serieus geïnteresseerd bent in een woning, kijken
                wij verder dan de presentatie. Via het Purchase Safety Report
                kunnen onafhankelijke specialisten juridische en technische
                risico’s beoordelen voordat je je vastlegt.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Denk aan vergunningen, aanbouwen, eigendomsdocumenten,
                mogelijke schulden of lasten, vocht, lekkages, schimmel,
                zichtbare gebreken en de algemene staat van de woning.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Het resultaat is een duidelijkere beslissing: doorgaan,
                opnieuw onderhandelen, extra voorwaarden stellen of afstand
                nemen voordat je te ver in het proces zit.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/55">
                Een technische aankoopreview is inbegrepen wanneer je een
                woning koopt via Nordic Move Spain, afhankelijk van toegang tot
                de woning, timing en beschikbaarheid van de juiste professional.
              </p>
            </div>

            <div className="p-10 md:p-12 lg:p-16">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  [
                    "Juridische risico’s",
                    "Vergunningen, aanbouwen, eigendomsdocumenten en mogelijke schulden of lasten kunnen worden bekeken.",
                  ],
                  [
                    "Technische risico’s",
                    "Vocht, lekkages, schimmel, scheuren, drainage en zichtbare gebreken kunnen vroeg worden gesignaleerd.",
                  ],
                  [
                    "Onafhankelijk rapport",
                    "Bevindingen worden samengebracht zodat je de risico’s begrijpt voordat je verdergaat.",
                  ],
                  [
                    "Duidelijke beslissing",
                    "Doorgaan, opnieuw onderhandelen, voorwaarden stellen of met meer zekerheid afstand nemen.",
                  ],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-[28px] bg-[#f6f1ea] p-7">
                    <h3 className="font-serif text-2xl leading-tight text-[#1e2a3a]">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-stone-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                Rapporten, foto’s, documenten en vragen kunnen samen worden
                bewaard in je secure client portal, zodat de beslissing
                georganiseerd blijft. De inbegrepen technische aankoopreview
                ondersteunt de besluitvorming, maar vervangt geen formele
                juridische due diligence, taxatie of volledige bouwkundige
                keuring, tenzij dit apart is overeengekomen.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/nl/services/purchase-safety-report"
                  className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
                >
                  Ontdek Purchase Safety
                </a>

                <a
                  href="/nl/contact"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Vraag naar een woningcheck
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="rounded-[40px] bg-white p-5 shadow-sm">
            <img
              src="/images/founder.png"
              alt="The founders of Nordic Move Spain"
              className="h-auto max-h-[620px] w-full rounded-[32px] object-contain object-center"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Over Nordic Move Spain
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
              Gebouwd voor internationale kopers die rust, duidelijkheid en lokale ondersteuning willen.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Nordic Move Spain is ontwikkeld voor internationale kopers die
              een veiligere, persoonlijkere en beter georganiseerde manier
              zoeken om een woning te kopen aan de Costa Blanca — van eerste
              oriëntatie tot aankomst.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Wij begrijpen dat kopen in Spanje niet alleen een
              vastgoedbeslissing is, maar ook een keuze voor een andere
              omgeving, een ander dagelijks leven en vaak een nieuw hoofdstuk.
              Daarom combineren wij lifestyle-inzicht, lokale kennis,
              geselecteerde woningen, een inbegrepen technische aankoopreview,
              veilige documentcontrole en praktische ondersteuning na aankoop.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Onze rol is om kopers eerst te helpen de juiste plek te begrijpen,
              daarna de woning kritisch te beoordelen, het proces veilig te
              organiseren en, waar gewenst, de interior direction te bepalen en
              move-in voorbereiding te coördineren met betrouwbare lokale
              meubelpartners.
            </p>

            <a
              href="/nl/about-us"
              className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
            >
              Lees meer over ons
            </a>
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
              die pensioenregio’s, het Spaanse aankoopproces en UK-belastingzaken
              willen begrijpen voordat zij beslissen.
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

      {/* FINAL CALL */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Start met duidelijkheid
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Koop met duidelijkheid, structuur en minder blinde vlekken.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Kies de ondersteuning die je nu nodig hebt, of volg de volledige
            journey: van regioclarity via de inbegrepen technische aankoopreview
            tot een zachte, move-in ready landing.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/nl/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Start with your Area Match Report
            </a>

            <a
              href="/nl/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Schedule a consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

