<template>
    <div class="person-money">

      <div class="item" v-for="(item, index) in items" :key="index">
        <div class="top">
          <span class="count">{{item.count}}</span>
          <span class="txt">{{item.txt}}</span>
        </div>
        <div class="bottom">
          <span class="describe">{{item.desc}}</span>
        </div>
      </div>

    </div>
</template>

<script>
  export default {
    name: "PersonMoney",
    data(){
      return {
        items: [
          {count: 0, txt: '元', desc: '我的余额'},
          {count: 0, txt: '个', desc: '我的优惠'},
          {count: 0, txt: '分', desc: '我的积分'},
        ]
      }
    },
  }
</script>

<style scoped>
  .person-money{
    width: 100%;
    height: 14%;
    display: flex;
    border-bottom: 2px solid #eee;
  }
  .item{
    flex: 1;
  }
  .item:nth-child(1), .item:nth-child(2){
    border-right: 2px solid #eee;
  }
  .item .top{
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 5px;
  }
  .top .count{
    color: #ff0031;
    font-size: 30px;
    font-weight: 500;
    margin-right: 5px;
  }
  .item .bottom{
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .item .bottom .describe{
    margin-top: 5px;
  }

</style>
