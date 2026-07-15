import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackToHomeButton from "./components/BackToHomeButton";

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const metadata: Metadata = {
metadataBase: new URL("https://nordicmovespain.com"),
title: {
default: "Nordic Move Spain | Buy Property on Costa Blanca North",
template: "%s | Nordic Move Spain",
},
description:
"Nordic Move Spain helps Dutch, German, Swiss and international buyers choose the right area, buy safely and settle confidently on Costa Blanca North.",
keywords: [
"buy property Costa Blanca North",
"buy property Spain",
"Costa Blanca North property",
"Moraira property",
"Jávea property",
"Dénia property",
"retire in Spain",
"Dutch buyers Spain",
"German buyers Spain",
"Swiss buyers Spain",
],
authors: [{ name: "Nordic Move Spain" }],
creator: "Nordic Move Spain",
publisher: "Nordic Move Spain",
openGraph: {
title: "Nordic Move Spain | Buy Property on Costa Blanca North",
description:
"Area guidance, buyer discovery trips and practical support for international buyers moving to Costa Blanca North.",
url: "https://nordicmovespain.com",
siteName: "Nordic Move Spain",
images: [
{
url: "/images/laatste-homepage.png",
width: 1200,
height: 630,
alt: "Nordic Move Spain Costa Blanca North",
},
],
locale: "en_US",
type: "website",
},
twitter: {
card: "summary_large_image",
title: "Nordic Move Spain | Buy Property on Costa Blanca North",
description:
"Guidance for international buyers choosing where and how to buy property on Costa Blanca North.",
images: ["/images/laatste-homepage.png"],
},
robots: {
index: true,
follow: true,
},
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}><body className="min-h-full flex flex-col">{children}<BackToHomeButton /></body></html>
);
}
