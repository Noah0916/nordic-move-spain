export const metadata = {
  title:
    "Move to Spain from the USA | Move-In Ready & Relocation Support | Nordic Move Spain",
  description:
    "Relocation and Move-In Ready support for US buyers moving to the Costa Blanca: visa and residency specialist introductions, NIE and administration coordination, healthcare, banking, cross-border tax contacts, shipping, pets, schools, utilities, renovation, interiors and home setup.",
  keywords: [
    "move to Spain from USA",
    "relocate to Spain from USA",
    "Costa Blanca relocation services",
    "American moving to Spain",
    "move to Costa Blanca",
    "Spain visa support USA",
    "Spain residency support Americans",
    "NIE help Spain",
    "digital nomad visa Spain support",
    "non lucrative visa Spain support",
    "US Spain tax advisor introduction",
    "international moving Spain USA",
    "ship household goods to Spain",
    "move pets to Spain",
    "Costa Blanca home setup",
    "Costa Blanca renovation",
    "Costa Blanca interior design",
    "Move-In Ready Spain",
  ],
  alternates: {
    canonical: "/services/move-in-ready",
  },
  openGraph: {
    title:
      "Move to Spain from the USA | Move-In Ready & Relocation Support | Nordic Move Spain",
    description:
      "From visa and residency introductions to utilities, shipping, healthcare, renovation and interiors, we help US buyers prepare both the home and the practical move to the Costa Blanca.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/move-in-ready-ibiza.png",
        width: 1200,
        height: 630,
        alt: "Move-In Ready relocation and home setup support on the Costa Blanca",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MoveInReadyPage() {
  const images = [
    {
      src: "/images/move-in-ready-costal.png",
      title: "Coastal Calm",
      text:
        "A soft, sophisticated coastal direction built around natural materials, quiet tones, relaxed comfort and understated luxury.",
      alt: "Coastal Calm interior direction for Move-In Ready support on the Costa Blanca",
    },
    {
      src: "/images/move-in-ready-ibiza.png",
      title: "Ibiza Soho Lounge",
      text:
        "A warm Mediterranean style with soft whites, rustic woods, woven textures, subtle color and an elegant indoor-outdoor atmosphere.",
      alt: "Ibiza Soho Lounge interior direction for Move-In Ready support on the Costa Blanca",
    },
    {
      src: "/images/move-in-ready-kitchen.png",
      title: "Contemporary Coastal Kitchen",
      text:
        "A bright architectural direction with clean lines, large windows, pale woods, high-quality finishes and a calm coastal feel.",
      alt: "Contemporary Coastal Kitchen direction for a Costa Blanca home",
    },
    {
      src: "/images/move-in-ready-mediterranean-warmth.png",
      title: "Mediterranean Warmth",
      text:
        "A relaxed Mediterranean way of living shaped around terraces, daylight, sea views, outdoor dining and comfortable everyday life.",
      alt: "Mediterranean Warmth direction for indoor-outdoor living on the Costa Blanca",
    },
  ];

  const steps = [
    {
      title: "Lifestyle & style briefing",
      text:
        "We start by understanding how you want to use the home. We look beyond aesthetics to your daily life, family, guests, privacy, maintenance, comfort, remote work and the atmosphere you want to create.",
    },
    {
      title: "Visual moodboard",
      text:
        "We translate your preferences into a visual moodboard with colors, materials, textures, furniture references, lighting ideas and inspiration for indoor and outdoor spaces. This creates direction before major decisions or purchases are made.",
    },
    {
      title: "Lifestyle concept",
      text:
        "The moodboard becomes a practical lifestyle concept for the property: relaxing, entertaining, working from Spain, hosting family, outdoor dining, low-maintenance ownership or full-time living.",
    },
    {
      title: "Contractor & technical feasibility",
      text:
        "Where renovation, installation or technical work is required, we involve the appropriate local contractor or specialist early so the scope, budget, permits, materials and timing can be assessed realistically.",
    },
    {
      title: "Furniture sourcing & procurement",
      text:
        "Once the direction is clear, we coordinate furniture selection and sourcing through appropriate suppliers and local partners. The goal is a coherent home rather than a collection of disconnected purchases.",
    },
    {
      title: "Lighting",
      text:
        "Lighting has a major effect on how a home feels. We help shape functional lighting, ambient lighting, statement fixtures, exterior lighting and the details that make the property feel warm and complete.",
    },
    {
      title: "Curtains & window treatments",
      text:
        "Window treatments influence privacy, comfort, acoustics, sun control and atmosphere. We help define the right approach and coordinate local measuring, supply and installation where required.",
    },
    {
      title: "Delivery & installation",
      text:
        "Managing deliveries, assembly and installation from the United States can quickly become a full-time project. We coordinate the practical steps with local partners so the process is more structured and less fragmented.",
    },
    {
      title: "Styling",
      text:
        "The final styling brings the home together through textiles, selected accessories, outdoor details, bedding, tableware, plants and the smaller decisions that make a property feel personal and finished.",
    },
    {
      title: "Arrival preparation",
      text:
        "Before you arrive, we coordinate agreed final checks and practical essentials so your first days are about settling in rather than solving a list of avoidable problems.",
    },
  ];

  const packages = [
    {
      number: "01",
      title: "Home Setup",
      subtitle: "The practical foundation of your Spanish home",
      intro:
        "For owners who want the essential practical details organized after completion and before arrival, without a full renovation or complete relocation program.",
      items: [
        "Help coordinate electricity and water setup",
        "Internet, mobile, television and connectivity coordination",
        "Compare appropriate home, contents and related insurance options",
        "Research alarm, security and access solutions",
        "Cleaning and pre-arrival preparation",
        "Obtain quotes for painting and smaller works",
        "Coordinate garden, pool and technical maintenance",
        "Consolidate supplier, appointment and contract information",
      ],
      result:
        "Your property is practically prepared and the key suppliers, appointments and household information are brought together in one clear overview.",
      featured: false,
    },
    {
      number: "02",
      title: "Renovation & Interiors",
      subtitle: "Renovation, furnishing and finishing in one coordinated plan",
      intro:
        "For homes that need renovation, adaptation or complete furnishing before they can be enjoyed comfortably.",
      items: [
        "Define use, priorities, style and budget",
        "Select and coordinate contractors and relevant specialists",
        "Coordinate with an architect or technical architect where required",
        "Structure quotes, schedule and progress reporting",
        "Develop an interior concept and visual moodboard",
        "Select materials, furniture, lighting and window treatments",
        "Coordinate delivery, assembly, installation and styling",
        "Organize snagging points and final checks before arrival",
      ],
      result:
        "Renovation, interior choices, procurement and implementation are coordinated as one project so the technical work, schedule and finished living environment support each other.",
      featured: true,
    },
    {
      number: "03",
      title: "US Relocation & Settling In",
      subtitle: "Prepare the move, not just the house",
      intro:
        "For US families, retirees, entrepreneurs and remote professionals who want help coordinating the practical transition from the United States to life on the Costa Blanca.",
      items: [
        "Introduction to an independent immigration lawyer or visa specialist",
        "Coordination support around NIE, residency and local administration",
        "Introduction to US-Spain cross-border tax and estate-planning specialists",
        "Private health insurance and healthcare orientation",
        "Spanish banking and practical payment setup",
        "International movers, shipping and storage options",
        "Pet relocation and specialist transport research",
        "Schools, childcare and family services",
        "Driving, vehicle and local mobility planning",
        "Sports clubs, golf, padel and local communities",
        "A personal relocation roadmap for your move",
      ],
      result:
        "You receive a clearer relocation plan covering the home, residency-related next steps, healthcare, finances, transport, family needs and day-to-day setup in Spain.",
      featured: false,
    },
  ];

  const usPriorities = [
    {
      title: "Visa & residency pathway",
      text:
        "If you plan to spend more than a standard visitor stay in Spain, we can introduce you to an independent immigration lawyer or visa specialist who can assess the route that fits your circumstances, including options such as non-lucrative residence or digital-nomad residence where relevant.",
    },
    {
      title: "NIE & Spanish administration",
      text:
        "We help structure the practical sequence around your NIE and other local administrative steps, and coordinate with the appropriate professionals where legal representation or specialist advice is required.",
    },
    {
      title: "US-Spain tax coordination",
      text:
        "US citizens and residents can face cross-border tax, reporting and estate-planning questions. We can connect you with advisers who understand both the US and Spanish sides before you make decisions that could have tax consequences.",
    },
    {
      title: "Healthcare & insurance",
      text:
        "We can help compare practical healthcare arrangements and suitable insurance options, including introductions to specialists where a visa or residency route has specific insurance requirements.",
    },
    {
      title: "Banking & payments",
      text:
        "We can help you understand the practical banking setup around owning and running a Spanish home, including local accounts, recurring household payments and introductions where specialist support is useful.",
    },
    {
      title: "Shipping, storage & pets",
      text:
        "From household goods and temporary storage to pet relocation and specialist transport, we can help compare providers and coordinate the local side of the move.",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] px-8 py-28 text-stone-900">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
          Move to Spain with fewer loose ends
        </p>

        <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
          Move-In Ready &amp; Relocation Support
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
          Buying the home is only part of moving to Spain. For US buyers, the real
          work often starts after the property decision: residency questions,
          paperwork, healthcare, banking, international moving, utilities,
          contractors, furniture, deliveries and getting the house ready from
          thousands of miles away.
        </p>

        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
          Nordic Move Spain brings those practical pieces together. We help you
          coordinate the home, the move and the right independent specialists so
          your arrival on the Costa Blanca feels planned rather than improvised.
        </p>

        {/* US RELOCATION */}
        <section className="mt-16 rounded-[40px] bg-[#1e2a3a] p-8 text-white shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Especially for buyers relocating from the United States
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-4xl leading-tight md:text-5xl">
            A transatlantic move needs more than a mover and a set of keys.
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-relaxed text-white/80">
            The questions are different when you are moving from the US. Which
            residency route applies? When should you arrange your NIE? What happens
            with healthcare, banking and cross-border tax advice? How do you ship
            household goods, move pets, choose schools and prepare a property while
            you are still in America?
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            We do not replace immigration lawyers, tax advisers, attorneys or other
            regulated professionals. Instead, we help structure the process,
            introduce the appropriate independent specialists and coordinate the
            practical tasks around their advice.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {usPriorities.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] bg-white/10 p-6"
              >
                <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/75">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* AFTER COMPLETION */}
        <section className="mt-16 rounded-[40px] bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            After completion, we stay involved
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Getting the keys is often the beginning, not the end.
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-relaxed text-stone-600">
            Electricity, water, internet and insurance may still need to be
            organized. You may need an international mover, temporary storage or
            specialist vehicle transport. Garden and pool care, air conditioning,
            heating, solar systems, renovation and furnishing all require reliable
            local partners and clear follow-through.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
            Nordic Move Spain helps organize these steps in a structured way. We
            speak Spanish, understand the local process and source appropriate
            professionals for your situation. We can request quotes, compare options,
            coordinate appointments and keep track of agreed progress.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
            Instead of trying to manage a dozen Spanish suppliers from the US, you
            have one point of coordination helping ensure the selected parties
            understand what needs to happen, when it needs to happen and who is
            responsible for each part.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
            For renovation work, we can work with a selected, officially registered
            construction company with its own execution team and access to qualified
            architects and technical architects. You are also free to appoint your
            own contractor or specialists.
          </p>

          <p className="mt-6 max-w-4xl text-lg font-medium leading-relaxed text-[#b88948]">
            You can choose the full Buyer Journey or only the support you need —
            from buyer guidance and independent checks to relocation, Home Setup,
            renovation and Interior Styling.
          </p>
        </section>

        {/* PACKAGES */}
        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Move-In Ready packages
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            Choose the level of support that fits your move.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
            From the practical foundation of the home to renovation, interiors and a
            transatlantic family relocation. Each package is agreed in advance as a
            clear scope and coordinated around your property, timing and priorities.
          </p>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.number}
                className={`relative flex h-full flex-col rounded-[32px] p-7 shadow-sm md:p-8 ${
                  item.featured
                    ? "bg-[#1d3b60] text-white"
                    : "bg-white text-stone-900"
                }`}
              >
                <span
                  className={`absolute right-7 top-7 font-serif text-4xl ${
                    item.featured ? "text-white/20" : "text-[#d8b77d]"
                  }`}
                >
                  {item.number}
                </span>

                <p className="text-xs uppercase tracking-[0.3em] text-[#c8a063]">
                  Package {item.number}
                </p>

                <h3
                  className={`mt-4 max-w-[80%] font-serif text-3xl leading-tight ${
                    item.featured ? "text-white" : "text-[#1e2a3a]"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-5 text-sm font-medium leading-relaxed ${
                    item.featured ? "text-white" : "text-[#1e2a3a]"
                  }`}
                >
                  {item.subtitle}
                </p>

                <p
                  className={`mt-5 text-sm leading-relaxed ${
                    item.featured ? "text-white/80" : "text-stone-600"
                  }`}
                >
                  {item.intro}
                </p>

                <ul className="mt-6 space-y-3">
                  {item.items.map((service) => (
                    <li
                      key={service}
                      className={`flex gap-3 text-sm leading-relaxed ${
                        item.featured ? "text-white/90" : "text-stone-700"
                      }`}
                    >
                      <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8a063]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-7 rounded-[24px] p-5 ${
                    item.featured ? "bg-white/10" : "bg-[#f6f1ea]"
                  }`}
                >
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#c8a063]">
                    Intended outcome
                  </p>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      item.featured ? "text-white/85" : "text-stone-700"
                    }`}
                  >
                    {item.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DESIGN IMAGES */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {images.map((image) => (
            <article
              key={image.title}
              className="overflow-hidden rounded-[32px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[380px] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1e2a3a] backdrop-blur">
                  Nordic Move Design
                </div>
              </div>

              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  Design direction
                </p>

                <h2 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  {image.title}
                </h2>

                <p className="mt-4 leading-relaxed text-stone-600">
                  {image.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-relaxed text-stone-500">
          The Nordic Move Designs shown above are inspirational design directions.
          They are not property listings or completed client projects. Final design,
          planning and implementation are adapted to the property, budget,
          availability and selected local partners.
        </p>

        {/* PROCESS */}
        <section className="mt-20 rounded-[40px] bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            What we coordinate
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            The Move-In Ready process
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[28px] bg-[#f6f1ea] p-7"
              >
                <p className="text-sm tracking-[0.25em] text-[#c8a063]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e2a3a]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm leading-relaxed text-stone-500">
            Move-In Ready support is tailored to each property and each client.
            Scope, schedule, pricing and availability depend on the home, required
            work, selected partners, materials and level of service.
          </p>
        </section>

        {/* US PRACTICAL DETAILS */}
        <section className="mt-20 rounded-[40px] bg-[#e9dfd2] p-8 shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            The details US buyers often discover too late
          </p>

          <h2 className="mt-5 max-w-5xl font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            We help you think through the practical life around the property.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Whether your residency plan should be explored before or after the property purchase",
              "Which independent adviser should review US-Spain tax and estate-planning implications",
              "Healthcare, insurance and prescriptions before your first long stay",
              "International moving, storage, customs and timing",
              "Pet transport, veterinary documentation and arrival planning",
              "Schools, childcare and family routines",
              "Vehicle, driving-license and day-to-day mobility questions",
              "US-versus-Spain electrical standards and which appliances are worth shipping",
              "Reliable high-speed internet and home-office setup",
              "Security, alarm, gates and access while the home is empty",
              "Property management, pool and garden care when you are in the US",
              "A local network for golf, padel, sailing, business and community life",
            ].map((item) => (
              <div key={item} className="rounded-[24px] bg-white/70 p-5">
                <p className="text-sm font-medium leading-relaxed text-[#1e2a3a]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 rounded-[40px] bg-[#1e2a3a] p-10 text-white md:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            One point of coordination in Spain
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Tell us where you are in your Buyer Journey and what still needs to be
            arranged before Spain feels like home.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Whether you are still planning the move from the US, need an introduction
            to immigration or cross-border specialists, already own a home, need
            independent purchase checks, or want help with relocation, renovation
            and Move-In Ready — we can discuss the next practical step.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-[0.7fr_1.3fr]">
            <a
              href="/contact"
              className="inline-flex min-h-[112px] items-center justify-center rounded-[28px] border border-white/35 px-8 py-6 text-center text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-[#1e2a3a]"
            >
              Use the contact form
            </a>

            <a
              href="https://wa.me/31683848239?text=Hello%20Nordic%20Move%20Spain%2C%20I%20would%20like%20to%20discuss%20my%20move%20to%20Spain%20and%20which%20Move-In%20Ready%20or%20relocation%20support%20I%20may%20need."
              target="_blank"
              rel="noreferrer"
              aria-label="Start a WhatsApp conversation with Nordic Move Spain"
              className="group flex min-h-[112px] items-center gap-5 rounded-[28px] bg-white px-6 py-5 text-[#1e2a3a] shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.24)] md:px-8"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#c8a063] text-white">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-7 w-7 fill-current"
                >
                  <path d="M16.04 3C8.87 3 3.05 8.78 3.05 15.91c0 2.28.6 4.51 1.75 6.47L3 29l6.82-1.77a13.03 13.03 0 0 0 6.22 1.58h.01C23.21 28.81 29 23.03 29 15.9 29 8.78 23.21 3 16.04 3Zm0 23.62h-.01a10.83 10.83 0 0 1-5.52-1.51l-.4-.24-4.05 1.05 1.08-3.93-.26-.4a10.7 10.7 0 0 1-1.65-5.68c0-5.92 4.85-10.74 10.82-10.74 5.96 0 10.81 4.82 10.81 10.74 0 5.92-4.85 10.71-10.82 10.71Zm5.94-8.02c-.33-.16-1.92-.94-2.22-1.05-.3-.11-.52-.16-.74.16-.22.33-.85 1.05-1.04 1.27-.19.22-.38.24-.71.08-.33-.16-1.38-.5-2.63-1.61a9.8 9.8 0 0 1-1.82-2.25c-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.7 0 1.59 1.17 3.13 1.33 3.35.16.22 2.3 3.48 5.57 4.88.78.33 1.38.53 1.86.68.78.25 1.49.21 2.05.13.63-.09 1.92-.78 2.19-1.54.27-.76.27-1.4.19-1.54-.08-.14-.3-.22-.63-.38Z" />
                </svg>
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs font-medium uppercase tracking-[0.25em] text-[#b88948]">
                  Direct via WhatsApp
                </span>
                <span className="mt-1 block font-serif text-2xl leading-tight">
                  Start a personal conversation
                </span>
                <span className="mt-1 block text-sm text-stone-500">
                  +31 6 83 84 82 39
                </span>
              </span>

              <span
                aria-hidden="true"
                className="text-2xl transition group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
