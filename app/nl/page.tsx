export const metadata = {
  title: "Huis kopen aan de Costa Blanca Noord | Nordic Move Spain",
  description:
    "Persoonlijke begeleiding voor internationale kopers die de juiste omgeving willen kiezen, veilig willen kopen en vóór aankoop inzicht willen in juridische, technische en praktische risico’s.",
  openGraph: {
    title: "Huis kopen aan de Costa Blanca Noord | Nordic Move Spain",
    description:
      "Kies de juiste omgeving, ervaar het dagelijks leven vóór de aankoop en koop met meer zekerheid dankzij ons Purchase Safety Report.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huis kopen aan de Costa Blanca Noord | Nordic Move Spain",
    description:
      "Een persoonlijkere en veiligere manier om de juiste omgeving te kiezen, een woning te beoordelen en u thuis te voelen in Spanje.",
  },
};

export default function NederlandseHomePage() {
  const guideCards = [
    {
      href: "/nl/guides/best-areas-costa-blanca-north-retirees",
      label: "Regiogids voor pensionering",
      title: "Beste plaatsen aan de Costa Blanca Noord voor pensionering",
      text:
        "Een praktische gids voor Nederlandse, Duitse, Zwitserse en andere internationale kopers die de beste plaatsen aan de Costa Blanca Noord voor hun pensioen vergelijken.",
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
      href: "/nl/guides/where-to-buy-property-costa-blanca-north",
      label: "Regiogids",
      title: "Waar koopt u een woning aan de Costa Blanca Noord?",
      text:
        "Vergelijk Moraira, Jávea, Altea, Benissa, Calpe en Dénia op levensstijl, woningtype, voorzieningen en kopersprofiel.",
      cta: "Lees de regiogids →",
      featured: false,
    },
    {
      href: "/nl/guides/moraira-vs-javea",
      label: "Regiovergelijking",
      title: "Moraira of Jávea: welke omgeving past beter bij u?",
      text:
        "Een praktische vergelijking voor kopers die kiezen tussen twee van de meest gewilde plaatsen aan de Costa Blanca Noord.",
      cta: "Lees de vergelijking →",
      featured: false,
    },
    {
      href: "/nl/guides/honest-guide-buying-property-costa-blanca-north",
      label: "Eerlijke kopersgids",
      title: "Kosten, verhuur en praktische controles vóór de aankoop",
      text:
        "Een eerlijke gids over verborgen kosten, toeristische verhuur, hoogspanningsmasten, geluid, regels van de gemeenschap en zaken die kopers vaak pas te laat ontdekken.",
      cta: "Lees de eerlijke gids →",
      featured: false,
    },
    {
      href: "/nl/guides/common-mistakes-buying-property-spain",
      label: "Veelgemaakte fouten",
      title: "Veelgemaakte fouten bij het kopen",
      text:
        "De meest voorkomende fouten die internationale kopers vóór en tijdens het aankoopproces in Spanje maken.",
      cta: "Lees de gids →",
      featured: false,
    },
    {
      href: "/nl/guides/homeowners-association-spain",
      label: "Regels van de gemeenschap",
      title: "Verenigingen van Eigenaren in Spanje",
      text:
        "Begrijp vóór de aankoop de gemeenschapskosten, verhuurbeperkingen, notulen en verplichtingen van eigenaren.",
      cta: "Lees de gids →",
      featured: false,
    },
    {
      href: "/nl/guides/dutch-tax-second-home-spain",
      label: "Nederlandse belastingregels",
      title: "Nederlandse belastingregels voor een tweede woning",
      text:
        "Wat Nederlandse belastingplichtigen moeten weten over box 3, Spaanse belastingen en het bezit van buitenlands vastgoed.",
      cta: "Lees de gids →",
      featured: false,
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVIGATIE */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/15 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="w-[180px]"></div>

          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/nl" className="border-b border-[#c8a063] pb-1">
              Startpagina
            </a>

            <a href="/nl/regions" className="hover:text-white/70 transition">
              Regio’s
            </a>

            <a href="/nl/services" className="hover:text-white/70 transition">
              Diensten
            </a>

            <a href="/nl/guides" className="hover:text-white/70 transition">
              Gidsen
            </a>

            <a href="/nl/about-us" className="hover:text-white/70 transition">
              Over ons
            </a>

            <a href="/nl/contact" className="hover:text-white/70 transition">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href="/nl"
                aria-label="Nederlandse versie"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                NL
              </a>

              <a
                href="/de"
                aria-label="Duitse versie"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                DE
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
          alt="Begeleiding van Nordic Move Spain bij het kopen van een woning aan de Costa Blanca Noord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/5"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Noord
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[0.98] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-6xl">
              Een andere manier
              <br />
              om een woning te kopen
              <br />
              aan de Costa Blanca Noord.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white">
              Niet alleen een woning vinden, maar veilig en weloverwogen kopen:
              met de juiste omgeving, onafhankelijke controles en een
              gemeenschap waarin u zich thuis voelt.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90">
              Wij helpen internationale kopers de Costa Blanca Noord beter te
              begrijpen, het dagelijks leven vóór de aankoop te ervaren en een
              woning pas serieus te overwegen nadat de belangrijkste juridische,
              technische en praktische risico’s helder zijn.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              Engels · Nederlands · Duits · Spaans · Zweeds
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Vraag uw gratis Area Match Report aan
              </a>

              <a
                href="/nl/services/discovery-trips"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Ontdek de Buyer Discovery Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTIE */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Niet alleen mooi, maar gecontroleerd
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                De juiste woning begint bij zekerheid.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Een woning kopen aan de Costa Blanca Noord is meer dan verliefd
                worden op uitzicht, zon en ruimte. De echte vraag is: klopt alles
                achter de schermen?
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Wij begeleiden internationale kopers die niet alleen een mooie
                woning zoeken, maar ook zekerheid willen over de locatie,
                juridische situatie, technische staat, kosten, documenten en het
                dagelijks leven in Spanje.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Met ons Area Match Report ontdekt u welke plaatsen en wijken
                passen bij uw levensstijl. Tijdens de Buyer Discovery Trip
                ervaart u de regio in de praktijk en ontmoet u betrouwbare
                lokale professionals. En wanneer u een woning serieus overweegt,
                helpt ons Purchase Safety Report om de belangrijkste risico’s
                vóór aankoop helder te krijgen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Veel kopers ontdekken problemen pas nadat zij getekend hebben:
                een uitbouw die niet goed geregistreerd is, een perceelgrens die
                afwijkt, vochtproblemen, een septic tank die niet goed werkt,
                onverwachte community-regels of documenten die ontbreken.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Wij brengen de juiste mensen aan tafel — een technisch
                specialist, gestor en onafhankelijke advocaat — zodat u niet
                alleen op gevoel koopt, maar op basis van controle, inzicht en
                duidelijke vervolgstappen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Belangrijke documenten worden waar mogelijk veilig samengebracht
                in één beschermde omgeving. Zo koopt u niet sneller, maar beter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIER PIJLERS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            <a
              href="/nl/services/area-match"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/area-match.png"
                alt="Area Match Assessment voor de Costa Blanca Noord"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Begin met inzicht
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Area Match &amp; Lifestyle Intelligence Report
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Ontdek welke plaatsen en wijken het beste passen bij uw
                  levensstijl, gezinssituatie, interesses, budget en
                  langetermijnplannen.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Uw persoonlijke rapport kan inzicht geven in gezondheidszorg,
                  scholen, veiligheid, internationale gemeenschappen, golf,
                  restaurants, bereikbaarheid, lokale voorzieningen en de
                  woningmarkt.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Vraag uw gratis rapport aan →
                </div>
              </div>
            </a>

            <a
              href="/nl/services/discovery-trips"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/discover-card.png"
                alt="Internationale kopers tijdens een Buyer Discovery Trip aan de Costa Blanca Noord"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Ervaar het voordat u beslist
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Buyer Discovery Trip
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Een zorgvuldig samengesteld driedaags woning- en
                  levensstijlprogramma aan de Costa Blanca Noord, afgestemd op
                  uw levensstijl, doelen en levensfase.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Verken geselecteerde regio’s persoonlijk, ontmoet betrouwbare
                  onafhankelijke professionals en ervaar hoe het dagelijks leven
                  werkelijk kan zijn voordat u een langdurige verplichting
                  aangaat.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Afhankelijk van uw voorkeur kan de reis privé plaatsvinden of in
                  een zorgvuldig samengestelde kleine groep. Persoonlijke
                  introducties met gelijkgestemde kopers en internationale
                  bewoners kunnen ervoor zorgen dat u al vóór uw verhuizing
                  vertrouwde gezichten ontmoet en mogelijke vriendschappen
                  opbouwt.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Ontdek de Buyer Discovery Trip →
                </div>
              </div>
            </a>



            <a
              href="/nl/services/purchase-safety-report"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/legal.png"
                alt="Purchase Safety Report voor kopers aan de Costa Blanca Noord"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Koop met zekerheid
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Purchase Safety Report
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Een onafhankelijk veiligheidsrapport voor kopers die een
                  woning aan de Costa Blanca Noord serieus overwegen en vóór
                  aankoop duidelijkheid willen.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Samen met een technisch specialist, gestor en onafhankelijke
                  advocaat coördineren wij controles op zichtbare gebreken,
                  uitbouwen, perceelgrenzen, registraties, vergunningen,
                  septic tank, eigendomsinformatie, community-regels en
                  mogelijke aankooprisico’s.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  De bevindingen worden veilig en overzichtelijk samengebracht,
                  zodat u kunt besluiten: doorgaan, alleen kopen onder
                  voorwaarden, opnieuw onderhandelen of afstand nemen.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Ontdek het Purchase Safety Report →
                </div>
              </div>
            </a>

            <a
              href="/nl/services"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/soft-landing-card.png"
                alt="Soft Landing Program na de aankoop van een woning in Spanje"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Ondersteuning na de aankoop
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Soft Landing Program
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Praktische ondersteuning na de aankoop — van inschrijvingen en
                  wegwijs worden in de gezondheidszorg tot lokale introducties
                  en het opbouwen van uw dagelijks leven in Spanje.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Cliënten van ons Soft Landing Program kunnen ook deel uitmaken
                  van Nordic Circle Community, ons zorgvuldig samengestelde
                  netwerk voor vriendschappen, zakelijke contacten en lokale
                  verbondenheid.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Ontdek Soft Landing →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* NORDIC CIRCLE COMMUNITY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[520px]">
              <img
                src="/images/discovery2.png"
                alt="Persoonlijke introducties binnen de internationale gemeenschap aan de Costa Blanca Noord"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-[#1e2a3a]/20"></div>
            </div>

            <div className="p-12 md:p-16 lg:p-20">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Een gemeenschap vóór uw verhuizing
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                Ontmoet mensen voordat Spanje uw thuis wordt.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-white/85">
                Een mooie woning zorgt niet automatisch voor een vervullend leven.
                Nordic Circle Community helpt geselecteerde cliënten om
                vriendschappen, betrouwbare lokale contacten en een echt gevoel
                van verbondenheid aan de Costa Blanca Noord op te bouwen.
              </p>

              <p className="mt-6 text-base leading-relaxed text-white/70">
                Wij nemen de tijd om uw interesses en gewenste manier van leven
                te begrijpen, of dat nu golf, wellness, gastronomie, buitenleven,
                zakelijk netwerken of een rustiger mediterraan ritme omvat.
                Tijdens de Buyer Discovery Trip en na de aankoop helpen
                zorgvuldig gekozen introducties, kleine diners en activiteiten
                u om gelijkgestemde kopers en gevestigde internationale bewoners
                te ontmoeten. Zo kan uw sociale leven al beginnen voordat uw
                verhuizing is afgerond.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  [
                    "Persoonlijk geselecteerde introducties",
                    "Ontmoet internationale bewoners, toekomstige buren en mensen met gedeelde interesses, vóór of na uw verhuizing.",
                  ],
                  [
                    "Kleinschalige bijeenkomsten",
                    "Bouw echte contacten op tijdens kleine diners en zorgvuldig gekozen activiteiten, in plaats van anonieme evenementen.",
                  ],
                  [
                    "Vertrouwd raken met de omgeving",
                    "Leer betrouwbare lokale contacten en bekende gezichten kennen, zodat het dagelijks leven in Spanje sneller vertrouwd aanvoelt.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[24px] border border-white/15 bg-white/5 p-6 backdrop-blur"
                  >
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/65">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-white/60">
                Nordic Circle Community is beschikbaar voor geselecteerde
                cliënten van onze Buyer Discovery Trip en ons Soft Landing
                Program. Introducties zijn persoonlijk en gebaseerd op
                wederzijdse relevantie, privacy en gedeelde interesses.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
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
                  Plan een persoonlijke kennismaking
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOE HET WERKT */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Hoe het werkt
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Een helder traject van de eerste oriëntatie tot u zich thuis voelt in Spanje.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {[
              [
                "01",
                "Area Match Assessment",
                "Vul onze op levensstijl gebaseerde vragenlijst in, zodat wij uw doelen, voorkeuren, budget en verhuisprioriteiten begrijpen.",
              ],
              [
                "02",
                "Lifestyle Intelligence Report",
                "Ontvang persoonlijke inzichten die laten zien welke plaatsen het beste bij uw levensstijl passen en welke minder geschikt kunnen zijn.",
              ],
              [
                "03",
                "Buyer Discovery Trip",
                "Ervaar geselecteerde plaatsen zelf, ontmoet betrouwbare professionals en leg contact met kopers en bewoners voordat u een beslissing neemt.",
              ],
              [
                "04",
                "Woningzoektocht",
                "Zodra de juiste omgeving duidelijk is, richten wij de zoektocht op woningen die passen bij uw profiel, prioriteiten en langetermijnplannen.",
              ],
              [
                "05",
                "Purchase Safety Report",
                "Wanneer u een woning serieus overweegt, coördineren wij technische, administratieve en juridische controles en brengen wij de bevindingen veilig en overzichtelijk samen.",
              ],
              [
                "06",
                "Soft Landing & Nordic Circle",
                "Na de aankoop ondersteunen wij uw praktische verhuizing en helpen wij eerste kennismakingen uit te bouwen tot een vertrouwd lokaal en internationaal netwerk.",
              ],
            ].map(([number, title, text]) => (
              <div key={number} className="border-l border-[#c8a063]/30 pl-5">
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {number}
                </p>

                <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVER ONS */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="rounded-[40px] bg-white p-5 shadow-sm">
            <img
              src="/images/founder.png"
              alt="De oprichters van Nordic Move Spain"
              className="h-auto max-h-[620px] w-full rounded-[32px] object-contain object-center"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Over Nordic Move Spain
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
              Persoonlijke begeleiding van oprichters die de verhuizing naar Spanje begrijpen.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Nordic Move Spain is opgericht om internationale kopers een
              persoonlijkere, transparantere en weloverwogen manier te bieden om
              een woning aan de Costa Blanca Noord te kopen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Als oprichters combineren wij internationale ervaring, lokale
              kennis, onderzoek en betrouwbare professionele relaties. Wij
              begrijpen dat het kopen van een woning in het buitenland niet
              alleen om het vastgoed draait, maar ook om levensstijl, zekerheid,
              verbinding en u thuis voelen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Onze rol is om kopers te helpen helderdere beslissingen te nemen,
              onnodige risico’s te vermijden en met meer vertrouwen een toekomst
              in Spanje op te bouwen.
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

      {/* PLAATSEN */}
      <section className="px-8 pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px]">
          <img
            src="/images/discovery2.png"
            alt="Costa Blanca Noord"
            className="h-[900px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 p-10 md:p-16">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/80">
                  Costa Blanca Noord
                </p>

                <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[1] text-white md:text-7xl">
                  Ontdek de plaatsen die uw nieuwe thuis kunnen worden.
                </h2>
              </div>

              <a
                href="/nl/regions"
                className="w-fit rounded-full border border-white px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                Bekijk alle regio’s
              </a>
            </div>

            <div className="absolute bottom-10 left-10 right-10 grid gap-6 md:bottom-16 md:left-16 md:right-16 md:grid-cols-3 md:gap-8">
              <a
                href="/nl/regions/moraira"
                className="rounded-[32px] bg-white/95 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-serif text-4xl text-[#1e2a3a] md:text-5xl">
                  Moraira
                </h3>

                <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
                  Stijlvol wonen aan de kust, met een rustige internationale
                  sfeer en prachtige mediterrane stranden.
                </p>
              </a>

              <a
                href="/nl/regions/altea"
                className="rounded-[32px] bg-white/95 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-serif text-4xl text-[#1e2a3a] md:text-5xl">
                  Altea
                </h3>

                <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
                  Artistieke charme, authentiek Spaans karakter en een
                  verfijnde, ontspannen levensstijl dicht bij zee.
                </p>
              </a>

              <a
                href="/nl/regions/javea"
                className="rounded-[32px] bg-white/95 p-8 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-serif text-4xl text-[#1e2a3a] md:text-5xl">
                  Jávea
                </h3>

                <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
                  Een levendige internationale sfeer met luxe villa’s, natuur,
                  restaurants en kindvriendelijke stranden.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GIDSEN EN INZICHTEN */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Kopersgidsen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Eerlijke begeleiding vóór u een woning koopt aan de Costa Blanca Noord.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Praktische gidsen voor Nederlandse, Duitse, Zwitserse en andere
              internationale kopers die de regio’s, dagelijkse risico’s,
              kosten, verhuurregels en het aankoopproces willen begrijpen
              voordat zij een vastgoedbeslissing in Spanje nemen.
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

      {/* UW WONING VERKOPEN */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#e9dfd2]">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            <div className="p-14 lg:p-20">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Voor woningeigenaren
              </p>

              <h2 className="mt-6 font-serif text-6xl leading-[1] text-[#1e2a3a]">
                Verkoop uw woning aan de Costa Blanca Noord aan de juiste
                internationale koper.
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-700">
                De meeste makelaars plaatsen een woning online. Wij helpen uw
                woning te positioneren voor internationale kopers die de
                levensstijl, locatie en langetermijnwaarde werkelijk begrijpen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Dankzij ons kopersnetwerk, de Area Match Assessments en Buyer
                Discovery Trips begrijpen wij waar Nederlandse, Belgische,
                Duitse, Zwitserse, Britse, Scandinavische en andere
                internationale kopers naar zoeken voordat zij een woning in
                Spanje kopen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Wij helpen geselecteerde woningen op te vallen met het juiste
                kopersprofiel, een overtuigend levensstijlverhaal en
                internationale positionering.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/nl/contact"
                  className="rounded-full bg-[#1e2a3a] px-8 py-4 text-white"
                >
                  Bespreek uw woning
                </a>

                <a
                  href="/nl/services/sell-your-property"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-[#1e2a3a]"
                >
                  Lees meer
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[500px]">
              <img
                src="/images/seller-section.png"
                alt="Een woning verkopen aan de Costa Blanca Noord"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LAATSTE OPROEP */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Begin met duidelijkheid
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Koop niet alleen op gevoel. Begin met duidelijkheid.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Onze begeleiding helpt u eerst de juiste omgeving te kiezen en daarna
            een woning pas serieus te overwegen wanneer de belangrijkste
            juridische, technische en praktische aandachtspunten helder zijn.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Vraag uw gratis Area Match Report aan
            </a>

            <a
              href="/nl/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Plan een kennismaking
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}