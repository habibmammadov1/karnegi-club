import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker üçün kiçik, müstəqil build
  output: "standalone",
  poweredByHeader: false,
};

export default nextConfig;
