"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }),
    });

    const data = await response.json();

    if (data.success) {
      setSuccess(true);
      e.currentTarget.reset();
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#f6f1ea] px-8 py-32 text-stone-900">
      <section className="mx-auto max-w-3xl rounded-[36px] bg-white p-12 shadow-sm">
        <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
          Contact
        </p>

        <h1 className="mt-5 font-serif text-5xl leading-tight">
          Schedule a Personal Consultation
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-stone-600">
          Send us a message and we will get back to you personally.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full rounded-2xl border border-stone-200 px-5 py-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full rounded-2xl border border-stone-200 px-5 py-4"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your phone number"
            className="w-full rounded-2xl border border-stone-200 px-5 py-4"
          />

          <textarea
            name="message"
            placeholder="Tell us about your plans"
            rows={6}
            required
            className="w-full rounded-2xl border border-stone-200 px-5 py-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-[#1e2a3a] px-8 py-4 text-white"
          >
            {loading ? "Sending..." : "Send request"}
          </button>

          {success && (
            <p className="text-green-600">
              Your message has been sent successfully.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}