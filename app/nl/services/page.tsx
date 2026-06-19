export const metadata = {
  title: "Area Match Rapport & Veilig Kopen Costa Blanca Noord | Nordic Move Spain",
  description:
    "Ontdek welke plaats en woonomgeving bij u passen én hoe u daarna met meer zekerheid koopt dankzij het Purchase Safety Report, onafhankelijke controles en een beveiligde aankoopomgeving.",
};

export default function AreaMatchPage() {
  const reportItems = [
    "Persoonlijke match met plaatsen en woonwijken",
    "Levensstijl en dagelijkse woonomgeving",
    "Rust, privacy, zomerdrukte en geluidsrisico’s",
    "Veiligheid, lokale aandachtspunten en zichtbare omgevingsrisico’s",
    "Artsen, ziekenhuizen en toegang tot gezondheidszorg",
    "Wellness, golf, sport en recreatiemogelijkheden",
    "Restaurants, beachclubs en lokale cultuur",
    "Internationale scholen en geschiktheid voor gezinnen",
    "Internationale gemeenschappen en sociaal netwerk",
    "Bereikbaarheid, voorzieningen en investeringsmogelijkheden",
    "Risico’s zoals drukke wegen, hoogspanningsmasten, steile toegang of afgelegen ligging",
    "Eerste aandachtspunten voor verhuur, community-regels en jaarlijks gebruik",
  ];

  const safetyChecks = [
    {
      label: "01",
      title: "De juiste omgeving kiezen",
      text:
        "Voordat u naar woningen kijkt, brengen wij in kaart welke plaatsen, buurten en leefomgevingen werkelijk bij uw dagelijks leven passen. Zo voorkomt u dat u verliefd wordt op een woning in een omgeving die op lange termijn niet klopt.",
    },
    {
      label: "02",
      title: "Risico’s eerder herkennen",
      text:
        "We letten niet alleen op sfeer en schoonheid, maar ook op praktische aandachtspunten zoals bereikbaarheid, geluid, seizoensdrukte, hellingen, voorzieningen, gezondheidszorg, community-regels en mogelijke beperkingen.",
    },
    {
      label: "03",
      title: "Veilig verder met het Purchase Safety Report",
      text:
        "Wanneer u een woning serieus overweegt, volgt de verdiepende aankoopcontrole. Met onafhankelijke professionals worden juridische, technische en administratieve aandachtspunten vóór aankoop zichtbaar gemaakt.",
    },
  ];

  const professionalChecks = [
    {
      title: "Onafhankelijke advocaat",
      text:
        "De advocaat beoordeelt onder meer eigendom, Nota Simple, mogelijke lasten, openstaande schulden, koopcontracten, vergunningen en juridische risico’s die vóór ondertekening duidelijk moeten zijn.",
    },
    {
      title: "Notaris en gestor",
      text:
        "De notaris begeleidt de formele overdracht en de ondertekening van de eigendomsakte. Een gestor kan helpen met administratieve controles, registraties, belastingen, kadastergegevens en praktische opvolging.",
    },
    {
      title: "Technisch bouwkundig specialist",
      text:
        "De technisch specialist kijkt naar zichtbare bouwkundige risico’s zoals vocht, scheuren, dak, installaties, elektriciteit, zwembad, septic tank, onderhoudsrisico’s en mogelijke renovatiekosten.",
    },
  ];

  const secureItems = [
    "Gecontroleerde toegang per klant en adviseur",
    "Two-step authentication voor extra beveiliging",
    "Minder losse e-mails, screenshots en WhatsApp-documenten",
    "Eén centrale plek voor rapporten, documenten en vervolgstappen",
    "Duidelijke versies, deadlines en verantwoordelijkheden",
    "Meer overzicht tijdens een aankoopproces waarin veel partijen betrokken zijn",
  ];

  const journeySteps = [
    {
      number: "01",
      title: "Vul de gratis vragenlijst in",
      text:
        "Door middel van zorgvuldig samengestelde vragen krijgen wij inzicht in uw persoonlijke situatie, woonwensen, levensstijl, budget, interesses, zorgen en langetermijnplannen.",
    },
    {
      number: "02",
      title: "Ontvang uw persoonlijke Area Match Rapport",
      text:
        "Wij combineren uw antwoorden met lokale kennis en AI-ondersteunde analyse. U ontvangt een persoonlijk overzicht van plaatsen, buurten en gemeenschappen die waarschijnlijk het beste bij u passen.",
    },
    {
      number: "03",
      title: "Plan een gratis persoonlijk intakegesprek",
      text:
        "Tijdens de intake bespreken we de uitkomsten, uw twijfels, wensen en risico’s uitgebreider. Zo begrijpen we niet alleen waar u wilt wonen, maar ook wat u absoluut wilt vermijden.",
    },
    {
      number: "04",
      title: "Ervaar de gebieden tijdens de Buyer Discovery Trip",
      text:
        "U bezoekt geselecteerde plaatsen en buurten, ontmoet relevante lokale professionals en ervaart hoe het dagelijks leven werkelijk voelt voordat u zich aan een woning verbindt.",
    },
    {
      number: "05",
      title: "Laat een woning controleren met het Purchase Safety Report",
      text:
        "Wanneer u een woning serieus overweegt, coördineren wij onafhankelijke juridische, technische en administratieve controles. De bevindingen worden helder samengebracht voordat u beslist.",
    },
    {
      number: "06",
      title: "Beslis met overzicht en veilige documenten",
      text:
        "Belangrijke documenten, rapporten en vervolgstappen worden waar mogelijk verzameld in een beveiligde digitale omgeving met gecontroleerde toegang en two-step authentication.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      {/* INTRODUCTIE */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Area Match &amp; Veilig Kopen
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
            Kies eerst de juiste omgeving. Koop daarna pas met zekerheid.
          </h1>

          <p className="mt-10 max-w-5xl text-xl leading-relaxed text-stone-600">
            Een woning kopen aan de Costa Blanca Noord begint niet bij de eerste
            bezichtiging. Het begint bij de vraag of de omgeving, het dagelijks
            leven en de praktische realiteit werkelijk bij u passen. Een
            prachtige woning kan alsnog een verkeerde keuze zijn wanneer de
            locatie te druk is, te afgelegen ligt, in de winter stilvalt of
            verborgen risico’s bevat die u pas na aankoop ontdekt.
          </p>

          <p className="mt-6 max-w-5xl text-xl leading-relaxed text-stone-600">
            Daarom combineren wij ons gratis Area Match &amp; Lifestyle
            Intelligence Report met een duidelijke veiligheidsaanpak. Eerst
            brengen wij in kaart welke plaatsen en buurten aansluiten bij uw
            levensstijl. Daarna begeleiden wij u richting een zorgvuldig
            aankoopproces waarin juridische, technische en praktische risico’s
            vóór aankoop zichtbaar worden gemaakt.
          </p>

          <p className="mt-6 max-w-5xl text-xl leading-relaxed text-stone-600">
            Onze aanpak is ontworpen voor internationale kopers die niet alleen
            een mooie woning zoeken, maar vooral een veilige, begrijpelijke en
            goed gecontroleerde aankoop willen doen.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Vraag uw gratis Area Match Rapport aan
            </a>

            <a
              href="/nl/services/purchase-safety-report"
              className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Bekijk het Purchase Safety Report
            </a>
          </div>
        </div>
      </section>

      {/* VEILIGHEID ALS BASIS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Onze veiligheidsaanpak
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Niet alleen zoeken naar wat mooi is, maar controleren wat belangrijk is.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            Veel kopers kijken eerst naar foto’s, uitzicht en prijs. Wij draaien
            dat proces om. Eerst kijken wij naar levensstijl, bereikbaarheid,
            risico’s, omgeving en praktische geschiktheid. Daarna pas wordt de
            zoektocht naar woningen gericht en zinvol.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {safetyChecks.map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] bg-[#f6f1ea] p-7"
              >
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {item.label}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
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

      {/* INHOUD VAN HET RAPPORT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-white p-10 shadow-sm md:p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Wat uw persoonlijke rapport kan bevatten
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Van levensstijl en gezondheidszorg tot geluid, bereikbaarheid en risico’s.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-600">
            In plaats van maandenlang zelf losse informatie te verzamelen,
            ontvangt u een helder en gestructureerd overzicht van de gebieden
            die het beste bij uw profiel passen. Daarbij kijken wij verder dan
            woningprijzen, strandafstand of bekende plaatsnamen.
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
            zich op lange termijn waarschijnlijk veilig, comfortabel en thuis
            zult voelen.
          </p>
        </div>
      </section>

      {/* PURCHASE SAFETY REPORT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[480px]">
              <img
                src="/images/legal.png"
                alt="Purchase Safety Report voor het veilig kopen van een woning aan de Costa Blanca Noord"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/25"></div>
            </div>

            <div className="p-10 md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Purchase Safety Report
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Wanneer een woning serieus wordt, begint de echte controle.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Het Area Match Rapport helpt u eerst de juiste omgeving te
                kiezen. Zodra u daarna een woning serieus overweegt, helpt het
                Purchase Safety Report om de belangrijkste juridische,
                technische en praktische risico’s vóór aankoop helder te krijgen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Denk aan eigendomsinformatie, Nota Simple, vergunningen,
                uitbouwen, perceelgrenzen, zichtbare gebreken, vocht, zwembad,
                septic tank, community-regels, jaarlijkse kosten en mogelijke
                beperkingen voor gebruik of verhuur.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Het doel is simpel: voordat u tekent, wilt u weten of u met
                vertrouwen kunt doorgaan, opnieuw moet onderhandelen, aanvullende
                voorwaarden nodig heeft of beter afstand kunt nemen.
              </p>

              <a
                href="/nl/services/purchase-safety-report"
                className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Ontdek het Purchase Safety Report
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONALS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Onafhankelijke specialisten
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Wij coördineren de juiste professionals. Zij beoordelen hun eigen vakgebied.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Nordic Move Spain vervangt geen advocaat, notaris, gestor,
              fiscalist of technisch bouwkundig specialist. Wij brengen de juiste
              professionals samen, structureren het proces en helpen u de
              bevindingen duidelijk te begrijpen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {professionalChecks.map((check) => (
              <div
                key={check.title}
                className="rounded-[32px] bg-white p-8 shadow-sm md:p-9"
              >
                <h3 className="font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {check.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {check.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEVEILIGDE OMGEVING */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#e9dfd2] p-10 shadow-sm md:p-14 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Beveiligde aankoopomgeving
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Geen losse documenten via WhatsApp of onveilige e-mail.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-700">
                Tijdens een aankoop in Spanje worden vaak gevoelige documenten
                gedeeld: paspoorten, koopcontracten, bankgegevens,
                belastingdocumenten, eigendomsinformatie, technische rapporten
                en juridische stukken. Wij vinden dat zulke informatie zorgvuldig
                en overzichtelijk moet worden behandeld.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Daarom werken wij waar mogelijk met een beveiligde digitale
                omgeving waarin belangrijke documenten, rapporten,
                verantwoordelijkheden en vervolgstappen centraal worden
                verzameld.
              </p>

              <div className="mt-8 grid gap-4">
                {secureItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/70 p-5 leading-relaxed text-stone-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WERKWIJZE */}
      <section id="werkwijze" className="scroll-mt-24 px-8 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Van gratis rapport naar gecontroleerde aankoop
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Een heldere route van oriëntatie naar zekerheid.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Het Area Match Rapport is het beginpunt. Daarna bouwen wij stap
              voor stap verder: persoonlijke intake, Buyer Discovery Trip,
              gerichte woningzoektocht, Purchase Safety Report en een veilige
              documentomgeving. Zo wordt de aankoop niet sneller of impulsiever,
              maar rustiger, beter gecontroleerd en beter onderbouwd.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                alt="Persoonlijke Buyer Discovery Trip aan de Costa Blanca Noord"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="p-10 md:p-14 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Persoonlijke Buyer Discovery Trip
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Niet alleen gebieden bezoeken, maar ook de risico’s en de juiste mensen leren kennen.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Tijdens de trip ervaart u hoe het dagelijkse leven in de
                geselecteerde plaatsen werkelijk aanvoelt. U bezoekt buurten,
                voorzieningen en locaties die aansluiten bij uw persoonlijke
                profiel, in plaats van een algemene standaardroute te volgen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Op basis van uw rapport en intake kunnen wij relevante
                kennismakingen voorbereiden. Denk aan betrouwbare lokale
                professionals, internationale bewoners, ondernemers, toekomstige
                kopers of mensen met gedeelde interesses.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Zo krijgt u niet alleen een beter beeld van de woningmarkt, maar
                ook van de sociale, praktische en veiligheidsaspecten rondom uw
                mogelijke toekomstige woonomgeving.
              </p>

              <a
                href="/nl/services/discovery-trips"
                className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Ontdek de Buyer Discovery Trip
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
              De juiste omgeving en een gecontroleerde aankoop bepalen of Spanje werkelijk als thuis gaat voelen.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Een woning kan er op foto&apos;s perfect uitzien, terwijl de ligging
              of juridische en technische werkelijkheid uiteindelijk niet aansluit
              bij uw verwachtingen. Misschien zijn voorzieningen te ver weg, is
              de omgeving in de winter te rustig, zijn er onverwachte
              community-regels of blijkt een onderdeel van de woning niet goed
              geregistreerd.
            </p>

            <p className="mt-6">
              Daarom kijken wij niet alleen naar de woning zelf. Wij beoordelen
              ook de omgeving, bereikbaarheid, levensstijl, lokale voorzieningen,
              sociale mogelijkheden en praktische geschiktheid voor de komende
              jaren. En zodra een specifieke woning serieus wordt, schakelen we
              door naar onafhankelijke controles.
            </p>

            <p className="mt-6">
              Onze begeleiding helpt u om eerst duidelijkheid te krijgen over de
              juiste plaats en levensstijl, en daarna de aankoop met meer rust,
              overzicht en veiligheid te benaderen.
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
            Ontdek welke plaats, buurt en aankooproute het beste bij uw toekomst in Spanje passen.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
            Vul de vragenlijst in en ontvang uw persoonlijke Area Match &amp;
            Lifestyle Intelligence Report. Daarna kunt u gebruikmaken van een
            gratis intakegesprek waarin we de resultaten bespreken en samen
            bekijken welke volgende stap bij u past.
          </p>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-stone-500">
            Wanneer u later een woning serieus overweegt, kan het Purchase Safety
            Report helpen om juridische, technische en praktische risico’s vóór
            aankoop beter te begrijpen.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/relocation-assessment"
              className="inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#15202d]"
            >
              Vraag uw gratis Area Match Rapport aan
            </a>

            <a
              href="/nl/services/purchase-safety-report"
              className="inline-block rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Lees meer over veilig kopen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
