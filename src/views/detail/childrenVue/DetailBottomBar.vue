<template>
    <div class="bottom-bar">

      <div class="bar-left">
        <div class="Cservice">
          <img src="../../../assets/img/DetailBottomBar/Cservice.png" alt="">
          <span>客服</span>
        </div>
        <div class="shop">
          <img src="../../../assets/img/DetailBottomBar/shop.png" alt="">
          <span>店铺</span>
        </div>
        <div class="collect">
          <img src="../../../assets/img/DetailBottomBar/collect.png" alt="">
          <span>收藏</span>
        </div>
      </div>

      <div class="bar-right">
        <div class="addTo" @click="addToCart">加入购物车</div>
        <div class="buying">购买</div>
      </div>

    </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addToCart(){
        this.$emit('addToCart')
      },
    },
  }
</script>

<style scoped>
  .bottom-bar{
    height: 49px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    box-shadow: 0 -1px 3px rgba(100,100,100,.19);
  }
  .bar-left, .bar-right{
    flex: 1;
    display: flex;
    text-align: center;
  }
  .Cservice div, .shop div, .collect div{
    display: flex;
    width: 100%;
  }
  .Cservice, .shop, .collect{
    flex: 1;
  }
  .bar-left{
    font-size: 14px;
  }
  .bar-left img{
    height: 24.5px;
  }
  .bar-left span{
    display: block;

  }
  .addTo, .buying{
    flex: 1;
  }
  .bar-right div{
    line-height: 49px;
    font-size: 15px;
  }
  .bar-right .addTo{
    background: yellow;
  }
  .bar-right .buying{
    background: var(--color-tint);
    color: #fff;
  }

</style>
