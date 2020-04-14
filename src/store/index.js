import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        list: "Go out for shopping",
      },
      {
        id: 2,
        list: "Take a Stroll",
      },
      {
        id: 3,
        list: "Buy me sharwama",
      },
    ],
    newTask: null,
  },
  mutations: {},
  actions: {},
  modules: {},
});
