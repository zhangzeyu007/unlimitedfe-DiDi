/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2022-04-22 12:21:32
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-22 12:44:19
 * @FilePath: \unlimitedfe\src\router\index.js
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
