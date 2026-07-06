import { iconContentType, renderBrandIcon } from "@/config/brand-icon";

/**
 * PNG app icon (`<link rel="icon">`). Complements the existing favicon.ico with
 * a crisp, high-DPI mark that modern browsers and Android prefer.
 */

export const size = { width: 512, height: 512 };
export const contentType = iconContentType;

export default function Icon() {
  return renderBrandIcon(size.width);
}
