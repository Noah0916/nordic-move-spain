"use client";

import { usePathname } from "next/navigation";

export default function BackToHomeButton() {
const pathname = usePathname();

const isDutch = pathname.startsWith("/nl");
const isGerman = pathname.startsWith("/de");

const isHomepage =
pathname === "/" ||
pathname === "/nl" ||
pathname === "/de";

if (isHomepage) {
return null;
}

const href = isDutch ? "/nl" : isGerman ? "/de" : "/";

const label = isDutch
? "Terug naar de homepage"
: isGerman
? "Zurück zur Startseite"
: "Back to homepage";

return ( <div className="fixed bottom-6 right-6 z-50"> <a
     href={href}
     className="inline-block rounded-full bg-[#1e2a3a] px-6 py-3 text-sm text-white shadow-lg transition hover:bg-[#2b3a4d]"
   >
{label} </a> </div>
);
}
