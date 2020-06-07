import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@fortawesome/fontawesome-free/css/all.css'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' 
import ajax from "vuejs-ajax"
import VueNumber from 'vue-number-animation'
import ECharts from 'vue-echarts' 
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts-gl'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'

Vue.use(SequentialEntrance);
// register component to use
Vue.component('v-chart', ECharts)

 
Vue.use(VueNumber)

Vue.use(ajax)
//Vuesax styles
Vue.use(Vuesax, {
  // options here
})
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  icons: {
    iconfont: ['fa','mdi'],
  },
}).$mount('#app');
export const serverBus = new Vue();


