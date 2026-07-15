export const metadata = {
  title: "Purchase Safety Report | Köp tryggt på norra Costa Blanca",
  description:
    "En strukturerad översikt över köprisker för köpare som vill få en bostad på norra Costa Blanca granskad juridiskt, tekniskt och praktiskt av oberoende specialister före köp.",
  openGraph: {
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Köp inte enbart på känsla. Låt oberoende specialister granska en bostad på norra Costa Blanca innan du köper.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "En strukturerad översikt över köprisker med slutsatser från oberoende specialister innan du köper i Spanien.",
  },
};

export default function PurchaseSafetyReportPage() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/15 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/sv"
            className="text-sm uppercase tracking-[0.25em] text-white"
          >
            Nordic Move Spain
          </a>

          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/sv" className="hover:text-white/70 transition">
              Startsida
            </a>

            <a href="/sv/regions" className="hover:text-white/70 transition">
              Områden
            </a>

            <a href="/sv/services" className="border-b border-[#c8a063] pb-1">
              Tjänster
            </a>

            <a href="/sv/guides" className="hover:text-white/70 transition">
              Guider
            </a>

            <a href="/sv/about-us" className="hover:text-white/70 transition">
              Om oss
            </a>

            <a href="/sv/contact" className="hover:text-white/70 transition">
              Kontakt
            </a>
          </div>

          <a
            href="/sv/contact"
            className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Boka ett introduktionssamtal
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img
          src="/images/legal.png"
          alt="Purchase Safety Report vid köp av bostad på norra Costa Blanca"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Köp tryggare i Spanien
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[1] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-7xl">
              Purchase Safety Report
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white">
              En strukturerad översikt över köprisker för köpare som inte vill
              köpa en bostad på norra Costa Blanca enbart på känsla, utan med
              slutsatser från oberoende specialister och tydliga juridiska,
              tekniska och praktiska uppmärksamhetspunkter.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/sv/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Be om ett personligt introduktionssamtal
              </a>

              <a
                href="/sv/services"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Tillbaka till tjänster
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
              Kontrollera först, besluta sedan
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              En vacker bostad är inte automatiskt ett tryggt köp.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              Många internationella köpare fokuserar under en visning på utsikt,
              yta, känsla och läge. Det är förståeligt. Men de verkliga riskerna
              finns ofta bakom kulisserna: ofullständiga dokument, en tillbyggnad
              som inte är korrekt registrerad, otydliga tomtgränser, tekniska
              brister, fuktproblem, septiktankar, samfällighetsregler eller
              oväntade kostnader.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Purchase Safety Report hjälper dig att få en tydligare bild av
              dessa punkter före köpet. Vi samordnar köpkontrollen med oberoende
              specialister och sammanställer deras slutsatser i en tydlig
              översikt. Det hjälper dig att avgöra om du kan gå vidare med
              trygghet, omförhandla eller avstå från bostaden.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Vår roll är inte att ersätta juridisk, skattemässig eller teknisk
              rådgivning. Vår roll är att samla rätt specialister, strukturera
              processen och göra de viktigaste uppmärksamhetspunkterna lättare
              att förstå för internationella köpare.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIALISTS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Oberoende specialister
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Expertkontroller samlade i en tydlig köpöversikt.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Beroende på bostaden och situationen arbetar vi med en oberoende
              advokat, notarie, gestor och teknisk byggspecialist. Varje
              specialist bedömer bostaden och köpprocessen utifrån sitt eget
              expertområde.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Juridisk granskning
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Oberoende advokat
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Advokaten granskar den juridiska sidan av köpet. Det kan omfatta
                äganderätt, Nota Simple, möjliga belastningar, utestående
                skulder, köpeavtal, tillstånd, registrerad information och
                juridiska risker som behöver vara tydliga innan du skriver under.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Advokaten arbetar oberoende och ansvarar för sin egen juridiska
                bedömning. Det hjälper dig att förstå vilka juridiska punkter
                som först måste lösas eller undersökas vidare.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Lagfart och överlåtelse
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Notarie och gestor
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Notarien har en viktig roll i den formella överlåtelsen.
                Notarien verifierar parternas identitet, övervakar
                undertecknandet av lagfarten och säkerställer att överlåtelsen
                registreras enligt korrekt procedur.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                En gestor eller administrativ specialist kan även hjälpa till med
                praktiska och administrativa kontroller, såsom kadastrala data,
                tomtinformation, registreringar, skatter, lokala procedurer och
                uppföljning efter köpet.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Teknisk granskning
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Byggingenjör
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Den tekniska specialisten eller byggingenjören granskar bostadens
                synliga skick. Det kan omfatta fukt, sprickor, tak,
                installationer, rör, el, pool, septiktank, underhållsrisker och
                möjliga renoveringspunkter.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Denna granskning hjälper till att uppskatta dolda kostnader
                tydligare och minskar risken för att du efter köpet upptäcker
                att viktiga tekniska delar kräver åtgärder eller investeringar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN IT MAKES SENSE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            När är detta användbart?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Be om Purchase Safety Report innan du förbinder dig.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Purchase Safety Report är särskilt värdefullt när du seriöst
            överväger en bostad men vill ha klarhet kring juridiska, tekniska och
            praktiska uppmärksamhetspunkter innan du skriver under.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "När du seriöst överväger en bostad",
              "När det finns tillbyggnader, terrasser eller uthus",
              "När den registrerade boytan är oklar",
              "När det finns fuktproblem, sprickor, äldre installationer eller renoveringspunkter",
              "När det finns septiktank, pool eller stor tomt",
              "När bostaden ingår i en samfällighet",
              "När du vill hyra ut bostaden",
              "När du vill ha mer säkerhet kring öppna punkter innan du skriver under",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#c8a063]/25 bg-white/70 p-6"
              >
                <p className="text-base leading-relaxed text-stone-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CAN BE CHECKED */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vad kan rapporten innehålla?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Från dokument till septiktank: punkterna som köpare ofta upptäcker för sent.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Äganderätt, Nota Simple och möjliga belastningar",
              "Köpeavtal, villkor och juridiska uppmärksamhetspunkter",
              "Kadastrala data, tomtgränser och registrerade ytor",
              "Tillbyggnader, uthus, terrasser och möjliga tillstånd",
              "Fukt, sprickor, tak, pool och synliga underhållsrisker",
              "Septiktank, rör, el och praktisk infrastruktur",
              "Samfällighetsregler, kostnader och möjliga begränsningar",
              "Uthyrningsmöjligheter och lokala uppmärksamhetspunkter",
              "Årliga ägandekostnader och praktiska nästa steg",
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

      {/* OUTCOME AND SECURITY */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Tydlig slutsats
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Gå vidare, omförhandla eller avstå.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/80">
              Syftet med Purchase Safety Report är inte att göra ett köp mer
              komplicerat. Syftet är att ge dig lugn och klarhet innan du fattar
              ett stort ekonomiskt beslut.
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Grön</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Bostaden verkar lämplig att gå vidare med, förutsatt att de
                  normala köpmomenten genomförs korrekt.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Gul</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Det finns uppmärksamhetspunkter. Köp endast under vissa
                  villkor, efter ytterligare kontroller eller med justerad
                  förhandling.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Röd</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Det finns allvarliga risker som kan göra det klokast att avstå
                  från bostaden.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Säker miljö
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Inga lösa dokument via WhatsApp eller osäker e-post.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-700">
              Vid köp i Spanien delas ofta viktiga dokument och rapporter:
              ägarinformation, Nota Simple, kadastrala data, köpedokument,
              tekniska rapporter, juridiska uppmärksamhetspunkter,
              samfällighetsdokument, kostnadsöversikter och praktiska nästa
              steg.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Därför arbetar vi med en säker digital miljö där dokument,
              rapporter, ansvar, öppna frågor och nästa steg samlas tydligt på
              ett ställe.
            </p>

            <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-700">
              <li>• Kontrollerad åtkomst per kund och rådgivare</li>
              <li>• Tvåstegsverifiering för extra säkerhet</li>
              <li>• Färre separata mejl, skärmbilder och WhatsApp-meddelanden</li>
              <li>• En tydlig plats för viktiga köpdokument</li>
              <li>• Tydliga tidsfrister, versioner och nästa steg</li>
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
                alt="Buyer Discovery Trip på norra Costa Blanca"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                En del av din köpresa
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Kombinera rapporten med Buyer Discovery Trip.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Under vår Buyer Discovery Trip upplever du inte bara regionerna,
                orterna och bostäderna på norra Costa Blanca. Du träffar även de
                specialister som kan hjälpa dig att fatta ett välgrundat
                köpbeslut.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Det kan handla om advokat, gestor, teknisk specialist, bolåne-
                eller bankkontakt, försäkringspartner, fastighetsförvaltare och
                andra pålitliga lokala aktörer.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Vi kan också introducera dig till likasinnade köpare och
                internationella boende i en liknande livsfas. Det ger dig insikt
                inte bara i bostaden, utan också i vardagslivet, det lokala
                nätverket och den praktiska verkligheten med att bo i Spanien.
              </p>

              <a
                href="/sv/services/discovery-trips"
                className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Upptäck Buyer Discovery Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER / ROLE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-[#c8a063]/30 bg-white p-10 shadow-sm lg:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Viktigt att veta
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
            Vi samordnar. Specialisterna bedömer.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Nordic Move Spain ersätter inte advokat, notarie, gestor,
            skatterådgivare, teknisk specialist eller byggingenjör. Varje
            specialist ansvarar för sin egen bedömning, rapport och rådgivning.
            Vi samordnar processen, samlar slutsatserna och hjälper dig att
            tydligt förstå de viktigaste uppmärksamhetspunkterna.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Purchase Safety Report är utformat för att ge köpare bättre
            information före köp. Det är ingen absolut garanti för att en bostad
            är helt fri från risker eller dolda fel. Det hjälper dig däremot att
            fatta beslut på ett mer strukturerat, kritiskt och tryggt sätt.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Köp med mer säkerhet
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Överväger du en bostad på norra Costa Blanca?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Be om ett personligt introduktionssamtal och upptäck hur Purchase
            Safety Report kan hjälpa dig att bättre förstå juridiska, tekniska
            och praktiska risker före köp.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/sv/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Boka ett introduktionssamtal
            </a>

            <a
              href="/sv"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Tillbaka till webbplatsen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
