export default function VerenigingEigenarenSpanjePage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900 overflow-hidden">

      {/* HERO */}
      <section className="relative flex min-h-[75vh] items-center overflow-hidden px-8 py-32">

        <img
          src="/images/practical-guidance.png"
          alt="Vereniging van Eigenaren Spanje"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 mx-auto max-w-6xl text-white">

          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            Costa Blanca Noord
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            Vereniging van Eigenaren in Spanje – wat kopers moeten weten.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            Waarom gemeenschapsregels, kosten en vergaderingen belangrijk zijn bij vastgoed aan de Costa Blanca Noord.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="px-8 py-24">

        <div className="mx-auto max-w-5xl">

          <h2 className="font-serif text-5xl leading-tight">
            Veel internationale kopers onderschatten de invloed van de Vereniging van Eigenaren.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            In Spanje behoren veel appartementen, urbanisaties en sommige villa’s tot een gemeenschap van eigenaren. Deze gemeenschap bepaalt vaak belangrijke regels die direct invloed hebben op dagelijks wonen, verhuur en toekomstige kosten.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Daarom is het belangrijk om vóór aankoop niet alleen de woning zelf te beoordelen, maar ook de financiële en praktische situatie van de gemeenschap zorgvuldig te onderzoeken.
          </p>

        </div>

      </section>

      {/* COMMUNITY RULES */}
      <section className="px-8 pb-24">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">

          <div className="rounded-[32px] bg-white p-10 shadow-sm">

            <h3 className="font-serif text-3xl">
              Gemeenschapsregels
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Sommige urbanisaties beperken vakantieverhuur, huisdieren, verbouwingen, BBQ’s of het gebruik van gemeenschappelijke ruimtes.
            </p>

          </div>

          <div className="rounded-[32px] bg-white p-10 shadow-sm">

            <h3 className="font-serif text-3xl">
              Gemeenschapskosten
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Luxe residenties met zwembaden, beveiliging, spa’s of uitgebreide tuinen hebben vaak hogere maandelijkse kosten dan kopers verwachten.
            </p>

          </div>

          <div className="rounded-[32px] bg-white p-10 shadow-sm">

            <h3 className="font-serif text-3xl">
              Toekomstige investeringen
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Grote renovaties of onderhoudswerken kunnen leiden tot extra bijdragen van eigenaren binnen de gemeenschap.
            </p>

          </div>

        </div>

      </section>

      {/* MEETINGS */}
      <section className="px-8 pb-24">

        <div className="mx-auto max-w-6xl rounded-[36px] bg-white p-12 shadow-sm">

          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Vergaderingen & documentatie
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Waarom notulen en documenten belangrijk zijn.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-600">

            <p>
              Vraag altijd naar de notulen van eerdere vergaderingen van de Vereniging van Eigenaren. Deze documenten geven vaak belangrijke informatie over toekomstige plannen, financiële problemen of conflicten binnen het complex.
            </p>

            <p>
              Hieruit blijkt bijvoorbeeld of er renovaties gepland staan, of er juridische conflicten lopen of dat eigenaren achterlopen met betalingen.
            </p>

            <p>
              Veel kopers ontdekken pas na aankoop dat grote onderhoudswerken of extra bijdragen al langere tijd besproken werden binnen de gemeenschap.
            </p>

          </div>

        </div>

      </section>

      {/* KOSTEN VOORBEELD */}
      <section className="px-8 pb-24">

        <div className="mx-auto max-w-6xl rounded-[36px] bg-[#efe7dc] p-12">

          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Praktisch kostenvoorbeeld
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Wat betekent dit financieel bij een woning van €700.000?
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-700">

            <p>
              Veel internationale kopers kijken vooral naar de aankoopprijs van de woning, maar onderschatten bijkomende kosten en toekomstige verplichtingen binnen een gemeenschap.
            </p>

            <div className="mt-10 rounded-[28px] bg-white p-10 shadow-sm">

              <div className="space-y-5 text-lg leading-relaxed text-stone-700">

                <p>
                  Aankoopprijs woning: <strong>€700.000</strong>
                </p>

                <p>
                  Overdrachtsbelasting Valencia regio (10%): <strong>€70.000</strong>
                </p>

                <p>
                  Advocaatkosten (ongeveer 1%): <strong>€7.000</strong>
                </p>

                <p>
                  Notaris- en registratiekosten: <strong>€2.500 – €4.000</strong>
                </p>

                <p>
                  Administratie, vertalingen en overige kosten: <strong>€1.500 – €3.000</strong>
                </p>

                <p>
                  Gemiddelde gemeenschapskosten luxe urbanisatie: <strong>€200 – €600 per maand</strong>
                </p>

                <div className="mt-8 border-t border-stone-300 pt-6">

                  <p className="text-2xl font-semibold">
                    Totale investering bij aankoop: ongeveer €785.000
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* RENTALS */}
      <section className="px-8 pb-24">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <img
            src="/images/discovery2.png"
            alt="Vakantieverhuur Spanje"
            className="h-[560px] w-full rounded-[32px] object-cover shadow-xl"
          />

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Verhuur & beperkingen
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Niet elke gemeenschap staat vakantieverhuur toe.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Veel internationale kopers willen hun woning gedeeltelijk verhuren. In sommige urbanisaties gelden echter beperkingen rondom korte termijn verhuur of toeristische licenties.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Zeker aan de Costa Blanca Noord zijn regels rondom toeristische verhuur de afgelopen jaren strenger geworden.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Controleer daarom altijd vooraf welke regels gelden binnen de gemeenschap en bij de gemeente.
            </p>

          </div>

        </div>

      </section>

      {/* LEGAL */}
      <section className="px-8 pb-24">

        <div className="mx-auto max-w-6xl rounded-[36px] bg-[#efe7dc] p-12">

          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Juridische controle
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Onafhankelijke begeleiding blijft belangrijk.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-700">

            <p>
              Een onafhankelijke advocaat kan helpen bij het controleren van gemeenschapsdocumenten, schulden, vergunningen en juridische verplichtingen.
            </p>

            <p>
              Zeker bij appartementen of luxe urbanisaties is het verstandig om de financiële gezondheid van de gemeenschap zorgvuldig te laten onderzoeken.
            </p>

            <p>
              Goede voorbereiding voorkomt onverwachte kosten en juridische problemen na aankoop.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-8 pb-32">

        <div className="mx-auto max-w-5xl rounded-[36px] bg-stone-900 p-14 text-center text-white">

          <p className="text-sm uppercase tracking-[0.35em] text-white/60">
            Persoonlijke begeleiding
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            Wilt u vastgoed kopen aan de Costa Blanca Noord?
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-white/80">
            Nordic Move Spain helpt internationale kopers met lokale begeleiding, betrouwbare contacten en praktische ondersteuning tijdens het aankoopproces in Spanje.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-stone-900"
          >
            Persoonlijk gesprek plannen
          </a>

        </div>

      </section>

    </main>
  );
}