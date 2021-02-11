import { createApp } from 'vue'
import App from './App.vue'
// import Vue from "vue"

import './components';

// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#root')
