<template>
  <div class="home_box">
    <NavBar class="nav-bar">
      <div slot="center">首页</div>
    </NavBar>
    <ContinuPlay :banners="banners"></ContinuPlay>
    <Recommends :recommends="recommends"></Recommends>
    <WeekHot></WeekHot>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  //获取网络请求,请求数据
  import {GetHomeDate} from "../../network/home";

  import NavBar from "../../components/common/navbar/NavBar";
  import ContinuPlay from "./childrenVue/ContinuPlay";
  import Recommends from "./childrenVue/Recommends";
  import WeekHot from "./childrenVue/WeekHot";

  export default {
    name: "Home",
    components:{
      NavBar,
      ContinuPlay,
      Recommends,
      WeekHot
    },
    data(){
      return {
        banners: '',
        recommends: '',

      }
    },
    created() {
      GetHomeDate().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }

  }
</script>

<style scoped>
  .home_box{
    padding-top: 44px;
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

</style>
