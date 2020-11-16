/*
 * @Descripttion: 
 * @version: 
 * @author: zhoujianxiang
 * @Date: 2020-11-16 09:50:11
 * @LastEditors: zhoujianxiang
 * @LastEditTime: 2020-11-16 16:28:42
 */


module.exports = {
  dev: {
    MODE: 'development',
    ENV_API: 'http://localhost:8888'   //测试服务器地址
  },
  test: {
   
    ENV_API: 'http://localhost:8889'   //测试服务器地址
  },
  pro: {
    MODE: 'production',
    ENV_API: 'http://localhost:8888'  // 正式服务器地址
  }
}