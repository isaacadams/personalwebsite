import { AppRouter, myRoutes } from './routes';
//import App from './Components/App.vue';
import App from './Components/App.vue';
import Vue from 'vue';

//Vue.component('app', App);
const AppLoader = Vue.component('app-load', {
    template: `
        <App :routes="routesData"></App>
    `,
    data: () => {
        return {
            routesData: myRoutes
        }
    },
    components: {
        App
    }
});

new Vue({
    router: AppRouter,
    el: '#app',
    render(h) { return h(AppLoader) },
    mounted: function () {
        console.log('mounted!');
    }
})


export default {
    test: function () {
        console.log('It Works!');
    }
}