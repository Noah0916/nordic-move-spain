import VillasGrid from "./VillasGrid";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
        alternates: { canonical: "/villas" },
      }
    : {}),
  title: "Selected Villas on the Costa Blanca North | Nordic Move Spain",
  description:
    "Explore a curated selection of villas across the Costa Blanca North. Nordic Move Spain represents and advises the buyer and searches across multiple property partners and the wider market.",
};

export default function VillasPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#1e2a3a]/95 px-4 py-4 backdrop-blur-md md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-sm font-medium tracking-wide text-white">
            Nordic Move Spain
          </a>

          <div className="hidden items-center gap-7 text-sm text-white md:flex">
            <a href="/">Home</a>
            <a href="/regions" className="transition hover:text-white/70">Regions</a>
            <a href="/villas" className="border-b border-[#c8a063] pb-1">Villas</a>
            <a href="/services" className="transition hover:text-white/70">Services</a>
            <a href="/guides" className="transition hover:text-white/70">Guides</a>
            <a href="/about-us" className="transition hover:text-white/70">About us</a>
            <a href="/contact" className="transition hover:text-white/70">Contact</a>
          </div>

          <a
            href="/contact"
            className="rounded-full bg-[#c8a063] px-5 py-2.5 text-xs font-medium text-white transition hover:bg-[#b48a4f] md:px-6 md:text-sm"
          >
            Book a call
          </a>
        </div>
      </nav>

      <section className="px-8 pb-16 pt-40 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">Property selection</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#1e2a3a] md:text-6xl">
            Selected villas from across our partner network.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-stone-600">
            Nordic Move Spain is not tied to one agency or one portfolio. We work with multiple
            property professionals across the Costa Blanca North and search the wider market on
            behalf of our buyers. The homes below are a curated selection, not the limit of what
            we can search for you.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#1e2a3a]">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">54 selected villas</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Multiple property partners</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Buyer-side guidance</span>
          </div>
        </div>
      </section>

      <section className="px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <VillasGrid />
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#1e2a3a] px-10 py-14 text-white shadow-sm md:px-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">A wider search when needed</p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Cannot find the right one here? We can search beyond this selection.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            Tell us what you are looking for. We can search across agencies, our professional
            network and additional market opportunities on your behalf.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/contact" className="rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white">
              Tell us what you are looking for
            </a>
            <a href="mailto:willeke@nordicmovespain.com" className="rounded-full border border-white px-8 py-4 text-sm text-white">
              willeke@nordicmovespain.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}