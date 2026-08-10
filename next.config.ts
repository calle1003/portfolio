import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/easel.html",
        destination: "/projects/easel",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
