/* eslint-disable */
const withFonts = require('nextjs-fonts')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  vi: 'vi',
  en: 'en'
}

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    API_URL_V1: process.env.API_URL_V1,
    TEST: process.env.TEST
  },
  withFonts: withFonts({
    webpack(config) {
      return config
    }
  }),
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}
