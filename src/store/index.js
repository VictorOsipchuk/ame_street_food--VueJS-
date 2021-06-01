import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import info from './info'
import chekout from './chekout'
import items from './products'
import cart from './cart'
import errors from './errors'
import localize from './localize'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    items,
    auth,
    info,
    chekout,
    cart,
    errors,
    localize,
  },
})
