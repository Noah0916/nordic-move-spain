export const metadata = {
  title: "Gratis Area Match Rapport Costa Blanca Noord | Nordic Move Spain",
  description:
    "Ontdek welke plaats, buurt en levensstijl aan de Costa Blanca Noord het beste bij u passen. Vraag uw gratis persoonlijke Area Match & Lifestyle Intelligence Report aan.",
};

export default function AreaMatchPage() {
  const reportItems = [
    "Persoonlijke match met plaatsen en woonwijken",
    "Levensstijl en dagelijkse woonomgeving",
    "Veiligheid en lokale aandachtspunten",
    "Artsen, ziekenhuizen en toegang tot gezondheidszorg",
    "Wellness, golf, sport en recreatiemogelijkheden",
    "Restaurants, beachclubs en lokale cultuur",
    "Internationale scholen en geschiktheid voor gezinnen",
    "Internationale gemeenschappen en sociaal netwerk",
    "Bereikbaarheid, voorzieningen en investeringsmogelijkheden",
  ];

  const journeySteps = [
    {
      number: "01",
      title: "Vul de gratis vragenlijst in",
      text:
        "Door middel van zorgvuldig samengestelde vragen krijgen wij inzicht in uw persoonlijke situatie, woonwensen, levensstijl, budget, interesses en langetermijnplannen.",
    },
    {
      number: "02",
      title: "Ontvang uw persoonlijke rapport",
      text:
        "Wij combineren uw antwoorden met lokale kennis en AI-ondersteunde analyse. U ontvangt een persoonlijk overzicht van de plaatsen, buurten en gemeenschappen die waarschijnlijk het beste bij u passen.",
    },
    {
      number: "03",
      title: "Plan een gratis persoonlijk intakegesprek",
      text:
        "Nadat u het rapport heeft ontvangen, kunnen we tijdens een gratis intake dieper ingaan op uw voorkeuren, vragen en verwachtingen. Zo leren we niet alleen welk gebied bij u past, maar ook welke mensen en contacten voor u relevant kunnen zijn.",
    },
    {
      number: "04",
      title: "Ervaar de geselecteerde gebieden tijdens de tour",
      text:
        "Tijdens de Buyer Discovery Tour bezoekt u zorgvuldig geselecteerde plaatsen en buurten. Afhankelijk van uw profiel kunnen wij u introduceren bij relevante lokale professionals, internationale bewoners en andere kopers met vergelijkbare interesses.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      {/* INTRODUCTIE */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Gratis Area Match &amp; Lifestyle Intelligence Report
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
            Vind eerst de juiste omgeving, voordat u de juiste woning kiest.
          </h1>

          <p className="mt-10 max-w-5xl text-xl leading-relaxed text-stone-600">
            Het vinden van de juiste plaats of woonwijk aan de Costa Blanca
            Noord kan maanden aan online onderzoek, vergelijkingen en bezoeken
            kosten. Een prachtige woning is namelijk niet voldoende wanneer de
            omgeving, dagelijkse levensstijl of gemeenschap uiteindelijk niet
            bij u past.
          </p>

          <p className="mt-6 max-w-5xl text-xl leading-relaxed text-stone-600">
            Daarom begint onze begeleiding met een gratis persoonlijke
            vragenlijst. Met strategische vragen brengen wij uw woonsituatie,
            prioriteiten, budget, interesses en langetermijnplannen in kaart. Wij
            combineren uw antwoorden met onze lokale kennis en AI-ondersteunde
            analysetechnieken om te bepalen welke plaatsen, buurten en
            gemeenschappen het beste aansluiten bij het leven dat u in Spanje
            wilt opbouwen.
          </p>

          <p className="mt-6 max-w-5xl text-xl leading-relaxed text-stone-600">
            Ieder rapport wordt individueel samengesteld. Of u nu permanent naar
            Spanje wilt verhuizen, een tweede woning zoekt, met pensioen gaat of
            mogelijkheden voor een investering onderzoekt: u ontvangt
            gestructureerde en praktische informatie voordat u zich aan een
            specifieke regio of woning verbindt.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/nl/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Vraag uw gratis Area Match Rapport aan
            </a>

            <a
              href="#werkwijze"
              className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Bekijk onze werkwijze
            </a>
          </div>
        </div>
      </section>

      {/* INHOUD VAN HET RAPPORT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Wat uw persoonlijke rapport kan bevatten
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Van levensstijl en gezondheidszorg tot bereikbaarheid en sociale
            aansluiting.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            In plaats van maandenlang zelf losse informatie te verzamelen,
            ontvangt u een helder en gestructureerd overzicht van de gebieden
            die het beste bij uw profiel passen. Daarbij kijken wij verder dan
            alleen woningprijzen of afstand tot het strand.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reportItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f6f1ea] p-5 leading-relaxed text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-600">
            Het rapport combineert een persoonlijke levensstijlmatch met
            praktische lokale informatie. Zo krijgt u niet alleen inzicht in
            waar u een woning zou kunnen kopen, maar vooral in welke omgeving u
            zich op lange termijn waarschijnlijk thuis zult voelen.
          </p>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-stone-600">
            Wij kijken onder andere naar uw behoefte aan rust of sociale
            activiteit, gezondheidszorg, internationale contacten, restaurants,
            natuur, golf, bereikbaarheid, dagelijkse voorzieningen, veiligheid,
            woningtype en mogelijke toekomstige veranderingen in uw leven.
          </p>
        </div>
      </section>

      {/* WERKWIJZE */}
      <section id="werkwijze" className="scroll-mt-24 px-8 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Van gratis rapport naar een persoonlijke kennismaking
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Wij gebruiken uw rapport als startpunt voor een zorgvuldige en
              persoonlijke begeleiding.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Nadat u uw gratis Area Match Rapport heeft ontvangen, kunnen wij
              een gratis persoonlijk intakegesprek met u plannen. Tijdens dit
              gesprek bespreken we de uitkomsten, uw twijfels, wensen en
              verwachtingen uitgebreider.
            </p>

            <p className="mt-6 text-xl leading-relaxed text-stone-600">
              Het doel van deze intake is niet alleen om de juiste gebieden te
              selecteren. Wij willen ook begrijpen welk type mensen,
              professionals en gemeenschap bij u passen. Daardoor kunnen we de
              Buyer Discovery Tour persoonlijker samenstellen en u, waar
              relevant, in contact brengen met mensen die echt iets aan uw
              oriëntatie en toekomstige leven in Spanje kunnen toevoegen.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {journeySteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[32px] bg-white p-8 shadow-sm md:p-9"
              >
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {step.number}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {step.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSOONLIJKE MATCHING TIJDENS DE TOUR */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[420px]">
              <img
                src="/images/discover-card.png"
                alt="Persoonlijke Buyer Discovery Tour aan de Costa Blanca Noord"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="p-10 md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Persoonlijke Buyer Discovery Tour
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Niet alleen gebieden bezoeken, maar ook de juiste mensen
                ontmoeten.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Tijdens de tour ervaart u hoe het dagelijkse leven in de
                geselecteerde plaatsen werkelijk aanvoelt. U bezoekt buurten,
                voorzieningen en locaties die aansluiten bij uw persoonlijke
                profiel, in plaats van een algemene standaardroute te volgen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Op basis van uw rapport en het gratis intakegesprek kunnen wij
                relevante kennismakingen voorbereiden. Denk aan betrouwbare
                lokale professionals, internationale bewoners, ondernemers,
                toekomstige kopers of mensen met gedeelde interesses op het
                gebied van bijvoorbeeld golf, gastronomie, wellness, natuur,
                cultuur of ondernemerschap.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Zo krijgt u niet alleen een beter beeld van de woningmarkt, maar
                ook van het sociale en praktische leven dat u rondom een
                toekomstige woning kunt opbouwen. De eerste vertrouwde contacten
                kunnen daardoor al ontstaan voordat u daadwerkelijk naar Spanje
                verhuist.
              </p>

              <a
                href="/nl/services/discovery-trips"
                className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Ontdek de Buyer Discovery Tour
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WAAROM DIT BELANGRIJK IS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Meer dan een woning zoeken
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              De juiste omgeving bepaalt of Spanje werkelijk als thuis gaat
              voelen.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Een woning kan er op foto's perfect uitzien, terwijl de ligging
              uiteindelijk niet aansluit bij uw dagelijkse leven. Misschien
              zijn voorzieningen te ver weg, is de omgeving in de winter te
              rustig of blijkt het moeilijker dan verwacht om een sociaal
              netwerk op te bouwen.
            </p>

            <p className="mt-6">
              Daarom kijken wij niet alleen naar de woning zelf. Wij beoordelen
              ook de omgeving, bereikbaarheid, levensstijl, lokale voorzieningen,
              sociale mogelijkheden en praktische geschiktheid voor de komende
              jaren.
            </p>

            <p className="mt-6">
              Onze begeleiding helpt u om eerst duidelijkheid te krijgen over
              de juiste plaats en levensstijl. Pas daarna wordt de zoektocht
              naar een passende woning echt gericht, persoonlijk en efficiënt.
            </p>
          </div>
        </div>
      </section>

      {/* SLOT CTA */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 text-center shadow-sm md:p-14 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Begin gratis en zonder verplichtingen
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Ontdek welke plaats, buurt en gemeenschap het beste bij uw toekomst
            in Spanje passen.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
            Vul de vragenlijst in en ontvang uw persoonlijke Area Match &amp;
            Lifestyle Intelligence Report. Daarna kunt u gebruikmaken van een
            gratis intakegesprek waarin we de resultaten bespreken en samen
            bekijken welke volgende stap bij u past.
          </p>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-stone-500">
            Het rapport en de intake helpen ons om een eventuele Buyer Discovery
            Tour zorgvuldig af te stemmen op uw persoonlijke situatie,
            interesses en langetermijnplannen.
          </p>

          <a
            href="/nl/relocation-assessment"
            className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#15202d]"
          >
            Vraag uw gratis Area Match Rapport aan
          </a>
        </div>
      </section>
    </main>
  );
}
