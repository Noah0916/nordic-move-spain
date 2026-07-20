export const metadata = {
  title: "Ett tryggare sätt att köpa bostad på Costa Blanca | Nordic Move Spain",
  description:
    "Ett tryggare sätt att köpa bostad med Area Match, oberoende teknisk besiktning och dokumentgranskning, juridisk due diligence och en tydlig grön-gul-röd köprekommendation.",
  openGraph: {
    title: "Ett tryggare sätt att köpa bostad på Costa Blanca | Nordic Move Spain",
    description:
      "Nordic Move Spain samordnar en oberoende besiktningsman och en lämplig advokat med expertis inom spansk fastighetsrätt. Utifrån båda professionella bedömningarna får du en tydlig rekommendation: gå vidare, ompröva eller avstå.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ett tryggare sätt att köpa bostad på Costa Blanca",
    description:
      "Från Area Match och riktat bostadsurval till oberoende kontroller, köpstöd, flytt och inredning — med en fast kontaktperson hos Nordic Move.",
  },
};

export default function SwedishHomePage() {
  const guideCards = [
    {
      href: "/sv/guides/best-areas-costa-blanca-north-retirees",
      label: "Områdesguide för pension",
      title: "Bästa platserna på Costa Blanca för pension",
      text:
        "En praktisk guide för internationella köpare som jämför de bästa platserna på Costa Blanca för pension.",
      cta: "Läs pensionsguiden →",
      featured: true,
    },
    {
      href: "/sv/guides/buying-property-spain",
      label: "Köpa i Spanien",
      title: "Köpa bostad i Spanien",
      text:
        "En komplett guide till juridiska kontroller, bolån, köpkostnader och köpprocessen för internationella köpare.",
      cta: "Läs guiden →",
      featured: false,
    },
    {
      href: "/sv/guides/spanish-rules-sweden",
      label: "Skatteregler för svenskar",
      title: "Spanska skatteregler för svenska bostadsägare",
      text:
        "Vad svenska köpare bör känna till om spansk fastighetsbeskattning, svensk deklaration, uthyrningsinkomster, kapitalvinster och hur dubbelbeskattning undviks.",
      cta: "Läs skatteguiden →",
      featured: false,
    },
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/15 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="w-[180px]"></div>

          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/sv" className="border-b border-[#c8a063] pb-1">
              Home
            </a>

            <a href="/sv/regions" className="hover:text-white/70 transition">
              Regions
            </a>

            <a href="/sv/services" className="hover:text-white/70 transition">
              Services
            </a>

            <a href="/sv/guides" className="hover:text-white/70 transition">
              Guides
            </a>

            <a href="/sv/about-us" className="hover:text-white/70 transition">
              About us
            </a>

            <a href="/sv/contact" className="hover:text-white/70 transition">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href="/"
                aria-label="English version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                EN
              </a>

              <a
                href="/nl"
                aria-label="Dutch version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                NL
              </a>

              <a
                href="/de"
                aria-label="German version"
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900"
              >
                DE
              </a>

              <a
                href="/sv"
                aria-label="Swedish version"
                className="rounded-full border border-[#c8a063] bg-[#c8a063] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#b48a4f]"
              >
                SE
              </a>
            </div>

            <a
              href="/sv/contact"
              className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Boka ett introduktionssamtal
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Nordic Move Spain guidance for buying a property on the Costa Blanca"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/28 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[0.98] text-[#f3ede3] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-6xl">
              Ett tryggare sätt
              <br />
              att köpa bostad
              <br />
              på Costa Blanca.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#f7f2ea] drop-shadow-[0_2px_12px_rgba(0,0,0,0.38)]">
              För internationella köpare som värdesätter tid, trygghet och en
              fast kontaktperson. Från rätt område och bostad till oberoende
              kontroller, köp, flytt och inredning: Nordic Move samordnar hela
              processen från A till Ö.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              En kontaktperson · Fullständig samordning · Från första orientering till inflyttning
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/sv/relocation-assessment"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Börja med din Area Match Report
              </a>

              <a
                href="/sv/contact"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Boka ett introduktionssamtal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PURCHASE SAFETY — ONE CLEAR DECISION */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="bg-[#1e2a3a] p-12 text-white lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Teknisk och juridisk granskning före köp
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                Från en vacker bostad till ett välgrundat beslut.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Den oberoende besiktningsmannen bedömer bostadens synliga och
                åtkomliga tekniska skick. Bland annat granskas byggnadstekniska
                brister, fukt och vatteninträngning, installationer, pool,
                komplementbyggnader och tomt. Bostaden mäts upp och nödvändiga
                reparationer eller vidare undersökningar identifieras.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Besiktningsmannen jämför också den faktiska bostaden och de
                uppmätta ytorna med tillgänglig information, såsom Nota Simple,
                Catastro, mäklaruppgifter, energicertifikat, ITE samt
                tillhandahållna plan-, certifikat- och tillståndshandlingar.
                Möjliga avvikelser kring ytor, tillbyggnader, garage, pooler,
                registreringar eller tillstånd kan därmed upptäckas tidigt.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Dessutom väljer och samordnar vi en oberoende advokat som passar
                ditt språk, din situation och dina behov och som har expertis
                inom spansk fastighetsrätt. Advokaten genomför den fullständiga
                juridiska due diligence-granskningen, inklusive kontroll av
                ägande, belastningar, skulder, tillstånd, avtal och villkoren
                för överlåtelsen.
              </p>

              <p className="mt-6 text-base font-medium leading-relaxed text-[#c8a063]">
                Utifrån båda professionella bedömningarna rekommenderar vi:
                gå vidare, ompröva eller avstå.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/sv/services/purchase-safety-report"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Se hur Purchase Safety fungerar
                </a>

                <a
                  href="/sv/contact"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
                >
                  Fråga om en bostadskontroll
                </a>
              </div>
            </div>

            <div className="p-10 md:p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Två professionella rapporter. En tydlig köprekommendation.
              </p>

              <h3 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-[#1e2a3a]">
                Gå vidare, ompröva eller avstå.
              </h3>

              <div className="mt-10 grid gap-6">
                <article className="rounded-[28px] border border-emerald-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">
                    Grön · Gå vidare
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Den tekniska besiktningen och den juridiska due
                    diligence-granskningen ger tillräckligt underlag för att gå
                    vidare enligt de angivna tekniska, juridiska och
                    avtalsmässiga villkoren.
                  </p>
                </article>

                <article className="rounded-[28px] border border-amber-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
                    Gul · Ompröva
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    Risker, saknad information eller osäkerheter kräver vidare
                    undersökningar, kostnadsbedömningar, omförhandling eller
                    ytterligare villkor innan du går vidare.
                  </p>
                </article>

                <article className="rounded-[28px] border border-red-900/10 bg-[#f6f1ea] p-7">
                  <div className="inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-800">
                    Röd · Avstå
                  </div>

                  <p className="mt-5 leading-relaxed text-stone-600">
                    De identifierade tekniska, juridiska eller praktiska
                    riskerna gör köpet olämpligt, om de inte löses fullständigt
                    och verifierbart innan du binder dig.
                  </p>
                </article>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                Besiktningsmannens dokument- och registergranskning är en första
                jämförelse och riskidentifiering. Den ersätter inte juridisk
                due diligence eller formell bekräftelse från behöriga
                myndigheter. Den tekniska och juridiska granskningen utförs av
                oberoende externa specialister som ansvarar för sina respektive
                rapporter. Ytterligare specialistundersökningar kan behövas och
                diskuteras separat. Ingen granskning kan garantera fullständig
                säkerhet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS & TRUST */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#e9dfd2] shadow-sm">
          <div className="grid items-center gap-0 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="bg-white p-5 lg:p-7">
              <img
                src="/images/founder.png"
                alt="Grundarna av Nordic Move Spain"
                className="h-auto max-h-[520px] w-full rounded-[32px] object-contain object-center"
              />
            </div>

            <div className="p-10 md:p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Människorna bakom Nordic Move
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Personlig vägledning. Oberoende expertis.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-stone-700">
                Nordic Move Spain bygger på erfarenhet av internationell
                relocation, forskning, affärsutveckling och strategi. Vi är din
                fasta kontaktperson och samordnar samarbetet med den oberoende
                besiktningsmannen, en lämplig advokat med expertis inom spansk
                fastighetsrätt och övriga utvalda specialister i din
                köpprocess.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  [
                    "Internationell vägledning",
                    "Erfarenhet av relocation och av människor som bygger ett nytt liv i ett annat land.",
                  ],
                  [
                    "Faktabaserat arbetssätt",
                    "Bakgrund inom forskning, affärer, strategi och genomtänkt beslutsfattande.",
                  ],
                  [
                    "Oberoende specialister",
                    "Den tekniska besiktningen och dokumentgranskningen utförs av en oberoende besiktningsman. Den juridiska due diligence-granskningen utförs av en lämplig oberoende advokat.",
                  ],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-[24px] bg-white/75 p-5 shadow-sm"
                  >
                    <h3 className="font-serif text-xl leading-tight text-[#1e2a3a]">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="/sv/about-us"
                className="mt-9 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Lär känna Nordic Move
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AREA MATCH TO SOFT LANDING */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Från livsönskemål till en mjuk start
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Först rätt livsmiljö. Sedan rätt bostad. Och vägledning tills allt känns som hemma.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Många internationella köpare börjar med att söka bland hundratals
                bostäder och upptäcker först senare att området inte passar
                deras vardag. Med vår Area Match Report kartlägger vi först dina
                bostadsönskemål, din budget, dina framtidsplaner och dina
                prioriteringar. På så sätt undviker du att söka i månader i
                områden som i slutändan inte passar dig.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Därefter arbetar vi som din personliga mäklare på Costa Blanca.
                Under Buyer Discovery Experience får du uppleva ett riktat
                urval av lämpliga områden och bostäder. Vi organiserar
                visningarna, sköter kontakten med säljare och mäklare och
                stöttar dig under förhandling och köp.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                När en bostad blir ett seriöst alternativ samordnar vi en
                oberoende teknisk besiktning med dokumentgranskning och väljer
                en lämplig oberoende advokat för den juridiska due
                diligence-granskningen. Utifrån båda professionella
                bedömningarna rekommenderar vi: gå vidare, ompröva eller avstå.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  [
                    "En trygg kontaktperson",
                    "Du kommunicerar med en fast kontaktperson hos Nordic Move som känner till dina önskemål, prioriteringar och frågor och följer dig genom hela processen.",
                  ],
                  [
                    "Fullständig samordning",
                    "Vi håller reda på vem som gör vad, vilken information som saknas, vilket nästa steg är och var förseningar eller risker kan uppstå.",
                  ],
                  [
                    "Större trygghet före köp",
                    "Oberoende tekniska och juridiska kontroller hjälper till att avgöra om bostaden är ett klokt köp.",
                  ],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-[24px] bg-white p-5 shadow-sm"
                  >
                    <h3 className="font-serif text-xl leading-tight text-[#1e2a3a]">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Även efter köpet förblir vi din fasta kontaktperson. Beroende
                på dina behov sätter vi dig i kontakt med en lämplig
                bolånerådgivare, hjälper till med val och samordning av en
                pålitlig flyttfirma och ansvarar själva för samordningen av
                styling och inredning med utvalda lokala specialister.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NORDIC MOVE BUYER JOURNEY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Nordic Move Buyer Journey
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
              Från rätt område och bostad till ett kontrollerat köp, flytt, inredning och en mjuk start.
            </h2>

            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-lg font-medium leading-relaxed text-[#1e2a3a]">
                Du behöver inte använda varje steg.
              </p>

              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Följ hela processen med en fast kontaktperson eller kliv in där
                du behöver oss: Area Match, Buyer Discovery, Purchase Safety
                eller Move-In Ready.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            <a
              href="/sv/services/area-match"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/area-match.png"
                alt="Area Match Assessment for the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Steg 1 · Orientering
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Area Match Report
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  En detaljerad personlig profil med lokala fakta om vård,
                  skolor, golf, communityprofil, service, infrastruktur och
                  livsstilspassning.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Beställ din kostnadsfria rapport →
                </div>
              </div>
            </a>

            <a
              href="/sv/services/discovery-trips"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/discover-card.png"
                alt="International buyers during a Buyer Discovery Experience on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Steg 2 · Din väg
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Buyer Discovery Experience
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Upptäck lämpliga områden, utvalda bostäder och relevanta
                  lokala specialister genom en privat eller noggrant matchad
                  gruppupplevelse.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Upptäck Discovery Experience →
                </div>
              </div>
            </a>

            <a
              href="/sv/services/purchase-safety-report"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/legal.png"
                alt="Purchase Safety Report and secure client portal for buyers on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Steg 3 · Kontroller före köp
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Purchase Safety
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  En oberoende besiktningsman bedömer det tekniska skicket och
                  jämför bostaden med tillgängliga register och dokument.
                  Dessutom väljer vi en lämplig oberoende advokat för den
                  juridiska due diligence-granskningen. Utifrån båda rapporterna
                  får du vår gröna, gula eller röda köprekommendation.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Upptäck Purchase Safety →
                </div>
              </div>
            </a>

            <a
              href="/sv/services/move-in-ready"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/move-in-ready-ibiza.png"
                alt="Move-In Ready support for buyers on the Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Steg 4 · Mjuk start
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Move-In Ready Support
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Tillsammans med dig bestämmer vi inredningsriktningen och
                  samordnar styling, inredning, lokala specialister och, om du
                  önskar, kontakten med en pålitlig flyttfirma.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Upptäck Move-In Ready →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* MOVE-IN READY INTERIOR PREVIEW */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#e9dfd2]">
          <div className="grid items-center gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Soft Landing &amp; Move-In Ready
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
                Kom fram till en bostad som redan känns som hemma.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-700">
                Efter köpet ska du inte behöva samordna en bolånerådgivare,
                flyttfirma, hantverkare, möbelpartners, belysning, gardiner och
                leveranser från utlandet på egen hand.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Nordic Move förblir din fasta kontaktperson. Vid behov sätter vi
                dig i kontakt med en lämplig bolånerådgivare, hjälper till med
                val och samordning av en pålitlig flyttfirma och utvecklar och
                samordnar själva styling och inredning med utvalda lokala
                specialister — så att du får en mjuk start i stället för att
                komma till ett ofärdigt projekt.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-stone-500">
                Bilderna är inredningskoncept för inspiration. Slutlig design,
                tidsplan och genomförande beror på bostaden, budgeten,
                tillgängligheten och valda lokala partners.
              </p>

              <a
                href="/sv/services/move-in-ready"
                className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Upptäck Move-In Ready-stöd
              </a>
            </div>

            <div className="grid gap-6 p-8 md:grid-cols-2 lg:p-12">
              {[
                [
                  "/images/move-in-ready-ibiza.png",
                  "Ibiza Soho Lounge",
                  "Varmt medelhavsliv med mjuka vita toner, naturliga texturer, subtila färgaccenter och en avslappnad känsla mellan inne och ute.",
                  "Ibiza Soho interior concept for Move-In Ready support on the Costa Blanca",
                ],
                [
                  "/images/move-in-ready-kitchen.png",
                  "Contemporary Coastal Kitchen",
                  "En ljusare och mer arkitektonisk riktning med stora fönster, ljust trä, raffinerade detaljer och lugn kustnära elegans.",
                  "Contemporary coastal kitchen concept for Move-In Ready support on the Costa Blanca",
                ],
              ].map(([image, title, text, alt]) => (
                <article
                  key={title}
                  className="overflow-hidden rounded-[32px] bg-white/85 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-[360px] overflow-hidden">
                    <img
                      src={image}
                      alt={alt}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1e2a3a] backdrop-blur">
                      Konceptvisualisering
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                      Inredningsriktning
                    </p>

                    <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-stone-600">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NORDIC CIRCLE CONNECTIONS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#1e2a3a] text-white">
          <div className="grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative flex min-h-[520px] items-start justify-center bg-[#eadcca] p-8 md:p-10">
              <img
                src="/images/community-home.png"
                alt="Nordic Circle Connections for buyers and future residents on the Costa Blanca"
                className="w-full max-w-[620px] rounded-[24px] object-contain"
              />
            </div>

            <div className="p-10 md:p-12 lg:p-14">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Att känna sig hemma spelar roll
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                En bostad räcker inte om du inte känner dig delaktig.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Genom vår egen erfarenhet av expatstöd har vi sett att
                människor ibland återvänder tidigare än väntat eftersom de inte
                bygger ett lokalt nätverk, saknar meningsfulla vänskaper eller
                känner sig frånkopplade från vardagslivet.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
                Nordic Circle hjälper till att minska den risken. Under Buyer
                Discovery Experience skapar vi naturliga möjligheter att träffa
                människor med liknande bakgrund, livsfas eller intressen —
                aldrig påtvingat nätverkande, utan en bättre känsla för om
                området verkligen kan bli hemma.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  [
                    "Social passning",
                    "Introduktioner kan anpassas efter språk, bakgrund, livsfas och intressen.",
                  ],
                  [
                    "Gemensamma stunder",
                    "Luncher, middagar, golf, wellness eller gastronomi kan hjälpa människor att mötas naturligt.",
                  ],
                  [
                    "Bättre start",
                    "Målet är att minska risken för att känna sig isolerad efter köp och flytt.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[24px] border border-white/15 bg-white/5 p-5 backdrop-blur"
                  >
                    <h3 className="font-serif text-xl leading-tight text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-white/65 md:text-sm">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/sv/services/nordic-circle-community"
                  className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
                >
                  Upptäck Nordic Circle
                </a>

                <a
                  href="/sv/contact"
                  className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
                >
                  Boka ett personligt samtal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-10 shadow-sm md:p-14 lg:p-16">
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Om Nordic Move Spain
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
                Skapat för internationella köpare som vill ha lugn, tydlighet och lokalt stöd.
              </h2>
            </div>

            <div>
              <p className="text-xl leading-relaxed text-stone-700">
                Nordic Move Spain skapades för internationella köpare som
                söker ett mer personligt, bättre organiserat och noggrannare
                kontrollerat sätt att köpa bostad på Costa Blanca — från den
                första orienteringen till inflyttningen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Vi förstår att ett köp i Spanien inte bara är ett
                bostadsbeslut, utan också ett val av en annan miljö, en annan
                vardag och ofta ett nytt kapitel. Därför kombinerar vi
                livsstilsinsikt, lokal kunskap, riktat bostadsurval, oberoende
                teknisk besiktning och dokumentgranskning, juridisk due
                diligence genom en lämplig oberoende advokat, en tydlig
                köprekommendation, fullständig samordning och praktiskt stöd
                efter köpet.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Vår roll är att göra hela processen begriplig och överskådlig
                med en fast kontaktperson. Vi hjälper dig att hitta rätt plats
                och bostad, följer med genom urval och visningar och samordnar
                de oberoende kontrollerna, köpstödet och de berörda
                specialisterna. Därefter hjälper vi vid behov till med kontakt
                med en lämplig bolånerådgivare, flyttsamordning samt styling och
                inredning med pålitliga lokala partners.
              </p>

              <a
                href="/sv/about-us"
                className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Läs mer om oss
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES AND INSIGHTS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Köparguider
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Ärlig vägledning innan du köper bostad på Costa Blanca.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Ett urval praktiska guider för internationella köpare som vill
              förstå pensionsområden, den spanska köpprocessen och svenska
              skatteregler innan de fattar beslut.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guideCards.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className={
                  guide.featured
                    ? "rounded-[32px] bg-[#1e2a3a] p-8 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    : "rounded-[32px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                }
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  {guide.label}
                </p>

                <h3
                  className={
                    guide.featured
                      ? "mt-5 font-serif text-3xl leading-tight text-white"
                      : "mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]"
                  }
                >
                  {guide.title}
                </h3>

                <p
                  className={
                    guide.featured
                      ? "mt-5 leading-relaxed text-white/75"
                      : "mt-5 leading-relaxed text-stone-600"
                  }
                >
                  {guide.text}
                </p>

                <span
                  className={
                    guide.featured
                      ? "mt-8 inline-block text-sm uppercase tracking-[0.25em] text-white"
                      : "mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#1e2a3a]"
                  }
                >
                  {guide.cta}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/sv/guides"
              className="inline-block rounded-full border border-[#1e2a3a] px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Se alla köparguider
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CALL */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Börja med tydlighet
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Få ett ärligt svar innan du köper.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Från Area Match och bostadssökning till oberoende kontroller,
            köpstöd, bolånerådgivning genom en lämplig specialist,
            flyttsamordning, styling och inredning: du har en fast kontaktperson
            hos Nordic Move som organiserar hela processen från A till Ö.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/sv/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Börja med din Area Match Report
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
    </main>
  );
}