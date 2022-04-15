/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-13 16:23:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-15 13:46:40
 * @FilePath: \unlimitedfe\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';



const app = createApp(App);
app.use(router);
app.use(Antd).mount("#app")

