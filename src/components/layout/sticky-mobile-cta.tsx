"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, Phone } from "lucide-react";

import { commercialCta, primaryCta } from "@/config/navigation";
import { siteConfig } from "@/config/site";

/**
 * Sticky mobile bottom bar (PRD §3 persistent elements): Call + Free
 * Inspection, swapping to Request Consultation on /commercial routes.
 * Hidden on the Sanity Studio route. Until the real phone number exists,
 * the call button routes to /contact instead of a fake tel: link.
 */
export function StickyMobileCTA() {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) return null;

  const isCommercial = pathname.startsWith("/commercial");
  const cta = isCommercial ? commercialCta : primaryCta;
  const { tel } = siteConfig.phone;

  return (
    <>
      {/* Spacer keeps page content clear of the fixed bar */}
      <div className="h-16 md:hidden" aria-hidden="true" />
      <div
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgb(18_59_99_/_0.08)] backdrop-blur-md md:hidden"
        role="region"
        aria-label="Quick contact"
      >
        <a
          href={tel ? `tel:${tel}` : "/contact"}
          className="flex h-16 items-center justify-center gap-2 text-sm font-semibold text-primary transition-colors active:bg-secondary"
        >
          <Phone className="size-5" aria-hidden="true" />
          Call Now
        </a>
        <Link
          href={cta.href}
          className="flex h-16 items-center justify-center gap-2 bg-primary text-sm font-semibold text-primary-foreground transition-colors active:bg-navy-700"
        >
          <CalendarCheck className="size-5" aria-hidden="true" />
          {cta.label}
        </Link>
      </div>
    </>
  );
}
