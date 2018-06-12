import App from './App.vue';
import Vue from 'vue';
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//全局事件总线 
window.EventBus = new Vue();
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
