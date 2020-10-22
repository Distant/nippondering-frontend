const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  trailingSlash: true,
  experimental: {
    polyfillOptimzation: true
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    if (dev) {
      config.optimization.minimizer = [];
      config.optimization.minimize = false;
    }
    else {
      config.plugins.push(new BrotliPlugin({
        asset: '[path].br[query]',
        test: /\.(js|css|html|svg)$/,
        threshold: 0,
        minRatio: 0.8
      }));
    }
    // Important: return the modified config
    return config
  },
}

/* const withPreCompression = require('@moxy/next-pre-compression');

module.exports = withBundleAnalyzer(withPreCompression({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }));
    return config
  }
})); */

