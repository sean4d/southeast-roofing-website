"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";

import {
  projectPhotos,
  stormPhotos,
  type StormCategory,
} from "@/content/photos";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Filterable project gallery (PRD §13 Phase 6): every image is a real
 * Southeast Roofing job — the manifests in content/photos.ts are the only
 * source. Two collections (completed roofs / storm response), sub-filters
 * by city or damage type, FLIP grid animations, and an accessible lightbox.
 */

interface GalleryItem {
  src: string;
  alt: string;
  /** Short label shown on the card and in the lightbox (city or damage type). */
  badge: string;
}

type Collection = "roofs" | "storm";

const STORM_LABELS: Record<StormCategory, string> = {
  "hail-damage": "Hail damage",
  "wind-damage": "Wind damage",
  "missing-shingles": "Missing shingles",
  "tree-damage": "Tree damage",
  "emergency-tarp": "Emergency tarping",
  "storm-damage": "Storm damage",
};

/** Cities present in the manifest, busiest first. */
const CITY_FILTERS = (() => {
  const counts = new Map<string, { slug: string; city: string; count: number }>();
  for (const photo of projectPhotos) {
    const entry = counts.get(photo.citySlug);
    if (entry) entry.count += 1;
    else counts.set(photo.citySlug, { slug: photo.citySlug, city: photo.city, count: 1 });
  }
  return [...counts.values()].sort(
    (a, b) => b.count - a.count || a.city.localeCompare(b.city),
  );
})();

const STORM_FILTERS = (() => {
  const counts = new Map<StormCategory, number>();
  for (const photo of stormPhotos) {
    counts.set(photo.category, (counts.get(photo.category) ?? 0) + 1);
  }
  return [...counts.entries()].map(([category, count]) => ({ category, count }));
})();

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200",
        active
          ? "border-navy-900 bg-navy-900 text-white shadow-md"
          : "border-border bg-white text-slate-600 hover:-translate-y-0.5 hover:border-steel-500 hover:text-navy-900 hover:shadow-sm",
      )}
    >
      {children}
    </button>
  );
}

export function ProjectGallery() {
  const [collection, setCollection] = useState<Collection>("roofs");
  const [citySlug, setCitySlug] = useState<string | null>(null);
  const [stormCategory, setStormCategory] = useState<StormCategory | null>(
    null,
  );
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo<GalleryItem[]>(() => {
    if (collection === "roofs") {
      return projectPhotos
        .filter((photo) => !citySlug || photo.citySlug === citySlug)
        .map((photo) => ({
          src: photo.src,
          alt: photo.alt,
          badge: `${photo.city}, MS`,
        }));
    }
    return stormPhotos
      .filter((photo) => !stormCategory || photo.category === stormCategory)
      .map((photo) => ({
        src: photo.src,
        alt: photo.alt,
        badge: STORM_LABELS[photo.category],
      }));
  }, [collection, citySlug, stormCategory]);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (delta: number) => {
      setLightbox((current) =>
        current === null
          ? null
          : (current + delta + items.length) % items.length,
      );
    },
    [items.length],
  );

  // Keyboard controls + scroll lock while the lightbox is open
  useEffect(() => {
    if (lightbox === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightbox, close, step]);

  const active = lightbox === null ? null : items[lightbox];

  return (
    <div>
      {/* Collection tabs */}
      <div
        role="group"
        aria-label="Gallery collection"
        className="inline-flex rounded-full border border-border bg-white p-1 shadow-sm"
      >
        {(
          [
            { key: "roofs", label: `Completed roofs (${projectPhotos.length})` },
            { key: "storm", label: `Storm response (${stormPhotos.length})` },
          ] as const
        ).map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => {
              setCollection(tab.key);
              setLightbox(null);
            }}
            aria-pressed={collection === tab.key}
            className={cn(
              "rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-200 sm:px-5",
              collection === tab.key
                ? "bg-navy-900 text-white"
                : "text-slate-600 hover:text-navy-900",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Sub-filters */}
      <div className="mt-6 flex flex-wrap gap-2">
        {collection === "roofs" ? (
          <>
            <FilterPill
              active={citySlug === null}
              onClick={() => setCitySlug(null)}
            >
              All cities
            </FilterPill>
            {CITY_FILTERS.map((entry) => (
              <FilterPill
                key={entry.slug}
                active={citySlug === entry.slug}
                onClick={() =>
                  setCitySlug(citySlug === entry.slug ? null : entry.slug)
                }
              >
                {entry.city}{" "}
                <span className="font-normal opacity-60">{entry.count}</span>
              </FilterPill>
            ))}
          </>
        ) : (
          <>
            <FilterPill
              active={stormCategory === null}
              onClick={() => setStormCategory(null)}
            >
              All damage types
            </FilterPill>
            {STORM_FILTERS.map((entry) => (
              <FilterPill
                key={entry.category}
                active={stormCategory === entry.category}
                onClick={() =>
                  setStormCategory(
                    stormCategory === entry.category ? null : entry.category,
                  )
                }
              >
                {STORM_LABELS[entry.category]}{" "}
                <span className="font-normal opacity-60">{entry.count}</span>
              </FilterPill>
            ))}
          </>
        )}
      </div>

      {/* FLIP grid */}
      <motion.ul
        layout
        className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => (
            <motion.li
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
            >
              <button
                type="button"
                onClick={() => setLightbox(index)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900"
                aria-label={`View larger: ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={450}
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, 50vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-2.5 left-2.5 inline-flex items-center gap-1 rounded-full bg-navy-950/80 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur sm:bottom-3 sm:left-3 sm:gap-1.5 sm:px-3 sm:text-xs">
                  {collection === "roofs" && (
                    <MapPin className="size-3" aria-hidden="true" />
                  )}
                  {item.badge}
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            className="fixed inset-0 z-[60] flex flex-col bg-navy-950/95 backdrop-blur-sm"
            onClick={close}
          >
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              <p className="text-sm font-medium text-steel-300">
                {(lightbox ?? 0) + 1} / {items.length}
                <span className="ml-3 hidden text-white sm:inline">
                  {active.badge}
                </span>
              </p>
              <button
                type="button"
                onClick={close}
                aria-label="Close gallery"
                className="rounded-full p-2.5 text-white transition-colors hover:bg-white/10"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>

            <div
              className="relative flex-1 px-4 pb-4 sm:px-16"
              onClick={(event) => event.stopPropagation()}
            >
              <motion.div
                key={active.src}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                className="relative h-full w-full"
              >
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </motion.div>

              {items.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous photo"
                    className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition-colors hover:bg-white/20 sm:left-4"
                  >
                    <ChevronLeft className="size-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next photo"
                    className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition-colors hover:bg-white/20 sm:right-4"
                  >
                    <ChevronRight className="size-6" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            <p className="px-4 pb-4 text-center text-sm text-steel-300 sm:px-6">
              {active.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
