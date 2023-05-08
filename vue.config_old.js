const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devtool: 'source-map'
})



module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  }
}