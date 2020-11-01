<template>
  <div>
    <div class="til">List</div>
    <div v-for="item in goods" :key="item.id">
      {{ item.text }}
    </div>
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
    const res = await $axios.$get("/api/goods");
    let { code, data } = res;
    console.log("code", res);
    if (code === 200) {
      return { goods: data };
    } else {
      error({ statusCode: 400, messages: "查询失败" });
    }
  },
};
</script>
<style></style>
