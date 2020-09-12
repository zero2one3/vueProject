<template>
  <div class="detail">
    <DetailNavBaritem class="navbar clear-fix" @navbarClick="navbarClick" ref="navbar"/>

    <Scroll :probe-type="3"
            :pull-up-load="true"
            class="scroll"
            ref="scroll"
            @scroll="contentsScroll">
      <ContinuePlayDetail :banners="topImgaes" class="deftailPlay"/>
      <TitleInfo :goods="goods" />
      <ShopInfo :shop="shop"/>
      <GoodsInfo :detail-info="detailInfo" @goodsImgLoad="goodsImgLoad"/>
      <Params :paramInfo= 'goodsParams' ref="params"/>
      <Comments :commentInfo="commentsInfo" ref="comment"/>
      <Commend :recommends="recommends" ref="commend"/>
    </Scroll>
    <DetailBottomBar @addToCart="addToCart"/>
    <BackTop @click.native="BackTopClick" v-show="backUp_isShow"/>
    <Alert :is-show="alert_isShow"/>
  </div>
</template>

<script>
  import {GetDetailDate, GetCommend,GoodsDate, Shop, GoodsParams} from "../../network/detail";

  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backtop/BackTop";
  import Alert from "./childrenVue/Alert";

  import DetailNavBaritem from "./childrenVue/DetailNavBaritem";
  import ContinuePlayDetail from "./childrenVue/ContinuePlayDetail";
  import TitleInfo from "./childrenVue/TitleInfo";
  import ShopInfo from "./childrenVue/ShopInfo";
  import GoodsInfo from "./childrenVue/GoodsInfo";
  import Params from "./childrenVue/GoodsParams";
  import Comments from "./childrenVue/Comments";
  import Commend from "./childrenVue/Commend";
  import DetailBottomBar from "./childrenVue/DetailBottomBar";

  export default {
    name: "Detail",
    components: {
      Scroll,
      BackTop,
      Alert,
      DetailNavBaritem,
      ContinuePlayDetail,
      TitleInfo,
      ShopInfo,
      GoodsInfo,
      Params,
      Comments,
      Commend,
      DetailBottomBar
    },
    data(){
      return{
        iid: null,                 //商品iid值
        topImgaes: [],             //详情页轮播图图片
        goods: {},                 //详情页商品基本信息
        shop: {},                  //详情页店铺信息
        detailInfo:{},             //商品详情信息
        goodsParams: {},           //商品参数信息
        commentsInfo: {},          //商品评论信息
        recommends: {},            //详情页底部推荐商品
        backUp_isShow: false,      //记录返回顶部按钮的状态
        followY: [],               //记录滚动Y方向的位置
        navbarIndex: 0,            //记录当前滚动位置对应导航栏中哪个标签
        alert_isShow: false,       //记录'成功加入购物车弹框的状态'

      }
    },
    created() {
      //获取当前iid
      this.iid = this.$route.params.iid
      //请求商品数据
      this.GetDetailDates()
      //请求商品推荐数据
      GetCommend().then(res => {
        this.recommends = res.data.list
      })
    },
    methods: {
      //请求详情页数据
      GetDetailDates(){
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
        this.isTabShow = (-position.y) > this.tabcontrolTop
        //滚动内容时将内容坐标与导航栏标题匹配起来
        if(-position.y >= this.followY[0] && -position.y < this.followY[1]){this.$refs.navbar.currentTitle = 0}
        else if(-position.y >= this.followY[1] && -position.y < this.followY[2]){this.$refs.navbar.currentTitle = 1}
        else if(-position.y >= this.followY[2] && -position.y < this.followY[3]){this.$refs.navbar.currentTitle = 2}
        else if(-position.y >= this.followY[3]){this.$refs.navbar.currentTitle = 3}
      },
      //点击详情页导航栏，跳转相应位置
      navbarClick(index){
        this.$refs.scroll.scroll.scrollTo(0, -this.followY[index], 500)
        this.navbarIndex = index
      },
      //监听详情页的加入购物车事件
      addToCart(){
        //先获取添加的商品需要在购物车展示的数据
        const cartgoods = {}
        cartgoods.iid = this.iid
        cartgoods.image = this.topImgaes[0]
        cartgoods.title = this.goods.title
        cartgoods.price = this.goods.realPrice
        cartgoods.desc = this.goods.desc
        cartgoods.count = 1
        //将商品添加到vuex中
        this.$store.dispatch('addGoods', cartgoods)
        //在此页面显示‘成功加入购物车的弹框’
        this.alert_isShow = true
        setTimeout(() => {this.alert_isShow =false},2000)
      },
    },
    mounted() {
      //监听推荐图片信息的加载更新，刷新滚动距离
      this.$bus.$on('Commendhasload', () => {
        //刷新滚动距离
        this.$refs.scroll.scroll.refresh()
      })
    },
    updated() {
      //获取详情页参数、评论、推荐  三个组件的TopY值
      this.followY = []
      this.followY.push(0)
      this.followY.push(this.$refs.params.$el.offsetTop)
      this.followY.push(this.$refs.comment.$el.offsetTop)
      this.followY.push(this.$refs.commend.$el.offsetTop)
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
