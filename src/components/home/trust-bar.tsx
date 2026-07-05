import { ExternalLink } from "lucide-react";

import { reviewsSection } from "@/content/homepage";
import { brandMarks } from "@/components/shared/brand-marks";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";

/**
 * Credential strip under the hero (owner request 2026-07-05): the same
 * four verifiable badges as the Reputation section — Google, GAF, BBB,
 * MSBOC — each linking to its official record. Lifetime/insured tiles
 * removed; these four are all externally checkable.
 */
export function TrustBar() {
  return (
    <section
      aria-label="Credentials"
      className="border-y border-border bg-secondary py-12"
    >
      <div className="container-site">
        <StaggerGroup as="ul" className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {reviewsSection.badges.map((badge) => {
            const inner = (
              <>
                <div className="flex items-center justify-between">
                  {brandMarks[badge.key as keyof typeof brandMarks]}
                  {badge.href && (
                    <ExternalLink
                      className="size-4 text-slate-400 transition-colors group-hover:text-steel-500"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="mt-4 font-display text-sm font-bold text-navy-900 sm:text-base">
                  {badge.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {badge.subtitle}
                </p>
                {badge.cta && (
                  <span className="mt-3 inline-block text-xs font-semibold text-steel-500 underline-offset-4 transition-colors group-hover:text-navy-900 group-hover:underline">
                    {badge.cta} ↗
                  </span>
                )}
              </>
            );
            const card =
              "group flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-premium transition-all duration-300 sm:p-6";
            return (
              <StaggerItem as="li" key={badge.key} className="h-full">
                {badge.href ? (
                  <a
                    href={badge.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${card} hover:-translate-y-1 hover:border-steel-500 hover:shadow-xl`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={card}>{inner}</div>
                )}
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
