import Vue from 'vue'
import App from './App.vue'
import tView from '../src'

Vue.config.productionTip = false
Vue.use(tView)

new Vue({
    render: h => h(App)
}).$mount('#app')
