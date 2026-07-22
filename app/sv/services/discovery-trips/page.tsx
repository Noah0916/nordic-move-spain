export const metadata = {
  title: "Move-In Ready-stöd | Nordic Move Spain",
  description:
    "Move-In Ready-stöd för internationella köpare på Costa Blanca: stilbriefing, visuellt moodboard, livsstilskoncept, teknisk genomförbarhet, möbelinköp, belysning, gardiner, installation, styling och förberedelser inför ankomsten.",
};

export default function MoveInReadyPage() {
  const images = [
    {
      src: "/images/move-in-ready-costal.png",
      title: "Coastal Calm",
      text:
        "En mjuk och elegant kuststil med naturliga material, lugna toner, avslappnad komfort och diskret lyx.",
      alt: "Coastal Calm-stil för Move-In Ready-stöd på Costa Blanca",
    },
    {
      src: "/images/move-in-ready-ibiza.png",
      title: "Ibiza Soho Lounge",
      text:
        "En varm och social medelhavsstil med mjuka vita toner, rustikt trä, vävda texturer, subtila färgaccenter och en elegant känsla mellan inne och ute.",
      alt: "Ibiza Soho Lounge-stil för Move-In Ready-stöd på Costa Blanca",
    },
    {
      src: "/images/move-in-ready-kitchen.png",
      title: "Contemporary Coastal Kitchen",
      text:
        "En ljus och arkitektonisk stil med rena linjer, stora fönster, ljusa träslag, raffinerade detaljer och en lugn kustkänsla.",
      alt: "Contemporary Coastal Kitchen-stil för Move-In Ready-stöd på Costa Blanca",
    },
    {
      src: "/images/move-in-ready-mediterranean-warmth.png",
      title: "Mediterranean Warmth",
      text:
        "En avslappnad medelhavslivsstil med terrasser, dagsljus, havsutsikt, måltider utomhus och bekvämt vardagsliv.",
      alt: "Mediterranean Warmth-stil för ett harmoniskt inne- och uteliv på Costa Blanca",
    },
  ];

  const steps = [
    {
      title: "Stilbriefing",
      text:
        "Vi börjar med en personlig stilbriefing för att förstå hur du vill använda bostaden. Det handlar inte bara om smak, utan också om vardagsrytm, familj, gäster, privatliv, underhåll, komfort och den atmosfär du vill skapa.",
    },
    {
      title: "Visuellt moodboard",
      text:
        "Utifrån dina önskemål skapar vi ett visuellt moodboard med färger, material, texturer, möbelreferenser, belysningsidéer och inspiration för livet både inne och ute. Det ger en tydlig riktning innan beslut fattas eller pengar spenderas.",
    },
    {
      title: "Livsstilskoncept",
      text:
        "Vi omvandlar moodboardet till ett livsstilskoncept för bostaden. Konceptet kopplar samman hemmets uttryck med hur det ska fungera i vardagen: avkoppling, gäster, arbete från Spanien, måltider utomhus, familjebesök eller lättskött boende.",
    },
    {
      title: "Entreprenör och teknisk genomförbarhet",
      text:
        "När renovering, installation eller tekniskt arbete behövs tar vi tidigt in rätt lokal entreprenör eller specialist. Då kan vi bedöma vad som är realistiskt för bostaden, budgeten, tidsplanen, tillstånden, materialen och det praktiska genomförandet.",
    },
    {
      title: "Möbelval och inköp",
      text:
        "När stilriktningen är tydlig hjälper vi till att samordna möbelval och inköp genom lämpliga leverantörer och lokala partners. Målet är ett sammanhållet hem, inte en samling osammanhängande inköp.",
    },
    {
      title: "Belysning",
      text:
        "Belysningen påverkar starkt hur ett hem upplevs. Vi hjälper till att planera funktionell belysning, stämningsljus, utvalda armaturer, utomhusbelysning och detaljer som gör hemmet varmt och färdigt.",
    },
    {
      title: "Gardiner och fönsterlösningar",
      text:
        "Gardiner och fönsterlösningar väljs ofta sent, trots att de påverkar privatliv, komfort, akustik och atmosfär. Vi hjälper till att samordna rätt riktning och vid behov den lokala genomförandet.",
    },
    {
      title: "Leverans och installation",
      text:
        "Leveranser, montering och installation kan vara svåra att hantera från utlandet. Vi hjälper till att samordna dessa praktiska steg med pålitliga lokala partners så att processen blir tydligare och mindre splittrad.",
    },
    {
      title: "Styling",
      text:
        "Den avslutande stylingen knyter ihop hemmet: textilier, utvalda accessoarer, detaljer för utomhusmiljön, sängkläder, porslin, växter och de mindre val som gör bostaden personlig och färdig.",
    },
    {
      title: "Förberedelser inför din ankomst",
      text:
        "Inför din ankomst hjälper vi till att samordna de sista praktiska delarna, såsom grundläggande utrustning, slutkontroller, vardagsartiklar och överlämningspunkter. Det ger en lugnare och smidigare start på Costa Blanca.",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] px-8 py-28 text-stone-900">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
          En mjuk start &amp; Move-In Ready
        </p>

        <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
          Move-In Ready-stöd
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
          Efter köpet av en bostad på Costa Blanca vill många internationella
          köpare inte ägna månader åt att från utlandet organisera entreprenörer,
          möbelbutiker, belysning, gardiner, leveranser, installation och styling.
        </p>

        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
          Move-In Ready-stödet hjälper till att förvandla bostaden till ett
          genomtänkt, praktiskt och personligt hem som är förberett inför din
          ankomst. Vi utvecklar stilriktningen, skapar ett visuellt moodboard och
          samordnar lämpliga lokala partners för det praktiska genomförandet.
        </p>

        {/* AEVEN EFTER NYCKELOEVERLAEMNINGEN */}
        <section className="mt-16 rounded-[40px] bg-[#1e2a3a] p-8 text-white shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Även efter nyckelöverlämningen
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Vi fortsätter att hjälpa dig även efter köpet.
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-relaxed text-white/80">
            Köpet är ofta bara början. Därefter kan el, vatten, internet och
            försäkringar fortfarande behöva ordnas. Du kanske också behöver ett
            internationellt flyttföretag, tillfällig förvaring eller biltransport.
            Trädgårds- och poolskötsel, luftkonditionering, uppvärmning, solpaneler,
            renovering och inredning kräver också pålitliga lokala aktörer och
            tydliga överenskommelser.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Nordic Move Spain hjälper dig att organisera dessa steg på ett tydligt
            och strukturerat sätt. Vi talar spanska, känner till de lokala
            arbetsmetoderna och hittar rätt yrkespersoner för din situation. Vi
            begär in offerter, jämför alternativ, samordnar möten och följer
            utvecklingen åt dig.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Du behöver inte lägga månader på att själv leta efter pålitliga
            leverantörer eller upprepa dina önskemål för flera olika personer. Du
            kommunicerar med en fast kontaktperson, medan vi hjälper till att se till
            att de valda parterna vet vad som ska göras, när det ska ske och vem som
            ansvarar för vad.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            För renovering arbetar vi med en utvald och officiellt registrerad
            entreprenör med eget utförandeteam och kvalificerade arkitekter samt
            tekniska arkitekter. Du är självklart fri att anlita din egen entreprenör
            eller andra yrkespersoner.
          </p>

          <p className="mt-6 max-w-4xl text-lg font-medium leading-relaxed text-[#d7bd94]">
            Du kan välja hela Buyer Journey eller endast de tjänster du behöver —
            från köprådgivning och oberoende kontroller till flytt, Home Setup,
            renovering och inredningsstyling.
          </p>
        </section>

        {/* NORDIC MOVE DESIGN BILDER */}
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
                  Nordic Move Design
                </div>
              </div>

              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  Stilriktning
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
          De visade Nordic Move Designs är stilriktningar för inspiration. De är
          inte bostadsannonser eller färdigställda kundprojekt. Den slutliga
          designen, tidsplanen och genomförandet anpassas efter bostaden, budgeten,
          tillgängligheten och de valda lokala partnerna.
        </p>

        {/* PROCESS */}
        <section className="mt-20 rounded-[40px] bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Det här samordnar vi
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
            Move-In Ready-stödet anpassas efter varje bostad och kund. Omfattning,
            tidsplan, pris och tillgänglighet beror på bostaden, de arbeten som krävs,
            valda partners, material och önskad servicenivå.
          </p>
        </section>

        <div className="mt-16 rounded-[40px] bg-[#1e2a3a] p-10 text-white md:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Personligt stöd i varje steg
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Berätta i vilket steg av din Buyer Journey du behöver stöd.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Kontakta oss och berätta vilken tjänst eller vilket steg du behöver
            hjälp med. Oavsett om du fortfarande väljer rätt område, redan har hittat
            en bostad, behöver oberoende köpkontroller eller söker stöd med flytt,
            renovering och Move-In Ready, går vi tillsammans igenom det mest lämpliga
            nästa steget.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-[0.7fr_1.3fr]">
            <a
              href="/sv/contact"
              className="inline-flex min-h-[112px] items-center justify-center rounded-[28px] border border-white/35 px-8 py-6 text-center text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-[#1e2a3a]"
            >
              Använd kontaktformuläret
            </a>

            <a
              href="https://wa.me/31683848239?text=Hej%20Nordic%20Move%20Spain%2C%20jag%20vill%20g%C3%A4rna%20diskutera%20vilken%20tj%C3%A4nst%20eller%20vilket%20steg%20i%20Buyer%20Journey%20jag%20beh%C3%B6ver%20hj%C3%A4lp%20med."
              target="_blank"
              rel="noreferrer"
              aria-label="Starta en direkt WhatsApp-konversation med Nordic Move Spain"
              className="group flex min-h-[112px] items-center gap-5 rounded-[28px] bg-white px-6 py-5 text-[#1e2a3a] shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.24)] md:px-8"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#c8a063] text-white">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-7 w-7 fill-current"
                >
                  <path d="M16.04 3C8.87 3 3.05 8.78 3.05 15.91c0 2.28.6 4.51 1.75 6.47L3 29l6.82-1.77a13.03 13.03 0 0 0 6.22 1.58h.01C23.21 28.81 29 23.03 29 15.9 29 8.78 23.21 3 16.04 3Zm0 23.62h-.01a10.83 10.83 0 0 1-5.52-1.51l-.4-.24-4.05 1.05 1.08-3.93-.26-.4a10.7 10.7 0 0 1-1.65-5.68c0-5.92 4.85-10.74 10.82-10.74 5.96 0 10.81 4.82 10.81 10.74 0 5.92-4.85 10.71-10.82 10.71Zm5.94-8.02c-.33-.16-1.92-.94-2.22-1.05-.3-.11-.52-.16-.74.16-.22.33-.85 1.05-1.04 1.27-.19.22-.38.24-.71.08-.33-.16-1.38-.5-2.63-1.61a9.8 9.8 0 0 1-1.82-2.25c-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.7 0 1.59 1.17 3.13 1.33 3.35.16.22 2.3 3.48 5.57 4.88.78.33 1.38.53 1.86.68.78.25 1.49.21 2.05.13.63-.09 1.92-.78 2.19-1.54.27-.76.27-1.4.19-1.54-.08-.14-.3-.22-.63-.38Z" />
                </svg>
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs font-medium uppercase tracking-[0.25em] text-[#b88948]">
                  Direkt via WhatsApp
                </span>
                <span className="mt-1 block font-serif text-2xl leading-tight">
                  Starta en personlig konversation
                </span>
                <span className="mt-1 block text-sm text-stone-500">
                  +31 6 83 84 82 39
                </span>
              </span>

              <span
                aria-hidden="true"
                className="text-2xl transition group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}