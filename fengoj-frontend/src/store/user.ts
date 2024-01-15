import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "noLogin",
    },
  }),
  actions: {
    // todo 从远程获取登录信息
    getLoginUser({ commit, state }, payload) {
      commit("updateUser", { userName: "JJ" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
