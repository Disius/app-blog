import {createRouter, createWebHashHistory} from "vue-router";
import {routes} from "./routes";

export const router = createRouter({
    history: createWebHashHistory(process.env.APP_URL),
    routes,
})
