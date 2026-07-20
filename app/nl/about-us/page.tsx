export const metadata = {
  title:
    "Over Nordic Move Spain | Strategische aankoopbegeleiding Costa Blanca Noord",
  description:
    "Maak kennis met Nordic Move Spain. Strategische aankoopbegeleiding voor Nederlandse, Duitse, Zwitserse en andere internationale kopers die duidelijkheid, vertrouwen en betrouwbare ondersteuning willen voordat zij een woning kopen aan de Costa Blanca Noord.",
};

export default function AboutUsPage() {
  const differences = [
    {
      title: "Gebiedskennis vóór de woningzoektocht",
      text:
        "Wij helpen kopers eerst te begrijpen welke plaatsen, woonwijken en levensstijlen aansluiten bij hun langetermijndoelen, voordat zij zich richten op individuele woningen.",
    },
    {
      title: "Strategische ondersteuning bij beslissingen",
      text:
        "Onze achtergrond in strategie, organisatieanalyse, operationele verbetering en internationale verhuizing stelt ons in staat cliënten met structuur en duidelijkheid door complexe beslissingen te begeleiden.",
    },
    {
      title: "Discrete internationale begeleiding",
      text:
        "Wij begeleiden Nederlandse, Duitse, Zwitserse, Britse, Scandinavische en andere internationale kopers die waarde hechten aan een rustige, doordachte en goed voorbereide aankoopreis.",
    },
    {
      title: "Een compleet beeld van het leven in Spanje",
      text:
        "Wij kijken verder dan vierkante meters en zeezicht. Levensstijl, voorzieningen, gezondheidszorg, eigenaarskosten, regels van de gemeenschap en praktische geschiktheid op lange termijn zijn minstens zo belangrijk.",
    },
  ];

  const confidenceSteps = [
    "Uw levensstijl, prioriteiten en langetermijnplannen begrijpen",
    "Gebieden aan de Costa Blanca Noord vergelijken voordat de woningzoektocht begint",
    "Duidelijke vragen voorbereiden voor juridische, financiële en praktische controles",
    "Buyer Discovery Trips organiseren op basis van uw werkelijke levensstijl",
    "Het aankoopproces coördineren met betrouwbare onafhankelijke professionals",
    "Uw overgang naar het dagelijkse leven in Spanje ondersteunen na de aankoop",
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Strategische aankoopbegeleiding van Nordic Move Spain aan de Costa Blanca Noord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Over Nordic Move Spain
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[1] text-white md:text-7xl">
              Wij helpen internationale kopers betere beslissingen te nemen in
              Spanje.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/90">
              Wij geloven dat het kopen van een woning in het buitenland moet
              beginnen met duidelijkheid, inzicht in uw levensstijl en
              betrouwbare begeleiding — niet met eindeloos zoeken op
              woningportalen.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTIE */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Onze missie
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Meer dan alleen een woning vinden.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
            Nordic Move Spain is opgericht voor internationale kopers die
            vertrouwen, duidelijkheid en lokale kennis willen voordat zij een
            van de belangrijkste investeringen in hun leven doen.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
            Wij helpen cliënten regio&apos;s, gemeenschappen, juridische
            processen, praktische aandachtspunten en de gevolgen voor hun
            levensstijl op lange termijn te begrijpen voordat zij zich verbinden
            aan de aankoop van een woning in Spanje.
          </p>
        </div>
      </section>

      {/* WILLEKE */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[420px_1fr]">
          <img
            src="/images/willeke.png"
            alt="Willeke van Olst, oprichter van Nordic Move Spain"
            className="h-[620px] w-full rounded-[32px] object-cover shadow-xl"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Oprichter
            </p>

            <h2 className="mt-5 font-serif text-6xl leading-tight text-[#1e2a3a]">
              Willeke
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-700">
              Voor veel mensen begint het kopen van een woning in het buitenland
              met het zoeken naar het juiste huis. In werkelijkheid bepalen de
              juridische, praktische en persoonlijke keuzes rondom de aankoop
              vaak of een verhuizing ook op lange termijn succesvol wordt.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Willeke combineert praktische ervaring met internationale
              verhuizingen met een achtergrond in marketing, strategie en
              organisatieanalyse. Zij behaalde een master met een specialisatie
              in Marketing en Strategie en werkte eerder als opleidingsmanager
              van een businessopleiding en als docent in strategie, marketing en
              onderzoek. Daarbij begeleidde zij studenten tijdens hun
              afstudeeronderzoek en hielp zij hen complexe organisatorische en
              strategische vraagstukken te analyseren.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Door haar samenwerking met studenten en organisaties in
              verschillende sectoren, waaronder de bouw, financiële
              dienstverlening en professionele zakelijke dienstverlening,
              ontwikkelde zij een sterk vermogen om onderliggende problemen te
              herkennen, de juiste vragen te stellen en duidelijkheid te brengen
              in complexe situaties. Deze analytische manier van werken vormt
              nog steeds de kern van de begeleiding die zij cliënten vandaag
              biedt.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Naast haar werk in het hoger onderwijs richtte Willeke in Nederland
              een internationale relocationservice op. Zij begeleidde expats en
              internationale professionals bij huisvesting, administratie,
              onderwijs, gezondheidszorg en de praktische realiteit van het
              opbouwen van een nieuw leven in een ander land.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Omdat zij zelf ook betrokken is geweest bij renovatie- en
              vastgoedprojecten, begrijpt zij dat succesvol woningbezit veel
              verder gaat dan de transactie alleen. Vandaag combineert zij
              strategisch denken, relocationexpertise en lokale kennis om
              cliënten met vertrouwen weloverwogen beslissingen te laten nemen.
            </p>

            <blockquote className="mt-10 border-l-4 border-[#c8a063] pl-6 font-serif text-2xl italic text-[#1e2a3a]">
              &ldquo;Mijn rol is niet om vastgoed te verkopen. Mijn rol is om u
              te helpen betere beslissingen te nemen.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* SANTIAGO */}
      <section className="bg-white px-8 py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Medeoprichter
            </p>

            <h2 className="mt-5 font-serif text-6xl leading-tight text-[#1e2a3a]">
              Santiago
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-700">
              Het kopen van een woning in het buitenland vraagt om veel meer dan
              het vinden van het juiste huis. U krijgt te maken met onbekende
              systemen, complexe processen en uitdagingen die u het beste kunt
              voorzien voordat zij kostbare fouten worden.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Santiago brengt uitgebreide ervaring mee op het gebied van
              operationele verbetering, bedrijfstransformatie en internationaal
              projectmanagement. Gedurende zijn loopbaan werkte hij met
              organisaties in Europa, Latijns-Amerika en Azië. Hij hielp teams
              processen te verbeteren, transparantie te vergroten en betere
              resultaten te behalen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Zijn achtergrond omvat het leiden van complexe projecten met
              meerdere belanghebbenden, het coördineren van internationale teams
              en het implementeren van praktische oplossingen in dynamische
              omgevingen. Deze ervaring stelt hem in staat uitdagingen
              gestructureerd, helder en resultaatgericht te benaderen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Of het nu gaat om het beoordelen van procedures, het coördineren
              van professionals of het begeleiden van cliënten door onbekende
              systemen: Santiago richt zich op het vereenvoudigen van
              complexiteit en het creëren van een duidelijke route vooruit.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Vandaag combineert hij operationele expertise, projectleiderschap
              en lokale kennis om cliënten met vertrouwen vooruit te helpen
              tijdens een van de belangrijkste beslissingen in hun leven.
            </p>

            <blockquote className="mt-10 border-l-4 border-[#c8a063] pl-6 font-serif text-2xl italic text-[#1e2a3a]">
              &ldquo;Complexiteit omzetten in duidelijkheid.&rdquo;
            </blockquote>
          </div>

          <img
            src="/images/santiago.png"
            alt="Santiago, medeoprichter van Nordic Move Spain"
            className="h-[620px] w-full rounded-[32px] object-cover shadow-xl"
          />
        </div>
      </section>

      {/* WAAROM NORDIC MOVE SPAIN */}
      <section className="px-8 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Waarom wij Nordic Move Spain hebben opgericht
          </p>

          <h2 className="mt-6 font-serif text-6xl leading-tight text-[#1e2a3a]">
            Omdat kopen in het buitenland veiliger zou moeten voelen.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
            Te veel kopers beginnen op woningportalen en ontdekken de
            belangrijkste vragen pas later. Welke plaats past werkelijk bij uw
            levensstijl? Hoe goed is de gezondheidszorg? Met welke verborgen
            kosten moet u rekening houden? Welke juridische risico&apos;s moeten
            worden vermeden?
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
            Nordic Move Spain is opgericht om internationale kopers
            duidelijkheid te geven voordat zij zich vastleggen. Met ons gratis
            Area Match Rapport, de persoonlijke intake, Buyer Discovery Trips,
            aankoopcoördinatie en het Soft Landing-programma helpen wij cliënten
            niet alleen te begrijpen waar zij het beste kunnen kopen, maar ook
            hoe zij een waardevol en verbonden leven in Spanje kunnen opbouwen.
          </p>

          <p className="mx-auto mt-10 max-w-4xl font-serif text-3xl text-[#1e2a3a]">
            Vertrouwen. Duidelijkheid. Verbondenheid.
          </p>
        </div>
      </section>

      {/* ONS ONDERSCHEID */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Het verschil van Nordic Move Spain
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Strategische begeleiding voor kopers die rustig, goed geïnformeerd
            en met vertrouwen willen beslissen.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {differences.map((item) => (
              <div key={item.title} className="rounded-[30px] bg-[#f6f1ea] p-8">
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

      {/* HOE WIJ VERTROUWEN CREËREN */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Hoe wij vertrouwen creëren
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Een gestructureerde route van de eerste oriëntatie tot u zich
              thuis voelt in Spanje.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Serieuze kopers hebben meer nodig dan een lijst met beschikbare
              woningen. Zij hebben behoefte aan een duidelijk proces, de juiste
              vragen, betrouwbare lokale kennis en een rustige route naar een
              beslissing die bij hun toekomstige leven past.
            </p>
          </div>

          <div className="rounded-[40px] bg-[#1e2a3a] p-10 text-white shadow-sm">
            <div className="grid gap-5">
              {confidenceSteps.map((item, index) => (
                <div key={item} className="flex gap-5 rounded-2xl bg-white/10 p-5">
                  <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="leading-relaxed text-white/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VOOR ZORGVULDIGE INTERNATIONALE KOPERS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Voor internationale kopers die zorgvuldig willen kiezen
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Onze cliënten waarderen discretie, voorbereiding en een dieper
            inzicht in het leven in Spanje.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-700">
            <p>
              Veel van onze cliënten zoeken niet simpelweg een woning. Zij
              overwegen een toekomstige levensstijl, een tweede huis, hun
              pensioen, een gezinsbeslissing of een langdurige band met Spanje.
            </p>

            <p className="mt-6">
              Zij willen begrijpen welk gebied bij hen past, welke vragen vóór
              een bezichtiging moeten worden gesteld, welke praktische details
              belangrijk zijn en hoe zij met vertrouwen verder kunnen gaan.
            </p>

            <p className="mt-6">
              Juist daar wordt onze achtergrond in strategie en internationale
              verhuizing waardevol. Wij brengen structuur in een beslissing die
              vaak emotioneel, complex en zeer persoonlijk is.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Begin met duidelijkheid
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Ontdek voordat u een woning kiest welke omgeving werkelijk bij uw
            toekomstige leven past.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Ons gratis Area Match Rapport helpt u plaatsen aan de Costa Blanca
            Noord te vergelijken op basis van levensstijl, budget,
            voorzieningen, langetermijnplannen en praktische prioriteiten.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Vraag uw gratis Area Match Rapport aan
            </a>

            <a
              href="/nl/guides"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Lees onze kopersgidsen
            </a>

            <a
              href="/contact"
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