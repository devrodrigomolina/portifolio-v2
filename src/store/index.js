import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    themeCurrent: true,
  },
  mutations: {
    CHANGE_THEME(state, payload) {
      state.themeCurrent = payload;
    }
  },
  actions: {
    changeTheme(context, payload) {
      context.commit("CHANGE_THEME", payload)
    }
  },
  modules: {
  }
})
