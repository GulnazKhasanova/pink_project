
import { createStore } from 'vuex'

import cart from './cart'
import catalog from './products'

const store = createStore({
  namespaced: true,
  modules: {
    catalog,
    cart,

  },

  strict: process.env.NODE_ENV !== 'production',
})
export default store
