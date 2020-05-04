<template>
  <div class="titleDetail" v-if="Object.keys(goods).length !== 0">

    <div class="title">
      <span>{{goods.title}}</span>
    </div>

    <div class="price">
      <span class="newPrice">{{goods.newPice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <div class="discount">
        <span>{{goods.discount}}</span>
      </div>
    </div>

    <div class="columns">
      <div class="l"><span>{{goods.columns[0]}}</span></div>
      <div class="c"><span>{{goods.columns[1]}}</span></div>
      <div class="r"><span>{{goods.services[goods.services.length-1].name}}</span></div>
    </div>

    <div class="services">
      <div v-for="(item, index) in goods.services" v-if="index!==3" class="each_service">
        <div class="icon"><img :src="item.icon" alt=""></div>
        <div class="txt"><span>{{item.name}}</span></div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
      name: "TitleInfo",
      props: {
        goods: {
          type: Object
        }
      },
    }
</script>

<style scoped>
  .titleDetail{
    border-bottom: 6px solid #eee;
  }
  .title{
    width: 100%;
    padding: 12px 8px;
  }
  .title span{
    color: #000;
    font-weight: 600;
  }
  .price{
    padding: 8px;
  }
  .price .newPrice{
    font-size: 26px;
    color: #ff0031;
  }
  .oldPrice{
    margin-left: 15px;
    text-decoration: line-through
  }
  .discount{
    background: var(--color-tint);
    border-radius: 10px;
    display: inline-block;
    padding: 4px;
    margin-left: 10px;
    color: #fff;
    font-size: 13px;
  }
  .columns{
    display: flex;
    margin: 20px 10px 0 10px;
    padding-bottom: 15px;
    border-bottom: 2px solid #eee;
    opacity: 0.8;
  }
  .columns div{
    flex: 1;
    position: relative;
  }
  .columns .r span{
    display: inline-block;
    position: relative;
    left: 30px;
  }
  .services{
    display: flex;
    color: #333;
  }
  .each_service{
    flex: 1;
    padding: 20px 0;
    display: flex;
  }
  .each_service .icon{
    flex: 1;
    position: relative;
  }
  .each_service .icon img{
    width: 50%;
    position: absolute;
    right: 2px;
  }
  .each_service .txt{
    flex: 3;
    white-space: nowrap;
    font-size: 14px;
  }
</style>
