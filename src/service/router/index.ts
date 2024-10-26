import { createWebHistory, createRouter } from 'vue-router'
import Index from "../../pages/Index.vue";
import About from "../../pages/About.vue";
import Jokes from "../../pages/Jokes.vue";
import Games from "../../pages/Games.vue";
import Game from "../../pages/Game.vue";
import {RouteItem} from "./types.ts";

export const routes:RouteItem[] = [
    { path: '/', component: Index, name: "Home" },
    { path: '/about', component: About, name: "About" },
    { path: '/jokes', component: Jokes, name: "Jokes" },
    { path: '/games', component: Games, name: "Games" },
    { path: '/games/:id', component: Game, name: "Game" },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})