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
            Start with clarity
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Arrive in a home that feels considered, not unfinished.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80">
            From style briefing and visual moodboard to lifestyle concept,
            contractor coordination, furniture sourcing, lighting, curtains,
            installation, styling and final move-in preparation — we help make
            the final step into your Costa Blanca home calmer and more
            organised.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
          >
            Discuss Move-In Ready support
          </a>
        </div>
      </section>
    </main>
  );
}
