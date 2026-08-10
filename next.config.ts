import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/easel",
        destination: "/work/easel",
        permanent: true,
      },
      {
        source: "/projects/easel/enter-demo",
        destination: "/work/easel/enter-demo",
        permanent: true,
      },
      {
        source: "/projects/easel.html",
        destination: "/work/easel",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
