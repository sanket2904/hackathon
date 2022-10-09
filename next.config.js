/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "cdn.uploadly.dev", "flowbite.s3.amazonaws.com","ttps://cdn.uploadly.dev/63421e459666525789e0c179Aboutsection.png"],
  },
}

module.exports = nextConfig
