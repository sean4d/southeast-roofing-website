import { siteConfig } from "@/config/site";

/**
 * Live Google reviews via the Places API (New). Activates the moment
 * GOOGLE_PLACES_API_KEY is set in the environment; until then every function
 * returns null and the site falls back to the curated reviews in
 * content/reviews.ts — so nothing breaks before the key is added.
 *
 * The place is resolved from GOOGLE_PLACE_ID if set, otherwise looked up once
 * from the business name + address. Responses are cached (daily for details,
 * weekly for the place lookup) so this costs a trivial number of API calls.
 *
 * Integrity note: we display the live rating/reviews but still emit NO
 * schema.org AggregateRating/Review markup — Google treats self-published
 * review markup of third-party reviews as self-serving.
 */

const PLACES = "https://places.googleapis.com/v1";

export interface LiveReview {
  author: string;
  rating: number;
  text: string;
  when: string;
  photo?: string;
}

export interface GoogleReviewData {
  rating: number;
  count: number;
  reviews: LiveReview[];
}

async function resolvePlaceId(key: string): Promise<string | null> {
  if (process.env.GOOGLE_PLACE_ID) return process.env.GOOGLE_PLACE_ID;
  const { legalName, address } = siteConfig;
  const query = `${legalName}, ${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`;
  try {
    const res = await fetch(`${PLACES}/places:searchText`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "places.id",
      },
      body: JSON.stringify({ textQuery: query }),
      next: { revalidate: 604800 }, // a week
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { places?: { id?: string }[] };
    return data.places?.[0]?.id ?? null;
  } catch {
    return null;
  }
}

/** Live rating, review count, and up to 5 reviews — or null if unavailable. */
export async function getGoogleReviewData(): Promise<GoogleReviewData | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return null;
  try {
    const placeId = await resolvePlaceId(key);
    if (!placeId) return null;

    const res = await fetch(`${PLACES}/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      next: { revalidate: 86400 }, // daily
    });
    if (!res.ok) return null;

    const data = (await res.json()) as {
      rating?: number;
      userRatingCount?: number;
      reviews?: Array<{
        rating?: number;
        text?: { text?: string };
        originalText?: { text?: string };
        relativePublishTimeDescription?: string;
        authorAttribution?: { displayName?: string; photoUri?: string };
      }>;
    };
    if (typeof data.rating !== "number") return null;

    const reviews: LiveReview[] = (data.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "Google customer",
        rating: r.rating ?? 5,
        text: r.text?.text ?? r.originalText?.text ?? "",
        when: r.relativePublishTimeDescription ?? "recently",
        photo: r.authorAttribution?.photoUri,
      }))
      .filter((r) => r.text.trim().length > 0);

    return {
      rating: data.rating,
      count: data.userRatingCount ?? 0,
      reviews,
    };
  } catch {
    return null;
  }
}
