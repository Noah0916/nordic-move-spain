export const metadata = {
  title:
    "Buyer Discovery Trip Costa Blanca Noord | Woning kopen in Spanje",
  description:
    "Neem deel aan een zorgvuldig samengestelde Buyer Discovery Trip aan de Costa Blanca Noord voor Nederlandse, Belgische, Duitse, Zwitserse, Britse, Scandinavische en andere internationale kopers. Ontdek Moraira, Jávea, Altea, Benissa, Calpe en Dénia, ontmoet betrouwbare professionals en ontdek met vertrouwen waar u in Spanje wilt kopen.",
};

export default function BuyerDiscoveryTripPage() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Buyer Discovery Trip aan de Costa Blanca Noord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Buyer Discovery Trip Costa Blanca Noord
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Een persoonlijk samengestelde woning- en levensstijlreis voordat u
              een huis in Spanje koopt.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              Ontdek de regio's, levensstijl, professionals en mensen die deel
              kunnen uitmaken van uw toekomstige leven in Spanje — voordat u een
              beslissing over een woning neemt.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Vraag uw Buyer Discovery Trip aan
              </a>

              <a
                href="/regions"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Ontdek de regio's
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
                Duidelijkheid vóór u beslist
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Een woning kopen in Spanje hoort niet te beginnen met
                willekeurige bezichtigingen.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Voordat u een woning kiest, moet u begrijpen hoe een gebied
                werkelijk aanvoelt, welke levensstijl erbij hoort, hoe het
                aankoopproces werkt, welke kosten u kunt verwachten en of het
                dagelijkse leven in Spanje echt bij u past.
              </p>

              <p className="mt-6">
                Onze Buyer Discovery Trip is een zorgvuldig samengestelde
                driedaagse woning- en levensstijlervaring aan de Costa Blanca
                Noord. De reis is ontwikkeld voor internationale kopers die
                eerst duidelijkheid willen voordat zij een serieuze
                vastgoedbeslissing nemen.
              </p>

              <p className="mt-6">
                Dit is geen standaard bezichtigingsreis. Het is een persoonlijke
                kennismaking met de regio's, betrouwbare professionals, de
                lokale levensstijl en de gemeenschap die onderdeel kunnen worden
                van uw toekomstige leven in Spanje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EERST LEREN WIJ U KENNEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Eerst leren wij u kennen
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Uw reis begint bij uw levensstijl, niet bij woningadvertenties.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Voor uw aankomst starten we met uw gratis Area Match Rapport en
                een gratis persoonlijk intakegesprek. Daarbij kijken we naar uw
                doelen, budget, gezinssituatie, dagelijkse gewoonten,
                interesses, gewenste levensstijl, verhuisplannen en
                langetermijnprioriteiten.
              </p>

              <p className="mt-6">
                Pas wanneer wij uw profiel goed begrijpen, stellen we uw
                persoonlijke programma samen. Zo richten we ons op de gebieden
                die werkelijk bij uw leven passen, in plaats van tijd te
                verspillen aan plaatsen die online aantrekkelijk lijken maar in
                de praktijk niet aansluiten.
              </p>

              <p className="mt-6">
                De intake helpt ons bovendien om te bepalen welke lokale
                professionals, internationale bewoners, ondernemers of andere
                kopers relevant voor u kunnen zijn. Waar passend bereiden we
                deze kennismakingen vooraf voor.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <p className="text-lg leading-relaxed text-stone-700">
                Zoekt u een rustige villa bij Moraira? Een socialer leven in
                Jávea? Een elegante omgeving bij Altea? Ruimte en authenticiteit
                rond Benissa? Appartementen aan zee en nieuwbouw in Calpe? Of
                juist een levendige stad die het hele jaar actief is, zoals
                Dénia?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GELIJKGESTEMDE MENSEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Reis met gelijkgestemde mensen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Ontmoet mensen die mogelijk dezelfde stap overwegen als u.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Afhankelijk van uw voorkeur kan de Buyer Discovery Trip privé
              worden georganiseerd of in een zorgvuldig samengestelde kleine
              groep.
            </p>

            <p className="mt-6">
              Wanneer u aan een groep deelneemt, brengen wij u samen met kopers
              die zich in een vergelijkbare levensfase bevinden of soortgelijke
              doelen hebben. Sommige cliënten kiezen bewust voor een
              internationale groep. Anderen ontmoeten liever kopers uit
              hetzelfde land of met dezelfde taalachtergrond.
            </p>

            <p className="mt-6">
              Wij begeleiden regelmatig Nederlandse, Belgische, Duitse,
              Zwitserse, Britse, Scandinavische en andere internationale kopers
              die een toekomst aan de Costa Blanca Noord onderzoeken.
            </p>

            <p className="mt-6">
              Voor veel cliënten vormen juist deze ontmoetingen een bijzonder
              onderdeel van de reis. Een gezamenlijke lunch, gedeelde ervaring
              of open gesprek kan het begin zijn van toekomstige vriendschappen,
              waardevolle contacten en een sterker gevoel van verbondenheid,
              nog voordat u daadwerkelijk naar Spanje verhuist.
            </p>
          </div>
        </div>
      </section>

      {/* AANKOMST */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vanaf uw aankomst is alles geregeld
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight">
            U komt aan, wij zorgen voor de details.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-3xl">Luchthaventransfer</h3>
              <p className="mt-4 leading-relaxed text-white/75">
                U komt aan op de luchthaven van Alicante, waar een privétransfer
                u comfortabel naar uw hotel of resort brengt.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Verblijf in een 4- of 5-sterrenaccommodatie
              </h3>
              <p className="mt-4 leading-relaxed text-white/75">
                U verblijft in een zorgvuldig geselecteerd boetiekhotel of een
                4- of 5-sterrenresort.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">Persoonlijk welkom</h3>
              <p className="mt-4 leading-relaxed text-white/75">
                Tijdens een ontspannen welkomstmoment bespreken we uw doelen,
                beantwoorden we uw eerste vragen en nemen we het programma van
                de komende dagen met u door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ECHTE REGIO'S */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ontdek het echte Costa Blanca Noord
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Wij laten u meer zien dan alleen de bekende toeristische plaatsen.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Tijdens de Buyer Discovery Trip ervaart u de regio's vanuit het
              perspectief van het dagelijkse leven. We bezoeken de plaatsen die
              voor uw toekomstige levensstijl belangrijk zijn, niet alleen de
              locaties die er mooi uitzien in een brochure.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Moraira</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Rustig en elegant wonen aan de kust, met villa's, baaien en een
                verfijnde residentiële sfeer.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Jávea</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Een levendige internationale levensstijl met stranden,
                restaurants, sport en activiteit gedurende het hele jaar.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Altea</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Cultuur, schoonheid, zeezicht en mediterrane verfijning in een
                artistieke omgeving.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Benissa</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Ruimte, privacy, authenticiteit, landelijk wonen en verborgen
                baaien aan de kust.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Calpe</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Wonen aan het strand, jachthavenleven, appartementen,
                nieuwbouwprojecten en een actievere sfeer.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Dénia</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Gastronomie, havenleven, dagelijkse voorzieningen en een
                levendige stad die het hele jaar actief blijft.
              </p>
            </div>
          </div>

          <p className="mt-12 max-w-4xl text-lg leading-relaxed text-stone-600">
            Wij helpen u de verschillen tussen de gebieden begrijpen:
            sfeer, woningtypen, scholen, gezondheidszorg, reistijden,
            internationale gemeenschap, restaurants, sportmogelijkheden,
            dagelijkse voorzieningen, verhuurmogelijkheden en praktische
            geschiktheid op de lange termijn.
          </p>
        </div>
      </section>

      {/* PROFESSIONALS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ontmoet de professionals die u vóór de aankoop nodig heeft
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Krijg antwoorden voordat u beslissingen neemt.
            </h2>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-stone-600">
              Tijdens uw Buyer Discovery Trip introduceren wij u bij betrouwbare
              onafhankelijke professionals en lokale contacten die u kunnen
              helpen de praktische stappen vóór een aankoop te begrijpen.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Onafhankelijke vastgoedadvocaat",
                "Spaanse notaris",
                "Hypotheekspecialist",
                "Bankcontact",
                "Verzekeringsspecialist",
                "Lokale vastgoedexpert",
                "Verhuisbegeleiding waar relevant",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="font-medium text-[#1e2a3a]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Deze gesprekken zijn bedoeld om u duidelijkheid te geven over het
              juridische proces, hypotheekmogelijkheden, bankvereisten,
              verzekeringen, aankoopkosten, jaarlijkse eigenaarslasten,
              documentatie en veelvoorkomende fouten die internationale kopers
              moeten vermijden.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              U kunt uw vragen rechtstreeks stellen, begrijpen wie waarvoor
              verantwoordelijk is en met een veel duidelijker beeld vertrekken
              van hoe het kopen van vastgoed in Spanje werkelijk verloopt.
            </p>
          </div>
        </div>
      </section>

      {/* LEVENSSTIJL */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Ervaar de levensstijl, niet alleen de woningmarkt
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Een woning is slechts één onderdeel van de beslissing.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
            U wilt ook begrijpen hoe uw leven hier zou kunnen aanvoelen. Daarom
            bevat de Buyer Discovery Trip levensstijlactiviteiten die aansluiten
            bij uw interesses en de regio die u onderzoekt.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Lokale lunches en fine dining",
              "Wijnproeverijen",
              "Golfclubs",
              "Beachclubs",
              "Jachthavens en yachtclubs",
              "Wellness- en spa-ervaringen",
              "Wandel- en natuurroutes",
              "Culturele bezoeken",
              "Zakelijke of netwerkintroducties",
              "Lokale bijeenkomsten",
              "Activiteiten met gelijkgestemde toekomstige bewoners",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                <p className="text-sm font-medium text-[#1e2a3a]">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
            Wij laten u geen algemene versie van Spanje zien. Wij laten u het
            deel van Costa Blanca Noord ervaren dat realistisch bij uw leven zou
            kunnen passen.
          </p>
        </div>
      </section>

      {/* WAT WIJ DOEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Wat wij voor u doen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Wij begeleiden, coördineren en helpen u een betere beslissing te
              nemen.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Wij coördineren de volledige ervaring, begeleiden u door de
              verschillende regio's en introduceren u bij betrouwbare
              onafhankelijke professionals. Zo kunt u weloverwogen beslissingen
              nemen voordat u vastgoed in Spanje koopt.
            </p>

            <p className="mt-6">
              Wij helpen u gebieden te vergelijken, praktische verschillen te
              begrijpen, de juiste vragen te stellen en veelvoorkomende fouten
              te vermijden.
            </p>

            <p className="mt-6">
              Onze rol is niet om u een woning op te dringen. Onze rol is om u
              te helpen een betere beslissing te nemen.
            </p>

            <p className="mt-6">
              Wanneer een gebied niet bij uw profiel past, zeggen wij dat. Als
              een bepaald woningtype juridische, praktische of
              levensstijlproblemen kan veroorzaken, helpen wij u dat te
              begrijpen voordat u zich vastlegt.
            </p>
          </div>
        </div>
      </section>

      {/* INBEGREPEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Wat is inbegrepen
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Uw Buyer Discovery Trip kan alles bevatten wat u nodig heeft voor
            een heldere eerste beslissing.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Gratis persoonlijk intakegesprek vóór aankomst",
              "Persoonlijk levensstijl- en gebiedsprofiel",
              "Persoonlijk samengesteld programma",
              "Luchthaventransfer vanaf Alicante",
              "Verblijf in een zorgvuldig geselecteerd 4- of 5-sterrenhotel of boetiekresort",
              "Begeleide bezoeken aan gebieden aan de Costa Blanca Noord",
              "Kennismakingen met betrouwbare juridische, bancaire, hypotheek- en verzekeringscontacten",
              "Levensstijlactiviteiten afgestemd op uw interesses",
              "Privéreis of kleine groep, afhankelijk van uw voorkeur",
              "Zorgvuldig gekozen kennismakingen met gelijkgestemde kopers en toekomstige bewoners",
              "Tijd voor persoonlijke vragen en beslissingsondersteuning",
              "Duidelijke vervolgstappen na de reis",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white/80 p-5">
                <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NA DE REIS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Wat u na de reis weet
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              U vertrekt niet met vage indrukken, maar met duidelijkheid.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Welke gebieden aan de Costa Blanca Noord bij uw levensstijl passen",
              "Welke gebieden minder geschikt voor u zijn",
              "Welk type woning bij uw budget en doelen past",
              "Wat het aankoopproces in Spanje inhoudt",
              "Welke juridische en financiële onderwerpen aandacht nodig hebben",
              "Hoe het dagelijkse leven na de aankoop eruit zou kunnen zien",
              "Welke professionals u kunnen ondersteunen",
              "Van welk type gemeenschap u deel zou kunnen uitmaken",
              "Of u klaar bent voor de volgende stap",
            ].map((item) => (
              <div key={item} className="rounded-[28px] bg-white p-7 shadow-sm">
                <p className="text-lg leading-relaxed text-stone-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Past deze reis bij u?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Ideaal voor serieuze kopers die Costa Blanca Noord eerst goed willen
            begrijpen voordat zij een woning kiezen.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Internationale kopers die Costa Blanca Noord onderzoeken",
              "Nederlandse, Belgische, Duitse, Zwitserse, Britse, Scandinavische en Engelstalige kopers",
              "Gezinnen die een verhuizing naar Spanje overwegen",
              "Gepensioneerden die een nieuwe levensstijl plannen",
              "Ondernemers en mensen die op afstand werken",
              "Kopers van een tweede woning",
              "Kopers die Moraira, Jávea, Altea, Benissa, Calpe en Dénia vergelijken",
              "Cliënten die professionele begeleiding willen voordat serieuze bezichtigingen beginnen",
              "Mensen die gelijkgestemde toekomstige bewoners willen ontmoeten voordat zij verhuizen",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vraag uw Buyer Discovery Trip aan
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Wanneer u serieus overweegt vastgoed in Spanje te kopen, is de
            belangrijkste beslissing niet de woning.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Het gaat om de omgeving, de levensstijl en de juiste ondersteuning
            om u heen.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
            Vraag uw Buyer Discovery Trip aan en ontdek of Costa Blanca Noord
            werkelijk bij uw toekomst past.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Vraag uw Buyer Discovery Trip aan
          </a>
        </div>
      </section>
    </main>
  );
}
