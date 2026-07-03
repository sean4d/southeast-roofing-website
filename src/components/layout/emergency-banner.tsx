import Link from "next/link";
import { TriangleAlert } from "lucide-react";

import { siteConfig } from "@/config/site";

/**
 * Toggleable storm-event banner (PRD §3 persistent elements). Off by
 * default; enabled via siteConfig.flags (later mirrored by the Sanity
 * siteFlags singleton so the owner can toggle it without a deploy).
 */
export function EmergencyBanner() {
  const { emergencyBanner, emergencyBannerMessage } = siteConfig.flags;

  if (!emergencyBanner) return null;

  return (
    <div className="bg-burgundy-600 text-white">
      <Link
        href="/services/emergency-roofing"
        className="container-site flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
      >
        <TriangleAlert className="size-4 shrink-0" aria-hidden="true" />
        <span>{emergencyBannerMessage}</span>
      </Link>
    </div>
  );
}
