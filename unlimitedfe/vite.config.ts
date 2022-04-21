/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-13 16:23:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-21 16:00:08
 * @FilePath: \unlimitedfe\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
const path = require('path')

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => ({
  // root: resolve(__dirname, 'src'),
  base: mode === 'production' ? '' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
  },
  define: {
    isDev: JSON.stringify(mode !== 'production'),
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  server: {
    hmr: { overlay: false },
    // https: true,
    proxy: {

    },
  },
  css: {
    postcss: '',
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1db5ad',
        },
        javascriptEnabled: true,
      },
    },
  },
  build: {
    assetsDir: '',
    outDir: path.resolve(__dirname, '../unlimitedServer/view/unlimitedfe/'),
    cssCodeSplit: false,
    manifest: true,
    rollupOptions: {
      output: {
        format: 'system',
        entryFileNames: '[name].[format].[hash].js',
        chunkFileNames: 'chunk.[format].[hash].js',
        assetFileNames: '[name].[hash].[ext]',
        compact: true,
        manualChunks: {
          vue: ['vue']
        },
      }
    }
  },
}))
