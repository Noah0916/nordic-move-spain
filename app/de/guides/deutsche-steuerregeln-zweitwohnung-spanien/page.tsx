import type { Metadata } from "next";
import type { ReactNode } from "react";

/**
 * Standalone App-Router page for:
 * /de/guides/deutsche-steuerregeln-zweitwohnung-spanien
 *
 * Configure in production:
 * - NEXT_PUBLIC_SITE_URL=https://www.example.com
 * - optional real alternate URLs for reciprocal hreflang:
 *   NEXT_PUBLIC_HREFLANG_ES=https://www.example.com/es/...
 *   NEXT_PUBLIC_HREFLANG_EN=https://www.example.com/en/...
 *   NEXT_PUBLIC_HREFLANG_NL=https://www.example.com/nl/...
 *   NEXT_PUBLIC_HREFLANG_X_DEFAULT=https://www.example.com/...
 * - optional NEXT_PUBLIC_GUIDE_OG_IMAGE=/images/guides/spanien-steuern.jpg
 * - optional E-E-A-T / Article schema fields:
 *   NEXT_PUBLIC_GUIDE_AUTHOR_NAME=...
 *   NEXT_PUBLIC_GUIDE_AUTHOR_URL=https://...
 *   NEXT_PUBLIC_GUIDE_DATE_PUBLISHED=2026-08-14
 *   NEXT_PUBLIC_SITE_NAME=...
 *   NEXT_PUBLIC_SITE_LOGO=/logo.png
 *
 * Important SEO note:
 * - This page handles page-level canonical, hreflang, robots meta, Open Graph
 *   and JSON-LD.
 * - A real /robots.txt and /sitemap.xml belong in app/robots.ts and
 *   app/sitemap.ts in Next.js; they cannot be fully implemented from page.tsx.
 * - No meta-keywords tag is included: Google does not use it for ranking.
 */

const PAGE_PATH = "/de/guides/deutsche-steuerregeln-zweitwohnung-spanien";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const OG_IMAGE = process.env.NEXT_PUBLIC_GUIDE_OG_IMAGE;
const AUTHOR_NAME = process.env.NEXT_PUBLIC_GUIDE_AUTHOR_NAME;
const AUTHOR_URL = toAbsoluteUrl(process.env.NEXT_PUBLIC_GUIDE_AUTHOR_URL);
const DATE_PUBLISHED = process.env.NEXT_PUBLIC_GUIDE_DATE_PUBLISHED;
const PUBLISHER_NAME = process.env.NEXT_PUBLIC_SITE_NAME;
const PUBLISHER_LOGO = toAbsoluteUrl(process.env.NEXT_PUBLIC_SITE_LOGO);

const TITLE = "Haus in Spanien kaufen als Deutscher: Steuern 2026";
const DESCRIPTION =
  "Welche Steuern zahlen Deutsche beim Hauskauf in Spanien? ITP/IVA, IBI, IRNR, Modelo 210, Vermietung, Verkauf und DBA Deutschland–Spanien – Stand 2026.";

function toAbsoluteUrl(value?: string) {
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value;
  if (SITE_URL && value.startsWith("/")) return `${SITE_URL}${value}`;
  return undefined;
}

const absolutePageUrl = SITE_URL ? `${SITE_URL}${PAGE_PATH}` : undefined;
const absoluteOgImage = toAbsoluteUrl(OG_IMAGE);

const hreflangLanguages: Record<string, string> = {};
if (absolutePageUrl) hreflangLanguages["de-DE"] = absolutePageUrl;

const configuredAlternates = [
  ["es-ES", process.env.NEXT_PUBLIC_HREFLANG_ES],
  ["en", process.env.NEXT_PUBLIC_HREFLANG_EN],
  ["nl", process.env.NEXT_PUBLIC_HREFLANG_NL],
  ["x-default", process.env.NEXT_PUBLIC_HREFLANG_X_DEFAULT],
] as const;

for (const [locale, url] of configuredAlternates) {
  const absolute = toAbsoluteUrl(url);
  if (absolute) hreflangLanguages[locale] = absolute;
}

export const metadata: Metadata = {
  ...(SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}),
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  ...(AUTHOR_NAME
    ? { authors: [{ name: AUTHOR_NAME, ...(AUTHOR_URL ? { url: AUTHOR_URL } : {}) }] }
    : {}),
  alternates: {
    canonical: absolutePageUrl ?? PAGE_PATH,
    ...(Object.keys(hreflangLanguages).length > 0
      ? { languages: hreflangLanguages }
      : {}),
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: absolutePageUrl ?? PAGE_PATH,
    title: TITLE,
    description: DESCRIPTION,
    ...(absoluteOgImage
      ? {
          images: [
            {
              url: absoluteOgImage,
              alt: "Steuern beim Kauf einer Immobilie in Spanien für Deutsche",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: absoluteOgImage ? "summary_large_image" : "summary",
    title: TITLE,
    description: DESCRIPTION,
    ...(absoluteOgImage ? { images: [absoluteOgImage] } : {}),
  },
};

const sources = {
  purchase:
    "https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
  imputed:
    "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/irnr-sin-establecimiento-permanente/cuestiones-especificas-sobre-tributacion-inmuebles/renta-imputada-inmueble-urbano-uso-propio.html",
  rental:
    "https://sede.agenciatributaria.gob.es/Sede/en_gb/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/capitulo-03-tributacion-rentas-comunes-nr/otros-rendimientos/rendimientos-capital-inmobiliario.html",
  sale:
    "https://sede.agenciatributaria.gob.es/Sede/en_gb/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/capitulo-03-tributacion-rentas-comunes-nr/ganancias-patrimoniales/ganancias-patrimoniales-derivadas-venta-inmuebles.html",
  model210:
    "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/irnr-sin-establecimiento-permanente/declaracion-irnr-sin-establecimiento-permanente/modelo-plazo-declaracion.html",
  residence:
    "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/residencia-personas-fisicas-juridicas/persona-fisica-residente-espana.html",
  wealth:
    "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/impuesto-sobre-patrimonio/declaracion-impuesto-patrimonio-no-residentes.html",
  solidarity:
    "https://sede.agenciatributaria.gob.es/Sede/procedimientos/GC62.shtml",
  cadastral: "https://www.catastro.hacienda.gob.es/es-ES/usos_fiscales.html",
  nie: "https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/ciudadanos-de-la-union-europea/numero-de-Identidad-de-extranjero-nie/",
  canary: "https://sede.gobiernodecanarias.org/tributos/jsf/publico/sede/tramites/tramite.jsp?categoria=igic",
  dta:
    "https://www.bundesfinanzministerium.de/Content/DE/Standardartikel/Themen/Steuern/Internationales_Steuerrecht/Staatenbezogene_Informationen/Laender_A_Z/Spanien/2025-01-01-Abkommen-Synthetisierter-Text.pdf?__blob=publicationFile&v=3",
  estg21: "https://www.gesetze-im-internet.de/estg/__21.html",
  estg23: "https://www.gesetze-im-internet.de/estg/__23.html",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Haus in Spanien kaufen als Deutscher: Steuern, Zweitwohnsitz und Modelo 210 (2026)",
  description: DESCRIPTION,
  inLanguage: "de-DE",
  dateModified: "2026-08-14",
  ...(DATE_PUBLISHED ? { datePublished: DATE_PUBLISHED } : {}),
  isAccessibleForFree: true,
  ...(AUTHOR_NAME
    ? {
        author: {
          "@type": "Person",
          name: AUTHOR_NAME,
          ...(AUTHOR_URL ? { url: AUTHOR_URL } : {}),
        },
      }
    : {}),
  ...(PUBLISHER_NAME
    ? {
        publisher: {
          "@type": "Organization",
          name: PUBLISHER_NAME,
          ...(PUBLISHER_LOGO
            ? { logo: { "@type": "ImageObject", url: PUBLISHER_LOGO } }
            : {}),
        },
      }
    : {}),
  ...(absolutePageUrl
    ? {
        url: absolutePageUrl,
        mainEntityOfPage: absolutePageUrl,
      }
    : {}),
  ...(absoluteOgImage ? { image: [absoluteOgImage] } : {}),
  about: [
    { "@type": "Thing", name: "Immobilienkauf in Spanien" },
    { "@type": "Thing", name: "Spanische Immobiliensteuer" },
    { "@type": "Thing", name: "IRNR und Modelo 210" },
    { "@type": "Thing", name: "Doppelbesteuerungsabkommen Deutschland–Spanien" },
  ],
  citation: Object.values(sources),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startseite",
      ...(SITE_URL ? { item: SITE_URL } : {}),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ratgeber",
      ...(SITE_URL ? { item: `${SITE_URL}/de/guides` } : {}),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Steuern beim Hauskauf in Spanien",
      ...(absolutePageUrl ? { item: absolutePageUrl } : {}),
    },
  ],
};

function jsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function SourceNote({ children }: { children: ReactNode }) {
  return <p className="source-note">{children}</p>;
}

export default function DeutscheSteuerregelnZweitwohnungSpanienPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />

      <main className="tax-guide">
        <article lang="de-DE">
          <header className="hero">
            <nav className="breadcrumbs" aria-label="Brotkrümelnavigation">
              <a href="/de">Startseite</a>
              <span aria-hidden="true">/</span>
              <a href="/de/guides">Ratgeber</a>
              <span aria-hidden="true">/</span>
              <span>Steuern Spanien</span>
            </nav>

            <p className="eyebrow">Immobilienratgeber Deutschland → Spanien</p>
            <h1>
              Haus in Spanien kaufen als Deutscher: Steuern, Zweitwohnsitz und Modelo 210 (2026)
            </h1>
            <p className="lead">
              Wer als Deutscher eine Ferienwohnung, Finca oder ein Haus in Spanien kauft, hat häufig
              <strong> in Spanien und in Deutschland steuerliche Pflichten</strong>. Entscheidend sind
              nicht nur Kaufpreis und Region, sondern auch Neubau oder Bestandsimmobilie, Eigennutzung
              oder Vermietung, steuerliche Ansässigkeit und ein späterer Verkauf. Dieser Leitfaden ordnet
              die wichtigsten Regeln für in Deutschland steuerlich Ansässige ein – mit offiziellen
              Quellen und den geänderten Fristen für das spanische <strong>Modelo 210 ab 2026</strong>.
            </p>
            <div className="review-line">
              Erstellt auf Basis offizieller Behörden- und Gesetzesquellen
              {AUTHOR_NAME ? <> · Autor: {AUTHOR_NAME}</> : null}
              {" · "}Stand: <time dateTime="2026-08-14">14. August 2026</time>
            </div>
          </header>

          <aside className="disclaimer" aria-label="Hinweis">
            <strong>Wichtig:</strong> Dieser Beitrag ist eine allgemeine steuerliche Orientierung und
            keine individuelle Steuer- oder Rechtsberatung. Steuersätze, Vergünstigungen und regionale
            Regeln können sich ändern oder vom persönlichen Fall abhängen.
          </aside>

          <section className="quick-answer" aria-labelledby="kurzantwort">
            <h2 id="kurzantwort">Kurzantwort: Welche Steuern treffen deutsche Spanien-Käufer?</h2>
            <div className="quick-grid">
              <div>
                <strong>Beim Kauf</strong>
                <p>
                  Neubau im spanischen IVA-Gebiet: grundsätzlich 10 % IVA auf Wohnraum. Gebrauchte
                  Immobilien: ITP, dessen Satz von der Autonomen Gemeinschaft abhängt. AJD kann je nach
                  Urkunde und Region zusätzlich relevant sein.
                </p>
              </div>
              <div>
                <strong>Jährlich bei Eigennutzung</strong>
                <p>
                  Üblicherweise kommunale IBI plus spanische Nichtresidentensteuer IRNR auf eine
                  gesetzlich fingierte Eigennutzungsrendite – auch wenn die Wohnung keinen Cent Miete
                  einbringt.
                </p>
              </div>
              <div>
                <strong>Bei Vermietung</strong>
                <p>
                  Für in Deutschland bzw. der EU ansässige Eigentümer beträgt der spanische
                  IRNR-Steuersatz derzeit 19 %. Direkt mit den Mieteinnahmen zusammenhängende Kosten
                  können unter den EU-Regeln grundsätzlich abzugsfähig sein.
                </p>
              </div>
              <div>
                <strong>Beim Verkauf</strong>
                <p>
                  Spanien besteuert den Veräußerungsgewinn eines Nichtresidenten grundsätzlich mit 19 %;
                  der Käufer behält 3 % des Kaufpreises als Vorauszahlung ein. In Deutschland kann
                  zusätzlich § 23 EStG relevant werden.
                </p>
              </div>
            </div>
          </section>

          <nav className="toc" aria-label="Inhaltsverzeichnis">
            <strong>Inhalt</strong>
            <ol>
              <li><a href="#kaufsteuern">Steuern beim Immobilienkauf</a></li>
              <li><a href="#laufende-steuern">IBI und laufende Steuern</a></li>
              <li><a href="#modelo-210">Modelo 210 bei Eigennutzung</a></li>
              <li><a href="#vermietung">Vermietung der Immobilie</a></li>
              <li><a href="#deutschland">Besteuerung in Deutschland und DBA</a></li>
              <li><a href="#verkauf">Steuern beim späteren Verkauf</a></li>
              <li><a href="#steuerlicher-wohnsitz">183-Tage-Regel und Steuerwohnsitz</a></li>
              <li><a href="#vermoegensteuer">Vermögensteuer und große Vermögen</a></li>
              <li><a href="#checkliste">Checkliste vor dem Kauf</a></li>
              <li><a href="#faq">Häufige Fragen</a></li>
              <li><a href="#quellen">Offizielle Quellen</a></li>
            </ol>
          </nav>

          <section id="kaufsteuern">
            <h2>1. Welche Steuern fallen beim Immobilienkauf in Spanien an?</h2>
            <p>
              Die erste Weiche ist nicht die Nationalität des Käufers, sondern die Art der Transaktion:
              <strong> Neubau vom Unternehmer oder gebrauchte Immobilie</strong>. Genau hier entstehen
              viele falsche Pauschalaussagen wie „Beim Kauf zahlt man in Spanien immer zehn Prozent
              Steuer“. Das stimmt so nicht.
            </p>

            <div className="table-wrap" role="region" aria-label="Kaufsteuern Spanien" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th>Situation</th>
                    <th>Hauptsteuer</th>
                    <th>Was deutsche Käufer wissen sollten</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Neue Wohnimmobilie vom Bauträger</td>
                    <td>IVA</td>
                    <td>
                      Im IVA-Gebiet beträgt der allgemeine IVA-Satz für Wohnraum derzeit 10 %; für
                      bestimmte öffentlich geförderte Wohnungen gelten Sonderregeln.
                    </td>
                  </tr>
                  <tr>
                    <td>Gebrauchte Immobilie</td>
                    <td>ITP</td>
                    <td>
                      Der Käufer trägt die Grunderwerbsteuer. Der konkrete Tarif ist regional geregelt;
                      es gibt deshalb keinen seriösen landesweit einheitlichen Prozentwert.
                    </td>
                  </tr>
                  <tr>
                    <td>Notarielle Dokumente</td>
                    <td>AJD prüfen</td>
                    <td>
                      Die Steuer auf dokumentierte Rechtsakte ist ebenfalls regional geprägt und hängt
                      von der konkreten Urkunde bzw. Transaktion ab.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Für eine Zweitwohnung ist außerdem wichtig, dass manche regionale Ermäßigungen an
              Voraussetzungen wie Hauptwohnsitz, Alter, Behinderung oder Familienstatus geknüpft sind.
              Rechnen Sie deshalb vor Unterzeichnung nicht mit einem reduzierten Satz, nur weil Sie ihn
              in einem Online-Rechner gesehen haben.
            </p>

            <div className="callout">
              <strong>Sonderfall Kanarische Inseln:</strong> Dort gilt ein eigenes indirektes
              Steuersystem mit IGIC. Die pauschale Aussage „Neubau = 10 % IVA“ darf daher nicht
              unverändert auf die Kanaren übertragen werden. Lassen Sie den konkreten Kauf dort nach
              kanarischem Steuerrecht berechnen.
            </div>

            <h3>NIE frühzeitig beantragen</h3>
            <p>
              Für wirtschaftliche und administrative Vorgänge in Spanien benötigen Ausländer regelmäßig
              eine <strong>Número de Identidad de Extranjero (NIE)</strong>. Die NIE ist eine persönliche
              Identifikationsnummer. Sie macht Sie nicht automatisch zum spanischen Steuerresidenten und
              ersetzt weder Eigentumsprüfung noch steuerliche Beratung. Für einen Immobilienkauf sollte
              sie praktisch früh im Prozess organisiert werden, damit Bank-, Notar- und Steuerformalitäten
              nicht unnötig stocken.
            </p>

            <SourceNote>
              Offizielle Grundlagen: {" "}
              <a href={sources.purchase} target="_blank" rel="noopener noreferrer">Agencia Tributaria – IVA oder ITP beim Wohnungskauf</a>
              {" · "}
              <a href={sources.nie} target="_blank" rel="noopener noreferrer">Ministerio del Interior – NIE</a>
              {" · "}
              <a href={sources.canary} target="_blank" rel="noopener noreferrer">Agencia Tributaria Canaria – IGIC</a>
            </SourceNote>
          </section>

          <section id="laufende-steuern">
            <h2>2. Laufende Steuern: IBI und IRNR bei einer Zweitwohnung</h2>
            <p>
              Nach dem Kauf ist die Steuerfrage nicht erledigt. Bei einer typischen Ferien- oder
              Zweitwohnung eines in Deutschland ansässigen Eigentümers sind insbesondere zwei spanische
              Abgaben zu unterscheiden.
            </p>

            <h3>IBI: die kommunale Grundsteuer</h3>
            <p>
              Die <strong>Impuesto sobre Bienes Inmuebles (IBI)</strong> ist eine lokale Immobiliensteuer.
              Bemessungsgrundlage ist der Katasterwert (<em>valor catastral</em>), während die Gemeinde
              unter den gesetzlichen Rahmenbedingungen den konkreten Hebesatz und Vergünstigungen
              bestimmt. Deshalb kann die jährliche IBI selbst bei ähnlich teuren Objekten je nach Gemeinde
              deutlich unterschiedlich ausfallen.
            </p>

            <h3>IRNR: Steuer auch ohne Vermietung</h3>
            <p>
              Der für viele ausländische Käufer überraschendere Punkt ist die spanische
              <strong> Einkommensteuer für Nichtresidenten (IRNR)</strong>. Besitzen Sie als Nichtresident
              eine städtische Immobilie in Spanien und nutzen sie selbst oder lassen sie leer stehen, setzt
              Spanien grundsätzlich eine <strong>fiktive Immobilienrendite</strong> an. Es muss also nicht
              tatsächlich Miete auf Ihrem Konto eingehen, damit eine spanische Einkommensteuerpflicht
              entsteht.
            </p>

            <SourceNote>
              Offizielle Grundlagen: {" "}
              <a href={sources.cadastral} target="_blank" rel="noopener noreferrer">Dirección General del Catastro – IBI und Katasterwert</a>
              {" · "}
              <a href={sources.imputed} target="_blank" rel="noopener noreferrer">Agencia Tributaria – Eigennutzung durch Nichtresidenten</a>
            </SourceNote>
          </section>

          <section id="modelo-210">
            <h2>3. Modelo 210 bei Eigennutzung: so wird die Nichtresidentensteuer berechnet</h2>
            <p>
              Für die IRNR wird bei Eigennutzung nicht der Marktwert der Immobilie besteuert. Ausgangspunkt
              ist regelmäßig der <strong>Katasterwert</strong>, den Sie zum Beispiel auf dem IBI-Bescheid
              finden. Die Agencia Tributaria unterscheidet bei der fiktiven Rendite derzeit zwischen
              <strong> 1,1 % und 2 %</strong> des maßgeblichen Katasterwerts.
            </p>

            <ul className="facts-list">
              <li>
                <strong>1,1 %</strong>, wenn der Katasterwert nach den von der Agencia Tributaria genannten
                Voraussetzungen in dem Steuerjahr oder in den zehn vorhergehenden Steuerjahren im Rahmen
                einer allgemeinen kollektiven Bewertung neu bestimmt bzw. geändert wurde.
              </li>
              <li>
                <strong>2 %</strong> in den übrigen Fällen.
              </li>
              <li>
                Für in der EU ansässige Steuerpflichtige – also typischerweise auch in Deutschland
                ansässige Eigentümer – beträgt der IRNR-Steuersatz auf diese Einkunft derzeit
                <strong> 19 %</strong>.
              </li>
              <li>
                Bei dieser fiktiven Eigennutzungsrendite sind nach den veröffentlichten Regeln keine
                Kosten abzugsfähig. Bei nur zeitweiser Eigennutzung wird anteilig nach Tagen gerechnet.
              </li>
            </ul>

            <div className="example" aria-label="Rechenbeispiel Modelo 210">
              <h3>Rechenbeispiel: Katasterwert 180.000 €</h3>
              <p>
                Angenommen, die Immobilie wird das ganze Jahr selbst genutzt und erfüllt die Voraussetzung
                für den 1,1-%-Ansatz:
              </p>
              <p className="formula">180.000 € × 1,1 % = 1.980 € fiktive Einkunft</p>
              <p className="formula">1.980 € × 19 % = 376,20 € IRNR</p>
              <p>
                Würde stattdessen der 2-%-Ansatz gelten, läge die fiktive Einkunft bei 3.600 € und die
                Steuer bei 684 €. Das Beispiel ist bewusst vereinfacht; Eigentumsquote, Nutzungsdauer,
                fehlender Katasterwert oder besondere Sachverhalte können das Ergebnis ändern.
              </p>
            </div>

            <h3>Wichtige Friständerung ab Steuerjahr 2026</h3>
            <p>
              Für Immobilienkäufer ist 2026 ein relevantes Übergangsjahr. Nach der aktuellen
              Veröffentlichung der Agencia Tributaria kann die auf <strong>2026 entfallende fiktive
              Eigennutzungsrendite vom 1. April bis 31. Dezember 2027</strong> mit Modelo 210 erklärt
              werden. Für die auf 2025 entfallende Eigennutzung gilt noch die bisherige Frist im gesamten
              Kalenderjahr 2026. Wer ältere Blogbeiträge liest, findet daher oft inzwischen überholte
              Fristangaben.
            </p>

            <div className="callout warning">
              <strong>Praxisfehler:</strong> „Ich vermiete nicht, also brauche ich kein Modelo 210“ ist für
              einen nichtresidenten Eigentümer häufig falsch. Gerade die reine Eigennutzung kann die
              fiktive IRNR-Besteuerung auslösen.
            </div>

            <SourceNote>
              Offizielle Grundlagen: {" "}
              <a href={sources.imputed} target="_blank" rel="noopener noreferrer">Agencia Tributaria – Berechnung der fiktiven Immobilienrendite</a>
              {" · "}
              <a href={sources.model210} target="_blank" rel="noopener noreferrer">Agencia Tributaria – aktuelle Modelo-210-Fristen</a>
            </SourceNote>
          </section>

          <section id="vermietung">
            <h2>4. Was gilt, wenn Sie die Immobilie in Spanien vermieten?</h2>
            <p>
              Sobald Mieteinnahmen entstehen, wird nicht mehr nur eine fiktive Eigennutzungsrendite
              betrachtet. Mieten aus einer in Spanien gelegenen Immobilie sind aus spanischer Sicht
              spanische Einkünfte. Das Doppelbesteuerungsabkommen hindert Spanien nicht daran, diese
              Einkünfte zu besteuern.
            </p>

            <p>
              Für in einem EU-Staat ansässige natürliche Personen beträgt der spanische IRNR-Steuersatz
              auf entsprechende Einkünfte derzeit <strong>19 %</strong>. Anders als bei der reinen
              Eigennutzungsfiktion können EU-/EWR-Ansässige nach den veröffentlichten Regeln bestimmte
              Ausgaben abziehen, wenn sie <strong>direkt mit den in Spanien erzielten Einkünften
              zusammenhängen</strong> und die geforderte wirtschaftliche Verknüpfung nachweisbar ist.
              Welche konkrete Ausgabe anerkannt wird, muss sauber belegt und nach spanischen Regeln
              beurteilt werden.
            </p>

            <h3>Teilweise vermietet, teilweise selbst genutzt</h3>
            <p>
              Ein Ferienhaus kann im selben Jahr zwei unterschiedliche spanische Steuerlogiken auslösen:
              Für Vermietungszeiträume werden die tatsächlichen Mieteinkünfte besteuert; für die übrigen
              Tage kann anteilig die fiktive Eigennutzungsrendite anfallen. Eine bloße Jahresbetrachtung
              „vermietet oder nicht vermietet“ greift deshalb zu kurz.
            </p>

            <h3>Modelo 210: Fristen bei Vermietung ab 2026</h3>
            <p>
              Auch hier wurden die Abgabefristen geändert. Für ab 2026 jährlich zusammengefasste
              positive Vermietungseinkünfte nennt die Agencia Tributaria grundsätzlich den Zeitraum
              <strong> 1. bis 20. April des Folgejahres</strong>; bei Lastschrift endet die entsprechende
              Frist früher. Für einzelne bzw. ältere Entstehungszeiträume bestehen Übergangsregeln. Wer
              2026 vermietet, sollte daher nicht automatisch die Quartalsroutine aus älteren Ratgebern
              übernehmen.
            </p>

            <SourceNote>
              Offizielle Grundlagen: {" "}
              <a href={sources.rental} target="_blank" rel="noopener noreferrer">Agencia Tributaria – Vermietungseinkünfte von Nichtresidenten</a>
              {" · "}
              <a href={sources.model210} target="_blank" rel="noopener noreferrer">Agencia Tributaria – Modelo 210 und Fristen</a>
            </SourceNote>
          </section>

          <section id="deutschland">
            <h2>5. Muss ein deutscher Eigentümer die Spanien-Immobilie auch in Deutschland versteuern?</h2>
            <p>
              Wenn Sie in Deutschland steuerlich ansässig bleiben, endet die Betrachtung nicht an der
              spanischen Grenze. Nach deutschem Einkommensteuerrecht sind Einkünfte aus Vermietung und
              Verpachtung grundsätzlich in § 21 EStG erfasst; bei ausländischen Immobilien kommen die
              Regeln für ausländische Einkünfte hinzu.
            </p>

            <h3>Das DBA Deutschland–Spanien verhindert Doppelbesteuerung – aber nicht jede Doppelmeldung</h3>
            <p>
              Das <strong>Doppelbesteuerungsabkommen (DBA) Deutschland–Spanien</strong> weist Spanien bei
              Einkünften aus dort gelegenem unbeweglichem Vermögen ein Besteuerungsrecht zu. Für eine in
              Deutschland ansässige Person ist besonders Artikel 22 Absatz 2 Buchstabe b Ziffer vii des
              aktuellen synthetisierten Abkommenstextes wichtig: Für normale Einkünfte aus spanischem
              unbeweglichem Vermögen – einschließlich Veräußerungsgewinnen – sieht Deutschland im
              Grundsatz die <strong>Anrechnung der spanischen Steuer</strong> nach deutschem Recht vor,
              soweit nicht besondere Betriebsstättenfälle greifen.
            </p>

            <div className="callout">
              <strong>Konsequenz:</strong> Die oft gehörte Aussage „Die Immobilie liegt in Spanien, also
              interessiert sie das deutsche Finanzamt nicht“ ist zu pauschal. Spanische und deutsche
              Bemessungsgrundlagen, abzugsfähige Kosten und Zeitpunkte können voneinander abweichen. Die
              spanische Steuer wird nicht einfach blind 1:1 erstattet, sondern nach den deutschen
              Anrechnungsregeln berücksichtigt.
            </div>

            <p>
              Bei der rein spanischen fiktiven Eigennutzungsrendite ist besondere Sorgfalt nötig: Diese
              Steuerfigur hat kein simples 1:1-Pendant zu einer tatsächlich erzielten deutschen
              Vermietungseinkunft. Ob eine spanische Steuer im konkreten deutschen Fall anrechenbar ist,
              hängt unter anderem davon ab, ob und in welchem Umfang auf dieselben Einkünfte deutsche
              Steuer entfällt. Das sollte bei reiner Eigennutzung individuell geprüft werden.
            </p>

            <SourceNote>
              Offizielle Grundlagen: {" "}
              <a href={sources.dta} target="_blank" rel="noopener noreferrer">Bundesfinanzministerium – DBA Deutschland–Spanien, synthetisierter Text</a>
              {" · "}
              <a href={sources.estg21} target="_blank" rel="noopener noreferrer">§ 21 EStG – Vermietung und Verpachtung</a>
            </SourceNote>
          </section>

          <section id="verkauf">
            <h2>6. Was passiert steuerlich beim späteren Verkauf?</h2>
            <p>
              Beim Verkauf einer spanischen Immobilie durch einen Nichtresidenten sind mindestens drei
              Punkte auseinanderzuhalten: die spanische Steuer auf den Veräußerungsgewinn, der
              3-%-Einbehalt durch den Käufer und eine mögliche deutsche Besteuerung.
            </p>

            <h3>Spanien: 19 % auf den steuerpflichtigen Veräußerungsgewinn</h3>
            <p>
              Die Agencia Tributaria nennt für den Immobilien-Veräußerungsgewinn eines Nichtresidenten
              derzeit einen Steuersatz von <strong>19 %</strong>. Der steuerliche Gewinn ist nicht schlicht
              „Verkaufspreis minus damaliger Kaufpreis“; die gesetzlich berücksichtigungsfähigen
              Anschaffungs- und Veräußerungskomponenten müssen korrekt ermittelt und belegt werden.
            </p>

            <h3>Die 3-%-Regel ist eine Vorauszahlung, kein Verkaufsteuersatz</h3>
            <p>
              Verkauft ein Nichtresident eine spanische Immobilie, muss der Käufer grundsätzlich
              <strong> 3 % des vereinbarten Kaufpreises einbehalten</strong> und als Vorauszahlung an die
              spanische Finanzverwaltung abführen. Der Verkäufer verrechnet diesen Einbehalt mit seiner
              endgültigen Steuer. Ist die Vorauszahlung höher als die endgültige Steuerschuld, kann sich
              ein Erstattungsanspruch ergeben.
            </p>

            <p>
              Genau deshalb ist die Aussage „Beim Verkauf zahlt man drei Prozent Steuer“ falsch: Die 3 %
              beziehen sich auf den <em>Kaufpreis</em> und dienen als Sicherung/Vorauszahlung; die
              eigentliche Gewinnsteuer wird separat berechnet.
            </p>

            <h3>Deutschland: § 23 EStG und die Zehnjahresfrist</h3>
            <p>
              Für in Deutschland steuerlich Ansässige kann ein Verkauf außerdem unter
              <strong> § 23 EStG</strong> fallen. Bei Grundstücken und Immobilien ist ein privates
              Veräußerungsgeschäft grundsätzlich relevant, wenn zwischen Anschaffung und Veräußerung
              nicht mehr als zehn Jahre liegen. Das Gesetz enthält jedoch wichtige Ausnahmen für
              Immobilien, die zu eigenen Wohnzwecken genutzt wurden. Ob eine spanische Ferien- oder
              Zweitwohnung die Voraussetzungen erfüllt, sollte anhand der tatsächlichen Nutzung geprüft
              und dokumentiert werden.
            </p>

            <p>
              Soweit Deutschland den Gewinn besteuert und die DBA-Voraussetzungen erfüllt sind, ist die
              spanische Steuer nach der im DBA vorgesehenen Anrechnungsmethode zu berücksichtigen. Auch
              hier können die Gewinnermittlungen beider Staaten voneinander abweichen.
            </p>

            <SourceNote>
              Offizielle Grundlagen: {" "}
              <a href={sources.sale} target="_blank" rel="noopener noreferrer">Agencia Tributaria – Verkauf spanischer Immobilien durch Nichtresidenten</a>
              {" · "}
              <a href={sources.estg23} target="_blank" rel="noopener noreferrer">§ 23 EStG – private Veräußerungsgeschäfte</a>
              {" · "}
              <a href={sources.dta} target="_blank" rel="noopener noreferrer">DBA Deutschland–Spanien</a>
            </SourceNote>
          </section>

          <section id="steuerlicher-wohnsitz">
            <h2>7. Zweitwohnsitz oder Steuerwohnsitz? Die 183-Tage-Regel ist nicht die einzige Regel</h2>
            <p>
              Eine Immobilie in Spanien macht einen Deutschen nicht automatisch zum spanischen
              Steuerresidenten. Umgekehrt ist es riskant, sich ausschließlich auf „unter 183 Tagen“
              auszuruhen. Nach den spanischen Regeln kann steuerliche Ansässigkeit insbesondere dann
              vorliegen, wenn Sie sich <strong>mehr als 183 Tage im Kalenderjahr</strong> in Spanien
              aufhalten oder wenn dort der <strong>Hauptkern bzw. die Basis Ihrer wirtschaftlichen
              Tätigkeiten oder Interessen</strong> liegt. Zusätzlich kennt das spanische Recht eine
              widerlegbare Familienvermutung.
            </p>

            <p>
              Werden Sie nach nationalem Recht in beiden Staaten als ansässig behandelt, greift das DBA
              mit einer Reihenfolge weiterer Kriterien: ständige Wohnstätte, Mittelpunkt der
              Lebensinteressen, gewöhnlicher Aufenthalt und gegebenenfalls Staatsangehörigkeit. Bei einem
              echten Umzug oder sehr langen Aufenthalten sollte die Ansässigkeit daher vorab geplant und
              nicht erst nach einer Steuerprüfung geklärt werden.
            </p>

            <div className="callout warning">
              <strong>Merksatz:</strong> 183 Tage sind ein wichtiges Kriterium, aber kein universeller
              Freifahrtschein. Wer wirtschaftliche und persönliche Bindungen nach Spanien verlagert,
              braucht eine vollständige Ansässigkeitsprüfung.
            </div>

            <SourceNote>
              Offizielle Grundlagen: {" "}
              <a href={sources.residence} target="_blank" rel="noopener noreferrer">Agencia Tributaria – steuerliche Ansässigkeit natürlicher Personen</a>
              {" · "}
              <a href={sources.dta} target="_blank" rel="noopener noreferrer">DBA Deutschland–Spanien, Artikel 4</a>
            </SourceNote>
          </section>

          <section id="vermoegensteuer">
            <h2>8. Spanische Vermögensteuer: bei höherem Immobilienvermögen gesondert prüfen</h2>
            <p>
              Neben Einkommen- und Kaufsteuern kann bei wertvollerem spanischem Vermögen die
              <strong> spanische Vermögensteuer (Impuesto sobre el Patrimonio)</strong> relevant werden.
              Nichtresidenten werden grundsätzlich mit den in Spanien belegenen bzw. dort ausübbaren
              Vermögenswerten und Rechten erfasst. Nach den staatlichen Vorgaben besteht eine
              Erklärungspflicht insbesondere, wenn Steuer zu zahlen ist oder der Bruttowert der erfassten
              Vermögenswerte und Rechte <strong>über 2 Mio. €</strong> liegt.
            </p>

            <p>
              Diese 2-Mio.-€-Grenze ist <strong>kein allgemeiner Freibetrag</strong>. In der staatlichen
              Systematik existiert ein allgemeiner Freibetrag von 700.000 €, während die tatsächlich
              anwendbare Regelung, regionale Vergünstigungen und die persönliche Situation gesondert
              geprüft werden müssen. Bei sehr großen Vermögen kann zusätzlich die staatliche
              <strong> Solidaritätssteuer auf große Vermögen</strong> relevant werden; die Agencia
              Tributaria beschreibt sie als ergänzende Abgabe für Nettovermögen oberhalb von 3 Mio. €.
            </p>

            <SourceNote>
              Offizielle Grundlage: {" "}
              <a href={sources.wealth} target="_blank" rel="noopener noreferrer">Agencia Tributaria – Vermögensteuer für Nichtresidenten</a>
              {" · "}
              <a href={sources.solidarity} target="_blank" rel="noopener noreferrer">Agencia Tributaria – Modelo 718 / Solidaritätssteuer auf große Vermögen</a>
            </SourceNote>
          </section>

          <section id="checkliste">
            <h2>9. Steuer-Checkliste für Deutsche vor dem Hauskauf in Spanien</h2>
            <div className="checklist">
              <div><span>1</span><p><strong>Steuerliche Ansässigkeit klären:</strong> Bleiben Sie in Deutschland ansässig oder verändert sich Ihr Lebensmittelpunkt?</p></div>
              <div><span>2</span><p><strong>NIE rechtzeitig organisieren:</strong> nicht erst kurz vor dem Notartermin.</p></div>
              <div><span>3</span><p><strong>Neubau oder Bestand feststellen:</strong> davon hängt IVA versus ITP maßgeblich ab.</p></div>
              <div><span>4</span><p><strong>Autonome Gemeinschaft identifizieren:</strong> ITP/AJD und Vergünstigungen sind regional, nicht pauschal spanienweit.</p></div>
              <div><span>5</span><p><strong>Kanaren separat behandeln:</strong> dort gilt das IGIC-System statt des normalen IVA-Regimes.</p></div>
              <div><span>6</span><p><strong>Katasterwert und Bewertungsjahr prüfen:</strong> beides ist für IBI und die IRNR-Eigennutzung wichtig.</p></div>
              <div><span>7</span><p><strong>Laufende Kosten budgetieren:</strong> IBI, IRNR/Modelo 210, Gemeinschaftskosten, Versicherung und gegebenenfalls lokale Abgaben.</p></div>
              <div><span>8</span><p><strong>Vermietungsstrategie vor dem Kauf festlegen:</strong> Steuerregeln, Dokumentation und lokale Ferienvermietungsregeln können die Kalkulation verändern.</p></div>
              <div><span>9</span><p><strong>Belege dauerhaft aufbewahren:</strong> Kaufnebenkosten, Modernisierungen und Verkaufsaufwendungen können bei späterer Gewinnermittlung wichtig werden.</p></div>
              <div><span>10</span><p><strong>Deutsche Zehnjahresfrist mitdenken:</strong> ein späterer Verkauf kann § 23 EStG auslösen; Eigennutzungsausnahmen separat prüfen.</p></div>
            </div>
          </section>

          <section className="decision-box" aria-labelledby="entscheidungslogik">
            <h2 id="entscheidungslogik">Die steuerliche Entscheidungslogik in 60 Sekunden</h2>
            <ol>
              <li><strong>Kaufen:</strong> Ist es Neubau oder gebraucht? → IVA oder ITP; Region und AJD prüfen.</li>
              <li><strong>Besitzen:</strong> Katasterwert sichern → IBI und bei Nichtresidenten mögliche IRNR-Eigennutzung berechnen.</li>
              <li><strong>Vermieten:</strong> spanische Mieteinkünfte erklären → 19-%-EU-Satz und zulässige Kosten prüfen.</li>
              <li><strong>Deutschland:</strong> Einkünfte/Verkauf nach deutschem Recht berechnen → DBA-Anrechnung korrekt anwenden.</li>
              <li><strong>Verkaufen:</strong> spanischen Gewinn plus 3-%-Einbehalt und deutsche §-23-Frist gleichzeitig planen.</li>
              <li><strong>Länger in Spanien leben:</strong> 183 Tage, wirtschaftliche Interessen und DBA-Ansässigkeit neu prüfen.</li>
            </ol>
          </section>

          <section id="faq">
            <h2>10. Häufige Fragen deutscher Käufer</h2>

            <details>
              <summary>Muss ich in Spanien Steuern zahlen, wenn ich meine Ferienwohnung nie vermiete?</summary>
              <p>
                In vielen Fällen ja. Neben der kommunalen IBI kann bei einem nichtresidenten Eigentümer
                IRNR auf eine fiktive Eigennutzungsrendite anfallen. Die Erklärung erfolgt typischerweise
                über Modelo 210.
              </p>
            </details>

            <details>
              <summary>Wie hoch ist die Steuer beim Hauskauf in Spanien für Deutsche?</summary>
              <p>
                Es gibt keinen einzigen Satz für jeden Kauf. Bei einer neuen Wohnimmobilie gilt im
                spanischen IVA-Gebiet grundsätzlich 10 % IVA. Bei gebrauchten Immobilien fällt ITP an,
                dessen Tarif von der Autonomen Gemeinschaft abhängt. AJD und Sonderregime wie auf den
                Kanaren müssen zusätzlich geprüft werden.
              </p>
            </details>

            <details>
              <summary>Was ist Modelo 210?</summary>
              <p>
                Modelo 210 ist das spanische Erklärungsformular für verschiedene Einkünfte von
                Nichtresidenten ohne Betriebsstätte. Für Immobilienbesitzer ist es unter anderem bei
                fiktiver Eigennutzung, Vermietung und bestimmten Veräußerungssachverhalten relevant.
              </p>
            </details>

            <details>
              <summary>Muss ich spanische Mieteinnahmen auch in Deutschland erklären?</summary>
              <p>
                Wenn Sie in Deutschland steuerlich ansässig sind, müssen die deutschen Steuerregeln und
                das DBA Deutschland–Spanien mitbetrachtet werden. Das DBA lässt Spanien die
                Immobilienerträge besteuern und sieht für die typischen Immobilienerträge einer in
                Deutschland ansässigen Person grundsätzlich eine Anrechnung der spanischen Steuer nach
                deutschem Recht vor.
              </p>
            </details>

            <details>
              <summary>Sind die 3 % beim Verkauf die spanische Gewinnsteuer?</summary>
              <p>
                Nein. Die 3 % des vereinbarten Kaufpreises sind grundsätzlich ein vom Käufer
                einzubehaltender Vorauszahlungsbetrag, wenn der Verkäufer nichtresident ist. Die
                endgültige Steuer auf den tatsächlichen steuerpflichtigen Veräußerungsgewinn wird separat
                ermittelt.
              </p>
            </details>

            <details>
              <summary>Bin ich automatisch in Spanien steuerpflichtig, sobald ich dort ein Haus besitze?</summary>
              <p>
                Sie können als Nichtresident mit der Immobilie spanische Steuerpflichten haben, ohne
                spanischer Steuerresident zu sein. Für die steuerliche Ansässigkeit gelten andere Tests,
                darunter die 183-Tage-Regel und der Schwerpunkt wirtschaftlicher Interessen.
              </p>
            </details>

            <details>
              <summary>Reichen weniger als 183 Tage in Spanien aus, um sicher in Deutschland steuerlich ansässig zu bleiben?</summary>
              <p>
                Nicht zwingend. Spanien berücksichtigt neben der Aufenthaltsdauer auch den Schwerpunkt
                wirtschaftlicher Interessen; bei konkurrierender Ansässigkeit enthält das DBA weitere
                Kriterien wie Wohnstätte und Mittelpunkt der Lebensinteressen.
              </p>
            </details>
          </section>

          <section id="quellen" className="sources-section">
            <h2>11. Offizielle Quellen und Rechtsgrundlagen</h2>
            <p>
              Für steuerliche Inhalte wurden bewusst Behörden- und Gesetzesquellen priorisiert. Prüfen Sie
              vor einer Transaktion stets die aktuellste Fassung und die Regeln Ihrer Autonomen
              Gemeinschaft bzw. Gemeinde.
            </p>
            <ul>
              <li><a href={sources.purchase} target="_blank" rel="noopener noreferrer">Agencia Tributaria: IVA oder ITP beim Kauf einer Wohnung</a></li>
              <li><a href={sources.imputed} target="_blank" rel="noopener noreferrer">Agencia Tributaria: IRNR bei selbst genutzter Immobilie</a></li>
              <li><a href={sources.rental} target="_blank" rel="noopener noreferrer">Agencia Tributaria: Einkünfte aus Vermietung durch Nichtresidenten</a></li>
              <li><a href={sources.model210} target="_blank" rel="noopener noreferrer">Agencia Tributaria: Modelo 210 – Erklärungs- und Zahlungsfristen</a></li>
              <li><a href={sources.sale} target="_blank" rel="noopener noreferrer">Agencia Tributaria: Veräußerungsgewinn und 3-%-Einbehalt</a></li>
              <li><a href={sources.residence} target="_blank" rel="noopener noreferrer">Agencia Tributaria: steuerliche Ansässigkeit in Spanien</a></li>
              <li><a href={sources.wealth} target="_blank" rel="noopener noreferrer">Agencia Tributaria: Vermögensteuer für Nichtresidenten</a></li>
              <li><a href={sources.solidarity} target="_blank" rel="noopener noreferrer">Agencia Tributaria: Modelo 718 / Solidaritätssteuer auf große Vermögen</a></li>
              <li><a href={sources.cadastral} target="_blank" rel="noopener noreferrer">Dirección General del Catastro: IBI und steuerliche Nutzung des Katasterwerts</a></li>
              <li><a href={sources.nie} target="_blank" rel="noopener noreferrer">Ministerio del Interior: Número de Identidad de Extranjero (NIE)</a></li>
              <li><a href={sources.dta} target="_blank" rel="noopener noreferrer">Bundesfinanzministerium: DBA Deutschland–Spanien, synthetisierter Text</a></li>
              <li><a href={sources.estg21} target="_blank" rel="noopener noreferrer">Bundesministerium der Justiz / gesetze-im-internet.de: § 21 EStG</a></li>
              <li><a href={sources.estg23} target="_blank" rel="noopener noreferrer">Bundesministerium der Justiz / gesetze-im-internet.de: § 23 EStG</a></li>
            </ul>
          </section>

          <footer className="article-footer">
            <p>
              <strong>Redaktioneller Stand:</strong> 14. August 2026. Bei Kauf, Vermietung, Umzug oder
              Verkauf einer Spanien-Immobilie empfiehlt sich eine abgestimmte Beratung mit Kenntnis des
              spanischen und deutschen Steuerrechts.
            </p>
          </footer>
        </article>
      </main>

      <style>{`
        :root {
          --guide-ink: #182026;
          --guide-muted: #5d6871;
          --guide-line: #dfe5e8;
          --guide-soft: #f5f7f7;
          --guide-accent: #8a3d22;
          --guide-accent-soft: #fff4ef;
          --guide-info: #eef5f7;
          --guide-max: 1120px;
        }

        .tax-guide {
          background: #fff;
          color: var(--guide-ink);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          line-height: 1.72;
        }

        .tax-guide article {
          width: min(calc(100% - 32px), var(--guide-max));
          margin: 0 auto;
          padding: 56px 0 80px;
        }

        .hero {
          max-width: 900px;
          padding: 28px 0 34px;
        }

        .breadcrumbs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
          color: var(--guide-muted);
          font-size: .9rem;
        }

        .breadcrumbs a,
        .tax-guide a {
          color: var(--guide-accent);
          text-underline-offset: 3px;
        }

        .eyebrow {
          margin: 0 0 10px;
          color: var(--guide-accent);
          font-size: .84rem;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .tax-guide h1,
        .tax-guide h2,
        .tax-guide h3 {
          color: #11181d;
          line-height: 1.18;
          letter-spacing: -.025em;
        }

        .tax-guide h1 {
          max-width: 900px;
          margin: 0;
          font-size: clamp(2.35rem, 6vw, 4.7rem);
        }

        .tax-guide h2 {
          margin: 0 0 18px;
          font-size: clamp(1.75rem, 3.5vw, 2.55rem);
          scroll-margin-top: 24px;
        }

        .tax-guide h3 {
          margin: 36px 0 12px;
          font-size: 1.32rem;
        }

        .lead {
          margin: 26px 0 16px;
          max-width: 850px;
          color: #344049;
          font-size: clamp(1.12rem, 2vw, 1.3rem);
          line-height: 1.65;
        }

        .review-line {
          color: var(--guide-muted);
          font-size: .92rem;
        }

        .disclaimer,
        .callout,
        .example,
        .decision-box {
          border: 1px solid var(--guide-line);
          border-radius: 18px;
        }

        .disclaimer {
          margin: 4px 0 34px;
          padding: 18px 22px;
          background: var(--guide-soft);
          color: #43505a;
          font-size: .95rem;
        }

        .quick-answer {
          margin: 0 0 34px;
          padding: clamp(24px, 4vw, 38px);
          border-radius: 24px;
          background: #141b20;
          color: #f5f7f8;
        }

        .quick-answer h2 {
          color: #fff;
        }

        .quick-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1px;
          overflow: hidden;
          border: 1px solid #39444c;
          border-radius: 16px;
          background: #39444c;
        }

        .quick-grid > div {
          padding: 22px;
          background: #1b242b;
        }

        .quick-grid strong {
          color: #fff;
          font-size: 1.05rem;
        }

        .quick-grid p {
          margin: 8px 0 0;
          color: #d8e0e4;
          font-size: .96rem;
        }

        .toc {
          margin: 0 0 54px;
          padding: 24px 28px;
          border: 1px solid var(--guide-line);
          border-radius: 18px;
          background: #fff;
        }

        .toc > strong {
          display: block;
          margin-bottom: 8px;
          font-size: 1.1rem;
        }

        .toc ol {
          columns: 2;
          column-gap: 42px;
          margin: 0;
          padding-left: 20px;
        }

        .toc li {
          break-inside: avoid;
          margin: 6px 0;
        }

        .tax-guide section:not(.quick-answer):not(.decision-box):not(.sources-section) {
          max-width: 860px;
          margin: 0 0 68px;
        }

        .tax-guide p {
          margin: 0 0 18px;
        }

        .table-wrap {
          max-width: 100%;
          margin: 28px 0;
          overflow-x: auto;
          border: 1px solid var(--guide-line);
          border-radius: 16px;
        }

        .tax-guide table {
          width: 100%;
          min-width: 700px;
          border-collapse: collapse;
          background: #fff;
        }

        .tax-guide th,
        .tax-guide td {
          padding: 16px 18px;
          border-bottom: 1px solid var(--guide-line);
          text-align: left;
          vertical-align: top;
        }

        .tax-guide th {
          background: var(--guide-soft);
          font-size: .9rem;
          letter-spacing: .02em;
        }

        .tax-guide tr:last-child td {
          border-bottom: 0;
        }

        .callout {
          margin: 26px 0;
          padding: 20px 22px;
          border-left: 5px solid var(--guide-accent);
          background: var(--guide-accent-soft);
        }

        .callout.warning {
          background: #fff9e9;
          border-left-color: #9a6a10;
        }

        .facts-list {
          margin: 22px 0 28px;
          padding-left: 24px;
        }

        .facts-list li {
          margin: 12px 0;
        }

        .example {
          margin: 30px 0;
          padding: 24px 26px;
          background: var(--guide-info);
        }

        .example h3 {
          margin-top: 0;
        }

        .formula {
          margin: 8px 0 !important;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 1.05rem;
          font-weight: 750;
        }

        .source-note {
          margin-top: 28px !important;
          padding-top: 14px;
          border-top: 1px dashed var(--guide-line);
          color: var(--guide-muted);
          font-size: .86rem;
        }

        .checklist {
          display: grid;
          gap: 12px;
        }

        .checklist > div {
          display: grid;
          grid-template-columns: 38px 1fr;
          gap: 14px;
          align-items: start;
          padding: 14px 0;
          border-bottom: 1px solid var(--guide-line);
        }

        .checklist span {
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          border-radius: 999px;
          background: #172027;
          color: #fff;
          font-weight: 800;
        }

        .checklist p {
          margin: 3px 0 0;
        }

        .decision-box {
          max-width: 920px;
          margin: 0 0 68px;
          padding: clamp(24px, 4vw, 36px);
          background: var(--guide-soft);
        }

        .decision-box ol {
          margin: 0;
          padding-left: 22px;
        }

        .decision-box li {
          margin: 12px 0;
        }

        #faq details {
          border-top: 1px solid var(--guide-line);
        }

        #faq details:last-of-type {
          border-bottom: 1px solid var(--guide-line);
        }

        #faq summary {
          cursor: pointer;
          padding: 19px 2px;
          font-weight: 760;
          line-height: 1.35;
        }

        #faq details p {
          padding: 0 2px 20px;
          color: #414d55;
        }

        .sources-section {
          max-width: 920px;
          margin: 0 0 48px;
          padding: clamp(24px, 4vw, 36px);
          border-radius: 22px;
          background: #11181d;
          color: #dbe2e6;
        }

        .sources-section h2 {
          color: #fff;
        }

        .sources-section a {
          color: #ffd4c4;
          overflow-wrap: anywhere;
        }

        .sources-section li {
          margin: 10px 0;
        }

        .article-footer {
          max-width: 900px;
          padding-top: 28px;
          border-top: 1px solid var(--guide-line);
          color: var(--guide-muted);
          font-size: .94rem;
        }

        @media (max-width: 760px) {
          .tax-guide article {
            width: min(calc(100% - 24px), var(--guide-max));
            padding-top: 24px;
          }

          .quick-grid {
            grid-template-columns: 1fr;
          }

          .toc ol {
            columns: 1;
          }

          .hero {
            padding-top: 12px;
          }
        }

        @media print {
          .tax-guide article {
            width: 100%;
          }

          .toc,
          .breadcrumbs {
            display: none;
          }

          .quick-answer,
          .sources-section {
            background: #fff;
            color: #000;
            border: 1px solid #aaa;
          }

          .quick-answer h2,
          .sources-section h2,
          .quick-grid strong {
            color: #000;
          }

          .quick-grid > div,
          .quick-grid {
            background: #fff;
          }

          .quick-grid p {
            color: #222;
          }
        }
      `}</style>
    </>
  );
}