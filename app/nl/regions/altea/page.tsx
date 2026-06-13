import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wonen in Altea | Huis kopen aan de Costa Blanca Noord",
  description:
    "Ontdek of Altea bij je past. Lees meer over wonen, woningtypes, wijken, stranden en voorzieningen in Altea.",
  alternates: {
    canonical: "/nl/regions/altea",
    languages: {
      en: "/regions/altea",
      nl: "/nl/regions/altea",
      "x-default": "/regions/altea",
    },
  },
};

const lifestylePoints = [
  "Elegante kustplaats met een wit historisch centrum",
  "Mediterrane sfeer, restaurants, kunst en zeezicht",
  "Rustiger en verfijnder van karakter dan Calpe",
  "Praktisch gelegen bij Albir, Benidorm en Calpe",
  "Geschikt voor kopers die schoonheid en rust zoeken",
  "Vooral aantrekkelijk als sfeer belangrijker is dan een zandstrand",
];

const buyerProfiles = [
  {
    title: "Kopers die sfeer zoeken",
    text: "Altea past bij kopers die een rustige kustplaats met karakter, restaurants, kunst, historische straatjes en mooie uitzichten zoeken.",
  },
  {
    title: "Gepensioneerden",
    text: "De combinatie van rust, voorzieningen, restaurants en wandelmogelijkheden maakt Altea aantrekkelijk voor veel gepensioneerden.",
  },
  {
    title: "Kopers die zeezicht zoeken",
    text: "Altea en de omliggende heuvelgebieden bieden veel mogelijkheden voor woningen met zeezicht, licht en privacy.",
  },
  {
    title: "Internationale kopers",
    text: "Altea heeft een internationale gemeenschap en past bij kopers die rustig maar stijlvol aan de Costa Blanca Noord willen wonen.",
  },
];

const zones = [
  {
    title: "Het oude centrum",
    text: "Het oude centrum staat bekend om witte straatjes, trappen, uitzichtpunten, galeries, restaurants en de kerk met blauwe koepels.",
  },
  {
    title: "De boulevard",
    text: "Aan de boulevard vind je restaurants, cafés, winkels en wandelmogelijkheden direct aan zee.",
  },
  {
    title: "Altea Hills",
    text: "Een exclusieve heuvelzone met villa’s, appartementen, beveiligde wooncomplexen en veel zeezicht.",
  },
  {
    title: "Mascarat",
    text: "Mascarat ligt richting Calpe en biedt appartementen, villa’s, een jachthaven en een indrukwekkende kustlijn.",
  },
  {
    title: "Altea la Vella",
    text: "Altea la Vella ligt iets landinwaarts en biedt een rustiger en dorpser woongevoel.",
  },
  {
    title: "Cap Negret",
    text: "Cap Negret ligt dicht bij zee en biedt stranden, wandelroutes, appartementen en woningen met uitzicht.",
  },
];

const propertyTypes = [
  {
    title: "Villa’s met zeezicht",
    text: "Populair in Altea Hills, Mascarat en andere heuvelgebieden. Let op bereikbaarheid, onderhoud en steile wegen.",
  },
  {
    title: "Appartementen aan de kust",
    text: "Geschikt voor kopers die weinig onderhoud willen en dichtbij zee, restaurants en de boulevard willen wonen.",
  },
  {
    title: "Woningen in het oude centrum",
    text: "Interessant voor kopers die sfeer en beloopbaarheid belangrijk vinden. Parkeren en trappen kunnen aandachtspunten zijn.",
  },
  {
    title: "Woningen landinwaarts",
    text: "Rond Altea la Vella vind je vaak meer rust en ruimte, terwijl voorzieningen goed bereikbaar blijven.",
  },
];

const confidenceChecks = [
  {
    title: "Trappen en parkeren",
    text: "In het oude centrum zijn smalle straten, trappen en beperkte parkeermogelijkheden belangrijke aandachtspunten.",
  },
  {
    title: "Kiezelstranden",
    text: "Altea heeft vooral kiezel- en rotsstranden. Voor brede zandstranden kan Calpe beter passen.",
  },
  {
    title: "Hellingen en autorijden",
    text: "In Altea Hills en Mascarat heb je voor dagelijkse activiteiten meestal een auto nodig.",
  },
  {
    title: "Gemeenschappelijke kosten",
    text: "Controleer bij appartementen altijd de maandelijkse kosten, regels, liften en het onderhoud van het gebouw.",
  },
  {
    title: "Bereikbaarheid",
    text: "Een woning met prachtig uitzicht kan minder praktisch zijn door steile wegen en langere autoritten.",
  },
  {
    title: "Je levensstijl",
    text: "Altea past vooral bij mensen die rust, restaurants, cultuur en sfeer belangrijk vinden.",
  },
];

const guides = [
  {
    href: "/nl/guides/beste-gebieden-costa-blanca-noord-gepensioneerden",
    title: "Beste gebieden voor gepensioneerden",
    text: "Vergelijk Altea met Moraira, Jávea, Dénia, Benissa en Calpe.",
  },
  {
    href: "/nl/guides/waar-huis-kopen-costa-blanca-noord",
    title: "Waar een huis kopen?",
    text: "Ontdek welke plaats aan de Costa Blanca Noord het beste bij je past.",
  },
  {
    href: "/nl/regions/calpe",
    title: "Altea of Calpe?",
    text: "Vergelijk de sfeer van Altea met de stranden en voorzieningen van Calpe.",
  },
];

const sources = [
  {
    label: "Visit Altea",
    href: "https://www.visitaltea.es/",
  },
  {
    label: "Comunitat Valenciana",
    href: "https://www.comunitatvalenciana.com/en/alacant-alicante/altea",
  },
  {
    label: "Natuurpark Serra Gelada",
    href: "https://parquesnaturales.gva.es/en/web/pn-serra-gelada",
  },
];

export default function AlteaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1ea] text-stone-900">
      {/* Navigatie */}
      <nav className="absolute left-0 top-0 z-50 w-full px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/nl"
            className="text-sm font-medium uppercase tracking-[0.25em] text-white"
          >
            Nordic Move Spain
          </a>

          <div className="hidden gap-7 text-sm md:flex">
            <a href="/nl" className="text-white hover:text-white/70">
              Home
            </a>

            <a
              href="/nl/regions"
              className="border-b border-[#c8a063] pb-1 text-white"
            >
              Regio’s
            </a>

            <a
              href="/nl/services"
              className="text-white hover:text-white/70"
            >
              Diensten
            </a>

            <a href="/nl/guides" className="text-white hover:text-white/70">
              Gidsen
            </a>

            <a href="/nl/contact" className="text-white hover:text-white/70">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-28">
        <img
          src="/images/altea.jpg"
          alt="Uitzicht over Altea aan de Costa Blanca Noord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d7ad70]">
              Costa Blanca Noord
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-tight text-white md:text-7xl">
              Wonen in Altea
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/90">
              Een elegante kustplaats met een wit historisch centrum, zeezicht,
              restaurants, kunst en een rustige mediterrane sfeer.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/nl/services/area-match"
                className="rounded-full bg-[#c8a063] px-7 py-4 text-sm font-medium text-white hover:bg-[#b48a4f]"
              >
                Vraag je Area Match aan
              </a>

              <a
                href="/nl/regions/calpe"
                className="rounded-full border border-white px-7 py-4 text-sm text-white hover:bg-white hover:text-stone-900"
              >
                Vergelijk met Calpe
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introductie */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#b48645]">
              Waarom Altea?
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Een stijlvolle plaats met karakter en uitzicht.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Altea combineert een historische binnenstad, een kustboulevard,
              goede restaurants en rustige woongebieden. Iedere wijk heeft
              echter een andere uitstraling en praktische voor- en nadelen.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <ul className="space-y-5">
              {lifestylePoints.map((point) => (
                <li key={point} className="flex gap-4 text-stone-700">
                  <span className="text-[#c8a063]">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#b48645]">
            Voor wie is Altea geschikt?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl text-[#1e2a3a] md:text-5xl">
            Altea past niet bij iedere koper, maar wel bij mensen die sfeer
            waarderen.
          </h2>

          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {buyerProfiles.map((profile) => (
              <article
                key={profile.title}
                className="rounded-[30px] bg-white p-8 shadow-sm"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {profile.title}
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {profile.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Wijken */}
      <section className="bg-white/50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#b48645]">
            Gebieden in Altea
          </p>

          <h2 className="mt-5 font-serif text-4xl text-[#1e2a3a] md:text-5xl">
            Kies eerst de juiste omgeving.
          </h2>

          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {zones.map((zone) => (
              <article
                key={zone.title}
                className="rounded-[30px] bg-white p-8 shadow-sm"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {zone.title}
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {zone.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Woningtypes */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#b48645]">
            Woningtypes
          </p>

          <h2 className="mt-5 font-serif text-4xl text-[#1e2a3a] md:text-5xl">
            Wat kun je in Altea kopen?
          </h2>

          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {propertyTypes.map((property) => (
              <article
                key={property.title}
                className="rounded-[30px] bg-white p-8 shadow-sm"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {property.title}
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {property.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gepensioneerden */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[38px] bg-[#1e2a3a] p-9 text-white md:p-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d7ad70]">
            Geschikt voor gepensioneerden
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-4xl leading-tight md:text-5xl">
            Rust, restaurants en schoonheid, met enkele praktische
            aandachtspunten.
          </h2>

          <div className="mt-8 max-w-5xl space-y-5 text-lg leading-relaxed text-white/80">
            <p>
              Altea kan aantrekkelijk zijn voor gepensioneerden door de rustige
              uitstraling, boulevard, restaurants en voorzieningen in de
              omgeving.
            </p>

            <p>
              Het oude centrum heeft veel trappen en smalle straten. In de
              heuvelgebieden zijn een auto en goede mobiliteit vaak
              noodzakelijk.
            </p>

            <p>
              Kopers die vlakke wandelroutes en brede zandstranden zoeken,
              moeten Altea ook vergelijken met Calpe, Dénia of Jávea.
            </p>
          </div>
        </div>
      </section>

      {/* Controles */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#b48645]">
            Belangrijke controles
          </p>

          <h2 className="mt-5 font-serif text-4xl text-[#1e2a3a] md:text-5xl">
            Controleer dit voordat je een woning koopt.
          </h2>

          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {confidenceChecks.map((check) => (
              <article
                key={check.title}
                className="rounded-[30px] bg-white p-8 shadow-sm"
              >
                <h3 className="font-serif text-2xl text-[#1e2a3a]">
                  {check.title}
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {check.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gidsen */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#b48645]">
            Gerelateerde gidsen
          </p>

          <h2 className="mt-5 font-serif text-4xl text-[#1e2a3a] md:text-5xl">
            Vergelijk Altea met andere plaatsen.
          </h2>

          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {guides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="rounded-[30px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {guide.title}
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {guide.text}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[38px] bg-[#1e2a3a] p-10 text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d7ad70]">
            Past Altea bij jou?
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-4xl leading-tight md:text-6xl">
            Vergelijk je levensstijl voordat je een woning kiest.
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-relaxed text-white/80">
            Met onze Area Match vergelijken we Altea met andere plaatsen aan de
            Costa Blanca Noord op basis van je budget, wensen en plannen.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/nl/services/area-match"
              className="rounded-full bg-[#c8a063] px-7 py-4 text-sm font-medium text-white hover:bg-[#b48a4f]"
            >
              Vraag je Area Match aan
            </a>

            <a
              href="/nl/contact"
              className="rounded-full border border-white px-7 py-4 text-sm text-white hover:bg-white hover:text-stone-900"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </section>

      {/* Bronnen */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl rounded-[30px] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-[#b48645]">
            Officiële bronnen
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {sources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#f6f1ea] p-5 font-medium text-[#1e2a3a] hover:bg-[#efe6d9]"
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