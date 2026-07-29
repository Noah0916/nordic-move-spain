import type { Metadata } from "next";
import type { ReactNode } from "react";

/**
 * Aanbevolen locatie:
 * app/nl/guides/hoe-lang-duurt-huis-kopen-spanje/page.tsx
 *
 * De genoemde doorlooptijden zijn realistische bandbreedtes en geen garanties.
 * Controleer voor publicatie de interne routes en publicatiedatum.
 */

const PAGE_URL = "/nl/guides/hoe-lang-duurt-huis-kopen-spanje";
const CONTACT_URL = "/nl/contact";
const ASSESSMENT_URL = "/nl/relocation-assessment";
const GUIDES_URL = "/nl/guides";

const RELATED_GUIDES = {
  buying: "/nl/guides/buying-property-spain",
  mortgage: "/nl/guides/kosten-en-nieuwe-hypotheek-regels",
  taxes: "/nl/guides/itp-iva-ajd-eenvoudig-uitgelegd",
  costs: "/nl/guides/totale-kosten-aankoop",
  mistakes: "/nl/guides/common-mistakes-buying-property-spain",
  differences: "/nl/guides/spaanse-regels-nederland",
};

const OFFICIAL_SOURCES = {
  nie: "https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/ciudadanos-de-la-union-europea/numero-de-Identidad-de-extranjero-nie/",
  foreignDocumentation:
    "https://www.interior.gob.es/opencms/gl/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/regimen-general/documentacion-de-las-personas-extranjeras/",
  mortgageLaw: "https://www.boe.es/buscar/act.php?id=BOE-A-2019-3814",
  mortgageProcess:
    "https://clientebancario.bde.es/pcb/es/menu-horizontal/productosservici/financiacion/hipotecas/guia-textual/primerospasoscon/Contratacion_de_la_hipoteca.html",
  valuation:
    "https://www.bde.es/hnb/es/criterios-buenas-practicas/tasacion-para-la-concesion-de-prestamos-y-creditos-hipotecarios.html",
  propertyRegister:
    "https://www.registradores.org/es/el-colegio/registro-de-la-propiedad",
  mortgageRegisterLaw:
    "https://www.boe.es/buscar/act.php?id=BOE-A-1946-2453",
  notary: "https://www.notariado.org/comprar-una-vivienda/",
  swornTranslators:
    "https://exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Traductores-Interpretes-Jurados.aspx/",
  legalisation:
    "https://exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Legalizacion-y-apostilla.aspx",
};

export const metadata: Metadata = {
  title: "Hoe lang duurt een huis kopen in Spanje? | Tijdlijn 2026",
  description:
    "Hoe lang duurt een huis kopen in Spanje? Complete tijdlijn voor NIE, hypotheek, vertalingen, juridische controle, notaris en registratie.",
  keywords: [
    "hoe lang duurt huis kopen Spanje",
    "tijdlijn huis kopen Spanje",
    "hypotheek Spanje hoe lang",
    "NIE nummer aanvragen hoe lang",
    "woning kopen Spanje stappenplan",
    "huis kopen Costa Blanca tijdlijn",
    "Spaanse hypotheek aanvragen",
    "juridische controle woning Spanje",
    "notaris woning kopen Spanje",
    "documenten vertalen hypotheek Spanje",
    "Nordic Move Spain",
  ],
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "nl_NL",
    url: PAGE_URL,
    siteName: "Nordic Move Spain",
    title: "Hoe lang duurt het om een huis in Spanje te kopen?",
    description:
      "Een complete tijdlijn voor voorbereiding, NIE, hypotheek, vertalingen, due diligence, notaris en registratie.",
    publishedTime: "2026-07-23T00:00:00.000Z",
    modifiedTime: "2026-07-23T00:00:00.000Z",
    authors: ["Nordic Move Spain"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Huis kopen in Spanje: complete tijdlijn 2026",
    description:
      "Van financiële voorbereiding en NIE tot hypotheek, notaris en sleuteloverdracht.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const overviewTimings = [
  {
    buyer: "Koper zonder hypotheek",
    timing: "Meestal 4–8 weken",
    explanation:
      "Vanaf geaccepteerd bod of reservering tot de notariële overdracht, wanneer het dossier juridisch duidelijk is en de documenten klaarstaan.",
  },
  {
    buyer: "Koper met Spaanse hypotheek",
    timing: "Meestal 8–14 weken",
    explanation:
      "Vanaf geaccepteerd bod, mits de financiële documenten grotendeels zijn voorbereid. Een ingewikkelde aanvraag kan langer duren.",
  },
  {
    buyer: "Complex dossier",
    timing: "Vaak 12–20+ weken",
    explanation:
      "Bij landelijke grond, onduidelijke vergunningen, nalatenschap, bedrijfsinkomen of verschillen tussen register, kadaster en werkelijkheid.",
  },
  {
    buyer: "Nieuwbouw op plan",
    timing: "Maanden tot meerdere jaren",
    explanation:
      "De contractfase kan snel verlopen, maar levering volgt pas na bouw, vergunningen, oplevering en contractuele mijlpalen.",
  },
];

const completeTimeline = [
  {
    phase: "Voorbereiding",
    timing: "2–8 weken vóór een bod",
    tasks:
      "Budget, eigen middelen, aankoopkosten, hypotheekvooranalyse, NIE, documentmap, vertalingen en keuze van onafhankelijke professionals.",
  },
  {
    phase: "Zoeken en bezichtigen",
    timing: "Dagen tot maanden",
    tasks:
      "Regio’s vergelijken, woningen selecteren, bezichtigen, technische indruk beoordelen en een biedstrategie bepalen.",
  },
  {
    phase: "Bod en reservering",
    timing: "1–5 werkdagen",
    tasks:
      "Onderhandeling, reserveringsvoorwaarden, bewijs van betaling, exclusiviteit en een realistische uiterste koopdatum.",
  },
  {
    phase: "Juridische en technische controle",
    timing: "1–3 weken",
    tasks:
      "Eigendom, lasten, vergunningen, kadaster, schulden, comunidad, belastingen, nutsvoorzieningen en bouwkundige risico’s controleren.",
  },
  {
    phase: "Hypotheekonderzoek",
    timing: "4–8 weken",
    tasks:
      "Documentcontrole, solvabiliteitsonderzoek, bankcomité, taxatie en definitieve goedkeuring. Bij uitzonderingen duurt dit langer.",
  },
  {
    phase: "FEIN en wettelijke voorfase",
    timing: "Minimaal 10 kalenderdagen",
    tasks:
      "De bank verstrekt bindende hypotheekinformatie. Daarna volgt de verplichte notariële transparantiecontrole vóór de hypotheekakte.",
  },
  {
    phase: "Notariële overdracht",
    timing: "1 dag",
    tasks:
      "Koopakte en eventueel hypotheekakte tekenen, saldo betalen, sleutels ontvangen en stukken voor belasting en registratie indienen.",
  },
  {
    phase: "Administratieve afronding",
    timing: "2–6 weken",
    tasks:
      "Belastingaangifte, registratie, nutscontracten, verzekering, comunidad, lokale belastingen en het definitieve aankoopdossier afronden.",
  },
];

const mortgageStages = [
  {
    number: "01",
    title: "Financiële vooranalyse",
    timing: "3–10 werkdagen",
    text:
      "De bank of adviseur bekijkt inkomen, leeftijd, schulden, eigen middelen, woonland en het gewenste leenbedrag. Dit is nog geen definitieve toezegging.",
  },
  {
    number: "02",
    title: "Compleet hypotheekdossier",
    timing: "1–3 weken voorbereiding",
    text:
      "Inkomensdocumenten, belastingaangiften, bankafschriften, werkgeversverklaring en bewijs van eigen middelen worden verzameld en waar nodig vertaald.",
  },
  {
    number: "03",
    title: "Formele kredietbeoordeling",
    timing: "2–6 weken",
    text:
      "De bank onderzoekt betaalcapaciteit, verplichtingen, kredietgegevens en herkomst van gelden. Ondernemers en inkomsten uit meerdere landen vragen vaak extra tijd.",
  },
  {
    number: "04",
    title: "Taxatie van de woning",
    timing: "3–10 werkdagen",
    text:
      "Een erkende taxateur bezoekt de woning en maakt een rapport. Toegang, planning en ontbrekende woningdocumentatie kunnen vertragen.",
  },
  {
    number: "05",
    title: "Definitieve goedkeuring en FEIN",
    timing: "Enkele dagen tot 2 weken",
    text:
      "Na krediet- en vastgoedgoedkeuring ontvangt u de bindende hypotheekinformatie. Wijzigingen in koopsom, taxatie of inkomen kunnen herbeoordeling veroorzaken.",
  },
  {
    number: "06",
    title: "Wettelijke voorfase en notaris",
    timing: "Minimaal 10 kalenderdagen",
    text:
      "De FEIN en overige documenten moeten minimaal tien kalenderdagen vóór de lening worden verstrekt. De notaris controleert vooraf uw begrip van de voorwaarden.",
  },
];

const mortgageDocuments = [
  "Geldig paspoort of identiteitsbewijs van iedere aanvrager.",
  "NIE-nummer van iedere koper of hypotheekaanvrager.",
  "Recente salarisstroken, vaak van de laatste drie tot zes maanden.",
  "Arbeidscontract en/of werkgeversverklaring.",
  "Recente belastingaangiften en belastingaanslagen.",
  "Bankafschriften, vaak van de laatste drie tot zes maanden.",
  "Overzicht van leningen, kredieten, alimentatie en bestaande hypotheken.",
  "Bewijs van eigen middelen en herkomst van het aankoopgeld.",
  "Voor zelfstandigen: jaarrekeningen en fiscale informatie van doorgaans twee of drie boekjaren.",
  "Reserveringsdocument, koopcontract en beschikbare woningdocumentatie.",
];

const delayFactors = [
  {
    title: "De NIE-afspraak is niet op tijd geregeld",
    text:
      "De officiële behandeling kan kort zijn zodra een correcte aanvraag is ingediend, maar afspraakbeschikbaarheid verschilt per locatie en aanvraagroute.",
  },
  {
    title: "Het hypotheekdossier is onvolledig",
    text:
      "Iedere ontbrekende loonstrook, aangifte, verklaring of vertaling kan de bankbeoordeling stilzetten. Lever één actueel en logisch dossier aan.",
  },
  {
    title: "De taxatie valt lager uit dan de koopprijs",
    text:
      "De bank financiert mede op basis van de taxatiewaarde. Een lager rapport kan extra eigen geld of heronderhandeling noodzakelijk maken.",
  },
  {
    title: "Registro, Catastro en werkelijkheid verschillen",
    text:
      "Afwijkingen in oppervlakte, aanbouwen, zwembad, gebruik of perceelgrenzen kunnen extra onderzoek, rectificatie of legalisatie vereisen.",
  },
  {
    title: "Er ontbreken vergunningen of schuldbewijzen",
    text:
      "De verkoper moet soms gemeentelijke documenten, comunidad-certificaten, energiecertificaat of belastingbewijzen opvragen.",
  },
  {
    title: "Een buitenlandse volmacht is niet bruikbaar",
    text:
      "Apostille, legalisatie, officiële vertaling of onvoldoende bevoegdheden kunnen pas vlak voor de notaris als probleem zichtbaar worden.",
  },
  {
    title: "De contractuele deadline is te ambitieus",
    text:
      "Drie of vier weken is riskant wanneer nog geen NIE, bankgoedkeuring, taxatie of volledige juridische controle beschikbaar is.",
  },
];

const faqItems = [
  {
    question: "Hoe lang duurt het gemiddeld om een huis in Spanje te kopen?",
    answer:
      "Een goed voorbereide contante aankoop kan vaak binnen vier tot acht weken vanaf het geaccepteerde bod worden afgerond. Met een Spaanse hypotheek is acht tot veertien weken realistischer. Een complex dossier kan twaalf tot twintig weken of langer duren.",
  },
  {
    question: "Hoe lang duurt het om een Spaanse hypotheek rond te krijgen?",
    answer:
      "Reken praktisch op vier tot acht weken voor beoordeling vanaf een compleet dossier, gevolgd door de verplichte hypotheekvoorfase. Vanaf een geaccepteerd bod tot de notaris is acht tot veertien weken daarom meestal veiliger.",
  },
  {
    question: "Kan ik in vier weken een woning in Spanje kopen?",
    answer:
      "Dat kan bij een contante aankoop met een eenvoudige juridische situatie, een beschikbaar NIE-nummer en snelle medewerking van alle partijen. Het is geen verstandige standaardtermijn wanneer nog financiering, vertaling, volmacht of uitgebreid onderzoek nodig is.",
  },
  {
    question: "Hoe lang duurt een NIE-aanvraag?",
    answer:
      "De officiële informatie noemt een maximale beslistermijn van vijf dagen nadat de aanvraag bij het bevoegde register is binnengekomen. De praktische wachttijd wordt vaak bepaald door beschikbare afspraken, de aanvraagroute, ontbrekende documenten en verzending via een consulaat.",
  },
  {
    question: "Heb ik al een NIE nodig om een bod uit te brengen?",
    answer:
      "Een bod kan doorgaans eerder worden gedaan, maar voor de notariële aankoop en fiscale afwikkeling heeft iedere buitenlandse koper een NIE nodig. Banken kunnen het nummer ook vroeg in het hypotheekproces verlangen.",
  },
  {
    question: "Hoe lang duurt het vertalen van hypotheekdocumenten?",
    answer:
      "Een kleine set inkomensstukken kan praktisch binnen twee tot vijf werkdagen worden vertaald. Een omvangrijk dossier met jaarrekeningen, aangiften en notariële stukken duurt eerder vijf tot tien werkdagen of langer. Apostille en verzending kunnen extra weken toevoegen.",
  },
  {
    question: "Moeten alle documenten beëdigd worden vertaald?",
    answer:
      "Niet altijd. Een bank kan gewone vertalingen of Engelstalige documenten accepteren, terwijl een notaris of overheidsinstantie voor bepaalde stukken een officiële vertaling kan verlangen. Vraag per document wat de ontvanger accepteert.",
  },
  {
    question: "Hoe lang duurt de juridische controle van een woning?",
    answer:
      "Voor een regulier appartement of juridisch duidelijke villa is één tot drie weken een bruikbare bandbreedte. Buitenstedelijk vastgoed, verbouwingen, nalatenschappen en verschillen tussen register en kadaster vragen vaak meer tijd.",
  },
  {
    question: "Wanneer teken ik het arras-contract?",
    answer:
      "Teken pas wanneer prijs, uiterste datum, inventaris, gevolgen van annulering en eventuele juridische of financieringsvoorwaarden duidelijk zijn. Een arras-contract is bindend en de precieze tekst bepaalt de gevolgen.",
  },
  {
    question: "Hoe lang moet er tussen de FEIN en de hypotheekakte zitten?",
    answer:
      "De Spaanse hypotheekwet schrijft voor dat de gepersonaliseerde documentatie, waaronder de FEIN, minimaal tien kalenderdagen vóór het tekenen van de lening wordt verstrekt.",
  },
  {
    question: "Kan ik kopen zonder zelf naar Spanje te reizen?",
    answer:
      "Dat kan vaak via een voldoende ruime notariële volmacht. Bij ondertekening buiten Spanje moet vooraf worden gecontroleerd of apostille of legalisatie en een officiële Spaanse vertaling nodig zijn.",
  },
  {
    question: "Wanneer krijg ik de sleutels?",
    answer:
      "Bij bestaande bouw worden de sleutels normaal tijdens of direct na de notariële overdracht overhandigd, zodra de afgesproken betaling heeft plaatsgevonden. Bij nieuwbouw gelden de opleveringsvoorwaarden van het project.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Hoe lang duurt het om een huis in Spanje te kopen? Complete tijdlijn 2026",
  description:
    "Complete tijdlijn voor voorbereiding, NIE, hypotheek, vertalingen, juridische controle, notaris en registratie.",
  inLanguage: "nl-NL",
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  author: { "@type": "Organization", name: "Nordic Move Spain", url: "/nl" },
  publisher: {
    "@type": "Organization",
    name: "Nordic Move Spain",
    url: "/nl",
  },
  citation: Object.values(OFFICIAL_SOURCES),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/nl" },
    { "@type": "ListItem", position: 2, name: "Gidsen", item: GUIDES_URL },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hoe lang duurt een huis kopen in Spanje?",
      item: PAGE_URL,
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Tijdlijn voor het kopen van een huis in Spanje",
  description: "De belangrijkste fasen van voorbereiding tot registratie.",
  step: completeTimeline.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.phase,
    text: `${step.timing}. ${step.tasks}`,
  })),
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[#1e2a3a] underline decoration-[#c8a063] underline-offset-4 transition hover:text-[#9b743d]"
    >
      {children}
    </a>
  );
}

export default function HowLongToBuyHouseSpainPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-800">
        <article>
          <header className="relative overflow-hidden px-6 pb-24 pt-12 md:px-8 md:pb-32 md:pt-16">
            <div
              aria-hidden="true"
              className="absolute -right-40 top-16 h-[34rem] w-[34rem] rounded-full bg-[#c8a063]/10 blur-3xl"
            />
            <div className="relative mx-auto max-w-7xl">
              <nav
                aria-label="Broodkruimel"
                className="flex flex-wrap items-center gap-2 text-sm text-stone-500"
              >
                <a className="transition hover:text-[#1e2a3a]" href="/nl">
                  Home
                </a>
                <span aria-hidden="true">/</span>
                <a
                  className="transition hover:text-[#1e2a3a]"
                  href={GUIDES_URL}
                >
                  Gidsen
                </a>
                <span aria-hidden="true">/</span>
                <span>Complete aankooptijdlijn</span>
              </nav>

              <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1.28fr_0.72fr] lg:gap-20">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-[#b18445]">
                    WONING KOPEN IN SPANJE · TIJDLIJN 2026
                  </p>
                  <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.06] text-[#1e2a3a] md:text-7xl">
                    Hoe lang duurt het om een huis in Spanje te kopen?
                  </h1>
                  <p className="mt-8 max-w-3xl text-xl leading-relaxed text-stone-600">
                    Een contante aankoop kan soms binnen vier tot acht weken
                    worden afgerond. Met een Spaanse hypotheek is acht tot
                    veertien weken meestal realistischer. De echte doorlooptijd
                    wordt bepaald door voorbereiding, NIE, hypotheekdossier,
                    vertalingen, juridische controle en woningdocumentatie.
                  </p>
                  <div className="mt-9 flex flex-wrap gap-4">
                    <a
                      href="#complete-tijdlijn"
                      className="rounded-full bg-[#1e2a3a] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#111b29]"
                    >
                      Bekijk de complete tijdlijn
                    </a>
                    <a
                      href={ASSESSMENT_URL}
                      className="rounded-full border border-[#1e2a3a] px-7 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                    >
                      Start de Relocation Assessment
                    </a>
                  </div>
                  <div className="mt-10 flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#1e2a3a] font-serif text-lg text-white">
                      N
                    </div>
                    <div>
                      <p className="m-0 font-medium text-[#1e2a3a]">
                        Nordic Move Spain
                      </p>
                      <p className="m-0 mt-1 text-sm text-stone-500">
                        Redactie en aankoopcoördinatie · Bijgewerkt 23 juli 2026
                      </p>
                    </div>
                  </div>
                </div>

                <aside className="rounded-[34px] border-[10px] border-[#e9dfd2] bg-white p-7 shadow-xl shadow-[#1e2a3a]/10 outline outline-2 outline-white md:p-10">
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#9b743d]">
                    DIRECT ANTWOORD
                  </p>
                  <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                    Reken niet alleen vanaf het moment dat u een bod doet.
                  </h2>
                  <p className="mt-6 leading-relaxed text-stone-600">
                    Wie snel én veilig wil kopen, begint vóór de zoektocht met
                    het NIE, financiële documenten, een hypotheekvooranalyse en
                    de keuze van een onafhankelijke juridisch adviseur.
                  </p>
                  <div className="mt-7 space-y-4 border-t border-stone-200 pt-7">
                    {[
                      ["Zonder hypotheek", "4–8 weken"],
                      ["Met hypotheek", "8–14 weken"],
                      ["Complex dossier", "12–20+ weken"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-baseline justify-between gap-6"
                      >
                        <span className="text-sm text-stone-500">{label}</span>
                        <strong className="font-serif text-3xl font-normal text-[#c39a5d]">
                          {value}
                        </strong>
                      </div>
                    ))}
                  </div>
                  <p className="mt-7 rounded-2xl bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-600">
                    Praktische bandbreedtes, geen garanties. De tijd om de
                    juiste woning te vinden is niet meegerekend.
                  </p>
                </aside>
              </div>
            </div>
          </header>

          <section className="bg-[#d1cdc7] px-6 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-4xl">
                <p className="text-sm uppercase tracking-[0.32em] text-[#8a6635]">
                  REALISTISCHE DOORLOOPTIJD
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Hoe snel kunt u daadwerkelijk bij de notaris zitten?
                </h2>
              </div>
              <div className="mt-14 grid gap-6 md:grid-cols-2">
                {overviewTimings.map((item) => (
                  <div
                    key={item.buyer}
                    className="rounded-[30px] bg-[#f6f1ea] p-8 shadow-sm md:p-10"
                  >
                    <p className="text-sm uppercase tracking-[0.22em] text-[#9b743d]">
                      {item.buyer}
                    </p>
                    <h3 className="mt-5 font-serif text-4xl font-normal text-[#1e2a3a]">
                      {item.timing}
                    </h3>
                    <p className="mt-5 leading-relaxed text-stone-600">
                      {item.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-8 lg:grid-cols-[260px_minmax(0,860px)] lg:justify-center lg:gap-24 lg:py-32">
            <aside className="self-start lg:sticky lg:top-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#9b743d]">
                INHOUD
              </p>
              <ol className="mt-6 list-none border-b border-stone-300 p-0 text-sm">
                {[
                  ["#complete-tijdlijn", "Complete tijdlijn"],
                  ["#voorbereiding", "Voorbereiden vóór een bod"],
                  ["#nie", "NIE-nummer aanvragen"],
                  ["#hypotheek", "Hypotheek en doorlooptijd"],
                  ["#vertalingen", "Vertalingen en apostille"],
                  ["#bod", "Bod, reservering en arras"],
                  ["#controle", "Juridische controle"],
                  ["#notaris", "FEIN, notaris en overdracht"],
                  ["#na-overdracht", "Na de overdracht"],
                  ["#vertraging", "Wat veroorzaakt vertraging?"],
                  ["#voorbeelden", "Voorbeeldplanningen"],
                  ["#faq", "Veelgestelde vragen"],
                ].map(([href, label], index) => (
                  <li key={href} className="border-t border-stone-300">
                    <a
                      href={href}
                      className="grid grid-cols-[28px_1fr] gap-2 py-3 leading-relaxed text-stone-600 no-underline transition hover:text-[#1e2a3a]"
                    >
                      <span className="text-xs font-semibold text-[#9b743d]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-8 rounded-2xl bg-[#1e2a3a] p-6 text-white">
                <p className="text-sm leading-relaxed text-white/80">
                  Wilt u vóór het bieden weten welke stappen in uw situatie de
                  meeste tijd vragen?
                </p>
                <a
                  href={CONTACT_URL}
                  className="mt-4 inline-block text-sm font-medium text-white underline decoration-[#c8a063] underline-offset-4"
                >
                  Plan een kennismaking
                </a>
              </div>
            </aside>

            <div className="min-w-0">
              <section className="scroll-mt-8 border-b border-stone-300 pb-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  DE BELANGRIJKSTE NUANCE
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  De koop kan snel gaan. Een veilige voorbereiding kost meestal
                  langer.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Kopers vragen vaak hoeveel weken er zitten tussen een
                  geaccepteerd bod en de sleuteloverdracht. Het proces begint
                  idealiter eerder: wanneer u budget en eigen middelen bepaalt,
                  financiële documenten verzamelt, een NIE aanvraagt en de
                  juiste regio onderzoekt.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  Een woning binnen zes weken kopen kan technisch mogelijk zijn
                  en toch onverstandig zijn wanneer controles worden ingekort
                  of de hypotheek nog onzeker is. Een goede planning maakt
                  snelheid mogelijk zonder risicobeheersing op te offeren.
                </p>
                <div className="mt-10 border-l-4 border-[#c8a063] bg-[#eee6dc] p-7">
                  <p className="m-0 font-serif text-2xl leading-relaxed text-[#1e2a3a]">
                    De snelste veilige route is zorgen dat NIE, financiering en
                    documentatie al klaarstaan voordat de juiste woning
                    verschijnt.
                  </p>
                </div>
              </section>

              <section
                id="complete-tijdlijn"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  VAN VOORBEREIDING TOT REGISTRATIE
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  De complete tijdlijn voor een huis kopen in Spanje
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  De fasen lopen deels parallel. Terwijl de advocaat de woning
                  controleert, kan de bank de taxatie bestellen. Dat bespaart
                  tijd wanneer deadlines en risico’s goed worden afgestemd.
                </p>
                <div className="mt-12">
                  {completeTimeline.map((step, index) => (
                    <div
                      key={step.phase}
                      className="grid gap-5 border-t border-stone-300 py-7 md:grid-cols-[70px_1fr]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c8a063] text-sm font-semibold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                          <h3 className="m-0 font-serif text-3xl font-normal text-[#1e2a3a]">
                            {step.phase}
                          </h3>
                          <span className="rounded-full bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#8a6635]">
                            {step.timing}
                          </span>
                        </div>
                        <p className="mt-4 leading-relaxed text-stone-600">
                          {step.tasks}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="voorbereiding"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  FASE 0 · VÓÓR DE WONINGZOEKTOCHT
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Begin twee tot acht weken vóór u serieus wilt bieden
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  De grootste tijdwinst ontstaat vóórdat u verliefd wordt op
                  een woning. Bepaal hoeveel eigen middelen beschikbaar zijn,
                  hoeveel ruimte nodig is voor aankoopkosten en of een bank uw
                  inkomenssituatie waarschijnlijk accepteert.
                </p>
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  {[
                    [
                      "Budget en aankoopkosten",
                      "Bereken niet alleen de koopsom. Houd rekening met ITP of IVA en AJD, notaris, register, juridisch advies, taxatie, financiering en directe werkzaamheden.",
                    ],
                    [
                      "Hypotheekvooranalyse",
                      "Laat vóór bezichtigingen toetsen welk leenbedrag realistisch is. Een eerste indicatie is nuttig, maar nog geen definitieve goedkeuring.",
                    ],
                    [
                      "Documentmap",
                      "Verzamel paspoort, inkomensstukken, aangiften, bankafschriften, schuldenoverzicht en bewijs van eigen middelen in één logisch dossier.",
                    ],
                    [
                      "Onafhankelijke begeleiding",
                      "Kies vóór het tekenen wie de juridische controle uitvoert en wie het proces coördineert. De verkopend makelaar vertegenwoordigt niet automatisch uw belangen.",
                    ],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-stone-300 bg-white p-7"
                    >
                      <h3 className="m-0 font-serif text-2xl font-normal text-[#1e2a3a]">
                        {title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-stone-600">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 rounded-2xl bg-[#1e2a3a] p-8 text-white">
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d6b47d]">
                    NORDIC MOVE SPAIN PRAKTIJKTIP
                  </p>
                  <p className="mt-5 text-lg leading-relaxed text-white/85">
                    Vraag de bank welke documenten zij van een niet-resident,
                    ondernemer, gepensioneerde of koper met inkomsten uit
                    meerdere landen nodig heeft. De documentenlijst bepaalt
                    vaak meer van de planning dan het eerste rentevoorstel.
                  </p>
                </div>
              </section>

              <section
                id="nie"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  IDENTIFICATIE IN SPANJE
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Hoe lang duurt het aanvragen van een NIE-nummer?
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Iedere buitenlandse koper heeft een Número de Identidad de
                  Extranjero nodig. Het nummer wordt gebruikt in de koopakte,
                  belastingaangifte en andere Spaanse administratieve
                  handelingen.
                </p>
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                  {[
                    [
                      "OFFICIËLE BESLISTERMIJN",
                      "Max. 5 dagen",
                      "Nadat een correcte aanvraag bij het bevoegde register is binnengekomen.",
                    ],
                    [
                      "PRAKTISCHE VOORBEREIDING",
                      "2–8 weken",
                      "Door afspraakbeschikbaarheid, aanvraagroute en documentcontrole.",
                    ],
                    [
                      "VEILIGE START",
                      "6–10 weken",
                      "Vóór de gewenste koopdatum, zeker bij aanvraag via een consulaat.",
                    ],
                  ].map(([label, value, text]) => (
                    <div key={label} className="rounded-3xl bg-white p-7">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9b743d]">
                        {label}
                      </p>
                      <p className="mt-4 font-serif text-5xl text-[#c39a5d]">
                        {value}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-stone-600">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
                <h3 className="mt-12 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Waar en met welke documenten vraagt u een NIE aan?
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  In Spanje kan de aanvraag persoonlijk of via een bevoegd
                  vertegenwoordiger bij een bevoegde vreemdelingendienst of
                  politiepost worden ingediend. Buiten Spanje verloopt de
                  aanvraag via de Spaanse consulaire vertegenwoordiging voor uw
                  woonplaats.
                </p>
                <ul className="mt-6 space-y-3 pl-5 leading-relaxed text-stone-600">
                  <li>Het officiële formulier EX-15.</li>
                  <li>Betaalbewijs van de relevante administratieve heffing.</li>
                  <li>Origineel en kopie van paspoort of identiteitsdocument.</li>
                  <li>Uitleg en bewijs van de economische reden voor de aanvraag.</li>
                  <li>Bij vertegenwoordiging: een voldoende specifieke volmacht.</li>
                </ul>
                <div className="mt-10 rounded-2xl border border-[#d9be96] bg-[#fbf4e8] p-7">
                  <p className="m-0 leading-relaxed text-stone-700">
                    <strong className="text-[#1e2a3a]">Let op:</strong> de
                    vijf dagen beginnen niet wanneer u voor het eerst een
                    afspraak zoekt. Wachttijd voor afspraken, ontbrekende
                    stukken en consulaire verzending tellen daar nog bij op.
                  </p>
                </div>
                <p className="mt-7 text-sm leading-relaxed text-stone-500">
                  Officiële informatie: {" "}
                  <SourceLink href={OFFICIAL_SOURCES.nie}>
                    Spaans Ministerie van Binnenlandse Zaken — NIE
                  </SourceLink>{" "}
                  en {" "}
                  <SourceLink href={OFFICIAL_SOURCES.foreignDocumentation}>
                    documentatie en behandeling
                  </SourceLink>
                  .
                </p>
              </section>

              <section
                id="hypotheek"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  FINANCIERING
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Hoe lang duurt het om een hypotheek in Spanje rond te krijgen?
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Voor een buitenlandse koper is {" "}
                  <strong className="text-[#1e2a3a]">vier tot acht weken</strong>{" "}
                  vanaf een compleet dossier een bruikbare bandbreedte voor
                  beoordeling, taxatie en definitieve goedkeuring. Vanaf een
                  geaccepteerd bod is {" "}
                  <strong className="text-[#1e2a3a]">acht tot veertien weken</strong>{" "}
                  tot de notaris meestal realistischer.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  De bank beoordeelt niet alleen de woningwaarde, maar ook
                  huidig en verwacht inkomen, vermogen, lasten, schulden en
                  betaalcapaciteit. Er bestaat geen universele gegarandeerde
                  behandeltijd.
                </p>
                <div className="mt-12">
                  {mortgageStages.map((stage) => (
                    <div
                      key={stage.number}
                      className="grid gap-5 border-t border-stone-300 py-7 md:grid-cols-[68px_1fr]"
                    >
                      <span className="text-sm font-semibold tracking-[0.15em] text-[#9b743d]">
                        {stage.number}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                          <h3 className="m-0 font-serif text-3xl font-normal text-[#1e2a3a]">
                            {stage.title}
                          </h3>
                          <span className="text-sm font-medium text-[#9b743d]">
                            {stage.timing}
                          </span>
                        </div>
                        <p className="mt-4 leading-relaxed text-stone-600">
                          {stage.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <h3 className="mt-12 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Documenten die u vooraf kunt verzamelen
                </h3>
                <div className="mt-7 grid gap-3 md:grid-cols-2">
                  {mortgageDocuments.map((document) => (
                    <div
                      key={document}
                      className="flex gap-3 rounded-2xl bg-white p-5"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c8a063] text-xs text-white">
                        ✓
                      </span>
                      <p className="m-0 text-sm leading-relaxed text-stone-600">
                        {document}
                      </p>
                    </div>
                  ))}
                </div>
                <h3 className="mt-12 font-serif text-3xl font-normal text-[#1e2a3a]">
                  De taxatie kan planning en eigen inleg veranderen
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  De woning wordt vóór de lening getaxeerd door een erkende
                  taxatieonderneming. Banco de España vermeldt dat een geldige
                  taxatie van een erkende taxateur zes maanden geldig is.
                </p>
                <p className="mt-6 leading-relaxed text-stone-600">
                  Valt de taxatie lager uit dan de koopsom, dan financiert de
                  bank mogelijk minder. Dat kan extra eigen middelen,
                  heronderhandeling of een andere opzet vereisen.
                </p>
                <div className="mt-10 rounded-3xl bg-[#1e2a3a] p-8 text-white">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#d7b780]">
                    HYPOTHEEKPLANNING ZONDER ONAANGENAME VERRASSING
                  </p>
                  <p className="mt-5 text-lg leading-relaxed text-white/85">
                    Neem geen overdrachtsdatum op die alleen haalbaar is wanneer
                    iedere bankstap direct goed gaat. Een
                    financieringsvoorbehoud moet duidelijk beschrijven wat als
                    afwijzing geldt en welke bewijsstukken nodig zijn.
                  </p>
                </div>
                <p className="mt-7 text-sm leading-relaxed text-stone-500">
                  Officiële achtergrond: {" "}
                  <SourceLink href={OFFICIAL_SOURCES.mortgageProcess}>
                    Banco de España — hypotheekbeoordeling
                  </SourceLink>
                  , {" "}
                  <SourceLink href={OFFICIAL_SOURCES.valuation}>
                    taxatie en geldigheid
                  </SourceLink>{" "}
                  en {" "}
                  <SourceLink href={OFFICIAL_SOURCES.mortgageLaw}>
                    Ley 5/2019
                  </SourceLink>
                  .
                </p>
              </section>

              <section
                id="vertalingen"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  DOCUMENTEN IN MEERDERE TALEN
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Hoeveel tijd moet u reserveren voor vertalingen?
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Niet ieder document hoeft beëdigd te worden vertaald. Een bank
                  kan Engelstalige of gewone vertalingen accepteren, terwijl
                  een notaris, register of overheidsinstantie voor een bepaald
                  stuk een officiële Spaanse vertaling kan verlangen.
                </p>
                <div className="mt-10 overflow-x-auto rounded-3xl border border-stone-300 bg-white">
                  <table className="w-full min-w-[720px] border-collapse text-left">
                    <caption className="px-6 py-4 text-left text-sm text-stone-500">
                      Praktische bandbreedtes; vraag vooraf een concrete planning.
                    </caption>
                    <thead className="bg-[#1e2a3a] text-white">
                      <tr>
                        <th className="px-6 py-4 text-xs uppercase tracking-[0.12em]">
                          Type werk
                        </th>
                        <th className="px-6 py-4 text-xs uppercase tracking-[0.12em]">
                          Gebruikelijke bandbreedte
                        </th>
                        <th className="px-6 py-4 text-xs uppercase tracking-[0.12em]">
                          Mogelijke vertraging
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Kleine set inkomensstukken",
                          "2–5 werkdagen",
                          "Slechte scans, ontbrekende pagina’s of specialistische termen",
                        ],
                        [
                          "Volledig hypotheekdossier",
                          "5–10 werkdagen",
                          "Jaarrekeningen, meerdere aanvragers en verschillende landen",
                        ],
                        [
                          "Notariële volmacht of akte",
                          "2–7 werkdagen",
                          "Afstemming over exacte bevoegdheden en originele stukken",
                        ],
                        [
                          "Apostille of legalisatie",
                          "Dagen tot meerdere weken",
                          "Land, instantie, postverzending en vereiste originelen",
                        ],
                      ].map((row) => (
                        <tr
                          key={row[0]}
                          className="border-t border-stone-200 even:bg-[#faf7f2]"
                        >
                          <th className="px-6 py-5 font-medium text-[#1e2a3a]">
                            {row[0]}
                          </th>
                          <td className="px-6 py-5 text-stone-600">{row[1]}</td>
                          <td className="px-6 py-5 text-stone-600">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <h3 className="mt-12 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Gewone of beëdigde vertaling?
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  Vertalingen door een in Spanje bevoegde traductor jurado
                  hebben officieel karakter. Gebruik een beëdigde vertaling
                  wanneer de ontvangende Spaanse instantie dit vereist; laat
                  niet zonder reden ieder bankdocument beëdigen.
                </p>
                <h3 className="mt-10 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Buitenlandse volmachten: apostille en legalisatie
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  Een buiten Spanje opgesteld openbaar document kan voor
                  gebruik in Spanje een apostille of diplomatieke legalisatie
                  nodig hebben. Is het document niet Spaans, dan kan ook een
                  officiële vertaling worden gevraagd. De route hangt af van
                  land, documenttype en toepasselijke uitzonderingen.
                </p>
                <div className="mt-10 border-l-4 border-[#c8a063] bg-[#eee6dc] p-7">
                  <p className="m-0 leading-relaxed text-stone-700">
                    Laat een conceptvolmacht eerst door de Spaanse advocaat of
                    notaris controleren en teken daarna pas in het buitenland.
                    Zo voorkomt u een correct gelegaliseerd maar onbruikbaar
                    document.
                  </p>
                </div>
                <p className="mt-7 text-sm leading-relaxed text-stone-500">
                  Officiële informatie: {" "}
                  <SourceLink href={OFFICIAL_SOURCES.swornTranslators}>
                    beëdigde vertalers
                  </SourceLink>{" "}
                  en {" "}
                  <SourceLink href={OFFICIAL_SOURCES.legalisation}>
                    legalisatie en apostille
                  </SourceLink>
                  .
                </p>
              </section>

              <section
                id="bod"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  VAN BEZICHTIGING NAAR CONTRACT
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Bod, reservering en arras: één tot tien werkdagen
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Na overeenstemming volgt vaak een reserveringsdocument en
                  later een uitgebreider privécontract, meestal contrato de
                  arras genoemd. Snelheid mag niet ten koste gaan van duidelijke
                  voorwaarden.
                </p>
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="rounded-3xl bg-white p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9b743d]">
                      RESERVERING
                    </p>
                    <h3 className="mt-4 font-serif text-3xl font-normal text-[#1e2a3a]">
                      Vaak 1–3 werkdagen
                    </h3>
                    <p className="mt-5 leading-relaxed text-stone-600">
                      Leg vast welke woning wordt gereserveerd, hoe lang deze
                      van de markt gaat, waar het geld wordt gehouden en wanneer
                      terugbetaling mogelijk is.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-white p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#9b743d]">
                      ARRAS OF PRIVÉCONTRACT
                    </p>
                    <h3 className="mt-4 font-serif text-3xl font-normal text-[#1e2a3a]">
                      Vaak binnen 5–10 werkdagen
                    </h3>
                    <p className="mt-5 leading-relaxed text-stone-600">
                      Bevat prijs, betalingen, uiterste datum, inventaris,
                      lasten, voorwaarden en gevolgen wanneer een partij niet
                      nakomt.
                    </p>
                  </div>
                </div>
                <h3 className="mt-12 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Een privécontract is bindend
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  Het woord “reservering” maakt een document niet automatisch
                  vrijblijvend. Ook de term arras zegt zonder de volledige tekst
                  onvoldoende over de gevolgen van annulering. Laat vóór
                  betaling beoordelen wat u precies ondertekent.
                </p>
                <p className="mt-7 text-sm leading-relaxed text-stone-500">
                  Zie {" "}
                  <SourceLink href={OFFICIAL_SOURCES.notary}>
                    Consejo General del Notariado — woning kopen
                  </SourceLink>
                  .
                </p>
              </section>

              <section
                id="controle"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  JURIDISCHE EN TECHNISCHE CONTROLE
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Reken één tot drie weken voor een normaal dossier
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Een onafhankelijke professional moet tijd krijgen om de
                  juridische status te controleren. Bij een appartement met
                  duidelijke documenten kan dit snel. Bij een vrijstaande
                  woning, buitengebied of verbouwd object is meer onderzoek
                  nodig.
                </p>
                <div className="mt-10 rounded-[30px] bg-white p-8 md:p-10">
                  <h3 className="m-0 font-serif text-3xl font-normal text-[#1e2a3a]">
                    Belangrijke controles vóór de notaris
                  </h3>
                  <div className="mt-8 grid gap-x-8 gap-y-5 md:grid-cols-2">
                    {[
                      "Wie staat als eigenaar in het Registro de la Propiedad?",
                      "Zijn er hypotheken, beslagen, gebruiksrechten of lasten?",
                      "Komt de geregistreerde omschrijving overeen met de werkelijkheid?",
                      "Sluiten Registro, Catastro en gemeentelijke gegevens op elkaar aan?",
                      "Zijn uitbreidingen, zwembad en bijgebouwen toegestaan?",
                      "Zijn IBI en andere lokale lasten betaald?",
                      "Zijn comunidad-schulden en vergadernotulen gecontroleerd?",
                      "Zijn verhuur en verbouwing volgens lokale regels mogelijk?",
                      "Zijn water, elektriciteit, riolering en internet beschikbaar?",
                      "Is een bouwkundige inspectie nodig voor vocht, dak of constructie?",
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1e2a3a] text-xs text-white">
                          ✓
                        </span>
                        <p className="m-0 text-sm leading-relaxed text-stone-600">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="mt-12 font-serif text-3xl font-normal text-[#1e2a3a]">
                  De nota simple is een beginpunt, geen volledige due diligence
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  De nota simple bevat informatie over de geregistreerde woning,
                  eigenaar en ingeschreven rechten. Het document toont niet
                  automatisch iedere stedenbouwkundige, technische of
                  gemeentelijke kwestie.
                </p>
                <div className="mt-10 rounded-2xl border border-[#d9be96] bg-[#fbf4e8] p-7">
                  <p className="m-0 leading-relaxed text-stone-700">
                    <strong className="text-[#1e2a3a]">
                      Meer onderzoek betekent niet dat de aankoop mislukt.
                    </strong>{" "}
                    Het betekent dat de planning moet aansluiten op de echte
                    risico’s. Een afwijking oplossen kan weken of maanden
                    vragen; het probleem negeren maakt de aankoop niet veiliger.
                  </p>
                </div>
                <p className="mt-7 text-sm leading-relaxed text-stone-500">
                  Registrale achtergrond: {" "}
                  <SourceLink href={OFFICIAL_SOURCES.propertyRegister}>
                    Colegio de Registradores
                  </SourceLink>
                  .
                </p>
              </section>

              <section
                id="notaris"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  LAATSTE FASE VÓÓR DE SLEUTEL
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  FEIN, notariële controle en overdracht
                </h2>
                <h3 className="mt-10 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Minimaal tien kalenderdagen voor de hypotheekakte
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  De bank moet de gepersonaliseerde informatie, waaronder FEIN
                  en FiAE, minimaal tien kalenderdagen vóór ondertekening van de
                  lening beschikbaar stellen. De FEIN is gedurende de
                  afgesproken geldigheidsduur de bindende aanbieding.
                </p>
                <p className="mt-6 leading-relaxed text-stone-600">
                  De notaris controleert vooraf of de stukken tijdig zijn
                  verstrekt en of de koper de voorwaarden begrijpt. Een late
                  FEIN verschuift rechtstreeks de vroegst mogelijke datum.
                </p>
                <div className="mt-10 grid gap-5 md:grid-cols-[1fr_1.3fr]">
                  <div className="rounded-3xl bg-[#1e2a3a] p-8 text-white">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#d6b47d]">
                      VERPLICHTE MINIMUMPERIODE
                    </p>
                    <p className="mt-5 font-serif text-6xl">10 dagen</p>
                    <p className="mt-5 leading-relaxed text-white/75">
                      Vanaf correcte verstrekking van de hypotheekdocumentatie.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-white p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#9b743d]">
                      PLAN EXTRA RUIMTE
                    </p>
                    <p className="mt-5 leading-relaxed text-stone-600">
                      Notarisagenda’s, wijzigingen in de FEIN, ontbrekende
                      informatie, vertaling of problemen bij de
                      transparantiecontrole kunnen extra dagen toevoegen.
                    </p>
                  </div>
                </div>
                <h3 className="mt-12 font-serif text-3xl font-normal text-[#1e2a3a]">
                  Wat gebeurt er op de overdrachtsdag?
                </h3>
                <ol className="mt-6 space-y-5 p-0">
                  {[
                    "Identiteit en bevoegdheid van de ondertekenaars worden gecontroleerd.",
                    "De koopakte wordt toegelicht en ondertekend.",
                    "Bij financiering wordt ook de hypotheekakte ondertekend.",
                    "Het resterende bedrag en de betaalwijze worden vastgelegd.",
                    "De koper ontvangt doorgaans de sleutels.",
                    "De akte wordt aangeboden voor belasting en registratie.",
                  ].map((item, index) => (
                    <li
                      key={item}
                      className="grid grid-cols-[42px_1fr] gap-4 border-t border-stone-300 pt-5"
                    >
                      <span className="text-sm font-semibold text-[#9b743d]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed text-stone-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-7 text-sm leading-relaxed text-stone-500">
                  Wettelijke basis: {" "}
                  <SourceLink href={OFFICIAL_SOURCES.mortgageLaw}>
                    Ley 5/2019, artikel 14
                  </SourceLink>
                  .
                </p>
              </section>

              <section
                id="na-overdracht"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  DE SLEUTEL IS NIET HET EINDE
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Reken nog twee tot zes weken voor administratieve afronding
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Na de notariële overdracht moeten belastingen worden verwerkt,
                  de akte wordt geregistreerd en contracten worden overgezet.
                </p>
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  {[
                    [
                      "Aankoopbelasting",
                      "ITP of IVA en AJD worden volgens de toepasselijke regionale en nationale regels aangegeven en betaald.",
                    ],
                    [
                      "Registratie",
                      "Na presentatie beoordeelt de registrador de akte. De wet noemt in beginsel vijftien dagen, behoudens onder meer gebreken of eerdere titels.",
                    ],
                    [
                      "Nutsvoorzieningen",
                      "Water, elektriciteit, gas, internet en onderhoudscontracten worden op naam van de koper gezet.",
                    ],
                    [
                      "Comunidad en lokale lasten",
                      "Informeer beheerder en gemeente en controleer domiciliëringen voor IBI en andere lasten.",
                    ],
                    [
                      "Verzekering",
                      "Zorg dat opstal- en inboedeldekking uiterlijk bij overdracht ingaat. Een bank kan specifieke dekking verlangen.",
                    ],
                    [
                      "Definitief dossier",
                      "Bewaar akte, belastingbewijzen, registerinformatie, inspecties, vergunningen, sleutels en contractgegevens samen.",
                    ],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-stone-300 bg-white p-7"
                    >
                      <h3 className="m-0 font-serif text-2xl font-normal text-[#1e2a3a]">
                        {title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-stone-600">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-7 text-sm leading-relaxed text-stone-500">
                  Registratietermijn: {" "}
                  <SourceLink href={OFFICIAL_SOURCES.mortgageRegisterLaw}>
                    Ley Hipotecaria, artikel 18
                  </SourceLink>
                  .
                </p>
              </section>

              <section
                id="vertraging"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  WAAR LOOPT HET PROCES VAST?
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Zeven oorzaken waardoor een aankoop langer duurt
                </h2>
                <div className="mt-10">
                  {delayFactors.map((factor, index) => (
                    <div
                      key={factor.title}
                      className="grid gap-4 border-t border-stone-300 py-7 md:grid-cols-[54px_1fr]"
                    >
                      <span className="font-serif text-2xl text-[#c39a5d]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="m-0 font-serif text-3xl font-normal text-[#1e2a3a]">
                          {factor.title}
                        </h3>
                        <p className="mt-4 leading-relaxed text-stone-600">
                          {factor.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 rounded-[30px] bg-[#eee6dc] p-8 md:p-10">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#9b743d]">
                    DE BESTE MANIER OM TIJD TE WINNEN
                  </p>
                  <h3 className="mt-5 font-serif text-4xl font-normal text-[#1e2a3a]">
                    Werk vooruit, niet oppervlakkiger.
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone-600">
                    Vraag het NIE vroeg aan, lever een compleet dossier in, laat
                    vóór betaling juridisch meekijken en laat bank- en
                    woningcontroles parallel lopen. Sla geen essentiële controle
                    over om een kunstmatige deadline te halen.
                  </p>
                </div>
              </section>

              <section
                id="voorbeelden"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  DRIE PRAKTISCHE SCENARIO’S
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Voorbeeldplanningen voor verschillende kopers
                </h2>
                <div className="mt-12 space-y-8">
                  <div className="rounded-[30px] bg-white p-8 md:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.23em] text-[#9b743d]">
                          SCENARIO 1
                        </p>
                        <h3 className="mt-3 font-serif text-4xl font-normal text-[#1e2a3a]">
                          Contante aankoop met duidelijk dossier
                        </h3>
                      </div>
                      <span className="rounded-full bg-[#f6f1ea] px-5 py-3 text-sm font-medium text-[#9b743d]">
                        circa 5–7 weken
                      </span>
                    </div>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      {[
                        "Week 0: bod, reservering en documenten opvragen.",
                        "Week 1–2: juridische controle en technische inspectie.",
                        "Week 2: arras na bevredigende eerste controle.",
                        "Week 3–5: betaalplanning en notaris voorbereiden.",
                        "Week 5–7: overdracht, sleutels en fiscale afwikkeling.",
                      ].map((item) => (
                        <p
                          key={item}
                          className="m-0 rounded-2xl bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-600"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[30px] bg-white p-8 md:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.23em] text-[#9b743d]">
                          SCENARIO 2
                        </p>
                        <h3 className="mt-3 font-serif text-4xl font-normal text-[#1e2a3a]">
                          Niet-resident met Spaanse hypotheek
                        </h3>
                      </div>
                      <span className="rounded-full bg-[#f6f1ea] px-5 py-3 text-sm font-medium text-[#9b743d]">
                        circa 9–13 weken
                      </span>
                    </div>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      {[
                        "Vóór week 0: NIE en financiële documenten voorbereid.",
                        "Week 0: bod en reservering met passende voorwaarden.",
                        "Week 1–3: due diligence en formele hypotheekaanvraag.",
                        "Week 2–5: taxatie, bankvragen en kredietonderzoek.",
                        "Week 5–8: definitieve goedkeuring en FEIN.",
                        "Week 8–10+: wettelijke termijn, notaris en ondertekening.",
                      ].map((item) => (
                        <p
                          key={item}
                          className="m-0 rounded-2xl bg-[#f6f1ea] p-5 text-sm leading-relaxed text-stone-600"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[30px] bg-[#1e2a3a] p-8 text-white md:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.23em] text-[#d6b47d]">
                          SCENARIO 3
                        </p>
                        <h3 className="mt-3 font-serif text-4xl font-normal text-white">
                          Vrijstaande woning met afwijkingen
                        </h3>
                      </div>
                      <span className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-[#e7c898]">
                        12–20 weken of langer
                      </span>
                    </div>
                    <p className="mt-8 leading-relaxed text-white/80">
                      Aanvullende gemeentelijke informatie, vergunningcontrole,
                      vergelijking van register en kadaster en mogelijk een
                      architectenrapport zijn nodig. Moet de verkoper eerst een
                      afwijking herstellen of legaliseren, dan is een vaste
                      datum vaak pas later betrouwbaar.
                    </p>
                  </div>
                </div>
              </section>

              <section className="border-b border-stone-300 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  CONCLUSIE
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  Plan acht tot veertien weken wanneer u financiering nodig
                  heeft
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Zonder hypotheek kan een juridisch duidelijke aankoop vaak
                  binnen vier tot acht weken worden afgerond. Met een Spaanse
                  hypotheek is acht tot veertien weken verstandiger. Start NIE,
                  financiële voorbereiding en vertalingen voordat u een
                  bindend contract met een korte deadline tekent.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  De juiste termijn is niet de kortste termijn die iemand
                  noemt, maar de termijn waarin bank, juridisch adviseur,
                  taxateur, vertaler en notaris zorgvuldig kunnen werken.
                </p>
                <div className="mt-12 grid items-center gap-8 rounded-[34px] bg-[#1e2a3a] p-8 text-white md:grid-cols-[1.35fr_0.65fr] md:p-12">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d6b47d]">
                      PERSOONLIJKE AANKOOPBEGELEIDING
                    </p>
                    <h2 className="mt-5 font-serif text-4xl leading-tight text-white md:text-5xl">
                      Meer zekerheid. Eén vertrouwd aanspreekpunt.
                    </h2>
                    <p className="mt-6 leading-relaxed text-white/80">
                      Nordic Move Spain helpt voorbereiding, woningselectie,
                      documentstroom en betrokken onafhankelijke professionals
                      op elkaar af te stemmen.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <a
                      href={ASSESSMENT_URL}
                      className="rounded-full bg-[#c8a063] px-7 py-4 text-sm font-medium text-white no-underline transition hover:bg-[#b1874c]"
                    >
                      Start de Relocation Assessment
                    </a>
                    <a
                      href={CONTACT_URL}
                      className="text-sm font-medium text-white underline decoration-[#c8a063] underline-offset-4"
                    >
                      Plan een kennismaking →
                    </a>
                  </div>
                </div>
              </section>

              <section className="border-b border-stone-300 py-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  VERDIEP U VERDER
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Gerelateerde gidsen
                </h2>
                <div className="mt-9 grid gap-4 md:grid-cols-2">
                  {[
                    [RELATED_GUIDES.buying, "Vastgoed kopen in Spanje", "Het volledige aankoopproces stap voor stap."],
                    [RELATED_GUIDES.mortgage, "Kosten en nieuwe hypotheekregels", "Financiering, taxatie en bankdocumentatie."],
                    [RELATED_GUIDES.taxes, "ITP, IVA en AJD uitgelegd", "Welke aankoopbelasting geldt voor uw woning?"],
                    [RELATED_GUIDES.costs, "Totale kosten bij aankoop", "Bereken hoeveel eigen geld werkelijk nodig is."],
                    [RELATED_GUIDES.mistakes, "Veelgemaakte aankoopfouten", "Voorkom tijdverlies en dure verrassingen."],
                    [RELATED_GUIDES.differences, "Spaanse regels die anders werken", "Verschillen met Nederlandse verwachtingen."],
                  ].map(([href, title, text]) => (
                    <a
                      key={href}
                      href={href}
                      className="group rounded-3xl border border-stone-300 bg-white p-7 no-underline transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <h3 className="m-0 font-serif text-2xl font-normal text-[#1e2a3a]">
                        {title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-stone-600">
                        {text}
                      </p>
                      <span className="mt-6 inline-block text-xs font-medium uppercase tracking-[0.18em] text-[#9b743d]">
                        Lees de gids →
                      </span>
                    </a>
                  ))}
                </div>
              </section>

              <section
                id="faq"
                className="scroll-mt-8 border-b border-stone-300 py-20"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  VEELGESTELDE VRAGEN
                </p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                  FAQ over de duur van een woningaankoop in Spanje
                </h2>
                <div className="mt-10">
                  {faqItems.map((item) => (
                    <details
                      key={item.question}
                      className="group border-t border-stone-300"
                    >
                      <summary className="cursor-pointer list-none py-6 pr-10 font-medium text-[#1e2a3a] marker:hidden">
                        <span className="flex items-center justify-between gap-5">
                          <span>{item.question}</span>
                          <span
                            aria-hidden="true"
                            className="text-2xl font-light text-[#9b743d] transition group-open:rotate-45"
                          >
                            +
                          </span>
                        </span>
                      </summary>
                      <p className="max-w-3xl pb-7 leading-relaxed text-stone-600">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                  <div className="border-t border-stone-300" />
                </div>
              </section>

              <section className="pt-20">
                <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">
                  BRONNEN EN VERANTWOORDING
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Officiële bronnen voor de juridische minimumtermijnen
                </h2>
                <p className="mt-7 leading-relaxed text-stone-600">
                  Wettelijke en procedurele feiten zijn gecontroleerd aan de
                  hand van officiële Spaanse bronnen. Overige doorlooptijden
                  zijn praktische bandbreedtes en verschillen per bank, regio,
                  gemeente, notaris en dossier.
                </p>
                <ul className="mt-8 grid gap-x-10 gap-y-4 pl-5 text-sm leading-relaxed text-stone-600 md:grid-cols-2">
                  <li><SourceLink href={OFFICIAL_SOURCES.nie}>Ministerie van Binnenlandse Zaken — NIE</SourceLink></li>
                  <li><SourceLink href={OFFICIAL_SOURCES.mortgageLaw}>BOE — Ley 5/2019 vastgoedkrediet</SourceLink></li>
                  <li><SourceLink href={OFFICIAL_SOURCES.mortgageProcess}>Banco de España — hypotheekproces</SourceLink></li>
                  <li><SourceLink href={OFFICIAL_SOURCES.valuation}>Banco de España — taxatie</SourceLink></li>
                  <li><SourceLink href={OFFICIAL_SOURCES.propertyRegister}>Colegio de Registradores</SourceLink></li>
                  <li><SourceLink href={OFFICIAL_SOURCES.mortgageRegisterLaw}>BOE — Ley Hipotecaria</SourceLink></li>
                  <li><SourceLink href={OFFICIAL_SOURCES.notary}>Consejo General del Notariado</SourceLink></li>
                  <li><SourceLink href={OFFICIAL_SOURCES.swornTranslators}>Ministerie van Buitenlandse Zaken — vertaling</SourceLink></li>
                  <li><SourceLink href={OFFICIAL_SOURCES.legalisation}>Ministerie van Buitenlandse Zaken — apostille</SourceLink></li>
                </ul>
                <p className="mt-10 rounded-2xl bg-[#eee6dc] p-6 text-sm leading-relaxed text-stone-600">
                  <strong className="text-[#1e2a3a]">Disclaimer:</strong> dit
                  artikel is algemene informatie en geen juridisch, fiscaal,
                  financieel, notarieel of hypotheekadvies. Laat woning,
                  contracten, financiering en documenten vóór ondertekening
                  beoordelen door bevoegde onafhankelijke professionals.
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}