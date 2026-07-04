import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

/** Robots (PRD §5 finalization): allow everything launched, point at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
