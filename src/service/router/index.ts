import { createWebHistory, createRouter } from 'vue-router'
import Index from "../../pages/Index.vue";
import Games from "../../pages/Games.vue";
import About from "../../pages/About.vue";
import {routeItem} from "./types.ts";

export const routes:routeItem[] = [
    { path: '/', component: Index, name: "Home" },
    { path: '/games', component: Games, name: "Games" },
    { path: '/about', component: About, name: "About" },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})