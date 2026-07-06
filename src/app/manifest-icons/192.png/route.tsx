import { renderBrandIcon } from "@/config/brand-icon";

/**
 * 192×192 PNG referenced by the web manifest. A stable URL (rather than the
 * hashed `icon`-convention route) so the manifest entry never breaks.
 */
export function GET() {
  return renderBrandIcon(192);
}
