import type { Metadata } from "next";
import type { ReactNode } from "react";

const PAGE_URL = "/de/guides/deutsche-steuerregeln-zweitwohnung-spanien";
const ASSESSMENT_URL = "/de/relocation-assessment";
const GUIDES_URL = "/de/guides";

const SOURCES = {
  dba: "https://www.bundesfinanzministerium.de/Content/DE/Standardartikel/Themen/Steuern/Internationales_Steuerrecht/Staatenbezogene_Informationen/Laender_A_Z/Spanien/2025-01-01-Abkommen-Synthetisierter-Text.html",
  estg21: "https://www.gesetze-im-internet.de/estg/__21.html",
  estg23: "https://www.gesetze-im-internet.de/estg/__23.html",
  imputed: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/capitulo-03-tributacion-rentas-comunes-nr/rentas-imputadas-bienes-inmuebles-urbanos.html",
  rental: "https://sede.agenciatributaria.gob.es/Sede/no-residentes/irnr-sin-establecimiento-permanente/cuestiones-especificas-sobre-tributacion-inmuebles/rendimientos-inmuebles-arrendados.html",
  sale: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/capitulo-03-tributacion-rentas-comunes-nr/ganancias-patrimoniales/ganancias-patrimoniales-derivadas-venta-inmuebles.html",
  model210: "https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/impuesto-sobre-renta-no-residentes/modelo-210-irnr______a-no-residentes-permanente_/nota-modificaciones-plazos-presentacion-modelo-210.html",
  wealth: "https://sede.agenciatributaria.gob.es/Sede/no-residentes/impuesto-sobre-patrimonio/exigibilidad-impuesto-sobre-patrimonio-no-residentes.html",
  wealthFiling: "https://sede.agenciatributaria.gob.es/Sede/no-residentes/impuesto-sobre-patrimonio/declaracion-impuesto-patrimonio-no-residentes.html",
  solidarity: "https://sede.agenciatributaria.gob.es/Sede/procedimientos/GC62.shtml",
  ibi: "https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214",
  iva: "https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
  valenciaItp: "https://www.boe.es/buscar/act.php?id=BOE-A-1998-8202",
  valenciaAjd: "https://atv.gva.es/actos-juridicos-documentados",
};

export const metadata: Metadata = {
  title: "Zweitwohnung in Spanien: Steuern für Deutsche 2026",
  description:
    "Welche Steuern zahlen Deutsche für eine Zweitwohnung in Spanien? IRNR, Vermietung, Verkauf, Modelo 210, IBI, Vermögensteuer und Costa-Blanca-Kaufsteuern 2026.",
  keywords: [
    "Zweitwohnung Spanien Steuern Deutschland",
    "Ferienhaus Spanien Steuern Deutsche",
    "Nichtresidentensteuer Spanien Immobilie",
    "Modelo 210 Deutsche",
    "Immobilie Spanien Steuer Deutschland",
    "Mieteinnahmen Spanien Deutschland Steuer",
    "Hausverkauf Spanien Steuer Deutschland",
    "Vermögensteuer Spanien Nichtresident",
    "IBI Spanien Zweitwohnung",
    "Costa Blanca Kaufsteuer",
    "ITP Valencia Immobilie 2026",
  ],
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "Nordic Move Spain",
    title: "Zweitwohnung in Spanien: Steuern für Deutsche 2026",
    description:
      "Der aktuelle Steuerleitfaden für Deutsche mit einer Zweitwohnung in Spanien: Eigennutzung, Vermietung, Verkauf, Vermögen und Costa Blanca.",
    publishedTime: "2026-07-24T00:00:00.000Z",
    modifiedTime: "2026-07-24T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zweitwohnung Spanien: Welche Steuern zahlen Deutsche?",
    description:
      "Spanische und deutsche Steuerregeln 2026 verständlich erklärt – inklusive Modelo 210 und Costa-Blanca-Kaufsteuern.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "Muss ich als Deutscher für eine selbst genutzte Zweitwohnung in Spanien Steuern zahlen?",
    answer:
      "Ja. Auch bei reiner Eigennutzung kann Spanien bei Nichtresidenten eine fiktive Immobilienrente besteuern. Für in Deutschland ansässige Eigentümer gilt beim IRNR grundsätzlich ein Satz von 19 %. Die steuerliche Basis wird regelmäßig aus 1,1 % oder 2 % des Katasterwertes berechnet.",
  },
  {
    question: "Wird eine spanische Zweitwohnung auch in Deutschland besteuert?",
    answer:
      "Die bloße private Eigennutzung erzeugt in Deutschland grundsätzlich keine Vermietungseinkünfte. Bei Vermietung oder einem steuerpflichtigen Verkauf können deutsche Einkommensteuerregeln greifen. Das DBA Deutschland–Spanien sieht für Einkünfte aus spanischem unbeweglichem Vermögen grundsätzlich die Anrechnung der spanischen Steuer auf die deutsche Steuer vor.",
  },
  {
    question: "Wie werden Mieteinnahmen aus Spanien bei einem deutschen Eigentümer besteuert?",
    answer:
      "Spanien darf die Mieteinnahmen besteuern. Für in Deutschland ansässige Eigentümer gilt beim spanischen IRNR grundsätzlich 19 %, wobei direkt zusammenhängende Kosten unter den gesetzlichen Voraussetzungen abzugsfähig sein können. In Deutschland gehören Vermietungseinkünfte grundsätzlich ebenfalls in die Einkommensteuererklärung; die spanische Steuer wird nach DBA und deutschen Anrechnungsvorschriften berücksichtigt.",
  },
  {
    question: "Ist der Verkauf nach zehn Jahren für Deutsche steuerfrei?",
    answer:
      "Nicht automatisch. Nach deutschem Recht kann ein privater Verkauf nach Ablauf der Zehnjahresfrist außerhalb des § 23 EStG liegen. Spanien darf den Gewinn aus einer in Spanien gelegenen Immobilie trotzdem besteuern. Für nichtresidente natürliche Personen beträgt der spanische Steuersatz auf den steuerpflichtigen Immobiliengewinn grundsätzlich 19 %.",
  },
  {
    question: "Was bedeutet der 3-Prozent-Einbehalt beim Verkauf?",
    answer:
      "Bei einem nichtresidenten Verkäufer muss der Käufer grundsätzlich 3 % des vereinbarten Kaufpreises einbehalten und mit Modelo 211 an das spanische Finanzamt abführen. Der Betrag ist eine Vorauszahlung auf die tatsächliche Steuer des Verkäufers.",
  },
  {
    question: "Müssen Deutsche in Spanien Vermögensteuer zahlen?",
    answer:
      "Nichtresidenten können mit ihrem in Spanien belegenen Vermögen der spanischen Vermögensteuer unterliegen. Ob tatsächlich Steuer entsteht, hängt unter anderem von Wert, Schulden, Freibeträgen und der anwendbaren staatlichen oder autonomen Regelung ab.",
  },
  {
    question: "Welche Kaufsteuer gilt für eine Zweitwohnung an der Costa Blanca?",
    answer:
      "Bei gebrauchten Immobilien in der Comunitat Valenciana gilt aktuell grundsätzlich 9 % ITP; bei einem Immobilienwert über 1 Million Euro grundsätzlich 11 %, sofern kein Sondertatbestand greift. Bei Neubau vom Bauträger fallen grundsätzlich 10 % IVA an; für eine Zweitwohnung kommt in Valencia regelmäßig zusätzlich der allgemeine AJD-Satz von 1,5 % in Betracht.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Zweitwohnung in Spanien: Steuerregeln für Deutsche 2026",
  description:
    "Aktueller Steuerleitfaden für in Deutschland ansässige Eigentümer einer Zweitwohnung in Spanien.",
  inLanguage: "de-DE",
  datePublished: "2026-07-24",
  dateModified: "2026-07-24",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  author: { "@type": "Organization", name: "Nordic Move Spain", url: "/de" },
  publisher: { "@type": "Organization", name: "Nordic Move Spain", url: "/de" },
  citation: Object.values(SOURCES),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/de" },
    { "@type": "ListItem", position: 2, name: "Ratgeber", item: GUIDES_URL },
    { "@type": "ListItem", position: 3, name: "Steuern bei einer Zweitwohnung in Spanien", item: PAGE_URL },
  ],
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
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

export default function GermanSecondHomeSpainTaxPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-800">
        <article>
          <header className="relative overflow-hidden px-6 pb-24 pt-12 md:px-8 md:pb-32 md:pt-16">
            <div aria-hidden="true" className="absolute -right-40 top-10 h-[36rem] w-[36rem] rounded-full bg-[#c8a063]/10 blur-3xl" />
            <div className="relative mx-auto max-w-7xl">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
                <a className="transition hover:text-[#1e2a3a]" href="/de">Home</a>
                <span aria-hidden="true">/</span>
                <a className="transition hover:text-[#1e2a3a]" href={GUIDES_URL}>Ratgeber</a>
                <span aria-hidden="true">/</span>
                <span>Zweitwohnung & Steuern</span>
              </nav>

              <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-[#b18445]">STEUERN · ZWEITWOHNUNG SPANIEN · JULI 2026</p>
                  <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.06] text-[#1e2a3a] md:text-7xl">
                    Zweitwohnung in Spanien: Welche Steuern zahlen Deutsche?
                  </h1>
                  <p className="mt-8 max-w-3xl text-xl leading-relaxed text-stone-600">
                    Eine Ferienwohnung oder Villa in Spanien kann Steuerpflichten in <strong className="font-medium text-[#1e2a3a]">Spanien und Deutschland</strong> auslösen. Entscheidend ist, ob Sie die Immobilie selbst nutzen, vermieten oder verkaufen – und wo Sie steuerlich ansässig sind.
                  </p>
                  <div className="mt-9 flex flex-wrap gap-4">
                    <a href={ASSESSMENT_URL} className="rounded-full bg-[#1e2a3a] px-7 py-4 text-sm font-medium text-white no-underline transition hover:bg-[#111b29]">Relocation Assessment starten</a>
                    <a href={GUIDES_URL} className="rounded-full border border-[#1e2a3a] px-7 py-4 text-sm font-medium text-[#1e2a3a] no-underline transition hover:bg-[#1e2a3a] hover:text-white">Alle Ratgeber ansehen</a>
                  </div>
                  <p className="mt-9 text-sm text-stone-500">Aktualisiert: 24. Juli 2026 · Allgemeine Information, keine individuelle Steuerberatung</p>
                </div>

                <aside className="rounded-[34px] border-[10px] border-[#e9dfd2] bg-white p-7 shadow-xl shadow-[#1e2a3a]/10 outline outline-2 outline-white md:p-10">
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#9b743d]">DIE WICHTIGSTE ANTWORT</p>
                  <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">Auch eine nicht vermietete Ferienimmobilie kann in Spanien Einkommensteuer auslösen.</h2>
                  <p className="mt-6 leading-relaxed text-stone-600">Spanien besteuert bei nichtresidenten Privatpersonen eine sogenannte fiktive Immobilienrente. Für in Deutschland ansässige Eigentümer beträgt der IRNR-Satz grundsätzlich 19 %.</p>
                </aside>
              </div>
            </div>
          </header>

          <section className="bg-[#d1cdc7] px-6 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <p className="text-sm uppercase tracking-[0.32em] text-[#8a6635]">SCHNELLÜBERSICHT</p>
              <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">Vier Zahlen, die Eigentümer kennen sollten</h2>
              <div className="mt-14 grid gap-6 md:grid-cols-2">
                {[
                  ["Eigennutzung", "19 % IRNR", "Auf die fiktive steuerliche Immobilienrente – nicht auf den Immobilienwert selbst."],
                  ["Fiktive Basis", "1,1 % oder 2 %", "Des Katasterwertes, abhängig von der maßgeblichen Katasterbewertung."],
                  ["Verkauf", "19 % auf den Gewinn", "Grundsätzlich für nichtresidente natürliche Personen."],
                  ["Verkaufseinbehalt", "3 % des Kaufpreises", "Vom Käufer als Vorauszahlung des nichtresidenten Verkäufers einzubehalten."],
                ].map(([label, value, text]) => (
                  <div key={label} className="rounded-[30px] bg-[#f6f1ea] p-8 shadow-sm md:p-10">
                    <p className="text-sm uppercase tracking-[0.22em] text-[#9b743d]">{label}</p>
                    <h3 className="mt-5 font-serif text-4xl font-normal text-[#1e2a3a]">{value}</h3>
                    <p className="mt-5 leading-relaxed text-stone-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-4xl px-6 py-24 md:px-8 lg:py-32">
            <section id="grundprinzip" className="border-b border-stone-300 pb-20">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">1 · DAS GRUNDPRINZIP</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">Spanien darf spanische Immobilien besteuern – Deutschland bleibt trotzdem relevant</h2>
              <p className="mt-8 text-lg leading-relaxed text-stone-600">Sind Sie in Deutschland steuerlich ansässig und besitzen Sie eine Immobilie in Spanien, darf Spanien Einkünfte aus dieser Immobilie grundsätzlich besteuern. Artikel 6 des DBA Deutschland–Spanien erfasst unmittelbare Nutzung, Vermietung und andere Nutzungsformen.</p>
              <p className="mt-6 text-lg leading-relaxed text-stone-600">Für in Deutschland ansässige Personen sieht Artikel 22 des DBA bei Einkünften aus spanischem unbeweglichem Vermögen grundsätzlich die <strong className="font-medium text-[#1e2a3a]">Anrechnungsmethode</strong> vor. Spanien darf besteuern; die dort gezahlte Steuer wird nach deutschen Regeln auf eine entsprechende deutsche Steuer angerechnet. Das gilt ausdrücklich auch für Immobilienveräußerungsgewinne.</p>
              <div className="mt-10 rounded-3xl bg-white p-8">
                <h3 className="m-0 font-serif text-3xl font-normal text-[#1e2a3a]">Kein deutsches „Box-3-Modell“</h3>
                <p className="mt-5 leading-relaxed text-stone-600">Für deutsche Eigentümer stehen vor allem tatsächliche Vermietungseinkünfte nach § 21 EStG und beim Verkauf die Regeln des § 23 EStG im Mittelpunkt.</p>
              </div>
              <p className="mt-7 text-sm leading-relaxed text-stone-500">Quellen: <SourceLink href={SOURCES.dba}>BMF — DBA Deutschland–Spanien</SourceLink>, <SourceLink href={SOURCES.estg21}>§ 21 EStG</SourceLink> und <SourceLink href={SOURCES.estg23}>§ 23 EStG</SourceLink>.</p>
            </section>

            <section id="eigennutzung" className="border-b border-stone-300 py-20">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">2 · EIGENNUTZUNG</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">Auch ohne Mieteinnahmen: spanische Nichtresidentensteuer</h2>
              <p className="mt-8 text-lg leading-relaxed text-stone-600">Nichtresidente natürliche Personen mit einer städtischen Immobilie in Spanien, die selbst genutzt wird oder leer steht, müssen grundsätzlich eine <em>renta inmobiliaria imputada</em> versteuern. Spanien unterstellt einen fiktiven Ertrag, obwohl keine Miete gezahlt wird.</p>
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl bg-white p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9b743d]">AKTUALISIERTER KATASTERWERT</p>
                  <p className="mt-4 font-serif text-5xl text-[#c39a5d]">1,1 %</p>
                  <p className="mt-4 leading-relaxed text-stone-600">Regelmäßig die fiktive Bemessungsgrundlage, wenn die maßgebliche Katasterbewertung innerhalb des gesetzlichen Zeitraums aktualisiert wurde.</p>
                </div>
                <div className="rounded-3xl bg-white p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9b743d]">SONST REGELMÄSSIG</p>
                  <p className="mt-4 font-serif text-5xl text-[#c39a5d]">2 %</p>
                  <p className="mt-4 leading-relaxed text-stone-600">Auf die daraus berechnete fiktive Rente gilt für in Deutschland ansässige Eigentümer grundsätzlich 19 % IRNR.</p>
                </div>
              </div>
              <div className="mt-10 rounded-2xl border border-[#d9be96] bg-[#fbf4e8] p-7"><p className="m-0 leading-relaxed text-stone-700"><strong className="text-[#1e2a3a]">Miteigentum:</strong> Die fiktive Rente wird entsprechend der Eigentumsquote verteilt. Vermietete Tage werden aus der Eigennutzungsberechnung herausgerechnet.</p></div>
              <p className="mt-7 text-sm leading-relaxed text-stone-500"><SourceLink href={SOURCES.imputed}>AEAT — renta imputada bei Nichtresidenten</SourceLink>.</p>
            </section>

            <section id="vermietung" className="border-b border-stone-300 py-20">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">3 · VERMIETUNG</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">Mieteinnahmen müssen in Spanien und Deutschland sauber getrennt berechnet werden</h2>
              <p className="mt-8 text-lg leading-relaxed text-stone-600">Spanien darf Mieteinnahmen aus einer spanischen Immobilie besteuern. Für in Deutschland ansässige Privatpersonen gilt beim IRNR grundsätzlich 19 %. Weil Deutschland EU-Mitglied ist, können bestimmte direkt und untrennbar mit den spanischen Mieteinnahmen verbundene Kosten nach den gesetzlichen Voraussetzungen abziehbar sein.</p>
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl bg-white p-8"><p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">SPANIEN</p><h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">IRNR via Modelo 210</h3><p className="mt-5 leading-relaxed text-stone-600">Einnahmen und abzugsfähige Kosten werden nach spanischen Regeln ermittelt.</p></div>
                <div className="rounded-3xl bg-white p-8"><p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">DEUTSCHLAND</p><h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">§ 21 EStG + DBA</h3><p className="mt-5 leading-relaxed text-stone-600">Der deutsche steuerliche Überschuss wird nach deutschem Recht berechnet; die spanische Steuer wird im Rahmen der DBA-Anrechnung berücksichtigt.</p></div>
              </div>
              <p className="mt-7 text-sm leading-relaxed text-stone-500">Quellen: <SourceLink href={SOURCES.rental}>AEAT — Vermietung durch Nichtresidenten</SourceLink> und <SourceLink href={SOURCES.dba}>DBA Deutschland–Spanien</SourceLink>.</p>
            </section>

            <section id="modelo-210" className="border-b border-stone-300 py-20">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">4 · NEU 2026</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">Modelo 210: Neue Fristen ab dem Steuerjahr 2026</h2>
              <div className="mt-10 space-y-5">
                {[
                  ["Fiktive Immobilienrente 2025", "01.01.–31.12.2026", "Die bisherige Frist bleibt für 2025 bestehen."],
                  ["Fiktive Immobilienrente 2026", "01.04.–31.12.2027", "Die neue Frist gilt erstmals für die Eigennutzung des Jahres 2026."],
                  ["Gebündelte Mieteinnahmen 2026", "01.–20.04.2027", "Bei zulässiger jährlicher Zusammenfassung der Mieteinkünfte."],
                ].map(([title, date, text]) => (
                  <div key={title} className="grid gap-4 rounded-3xl bg-white p-7 md:grid-cols-[1fr_auto] md:items-center"><div><h3 className="m-0 font-serif text-2xl text-[#1e2a3a]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-stone-600">{text}</p></div><span className="rounded-full bg-[#f6f1ea] px-5 py-3 text-sm font-medium text-[#9b743d]">{date}</span></div>
                ))}
              </div>
              <p className="mt-7 text-sm leading-relaxed text-stone-500"><SourceLink href={SOURCES.model210}>Agencia Tributaria — geänderte Modelo-210-Fristen 2026</SourceLink>.</p>
            </section>

            <section id="ibi" className="border-b border-stone-300 py-20">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">5 · IBI</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">Die kommunale Immobiliensteuer kommt zusätzlich dazu</h2>
              <p className="mt-8 text-lg leading-relaxed text-stone-600">IBI ist eine kommunale Objektsteuer und knüpft unter anderem an das Eigentum an der Immobilie an. Die konkrete Belastung hängt vom Katasterwert und dem kommunalen Steuersatz ab.</p>
              <div className="mt-10 rounded-3xl bg-[#1e2a3a] p-8 text-white"><p className="text-lg leading-relaxed text-white/85"><strong>IBI</strong> ist die lokale Immobiliensteuer. <strong>IRNR</strong> ist die Einkommensteuer für Nichtresidenten. Bei einer selbst genutzten Zweitwohnung können beide nebeneinander anfallen.</p></div>
              <p className="mt-7 text-sm leading-relaxed text-stone-500"><SourceLink href={SOURCES.ibi}>BOE — gesetzliche Grundlage der IBI</SourceLink>.</p>
            </section>

            <section id="vermoegen" className="border-b border-stone-300 py-20">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">6 · HOHE VERMÖGENSWERTE</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">Spanische Vermögensteuer und Solidaritätssteuer prüfen</h2>
              <p className="mt-8 text-lg leading-relaxed text-stone-600">Nichtresidenten können mit ihren in Spanien belegenen Vermögenswerten der spanischen Vermögensteuer unterliegen. Nach der staatlichen Regelung gilt grundsätzlich ein Freibetrag von 700.000 €. Je nach Situation können regionale Regeln relevant sein.</p>
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl bg-white p-7"><p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">VERMÖGENSTEUER</p><p className="mt-4 leading-relaxed text-stone-600">Eine Erklärung kann erforderlich sein, wenn Steuer zu zahlen ist oder der Bruttowert der relevanten Vermögenswerte und Rechte über 2 Mio. € liegt.</p></div>
                <div className="rounded-3xl bg-white p-7"><p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">GROSSE VERMÖGEN</p><p className="mt-4 leading-relaxed text-stone-600">Der aktuelle Solidaritätszuschlag für große Vermögen knüpft an Nettovermögen über 3 Mio. € an; Wechselwirkungen mit der Vermögensteuer müssen individuell berechnet werden.</p></div>
              </div>
              <p className="mt-7 text-sm leading-relaxed text-stone-500"><SourceLink href={SOURCES.wealth}>AEAT — Vermögensteuer für Nichtresidenten</SourceLink>, <SourceLink href={SOURCES.wealthFiling}>Erklärungspflicht</SourceLink> und <SourceLink href={SOURCES.solidarity}>Modelo 718</SourceLink>.</p>
            </section>

            <section id="verkauf" className="border-b border-stone-300 py-20">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">7 · VERKAUF</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">Die deutsche Zehnjahresfrist macht Spanien nicht steuerfrei</h2>
              <p className="mt-8 text-lg leading-relaxed text-stone-600">Spanien besteuert den Gewinn eines Nichtresidenten aus dem Verkauf einer spanischen Immobilie grundsätzlich mit 19 %. Der Gewinn basiert grundsätzlich auf dem steuerlich anerkannten Veräußerungswert abzüglich des steuerlich anerkannten Erwerbswertes; bestimmte Erwerbs-, Verbesserungs- und Verkaufskosten können relevant sein.</p>
              <p className="mt-6 text-lg leading-relaxed text-stone-600">Der Käufer muss bei einem nichtresidenten Verkäufer grundsätzlich <strong className="font-medium text-[#1e2a3a]">3 % des vereinbarten Kaufpreises</strong> einbehalten und mit Modelo 211 als Vorauszahlung abführen.</p>
              <div className="mt-10 rounded-3xl bg-white p-8"><h3 className="m-0 font-serif text-3xl text-[#1e2a3a]">Deutschland: § 23 EStG</h3><p className="mt-5 leading-relaxed text-stone-600">Ein privater Immobilienverkauf kann in Deutschland steuerpflichtig sein, wenn zwischen Anschaffung und Verkauf nicht mehr als zehn Jahre liegen; das Gesetz enthält Eigennutzungsausnahmen. Liegt der Verkauf in Deutschland außerhalb der Besteuerung, kann Spanien den Gewinn trotzdem besteuern.</p></div>
              <p className="mt-7 text-sm leading-relaxed text-stone-500">Quellen: <SourceLink href={SOURCES.sale}>AEAT — Immobilienverkauf durch Nichtresidenten</SourceLink>, <SourceLink href={SOURCES.estg23}>§ 23 EStG</SourceLink> und <SourceLink href={SOURCES.dba}>DBA Deutschland–Spanien</SourceLink>.</p>
            </section>

            <section id="kaufsteuer-costa-blanca" className="border-b border-stone-300 py-20">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">8 · COSTA BLANCA</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">Aktuelle Kaufsteuern in der Comunitat Valenciana</h2>
              <div className="mt-10 overflow-x-auto rounded-3xl border border-stone-300 bg-white">
                <table className="w-full min-w-[700px] border-collapse text-left">
                  <thead className="bg-[#1e2a3a] text-white"><tr><th className="px-6 py-4">Kauf</th><th className="px-6 py-4">Steuer 2026</th><th className="px-6 py-4">Hinweis</th></tr></thead>
                  <tbody>
                    <tr className="border-t border-stone-200"><th className="px-6 py-5">Gebraucht bis 1 Mio. €</th><td className="px-6 py-5">grundsätzlich 9 % ITP</td><td className="px-6 py-5">Sondertatbestände ausgenommen</td></tr>
                    <tr className="border-t border-stone-200 bg-[#faf7f2]"><th className="px-6 py-5">Gebraucht über 1 Mio. €</th><td className="px-6 py-5">grundsätzlich 11 % ITP</td><td className="px-6 py-5">nach aktueller valencianischer Regelung</td></tr>
                    <tr className="border-t border-stone-200"><th className="px-6 py-5">Neubau vom Bauträger</th><td className="px-6 py-5">grundsätzlich 10 % IVA</td><td className="px-6 py-5">landesweiter Wohnraumsatz</td></tr>
                    <tr className="border-t border-stone-200 bg-[#faf7f2]"><th className="px-6 py-5">AJD bei Zweitwohnung</th><td className="px-6 py-5">allgemein 1,5 %</td><td className="px-6 py-5">reduzierte Hauptwohnsitzregeln regelmäßig nicht einschlägig</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-10 rounded-2xl border border-[#d9be96] bg-[#fbf4e8] p-7"><p className="m-0 leading-relaxed text-stone-700"><strong className="text-[#1e2a3a]">SEO-Fakt mit praktischem Wert:</strong> Ältere Kostenrechner nennen für Valencia oft noch 10 % als allgemeinen ITP-Satz. Die aktuelle Regelung sieht grundsätzlich 9 % und bei Immobilienwerten über 1 Mio. € 11 % vor.</p></div>
              <p className="mt-7 text-sm leading-relaxed text-stone-500">Quellen: <SourceLink href={SOURCES.valenciaItp}>Ley 13/1997 Comunitat Valenciana</SourceLink>, <SourceLink href={SOURCES.iva}>AEAT — IVA oder ITP</SourceLink> und <SourceLink href={SOURCES.valenciaAjd}>Agencia Tributaria Valenciana — AJD</SourceLink>.</p>
            </section>

            <section id="beispiele" className="border-b border-stone-300 py-20">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">9 · BEISPIELE</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">Drei einfache Rechenbeispiele</h2>
              <div className="mt-10 space-y-6">
                <div className="rounded-3xl bg-white p-8"><p className="text-xs uppercase tracking-[0.2em] text-[#9b743d]">EIGENNUTZUNG</p><h3 className="mt-3 font-serif text-3xl text-[#1e2a3a]">Katasterwert 150.000 € · 1,1-%-Regel</h3><p className="mt-5 leading-relaxed text-stone-600">Fiktive Rente: 1.650 €. Davon 19 % IRNR = <strong className="text-[#1e2a3a]">313,50 €</strong> für ein vereinfachtes volles Jahr.</p></div>
                <div className="rounded-3xl bg-white p-8"><p className="text-xs uppercase tracking-[0.2em] text-[#9b743d]">VERMIETUNG</p><h3 className="mt-3 font-serif text-3xl text-[#1e2a3a]">18.000 € Miete · 6.000 € spanisch abzugsfähige Kosten</h3><p className="mt-5 leading-relaxed text-stone-600">Spanische Basis: 12.000 €. 19 % IRNR = <strong className="text-[#1e2a3a]">2.280 €</strong>. Der deutsche steuerliche Überschuss muss separat nach deutschem Recht ermittelt werden.</p></div>
                <div className="rounded-3xl bg-[#1e2a3a] p-8 text-white"><p className="text-xs uppercase tracking-[0.2em] text-[#d6b47d]">KAUF COSTA BLANCA</p><h3 className="mt-3 font-serif text-3xl text-white">Gebrauchte Villa für 500.000 €</h3><p className="mt-5 leading-relaxed text-white/80">Bei 9 % allgemeinem ITP ergibt sich eine ITP-Belastung von <strong className="text-white">45.000 €</strong>. Weitere Kaufnebenkosten kommen separat hinzu.</p></div>
              </div>
            </section>

            <section id="checkliste" className="border-b border-stone-300 py-20">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">10 · CHECKLISTE</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">Diese Dokumente sollten Sie dauerhaft aufbewahren</h2>
              <div className="mt-10 grid gap-3">
                {[
                  "Kaufurkunde und Kaufkostenbelege",
                  "Nachweise über ITP beziehungsweise IVA und AJD",
                  "Katasterreferenz und IBI-Bescheide",
                  "Belege über wertsteigernde Investitionen und Umbauten",
                  "Mietverträge, Belegungsübersichten und Kostenbelege",
                  "Modelo-210-Erklärungen und Zahlungsnachweise",
                  "Nachweis der Eigentumsquoten bei mehreren Eigentümern",
                  "Beim Verkauf: Makler-, Rechts-, Notar- und Transaktionsbelege",
                ].map((item) => <div key={item} className="flex gap-3 rounded-2xl bg-white p-5"><span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c8a063] text-xs text-white">✓</span><p className="m-0 text-sm leading-relaxed text-stone-600">{item}</p></div>)}
              </div>
              <div className="mt-12 rounded-[34px] bg-[#1e2a3a] p-8 text-white md:p-12"><p className="text-xs uppercase tracking-[0.28em] text-[#d6b47d]">VOR DEM KAUF PLANEN</p><h2 className="mt-5 font-serif text-4xl text-white">Steuern nicht erst nach dem Notartermin klären</h2><p className="mt-6 leading-relaxed text-white/80">Kaufpreis, Nutzung, Vermietungspläne, Finanzierung und ein späterer Umzug nach Spanien können die steuerliche Situation verändern.</p><div className="mt-7 flex flex-wrap gap-4"><a href={ASSESSMENT_URL} className="rounded-full bg-[#c8a063] px-7 py-4 text-sm font-medium text-white no-underline">Relocation Assessment starten</a><a href={GUIDES_URL} className="rounded-full border border-white/40 px-7 py-4 text-sm font-medium text-white no-underline">Weitere Ratgeber</a></div></div>
            </section>

            <section id="faq" className="border-b border-stone-300 py-20">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">FAQ</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">Häufige Fragen zur Zweitwohnung in Spanien</h2>
              <div className="mt-10">{faqs.map((faq) => <details key={faq.question} className="group border-t border-stone-300"><summary className="cursor-pointer list-none py-6 font-medium text-[#1e2a3a]"><span className="flex items-center justify-between gap-5"><span>{faq.question}</span><span className="text-2xl text-[#9b743d] transition group-open:rotate-45">+</span></span></summary><p className="max-w-3xl pb-7 leading-relaxed text-stone-600">{faq.answer}</p></details>)}</div>
            </section>

            <section className="py-20">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9b743d]">OFFIZIELLE QUELLEN</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">Stand: 24. Juli 2026</h2>
              <p className="mt-7 leading-relaxed text-stone-600">Verwendet wurden insbesondere aktuelle Informationen des Bundesfinanzministeriums, des deutschen Einkommensteuergesetzes, der Agencia Tributaria, des BOE und der Agencia Tributaria Valenciana.</p>
              <div className="mt-9 grid gap-4 md:grid-cols-2">{[
                [SOURCES.dba, "DBA Deutschland–Spanien"],
                [SOURCES.imputed, "AEAT: fiktive Immobilienrente"],
                [SOURCES.rental, "AEAT: Vermietung"],
                [SOURCES.model210, "AEAT: Modelo-210-Fristen"],
                [SOURCES.sale, "AEAT: Immobilienverkauf"],
                [SOURCES.wealth, "AEAT: Vermögensteuer"],
                [SOURCES.solidarity, "AEAT: Modelo 718"],
                [SOURCES.valenciaItp, "Valencia: ITP"],
                [SOURCES.iva, "AEAT: IVA oder ITP"],
                [SOURCES.valenciaAjd, "Valencia: AJD"],
              ].map(([href, title]) => <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-stone-300 bg-white p-5 text-sm font-medium text-[#1e2a3a] no-underline">{title} →</a>)}</div>
              <div className="mt-12 rounded-2xl bg-[#eee6dc] p-7"><p className="m-0 text-sm leading-relaxed text-stone-600"><strong className="text-[#1e2a3a]">Steuerlicher Hinweis:</strong> Dieser Artikel ist allgemeine Information und keine individuelle deutsche oder spanische Steuerberatung. Steuerliche Ansässigkeit, Eigentumsstruktur, Finanzierung, Vermietungsart, Anschaffungsdatum und persönliche Verhältnisse können das Ergebnis wesentlich verändern.</p></div>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}