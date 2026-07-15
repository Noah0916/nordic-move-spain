export const metadata = {
  title: "Bo i Moraira | Köp bostad i Moraira Costa Blanca Nord",
  description:
    "Upptäck om Moraira är rätt område för att köpa bostad på Costa Blanca Nord. En guide för nederländska, tyska, schweiziska och internationella köpare som jämför livsstil, villor, pensionärer, service, stränder, restauranger, aktiviteter, bilberoende och långsiktig lämplighet.",
};

export default function MorairaPage() {
  const buyerProfiles = [
    {
      title: "Pensionärer som söker lugn och kvalitet",
      text:
        "Moraira är ofta attraktivt för pensionärer som vill ha en lugnare kustmiljö, bra restauranger, havsutsikt, integritet och en sofistikerad internationell gemenskap utan tätheten i större orter.",
    },
    {
      title: "Köpare av fritidsbostad",
      text:
        "Området passar bra för köpare som vill ha en välskött medelhavsbas för längre vistelser, familjebesök och en långsammare livsstil med terrasser, stränder, restauranger och uteliv i fokus.",
    },
    {
      title: "Villaköpare",
      text:
        "Moraira är särskilt starkt för fristående villor, sluttande tomter, havsutsikt och bostadsområden där integritet och utrymme är viktigare än urban bekvämlighet.",
    },
    {
      title: "Krävande internationella köpare",
      text:
        "Nederländska, tyska, schweiziska, belgiska, brittiska och skandinaviska köpare väljer ofta Moraira eftersom området känns lugnt, etablerat och mer bostadsorienterat än många större kustdestinationer.",
    },
  ];

  const zones = [
    {
      title: "El Portet",
      text:
        "Ett av Morairas mest eftertraktade områden, känt för sin skyddade vik, lugna atmosfär och prestigefyllda villamiljö. Det kan passa köpare som värdesätter skönhet, exklusivitet och närhet till havet.",
    },
    {
      title: "Pla del Mar",
      text:
        "Ett populärt bostadsområde nära centrum. Det kan passa köpare som vill ha villaliv men föredrar enklare tillgång till restauranger, butiker och marinan.",
    },
    {
      title: "Benimeit",
      text:
        "Ett sluttande bostadsområde som ofta förknippas med utsikt, större villor och lugn. Köpare bör noggrant kontrollera tillfartsvägar, orientering, underhållsbehov och köravstånd.",
    },
    {
      title: "San Jaime",
      text:
        "Ett etablerat bostadsområde mellan Moraira och Benissa/Calpe, ofta attraktivt för köpare som vill ha villor, golf i närheten och bra tillgång till omgivande områden.",
    },
    {
      title: "Moravit och Cap Blanc",
      text:
        "Kustnära bostadsområden med tillgång mot vikar, restauranger och vägen mot Calpe. Dessa områden kan erbjuda en bra balans mellan kustliv och villaboende.",
    },
    {
      title: "Centrum och marinaområdet",
      text:
        "Bättre för köpare som vill ha restauranger, butiker, hamnliv och enklare promenadavstånd. Bostadsutbudet kan vara mer begränsat, men den praktiska bekvämligheten är starkare.",
    },
  ];

  const propertyTypes = [
    {
      title: "Fristående villor",
      text:
        "Det mest typiska valet för internationella köpare i Moraira. Villor kan erbjuda integritet, trädgårdar, pooler och havsutsikt, men de innebär också ansvar för underhåll, säkerhet och förvaltning.",
    },
    {
      title: "Hus på sluttningar med havsutsikt",
      text:
        "Mycket attraktiva, men köpare bör kontrollera vägåtkomst, trappor, orientering, vindutsatthet, renoveringskvalitet och om bostaden förblir praktisk på äldre dagar.",
    },
    {
      title: "Radhus och mindre bostäder",
      text:
        "Ett användbart alternativ för köpare som vill ha mindre underhåll än en stor villa men ändå njuta av en bostadsorienterad livsstil nära Moraira.",
    },
    {
      title: "Lägenheter nära centrum",
      text:
        "Mindre dominerande än i Calpe eller Dénia, men praktiska för köpare som vill ha promenadavstånd, lägre underhåll och enklare lock-up-and-leave-ägande.",
    },
  ];

  const confidenceChecks = [
    {
      title: "Bilberoende",
      text:
        "Många av Morairas mest attraktiva villaområden kräver bil. Det är normalt, men äldre köpare bör tänka noggrant på vardagskörning, parkering, tillfartsvägar och långsiktig mobilitet.",
    },
    {
      title: "Rytm året runt",
      text:
        "Moraira är lugnare än större orter. För vissa köpare är det den största attraktionskraften. Andra kan föredra den starkare aktiviteten året runt i Dénia eller Jávea.",
    },
    {
      title: "Villaunderhåll",
      text:
        "Pooler, trädgårdar, terrasser, säkerhetssystem, fasadmålning och fuktkontroll kräver alla uppmärksamhet. Köpare som bor utomlands delar av året bör planera för pålitligt lokalt stöd.",
    },
    {
      title: "Orientering och solljus",
      text:
        "Villor på sluttningar kan variera kraftigt beroende på orientering. Vintersol, skugga, vind och tillgång kan påverka komforten mer än köpare inser under en kort visning.",
    },
    {
      title: "Renoveringskvalitet",
      text:
        "Vissa bostäder har byggts ut eller renoverats över tid. Före köp bör oberoende kontroller bekräfta bygglegalitet, licenser, anslutningar och registrerade fastighetsuppgifter.",
    },
    {
      title: "Community- och uthyrningsregler",
      text:
        "Om bostaden ligger i en urbanisation eller förening bör köpare förstå avgifter, regler, uthyrningsbegränsningar, underhållsansvar och mötesprotokoll innan de går vidare.",
    },
  ];

  const lifestylePoints = [
    "Lugn kustlivsstil med en etablerad internationell gemenskap",
    "Stark attraktionskraft för pensionärer, fritidsbostadsägare och villaköpare",
    "Restauranger, vikar, marinaliv och en sofistikerad medelhavsatmosfär",
    "Mindre urbant och mindre tätt än större kustorter",
    "Bra bas för att upptäcka Benissa, Jávea, Calpe och den bredare Marina Alta-regionen",
    "Passar bäst för köpare som värdesätter integritet, kvalitet och lugn mer än stadspuls",
  ];

  const restaurants = [
    {
      title: "Restaurante Club Náutico Moraira",
      label: "Mat vid marinan",
      text:
        "Ett välputsat alternativ vid marinan för medelhavskök, risrätter och en mer klassisk matupplevelse med havskänsla. Det kan passa köpare som uppskattar hamnliv, långa luncher och en elegant kustmiljö.",
      bestFor:
        "Bäst för marinavyer, medelhavsmat och en mer elegant lunch- eller middagsmiljö.",
    },
    {
      title: "Algas L’Andragó",
      label: "Tapas och cocktails vid havet",
      text:
        "En avslappnad strandbar och restaurang vid Cala L’Andragó, känd för tapas, cocktails, palmer och ett läge precis vid havet. Den är mer avslappnad än formell och kan vara särskilt attraktiv för drinkar, lunch eller solnedgångsstämning.",
      bestFor:
        "Bäst för avslappnade havsvyer, tapas, cocktails och en lugn kustkänsla.",
    },
    {
      title: "Eleven Moraira",
      label: "Havs- och slottsutsikt",
      text:
        "Ett stilfullt alternativ för köpare som uppskattar uteservering, havsutsikt och vyer mot Morairas slott. Det kan vara ett bra exempel på den mer polerade mat- och livsstilsscen som lockar många internationella köpare till Moraira.",
      bestFor:
        "Bäst för middag, utsikt och en mer förhöjd Moraira-kväll.",
    },
    {
      title: "Al Mar Moraira",
      label: "Modern medelhavsmat",
      text:
        "Ett modernt medelhavsalternativ med skaldjur, risrätter, fisk, kött och husets specialiteter. Det är användbart för köpare som vill förstå Morairas mer samtida restaurangscen.",
      bestFor:
        "Bäst för köpare som vill ha modern medelhavsmat och en polerad matupplevelse.",
    },
  ];

  const activities = [
    {
      title: "El Portet-stranden och bukten",
      text:
        "El Portet är ett av Morairas mest attraktiva livsstilsområden, med en skyddad bukt, lugnt vatten och en sofistikerad kustatmosfär. För köpare visar det den premiumbetonade sidan av livet i Moraira.",
    },
    {
      title: "Cap d’Or-vandring och utsiktspunkt",
      text:
        "Området kring Cap d’Or erbjuder en av de klassiska vandringarna nära Moraira, med utsikt över kusten och El Portet. Det är ett bra exempel på hur natur, havsutsikt och ett aktivt uteliv är en del av Morairas attraktionskraft.",
    },
    {
      title: "Cala L’Andragó och Cap Blanc",
      text:
        "Den här kustsidan av Moraira är attraktiv för avslappnade promenader, drinkar vid havet och solnedgångsstunder. Den kan passa köpare som vill ha en lugnare kustrutin i stället för en hektisk semesterortskänsla.",
    },
    {
      title: "Marina, slott och centrum",
      text:
        "Morairas marina, lilla slott, restauranger och centrum skapar en kompakt men elegant vardagsrytm. Det är inte en stor stad, men det är just därför många köpare tycker om den.",
    },
    {
      title: "Restauranger och långa medelhavsluncher",
      text:
        "Mat är en verklig del av Morairas livsstil. Köpare som uppskattar bra restauranger, terrasser med havsutsikt, luncher vid marinan och lugna kvällsmåltider tycker ofta att Moraira är mer attraktivt än livligare kustorter.",
    },
    {
      title: "Utforska närliggande områden",
      text:
        "Moraira är också en bra bas för att utforska Benissa, Jávea, Calpe, Dénia och byar i inlandet. Det är viktigt för köpare som vill ha lugn hemma men variation inom köravstånd.",
    },
  ];

  const relatedGuides = [
    {
      href: "/sv/guides/best-areas-costa-blanca-north-retirees",
      title: "Best Areas on Costa Blanca North for Retirees",
      text:
        "Jämför Moraira med Dénia, Jávea, Altea, Benissa och Calpe ur ett pensionärsperspektiv.",
    },
    {
      href: "/sv/guides/moraira-vs-javea",
      title: "Moraira vs Jávea",
      text:
        "Förstå skillnaden mellan Morairas lugna villalivsstil och Jáveas mer aktiva internationella rytm.",
    },
    {
      href: "/sv/guides/where-to-buy-property-costa-blanca-north",
      title: "Where to Buy Property on Costa Blanca North",
      text:
        "Jämför de viktigaste orterna på Costa Blanca Nord innan du väljer var du ska köpa.",
    },
  ];

  const officialSources = [
    {
      label: "Teulada-Moraira — Comunitat Valenciana",
      href: "https://www.comunitatvalenciana.com/en/alacant-alicante/teulada-moraira",
    },
    {
      label: "Moraira — Spain.info",
      href: "https://www.spain.info/en/destination/moraira/",
    },
    {
      label: "Teulada-Moraira official tourism",
      href: "https://www.turismoteuladamoraira.com/ttm/web_php/index.php?lang=4",
    },
    {
      label: "Teulada-Moraira gastronomy",
      href: "https://www.turismoteuladamoraira.com/ttm/web_php/index.php?contenido=subapartados_coconut&id_boto=570&lang=4",
    },
    {
      label: "Cap d’Or Watchtower route",
      href: "https://www.turismoteuladamoraira.com/ttm/web_php/index.php?contenido=subapartados_coconut&id_boto=648&lang=4",
    },
    {
      label: "Restaurante Club Náutico Moraira",
      href: "https://restauranteclubnauticomoraira.es/en/",
    },
    {
      label: "Algas L’Andragó",
      href: "https://www.algasmoraira.com/",
    },
    {
      label: "Eleven Moraira",
      href: "https://elevenmoraira.nl/",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVBAR */}
      <nav className="absolute left-0 top-0 z-50 w-full px-8 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/sv"
            className="text-sm font-medium uppercase tracking-[0.28em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
          >
            Nordic Move Spain
          </a>

          <div className="hidden gap-8 text-sm md:flex">
            <a
              href="/sv"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Startsida
            </a>

            <a
              href="/sv/regions"
              className="border-b border-[#c8a063] pb-1 text-white drop-shadow"
            >
              Regioner
            </a>

            <a
              href="/sv/services"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Tjänster
            </a>

            <a
              href="/sv/guides"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Guider
            </a>

            <a
              href="/sv/about-us"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Om oss
            </a>

            <a
              href="/sv/contact"
              className="text-white drop-shadow transition hover:text-white/70"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-32">
        <img
          src="/images/moraira.jpg"
          alt="Moraira Costa Blanca Nord bostads- och områdesguide"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Områdesguide Costa Blanca Nord
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-7xl">
              Att bo i Moraira.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Ett förfinat kustområde för internationella köpare som söker lugn,
              integritet, villor, havsutsikt och en mer elegant medelhavslivsstil
              på Costa Blanca Nord.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/sv/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Be om din Area Match
              </a>

              <a
                href="/sv/guides/moraira-vs-javea"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Jämför Moraira och Jávea
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Är Moraira rätt för dig?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Moraira väljs ofta av köpare som vill ha kvalitet, lugn och en mer
              privat kustlivsstil.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Moraira är ett av de mest eftertraktade områdena på Costa Blanca
              Nord för internationella köpare som vill ha en lugnare och mer
              elegant medelhavslivsstil. Till skillnad från större kustorter
              känns Moraira mindre, lugnare och mer bostadsorienterat.
            </p>

            <p className="mt-6">
              Området är särskilt populärt bland nederländska, tyska,
              schweiziska, belgiska, skandinaviska och brittiska köpare som söker
              villor, havsutsikt, integritet och en avslappnad livsstil med
              restauranger, vikar och en etablerad internationell gemenskap.
            </p>

            <p className="mt-6">
              Officiella turismkällor beskriver Teulada-Moraira som ett område
              med cirka 8 kilometer kust med stränder och vikar. För köpare är
              den kusten en del av Morairas attraktionskraft — men det verkliga
              beslutet är om den lugna, villafokuserade livsstilen passar dina
              långsiktiga planer.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Snabbt svar
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Moraira passar bäst för köpare som vill ha en lugn, villafokuserad
            och förfinad kustlivsstil.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Det är vanligtvis inte det mest urbana eller mest praktiska
            alternativet på Costa Blanca Nord. Styrkan ligger i något annat:
            integritet, lugn, bostadskvalitet, elegant kustliv och stark
            lämplighet för pensionärer och fritidsbostadsägare som värdesätter
            ett långsammare tempo.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {lifestylePoints.map((item) => (
              <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                <p className="leading-relaxed text-stone-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTAURANTS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Restauranger och mat med havsutsikt
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Morairas restaurangscen är en del av områdets livsstilsattraktion.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              För många köpare handlar Moraira inte bara om villor och stränder.
              Det handlar också om långa luncher vid marinan, avslappnade drinkar
              vid havet, solnedgångsterrasser och känslan av att ha kvalitativa
              restauranger nära hemmet.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-stone-500">
              Restaurangnamn och öppettider kan ändras. Kontrollera alltid
              aktuella öppettider, bokningsregler och säsongsscheman innan du
              planerar ett besök.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.title}
                className="rounded-[32px] bg-white p-9 shadow-sm"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  {restaurant.label}
                </p>

                <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
                  {restaurant.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {restaurant.text}
                </p>

                <div className="mt-6 rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                    {restaurant.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Aktiviteter och vardagsliv
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Moraira passar köpare som uppskattar lugnt uteliv, kustpromenader
            och kvalitetstid vid havet.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Moraira är inte en stor stad och försöker inte vara det. Dess
            attraktionskraft är lugnare: stränder, vikar, vandringsleder,
            restauranger, marinaliv, terrasser och tillgång till den bredare
            Marina Alta-regionen.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="rounded-[30px] bg-white/80 p-8"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {activity.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {activity.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYER PROFILES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Köparprofil
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Vem Moraira passar bäst för.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {buyerProfiles.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] bg-white p-9 shadow-sm"
              >
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

      {/* ZONES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Områden och zoner
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Rätt del av Moraira är lika viktig som själva bostaden.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Moraira är inte en enda livsstil. En villa i El Portet, ett hus nära
            Pla del Mar, en sluttande bostad i Benimeit eller ett radhus nära
            centrum kan kännas mycket olika i vardagen.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {zones.map((zone) => (
              <div key={zone.title} className="rounded-[30px] bg-white/80 p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {zone.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {zone.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Bostadstyper
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Moraira är starkast för villor, integritet och bostadskvalitet.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Köpare som väljer Moraira vill ofta ha mer än bara en bostad. De
              vill ha en lugn medelhavsbas, uteliv, integritet och långsiktig
              komfort.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {propertyTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] bg-white p-8 shadow-sm"
              >
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

      {/* RETIREE SUITABILITY */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Lämplighet för pensionärer
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Moraira kan vara ett utmärkt pensionsområde för köpare som
            värdesätter lugn, integritet och livskvalitet.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-white/80">
            <p>
              För pensionärer är Morairas attraktionskraft tydlig: en lugn
              kustmiljö, en sofistikerad internationell gemenskap, bra
              restauranger, stränder, vikar och ett långsammare tempo än i
              större orter.
            </p>

            <p className="mt-6">
              Den viktigaste frågan är praktikalitet. Många villor kräver bil,
              vissa bostäder ligger på sluttningar och större fastigheter behöver
              regelbundet underhåll. För vissa köpare är detta helt acceptabelt.
              För andra kan Dénia, Jávea eller Calpe erbjuda mer praktisk
              bekvämlighet i vardagen.
            </p>

            <p className="mt-6">
              Därför rekommenderar vi att jämföra livsstil och praktiska behov
              innan du väljer bostad. Rätt hem i Moraira kan vara en underbar
              långsiktig bas, men den exakta platsen spelar stor roll.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/sv/guides/best-areas-costa-blanca-north-retirees"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Läs pensionsområdesguiden
            </a>

            <a
              href="/sv/services/area-match"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Be om din Area Match
            </a>
          </div>
        </div>
      </section>

      {/* CONFIDENCE CHECKS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Kontrollpunkter för trygghet
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Vad du bör förstå innan du köper i Moraira.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Dessa kontroller är inte skäl att undvika Moraira. De är en del av
              ett väl förberett köpbeslut.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {confidenceChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] bg-white p-9 shadow-sm"
              >
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

      {/* COMPARISON */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <a
            href="/sv/regions/javea"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Jämför i närheten
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Moraira eller Jávea?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Jávea erbjuder vanligtvis mer aktivitet, en större internationell
              gemenskap året runt och mer livsstilsvariation.
            </p>
          </a>

          <a
            href="/sv/regions/denia"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Jämför bekvämlighet
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Moraira eller Dénia?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Dénia kan vara starkare för vardagsservice, stadsliv, tillgång
              till vård och bekvämlighet året runt.
            </p>
          </a>

          <a
            href="/sv/regions/benissa"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Jämför integritet
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Moraira eller Benissa?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Benissa kan erbjuda mer mark, lantlig karaktär och integritet,
              medan Moraira ofta känns mer polerat och kustnära.
            </p>
          </a>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Relaterade guider
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Fortsätt din research om Moraira.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {relatedGuides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {guide.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {guide.text}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Osäker på om Moraira passar dig?
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Jämför Moraira med din livsstil innan du väljer bostad.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Vår Area Match Assessment hjälper dig att förstå om Moraira, Jávea,
            Dénia, Altea, Benissa eller Calpe passar bäst för dina prioriteringar,
            din budget, din livsstil och dina långsiktiga planer.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/sv/services/area-match"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Be om din Area Match
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

      {/* OFFICIAL SOURCES */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Officiella källor
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Den här områdesguiden använder officiella turism- och
            restaurangkällor där det är möjligt. Köpare bör alltid kontrollera
            bostads-, juridiska, restaurang- och praktiska uppgifter innan de
            fattar beslut.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
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
