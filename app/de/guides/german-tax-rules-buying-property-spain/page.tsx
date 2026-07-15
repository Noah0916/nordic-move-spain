export const metadata = {
  title: "Deutsche Steuerregeln beim Hauskauf in Spanien | Nordic Move Spain",
  description:
    "Ein praktischer Leitfaden für deutsche Käufer, die eine Immobilie in Spanien kaufen möchten: Kaufnebenkosten, spanische Nichtresidentensteuer, deutsche Steuererklärung, Doppelbesteuerungsabkommen, Vermietung, Verkauf und Nachfolgeplanung.",
};

export default function GermanSecondHomeSpainTaxGuidePage() {
  const purchaseCosts = [
    {
      title: "Bestandsimmobilie",
      text:
        "Beim Kauf einer bestehenden Immobilie fällt in Spanien in der Regel Grunderwerbsteuer an, regional bekannt als ITP. An der Costa Blanca Nord liegt die Immobilie in der Comunidad Valenciana. Der konkrete Satz hängt vom Kaufdatum, Kaufpreis, Objekt und möglichen regionalen Sonderregeln ab.",
    },
    {
      title: "Neubau vom Bauträger",
      text:
        "Beim Kauf einer neuen Immobilie direkt vom Bauträger fällt normalerweise spanische Mehrwertsteuer, IVA, an. Zusätzlich kann die Stempelsteuer, AJD, anfallen. Käufer sollten vor jeder Reservierung prüfen lassen, welche Steuerart tatsächlich gilt.",
    },
    {
      title: "Weitere Kaufkosten",
      text:
        "Neben Steuern sollten deutsche Käufer Notar, Grundbuch, unabhängigen Anwalt, Übersetzungen, NIE, Bankkosten, Hypothekenkosten und administrative Begleitung einkalkulieren.",
    },
  ];

  const annualCosts = [
    {
      title: "IBI-Grundsteuer",
      text:
        "IBI ist die jährliche kommunale Grundsteuer in Spanien. Sie richtet sich unter anderem nach Gemeinde, Katasterwert, Lage und Art der Immobilie.",
    },
    {
      title: "Basura und lokale Gebühren",
      text:
        "Viele Gemeinden erheben zusätzliche Gebühren, zum Beispiel für Müllentsorgung. Diese Kosten wirken klein, gehören aber in die jährliche Eigentumsplanung.",
    },
    {
      title: "Versicherung und Versorgung",
      text:
        "Gebäudeversicherung, Hausrat, Strom, Wasser, Internet, Alarmanlage, Pool, Garten und Wartungsverträge können je nach Nutzung deutlich variieren.",
    },
    {
      title: "Gemeinschaftskosten",
      text:
        "Bei Apartments, Reihenhäusern und Urbanisationen kommen oft Comunidad-Gebühren hinzu. Diese decken zum Beispiel Pool, Garten, Aufzug, Sicherheit, Privatstraßen und Gemeinschaftsbereiche ab.",
    },
    {
      title: "Nichtresidentensteuer",
      text:
        "Wer in Spanien nicht steuerlich ansässig ist und eine Immobilie besitzt, muss in Spanien häufig jährlich eine Nichtresidentensteuer erklären — auch dann, wenn die Immobilie nicht vermietet wird.",
    },
    {
      title: "Instandhaltung",
      text:
        "Gerade Villen, ältere Immobilien, Häuser mit Meerblick, Pool oder großem Grundstück benötigen ein realistisches Budget für laufende und zukünftige Instandhaltung.",
    },
  ];

  const germanTaxTopics = [
    {
      title: "Unbeschränkte Steuerpflicht in Deutschland",
      text:
        "Wer in Deutschland einen Wohnsitz oder gewöhnlichen Aufenthalt hat, ist in der Regel in Deutschland unbeschränkt einkommensteuerpflichtig. Deshalb sollte eine spanische Immobilie nicht nur aus spanischer, sondern auch aus deutscher steuerlicher Sicht geprüft werden.",
    },
    {
      title: "Doppelbesteuerungsabkommen Deutschland–Spanien",
      text:
        "Das Doppelbesteuerungsabkommen regelt, welcher Staat bestimmte Einkünfte besteuern darf und wie Doppelbesteuerung vermieden wird. Bei Immobilien in Spanien können Einkünfte und Gewinne aus der Immobilie grundsätzlich in Spanien besteuert werden.",
    },
    {
      title: "Deutsche Steuererklärung",
      text:
        "Je nach Nutzung der Immobilie, Vermietung, Verkauf, Finanzierung und persönlicher Situation können Angaben in der deutschen Steuererklärung erforderlich sein. Die konkrete Behandlung sollte ein deutscher Steuerberater prüfen.",
    },
  ];

  const rentalTopics = [
    {
      title: "Eigennutzung",
      text:
        "Wird die Immobilie ausschließlich privat genutzt, entstehen in Deutschland in der Regel keine laufenden Vermietungseinkünfte. In Spanien kann trotzdem eine jährliche fiktive Eigennutzungsbesteuerung für Nichtresidenten relevant sein.",
    },
    {
      title: "Ferienvermietung",
      text:
        "Bei touristischer Vermietung müssen deutsche Eigentümer die spanischen Lizenz-, Registrierungs- und Steuerpflichten prüfen. Einnahmen aus spanischer Vermietung sind in Spanien steuerlich relevant und können auch in der deutschen Erklärung eine Rolle spielen.",
    },
    {
      title: "Abziehbare Kosten",
      text:
        "Für in Deutschland ansässige EU-Bürger können in Spanien bei Vermietung bestimmte direkt zusammenhängende Kosten abziehbar sein. Dazu können zum Beispiel Verwaltung, Reparaturen, anteilige Gemeinschaftskosten, Zinsen oder Abschreibung gehören, wenn die Voraussetzungen erfüllt sind.",
    },
  ];

  const saleTopics = [
    {
      title: "Verkauf in Spanien",
      text:
        "Beim späteren Verkauf kann Spanien einen Gewinn aus der Veräußerung der Immobilie besteuern. Bei nichtresidenten Verkäufern behält der Käufer regelmäßig einen Teil des Kaufpreises als Vorauszahlung auf die mögliche Steuer ein.",
    },
    {
      title: "Deutsche 10-Jahres-Frist",
      text:
        "Auch deutsche Regeln zu privaten Veräußerungsgeschäften können relevant werden, insbesondere wenn zwischen Kauf und Verkauf nicht mehr als zehn Jahre liegen. Die Abstimmung mit dem Doppelbesteuerungsabkommen ist wichtig.",
    },
    {
      title: "Plusvalía municipal",
      text:
        "Zusätzlich kann in Spanien eine kommunale Steuer auf den Wertzuwachs des Grundstücks relevant sein. Diese sollte vor dem Verkauf kalkuliert werden.",
    },
  ];

  const planningChecks = [
    "Bin ich weiterhin steuerlich in Deutschland ansässig oder verlagere ich meinen Lebensmittelpunkt nach Spanien?",
    "Nutze ich die Immobilie ausschließlich privat, teilweise selbst oder regelmäßig zur Vermietung?",
    "Wie werden spanische Mieteinnahmen in Spanien und Deutschland erklärt?",
    "Welche Kosten können in Spanien oder Deutschland angesetzt werden?",
    "Was passiert steuerlich, wenn ich die Immobilie innerhalb von zehn Jahren wieder verkaufe?",
    "Wie wirkt sich eine spanische Hypothek auf die steuerliche Berechnung aus?",
    "Kann spanische Vermögensteuer oder Solidaritätssteuer bei hohen Vermögenswerten relevant werden?",
    "Wie soll die Immobilie im Todesfall innerhalb der Familie übergehen?",
  ];

  const officialSources = [
    {
      label: "Bundesfinanzministerium: Doppelbesteuerungsabkommen Deutschland–Spanien",
      href: "https://www.bundesfinanzministerium.de/Content/DE/Standardartikel/Themen/Steuern/Internationales_Steuerrecht/Staatenbezogene_Informationen/Laender_A_Z/Spanien/1968-01-20-Spanien-Abkommen-DBA.html",
    },
    {
      label: "Gesetze im Internet: § 1 EStG Steuerpflicht",
      href: "https://www.gesetze-im-internet.de/estg/__1.html",
    },
    {
      label: "Gesetze im Internet: § 21 EStG Vermietung und Verpachtung",
      href: "https://www.gesetze-im-internet.de/estg/__21.html",
    },
    {
      label: "Gesetze im Internet: § 23 EStG Private Veräußerungsgeschäfte",
      href: "https://www.gesetze-im-internet.de/estg/__23.html",
    },
    {
      label: "Agencia Tributaria: Modelo 210 für Nichtresidenten",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/todas-gestiones/impuestos-tasas/impuesto-sobre-renta-no-residentes/modelo-210-irnr______a-no-residentes-permanente_/instrucciones.html",
    },
    {
      label: "Agencia Tributaria: Nichtresidentensteuer bei Vermietung",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/vivienda-otros-inmuebles/tributacion-arrendador-viviendas-otros-inmuebles/tributacion-alquiler-apartamentos-turisticos/impuesto-sobre-renta-no-residentes.html",
    },
    {
      label: "Agencia Tributaria: Vermögensteuer für Nichtresidenten",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/impuesto-sobre-patrimonio/exigibilidad-impuesto-sobre-patrimonio-no-residentes.html",
    },
    {
      label: "Agencia Tributaria: 3%-Einbehalt beim Verkauf durch Nichtresidenten",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/irnr-sin-establecimiento-permanente/retenciones-irnr-sin-establecimiento-permanente/retencion-adquirente-inmueble.html",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="relative flex min-h-[75vh] items-center overflow-hidden px-8 py-32">
        <img
          src="/images/legal.png"
          alt="Deutsche Steuerregeln beim Kauf einer Immobilie in Spanien"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 mx-auto max-w-6xl text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Costa Blanca Nord
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Deutsche Steuerregeln beim Kauf einer Immobilie in Spanien.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            Ein praktischer Leitfaden für deutsche Käufer über Kaufnebenkosten,
            spanische Nichtresidentensteuer, deutsche Steuererklärung,
            Vermietung, Verkauf und langfristige Steuerplanung.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-5xl leading-tight">
            Der Kaufpreis ist nur ein Teil der finanziellen Entscheidung.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Viele deutsche Käufer konzentrieren sich zuerst auf Lage, Aussicht,
            Immobilientyp und Kaufpreis. Wer eine Immobilie in Spanien kauft,
            sollte jedoch auch die steuerlichen Folgen in beiden Ländern
            verstehen.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Für deutsche Käufer geht es nicht nur um spanische Kaufsteuern und
            laufende Kosten. Auch die deutsche Steuerpflicht, das
            Doppelbesteuerungsabkommen zwischen Deutschland und Spanien,
            Vermietungseinkünfte, ein späterer Verkauf und die Nachfolgeplanung
            können wichtig sein.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Diese Seite gibt einen praktischen Überblick. Sie ersetzt keine
            persönliche Beratung durch einen deutschen Steuerberater und einen
            spanischen Steuerberater oder Anwalt, weil persönliche Situation,
            Wohnsitz, Nutzung, Finanzierung und Familienplanung entscheidend
            sein können.
          </p>
        </div>
      </section>

      {/* PURCHASE COSTS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-white p-12 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Kaufnebenkosten in Spanien
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Welche Steuern und Kosten fallen beim Kauf an?
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
            <p>
              Die angegebene Verkaufssumme ist nicht der Gesamtbetrag, den Sie
              für den Kauf benötigen. Zusätzlich fallen in Spanien Steuern,
              Notar- und Grundbuchkosten, Anwalt, Übersetzungen, Verwaltung,
              Bank- und gegebenenfalls Hypothekenkosten an.
            </p>

            <p>
              Die exakten Kaufnebenkosten hängen davon ab, ob Sie eine
              Bestandsimmobilie oder einen Neubau kaufen. Auch die autonome
              Region, der Kaufpreis, das Kaufdatum, die Nutzung und persönliche
              Voraussetzungen können eine Rolle spielen.
            </p>

            <p>
              An der Costa Blanca Nord kalkulieren Käufer häufig mit einem
              erheblichen Betrag zusätzlich zum Kaufpreis. Lassen Sie vor einem
              Angebot immer eine aktuelle, persönliche Kostenberechnung erstellen.
            </p>
          </div>
        </div>
      </section>

      {/* PURCHASE CARDS */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {purchaseCosts.map((item) => (
            <div key={item.title} className="rounded-[32px] bg-white p-10 shadow-sm">
              <h3 className="font-serif text-3xl">{item.title}</h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXAMPLE */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-[#efe7dc] p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Praxisbeispiel
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Was kann eine Immobilie für €700.000 tatsächlich kosten?
          </h2>

          <div className="mt-10 space-y-5 text-lg leading-relaxed text-stone-700">
            <p>
              Viele Käufer planen ihr Budget anhand des Kaufpreises. Dadurch
              wird der Betrag, der bis zur notariellen Übertragung benötigt wird,
              schnell unterschätzt.
            </p>

            <div className="mt-10 rounded-[28px] bg-white p-10 shadow-sm">
              <p>
                Kaufpreis: <strong>€700.000</strong>
              </p>

              <p className="mt-4">
                Spanische Kaufsteuer:{" "}
                <strong>je nach Objekt und Region oft etwa €63.000 – €77.000</strong>
              </p>

              <p className="mt-4">
                Unabhängiger Anwalt: <strong>ca. €5.000 – €8.000</strong>
              </p>

              <p className="mt-4">
                Notar und Grundbuch: <strong>ca. €2.500 – €4.000</strong>
              </p>

              <p className="mt-4">
                Übersetzungen und Verwaltung: <strong>ca. €1.500 – €3.000</strong>
              </p>

              <p className="mt-4">
                NIE, Bank und Dokumentation: <strong>ca. €500 – €1.500</strong>
              </p>

              <div className="mt-8 border-t border-stone-300 pt-6">
                <p className="text-2xl font-semibold">
                  Geschätzter Gesamtbedarf vor Möbeln, Renovierung und Finanzierung:
                  ca. €772.500 – €793.500
                </p>
              </div>
            </div>

            <p>
              Dieses Beispiel ist nur eine Orientierung. Möbel, Renovierungen,
              Gutachten, Hypothekenkosten, laufender Unterhalt und steuerliche
              Beratung sind nicht vollständig enthalten.
            </p>
          </div>
        </div>
      </section>

      {/* ANNUAL COSTS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-white p-12 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Laufende Kosten in Spanien
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Nach dem Kauf bleiben steuerliche und praktische Pflichten bestehen.
          </h2>

          <p className="mt-10 text-lg leading-relaxed text-stone-600">
            Eine Immobilie in Spanien verursacht auch dann Kosten, wenn sie nur
            einige Wochen pro Jahr genutzt wird. Für deutsche Käufer ist es
            wichtig, diese Kosten vor dem Kauf realistisch zu planen.
          </p>
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {annualCosts.map((item) => (
            <div key={item.title} className="rounded-[32px] bg-white p-10 shadow-sm">
              <h3 className="font-serif text-3xl">{item.title}</h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GERMAN TAX RESIDENCE */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-[#efe7dc] p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Deutsche Steuerpflicht
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Muss eine spanische Immobilie in Deutschland berücksichtigt werden?
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-700">
            <p>
              Wenn Sie in Deutschland einen Wohnsitz oder gewöhnlichen Aufenthalt
              haben, sind Sie in Deutschland grundsätzlich unbeschränkt
              einkommensteuerpflichtig. Das bedeutet: Ausländische Sachverhalte
              dürfen nicht ignoriert werden.
            </p>

            <p>
              Eine ausschließlich privat genutzte Ferienimmobilie führt in
              Deutschland normalerweise nicht automatisch zu laufenden
              Mieteinkünften. Vermietung, Verkauf, Finanzierung,
              Verlustverrechnung, Erbschaft und steuerliche Ansässigkeit können
              aber deutsche Steuerfragen auslösen.
            </p>

            <p>
              Besonders wichtig: Spanien und Deutschland haben ein
              Doppelbesteuerungsabkommen. Dieses verhindert nicht, dass die
              Immobilie in der Erklärung relevant sein kann. Es regelt vielmehr,
              welcher Staat besteuern darf und wie eine Doppelbesteuerung
              vermieden wird.
            </p>
          </div>
        </div>
      </section>

      {/* GERMAN TOPICS */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {germanTaxTopics.map((item) => (
            <div key={item.title} className="rounded-[32px] bg-white p-10 shadow-sm">
              <h3 className="font-serif text-3xl">{item.title}</h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RENTAL INCOME */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <img
            src="/images/practical-guidance.png"
            alt="Steuern auf Vermietungseinkünfte aus einer spanischen Immobilie"
            className="h-[560px] w-full rounded-[32px] object-cover shadow-xl"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Vermietung und Eigennutzung
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Die Nutzung entscheidet, welche Steuerfragen relevant werden.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Eine spanische Immobilie kann privat genutzt, gelegentlich
              vermietet, touristisch vermietet oder als langfristige Investition
              gehalten werden. Jede Variante hat andere steuerliche und
              praktische Folgen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Wenn Vermietung Teil Ihrer Finanzplanung ist, sollten Sie vor dem
              Kauf prüfen, ob touristische Vermietung rechtlich erlaubt ist,
              welche Lizenz erforderlich ist, welche Kosten abziehbar sind und
              wie die Einnahmen in Spanien und Deutschland zu behandeln sind.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {rentalTopics.map((item) => (
            <div key={item.title} className="rounded-[32px] bg-white p-10 shadow-sm">
              <h3 className="font-serif text-3xl">{item.title}</h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WEALTH TAX */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-[32px] bg-white p-10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Spanische Vermögensteuer
            </p>

            <h3 className="mt-5 font-serif text-3xl leading-tight">
              Spanien kann bei höheren Vermögenswerten relevant werden.
            </h3>

            <p className="mt-6 leading-relaxed text-stone-600">
              Deutsche Nichtresidenten werden in Spanien grundsätzlich nur mit
              spanischen Vermögenswerten erfasst. Bei hochwertigen Immobilien
              oder mehreren spanischen Vermögenswerten sollte vor dem Kauf
              geprüft werden, ob spanische Vermögensteuer entstehen kann.
            </p>

            <p className="mt-5 leading-relaxed text-stone-600">
              Freibeträge, Bewertung, Schuldenabzug und regionale Regeln sind
              entscheidend. Nicht jeder Eigentümer zahlt diese Steuer, aber bei
              Luxusimmobilien sollte sie nicht übersehen werden.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Große Vermögen
            </p>

            <h3 className="mt-5 font-serif text-3xl leading-tight">
              Zusätzliche spanische Steuern können bei sehr hohen Vermögen greifen.
            </h3>

            <p className="mt-6 leading-relaxed text-stone-600">
              Spanien kennt neben der Vermögensteuer auch besondere Regelungen
              für große Vermögen. Ob diese relevant sind, hängt von der gesamten
              Struktur, dem Wert der spanischen Vermögenswerte und der
              persönlichen Situation ab.
            </p>

            <p className="mt-5 leading-relaxed text-stone-600">
              Gerade bei teureren Villen, gemeinsamer Familienstruktur oder
              geplanter Vermietung sollte die steuerliche Struktur vor der
              notariellen Übertragung geprüft werden.
            </p>
          </div>
        </div>
      </section>

      {/* SALE */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-white p-12 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Späterer Verkauf
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Denken Sie schon beim Kauf an den möglichen Verkauf.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {saleTopics.map((item) => (
              <div key={item.title} className="rounded-[28px] bg-[#f6f1ea] p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INHERITANCE */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-[#efe7dc] p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Erbschaft und Familie
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Was passiert, wenn die spanische Immobilie innerhalb der Familie übergehen soll?
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-700">
            <p>
              Viele Käufer planen den Kauf sehr genau, denken aber weniger über
              die spätere Nachfolge nach. Bei einer spanischen Immobilie können
              deutsches Erbrecht, spanische Abwicklung, spanische Erbschaftsteuer
              und deutsche Erbschaftsteuer zusammenkommen.
            </p>

            <p>
              Ein deutsches Testament kann wichtig sein, löst aber nicht
              automatisch alle praktischen Fragen in Spanien. Eigentümer sollten
              früh klären, wer die Immobilie später übernehmen soll, wie die
              Eigentumsanteile gehalten werden und welche Steuerfolgen bei
              Erbschaft oder Schenkung entstehen können.
            </p>

            <p>
              Bei Familienvermögen, Patchwork-Situationen, mehreren Kindern,
              unverheirateten Partnern oder Immobilien über Gesellschaften ist
              eine frühzeitige Beratung besonders sinnvoll.
            </p>
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vor dem Kauf prüfen
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Steuerfragen, die deutsche Käufer vor der Reservierung klären sollten.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {planningChecks.map((question) => (
              <div key={question} className="rounded-2xl bg-[#f6f1ea] p-5">
                <p className="leading-relaxed text-stone-700">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-stone-900 p-14 text-center text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">
            Nordic Move Spain
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Kaufen Sie als deutscher Käufer eine Immobilie in Spanien?
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-white/80">
            Wir helfen deutschen Käufern, die praktischen, rechtlichen und
            steuerlichen Fragen rund um den Immobilienkauf an der Costa Blanca
            Nord frühzeitig zu strukturieren — gemeinsam mit unabhängigen
            lokalen Spezialisten.
          </p>

          <a
            href="/de/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-stone-900"
          >
            Persönliches Kennenlernen planen
          </a>
        </div>
      </section>

      {/* SOURCES */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Offizielle Quellen
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Diese Seite basiert auf offiziellen deutschen und spanischen
            Informationsquellen sowie dem Doppelbesteuerungsabkommen zwischen
            Deutschland und Spanien. Steuerregeln können sich ändern. Prüfen Sie
            vor dem Kauf immer Ihre persönliche Situation mit einem qualifizierten
            Steuerberater.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {officialSources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#f6f1ea] p-5 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#efe6d9]"
              >
                {source.label} →
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
