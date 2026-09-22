import { MetadataRoute } from "next";
import { SOLUTIONS_DATA } from "@/lib/solutionsData";
import { EXISTING_SYSTEMS_DATA } from "@/lib/existingSystemsData";
import { SERVICES_DATA } from "@/lib/servicesData";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://sirotech.hu";
// Real content updated timestamp as per SEO requirement
const CONTENT_UPDATED_AT = new Date("2026-09-22T20:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages = ["", "/rolunk", "/kapcsolat", "/partnereknek", "/adatvedelem"];
  const hubPages = ["/megoldasok", "/meglevo-rendszerek", "/szolgaltatasok"];

  const routes: MetadataRoute.Sitemap = [];

  // Core pages
  corePages.forEach((path) => {
    routes.push({
      url: `${BASE_URL}${path}`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "monthly",
      priority: path === "" ? 1.0 : 0.8,
    });
  });

  // Hub pages
  hubPages.forEach((path) => {
    routes.push({
      url: `${BASE_URL}${path}`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  });

  // Solution Detail Pages
  Object.keys(SOLUTIONS_DATA).forEach((slug) => {
    routes.push({
      url: `${BASE_URL}/megoldasok/${slug}`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  // Existing Systems Detail Pages
  Object.keys(EXISTING_SYSTEMS_DATA).forEach((slug) => {
    routes.push({
      url: `${BASE_URL}/meglevo-rendszerek/${slug}`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  // Service Detail Pages
  Object.keys(SERVICES_DATA).forEach((slug) => {
    routes.push({
      url: `${BASE_URL}/szolgaltatasok/${slug}`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  return routes;
}
