const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/base/vars.scss";
          @import "@/assets/styles/base/mixins.scss";
        `
      }
    }
  }
})
