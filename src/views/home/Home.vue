<template>
  <div class="home_box">
    <NavBar class="nav-bar">
      <div slot="center">首页</div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  export default {
    name: "Home",
    components:{
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
