import Home from './Components/Home';
import Projects from './Components/Projects';
import VueRouter, { RouteConfig } from 'vue-router';
import Vue from 'vue';
//import Gallery from './Components/Gallery.vue';

Vue.use(VueRouter);

export const myRoutes: RouteConfig[] = [
    createRoute('Home', '/', Home),
    createRoute('Projects', '/projects', Projects),
    //createRoute('Gallery', '/gallery', Gallery)
];

export const AppRouter: VueRouter = new VueRouter({
    mode: 'hash',
    routes: myRoutes
})

function createRoute(name: string, path: string, component: typeof Vue): RouteConfig {
    let config: RouteConfig = {
        name: name,
        path: path,
        component: component
    };

    return config;
}