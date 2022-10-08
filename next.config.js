/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "cdn.uploadly.dev","flowbite.s3.amazonaws.com"],
  },
}

module.exports = nextConfig
