export const metadata = {
  title: "Purchase Safety Report | Köp bostad tryggare på Costa Blanca North",
  description:
    "Purchase Safety för köpare på Costa Blanca North: en oberoende teknisk bostadsbesiktning, inledande dokument- och registreringsgranskning samt full juridisk due diligence av en oberoende spansk advokat.",
  openGraph: {
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "En oberoende teknisk bostadsbesiktning och dokumentgranskning, kombinerad med full juridisk due diligence av en oberoende spansk advokat.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Två oberoende professionella bedömningar och en tydlig köprekommendation från Nordic Move: gå vidare, ompröva eller avstå.",
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
              Hem
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
          alt="Purchase Safety Report för köp av bostad på Costa Blanca North"
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
              En oberoende teknisk bostadsbesiktning med inledande dokument-
              och registreringsgranskning, kombinerad med full juridisk due
              diligence av en oberoende spansk advokat — allt samordnat av
              Nordic Move.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/sv/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Boka ett personligt introduktionssamtal
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
              Många internationella köpare fokuserar under en visning på
              utsikten, ytorna, atmosfären och läget. Det är förståeligt. De
              verkliga riskerna finns ofta bakom kulisserna: ofullständiga
              dokument, en tillbyggnad som inte är korrekt registrerad, oklara
              tomtgränser, tekniska brister, fuktproblem, septiktank,
              samfällighetsregler eller oväntade kostnader.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Purchase Safety hjälper till att göra dessa frågor tydligare före
              köp. Vi samordnar en oberoende teknisk bostadsbesiktning med
              dokument- och registreringsgranskning och arbetar dessutom med en
              oberoende spansk advokat för den fullständiga juridiska due
              diligence-granskningen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Utifrån båda professionella bedömningarna sammanställer vi de
              viktigaste resultaten, öppna frågorna och villkoren och ger en
              tydlig köprekommendation: gå vidare, ompröva eller avstå. Nordic
              Move ersätter varken besiktningsmannen eller advokaten; båda
              ansvarar för sin egen granskning och rådgivning.
            </p>
          </div>
        </div>
      </section>

      {/* PROFESSIONALS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Oberoende specialister
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Två oberoende bedömningar för en tydligare bild av köpet.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Vi samordnar en oberoende besiktningsman för den tekniska
              bostadsbedömningen och den inledande dokument- och
              registreringsgranskningen. Dessutom arbetar vi med en oberoende
              spansk advokat som genomför full juridisk due diligence och
              uteslutande företräder köparens intressen.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Full juridisk due diligence
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Oberoende spansk advokat
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Den oberoende spanska advokaten granskar bland annat ägande,
                registrerade belastningar, möjliga skulder och skatter,
                juridisk och planmässig status, tillstånd, dokument från
                samfälligheten, köpeavtal och villkoren för ägaröverföringen.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Advokaten arbetar oberoende, företräder köparen och ansvarar för
                sin egen juridiska granskning och rådgivning.
                Besiktningsmannens dokumentgranskning ersätter inte denna
                juridiska due diligence.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Dokument- och registreringsgranskning
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Inledande granskning av tillgängliga dokument
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Besiktningsmannen granskar och jämför tillgängliga dokument och
                registreringar, inklusive Nota Simple, Catastro, IBI,
                energicertifikat (CEE), ITE där det är relevant,
                mäklarinformation samt tillgängliga tillstånd och licenser.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Officiella och uppmätta ytor jämförs också. Eventuella
                oregistrerade delar av bostaden, tillbyggnader, garage eller
                pooler markeras. Rapporten kan även innehålla kommentarer om
                planering, samfälligheten, Coastal Law och andra relevanta
                faktorer.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Teknisk bostadsbedömning
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Oberoende besiktningsman
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Den oberoende besiktningsmannen bedömer bostadens synliga och
                åtkomliga tekniska skick. Det omfattar konstruktion och
                byggkvalitet, fukt, vatteninträngning och synliga läckor,
                installationer och funktionella system samt pool och
                komplementbyggnader.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Rapporten beskriver nödvändiga reparationer, rekommendationer
                och andra punkter som kräver uppmärksamhet och innehåller
                stödjande fotografier. När ytterligare specialistundersökningar
                behövs anges detta tydligt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CHECKED */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vad kan rapporten innehålla?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Från dokument till septiktank: sådant köpare ofta upptäcker för sent.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Synligt tekniskt skick, konstruktion och byggkvalitet",
              "Fukt, vatteninträngning och synliga läckor",
              "Installationer och funktionella system",
              "Pool, komplementbyggnader och nödvändiga reparationer",
              "Nota Simple, Catastro, IBI, CEE och ITE där det är relevant",
              "Mäklarinformation samt tillgängliga tillstånd och licenser",
              "Jämförelse av officiella och uppmätta ytor",
              "Indikationer på eventuella oregistrerade delar av bostaden",
              "Kommentarer om planering, samfälligheten, Coastal Law och andra relevanta faktorer",
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
              Tydlig slutsats
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Gå vidare, ompröva eller avstå.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/80">
              Syftet med Purchase Safety är inte att göra köpet mer
              komplicerat. Syftet är att ge dig större tydlighet före ett stort
              ekonomiskt beslut, baserat på en oberoende teknisk bedömning och
              oberoende juridisk due diligence.
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Grön</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Bostaden verkar lämplig att gå vidare med, förutsatt att de
                  normala köpstegen genomförs korrekt.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Gul</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Det finns punkter som kräver uppmärksamhet. Gå endast vidare
                  med villkor, ytterligare kontroller eller justerade
                  förhandlingar.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Röd</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Det finns allvarliga risker som kan göra det klokt att avstå
                  från bostaden.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              En fast kontaktperson
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Du behöver inte samordna alla professionella själv.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-700">
              Vid ett bostadsköp i Spanien behöver köpare ofta kommunicera med
              mäklare, besiktningsmän, advokater och andra professionella
              samtidigt. Nordic Move förblir din fasta kontaktperson och ser
              till att de överenskomna stegen samordnas.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Vi håller reda på vem som gör vad, vilken information som saknas,
              vilka frågor som fortfarande är öppna, vad som behöver ske härnäst
              och var förseningar eller risker kan uppstå.
            </p>

            <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-700">
              <li>• En fast kontaktperson hos Nordic Move</li>
              <li>• Samordning av den oberoende besiktningsmannen</li>
              <li>• Val och samordning av en oberoende spansk advokat</li>
              <li>• Uppföljning av öppna frågor, villkor och tidsfrister</li>
              <li>• En tydlig köprekommendation baserad på båda rapporterna</li>
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
                alt="Buyer Discovery Trip på Costa Blanca North"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                En del av din köpresa
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Kombinera Purchase Safety med Buyer Discovery Trip.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Under vår Buyer Discovery Trip upplever du inte bara områden,
                orter och bostäder på Costa Blanca North. Du kan också träffa
                professionella som kan hjälpa dig att fatta ett välgrundat
                köpbeslut.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Det kan vara den oberoende spanska advokaten, den tekniska
                besiktningsmannen, en bolånerådgivare och andra utvalda lokala
                professionella. Allmänna frågor kan diskuteras under
                upplevelsen; personlig eller bostadsspecifik juridisk
                rådgivning ges separat efter formellt uppdrag och
                intressekonfliktskontroll.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Vi kan också introducera dig för likasinnade köpare och
                internationella boende i en liknande livsfas. Det ger dig inte
                bara insikt i bostaden, utan också i vardagslivet,
                gemenskapen och den praktiska verkligheten av att bo i Spanien.
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

      {/* LIABILITY / ROLE */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-[#c8a063]/30 bg-white p-10 shadow-sm lg:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Viktigt att känna till
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
            Vi samordnar. De professionella bedömer.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Nordic Move Spain ersätter varken den oberoende
            besiktningsmannen eller den oberoende spanska advokaten. Båda
            ansvarar för sin egen granskning, rapportering och rådgivning. Vi
            samordnar processen, följer upp öppna punkter och hjälper dig att
            förstå de viktigaste resultaten och villkoren.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Besiktningsmannens dokument- och registreringsgranskning är en
            inledande bedömning och riskidentifiering baserad på tillgänglig
            information. Den ersätter inte full juridisk due diligence eller
            formell bekräftelse från behöriga myndigheter. Ingen besiktning
            eller granskning kan garantera att en bostad är helt fri från
            risker eller dolda fel.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Köp med större trygghet
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Överväger du en bostad på Costa Blanca North?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Boka ett personligt introduktionssamtal och upptäck hur Purchase
            Safety kan hjälpa dig att bättre förstå bostadens tekniska skick,
            tillgängliga registreringar och dokument samt juridiska risker före
            köp.
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