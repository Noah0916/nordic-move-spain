import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nordicmovespain.com";

  const routes = [
    "",
    "/services",
    "/services/area-match",
    "/services/discovery-trips",
    "/services/sell-your-property",
    "/regions",
    "/regions/moraira",
    "/regions/javea",
    "/regions/altea",
    "/regions/benissa",
    "/regions/calpe",
    "/regions/denia",
    "/guides",
    "/guides/buying-property-spain",
    "/guides/where-to-buy-property-costa-blanca-north",
    "/guides/best-areas-costa-blanca-north-retirees",
    "/guides/moraira-vs-javea",
    "/guides/honest-guide-buying-property-costa-blanca-north",
    "/guides/common-mistakes-buying-property-spain",
    "/guides/homeowners-association-spain",
    "/guides/dutch-tax-second-home-spain",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/guides") ? 0.8 : 0.7,
  }));
}