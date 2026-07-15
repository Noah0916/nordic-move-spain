export const metadata = {
  title: "Onze services | Nordic Move Spain",
  description:
    "Van een gratis Area Match Portfolio en een persoonlijke Discovery Trip tot een onafhankelijk veiligheidsrapport en interior design voor uw woning aan de Costa Blanca.",
  openGraph: {
    title: "Onze services | Nordic Move Spain",
    description:
      "Ontdek waar u wilt wonen, ervaar de regio, koop met meer zekerheid en laat uw woning instapklaar inrichten.",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    eyebrow: "Gratis oriëntatie",
    title: "Area Match Portfolio",
    text:
      "U ontvangt gratis een uitgebreid en persoonlijk portfolio dat duidelijk maakt welke regio’s, woonplaatsen en type woningen het beste aansluiten op uw leven, budget en toekomstplannen.",
    bullets: [
      "Persoonlijke lifestyle- en regiomatch",
      "Informatie over passende gebieden en woonplaatsen",
      "Inzicht in voorzieningen, zorg, bereikbaarheid en dagelijks leven",
      "Meer duidelijkheid over het type woning dat werkelijk bij u past",
      "Een gerichte basis voor uw verdere zoektocht",
    ],
    href: "/nl/relocation-assessment",
    cta: "Ontvang uw gratis Area Match Portfolio",
  },
  {
    number: "02",
    eyebrow: "Ervaar de regio",
    title: "Buyer Discovery Trip",
    text:
      "Tijdens een zorgvuldig samengestelde Discovery Trip ontdekt u de gebieden, woningen en lokale leefstijl die passen bij uw Area Match Portfolio. Zo ervaart u niet alleen wat er te koop staat, maar vooral waar u zich werkelijk thuis kunt voelen.",
    bullets: [
      "Persoonlijke route langs passende gebieden",
      "Geselecteerde bezichtigingen op basis van uw profiel",
      "Lokale lifestyle-ervaringen en relevante ontmoetingen",
      "Praktische uitleg over wonen en kopen in Spanje",
      "Begeleiding van aankomst tot vervolgstappen",
    ],
    href: "/nl/services/discovery-trips",
    cta: "Ontdek de Buyer Discovery Trip",
    note:
      "Bij daadwerkelijke aankoop van een villa via Nordic Move Spain wordt, afhankelijk van de aankoopprijs, de helft of de volledige reissom vergoed. De exacte vergoeding en voorwaarden worden vooraf schriftelijk bevestigd.",
  },
  {
    number: "03",
    eyebrow: "Onafhankelijke aankoopcontrole",
    title: "Purchase Safety Report",
    text:
      "Wanneer een woning serieus interessant wordt, brengen onafhankelijke specialisten de belangrijkste juridische, technische en praktische risico’s in beeld. U ontvangt één helder overzicht voordat u een definitieve beslissing neemt.",
    bullets: [
      "Juridische aandachtspunten en eigendomsinformatie",
      "Technische controle van zichtbare gebreken en onderhoud",
      "Inzicht in vergunningen, aanbouwen en mogelijke lasten",
      "Duidelijke bevindingen, aandachtspunten en vervolgstappen",
      "Overzichtelijke documentatie in een veilige omgeving",
    ],
    href: "/nl/services/purchase-safety-report",
    cta: "Bekijk het Purchase Safety Report",
    note:
      "Bij daadwerkelijke aankoop van een villa via Nordic Move Spain is het onafhankelijke veiligheidsrapport inbegrepen in de aankoopbegeleiding. De precieze omvang van het onderzoek is afhankelijk van de woning, het dossier en de beschikbaarheid van de juiste specialisten.",
  },
  {
    number: "04",
    eyebrow: "Move-in ready",
    title: "Interior Design",
    text:
      "Na aankoop helpen wij om van de woning een compleet en persoonlijk thuis te maken. We ontwikkelen de interieurstijl, selecteren passende materialen en meubels en coördineren de uitvoering met betrouwbare lokale partners.",
    bullets: [
      "Persoonlijke interior direction",
      "Meubel-, materiaal- en kleurselectie",
      "Styling, verlichting en praktische inrichting",
      "Coördinatie met lokale leveranciers en partners",
      "Een rustige en volledig voorbereide aankomst",
    ],
    href: "/nl/services/move-in-ready",
    cta: "Ontdek Interior Design",
  },
];

export default function AreaMatchPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      <section className="px-6 pb-20 pt-24 md:px-8 md:pb-28 md:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
              Nordic Move Buyer Journey
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[1.03] text-[#173252] md:text-7xl">
              Eerst ontdekken waar u wilt leven. Daarna pas de juiste woning.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl">
              Onze begeleiding bestaat uit vier duidelijke services. U begint
              met een gratis persoonlijk Area Match Portfolio, ontdekt de regio
              tijdens een Buyer Discovery Trip, koopt met meer zekerheid dankzij
              een onafhankelijk veiligheidsrapport en maakt uw woning compleet
              met Interior Design.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/nl/relocation-assessment"
                className="rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Ontvang uw gratis portfolio
              </a>

              <a
                href="/nl/contact"
                className="rounded-full border border-[#173252] px-8 py-4 text-sm font-medium text-[#173252] transition hover:bg-[#173252] hover:text-white"
              >
                Plan een persoonlijk gesprek
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)] sm:translate-y-10">
              <img
                src="/images/brochure1.png"
                alt="Nordic Move Spain brochure over de Buyer Discovery Experience en Interior Design"
                className="h-full w-full rounded-[26px] object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(23,50,82,0.12)]">
              <img
                src="/images/brochure2.png"
                alt="Nordic Move Spain brochure over veilig kopen en het Purchase Safety Report"
                className="h-full w-full rounded-[26px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
              Vier services, één duidelijke route
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
              Van eerste oriëntatie tot een woning die klaar is om in te leven.
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
                    <p className="text-xs uppercase tracking-[0.3em] text-[#b88948]">
                      {service.eyebrow}
                    </p>

                    <h3 className="mt-4 font-serif text-3xl leading-tight text-[#173252] md:text-4xl">
                      {service.title}
                    </h3>
                  </div>

                  <span className="font-serif text-5xl text-[#d7bd94]">
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

                {service.note ? (
                  <p className="mt-7 text-xs leading-relaxed text-stone-500">
                    * {service.note}
                  </p>
                ) : null}

                <a
                  href={service.href}
                  className="mt-8 inline-flex w-fit items-center border-b border-[#b88948] pb-1 text-xs font-medium uppercase tracking-[0.22em] text-[#173252] transition hover:text-[#b88948]"
                >
                  {service.cta} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[#173252] p-10 text-white md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#d1a866]">
                Service 01 · Area Match
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
                Een gratis portfolio dat uw zoektocht richting geeft.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/80">
                Het Area Match Portfolio is geen korte uitslag of algemene
                aanbeveling. U ontvangt een uitgebreid en persoonlijk document
                waarmee u beter begrijpt welke omgeving, woonplaats en woning
                aansluiten op de manier waarop u in Spanje wilt leven.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Het portfolio geeft niet alleen aan waar u kunt zoeken, maar
                schept ook duidelijkheid over waar u eigenlijk naar op zoek bent.
                Dat voorkomt eindeloos scrollen door woningaanbod dat uiteindelijk
                niet bij uw dagelijkse leven past.
              </p>

              <a
                href="/nl/relocation-assessment"
                className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Vraag uw gratis Area Match Portfolio aan
              </a>
            </div>

            <div className="p-10 md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Wat u ontvangt
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Een persoonlijk profiel van uw woon- en lifestylevoorkeuren",
                  "Een selectie van passende regio’s en woonplaatsen",
                  "Uitleg over sfeer, bereikbaarheid en dagelijks leven",
                  "Informatie over zorg, voorzieningen en internationale communities",
                  "Inzicht in passende woningtypes en woonomgevingen",
                  "Een gerichte basis voor bezichtigingen en vervolgstappen",
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
                Het Area Match Portfolio is gratis en vrijblijvend. De inhoud
                wordt afgestemd op uw persoonlijke situatie, plannen en
                voorkeuren.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[40px] bg-white p-3 shadow-sm">
            <img
              src="/images/brochure1.png"
              alt="Buyer Discovery Trip en Nordic Circle brochure van Nordic Move Spain"
              className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
              Service 02 · Buyer Discovery Trip
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
              Ervaar hoe het leven in de juiste regio werkelijk voelt.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Uw Area Match Portfolio vormt de basis voor een persoonlijke
              Discovery Trip. Wij stellen een route samen langs de gebieden,
              woningen en voorzieningen die aansluiten op uw profiel.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              U krijgt tijd om verschillen te ervaren, gerichte vragen te
              stellen en te ontdekken welke omgeving ook buiten de vakantie
              bij u past. De trip combineert geselecteerde bezichtigingen met
              lokale kennis en relevante lifestyle-ervaringen.
            </p>

            <a
              href="/nl/services/discovery-trips"
              className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
            >
              Bekijk de Discovery Trip
            </a>

            <p className="mt-6 text-xs leading-relaxed text-stone-500">
              * Bij daadwerkelijke aankoop van een villa via Nordic Move Spain
              wordt, afhankelijk van de aankoopprijs, de helft of de volledige
              reissom vergoed. De exacte vergoeding en voorwaarden worden vooraf
              schriftelijk bevestigd.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 lg:order-1">
            <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
              Service 03 · Purchase Safety
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
              Onafhankelijke controle voordat u definitief koopt.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Een mooie presentatie vertelt niet alles. Daarom laten wij bij een
              serieuze aankoop de belangrijkste juridische, technische en
              praktische aandachtspunten beoordelen door onafhankelijke
              specialisten.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              De bevindingen worden samengebracht in één overzichtelijk
              veiligheidsrapport. Zo weet u beter of u kunt doorgaan, extra
              voorwaarden moet stellen, opnieuw moet onderhandelen of beter
              afstand kunt nemen.
            </p>

            <a
              href="/nl/services/purchase-safety-report"
              className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
            >
              Bekijk Purchase Safety
            </a>

            <p className="mt-6 text-xs leading-relaxed text-stone-500">
              * Bij daadwerkelijke aankoop van een villa via Nordic Move Spain
              is het onafhankelijke veiligheidsrapport inbegrepen in de
              aankoopbegeleiding. De precieze omvang van het onderzoek is
              afhankelijk van de woning, het dossier en de beschikbaarheid van
              de juiste specialisten.
            </p>
          </div>

          <div className="order-1 overflow-hidden rounded-[40px] bg-white p-3 shadow-sm lg:order-2">
            <img
              src="/images/brochure2.png"
              alt="Purchase Safety brochure van Nordic Move Spain"
              className="max-h-[780px] w-full rounded-[32px] object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#e9dfd2]">
          <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-10 md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#b88948]">
                Service 04 · Interior Design
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#173252] md:text-6xl">
                Aankomen in een woning die al als thuis voelt.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-700">
                Na aankoop ontwikkelen wij samen met u een duidelijke interior
                direction die past bij de woning, de omgeving en de manier
                waarop u er wilt leven.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Wij begeleiden de keuze van meubels, materialen, verlichting en
                styling en stemmen de praktische uitvoering af met betrouwbare
                lokale partners. Zo hoeft u niet maanden op afstand te
                coördineren en arriveert u in een compleet voorbereid thuis.
              </p>

              <a
                href="/nl/services/move-in-ready"
                className="mt-9 inline-block rounded-full bg-[#173252] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#24466d]"
              >
                Ontdek Interior Design
              </a>

              <p className="mt-6 text-xs leading-relaxed text-stone-500">
                Ontwerp, budget, planning en uitvoering worden afgestemd op de
                woning, uw wensen en de beschikbaarheid van geselecteerde lokale
                partners.
              </p>
            </div>

            <div className="min-h-[520px]">
              <img
                src="/images/interior-design.png"
                alt="Warm mediterraan interior design voor een villa aan de Costa Blanca"
                className="h-full min-h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl rounded-[42px] bg-[#173252] px-8 py-16 text-center text-white md:px-14 md:py-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d1a866]">
            Begin met duidelijkheid
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            Ontdek eerst wat echt bij u past.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/75">
            Vraag uw gratis Area Match Portfolio aan en ontvang een duidelijke,
            persoonlijke basis voor uw zoektocht naar een woning aan de Costa
            Blanca.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/nl/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Ontvang uw gratis portfolio
            </a>

            <a
              href="/nl/contact"
              className="rounded-full border border-white/70 px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#173252]"
            >
              Plan een kennismaking
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}