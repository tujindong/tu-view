import Vue from 'vue';
import App from './App.vue';
import tuview from '../packages/tuview';
Vue.use(tuview.install)

new Vue({
    render: h => h(App)
}).$mount('#app');