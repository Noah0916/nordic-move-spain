export const metadata = {
  title: "Move-In Ready-stöd | Nordic Move Spain",
  description:
    "Move-In Ready-stöd för internationella köpare på Costa Blanca: stilgenomgång, visuellt moodboard, livsstilskoncept, teknisk genomförbarhet, möbelsourcing, belysning, gardiner, installation, styling och förberedelse inför ankomst.",
};

export default function MoveInReadyPageSV() {
  const images = [
    {
      src: "/images/move-in-ready-costal.png",
      title: "Coastal Calm",
      text:
        "En mjuk och elegant kuststil med naturliga material, lugna nyanser, avslappnad komfort och diskret lyx.",
      alt: "Coastal Calm inredningskoncept för Move-In Ready-stöd på Costa Blanca",
    },
    {
      src: "/images/move-in-ready-ibiza.png",
      title: "Ibiza Soho Lounge",
      text:
        "En varm och social medelhavsstil med mjuka vita toner, rustikt trä, vävda texturer, subtila färgaccenter och en elegant känsla mellan inne och ute.",
      alt: "Ibiza Soho lounge inredningskoncept för Move-In Ready-stöd på Costa Blanca",
    },
    {
      src: "/images/move-in-ready-kitchen.png",
      title: "Contemporary Coastal Kitchen",
      text:
        "En ljusare och mer arkitektonisk riktning med rena linjer, stora fönster, ljusa trätoner, förfinade detaljer och en lugn kustkänsla.",
      alt: "Contemporary Coastal Kitchen-koncept för Move-In Ready-stöd på Costa Blanca",
    },
    {
      src: "/images/move-in-ready-mediterranean-warmth.png",
      title: "Mediterranean Warmth",
      text:
        "En avslappnad medelhavsinspirerad livsstilsriktning med terrasser, ljus, havsutsikt, middagar utomhus och ett bekvämt vardagsliv i centrum.",
      alt: "Mediterranean Warmth indoor-outdoor living-koncept för Move-In Ready-stöd på Costa Blanca",
    },
  ];

  const steps = [
    {
      title: "Stilgenomgång",
      text:
        "Vi börjar med en personlig stilgenomgång för att förstå hur du vill leva i bostaden. Det handlar inte bara om smak, utan också om vardagsrytm, användning av familj och gäster, privatliv, underhåll, komfort och den känsla du vill skapa.",
    },
    {
      title: "Visuellt moodboard",
      text:
        "Utifrån dina preferenser skapar vi ett visuellt moodboard med färger, material, texturer, möbelreferenser, ljusidéer och inspiration för livet både inne och ute. På så sätt får vi en tydlig riktning innan beslut fattas eller kostnader uppstår.",
    },
    {
      title: "Livsstilskoncept",
      text:
        "Vi översätter moodboardet till ett livsstilskoncept för bostaden. Konceptet kopplar samman husets uttryck med hur det ska fungera i vardagen: avkoppling, att ta emot gäster, arbeta från Spanien, äta utomhus, familjebesök eller ett lättskött boende.",
    },
    {
      title: "Entreprenör / teknisk genomförbarhet",
      text:
        "Om renovering, installation eller tekniskt arbete behövs involverar vi rätt lokal entreprenör eller specialist i ett tidigt skede. Då blir det tydligt vad som är realistiskt för bostaden, budgeten, tidsplanen, tillstånd, material och det praktiska genomförandet.",
    },
    {
      title: "Möbelsourcing",
      text:
        "När riktningen är tydlig hjälper vi till att samordna möbelsourcing via passande leverantörer och lokala partners. Målet är ett sammanhängande hem, inte en samling separata inköp.",
    },
    {
      title: "Belysning",
      text:
        "Belysning har stor påverkan på hur en bostad känns. Vi tänker med kring praktisk belysning, stämningsbelysning, statement pieces, utomhusbelysning och de detaljer som får hemmet att kännas varmt och färdigt.",
    },
    {
      title: "Gardiner",
      text:
        "Gardiner och fönsterdekorationer ordnas ofta för sent, men de påverkar privatliv, komfort, akustik och atmosfär mycket. Vi hjälper till att samordna rätt riktning och lokal utförande där det behövs.",
    },
    {
      title: "Installation",
      text:
        "Leveranser, montering och installation är svårt att organisera från utlandet. Vi hjälper till att samordna dessa praktiska steg med pålitliga lokala partners, så att processen blir mer strukturerad och mindre splittrad.",
    },
    {
      title: "Styling",
      text:
        "Det sista stylinglagret binder ihop bostaden: textilier, utvalda accessoarer, detaljer för utomhusmiljöer, sängkläder, porslin, växter och de mindre val som får hemmet att kännas personligt istället för ofärdigt.",
    },
    {
      title: "Förberedelse inför ankomst",
      text:
        "Inför ankomst hjälper vi till att samordna de sista praktiska detaljerna, så att bostaden känns förberedd: grundinredning, sista kontroller, praktiska artiklar, överlämningspunkter och en smidigare start på vardagslivet på Costa Blanca.",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] px-8 py-28 text-stone-900">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
          Soft Landing &amp; Move-In Ready
        </p>

        <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
          Move-In Ready-stöd
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
          Efter köp av en bostad på Costa Blanca vill många internationella
          köpare inte lägga månader på att organisera entreprenörer, möbelbutiker,
          belysning, gardiner, leveranser, installation och styling från utlandet.
        </p>

        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
          Move-In Ready-stöd hjälper till att göra bostaden till ett hem som
          känns genomtänkt, praktiskt och förberett före ankomst. Vi hjälper till
          att forma inredningsriktningen, skapa ett visuellt koncept och
          samordna rätt lokala partners för det praktiska genomförandet.
        </p>

        {/* INTERIOR CONCEPT IMAGES */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {images.map((image) => (
            <article
              key={image.title}
              className="overflow-hidden rounded-[32px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[380px] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1e2a3a] backdrop-blur">
                  Konceptvisual
                </div>
              </div>

              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  Inredningsriktning
                </p>

                <h2 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  {image.title}
                </h2>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {image.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-relaxed text-stone-500">
          Bilderna på den här sidan är inredningsvisualiseringar för inspiration.
          De är inte aktuella bostäder eller färdigställda kundprojekt. Slutlig
          design, tidsplan och genomförande beror på bostaden, budgeten,
          tillgänglighet och de valda lokala partnerna.
        </p>

        {/* PROCESS */}
        <section className="mt-20 rounded-[40px] bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vad vi samordnar
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Move-In Ready-processen
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[28px] bg-[#f6f1ea] p-7"
              >
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm leading-relaxed text-stone-500">
            Move-In Ready-stöd anpassas efter varje bostad och varje kund.
            Omfattning, tidsplan, pris och tillgänglighet beror på bostaden, det
            arbete som krävs, valda partners, material och vald servicenivå.
          </p>
        </section>

        <div className="mt-16 rounded-[40px] bg-[#1e2a3a] p-10 text-white md:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Börja med tydlighet
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Kom fram till en bostad som känns genomtänkt, inte ofärdig.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Från stilgenomgång och visuellt moodboard till livsstilskoncept,
            entreprenörssamordning, möbelsourcing, belysning, gardiner,
            installation, styling och de sista förberedelserna inför ankomst —
            vi hjälper till att göra det sista steget till din bostad på Costa
            Blanca lugnare och bättre organiserat.
          </p>

          <a
            href="/sv/contact"
            className="mt-8 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Diskutera Move-In Ready-stöd
          </a>
        </div>
      </section>
    </main>
  );
}