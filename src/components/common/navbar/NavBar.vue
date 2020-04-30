<template>

  <div class="navbar_box">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>

</template>

<script>

  export default {
    name: "NavBar",

  }
</script>

<style scoped>
  .navbar_box{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }
  .navbar_box div{
    height: 44px;
    line-height: 44px;

  }
  .left, .right{
    width: 60px;
  }
  .center{
    flex: 1;
  }

</style>
