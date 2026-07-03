/**
 * Brand assets supplied by the owner (2026-07-03 asset pack).
 *
 * Usage constraints (integrity rule, PRD §0.2):
 * - The Owens Corning Preferred Contractor badge may only be displayed once
 *   the owner confirms the certification is current and active.
 * - The Google reviews logo is a trust mark, not a substitute for real
 *   reviews — display it only alongside a link to the live Google profile.
 * - Both logo variants sit on light backgrounds (black and navy artwork);
 *   a white/knockout version is still needed for the dark site theme.
 */

export const brandAssets = {
  logo: {
    /** Black artwork — for light backgrounds only */
    dark: "/images/brand/southeast-roofing-logo-01.png",
    /** Navy artwork — for light backgrounds only */
    navy: "/images/brand/southeast-roofing-logo-02.png",
    /** [NEEDS: white/knockout logo version for dark backgrounds] */
    light: null as string | null,
  },
  certifications: {
    /** [NEEDS: owner confirmation that this certification is current] */
    owensCorningPreferred: {
      images: [
        "/images/brand/owens-corning-preferred-contractor-logo-01.png",
        "/images/brand/owens-corning-preferred-contractor-logo-02.png",
      ],
      confirmed: false,
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
