import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

/** Resolve a path against the canonical host (PRD §1 — never hardcode domains). */
export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

interface BuildMetadataOptions {
  /** Page title without the site suffix — the layout template appends it. */
  title: string;
  /** Unique meta description, ~150 chars, written per page (PRD §10.5). */
  description: string;
  /** Route path beginning with "/" — used for the canonical URL. */
  path: string;
  /** Override OG image; defaults to the site-wide OG image. */
  ogImage?: string;
  /** Reserved/unlaunched routes set this until their phase ships. */
  noIndex?: boolean;
}

/**
 * Standard metadata builder for every page (PRD §10.5): canonical URL from
 * the single SITE_URL source, Open Graph, and Twitter cards.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
