<template>
    <div class="shopcart_box">
      <NavBar class="nav-bar">
        <div slot="center">购物车{{count}}</div>
      </NavBar>
    </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  export default {
    name: "Shopcart",
    data(){
      return {
        count: 0
      }
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .nav-bar{
    background: var(--color-tint);
    color: #fff;
  }
</style>
