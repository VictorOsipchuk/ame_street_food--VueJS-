export default {
  state: {
    cart: [],
  },
  mutations: {
    clearCart(state) {
      state.cart = []
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExist = false
        state.cart.map(function(item) {
          if (item.id === product.id) {
            isProductExist = true
            item.quantity++
          }
        })
        if (!isProductExist) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    },
  },
  actions: {
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product)
    },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit('DECREMENT', index)
    },
    DELETE_FROM_CART({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    },
  },
  getters: {
    CART(state) {
      return state.cart
    },
  },
}
