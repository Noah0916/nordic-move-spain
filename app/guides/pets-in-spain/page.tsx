const faqItems = [
  {
    question: "Can I take my dog or cat to Spain from another EU country?",
    answer:
      "Yes. Dogs, cats and ferrets travelling to Spain from another EU country normally need a readable microchip, a valid rabies vaccination and an EU pet passport. The microchip must be implanted before, or at the same time as, the rabies vaccination.",
  },
  {
    question: "How old must a puppy or kitten be to enter Spain?",
    answer:
      "Spain does not accept unvaccinated dogs, cats or ferrets. A first rabies vaccination can normally be given from 12 weeks of age, followed by a waiting period of at least 21 days. This means the usual minimum age for entry is 15 weeks.",
  },
  {
    question: "What do I need when travelling from England, Scotland or Wales?",
    answer:
      "Follow the current GOV.UK pet-travel process. Your pet must be microchipped and vaccinated against rabies, and you will normally need an animal health certificate issued by an authorised vet before entering the EU. Always recheck the official rules before booking.",
  },
  {
    question: "Can my pet fly in the aircraft cabin?",
    answer:
      "Possibly. Each airline sets its own carrier dimensions, weight limits, route restrictions and fees. Cabin places for pets are limited, so contact the airline before buying a non-refundable ticket.",
  },
  {
    question: "Do I need to register my dog after moving to Spain?",
    answer:
      "Local and regional requirements apply after arrival. A Spanish vet can check the microchip, health record and local registration requirements. Some municipalities also require a municipal pet census. Check the rules of the town where you will live.",
  },
  {
    question: "Are dogs welcome on beaches and in restaurants in Spain?",
    answer:
      "Rules vary by municipality, beach, season and business. Some towns have designated dog beaches or seasonal access, while many restaurants welcome dogs on outdoor terraces. Check local signs and municipal rules rather than assuming access is permitted.",
  },
  {
    question: "Are there extra rules for certain dogs?",
    answer:
      "Yes. Dogs classified as potentially dangerous may require a municipal licence, registration, liability insurance and specific handling measures such as a muzzle and short non-extendable lead in public. Breed and classification rules can also vary locally.",
  },
];

const officialSources = [
  {
    title: "Spanish Ministry of Agriculture — travelling with dogs, cats and ferrets",
    href: "https://www.mapa.gob.es/es/ganaderia/temas/comercio-exterior-ganadero/desplazamiento-animales-compania/viajar-perros-gatos-hurones",
  },
  {
    title: "Your Europe — EU rules for travelling with pets",
    href: "https://europa.eu/youreurope/citizens/travel/carry/pets-and-other-animals/index_en.htm",
  },
  {
    title: "GOV.UK — taking a pet to an EU country",
    href: "https://www.gov.uk/taking-your-pet-abroad",
  },
  {
    title: "Aena — flying with dogs, cats and ferrets",
    href: "https://www.aena.es/en/passengers/travellers/travelling-with-animals/dogs-cats-ferrets.html",
  },
];

export const metadata = {
  title: "Moving to Spain with Pets: Dogs, Cats & Pet Travel Rules",
  description:
    "A practical guide to moving to Spain with pets. Learn about microchips, rabies vaccinations, EU pet passports, animal health certificates, flying, local registration and life with a dog or cat on the Costa Blanca.",
  keywords: [
    "moving to Spain with pets",
    "taking a dog to Spain",
    "bringing a cat to Spain",
    "Spain pet travel requirements",
    "pet passport Spain",
    "animal health certificate Spain",
    "moving to Costa Blanca with a dog",
    "dog friendly Costa Blanca",
    "relocating to Spain with pets",
    "flying with pets to Spain",
  ],
  alternates: {
    canonical: "/guides/pets-in-spain",
  },
  openGraph: {
    title: "Moving to Spain with Pets | Nordic Move Spain",
    description:
      "Everything international buyers and future residents need to know about bringing a dog, cat or ferret to Spain and settling on the Costa Blanca.",
    type: "article",
    locale: "en_GB",
    siteName: "Nordic Move Spain",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moving to Spain with Pets",
    description:
      "Microchips, rabies vaccinations, travel documents, flights, registration and everyday life with pets in Spain.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Moving to Spain with Pets: Dogs, Cats and Pet Travel Rules",
      description:
        "A practical guide to pet travel documents, entry requirements and settling in Spain with a dog, cat or ferret.",
      inLanguage: "en-GB",
      author: {
        "@type": "Organization",
        name: "Nordic Move Spain",
      },
      publisher: {
        "@type": "Organization",
        name: "Nordic Move Spain",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "/guides/pets-in-spain",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function PetsInSpainGuidePage() {
  return (
    <main className="overflow-hidden bg-[#f6f1ea] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#1e2a3a] px-8 py-28 text-white md:py-36">
        <div className="absolute inset-0 -z-10 opacity-25">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#c8a063] blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d9ae69]">
            Practical relocation guide
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.98] md:text-7xl">
            Moving to Spain with your pet.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/85">
            From microchips and rabies vaccinations to flights, local vets and
            finding a pet-friendly home: this guide explains the practical steps
            for bringing a dog, cat or ferret to Spain.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#travel-checklist"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              View the travel checklist
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              Discuss your move
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Start early
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              The paperwork is manageable when you prepare it in the right order.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-stone-600">
            <p>
              Spain welcomes pets, but the rules depend on where you travel from,
              the species, the animal&apos;s age and whether the journey is a
              private move or a commercial transfer. Dogs, cats and ferrets are
              covered by harmonised EU pet-travel rules.
            </p>

            <p>
              The safest approach is to speak to your vet before booking travel.
              Confirm the microchip number, rabies vaccination date and travel
              document first. Then check the airline, ferry company or route
              requirements separately.
            </p>

            <p>
              This guide focuses on non-commercial travel with up to five dogs,
              cats or ferrets. Birds, rabbits, reptiles and other species have
              different requirements and should be checked with the Spanish
              authorities.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ROUTES */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: "From the EU",
                title: "EU pet passport",
                text:
                  "Your pet normally needs a readable microchip, a valid rabies vaccination and a correctly completed EU pet passport.",
              },
              {
                label: "From Great Britain",
                title: "Animal health certificate",
                text:
                  "Travellers from England, Scotland and Wales should follow current GOV.UK guidance and normally arrange an animal health certificate before EU entry.",
              },
              {
                label: "From other non-EU countries",
                title: "Check the country category",
                text:
                  "An official health certificate and entry through an authorised travellers’ point may be required. Some countries also require a rabies antibody test and additional waiting time.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[32px] bg-white p-8 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  {item.label}
                </p>
                <h3 className="mt-4 font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section id="travel-checklist" className="px-8 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="bg-[#1e2a3a] p-10 text-white md:p-14">
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                Before you travel
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Your essential pet travel checklist.
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-white/75">
                Complete the health and identity requirements before confirming
                a non-refundable journey. The order matters: the microchip must
                be recorded before the first rabies vaccination is considered
                valid for travel.
              </p>
            </div>

            <div className="p-10 md:p-14">
              <div className="grid gap-5 md:grid-cols-2">
                {[
                  [
                    "1. Check the microchip",
                    "Ask your vet to scan it, confirm the number and make sure the same number appears in every travel document.",
                  ],
                  [
                    "2. Confirm rabies cover",
                    "The vaccination must be valid on the travel date. After a first vaccination, a waiting period of at least 21 days normally applies.",
                  ],
                  [
                    "3. Arrange the correct document",
                    "Use an EU pet passport for qualifying EU travel or the required official health certificate when arriving from a non-EU country.",
                  ],
                  [
                    "4. Check the route",
                    "Confirm the authorised entry point, airline or ferry rules, carrier dimensions, temperature restrictions and check-in time.",
                  ],
                  [
                    "5. Carry originals",
                    "Travel with original documents, vaccination records, ownership details and any written authorisation if another person accompanies the pet.",
                  ],
                  [
                    "6. Plan the return journey",
                    "Return rules may be different. Check them before leaving home, especially when returning to Great Britain or travelling onward.",
                  ],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-[24px] bg-[#f6f1ea] p-6">
                    <h3 className="font-serif text-2xl text-[#1e2a3a]">
                      {title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-stone-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EU RULES */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Travelling from the EU
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Microchip, rabies vaccination and EU pet passport.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-stone-600">
            <p>
              For a dog, cat or ferret entering Spain from another EU country,
              the core requirements are a microchip, a valid rabies vaccination
              and an EU pet passport completed by an authorised vet.
            </p>

            <p>
              Spain does not allow an exemption for unvaccinated young dogs,
              cats or ferrets. The animal must normally be at least 12 weeks old
              for the first rabies vaccination, followed by a minimum 21-day
              waiting period. The usual minimum entry age is therefore 15 weeks.
            </p>

            <p>
              Private pet travel normally covers up to five animals and must not
              involve a sale or change of ownership. The owner or authorised
              person should accompany the pet; additional documentation and
              timing rules apply when they travel separately.
            </p>
          </div>
        </div>
      </section>

      {/* UK AND NON-EU */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <article className="rounded-[36px] bg-[#e9dfd2] p-10 md:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
              England, Scotland and Wales
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
              Allow time for the animal health certificate.
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-stone-700">
              Your pet must be microchipped and vaccinated against rabies.
              Current GOV.UK guidance says residents of Great Britain should
              arrange an animal health certificate for travel to the EU. The
              certificate is time-limited, so book the veterinary appointment
              around your confirmed travel date.
            </p>

            <p className="mt-5 leading-relaxed text-stone-600">
              Northern Ireland follows a different process. Always use the
              official guidance that applies to the place you are travelling
              from.
            </p>
          </article>

          <article className="rounded-[36px] bg-white p-10 shadow-sm md:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
              Other non-EU countries
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a]">
              The country of departure determines the extra steps.
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-stone-700">
              You may need an official animal health certificate, a written
              declaration and entry through an authorised travellers&apos; point.
              If the departure country is not on the relevant EU list, a rabies
              antibody test may also be required.
            </p>

            <p className="mt-5 leading-relaxed text-stone-600">
              When a rabies blood test is required, strict vaccination,
              blood-sampling and waiting periods apply. Start several months
              before the intended move and confirm the latest category of your
              departure country with the Spanish authorities.
            </p>
          </article>
        </div>
      </section>

      {/* TRANSPORT */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Choosing how to travel
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              Flying, driving or taking the ferry to Spain.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "By air",
                text:
                  "Airlines decide whether pets travel in the cabin or hold. Weight limits, carrier sizes, breed restrictions and seasonal heat policies vary. Reserve the pet space before finalising your own ticket.",
              },
              {
                title: "By car",
                text:
                  "Plan regular water and rest stops, secure the animal safely and never leave a pet in a parked vehicle. Check the pet-entry rules for every country on the route, not only Spain.",
              },
              {
                title: "By ferry",
                text:
                  "Pet cabins, kennels and deck-access rules differ by vessel. Check whether your animal can remain with you, what equipment is required and where exercise breaks are permitted.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] border border-stone-200 bg-white p-8"
              >
                <h3 className="font-serif text-3xl text-[#1e2a3a]">
                  {item.title}
                </h3>
                <p className="mt-5 leading-relaxed text-stone-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SETTLING */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#e9dfd2] p-10 md:p-14 lg:p-16">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                After arrival
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
                Help your pet settle into life in Spain.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                Arrange an appointment with a local vet soon after moving. The
                vet can scan the microchip, review vaccinations and parasite
                prevention, explain regional registration and help transfer the
                animal&apos;s records where needed.
              </p>

              <p>
                Municipal requirements differ. For example, Alicante requires
                dogs that spend more than three months per year in the city to
                be entered in the municipal pet census. Check the town hall rules
                for your actual municipality.
              </p>

              <p>
                Build a new routine gradually. Summer heat can change suitable
                walking times, surfaces become hot and access rules for beaches,
                parks, transport and shared residential areas vary locally.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Local vet", "Choose a clinic before you need urgent help."],
              ["Microchip details", "Keep your Spanish address and phone number current."],
              ["Home and garden", "Check shade, fencing, balconies and outdoor safety."],
              ["Local rules", "Confirm leads, beaches, parks, transport and registration."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[24px] bg-white/80 p-6">
                <h3 className="font-serif text-2xl text-[#1e2a3a]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOME SELECTION */}
      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Finding a pet-friendly home
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
              The right property should also work for your pet&apos;s daily life.
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-stone-600">
              A beautiful villa or apartment is not automatically practical for
              a dog or cat. Consider the surrounding roads, walking routes,
              garden boundaries, stairs, lift access, balcony safety, shade and
              distance to a veterinary clinic.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              In an apartment complex, review the community rules before buying
              or renting. In a rural property, check fencing, access, nearby
              livestock and how easily you can reach everyday services.
            </p>

            <a
              href="/regions"
              className="mt-9 inline-block rounded-full bg-[#1e2a3a] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2b3a4d]"
            >
              Explore Costa Blanca regions
            </a>
          </div>

          <div className="rounded-[36px] bg-[#1e2a3a] p-10 text-white md:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
              Add this to your property checklist
            </p>

            <ul className="mt-8 space-y-4 text-lg leading-relaxed text-white/80">
              {[
                "Safe garden boundaries and gates",
                "Shade and cool indoor areas",
                "Walkable surroundings away from heavy traffic",
                "Practical floors, stairs, lifts and entrances",
                "Community rules for pets in shared buildings",
                "Nearby veterinary and emergency care",
                "Access to parks, trails or permitted dog areas",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c8a063]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SPECIAL DOG RULES */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-amber-900/10 bg-amber-50 p-10 md:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-800">
            Important for some dog owners
          </p>

          <h2 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
            Check potentially dangerous dog rules before moving.
          </h2>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-stone-700">
            Spain has additional rules for dogs classified as potentially
            dangerous. Depending on the dog and municipality, these can include
            a local licence, registration, liability insurance and mandatory
            handling measures in public. Do not rely only on the breed name:
            crosses, physical characteristics and previous behaviour may also be
            relevant. Confirm the requirements with the town hall before arrival.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Frequently asked questions
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1e2a3a] md:text-5xl">
            What people ask before moving to Spain with a pet.
          </h2>

          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[24px] bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none pr-8 font-serif text-2xl text-[#1e2a3a]">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-4xl leading-relaxed text-stone-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
            Check the official rules before travel
          </p>

          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600">
            Pet travel rules, entry-point lists and airline conditions can
            change. Recheck the official sources shortly before departure and
            ask your vet to confirm that the documents match your exact journey.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {officialSources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[20px] border border-stone-200 p-5 text-sm font-medium text-[#1e2a3a] transition hover:border-[#c8a063]"
              >
                {source.title} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] p-12 text-white md:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            Moving with more confidence
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Find a home that works for you and your pet.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/80">
            Nordic Move helps international buyers compare regions, select
            suitable properties and coordinate the journey from first
            orientation to arrival on the Costa Blanca.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f]"
            >
              Plan a consultation
            </a>

            <a
              href="/guides"
              className="rounded-full border border-white px-8 py-4 text-sm text-white transition hover:bg-white hover:text-[#1e2a3a]"
            >
              View all buyer guides
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}