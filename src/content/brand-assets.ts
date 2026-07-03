/**
 * Official Southeast Roofing brand assets (owner-supplied and confirmed
 * for site-wide use, 2026-07-03).
 *
 * Usage constraints (integrity rule, PRD §0.2):
 * - The Google reviews logo is a trust mark, not a substitute for real
 *   reviews — display it only alongside a link to the live Google profile.
 * - The white knockout logo is derived from the official black artwork
 *   (inverted, transparency preserved) for use on the dark theme.
 */

export const brandAssets = {
  logo: {
    /** Official black artwork — light backgrounds */
    dark: "/images/brand/southeast-roofing-logo-01.png",
    /** Official navy artwork — light backgrounds */
    navy: "/images/brand/southeast-roofing-logo-02.png",
    /** Navy artwork, trimmed of padding */
    navyTrimmed: "/images/brand/southeast-roofing-logo-navy-trimmed.png",
    /** White knockout derived from official artwork — dark backgrounds */
    light: "/images/brand/southeast-roofing-logo-white.png",
    /** Intrinsic aspect ratio of the trimmed marks (479x278) */
    aspect: { width: 479, height: 278 },
  },
  /**
   * Credentials confirmed by the owner 2026-07-03: GAF certified, BBB
   * accredited, MSBOC licensed, Owens Corning Preferred (OC is the primary
   * displayed manufacturer credential; logo used with permission).
   * Third-party logos always keep their original colors (PRD §6.1).
   */
  certifications: {
    owensCorningPreferred: {
      label: "Owens Corning Preferred Contractor",
      images: [
        "/images/brand/owens-corning-preferred-contractor-logo-01.png",
        "/images/brand/owens-corning-preferred-contractor-logo-02.png",
      ],
      confirmed: true,
    },
    gaf: {
      label: "GAF Certified",
      /** [NEEDS: official GAF badge file] — text mention only until supplied */
      images: [] as string[],
      confirmed: true,
    },
    bbb: {
      label: "BBB Accredited",
      /** [NEEDS: official BBB seal file] — text mention only until supplied */
      images: [] as string[],
      confirmed: true,
    },
    msboc: {
      label: "Licensed by the Mississippi State Board of Contractors",
      images: [] as string[],
      confirmed: true,
      /** [NEEDS: license number in its public form] — lives in siteConfig.license */
    },
  },
  trust: {
    googleReviews: [
      "/images/brand/google-reviews-logo-01.png",
      "/images/brand/google-reviews-logo-02.png",
    ],
  },
  partners: {
    roofr: "/images/brand/roofr-logo-01.webp",
  },
} as const;
