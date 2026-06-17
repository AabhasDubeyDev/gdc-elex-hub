/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Ready for CMS integration later
      // { protocol: 'https', hostname: 'cdn.sanity.io' }
    ],
  },
};

module.exports = nextConfig;