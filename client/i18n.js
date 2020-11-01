/* eslint-disable */
const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

module.exports = new NextI18Next({
  defaultLanguage:'vi',
  otherLanguages: ['en'],
  localeSubpaths,
  localePath: path.resolve('./client/public/static/locales')
})
