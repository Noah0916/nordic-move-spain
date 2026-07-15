export const metadata = {
  title: "Var köpa bostad på Costa Blanca Nord | Bästa områdena",
  description:
    "Upptäck var du kan köpa bostad på Costa Blanca Nord. Jämför Moraira, Jávea, Altea, Benissa, Calpe och Dénia utifrån livsstil, bostadstyp, familjer, pensionering och internationella köpare.",
};

export default function WhereToBuyCostaBlancaNorthSvPage() {
  const areas = [
    {
      name: "Moraira",
      href: "/sv/regions/moraira",
      bestFor:
        "Lugnt kustliv, villor, integritet och en exklusiv internationell atmosfär",
      summary:
        "Moraira passar ofta köpare som söker en elegant och lugn kustlivsstil med villor, vikar, restauranger och en mer bostadsorienterad känsla än i större badorter.",
    },
    {
      name: "Jávea",
      href: "/sv/regions/javea",
      bestFor:
        "Familjer, aktiva köpare, stränder, sport och internationellt liv året runt",
      summary:
        "Jávea passar köpare som vill jämföra mer energi, en större internationell gemenskap, stränder, restauranger, sport, skolor i närheten och flera olika livsstilszoner.",
    },
    {
      name: "Altea",
      href: "/sv/regions/altea",
      bestFor:
        "Konstnärlig charm, havsutsikt, kultur, elegans och ett långsammare medelhavstempo",
      summary:
        "Altea är attraktivt för köpare som uppskattar skönhet, atmosfären i gamla stan, restauranger, kultur, havsutsikt och en mer förfinad medelhavsmiljö.",
    },
    {
      name: "Benissa",
      href: "/sv/regions/benissa",
      bestFor:
        "Utrymme, integritet, lantligt boende, autentiskt Spanien och dolda vikar",
      summary:
        "Benissa passar köpare som söker mer mark, integritet, lantlig charm och tillgång till kustnära vikar utan att bo i en livlig badort.",
    },
    {
      name: "Calpe",
      href: "/sv/regions/calpe",
      bestFor:
        "Lägenheter, boende direkt vid stranden, nyproduktion, marinaliv och bekvämlighet",
      summary:
        "Calpe är ett starkt alternativ för köpare som söker stränder, havsutsikt, restauranger, lägenheter, nyare byggnader och en mer aktiv kustkänsla.",
    },
    {
      name: "Dénia",
      href: "/sv/regions/denia",
      bestFor:
        "Stadsliv året runt, gastronomi, hamn, service, stränder och vardagsbekvämlighet",
      summary:
        "Dénia passar köpare som söker en verklig och livlig kuststad med restauranger, lokal service, stränder, hamnliv, kultur och mer aktivitet året runt.",
    },
  ];

  const buyerTypes = [
    {
      title: "Bästa valet för familjer",
      text:
        "Jávea och Dénia är ofta praktiska utgångspunkter för familjer eftersom de erbjuder mer service, aktiviteter och skolmöjligheter i närheten, även utanför högsäsong. Moraira och Benissa kan också passa familjer när lugn, utrymme och villaliv är viktigare.",
    },
    {
      title: "Bästa valet för pensionering",
      text:
        "Moraira, Altea och Dénia är ofta attraktiva för pensionärer, men av olika skäl. Moraira känns lugnt och exklusivt, Altea erbjuder skönhet och kultur, och Dénia ger mer vardagsbekvämlighet och stadsliv året runt.",
    },
    {
      title: "Bästa valet för lägenheter och nyproduktion",
      text:
        "Calpe är oftast ett av de tydligaste alternativen för köpare som söker lägenheter, boende direkt vid stranden, havsutsikt och nyare projekt. Dénia kan också erbjuda praktiska lägenhetsalternativ nära service och stränder.",
    },
    {
      title: "Bästa valet för villor och integritet",
      text:
        "Moraira, Benissa och delar av Jávea är ofta starkare för köpare som söker fristående villor, integritet, utsikt och bostadsorienterade områden. Benissa kan ge en mer lantlig och rymlig känsla.",
    },
  ];

  const officialSources = [
    {
      label: "Turism Teulada-Moraira",
      href: "https://www.turismoteuladamoraira.com/ttm/Web_php/index.php?contenido=showPois&id=1&idNivel=544&lang=4",
    },
    {
      label: "Xàbia/Jávea - Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/xabia-javea",
    },
    {
      label: "Altea - Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/altea",
    },
    {
      label: "Ekologisk kustled Benissa - Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/benissa/natural-landscapes/paseo-ecologico-litoral-de-benissa",
    },
    {
      label: "Calpe Peñón de Ifach - Tourist Info Calpe",
      href: "https://www.calpe.es/en/discover-calpe/natural-areas/pe%C3%B1on-de-ifach",
    },
    {
      label: "Dénia - Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/denia",
    },
    {
      label: "Dénia - UNESCO Creative Cities Network",
      href: "https://www.unesco.org/en/creative-cities/denia",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Var köpa bostad på Costa Blanca Nord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Nord guide
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Var köpa bostad på Costa Blanca Nord.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              En utförlig guide för internationella köpare som jämför Moraira,
              Jávea, Altea, Benissa, Calpe och Dénia innan de bestämmer var de
              vill köpa bostad i Spanien.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/sv/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Be om din Area Match
              </a>

              <a
                href="/sv/regions"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Jämför regioner
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Först området, sedan bostaden
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Det viktigaste beslutet är inte alltid bostaden. Det är området
                runt den.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Många internationella köpare börjar sin sökning med villor,
                lägenheter och havsutsikt. Det verkar logiskt, men kan leda till
                fel beslut. En vacker bostad på fel plats kan snabbt bli
                frustrerande när livsstil, service, skolor, restider eller
                gemenskap inte passar vardagen.
              </p>

              <p className="mt-6">
                Costa Blanca Nord är inte en enda livsstil. Moraira, Jávea,
                Altea, Benissa, Calpe och Dénia lockar olika typer av köpare.
                Vissa områden känns lugna och bostadsorienterade. Andra är mer
                aktiva, urbana, sociala, konstnärliga, lantliga eller mer
                anpassade för familjer.
              </p>

              <p className="mt-6">
                Den här guiden hjälper dig att jämföra de viktigaste områdena
                innan du köper bostad på Costa Blanca Nord, så att du bättre
                förstår vilken plats som kan passa dina mål, din budget, din
                familjesituation och dina långsiktiga planer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Kort svar
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            De bästa platserna att köpa bostad på Costa Blanca Nord.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <a
                key={area.name}
                href={area.href}
                className="rounded-[32px] bg-[#f6f1ea] p-8 transition hover:-translate-y-1 hover:bg-[#efe6d9]"
              >
                <h3 className="font-serif text-4xl text-[#1e2a3a]">
                  {area.name}
                </h3>

                <p className="mt-5 text-sm uppercase tracking-[0.22em] text-[#c8a063]">
                  {area.bestFor}
                </p>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {area.summary}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AREA MATTERS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Köpa bostad i Spanien
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Varför rätt plats är viktigare än den första vackra bostaden.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              När köpare söker online ser många bostäder attraktiva ut: villor
              med havsutsikt, moderna lägenheter, renoverade byhus och
              nyproduktion. Onlineannonser visar däremot sällan hur det faktiskt
              känns att bo på en plats.
            </p>

            <p className="mt-6">
              De verkliga frågorna är mer praktiska. Behöver du bil varje dag?
              Är orten aktiv på vintern? Finns restauranger, läkare, skolor och
              service nära? Känns området internationellt eller mer lokalt? Är
              den bostadstyp du vill ha vanlig där? Passar området för permanent
              boende, semester, pensionering, familjeliv eller investering?
            </p>

            <p className="mt-6">
              Därför rekommenderar vi att först välja område och därefter
              förfina bostadssökningen. När rätt miljö är tydlig blir sökningen
              mer fokuserad, realistisk och mycket mindre stressande.
            </p>
          </div>
        </div>
      </section>

      {/* MORAIRA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            01 · Moraira
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Moraira: lugnt, elegant och fokuserat på villaboende.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Moraira är ett av de mest eftertraktade områdena för köpare som
                söker en lugnare och mer exklusiv kustlivsstil. Det tillhör
                Teulada-Moraira, där det historiska Teulada längre inåt landet
                och kustområdet Moraira binder samman lokal historia och
                medelhavsboende.
              </p>

              <p className="mt-6">
                Den officiella turistinformationen från Teulada-Moraira lyfter
                fram ungefär 8 kilometer kustlinje, med stränder och vikar som
                är kända för vattenkvalitet och en vacker naturlig miljö. För
                bostadsköpare förklarar denna kust varför Moraira fortsätter att
                vara populärt bland internationella köpare som söker villor,
                integritet och en lugn bostadsbas.
              </p>

              <p className="mt-6">
                Moraira är vanligtvis inte det bästa valet för köpare som söker
                stadskänsla, nattliv eller en stor lägenhetsmarknad. Det passar
                bättre för köpare som uppskattar lugn, restauranger, bostadsområden
                med havsutsikt, villaliv och en etablerad internationell
                gemenskap.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Moraira passar ofta bäst för:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Villaköpare som vill ha integritet och exklusiv känsla</li>
                <li>• Pensionärer som söker lugnt kustliv</li>
                <li>• Köpare av fritidsbostad som vill ha en välskött miljö</li>
                <li>• Köpare som föredrar låg bebyggelse framför stadstäthet</li>
                <li>• Personer som vill ha restauranger och vikar utan storstadskänsla</li>
              </ul>

              <a
                href="/sv/regions/moraira"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Upptäck Moraira →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* JAVEA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            02 · Jávea
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Jávea: livligt, internationellt och fullt av livsstilsvariation.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-white/75">
              <p>
                Jávea, även kallat Xàbia, är en av de starkaste livsstilsorterna
                på Costa Blanca Nord. Orten erbjuder en blandning av strandliv,
                restauranger, sport, familjeaktiviteter, vikar, internationella
                boende och flera olika bostadszoner.
              </p>

              <p className="mt-6">
                Comunitat Valenciana lyfter fram vikarna i Xàbia/Jávea, bland
                annat Sardinera, Granadella, El Tangó, El Ministro och Ambolo,
                med klart vatten, klippor och stenformationer som gör kusten
                attraktiv för dykning och aktiviteter vid havet.
              </p>

              <p className="mt-6">
                Jávea ligger dessutom nära naturparken Montgó. Spaniens
                officiella turistportal beskriver Montgó som ett kalkstensmassiv
                mellan Dénia och Jávea som når 753 meter över havet. Det ger
                området en stark naturidentitet utöver kustlivet.
              </p>

              <p className="mt-6">
                För köpare är Jávea ofta mer socialt och aktivt än Moraira eller
                Benissa. Det kan passa familjer, aktiva pensionärer, remote
                workers och köpare som söker restauranger, klubbar, stränder och
                en tydlig internationell gemenskap.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h3 className="font-serif text-3xl text-white">
                Jávea passar ofta bäst för:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-white/75">
                <li>• Familjer som vill ha skolor och aktiviteter i närheten</li>
                <li>• Köpare som söker internationell atmosfär året runt</li>
                <li>• Personer som uppskattar stränder, sport och restauranger</li>
                <li>• Remote workers och entreprenörer</li>
                <li>• Köpare som vill jämföra villor, stadsliv och kustområden</li>
              </ul>

              <a
                href="/sv/regions/javea"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Upptäck Jávea →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ALTEA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            03 · Altea
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Altea: konstnärligt, vackert och stillsamt förfinat.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Altea känns annorlunda än många andra orter på Costa Blanca
                Nord. Orten är känd för kultur, utsikter, restauranger,
                vitkalkade gator och en mer konstnärlig medelhavsatmosfär.
              </p>

              <p className="mt-6">
                Comunitat Valenciana beskriver vägen genom Alteas gamla stad mot
                Plaza de la Iglesia och församlingskyrkan Nuestra Señora del
                Consuelo, som är känd för sin karakteristiska blåvita keramiska
                kupol. Denna gamla-stadsidentitet är en av de viktigaste
                anledningarna till att Altea lockar köpare som uppskattar
                skönhet, atmosfär och karaktär.
              </p>

              <p className="mt-6">
                Altea kan vara ett bra val för köpare som söker något mer
                förfinat än en vanlig badort, men mer kultur och visuell
                särprägel än i ett rent bostads- eller villaområde.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Altea passar ofta bäst för:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Köpare som uppskattar kultur, design och atmosfär</li>
                <li>• Personer som söker havsutsikt och charm från gamla stan</li>
                <li>• Pensionärer som vill ha skönhet och restauranger nära</li>
                <li>• Köpare som föredrar elegans framför resortenergi</li>
                <li>• Köpare av fritidsbostad som söker en mer konstnärlig miljö</li>
              </ul>

              <a
                href="/sv/regions/altea"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Upptäck Altea →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BENISSA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            04 · Benissa
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Benissa: autentiskt, rymligt och nära dolda vikar.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-700">
              <p>
                Benissa är ett av de mest intressanta områdena för köpare som
                söker mer utrymme, integritet och autenticitet. Det kombinerar en
                historisk ort inåt landet, lantliga områden, villazoner och en
                vacker kust mellan Moraira och Calpe.
              </p>

              <p className="mt-6">
                Den officiella turistwebbplatsen för Comunitat Valenciana
                beskriver Benissas ekologiska kustled som en rutt längs ortens
                2,5 mil långa kustlinje, förbi klippor och lugna vikar. Även
                Benissas officiella turistwebbplats lyfter fram kusten, vikarna
                och den naturliga miljön.
              </p>

              <p className="mt-6">
                Benissa är oftast inte förstahandsvalet för köpare som vill gå
                från en lägenhet till en livlig strandpromenad. Det är starkare
                för personer som söker integritet, mark, utsikt, landskap,
                autenticitet och god tillgång till omgivande orter.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/70 p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Benissa passar ofta bäst för:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Villaköpare som vill ha utrymme och integritet</li>
                <li>• Personer som föredrar lantlig charm framför resortenergi</li>
                <li>• Köpare som vill ha tillgång till Moraira och Calpe</li>
                <li>• Naturälskare och vandrare</li>
                <li>• Familjer eller pensionärer som söker en lugnare bas</li>
              </ul>

              <a
                href="/sv/regions/benissa"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Upptäck Benissa →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CALPE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            05 · Calpe
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Calpe: bo direkt vid stranden, lägenheter och en mer aktiv känsla.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Calpe är en av de mest kända orterna på Costa Blanca Nord. Den
                är mer urban, mer lägenhetsorienterad och mer aktiv än lugnare
                områden som Benissa eller Moraira.
              </p>

              <p className="mt-6">
                Den officiella turistinformationen för Calpe beskriver Peñón de
                Ifach som en kalkstensklippa på 50 000 m², som reser sig 332
                meter över havet och sträcker sig ungefär en kilometer ut i
                havet. Peñón är ett av Costa Blancas mest kända naturliga
                landmärken och präglar Calpes identitet starkt.
              </p>

              <p className="mt-6">
                Calpe erbjuder dessutom stränder, vikar, restauranger,
                fiskehamn, marinaliv och ett större utbud av lägenheter och
                moderna byggnader. För köpare som söker havsutsikt, strandnära
                läge, bekvämlighet och en enklare lock-up-and-leave-bostad kan
                Calpe passa bra.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Calpe passar ofta bäst för:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Lägenhetsköpare och lock-up-and-leave-ägare</li>
                <li>• Köpare som söker nyproduktion</li>
                <li>• Personer som vill ha stränder, restauranger och bekvämlighet</li>
                <li>• Uthyrningsinriktade köpare som söker kända lägen</li>
                <li>• Köpare som föredrar en mer aktiv kustmiljö</li>
              </ul>

              <a
                href="/sv/regions/calpe"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Upptäck Calpe →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DENIA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            06 · Dénia
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Dénia: stadsliv året runt, gastronomi och vardagsbekvämlighet.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-white/75">
              <p>
                Dénia är ett av de mest kompletta alternativen på Costa Blanca
                Nord för köpare som vill ha en riktig stad, inte bara en
                semesterort. Dénia erbjuder stränder, hamnliv, restauranger,
                service, historiska gator, lokal aktivitet och ett starkare
                tempo året runt.
              </p>

              <p className="mt-6">
                Comunitat Valenciana beskriver Dénia som en UNESCO-stad för
                gastronomi, med ett kök baserat på färsk fisk, lokala
                valencianska produkter och rätter som arròs a banda, gamba roja
                och suquet de peix. Även UNESCO nämner Dénia i sitt Creative
                Cities Network för gastronomi.
              </p>

              <p className="mt-6">
                Dénia är ofta ett starkt alternativ för köpare som söker
                bekvämlighet, restauranger, butiker, tillgång till vård,
                förbindelser och vardagsliv utanför sommarsäsongen. Det kan
                kännas mindre exklusivt än Moraira eller Altea, men är ofta mer
                praktiskt för permanent boende.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h3 className="font-serif text-3xl text-white">
                Dénia passar ofta bäst för:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-white/75">
                <li>• Köpare som vill ha stadsliv året runt</li>
                <li>• Matälskare och personer som uppskattar lokala restauranger</li>
                <li>• Familjer som vill ha service och aktiviteter nära</li>
                <li>• Pensionärer som värdesätter bekvämlighet och promenadavstånd</li>
                <li>• Köpare som vill jämföra centrum och strandområden</li>
              </ul>

              <a
                href="/sv/regions/denia"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Upptäck Dénia →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BUYER TYPES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Välj efter livsstil
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Vilket område på Costa Blanca Nord passar din situation?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Det bästa området beror på hur du vill leva. En familj med
              skolbarn, ett pensionerat par, en remote worker och en köpare av
              fritidsbostad kan alla behöva olika lägen, även med samma budget.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {buyerTypes.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white p-9 shadow-sm">
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

      {/* HOW TO DECIDE */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Hur bestämmer du dig?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Frågor att ställa innan du bestämmer var du ska köpa.
            </h2>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <div className="grid gap-5">
              {[
                "Ska du bo i Spanien året runt, delar av året eller främst under semestrar?",
                "Vill du ha villa, lägenhet, byhus, nyproduktion eller lantlig bostad?",
                "Behöver du skolor, vård, daglig service eller kollektivtrafik i närheten?",
                "Föredrar du en lugn bostadsmiljö eller en mer social och aktiv plats?",
                "Vill du kunna promenera till restauranger och butiker?",
                "Är uthyrningspotential viktigt eller är bostaden främst för privat bruk?",
                "Hur viktigt är havsutsikt, integritet, mark, strandtillgång eller gemenskapsliv?",
                "Vill du lära känna likasinnade internationella köpare före din flytt?",
              ].map((question) => (
                <div key={question} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="leading-relaxed text-stone-700">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vanligt köparmisstag
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Förväxla inte en vacker semesterort med rätt plats att bo på.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-700">
            <p>
              En plats kan vara perfekt för en sommarvecka och ändå inte passa
              för boende året runt. Vissa områden känns levande i augusti men
              är lugna på vintern. Vissa bostäder ser attraktiva ut online men
              ligger för långt från service. Vissa köpare förälskar sig i
              utsikten innan de kontrollerar ägandekostnader, community-regler,
              köravstånd, tillgång, renoveringsbehov eller framtida
              säljbarhet.
            </p>

            <p className="mt-6">
              Därför börjar vårt arbetssätt med Area Match. Vi tittar först på
              din livsstil, jämför sedan områdena och hjälper dig därefter att
              fokusera på den bostadstyp som verkligen stödjer ditt framtida liv
              i Spanien.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Be om Area Match
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Inte säker på var du bör köpa på Costa Blanca Nord?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Vi hjälper internationella köpare att jämföra Moraira, Jávea,
            Altea, Benissa, Calpe och Dénia utifrån livsstil, budget,
            familjesituation, bostadsmål och långsiktiga planer.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
            Be om din Area Match Assessment och upptäck vilka områden som kan
            passa ditt framtida liv i Spanien — och vilka som kanske passar
            mindre bra.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/sv/services/area-match"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Be om Area Match
            </a>

            <a
              href="/sv/services/discovery-trips"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Upptäck Buyer Discovery Trip
            </a>
          </div>
        </div>
      </section>

      {/* OFFICIAL SOURCES */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Använda officiella källor
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Den här guiden bygger där det är möjligt på officiella turistiska
            och institutionella källor. Lokal service, bostadsmarknader och
            regler kan förändras. Köpare bör därför alltid kontrollera praktiska
            detaljer innan de fattar ett köpbeslut.
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
