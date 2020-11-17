/*
 * @Descripttion: 
 * @version: 
 * @author: zhoujianxiang
 * @Date: 2020-11-16 08:45:45
 * @LastEditors: zhoujianxiang
 * @LastEditTime: 2020-11-17 14:59:48
 */

export default ({ store, $axios, redirect }) => {
  
 // 默认配置
  $axios.defaults = {
    baseURL: '', 
    // withCredentials: true,
    timeout: 30000,
  }
 
 

  //请求拦截
  $axios.onRequest((config) => {
    
    // 添加时间戳 阻止ie浏览器缓存
    let url = config.url
    let timeStamp = 'timestamp=' + new Date().getTime().toString()
    url = url.indexOf('?') === -1 ? url + '?' + timeStamp : url + '&' + timeStamp;
    config.url = url

    // 添加token
    if (store.state.user.token) {
      config.headers.Authorization = store.state.user.token;
    }
    return config;
  });
  //  返回拦截
  $axios.onResponse(response => {
    const res = response.data;
    console.log(res);
    if(res.code === 200) {
      return res;
    } else {
      return Promise.reject(response)
    }
  })
 
    // 错误回调
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      switch (code) {
        //错误代码
          case 401:
              sessionStorage.clear();
              redirect('/login')
              break;
          case 403:
              sessionStorage.clear();
              redirect('/login')
              break;
          case 404:
            redirect('/404')
              break;
          default:
            Message.error(error.message);
              break;
      }
    })
  
};
