/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  async redirects() {
    return [
      {
        source: "/testflight",
        destination: "https://testflight.apple.com/join/7WXBXUrE",
        permanent: true,
      },
      {
        source: "/download",
        destination: "https://apps.apple.com/app/fear-exposure-ar/id6736893205",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://apps.apple.com/app/fear-exposure-ar/id6736893205",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
