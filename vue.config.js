const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map'
}
})