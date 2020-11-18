
 * @Descripttion: 
 * @version: 
 * @author: zhoujianxiang
 * @Date: 2020-11-16 08:45:45
 * @LastEditors: zhoujianxiang
 * @LastEditTime: 2020-11-17 17:30:58

<template>
  <div>
    <div class="til">List</div>
    <div v-for="item in goods" :key="item.id">
      <NuxtLink :to="'/list/' + item.id">{{
        item.text
      }}</NuxtLink>
      <a-button @click="addGoods(item)">加入购物车</a-button>
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
export default {
  name: "List",
  head: {
   // title: '商品列表', // 动态头部这里不能声明
    meta: [],
    link: []
  },
  data() {
    return {
      goods: [],
    };
  },
  created(){
    console.log(process.broswer)
  },
  async asyncData({ $axios, error, app }) {
    app.head.title = '动态头部信息'

    // 1、运行时间是在组件创建实例之前，this不能用
    // 2、nuxt传递上下文进来
    // 3、 仅仅存在页面组件
    const data = await $axios.$get("/api/goods");
    // 返回的数据直接和data里面的数据合并
      return { goods: data };
  },
  methods: {
    addGoods(good){
      this.$store.commit('user/setShoppingCart', good)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
};
</script>
<style></style>
