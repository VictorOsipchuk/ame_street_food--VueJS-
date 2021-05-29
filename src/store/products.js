import firebase from 'firebase/app'

export default {
  state: {
    products: [],
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const prod =
          (
            await firebase
              .database()
              .ref(`products`)
              .once('value')
          ).val() || {}

        const product = Object.keys(prod).map(key => ({
          ...prod[key],
          id: key,
          quantity: 1,
        }))
        commit('setProducts', product)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
  },
  getters: {
    products: s => s.products,
  },
}
