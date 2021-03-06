import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-axios-e768b.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'asdf'
axios.defaults.headers.get['Accepts'] = 'application/json'

// interceptors
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request interceptor: ', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response interceptor: ', res)
  return res
})

// remove interceptors
axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.request.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
