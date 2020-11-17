
//import { setCookie } from '@/utils/cookies'
export default {
  state() {
    return {
      token: "",
      shoppingCars: []
    };
  },
  mutations: {
    setToken(state, data) {
      state.token = data;
    },
    setShoppingCars(state, data){
      console.log(data);
      state.shoppingCars.push(data);
   //   setCookie('shoppingCars', state.shoppingCars)
    },
    clrearShoppingCars(state, data){
      state.shoppingCars = [];
    //  setCookie('shoppingCars', [])
    }
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
