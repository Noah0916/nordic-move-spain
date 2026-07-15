"use client";

import { useState } from "react";

type Region = {
  href: string;
  title: string;
  label: string;
  text1: string;
  text2: string;
  images: string[];
  safeFallback: string;
};

function RegionImage({
  region,
}: {
  region: Region;
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [useSafeFallback, setUseSafeFallback] = useState(false);

  const currentImage = useSafeFallback
    ? region.safeFallback
    : region.images[imageIndex];

  return (
    <div className="relative h-80 w-full overflow-hidden bg-[#e9dfd2]">
      <img
        src={currentImage}
        alt={`${region.title} Costa Blanca North`}
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
        onError={() => {
          const nextIndex = imageIndex + 1;

          if (!useSafeFallback && nextIndex < region.images.length) {
            setImageIndex(nextIndex);
            return;
          }

          if (!useSafeFallback) {
            setUseSafeFallback(true);
          }
        }}
      />
    </div>
  );
}

export default function RegionsPage() {
  const regions: Region[] = [
    {
      href: "/regions/moraira",
      title: "Moraira",
      label: "Calm · Elegant · Residential",
      images: [
        "/images/moraira.png",
        "/images/moraira.jpg",
        "/images/moraira.jpeg",
        "/images/moraira.webp",
        "/images/Moraira.png",
        "/images/Moraira.jpg",
        "/images/MORAIRA.png",
        "/images/MORAIRA.jpg",
      ],
      safeFallback: "/images/discover-card.png",
      text1:
        "Moraira is one of the most refined and peaceful coastal towns on Costa Blanca North, popular among German, Dutch, Scandinavian and international buyers seeking sea views, privacy and a calmer Mediterranean lifestyle.",
      text2:
        "The area is known for luxury villas, boutique atmosphere, beautiful coves and elegant residential urbanisations including El Portet, Pla del Mar and Benimeit.",
    },
    {
      href: "/regions/javea",
      title: "Jávea",
      label: "Vibrant · International · Lifestyle",
      images: [
        "/images/javea.png",
        "/images/javea.jpg",
        "/images/javea.jpeg",
        "/images/javea.webp",
        "/images/jávea.png",
        "/images/jávea.jpg",
        "/images/Javea.png",
        "/images/Javea.jpg",
        "/images/Jávea.png",
        "/images/Jávea.jpg",
        "/images/xabia.png",
        "/images/xabia.jpg",
      ],
      safeFallback: "/images/discovery2.png",
      text1:
        "Jávea offers a more vibrant and active Mediterranean lifestyle with beaches, restaurants, sports clubs, beach clubs and strong year-round international energy.",
      text2:
        "Popular among international families, entrepreneurs, remote workers and active retirees looking for a younger and more social atmosphere compared to quieter coastal towns.",
    },
    {
      href: "/regions/altea",
      title: "Altea",
      label: "Artistic · Elegant · Peaceful",
      images: [
        "/images/altea.png",
        "/images/altea.jpg",
        "/images/altea.jpeg",
        "/images/altea.webp",
        "/images/Altea.png",
        "/images/Altea.jpg",
        "/images/ALTEA.png",
        "/images/ALTEA.jpg",
      ],
      safeFallback: "/images/area-match.png",
      text1:
        "Altea is known for its whitewashed old town, artistic atmosphere, sea views and refined Mediterranean charm.",
      text2:
        "It attracts buyers looking for beauty, culture, restaurants, privacy and a more elegant coastal lifestyle.",
    },
    {
      href: "/regions/benissa",
      title: "Benissa",
      label: "Authentic · Countryside · Coastal coves",
      images: [
        "/images/benissa.png",
        "/images/benissa.jpg",
        "/images/benissa.jpeg",
        "/images/benissa.webp",
        "/images/Benissa.png",
        "/images/Benissa.jpg",
        "/images/BENISSA.png",
        "/images/BENISSA.jpg",
      ],
      safeFallback: "/images/legal.png",
      text1:
        "Benissa combines authentic Spanish character with countryside living, traditional villages and beautiful hidden coves between Moraira and Calpe.",
      text2:
        "It suits buyers looking for space, privacy, charm and a calmer lifestyle while staying close to the coast.",
    },
    {
      href: "/regions/calpe",
      title: "Calpe",
      label: "Beachfront · Modern · Active",
      images: [
        "/images/calpe.png",
        "/images/calpe.jpg",
        "/images/calpe.jpeg",
        "/images/calpe.webp",
        "/images/Calpe.png",
        "/images/Calpe.jpg",
        "/images/CALPE.png",
        "/images/CALPE.jpg",
      ],
      safeFallback: "/images/community-home.png",
      text1:
        "Calpe offers a lively coastal lifestyle with beaches, restaurants, marina life, modern apartments and views of the Peñón de Ifach.",
      text2:
        "Popular with buyers who want convenience, newer developments, sea views and a more active beach-focused atmosphere.",
    },
    {
      href: "/regions/denia",
      title: "Dénia",
      label: "Harbour · Gastronomy · Year-round life",
      images: [
        "/images/denia.png",
        "/images/denia.jpg",
        "/images/denia.jpeg",
        "/images/denia.webp",
        "/images/dénia.png",
        "/images/dénia.jpg",
        "/images/Denia.png",
        "/images/Denia.jpg",
        "/images/Dénia.png",
        "/images/Dénia.jpg",
      ],
      safeFallback: "/images/soft-landing-card.png",
      text1:
        "Dénia is a vibrant harbour town with beaches, restaurants, daily services, a historic centre and strong local life throughout the year.",
      text2:
        "A strong fit for buyers who want convenience, culture, good infrastructure and authentic coastal living.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f6f1ea] text-stone-900">
      <section className="px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
              Costa Blanca North
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-tight text-[#1e2a3a]">
              Explore the regions that fit your lifestyle.
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-stone-600">
              We help international buyers understand the differences between
              the most desirable areas of Costa Blanca North before focusing on
              the property itself.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {regions.map((region) => (
              <a
                key={region.href}
                href={region.href}
                className="overflow-hidden rounded-[36px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <RegionImage region={region} />

                <div className="p-10">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#c8a063]">
                    {region.label}
                  </p>

                  <h2 className="mt-5 font-serif text-5xl text-[#1e2a3a]">
                    {region.title}
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-stone-600">
                    {region.text1}
                  </p>

                  <p className="mt-6 text-lg leading-relaxed text-stone-600">
                    {region.text2}
                  </p>

                  <span className="mt-8 inline-block text-sm uppercase tracking-[0.25em] text-[#1e2a3a]">
                    Explore {region.title} →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
