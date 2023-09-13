import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
export const routers = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: Home },
        {
            path: "/education",
            name: "education",
            component: () => import("@/pages/Education.vue"),
        },
        {
            path: "/skills",
            name: "skills",
            component: () => import("@/pages/Skills.vue"),
        },
        {
            path: "/portfolio",
            name: "portfolio",
            component: () => import("@/pages/Portfolio.vue"),
        },
        {
            path: "/contacts",
            name: "contacts",
            component: () => import("@/pages/Contacts.vue"),
        },
    ],
});
