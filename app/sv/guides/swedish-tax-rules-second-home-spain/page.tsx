export const metadata = {
  title:
    "Svenska skatteregler för en andra bostad i Spanien | Guide 2026",
  description:
    "Svensk guide till skatteregler för en andra bostad i Spanien. Läs om svensk deklaration, spansk IBI, Modelo 210, uthyrning, försäljning, dubbelbeskattning, förmögenhetsskatt och vanliga misstag.",
  keywords: [
    "svenska skatteregler andra bostad Spanien",
    "köpa andra bostad Spanien skatt",
    "deklarera bostad utomlands Skatteverket",
    "hyra ut bostad Spanien skatt Sverige",
    "Modelo 210 Spanien svensk ägare",
    "IRNR Spanien svensk köpare",
    "IBI Spanien fastighetsskatt",
    "försäljning bostad Spanien skatt Sverige",
    "dubbelbeskattning Sverige Spanien fastighet",
    "förmögenhetsskatt Spanien svensk ägare",
    "Costa Blanca second home tax Sweden",
    "svensk deklaration spansk bostad",
  ],
  alternates: {
    canonical: "/sv/guides/swedish-tax-rules-second-home-spain",
  },
  openGraph: {
    title:
      "Svenska skatteregler för en andra bostad i Spanien",
    description:
      "En tydlig guide för svenska köpare om svensk deklaration, spanska skatter, Modelo 210, uthyrning, försäljning, avräkning och vanliga skattemisstag vid bostadsköp i Spanien.",
    url: "/sv/guides/swedish-tax-rules-second-home-spain",
    siteName: "Nordic Move Spain",
    locale: "sv_SE",
    type: "article",
  },
};

const quickSummary = [
  "Du behöver normalt inte meddela Skatteverket bara för att du köper en bostad utomlands.",
  "Om du är obegränsat skattskyldig i Sverige ska du normalt deklarera uthyrning eller försäljning av bostaden i Sverige.",
  "Du betalar inte svensk fastighetsavgift för en privatbostad utomlands.",
  "Spanien kan ändå ta ut spanska skatter, till exempel IBI, non-resident income tax och ibland förmögenhetsskatt.",
  "Även om bostaden inte hyrs ut kan en svensk icke-resident ägare behöva lämna Modelo 210 i Spanien för schablonbeskattad egen användning.",
  "Om bostaden hyrs ut ska skatten planeras både i Spanien och Sverige, och underlag måste sparas i båda länderna.",
];

const swedishTaxPoints = [
  {
    title: "Svensk skatterätt börjar med din skatterättsliga hemvist",
    text:
      "Om du är obegränsat skattskyldig i Sverige är utgångspunkten att du ska redovisa inkomster i Sverige även om inkomsten kommer från Spanien. Det kan gälla uthyrningsinkomst, kapitalvinst vid försäljning och vissa andra inkomster från bostaden.",
  },
  {
    title: "Köp av bostad utomlands behöver normalt inte anmälas",
    text:
      "Att köpa en bostad i Spanien innebär inte i sig att du måste meddela Skatteverket. Däremot måste du ha koll på deklarationsskyldighet om bostaden hyrs ut, säljs eller ger annan skattepliktig inkomst.",
  },
  {
    title: "Ingen svensk fastighetsavgift på utländsk bostad",
    text:
      "En privatbostad i Spanien belastas inte med svensk kommunal fastighetsavgift eller svensk fastighetsskatt. Däremot kan spanska lokala och statliga skatter gälla.",
  },
  {
    title: "Uthyrning kan beskattas i Sverige",
    text:
      "Om du hyr ut bostaden och är obegränsat skattskyldig i Sverige ska överskottet normalt redovisas i inkomstslaget kapital. För privatbostäder finns svenska schablonavdrag, men du måste räkna enligt rätt bostadstyp.",
  },
  {
    title: "Försäljning kan behöva deklareras i Sverige",
    text:
      "Om du säljer bostaden med vinst kan vinsten behöva redovisas i svensk deklaration. För privatbostad motsvarar svensk skatt normalt 22 procent av vinsten, eftersom 22/30 av vinsten beskattas med 30 procent kapitalinkomstskatt.",
  },
  {
    title: "Avräkning kan minska dubbelbeskattning",
    text:
      "Om samma inkomst beskattas i både Spanien och Sverige kan avräkning av utländsk skatt bli aktuell. Det kräver dokumentation och rätt redovisning i deklarationen.",
  },
];

const spanishTaxPoints = [
  {
    title: "IBI — lokal fastighetsskatt",
    text:
      "IBI är en kommunal fastighetsskatt i Spanien. Den baseras normalt på fastighetens cadastral value och betalas till kommunen. Beloppet varierar mellan kommuner och bostäder.",
  },
  {
    title: "Modelo 210 — egen användning",
    text:
      "Om du inte är skattemässigt bosatt i Spanien och äger en urban bostad som du använder själv eller låter stå tom, kan du behöva deklarera schablonintäkt genom Modelo 210. För EU/EES-residenter är skattesatsen normalt 19 procent.",
  },
  {
    title: "Modelo 210 — uthyrning",
    text:
      "Om du hyr ut bostaden som icke-resident beskattas uthyrningsinkomsten i Spanien genom IRNR och Modelo 210. EU/EES-residenter kan normalt använda 19 procent och vissa avdrag kan vara möjliga enligt spanska regler.",
  },
  {
    title: "Turistuthyrning",
    text:
      "Skatt är bara en del av frågan. Turistuthyrning kräver också kontroll av regionala regler, kommunala krav, eventuell registrering och community-regler.",
  },
  {
    title: "Kapitalvinst vid försäljning",
    text:
      "Spanien kan beskatta kapitalvinst vid försäljning av spansk fastighet. I praktiken behövs ofta spansk skatterådgivning vid försäljning, särskilt om du också är skattskyldig i Sverige.",
  },
  {
    title: "Förmögenhetsskatt och stora förmögenheter",
    text:
      "Svenska ägare med högre värden i Spanien bör kontrollera spansk förmögenhetsskatt. Icke-residenter beskattas normalt bara för tillgångar och rättigheter i Spanien, med ett generellt fribelopp som ofta anges till 700 000 euro.",
  },
];

const rentalSteps = [
  {
    step: "1. Separera egen användning och uthyrningsdagar",
    text:
      "Spara en kalender över vilka dagar bostaden används privat, står tom eller hyrs ut. Detta är viktigt för både spansk och svensk rapportering.",
  },
  {
    step: "2. Spara alla intäktsunderlag",
    text:
      "Spara bokningsbekräftelser, plattformsrapporter, bankutdrag och fakturor. Plattformar kan rapportera uthyrningsuppgifter till skattemyndigheter.",
  },
  {
    step: "3. Kontrollera spansk rapportering",
    text:
      "För icke-residenta ägare sker deklaration normalt via Modelo 210. Deklarationsperioder och regler kan ändras, så kontrollera aktuell deadline för det aktuella beskattningsåret.",
  },
  {
    step: "4. Räkna svensk beskattning separat",
    text:
      "Svenska regler för privatbostad kan ge schablonavdrag och andra avdrag beroende på bostadstyp. Räkna inte automatiskt enligt spanska avdragsregler i svensk deklaration.",
  },
  {
    step: "5. Bedöm avräkning",
    text:
      "Om du betalat slutlig skatt i Spanien på en inkomst som också beskattas i Sverige kan du behöva begära avräkning. Spara spanska deklarationer och betalningsbevis.",
  },
];

const commonMistakes = [
  {
    title: "Att tro att svensk skatt försvinner bara för att bostaden ligger i Spanien",
    text:
      "Om du är skatterättsligt bosatt i Sverige kan Sverige fortfarande kräva att du redovisar uthyrning eller försäljning.",
  },
  {
    title: "Att glömma Modelo 210 när bostaden inte hyrs ut",
    text:
      "Många ägare känner till skatt på uthyrning, men missar att Spanien också kan beskatta schablonintäkt för egen användning eller tom bostad.",
  },
  {
    title: "Att blanda ihop IBI med inkomstskatt",
    text:
      "IBI är en lokal fastighetsskatt. Den ersätter inte Modelo 210, skatt på uthyrning eller eventuell skatt vid försäljning.",
  },
  {
    title: "Att inte spara dokumentation",
    text:
      "Utan underlag blir avdrag, kapitalvinstberäkning och avräkning svårare. Spara köpehandling, kostnader, renoveringsfakturor, skattebetalningar och uthyrningsrapporter.",
  },
  {
    title: "Att anta att plattformsuthyrning är privat och osynlig",
    text:
      "Digitala plattformar kan lämna uppgifter till skattemyndigheter. Utgå från att uthyrningsdata kan kontrolleras.",
  },
  {
    title: "Att räkna med uthyrningsintäkter utan att kontrollera tillstånd",
    text:
      "Skatteplanering hjälper inte om turistuthyrning inte är tillåten enligt regionala regler, kommunala krav eller community-regler.",
  },
];

const documents = [
  "Köpehandling / escritura",
  "Slutlig köpkostnadskalkyl",
  "Notarie- och registerkvitton",
  "ITP-, IVA- eller AJD-underlag från köpet",
  "IBI-kvitton",
  "Modelo 210-deklarationer och betalningsbevis",
  "Community-avgifter och kvitton",
  "Försäkringskostnader",
  "Renoveringsfakturor och tekniska förbättringar",
  "Uthyrningsrapporter från plattformar",
  "Bankutdrag för hyresbetalningar",
  "Spanska skattebeslut eller bekräftelser",
  "Svenska deklarationsunderlag",
  "Valutakurser som använts vid svensk deklaration",
];

const buyerProfiles = [
  {
    title: "Du bor kvar i Sverige och använder bostaden själv",
    text:
      "Fokus ligger ofta på spansk IBI, Modelo 210 för egen användning, försäkring, community och löpande kostnader. I Sverige finns normalt ingen fastighetsavgift på den spanska bostaden.",
  },
  {
    title: "Du bor i Sverige och hyr ut ibland",
    text:
      "Du behöver normalt hantera både spansk beskattning på uthyrning och svensk deklaration av överskott. Kontrollera också turistlicens, community-regler och plattformsrapportering.",
  },
  {
    title: "Du planerar att sälja senare",
    text:
      "Spara alla kostnadsunderlag från början. Kapitalvinstberäkningen vid försäljning blir mycket enklare om du har dokumentation för inköp, kostnader och förbättringar.",
  },
  {
    title: "Du funderar på att flytta till Spanien",
    text:
      "Då förändras frågan från andra bostad till skatterättslig hemvist. Skatt, pension, sjukvård, förmögenhet och svensk anknytning bör analyseras innan flytten.",
  },
];

const faqs = [
  {
    question: "Måste jag meddela Skatteverket när jag köper en bostad i Spanien?",
    answer:
      "Normalt inte bara för själva köpet. Men om du är obegränsat skattskyldig i Sverige och hyr ut eller säljer bostaden ska det normalt redovisas i svensk deklaration.",
  },
  {
    question: "Betalar jag svensk fastighetsskatt på min bostad i Spanien?",
    answer:
      "Nej, en privatbostad utomlands belastas inte med svensk fastighetsavgift eller svensk fastighetsskatt. Däremot kan spanska skatter som IBI och Modelo 210 gälla.",
  },
  {
    question: "Vad är Modelo 210?",
    answer:
      "Modelo 210 är den spanska deklarationsblanketten för vissa inkomster och schablonintäkter som icke-residenta personer har i Spanien, till exempel uthyrning eller egen användning av urban bostad.",
  },
  {
    question: "Måste jag betala skatt i Spanien även om jag inte hyr ut bostaden?",
    answer:
      "Ja, om du är icke-resident och äger en urban bostad för egen användning eller som står tom kan Spanien ta ut non-resident income tax på en schablonintäkt.",
  },
  {
    question: "Hur beskattas uthyrning i Sverige?",
    answer:
      "För en privatbostad beskattas överskott normalt i kapital. Det finns ett schablonavdrag på högst 40 000 kronor per bostad och år, och ytterligare avdrag beroende på bostadstyp.",
  },
  {
    question: "Hur beskattas försäljning av en spansk bostad i Sverige?",
    answer:
      "Om du är obegränsat skattskyldig i Sverige kan försäljningen behöva deklareras i Sverige. För privatbostad är svensk skatt på vinsten normalt 22 procent.",
  },
  {
    question: "Kan jag få avräkning för spansk skatt?",
    answer:
      "Det kan vara möjligt om samma inkomst beskattas i både Spanien och Sverige och du kan visa att slutlig utländsk skatt betalats. Detta behöver hanteras korrekt i deklarationen.",
  },
  {
    question: "Behöver jag en svensk eller spansk skatterådgivare?",
    answer:
      "Ofta båda om uthyrning, försäljning, större värden eller flytt till Spanien är aktuellt. Spanien och Sverige räknar inte alltid på samma sätt.",
  },
];

const officialSources = [
  {
    title: "Skatteverket — Bostad utomlands",
    description:
      "Svensk information om att äga, hyra ut och sälja bostad utomlands samt obegränsad och begränsad skattskyldighet.",
    href: "https://www.skatteverket.se/privat/fastigheterochbostad/bostadutomlands.4.233f91f71260075abe8800033670.html",
  },
  {
    title: "Skatteverket — Deklarera inkomster från utlandet",
    description:
      "Information om hur utländska inkomster ska deklareras i Sverige och hur avräkning av utländsk skatt kan hanteras.",
    href: "https://www.skatteverket.se/privat/deklaration/deklarerainkomsterfranutlandet.4.71004e4c133e23bf6db8000109217.html",
  },
  {
    title: "Skatteverket — Hyra ut privatbostad",
    description:
      "Svenska regler för schablonavdrag, avdrag och beskattning vid uthyrning av privatbostad.",
    href: "https://www.skatteverket.se/privat/fastigheterochbostad/inkomsterfranbostad/hyrautprivatbostadbostadsrattsmahusochhyresratt.4.233f91f71260075abe8800033479.html",
  },
  {
    title: "Skatteverket — Räkna ut vinst, förlust och skatt",
    description:
      "Svensk information om kapitalvinstbeskattning vid försäljning av privatbostad.",
    href: "https://www.skatteverket.se/privat/fastigheterochbostad/forsaljningavbostad/raknautvinstforlustochskatt.4.233f91f71260075abe8800033595.html",
  },
  {
    title: "Skatteverket — Avräkning av utländsk skatt",
    description:
      "Svenska regler om när utländsk skatt kan avräknas mot svensk skatt.",
    href: "https://www.skatteverket.se/privat/internationellt/avrakningavutlandskskatt.4.7856a2b411550b99fb7800088114.html",
  },
  {
    title: "Agencia Tributaria — Imputed income from urban property",
    description:
      "Spansk information om IRNR för icke-residenta ägare som använder bostaden själva eller låter den stå tom.",
    href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/irnr-sin-establecimiento-permanente/cuestiones-especificas-sobre-tributacion-inmuebles/renta-imputada-inmueble-urbano-uso-propio.html",
  },
  {
    title: "Agencia Tributaria — Form 210",
    description:
      "Officiell information om Modelo 210 för non-resident income tax.",
    href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/procedimientoini/GF00.shtml",
  },
  {
    title: "Agencia Tributaria — Non-resident income tax and property rentals",
    description:
      "Spansk information om IRNR för inkomster från fastigheter i Spanien.",
    href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/vivienda-otros-inmuebles/tributacion-arrendador-viviendas-otros-inmuebles/tributacion-alquiler-apartamentos-turisticos/impuesto-sobre-renta-no-residentes.html",
  },
  {
    title: "Agencia Tributaria — Wealth Tax for non-residents",
    description:
      "Spansk information om när förmögenhetsskatt kan gälla för icke-residenter med tillgångar i Spanien.",
    href: "https://sede.agenciatributaria.gob.es/Sede/no-residentes/impuesto-sobre-patrimonio/exigibilidad-impuesto-sobre-patrimonio-no-residentes.html",
  },
  {
    title: "Agencia Tributaria — Temporary Solidarity Tax on Large Fortunes",
    description:
      "Information om den spanska solidaritetsskatten för stora förmögenheter.",
    href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/declaraciones-informativas-otros-impuestos-tasas/impuesto-temporal-solidaridad-grandes-fortunas.html",
  },
];

export default function SwedishTaxRulesSecondHomeSpainPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Svenska skatteregler för en andra bostad i Spanien",
    description:
      "En svensk guide om skatt, deklaration, Modelo 210, uthyrning, försäljning och avräkning för svenska ägare av bostad i Spanien.",
    author: {
      "@type": "Organization",
      name: "Nordic Move Spain",
    },
    publisher: {
      "@type": "Organization",
      name: "Nordic Move Spain",
    },
    inLanguage: "sv-SE",
    mainEntityOfPage: "/sv/guides/swedish-tax-rules-second-home-spain",
  };

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="bg-[#1e2a3a] px-8 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <a
            href="/sv/guides"
            className="text-sm uppercase tracking-[0.25em] text-[#c8a063]"
          >
            ← Tillbaka till guider
          </a>

          <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Skatt, deklaration och ägande
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Svenska skatteregler för en andra bostad i Spanien.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Att köpa en bostad i Spanien handlar inte bara om pris, läge och
            utsikt. Svenska köpare måste förstå hur svensk deklaration, spanska
            non-resident-regler, uthyrning, försäljning och avräkning hänger
            ihop.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/sv/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Gör din Area Match
            </a>

            <a
              href="/sv/contact"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Fråga innan du köper
            </a>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY */}
      <section className="px-8 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[34px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Kort sammanfattning
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
              Det här behöver du ha kontroll på.
            </h2>

            <ul className="mt-6 space-y-4">
              {quickSummary.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-stone-700">
                  <span className="mt-1 text-[#c8a063]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Sverige och Spanien samtidigt
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              En spansk bostad kan skapa deklarationsfrågor i två länder.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              För många svenska köpare är bostaden i Spanien en privat
              livsstilsinvestering: semester, vintervistelser, pensionärsliv
              eller framtida flytt. Men skattemässigt är det viktigt att skilja
              mellan tre saker: <strong>att äga</strong>,{" "}
              <strong>att hyra ut</strong> och <strong>att sälja</strong>.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Att äga en bostad i Spanien betyder inte automatiskt att du måste
              betala svensk fastighetsavgift. Men om bostaden hyrs ut eller
              säljs, och du fortfarande är obegränsat skattskyldig i Sverige,
              kan inkomsten behöva redovisas i Sverige.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Samtidigt har Spanien sina egna regler för fastighetsägare som
              inte är skattemässigt bosatta i Spanien. Det är här många svenska
              köpare missar Modelo 210, IBI eller spansk skatt på uthyrning och
              försäljning.
            </p>
          </div>
        </div>
      </section>

      {/* SWEDISH RULES */}
      <section className="bg-white px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Svenska regler
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Vad säger de svenska reglerna om bostad i Spanien?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {swedishTaxPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] bg-[#f6f1ea] p-8"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPANISH TAXES */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Spanska skatter
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Vilka spanska skatter kan gälla för en svensk ägare?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {spanishTaxPoints.map((item) => (
              <article key={item.title} className="rounded-[30px] bg-white p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[34px] border border-[#c8a063]/40 bg-[#fffaf3] p-8">
            <h3 className="font-serif text-3xl text-[#1e2a3a]">
              Viktigt om Modelo 210
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-stone-700">
              Många svenska ägare tror att spansk skatt bara uppstår när
              bostaden hyrs ut. Det stämmer inte alltid. En icke-resident ägare
              kan behöva deklarera schablonintäkt för egen användning eller tom
              bostad. Det är därför Modelo 210 bör finnas med i din årliga
              ägarchecklista.
            </p>
          </div>
        </div>
      </section>

      {/* RENTAL */}
      <section className="bg-[#e9dfd2] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
            Uthyrning
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Om du hyr ut måste du planera skatt i båda länderna.
          </h2>

          <div className="mt-12 space-y-6">
            {rentalSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-[30px] bg-[#f6f1ea] p-8"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.step}
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILES */}
      <section className="bg-white px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vanliga köparprofiler
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Skatterisken beror på hur du faktiskt använder bostaden.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {buyerProfiles.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] bg-[#f6f1ea] p-8"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vanliga misstag
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Det här är misstagen som skapar onödig stress senare.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {commonMistakes.map((item) => (
              <article key={item.title} className="rounded-[30px] bg-white p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="bg-[#e9dfd2] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
            Dokument att spara
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Spara underlag från dag ett. Det gör framtida deklaration mycket
            enklare.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {documents.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f6f1ea] p-5 leading-relaxed text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[34px] bg-[#1e2a3a] p-8 text-white">
            <h3 className="font-serif text-3xl">
              Nordic Move Spain-råd
            </h3>

            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-white/80">
              Skatteproblem uppstår ofta inte för att köparen gör något
              medvetet fel, utan för att dokumentation saknas. Spara allt som
              rör köp, förbättringar, uthyrning, skatter och försäljning.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vanliga frågor
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Frågor svenska köpare ofta ställer om skatt på bostad i Spanien.
          </h2>

          <div className="mt-12 space-y-5">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[30px] bg-white p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {faq.question}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section className="bg-[#e9dfd2] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
            Officiella källor
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Källor från svenska och spanska skattemyndigheter.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {officialSources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[30px] bg-[#f6f1ea] p-8 transition hover:bg-white"
              >
                <h3 className="font-serif text-2xl text-[#1e2a3a]">
                  {source.title}
                </h3>

                <p className="mt-4 leading-relaxed text-stone-700">
                  {source.description}
                </p>

                <span className="mt-6 inline-block text-sm uppercase tracking-[0.2em] text-[#1e2a3a]">
                  Öppna källa →
                </span>
              </a>
            ))}
          </div>

          <p className="mt-10 max-w-4xl text-sm leading-relaxed text-stone-600">
            Den här guiden är praktisk information för köpare och ersätter inte
            skattejuridisk rådgivning. Regler, skattesatser och deadlines kan
            ändras. Be alltid en svensk och spansk skatterådgivare kontrollera
            din specifika situation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-12 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vill du förstå hela bilden före köp?
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight">
            En bostad i Spanien ska passa både livet, budgeten och de praktiska
            skyldigheterna.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Vår Area Match Assessment hjälper dig att jämföra områden,
            bostadstyper, livsstil, uthyrningsplaner, kostnader och praktiska
            kontrollpunkter innan du går vidare.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/sv/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Gör din Area Match
            </a>

            <a
              href="/sv/contact"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Kontakta oss
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
