export default function Home() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-stone-200 bg-[#f6f1ea]/95 px-8 py-2 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/">
            <img
              src="/images/logo-nordic.png"
              alt="Nordic Move Spain"
              className="h-20 w-auto"
            />
          </a>

          <div className="hidden gap-8 text-sm md:flex">
            <a href="/" className="hover:text-stone-500 transition">Home</a>
            <a href="/regions" className="hover:text-stone-500 transition">Regions</a>
            <a href="/services" className="hover:text-stone-500 transition">Services</a>
            <a href="/guides/buying-process" className="hover:text-stone-500 transition">Buying Process</a>
            <a href="/about-us" className="hover:text-stone-500 transition">About</a>
            <a href="/contact" className="hover:text-stone-500 transition">Contact</a>
          </div>

          <a
            href="/contact"
            className="rounded-full bg-stone-900 px-6 py-3 text-sm text-white"
          >
            Personal introduction
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden pt-8">
        <img
          src="/images/ibiza.png"
          alt="Luxury villa Costa Blanca"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <div className="max-w-3xl pt-8">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80">
              Costa Blanca North
            </p>

            <h1 className="mt-5 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              A different way
              <br />
              to buy property
              <br />
              in Spain.
            </h1>

            <p className="mt-8 max-w-xl text-2xl leading-relaxed text-white">
              Helping international buyers feel at home.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90">
              We help international buyers not only find a home in Spain, but also connect with like-minded people, local lifestyle and a new chapter abroad.
            </p>

            <p className="mt-8 text-sm uppercase tracking-[0.25em] text-white/80">
              Our team speaks English, Dutch, German and Swedish fluently.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-white px-8 py-4 text-stone-900"
              >
                Schedule introduction
              </a>

              <a
                href="/regions"
                className="rounded-full border border-white px-8 py-4 text-white"
              >
                Explore regions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="font-serif text-5xl leading-tight">
              Property guidance, lifestyle discovery and a softer landing in Spain.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-stone-600">
              Our core service is helping international buyers find and purchase property in Spain with clarity, structure and trusted local guidance. Lifestyle Discovery Experiences and our Soft Landing Program are optional services for clients who want additional support before or after the purchase.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <a
              href="/services/discovery-trips"
              className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/discovery2.png"
                alt="Lifestyle Discovery Experience Spain"
                className="h-64 w-full rounded-[24px] object-cover"
              />

              <p className="mt-8 text-sm uppercase tracking-[0.3em] text-stone-500">
                Optional
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight">
                Lifestyle Discovery Experience
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Our Discovery Trips are designed around your lifestyle, interests and future plans in Spain. Before arrival, we personally discuss what matters most to you — whether that is golf, wellness, gastronomy, international communities, outdoor living, business networking or a quieter Mediterranean lifestyle.
              </p>

              <p className="mt-6 text-base leading-relaxed text-stone-500">
                Based on your preferences, we introduce you to carefully selected neighbourhoods, golf and padel clubs, restaurants, beach areas, healthcare facilities and trusted local professionals. We can also arrange introductions to English, Dutch or German-speaking doctors, lawyers and other practical contacts.
              </p>

              <p className="mt-6 text-base leading-relaxed text-stone-500">
                One of the most valuable parts of the experience is connecting with other international buyers and future residents who share similar interests, lifestyles and dreams about living in Spain. Through small dinners, social introductions and curated activities, many clients already start building meaningful connections before officially moving.
              </p>

              <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                Learn more
              </div>
            </a>

            <a
              href="/guides/buying-process"
              className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/legal.png"
                alt="Property Purchase Guidance"
                className="h-64 w-full rounded-[24px] object-cover"
              />

              <p className="mt-8 text-sm uppercase tracking-[0.3em] text-stone-500">
                Core Service
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight">
                Property Purchase Guidance
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Personal guidance during the property search, legal checks, financial considerations and Spanish buying process.
              </p>

              <p className="mt-6 text-base leading-relaxed text-stone-500">
                We work together with trusted independent Spanish lawyers, mortgage specialists and local professionals on Costa Blanca North.
              </p>

              <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                Learn more
              </div>
            </a>

            <a
              href="/services/after-care"
              className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/aftercare.png"
                alt="Soft Landing Program Spain"
                className="h-64 w-full rounded-[24px] object-cover"
              />

              <p className="mt-8 text-sm uppercase tracking-[0.3em] text-stone-500">
                Optional
              </p>

              <h3 className="mt-5 font-serif text-4xl leading-tight">
                Soft Landing Program
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Personal guidance designed to help international buyers settle into life in Spain with more clarity, comfort and local support.
              </p>

              <p className="mt-6 text-base leading-relaxed text-stone-500">
                From practical administration and healthcare to lifestyle introductions, local recommendations and curated events — we help clients feel at home long before they fully relocate.
              </p>

              <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                Learn more
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* WHY COSTA BLANCA NORTH */}
      <section className="px-8 pb-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px]">
          <img
            src="/images/why-costa-blanca.png"
            alt="Why Costa Blanca North"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px]">
          <img
            src="/images/community.png"
            alt="A community that feels like home"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[320px_1fr]">
          <img
            src="/images/persoonlijk 2.png"
            alt="Founder Nordic Move Spain"
            className="h-[420px] w-full rounded-[28px] object-cover shadow-xl"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              About Nordic Move Spain
            </p>

            <h2 className="mt-5 font-serif text-6xl leading-tight">
              Personal guidance built on trust, research and international experience.
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
              Nordic Move Spain was created to offer a calmer and more transparent way to buy property in Spain. With experience in international relocation, property guidance and legal research, we understand both the emotional and practical side of purchasing a home abroad.
            </p>

            <a
              href="/about-us"
              className="mt-10 inline-block rounded-full bg-stone-800 px-8 py-4 text-white"
            >
              Read more about us
            </a>
          </div>
        </div>
      </section>

      {/* REGIONS */}
      <section className="px-8 pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px]">
          <img
            src="/images/discovery2.png"
            alt="Costa Blanca North"
            className="h-[900px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 p-16">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/80">
                  Costa Blanca North
                </p>

                <h2 className="mt-6 max-w-4xl font-serif text-7xl leading-[1] text-white">
                  Explore the most desirable coastal regions in Spain.
                </h2>
              </div>

              <a
                href="/regions"
                className="rounded-full border border-white px-8 py-4 text-sm uppercase tracking-[0.2em] text-white"
              >
                View all regions
              </a>
            </div>

            <div className="absolute bottom-16 left-16 right-16 grid gap-8 md:grid-cols-3">
              <a
                href="/regions/moraira"
                className="rounded-[32px] bg-white/95 p-8 backdrop-blur"
              >
                <h3 className="font-serif text-5xl">Moraira</h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Elegant coastal living with a peaceful international atmosphere and beautiful Mediterranean beaches.
                </p>
              </a>

              <a
                href="/regions/altea"
                className="rounded-[32px] bg-white/95 p-8 backdrop-blur"
              >
                <h3 className="font-serif text-5xl">Altea</h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Artistic charm, authentic Spanish character and a sophisticated relaxed lifestyle near the sea.
                </p>
              </a>

              <a
                href="/regions/javea"
                className="rounded-[32px] bg-white/95 p-8 backdrop-blur"
              >
                <h3 className="font-serif text-5xl">Jávea</h3>

                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Vibrant international energy with luxury villas, nature, restaurants and family-friendly beaches.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES & INSIGHTS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Guides & Insights
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight">
              Practical guidance before buying property in Spain.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Explore our buyer guides with practical information about legal checks, purchase costs, common mistakes and daily life on Costa Blanca North.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <a
              href="/de"
              className="group relative min-h-[430px] overflow-hidden rounded-[40px] bg-white p-14 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/practical-guidance.png"
                alt="German Buyer Guides"
                className="absolute inset-0 h-full w-full object-cover opacity-20 transition duration-500 group-hover:scale-105"
              />

              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
                  German Buyer Guides
                </p>

                <h3 className="mt-6 font-serif text-5xl leading-tight">
                  Informationen für deutsche Käufer in Spanien.
                </h3>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-700">
                  Praktische Informationen über Immobilienkauf, Nebenkosten, Gemeinschaftsregeln und den spanischen Immobilienmarkt.
                </p>

                <div className="mt-10 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm text-white">
                  Explore German guides
                </div>
              </div>
            </a>

            <a
              href="/nl"
              className="group relative min-h-[430px] overflow-hidden rounded-[40px] bg-white p-14 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/practical-guidance.png"
                alt="Dutch Buyer Guides"
                className="absolute inset-0 h-full w-full object-cover opacity-20 transition duration-500 group-hover:scale-105"
              />

              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
                  Dutch Buyer Guides
                </p>

                <h3 className="mt-6 font-serif text-5xl leading-tight">
                  Informatie voor Nederlandse kopers in Spanje.
                </h3>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-700">
                  Praktische uitleg over aankoopkosten, juridische controles, regio’s en wonen aan de Costa Blanca Noord.
                </p>

                <div className="mt-10 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm text-white">
                  Explore Dutch guides
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SELL YOUR PROPERTY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#e9dfd2]">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            <div className="p-14 lg:p-20">
              <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
                For property owners
              </p>

              <h2 className="mt-6 font-serif text-6xl leading-[1] text-stone-900">
                Do you want to sell your property to Northern European buyers?
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-700">
                Nordic Move Spain connects carefully selected properties on Costa Blanca North with international buyers from the Netherlands, Germany, Scandinavia and other Northern European countries.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                We combine international marketing, trusted local partnerships and personal guidance to help buyers and sellers connect more efficiently.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-stone-900 px-8 py-4 text-white"
                >
                  Discuss your property
                </a>

                <a
                  href="/services"
                  className="rounded-full border border-stone-900 px-8 py-4 text-stone-900"
                >
                  Learn more
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[500px]">
              <img
                src="/images/ibiza.png"
                alt="Selling property in Costa Blanca North"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}