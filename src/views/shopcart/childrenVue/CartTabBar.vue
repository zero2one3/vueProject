<template>
    <div class="cart-tab-bar">

      <div class="all-select">
        <div class="point" @click="allPointClick">
          <img src="../../../assets/img/cart/no.png" alt="" v-show="!$store.state.allPointIsShow">
          <img src="../../../assets/img/cart/yes.png" alt="" v-show="$store.state.allPointIsShow">
        </div>
        <div class="txt"><span>全选</span></div>
      </div>

      <div class="Checkout">
        <div><span>结算</span></div>
      </div>

      <div class="sumPrice">
        <span>合&nbsp;计：</span>
        <span>￥&nbsp;12.22</span>
      </div>

    </div>
</template>

<script>
  export default {
    name: "CartTabBar",
    methods: {
      //监听全选框的点击,调用
      allPointClick(){
        this.$store.commit('allPointsClick')
      }
    }
  }
</script>

<style scoped>
  .cart-tab-bar{
    height: 49px;
    box-shadow: 0 2px 6px rgba(100,100,100,.3);
  }
  .all-select, .sumPrice, .Checkout{
    height: 100%;
  }
  .all-select{
    float: left;
    width: 20%;
    display: flex;
  }
  .all-select .point{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .all-select .point img{
    width: 100%;
  }
  .all-select .txt{
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sumPrice{
    float: right;
    width: 40%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .sumPrice span:nth-child(1){
    color: #000;
  }
  .sumPrice span:nth-child(2){
    margin-right: 5px;
    font-size: 13px;
    color: #ff0031;
  }
  .Checkout{
    width: 30%;
    float: right;
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
  .Checkout div{
    width: 100%;
    height: 80%;
    background: var(--color-tint);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }
  .Checkout div span{
    font-size: 17px;
    color: #fff;
  }
</style>
