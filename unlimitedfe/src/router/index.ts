/*
 * @Author: 张泽雨
 * @Date: 2022-04-14 13:55:48
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-15 15:06:12
 * @FilePath: \unlimitedfe\src\router\index.ts
 */
import { createRouter,  RouteRecordRaw, createWebHistory } from 'vue-router'


// 路由配置
const Home = () => import('@/view/home/index.vue');


const routes: Array<RouteRecordRaw> = [
	{
		path: `/home`,
		name: 'home',
		component: Home,
		// 独享守卫
		beforeEnter: (to, from) => {
			console.log('beforeEnter-------------');
		},
	}
];

// 创建路由
const router = createRouter({
	history: createWebHistory(),
	routes
});
// 全局路由守卫分为三种:
// 全局前置守卫
router.beforeEach((to, from, next) => {
	console.log('beforeEach------------------');
	// console.log(to);
	// console.log(from);
	next()
})
// 全局解析守卫
router.beforeResolve(async to => {
 console.log('beforeResolve-------------------------------');
// console.log(to);
})

// 全局后置守卫
router.afterEach((to, from) => {
	console.log('afterEach-------------------------------');
	// console.log(to);
})

export default router;