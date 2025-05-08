/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ppbt26zgt4.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery"
      },
    ],
  },
};

export default nextConfig;
