import type { MetadataRoute } from "next";

import { ICON_BACKGROUND } from "@/config/brand-icon";
import { siteConfig } from "@/config/site";

/**
 * Web app manifest (PRD §10.5). Makes the site installable and — crucially —
 * supplies the icons Android/Chrome use for the "Add to Home Screen" / installed
 * PWA tile. iOS pulls its home-screen icon from `apple-icon` instead.
 */

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: ICON_BACKGROUND,
    theme_color: ICON_BACKGROUND,
    icons: [
      {
        src: "/manifest-icons/192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/manifest-icons/512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/manifest-icons/512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
