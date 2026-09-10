import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shirayukinocomp.com";
  const currentDate = new Date();

  const staticRoutes = [
    { route: "", priority: 1.0, changeFrequency: "weekly" as const },
    { route: "/gameplay", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/editions", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/devlog", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/community", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/privacy", priority: 0.5, changeFrequency: "yearly" as const },
    { route: "/terms", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  const devlogs = [
    "whatsapp-prologue",
    "combat-rpg",
    "music-soundscapes",
    "character-design",
    "celestial-worldbuilding",
  ];

  return [
    ...staticRoutes.map((item) => ({
      url: `${baseUrl}${item.route}`,
      lastModified: currentDate,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    })),
    ...devlogs.map((slug) => ({
      url: `${baseUrl}/devlog/${slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
