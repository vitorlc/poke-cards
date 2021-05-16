import 'font-awesome/css/font-awesome.css';

import App from './App.vue'
import Vue from 'vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')
