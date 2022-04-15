/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-13 16:23:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-15 11:56:22
 * @FilePath: \unlimitedfe\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app")

