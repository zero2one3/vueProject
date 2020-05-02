<template>
    <div class="goods_box">
      <good-item v-for="item in goods" :goodsitems="item"/>
    </div>
</template>

<script>
  import GoodItem from "./GoodItem";
  export default {
    name: "Goods",
    props:['goods'],
    components:{
      GoodItem
    }
  }
</script>

<style scoped>
  .goods_box{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 5px;
    justify-content: space-evenly;
  }
</style>
