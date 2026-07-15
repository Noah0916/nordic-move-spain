export const metadata = {
  title: "Area Match Report & Tryggt Köp Costa Blanca Nord | Nordic Move Spain",
  description:
    "Upptäck vilken plats och boendemiljö som passar dig bäst, och hur du kan köpa med större trygghet genom Purchase Safety Report, oberoende kontroller och en säker köpmiljö.",
};

export default function AreaMatchPage() {
  const reportItems = [
    "Personlig matchning med orter och bostadsområden",
    "Livsstil och daglig boendemiljö",
    "Lugn, integritet, sommartryck och bullerrisker",
    "Trygghet, lokala uppmärksamhetspunkter och synliga lägesrisker",
    "Läkare, sjukhus och tillgång till vård",
    "Wellness, golf, sport och fritidsmöjligheter",
    "Restauranger, beach clubs och lokal kultur",
    "Internationella skolor och lämplighet för familjer",
    "Internationella gemenskaper och socialt nätverk",
    "Tillgänglighet, service och investeringspotential",
    "Risker som trafikerade vägar, elmaster, brant tillfart eller isolerade lägen",
    "Första uppmärksamhetspunkter kring uthyrning, ägarföreningsregler och användning året runt",
  ];

  const safetyChecks = [
    {
      label: "01",
      title: "Att välja rätt område",
      text:
        "Innan vi tittar på bostäder identifierar vi vilka orter, bostadsområden och boendemiljöer som verkligen passar ditt dagliga liv. Det hjälper dig att undvika att bli förälskad i en bostad i ett område som inte fungerar för dig på lång sikt.",
    },
    {
      label: "02",
      title: "Att upptäcka risker tidigare",
      text:
        "Vi tittar inte bara på atmosfär och skönhet, utan även på praktiska faktorer som tillgänglighet, buller, säsongstryck, höjdskillnader, service, vård, ägarföreningsregler och möjliga begränsningar.",
    },
    {
      label: "03",
      title: "Gå vidare tryggare med Purchase Safety Report",
      text:
        "När du seriöst överväger en bostad börjar den djupare köpkontrollen. Tillsammans med oberoende specialister görs juridiska, tekniska och administrativa uppmärksamhetspunkter synliga innan du köper.",
    },
  ];

  const professionalChecks = [
    {
      title: "Oberoende advokat",
      text:
        "Advokaten granskar bland annat ägande, Nota Simple, möjliga belastningar, obetalda skulder, köpeavtal, tillstånd och juridiska risker som bör vara tydliga innan något undertecknas.",
    },
    {
      title: "Notarie och gestor",
      text:
        "Notarien övervakar den formella överlåtelsen och undertecknandet av lagfarten. En gestor kan hjälpa till med administrativa kontroller, registreringar, skatter, kadastral information och praktisk uppföljning.",
    },
    {
      title: "Teknisk byggnadsspecialist",
      text:
        "Den tekniska specialisten granskar synliga byggnadsrisker som fukt, sprickor, tak, installationer, el, pool, septiktank, underhållsrisker och möjliga renoveringskostnader.",
    },
  ];

  const secureItems = [
    "Kontrollerad åtkomst per kund och rådgivare",
    "Tvåstegsautentisering för extra säkerhet",
    "Färre lösa mejl, skärmbilder och WhatsApp-dokument",
    "En central plats för rapporter, dokument och nästa steg",
    "Tydliga versioner, deadlines och ansvarsområden",
    "Mer struktur under en köpprocess med många inblandade parter",
  ];

  const journeySteps = [
    {
      number: "01",
      title: "Fyll i det kostnadsfria frågeformuläret",
      text:
        "Genom noggrant utformade frågor får vi insikt i din personliga situation, dina bostadsönskemål, livsstil, budget, intressen, funderingar och långsiktiga planer.",
    },
    {
      number: "02",
      title: "Få din personliga Area Match Report",
      text:
        "Vi kombinerar dina svar med lokal kunskap och AI-stödd analys. Du får en personlig översikt över de orter, bostadsområden och gemenskaper som mest sannolikt passar dig.",
    },
    {
      number: "03",
      title: "Boka ett kostnadsfritt personligt intake-samtal",
      text:
        "Under samtalet går vi igenom resultaten, dina frågor, önskemål och risker mer i detalj. Det hjälper oss att förstå inte bara var du vill bo, utan också vad du absolut vill undvika.",
    },
    {
      number: "04",
      title: "Upplev områdena under Buyer Discovery Trip",
      text:
        "Du besöker utvalda orter och bostadsområden, möter relevanta lokala specialister och upplever hur vardagen faktiskt känns innan du binder dig till en bostad.",
    },
    {
      number: "05",
      title: "Granska en bostad med Purchase Safety Report",
      text:
        "När du seriöst överväger en bostad samordnar vi oberoende juridiska, tekniska och administrativa kontroller. Resultaten sammanställs tydligt innan du fattar beslut.",
    },
    {
      number: "06",
      title: "Fatta beslut med struktur och säkra dokument",
      text:
        "Viktiga dokument, rapporter och nästa steg samlas där det är möjligt i en säker digital miljö med kontrollerad åtkomst och tvåstegsautentisering.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      {/* INTRODUCTION */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Area Match &amp; Tryggt Köp
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
            Välj rätt område först. Köp sedan med större trygghet.
          </h1>

          <p className="mt-10 max-w-5xl text-xl leading-relaxed text-stone-600">
            Att köpa bostad på Costa Blanca Nord börjar inte med den första
            visningen. Det börjar med frågan om området, vardagen och den
            praktiska verkligheten verkligen passar dig. En vacker bostad kan
            fortfarande vara fel val om läget är för livligt, för isolerat, för
            tyst på vintern eller innehåller dolda risker som du upptäcker först
            efter köpet.
          </p>

          <p className="mt-6 max-w-5xl text-xl leading-relaxed text-stone-600">
            Därför kombinerar vi vår kostnadsfria Area Match &amp; Lifestyle
            Intelligence Report med ett tydligt trygghetsfokuserat arbetssätt.
            Först kartlägger vi vilka orter och bostadsområden som passar din
            livsstil. Därefter vägleder vi dig mot en noggrann köpprocess där
            juridiska, tekniska och praktiska risker blir synliga innan köp.
          </p>

          <p className="mt-6 max-w-5xl text-xl leading-relaxed text-stone-600">
            Vårt arbetssätt är utformat för internationella köpare som inte bara
            söker en vacker bostad, utan framför allt vill ha ett tryggt,
            begripligt och välkontrollerat köp.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/sv/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Be om din kostnadsfria Area Match Report
            </a>

            <a
              href="/sv/services/purchase-safety-report"
              className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Se Purchase Safety Report
            </a>
          </div>
        </div>
      </section>

      {/* SAFETY AS THE FOUNDATION */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vårt trygghetsfokuserade arbetssätt
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Inte bara söka efter det som ser vackert ut, utan kontrollera det
            som verkligen spelar roll.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Många köpare börjar med bilder, utsikt och pris. Vi vänder på den
            processen. Först tittar vi på livsstil, tillgänglighet, risker, läge
            och praktisk lämplighet. Först därefter blir bostadssökningen
            fokuserad och meningsfull.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {safetyChecks.map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] bg-[#f6f1ea] p-7"
              >
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {item.label}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPORT CONTENT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vad din personliga rapport kan innehålla
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Från livsstil och vård till buller, tillgänglighet och risker.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            I stället för att själv lägga månader på att samla lösryckt
            information får du en tydlig och strukturerad översikt över de
            områden som bäst matchar din profil. Vi tittar längre än
            bostadspriser, avstånd till stranden och välkända ortsnamn.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reportItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f6f1ea] p-5 leading-relaxed text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-600">
            Rapporten kombinerar en personlig livsstilsmatchning med praktisk
            lokal information. Det ger dig insikt inte bara i var du skulle kunna
            köpa, utan framför allt var du mest sannolikt kommer att känna dig
            trygg, bekväm och hemma på lång sikt.
          </p>
        </div>
      </section>

      {/* PURCHASE SAFETY REPORT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[480px]">
              <img
                src="/images/legal.png"
                alt="Purchase Safety Report för tryggare bostadsköp på Costa Blanca Nord"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/25"></div>
            </div>

            <div className="p-10 md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Purchase Safety Report
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                När en bostad blir seriös börjar de verkliga kontrollerna.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Area Match Report hjälper dig först att välja rätt område. När
                du sedan seriöst överväger en bostad hjälper Purchase Safety
                Report till att tydliggöra de viktigaste juridiska, tekniska och
                praktiska riskerna innan du köper.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Det kan omfatta ägarinformation, Nota Simple, tillstånd,
                tillbyggnader, tomtgränser, synliga brister, fukt, pool,
                septiktank, ägarföreningsregler, årliga kostnader och möjliga
                begränsningar för användning eller uthyrning.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Målet är enkelt: innan du skriver under vill du veta om du kan gå
                vidare med förtroende, omförhandla, lägga till villkor eller
                avstå.
              </p>

              <a
                href="/sv/services/purchase-safety-report"
                className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Upptäck Purchase Safety Report
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONALS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Oberoende specialister
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Vi samordnar rätt specialister. De bedömer sitt eget expertområde.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Nordic Move Spain ersätter inte advokat, notarie, gestor,
              skatterådgivare eller teknisk byggnadsspecialist. Vi samlar rätt
              specialister, strukturerar processen och hjälper dig att förstå
              resultaten tydligt.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {professionalChecks.map((check) => (
              <div
                key={check.title}
                className="rounded-[32px] bg-white p-8 shadow-sm md:p-9"
              >
                <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {check.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {check.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURE ENVIRONMENT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#e9dfd2] p-10 shadow-sm md:p-14 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Säker köpmiljö
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Inga lösa dokument via WhatsApp eller osäker e-post.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-700">
                Under ett bostadsköp i Spanien delas ofta känsliga dokument:
                pass, köpeavtal, bankuppgifter, skattedokument,
                ägarinformation, tekniska rapporter och juridiska handlingar.
                Vi anser att sådan information bör hanteras noggrant och tydligt.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Därför arbetar vi, där det är möjligt, med en säker digital
                miljö där viktiga dokument, rapporter, ansvarsområden och nästa
                steg samlas centralt.
              </p>

              <div className="mt-8 grid gap-4">
                {secureItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/70 p-5 leading-relaxed text-stone-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="scroll-mt-24 px-8 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Från kostnadsfri rapport till kontrollerat köp
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              En tydlig väg från orientering till trygghet.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Area Match Report är startpunkten. Därifrån bygger vi steg för
              steg: personlig intake, Buyer Discovery Trip, fokuserad
              bostadssökning, Purchase Safety Report och en säker dokumentmiljö.
              Köpet blir inte snabbare eller mer impulsivt, utan lugnare, bättre
              kontrollerat och bättre stöttat.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {journeySteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[32px] bg-white p-8 shadow-sm md:p-9"
              >
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {step.number}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {step.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONAL MATCHING DURING THE TRIP */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[420px]">
              <img
                src="/images/discover-card.png"
                alt="Personlig Buyer Discovery Trip på Costa Blanca Nord"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="p-10 md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Personlig Buyer Discovery Trip
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Inte bara besöka områden, utan förstå riskerna och träffa rätt personer.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Under resan upplever du hur vardagen i de utvalda områdena
                faktiskt känns. Du besöker bostadsområden, service och platser
                som matchar din personliga profil, i stället för att följa en
                generell standardrutt.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Utifrån din rapport och intake kan vi förbereda relevanta
                introduktioner. Det kan handla om betrodda lokala specialister,
                internationella boende, entreprenörer, framtida köpare eller
                personer med gemensamma intressen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Det ger dig en bättre bild inte bara av bostadsmarknaden, utan
                också av de sociala, praktiska och trygghetsmässiga aspekterna
                kring din möjliga framtida boendemiljö.
              </p>

              <a
                href="/sv/services/discovery-trips"
                className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Upptäck Buyer Discovery Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Mer än att hitta en bostad
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Rätt område och ett kontrollerat köp avgör om Spanien verkligen
              kommer att kännas som hemma.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              En bostad kan se perfekt ut på bilder, samtidigt som läget eller
              den juridiska och tekniska verkligheten i slutändan inte motsvarar
              dina förväntningar. Kanske ligger service för långt bort, området
              är för tyst på vintern, det finns oväntade ägarföreningsregler
              eller en del av bostaden är inte korrekt registrerad.
            </p>

            <p className="mt-6">
              Därför tittar vi inte bara på själva bostaden. Vi bedömer också
              omgivningen, tillgängligheten, livsstilen, lokal service, sociala
              möjligheter och den praktiska lämpligheten för de kommande åren.
              Och när en specifik bostad blir seriös går vi vidare till
              oberoende kontroller.
            </p>

            <p className="mt-6">
              Vår vägledning hjälper dig först att få klarhet i rätt plats och
              livsstil, och därefter närma dig köpet med mer lugn, struktur och
              trygghet.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 text-center shadow-sm md:p-14 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Börja kostnadsfritt och utan förpliktelser
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Upptäck vilken plats, vilket bostadsområde och vilken köprutt som
            bäst passar din framtid i Spanien.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
            Fyll i frågeformuläret och få din personliga Area Match &amp;
            Lifestyle Intelligence Report. Därefter kan du använda ett
            kostnadsfritt intake-samtal där vi går igenom resultaten och
            tillsammans tittar på nästa steg som passar dig.
          </p>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-stone-500">
            När du senare seriöst överväger en bostad kan Purchase Safety Report
            hjälpa dig att bättre förstå juridiska, tekniska och praktiska risker
            innan köp.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/sv/relocation-assessment"
              className="inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#15202d]"
            >
              Be om din kostnadsfria Area Match Report
            </a>

            <a
              href="/sv/services/purchase-safety-report"
              className="inline-block rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Läs mer om att köpa tryggt
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
