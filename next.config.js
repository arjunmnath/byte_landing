/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        // destination: "http://13.48.48.207:/api/v1/:path*",
        destination: "https://02ad5489ee40.ngrok-free.app/api/v1/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
