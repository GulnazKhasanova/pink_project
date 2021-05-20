import * as cartAPI from '@/api/cartApi'


export default {
  namespaced: true,

  state: {
    cartProducts: [],
  },

  getters: {
    cartProducts: (state) => state.cartProducts,
    allQuantity: (state) => state.cartProducts.reduce((all, prod) => all + prod.quantity, 0),
      cartTotal: (state) => state.cartProducts.reduce((total,prod) => total + prod.quantity * prod.productPrice, 0),
  },

  mutations: {


    setCartProducts(state, cartProducts) {
      state.cartProducts = cartProducts
    },

    addToCart: (state, prod) => {
      state.cartProducts.push(prod)
      console.log(prod)
    },


    delToCart: (state, prod) => {
      state.cartProducts = state.cartProducts.filter(el => +el.id !== +prod.id)
      console.log(prod)
    },

    incCart: (state, prod) => {
      let index = state.cartProducts.findIndex((good) => good.id === prod.id)
      state.cartProducts[index].quantity = ++state.cartProducts[index].quantity
    },

    incDelCart: (state, prod) => {
      let index = state.cartProducts.findIndex((good) => good.id === prod.id)
      state.cartProducts[index].quantity = --state.cartProducts[index].quantity
    },
  },

  actions: {
    async getCartProducts({ commit }) {
      try {
        const { content } = await cartAPI.all()
        commit('setCartProducts', content)
      } catch (e) {
        console.log(e)
      }
    },

    async incCart({ state, commit }, product) {
      try {
        let inCart = state.cartProducts.find((prod) => +prod.id === +product.id)

        if (inCart) {
          await cartAPI.inc(product)

          commit('incCart', inCart)
        } else {
          const prodForCart = { ...product, quantity: 1 }
          await cartAPI.add(prodForCart)
          commit('addToCart', prodForCart)
        }
      } catch (e) {
        console.log(e)
      }
    },

    async decCart({ state, commit }, product) {
      try {
        let inCart = state.cartProducts.find((prod) => +prod.id === +product.id)
        if (product.quantity > 1) {
          await cartAPI.dec(product)
          commit('incDelCart', inCart)
        } else {
          const prodForCart = { ...product, quantity: 1 }
          await cartAPI.del(prodForCart)
          commit('delToCart', prodForCart)
        }
      } catch (e) {
        console.log(e)
      }
    },
  },
}
