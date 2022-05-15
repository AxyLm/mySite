import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
	{
		name: "Layout",
		path: "/",
		component: () => import("../views/Index.vue"),
		redirect: "/list",
		children: [
			{ name: "List", path: "/list", component: () => import("../views/Foo.vue") },
			{ name: "about", path: "/about", component: () => import("../views/about.vue") },
		],
	},
];
const router = createRouter({
	routes,
	history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
	next();
});

export { router };
