export const metadata = {
  title: "Beveiligde klantenportal | Nordic Move Spain",
  description:
    "Een beveiligde digitale klantenportal met tweestapsverificatie voor aankoopdocumenten, rapporten, deadlines en vervolgstappen bij het kopen van een woning in Spanje.",
  openGraph: {
    title: "Beveiligde klantenportal | Nordic Move Spain",
    description:
      "Geen aankoopdocumenten via WhatsApp of onbeveiligde e-mail. Belangrijke documenten, rapporten en vervolgstappen centraal en overzichtelijk op één plek.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beveiligde klantenportal | Nordic Move Spain",
    description:
      "Uw aankoopdossier centraal, overzichtelijk en beter beschermd tijdens het kopen van een woning in Spanje.",
  },
};

export default function BeveiligdeKlantenportalPage() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative flex min-h-[82vh] items-center overflow-hidden">
        <img
          src="/images/soft-landing-card.png"
          alt="Beveiligde klantenportal voor aankoopdocumenten in Spanje"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Beveiligde klantenportal
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[1] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-7xl">
              Uw aankoopdocumenten centraal, overzichtelijk en beter beschermd.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/90">
              Geen aankoopdocumenten via losse WhatsApp-berichten,
              screenshots of onbeveiligde e-mail. Belangrijke documenten,
              rapporten, deadlines en vervolgstappen worden samengebracht in
              één beveiligde digitale omgeving met tweestapsverificatie.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/nl/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Plan een persoonlijke kennismaking
              </a>

              <a
                href="/nl/services/purchase-safety-report"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Ontdek het Purchase Safety Report
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Minder losse berichten
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Meer overzicht tijdens een belangrijk aankoopproces.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone-600">
              Bij het kopen van een woning in Spanje worden veel documenten,
              rapporten en berichten gedeeld. In de praktijk gebeurt dat nog
              vaak via losse e-mails, WhatsApp-berichten, screenshots en
              doorgestuurde pdf’s.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Dat kan snel onoverzichtelijk worden, zeker wanneer meerdere
              partijen betrokken zijn, zoals een makelaar, advocaat, gestor,
              technisch specialist, bank, verzekeraar of notaris.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Nordic Move Spain werkt daarom met een beveiligde digitale
              klantenportal met tweestapsverificatie. In deze omgeving worden
              belangrijke aankoopdocumenten, rapporten, deadlines, openstaande
              vragen, verantwoordelijkheden en vervolgstappen centraal
              samengebracht.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Zo heeft u één overzichtelijke plek voor uw aankoopdossier. U
              ziet welke documenten beschikbaar zijn, welke punten nog moeten
              worden opgevolgd en welke professionals betrokken zijn bij het
              proces.
            </p>
          </div>
        </div>
      </section>

      {/* WAT WORDT SAMENGEBRACHT */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Wat kan centraal staan?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Eén plek voor belangrijke aankoopinformatie.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Eigendomsinformatie",
              "Nota Simple",
              "Kadastrale gegevens",
              "Geregistreerde oppervlaktes",
              "Technische rapporten",
              "Bouwkundige bevindingen",
              "Juridische aandachtspunten",
              "Community-documenten",
              "Kostenoverzichten",
              "Openstaande vragen",
              "Deadlines",
              "Praktische vervolgstappen",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-stone-200 bg-[#f6f1ea] p-6"
              >
                <p className="font-serif text-2xl text-[#1e2a3a]">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
            Ook afspraken, deadlines en verantwoordelijkheden kunnen
            overzichtelijk worden vastgelegd, zodat u tijdens het aankoopproces
            beter begrijpt wat al geregeld is en wat nog aandacht nodig heeft.
          </p>
        </div>
      </section>

      {/* WAAROM BELANGRIJK */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="rounded-[36px] bg-[#1e2a3a] p-10 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
              Waarom dit belangrijk is
            </p>

            <h3 className="mt-5 font-serif text-4xl leading-tight">
              Informatie raakt snel verspreid.
            </h3>

            <p className="mt-6 leading-relaxed text-white/75">
              Een woning kopen in Spanje is voor internationale kopers vaak een
              proces met veel informatie tegelijk. Wanneer documenten en
              afspraken verspreid raken over WhatsApp, e-mail en losse pdf’s,
              wordt het lastiger om overzicht te houden.
            </p>
          </div>

          <div className="rounded-[36px] bg-white p-10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
              Structuur
            </p>

            <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
              Eén centrale plek.
            </h3>

            <p className="mt-6 leading-relaxed text-stone-600">
              Een beveiligde klantenportal zorgt voor meer structuur.
              Belangrijke informatie staat niet verspreid over verschillende
              kanalen, maar centraal op één plek. Dat maakt het aankoopproces
              rustiger, duidelijker en professioneler.
            </p>
          </div>

          <div className="rounded-[36px] bg-white p-10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
              Toegang
            </p>

            <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
              Zorgvuldig beheerd.
            </h3>

            <p className="mt-6 leading-relaxed text-stone-600">
              Toegang tot de klantenportal wordt zorgvuldig beheerd. Alleen de
              juiste personen krijgen toegang tot de relevante informatie. Zo
              kunnen cliënten en betrokken professionals samenwerken binnen één
              georganiseerde omgeving.
            </p>
          </div>
        </div>
      </section>

      {/* BELANGRIJKE NUANCE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Belangrijk om te weten
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            De portal brengt informatie samen. De specialisten blijven
            verantwoordelijk voor hun eigen advies.
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-relaxed text-stone-700">
            De klantenportal vervangt niet het inhoudelijke advies van een
            advocaat, gestor, notaris, technisch specialist of bouwkundige
            expert. Iedere professional blijft verantwoordelijk voor zijn of
            haar eigen beoordeling en advies.
          </p>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-stone-700">
            De portal helpt wel om hun bevindingen, documenten en vervolgstappen
            overzichtelijk samen te brengen. Zo houdt u beter zicht op het
            proces, de betrokken partijen en de stappen die nodig zijn voordat u
            verdergaat.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Minder losse berichten. Meer overzicht. Meer rust.
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Uw aankoopdossier centraal. Uw vervolgstappen overzichtelijk.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Tijdens een persoonlijke kennismaking leggen wij uit hoe de
            beveiligde klantenportal onderdeel kan zijn van uw Area Match,
            Buyer Discovery Experience of Purchase Safety Report.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/nl/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Plan een persoonlijke kennismaking
            </a>

            <a
              href="/nl/services"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
            >
              Bekijk onze diensten
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}