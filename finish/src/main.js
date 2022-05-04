import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/global.css"
import  request from "@/api/requset"
import store from "@/store"

Vue.config.productionTip = false;
Vue.prototype.request=request;
Vue.use(ElementUI);

const vm=new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
      Vue.prototype.$bus=this;
  },
}).$mount('#app')
console.log(vm);