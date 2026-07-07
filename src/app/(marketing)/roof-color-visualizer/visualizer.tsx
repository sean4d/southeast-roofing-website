"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { ArrowRight, BadgeCheck } from "lucide-react";

import { ROOF_PRODUCTS } from "@/config/roof-colors";
import { projectPhotos } from "@/content/photos";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function ColorVisualizer() {
  const [productKey, setProductKey] = useState(ROOF_PRODUCTS[0].key);
  const product = useMemo(
    () => ROOF_PRODUCTS.find((p) => p.key === productKey) ?? ROOF_PRODUCTS[0],
    [productKey],
  );
  const [colorName, setColorName] = useState(product.colors[0].name);

  useEffect(() => {
    track("tool_opened", { tool: "color-visualizer" });
  }, []);

  // Keep the color valid when switching products.
  const activeColor =
    product.colors.find((c) => c.name === colorName) ?? product.colors[0];

  // Real Southeast Roofing photo of this exact product + color, if we have one.
  const realPhoto = useMemo(
    () =>
      projectPhotos.find(
        (p) =>
          p.kind === "completed" &&
          p.manufacturer === product.manufacturer &&
          p.line === product.line &&
          p.color === activeColor.name,
      ),
    [product, activeColor],
  );

  function pickColor(name: string) {
    setColorName(name);
    track("color_selected", { tool: "color-visualizer", product: product.label, color: name });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      {/* Preview */}
      <div className="overflow-hidden rounded-2xl border border-border bg-white">
        <div className="relative aspect-[4/3] bg-secondary">
          {realPhoto ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={realPhoto.src}
                alt={realPhoto.alt}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-navy-950/75 px-3 py-1 text-xs font-semibold text-white">
                <BadgeCheck className="size-3.5" /> Real job — {realPhoto.city}, MS
              </span>
            </>
          ) : (
            <div
              className="flex h-full w-full items-end p-5"
              style={{ backgroundColor: activeColor.hex }}
            >
              <span className="rounded-full bg-white/85 px-3 py-1 text-sm font-semibold text-navy-900">
                Color sample
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between p-4">
          <div>
            <p className="text-sm font-bold text-navy-900">{product.label}</p>
            <p className="text-sm text-slate-600">{activeColor.name}</p>
          </div>
          <span
            className="size-9 rounded-full border border-border"
            style={{ backgroundColor: activeColor.hex }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-navy-900">Roof product</span>
          <div className="flex flex-wrap gap-2">
            {ROOF_PRODUCTS.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => {
                  setProductKey(p.key);
                  setColorName(p.colors[0].name);
                }}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm font-semibold transition",
                  p.key === productKey
                    ? "border-navy-900 bg-navy-900 text-white"
                    : "border-border bg-white text-slate-600 hover:border-steel-500",
                )}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-navy-900">Color</span>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
            {product.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => pickColor(c.name)}
                className={cn(
                  "flex flex-col items-center gap-1.5 rounded-xl border p-2 text-center transition",
                  c.name === activeColor.name ? "border-navy-900" : "border-border hover:border-steel-500",
                )}
              >
                <span
                  className="h-12 w-full rounded-lg border border-black/10"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="text-xs font-medium text-navy-900">{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/free-inspection"
            onClick={() =>
              track("cta_click", { action: "request-color", source: "color-visualizer", color: activeColor.name })
            }
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 font-semibold text-white"
          >
            Request this color
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/projects"
            onClick={() => track("cta_click", { action: "see-local-projects", source: "color-visualizer" })}
            className="inline-flex items-center rounded-full border border-border px-5 py-3 font-semibold text-navy-900"
          >
            See local projects
          </Link>
        </div>

        <p className="text-xs text-slate-500">
          Swatches are close digital approximations — actual shingle color varies with
          light and pitch. Ask {siteConfig.name} for a physical sample and to see it on
          real {product.material === "metal" ? "metal roofs" : "roofs"} near you.
        </p>
      </div>
    </div>
  );
}
