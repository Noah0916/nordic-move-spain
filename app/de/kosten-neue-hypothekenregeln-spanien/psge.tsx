const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
        alternates: {
          canonical:
            "/de/guides/kosten-vermietung-praktische-pruefungen-vor-kauf",
          languages: {
            "de-DE":
              "/de/guides/kosten-vermietung-praktische-pruefungen-vor-kauf",
            "nl-NL":
              "/nl/guides/costs-rentals-real-life-checks-before-buying",
            en: "/guides/costs-rentals-real-life-checks-before-buying",
            "x-default":
              "/guides/costs-rentals-real-life-checks-before-buying",
          },
        },
      }
    : {}),
  title:
    "Immobilienkauf Spanien 2026: Kosten, Ferienvermietung & Prüfungen | Nordic Move Spain",
  description:
    "Evidenzbasierter Leitfaden für deutsche Käufer an der Costa Blanca: Kaufnebenkosten 2026, ITP, IVA, AJD, Ferienvermietung, Eigentümergemeinschaft, technische und rechtliche Due Diligence sowie Unterschiede zu Deutschland.",
  applicationName: "Nordic Move Spain",
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Immobilienkauf und Relocation",
  keywords: [
    "Immobilie Spanien kaufen Kosten 2026",
    "Haus kaufen Costa Blanca Nebenkosten",
    "Immobilienkauf Spanien deutsche Käufer",
    "Ferienvermietung Costa Blanca Regeln 2026",
    "Vermietung Ferienwohnung Valencia Spanien",
    "ITP Valencia 2026",
    "IVA AJD Neubau Spanien",
    "Due Diligence Immobilie Spanien",
    "Baugutachter Costa Blanca",
    "Eigentümergemeinschaft Spanien Ferienvermietung",
    "Hauskauf Spanien Deutschland Unterschiede",
    "Costa Blanca Immobilien prüfen vor Kauf",
    "Dénia Ferienwohnung Regeln 2026",
    "Javea Immobilie kaufen prüfen",
    "Moraira Immobilie kaufen Deutschland",
  ],
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
    title:
      "Immobilienkauf Spanien 2026: Kosten, Vermietung & Prüfungen",
    description:
      "Was deutsche Käufer vor dem Kauf an der Costa Blanca prüfen sollten: Steuern, Ferienvermietung, Gemeinschaftsregeln, Register, Bauzustand und die wichtigsten Unterschiede zu Deutschland.",
    type: "article",
    locale: "de_DE",
    siteName: "Nordic Move Spain",
    ...(siteUrl
      ? {
          url: "/de/guides/kosten-vermietung-praktische-pruefungen-vor-kauf",
          images: [
            {
              url: "/images/laatste-homepage.png",
              alt: "Immobilienkauf an der Costa Blanca mit unabhängigen rechtlichen und technischen Prüfungen",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Immobilienkauf Spanien 2026: Kosten, Ferienvermietung & Prüfungen",
    description:
      "Evidenzbasierter Leitfaden für deutsche Käufer an der Costa Blanca mit aktuellen Regeln, Kosten und Due-Diligence-Checks.",
    ...(siteUrl ? { images: ["/images/laatste-homepage.png"] } : {}),
  },
};

const lastReviewed = "29. Juli 2026";

const keyFacts = [
  {
    label: "Bestandsimmobilie · Comunitat Valenciana",
    value: "9 % ITP",
    text:
      "Seit 1. Juni 2026 gilt grundsätzlich ein ITP-Satz von 9 %. Liegt der relevante Immobilienwert über 1 Mio. €, beträgt der gesetzliche Satz grundsätzlich 11 %, sofern kein Sondertatbestand greift.",
  },
  {
    label: "Neubau",
    value: "10 % IVA + regelmäßig AJD",
    text:
      "Bei neuen Wohnimmobilien fällt regelmäßig 10 % spanische Umsatzsteuer (IVA) an. In der Comunitat Valenciana beträgt der allgemeine AJD-Satz seit 1. Juni 2026 grundsätzlich 1,4 %, vorbehaltlich spezieller Begünstigungen oder Sonderfälle.",
  },
  {
    label: "Touristische Kurzzeitvermietung · Valencia",
    value: "≤ 10 Tage",
    text:
      "Als touristische Wohnnutzung gelten in der Comunitat Valenciana grundsätzlich entgeltliche touristische Überlassungen der vollständigen Wohnung von höchstens 10 aufeinanderfolgenden Tagen an denselben Gast.",
  },
  {
    label: "Eigentümergemeinschaft",
    value: "3/5-Mehrheit",
    text:
      "Für eine neu begonnene touristische Vermietung in Gebäuden nach spanischem Wohnungseigentumsrecht ist seit 3. April 2025 grundsätzlich eine ausdrückliche Zustimmung der Eigentümergemeinschaft mit der gesetzlich vorgesehenen 3/5-Mehrheit erforderlich.",
  },
];

const comparisonRows = [
  {
    topic: "Rolle des Notars",
    germany:
      "Der Immobilienkaufvertrag muss notariell beurkundet werden. Der Notar ist neutral, prüft das Grundbuch und steuert regelmäßig Sicherungsschritte wie Vormerkung und Kaufpreisfälligkeit.",
    spain:
      "Auch in Spanien ist die notarielle Urkunde für die Eigentumsübertragung zentral. Deutsche Käufer sollten jedoch nicht voraussetzen, dass der spanische Notar dieselbe käuferseitige Due-Diligence- und Abwicklungsfunktion wie im deutschen Standardprozess übernimmt. Unabhängige anwaltliche und technische Prüfungen sollten vor einer bindenden Verpflichtung erfolgen.",
  },
  {
    topic: "Kaufpreiszahlung",
    germany:
      "Typischerweise erst nach notarieller Fälligkeitsmitteilung, wenn die vertraglich vorgesehenen Sicherungsvoraussetzungen erfüllt sind.",
    spain:
      "Reservierungs- und Arras-Zahlungen können deutlich früher verlangt werden. Deshalb müssen Bedingungen, Rücktrittsrechte, Finanzierung und Due Diligence vor Zahlung und Unterschrift sauber geregelt sein.",
  },
  {
    topic: "Grundbuch / Register",
    germany:
      "Grundbuch ist Kern des Eigentumsnachweises; der Notar organisiert typischerweise die Eintragungsschritte.",
    spain:
      "Das Registro de la Propiedad zeigt Eigentümer und eingetragene Belastungen. Zusätzlich sind Catastro, tatsächlicher Bauzustand, Genehmigungen und ggf. kommunale Akten relevant. Register- und Realitätssituation können voneinander abweichen.",
  },
  {
    topic: "Erwerbssteuer",
    germany:
      "Die Grunderwerbsteuer beträgt je nach Bundesland derzeit 3,5 % bis 6,5 %.",
    spain:
      "Die Steuer hängt von Region und Objektart ab. In der Comunitat Valenciana gelten für viele Bestandskäufe seit 1. Juni 2026 9 % ITP, bei einem relevanten Wert über 1 Mio. € grundsätzlich 11 %. Neubau wird anders besteuert.",
  },
  {
    topic: "Wohnungseigentum",
    germany:
      "Teilungserklärung, Gemeinschaftsordnung, Hausgeld, Rücklage und Beschlusssammlung sind wichtige Prüfunterlagen.",
    spain:
      "Statuten, Protokolle, Gemeinschaftsschulden, Sonderumlagen und Beschlüsse der comunidad de propietarios müssen geprüft werden. Für touristische Vermietung gelten seit 2025 zusätzliche Zustimmungsregeln.",
  },
  {
    topic: "Technische Prüfung",
    germany:
      "Eine umfassende technische Begutachtung ist trotz Notar nicht automatisch Teil des Kaufprozesses.",
    spain:
      "Ebenfalls nicht automatisch. An der Costa Blanca ist eine unabhängige Vermessungs- und Zustandsprüfung besonders sinnvoll, um Anbauten, Pool, Terrassen, Stützmauern, Feuchte, Dach, Haustechnik und Abweichungen zu Unterlagen zu erkennen.",
  },
];

const dueDiligence = [
  {
    number: "01",
    title: "Eigentum und Belastungen",
    text:
      "Aktuelle Nota Simple aus dem Registro de la Propiedad prüfen: Eigentümer, Hypotheken, Nießbrauch, Dienstbarkeiten, Pfändungen, Verfügungsbeschränkungen und registrierte Beschreibung.",
  },
  {
    number: "02",
    title: "Catastro und tatsächliche Geometrie",
    text:
      "Katasterreferenz, Flächen, Grundstücksgrenzen und vorhandene Baukörper mit der Realität vergleichen. Abweichungen sind nicht automatisch ein Kaufverbot, müssen aber erklärt, bewertet und gegebenenfalls regularisiert werden.",
  },
  {
    number: "03",
    title: "Baugenehmigungen und Nutzbarkeit",
    text:
      "Anbauten, Pool, Pergolen, Garagen, Terrassen, Keller, Gästehäuser und Nutzungsänderungen darauf prüfen, ob sie genehmigt, registriert und rechtlich nutzbar sind. Bei älteren Gebäuden kann die Dokumentationslage komplex sein.",
  },
  {
    number: "04",
    title: "Technischer Zustand",
    text:
      "Unabhängige technische Inspektion durch einen qualifizierten Fachmann: Dach, Feuchte, Risse, Abdichtung, Stützmauern, Entwässerung, Elektrik, Wasser, Klimaanlage, Pooltechnik und erkennbare Umbauten.",
  },
  {
    number: "05",
    title: "Eigentümergemeinschaft",
    text:
      "Statuten, aktuelle Protokolle, Gemeinschaftskosten, Rückstände des Verkäufers, beschlossene oder absehbare Sonderumlagen sowie Regeln zu Vermietung, Haustieren, Umbauten und gemeinschaftlichen Bereichen prüfen.",
  },
  {
    number: "06",
    title: "Vermietbarkeit nicht vermuten",
    text:
      "Wenn Ferienvermietung Teil der Kalkulation ist, muss die konkrete Adresse geprüft werden: kommunale Kompatibilität, regionale Registrierung, Gemeinschaftszustimmung und aktuell geltende nationale Plattform- oder Registrierungsanforderungen.",
  },
  {
    number: "07",
    title: "Mikrolage in der Realität",
    text:
      "Lärm, Verkehr, Baustellen, Hanglage, Zufahrt, Parken, Wintersonne, Hochwasser- oder Starkregenrisiken, Nachbarschaft, Mobilfunk, Internet und Versorgung zu unterschiedlichen Tages- und Jahreszeiten beurteilen.",
  },
  {
    number: "08",
    title: "Gesamtkosten und Exit-Szenario",
    text:
      "Nicht nur Kaufpreis und Steuer rechnen. Auch Notar, Register, Anwalt, technische Prüfung, Finanzierung, Versicherung, Gemeinschaft, IBI, Abfallgebühren, Wartung, Renovierung und künftige Verkaufskosten einplanen.",
  },
];

const practicalChecks = [
  "Wie viele Stunden direkte Sonne erhält Terrasse oder Pool im Dezember und Januar?",
  "Ist die Zufahrt mit einem normalen Pkw komfortabel oder extrem steil, eng oder rutschig?",
  "Gibt es in der Nähe unbebaute Grundstücke, auf denen zukünftig gebaut werden könnte?",
  "Sind Straßenlärm, Gastronomie, Hunde, Feriengäste oder Lieferverkehr morgens und abends hörbar?",
  "Wie weit sind Supermarkt, Apotheke, Gesundheitszentrum und Restaurants außerhalb der Hochsaison wirklich entfernt?",
  "Sind Pool, Außendusche, Sommerküche, Carport, Pergola und Anbauten in den Unterlagen nachvollziehbar?",
  "Sind Stützmauern, Terrassen und Entwässerung nach Starkregen technisch plausibel?",
  "Welche Investitionen plant die Eigentümergemeinschaft in Fassade, Aufzug, Pool, Dach oder Tiefgarage?",
  "Passt das Haus zu dauerhaftem Wohnen, Überwintern, Feriennutzung oder späterem Ruhestand – nicht nur zu einer Besichtigung im Mai?",
  "Wenn Vermietung geplant ist: Ist sie heute rechtlich möglich und bleibt die Kalkulation auch ohne touristische Vermietung tragfähig?",
];

const faqItems = [
  {
    question:
      "Wie hoch sind die Kaufnebenkosten für eine Bestandsimmobilie an der Costa Blanca 2026?",
    answer:
      "In der Comunitat Valenciana beträgt die ITP für viele Bestandsimmobilien seit 1. Juni 2026 grundsätzlich 9 %. Bei einem relevanten Immobilienwert über 1 Mio. € beträgt der gesetzliche Satz grundsätzlich 11 %, sofern kein Sondertarif greift. Hinzu kommen unter anderem Notar, Grundbuch, anwaltliche und technische Prüfung sowie gegebenenfalls Finanzierungs- und Verwaltungskosten. Die individuelle Gesamtsumme sollte vor Reservierung objektbezogen berechnet werden.",
  },
  {
    question:
      "Welche Steuern fallen bei einem Neubau in Spanien an?",
    answer:
      "Beim Erstverkauf einer neuen Wohnimmobilie gilt regelmäßig 10 % IVA. Zusätzlich kann AJD anfallen; in der Comunitat Valenciana beträgt der allgemeine AJD-Satz seit 1. Juni 2026 grundsätzlich 1,4 %, vorbehaltlich spezieller Ausnahmen oder Begünstigungen.",
  },
  {
    question:
      "Darf ich eine gekaufte Wohnung an der Costa Blanca über Airbnb oder Booking vermieten?",
    answer:
      "Nicht automatisch. In der Comunitat Valenciana müssen regionale, kommunale und bei Wohnungseigentum gemeinschaftsrechtliche Voraussetzungen erfüllt sein. Seit 3. April 2025 ist für neu aufgenommene touristische Vermietung in einer Eigentümergemeinschaft grundsätzlich eine ausdrückliche Zustimmung mit der gesetzlich vorgesehenen 3/5-Mehrheit erforderlich. Zusätzlich können Gemeinden die touristische Nutzung zonieren, begrenzen oder vorübergehend aussetzen.",
  },
  {
    question:
      "Ist eine bestehende Tourismuslizenz beim Kauf automatisch übertragbar?",
    answer:
      "Darauf sollte man sich nicht verlassen. Eigentümerwechsel, Betreiberwechsel, kommunale Kompatibilität, Registrierung und die konkrete Übergangsregelung müssen für die jeweilige Immobilie geprüft werden. Die valencianische Registrierung touristischer Wohnungen hat grundsätzlich eine Gültigkeit von fünf Jahren und setzt bestimmte aktuelle Voraussetzungen voraus.",
  },
  {
    question:
      "Was ist der wichtigste Unterschied zwischen einem Immobilienkauf in Deutschland und Spanien?",
    answer:
      "Deutsche Käufer sind häufig an einen stark notariell gesteuerten Ablauf mit Vormerkung und Fälligkeitsmitteilung gewöhnt. In Spanien können Reservierungs- oder Arras-Verträge schon früh erhebliche Bindungswirkung und Zahlungsfolgen haben. Deshalb sollten rechtliche und technische Due Diligence sowie klare Rücktritts- und Finanzierungsbedingungen vor einer bindenden Verpflichtung organisiert werden.",
  },
  {
    question:
      "Brauche ich in Spanien zusätzlich zum Anwalt einen Baugutachter?",
    answer:
      "Für einen belastbaren Kaufentscheid sind die Aufgaben verschieden. Der Anwalt prüft rechtliche Aspekte; ein unabhängiger technischer Fachmann beurteilt Gebäudezustand, sichtbare Mängel, Maße und mögliche Abweichungen zur dokumentierten Situation. Eine rechtliche Prüfung ersetzt keine technische und umgekehrt.",
  },
  {
    question:
      "Was passiert, wenn der Verkäufer in Spanien nicht steuerlich ansässig ist?",
    answer:
      "Beim Kauf einer spanischen Immobilie von einem nicht in Spanien ansässigen Verkäufer muss der Käufer grundsätzlich 3 % der vereinbarten Gegenleistung einbehalten und über Modelo 211 als Vorauszahlung auf die Steuer des Verkäufers abführen. Das sollte in der Abwicklung ausdrücklich berücksichtigt werden.",
  },
  {
    question:
      "Warum ist der Valor de Referencia beim Kauf wichtig?",
    answer:
      "Der vom spanischen Kataster ermittelte Referenzwert dient unter anderem zur Bestimmung der Bemessungsgrundlage bei ITP und AJD. Deshalb sollte er vor der Kalkulation der Erwerbssteuer geprüft werden; der im Vertrag genannte Kaufpreis ist nicht in jedem Fall die einzige relevante Größe.",
  },
];

const sourceLinks = [
  {
    tag: "Spanien · Erwerbssteuer",
    title:
      "BOE — Ley 5/2025: ITP 9 %, 11 % über 1 Mio. € und AJD ab 1. Juni 2026",
    href: "https://www.boe.es/buscar/doc.php?id=BOE-A-2025-11959",
  },
  {
    tag: "Spanien · Neubau",
    title: "Agencia Tributaria — IVA oder ITP beim Wohnungskauf",
    href:
      "https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
  },
  {
    tag: "Spanien · Steuerwert",
    title: "Catastro — FAQ zum Valor de Referencia",
    href: "https://www.catastro.hacienda.gob.es/es-ES/faqs.html",
  },
  {
    tag: "Spanien · Grundbuch",
    title: "Colegio de Registradores — Nota Simple und Registro de la Propiedad",
    href: "https://sede.registradores.org/site/propiedad?lang=es",
  },
  {
    tag: "Valencia · Ferienvermietung",
    title:
      "Generalitat Valenciana — Registrierung touristischer Wohnungen, Voraussetzungen und 5-Jahres-Gültigkeit",
    href: "https://sede.gva.es/es/detall-tramit?id_proc=19207",
  },
  {
    tag: "Valencia · Ferienvermietung",
    title:
      "DOGV — Decreto Ley 9/2024: Definition touristischer Wohnung und 10-Tage-Grenze",
    href: "https://dogv.gva.es/datos/2024/08/07/pdf/2024_8209_es.pdf",
  },
  {
    tag: "Spanien · Eigentümergemeinschaft",
    title:
      "BOE — Anwendung der 3/5-Zustimmung für touristische Vermietung ab 3. April 2025",
    href: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-21876",
  },
  {
    tag: "Dénia · 2026",
    title:
      "Ayuntamiento de Dénia — zunächst beschlossene neue VUT-Regulierung vom Juni 2026",
    href: "https://www.denia.es/es/denia/actualitat/noticia.aspx?id=7702",
  },
  {
    tag: "Spanien · Kurzzeitvermietung",
    title:
      "BOE — konsolidierter Stand des Real Decreto 1312/2024 nach Urteilen des Tribunal Supremo 2026",
    href:
      "https://www.boe.es/buscar/act.php?id=BOE-A-2024-26931&lang=es&p=&tn=1",
  },
  {
    tag: "Spanien · Energie",
    title:
      "BOE — Real Decreto 390/2021 zur Energieeffizienz-Zertifizierung",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-2021-9176",
  },
  {
    tag: "Spanien · Nichtresidenten",
    title:
      "Agencia Tributaria — 3-%-Einbehalt beim Kauf von einem nichtresidenten Verkäufer",
    href:
      "https://sede.agenciatributaria.gob.es/Sede/no-residentes/irnr-sin-establecimiento-permanente/retenciones-irnr-sin-establecimiento-permanente/retencion-adquirente-inmueble.html",
  },
  {
    tag: "Spanien · Hypothek",
    title:
      "Banco de España — Verteilung der Kosten bei spanischen Hypothekendarlehen",
    href:
      "https://clientebancario.bde.es/pcb/es/blog/que-gastos-te-toca-pagar-cuando-contratas-una-hipoteca-.html",
  },
  {
    tag: "Deutschland · Notar",
    title: "Notar.de — Rolle des Notars beim Immobilienkauf",
    href: "https://www.notar.de/themen/immobilien",
  },
  {
    tag: "Deutschland · Kaufpreis",
    title: "Notar.de — Kaufpreisfälligkeit und Auflassungsvormerkung",
    href: "https://www.notar.de/themen/immobilien/kaufpreisfaelligkeit",
  },
  {
    tag: "Deutschland · Erwerbssteuer",
    title:
      "Bundesministerium der Finanzen — Steuern von A–Z, Grunderwerbsteuer",
    href:
      "https://www.bundesfinanzministerium.de/Content/DE/Downloads/Broschueren_Bestellservice/steuern-von-a-z.pdf?__blob=publicationFile&v=8",
  },
  {
    tag: "Deutschland · Makler",
    title: "BGB § 656c — Maklerlohn bei Tätigkeit für beide Parteien",
    href: "https://www.gesetze-im-internet.de/bgb/__656c.html",
  },
];

export default function KostenVermietungPruefungenVorKaufPage() {
  const articleUrl = siteUrl
    ? `${siteUrl}/de/guides/kosten-vermietung-praktische-pruefungen-vor-kauf`
    : undefined;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": articleUrl ? `${articleUrl}#article` : "#article",
        headline:
          "Immobilienkauf in Spanien 2026: Kosten, Ferienvermietung und praktische Prüfungen vor dem Kauf",
        description:
          "Evidenzbasierter Leitfaden für deutsche Immobilienkäufer an der Costa Blanca zu Kaufnebenkosten, Ferienvermietung, technischer und rechtlicher Due Diligence sowie Unterschieden zu Deutschland.",
        inLanguage: "de-DE",
        dateModified: "2026-07-29",
        datePublished: "2026-07-29",
        author: {
          "@type": "Organization",
          name: "Nordic Move Spain",
        },
        publisher: {
          "@type": "Organization",
          name: "Nordic Move Spain",
        },
        ...(articleUrl ? { mainEntityOfPage: articleUrl } : {}),
        about: [
          "Immobilienkauf in Spanien",
          "Costa Blanca",
          "Kaufnebenkosten",
          "Ferienvermietung",
          "Due Diligence",
          "Deutsche Immobilienkäufer",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            ...(siteUrl ? { item: `${siteUrl}/de` } : {}),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Ratgeber",
            ...(siteUrl ? { item: `${siteUrl}/de/guides` } : {}),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Kosten, Vermietung und Prüfungen vor dem Kauf",
            ...(articleUrl ? { item: articleUrl } : {}),
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="bg-[#1e2a3a] px-6 py-24 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Brotkrümelnavigation"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/65"
          >
            <a href="/de" className="transition hover:text-white">
              Startseite
            </a>
            <span aria-hidden="true">/</span>
            <a href="/de/guides" className="transition hover:text-white">
              Ratgeber
            </a>
            <span aria-hidden="true">/</span>
            <span>Kosten, Vermietung &amp; Prüfungen</span>
          </nav>

          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Evidenzbasierter Käuferleitfaden · Stand {lastReviewed}
          </p>

          <h1 className="mt-6 max-w-6xl font-serif text-5xl leading-tight md:text-7xl">
            Immobilienkauf in Spanien 2026: Kosten, Ferienvermietung und
            Prüfungen vor dem Kauf.
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/80">
            Was deutsche Käufer an der Costa Blanca vor Reservierung,
            Arras-Vertrag und Notartermin tatsächlich prüfen sollten – mit
            aktuellen Steuerdaten, Vermietungsregeln, amtlichen Quellen und den
            wichtigsten Unterschieden zum deutschen Immobilienkauf.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/de/services/purchase-safety-report"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Unabhängige Kaufprüfung ansehen
            </a>
            <a
              href="/de/relocation-assessment"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Kostenlose Area Match starten
            </a>
          </div>
        </div>
      </section>

      {/* EDITORIAL STANDARD */}
      <section className="border-b border-stone-200 bg-white/80 px-6 py-8 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9b743d]">
              Datenbasis
            </p>
            <p className="mt-2 leading-relaxed text-stone-700">
              Spanische und deutsche Gesetzestexte, Steuerbehörden, Register,
              Zentralbank und kommunale Quellen.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9b743d]">
              Aktualität
            </p>
            <p className="mt-2 leading-relaxed text-stone-700">
              Rechts- und Quellenstand: {lastReviewed}. Bei dynamischen
              Vermietungsregeln wird ausdrücklich auf Unsicherheiten hingewiesen.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9b743d]">
              Methodik
            </p>
            <p className="mt-2 leading-relaxed text-stone-700">
              Gesetzliche Fakten werden von Planungswerten und praktischen
              Empfehlungen getrennt. Keine individuelle Rechts- oder
              Steuerberatung.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Nicht nur die Immobilie prüfen
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Der Kauf ist ein System aus Recht, Technik, Steuern und
              Alltagstauglichkeit.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              Deutsche Käufer übertragen verständlicherweise vertraute Abläufe
              aus Deutschland auf Spanien. Genau dort entstehen viele
              Fehlannahmen. Ein spanischer Notartermin ersetzt weder eine
              unabhängige technische Gebäudeprüfung noch eine vollständige
              käuferseitige Prüfung von Genehmigungen, Gemeinschaftsregeln,
              Vermietbarkeit und tatsächlichem Bauzustand.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Besonders an der Costa Blanca treffen attraktive
              Bestandsimmobilien auf komplexe Themen: ältere Anbauten,
              unterschiedliche Flächenangaben, Pools oder Terrassen, Hanglagen,
              Eigentümergemeinschaften, lokale Ferienvermietungsregeln und
              regionale Steuern. Eine Immobilie kann wirtschaftlich
              hervorragend sein – oder nur auf den ersten Blick.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Dieser Leitfaden folgt deshalb einem einfachen Prinzip:
              <strong className="font-medium text-[#1e2a3a]">
                {" "}
                Erst nachprüfbare Fakten, dann Kaufentscheidung.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="px-6 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Fakten 2026
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Vier Zahlen, die Käufer kennen sollten.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {keyFacts.map((item) => (
              <article
                key={item.label}
                className="rounded-[30px] bg-white p-8 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.23em] text-[#9b743d]">
                  {item.label}
                </p>
                <p className="mt-5 font-serif text-4xl text-[#1e2a3a]">
                  {item.value}
                </p>
                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-stone-500">
            Die genannten Steuersätze sind gesetzliche Regelsätze und keine
            individuelle Steuerberechnung. Ermäßigungen, Sondertatbestände,
            Hauptwohnsitzregelungen oder persönliche Voraussetzungen können das
            Ergebnis verändern.
          </p>
        </div>
      </section>

      {/* GERMANY VS SPAIN */}
      <section className="bg-[#e9dfd2] px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              Deutschland vs. Spanien
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Die größten Unterschiede liegen nicht beim Meerblick, sondern im
              Prozess.
            </h2>
            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-700">
              Die folgende Gegenüberstellung ist bewusst funktional: Sie zeigt,
              an welchen Stellen deutsche Käufer besonders häufig von ihrem
              heimischen Erfahrungsmuster ausgehen.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[32px] bg-[#f6f1ea] shadow-sm">
            <div className="hidden grid-cols-[0.22fr_0.39fr_0.39fr] border-b border-stone-200 bg-white px-8 py-5 text-sm font-medium uppercase tracking-[0.16em] text-[#1e2a3a] md:grid">
              <div>Thema</div>
              <div>Deutschland</div>
              <div>Spanien / Costa Blanca</div>
            </div>

            {comparisonRows.map((row) => (
              <article
                key={row.topic}
                className="grid gap-5 border-b border-stone-200/80 px-7 py-7 last:border-b-0 md:grid-cols-[0.22fr_0.39fr_0.39fr] md:px-8"
              >
                <h3 className="font-serif text-2xl text-[#1e2a3a]">
                  {row.topic}
                </h3>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#9b743d] md:hidden">
                    Deutschland
                  </p>
                  <p className="leading-relaxed text-stone-700">{row.germany}</p>
                </div>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#9b743d] md:hidden">
                    Spanien
                  </p>
                  <p className="leading-relaxed text-stone-700">{row.spain}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] bg-white p-8">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Warum der deutsche Notarvergleich wichtig ist
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                In Deutschland wird der Kaufpreis regelmäßig erst fällig, wenn
                der Notar die vereinbarten Sicherungsvoraussetzungen geprüft hat.
                Dazu gehört typischerweise die Auflassungsvormerkung. In Spanien
                kann dagegen bereits ein Reservierungs- oder Arras-Vertrag vor
                dem Notartermin wirtschaftlich erheblich sein. Deshalb sollten
                Kaufbedingungen und Due Diligence zeitlich früher organisiert
                werden.
              </p>
              <a
                href="https://www.notar.de/themen/immobilien/kaufpreisfaelligkeit"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-sm font-medium text-[#1e2a3a] underline underline-offset-4"
              >
                Deutsche Notarinformation zur Kaufpreisfälligkeit ↗
              </a>
            </div>

            <div className="rounded-[28px] bg-[#1e2a3a] p-8 text-white">
              <h3 className="font-serif text-3xl">
                Konsequenz für deutsche Käufer
              </h3>
              <p className="mt-5 leading-relaxed text-white/80">
                Behandeln Sie Reservierung und Arras nicht als bloße
                Formalitäten. Vor einer nicht ohne Weiteres rückholbaren Zahlung
                sollten Eigentum, Belastungen, Vertragsbedingungen,
                Finanzierung, technische Risiken und relevante Genehmigungen
                geklärt oder ausdrücklich als Bedingungen im Vertrag abgesichert
                sein.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COSTS */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Kaufnebenkosten 2026
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Der Kaufpreis ist nur die erste Zahl.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Seit 1. Juni 2026 beträgt der allgemeine ITP-Satz in der
                Comunitat Valenciana für viele Immobilienkäufe 9 %. Übersteigt
                der maßgebliche Wert der Immobilie eine Million Euro, sieht das
                Gesetz grundsätzlich 11 % vor. Beim Neubau fällt regelmäßig
                10 % IVA an; zusätzlich ist in der Region grundsätzlich AJD zu
                berücksichtigen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Für eine belastbare Budgetplanung gehören außerdem Notar,
                Grundbuch, unabhängiger Anwalt, technische Inspektion,
                gegebenenfalls Bankbewertung, Finanzierung, Versicherungen,
                Renovierung und eine Liquiditätsreserve in die Rechnung.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[30px] bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                Bestandskauf
              </p>
              <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                ITP statt IVA
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                In der Comunitat Valenciana: allgemeiner Satz seit 1. Juni 2026
                9 %, bei einem maßgeblichen Wert über 1 Mio. € grundsätzlich
                11 %. Sondertarife können unter bestimmten Voraussetzungen
                gelten.
              </p>
            </article>

            <article className="rounded-[30px] bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                Neubau
              </p>
              <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                10 % IVA + AJD
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                Die Agencia Tributaria nennt für neue Wohnimmobilien regelmäßig
                10 % IVA. In der Comunitat Valenciana beträgt der allgemeine
                AJD-Satz seit 1. Juni 2026 grundsätzlich 1,4 %, soweit keine
                spezielle Regelung greift.
              </p>
            </article>

            <article className="rounded-[30px] bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                Steuerbemessung
              </p>
              <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                Valor de Referencia
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                Der Kataster-Referenzwert dient unter anderem der Bestimmung der
                Bemessungsgrundlage bei ITP und AJD. Vor einem Angebot sollte
                geprüft werden, welcher Referenzwert für das konkrete Objekt
                ausgewiesen ist.
              </p>
            </article>
          </div>

          <div className="mt-10 rounded-[34px] border border-[#c8a063]/30 bg-[#fffaf3] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[#9b743d]">
              Käuferhinweis bei nichtresidentem Verkäufer
            </p>
            <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
              3 % des Kaufpreises können vom Käufer einzubehalten sein.
            </h3>
            <p className="mt-5 max-w-4xl leading-relaxed text-stone-700">
              Verkauft eine Person, die in Spanien steuerlich nicht ansässig ist,
              eine spanische Immobilie, muss der Käufer grundsätzlich 3 % der
              vereinbarten Gegenleistung einbehalten und über Modelo 211 an die
              Agencia Tributaria abführen. Dieser Betrag ist eine Vorauszahlung
              auf die Steuer des Verkäufers – kein zusätzlicher Kaufpreisrabatt.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/de/guides/gesamtkosten-immobilienkauf-spanien"
              className="rounded-full border border-[#1e2a3a] px-6 py-3 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Gesamtkosten im Detail →
            </a>
            <a
              href="/de/guides/itp-iva-ajd-einfach-erklaert"
              className="rounded-full border border-[#1e2a3a] px-6 py-3 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              ITP, IVA und AJD erklärt →
            </a>
          </div>
        </div>
      </section>

      {/* DUE DILIGENCE */}
      <section className="bg-[#1e2a3a] px-6 py-28 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Due Diligence vor dem Kauf
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Acht Prüfungen, die wichtiger sind als eine perfekte
              Verkaufsbroschüre.
            </h2>
            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-white/75">
              Keine einzelne Prüfung beantwortet alle Fragen. Rechtliche,
              technische, steuerliche und praktische Risiken liegen in
              unterschiedlichen Fachbereichen und sollten entsprechend getrennt
              geprüft werden.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {dueDiligence.map((item) => (
              <article
                key={item.number}
                className="rounded-[30px] border border-white/12 bg-white/5 p-8"
              >
                <p className="text-sm font-medium tracking-[0.2em] text-[#c8a063]">
                  {item.number}
                </p>
                <h3 className="mt-4 font-serif text-3xl">{item.title}</h3>
                <p className="mt-5 leading-relaxed text-white/75">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[34px] bg-white p-9 text-stone-900 md:p-11">
            <h3 className="font-serif text-4xl text-[#1e2a3a]">
              Juristische und technische Prüfung sind nicht dasselbe.
            </h3>
            <div className="mt-7 grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[#9b743d]">
                  Unabhängiger Immobilienanwalt
                </p>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Prüft unter anderem Eigentum, Belastungen, Verträge,
                  Gemeinschaft, Genehmigungslage, Zahlungsbedingungen und die
                  rechtliche Abwicklung.
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[#9b743d]">
                  Unabhängiger technischer Fachmann
                </p>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Prüft Zustand, sichtbare Mängel, Maße, konstruktive Auffälligkeiten
                  und die Übereinstimmung der sichtbaren Realität mit verfügbaren
                  Plänen und Unterlagen.
                </p>
              </div>
            </div>
            <p className="mt-7 text-sm leading-relaxed text-stone-500">
              Auch eine gute technische Inspektion ist keine zerstörende
              Bauteilöffnung und keine Garantie gegen jeden verdeckten Mangel.
              Bei Auffälligkeiten können zusätzliche Fachuntersuchungen nötig
              sein.
            </p>
          </div>
        </div>
      </section>

      {/* RENTAL */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Ferienvermietung 2026
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                „Airbnb möglich“ ist keine belastbare Aussage.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Für eine touristische Vermietungsstrategie müssen mindestens
                vier Ebenen zusammenpassen: staatliches Recht, Recht der
                Comunitat Valenciana, kommunale Planung und – bei Wohnungen oder
                Urbanisationen – die Regeln der Eigentümergemeinschaft.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Eine alte Anzeige auf einem Buchungsportal, eine Aussage des
                Verkäufers oder eine frühere Vermietung belegt deshalb nicht,
                dass Sie nach dem Eigentümerwechsel dieselbe Nutzung rechtssicher
                fortsetzen können.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[32px] bg-white p-9 shadow-sm">
              <p className="text-xs uppercase tracking-[0.25em] text-[#9b743d]">
                Comunitat Valenciana
              </p>
              <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                10 Tage, ganze Wohnung, kommunale Kompatibilität
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                Nach den valencianischen Regeln wird eine touristische Wohnung
                grundsätzlich vollständig und für höchstens 10
                aufeinanderfolgende Tage an denselben Gast überlassen. Für die
                touristische Nutzung ist ein positiver kommunaler
                Kompatibilitätsnachweis beziehungsweise ein gleichwertiges
                Dokument erforderlich. Zimmerweise touristische Vermietung fällt
                nicht unter dieses VUT-Modell.
              </p>
              <p className="mt-5 leading-relaxed text-stone-600">
                Die Registrierung im Tourismusregister der Comunitat Valenciana
                hat grundsätzlich eine Gültigkeit von fünf Jahren.
              </p>
            </article>

            <article className="rounded-[32px] bg-white p-9 shadow-sm">
              <p className="text-xs uppercase tracking-[0.25em] text-[#9b743d]">
                Eigentümergemeinschaft
              </p>
              <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                Seit 3. April 2025 ist vorherige Zustimmung zentral
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                Für die Aufnahme touristischer Vermietung in einem Gebäude, das
                dem spanischen Wohnungseigentumsrecht unterliegt, verlangt
                Artikel 7.3 in Verbindung mit Artikel 17.12 der Ley de Propiedad
                Horizontal grundsätzlich eine ausdrückliche vorherige
                Genehmigung. Erforderlich ist die gesetzlich definierte
                3/5-Mehrheit der Eigentümer und Beteiligungsquoten.
              </p>
              <p className="mt-5 leading-relaxed text-stone-600">
                Für bereits vor Inkrafttreten rechtmäßig ausgeübte Tätigkeiten
                bestehen Übergangsregeln. Genau deshalb muss das konkrete
                Startdatum und die damalige Rechtslage dokumentiert werden.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-[34px] bg-[#e9dfd2] p-9 md:p-11">
            <p className="text-sm uppercase tracking-[0.25em] text-[#9b743d]">
              Lokales Beispiel: Dénia
            </p>
            <h3 className="mt-4 font-serif text-4xl text-[#1e2a3a]">
              Kommunale Regeln können innerhalb derselben Costa Blanca stark
              variieren.
            </h3>
            <p className="mt-6 max-w-5xl text-lg leading-relaxed text-stone-700">
              Dénia hatte bereits seit 2024/2025 die Erteilung neuer
              Kompatibilitätsbescheinigungen für touristische Wohnungen im
              Stadtkern vorübergehend eingeschränkt. Am 5. Juni 2026 wurde eine
              neue kommunale VUT-Verordnung zunächst beschlossen und öffentlich
              ausgelegt. Das zeigt den entscheidenden Punkt: Selbst wenn die
              regionale Regel grundsätzlich eine touristische Nutzung kennt,
              kann die konkrete Gemeinde Zonen, Dichten oder Neuzulassungen
              wesentlich enger steuern.
            </p>
            <p className="mt-5 max-w-5xl text-sm leading-relaxed text-stone-600">
              Da kommunale Verfahren sich ändern können, sollte der Status der
              konkreten Adresse unmittelbar vor Kauf und erneut vor Aufnahme der
              Vermietung überprüft werden.
            </p>
          </div>

          <div className="mt-8 rounded-[34px] border border-amber-900/15 bg-amber-50 p-9">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-800">
              Wichtig: nationale Kurzzeitvermietungsregeln 2026
            </p>
            <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
              Die nationale Registrierungslage ist rechtlich in Bewegung.
            </h3>
            <p className="mt-5 leading-relaxed text-stone-700">
              Das Real Decreto 1312/2024 führte ein nationales System für
              Kurzzeitvermietungen und eine digitale Schnittstelle ein. Mehrere
              Teile dieses Regelwerks wurden jedoch durch Urteile des spanischen
              Tribunal Supremo im Mai und Juni 2026 für nichtig erklärt. Der BOE
              weist im konsolidierten Text auf diese Teilnichtigkeiten hin.
              Deshalb sollte bei einer Vermietung nicht mit einem älteren
              Blogartikel oder einer Checkliste aus 2025 gearbeitet werden,
              sondern mit dem aktuell konsolidierten Rechtsstand.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/de/guides/eigentuemergemeinschaft-spanien"
              className="rounded-full border border-[#1e2a3a] px-6 py-3 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Eigentümergemeinschaften in Spanien →
            </a>
            <a
              href="/de/guides/haeufige-fehler-immobilienkauf-spanien"
              className="rounded-full border border-[#1e2a3a] px-6 py-3 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Häufige Käuferfehler →
            </a>
          </div>
        </div>
      </section>

      {/* REAL LIFE */}
      <section className="bg-[#e9dfd2] px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              Real-Life-Prüfung
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Ein rechtlich sauberes Haus kann trotzdem die falsche Immobilie
              sein.
            </h2>
            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-stone-700">
              Lebensqualität lässt sich nicht vollständig aus Registerauszügen
              ableiten. Besichtigen Sie Mikrostandort und Zufahrt zu
              unterschiedlichen Tageszeiten und denken Sie in Jahreszeiten,
              nicht nur in Urlaubswochen.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {practicalChecks.map((item) => (
              <div
                key={item}
                className="rounded-[26px] bg-[#f6f1ea] p-7 shadow-sm"
              >
                <p className="leading-relaxed text-stone-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENERGY AND RUNNING COSTS */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[34px] bg-white p-9 shadow-sm md:p-11">
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                Energieausweis
              </p>
              <h2 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
                Pflichtdokument – aber kein technisches Gutachten.
              </h2>
              <p className="mt-6 leading-relaxed text-stone-600">
                Nach dem spanischen Real Decreto 390/2021 ist bei Verkauf
                bestehender Gebäude grundsätzlich ein registrierter
                Energieeffizienzausweis relevant und dem Kaufvertrag
                beizufügen. Der Ausweis bewertet Energieeffizienz; er ersetzt
                keine Untersuchung von Feuchte, Rissen, Dach, Pool,
                Elektroinstallation oder illegalen Umbauten.
              </p>
            </div>

            <div className="rounded-[34px] bg-[#1e2a3a] p-9 text-white shadow-sm md:p-11">
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                Laufende Kosten
              </p>
              <h2 className="mt-5 font-serif text-4xl">
                Kaufbar heißt nicht automatisch dauerhaft bezahlbar.
              </h2>
              <p className="mt-6 leading-relaxed text-white/78">
                Prüfen Sie IBI, Müllgebühren, comunidad, Gebäudeversicherung,
                Stromgrundkosten, Wasser, Pool- und Gartenpflege, Alarmanlage,
                Internet, Klimaanlagenwartung und typische Reparaturen. Bei
                Villen mit großen Außenflächen oder Hanggrundstücken können
                Wartung und Infrastruktur einen größeren Unterschied machen als
                kleinere Kaufpreisabweichungen.
              </p>
              <a
                href="/de/guides/monatliche-kosten-immobilie-spanien"
                className="mt-7 inline-block text-sm font-medium text-white underline underline-offset-4"
              >
                Monatliche Immobilienkosten berechnen →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Empfohlene Reihenfolge
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Prüfen, bevor die Verhandlung psychologisch zur Verpflichtung
              wird.
            </h2>
          </div>

          <ol className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Nutzung definieren",
                text:
                  "Eigenbedarf, Ruhestand, Teilzeitwohnen oder Vermietung? Die geplante Nutzung bestimmt, welche rechtlichen und praktischen Prüfungen nötig sind.",
              },
              {
                step: "2",
                title: "Budget inklusive Steuern",
                text:
                  "Kaufpreis, ITP oder IVA/AJD, professionelle Prüfungen, Finanzierung, Renovierung und Reserve vor dem ersten ernsthaften Angebot kalkulieren.",
              },
              {
                step: "3",
                title: "Vorprüfung der Adresse",
                text:
                  "Register, Catastro, Gemeinschaft und – bei Vermietungsabsicht – kommunale und regionale Zulässigkeit prüfen.",
              },
              {
                step: "4",
                title: "Vertragsbedingungen absichern",
                text:
                  "Reservierung und Arras nur mit klaren Bedingungen für Due Diligence, Finanzierung, Fristen und Rückzahlung unterschreiben.",
              },
              {
                step: "5",
                title: "Technische + juristische Due Diligence",
                text:
                  "Unabhängige Fachleute arbeiten parallel und dokumentieren offene Punkte, Risiken und notwendige Folgemaßnahmen.",
              },
              {
                step: "6",
                title: "Erst dann final entscheiden",
                text:
                  "Ergebnisse in Kaufpreis, Vertragsbedingungen, Renovierungsbudget und gegebenenfalls die Entscheidung gegen den Kauf einfließen lassen.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="list-none rounded-[30px] bg-[#f6f1ea] p-8"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1e2a3a] text-sm font-semibold text-white">
                  {item.step}
                </span>
                <h3 className="mt-5 font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/de/guides/immobilie-in-spanien-kaufen"
              className="rounded-full border border-[#1e2a3a] px-6 py-3 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Gesamten Kaufprozess ansehen →
            </a>
            <a
              href="/de/guides/wie-lange-dauert-hauskauf-spanien"
              className="rounded-full border border-[#1e2a3a] px-6 py-3 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Wie lange dauert der Hauskauf? →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Häufige Fragen
          </p>
          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Antworten für deutsche Käufer.
          </h2>

          <div className="mt-12 space-y-5">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[28px] bg-white p-7 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {item.question}
                </summary>
                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section id="quellen" className="bg-[#e9dfd2] px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              Primärquellen und Kontrollbasis
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Offizielle Quellen statt Hörensagen.
            </h2>
            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-stone-700">
              Die Kernaussagen dieses Artikels wurden gegen amtliche Quellen
              geprüft. Besonders bei Ferienvermietung und kommunalen Regeln kann
              sich die Rechtslage schnell verändern; deshalb ist das
              Prüfungsdatum wichtig.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {sourceLinks.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[26px] bg-[#f6f1ea] p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                  {source.tag}
                </p>
                <p className="mt-3 font-medium leading-relaxed text-[#1e2a3a]">
                  {source.title} ↗
                </p>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] bg-white/70 p-7 text-sm leading-relaxed text-stone-600">
            <strong className="font-medium text-[#1e2a3a]">
              Redaktioneller Hinweis:
            </strong>{" "}
            Gesetzliche Steuersätze und formale Anforderungen sind von
            individuellen Steuerberechnungen, Rechtsgutachten und technischen
            Bewertungen zu unterscheiden. Dieser Artikel dient der
            strukturierten Vorbereitung und ersetzt keine Beratung für eine
            konkrete Immobilie.
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Weiterführende Ratgeber
          </p>
          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a]">
            Vertiefen Sie die Punkte, die für Ihren Kauf entscheidend sind.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/de/guides/gesamtkosten-immobilienkauf-spanien",
                title: "Gesamtkosten beim Immobilienkauf in Spanien",
              },
              {
                href: "/de/guides/itp-iva-ajd-einfach-erklaert",
                title: "ITP, IVA und AJD einfach erklärt",
              },
              {
                href: "/de/guides/eigentuemergemeinschaft-spanien",
                title: "Eigentümergemeinschaften in Spanien",
              },
              {
                href: "/de/guides/monatliche-kosten-immobilie-spanien",
                title: "Monatliche Kosten einer Immobilie in Spanien",
              },
              {
                href: "/de/guides/haeufige-fehler-immobilienkauf-spanien",
                title: "Häufige Fehler beim Immobilienkauf in Spanien",
              },
              {
                href: "/de/guides/wo-immobilie-costa-blanca-nord-kaufen",
                title: "Wo an der Costa Blanca Nord kaufen?",
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[28px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {item.title}
                </h3>
                <span className="mt-5 inline-block text-sm font-medium text-[#9b743d]">
                  Ratgeber lesen →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32 pt-8 md:px-8">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-10 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vor dem Kauf prüfen
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight">
            Eine gute Immobilie sollte nicht nur schön aussehen, sondern auch
            technisch, rechtlich und praktisch zu Ihrem Plan passen.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Nordic Move Spain begleitet internationale Käufer von der
            Regions- und Immobiliensuche bis zu unabhängigen technischen und
            rechtlichen Prüfungen, Kauf, Renovierung, Umzug und praktischer
            Unterstützung nach der Ankunft.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/de/services/purchase-safety-report"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Purchase Safety entdecken
            </a>
            <a
              href="/de/contact"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Persönliches Gespräch planen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}