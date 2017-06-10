import Vue from 'vue';
window.Vue = Vue;

import VueRouter from 'vue-router';
window.VueRouter = VueRouter;
Vue.use(VueRouter);

import axios from 'axios';
window.axios = axios;
axios.defaults.baseURL = 'https://my-first-firebase-b9105.firebaseio.com/';


import Flash from './utilities/Flash.vue';
import Form from './utilities/Form.js';
Vue.component('flash', Flash);
window.Form = Form;
window.events = new Vue();
window.flash = function (message) {
    window.events.$emit('flash', message);
};


import {routes} from './routes.js';
import {store} from './store/store.js';

const router = new VueRouter({
    routes,
    mode: 'history',

});


import App from './App.vue'

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
    created() {
        this.$store.dispatch('fetchRecipes', 'from Vue instance app.js');
    }

});
