/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.parareact.com",
      "image.tmdb.org",
    ],
  },
}

module.exports = nextConfig
