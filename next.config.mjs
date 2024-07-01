'use strict'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/en/apps/invoice/list',
        permanent: true,
        locale: false
      }
    ]
  },

  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true
    }
    return config
  },

  // TODO: below line is added to resolve twice event dispatch in the calendar reducer
  reactStrictMode: false
}

export default nextConfig
