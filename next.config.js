/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  skipMiddlewareUrlNormalize: true,
  i18n: {
    locales: ['en-US', 'fr-FR', 'nl-NL'],
    defaultLocale: 'en-US',
  },
}

module.exports = nextConfig
