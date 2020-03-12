module.exports = {
  runtimeCompiler: true,
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: 'http://0.0.0.0:8000'
  }
}
