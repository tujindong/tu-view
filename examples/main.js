import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';

import Header from './components/header/HeadCommon.vue';
Vue.component('app-header', Header);

import { Button } from 'vue-cookie-ui';
Vue.use(Button);


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');