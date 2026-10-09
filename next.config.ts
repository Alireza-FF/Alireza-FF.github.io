import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // چون دامنه شخصی داری، basePath و assetPrefix خالی می‌مونن
  basePath: '',
  assetPrefix: '',
  // experimental و turbopack رو کاملاً حذف کن
};

export default nextConfig;