<template>
    <div class="goods_box">
      <good-item v-for="item in goods"
                 :goodsitems="item"
                 :whichgoods="whichgoods"/>
    </div>
</template>

<script>
  import GoodItem from "./GoodItem";
  export default {
    name: "Goods",
    props:['goods','whichgoods'],
    components:{
      GoodItem,


    },
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
