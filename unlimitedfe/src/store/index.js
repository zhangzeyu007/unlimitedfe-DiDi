/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2022-04-22 12:21:32
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-07 16:20:02
 * @FilePath: \unlimitedfe\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleFiles = require.context('./modules', true, /\.js$/)
console.log(moduleFiles.keys())
const modules = moduleFiles.keys().reduce((modules, modulePath) => {
  console.log(modulePath)
  const moduleName = modulePath.replace(/\.\/(.*)\.js$/, '$1')
  console.log(moduleFiles(modulePath).default)
  // todo 获取文件内容
  modules[moduleName] = moduleFiles(modulePath).default
  console.log(modules)
  return modules
}, {})

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules
})
