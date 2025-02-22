import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // Apply to all bots
      disallow: "/", // Disallow everything
    },
    // sitemap: 'https://www.willlynchmusic.co.nz/sitemap.xml',
  };
}
