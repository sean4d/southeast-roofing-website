import { ImageResponse } from "next/og";

/**
 * Single source of truth for the app icon / home-screen mark, consumed by the
 * `icon`, `apple-icon`, and web-manifest icon routes (PRD §10.5). Keeping the
 * artwork here means the browser tab, iOS "Add to Home Screen", and Android
 * installed-PWA icons never drift.
 *
 * The mark is a simplified version of the Southeast Roofing logo emblem — the
 * twin roof peaks + window — rendered white/steel on the brand navy gradient so
 * it reads as a filled, recognizable tile at home-screen sizes (a wordmark
 * squeezed into a square would be illegible). Drawn as an inline SVG so it stays
 * crisp at every icon size; `next/og` rasterizes it to PNG.
 */

/** Brand tokens mirrored from globals.css so the icon matches the site. */
export const ICON_NAVY_950 = "#0a2036";
export const ICON_NAVY_800 = "#123b63";
const ICON_STEEL_300 = "#8faecb";

/** Solid navy behind the tile — used for manifest background/theme colors. */
export const ICON_BACKGROUND = ICON_NAVY_950;

/** Full-bleed square roof mark. Art is kept within the centre ~80% so it
 * survives the circular/rounded masks applied by iOS and Android adaptive
 * icons (`purpose: "maskable"`). */
const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${ICON_NAVY_950}"/>
      <stop offset="1" stop-color="${ICON_NAVY_800}"/>
    </linearGradient>
  </defs>
  <rect width="120" height="120" fill="url(#bg)"/>
  <rect x="95" y="34" width="7" height="18" fill="#ffffff"/>
  <polygon points="80,26 106,62 54,62" fill="${ICON_STEEL_300}"/>
  <polygon points="42,32 14,74 70,74" fill="#ffffff"/>
  <g fill="${ICON_NAVY_950}">
    <rect x="35" y="56" width="7" height="7"/>
    <rect x="45" y="56" width="7" height="7"/>
    <rect x="35" y="66" width="7" height="7"/>
    <rect x="45" y="66" width="7" height="7"/>
  </g>
  <rect x="14" y="80" width="92" height="9" fill="#ffffff"/>
</svg>
`;

const iconSrc = `data:image/svg+xml;base64,${Buffer.from(iconSvg).toString("base64")}`;

export const iconContentType = "image/png";

/**
 * Rasterize the brand mark to a square PNG at the requested edge length.
 * Returns an `ImageResponse` (a `Response`), suitable for returning directly
 * from an `icon` / `apple-icon` convention or a manifest-icon Route Handler.
 */
export function renderBrandIcon(edge: number): ImageResponse {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconSrc} width={edge} height={edge} alt="" />
      </div>
    ),
    { width: edge, height: edge },
  );
}
