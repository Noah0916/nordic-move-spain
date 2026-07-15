export const metadata = {
  title: "Ärlig guide till att köpa bostad på Costa Blanca Nord",
  description:
    "En ärlig guide för svenska, nederländska, tyska och schweiziska köpare som överväger att köpa bostad på Costa Blanca Nord. Läs mer om dolda kostnader, uthyrning, buller, elmaster, regler i ägarföreningen, juridiska kontroller och praktiska risker före köp.",
};

export default function HonestGuideBuyingPropertyCostaBlancaNorthPage() {
  const realLifeChecks = [
    {
      title: "Elmaster och luftledningar",
      text:
        "En bostad kan se fantastisk ut på bilder, men en närliggande elmast, luftledning eller transformator kan påverka utsikten, känslan i bostaden och framtida säljbarhet. Se alltid bostaden från flera vinklar och kontrollera hela omgivningen, inte bara utsikten från terrassen.",
    },
    {
      title: "Trafikbuller och dold belastning",
      text:
        "Vissa bostäder känns lugna under en visning, men ligger nära en väg som blir betydligt mer trafikerad under rusningstid, sommarmånaderna eller helger. Besök bostaden vid olika tider på dagen innan du fattar ett slutligt beslut.",
    },
    {
      title: "Sommartryck och turiststörningar",
      text:
        "En lugn gata i mars kan kännas helt annorlunda i augusti. I vissa kustområden kan semesteruthyrning, sena gäster, strandtrafik och säsongsöppna barer förändra atmosfären kraftigt.",
    },
    {
      title: "Branta tillfartsvägar och vardagsanvändning",
      text:
        "Många villor på Costa Blanca Nord har fantastisk utsikt eftersom de är byggda på sluttningar. Det kan också innebära branta vägar, många trappor, svårare parkering, högre underhållskostnader och större beroende av bil.",
    },
    {
      title: "Urbanisation och regler i ägarföreningen",
      text:
        "Om bostaden ingår i en urbanisation eller ett lägenhetskomplex kan reglerna påverka uthyrning, renoveringar, husdjur, pooler, ljud, parkering, ändringar av fasaden och kostnader. Kontrollera alltid stadgarna och de senaste mötesprotokollen från ägarföreningen.",
    },
    {
      title: "Förväntningar på uthyrning",
      text:
        "Många köpare får höra att en bostad kan ge uthyrningsintäkter. Det kan stämma, men det verkliga nettoresultatet beror på tillstånd, skatter, mäklaravgifter, städning, underhåll, försäkringar, regler i ägarföreningen, säsongsvariationer och beläggningsgrad.",
    },
  ];

  const hiddenCosts = [
    {
      title: "Köpskatt och notariekostnader",
      text:
        "Köpkostnaderna består av mer än bara utgångspriset. Beroende på om du köper en befintlig bostad eller nyproduktion kan du behöva betala överlåtelseskatt eller moms, notariekostnader, fastighetsregisterkostnader, juridiska kostnader, bolånekostnader, bankavgifter och värderingskostnader.",
    },
    {
      title: "Juridiska kostnader och granskning",
      text:
        "En bra oberoende advokat är inte en onödig lyx. Advokaten bör bland annat kontrollera ägandet, skulder, tillstånd, stadsplanemässig status, obetalda avgifter till ägarföreningen, uthyrningsbegränsningar och överensstämmelse med officiella register.",
    },
    {
      title: "Avgifter till ägarföreningen",
      text:
        "Lägenheter och många bostäder inom urbanisationer har månads- eller kvartalsavgifter. De används till exempel för pooler, trädgårdar, hissar, säkerhet, belysning och gemensamt underhåll. Avgifterna kan öka när större arbeten behövs.",
    },
    {
      title: "IBI och kommunala skatter",
      text:
        "Ägare betalar normalt årlig kommunal fastighetsskatt. Nivån beror på kommunen, taxeringsvärdet och bostadstypen. Be alltid om det senaste IBI-betalningsbeviset före köp.",
    },
    {
      title: "Försäkringar",
      text:
        "Byggnadsförsäkring, hemförsäkring, ansvarsförsäkring och uthyrningsförsäkring kan alla vara relevanta. Om du hyr ut bostaden räcker en standardförsäkring för privat bruk kanske inte.",
    },
    {
      title: "Underhåll och reparationer",
      text:
        "Pooler, trädgårdar, luftkonditionering, fuktproblem, terrasser, tak, utomhusmålning, apparater och säkerhetssystem kräver underhåll. Äldre villor kan ha mycket karaktär, men innebär ofta högre underhållskostnader.",
    },
    {
      title: "Nyttigheter och fasta kostnader",
      text:
        "Kostnader för el, vatten, internet, larmsystem, sophämtning, poolunderhåll och trädgårdsskötsel kan fortsätta även när du inte använder bostaden.",
    },
    {
      title: "Förvaltning av bostaden",
      text:
        "Om du inte bor i närheten kan du behöva någon som hanterar nycklar, kontrollerar bostaden, tar emot gäster, ordnar reparationer, kontrollerar stormskador, vädrar bostaden och löser problem medan du är utomlands.",
    },
  ];

  const rentalCosts = [
    "Tillstånd eller registrering för turistuthyrning",
    "Möjligt godkännande eller begränsningar från ägarföreningen",
    "Provision till uthyrningsmäklare eller uthyrningsplattform",
    "Städ- och tvättkostnader efter varje vistelse",
    "Reparationer till följd av gästanvändning",
    "Högre el- och vattenförbrukning",
    "Försäkring som är anpassad för uthyrning",
    "Deklaration av inkomstskatt i Spanien",
    "Skatteförpliktelser för icke-residenta ägare",
    "Tomma veckor utanför högsäsong",
    "Byte av möbler, sängkläder och utrustning",
    "Lokala regler som kan förändras över tid",
  ];

  const legalChecks = [
    {
      title: "Nota Simple från fastighetsregistret",
      text:
        "Detta dokument ska bekräfta ägande, registrerade belastningar, bolån och annan viktig information från fastighetsregistret. Låt alltid en oberoende advokat granska det före underskrift eller betalning.",
    },
    {
      title: "Kadastral information",
      text:
        "Det spanska kadastern innehåller fysisk och skattemässig information om bostaden. Din advokat bör jämföra kadastral information med fastighetsregistret och med den faktiska situationen på plats.",
    },
    {
      title: "Byggnationens legalitet",
      text:
        "Tillbyggnader, pooler, gästhus, täckta terrasser och garage måste kontrolleras. En bostad kan se helt färdig ut, medan vissa delar ännu inte är juridiskt korrekt registrerade.",
    },
    {
      title: "Skulder till ägarföreningen",
      text:
        "Vid lägenheter och urbanisationer bör du be om bekräftelse på att säljaren har betalat alla avgifter till ägarföreningen. Obetalda skulder kan bli ett allvarligt problem efter köpet.",
    },
    {
      title: "Tillstånd för uthyrning",
      text:
        "Utgå aldrig från att du får hyra ut en bostad bara för att liknande bostäder i området finns online. Kontrollera regionala regler, kommunala regler, turistregistrering, stadgar från ägarföreningen och senaste lagändringar.",
    },
    {
      title: "Energi-, vatten- och nyttighetsavtal",
      text:
        "Kontrollera att bostaden har normala och lagliga anslutningar och om några anpassningar krävs för bekvämt bruk, uthyrning eller permanent boende.",
    },
  ];

  const areaWarnings = [
    {
      area: "Moraira",
      text:
        "Moraira kan vara mycket lämpligt för lugnt villaboende. Kontrollera ändå tillgänglighet på sluttningar, bilberoende, villaunderhåll, parkeringspress på sommaren och om det finns tillräckligt med aktivitet utanför högsäsong.",
    },
    {
      area: "Jávea",
      text:
        "Jávea erbjuder mer liv året runt, men upplevelsen skiljer sig starkt mellan Arenal, hamnen, gamla stan, Montgó och villaområdena. Kontrollera trafik, buller, turisttryck och om det specifika området passar dig.",
    },
    {
      area: "Altea",
      text:
        "Altea är stämningsfullt och vackert, men tillgänglighet i gamla stan, parkering, trappor, höjdskillnader, renoveringsbegränsningar och turisttryck bör kontrolleras noggrant.",
    },
    {
      area: "Benissa",
      text:
        "Benissa kan erbjuda mycket utrymme och integritet, men vissa bostäder ligger mer lantligt och avskilt. Kontrollera tillfartsvägar, service, avstånd till butiker, underhåll, nyttigheter och om miljön passar ditt vardagsliv.",
    },
    {
      area: "Calpe",
      text:
        "Calpe kan vara praktiskt för lägenheter och strandnära boende, men vissa områden är livligare och mer säsongsbetonade. Kontrollera byggkvalitet, regler i ägarföreningen, turisttryck, hissar, parkering och buller.",
    },
    {
      area: "Dénia",
      text:
        "Dénia erbjuder bra service, restauranger och vardagsliv året runt. Jämför ändå de olika strandzonerna, centrum, trafik, parkering, byggnadernas ålder och säsongsskillnader.",
    },
  ];

  const questions = [
    "Är bostaden i sin nuvarande form helt laglig, inklusive tillbyggnader, pool, terrasser och sidobyggnader?",
    "Stämmer bostaden överens med uppgifterna i fastighetsregistret och kadastern?",
    "Finns det elmaster, luftledningar, trafikerade vägar, barer, byggtomter eller kommersiella områden i närheten?",
    "Har du besökt bostaden på kvällen, tidigt på morgonen och under helgen?",
    "Känns området bra även utanför sommarsäsongen?",
    "Finns det regler i ägarföreningen om semesteruthyrning, husdjur, ljud, renoveringar eller yttre ändringar?",
    "Är turistuthyrning tillåten enligt regionala regler, kommunala regler och ägarföreningen?",
    "Vilka är de verkliga årliga kostnaderna, inklusive skatter, försäkringar, nyttigheter, underhåll och förvaltning?",
    "Vad blir faktiskt kvar vid uthyrning efter skatter, provision, städning, reparationer, tomma veckor och slitage?",
    "Kommer bostaden att förbli praktisk när du blir äldre, mindre rörlig eller bor ensam?",
    "Hur långt är det till läkare, apotek, stormarknader, banker, restauranger och daglig service?",
    "Är bostaden lätt att sälja vidare till nästa internationella köpare?",
  ];

  const officialSources = [
    {
      label:
        "BOE / DOGV — Decreto-ley 9/2024 om turistbostäder i Valenciaregionen",
      href: "https://www.boe.es/buscar/doc.php?id=DOGV-r-2024-90168",
    },
    {
      label:
        "Turisme Comunitat Valenciana — uppdatering av reglerna för turistbostäder",
      href: "https://www.turisme.gva.es/opencms/opencms/turisme/es/contents/home/noticia/noticia_1725542158000.html",
    },
    {
      label:
        "Spanska bostadsministeriet — godkännande från ägarföreningen för nya turistlägenheter",
      href: "https://www.mivau.gob.es/el-ministerio/sala-de-prensa/noticias/mar-01042025-1647",
    },
    {
      label:
        "Spanska skatteverket — inkomstskatt för icke-residenta vid uthyrning av turistlägenheter",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/vivienda-otros-inmuebles/tributacion-arrendador-viviendas-otros-inmuebles/tributacion-alquiler-apartamentos-turisticos/impuesto-sobre-renta-no-residentes.html",
    },
    {
      label:
        "Spanska skatteverket — moms vid turistuthyrning med hotellliknande tjänster",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/iva/iva-operaciones-inmobiliarias/alquilo-apartamento-turistico-tengo-que-iva.html",
    },
    {
      label:
        "Spanska skatteverket — moms eller överlåtelseskatt vid bostadsköp",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
    },
    {
      label:
        "Spanska fastighetsregistret — information för internationella bostadsköpare",
      href: "https://sede.registradores.org/contenido/buyingahouse/",
    },
    {
      label: "Spanska kadastern — officiell kadastral information",
      href: "https://www.catastro.hacienda.gob.es/ayuda/english_ovc.htm",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Ärlig guide till att köpa bostad på Costa Blanca Nord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ärlig köpguide
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Den ärliga guiden till att köpa bostad på Costa Blanca Nord.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              Kostnader, uthyrning, buller, elmaster, regler i ägarföreningen
              och praktiska kontroller som svenska, nederländska, tyska och
              schweiziska köpare bör förstå innan de köper bostad i Spanien.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/sv/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Be om din personliga Area Match
              </a>

              <a
                href="/sv/services/discovery-trips"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Upptäck Buyer Discovery Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTIE */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Köp med öppna ögon
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Att köpa bostad i Spanien kan vara ett fantastiskt beslut. Men
                bara när du först förstår den praktiska verkligheten.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Många svenska, nederländska, tyska och schweiziska köpare blir
                av goda skäl förälskade i Costa Blanca Nord: klimatet, havet,
                restaurangerna, den avslappnade livsstilen, den internationella
                gemenskapen och möjligheten att tillbringa mer tid utomhus.
              </p>

              <p className="mt-6">
                Ett bra köp handlar dock inte bara om havsutsikt, pool eller en
                vacker terrass. Den verkliga kvaliteten i en bostad ligger ofta i
                detaljer som inte märks vid första visningen: elmaster,
                trafikbuller, regler i ägarföreningen, uthyrningsbegränsningar,
                årliga kostnader, underhåll, tillfartsvägar, juridisk status och
                känslan utanför högsäsong.
              </p>

              <p className="mt-6">
                Den här guiden är inte till för att skrämma köpare. Målet är att
                hjälpa dig att ställa bättre frågor innan du köper: färre
                överraskningar, bättre beslut och en bostad som fortfarande känns
                rätt när den första känslan från visningen har lagt sig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KORT ANTWOORD */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Kort svar
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            De största riskerna är oftast inte dramatiska. De är praktiska,
            juridiska och ekonomiska detaljer som inte kontrollerats tillräckligt
            tidigt.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {realLifeChecks.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-[#f6f1ea] p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
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

      {/* MEER DAN ALLEEN DE FOTO'S */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Se längre än bilderna
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              En bostadsannons visar bostaden. Inte vardagslivet runt bostaden.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Bostadsannonser online är skapade för att väcka intresse. De visar
              poolen, terrassen, det renoverade köket, havsutsikten och de bästa
              vinklarna av bostaden. Det är normalt. Men de visar inte alltid hur
              det faktiskt är att bo där.
            </p>

            <p className="mt-6">
              Titta därför längre än själva bostaden. Vad finns bakom huset?
              Finns en byggtomt bredvid? Står det elmaster i närheten? Är vägen
              verkligen lugn eller bara under visningen? Finns barer,
              semesterlägenheter eller evenemangslokaler i området? Ligger
              bostaden i ett lugnt bostadsområde eller förändras miljön helt på
              sommaren?
            </p>

            <p className="mt-6">
              Detta är särskilt viktigt för äldre köpare som söker lugn,
              förutsägbarhet och komfort. En vacker bostad kan ändå skapa mycket
              stress om tillgängligheten är svår, underhållet högt, bullret
              säsongsbundet eller grundläggande service ligger för långt bort.
            </p>
          </div>
        </div>
      </section>

      {/* VERBORGEN KOSTEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Verkliga kostnader
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Dolda kostnader som köpare ofta underskattar.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Köpeskillingen är bara början. Före köp behöver du förstå både de
            totala köpkostnaderna och de årliga ägandekostnaderna. Vissa
            kostnader är förutsägbara. Andra beror på bostadstyp, läge, ålder,
            ägarförening, bolånestruktur och om du vill hyra ut.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {hiddenCosts.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white/70 p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
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

      {/* VERHUUR */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Hyra ut din bostad
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Får du hyra ut din spanska bostad? Ibland ja, men utgå aldrig från
            det automatiskt.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-white/75">
              <p>
                Många köpare frågar: “Kan vi hyra ut bostaden när vi inte
                använder den själva?” Det ärliga svaret är: kanske, men det beror
                på bostaden, regionen, kommunen, ägarföreningens regler,
                byggnadstypen och den exakta uthyrningsformen.
              </p>

              <p className="mt-6">
                I Valenciaregionen är turistuthyrning reglerad och reglerna har
                ändrats de senaste åren. Köpare måste kontrollera om
                turistregistrering är möjlig, om bostaden uppfyller villkoren
                och om det finns lokala begränsningar eller begränsningar från
                ägarföreningen.
              </p>

              <p className="mt-6">
                Vid lägenheter och bostäder i byggnader med en Comunidad de
                Propietarios är ägarföreningens regler särskilt viktiga. För ny
                turistuthyrning kan uttryckligt godkännande från ägarföreningen
                krävas. Befintliga situationer och övergångsregler bör
                kontrolleras av en advokat.
              </p>

              <p className="mt-6">
                Det största misstaget är att köpa en bostad baserat på förväntade
                uthyrningsintäkter utan att först fastställa om uthyrning är
                juridiskt, praktiskt och ekonomiskt realistisk.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h3 className="font-serif text-3xl text-white">
                Uthyrningskostnader och kontroller
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-white/75">
                {rentalCosts.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NETTO VERHUUROPBRENGST */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Verkligheten bakom nettointäkter
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Vad blir faktiskt kvar efter att du hyr ut din spanska bostad?
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Bruttointäkter från uthyrning kan låta attraktiva. Det viktigaste
              är dock inte veckohyran, utan vad som återstår efter skatter,
              provision, städning, reparationer, nyttigheter, försäkringar,
              underhåll, tomma veckor och förvaltning.
            </p>

            <p className="mt-6">
              En bostad kan hyras ut bra några veckor på sommaren samtidigt som
              ägaren betalar ägarföreningsavgifter, IBI, försäkringar,
              reparationer, plattformsprovision, förvaltning, städning,
              tvättkostnader, nyckelhantering, luftkonditionering,
              poolunderhåll och inkomstskatt under hela året.
            </p>

            <p className="mt-6">
              Icke-residenta ägare behöver också ta hänsyn till spanska
              skatteförpliktelser. Spanska skatteverket ger särskild information
              om inkomstskatt för icke-residenta, inklusive Modelo 210 och olika
              skattesatser beroende på vilket land ägaren bor i. Om hotellliknande
              tjänster erbjuds kan även moms bli relevant.
            </p>

            <p className="mt-6">
              Behandla därför förväntade uthyrningsintäkter som en seriös
              kalkyl, inte som ett löfte. Be om realistiska årssiffror före köp
              och låt dem granskas av en oberoende skatterådgivare eller juridisk
              specialist.
            </p>
          </div>
        </div>
      </section>

      {/* VILLA VS APPARTEMENT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Bostadstyp
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Villor och lägenheter har olika risker.
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-[#f6f1ea] p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Risker med villa
              </h3>

              <p className="mt-6 leading-relaxed text-stone-600">
                Villor erbjuder integritet, utrymme och självständighet. I
                gengäld får du mer ansvar: poolunderhåll, trädgårdsskötsel,
                säkerhet, takreparationer, fuktkontroller, utomhusmålning,
                tillfartsvägar, stödmurar, dränering och högre el- och
                vattenförbrukning.
              </p>

              <p className="mt-6 leading-relaxed text-stone-600">
                Kontrollera också att alla delar av villan är lagliga, att
                tillbyggnader är korrekt registrerade och att tomten, poolen,
                gästhuset och terrasserna överensstämmer med officiella uppgifter.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Risker med lägenhet
              </h3>

              <p className="mt-6 leading-relaxed text-stone-600">
                Lägenheter kan vara enklare att underhålla och praktiska när du
                lämnar bostaden obevakad under perioder. Samtidigt omfattas du
                av regler i ägarföreningen, gemensamma kostnader, möjliga
                uthyrningsbegränsningar, ljud från grannar, hissar, gemensamma
                pooler och beslut från andra ägare.
              </p>

              <p className="mt-6 leading-relaxed text-stone-600">
                Kontrollera alltid stadgar, senaste mötesprotokoll,
                årsredovisningar, planerade arbeten, skulder, hissens skick,
                parkeringsrättigheter och möjligheter till semesteruthyrning före
                köp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AANDACHTSPUNTEN PER PLAATS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Praktisk kontroll per område
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Vad bör du kontrollera i varje ort på Costa Blanca Nord?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Det finns ingen perfekt plats. Varje område har styrkor och
              praktiska nackdelar. Målet är inte att undvika varje nackdel, utan
              att välja en miljö vars nackdelar är acceptabla för ditt sätt att
              leva.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {areaWarnings.map((item) => (
              <div key={item.area} className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-4xl text-[#1e2a3a]">
                  {item.area}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JURIDISCHE CONTROLES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Juridiska kontroller
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Dokument och kontroller du inte får hoppa över.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Spanien har en tydlig juridisk köpprocess, men det betyder inte att
            varje bostad automatiskt är juridiskt korrekt, skuldfri eller
            lämplig för dina planer. Oberoende juridisk kontroll är nödvändig
            innan du betalar handpenning eller skriver under ett bindande avtal.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {legalChecks.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white/70 p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
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

      {/* WAARSCHUWING TOERISTISCHE VERHUUR */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Viktig varning om uthyrning
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Köp inte först för att sedan kontrollera om uthyrning är tillåten.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Reglerna för turistuthyrning blir striktare i många delar av
              Spanien. I Valenciaregionen regleras turistuthyrning på regional
              nivå. Ändringarna från 2024 har infört striktare kontroller för
              registrering och dokumentation.
            </p>

            <p className="mt-6">
              I byggnader med ägarförening kan Comunidad de Propietarios också
              vara avgörande. Sedan april 2025 har ägarföreningar genom ändrade
              spanska regler fått en starkare roll vid godkännande av nya
              turistlägenheter.
            </p>

            <p className="mt-6">
              Lita därför inte bara på vad en mäklare, granne eller tidigare
              ägare säger. Låt din advokat kontrollera den exakta juridiska
              situationen före köp, särskilt om uthyrningsintäkter ingår i din
              ekonomiska plan.
            </p>
          </div>
        </div>
      </section>

      {/* VRAGENLIJST */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Checklista för köpare
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Frågor du bör ställa innan du lägger ett bud.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {questions.map((question) => (
              <div key={question} className="rounded-2xl bg-[#f6f1ea] p-6">
                <p className="leading-relaxed text-stone-700">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOTADVIES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Slutråd
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Köp livet, inte bara huset.
          </h2>

          <p className="mt-8 max-w-5xl text-xl leading-relaxed text-white/85">
            En vacker bostad är bara ett bra köp när området, den juridiska
            situationen, kostnaderna, reglerna i ägarföreningen,
            uthyrningsmöjligheterna och vardagslivet passar dina verkliga behov.
          </p>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-white/75">
            För många svenska, nederländska, tyska och schweiziska köpare är det
            klokt att inte börja direkt med bostadsvisningar. Undersök först
            vilka områden som passar din livsstil, vad du bör undvika och vad
            som måste kontrolleras innan du blir förälskad i en bostad.
          </p>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-white/75">
            Därför börjar Nordic Move Spain med Area Match och insikt i lokal
            livsstil. En bra bostadssökning börjar med rätt frågor.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/sv/services/area-match"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Be om din personliga Area Match
            </a>

            <a
              href="/sv/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Boka ett introduktionssamtal
            </a>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="px-8 pb-20">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Viktig information
          </p>

          <p className="mt-5 leading-relaxed text-stone-600">
            Den här artikeln innehåller allmän information för internationella
            köpare och är inte juridisk, skattemässig eller finansiell
            rådgivning. Uthyrningsregler, skatteregler, regler i
            ägarföreningar och lokala bestämmelser kan förändras. Anlita alltid
            en oberoende advokat och kvalificerad skatterådgivare innan du köper,
            hyr ut eller skriver under avtal.
          </p>
        </div>
      </section>

      {/* OFFICIËLE BRONNEN */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Använda officiella källor
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Där det är möjligt har officiella spanska, valencianska och
            institutionella källor använts för den här guiden. Köpare bör alltid
            låta den aktuella situationen kontrolleras av en oberoende advokat,
            skatterådgivare och relevant myndighet innan de fattar ett
            köpbeslut.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {officialSources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#f6f1ea] p-5 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#efe6d9]"
              >
                {source.label} →
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
