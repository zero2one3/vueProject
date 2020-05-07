<template>
    <div class="public-lists">

      <div class="item1 item">
        <div class="img"><img src="../../../assets/img/personal/email.png" alt=""></div>
        <div class="txt"><span>我的消息</span></div>
      </div>

      <div class="item2 item">
        <div class="img"><img src="../../../assets/img/personal/grade.png" alt=""></div>
        <div class="txt"><span>积分商城</span></div>
      </div>

      <div class="item3 item">
        <div class="img"><img src="../../../assets/img/personal/vip.png" alt=""></div>
        <div class="txt"><span>会员卡</span></div>
      </div>

      <div class="item4 item">
        <div class="img"><img src="../../../assets/img/personal/cart.png" alt=""></div>
        <div class="txt"><span>我的购物车</span></div>
      </div>

      <div class="item5 item">
        <div class="img"><img src="../../../assets/img/personal/download.png" alt=""></div>
        <div class="txt"><span>下载购物APP</span></div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "PublicLists"
  }
</script>

<style scoped>
  .public-lists{
    width: 100%;
  }
  .item{
    width: 100%;
    height: 60px;
    display: flex;
    border-bottom: 2px solid #eee;
  }
  .item div:nth-child(1){
    flex: 1;
  }
  .item div:nth-child(2){
    flex: 8;
  }
  .item .img{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item .img img{
    width: 55%;
  }
  .item .txt{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 18px;
  }
</style>
