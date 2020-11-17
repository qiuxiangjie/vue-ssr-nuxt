
export default {
  state() {
    return {
     
    };
  },
  mutations: {

  },
  getters: {},
  actions: {
    // nuxtServerInit 必须是存在于store根index的action里面,并且仅仅在服务端运行
    // 参数一： action的上下方文， 参数二： 组件的上下文
      nuxtServerInit({ commit }, { app, req }) {
          // 解决刷新，服务器渲染token找不到问题
      const token = app.$cookies.get("token"); 
      const shoppingCars = app.$cookies.get("shoppingCars"); 

      // let cookie = req.headers.cookie; 
      // let token = cookieparse(cookie).token;
      // commit('setToken', token);

      if (token) {
        commit("user/setToken", token);
      }
      if (shoppingCars) {
       // commit("user/setShoppingCars", shoppingCars);
      }
    },
  },
};
