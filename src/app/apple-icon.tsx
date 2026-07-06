import { iconContentType, renderBrandIcon } from "@/config/brand-icon";

/**
 * Apple touch icon (`<link rel="apple-touch-icon">`). This is the image iOS
 * Safari uses when a visitor taps "Add to Home Screen" — without it iOS shows a
 * blank/screenshot tile. 180×180 is Apple's recommended size.
 */

export const size = { width: 180, height: 180 };
export const contentType = iconContentType;

export default function AppleIcon() {
  return renderBrandIcon(size.width);
}
