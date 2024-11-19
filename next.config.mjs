/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  async redirects () {
    return [
      {
        source: '/testflight',
        destination: 'https://testflight.apple.com/join/7WXBXUrE', 
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
