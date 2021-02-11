import { createApp } from 'vue';
import App from './App.vue';

import './componentes';

Vue.config.productionTip = false

new Vue({
    render: h => h(App),

}).mount('#root')