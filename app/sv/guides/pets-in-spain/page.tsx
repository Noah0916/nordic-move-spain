import type { Metadata } from "next";

const PAGE_PATH = "/sv/guides/pets-in-spain";
const GUIDES_URL = "/sv/guides";
const ASSESSMENT_URL = "/sv/relocation-assessment";

export const metadata: Metadata = {
  title: "Husdjur i Spanien: allt du behöver veta | Nordic Move Spain",
  description:
    "En praktisk svensk guide om att leva med hund, katt och andra husdjur i Spanien. Läs om reseregler, mikrochip, veterinärvård, community-regler, stränder, klimat och bostadsval.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    type: "article",
    locale: "sv_SE",
    url: PAGE_PATH,
    title: "Husdjur i Spanien: allt du behöver veta",
    description:
      "Praktisk vägledning för svenska djurägare som flyttar till, bor i eller köper bostad i Spanien.",
    siteName: "Nordic Move Spain",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    number: "01",
    title: "Att resa till Spanien med hund eller katt",
    text:
      "För hundar, katter och illrar som reser till Spanien från ett annat EU-land gäller gemensamma europeiska regler. Djuret ska vara identifierat med mikrochip, ha en giltig vaccination mot rabies och resa med ett giltigt europeiskt pass för sällskapsdjur. Efter en första rabiesvaccination måste normalt minst 21 dagar ha gått innan djuret får resa.",
    note:
      "Kommer djuret från ett land utanför EU kan ytterligare dokument, veterinärintyg och i vissa fall ett blodprov för rabiesantikroppar krävas. Kontrollera alltid reglerna för avreselandet innan resan bokas.",
  },
  {
    number: "02",
    title: "Registrering när du bor i Spanien",
    text:
      "Om du flyttar permanent eller tillbringar en stor del av året i Spanien är det klokt att tidigt kontakta en lokal veterinär. Veterinären kan kontrollera mikrochipet, vaccinationerna och vilka regionala registreringskrav som gäller där du bor.",
    note:
      "Se till att kontaktuppgifterna som är kopplade till mikrochipet är aktuella, särskilt om du byter adress eller telefonnummer.",
  },
  {
    number: "03",
    title: "Spanien har tydliga regler för djurvälfärd",
    text:
      "Som djurägare har du ansvar för djurets hälsa, välbefinnande och säkerhet. Ett djur får inte lämnas i en stängd bil under förhållanden som innebär fara och hundar och katter bör inte hållas permanent på balkonger, terrasser, tak, i förråd eller i fordon.",
    note:
      "Planera i förväg vem som tar hand om djuret om du reser bort eller använder bostaden i Spanien som ett andra hem.",
  },
  {
    number: "04",
    title: "Hundägare och lokala krav",
    text:
      "Nationella, regionala och kommunala bestämmelser kan tillsammans påverka vilka krav som gäller för hundägare. Det kan bland annat handla om registrering, ansvar, försäkring och regler för hur hundar får vistas i offentliga miljöer.",
    note:
      "Kontrollera den aktuella tillämpningen med kommunen, en lokal veterinär eller ditt försäkringsbolag när du etablerar dig i Spanien.",
  },
  {
    number: "05",
    title: "Husdjur i lägenheter och urbanisationer",
    text:
      "Om du köper en lägenhet, ett radhus eller en bostad i en urbanisation behöver du också förstå reglerna i den lokala comunidad de propietarios, alltså ägarföreningen. Gemensamma utrymmen kan omfattas av interna regler och störningar för andra boende kan få praktiska konsekvenser.",
    note:
      "Fråga inte bara om husdjur är tillåtna. Kontrollera även regler för hissar, trapphus, gemensamma trädgårdar, promenadområden och säkerheten på balkonger och terrasser.",
  },
  {
    number: "06",
    title: "Får hundar vara på stranden?",
    text:
      "Det finns inget enkelt svar som gäller alla stränder i Spanien. Kommunala regler avgör i praktiken var och när hundar är tillåtna. Reglerna kan därför skilja sig mellan exempelvis Dénia, Jávea, Moraira, Calpe och Altea och kan även vara olika beroende på årstid.",
    note:
      "Om tillgång till strand är viktig för dig och din hund bör du kontrollera de lokala reglerna innan du väljer område.",
  },
  {
    number: "07",
    title: "Tänk på klimatet",
    text:
      "Det varma klimatet på Costa Blanca är en stor del av områdets attraktionskraft, men för ett husdjur kräver sommarvärmen planering. Skugga, ventilation, luftkonditionering och möjligheten att gå ut tidigt på morgonen och senare på kvällen kan vara avgörande för vardagen.",
    note:
      "Har du trädgård bör du även kontrollera att den är ordentligt inhägnad och erbjuder tillräckligt med skugga.",
  },
  {
    number: "08",
    title: "Veterinär och försäkring",
    text:
      "Det finns många veterinärkliniker i de större orterna på Costa Blanca, men avståndet till veterinär och akutvård kan ändå vara värt att kontrollera när du jämför bostäder. En djurförsäkring kan också vara värd att undersöka.",
    note:
      "Jämför inte bara försäkringspremien utan även vad försäkringen faktiskt täcker och vilka undantag som gäller.",
  },
  {
    number: "09",
    title: "Hyra ut en bostad när du själv har husdjur",
    text:
      "Om du planerar att hyra ut din spanska bostad under delar av året behöver du tänka ett steg längre. Var ska ditt eget husdjur vara när bostaden är uthyrd? Tillåter du gäster att ta med djur? Behöver bostaden anpassas för att undvika skador?",
    note:
      "Kontrollera även om ägarföreningen har regler som påverkar hur husdjur får använda gemensamma områden.",
  },
  {
    number: "10",
    title: "Andra husdjur än hundar och katter",
    text:
      "Har du fågel, kanin, reptil eller något annat sällskapsdjur bör du kontrollera reglerna separat. De vanliga europeiska reglerna för djurpass gäller framför allt hundar, katter och illrar och andra arter kan omfattas av andra krav.",
    note:
      "Kontrollera reglerna i god tid om du planerar att flytta med ett exotiskt djur eller en art som omfattas av särskilda införselregler.",
  },
];

const checklist = [
  "Finns det bra promenadområden nära bostaden?",
  "Hur mycket trafik finns i området?",
  "Är trädgården, balkongen eller terrassen säker?",
  "Finns det tillräckligt med skugga under sommaren?",
  "Hur långt är det till veterinär och akutvård?",
  "Vilka regler gäller i comunidad de propietarios?",
  "Är hundar välkomna i närliggande parker och på stränder?",
  "Fungerar bostaden även under årets varmaste månader?",
  "Vem kan ta hand om djuret om du själv reser bort?",
];

const officialSources = [
  {
    title: "Ministerio de Agricultura — Resa med hund, katt eller iller",
    href: "https://www.mapa.gob.es/es/ganaderia/temas/comercio-exterior-ganadero/desplazamiento-animales-compania/viajar-perros-gatos-hurones",
    text:
      "Officiell spansk information om införsel och resor med hundar, katter och illrar.",
  },
  {
    title: "Your Europe — Resa med husdjur inom EU",
    href: "https://europa.eu/youreurope/citizens/travel/carry/pets-and-other-animals/index_sv.htm",
    text:
      "EU-information om mikrochip, rabiesvaccination, djurpass och resor med sällskapsdjur.",
  },
  {
    title: "BOE — Ley 7/2023 om djurskydd",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-7936",
    text:
      "Den spanska nationella lagen om skydd, rättigheter och välbefinnande för djur.",
  },
  {
    title: "BOE — Ley de Propiedad Horizontal",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-1960-10906",
    text:
      "Den centrala spanska lagen om ägarföreningar och användning av gemensamma utrymmen.",
  },
];

export default function HusdjurISpanienPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="bg-[#1e2a3a] px-8 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/60"
          >
            <a className="transition hover:text-white" href="/sv">
              Hem
            </a>
            <span aria-hidden="true">/</span>
            <a className="transition hover:text-white" href={GUIDES_URL}>
              Guider
            </a>
            <span aria-hidden="true">/</span>
            <span>Husdjur i Spanien</span>
          </nav>

          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Leva med husdjur i Spanien
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Husdjur i Spanien: allt du behöver veta
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/80">
            Att flytta till Spanien med hund eller katt innebär mer än att hitta
            en bostad där husdjur är välkomna. Resedokument, registrering,
            veterinärvård, klimat, lokala regler och själva bostadens utformning
            påverkar hur vardagen fungerar.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/70">
            För den som planerar att köpa en bostad på Costa Blanca är det därför
            klokt att ta med husdjurets behov redan när olika områden och
            bostadstyper jämförs.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={ASSESSMENT_URL}
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Gör din Area Match
            </a>

            <a
              href={GUIDES_URL}
              className="rounded-full border border-white/50 px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Se alla guider
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Hela familjen räknas
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Rätt bostad ska fungera även för dem med fyra ben.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              En villa med trädgård, en lägenhet i en urbanisation eller ett hus
              nära stranden kan ge helt olika förutsättningar för livet med hund
              eller katt.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Därför bör du inte bara fråga om husdjur är tillåtna. Fundera också
              på promenadområden, trafik, skugga, tillgång till veterinär,
              community-regler och hur bostaden fungerar under de varmaste
              månaderna.
            </p>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.number}
              className="rounded-[32px] bg-white p-8 shadow-sm"
            >
              <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                {section.number}
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                {section.title}
              </h2>

              <p className="mt-5 leading-relaxed text-stone-600">
                {section.text}
              </p>

              <div className="mt-6 rounded-[24px] bg-[#f6f1ea] p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[#9b743d]">
                  Bra att kontrollera
                </p>

                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  {section.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-[#e9dfd2] px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
            Praktisk checklista
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Att tänka på när du väljer bostad med hund eller katt
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-700">
            För djurägare är den bästa bostaden inte alltid den som ser bäst ut
            på bilder. Hur området och bostaden fungerar i vardagen är minst lika
            viktigt.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {checklist.map((item) => (
              <div
                key={item}
                className="rounded-[24px] bg-[#f6f1ea] p-6 text-sm leading-relaxed text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-10 text-white md:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Ett bra liv i Spanien
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-4xl leading-tight md:text-5xl">
            Ett bra bostadsval handlar om hur vardagen faktiskt kommer att
            fungera.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Om hunden behöver bra promenadvägar, katten behöver en säker uteplats
            eller närheten till veterinär är viktig för dig bör det vara en del
            av beslutet redan när olika områden på Costa Blanca jämförs.
          </p>

          <p className="mt-8 max-w-4xl font-serif text-3xl text-[#c8a063]">
            Rätt bostad ska fungera för hela familjen – även för dem med fyra ben.
          </p>
        </div>
      </section>

      {/* OFFICIAL SOURCES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Officiella källor
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Kontrollera alltid aktuella regler
          </h2>

          <p className="mt-6 max-w-4xl leading-relaxed text-stone-600">
            Regler om resor, registrering, djurhållning, stränder och offentliga
            platser kan ändras. Nedan finns officiella källor för vidare
            kontroll.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {officialSources.map((source) => (
              <a
                key={source.title}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[28px] border border-stone-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  Officiell information
                </p>

                <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {source.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {source.text}
                </p>

                <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#1e2a3a]">
                  Visa källa →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#ede3d5] p-10 md:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
            Välj område med hela vardagen i åtanke
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Jämför områden innan du väljer bostad.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-700">
            Vår Area Match hjälper dig att jämföra platser på Costa Blanca North
            utifrån livsstil, budget, service, långsiktiga planer och praktiska
            behov – inklusive livet med husdjur.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={ASSESSMENT_URL}
              className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#111b29]"
            >
              Gör din Area Match
            </a>

            <a
              href={GUIDES_URL}
              className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Läs fler guider
            </a>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-7xl text-sm leading-relaxed text-stone-500">
          Denna guide innehåller allmän information och ersätter inte juridisk,
          veterinärmedicinsk eller myndighetsspecifik rådgivning. Regler kan
          ändras och lokala bestämmelser kan skilja sig mellan autonoma regioner
          och kommuner.
        </p>
      </section>
    </main>
  );
}