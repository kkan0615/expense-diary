import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0c9dde55 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _59104d48 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages_signup" */))
const _0dd580d2 = () => interopDefault(import('..\\pages\\calendar\\_year\\_month\\index.vue' /* webpackChunkName: "pages_calendar__year__month_index" */))
const _7c347a48 = () => interopDefault(import('..\\pages\\calendar\\_year\\_month\\detail.vue' /* webpackChunkName: "pages_calendar__year__month_detail" */))
const _61fced69 = () => interopDefault(import('..\\pages\\calendar\\_year\\_month\\list.vue' /* webpackChunkName: "pages_calendar__year__month_list" */))
const _e848b4c8 = () => interopDefault(import('..\\pages\\expense\\_year\\_month\\_day\\index.vue' /* webpackChunkName: "pages_expense__year__month__day_index" */))
const _42f63b3e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/login",
      component: _0c9dde55,
      name: "login"
    }, {
      path: "/signup",
      component: _59104d48,
      name: "signup"
    }, {
      path: "/calendar/:year?/:month?",
      component: _0dd580d2,
      name: "calendar-year-month"
    }, {
      path: "/calendar/:year?/:month?/detail",
      component: _7c347a48,
      name: "calendar-year-month-detail"
    }, {
      path: "/calendar/:year?/:month?/list",
      component: _61fced69,
      name: "calendar-year-month-list"
    }, {
      path: "/expense/:year?/:month?/:day?",
      component: _e848b4c8,
      name: "expense-year-month-day"
    }, {
      path: "/",
      component: _42f63b3e,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
