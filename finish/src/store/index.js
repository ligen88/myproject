import Vue from 'vue';
import Vuex from 'vuex';
import countAbout from './count'
import user from './user'
Vue.use(Vuex);

export default new Vuex.Store({
   modules:{
       countAbout,
       user
    } 
})
