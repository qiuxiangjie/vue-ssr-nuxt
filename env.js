/*
 * @Descripttion: 
 * @version: 
 * @author: zhoujianxiang
 * @Date: 2020-11-16 09:50:11
 * @LastEditors: zhoujianxiang
 * @LastEditTime: 2020-11-19 15:47:54
 */


module.exports = {
  dev: {
    MODE: 'development',
    ENV_API: 'http://localhost:8866'   //开发服务器地址
  },
  test: {
   
    ENV_API: 'http://localhost:8867'   //测试服务器地址
  },
  pro: {
    MODE: 'production',
    ENV_API: 'http://localhost:8866'  // 正式服务器地址
  }
}