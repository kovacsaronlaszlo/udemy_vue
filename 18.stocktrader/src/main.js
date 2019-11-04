import Vue from 'vue'
import VueRouter from 'vue-router'
import VueReasource from 'vue-resource'

import App from './App.vue'
import { routes } from './routes'
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueReasource);

Vue.http.options.root = 'https://udemyvue-dafb0.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  made: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
