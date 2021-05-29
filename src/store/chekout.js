import firebase from 'firebase/app'
export default {
  state: {
    orders: [],
  },
  actions: {
    async postOrder(
      { dispatch, commit, getters },
      { name, phone, adress, coment }
    ) {
      try {
        const oid = new Date().getTime()
        const date = new Date().toUTCString()
        const uid = await dispatch('getUid')
        const productCart = { ...getters.CART }
        await firebase
          .database()
          .ref(`/users/${uid}/orders/${oid}/order_info`)
          .set({
            name,
            phone,
            adress,
            coment,
            Date: date,
          })
        await firebase
          .database()
          .ref(`/users/${uid}/orders/${oid}/order_product`)
          .set(productCart)
        commit('clearCart')
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async getOrders({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid')
        const orders =
          (
            await firebase
              .database()
              .ref(`/users/${uid}/orders`)
              .once('value')
          ).val() || {}
        const items = Object.keys(orders).map(key => ({
          ...orders[key],
          id: key,
        }))
        commit('stateOrders', items)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
  },
  mutations: {
    stateOrders(state, orders) {
      state.orders = orders
    },
  },
  getters: {
    orders: s => s.orders,
  },
}
