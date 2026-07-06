import { renderBrandIcon } from "@/config/brand-icon";

/**
 * 512×512 PNG referenced by the web manifest (used for both the "any" and
 * "maskable" purposes — the mark keeps its art within the safe zone).
 */
export function GET() {
  return renderBrandIcon(512);
}
