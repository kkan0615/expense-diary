import Vue from 'vue'
import Vuex from 'vuex'

import test from './modules/test'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test,
    auth
  }
})