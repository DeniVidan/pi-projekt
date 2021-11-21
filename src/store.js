import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
  },
  mutations: {
    updateUser(state, payload) {
      state.currentUser = payload;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  actions: {},
  modules: {},
});
