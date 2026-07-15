"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
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
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-2xl border border-stone-200 bg-[#f6f1ea] px-5 py-4 outline-none transition focus:border-[#c8a063]"
          placeholder="Ihr Name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          E-Mail-Adresse
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-2xl border border-stone-200 bg-[#f6f1ea] px-5 py-4 outline-none transition focus:border-[#c8a063]"
          placeholder="Ihre E-Mail-Adresse"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          Telefonnummer
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-2xl border border-stone-200 bg-[#f6f1ea] px-5 py-4 outline-none transition focus:border-[#c8a063]"
          placeholder="Ihre Telefonnummer"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          Nachricht
        </label>

        <textarea
          id="message"
          name="message"
          rows={7}
          required
          className="w-full resize-none rounded-2xl border border-stone-200 bg-[#f6f1ea] px-5 py-4 outline-none transition focus:border-[#c8a063]"
          placeholder="Erzählen Sie uns kurz von Ihren Plänen in Spanien."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#c8a063] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#b48a4f] disabled:opacity-60"
      >
        {loading ? "Wird gesendet..." : "Anfrage senden"}
      </button>

      {success && (
        <p className="text-sm text-green-600">
          Ihre Nachricht wurde erfolgreich gesendet.
        </p>
      )}

      {error && (
        <p className="text-sm text-red-600">
          Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder senden Sie uns direkt eine E-Mail.
        </p>
      )}
    </form>
  );
}