/* eslint-disable */
const NextI18Next = require('next-i18next').default
const path = require('path')

module.exports = new NextI18Next({
  defaultLanguage:'vi',
  otherLanguages: ['en'],
  localePath: path.resolve('client/public/static/locales')
})
