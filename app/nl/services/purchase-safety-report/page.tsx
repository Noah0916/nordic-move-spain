export const metadata = {
  title: "Purchase Safety Report | Veilig een woning kopen aan de Costa Blanca Noord",
  description:
    "Purchase Safety voor kopers aan de Costa Blanca Noord: grondige technische inspectie, document- en registratiescreening en volledige juridische due diligence door ervaren onafhankelijke professionals die uitsluitend aan de kant van de koper werken.",
  openGraph: {
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Grondige technische en juridische aankoopcontrole door ervaren onafhankelijke professionals, zonder verkopersbelang en volledig gericht op de belangen van de koper.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Twee onafhankelijke professionele beoordelingen en één duidelijk Nordic Move-aankoopadvies: doorgaan, heroverwegen of niet kopen.",
  },
};

export default function PurchaseSafetyReportPage() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/15 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/nl"
            className="text-sm uppercase tracking-[0.25em] text-white"
          >
            Nordic Move Spain
          </a>

          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/nl" className="hover:text-white/70 transition">
              Home
            </a>

            <a href="/nl/regions" className="hover:text-white/70 transition">
              Regio’s
            </a>

            <a href="/nl/services" className="border-b border-[#c8a063] pb-1">
              Diensten
            </a>

            <a href="/nl/guides" className="hover:text-white/70 transition">
              Gidsen
            </a>

            <a href="/nl/about-us" className="hover:text-white/70 transition">
              Over ons
            </a>

            <a href="/nl/contact" className="hover:text-white/70 transition">
              Contact
            </a>
          </div>

          <a
            href="/nl/contact"
            className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Kennismaking plannen
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img
          src="/images/legal.png"
          alt="Purchase Safety Report voor het kopen van een woning aan de Costa Blanca Noord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Veiliger kopen in Spanje
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[1] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-7xl">
              Purchase Safety Report
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white">
              Een grondige technische woninginspectie en eerste document- en
              registratiescreening door een ervaren onafhankelijke surveyor,
              gecombineerd met volledige juridische due diligence door een
              onafhankelijke Spaanse vastgoedadvocaat — volledig gecoördineerd
              door Nordic Move en uitsluitend gericht op de belangen van de koper.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/nl/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Persoonlijke kennismaking aanvragen
              </a>

              <a
                href="/nl/services"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Terug naar diensten
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Eerst controleren, dan beslissen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Een mooie woning is niet automatisch een veilige aankoop.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              Veel internationale kopers letten tijdens een bezichtiging vooral
              op het uitzicht, de ruimte, sfeer en locatie. Dat is begrijpelijk.
              De echte risico’s bevinden zich vaak achter de schermen:
              onvolledige documenten, een aanbouw die niet correct is
              geregistreerd, onduidelijke perceelgrenzen, technische gebreken,
              vochtproblemen, septic tanks, regels van de
              eigenaarsgemeenschap of onverwachte kosten.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Purchase Safety helpt om deze punten vóór aankoop beter zichtbaar
              te maken. Wij werken met ervaren, deskundige en onafhankelijke
              professionals: een surveyor voor de technische woninginspectie en
              eerste technische documentvergelijking, en een onafhankelijke
              Spaanse vastgoedadvocaat voor de volledige juridische due
              diligence.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Bij veel vastgoedtransacties in Spanje ontvangt de verkopende
              makelaar een verkoopcommissie van de verkoper of via de
              verkooptransactie. Dat is een gebruikelijk verkoopmodel, maar het
              kan betekenen dat er een financieel belang bestaat bij het
              daadwerkelijk afronden van de verkoop. Nordic Move Spain werkt
              anders: wij worden niet door de verkoper of verkopende makelaar
              betaald om een specifieke woning verkocht te krijgen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Daardoor kunnen wij uitsluitend vanuit het belang van de koper
              werken. Als iets extra onderzoek nodig heeft, willen we dat het
              wordt onderzocht. Als de uitkomst reden geeft om opnieuw te
              onderhandelen, aanvullende expertise in te schakelen of van de
              woning af te zien, moet de koper dat weten vóórdat hij zich
              vastlegt.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Op basis van beide professionele beoordelingen brengen we de
              belangrijkste bevindingen, open vragen en voorwaarden samen en
              geven we een duidelijk aankoopadvies: doorgaan, heroverwegen of
              niet kopen. Nordic Move vervangt noch de surveyor noch de
              advocaat; beiden blijven onafhankelijk en verantwoordelijk voor
              hun eigen beoordeling, advies en rapportage.
            </p>
          </div>
        </div>
      </section>

      {/* PROFESSIONALS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Onafhankelijke professionals
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Twee onafhankelijke beoordelingen voor een duidelijker aankoopbeeld.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Wij werken met ervaren en onafhankelijke professionals die hun
              eigen vakgebied grondig beoordelen. De surveyor onderzoekt de
              technische staat van de woning en vergelijkt relevante technische
              documentatie. De onafhankelijke Spaanse vastgoedadvocaat voert de
              volledige juridische due diligence uit en vertegenwoordigt
              uitsluitend de koper.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Volledige juridische due diligence
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Onafhankelijke Spaanse advocaat
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                De onafhankelijke Spaanse vastgoedadvocaat controleert onder
                meer het eigendom en de geregistreerde eigendomssituatie,
                lasten en beperkingen, relevante schulden en belastingen,
                juridische en planologische aandachtspunten, beschikbare
                vergunningen en licenties, documenten van de
                eigenaarsgemeenschap, koopcontracten en de voorwaarden van de
                eigendomsoverdracht. Waar nodig wordt aanvullende bevestiging
                gevraagd bij de bevoegde instantie of specialist.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                De advocaat werkt onafhankelijk, vertegenwoordigt de koper en
                blijft verantwoordelijk voor de eigen juridische beoordeling
                en advisering. De documentenscreening van de surveyor vervangt
                deze juridische due diligence niet.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Document- en registratiescreening
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Eerste beoordeling van beschikbare documenten
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                De onafhankelijke surveyor beoordeelt en vergelijkt de
                technische informatie die voor de woning beschikbaar is. Dit
                kan onder meer bestaan uit de Catastro-gegevens, de
                geregistreerde omschrijving van de woning, recente
                IBI-informatie, het geregistreerde energiecertificaat (CEE),
                het IEEV.CV waar van toepassing, beschikbare plattegronden,
                bouwvergunningen, licenties en documentatie die door de
                verkoper of makelaar is aangeleverd.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Waar mogelijk worden geregistreerde, kadastrale en gemeten
                oppervlaktes met elkaar vergeleken. Verschillen rond
                aanbouwen, garages, terrassen, zwembaden of andere constructies
                die niet consistent in de beschikbare documentatie terugkomen,
                worden gesignaleerd voor verder onderzoek.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                De surveyor kan daarnaast technische of planologische
                aandachtspunten signaleren die aanvullende verificatie nodig
                hebben. De juridische status, eigendom, lasten,
                eigenaarsgemeenschap, planologische rechtmatigheid en eventuele
                gevolgen van de Spaanse Coastal Law worden juridisch beoordeeld
                of bevestigd door de onafhankelijke advocaat, bevoegde instantie
                of andere specialist.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Een afwijking betekent niet automatisch dat een woning illegaal
                of ongeschikt is. Het betekent dat het punt vóór aankoop
                zorgvuldig moet worden onderzocht, uitgelegd en beoordeeld.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Technische woningbeoordeling
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Onafhankelijke surveyor
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                De onafhankelijke surveyor voert een grondige beoordeling uit
                van de zichtbare en toegankelijke technische staat van de
                woning. Dit omvat onder meer constructie en bouwkwaliteit,
                vocht, waterindringing en zichtbare lekkages, installaties en
                voorzieningen op functioneel niveau, evenals het zwembad,
                bijgebouwen en andere relevante bouwkundige onderdelen.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Het rapport benoemt noodzakelijke reparaties, aanbevelingen en
                verdere aandachtspunten en bevat ondersteunende foto’s. Wanneer
                aanvullende specialistische onderzoeken nodig zijn, wordt dit
                duidelijk geadviseerd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUYER-SIDE INDEPENDENCE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Alleen aan de kant van de koper
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Wij vertegenwoordigen de koper, niet de woning en niet de verkoper.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6 text-lg leading-relaxed text-white/80">
              <p>
                In Spanje is het gebruikelijk dat een verkopende makelaar via
                de verkoper of de verkooptransactie wordt betaald wanneer een
                woning wordt verkocht. Dat model hoeft op zichzelf geen probleem
                te zijn, maar het betekent wel dat de betrokken verkoopmakelaar
                een financieel belang kan hebben bij het tot stand komen van de
                transactie.
              </p>

              <p>
                Nordic Move Spain laat zich niet door de verkoper of de
                verkopende makelaar betalen om een specifieke woning verkocht
                te krijgen. Ons verdienmodel is daarom niet afhankelijk van het
                sluiten van die specifieke verkoop. Wij kunnen ons volledig
                richten op de vraag of de woning werkelijk bij de koper past en
                of de relevante risico&apos;s voldoende zijn onderzocht.
              </p>

              <p>
                Juist daardoor kunnen we ruimte geven aan grondige technische en
                juridische controles. Onze onafhankelijke surveyor en advocaat
                hoeven een aandachtspunt niet kleiner te maken om een verkoop
                door te laten gaan. Zij beoordelen vanuit hun eigen professionele
                verantwoordelijkheid, en wij behartigen uitsluitend het belang
                van de koper in de coördinatie en besluitvorming.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Geen verkoperscommissie om een specifieke woning te pushen",
                "Grondige technische inspectie door een onafhankelijke surveyor",
                "Volledige juridische due diligence door een onafhankelijke advocaat",
                "Ruimte voor aanvullend onderzoek als iets niet klopt",
                "Onderhandelen, verder onderzoeken of stoppen als de bevindingen dat vragen",
                "Eén duidelijke focus: het belang van de koper",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/8 p-5"
                >
                  <p className="text-sm font-medium leading-relaxed text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CHECKED */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Wat kan het rapport bevatten?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Van documenten tot septic tank: punten die kopers vaak te laat ontdekken.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Zichtbare technische staat, constructie en bouwkwaliteit",
              "Vocht, waterindringing en zichtbare lekkages",
              "Installaties en voorzieningen op functioneel niveau",
              "Zwembad, bijgebouwen en noodzakelijke reparaties",
              "Catastro, geregistreerde omschrijving, IBI, CEE en IEEV.CV waar relevant",
              "Beschikbare plattegronden, vergunningen, licenties en technische documentatie",
              "Vergelijking van geregistreerde, kadastrale en gemeten oppervlaktes",
              "Signalering van mogelijke afwijkingen, aanbouwen, garages, terrassen of zwembaden",
              "Juridische controle van eigendom, lasten, communityzaken, planning en Coastal Law door de advocaat",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#c8a063]/20 bg-[#f6f1ea] p-6"
              >
                <p className="text-base leading-relaxed text-stone-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULT AND COORDINATION */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Duidelijke conclusie
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Doorgaan, heroverwegen of niet kopen.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/80">
              Het doel van Purchase Safety is niet om de aankoop ingewikkelder
              te maken. Het doel is om je vóór een grote financiële beslissing
              meer duidelijkheid te geven op basis van een onafhankelijke
              technische beoordeling en onafhankelijke juridische due
              diligence.
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Groen</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  De woning lijkt geschikt om mee verder te gaan, mits de
                  normale aankoopstappen correct worden afgerond.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Oranje</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Er zijn aandachtspunten. Ga alleen verder onder voorwaarden,
                  na aanvullende controles of met aangepaste onderhandelingen.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Rood</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Er zijn ernstige risico’s waardoor het verstandig kan zijn
                  om niet door te gaan met de woning.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Eén vast aanspreekpunt
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Je hoeft niet zelf alle betrokken professionals te coördineren.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-700">
              Bij het kopen van een woning in Spanje moeten kopers vaak
              tegelijkertijd communiceren met makelaars, surveyors, advocaten
              en andere professionals. Nordic Move blijft jouw vaste
              aanspreekpunt en zorgt dat de afgesproken stappen op elkaar
              aansluiten.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Wij houden bij wie wat doet, welke informatie ontbreekt, welke
              vragen nog openstaan, wat de volgende stap is en waar vertraging
              of risico’s kunnen ontstaan. Omdat wij niet aan de verkoperskant
              worden betaald om deze specifieke transactie te sluiten, kunnen we
              openstaande punten blijven volgen totdat er voldoende duidelijkheid
              is voor de koper.
            </p>

            <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-700">
              <li>• Eén vast Nordic Move-aanspreekpunt</li>
              <li>• Coördinatie van een ervaren onafhankelijke surveyor</li>
              <li>• Selectie en coördinatie van een ervaren onafhankelijke Spaanse vastgoedadvocaat</li>
              <li>• Opvolging van open vragen, voorwaarden en deadlines</li>
              <li>• Een duidelijk aankoopadvies op basis van beide rapporten</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DISCOVERY TRIP */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid items-center lg:grid-cols-2">
            <div className="relative min-h-[520px]">
              <img
                src="/images/discovery2.png"
                alt="Buyer Discovery Trip aan de Costa Blanca Noord"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Onderdeel van jouw aankoopreis
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Combineer Purchase Safety met de Buyer Discovery Trip.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Tijdens onze Buyer Discovery Trip ervaar je niet alleen de
                regio’s, plaatsen en woningen aan de Costa Blanca Noord. Je kunt
                ook kennismaken met professionals die kunnen helpen bij een
                weloverwogen aankoopbeslissing.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Dit kunnen de onafhankelijke Spaanse advocaat, de technische
                surveyor, een hypotheekadviseur en andere geselecteerde lokale
                professionals zijn. Algemene vragen kunnen tijdens de
                experience worden besproken; persoonlijk of
                woningspecifiek juridisch advies wordt afzonderlijk gegeven
                nadat de advocaat formeel is ingeschakeld en een
                belangenconflictcontrole heeft uitgevoerd.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                We kunnen je daarnaast voorstellen aan gelijkgestemde kopers en
                internationale bewoners die zich in een vergelijkbare
                levensfase bevinden. Zo krijg je niet alleen inzicht in de
                woning, maar ook in het dagelijks leven, de gemeenschap en de
                praktische realiteit van wonen in Spanje.
              </p>

              <a
                href="/nl/services/discovery-trips"
                className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Ontdek de Buyer Discovery Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LIABILITY / ROLE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-[#c8a063]/30 bg-white p-10 shadow-sm lg:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Belangrijk om te weten
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
            Wij coördineren. De professionals beoordelen.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Nordic Move Spain vervangt noch de onafhankelijke surveyor noch de
            onafhankelijke Spaanse advocaat. Beide professionals blijven
            verantwoordelijk voor hun eigen beoordeling, rapportage en advies.
            Wij coördineren het proces, volgen openstaande punten op en helpen
            je de belangrijkste bevindingen en voorwaarden te begrijpen.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            De technische documentvergelijking van de surveyor is een eerste
            beoordeling en signalering op basis van de beschikbare informatie.
            Deze vervangt niet de volledige juridische due diligence of een
            formele bevestiging door de bevoegde autoriteiten. Juridische
            onderwerpen worden beoordeeld door de onafhankelijke advocaat en,
            waar nodig, bevestigd door de relevante instantie of specialist.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Onze onafhankelijke positie betekent dat Nordic Move geen
            verkopersbelang heeft bij het afronden van een specifieke verkoop.
            Dat maakt het mogelijk om aandachtspunten serieus te laten
            onderzoeken en de koper op basis van de uitkomsten te ondersteunen
            bij doorgaan, heronderhandelen, verder onderzoek of stoppen.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Geen enkele inspectie, juridische beoordeling of professionele
            controle kan absolute zekerheid geven of garanderen dat een woning
            volledig vrij is van risico&apos;s of verborgen gebreken.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Koop met meer zekerheid
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Overweeg je een woning aan de Costa Blanca Noord?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Vraag een persoonlijke kennismaking aan en ontdek hoe Purchase
            Safety kan helpen om de technische staat, beschikbare registraties
            en documenten en juridische risico’s vóór aankoop beter te
            begrijpen.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/nl/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Kennismaking plannen
            </a>

            <a
              href="/nl"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Terug naar de website
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}