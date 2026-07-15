export const metadata = {
  title: "Kompletter Leitfaden zum Immobilienkauf in Spanien | Costa Blanca Nord",
  description:
    "Ein ausführlicher Kaufleitfaden für internationale Käufer an der Costa Blanca Nord und in der Provinz Alicante: rechtliche Prüfungen, lokale Regeln, ITP/IVA, touristische Vermietung, Eigentümergemeinschaften, Energieausweise, technische Kontrollen und Kaufrisiken.",
  openGraph: {
    title: "Kompletter Leitfaden zum Immobilienkauf in Spanien | Nordic Move Spain",
    description:
      "Was internationale Käufer vor dem Kauf an der Costa Blanca Nord prüfen sollten: Dokumente, lokale Regeln, rechtliche Risiken, bauliche Themen, Kosten und Vermietungsregeln.",
    type: "website",
  },
};

export default function BuyingProcessPage() {
  const topChecks = [
    {
      title: "Rechtliches Eigentum",
      text:
        "Prüfen Sie, wer rechtlich Eigentümer der Immobilie ist, ob Hypotheken, Belastungen, Schulden, Pfändungen, Dienstbarkeiten oder andere Lasten bestehen und ob der Verkäufer tatsächlich berechtigt ist, die Immobilie zu verkaufen.",
    },
    {
      title: "Städtebauliche und bauliche Legalität",
      text:
        "Prüfen Sie bei der Gemeinde, ob die Immobilie, der Pool, Terrassen, Anbauten, Gästeunterkünfte, Pergolen und andere bauliche Maßnahmen legal errichtet und korrekt registriert wurden.",
    },
    {
      title: "Lokale Regeln je Gemeinde",
      text:
        "Die Regeln können sich zwischen Jávea, Dénia, Moraira, Benissa, Altea, Calpe und anderen Orten unterscheiden. Denken Sie an touristische Vermietung, Renovierungen, Bebauungspläne, geschützte Zonen und Parkregeln.",
    },
    {
      title: "Technischer Zustand",
      text:
        "Achten Sie nicht nur auf die Optik. Prüfen Sie Feuchtigkeit, Risse, Dach, Installationen, Elektrik, Leitungen, Pool, Klärgrube, Stützmauern, Hanglage und Instandhaltungsrisiken.",
    },
    {
      title: "Eigentümergemeinschaft und Vermietung",
      text:
        "Prüfen Sie Satzung, Regeln, Protokolle, offene Gemeinschaftsbeiträge, monatliche Kosten und mögliche Einschränkungen bei touristischer Vermietung oder Renovierungen.",
    },
    {
      title: "Tatsächliche Eigentumskosten",
      text:
        "Berechnen Sie nicht nur den Kaufpreis, sondern auch Steuern, Notar, Grundbuch, Anwalt, Hypothek, Versicherung, IBI, Müllgebühren, Instandhaltung, Gemeinschaftskosten und Nichtresidentensteuer.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Zuerst die richtige Region wählen",
      text:
        "Beginnen Sie nicht nur mit Besichtigungen. Vergleichen Sie zuerst Orte, Viertel, Alltag, Erreichbarkeit, Winteraktivität, Gesundheitsversorgung, Schulen, Gemeinschaft, Privatsphäre und langfristigen Wert.",
    },
    {
      number: "02",
      title: "Budget und Finanzierung prüfen",
      text:
        "Erstellen Sie eine realistische Berechnung inklusive Kaufpreis, Kaufnebenkosten, Steuern, Renovierung, Möbel, Instandhaltung, Hypothekenbedingungen und jährlichen Eigentumskosten.",
    },
    {
      number: "03",
      title: "Reservierung oder Arras prüfen lassen",
      text:
        "Unterschreiben Sie keine Reservierungsvereinbarung und keinen Arras-Vertrag ohne Prüfung durch einen unabhängigen Anwalt. Achten Sie auf Bedingungen, Fristen, Zahlungszeitpunkte und Rückzahlungsklauseln.",
    },
    {
      number: "04",
      title: "Rechtliche Due Diligence",
      text:
        "Prüfen Sie Nota Simple, Eigentum, Belastungen, Schulden, Hypothek, Katasterdaten, Genehmigungen, Gemeinschaft, Verträge, Vertretungsbefugnis des Verkäufers und mögliche Einschränkungen.",
    },
    {
      number: "05",
      title: "Gemeindliche und technische Kontrollen",
      text:
        "Lassen Sie von der Gemeinde bestätigen, ob bauliche Elemente und Nutzung zulässig sind. Kombinieren Sie dies mit einer technischen Prüfung der Immobilie, Installationen und des Grundstücks.",
    },
    {
      number: "06",
      title: "Notar, Zahlung und Übertragung",
      text:
        "Die Übertragung findet beim Notar statt. Danach folgen Steuerzahlungen, Eintragung im Eigentumsregister, Versorgungsverträge, Versicherung und lokale Verwaltung.",
    },
  ];

  const legalChecks = [
    "Nota Simple: Eigentümer, Belastungen, Hypotheken, Pfändungen, Dienstbarkeiten und Grunddaten der Immobilie.",
    "Eigentumsregister: Prüfen Sie, ob die rechtliche Beschreibung mit dem übereinstimmt, was Sie kaufen.",
    "Catastro: Vergleichen Sie Katasterdaten, Grundstück, bebaute Fläche und Referenz mit der tatsächlichen Situation.",
    "Verkäufer: Prüfen Sie Identität, Befugnis, Vollmachten, Güterstand oder Gesellschaftsstruktur.",
    "Schulden: Prüfen Sie offene Hypotheken, IBI, Gemeinschaftsbeiträge, Versorgungsrechnungen und mögliche lokale Abgaben.",
    "Verträge: Prüfen Sie Reservierungsvertrag, Arras, Kaufbedingungen, Vertragsstrafen, Fristen und Rücktrittsklauseln.",
    "Genehmigungen: Prüfen Sie, ob Immobilie, Pool, Terrassen, Anbauten und Gästeunterkünfte legal errichtet wurden.",
    "Nutzung: Prüfen Sie, ob die geplante Nutzung zu Bebauungsplan, Gemeinschaftsregeln und lokalen Vorschriften passt.",
    "Übergabe: Prüfen Sie Schlüssel, Versorgungsverträge, Garantien, Inventar, Möbel und mögliche laufende Verträge.",
    "Eintragung: Nach der Übertragung muss das Eigentum korrekt im Eigentumsregister eingetragen werden.",
  ];

  const localAlicanteChecks = [
    {
      title: "Gemeindliche Bauvorschriften",
      text:
        "An der Costa Blanca Nord unterscheiden sich Bauvorschriften je nach Gemeinde. In Jávea, Dénia, Benissa, Teulada-Moraira, Calpe und Altea können Regeln zu Anbauten, Höhen, Grundstücksgrenzen, Pools, Terrassen, Stellplätzen und Renovierungen unterschiedlich sein.",
    },
    {
      title: "Urbanes oder ländliches Grundstück",
      text:
        "Eine Immobilie auf ländlichem Boden kann anderen Einschränkungen unterliegen als eine Immobilie in einem urbanen Gebiet. Bei rustikalen oder ländlich gelegenen Immobilien sollten Erweiterung, Vermietung, Renovierung, Zugang, Wasser, Strom und Klärgrube immer rechtlich und dokumentarisch geprüft werden.",
    },
    {
      title: "Küstenzone und Ley de Costas",
      text:
        "Immobilien in Meeresnähe können von Küstenschutzregeln betroffen sein. Abstand zur Küstenlinie, bestehende Bebauung, Renovierungspläne und Erweiterungsmöglichkeiten sollten sorgfältig geprüft werden.",
    },
    {
      title: "Geschützte Natur- und Landschaftsräume",
      text:
        "In oder nahe Gebieten wie Montgó, Serra Gelada, Peñón de Ifach oder anderen geschützten Zonen können zusätzliche Einschränkungen für Bau, Erweiterungen, Beleuchtung, Zugang, Vegetation oder Nutzung gelten.",
    },
    {
      title: "Regeln zur touristischen Vermietung",
      text:
        "Die Comunitat Valenciana hat spezifische Regeln für viviendas de uso turístico. Neben regionaler Registrierung können auch lokale städtebauliche Vorgaben und Regeln der Eigentümergemeinschaft darüber entscheiden, ob touristische Vermietung möglich ist.",
    },
    {
      title: "Überschwemmung, Brand und Hanglage",
      text:
        "Prüfen Sie Risiken wie Entwässerung, Überschwemmung, Waldbrandgefahr, Stützmauern, Erosion und Versicherbarkeit in Tälern, Barrancos, Hanglagen, Waldgebieten und Küstenlagen.",
    },
  ];

  const financialItems = [
    {
      title: "Bestandsimmobilie: ITP",
      text:
        "Beim Kauf einer Bestandsimmobilie zahlt der Käufer in der Regel Grunderwerbsteuer, Impuesto sobre Transmisiones Patrimoniales. In der Comunitat Valenciana wird häufig mit rund 10% kalkuliert, aber Sätze und Ausnahmen sollten zum Kaufzeitpunkt immer aktuell geprüft werden.",
    },
    {
      title: "Neubau: IVA und AJD",
      text:
        "Beim Kauf einer Neubauimmobilie direkt vom Bauträger gilt normalerweise IVA statt ITP. Zusätzlich kann AJD, die spanische Stempelsteuer, anfallen.",
    },
    {
      title: "Notar und Register",
      text:
        "Die notarielle Übertragung, Eintragung im Eigentumsregister und administrative Abwicklung verursachen zusätzliche Kosten. Diese hängen von Kaufpreis, Dokumenten und Finanzierung ab.",
    },
    {
      title: "Anwalt und technische Prüfung",
      text:
        "Ein unabhängiger Anwalt und ein technischer Spezialist kosten Geld, können aber deutlich größere Risiken verhindern. Das ist besonders wichtig bei Villen, älteren Immobilien und renovierten Häusern.",
    },
    {
      title: "Hypothek und Bankkosten",
      text:
        "Bei Finanzierung können Bewertung, Bankbedingungen, Zinssatz, verpflichtende Versicherungen, Tilgungsstruktur, Gebühren für vorzeitige Rückzahlung und Währungsrisiko wichtig sein.",
    },
    {
      title: "Jährliche Eigentumskosten",
      text:
        "Denken Sie an IBI, Müllgebühr, Gemeinschaftskosten, Versicherung, Instandhaltung, Pool, Garten, Versorgungsleistungen, Alarmanlage, Internet, Property Management und Nichtresidentensteuer.",
    },
  ];

  const communityChecks = [
    "Fordern Sie die Satzung und internen Regeln der Comunidad de Propietarios an.",
    "Prüfen Sie die Protokolle der letzten Eigentümerversammlungen.",
    "Prüfen Sie, ob geplante Arbeiten oder Sonderumlagen bevorstehen.",
    "Prüfen Sie, ob der Verkäufer offene Schulden gegenüber der Gemeinschaft hat.",
    "Prüfen Sie, ob touristische Vermietung erlaubt oder eingeschränkt ist.",
    "Prüfen Sie Regeln zu Haustieren, Grillen, Klimaanlagen, Markisen, Fassadenänderungen und Parken.",
    "Fragen Sie nach Rücklagen, Instandhaltungszustand, Aufzügen, Pool, Garten, Sicherheit und gemeinschaftlichen Installationen.",
    "Prüfen Sie, ob die Immobilie die korrekte Quote beziehungsweise Beteiligung an der Gemeinschaft hat.",
  ];

  const technicalChecks = [
    {
      title: "Feuchtigkeit und Belüftung",
      text:
        "Feuchtigkeitsprobleme kommen häufig bei älteren Küstenimmobilien, schlecht belüfteten Apartments, Kellern und Immobilien vor, die lange leer standen.",
    },
    {
      title: "Dach, Fassade und Terrassen",
      text:
        "Prüfen Sie Abdichtung, Risse, Entwässerung, Geländer, Dacheindeckung und mögliche Lecks rund um Terrassen oder Flachdächer.",
    },
    {
      title: "Elektrik und Sanitär",
      text:
        "Ältere Installationen entsprechen nicht immer heutigen Erwartungen. Prüfen Sie Kapazität, Sicherheit, Leitungen, Wasserdruck, Warmwasser und Wartungshistorie.",
    },
    {
      title: "Pool und Technik",
      text:
        "Prüfen Sie Pumpe, Filter, Leitungen, Leckagen, Genehmigung, Technikraum und zukünftige Wartungskosten.",
    },
    {
      title: "Klärgrube und Entwässerung",
      text:
        "Bei ländlichen Immobilien oder älteren Villen ist wichtig zu prüfen, ob Entwässerung, Klärgrube, Wasserspeicher und Abwassersysteme legal, sicher und wartbar sind.",
    },
    {
      title: "Grundstück und Stützmauern",
      text:
        "Bei Hanggrundstücken sollte besonders auf Stützmauern, Bodenstabilität, Entwässerung, Zufahrt, Treppen, Einfahrt und Instandhaltung geachtet werden.",
    },
  ];

  const rentalChecks = [
    {
      title: "Regionale Registrierung",
      text:
        "Für touristische Vermietung in der Comunitat Valenciana gelten regionale Registrierungs- und Informationspflichten. Anzeigen müssen korrekte Angaben und, wenn Vermietung erlaubt ist, die Registrierungsnummer enthalten.",
    },
    {
      title: "Lokale Vereinbarkeit",
      text:
        "Gemeinden können zusätzliche städtebauliche Anforderungen stellen. Eine Immobilie, die attraktiv für Vermietung wirkt, ist nicht automatisch für touristische Nutzung geeignet oder zugelassen.",
    },
    {
      title: "Eigentümergemeinschaft",
      text:
        "Bei Apartments und Urbanisationen muss geprüft werden, ob die Gemeinschaft touristische Vermietung erlaubt, begrenzt oder nach den geltenden Regeln einschränken kann.",
    },
    {
      title: "Finanzielle Realität",
      text:
        "Vermietungspotenzial sollte realistisch berechnet werden, inklusive Auslastung, Verwaltung, Reinigung, Steuern, Lizenzen, saisonaler Belastung und Abnutzung.",
    },
  ];

  const afterPurchase = [
    "Eintragung im Eigentumsregister prüfen.",
    "Sicherstellen, dass Steuern und Kosten nach der Übertragung korrekt abgewickelt werden.",
    "IBI, Müllgebühr und lokale Abgaben auf den Namen des Eigentümers umstellen.",
    "Wasser, Strom, Internet, Alarmanlage und Versicherung organisieren.",
    "Eigentümergemeinschaft informieren und Bankeinzug für monatliche Gebühren einrichten.",
    "Nichtresidentensteuer oder andere steuerliche Pflichten planen.",
    "Schlüssel, Alarmcodes, Garantien, Handbücher und Wartungsverträge sammeln.",
    "Technische Berichte, Nota Simple, Kaufurkunde und Versicherungsdokumente sicher aufbewahren.",
  ];

  const faqs = [
    {
      question: "Können Ausländer in Spanien Immobilien kaufen?",
      answer:
        "Ja, Ausländer können in Spanien Immobilien kaufen. Erforderlich sind unter anderem eine NIE-Nummer, korrekte Identifikation, rechtliche Prüfung, steuerliche Planung und häufig ein spanisches Bankkonto.",
    },
    {
      question: "Ist ein Anwalt beim Kauf in Spanien Pflicht?",
      answer:
        "Ein Anwalt ist nicht immer gesetzlich vorgeschrieben, aber für internationale Käufer dringend zu empfehlen. Der Anwalt prüft Eigentum, Belastungen, Verträge, Genehmigungen und Risiken.",
    },
    {
      question: "Was ist der Unterschied zwischen Registro und Catastro?",
      answer:
        "Das Registro de la Propiedad enthält rechtliche Informationen zu Eigentum und Rechten. Das Catastro enthält administrative und katasterbezogene Daten wie Fläche, Nutzung und Referenz. Unterschiede zwischen beiden sollten vor dem Kauf verstanden werden.",
    },
    {
      question: "Kann ich meine Immobilie einfach touristisch vermieten?",
      answer:
        "Nein. Touristischer Vermietung hängen regionale Regeln, kommunale Bedingungen, Immobilientyp, Lage und mögliche Regeln der Eigentümergemeinschaft entgegen oder zugrunde.",
    },
    {
      question: "Sollte ich die Immobilie technisch prüfen lassen?",
      answer:
        "Bei Villen, älteren Immobilien, Häusern mit Pool, Hanggrundstücken oder renovierten Objekten ist eine technische Prüfung sehr sinnvoll. Viele Risiken sind bei einer normalen Besichtigung nicht sichtbar.",
    },
    {
      question: "Welche lokalen Regeln sind an der Costa Blanca Nord wichtig?",
      answer:
        "Besonders wichtig sind Bau- und Planungsregeln, touristische Vermietung, Küstenvorschriften, geschützte Zonen, Gemeinschaftsregeln, Parken, Klärgruben, Zufahrt, Hanglage, Entwässerung sowie Brand- oder Überschwemmungsrisiken.",
    },
  ];

  const officialSources = [
    {
      label: "Agencia Tributaria: IVA oder ITP beim Immobilienkauf",
      href: "https://sede.agenciatributaria.gob.es/Sede/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
    },
    {
      label: "Agencia Tributaria: Modelo 210 Nichtresidentensteuer",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/todas-gestiones/impuestos-tasas/impuesto-sobre-renta-no-residentes/modelo-210-irnr______a-no-residentes-permanente_/instrucciones.html",
    },
    {
      label: "Registradores de España: Eigentumsregister",
      href: "https://sede.registradores.org/site/propiedad?lang=en_EN",
    },
    {
      label: "Notariado: Immobilienkauf in Spanien",
      href: "https://www.notariado.org/comprar-una-vivienda/",
    },
    {
      label: "Administración.gob.es: Notare und Eigentumsregister",
      href: "https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/compraventa-bienes-inmuebles/notarias-registros-propiedad.html",
    },
    {
      label: "Generalitat Valenciana: touristische Unterkünfte",
      href: "https://sede.gva.es/es/detall-tramit?id_proc=19207",
    },
    {
      label: "MITECO: Energiezertifizierung von Gebäuden",
      href: "https://www.miteco.gob.es/es/energia/eficiencia/certificacion-energetica/real-decreto-390-2021.html",
    },
    {
      label: "BOE: Ley de Costas",
      href: "https://www.boe.es/buscar/act.php?id=BOE-A-1988-18762",
    },
    {
      label: "Catastro: Katasterreferenz",
      href: "https://www.catastro.hacienda.gob.es/es-ES/referencia_catastral.html",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative flex min-h-[82vh] items-center overflow-hidden px-8 py-32">
        <img
          src="https://multimedia.comunitatvalenciana.com/682E658C47A64EC3B22D304139F66CBD/img/D799BA15C2B64079BB4ADACA590DBF80/Dionis_Boutique.jpg?responsive"
          alt="Immobilie in Spanien an der Costa Blanca Nord kaufen"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 mx-auto max-w-6xl text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Kompletter Kaufleitfaden
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Immobilienkauf in Spanien: Regeln, Risiken und lokale Kontrollen an der Costa Blanca Nord.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            Ein ausführlicher Leitfaden für internationale Käufer, die mehr
            prüfen möchten als Aussicht und Preis: von Nota Simple, Genehmigungen
            und Catastro bis zu touristischer Vermietung, Eigentümergemeinschaften,
            technischen Risiken und lokalen Regeln in Alicante.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/de/services/purchase-safety-report"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Purchase Safety Report ansehen
            </a>

            <a
              href="/de/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Kennenlerngespräch planen
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Nicht nur beim Notar unterschreiben
            </p>

            <h2 className="font-serif text-5xl leading-tight text-[#1e2a3a]">
              Die echte Kaufprüfung beginnt, bevor Sie sich in eine Immobilie verlieben.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Eine Immobilie in Spanien zu kaufen ist anders als ein Kauf in den
              Niederlanden, Deutschland, Belgien oder Skandinavien. Rechtliche
              Struktur, Gemeinderegeln, Bau- und Registrierungsfragen,
              Besteuerung, touristische Vermietung und Eigentümergemeinschaften
              funktionieren anders.
            </p>

            <p className="mt-6">
              Besonders an der Costa Blanca Nord sind lokale Kontrollen wichtig.
              Eine Villa in Jávea, ein Apartment in Calpe, eine Finca in Benissa,
              eine Immobilie in Altea Hills oder ein Haus nahe der Küste können
              jeweils andere Aufmerksamkeitspunkte haben.
            </p>

            <p className="mt-6">
              Dieser Leitfaden bietet eine praktische, aber breite Checkliste. Er
              ersetzt keine Beratung durch Anwalt, Notar, Gestor, Steuerberater
              oder technischen Spezialisten, hilft Ihnen aber zu verstehen, welche
              Fragen Sie vor dem Kauf stellen sollten.
            </p>
          </div>
        </div>
      </section>

      {/* TOP CHECKS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Was sollte geprüft werden?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Sechs Prüfungen, die fast jeder Käufer an der Costa Blanca Nord benötigt.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {topChecks.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white p-9 shadow-sm">
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

      {/* PROCESS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Kaufprozess
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Von der ersten Orientierung bis zur Übertragung beim Notar.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.number} className="border-l border-[#c8a063]/30 pl-6">
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {step.number}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL CHECKS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Rechtliche Due Diligence
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Was sollte geprüft werden, bevor Sie unterschreiben?
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-white/80">
            Die Nota Simple ist wichtig, aber sie reicht nicht aus. Ein sicherer
            Kauf erfordert eine Kombination aus Registerinformationen,
            Gemeindekontrollen, technischer Prüfung, Vertragsprüfung und Einblick
            in die Eigentümergemeinschaft.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {legalChecks.map((check) => (
              <div key={check} className="rounded-2xl bg-white/8 p-5">
                <p className="leading-relaxed text-white/80">• {check}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL ALICANTE CHECKS */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Lokale Regeln in Alicante
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Der gleiche Immobilientyp kann je nach Gemeinde unterschiedliche Risiken haben.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Die Costa Blanca Nord liegt in der Provinz Alicante, aber viele
              praktische Regeln werden lokal durch Gemeinde, Bebauungspläne,
              Urbanisationen, Küstenschutz und Eigentümergemeinschaften
              beeinflusst. Prüfen Sie daher immer die genaue Lage, nicht nur die
              Immobilie selbst.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {localAlicanteChecks.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white p-9 shadow-sm">
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

      {/* COSTS */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Finanzielle Verpflichtungen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Verstehen Sie die tatsächlichen Kosten von Kauf und Eigentum.
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
              <p>
                Der Kaufpreis ist nur ein Teil. Beim Kauf in Spanien müssen Sie
                auch Steuern, Notar, Register, Anwalt, Hypothek, technische
                Prüfungen und Verwaltungskosten berücksichtigen.
              </p>

              <p>
                Nach dem Kauf bleiben jährliche Kosten bestehen: IBI, Müllgebühr,
                Versicherung, Gemeinschaftskosten, Instandhaltung,
                Versorgungsleistungen, Nichtresidentensteuer und gegebenenfalls
                Property Management.
              </p>

              <p>
                Bei höherwertigen Immobilien, mehreren Objekten,
                Vermietungsplänen oder internationalen Steuersituationen ist die
                Beratung durch einen Steuerexperten wichtig.
              </p>
            </div>
          </div>

          <img
            src="https://orangevillas.com/media/images/properties/thumbnails/105635_xl.jpg"
            alt="Finanzielle Begleitung beim Immobilienkauf in Spanien"
            className="h-[560px] w-full rounded-[32px] object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {financialItems.map((item) => (
            <div key={item.title} className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                {item.title}
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-[#efe7dc] p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Comunidad de Propietarios
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Eine schöne Immobilie kann trotzdem falsch sein, wenn die Gemeinschaft nicht passt.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-700">
            Bei Apartments, Penthäusern, Reihenhäusern und Urbanisationen
            bestimmt die Eigentümergemeinschaft oft viel mehr, als Käufer
            erwarten. Denken Sie an monatliche Kosten, Regeln, Instandhaltung,
            Vermietung, Haustiere, Renovierungen, Parken und gemeinschaftliche
            Einrichtungen.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {communityChecks.map((check) => (
              <div key={check} className="rounded-2xl bg-white/70 p-5">
                <p className="leading-relaxed text-stone-700">• {check}</p>
              </div>
            ))}
          </div>

          <a
            href="/de/guides/homeowners-association-spain"
            className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
          >
            Mehr über Eigentümergemeinschaften lesen
          </a>
        </div>
      </section>

      {/* TOURIST RENTAL */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Touristischer Vermietung
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Vermietungspotenzial ist keine Garantie, dass Vermietung erlaubt ist.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Viele internationale Käufer rechnen Vermietungseinnahmen in ihre
              Finanzplanung ein. Das kann funktionieren, muss aber vor dem Kauf
              geprüft werden. Regionale Regeln, kommunale Vereinbarkeit und die
              Eigentümergemeinschaft können alle Einfluss haben.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {rentalChecks.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white p-8 shadow-sm">
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

      {/* TECHNICAL CHECKS */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <img
            src="/images/legal.png"
            alt="Technische Prüfung beim Immobilienkauf in Spanien"
            className="h-[560px] w-full rounded-[32px] object-cover shadow-xl"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Technische Prüfung
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Viele Kaufrisiken sind bei einer Besichtigung nicht sichtbar.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Eine sonnige Terrasse, schöne Möbel und Meerblick sagen wenig über
              den technischen Zustand aus. Besonders bei älteren Villen,
              renovierten Immobilien, Häusern mit Pool, Hanggrundstücken oder
              ländlicher Lage ist eine technische Prüfung sinnvoll.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Kombinieren Sie die technische Prüfung mit rechtlicher und
              gemeindlicher Due Diligence. Ein technisch solides Haus kann
              rechtliche Probleme haben, und eine rechtlich saubere Immobilie
              kann technisch teuer werden.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technicalChecks.map((item) => (
            <div key={item.title} className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                {item.title}
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ENERGY */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-white p-12 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Energieausweis und zukünftige Renovierungen
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Energieeffizienz wird für Verkauf, Vermietung und Finanzierung immer wichtiger.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">
            <p>
              Spanien verlangt einen Energieausweis für bestehende Gebäude oder
              Gebäudeteile, die verkauft oder an einen neuen Mieter vermietet
              werden. Auch touristische Unterkünfte fallen bei Vermietung unter
              diese Regeln.
            </p>

            <p>
              Für Käufer bedeutet das, dass ältere Immobilien zusätzliche
              Aufmerksamkeit erfordern. Schlechte Dämmung, alte Fenster,
              veraltete Klimaanlagen, unzureichende Belüftung oder eine niedrige
              Energieklasse können später Investitionen erforderlich machen.
            </p>

            <p>
              Fragen Sie daher nicht nur, ob der Energieausweis vorhanden ist,
              sondern auch, was die Bewertung für Komfort, Renovierungsbudget und
              zukünftige Wiederverkaufbarkeit bedeutet.
            </p>
          </div>
        </div>
      </section>

      {/* AFTER PURCHASE */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Nach dem Kauf
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Der Kauf endet nicht mit der Schlüsselübergabe.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-white/80">
            Nach dem Notar müssen Dokumente, Eintragungen, Zahlungen, Steuern,
            Versicherungen, Versorgungsverträge und Wartung richtig organisiert
            werden. Deshalb arbeitet Nordic Move Spain mit einem sicheren
            Kundenportal, in dem wichtige Dokumente und nächste Schritte
            übersichtlich gesammelt werden.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {afterPurchase.map((item) => (
              <div key={item} className="rounded-2xl bg-white/8 p-5">
                <p className="leading-relaxed text-white/80">• {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Nordic Move Spain
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Wir ersetzen weder Anwalt noch technischen Spezialisten. Wir sorgen dafür, dass die richtigen Fragen gestellt werden.
            </h2>
          </div>

          <div className="rounded-[36px] bg-white p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-stone-600">
              Nordic Move Spain begleitet internationale Käufer dabei, ihre
              Kaufreise strukturiert aufzubauen. Zuerst helfen wir bei der
              richtigen Region und Wohnumgebung, anschließend bei Klarheit über
              Dokumente, Risiken, Spezialisten und nächste Schritte.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Für rechtliche, steuerliche, technische und hypothekarische
              Prüfungen arbeiten wir mit unabhängigen lokalen Fachleuten. Deren
              Rolle ist die Prüfung; unsere Rolle ist es, den Prozess klar,
              verständlich und gut organisiert zu machen.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/de/services/purchase-safety-report"
                className="rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Purchase Safety Report ansehen
              </a>

              <a
                href="/de/services/secure-client-portal"
                className="rounded-full border border-[#1e2a3a] px-8 py-4 text-sm text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
              >
                Sicheres Kundenportal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Häufige Fragen
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Fragen, die Käufer oft zu spät stellen.
          </h2>

          <div className="mt-10 grid gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[28px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {faq.question}
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICIAL SOURCES */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Offizielle Quellen
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Dieser Leitfaden basiert auf allgemeiner Kaufpraxis und offiziellen
            spanischen Quellen. Regeln ändern sich und können je nach Gemeinde
            unterschiedlich sein. Lassen Sie Ihre persönliche Situation und die
            konkrete Immobilie immer von einem unabhängigen Anwalt,
            Steuerberater, Gestor und technischen Spezialisten prüfen.
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

      {/* FINAL CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-stone-900 p-14 text-center text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">
            Mit Vertrauen kaufen
          </p>

          <h2 className="font-serif text-5xl leading-tight">
            Denken Sie über eine Immobilie an der Costa Blanca Nord nach?
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-white/80">
            Wir helfen Ihnen, zuerst die richtige Region zu wählen, anschließend
            die Immobilie kritisch zu prüfen und den Kaufprozess mit mehr
            Klarheit, Struktur und Vertrauen zu durchlaufen.
          </p>

          <a
            href="/de/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-stone-900"
          >
            Persönliches Kennenlernen planen
          </a>
        </div>
      </section>
    </main>
  );
}
