export default {
  state() {
    return {
      token: "",
    };
  },
  mutations: {
    setToken(state, val) {
      state.token = val;
    },
    },
  
};
