/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true, // Optimizes JS minification
    compress: true,  // Enables Gzip compression
    productionBrowserSourceMaps: true, // Enables source maps for debugging
    images: {
        formats: ['image/avif', 'image/webp'], // Modern image formats
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Optimize for various screens
        minimumCacheTTL: 60,
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production", // Remove console logs in prod
    },
};

module.exports = nextConfig;
