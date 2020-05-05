<template>
  <div class="home_box">
    <NavBar class="nav-bar">
      <div slot="center">首页</div>
    </NavBar>
    <!-- Tabcontrol吸顶备用标签 -->
    <TabControl
      :controlItems="['流行','新款','精选']"
      @tabControlClick="GetGoodsType"
      ref="tabcontrolFade"
      :class="{fixed:isTabShow}"
      v-show="isTabShow"/>

    <Scroll class="scroll"
            ref="scroll"
            :probe-type="3"
            :pullUpLoad="true"
            @scroll="contentsScroll"
            @pullingUp="loadmore">
      <ContinuePlayHome :banners="banners"/>
      <Recommends :recommends="recommends"/>
      <WeekHot/>
      <TabControl :controlItems="['流行','新款','精选']" @tabControlClick="GetGoodsType" ref="tabcontrol"/>
      <Goods :goods="Goods[currentGoodsType].list" whichgoods="home"/>
    </Scroll>

    <back-top @click.native="BackTopClick" v-show="backUp_isShow"/>
  </div>
</template>

<script>
  import {GetHomeDate, GetHomeGoods} from "../../network/home";

  import NavBar from "../../components/common/navbar/NavBar";
  import TabbarItem from "../../components/common/tabbar/TabbarItem";
  import TabControl from "../../components/content/tabcontrol/TabControl";


  import ContinuePlayHome from "./childrenVue/ContinuePlayHome";
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
      ContinuePlayHome,
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
        backUp_isShow: false,       //判断是否显示backup
        tabcontrolTop: 0,           //记录tabcontrol离顶部的距离
        isTabShow: false            //判断tabcontrol是否吸顶

      }
    },
    created() {
      //请求Home页面的数据
      this.GetHomeDate()
      this.GetHomeGoods('pop')
      this.GetHomeGoods('new')
      this.GetHomeGoods('sell')

    },
    mounted(){
      // const refresh = this.debounce(0)
      //在事件总线监听goods图片是否加载完成
      this.$bus.$on('Imghasload', () => {
        this.$refs.scroll.scroll.refresh()
        // refresh(this)
      })
      //在事件总线监听轮播图图片是否加载完成
      this.$bus.$on('playimaload', () => {
        this.tabcontrolTop = this.$refs.tabcontrol.$el.offsetTop
      })
    },
    methods:{
      //设置防抖方法优化性能   但有缺点，在下拉加载更多时，如果连续下拉，better-scroll就不会重新计算高度
      // debounce(delay){
      //   let timer = null
      //   return function(the) {
      //     if(timer) clearTimeout(timer)
      //     timer = setTimeout(() => {
      //       the.$refs.scroll.scroll.refresh
      //       console.log('---')
      //     }, delay)
      //   }
      // },
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
      GetGoodsType(type, index){
        //获得当前的Tabcontrol类型
        this.currentGoodsType = type
        //使两个tabcontrol的active保持一直
        this.$refs.tabcontrolFade.currentItem = index
        this.$refs.tabcontrol.currentItem = index
      },
      //返回顶部
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
      //实现页面可以多次滚动上拉加载功能
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
  .fixed{
    position: fixed;
    top: 44px;
    right: 0;
    left: 0;
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
