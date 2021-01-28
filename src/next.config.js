const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [withCSS],
  {
    publicRuntimeConfig: {
      apiUrl: process.env.API_URL
    }
  }
)
