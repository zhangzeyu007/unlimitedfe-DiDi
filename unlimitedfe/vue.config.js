/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2022-04-22 12:21:32
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-22 12:55:58
 * @FilePath: \unlimitedfe\vue.config.js
 */

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: '虚拟设备平台'
    }
  },
  publicPath: './',
  outputDir: path.resolve(__dirname, '../unlimitedServer/view/unlimitedfe/'),
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  productionSourceMap: process.env.NODE_ENV === 'development',
  devServer: {
    proxy: {
      '^/socket.io': {
        target: 'ws:' + process.env.VUE_APP_PROXY_IP,
        ws: true,
        changeOrigin: true
      },
      '^/device': {
        target: 'http:' + process.env.VUE_APP_PROXY_IP
      }
    }
  },
  chainWebpack: (config) => {

  },
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : '',
    output: {
      chunkFilename: 'js/chunk-[chunkhash].js'
    },
    externals: {
      Omega: 'Omega'
    },
    resolve: {
      extensions: ['.js', '.ts', '.vue', '.json', '.scss'],
      alias: {
        src: resolve('src'),
        api: resolve('src/server/api'),
        assets: resolve('src/assets'),
        images: resolve('src/assets/images'),
        components: resolve('src/components'),
        directives: resolve('src/directives'),
        icons: resolve('src/icons'),
        layout: resolve('src/layout'),
        router: resolve('src/router'),
        store: resolve('src/store'),
        utils: resolve('src/utils'),
        views: resolve('src/views'),
        styles: resolve('src/styles')
      }
    }
  }
}
