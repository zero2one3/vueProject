<template>
    <div class="item">
      <div><slot></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBarItem"
    }
</script>

<style scoped>
  .item{
    flex: 1;
    height: 49px;

  }
  .item div{
    height: 49px;
    text-align: center;
    line-height: 49px;
  }
</style>
