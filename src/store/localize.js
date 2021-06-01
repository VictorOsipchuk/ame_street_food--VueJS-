export default {
  state: {
    locale: 'en',
  },
  getters: {
    locale(state) {
      return state.locale
    },
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale
    },
  },
  actions: {
    changeLang({ commit }, lang) {
      commit('setLocale', lang)
    },
  },
}
