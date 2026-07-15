export const metadata = {
  title: "Waar een woning kopen aan de Costa Blanca Noord | Beste gebieden",
  description:
    "Ontdek waar u aan de Costa Blanca Noord een woning kunt kopen. Vergelijk Moraira, Jávea, Altea, Benissa, Calpe en Dénia op levensstijl, woningtype, gezinnen, pensionering en internationale kopers.",
};

export default function WaarWoningKopenCostaBlancaNoordPage() {
  const areas = [
    {
      name: "Moraira",
      href: "/nl/regions/moraira",
      bestFor:
        "Rustig kustleven, villa’s, privacy en een hoogwaardige internationale sfeer",
      summary:
        "Moraira past vaak goed bij kopers die een elegante, rustige kustlevensstijl zoeken met villa’s, baaien, restaurants en een meer residentieel gevoel dan in grotere badplaatsen.",
    },
    {
      name: "Jávea",
      href: "/nl/regions/javea",
      bestFor:
        "Gezinnen, actieve kopers, stranden, sport en internationaal leven het hele jaar door",
      summary:
        "Jávea past bij kopers die meer energie, een grotere internationale gemeenschap, stranden, restaurants, sport, scholen in de buurt en meerdere levensstijlzones willen vergelijken.",
    },
    {
      name: "Altea",
      href: "/nl/regions/altea",
      bestFor:
        "Artistieke charme, zeezicht, cultuur, elegantie en een langzamer mediterraan ritme",
      summary:
        "Altea is aantrekkelijk voor kopers die schoonheid, sfeer in de oude stad, restaurants, cultuur, zeezicht en een verfijnde mediterrane omgeving waarderen.",
    },
    {
      name: "Benissa",
      href: "/nl/regions/benissa",
      bestFor:
        "Ruimte, privacy, landelijk wonen, authentiek Spanje en verborgen baaien",
      summary:
        "Benissa is geschikt voor kopers die meer grond, privacy, landelijke charme en toegang tot kustbaaien zoeken, zonder in een drukke badplaats te wonen.",
    },
    {
      name: "Calpe",
      href: "/nl/regions/calpe",
      bestFor:
        "Appartementen, direct aan het strand wonen, nieuwbouwprojecten, jachthavenleven en gemak",
      summary:
        "Calpe is een sterke optie voor kopers die stranden, zeezicht, restaurants, appartementen, nieuwere gebouwen en een actievere kustsfeer zoeken.",
    },
    {
      name: "Dénia",
      href: "/nl/regions/denia",
      bestFor:
        "Stadsleven het hele jaar door, gastronomie, haven, voorzieningen, stranden en dagelijks gemak",
      summary:
        "Dénia past bij kopers die een echte, levendige kuststad zoeken met restaurants, lokale voorzieningen, stranden, havenleven, cultuur en meer activiteit het hele jaar door.",
    },
  ];

  const buyerTypes = [
    {
      title: "Beste keuze voor gezinnen",
      text:
        "Jávea en Dénia zijn voor gezinnen vaak praktische uitgangspunten, omdat zij meer voorzieningen, activiteiten en schoolmogelijkheden in de buurt bieden, ook buiten het hoogseizoen. Moraira en Benissa kunnen ook goed bij gezinnen passen wanneer rust, ruimte en villaleven belangrijker zijn.",
    },
    {
      title: "Beste keuze voor pensionering",
      text:
        "Moraira, Altea en Dénia zijn vaak aantrekkelijk voor gepensioneerden, maar om verschillende redenen. Moraira voelt rustig en hoogwaardig aan, Altea biedt schoonheid en cultuur, en Dénia biedt meer dagelijks gemak en stadsleven het hele jaar door.",
    },
    {
      title: "Beste keuze voor appartementen en nieuwbouw",
      text:
        "Calpe is meestal een van de duidelijkste opties voor kopers die appartementen, wonen direct aan het strand, zeezicht en nieuwere ontwikkelingen zoeken. Dénia kan ook praktische appartementopties bieden in de buurt van voorzieningen en stranden.",
    },
    {
      title: "Beste keuze voor villa’s en privacy",
      text:
        "Moraira, Benissa en delen van Jávea zijn vaak sterker voor kopers die vrijstaande villa’s, privacy, uitzicht en residentiële woonwijken zoeken. Benissa kan een landelijker en ruimer gevoel bieden.",
    },
  ];

  const officialSources = [
    {
      label: "Toerisme Teulada-Moraira",
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
      label: "Ecologische kustroute Benissa - Comunitat Valenciana",
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
          alt="Waar een woning kopen aan de Costa Blanca Noord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Noord gids
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Waar een woning kopen aan de Costa Blanca Noord.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              Een uitgebreide gids voor internationale kopers die Moraira,
              Jávea, Altea, Benissa, Calpe en Dénia vergelijken voordat zij
              beslissen waar zij in Spanje een woning willen kopen.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/nl/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Vraag uw Area Match aan
              </a>

              <a
                href="/nl/regions"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Regio’s vergelijken
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
                Eerst de omgeving, dan de woning
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                De belangrijkste beslissing is niet altijd de woning. Het is de
                omgeving eromheen.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Veel internationale kopers beginnen hun zoektocht met villa’s,
                appartementen en zeezicht. Dat lijkt logisch, maar kan tot de
                verkeerde beslissing leiden. Een mooie woning op de verkeerde
                plek kan snel frustrerend worden wanneer levensstijl,
                voorzieningen, scholen, reistijden of gemeenschap niet bij het
                dagelijks leven passen.
              </p>

              <p className="mt-6">
                De Costa Blanca Noord is niet één enkele levensstijl. Moraira,
                Jávea, Altea, Benissa, Calpe en Dénia trekken ieder een ander
                type koper aan. Sommige gebieden voelen rustig en residentieel.
                Andere zijn actiever, stedelijker, socialer, artistieker,
                landelijker of meer gericht op gezinnen.
              </p>

              <p className="mt-6">
                Deze gids helpt u de belangrijkste gebieden te vergelijken
                voordat u een woning aan de Costa Blanca Noord koopt, zodat u
                beter begrijpt welke plaats kan passen bij uw doelen, budget,
                gezinssituatie en langetermijnplannen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Kort antwoord
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            De beste plaatsen om een woning te kopen aan de Costa Blanca Noord.
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
              Woning kopen in Spanje
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Waarom de juiste plaats belangrijker is dan de eerste mooie
              woning.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Wanneer kopers online zoeken, lijken veel woningen aantrekkelijk:
              villa’s met zeezicht, moderne appartementen, gerenoveerde
              dorpshuizen en nieuwbouwwoningen. Online advertenties laten echter
              zelden zien hoe het echt voelt om op een plek te wonen.
            </p>

            <p className="mt-6">
              De echte vragen zijn praktischer. Heeft u dagelijks een auto
              nodig? Is de plaats actief in de winter? Zijn restaurants, artsen,
              scholen en voorzieningen dichtbij? Voelt het gebied internationaal
              of juist meer lokaal? Is het gewenste woningtype daar gebruikelijk?
              Is de omgeving geschikt voor permanent wonen, vakantie,
              pensionering, gezinsleven of investering?
            </p>

            <p className="mt-6">
              Daarom adviseren wij om eerst de omgeving te kiezen en pas daarna
              de woningzoektocht te verfijnen. Zodra de juiste omgeving helder
              is, wordt de zoektocht gerichter, realistischer en veel minder
              stressvol.
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
            Moraira: rustig, elegant en gericht op villawonen.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Moraira is een van de meest gewilde gebieden voor kopers die een
                rustigere, hoogwaardige kustlevensstijl zoeken. Het behoort tot
                Teulada-Moraira, waar het historische Teulada landinwaarts en
                het kustgebied Moraira lokale geschiedenis en mediterraan wonen
                met elkaar verbinden.
              </p>

              <p className="mt-6">
                De officiële toeristische informatie van Teulada-Moraira
                benadrukt ongeveer 8 kilometer kustlijn, met stranden en baaien
                die bekendstaan om waterkwaliteit en een mooie natuurlijke
                omgeving. Voor woningkopers verklaart deze kust waarom Moraira
                populair blijft bij internationale kopers die villa’s, privacy
                en een rustige woonbasis zoeken.
              </p>

              <p className="mt-6">
                Moraira is meestal niet de beste keuze voor kopers die een
                stedelijk gevoel, nachtleven of een grote appartementmarkt
                zoeken. Het past beter bij kopers die rust, restaurants,
                woonwijken met zeezicht, villaleven en een gevestigde
                internationale gemeenschap waarderen.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Moraira is vaak het meest geschikt voor:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Villakopers die privacy en een hoogwaardige sfeer wensen</li>
                <li>• Gepensioneerden die rustig kustleven zoeken</li>
                <li>• Kopers van een tweede woning die een verzorgde omgeving willen</li>
                <li>• Kopers die lage bebouwing verkiezen boven stedelijke dichtheid</li>
                <li>• Mensen die restaurants en baaien willen zonder grootstedelijk gevoel</li>
              </ul>

              <a
                href="/nl/regions/moraira"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Ontdek Moraira →
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
            Jávea: levendig, internationaal en vol variatie in levensstijl.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-white/75">
              <p>
                Jávea, ook wel Xàbia genoemd, is een van de sterkste
                lifestyleplaatsen aan de Costa Blanca Noord. De plaats biedt een
                mix van strandleven, restaurants, sport, gezinsactiviteiten,
                baaien, internationale bewoners en meerdere verschillende
                woningzones.
              </p>

              <p className="mt-6">
                Comunitat Valenciana benadrukt de baaien van Xàbia/Jávea,
                waaronder Sardinera, Granadella, El Tangó, El Ministro en
                Ambolo, met helder water, kliffen en rotsen die de kust
                aantrekkelijk maken voor duiken en activiteiten aan zee.
              </p>

              <p className="mt-6">
                Jávea ligt bovendien dicht bij het natuurpark Montgó. Het
                officiële toerismeportaal van Spanje beschrijft de Montgó als
                een kalksteenmassief tussen Dénia en Jávea dat tot 753 meter
                hoogte reikt. Dit geeft het gebied naast de kustidentiteit ook
                een sterke natuurlijke identiteit.
              </p>

              <p className="mt-6">
                Voor kopers is Jávea vaak socialer en actiever dan Moraira of
                Benissa. Het kan goed passen bij gezinnen, actieve
                gepensioneerden, remote workers en kopers die restaurants,
                clubs, stranden en een zichtbare internationale gemeenschap
                zoeken.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h3 className="font-serif text-3xl text-white">
                Jávea is vaak het meest geschikt voor:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-white/75">
                <li>• Gezinnen die scholen en activiteiten in de buurt willen</li>
                <li>• Kopers die een internationale sfeer het hele jaar door zoeken</li>
                <li>• Mensen die stranden, sport en restaurants waarderen</li>
                <li>• Remote workers en ondernemers</li>
                <li>• Kopers die villa’s, stadsleven en kustgebieden willen vergelijken</li>
              </ul>

              <a
                href="/nl/regions/javea"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Ontdek Jávea →
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
            Altea: artistiek, landschappelijk mooi en rustig verfijnd.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Altea voelt anders aan dan veel andere plaatsen aan de Costa
                Blanca Noord. De plaats staat bekend om cultuur, uitzichten,
                restaurants, witgekalkte straatjes en een meer artistieke
                mediterrane sfeer.
              </p>

              <p className="mt-6">
                Comunitat Valenciana beschrijft de route door de oude stad van
                Altea richting Plaza de la Iglesia en de parochiekerk Nuestra
                Señora del Consuelo, die bekendstaat om haar kenmerkende
                blauw-wit keramisch bedekte koepel. Deze oude-stadsidentiteit is
                een van de belangrijkste redenen waarom Altea kopers aantrekt
                die schoonheid, sfeer en karakter waarderen.
              </p>

              <p className="mt-6">
                Altea kan een goede keuze zijn voor kopers die iets verfijnders
                zoeken dan een gewone badplaats, maar meer cultuur en visuele
                bijzonderheid wensen dan in een puur residentieel villengebied.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Altea is vaak het meest geschikt voor:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Kopers die cultuur, design en sfeer waarderen</li>
                <li>• Mensen die zeezicht en charme van de oude stad zoeken</li>
                <li>• Gepensioneerden die schoonheid en restaurants dichtbij willen</li>
                <li>• Kopers die elegantie verkiezen boven resortenergie</li>
                <li>• Kopers van een tweede woning die een artistiekere omgeving zoeken</li>
              </ul>

              <a
                href="/nl/regions/altea"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Ontdek Altea →
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
            Benissa: authentiek, ruim en dicht bij verborgen baaien.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-700">
              <p>
                Benissa is een van de interessantste gebieden voor kopers die
                meer ruimte, privacy en authenticiteit zoeken. Het combineert
                een historische plaats landinwaarts, landelijke gebieden,
                villazones en een landschappelijk mooie kust tussen Moraira en
                Calpe.
              </p>

              <p className="mt-6">
                De officiële toeristische website van de Comunitat Valenciana
                beschrijft de ecologische kustroute van Benissa als een route
                langs de 2,5 mijl lange kustlijn van de plaats, voorbij kliffen
                en rustige baaien. Ook de officiële toeristische website van
                Benissa benadrukt de kust, baaien en natuurlijke omgeving.
              </p>

              <p className="mt-6">
                Benissa is meestal niet de eerste keuze voor kopers die vanuit
                een appartement naar een levendige boulevard willen lopen. Het
                is sterker voor mensen die privacy, grond, uitzicht, landschap,
                authenticiteit en goede toegang tot omliggende plaatsen zoeken.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/70 p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Benissa is vaak het meest geschikt voor:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Villakopers die ruimte en privacy wensen</li>
                <li>• Mensen die landelijke charme verkiezen boven resortenergie</li>
                <li>• Kopers die toegang tot Moraira en Calpe willen</li>
                <li>• Natuurliefhebbers en wandelaars</li>
                <li>• Gezinnen of gepensioneerden die een rustigere basis zoeken</li>
              </ul>

              <a
                href="/nl/regions/benissa"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Ontdek Benissa →
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
            Calpe: direct aan het strand wonen, appartementen en een actievere
            sfeer.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Calpe is een van de bekendste plaatsen aan de Costa Blanca
                Noord. Het is stedelijker, sterker gericht op appartementen en
                actiever dan rustigere gebieden zoals Benissa of Moraira.
              </p>

              <p className="mt-6">
                De officiële toeristische informatie van Calpe beschrijft de
                Peñón de Ifach als een kalkstenen rots van 50.000 m², die 332
                meter boven zee uitsteekt en ongeveer een kilometer de zee in
                loopt. De Peñón is een van de bekendste natuurlijke herkenningspunten
                van de Costa Blanca en bepaalt sterk de identiteit van Calpe.
              </p>

              <p className="mt-6">
                Calpe biedt daarnaast stranden, baaien, restaurants, een
                vissershaven, jachthavenleven en een grotere keuze aan
                appartementen en moderne gebouwen. Voor kopers die zeezicht,
                strandtoegang, comfort en een eenvoudiger lock-up-and-leave
                woning zoeken, kan Calpe goed passen.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Calpe is vaak het meest geschikt voor:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <li>• Appartementkopers en lock-up-and-leave eigenaren</li>
                <li>• Kopers die nieuwbouwprojecten zoeken</li>
                <li>• Mensen die stranden, restaurants en comfort willen</li>
                <li>• Verhuurgerichte kopers die bekende locaties zoeken</li>
                <li>• Kopers die een actievere kustomgeving verkiezen</li>
              </ul>

              <a
                href="/nl/regions/calpe"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Ontdek Calpe →
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
            Dénia: stadsleven het hele jaar door, gastronomie en dagelijks
            gemak.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-white/75">
              <p>
                Dénia is een van de meest complete opties aan de Costa Blanca
                Noord voor kopers die een echte stad willen, niet alleen een
                vakantieplaats. Dénia biedt stranden, havenleven, restaurants,
                voorzieningen, historische straten, lokale activiteit en een
                sterker ritme gedurende het hele jaar.
              </p>

              <p className="mt-6">
                Comunitat Valenciana beschrijft Dénia als UNESCO-stad van de
                gastronomie, met een keuken op basis van verse vis, lokale
                Valenciaanse producten en gerechten zoals arròs a banda, gamba
                roja en suquet de peix. Ook UNESCO noemt Dénia in zijn Creative
                Cities Network voor gastronomie.
              </p>

              <p className="mt-6">
                Dénia is vaak een sterke optie voor kopers die comfort,
                restaurants, winkels, toegang tot zorg, verbindingen en dagelijks
                leven buiten het zomerseizoen zoeken. Het voelt misschien minder
                exclusief dan Moraira of Altea, maar is vaak praktischer voor
                permanent wonen.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h3 className="font-serif text-3xl text-white">
                Dénia is vaak het meest geschikt voor:
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-white/75">
                <li>• Kopers die stadsleven het hele jaar door willen</li>
                <li>• Fijnproevers en mensen die lokale restaurants waarderen</li>
                <li>• Gezinnen die voorzieningen en activiteiten dichtbij willen</li>
                <li>• Gepensioneerden die comfort en loopafstand waarderen</li>
                <li>• Kopers die centrum en strandgebieden willen vergelijken</li>
              </ul>

              <a
                href="/nl/regions/denia"
                className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#c8a063]"
              >
                Ontdek Dénia →
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
              Kiezen op levensstijl
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Welk gebied aan de Costa Blanca Noord past bij uw situatie?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Het beste gebied hangt af van hoe u wilt leven. Een gezin met
              schoolgaande kinderen, een gepensioneerd stel, een remote worker
              en een koper van een tweede woning kunnen allemaal verschillende
              locaties nodig hebben, zelfs met hetzelfde budget.
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
              Hoe beslist u?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Vragen die u moet stellen voordat u beslist waar u koopt.
            </h2>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <div className="grid gap-5">
              {[
                "Gaat u het hele jaar, een deel van het jaar of vooral tijdens vakanties in Spanje wonen?",
                "Wilt u een villa, appartement, dorpshuis, nieuwbouwwoning of landelijke woning?",
                "Heeft u scholen, zorg, dagelijkse voorzieningen of openbaar vervoer in de buurt nodig?",
                "Geeft u de voorkeur aan een rustige woonomgeving of een socialere, actievere plaats?",
                "Wilt u naar restaurants en winkels kunnen lopen?",
                "Is verhuurpotentieel belangrijk of is de woning vooral voor privégebruik?",
                "Hoe belangrijk zijn zeezicht, privacy, grond, strandtoegang of gemeenschapsleven?",
                "Wilt u vóór uw verhuizing gelijkgestemde internationale kopers leren kennen?",
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
            Veelgemaakte kopersfout
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Verwar een mooie vakantieplaats niet met de juiste plek om te wonen.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-700">
            <p>
              Een plaats kan perfect zijn voor een zomerweek en toch niet passen
              bij wonen het hele jaar door. Sommige gebieden voelen in augustus
              levendig, maar zijn in de winter rustig. Sommige woningen zien er
              online aantrekkelijk uit, maar liggen te ver van voorzieningen.
              Sommige kopers worden verliefd op uitzicht voordat zij
              eigendomskosten, community-regels, rijafstanden, toegang,
              renovatiebehoefte of toekomstige verkoopbaarheid controleren.
            </p>

            <p className="mt-6">
              Daarom begint onze aanpak met Area Match. We kijken eerst naar uw
              levensstijl, vergelijken daarna de gebieden en helpen u vervolgens
              te focussen op het woningtype dat uw toekomstige leven in Spanje
              echt ondersteunt.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vraag Area Match aan
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Nog niet zeker waar u aan de Costa Blanca Noord moet kopen?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Wij helpen internationale kopers Moraira, Jávea, Altea, Benissa,
            Calpe en Dénia te vergelijken op levensstijl, budget,
            gezinssituatie, woningdoelen en langetermijnplannen.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
            Vraag uw Area Match Assessment aan en ontdek welke gebieden kunnen
            passen bij uw toekomstige leven in Spanje — en welke mogelijk minder
            geschikt zijn.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/nl/services/area-match"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Vraag Area Match aan
            </a>

            <a
              href="/nl/services/discovery-trips"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Ontdek de Buyer Discovery Trip
            </a>
          </div>
        </div>
      </section>

      {/* OFFICIAL SOURCES */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Gebruikte officiële bronnen
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Deze gids is waar mogelijk gebaseerd op officiële toeristische en
            institutionele bronnen. Lokale voorzieningen, vastgoedmarkten en
            regels kunnen veranderen. Kopers moeten praktische details daarom
            altijd controleren voordat zij een aankoopbeslissing nemen.
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
