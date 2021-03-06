/*
 * @Descripttion: 
 * @version: 
 * @author: zhoujianxiang
 * @Date: 2020-11-16 08:45:45
 * @LastEditors: zhoujianxiang
 * @LastEditTime: 2020-11-19 16:32:26
 */

const env = require('./env');
console.log('target:::',env[process.env.MODE].ENV_API)

module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [{src: 'https://polyfill.io/v3/polyfill.min.js?features=Promise%2CArray.prototype.includes'}],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "red" },
  // loading: '~/components/loading.vue', // 自定义loading组件
  /*
   ** Global CSS
   */
  css: [
    "ant-design-vue/dist/antd.css",
    "~assets/styles/index.css"
  ],
  styleResources: {
    less: './assets/styles/variables.less'
    // sass: ...
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/antd-ui", "@/plugins/api-inject", "@/plugins/interceptor"],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "cookie-universal-nuxt",  // 解决服务器获取cookie问题
    '@nuxtjs/style-resources', // 解决
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
    // credentials: true, //跨域请求需使用凭证
    //retry: { retries: 3 } // 失败请求拦截和次数
  },
  proxy: {
    '/api/': {
      changeOrigin: true,
      target: env[process.env.MODE].ENV_API,
      pathRewrite: {
       //   '^/api/': ''
      },
      headers: {
        host: env[process.env.MODE].ENV_API,
        referer: 'http://www.a.com',
        origin: 'http://www.b.com',
        changeOrigin:  'http://www.c.com',
      }
    }
  },

  router: {
    // middleware: ["auth"], // 全局路由中间件
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    analyze: true,
    extend(config, ctx) {
      extractCSS: true   // css 打包成独立文件
    },
  },
  telemetry: true,
  
  /* 修改默认端口 */
  server:{
    host:"127.0.0.1",
    port:3000
  }
};
