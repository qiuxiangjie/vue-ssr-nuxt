import axios from "axios";
import { MessageBox } from "element-ui";
import store from "../store";
let env = JSON.parse(process.env.VUE_APP_SECRET);
import router from "@/router";
import { exportFile } from "./index";

// 创建实例
const service = axios.create({
 // baseURL: process.env.VUE_APP_MOCK ? "/mock" : env.apiHost,
  timeout: 30000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    // 添加时间戳 阻止ie浏览器缓存
    let url = config.url;
    let timeStamp = "timestamp=" + new Date().getTime().toString();
    if (url.indexOf("?") === -1) {
      url = url + "?" + timeStamp;
    } else {
      url = url + "&" + timeStamp;
    }
    config.url = url;

    // 所有请求带上token
    if (store.state.token !== null && store.state.token !== "") {
      config.headers["Authorization"] = store.state.token;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  (response) => {
    let data = response.data;
    if (data.code === 200) {
      return data;
    } else if (
      response.headers["content-type"] ===
      "application/vnd.ms-excel;charset=UTF-8"
    ) {
      exportFile(response);
      return;
    } else if (data.code === 503014) {
      MessageBox.alert(data.msg, "提示", {
        type: "error",
      });
    } else if (data.code === 502005) {
      MessageBox.alert(data.msg, "提示", {
        type: "error",
      })
        .then(() => {
          window.location = env.loginUrl;
        })
        .catch(() => {
          window.location = env.loginUrl;
        });
    } else {
      MessageBox.alert(data.msg, "错误", {
        type: "error",
      });
    }
    return Promise.reject(response);
  },
  (error) => {
    let errorInfo = {};
    if (error.response) {
      errorInfo.errCode = error.response.status;
      errorInfo.msg = error.response.data.msg;
      errorInfo.code = error.response.data.code;
    }
    if (errorInfo.code === 502005) {
      // token不可用或超时， 自动跳转到登录页面
      MessageBox.alert("登录失效或登录超时，请重新登录", "登录失效", {
        type: "error",
        callback: () => {
          // 移除用户名信息
          store.commit("clearLogin");
          // 记住当前页面地址
          const currentRouterName = router.history.current.name;
          store.commit("setCurrentRoute", currentRouterName);

          // 跳转到登录页面
          /*   router.push({  
            path: '/login',
          })*/
          window.location = env.loginUrl;
        },
      });
    } else {
      MessageBox.confirm(errorInfo.msg || error.message, "错误", {
        type: "error",
      });
    }

    return Promise.reject(errorInfo);
  }
);

export default service;
