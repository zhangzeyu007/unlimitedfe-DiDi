import { createRouter,  RouteRecordRaw, createWebHistory } from 'vue-router'


// 路由配置
const Home = () => import('@/view/home/index.vue');


const routes: Array<RouteRecordRaw> = [
	{
		path: `/home`,
		name: 'home',
		component: Home,
	},

];


const router = createRouter({
	history: createWebHistory(),
	routes
});


export default router;