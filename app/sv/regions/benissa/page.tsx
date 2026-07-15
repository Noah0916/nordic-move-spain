export const metadata = {
  title: "Bo i Benissa | Köp bostad i Benissa Costa Blanca Nord",
  description:
    "Upptäck om Benissa är rätt område för att köpa bostad på Costa Blanca Nord. En guide för svenska, nederländska, tyska, schweiziska och internationella köpare som jämför livsstil, villor, lantligt boende, kustvikar, restauranger, aktiviteter, pensionering och långsiktig lämplighet.",
};

export default function BenissaPage() {
  const lifestylePoints = [
    "Autentisk spansk stad med historisk charm och lokal rytm",
    "Starkt val för köpare som vill ha utrymme, integritet och natur",
    "Kustvikar, klippor och ekologiska vandringsleder",
    "Bra bas mellan Moraira, Calpe, Jávea och dalarna inåt landet",
    "Attraktivt för villaköpare som föredrar en lugnare bostadsmiljö",
    "Passar bäst för köpare som värdesätter diskret kvalitet framför resortenergi",
  ];

  const buyerProfiles = [
    {
      title: "Köpare som söker integritet",
      text:
        "Benissa kan passa köpare som vill ha fristående bostäder, utrymme runt huset, öppna vyer och en lugnare bostadsmiljö utan att vara bortkopplade från kusten.",
    },
    {
      title: "Pensionärer som värdesätter lugn",
      text:
        "För pensionärer kan Benissa erbjuda ett långsammare tempo, autentiska omgivningar och tillgång till närliggande kustorter, samtidigt som man undviker tätheten i större resortområden.",
    },
    {
      title: "Villa- och landsbygdsköpare",
      text:
        "Området är attraktivt för köpare som söker villor, rustika bostäder, hus på sluttningar och bostadszoner med mer mark eller integritet än många kustorter erbjuder.",
    },
    {
      title: "Kräsna internationella köpare",
      text:
        "Nederländska, tyska, schweiziska, belgiska, brittiska och skandinaviska köpare kan välja Benissa när de vill ha tillgång till Costa Blanca Nord med mer autenticitet och utrymme.",
    },
  ];

  const zones = [
    {
      title: "Benissa Pueblo",
      text:
        "Den historiska staden inåt landet erbjuder lokalt liv, traditionella gator, service och en mer autentisk spansk rytm. Den passar köpare som vill ha gemenskap, historia och vardagsliv året runt.",
    },
    {
      title: "Benissa Costa",
      text:
        "Den kustnära delen av Benissa är där många internationella köpare söker villor, havsutsikt, vikar och tillgång mot Moraira och Calpe.",
    },
    {
      title: "La Fustera",
      text:
        "Ett av de mest kända kustområdena, nära stranden, restauranger och den ekologiska leden. Det kan passa köpare som vill ha kustnära tillgång utan känslan av en stor resort.",
    },
    {
      title: "Les Bassetes",
      text:
        "Ett litet marina- och kustområde mellan Benissa och Calpe, attraktivt för havsutsikt, vattensport, restauranger och en mer förfinad kustlivsstil.",
    },
    {
      title: "Cala Baladrar och Cala Advocat",
      text:
        "Lugna kustzoner med vikar, strandbarer och bostäder i närheten. Dessa områden kan passa köpare som vill ha en avslappnad vardag nära havet.",
    },
    {
      title: "Montemar och Buenavista",
      text:
        "Bostadsområden med villor som ofta övervägs av internationella köpare som söker utrymme, integritet och tillgång mot både Moraira och Calpe.",
    },
  ];

  const propertyTypes = [
    {
      title: "Fristående villor",
      text:
        "Det vanligaste valet för internationella köpare i Benissa Costa. Villor kan erbjuda integritet, pool, trädgård och utsikt, men kräver också underhåll och lokal support.",
    },
    {
      title: "Bostäder med havsutsikt",
      text:
        "Mycket attraktiva, särskilt i kustnära områden och på sluttningar. Köpare bör kontrollera orientering, tillfartsvägar, trappor, vindexponering och vintersol.",
    },
    {
      title: "Lanthus och fincor",
      text:
        "Ett alternativ för köpare som vill ha mark, integritet och en mer lantlig medelhavsatmosfär. Juridiska kontroller, nyttigheter, tillgång och underhåll är särskilt viktiga.",
    },
    {
      title: "Radhus och byhus",
      text:
        "Ett annorlunda livsstilsval för köpare som föredrar autenticitet, promenadavstånd och lokalt spanskt liv framför en villafokuserad kustmiljö.",
    },
  ];

  const restaurants = [
    {
      title: "Coral Beach Les Bassetes",
      label: "Marinarestaurang",
      text:
        "Belägen vid Les Bassetes marina är Coral Beach Les Bassetes ett starkt exempel på Benissas mer förfinade kustnära matupplevelse, med fisk och skaldjur, risrätter och en medelhavsmiljö vid marinan.",
      bestFor:
        "Bäst för marinaatmosfär, fisk och skaldjur, risrätter och en elegant kustnära lunch eller middag.",
    },
    {
      title: "Oceana Club",
      label: "Restaurang med havsutsikt",
      text:
        "Oceana Club är känt för sitt panoramiska medelhavsläge nära vattnet. Det kan tilltala köpare som uppskattar avslappnad kustnära mat, cocktails och utsikt.",
      bestFor:
        "Bäst för havsutsikt, avslappnad mat, cocktails och en mer social kustatmosfär.",
    },
    {
      title: "Casa Bernardi",
      label: "Fine dining",
      text:
        "Casa Bernardi tillför ett mer förfinat gastronomiskt alternativ till Benissa, omgivet av medelhavslandskap. Det visar att Benissa inte bara är lantligt och lugnt, utan också en del av den bredare matscenen i Marina Alta.",
      bestFor:
        "Bäst för speciella tillfällen, fine dining och köpare som uppskattar gastronomi av hög kvalitet.",
    },
    {
      title: "Xiringuito Olalà",
      label: "Strandbarskänsla",
      text:
        "Ett mer avslappnat strandbarsalternativ nära kusten, användbart för köpare som tycker om lugna luncher, drinkar och en enkel rytm vid havet under varmare månader.",
      bestFor:
        "Bäst för avslappnade kustdagar, drinkar, tapas och sommaratmosfär.",
    },
  ];

  const activities = [
    {
      title: "Benissa Ecological Walk",
      text:
        "Den ekologiska leden följer delar av Benissas kust och binder samman vikar, klippor och utsiktspunkter. Det är en av de starkaste livsstilsfördelarna för köpare som tycker om att promenera vid havet.",
    },
    {
      title: "La Fustera-stranden",
      text:
        "La Fustera är en av de mest lättillgängliga stränderna i Benissa, med turkost vatten, avslappnad atmosfär och tillgång till kustleden.",
    },
    {
      title: "Cala Baladrar",
      text:
        "En lugn vik med kristallklart vatten och en mer naturlig känsla. Den passar köpare som föredrar små vikar framför långa urbana stränder.",
    },
    {
      title: "Les Bassetes marina",
      text:
        "Les Bassetes passar köpare som uppskattar vattensport, marinaliv, havsutsikt och kustnära restauranger utan intensiteten i en större hamnstad.",
    },
    {
      title: "Historisk gammal stad",
      text:
        "Benissas gamla stad har ett av de bättre bevarade historiska centrumen i området, med traditionella gator, kulturarvsbyggnader och en mer lokal spansk atmosfär.",
    },
    {
      title: "Sierra de Bèrnia",
      text:
        "Bèrnia-bergen tillför ett dramatiskt inlandslanskap, vandringsleder och öppna vyer. Det är en del av det som gör att Benissa känns mer varierat än en vanlig stranddestination.",
    },
  ];

  const confidenceChecks = [
    {
      title: "Kust eller landsbygd",
      text:
        "Benissa förändras mycket beroende på läge. En kustvilla, en lantlig finca och ett byhus erbjuder helt olika vardagsliv.",
    },
    {
      title: "Bilberoende",
      text:
        "De flesta köpare i Benissa behöver bil. Detta är särskilt viktigt för pensionärer eller deltidsboende som vill ha enkel tillgång till butiker, restauranger och vård.",
    },
    {
      title: "Tillfartsvägar",
      text:
        "Vissa villor och lantliga bostäder har smala vägar, sluttningar eller längre tillfartsvägar. Detta bör kontrolleras noggrant före köp.",
    },
    {
      title: "Underhåll",
      text:
        "Större villor, pooler, trädgårdar, terrasser och lantliga bostäder kräver regelbundet underhåll. Deltidsägare bör planera för pålitlig lokal support.",
    },
    {
      title: "Juridiska kontroller",
      text:
        "För villor, fincor och renoverade bostäder bör köpare kontrollera bygglegalitet, tillbyggnader, licenser, nyttigheter och registrerade fastighetsuppgifter.",
    },
    {
      title: "Livsstilsmatchning",
      text:
        "Benissa är lugnare än Jávea, Calpe eller Dénia. För vissa köpare är det idealiskt. Andra kan föredra fler restauranger, butiker och aktiviteter inom gångavstånd.",
    },
  ];

  const relatedGuides = [
    {
      href: "/sv/guides/best-areas-costa-blanca-north-retirees",
      title: "Best Areas on Costa Blanca North for Retirees",
      text:
        "Jämför Benissa med Moraira, Jávea, Dénia, Altea och Calpe ur ett pensionärsperspektiv.",
    },
    {
      href: "/sv/guides/where-to-buy-property-costa-blanca-north",
      title: "Where to Buy Property on Costa Blanca North",
      text:
        "Jämför de viktigaste orterna på Costa Blanca Nord innan du väljer var du ska köpa.",
    },
    {
      href: "/sv/regions/moraira",
      title: "Moraira Area Guide",
      text:
        "Jämför Benissas utrymme och autenticitet med Morairas mer förfinade kustnära villalivsstil.",
    },
  ];

  const officialSources = [
    {
      label: "Benissa Tourism",
      href: "https://www.benissa.es/en/",
    },
    {
      label: "Benissa Ecological Walk",
      href: "https://www.benissa.es/en/benissanatursport/paseo-ecologico/",
    },
    {
      label: "Benissa coves and beaches",
      href: "https://www.benissa.es/en/calas-y-playas/",
    },
    {
      label: "La Fustera Beach",
      href: "https://www.benissa.es/en/playas/playa-la-fustera/",
    },
    {
      label: "Cala Baladrar",
      href: "https://www.benissa.es/en/playas/cala-baladrar/",
    },
    {
      label: "Benissa historic centre",
      href: "https://www.benissa.es/en/que-hacer/escapate-al-medievo/",
    },
    {
      label: "Benissa on Spain.info",
      href: "https://www.spain.info/en/destination/benissa/",
    },
    {
      label: "Coral Beach Les Bassetes",
      href: "https://www.restbassetes.com/",
    },
    {
      label: "Oceana Club",
      href: "https://www.oceanacostablanca.com/",
    },
    {
      label: "Casa Bernardi",
      href: "https://casabernardi.es/en/",
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
              Start
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
          src="/images/benissa.jpg"
          alt="Benissa Costa Blanca Nord områdesguide för bostadsköpare"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Områdesguide Costa Blanca Nord
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-7xl">
              Att bo i Benissa.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Autentisk spansk charm, lantligt boende, dolda kustvikar och
              rymliga villaområden mellan Moraira och Calpe.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/sv/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Be om din Area Match
              </a>

              <a
                href="/sv/regions/moraira"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Jämför med Moraira
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
              Är Benissa rätt för dig?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Benissa passar köpare som vill ha utrymme, integritet och en mer
              lokal spansk rytm.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Benissa är ett av de mest intressanta områdena på Costa Blanca
              Nord för köpare som inte vill välja mellan landsbygd och kust.
              Kommunen sträcker sig från en historisk stad inåt landet mot en
              vacker kustlinje med vikar, klippor och medelhavska vandringsleder.
            </p>

            <p className="mt-6">
              Jämfört med mer kända kustorter känns Benissa lugnare, mer
              bostadsorienterat och mer autentiskt. Det handlar mindre om
              strandboulevarder och nattliv, och mer om villor, integritet,
              natur, gammaldags charm och praktisk tillgång till närliggande
              Moraira, Calpe och Jávea.
            </p>

            <p className="mt-6">
              För rätt köpare kan Benissa erbjuda mycket bra långsiktigt värde:
              mer utrymme, en lugnare atmosfär och en livsstil som känns
              kopplad till verkligt lokalt liv snarare än enbart turism.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Kort svar
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Benissa passar bäst för köpare som vill ha autenticitet, integritet,
            kustvikar och lantlig karaktär.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Benissa är vanligtvis inte det mest självklara valet för
            förstagångsköpare, eftersom det är mer utspritt än Moraira, Calpe
            eller Dénia. Men för köpare som vill ha utrymme, lugn, natur och
            diskret kvalitet är just detta dess styrka.
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
              Benissas restaurangscen är lugnare än Morairas, men har verklig
              kvalitet.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Benissa är inte en stor restaurangstad på samma sätt som Dénia
              eller Jávea. Dess charm är mer diskret: marina-mat vid Les
              Bassetes, strandbarsluncher nära vikarna, lantliga restauranger
              och gastronomi för speciella tillfällen.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-stone-500">
              Restaurangnamn, öppettider och ägare kan förändras. Kontrollera
              alltid aktuella öppettider, bokningar och säsongsscheman innan du
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
            Benissa passar köpare som uppskattar natur, vikar, historia och en
            långsammare medelhavsrytm.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Benissa är inte byggt kring en enda strandpromenad eller en enda
            strand. Livsstilen är utspridd mellan gamla stan, landsbygden,
            villaområden, kustvikar och närliggande orter. Det gör området mer
            varierat, men också mer bilberoende.
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
              Vem Benissa passar bäst för.
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
            Bostadsområden och zoner
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Att välja rätt del av Benissa är avgörande.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Benissa är inte en enda livsstil. Ett hem i Benissa Pueblo, en villa
            nära La Fustera, en bostad runt Les Bassetes eller en lantlig finca
            inåt landet kan skapa helt olika vardagsupplevelser.
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
              Benissa är starkast för villor, fincor, integritet och blandat
              kust- och landsbygdsboende.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Köpare som väljer Benissa vill ofta ha mer utrymme och en lugnare
              rytm. Nyckeln är att förstå om kustnära Benissa, inlandet eller
              bylivet passar dina dagliga behov.
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
            Benissa kan passa pensionärer som vill ha lugn, utrymme och
            autenticitet — men exakt läge spelar stor roll.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-white/80">
            <p>
              För pensionärer kan Benissa vara attraktivt eftersom det erbjuder
              en lugnare livsstil, mer integritet och tillgång till både kust och
              landsbygd. Det kan kännas mindre hektiskt och mindre turiststyrt än
              större orter.
            </p>

            <p className="mt-6">
              Den praktiska frågan är vardagsbekvämlighet. Vissa bostäder kräver
              bil för nästan allt. Vissa lantliga eller sluttande fastigheter kan
              vara vackra men mindre praktiska senare i livet. Köpare bör tänka
              noggrant på bilkörning, vårdtillgång, trappor, trädgårdsunderhåll
              och närhet till service.
            </p>

            <p className="mt-6">
              För rätt köpare kan Benissa erbjuda en mycket tillfredsställande
              långsiktig bas. Men det är inte ett pensionärsområde som passar
              alla. Kusttillgång, vägkvalitet och dagliga rutiner bör kontrolleras
              innan du väljer bostad.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/sv/guides/best-areas-costa-blanca-north-retirees"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Läs pensionärsguiden
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
              Trygghetskontroller
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Vad du bör förstå innan du köper i Benissa.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Dessa kontroller är inte skäl att undvika Benissa. De är en del av
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
            href="/sv/regions/moraira"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Jämför i närheten
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Benissa eller Moraira?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Moraira känns vanligtvis mer förfinat och kustnära, medan Benissa
              kan erbjuda mer utrymme, lantlig karaktär och integritet.
            </p>
          </a>

          <a
            href="/sv/regions/calpe"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Jämför bekvämlighet
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Benissa eller Calpe?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Calpe erbjuder mer strandliv, lägenheter och service. Benissa
              känns lugnare, mer bostadsorienterat och mer utspritt.
            </p>
          </a>

          <a
            href="/sv/regions/javea"
            className="rounded-[32px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Jämför livsstil
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
              Benissa eller Jávea?
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Jávea är större och mer socialt. Benissa är lugnare och bättre för
              köpare som föredrar integritet, natur och diskret kvalitet.
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
            Fortsätt din research om Benissa.
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
            Osäker på om Benissa passar dig?
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Jämför Benissa med din livsstil innan du väljer bostad.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Vår Area Match Assessment hjälper dig att förstå om Benissa,
            Moraira, Jávea, Dénia, Altea eller Calpe bäst passar dina
            prioriteringar, din budget, livsstil och långsiktiga planer.
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
            Den här områdesguiden använder officiella turist- och
            restaurangkällor där det är möjligt. Köpare bör alltid kontrollera
            bostadsdetaljer, juridiska frågor, restauranginformation och
            praktiska uppgifter innan de fattar beslut.
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
