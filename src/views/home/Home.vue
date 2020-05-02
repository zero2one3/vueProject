<template>
  <div class="home_box">
    <NavBar class="nav-bar">
      <div slot="center">首页</div>
    </NavBar>

    <Scroll class="scroll"
            ref="scroll"
            :probe-type="3"
            @scroll="contentsScroll"
            @pullingUp="loadmore">
      <ContinuPlay :banners="banners"/>
      <Recommends :recommends="recommends"/>
      <WeekHot/>
      <TabControl :controlItems="['流行','新款','精选']" @tabControlClick="GetGoodsType"/>
      <Goods :goods="Goods[currentGoodsType].list"/>
    </Scroll>

    <back-top @click.native="BackTopClick" v-show="backUp_isShow"/>
  </div>
</template>

<script>
  import {GetHomeDate, GetHomeGoods} from "../../network/home";

  import NavBar from "../../components/common/navbar/NavBar";
  import TabbarItem from "../../components/common/tabbar/TabbarItem";
  import TabControl from "../../components/content/tabcontrol/TabControl";

  import ContinuPlay from "./childrenVue/ContinuPlay";
  import Recommends from "./childrenVue/Recommends";
  import WeekHot from "./childrenVue/WeekHot";
  import Goods from "../../components/content/goods/Goods";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backtop/BackTop";

  export default {
    name: "Home",
    components:{
      NavBar,
      TabbarItem,
      TabControl,
      ContinuPlay,
      Recommends,
      WeekHot,
      Goods,
      Scroll,
      BackTop
    },
    data(){
      return {
        banners: '',
        recommends: '',
        Goods: {
          pop : {page: 0, list: []},
          new : {page: 0, list: []},
          sell : {page: 0, list: []},
        },
        currentGoodsType: 'pop',
        backUp_isShow: false

      }
    },
    created() {
      //请求Home页面的数据
      this.GetHomeDate()
      this.GetHomeGoods('pop')
      this.GetHomeGoods('new')
      this.GetHomeGoods('sell')
      //在事件总线监听goods图片是否加载完成
      this.$bus.$on('Imghasload', () => {
        this.$refs.scroll.scroll.refresh()
      })
    },
    methods:{
      //接收Home页面的数据
      GetHomeDate(){
        GetHomeDate().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      //接收Home页面的下划商品数据
      GetHomeGoods(type){
        this.Goods[type].page ++
        GetHomeGoods(type, this.Goods[type].page).then(res => {
          this.Goods[type].list.push(...res.data.list)
        })
      },
      GetGoodsType(type){
        this.currentGoodsType = type
      },
      //返回顶部
      BackTopClick(){
        this.$refs.scroll.scroll.scrollTo(0,0,500)
      },
      //判断backtop的显示和隐藏
      contentsScroll(position){
        this.backUp_isShow = (-position.y) > 1000
      },
      loadmore(){
        this.GetHomeGoods(this.currentGoodsType)
        this.$refs.scroll.scroll.finishPullUp()
      }
    }

  }
</script>

<style scoped>
  .home_box{
    padding-top: 44px;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .nav-bar{
    background: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
  }
  .scroll{
    width: 100%;
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;

  }
</style>
