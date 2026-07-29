export const metadata = {
  title: "Vastgoedgidsen Spanje | Nordic Move Spain",
  description:
    "Praktische Nederlandstalige vastgoedgidsen voor Spanje, overzichtelijk gerangschikt per regio, juridische onderwerpen, aankoopkosten, belastingen, financiering en dagelijks wonen.",
};

const mainGuides = [
  {
    href: "/nl/guides/best-areas-costa-blanca-north-retirees",
    label: "Gids voor gepensioneerden",
    title: "Beste regio’s aan de Costa Blanca Noord voor gepensioneerden",
    text:
      "Een praktische gids voor Nederlandse, Duitse, Zwitserse en andere internationale kopers die Dénia, Moraira, Jávea, Altea, Benissa en Calpe vergelijken.",
    details:
      "Vergelijk toegang tot zorg, voorzieningen het hele jaar door, mobiliteit, rust, onderhoud, gemeenschapsleven, toeristische drukte en praktische geschiktheid op lange termijn.",
    bestFor:
      "Ideaal voor oudere kopers die willen begrijpen welke regio aan de Costa Blanca Noord past bij hun pensioenleven voordat zij kopen.",
    cta: "Lees de pensioengids →",
  },
  {
    href: "/nl/guides/where-to-buy-property-costa-blanca-north",
    label: "Regiogids",
    title: "Waar vastgoed kopen aan de Costa Blanca Noord",
    text:
      "De juiste regio kiezen is vaak belangrijker dan de eerste mooie woning kiezen. Deze gids vergelijkt de belangrijkste plaatsen aan de Costa Blanca Noord voordat u woningen gaat bezichtigen.",
    details:
      "Vergelijk Moraira, Jávea, Altea, Benissa, Calpe en Dénia op levensstijl, woningtype, dagelijkse voorzieningen, sfeer buiten het seizoen en kopersprofiel.",
    bestFor:
      "Ideaal voor kopers die nog bepalen welke plaats of kustregio echt past bij hun toekomstige leven in Spanje.",
    cta: "Lees de regiogids →",
  },
  {
    href: "/nl/guides/costs-rentals-real-life-checks-before-buying",
    label: "Eerlijke kopersgids",
    title: "Kosten, verhuur en praktische controles vóór aankoop",
    text:
      "Een prachtige woning kan nog steeds de verkeerde aankoop zijn als praktische details worden genegeerd. Deze gids legt uit wat kopers vaak te laat ontdekken.",
    details:
      "Leer meer over verborgen kosten, regels voor toeristische verhuur, elektriciteitsmasten, verkeerslawaai, zomerdrukte, gemeenschapsregels, eigendomskosten en wat u moet controleren voordat u een bod doet.",
    bestFor:
      "Ideaal voor Nederlandse, Duitse en Zwitserse kopers die een realistisch beeld willen voordat zij zich vastleggen op een woning.",
    cta: "Lees de eerlijke gids →",
  },
];

const guideCategories = [
  {
    id: "regio-en-locatie",
    label: "Regio en locatie",
    title: "Kies eerst de omgeving die bij uw dagelijks leven past.",
    description:
      "Vergelijk kustplaatsen, het binnenland en verschillende woonprofielen voordat u zich op één woning of gemeente vastlegt.",
    guides: [
      {
          href: "/nl/guides/moraira-vs-javea",
          label: "Regiovergelijking",
          title: "Moraira vs Jávea",
          text:
            "Een praktische vergelijking voor kopers die kiezen tussen twee van de meest gewilde gebieden aan de Costa Blanca Noord.",
          useful:
            "Handig wanneer u twijfelt tussen rustig villawonen in Moraira en een actiever internationaal leven in Jávea.",
        },
      {
          href: "/nl/guides/denia-versus-calpe",
          label: "Regiovergelijking",
          title: "Dénia versus Calpe",
          text:
            "Een toekomstige vergelijking voor kopers die twijfelen tussen Dénia en Calpe, met aandacht voor sfeer, voorzieningen, stranden, bereikbaarheid, vastgoedtypes, toeristische drukte en wonen buiten het hoogseizoen.",
          useful:
            "Handig wanneer u wilt kiezen tussen het meer stedelijke, Spaanse karakter van Dénia en het compactere kustleven van Calpe.",
        },
      {
          href: "/nl/guides/kust-of-binnenland-waar-meer",
          label: "Kust of binnenland",
          title: "Kust of binnenland: waar krijgt u meer huis voor uw geld?",
          text:
            "Vergelijk populaire kustplaatsen met het Spaanse binnenland, waaronder de Jalón Valley en de Vall de Pop. Ontdek wat hetzelfde budget kan opleveren aan woonoppervlak, grond, rust, uitzicht en dagelijkse voorzieningen.",
          useful:
            "Handig wanneer u twijfelt tussen wonen dicht bij zee en meer ruimte, privacy en woningwaarde in het binnenland.",
        },
    ],
  },
  {
    id: "juridisch-en-aankoopproces",
    label: "Juridisch en aankoopproces",
    title: "Begrijp de Spaanse regels voordat u tekent.",
    description:
      "Van het aankoopproces en juridische controles tot de comunidad de propietarios en verschillen met Nederland.",
    guides: [
      {
          href: "/nl/guides/buying-property-spain",
          label: "Kopen in Spanje",
          title: "Vastgoed kopen in Spanje",
          text:
            "Een praktische uitleg van het Spaanse aankoopproces, inclusief juridische controles, aanbetalingen, notarisstappen, hypotheken, aankoopkosten en wat internationale kopers moeten voorbereiden voordat zij tekenen.",
          useful:
            "Handig wanneer u aan het begin van uw aankooptraject staat en het volledige proces wilt begrijpen.",
        },
      {
          href: "/nl/guides/hoe-lang-duurt-huis-kopen-spanje",
          label: "Duur van het aankoopproces",
          title: "Hoe lang duurt een huis kopen in Spanje?",
          text:
            "Een overzichtelijke tijdlijn van de eerste woningselectie en reservering tot juridische controles, het arras-contract, eventuele hypotheekgoedkeuring, de notaris en de uiteindelijke sleuteloverdracht.",
          useful:
            "Handig wanneer u wilt weten hoeveel weken of maanden u realistisch moet plannen en welke controles, documenten of financieringsstappen voor vertraging kunnen zorgen.",
        },
      {
          href: "/nl/guides/spaanse-regels-nederland",
          label: "Spaanse regels",
          title: "Spaanse regels die anders werken dan in Nederland",
          text:
            "Een praktische gids voor Nederlandse kopers over de verschillen tussen het Nederlandse en Spaanse systeem, waaronder de notaris, Registro de la Propiedad, Catastro, community rules, toeristische verhuur, verbouwingen en belasting.",
          useful:
            "Handig wanneer u wilt voorkomen dat u in Spanje koopt op basis van Nederlandse aannames.",
        },
      {
          href: "/nl/guides/homeowners-associations-spain",
          label: "Gemeenschapsregels",
          title: "Verenigingen van Eigenaren in Spanje",
          text:
            "Begrijp de regels van de comunidad de propietarios, gemeenschappelijke kosten, notulen van vergaderingen, verhuurbeperkingen, gedeeld onderhoud, verplichtingen van eigenaren en waarom deze controles belangrijk zijn vóór aankoop.",
          useful:
            "Handig wanneer u een appartement, geschakelde woning of woning in een urbanisatie overweegt.",
        },
      {
          href: "/nl/guides/common-mistakes-buyers-make",
          label: "Kopersfouten",
          title: "Veelgemaakte fouten bij het kopen van vastgoed",
          text:
            "Leer welke fouten kopers in Spanje vaak maken, van het kiezen van de verkeerde regio tot het over het hoofd zien van gemeenschapsregels, juridische controles, eigendomskosten en praktische dagelijkse zaken.",
          useful:
            "Handig wanneer u emotionele beslissingen en dure verrassingen wilt voorkomen.",
        },
    ],
  },
  {
    id: "kosten-belastingen-financiering",
    label: "Kosten, belastingen en financiering",
    title: "Bereken wat de aankoop en het bezit werkelijk kosten.",
    description:
      "Krijg inzicht in aankoopbelastingen, totale kosten, hypotheken, maandlasten en fiscale aandachtspunten voor Nederlandse kopers.",
    guides: [
      {
          href: "/nl/guides/totale-kosten-aankoop",
          label: "Totale aankoopkosten",
          title: "Totale kosten bij aankoop van vastgoed in Spanje",
          text:
            "Een compleet overzicht van de kosten boven op de koopsom, waaronder aankoopbelasting, advocaat, notaris, eigendomsregister, gestoría, taxatie en mogelijke hypotheekkosten.",
          useful:
            "Handig wanneer u wilt berekenen hoeveel eigen geld u werkelijk nodig heeft voordat u een reservering doet of een koopcontract ondertekent.",
        },
      {
          href: "/nl/guides/itp-iva-ajd-eenvoudig-uitgelegd",
          label: "Belastingen bij aankoop",
          title: "ITP, IVA en AJD eenvoudig uitgelegd",
          text:
            "Een duidelijke uitleg van de belangrijkste Spaanse belastingen bij de aankoop van vastgoed. Lees wanneer u ITP betaalt, wanneer IVA en AJD gelden en waarom bestaande bouw en nieuwbouw fiscaal anders worden behandeld.",
          useful:
            "Handig wanneer u vooraf precies wilt begrijpen welke aankoopbelasting op uw woning van toepassing is en hoeveel eigen middelen u naast de koopsom nodig heeft.",
        },
      {
          href: "/nl/guides/kosten-en-nieuwe-hypotheek-regels",
          label: "Hypotheek en kosten",
          title: "Kosten en nieuwe hypotheekregels in Spanje",
          text:
            "Een actuele gids over Spaanse hypotheken, taxaties, energielabels, kostenverdeling en de documenten die banken beoordelen voordat zij een lening definitief goedkeuren.",
          useful:
            "Handig wanneer u vastgoed in Spanje met financiering wilt kopen en vertraging, een te lage taxatie of onverwachte hypotheekkosten wilt voorkomen.",
        },
      {
          href: "/nl/guides/dutch-tax-rules-second-home-spain",
          label: "Nederlandse belastingregels",
          title: "Nederlandse belastingregels voor een tweede woning",
          text:
            "Een gids voor Nederlandse inwoners die een tweede woning in Spanje kopen, inclusief Box 3-aandachtspunten, Spaanse vastgoedbelastingen, huurinkomsten en grensoverschrijdende eigendomsvragen.",
          useful:
            "Handig voor Nederlandse kopers die fiscale onderwerpen willen begrijpen voordat zij in het buitenland kopen.",
        },
      {
          href: "/nl/guides/maandelijkse-kosten-spanje",
          label: "Kostencalculator",
          title: "Maandelijkse kosten van een woning in Spanje",
          text:
            "Begin met de ingebouwde kostencalculator en bereken een realistische inschatting van uw maandelijkse woonlasten in Spanje, waaronder energie, water, internet, verzekering, comunidad, onderhoud en lokale belastingen.",
          useful:
            "Handig wanneer u niet alleen naar de aankoopprijs wilt kijken, maar vooraf wilt weten welk maandbudget nodig is om de woning comfortabel te bezitten.",
        },
      {
          href: "/nl/guides/kosten-levensonderhoud-in-spanje",
          label: "Leven in Spanje",
          title: "Kosten van levensonderhoud in Spanje",
          text:
            "Een praktisch overzicht van de kosten voor boodschappen, energie, vervoer, zorg, verzekeringen, uit eten gaan, internet en andere vaste en variabele uitgaven.",
          useful:
            "Handig wanneer u een realistisch maandbudget wilt maken voor emigratie, een tweede woning, pensionering of langdurig verblijf in Spanje.",
        },
    ],
  },
  {
    id: "praktisch-wonen",
    label: "Praktisch wonen in Spanje",
    title: "Plan ook het dagelijks leven na de sleuteloverdracht.",
    description:
      "Praktische gidsen over residencia, belastingen, zorg, boodschappen, huisdieren en het dagelijks leven voor wie in Spanje gaat wonen, overwinteren of langere tijd verblijft.",
    guides: [
      {
          href: "/nl/guides/wonen-in-spanje-na-huis-kopen",
          label: "Wonen na aankoop",
          title: "Wonen in Spanje na aankoop van een huis: residencia, belastingen en zorg uitgelegd",
          text:
            "Een complete gids voor Nederlanders die na de aankoop permanent, grotendeels of een deel van het jaar in Spanje willen wonen. Lees wat residencia, padrón, fiscale residentie, zorgverzekering en uitschrijven uit Nederland in de praktijk betekenen.",
          useful:
            "Handig wanneer u niet alleen een woning koopt, maar ook wilt bepalen welke administratieve, fiscale en zorgstappen passen bij uw verblijfsduur en persoonlijke situatie.",
        },
      {
          href: "/nl/guides/supermarktprijzen-spanje",
          label: "Boodschappen in Spanje",
          title: "Supermarktprijzen in Spanje",
          text:
            "Een actuele vergelijking van dagelijkse boodschappen bij vier grote Spaanse supermarktketens, met voorbeeldprijzen voor melk, eieren, rijst, pasta, olijfolie en andere veelgekochte producten.",
          useful:
            "Handig wanneer u uw dagelijkse uitgaven in Spanje wilt inschatten en wilt weten welke supermarkt het beste past bij prijs, aanbod en gemak.",
        },
      {
          href: "/nl/guides/huisdieren-in-spanje",
          label: "Wonen met huisdieren",
          title: "Huisdieren in Spanje: alle informatie",
          text:
            "Een toekomstige gids voor Nederlandse kopers en huiseigenaren over huisdieren in Spanje, waaronder reizen met hond of kat, regels in communities, dierenartsen, verzekeringen, stranden, huurwoningen en dagelijks leven aan de Costa Blanca.",
          useful:
            "Handig wanneer uw hond of kat mee verhuist naar Spanje of wanneer u wilt weten welke regels gelden in appartementen, urbanisaties en openbare ruimtes.",
        },
    ],
  },
];

export default function NederlandseVastgoedGidsenPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="bg-[#1e2a3a] px-8 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vastgoed kopen in Spanje
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Praktische begeleiding voordat u vastgoed in Spanje koopt.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Eerlijke, praktische en regiogerichte gidsen voor Nederlandse,
            Duitse, Zwitserse en andere internationale kopers die de Costa
            Blanca Noord overwegen.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/nl/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Vraag uw Area Match aan
            </a>

            <a
              href="/nl/buyer-discovery-trip"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Ontdek de Buyer Discovery Trip
            </a>

            <a
              href="#guides"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-[#1e2a3a]"
            >
              Lees voordat u koopt
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Begin met de juiste informatie
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              De juiste vastgoedbeslissing begint met duidelijk inzicht.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              Vastgoed kopen in Spanje is spannend, maar het zou niet moeten
              beginnen met willekeurige bezichtigingen of alleen mooie foto’s.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Voordat u een beslissing neemt, is het belangrijk om de regio,
              juridische controles, eigendomskosten, verhuurregels,
              gemeenschapsbeperkingen en praktische dagelijkse details goed te
              begrijpen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Deze gidsen helpen u om de Costa Blanca Noord met meer helderheid
              te vergelijken voordat u zich vastlegt op een locatie,
              woningzoektocht of aankoopreis.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN GUIDES */}
      <section id="guides" className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Begin hier
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Onze belangrijkste gidsen voor serieuze kopers.
              </h2>
            </div>

            <a
              href="/nl/contact"
              className="rounded-full border border-[#1e2a3a] px-7 py-3 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Persoonlijk advies nodig?
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {mainGuides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="group rounded-[34px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  {guide.label}
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  {guide.title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  {guide.text}
                </p>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {guide.details}
                </p>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {guide.bestFor}
                </p>

                <span className="mt-9 inline-block text-sm uppercase tracking-[0.2em] text-[#1e2a3a]">
                  {guide.cta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDES PER ONDERWERP */}
      <section className="bg-[#e9dfd2] px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              Gidsen per onderwerp
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Vind sneller de informatie die bij uw aankoopfase past.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-stone-700">
              De artikelen zijn overzichtelijk verdeeld over regio en locatie,
              juridische onderwerpen, kosten en financiering, en het praktische
              dagelijks leven in Spanje.
            </p>

            <nav
              aria-label="Categorieën binnen de vastgoedgidsen"
              className="mt-9 flex flex-wrap gap-3"
            >
              {guideCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="rounded-full border border-[#9b743d]/40 bg-[#f6f1ea] px-5 py-3 text-sm font-medium text-[#1e2a3a] transition hover:border-[#1e2a3a] hover:bg-white"
                >
                  {category.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-20">
            {guideCategories.map((category, categoryIndex) => (
              <section
                id={category.id}
                key={category.id}
                className={
                  categoryIndex === 0
                    ? "scroll-mt-24"
                    : "mt-24 scroll-mt-24 border-t border-[#9b743d]/25 pt-20"
                }
              >
                <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
                  <header>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                      {category.label}
                    </p>

                    <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                      {category.title}
                    </h3>

                    <p className="mt-6 leading-relaxed text-stone-700">
                      {category.description}
                    </p>
                  </header>

                  <div className="grid gap-8 md:grid-cols-2">
                    {category.guides.map((guide) => (
                      <a
                        key={guide.href}
                        href={guide.href}
                        className="group flex h-full flex-col rounded-[30px] bg-[#f6f1ea] p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                      >
                        <p className="text-sm uppercase tracking-[0.25em] text-[#9b743d]">
                          {guide.label}
                        </p>

                        <h4 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                          {guide.title}
                        </h4>

                        <p className="mt-5 leading-relaxed text-stone-700">
                          {guide.text}
                        </p>

                        <p className="mt-5 leading-relaxed text-stone-700">
                          {guide.useful}
                        </p>

                        <span className="mt-auto inline-block pt-8 text-sm uppercase tracking-[0.2em] text-[#1e2a3a]">
                          Lees de gids →
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-12 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Persoonlijke begeleiding nodig?
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight">
            Weet u nog niet welke regio of welk woningtype past bij uw
            toekomstige leven in Spanje?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Onze Area Match Assessment helpt u locaties aan de Costa Blanca
            Noord te vergelijken op basis van levensstijl, budget,
            voorzieningen, langetermijnplannen en praktische behoeften.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/nl/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Vraag uw Area Match aan
            </a>

            <a
              href="/nl/contact"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Plan een kennismaking
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}