
const path = require('path');
const { name } = require('./package');
const webpack = require('webpack');

// element-plus 按需导入
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');


function resolve(dir) {
  return path.join(__dirname, dir);
}

const titleName = process.env.VUE_APP_TITLE;
const isDevEnv = process.env.NODE_ENV === 'development';

module.exports = {
  publicPath: '/app/zbsz-guarantee/',
  assetsDir: 'static',
  lintOnSave: !isDevEnv,
  productionSourceMap: false,
  devServer: {
    port: process.env.VUE_APP_PORT,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_HOST,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: titleName,
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        Quill: 'quill/dist/quill.js',
      }),
      AutoImport({
        resolvers: [ ElementPlusResolver() ],
      }),
      Components({
        resolvers: [ ElementPlusResolver() ],
      }),
    ],
  },
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [ /\.map$/, /hot-update\.js$/, /runtime\..*\.js$/ ],
        include: 'initial',
      },
    ]);

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch');
    config.when(!isDevEnv, config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/,
          },
        ])
        .end();
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial', // only package third parties that are initially dependent
          },
        },
      });
      // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk('single');
    });
  },
};
