import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import Vuex from 'vuex'
import _store from './store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter(routes)
const store = new Vuex.Store(_store)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
