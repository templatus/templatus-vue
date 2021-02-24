const { webpackConfig, merge } = require('@rails/webpacker')
const vueConfig = require('./rules/vue')
const path = require('path')

const customConfig = {
  resolve:{
    alias: {
      '@': path.resolve(__dirname, '..', '..', 'app/packs/src')
    }
  }
}

module.exports = merge(vueConfig, customConfig, webpackConfig)
