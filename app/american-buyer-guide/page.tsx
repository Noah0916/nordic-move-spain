"use client";

import { useState, type FormEvent } from "react";

export default function AmericanBuyerGuidePage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/relocation-assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: "",
          answers: {
            request_type: "American Buyer Guide",
            guide: "2026 American Buyer Guide",
            source: "American Buyer Guide landing page",
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <section className="bg-[#1e2a3a] px-8 py-28 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
            2026 U.S. Buyer Edition
          </p>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Buying property in Spain from the United States?
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            Request our complimentary American Buyer&apos;s Guide to buying
            property on the Costa Blanca.
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/70">
            Purchase costs, NIE, mortgages, independent legal and technical
            checks, U.S.–Spain tax planning, Beckham Law, residency,
            healthcare, pets, relocation and much more.
          </p>
        </div>
      </section>

      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Free American Buyer Guide
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1e2a3a]">
              Know the process before you book the flight.
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-stone-600">
              Buying from the United States involves more than finding a
              beautiful property. Our guide helps you understand what needs to
              be arranged before, during and after your Spanish purchase.
            </p>

            <div className="mt-10 space-y-4 text-stone-700">
              <p>✓ Complete buying timeline</p>
              <p>✓ NIE and Spanish administration</p>
              <p>✓ Purchase taxes and real buying costs</p>
              <p>✓ Spanish mortgages for U.S. buyers</p>
              <p>✓ Independent lawyer and technical checks</p>
              <p>✓ U.S.–Spain tax considerations</p>
              <p>✓ Beckham Law explained</p>
              <p>✓ Residency and healthcare</p>
              <p>✓ Moving money and belongings</p>
              <p>✓ Moving pets from the United States</p>
              <p>✓ Costa Blanca North area guidance</p>
            </div>
          </div>

          <div>
            {!success ? (
              <div className="rounded-[36px] bg-white p-10 shadow-lg">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Complimentary guide
                </p>

                <h2 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
                  Request your free guide
                </h2>

                <p className="mt-5 leading-relaxed text-stone-600">
                  Leave your first name and email address and we will send the
                  guide to you personally.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      First name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your first name"
                      className="w-full rounded-2xl border border-stone-200 px-5 py-4 outline-none focus:border-[#c8a063]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-stone-200 px-5 py-4 outline-none focus:border-[#c8a063]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-[#c8a063] px-8 py-4 font-medium text-white transition hover:bg-[#b48a4f] disabled:opacity-60"
                  >
                    {loading
                      ? "Sending request..."
                      : "Request the free American Buyer’s Guide"}
                  </button>

                  {error && (
                    <p className="text-sm text-red-600">{error}</p>
                  )}

                  <p className="text-xs leading-relaxed text-stone-500">
                    Your details are used to process your guide request. See our{" "}
                    <a
                      href="/privacy-policy"
                      className="underline underline-offset-4"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </div>
            ) : (
              <div className="rounded-[36px] bg-white p-10 shadow-lg">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c8a063]">
                  Request received
                </p>

                <h2 className="mt-5 font-serif text-4xl text-[#1e2a3a]">
                  Thank you.
                </h2>

                <p className="mt-5 leading-relaxed text-stone-600">
                  We have received your request for the 2026 American
                  Buyer&apos;s Guide.
                </p>

                <p className="mt-4 leading-relaxed text-stone-600">
                  We will send the guide personally to the email address you
                  provided.
                </p>

                <div className="mt-8 border-t border-stone-200 pt-8">
                  <p className="font-serif text-2xl text-[#1e2a3a]">
                    Planning to buy on the Costa Blanca?
                  </p>

                  <p className="mt-3 leading-relaxed text-stone-600">
                    Discover which areas best match your lifestyle, budget and
                    future plans.
                  </p>

                  <a
                    href="/relocation-assessment"
                    className="mt-6 inline-block rounded-full border border-[#1e2a3a] px-8 py-4 font-medium text-[#1e2a3a] transition hover:bg-[#1e2a3a] hover:text-white"
                  >
                    Start your complimentary Area Match
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}