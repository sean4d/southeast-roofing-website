/**
 * Sanity environment. The project ID is a placeholder until the owner
 * creates the (free) Sanity project — see docs/DEPLOYMENT.md. The studio
 * and queries activate once NEXT_PUBLIC_SANITY_PROJECT_ID is set.
 */
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-07-01";

export const isSanityConfigured = projectId !== "placeholder";
