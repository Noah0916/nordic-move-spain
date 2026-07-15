export const metadata = {
  title: "Köp bostad tryggare på Costa Blanca | Nordic Move Spain",
  description:
    "En premium buyer journey för internationella köpare på Costa Blanca: Area Match, Buyer Discovery Experience, teknisk köpargranskning, säker dokumentkontroll och Move-In Ready interior support.",
  openGraph: {
    title: "Köp bostad tryggare på Costa Blanca | Nordic Move Spain",
    description:
      "Välj rätt område, upplev regionen, få en teknisk köpargranskning före köp, håll dokument säkert organiserade och landa i ett inflyttningsklart hem.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Köp bostad tryggare på Costa Blanca | Nordic Move Spain",
    description:
      "Area Match, Buyer Discovery Experience, teknisk köpargranskning, säker client portal och Move-In Ready interior support för seriösa internationella köpare.",
  },
};

export default function SwedishHomePage() {
  const guideCards = [
    {
      href: "/guides/best-areas-costa-blanca-north-retirees",
      label: "Områdesguide för pension",
      title: "Bästa platserna på Costa Blanca för pension",
      text:
        "En praktisk guide för internationella köpare som jämför de bästa platserna på Costa Blanca för pension.",
      cta: "Läs pensionsguiden →",
      featured: true,
    },
    {
      href: "/guides/buying-property-spain",
      label: "Köpa i Spanien",
      title: "Köpa bostad i Spanien",
      text:
        "En komplett guide om juridiska kontroller, bolån, köpkostnader och köpprocessen för internationella köpare.",
      cta: "Läs guiden →",
      featured: false,
    },
    {
      href: "/guides/uk-tax-second-home-spain",
      label: "Brittiska skatteregler",
      title: "Brittiska skatteregler för ett andra hem i Spanien",
      text:
        "Vad brittiska skatteresidenter bör förstå om spanska fastighetsskatter, Modelo 210, hyresinkomster, kapitalvinster, dubbelbeskattning och att äga ett andra hem utomlands.",
      cta: "Läs UK-skatteguiden →",
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
              Schedule a consultation
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

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/18 to-transparent"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[0.98] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-6xl">
              Ett tryggare sätt
              <br />
              att köpa bostad
              <br />
              på Costa Blanca.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
              Vi guidar internationella köpare från A till Z: från rätt område
              och Buyer Discovery Experience till oberoende riskkontroller,
              säker dokumentkontroll och, efter köpet, en move-in ready landing.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
              Målet är inte att se så många bostäder som möjligt. Målet är att
              hitta rätt matchning, minska riskerna och bara gå vidare när
              område, bostad, dokument och nästa steg är tydliga.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              Area Match · Buyer Discovery · Oberoende Safety Report · Secure Portal · Move-In Ready
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
                Boka ett samtal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Vi vänder på processen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                De flesta köpare börjar med bostadsannonser. Vi börjar med hur du vill leva.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Många köpare börjar på stora bostadsportaler, sparar dussintals
                bostäder och blir förälskade i ett hus innan de verkligen
                förstår området runt omkring.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Men en bostad kan se vacker ut och ändå vara fel beslut:
                läget kanske inte passar din vardagsrytm, området kanske inte
                passar dina framtidsplaner eller bostaden kan dölja tekniska,
                juridiska eller praktiska risker.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Därför vänder vi på processen. Först kartlägger vi hur du vill
                leva, vad som är viktigt för dig, vad du vill undvika och vilka
                områden som passar dina önskemål, din budget och dina långsiktiga
                planer.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Först därefter söker vi fokuserat. Du får ingen oändlig lista
                med bostäder, utan en liten och noggrant utvald shortlist som
                passar din profil — ibland inflyttningsklar, ibland en dold
                pärla med potential via vårt lokala nätverk av spanska partners.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                När en bostad blir seriöst intressant hjälper Purchase Safety
                Report till att tydliggöra de viktigaste riskerna. Då fattar du
                inte beslut enbart på känsla, utan med insikt, kontroll och ärlig
                rådgivning på köparens sida.
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
              Först rätt område. Sedan rätt bostad. Därefter ett tryggare köp och en mjuk landning.
            </h2>

            <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-lg font-medium leading-relaxed text-[#1e2a3a]">
                Du behöver inte använda varje steg.
              </p>

              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Följ hela journey, eller kliv in där du behöver oss:
                Area Match, Buyer Discovery, Purchase Safety eller Move-In Ready.
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
                  En profil med 34 frågor, kompletterad med lokala fakta:
                  sjukvård, skolor, golf, community-profil, service,
                  infrastruktur och lifestyle-fit.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Begär din kostnadsfria report →
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
                  Steg 2 · Din rutt
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Buyer Discovery Experience
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Utforska rätt områden, utvalda bostäder och relevanta lokala
                  yrkespersoner genom en privat eller noggrant matchad
                  gruppupplevelse.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Utforska Discovery Experience →
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
                  Safety Report &amp; Portal
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Varje köp via Nordic Move Spain inkluderar en teknisk
                  köpargranskning av en oberoende tekniker på köparens sida
                  innan du binder dig.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Utforska Purchase Safety →
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
                  Steg 4 · Mjuk landning
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Move-In Ready Support
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Vi formar själva interior direction och koordinerar möblering,
                  styling och praktiska förberedelser med betrodda lokala
                  möbelpartners.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Utforska Move-In Ready →
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
                Anländ till ett hem som redan känns som ditt.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-700">
                Efter köpet ska du inte behöva ägna månader åt att ordna
                möbler, hantverkare, belysning, gardiner och leveranser från
                utlandet.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Nordic Move Spain utvecklar interior direction tillsammans med
                dig och koordinerar möblering, styling och praktiska
                förberedelser via betrodda lokala möbelpartners — så att du kan
                landa mjukt i stället för att anlända till ett ofärdigt projekt.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-stone-500">
                Bilderna som visas här är interior concept visuals för
                inspiration. Slutlig design, tidsplan och genomförande beror på
                bostaden, budgeten, tillgänglighet och valda lokala partners.
              </p>

              <a
                href="/sv/services/move-in-ready"
                className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Utforska Move-In Ready support
              </a>
            </div>

            <div className="grid gap-6 p-8 md:grid-cols-2 lg:p-12">
              {[
                [
                  "/images/move-in-ready-ibiza.png",
                  "Ibiza Soho Lounge",
                  "Varmt medelhavsboende med mjuka vita toner, naturliga texturer, subtila färgaccenter och en avslappnad indoor-outdoor känsla.",
                  "Ibiza Soho interior concept for Move-In Ready support on the Costa Blanca",
                ],
                [
                  "/images/move-in-ready-kitchen.png",
                  "Contemporary Coastal Kitchen",
                  "En ljusare och mer arkitektonisk riktning med stora fönster, ljusa träslag, förfinade detaljer och lugn kustelegans.",
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
                      Interior direction
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
                Att känna tillhörighet spelar roll
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                En bostad räcker inte om du inte känner dig förankrad.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/85">
                Genom vår egen erfarenhet av expat-support har vi sett att
                människor ibland återvänder hem tidigare än väntat eftersom de
                aldrig bygger en lokal krets, saknar meningsfulla vänskaper eller
                känner sig bortkopplade från vardagslivet.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
                Nordic Circle hjälper till att minska den risken. Under Buyer
                Discovery Experience skapar vi naturliga tillfällen att möta
                människor med liknande bakgrund, livsfas eller intressen — inte
                påtvingat nätverkande, utan en bättre känsla för om området kan
                bli ett riktigt hem.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  [
                    "Social fit",
                    "Introduktioner kan formas efter språk, bakgrund, livsfas och intressen.",
                  ],
                  [
                    "Delade ögonblick",
                    "Luncher, middagar, golf, wellness eller gastronomi hjälper människor att knyta kontakt naturligt.",
                  ],
                  [
                    "Bättre landning",
                    "Målet är att minska risken att känna sig isolerad efter köp och flytt.",
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
                  Utforska Nordic Circle
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

      {/* PURCHASE SAFETY REPORT */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[#1e2a3a] p-12 text-white lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Purchase Safety
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                Minska riskerna innan du köper.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/80">
                När du är seriöst intresserad av en bostad tittar vi bortom
                presentationen. Genom Purchase Safety Report kan oberoende
                specialister granska juridiska och tekniska risker innan du
                binder dig.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Det kan omfatta tillstånd, tillbyggnader, ägarhandlingar,
                möjliga skulder eller belastningar, fukt, läckage, mögel,
                synliga brister och bostadens allmänna skick.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Resultatet är ett tydligare beslut: gå vidare, omförhandla,
                lägga till villkor eller avstå innan du har kommit för långt i
                processen.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/55">
                En teknisk köpargranskning ingår när du köper en bostad via
                Nordic Move Spain, beroende på tillgång till bostaden, timing och
                tillgänglighet hos rätt yrkesperson.
              </p>
            </div>

            <div className="p-10 md:p-12 lg:p-16">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  [
                    "Juridiska risker",
                    "Tillstånd, tillbyggnader, ägarhandlingar och möjliga skulder eller belastningar kan granskas.",
                  ],
                  [
                    "Tekniska risker",
                    "Fukt, läckage, mögel, sprickor, dränering och synliga brister kan upptäckas tidigt.",
                  ],
                  [
                    "Oberoende rapport",
                    "Resultaten samlas så att du förstår riskerna innan du går vidare.",
                  ],
                  [
                    "Tydligt beslut",
                    "Gå vidare, omförhandla, ställ villkor eller avstå med större trygghet.",
                  ],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-[28px] bg-[#f6f1ea] p-7">
                    <h3 className="font-serif text-2xl leading-tight text-[#1e2a3a]">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-stone-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-stone-500">
                Rapporter, foton, dokument och frågor kan samlas i din secure
                client portal så att beslutet förblir organiserat. Den
                inkluderade tekniska köpargranskningen stödjer beslutsfattandet,
                men ersätter inte formell juridisk due diligence, värdering eller
                en fullständig byggteknisk besiktning om detta inte avtalas
                separat.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/sv/services/purchase-safety-report"
                  className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
                >
                  Utforska Purchase Safety
                </a>

                <a
                  href="/sv/contact"
                  className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                >
                  Fråga om bostadskontroll
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="rounded-[40px] bg-white p-5 shadow-sm">
            <img
              src="/images/founder.png"
              alt="The founders of Nordic Move Spain"
              className="h-auto max-h-[620px] w-full rounded-[32px] object-contain object-center"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Om Nordic Move Spain
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
              Skapat för internationella köpare som vill ha lugn, tydlighet och lokal support.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              Nordic Move Spain skapades för internationella köpare som vill ha
              ett tryggare, mer personligt och bättre organiserat sätt att köpa
              bostad på Costa Blanca — från första orientering till ankomst.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Vi förstår att ett köp i Spanien inte bara är ett bostadsbeslut,
              utan också ett val av en annan miljö, en annan vardag och ofta ett
              nytt kapitel. Därför kombinerar vi lifestyle-insikt, lokal kunskap,
              utvalda bostäder, en inkluderad teknisk köpargranskning, säker
              dokumentkontroll och praktiskt stöd efter köpet.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Vår roll är att först hjälpa köpare att förstå rätt plats, sedan
              granska bostaden kritiskt, organisera processen tryggt och, där det
              önskas, forma interior direction och koordinera move-in
              förberedelser med betrodda lokala möbelpartners.
            </p>

            <a
              href="/sv/about-us"
              className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
            >
              Läs mer om oss
            </a>
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
              Ett litet urval praktiska guider för internationella köpare som
              vill förstå pensionsområden, den spanska köpprocessen och
              brittiska skattefrågor innan de fattar beslut.
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
            Köp med tydlighet, struktur och färre blinda fläckar.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Välj det stöd du behöver nu, eller följ hela journey: från
            områdesklarhet via den inkluderade tekniska köpargranskningen till
            en mjuk, move-in ready landing.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/sv/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Start with your Area Match Report
            </a>

            <a
              href="/sv/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Schedule a consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
