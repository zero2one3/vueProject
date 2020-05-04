<template>
  <div class="shopDetail">
    <div class="shopTop">
      <div class="shopLogo">
        <img :src="shop.shopLogo" alt="">
      </div>
      <div class="shopName">
        <span>{{shop.name}}</span>
      </div>
    </div>

    <div class="detailInfo">

      <div class="right">
        <div class="csells">
          <span>{{shop.cSells}}</span>
          <span>总销量</span>
        </div>
        <div class="cgoods">
          <span>{{shop.cGoods}}</span>
          <span>全部宝贝</span>
        </div>
      </div>

      <div class="center"><span></span></div>

      <div class="left">
        <div class="each_score" v-for="(item, index) in shop.score" :key="index">
          <span class="l">{{item.name}}</span>
          <span class="c">{{item.score}}</span>
          <span class="r" :class="item.isBetter?'isgood':'isbad'"><span>{{item.isBetter?'高':'低'}}</span></span>
        </div>
      </div>

    </div>

    <div class="gotoShop">
      <a href="javascript:;">进店逛逛</a>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ShopInfo",
    props: ['shop']
  }
</script>

<style scoped>
  .shopDetail{
    padding: 20px 0 10px;
    color: #000;
    border-bottom: 6px solid #eee;
  }
  .shopTop{
    height: 80px;
  }
  .shopTop .shopLogo{
    float: left;
    width: 15%;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid #eee;
    margin-left: 15px;
  }
  .shopLogo img{
    width: 100%;
  }
  .shopTop .shopName{
    float: left;
    height: 100%;
    width: 50%;
    position: relative;
    margin-left: 20px;
  }
  .shopName span{
    display: block;
    position: relative;
    top: 20%;
  }
  .detailInfo{
    height: 100px;
    display: flex;
  }
  .detailInfo .left, .detailInfo .right{
    flex: 10;
  }
  .detailInfo .center{
    flex: 2;
  }
  .detailInfo .right{
    height: 100%;
    display: flex;
  }
  .detailInfo .right div{
    flex: 1;
  }
  .detailInfo .right div span{
    display: block;
    text-align: center;
    margin-top: 15px;
    font-size: 15px;
  }
  .detailInfo .center{
    position: relative;
  }
  .detailInfo .center span{
    display: block;
    position: relative;
    left: 50%;
    height: 70px;
    border-left: 2px solid #eee;
  }
  .each_score{
    display: flex;
  }
  .each_score span{
    font-size: 15px;
    height: 33.33px;
  }
  .l{
    flex: 3;
    text-align: center;
  }
  .c{
    flex: 2;
    text-align: left;
    color: #ff0031;
  }
  .r{
    flex: 1;
    color: #fff;
  }
  .isbad span{
    background: #ff0031;
  }
  .isgood span{
    background: green;
  }
  .gotoShop{
    width: 40%;
    margin: 10px auto;
    text-align: center;
    padding: 5px 0;
    font-size: 16px;
    color: #666;
    background: #eee;
    border-radius: 15px;
  }
</style>
