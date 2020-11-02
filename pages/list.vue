<template>
  <div>
    <div class="til">List</div>
    <div v-for="item in goods" :key="item.id">
      <NuxtLink :to="'/list/' + item.id">{{
        item.text
      }}</NuxtLink>
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
export default {
  name: "List",
  data() {
    return {
      goods: [],
    };
  },
  async asyncData({ $axios, error }) {
    // 1、运行时间是在组件创建实例之前，this不能用
    // 2、nuxt传递上下文进来
    // 3、 仅仅存在页面组件
    const res = await $axios.$get("/api/goods");
    let { code, data } = res;
    console.log("code", res);
    if (code === 200) {
      // 返回的数据直接和data里面的数据合并
      return { goods: data };
    } else {
      error({ statusCode: 400, messages: "查询失败" });
    }
  },
};
</script>
<style></style>
