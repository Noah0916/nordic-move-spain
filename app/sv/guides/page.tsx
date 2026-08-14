export const metadata = {
  title: "Fastighetsguider Spanien | Nordic Move Spain",
  description:
    "Praktiska svenskspråkiga guider för att köpa fastighet i Spanien, med fokus på Costa Blanca North, kostnader, områden, uthyrningsregler, juridiska frågor, husdjur och områdesjämförelser.",
};

const mainGuides = [
  {
    href: "/sv/guides/best-areas-costa-blanca-north-retirees",
    label: "Guide för pensionärer",
    title: "Bästa områdena på Costa Blanca North för pensionärer",
    text:
      "En praktisk guide för svenska, norska, danska, nederländska, tyska, schweiziska och andra internationella köpare som jämför Dénia, Moraira, Jávea, Altea, Benissa och Calpe.",
    details:
      "Jämför tillgång till vård, service året runt, mobilitet, lugn, underhåll, gemenskapsliv, turismtryck och praktisk lämplighet på lång sikt.",
    bestFor:
      "Idealisk för äldre köpare som vill förstå vilket område på Costa Blanca North som passar deras pensionärsliv innan de köper.",
    cta: "Läs pensionärsguiden →",
  },
  {
    href: "/sv/guides/where-to-buy-property-costa-blanca-north",
    label: "Områdesguide",
    title: "Var ska man köpa fastighet på Costa Blanca North?",
    text:
      "Att välja rätt område är ofta viktigare än att välja den första vackra bostaden. Den här guiden jämför de viktigaste orterna på Costa Blanca North innan du börjar gå på visningar.",
    details:
      "Jämför Moraira, Jávea, Altea, Benissa, Calpe och Dénia utifrån livsstil, bostadstyp, vardagsservice, atmosfär utanför högsäsong och köparprofil.",
    bestFor:
      "Idealisk för köpare som fortfarande avgör vilken ort eller kustregion som verkligen passar deras framtida liv i Spanien.",
    cta: "Läs områdesguiden →",
  },
  {
    href: "/sv/guides/costs-rentals-real-life-checks-before-buying",
    label: "Ärlig köpguide",
    title: "Kostnader, uthyrning och praktiska kontroller före köp",
    text:
      "En vacker bostad kan fortfarande vara fel köp om praktiska detaljer förbises. Den här guiden förklarar vad köpare ofta upptäcker för sent.",
    details:
      "Lär dig mer om dolda kostnader, regler för turistuthyrning, elmaster, trafikbuller, sommartryck, community-regler, ägandekostnader och vad du bör kontrollera innan du lägger ett bud.",
    bestFor:
      "Idealisk för svenska och andra internationella köpare som vill få en realistisk bild innan de binder sig till en bostad.",
    cta: "Läs den ärliga guiden →",
  },
];

const moreGuides = [
  {
    href: "/sv/guides/moraira-vs-javea",
    label: "Områdesjämförelse",
    title: "Moraira vs Jávea",
    text:
      "En praktisk jämförelse för köpare som väljer mellan två av de mest eftertraktade områdena på Costa Blanca North.",
    useful:
      "Användbar när du tvekar mellan lugnt villaliv i Moraira och ett mer aktivt internationellt liv i Jávea.",
  },
  {
    href: "/sv/guides/buying-property-spain",
    label: "Köpa i Spanien",
    title: "Köpa fastighet i Spanien",
    text:
      "En praktisk genomgång av den spanska köpprocessen, inklusive juridiska kontroller, handpenning, notarieförfarande, bolån, köpkostnader och vad internationella köpare bör förbereda innan de skriver under.",
    useful:
      "Användbar när du står i början av din köpresa och vill förstå hela processen.",
  },
  {
    href: "/sv/guides/common-mistakes-buying-property-spain",
    label: "Köparmisstag",
    title: "Vanliga misstag när du köper fastighet",
    text:
      "Lär dig vilka misstag köpare i Spanien ofta gör, från att välja fel område till att missa community-regler, juridiska kontroller, ägandekostnader och praktiska vardagsfrågor.",
    useful:
      "Användbar när du vill undvika känslomässiga beslut och dyra överraskningar.",
  },
  {
    href: "/sv/guides/homeowners-associations-spain",
    label: "Community-regler",
    title: "Ägarföreningar i Spanien",
    text:
      "Förstå reglerna i comunidad de propietarios, gemensamma avgifter, protokoll från möten, uthyrningsbegränsningar, gemensamt underhåll, ägarens skyldigheter och varför dessa kontroller är viktiga före köp.",
    useful:
      "Användbar när du överväger en lägenhet, ett radhus eller en bostad i en urbanisation.",
  },
  {
    href: "/sv/guides/swedish-tax-rules-second-home-spain",
    label: "Svenska skatteregler",
    title: "Svenska skatteregler för en andra bostad i Spanien",
    text:
      "En guide för svenska invånare som köper en andra bostad i Spanien, inklusive svenska skattefrågor, spanska fastighetsskatter, hyresinkomster och gränsöverskridande ägandefrågor.",
    useful:
      "Användbar för svenska köpare som vill förstå skattefrågor innan de köper utomlands.",
  },
  {
    href: "/sv/guides/spanish-rules-sweden",
    label: "Spanska regler",
    title: "Spanska regler som fungerar annorlunda än i Sverige",
    text:
      "En praktisk guide för svenska köpare om skillnader mellan det svenska och spanska systemet, inklusive notarien, Registro de la Propiedad, Catastro, community-regler, turistuthyrning, renoveringar och skatt.",
    useful:
      "Användbar när du vill undvika att köpa i Spanien utifrån svenska antaganden.",
  },
  {
    href: "/sv/guides/pets-in-spain",
    label: "Bo med husdjur",
    title: "Husdjur i Spanien: allt du behöver veta",
    text:
      "En guide för svenska köpare och bostadsägare om husdjur i Spanien, inklusive resor med hund eller katt, regler i communities, veterinärer, försäkringar, stränder, hyresbostäder och vardagsliv på Costa Blanca.",
    useful:
      "Användbar när din hund eller katt flyttar med till Spanien eller när du vill veta vilka regler som gäller i lägenheter, urbanisationer och offentliga miljöer.",
  },
];

export default function SvenskaFastighetsGuiderPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      {/* HERO */}
      <section className="bg-[#1e2a3a] px-8 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Köpa fastighet i Spanien
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Praktisk vägledning innan du köper fastighet i Spanien.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Ärliga, praktiska och områdesfokuserade guider för svenska och
            andra internationella köpare som överväger Costa Blanca North.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/sv/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Gör din Area Match
            </a>

            <a
              href="/sv/buyer-discovery-trip"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Upptäck Buyer Discovery Trip
            </a>

            <a
              href="#guides"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-[#1e2a3a]"
            >
              Läs innan du köper
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Börja med rätt information
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Rätt fastighetsbeslut börjar med tydlig insikt.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              Att köpa fastighet i Spanien är spännande, men det bör inte börja
              med slumpmässiga visningar eller enbart vackra bilder.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Innan du fattar ett beslut är det viktigt att förstå området,
              juridiska kontroller, ägandekostnader, uthyrningsregler,
              community-begränsningar och praktiska vardagsdetaljer.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Dessa guider hjälper dig att jämföra Costa Blanca North med större
              klarhet innan du bestämmer dig för en plats, bostadssökning eller
              köpresa.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN GUIDES */}
      <section id="guides" className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Börja här
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Våra viktigaste guider för seriösa köpare.
              </h2>
            </div>

            <a
              href="/sv/contact"
              className="rounded-full border border-[#1e2a3a] px-7 py-3 text-sm font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
            >
              Behöver du personlig rådgivning?
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {mainGuides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="group rounded-[34px] bg-white p-9 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                  {guide.label}
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  {guide.title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">
                  {guide.text}
                </p>

                <p className="mt-5 leading-relaxed text-stone-600">
                  {guide.details}
                </p>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {guide.bestFor}
                </p>

                <span className="mt-9 inline-block text-sm uppercase tracking-[0.2em] text-[#1e2a3a]">
                  {guide.cta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MORE GUIDES */}
      <section className="bg-[#e9dfd2] px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b743d]">
              Fler köparguider
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Juridiska, ekonomiska och praktiska ämnen.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {moreGuides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="group rounded-[30px] bg-[#f6f1ea] p-8 transition hover:-translate-y-1 hover:bg-white"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#9b743d]">
                  {guide.label}
                </p>

                <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                  {guide.title}
                </h3>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {guide.text}
                </p>

                <p className="mt-5 leading-relaxed text-stone-700">
                  {guide.useful}
                </p>

                <span className="mt-8 inline-block text-sm uppercase tracking-[0.2em] text-[#1e2a3a]">
                  Läs guiden →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#1e2a3a] p-12 text-center text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Behöver du personlig vägledning?
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight">
            Vet du ännu inte vilket område eller vilken bostadstyp som passar
            ditt framtida liv i Spanien?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Vår Area Match Assessment hjälper dig att jämföra platser på Costa
            Blanca North utifrån livsstil, budget, service, långsiktiga planer
            och praktiska behov.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/sv/relocation-assessment"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Gör din Area Match
            </a>

            <a
              href="/sv/contact"
              className="rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Boka ett första samtal
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}