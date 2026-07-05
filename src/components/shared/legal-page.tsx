import type { BreadcrumbItem } from "@/lib/schema";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/services/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";

/**
 * Shared layout for legal documents (privacy policy, terms of service):
 * plain-language prose, dated, no marketing chrome beyond the standard
 * header/footer shell.
 */

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
  breadcrumbs,
}: {
  title: string;
  /** Human-readable last-updated date, e.g. "July 5, 2026". */
  updated: string;
  intro: string;
  sections: LegalSection[];
  breadcrumbs: BreadcrumbItem[];
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="border-b border-border bg-secondary">
        <div className="container-site py-14 sm:py-16">
          <Reveal>
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="mt-6 font-display text-4xl font-bold text-navy-900 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm font-medium text-slate-500">
              Last updated: {updated}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <p className="text-lg leading-relaxed text-slate-600">{intro}</p>

          {sections.map((section) => (
            <div key={section.heading} className="mt-12">
              <h2 className="font-display text-2xl font-bold text-navy-900">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 leading-relaxed text-slate-600"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
