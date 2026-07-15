export const metadata = {
  title: "Calpe | Nordic Move Spain",
  description:
    "Upptäck Calpe på Costa Blanca Nord: strandnära boende, lägenheter, nyproduktion, skolor, livsstil och bostadsvägledning för internationella köpare.",
};

export default function CalpePage() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Calpe Costa Blanca Nord"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca Nord
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Calpe
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/90">
              Strandnära boende, moderna lägenheter, marinaliv och ikonisk
              utsikt över Peñón de Ifach.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/sv/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Diskutera Calpe med oss
              </a>

              <a
                href="/sv/regions"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Tillbaka till regioner
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Strandnära · Aktivt · Modernt
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Calpe passar köpare som vill ha bekvämlighet, havsutsikt och en
                mer aktiv kustlivsstil.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Calpe är en av de mest igenkännbara orterna på Costa Blanca
                Nord, känd för Peñón de Ifach, långa stränder, marinaliv,
                restauranger och en mer urban medelhavsatmosfär.
              </p>

              <p className="mt-6">
                Jämfört med Moraira, Benissa eller Altea känns Calpe mer
                energiskt och praktiskt. Här finns fler lägenheter, fler höga
                byggnader, fler strandnära alternativ och ett bredare utbud av
                moderna bostadsprojekt.
              </p>

              <p className="mt-6">
                Det gör Calpe attraktivt för köpare som vill ha enkel tillgång
                till strand, restauranger, butiker, service och områden som kan
                passa uthyrning, utan att vara alltför beroende av bil i
                vardagen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Befolkning
            </p>

            <h3 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
              Cirka 27 600
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Calpe är större och livligare än flera närliggande orter, med en
              mer internationell och urban kustkänsla.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Känt för
            </p>

            <h3 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
              Peñón de Ifach
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Den ikoniska klippan reser sig över staden och ger Calpe en av de
              mest igenkännbara silhuetterna på Costa Blanca.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
              Bostadsstil
            </p>

            <h3 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
              Lägenheter & nyproduktion
            </h3>

            <p className="mt-5 leading-relaxed text-stone-600">
              Calpe erbjuder fler lägenheter, moderna byggnader och strandnära
              bostadsalternativ än många lugnare grannorter.
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT FITS */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vem Calpe passar
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Calpe passar personer som vill ha en enkel, social och
            strandfokuserad livsstil.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Aktiva köpare
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Personer som vill ha restauranger, stränder, promenadstråk,
                sport, marinaliv och daglig aktivitet nära till hands.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Yngre familjer
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Familjer som vill ha praktisk service, skolor, strandtillgång
                och en livligare miljö än i mindre byar.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Lägenhetsköpare
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Köpare som söker moderna lägenheter, lock-up-and-leave-bostäder,
                havsutsikt eller nyare projekt nära kusten.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Uthyrningsinriktade ägare
              </h3>

              <p className="mt-4 leading-relaxed text-stone-600">
                Ägare som värdesätter synlighet, närhet till stranden,
                turistintresse och ett läge som är lätt för gäster att förstå.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Hur Calpe skiljer sig
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Calpe är mer urbant, mer synligt och mer lägenhetsdrivet än många
              närliggande områden.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Jämfört med Moraira
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Moraira känns lugnare, mindre och mer villafokuserat. Calpe är
                livligare, mer urbant och erbjuder fler lägenheter, höghus och
                strandnära aktivitet.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Jämfört med Jávea
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Jávea har flera tydliga livsstilszoner och en stark
                internationell gemenskap. Calpe känns mer kompakt kring stranden,
                strandpromenaden, centrum och Peñón.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Jämfört med Benissa
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Benissa är lugnare, mer lantligt och mer rymligt. Calpe är mer
                bekvämt, mer utvecklat och passar bättre för köpare som vill ha
                liv nära stranden och service.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-9 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">
                Jämfört med Altea
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Altea känns mer konstnärligt och förfinat. Calpe känns mer
                praktiskt, strandfokuserat och energiskt, med en bredare mix av
                turister, boende och lägenhetsägare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOLS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Skolor & familjeliv
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              En praktisk stad för familjer som vill ha skolor, service och
              kustliv nära varandra.
            </h2>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-stone-600">
              Calpe har flera lokala spanska utbildningsalternativ, inklusive
              förskole-, grundskole- och gymnasienivå. För internationella
              familjer finns det även privata och internationella skolalternativ
              i närliggande orter på Costa Blanca Nord inom köravstånd.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Lokala skolor
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  Lokala alternativ inkluderar CEIP Azorín, CEIP Gabriel Miró,
                  CEIP Mediterrani, CEIP Oltà, IES Ifach och IES Les Salines.
                </p>
              </div>

              <div className="rounded-[28px] bg-[#f6f1ea] p-7">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  Internationella alternativ
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  Familjer jämför ofta internationella skolor runt Benitachell,
                  Jávea, Moraira, Altea och det bredare Costa Blanca Nord-området.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-stone-500">
              Innan man väljer bostad bör familjer kontrollera skolvägar,
              antagningstider, språkstöd och om vardagslivet i Calpe passar
              barnets rytm.
            </p>
          </div>
        </div>
      </section>

      {/* PROPERTY */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Bostäder i Calpe
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight">
            Calpe är ett starkt alternativ när strandtillgång, lägenheter och
            bekvämlighet är viktigast.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-3xl">
                Strandnära lägenheter
              </h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Passar köpare som vill ha havsutsikt, tillgång till
                strandpromenaden, enkelt underhåll och stark semesterattraktion.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Nyproduktion
              </h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Calpe lockar ofta köpare som föredrar moderna planlösningar,
                hissar, terrasser, pooler, parkering och lättskött boende.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Villor & bostäder på sluttningar
              </h3>

              <p className="mt-4 leading-relaxed text-white/75">
                Utanför de mest livliga strandzonerna kan köpare även hitta
                villor och bostäder på sluttningar med utsikt mot havet och
                Peñón.
              </p>
            </div>
          </div>

          <a
            href="/sv/contact"
            className="mt-12 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Fråga om Calpe passar din profil
          </a>
        </div>
      </section>
    </main>
  );
}
