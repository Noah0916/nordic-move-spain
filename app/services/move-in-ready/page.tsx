export const metadata = {
  title: "Move-In Ready Support | Nordic Move Spain",
  description:
    "Move-In Ready support for international buyers on the Costa Blanca: style briefing, visual moodboard, lifestyle concept, contractor feasibility, furniture sourcing, lighting, curtains, installation, styling and move-in preparation.",
};

export default function MoveInReadyPage() {
  const images = [
    {
      src: "/images/move-in-ready-costal.png",
      title: "Coastal Calm",
      text:
        "A soft, elegant coastal direction with natural materials, muted tones, relaxed comfort and understated luxury.",
      alt: "Coastal calm interior concept for Move-In Ready support on the Costa Blanca",
    },
    {
      src: "/images/move-in-ready-ibiza.png",
      title: "Ibiza Soho Lounge",
      text:
        "A warm and sociable Mediterranean style with soft whites, rustic wood, woven textures, subtle colour accents and an elegant indoor-outdoor feeling.",
      alt: "Ibiza Soho lounge interior concept for Move-In Ready support on the Costa Blanca",
    },
    {
      src: "/images/move-in-ready-kitchen.png",
      title: "Contemporary Coastal Kitchen",
      text:
        "A lighter and more architectural direction with clean lines, large windows, pale woods, refined finishes and a calm coastal atmosphere.",
      alt: "Contemporary coastal kitchen concept for Move-In Ready support on the Costa Blanca",
    },
    {
      src: "/images/move-in-ready-mediterranean-warmth.png",
      title: "Mediterranean Warmth",
      text:
        "A relaxed Mediterranean lifestyle direction shaped around terraces, light, sea views, outdoor dining and easy everyday living.",
      alt: "Mediterranean warmth and indoor-outdoor living concept for Move-In Ready support on the Costa Blanca",
    },
  ];

  const steps = [
    {
      title: "Style briefing",
      text:
        "We start with a personal style briefing to understand how you want to live in the home. This is not only about taste, but also about daily rhythm, family use, guests, privacy, maintenance, comfort and the atmosphere you want to create.",
    },
    {
      title: "Visual moodboard",
      text:
        "Based on your preferences, we create a visual moodboard with colours, materials, textures, furniture references, lighting ideas and indoor-outdoor inspiration. This gives a clear direction before decisions are made or money is spent.",
    },
    {
      title: "Lifestyle concept",
      text:
        "We turn the moodboard into a lifestyle concept for the property. The concept connects the look and feel of the home with how it should function in real life: relaxing, hosting, working from Spain, outdoor dining, family visits or low-maintenance living.",
    },
    {
      title: "Contractor / technical feasibility",
      text:
        "If renovation, installation or technical work is needed, we bring the right local contractor or specialist to the table early. This helps check what is realistic for the property, budget, timing, permissions, materials and practical execution.",
    },
    {
      title: "Furniture sourcing",
      text:
        "Once the direction is clear, we help coordinate furniture sourcing through suitable suppliers and local partners. The aim is to create a coherent home, not a collection of random purchases.",
    },
    {
      title: "Lighting",
      text:
        "Lighting has a major effect on how the home feels. We help think through practical lighting, atmosphere lighting, statement pieces, outdoor lighting and the details that make the home feel warm and finished.",
    },
    {
      title: "Curtains",
      text:
        "Curtains and window treatments are often left too late, but they strongly affect privacy, comfort, acoustics and atmosphere. We help coordinate the right direction and local execution where needed.",
    },
    {
      title: "Installation",
      text:
        "Deliveries, assembly and installation can be difficult to manage from abroad. We help coordinate these practical steps with trusted local partners so the process is more structured and less fragmented.",
    },
    {
      title: "Styling",
      text:
        "The final styling layer brings the home together: textiles, selected accessories, outdoor details, bedding, tableware, plants and the smaller choices that make the house feel personal rather than unfinished.",
    },
    {
      title: "Move-in preparation",
      text:
        "Before arrival, we help coordinate the final practical details so the home feels prepared: basic setup, final checks, practical items, handover points and a smoother landing into daily life on the Costa Blanca.",
    },
  ];

  return (
    <main className="bg-[#f6f1ea] px-8 py-28 text-stone-900">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
          Soft Landing &amp; Move-In Ready
        </p>

        <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
          Move-In Ready Support
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-relaxed text-stone-600">
          After buying a property on the Costa Blanca, many international buyers
          do not want to spend months organising contractors, furniture stores,
          lighting, curtains, deliveries, installation and styling from abroad.
        </p>

        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
          Move-In Ready support helps turn the property into a home that feels
          considered, practical and prepared before arrival. We help shape the
          interior direction, create a visual concept and coordinate the right
          local partners for the practical execution.
        </p>

        {/* AFTER THE KEY HANDOVER */}
        <section className="mt-16 rounded-[40px] bg-[#1e2a3a] p-8 text-white shadow-sm md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            After the key handover
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            We remain involved after the purchase.
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-relaxed text-white/80">
            Buying the property is often only the beginning. Electricity, water,
            internet and insurance may still need to be arranged. You may also
            need an international moving company, temporary storage or vehicle
            transport. Garden and pool maintenance, air conditioning, heating,
            solar panels, renovation and interior furnishing all require reliable
            local partners and clear agreements.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Nordic Move Spain helps organise these steps in a clear and structured
            way. We speak Spanish, understand the local way of working and find
            suitable professionals for your situation. We request and compare
            quotations, coordinate appointments and keep track of progress.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            You do not have to spend months searching for reliable suppliers or
            repeatedly explaining your wishes. You communicate with one fixed
            point of contact, while we help ensure that the selected parties know
            what needs to happen, when it needs to happen and who is responsible.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            For renovation, we work with a selected, officially registered
            contractor with its own execution team and qualified architects and
            technical architects. You remain free to appoint your own contractor
            or other professionals.
          </p>

          <p className="mt-6 max-w-4xl text-lg font-medium leading-relaxed text-[#d7bd94]">
            Choose the complete Buyer Journey or only the services you need —
            from buyer guidance and independent checks to relocation, Home Setup,
            renovation and interior styling.
          </p>
        </section>

        {/* INTERIOR CONCEPT IMAGES */}
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
                  Concept visual
                </div>
              </div>

              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  Interior direction
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
          The images shown here are interior concept visuals for inspiration
          only. They are not actual listings or completed client projects. Final
          design, timing and execution depend on the property, budget,
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
            Move-In Ready support is tailored to each property and client.
            Scope, timing, pricing and availability depend on the home, required
            work, selected partners, materials and service level.
          </p>
        </section>

        <div className="mt-16 rounded-[40px] bg-[#1e2a3a] p-10 text-white md:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Personal support at every step
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Tell us where you need support in your Buyer Journey.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            Contact us and tell us which service or step you need help with.
            Whether you are still choosing the right area, have found a property,
            need independent purchase checks or want support with relocation,
            renovation and Move-In Ready preparation, we will discuss the most
            suitable next step with you.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-[0.7fr_1.3fr]">
            <a
              href="/contact"
              className="inline-flex min-h-[112px] items-center justify-center rounded-[28px] border border-white/35 px-8 py-6 text-center text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-[#1e2a3a]"
            >
              Use the contact form
            </a>

            <a
              href="https://wa.me/31683848239?text=Hello%20Nordic%20Move%20Spain%2C%20I%20would%20like%20to%20discuss%20which%20service%20or%20step%20in%20the%20Buyer%20Journey%20I%20need%20help%20with."
              target="_blank"
              rel="noreferrer"
              aria-label="Start a direct WhatsApp conversation with Nordic Move Spain"
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
                  Direct WhatsApp
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