export const metadata = {
  title: "Ehrlicher Leitfaden für den Immobilienkauf an der Costa Blanca Nord",
  description:
    "Ein ehrlicher Leitfaden für niederländische, deutsche und Schweizer Käufer, die eine Immobilie an der Costa Blanca Nord in Betracht ziehen. Erfahren Sie mehr über versteckte Kosten, Vermietung, Lärmbelastung, Strommasten, Regeln der Eigentümergemeinschaft, rechtliche Prüfungen und praktische Risiken vor dem Kauf.",
};

export default function HonestGuideBuyingPropertyCostaBlancaNorthPage() {
  const realLifeChecks = [
    {
      title: "Strommasten und oberirdische Leitungen",
      text:
        "Eine Immobilie kann auf Fotos wunderschön aussehen, aber ein nahegelegener Strommast, eine oberirdische Leitung oder ein Transformator kann den Ausblick, die Atmosphäre der Immobilie und die spätere Wiederverkäuflichkeit beeinflussen. Besichtigen Sie die Immobilie immer aus verschiedenen Blickwinkeln und prüfen Sie die gesamte Umgebung, nicht nur den Blick von der Terrasse.",
    },
    {
      title: "Verkehrslärm und versteckte Betriebsamkeit",
      text:
        "Manche Immobilien wirken während einer Besichtigung ruhig, liegen aber in der Nähe einer Straße, die während der Stoßzeiten, in den Sommermonaten oder am Wochenende deutlich stärker befahren ist. Besuchen Sie die Immobilie zu verschiedenen Tageszeiten, bevor Sie eine endgültige Entscheidung treffen.",
    },
    {
      title: "Sommerbetrieb und touristische Belastung",
      text:
        "Eine ruhige Straße im März kann sich im August völlig anders anfühlen. In manchen Küstengebieten können Ferienvermietung, spät heimkehrende Gäste, Strandverkehr und saisonale Bars die Atmosphäre stark verändern.",
    },
    {
      title: "Steile Zufahrtswege und Alltagstauglichkeit",
      text:
        "Viele Villen an der Costa Blanca Nord haben einen wunderbaren Ausblick, weil sie an einem Hang gebaut wurden. Das kann aber auch steile Straßen, viele Treppen, schwieriges Parken, höhere Instandhaltungskosten und eine stärkere Abhängigkeit vom Auto bedeuten.",
    },
    {
      title: "Urbanisation und Regeln der Eigentümergemeinschaft",
      text:
        "Gehört die Immobilie zu einer Urbanisation oder Apartmentanlage, können die Regeln Einfluss auf Vermietung, Umbauten, Haustiere, Pools, Lärm, Parken, Fassadenänderungen und Kosten haben. Prüfen Sie immer die Satzung und die aktuellen Versammlungsprotokolle der Eigentümergemeinschaft.",
    },
    {
      title: "Erwartungen an Vermietung",
      text:
        "Viele Käufer hören, dass eine Immobilie Mieteinnahmen erzielen kann. Das kann stimmen, aber das tatsächliche Nettoergebnis hängt von Genehmigungen, Steuern, Maklerkosten, Reinigung, Instandhaltung, Versicherungen, Regeln der Eigentümergemeinschaft, saisonalen Einflüssen und Belegungsquote ab.",
    },
  ];

  const hiddenCosts = [
    {
      title: "Grunderwerbsteuer und Notarkosten",
      text:
        "Die Kaufkosten bestehen aus mehr als nur dem Angebotspreis. Je nachdem, ob Sie eine Bestandsimmobilie oder einen Neubau kaufen, können Grunderwerbsteuer oder Mehrwertsteuer, Notarkosten, Grundbuchkosten, Anwaltskosten, Hypothekenkosten, Bankgebühren und Bewertungskosten anfallen.",
    },
    {
      title: "Anwaltskosten und Prüfung",
      text:
        "Ein guter unabhängiger Anwalt ist kein Luxus. Der Anwalt sollte unter anderem Eigentum, Schulden, Genehmigungen, städtebaulichen Status, Rückstände bei der Eigentümergemeinschaft, Vermietungsbeschränkungen und die Übereinstimmung mit den offiziellen Registern prüfen.",
    },
    {
      title: "Beiträge zur Eigentümergemeinschaft",
      text:
        "Apartments und viele Immobilien innerhalb von Urbanisationen haben monatliche oder vierteljährliche Beiträge. Daraus werden zum Beispiel Pools, Gärten, Aufzüge, Sicherheit, Beleuchtung und gemeinsame Instandhaltung bezahlt. Die Beiträge können steigen, wenn größere Arbeiten erforderlich sind.",
    },
    {
      title: "IBI und kommunale Steuern",
      text:
        "Eigentümer zahlen in der Regel jährlich kommunale Grundsteuer. Die Höhe hängt von der Gemeinde, dem Katasterwert und der Art der Immobilie ab. Fordern Sie vor dem Kauf immer den aktuellsten IBI-Zahlungsnachweis an.",
    },
    {
      title: "Versicherungen",
      text:
        "Gebäudeversicherung, Hausratversicherung, Haftpflichtversicherung und Vermietungsversicherung können alle relevant sein. Wenn Sie die Immobilie vermieten, reicht eine Standardversicherung für private Nutzung möglicherweise nicht aus.",
    },
    {
      title: "Instandhaltung und Reparaturen",
      text:
        "Pools, Gärten, Klimaanlagen, Feuchtigkeitsprobleme, Terrassen, Dächer, Außenanstrich, Geräte und Sicherheitssysteme benötigen Wartung. Ältere Villen können viel Charakter haben, bringen aber häufig höhere Instandhaltungskosten mit sich.",
    },
    {
      title: "Nebenkosten und laufende Fixkosten",
      text:
        "Kosten für Strom, Wasser, Internet, Alarmsysteme, Müllabfuhr, Poolpflege und Gartenpflege können weiterlaufen, auch wenn Sie die Immobilie nicht nutzen.",
    },
    {
      title: "Immobilienverwaltung",
      text:
        "Wenn Sie nicht in der Nähe wohnen, benötigen Sie möglicherweise jemanden, der Schlüssel verwaltet, die Immobilie kontrolliert, Gäste empfängt, Reparaturen organisiert, Sturmschäden prüft, die Immobilie lüftet und Probleme löst, während Sie im Ausland sind.",
    },
  ];

  const rentalCosts = [
    "Genehmigung oder Registrierung für touristische Vermietung",
    "Mögliche Zustimmung oder Einschränkungen der Eigentümergemeinschaft",
    "Provision eines Vermietungsmaklers oder einer Vermietungsplattform",
    "Reinigung und Wäschekosten nach jedem Aufenthalt",
    "Reparaturen infolge der Nutzung durch Gäste",
    "Höherer Strom- und Wasserverbrauch",
    "Eine Versicherung, die für Vermietung geeignet ist",
    "Einkommensteuererklärung in Spanien",
    "Steuerpflichten für Nichtansässige",
    "Leerstandswochen außerhalb der Hochsaison",
    "Ersatz von Möbeln, Bettwäsche und Geräten",
    "Lokale Regeln, die sich im Laufe der Zeit ändern können",
  ];

  const legalChecks = [
    {
      title: "Nota Simple aus dem Grundbuch",
      text:
        "Dieses Dokument sollte das Eigentum, eingetragene Belastungen, Hypotheken und andere wichtige Angaben aus dem Grundbuch bestätigen. Lassen Sie es vor jeder Unterzeichnung oder Zahlung immer von einem unabhängigen Anwalt prüfen.",
    },
    {
      title: "Katasterinformationen",
      text:
        "Das spanische Kataster enthält physische und steuerliche Informationen über die Immobilie. Ihr Anwalt sollte die Katasterdaten mit dem Grundbuch und der tatsächlichen Situation vor Ort vergleichen.",
    },
    {
      title: "Legalität der Bebauung",
      text:
        "Anbauten, Pools, Gästehäuser, überdachte Terrassen und Garagen müssen geprüft werden. Eine Immobilie kann vollständig fertiggestellt wirken, während bestimmte Teile rechtlich noch nicht korrekt eingetragen sind.",
    },
    {
      title: "Schulden bei der Eigentümergemeinschaft",
      text:
        "Bitten Sie bei Apartments und Urbanisationen um eine Bestätigung, dass der Verkäufer alle Beiträge an die Eigentümergemeinschaft bezahlt hat. Offene Schulden können nach dem Kauf zu einem ernsthaften Problem werden.",
    },
    {
      title: "Erlaubnis zur Vermietung",
      text:
        "Gehen Sie niemals davon aus, dass Sie eine Immobilie vermieten dürfen, nur weil ähnliche Immobilien in der Umgebung online angeboten werden. Prüfen Sie regionale Regeln, kommunale Vorschriften, touristische Registrierung, Satzung der Eigentümergemeinschaft und aktuelle Gesetzesänderungen.",
    },
    {
      title: "Energie-, Wasser- und Versorgungsverträge",
      text:
        "Prüfen Sie, ob die Immobilie über normale und legale Anschlüsse verfügt und ob Anpassungen für komfortable Nutzung, Vermietung oder dauerhafte Bewohnung erforderlich sind.",
    },
  ];

  const areaWarnings = [
    {
      area: "Moraira",
      text:
        "Moraira kann sich hervorragend für ruhiges Wohnen in einer Villa eignen. Prüfen Sie jedoch die Erreichbarkeit in Hanglagen, die Abhängigkeit vom Auto, die Instandhaltung der Villa, den Parkdruck im Sommer und ob außerhalb der Hauptsaison ausreichend Leben vorhanden ist.",
    },
    {
      area: "Jávea",
      text:
        "Jávea bietet das ganze Jahr über mehr Lebendigkeit, aber die Erfahrung unterscheidet sich stark zwischen Arenal, Hafen, Altstadt, Montgó und den Villengebieten. Prüfen Sie Verkehr, Lärm, touristische Belastung und ob das konkrete Viertel wirklich zu Ihnen passt.",
    },
    {
      area: "Altea",
      text:
        "Altea ist stimmungsvoll und wunderschön, aber Erreichbarkeit der Altstadt, Parkmöglichkeiten, Treppen, Höhenunterschiede, Renovierungsbeschränkungen und touristischer Betrieb sollten sorgfältig geprüft werden.",
    },
    {
      area: "Benissa",
      text:
        "Benissa kann viel Platz und Privatsphäre bieten, aber manche Immobilien liegen ländlicher und abgelegener. Prüfen Sie Zufahrtswege, Versorgung, Entfernung zu Geschäften, Instandhaltung, Versorgungsanschlüsse und ob die Umgebung für Ihren Alltag geeignet ist.",
    },
    {
      area: "Calpe",
      text:
        "Calpe kann praktisch sein für Apartments und Wohnen in Strandnähe, aber manche Bereiche sind belebter und stärker saisonal geprägt. Prüfen Sie Bauqualität, Regeln der Eigentümergemeinschaft, touristische Belastung, Aufzüge, Parken und Lärmbelastung.",
    },
    {
      area: "Dénia",
      text:
        "Dénia bietet das ganze Jahr über gute Versorgung, Restaurants und Alltagsleben. Vergleichen Sie jedoch die verschiedenen Strandzonen, das Zentrum, Verkehr, Parkmöglichkeiten, das Alter der Gebäude und die saisonalen Unterschiede.",
    },
  ];

  const questions = [
    "Ist die Immobilie in ihrer aktuellen Form vollständig legal, einschließlich Anbauten, Pool, Terrassen und Nebengebäuden?",
    "Stimmt die Immobilie mit den Angaben im Grundbuch und im Kataster überein?",
    "Gibt es Strommasten, oberirdische Leitungen, stark befahrene Straßen, Bars, Baugrundstücke oder Gewerbeflächen in der Nähe?",
    "Haben Sie die Immobilie abends, früh am Morgen und am Wochenende besucht?",
    "Fühlt sich die Umgebung auch außerhalb der Sommersaison gut an?",
    "Gibt es Regeln der Eigentümergemeinschaft zu Ferienvermietung, Haustieren, Lärm, Umbauten oder äußeren Veränderungen?",
    "Ist touristische Vermietung nach regionalen Regeln, kommunalen Vorschriften und den Regeln der Eigentümergemeinschaft erlaubt?",
    "Wie hoch sind die tatsächlichen jährlichen Kosten, einschließlich Steuern, Versicherungen, Nebenkosten, Instandhaltung und Verwaltung?",
    "Was bleibt bei Vermietung wirklich übrig nach Steuern, Provision, Reinigung, Reparaturen, Leerstandswochen und Abnutzung?",
    "Bleibt diese Immobilie praktisch, wenn Sie älter oder weniger mobil werden oder allein wohnen?",
    "Wie weit entfernt sind Ärzte, Apotheken, Supermärkte, Banken, Restaurants und tägliche Einrichtungen?",
    "Lässt sich die Immobilie später einfach an einen nächsten internationalen Käufer weiterverkaufen?",
  ];

  const officialSources = [
    {
      label:
        "BOE / DOGV — Decreto-ley 9/2024 über touristische Wohnungen in der Region Valencia",
      href: "https://www.boe.es/buscar/doc.php?id=DOGV-r-2024-90168",
    },
    {
      label:
        "Turisme Comunitat Valenciana — Aktualisierung der Regelungen für touristische Wohnungen",
      href: "https://www.turisme.gva.es/opencms/opencms/turisme/es/contents/home/noticia/noticia_1725542158000.html",
    },
    {
      label:
        "Spanisches Ministerium für Wohnungswesen — Zustimmung der Eigentümergemeinschaft für neue touristische Apartments",
      href: "https://www.mivau.gob.es/el-ministerio/sala-de-prensa/noticias/mar-01042025-1647",
    },
    {
      label:
        "Spanische Steuerbehörde — Einkommensteuer für Nichtansässige bei Vermietung touristischer Apartments",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/vivienda-otros-inmuebles/tributacion-arrendador-viviendas-otros-inmuebles/tributacion-alquiler-apartamentos-turisticos/impuesto-sobre-renta-no-residentes.html",
    },
    {
      label:
        "Spanische Steuerbehörde — Mehrwertsteuer bei touristischer Vermietung mit hotelähnlichen Dienstleistungen",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/iva/iva-operaciones-inmobiliarias/alquilo-apartamento-turistico-tengo-que-iva.html",
    },
    {
      label:
        "Spanische Steuerbehörde — Mehrwertsteuer oder Grunderwerbsteuer beim Immobilienkauf",
      href: "https://sede.agenciatributaria.gob.es/Sede/en_gb/iva/iva-operaciones-inmobiliarias/compro-vivienda-tengo-que-pagar-itp.html",
    },
    {
      label:
        "Spanisches Grundbuch — Informationen für internationale Immobilienkäufer",
      href: "https://sede.registradores.org/contenido/buyingahouse/",
    },
    {
      label: "Spanisches Kataster — offizielle Katasterinformationen",
      href: "https://www.catastro.hacienda.gob.es/ayuda/english_ovc.htm",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Ehrlicher Leitfaden für den Immobilienkauf an der Costa Blanca Nord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Ehrlicher Käuferleitfaden
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Der ehrliche Leitfaden für den Immobilienkauf an der Costa Blanca Nord.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              Kosten, Vermietung, Lärmbelastung, Strommasten, Regeln der
              Eigentümergemeinschaft und praktische Prüfungen, die niederländische,
              deutsche und Schweizer Käufer verstehen sollten, bevor sie eine
              Immobilie in Spanien kaufen.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Fordern Sie Ihren persönlichen Area Match an
              </a>

              <a
                href="/services/discovery-trips"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Entdecken Sie die Buyer Discovery Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EINFÜHRUNG */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Mit offenen Augen kaufen
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Eine Immobilie in Spanien zu kaufen, kann eine wunderbare
                Entscheidung sein. Aber nur, wenn Sie zuerst die praktische
                Realität verstehen.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Viele niederländische, deutsche und Schweizer Käufer verlieben
                sich aus guten Gründen in die Costa Blanca Nord: das Klima, das
                Meer, die Restaurants, der entspannte Lebensstil, die internationale
                Gemeinschaft und die Möglichkeit, mehr Zeit im Freien zu verbringen.
              </p>

              <p className="mt-6">
                Ein guter Kauf dreht sich jedoch nicht nur um Meerblick, einen
                Pool oder eine schöne Terrasse. Die tatsächliche Qualität einer
                Immobilie liegt oft in Details, die bei der ersten Besichtigung
                nicht auffallen: Strommasten, Verkehrslärm, Regeln der
                Eigentümergemeinschaft, Vermietungsbeschränkungen, jährliche
                Kosten, Instandhaltung, Zufahrtswege, rechtlicher Status und die
                Atmosphäre außerhalb der Hochsaison.
              </p>

              <p className="mt-6">
                Dieser Leitfaden soll Käufer nicht verunsichern. Ziel ist es,
                Ihnen zu helfen, vor dem Kauf bessere Fragen zu stellen: weniger
                Überraschungen, bessere Entscheidungen und eine Immobilie, die sich
                auch dann noch richtig anfühlt, wenn die erste Emotion der
                Besichtigung verflogen ist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KURZE ANTWORT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Kurze Antwort
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Die größten Risiken sind meist nicht spektakulär. Es sind
            praktische, rechtliche und finanzielle Details, die nicht früh genug
            geprüft wurden.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {realLifeChecks.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-[#f6f1ea] p-8">
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

      {/* MEHR ALS NUR DIE FOTOS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Weiter schauen als die Fotos
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Eine Immobilienanzeige zeigt die Immobilie. Nicht das tägliche
              Leben rund um die Immobilie.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Online-Immobilienanzeigen sind dafür gemacht, Interesse zu wecken.
              Sie zeigen den Pool, die Terrasse, die renovierte Küche, den
              Meerblick und die besten Winkel der Immobilie. Das ist normal. Aber
              sie zeigen nicht immer, wie es wirklich ist, dort zu wohnen.
            </p>

            <p className="mt-6">
              Schauen Sie deshalb über die Immobilie selbst hinaus. Was befindet
              sich hinter dem Haus? Liegt daneben ein Baugrundstück? Gibt es
              Strommasten in der Nähe? Ist die Straße wirklich ruhig oder nur
              während der Besichtigung? Gibt es Bars, Ferienapartments oder
              Veranstaltungsorte in der Umgebung? Liegt die Immobilie in einem
              ruhigen Wohngebiet oder verändert sich die Umgebung im Sommer
              vollständig?
            </p>

            <p className="mt-6">
              Das ist besonders wichtig für ältere Käufer, die Ruhe,
              Vorhersehbarkeit und Komfort suchen. Eine wunderschöne Immobilie
              kann trotzdem viel Stress verursachen, wenn die Erreichbarkeit
              schwierig ist, die Instandhaltung hoch, die Lärmbelastung saisonal
              oder die Grundversorgung zu weit entfernt.
            </p>
          </div>
        </div>
      </section>

      {/* VERSTECKTE KOSTEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Tatsächliche Kosten
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Versteckte Kosten, die Käufer häufig unterschätzen.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Der Kaufpreis ist nur der Anfang. Vor dem Kauf sollten Sie sowohl
            die gesamten Erwerbskosten als auch die jährlichen Eigentumskosten
            verstehen. Manche Kosten sind vorhersehbar. Andere hängen von
            Immobilientyp, Lage, Alter, Eigentümergemeinschaft,
            Finanzierungsstruktur und davon ab, ob Sie vermieten möchten.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {hiddenCosts.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white/70 p-8">
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

      {/* VERMIETUNG */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Ihre Immobilie vermieten
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight">
            Dürfen Sie Ihre spanische Immobilie vermieten? Manchmal ja, aber
            gehen Sie niemals automatisch davon aus.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="text-lg leading-relaxed text-white/75">
              <p>
                Viele Käufer fragen: Können wir die Immobilie vermieten, wenn wir
                sie selbst nicht nutzen? Die ehrliche Antwort lautet: möglicherweise,
                aber es hängt von der Immobilie, der Region, der Gemeinde, den
                Regeln der Eigentümergemeinschaft, dem Gebäudetyp und der genauen
                Vermietungsform ab.
              </p>

              <p className="mt-6">
                In der Region Valencia ist touristische Vermietung reguliert,
                und die Regeln haben sich in den vergangenen Jahren geändert.
                Käufer müssen prüfen, ob eine touristische Registrierung möglich
                ist, ob die Immobilie die erforderlichen Bedingungen erfüllt und
                ob lokale Einschränkungen oder Einschränkungen der
                Eigentümergemeinschaft gelten.
              </p>

              <p className="mt-6">
                Bei Apartments und Immobilien in Gebäuden mit einer Comunidad de
                Propietarios sind die Regeln der Eigentümergemeinschaft besonders
                wichtig. Für neue touristische Vermietung kann eine ausdrückliche
                Zustimmung der Eigentümergemeinschaft erforderlich sein. Bestehende
                Situationen und Übergangsregelungen sollten durch einen Anwalt
                geprüft werden.
              </p>

              <p className="mt-6">
                Der größte Fehler ist, eine Immobilie auf Basis erwarteter
                Mieteinnahmen zu kaufen, ohne zuerst festzustellen, ob Vermietung
                rechtlich, praktisch und finanziell realistisch ist.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h3 className="font-serif text-3xl text-white">
                Vermietungskosten und Prüfungen
              </h3>

              <ul className="mt-6 space-y-4 leading-relaxed text-white/75">
                {rentalCosts.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NETTO-MIETERTRAG */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Die Realität der Nettovermietung
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Was bleibt Ihnen nach der Vermietung Ihrer spanischen Immobilie
              wirklich übrig?
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Brutto-Mieteinnahmen können attraktiv klingen. Entscheidend ist
              jedoch nicht der Mietpreis pro Woche, sondern der Betrag, der nach
              Steuern, Provision, Reinigung, Reparaturen, Nebenkosten,
              Versicherungen, Instandhaltung, Leerstandswochen und Verwaltung
              übrig bleibt.
            </p>

            <p className="mt-6">
              Eine Immobilie kann im Sommer einige Wochen gut vermietet werden,
              während der Eigentümer das ganze Jahr über Beiträge zur
              Eigentümergemeinschaft, IBI, Versicherungen, Reparaturen,
              Plattformprovisionen, Verwaltung, Reinigung, Wäschekosten,
              Schlüsselverwaltung, Klimaanlage, Poolpflege und Einkommensteuer
              bezahlen muss.
            </p>

            <p className="mt-6">
              Nichtansässige Eigentümer müssen auch spanische Steuerpflichten
              berücksichtigen. Die spanische Steuerbehörde stellt spezifische
              Informationen zur Einkommensteuer für Nichtansässige bereit,
              einschließlich Modelo 210 und unterschiedlicher Steuersätze je
              nach Wohnsitzland des Eigentümers. Wenn hotelähnliche Dienstleistungen
              angeboten werden, kann auch Mehrwertsteuer relevant werden.
            </p>

            <p className="mt-6">
              Behandeln Sie erwartete Mieteinnahmen daher als ernsthafte
              Berechnung und nicht als Versprechen. Fordern Sie vor dem Kauf
              realistische Jahreszahlen an und lassen Sie diese von einem
              unabhängigen Steuerberater oder Rechtsexperten prüfen.
            </p>
          </div>
        </div>
      </section>

      {/* VILLA VS APARTMENT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Immobilientyp
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Villen und Apartments haben unterschiedliche Risiken.
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-[#f6f1ea] p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Risiken einer Villa
              </h3>

              <p className="mt-6 leading-relaxed text-stone-600">
                Villen bieten Privatsphäre, Raum und Unabhängigkeit. Dem stehen
                mehr Verantwortung gegenüber: Poolpflege, Gartenpflege,
                Sicherheit, Dachreparaturen, Feuchtigkeitskontrollen,
                Außenanstrich, Zufahrtswege, Stützmauern, Entwässerung und ein
                höherer Energie- und Wasserverbrauch.
              </p>

              <p className="mt-6 leading-relaxed text-stone-600">
                Prüfen Sie auch, ob alle Teile der Villa legal sind, ob
                Erweiterungen korrekt registriert wurden und ob Grundstück, Pool,
                Gästehaus und Terrassen mit den offiziellen Angaben
                übereinstimmen.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-9">
              <h3 className="font-serif text-4xl text-[#1e2a3a]">
                Risiken eines Apartments
              </h3>

              <p className="mt-6 leading-relaxed text-stone-600">
                Apartments können einfacher zu unterhalten und praktisch sein,
                wenn Sie die Immobilie regelmäßig unbeaufsichtigt lassen. Sie
                haben jedoch mit Regeln der Eigentümergemeinschaft, gemeinsamen
                Kosten, möglichen Vermietungsbeschränkungen, Lärm von Nachbarn,
                Aufzügen, Gemeinschaftspools und Entscheidungen anderer Eigentümer
                zu tun.
              </p>

              <p className="mt-6 leading-relaxed text-stone-600">
                Prüfen Sie vor dem Kauf immer die Satzung, aktuelle
                Versammlungsprotokolle, Jahresabrechnungen, geplante Arbeiten,
                Schulden, den Zustand des Aufzugs, Parkrechte und die
                Möglichkeiten für Ferienvermietung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AUFMERKSAMKEITSPUNKTE PRO ORT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Praxischeck pro Umgebung
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Was sollten Sie in jedem Ort an der Costa Blanca Nord prüfen?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Es gibt keinen perfekten Ort. Jede Umgebung hat Stärken und
              praktische Nachteile. Ziel ist nicht, jeden Nachteil zu vermeiden,
              sondern eine Umgebung zu wählen, deren Nachteile für Ihre Art zu
              leben akzeptabel sind.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {areaWarnings.map((item) => (
              <div key={item.area} className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-4xl text-[#1e2a3a]">
                  {item.area}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECHTLICHE PRÜFUNGEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Rechtliche Prüfungen
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Dokumente und Prüfungen, die Sie nicht überspringen sollten.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Spanien hat einen klaren rechtlichen Kaufprozess, aber das bedeutet
            nicht, dass jede Immobilie automatisch rechtlich korrekt, schuldenfrei
            oder für Ihre Pläne geeignet ist. Eine unabhängige rechtliche Prüfung
            ist notwendig, bevor Sie eine Anzahlung leisten oder eine bindende
            Vereinbarung unterzeichnen.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {legalChecks.map((item) => (
              <div key={item.title} className="rounded-[32px] bg-white/70 p-8">
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

      {/* WARNUNG TOURISTISCHE VERMIETUNG */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Wichtige Warnung zur Vermietung
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Kaufen Sie nicht zuerst, um erst danach die Erlaubnis zur Vermietung
              zu prüfen.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Die Regeln für touristische Vermietung werden in vielen Teilen
              Spaniens strenger. In der Region Valencia wird touristische
              Vermietung auf regionaler Ebene reguliert. Die Änderungen aus dem
              Jahr 2024 haben strengere Kontrollen für Registrierung und
              Dokumentation eingeführt.
            </p>

            <p className="mt-6">
              In Gebäuden mit einer Eigentümergemeinschaft kann die Comunidad de
              Propietarios ebenfalls entscheidend sein. Seit April 2025 haben
              Eigentümergemeinschaften durch geänderte spanische Vorschriften
              eine stärkere Rolle bei der Zustimmung zu neuen touristischen
              Apartments erhalten.
            </p>

            <p className="mt-6">
              Vertrauen Sie daher nicht allein auf das, was ein Makler, Nachbar
              oder früherer Eigentümer erzählt. Lassen Sie Ihren Anwalt die genaue
              rechtliche Situation prüfen, bevor Sie kaufen, insbesondere wenn
              Mieteinnahmen Teil Ihres Finanzplans sind.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLISTE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Checkliste für Käufer
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Fragen, die Sie stellen sollten, bevor Sie ein Angebot abgeben.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {questions.map((question) => (
              <div key={question} className="rounded-2xl bg-[#f6f1ea] p-6">
                <p className="leading-relaxed text-stone-700">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABSCHLIESSENDER RAT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Abschließender Rat
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-tight">
            Kaufen Sie das Leben, nicht nur das Haus.
          </h2>

          <p className="mt-8 max-w-5xl text-xl leading-relaxed text-white/85">
            Eine wunderschöne Immobilie ist nur dann ein guter Kauf, wenn die
            Umgebung, die rechtliche Situation, die Kosten, die Regeln der
            Eigentümergemeinschaft, die Vermietungsmöglichkeiten und das tägliche
            Leben zu Ihren tatsächlichen Bedürfnissen passen.
          </p>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-white/75">
            Für viele niederländische, deutsche und Schweizer Käufer ist es
            sinnvoll, nicht direkt mit Immobilienbesichtigungen zu beginnen.
            Untersuchen Sie zuerst, welche Gebiete zu Ihrem Lebensstil passen,
            was Sie vermeiden sollten und was geprüft werden muss, bevor Sie sich
            in eine Immobilie verlieben.
          </p>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-white/75">
            Deshalb beginnt Nordic Move Spain mit Area Match und Einblick in den
            lokalen Lebensstil. Eine gute Immobiliensuche beginnt mit den
            richtigen Fragen.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/services/area-match"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Fordern Sie Ihren persönlichen Area Match an
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Planen Sie ein Kennenlernen
            </a>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="px-8 pb-20">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Wichtiger Hinweis
          </p>

          <p className="mt-5 leading-relaxed text-stone-600">
            Dieser Artikel enthält allgemeine Informationen für internationale
            Käufer und ist keine Rechts-, Steuer- oder Finanzberatung.
            Vermietungsregeln, Steuervorschriften, Regeln von
            Eigentümergemeinschaften und lokale Vorschriften können sich ändern.
            Beauftragen Sie immer einen unabhängigen Anwalt und einen
            qualifizierten Steuerberater, bevor Sie eine Immobilie kaufen,
            vermieten oder Verträge unterzeichnen.
          </p>
        </div>
      </section>

      {/* OFFIZIELLE QUELLEN */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Verwendete offizielle Quellen
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Für diesen Leitfaden wurden soweit möglich offizielle spanische,
            valencianische und institutionelle Quellen verwendet. Käufer sollten
            die aktuelle Situation immer von einem unabhängigen Anwalt,
            Steuerberater und der zuständigen Behörde prüfen lassen, bevor sie
            eine Kaufentscheidung treffen.
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
