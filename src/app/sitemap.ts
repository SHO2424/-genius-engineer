import type { MetadataRoute } from "next";

const LP_DEPLOY_URL = "https://genius-engineer.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: LP_DEPLOY_URL,
      lastModified: new Date("2026-06-05"),
      changeFrequency: "daily", 
      priority: 1.0,
    },
  ];
}