"use client";

import { useMemo, useState } from "react";
import { villas } from "./villasData";

const priceOptions = [
  { value: "all", label: "Any price" },
  { value: "under-1m", label: "Up to €1,000,000" },
  { value: "1m-1-5m", label: "€1,000,000 – €1,500,000" },
  { value: "1-5m-2-5m", label: "€1,500,000 – €2,500,000" },
  { value: "over-2-5m", label: "€2,500,000+" },
];

export default function VillasGrid() {
  const [town, setTown] = useState("all");
  const [price, setPrice] = useState("all");
  const [minBeds, setMinBeds] = useState("all");

  const towns = useMemo(
    () => Array.from(new Set(villas.map((villa) => villa.town))).sort(),
    []
  );

  const filtered = useMemo(() => {
    return villas.filter((villa) => {
      if (town !== "all" && villa.town !== town) return false;
      if (minBeds !== "all" && villa.beds < Number(minBeds)) return false;

      if (price === "under-1m" && villa.price > 1000000) return false;
      if (
        price === "1m-1-5m" &&
        (villa.price < 1000000 || villa.price > 1500000)
      )
        return false;
      if (
        price === "1-5m-2-5m" &&
        (villa.price < 1500000 || villa.price > 2500000)
      )
        return false;
      if (price === "over-2-5m" && villa.price < 2500000) return false;

      return true;
    });
  }, [town, price, minBeds]);

  return (
    <div>
      <div className="rounded-[32px] bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-5 md:grid-cols-3">
          <label className="text-sm font-medium text-[#1e2a3a]">
            Area
            <select
              value={town}
              onChange={(event) => setTown(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-stone-200 bg-[#f6f1ea] px-4 py-3 font-normal outline-none transition focus:border-[#c8a063]"
            >
              <option value="all">All areas</option>
              {towns.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-[#1e2a3a]">
            Price
            <select
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-stone-200 bg-[#f6f1ea] px-4 py-3 font-normal outline-none transition focus:border-[#c8a063]"
            >
              {priceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-[#1e2a3a]">
            Bedrooms
            <select
              value={minBeds}
              onChange={(event) => setMinBeds(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-stone-200 bg-[#f6f1ea] px-4 py-3 font-normal outline-none transition focus:border-[#c8a063]"
            >
              <option value="all">Any number</option>
              <option value="3">3+ bedrooms</option>
              <option value="4">4+ bedrooms</option>
              <option value="5">5+ bedrooms</option>
            </select>
          </label>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-stone-200 pt-5">
          <p className="text-sm text-stone-600">
            Showing{" "}
            <strong className="font-medium text-[#1e2a3a]">
              {filtered.length}
            </strong>{" "}
            of {villas.length} selected villas
          </p>

          <button
            type="button"
            onClick={() => {
              setTown("all");
              setPrice("all");
              setMinBeds("all");
            }}
            className="text-sm font-medium text-[#1e2a3a] underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((villa) => (
          <article
            key={villa.ref}
            id={villa.id}
            className="scroll-mt-32 overflow-hidden rounded-[30px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <a
              href={`/villas/${villa.id}`}
              aria-label={`View villa in ${villa.location}`}
              className="group block"
            >
              <div className="overflow-hidden">
                <img
                  src={villa.images[0]}
                  alt={`Villa in ${villa.location}`}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-[#c8a063]">
                  {villa.location}
                </p>

                <h2 className="mt-3 font-serif text-3xl text-[#1e2a3a]">
                  €{villa.price.toLocaleString("en-GB")}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {villa.beds} beds · {villa.baths} baths
                  {villa.built ? ` · ${villa.built} m² built` : ""}
                  {villa.plot ? ` · ${villa.plot} m² plot` : ""}
                </p>

                <p className="mt-3 text-xs text-stone-400">
                  Reference {villa.ref}
                </p>

                <span className="mt-6 inline-flex rounded-full bg-[#1e2a3a] px-6 py-3 text-sm font-medium text-white transition group-hover:bg-[#2b3a4d]">
                  View villa & photos
                </span>

                <p className="mt-5 border-t border-stone-100 pt-4 text-xs leading-relaxed text-stone-400">
                  Property offered through one of our collaborating property
                  partners. Nordic Move Spain represents and advises the buyer.
                </p>
              </div>
            </a>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-[30px] bg-white p-10 text-center shadow-sm">
          <h2 className="font-serif text-3xl text-[#1e2a3a]">
            No exact match in this selection.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            Tell us what you are looking for. We can search across agencies, our
            professional network and additional market opportunities on your
            behalf.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-[#c8a063] px-7 py-3 text-sm font-medium text-white"
          >
            Tell us what you are looking for
          </a>
        </div>
      )}
    </div>
  );
}