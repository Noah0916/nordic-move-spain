import type { Metadata } from "next";
import Link from "next/link";

const PAGE_PATH =
  "/guides/spanish-property-rules-international-buyers-should-know";
const UPDATED_ISO = "2026-07-29";
const UPDATED_DISPLAY = "29 July 2026";

export const metadata: Metadata = {
  title:
    "Spanish Property Rules International Buyers Should Know (2026) | Nordic Move Spain",
  description:
    "An evidence-based 2026 guide to Spanish property law for international buyers: NIE, arras contracts, Land Registry, Catastro, planning legality, communities, holiday rentals, coastal rules, new builds, mortgages, tax and residency.",
  keywords: [
    "Spanish property rules international buyers",
    "Spain property law foreign buyers 2026",
    "buying property Spain legal checks",
    "arras contract Spain",
    "nota simple Spain",
    "Registro de la Propiedad",
    "Catastro Spain property",
    "NIE buying property Spain",
    "holiday rental rules Valencia 2026",
    "community approval tourist rental Spain",
    "building legality Costa Blanca",
    "Spanish coastal law property",
    "non resident seller 3 percent withholding Spain",
    "Golden Visa Spain ended 2025",
    "property due diligence Spain",
    "buying property Costa Blanca legal checks",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  authors: [{ name: "Nordic Move Spain" }],
  creator: "Nordic Move Spain",
  publisher: "Nordic Move Spain",
  category: "Spanish property law and due diligence",
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
    locale: "en_GB",
    siteName: "Nordic Move Spain",
    title:
      "Spanish Property Rules International Buyers Should Know in 2026",
    description:
      "A detailed, source-checked guide to the rules that matter before buying in Spain: contracts, title, Catastro, planning, communities, rentals, coastal restrictions and tax.",
    url: PAGE_PATH,
    publishedTime: UPDATED_ISO,
    modifiedTime: UPDATED_ISO,
    authors: ["Nordic Move Spain"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Spanish Property Rules International Buyers Should Know (2026)",
    description:
      "From arras and Nota Simple to planning legality, tourist rentals, coastal rules and residency: the essential legal checks before buying in Spain.",
  },
};

type Rule = {
  number: string;
  title: string;
  legalBasis: string;
  summary: string;
  whyItMatters: string;
  buyerCheck: string;
};

const rules: Rule[] = [
  {
    number: "01",
    title: "A Spanish property purchase and Spanish residency are separate legal matters",
    legalBasis:
      "Spanish immigration law; investor-residence provisions in Law 14/2013 were removed with effect from 3 April 2025.",
    summary:
      "Foreign nationals can acquire Spanish real estate, but owning a home does not by itself create a right to reside in Spain. The former property-linked investor residence route commonly known as the Golden Visa no longer accepts new applications under the old real-estate investment provisions.",
    whyItMatters:
      "A buyer can legally own a €300,000 or €3 million property and still need a separate immigration basis to live in Spain beyond the period permitted by their nationality and status.",
    buyerCheck:
      "Decide separately: (1) how you will own the property, and (2) on what legal basis you will live in Spain, if relocation is part of the plan.",
  },
  {
    number: "02",
    title: "The NIE is an identification number — not a residence permit",
    legalBasis:
      "Spanish Ministry of the Interior rules on the Número de Identidad de Extranjero.",
    summary:
      "A foreign national who has economic, professional or social dealings with Spain can be assigned a personal, unique NIE. The number is used on Spanish administrative and legal documents.",
    whyItMatters:
      "Property buyers commonly need an NIE for the tax, notarial and registration stages, but having an NIE does not mean that the holder is resident in Spain.",
    buyerCheck:
      "Start the NIE process early enough for completion and do not confuse the NIE with a visa, residence card or EU registration certificate.",
  },
  {
    number: "03",
    title: "A reservation or arras contract can create real legal and financial consequences",
    legalBasis:
      "Spanish Civil Code, including Article 1454 where the parties have agreed penitential arras.",
    summary:
      "Private purchase agreements are not harmless placeholders. Under Article 1454, where the deposit operates as penitential arras, the buyer may withdraw by losing the deposit and the seller may withdraw by returning double. Not every deposit automatically has that legal character: the wording and contractual intention matter.",
    whyItMatters:
      "International buyers sometimes transfer a reservation amount before legal, planning or technical checks are complete. A poorly drafted contract can make recovery difficult if a problem is discovered later.",
    buyerCheck:
      "Before paying, define in writing what happens if title, planning legality, mortgage approval, technical condition, rental use or another agreed condition fails.",
  },
  {
    number: "04",
    title: "The Land Registry is the starting point for title and registered charges — not the end of due diligence",
    legalBasis:
      "Spanish Mortgage Law and official guidance from the Colegio de Registradores.",
    summary:
      "A Nota Simple identifies the registered property, registered owner or owners, and registered rights and limitations such as mortgages, usufructs, attachments and other charges. The official registry service can also provide English-language information.",
    whyItMatters:
      "The Registry answers critical legal-title questions, but it does not by itself prove that every terrace, pool, extension, guest house or converted area visible on site is planning-compliant.",
    buyerCheck:
      "Obtain a current Nota Simple and compare the registered description with the physical property, Catastro, plans, municipal records and technical inspection.",
  },
  {
    number: "05",
    title: "Registro de la Propiedad and Catastro are different systems",
    legalBasis:
      "Mortgage-law registration system and the Spanish Cadastre legislation administered by Dirección General del Catastro.",
    summary:
      "The Property Registry records legal ownership and real rights. Catastro is an administrative inventory containing physical, economic and mapping data and a unique cadastral reference. A property may be coordinated between the two systems, but buyers should not assume perfect identity.",
    whyItMatters:
      "Differences in floor area, boundaries, pools, outbuildings or plot geometry can be a warning that further legal or technical work is required.",
    buyerCheck:
      "Compare registered description, cadastral plan, cadastral reference, measured reality and any municipal plans before treating square metres in a listing as legally established.",
  },
  {
    number: "06",
    title: "The cadastral reference value can affect acquisition tax",
    legalBasis:
      "Spanish Cadastre rules on valor de referencia and the tax rules for ITP/AJD and inheritance/gift tax.",
    summary:
      "The valor de referencia is calculated by the Cadastre using market-transaction analysis and can be relevant to the taxable base for ITP and AJD. It is not the same as the cadastral value used for IBI.",
    whyItMatters:
      "A buyer who calculates transfer tax only from the negotiated purchase price can underestimate the amount due if the statutory tax base is higher.",
    buyerCheck:
      "Check the current reference value before signing a binding contract and have the lawyer confirm the tax base and regional rate for the specific transaction.",
  },
  {
    number: "07",
    title: "Visible construction is not proof of planning legality",
    legalBasis:
      "State Land and Urban Rehabilitation Law, Article 28, plus autonomous-community and municipal planning legislation.",
    summary:
      "Spanish rules require administrative and technical evidence for formal declarations of new construction. For completed works, documentation can include technical certification, permissions or other legally recognised planning instruments, depending on the case and local law.",
    whyItMatters:
      "Pools, enclosed terraces, pergolas, garages, basement conversions, guest accommodation and extensions can exist physically while their legal, cadastral and registry status is incomplete or inconsistent.",
    buyerCheck:
      "Have a qualified independent technical professional compare the actual building with the Registry, Catastro, plans, licences and municipal planning file.",
  },
  {
    number: "08",
    title: "A notary is essential to legal certainty, but is not a substitute for buyer-side legal and technical due diligence",
    legalBasis:
      "Spanish notarial system and official Consejo General del Notariado guidance.",
    summary:
      "Before completion, the notary checks identity, capacity, title and registered charges, requests registry information, reviews matters such as community-payment certification, IBI evidence, cadastral reference and energy documentation, and records the means of payment. The deed is normally filed electronically with the Property Registry after signature.",
    whyItMatters:
      "The notarial process is a major protection, but the notary does not visit the house to inspect cracking, damp, retaining walls, electrical installations, pool construction or planning discrepancies on behalf of the buyer.",
    buyerCheck:
      "Use the notary for the public deed and legal-authentication function, an independent lawyer for buyer-side legal due diligence, and an independent technical professional for the physical building.",
  },
  {
    number: "09",
    title: "Registration after purchase is legally protective even though registration is not the same thing as signing the sale",
    legalBasis:
      "Spanish Mortgage Law and government guidance on real-estate purchases.",
    summary:
      "The deed and Land Registry serve different functions. Official Spanish guidance describes registration as voluntary but strongly advisable because registered ownership provides protection against third-party claims and undisclosed later dealings.",
    whyItMatters:
      "International buyers sometimes focus entirely on the notary appointment and regard the post-completion registration as administrative housekeeping.",
    buyerCheck:
      "Confirm that transfer tax is filed and the deed is presented and ultimately registered in the buyer's name, and obtain updated registry evidence afterwards.",
  },
  {
    number: "10",
    title: "Community debts and community rules can follow the property",
    legalBasis:
      "Law 49/1960 on Horizontal Property, particularly Article 9.",
    summary:
      "A purchaser of a unit in a comunidad de propietarios can face a statutory property charge for unpaid general community expenses attributable to the current year and the previous three calendar years. The seller must normally provide a certificate of community-debt status for the public deed unless the buyer expressly waives it.",
    whyItMatters:
      "A low asking price can be offset by unpaid community charges, approved special assessments, lift works, façade repairs or restrictions contained in the statutes or resolutions.",
    buyerCheck:
      "Review the debt certificate, latest annual accounts, reserve fund, statutes, recent meeting minutes and any approved or expected special assessments.",
  },
  {
    number: "11",
    title: "Tourist letting is not a right that automatically comes with ownership",
    legalBasis:
      "Law on Horizontal Property, Organic Law 1/2025, regional tourism legislation and municipal planning rules.",
    summary:
      "For new tourist-rental activity in buildings governed by horizontal-property law, Spanish law now requires express community approval in the terms of Article 17.12. Official 2025 and 2026 registry decisions confirm the three-fifths test for owners and participation quotas where the post-3-April-2025 regime applies.",
    whyItMatters:
      "A property may have been advertised as 'ideal for Airbnb' while the present buyer cannot lawfully start the same activity.",
    buyerCheck:
      "Treat rental legality as an address-specific due-diligence question: community approval, statutes, municipal compatibility, regional registration and current national requirements all matter.",
  },
  {
    number: "12",
    title: "On the Costa Blanca, Valencian tourist-rental rules are unusually specific",
    legalBasis:
      "Current Generalitat Valenciana rules for viviendas de uso turístico.",
    summary:
      "The Valencian regime treats qualifying tourist use as paid letting of the entire dwelling for ten consecutive days or fewer to the same guest. Room-by-room tourist letting is outside this VUT model. A favourable municipal compatibility report or equivalent document is required, and VUT registration is generally valid for five years.",
    whyItMatters:
      "The legal category can change with the length and form of occupation, and municipal planning can be more restrictive than the regional baseline.",
    buyerCheck:
      "If income from short stays is part of the purchase case, obtain written confirmation for the actual property before relying on projected rental returns.",
  },
  {
    number: "13",
    title: "Coastal property can be affected by national coastal-law easements",
    legalBasis:
      "Law 22/1988 on Coasts and its current implementing regulation.",
    summary:
      "The general coastal protection easement extends 100 metres inland from the inner boundary of the seashore, subject to statutory transitional rules, exceptions and possible extensions. Within the protection zone, residential construction is generally prohibited under the current statutory regime, although existing lawful buildings can be subject to complex transitional rules.",
    whyItMatters:
      "A sea-front title can carry restrictions on works, use, rebuilding, access or future redevelopment that are not obvious from a normal viewing.",
    buyerCheck:
      "For property close to the coast, check the official deslinde, coastal easements, title history and planning position rather than relying on distance-to-beach marketing.",
  },
  {
    number: "14",
    title: "New-build buyers should verify developer, land, licence, guarantees and building documentation",
    legalBasis:
      "Law 38/1999 on Building Regulation, Land Registry rules and official government buying guidance.",
    summary:
      "Official guidance for off-plan buyers recommends confirming that the developer exists, the land is registered to the developer, construction is authorised and stage payments are properly protected. The Building Regulation Law establishes statutory liability periods linked to finishing defects, habitability and structural defects, including a ten-year structural regime.",
    whyItMatters:
      "A glossy development brochure does not establish title to the land, planning permission, protected stage payments or delivery documentation.",
    buyerCheck:
      "Before each material payment, have the independent lawyer verify the developer, land title, licence, contract, bank guarantees and required completion documentation.",
  },
  {
    number: "15",
    title: "The energy certificate is a legal sale document, not a structural survey",
    legalBasis:
      "Royal Decree 390/2021, Article 17.",
    summary:
      "For an existing building sold in Spain, a copy of the duly registered energy-efficiency certificate and label must be attached to the sale contract. Advertising must also include the energy rating information required by the regulation.",
    whyItMatters:
      "An EPC indicates energy performance. It does not tell the buyer whether a retaining wall is stable, a roof leaks, wiring is safe or an extension is properly licensed.",
    buyerCheck:
      "Verify the registered certificate, but keep it separate from the independent building survey and planning review.",
  },
  {
    number: "16",
    title: "If the seller is non-resident, the buyer has a 3% withholding obligation",
    legalBasis:
      "Spanish Non-Resident Income Tax rules and Agencia Tributaria Form 211 procedure.",
    summary:
      "Where the seller is non-resident, the purchaser — resident or non-resident — must generally withhold 3% of the agreed consideration and pay it to the Spanish Treasury using Form 211 as a payment on account of the seller's tax liability.",
    whyItMatters:
      "This is a buyer-side compliance obligation even though economically the withholding belongs to the seller's tax position.",
    buyerCheck:
      "Make the seller's tax residence part of completion preparation and ensure the 3% withholding and Form 211 are handled correctly where required.",
  },
  {
    number: "17",
    title: "A mortgage valuation is not the same as a buyer's building survey",
    legalBasis:
      "Banco de España mortgage-valuation rules and lending practice.",
    summary:
      "For a mortgage, the security property must be valued by an approved valuation company. Banco de España states that a compliant valuation presented by the customer must generally be accepted by the lender if it is not expired; the usual validity period is six months.",
    whyItMatters:
      "A bank valuation is designed for lending security and value. It is not a forensic investigation of waterproofing, structure, illegal works or future repair cost.",
    buyerCheck:
      "If the property itself matters more than the bank's collateral ratio, commission an independent technical inspection in addition to the mortgage valuation.",
  },
  {
    number: "18",
    title: "Some non-EU buyers can face defence-area restrictions in specific parts of Spain",
    legalBasis:
      "Law 8/1975 and Royal Decree 689/1978 on areas and installations of interest to national defence.",
    summary:
      "Spain retains a special regime for foreign acquisitions in defined defence-restricted areas. EU nationals are exempt from these restrictions under the legislation, but non-EU buyers can require prior military authorisation for affected property in certain designated areas.",
    whyItMatters:
      "The rule is geographical, not a general ban on non-EU ownership. It is easy to miss because it applies only to specific zones and can affect timing.",
    buyerCheck:
      "If you are a non-EU national and the property is in or near a restricted defence zone, have the lawyer confirm whether military authorisation is required before signing or completing.",
  },
];

const whoChecksWhat = [
  {
    professional: "Independent property lawyer",
    checks:
      "Title, registered charges, contracts, seller authority, tax issues, community documentation, planning/legal documentation, completion conditions and transaction structure.",
    doesNotReplace:
      "A physical building inspection or structural diagnosis.",
  },
  {
    professional: "Independent technical professional / surveyor",
    checks:
      "Visible condition, measurements, apparent alterations, damp, cracking, roofs, retaining walls, installations, pool and comparison between physical reality and available documentation.",
    doesNotReplace:
      "Legal title analysis or tax advice.",
  },
  {
    professional: "Notary",
    checks:
      "Identity, legal capacity, public deed, registry information, formal transaction requirements, means of payment and statutory documents required at completion.",
    doesNotReplace:
      "Buyer-side negotiation, municipal-file investigation or a technical survey.",
  },
  {
    professional: "Property Registry",
    checks:
      "Registered ownership, real rights, mortgages, attachments, usufructs, restrictions and the registered property description.",
    doesNotReplace:
      "Municipal planning records or confirmation that the building visible on site exactly matches the registered description.",
  },
  {
    professional: "Municipality",
    checks:
      "Planning permissions, urban compatibility, certain licences, enforcement history and local-use questions depending on the municipality and file.",
    doesNotReplace:
      "Private title or structural condition.",
  },
];

const redFlags = [
  "The built area in the estate-agent listing is materially larger than the registered or cadastral area.",
  "A pool, guest house, garage, basement or enclosed terrace is visible but absent from documents.",
  "The seller says an alteration is 'too old to matter' without a written legal-planning analysis.",
  "The seller or agent wants a reservation payment before the buyer's lawyer sees the contract.",
  "The property is marketed for holiday letting but no address-specific permission or community approval is produced.",
  "Community minutes mention litigation, façade work, lift replacement, pool repair or large special assessments.",
  "The property is very close to the shoreline and no coastal-law review has been carried out.",
  "The Nota Simple is old, names a different owner or contains unexplained mortgages, attachments, usufructs or easements.",
  "The cadastral map and visible boundaries do not match.",
  "A new-build buyer is asked to make substantial stage payments without independently verified bank guarantees or equivalent protection.",
  "The buyer is told that the NIE is the same as Spanish residency.",
  "A bank valuation is presented as proof that the house has no technical defects.",
];

const faqItems = [
  {
    question: "Can foreigners legally buy property in Spain?",
    answer:
      "Yes, foreign nationals can generally buy Spanish real estate. Property ownership is separate from immigration status. Specific defence-area rules can require authorisation for some non-EU buyers in designated locations, so the exact property and nationality should be checked.",
  },
  {
    question: "Does buying a house in Spain give me residency?",
    answer:
      "No. Property ownership and residence rights are separate. The former investor-residence provisions linked to significant investment, including real estate, were removed with effect from 3 April 2025 for new applications under that regime.",
  },
  {
    question: "Do I need an NIE to buy property in Spain?",
    answer:
      "Foreign buyers normally need an NIE for the tax, notarial and administrative stages of a purchase. The NIE is an identification number for foreigners with dealings in Spain; it is not a residence permit.",
  },
  {
    question: "Is an arras contract legally binding?",
    answer:
      "It can be. The consequences depend on the wording and type of deposit. Article 1454 of the Spanish Civil Code provides that where penitential arras apply, the buyer may withdraw by forfeiting the deposit and the seller may withdraw by returning double. A lawyer should review the actual contract before payment.",
  },
  {
    question: "What does a Nota Simple show?",
    answer:
      "A Nota Simple provides registry information on the property, registered ownership and registered rights or charges such as mortgages, usufructs, attachments and restrictions. It is fundamental due-diligence evidence, but it does not replace planning and technical checks.",
  },
  {
    question: "Are Catastro and the Land Registry the same thing?",
    answer:
      "No. The Land Registry records ownership and real rights. Catastro is an administrative property database containing mapping, physical and economic information. Discrepancies between the two systems and the physical property should be investigated before purchase.",
  },
  {
    question: "Can I legally rent my Spanish property on Airbnb or Booking?",
    answer:
      "Not automatically. Tourist letting can depend on national horizontal-property rules, community approval, regional tourism legislation, municipal planning and registration requirements. In the Comunitat Valenciana, the current VUT framework includes a ten-day-or-less criterion for the same guest, whole-property letting, municipal compatibility and generally five-year registration validity.",
  },
  {
    question: "Can a homeowners' association stop tourist rentals?",
    answer:
      "Spanish horizontal-property law now requires express community approval for owners starting qualifying tourist accommodation activity under the post-3-April-2025 regime, using the statutory three-fifths majority framework. Existing lawful activity may fall under transitional rules, so dates and documentation matter.",
  },
  {
    question: "Does the notary check that every extension and pool is legal?",
    answer:
      "The notary performs important legal and documentary checks for the public deed, but buyers should not treat the notarial process as a physical survey or full municipal planning investigation. Extensions, pools and alterations should be checked separately against technical and planning records.",
  },
  {
    question: "What happens if I buy from a non-resident seller?",
    answer:
      "The buyer is generally required to withhold 3% of the agreed consideration and pay it to the Spanish Treasury using Form 211 as a payment on account of the non-resident seller's tax position.",
  },
  {
    question: "Is a Spanish mortgage valuation a building survey?",
    answer:
      "No. The mortgage valuation is primarily a lending and collateral valuation. A buyer who wants information about condition, visible defects, construction and discrepancies should commission an independent technical inspection.",
  },
  {
    question: "What should I check before signing a reservation contract?",
    answer:
      "At minimum, identify the exact property and seller, understand whether the payment is refundable, define legal and technical due-diligence conditions, address financing if relevant, and make clear what happens if the property cannot be used as intended.",
  },
];

const sources = [
  {
    group: "Buying process",
    title:
      "Spanish Government — Buying real estate: notarial offices and property registers",
    href:
      "https://administracion.gob.es/pag_Home/en/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/compraventa-bienes-inmuebles/notarias-registros-propiedad.html",
  },
  {
    group: "Notary",
    title: "Consejo General del Notariado — Buying a home",
    href: "https://www.notariado.org/comprar-una-vivienda/",
  },
  {
    group: "Land Registry",
    title: "Colegio de Registradores — Property Registry and Nota Simple",
    href: "https://sede.registradores.org/site/propiedad?lang=es",
  },
  {
    group: "Contracts",
    title: "BOE — Spanish Civil Code, including Article 1454 on arras",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763",
  },
  {
    group: "NIE",
    title: "Spanish Ministry of the Interior — Número de Identidad de Extranjero",
    href:
      "https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/ciudadanos-de-la-union-europea/numero-de-Identidad-de-extranjero-nie/",
  },
  {
    group: "Catastro",
    title: "Dirección General del Catastro — Reference value FAQ",
    href: "https://www.catastro.hacienda.gob.es/es-ES/faqs.html",
  },
  {
    group: "Planning / construction",
    title:
      "BOE — Real Decreto Legislativo 7/2015, Land and Urban Rehabilitation Law",
    href: "https://boe.es/buscar/act.php?id=BOE-A-2015-11723",
  },
  {
    group: "Community rules",
    title: "BOE — Law 49/1960 on Horizontal Property",
    href:
      "https://boe.es/buscar/act.php?id=BOE-A-1960-10906&lang=es&p=&tn=1",
  },
  {
    group: "Tourist rentals",
    title:
      "BOE — 2026 registry decision confirming express 3/5 approval for post-3-April-2025 tourist activity",
    href:
      "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-16229",
  },
  {
    group: "Valencian tourist rentals",
    title:
      "Generalitat Valenciana — Official VUT registration rules and requirements",
    href: "https://sede.gva.es/es/detall-tramit?id_proc=19207",
  },
  {
    group: "Coastal law",
    title: "BOE — Law 22/1988 on Coasts",
    href:
      "https://www.boe.es/buscar/act.php?id=BOE-A-1988-18762&lang=es&p=&tn=1",
  },
  {
    group: "Building guarantees",
    title: "BOE — Law 38/1999 on Building Regulation",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-1999-21567",
  },
  {
    group: "Energy certificate",
    title: "BOE — Royal Decree 390/2021 on building energy certification",
    href:
      "https://www.boe.es/buscar/act.php?id=BOE-A-2021-9176&p=20250723&tn=1",
  },
  {
    group: "Non-resident seller",
    title:
      "Agencia Tributaria — 3% withholding when acquiring property from a non-resident",
    href:
      "https://sede.agenciatributaria.gob.es/Sede/en_gb/no-residentes/irnr-sin-establecimiento-permanente/retenciones-irnr-sin-establecimiento-permanente/retencion-adquirente-inmueble.html",
  },
  {
    group: "Mortgage valuation",
    title: "Banco de España — Property valuation for mortgage lending",
    href:
      "https://www.bde.es/hnb/es/criterios-buenas-practicas/tasacion-para-la-concesion-de-prestamos-y-creditos-hipotecarios.html",
  },
  {
    group: "Investor residence",
    title:
      "BOE — Law 14/2013 showing investor-residence Articles 63–67 removed from 3 April 2025",
    href: "https://www.boe.es/buscar/act.php?id=BOE-A-2013-10074",
  },
  {
    group: "Defence-area restrictions",
    title:
      "BOE — Law 8/1975 on areas and installations of interest to national defence",
    href: "https://boe.es/buscar/act.php?id=BOE-A-1975-5292",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Spanish Property Rules International Buyers Should Know in 2026",
  description:
    "Evidence-based guide to the Spanish property rules international buyers should understand before signing: title, contracts, planning, Catastro, communities, tourist rentals, coastal law, tax and residency.",
  datePublished: UPDATED_ISO,
  dateModified: UPDATED_ISO,
  inLanguage: "en-GB",
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
    "Spanish property law",
    "International property buyers",
    "Costa Blanca",
    "Property due diligence",
    "Land Registry",
    "Catastro",
    "Tourist rental law",
    "Planning legality",
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
      item: "/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: "/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Spanish property rules international buyers should know",
      item: PAGE_PATH,
    },
  ],
};

function RuleCard({ rule }: { rule: Rule }) {
  return (
    <article className="rounded-[34px] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1e2a3a] text-sm font-semibold text-white">
          {rule.number}
        </span>
        <span className="max-w-xl text-right text-xs uppercase tracking-[0.18em] text-[#9b743d]">
          {rule.legalBasis}
        </span>
      </div>

      <h3 className="mt-7 font-serif text-3xl leading-tight text-[#1e2a3a] md:text-4xl">
        {rule.title}
      </h3>

      <p className="mt-6 text-lg leading-relaxed text-stone-600">
        {rule.summary}
      </p>

      <div className="mt-7 grid gap-5 border-t border-stone-200 pt-7 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
            Why it matters
          </p>
          <p className="mt-3 leading-relaxed text-stone-600">
            {rule.whyItMatters}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
            Buyer check
          </p>
          <p className="mt-3 leading-relaxed text-stone-700">
            {rule.buyerCheck}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
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

      {/* HERO */}
      <header className="bg-[#1e2a3a] px-6 py-24 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/65"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/guides" className="transition hover:text-white">
              Guides
            </Link>
            <span aria-hidden="true">/</span>
            <span>Spanish property rules</span>
          </nav>

          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Evidence-based buyer guide · Reviewed {UPDATED_DISPLAY}
          </p>

          <h1 className="mt-6 max-w-6xl font-serif text-5xl leading-[1.03] md:text-7xl">
            Spanish property rules international buyers should know before
            signing.
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/80">
            Spain is not difficult to buy in when the process is checked
            properly. The risk comes from assuming that a reservation, a Nota
            Simple, a notary appointment or a bank valuation proves more than it
            actually does. This guide separates the legal systems involved and
            explains what each one can — and cannot — tell you.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#18-rules"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Read the 18 key rules
            </a>

            <Link
              href="/services/purchase-safety-report"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Purchase Safety
            </Link>
          </div>
        </div>
      </header>

      {/* METHODOLOGY */}
      <section className="border-b border-stone-200 bg-white/80 px-6 py-8 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#9b743d]">
              Primary-law approach
            </p>
            <p className="mt-2 leading-relaxed text-stone-700">
              The core rules are checked against BOE legislation, Spanish
              government guidance, the Land Registry, Tax Agency, Catastro and
              regional authorities.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#9b743d]">
              National + local layers
            </p>
            <p className="mt-2 leading-relaxed text-stone-700">
              Spanish property law is not one single checklist. State law,
              autonomous-community rules, municipal planning and private
              community rules can all apply to the same property.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#9b743d]">
              Scope
            </p>
            <p className="mt-2 leading-relaxed text-stone-700">
              This is a research guide for buyers, not property-specific legal
              advice. A final purchase decision should be based on the actual
              title, building and municipal file.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              The central idea
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              A Spanish house exists in several legal systems at once.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              The same villa can have a registered title in the Registro de la
              Propiedad, a cadastral description in Catastro, a planning history
              at the town hall, a tax value used by the authorities and — if it
              sits in an urbanisation — private obligations through a comunidad
              de propietarios.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Those records do not answer the same question. A clean Nota Simple
              can establish registered ownership and charges without proving
              that every visible extension is planning-compliant. A cadastral
              plan can show a pool without proving that the pool was lawfully
              authorised. A notary can make the transaction legally secure
              without inspecting the retaining wall behind the house.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              The strongest buying process therefore works by
              <strong className="font-medium text-[#1e2a3a]">
                {" "}
                cross-checking independent evidence
              </strong>{" "}
              rather than relying on one document or one professional.
            </p>
          </div>
        </div>
      </section>

      {/* SYSTEM MAP */}
      <section className="px-6 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Legal title",
                title: "Property Registry",
                text:
                  "Who owns it? Which registered mortgages, usufructs, attachments, easements or restrictions exist?",
              },
              {
                label: "Physical / tax record",
                title: "Catastro",
                text:
                  "Where is it mapped? What cadastral reference, geometry, use and value information does the administration hold?",
              },
              {
                label: "Planning",
                title: "Town hall",
                text:
                  "What was authorised? What use is permitted? Are alterations, pools, extensions or tourist use compatible with planning rules?",
              },
              {
                label: "Physical reality",
                title: "Technical inspection",
                text:
                  "What is actually built? What condition is it in? Does the visible property match the available plans and records?",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] bg-white p-8 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                  {item.label}
                </p>
                <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RULES */}
      <section id="18-rules" className="bg-[#e9dfd2] px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              18 rules to understand
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              The legal points that most often change a buying decision.
            </h2>
            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-stone-700">
              Some rules affect every purchase. Others become decisive only for
              a particular type of property, such as an apartment, coastal
              villa, new build, holiday-rental investment or non-EU purchase in
              a restricted area.
            </p>
          </div>

          <div className="mt-14 grid gap-7">
            {rules.map((rule) => (
              <RuleCard key={rule.number} rule={rule} />
            ))}
          </div>
        </div>
      </section>

      {/* WHO CHECKS WHAT */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Division of responsibility
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Five actors, five different questions.
            </h2>
            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-stone-600">
              Problems arise when buyers expect one professional to cover a
              field that belongs to another discipline.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[34px] border border-stone-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[920px] border-collapse text-left">
                <thead className="bg-[#f6f1ea] text-xs uppercase tracking-[0.18em] text-stone-500">
                  <tr>
                    <th className="px-7 py-5 font-medium">Actor</th>
                    <th className="px-7 py-5 font-medium">Core function</th>
                    <th className="px-7 py-5 font-medium">Does not replace</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {whoChecksWhat.map((item) => (
                    <tr key={item.professional} className="align-top">
                      <th className="px-7 py-6 font-serif text-2xl font-normal text-[#1e2a3a]">
                        {item.professional}
                      </th>
                      <td className="px-7 py-6 leading-relaxed text-stone-600">
                        {item.checks}
                      </td>
                      <td className="px-7 py-6 leading-relaxed text-stone-600">
                        {item.doesNotReplace}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ARRAS */}
      <section className="bg-[#1e2a3a] px-6 py-28 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Private contracts
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight">
              The biggest legal decision may happen before the notary.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-white/80">
              Article 1454 of the Spanish Civil Code is often summarised as:
              buyer walks away and loses the deposit; seller walks away and
              returns double. That summary is useful only when the contract
              actually creates the type of penitential arras governed by that
              rule.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-white/80">
              The legal character of a deposit depends on the agreement. The
              safest approach is not to guess whether a reservation form is
              refundable, confirmatory, penal or penitential. The contract
              should state precisely what the payment is, when it becomes
              non-refundable and what happens if due diligence or financing
              fails.
            </p>

            <div className="mt-8 rounded-[28px] border border-white/15 bg-white/5 p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-[#c8a063]">
                Buyer rule
              </p>
              <p className="mt-4 font-serif text-3xl">
                Do not use the deposit to start due diligence. Use due diligence
                to decide whether the deposit is safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRY CATASTRO PLANNING */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Cross-checking the property
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Legal description, cadastral map and physical reality should tell
              a coherent story.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[32px] bg-white p-9 shadow-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                Registry
              </p>
              <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                Who owns what?
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                Check ownership, legal rights, mortgages, attachments,
                usufructs, easements, limitations and the registered
                description. Use current information near the signing date.
              </p>
            </article>

            <article className="rounded-[32px] bg-white p-9 shadow-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                Catastro
              </p>
              <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                What does the administration map?
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                Compare the cadastral reference, plot geometry, recorded
                buildings, use and areas with both Registry information and what
                is visible during the survey.
              </p>
            </article>

            <article className="rounded-[32px] bg-white p-9 shadow-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-[#9b743d]">
                Municipality
              </p>
              <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                What was authorised?
              </h3>
              <p className="mt-5 leading-relaxed text-stone-600">
                Planning records can determine whether additions, use changes,
                pools or other works were authorised and whether the intended
                future use is compatible with local rules.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-[32px] bg-[#fffaf3] p-8 ring-1 ring-[#c8a063]/25 md:p-10">
            <h3 className="font-serif text-3xl text-[#1e2a3a]">
              “It appears in Catastro” is not the same as “it is legally
              authorised”.
            </h3>
            <p className="mt-5 max-w-5xl leading-relaxed text-stone-700">
              Catastro is crucial evidence, but it serves a different legal
              function from planning permission and Land Registry title. If a
              pool or extension appears in the cadastral record, the buyer
              should still ask what planning document or legal mechanism
              supports it.
            </p>
          </div>
        </div>
      </section>

      {/* RENTALS */}
      <section className="bg-[#e9dfd2] px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
                Tourist letting
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Rental potential must be legally proved, not commercially
                assumed.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-700">
                Since 3 April 2025, the national horizontal-property framework
                has materially changed the position for new tourist activity in
                community buildings. Recent 2026 registry decisions continue to
                apply the requirement for express community approval using the
                statutory three-fifths majority test where the new regime
                applies.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                On the Costa Blanca, the Generalitat Valenciana adds its own
                tourism definition and registration framework, while each
                municipality can determine planning compatibility. The same
                apartment can therefore pass one level and fail another.
              </p>

              <div className="mt-8 rounded-[28px] bg-white p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.22em] text-[#9b743d]">
                  Evidence before yield
                </p>
                <p className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  Never model the investment return before proving that the
                  intended rental model is lawful at that address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RED FLAGS */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Due-diligence red flags
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Twelve statements that should trigger another question.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {redFlags.map((flag, index) => (
              <article
                key={flag}
                className="flex gap-5 rounded-[26px] bg-white p-7 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1e2a3a] text-xs font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="leading-relaxed text-stone-700">{flag}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PURCHASE SEQUENCE */}
      <section className="bg-white px-6 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              A safer sequence
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Put the checks in the right order.
            </h2>
          </div>

          <ol className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Define intended use",
                text:
                  "Main residence, second home, retirement, renovation or rental investment? Intended use determines which legal checks matter.",
              },
              {
                step: "2",
                title: "Identify seller and title",
                text:
                  "Obtain current registry information and establish who can legally sell the property and which charges exist.",
              },
              {
                step: "3",
                title: "Protect the reservation",
                text:
                  "Do not pay an unconditional deposit merely to secure time for checks. Build due-diligence and financing protections into the contract.",
              },
              {
                step: "4",
                title: "Legal + technical review",
                text:
                  "Run title, planning, Catastro, community and physical-building checks in parallel and reconcile contradictions.",
              },
              {
                step: "5",
                title: "Confirm tax and funding",
                text:
                  "Verify the correct taxable base, tax regime, mortgage conditions and source-of-funds / payment documentation before completion.",
              },
              {
                step: "6",
                title: "Complete, tax and register",
                text:
                  "Sign the public deed, handle required tax filings and ensure the acquisition is presented and registered in the buyer's name.",
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
        </div>
      </section>

      {/* SOURCES */}
      <section id="sources" className="bg-[#1e2a3a] px-6 py-28 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Primary and official sources
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Follow the rule back to the institution that owns it.
            </h2>
            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-white/75">
              Spanish property questions are often repeated online without
              distinguishing law, guidance and market practice. The links below
              point to legislation or official institutional guidance used for
              this review.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {sources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[26px] border border-white/12 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#c8a063]">
                  {source.group}
                </p>
                <p className="mt-3 font-medium leading-relaxed text-white">
                  {source.title} ↗
                </p>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] border border-white/12 bg-white/5 p-7 text-sm leading-relaxed text-white/65">
            <strong className="font-medium text-white">
              Editorial standard:
            </strong>{" "}
            This article distinguishes national rules from regional, municipal
            and property-specific issues. A rule that is true for Spain as a
            whole does not automatically answer a planning or tourism question
            for one address. The legal and factual position should be checked
            again before a binding payment because legislation, municipal
            planning and registry status can change.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-28 md:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Frequently asked questions
          </p>
          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
            Spanish property rules in practical language.
          </h2>

          <div className="mt-12 space-y-5">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-[28px] bg-white p-7 shadow-sm"
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

      {/* RELATED */}
      <section className="bg-[#e9dfd2] px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
            Related buyer research
          </p>
          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a]">
            Go deeper before making the property decision.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/guides/buying-property-spain",
                title: "Buying a property in Spain",
              },
              {
                href: "/guides/total-cost-buying-property-spain",
                title: "Total cost of buying property in Spain",
              },
              {
                href: "/guides/costs-rentals-real-life-checks-before-buying",
                title: "Costs, rentals and real-life checks before buying",
              },
              {
                href: "/guides/homeowners-associations-spain",
                title: "Homeowners' associations in Spain",
              },
              {
                href: "/guides/common-mistakes-buying-property-spain",
                title: "Common mistakes when buying property in Spain",
              },
              {
                href: "/guides/how-long-does-it-take-to-buy-a-house-in-spain",
                title: "How long does it take to buy a house in Spain?",
              },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-[28px] bg-[#f6f1ea] p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <h3 className="font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {guide.title}
                </h3>
                <span className="mt-5 inline-block text-sm font-medium text-[#9b743d]">
                  Read guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32 pt-20 md:px-8">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-10 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Before you commit
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight">
            The goal is not more paperwork. It is fewer unknowns before you
            buy.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Nordic Move Spain helps international buyers combine the property
            search with independent legal and technical checks, so title,
            planning, physical condition and intended use can be considered
            before the final purchase decision.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/services/purchase-safety-report"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Explore Purchase Safety
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Plan an introductory call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}