<template>
  <div class="detail">
    <DetailNavBaritem />
    <ContinuePlayDetail :banners="topImgaes"/>
    <TitleInfo :goods="goods"/>

  </div>
</template>

<script>
  import {GetDetailDate, GoodsInfo} from "../../network/detail";

  import DetailNavBaritem from "./childrenVue/DetailNavBaritem";
  import ContinuePlayDetail from "./childrenVue/ContinuePlayDetail";
  import TitleInfo from "./childrenVue/TitleInfo";
  export default {
    name: "Detail",
    components: {
      DetailNavBaritem,
      ContinuePlayDetail,
      TitleInfo
    },
    data(){
      return{
        iid: null,
        topImgaes: [],
        goods: ''
      }
    },
    created() {
      //获取当前iid
      this.iid = this.$route.params.iid
      //请求数据
      this.GetDetailDate()
    },
    methods: {
      //请求详情页数据
      GetDetailDate(){
        GetDetailDate(this.iid).then(res => {
          const data = res.result
          this.topImgaes = data.itemInfo.topImages

          this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
          console.log(res)
        })
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
