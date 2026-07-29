import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Next.js App Router page — Nordic Move Spain
 *
 * Legen Sie diese Datei zum Beispiel hier ab:
 * app/de/kosten-huis-kopen-spanje/page.tsx
 *
 * Die Seite verwendet nur Next.js + Tailwind CSS und benötigt keine zusätzlichen Pakete.
 * Prüfen Sie die internen Routen unten, damit sie mit Ihrer Website übereinstimmen.
 */

const PAGE_PATH = "/de/kosten-huis-kopen-spanje";

const internalLinks = {
  aanbod: "/de/aanbod",
  koopgids: "/de/huis-kopen-spanje",
  aankoopbegeleiding: "/de/aankoopbegeleiding",
  hypotheek: "/de/hypotheek-spanje",
  contact: "/de/contact",
} as const;

const officialSources = {
  valencianTaxLaw:
    "https://www.boe.es/buscar/act.php?id=BOE-A-1998-8202",
  referenceValue: "https://atv.gva.es/valor-de-referencia",
  vatNewBuild:
    "https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
  mortgageCosts:
    "https://clientebancario.bde.es/pcb/es/menu-horizontal/productosservici/financiacion/hipotecas/guia-textual/primerospasoscon/Gastos_asociados_a_la_hipoteca.html",
  nonResidentWithholding:
    "https://sede.agenciatributaria.gob.es/Sede/no-residentes/irnr-sin-establecimiento-permanente/retenciones-irnr-sin-establecimiento-permanente/retencion-adquirente-inmueble.html",
  energyCertificate:
    "https://www.boe.es/buscar/act.php?id=BOE-A-2021-9176",
  ownersAssociation:
    "https://www.boe.es/biblioteca_juridica/abrir_pdf.php?id=PUB-PR-2026-142",
  localPlusvalia:
    "https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214",
  notaryTariff:
    "https://www.boe.es/buscar/act.php?id=BOE-A-1989-28111",
  registryTariff:
    "https://www.boe.es/buscar/act.php?id=BOE-A-1989-28112",
  investorVisa:
    "https://ucraniaurgente.inclusion.gob.es/documents/d/unidadgrandesempresas/250610-criterios-derogacion-inversores",
  foreignBuyerTaxStatus:
    "https://www.reuters.com/business/spains-100-non-eu-property-tax-stalls-congress-2026-03-27/",
  nonResidentForms2026:
    "https://www.boe.es/buscar/doc.php?id=BOE-A-2026-13573",
} as const;

const updatedIso = "2026-07-23";
const updatedDisplay = "23. Juli 2026";

export const metadata: Metadata = {
  title: "Kosten beim Hauskauf in Spanien 2026 | Valencia & Costa Blanca",
  description:
    "Alle Kaufnebenkosten in Spanien für 2026: ITP, IVA, AJD, Notar, Grundbuch, Rechtsanwalt und Rechenbeispiele für €500.000 und €3 Millionen.",
  keywords: [
    "Kosten Hauskauf Spanien 2026",
    "Kaufnebenkosten Spanien",
    "Käuferkosten Spanien",
    "ITP Valencia 2026",
    "Haus kaufen Costa Blanca Kosten",
    "Neubau Spanien IVA AJD",
    "Notarkosten Spanien",
    "Rechtsanwalt Hauskauf Spanien",
    "Nordic Move Spain",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
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
  openGraph: {
    type: "article",
    locale: "de_DE",
    siteName: "Nordic Move Spain",
    title: "Was kostet der Kauf eines Hauses in Spanien im Jahr 2026?",
    description:
      "Vollständiger Kostenüberblick für Bestandsimmobilien und Neubauten in der Comunitat Valenciana, einschließlich Beispielen für €500.000 und €3 Millionen.",
    publishedTime: updatedIso,
    modifiedTime: updatedIso,
    authors: ["Nordic Move Spain"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kosten Hauskauf Spanien 2026",
    description:
      "ITP 9% oder 11%, IVA, AJD, Notar, Rechtsanwalt und vollständige Rechenbeispiele.",
  },
};

type CostRow = {
  label: string;
  amount: number;
  explanation: string;
  kind?: "tax" | "external" | "free";
};

type CostExample = {
  id: string;
  title: string;
  subtitle: string;
  purchasePrice: number;
  rows: CostRow[];
  totalExtra: number;
  totalIncludingPurchase: number;
};

const used500: CostExample = {
  id: "bestaand-500000",
  title: "Bestandsimmobilie für €500.000",
  subtitle: "Regelsatz Comunitat Valenciana, ohne Hypothek",
  purchasePrice: 500_000,
  rows: [
    {
      label: "ITP — 9%",
      amount: 45_000,
      explanation: "Steuersatz für eine Bestandsimmobilie mit einem steuerlichen Wert bis einschließlich €1 Million.",
      kind: "tax",
    },
    {
      label: "Rechtsanwalt — Rechenannahme 1% + 21% IVA",
      amount: 6_050,
      explanation: "Kein gesetzlich festgelegtes Honorar. Fordern Sie vorab immer ein Festpreis- oder detailliertes Angebot an.",
      kind: "external",
    },
    {
      label: "Notar — Planungsbetrag",
      amount: 1_100,
      explanation: "Die tatsächliche Rechnung richtet sich nach dem gesetzlichen Notartarif und der Komplexität der Urkunde.",
      kind: "external",
    },
    {
      label: "Grundbuch — Planungsbetrag",
      amount: 700,
      explanation: "Die tatsächliche Rechnung richtet sich nach dem gesetzlichen Grundbuchtarif.",
      kind: "external",
    },
    {
      label: "Gestoría — Rechenannahme €600 + IVA",
      amount: 726,
      explanation: "Nur wenn für die Kaufabwicklung eine externe Gestoría eingesetzt wird.",
      kind: "external",
    },
    {
      label: "Kaufbegleitungsgebühr Nordic Move Spain",
      amount: 0,
      explanation: "Keine direkte Betreuungsgebühr für den Käufer im Rahmen unseres Kaufservices.",
      kind: "free",
    },
    {
      label: "Technischer Kaufbericht Nordic Move Spain",
      amount: 0,
      explanation: "Ohne Zusatzkosten enthalten; nicht dasselbe wie ein Bankgutachten oder Energiezertifikat.",
      kind: "free",
    },
  ],
  totalExtra: 53_576,
  totalIncludingPurchase: 553_576,
};

const used3m: CostExample = {
  id: "bestaand-3000000",
  title: "Bestandsimmobilie für €3.000.000",
  subtitle: "Wert über €1 Million, ohne Hypothek",
  purchasePrice: 3_000_000,
  rows: [
    {
      label: "ITP — 11%",
      amount: 330_000,
      explanation: "Bei einem Wert über €1 Million gelten 11% auf den gesamten steuerpflichtigen Wert.",
      kind: "tax",
    },
    {
      label: "Rechtsanwalt — Rechenannahme 1% + 21% IVA",
      amount: 36_300,
      explanation: "Bei höheren Kaufpreisen wird häufig ein Festpreis oder ein degressives Honorar vereinbart; dieses Beispiel verwendet bewusst eine transparente 1%-Annahme.",
      kind: "external",
    },
    {
      label: "Notar — Planungsbetrag",
      amount: 3_000,
      explanation: "Richtwert; unter anderem abhängig von Seitenzahl, Kopien, Vollmachten und der Anzahl der Grundbuchobjekte.",
      kind: "external",
    },
    {
      label: "Grundbuch — Planungsbetrag",
      amount: 1_800,
      explanation: "Richtwert und abhängig von den eingetragenen Vorgängen und Objekten.",
      kind: "external",
    },
    {
      label: "Gestoría — Rechenannahme €600 + IVA",
      amount: 726,
      explanation: "Nur wenn eine externe Gestoría beauftragt wird.",
      kind: "external",
    },
    {
      label: "Kaufbegleitungsgebühr Nordic Move Spain",
      amount: 0,
      explanation: "Keine direkte Betreuungsgebühr für den Käufer im Rahmen unseres Kaufservices.",
      kind: "free",
    },
    {
      label: "Technischer Kaufbericht Nordic Move Spain",
      amount: 0,
      explanation: "Ohne Zusatzkosten enthalten; zusätzliche Spezialuntersuchungen können separat erforderlich sein.",
      kind: "free",
    },
  ],
  totalExtra: 371_826,
  totalIncludingPurchase: 3_371_826,
};

const new500: CostExample = {
  id: "nieuwbouw-500000",
  title: "Neubauimmobilie für €500.000",
  subtitle: "Zweitwohnsitz oder nicht qualifizierender Hauptwohnsitz, ohne Hypothek",
  purchasePrice: 500_000,
  rows: [
    {
      label: "IVA — 10%",
      amount: 50_000,
      explanation: "Allgemeiner Mehrwertsteuersatz für die Erstlieferung einer Immobilie durch den Bauträger.",
      kind: "tax",
    },
    {
      label: "AJD — 1,4%",
      amount: 7_000,
      explanation: "Allgemeiner valencianischer AJD-Satz seit dem 1. Juni 2026, wenn der 0,1%-Satz für den Hauptwohnsitz nicht gilt.",
      kind: "tax",
    },
    {
      label: "Rechtsanwalt — Rechenannahme 1% + 21% IVA",
      amount: 6_050,
      explanation: "Rechtliche Prüfung unter anderem von Bauträger, Genehmigungen, Garantien und Kaufvertrag.",
      kind: "external",
    },
    {
      label: "Notar — Planungsbetrag",
      amount: 1_100,
      explanation: "Richtwert nach gesetzlichem Tarif und der endgültigen Urkunde.",
      kind: "external",
    },
    {
      label: "Grundbuch — Planungsbetrag",
      amount: 700,
      explanation: "Richtwert nach gesetzlichem Tarif.",
      kind: "external",
    },
    {
      label: "Gestoría — Rechenannahme €600 + IVA",
      amount: 726,
      explanation: "Optional, abhängig von der gewählten Abwicklung.",
      kind: "external",
    },
    {
      label: "Kaufbegleitungsgebühr Nordic Move Spain",
      amount: 0,
      explanation: "Keine direkte Betreuungsgebühr für den Käufer im Rahmen unseres Kaufservices.",
      kind: "free",
    },
    {
      label: "Technischer Kaufbericht Nordic Move Spain",
      amount: 0,
      explanation: "Ohne Zusatzkosten enthalten; lassen Sie bei der Übergabe auch Mängel und Ausführungsqualität dokumentieren.",
      kind: "free",
    },
  ],
  totalExtra: 65_576,
  totalIncludingPurchase: 565_576,
};

const new3m: CostExample = {
  id: "nieuwbouw-3000000",
  title: "Neubauimmobilie für €3.000.000",
  subtitle: "Zweitwohnsitz oder nicht qualifizierender Hauptwohnsitz, ohne Hypothek",
  purchasePrice: 3_000_000,
  rows: [
    {
      label: "IVA — 10%",
      amount: 300_000,
      explanation: "Allgemeiner Mehrwertsteuersatz für die Erstlieferung durch den Bauträger.",
      kind: "tax",
    },
    {
      label: "AJD — 1,4%",
      amount: 42_000,
      explanation: "Allgemeiner AJD-Satz in der Comunitat Valenciana ab dem 1. Juni 2026.",
      kind: "tax",
    },
    {
      label: "Rechtsanwalt — Rechenannahme 1% + 21% IVA",
      amount: 36_300,
      explanation: "Kein gesetzlich festgelegtes Honorar; lassen Sie bei Luxusimmobilien Leistungsumfang, Haftung und Spezialprüfungen schriftlich festhalten.",
      kind: "external",
    },
    {
      label: "Notar — Planungsbetrag",
      amount: 3_000,
      explanation: "Richtwert; mehrere Grundstücke, Garagen, Nebengebäude oder Vollmachten können die Rechnung beeinflussen.",
      kind: "external",
    },
    {
      label: "Grundbuch — Planungsbetrag",
      amount: 1_800,
      explanation: "Richtwert und abhängig von den einzutragenden Objekten und Rechten.",
      kind: "external",
    },
    {
      label: "Gestoría — Rechenannahme €600 + IVA",
      amount: 726,
      explanation: "Optional, abhängig von der gewählten Abwicklung.",
      kind: "external",
    },
    {
      label: "Kaufbegleitungsgebühr Nordic Move Spain",
      amount: 0,
      explanation: "Keine direkte Betreuungsgebühr für den Käufer im Rahmen unseres Kaufservices.",
      kind: "free",
    },
    {
      label: "Technischer Kaufbericht Nordic Move Spain",
      amount: 0,
      explanation: "Ohne Zusatzkosten enthalten; spezielle Prüfungen von Konstruktion, Pool oder Installationen können zusätzlich erforderlich sein.",
      kind: "free",
    },
  ],
  totalExtra: 383_826,
  totalIncludingPurchase: 3_383_826,
};

const examples = [used500, used3m, new500, new3m];

const faqItems = [
  {
    question: "Wie viel muss ich in Spanien zusätzlich zum Kaufpreis einplanen?",
    answer:
      "In der Comunitat Valenciana besteht der größte Teil der Nebenkosten aus Steuern. Bei Bestandsimmobilien sind es seit dem 1. Juni 2026 meist 9% ITP und 11%, wenn der steuerpflichtige Wert über €1 Million liegt. Bei regulären Neubauten sind es meist 10% IVA plus 1,4% AJD oder möglicherweise 0,1% AJD, wenn der Kauf rechtlich als Hauptwohnsitz qualifiziert. Hinzu kommen Notar, Grundbuch, Rechtsanwalt und gegebenenfalls Finanzierungskosten.",
  },
  {
    question: "Zahle ich bei Nordic Move Spain eine Kaufbegleitungsgebühr?",
    answer:
      "Im Kaufservice von Nordic Move Spain zahlt der Käufer keine direkte Kaufbegleitungsgebühr. Auch der technische Kaufbericht ist ohne Zusatzkosten enthalten. Steuern und Kosten unabhängiger externer Parteien wie Rechtsanwalt, Notar, Grundbuch, Gutachter und gegebenenfalls Gestoría trägt weiterhin der Käufer.",
  },
  {
    question: "Ist der technische Bericht dasselbe wie ein Bankgutachten?",
    answer:
      "Nein. Der technische Kaufbericht beurteilt die Immobilie technisch. Ein Bankgutachten bestimmt einen Finanzierungswert für die Hypothek. Das Energiezertifikat ist wiederum ein anderes, gesetzlich vorgeschriebenes Dokument. Zusätzlich können Spezialuntersuchungen erforderlich sein.",
  },
  {
    question: "Zahle ich bei demselben Kauf sowohl ITP als auch IVA?",
    answer:
      "Normalerweise nicht. Eine gebrauchte Immobilie unterliegt in der Regel ITP. Die Erstlieferung eines Neubaus durch den Bauträger unterliegt in der Regel IVA und zusätzlich AJD.",
  },
  {
    question: "Wird ITP immer auf den Kaufpreis berechnet?",
    answer:
      "Nicht unbedingt. Bei Immobilien gilt grundsätzlich der katasterrechtliche Referenzwert als minimale steuerliche Bemessungsgrundlage. Liegt der erklärte Wert, Preis oder die Gegenleistung höher, wird der höchste Wert verwendet. Prüfen Sie dies vor einer verbindlichen Reservierungs- oder Arras-Vereinbarung.",
  },
  {
    question: "Erhalten junge Käufer in Valencia eine ITP-Ermäßigung?",
    answer:
      "Unter bestimmten Voraussetzungen kann ein Käufer unter 35 Jahren für den ersten Hauptwohnsitz 6% ITP zahlen, wenn der Wert höchstens €180.000 beträgt, oder 8%, wenn der Wert höher ist. Unter anderem gelten Einkommensgrenzen und Bedingungen für den vom jungen Käufer erworbenen Anteil.",
  },
  {
    question: "Ist der 3%-Einbehalt bei einem nicht in Spanien ansässigen Verkäufer eine zusätzliche Kaufnebenkostenposition?",
    answer:
      "Nein. Der Käufer behält 3% der vereinbarten Gegenleistung ein und führt diesen Betrag mit Modelo 211 als Vorauszahlung auf die Steuer des nicht ansässigen Verkäufers ab. Der Betrag wird daher normalerweise von der Zahlung an den Verkäufer abgezogen.",
  },
  {
    question: "Wer trägt die Kosten einer spanischen Hypothekenurkunde?",
    answer:
      "Nach der Kostenverteilung seit dem spanischen Hypothekengesetz trägt der Käufer in der Regel das Bankgutachten. Die Bank übernimmt für die Hypothekenurkunde die Kosten von Notar, Grundbuch, Steuer und Gestoría. Davon getrennt sind die Kosten der Kaufurkunde selbst sowie eine mögliche Bereitstellungs- oder Abschlussgebühr.",
  },
  {
    question: "Kann eine Immobilie mit Energieklasse F oder G im Jahr 2026 verkauft werden?",
    answer:
      "Die aktuelle nationale Regelung verlangt ein gültiges, registriertes Energiezertifikat, die Angabe der Einstufung in Anzeigen und die Beifügung von Zertifikat und Label zum Kaufvertrag. Diese Seite stellt für 2026 kein allgemeines nationales Verkaufsverbot für niedrige Energieklassen fest. Prüfen Sie jedoch künftige Sanierungspläne, Beschlüsse der Eigentümergemeinschaft und lokale Regeln.",
  },
  {
    question: "Ist die spanische Golden Visa bei einem Kauf über €3 Millionen noch verfügbar?",
    answer:
      "Neue immobilienbezogene Investorenanträge nach dem 3. April 2025 werden nicht mehr zugelassen. Ein teurer Immobilienkauf führt daher nicht automatisch zu einer neuen Golden Visa. Für bestehende Verfahren und Verlängerungen können Übergangsregeln gelten.",
  },
] as const;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Gesamtkosten beim Kauf eines Hauses in Spanien im Jahr 2026",
  description:
    "Vollständiger Überblick über die Kaufnebenkosten von Bestandsimmobilien und Neubauten in der Comunitat Valenciana, mit Rechenbeispielen für €500.000 und €3 Millionen.",
  datePublished: updatedIso,
  dateModified: updatedIso,
  inLanguage: "de-DE",
  author: {
    "@type": "Organization",
    name: "Nordic Move Spain",
  },
  publisher: {
    "@type": "Organization",
    name: "Nordic Move Spain",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_PATH,
  },
  about: [
    "Kosten beim Hauskauf in Spanien",
    "ITP Comunitat Valenciana",
    "IVA und AJD bei Neubauten",
    "Kaufnebenkosten Costa Blanca",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "/de",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Haus kaufen in Spanien",
      item: internalLinks.koopgids,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Kaufnebenkosten Spanien 2026",
      item: PAGE_PATH,
    },
  ],
};

function formatEuro(amount: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="mt-0.5 h-5 w-5 shrink-0 fill-current"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.292a1 1 0 0 1 .004 1.414l-7.25 7.292a1 1 0 0 1-1.42 0l-3.75-3.771a1 1 0 0 1 1.42-1.41l3.04 3.056 6.542-6.577a1 1 0 0 1 1.414-.004Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4 shrink-0 fill-current"
    >
      <path
        fillRule="evenodd"
        d="M3.25 10a.75.75 0 0 1 .75-.75h10.19L10.97 6.03a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H4a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-semibold text-teal-800 underline decoration-teal-300 decoration-2 underline-offset-4 transition hover:text-teal-950"
    >
      {children}
    </Link>
  );
}

function SourceLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-teal-800 underline decoration-teal-300 decoration-2 underline-offset-4 transition hover:text-teal-950"
    >
      {children}
    </a>
  );
}

function CostTable({ example }: { example: CostExample }) {
  const percentage = (example.totalExtra / example.purchasePrice) * 100;

  return (
    <section
      id={example.id}
      aria-labelledby={`${example.id}-title`}
      className="scroll-mt-24 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-6 sm:px-7">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
          Rechenbeispiel 2026
        </p>
        <h3
          id={`${example.id}-title`}
          className="mt-2 text-2xl font-black tracking-tight text-slate-950"
        >
          {example.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{example.subtitle}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <caption className="sr-only">
            Geschätzte Kaufnebenkosten für {example.title.toLowerCase()}
          </caption>
          <thead className="bg-white text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th scope="col" className="px-5 py-4 font-bold sm:px-7">
                Kostenposition
              </th>
              <th scope="col" className="px-5 py-4 text-right font-bold">
                Betrag
              </th>
              <th scope="col" className="px-5 py-4 font-bold sm:px-7">
                Erläuterung
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {example.rows.map((row) => (
              <tr key={row.label} className="align-top">
                <th
                  scope="row"
                  className="px-5 py-4 font-semibold text-slate-900 sm:px-7"
                >
                  <span className="flex items-center gap-2">
                    {row.label}
                    {row.kind === "free" ? (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-black uppercase tracking-wide text-emerald-800">
                        Kostenlos
                      </span>
                    ) : null}
                  </span>
                </th>
                <td
                  className={`whitespace-nowrap px-5 py-4 text-right font-black ${
                    row.kind === "free" ? "text-emerald-700" : "text-slate-950"
                  }`}
                >
                  {formatEuro(row.amount)}
                </td>
                <td className="px-5 py-4 leading-6 text-slate-600 sm:px-7">
                  {row.explanation}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border-t-2 border-slate-900 bg-slate-950 text-white">
            <tr>
              <th scope="row" className="px-5 py-4 font-bold sm:px-7">
                Gesamte zusätzliche Kosten in diesem Beispiel
              </th>
              <td className="px-5 py-4 text-right text-lg font-black">
                {formatEuro(example.totalExtra)}
              </td>
              <td className="px-5 py-4 text-slate-300 sm:px-7">
                {percentage.toLocaleString("de-DE", {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}
                % des Kaufpreises
              </td>
            </tr>
            <tr className="border-t border-white/15">
              <th scope="row" className="px-5 py-4 font-bold sm:px-7">
                Gesamtsumme einschließlich Kaufpreis
              </th>
              <td className="px-5 py-4 text-right text-xl font-black text-emerald-300">
                {formatEuro(example.totalIncludingPurchase)}
              </td>
              <td className="px-5 py-4 text-slate-300 sm:px-7">
                Ohne Hypothek, Währungskosten und objektspezifische Spezialuntersuchungen
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_top_right,rgba(20,184,166,0.45),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(14,116,144,0.35),transparent_38%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <nav aria-label="Brotkrümelnavigation" className="text-sm text-slate-300">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/de" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={internalLinks.koopgids} className="hover:text-white">
                  Haus kaufen in Spanien
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Kaufnebenkosten 2026
              </li>
            </ol>
          </nav>

          <div className="mt-10 max-w-4xl">
            <p className="inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-bold text-teal-200">
              Geprüft und aktualisiert am {updatedDisplay}
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Gesamtkosten beim Kauf eines Hauses in Spanien im Jahr 2026
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Ein vollständiger und praktischer Überblick für die Comunitat Valenciana und die Costa Blanca:
              Bestandsimmobilien, Neubauten, Steuern, Rechtsanwalt, Notar, Grundbuch, Hypothek,
              Energieregeln und Rechenbeispiele für Immobilien im Wert von €500.000 und €3 Millionen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold">
              <span className="rounded-full bg-white/10 px-4 py-2">Autor: Nordic Move Spain</span>
              <span className="rounded-full bg-white/10 px-4 py-2">Lesezeit: ca. 14 Minuten</span>
              <span className="rounded-full bg-emerald-400/15 px-4 py-2 text-emerald-200">
                Unsere Betreuungsgebühr: €0
              </span>
              <span className="rounded-full bg-emerald-400/15 px-4 py-2 text-emerald-200">
                Technischer Bericht: €0
              </span>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#rekenvoorbeelden"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-5 py-3 font-black text-slate-950 transition hover:bg-teal-300"
              >
                Rechenbeispiele ansehen
                <ArrowIcon />
              </a>
              <Link
                href={internalLinks.contact}
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-5 py-3 font-black text-white transition hover:border-white hover:bg-white/10"
              >
                Persönliche Kostenschätzung anfragen
              </Link>
            </div>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <section aria-labelledby="snel-antwoord" className="scroll-mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Kurzantwort
            </p>
            <h2
              id="snel-antwoord"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Wie viel sollten Sie zusätzlich zum Kaufpreis einplanen?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Bei einem Kauf in der Comunitat Valenciana wird die Gesamtrechnung vor allem
              durch die Art der Immobilie bestimmt. Eine gebrauchte Immobilie unterliegt normalerweise ITP. Ein Neubau des
              Bauträgers unterliegt in der Regel 10% IVA und zusätzlich AJD. Professionelle und
              administrative Kosten kommen hinzu.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-bold text-slate-500">Bestandsimmobilie ≤ €1 Million</p>
              <p className="mt-2 text-4xl font-black text-slate-950">9% ITP</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Zuzüglich Notar, Grundbuch, Rechtsanwalt und gegebenenfalls Finanzierungs- oder Übersetzungskosten.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-bold text-slate-500">Bestandsimmobilie &gt; €1 Million</p>
              <p className="mt-2 text-4xl font-black text-slate-950">11% ITP</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Der 11%-Satz gilt auf den gesamten steuerpflichtigen Wert, nicht nur auf den über €1 Million liegenden Teil.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-bold text-slate-500">Regulärer Neubau</p>
              <p className="mt-2 text-4xl font-black text-slate-950">10% + 1,4%</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                10% IVA plus in der Regel 1,4% AJD; bei einem qualifizierenden Hauptwohnsitz kann AJD 0,1% betragen.
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="text-sm font-bold text-emerald-800">Nordic Move Spain</p>
              <p className="mt-2 text-4xl font-black text-emerald-900">€0 + €0</p>
              <p className="mt-3 text-sm leading-6 text-emerald-900/80">
                €0 direkte Kaufbegleitungsgebühr und €0 für den enthaltenen technischen Kaufbericht.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <h3 className="text-xl font-black text-amber-950">Wichtig: Prozentsätze sind nicht die ganze Geschichte</h3>
            <p className="mt-3 leading-7 text-amber-950/85">
              Die steuerliche Bemessungsgrundlage kann höher sein als der Kaufpreis. Für ITP und bestimmte AJD-Fälle
              ist der Kataster-Referenzwert grundsätzlich der Mindestwert. Ist der angegebene
              Kaufpreis oder die Gegenleistung höher, gilt der höchste Wert. Prüfen Sie den
              Referenzwert daher, bevor Sie einen verbindlichen Vertrag unterzeichnen.
            </p>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="wijzigingen-2026" aria-labelledby="wijzigingen-title" className="scroll-mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Neue Regeln
            </p>
            <h2
              id="wijzigingen-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Was hat sich 2026 geändert?
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-sm font-black uppercase tracking-wider text-teal-700">Ab 1. Juni 2026</p>
              <h3 className="mt-2 text-xl font-black text-slate-950">Allgemeiner ITP-Satz auf 9%</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Der allgemeine valencianische ITP-Satz für Immobilien beträgt 9%. Bei einem Wert über €1
                Million gilt weiterhin der 11%-Satz. Für Transaktionen mit einem früheren
                steuerlichen Stichtag können ältere Sätze gelten.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-sm font-black uppercase tracking-wider text-teal-700">Ab 1. Juni 2026</p>
              <h3 className="mt-2 text-xl font-black text-slate-950">Allgemeiner AJD-Satz auf 1,4%</h3>
              <p className="mt-3 leading-7 text-slate-600">
                In den übrigen Fällen beträgt der valencianische AJD-Satz 1,4%. Für die erste Ausfertigung
                einer Urkunde über den Kauf eines qualifizierenden Hauptwohnsitzes kann 0,1% gelten.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-sm font-black uppercase tracking-wider text-teal-700">Ab 23. Juli 2026</p>
              <h3 className="mt-2 text-xl font-black text-slate-950">Neues Energieregister</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Die nationale Regelung führt ein zentrales Register zugelassener
                Energiezertifizierungsfachleute ein. Dies ist keine neue Kaufsteuer, aber
                für die Prüfung eines gültigen Zertifikats relevant.
              </p>
            </div>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="bestaande-bouw" aria-labelledby="bestaande-bouw-title" className="scroll-mt-24">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
                Bestandsimmobilie
              </p>
              <h2
                id="bestaande-bouw-title"
                className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
              >
                ITP bei Bestandsimmobilien in der Comunitat Valenciana
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Kaufen Sie eine gebrauchte Immobilie von einer Privatperson oder handelt es sich um eine zweite oder spätere Lieferung,
                zahlen Sie normalerweise ITP statt IVA. Seit dem 1. Juni 2026 beträgt der allgemeine Satz
                9%. Liegt der steuerpflichtige Wert über €1 Million, gelten 11% auf den gesamten
                Wert.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">ITP-Sätze in der Comunitat Valenciana im Jahr 2026</caption>
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th scope="col" className="px-5 py-4 font-bold">Situation</th>
                      <th scope="col" className="px-5 py-4 text-right font-bold">ITP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-5 py-4">Allgemein, Wert bis einschließlich €1 Million</td>
                      <td className="px-5 py-4 text-right text-lg font-black">9%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4">Allgemein, Wert über €1 Million</td>
                      <td className="px-5 py-4 text-right text-lg font-black">11%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4">Unter 35, erster Hauptwohnsitz ≤ €180.000, Voraussetzungen erfüllt</td>
                      <td className="px-5 py-4 text-right text-lg font-black">6%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4">Unter 35, erster Hauptwohnsitz &gt; €180.000, Voraussetzungen erfüllt</td>
                      <td className="px-5 py-4 text-right text-lg font-black">8%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4">Bestimmte geschützte/soziale Situationen ≤ €180.000</td>
                      <td className="px-5 py-4 text-right text-lg font-black">3%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4">Bestimmte geschützte/soziale Situationen &gt; €180.000</td>
                      <td className="px-5 py-4 text-right text-lg font-black">4%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Die 3%- und 4%-Kategorien können unter anderem für bestimmte VPO-Immobilien,
                qualifizierende Groß- oder Alleinerziehendenfamilien, bestimmte Behinderungsgrade und Opfer
                geschlechtsspezifischer Gewalt gelten. Einkommen, Hauptwohnsitz, Eigentumsanteil, Immobilienwert und Nachweise
                müssen im Einzelfall geprüft werden.
              </p>
            </div>

            <aside className="rounded-3xl border border-teal-200 bg-teal-50 p-6 sm:p-8">
              <h3 className="text-xl font-black text-teal-950">Ermäßigung für Käufer unter 35</h3>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-teal-950/85">
                <li className="flex gap-3">
                  <span className="text-teal-700"><CheckIcon /></span>
                  Es muss sich um den ersten Hauptwohnsitz des jungen Käufers handeln.
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-700"><CheckIcon /></span>
                  Die Ermäßigung gilt nur für den Anteil, den der qualifizierende Käufer selbst erwirbt.
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-700"><CheckIcon /></span>
                  Die Summe aus allgemeiner und Spar-Bemessungsgrundlage darf nach der aktuellen Regelung
                  höchstens €30.000 individuell oder €47.000 gemeinsam betragen.
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-700"><CheckIcon /></span>
                  Bei einem späteren Wegfall der Voraussetzungen kann eine Nachzahlung mit Zinsen folgen.
                </li>
              </ul>
              <p className="mt-6 rounded-2xl bg-white p-4 text-sm leading-6 text-slate-700">
                Beispiel: Bei einer Bestandsimmobilie für €500.000 sinkt ITP von €45.000 auf €40.000
                wenn der 8%-Satz für junge Käufer vollständig anwendbar ist. Lassen Sie dies vor der Unterzeichnung
                schriftlich vom Rechtsanwalt oder Steuerberater bestätigen.
              </p>
            </aside>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="nieuwbouw" aria-labelledby="nieuwbouw-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Neubau
            </p>
            <h2
              id="nieuwbouw-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              IVA und AJD bei einer Neubauimmobilie
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Bei der Erstlieferung einer Immobilie durch den Bauträger zahlen Sie normalerweise 10%
              IVA. Zusätzlich unterliegt die notarielle Kaufurkunde in der Regel AJD. In der Comunitat
              Valenciana beträgt der allgemeine AJD-Satz seit dem 1. Juni 2026 1,4%. Für eine Urkunde, die den
              Kauf eines steuerlich qualifizierenden Hauptwohnsitzes dokumentiert, nennt das Gesetz 0,1%.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-950 p-7 text-white">
              <p className="text-sm font-bold text-slate-300">Regulärer Neubau</p>
              <p className="mt-2 text-5xl font-black text-teal-300">10%</p>
              <p className="mt-3 leading-7 text-slate-300">IVA auf den steuerpflichtigen Verkaufspreis. Für bestimmte VPO-Immobilien mit Sonderstatus oder öffentlicher Förderung können 4% gelten.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-7">
              <p className="text-sm font-bold text-slate-500">AJD allgemein</p>
              <p className="mt-2 text-5xl font-black text-slate-950">1,4%</p>
              <p className="mt-3 leading-7 text-slate-600">Üblicherweise für einen Zweitwohnsitz oder wenn der Hauptwohnsitz-Satz nicht gilt.</p>
            </div>
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7">
              <p className="text-sm font-bold text-emerald-800">AJD Hauptwohnsitz</p>
              <p className="mt-2 text-5xl font-black text-emerald-900">0,1%</p>
              <p className="mt-3 leading-7 text-emerald-900/80">Nur wenn der Kauf rechtlich die Voraussetzungen eines Hauptwohnsitzes erfüllt.</p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 p-6 sm:p-8">
            <h3 className="text-xl font-black text-slate-950">Ersparnis beim AJD-Satz von 0,1%</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-bold text-slate-500">Neubau €500.000</p>
                <p className="mt-1 text-2xl font-black text-slate-950">€6.500 weniger AJD</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">€500 statt €7.000, wenn alle Voraussetzungen für den Hauptwohnsitz erfüllt sind.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-bold text-slate-500">Neubau €3.000.000</p>
                <p className="mt-1 text-2xl font-black text-slate-950">€39.000 weniger AJD</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">€3.000 statt €42.000, wenn alle Voraussetzungen für den Hauptwohnsitz erfüllt sind.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="alle-kosten" aria-labelledby="alle-kosten-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Vollständige Kostenliste
            </p>
            <h2
              id="alle-kosten-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Welche Kaufnebenkosten kommen noch hinzu?
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "1. Grunderwerbsteuer oder IVA + AJD",
                text: "Der größte Kostenposten. Bestandsimmobilie: normalerweise ITP. Erstlieferung eines Neubaus: normalerweise IVA plus AJD. Grundsätzlich zahlen Sie nicht beide Systeme für dieselbe Lieferung.",
              },
              {
                title: "2. Unabhängiger Rechtsanwalt",
                text: "Prüft Eigentum, Belastungen, Pfändungen, Schulden, Genehmigungen, baurechtlichen Status, Verträge, Verkäufer, Unterlagen der Eigentümergemeinschaft und steuerliche Abwicklung. Es gibt kein gesetzlich festgelegtes Honorar.",
              },
              {
                title: "3. Notar",
                text: "Die Kaufurkunde wird beim Notar unterzeichnet. Notargebühren sind reguliert, die Endrechnung variiert jedoch je nach Wert, Umfang, Kopien, Vollmachten und Komplexität.",
              },
              {
                title: "4. Registro de la Propiedad",
                text: "Nach dem Kauf wird das Eigentum eingetragen. Auch diese Kosten folgen einem regulierten Tarif und hängen von der tatsächlichen Eintragung ab.",
              },
              {
                title: "5. Gestoría",
                text: "Kann Steuererklärungen, Zahlungen und Eintragung koordinieren. Bei einer Hypothek nutzt die Bank häufig eine Gestoría. Bei einem Kauf ohne Darlehen hängt dies von der gewählten Abwicklung ab.",
              },
              {
                title: "6. Bankbewertung für die Hypothek",
                text: "Bei Finanzierung zahlt der Käufer in der Regel das unabhängige Bankgutachten. Dies ist ein anderes Dokument als der kostenlose technische Kaufbericht.",
              },
              {
                title: "7. Übersetzung, Dolmetscher, Vollmacht und Apostille",
                text: "Kann erforderlich sein, wenn Sie nicht persönlich unterzeichnen oder die spanische Urkunde nicht ausreichend verstehen. Die Kosten unterscheiden sich stark nach Sprache, Umfang und Ausstellungsland.",
              },
              {
                title: "8. Bank- und Währungskosten",
                text: "Internationale Zahlungen, Wechselkursmargen, Bankschecks und Zahlungsgarantien können Kosten verursachen. Bei hohen Beträgen ist bereits eine kleine Wechselkursmarge finanziell relevant.",
              },
              {
                title: "9. Zusätzliche technische Untersuchungen",
                text: "Ein kostenloser allgemeiner technischer Bericht ersetzt nicht immer eine statische Berechnung, Poolprüfung, Bodenuntersuchung, Kanalinspektion, Asbestprüfung oder spezielle Anlagenprüfung.",
              },
              {
                title: "10. Versicherung und Anschlüsse",
                text: "Eine Gebäudeversicherung kann bei einer Hypothek verpflichtend sein. Berücksichtigen Sie außerdem mögliche Vertragsänderungen, Kautionen oder Anschlusskosten für Versorgungsleistungen.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 p-6 sm:p-7">
                <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
            <h3 className="text-2xl font-black text-emerald-950">Was ist bei Nordic Move Spain kostenlos?</h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">Kaufbegleitung</p>
                <p className="mt-2 text-3xl font-black text-emerald-950">€0</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Keine direkte Betreuungsgebühr für den Käufer innerhalb unseres Kaufservices.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">Technischer Kaufbericht</p>
                <p className="mt-2 text-3xl font-black text-emerald-950">€0</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Ohne Zusatzkosten enthalten. Bankgutachten, Energiezertifikat und spezialisierte
                  Folgeuntersuchungen sind separate Leistungen.
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-emerald-950/80">
              Externe Kosten bleiben transparent und separat: Steuern, Rechtsanwalt, Notar,
              Grundbuch, gegebenenfalls Gestoría, Bank, Übersetzer und Spezialuntersuchungen.
            </p>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="rekenvoorbeelden" aria-labelledby="rekenvoorbeelden-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Transparente Berechnung
            </p>
            <h2
              id="rekenvoorbeelden-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Rechenbeispiele: €500.000 und €3.000.000
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Die folgenden Berechnungen verwenden feste Annahmen, damit das Ergebnis nachvollziehbar
              bleibt. Es handelt sich um Planungsbeträge, nicht um ein Angebot. Für den Rechtsanwalt rechnen wir mit 1% des
              Kaufpreises plus 21% IVA. Für Notar, Grundbuch und Gestoría verwenden wir ausdrücklich genannte
              Planungsbeträge. Die endgültigen Rechnungen können höher oder niedriger ausfallen.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {examples.map((example) => (
              <CostTable key={example.id} example={example} />
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-slate-300 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-xl font-black text-slate-950">Zusammenfassung der vier Beispiele</h3>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-300 text-xs uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-3 pr-5 font-bold">Immobilie</th>
                    <th scope="col" className="px-5 py-3 text-right font-bold">Zusätzliche Kosten</th>
                    <th scope="col" className="px-5 py-3 text-right font-bold">Gesamt</th>
                    <th scope="col" className="pl-5 py-3 text-right font-bold">Prozentsatz</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {examples.map((example) => (
                    <tr key={`summary-${example.id}`}>
                      <th scope="row" className="py-4 pr-5 font-semibold text-slate-900">
                        {example.title}
                      </th>
                      <td className="px-5 py-4 text-right font-bold">
                        {formatEuro(example.totalExtra)}
                      </td>
                      <td className="px-5 py-4 text-right font-black text-slate-950">
                        {formatEuro(example.totalIncludingPurchase)}
                      </td>
                      <td className="pl-5 py-4 text-right font-bold">
                        {((example.totalExtra / example.purchasePrice) * 100).toLocaleString("de-DE", {
                          minimumFractionDigits: 1,
                          maximumFractionDigits: 1,
                        })}
                        %
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="geen-extra-kosten" aria-labelledby="geen-extra-kosten-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Häufige Fehler
            </p>
            <h2
              id="geen-extra-kosten-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Beträge, die häufig fälschlicherweise als zusätzliche Kaufnebenkosten angesehen werden
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
              <h3 className="text-xl font-black text-slate-950">Arras- oder Reservierungszahlung</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Eine Arras-Zahlung ist normalerweise eine Vorauszahlung auf den Kaufpreis und damit keine zusätzliche
                Kaufnebenkostenposition. Der Vertrag regelt jedoch, was bei Rücktritt oder Nichterfüllung geschieht.
                Lassen Sie das Dokument vor der Zahlung rechtlich prüfen.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
              <h3 className="text-xl font-black text-slate-950">3%-Einbehalt bei einem nicht ansässigen Verkäufer</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Ist der Verkäufer nicht in Spanien ansässig, muss der Käufer 3% der vereinbarten Gegenleistung
                einbehalten und über Modelo 211 abführen. Dies ist eine Vorauszahlung auf die Steuer des
                Verkäufers und wird normalerweise vom an den Verkäufer auszuzahlenden Betrag abgezogen.
                Es sind daher keine zusätzlichen 3% auf den Kaufpreis. Die Formulare 210 und 211 wurden im Juni
                2026 technisch aktualisiert; der gesetzliche Einbehalt bleibt bei 3%.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
              <h3 className="text-xl font-black text-slate-950">Plusvalía municipal</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Bei einem normalen Verkauf ist in der Regel der Verkäufer für die kommunale
                Bodenwertsteuer steuerpflichtig. Ist der Verkäufer eine nicht ansässige natürliche Person, kann der
                Käufer gesetzlich als Ersatzsteuerpflichtiger herangezogen werden. Regeln Sie deshalb einen
                Einbehalt, Zahlungsnachweis oder einen anderen Schutz über den Rechtsanwalt.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
              <h3 className="text-xl font-black text-slate-950">Maklerprovision</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Bei vielen spanischen Transaktionen bezahlt der Verkäufer den Verkaufs-makler, dies ist jedoch keine
                allgemeingültige gesetzliche Regel. Lesen Sie die Reservierungsvereinbarung und den Vermittlungsvertrag:
                zahlen Sie niemals eine nicht vereinbarte Käuferprovision.
              </p>
            </div>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="hypotheek" aria-labelledby="hypotheek-title" className="scroll-mt-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
                Finanzierung
              </p>
              <h2
                id="hypotheek-title"
                className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
              >
                Welche Hypothekenkosten zahlt der Käufer?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Bei der Hypothekenurkunde ist die Kostenverteilung anders als bei der Kaufurkunde. Nach den aktuellen
                spanischen Regeln zahlt der Käufer in der Regel das Bankgutachten. Die Bank trägt die Kosten von
                Notar, Grundbuch, Steuer und Gestoría, die mit der Formalisierung der Hypothek verbunden sind.
              </p>

              <ul className="mt-7 space-y-4 leading-7 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-teal-700"><CheckIcon /></span>
                  <span><strong>Käufer:</strong> Bewertung der Immobilie sowie eine eventuell vertraglich vereinbarte Abschlussgebühr.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-700"><CheckIcon /></span>
                  <span><strong>Bank:</strong> Notar, Grundbuch, Steuer und Gestoría der Hypothekenurkunde.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-700"><CheckIcon /></span>
                  <span><strong>Nicht enthalten:</strong> Kosten der Kaufurkunde, Rechtsanwalt, ITP/IVA/AJD des Kaufs und eventuelle Versicherungen.</span>
                </li>
              </ul>
            </div>

            <aside className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
              <h3 className="text-2xl font-black">Technischer Bericht ≠ Bankbewertung</h3>
              <div className="mt-6 space-y-5 text-sm leading-6 text-slate-300">
                <div>
                  <p className="font-black text-white">Technischer Kaufbericht</p>
                  <p className="mt-1">Bewertet den sichtbaren technischen Zustand und wichtige Punkte. Bei Nordic Move Spain: €0 innerhalb des Kaufservices.</p>
                </div>
                <div>
                  <p className="font-black text-white">Bankgutachten</p>
                  <p className="mt-1">Bestimmt den Finanzierungswert für die Bank. Wird normalerweise vom Käufer bezahlt.</p>
                </div>
                <div>
                  <p className="font-black text-white">Energiezertifikat</p>
                  <p className="mt-1">Gesetzlich vorgeschriebenes Dokument mit Energieklasse, das der Verkäufer beim Verkauf bereitstellen muss.</p>
                </div>
              </div>
              <Link
                href={internalLinks.hypotheek}
                className="mt-8 inline-flex items-center gap-2 font-black text-teal-300 hover:text-teal-200"
              >
                Mehr über Hypotheken in Spanien lesen
                <ArrowIcon />
              </Link>
            </aside>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="energie" aria-labelledby="energie-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Energie und Technik
            </p>
            <h2
              id="energie-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Energiezertifikat, niedrige Effizienzklassen und neue Regeln 2026
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Beim Verkauf einer Bestandsimmobilie muss eine Kopie des registrierten
              Energiezertifikats und des Energielabels dem Kaufvertrag beigefügt werden. Die
              Energieklassifizierung muss auch in Verkaufsanzeigen stehen. Ein Zertifikat ist höchstens
              zehn Jahre gültig; bei Klasse G höchstens fünf Jahre.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 p-7">
              <h3 className="text-xl font-black text-slate-950">Was der Käufer prüfen sollte</h3>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
                <li className="flex gap-3"><span className="text-teal-700"><CheckIcon /></span>Ist das Zertifikat registriert und noch gültig?</li>
                <li className="flex gap-3"><span className="text-teal-700"><CheckIcon /></span>Stimmen Adresse und Katasteridentifikation mit der Immobilie überein?</li>
                <li className="flex gap-3"><span className="text-teal-700"><CheckIcon /></span>Welche Verbesserungen empfiehlt der Bericht und was kosten sie ungefähr?</li>
                <li className="flex gap-3"><span className="text-teal-700"><CheckIcon /></span>Gibt es Beschlüsse der Eigentümergemeinschaft oder Sonderumlagen für Fassade, Dach, Aufzug oder energetische Arbeiten?</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
              <h3 className="text-xl font-black text-amber-950">Kein erfundenes „Label-Verbot“</h3>
              <p className="mt-4 leading-7 text-amber-950/85">
                Die geprüften nationalen Regeln für 2026 verlangen das Zertifikat, die Angabe der Energieklasse in
                Anzeigen und die Übergabe der Dokumente. Daher nennen wir kein allgemeines
                nationales Verbot für den Verkauf einer Immobilie mit Klasse E, F oder G. Europäische
                Sanierungsziele, zukünftige Umsetzung und lokale Vorschriften müssen separat
                beobachtet werden.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-teal-200 bg-teal-50 p-6 sm:p-8">
            <h3 className="text-xl font-black text-teal-950">Neu ab 23. Juli 2026</h3>
            <p className="mt-3 leading-7 text-teal-950/85">
              Die aktualisierte nationale Energieregelung schafft ein zentrales Register
              zugelassener Fachleute. Das unterstützt zuständige Behörden bei Kontrollen. Für den Käufer bleibt die
              praktische Aufgabe gleich: Prüfen Sie, ob das Zertifikat gültig, registriert und
              von einem zugelassenen Fachmann erstellt wurde.
            </p>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="juridische-controles" aria-labelledby="juridische-controles-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Unerwartete Rechnungen vermeiden
            </p>
            <h2
              id="juridische-controles-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Prüfungen, die vor dem Kauf erfolgen sollten
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-lg font-black text-slate-950">Schulden der Eigentümergemeinschaft und Sonderumlagen</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Die Immobilie kann gesetzlich für rückständige Gemeinschaftskosten
                des laufenden Jahres und der drei vorhergehenden Kalenderjahre haften. Lassen Sie den Verkäufer die
                Bescheinigung über Rückstände vorlegen und verzichten Sie nicht ohne Rechtsberatung auf dieses Dokument.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-lg font-black text-slate-950">Genehmigungen und Rechtmäßigkeit</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Vergleichen Sie Grundbuch, Kataster und tatsächlichen Zustand. Prüfen Sie Anbauten, Pool,
                Nebengebäude, Wohn- oder Nutzungsunterlagen, offene Verstöße und
                städtebauliche Planungen.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-lg font-black text-slate-950">Touristische Vermietung</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Für neue touristische Vermietung in einer Wohnanlage ist seit dem 3. April
                2025 die vorherige ausdrückliche Zustimmung der Eigentümergemeinschaft relevant.
                Zusätzlich müssen regionale Registrierung und kommunale Genehmigung geprüft werden.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-300">Hinweis bei €3 Millionen</p>
                <h3 className="mt-2 text-2xl font-black sm:text-3xl">Ein hoher Kaufpreis führt nicht zu einer neuen Golden Visa</h3>
                <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                  Neue Anträge über die frühere Immobilieninvestorenroute nach dem 3. April 2025 werden nicht
                  mehr zugelassen. Kaufen Sie daher nicht auf Grundlage veralteter Werbung, die einen Aufenthalt automatisch mit
                  einer Immobilieninvestition verknüpft. Lassen Sie Einwanderungsberatung vollständig getrennt von der Kaufentscheidung
                  prüfen.
                </p>
              </div>
              <Link
                href={internalLinks.contact}
                className="inline-flex items-center justify-center rounded-xl bg-teal-400 px-5 py-3 font-black text-slate-950 transition hover:bg-teal-300"
              >
                Kaufplan besprechen
              </Link>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-7 sm:p-9">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-amber-800">Statusprüfung für ausländische Käufer</p>
            <h3 className="mt-2 text-2xl font-black text-amber-950">Die angekündigte 100%-Abgabe ist in diesen Berechnungen nicht enthalten</h3>
            <p className="mt-4 leading-7 text-amber-950/85">
              Die viel diskutierte politische Ankündigung einer Abgabe von bis zu 100% für bestimmte Nicht-EU-
              Käufer ohne Wohnsitz in Spanien war zum Prüfdatum nicht als allgemeine Kaufsteuer im
              BOE veröffentlicht. Reuters berichtete im März 2026, dass der Vorschlag im Parlament
              ins Stocken geraten war. Da sich der politische Status ändern kann, prüfen wir dies erneut kurz
              vor einer Reservierung oder Kaufurkunde.
            </p>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="na-aankoop" aria-labelledby="na-aankoop-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Nicht in der Kaufberechnung enthalten
            </p>
            <h2
              id="na-aankoop-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Jährliche Kosten nach der Übergabe
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Für ein realistisches Gesamtbudget sollten Sie Kaufnebenkosten von wiederkehrenden
              Eigentümerkosten trennen. Die folgenden Positionen sind nicht in unseren Rechenbeispielen enthalten, da sie von
              Gemeinde, Immobilie, Nutzung und persönlicher Steuersituation abhängen.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "IBI: kommunale Grundsteuer",
              "Müllgebühren und kommunale Dienstleistungen",
              "Beiträge der Eigentümergemeinschaft und Sonderumlagen",
              "Gebäude- und Hausratversicherung",
              "Instandhaltung von Immobilie, Garten und Pool",
              "Versorgungsleistungen und feste Vertragskosten",
              "Nichtresidentensteuer oder Besteuerung als Resident",
              "Mögliche Vermögensteuer bei höherem Vermögen",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-semibold leading-6 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="stappenplan" aria-labelledby="stappenplan-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Praktischer Schritt-für-Schritt-Plan
            </p>
            <h2
              id="stappenplan-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              So vermeiden Sie Überraschungen in Ihrem Kaufbudget
            </h2>
          </div>

          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                step: "01",
                title: "Klären Sie, ob es sich um Bestand oder eine Erstlieferung handelt",
                text: "Davon hängt ab, ob ITP oder IVA plus AJD die Grundlage Ihrer Steuerberechnung bilden.",
              },
              {
                step: "02",
                title: "Prüfen Sie den Kataster-Referenzwert",
                text: "Berechnen Sie die Steuer nicht automatisch auf den Kaufpreis, wenn der steuerliche Mindestwert höher sein kann.",
              },
              {
                step: "03",
                title: "Lassen Sie mögliche Ermäßigungen vorab bestätigen",
                text: "Alter, Einkommen, Hauptwohnsitz, Familiensituation und Nachweise können den Steuersatz verändern.",
              },
              {
                step: "04",
                title: "Fordern Sie Festpreisangebote externer Fachleute an",
                text: "Lassen Sie Rechtsanwalt, Übersetzer, technischen Spezialisten und gegebenenfalls Gestoría Leistungsumfang und Preis schriftlich festhalten.",
              },
              {
                step: "05",
                title: "Prüfen Sie Immobilie und Unterlagen",
                text: "Technischer Zustand, Genehmigungen, Belastungen, Schulden der Eigentümergemeinschaft, Energieklasse und geplante Arbeiten gehören in ein gemeinsames Prüfpaket.",
              },
              {
                step: "06",
                title: "Fassen Sie alle Zahlungen in einem Closing Statement zusammen",
                text: "Trennen Sie Kaufpreis, Steuern, Einbehalte, offene Schulden und professionelle Kosten vor dem Notartermin.",
              },
            ].map((item) => (
              <li key={item.step} className="rounded-3xl border border-slate-200 p-6 sm:p-7">
                <span className="text-sm font-black tracking-[0.18em] text-teal-700">{item.step}</span>
                <h3 className="mt-2 text-lg font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-lg leading-8 text-slate-700">
            Lesen Sie auch unseren <InternalLink href={internalLinks.koopgids}>vollständigen Kaufleitfaden für Spanien</InternalLink>,
            ontdek het actuele <InternalLink href={internalLinks.aanbod}>Immobilienangebot</InternalLink> oder lesen Sie, wie unsere
            <InternalLink href={internalLinks.aankoopbegeleiding}> Kaufbegleitung</InternalLink> funktioniert.
          </p>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Häufig gestellte Fragen
            </p>
            <h2
              id="faq-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              FAQ zu Kaufnebenkosten in Spanien
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white px-5 sm:px-8">
            {faqItems.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-black text-slate-950 marker:content-none">
                  <span>{item.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-4xl pt-4 leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="bronnen" aria-labelledby="bronnen-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Offizielle Prüfung
            </p>
            <h2
              id="bronnen-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Offizielle Quellen für diese Aktualisierung
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Die steuerlichen und rechtlichen Kernpunkte wurden anhand spanischer
              Behörden- und BOE-Quellen geprüft. Sätze und Bedingungen können sich später ändern; prüfen Sie
              sie daher am Tag der Unterzeichnung erneut.
            </p>
          </div>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.valencianTaxLaw}>BOE — Valencianisches Gesetz zu ITP und AJD</SourceLink>
              <p className="mt-1 text-sm text-slate-600">9%, 11%, ermäßigte ITP-Sätze sowie 0,1% und 1,4% AJD.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.referenceValue}>Agencia Tributaria Valenciana — Referenzwert</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Steuerliche Mindestbemessungsgrundlage und Vergleich mit dem Kaufpreis.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.vatNewBuild}>Agencia Tributaria — IVA oder ITP bei Immobilien</SourceLink>
              <p className="mt-1 text-sm text-slate-600">10% IVA für reguläre Neubauten und Abgrenzung der Erstlieferung.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.mortgageCosts}>Banco de España — Hypothekenkosten</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Verteilung von Bewertung, Notar, Grundbuch, Steuer und Gestoría.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.nonResidentWithholding}>Agencia Tributaria — 3%-Einbehalt bei nicht ansässigem Verkäufer</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Pflicht des Käufers und Modelo 211.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.energyCertificate}>BOE — Energiezertifizierung von Gebäuden</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Gültigkeit, Anzeigen, Kaufvertrag und Änderung zum 23. Juli 2026.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.ownersAssociation}>BOE — Ley de Propiedad Horizontal</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Schulden der Eigentümergemeinschaft, Bescheinigung und vorherige Zustimmung zur touristischen Vermietung.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.localPlusvalia}>BOE — lokales Steuergesetz, Plusvalía</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Verkäufer als Steuerpflichtiger und Käufer als Ersatzsteuerpflichtiger bei bestimmten nicht ansässigen Verkäufern.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.notaryTariff}>BOE — gesetzlicher Notartarif</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Grundlage für die notarielle Endrechnung.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.registryTariff}>BOE — gesetzlicher Grundbuchtarif</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Grundlage für die Rechnung des Grundbuchs.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.investorVisa}>Migrationsministerium — Abschaffung der Investorenroute</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Behandlung von Anträgen nach dem 3. April 2025 und Übergangssituationen.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.nonResidentForms2026}>BOE — Aktualisierung der Formulare 210 und 211 im Jahr 2026</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Technische Änderungen an Nichtresidentenformularen; der 3%-Einbehalt bleibt bestehen.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7 md:col-span-2">
              <SourceLink href={officialSources.foreignBuyerTaxStatus}>Reuters — Status der vorgeschlagenen 100%-Abgabe</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Aktueller Status des nicht verabschiedeten Vorschlags für bestimmte Nicht-EU-Käufer.</p>
            </li>
          </ul>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-700 to-slate-950 p-7 text-white sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-200">
                Persönliche Berechnung
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Wissen Sie vor der Unterschrift, was Sie tatsächlich zahlen
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                Teilen Sie uns den Immobilienpreis, die Art der Immobilie, Ihr Alter, die Nutzung als Haupt- oder Zweitwohnsitz
                und eventuelle Hypothekenpläne mit. Nordic Move Spain stellt die erwarteten Kaufnebenkosten
                übersichtlich gegenüber. Unsere direkte Betreuungsgebühr beträgt €0 und der technische
                Kaufbericht ist ohne Zusatzkosten enthalten.
              </p>
            </div>
            <Link
              href={internalLinks.contact}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-black text-slate-950 transition hover:bg-teal-100"
            >
              Kostenübersicht anfordern
              <ArrowIcon />
            </Link>
          </div>
        </section>

        <footer className="mt-10 border-t border-slate-200 pt-8 text-sm leading-6 text-slate-500">
          <p>
            <strong className="text-slate-700">Autor:</strong> Nordic Move Spain · Zuletzt inhaltlich
            geprüft am {updatedDisplay}.
          </p>
          <p className="mt-3">
            Diese Seite bietet allgemeine Informationen und eine transparente Budgetmethode. Sie stellt keine
            individuelle Rechts-, Steuer-, Technik-, Finanz- oder Einwanderungsberatung dar. Steuerlicher
            Stichtag, Bemessungsgrundlage, persönliche Voraussetzungen, Gemeinde, Immobilienunterlagen und getroffene
            Vereinbarungen bestimmen die endgültigen Kosten. Fordern Sie vor der Unterzeichnung eine fallspezifische
            Bestätigung durch unabhängige qualifizierte Fachleute an.
          </p>
        </footer>
      </article>
    </main>
  );
}