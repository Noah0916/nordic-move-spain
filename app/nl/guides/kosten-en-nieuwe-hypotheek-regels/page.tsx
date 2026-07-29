import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vastgoed kopen in Spanje met hypotheek: nieuwe regels en energielabel 2026",
  description:
    "Wat betekenen de nieuwe Spaanse taxatieregels, het energielabel en de Europese EPBD voor Nederlandse en Belgische vastgoedkopers? Actuele uitleg voor 2026.",
  keywords: [
    "vastgoed kopen Spanje",
    "hypotheek Spanje",
    "energielabel Spanje",
    "energiecertificaat Spanje",
    "Spaanse hypotheekregels 2026",
    "woning kopen Spanje",
    "taxatie Spanje hypotheek",
    "certificado de eficiencia energética",
  ],
  alternates: {
    canonical: "/vastgoed-kopen-spanje-hypotheek-energielabel",
  },
  openGraph: {
    type: "article",
    locale: "nl_NL",
    title: "Vastgoed kopen in Spanje met hypotheek: nieuwe regels en energielabel 2026",
    description:
      "De actuele regels voor hypotheek-taxaties, energiecertificaten en energiezuinig vastgoed in Spanje.",
    url: "/vastgoed-kopen-spanje-hypotheek-energielabel",
    publishedTime: "2026-07-23",
    modifiedTime: "2026-07-23",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nieuwe hypotheek- en energielabelregels voor vastgoed in Spanje",
    description:
      "Wat kopers in 2026 moeten weten over taxatie, financiering en het Spaanse energiecertificaat.",
  },
};

const faqs = [
  {
    question: "Krijg je in Spanje geen hypotheek meer voor een woning met energielabel E, F of G?",
    answer:
      "Nee. Er bestaat geen algemene landelijke regel die een Spaanse hypotheek automatisch verbiedt vanwege een laag energielabel. De bank beoordeelt vooral je terugbetalingscapaciteit en de waarde van het onderpand. Sinds 12 augustus 2025 moet het geregistreerde energiecertificaat wel deel uitmaken van de hypotheek-taxatie en kunnen energieprestatie en klimaatrisico invloed hebben op de taxatiewaarde.",
  },
  {
    question: "Is een energiecertificaat verplicht bij de verkoop van een woning in Spanje?",
    answer:
      "Ja, behoudens specifieke wettelijke uitzonderingen. De energieklasse moet in de verkoopadvertentie staan. Bij de koopovereenkomst moet een kopie van het geregistreerde certificaat plus het energielabel worden gevoegd.",
  },
  {
    question: "Moet iedere Spaanse woning in 2030 minimaal energielabel C hebben?",
    answer:
      "Nee. De definitieve Europese richtlijn legt voor woningen doelen op voor de gemiddelde energieprestatie van het nationale woningbestand. De veelgenoemde individuele labelplicht C in 2030 en D in 2033 staat niet als algemene verkoopvoorwaarde voor iedere bestaande woning in de definitieve richtlijn.",
  },
  {
    question: "Hoe lang is een Spaans energiecertificaat geldig?",
    answer:
      "In beginsel maximaal tien jaar. Voor een woning met energieklasse G is de maximale geldigheid vijf jaar. De autonome regio kan aanvullende regels voor vernieuwing of actualisering vaststellen.",
  },
  {
    question: "Wie betaalt de taxatie voor een Spaanse hypotheek?",
    answer:
      "Volgens de Spaanse hypotheekwet betaalt de kredietnemer de taxatie. De bank draagt bij een consumenten-hypotheek onder meer de kosten van de hypotheekakte, registratie en gestoría volgens de wettelijke kostenverdeling.",
  },
];

const sources = [
  {
    label: "BOE — Orden ECM/599/2025: nieuwe regels voor vastgoedtaxaties",
    href: "https://www.boe.es/buscar/doc.php?id=BOE-A-2025-11815",
  },
  {
    label: "BOE — Real Decreto 390/2021: energiecertificering van gebouwen",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-2021-9176",
  },
  {
    label: "BOE — Real Decreto 659/2025: kwalificatie en registratie van certificeerders",
    href: "https://www.boe.es/buscar/doc.php?id=BOE-A-2025-15230",
  },
  {
    label: "BOE — Ley 5/2019: Spaanse wet op vastgoedkrediet",
    href: "https://www.boe.es/buscar/doc.php?id=BOE-A-2019-3814",
  },
  {
    label: "Banco de España — uitleg over hypotheek-taxaties",
    href: "https://clientebancario.bde.es/pcb/es/blog/la-tasacion-no-solo-es-un-mero-tramite.html",
  },
  {
    label: "MITECO — nieuwe energielabeldocumenten vanaf 30 september 2026",
    href: "https://www.miteco.gob.es/content/dam/miteco/es/energia/files-1/Eficiencia/CertificacionEnergetica/DocumentosReconocidos/documentos-reconocidos/202603_Nota%20informativa%20Documentos%20Reconocidos.pdf",
  },
  {
    label: "EU/BOE — Richtlijn (EU) 2024/1275 energieprestatie gebouwen",
    href: "https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-80664",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vastgoed kopen in Spanje met hypotheek: nieuwe regels en energielabel 2026",
  description:
    "Actuele uitleg over Spaanse hypotheek-taxaties, energiecertificaten en Europese energieregels voor vastgoedkopers.",
  inLanguage: "nl-NL",
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  author: {
    "@type": "Organization",
    name: "Redactie Vastgoed Spanje",
  },
  publisher: {
    "@type": "Organization",
    name: "Redactie Vastgoed Spanje",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "/vastgoed-kopen-spanje-hypotheek-energielabel",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="page-shell">
        <article className="article-card">
          <header className="hero">
            <p className="eyebrow">Vastgoed Spanje · hypotheek · energielabel</p>
            <h1>Vastgoed kopen in Spanje met hypotheek: nieuwe regels en energielabel in 2026</h1>
            <p className="intro">
              Wie in Spanje een woning koopt met financiering, krijgt sinds 2025 eerder in het
              proces met het energiecertificaat te maken. Het label is niet alleen informatie
              voor de koper: het moet nu ook beschikbaar zijn voor de officiële taxatie die de
              bank voor de hypotheek gebruikt. Hieronder lees je wat werkelijk is veranderd,
              welke geruchten niet kloppen en waarop je vóór het tekenen moet letten.
            </p>
            <div className="meta-row">
              <span>Bijgewerkt: 23 juli 2026</span>
              <span>Leestijd: circa 9 minuten</span>
            </div>
          </header>

          <aside className="notice notice-important" aria-label="Belangrijkste wijziging">
            <strong>De belangrijkste nieuwe regel:</strong> sinds 12 augustus 2025 moet bij de
            officiële hypotheek-taxatie van een afgewerkt gebouw een geldig en geregistreerd
            Spaans energiecertificaat worden aangeleverd. De taxateur moet daarnaast, wanneer
            relevant en technisch mogelijk, rekening houden met duurzaamheid en milieu- en
            klimaatrisico’s.
          </aside>

          <nav className="toc" aria-label="Inhoudsopgave">
            <strong>In dit artikel</strong>
            <ol>
              <li><a href="#nieuwe-regel">De nieuwe taxatieregel sinds augustus 2025</a></li>
              <li><a href="#hypotheek">Wat dit betekent voor het krijgen van een hypotheek</a></li>
              <li><a href="#energielabel">De bestaande regels voor het energielabel</a></li>
              <li><a href="#wijzigingen-2026">Nieuwe wijzigingen in 2026</a></li>
              <li><a href="#eu-regels">EU-doelen voor 2030 en 2035: feit versus gerucht</a></li>
              <li><a href="#checklist">Checklist voor vastgoedkopers</a></li>
            </ol>
          </nav>

          <section id="nieuwe-regel">
            <h2>1. Nieuwe regel: energiecertificaat verplicht bij de hypotheek-taxatie</h2>
            <p>
              De Spaanse <em>Orden ECM/599/2025</em> heeft de landelijke taxatieregels voor
              financiële doeleinden gewijzigd. Vanaf 12 augustus 2025 moet de taxateur bij een
              afgewerkt gebouw beschikken over het geregistreerde
              <em> certificado de eficiencia energética</em>. Bij een gebouw in aanbouw of in de
              projectfase volstaan het certificaat en een kopie van de aanvraag tot registratie,
              mits de gegevens overeenkomen.
            </p>
            <p>
              Dat is relevant omdat de taxatie meestal plaatsvindt vóór de definitieve
              koopakte. Voorheen kwam het energiecertificaat in de praktijk soms pas laat in het
              dossier terecht. Nu kan een ontbrekend of niet-geregistreerd certificaat de
              taxatie en daarmee de hypotheekaanvraag vertragen.
            </p>

            <h3>Duurzaamheid kan de taxatiewaarde beïnvloeden</h3>
            <p>
              Dezelfde regeling introduceert een officieel duurzaamheidsbeginsel in de
              waardering. Wanneer de markt er aantoonbaar rekening mee houdt en de gebruikte
              waarderingsmethode dit toelaat, mogen onder meer energieprestatie, fysieke
              klimaatrisico’s en transitierisico’s in de waarde worden verwerkt. Het effect kan
              positief of negatief zijn.
            </p>
            <ul>
              <li>Een energiezuinige woning kan aantrekkelijker zijn door lagere gebruikskosten.</li>
              <li>Een slecht presterende woning kan toekomstige renovatiekosten meebrengen.</li>
              <li>Overstromings-, hitte-, droogte- of kustrisico’s kunnen per locatie verschillen.</li>
              <li>De taxateur vergelijkt de woning met relevante markttransacties en kenmerken.</li>
            </ul>
            <p>
              Een laag energielabel verlaagt de taxatie dus niet automatisch. De taxateur moet
              de concrete woning, locatie, markt en beschikbare vergelijkingsobjecten beoordelen.
            </p>
          </section>

          <section id="hypotheek">
            <h2>2. Betekent een laag energielabel dat je geen Spaanse hypotheek krijgt?</h2>
            <p>
              Nee. Er is geen algemene Spaanse wet die banken verbiedt een woning met label E,
              F of G te financieren. Het energiecertificaat is wel onderdeel geworden van het
              taxatiedossier. Daardoor kunnen een lagere taxatiewaarde of zichtbare
              renovatierisico’s indirect invloed hebben op het maximale leenbedrag of op de
              interne risicoanalyse van een bank.
            </p>

            <h3>De bank beoordeelt twee verschillende risico’s</h3>
            <div className="two-column">
              <div className="info-box">
                <h4>1. Jouw betaalbaarheid</h4>
                <p>
                  De bank controleert onder meer inkomen, werk- of ondernemingssituatie,
                  spaargeld, vaste lasten, bestaande schulden en verwachte inkomsten tijdens de
                  looptijd. De Spaanse wet bepaalt dat een lening alleen mag worden verstrekt
                  wanneer terugbetaling waarschijnlijk is.
                </p>
              </div>
              <div className="info-box">
                <h4>2. De waarde van de woning</h4>
                <p>
                  De woning is het onderpand. De hypotheek-taxatie moet vóór de lening worden
                  uitgevoerd door een onafhankelijke, bevoegde taxateur of taxatie-instelling.
                  De lening is in de praktijk vaak gemaximeerd op een percentage van de lagere
                  relevante waarde, maar het exacte percentage is bankbeleid en geen universeel
                  recht voor de koper.
                </p>
              </div>
            </div>

            <p>
              Banco de España noemt als gebruikelijke marktpraktijk een financiering tot circa
              80% van de taxatiewaarde. Voor niet-residenten, tweede woningen, beleggingspanden
              of dossiers met een hoger risico kunnen banken strengere interne grenzen hanteren.
              Vraag daarom vóór het tekenen van een reserverings- of aanbetalingscontract om een
              schriftelijke financiële voorbeoordeling.
            </p>

            <h3>Bescherm de aanbetaling met een financieringsvoorbehoud</h3>
            <p>
              Een Spaanse reservering of <em>contrato de arras</em> kan grote financiële
              gevolgen hebben wanneer de hypotheek later wordt afgewezen. Laat daarom een
              duidelijke ontbindende voorwaarde opnemen voor financiering én, waar relevant,
              voor een minimale taxatiewaarde. Laat de exacte formulering controleren door een
              onafhankelijke Spaanse advocaat.
            </p>

            <aside className="notice">
              <strong>Let op:</strong> een voorlopige hypotheekindicatie is geen definitieve
              goedkeuring. De bank kan pas na controle van jouw dossier, de woningdocumenten en
              de taxatie een bindend aanbod afgeven.
            </aside>
          </section>

          <section id="energielabel">
            <h2>3. Welke energielabelregels gelden al bij verkoop van vastgoed in Spanje?</h2>
            <p>
              Het Spaanse energiecertificaat was al vóór de nieuwe taxatieregel verplicht bij
              de meeste verkopen en nieuwe verhuurtransacties. De verkoper of eigenaar is
              verantwoordelijk voor het aanvragen, registreren en bewaren van het certificaat,
              tenzij een specifieke wettelijke uitzondering van toepassing is.
            </p>

            <h3>De energieklasse moet in de advertentie staan</h3>
            <p>
              De energie-informatie moet worden opgenomen in aanbiedingen, promoties en
              advertenties voor verkoop of verhuur. Deze verplichting geldt ook voor
              makelaarswebsites, vastgoedportalen, brochures en andere partijen die de
              advertentie publiceren of laten publiceren.
            </p>

            <h3>Het geregistreerde certificaat hoort bij de koopovereenkomst</h3>
            <p>
              Bij de verkoop van een bestaande woning moet een kopie van het geregistreerde
              energiecertificaat samen met het officiële label aan de koopovereenkomst worden
              gehecht. Een los rapport zonder registratie heeft niet dezelfde juridische
              geldigheid.
            </p>

            <h3>Geldigheidsduur: tien jaar, maar label G vijf jaar</h3>
            <p>
              Een Spaans energiecertificaat is in beginsel maximaal tien jaar geldig. Voor
              energieklasse G geldt maximaal vijf jaar. De autonome regio waarin de woning ligt
              kan aanvullende procedures voor registratie, vernieuwing en actualisering
              voorschrijven.
            </p>

            <h3>Een certificaat is geen technische bouwkundige keuring</h3>
            <p>
              Het certificaat geeft informatie over de berekende energieprestatie en bevat
              aanbevelingen voor verbetering. Het bewijst niet dat de woning juridisch,
              bouwkundig of installatietechnisch volledig in orde is. Combineer het daarom met
              een juridische due diligence en, bij oudere of verbouwde woningen, een technische
              keuring.
            </p>
          </section>

          <section id="wijzigingen-2026">
            <h2>4. Wat is er in 2026 veranderd aan de Spaanse energiecertificering?</h2>
            <p>
              Op 23 juli 2026 is <em>Real Decreto 659/2025</em> in werking getreden. Deze
              wijziging gaat vooral over wie energiecertificaten mag opstellen en hoe bevoegde
              deskundigen worden geregistreerd en gecontroleerd.
            </p>
            <ul>
              <li>De toegang tot het beroep wordt gekoppeld aan opleiding, kennis en kwalificaties.</li>
              <li>Voor bepaalde opleidingen zijn aanvullende cursusmodules vereist.</li>
              <li>De deskundige moet vooraf een eigenverklaring bij de bevoegde regio indienen.</li>
              <li>Er komt een centraal administratief register met bevoegde certificeerders.</li>
              <li>De autonome regio’s blijven een belangrijke rol houden bij registratie en toezicht.</li>
            </ul>
            <p>
              Voor een koper betekent dit vooral: controleer of het certificaat daadwerkelijk is
              geregistreerd en of de opsteller bevoegd is. De inhoudelijke koopverplichting om
              een geregistreerd certificaat en label te ontvangen blijft bestaan.
            </p>

            <h3>Nieuwe modellen vanaf 30 september 2026</h3>
            <p>
              Volgens de gezamenlijke informatie van de Spaanse ministeries worden vanaf 30
              september 2026 aangepaste modellen en technische documenten gebruikt. Er komen
              afzonderlijke labels voor project, voltooide bouw en bestaande gebouwen, naast
              wijzigingen in het certificaat en het elektronische XML-bestand. Kopers kunnen
              rond die datum dus een vernieuwde lay-out of documentstructuur tegenkomen.
            </p>
          </section>

          <section id="eu-regels">
            <h2>5. Europese energieregels voor 2030 en 2035: wat klopt er wel en niet?</h2>
            <p>
              Online wordt vaak beweerd dat iedere bestaande woning in Spanje vanaf 2030
              minimaal label C en vanaf 2033 label D moet hebben om te kunnen worden verkocht of
              verhuurd. Dat is geen juiste weergave van de definitieve Europese Richtlijn
              2024/1275.
            </p>

            <h3>Voor woningen gelden doelen voor het nationale gemiddelde</h3>
            <p>
              Lidstaten moeten een nationale route voor renovatie van het woningbestand
              vaststellen. Het gemiddelde primaire energiegebruik van het gehele residentiële
              bestand moet ten opzichte van 2020 met ten minste 16% dalen in 2030 en met 20% tot
              22% in 2035. Minimaal 55% van die vermindering moet komen uit renovatie van de 43%
              slechtst presterende woningen.
            </p>
            <p>
              Spanje kan hiervoor verschillende instrumenten gebruiken, zoals subsidies,
              technische ondersteuning, financiering en eventueel nationale minimumnormen. De
              Europese richtlijn zelf bevat echter geen algemene bepaling dat iedere bestaande
              Spaanse woning bij verkoop in 2030 individueel label C moet hebben.
            </p>

            <h3>De harde 2030- en 2033-drempels gelden voor niet-residentieel vastgoed</h3>
            <p>
              Voor niet-residentiële gebouwen schrijft de richtlijn wel minimumnormen voor. De
              slechtste 16% moet uiterlijk in 2030 onder een nationaal energiegebruiksplafond
              komen en de slechtste 26% uiterlijk in 2033. Dat systeem is niet hetzelfde als een
              vaste Europese labelletter voor iedere woning.
            </p>

            <aside className="notice notice-warning">
              <strong>Praktische conclusie:</strong> koop een woning met label E, F of G niet op
              basis van de aanname dat er niets zal veranderen. Er is nu geen automatische
              landelijke hypotheek- of verkoopban, maar toekomstige Spaanse renovatiemaatregelen,
              energiekosten en marktvoorkeuren kunnen de waarde en financierbaarheid beïnvloeden.
            </aside>
          </section>

          <section id="checklist">
            <h2>6. Checklist voor Nederlandse en Belgische vastgoedkopers</h2>
            <ol className="checklist">
              <li>
                <strong>Vraag het volledige geregistreerde energiecertificaat op.</strong>
                Controleer niet alleen de letter, maar ook registratienummer, geldigheid,
                energiegebruik, CO₂-uitstoot en verbetervoorstellen.
              </li>
              <li>
                <strong>Laat het certificaat vóór de taxatie aanleveren.</strong>
                Wacht niet tot de notarisdatum; een ontbrekend document kan de hypotheekplanning
                vertragen.
              </li>
              <li>
                <strong>Laat de bank vooraf bevestigen welke taxateur wordt geaccepteerd.</strong>
                De koper betaalt doorgaans de taxatie en kan een bevoegde taxateur kiezen, maar
                praktische acceptatievoorwaarden moeten vooraf duidelijk zijn.
              </li>
              <li>
                <strong>Maak een renovatiebegroting bij een laag label.</strong>
                Denk aan isolatie, glas, zonwering, warmtepomp, airconditioning, warm water,
                ventilatie en eventuele werkzaamheden van de vereniging van eigenaren.
              </li>
              <li>
                <strong>Controleer de gemeenschap van eigenaren.</strong>
                Vraag notulen, begrotingen, schulden, geplande gevel- of dakwerken en eventuele
                besluiten over zonnepanelen of collectieve installaties op.
              </li>
              <li>
                <strong>Onderzoek klimaat- en verzekerbaarheidsrisico’s.</strong>
                Kijk naar overstroming, natuurbrand, hitte, droogte, kustligging en de voorwaarden
                van de opstalverzekering.
              </li>
              <li>
                <strong>Neem een financierings- en taxatievoorbehoud op.</strong>
                Laat dit vóór ondertekening van reservering of arras juridisch vastleggen.
              </li>
              <li>
                <strong>Vergelijk de FEIN van meerdere banken.</strong>
                Controleer rente, jaarlijks kostenpercentage, verplichte of prijsverlagende
                nevenproducten, vervroegde aflossing en voorwaarden bij variabele rente.
              </li>
            </ol>
          </section>

          <section>
            <h2>7. Samenvatting: wat moet een koper nu onthouden?</h2>
            <div className="summary-grid">
              <div>
                <span className="summary-label">Sinds 12 augustus 2025</span>
                <p>Het geregistreerde energiecertificaat is vereist voor de hypotheek-taxatie.</p>
              </div>
              <div>
                <span className="summary-label">Geen automatische afwijzing</span>
                <p>Een laag label is geen landelijke hypotheekban, maar kan indirect meewegen.</p>
              </div>
              <div>
                <span className="summary-label">Sinds 23 juli 2026</span>
                <p>Nieuwe eisen voor opleiding, verklaring en registratie van certificeerders.</p>
              </div>
              <div>
                <span className="summary-label">Vanaf 30 september 2026</span>
                <p>Nieuwe modellen voor labels, certificaten en technische documenten.</p>
              </div>
            </div>
            <p>
              De beste bescherming is eenvoudig: laat financiering, taxatie, energieprestatie,
              bouwkundige staat en juridische documenten als één dossier beoordelen vóórdat je
              een onvoorwaardelijke aanbetaling doet.
            </p>
          </section>

          <section className="faq-section" aria-labelledby="faq-heading">
            <h2 id="faq-heading">Veelgestelde vragen</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <section className="sources" aria-labelledby="sources-heading">
            <h2 id="sources-heading">Officiële bronnen</h2>
            <p>
              Onderstaande bronnen zijn voor deze publicatie gecontroleerd op 23 juli 2026.
              Regionale regels en administratieve procedures kunnen verschillen per autonome
              regio.
            </p>
            <ul>
              {sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noreferrer noopener">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <footer className="disclaimer">
            <strong>Juridische disclaimer</strong>
            <p>
              Dit artikel geeft algemene informatie en is geen persoonlijk juridisch,
              fiscaal, bouwkundig of financieel advies. Laat vóór een aankoop de actuele
              landelijke én regionale regels en alle woningdocumenten controleren door een
              onafhankelijke Spaanse advocaat, bevoegde taxateur en financieel adviseur.
            </p>
          </footer>
        </article>
      </main>

      <style>{`
        :root {
          --page-bg: #f4f3ef;
          --paper: #ffffff;
          --ink: #17211b;
          --muted: #5c675f;
          --accent: #9b3f25;
          --accent-dark: #6f2c1a;
          --soft: #f5ebe5;
          --green-soft: #eaf1ec;
          --warning: #fff5dc;
          --line: #dde2dd;
          --shadow: 0 22px 70px rgba(27, 38, 31, 0.09);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: var(--page-bg); color: var(--ink); }

        .page-shell {
          padding: 48px 20px 80px;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
        }

        .article-card {
          width: min(920px, 100%);
          margin: 0 auto;
          padding: clamp(28px, 6vw, 72px);
          background: var(--paper);
          border: 1px solid rgba(23, 33, 27, 0.08);
          border-radius: 24px;
          box-shadow: var(--shadow);
        }

        .hero {
          padding-bottom: 34px;
          border-bottom: 1px solid var(--line);
        }

        .eyebrow {
          margin: 0 0 14px;
          color: var(--accent);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        h1, h2, h3, h4 {
          font-family: Georgia, "Times New Roman", serif;
          line-height: 1.16;
          text-wrap: balance;
        }

        h1 {
          margin: 0;
          max-width: 850px;
          font-size: clamp(2.25rem, 6vw, 4.35rem);
          letter-spacing: -0.045em;
        }

        h2 {
          margin: 64px 0 18px;
          font-size: clamp(1.65rem, 3.5vw, 2.35rem);
          letter-spacing: -0.025em;
        }

        h3 {
          margin: 34px 0 12px;
          font-size: 1.38rem;
        }

        h4 {
          margin: 0 0 10px;
          font-size: 1.15rem;
        }

        p, li {
          font-size: 1.04rem;
          line-height: 1.78;
        }

        p { margin: 0 0 18px; }
        ul, ol { padding-left: 1.35rem; }
        li + li { margin-top: 9px; }

        a {
          color: var(--accent-dark);
          font-weight: 700;
          text-decoration-thickness: 1px;
          text-underline-offset: 3px;
        }

        a:hover { color: var(--accent); }

        .intro {
          max-width: 790px;
          margin-top: 24px;
          color: #39463e;
          font-size: clamp(1.12rem, 2vw, 1.3rem);
          line-height: 1.68;
        }

        .meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 24px;
          margin-top: 28px;
          color: var(--muted);
          font-size: 0.92rem;
          font-weight: 650;
        }

        .notice {
          margin: 32px 0;
          padding: 22px 24px;
          border-left: 5px solid #526c5a;
          border-radius: 10px;
          background: var(--green-soft);
          line-height: 1.7;
        }

        .notice-important {
          border-left-color: var(--accent);
          background: var(--soft);
        }

        .notice-warning {
          border-left-color: #c28a18;
          background: var(--warning);
        }

        .toc {
          margin: 38px 0 16px;
          padding: 26px 28px;
          border: 1px solid var(--line);
          border-radius: 16px;
          background: #fafbf9;
        }

        .toc strong {
          display: block;
          margin-bottom: 12px;
          font-size: 1.05rem;
        }

        .toc ol { margin: 0; }
        .toc li { font-size: 0.98rem; line-height: 1.55; }

        .two-column,
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 22px 0 28px;
        }

        .info-box,
        .summary-grid > div {
          padding: 24px;
          border: 1px solid var(--line);
          border-radius: 14px;
          background: #fbfcfb;
        }

        .info-box p,
        .summary-grid p { margin: 0; }

        .summary-label {
          display: block;
          margin-bottom: 8px;
          color: var(--accent);
          font-size: 0.8rem;
          font-weight: 850;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .checklist {
          margin-top: 24px;
          padding-left: 0;
          list-style: none;
          counter-reset: buyer-checklist;
        }

        .checklist li {
          position: relative;
          margin: 0;
          padding: 20px 0 20px 56px;
          border-bottom: 1px solid var(--line);
          counter-increment: buyer-checklist;
        }

        .checklist li::before {
          content: counter(buyer-checklist);
          position: absolute;
          top: 20px;
          left: 0;
          display: grid;
          width: 36px;
          height: 36px;
          place-items: center;
          border-radius: 50%;
          background: var(--accent);
          color: white;
          font-weight: 800;
        }

        .faq-section details {
          border-top: 1px solid var(--line);
          padding: 18px 0;
        }

        .faq-section details:last-child { border-bottom: 1px solid var(--line); }

        .faq-section summary {
          cursor: pointer;
          font-size: 1.04rem;
          font-weight: 800;
          line-height: 1.5;
        }

        .faq-section details p {
          margin: 14px 0 0;
          color: #3d4b42;
        }

        .sources {
          margin-top: 64px;
          padding: 28px;
          border-radius: 16px;
          background: #f7f8f6;
        }

        .sources h2 { margin-top: 0; }
        .sources li, .sources p { font-size: 0.94rem; }

        .disclaimer {
          margin-top: 38px;
          padding-top: 24px;
          border-top: 1px solid var(--line);
          color: var(--muted);
        }

        .disclaimer p {
          margin-top: 8px;
          font-size: 0.9rem;
          line-height: 1.65;
        }

        section { scroll-margin-top: 24px; }

        @media (max-width: 720px) {
          .page-shell { padding: 0; }
          .article-card {
            border: 0;
            border-radius: 0;
            box-shadow: none;
          }
          .two-column, .summary-grid { grid-template-columns: 1fr; }
          h2 { margin-top: 50px; }
        }

        @media print {
          .page-shell { padding: 0; background: white; }
          .article-card { box-shadow: none; border: 0; padding: 0; }
          a { color: inherit; }
        }
      `}</style>
    </>
  );
}