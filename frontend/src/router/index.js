import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App.vue'
import test from '../components/test.vue'
import login from '../components/login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
      {
        path: '/',
        component: App,
        name: 'home'
      },
      {
        path: '/test',
        component: test,
        name: 'test'
      },
      {
        path: '/login',
        component: login,
        name: 'login'
      }
  ]
})
