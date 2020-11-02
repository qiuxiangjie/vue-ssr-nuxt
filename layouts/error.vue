<template>
  <div>
    <h1 v-if="error.statusCode === 404">页面不存在！</h1>
    <h1 v-else>系统应用错误</h1>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>
<script>
export default {
  name: "",
  layout: "blank",
  props: ["error"],
};
</script>
<style></style>
