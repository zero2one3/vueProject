<template>
  <div class="detail">
    <DetailNavBaritem class="navbar clear-fix"/>

    <Scroll :probe-type="3"
            :pull-up-load="true"
            class="scroll"
            ref="scroll"
            @scroll="contentsScroll">
      <ContinuePlayDetail :banners="topImgaes" class="deftailPlay"/>
      <TitleInfo :goods="goods" />
      <ShopInfo :shop="shop"/>
      <GoodsInfo :detail-info="detailInfo"/>
      <Params :paramInfo= 'goodsParams'/>
      <Comments :commentInfo="commentsInfo"/>
      <Commend :recommends="recommends"/>
    </Scroll>
    <BackTop @click.native="BackTopClick" v-show="backUp_isShow"/>
  </div>
</template>

<script>
  import {GetDetailDate, GetCommend,GoodsDate, Shop, GoodsParams} from "../../network/detail";

  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backtop/BackTop";

  import DetailNavBaritem from "./childrenVue/DetailNavBaritem";
  import ContinuePlayDetail from "./childrenVue/ContinuePlayDetail";
  import TitleInfo from "./childrenVue/TitleInfo";
  import ShopInfo from "./childrenVue/ShopInfo";
  import GoodsInfo from "./childrenVue/GoodsInfo";
  import Params from "./childrenVue/GoodsParams";
  import Comments from "./childrenVue/Comments";
  import Commend from "./childrenVue/Commend";

  export default {
    name: "Detail",
    components: {
      Scroll,
      BackTop,
      DetailNavBaritem,
      ContinuePlayDetail,
      TitleInfo,
      ShopInfo,
      GoodsInfo,
      Params,
      Comments,
      Commend
    },
    data(){
      return{
        iid: null,
        topImgaes: [],
        goods: {},
        shop: {},
        detailInfo:{},
        goodsParams: {},
        commentsInfo: {},
        recommends: {},
        backUp_isShow: false,
      }
    },
    created() {
      //获取当前iid
      this.iid = this.$route.params.iid
      //请求商品数据
      this.GetDetailDate()
      //请求商品推荐数据
      GetCommend().then(res => {
        this.recommends = res.data.list
      })
    },
    methods: {
      //请求详情页数据
      GetDetailDate(){
        GetDetailDate(this.iid).then(res => {
          const data = res.result
          //获取轮播图图片
          this.topImgaes = data.itemInfo.topImages
          //获取商品标题信息
          this.goods = new GoodsDate(data.itemInfo, data.columns, data.shopInfo.services)
          //获取商家店铺信息
          this.shop = new Shop(data.shopInfo)
          //获取商品详情信息
          this.detailInfo = data.detailInfo
          //获取商品参数信息
          this.goodsParams = new GoodsParams(data.itemParams)
          //获取用户评论信息(本项目中只有一条评论信息，所以只获取一条)
          if(data.rate.list){
            this.commentsInfo = data.rate.list[0]
          }
          //如果没有用户评论就返回还没有用户进行评论
          // else{
          //   this.commentsInfo = '还没有用户进行评论'
          // }
        })
      },
      //检测商品详情图片是否加载完成
      goodsImgLoad(){
        this.$refs.scroll.scroll.refresh()
      },
      //点击返回顶部
      BackTopClick(){
        this.$refs.scroll.scroll.scrollTo(0,0,500)
      },
      //判断backtop的显示和隐藏
      contentsScroll(position){
        //判断返回顶部按钮的隐藏和出现
        this.backUp_isShow = (-position.y) > 1000
        //判断tabcontrol是否吸顶
        this.isTabShow = (-position.y) >this.tabcontrolTop
      },
    },
    mounted() {
      //监听推荐图片信息的加载更新，刷新滚动距离
      this.$bus.$on('Commendhasload', () => {
        //刷新滚动距离
        this.$refs.scroll.scroll.refresh()
      })
    },
    beforeDestroy() {
      //清除事件总线中的监听事件
      this.$bus.$off('Commendhasload')
    }
  }
</script>

<style scoped>
  .clear-fix :before{
    content: '';
    display: table;
  }
  .detail{
    height: 100%;
    width: 100%;
    margin-top: 0;
    position: relative;
    z-index: 101;
    background: #fff;
  }
  .navbar{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
  }
  .scroll{
    position: absolute;
    right: 0;
    left: 0;
    bottom: 49px;
    top: 44px;
    width: 100%;
    overflow: hidden;
  }
</style>
