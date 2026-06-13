export const metadata = {
  title: "Eerlijke gids voor het kopen van een woning aan de Costa Blanca Noord",
  description:
    "Een eerlijke gids voor Nederlandse, Duitse en Zwitserse kopers die een woning aan de Costa Blanca Noord overwegen. Lees meer over verborgen kosten, verhuur, geluidsoverlast, elektriciteitsmasten, regels van de eigenaarsvereniging, juridische controles en praktische risico’s vóór de aankoop.",
};

export default function HonestGuideBuyingPropertyCostaBlancaNorthPage() {
  const realLifeChecks = [
    {
      title: "Elektriciteitsmasten en bovengrondse kabels",
      text:
        "Een woning kan er op foto’s prachtig uitzien, maar een nabijgelegen elektriciteitsmast, bovengrondse kabel of transformator kan invloed hebben op het uitzicht, de sfeer van de woning en de toekomstige verkoopbaarheid. Bekijk de woning altijd vanuit verschillende hoeken en controleer de volledige omgeving, niet alleen het uitzicht vanaf het terras.",
    },
    {
      title: "Verkeersgeluid en verborgen drukte",
      text:
        "Sommige woningen voelen tijdens een bezichtiging rustig aan, maar liggen dicht bij een weg die tijdens de spits, in de zomermaanden of in het weekend veel drukker wordt. Bezoek de woning op verschillende momenten van de dag voordat je een definitieve beslissing neemt.",
    },
    {
      title: "Zomerdrukte en toeristische overlast",
      text:
        "Een rustige straat in maart kan in augustus heel anders aanvoelen. In sommige kustgebieden kunnen vakantieverhuur, laat thuiskomende gasten, strandverkeer en seizoensgebonden bars de sfeer sterk veranderen.",
    },
    {
      title: "Steile toegangswegen en dagelijks gebruik",
      text:
        "Veel villa’s aan de Costa Blanca Noord hebben een prachtig uitzicht doordat ze tegen een heuvel zijn gebouwd. Dat kan ook steile wegen, veel trappen, lastig parkeren, hogere onderhoudskosten en een grotere afhankelijkheid van de auto betekenen.",
    },
    {
      title: "Urbanisatie en regels van de eigenaarsvereniging",
      text:
        "Maakt de woning deel uit van een urbanisatie of appartementencomplex, dan kunnen de regels invloed hebben op verhuur, verbouwingen, huisdieren, zwembaden, geluid, parkeren, wijzigingen aan de gevel en de kosten. Controleer altijd de statuten en de recente vergadernotulen van de eigenaarsvereniging.",
    },
    {
      title: "Verwachtingen over verhuur",
      text:
        "Veel kopers krijgen te horen dat een woning verhuurinkomsten kan opleveren. Dat kan kloppen, maar het werkelijke nettoresultaat hangt af van vergunningen, belastingen, makelaarskosten, schoonmaak, onderhoud, verzekeringen, regels van de eigenaarsvereniging, seizoensinvloeden en bezettingsgraad.",
    },
  ];

  const hiddenCosts = [
    {
      title: "Aankoopbelasting en notariskosten",
      text:
        "De aankoopkosten bestaan uit meer dan alleen de vraagprijs. Afhankelijk van de vraag of je een bestaande woning of nieuwbouw koopt, kun je te maken krijgen met overdrachtsbelasting of btw, notariskosten, kosten van het eigendomsregister, juridische kosten, hypotheekkosten, bankkosten en taxatiekosten.",
    },
    {
      title: "Juridische kosten en onderzoek",
      text:
        "Een goede onafhankelijke advocaat is geen overbodige luxe. De advocaat moet onder andere het eigendom, schulden, vergunningen, de stedenbouwkundige status, achterstanden bij de eigenaarsvereniging, verhuurbeperkingen en de overeenstemming met de officiële registers controleren.",
    },
    {
      title: "Bijdragen aan de eigenaarsvereniging",
      text:
        "Appartementen en veel woningen binnen urbanisaties hebben maandelijkse of driemaandelijkse bijdragen. Hiermee worden bijvoorbeeld zwembaden, tuinen, liften, beveiliging, verlichting en gezamenlijk onderhoud betaald. De bijdragen kunnen stijgen wanneer grote werkzaamheden nodig zijn.",
    },
    {
      title: "IBI en gemeentelijke belastingen",
      text:
        "Eigenaren betalen normaal gesproken jaarlijks gemeentelijke onroerendgoedbelasting. De hoogte hangt af van de gemeente, de kadastrale waarde en het type woning. Vraag vóór de aankoop altijd om het meest recente IBI-betalingsbewijs.",
    },
    {
      title: "Verzekeringen",
      text:
        "Een opstalverzekering, inboedelverzekering, aansprakelijkheidsverzekering en verhuurverzekering kunnen allemaal relevant zijn. Wanneer je de woning verhuurt, is een standaardverzekering voor privégebruik mogelijk niet voldoende.",
    },
    {
      title: "Onderhoud en reparaties",
      text:
        "Zwembaden, tuinen, airconditioning, vochtproblemen, terrassen, daken, buitenschilderwerk, apparatuur en beveiligingssystemen hebben onderhoud nodig. Oudere villa’s kunnen veel karakter hebben, maar brengen vaak hogere onderhoudskosten met zich mee.",
    },
    {
      title: "Nutsvoorzieningen en vaste kosten",
      text:
        "Kosten voor elektriciteit, water, internet, alarmsystemen, afvalinzameling, zwembadonderhoud en tuinonderhoud kunnen blijven doorlopen, ook wanneer je de woning niet gebruikt.",
    },
    {
      title: "Beheer van de woning",
      text:
        "Wanneer je niet in de buurt woont, heb je mogelijk iemand nodig die de sleutels beheert, de woning controleert, gasten ontvangt, reparaties regelt, stormschade controleert, de woning ventileert en problemen oplost terwijl jij in het buitenland bent.",
    },
  ];

  const rentalCosts = [
    "Vergunning of registratie voor toeristische verhuur",
    "Mogelijke toestemming of beperkingen van de eigenaarsvereniging",
    "Commissie van een verhuurmakelaar of verhuurplatform",
    "Schoonmaak en waskosten na ieder verblijf",
    "Reparaties als gevolg van het gebruik door gasten",
    "Hoger elektriciteits- en waterverbruik",
    "Een verzekering die geschikt is voor verhuur",
    "Aangifte van inkomstenbelasting in Spanje",
    "Belastingverplichtingen voor niet-ingezetenen",
    "Lege weken buiten het hoogseizoen",
    "Vervanging van meubels, beddengoed en apparatuur",
    "Lokale regels die in de loop van de tijd kunnen veranderen",
  ];

  const legalChecks = [
    {
      title: "Nota Simple uit het eigendomsregister",
      text:
        "Dit document moet het eigendom, geregistreerde lasten, hypotheken en andere belangrijke gegevens uit het eigendomsregister bevestigen. Laat het vóór ondertekening of betaling altijd beoordelen door een onafhankelijke advocaat.",
    },
    {
      title: "Kadastrale informatie",
      text:
        "Het Spaanse kadaster bevat fysieke en fiscale informatie over de woning. Je advocaat moet de kadastrale gegevens vergelijken met het eigendomsregister en met de werkelijke situatie ter plaatse.",
    },
    {
      title: "Legaliteit van de bebouwing",
      text:
        "Uitbouwen, zwembaden, gastenverblijven, overdekte terrassen en garages moeten worden gecontroleerd. Een woning kan volledig afgewerkt lijken, terwijl bepaalde onderdelen juridisch nog niet correct zijn geregistreerd.",
    },
    {
      title: "Schulden bij de eigenaarsvereniging",
      text:
        "Vraag bij appartementen en urbanisaties om een bevestiging dat de verkoper alle bijdragen aan de eigenaarsvereniging heeft betaald. Openstaande schulden kunnen na de aankoop een ernstig probleem vormen.",
    },
    {
      title: "Toestemming voor verhuur",
      text:
        "Ga er nooit van uit dat je een woning mag verhuren omdat vergelijkbare woningen in de omgeving online worden aangeboden. Controleer de regionale regels, gemeentelijke regels, toeristische registratie, statuten van de eigenaarsvereniging en recente wetswijzigingen.",
    },
    {
      title: "Energie-, water- en nutscontracten",
      text:
        "Controleer of de woning over normale en legale aansluitingen beschikt en of aanpassingen nodig zijn voor comfortabel gebruik, verhuur of permanente bewoning.",
    },
  ];

  const areaWarnings = [
    {
      area: "Moraira",
      text:
        "Moraira kan uitstekend geschikt zijn voor rustig wonen in een villa. Controleer wel de bereikbaarheid op heuvels, de afhankelijkheid van een auto, het onderhoud van de villa, de parkeerdruk in de zomer en of er buiten het hoofdseizoen voldoende activiteit is.",
    },
    {
      area: "Jávea",
      text:
        "Jávea biedt meer levendigheid gedurende het hele jaar, maar de ervaring verschilt sterk tussen Arenal, de haven, de oude stad, Montgó en de villawijken. Controleer verkeer, geluid, toeristische drukte en of de specifieke buurt bij je past.",
    },
    {
      area: "Altea",
      text:
        "Altea is sfeervol en prachtig, maar de bereikbaarheid van de oude stad, parkeermogelijkheden, trappen, hoogteverschillen, renovatiebeperkingen en toeristische drukte moeten zorgvuldig worden gecontroleerd.",
    },
    {
      area: "Benissa",
      text:
        "Benissa kan veel ruimte en privacy bieden, maar sommige woningen liggen landelijker en meer afgelegen. Controleer de toegangswegen, voorzieningen, afstand tot winkels, onderhoud, nutsvoorzieningen en of de omgeving geschikt is voor je dagelijkse leven.",
    },
    {
      area: "Calpe",
      text:
        "Calpe kan praktisch zijn voor appartementen en wonen nabij het strand, maar sommige gebieden zijn drukker en sterker seizoensgebonden. Controleer de bouwkwaliteit, regels van de eigenaarsvereniging, toeristische drukte, liften, parkeren en geluidsoverlast.",
    },
    {
      area: "Dénia",
      text:
        "Dénia biedt het hele jaar door goede voorzieningen, restaurants en dagelijks leven. Vergelijk wel de verschillende strandzones, het centrum, verkeer, parkeermogelijkheden, de leeftijd van gebouwen en de seizoensverschillen.",
    },
  ];

  const questions = [
    "Is de woning in de huidige vorm volledig legaal, inclusief uitbouwen, zwembad, terrassen en bijgebouwen?",
    "Komt de woning overeen met de gegevens in het eigendomsregister en het kadaster?",
    "Zijn er elektriciteitsmasten, bovengrondse kabels, drukke wegen, bars, bouwpercelen of commerciële gebieden in de buurt?",
    "Heb je de woning ’s avonds, vroeg in de ochtend en in het weekend bezocht?",
    "Voelt de omgeving ook buiten het zomerseizoen goed aan?",
    "Zijn er regels van de eigenaarsvereniging over vakantieverhuur, huisdieren, geluid, verbouwingen of uiterlijke wijzigingen?",
    "Is toeristische verhuur toegestaan volgens de regionale regels, gemeentelijke regels en de eigenaarsvereniging?",
    "Wat zijn de werkelijke jaarlijkse kosten, inclusief belastingen, verzekeringen, nutsvoorzieningen, onderhoud en beheer?",
    "Wat blijft er bij verhuur werkelijk over na belastingen, commissie, schoonmaak, reparaties, lege weken en slijtage?",
    "Blijft deze woning praktisch wanneer je ouder of minder mobiel wordt of alleen komt te wonen?",
    "Hoe ver zijn artsen, apotheken, supermarkten, banken, restaurants en dagelijkse voorzieningen?",
    "Is de woning later eenvoudig door te verkopen aan een volgende internationale koper?",
  ];

  const officialSources = [
    {
      label:
        "BOE / DOGV — Decreto-ley 9/2024 over toeristische woningen in de regio Valencia",
      href: "https://www.boe.es/buscar/doc.php?id=DOGV-r-2024-90168",
    },
    {
      label:
        "Turisme Comunitat Valenciana — actualisering van de regelgeving voor toeristische woningen",
      href: "https://www.turisme.gva.es/opencms/opencms/turisme/es/contents/home/noticia/noticia_1725542158000.html",
    },
    {
      label:
        "Spaans Ministerie van Volkshuisvesting — toestemming van de eigenaarsvereniging voor nieuwe toeristische appartementen",
      href: "https://www.mivau.gob.es/el-ministerio/sala-de-prensa/noticias/mar-01042025-1647",
    },
    {
      label:
        "Spaanse belastingdienst — inkomstenbelasting voor niet-ingezetenen bij verhuur van toeristische appartementen",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/vivienda-otros-inmuebles/tributacion-arrendador-viviendas-otros-inmuebles/tributacion-alquiler-apartamentos-turisticos/impuesto-sobre-renta-no-residentes.html",
    },
    {
      label:
        "Spaanse belastingdienst — btw bij toeristische verhuur met hotelachtige diensten",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/iva/iva-operaciones-inmobiliarias/alquilo-apartamento-turistico-tengo-que-iva.html",
    },
    {
      label:
        "Spaanse belastingdienst — btw of overdrachtsbelasting bij de aankoop van een woning",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
    },
    {
      label:
        "Spaans eigendomsregister — informatie voor internationale woningkopers",
      href: "https://sede.registradores.org/contenido/buyingahouse/",
    },
    {
      label: "Spaans kadaster — officiële kadastrale informatie",
      href: "https://www.catastro.hacienda.gob.es/ayuda/english_ovc.htm",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Eerlijke gids voor het kopen van een woning aan de Costa Blanca Noord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Eerlijke kopersgids
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              De eerlijke gids voor het kopen van een woning aan de Costa Blanca Noord.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              Kosten, verhuur, geluidsoverlast, elektriciteitsmasten, regels van
              de eigenaarsvereniging en praktische controles die Nederlandse,
              Duitse en Zwitserse kopers moeten begrijpen voordat zij een woning
              in Spanje kopen.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Vraag je persoonlijke Area Match aan
              </a>

              <a
                href="/services/discovery-trips"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Ontdek de Buyer Discovery Trip
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
                Kopen met open ogen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Een woning kopen in Spanje kan een prachtige beslissing zijn.
                Maar alleen wanneer je eerst de praktische werkelijkheid begrijpt.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Veel Nederlandse, Duitse en Zwitserse kopers worden om goede
                redenen verliefd op de Costa Blanca Noord: het klimaat, de zee,
                de restaurants, de ontspannen levensstijl, de internationale
                gemeenschap en de mogelijkheid om meer tijd buiten door te brengen.
              </p>

              <p className="mt-6">
                Een goede aankoop draait echter niet alleen om zeezicht, een
                zwembad of een mooi terras. De werkelijke kwaliteit van een
                woning zit vaak in details die tijdens de eerste bezichtiging
                niet opvallen: elektriciteitsmasten, verkeersgeluid, regels van
                de eigenaarsvereniging, verhuurbeperkingen, jaarlijkse kosten,
                onderhoud, toegangswegen, juridische status en de sfeer buiten
                het hoogseizoen.
              </p>

              <p className="mt-6">
                Deze gids is niet bedoeld om kopers bang te maken. Het doel is
                om je te helpen betere vragen te stellen voordat je koopt:
                minder verrassingen, betere beslissingen en een woning die nog
                steeds goed voelt wanneer de eerste emotie van de bezichtiging
                is verdwenen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KORT ANTWOORD */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Kort antwoord
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            De grootste risico’s zijn meestal niet spectaculair. Het zijn
            praktische, juridische en financiële details die niet vroeg genoeg
            zijn gecontroleerd.
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
              Verder kijken dan de foto’s
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Een woningadvertentie laat de woning zien. Niet het dagelijkse
              leven rondom de woning.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Online woningadvertenties zijn ontworpen om interesse te wekken.
              Ze tonen het zwembad, het terras, de gerenoveerde keuken, het
              zeezicht en de beste hoeken van de woning. Dat is normaal. Maar ze
              laten niet altijd zien hoe het werkelijk is om daar te wonen.
            </p>

            <p className="mt-6">
              Kijk daarom verder dan de woning zelf. Wat bevindt zich achter het
              huis? Ligt er een bouwperceel naast? Staan er elektriciteitsmasten
              in de buurt? Is de weg werkelijk rustig of alleen tijdens de
              bezichtiging? Zijn er bars, vakantieappartementen of
              evenementenlocaties in de omgeving? Ligt de woning in een rustige
              woonwijk of verandert de omgeving volledig in de zomer?
            </p>

            <p className="mt-6">
              Dit is vooral belangrijk voor oudere kopers die rust,
              voorspelbaarheid en comfort zoeken. Een prachtige woning kan
              alsnog veel stress opleveren wanneer de bereikbaarheid lastig is,
              het onderhoud hoog, de geluidsoverlast seizoensgebonden of de
              basisvoorzieningen te ver weg zijn.
            </p>
          </div>
        </div>
      </section>

      {/* VERBORGEN KOSTEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Werkelijke kosten
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Verborgen kosten die kopers vaak onderschatten.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            De aankoopprijs is slechts het begin. Vóór de aankoop moet je zowel
            de totale aankoopkosten als de jaarlijkse eigendomskosten begrijpen.
            Sommige kosten zijn voorspelbaar. Andere hangen af van het type
            woning, de locatie, de ouderdom, de eigenaarsvereniging, de
            hypotheekconstructie en de vraag of je wilt verhuren.
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
            Je woning verhuren
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Mag je jouw Spaanse woning verhuren? Soms wel, maar ga er nooit
            automatisch van uit.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-white/75">
              <p>
                Veel kopers vragen: “Kunnen we de woning verhuren wanneer we er
                zelf geen gebruik van maken?” Het eerlijke antwoord is:
                mogelijk, maar het hangt af van de woning, de regio, de
                gemeente, de regels van de eigenaarsvereniging, het type gebouw
                en de precieze verhuurvorm.
              </p>

              <p className="mt-6">
                In de regio Valencia is toeristische verhuur gereguleerd en zijn
                de regels de afgelopen jaren gewijzigd. Kopers moeten
                controleren of toeristische registratie mogelijk is, of de
                woning aan de vereiste voorwaarden voldoet en of er lokale
                beperkingen of beperkingen van de eigenaarsvereniging gelden.
              </p>

              <p className="mt-6">
                Bij appartementen en woningen in gebouwen met een Comunidad de
                Propietarios zijn de regels van de eigenaarsvereniging bijzonder
                belangrijk. Voor nieuwe toeristische verhuur kan uitdrukkelijke
                toestemming van de eigenaarsvereniging nodig zijn. Bestaande
                situaties en overgangsregels moeten door een advocaat worden
                gecontroleerd.
              </p>

              <p className="mt-6">
                De grootste fout is een woning kopen op basis van verwachte
                verhuurinkomsten zonder eerst vast te stellen of verhuur
                juridisch, praktisch en financieel realistisch is.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h3 className="font-serif text-3xl text-white">
                Verhuurkosten en controles
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
              De werkelijkheid van nettoverhuur
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Wat houd je werkelijk over na de verhuur van je Spaanse woning?
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Bruto-verhuurinkomsten kunnen aantrekkelijk klinken. Het
              belangrijkste is echter niet de huurprijs per week, maar het
              bedrag dat overblijft na belastingen, commissie, schoonmaak,
              reparaties, nutsvoorzieningen, verzekeringen, onderhoud, lege
              weken en beheer.
            </p>

            <p className="mt-6">
              Een woning kan in de zomer een aantal weken goed worden verhuurd,
              terwijl de eigenaar het hele jaar door bijdragen aan de
              eigenaarsvereniging, IBI, verzekeringen, reparaties,
              platformcommissie, beheer, schoonmaak, waskosten, sleutelbeheer,
              airconditioning, zwembadonderhoud en inkomstenbelasting moet betalen.
            </p>

            <p className="mt-6">
              Niet-ingezeten eigenaren moeten ook rekening houden met Spaanse
              belastingverplichtingen. De Spaanse belastingdienst verstrekt
              specifieke informatie over inkomstenbelasting voor
              niet-ingezetenen, waaronder Modelo 210 en verschillende tarieven
              afhankelijk van het land waar de eigenaar woont. Wanneer
              hotelachtige diensten worden aangeboden, kan ook btw relevant worden.
            </p>

            <p className="mt-6">
              Behandel verwachte verhuurinkomsten daarom als een serieuze
              berekening en niet als een belofte. Vraag vóór de aankoop om
              realistische jaarcijfers en laat deze controleren door een
              onafhankelijke belastingadviseur of juridisch specialist.
            </p>
          </div>
        </div>
      </section>

      {/* VILLA VS APPARTEMENT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Type woning
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Villa’s en appartementen hebben verschillende risico’s.
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-[#f6f1ea] p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Risico’s van een villa
              </h3>

              <p className="mt-6 leading-relaxed text-stone-600">
                Villa’s bieden privacy, ruimte en onafhankelijkheid. Daar staat
                meer verantwoordelijkheid tegenover: zwembadonderhoud,
                tuinonderhoud, beveiliging, dakreparaties, vochtcontroles,
                buitenschilderwerk, toegangswegen, steunmuren, afwatering en een
                hoger energie- en waterverbruik.
              </p>

              <p className="mt-6 leading-relaxed text-stone-600">
                Controleer ook of alle delen van de villa legaal zijn, of
                uitbreidingen correct zijn geregistreerd en of het perceel, het
                zwembad, het gastenverblijf en de terrassen overeenkomen met de
                officiële gegevens.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Risico’s van een appartement
              </h3>

              <p className="mt-6 leading-relaxed text-stone-600">
                Appartementen kunnen eenvoudiger te onderhouden en praktisch
                zijn wanneer je de woning regelmatig onbeheerd achterlaat. Je
                krijgt echter te maken met regels van de eigenaarsvereniging,
                gezamenlijke kosten, mogelijke verhuurbeperkingen, geluid van
                buren, liften, gemeenschappelijke zwembaden en besluiten van
                andere eigenaren.
              </p>

              <p className="mt-6 leading-relaxed text-stone-600">
                Controleer vóór de aankoop altijd de statuten, recente
                vergadernotulen, jaarrekeningen, geplande werkzaamheden,
                schulden, de staat van de lift, parkeerrechten en de
                mogelijkheden voor vakantieverhuur.
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
              Praktijkcheck per omgeving
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Wat moet je controleren in iedere plaats aan de Costa Blanca Noord?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Er bestaat geen perfecte plaats. Iedere omgeving heeft sterke
              punten en praktische nadelen. Het doel is niet om ieder nadeel te
              vermijden, maar om een omgeving te kiezen waarvan de nadelen
              acceptabel zijn voor jouw manier van leven.
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
            Juridische controles
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Documenten en controles die je niet mag overslaan.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Spanje heeft een duidelijk juridisch aankoopproces, maar dat
            betekent niet dat iedere woning automatisch juridisch correct,
            schuldenvrij of geschikt voor jouw plannen is. Onafhankelijke
            juridische controle is noodzakelijk voordat je een aanbetaling doet
            of een bindende overeenkomst ondertekent.
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
              Belangrijke waarschuwing over verhuur
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Koop niet eerst om pas daarna toestemming voor verhuur te controleren.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              De regels voor toeristische verhuur worden in veel delen van
              Spanje strenger. In de regio Valencia wordt toeristische verhuur
              op regionaal niveau gereguleerd. De wijzigingen uit 2024 hebben
              strengere controles ingevoerd voor registratie en documentatie.
            </p>

            <p className="mt-6">
              In gebouwen met een eigenaarsvereniging kan de Comunidad de
              Propietarios eveneens doorslaggevend zijn. Sinds april 2025 hebben
              eigenaarsverenigingen door aangepaste Spaanse regelgeving een
              sterkere rol gekregen bij de toestemming voor nieuwe toeristische
              appartementen.
            </p>

            <p className="mt-6">
              Vertrouw daarom niet alleen op wat een makelaar, buurman of vorige
              eigenaar vertelt. Laat je advocaat de exacte juridische situatie
              controleren voordat je koopt, zeker wanneer verhuurinkomsten
              onderdeel zijn van je financiële plan.
            </p>
          </div>
        </div>
      </section>

      {/* VRAGENLIJST */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Checklist voor kopers
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Vragen die je moet stellen voordat je een bod uitbrengt.
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
            Slotadvies
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Koop het leven, niet alleen het huis.
          </h2>

          <p className="mt-8 max-w-5xl text-xl leading-relaxed text-white/85">
            Een prachtige woning is alleen een goede aankoop wanneer de
            omgeving, de juridische situatie, de kosten, de regels van de
            eigenaarsvereniging, de verhuurmogelijkheden en het dagelijkse leven
            aansluiten bij jouw werkelijke behoeften.
          </p>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-white/75">
            Voor veel Nederlandse, Duitse en Zwitserse kopers is het verstandig
            om niet direct met woningbezichtigingen te beginnen. Onderzoek eerst
            welke gebieden bij je levensstijl passen, wat je moet vermijden en
            wat gecontroleerd moet worden voordat je verliefd wordt op een woning.
          </p>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-white/75">
            Daarom begint Nordic Move Spain met Area Match en inzicht in de
            lokale levensstijl. Een goede zoektocht naar een woning begint met
            de juiste vragen.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/services/area-match"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Vraag je persoonlijke Area Match aan
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

      {/* DISCLAIMER */}
      <section className="px-8 pb-20">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Belangrijke toelichting
          </p>

          <p className="mt-5 leading-relaxed text-stone-600">
            Dit artikel bevat algemene informatie voor internationale kopers en
            is geen juridisch, fiscaal of financieel advies. Verhuurregels,
            belastingregels, regels van eigenaarsverenigingen en lokale
            voorschriften kunnen veranderen. Schakel altijd een onafhankelijke
            advocaat en gekwalificeerde belastingadviseur in voordat je een
            woning koopt, verhuurt of overeenkomsten ondertekent.
          </p>
        </div>
      </section>

      {/* OFFICIËLE BRONNEN */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Gebruikte officiële bronnen
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Voor deze gids zijn waar mogelijk officiële Spaanse, Valenciaanse
            en institutionele bronnen gebruikt. Kopers moeten de actuele
            situatie altijd laten controleren door een onafhankelijke advocaat,
            belastingadviseur en de relevante overheidsinstantie voordat zij een
            aankoopbeslissing nemen.
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