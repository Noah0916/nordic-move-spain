"use client";

import { usePathname } from "next/navigation";

export default function FloatingWhatsApp() {
  const pathname = usePathname();

  let label = "Chat with us";
  let message =
    "Hello Nordic Move Spain, I would like to know more about your services.";

  if (pathname.startsWith("/de")) {
    label = "Schreiben Sie uns";
    message =
      "Hallo Nordic Move Spain, ich möchte gerne mehr über Ihre Leistungen erfahren.";
  } else if (pathname.startsWith("/nl")) {
    label = "Stuur ons een bericht";
    message =
      "Hallo Nordic Move Spain, ik wil graag meer weten over jullie dienstverlening.";
  } else if (pathname.startsWith("/sv")) {
    label = "Kontakta oss";
    message =
      "Hej Nordic Move Spain, jag vill gärna veta mer om era tjänster.";
  }

  const whatsappUrl = `https://wa.me/31683848239?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="fixed bottom-24 right-6 z-[100] flex items-center gap-3 rounded-full bg-[#c8a063] px-5 py-4 text-sm font-medium text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#b48a4f] hover:shadow-2xl"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-6 w-6 fill-current"
      >
        <path d="M16.04 3C8.87 3 3.05 8.78 3.05 15.91c0 2.28.6 4.51 1.75 6.47L3 29l6.82-1.77a13.03 13.03 0 0 0 6.22 1.58h.01C23.21 28.81 29 23.03 29 15.9 29 8.78 23.21 3 16.04 3Zm0 23.62h-.01a10.83 10.83 0 0 1-5.52-1.51l-.4-.24-4.05 1.05 1.08-3.93-.26-.4a10.7 10.7 0 0 1-1.65-5.68c0-5.92 4.85-10.74 10.82-10.74 5.96 0 10.81 4.82 10.81 10.74 0 5.92-4.85 10.71-10.82 10.71Zm5.94-8.02c-.33-.16-1.92-.94-2.22-1.05-.3-.11-.52-.16-.74.16-.22.33-.85 1.05-1.04 1.27-.19.22-.38.24-.71.08-.33-.16-1.38-.5-2.63-1.61a9.8 9.8 0 0 1-1.82-2.25c-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.7 0 1.59 1.17 3.13 1.33 3.35.16.22 2.3 3.48 5.57 4.88.78.33 1.38.53 1.86.68.78.25 1.49.21 2.05.13.63-.09 1.92-.78 2.19-1.54.27-.76.27-1.4.19-1.54-.08-.14-.3-.22-.63-.38Z" />
      </svg>

      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}