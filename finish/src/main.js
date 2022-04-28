import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/global.css"
import  request from "@/api/requset"


Vue.config.productionTip = false;
Vue.prototype.request=request;
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
      Vue.prototype.$bus=this;
      console.log(this);
  },
}).$mount('#app')
