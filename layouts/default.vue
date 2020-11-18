<!--
 * @Descripttion: 
 * @version: 
 * @author: zhoujianxiang
 * @Date: 2020-11-16 08:45:45
 * @LastEditors: zhoujianxiang
 * @LastEditTime: 2020-11-18 10:46:51
-->
<template>
  <div>
    <NuxtLink to="/"> Index </NuxtLink>
     <NuxtLink to="/list"> List </NuxtLink>
      <NuxtLink to="/admin"> Admin </NuxtLink>
      <a-badge :count="shoppingCart.length" style="position: fixed; top: 20px; right: 20px;">
        <img src="~/assets/icons/cart.jpg" alt="">
        
      <a href="#" class="head-example" />
    </a-badge>
    <div class="cart" ></div>
    <nuxt />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'default',
    data() {
      return {

      }
    },
    computed: {
      ...mapState({shoppingCart: state => state.user.shoppingCart})
    }
  }

  
</script>

<style>
  .cart {
    background: url('~assets/icons/cart.jpg') ;
     width: 100px;
     height: 100px;
  }
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
