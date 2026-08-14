import type { Metadata } from "next";

const PAGE_PATH = "/de/guides/spanische-regeln-anders-als-in-deutschland";
const ASSESSMENT_URL = "/de/relocation-assessment";
const GUIDES_URL = "/de/guides";

export const metadata: Metadata = {
  title: "Spanische Regeln anders als in Deutschland | Hauskauf Spanien",
  description:
    "Deutsche Käufer aufgepasst: Diese spanischen Regeln funktionieren anders als in Deutschland. Lesen Sie mehr über Notar, Registro de la Propiedad, Catastro, Community-Regeln, Vermietung, Umbauten und Steuern.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: PAGE_PATH,
    title: "Spanische Regeln, die anders funktionieren als in Deutschland",
    description:
      "Ein Leitfaden für deutsche Käufer zu Notar, Registro de la Propiedad, Catastro, Community-Regeln, Vermietung, Umbauten, Steuern und Erbrecht in Spanien.",
    siteName: "Nordic Move Spain",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const officialSources = [
  {
    title:
      "Administración.gob.es — Notar und Property Registry beim Immobilienkauf in Spanien",
    href: "https://administracion.gob.es/pag_Home/en/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/compraventa-bienes-inmuebles/notarias-registros-propiedad.html",
    text:
      "Offizielle Informationen der spanischen Regierung zur Prüfung des rechtlichen Status einer Immobilie und zur Beantragung einer nota simple.",
  },
  {
    title: "Registradores de España — Registro de la Propiedad",
    href: "https://sede.registradores.org/site/propiedad?lang=en_EN",
    text:
      "Offizielle Informationen zum spanischen Eigentumsregister sowie zu eingetragenen Rechten, Belastungen und Eigentumsverhältnissen.",
  },
  {
    title: "Catastro — Spanische Katasterinformationen",
    href: "https://www.catastro.hacienda.gob.es/ayuda/english_ovc.htm",
    text:
      "Offizielle Informationen zum spanischen Catastro, dem administrativen und steuerlichen Kataster.",
  },
  {
    title: "BOE — Ley de Propiedad Horizontal",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-1960-10906",
    text:
      "Offizieller Gesetzestext zu comunidades de propietarios, Gemeinschaftseigentum und Verpflichtungen innerhalb von Eigentümergemeinschaften.",
  },
  {
    title:
      "Generalitat Valenciana — Decreto Ley 9/2024 zur touristischen Vermietung",
    href: "https://www.turisme.gva.es/opencms/opencms/turisme/es/contents/home/noticia/noticia_1725542158000.html",
    text:
      "Offizielle Informationen zu den geänderten Regeln für viviendas de uso turístico in der Comunitat Valenciana.",
  },
  {
    title: "Bundesministerium der Justiz — § 311b BGB zum Grundstückskauf",
    href: "https://www.gesetze-im-internet.de/bgb/__311b.html",
    text:
      "Offizieller deutscher Gesetzestext zur notariellen Beurkundung von Verträgen über den Erwerb oder die Übertragung von Grundstückseigentum.",
  },
  {
    title: "Bundesministerium der Justiz — § 21 BeurkG zur Grundbucheinsicht",
    href: "https://www.gesetze-im-internet.de/beurkg/__21.html",
    text:
      "Offizieller deutscher Gesetzestext zur Pflicht des Notars, sich bei grundbuchbezogenen Geschäften über den Grundbuchinhalt zu unterrichten.",
  },
  {
    title: "Bundesministerium der Finanzen — DBA Deutschland–Spanien",
    href: "https://www.bundesfinanzministerium.de/Content/DE/Standardartikel/Themen/Steuern/Internationales_Steuerrecht/Staatenbezogene_Informationen/Laender_A_Z/Spanien/2025-01-01-Abkommen-Synthetisierter-Text.pdf?__blob=publicationFile&v=3",
    text:
      "Offizieller synthetisierter Text des Doppelbesteuerungsabkommens zwischen Deutschland und Spanien, einschließlich Regeln zu unbeweglichem Vermögen und zur Vermeidung der Doppelbesteuerung.",
  },
];

const sections = [
  {
    number: "01",
    title:
      "Der spanische Notar arbeitet anders, als viele Deutsche erwarten",
    text:
      "In Deutschland ist der Immobilienkauf eng mit der notariellen Beurkundung und dem Grundbuch verknüpft. Auch in Spanien gibt es einen Notar, doch deutsche Käufer sollten nicht automatisch davon ausgehen, dass Aufgaben, Prüfungsumfang und Ablauf identisch mit dem deutschen System sind. Der spanische Notar formalisiert die Übertragung und prüft wichtige rechtliche Punkte. Der Schutz Ihrer eigenen Interessen beginnt jedoch meist früher: mit einer unabhängigen rechtlichen Prüfung, bevor Sie reservieren, eine Anzahlung leisten oder einen privaten Kaufvertrag unterschreiben.",
    warning:
      "Lassen Sie vor der Unterzeichnung prüfen, wer Eigentümer ist, ob Belastungen oder Schulden auf der Immobilie liegen, ob die rechtliche Beschreibung mit der tatsächlichen Situation übereinstimmt und ob die Kaufbedingungen ausreichend sicher sind.",
  },
  {
    number: "02",
    title:
      "Eine nota simple ist wichtig, aber noch keine vollständige Prüfung",
    text:
      "Die nota simple aus dem Registro de la Propiedad enthält wichtige Informationen über die Immobilie, beispielsweise den eingetragenen Eigentümer, die Beschreibung des Objekts und mögliche Belastungen. Für deutsche Käufer ist dies eine wesentliche Kontrolle. Eine nota simple ist jedoch nicht mit einer vollständigen rechtlichen und technischen Kaufprüfung gleichzusetzen. Sie sagt nicht automatisch alles über den tatsächlichen Zustand der Immobilie, ältere Umbauten, die Eignung für Vermietung, Community-Regeln oder kommunale Einschränkungen aus.",
    warning:
      "Nutzen Sie die nota simple als Ausgangspunkt, nicht als vollständige Kaufprüfung.",
  },
  {
    number: "03",
    title: "Registro de la Propiedad und Catastro sind nicht dasselbe",
    text:
      "Wer aus Deutschland kommt, kennt die Trennung zwischen Grundbuch und Liegenschaftskataster. In Spanien gibt es ebenfalls unterschiedliche Register, deren Aufgaben sich aber nicht eins zu eins auf das deutsche System übertragen lassen. Das Registro de la Propiedad ist für rechtliches Eigentum und eingetragene Rechte wichtig. Das Catastro ist vor allem ein administratives und steuerliches Register mit Angaben wie Lage, Flächen, Nutzung und Katasterwert.",
    warning:
      "Prüfen Sie, ob die Angaben im Registro, im Catastro und die tatsächliche Immobilie übereinstimmen. Achten Sie besonders auf Pools, Anbauten, Terrassen, Außenküchen, Garagen und zusätzliche Räume.",
  },
  {
    number: "04",
    title:
      "Community-Regeln können bestimmen, was Sie dürfen und was nicht",
    text:
      "Bei Apartments, Urbanisationen und manchen Reihen- oder Doppelhäusern haben Sie mit einer comunidad de propietarios zu tun. Für deutsche Käufer erinnert das teilweise an eine Wohnungseigentümergemeinschaft, doch Regeln, Kosten, Entscheidungsprozesse und praktische Folgen können deutlich anders sein. Community-Gebühren, Beschlüsse, Sonderumlagen, Stimmrechte, die Nutzung gemeinschaftlicher Bereiche und Vermietungsregeln können erheblichen Einfluss auf Wohnkomfort und laufende Kosten haben.",
    warning:
      "Fragen Sie vor dem Kauf nach Community-Gebühren, Rückständen des Verkäufers, Protokollen der Eigentümerversammlungen, geplanten Maßnahmen und möglichen Vermietungsbeschränkungen.",
  },
  {
    number: "05",
    title: "Touristische Vermietung ist nicht automatisch erlaubt",
    text:
      "Viele deutsche Käufer kalkulieren mit Mieteinnahmen, doch touristische Vermietung ist in Spanien kein automatisches Recht. An der Costa Blanca gelten die Regeln der Comunitat Valenciana. Die Vorschriften für viviendas de uso turístico wurden mit Decreto Ley 9/2024 geändert. Dabei spielen unter anderem Registrierung, Angaben im Tourismusregister, lokale Vorschriften, Qualitätsanforderungen und mögliche kommunale Einschränkungen eine Rolle.",
    warning:
      "Kaufen Sie keine Immobilie mit dem festen Plan der touristischen Vermietung, bevor rechtlich geprüft wurde, ob diese Nutzung an genau diesem Standort und innerhalb dieser konkreten Community zulässig ist.",
  },
  {
    number: "06",
    title: "Umbauten und Anbauten müssen rechtlich korrekt sein",
    text:
      "In Spanien finden Sie regelmäßig Immobilien mit zusätzlichen Räumen, überdachten Terrassen, Pergolen, Pools, Außenküchen oder Garagen, die später hinzugefügt wurden. Das kann den Wert erhöhen, aber nur, wenn die Situation rechtlich korrekt ist. Eine Immobilie kann optisch perfekt wirken, obwohl bestimmte Bestandteile nicht ordnungsgemäß genehmigt, registriert oder mit Gemeinde beziehungsweise Community abgestimmt wurden.",
    warning:
      "Lassen Sie bei älteren Villen, Fincas und umgebauten Immobilien immer prüfen, ob Erweiterungen, Pools und Nebengebäude legal sind.",
  },
  {
    number: "07",
    title:
      "Steuern funktionieren anders: Spanien ist zentral, Deutschland bleibt relevant",
    text:
      "Deutsche Käufer sollten nicht nur die spanischen Steuern betrachten. Für in Deutschland ansässige Personen regelt das Doppelbesteuerungsabkommen zwischen Deutschland und Spanien, welchem Staat für bestimmte Einkünfte und Vermögenswerte Besteuerungsrechte zustehen und wie Doppelbesteuerung vermieden wird. Einkünfte aus einer Immobilie in Spanien können in Spanien steuerlich relevant sein; zugleich kann die Immobilie je nach Nutzung, Vermietung und persönlicher Situation auch in der deutschen Steuererklärung eine Rolle spielen. Zusätzlich können in Spanien unter anderem Erwerbssteuern, jährliche lokale Abgaben, die Besteuerung für Nichtresidenten und Steuern auf Mieteinnahmen anfallen.",
    warning:
      "Lassen Sie sowohl die spanischen als auch die deutschen steuerlichen Folgen sowie die Anwendung des Doppelbesteuerungsabkommens prüfen, insbesondere wenn Sie vermieten, verkaufen oder später teilweise in Spanien leben möchten.",
  },
  {
    number: "08",
    title: "Erbrecht und Testament werden oft zu spät geregelt",
    text:
      "Eine Immobilie in Spanien ist nicht nur eine Kaufentscheidung, sondern auch eine Vermögensentscheidung. Deutsche Käufer denken häufig erst nach dem Kauf über Erbrecht, Testamente und die spätere Übertragung auf Erben nach. Bei Vermögen in Deutschland und Spanien können grenzüberschreitende Fragen zusätzliche Komplexität verursachen. Gerade bei Partnern, Patchworkfamilien, Kindern aus früheren Beziehungen oder Vermögen in mehreren Ländern ist eine gute Beratung wichtig.",
    warning:
      "Besprechen Sie vor oder kurz nach dem Kauf, ob ein spanisches Testament oder eine zusätzliche Nachlassplanung sinnvoll ist.",
  },
];

export default function SpanishRulesGermanyPage() {
  return (
    <main className="bg-[#f6f1ea] px-8 py-28 text-stone-900">
      <section className="mx-auto max-w-7xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-10 flex flex-wrap items-center gap-2 text-sm text-stone-500"
        >
          <a className="transition hover:text-[#1e2a3a]" href="/de">
            Home
          </a>
          <span aria-hidden="true">/</span>
          <a className="transition hover:text-[#1e2a3a]" href={GUIDES_URL}>
            Ratgeber
          </a>
          <span aria-hidden="true">/</span>
          <span>Spanische Regeln und Deutschland</span>
        </nav>

        <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
          Leitfaden für deutsche Käufer
        </p>

        <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
          Spanische Regeln, die anders funktionieren als in Deutschland
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
          Der Kauf einer Immobilie in Spanien wirkt auf den ersten Blick
          übersichtlich: Sie finden eine Immobilie, geben ein Angebot ab,
          unterschreiben beim Notar und erhalten die Schlüssel. Für
          deutsche Käufer liegen die wichtigsten Risiken jedoch häufig
          gerade in den Unterschieden zwischen dem deutschen und dem
          spanischen System.
        </p>

        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
          Dieser Leitfaden erklärt, welche spanischen Regeln, Kontrollen und
          Gewohnheiten anders funktionieren, als viele Deutsche es gewohnt
          sind. Dazu gehören die Rolle des Notars, das Registro de la
          Propiedad, das Catastro, Community-Regeln, touristische Vermietung,
          Umbauten, Steuern und Erbrecht.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={ASSESSMENT_URL}
            className="rounded-full bg-[#1e2a3a] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#111b29]"
          >
            Relocation Assessment starten
          </a>
          <a
            href={GUIDES_URL}
            className="rounded-full border border-[#1e2a3a] px-7 py-4 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
          >
            Alle Ratgeber ansehen
          </a>
        </div>

        <div className="mt-12 rounded-[36px] bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
            Vorab wichtig
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
            Kaufen Sie in Spanien nicht auf Basis deutscher Annahmen.
          </h2>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Der größte Fehler besteht darin anzunehmen, dass alles automatisch
            genauso funktioniert wie in Deutschland. In Spanien sollten
            Sie früher, praktischer und konkreter prüfen. Eine schöne Immobilie
            kann rechtlich, steuerlich oder praktisch trotzdem Fragen
            aufwerfen. Genau deshalb ist eine gute Vorbereitung wichtig, bevor
            Sie reservieren, eine Anzahlung leisten oder einen Kaufvertrag
            unterschreiben.
          </p>
        </div>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
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
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  Achtung
                </p>

                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  {section.warning}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-20 rounded-[40px] bg-[#1e2a3a] p-10 text-white md:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Praktische Checkliste
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Was deutsche Käufer vor dem Kauf prüfen sollten
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Ist der Verkäufer rechtlich als Eigentümer eingetragen?",
              "Sind Hypotheken, Pfändungen, Schulden oder sonstige Belastungen sichtbar?",
              "Stimmen Registro de la Propiedad, Catastro und die tatsächliche Immobilie überein?",
              "Sind Anbauten, Pool, Garage oder zusätzliche Räume ordnungsgemäß genehmigt?",
              "Gibt es Community-Gebühren, Rückstände oder geplante Sonderumlagen?",
              "Erlaubt die Community touristische Vermietung?",
              "Erlaubt die Gemeinde touristische Vermietung an diesem Standort?",
              "Welche spanischen und deutschen Steuerfolgen entstehen?",
              "Gibt es unabhängige rechtliche Beratung vor der Unterzeichnung?",
              "Wurden Erbrecht, Testament und spätere Übertragung berücksichtigt?",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] bg-white/10 p-5 text-sm leading-relaxed text-white/85"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[40px] bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Offizielle Quellen
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Worauf dieser Leitfaden basiert
          </h2>

          <p className="mt-6 max-w-4xl leading-relaxed text-stone-600">
            Nachfolgend finden Sie offizielle Quellen, in denen deutsche
            Käufer selbst weitere Hintergrundinformationen nachlesen können.
            Diese Quellen ersetzen keine persönliche rechtliche oder steuerliche
            Beratung, helfen aber dabei, das spanische System besser zu
            verstehen.
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
                  Offizielle Information
                </p>

                <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {source.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {source.text}
                </p>

                <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#1e2a3a]">
                  Quelle ansehen →
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[40px] bg-[#ede3d5] p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Weitere Ratgeber
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Lesen Sie weiter, bevor Sie kaufen
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Immobilienkauf in Spanien",
                text:
                  "Lesen Sie unsere Ratgeber zum spanischen Kaufprozess für internationale Käufer.",
              },
              {
                title: "Eigentümergemeinschaften in Spanien",
                text:
                  "Informieren Sie sich über Community-Regeln, gemeinsame Kosten und Pflichten in Urbanisationen und Apartmentanlagen.",
              },
              {
                title: "Steuern und Zweitwohnsitz",
                text:
                  "Lesen Sie weiter zu Steuern, Kaufnebenkosten und grenzüberschreitenden Fragen rund um Immobilien in Spanien.",
              },
            ].map((guide) => (
              <a
                key={guide.title}
                href={GUIDES_URL}
                className="rounded-[28px] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-serif text-2xl text-[#1e2a3a]">
                  {guide.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {guide.text}
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#9b743d]">
                  Ratgeber ansehen →
                </p>
              </a>
            ))}
          </div>
        </section>

        <div className="mt-16 rounded-[40px] bg-[#1e2a3a] p-10 text-white md:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Teure Annahmen vermeiden
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Der Kauf einer spanischen Immobilie erfordert spanische Kontrollen.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Nordic Move Spain hilft Käufern, den Kaufprozess an der Costa Blanca
            besser zu verstehen, die richtigen Fragen zu stellen und lokale
            Fachleute zum richtigen Zeitpunkt einzubeziehen. So kaufen Sie nicht
            nur eine schöne Immobilie, sondern mit mehr Klarheit über Regeln,
            Risiken und praktische Folgen.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={ASSESSMENT_URL}
              className="inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Relocation Assessment starten
            </a>
            <a
              href={GUIDES_URL}
              className="inline-block rounded-full border border-white/40 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Weitere Ratgeber
            </a>
          </div>
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-relaxed text-stone-500">
          Dieser Leitfaden enthält allgemeine Informationen für deutsche
          Käufer und stellt keine rechtliche, steuerliche oder notarielle
          Beratung dar. Vorschriften können sich ändern, und die richtige
          Vorgehensweise hängt von der Immobilie, der Gemeinde, der Community,
          Ihrer persönlichen Situation und dem Zweck des Kaufs ab. Lassen Sie
          wichtige Entscheidungen immer von einem unabhängigen Rechtsanwalt,
          Steuerberater oder einer anderen qualifizierten Fachperson prüfen.
        </p>
      </section>
    </main>
  );
}