import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { divisionSplit } from "@/content/homepage";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";

/**
 * Residential / Commercial split (PRD §3.3): the structural statement that
 * Southeast Roofing has exactly two divisions, presented with equal weight.
 * Residential is photo-led (real project photography exists); Commercial is
 * a navy design panel until real commercial photography is supplied —
 * never a stock or misattributed photo (integrity rule).
 */
export function DivisionSplit() {
  const { residential, commercial } = divisionSplit;

  return (
    <section
      aria-label="Our two divisions"
      className="bg-secondary py-20 sm:py-24 lg:py-28"
    >
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {divisionSplit.heading}
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Residential — photo-led panel */}
          <StaggerItem>
            <Link
              href={residential.href}
              className="group shadow-premium relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-3xl border border-border"
            >
              <Image
                src={residential.photo.src}
                alt={residential.photo.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* Navy gradient for text legibility over the photo */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/35 to-transparent"
              />
              <div className="relative p-8 text-white sm:p-10">
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {residential.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-steel-100 sm:text-base">
                  {residential.description}
                </p>
                <ul className="mt-5 space-y-1.5 text-sm text-steel-100">
                  {residential.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check
                        className="size-4 text-steel-300"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  {residential.cta}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </StaggerItem>

          {/* Commercial — navy design panel (equal visual weight) */}
          <StaggerItem>
            <Link
              href={commercial.href}
              className="group shadow-premium relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-3xl border border-navy-800 bg-navy-900"
            >
              {/* Subtle structural grid motif */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--color-steel-300) 1px, transparent 1px), linear-gradient(90deg, var(--color-steel-300) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgb(79_126_168_/_0.25),_transparent_60%)]"
              />
              <div className="relative p-8 text-white sm:p-10">
                <ul
                  className="mb-6 flex flex-wrap gap-2"
                  aria-label="Industries served"
                >
                  {commercial.industries.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-steel-100"
                    >
                      <Icon className="size-3.5" aria-hidden="true" />
                      {label}
                    </li>
                  ))}
                </ul>
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {commercial.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-steel-100 sm:text-base">
                  {commercial.description}
                </p>
                <ul className="mt-5 space-y-1.5 text-sm text-steel-100">
                  {commercial.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check
                        className="size-4 text-steel-300"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  {commercial.cta}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
