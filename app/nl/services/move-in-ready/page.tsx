export const metadata = {
  title: "Move-In Ready Support | Nordic Move Spain",
  description:
    "Move-In Ready support voor internationale kopers aan de Costa Blanca: stijlbriefing, visueel moodboard, lifestyle concept, technische haalbaarheid, meubelsourcing, verlichting, gordijnen, installatie, styling en voorbereiding voor aankomst.",
};

export default function MoveInReadyPageNL() {
  const images = [
    {
      src: "/images/move-in-ready-costal.png",
      title: "Coastal Calm",
      text:
        "Een zachte, elegante kuststijl met natuurlijke materialen, rustige tinten, ontspannen comfort en ingetogen luxe.",
      alt: "Coastal Calm interieurconcept voor Move-In Ready support aan de Costa Blanca",
    },
    {
      src: "/images/move-in-ready-ibiza.png",
      title: "Ibiza Soho Lounge",
      text:
        "Een warme en sociale mediterrane stijl met zachte wittinten, rustiek hout, geweven texturen, subtiele kleuraccenten en een elegant indoor-outdoor gevoel.",
      alt: "Ibiza Soho lounge interieurconcept voor Move-In Ready support aan de Costa Blanca",
    },
    {
      src: "/images/move-in-ready-kitchen.png",
      title: "Contemporary Coastal Kitchen",
      text:
        "Een lichtere en meer architectonische richting met strakke lijnen, grote ramen, lichte houttinten, verfijnde afwerking en een rustige kustsfeer.",
      alt: "Contemporary Coastal Kitchen concept voor Move-In Ready support aan de Costa Blanca",
    },
    {
      src: "/images/move-in-ready-mediterranean-warmth.png",
      title: "Mediterranean Warmth",
      text:
        "Een ontspannen mediterrane lifestyle-richting rond terrassen, licht, zeezicht, buiten dineren en comfortabel dagelijks leven.",
      alt: "Mediterranean Warmth indoor-outdoor living concept voor Move-In Ready support aan de Costa Blanca",
    },
  ];

  const steps = [
    {
      title: "Stijlbriefing",
      text:
        "We starten met een persoonlijke stijlbriefing om te begrijpen hoe je in de woning wilt leven. Het gaat niet alleen om smaak, maar ook om dagelijks ritme, gebruik door familie, gasten, privacy, onderhoud, comfort en de sfeer die je wilt creëren.",
    },
    {
      title: "Visueel moodboard",
      text:
        "Op basis van je voorkeuren maken we een visueel moodboard met kleuren, materialen, texturen, meubelreferenties, lichtideeën en indoor-outdoor inspiratie. Zo ontstaat een duidelijke richting voordat er beslissingen worden genomen of kosten worden gemaakt.",
    },
    {
      title: "Lifestyle concept",
      text:
        "We vertalen het moodboard naar een lifestyle concept voor de woning. Het concept verbindt de uitstraling van het huis met hoe het in het dagelijks leven moet functioneren: ontspannen, gasten ontvangen, werken vanuit Spanje, buiten eten, familiebezoek of onderhoudsvriendelijk wonen.",
    },
    {
      title: "Aannemer / technische haalbaarheid",
      text:
        "Als renovatie, installatie of technisch werk nodig is, betrekken we vroeg de juiste lokale aannemer of specialist. Zo wordt duidelijk wat realistisch is voor de woning, het budget, de planning, vergunningen, materialen en praktische uitvoering.",
    },
    {
      title: "Meubelsourcing",
      text:
        "Zodra de richting duidelijk is, helpen we de meubelsourcing te coördineren via passende leveranciers en lokale partners. Het doel is een samenhangend thuis, geen verzameling losse aankopen.",
    },
    {
      title: "Verlichting",
      text:
        "Verlichting heeft veel invloed op hoe een woning voelt. We denken mee over praktische verlichting, sfeerverlichting, statement pieces, buitenverlichting en de details die de woning warm en afgewerkt laten aanvoelen.",
    },
    {
      title: "Gordijnen",
      text:
        "Gordijnen en raamdecoratie worden vaak te laat geregeld, maar hebben veel invloed op privacy, comfort, akoestiek en sfeer. We helpen de juiste richting en lokale uitvoering te coördineren waar nodig.",
    },
    {
      title: "Installatie",
      text:
        "Leveringen, montage en installatie zijn lastig te organiseren vanuit het buitenland. We helpen deze praktische stappen te coördineren met betrouwbare lokale partners, zodat het proces gestructureerder en minder versnipperd verloopt.",
    },
    {
      title: "Styling",
      text:
        "De laatste stylinglaag brengt de woning samen: textiel, geselecteerde accessoires, buitendetails, beddengoed, servies, planten en de kleinere keuzes die het huis persoonlijk laten voelen in plaats van onaf.",
    },
    {
      title: "Voorbereiding voor aankomst",
      text:
        "Voor aankomst helpen we de laatste praktische details te coördineren, zodat de woning voorbereid aanvoelt: basisinrichting, laatste controles, praktische items, overdrachtspunten en een soepelere landing in het dagelijks leven aan de Costa Blanca.",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] px-8 py-28 text-stone-900">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
          Soft Landing &amp; Move-In Ready
        </p>

        <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
          Move-In Ready Support
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
          Na aankoop van een woning aan de Costa Blanca willen veel internationale
          kopers niet maandenlang vanuit het buitenland bezig zijn met aannemers,
          meubelzaken, verlichting, gordijnen, leveringen, installatie en styling.
        </p>

        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
          Move-In Ready support helpt om van de woning een thuis te maken dat
          doordacht, praktisch en voorbereid aanvoelt vóór aankomst. Wij helpen
          de interior direction vormgeven, maken een visueel concept en
          coördineren de juiste lokale partners voor de praktische uitvoering.
        </p>

        {/* INTERIOR CONCEPT IMAGES */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
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
                  Concept visual
                </div>
              </div>

              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  Interior direction
                </p>

                <h2 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  {image.title}
                </h2>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {image.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-relaxed text-stone-500">
          De beelden op deze pagina zijn interior concept visuals ter inspiratie.
          Het zijn geen actuele woningen of afgeronde klantprojecten. Definitief
          ontwerp, timing en uitvoering zijn afhankelijk van de woning, het budget,
          beschikbaarheid en de geselecteerde lokale partners.
        </p>

        {/* PROCESS */}
        <section className="mt-20 rounded-[40px] bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Wat wij coördineren
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Het Move-In Ready proces
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
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
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm leading-relaxed text-stone-500">
            Move-In Ready support wordt afgestemd op elke woning en elke klant.
            Omvang, timing, prijs en beschikbaarheid hangen af van de woning, het
            benodigde werk, geselecteerde partners, materialen en het gekozen
            serviceniveau.
          </p>
        </section>

        <div className="mt-16 rounded-[40px] bg-[#1e2a3a] p-10 text-white md:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Start met duidelijkheid
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Kom aan in een woning die doordacht voelt, niet onaf.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Van stijlbriefing en visueel moodboard tot lifestyle concept,
            aannemerscoördinatie, meubelsourcing, verlichting, gordijnen,
            installatie, styling en de laatste voorbereiding voor aankomst — wij
            helpen de laatste stap naar je woning aan de Costa Blanca rustiger en
            beter georganiseerd te maken.
          </p>

          <a
            href="/nl/contact"
            className="mt-8 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Bespreek Move-In Ready support
          </a>
        </div>
      </section>
    </main>
  );
}
