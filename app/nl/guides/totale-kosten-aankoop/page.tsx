import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Next.js App Router page — Nordic Move Spain
 *
 * Plaats dit bestand bijvoorbeeld in:
 * app/nl/kosten-huis-kopen-spanje/page.tsx
 *
 * De pagina gebruikt alleen Next.js + Tailwind CSS en heeft geen extra packages nodig.
 * Controleer de interne routes hieronder zodat ze overeenkomen met jullie website.
 */

const PAGE_PATH = "/nl/kosten-huis-kopen-spanje";

const internalLinks = {
  aanbod: "/nl/aanbod",
  koopgids: "/nl/huis-kopen-spanje",
  aankoopbegeleiding: "/nl/aankoopbegeleiding",
  hypotheek: "/nl/hypotheek-spanje",
  contact: "/nl/contact",
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
const updatedDisplay = "23 juli 2026";

export const metadata: Metadata = {
  title: "Kosten huis kopen Spanje 2026 | Valencia & Costa Blanca",
  description:
    "Alle aankoopkosten in Spanje voor 2026: ITP, IVA, AJD, notaris, register, advocaat en rekenvoorbeelden van €500.000 en €3 miljoen.",
  keywords: [
    "kosten huis kopen Spanje 2026",
    "aankoopkosten Spanje",
    "kosten koper Spanje",
    "ITP Valencia 2026",
    "huis kopen Costa Blanca kosten",
    "nieuwbouw Spanje IVA AJD",
    "notariskosten Spanje",
    "advocaat huis kopen Spanje",
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
    locale: "nl_NL",
    siteName: "Nordic Move Spain",
    title: "Wat kost een huis kopen in Spanje in 2026?",
    description:
      "Compleet kostenoverzicht voor bestaande bouw en nieuwbouw in de Comunitat Valenciana, inclusief voorbeelden van €500.000 en €3 miljoen.",
    publishedTime: updatedIso,
    modifiedTime: updatedIso,
    authors: ["Nordic Move Spain"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kosten huis kopen Spanje 2026",
    description:
      "ITP 9% of 11%, IVA, AJD, notaris, advocaat en complete rekenvoorbeelden.",
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
  title: "Bestaande woning van €500.000",
  subtitle: "Standaardtarief Comunitat Valenciana, zonder hypotheek",
  purchasePrice: 500_000,
  rows: [
    {
      label: "ITP — 9%",
      amount: 45_000,
      explanation: "Tarief voor een bestaande woning met een fiscale waarde tot en met €1 miljoen.",
      kind: "tax",
    },
    {
      label: "Advocaat — rekenaanname 1% + 21% IVA",
      amount: 6_050,
      explanation: "Geen wettelijk tarief. Vraag altijd vooraf een vaste of gespecificeerde offerte.",
      kind: "external",
    },
    {
      label: "Notaris — planningsbedrag",
      amount: 1_100,
      explanation: "De werkelijke rekening volgt het wettelijke notariële tarief en de complexiteit van de akte.",
      kind: "external",
    },
    {
      label: "Eigendomregister — planningsbedrag",
      amount: 700,
      explanation: "De werkelijke rekening volgt het wettelijke registratietarief.",
      kind: "external",
    },
    {
      label: "Gestoría — rekenaanname €600 + IVA",
      amount: 726,
      explanation: "Alleen wanneer een externe gestoría wordt gebruikt voor de aankoopadministratie.",
      kind: "external",
    },
    {
      label: "Aankoopbegeleidingsfee Nordic Move Spain",
      amount: 0,
      explanation: "Geen directe begeleidingsfee voor de koper binnen onze aankoopdienst.",
      kind: "free",
    },
    {
      label: "Technisch aankooprapport Nordic Move Spain",
      amount: 0,
      explanation: "Inbegrepen zonder extra kosten; niet hetzelfde als een banktaxatie of energiecertificaat.",
      kind: "free",
    },
  ],
  totalExtra: 53_576,
  totalIncludingPurchase: 553_576,
};

const used3m: CostExample = {
  id: "bestaand-3000000",
  title: "Bestaande woning van €3.000.000",
  subtitle: "Waarde boven €1 miljoen, zonder hypotheek",
  purchasePrice: 3_000_000,
  rows: [
    {
      label: "ITP — 11%",
      amount: 330_000,
      explanation: "Bij een waarde boven €1 miljoen geldt 11% over de volledige belastbare waarde.",
      kind: "tax",
    },
    {
      label: "Advocaat — rekenaanname 1% + 21% IVA",
      amount: 36_300,
      explanation: "Bij hogere koopsommen wordt vaak een vaste of aflopende prijs afgesproken; dit voorbeeld kiest bewust een transparante 1%-aanname.",
      kind: "external",
    },
    {
      label: "Notaris — planningsbedrag",
      amount: 3_000,
      explanation: "Indicatief; onder meer afhankelijk van pagina’s, kopieën, volmachten en het aantal registerobjecten.",
      kind: "external",
    },
    {
      label: "Eigendomregister — planningsbedrag",
      amount: 1_800,
      explanation: "Indicatief en afhankelijk van de ingeschreven handelingen en objecten.",
      kind: "external",
    },
    {
      label: "Gestoría — rekenaanname €600 + IVA",
      amount: 726,
      explanation: "Alleen wanneer een externe gestoría wordt ingeschakeld.",
      kind: "external",
    },
    {
      label: "Aankoopbegeleidingsfee Nordic Move Spain",
      amount: 0,
      explanation: "Geen directe begeleidingsfee voor de koper binnen onze aankoopdienst.",
      kind: "free",
    },
    {
      label: "Technisch aankooprapport Nordic Move Spain",
      amount: 0,
      explanation: "Inbegrepen zonder extra kosten; aanvullende specialistische onderzoeken kunnen apart nodig zijn.",
      kind: "free",
    },
  ],
  totalExtra: 371_826,
  totalIncludingPurchase: 3_371_826,
};

const new500: CostExample = {
  id: "nieuwbouw-500000",
  title: "Nieuwbouwwoning van €500.000",
  subtitle: "Tweede woning of niet-kwalificerende hoofdwoning, zonder hypotheek",
  purchasePrice: 500_000,
  rows: [
    {
      label: "IVA — 10%",
      amount: 50_000,
      explanation: "Algemeen btw-tarief voor een eerste levering van een woning door de projectontwikkelaar.",
      kind: "tax",
    },
    {
      label: "AJD — 1,4%",
      amount: 7_000,
      explanation: "Algemeen Valenciaans AJD-tarief sinds 1 juni 2026 wanneer het 0,1%-tarief voor de hoofdwoning niet geldt.",
      kind: "tax",
    },
    {
      label: "Advocaat — rekenaanname 1% + 21% IVA",
      amount: 6_050,
      explanation: "Juridische controle van onder meer ontwikkelaar, vergunningen, garanties en koopcontract.",
      kind: "external",
    },
    {
      label: "Notaris — planningsbedrag",
      amount: 1_100,
      explanation: "Indicatief volgens het wettelijke tarief en de uiteindelijke akte.",
      kind: "external",
    },
    {
      label: "Eigendomregister — planningsbedrag",
      amount: 700,
      explanation: "Indicatief volgens het wettelijke tarief.",
      kind: "external",
    },
    {
      label: "Gestoría — rekenaanname €600 + IVA",
      amount: 726,
      explanation: "Optioneel, afhankelijk van de gekozen afhandeling.",
      kind: "external",
    },
    {
      label: "Aankoopbegeleidingsfee Nordic Move Spain",
      amount: 0,
      explanation: "Geen directe begeleidingsfee voor de koper binnen onze aankoopdienst.",
      kind: "free",
    },
    {
      label: "Technisch aankooprapport Nordic Move Spain",
      amount: 0,
      explanation: "Inbegrepen zonder extra kosten; laat bij oplevering ook gebreken en afwerking vastleggen.",
      kind: "free",
    },
  ],
  totalExtra: 65_576,
  totalIncludingPurchase: 565_576,
};

const new3m: CostExample = {
  id: "nieuwbouw-3000000",
  title: "Nieuwbouwwoning van €3.000.000",
  subtitle: "Tweede woning of niet-kwalificerende hoofdwoning, zonder hypotheek",
  purchasePrice: 3_000_000,
  rows: [
    {
      label: "IVA — 10%",
      amount: 300_000,
      explanation: "Algemeen btw-tarief voor de eerste levering door de ontwikkelaar.",
      kind: "tax",
    },
    {
      label: "AJD — 1,4%",
      amount: 42_000,
      explanation: "Algemeen AJD-tarief in de Comunitat Valenciana vanaf 1 juni 2026.",
      kind: "tax",
    },
    {
      label: "Advocaat — rekenaanname 1% + 21% IVA",
      amount: 36_300,
      explanation: "Geen wettelijk tarief; laat bij luxe vastgoed de opdracht, aansprakelijkheid en specialistische controles uitschrijven.",
      kind: "external",
    },
    {
      label: "Notaris — planningsbedrag",
      amount: 3_000,
      explanation: "Indicatief; meerdere percelen, garages, bijgebouwen of volmachten kunnen de rekening beïnvloeden.",
      kind: "external",
    },
    {
      label: "Eigendomregister — planningsbedrag",
      amount: 1_800,
      explanation: "Indicatief en afhankelijk van de te registreren objecten en rechten.",
      kind: "external",
    },
    {
      label: "Gestoría — rekenaanname €600 + IVA",
      amount: 726,
      explanation: "Optioneel, afhankelijk van de gekozen afhandeling.",
      kind: "external",
    },
    {
      label: "Aankoopbegeleidingsfee Nordic Move Spain",
      amount: 0,
      explanation: "Geen directe begeleidingsfee voor de koper binnen onze aankoopdienst.",
      kind: "free",
    },
    {
      label: "Technisch aankooprapport Nordic Move Spain",
      amount: 0,
      explanation: "Inbegrepen zonder extra kosten; specialistische constructie-, zwembad- of installatietests kunnen aanvullend zijn.",
      kind: "free",
    },
  ],
  totalExtra: 383_826,
  totalIncludingPurchase: 3_383_826,
};

const examples = [used500, used3m, new500, new3m];

const faqItems = [
  {
    question: "Hoeveel kosten moet ik boven op de koopsom rekenen in Spanje?",
    answer:
      "In de Comunitat Valenciana bestaat het grootste deel uit belasting. Bij bestaande bouw is dat sinds 1 juni 2026 meestal 9% ITP en 11% wanneer de belastbare waarde hoger is dan €1 miljoen. Bij reguliere nieuwbouw is het meestal 10% IVA plus 1,4% AJD, of mogelijk 0,1% AJD wanneer de aankoop juridisch als hoofdwoning kwalificeert. Tel daar notaris, register, advocaat en eventuele financieringskosten bij op.",
  },
  {
    question: "Betaal ik bij Nordic Move Spain een aankoopfee?",
    answer:
      "Binnen de aankoopdienst van Nordic Move Spain betaalt de koper geen directe aankoopbegeleidingsfee. Ook het technische aankooprapport is inbegrepen zonder extra kosten. Belastingen en kosten van onafhankelijke externe partijen, zoals advocaat, notaris, eigendomregister, taxateur en eventueel gestoría, blijven wel voor rekening van de koper.",
  },
  {
    question: "Is het technische rapport hetzelfde als een banktaxatie?",
    answer:
      "Nee. Het technische aankooprapport beoordeelt de woning technisch. Een banktaxatie bepaalt een financieringswaarde voor de hypotheek. Het energiecertificaat is opnieuw een ander, wettelijk voorgeschreven document. Soms zijn daarnaast specialistische onderzoeken nodig.",
  },
  {
    question: "Betaal ik ITP én IVA bij dezelfde aankoop?",
    answer:
      "Normaal niet. Een gebruikte woning valt doorgaans onder ITP. Een eerste levering van nieuwbouw door de ontwikkelaar valt doorgaans onder IVA en daarnaast AJD.",
  },
  {
    question: "Wordt ITP altijd over de koopprijs berekend?",
    answer:
      "Niet noodzakelijk. Bij vastgoed geldt in beginsel de kadastrale referentiewaarde als minimale fiscale grondslag. Is de aangegeven waarde, prijs of tegenprestatie hoger, dan wordt de hoogste waarde gebruikt. Controleer dit vóór een bindend reserverings- of arrascontract.",
  },
  {
    question: "Krijgen jonge kopers korting op ITP in Valencia?",
    answer:
      "Onder voorwaarden kan een koper jonger dan 35 jaar voor de eerste hoofdwoning 6% ITP betalen wanneer de waarde maximaal €180.000 is, of 8% wanneer de waarde hoger is. Er gelden onder meer inkomensgrenzen en voorwaarden rond het aandeel dat de jongere koopt.",
  },
  {
    question: "Is de 3%-inhouding bij een niet-residente verkoper een extra aankoopkost?",
    answer:
      "Nee. De koper houdt 3% van de overeengekomen tegenprestatie in en draagt dit met Modelo 211 af als vooruitbetaling op de belasting van de niet-residente verkoper. Het bedrag wordt dus normaal van de betaling aan de verkoper afgehaald.",
  },
  {
    question: "Wie betaalt de kosten van een Spaanse hypotheekakte?",
    answer:
      "Volgens de verdeling sinds de Spaanse hypotheekwet betaalt de koper doorgaans de banktaxatie. De bank draagt voor de hypotheekakte de kosten van notaris, register, belasting en gestoría. Dit staat los van kosten van de koopakte zelf en van een eventuele openingscommissie.",
  },
  {
    question: "Kan een woning met energielabel F of G in 2026 worden verkocht?",
    answer:
      "De actuele nationale regeling vereist een geldig, geregistreerd energiecertificaat, opname van de rating in advertenties en toevoeging van het certificaat en label aan de koopovereenkomst. Deze pagina stelt geen algemeen nationaal verkoopverbod voor een laag label in 2026 vast. Controleer wel toekomstige renovatieplannen, VvE-besluiten en lokale regels.",
  },
  {
    question: "Is de Spaanse Golden Visa nog beschikbaar bij een aankoop van €3 miljoen?",
    answer:
      "Nieuwe vastgoedgerelateerde investeerdersaanvragen na 3 april 2025 worden niet meer toegelaten. Een dure woningaankoop levert dus niet automatisch een nieuwe Golden Visa op. Bestaande dossiers en verlengingen kunnen overgangsregels hebben.",
  },
] as const;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Totale kosten van een huis kopen in Spanje in 2026",
  description:
    "Compleet overzicht van de aankoopkosten van bestaande bouw en nieuwbouw in de Comunitat Valenciana, met rekenvoorbeelden van €500.000 en €3 miljoen.",
  datePublished: updatedIso,
  dateModified: updatedIso,
  inLanguage: "nl-NL",
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
    "Kosten huis kopen in Spanje",
    "ITP Comunitat Valenciana",
    "IVA en AJD bij nieuwbouw",
    "Aankoopkosten Costa Blanca",
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
      item: "/nl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Huis kopen in Spanje",
      item: internalLinks.koopgids,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Aankoopkosten Spanje 2026",
      item: PAGE_PATH,
    },
  ],
};

function formatEuro(amount: number) {
  return new Intl.NumberFormat("nl-NL", {
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
          Rekenvoorbeeld 2026
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
            Geschatte aankoopkosten voor {example.title.toLowerCase()}
          </caption>
          <thead className="bg-white text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th scope="col" className="px-5 py-4 font-bold sm:px-7">
                Kostenpost
              </th>
              <th scope="col" className="px-5 py-4 text-right font-bold">
                Bedrag
              </th>
              <th scope="col" className="px-5 py-4 font-bold sm:px-7">
                Toelichting
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
                        Gratis
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
                Totale bijkomende kosten in dit voorbeeld
              </th>
              <td className="px-5 py-4 text-right text-lg font-black">
                {formatEuro(example.totalExtra)}
              </td>
              <td className="px-5 py-4 text-slate-300 sm:px-7">
                {percentage.toLocaleString("nl-NL", {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}
                % van de koopsom
              </td>
            </tr>
            <tr className="border-t border-white/15">
              <th scope="row" className="px-5 py-4 font-bold sm:px-7">
                Totaal inclusief koopsom
              </th>
              <td className="px-5 py-4 text-right text-xl font-black text-emerald-300">
                {formatEuro(example.totalIncludingPurchase)}
              </td>
              <td className="px-5 py-4 text-slate-300 sm:px-7">
                Exclusief hypotheek, valutakosten en objectafhankelijke specialistische onderzoeken
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
          <nav aria-label="Kruimelpad" className="text-sm text-slate-300">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/nl" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={internalLinks.koopgids} className="hover:text-white">
                  Huis kopen in Spanje
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Aankoopkosten 2026
              </li>
            </ol>
          </nav>

          <div className="mt-10 max-w-4xl">
            <p className="inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-bold text-teal-200">
              Gecontroleerd en bijgewerkt op {updatedDisplay}
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Totale kosten van een huis kopen in Spanje in 2026
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Een compleet en praktisch overzicht voor de Comunitat Valenciana en de Costa Blanca:
              bestaande bouw, nieuwbouw, belastingen, advocaat, notaris, register, hypotheek,
              energieregels en rekenvoorbeelden voor een woning van €500.000 en €3 miljoen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold">
              <span className="rounded-full bg-white/10 px-4 py-2">Auteur: Nordic Move Spain</span>
              <span className="rounded-full bg-white/10 px-4 py-2">Leestijd: circa 14 minuten</span>
              <span className="rounded-full bg-emerald-400/15 px-4 py-2 text-emerald-200">
                Onze begeleidingsfee: €0
              </span>
              <span className="rounded-full bg-emerald-400/15 px-4 py-2 text-emerald-200">
                Technisch rapport: €0
              </span>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#rekenvoorbeelden"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-5 py-3 font-black text-slate-950 transition hover:bg-teal-300"
              >
                Bekijk de rekenvoorbeelden
                <ArrowIcon />
              </a>
              <Link
                href={internalLinks.contact}
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-5 py-3 font-black text-white transition hover:border-white hover:bg-white/10"
              >
                Vraag een persoonlijke kostenraming
              </Link>
            </div>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <section aria-labelledby="snel-antwoord" className="scroll-mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Snel antwoord
            </p>
            <h2
              id="snel-antwoord"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Hoeveel moet je boven op de koopsom reserveren?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Voor een aankoop in de Comunitat Valenciana wordt de totaalrekening vooral bepaald
              door het type woning. Een gebruikte woning valt normaal onder ITP. Nieuwbouw van de
              projectontwikkelaar valt doorgaans onder 10% IVA en daarnaast AJD. Professionele en
              administratieve kosten komen daar nog bij.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-bold text-slate-500">Bestaande bouw ≤ €1 miljoen</p>
              <p className="mt-2 text-4xl font-black text-slate-950">9% ITP</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Plus notaris, register, advocaat en eventuele financierings- of vertaalkosten.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-bold text-slate-500">Bestaande bouw &gt; €1 miljoen</p>
              <p className="mt-2 text-4xl font-black text-slate-950">11% ITP</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Het 11%-tarief geldt over de volledige belastbare waarde, niet alleen over het meerdere.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-bold text-slate-500">Reguliere nieuwbouw</p>
              <p className="mt-2 text-4xl font-black text-slate-950">10% + 1,4%</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                10% IVA plus normaal 1,4% AJD; voor een kwalificerende hoofdwoning kan AJD 0,1% zijn.
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="text-sm font-bold text-emerald-800">Nordic Move Spain</p>
              <p className="mt-2 text-4xl font-black text-emerald-900">€0 + €0</p>
              <p className="mt-3 text-sm leading-6 text-emerald-900/80">
                €0 directe aankoopbegeleidingsfee en €0 voor het inbegrepen technische aankooprapport.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <h3 className="text-xl font-black text-amber-950">Belangrijk: percentages zijn niet het hele verhaal</h3>
            <p className="mt-3 leading-7 text-amber-950/85">
              De fiscale grondslag kan hoger zijn dan de koopprijs. Voor ITP en bepaalde AJD-situaties
              is de kadastrale referentiewaarde in beginsel de minimale waarde. Is de aangegeven
              koopprijs of tegenprestatie hoger, dan geldt de hoogste waarde. Controleer de
              referentiewaarde daarom vóór je een bindend contract tekent.
            </p>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="wijzigingen-2026" aria-labelledby="wijzigingen-title" className="scroll-mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Nieuwe regels
            </p>
            <h2
              id="wijzigingen-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Wat veranderde in 2026?
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-sm font-black uppercase tracking-wider text-teal-700">Vanaf 1 juni 2026</p>
              <h3 className="mt-2 text-xl font-black text-slate-950">Algemeen ITP naar 9%</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Het algemene Valenciaanse ITP-tarief voor vastgoed is 9%. Bij een waarde boven €1
                miljoen blijft het 11%-tarief van toepassing. Voor transacties met een eerdere
                belastbare datum kunnen oudere tarieven gelden.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-sm font-black uppercase tracking-wider text-teal-700">Vanaf 1 juni 2026</p>
              <h3 className="mt-2 text-xl font-black text-slate-950">Algemeen AJD naar 1,4%</h3>
              <p className="mt-3 leading-7 text-slate-600">
                In de overige gevallen is het Valenciaanse AJD-tarief 1,4%. Voor de eerste kopie van
                een akte waarmee een kwalificerende hoofdwoning wordt gekocht, kan 0,1% gelden.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="text-sm font-black uppercase tracking-wider text-teal-700">Vanaf 23 juli 2026</p>
              <h3 className="mt-2 text-xl font-black text-slate-950">Nieuwe energieregistratie</h3>
              <p className="mt-3 leading-7 text-slate-600">
                De nationale regeling voegt een gecentraliseerd register van bevoegde
                energiecertificeringsdeskundigen toe. Dit is geen nieuwe aankoopbelasting, maar wel
                relevant bij het controleren van een geldig certificaat.
              </p>
            </div>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="bestaande-bouw" aria-labelledby="bestaande-bouw-title" className="scroll-mt-24">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
                Bestaande woning
              </p>
              <h2
                id="bestaande-bouw-title"
                className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
              >
                ITP bij bestaande bouw in de Comunitat Valenciana
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Koop je een gebruikte woning van een particulier of een tweede of latere levering,
                dan betaal je normaal ITP in plaats van IVA. Sinds 1 juni 2026 is het algemene tarief
                9%. Is de belastbare waarde hoger dan €1 miljoen, dan geldt 11% over de volledige
                waarde.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">ITP-tarieven in de Comunitat Valenciana in 2026</caption>
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th scope="col" className="px-5 py-4 font-bold">Situatie</th>
                      <th scope="col" className="px-5 py-4 text-right font-bold">ITP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-5 py-4">Algemeen, waarde tot en met €1 miljoen</td>
                      <td className="px-5 py-4 text-right text-lg font-black">9%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4">Algemeen, waarde boven €1 miljoen</td>
                      <td className="px-5 py-4 text-right text-lg font-black">11%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4">Jonger dan 35, eerste hoofdwoning ≤ €180.000, voorwaarden voldaan</td>
                      <td className="px-5 py-4 text-right text-lg font-black">6%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4">Jonger dan 35, eerste hoofdwoning &gt; €180.000, voorwaarden voldaan</td>
                      <td className="px-5 py-4 text-right text-lg font-black">8%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4">Bepaalde beschermde/sociale situaties ≤ €180.000</td>
                      <td className="px-5 py-4 text-right text-lg font-black">3%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4">Bepaalde beschermde/sociale situaties &gt; €180.000</td>
                      <td className="px-5 py-4 text-right text-lg font-black">4%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                De 3%- en 4%-categorieën kunnen onder meer gelden voor bepaalde VPO-woningen,
                kwalificerende grote of eenoudergezinnen, bepaalde graden van handicap en slachtoffers
                van gendergeweld. Inkomen, hoofdverblijf, eigendomsdeel, woningwaarde en bewijsstukken
                moeten per dossier worden gecontroleerd.
              </p>
            </div>

            <aside className="rounded-3xl border border-teal-200 bg-teal-50 p-6 sm:p-8">
              <h3 className="text-xl font-black text-teal-950">Korting voor kopers jonger dan 35</h3>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-teal-950/85">
                <li className="flex gap-3">
                  <span className="text-teal-700"><CheckIcon /></span>
                  Het moet gaan om de eerste hoofdwoning van de jonge koper.
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-700"><CheckIcon /></span>
                  De korting geldt alleen voor het aandeel dat de kwalificerende koper zelf verkrijgt.
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-700"><CheckIcon /></span>
                  De som van de algemene en spaar-belastbare basis mag volgens de huidige verwijzing
                  maximaal €30.000 individueel of €47.000 gezamenlijk zijn.
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-700"><CheckIcon /></span>
                  Bij het later verliezen van de voorwaarden kan nabetaling met rente volgen.
                </li>
              </ul>
              <p className="mt-6 rounded-2xl bg-white p-4 text-sm leading-6 text-slate-700">
                Voorbeeld: bij een bestaande woning van €500.000 daalt ITP van €45.000 naar €40.000
                wanneer het 8%-jongeren­tarief volledig toepasbaar is. Laat dit vóór ondertekening
                schriftelijk bevestigen door de advocaat of fiscalist.
              </p>
            </aside>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="nieuwbouw" aria-labelledby="nieuwbouw-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Nieuwbouw
            </p>
            <h2
              id="nieuwbouw-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              IVA en AJD bij een nieuwe woning
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Bij een eerste levering van een woning door de projectontwikkelaar betaal je normaal 10%
              IVA. Daarnaast is de notariële koopakte doorgaans belast met AJD. In de Comunitat
              Valenciana is het algemene AJD-tarief sinds 1 juni 2026 1,4%. Voor een akte die de
              aankoop van een fiscaal kwalificerende hoofdwoning vastlegt, vermeldt de wet 0,1%.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-950 p-7 text-white">
              <p className="text-sm font-bold text-slate-300">Reguliere nieuwbouw</p>
              <p className="mt-2 text-5xl font-black text-teal-300">10%</p>
              <p className="mt-3 leading-7 text-slate-300">IVA over de belastbare verkoopprijs. Voor bepaalde VPO-woningen van speciaal regime of publieke promotie kan 4% gelden.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-7">
              <p className="text-sm font-bold text-slate-500">AJD algemeen</p>
              <p className="mt-2 text-5xl font-black text-slate-950">1,4%</p>
              <p className="mt-3 leading-7 text-slate-600">Normaal voor een tweede woning of wanneer het hoofdwoningtarief niet geldt.</p>
            </div>
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7">
              <p className="text-sm font-bold text-emerald-800">AJD hoofdwoning</p>
              <p className="mt-2 text-5xl font-black text-emerald-900">0,1%</p>
              <p className="mt-3 leading-7 text-emerald-900/80">Alleen wanneer de aankoop juridisch aan het begrip hoofdwoning voldoet.</p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 p-6 sm:p-8">
            <h3 className="text-xl font-black text-slate-950">Besparing bij het 0,1%-AJD-tarief</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-bold text-slate-500">Nieuwbouw €500.000</p>
                <p className="mt-1 text-2xl font-black text-slate-950">€6.500 minder AJD</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">€500 in plaats van €7.000, als alle hoofdwoningvoorwaarden gelden.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-bold text-slate-500">Nieuwbouw €3.000.000</p>
                <p className="mt-1 text-2xl font-black text-slate-950">€39.000 minder AJD</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">€3.000 in plaats van €42.000, als alle hoofdwoningvoorwaarden gelden.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="alle-kosten" aria-labelledby="alle-kosten-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Complete kostenlijst
            </p>
            <h2
              id="alle-kosten-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Welke aankoopkosten komen er nog bij?
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "1. Overdrachtsbelasting of IVA + AJD",
                text: "De grootste kostenpost. Bestaande bouw: normaal ITP. Eerste levering van nieuwbouw: normaal IVA plus AJD. Je betaalt in beginsel niet beide systemen over dezelfde levering.",
              },
              {
                title: "2. Onafhankelijke advocaat",
                text: "Controleert eigendom, lasten, beslag, schulden, vergunningen, stedenbouwkundige status, contracten, verkoper, VvE-documenten en fiscale afhandeling. Er bestaat geen wettelijk vast honorarium.",
              },
              {
                title: "3. Notaris",
                text: "De koopakte wordt bij de notaris ondertekend. Notariële honoraria zijn gereguleerd, maar de eindnota varieert door waarde, lengte, kopieën, volmachten en complexiteit.",
              },
              {
                title: "4. Registro de la Propiedad",
                text: "Na de koop wordt het eigendom ingeschreven. Ook deze kosten volgen een gereguleerd tarief en zijn afhankelijk van de feitelijke inschrijving.",
              },
              {
                title: "5. Gestoría",
                text: "Kan belastingaangiften, betalingen en inschrijving coördineren. Bij een hypotheek gebruikt de bank vaak een gestoría. Bij een aankoop zonder lening is dit afhankelijk van de gekozen werkwijze.",
              },
              {
                title: "6. Hypotheektaxatie",
                text: "Bij financiering betaalt de koper doorgaans de onafhankelijke banktaxatie. Dit is een ander document dan het gratis technische aankooprapport.",
              },
              {
                title: "7. Vertaling, tolk, volmacht en apostille",
                text: "Mogelijk nodig wanneer je niet persoonlijk tekent of de Spaanse akte niet voldoende begrijpt. Bedragen verschillen sterk per taal, omvang en land van afgifte.",
              },
              {
                title: "8. Bank- en valutakosten",
                text: "Internationale betalingen, wisselkoersmarges, bankcheques en betalingsgaranties kunnen geld kosten. Bij grote bedragen is een kleine koersmarge financieel relevant.",
              },
              {
                title: "9. Aanvullende technische onderzoeken",
                text: "Een gratis algemeen technisch rapport vervangt niet altijd een constructieberekening, zwembadtest, bodemonderzoek, rioleringsinspectie, asbestonderzoek of specialistische installatiekeuring.",
              },
              {
                title: "10. Verzekering en aansluitingen",
                text: "Opstalverzekering kan verplicht zijn bij een hypotheek. Houd daarnaast rekening met eventuele contractwijzigingen, waarborgen of aansluitkosten voor nutsvoorzieningen.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 p-6 sm:p-7">
                <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
            <h3 className="text-2xl font-black text-emerald-950">Wat is bij Nordic Move Spain gratis?</h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">Aankoopbegeleiding</p>
                <p className="mt-2 text-3xl font-black text-emerald-950">€0</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Geen directe begeleidingsfee aan de koper binnen onze aankoopdienst.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">Technisch aankooprapport</p>
                <p className="mt-2 text-3xl font-black text-emerald-950">€0</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Inbegrepen zonder extra kosten. Banktaxatie, energiecertificaat en specialistische
                  vervolgonderzoeken zijn afzonderlijke zaken.
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-emerald-950/80">
              Externe kosten blijven zichtbaar en apart: belastingen, advocaat, notaris,
              eigendomregister, eventuele gestoría, bank, vertaler en specialistische onderzoeken.
            </p>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="rekenvoorbeelden" aria-labelledby="rekenvoorbeelden-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Transparante berekening
            </p>
            <h2
              id="rekenvoorbeelden-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Rekenvoorbeelden: €500.000 en €3.000.000
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              De onderstaande berekeningen gebruiken vaste aannames zodat de uitkomst controleerbaar
              blijft. Het zijn planningsbedragen, geen offerte. Voor de advocaat rekenen we 1% van de
              koopsom plus 21% IVA. Voor notaris, register en gestoría gebruiken we expliciet genoemde
              begrotingsbedragen. De uiteindelijke facturen kunnen hoger of lager zijn.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {examples.map((example) => (
              <CostTable key={example.id} example={example} />
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-slate-300 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-xl font-black text-slate-950">Samenvatting van de vier voorbeelden</h3>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-300 text-xs uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-3 pr-5 font-bold">Woning</th>
                    <th scope="col" className="px-5 py-3 text-right font-bold">Bijkomende kosten</th>
                    <th scope="col" className="px-5 py-3 text-right font-bold">Totaal</th>
                    <th scope="col" className="pl-5 py-3 text-right font-bold">Percentage</th>
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
                        {((example.totalExtra / example.purchasePrice) * 100).toLocaleString("nl-NL", {
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
              Veelgemaakte fouten
            </p>
            <h2
              id="geen-extra-kosten-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Bedragen die vaak ten onrechte als extra aankoopkost worden gezien
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
              <h3 className="text-xl font-black text-slate-950">Arras of reserveringsbetaling</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Een arrasbetaling is normaal een vooruitbetaling op de koopsom en dus geen extra
                aankoopkost. Het contract bepaalt wel wat er gebeurt bij annulering of wanprestatie.
                Laat het document vóór betaling juridisch controleren.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
              <h3 className="text-xl font-black text-slate-950">3%-inhouding bij een niet-residente verkoper</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Is de verkoper niet-resident, dan moet de koper 3% van de overeengekomen tegenprestatie
                inhouden en via Modelo 211 afdragen. Dit is een vooruitbetaling op de belasting van de
                verkoper en wordt normaal van het aan de verkoper uit te betalen bedrag afgetrokken.
                Het is dus geen extra 3% boven op de koopsom. De formulieren 210 en 211 zijn in juni
                2026 technisch bijgewerkt; het wettelijke inhoudingspercentage blijft 3%.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
              <h3 className="text-xl font-black text-slate-950">Plusvalía municipal</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Bij een normale verkoop is de verkoper doorgaans belastingplichtig voor de gemeentelijke
                grondwaardebelasting. Is de verkoper een niet-residente natuurlijke persoon, dan kan de
                koper wettelijk als vervangend belastingplichtige worden aangesproken. Regel daarom een
                inhouding, bewijs van betaling of andere bescherming via de advocaat.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
              <h3 className="text-xl font-black text-slate-950">Makelaarscourtage</h3>
              <p className="mt-3 leading-7 text-slate-600">
                In veel Spaanse transacties betaalt de verkoper de verkoopmakelaar, maar dat is geen
                universele wettelijke regel. Lees het reserveringsdocument en de bemiddelingsovereenkomst:
                betaal nooit een niet-afgesproken koperscommissie.
              </p>
            </div>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="hypotheek" aria-labelledby="hypotheek-title" className="scroll-mt-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
                Financiering
              </p>
              <h2
                id="hypotheek-title"
                className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
              >
                Welke hypotheekkosten betaalt de koper?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Voor de hypotheekakte is de verdeling anders dan voor de koopakte. Volgens de huidige
                Spaanse regels betaalt de koper doorgaans de banktaxatie. De bank draagt de kosten van
                notaris, register, belasting en gestoría die bij het formaliseren van de hypotheek horen.
              </p>

              <ul className="mt-7 space-y-4 leading-7 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-teal-700"><CheckIcon /></span>
                  <span><strong>Koper:</strong> taxatie van de woning, plus eventuele contractueel afgesproken openingscommissie.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-700"><CheckIcon /></span>
                  <span><strong>Bank:</strong> notaris, register, belasting en gestoría van de hypotheekakte.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-700"><CheckIcon /></span>
                  <span><strong>Niet inbegrepen:</strong> kosten van de koopakte, advocaat, ITP/IVA/AJD van de aankoop en eventuele verzekeringen.</span>
                </li>
              </ul>
            </div>

            <aside className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
              <h3 className="text-2xl font-black">Technisch rapport ≠ taxatie</h3>
              <div className="mt-6 space-y-5 text-sm leading-6 text-slate-300">
                <div>
                  <p className="font-black text-white">Technisch aankooprapport</p>
                  <p className="mt-1">Beoordeelt zichtbare technische staat en aandachtspunten. Bij Nordic Move Spain: €0 binnen de aankoopdienst.</p>
                </div>
                <div>
                  <p className="font-black text-white">Banktaxatie</p>
                  <p className="mt-1">Bepaalt de financieringswaarde voor de bank. Wordt normaal door de koper betaald.</p>
                </div>
                <div>
                  <p className="font-black text-white">Energiecertificaat</p>
                  <p className="mt-1">Wettelijk document met energielabel, dat de verkoper bij de verkoop moet leveren.</p>
                </div>
              </div>
              <Link
                href={internalLinks.hypotheek}
                className="mt-8 inline-flex items-center gap-2 font-black text-teal-300 hover:text-teal-200"
              >
                Lees meer over een hypotheek in Spanje
                <ArrowIcon />
              </Link>
            </aside>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="energie" aria-labelledby="energie-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Energie en techniek
            </p>
            <h2
              id="energie-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Energiecertificaat, lage labels en nieuwe regels in 2026
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Bij verkoop van een bestaande woning moet een kopie van het geregistreerde
              energiecertificaat en het energielabel aan de koopovereenkomst worden toegevoegd. De
              energieclassificatie moet ook in verkoopadvertenties staan. Een certificaat is maximaal
              tien jaar geldig; bij label G maximaal vijf jaar.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 p-7">
              <h3 className="text-xl font-black text-slate-950">Wat de koper moet controleren</h3>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
                <li className="flex gap-3"><span className="text-teal-700"><CheckIcon /></span>Is het certificaat geregistreerd en nog geldig?</li>
                <li className="flex gap-3"><span className="text-teal-700"><CheckIcon /></span>Komt het adres en de kadastrale identificatie overeen met de woning?</li>
                <li className="flex gap-3"><span className="text-teal-700"><CheckIcon /></span>Welke verbeteringen adviseert het rapport en wat kosten die ongeveer?</li>
                <li className="flex gap-3"><span className="text-teal-700"><CheckIcon /></span>Zijn er VvE-besluiten of buitengewone bijdragen voor gevel, dak, lift of energiewerk?</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
              <h3 className="text-xl font-black text-amber-950">Geen verzonnen “labelverbod”</h3>
              <p className="mt-4 leading-7 text-amber-950/85">
                De geraadpleegde nationale regels voor 2026 verplichten het certificaat, het label in
                advertenties en overdracht van de documenten. Wij vermelden daarom geen algemeen
                nationaal verbod om een woning met label E, F of G te verkopen. Europese
                renovatiedoelen, toekomstige implementatie en lokale voorschriften moeten afzonderlijk
                worden gevolgd.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-teal-200 bg-teal-50 p-6 sm:p-8">
            <h3 className="text-xl font-black text-teal-950">Nieuw per 23 juli 2026</h3>
            <p className="mt-3 leading-7 text-teal-950/85">
              De bijgewerkte nationale energieregeling creëert een gecentraliseerd register van
              bevoegde technici. Dat helpt bevoegde overheden bij controle. Voor de koper blijft de
              praktische opdracht hetzelfde: controleer of het certificaat geldig, geregistreerd en
              opgesteld door een bevoegde deskundige is.
            </p>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="juridische-controles" aria-labelledby="juridische-controles-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Voorkom onverwachte rekeningen
            </p>
            <h2
              id="juridische-controles-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Controles die vóór de koop moeten gebeuren
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-lg font-black text-slate-950">VvE-schulden en extra bijdragen</h3>
              <p className="mt-3 leading-7 text-slate-600">
                De woning kan wettelijk aansprakelijk blijven voor achterstallige gemeenschapskosten
                uit het lopende jaar en de drie voorafgaande kalenderjaren. Laat de verkoper het
                schuldencertificaat leveren en doe geen afstand van dit document zonder juridisch advies.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-lg font-black text-slate-950">Vergunningen en legaliteit</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Vergelijk register, kadaster en werkelijkheid. Controleer aanbouwen, zwembad,
                bijgebouwen, bewonings- of gebruiksdocumenten, openstaande overtredingen en
                stedenbouwkundige plannen.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-lg font-black text-slate-950">Toeristische verhuur</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Voor nieuwe toeristische verhuuractiviteit in een appartementencomplex is sinds 3 april
                2025 voorafgaande uitdrukkelijke goedkeuring van de gemeenschap van eigenaren relevant.
                Regionale registratie en gemeentelijke toestemming moeten daarnaast worden gecontroleerd.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-300">Let op bij €3 miljoen</p>
                <h3 className="mt-2 text-2xl font-black sm:text-3xl">Een hoge koopsom geeft geen nieuwe Golden Visa</h3>
                <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                  Nieuwe aanvragen via de vroegere vastgoedinvesteerdersroute na 3 april 2025 worden niet
                  toegelaten. Koop dus niet op basis van verouderde marketing die verblijf automatisch aan
                  een vastgoedinvestering koppelt. Laat immigratieadvies volledig los van de koopbeslissing
                  beoordelen.
                </p>
              </div>
              <Link
                href={internalLinks.contact}
                className="inline-flex items-center justify-center rounded-xl bg-teal-400 px-5 py-3 font-black text-slate-950 transition hover:bg-teal-300"
              >
                Bespreek je aankoopplan
              </Link>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-7 sm:p-9">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-amber-800">Statuscheck buitenlandse kopers</p>
            <h3 className="mt-2 text-2xl font-black text-amber-950">De aangekondigde 100%-heffing is niet opgenomen in deze berekeningen</h3>
            <p className="mt-4 leading-7 text-amber-950/85">
              De veelbesproken politieke aankondiging van een heffing tot 100% voor bepaalde niet-EU,
              niet-residente kopers was op de controledatum niet als algemene aankoopbelasting in het
              BOE gepubliceerd. Reuters meldde in maart 2026 dat het voorstel in het parlement was
              vastgelopen. Omdat de politieke status kan veranderen, controleren we dit opnieuw vlak
              vóór een reservering of koopakte.
            </p>
          </div>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="na-aankoop" aria-labelledby="na-aankoop-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Niet in de aankoopberekening
            </p>
            <h2
              id="na-aankoop-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Jaarlijkse kosten na de overdracht
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Voor een eerlijk totaalbudget moet je aankoopkosten scheiden van terugkerende
              eigenaarslasten. De volgende posten staan niet in onze rekenvoorbeelden omdat ze afhangen
              van gemeente, woning, gebruik en persoonlijke fiscale situatie.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "IBI: gemeentelijke onroerendezaakbelasting",
              "Afvalheffing en gemeentelijke diensten",
              "VvE-bijdragen en buitengewone bijdragen",
              "Opstal- en inboedelverzekering",
              "Onderhoud van woning, tuin en zwembad",
              "Nutsvoorzieningen en vaste contractkosten",
              "Niet-residentenbelasting of residentenfiscaliteit",
              "Mogelijke vermogensbelasting bij hogere vermogens",
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
              Praktisch stappenplan
            </p>
            <h2
              id="stappenplan-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Zo voorkom je verrassingen in je aankoopbudget
            </h2>
          </div>

          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                step: "01",
                title: "Bepaal of het bestaande bouw of eerste levering is",
                text: "Dit bepaalt of ITP of IVA plus AJD de basis van je belastingberekening vormt.",
              },
              {
                step: "02",
                title: "Controleer de kadastrale referentiewaarde",
                text: "Bereken belasting niet blind over de koopprijs wanneer de fiscale minimumwaarde hoger kan zijn.",
              },
              {
                step: "03",
                title: "Laat mogelijke kortingen vooraf bevestigen",
                text: "Leeftijd, inkomen, hoofdwoning, gezinssituatie en bewijsstukken kunnen het tarief veranderen.",
              },
              {
                step: "04",
                title: "Vraag vaste offertes van externe professionals",
                text: "Laat advocaat, vertaler, technische specialist en eventuele gestoría hun taak en prijs uitschrijven.",
              },
              {
                step: "05",
                title: "Onderzoek woning én documenten",
                text: "Technische staat, vergunningen, lasten, VvE-schulden, energielabel en geplande werken horen in één controlepakket.",
              },
              {
                step: "06",
                title: "Zet alle betalingen in een closing statement",
                text: "Splits koopsom, belasting, inhoudingen, openstaande schulden en professionele kosten vóór de notarisdatum.",
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
            Bekijk ook onze <InternalLink href={internalLinks.koopgids}>complete koopgids voor Spanje</InternalLink>,
            ontdek het actuele <InternalLink href={internalLinks.aanbod}>woningaanbod</InternalLink> of lees hoe onze
            <InternalLink href={internalLinks.aankoopbegeleiding}> aankoopbegeleiding</InternalLink> werkt.
          </p>
        </section>

        <div className="my-16 h-px bg-slate-200" />

        <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
              Veelgestelde vragen
            </p>
            <h2
              id="faq-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              FAQ over aankoopkosten in Spanje
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
              Officiële controle
            </p>
            <h2
              id="bronnen-title"
              className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Officiële bronnen gebruikt voor deze update
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              De fiscale en juridische kernpunten zijn gecontroleerd aan de hand van Spaanse
              overheids- en BOE-bronnen. Tarieven en voorwaarden kunnen later veranderen; controleer
              daarom altijd opnieuw op de datum van ondertekening.
            </p>
          </div>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.valencianTaxLaw}>BOE — Valenciaanse wet ITP en AJD</SourceLink>
              <p className="mt-1 text-sm text-slate-600">9%, 11%, verlaagde ITP-tarieven, 0,1% en 1,4% AJD.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.referenceValue}>Agencia Tributaria Valenciana — referentiewaarde</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Fiscale minimumgrondslag en vergelijking met koopprijs.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.vatNewBuild}>Agencia Tributaria — IVA of ITP bij woningen</SourceLink>
              <p className="mt-1 text-sm text-slate-600">10% IVA voor reguliere nieuwe woningen en onderscheid eerste levering.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.mortgageCosts}>Banco de España — hypotheekkosten</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Verdeling taxatie, notaris, register, belasting en gestoría.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.nonResidentWithholding}>Agencia Tributaria — 3% inhouding niet-residente verkoper</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Verplichting koper en Modelo 211.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.energyCertificate}>BOE — energiecertificering gebouwen</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Geldigheid, advertenties, verkoopcontract en wijziging per 23 juli 2026.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.ownersAssociation}>BOE — Ley de Propiedad Horizontal</SourceLink>
              <p className="mt-1 text-sm text-slate-600">VvE-schulden, certificaat en voorafgaande goedkeuring toeristische verhuur.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.localPlusvalia}>BOE — lokale belastingwet, plusvalía</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Verkoper als belastingplichtige en koper als vervanger bij bepaalde niet-residente verkopers.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.notaryTariff}>BOE — wettelijk notaristarief</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Basis voor de notariële eindnota.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.registryTariff}>BOE — wettelijk registratietarief</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Basis voor de rekening van het eigendomregister.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.investorVisa}>Ministerie van Migratie — afschaffing investeerdersroute</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Behandeling van aanvragen na 3 april 2025 en overgangssituaties.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7">
              <SourceLink href={officialSources.nonResidentForms2026}>BOE — update modellen 210 en 211 in 2026</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Technische wijzigingen in niet-residentenformulieren; de 3%-inhouding blijft van kracht.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 p-5 leading-7 md:col-span-2">
              <SourceLink href={officialSources.foreignBuyerTaxStatus}>Reuters — status voorgestelde 100%-heffing</SourceLink>
              <p className="mt-1 text-sm text-slate-600">Actuele status van het niet-aangenomen voorstel voor bepaalde niet-EU-kopers.</p>
            </li>
          </ul>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-700 to-slate-950 p-7 text-white sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-200">
                Persoonlijke berekening
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Weet vóór je tekent wat je werkelijk betaalt
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                Deel de woningprijs, het type woning, je leeftijd, gebruik als hoofd- of tweede woning
                en eventuele hypotheekplannen. Nordic Move Spain zet de verwachte aankoopkosten
                overzichtelijk naast elkaar. Onze directe begeleidingsfee is €0 en het technische
                aankooprapport is inbegrepen zonder extra kosten.
              </p>
            </div>
            <Link
              href={internalLinks.contact}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-black text-slate-950 transition hover:bg-teal-100"
            >
              Vraag je kostenoverzicht aan
              <ArrowIcon />
            </Link>
          </div>
        </section>

        <footer className="mt-10 border-t border-slate-200 pt-8 text-sm leading-6 text-slate-500">
          <p>
            <strong className="text-slate-700">Auteur:</strong> Nordic Move Spain · Laatst inhoudelijk
            gecontroleerd op {updatedDisplay}.
          </p>
          <p className="mt-3">
            Deze pagina geeft algemene informatie en een transparante begrotingsmethode. Zij vormt geen
            individueel juridisch, fiscaal, technisch, financieel of immigratieadvies. De belastbare
            datum, fiscale grondslag, persoonlijke voorwaarden, gemeente, woningdocumenten en gemaakte
            afspraken bepalen de definitieve kosten. Vraag vóór ondertekening om dossier-specifieke
            bevestiging van onafhankelijke bevoegde professionals.
          </p>
        </footer>
      </article>
    </main>
  );
}