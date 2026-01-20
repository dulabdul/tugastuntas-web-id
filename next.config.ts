import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Mengizinkan gambar placeholder eksternal untuk development
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
