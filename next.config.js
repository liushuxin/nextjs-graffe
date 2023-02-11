const cssLoaderConfig = require("@zeit/next-css/css-loader-config");
const withPlugins = require("next-compose-plugins");

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack: (config, options) => {
      const { dev, isServer } = options;
      const { lessLoaderOptions = {} } = nextConfig;

      // antd less 设置
      config.module.rules.push({
        test: /.less$/,
        include: /node_modules/,
        use: cssLoaderConfig(config, {
          webpack5: false,
          extensions: ["less"],
          cssModules: false,
          cssLoaderOptions: {},
          dev,
          isServer,
          loaders: [
            {
              loader: "less-loader",
              options: {
                ...lessLoaderOptions,
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ],
        }),
      });
      return config;
    },
  });
};
