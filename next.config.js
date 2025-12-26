/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        // destination: "http://13.48.48.207:/api/v1/:path*",
        destination: "http://localhost:2707/api/v1/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
