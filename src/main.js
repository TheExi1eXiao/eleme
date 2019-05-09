import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./tools/rem.js"
import fastClick from "fastclick"
// import './registerServiceWorker'

Vue.config.productionTip = false

if ( "addEventListener" in document ) {
	document.addEventListener( 'DOMContentLoaded', ()=>{
		fastClick.attach(document.body);
	},false);
}

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
