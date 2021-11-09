module.exports = {
    publicPath:process.env.VUE_APP_BASE_URL,
    outputDir:process.env.VUE_APP_OUTPUT,
    chainWebpack: (config) => config.resolve.symlinks(false),
  };
  