/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2022-04-22 12:21:32
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-22 14:15:09
 * @FilePath: \unlimitedfe\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './styles/element-variables.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
