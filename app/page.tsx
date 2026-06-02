export default function Home() {
  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/15 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="w-[180px]"></div>

          <div className="hidden gap-8 text-sm text-white md:flex">
            <a href="/" className="border-b border-[#c8a063] pb-1">Home</a>
            <a href="/regions" className="hover:text-white/70 transition">Regions</a>
            <a href="/services" className="hover:text-white/70 transition">Services</a>
            <a href="/guides/buying-property-spain" className="hover:text-white/70 transition">Guides</a>
            <a href="/about-us" className="hover:text-white/70 transition">About</a>
            <a href="/contact" className="hover:text-white/70 transition">Contact</a>
          </div>

          <a
            href="/contact"
            className="rounded-full bg-[#c8a063] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Schedule an introduction
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="/images/laatste-homepage.png"
          alt="Nordic Move Spain"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/5"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-24">
          <div className="max-w-2xl -translate-x-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca North
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[0.98] text-[#f8f5ef] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-6xl">
              A different way
              <br />
              to buy property
              <br />
              in Spain.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white">
              More than property. Clarity, confidence and a community where you truly belong.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90">
              We help international buyers understand where to live, what to avoid, how to buy safely and how to build a meaningful life in Spain.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#c8a063]">
              English · Dutch · German · Spanish · Swedish
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/services/area-match"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Request your Area Match
              </a>

              <a
                href="/services/discovery-trips"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Explore the Buyer Excursion
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Clarity before commitment
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                Confidence, clarity and connection before you buy.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-stone-600">
                Purchasing property in Spain is one of life's most significant decisions. We help international buyers navigate the legal, financial and lifestyle considerations that many only discover after relocating.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Through our Area Match Assessment, Costa Blanca Intelligence Reports and Buyer Excursions, clients gain a deeper understanding of the regions, communities and practical realities of life on Costa Blanca North before making long-term commitments.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                Many buyers focus only on the property itself. We focus on the complete picture — location, legal certainty, ownership costs, financing options, community regulations and long-term lifestyle considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <a
              href="/services/area-match"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/area-match.png"
                alt="Costa Blanca Area Match"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Start with insight
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Area Match & Intelligence Report
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Discover which towns and neighbourhoods best match your lifestyle, family situation, interests, budget and long-term plans.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Optional insights include healthcare access, schools, crime data, expat density, golf, accessibility and investment considerations.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Request your match →
                </div>
              </div>
            </a>

            <a
              href="/services/discovery-trips"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/discover-card.png"
                alt="Buyer Excursion Costa Blanca"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Experience before you decide
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Buyer Excursion
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  A carefully curated introduction to Costa Blanca North, designed around your lifestyle, goals and stage of life.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Explore regions in person, meet trusted legal and financial professionals and experience the communities before making a long-term commitment.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Discover the excursion →
                </div>
              </div>
            </a>

            <a
              href="/services/after-care"
              className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src="/images/soft-landing-card.png"
                alt="Soft Landing Program"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  After purchase support
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
                  Soft Landing Program
                </h3>

                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  Practical support after purchase — from registrations and healthcare orientation to local introductions and settling into daily life in Spain.
                </p>

                <p className="mt-5 text-base leading-relaxed text-stone-500">
                  Clients in our Soft Landing Program can also become part of Nordic Circle Community, our curated network for friendships, business connections and local belonging.
                </p>

                <div className="mt-10 text-sm uppercase tracking-[0.25em]">
                  Explore soft landing →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            How it works
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            A clear journey from first orientation to feeling at home in Spain.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-5">
            {[
              ["01", "Area Match", "We identify which Costa Blanca regions may fit your lifestyle and priorities."],
              ["02", "Introduction Call", "We discuss your plans in English, Dutch, German, Spanish or Swedish."],
              ["03", "Buyer Excursion", "You experience the regions, professionals and lifestyle in person."],
              ["04", "Acquisition", "We guide the purchase with independent legal and financial professionals."],
              ["05", "Soft Landing", "You settle in with support and can become part of Nordic Circle Community."],
            ].map(([number, title, text]) => (
              <div key={number} className="border-l border-[#c8a063]/30 pl-5">
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">{number}</p>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDES & INSIGHTS */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Guides & Insights
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Practical insights before buying property in Spain.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              Clear guidance for international buyers who want to understand the legal,
              financial, tax and practical realities before making a property decision.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="/guides/buying-property-spain"
              className="rounded-[32px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                Buying in Spain
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                Buying Property in Spain
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                A complete guide to legal checks, taxes, mortgages and purchase costs.
              </p>

              <span className="mt-8 inline-block text-sm uppercase tracking-[0.25em]">
                Read guide →
              </span>
            </a>

            <a
              href="/guides/common-mistakes-buying-property-spain"
              className="rounded-[32px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                Buyer Mistakes
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                Common Mistakes Buyers Make
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                The most common mistakes international buyers make before and during purchase.
              </p>

              <span className="mt-8 inline-block text-sm uppercase tracking-[0.25em]">
                Read guide →
              </span>
            </a>

            <a
              href="/guides/homeowners-association-spain"
              className="rounded-[32px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                Community Rules
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                Homeowners Associations in Spain
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                Understand community fees, rental restrictions, meeting minutes and owner obligations.
              </p>

              <span className="mt-8 inline-block text-sm uppercase tracking-[0.25em]">
                Read guide →
              </span>
            </a>

            <a
              href="/guides/dutch-tax-second-home-spain"
              className="rounded-[32px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#c8a063]">
                Dutch Tax Rules
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1e2a3a]">
                Dutch Tax Rules for a Second Home
              </h3>

              <p className="mt-5 leading-relaxed text-stone-600">
                What Dutch residents should know about Box 3, Spanish taxes and foreign property.
              </p>

              <span className="mt-8 inline-block text-sm uppercase tracking-[0.25em]">
                Read guide →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* NORDIC CIRCLE COMMUNITY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Nordic Circle Community
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Finding the right people matters as much as finding the right home.
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Whether clients purchase a property with our guidance, join our Buyer Excursion or choose our Soft Landing Program, our services can be booked separately and tailored to their personal situation.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
            Clients can also become part of Nordic Circle Community — a carefully curated network of like-minded international buyers, homeowners, entrepreneurs, families and future residents. Through shared experiences, personal introductions and curated gatherings, many clients begin building meaningful friendships, valuable networks and a genuine sense of belonging long before making Spain their new home.
          </p>

          <a
            href="/services/after-care"
            className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Find out more about Nordic Circle Community
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[320px_1fr]">
          <img
            src="/images/founder.png"
            alt="Founder Nordic Move Spain"
            className="h-[420px] w-full rounded-[28px] object-cover shadow-xl"
          />

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              About Nordic Move Spain
            </p>

            <h2 className="mt-5 font-serif text-6xl leading-tight text-[#1e2a3a]">
              Personal guidance built on trust, research and international experience.
            </h2>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
              Nordic Move Spain was created for international buyers looking for a calmer, more personal and carefully guided experience when buying property and settling into life in Spain.
            </p>

            <a
              href="/about-us"
              className="mt-10 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-white transition hover:bg-[#15202d]"
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
            src="/images/discover-card.png"
            alt="Costa Blanca North"
            className="h-[850px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10"></div>

          <div className="absolute inset-0 p-16">
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#d2a75f]">
                  Costa Blanca North
                </p>

                <h2 className="mt-6 max-w-4xl font-serif text-7xl leading-[1] text-white">
                  Explore the most desirable coastal regions in Spain.
                </h2>
              </div>

              <a
                href="/regions"
                className="hidden rounded-full border border-white px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-stone-900 md:inline-block"
              >
                View all regions
              </a>
            </div>

            <div className="absolute bottom-16 left-16 right-16 grid gap-8 md:grid-cols-3">
              <a href="/regions/moraira" className="rounded-[32px] bg-white/95 p-8 backdrop-blur">
                <h3 className="font-serif text-5xl text-[#1e2a3a]">Moraira</h3>
                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Elegant coastal living with a peaceful international atmosphere.
                </p>
              </a>

              <a href="/regions/altea" className="rounded-[32px] bg-white/95 p-8 backdrop-blur">
                <h3 className="font-serif text-5xl text-[#1e2a3a]">Altea</h3>
                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Artistic charm and sophisticated Mediterranean living.
                </p>
              </a>

              <a href="/regions/javea" className="rounded-[32px] bg-white/95 p-8 backdrop-blur">
                <h3 className="font-serif text-5xl text-[#1e2a3a]">Jávea</h3>
                <p className="mt-5 text-lg leading-relaxed text-stone-600">
                  Luxury villas, vibrant energy and beautiful beaches.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SELL YOUR PROPERTY */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#e9dfd2]">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            <div className="p-14 lg:p-20">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                For property owners
              </p>

              <h2 className="mt-6 font-serif text-6xl leading-[1] text-[#1e2a3a]">
                Do you want to sell your property to Northern European buyers?
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-stone-700">
                Nordic Move Spain connects carefully selected properties on Costa Blanca North with international buyers from the Netherlands, Germany, Scandinavia and other Northern European countries.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                We combine international marketing, trusted local partnerships and personal guidance to help buyers and sellers connect more efficiently.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/contact" className="rounded-full bg-[#1e2a3a] px-8 py-4 text-white">
                  Discuss your property
                </a>

                <a href="/services" className="rounded-full border border-[#1e2a3a] px-8 py-4 text-[#1e2a3a]">
                  Learn more
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[500px]">
              <img
                src="/images/seller-section.png"
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