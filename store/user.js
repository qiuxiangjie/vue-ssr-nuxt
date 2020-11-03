export default {
  state() {
    return {
      token: "",
    };
  },
  mutations: {
    setToken(state, data) {
      state.token = data;
    },
  },
  getters: {
    isLogin(state) {
      return !!state.token;
    },
  },
  actions: {
    login({ commit, getters }, data) {
      // this指的是store的实力
      return this.$login(data).then((res) => {
        if (res.token) {
          commit("setToken", res.token);
        }
        return res;
      });
    },
  },
};
