import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buying Property in Spain with a Mortgage: New Rules and Energy Labels 2026",
  description:
    "What do the new Spanish valuation rules, energy labels and the European EPBD mean for international property buyers? An up-to-date guide for 2026.",
  keywords: [
    "buying property in Spain",
    "mortgage in Spain",
    "energy label Spain",
    "energy performance certificate Spain",
    "Spanish mortgage rules 2026",
    "buying a home in Spain",
    "Spanish mortgage valuation",
    "certificado de eficiencia energética",
  ],
  alternates: {
    canonical: "/buying-property-spain-mortgage-energy-label",
  },
  openGraph: {
    type: "article",
    locale: "en_GB",
    title: "Buying Property in Spain with a Mortgage: New Rules and Energy Labels 2026",
    description:
      "The current rules for mortgage valuations, energy certificates and energy-efficient property in Spain.",
    url: "/buying-property-spain-mortgage-energy-label",
    publishedTime: "2026-07-23",
    modifiedTime: "2026-07-23",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Mortgage and Energy-Label Rules for Property in Spain",
    description:
      "What buyers need to know in 2026 about valuations, financing and Spain’s energy performance certificate.",
  },
};

const faqs = [
  {
    question: "Can you still obtain a Spanish mortgage for a property with an E, F or G energy rating?",
    answer:
      "Yes. There is no general nationwide rule that automatically prevents a Spanish mortgage because a property has a low energy rating. The bank mainly assesses your ability to repay and the value of the collateral. Since 12 August 2025, however, the registered energy performance certificate must form part of the mortgage valuation, and energy performance and climate risks may affect the assessed value.",
  },
  {
    question: "Is an energy performance certificate compulsory when selling a property in Spain?",
    answer:
      "Yes, subject to specific legal exemptions. The energy rating must be shown in the sales advertisement. A copy of the registered certificate and the official energy label must be attached to the sale agreement.",
  },
  {
    question: "Must every Spanish home have at least a C energy rating by 2030?",
    answer:
      "No. The final European directive sets targets for the average energy performance of each country’s residential building stock. The frequently quoted individual requirement of rating C by 2030 and D by 2033 is not included as a general sale condition for every existing home in the final directive.",
  },
  {
    question: "How long is a Spanish energy performance certificate valid?",
    answer:
      "In principle, for a maximum of ten years. For a property with a G energy rating, the maximum validity period is five years. The autonomous region may impose additional rules regarding renewal or updating.",
  },
  {
    question: "Who pays for the valuation required for a Spanish mortgage?",
    answer:
      "Under Spanish mortgage law, the borrower pays for the valuation. For a consumer mortgage, the bank generally pays the costs of the mortgage deed, registration and gestoría in accordance with the statutory allocation of costs.",
  },
];

const sources = [
  {
    label: "BOE — Order ECM/599/2025: new rules for property valuations",
    href: "https://www.boe.es/buscar/doc.php?id=BOE-A-2025-11815",
  },
  {
    label: "BOE — Royal Decree 390/2021: energy certification of buildings",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-2021-9176",
  },
  {
    label: "BOE — Royal Decree 659/2025: qualification and registration of energy assessors",
    href: "https://www.boe.es/buscar/doc.php?id=BOE-A-2025-15230",
  },
  {
    label: "BOE — Law 5/2019: Spanish real-estate credit law",
    href: "https://www.boe.es/buscar/doc.php?id=BOE-A-2019-3814",
  },
  {
    label: "Banco de España — explanation of mortgage valuations",
    href: "https://clientebancario.bde.es/pcb/es/blog/la-tasacion-no-solo-es-un-mero-tramite.html",
  },
  {
    label: "MITECO — new energy-label documents from 30 September 2026",
    href: "https://www.miteco.gob.es/content/dam/miteco/es/energia/files-1/Eficiencia/CertificacionEnergetica/DocumentosReconocidos/documentos-reconocidos/202603_Nota%20informativa%20Documentos%20Reconocidos.pdf",
  },
  {
    label: "EU/BOE — Directive (EU) 2024/1275 on the energy performance of buildings",
    href: "https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-80664",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Buying Property in Spain with a Mortgage: New Rules and Energy Labels 2026",
  description:
    "An up-to-date guide to Spanish mortgage valuations, energy performance certificates and European energy rules for property buyers.",
  inLanguage: "en-GB",
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  author: {
    "@type": "Organization",
    name: "Spain Property Editorial Team",
  },
  publisher: {
    "@type": "Organization",
    name: "Spain Property Editorial Team",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "/buying-property-spain-mortgage-energy-label",
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
            <p className="eyebrow">Property in Spain · mortgages · energy labels</p>
            <h1>Buying property in Spain with a mortgage: new rules and energy labels in 2026</h1>
            <p className="intro">
              Anyone buying a property in Spain with financing now encounters the energy
              performance certificate earlier in the process. The certificate is not only
              information for the buyer: it must also be available for the official valuation
              used by the bank for the mortgage. This guide explains what has actually changed,
              which common claims are incorrect and what you should check before signing.
            </p>
            <div className="meta-row">
              <span>Updated: 23 July 2026</span>
              <span>Reading time: approximately 9 minutes</span>
            </div>
          </header>

          <aside className="notice notice-important" aria-label="Most important change">
            <strong>The most important new rule:</strong> since 12 August 2025, a valid and
            registered Spanish energy performance certificate must be supplied for the official
            mortgage valuation of a completed building. Where relevant and technically possible,
            the valuer must also consider sustainability and environmental and climate risks.
          </aside>

          <nav className="toc" aria-label="Table of contents">
            <strong>In this article</strong>
            <ol>
              <li><a href="#new-rule">The new valuation rule since August 2025</a></li>
              <li><a href="#mortgage">What it means for obtaining a mortgage</a></li>
              <li><a href="#energy-label">The existing energy-label rules</a></li>
              <li><a href="#changes-2026">New changes in 2026</a></li>
              <li><a href="#eu-rules">EU targets for 2030 and 2035: fact versus rumour</a></li>
              <li><a href="#checklist">Checklist for property buyers</a></li>
            </ol>
          </nav>

          <section id="new-rule">
            <h2>1. New rule: an energy certificate is required for the mortgage valuation</h2>
            <p>
              Spain’s <em>Order ECM/599/2025</em> amended the national valuation rules used for
              financial purposes. From 12 August 2025, a valuer assessing a completed building
              must have access to the registered
              <em> certificado de eficiencia energética</em>. For a building under construction
              or still at project stage, the certificate and a copy of the registration
              application are sufficient, provided the information is consistent.
            </p>
            <p>
              This matters because the valuation normally takes place before the final deed of
              sale is signed. Previously, the energy performance certificate sometimes appeared
              relatively late in the file. A missing or unregistered certificate can now delay
              the valuation and therefore the mortgage application.
            </p>

            <h3>Sustainability may affect the assessed value</h3>
            <p>
              The same regulation introduces a formal sustainability principle into property
              valuation. Where the market demonstrably takes these factors into account and the
              valuation method permits it, energy performance, physical climate risks and
              transition risks may be reflected in the value. The effect can be positive or
              negative.
            </p>
            <ul>
              <li>An energy-efficient home may be more attractive because of lower running costs.</li>
              <li>A poorly performing property may involve future renovation expenditure.</li>
              <li>Flood, heat, drought and coastal risks vary by location.</li>
              <li>The valuer compares the property with relevant transactions and property features.</li>
            </ul>
            <p>
              A low energy rating therefore does not automatically reduce the valuation. The
              valuer must assess the specific property, its location, the market and the available
              comparable properties.
            </p>
          </section>

          <section id="mortgage">
            <h2>2. Does a low energy rating mean you cannot obtain a Spanish mortgage?</h2>
            <p>
              No. There is no general Spanish law preventing banks from financing a property with
              an E, F or G rating. The energy certificate has, however, become part of the
              valuation file. A lower assessed value or clear renovation risks can therefore
              indirectly influence the maximum loan amount or the bank’s internal risk assessment.
            </p>

            <h3>The bank assesses two different risks</h3>
            <div className="two-column">
              <div className="info-box">
                <h4>1. Your ability to repay</h4>
                <p>
                  The bank reviews your income, employment or business position, savings, regular
                  outgoings, existing debts and expected income during the mortgage term. Spanish
                  law requires a lender to grant a loan only when repayment is likely.
                </p>
              </div>
              <div className="info-box">
                <h4>2. The value of the property</h4>
                <p>
                  The property is the collateral. Before the mortgage is granted, an independent
                  authorised valuer or valuation company must complete the mortgage valuation.
                  In practice, the loan is often capped at a percentage of the lower relevant
                  value, but the exact percentage is bank policy rather than a universal buyer’s
                  entitlement.
                </p>
              </div>
            </div>

            <p>
              Banco de España describes financing of up to approximately 80% of the assessed value
              as common market practice. Banks may apply stricter internal limits to non-residents,
              second homes, investment properties or higher-risk applications. Before signing a
              reservation agreement or deposit contract, request a written financial pre-assessment.
            </p>

            <h3>Protect your deposit with a mortgage condition</h3>
            <p>
              A Spanish reservation agreement or <em>contrato de arras</em> can have serious
              financial consequences if the mortgage is later declined. Include a clear
              cancellation condition covering financing and, where relevant, a minimum assessed
              value. Have the precise wording reviewed by an independent Spanish lawyer.
            </p>

            <aside className="notice">
              <strong>Important:</strong> an initial mortgage indication is not a final approval.
              The bank can issue a binding offer only after reviewing your application, the
              property documents and the valuation.
            </aside>
          </section>

          <section id="energy-label">
            <h2>3. Which energy-label rules already apply when selling property in Spain?</h2>
            <p>
              The Spanish energy performance certificate was already required for most sales and
              new rental agreements before the new valuation rule took effect. The seller or owner
              is responsible for obtaining, registering and retaining the certificate, unless a
              specific legal exemption applies.
            </p>

            <h3>The energy rating must appear in the advertisement</h3>
            <p>
              Energy information must be included in offers, promotions and advertisements for
              sale or rent. This obligation also applies to estate-agent websites, property
              portals, brochures and other parties publishing or commissioning the advertisement.
            </p>

            <h3>The registered certificate must accompany the sale agreement</h3>
            <p>
              When an existing home is sold, a copy of the registered energy performance
              certificate and the official label must be attached to the sale agreement. A
              standalone report that has not been registered does not have the same legal status.
            </p>

            <h3>Validity: ten years, but five years for a G rating</h3>
            <p>
              A Spanish energy performance certificate is generally valid for a maximum of ten
              years. For an energy rating of G, the maximum validity period is five years. The
              autonomous region in which the property is located may impose additional procedures
              for registration, renewal and updating.
            </p>

            <h3>An energy certificate is not a structural survey</h3>
            <p>
              The certificate provides information about calculated energy performance and
              includes recommendations for improvement. It does not prove that the property is
              legally compliant or structurally and technically sound. Combine it with legal due
              diligence and, particularly for older or altered homes, a technical building survey.
            </p>
          </section>

          <section id="changes-2026">
            <h2>4. What changed in Spanish energy certification in 2026?</h2>
            <p>
              <em>Royal Decree 659/2025</em> entered into force on 23 July 2026. The amendment
              mainly concerns who may prepare energy performance certificates and how authorised
              professionals are registered and supervised.
            </p>
            <ul>
              <li>Access to the profession is linked to education, knowledge and qualifications.</li>
              <li>Some qualifications require additional course modules.</li>
              <li>The professional must file a prior declaration with the competent regional authority.</li>
              <li>A central administrative register of authorised assessors is being introduced.</li>
              <li>The autonomous regions continue to play an important role in registration and supervision.</li>
            </ul>
            <p>
              For a buyer, the practical point is to verify that the certificate has genuinely
              been registered and that the person who prepared it is authorised. The obligation
              to receive a registered certificate and label when buying remains in place.
            </p>

            <h3>New document formats from 30 September 2026</h3>
            <p>
              According to joint information issued by the Spanish ministries, revised templates
              and technical documents will be used from 30 September 2026. Separate labels will be
              introduced for projects, completed construction and existing buildings, together
              with changes to the certificate and its electronic XML file. Buyers may therefore
              encounter a revised layout or document structure around that date.
            </p>
          </section>

          <section id="eu-rules">
            <h2>5. European energy rules for 2030 and 2035: what is true and what is not?</h2>
            <p>
              It is often claimed online that every existing Spanish home must have at least a C
              energy rating from 2030 and a D rating from 2033 in order to be sold or rented. This
              is not an accurate description of the final European Directive 2024/1275.
            </p>

            <h3>Residential targets apply to the national average</h3>
            <p>
              Member states must establish a national pathway for renovating the residential
              building stock. Compared with 2020, the average primary energy use of the entire
              residential stock must fall by at least 16% by 2030 and by 20% to 22% by 2035. At
              least 55% of this reduction must come from renovating the 43% worst-performing homes.
            </p>
            <p>
              Spain may use a range of instruments, including grants, technical support, financing
              and potentially national minimum standards. The European directive itself does not,
              however, contain a general rule requiring every existing Spanish property to have an
              individual C rating before it can be sold in 2030.
            </p>

            <h3>The binding 2030 and 2033 thresholds concern non-residential property</h3>
            <p>
              The directive does introduce minimum standards for non-residential buildings. The
              worst-performing 16% must be brought below a national energy-use threshold by 2030,
              and the worst-performing 26% by 2033. This system is not the same as imposing a fixed
              European energy-label letter on every home.
            </p>

            <aside className="notice notice-warning">
              <strong>Practical conclusion:</strong> do not buy a property with an E, F or G rating
              on the assumption that nothing will change. There is currently no automatic national
              mortgage or sales ban, but future Spanish renovation measures, energy costs and
              market preferences may affect value and mortgageability.
            </aside>
          </section>

          <section id="checklist">
            <h2>6. Checklist for international property buyers</h2>
            <ol className="checklist">
              <li>
                <strong>Request the complete registered energy performance certificate.</strong>
                Check not only the rating, but also the registration number, expiry date, energy
                consumption, CO₂ emissions and recommended improvements.
              </li>
              <li>
                <strong>Provide the certificate before the valuation.</strong>
                Do not wait until the notary appointment; a missing document may delay the
                mortgage process.
              </li>
              <li>
                <strong>Ask the bank in advance which valuer it will accept.</strong>
                The buyer normally pays for the valuation and may choose an authorised valuer,
                but practical acceptance requirements should be clarified beforehand.
              </li>
              <li>
                <strong>Prepare a renovation budget for a low-rated property.</strong>
                Consider insulation, glazing, solar shading, a heat pump, air conditioning, hot
                water, ventilation and any work required by the owners’ association.
              </li>
              <li>
                <strong>Review the owners’ association.</strong>
                Request minutes, budgets, debts, planned façade or roof work and decisions
                concerning solar panels or shared installations.
              </li>
              <li>
                <strong>Investigate climate and insurance risks.</strong>
                Consider flooding, wildfire, heat, drought, coastal exposure and the terms of the
                building insurance.
              </li>
              <li>
                <strong>Include financing and valuation conditions.</strong>
                Have these conditions legally incorporated before signing a reservation or arras
                agreement.
              </li>
              <li>
                <strong>Compare the FEIN documents from several banks.</strong>
                Review the interest rate, annual percentage rate, compulsory or discount-linked
                products, early-repayment conditions and the terms of any variable rate.
              </li>
            </ol>
          </section>

          <section>
            <h2>7. Summary: what should a buyer remember?</h2>
            <div className="summary-grid">
              <div>
                <span className="summary-label">Since 12 August 2025</span>
                <p>The registered energy certificate is required for the mortgage valuation.</p>
              </div>
              <div>
                <span className="summary-label">No automatic rejection</span>
                <p>A low rating is not a national mortgage ban, but it may have an indirect effect.</p>
              </div>
              <div>
                <span className="summary-label">Since 23 July 2026</span>
                <p>New education, declaration and registration requirements apply to assessors.</p>
              </div>
              <div>
                <span className="summary-label">From 30 September 2026</span>
                <p>New formats apply to labels, certificates and technical documents.</p>
              </div>
            </div>
            <p>
              The best protection is straightforward: have the financing, valuation, energy
              performance, structural condition and legal documents assessed as one complete file
              before making an unconditional payment.
            </p>
          </section>

          <section className="faq-section" aria-labelledby="faq-heading">
            <h2 id="faq-heading">Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <section className="sources" aria-labelledby="sources-heading">
            <h2 id="sources-heading">Official sources</h2>
            <p>
              The sources below were checked for this publication on 23 July 2026. Regional rules
              and administrative procedures may vary between autonomous regions.
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
            <strong>Legal disclaimer</strong>
            <p>
              This article provides general information and does not constitute personal legal,
              tax, structural or financial advice. Before buying, have the current national and
              regional rules and all property documents reviewed by an independent Spanish lawyer,
              authorised valuer and financial adviser.
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