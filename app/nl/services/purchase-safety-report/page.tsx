export const metadata = {
  title: "Purchase Safety Report | Veilig een woning kopen aan de Costa Blanca Noord",
  description:
    "Purchase Safety voor kopers aan de Costa Blanca Noord: een onafhankelijke technische woninginspectie, eerste document- en registratiescreening en volledige juridische due diligence door een onafhankelijke Spaanse advocaat.",
  openGraph: {
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Een onafhankelijke technische woninginspectie en documentenscreening, gecombineerd met volledige juridische due diligence door een onafhankelijke Spaanse advocaat.",
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
              Een onafhankelijk uitgevoerde technische woninginspectie met
              eerste document- en registratiescreening, gecombineerd met
              volledige juridische due diligence door een onafhankelijke
              Spaanse advocaat — volledig gecoördineerd door Nordic Move.
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
              te maken. Wij coördineren een onafhankelijke technische
              woninginspectie met document- en registratiescreening en werken
              daarnaast met een onafhankelijke Spaanse advocaat voor de
              volledige juridische due diligence.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Op basis van beide professionele beoordelingen brengen we de
              belangrijkste bevindingen, open vragen en voorwaarden samen en
              geven we een duidelijk aankoopadvies: doorgaan, heroverwegen of
              niet kopen. Nordic Move vervangt noch de surveyor noch de
              advocaat; beiden blijven verantwoordelijk voor hun eigen
              beoordeling en advies.
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
              Wij coördineren een onafhankelijke surveyor voor de technische
              woningbeoordeling en eerste document- en registratiescreening.
              Daarnaast werken we met een onafhankelijke Spaanse advocaat die
              de volledige juridische due diligence uitvoert en uitsluitend
              het belang van de koper behartigt.
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
                De onafhankelijke Spaanse advocaat controleert onder meer het
                eigendom, geregistreerde lasten, mogelijke schulden en
                belastingen, de juridische en planologische status,
                vergunningen, documenten van de eigenaarsgemeenschap,
                koopcontracten en de voorwaarden van de eigendomsoverdracht.
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
                De surveyor beoordeelt en vergelijkt de beschikbare documenten
                en registraties, waaronder de Nota Simple, Catastro, IBI,
                energiecertificaat (CEE), ITE indien relevant,
                makelaarsinformatie en beschikbare vergunningen en licenties.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Ook worden de officiële en gemeten oppervlaktes vergeleken.
                Mogelijk niet-geregistreerde delen van de woning, aanbouwen,
                garages of zwembaden worden gesignaleerd. Het rapport kan
                daarnaast opmerkingen bevatten over planning,
                eigenaarsgemeenschap, Coastal Law en andere relevante factoren.
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
                De onafhankelijke surveyor beoordeelt de zichtbare en
                toegankelijke technische staat van de woning. Dit omvat
                constructie en bouwkwaliteit, vocht, waterindringing en
                zichtbare lekkages, installaties en voorzieningen op
                functioneel niveau, evenals het zwembad en bijgebouwen.
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
              "Nota Simple, Catastro, IBI, CEE en ITE indien relevant",
              "Makelaarsinformatie en beschikbare vergunningen en licenties",
              "Vergelijking van officiële en gemeten oppervlaktes",
              "Signalering van mogelijke niet-geregistreerde onderdelen",
              "Opmerkingen over planning, eigenaarsgemeenschap, Coastal Law en andere relevante factoren",
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
              of risico’s kunnen ontstaan.
            </p>

            <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-700">
              <li>• Eén vast Nordic Move-aanspreekpunt</li>
              <li>• Coördinatie van de onafhankelijke surveyor</li>
              <li>• Selectie en coördinatie van een onafhankelijke Spaanse advocaat</li>
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
            De document- en registratiescreening van de surveyor is een eerste
            beoordeling en signalering op basis van de beschikbare informatie.
            Deze vervangt niet de volledige juridische due diligence of een
            formele bevestiging door de bevoegde autoriteiten. Geen enkele
            inspectie of beoordeling kan garanderen dat een woning volledig
            vrij is van risico’s of verborgen gebreken.
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
