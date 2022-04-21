/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-13 16:23:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-21 13:37:45
 * @FilePath: \unlimitedfe\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
// https://vitejs.dev/config/

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '' : '/',
  plugins: [vue()],
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
  },
}))
