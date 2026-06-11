export const metadata = {
  title: "Sell Your Property Costa Blanca North | Nordic Move Spain",
  description:
    "Sell your Costa Blanca North property to qualified international buyers from the Netherlands, Belgium, Germany, Switzerland, the UK and Scandinavia through lifestyle-led property marketing and buyer matching.",
};

export default function SellYourPropertyPage() {
  const advantages = [
    {
      title: "Buyer matching",
      text:
        "We connect selected homes with buyers whose lifestyle, budget and relocation goals fit the property.",
    },
    {
      title: "International positioning",
      text:
        "We present your property in a way that speaks to Dutch, Belgian, German, Swiss, British, Scandinavian and international buyers.",
    },
    {
      title: "Lifestyle marketing",
      text:
        "We show not only the home, but also the area, lifestyle, community and practical advantages around it.",
    },
    {
      title: "Trusted local network",
      text:
        "We work with trusted local partners and independent professionals to help create a smoother selling process.",
    },
  ];

  const process = [
    "We review your property and location",
    "We define the ideal international buyer profile",
    "We position the home around lifestyle, not only features",
    "We prepare the property story for international buyers",
    "We connect the property with relevant buyer demand where possible",
    "We coordinate interest with trusted local partners",
  ];

  return (
    <main className="bg-[#f6f1ea] text-stone-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/seller-section.png"
          alt="Sell property Costa Blanca North"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-8 pt-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Sell your property
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white md:text-7xl">
              Sell your Costa Blanca North property to the right international buyer.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
              Most agencies list a property. We position it for the type of buyer most likely to understand its lifestyle, location and long-term value.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
              >
                Discuss your property
              </a>

              <a
                href="/services"
                className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                View all services
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
                International buyer positioning
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
                The right buyer does not only buy square metres. They buy a future lifestyle.
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-stone-600">
              <p>
                Nordic Move Spain helps selected property owners present their home to qualified international buyers from the Netherlands, Belgium, Germany, Switzerland, the United Kingdom, Scandinavia and other international markets.
              </p>

              <p className="mt-6">
                Through our Area Match Assessments, personal buyer intakes, Buyer Discovery Trips and international network, we understand what buyers are really looking for before they commit to a home in Spain.
              </p>

              <p className="mt-6">
                This allows us to market your property around the right lifestyle, buyer profile and location story — not just square metres, photos and a listing description.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-white p-12 shadow-sm lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Why sellers work with us
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            We help your property stand out to better-matched international buyers.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {advantages.map((item) => (
              <div key={item.title} className="rounded-[28px] bg-[#f6f1ea] p-8">
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Our approach
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              A clearer route to the right buyer.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              Our goal is simple: to help your property reach better-matched international buyers and create a clearer, more confident route to sale.
            </p>
          </div>

          <div className="rounded-[40px] bg-[#1e2a3a] p-10 text-white shadow-sm">
            <div className="grid gap-5">
              {process.map((item, index) => (
                <div key={item} className="flex gap-5 rounded-2xl bg-white/10 p-5">
                  <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="leading-relaxed text-white/85">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            More than a listing
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a]">
            Your property needs more than exposure. It needs the right story for the right buyer.
          </h2>

          <div className="mt-10 max-w-5xl text-lg leading-relaxed text-stone-700">
            <p>
              Many international buyers are not only comparing homes. They are comparing possible futures: the town, the community, the lifestyle, the school options, the daily rhythm, the travel connections and the people they may meet.
            </p>

            <p className="mt-6">
              That is where Nordic Move Spain is different. We work with buyers before they are ready to purchase, helping them understand which areas and property types match their life. This gives us a stronger understanding of what kind of buyer may fit a specific home.
            </p>

            <p className="mt-6">
              We do not guarantee a faster sale. But we do help create stronger positioning, better buyer alignment and more focused international visibility.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-14 text-white lg:p-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Discuss your property
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-tight">
            Curious whether your property fits our international buyer network?
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/85">
            Tell us about your home, location and selling goals. We will review whether your property could be a good match for the buyers we support.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Discuss your property
          </a>
        </div>
      </section>
    </main>
  );
}