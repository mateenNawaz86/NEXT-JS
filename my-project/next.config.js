// next.config.js
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverComponents: true, // Enable Server Components
    serverActions: true, // Enable Server Actions
  },
  // Other configurations...
};

module.exports = nextConfig;
