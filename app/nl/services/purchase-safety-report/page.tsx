export const metadata = {
  title: "Purchase Safety Report | Veilig een woning kopen aan de Costa Blanca Noord",
  description:
    "Een gestructureerd aankooprisico-overzicht voor kopers die een woning aan de Costa Blanca Noord vóór aankoop juridisch, technisch en praktisch willen laten beoordelen door onafhankelijke professionals.",
  openGraph: {
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Koop niet alleen op gevoel. Laat een woning aan de Costa Blanca Noord vóór aankoop beoordelen door onafhankelijke professionals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purchase Safety Report | Nordic Move Spain",
    description:
      "Een gestructureerd aankooprisico-overzicht met bevindingen van onafhankelijke professionals vóór u koopt in Spanje.",
  },
};

export default function PurchaseSafetyReportPage() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVIGATIE */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/15 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/nl"
            className="text-sm uppercase tracking-[0.25em] text-white"
          >
            Nordic Move Spain
          </a>

          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/nl" className="hover:text-white/70 transition">
              Startpagina
            </a>

            <a href="/nl/regions" className="hover:text-white/70 transition">
              Regio’s
            </a>

            <a href="/nl/services" className="border-b border-[#c8a063] pb-1">
              Diensten
            </a>

            <a href="/nl/guides" className="hover:text-white/70 transition">
              Gidsen
            </a>

            <a href="/nl/about-us" className="hover:text-white/70 transition">
              Over ons
            </a>

            <a href="/nl/contact" className="hover:text-white/70 transition">
              Contact
            </a>
          </div>

          <a
            href="/nl/contact"
            className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Plan een kennismaking
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img
          src="/images/legal.png"
          alt="Purchase Safety Report voor het kopen van een woning aan de Costa Blanca Noord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Veilig kopen in Spanje
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[1] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-7xl">
              Purchase Safety Report
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white">
              Een gestructureerd aankooprisico-overzicht voor kopers die een
              woning aan de Costa Blanca Noord niet alleen op gevoel willen kopen,
              maar met bevindingen van onafhankelijke professionals en duidelijke
              juridische, technische en praktische aandachtspunten.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/nl/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Vraag een persoonlijke kennismaking aan
              </a>

              <a
                href="/nl/services"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Terug naar diensten
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTIE */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Eerst controleren, dan beslissen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Een mooie woning is niet automatisch een veilige aankoop.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              Veel internationale kopers richten zich tijdens een bezichtiging op
              uitzicht, ruimte, sfeer en locatie. Dat is logisch. Maar de echte
              risico’s zitten vaak achter de schermen: documenten die niet
              compleet zijn, een uitbouw die niet goed geregistreerd is,
              afwijkende perceelgrenzen, technische gebreken, vochtproblemen,
              septic tanks, community-regels of onverwachte kosten.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Het Purchase Safety Report helpt u om deze punten vóór aankoop
              beter in beeld te krijgen. Wij coördineren het aankooponderzoek met
              onafhankelijke professionals en brengen hun bevindingen samen in
              een helder overzicht. Zo kunt u bepalen of u met vertrouwen verder
              kunt, opnieuw moet onderhandelen of beter afstand kunt nemen van de
              woning.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Onze rol is niet om juridisch, fiscaal of technisch advies te
              vervangen. Onze rol is om de juiste specialisten aan tafel te
              brengen, het proces te structureren en de belangrijkste
              aandachtspunten begrijpelijk te maken voor internationale kopers.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIALISTEN */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Onafhankelijke professionals
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Deskundige controles voor één duidelijk aankoopbeeld.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Afhankelijk van de woning en de situatie werken wij met een
              onafhankelijke advocaat, notaris, gestor en technisch bouwkundig
              specialist. Ieder kijkt vanuit zijn eigen expertise naar de woning
              en het aankoopproces.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Juridische controle
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Onafhankelijke advocaat
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                De advocaat beoordeelt de juridische kant van de aankoop. Denk
                aan eigendom, Nota Simple, eventuele lasten, openstaande schulden,
                koopcontracten, vergunningen, geregistreerde gegevens en
                juridische risico’s die vóór ondertekening duidelijk moeten zijn.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                De advocaat werkt onafhankelijk en is verantwoordelijk voor zijn
                of haar eigen juridische beoordeling. Zo weet u welke juridische
                aandachtspunten eerst opgelost of verder onderzocht moeten worden.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Akte en overdracht
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Notaris en gestor
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                De notaris speelt een belangrijke rol bij de formele overdracht.
                De notaris controleert de identiteit van partijen, begeleidt de
                ondertekening van de eigendomsakte en zorgt dat de overdracht
                volgens de juiste procedure wordt vastgelegd.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Een gestor of administratief specialist kan daarnaast helpen met
                praktische en administratieve controles, zoals kadastergegevens,
                perceelinformatie, registraties, belastingen, lokale procedures
                en opvolging na de aankoop.
              </p>
            </div>

            <div className="rounded-[36px] bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                Technische controle
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                Bouwkundig ingenieur
              </h3>

              <p className="mt-6 text-base leading-relaxed text-stone-600">
                De technisch specialist of bouwkundig ingenieur kijkt naar de
                zichtbare staat van de woning. Denk aan vocht, scheuren, dak,
                installaties, leidingen, elektriciteit, zwembad, septic tank,
                onderhoudsrisico’s en mogelijke renovatiepunten.
              </p>

              <p className="mt-5 text-base leading-relaxed text-stone-500">
                Deze controle helpt om verborgen kosten beter in te schatten en
                voorkomt dat u pas na de aankoop ontdekt dat belangrijke
                technische onderdelen aandacht of investering nodig hebben.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WANNEER VERSTANDIG */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Wanneer is dit verstandig?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Vraag het Purchase Safety Report aan voordat u zich vastlegt.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            Het Purchase Safety Report is vooral waardevol wanneer u een woning
            serieus overweegt, maar vóór ondertekening duidelijkheid wilt over
            juridische, technische en praktische aandachtspunten.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Als u een woning serieus overweegt",
              "Als er uitbouwen, terrassen of bijgebouwen zijn",
              "Als de geregistreerde oppervlakte niet duidelijk is",
              "Als er vocht, scheuren, oudere installaties of renovatiepunten zijn",
              "Als er een septic tank, zwembad of groot perceel is",
              "Als de woning onderdeel is van een community",
              "Als u de woning wilt verhuren",
              "Als u vóór ondertekening meer zekerheid wilt over openstaande punten",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#c8a063]/25 bg-white/70 p-6"
              >
                <p className="text-base leading-relaxed text-stone-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAT WORDT GECONTROLEERD */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Wat kan het rapport bevatten?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Van documenten tot septic tank: de punten die kopers vaak te laat ontdekken.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Eigendom, Nota Simple en mogelijke lasten",
              "Koopcontracten, voorwaarden en juridische aandachtspunten",
              "Kadastergegevens, perceelgrenzen en geregistreerde oppervlakten",
              "Uitbouwen, bijgebouwen, terrassen en mogelijke vergunningen",
              "Vocht, scheuren, dak, zwembad en zichtbare onderhoudsrisico’s",
              "Septic tank, leidingen, elektriciteit en praktische infrastructuur",
              "Community-regels, kosten en mogelijke beperkingen",
              "Verhuurmogelijkheden en lokale aandachtspunten",
              "Jaarlijkse eigenaarskosten en praktische vervolgstappen",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#c8a063]/20 bg-[#f6f1ea] p-6"
              >
                <p className="text-base leading-relaxed text-stone-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UITKOMST EN BEVEILIGING */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Duidelijke conclusie
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Doorgaan, heronderhandelen of afstand nemen.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/80">
              Het doel van het Purchase Safety Report is niet om een aankoop
              ingewikkelder te maken. Het doel is om u rust en duidelijkheid te
              geven voordat u een grote financiële beslissing neemt.
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Groen</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  De woning lijkt geschikt om verder mee te gaan, mits de normale
                  aankoopstappen correct worden afgerond.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Oranje</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Er zijn aandachtspunten. Koop alleen onder voorwaarden, na
                  aanvullende controles of met aangepaste onderhandeling.
                </p>
              </div>

              <div className="rounded-[24px] bg-white/8 p-6">
                <h3 className="font-serif text-2xl text-white">Rood</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Er zijn serieuze risico’s waardoor afstand nemen van de woning
                  verstandig kan zijn.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Beveiligde omgeving
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Geen losse documenten via WhatsApp of onbeveiligde e-mail.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-700">
              Bij een aankoop in Spanje worden vaak belangrijke documenten en
              rapporten gedeeld: eigendomsinformatie, Nota Simple,
              kadastrale gegevens, koopdocumenten, technische rapporten,
              juridische aandachtspunten, community-documenten,
              kostenoverzichten en praktische vervolgstappen.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-700">
              Daarom werken wij met een beveiligde digitale omgeving waarin
              documenten, rapporten, verantwoordelijkheden, openstaande vragen en
              vervolgstappen overzichtelijk worden verzameld.
            </p>

            <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-700">
              <li>• Gecontroleerde toegang per klant en adviseur</li>
              <li>• Tweestapsverificatie voor extra beveiliging</li>
              <li>• Minder losse e-mails, screenshots en WhatsApp-berichten</li>
              <li>• Eén overzichtelijke plek voor belangrijke aankoopdocumenten</li>
              <li>• Duidelijke deadlines, versies en vervolgstappen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DISCOVERY TRIP */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid items-center lg:grid-cols-2">
            <div className="relative min-h-[520px]">
              <img
                src="/images/discovery2.png"
                alt="Buyer Discovery Trip aan de Costa Blanca Noord"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Onderdeel van uw aankoopreis
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Combineer het rapport met de Buyer Discovery Trip.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-stone-600">
                Tijdens onze Buyer Discovery Trip ervaart u niet alleen de
                regio’s, dorpen en woningen aan de Costa Blanca Noord. U ontmoet
                ook de professionals die u kunnen helpen om een weloverwogen
                aankoopbeslissing te nemen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Denk aan een advocaat, gestor, technisch specialist,
                hypotheek- of bankcontact, verzekeringspartner, property manager
                en andere betrouwbare lokale partijen.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Daarnaast kunnen wij u introduceren aan gelijkgestemde kopers en
                internationale bewoners die zich in dezelfde levensfase bevinden.
                Zo krijgt u niet alleen inzicht in de woning, maar ook in het
                dagelijks leven, de gemeenschap en de praktische realiteit van
                wonen in Spanje.
              </p>

              <a
                href="/nl/services/discovery-trips"
                className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
              >
                Ontdek de Buyer Discovery Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER / ROL */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-[#c8a063]/30 bg-white p-10 shadow-sm lg:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Belangrijk om te weten
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
            Wij coördineren. De specialisten beoordelen.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Nordic Move Spain vervangt geen advocaat, notaris, gestor,
            fiscalist, technisch specialist of bouwkundig ingenieur. Iedere
            professional is verantwoordelijk voor zijn of haar eigen beoordeling,
            rapportage en advies. Wij coördineren het proces, verzamelen de
            bevindingen en helpen u de belangrijkste aandachtspunten helder te
            begrijpen.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Het Purchase Safety Report is bedoeld om kopers beter te informeren
            vóór aankoop. Het is geen absolute garantie dat een woning volledig
            vrij is van risico’s of verborgen gebreken. Het helpt u wel om
            gestructureerd, kritischer en met meer vertrouwen te beslissen.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Koop met meer zekerheid
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Overweegt u een woning aan de Costa Blanca Noord?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Vraag een persoonlijke kennismaking aan en ontdek hoe het Purchase
            Safety Report u kan helpen om juridische, technische en praktische
            risico’s vóór aankoop beter te begrijpen.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/nl/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Plan een kennismaking
            </a>

            <a
              href="/nl"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Terug naar de website
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
