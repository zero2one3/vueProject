<template>
    <div class="classifi_box">
      <NavBar class="nav-bar">
        <div slot="center">商品分类</div>
      </NavBar>
    </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  export default {
    name: "Classifi",
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
