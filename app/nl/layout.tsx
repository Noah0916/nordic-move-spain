import Link from "next/link";
import type { ReactNode } from "react";

export default function DutchLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}

      <Link
        href="/nl"
        aria-label="Terug naar de Nederlandse homepage"
        className="fixed bottom-5 right-5 z-[100] flex items-center gap-2 rounded-full bg-[#1e2a3a] px-5 py-3 text-sm font-medium text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#c8a063]"
      >
        <span aria-hidden="true">←</span>
        <span>Naar de homepage</span>
      </Link>
    </>
  );
}