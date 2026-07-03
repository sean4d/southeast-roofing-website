import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

import { dataset, projectId } from "@/sanity/env";

const builder = createImageUrlBuilder({ projectId, dataset });

/** Build a CDN URL for a Sanity image (auto-format via .auto("format")). */
export function urlFor(source: SanityImageSource) {
  return builder.image(source).auto("format");
}
