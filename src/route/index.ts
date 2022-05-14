import { createRouter, createWebHistory } from "vue-router";
const routes = [
	{
		name: "Layout",
		path: "/",
		component: () => import("../views/Index.vue"),
		children: [
			{ name: "Foo", path: "/foo", component: () => import("../views/Foo.vue") },
			{ name: "about", path: "/about", component: () => import("../views/about.vue") }
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
