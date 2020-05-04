<template>
    <div class="goodsInfo" v-if="Object.keys(detailInfo).length !== 0">

      <div class="info-desc">
        <div class="start"></div>
        <div class="desc">{{detailInfo.desc}}</div>
        <div class="end"></div>
      </div>

      <div class="key">{{detailInfo.detailImage[0].key}}</div>

      <div class="info-img">
        <img v-for="(item, index) in detailInfo.detailImage[0].list"
             :src="item"
             :key="index"
             alt=""
             class="each-img"
             @load="imgLoad(index, detailInfo.detailImage[0].list.length)">
      </div>

    </div>
</template>

<script>
  export default {
    name: "GoodsInfo",
    props: {
      detailInfo: {
        type: Object
      }
    },
    data(){
      return{
      }
    },
    methods: {
      //可以优化性能（只传回一次图片数量）
      imgLoad(index, length){
        if(index === length){
          this.$emit('goodsImgLoad')
        }
      }
    }
  }
</script>

<style scoped>
  .goodsInfo{
    padding-top: 20px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-desc{
    padding: 0 15px;
  }
  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .info-desc .start {
    float: left;
  }
  .info-desc .end {
    float: right;
  }
  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .info-desc .end::after {
    right: 0;
  }
  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }
  .key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .info-img img {
    width: 100%;
  }
</style>
