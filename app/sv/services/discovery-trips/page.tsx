export const metadata = {
  title:
    "Buyer Discovery Trip norra Costa Blanca | Köpa bostad i Spanien",
  description:
    "Delta i en noggrant sammansatt Buyer Discovery Trip på norra Costa Blanca för nederländska, belgiska, tyska, schweiziska, brittiska, skandinaviska och andra internationella köpare. Upptäck Moraira, Jávea, Altea, Benissa, Calpe och Dénia, träffa pålitliga professionella kontakter och upptäck med trygghet var du vill köpa i Spanien.",
};

export default function BuyerDiscoveryTripPage() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/discover-card.png"
          alt="Buyer Discovery Trip på norra Costa Blanca"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Buyer Discovery Trip norra Costa Blanca
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              En personligt sammansatt bostads- och livsstilsresa innan du köper
              hus i Spanien.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              Upptäck områdena, livsstilen, professionella kontakter och
              människor som kan bli en del av ditt framtida liv i Spanien —
              innan du fattar ett beslut om en bostad.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/sv/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Ansök om din Buyer Discovery Trip
              </a>

              <a
                href="/sv/regions"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Upptäck områdena
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUKTION */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Klarhet innan du bestämmer dig
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Att köpa bostad i Spanien bör inte börja med slumpmässiga
                visningar.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Innan du väljer en bostad behöver du förstå hur ett område
                faktiskt känns, vilken livsstil som hör till platsen, hur
                köpprocessen fungerar, vilka kostnader du kan förvänta dig och
                om vardagslivet i Spanien verkligen passar dig.
              </p>

              <p className="mt-6">
                Vår Buyer Discovery Trip är en noggrant sammansatt tredagars
                bostads- och livsstilsupplevelse på norra Costa Blanca. Resan är
                utvecklad för internationella köpare som först vill få klarhet
                innan de fattar ett seriöst fastighetsbeslut.
              </p>

              <p className="mt-6">
                Detta är ingen vanlig visningsresa. Det är en personlig
                introduktion till områdena, pålitliga professionella kontakter,
                den lokala livsstilen och den gemenskap som kan bli en del av
                ditt framtida liv i Spanien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FÖRST LÄR VI KÄNNA DIG */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Först lär vi känna dig
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Din resa börjar med din livsstil, inte med bostadsannonser.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Innan du anländer börjar vi med din kostnadsfria Area Match
                Report och ett kostnadsfritt personligt intake-samtal. Där går
                vi igenom dina mål, din budget, familjesituation, vardagsvanor,
                intressen, önskad livsstil, flyttplaner och långsiktiga
                prioriteringar.
              </p>

              <p className="mt-6">
                Först när vi förstår din profil ordentligt sätter vi samman ditt
                personliga program. På så sätt fokuserar vi på de områden som
                verkligen passar ditt liv, i stället för att slösa tid på
                platser som ser attraktiva ut online men som i praktiken inte
                matchar.
              </p>

              <p className="mt-6">
                Intaget hjälper oss också att avgöra vilka lokala
                professionella, internationella boende, entreprenörer eller andra
                köpare som kan vara relevanta för dig. Där det passar förbereder
                vi dessa introduktioner i förväg.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f6f1ea] p-8">
              <p className="text-lg leading-relaxed text-stone-700">
                Söker du en lugn villa nära Moraira? Ett mer socialt liv i
                Jávea? En elegant miljö vid Altea? Utrymme och autenticitet runt
                Benissa? Lägenheter vid havet och nyproduktion i Calpe? Eller
                snarare en livlig stad som är aktiv året runt, som Dénia?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIKASINNADE MÄNNISKOR */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Res med likasinnade människor
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Träffa människor som kanske överväger samma steg som du.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Beroende på dina önskemål kan Buyer Discovery Trip organiseras
              privat eller i en noggrant sammansatt liten grupp.
            </p>

            <p className="mt-6">
              När du deltar i en grupp för vi samman dig med köpare som befinner
              sig i en liknande livsfas eller har liknande mål. Vissa klienter
              väljer medvetet en internationell grupp. Andra föredrar att träffa
              köpare från samma land eller med samma språkbakgrund.
            </p>

            <p className="mt-6">
              Vi vägleder regelbundet nederländska, belgiska, tyska,
              schweiziska, brittiska, skandinaviska och andra internationella
              köpare som undersöker en framtid på norra Costa Blanca.
            </p>

            <p className="mt-6">
              För många klienter blir just dessa möten en särskilt värdefull del
              av resan. En gemensam lunch, delad upplevelse eller ett öppet
              samtal kan bli början på framtida vänskaper, värdefulla kontakter
              och en starkare känsla av samhörighet, redan innan du faktiskt
              flyttar till Spanien.
            </p>
          </div>
        </div>
      </section>

      {/* ANKOMST */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Från din ankomst är allt ordnat
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight">
            Du anländer, vi tar hand om detaljerna.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-3xl">Flygplatstransfer</h3>
              <p className="mt-4 leading-relaxed text-white/75">
                Du anländer till Alicantes flygplats, där en privat transfer tar
                dig bekvämt till ditt hotell eller resort.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Boende på 4- eller 5-stjärnigt hotell
              </h3>
              <p className="mt-4 leading-relaxed text-white/75">
                Du bor på ett noggrant utvalt boutiquehotell eller en 4- eller
                5-stjärnig resort.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">Personligt välkomnande</h3>
              <p className="mt-4 leading-relaxed text-white/75">
                Under ett avslappnat välkomstmöte går vi igenom dina mål,
                besvarar dina första frågor och går igenom programmet för de
                kommande dagarna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VERKLIGA OMRÅDEN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Upptäck det verkliga norra Costa Blanca
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Vi visar dig mer än bara de välkända turistplatserna.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Under Buyer Discovery Trip upplever du områdena ur ett
              vardagsperspektiv. Vi besöker platser som är viktiga för din
              framtida livsstil, inte bara de platser som ser vackra ut i en
              broschyr.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Moraira</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Lugnt och elegant kustliv med villor, vikar och en förfinad
                bostadsatmosfär.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Jávea</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                En livlig internationell livsstil med stränder, restauranger,
                sport och aktivitet året runt.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Altea</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Kultur, skönhet, havsutsikt och medelhavskänsla i en konstnärlig
                miljö.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Benissa</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Utrymme, integritet, autenticitet, lantligt boende och gömda
                vikar längs kusten.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Calpe</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Strandnära boende, hamnliv, lägenheter, nyproduktionsprojekt och
                en mer aktiv atmosfär.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h3 className="font-serif text-3xl text-[#1e2a3a]">Dénia</h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                Gastronomi, hamnliv, daglig service och en livlig stad som
                förblir aktiv året runt.
              </p>
            </div>
          </div>

          <p className="mt-12 max-w-4xl text-lg leading-relaxed text-stone-600">
            Vi hjälper dig att förstå skillnaderna mellan områdena: atmosfär,
            bostadstyper, skolor, sjukvård, restider, internationell gemenskap,
            restauranger, sportmöjligheter, daglig service, uthyrningsmöjligheter
            och praktisk lämplighet på lång sikt.
          </p>
        </div>
      </section>

      {/* PROFESSIONELLA KONTAKTER */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Träffa de professionella kontakter du behöver före köpet
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Få svar innan du fattar beslut.
            </h2>
          </div>

          <div className="rounded-[40px] bg-white p-10 shadow-sm">
            <p className="text-lg leading-relaxed text-stone-600">
              Under din Buyer Discovery Trip introducerar vi dig för pålitliga
              oberoende professionella och lokala kontakter som kan hjälpa dig
              att förstå de praktiska stegen före ett köp.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Oberoende fastighetsadvokat",
                "Spansk notarie",
                "Bolånespecialist",
                "Bankkontakt",
                "Försäkringsspecialist",
                "Lokal fastighetsexpert",
                "Flyttvägledning där det är relevant",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                  <p className="font-medium text-[#1e2a3a]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Dessa samtal är till för att ge dig klarhet kring den juridiska
              processen, bolånemöjligheter, bankkrav, försäkringar, köpkostnader,
              årliga ägarkostnader, dokumentation och vanliga misstag som
              internationella köpare bör undvika.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Du kan ställa dina frågor direkt, förstå vem som ansvarar för vad
              och lämna resan med en mycket tydligare bild av hur det faktiskt
              går till att köpa fastighet i Spanien.
            </p>
          </div>
        </div>
      </section>

      {/* LIVSSTIL */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Upplev livsstilen, inte bara bostadsmarknaden
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            En bostad är bara en del av beslutet.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-stone-600">
            Du vill också förstå hur ditt liv här skulle kunna kännas. Därför
            innehåller Buyer Discovery Trip livsstilsaktiviteter som matchar
            dina intressen och det område du utforskar.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Lokala luncher och fine dining",
              "Vinprovningar",
              "Golfklubbar",
              "Beachclubs",
              "Hamnar och yachtklubbar",
              "Wellness- och spaupplevelser",
              "Vandrings- och naturleder",
              "Kulturella besök",
              "Affärs- eller nätverksintroduktioner",
              "Lokala sammankomster",
              "Aktiviteter med likasinnade framtida boende",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                <p className="text-sm font-medium text-[#1e2a3a]">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-4xl text-lg leading-relaxed text-stone-600">
            Vi visar dig inte en allmän version av Spanien. Vi låter dig uppleva
            den del av norra Costa Blanca som realistiskt skulle kunna passa
            ditt liv.
          </p>
        </div>
      </section>

      {/* VAD VI GÖR */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vad vi gör för dig
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Vi vägleder, koordinerar och hjälper dig att fatta ett bättre
              beslut.
            </h2>
          </div>

          <div className="text-lg leading-relaxed text-stone-600">
            <p>
              Vi koordinerar hela upplevelsen, vägleder dig genom de olika
              områdena och introducerar dig för pålitliga oberoende
              professionella. På så sätt kan du fatta välgrundade beslut innan
              du köper fastighet i Spanien.
            </p>

            <p className="mt-6">
              Vi hjälper dig att jämföra områden, förstå praktiska skillnader,
              ställa rätt frågor och undvika vanliga misstag.
            </p>

            <p className="mt-6">
              Vår roll är inte att pressa dig mot en bostad. Vår roll är att
              hjälpa dig att fatta ett bättre beslut.
            </p>

            <p className="mt-6">
              När ett område inte passar din profil säger vi det. Om en viss
              bostadstyp kan innebära juridiska, praktiska eller
              livsstilsrelaterade problem hjälper vi dig att förstå det innan du
              binder dig.
            </p>
          </div>
        </div>
      </section>

      {/* INGÅR */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Vad som ingår
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Din Buyer Discovery Trip kan innehålla allt du behöver för ett
            tydligt första beslut.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Kostnadsfritt personligt intake-samtal före ankomst",
              "Personlig livsstils- och områdesprofil",
              "Personligt sammansatt program",
              "Flygplatstransfer från Alicante",
              "Boende på ett noggrant utvalt 4- eller 5-stjärnigt hotell eller boutique-resort",
              "Guidad besökstur i områden på norra Costa Blanca",
              "Introduktioner till pålitliga juridiska, bank-, bolåne- och försäkringskontakter",
              "Livsstilsaktiviteter anpassade efter dina intressen",
              "Privat resa eller liten grupp, beroende på dina önskemål",
              "Noggrant utvalda introduktioner till likasinnade köpare och framtida boende",
              "Tid för personliga frågor och beslutsstöd",
              "Tydliga nästa steg efter resan",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white/80 p-5">
                <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EFTER RESAN */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Vad du vet efter resan
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Du lämnar inte med vaga intryck, utan med klarhet.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Vilka områden på norra Costa Blanca som passar din livsstil",
              "Vilka områden som är mindre lämpliga för dig",
              "Vilken typ av bostad som passar din budget och dina mål",
              "Vad köpprocessen i Spanien innebär",
              "Vilka juridiska och ekonomiska frågor som behöver uppmärksamhet",
              "Hur vardagslivet efter köpet skulle kunna se ut",
              "Vilka professionella kontakter som kan stödja dig",
              "Vilken typ av gemenskap du skulle kunna bli en del av",
              "Om du är redo för nästa steg",
            ].map((item) => (
              <div key={item} className="rounded-[28px] bg-white p-7 shadow-sm">
                <p className="text-lg leading-relaxed text-stone-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FÖR VEM */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Passar den här resan dig?
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Perfekt för seriösa köpare som först vill förstå norra Costa Blanca
            ordentligt innan de väljer bostad.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Internationella köpare som undersöker norra Costa Blanca",
              "Nederländska, belgiska, tyska, schweiziska, brittiska, skandinaviska och engelsktalande köpare",
              "Familjer som överväger att flytta till Spanien",
              "Pensionärer som planerar en ny livsstil",
              "Entreprenörer och personer som arbetar på distans",
              "Köpare av en andra bostad",
              "Köpare som jämför Moraira, Jávea, Altea, Benissa, Calpe och Dénia",
              "Klienter som vill ha professionell vägledning innan seriösa visningar börjar",
              "Människor som vill träffa likasinnade framtida boende innan de flyttar",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f6f1ea] p-5">
                <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Ansök om din Buyer Discovery Trip
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            När du seriöst överväger att köpa fastighet i Spanien är det
            viktigaste beslutet inte bostaden.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Det handlar om området, livsstilen och rätt stöd omkring dig.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
            Ansök om din Buyer Discovery Trip och upptäck om norra Costa Blanca
            verkligen passar din framtid.
          </p>

          <a
            href="/sv/contact"
            className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Ansök om din Buyer Discovery Trip
          </a>
        </div>
      </section>
    </main>
  );
}
