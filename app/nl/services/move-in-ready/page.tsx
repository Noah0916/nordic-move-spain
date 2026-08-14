export const metadata = {
  title: "Move-In Ready ondersteuning | Nordic Move Spain",
  description:
    "Move-In Ready ondersteuning voor internationale kopers aan de Costa Blanca: stijlbriefing, visueel moodboard, lifestyleconcept, technische haalbaarheid, meubelselectie, verlichting, raamdecoratie, installatie, styling en voorbereiding op uw aankomst.",
};

export default function MoveInReadyPage() {
  const images = [
    {
      src: "/images/move-in-ready-costal.png",
      title: "Coastal Calm",
      text:
        "Een zachte, elegante kuststijl met natuurlijke materialen, rustige tinten, ontspannen comfort en ingetogen luxe.",
      alt: "Coastal-Calm-stijlrichting voor Move-In Ready ondersteuning aan de Costa Blanca",
    },
    {
      src: "/images/move-in-ready-ibiza.png",
      title: "Ibiza Soho Lounge",
      text:
        "Een warme en uitnodigende mediterrane stijl met zachte wittinten, rustiek hout, geweven texturen, subtiele kleuraccenten en een elegante indoor-outdoorbeleving.",
      alt: "Ibiza-Soho-Lounge-stijlrichting voor Move-In Ready ondersteuning aan de Costa Blanca",
    },
    {
      src: "/images/move-in-ready-kitchen.png",
      title: "Contemporary Coastal Kitchen",
      text:
        "Een lichte, architectonische stijl met strakke lijnen, grote ramen, lichte houtsoorten, hoogwaardige afwerkingen en een rustige kustsfeer.",
      alt: "Contemporary-Coastal-Kitchen-stijlrichting voor Move-In Ready ondersteuning aan de Costa Blanca",
    },
    {
      src: "/images/move-in-ready-mediterranean-warmth.png",
      title: "Mediterranean Warmth",
      text:
        "Een ontspannen mediterrane levensstijl rond terrassen, daglicht, zeezicht, buiten eten en comfortabel dagelijks wonen.",
      alt: "Mediterranean-Warmth-stijlrichting voor harmonieus binnen- en buitenleven aan de Costa Blanca",
    },
  ];

  const steps = [
    {
      title: "Stijlbriefing",
      text:
        "We beginnen met een persoonlijke stijlbriefing om te begrijpen hoe u de woning wilt gebruiken. Daarbij kijken we niet alleen naar smaak, maar ook naar uw dagelijks leven, gezin, gasten, privacy, onderhoud, comfort en de gewenste sfeer.",
    },
    {
      title: "Visueel moodboard",
      text:
        "Op basis van uw wensen maken we een visueel moodboard met kleuren, materialen, texturen, meubelreferenties, verlichtingsideeën en inspiratie voor binnen- en buitenruimtes. Zo ontstaat een duidelijke richting voordat er beslissingen worden genomen of uitgaven worden gedaan.",
    },
    {
      title: "Lifestyleconcept",
      text:
        "We vertalen het moodboard naar een lifestyleconcept voor de woning. Dit verbindt het ontwerp van het huis met het echte dagelijkse leven: ontspannen, gasten ontvangen, vanuit Spanje werken, buiten eten, familiebezoek of onderhoudsvriendelijk wonen.",
    },
    {
      title: "Aannemer en technische haalbaarheid",
      text:
        "Wanneer renovatie-, installatie- of technische werkzaamheden nodig zijn, betrekken we vroegtijdig de juiste lokale aannemer of specialist. Zo kan worden beoordeeld wat voor de woning, het budget, de planning, vergunningen, materialen en praktische uitvoering realistisch is.",
    },
    {
      title: "Meubelselectie en inkoop",
      text:
        "Zodra de stijlrichting vaststaat, coördineren we de meubelselectie en inkoop via passende leveranciers en lokale partners. Het doel is een harmonieus thuis in plaats van een verzameling losse aankopen die niet op elkaar zijn afgestemd.",
    },
    {
      title: "Verlichting",
      text:
        "Verlichting heeft grote invloed op de sfeer van een woning. We denken mee over functionele verlichting, sfeerverlichting, bijzondere armaturen, buitenverlichting en de details die een huis warm en compleet laten aanvoelen.",
    },
    {
      title: "Gordijnen en raamdecoratie",
      text:
        "Gordijnen en raamdecoratie worden vaak pas laat gekozen, terwijl ze veel invloed hebben op privacy, comfort, akoestiek en sfeer. We helpen de juiste richting te bepalen en coördineren waar nodig de lokale uitvoering.",
    },
    {
      title: "Levering en installatie",
      text:
        "Leveringen, montage en installatie zijn vanuit het buitenland lastig te organiseren. We coördineren deze praktische stappen met betrouwbare lokale partners, zodat het proces gestructureerder en minder versnipperd verloopt.",
    },
    {
      title: "Styling",
      text:
        "De afsluitende styling brengt alles samen tot één geheel: textiel, geselecteerde accessoires, details voor buiten, beddengoed, servies, planten en kleinere keuzes die het huis persoonlijk en compleet laten aanvoelen.",
    },
    {
      title: "Voorbereiding op uw aankomst",
      text:
        "Voor uw aankomst coördineren we de laatste praktische punten, waaronder de basisuitrusting, eindcontroles, belangrijke dagelijkse benodigdheden en opleverpunten. Zo begint uw leven aan de Costa Blanca rustiger en soepeler.",
    },
  ];


  const packages = [
    {
      number: "01",
      title: "Home Setup",
      subtitle: "De praktische basis van uw woning",
      intro:
        "Voor eigenaren die de belangrijkste praktische zaken na de sleuteloverdracht vóór aankomst duidelijk geregeld willen hebben, zonder een volledige renovatie of complete gezinsverhuizing.",
      items: [
        "Elektriciteit en water helpen regelen",
        "Internet, telefoon en televisie coördineren",
        "Woonhuis-, inboedel- en relevante verzekeringsopties vergelijken",
        "Alarm-, beveiligings- en toegangsoplossingen onderzoeken",
        "Schoonmaak en voorbereiding vóór aankomst coördineren",
        "Offertes opvragen voor schilderwerk en kleine werkzaamheden",
        "Tuin-, zwembad- en technisch onderhoud organiseren",
        "Leveranciers-, afspraak- en contractinformatie bundelen",
      ],
      result:
        "Uw woning is praktisch voorbereid en de belangrijkste leveranciers, afspraken en contractinformatie zijn samengebracht in één duidelijk overzicht.",
      featured: false,
    },
    {
      number: "02",
      title: "Renovatie & Interieur",
      subtitle: "Renovatie en inrichting in één gecoördineerd traject",
      intro:
        "Voor woningen die renovatie, aanpassingen of een complete inrichting nodig hebben voordat u er comfortabel gebruik van kunt maken.",
      items: [
        "Wensen, gebruik, prioriteiten en budget vastleggen",
        "Aannemer en relevante specialisten selecteren en coördineren",
        "Waar nodig afstemmen met architect of technisch architect",
        "Offertes, planning en voortgangsrapportage structureren",
        "Een interieurconcept en visueel moodboard ontwikkelen",
        "Materialen, meubels en verlichting selecteren",
        "Levering, montage, installatie en styling coördineren",
        "Opleverpunten en eindcontroles vóór aankomst organiseren",
      ],
      result:
        "Renovatie, interieurkeuzes, inkoop en uitvoering worden als één geheel gecoördineerd, zodat techniek, planning en de uiteindelijke woonomgeving goed op elkaar aansluiten.",
      featured: true,
    },
    {
      number: "03",
      title: "Gezinsverhuizing",
      subtitle: "Bereid het dagelijks leven voor, niet alleen de verhuizing",
      intro:
        "Voor gezinnen en internationale professionals die niet alleen de woning, maar ook de praktische kant van wonen, werken en zich vestigen aan de Costa Blanca willen voorbereiden.",
      items: [
        "Internationale verhuisbedrijven en opslagmogelijkheden vergelijken",
        "Scholen en kinderopvang in geschikte gebieden onderzoeken",
        "Zorg, verzekeringen en praktische voorzieningen in kaart brengen",
        "Lokale administratie en relevante vervolgstappen structureren",
        "Auto- en specialistische transportmogelijkheden onderzoeken",
        "Sportclubs, golfclubs en lokale communities verkennen",
        "Lokale dienstverleners en dagelijkse voorzieningen selecteren",
        "Een persoonlijk relocatieplan opstellen",
      ],
      result:
        "U krijgt een duidelijker en beter voorbereid vertrekpunt voor de verhuizing, inclusief wonen, scholen, dagelijkse voorzieningen en de belangrijkste lokale vervolgstappen.",
      featured: false,
    },
  ];

  return (
    <main className="bg-[#f6f1ea] px-8 py-28 text-stone-900">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
          Zorgeloos aankomen &amp; Move-In Ready
        </p>

        <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
          Move-In Ready ondersteuning
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
          Na de aankoop van een woning aan de Costa Blanca willen veel
          internationale kopers niet maandenlang vanuit het buitenland aannemers,
          meubelzaken, verlichting, gordijnen, leveringen, installatie en styling
          organiseren.
        </p>

        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
          Onze Move-In Ready ondersteuning helpt om de woning te veranderen in een
          doordacht, praktisch en persoonlijk thuis dat klaar is voor uw aankomst.
          We ontwikkelen de stijlrichting, maken een visueel moodboard en coördineren
          geschikte lokale partners voor de praktische uitvoering.
        </p>

        {/* OOK NA DE SLEUTELOVERDRACHT */}
        <section className="mt-16 rounded-[40px] bg-[#1e2a3a] p-8 text-white shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Ook na de sleuteloverdracht
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Ook na de aankoop blijven we aan uw zijde.
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-relaxed text-white/80">
            De aankoop is vaak pas het begin. Daarna moeten mogelijk nog elektriciteit,
            water, internet en verzekeringen worden geregeld. Misschien heeft u ook
            een internationaal verhuisbedrijf, tijdelijke opslag of voertuigtransport
            nodig. Ook tuin- en zwembadonderhoud, airconditioning, verwarming,
            zonnepanelen, renovatie en interieurinrichting vragen om betrouwbare
            lokale partners en duidelijke afspraken.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Nordic Move Spain helpt u deze stappen overzichtelijk te organiseren.
            We spreken Spaans, kennen de lokale werkwijze en vinden passende
            professionals voor uw situatie. We vragen offertes op, vergelijken
            mogelijkheden, coördineren afspraken en houden de voortgang voor u in het
            oog.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            U hoeft niet maandenlang zelf naar betrouwbare aanbieders te zoeken of uw
            wensen telkens opnieuw uit te leggen. U communiceert met één vast
            aanspreekpunt, terwijl wij ervoor zorgen dat de geselecteerde partijen
            weten wat er moet gebeuren, wanneer het moet gebeuren en wie waarvoor
            verantwoordelijk is.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Voor renovaties werken we samen met een geselecteerd, officieel
            geregistreerd bouwbedrijf met een eigen uitvoeringsteam dat gekwalificeerde
            architecten en technisch architecten inschakelt. Uiteraard kunt u ook uw
            eigen aannemer of andere specialisten inschakelen.
          </p>

          <p className="mt-6 max-w-4xl text-lg font-medium leading-relaxed text-[#d7bd94]">
            U kunt kiezen voor de volledige Buyer Journey of alleen voor de diensten
            die u nodig heeft — van aankoopbegeleiding en onafhankelijke controles tot
            verhuizing, Home Setup, renovatie en Interior Styling.
          </p>
        </section>

        {/* PAKKETTEN */}
        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Move-In Ready pakketten
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Kies de ondersteuning die past bij uw situatie.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
            Van de praktische basis van uw woning tot renovatie, interieur en een
            complete gezinsverhuizing. Elk pakket wordt vooraf als één duidelijke
            scope afgestemd en gecoördineerd.
          </p>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.number}
                className={`relative flex h-full flex-col rounded-[32px] p-7 shadow-sm md:p-8 ${
                  item.featured
                    ? "bg-[#1d3b60] text-white"
                    : "bg-white text-stone-900"
                }`}
              >
                <span
                  className={`absolute right-7 top-7 font-serif text-4xl ${
                    item.featured ? "text-white/20" : "text-[#d8b77d]"
                  }`}
                >
                  {item.number}
                </span>

                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                  Pakket {item.number}
                </p>

                <h3
                  className={`mt-4 max-w-[80%] font-serif text-3xl leading-tight ${
                    item.featured ? "text-white" : "text-[#1e2a3a]"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-5 text-sm font-medium leading-relaxed ${
                    item.featured ? "text-white" : "text-[#1e2a3a]"
                  }`}
                >
                  {item.subtitle}
                </p>

                <p
                  className={`mt-5 text-sm leading-relaxed ${
                    item.featured ? "text-white/80" : "text-stone-600"
                  }`}
                >
                  {item.intro}
                </p>

                <ul className="mt-6 space-y-3">
                  {item.items.map((service) => (
                    <li
                      key={service}
                      className={`flex gap-3 text-sm leading-relaxed ${
                        item.featured ? "text-white/90" : "text-stone-700"
                      }`}
                    >
                      <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8a063]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-7 rounded-[24px] p-5 ${
                    item.featured ? "bg-white/10" : "bg-[#f6f1ea]"
                  }`}
                >
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#c8a063]">
                    Beoogd resultaat
                  </p>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      item.featured ? "text-white/85" : "text-stone-700"
                    }`}
                  >
                    {item.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* NORDIC MOVE DESIGN AFBEELDINGEN */}
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
                  Nordic Move Design
                </div>
              </div>

              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  Stijlrichting
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
          De getoonde Nordic Move Designs dienen als inspirerende stijlrichtingen.
          Het zijn geen woningaanbiedingen en ook geen afgeronde klantprojecten.
          Het uiteindelijke ontwerp, de planning en de uitvoering worden afgestemd op
          de woning, het budget, de beschikbaarheid en de geselecteerde lokale partners.
        </p>

        {/* PROCES */}
        <section className="mt-20 rounded-[40px] bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Wat we coördineren
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
            De Move-In Ready ondersteuning wordt afgestemd op iedere woning en iedere
            klant. Omvang, planning, prijs en beschikbaarheid hangen af van de woning,
            de benodigde werkzaamheden, de geselecteerde partners, de materialen en
            het gewenste serviceniveau.
          </p>
        </section>

        <div className="mt-16 rounded-[40px] bg-[#1e2a3a] p-10 text-white md:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Persoonlijke ondersteuning bij elke stap
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Vertel ons bij welke stap van uw Buyer Journey u ondersteuning nodig heeft.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Neem contact met ons op en vertel bij welke dienst of stap u ondersteuning
            nodig heeft. Of u nu nog de juiste regio zoekt, al een woning heeft
            gevonden, onafhankelijke aankoopcontroles nodig heeft of hulp wenst bij
            verhuizing, renovatie en Move-In Ready — samen bespreken we de passende
            volgende stap.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-[0.7fr_1.3fr]">
            <a
              href="/nl/contact"
              className="inline-flex min-h-[112px] items-center justify-center rounded-[28px] border border-white/35 px-8 py-6 text-center text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-[#1e2a3a]"
            >
              Contactformulier gebruiken
            </a>

            <a
              href="https://wa.me/31683848239?text=Hallo%20Nordic%20Move%20Spain%2C%20ik%20wil%20graag%20bespreken%20bij%20welke%20dienst%20of%20stap%20van%20de%20Buyer%20Journey%20ik%20ondersteuning%20nodig%20heb."
              target="_blank"
              rel="noreferrer"
              aria-label="Direct een WhatsApp-gesprek met Nordic Move Spain starten"
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
                  Persoonlijk gesprek starten
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
        </div>
      </section>
    </main>
  );
}