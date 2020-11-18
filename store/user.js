
//import { setCookie } from '@/utils/cookies'
export default {
  state() {
    return {
      token: "",
      shoppingCart: []
    };
  },
  mutations: {
    setToken(state, data) {
      state.token = data;
    },
    setShoppingCart(state, data){
      console.log(data);
      state.shoppingCart.push(data);
   //   setCookie('shoppingCart', state.shoppingCart)
    },
    clrearShoppingCart(state, data){
      state.shoppingCart = [];
    //  setCookie('shoppingCart', [])
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
