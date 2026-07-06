import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 defaults images.qualities to [75] only and coerces any other
    // quality prop to the nearest allowed value. Whitelist 65 so the hero
    // image's lower quality (under its heavy navy overlay) actually applies.
    qualities: [65, 70, 75],
  },
};

export default nextConfig;
