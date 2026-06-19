"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EnglishHomeButton() {
  const pathname = usePathname();

  // Niet tonen op de Nederlandse of Duitse website.
  if (pathname.startsWith("/nl") || pathname.startsWith("/de")) {
    return null;
  }

  // Niet tonen op de Engelse homepage zelf.
  if (pathname === "/") {
    return null;
  }

  return (
    <Link
      href="/"
      aria-label="Return to the English homepage"
      className="fixed bottom-5 right-5 z-[100] flex items-center gap-2 rounded-full bg-[#1e2a3a] px-5 py-3 text-sm font-medium text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#c8a063]"
    >
      <span aria-hidden="true">←</span>
      <span>Back to homepage</span>
    </Link>
  );
}